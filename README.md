# IFRS Academy: courses & ebooks store

A Next.js store for selling online courses and ebooks, with Stripe Checkout, customer accounts and a private library.

Author: Mahesh Jain

## Features
- **Storefront:** home page, searchable catalog (Courses / Ebooks), product pages with curriculum.
- **Cart:** add several products and pay in a single Stripe Checkout.
- **Accounts:** email + password sign-up and login (bcrypt hashes, signed HTTP-only session cookie).
- **Stripe Checkout:** prices always come from the server, and customers can't re-buy products they already own.
- **Fulfilment:** a Stripe webhook records orders and grants access. The success page also checks the session (idempotently) so access is instant.
- **My library:** purchased courses open in a lesson player, and purchased ebooks download from a protected endpoint (files in `storage/ebooks/` are never public).
- **Order history** for each customer.

## Tech
Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Stripe · Drizzle ORM + SQLite/libSQL (a local file in development, [Turso](https://turso.tech) in production).

## Getting started
```bash
npm install
cp .env.example .env.local      # then fill in the values (see below)
npm run db:push                 # creates the tables in local.db
npm run dev                     # http://localhost:3000
```

### Environment variables (`.env.local`)
| Variable | What it is |
| --- | --- |
| `AUTH_SECRET` | Random string, 32+ chars: `openssl rand -base64 32` |
| `STRIPE_SECRET_KEY` | From [Stripe → Developers → API keys](https://dashboard.stripe.com/test/apikeys) (use `sk_test_…` while testing) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_…` from `stripe listen` (local) or your dashboard webhook endpoint (production) |
| `DATABASE_URL` | `file:local.db` locally; `libsql://…` for Turso |
| `DATABASE_AUTH_TOKEN` | Turso token (production only) |
| `NEXT_PUBLIC_SITE_URL` | Your site's public URL, used for Stripe redirects |

### Testing payments locally
1. Install the [Stripe CLI](https://docs.stripe.com/stripe-cli) and run `stripe login`.
2. Run `npm run stripe:listen` and copy the printed `whsec_…` into `STRIPE_WEBHOOK_SECRET`.
3. Buy something with the test card `4242 4242 4242 4242`, any future expiry date and any CVC.

## Adding your products
Everything lives in **`lib/catalog.ts`**:
- `STORE`: store name, currency (`inr` by default), support email.
- `PRODUCTS`: each course or ebook. Prices are in whole currency units (₹4999 → `4999`).
  - **Courses:** add `lessons`, each with a `videoUrl` embed link (YouTube unlisted, Vimeo, Bunny Stream, etc.).
  - **Ebooks:** put the PDF in `storage/ebooks/` and set `file` to its name. The included PDFs are placeholders, made by `scripts/make-placeholder-ebooks.py`.

Products don't need to be created in the Stripe dashboard; Checkout uses the prices from this file.

## Deploying (e.g. Vercel)
1. Create a Turso database (`turso db create ifrs`) and get its URL and token. Run `npm run db:push` with those set.
2. Import the repo in Vercel and add the environment variables above, using **live** Stripe keys when you're ready.
3. In Stripe → Developers → Webhooks, add the endpoint `https://<your-domain>/api/webhooks/stripe` with the events `checkout.session.completed` and `checkout.session.async_payment_succeeded`. Put its signing secret in `STRIPE_WEBHOOK_SECRET`.

## Project layout
```
app/
  page.tsx                  home + catalog
  products/[id]/            product page
  cart/                     cart (client) → POST /api/checkout
  checkout/success/         post-payment confirmation
  (auth)/login, signup      account pages + server actions
  library/                  purchases & order history
  learn/[id]/               course player (owners only)
  api/checkout/             creates the Stripe Checkout Session
  api/webhooks/stripe/      verifies & fulfils Stripe events
  api/download/[id]/        streams ebooks to owners only
lib/
  catalog.ts                products & store settings
  auth.ts                   sessions
  fulfill.ts                idempotent order fulfilment
  db/                       Drizzle schema & client
storage/ebooks/             private ebook files
```
