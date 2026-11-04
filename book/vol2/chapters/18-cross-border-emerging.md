# Chapter 18: Cross-Border Deals and Emerging Markets

## Learning Objectives

After completing this chapter, you should be able to:

- Decompose the risks of an emerging-market investment into country, currency, political, and operating components, and decide which belong in the discount rate and which in the cash flows.
- Estimate a country risk premium using sovereign spreads and relative volatility, and compare the main ways of applying it to the cost of equity and WACC.
- Value cross-border cash flows consistently in local or hard currency, using inflation and interest-rate differentials, and avoid the mixed-currency errors that distort valuations.
- Quantify political risk through scenario and probability analysis, and evaluate mitigation through insurance, treaty protection and deal structure.
- Analyze the effect of capital controls, withholding taxes and trapped cash on the value of a subsidiary, and compare repatriation routes.
- Evaluate joint-venture structures, local-partner dynamics and capital structure choices in emerging markets, including the currency of debt.

## Opening Vignette

*Illustrative scenario; all names and figures are fictional.*

Solano Beverages is a mid-sized consumer company based in a high-income country, with $1.8 billion of revenue and a cost of capital of 8 percent. Its chief strategy officer, Tomas Villareal, has found what looks like a once-in-a-decade opportunity: a regional bottler in the fictional republic of Aurelia, a market of 90 million people with rising incomes and a thinly served beverage market. The bottler, Aurelia Refrescos, earns the local equivalent of $60 million of EBITDA and has a 38 percent market share. Its owners, a prominent local family, would sell 60 percent and keep 40 percent.

The financial model looks spectacular. At Solano's 8 percent cost of capital, the value of the target is $620 million. Then the questions begin. Aurelia's sovereign bonds yield 6.5 percentage points more than comparable US Treasuries. Its currency has lost about 45 percent against the dollar over five years. Inflation is running at 9 percent. A former finance minister tells Tomas that dividend remittances were restricted for eight months during the last crisis. The family partner has a cousin who is a senior regulator. The local banking system will lend only in local currency, at 15 percent, while a dollar loan from an international bank costs 7 percent.

Tomas's team must now answer questions that the single-country valuation models of Volume 1 did not prepare them for. What cost of capital should apply? In which currency should the cash flows be projected? How much should political risk reduce value, and can it be insured? How will cash reach the parent? How should the joint venture be governed so that Solano can protect its investment without a local partner's cooperation? And how should the venture be financed?

This chapter develops the tools to answer those questions. The unifying theme is *consistency and explicitness*: every risk should be identified, assigned to either the cash flows or the discount rate (never both, never neither), and priced.

## 18.1 The Anatomy of Cross-Border Risk

Volume 1 introduced valuation (Chapter 21), the cost of capital (Chapter 11) and foreign exchange risk management (Chapter 20) for a single-country corporation. When the target or project is in another country, the valuation framework is the same but the inputs are harder. The sources of additional risk can be classified:

- **Country (sovereign) risk.** The risk that macroeconomic conditions, sovereign default, banking crises or recession in the host country affect all firms there. It manifests in higher sovereign bond yields, and in correlated declines in earnings and asset values.
- **Currency risk.** The local currency may depreciate relative to the investor's currency, eroding the home-currency value of local cash flows. Currency risk is closely related to inflation: high-inflation countries typically see depreciation.
- **Political risk.** Government actions that reduce the value of the investment: expropriation or nationalization, creeping expropriation (progressively adverse regulation and taxation), contract repudiation, price controls, local content rules, and breaches of licenses.
- **Transfer and convertibility risk.** The inability to convert local currency into hard currency or to move funds out of the country because of capital controls.
- **Legal and governance risk.** Weak enforcement of contracts and property rights, opaque accounting, related-party dealing, and corruption exposure (including legal risk at home under anti-bribery statutes).
- **Operating and market risk.** Infrastructure, supply-chain reliability, consumer-income volatility, and competitor behavior.
- **Liquidity and exit risk.** Illiquid local equity markets, restrictions on foreign sales, and limited buyers make exit uncertain and costly.

Two principles organize the rest of the chapter.

**Principle 1: Diversifiable risk does not earn a premium, but cross-border risk is not always diversifiable.** In the textbook CAPM (Volume 1, Chapter 10), only systematic risk is priced. If international investors hold the global market portfolio, the relevant risk of an emerging-market investment is its covariance with the world market, not its total volatility. Emerging-market returns correlate with global returns far less than their volatility alone would suggest, so a pure global-CAPM approach would conclude that a country risk premium is small. But several considerations push the other way: emerging-market returns are more correlated with the global market in crises (when diversification is most needed); many investors, especially corporates with concentrated exposure, are not globally diversified; and events such as expropriation or controls are *not* priced by a beta but are real losses that must go somewhere in the valuation. Practice has therefore moved to explicit adjustments, but one should know that the debate is unresolved and the *size* of the premium is a judgment.

**Principle 2: Treat each risk once.** The discount rate and the cash flows are two places to put risk. A risk that has been reflected in an expected-cash-flow scenario (a 5 percent chance of expropriation reducing flows) should not also be loaded into the discount rate, or the same risk is double-counted. A rule that works in practice: *systematic* and persistent country risk (macro volatility, general sovereign risk) enters through the discount rate; *discrete, diversifiable or insurable* events (expropriation, blocked funds, a specific currency devaluation) enter through scenarios, expected cash flows or contractual protection.

### Table 18.1 – Where to Put Each Risk

| Risk | Preferred treatment | Why |
|---|---|---|
| General sovereign / macro risk | Country risk premium in discount rate | Persistent and correlated across firms |
| Expected inflation and depreciation | Cash-flow currency and consistent discount rate | Predictable differential, not a risk premium |
| Currency volatility | Hedging cost or scenarios; small premium only if systematic | Mostly diversifiable; hedgeable at forward prices |
| Expropriation, nationalization | Probability-weighted scenarios or insurance cost | Discrete event with known loss |
| Capital controls | Cash-flow timing scenarios or structure (offshore accounts, royalties) | Affects the timing and amount of repatriation |
| Corruption, governance | Reduce cash-flow estimates, require control rights, use as walk-away criterion | Not a pricing problem alone |
| Illiquidity at exit | Lower terminal multiple or illiquidity discount | Affects the exit value |

The weakness of the classic approach, "add a few points to the discount rate for risk," is that it is not tied to specific risks, so it penalizes long-duration cash flows disproportionately, ignores mitigation, and cannot be debated. The remainder of this chapter replaces the lump-sum premium with explicit analysis.

## 18.2 Country Risk Premiums

### The Sovereign Spread as a Starting Point

The yield spread on the host government's hard-currency (typically US dollar) bonds over the risk-free rate of the same currency measures the market's price of default risk on the country. A sovereign that borrows in dollars at 3.5 percentage points over Treasuries is perceived as riskier than one that pays 1 point, and the spread captures both the probability of default and the loss given default (the bond pricing and default logic of Volume 1, Chapter 4). Other measures include sovereign credit default swap (CDS) spreads and agency ratings that can be mapped to spreads.

