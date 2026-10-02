import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { eq } from "drizzle-orm";
import { db, users } from "@/lib/db";

const COOKIE = "session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function secret() {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 32) throw new Error("AUTH_SECRET must be set to a random string of at least 32 characters");
  return new TextEncoder().encode(s);
}

/** Must be called from a Server Action or Route Handler. */
export async function createSession(userId: string) {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(secret());
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession() {
  (await cookies()).delete(COOKIE);
}

export const getCurrentUser = cache(async () => {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret(), { algorithms: ["HS256"] });
    if (!payload.sub) return null;
    const user = await db.query.users.findFirst({ where: eq(users.id, payload.sub) });
    return user ? { id: user.id, email: user.email, name: user.name } : null;
  } catch {
    return null;
  }
});

/** Only allow same-site relative redirects after login. */
export function safeNext(next: unknown, fallback = "/library"): string {
  return typeof next === "string" && next.startsWith("/") && !next.startsWith("//") ? next : fallback;
}
