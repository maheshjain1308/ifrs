"use client";

import Link from "next/link";
import { useActionState } from "react";
import { login, signup, type AuthState } from "./actions";

export function AuthForm({ mode, next }: { mode: "login" | "signup"; next?: string }) {
  const [state, action, pending] = useActionState<AuthState, FormData>(mode === "login" ? login : signup, {});
  const nextQuery = next ? `?next=${encodeURIComponent(next)}` : "";

  return (
    <div className="container-x flex justify-center py-16">
      <form action={action} className="w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-extrabold">{mode === "login" ? "Log in" : "Create your account"}</h1>
        <p className="text-gray-600">
          {mode === "login" ? "Access your courses and ebooks." : "Your purchases are saved to your account."}
        </p>
        {next && <input type="hidden" name="next" value={next} />}
        {mode === "signup" && (
          <label className="block space-y-1">
            <span className="text-sm font-medium">Name</span>
            <input name="name" required autoComplete="name" defaultValue={state.name} className="input" />
          </label>
        )}
        <label className="block space-y-1">
          <span className="text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" defaultValue={state.email} className="input" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium">Password</span>
          <input
            name="password"
            type="password"
            required
            minLength={mode === "signup" ? 8 : undefined}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            className="input"
          />
        </label>
        {state.error && <p className="text-sm text-red-600" role="alert">{state.error}</p>}
        <button disabled={pending} className="btn btn-primary w-full">
          {pending ? "Please wait…" : mode === "login" ? "Log in" : "Create account"}
        </button>
        <p className="text-center text-sm text-gray-600">
          {mode === "login" ? (
            <>New here? <Link href={`/signup${nextQuery}`} className="font-semibold text-brand">Create an account</Link></>
          ) : (
            <>Already have an account? <Link href={`/login${nextQuery}`} className="font-semibold text-brand">Log in</Link></>
          )}
        </p>
      </form>
    </div>
  );
}