Spreads are the premium paid by *bondholders* of the government. The equity market is riskier than the bond market in the same country, because equity is a residual claim. The standard adjustment scales the bond spread by the ratio of equity to bond volatility, for example

```
Country risk premium (CRP) = Sovereign spread × (σ_equity ÷ σ_bond)
```

where the ratio is estimated from the local equity market's and the sovereign bonds' volatilities (typical estimates for emerging markets lie between 1.2 and 2.0, but the figure should be estimated from data for the country, not assumed). The logic is intuitive: if equity is 1.4 times as volatile as the sovereign's bonds, its premium for country risk should be proportionately higher.

An alternative is to calculate the equity risk premium directly from the country's equity market history (long-run local equity returns over the risk-free rate); this is unstable in many countries because their equity markets are short-lived, volatile and subject to survivorship effects.

### Applying the CRP

There are three common ways of using the CRP in the cost of equity of a project in the host country, each with a different economic interpretation:

1. **Additive (bond-spread view).** Treat country risk as a separate premium that applies equally to all investments in the country, regardless of beta:

```
k_e = r_f + β × ERP_mature + CRP
```

2. **Beta-scaled.** Treat country risk as an extra component of the market risk premium, which scales with the project's beta:

```
k_e = r_f + β × (ERP_mature + CRP)
```

This implies that a low-beta firm is less exposed to country risk, which is realistic for a utility serving a domestic market but dubious for an exporter, whose cash flows may be *less* tied to the country's economy than its beta suggests.

3. **Lambda (exposure) approach.** Measure each firm's exposure to country risk with a factor λ, typically estimated as the share of the firm's revenue (or operating profit) derived from the country relative to the average firm:

```
k_e = r_f + β × ERP_mature + λ × CRP
```

A firm that sells globally and operates a single local plant has λ well below 1; a firm entirely dependent on local demand has λ close to or above 1. This approach respects the fact that risk differs among firms in the same country.

The cost of debt follows the same logic: the firm's borrowing cost in hard currency is typically the risk-free rate plus the sovereign spread plus a company-specific credit spread (the sovereign is usually the ceiling or near-ceiling for local corporates, though some multinationals borrow below their sovereign's rate through parent guarantees and offshore structures).

**Example 18.1 – Cost of equity and WACC for an emerging-market bottler.**
Inputs (US dollar terms): risk-free rate 4.0 percent, mature-market equity risk premium 5.0 percent, beta 1.1, Aurelia's sovereign spread 3.5 percent, equity-to-bond volatility ratio 1.4, a company credit spread of 2.0 percent above the sovereign, a target capital structure of 35 percent debt and 65 percent equity, and a tax rate of 25 percent. For the lambda approach assume λ = 0.8.

Step 1 – Country risk premium: 3.5% × 1.4 = **4.9%**.

Step 2 – Mature-market cost of equity: 4.0% + 1.1 × 5.0% = 9.5%.

Step 3 – Cost of equity under each approach:

- Additive: 9.5% + 4.9% = **14.4%**.
- Beta-scaled: 4.0% + 1.1 × (5.0% + 4.9%) = 4.0% + 10.89% = **14.89%**.
- Lambda (λ = 0.8): 9.5% + 0.8 × 4.9% = 9.5% + 3.92% = **13.42%**.

Step 4 – Cost of debt in dollars: 4.0% + 3.5% + 2.0% = **9.5%**; after tax: 9.5% × 0.75 = 7.125%.

Step 5 – WACC (dollar terms):

- Additive: 0.65 × 14.4% + 0.35 × 7.125% = 9.36% + 2.494% = **11.85%**.
- Beta-scaled: 0.65 × 14.89% + 0.35 × 7.125% = 9.679% + 2.494% = **12.17%**.
- Lambda: 0.65 × 13.42% + 0.35 × 7.125% = 8.723% + 2.494% = **11.22%**.

Step 6 – Impact on value. Compared with Solano's home WACC of 8 percent, the cost of capital is 3.2 to 4.2 percentage points higher. For a business with a perpetuity-like profile and growth of 3 percent, value is proportional to 1 ÷ (WACC − g): at 8 percent the multiple is 1 ÷ 0.05 = 20.0; at 11.85 percent it is 1 ÷ 0.0885 = 11.3; at 12.17 percent, 10.9; at 11.22 percent, 12.2. The valuation at the higher rates is roughly 40 to 45 percent lower than at the home-market rate.

*Interpretation:* the choice among the three approaches changes WACC by about 0.95 percentage points, which is less than the difference between any of them and ignoring country risk altogether. That makes the *existence* of the premium more important than its application method. But the dispersion is not trivial: a deal team should present the valuation range rather than a point estimate, and should choose λ using the firm's actual exposure, not by default.

### Cautions on Country Risk Premiums

- The CRP is a *market-based* number: it already reflects the sovereign's market-priced default risk and tends to rise in crises and fall in booms. Using a one-time snapshot embeds a market mood into a long-run valuation. Many practitioners average over a cycle or use a normalized premium.
- The CRP is *double-counted* if the cash flows already contain a pessimistic scenario for the same risk.
- The CRP does not capture risks specific to the investment that a sovereign spread does not price, such as expropriation of a single industry, and does not capture currency risk. It captures the cost of the sovereign's default, which correlates with these other risks but is not the same.
- For multinational investors holding portfolios of international assets, part of the premium may be diversified. This is why λ tends to be below 1 for exporters.
- Spreads in *hard currency* are used, not local-currency government yields, because local-currency yields include the expected depreciation, which would be double-counted if cash flows are also converted at forecast exchange rates.

## 18.3 Currency in Valuation

### The Consistency Rule

The most common error in cross-border valuation is mixing currencies: projecting cash flows in local currency and discounting at a hard-currency rate, or the reverse. The rule is:

> **The currency and inflation assumptions embedded in the cash flows must match those embedded in the discount rate.**

There are two equivalent methods, which give the same value if executed consistently:

**Method A – Value in local currency, convert at spot.** Project cash flows in local currency (including local inflation), discount at a local-currency cost of capital, and convert the resulting present value at today's spot exchange rate.

**Method B – Value in hard currency.** Convert each projected local cash flow into the hard currency at a forecast exchange rate, and discount at a hard-currency cost of capital.

The link between the methods is a pair of parity conditions. *Purchasing power parity* (PPP) says that the expected change in the exchange rate equals the inflation differential; *interest rate parity* says that the forward rate reflects the interest-rate differential. In the "relative" form used for forecasting:

```
E[S_t] = S_0 × [(1 + i_local) ÷ (1 + i_hard)]^t
(1 + k_local) = (1 + k_hard) × (1 + i_local) ÷ (1 + i_hard)
```

where S is the price of one unit of hard currency in local currency, i the expected inflation rates, and k the cost of capital in each currency. Under these relationships, the PV is identical in both methods.

PPP holds poorly over months and years, since real exchange rates move for long periods; but as a valuation device it has an attractive feature: it removes any assumed *real* appreciation or depreciation, keeping the valuation neutral. A forecast of real depreciation, or of overvaluation corrected later, should be an explicit scenario, not a hidden assumption.

