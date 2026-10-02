import Link from "next/link";
import { PRODUCTS } from "@/lib/catalog";
import { Catalog } from "@/components/catalog";
import { Cover } from "@/components/cover";
import { ProductCard } from "@/components/product-card";

const FEATURES = [
  ["Practitioner-led", "Content built from real audits and reporting engagements, not just theory."],
  ["Worked examples", "Every topic comes with solved problems, journal entries and Excel templates."],
  ["Always current", "Free updates whenever the IASB issues or amends a standard."],
  ["Learn anywhere", "Stream courses on any device and download ebooks as PDF."],
];

const TESTIMONIALS = [
  ["The IFRS 9 ECL walkthrough finally made sense of our bank's impairment model.", "Priya S., Credit Risk Analyst"],
  ["The Pocket Guide sits on my desk. I use it every week during audit season.", "Rahul M., Audit Senior"],
  ["Clear, practical and well-structured. Helped me pass my DipIFR.", "Ananya K., Finance Student"],
];

const FAQ = [
  ["How do I get access after buying?", "Right after payment, your purchase appears in My library. Stream courses there and download ebooks any time."],
  ["Do courses expire?", "No. You get lifetime access, including future updates."],
  ["Which payment methods are accepted?", "Cards and other local payment methods through Stripe's secure checkout."],
  ["Can I get a refund?", "Yes. If you're not satisfied, email us within 7 days of purchase for a full refund."],
  ["Do you offer invoices for companies?", "Yes. Stripe emails a receipt automatically. For team licences, contact us."],
];

export default async function Home(props: PageProps<"/">) {
  const { type } = await props.searchParams;
  const initialType = type === "course" || type === "ebook" ? type : "all";

  return (
    <>
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="container-x grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-brand-dark">
              New: IFRS 18 updates included
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Learn IFRS the practical way.</h1>
            <p className="mt-4 text-lg text-gray-600">
              Video courses and ebooks written by practitioners, with worked examples, templates and certificates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/?type=course#catalog" className="btn btn-primary">Browse courses</Link>
              <Link href="/?type=ebook#catalog" className="btn">Get the ebooks</Link>
            </div>
            <dl className="mt-8 flex flex-wrap gap-8">
              {[["5,000+", "learners"], ["4.8★", "average rating"], ["7-day", "refund guarantee"]].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-bold">{v}</dt>
                  <dd className="text-sm text-gray-500">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden justify-center gap-5 md:flex" aria-hidden>
            <Cover product={PRODUCTS[0]} className="aspect-[3/4] w-56 rounded-2xl shadow-xl" />
            <Cover product={PRODUCTS[3]} className="mt-10 aspect-[3/4] w-56 rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <h2 className="mb-6 text-3xl font-bold">Bestsellers</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.filter((p) => p.featured).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="scroll-mt-16 bg-gray-50 py-16">
        <div className="container-x">
          <h2 className="mb-6 text-3xl font-bold">All products</h2>
          <Catalog key={initialType} products={PRODUCTS} initialType={initialType} />
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <h2 className="mb-8 text-3xl font-bold">Why learn with us</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(([title, text]) => (
              <div key={title}>
                <h3 className="mb-1 font-bold">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <h2 className="mb-8 text-3xl font-bold">What learners say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map(([quote, who]) => (
              <blockquote key={who} className="rounded-2xl border border-gray-200 bg-white p-6 text-lg">
                “{quote}”
                <cite className="mt-3 block text-sm font-semibold text-gray-500 not-italic">{who}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container-x max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold">Frequently asked questions</h2>
          {FAQ.map(([q, a]) => (
            <details key={q} className="border-b border-gray-200 py-4">
              <summary className="cursor-pointer font-semibold">{q}</summary>
              <p className="mt-2 text-gray-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
