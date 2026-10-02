import { sqliteTable, text, integer, uniqueIndex } from "drizzle-orm/sqlite-core";

const id = () => text("id").primaryKey().$defaultFn(() => crypto.randomUUID());
const createdAt = () =>
  integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date());

export const users = sqliteTable("users", {
  id: id(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull(),
  createdAt: createdAt(),
});

export const orders = sqliteTable("orders", {
  id: id(),
  userId: text("user_id").notNull().references(() => users.id),
  stripeSessionId: text("stripe_session_id").notNull().unique(),
  amountTotal: integer("amount_total").notNull(), // in minor units (paise / cents)
  currency: text("currency").notNull(),
  createdAt: createdAt(),
});

export const purchases = sqliteTable(
  "purchases",
  {
    id: id(),
    userId: text("user_id").notNull().references(() => users.id),
    productId: text("product_id").notNull(),
    orderId: text("order_id").notNull().references(() => orders.id),
    createdAt: createdAt(),
  },
  (t) => [uniqueIndex("purchases_user_product").on(t.userId, t.productId)]
);

export type User = typeof users.$inferSelect;