**Example 18.2 – Valuation in local and hard currency.**
Aurelia Refrescos's free cash flows (in millions of local currency, LC) for years 1 to 5 are 120, 135, 150, 165 and 180, and a terminal value at the end of year 5 of 1,800. Spot is LC 20 per US dollar. Expected inflation is 9 percent in Aurelia and 2.5 percent in the United States. The dollar WACC is 11.85 percent (additive approach from Example 18.1).

Step 1 – Local-currency WACC: 1.118538 × (1.09 ÷ 1.025) − 1 = 1.118538 × 1.063415 − 1 = 0.18947, so **18.95 percent**.

Step 2 – Method A. Discount the local cash flows (year-5 flow including terminal value is 1,980):

| Year | Cash flow (LC m) | Discount factor at 18.95% | PV (LC m) |
|---|---|---|---|
| 1 | 120 | 0.8408 | 100.89 |
| 2 | 135 | 0.7068 | 95.42 |
| 3 | 150 | 0.5942 | 89.13 |
| 4 | 165 | 0.4996 | 82.43 |
| 5 | 1,980 | 0.4200 | 831.57 |
| Total | | | **1,199.43** |

Convert at spot: 1,199.43 ÷ 20 = **$59.97 million**.

Step 3 – Method B. Forecast exchange rates S_t = 20 × (1.09 ÷ 1.025)^t: 21.27, 22.62, 24.05, 25.58 and 27.20 LC per dollar. Cash flows in dollars: 120 ÷ 21.27 = 5.64; 135 ÷ 22.62 = 5.97; 150 ÷ 24.05 = 6.24; 165 ÷ 25.58 = 6.45; 1,980 ÷ 27.20 = 72.80 (all $ million). Discount at 11.85 percent: the PV is **$59.97 million**, identical to Method A.

Step 4 – The common error: discount the local-currency cash flows at the dollar WACC and convert at spot. PV = Σ LC CF ÷ 1.1185^t ÷ 20 = **$77.93 million**, a 30 percent overvaluation. The error arises because the local cash flows contain nine percent inflation growth (and, implicitly, depreciation) that the dollar discount rate does not charge for.

*Interpretation:* the 30 percent error is not exotic; it arises in practice whenever a spreadsheet-based model "converts at the spot rate" to avoid forecasting the exchange rate. The correct response to uncertainty about exchange rates is to hold the parity-consistent forecast as a base case and then run scenarios of real depreciation, not to ignore depreciation.

### Real Versus Nominal, and Hyperinflation

In high-inflation economies the cleanest approach may be to value in *real* terms (cash flows in constant local currency, discounted at the real local rate) or to value in a stable hard currency from the outset. For hyperinflationary economies, accounting rules require inflation-adjusted statements, and managers should take care that reported earnings in local currency, which are often distorted by inflation (inventory gains, monetary losses), are not used uncritically as the base of the forecast.

### Currency Risk: Hedging or Pricing?

A forecast exchange rate is an *expectation*; the *risk* around it is separate. Corporate hedging of long-dated emerging-market currency exposure is costly and sometimes impossible. The forward rate implied by interest differentials reflects the expected depreciation, but liquid forwards seldom extend beyond one to three years in many emerging markets, and cross-currency swaps may be available only for a few tenors. Strategic exposures (the value of the business in dollars) are rarely hedged financially; they are managed through *natural hedges*: pricing in or indexing prices to hard currency where possible, sourcing inputs locally, matching the currency of debt to the currency of cash flows, and diversifying across countries.

The expected cost of hedging is the forward premium: if the forward rate implies 6.3 percent annual depreciation and the firm expects only 4 percent, hedging costs 2.3 percent a year in expectation, in exchange for eliminating the variance. Whether the variance reduction is worth the cost depends on the firm's costs of financial distress, as discussed in Volume 1, Chapter 20.

## 18.4 Political Risk

### Forms of Political Risk

Political risk is the possibility that government actions or political events change the value of an investment. A useful taxonomy ranges from the dramatic to the gradual.

- **Expropriation and nationalization.** Outright seizure of assets, with or without compensation. Direct expropriation of foreign-owned industrial assets has become rarer than in the mid-twentieth century, but resource sectors, utilities and strategic industries remain exposed.
- **Creeping expropriation.** A series of measures, such as discriminatory taxes, forced price cuts, local-ownership requirements, license revocation, and tightening of operating conditions, that together destroy value without any single seizure. This is the more common form in practice and the harder to insure.
- **Contract repudiation and renegotiation.** The government revokes or renegotiates concessions, power-purchase agreements, tariffs or tax holidays after the investor's capital is sunk. The "obsolescing bargain" is the classic dynamic: before the investment, the investor holds bargaining power because the country wants the capital; after the plant is built, the capital is hostage to the government.
- **Currency inconvertibility and transfer restrictions** (covered in Section 18.5).
- **Political violence.** War, civil disturbance, terrorism and sabotage.
- **Regulatory and tax change.** Windfall taxes, retroactive tax claims, export restrictions.

Political risk is not unique to emerging markets: elections, trade wars and sanctions affect developed economies as well, but the distribution of outcomes differs, with weaker institutions leaving a wider gap between the contract and its enforcement.

### Quantifying Political Risk

Because the events are discrete and of uncertain probability, expected-value analysis is more informative than a discount-rate adjustment. For a stream of cash flows C_t, an annual probability of loss p of the investment's remaining value, and recovery fraction ρ of that remaining value on loss, the value is:

```
V = Σ_t [ S_{t−1} × p × ρ × RV_t ÷ (1 + r)^(t−1) ] + Σ_t [ S_t × C_t ÷ (1 + r)^t ]
S_t = (1 − p)^t (survival probability), RV_t = PV at t−1 of the remaining cash flows
```

A shortcut for the zero-recovery case: discounting survival-weighted cash flows is equivalent to discounting the unweighted cash flows at a higher rate k ≈ (1 + r) ÷ (1 − p) − 1. With r = 12 percent and p = 4 percent, k = 16.67 percent. This provides a useful rule of thumb: *an annual expropriation probability p adds roughly p ÷ (1 − p) times (1 + r) to the discount rate*, but it overstates the effect on near-term cash flows and understates it for the terminal value. It is a convenient equivalence for communication, not a replacement for scenario analysis.

Where do the probabilities come from? Sources include sovereign risk ratings and country risk services; the history of expropriation or contract renegotiation in the industry and country; the investor's own relationship with the government; and market evidence such as the yield spread on bonds of sectors vulnerable to expropriation. Estimates are inevitably subjective; the discipline of making them explicit and testing the sensitivity of the decision to them is the benefit.

**Example 18.3 – Expected value of an investment exposed to expropriation.**
Solano's Aurelian project generates US dollar cash flows of $30 million per year for years 1 to 4, and $30 million plus a $300 million terminal value in year 5. The cost of capital without political risk is 12 percent. Assume a 4 percent chance at the start of each year that the government seizes the business for that year onward.

