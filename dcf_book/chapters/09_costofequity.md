# Part III — Discount Rates and Terminal Value {.part}

<div class="pagebreak"></div>

# Chapter 9 — The Cost of Equity

The discount rate is the price of risk. Any error here compounds over every future cash flow and, through the terminal value, carries into infinity. This chapter develops the cost of equity — the return shareholders require — using the Capital Asset Pricing Model and its alternatives.

## 9.1 What the cost of equity is

The **cost of equity (Ke)** is the return that equity investors require for bearing the risk of the company's shares. It is an *opportunity cost*: what the investor could earn on other investments of equal risk. It is not an accounting number (dividend yield, ROE) and not a cost the company "pays" in cash; it is a required return, and the company must earn at least this on equity-financed investments to create value.

## 9.2 Risk and diversification

Total risk of a stock has two components. **Specific (idiosyncratic) risk** — the risk of a factory fire, a lost contract, a product failure — can be diversified away by holding many stocks. **Market (systematic) risk** — recessions, interest rate changes, commodity swings — cannot be diversified away. Finance theory says the market rewards only systematic risk, because investors can eliminate the rest for free. The cost of equity should therefore reflect only the risk that remains in a diversified portfolio.

## 9.3 The Capital Asset Pricing Model

**Ke = Rf + β × (Rm − Rf)**

- **Rf** — the risk-free rate.
- **β (beta)** — the sensitivity of the stock's returns to market returns; the measure of systematic risk.
- **(Rm − Rf)** — the equity risk premium (ERP): the extra return investors require for holding the market portfolio rather than risk-free securities.

For Meridian: Rf = 7.0%, ERP = 6.0%, levered beta 0.89 → Ke = 7.0% + 0.89 × 6.0% = **12.34%**.

Assumptions behind CAPM include investors holding diversified portfolios, one-period horizons, frictionless markets. These are imperfect, yet CAPM remains the dominant model in practice because it is simple, transparent and gives a reasonable first approximation.

## 9.4 The risk-free rate

The risk-free rate is the return on an asset with no default risk and no reinvestment risk, in the same currency and with the same duration as the cash flows being valued.

**Choosing it.** For long-duration cash flows (a going concern), use the yield on a long-dated government bond, typically 10-year, and for India often a 10-year or 30-year G-Sec yield on the valuation date. The yield should be (i) in rupees if cash flows are in rupees, (ii) on the valuation date, and (iii) not distorted by temporary technical factors.

**Default spread issue.** A government that can default (or whose bond yields include a default spread) does not offer a truly risk-free rate in its own currency. Some practitioners subtract the sovereign default spread from the government bond yield to obtain a risk-free rate, then add a country risk premium to the ERP. For India, whose local-currency borrowing is rarely distressed, many valuers use the G-Sec yield as is. The approach must be consistent with the ERP choice (Section 9.5).

**Normalised versus spot.** In periods of extreme central-bank intervention, spot yields may be artificially low or high. Some valuers use a "normalised" rate (e.g., the long-run expected growth of nominal GDP). The rule: whatever is chosen, make sure *Rf + ERP* gives a sensible total expected return on the market.

## 9.5 The equity risk premium

The ERP is the most influential single parameter in the discount rate. A one-point change in ERP changes Ke by about β × 1 point. Estimation methods:

1. **Historical premium.** Average of (equity returns − government bond returns) over a long period. Problems: high standard error (even 50 years of data give an error of ±2%); survivorship bias; choice of bond maturity and averaging method (arithmetic vs geometric). Indian data suggest historical premia of roughly 5–8% depending on period.
2. **Implied premium.** Solve for the ERP that equates the present value of expected market cash flows with the current index level. This forward-looking premium responds to market conditions: lower when markets are expensive, higher after crashes.
3. **Survey-based.** Practitioner and academic surveys give a range (e.g., 5–7% for India).
4. **Mature market premium plus country risk premium.** For emerging markets: ERP = Mature market ERP (e.g., 4.5–5.5%) + Country risk premium (derived from sovereign default spread scaled up by relative equity-to-bond volatility). For India, the total ERP has recently been estimated in the neighbourhood of 7–8%, though professional bodies and valuers use differing figures.

For this book we use **6.0%** as an illustrative total ERP over a 7.0% risk-free rate, giving an expected market return of 13.0%. The Indian equity market's long-run nominal return has been broadly in this range.

> **Pitfall.** Mixing sources. Using a *dollar* ERP with a *rupee* risk-free rate, or a very high ERP with a low risk-free rate that was estimated in a different currency, yields an incoherent Ke.

## 9.6 Beta (preview)

Beta is estimated by regression of the stock's returns on market returns, or built bottom-up from comparable firms; Chapter 10 treats it fully. Beta values: market = 1.0; defensive sectors such as FMCG and pharma often 0.5–0.8; cyclicals, banks, metals, real estate often 1.1–1.5.

