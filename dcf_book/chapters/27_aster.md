# Chapter 27 — Second Case Study: A Listed Pharmaceutical Company

Chapter 14 valued a simple company with a clean balance sheet. This chapter works through a more realistic one: **Aster Pharma Ltd**, a listed company with heavier working capital, mid-year cash flows, leases, a minority interest in a subsidiary, a listed investment, an unfunded pension obligation and outstanding employee options. The purpose is to show how the equity bridge, the mid-year convention and the terminal value are handled when the real-world complications appear. Aster is fictional; its numbers are for teaching.

## 27.1 Engagement

- **Subject:** Aster Pharma Ltd (listed on NSE/BSE).
- **Valuation date:** 31 March 2026.
- **Purpose:** Estimate fair value of equity per share, as input to a board decision on a buy-back.
- **Standard of value:** Fair value (market-participant basis); going concern; no control premium (minority, marketable).
- **Approach:** FCFF DCF with mid-year discounting; cross-checks with trading multiples and sensitivities.
- **Units:** ₹ crore, nominal.

## 27.2 Business and base-year data

Aster develops and sells branded generics in India (about 60% of revenue) and exports (40%). It has strong chronic-therapy brands, a growing US generics business and a contract-manufacturing unit held through a 90%-owned subsidiary.

| Base year FY2026 | ₹ crore |
|------------------|--------:|
| Revenue | 4,000 |
| EBITDA (after Ind AS 116: rent excluded, ROU depreciation in D&A) | 960 (24.0%) |
| D&A (including right-of-use depreciation) | 200 (5.0%) |
| EBIT | 760 |
| NOPAT at 25% | 570 |
| Operating invested capital | 4,300 |
| ROIC (base) | 13.3% |
| Operating NWC | 880 (22% of revenue) |

**Items for the bridge (at 31 March 2026):**

| Item | ₹ crore |
|------|--------:|
| Borrowings | 700 |
| Lease liabilities (Ind AS 116) | 150 |
| Cash and bank balances (surplus) | 400 |
| Listed investment (non-operating, at market) | 200 |
| Non-controlling interest — 10% of the subsidiary, at estimated value | 250 |
| Unfunded pension/gratuity deficit (pre-tax 60) | 45 post-tax |
| Value of outstanding employee options (option-pricing model) | 80 |
| Shares outstanding (basic) | 100 crore |

## 27.3 Forecast assumptions

| Driver | FY27 | FY28 | FY29 | FY30 | FY31 | Terminal |
|--------|-----:|-----:|-----:|-----:|-----:|---------:|
| Revenue growth | 12% | 11% | 10% | 9% | 8% | 5% |
| EBITDA margin | 24.5% | 25.0% | 25.5% | 26.0% | 26.0% | 26.0% |
| D&A (% of revenue) | 5.0% | 5.0% | 5.0% | 5.0% | 5.0% | 5.0% |
| Capex (% of revenue) | 7.0% | 7.0% | 6.5% | 6.5% | 6.0% | via ROIC |
| NWC (% of revenue) | 22% | 22% | 22% | 22% | 22% | via ROIC |
| Tax rate | 25% | 25% | 25% | 25% | 25% | 25% |

Rationale: Domestic growth ahead of market on chronic-therapy share gains; export growth driven by US generics launches; margin expansion from mix and scale, held at 26% from FY30 (below the 28–30% of best-in-class peers); capex heavy in the first years for capacity and a new R&D facility (R&D expensed); working-capital intensity constant.

## 27.4 Free cash flow forecast

| ₹ crore | FY27 | FY28 | FY29 | FY30 | FY31 |
|---------|-----:|-----:|-----:|-----:|-----:|
| Revenue | 4,480.0 | 4,972.8 | 5,470.1 | 5,962.4 | 6,439.4 |
| EBITDA | 1,097.6 | 1,243.2 | 1,394.9 | 1,550.2 | 1,674.2 |
| D&A | (224.0) | (248.6) | (273.5) | (298.1) | (322.0) |
| EBIT | 873.6 | 994.6 | 1,121.4 | 1,252.1 | 1,352.3 |
| NOPAT | 655.2 | 745.9 | 841.0 | 939.1 | 1,014.2 |
| Add: D&A | 224.0 | 248.6 | 273.5 | 298.1 | 322.0 |
| Less: capex | (313.6) | (348.1) | (355.6) | (387.6) | (386.4) |
| Less: increase in NWC | (105.6) | (108.4) | (109.4) | (108.3) | (104.9) |
| **FCFF** | **460.0** | **538.0** | **649.6** | **741.3** | **844.9** |

