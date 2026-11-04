# Chapter 19 — Cyclical, Commodity, Infrastructure and Real-Estate Businesses

Some businesses defy the steady-growth template. Their earnings swing with the cycle, their assets have finite lives, or their value lies in real assets rather than operating margins. This chapter adapts DCF to those cases.

## 19.1 Cyclical businesses

A cyclical company's earnings and cash flows rise and fall with the economic cycle or industry cycle: steel, cement, auto, capital goods, shipping, chemicals, airlines, hotels. The challenge: *when* in the cycle is the valuation date, and what is a *normal* level of profit?

### 19.1.1 Principles
1. **Never extrapolate the current year.** Peak-year margins are not normal; trough margins are not permanent.
2. **Model the cycle or normalise it.** Either forecast the cycle explicitly for several years (expansion, peak, contraction, trough) or work with mid-cycle values throughout.
3. **Terminal value on mid-cycle economics.** Terminal margin, ROIC and capital intensity must be normalised.
4. **Link margins to the industry's cost curve.** In commodity businesses, the long-run price equals the marginal cost of the highest-cost producer needed to meet demand. A company with a low position on the cost curve earns a rent; one at the top earns only its cost of capital in the long run.
5. **Capital intensity is lumpy.** Capacity is added in blocks; model through capacity utilisation and expansion cycles rather than smooth reinvestment.

### 19.1.2 Normalisation methods

| Method | How |
|--------|-----|
| Average margin | Average EBIT margin over a full cycle (7–10 years) |
| Mid-cycle price deck | Use long-run commodity price (from forward curves or cost-curve analysis) and company cost structure |
| Average return on capital | Mid-cycle ROIC × invested capital = normalised NOPAT |
| Replacement-cost approach | Value = replacement cost of assets when ROIC ≈ WACC in the long run |
| Explicit cycle | Forecast price/volume for years 1–5 with turn, then mid-cycle |

### 19.1.3 Illustration: a cement company

A cement company with capacity of 10 million tonnes, EBITDA per tonne historically ranging ₹600–₹1,800 (cycle average ₹1,100), replacement cost per tonne ₹6,500, WACC 11%. Mid-cycle EBITDA = 10 × 1,100 = ₹1,100 crore. Maintenance capex and tax reduce this to FCFF of roughly ₹600 crore. A Gordon valuation at g = 4%: 600 × 1.04 ÷ 0.07 ≈ ₹8,900 crore, i.e., ₹890 per tonne of capacity, compared with replacement cost of ₹6,500 per tonne = ₹6,500 crore for the whole. The value above replacement cost implies that the company (or the industry) earns returns above its cost of capital; if new capacity can be built at ₹6,500 per tonne, new entry would eventually cap the value near replacement cost (EV/tonne ≈ replacement cost). The valuer must decide whether barriers to entry (limestone reserves, location) justify the premium.

### 19.1.4 Beta of cyclicals
Cyclical firms tend to have high operating leverage and betas above 1. Bottom-up betas of peers over a full cycle are better than a regression over a single boom or bust.

## 19.2 Commodity and natural-resource businesses

Value depends on reserves, production profiles, prices and costs.

**Steps:**
1. **Reserves and production schedule** (proven, probable, possible) with probability-weights.
2. **Price deck:** consensus or forward-curve, converging to long-run price.
3. **Operating costs** by unit (cash cost per tonne/barrel) with inflation.
4. **Capex:** sustaining and expansion; decommissioning.
5. **Royalties, taxes and levies** (important in India for coal, minerals, hydrocarbons).
6. **Finite life:** cash flows end at depletion; no perpetuity. Terminal value is zero or salvage/closure.
7. **Discount rate** reflecting commodity-price systematic risk and country risk.

A mine with finite life cannot be valued with a perpetual-growth terminal value; use explicit cash flows to the end of reserve life. Alternatively, model reserve replacement for a going-concern producer and apply perpetual growth to a "sustaining" state.

## 19.3 Infrastructure and project-finance businesses

Roads (BOT/HAM), power plants, ports, airports, pipelines and telecom towers often have contractually defined lives (concessions) and regulated or contracted revenue.

### 19.3.1 Features
- **Finite concession:** cash flows end at concession expiry (with possible extension). Terminal value is 0 or the pre-agreed termination payment.
- **Revenue structure:** annuity (HAM), toll/traffic-based, or tariff-regulated (PPA, regulated return on equity).
- **High, often long-dated leverage:** 70–80% debt; **project IRR and equity IRR** are the key metrics.
- **Debt sizing:** governed by debt-service coverage ratio (DSCR).

