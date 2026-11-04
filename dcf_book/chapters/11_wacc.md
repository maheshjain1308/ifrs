# Chapter 11 — Cost of Debt, Capital Structure and WACC

FCFF is discounted at the weighted average cost of capital — the blended return required by all capital providers. This chapter shows how to build each component, how to choose the capital structure, and how to avoid the circularity that arises when value and WACC depend on each other.

## 11.1 The WACC formula

**WACC = [E ÷ (D + E)] × Ke + [D ÷ (D + E)] × Kd × (1 − t) (+ preference share component, if any)**

where E and D are *market values* of equity and debt, Ke is the cost of equity, Kd the pre-tax cost of debt, and t the marginal tax rate on interest. The factor (1 − t) captures the **interest tax shield**: interest is deductible, so each rupee of interest costs only (1 − t) after tax.

For Meridian: E/(D+E) = 80%, D/(D+E) = 20%, Ke = 12.34%, Kd = 9.0%, t = 25%.

WACC = 0.80 × 12.34% + 0.20 × 9.0% × 0.75 = 9.875% + 1.35% = **11.225%**.

## 11.2 The cost of debt

The cost of debt is the return lenders currently require on *new* borrowing at the firm's risk, not the historical coupon on old debt.

### 11.2.1 From a bond yield
If the firm has traded long-term bonds, use their yield to maturity.

### 11.2.2 From a credit rating
Obtain the firm's rating (or estimate a synthetic rating from an interest-coverage ratio), then use **Kd = Rf + default spread for that rating**. Example: Meridian's EBIT/interest = 240/54 = 4.4×, consistent with an A to AA rating in the Indian market. Typical spreads over G-Sec: AAA 0.6–1.0%; AA 1.2–1.8%; A 2.0–3.0%; BBB 3.0–4.5%. With Rf = 7.0% and a spread of 2.0%: **Kd = 9.0%**.

### 11.2.3 From the firm's bank borrowing cost
Use the incremental borrowing rate on term loans; this is the practical approach for unlisted firms. Check consistency with market rates for similar credits.

### 11.2.4 Adjust for default risk
The *promised* yield overstates the *expected* return to lenders when default is probable: Expected cost of debt = Promised yield − Expected loss rate. For investment-grade firms the difference is small; for distressed firms it is substantial and affects the choice of discount rate (Chapter 21).

### 11.2.5 Tax rate on interest
Use the marginal tax rate (25.17% for most domestic firms) if the firm is profitable and can use the full deduction. If the firm is loss-making or tax-exhausted, the tax shield is deferred or absent, and the after-tax cost of debt rises accordingly. Interest-deductibility limits (such as thin-capitalisation rules under section 94B for related-party debt) should be checked.

## 11.3 Other sources of capital

- **Preference shares:** treat as a separate component with cost = dividend yield (adjusted for expected redemption) — no tax shield on preference dividends.
- **Convertible debentures:** split into debt and equity components (option value).
- **Leases (Ind AS 116):** lease liability is debt; include at market value with its own cost (the incremental borrowing rate).
- **Minority interests and non-controlling stakes:** if the cash flows in FCFF belong to the parent and minorities, treat minorities as a capital provider and deduct their value in the bridge, rather than adding to WACC weights.

## 11.4 Choosing the capital structure weights

Three approaches:

1. **Current actual structure.** The market-value weights today. Suitable if the firm's financing is stable.
2. **Target/optimal structure.** The structure the firm is expected to maintain over time; typically the industry average or the firm's stated policy. Most appropriate for long-horizon DCF.
3. **Changing structure.** Use year-by-year weights when the firm is expected to de-lever or re-lever materially (e.g., LBO, post-IPO paydown). Then WACC varies by year and discount factors are cumulative products: DFₜ = Π 1/(1 + WACCₛ). In this case APV (Chapter 17) is often cleaner.

*Use market values, not book values.* Equity at book understates the weight of equity for most profitable firms and overstates the weight of debt, lowering WACC spuriously. Debt at book is usually a fair approximation of market value unless rates have moved sharply or default risk is high.

## 11.4.1 The circularity problem

The equity weight needs the market value of equity, which is what the DCF is computing. Resolve by iteration:

1. Start with a guess for capital structure (e.g., industry average D/V).
2. Compute WACC and EV; derive equity value = EV − net debt.
3. Recompute D/V = Debt ÷ (Debt + Equity); recompute WACC.
4. Repeat until stable (typically 3–4 iterations; spreadsheets can do this with iterative calculation or a macro).

For Meridian: debt 600; DCF-implied equity ≈ 2,563 (Chapter 14), so actual D/V = 600 ÷ (600 + 2,563) ≈ 19.0% — close to the 20% target used; the iteration converges quickly and WACC moves by under 5 basis points.

## 11.5 Is there an "optimal" capital structure?

