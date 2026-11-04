# Chapter 10 — Beta: Estimation, Un-levering and Re-levering

Beta is the single input in CAPM that is specific to the company. It is also the most commonly mis-estimated. This chapter explains what beta measures, how it is estimated by regression, why regression betas are usually too noisy to trust on their own, and how the *bottom-up beta* method gives more reliable and more flexible answers.

## 10.1 What beta measures

Beta is the covariance of a stock's returns with the market's returns divided by the variance of the market's returns:

**β = Cov(Rᵢ, Rₘ) ÷ Var(Rₘ)**

Beta says: when the market moves 1%, this stock tends to move β%. A beta of 1.0 is average market risk; below 1.0 is defensive; above 1.0 is aggressive. Beta does *not* measure total volatility, and it says nothing about whether a company is good.

## 10.2 Three determinants of beta

1. **The nature of the business — operating leverage and cyclicality.** Firms whose revenues swing strongly with the economy (autos, metals, construction) have higher business risk. Firms with high fixed costs magnify revenue swings into profit swings. Staples and healthcare have lower business risk.
2. **Financial leverage.** Debt raises equity risk because debt service is fixed: equity holders bear the volatility of operating profit *plus* the fixed claim.
3. **Discretionary versus necessary products.** Demand for essentials is stable; demand for luxuries is volatile.

Business risk and financial risk are separable, which is why the "un-levering" calculation below is possible.

## 10.3 Regression beta

The traditional estimate regresses periodic stock returns on index returns:

**Rₛₜₒcₖ,ₜ = α + β × Rₘₐᵣₖₑₜ,ₜ + εₜ**

Choices: index (NSE Nifty 50 or Nifty 500, BSE Sensex or a broader index), return interval (daily, weekly, monthly), window (2, 3 or 5 years), adjustment (raw or Blume-adjusted). Typical practice for India is weekly returns over 2–5 years against the Nifty 50 or Nifty 500.

### Problems with regression betas
- **High standard error.** A regression beta of 0.90 may have a standard error of 0.20, so a 95% range of roughly 0.5–1.3. This is too wide to settle between "defensive" and "aggressive".
- **Sensitivity to choices.** Switching from weekly to monthly returns or from 2 to 5 years can move beta by 0.2 or more.
- **Thin trading.** Illiquid stocks have betas biased downward because their prices do not respond to market moves immediately. Corrections exist (Dimson, Scholes–Williams).
- **Backward-looking.** It captures the firm's *past* business mix and leverage. If the firm has since changed, the beta is stale.
- **Index composition.** A concentrated index (a few heavy stocks) may be a poor proxy for the market portfolio.

### Blume adjustment
Betas tend to revert toward 1 over time. The simplest adjustment: **Adjusted β = 0.67 × raw β + 0.33 × 1.0**. A raw beta of 0.60 becomes 0.73; a raw 1.50 becomes 1.34.

## 10.4 The bottom-up beta

A more reliable approach averages the betas of many comparable firms (reducing the noise, since standard error falls with the square root of the number of firms) after removing the effect of each firm's financial leverage, then re-applies the *target* firm's leverage.

### Steps

1. **Identify comparable firms** in the same business(es). Use as many as are genuinely comparable.
2. **Collect regression betas** and each firm's capital structure (debt-to-equity at market values) and tax rate.
3. **Un-lever each beta** to obtain the *unlevered (asset) beta*, which reflects business risk alone.
4. **Average** (or take the median of) the unlevered betas.
5. **Adjust for cash** (optional): if peers hold large cash, un-lever to remove it, since cash has a beta of about zero.
6. **Re-lever** at the target firm's own capital structure to get its levered (equity) beta.

### The un-levering formulas

**Hamada (debt beta = 0, tax shield recognised):**

**βᵤ = βₗ ÷ [1 + (1 − t) × D/E]**

**βₗ = βᵤ × [1 + (1 − t) × D/E]**

**With debt beta (βd):**

**βₐ = βₑ × E ÷ [E + D(1 − t)] + β_d × D(1 − t) ÷ [E + D(1 − t)]**

For investment-grade firms, debt beta is small (0.0–0.2), and many valuers assume zero. For highly leveraged or distressed firms, ignoring debt beta overstates the unlevered beta. Some analysts use the *no-tax-shield* version (βᵤ = βₗ ÷ (1 + D/E)) when they believe leverage does not create a permanent tax benefit.

