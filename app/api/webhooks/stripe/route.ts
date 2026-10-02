import { NextResponse, type NextRequest } from "next/server";
import { fulfillCheckout } from "@/lib/fulfill";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) return NextResponse.json({ error: "Webhook not configured" }, { status: 400 });

  let event;
  try {
    event = getStripe().webhooks.constructEvent(await req.text(), signature, secret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded":
      await fulfillCheckout(event.data.object.id);
      break;
  }

  return NextResponse.json({ received: true });
}
