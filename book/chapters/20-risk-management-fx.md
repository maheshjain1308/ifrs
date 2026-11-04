# Chapter 20: Enterprise Risk Management and Foreign Exchange

## Learning Objectives

After studying this chapter you should be able to:

- Classify the main categories of corporate risk (market, credit, liquidity, operational, strategic and others) and explain how enterprise risk management integrates them into a single framework tied to strategy and risk appetite.
- Explain the concept of Value at Risk (VaR), compute parametric VaR for single assets and simple portfolios, scale it across horizons, and describe its limitations along with the role of expected shortfall and stress testing.
- Design the elements of a corporate hedging policy: objectives, hedge ratios and horizons, permitted instruments, limits, counterparty rules and governance.
- Distinguish transaction, translation and economic exposure to exchange rates, and measure each with simple tools.
- Apply covered interest rate parity, purchasing power parity and related relationships to price forward rates, detect arbitrage and form disciplined expectations about long-run currency movements.
- Compare hedging a currency exposure with forwards, money market positions, options and collars, and choose among them using payoff analysis and managerial objectives.

## Opening Vignette

*(Illustrative scenario; the company is fictional.)*

Verdant Bay Instruments designs and manufactures laboratory analyzers at a plant in the United States. Last year it sold equipment worth 480 million: 55 percent in the United States, 30 percent in the euro area and 15 percent in the United Kingdom. Components are bought in dollars, euros and Swiss francs; the largest subsidiary, in Germany, holds net assets of 25 million euros. The company's debt is 220 million, of which about a third is floating-rate.

In the last three years the chief financial officer, Marcus Lindqvist, has seen quarterly earnings move in ways that operating performance alone does not explain. In one quarter a strengthening dollar reduced reported euro revenue by 14 million. In another, a customer in the euro area paid an invoice for 5 million euros six months after it was issued, and the treasury received 220,000 dollars less than the amount recorded in the budget. In a third, the board noticed that the German subsidiary's net assets, translated into dollars, shrank by almost 2 million, lowering reported equity although nothing had happened to the subsidiary's operations.

The board's audit and risk committee asks Marcus three questions. What are all the risks the company runs, and which ones are we paid to take? How bad could a bad month be, in a single number the committee can track? And what is the policy for currency exposure; who decides how much to hedge, with what instruments, and how will we know if it is working?

Marcus recognizes that these questions cannot be answered by the treasury alone. Risks arise in procurement, sales, financing and technology; they interact; and the choice of which to retain is a strategic one. This chapter gives him the framework: a taxonomy of risks, a quantitative measure of market risk (VaR), the elements of a hedging policy, and the economics of foreign exchange, from the parity relationships that discipline exchange rates to the instruments (forwards, money market hedges, options) that manage them.

## 20.1 A Taxonomy of Corporate Risk

### 20.1.1 Why risk management matters to shareholders

In the frictionless world of Modigliani and Miller, hedging cannot create value: shareholders can diversify and hedge on their own, and a firm's value depends on the cash flows of its assets. Risk management matters in practice because of *frictions*:

- **Costs of financial distress.** Volatile cash flows raise the probability that the firm cannot meet its obligations; distress involves lost customers, strained suppliers, forced asset sales and legal costs.
- **Convex taxes.** If tax is progressive or losses cannot be fully carried back, smoother income lowers expected tax.
- **Underinvestment.** When internal cash flows fall unexpectedly, external financing is costly, and profitable projects are cut. Hedging helps match internal funds to investment needs.
- **Managerial risk aversion and incentives.** Managers hold undiversified human and financial capital in the firm.
- **Contracting and covenants.** Debt covenants based on accounting ratios can be breached by volatility rather than by poor performance.

These frictions imply that firms should hedge risks that are *not core to their competitive advantage*, are *large relative to the firm's capacity to absorb them*, and are *cheaply transferable* in liquid markets. They should retain risks they are better placed than the market to understand and manage.

### 20.1.2 The main categories

| Risk category | Definition | Typical sources | Typical tools |
|---|---|---|---|
| Market risk | Loss from changes in prices and rates | Exchange rates, interest rates, commodity prices, equity prices | Forwards, futures, swaps, options; natural hedges |
| Credit risk | Loss from a counterparty failing to perform | Customer receivables, derivative counterparties, bank deposits, suppliers | Credit limits, insurance, collateral, diversification |
| Liquidity risk | Inability to meet cash obligations when due, or to trade without large price impact | Margin calls, maturing debt, covenant breaches, market disruptions | Committed credit lines, cash buffers, staggered maturities |
| Operational risk | Loss from failed processes, people, systems or external events | Fraud, errors, cyber events, supply chain failure, natural disasters | Controls, business continuity, insurance |
| Strategic and business risk | Loss from poor strategic decisions or changes in competitive conditions | Technology disruption, shifts in demand, acquisitions, pricing | Scenario planning, portfolio diversification, real options |
| Legal, regulatory and compliance risk | Loss from violation of laws or changes in regulation | Sanctions, privacy, tax, product liability | Compliance programs, legal review |
| Reputational and ESG risk | Loss of stakeholder trust or exposure to environmental and social factors | Product safety, labor practices, climate-related physical and transition effects | Policies, disclosure, monitoring |

*Table 20.1 – A taxonomy of corporate risks.*

Two cautions apply. First, categories overlap: a margin call is a market-risk event that becomes a liquidity-risk event. A supplier's failure may be a credit, operational and strategic problem at once. Second, risk is not one-sided; the same uncertainty that produces losses produces gains. A firm that eliminates all risk eliminates return.

### 20.1.3 Enterprise risk management

Traditional risk management was siloed: treasury handled currencies, insurance managers bought policies, internal audit tested controls. **Enterprise risk management (ERM)** is an integrated, firm-wide process, overseen by the board and executed by management, that identifies the events that might affect the achievement of objectives, assesses them consistently, and responds within an agreed appetite for risk. Widely used frameworks, such as those published by COSO and ISO 31000, share the same logic:

1. **Governance and culture.** The board sets risk appetite and holds management accountable; managers have clear ownership of risks.
2. **Strategy and objective-setting.** Risk is considered when strategy is chosen, not afterwards. The risk appetite (how much loss the firm is willing to bear in pursuit of its objectives) and risk tolerance (acceptable variation around specific objectives) are made explicit.
3. **Identification and assessment.** Risks are catalogued in a risk register and assessed by likelihood and impact, ideally in quantified terms (cash-flow-at-risk, earnings-at-risk, VaR).
4. **Response.** For each risk the options are to avoid, reduce (mitigate), transfer (hedge or insure) or accept.
5. **Monitoring and reporting.** Key risk indicators, limit utilization and incidents are reported to management and the board, with independent challenge from a risk function.

The managerial gain from ERM is *aggregation*. A firm may discover that its currency exposure and its commodity exposure offset each other, that two apparently different risks share a common driver (for example, a recession lowering demand, raising credit losses and tightening liquidity simultaneously), or that its risk appetite is being used up by exposures it did not intend to take. Aggregation also reveals natural hedges, which are cheaper than financial ones.

