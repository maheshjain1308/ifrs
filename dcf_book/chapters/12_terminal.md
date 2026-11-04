# Chapter 12 — Terminal Value

In most DCF valuations, more than half the total value — often 70–85% — comes from the terminal value (TV): the value of all cash flows beyond the explicit forecast. It is therefore the most consequential and most abused part of the model. This chapter covers the principal methods, the consistency conditions they must meet, and ways to test them.

## 12.1 What terminal value represents

At the end of the explicit period (year N), the model assumes the business enters a *steady state*: it grows at a constant rate forever, earns a constant return on new capital, and maintains a constant capital structure. The terminal value at year N is the present value, at that date, of all subsequent cash flows. It is then discounted back to today.

**EV = Σₜ₌₁ᴺ FCFFₜ ÷ (1+WACC)ᵗ + TVₙ ÷ (1+WACC)ᴺ**

## 12.2 The Gordon growth (perpetuity growth) method

**TVₙ = FCFFₙ₊₁ ÷ (WACC − g)**

where FCFFₙ₊₁ is the first cash flow *after* the explicit period — not simply FCFFₙ × (1 + g) unless the year-N cash flow was already at steady state. The method assumes growth g forever.

### 12.2.1 Choosing g
The terminal growth rate must be no greater than the long-run growth rate of the economy in the currency of the cash flows. Rationale: a company cannot outgrow the economy forever, or it would eventually be larger than the economy. Practical anchors:

- **Risk-free rate** as a ceiling (a rough proxy for the nominal growth rate of the economy): g ≤ Rf = 7.0% for Meridian.
- **Nominal GDP growth** long-run forecasts for India (real growth 5–6% plus inflation 4–5%) suggest 9–11%, higher than Rf; but most valuers use a *much lower* g (4–6%) because a *single company* should converge below the economy as a whole and because the share of the economy that any firm can capture is finite.
- **Inflation plus modest real growth**: 4–5% for staple businesses; for declining industries, 0–3%.

Meridian uses **g = 5.0%**, which is below Rf (7.0%) and approximately inflation plus 1 percentage point of real growth.

### 12.2.2 Sensitivity
Terminal value is *highly* sensitive to g. With WACC = 11.225%: g = 4% gives TV multiple = 1/(0.07225) = 13.8; g = 5% gives 1/0.06225 = 16.1; g = 6% gives 1/0.05225 = 19.1. A 1-point change in g changes TV by 15–19%.

## 12.3 Consistency: growth requires reinvestment

The most important rule of terminal value: **FCFF in the terminal year must be consistent with the growth rate and the return on new investment.**

**Reinvestment rate = g ÷ ROIC**  →  **FCFFₙ₊₁ = NOPATₙ₊₁ × (1 − g/ROIC)**

Substituting gives the **value-driver formula**:

**TVₙ = NOPATₙ₊₁ × (1 − g/ROIC) ÷ (WACC − g)**

This formula makes the economics clear. Two special cases:

- **ROIC = WACC (no excess returns).** Then TV = NOPATₙ₊₁ × (1 − g/WACC) ÷ (WACC − g) = NOPATₙ₊₁ ÷ WACC. *Growth adds no value*, because new investment earns exactly its cost. The TV is independent of g.
- **ROIC > WACC.** Growth creates value; higher g raises TV.
- **ROIC < WACC.** Growth destroys value; TV *falls* as g rises.

> **Key idea.** Terminal growth is not a free lunch. Assuming 5% growth *and* low reinvestment implies infinite ROIC — which is neither plausible nor sustainable. Always compute implied ROIC from your terminal assumptions.

### The usual error
Many models compute FCFFₙ₊₁ = FCFFₙ × (1 + g) with year-N FCFF that still reflects high-growth reinvestment (too low a cash flow) or, conversely, with depreciation exceeding capex (too high a cash flow). Rebuild terminal FCFF from NOPAT and the reinvestment rate g/ROIC.

## 12.4 Terminal ROIC

What ROIC should be used? Options:

