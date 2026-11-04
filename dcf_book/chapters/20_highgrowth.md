# Chapter 20 — Start-ups, High-Growth Companies and Digital Platforms

Young companies break most of the assumptions that make DCF easy: there is no stable history, margins are negative, growth is explosive, survival is uncertain, and the capital structure is changing. Yet the logic of DCF still applies. This chapter adapts it — and describes the venture-oriented methods that practitioners use alongside it.

## 20.1 What is different?

| Feature | Mature company | Start-up / high-growth |
|---------|----------------|------------------------|
| History | Long, stable | Short or none |
| Earnings | Positive, predictable | Negative; may be for years |
| Growth | Near economy's rate | 50–200%+ initially |
| Survival | Near-certain | A real risk; many fail |
| Value source | Assets in place | Future growth options |
| Capital | Stable | Repeated funding rounds, dilution |
| Comparables | Many | Few, imperfect |

## 20.2 A DCF for a young company

Damodaran-style "story to numbers" approach:

1. **Tell the story.** What is the market, how big can it be, how does the company win share, what will its economics look like at maturity?
2. **Convert to drivers.** Revenue in year 10 (market size × target share), target operating margin at maturity, sales-to-capital ratio, tax rate.
3. **Interpolate.** Create a path from today's revenue and (negative) margin to the year-10 targets; growth and margin converge year by year.
4. **Reinvestment.** From the sales-to-capital ratio: Reinvestmentₜ = ΔRevenueₜ ÷ (Sales-to-capital).
5. **Taxes.** Net operating losses (NOLs) build up and shelter future profits; model the tax asset.
6. **Discount rate.** Start with a high cost of capital (reflecting high beta, all-equity funding) and glide it to a mature level (e.g., 11–12%) by year 10.
7. **Terminal value** at year 10 with stable growth and ROIC near WACC (or modestly above for durable advantage).
8. **Survival probability.** Multiply the PV by the probability the firm survives — or, equivalently, add a distress/failure value.
9. **Equity bridge**, including *existing and future* dilution from options and funding.

### 20.2.1 Worked example: "NovaCart", an online grocery platform (illustrative)

Current revenue ₹50 crore; operating loss about ₹20 crore (a margin of roughly −40%). *Story:* reach ₹4,000 crore of revenue by year 10 (about 1.3% of a ₹3 lakh crore addressable market) at a mature EBIT margin of 14%, with a sales-to-capital ratio of 3.0 (an asset-light platform). Revenue grows at a compound rate of about 54% a year, margin improves linearly from −40% to +14%, opening tax losses of ₹30 crore build up with the early losses and shelter profits when they arrive, WACC glides from 15% in year 1 to 11.5% in year 10, terminal growth is 5% and terminal ROIC 14%.

| Year | Revenue | EBIT | FCFF |
|-----:|--------:|-----:|-----:|
| 1 | 77 | (27) | (36) |
| 2 | 120 | (35) | (49) |
| 3 | 186 | (44) | (66) |
| 4 | 289 | (53) | (87) |
| 5 | 447 | (58) | (111) |
| 6 | 693 | (53) | (135) |
| 7 | 1,074 | (24) | (151) |
| 8 | 1,665 | 53 | (144) |
| 9 | 2,581 | 222 | (83) |
| 10 | 4,000 | 560 | (41) |

*Valuation.* PV of the ten years of (negative) cash flows = **−₹441 crore** (these are the funding needs). Terminal value at year 10 = ₹4,362 crore, which discounts (cumulative factor 0.298) to **₹1,301 crore**. Value if the story succeeds = 1,301 − 441 = **₹860 crore**. Failure value is assumed at ₹5 crore (salvage of technology and brand) and the probability of survival at 70%, so the survival-weighted value is 0.7 × 860 + 0.3 × 5 = **≈ ₹604 crore**.

