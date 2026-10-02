import type { Metadata } from "next";
import Link from "next/link";
import { STORE } from "@/lib/catalog";
import { CartProvider } from "@/components/cart-provider";
import { Logo, SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${STORE.name} | Courses & Ebooks`, template: `%s | ${STORE.name}` },
  description: "Practical IFRS courses and ebooks for accountants, auditors and finance students.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <CartProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-gray-200 py-10">
            <div className="container-x flex flex-wrap justify-between gap-6 text-sm text-gray-500">
              <div className="space-y-2">
                <Logo />
                <p>Practical IFRS training for accountants, auditors and finance students.</p>
                <p>© {new Date().getFullYear()} {STORE.name}. All rights reserved.</p>
              </div>
              <div className="flex flex-col gap-1">
                <Link href="/?type=course#catalog">Courses</Link>
                <Link href="/?type=ebook#catalog">Ebooks</Link>
                <a href={`mailto:${STORE.supportEmail}`}>{STORE.supportEmail}</a>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
