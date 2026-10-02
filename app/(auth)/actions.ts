"use server";

import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createSession, destroySession, safeNext } from "@/lib/auth";
import { db, users } from "@/lib/db";

export type AuthState = { error?: string; email?: string; name?: string };

const signupSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email.").transform((e) => e.toLowerCase()),
  password: z.string().min(8, "Password must be at least 8 characters.").max(200),
});

const loginSchema = z.object({
  email: z.string().trim().toLowerCase(),
  password: z.string(),
});

export async function signup(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const raw = Object.fromEntries(formData);
  const parsed = signupSchema.safeParse(raw);
  const keep = { email: String(raw.email ?? ""), name: String(raw.name ?? "") };
  if (!parsed.success) return { ...keep, error: parsed.error.issues[0].message };

  const { name, email, password } = parsed.data;
  if (await db.query.users.findFirst({ where: eq(users.email, email) })) {
    return { ...keep, error: "An account with this email already exists. Try logging in." };
  }

  const [user] = await db
    .insert(users)
    .values({ name, email, passwordHash: await bcrypt.hash(password, 12) })
    .returning({ id: users.id });
  await createSession(user.id);
  redirect(safeNext(formData.get("next")));
}

export async function login(_prev: AuthState, formData: FormData): Promise<AuthState> {
  const { email, password } = loginSchema.parse({
    email: formData.get("email") ?? "",
    password: formData.get("password") ?? "",
  });
  const user = await db.query.users.findFirst({ where: eq(users.email, email) });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return { email, error: "Incorrect email or password." };
  }
  await createSession(user.id);
  redirect(safeNext(formData.get("next")));
}

export async function logout() {
  await destroySession();
  redirect("/");
}