## 9.7 Adding other premia

### 9.7.1 Size premium
Historical evidence suggests small-cap stocks earned more than CAPM predicts. Many valuers add a size premium (e.g., 1–3% for small caps). Its theoretical justification is debated; its empirical stability has weakened. If used, state the data source and apply only where the company is truly small relative to its benchmark universe.

### 9.7.2 Company-specific risk premium (CSRP)
A premium for risks not captured by beta: key-person dependence, customer concentration, thin management, unproven technology. Theoretically unjustified for a diversified investor, but practically common in valuing private companies and start-ups (where investors are *not* diversified). Better practice is to reflect specific risks in **cash flow scenarios** (probability-weighted forecasts) rather than as an arbitrary add-on to the discount rate, because an add-on conflates the risk of the *mean* cash flow with the *volatility* around it.

### 9.7.3 Illiquidity and marketability
Not a component of the discount rate in strict theory; handled as a discount to value in specific contexts (Chapter 13).

## 9.8 Alternatives to CAPM

### 9.8.1 Arbitrage Pricing Theory (APT) and multi-factor models
**Ke = Rf + β₁ λ₁ + β₂ λ₂ + … + βₖ λₖ**

where each factor (inflation, industrial production, interest-rate changes, credit spreads) has its own risk premium λ and the stock its own sensitivity β. APT is theoretically richer but needs the factors and premia to be specified and estimated, which is hard.

### 9.8.2 Fama–French three- and five-factor models
Add size, value (book-to-market), profitability and investment factors. Useful in academic work and in some valuation contexts; less common in standard practice because of data requirements and parameter instability.

### 9.8.3 Build-up method
Ke = Risk-free rate + ERP + Size premium + Industry premium + Company-specific premium. Common in private-company appraisals in the US and increasingly elsewhere; lacks an explicit beta and thus conflates risks, but is simple.

### 9.8.4 Dividend-yield-plus-growth / implied cost of equity
Back out Ke from the market price: Ke = D₁/P₀ + g. Useful as a sanity check for stable dividend payers.

## 9.9 Sanity-checking the cost of equity

A computed Ke should be tested:

1. **Relative to Rf.** Ke should exceed the risk-free rate by a margin consistent with business risk.
2. **Relative to the cost of debt.** Ke should exceed the pre-tax cost of debt (equity is riskier than debt). Meridian: Ke 12.34% vs Kd 9%.
3. **Relative to peers.** Compare with Ke used in broker reports and fairness opinions for similar companies.
4. **Relative to the return the market actually earns** (13% in our example): defensive companies below, cyclical above.

## 9.10 Worked example: building a cost of equity step by step

Value an unlisted regional dairy company on 31 March 2026.

1. Rf: 10-year G-Sec yield 7.0%.
2. ERP: 6.0% (total, for India).
3. Industry unlevered beta (food processors): 0.70. Dairy's target D/E: 30%. Tax 25%. Re-levered beta = 0.70 × [1 + 0.75 × 0.30] = 0.70 × 1.225 = 0.8575.
4. Ke (CAPM) = 7.0% + 0.8575 × 6.0% = 12.15%.
5. Size premium: the company has revenue of ₹300 crore; small-cap premium 1.5% (as per a chosen database). Ke = 13.65%.
6. CSRP: management concentration and a key-supplier dependency judged by the valuer to merit 1.0%. Ke = **14.65%**.

A review: is 14.65% reasonable? It is 5 percentage points above the 9.5% pre-tax cost of debt this small firm could achieve. That seems defensible. But note the 2.5% of add-ons are judgemental, and the report should show Ke without them (12.15%) as a reference and explain why they are used.

## 9.11 Cost of equity for different standards of value

For *fair value* in financial reporting, the discount rate is a *market participant* rate; a size premium and specific risks are included only if market participants would. For *investment value* to a specific buyer, the buyer's own required return applies. For a *minority stake*, some cost-of-equity add-ons may reflect the lack of control; for *control* value, the cash flows reflect control benefits. Always align discount rate and cash-flow assumptions with the standard of value.

## Chapter 9 summary

- Ke is the return equity investors require; CAPM = Rf + β(ERP).
- Rf in the cash-flow currency, long maturity, on the valuation date.
- ERP: historical, implied or survey-based; add country risk for emerging markets.
- Size and specific premia are judgemental; prefer scenario-based treatment of specific risk.
- Sanity-check Ke against Rf, Kd, peers and market return.

## Review questions

1. Why does CAPM reward only systematic risk?
2. Compute Ke with Rf 7%, ERP 6%, β 1.2.
3. What is the main argument against adding a company-specific risk premium?
4. List two ways to estimate the ERP and one weakness of each.
5. What checks would you apply to a computed Ke?

<div class="pagebreak"></div>
