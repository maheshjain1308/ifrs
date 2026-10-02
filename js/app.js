// Shared rendering helpers for all pages.

function formatPrice(amount) {
  return new Intl.NumberFormat(SITE.locale, {
    style: "currency",
    currency: SITE.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function productMeta(p) {
  return p.type === "course"
    ? `${escapeHtml(p.level)} · ${escapeHtml(p.duration)}`
    : `${p.pages} pages · ${escapeHtml(p.format)}`;
}

function priceHtml(p) {
  const old = p.oldPrice ? `<s class="old-price">${formatPrice(p.oldPrice)}</s>` : "";
  return `<span class="price">${formatPrice(p.price)}</span>${old}`;
}

function coverHtml(p, large = false) {
  const label = p.type === "course" ? "COURSE" : "EBOOK";
  return `
    <div class="cover ${large ? "cover-lg" : ""}" style="--accent:${p.color}">
      <span class="cover-tag">${label}</span>
      <span class="cover-title">${escapeHtml(p.title)}</span>
    </div>`;
}

function cardHtml(p) {
  return `
    <a class="card" href="product.html?id=${encodeURIComponent(p.id)}">
      ${coverHtml(p)}
      <div class="card-body">
        <h3>${escapeHtml(p.title)}</h3>
        <p class="muted">${escapeHtml(p.subtitle)}</p>
        <p class="meta">${productMeta(p)}</p>
        <div class="card-foot">${priceHtml(p)}</div>
      </div>
    </a>`;
}

function buyButton(p, cls = "") {
  const ready = p.checkoutUrl && p.checkoutUrl !== "#";
  if (!ready) {
    return `<button class="btn btn-primary ${cls}" onclick="alert('Checkout link not configured yet. Set checkoutUrl for this product in js/products.js.')">Buy now · ${formatPrice(p.price)}</button>`;
  }
  return `<a class="btn btn-primary ${cls}" href="${escapeHtml(p.checkoutUrl)}" target="_blank" rel="noopener">Buy now · ${formatPrice(p.price)}</a>`;
}

function renderChrome() {
  document.querySelectorAll("[data-site-name]").forEach((el) => (el.textContent = SITE.name));
  document.querySelectorAll("[data-site-email]").forEach((el) => {
    el.textContent = SITE.email;
    el.href = `mailto:${SITE.email}`;
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) toggle.addEventListener("click", () => links.classList.toggle("open"));
}

// Home / catalog page
function renderCatalog() {
  const grid = document.getElementById("catalog");
  if (!grid) return;
  const featured = document.getElementById("featured");
  if (featured) featured.innerHTML = PRODUCTS.filter((p) => p.featured).map(cardHtml).join("");

  const params = new URLSearchParams(location.search);
  let filter = params.get("type") || "all";
  const search = document.getElementById("search");
  const tabs = document.querySelectorAll(".tab");

  function draw() {
    const q = (search?.value || "").trim().toLowerCase();
    const items = PRODUCTS.filter(
      (p) =>
        (filter === "all" || p.type === filter) &&
        (!q || `${p.title} ${p.subtitle} ${p.description}`.toLowerCase().includes(q))
    );
    grid.innerHTML = items.length
      ? items.map(cardHtml).join("")
      : `<p class="muted empty">No products match your search.</p>`;
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.type === filter));
  }

  tabs.forEach((t) =>
    t.addEventListener("click", () => {
      filter = t.dataset.type;
      draw();
    })
  );
  search?.addEventListener("input", draw);
  draw();
}

// Product detail page
function renderProduct() {
  const root = document.getElementById("product");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) {
    root.innerHTML = `<div class="section"><div class="container"><h1>Product not found</h1><p><a href="index.html#catalog-section">Browse all products</a></p></div></div>`;
    return;
  }
  document.title = `${p.title} | ${SITE.name}`;

  const curriculum = p.curriculum
    ? `<h2>What you'll learn</h2><ol class="curriculum">${p.curriculum.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ol>`
    : "";

  root.innerHTML = `
    <div class="section"><div class="container product-layout">
      <div>
        <p class="crumbs"><a href="index.html">Home</a> / <a href="index.html?type=${p.type}#catalog-section">${p.type === "course" ? "Courses" : "Ebooks"}</a></p>
        <h1>${escapeHtml(p.title)}</h1>
        <p class="lead">${escapeHtml(p.subtitle)}</p>
        <p class="meta">${productMeta(p)}</p>
        <p>${escapeHtml(p.description)}</p>
        ${curriculum}
      </div>
      <aside class="buy-box">
        ${coverHtml(p, true)}
        <div class="buy-price">${priceHtml(p)}</div>
        ${buyButton(p, "btn-block")}
        <ul class="includes">${p.includes.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
        <p class="muted small">Secure payment. Instant access by email after purchase. 7-day refund guarantee.</p>
      </aside>
    </div></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderCatalog();
  renderProduct();
});
