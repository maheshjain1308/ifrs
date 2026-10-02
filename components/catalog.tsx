"use client";

import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { ProductCard } from "./product-card";

const TABS = [
  { value: "all", label: "All" },
  { value: "course", label: "Courses" },
  { value: "ebook", label: "Ebooks" },
] as const;

export function Catalog({ products, initialType = "all" }: { products: Product[]; initialType?: string }) {
  const [type, setType] = useState(initialType);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = products.filter(
    (p) =>
      (type === "all" || p.type === type) &&
      (!q || `${p.title} ${p.subtitle} ${p.description}`.toLowerCase().includes(q))
  );

  return (
    <>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {TABS.map((t) => (
            <button
              key={t.value}
              onClick={() => setType(t.value)}
              className={`rounded-full border px-4 py-1.5 font-semibold ${
                type === t.value ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 bg-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses & ebooks…"
          className="input sm:max-w-xs"
        />
      </div>
      {visible.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products match your search.</p>
      )}
    </>
  );
}
