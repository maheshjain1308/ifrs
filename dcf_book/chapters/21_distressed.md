# Chapter 21 — Valuing Distressed Companies

A distressed company is one that cannot comfortably meet its financial obligations: debt service is a struggle, covenants are breached, liquidity is thin. Valuing it is different, and the stakes are high — lenders, equity holders, restructuring advisers and (in India) resolution professionals and committees of creditors all depend on the numbers.

## 21.1 Sources and symptoms of distress

- **Financial distress:** too much debt relative to the cash flows. Interest cover below 1.5×, negative free cash flow, rating downgrades, covenant breaches, missed payments.
- **Operating distress:** losses even before interest; a structurally declining business, a failed product, cost inflation not passed on.
- **Liquidity distress:** maturities that cannot be refinanced; working-capital stretch.
- **Cyclical or one-off shocks:** a pandemic, a regulatory ban, a major customer loss.

The valuation task depends on the *cause*: a firm with a sound operating business and a bad balance sheet is valued differently from a firm with a structurally broken business.

## 21.2 Why standard DCF breaks down

1. **Going-concern assumption.** Standard DCF assumes survival forever. A distressed firm may not survive.
2. **Negative or erratic cash flows.** The explicit forecast may contain years of negative FCFF; Gordon growth on a negative terminal cash flow is meaningless.
3. **Discount rate.** Observed betas and cost of capital reflect the *expected* distress; adding distress risk to both the discount rate *and* the cash flows double-counts.
4. **Capital structure not stable.** Debt will be restructured; WACC with current weights is meaningless.
5. **Equity as an option.** Equity in a highly levered firm behaves like a call option on the enterprise: limited liability gives it value even when the firm's assets are worth less than debt.

## 21.3 Approaches

### 21.3.1 Modified DCF: probability-weighted cash flows
Estimate expected cash flows that include the probability of distress.

**Expected FCFFₜ = FCFFₜ(survive) × P(survive to t) + Distress-case cash flow × P(distress)**

or, simply, **Expected FCFFₜ = FCFFₜ × (1 − Probability of distressₜ)** if distress implies zero further cash flow to the claim being valued. Then discount at a cost of capital that reflects only the *systematic* risk of the cash flows.

### 21.3.2 Going-concern DCF + distress sale value
Value the firm as if it recovers (the going-concern value), then blend with the value it would fetch if distress occurs:

**Value of equity = DCF equity value × (1 − P) + Distress-sale equity value × P**

with P the probability of distress over the forecast. The distress-sale value is typically estimated as a percentage of book value or of the going-concern value (e.g., 50–70% of book for tangible assets; much lower for intangibles).

*Example.* Going-concern enterprise value ₹2,000 crore; distress-sale EV ₹900 crore; P = 30%. Blended EV = 2,000 × 0.70 + 900 × 0.30 = ₹1,670 crore. If debt is ₹1,400 crore: *going-concern* equity = 600; *blended* equity = 270 (a 55% reduction — leverage magnifies the effect of distress risk on equity).

### 21.3.3 Adjusted present value (APV)
**Firm value = Unlevered firm value + PV(tax shield) − Expected bankruptcy costs**

Expected bankruptcy costs = (Unlevered firm value − Distress-sale value) × P(distress). APV is especially good here: the tax shield may be unusable (losses), bankruptcy costs are explicit, and capital structure is changing.

### 21.3.4 Equity as a call option
Treat equity as a call option on the firm's assets with strike equal to the face value of debt:

*Equity = Call(Assets value V, Strike = Debt face value D, time to debt maturity T, volatility σ)*

Even when V < D, the equity has positive value because assets might recover before maturity. Black–Scholes inputs: V = enterprise value (from DCF); D = face value of debt; T = weighted debt maturity; σ = asset volatility; r = risk-free rate. *Example:* V = 1,000, D = 1,200, T = 3 years, σ = 40%, r = 7%. Black–Scholes gives a call value of about ₹281 crore. So equity is worth about 281 even though V − D = −200; the debt is worth about 1,000 − 281 = 719 (roughly 60% of its face value of 1,200).

### 21.3.5 Relative valuation of distressed firms
Multiples of revenue and EBITDA are used more often than P/E (which is meaningless when earnings are negative). Adjust peer multiples downward for distress: if healthy telecom peers trade at 2× revenue, apply perhaps 1.25× to a distressed one.

### 21.3.6 Liquidation value
When going-concern value is lower than the liquidation value, creditors will prefer to liquidate (or the law forces it). Estimate realisable value asset-by-asset:

| Asset | Typical recovery |
|-------|-----------------|
| Cash | 100% |
| Receivables | 60–90% (less for aged and disputed) |
| Inventory | 40–70% (raw materials higher than WIP/finished goods of specialised products) |
| Land | 60–90% of market (depending on title/approvals) |
| Plant & machinery | 20–50% of book (specialised plant lower) |
| Intangibles/goodwill | 0–10% |