Step 1 – Base value with no political risk: 30 ÷ 1.12 + 30 ÷ 1.12² + 30 ÷ 1.12³ + 30 ÷ 1.12⁴ + 330 ÷ 1.12⁵ = 26.79 + 23.92 + 21.35 + 19.07 + 187.25 = **$278.37 million**.

Step 2 – Zero compensation. Weight each cash flow by its survival probability 0.96^t: 30 × 0.96 = 28.80; 30 × 0.9216 = 27.65; 30 × 0.8847 = 26.54; 30 × 0.8493 = 25.48; 330 × 0.8154 = 269.07. Discounting at 12 percent gives 25.71 + 22.04 + 18.89 + 16.19 + 152.68 = **$235.52 million**, 15.4 percent below the base and equivalent to discounting the unweighted flows at 16.67 percent.

Step 3 – Partial compensation. If the government pays compensation equal to 25 percent of the remaining value at the time of seizure, the expected value rises to **$246.23 million** (11.5 percent below base; equivalent discount rate about 15.4 percent). If compensation is 50 percent, the value is **$256.95 million** (7.7 percent below base).

Step 4 – Insurance comparison. Political risk insurance (available from multilateral agencies and private insurers) might cost about 1.2 percent per year of the insured amount. On an insured amount of $330 million the premium is $3.96 million per year, with a present value over five years at 12 percent of 3.96 × 3.6048 = **$14.3 million**.

*Interpretation:* the modeled expected loss from the expropriation risk without recovery is $42.85 million, and the PV of the insurance premium is $14.3 million. The difference tells us either that the 4 percent probability is too pessimistic for what the insurers believe, or that the policy's coverage is narrower than the modeled loss (waiting periods, exclusions for creeping expropriation and for events caused by the investor, valuation of the insured amount at book value, limits on tenor, and the requirement that the investor exhaust local remedies). The investor should read what the policy actually covers before treating it as a substitute for the scenario analysis.

### Mitigating Political Risk

Mitigation falls into four categories:

1. **Contractual and legal protection.** Bilateral investment treaties (BITs) and multilateral investment frameworks offer foreign investors the right to arbitrate disputes with host governments before international tribunals, with protections against uncompensated expropriation and discriminatory treatment. Investors often structure holdings through a subsidiary in a country that has a favorable treaty with the host, a practice that is legal but increasingly scrutinized by governments and tribunals when done after a dispute is foreseeable. Stabilization clauses in concession contracts, which freeze the tax and regulatory regime, give some protection but their enforceability depends on the jurisdiction.
2. **Insurance and guarantees.** Political risk insurance from national export-credit and investment-insurance agencies, multilateral guarantee programs and private insurers covers expropriation, inconvertibility and political violence. Coverage is typically available for equity and debt, for terms up to 15 years or more, and prices vary by country and sector.
3. **Structural and financial.** Financing the venture with local debt, or with loans from multilateral development institutions (whose presence deters expropriation, since the government wishes to preserve its relationship with the institution), reduces net exposure. Staging investment so that the capital at risk at any time is small, and recovering capital quickly (high-dividend payout and fees), shortens the exposure period. Keeping critical technology, brands or intellectual property under the parent's control (so that the local operation cannot function without ongoing supply) reduces the value of seizure to the government.
4. **Relationship and operational.** Partnerships with local firms, local hiring and sourcing, visible contribution to the national economy and engagement with the government and community raise the cost of hostile action. The risk of this approach is that relationships with specific individuals may not survive political change and can carry legal exposure under anti-corruption laws.

A caution applies to reliance on relationships: a partner with political connections is both an asset (access, speed) and a liability (dependence on particular officials, reputational and legal exposure if connections shade into improper payments). Compliance with home-country anti-corruption law, which can apply to the actions of local partners and agents, is a condition of the investment, not an optional extra. Any investment case that depends on an improper advantage should be rejected.

## 18.5 Capital Controls, Repatriation and Trapped Cash

### Why Cash Flows in the Model Differ from Cash Received by the Parent

A discounted cash flow valuation of a foreign subsidiary values the free cash flow generated in the host country. But the investor values *cash that reaches the parent* (or at least cash that can be freely redeployed). Between the two lie taxes, legal restrictions and costs.

- **Local corporate income tax.** Paid in the host country on profits.
- **Withholding taxes** on dividends, interest and royalties paid across borders, often reduced by tax treaties.
- **Home-country tax** on foreign income: a worldwide system taxes foreign earnings with a credit for foreign taxes paid; territorial and participation-exemption systems exempt most foreign dividends. The details are specific to each country and change frequently; the structure of the analysis stays the same.
- **Capital controls.** Limits on converting local currency to hard currency or on transferring it out of the country: approval requirements, quotas, mandatory waiting periods, minimum local reserves, or multiple exchange rates (an official rate for some transactions and a worse "parallel" rate for others).
- **Legal restrictions on distributions.** Statutory reserves, minimum capital requirements, and earnings-based limits on dividends.
- **Exchange conversion costs.** Spreads, official fees, and in some cases the cost of obtaining hard currency at the parallel market rate.

Valuation must therefore model **repatriation** explicitly: how much and when cash reaches the parent, by which routes, and with what leakage. Where cash can be freely repatriated at low cost, one can discount the free cash flow to the firm. Where it cannot, the value to the parent can be much lower than the value to a local investor.

### Repatriation Channels

Parent companies move cash out of a foreign subsidiary through several channels, each with different tax and legal characteristics:

| Channel | Direction | Typical tax features | Constraints |
|---|---|---|---|
| Dividends | Sub to parent | Local tax paid first, then withholding tax; no deduction locally | Distributable reserves, central bank approval in some countries |
| Royalties / license fees | Sub to parent | Deductible locally, withholding tax, taxable at home (with credit) | Transfer-pricing arm's-length limits, local approval requirements |
| Management / service fees | Sub to parent | Deductible locally, withholding tax possible | Need documented services, arm's-length |
| Interest on intercompany loans | Sub to parent | Deductible locally subject to thin-capitalization rules; withholding tax | Limits on interest deduction, repayment of principal is not taxed |
| Repayment of shareholder loans | Sub to parent | Generally not taxed as principal | Approval and registration requirements |
| Transfer pricing on goods | Both | Affects profit location | Anti-avoidance rules, customs, tax audits |
| Capital reductions / liquidation | Sub to parent | Possibly taxed as dividend or capital gain | Creditor protection, approvals |

Because the channels have different tax treatments, the parent can often reduce leakage by using a mix. But aggressive use of transfer pricing to move profits out of a country (particularly when controls limit dividends) creates tax-authority and legal risk; the structure must satisfy the arm's-length principle and withstand audit.

### Blocked and Trapped Cash

When controls bind, cash accumulates locally. The value of trapped cash is less than its face value, because of the time it will take to release it, the exchange rate at which it is converted (possibly a worse official or parallel rate), the inflation that erodes its local value while waiting, and the political risk that the rules will tighten. A standard approach is to value the cash as the PV of its expected release schedule at a rate reflecting these costs.

