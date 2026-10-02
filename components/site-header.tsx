import Link from "next/link";
import { STORE } from "@/lib/catalog";
import { getCurrentUser } from "@/lib/auth";
import { logout } from "@/app/(auth)/actions";
import { CartLink } from "./cart-link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-lg font-extrabold">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm text-white">IA</span>
      {STORE.name}
    </Link>
  );
}

export async function SiteHeader() {
  const user = await getCurrentUser();
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-5 text-sm sm:gap-7 sm:text-base">
          <Link href="/?type=course#catalog" className="hidden font-medium sm:block">
            Courses
          </Link>
          <Link href="/?type=ebook#catalog" className="hidden font-medium sm:block">
            Ebooks
          </Link>
          {user ? (
            <>
              <Link href="/library" className="font-medium">
                My library
              </Link>
              <form action={logout}>
                <button className="font-medium text-gray-500 hover:text-gray-900">Log out</button>
              </form>
            </>
          ) : (
            <Link href="/login" className="font-medium">
              Log in
            </Link>
          )}
          <CartLink />
        </div>
      </nav>
    </header>
  );
}
