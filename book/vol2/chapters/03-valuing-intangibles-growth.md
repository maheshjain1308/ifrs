# Chapter 3: Valuing Intangible-Rich and High-Growth Firms

## Learning Objectives

After studying this chapter, you should be able to:

- Explain why standard discounted cash flow practice, earnings multiples and book-value ratios mislead when a firm has negative earnings, heavy intangible investment and a very wide range of possible futures.
- Capitalize research and development (and other intangible spending) to restate operating income, invested capital and return on invested capital, and interpret the adjusted figures.
- Build a unit-economics model, including customer lifetime value, acquisition cost, payback and a cohort retention model, and connect it to enterprise value.
- Construct a scenario-weighted DCF that incorporates the probability of failure, dilution and funding needs, and distinguish it from a single "base case" valuation and from a simulation.
- Apply terminal-value discipline: link terminal growth, reinvestment and return on capital, test implied multiples, and decide when a terminal value is doing too much of the work.
- Value startups and platform businesses using the venture capital method, option-like reasoning and network-effect arguments, and explain what the resulting numbers do and do not mean.

## Opening Vignette

*Illustrative scenario; the company is fictional.*

Brightline Systems sells workflow software to mid-sized logistics companies. In its most recent fiscal year it reported revenue of 100 million, up 60 percent from the year before, and an operating loss of 30 million. It spends 38 percent of revenue on sales and marketing, 30 percent on research and development, and runs a gross margin of 74 percent. It has 55 million in cash, has been burning roughly 3 million a month, and has just received a term sheet for a new equity round.

Three people at Brightline's board meeting hold three different views of what the company is worth. The chief financial officer argues from the income statement: with negative earnings there is no price-to-earnings multiple, and a discounted cash flow model over a ten-year horizon is "mostly terminal value anyway," so she prefers a revenue multiple taken from a handful of listed software firms. An investor on the board argues from unit economics: each customer costs 12,000 to acquire and produces about 9,000 of gross profit per year with an annual churn of 12 percent, so the company is "obviously worth far more than it spends." A third director, a former operator, says both are wrong. Brightline's accounting profit is depressed by spending that builds assets (software, customer relationships, brand) that the balance sheet does not show, so the loss overstates the economic problem. But, he adds, at least one in four companies in this category runs out of cash before reaching scale, and a single "expected" forecast hides that fact.

All three are partly right. The revenue multiple ignores margin structure and risk; the unit-economics argument ignores overhead, the discount rate, and the cohort decay of retention; the accounting adjustment is necessary but says nothing about survival. This chapter builds the tools to combine them. We will restate the accounts to treat intangible spending as investment, model customers as cohorts, weigh scenarios including failure, discipline the terminal value, and finally translate everything into a price per share that a board could defend.

## 3.1 Why Standard Valuation Breaks Down

In Volume 1 (Chapters 5 and 21) we valued firms with a simple recipe: forecast free cash flow to the firm, discount at the weighted average cost of capital, add a terminal value, subtract debt and divide by shares. That recipe works well for mature companies whose current earnings are a reasonable base from which to extrapolate. It strains in three ways when applied to intangible-rich and high-growth firms.

### Negative or meaningless current earnings

A firm that is losing money has no stable earnings base. Price-to-earnings is undefined; growth rates applied to a negative number produce nonsense (a loss that "grows 20 percent" gets bigger). Even when earnings are positive but tiny, a multiple of a depressed number overstates value and a multiple of a peak number understates the risk. The fix is not to give up on fundamentals, but to move the anchor from current earnings to a **target state**: estimate what the firm's revenue, margins and reinvestment will look like when it has matured, and work backward to today.

### Intangible investment that accounting expenses

Under most accounting standards, outlays for research, brand building, customer acquisition and employee training are expensed immediately, while spending on a machine or a building is capitalized and depreciated. This asymmetry made sense when most economic assets were physical and measurable. It is distorting when the main assets are knowledge, data, software and relationships. Three consequences follow. Operating income is understated in years of rising intangible spending, because the investment is charged against current revenue while its benefits arrive later. Book equity and invested capital are understated, so return on invested capital looks spuriously high for a firm that has expensed its way to its capital base. And ratios such as price-to-book lose comparability across companies with different mixes of tangible and intangible assets.

(Note that under IFRS, development costs that meet strict criteria are capitalized as intangible assets, whereas research costs are expensed, and under US GAAP most software and R&D spending is expensed with narrow exceptions. Acquired intangibles do appear on the balance sheet, which makes acquisitive and organic growers look different even when their economics are alike. The point for valuation is that reported numbers need adjusting before they are compared or used as inputs.)

### An enormous dispersion of outcomes

The third problem is the most fundamental. For a mature utility, the distribution of possible future cash flows is narrow, and a single forecast is a decent summary. For a young company, the distribution is wide, skewed and contains a mass at zero. A single base-case forecast cannot represent such a distribution, for two reasons. First, if the probability of failure is meaningful, an expected cash flow that ignores it is biased upward. Second, because the payoff is convex (a successful company is worth many multiples of an average one, while the downside is limited to the investment), the mean of the distribution can sit very far from the "most likely" outcome. In Section 3.5 we compute an example in which the most likely scenario is worth 306 and the probability-weighted value is 288, and the value is dominated by a 15 percent chance of an outcome worth 1,202.

### The framework of this chapter

We keep the DCF skeleton because value is still the present value of the cash flows that investors will ultimately receive. What changes is how each element is estimated.

| Element | Mature firm | Intangible-rich / high-growth firm |
|---|---|---|
| Earnings base | Current normalized earnings | Target-state margin and revenue in a future year |
| Reinvestment | Capex plus working capital less depreciation | Includes capitalized R&D, acquisition spending, and sales-to-capital ratios |
| Growth | A single stable rate | A fade from very high growth to a stable rate over many years |
| Discount rate | Roughly constant WACC | Declines as the firm matures and risk falls |
| Uncertainty | Sensitivity analysis | Explicit scenarios, probability of failure, simulation |
| Terminal value | 60-80 percent of value, tied to a steady state | May exceed 100 percent of value; requires strict discipline |

The numbers should always be traceable to a story (how large the market is, what share the firm can take, how durable its pricing is, how much it must reinvest), and each story should be stress-tested against competitors and history.

## 3.2 Intangible Assets and the Capitalization Adjustment

### The logic of capitalizing R&D

If R&D produces benefits over several years, then economically it is capital expenditure, not an operating cost. The adjustment treats the past R&D spend as an asset with a finite life, amortizes it over that life, and adds back the current year's spend to operating income. The procedure has four steps.