*Convexity.* Changing the story changes the answer enormously: year-10 revenue of ₹6,000 crore at a 15% margin gives ₹1,522 crore; ₹2,000 crore at 10% gives ₹140 crore; ₹1,000 crore at 8% gives **less than zero** (−₹42 crore) — a business that burns more cash than it can ever repay is worth zero to a limited-liability equity holder, not a negative amount. A margin of 10% instead of 14% cuts the successful-case value from ₹860 crore to ₹388 crore, and a lower capital efficiency (sales-to-capital of 2.0) to ₹617 crore. That *convexity* — large gains in success, a floor of zero in failure — is why growth companies are priced like options on success, and why a single point estimate is especially misleading for them.

## 20.3 Venture-capital method

Used by venture investors to determine the entry valuation.

1. Forecast the company's **exit value** at the horizon (typically 4–7 years), using a revenue/EBITDA multiple on the forecast results.
2. Choose a **target return** (IRR of 30–60% for early stage, reflecting high failure rates and illiquidity).
3. **Post-money valuation today = Exit value ÷ (1 + target IRR)ⁿ**
4. **Pre-money = Post-money − Investment.**
5. **Ownership required = Investment ÷ Post-money**, adjusted for future dilution: Required ownership today = Required ownership at exit ÷ (1 − expected dilution).

**Example.** Exit value expected ₹600 crore in year 5. Investor target IRR 40%. Post-money = 600 ÷ 1.4⁵ = 600 ÷ 5.378 = **₹111.6 crore**. Investment of ₹20 crore → ownership at exit needed = 20 ÷ 111.6 = **17.9%**; pre-money = ₹91.6 crore. If the founders expect 30% dilution from later rounds before exit, the investor needs 17.9% ÷ (1 − 0.30) = **25.6%** today for the same exit ownership.

*Why target IRRs are so high.* The target IRR is *not* a cost of capital; it is an expected return that bakes in failure: if 3 out of 4 start-ups fail, the successful one must return enough for the portfolio. A 40% "required IRR" on a successful scenario might correspond to a 15–20% expected portfolio return. Mixing a venture-capital hurdle with a probability-weighted forecast double-counts risk; use one or the other.

## 20.4 Scenario and probability-weighted approaches (First Chicago method)

Build three scenarios — success, modest outcome (sideways), failure — with probabilities and exit values; discount each at a moderate rate and weight:

| Scenario | Probability | Exit value in year 5 (₹ cr) | PV at 20% |
|----------|-----------:|----------------------------:|----------:|
| Success | 20% | 1,200 | 482 |
| Sideways | 35% | 250 | 100 |
| Failure | 45% | 0–20 (say 10) | 4 |
| **Weighted** | | | **≈ 133** |

(PV factor for 5 years at 20% = 0.4019: 1,200 × 0.4019 = 482; 250 × 0.4019 = 100; 10 × 0.4019 = 4. Weighted = 0.2 × 482 + 0.35 × 100 + 0.45 × 4 = 96.4 + 35 + 1.8 ≈ ₹133 crore.)

The advantage: probabilities and outcomes are explicit; the discount rate is a rate for the *systematic* risk of the successful business rather than the entire survival risk.

## 20.5 Other start-up methods

These are *heuristics* rather than valuation in the DCF sense, but common in early-stage markets.

| Method | Description | Limitations |
|--------|-------------|-------------|
| **Berkus** | Assign up to a fixed sum (e.g., ₹0.5 crore in an Indian adaptation of the original $500k) to each of five factors: sound idea, prototype, quality management team, strategic relationships, product rollout/sales | Caps value; ignores market size |
| **Scorecard** | Start from average pre-money valuation of comparable seed-stage companies; adjust by weighted factors (team 30%, market 25%, product 15%, competition 10%, marketing/sales 10%, need for funding 5%, other 5%) | Weights are conventions |
| **Risk-factor summation** | Start with a base pre-money and add/subtract ₹ amounts for 12 risk factors (management, stage, legislation, manufacturing, sales, funding, competition, technology, litigation, international, reputation, exit potential) | Subjective |
| **Cost-to-duplicate** | Sum of costs to rebuild the technology and team | Ignores future earnings; floor value |
| **Comparable transactions** | Price per user, price per GMV or revenue multiples from recent funding rounds | Reflects funding-market sentiment |
| **Option pricing** | Treat the equity as an option on enterprise value (Chapter 23) | Needs volatility and exercise-price estimates |

