// Product catalog. Prices are in major currency units (e.g. rupees) and are
// always read from here on the server — never trusted from the browser.

export const STORE = {
  name: "IFRS Academy",
  tagline: "Practical IFRS courses and ebooks",
  currency: "inr", // Stripe currency code
  locale: "en-IN",
  supportEmail: "hello@example.com",
};

export type Lesson = {
  title: string;
  duration: string;
  /** Embeddable video URL, e.g. https://www.youtube-nocookie.com/embed/<id> or https://player.vimeo.com/video/<id> */
  videoUrl?: string;
};

type BaseProduct = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  oldPrice?: number;
  color: string;
  featured?: boolean;
  includes: string[];
};

export type Course = BaseProduct & {
  type: "course";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: Lesson[];
};

export type Ebook = BaseProduct & {
  type: "ebook";
  pages: number;
  format: string;
  /** File name inside storage/ebooks/ (private — served only to buyers). */
  file: string;
};

export type Product = Course | Ebook;

export const PRODUCTS: Product[] = [
  {
    id: "ifrs-fundamentals",
    type: "course",
    title: "IFRS Fundamentals: From Zero to Confident",
    subtitle: "A complete beginner-friendly video course on the IFRS framework.",
    description:
      "Learn how IFRS standards are structured, how the Conceptual Framework works, and how to apply the core standards to real financial statements.",
    price: 4999,
    oldPrice: 7999,
    level: "Beginner",
    duration: "12 hours · 6 modules",
    color: "#2563eb",
    featured: true,
    includes: [
      "HD video lessons",
      "Downloadable worked examples (Excel)",
      "Quizzes after every module",
      "Certificate of completion",
      "Lifetime access & updates",
    ],
    lessons: [
      { title: "The IFRS Conceptual Framework", duration: "1h 40m" },
      { title: "IAS 1 – Presentation of Financial Statements", duration: "2h 05m" },
      { title: "IAS 2 – Inventories", duration: "1h 30m" },
      { title: "IAS 16 – Property, Plant & Equipment", duration: "2h 10m" },
      { title: "IFRS 15 – Revenue from Contracts with Customers", duration: "2h 25m" },
      { title: "IFRS 16 – Leases", duration: "2h 10m" },
    ],
  },
  {
    id: "ifrs-9-masterclass",
    type: "course",
    title: "IFRS 9 Financial Instruments Masterclass",
    subtitle: "Classification, measurement, ECL and hedge accounting explained.",
    description:
      "A deep dive into IFRS 9 with step-by-step expected credit loss models, SPPI tests and hedge accounting case studies.",
    price: 6999,
    oldPrice: 9999,
    level: "Advanced",
    duration: "9 hours · 5 modules",
    color: "#7c3aed",
    featured: true,
    includes: [
      "HD video lessons",
      "ECL model templates (Excel)",
      "Case studies from banking & corporates",
      "Certificate of completion",
    ],
    lessons: [
      { title: "Classification & the SPPI test", duration: "1h 50m" },
      { title: "Business model assessment", duration: "1h 20m" },
      { title: "Amortised cost & EIR", duration: "1h 45m" },
      { title: "Expected credit loss – 3-stage model", duration: "2h 30m" },
      { title: "Hedge accounting", duration: "1h 35m" },
    ],
  },
  {
    id: "ind-as-vs-ifrs",
    type: "course",
    title: "Ind AS vs IFRS: Key Differences",
    subtitle: "Understand the carve-outs and practical differences.",
    description:
      "Built for accountants working with Indian and international reporting, covering every major carve-out with examples.",
    price: 2999,
    level: "Intermediate",
    duration: "5 hours · 4 modules",
    color: "#0891b2",
    includes: ["HD video lessons", "Comparison cheat sheet (PDF)", "Certificate of completion"],
    lessons: [
      { title: "Overview of Ind AS convergence", duration: "1h 00m" },
      { title: "Major carve-outs", duration: "1h 45m" },
      { title: "First-time adoption (Ind AS 101 vs IFRS 1)", duration: "1h 15m" },
      { title: "Disclosure differences", duration: "1h 00m" },
    ],
  },
  {
    id: "ifrs-pocket-guide",
    type: "ebook",
    title: "The IFRS Pocket Guide",
    subtitle: "Every standard summarised in plain English.",
    description:
      "A quick-reference guide to all IFRS and IAS standards with key definitions, recognition criteria and common pitfalls.",
    price: 499,
    oldPrice: 799,
    pages: 180,
    format: "PDF",
    color: "#059669",
    featured: true,
    file: "ifrs-pocket-guide.pdf",
    includes: ["180 pages", "Instant PDF download", "Free updates for new standards"],
  },
  {
    id: "ifrs-15-workbook",
    type: "ebook",
    title: "IFRS 15 Revenue Workbook",
    subtitle: "50 solved problems on the 5-step model.",
    description:
      "Practice-driven workbook with fully solved questions on contract identification, performance obligations, variable consideration and more.",
    price: 699,
    pages: 120,
    format: "PDF",
    color: "#ea580c",
    file: "ifrs-15-workbook.pdf",
    includes: ["50 solved problems", "Journal entry walkthroughs", "Instant PDF download"],
  },
  {
    id: "ifrs-16-leases",
    type: "ebook",
    title: "IFRS 16 Leases Made Simple",
    subtitle: "Lessee & lessor accounting with worked examples.",
    description:
      "Everything you need to account for leases under IFRS 16: right-of-use assets, lease liabilities, modifications and sale-and-leaseback.",
    price: 599,
    pages: 95,
    format: "PDF",
    color: "#db2777",
    file: "ifrs-16-leases.pdf",
    includes: ["95 pages", "Excel amortisation templates", "Instant PDF download"],
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(STORE.locale, {
    style: "currency",
    currency: STORE.currency.toUpperCase(),
    maximumFractionDigits: 0,
  }).format(amount);
}

export function productMeta(p: Product): string {
  return p.type === "course" ? `${p.level} · ${p.duration}` : `${p.pages} pages · ${p.format}`;
}
