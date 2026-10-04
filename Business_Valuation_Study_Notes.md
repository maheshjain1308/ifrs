# Business Valuation — Study Notes
*ICAI Advanced Financial Management, Chapter 13 (68 pages condensed)*

---

## 0. Chapter map (what to remember at a glance)

| # | Topic | One-line takeaway |
|---|-------|-------------------|
| 1–2 | Framework & terms | Valuation = science + art; used for M&A, listing, strategy, ball-park price |
| 3 | 3 core approaches | **Asset**, **Income/Earnings**, **Cash flow (DCF)** |
| 4 | Cost of equity | CAPM, APT, un-levering/re-levering beta for unlisted cos. |
| 5 | Relative valuation | Multiples of comparable firms (EV/EBITDA, P/E, PEG…) |
| 6 | Other approaches | LBO, Chop-shop, **EVA, MVA, SVA** |
| 7 | Fair value | Give a *range* (seller's minimum – buyer's maximum) |
| 8 | Going vs non-going concern | Going concern value > liquidation value |
| 9 | Distressed cos. | Modified DCF, DCF + distress value, APV, relative |
| 10 | Start-ups | Berkus, Scorecard, VC, First Chicago, Cost-to-duplicate, Comparable txns |
| 11 | Digital platforms | Income / Market (revenue-driver based) / Cost approach |
| 12 | Professional firms | Normalise earnings, KPI/benchmark comparison |
| 13 | ESG | Adjust discount rate *or* (better, more explicit) cash flows |

---

## 1. Conceptual framework

**Why value a business?**
(a) Info for internal stakeholders (b) compare with similar enterprises / mgmt efficiency (c) future public listing (d) strategic planning – value drivers, deployment of surplus cash (e) ball-park price for acquisition.