**Example 18.4 – Leakage along the repatriation route and the value of blocked funds.**
Part 1: Dividend versus royalty route. The Aurelian subsidiary has $100 million of pre-royalty pre-tax profit. The local tax rate is 25 percent, dividend withholding tax is 10 percent, royalty withholding tax is 15 percent, and the parent's home tax rate is 21 percent with credit for foreign taxes. The parent could extract cash purely by dividends, or by a royalty of $50 million (arm's length) and dividends on the remainder.

*Dividend only.* Local tax = 0.25 × 100 = 25.0. Net income = 75.0, distributed. Dividend withholding = 0.10 × 75.0 = 7.5. Cash to parent = 67.5. Home tax: gross foreign income 100, home tax at 21 percent = 21.0, credit for local tax and withholding of 25.0 + 7.5 = 32.5 exceeds the 21.0 liability (credit limited to 21.0), so there is no residual home tax. Total taxes = 32.5; **parent receives 67.5** (67.5 percent of pre-tax profit).

*Royalty plus dividend.* Royalty 50.0, deductible. Local pre-tax profit becomes 50.0; tax = 12.5; net income = 37.5; dividend withholding = 3.75; dividend to parent after withholding = 33.75. Royalty withholding = 0.15 × 50 = 7.5; royalty received = 42.5. Home tax: royalty income 50 × 21% = 10.5, less credit for royalty withholding 7.5, residual **3.0**. Dividend: no residual (credit). Total taxes = 12.5 + 3.75 + 7.5 + 3.0 = 26.75. Cash to parent after home tax = 33.75 + 42.5 − 3.0 = **73.25** (73.25 percent).

The royalty route saves 5.75 (5.75 percent of the pre-tax profit) because the royalty is deductible against a 25 percent local rate and bears a lower combined rate. But this applies only up to the arm's-length royalty rate, and the tax authority may challenge excess. In some jurisdictions, royalties are further restricted by exchange control.

Part 2: Blocked funds. The subsidiary holds the equivalent of $100 million in local currency that the central bank will release in four equal annual installments of $25 million. The appropriate discount rate reflecting the sovereign risk, the opportunity cost of capital and the risk of further delay is 15 percent.

PV = 25 × [1 ÷ 1.15 + 1 ÷ 1.15² + 1 ÷ 1.15³ + 1 ÷ 1.15⁴] = 25 × 2.8550 = **$71.37 million**, a 28.6 percent haircut to face value.

*Interpretation:* cash and subsidiary cash flows should not be valued at face value when controls apply. The haircut is the combined cost of delay and risk, and it grows if the release schedule is uncertain. When a target holds large trapped cash balances, the buyer should price them at the haircut value, not the balance sheet value (a common difference between the headline "net cash" and the economic one).

### Strategies for Managing Controls

- **Limit local cash.** Repatriate frequently, use fees and royalties where allowed, and minimize idle balances in controlled currencies.
- **Reinvest locally.** If cash must remain, choose investments that fit the strategic plan rather than letting trapped cash sit in low-return local deposits. Some firms use trapped cash for local acquisitions, which may be value-creating if the target is sound, but which may also tempt managers into poor investments because the cash is "free".
- **Use local debt as an offset.** Funds trapped locally can be used to repay local debt instead of paying down parent-level debt; net the two for assessing exposure.
- **Plan for parallel-market dynamics.** Where there are multiple rates, ensure that accounting, tax and legal advice is clear about the rates applicable to each transaction, since misuse can expose the company to regulatory sanctions.
- **Negotiate protections at entry.** Agreements with the host government, investment-promotion agencies or central bank may include assurances of convertibility, which can also be insured.
- **Recognize contagion.** Controls rarely appear in isolation: when currency reserves run low, controls, price caps, forced conversion of export proceeds, and discriminatory taxes often arrive together. The scenarios should be consistent.

## 18.6 Joint Ventures and Local Partners

### Why Joint Ventures

Foreign investors enter emerging markets through wholly owned greenfield investment, acquisition of a local firm, a minority stake, a contractual alliance (licensing, franchising, distribution), or a **joint venture (JV)** with a local partner. JVs are chosen for four reasons: *regulatory* (many countries cap foreign ownership in sectors such as telecoms, banking, media, retail, mining), *access* (the partner brings customers, distribution, licenses, land, and political relationships), *risk sharing* (sharing capital at risk in an uncertain market), and *learning* (the foreign firm gets market knowledge). The costs are shared control, conflicts over strategy and dividends, risk of technology leakage, and the possibility that the partner becomes a competitor once it has learned the business.

### The Economics and Governance of a JV

A JV is incomplete contracting in its most stressful form: the partners must agree ex ante on a business whose outcomes and the partners' interests change over time. The main design questions are:

- **Ownership and control.** Economic ownership (share of cash flows) and control (board seats, veto rights, management appointments) need not coincide. A minority investor can hold *reserved matters* (veto rights over budget, capital increases, related-party transactions, changes of strategy, new debt, dividend policy, sale of assets, and appointment of the CEO and CFO) that protect its investment without majority ownership. Consolidation of the JV for accounting depends on control as defined by IFRS 10 / ASC 810, and so affects reported leverage and covenants.
- **Contributions.** In-kind contributions (land, licenses, brands, technology) must be valued, and disagreements over valuation of non-cash contributions are a classic source of later conflict.
- **Funding obligations.** Who must provide additional capital if the JV needs it? Dilution formulae for the partner that does not contribute protect the others but can be used opportunistically to squeeze out a cash-constrained partner (a particular danger when a foreign partner faces capital controls or the local partner faces a banking crisis).
- **Dividend policy.** Local partners often prefer reinvestment (to grow the JV and their position) while the foreign partner needs cash flows to the parent. A minimum payout rule can reduce conflict.
- **Related-party transactions.** Fees, royalties and transfer prices between the JV and its partners are the principal channels through which value can be shifted from one partner to the other. They require clear arm's-length rules and approval by the unconflicted directors.
- **Deadlock resolution.** For 50/50 or veto-heavy structures, provisions for resolving deadlock (escalation, mediation, shotgun clauses or buy-sell) are essential.
- **Exit and transfer.** Rights of first refusal, tag-along and drag-along rights, lock-ups, and put and call options determine how each party can leave and at what price.

### Local Partner Dynamics

The local partner is simultaneously the foreign investor's greatest asset and greatest risk. The following patterns recur:

1. **Asymmetric information.** The partner knows the local market, the regulators and the true state of the books; the investor does not. Due diligence on the partner, including its reputation, ownership, political exposure and other businesses, is as important as diligence on the target.
2. **Misaligned time horizons and objectives.** A family business may value control and succession over return on capital; a foreign strategic investor values consolidated market share and global brand protection.
3. **Hold-up and opportunism.** Once the foreign investor has committed capital and transferred know-how, its bargaining position weakens (the obsolescing bargain again, at the level of the partner). The partner may demand renegotiation, divert corporate opportunities to its other businesses, or compete using the transferred know-how.
4. **Tunneling.** Controlling shareholders may extract value through related-party transactions, asset sales at off-market prices, loans on favorable terms, or preferential dealing with affiliates. Tunneling is a central agency problem in markets with concentrated ownership and pyramid structures, and the minority protections in local law may be weak.
5. **Political connection as a double-edged asset.** A partner with strong political ties may speed licenses and protect the business from adverse treatment, but is exposed to changes of government and may expose the investor to anti-corruption liability.
6. **Evolution of the relationship.** Partnerships frequently begin with the foreign partner needing the local partner for access, and end with the local partner needing the foreign partner much less, as it acquires capabilities. Many JVs end in a buy-out by one partner. It is therefore wise to design the exit at the start.

