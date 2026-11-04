# Chapter 28 — A Library of Compact Valuations

This chapter presents six short valuations of different kinds of business. Each follows the same pattern — facts, approach, numbers, result, lesson — and illustrates one theme from the book. They are fictional and simplified; treat them as worked exercises that can be rebuilt in a spreadsheet in half an hour each.

## Case A — An IT-services company (asset-light, high ROIC)

**Facts.** *IndiaTech Services Ltd*: revenue ₹6,000 crore; EBIT margin 22% (EBIT ₹1,320 crore); no debt; net cash ₹1,800 crore (surplus); 100 crore shares. Revenue growth 10%, 9%, 8%, 7%, 6%; margin steady at 22%. Marginal sales-to-capital 4.0 (very asset-light). Tax 25%.

**Approach.** All-equity firm: WACC = cost of equity = 7.0% + 0.90 × 6.0% = **12.4%**. Mid-year discounting. Terminal growth 5%, terminal ROIC 25% (strong, durable client relationships and brand, but fading from a very high current level).

**Results (₹ crore).**

| Component | Value |
|-----------|------:|
| PV of FCFF, years 1–5 | 4,213.2 |
| PV of terminal value | 9,753.6 |
| **Enterprise value** | **13,966.9** |
| Add: net cash | 1,800.0 |
| **Equity value** | **15,766.9** |
| **Per share** | **₹157.67** |

TV share of EV: 69.8%. EV/FY26 EBIT = 10.6×.

**Sensitivities (₹ per share).** Terminal ROIC 18%: 148.2; terminal ROIC = Ke (12.4%): 132.9; margin 20% instead of 22%: 144.5; WACC 13.4% (+1 point): 141.8.

**Lessons.**
1. An asset-light business has low reinvestment, so FCFF is close to NOPAT and growth costs little.
2. Because reinvestment is small, terminal ROIC matters less than for capital-intensive firms: even at ROIC = Ke the value falls "only" 16%.
3. The cash is surplus: it is added in the bridge and *not* inside the WACC.
4. Margin is the dominant driver: a 2-point fall cuts the value by about 8%.

## Case B — A cement producer (cyclical, mid-cycle terminal)

**Facts.** *Rajmandir Cement*: current volume 8.0 million tonnes growing 5% a year; EBITDA per tonne follows the cycle ₹1,300, ₹1,000, ₹800, ₹1,100, ₹1,300 over the next five years (cycle average ≈ ₹1,100); D&A ₹300 crore; capex ₹520 crore a year; tax 25%; WACC 11.5%; terminal growth 4%; terminal ROIC 13%. Terminal volume = year-5 volume × 1.04.

**Explicit cash flows (₹ crore).**

| Year | Volume (Mt) | EBITDA/t (₹) | EBITDA | EBIT | FCFF |
|-----:|------------:|-------------:|-------:|-----:|-----:|
| 1 | 8.40 | 1,300 | 1,092.0 | 792.0 | 374.0 |
| 2 | 8.82 | 1,000 | 882.0 | 582.0 | 216.5 |
| 3 | 9.26 | 800 | 740.9 | 440.9 | 110.7 |
| 4 | 9.72 | 1,100 | 1,069.6 | 769.6 | 357.2 |
| 5 | 10.21 | 1,300 | 1,327.3 | 1,027.3 | 550.5 |

PV of explicit FCFF (mid-year at 11.5%) = **₹1,203.7 crore**.

**Terminal value under three views of "normal".**

| Terminal EBITDA/t | Terminal value (₹ cr) | PV of TV | **EV** | vs mid-cycle |
|------------------:|----------------------:|---------:|-------:|-------------:|
| ₹1,100 (mid-cycle) | 5,926.5 | 3,631.3 | **4,835.0** | — |
| ₹1,300 (year-5 peak, "naive") | 7,396.8 | 4,532.2 | 5,735.9 | **+18.6%** |
| ₹800 (trough) | 3,721.1 | 2,280.0 | 3,483.7 | **−27.9%** |

**Lessons.**
1. Terminal margins must reflect the *cycle*, not the year in which the forecast ends; here the forecast ends at a peak, so naive extrapolation overstates EV by almost a fifth.
2. The explicit period includes the downturn (years 2–3): cash flow falls 80% from year 1 to year 3 and recovers — a pattern lost if one used a single average margin from the start.
3. Debt covenants matter in the trough years: a leveraged cyclical may breach covenants even if intrinsic value is positive.

## Case C — A non-banking finance company (excess-return model)

**Facts.** *Kaveri Finance Ltd*: book equity ₹6,000 crore; ROE 17%; equity (and loans) grow 18% a year for five years, then 8% in stable growth with terminal ROE 16%; Ke 14%.

**Approach.** FCFE = net income − growth in book equity (the retention needed to keep leverage constant). The five-year FCFEs are small or negative because growth absorbs all earnings: PV of explicit FCFE = **−₹282 crore**. Book equity at year 5 = ₹13,726 crore; terminal net income = 16% × 13,726 = 2,196; FCFE₆ = 2,196 × (1 − 0.08/0.16) = 1,098; TV = 1,098 ÷ (0.14 − 0.08) = ₹18,302 crore; PV = **₹9,505 crore**.

**Equity value = −282 + 9,505 = ₹9,223 crore → P/B = 1.54×.**

**Sensitivities (P/B).**

| Terminal ROE | P/B |
|-------------:|----:|
| 12% | 0.75 |
| 14% (= Ke) | 1.14 |
| 16% (base) | 1.54 |
| 18% | 1.93 |
| Base ROE but Ke 15% | 1.25 |