## 20.6 Digital platforms and network-effect businesses

Marketplaces, social networks, payment platforms and SaaS products generate value from users, data and network effects. Specific modelling points:

1. **Unit economics:** customer acquisition cost (CAC), lifetime value (LTV), contribution margin, retention/churn. A healthy business has LTV/CAC above 3×.
2. **Cohort analysis:** revenue per cohort over time; revenue grows even without new users when retention is strong.
3. **Gross merchandise value (GMV) vs. net revenue:** take-rate (net revenue ÷ GMV) determines revenue; treat GMV carefully for accounting differences.
4. **Operating leverage:** high fixed (technology) costs, low marginal costs → margins expand dramatically beyond scale.
5. **Network effects and winner-takes-most:** market share targets in the terminal year should reflect whether network effects allow dominance; scenarios with winner-take-all vs fragmented outcomes diverge widely.
6. **Capitalise development and marketing:** much of the spending is investment (customer acquisition builds a customer base). Adjust ROIC.
7. **Stock-based compensation:** large; treat as a real expense.
8. **Valuation multiples:** EV/Revenue, EV/GMV, EV/active user — only as cross-checks; compare after adjusting for growth and margin differences (regression of EV/Sales on growth and margin among peers).

### 20.6.1 Top-down and bottom-up revenue
- *Top-down:* TAM → SAM → SOM → share. Easily inflated: demand a bottom-up check.
- *Bottom-up:* number of customers × ARPU × (1 − churn). More verifiable.

### 20.6.2 SaaS metrics
Annual recurring revenue (ARR), net revenue retention (NRR; > 110% is healthy), gross margin (typically 70–80%), "Rule of 40" (growth % + profit margin % ≥ 40%).

## 20.7 Discount rates for young firms

- **Beta** from bottom-up peers *at the start* is typically high (1.3–1.8); a high-growth firm with high operating leverage also has high business risk.
- **Debt**: none early on; the cost of capital is cost of equity.
- **Glide path:** as the firm matures, beta moves toward 1 (or the industry average) and cost of equity declines; by year 10 use the stable-state WACC.
- **No arbitrary add-ons** for failure risk: handle failure through survival probabilities.
- For *private* start-ups with undiversified investors, total beta (market beta ÷ correlation) is sometimes used to reflect the investor's actual exposure; this is investment value, not fair market value.

## 20.8 Dilution and the equity bridge

- **Convertible notes, SAFEs, preferred stock:** model liquidation preferences, participation and conversion. The equity "value per common share" differs from the price paid by preferred investors. Use the *waterfall* method or an option-pricing breakpoint analysis (OPM) to allocate equity value among classes (this is common in Ind AS 113 and in 409A-style valuations).
- **Future funding rounds** reduce current holders' percentage; either (i) include the cash raised and the resulting dilution in the model, or (ii) value pre-money and apply the dilution to ownership percentages.

## 20.9 A discipline for start-up valuation

1. Value the *story*, not the spreadsheet: ensure the numbers match the narrative.
2. Triangulate between DCF, VC method, scenarios and market comparables.
3. Test the convexity: valuations should vary hugely between failure and success.
4. Avoid mixing venture IRR hurdles with probability-weighted cash flows.
5. Present the valuation as a range with explicit probabilities.

## Chapter 20 summary

- Young-firm DCF: story → drivers → year-10 targets → interpolate → survival-adjust.
- VC method: Post-money = exit ÷ (1 + IRR)ⁿ; adjust ownership for dilution.
- Scenario methods (First Chicago) separate probability of failure from the discount rate.
- Platforms: unit economics, retention, take-rate, network effects.
- Waterfalls and option-pricing allocate value among share classes.

## Review questions

1. Why is a "40% target IRR" not a cost of capital?
2. Compute pre-money: exit ₹400 crore in 4 years, target IRR 50%, investment ₹15 crore.
3. How do you handle negative earnings in a DCF for a start-up?
4. What distinguishes a good platform's unit economics?
5. Why is survival probability better than a company-specific risk premium?

<div class="pagebreak"></div>
