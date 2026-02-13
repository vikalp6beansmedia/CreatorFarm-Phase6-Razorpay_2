import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function getAuthedSession() {
  const session = await getServerSession(authOptions);

  const uid = (session?.user as any)?.id as string | undefined;
  const role = String(((session?.user as any)?.role ?? "USER")).toUpperCase();
  const tier = String(((session?.user as any)?.tier ?? "NONE")).toUpperCase();
  const email = session?.user?.email || null;

  return { session, uid, role, tier, email };
}

export function isActiveTier(tier: string) {
  const t = String(tier || "NONE").toUpperCase();
  return t === "BASIC" || t === "PRO";
}

export function isAdminRole(role: string) {
  return String(role || "USER").toUpperCase() === "ADMIN";
}