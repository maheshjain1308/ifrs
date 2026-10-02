"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatPrice, getProduct, type Product } from "@/lib/catalog";
import { useCart } from "@/components/cart-provider";
import { Cover } from "@/components/cover";

export default function CartPage() {
  const { items, ready, remove } = useCart();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const products = items.map(getProduct).filter((p): p is Product => !!p);
  const total = products.reduce((sum, p) => sum + p.price, 0);

  async function checkout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productIds: products.map((p) => p.id) }),
      });
      if (res.status === 401) return router.push("/login?next=/cart");
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Could not start checkout.");
      window.location.assign(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start checkout.");
      setLoading(false);
    }
  }

  return (
    <div className="container-x max-w-3xl py-14">
      <h1 className="mb-8 text-3xl font-extrabold">Your cart</h1>
      {!ready ? null : products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center">
          <p className="mb-4 text-gray-600">Your cart is empty.</p>
          <Link href="/#catalog" className="btn btn-primary">Browse products</Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
            {products.map((p) => (
              <li key={p.id} className="flex items-center gap-4 p-4">
                <Cover product={p} compact className="hidden aspect-[4/3] w-24 shrink-0 rounded-lg sm:flex" />
                <div className="flex-1">
                  <Link href={`/products/${p.id}`} className="font-semibold">{p.title}</Link>
                  <p className="text-sm text-gray-500 capitalize">{p.type}</p>
                </div>
                <span className="font-bold">{formatPrice(p.price)}</span>
                <button onClick={() => remove(p.id)} className="text-sm text-gray-500 hover:text-red-600">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-end gap-3">
            <p className="text-xl">
              Total: <span className="font-extrabold">{formatPrice(total)}</span>
            </p>
            {error && <p className="text-red-600" role="alert">{error}</p>}
            <button onClick={checkout} disabled={loading} className="btn btn-primary">
              {loading ? "Redirecting to Stripe…" : "Checkout securely"}
            </button>
            <p className="text-sm text-gray-500">You&apos;ll be asked to log in or create an account first.</p>
          </div>
        </>
      )}
    </div>
  );
}
