import { redirect } from "next/navigation";
import { getCurrentUser, safeNext } from "@/lib/auth";
import { AuthForm } from "../auth-form";

export const metadata = { title: "Sign up" };

export default async function Page(props: PageProps<"/signup">) {
  const { next } = await props.searchParams;
  const nextPath = typeof next === "string" ? safeNext(next) : undefined;
  if (await getCurrentUser()) redirect(nextPath ?? "/library");
  return <AuthForm mode="signup" next={nextPath} />;
}