Subtract liquidation costs (legal, broker, wind-down staff) and priority claims (employee dues, statutory dues, secured creditors) to find the amount available to unsecured creditors and equity. Liquidation value establishes the *floor* for a distressed valuation.

## 21.4 The Indian insolvency context (IBC)

Under the Insolvency and Bankruptcy Code, 2016, the corporate insolvency resolution process (CIRP) values the corporate debtor using two registered valuers: the **fair value** (going-concern, arm's-length) and the **liquidation value** (net realisable in liquidation), used by the committee of creditors in evaluating resolution plans. Resolution applicants offer a plan whose value to creditors is compared with these benchmarks. Valuation in this context includes: asset classes' realisable values, contingent claims, avoidance transactions, and the effect of the waterfall (Section 53 priority). Practitioners should consult the current IBC regulations and ICAI valuation standards for requirements.

## 21.5 Valuing the debt of a distressed firm

The market value of debt is below face value; its expected return is below the promised yield. To get the *expected* cost of debt: **Expected return = (1 − P(default)) × Promised yield + P(default) × (Recovery rate − 1)**, in simplified form for a one-year bond. For debt valuation, discount *expected* cash flows (including recoveries) at a rate for systematic risk. When deducting debt in the bridge for a distressed firm, use *market or fair value* of debt (not face value) only if the question is the value to *equity holders post-restructuring*; for the value of the enterprise to all claimants, the question of debt face vs market value does not arise.

## 21.6 Restructuring scenarios and post-restructuring value

Many valuations of distressed firms are *plan-based*: what will the business be worth if a plan (debt-for-equity swap, haircuts, asset sales, operational turnaround) succeeds?

1. Build the *post-restructuring* operating forecast (cost cuts, asset disposals).
2. Estimate the post-restructuring capital structure and WACC.
3. Compute post-restructuring enterprise value.
4. Allocate value across claim classes by seniority (the **waterfall**): secured → priority statutory → unsecured → subordinated → equity.
5. Compare each class's recovery under the plan with its liquidation recovery; creditors accept a plan only if it beats liquidation.

## 21.7 Special considerations

- **Management's forecasts are biased upward** in distress. Insist on stress testing; compare to history.
- **Contingent liabilities** and litigation can dominate.
- **Cash trapped in subsidiaries**; guarantees and cross-defaults among group companies.
- **Control rights shift** to creditors; shareholders' interest may be out-of-the-money though legally intact.
- **Tax attributes** (NOLs) may be limited by change-of-control rules.
- **Time to resolution** affects value: legal delays erode the going-concern.

## 21.8 A compact worked example

*Cobalt Steel Ltd.* Normal-state enterprise value: ₹3,000 crore (explicit DCF). Debt face value ₹2,800 crore; 3-year maturity. Volatility of assets 35%; risk-free 7%.

1. Equity as an option: call with V = 3,000, K = 2,800, T = 3, σ = 35%, r = 7%. Black–Scholes gives about ₹1,056 crore. So equity ≈ 1,056 (compared with 3,000 − 2,800 = 200 on a simple subtraction): with three years to maturity and 35% asset volatility, most of the equity value is option (time) value.
2. DCF + distress: P(distress) = 25%, distress sale EV = 1,500. Blended EV = 3,000 × 0.75 + 1,500 × 0.25 = 2,625. Equity = 2,625 − 2,800 < 0, so on a blended-EV subtraction the *equity is worth zero*; yet the option approach assigns it a substantial value because the firm has three years in which its assets might recover.

The gap between the two shows that equity in a highly levered firm is better described as an option than as a residual (and that the two methods answer slightly different questions: the option model assumes the asset value follows a volatile path with no forced earlier liquidation, whereas the blend assumes a one-off distress event). The conclusion: *equity has positive value because of optionality; its value is highly sensitive to volatility and the time to resolve.* A valuation report must state the approach and its limitations.

## Chapter 21 summary

- Standard DCF fails for distressed firms (going-concern assumption, negative flows, discount-rate and capital-structure issues).
- Tools: probability-weighted flows; DCF + distress value; APV with bankruptcy costs; option pricing; liquidation values; plan-based waterfall.
- Equity in a distressed firm has option value even when V < D.
- Under the IBC both fair value and liquidation value are determined by registered valuers.

## Review questions

1. Why does adding a distress premium to WACC *and* reducing cash flows double-count risk?
2. Compute blended equity: DCF equity 800, distress equity 100, P = 35%.
3. Explain why equity can be worth something when assets are worth less than debt.
4. What recovery rates would you assume for plant and machinery in a forced liquidation?
5. What is the role of valuation in the Indian CIRP process?

<div class="pagebreak"></div>
