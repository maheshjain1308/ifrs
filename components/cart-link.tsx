"use client";

import Link from "next/link";
import { useCart } from "./cart-provider";

export function CartLink() {
  const { items } = useCart();
  return (
    <Link href="/cart" className="relative font-medium text-gray-900" aria-label={`Cart, ${items.length} items`}>
      Cart
      {items.length > 0 && (
        <span className="absolute -top-2 -right-4 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-xs font-bold text-white">
          {items.length}
        </span>
      )}
    </Link>
  );
}