1. **ROIC = WACC.** Competitive advantages disappear; the most conservative and a common choice for commodity or intensely competitive industries.
2. **ROIC = a modest premium over WACC** (e.g., 3–5 points) for firms with durable brands.
3. **Current ROIC held constant.** Appropriate only if there is evidence of a lasting moat; otherwise aggressive.
4. **Fade** from current to a long-run level over the final years.

Meridian: ROIC reaches roughly 18% by the end of the forecast; we assume terminal ROIC of **15%**, a moderate fade that still leaves a substantial spread over WACC (3.8 points).

## 12.5 Meridian's terminal value

- Year-5 revenue: 3,306.7; terminal-year (year 6) revenue = 3,306.7 × 1.05 = **3,472.0**.
- EBIT margin (held at year-5 level): 14.5% → EBIT = 503.4; NOPAT = 503.4 × 0.75 = **377.6**.
- Reinvestment rate = g ÷ ROIC = 5% ÷ 15% = **33.3%**; reinvestment = 125.9.
- **FCFF₆ = 377.6 × (1 − 0.3333) = 251.7.**
- **TV₅ = 251.7 ÷ (0.11225 − 0.05) = 251.7 ÷ 0.06225 = ₹4,043.7 crore.**
- Discount factor, year 5 = 1 ÷ 1.11225⁵ = 0.5875.
- **PV of TV = 4,043.7 × 0.5875 = ₹2,375.6 crore.**

Share of enterprise value: 2,375.6 ÷ 2,913.3 = **81.5%**.

*What if ROIC = WACC in the terminal period?* FCFF₆ = 377.6 × (1 − 0.05/0.11225) = 377.6 × 0.5546 = 209.4; TV = 209.4 ÷ 0.06225 = 3,364; PV = 1,976. EV falls from 2,913 to about 2,514 (−14%). This 14% is the *value of Meridian's assumed terminal competitive advantage*. That quantification is useful in negotiation: the buyer should not pay for a moat the business may not have.

## 12.6 The exit-multiple method

**TVₙ = Multiple × Metricₙ** (e.g., EV/EBITDA × EBITDAₙ).

The multiple is taken from comparable companies or transactions. It is quick, tied to market pricing, and avoids the g-and-WACC debate. Limitations:

- It imports *current* market pricing (which may be inflated or depressed) into the terminal value, so the DCF is no longer purely intrinsic.
- The multiple embeds assumptions about growth, risk, and returns that may not match the terminal state of the company.
- It must be applied to a *normalised* EBITDA (mid-cycle) at the terminal date.

**Use the two methods against each other.** Compute implied exit multiple from the Gordon TV and compare with market multiples; compute implied g from an exit-multiple TV.

| Meridian | Value |
|----------|------:|
| TV₅ (Gordon) | 4,043.7 |
| EBITDA₅ (EBIT 479.5 + D&A ≈ 153.3) | 632.8 |
| **Implied EV/EBITDA at exit** | **6.4×** |
| Implied EV/NOPAT (year 5) | 11.2× |
| Implied EV/EBIT (year 5) | 8.4× |

For illustration, suppose listed leaders in the sector trade at EV/EBITDA multiples of 15–30× (check current data; such levels have been seen at times); an implied exit multiple of 6.4× is *very* conservative against that, which tells us either that the Gordon assumptions are conservative or that the peer multiples are very high because the market expects high long-term growth. Both views should be written into the report. The prudent response is to avoid setting the terminal value from peak peer multiples, but to *show* the sensitivity.

## 12.7 Implied growth from an exit multiple

If TVₙ = M × EBITDAₙ, the implied perpetual growth is obtained by solving TVₙ = FCFFₙ₊₁ ÷ (WACC − g). A rough shortcut: **g = (TV × WACC − FCFFₙ₊₁) ÷ (TV + FCFFₙ₊₁)** (when FCFFₙ₊₁ ≈ FCFFₙ(1 + g)). If an exit multiple implies g of 8% for a company in an economy growing at 5–6% real, the multiple is too high.