### 20.1.4 Risk appetite and the three lines

Risk appetite is expressed in limits that connect to what the firm cannot afford to lose. Examples: "earnings before interest and tax should not fall by more than 10 percent from currency movements in a one-in-twenty year event"; "liquidity headroom must exceed the largest 30-day cash outflow in the stress scenario"; "net debt to EBITDA must remain at least 0.5 turns inside covenant levels under the stress scenario." Responsibility is commonly allocated through the **three lines** model: business units own and manage risks (first line); an independent risk and compliance function sets standards and monitors (second line); internal audit gives independent assurance to the board (third line).

## 20.2 Measuring Market Risk: Value at Risk

### 20.2.1 The concept

**Value at Risk (VaR)** answers the question: "What is the maximum loss that will not be exceeded with a given probability (the confidence level) over a given horizon?" A one-day 99 percent VaR of 2.8 million means that, under normal market conditions, the portfolio should lose more than 2.8 million on only about 1 trading day in 100 (about two or three days a year). VaR has three parameters: the **horizon** (one day, ten days, one month), the **confidence level** (95 or 99 percent), and the **portfolio** with its risk factors. It does not say how much is lost on the bad days; it is a threshold, not a worst case.

Three methods of estimating VaR are common:

- **Parametric (variance-covariance).** Assume returns are normally distributed with a volatility estimated from history. VaR is a multiple of the portfolio standard deviation. Fast and transparent, but sensitive to the normality assumption and poor for options.
- **Historical simulation.** Revalue the current portfolio using actual historical changes in risk factors; read off the percentile. Captures fat tails present in the data but assumes the past sample is representative.
- **Monte Carlo simulation.** Simulate thousands of scenarios from a specified model of the risk factors and revalue the portfolio in each. Flexible, handles options and nonlinearities, but model-dependent and computationally heavier.

### 20.2.2 Parametric VaR

For a portfolio of value V with daily standard deviation of returns σ and a confidence level c with normal critical value z_c (z = 1.645 for 95 percent, 2.326 for 99 percent), assuming a zero mean daily return:

```
VaR (1 day) = z_c · σ · V
```

Scaling to a longer horizon of T days under independent daily returns:

```
VaR (T days) = VaR (1 day) · √T
```

The square-root-of-time rule follows from the variance of independent returns adding over time. It overstates risk where returns mean-revert and understates it where returns are autocorrelated or volatility clusters.

### Example 20.1 – Single-position VaR and scaling

*A treasury holds a 100 million portfolio of foreign-currency-denominated investments. Daily return volatility is 1.2 percent. Compute the one-day 99 percent VaR, the ten-day 99 percent VaR and the one-day 95 percent VaR. Also compute the expected shortfall at 99 percent.*

```
1-day 99% VaR  = 2.326 × 0.012 × 100,000,000 = 2,791,617
10-day 99% VaR = 2,791,617 × √10 = 2,791,617 × 3.1623 = 8,827,869
1-day 95% VaR  = 1.645 × 0.012 × 100,000,000 = 1,973,824
```

(Using unrounded critical values 2.32635 and 1.64485.) Interpretation: on 99 days in 100 the one-day loss should not exceed about 2.79 million; over ten days, the loss is expected to stay below 8.83 million with 99 percent probability. The ten-day figure is about 3.16 times the one-day figure, not 10 times.

**Expected shortfall (ES)**, also called conditional VaR, is the average loss *given that* the loss exceeds VaR. For a normal distribution with zero mean:

```
ES = σ · V · φ(z) / (1 − c)
```

where φ is the standard normal density. At 99 percent, φ(2.326) = 0.02665, so

```
ES = 0.012 × 100,000,000 × 0.02665 / 0.01 = 3,198,257
```

The average loss on the worst 1 percent of days is about 3.20 million, 14.6 percent higher than the VaR threshold. With fat-tailed real data the gap is larger, which is why regulators and risk committees increasingly look at ES alongside VaR.

### 20.2.3 Portfolio VaR and diversification

For a portfolio of positions with standard deviations (in money terms) `a = w₁σ₁` and `b = w₂σ₂`, and correlation ρ, the portfolio's money standard deviation is

```
σP = √(a² + b² + 2ρab)
```

and VaR = z_c · σP. Because the correlation is less than 1, portfolio VaR is lower than the sum of the stand-alone VaRs: the difference is the **diversification benefit**.

### Example 20.2 – Two-asset VaR with diversification

*A firm has 60 million of exposure to asset 1 (daily volatility 1.5 percent) and 40 million to asset 2 (daily volatility 1.0 percent), correlation 0.3. Find the one-day 99 percent VaR of the portfolio, and the diversification benefit.*

```
a = 60,000,000 × 0.015 = 900,000
b = 40,000,000 × 0.010 = 400,000

σP = √(900,000² + 400,000² + 2 × 0.3 × 900,000 × 400,000)
   = √(810,000,000,000 + 160,000,000,000 + 216,000,000,000)
   = √1,186,000,000,000
   = 1,089,036

Portfolio VaR     = 2.326 × 1,089,036 = 2,533,477
Sum of stand-alone VaRs = 2.326 × (900,000 + 400,000) = 2.326 × 1,300,000 = 3,024,252
Diversification benefit = 3,024,252 − 2,533,477 = 490,775
```

(The sums are computed with unrounded z.) Diversification reduces VaR by about 16 percent. In a crisis correlations tend to rise toward 1, eroding the benefit, which is why stress testing with elevated correlations matters.

### 20.2.4 Limitations of VaR

- **Not a worst case.** Losses beyond VaR can be far larger.
- **Distribution assumptions.** Financial returns have fat tails and volatility clusters; normal-based VaR understates extreme moves.
- **Not subadditive in general.** VaR can, in unusual cases, increase when portfolios are combined, violating the intuition that diversification reduces risk. Expected shortfall does not have this flaw.
- **Backward-looking.** Calibration windows that end in calm periods produce low VaR just before volatility rises.
- **Liquidity ignored.** VaR assumes positions can be exited at current prices within the horizon.
- **Gaming and false comfort.** A single number can mask concentrated, illiquid or complex positions.

For these reasons VaR is complemented by **stress testing** (revaluing the portfolio under severe but plausible scenarios, such as a 20 percent currency move or a 300 basis point rate shock), **scenario analysis** (historical episodes replayed), and **reverse stress testing** (asking what event would breach covenants or exhaust liquidity). Nonfinancial corporations often prefer **cash-flow-at-risk** or **earnings-at-risk**, which apply the same statistical idea to the firm's operating cash flows or EBIT over the planning horizon, because their exposures are not marketable securities and what matters is the ability to fund operations and investment.

## 20.3 Designing a Hedging Policy

A hedging policy turns the risk appetite of Section 20.1 into rules that treasury staff can apply and the board can monitor. Its purpose is to prevent two opposite failures: leaving material exposures unmanaged, and allowing the treasury to become a profit center that takes unauthorized speculative positions.

