import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { PRODUCTS, formatPrice, productMeta } from "@/lib/catalog";
import { getOrders, getOwnedProductIds } from "@/lib/purchases";
import { Cover } from "@/components/cover";

export const metadata = { title: "My library" };

export default async function LibraryPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/library");

  const [owned, orders] = await Promise.all([getOwnedProductIds(user.id), getOrders(user.id)]);
  const products = PRODUCTS.filter((p) => owned.has(p.id));

  return (
    <div className="container-x py-14">
      <h1 className="text-3xl font-extrabold">My library</h1>
      <p className="mt-1 text-gray-600">Welcome back, {user.name}.</p>

      {products.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 p-10 text-center">
          <p className="mb-4 text-gray-600">You haven&apos;t bought anything yet.</p>
          <Link href="/#catalog" className="btn btn-primary">Browse products</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200">
              <Cover product={p} className="aspect-[16/9]" />
              <div className="flex flex-1 flex-col gap-1 p-5">
                <h2 className="font-bold">{p.title}</h2>
                <p className="mb-4 text-sm text-gray-500">{productMeta(p)}</p>
                {p.type === "course" ? (
                  <Link href={`/learn/${p.id}`} className="btn btn-primary mt-auto">Start learning</Link>
                ) : (
                  <a href={`/api/download/${p.id}`} className="btn btn-primary mt-auto">Download PDF</a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {orders.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-xl font-bold">Order history</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 font-medium">Order</th>
                  <th className="px-5 py-3 text-right font-medium">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((o) => (
                  <tr key={o.id}>
                    <td className="px-5 py-3">{o.createdAt.toLocaleDateString("en-IN", { dateStyle: "medium" })}</td>
                    <td className="px-5 py-3 font-mono text-xs text-gray-500">{o.id.slice(0, 8)}</td>
                    <td className="px-5 py-3 text-right font-semibold">{formatPrice(o.amountTotal / 100)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
