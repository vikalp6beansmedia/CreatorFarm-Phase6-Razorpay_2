// app/api/razorpay/webhook/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function verifySignature(rawBody: string, signatureHex: string, secret: string) {
  const expectedHex = crypto
    .createHmac("sha256", secret)
    .update(rawBody)
    .digest("hex");

  // Razorpay signature is hex. Compare bytes, not ascii strings.
  const expected = Buffer.from(expectedHex, "hex");
  const signature = Buffer.from((signatureHex || "").trim(), "hex");

  // timingSafeEqual throws if lengths differ
  if (expected.length !== signature.length) return false;

  return crypto.timingSafeEqual(expected, signature);
}

function mapPlanToTier(planId: string | null | undefined, settings: any) {
  if (!planId) return "NONE";
  if (planId === settings.razorpayBasicPlanId) return "BASIC";
  if (planId === settings.razorpayProPlanId) return "PRO";
  return "NONE";
}

export async function POST(req: Request) {
  const secret = (process.env.RAZORPAY_WEBHOOK_SECRET || "").trim();

  try {
    if (!secret) {
      return NextResponse.json(
        { error: "Missing RAZORPAY_WEBHOOK_SECRET in env" },
        { status: 500 }
      );
    }

    const signature = req.headers.get("x-razorpay-signature") || "";
    const rawBody = await req.text();

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const ok = verifySignature(rawBody, signature, secret);
    if (!ok) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const eventType: string = event?.event || "";

    // Load plan IDs from DB so we can map plan_id => BASIC/PRO
    const settings = await prisma.tierSettings.upsert({
      where: { id: "singleton" },
      create: { id: "singleton" },
      update: {},
      select: {
        razorpayBasicPlanId: true,
        razorpayProPlanId: true,
      },
    });

    const sub = event?.payload?.subscription?.entity;
    const pay = event?.payload?.payment?.entity;

    const notes = sub?.notes || pay?.notes || {};
    const email =
      notes?.app_user_email || notes?.email || notes?.user_email || null;

    // ---- subscription events ----
    const isSubEvent = [
      "subscription.activated",
      "subscription.resumed",
      "subscription.paused",
      "subscription.cancelled",
      "subscription.completed",
      "subscription.halted",
    ].includes(eventType);

    if (isSubEvent) {
      if (!sub?.id) {
        return NextResponse.json({ ok: true, note: "No subscription entity" });
      }

      const planId = sub?.plan_id;
      const tier = mapPlanToTier(planId, settings);

      await prisma.subscription.upsert({
        where: { razorpaySubscriptionId: sub.id },
        create: {
          razorpaySubscriptionId: sub.id,
          tier: tier as any,
          status: sub.status || eventType,
          userId: "TEMP",
          currentPeriodEnd: sub.current_end_at
            ? new Date(sub.current_end_at * 1000)
            : null,
        },
        update: {
          tier: tier as any,
          status: sub.status || eventType,
          currentPeriodEnd: sub.current_end_at
            ? new Date(sub.current_end_at * 1000)
            : null,
        },
      });

      if (email) {
        const user = await prisma.user.findUnique({ where: { email } });

        if (user) {
          const activeStatuses = new Set(["active"]);
          const cancelledStatuses = new Set([
            "cancelled",
            "expired",
            "completed",
            "halted",
          ]);

          let nextTier: "NONE" | "BASIC" | "PRO" = "NONE";
          if (activeStatuses.has(sub.status)) nextTier = tier as any;
          if (cancelledStatuses.has(sub.status)) nextTier = "NONE";
          if (sub.status === "paused") nextTier = user.tier as any;

          await prisma.user.update({
            where: { id: user.id },
            data: { tier: nextTier as any },
          });

          await prisma.subscription.update({
            where: { razorpaySubscriptionId: sub.id },
            data: { userId: user.id },
          });
        }
      }

      return NextResponse.json({ ok: true, handled: eventType });
    }

    // ---- payment events ----
    const isPayEvent = ["payment.captured", "payment.failed"].includes(eventType);

    if (isPayEvent) {
      if (!pay?.id) {
        return NextResponse.json({ ok: true, note: "No payment entity" });
      }

      const razorpayPaymentId = pay.id;
      const razorpayOrderId = pay.order_id || null;
      const razorpaySubscriptionId = pay.subscription_id || null;

      let userId: string | null = null;
      if (email) {
        const user = await prisma.user.findUnique({ where: { email } });
        userId = user?.id || null;
      }

      if (razorpaySubscriptionId) {
        await prisma.subscription.updateMany({
          where: { razorpaySubscriptionId },
          data: {
            razorpayPaymentId,
            razorpayOrderId,
            lastPaymentStatus: eventType === "payment.captured" ? "paid" : "failed",
            lastPaymentAt: new Date(),
            ...(eventType === "payment.captured" ? { status: "active" } : {}),
            ...(userId ? { userId } : {}),
          },
        });
      }

      return NextResponse.json({ ok: true, handled: eventType });
    }

    return NextResponse.json({ ok: true, ignored: eventType });
  } catch (e: any) {
    console.error("Webhook error:", e?.message || e);
    return NextResponse.json(
      { error: e?.message || "Webhook error" },
      { status: 500 }
    );
  }
}
