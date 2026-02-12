import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/authOptions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function safeTrim(v: string | undefined | null) {
  return (v ?? "").trim();
}

export async function POST(req: Request) {
  try {
    // 1) Must be signed in
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2) Read tier from body
    const body = await req.json().catch(() => ({}));
    const tier = String(body?.tier || "").toUpperCase(); // BASIC | PRO

    if (tier !== "BASIC" && tier !== "PRO") {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    // 3) Load plan IDs from DB (saved from Admin → Settings)
    const settings = await prisma.tierSettings.upsert({
      where: { id: "singleton" },
      create: { id: "singleton" },
      update: {},
      select: {
        currency: true,
        razorpayBasicPlanId: true,
        razorpayProPlanId: true,
        basicPrice: true,
        proPrice: true,
      },
    });

    const planId =
      tier === "BASIC" ? settings.razorpayBasicPlanId : settings.razorpayProPlanId;

    if (!planId) {
      return NextResponse.json({ error: "Missing plan id" }, { status: 400 });
    }

    // 4) Read Razorpay keys from env (trim!)
    const keyId = safeTrim(process.env.RAZORPAY_KEY_ID);
    const keySecret = safeTrim(process.env.RAZORPAY_KEY_SECRET);

    // Helpful debug (does not leak full secret)
    console.log("RZP KEY_ID len:", keyId.length, "starts:", keyId.slice(0, 6));
    console.log("RZP KEY_SECRET len:", keySecret.length, "starts:", keySecret.slice(0, 4));

    if (!keyId || !keySecret) {
      return NextResponse.json({ error: "Missing Razorpay keys" }, { status: 500 });
    }

    // 5) Create subscription using Razorpay REST API (no SDK)
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const payload = {
      plan_id: planId,
      customer_notify: 1,
      quantity: 1,
      // Razorpay requires total_count
      // keep high number for ongoing monthly membership
      total_count: 120,
      notes: {
        app_user_email: email,
        tier,
      },
    };

    const rpRes = await fetch("https://api.razorpay.com/v1/subscriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(payload),
    });

    const rpJson = await rpRes.json().catch(() => ({}));

    if (!rpRes.ok) {
      console.log("RZP create subscription failed:", rpRes.status, rpJson);
      return NextResponse.json(
        {
          error: rpJson?.error?.description || "Razorpay error",
          raw: rpJson,
          statusCode: rpRes.status,
        },
        { status: 500 }
      );
    }

    // 6) Return subscription + payment short_url (if available)
    return NextResponse.json({
      subscriptionId: rpJson.id,
      status: rpJson.status,
      shortUrl: rpJson.short_url || null,
      planId: rpJson.plan_id || planId,
    });
  } catch (e: any) {
    console.log("Subscription route crashed:", e);
    return NextResponse.json(
      { error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
