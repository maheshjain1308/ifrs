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