### 20.3.1 Elements of a sound policy

1. **Objectives.** State what the hedging is for: protect budgeted margins, stabilize cash flows available for investment, secure covenant compliance, or lock in prices for customers. An objective such as "beat the market" is not a hedging objective. Specify the metric that will be protected (EBIT, cash flow, a specific margin, net debt to EBITDA).
2. **Scope of exposures.** List which exposures are hedged: recognized balances (receivables, payables, loans), firm commitments, forecast transactions, and net investments. Define how forecast exposures are identified, who certifies the forecast, and how it is updated.
3. **Hedge ratios and horizon.** Specify minimum and maximum percentages by time bucket. A typical pattern is higher ratios for near-term, more certain exposures and lower ratios further out.
4. **Permitted instruments.** Forwards, swaps and purchased options are usually permitted; sold options, leveraged or exotic instruments are typically prohibited or require approval, because they can create unlimited losses or obscure risk.
5. **Counterparty and credit rules.** Minimum credit rating, maximum exposure per bank (measured by mark-to-market plus an allowance for potential movement), netting and collateral agreements.
6. **Limits and authorities.** Notional limits per instrument and per currency, VaR or cash-flow-at-risk limits, stop-loss escalation, authority levels for dealers.
7. **Segregation of duties.** The front office executes, the middle office monitors risk and valuation independently, the back office confirms and settles, and accounting records. No one person can execute, confirm and record a trade.
8. **Liquidity planning.** Margin and collateral requirements under stress; committed facilities sized to the stressed outflow.
9. **Accounting and reporting.** Rules on documentation for hedge accounting (Chapter 19), the frequency and content of reports, and escalation of breaches to the board.
10. **Review.** Periodic review of the policy and a post-mortem of hedge performance, benchmarked against pre-agreed alternatives (such as no hedge, fully hedged, or a static 50 percent hedge), so that results are judged by process rather than hindsight.

### 20.3.2 Natural hedges and operational hedges first

Financial hedging is the last resort, not the first. Cheaper tools are:

- **Natural hedging.** Match currency of costs and revenues. A firm with euro revenues can buy components or locate production in the euro area, or borrow in euros so that debt service is paid from euro income.
- **Netting.** Combine receivables and payables in the same currency across subsidiaries and hedge only the net amount; multilateral netting centers reduce transaction volumes and fees.
- **Invoicing in home currency.** Shifts the exposure to the customer or supplier, but may reduce competitiveness or simply move the risk into the price negotiation.
- **Leading and lagging.** Accelerating or delaying payments in anticipation of exchange rate moves; this is partly speculative and often constrained by transfer pricing and tax rules.
- **Pricing clauses and surcharges.** Contractual adjustment of price for exchange rate movements beyond a band.
- **Diversifying operations and suppliers** across currency areas.

### 20.3.3 How much to hedge

The correct hedge ratio is neither zero nor one by default. Considerations: the certainty of the forecast (hedging a forecast that does not materialize creates a speculative position), the firm's capacity to absorb adverse moves, the cost of the hedge, the firm's view of whether competitors are hedged (an unhedged competitor with lower costs after a currency move may undercut prices), and the relationship between the exposure and other parts of the business. Many firms use a **layered (rolling) hedge**: they hedge a high proportion of exposures in the next quarter and progressively less for later periods, and add layers each period. The average hedged rate is then a moving average of forward rates, smoothing the transition when the currency permanently shifts and giving the firm time to adjust prices and costs.

### Example 20.3 – A layered hedging program

*Verdant Bay forecasts euro-denominated net inflows of EUR 12 million in each of the next four quarters. Policy requires hedging 90 percent of the first quarter, 70 percent of the second, 50 percent of the third and 30 percent of the fourth. The spot rate is 1.08 USD per EUR. (a) How much is hedged? (b) What is the dollar effect of an immediate, permanent 5 percent fall in the euro with and without the program?*

(a) Hedged amounts:

```
Q1: 12 × 0.90 = 10.8
Q2: 12 × 0.70 =  8.4
Q3: 12 × 0.50 =  6.0
Q4: 12 × 0.30 =  3.6
Total hedged   = 28.8 million EUR out of 48 million  (60% overall)
Unhedged       = 48 − 28.8 = 19.2 million EUR
```

(b) A 5 percent fall in the euro lowers the rate by 1.08 × 0.05 = 0.054 USD per EUR (to 1.026).

```
Without hedges: loss = 48,000,000 × 0.054 = 2,592,000 USD
With the program: unhedged loss = 19,200,000 × 0.054 = 1,036,800 USD
Protected amount = 2,592,000 − 1,036,800 = 1,555,200 USD
```

(Ignoring forward points.) The firm has protected 60 percent of the dollar value of the shock. The protection is heavily weighted toward the near term, so the firm retains pressure to adapt its prices and cost base for the later quarters, where the permanent currency change will bite. Conversely, if the euro rises 5 percent, the firm gives up the matching gain on the hedged part: that is the cost of certainty. The next quarter's layer would be added at the new forward rate, so the average hedge rate gradually adjusts.

### 20.3.4 Governance lessons from hedging failures

Published cases of large derivative losses at corporations and public bodies in past decades tend to share features: positions much larger or more complex than the underlying exposure; leverage embedded in structured products; inadequate valuation and independent reporting; board members who did not understand the instruments; and the reporting of derivatives as profit centers. The remedies are exactly the ones listed in 20.3.1: clear objectives, restricted instruments, independent monitoring, and board-level reporting in plain language.

## 20.4 Foreign Exchange Exposure

Exchange rate risk is the effect of unexpected exchange rate changes on the value of the firm. It is usually divided into three types, which differ in time horizon, measurement and hedge.

| Dimension | Transaction exposure | Translation exposure | Economic (operating) exposure |
|---|---|---|---|
| What is affected | Cash flows from contracted foreign-currency receipts and payments | Reported values of foreign subsidiaries' assets, liabilities, income when consolidated | Present value of future operating cash flows and competitive position |
| Time horizon | Short term, contractually fixed | Balance sheet dates, reporting periods | Long term, uncertain |
| Measurement | Net contracted foreign-currency amounts by date | Net assets (and income) by functional currency | Regression, scenario or simulation of cash flows against exchange rates |
| Cash effect | Real cash gain or loss at settlement | No direct cash effect (accounting), though covenants and capital ratios may be affected | Real, via sales volume, prices, costs |
| Hedge tools | Forwards, money market hedges, options, natural hedges | Foreign-currency debt or derivatives designated as net investment hedges; or accept it | Operational: diversify production, sourcing and markets; pricing strategy; foreign-currency financing |

*Table 20.2 – The three exposures.*

### 20.4.1 Transaction exposure

