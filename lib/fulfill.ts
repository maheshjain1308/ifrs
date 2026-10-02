import "server-only";
import type Stripe from "stripe";
import { db, orders, purchases } from "@/lib/db";
import { getProduct } from "@/lib/catalog";
import { getStripe } from "@/lib/stripe";

/**
 * Grants access for a paid Checkout Session. Stripe is the source of truth:
 * the session is always re-fetched, and the call is idempotent, so it is safe
 * to run from both the webhook and the success page.
 */
export async function fulfillCheckout(sessionId: string): Promise<Stripe.Checkout.Session> {
  const session = await getStripe().checkout.sessions.retrieve(sessionId);
  if (session.payment_status !== "paid") return session;

  const userId = session.metadata?.userId;
  const productIds = (session.metadata?.productIds ?? "").split(",").filter((id) => getProduct(id));
  if (!userId || productIds.length === 0) {
    throw new Error(`Checkout session ${sessionId} is missing fulfilment metadata`);
  }

  await db.transaction(async (tx) => {
    await tx
      .insert(orders)
      .values({
        userId,
        stripeSessionId: session.id,
        amountTotal: session.amount_total ?? 0,
        currency: session.currency ?? "",
      })
      .onConflictDoNothing({ target: orders.stripeSessionId });

    const order = await tx.query.orders.findFirst({
      where: (o, { eq }) => eq(o.stripeSessionId, session.id),
    });
    if (!order) throw new Error("Order not found after insert");

    await tx
      .insert(purchases)
      .values(productIds.map((productId) => ({ userId, productId, orderId: order.id })))
      .onConflictDoNothing();
  });

  return session;
}
