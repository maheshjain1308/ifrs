"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "./cart-provider";

export function BuyButtons({ productId, priceLabel }: { productId: string; priceLabel: string }) {
  const { items, add } = useCart();
  const router = useRouter();
  const inCart = items.includes(productId);

  return (
    <div className="flex flex-col gap-3">
      <button
        className="btn btn-primary w-full"
        onClick={() => {
          add(productId);
          router.push("/cart");
        }}
      >
        Buy now · {priceLabel}
      </button>
      {inCart ? (
        <Link href="/cart" className="btn w-full">
          In cart: view cart
        </Link>
      ) : (
        <button className="btn w-full" onClick={() => add(productId)}>
          Add to cart
        </button>
      )}
    </div>
  );
}