Transaction exposure arises between the moment a price in foreign currency is agreed and the moment it is settled. A US exporter invoices EUR 5 million payable in six months; if the euro falls before payment, the dollars received fall. The exposure also extends to *contingent* exposures, such as a bid in foreign currency for a contract that may or may not be won. Because the amount and date are known, transaction exposure is the easiest to hedge, and the hedging choices (forwards, money market, options) are covered in Section 20.6.

### 20.4.2 Translation exposure

When a parent consolidates a foreign subsidiary, it translates the subsidiary's financial statements from its functional currency into the parent's presentation currency. Under IAS 21, assets and liabilities are translated at the closing rate, and income and expenses at the transaction-date rates (or an average approximation); the resulting exchange differences accumulate in other comprehensive income in a foreign currency translation reserve and are recycled to profit or loss when the foreign operation is disposed of. Translation effects are therefore not usually in earnings, but they change equity, leverage ratios and book value, and may be disclosed prominently.

Hedging translation exposure means creating a liability or derivative in the foreign currency of equal size to the net assets, designated as a *net investment hedge* so that offsetting gains and losses sit together in OCI (Chapter 19). Many firms choose not to hedge translation exposure because it is non-cash and shareholders can diversify; others hedge to protect leverage covenants or capital ratios.

### Example 20.4 – Translation exposure and a net investment hedge

*Verdant Bay's German subsidiary has net assets of EUR 25 million. The rate is 1.10 USD per EUR at the start of the year and falls to 1.04 at year-end. (a) Compute the translation loss. (b) Suppose the parent had sold EUR 25 million forward at 1.10 (ignoring forward points) designated as a net investment hedge. What is the net effect on OCI?*

(a) Net assets in dollars:

```
Start: 25,000,000 × 1.10 = 27,500,000
End:   25,000,000 × 1.04 = 26,000,000
Translation loss = 1,500,000 (recognized in OCI)
```

(b) The forward sells EUR at 1.10 while the market rate is 1.04: gain per EUR of 0.06, or 25,000,000 × 0.06 = 1,500,000. The gain on the hedge offsets the loss on net assets in OCI, leaving the reserve unchanged. The hedge generates cash settlement of 1.5 million at maturity (an actual cash flow), while the translation loss is non-cash; so the program creates a liquidity need if the currency moves the other way. This mismatch is why some firms hedge translation exposure partially, or hedge with euro borrowings (which require no cash settlement until repaid).

### 20.4.3 Economic exposure

Economic exposure is the sensitivity of the firm's *future* operating cash flows, and therefore its value, to exchange rate changes. It is not an accounting concept and cannot be read off the balance sheet. A currency appreciation can hurt a firm that has no foreign-currency contracts: an exporter loses price competitiveness at home and abroad; a domestic producer facing imports from a country whose currency depreciates loses sales or margin. Conversely, a firm importing inputs benefits from a stronger home currency. Exposure depends on:

- the currency of costs and revenues (the *net* position);
- pricing power and the degree of pass-through to customers;
- elasticity of demand, and the currency of competitors' costs;
- the speed at which the firm can change sourcing and production;
- hidden dependencies, such as suppliers whose costs are in a foreign currency, even if the firm pays them in domestic currency.

Measurement typically uses regression: the dependent variable is the firm's cash flow (or stock return) and the independent variable the exchange rate or an index; the slope is the *exposure coefficient*. Scenario analysis complements it by modeling cash flows under alternative rate paths.

### Example 20.5 – Estimating economic exposure with a regression

*A division's quarterly operating cash flow (USD millions) and the average USD per EUR rate over six quarters are as follows. Estimate the exposure.*

| Quarter | USD per EUR (x) | Cash flow, USD millions (y) |
|---|---|---|
| 1 | 1.00 | 118 |
| 2 | 1.04 | 121 |
| 3 | 1.08 | 125 |
| 4 | 1.12 | 126 |
| 5 | 1.16 | 131 |
| 6 | 1.20 | 133 |

*Table 20.3 – Illustrative data for an exposure regression.*

Means: x̄ = (1.00 + 1.04 + 1.08 + 1.12 + 1.16 + 1.20) / 6 = 6.60 / 6 = 1.10; ȳ = (118 + 121 + 125 + 126 + 131 + 133) / 6 = 754 / 6 = 125.667.

Deviations and products:

```
x − x̄:  −0.10, −0.06, −0.02, +0.02, +0.06, +0.10
y − ȳ:  −7.667, −4.667, −0.667, +0.333, +5.333, +7.333
Σ(x−x̄)(y−ȳ) = 0.7667 + 0.2800 + 0.0133 + 0.0067 + 0.3200 + 0.7333 = 2.1200
Σ(x−x̄)²     = 0.01 + 0.0036 + 0.0004 + 0.0004 + 0.0036 + 0.01 = 0.0280

slope b = 2.1200 / 0.0280 = 75.71
intercept a = 125.667 − 75.71 × 1.10 = 42.38
```

So `Cash flow ≈ 42.4 + 75.7 × (USD per EUR)`, with R² of about 0.98 in this illustrative sample. Interpretation: each 0.01 rise in the euro adds about 0.76 million to quarterly cash flow; a 0.05 fall in the euro (4.5 percent from 1.10) reduces it by 75.71 × 0.05 = 3.79 million, about 3 percent of the cash flow. The division behaves as if it were *long* about EUR 75.7 million per quarter. This is a measure of economic exposure and may be much greater than its contractual transaction exposure. A hedge against a currency fall would sell euros forward in proportion, but a regression based on six points is fragile: the manager should confirm with scenario analysis and ask why the relationship exists (for example, euro-denominated sales with dollar costs).

The practical implication is that economic exposure is managed mainly through *strategy*: locating plants in the currency areas where sales occur, choosing suppliers with costs in the same currency as revenues, financing foreign operations in local currency, and adjusting pricing. Financial hedges can buy time (as in the layered program) but cannot permanently protect a firm whose cost structure is structurally misaligned with its revenue base.

## 20.5 Exchange Rate Relationships

Exchange rates are determined by trade flows, capital flows, expectations and policy. Over short horizons they are very hard to predict; over longer horizons and in terms of arbitrage, a set of *parity relationships* provide discipline. We quote exchange rates as the domestic-currency price of one unit of foreign currency (USD per EUR). With that convention, a rising rate means the foreign currency appreciates.

### 20.5.1 Covered interest rate parity (CIP)

Covered interest rate parity states that the forward exchange rate is determined by the spot rate and the interest rate differential. An investor can invest domestically, or convert to foreign currency, invest abroad, and lock in the conversion back with a forward contract. If both routes are riskless, they must give the same return:

```
(1 + i_d · t) = (S / F) · (1 + i_f · t)      ⟹      F = S · (1 + i_d · t) / (1 + i_f · t)
```

where i_d is the domestic interest rate, i_f the foreign rate, t the period as a fraction of a year (using simple interest for periods up to a year; for longer periods use compounding), S and F quoted as domestic per foreign. The currency with the higher interest rate trades at a **forward discount**; the currency with the lower interest rate trades at a forward premium. The forward rate is *not* a forecast of the future spot rate; it is a no-arbitrage price based on interest rate differentials, and CIP holds closely (apart from stresses in funding markets, when cross-currency basis spreads widen) because deviations can be arbitraged with very low risk.

