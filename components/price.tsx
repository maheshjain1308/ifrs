import { formatPrice, type Product } from "@/lib/catalog";

export function Price({ product, large = false }: { product: Product; large?: boolean }) {
  return (
    <span className="flex items-baseline gap-2">
      <span className={`font-extrabold ${large ? "text-3xl" : "text-xl"}`}>{formatPrice(product.price)}</span>
      {product.oldPrice && <s className="text-gray-500">{formatPrice(product.oldPrice)}</s>}
    </span>
  );
}