- Valuation is both **science and art**.
- Listed target → market cap is a guide **but** depends on market efficiency; sometimes only a small float is traded. Unlisted target → negotiated price.
- (Historical trivia: the East India Company was the first corporation valued / IPO'd.)

## 2. Important terms

| Term | Meaning / formula | Notes |
|------|-------------------|-------|
| **PV** | CF / (1+r)^n | ₹1,000 in 1 yr @10% ≈ ₹909 |
| **IRR** | Rate at which PV(inflows) = PV(outflows), i.e. **NPV = 0** | Higher IRR → project more likely selected |
| **ROI** | (Gain ÷ Investment) | Eg. (1400−1000)/1000 = 40%. With additional investment use **average investment**: returns 800 ÷ avg(1000,1200)=1100 → **72%**. ROI is a *historical* ratio |
| **Gordon (perpetual growth) model** | P₀ = D₁ / (k − g) | Little used in practice (dividends rarely grow perpetually, many parameters) – academically neat |
| **TV (Terminal / Horizon Value)** | Value at the exit/horizon; usually **Gordon**: CF_n × (1+g) / (WACC − g) | In DCF, TV is often the *largest* part of value → validate g carefully |

---

## 3. Three approaches to valuation

### 3.1 Asset-based approach
Value of shares = net assets acquired. Not income-based. **Least important for IT/knowledge companies** (assets are IP and people).

| Method | Definition | Points |
|--------|-----------|--------|
| **Net Asset Value (Book value)** | Fixed assets + Net current assets − Long-term debt | Simplest; uses historical cost; ignores brand/IPR → gives **lower limit** |
| **Net Realisable Value (Liquidation / Adjusted book value)** | Realisable value of all assets − liquidation expenses − liabilities | Used when acquirer will sell one part & integrate rest; involves total break-up; buyer likely to offer lowest price |
| **Replaceable Value** | Cost of acquiring equivalent assets/liabilities in open market | Slightly higher than NRV; often seen as **max price** an acquirer would pay; ignores staff loyalty |

*Example (NRV)*: Liabilities 20,000. Book: PPE 50,000 + Licences 10,000 + Debtors 50,000 + Cash 10,000 → net 1,00,000. Realisable: PPE 40,000, Licences 30,000, Debtors 45,000, Cash 10,000 → net **1,05,000** → ₹21/share (5,000 shares).

**Conclusion:** reflects net worth under going concern principle **but ignores ability to generate future revenue / market dynamics.**

### 3.2 Income-based approach
Overcomes asset-approach drawbacks by using earning potential; suitable when acquirer will **continue** the business.

1. **PE ratio / Earning yield multiplier**
   - **Price/share = EPS × PE ratio**
   - For unlisted cos.: (i) choose PE of comparable listed co. (ii) **adjust downward** for non-listing risk (iii) determine future maintainable EPS (iv) multiply.
   - Gives *minimum acceptable price* to target shareholders.
2. **Capitalisation of earnings**
   - **Capitalised value = Expected annual maintainable profit ÷ Capitalisation rate**
   - Cap rate ≈ **EPS / Share price = 1 / PE ratio** (or CAPM-based).
   - Maintainable profit = weighted average of past profits adjusted for synergies/economies of scale.
   - *Pro:* forward looking. *Con:* forecasting profit; treatment of extraordinary items.

### 3.3 Cash-flow (DCF) approach – 5 steps
(a) Arrive at FCF → (b) forecast future FCFs → (c) discount rate (WACC) → (d) Terminal Value → (e) PV of FCFs + PV of TV, interpret.

**Worked example (₹'000)**
- FCF: EAT 600 − one-time income 200 + one-time expense 100 + depreciation 100 = **600**
- Grow 5% p.a.: 600 / 630 / 661.5; less ΔWC and FA investment → **Adjusted FCF 500 / 550 / 651.5**
- WACC 8%; PVF 0.926 / 0.857 / 0.794 → PV **463 / 471.35 / 517.29**
- TV = 517.29 × 1.03 / (0.08 − 0.03) = **10,656.17** (the book uses the Year-3 *PV* figure here and adds it undiscounted)
- Total value = PV of flows (1,451.64) + TV 10,656.17 = **12,107.81 ≈ 12,108** (₹'000)

> ⚠️ Exam tip: DCF is intrinsic and forward looking, but results hinge on **WACC and TV** assumptions – TV is often the biggest share of value, so validate g.

---

## 4. Measuring cost of equity

### 4.1 CAPM
**R = r_f + β (r_m − r_f)**
r_f = risk-free rate, β = beta, r_m = market return. Intuitive (risk-free part + market-relative risk) but **over-simplifies risk**.

### 4.2 Arbitrage Pricing Theory (APT) — Stephen Ross, 1970s
**R = r_f + β₁(RP₁) + β₂(RP₂) + … + βₙ(RPₙ)**
Multi-factor: each macro-economic factor (interest rates, sector growth etc.) has its own beta/risk premium. APT doesn't say *which* factors – analysts must choose according to the economy.

### 4.3 Beta for unlisted companies / new businesses
- Listed cos. usually have debt; private firms may have little → need **unlevered (asset) beta**.
- A listed company entering a new line shouldn't use its own WACC; use **asset beta of proxy (pure-play) firms**, re-geared to own capital structure.
- **Asset beta = business risk only** (no financial risk). Equity beta ≥ asset beta (equal if debt-free).

**Formulas**
- β_a = β_e × [E / (E + D(1−t))] + β_d × [D(1−t) / (E + D(1−t))]
- If **debt beta = 0** (usual assumption): **β_a = β_e × E / (E + D(1−t))**
- **Re-gearing:** **β_e = β_a × [E + D(1−t)] / E**

**5 steps:** (1) identify pure-play/proxy firms & their equity betas → (2) de-gear to asset betas → (3) average (or pick the most appropriate) → (4) re-gear to appraising company's capital structure → (5) plug β_e into CAPM → required return.

#### Illustration 1 – X Pvt Ltd (retail, angel investors)
Data: EBITDA 90 (includes ₹10 extraordinary gain; ₹20 pending write-off), unlevered β 1.8, D:E = 40:60, r_f 5%, r_m 11%, EV multiple 5×, pre-tax Kd 12%, tax 30%, FCF Y1–3 = 100/120/150.
- Levered β = 1.8 [1 + (1−0.3)(40/60)] = **2.64**
- Adjusted EBITDA = 90 − 10 − 20 = **60** → EV = 5 × 60 = **300**
- Ke = 5% + 2.64 × 6% = **20.84%**
- WACC = 20.84 × 0.6 + 12(0.7) × 0.4 = **15.864%**
- Discount factors 0.863 / 0.745 / 0.643 → PVs 86.30 + 89.40 + 96.45 = **272.15** (value of firm)

---

## 5. Relative valuation (valuation by multiples)

- Intrinsic methods (§3) give *intrinsic* value; relative valuation gives value **relative to peers**, increasingly used to **validate** intrinsic value.
- Idea: derive a "multiple" from comparable firms' financial ratios & apply to target.

**4 steps**
1. **Pick the driver / multiple**
   - *Enterprise-value multiples:* **EV/EBITDA** (popular), **EV/Invested capital** (capital-intensive), **EV/Sales** (cash-rich, big order book, organic growth)
   - *Equity multiples:* **P/E**, **PEG = P/E ÷ growth rate** (best for high-growth / sunrise industries)
2. **Choose the right ratio** (factor-based thinking: eg. an exporter is affected by FX; EV/Invested capital is a misfit for an asset-light firm)
3. **Choose comparable firms** – hardest step; no two firms identical (eg. FTE pricing vs. unit-transfer pricing changes risk). If niche, look at other industries or use **regression**. *"Take benchmarks with a pinch of salt."*
4. **Iterate / extrapolate** to smooth deviations.

**Assumptions:** market is efficient; multiples–fundamentals relationship is linear; comparables are similar in structure, risk and growth.

**Enterprise Value (EV)** = Market cap + Debt − Cash (two routes: entity-value base adjusted for debt, or balance-sheet approach).

#### Illustration 2 – A Ltd.
Gross profit 10,00,000; indirect exp 4,00,000 → EBITDA 6,00,000; 1,00,000 shares; debt 3,00,000; surplus funds 5,00,000; r_f 4.5%, r_m 12%, β 0.9.
- Cap rate = 4.5 + 0.9 × 7.5 = **11.25%**
- Earning value = 600 / 0.1125 = ₹5,333.33 thousand → **₹53.33/share**
- Equity value @ 5× EBITDA: 3,000 − 300 debt + 500 surplus = **₹3,200 thousand**

#### Illustration 3 – HK Ltd. (EV via balance sheet)
70,000 shares × ₹12 = ₹8,40,000 market cap + debt 2,00,000 − cash 5,00,000 = **EV ₹5,40,000**.

---

## 6. Other approaches to value measurement

### 6.1 Contemporary approaches
- Industry-specific metrics: internet cos. → *price per page visited*, *price per subscriber* (still check cash-to-sales / DCF).
- **Goodwill-based:** asset valuation first, then goodwill separately via multiple of annual sales / footfall (e.g., retail hotspot).
- **P/E ratio (PER):** EPS vs. market price (EPS 40, price 50 → 1.25 per the book's text). Relative figure – compare within same sector.
- **LBO (Leveraged Buy-Out):** PE firms buy using ~**70:30 debt:equity**, hold 3–5 yrs, then spin off / sell. Risk: future can't be predicted – a cyclical slowdown leaves heavy debt/interest.
  - *Example:* Software co. EBITDA ₹100 L, VC buys majority (consideration ₹250 L), 20% growth/yr; exit at **7× EBDAT**. EBDAT Y3 = 112 → capitalised 784 − debt 100 = **Equity ₹684 L**.

### 6.2 Chop-shop (break-up value) method
Finds multi-industry firms that are **undervalued** and worth more separated (assets bought below replacement value).
1. Identify segments & average capitalisation ratios of pure-play firms.
2. Compute "theoretical" value of each segment on each ratio (cap/sales, cap/assets, cap/operating income).
3. **Average** the theoretical values.

*Illustration 4 – Cornett GmbH:* values on sales = €4,005,000; on assets = €2,880,000; on income = €5,650,000 → **average €4,178,000** (vs. market cap €4m → fairly valued/slightly undervalued).

### 6.3 Economic Value Added (EVA)
- Company creates value only if returns **exceed cost of capital**. Separates operations from financing. Judges *management performance*, not just numbers.
- **EVA = NOPAT − (Invested Capital × WACC)** = NOPAT − Capital charge
- **NOPAT** = EBIT − taxes (depreciation not added back; adjust other **non-cash** items e.g. bad-debt provision).
- **Invested capital** = total assets − non-interest-bearing current liabilities (≈ equity + long-term debt, usually opening), adjusted for non-cash items.
- Negative EVA ⇒ not creating value.

#### Illustration 5 – A Ltd. (₹ lakh)
EBIT 410; tax 123 (30% × EBIT); add back bad-debt provision 20 → **NOPAT 307**
Invested capital = 1300 − 400 + 20 = **920**
WACC = (800/900)(8.45%) + (100/900)(12%)(0.7) = **8.44%**
Capital charge = 920 × 8.44% = 77.65 → **EVA = 307 − 77.65 = 229.35**

### 6.4 Market Value Added (MVA)
**MVA = Market value of the firm − Invested capital** (e.g. 1000 − 920 = **80**).
- Market's perception of value created; EVA is the *derived* value added for the discerning investor.
- High MVA companies = market darlings (expensive); short-term EVA/MVA can be negatively correlated, gap closes eventually.
- **Objective of EVA:** show management efficiency in earning above the hurdle rate.

### 6.5 Shareholder Value Analysis (SVA)
Fills NOPAT's gap (historical, ignores future cash flows & investment opportunities). Key **value drivers**: sales/earnings potential, investment opportunities, cost of incremental capital.

**Steps:** (a) FCFs from value drivers → (b) discount at WACC → (c) add TV → (d) add market value of non-core assets & marketable investments → (e) subtract debt = **Value of equity**.

*Case study ($ m):* PV of FCFs (57.54 + 43.46 + 44.86) + PV of TV 336.95 = **482.81**; + investment property 35 − debt 19 = **Equity value 498.81**.
(Y4-onwards FCF 63.20 × PVF 0.64 = 40.45; × TV multiplier 1/0.12 = 8.33 → 336.95.)

### Quick comparison
| | EVA | MVA | SVA |
|--|-----|-----|-----|
| Basis | Accounting (NOPAT − capital charge) | Market value − invested capital | Forward-looking DCF with value drivers |
| Looks at | Management efficiency (past/current) | Market's perception | Future value creation |
| Weakness | Historical, ignores value drivers | Not a basis for share valuation | Forecast dependent |

---

## 7. Arriving at fair value
- Acquirer wants to pay the fair price – "no less, no more". Fair value = arm's-length transaction (CA view); PV of cash (analyst view); arbitrage opportunity (speculator view).
- Booms distort value (dot-com).
- No single "correct" method → determine a **range: minimum acceptable to seller – maximum payable by buyer**; final price by negotiation.
- **Exam approach for evaluation/synthesis questions:** (i) unless specified, value by **as many methods as data permit** (ii) **comment** on each method's result (iii) supplement the conclusion with any additional information.

## 8. Going concern vs non-going concern
- Going-concern assumption: enterprise continues for foreseeable future (no intention/need to liquidate).
- **Non-going concern = liquidation value** (net value after selling assets and paying liabilities).
- **Going concern value (Total value) > liquidation value** because it includes future profitability, intangibles, goodwill; liquidation also hurts reputation and lays off employees.
- Use non-going-concern valuation **only** when investors believe the firm has no future value as a going concern.

## 9. Valuation of distressed companies
Distress = unable (or struggling) to meet financial obligations – high fixed costs, illiquid assets, cyclical revenue; too much debt; inability to meet operating expenses. A distressed firm is **not necessarily worthless**.

**Why conventional methods fail**
- DCF's TV assumes infinite life & growth; flows may be negative.
- Negative/declining revenues → cash flows hard to estimate, high bankruptcy risk; DCF treats firm as going concern.
- Discount rates reflect healthy firms → need adjustment for probability of failure.

**Methods**
1. **Modified DCF:** estimate probability distribution of cash flows incl. default; adjusted discount rates (updated D/E and unlevered β for Ke; updated default risk for Kd).
   *If distribution can't be estimated:* **Expected CF_t = CF_t × (1 − Probability of distress_t)**
2. **DCF + Distress value:**
   **Equity value = DCF equity value × (1 − P(distress)) + Distress sale value of equity × P(distress)**
   (distress sale value as % of book value or % of DCF value)
3. **Adjusted Present Value (APV):** separates investment & financing decision.
   **Firm value = Unlevered firm value + (PV of tax benefits of debt − Expected bankruptcy cost)**
   **Expected bankruptcy cost = (Unlevered firm value − Distress sale value) × Probability of distress**
4. **Relative valuation:** revenue/EBITDA multiples more usable than P/E, P/B; adjust the multiple downward (eg. industry 2× revenue → 1.25× for the distressed telecom).

## 10. Valuation of start-ups
- Standard approaches (earnings/CF, asset, market) presuppose an established, profitable business with history. Start-ups have **no track record**; value = future growth potential, founder skill ("night-vision goggles").

**Why traditional methods fail**
| Approach | Reason |
|----------|--------|
| Income | Most start-ups have no positive cash flow in the foreseeable future |
| Asset | Few tangible assets (value is IP/intangibles, hard to agree); going-concern so value ≠ realisable asset value |
| Market | Disruptors → no established comparables; (but some market-approach elements used in later funding rounds) |

**Value drivers:** Product (readiness/prototype), Management (credentials & balance of team), Traction (quantifiable evidence of demand), Revenue streams, Industry attractiveness (logistics, distribution, lockdown risk…), Demand–supply of investors, Competitiveness (first-mover advantage vs. proven model).

**Methods**
| Method | Gist |
|--------|------|
| **Berkus** (Dave Berkus) | Rate 5 success factors: **basic value (idea), technology, execution, strategic relationships, production & sales**. Caps pre-revenue value at **$2m**, post-revenue at **$2.5m** (as per text) |
| **Cost-to-duplicate** | Sum of all costs to build the start-up/product incl. physical assets. Criticised: ignores future revenue/assets |
| **Comparable transactions** | Value similar start-ups sold at. XYZ acquired ₹560 cr with 24 cr users ≈ ₹23/user → ABC with 1.75 cr users ≈ **₹40 cr**; adjust multiplier for tech, IP, penetration, location |
| **Scorecard** | Take avg pre-money valuation of comparables; weight factors – **team 0–30%, opportunity size 0–25%, product 0–15%, competition 0–10%, marketing/sales/partnerships 0–10%, need for additional investment 0–5%, others 0–5%**; assign comparison % (100% = par); sum of weighted factors × avg valuation = pre-revenue value |
| **First Chicago** | DCF + market approach across **3 scenarios: worst, normal, best**, each probability-weighted |
| **Venture Capital method** | Investor wants multiple (10×, 20×, 30×) or target IRR on exit; discount exit/future value to get **post-money value** at required return |

## 11. Valuation of digital platforms
Digital platform = software-based online infrastructure that facilitates many-to-many interactions/transactions.

| Category | Eg. | Revenue drivers (market approach) |
|----------|-----|----------------------------------|
| Marketplace (supply–demand) | Booking.com, Uber, Amazon | bookings, registered users, transaction volume |
| Search engine | Google, Bing, Baidu | active users, relevance of results, time per search |
| Repository (library) | Spotify, YouTube, GitHub | readers/contributors, authenticity, duration of use, content quality |
| Digital communication | WhatsApp, Teams, Telegram, Slack | users, sponsored links, ad revenue |
| Digital community | Facebook, LinkedIn | users, subscription fees |
| Payments | Paytm, GPay | active subscribers, merchants, speed/security/ease of use |

**Income approach**
- *Top-down:* start with **TAM** (total addressable market) → **SAM** (serviceable addressable) → **SOM** (serviceable obtainable) → business plan.
- *Bottom-up:* build from the platform's own resources/earnings (better for nascent platforms).
- Platforms burn cash early (penetration pricing); cash need falls as margins stabilise.
- **Discount rate:** FCFF → **WACC**; FCFE → **Ke** (CAPM). Beta hard (few listed comparables) → use sector/revenue-driver/international comparables, **add a Company-Specific Risk Premium (CSRP / alpha)** – higher for nascent cos.

**Market approach:** P/E, EV/EBITDA, P/B, **Price/Revenue**. Difficult because: comparables scarce, profit/EBITDA may be negative, capital-light → low book value. So emphasise **revenue drivers** (users, views per user, revenue per user).

**Cost approach:** cost to rebuild (developer hours on code). Ignores revenue-generating power – usually not most appropriate.

> Fundamentals unchanged: understand the business, revenue model, management quality, risk–reward.

## 12. Valuation of professional / consultancy firms
- Firms providing customised, knowledge-based services (CAs, advocates, consultants).
- Compare historical data with **industry KPIs and benchmarks** and competitors; sources: audited annual statements, ITRs.
- Income approach: historical data + projected growth (TV) – factor the **risk that projections don't materialise**.
- **Normalise net income and cash flows** (add back non-cash and non-recurring/owner-specific items) so firms are compared on an equal footing; then apply chosen valuation method.
- Pick KPIs aligned with the **acquirer's goals**.

## 13. Impact of ESG on valuation
| E | S | G |
|---|---|---|
| Climate change, water, waste, emissions, biodiversity | Employee development, diversity & inclusion, community development, health & safety, customer | Board independence & diversity, anti-corruption & bribery, tax transparency, ethical conduct |

- Momentum: ESG funds, green bonds (> $1 trillion in 2020), sustainability taxonomies (EU), single global ESG standard (IFRS/ISSB), **SEBI Feb 2023** proposed ESG disclosure framework.
- Benefit of high ESG: preferential/lower cost of debt, access to green/social/sustainability-linked bonds. ESG has moved from "good to have" to "must have".
- **How to incorporate in valuation (DCF):** adjust either **discount rate** (add risk premium – practical but less explicit) **or expected cash flows** (more explicit – preferred):
  - **E:** 2-degree scenario analysis; carbon points/prices
  - **S:** cost of social measures – labour conditions, CSR, welfare measures
  - **G:** penalties, fines, taxes from poor governance

---

## 14. Case studies
1. **Vodafone–Idea merger:** valuation by (a) market value (NSE price), (b) comparable companies' multiples, (c) NAV (as of 31-12-2016). **DCF was not used** (management didn't provide projections). Share-exchange basis. Market reaction: Idea fell ~9.6% (as much as 14.57%) – the deal was thought to undervalue Idea. **Lesson:** technically correct valuation can still disappoint – "perceived value" is not quantifiable.
2. **Facebook–WhatsApp (2015, $21.8 bn):** free service ($1/yr fee), 450 m users (70% active), growth 1 m users/day → ~$55 gross per user (incl. $4 bn retention payout). Value rests on users/future monetisation (cross-platform international messaging).

---

## 15. Formula sheet (revision)

| Item | Formula |
|------|---------|
| Price per share (PE) | EPS × PE |
| Capitalised value | Maintainable profit ÷ cap rate (cap rate = 1/PE) |
| CAPM | Ke = r_f + β(r_m − r_f) |
| APT | R = r_f + Σ β_i RP_i |
| Asset beta (Kd beta = 0) | β_e × E / [E + D(1−t)] |
| Re-geared beta | β_a × [E + D(1−t)] / E |
| WACC | Ke·E/(E+D) + Kd(1−t)·D/(E+D) |
| FCF | EAT ± one-offs + Dep − ΔWC − Capex (as per question) |
| Terminal value | FCF_n(1+g)/(WACC−g)  (FCFF₁/(Kc−g) for FCF in next year) |
| EV | Market cap + Debt − Cash |
| PEG | P/E ÷ growth rate |
| NOPAT | EBIT(1−t) |
| EVA | NOPAT − WACC × Invested capital |
| MVA | Market value − Invested capital |
| EVA dividend per share | EVA ÷ no. of shares (max dividend before value starts to fall) |
| Taxable income (from PAT) | PAT / (1 − t); EBIT = Taxable income + Interest |
| Financial leverage | PBIT / PBT |
| Distressed equity | DCF×(1−P) + Distress value×P |
| APV | Unlevered value + PV tax shield − Expected bankruptcy cost |
| Expected CF (distress) | CF × (1 − P(distress)) |

---

## 16. Solved practical questions — pattern recap

| Q | Key method & answer |
|---|--------------------|
| **1** ABC–XYZ (1.5 cr shares @ ₹400; CFs 250/300/400 @12%) | Market value = ₹600 cr; DCF = 250×0.893 + 300×0.797 + 400×0.712 = **₹747.15 cr (₹498.10/share)** → **range ₹600 cr – ₹747.15 cr** (₹400–₹498.10/share) |
| **2** Eagle Ltd. | PBT = 77/0.7 = 110; −8 + 10 = 112; + new product profit (70 − 20 − 12 − 10 = 28) = 140; tax 30% = 42 → **98 L**; ÷ 0.14 = **₹700 L**. Earnings to equity = 98 − 13 (pref. div) = 85 L ÷ 50 L shares = ₹1.70 × PE 10 = **₹17/share** |
| **3** ABC new sales strategy (20% growth ×3 yrs, 15%) | FCFs negative in Y1–3 (−720, −864, −1036.80), Y4 = 2,419.20; PV(−1,961.79) + PV of residual (2419.2/0.15 = 16,128 → 10,603.55) = **8,641.76** vs. pre-strategy 1,400/0.15 = 9,333.33 ⇒ **−691.57 → strategy not viable** |
| **4** H Ltd. & B Ltd. exchange ratio | NAV/share: H ₹285.71 (after deducting ₹300 cr contingent liability), B ₹48.46. Earnings cap/share: H ₹1,071.43, B ₹192.31. Fair value (weights 1:3): H **₹875**, B **₹156.35** → **exchange ratio 0.1787** (H issues 0.1787 share per B share) |
| **5** AB Ltd. & XY Ltd. | Share price ₹500 (avg of 570 & 430). DCF value 592.40 L, net assets 250 L → avg **₹421.20 L**; shares = 4,21,20,000/500 = **84,240**; allocate on fully-paid equivalent (25 L): fully paid 67,392, partly paid 16,848 |
| **6** Hansel Ltd. | Gordon: 1800 = 54/(Kc − 0.09) → Kc = 12% → book weight of debt 80%; correct weights 60 : 72 (E : D) → Kc = **14.5455%** → value = 54/(0.145455 − 0.09) = **₹974.73 L** |
| **7** XYZ Ltd. (2-stage) | High growth: Ke 16.9%, Kd 9.1%, WACC 13%; stable: Ke 14%, Kd 9%, WACC 12%. FCFF Y1–4 = 56 / 67.20 / 80.64 / 96.77; PV (13%) = 217.38; TV = 375.32 / (0.12 − 0.10) = 18,766 → PV 11,503.56; **Firm value ₹11,720.94 cr** |
| **8** WXY Ltd. (2-stage, WACC 15%) | FCF Y1–3 = 1342.50 / 1619.62 / 1953.47 → PV 3,676.44; TV = 2680.13/(0.15−0.08) = 38,287.57 → PV 25,174.08; **Firm value ₹28,850.52 cr** |
| **9** Jatayu Ltd. EVA | Fin. leverage 1.5 = PBIT/(PBIT−40) → PBIT 120; NOPAT 84; WACC = 14%×300/700 + 7%×400/700 = 10%; **EVA = 84 − 0.10×700 = ₹14 L** |
| **10** RST Ltd. | Ke = 8.5 + 1.36×9 = 20.74%; Kd post-tax 7.70%; **WACC 17.58%**; EBIT 40.11 L; **EVA = −₹92,700** |
| **11** Tender Ltd. | PBT 21.43 L; EBIT **31.43 L**; EVA = 22,00,000 − 12,35,000 = **₹9,65,000**; EVA dividend = **₹1.6083/share** |
| **12** Orange/Grape/Apple | WACC 13.52% / 15.225% / 17.95%; EVA **2,730 / 1,025 / −1,700** → **Orange best** (highest EVA, lowest WACC); EPS 1.30 / 1.45 / 1.43; price @PE 11 = 14.30 / 15.95 / 15.73; market cap 87,230 / 1,32,385 / 1,57,300 (PE should be risk-adjusted for differing leverage) |
| **13** Delta Ltd. | Taxable income 25 L; EBIT **40 L**; EVA = 24 L − 12.6 L = **₹11.40 L**; EVA dividend **₹4.56/share**; if no dividend, value *increases* (higher growth/EBIT) |
| **14** XYZ Inc. | NOPAT 117; capital employed 605 × 12% = 72.60 → **EVA $44.40 m**; MVA = market value 500 − equity fund 425 = **$75 m** |
| **15** Herbal Gyan | Include off-book patent (₹40 L): investment 140 L × 15% = 21 → **EVA = 12 − 21 = −₹9 L** |
| **16** Constant Engineering | Capital = 200 + 400 + 100 (patent) = 700; Ke = 12%; WACC = 12(300/700) + 10(400/700) = **10.85%**; **EVA = 84 − 0.1085×700 = ₹8.05 cr** |

### Common traps
- Convert PAT → PBT using **(1 − t)** before adding interest to get EBIT.
- **Include unrecorded intangibles (patents)** in invested capital for EVA (Q15, Q16).
- For re-gearing beta use **market** weights, not book weights (Q6).
- In 2-stage DCF use **different WACC** for stable phase and discount TV with the **last high-growth-year** factor.
- Adjust EBITDA/EBIT for **extraordinary / one-time items** before applying multiples (Illustration 1).
- Present a **range** (min–max) and **comment on each method** in evaluation questions.
- Theory Qs from the chapter: (1) *EVA vs MVA* (§6.3–6.4), (2) *Relative valuation* (§5).

---

## 17. Quick theory Q&A (likely exam questions)

**Q. Differentiate EVA and MVA.**
EVA = NOPAT − WACC × invested capital: an *internal*, accounting-based measure of management efficiency over a period (return above hurdle rate). MVA = market value − invested capital: *external*, shows the market's view of cumulative value created; says nothing about share valuation. MVA is high for market darlings; EVA is the derived measure for discerning investors; in the short run they may be negatively correlated but converge.

**Q. Explain relative valuation.**
Comparative approach: derive a multiple (EV/EBITDA, EV/Sales, P/E, PEG…) from comparable firms and apply to target. Four steps – choose driver, choose ratio, choose comparables, iterate. Assumes efficient market, linear fundamentals–multiple link, comparable structure/risk/growth. Used to cross-check intrinsic value.

**Q. Why can't traditional methods value start-ups?** Table in §10.1.

**Q. Going concern vs liquidation value?** §8.

**Q. How to treat ESG in valuation?** §13 – through discount rate or (preferably) explicit cash-flow adjustments for E, S and G.

**Q. Why is DCF unsuitable for distressed firms and what are the alternatives?** §9.