### Example 20.6 – Pricing a forward rate with CIP

*The spot rate is 1.0800 USD per EUR. The six-month USD interest rate is 5.0 percent per year and the six-month EUR rate is 3.0 percent per year (simple interest). Find the six-month forward rate.*

```
F = 1.0800 × (1 + 0.05 × 0.5) / (1 + 0.03 × 0.5)
  = 1.0800 × 1.025 / 1.015
  = 1.0800 × 1.009852
  = 1.09064
```

The euro trades at a forward premium of 1.09064 − 1.0800 = 0.01064 USD per EUR, about 0.985 percent over six months (1.97 percent annualized), approximately the interest differential of 2 percentage points per year. These "forward points" (106 points in the quotation convention where one point is 0.0001) are the price of carrying one currency instead of the other, not a prediction that the euro will rise.

### Example 20.7 – Covered interest arbitrage

*Using the data in Example 20.6, a bank quotes the six-month forward at 1.0950, above the parity value of 1.09064. Show how to exploit this with a 1,000,000 dollar borrowing.*

The forward price of euros (1.0950) is too high relative to parity, so sell euros forward and finance by borrowing dollars:

1. Borrow USD 1,000,000 for six months at 5 percent per year; at maturity the repayment is 1,000,000 × 1.025 = USD 1,025,000.
2. Convert at spot: 1,000,000 / 1.0800 = EUR 925,926.
3. Invest the euros at 3 percent per year for six months: 925,926 × 1.015 = EUR 939,815.
4. Sell EUR 939,815 forward at 1.0950: receive USD 939,815 × 1.0950 = USD 1,029,097.
5. Repay the loan: USD 1,025,000. Profit = 1,029,097 − 1,025,000 = **USD 4,097** per million borrowed, with no exposure to the exchange rate and no investment of own funds.

Arbitrageurs doing this would push spot up, forward down, euro interest down, and dollar interest up until the profit disappears. Therefore corporate treasurers should expect a bank's forward quotes to follow CIP closely, and any difference beyond a reasonable dealer margin is a negotiation point.

### 20.5.2 Purchasing power parity (PPP)

The **law of one price** says that identical tradable goods should cost the same in different countries when prices are converted at the market exchange rate, otherwise arbitrageurs would buy where cheap and sell where dear. **Absolute PPP** extends this to price levels: S = P_d / P_f. **Relative PPP** says that the percentage change in the exchange rate equals the inflation differential:

```
S_t = S₀ · [(1 + π_d) / (1 + π_f)]^t
```

where π_d and π_f are domestic and foreign annual inflation rates. A country with higher inflation should see its currency depreciate.

The empirical record is that PPP is a weak guide in the short run (deviations last for years because of nontradable goods, transport costs, tariffs, pricing-to-market and capital flows), but a better guide over long horizons, especially for large inflation differentials. It is useful to a manager in three ways: as a *benchmark of valuation* (is a currency far from its PPP level?), as a *basis for long-horizon planning* when forward markets do not exist, and as a *warning* that a high-inflation location will probably experience currency depreciation that offsets any apparent cost advantage.

### Example 20.8 – Relative PPP and real exchange rate

*Spot is 1.08 USD per EUR. Expected annual inflation is 3 percent in the United States and 2 percent in the euro area. (a) What does relative PPP predict for the rate after one year and after three years? (b) A basket of goods costs USD 6.00 in the US and EUR 5.20 in the euro area. What is the absolute PPP rate and the real exchange rate?*

(a) One year:

```
S₁ = 1.08 × (1.03 / 1.02) = 1.08 × 1.009804 = 1.0906
```

The euro is expected to appreciate by about 0.98 percent per year against the dollar.

Three years:

```
S₃ = 1.08 × (1.03 / 1.02)³ = 1.08 × 1.029707 = 1.1121
```

(b) The absolute PPP rate = 6.00 / 5.20 = 1.1538 USD per EUR. The actual rate of 1.08 is lower than 1.1538, so the euro is undervalued relative to PPP by 1.08/1.1538 − 1 = −6.4 percent. The real exchange rate is

```
q = S · P_f / P_d = 1.08 × 5.20 / 6.00 = 0.936
```

A real rate below 1 means that euro-area goods are about 6.4 percent cheaper than US goods when measured in a common currency, a source of competitive advantage for euro-area producers *if* the basket is representative. The interest differential (5 percent versus 3 percent) in Example 20.6 and the inflation differential (3 percent versus 2 percent) here are both roughly consistent with the dollar being the weaker currency in the long run, though the forward rate is by itself no forecast.

### 20.5.3 The international Fisher effect and uncovered parity

The **Fisher effect** states that nominal interest rates equal the real rate plus expected inflation. If real rates are equal across countries, interest differentials reflect inflation differentials: `(1 + i_d) / (1 + i_f) = (1 + π_d) / (1 + π_f)`. Together with relative PPP, this gives the **international Fisher effect** or **uncovered interest parity** (UIP): the expected change in the spot rate equals the interest differential. In its pure form the expected future spot rate would equal the forward rate. The empirical evidence has shown otherwise: high-interest-rate currencies have often not depreciated as UIP predicts, which is why the "carry trade" (borrowing in low-rate currencies to invest in high-rate ones) has delivered positive average returns punctuated by sharp crashes. For corporate managers, the lesson is that forward rates are not unbiased predictors, that a hedge at the forward rate is a fair-value transaction rather than an advantageous or disadvantageous one, and that policy should not depend on forecasting currencies.

| Relationship | Statement | Basis | Reliability | Use for the manager |
|---|---|---|---|---|
| Covered interest parity | F/S = (1 + i_d)/(1 + i_f) | Riskless arbitrage | Very high (except in funding stress) | Price and sanity-check forwards; money market hedges equal forwards |
| Relative PPP | ΔS ≈ π_d − π_f | Goods arbitrage | Weak short run, better long run | Long-horizon planning, valuation benchmarks |
| Fisher effect | i ≈ r + π | Real-rate equalization | Moderate | Interpret interest differentials as inflation expectations |
| Uncovered interest parity | E[ΔS] ≈ i_d − i_f | Expectations; risk-neutral investors | Poor over short horizons | Do not assume forwards forecast spot |

*Table 20.4 – Parity relationships.*

## 20.6 Hedging Foreign Exchange Exposure

### 20.6.1 The set of instruments for transaction exposure

Suppose Verdant Bay will receive EUR 5 million in six months from a euro-area customer. The treasurer has three main alternatives for locking in or bounding the dollar value:

1. **Forward contract.** Sell EUR 5 million forward to a bank at the six-month forward rate.
2. **Money market hedge.** Borrow the present value of the euros today, convert at spot, invest the dollars; use the euro receipt to repay the loan.
3. **Currency option.** Buy a put option on euros, which guarantees a minimum dollar value while preserving the upside.