*Reconciliation of ROIC.* Invested capital rises from 4,300 to 4,495, 4,703, 4,895, 5,092 and 5,262; ROIC on opening capital: 15.2%, 16.6%, 17.9%, 19.2%, 19.9%. This is well above WACC and rises across the forecast, which must be justified by the margin expansion (the main driver) and by the capital efficiency of the export business. We assume it *fades* to a terminal ROIC of **16%**, not the 20% reached in year 5.

## 27.5 The cost of capital

| Input | Value | Source |
|-------|------:|--------|
| Risk-free rate | 7.0% | 10-year G-Sec at the valuation date |
| Equity risk premium | 6.0% | Total India ERP (as in the Meridian case) |
| Unlevered beta | 0.80 | Bottom-up, pharma peers |
| Target D/E | 15% (D/V = 13.04%) | Peer average; leases included in debt |
| Levered beta | 0.80 × [1 + 0.75 × 0.15] = 0.89 | |
| Cost of equity | 7.0% + 0.89 × 6.0% = **12.34%** | |
| Pre-tax cost of debt | 8.5% | AA-rated; lease rate similar |
| After-tax cost of debt | 6.375% | |
| **WACC** | 0.8696 × 12.34% + 0.1304 × 6.375% = **11.56%** | |

## 27.6 Mid-year discounting

Pharma cash flows accrue evenly through the year, so the discount factors use the mid-year convention: year t is discounted at (1 + WACC)^(t − 0.5).

| | FY27 | FY28 | FY29 | FY30 | FY31 |
|---|-----:|-----:|-----:|-----:|-----:|
| Time (years) | 0.5 | 1.5 | 2.5 | 3.5 | 4.5 |
| Discount factor at 11.56% | 0.9468 | 0.8486 | 0.7607 | 0.6819 | 0.6112 |
| FCFF | 460.0 | 538.0 | 649.6 | 741.3 | 844.9 |
| **PV** | 435.5 | 456.5 | 494.2 | 505.5 | 516.4 |

Sum of PV (explicit) = **₹2,408.1 crore**.

## 27.7 Terminal value

- Terminal-year revenue = 6,439.4 × 1.05 = 6,761.4.
- Terminal EBIT margin = EBITDA 26.0% − D&A 5.0% = **21.0%** → EBIT 1,419.9; NOPAT = **1,064.9**.
- Reinvestment rate = g/ROIC = 5% ÷ 16% = **31.25%** → terminal FCFF = 1,064.9 × 0.6875 = **732.1**.
- TV = 732.1 ÷ (0.1156 − 0.05) = **₹11,157.1 crore** at FY31.
- Because the TV is a Gordon perpetuity of mid-year flows, it is discounted with the *same mid-year factor as the last explicit flow* (4.5 years): PV = 11,157.1 × 0.6112 = **₹6,819.2 crore**.

**Enterprise value = 2,408.1 + 6,819.2 = ₹9,227.3 crore.** Terminal value is **73.9%** of EV.

## 27.8 The equity bridge

| ₹ crore | |
|---------|--:|
| Enterprise value | 9,227.3 |
| Less: borrowings | (700.0) |
| Less: lease liabilities | (150.0) |
| Add: surplus cash | 400.0 |
| Add: listed investment (market value) | 200.0 |
| Less: non-controlling interest (10% of the subsidiary) | (250.0) |
| Less: pension/gratuity deficit (post-tax) | (45.0) |
| Less: value of outstanding employee options | (80.0) |
| **Equity value to common shareholders** | **8,602.3** |
| Shares outstanding (crore) | 100.0 |
| **Value per share** | **₹86.02** |

### 27.8.1 Notes on each item

