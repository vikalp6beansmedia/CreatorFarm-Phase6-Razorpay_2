import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

/**
 * Admin login:
 *   use ADMIN_EMAIL + ADMIN_PASSWORD from .env
 *
 * Customer login:
 *   users created via /signup (hashed passwords)
 */
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },

  providers: [
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

        // 1) ADMIN LOGIN
        if (adminEmail && adminPassword && email === adminEmail) {
          if (password !== adminPassword) return null;

          const admin = await prisma.user.upsert({
            where: { email },
            create: { email, name: "Admin", role: "ADMIN" },
            update: { role: "ADMIN" },
            select: { id: true, email: true, name: true, role: true, tier: true },
          });

          return { id: admin.id, email: admin.email!, name: admin.name ?? "Admin" };
        }

        // 2) CUSTOMER LOGIN
        const user = await prisma.user.findUnique({
          where: { email },
          select: { id: true, email: true, name: true, password: true, role: true, tier: true },
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
    async jwt({ token }) {
      if (token?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: String(token.email) },
          select: { tier: true, id: true, role: true },
        });
        (token as any).tier = dbUser?.tier ?? "NONE";
        (token as any).uid = dbUser?.id;
        (token as any).role = dbUser?.role ?? "USER";
      }
      return token;
    },

    async session({ session, token }) {
      (session as any).tier = (token as any).tier ?? "NONE";
      (session as any).uid = (token as any).uid;
      (session as any).role = (token as any).role ?? "USER";
      return session;
    },
  },
};