A fourth alternative is to stay unhedged, which is a conscious decision to bear the risk.

### Example 20.9 – Forward and money market hedge compared

*Verdant Bay expects EUR 5,000,000 in six months. Spot is 1.0800; the six-month USD rate is 5 percent and the EUR rate is 3 percent per year (simple). Compute the dollar proceeds with (a) the forward hedge and (b) the money market hedge. (c) Compare with the unhedged conversion at today's spot.*

(a) Forward rate from Example 20.6: 1.09064. Proceeds = 5,000,000 × 1.09064 = USD 5,453,202.

(b) Money market hedge:

```
Step 1: Borrow euros whose repayment at six months equals the receipt:
        PV = 5,000,000 / (1 + 0.03 × 0.5) = 5,000,000 / 1.015 = EUR 4,926,108
Step 2: Convert to dollars at spot:
        4,926,108 × 1.0800 = USD 5,320,197
Step 3: Invest dollars at 5% for six months:
        5,320,197 × 1.025 = USD 5,453,202
Step 4: At month 6, the EUR 5,000,000 receipt repays the euro loan.
```

The result, USD 5,453,202, is identical to the forward hedge, as covered interest parity requires. In practice the two differ slightly because of bid-ask spreads, differences between deposit and borrowing rates, and credit lines used.

(c) Selling the euros at today's spot would give 5,000,000 × 1.08 = 5,400,000 but is not available (the cash arrives in six months). The extra 53,202 from the hedges (5,453,202 − 5,400,000) is the forward premium, which compensates for the higher dollar interest rate: it is not a free gain. If the spot rate in six months were 1.10, the unhedged outcome would be 5,500,000; if 1.05, it would be 5,250,000. The hedge removes this variability: the outcome is 5,453,202 whatever the rate.

### 20.6.2 Options

A **currency put option** on euros gives the holder the right to sell euros at the strike price. For an exporter with euro receivables, buying a put sets a floor for the dollar value while retaining the benefit of a stronger euro, at the price of the premium. The same economics applies to importers with euro payables, who buy calls.

### Example 20.10 – Hedging with a put option

*Verdant Bay buys a six-month put option on EUR 5,000,000 with a strike of 1.0800 for a premium of 0.0200 USD per EUR. The USD interest rate is 5 percent per year (simple), so the premium is financed for six months. Compute the net proceeds for several spot rates at maturity, compare with the forward hedge of Example 20.9 and find the break-even rate.*

Premium paid today = 0.0200 × 5,000,000 = USD 100,000. Future value at six months = 100,000 × 1.025 = USD 102,500.

Net proceeds = 5,000,000 × max(S_T, 1.0800) − 102,500.

| Spot in six months | Unhedged (USD) | Forward hedge (USD) | Put option, net of premium (USD) |
|---|---|---|---|
| 1.00 | 5,000,000 | 5,453,202 | 5,297,500 |
| 1.05 | 5,250,000 | 5,453,202 | 5,297,500 |
| 1.08 | 5,400,000 | 5,453,202 | 5,297,500 |
| 1.11 | 5,550,000 | 5,453,202 | 5,447,500 |
| 1.15 | 5,750,000 | 5,453,202 | 5,647,500 |
| 1.20 | 6,000,000 | 5,453,202 | 5,897,500 |

*Table 20.5 – Outcomes of alternative hedging strategies for a EUR 5 million receivable.*

Calculation checks: at 1.00 and 1.05 and 1.08 the option's floor of 1.0800 applies: 5,400,000 − 102,500 = 5,297,500. At 1.11: 5,550,000 − 102,500 = 5,447,500. At 1.15: 5,750,000 − 102,500 = 5,647,500. At 1.20: 6,000,000 − 102,500 = 5,897,500.

The option guarantees at least 5,297,500, which is 155,702 less than the forward (5,453,202 − 5,297,500). In return it offers unlimited upside. The break-even spot rate at which the option outcome equals the forward outcome solves

```
5,000,000 × S − 102,500 = 5,453,202   ⟹   S = 5,555,702 / 5,000,000 = 1.1111
```

If the euro ends above 1.1111 the option beats the forward; below it, the forward is better. The choice depends on the treasurer's view of the distribution of outcomes and, more importantly, on the objective. Options are valuable when the exposure itself is uncertain (a bid that may not be won: with a forward, failure to win the contract leaves an open position that could lose, while the option's loss is limited to the premium) or when the firm wants to avoid regret.

### 20.6.3 Collars and other structures

A **collar** (or range forward) combines a purchased put with a sold call, so the premium received on the call finances the put. The exporter has a floor and a cap on the effective rate; between them the firm participates in the market.

### Example 20.11 – A zero-cost collar

*Verdant Bay buys a six-month put with strike 1.0600 and sells a call with strike 1.1200 on EUR 5,000,000. The premiums are equal, so the collar has zero cost. Find the net proceeds for the spot rates of Table 20.5.*

Net proceeds = 5,000,000 × min(max(S_T, 1.06), 1.12).

```
S_T = 1.00:  5,000,000 × 1.06 = 5,300,000   (put exercised)
S_T = 1.05:  5,000,000 × 1.06 = 5,300,000
S_T = 1.08:  5,000,000 × 1.08 = 5,400,000   (neither exercised)
S_T = 1.11:  5,000,000 × 1.11 = 5,550,000
S_T = 1.15:  5,000,000 × 1.12 = 5,600,000   (call exercised against the firm)
S_T = 1.20:  5,000,000 × 1.12 = 5,600,000
```

Proceeds are constrained to the band 5,300,000 to 5,600,000, a range of 300,000 compared with 1,000,000 for the unhedged position over the same scenarios. The collar costs nothing up front, and gives a floor (5,300,000) slightly above the net floor of the single put (5,297,500), but surrenders gains above 1.12. The sold call is an obligation that could lose money for the firm in a rising euro scenario, though it is offset by the gain on the underlying receivable. Because sold options can be considered speculative, policy must permit them only when matched against an underlying exposure.

### 20.6.4 Choosing among hedges

| Instrument | Cost | Protection | Upside retained | Best used when |
|---|---|---|---|---|
| Forward | Zero premium; embedded forward points | Complete at a fixed rate | None | Exposure certain in amount and date; objective is certainty |
| Money market hedge | Borrowing and lending spreads | Complete | None | No forward market available for the currency or maturity; credit lines in place |
| Purchased option | Upfront premium | Floor at strike | Full | Exposure uncertain (bids, forecasts); desire to retain upside |
| Collar | Zero or low | Floor and cap | Partial | Wants to limit cost and keep some participation |
| Natural or operational hedge | Often low | Partial, long-lasting | Depends | Structural exposures; first line of defense |
| No hedge | None | None | Full | Exposure immaterial, or offset elsewhere, or deliberate risk-taking within policy |

*Table 20.6 – Comparison of FX hedging approaches.*

### 20.6.5 Practical issues in FX hedging