## 12.8 Other terminal-value methods

### 12.8.1 Liquidation value
For finite-life or declining businesses: terminal value equals the estimated liquidation value of assets (net of costs) at the horizon. Relevant for mining, projects with concession ends, a business facing structural decline.

### 12.8.2 Zero-growth perpetuity / earnings power value
**TV = NOPATₙ₊₁ ÷ WACC**: assumes no growth (equivalent to ROIC = WACC growth). The "earnings power value" is a conservative floor for a stable business; the difference between the DCF and EPV is the value of growth.

### 12.8.3 H-model and fading growth
Growth declines linearly from g_high to g_stable over H years: **TV = FCFFₙ × [(1 + g_stable) + H × (g_high − g_stable)/2] ÷ (WACC − g_stable)**. A neat approximation for fade periods when full year-by-year modelling is unnecessary.

### 12.8.4 Finite-life terminal value
If competitive advantage ends at year N + K, grow at g for K years with ROIC > WACC, then at g with ROIC = WACC. This is the "competitive-advantage-period" model.

## 12.9 Mid-year discounting and TV

With mid-year convention, as noted in Chapter 2, a Gordon TV is discounted at N − 0.5 years (because flows continue mid-year), while an exit-multiple TV is discounted at N years. In Meridian's case with end-year discounting, the Gordon TV factor is 0.5875. Under mid-year discounting every PV, including the PV of TV, would be higher by (1.11225)^0.5 − 1 ≈ 5.5%; on the terminal component alone that adds about ₹130 crore, and on total EV about ₹160 crore. Choose the convention consistent with when cash flows really arrive, and apply it to *all* flows.

## 12.10 Sanity checks on terminal value

1. **TV share of EV.** Over 75% is common; above 90% signals an under-specified explicit period.
2. **Implied multiples.** EV/EBITDA, EV/NOPAT at exit versus mature-industry multiples.
3. **Implied ROIC and reinvestment.** Terminal reinvestment rate positive; ROIC plausible.
4. **Terminal growth** ≤ Rf and ≤ long-run nominal GDP growth.
5. **Terminal margin** within the range peers sustain over cycles.
6. **Terminal capex vs depreciation** — capex > depreciation when g > 0.
7. **Terminal tax rate** at marginal.
8. **Terminal WACC** reflecting stable-state beta and leverage.

## 12.11 The Gordon formula and perpetual-growth pitfalls

- **WACC − g too small** (below ~4 points) explodes the multiple. With WACC 8% and g 6%, TV = 50 × FCFF. Be wary of low-WACC environments where g approaches WACC.
- **Using the nominal growth rate in a real model** or vice versa.
- **Applying g to non-recurring items** in the terminal-year cash flow.
- **Using terminal growth > inflation for a mature company** without justifying the real growth source.

## 12.12 Reporting terminal value

A good report shows the TV method, the key parameters (g, ROIC, WACC), TV as a % of EV, and a sensitivity table of EV versus (WACC, g) and (ROIC, g). Readers must be able to see at a glance how much of the value depends on the terminal assumptions.

## Chapter 12 summary

- TV usually represents 70–85% of value; treat it with care.
- Gordon: TV = FCFFₙ₊₁/(WACC − g), with FCFFₙ₊₁ = NOPATₙ₊₁(1 − g/ROIC).
- g ≤ risk-free / nominal economy growth; ROIC fades toward WACC unless there is a durable moat.
- Cross-check against exit multiples and implied ROIC.
- Meridian: TV 4,043.7; PV 2,375.6; 81.5% of EV; ROIC = WACC alternative cuts EV by 14%.

## Review questions

1. Why must terminal reinvestment be tied to terminal growth and ROIC?
2. If ROIC = WACC in perpetuity, what is the TV and why is it independent of g?
3. Compute TV: NOPAT₆ = 200, g = 4%, ROIC = 12%, WACC = 10%.
4. How does mid-year discounting treat Gordon versus exit-multiple TV?
5. List four sanity checks on a TV.

<div class="pagebreak"></div>
