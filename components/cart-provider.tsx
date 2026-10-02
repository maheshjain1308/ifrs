"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Cart = {
  items: string[];
  /** False until the saved cart has been read from localStorage. */
  ready: boolean;
  add: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<Cart | null>(null);
const KEY = "cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "[]");
      if (Array.isArray(saved)) setItems(saved.filter((x) => typeof x === "string"));
    } catch {}
    setReady(true);
  }, []);

  const update = useCallback((fn: (prev: string[]) => string[]) => {
    setItems((prev) => {
      const next = fn(prev);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const value = useMemo<Cart>(
    () => ({
      items,
      ready,
      add: (id) => update((prev) => (prev.includes(id) ? prev : [...prev, id])),
      remove: (id) => update((prev) => prev.filter((x) => x !== id)),
      clear: () => update(() => []),
    }),
    [items, ready, update]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside <CartProvider>");
  return cart;
}