- **Forecast risk.** A hedge of a forecast that fails to materialize leaves a speculative position. Use lower ratios for uncertain forecasts or use options.
- **Opportunity cost and regret.** If the hedge shows a "loss" relative to spot at settlement, the underlying receivable shows a matching gain. Report the combined position.
- **Currency of competitors.** Hedging transaction exposure for a year does not protect market share if rivals' costs are in a currency that has weakened. The hedge buys time.
- **Cross-hedging.** Where forward markets do not exist for a currency, a related currency (a proxy) may be used, creating basis risk; the minimum-variance approach of Chapter 19 applies.
- **Cash and credit.** Forwards use credit lines at banks. Option premiums are paid in cash up front. Margin and collateral requirements should be budgeted.
- **Accounting.** Forwards and options hedging forecast foreign-currency cash flows can be designated as cash flow hedges, with the forward points or option time value accounted for as costs of hedging, as described in Chapter 19.
- **Tax.** The tax treatment of hedging gains and losses may differ across jurisdictions; check before finalizing.

## 20.7 Integrating Currency, Interest Rate and Liquidity Risk

A multinational should treat its exposures as a portfolio. Currency exposures from sales, costs, intercompany loans and foreign debt may partially offset; interest rate exposures on foreign-currency debt are linked to currency exposure through the interest rate differentials that drive forward points; and liquidity risk links them all, because hedges that are economically perfect can still demand cash on a bad day.

An integrated approach has four steps. First, build a *map of exposures* by currency, tenor and type, netting where legal and operationally feasible. Second, estimate a *measure of risk* of the net portfolio (VaR for treasury positions; cash-flow-at-risk or earnings-at-risk for operating exposures), including stress scenarios that move currencies, rates and credit spreads together. Third, *compare the risk to appetite*, expressed in terms of covenants, ratings thresholds and investment capacity. Fourth, *choose the cheapest effective responses*, starting with operational and natural hedges, followed by financing in matching currencies, and finally financial derivatives sized according to the hedging policy.

Reporting should answer simple questions: What is our net exposure by currency this quarter and next year? What portion is hedged and at what average rate? What would a 10 percent move in each currency do to EBIT and to net debt to EBITDA? How much cash might we need to post if rates move adversely by a given stress amount? And how does our actual hedged result compare with the benchmarks decided in advance? When Marcus Lindqvist presents answers to these questions to the audit and risk committee, risk management becomes a management discipline rather than a collection of trades.

## Case Study: Northfield Agricultural Machinery

*(Illustrative case; the company and all figures are fictional.)*

Northfield Agricultural Machinery builds tractors and harvesting equipment at two plants in the Midwest of the United States and one plant in Poland. Annual revenue is 1.2 billion dollars: 50 percent from North America, 28 percent from Europe (invoiced mainly in euros) and 22 percent from Brazil and Argentina (invoiced in local currencies). Major cost lines are steel and components bought in dollars, hydraulic systems from a Japanese supplier invoiced in yen, and labor in dollars, euros and Polish zloty. Net debt is 480 million, 60 percent floating-rate. The covenant package requires net debt to EBITDA below 3.5 times.

For many years Northfield had no formal risk policy. Regional finance directors hedged invoices on request, sometimes with forwards and sometimes with sold options sold to generate premium income; the group treasurer in Chicago recorded the results at year-end. After a currency shock in which the real and the peso fell roughly 25 percent in one year while the euro weakened modestly, group EBITDA fell 18 percent. Reported net debt to EBITDA rose from 2.6 to 3.4 times, just inside the covenant. In the same year the Brazilian subsidiary received a large government-linked receivable in reais that had been hedged with a sold-option structure; the structure paid out a loss of 14 million when the real appreciated sharply in the following quarter, which the Brazilian director described as "lost premium income."

The board asked the new chief risk officer, Adaeze Mbeki, to produce an enterprise-wide analysis. Her team found the following.

First, the largest exposures were not in the hedged transactions. Economic exposure to the euro was significant: the Polish plant produced in zloty and sold in euros, while competitors' costs in Turkey and Italy moved in other directions. Brazil and Argentina were a large unhedged exposure in revenues, with local-currency sales and dollar-denominated component costs. The yen exposure was small and partially hedged, but a single supplier relationship made the company dependent on that currency in the medium term.

Second, correlations among exposures were not stable. In the stress period the real, peso and euro all fell against the dollar, and commodity prices declined at the same time, depressing farm incomes and equipment demand. The firm's market risk, credit risk (dealer receivables) and liquidity risk (dealer financing lines) all worsened together. A parametric VaR of the treasury's derivative book was 3.1 million at 99 percent, but the earnings-at-risk from the operating exposures, estimated by scenario analysis, was about 95 million for a one-in-twenty year event.

Third, instrument use violated no formal rule because none existed. The sold-option structures were used in several subsidiaries to reduce the cost of hedging. None was designated for hedge accounting, so mark-to-market swings flowed through profit and loss, obscuring operating performance.

Adaeze proposed a policy with the following features. Exposures will be netted by currency at group level and hedged centrally by the treasury using forwards and purchased options; sold options are allowed only in collars matched with an underlying exposure and approved by the risk committee. Forecast sales in euros will be hedged using a layered program of 80 percent for months 1 to 3, 60 percent for months 4 to 6, 40 percent for months 7 to 12 and 20 percent for months 13 to 18. Local-currency sales in Brazil and Argentina will be partially hedged where deliverable markets exist; elsewhere the company will adjust pricing clauses and shift more component sourcing to local suppliers. The Polish plant will gradually source in euros. A committed 150-million liquidity facility will be arranged against stress margin outflows. The group will adopt hedge accounting for forecast euro sales and for the net investment in the Polish subsidiary. A quarterly risk dashboard reports exposures, hedge ratios, average hedge rates, VaR, earnings-at-risk and liquidity headroom, and compares results with two benchmarks set in advance: the unhedged position and a static 50 percent hedge.

The sales director objected that hedging reduces the ability of regional managers to price flexibly, and that centralization will slow responses to customers. The Brazilian director argued that premium income from selling options was a legitimate source of financial return. The chief financial officer, while supportive, worried about the cost of purchased options and the accounting resources required.

### Discussion Questions

1. Classify Northfield's exposures into transaction, translation and economic exposure. Which are the most material to the firm's value and covenant position, and what evidence in the case supports your view?
2. Evaluate the argument that selling options to earn premium income is a legitimate source of return for a corporate treasury. Use payoffs to explain what risk the Brazilian structure created.
3. Explain why a VaR of 3.1 million and an earnings-at-risk of 95 million can both be correct. Which better informs the decision about the liquidity facility and the hedging ratios?
4. Critique the proposed layered hedge ratios and the centralization of hedging. What operational hedges would you recommend alongside, and how should hedge outcomes be judged against the benchmarks?

## Key Takeaways

