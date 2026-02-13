import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

/**
 * Providers:
 *  - Google OAuth
 *  - Magic link (Email)
 *  - Credentials (password users + env-based admin)
 *
 * Admin login (Credentials):
 *   ADMIN_EMAIL + ADMIN_PASSWORD in env
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  // ✅ IMPORTANT: Chat-working project uses JWT, because we store tier/role/uid on token then expose on session root
  session: { strategy: "jwt" },

  providers: [
    // Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    // Magic Link Email (supports HOST/PORT/USER/PASS style envs)
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT || 587),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),

    // Credentials (Admin + normal users created via /signup)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(creds) {
        const email = (creds?.email ?? "").toLowerCase().trim();
        const password = String(creds?.password ?? "");

        if (!email || !password) return null;

        const adminEmail = (process.env.ADMIN_EMAIL ?? "").toLowerCase().trim();
        const adminPassword = String(process.env.ADMIN_PASSWORD ?? "");

        // 1) ✅ ADMIN LOGIN (env-based)
        if (adminEmail && adminPassword && email === adminEmail) {
          if (password !== adminPassword) return null;

          const admin = await prisma.user.upsert({
            where: { email },
            create: { email, name: "Admin", role: "ADMIN", tier: "PRO" },
            update: { role: "ADMIN" },
            select: { id: true, email: true, name: true },
          });

          return { id: admin.id, email: admin.email!, name: admin.name ?? "Admin" };
        }

        // 2) ✅ CUSTOMER LOGIN (password users)
        const user = await prisma.user.findUnique({
          where: { email },
          select: { id: true, email: true, name: true, password: true },
        });

        if (!user?.password) return null;

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return null;

        return { id: user.id, email: user.email!, name: user.name ?? "User" };
      },
    }),
  ],

  pages: { signIn: "/signin" },

  callbacks: {
    // ✅ Keep tier/role/uid always fresh by reading from DB during jwt
    async jwt({ token, user }) {
      const email = String(user?.email ?? token?.email ?? "").toLowerCase().trim();

      if (email) {
        const dbUser = await prisma.user.findUnique({
          where: { email },
          select: { tier: true, id: true, role: true },
        });

        (token as any).tier = dbUser?.tier ?? "NONE";
        (token as any).uid = dbUser?.id ?? null;
        (token as any).role = dbUser?.role ?? "USER";
      }

      return token;
    },

    // ✅ Expose EXACTLY what chat expects on the session ROOT:
    // session.uid, session.tier, session.role
    async session({ session, token }) {
      const uid = (token as any).uid ?? null;

      (session as any).tier = (token as any).tier ?? "NONE";
      (session as any).uid = uid;
      (session as any).role = (token as any).role ?? "USER";

      // also expose user.id (useful elsewhere)
      if (session.user && uid) (session.user as any).id = uid;

      return session;
    },
  },
};
