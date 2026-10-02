import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { STORE, getProduct, type Product } from "@/lib/catalog";
import { getOwnedProductIds } from "@/lib/purchases";
import { getStripe } from "@/lib/stripe";

const body = z.object({ productIds: z.array(z.string()).min(1).max(50) });

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Please log in to check out." }, { status: 401 });

  const parsed = body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid cart." }, { status: 400 });

  const owned = await getOwnedProductIds(user.id);
  const items = [...new Set(parsed.data.productIds)]
    .map(getProduct)
    .filter((p): p is Product => !!p && !owned.has(p.id));
  if (items.length === 0) {
    return NextResponse.json({ error: "You already own everything in your cart." }, { status: 400 });
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? req.nextUrl.origin;
  let session;
  try {
    session = await getStripe().checkout.sessions.create({
      mode: "payment",
      customer_email: user.email,
      client_reference_id: user.id,
      line_items: items.map((p) => ({
        quantity: 1,
        price_data: {
          currency: STORE.currency,
          unit_amount: Math.round(p.price * 100),
          product_data: { name: p.title, description: p.subtitle, metadata: { productId: p.id } },
        },
      })),
      metadata: { userId: user.id, productIds: items.map((p) => p.id).join(",") },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });
  } catch (err) {
    console.error("Failed to create Stripe Checkout session", err);
    return NextResponse.json({ error: "Payment provider unavailable. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ url: session.url });
}