- Hedging creates value only through frictions such as financial distress costs, convex taxes, underinvestment and covenants; firms should hedge large, non-core, cheaply transferable risks and retain those where they hold an advantage.
- Corporate risks span market, credit, liquidity, operational, strategic, legal and reputational categories; they interact, and a margin call turns a market-risk event into a liquidity event.
- Enterprise risk management integrates risks into one framework tied to strategy and risk appetite, using governance, assessment, response and monitoring, with three lines of accountability.
- VaR states the loss not exceeded with a given confidence over a horizon: `VaR = z · σ · V`, scaled by √T for longer horizons; expected shortfall and stress tests are essential complements because VaR ignores the tail beyond the threshold.
- Portfolio VaR reflects correlations; diversification benefits shrink in crises when correlations rise.
- A hedging policy defines objectives, scope, hedge ratios by horizon, permitted instruments, limits, counterparty rules, segregation of duties, liquidity planning and review, and judges outcomes against benchmarks set in advance.
- Transaction, translation and economic exposure differ in horizon, measurement and cash effect; economic exposure is the most important and the hardest to hedge, and is managed mainly by operational and strategic means.
- Covered interest parity `F = S(1 + i_d t)/(1 + i_f t)` prices forwards, makes the money market hedge equal to the forward hedge, and the forward rate is not a forecast of the spot rate.
- Relative PPP is a long-run benchmark rather than a short-run predictor; uncovered interest parity performs poorly, so hedging policy should not rely on currency forecasts.
- Forwards give certainty, options retain upside at the price of a premium, collars trade upside for lower cost; the instrument should match the certainty of the exposure and the objective of the firm.

## Review Questions

1. Explain, using Modigliani and Miller's irrelevance argument, why risk management might still create value for a corporation. Name three frictions and how each justifies hedging.
2. Give two examples showing how a risk in one category (market, credit, liquidity, operational) can become a risk in another category.
3. What are risk appetite and risk tolerance? Provide an example of each for a manufacturing company with foreign sales.
4. Define VaR in words and state its three parameters. Why is the ten-day VaR not ten times the one-day VaR?
5. Why is expected shortfall considered superior to VaR in describing tail risk? What do stress tests add?
6. List five elements that a corporate hedging policy should contain and explain why segregation of duties is critical.
7. Distinguish transaction, translation and economic exposure with an example of each for a US exporter with a German subsidiary.
8. Why is it usually better to address economic exposure by operational means than by financial derivatives?
9. State covered interest parity. Why does the forward rate not forecast the future spot rate? Why is the money market hedge equivalent to the forward hedge?
10. When would a firm prefer a purchased option to a forward contract for a foreign-currency exposure? What is the trade-off of a zero-cost collar?

## Problems

1. **VaR scaling.** A portfolio worth 250 million has daily volatility of 0.8 percent. Compute the one-day 99 percent VaR, the ten-day 99 percent VaR and the one-day 95 percent VaR (z = 2.326 and 1.645).
2. **Two-asset VaR.** A firm has exposures of 30 million (daily volatility 2.0 percent) and 70 million (daily volatility 1.0 percent), with correlation −0.2. Compute the one-day 95 percent VaR, the sum of stand-alone VaRs and the diversification benefit.
3. **Forward rate.** The spot is 1.2500 USD per GBP. One-year interest rates are 4.5 percent in USD and 3.0 percent in GBP (annual compounding). Compute the one-year forward rate and state whether sterling is at a premium or discount.
4. **PPP.** The USD/JPY spot is 150 yen per dollar. Expected annual inflation is 2.5 percent in the US and 0.5 percent in Japan. Use relative PPP to find the expected rate after four years.
5. **Money market hedge.** A US importer owes GBP 2,000,000 in six months. Spot is 1.2500 USD per GBP; the six-month USD rate is 4 percent per year and the GBP rate is 3 percent per year (simple interest). Describe a money market hedge and compute the dollar cost at maturity. Verify that it equals the forward cost.
6. **Option hedge.** For the importer in Problem 5, a six-month call on GBP 2,000,000 with strike 1.2600 costs 0.0150 USD per GBP. Financing at 4 percent per year (simple) for six months, compute the total dollar cost at maturity if the spot rate is 1.20 and if it is 1.35, and the maximum cost per pound.
7. **Translation exposure.** A subsidiary has net assets of EUR 25 million. The euro falls from 1.10 to 1.04 USD per EUR. Compute the translation loss, and the gain on a EUR 25 million forward sale at 1.10 designated as a net investment hedge.
8. **Economic exposure.** A regression gives quarterly cash flow (USD millions) = 30 + 55 × S, where S is USD per GBP. Compute the predicted change in cash flow if S rises from 1.20 to 1.32, and the GBP notional per quarter that would hedge the exposure.

### Answers to Selected Problems

1. 1-day 99%: 2.326 × 0.008 × 250,000,000 = 4.65 million (4,652,696 using unrounded z). 10-day: 4.65 × √10 = 14.71 million. 1-day 95%: 1.645 × 0.008 × 250,000,000 = 3.29 million.
2. a = 30,000,000 × 0.02 = 600,000; b = 70,000,000 × 0.01 = 700,000. σP = √(600,000² + 700,000² + 2 × (−0.2) × 600,000 × 700,000) = √(360,000,000,000 + 490,000,000,000 − 168,000,000,000) = √682,000,000,000 = 825,833. VaR(95%) = 1.645 × 825,833 = 1.358 million. Sum of stand-alone = 1.645 × 1,300,000 = 2.138 million. Diversification benefit about 0.78 million.
3. F = 1.2500 × 1.045 / 1.03 = 1.2682. Sterling is at a forward premium (USD rates are higher).
4. S₄ = 150 × (1.005 / 1.025)⁴ = 150 × 0.924 = 138.6 yen per dollar (the dollar is expected to depreciate against the yen, since US inflation is higher).
5. Buy the PV of GBP 2,000,000 at 3 percent for six months: 2,000,000 / 1.015 = GBP 1,970,443; its dollar cost today is 1,970,443 × 1.25 = USD 2,463,054, financed by borrowing at 4 percent for six months, so the repayment is 2,463,054 × 1.02 = USD 2,512,315. The forward rate is 1.25 × 1.02 / 1.015 = 1.25616, giving 2,000,000 × 1.25616 = USD 2,512,315, which is identical.
6. Premium 0.0150 × 1.02 = 0.0153 per GBP. If S = 1.20 the call is not exercised: cost = 2,000,000 × (1.20 + 0.0153) = USD 2,430,600. If S = 1.35 the call is exercised at 1.26: cost = 2,000,000 × (1.26 + 0.0153) = USD 2,550,600. Maximum cost per pound = 1.2753.
7. Loss: 25,000,000 × (1.10 − 1.04) = USD 1,500,000 (translation reserve). The forward gain is also 25,000,000 × (1.10 − 1.04) = USD 1,500,000, fully offsetting in OCI.
8. Change = 55 × (1.32 − 1.20) = 55 × 0.12 = USD 6.6 million per quarter. The cash flow behaves as if long GBP 55 million per quarter, so that is the hedge notional (before considering the appropriate hedge ratio).
