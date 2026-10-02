# ifrs — IFRS Academy storefront

A static website for selling IFRS courses and ebooks. It's plain HTML, CSS and JavaScript, with no build step and no server.

Author: Mahesh Jain

## Pages
- `index.html`: home page with hero, bestsellers, a searchable and filterable catalog (All / Courses / Ebooks), features, testimonials, FAQ and contact.
- `product.html?id=<product-id>`: product detail page with curriculum, "what's included" and a Buy button.

## Editing products
All content comes from **`js/products.js`**:
- `SITE`: store name, currency (`INR` by default), locale and contact email.
- `PRODUCTS`: one entry per course or ebook. To add a product, copy an existing entry and give it a unique `id`.

## Taking payments
Each product has a `checkoutUrl`. Set it to a hosted payment link from any provider, for example:
- **Razorpay Payment Pages / Payment Links** (UPI, cards, netbanking; good for India)
- **Stripe Payment Links**
- **Gumroad / Instamojo / Lemon Squeezy**: these can also host and deliver the ebook files automatically

Until a real link is set (the value is `"#"`), the Buy button shows a "not configured" message.

For delivery, upload the ebook PDF to the provider, which emails it to the buyer automatically. For courses, use the provider's "redirect after payment" setting to send buyers to your course platform (Teachable, Thinkific, Graphy, unlisted YouTube/Vimeo, etc.).

## Run locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy (free)
- **GitHub Pages:** Settings → Pages → Deploy from branch → choose a branch and `/ (root)`.
- **Netlify / Vercel / Cloudflare Pages:** import the repo. There's no build command; the publish directory is `/`.