**Lessons.**
1. The value is entirely in the terminal period; the explicit years consume cash.
2. The terminal ROE relative to Ke is decisive. If the competitive position erodes ROE to 12%, P/B falls below 1 — consistent with theory.
3. Even at ROE = Ke the firm is worth 1.14× book because the five years of growth at ROE 17% add value.

## Case D — An early-stage software company (First Chicago method)

**Facts.** *CloudLedger*, an accounting-software start-up raising its Series A. Exit values in year 5 under three scenarios; discount rate 25% (a high rate reflecting the systematic risk of early-stage equity, with *failure risk handled in the probabilities*).

| Scenario | Probability | Exit equity value (₹ cr) | PV at 25% (× 0.3277) | Weighted PV |
|----------|-----------:|-------------------------:|---------------------:|------------:|
| Success | 20% | 1,500 | 491.5 | 98.3 |
| Sideways | 35% | 300 | 98.3 | 34.4 |
| Failure | 45% | 15 | 4.9 | 2.2 |
| **Expected value today (post-money-equivalent)** | | | | **₹134.9 crore** |

**Cross-check with the VC method.** The investor proposes ₹30 crore for 20% of the company: implied post-money ₹150 crore, pre-money ₹120 crore. Expected value (₹134.9 crore) is below ₹150 crore: the investor would be paying about 11% above the expected value. Pre-money consistent with the First Chicago value: 134.9 − 30 = ₹104.9 crore, implying an ownership stake of 30 ÷ 134.9 = 22.2% for ₹30 crore.

**Lessons.**
1. The expected value is dominated by the success scenario (73% of the total), yet only 20% likely — typical of venture investments.
2. The result is only as good as the probabilities and exit values; test them with a market comparison (multiples of revenue at exit).
3. Do not double-count failure risk: using both a 25% rate and a 45% failure probability together is deliberate here (the 25% is a risk premium for systematic risk and illiquidity), but a 50% venture-hurdle rate on top would be excessive.

## Case E — A listed holding company (sum-of-the-parts with discount)

**Facts.** *Sagar Holdings Ltd* owns: a 40% stake in a listed company (market value of its stake ₹4,500 crore); 100% of an unlisted manufacturing subsidiary (separate DCF: ₹3,000 crore); a property portfolio (₹800 crore); cash ₹300 crore. Holding-company debt: ₹1,400 crore. Capitalised value of holding-company costs (PV of overhead): ₹200 crore.

| Component | ₹ crore |
|-----------|--------:|
| Listed stake (market value) | 4,500 |
| Unlisted subsidiary (DCF) | 3,000 |
| Property portfolio | 800 |
| Cash | 300 |
| Less: holding-company debt | (1,400) |
| Less: PV of holding-company costs | (200) |
| **Net asset value (NAV)** | **7,000** |
| Less: holding-company discount (25%) | (1,750) |
| **Value of equity** | **5,250** |

**Lessons.**
1. A holding company is a portfolio; each part is valued by the most appropriate method.
2. The *holding-company discount* reflects tax leakage on distributions, overhead, lack of control over the underlying cash flows, and capital-allocation scepticism. It is empirical and variable (10–40%); explain the basis.
3. Avoid double-counting: if the subsidiary's value already reflects the group's cash, do not also add the same cash at holding level.
4. Check the *listed-stake value* net of tax on a realistic exit; a very large block may not sell at the quoted market price.

## Case F — A toll-road concession (finite life, equity IRR)

(See Chapter 19.) Equity of ₹400 crore; no distributions in years 1–3; ₹40, 55, 65, 75 crore in years 4–7; ₹90 crore a year in years 8–20. Total distributions ₹1,405 crore (3.5× equity); equity IRR **11.6%**; NPV at 14% = **−₹78 crore**.

**Lessons.**
1. A finite concession has no terminal value; all value is explicit.
2. A strong multiple of money (3.5×) can coexist with a below-hurdle return because the cash arrives late.
3. The levers (tariff, ramp-up, debt cost, concession extension) can be tested one at a time; for instance, a one-year acceleration of every distribution (a faster ramp-up) would raise the equity IRR from 11.6% to about 13.2%.

## Pulling the cases together

| Case | Business type | Value driver that dominates | Method adaptation |
|------|---------------|-----------------------------|-------------------|
| A | IT services | Margin | All-equity WACC; surplus cash in the bridge |
| B | Cement | Terminal mid-cycle EBITDA/t | Explicit cycle + normalised terminal |
| C | NBFC | Terminal ROE vs Ke | FCFE and excess-return model |
| D | Start-up | Probability and size of success | Scenario-weighted with moderate rate |
| E | Holding company | Value of underlying stakes and the discount | SOTP/NAV |
| F | Infrastructure | Timing of distributions | Finite-life FCFE; IRR vs hurdle |

The common thread: *identify what drives value in this particular business, build the model so that driver is explicit, and test it.*

## Chapter 28 summary

- Six compact valuations show how method and emphasis change by business type.
- Terminal assumptions drive most of the value in A–D; in E the underlying values and the discount do; in F timing does.
- Every adaptation is a case of *consistency*: the model's structure follows the business's economics.

## Review questions

1. In Case A, why is the value less sensitive to terminal ROIC than in a capital-intensive business?
2. In Case B, what would you do if the forecast period ended at a trough instead of a peak?
3. In Case C, why is the explicit-period PV negative?
4. In Case D, why is the discount rate 25% and not 50%?
5. In Case E, what could justify a holding-company discount of only 10%?

<div class="pagebreak"></div>
