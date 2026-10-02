/*
 * Product catalog — edit this file to add, remove or change products.
 *
 * type:        "course" or "ebook"
 * price:       number in the currency set in SITE.currency
 * oldPrice:    optional, shown struck through
 * checkoutUrl: your payment link (Razorpay Payment Page, Stripe Payment Link,
 *              Gumroad, Instamojo, etc.). The provider collects payment and
 *              delivers the file / course access to the buyer.
 */
const SITE = {
  name: "IFRS Academy",
  tagline: "Master IFRS with practical courses and ebooks",
  currency: "INR",
  locale: "en-IN",
  email: "hello@example.com",
};

const PRODUCTS = [
  {
    id: "ifrs-fundamentals",
    type: "course",
    title: "IFRS Fundamentals: From Zero to Confident",
    subtitle: "A complete beginner-friendly video course on the IFRS framework.",
    price: 4999,
    oldPrice: 7999,
    level: "Beginner",
    duration: "12 hours · 48 lessons",
    color: "#2563eb",
    featured: true,
    checkoutUrl: "#",
    description:
      "Learn how IFRS standards are structured, how the Conceptual Framework works, and how to apply the core standards to real financial statements.",
    includes: [
      "48 HD video lessons",
      "Downloadable worked examples (Excel)",
      "Quizzes after every module",
      "Certificate of completion",
      "Lifetime access & updates",
    ],
    curriculum: [
      "The IFRS Conceptual Framework",
      "IAS 1 – Presentation of Financial Statements",
      "IAS 2 – Inventories",
      "IAS 16 – Property, Plant & Equipment",
      "IFRS 15 – Revenue from Contracts with Customers",
      "IFRS 16 – Leases",
    ],
  },
  {
    id: "ifrs-9-masterclass",
    type: "course",
    title: "IFRS 9 Financial Instruments Masterclass",
    subtitle: "Classification, measurement, ECL and hedge accounting explained.",
    price: 6999,
    oldPrice: 9999,
    level: "Advanced",
    duration: "9 hours · 32 lessons",
    color: "#7c3aed",
    featured: true,
    checkoutUrl: "#",
    description:
      "A deep dive into IFRS 9 with step-by-step expected credit loss models, SPPI tests and hedge accounting case studies.",
    includes: [
      "32 video lessons",
      "ECL model templates (Excel)",
      "Case studies from banking & corporates",
      "Certificate of completion",
    ],
    curriculum: [
      "Classification & the SPPI test",
      "Business model assessment",
      "Amortised cost & EIR",
      "Expected credit loss – 3-stage model",
      "Hedge accounting",
    ],
  },
  {
    id: "ind-as-convergence",
    type: "course",
    title: "Ind AS vs IFRS: Key Differences",
    subtitle: "Understand the carve-outs and practical differences.",
    price: 2999,
    level: "Intermediate",
    duration: "5 hours · 20 lessons",
    color: "#0891b2",
    checkoutUrl: "#",
    description:
      "Built for accountants working with Indian and international reporting, covering every major carve-out with examples.",
    includes: ["20 video lessons", "Comparison cheat sheet (PDF)", "Certificate of completion"],
    curriculum: [
      "Overview of Ind AS convergence",
      "Major carve-outs",
      "First-time adoption (Ind AS 101 vs IFRS 1)",
      "Disclosure differences",
    ],
  },
  {
    id: "ifrs-pocket-guide",
    type: "ebook",
    title: "The IFRS Pocket Guide",
    subtitle: "Every standard summarised in plain English.",
    price: 499,
    oldPrice: 799,
    pages: 180,
    format: "PDF + EPUB",
    color: "#059669",
    featured: true,
    checkoutUrl: "#",
    description:
      "A quick-reference guide to all IFRS and IAS standards with key definitions, recognition criteria and common pitfalls.",
    includes: ["180 pages", "PDF & EPUB formats", "Free updates for new standards"],
  },
  {
    id: "ifrs-15-workbook",
    type: "ebook",
    title: "IFRS 15 Revenue Workbook",
    subtitle: "50 solved problems on the 5-step model.",
    price: 699,
    pages: 120,
    format: "PDF",
    color: "#ea580c",
    checkoutUrl: "#",
    description:
      "Practice-driven workbook with fully solved questions on contract identification, performance obligations, variable consideration and more.",
    includes: ["50 solved problems", "Journal entry walkthroughs", "Printable PDF"],
  },
  {
    id: "ifrs-16-leases-ebook",
    type: "ebook",
    title: "IFRS 16 Leases Made Simple",
    subtitle: "Lessee & lessor accounting with worked examples.",
    price: 599,
    pages: 95,
    format: "PDF",
    color: "#db2777",
    checkoutUrl: "#",
    description:
      "Everything you need to account for leases under IFRS 16: right-of-use assets, lease liabilities, modifications and sale-and-leaseback.",
    includes: ["95 pages", "Excel amortisation templates", "Printable PDF"],
  },
];
