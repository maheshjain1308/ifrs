import type { Product } from "@/lib/catalog";

export function Cover({
  product,
  className = "",
  compact = false,
}: {
  product: Pick<Product, "type" | "title" | "color">;
  className?: string;
  /** Small thumbnail: shows only the type badge. */
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden text-white ${compact ? "p-2" : "p-5"} ${className}`}
      style={{ background: `linear-gradient(135deg, ${product.color}, color-mix(in srgb, ${product.color} 55%, #000))` }}
    >
      <span className="self-start rounded-md bg-white/20 px-2 py-0.5 text-[0.7rem] font-bold tracking-widest">
        {product.type === "course" ? "COURSE" : "EBOOK"}
      </span>
      {!compact && <span className="relative z-10 text-xl leading-tight font-extrabold">{product.title}</span>}
      <span className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/10" />
    </div>
  );
}