## 10.5 Worked example: Meridian's bottom-up beta

Five listed packaged-foods peers (fictional data):

| Peer | Observed (levered) β | D/E (market) | Tax | Unlevered β |
|------|---------------------:|-------------:|----:|------------:|
| A | 0.98 | 40% | 25% | 0.98 ÷ 1.30 = 0.754 |
| B | 0.80 | 10% | 25% | 0.80 ÷ 1.075 = 0.744 |
| C | 1.10 | 60% | 25% | 1.10 ÷ 1.45 = 0.759 |
| D | 0.72 | 0% | 25% | 0.720 |
| E | 0.92 | 30% | 25% | 0.92 ÷ 1.225 = 0.751 |
| **Average** | | | | **0.746** |
| **Median** | | | | **0.751** |

The unlevered betas cluster tightly around **0.75** — the equity betas differ because the firms use different amounts of debt. Meridian's target D/E is 25%:

**βₗ = 0.75 × [1 + 0.75 × 0.25] = 0.75 × 1.1875 = 0.891**

and **Ke = 7.0% + 0.891 × 6.0% = 12.34%**, exactly as used in earlier chapters.

*Why this is better.* The standard error of the average of five unlevered betas is far smaller than that of Meridian's own regression beta; and the method lets us compute Ke at *any* leverage the firm might adopt.

## 10.6 Multi-business firms

If the company has several businesses (e.g., packaged foods, dairy and a small retail chain), compute the beta of each segment from pure-play comparables and combine with value weights:

**βₚ = Σ wᵢ × βᵢ**

where wᵢ is the segment's share of *firm value* (estimated from sales, EBITDA, or an iterative DCF). The combined unlevered beta is then re-levered at the firm's capital structure.

## 10.7 Private companies and divisions

A private company has no traded stock. The bottom-up approach is the only practical approach: take sector unlevered beta, re-lever at the company's *target* capital structure (not its current accidental one). If the owner is not diversified, total beta (market beta ÷ correlation with market) is sometimes used to reflect undiversifiable risk for that owner — an *investment value* concept, not a *market* concept (see Chapter 20).

## 10.8 Beta and cash

If a peer holds cash equal to 20% of equity, the beta of its operating assets is *higher* than its equity beta suggests. Correct with:

**βoperating = βunlevered ÷ (1 − Cash/Firm value)**

This matters for cash-rich sectors (technology, pharma) and is ignored in many simple analyses.

## 10.9 Beta over time and across the forecast

If leverage will change over the forecast, the levered beta and cost of equity change, and so does WACC (if computed bottom-up). In stable growth the firm should be assumed to have beta closer to 1 (as a firm converges toward the average firm in the economy) — an adjustment often made for the terminal period. For Meridian, with unlevered beta 0.75 well below 1, some analysts nudge the terminal beta toward 0.8–0.9. We keep 0.75 for the base case and test this in sensitivity (an unlevered terminal beta of 0.85 would raise the terminal WACC by about 0.6 percentage points (to 11.8%) and reduce enterprise value by roughly 7%).

## 10.10 Common errors in beta

1. **Using the target's own raw regression beta without checking the standard error.**
2. **Mixing book and market values of debt/equity** in un-levering. Use market values (or at least consistent estimates).
3. **Un-levering with a tax rate that differs from the one used elsewhere.**
4. **Not re-levering** to the target's leverage after averaging peer unlevered betas.
5. **Ignoring cash** in cash-rich peers.
6. **Using a beta computed against a foreign index** while using a local market premium.

## Chapter 10 summary

- Beta measures systematic risk: covariance with the market divided by market variance.
- Regression betas are noisy; Blume-adjust or use bottom-up.
- Bottom-up: un-lever peers, average, re-lever at target leverage.
- Hamada: βₗ = βᵤ[1 + (1 − t)D/E]; include debt beta where leverage is high.
- Meridian: unlevered 0.75 → levered 0.89 at D/E 25% → Ke 12.34%.

## Review questions

1. A peer has levered beta 1.2, D/E 50%, tax 25%. What is its unlevered beta?
2. Re-lever that beta for a company with D/E 20%.
3. Why does averaging many peers reduce the error in beta?
4. How does cash affect the beta of a business?
5. What happens to beta in the terminal period and why might you adjust for it?

<div class="pagebreak"></div>