1. Choose an amortizable life, based on how long it takes research to turn into products and how long those products remain valuable. Pharmaceuticals might use 10 years or more; software and consumer electronics perhaps 3 to 5.
2. Gather R&D expenses for as many past years as the life requires.
3. Compute the **research asset** (the unamortized portion of each year's expense) and the current-year **amortization**.
4. Adjust operating income and invested capital:

```
Adjusted EBIT = Reported EBIT + R&D(current) − Amortization of research asset
Adjusted invested capital = Reported invested capital + Research asset (unamortized)
```

With straight-line amortization over a life of L years, and with the convention that spending in year t begins amortizing in year t+1, the current amortization equals the average of the prior L years' R&D, and a dollar spent k years ago has a remaining fraction of (1 − k/L) unamortized.

**Example 3.1 – Capitalizing R&D.** Orion Devices reports EBIT of 300 million and invested capital (book equity plus debt less cash) of 1,500 million. Its tax rate is 25 percent. R&D spending for the last six years (millions), most recent first, was: year 0: 140; year −1: 125; year −2: 110; year −3: 100; year −4: 90; year −5: 80. We assume a five-year life with straight-line amortization.

*Step 1: unamortized research asset.* Each year's spend carries the fraction (1 − k/5) forward, where k is the number of years elapsed.

| Year | R&D | Fraction unamortized | Research asset |
|---|---|---|---|
| 0 (current) | 140 | 1.00 | 140.0 |
| −1 | 125 | 0.80 | 100.0 |
| −2 | 110 | 0.60 | 66.0 |
| −3 | 100 | 0.40 | 40.0 |
| −4 | 90 | 0.20 | 18.0 |
| −5 | 80 | 0.00 | 0.0 |
| **Total** | | | **364.0** |

*Step 2: current amortization.* The five prior years' spend is amortized over five years each, so amortization = (125 + 110 + 100 + 90 + 80) / 5 = 505 / 5 = 101.0 million.

*Step 3: adjusted EBIT.* 300 + 140 − 101 = 339 million. The adjustment raised operating income by 39 million, because current R&D (140) exceeds amortization (101) in a growing R&D budget.

*Step 4: adjusted invested capital.* 1,500 + 364 = 1,864 million.

*Step 5: returns.* Reported after-tax ROIC = 300 × 0.75 / 1,500 = 225 / 1,500 = 15.0 percent. Adjusted ROIC = 339 × 0.75 / 1,864 = 254.25 / 1,864 = 13.6 percent.

*Interpretation.* The firm's operating profit is higher than reported (339 versus 300), but the capital it has actually invested is also much higher (1,864 versus 1,500), and the return on that fuller base is lower than the headline. If a valuation uses the reported 15 percent ROIC to justify high future reinvestment value, it overstates the value of growth. The adjustment also changes the reinvestment rate used in the terminal value: net reinvestment now includes R&D minus amortization (39 million) in addition to ordinary capex net of depreciation. This is a simplification, because tax effects are ignored: in practice R&D is tax deductible when spent, so a rigorous adjustment tracks a deferred tax effect. For comparison across firms, the simplified version is usually adequate.

### Beyond R&D: SG&A and customer acquisition

The same logic applies to customer acquisition spending in subscription businesses, where a share of SG&A creates a customer relationship that yields revenue for years. The risk is overreach: if every unprofitable expense is relabeled investment, losses vanish by assertion. Two tests keep the adjustment honest: evidence of durability (cohort retention data show a multi-year benefit) and marginal return (a rising ratio of acquisition cost to first-year gross profit signals impairment).

### Valuation consequences of the adjustment

Capitalization changes the earnings base (adjusted income may be positive where reported income is negative), the reinvestment rate (growth equals reinvestment rate times ROIC, both measured on the adjusted base), and the comparability of multiples across R&D-intensive and asset-heavy firms. Capitalized R&D is an operating asset, not a financial one, so it does not offset debt in the bridge from enterprise value to equity value. A common mistake is to adjust earnings but not capital, or vice versa: adding back R&D to EBIT without adding the research asset to invested capital inflates ROIC and makes growth look free.

### Stock-based compensation

Stock compensation is a real cost because new shares dilute existing holders. Either deduct it as an operating expense in cash flows and use the current share count, or exclude it and model future dilution through the share count; ignoring it in both places double-counts the benefit. Options already granted should be valued (Volume 1, Chapter 18) and subtracted from equity value.

## 3.3 Valuing Firms with Negative Earnings

### From losses to a path to profitability

Trace the path: how revenue grows, how the margin improves from negative to target, and how much capital the firm must raise.

**Revenue trajectory.** Begin from the market: total addressable market, plausible share and time to reach it. A path starting at 60 percent and fading toward long-run economic growth over ten years is typical; check the cumulative revenue against the market-size assumption.

**Margin convergence.** The target operating margin should come from mature peers adjusted for the business model, and is usually the most influential assumption, so give it a range. A linear glide is the simplest rule; converge faster where costs are mostly fixed (software, platforms).

**Reinvestment through sales-to-capital.** Each incremental dollar of revenue requires 1/(S/C) dollars of net reinvestment; a ratio of 2.0 means adding 100 of revenue needs 50 of reinvestment. Asset-light software firms often exceed 2, capital-intensive businesses fall below 1. The ratio ties growth to the cash the firm must raise.

**Tax and loss carryforwards.** Early losses create net operating losses that shelter later profits, subject to statutory limits. Model them explicitly (accumulate, apply against taxable income until exhausted) rather than adding a lump sum.

### Funding, dilution and the survival constraint

A firm with negative free cash flow needs financing. Two consequences follow for valuation.

First, **enterprise value is not the same as the value of today's shares**. Enterprise value discounts all future cash flows including the negative ones, which implicitly assumes that the cash needed to fund the burn will be provided at a fair price. If the firm has to issue equity at a depressed valuation, or cannot raise money at all, the value to the current owners is different. In practice, valuation analysts handle this in two ways: by discounting the negative cash flows at the firm's cost of capital (assuming fair-priced financing), or by modelling explicit financing rounds and dilution. The first is simpler and defensible in the context of enterprise value; the second is essential for pricing a specific financing round.

Second, a **runway constraint** introduces a survival probability. If the firm has 24 months of cash and requires 48 months to reach cash break-even, it must raise capital at least once, and whether it can depends on progress milestones and market conditions. The probability of failure is partly endogenous: capital markets finance firms that demonstrate traction, and withhold it from those that do not. This is why unit economics (Section 3.4) are the key diagnostic: they predict whether additional growth spending will create or destroy value, and therefore whether new capital will be forthcoming.

### Cash-burn arithmetic

Three early-warning measures are runway (cash divided by monthly net burn), the burn multiple (net burn divided by net new recurring revenue; below about 1.5 is usually efficient for software, above 3 suggests expensive growth), and the gap between months to cash break-even and runway. They calibrate the sales-to-capital ratio and the survival probability.

### Relative valuation with negative earnings

Where there are no earnings, analysts use revenue or gross-profit multiples. These are fast but fragile, because a multiple embeds unstated assumptions about margin, growth and risk. Improve the comparison by using gross profit where gross margins differ, by regressing the multiple on growth and target margin across peers, and by using a forward multiple for a year in which the firm is expected to be profitable, discounted back and adjusted for the probability of getting there. The last is a compact DCF in which the exit multiple stands in for the terminal value, with the warnings of Section 3.6.

## 3.4 Unit Economics, Cohorts and Lifetime Value

Intangible-rich consumer and subscription businesses are best understood from the bottom up: a customer is an asset that costs money to acquire and yields a stream of contribution margin until the customer leaves. The aggregate firm is a collection of such assets.

### The basic metrics

```
ARPU      = average revenue per user per period
Gross margin (GM) = (Revenue − Cost of service) / Revenue
Churn (c)         = fraction of customers lost per period
Expected lifetime = 1 / c periods
LTV (undiscounted)= ARPU × GM / c
CAC       = (Sales and marketing spend) / (New customers acquired)
Payback   = CAC / (ARPU × GM)   (periods)
```

The ratio LTV/CAC is the standard summary. A rule of thumb in subscription software sets 3 as healthy and below 1 as value-destroying, but the rule hides three weaknesses that this section corrects: it ignores discounting, it assumes a constant churn rate, and it ignores the overhead that gross profit must also cover.

**Example 3.2 – Basic LTV and the effect of discounting.** A subscription service charges 60 per month. Cost of service is 25 percent of revenue, so gross margin is 75 percent. Monthly churn is 2 percent and the cost of acquiring a customer is 500. The annual discount rate is 10 percent, or 0.10/12 = 0.833 percent per month.

*Undiscounted lifetime.* 1 / 0.02 = 50 months.

*Monthly gross profit per customer.* 60 × 0.75 = 45.

*Undiscounted LTV.* 45 / 0.02 = 2,250.

*LTV/CAC.* 2,250 / 500 = 4.5.

*Payback.* 500 / 45 = 11.1 months.

*Discounted LTV.* A perpetuity of 45 per month, surviving with probability (1 − c) each month, is discounted at the combined rate. In the form LTV = m / (c + r), with m = 45 and r = 0.00833: LTV = 45 / (0.02 + 0.00833) = 45 / 0.02833 = 1,588.2. (This treats the first margin as arriving one period after acquisition and the survival-and-discount rate as c + r, a standard approximation for small rates.)

*Discounted LTV/CAC.* 1,588.2 / 500 = 3.18.

*Interpretation.* The headline ratio falls from 4.5 to 3.2 when discounting is included, a 29 percent reduction. In a business where customers last 50 months on average, the time value of money matters; for a high-churn business it matters less. Notice also that payback of 11 months means the firm's cash is tied up for almost a year per customer; faster growth increases the cash drain even though each customer is profitable. This is the arithmetic by which a firm with an excellent LTV/CAC can still run out of money: growth spending is paid up front, the gross profit comes later.

### Contribution, not gross margin

Gross margin is the wrong margin for a customer-level asset if serving the customer involves further variable costs (support, payment processing, onboarding); use **contribution margin**. Fixed overhead is excluded from LTV but must be covered by aggregate contribution, which is why a firm with healthy LTV/CAC can lose money until it reaches scale. The test has two parts: is each cohort worth more than it costs, and are there enough customers for aggregate contribution to exceed the fixed cost base?

### Cohort analysis

Churn is rarely constant: early churn is high and later churn low as survivors prove loyal, so constant-churn LTV usually understates value for loyal customers and overstates it for fragile ones. A **cohort model** tracks customers acquired in the same period and measures the fraction active each period. A reliable model has a measured retention curve (a plateau near 35 percent indicates a durable core; a curve sinking toward zero indicates a leaky product), revenue per surviving customer (net revenue retention above 100 percent means survivors' spending offsets churn), and allowance for cohort quality drift, since later cohorts are usually costlier and weaker than early ones.

**Example 3.3 – Cohort model of customer value.** A software firm acquires a cohort of customers at a cost of 700 per customer. In year 0 (the first year), the average customer pays 600 in revenue, growing 5 percent per year per surviving customer. The contribution margin is 70 percent. Retention (fraction of the original cohort still active in each year) is 100, 70, 55, 47, 42, 39, 37, 36, 35.5 and 35 percent for years 0 to 9. The discount rate is 12 percent, and we assume flows arrive on average at mid-year, so year t flow is discounted by (1.12)^(t + 0.5). We truncate the horizon at ten years (a conservative assumption; the retention plateau suggests value beyond that).

*Calculations for each year, per original customer.* Contribution = retention × revenue per survivor × 0.70.

| Year | Retention | Revenue per survivor | Contribution | Discount factor | PV |
|---|---|---|---|---|---|
| 0 | 1.000 | 600.0 | 420.0 | 0.9449 | 396.9 |
| 1 | 0.700 | 630.0 | 308.7 | 0.8436 | 260.4 |
| 2 | 0.550 | 661.5 | 254.7 | 0.7532 | 191.8 |
| 3 | 0.470 | 694.6 | 228.5 | 0.6725 | 153.7 |
| 4 | 0.420 | 729.3 | 214.4 | 0.6004 | 128.8 |
| 5 | 0.390 | 765.8 | 209.1 | 0.5361 | 112.1 |
| 6 | 0.370 | 804.1 | 208.3 | 0.4787 | 99.7 |
| 7 | 0.360 | 844.3 | 212.8 | 0.4274 | 90.9 |
| 8 | 0.355 | 886.5 | 220.3 | 0.3816 | 84.1 |
| 9 | 0.350 | 930.8 | 228.0 | 0.3407 | 77.7 |
| **Total** | | | | | **1,596.1** |

*Customer value.* PV of contribution = 1,596.1. Net of acquisition cost: 1,596.1 − 700 = 896.1 per customer. LTV/CAC = 1,596.1 / 700 = 2.28.

*Payback.* Cumulative undiscounted contribution is 420.0 after year 0 and 728.7 after year 1, so the 700 cost is recovered during year 1: payback is about 0.9 years into the second year (280 / 308.7 = 0.91), roughly 1.9 years from acquisition on a year-end convention.

*Contrast with a constant-churn shortcut.* The average annual churn over the first four years is high (30 percent in year 1), but only about 1 percent per year after year 7. A constant churn estimated from the first year (30 percent) would give a lifetime of 3.3 years and would understate value; one estimated from the plateau (about 1.4 percent) would give a lifetime of 71 years and badly overstate it. The cohort shows that neither is right, and it is a reminder that the shape of the curve is the model.

*Interpretation.* Each customer is worth about 1,596 in present-value contribution against an acquisition cost of 700, a surplus of 896 per customer. The firm should keep acquiring customers while marginal CAC stays below marginal LTV; if CAC climbs above about 1,596 growth destroys value. Because the retention plateau extends beyond year 9, the truncated sum omits some value from the 35 percent of customers who remain; leaving it out is a conservative choice.

### From unit economics to enterprise value

With a cohort model, value can be built bottom-up: forecast new customers (constrained by market size and rising CAC), apply retention and revenue-per-user curves to each cohort, add variable and fixed costs (fixed costs scale much more slowly than revenue), compute taxes, reinvestment and free cash flow, and discount with the terminal-value discipline of Section 3.6. The advantage over a top-down growth rate is that scenarios are defined by operating variables managers understand, and growth that creates value (high LTV/CAC) is separated from growth that merely consumes capital.

### Common errors in unit-economics work

Typical errors are survivorship bias in churn estimates, averaging across heterogeneous segments (enterprise customers may be hugely profitable and small customers unprofitable), using blended rather than marginal CAC as channels saturate, counting revenue rather than contribution, and omitting the cost of capital, so that an undiscounted LTV/CAC of 3 may hide an economic return near zero for a slow-payback business.

## 3.5 Scenario-Weighted DCF and the Probability of Failure

### Why a single forecast is biased

Suppose a firm will become worth 1,200 with 15 percent probability, 306 with 30 percent, 45 with 30 percent, and 10 (salvage) with 25 percent. A "base case" valuation might choose the 306 scenario because it is a central outcome; but the expected value is 288 and it contains a lottery component: the top scenario contributes 180 of the 288 total. A single forecast can be constructed to match the mean by judiciously mixing optimistic and pessimistic assumptions, but analysts rarely do so consistently, and they rarely disclose the implied probability of failure. Scenario weighting makes the distribution explicit.

### Constructing scenarios

Good scenario analysis follows five rules. First, scenarios are coherent stories, not independent sensitivities: in a breakout scenario growth, margin and reinvestment move together. Second, include a failure scenario with a salvage value; for young companies the probability of failure within five years is often 20 to 50 percent, anchored to base rates for the category and stage. Third, assign probabilities that sum to one and document them; a table without probabilities is a sensitivity analysis. Fourth, keep failure risk in the cash flows through the weights, not in the discount rate, which should reflect systematic risk only; inflating the rate double-counts and penalizes distant cash flows more than the early-concentrated failure risk. Fifth, check scenario values against market evidence: a breakout worth more than the largest comparable firm needs strong justification.

### Cash flows in a young firm: a worked structure

For each scenario, the forecast has the following structure, which we apply in Example 3.4:

```
Revenue(t)  = Revenue(t−1) × (1 + g(t))
EBIT(t)     = Revenue(t) × margin(t), margin gliding from the current to the target
Tax(t)      = max(0, EBIT − NOL used) × t
Reinvest(t) = (Revenue(t) − Revenue(t−1)) / (Sales-to-capital)
FCFF(t)     = EBIT − Tax − Reinvest
TV(10)      = NOPAT(11) × (1 − g / ROIC) / (WACC − g)
```

**Example 3.4 – Scenario-weighted DCF for a software start-up.** Brightline-style firm; amounts in millions. Current revenue is 100 and the operating margin is −30 percent. Sales-to-capital is 2.0 (each 1 of reinvestment supports 2 of incremental revenue), the tax rate is 25 percent with loss carryforwards applied, terminal growth is 3 percent, and the terminal WACC is 9 percent. The operating margin glides linearly from −30 percent to the target over ten years. The discount rate falls over time from 14 percent to 9 percent as the firm matures (the table of rates is cumulative: each year's factor compounds the year's rate). Four scenarios are modelled; the figures below were computed with a Python script, and the base case is shown in full.

*Base scenario inputs.* Growth path: 60, 45, 35, 28, 22, 17, 13, 9, 6, 4 percent. Target margin 20 percent. Terminal ROIC 15 percent. Discount rates by year: 14, 14, 14, 13, 13, 12, 11, 10, 9.5, 9 percent.

| Year | Revenue | Margin | EBIT | Tax | Reinvestment | FCFF | Cumulative discount factor |
|---|---|---|---|---|---|---|---|
| 1 | 160.0 | −25% | −40.0 | 0.0 | 30.0 | −70.0 | 1.140 |
| 2 | 232.0 | −20% | −46.4 | 0.0 | 36.0 | −82.4 | 1.300 |
| 3 | 313.2 | −15% | −47.0 | 0.0 | 40.6 | −87.6 | 1.482 |
| 4 | 400.9 | −10% | −40.1 | 0.0 | 43.9 | −83.9 | 1.674 |
| 5 | 489.1 | −5% | −24.5 | 0.0 | 44.1 | −68.5 | 1.892 |
| 6 | 572.2 | 0% | 0.0 | 0.0 | 41.6 | −41.6 | 2.119 |
| 7 | 646.6 | 5% | 32.3 | 0.0 | 37.2 | −4.9 | 2.352 |
| 8 | 704.8 | 10% | 70.5 | 0.0 | 29.1 | 41.4 | 2.587 |
| 9 | 747.1 | 15% | 112.1 | 4.2 | 21.1 | 86.7 | 2.833 |
| 10 | 777.0 | 20% | 155.4 | 38.9 | 14.9 | 101.6 | 3.088 |

Tax is zero through year 8 because the accumulated loss pool (about 198 after year 5) shelters profits in years 7 and 8 and most of year 9; the pool is exhausted in year 9, and tax of 4.2 is paid on the residual 17.0 of taxable income.

*PV of explicit FCFF.* Summing each FCFF divided by its cumulative factor gives −212.5.

*Terminal value.* NOPAT in year 11 = 777.0 × 1.03 × 0.20 × 0.75 = 120.0. Reinvestment rate = g / ROIC = 0.03 / 0.15 = 20 percent. TV = 120.0 × (1 − 0.20) / (0.09 − 0.03) = 96.0 / 0.06, which is 1,600.6 using unrounded inputs. Discounted by the year-10 cumulative factor 3.088: PV(TV) = 518.4.

*Base enterprise value.* −212.5 + 518.4 = 305.9.

The other scenarios were computed by the same method, with different growth paths, target margins, terminal returns and discount rates:

| Scenario | Probability | Target margin | Year-10 revenue | Terminal ROIC | PV explicit FCFF | PV terminal | Enterprise value |
|---|---|---|---|---|---|---|---|
| Failure | 25% | n/a | n/a | n/a | n/a | n/a | 10.0 (salvage) |
| Niche | 30% | 16% | 479.8 | 12% | −190.9 | 235.9 | 45.0 |
| Base | 30% | 20% | 777.0 | 15% | −212.5 | 518.4 | 305.9 |
| Breakout | 15% | 28% | 1,391.0 | 22% | −200.7 | 1,402.5 | 1,201.8 |

*Probability-weighted value.* 0.25 × 10 + 0.30 × 45.0 + 0.30 × 305.9 + 0.15 × 1,201.8 = 2.5 + 13.5 + 91.8 + 180.3 = **288.0**.

*Comparison.* The base case alone gives 305.9, 6 percent above the weighted value. Ignoring failure and renormalizing the surviving scenarios (dividing the three non-failure contributions, 285.5, by 0.75) gives 380.7, which overstates value by 32 percent relative to the properly weighted number. And 63 percent of the expected value (180.3 of 288.0) comes from the 15 percent breakout scenario.

*Interpretation.* The weighted value is lower than the base case, but not dramatically so, because the convex upside in the breakout scenario compensates for the high failure probability. Three points should be explicit in a valuation memo. First, the discount rate is the same in all scenarios (declining along the same path) because the failure risk is carried by the probabilities. Second, in every non-failure scenario the explicit-period cash flows are negative, and the terminal value is more than 100 percent of the enterprise value: in the base case, PV(TV) = 518.4 against an EV of 305.9, i.e. 169 percent. Third, the weights are judgment, and the analyst should show how the value changes with them. If the failure probability rises from 25 to 40 percent and the other three scenario probabilities are scaled down proportionally (each multiplied by 0.60/0.75 = 0.8), the weighted value falls to 0.40 × 10 + 0.8 × 285.5 = 232.4, a drop of 19 percent.

### Simulation: when scenarios are not enough

A discrete scenario set shows the structure but is a coarse representation of a continuous distribution. A **Monte Carlo simulation** draws each uncertain input (growth, margin, reinvestment, survival, terminal return) from a probability distribution, computes the value for each draw, and reports the distribution. It adds three things: a more complete picture of the distribution (percentiles, probability of loss); a way to capture correlations; and an honest accounting of how wide the uncertainty is. It adds one danger: spurious precision. The distributions are assumptions, and the simulation merely propagates them.

**Example 3.5 – Monte Carlo valuation of a young firm.** We model a firm with current revenue 100. Inputs are drawn independently as follows: survival over the horizon is Bernoulli with probability 0.75; the ten-year revenue CAGR is Normal with mean 17 percent and standard deviation 6 percent; the terminal operating margin is Triangular(8 percent, 18 percent, 30 percent) with mode 18 percent; terminal ROIC is Uniform(9 percent, 20 percent); the present value of interim cash burn is Uniform(−260, −150); the tax rate is 25 percent; the terminal growth rate is 3 percent; the terminal WACC is 9 percent, and the terminal value is discounted at 12 percent for ten years to reflect the blended rate over the horizon. Value is bounded below at a salvage of 10 (limited liability; failed firms are worth 10). The script, with a fixed seed so the result can be reproduced, is:

```python
import numpy as np
rng = np.random.default_rng(42)
N = 100000
surv = rng.random(N) < 0.75
cagr = rng.normal(.17, .06, N)
rev10 = 100 * (1 + cagr) ** 10
margin = rng.triangular(.08, .18, .30, N)
roic = rng.uniform(.09, .20, N)
g, w = .03, .09
nopat11 = rev10 * (1 + g) * margin * .75
tv = nopat11 * (1 - g / roic) / (w - g)
pvtv = tv / 1.12 ** 10
burn = -rng.uniform(150, 260, N)
val = np.where(surv, pvtv + burn, 10)
val = np.maximum(val, 10)
```

*Output (100,000 draws).* Mean value 110.7; median 15.3; 5th percentile 10.0; 25th percentile 10.0; 75th percentile 159.0; 95th percentile 446.0. The probability that value sits at the floor of 10 is 48.9 percent (25 percent from failure and about 24 percent of all draws from survivors whose terminal value does not cover the burn). The probability of a value above 500 is 3.7 percent and above 1,000 is 0.28 percent. The mean revenue after ten years is 540.8 and the median is 481.3.

*Interpretation.* The mean (110.7) is more than seven times the median (15.3), a signature of a highly skewed distribution. Neither the median nor the mean is "the value": the mean is the right expected value for a diversified investor, but an owner who holds a single position is exposed to a 49 percent chance of near-total loss. Venture investors build this skew into their return targets (Section 3.7). The simulation also shows how expensive the interim burn is: a survivor needs both strong growth and a decent terminal margin before its terminal value overtakes the cumulative burn. And the survival variable and the value are only moderately correlated (a correlation coefficient of 0.35 in the output), because survival alone does not guarantee that the firm is worth more than its salvage.

The two examples differ in design. Example 3.4 has a coherent story for each scenario and discloses all inputs; Example 3.5 has continuous distributions but treats inputs as independent, which understates the joint risk (in a real downturn, growth, margin and ROIC all fall together). A careful analysis uses both: scenarios for communication and stress-testing, simulation for the distribution, and correlations between key drivers.

### Real options

A young firm owns options to expand, pivot or abandon. The failure scenario (floored at salvage) and the breakout scenario already embed the abandonment and expansion options, so adding a separate option value on top double-counts unless it prices something the scenarios omit, such as a specific staged-investment decision.

## 3.6 Terminal Value Discipline

In Example 3.4 the terminal value was 169 percent of enterprise value. This is normal for young firms, and it should make the analyst nervous: the value is dominated by the assumptions about a state that may be a decade away. Terminal-value discipline means that each assumption is internally consistent, economically plausible and transparent.

### The value-driver formula

For a firm that grows at rate g forever and earns return on new capital ROIC, the reinvestment rate needed is g / ROIC. The terminal value is then:

```
TV(N) = NOPAT(N+1) × (1 − g / ROIC) / (WACC − g)
```

where NOPAT(N+1) = NOPAT(N) × (1 + g). Compare this with the simpler "growing perpetuity of NOPAT" that ignores reinvestment: TV = NOPAT(N+1) / (WACC − g). The simple version implicitly sets ROIC to infinity, so growth is free. The value-driver formula forces the analyst to say what the firm earns on the capital it adds.

Three limiting cases clarify the formula.

- If ROIC = WACC in the terminal period, then (1 − g / WACC) / (WACC − g) = 1 / WACC, and the terminal value is NOPAT(N+1) / WACC *regardless of g*. Growth adds nothing because each dollar invested earns only its cost of capital. This is the competitive-equilibrium assumption: in the long run, excess returns are competed away.
- If ROIC > WACC, growth adds value, and the value rises with g.
- If ROIC < WACC, growth destroys value, and the firm would be worth more by not growing.

**Example 3.6 – How terminal ROIC drives value.** A firm has NOPAT of 200 in year N. WACC is 9 percent and terminal growth is 4 percent. NOPAT in year N+1 is 200 × 1.04 = 208.

*No-reinvestment perpetuity (implicitly infinite ROIC).* TV = 208 / (0.09 − 0.04) = 208 / 0.05 = 4,160. TV/NOPAT(N) = 20.8.

*ROIC = 30 percent.* Reinvestment rate = 0.04 / 0.30 = 13.33 percent; payout = 86.67 percent. TV = 208 × 0.8667 / 0.05 = 180.27 / 0.05 = 3,605.3. Multiple of current NOPAT = 18.0.

*ROIC = 15 percent.* Reinvestment rate = 26.67 percent. TV = 208 × 0.7333 / 0.05 = 152.53 / 0.05 = 3,050.7. Multiple = 15.3.

*ROIC = WACC = 9 percent.* Reinvestment rate = 44.44 percent. TV = 208 × 0.5556 / 0.05 = 115.56 / 0.05 = 2,311.1. Check: NOPAT(N+1) / WACC = 208 / 0.09 = 2,311.1. Multiple = 11.6.

| Terminal assumption | Reinvestment rate | TV | TV / NOPAT(N) |
|---|---|---|---|
| No reinvestment | 0% | 4,160.0 | 20.8 |
| ROIC 30% | 13.3% | 3,605.3 | 18.0 |
| ROIC 15% | 26.7% | 3,050.7 | 15.3 |
| ROIC = WACC (9%) | 44.4% | 2,311.1 | 11.6 |

*Interpretation.* Moving from a naive perpetuity to the competitive-equilibrium assumption lowers the terminal value by 44 percent (4,160 to 2,311). Many published valuations of fast-growing firms effectively use the first row. The disciplined analyst picks the row that matches the firm's competitive position: ROIC = WACC for commodity-like businesses, a positive spread that fades for firms with durable advantages (brands, network effects, regulation). The difference between rows is the value of the competitive advantage in perpetuity, and the analyst should be able to defend it.

### Growth cap and the economy

Terminal growth cannot exceed the growth of the economy in which the firm operates; a practical cap is the risk-free rate or somewhat below it. Growth of 3 percent with 4 percent nominal rates is defensible, 7 percent is not. A ten-year fade should converge smoothly: "40 percent in year 10, 3 percent in year 11" places the terminal value where the firm is nowhere near steady state.

### Tests for terminal value

Apply these checks to every terminal value. (1) **Implied multiples:** convert TV to EV/NOPAT or EV/EBITDA and compare with mature firms; a terminal EV/NOPAT of 21 for a mature firm requires a very high ROIC or very low WACC. (2) **Terminal share of value:** above 100 percent, as in Example 3.4, the valuation is a bet on the end state, so lean on cross-checks. (3) **Implied market share:** terminal revenue of 777 is a 15 percent share of a 5,000 market but more than 50 percent of a 1,500 market. (4) **Terminal margin** should not exceed the best mature peers without a structural reason. (5) **Reinvestment consistency:** reinvestment must match growth and ROIC. (6) **Discount rate transition:** WACC should converge to a mature value, since the beta and cost of debt of a mature firm differ from those of a young one.

### Exit multiples versus perpetuity growth

Practitioners often estimate terminal value with an exit multiple of EBITDA or revenue. The method is easy to explain, and it embeds market pricing, but it imports the market's current sentiment into a value that is supposed to be fundamental, and it hides the growth, ROIC and WACC assumptions. A good practice is to compute both and reconcile: derive the growth rate implied by the exit multiple, and the multiple implied by the perpetuity formula. If the two differ widely, one of them is wrong. For example, an exit multiple of 25 times NOPAT with a WACC of 9 percent and a ROIC of 15 percent implies a growth rate that solves 25 = (1 + g)(1 − g / 0.15) / (0.09 − g), which is about 6.6 percent: not credible as a perpetual rate.

## 3.7 Startups and Platforms

### The venture capital method

Venture investors value a young company by working backward from an expected exit. The method has four steps: (1) estimate the exit value at the horizon (typically 4 to 7 years) using a multiple of the projected metric; (2) choose a target return (internal rate of return), which is high because it must cover the failures in the portfolio; (3) compute the required ownership at exit; (4) adjust for dilution from future funding rounds to determine the ownership needed today.

```
Required value at exit = Investment × (1 + target IRR)^years
Required ownership at exit = Required value / Exit value
Required ownership today   = Required ownership at exit / Retention
Post-money valuation = Investment / Required ownership today
```

where Retention is the fraction of today's ownership that remains after future dilutive rounds (the product of one minus each round's dilution).

**Example 3.7 – Venture capital method.** A venture fund considers investing 20 million. It projects revenue of 300 million in five years and expects an exit multiple of 4.0 times revenue, so the exit value is 1,200 million. The fund's target IRR is 50 percent. It expects two further financing rounds that will dilute existing holders by 20 percent and 15 percent respectively.

*Required value at exit.* 20 × (1.5)^5 = 20 × 7.59375 = 151.9 million.

*Required ownership at exit.* 151.9 / 1,200 = 12.66 percent.

*Retention.* (1 − 0.20) × (1 − 0.15) = 0.80 × 0.85 = 0.68.

*Required ownership today.* 12.66 / 0.68 = 18.6 percent.

*Post-money valuation.* 20 / 0.1861 = 107.5 million; the pre-money valuation is therefore 87.5 million.

*Sensitivity to the target IRR.* At a 30 percent IRR, the required value at exit is 20 × 1.3^5 = 74.3 million and required exit ownership 6.2 percent; at 70 percent it is 20 × 1.7^5 = 284.0 million and 23.7 percent. Without dilution adjustments, the post-money valuation at the 50 percent target would be 20 / 0.1266 = 158 million; ignoring dilution overstates value by roughly 47 percent.

*Interpretation.* The post-money price of 107.5 million is the value *at which the investor earns the target return if the projections materialize*. It is not a measure of intrinsic value: the target IRR of 50 percent is far above any plausible cost of capital because it must compensate for the many ventures that fail. Equivalently, if the success probability is 25 percent and failures return nothing, a 50 percent IRR on the success case (a 7.6 times money multiple) corresponds to an expected multiple of 0.25 × 7.59 = 1.90 and an expected annual return of about 13.7 percent, a figure much closer to a plausible cost of equity for risky assets. The venture method is therefore a pricing convention for negotiating equity splits, not a replacement for DCF. A sound use is to compute both: the DCF value (with explicit probabilities, as in Example 3.4) and the venture-method price, and compare. A large gap indicates either that the exit assumptions are inconsistent with the DCF story, or that the target IRR embeds a failure probability that is not in the forecast.

### Preferred stock and the capital structure

Startups issue preferred equity with liquidation preferences and anti-dilution protection, so common stock is not worth the post-money valuation divided by the share count. The standard approach is the **option-pricing method**: treat each class as a call option on enterprise value with strikes at the waterfall breakpoints, and price them with Black-Scholes (Volume 1, Chapter 18). For the same enterprise value, preferred is worth more per share than common, so using the preferred price for employee option grants overstates their value.

### Platforms and network effects

Platforms (marketplaces, payment networks, social networks) gain value as participants join, and conventional models mis-specify several features.

**Two-sided structure and take rate.** A marketplace needs both buyers and sellers and often subsidizes one side to attract the other, so unit economics must be built per side. Revenue equals take rate times gross merchandise value (GMV); the take rate is capped by the alternatives available to participants, and high rates invite competitors and disintermediation.

**Shape of growth.** Network effects imply a slow cold-start phase, rapid growth after a tipping point and then saturation. Metcalfe's observation that network value scales with the square of users is a stylized overstatement, since not all connections are equally valuable; a concave value-per-user function checked against observed retention is safer.

**Winner-take-most.** Strong network effects concentrate markets: the leader earns sustained excess returns, the follower little. This supports the scenario structure of Section 3.5, with the breakout scenario carrying much of the value, and it affects terminal ROIC, which may stay above WACC for long only if the analyst can say what stops competitors (data advantages, switching costs, high multi-homing costs) and models the fade. Where both sides multi-home cheaply, network effects are weak and take rates are pushed down. Include a regulatory scenario that constrains take rates or practices.

### Relative valuation for platforms

For listed or recently funded platforms the practical benchmarks are EV/GMV, EV/gross profit and EV/revenue, adjusted for growth. Compare on gross profit or contribution, because a marketplace reports net revenue while a reseller reports gross sales. A regression of the multiple on growth and margin across the peer set gives a fitted value, but it fits current market sentiment and is therefore a cross-check on the DCF rather than a substitute.

### Valuation when there is no revenue

For firms before revenue (a biotechnology company with an early-stage drug, a battery start-up with a prototype), the cash flows are nowhere to be found in the accounts, and the main unit of analysis is the **project pipeline**. The standard approach is the risk-adjusted net present value (rNPV): for each program, forecast the cash flows conditional on success, multiply by the cumulative probability of reaching each stage (industry phase-transition probabilities give a starting point), and discount at a cost of capital that reflects systematic risk only. As in the scenario method, technical risk goes into the probabilities and not into the discount rate. The sum across programs, less unallocated corporate costs, gives the value of the pipeline. This is a scenario-weighted DCF with a stage-gate structure.

## 3.8 Putting It Together

### A valuation workflow

1. **Diagnose accounting distortions**: capitalize R&D and other intangible spending, treat stock compensation as a cost, remove one-offs.
2. **Write the story** (market size, share, pricing power, competitive position) before the numbers.
3. **Model unit economics by cohort and segment**, and identify the operating drivers and their ranges.
4. **Forecast the path**: growth fading to a stable rate, margin converging to a target, reinvestment via sales-to-capital, NOL usage and funding needs.
5. **Define scenarios, including failure**, with probabilities; use one discount path that declines to the mature level.
6. **Discipline the terminal value** with the value-driver formula, implied multiples and market-share checks.
7. **Cross-check** against relative valuation and venture-method pricing, convert to value per share after options, preferred stock and dilution, and report the distribution and the three assumptions that matter most.

### Managerial implications

Founders and managers should track unit economics by cohort, spend on acquisition only while discounted marginal LTV/CAC is comfortably above 1, raise capital when the firm is strong, and communicate adjusted metrics (capitalized R&D, contribution margin, net revenue retention) so that the market prices economics rather than accounting. Investors and acquirers should avoid paying for the breakout scenario with certainty: milestone payments, earn-outs and staged investment make the price rise only if favorable states materialize. Boards of established firms should recognize that expensed R&D and marketing are capital allocation decisions that must clear the same hurdle rate as capital expenditure (Volume 1, Chapter 6).

## Case Study

*Illustrative case; Halcyon Health Technologies is fictional.*

Halcyon Health Technologies sells a subscription platform that helps independent medical clinics manage scheduling, billing and patient messaging. After six years it has 2,400 clinic customers and annual recurring revenue of 96 million, growing 48 percent. Gross margin is 71 percent. Reported operating loss is 22 million on 96 million of revenue: sales and marketing is 41 percent of revenue, R&D 27 percent and administration 14 percent. Cash is 64 million and net burn is 2.6 million a month. The company has a convertible note of 20 million outstanding and a pool of employee options equal to 11 percent of fully diluted shares. Stock compensation is 9 percent of revenue and is not included in the reported loss.

Halcyon's chief executive wants to raise 60 million at a pre-money valuation of 450 million, which is 4.7 times current revenue. The lead investor, Marlowe Partners, has offered 380 million. Both parties have pointed to a group of listed health-software firms that trade at 5 to 8 times revenue, but those firms are larger, are profitable, and grow at 15 to 25 percent.

The finance team has assembled the following cohort data. The average clinic costs 21,000 to acquire (blended; for clinics acquired through paid channels in the last four quarters it is 29,000). A new clinic pays 3,000 per month at the start. Annual logo retention across cohorts is 82 percent in year 1, then 90, 93 and 94 percent in later years. Net revenue retention among surviving clinics is 108 percent because they add modules. Variable cost of service and support is 29 percent of revenue, so contribution margin is 71 percent. R&D has grown from 11 million to 26 million over five years and engineers' work from early years still underlies the current product, which the chief technology officer says has a useful life of about five years before a major rebuild is needed.

Management's plan assumes growth fading from 48 percent to 5 percent over ten years, a long-run operating margin of 24 percent, a sales-to-capital ratio of 1.8 and a terminal growth rate of 3.5 percent. The CFO has also forecast a terminal return on capital of 28 percent "because that is what our best clinics earn," in a market where the main competitors are two private firms of similar size and a division of a large electronic-records vendor that is cutting prices. A board member points out that the plan assumes growth in clinic count of about 1,000 net new clinics a year, though the addressable base of independent clinics in the segment is roughly 30,000 and the firm's own win rate has fallen over the last three quarters.

The board has asked for a valuation that will support the financing negotiation, a view on whether the terms are fair, and a list of operating metrics that should be reported quarterly.

**Discussion questions**

1. Restate Halcyon's income and invested capital using a five-year capitalization of R&D, and explain which direction each adjustment moves and why stock compensation must be handled consistently with the share count. What data would you need to complete the calculation?
2. Using the cohort data, compute the discounted contribution per clinic over a ten-year life at a 12 percent discount rate, and compare it with blended CAC (21,000) and paid-channel CAC (29,000). What does the gap imply for the pace of growth spending?
3. Design a four-scenario valuation (failure, niche, base, breakout) with probabilities. Which inputs (growth, margin, terminal ROIC, probability of failure) would differ most across scenarios, and how would you justify the CFO's terminal ROIC of 28 percent against the competitive facts in the case?
4. Compute the venture-method price for Marlowe Partners at a 35 percent target IRR over five years with one further round diluting 15 percent. Is 380 million a fair pre-money value, and which terms (milestones, liquidation preference, tranching) would bridge the gap with the 450 million ask?

## Key Takeaways

- Negative earnings do not remove the need for fundamentals; they move the anchor from current earnings to a target state (revenue, margin, reinvestment) from which value is discounted back.
- Expensing R&D and customer acquisition understates operating income and invested capital; capitalizing them changes both, and adjusted ROIC is often lower than the headline figure.
- Unit economics should use contribution margin, discounting and cohort retention curves; the shape of the retention curve is the model, and fast payback matters as much as LTV/CAC for cash needs.
- A single base-case forecast is biased when failure is likely and payoffs are convex; scenario weighting with an explicit failure state makes the distribution visible.
- Failure risk belongs in the probabilities, not the discount rate; raising the discount rate to "reflect risk" while also weighting scenarios double-counts.
- Terminal value in a young firm often exceeds 100 percent of enterprise value, so the value-driver formula TV = NOPAT × (1 − g/ROIC) / (WACC − g) and tests of implied multiples and market share are essential.
- When terminal ROIC equals WACC, growth adds no value; assuming a high ROIC in perpetuity is a claim about durable competitive advantage that must be defended.
- Stock compensation is a real cost: deduct it from cash flow or model dilution, but never ignore both.
- The venture capital method prices an equity split to deliver a target return if projections hold; its high target IRR embeds failure risk and it is not a measure of intrinsic value.
- Platform value depends on take rates, network-effect durability and the chance of winning; report a distribution, not a point estimate, and name the assumptions that drive it.

## Review Questions

1. Why does an expensed-R&D income statement understate operating income for a firm with growing R&D, and when would the adjustment go the other way?
2. Why is it a mistake to add back R&D to EBIT without also adding the research asset to invested capital?
3. Explain the difference between LTV/CAC and discounted LTV/CAC, and give conditions under which the gap is large.
4. How does a cohort retention curve with a plateau change the interpretation of "average churn"?
5. Why is contribution margin, rather than gross margin, the right basis for customer lifetime value?
6. Explain why failure probability should be placed in scenario weights rather than in the discount rate.
7. In Example 3.4, why is the probability-weighted value close to the base case even though 25 percent of outcomes are failures?
8. What does the value-driver formula imply when ROIC equals WACC, and what economic assumption does that represent?
9. List three checks on a terminal value, and explain what each would reveal about an aggressive forecast.
10. Why can the venture capital method deliver a post-money valuation that differs sharply from a DCF value, and how should the difference be interpreted?

## Problems

1. **R&D capitalization.** A firm reports EBIT of 120 and invested capital of 700, with a 25 percent tax rate. R&D spending in years 0 to −4 is 90, 80, 70, 60 and 50 (year 0 is current). Amortize straight-line over four years, with spending beginning to amortize in the following year. Compute the research asset, current amortization, adjusted EBIT, adjusted invested capital and adjusted after-tax ROIC.
2. **Basic unit economics.** ARPU is 40 per month, gross margin 80 percent, monthly churn 3 percent and CAC 600. Compute undiscounted LTV, LTV/CAC and the payback period in months.
3. **Discounted LTV.** For the firm in Problem 2, use a monthly discount rate of 1 percent and the formula LTV = m / (c + r). Compute discounted LTV and LTV/CAC, and say whether growth creates value.
4. **Scenario weighting.** A start-up has four outcomes with values and probabilities of: failure 0 (30 percent), niche 60 (35 percent), base 260 (25 percent) and breakout 900 (10 percent). Compute the expected value, and the share of expected value contributed by the breakout case.
5. **Terminal value and ROIC.** NOPAT is 150 in year N, WACC is 10 percent and terminal growth is 3 percent. Compute the terminal value (a) ignoring reinvestment, (b) with ROIC of 15 percent and (c) with ROIC equal to WACC, and the multiple of year-N NOPAT in each case.
6. **Venture method.** A fund invests 15 at a target IRR of 40 percent over five years. The exit value is 900. Future rounds leave existing holders with 75 percent of their stake. Compute required ownership at exit, required ownership today and the post-money valuation.
7. **Cohort value.** A cohort retains 100, 60, 45 and 40 percent in years 0 to 3. Each surviving customer yields contribution of 300 per year (500 revenue at a 60 percent margin), received at the start of each year, and the discount rate is 10 percent. Compute the present value of contribution per original customer.
8. **Runway and dilution.** A firm has cash of 24 million and net burn of 3 million per month. It raises 36 million at a pre-money valuation of 120 million. Compute the runway before the raise and the ownership percentage sold in the round.

### Answers to Selected Problems

1. Research asset = 90 + 80 × 0.75 + 70 × 0.50 + 60 × 0.25 + 50 × 0 = 200. Amortization = (80 + 70 + 60 + 50) / 4 = 65. Adjusted EBIT = 120 + 90 − 65 = 145. Adjusted capital = 700 + 200 = 900. Adjusted ROIC = 145 × 0.75 / 900 = 12.1 percent (reported: 120 × 0.75 / 700 = 12.9 percent).
2. Monthly gross profit 32; LTV = 32 / 0.03 = 1,066.7; LTV/CAC = 1.78; payback = 600 / 32 = 18.75 months.
3. LTV = 32 / (0.03 + 0.01) = 800; LTV/CAC = 1.33. Growth creates value, but with a thin margin of safety and 19 months of payback; adverse changes in churn or CAC would reverse it.
4. EV = 0.35 × 60 + 0.25 × 260 + 0.10 × 900 = 21 + 65 + 90 = 176. The breakout contributes 90 / 176 = 51 percent.
5. (a) 150 × 1.03 / 0.07 = 2,207.1, multiple 14.7. (b) 154.5 × (1 − 0.03/0.15) / 0.07 = 154.5 × 0.8 / 0.07 = 1,765.7, multiple 11.8. (c) 154.5 × (1 − 0.3) / 0.07 = 1,545.0, equal to 154.5 / 0.10; multiple 10.3.
6. Required value at exit = 15 × 1.4^5 = 80.7; ownership at exit = 80.7 / 900 = 8.96 percent; today = 8.96 / 0.75 = 11.95 percent; post-money = 15 / 0.1195 = 125.5.
7. PV = 300 × (1 + 0.6/1.1 + 0.45/1.21 + 0.40/1.331) = 300 × 2.2179 = 665.4.
8. Runway = 24 / 3 = 8 months. Ownership sold = 36 / (120 + 36) = 23.1 percent.
