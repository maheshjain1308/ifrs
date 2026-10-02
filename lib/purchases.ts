import "server-only";
import { and, desc, eq } from "drizzle-orm";
import { db, orders, purchases } from "@/lib/db";

export async function getOwnedProductIds(userId: string): Promise<Set<string>> {
  const rows = await db.select({ productId: purchases.productId }).from(purchases).where(eq(purchases.userId, userId));
  return new Set(rows.map((r) => r.productId));
}

export async function ownsProduct(userId: string, productId: string): Promise<boolean> {
  const row = await db.query.purchases.findFirst({
    where: and(eq(purchases.userId, userId), eq(purchases.productId, productId)),
  });
  return !!row;
}

export async function getOrders(userId: string) {
  return db.select().from(orders).where(eq(orders.userId, userId)).orderBy(desc(orders.createdAt));
}
