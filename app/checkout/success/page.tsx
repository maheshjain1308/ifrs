import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { formatPrice, getProduct } from "@/lib/catalog";
import { fulfillCheckout } from "@/lib/fulfill";
import { ClearCart } from "./clear-cart";

export const metadata = { title: "Thank you" };

export default async function SuccessPage(props: PageProps<"/checkout/success">) {
  const { session_id } = await props.searchParams;
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/library");
  if (typeof session_id !== "string") redirect("/library");

  // The webhook normally fulfils the order; doing it here as well (idempotently)
  // means access is granted instantly even if the webhook is delayed.
  const session = await fulfillCheckout(session_id).catch(() => null);
  const paid = session?.payment_status === "paid" && session.metadata?.userId === user.id;
  const items = paid ? (session.metadata?.productIds ?? "").split(",").map(getProduct).filter((p) => !!p) : [];

  return (
    <div className="container-x max-w-2xl py-20 text-center">
      {paid ? (
        <>
          <ClearCart />
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-600">✓</div>
          <h1 className="text-3xl font-extrabold">Thank you for your purchase!</h1>
          <p className="mt-3 text-gray-600">
            A receipt for {formatPrice((session.amount_total ?? 0) / 100)} has been emailed to {user.email}.
          </p>
          <ul className="mx-auto my-8 max-w-md space-y-2 text-left">
            {items.map((p) => (
              <li key={p.id} className="rounded-lg border border-gray-200 px-4 py-3 font-medium">{p.title}</li>
            ))}
          </ul>
          <Link href="/library" className="btn btn-primary">Go to my library</Link>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-extrabold">Payment processing</h1>
          <p className="mt-3 text-gray-600">
            We haven&apos;t received confirmation from the payment provider yet. Your purchase will appear in your
            library as soon as it&apos;s confirmed.
          </p>
          <Link href="/library" className="btn btn-primary mt-8">Go to my library</Link>
        </>
      )}
    </div>
  );
}
