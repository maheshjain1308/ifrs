import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, formatPrice, getProduct, productMeta } from "@/lib/catalog";
import { getCurrentUser } from "@/lib/auth";
import { ownsProduct } from "@/lib/purchases";
import { BuyButtons } from "@/components/buy-buttons";
import { Cover } from "@/components/cover";
import { Price } from "@/components/price";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata(props: PageProps<"/products/[id]">): Promise<Metadata> {
  const product = getProduct((await props.params).id);
  return product ? { title: product.title, description: product.subtitle } : {};
}

export default async function ProductPage(props: PageProps<"/products/[id]">) {
  const product = getProduct((await props.params).id);
  if (!product) notFound();

  const user = await getCurrentUser();
  const owned = user ? await ownsProduct(user.id, product.id) : false;

  return (
    <div className="container-x grid items-start gap-12 py-14 lg:grid-cols-[1fr_380px]">
      <div>
        <p className="mb-3 text-sm text-gray-500">
          <Link href="/" className="text-brand">Home</Link> /{" "}
          <Link href={`/?type=${product.type}#catalog`} className="text-brand">
            {product.type === "course" ? "Courses" : "Ebooks"}
          </Link>
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight">{product.title}</h1>
        <p className="mt-3 text-lg text-gray-600">{product.subtitle}</p>
        <p className="mt-2 text-sm font-medium text-gray-500">{productMeta(product)}</p>
        <p className="mt-6">{product.description}</p>

        {product.type === "course" && (
          <>
            <h2 className="mt-10 mb-4 text-2xl font-bold">Curriculum</h2>
            <ol className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
              {product.lessons.map((l, i) => (
                <li key={l.title} className="flex justify-between gap-4 px-5 py-3.5">
                  <span>
                    <span className="mr-3 text-gray-400">{String(i + 1).padStart(2, "0")}</span>
                    {l.title}
                  </span>
                  <span className="shrink-0 text-sm text-gray-500">{l.duration}</span>
                </li>
              ))}
            </ol>
          </>
        )}
      </div>

      <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg lg:sticky lg:top-24">
        <Cover product={product} className="aspect-[16/10] rounded-xl" />
        <div className="my-5">
          <Price product={product} large />
        </div>
        {owned ? (
          <Link href={product.type === "course" ? `/learn/${product.id}` : "/library"} className="btn btn-primary w-full">
            {product.type === "course" ? "Go to course" : "Download in your library"}
          </Link>
        ) : (
          <BuyButtons productId={product.id} priceLabel={formatPrice(product.price)} />
        )}
        <ul className="my-5 space-y-1.5">
          {product.includes.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="font-extrabold text-emerald-600">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">Secure checkout by Stripe. Instant access after purchase. 7-day refund guarantee.</p>
      </aside>
    </div>
  );
}