Debt provides a tax shield (benefit) but raises the probability and cost of financial distress (cost) and the costs of agency conflicts. The **trade-off theory** says there is an optimal debt ratio where marginal benefit equals marginal cost. In practice, the WACC curve is U-shaped but *flat* near the optimum: a firm at 15–30% debt often has virtually the same WACC. Hence precision in the target ratio is less important than getting Ke and Kd consistent with whatever ratio is chosen.

**Modigliani–Miller (with taxes):** Value of levered firm = Value of unlevered firm + PV(tax shield). It shows why more debt *appears* to lower WACC — because Kd(1 − t) < Ke — while *Ke itself rises* with leverage. Done consistently (Ke re-levered as D/E rises), the benefit is only the tax shield net of distress costs.

> **Pitfall.** Lowering WACC by raising the weight of cheap debt *without* raising Ke. This gives value increases that do not exist. Always re-lever beta when changing D/E.

## 11.6 Building WACC in sequence — Meridian

| Step | Input | Result |
|------|-------|--------|
| 1. Risk-free | 10-year G-Sec | 7.00% |
| 2. ERP | Total ERP for India | 6.00% |
| 3. Unlevered beta | Bottom-up, 5 peers | 0.75 |
| 4. Target D/E | 25% (D/V = 20%) | |
| 5. Levered beta | 0.75 × [1 + 0.75 × 0.25] | 0.891 |
| 6. Cost of equity | 7.00% + 0.891 × 6.00% | 12.34% |
| 7. Pre-tax cost of debt | 7.00% + 2.00% spread | 9.00% |
| 8. After-tax cost of debt | 9.00% × (1 − 0.25) | 6.75% |
| 9. Weights | E 80%, D 20% | |
| 10. **WACC** | 0.8 × 12.34% + 0.2 × 6.75% | **11.225%** |

## 11.7 WACC for different cash flows and periods

- **Different businesses** within a company have different risk: use segment-specific WACCs (sum-of-the-parts).
- **Stable-growth period:** Beta typically drifts toward 1, debt ratio toward industry norm, and Kd toward a stable spread. WACC in the terminal period may differ from the explicit period.
- **Foreign operations:** add a country risk premium to the portion of cash flows from riskier countries (revenue-weighted), or discount in the relevant currency (Chapter 22).
- **Project-level WACC:** use the hurdle rate for the project's risk, not the company-wide WACC (Chapter 3's consistency rule).

## 11.8 Hurdle rates vs. WACC: a practical caution

Many companies set a hurdle rate above the computed WACC (e.g., 14% vs 11.2%) as a buffer for estimation error. In valuation, the buffer *double-counts* risk if the cash flows are already prudent or scenario-weighted. Use the best-estimate WACC with best-estimate (expected) cash flows. Layer conservatism through scenarios and ranges, not through an inflated discount rate.

## 11.9 Sanity checks on WACC

- **Relative to peers' WACC** (as disclosed in brokers' notes and fairness opinions).
- **Relative to historical ROIC and growth:** a WACC far above ROIC for a stable firm implies value destruction.
- **Reasonableness of total return:** WACC for a low-beta consumer staples firm should typically lie between 9% and 12% in the Indian rupee market at recent interest rates; for cyclicals 11–14%.
- **Spread over Rf:** WACC − Rf should be modest for defensive businesses (e.g., 3–5 points).

## 11.10 Worked example: levered recapitalisation

Suppose Meridian re-levers to D/E = 50% (D/V = 33.3%), keeping unlevered beta at 0.75. New levered beta = 0.75 × (1 + 0.75 × 0.50) = 1.031. Ke = 7% + 1.031 × 6% = 13.19%. Suppose the extra debt raises the cost of debt to 9.75% (the firm's rating falls). WACC = 0.667 × 13.19% + 0.333 × 9.75% × 0.75 = 8.79% + 2.44% = **11.23%**.

Observe: *WACC is essentially unchanged*. The tax shield on additional debt is offset by the higher Ke and higher Kd. This is why many valuations are not very sensitive to the exact debt ratio — and why arguments that "more debt creates value" must be handled with care.

## Chapter 11 summary

- WACC = E/V·Ke + D/V·Kd(1 − t); use market values and the marginal tax rate.
- Cost of debt = current borrowing rate at the firm's risk (Rf + default spread).
- Use target capital structure for long-horizon valuations; resolve circularity by iteration.
- Re-lever Ke whenever D/E changes; do not lower WACC by adding cheap debt alone.
- Meridian WACC = 11.225%.

## Review questions

1. Compute WACC: E = 700, D = 300, Ke = 14%, Kd = 10%, t = 30%.
2. Why must Ke rise when leverage rises?
3. How do you resolve the circularity between EV and WACC?
4. What is wrong with adding a "buffer" to WACC for caution?
5. How do Ind AS 116 leases affect WACC inputs?

<div class="pagebreak"></div>
