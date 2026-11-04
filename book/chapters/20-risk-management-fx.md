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