- **Leases.** Because EBITDA and FCFF are *before* lease payments (Ind AS 116), the lease liability is debt and is deducted; the cost of debt and the debt weight in WACC include it.
- **Listed investment.** Its dividends are not in EBIT; add at market value. If a sale would attract capital-gains tax, deduct the tax.
- **NCI.** The subsidiary is 90% owned; the consolidated FCFF includes 100% of its cash flows, so the 10% claim is deducted. The ₹250 crore is 10% of an *estimated equity value of ₹2,500 crore* (from a separate DCF/multiple), not the book value of NCI on the balance sheet.
- **Pension deficit.** An actuarial deficit of ₹60 crore pre-tax is deducted at ₹45 crore after the tax relief on contributions.
- **Options.** Outstanding options are valued with an option-pricing model (₹80 crore); *future* option grants are in the ESOP expense already deducted in EBITDA.

## 27.9 Sensitivities

| Case | EV (₹ cr) | Value per share (₹) | vs base |
|------|----------:|--------------------:|--------:|
| **Base** (mid-year, WACC 11.56%, g 5%, ROIC 16%) | 9,227.3 | 86.02 | — |
| End-year discounting instead of mid-year | 8,736.0 | 81.11 | −5.7% |
| WACC +1 point (12.56%) | 8,037.8 | 74.13 | −13.8% |
| Terminal ROIC = WACC (no excess returns) | 8,037.5 | 74.13 | −13.8% |
| WACC −1 point (10.56%) | 10,842.9 | 102.18 | +18.8% |
| Terminal ROIC 20% (year-5 level sustained) | 9,847.2 | 92.22 | +7.2% |
| Terminal growth 4% / 6% | 8,802.0 / 9,791.6 | 81.77 / 91.67 | −4.9% / +6.6% |

The mid-year convention adds about 5–6% — a *methodological* choice that is as large as a half-point change in the discount rate, so it must be stated. A one-point increase in WACC and an assumption that excess returns vanish after FY31 each remove about 14%; a one-point *decrease* in WACC adds almost 19% (the asymmetry is the convexity of the terminal-value formula).

## 27.10 Cross-checks

| Measure | Aster at DCF value | Comment |
|---------|-------------------:|---------|
| EV / FY26 EBITDA (960) | 9.6× | Assumed peer range 11–16× (illustrative) → market might pay more |
| EV / FY27E EBITDA (1,097.6) | 8.4× | |
| EV / NOPAT (FY26) | 16.2× | |
| Terminal EV / EBITDA (FY31) | 6.7× on TV 11,157 ÷ EBITDA 1,674 | Conservative |

The DCF implies a lower multiple than the trading range assumed for the peers; the reverse DCF (Chapter 16) would show what extra growth or margin the market is assuming. For a buy-back decision the question is whether the actual market price is below ₹86, with a margin of safety for model uncertainty.

## 27.11 Conclusion

*Fair value of Aster's equity at 31 March 2026: ₹7,400–₹9,200 crore (₹74–₹92 per share), point estimate ₹8,600 crore (₹86), on a minority, marketable basis.* The range runs from the downside cases (WACC +1 point, or no excess returns after FY31) to the upside case of a sustained 20% terminal ROIC. Key judgement areas: margin expansion to 26% EBITDA, a terminal ROIC of 16%, and the assumption of a stable 5% terminal growth.

## 27.12 What this case adds to Chapter 14

1. **Mid-year convention** and consistent treatment of the terminal value.
2. **A fuller bridge**: leases, investments, NCI, pension, options.
3. **Working-capital-heavy** business: ΔNWC of about ₹105 crore a year is a large claim on cash.
4. **ROIC path scrutiny:** the forecast produces 20% ROIC by year 5; the terminal fade to 16% is a conscious conservative decision.
5. **A larger share of value from near-term cash** (26% of EV in the explicit period vs 18% for Meridian) because of faster early cash generation and higher margins.

## Chapter 27 summary

- Aster Pharma: EV ₹9,227 crore; equity ₹8,602 crore; ₹86.02 per share.
- The bridge removes leases, NCI, pension and options; adds cash and the listed investment.
- Mid-year discounting adds 5–6% relative to end-year; state the convention.
- Terminal ROIC and WACC are the dominant sensitivities again.

## Review questions

1. Why is the lease liability deducted from EV when EBITDA is after Ind AS 116?
2. Why is the TV discounted at 4.5 years in this model?
3. How would a 5% sale-tax on the listed investment change the bridge?
4. Reconcile the ROIC path in the forecast with the terminal ROIC assumption.
5. What additional diligence would you do on the 10% NCI value?

<div class="pagebreak"></div>
