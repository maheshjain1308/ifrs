import Link from "next/link";
import { productMeta, type Product } from "@/lib/catalog";
import { Cover } from "./cover";
import { Price } from "./price";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Cover product={product} className="aspect-[4/3]" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="leading-snug font-bold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.subtitle}</p>
        <p className="text-sm font-medium text-gray-500">{productMeta(product)}</p>
        <div className="mt-auto pt-2">
          <Price product={product} />
        </div>
      </div>
    </Link>
  );
}