### 19.3.2 Valuation approach
Use **FCFE** (cash flow to equity after debt service) or **FCFF with project WACC and APV**. The cash-flow waterfall is crucial: revenue → operating costs → taxes → debt service → reserve accounts → equity distributions. Key risks: traffic/demand, construction, regulatory change, refinancing.

### 19.3.3 Illustrative equity IRR
A toll road requires equity of ₹400 crore and is expected to distribute ₹40, ₹55, ₹65 and ₹75 crore in years 4–7 and then ₹90 crore a year in years 8–20 (nothing in years 1–3 while the road is built and ramps up). The total distribution is ₹1,405 crore, 3.5 times the equity invested — but the money arrives late. The equity IRR is about **11.6%**, and the NPV at a 14% cost of equity is about **−₹78 crore**. As structured, the investment does not meet the hurdle: a higher tariff, faster ramp-up, a longer concession or cheaper debt would be needed. The example shows why a high *multiple of money* can coexist with a poor *return*: timing matters.

## 19.4 Real estate and REITs

### 19.4.1 Net asset value (NAV) approach
NAV = Market value of investment properties + other assets − debt − other liabilities. The market value of each property is derived through:
- **Income capitalisation:** Value = Net operating income (NOI) ÷ Capitalisation rate (cap rate). For commercial property, cap rates are typically 7–9% in Indian metros, lower for prime Grade A assets.
- **DCF of NOI** with explicit lease expiries, re-leasing assumptions, vacancy, capex and an exit cap rate.
- **Comparable sales** per square foot.

### 19.4.2 Developers (residential)
Valuation is project-by-project: land cost, approvals, construction cost, sales velocity and price, collections schedule, RERA constraints. Use project-level DCF (inflows from customers, outflows for land/construction, taxes) and sum, then deduct corporate overheads and net debt. Land bank is valued at market with a probability-weighting for development timing.

### 19.4.3 REITs / InvITs
Distributable cash flow (NDCF) to unit-holders is the key; valuation by (i) NAV, (ii) DCF of NDCF at cost of equity, (iii) distribution yield versus risk-free rate, (iv) P/NAV. Mandatory distribution rules (90% of NDCF) make DDM-style models appropriate.

### 19.4.4 Cap-rate arithmetic
Cap rate = Rf + risk premium − expected growth. A property with NOI ₹10 crore, cap rate 8% → value ₹125 crore. A 50-bp rise in cap rate to 8.5% reduces value 5.9% to ₹117.6 crore — notice the sensitivity.

## 19.5 Asset-heavy and holding companies

Holding companies, investment firms, and companies whose main value is in listed or unlisted investments are valued on a **sum-of-the-parts** or **NAV** basis: value each holding (at market or by DCF), deduct holding-company debt and costs, and consider a **holding-company discount** (typically 15–30%) reflecting structural inefficiencies and tax leakage. The discount is an empirical regularity, not a theorem; it depends on governance and capital-allocation record.

## 19.6 Companies with a finite life or declining business

A business facing structural decline (print media, certain legacy telecoms) should be valued with *negative* terminal growth or finite cash flow; the Gordon formula works with negative g, though the value is smaller:

**TV = FCFFₙ₊₁ ÷ (WACC − g)** with g = −3%: e.g., FCFF 100, WACC 10% → TV = 100 × 0.97 ÷ 0.13 = 746. The reinvestment rate in a declining business is *negative* (liquidating assets); consistency means FCFF can exceed NOPAT.

## 19.7 Summary of adaptations

| Business type | Main adaptation |
|---------------|-----------------|
| Cyclical | Mid-cycle margins; terminal on normalised economics; cost-curve logic |
| Commodity producers | Reserve life, price deck, finite cash flows |
| Infrastructure | Concession life, project IRR, FCFE/waterfall |
| Real estate | NOI/cap rate, NAV, project DCF |
| Holding company | SOTP/NAV with discount |
| Declining business | Negative g, liquidation-like reinvestment |

## Chapter 19 summary

- Cyclicals: normalise; avoid extrapolating peak or trough; terminal on mid-cycle.
- Resources and concessions: finite lives, no perpetuity.
- Real estate: NOI ÷ cap rate or DCF of NOI; NAV; project DCF for developers.
- Holding companies: NAV/SOTP with a justified discount.

## Review questions

1. Why is a peak-year margin a poor basis for a terminal value?
2. How would you value a mine with 12 years of reserves?
3. A property earns NOI of ₹8 crore; cap rate 7.5%. What is its value? What if the cap rate rises to 8.5%?
4. Why is perpetual growth inappropriate for a toll road concession?
5. What drives a holding-company discount?

<div class="pagebreak"></div>