### Valuation Issues for JV Stakes

The value of a minority or JV stake is not a simple pro rata share of enterprise value. Adjustments include a *discount for lack of control* (if the stake carries no control over dividends, strategy or sale) and a *discount for lack of marketability* (restricted transferability), partially offset by the value of negotiated rights (vetoes, put options, tag-along). The magnitude of these adjustments depends on the governance terms: a stake with strong protective rights is worth more than one without.

Put and call options between partners are significant contingent claims. A put option written by the foreign partner allowing the local partner to sell its stake at a pre-agreed price is a contingent liability; if the strike is a floor price, the put is deep in the money precisely when the business has done badly, and the foreign partner will have to pay the most when it is least able to. The value of such options can be estimated with the option methods of Volume 1, Chapter 18.

**Example 18.5 – Fee leakage and the value of a put option in a JV.**
Part 1: Management fee. Solano holds 49 percent of a JV in Aurelia and the local partner holds 51 percent. The JV's pre-fee, pre-tax profit is $100 million, the local tax rate is 25 percent, and Solano proposes a management fee of $15 million per year payable to it, taxed in its hands at 21 percent (net of credits, simplified).

Without fee: JV net income = 100 × 0.75 = 75.0; Solano's share 0.49 × 75.0 = **36.75**; partner's share 0.51 × 75.0 = **38.25**.

With fee: JV pre-tax profit = 85; net income = 85 × 0.75 = 63.75; Solano's share of dividends = 0.49 × 63.75 = 31.24; Solano's fee after tax = 15 × 0.79 = 11.85; total to Solano = **43.09**. Partner's share = 0.51 × 63.75 = **32.51**.

Solano gains 43.09 − 36.75 = **$6.34 million**; the partner loses 38.25 − 32.51 = **$5.74 million**. The joint gain of $0.60 million equals the net tax effect: the fee saves 15 × 0.25 = 3.75 of local tax and costs 15 × 0.21 = 3.15 of home tax.

*Interpretation:* the fee mostly transfers value from the local partner to Solano; it is, in effect, the foreign partner collecting 100 percent of $15 million but bearing only 49 percent of its cost to the JV (the partner bears the other 51 percent). A local partner who understands this will insist on a cap, on arm's-length benchmarking of the fee, and on approval by a majority of the unconflicted directors. Fees which are really payment for services performed and costs incurred are legitimate; fees that exceed those values are a hidden dividend and a likely source of future conflict.

Part 2: Put option. The local partner (51 percent) holds a put option to sell its stake to Solano in three years at a floor price of $300 million. Business value at that time is 7.5 times JV EBITDA; the stake is worth 0.51 × 7.5 × EBITDA. Assume EBITDA scenarios of $50 million (probability 0.15), $65 million (0.25), $80 million (0.40) and $100 million (0.20).

Stake values: 0.51 × 7.5 × 50 = 191.25; × 65 = 248.63; × 80 = 306.00; × 100 = 382.50. Put payoffs max(300 − value, 0): **108.75**, **51.38**, 0, 0. Expected payoff = 0.15 × 108.75 + 0.25 × 51.375 = 16.31 + 12.84 = **$29.16 million**. PV at 10 percent over 3 years: 29.16 ÷ 1.331 = **$21.9 million**.

*Interpretation:* the put is a $21.9 million liability that does not appear in the purchase price but belongs in the valuation of Solano's position. Solano must also ask whether it will have the financial capacity, and the legal ability to move funds across the border, to honor the put in the scenario (low EBITDA, possibly a currency crisis) in which it is exercised. This *wrong-way* correlation between the exercise of the option and the investor's ability to pay is the main danger of floor-priced puts.

### Table 18.2 – Entry Mode Comparison

| Entry mode | Control | Capital at risk | Speed | Local knowledge | Key risks |
|---|---|---|---|---|---|
| Greenfield (wholly owned) | Full | High | Slow | Must build | Political risk, hold-up by government, slow ramp-up |
| Acquisition of local company | Full or majority | High | Fast | Inherited with the target | Integration, hidden liabilities, governance of target |
| Joint venture | Shared | Moderate | Medium | Partner provides | Partner conflict, tunneling, exit disputes |
| Minority stake | Limited | Moderate | Fast | Partner-led | Lack of control, valuation, exit |
| Licensing / franchising | None over operations | Low | Fast | Licensee | Leakage of IP, quality control, limited upside |
| Export / distributor | Limited | Low | Fast | Distributor | Dependence, thin margins, channel conflict |

## 18.7 Capital Structure and Financing in Emerging Markets

### Why Emerging-Market Capital Structure Differs

Volume 1, Chapter 15 developed the trade-off theory, pecking-order theory and agency perspectives on capital structure for developed markets. In emerging markets the same forces act, but the constraints and costs differ.

- **Shallow and short-term debt markets.** Corporate bond markets in local currency are small, with short maturities; banks dominate and prefer collateral and short tenors. Firms often face a trade-off between short-term local borrowing (refinancing risk) and long-term hard-currency borrowing (currency risk).
- **High local interest rates.** Local-currency borrowing costs include expected inflation and depreciation, as well as the sovereign risk premium; the local rate may look expensive relative to dollar debt.
- **Volatile cash flows and higher costs of distress.** Macroeconomic volatility raises the probability of distress at any leverage; weaker insolvency systems (slow, uncertain, favorable to insiders or to creditors, depending on the country) raise the cost of distress. The trade-off theory therefore points to *lower* target leverage, for a given tax shield.
- **Concentrated ownership and group structures.** Family and business-group ownership, pyramid structures and cross-holdings are common. Controlling shareholders may prefer debt to equity issuance to avoid dilution of control, and intra-group financing may substitute for weak external markets, with internal capital markets that can either support or exploit weaker members.
- **Information and governance problems.** Opaque accounting and weak creditor rights make lenders demand collateral and short maturity, and make equity investors demand a higher premium. Firms with strong governance (ADR listings, international auditors, foreign institutional investors) obtain better terms.
- **Tax shield variations.** Interest deductibility is often constrained by thin-capitalization rules, caps on deductible interest, withholding taxes on cross-border interest and inflation-related distortions.
- **Dollarization.** Many emerging-market firms borrow in dollars or euros because it is cheaper or available at longer tenors, creating the *currency mismatch* risk on balance sheets with local-currency revenues.

### The Currency of Debt

The choice between local-currency and hard-currency debt is the crucial capital structure decision in emerging markets. Hard-currency debt looks cheaper because the nominal interest rate is lower, but the apparent saving is compensation for expected depreciation. Over any horizon, the borrower will pay less in hard-currency terms to the extent the local currency depreciates *less than* the interest differential implies, and more if it depreciates more. The break-even depreciation rate for a one-period loan is:

```
d* = (1 + k_local) ÷ (1 + k_hard) − 1
```

If the actual depreciation exceeds d*, hard-currency debt turns out more expensive. Interest rate parity implies that a *hedged* hard-currency loan (using a forward or cross-currency swap) costs approximately the local rate, apart from market frictions. The unhedged choice is therefore a bet on the exchange rate, with downside concentrated in the states of the world in which the firm is already stressed: depreciation tends to come with recessions, falling local revenues and credit tightening (*wrong-way* risk). That asymmetry is why the currency-mismatch problem has been a recurring feature of emerging-market crises, and why a risk-neutral comparison of expected costs understates the true cost of unhedged foreign-currency debt.

**Example 18.6 – Local versus hard-currency debt.**
Aurelia Refrescos can borrow the equivalent of $100 million in US dollars at 7.0 percent, or in local currency at 14.0 percent. Spot is LC 20 per dollar. Local inflation is 9 percent, US inflation 2.5 percent. Operating cash flow (EBIT) is LC 300 million per year, EBITDA is LC 400 million, and the debt is LC 2,000 million at spot.

Step 1 – Break-even depreciation: 1.14 ÷ 1.07 − 1 = **6.54 percent** per year. If the local currency depreciates by less than 6.54 percent a year, dollar debt costs less than local debt in local-currency terms.

Step 2 – Expected cost under PPP depreciation. The PPP-implied depreciation is 1.09 ÷ 1.025 − 1 = 6.34 percent. The expected local-currency cost of the dollar loan is 1.07 × 1.0634 − 1 = **13.79 percent**, close to the 14.0 percent of the local loan (the difference is the market's friction and credit spread). In expectation, the two loans cost almost the same: the dollar loan's low coupon is not a free lunch.

Step 3 – Stress test. With a dollar loan, interest in dollars is $7 million per year. Consider coverage and leverage in local currency terms after depreciation of the local currency against the dollar:

| Local-currency depreciation | Spot (LC/$) | Interest (LC m) | EBIT cover | Debt (LC m) | Debt / EBITDA |
|---|---|---|---|---|---|
| 0% | 20 | 140 | 2.14x | 2,000 | 5.0x |
| 10% | 22 | 154 | 1.95x | 2,200 | 5.5x |
| 20% | 24 | 168 | 1.79x | 2,400 | 6.0x |
| 40% | 28 | 196 | 1.53x | 2,800 | 7.0x |
| 60% | 32 | 224 | 1.34x | 3,200 | 8.0x |

(Assuming revenues and EBITDA stay constant in local currency. If depreciation is accompanied by a recession, the cover is lower still, and if inputs are imported, the cost base rises with depreciation.)

Step 4 – Interpretation. A 60 percent depreciation, comparable to the largest observed in emerging-market crises, raises leverage from 5.0 to 8.0 times EBITDA and lowers interest cover from 2.14 to 1.34 times, even before any operating deterioration. With the local loan at 14 percent (interest LC 280 million, cover 300 ÷ 280 = 1.07x at the start) the firm is more strained at the outset, but its liabilities do not increase with depreciation. The choice is between a high fixed cost with no wrong-way exposure and a lower cost with convex downside.

*Managerial implication:* match the currency of debt to the currency of cash flows unless the firm earns hard-currency revenues (exporters), has natural offsets (dollar-priced inputs sold at dollar-linked prices), or has hedged. A beverage company selling in local currency should hold local-currency debt for the base of its capital structure, using hard-currency debt only up to the amount of its natural dollar exposure, or when hedged and the hedge cost is acceptable. Parent guarantees and cross-currency swaps can allow access to cheaper hard-currency funds while transferring the currency risk to the party better able to bear it.

### Other Capital Structure Considerations

- **Equity versus debt for the subsidiary.** Parent funding of a subsidiary can be in equity (repatriation by dividends or capital reduction) or in intercompany loans (interest deductible, principal repayable without withholding tax, but subject to thin-capitalization rules and regulatory registration). The mix is a tax and control decision that must follow the repatriation analysis of Section 18.5.
- **Local partners and local debt.** Borrowing locally gives a political hedge: a government is less likely to seize a business that is a major borrower from local banks; the mix of local creditors and employees makes expropriation more costly.
- **Multilateral and development institutions.** Development finance institutions provide long-tenor loans and equity, often at better terms than commercial markets, and provide a degree of political protection. They require compliance with environmental and social standards.
- **Equity issuance and listing.** A local listing can improve valuation and provide an exit route but exposes the firm to local market volatility; an international listing signals governance quality at the cost of compliance.
- **Target leverage.** Higher volatility, higher cost of distress and more difficult refinancing all argue for lower target leverage than for a comparable developed-market firm; stress tests should include a currency shock, an interest-rate shock and a revenue shock simultaneously.

## Case Study: Danube Grid Services in Karvania

*Illustrative case; the company, country and figures are fictional.*

Danube Grid Services (DGS) is a European provider of metering and grid-management services with a home-market WACC of 7 percent. It is bidding to acquire 70 percent of Karvania Metering, the leading supplier of smart meters to the national electricity distributors of Karvania, a middle-income country of 45 million people. The remaining 30 percent would stay with the Rostov family, the founders, who have excellent relationships with the energy ministry.

*The numbers.* Karvania Metering's free cash flow is expected to be KC 900 million (Karvanian crowns) in year 1, growing at 12 percent a year for four years and then at 5 percent in nominal terms. Spot is KC 36 per euro. Expected inflation is 8 percent in Karvania and 2 percent in the euro area. Karvania's euro-denominated sovereign bonds yield 4.5 percentage points over euro swaps; the volatility ratio of equities to bonds is 1.5. The euro risk-free rate is 3 percent, the mature-market equity risk premium 5.5 percent, the target's beta 0.9, and target debt-to-capital 30 percent. The pre-tax cost of euro-denominated debt for the company would be the risk-free rate plus the sovereign spread plus 1.5 percent; tax rate 20 percent. DGS estimates that about 60 percent of the target's profits depends on the domestic distribution companies, the remainder on exports of components.

*Complications.*

- The distribution companies are state-controlled, and payments have lagged by up to nine months during budget stress. A change of government in eighteen months could renegotiate meter tariffs. The finance ministry has twice imposed temporary limits on dividend transfers during currency stress, once for six months and once for fourteen months.
- The Rostov family has proposed a shareholders' agreement in which it holds a veto over budget, any new debt and the appointment of the CEO, and receives a put option at 6 times EBITDA exercisable from year 4. It has also asked that DGS provide a EUR 60 million parent guarantee for local bank loans in Karvanian crowns at 16 percent.
- A bank offers a EUR 80 million loan at 5.5 percent, which DGS finds attractive compared with a crown loan at 16 percent, and proposes that the target service it from crown revenues.
- DGS's chief executive has been told that one of the family's companies supplies components to the target at prices above those of independent suppliers.

*Task.* The DGS board has asked for a recommendation on whether to proceed, on what terms and at what price. The finance team has been asked to produce a valuation in euros, a risk assessment and a proposal on governance and financing.

**Discussion Questions**

1. Estimate DGS's cost of capital for the investment under the additive, beta-scaled and lambda approaches (using λ = 0.8 for the exporter share and domestic exposure as given), and recommend one. Explain which risks you would deal with through scenario analysis instead of the discount rate, and why.
2. Describe the method you would use to value the cash flows, in crowns or in euros. Compute the local-currency WACC for the case and the forecast exchange rate path implied by parity. What would happen to value if DGS discounted crown cash flows at the euro WACC?
3. Evaluate the proposed euro loan versus a crown loan, the parent guarantee, and the put option. What is the break-even depreciation for the loan, and how would you protect DGS against wrong-way risk from the put?
4. Design the governance and protective structure of the investment: reserved matters, related-party transaction rules (including the component supplier), dividend policy, exit and deadlock provisions, and measures to mitigate payment delay, dividend-transfer restrictions and tariff renegotiation. What conditions would make you walk away?

## Key Takeaways

- Cross-border risk comprises country, currency, political, transfer, legal and liquidity risks; each should be placed once, in either the discount rate or the cash flows, and not both.
- Country risk premiums are usually built from sovereign spreads scaled by the equity-to-bond volatility ratio; the additive, beta-scaled and lambda approaches differ by about a percentage point, less than the difference from ignoring the premium.
- Lambda, the exposure of a firm's cash flows to the country, matters: exporters and multinationals with diversified revenue deserve a smaller premium than domestically dependent firms.
- Currency consistency is the central rule: local cash flows with local-currency discount rates, or hard-currency flows at forecast exchange rates with hard-currency rates; mixing the two can overstate value by 30 percent or more.
- Purchasing power parity and interest-rate parity give a neutral base-case forecast; real exchange-rate views should be explicit scenarios.
- Discrete political events such as expropriation are best modeled with probabilities, recovery rates and scenarios, and then mitigated through treaties, insurance, financing structure and relationships.
- Cash that reaches the parent is what has value; repatriation channels, withholding taxes and controls create leakage, and trapped funds should be discounted for delay and risk.
- Joint ventures need governance designed for the eventual conflict: reserved matters, related-party rules, funding obligations, deadlock mechanisms and exit options.
- Floor-priced put options and fee arrangements are contingent claims and value transfers that belong in valuation; wrong-way risk arises when the option is exercised just when the writer cannot pay.
- Match the currency of debt to the currency of cash flows; hard-currency borrowing looks cheaper only because the market already prices expected depreciation, and the risk concentrates in crises.

## Review Questions

1. Why might a global-CAPM investor argue that a country risk premium is unnecessary, and why do practitioners nevertheless include one?
2. Explain how the country risk premium is derived from a sovereign spread, and why the spread is multiplied by an equity-to-bond volatility ratio.
3. Compare the additive, beta-scaled and lambda approaches. In what circumstances would you prefer each?
4. Explain why discounting local-currency cash flows at a hard-currency rate overstates value. What is the relationship between the local and hard-currency costs of capital?
5. What role does purchasing power parity play in valuation, and what are its limits?
6. How should expropriation risk be handled: in the discount rate, in the cash flows or through insurance? What are the advantages and weaknesses of each?
7. What is creeping expropriation and why is it harder to insure than outright seizure?
8. List the channels for repatriating cash from a subsidiary and explain how tax and legal features affect the choice.
9. Why is trapped cash worth less than its face value, and how would you value it?
10. Describe three ways a local partner can extract value from a joint venture, and how contracts can limit each.

## Problems

1. **CRP.** The sovereign spread of a country is 4.2 percent and the equity-to-bond volatility ratio is 1.3. The risk-free rate is 3.5 percent, mature-market ERP 5.5 percent, and beta 0.9. Compute the CRP and the cost of equity under the additive, beta-scaled and lambda (λ = 0.7) approaches.
2. **Exchange-rate forecast.** Spot is LC 40 per dollar; inflation is 12 percent locally and 3 percent in the United States. Forecast the exchange rate for years 1 to 3 under relative PPP.
3. **Local WACC.** A project has a dollar WACC of 10 percent. With local inflation of 12 percent and US inflation of 3 percent, compute the local-currency WACC.
4. **Political risk.** A project yields $50 million in years 1 and 2 and $550 million in year 3 (including terminal value). The discount rate is 11 percent. There is a 5 percent annual probability of loss with no compensation. Compute the unadjusted PV, the survival-weighted PV, and the equivalent discount rate.
5. **Repatriation.** A subsidiary earns 200 of pre-tax profit; local tax is 30 percent, dividend withholding tax is 15 percent, and the home country exempts foreign dividends. How much reaches the parent and what is the total leakage rate?
6. **Blocked funds.** 150 of funds are released in three equal annual installments. The discount rate is 18 percent. Compute the PV and the haircut.
7. **Debt currency.** Dollar debt costs 6.5 percent and local debt 12.5 percent. Compute the break-even depreciation. If the currency depreciates 8 percent a year, compute the local-currency cost of the dollar loan.
8. **JV fee.** A JV with pre-tax profit before fee of 100 is owned 40 percent by the foreign partner and 60 percent by the local partner. Local tax is 30 percent. The foreign partner charges a fee of 10, taxed at 20 percent in its hands. Compute each partner's income with and without the fee.

### Answers to Selected Problems

1. CRP = 4.2% × 1.3 = **5.46%**. Mature cost of equity = 3.5% + 0.9 × 5.5% = 8.45%. Additive: **13.91%**. Beta-scaled: 3.5% + 0.9 × (5.5% + 5.46%) = **13.36%**. Lambda: 8.45% + 0.7 × 5.46% = **12.27%**.
2. 40 × (1.12 ÷ 1.03)^t: year 1 **43.50**, year 2 **47.30**, year 3 **51.43** LC per dollar.
3. 1.10 × (1.12 ÷ 1.03) − 1 = **19.61%**.
4. Unadjusted PV = 50 ÷ 1.11 + 50 ÷ 1.2321 + 550 ÷ 1.3676 = 45.05 + 40.58 + 402.16 = **$487.78 million**. Survival-weighted PV = **$424.22 million** (13.0 percent lower). Equivalent discount rate = 1.11 ÷ 0.95 − 1 = **16.84%**.
5. After local tax: 140; after withholding: 119 = **119** reaches the parent; leakage = 81 ÷ 200 = **40.5%**.
6. PV = 50 × (0.8475 + 0.7182 + 0.6086) = **$108.71**; haircut = 1 − 108.71 ÷ 150 = **27.5%**.
7. Break-even = 1.125 ÷ 1.065 − 1 = **5.63%**. Cost at 8% depreciation: 1.065 × 1.08 − 1 = **15.02%**, higher than the 12.5% local loan.
8. Without fee: JV net income 70; foreign partner **28.0**, local partner **42.0**. With fee: JV net income = 90 × 0.7 = 63; foreign partner = 0.4 × 63 + 10 × 0.8 = 25.2 + 8.0 = **33.2**; local partner = 0.6 × 63 = **37.8**. The foreign partner gains 5.2; the local partner loses 4.2.
