# Chapter 21: Corporate Strategy and Capital Allocation

## Learning Objectives

After studying this chapter you should be able to:

- Explain how strategy, financial performance and enterprise value are linked through the value-driver formula, and use it to show why growth creates value only when returns exceed the cost of capital.
- Calculate Economic Value Added (EVA), invested capital, ROIC and the ROIC–WACC spread from financial statements, including common accounting adjustments such as the capitalization of R&D.
- Evaluate growth-versus-return trade-offs quantitatively, and decompose ROIC into margin and capital-turnover drivers to identify the most valuable operating levers.
- Apply portfolio-management tools: divisional hurdle rates, sum-of-the-parts valuation, the conglomerate discount, and the "parenting advantage" test for whether a business is better off inside the corporation.
- Analyze how internal capital markets work, including their typical biases, and allocate scarce capital across competing projects when capital is rationed.
- Design a capital allocation framework and a set of KPIs and incentives that are tied to value creation yet resistant to manipulation and short-termism.

## Opening Vignette

*Illustrative scenario. Halden Industries is a fictional company; all figures are invented.*

Halden Industries is a diversified manufacturer with three divisions: Consumer Products, Industrial Components and a young Digital Services unit. Revenue has grown nine percent a year for six years and the board is proud of it. Earnings per share have grown too. Yet the share price has gone sideways for three years, and an activist investor has written a polite but pointed letter asking a single question: "Where does Halden earn its cost of capital, and where does it not?"

The CFO, Marguerite Okoye, realizes that nobody at the company can answer. Capital is allocated through an annual budget negotiation in which every division head asks for more than last year and receives roughly the same percentage increase as everyone else. All divisions are evaluated against a single corporate hurdle rate of nine percent. Bonuses are paid on divisional operating profit growth. Consumer Products, the most stable and least risky business, sits on cash and under-invests because its managers can hit their targets without trying. The Digital unit, the riskiest, is quietly approving projects that clear nine percent while actually earning less than its true cost of capital. Industrial Components has been acquiring smaller rivals at prices that make its reported profit grow but that dilute returns on the capital employed.

Okoye commissions a project with three aims: measure return on invested capital division by division against a risk-appropriate cost of capital; replace the budget negotiation with an explicit capital allocation framework; and redesign the bonus plan so that managers are paid for creating value rather than for growing profit. Within a quarter the analysis shows that one division is destroying value in every year of the data, that one is a modest creator, and that the best opportunity set lies in a division with the smallest budget. The remainder of this chapter develops the tools she used and the traps she had to avoid.

## 21.1 Strategy, Returns and Enterprise Value

### 21.1.1 What strategy means in financial terms

Strategy is a set of choices about where a company will compete and how it will win. Finance does not replace those choices, but it gives them a common language and a test. A strategy creates value if, and only if, it allows the firm to earn returns on the capital it deploys that exceed what investors could earn elsewhere on investments of comparable risk. All the sophisticated vocabulary of competitive advantage (scale, switching costs, network effects, brand, proprietary technology, regulation) is, in the end, an explanation of why a particular firm can earn a durable return above its cost of capital, and for how long.

This framing is useful because it disciplines two common failures. The first is the strategy that is attractive but uneconomic: a large and fast-growing market in which competition is so intense that nobody earns more than the cost of capital. Growth in such a market is a treadmill, not a source of value. The second is the strategy that is economically strong but starved of capital: a small business with excellent returns that is held back by an allocation process unable to recognize it. Capital allocation is the mechanism by which strategy meets resources, and it is where most corporate value is made or lost over a decade.

### 21.1.2 The value-driver formula

Volume 1, Chapter 21 valued an enterprise by discounting free cash flow. Here we exploit a particular algebraic form of that valuation, the *value-driver formula*, that exposes the economic logic. Free cash flow equals net operating profit after tax (NOPAT) less net investment:

```
FCF = NOPAT − Net Investment = NOPAT × (1 − g / ROIC)
```

The second equality holds in steady state because net investment equals the growth rate g times the invested capital base, and ROIC is NOPAT divided by invested capital; hence net investment = g × IC = g × NOPAT / ROIC. The reinvestment rate is therefore g / ROIC. If a firm grows at 4 percent and earns 16 percent on new capital, it must reinvest one quarter of NOPAT; if it earns only 8 percent on new capital, it must reinvest half.

Treat a constant-growth firm whose next-year NOPAT is NOPAT₁. Its enterprise value is

```
V₀ = NOPAT₁ × (1 − g / RONIC) / (WACC − g)
```

where RONIC is the return on *new* invested capital (the distinction between the return on existing capital and on incremental capital matters, and we return to it below). Three observations follow immediately.

First, value depends on three things only: the level of operating profit, the growth rate, and the return earned on new capital relative to the cost of capital. Everything else, from brand to supply chain, acts through these.

Second, if RONIC equals WACC the formula collapses to V₀ = NOPAT₁ / WACC: growth neither adds nor subtracts value. If RONIC exceeds WACC growth adds value; if RONIC is below WACC growth destroys it. This is the single most important idea in the chapter, and we will test it numerically in Section 21.3.

Third, the formula makes explicit why accounting growth is not value creation. Earnings per share can rise every year while value falls, as long as the firm is investing at returns below its cost of capital and financing it with retained earnings or cheap debt.

### 21.1.3 Value drivers and the strategic hierarchy

It is helpful to arrange the drivers in a hierarchy so that managers at different levels can see how their decisions connect to value.

| Level | Driver | Typical decisions |
|---|---|---|
| Corporate | WACC, portfolio mix, capital structure | Which businesses to own; financing; payout |
| Business unit | Growth, ROIC, spread vs. unit WACC | Market entry; pricing; M&A; capacity |
| Operating | Margin, capital turnover, working-capital days | Cost programs; asset utilization; inventory |
| Front line | Yield, uptime, cycle time, customer retention | Day-to-day execution |

The hierarchy encodes a principle of consistency: any measure used at a lower level should be traceable to value at the top, otherwise managers will optimize something that does not matter. We return to this in Section 21.7 on KPI design.

### 21.1.4 Competitive advantage and the fade of excess returns

A theoretical sticking point is that competition erodes excess returns. In a perfectly competitive market, ROIC converges to WACC and nobody creates value. The empirical regularity, which should be treated as a tendency rather than a law, is that high returns tend to fade toward the cost of capital over time, while very low returns tend to rise as weak competitors exit or restructure. This has a direct modeling consequence. A valuation that assumes today's spread persists forever with growth continuing indefinitely will systematically overvalue strong businesses. A more disciplined approach models an explicit forecast period in which the spread is sustained by identifiable advantages, followed by a terminal period in which RONIC fades toward WACC (in the limit, V = NOPAT / WACC at that point, ignoring growth).

> **Common mistake.** Assuming that a firm can earn 25 percent on new capital in perpetuity while growing faster than the economy. This is not a forecast; it is an assertion that the firm will eventually become larger than the economy it operates in. Always ask what supports the spread, and for how long.

## 21.2 Value-Based Management and Economic Value Added

### 21.2.1 The idea of value-based management

Value-based management (VBM) is a management system in which the objective of creating shareholder value, measured by the spread between returns and the cost of capital, drives strategy, planning, capital allocation, performance measurement and compensation. The word *system* is important. VBM is not a metric. Companies that adopt EVA or a similar measure merely as a reporting item, without changing the way capital is allocated and people are paid, typically find that nothing changes. VBM has four interlocking components:

1. **Strategy and objectives:** value creation is the stated goal, expressed as returns and growth by business.
2. **Processes:** planning, budgeting, capital approval and portfolio reviews are all conducted using value metrics and risk-adjusted hurdle rates.
3. **Measures:** a small set of consistent measures (ROIC, EVA, free cash flow) with clear definitions.
4. **Mindset and incentives:** managers understand the metrics and are rewarded on them.

### 21.2.2 Defining EVA

Economic Value Added is a residual-income measure. The trademark belongs to a consulting firm, and similar measures go by other names (economic profit, residual income, economic value added). The definition is simple:

```
EVA = NOPAT − WACC × Invested Capital
    = (ROIC − WACC) × Invested Capital
```

NOPAT is operating profit after taxes computed as if the firm had no debt: NOPAT = EBIT × (1 − tax rate), where the tax rate is the cash or operating tax rate on operating profit (see Chapter 22 for how to estimate it). Invested capital is the operating capital the firm has tied up: net working capital plus net fixed assets plus other operating assets, equivalently the sum of debt and equity (including debt-like items) less excess cash and non-operating assets. The capital charge, WACC × IC, is the dollar amount investors require in order to provide that capital.

EVA is the periodic counterpart of NPV. Indeed, a result that is both beautiful and practically important is that, with consistent definitions, the present value of all future EVA discounted at WACC plus current invested capital equals enterprise value:

```
Enterprise Value = Invested Capital₀ + Σ EVA_t / (1 + WACC)^t
```

The difference between market value and invested capital is called Market Value Added (MVA), and MVA equals the present value of expected future EVA. A firm's market value exceeds its invested capital only to the extent that investors expect it to earn positive EVA in the future. This reconciliation of a performance measure with a valuation technique is why EVA is attractive: it tells managers year by year whether they are creating the value implied by the stock price, while the DCF model delivers the same total in a single present value.

**Example 21.1 – Computing EVA and the spread.** Halden's Industrial Components division had the following figures last year (all in millions): revenue 2,400; EBIT 360; operating tax rate 25 percent; invested capital 2,000, financed with 1,200 of equity and 800 of debt at market values. The risk-free rate is 4.0 percent, the equity market risk premium 5.5 percent, the division's equity beta 1.10 and its pre-tax cost of debt 6.0 percent.

*Step 1 – NOPAT.* NOPAT = 360 × (1 − 0.25) = 270.

*Step 2 – ROIC.* ROIC = 270 / 2,000 = 13.5 percent.

*Step 3 – cost of equity.* Ke = 4.0% + 1.10 × 5.5% = 10.05%.

*Step 4 – after-tax cost of debt.* Kd(1 − t) = 6.0% × 0.75 = 4.50%.

*Step 5 – WACC.* Weights are 1,200/2,000 = 60% equity and 40% debt. WACC = 0.60 × 10.05% + 0.40 × 4.50% = 6.03% + 1.80% = 7.83%.

*Step 6 – spread and EVA.* Spread = 13.5% − 7.83% = 5.67 percentage points. Capital charge = 0.0783 × 2,000 = 156.6. EVA = 270 − 156.6 = 113.4. Cross-check: 0.0567 × 2,000 = 113.4. ✓.

*Interpretation.* The division generates 113.4 million of value over and above its capital charge. If this spread persisted and no growth were assumed, the MVA of the division would be 113.4 / 0.0783 ≈ 1,448 million, so enterprise value would be about 3,448 million against 2,000 of invested capital. The assumption of no growth with all NOPAT paid out is exactly what the perpetuity implies; the actual figure will differ once growth and fading spreads are modeled.

### 21.2.3 Why EVA is not the same as accounting profit

Net income deducts the cost of debt (interest) but not the cost of equity. A firm can report a handsome net income and still earn less than its total cost of capital. This is why companies with positive earnings can destroy value. EVA corrects this by charging for *all* capital. A second correction is the treatment of investment: expensed items that actually build long-lived assets (R&D, brand-building advertising, training) are treated as costs in accounting but can be treated as investments in a value-based view.

### 21.2.4 Adjustments to accounting numbers

Accounting rules are designed for creditors and general-purpose reporting, not for economic measurement. Practitioners of VBM make a limited number of adjustments, always weighing accuracy against complexity. Common candidates are:

- **Capitalizing R&D** and amortizing it over its useful life, so that the economic return on R&D programs is visible and so that managers are not rewarded for cutting R&D to lift current profit.
- **Operating leases:** treating leased assets as invested capital financed by lease liabilities. Under IFRS 16 this is built into the statements; under older US GAAP presentation analysts reconstructed it.
- **Goodwill:** including acquired goodwill in invested capital, at least for acquisition accountability, so that acquirers are evaluated on the return on what they *paid*, not just on the book value of acquired assets. Showing ROIC both with and without goodwill is a useful diagnostic.
- **Restructuring charges and one-offs:** treating recurring "non-recurring" items as operating costs.
- **Deferred taxes:** using cash operating taxes rather than the book provision, and treating the deferred tax liability as quasi-equity (see Chapter 22).
- **Excess cash and non-operating assets:** removing them from invested capital and their income from NOPAT.

The principle is to adjust only when the item is material and when the adjustment will change decisions. Fifteen adjustments will produce a measure that nobody understands and everyone distrusts.

**Example 21.2 – Capitalizing R&D.** A technology business reports EBIT of 300, a tax rate of 25 percent and invested capital of 1,500 (before any R&D adjustment). R&D spending over the past five years, oldest first, was 40, 45, 50, 55 and 60 (the 60 being the current year), all expensed. Management believes R&D has a five-year life and amortizes straight-line, with the first amortization charge in the year of spending. The WACC is 9 percent.

*Step 1 – current-year amortization.* Five vintages of R&D are each being amortized at one-fifth per year, so amortization = (40 + 45 + 50 + 55 + 60) / 5 = 250 / 5 = 50.

*Step 2 – adjusted EBIT.* Add back current R&D expense and deduct amortization: 300 + 60 − 50 = 310.

*Step 3 – adjusted NOPAT.* 310 × 0.75 = 232.5. (Unadjusted NOPAT is 300 × 0.75 = 225.)

*Step 4 – unamortized R&D asset at year-end.* The current vintage has four of five years remaining: 60 × 4/5 = 48. The prior year: 55 × 3/5 = 33. The next: 50 × 2/5 = 20. The next: 45 × 1/5 = 9. The oldest: 40 × 0 = 0. Total = 48 + 33 + 20 + 9 + 0 = 110.

*Step 5 – adjusted invested capital.* 1,500 + 110 = 1,610.

*Step 6 – ROIC and EVA.* Unadjusted ROIC = 225 / 1,500 = 15.0 percent; adjusted ROIC = 232.5 / 1,610 = 14.44 percent. Unadjusted EVA = 225 − 0.09 × 1,500 = 90.0; adjusted EVA = 232.5 − 0.09 × 1,610 = 232.5 − 144.9 = 87.6.

*Interpretation.* Because R&D is growing, capitalizing it raises profit and capital, but capital rises proportionally more, so ROIC falls slightly. The more important effect is behavioral: under the unadjusted measure a manager could raise this year's EVA by 60 × 0.75 = 45 simply by eliminating R&D, whereas under the adjusted measure the saving is 60 × 0.75 less the capital charge and amortization path, and the cut shows up as a smaller asset base only slowly. The adjustment reduces the reward for harvesting the future.

### 21.2.5 EVA versus alternative measures

Several measures compete with EVA, and each has strengths. Cash flow return on investment (CFROI) uses gross cash flows relative to gross investment, which reduces the distortions from depreciation policy; it is more complex to compute. Total shareholder return (TSR) is the ultimate outcome measure but is dominated by market sentiment over short horizons and is unsuitable below the corporate level. Return on equity is easily manipulated by leverage and buybacks. Free cash flow ignores investment quality: a firm can maximize this year's cash flow by cutting growth investment. EVA's strengths are that it charges for all capital, is conceptually tied to NPV, and can be computed for any unit with a defined capital base. Its weaknesses are historical-cost distortions (old assets, heavily depreciated, flatter ROIC and make new investment look unattractive) and a bias toward short-term harvesting if not paired with forward-looking measures.

> **Managerial implication.** The "old assets" problem is real. A division with a fully depreciated plant shows a very high ROIC, and its manager will resist replacing the plant because the new asset will cut ROIC even though the replacement has a positive NPV. Where this matters, evaluate investment proposals on NPV or IRR rather than on the first-year ROIC, and use measures such as EVA with a sinking-fund depreciation schedule that mimics economic depreciation.

## 21.3 The ROIC–WACC Spread: Growth versus Return

### 21.3.1 Why growth is not automatically good

Executives are surrounded by pressure to grow: analysts ask about the top line, compensation plans reward revenue and profit growth, and bigger firms enjoy prestige. The value-driver formula shows that growth is a *multiplier on the spread*. When the spread is positive, more growth means more value; when it is zero, growth is irrelevant; when it is negative, growth is destructive, and the faster the firm grows the faster it destroys value.

The intuition is that growth requires capital. A firm that grows NOPAT by one dollar must invest 1/RONIC dollars to do so. That dollar of investment is worth a dollar only if the firm earns exactly its cost of capital on it. Investing at a return above WACC makes the dollar worth more than a dollar; investing at a lower return makes it worth less. The value of a unit of growth is thus approximately proportional to (RONIC − WACC) / WACC per dollar of capital invested.

**Example 21.3 – The value of growth at different returns.** A business will earn NOPAT₁ of 100 next year. WACC is 9 percent. We compute enterprise value for four values of RONIC and three growth rates using V₀ = NOPAT₁ × (1 − g / RONIC) / (WACC − g).

*Zero growth (g = 0):* V₀ = 100 / 0.09 = 1,111.1 for every RONIC (no investment is required).

*Growth of 3 percent:*
- RONIC = 5%: 100 × (1 − 0.03/0.05) / 0.06 = 100 × 0.40 / 0.06 = 666.7.
- RONIC = 9%: 100 × (1 − 0.3333) / 0.06 = 100 × 0.6667 / 0.06 = 1,111.1.
- RONIC = 15%: 100 × (1 − 0.20) / 0.06 = 1,333.3.
- RONIC = 25%: 100 × (1 − 0.12) / 0.06 = 1,466.7.

*Growth of 6 percent:*
- RONIC = 5%: 100 × (1 − 1.20) / 0.03 = −666.7 (the firm would need to reinvest more than 100 percent of NOPAT; free cash flow is negative forever and the formula says value is negative, a warning that the plan is infeasible or absurd).
- RONIC = 9%: 100 × (1 − 0.6667) / 0.03 = 1,111.1.
- RONIC = 15%: 100 × (1 − 0.40) / 0.03 = 2,000.0.
- RONIC = 25%: 100 × (1 − 0.24) / 0.03 = 2,533.3.

| RONIC | g = 0% | g = 3% | g = 6% |
|---|---|---|---|
| 5% | 1,111.1 | 666.7 | −666.7 |
| 9% | 1,111.1 | 1,111.1 | 1,111.1 |
| 15% | 1,111.1 | 1,333.3 | 2,000.0 |
| 25% | 1,111.1 | 1,466.7 | 2,533.3 |

*Interpretation.* Read down a column to see that higher returns always help; read across a row to see the role of growth. The 9 percent row is flat at 1,111.1: when RONIC equals WACC, growth is value-neutral. In the 5 percent row, growth reduces value from 1,111.1 to 666.7 at 3 percent growth. The value of growth at RONIC = 15 percent and g = 3 percent is 1,333.3 − 1,111.1 = 222.2, or 20 percent of the no-growth value. In the 25 percent row, doubling growth from 3 to 6 percent quadruples the premium over no-growth value, from 355.6 to 1,422.2, because the capital charge on each dollar of growth is small relative to its return.

> **Common mistake.** Treating the formula as a recipe: "grow at 6 percent at a 25 percent return." Growth at high returns requires opportunities, and opportunities at high returns are finite. The table is a map of sensitivities, not a menu of options.

### 21.3.2 Returns on existing versus incremental capital

A firm's average ROIC mixes returns on old capital (earned from past investments, possibly protected by a durable advantage) with returns on new capital. Valuation of growth turns on RONIC, not on average ROIC. A firm with a historic ROIC of 30 percent due to a legacy brand may have a RONIC of only 8 percent on its attempts to expand into adjacent categories. Treating 30 percent as the return on the next dollar will give an inflated valuation and justify misguided investment. Managers should therefore estimate RONIC separately by opportunity, by asking "What would a new entrant earn if it made the same investment?" The honest answer is often close to WACC.

Equally important, high average ROIC can be a sign of *under-investment* when opportunity exists. If a division earns 30 percent on its capital and has projects available at 25 percent, it should invest more. If the division is rewarded for ROIC alone, its manager will reject the 25 percent project because it lowers the average. This is an example of a point we revisit in the section on KPI design: a ratio measure encourages managers to stop investing when the marginal return falls to the average, not to the cost of capital; a dollar measure such as EVA encourages investment as long as the marginal return exceeds WACC.

### 21.3.3 Decomposing ROIC: margin and capital turnover

ROIC is the product of operating margin after tax and capital turnover:

```
ROIC = NOPAT / IC = (NOPAT / Revenue) × (Revenue / IC)
```

The decomposition is the starting point for operational value creation. Capital turnover can be further broken down into working-capital days and fixed-asset intensity. Industries differ greatly in how they achieve a given ROIC: a grocer earns a modest margin and turns capital many times; a luxury goods firm earns a wide margin and turns capital slowly. It is the combination that matters. Within an industry, differences in either factor identify competitive position.

**Example 21.4 – ROIC tree and operational levers.** A division has revenue of 1,000, EBIT margin of 12 percent, tax rate of 25 percent and invested capital of 666.7 (so that turnover is 1.5×). WACC is 9 percent.

*Step 1 – base ROIC.* NOPAT = 1,000 × 0.12 × 0.75 = 90. ROIC = 90 / 666.7 = 13.5 percent. Via the tree: 0.12 × 0.75 × 1.5 = 0.135 ✓. EVA = 90 − 0.09 × 666.7 = 90 − 60 = 30.

*Step 2 – Lever A: lift EBIT margin by one percentage point to 13 percent.* NOPAT = 1,000 × 0.13 × 0.75 = 97.5; ROIC = 97.5 / 666.7 = 14.625 percent; EVA = 97.5 − 60 = 37.5, an increase of 7.5.

*Step 3 – Lever B: raise capital turnover from 1.5 to 1.6 (reduce invested capital to 625).* NOPAT is unchanged at 90; ROIC = 90 / 625 = 14.4 percent; capital charge = 0.09 × 625 = 56.25; EVA = 90 − 56.25 = 33.75, an increase of 3.75.

*Interpretation.* A one-point margin improvement is worth twice as much EVA (7.5 versus 3.75) as a 0.1× turnover gain in this case. But the right question is feasibility and cost: trimming 41.7 of invested capital through tighter inventory management may be much easier than finding 1 percent of margin. The tree gives managers a common language; the dollar EVA effect tells them what each lever is worth so that they can compare it with its cost. It also warns that levers interact: pushing turnover by cutting capacity can later cost margin.

### 21.3.4 When the spread is negative: the discipline of not growing

The corollary of the spread logic is that businesses with RONIC below WACC should not grow and should consider returning capital. This is counterintuitive for managers rewarded on growth, and boards sometimes need to impose it.

**Example 21.5 – Reinvesting at a sub-WACC return.** A mature business earns NOPAT₁ of 100 and could either pay out all of it or reinvest part at a RONIC of 8 percent. WACC is 9 percent.

*Pay out everything (reinvestment rate 0, g = 0):* V = 100 / 0.09 = 1,111.1.

*Reinvest 25 percent of NOPAT:* g = 0.25 × 0.08 = 2.0 percent. V = 100 × (1 − 0.25) / (0.09 − 0.02) = 75 / 0.07 = 1,071.4.

*Reinvest 50 percent of NOPAT:* g = 0.50 × 0.08 = 4.0 percent. V = 100 × 0.50 / (0.09 − 0.04) = 50 / 0.05 = 1,000.0.

*Interpretation.* Reinvesting the first quarter of NOPAT at 8 percent costs shareholders 39.7 of value (1,111.1 − 1,071.4); reinvesting the second quarter costs a further 71.4, even though reported profit growth rises from zero to 2 percent to 4 percent. A board that applauds "growth" in this business is applauding value destruction. The remedy is to pay out the cash through dividends or buybacks (Volume 1, on payout policy), provided the firm has no better use, or to fix returns through restructuring. This is also why a high payout can be consistent with value maximization: for a firm without positive-spread opportunities, payout *is* the value-maximizing policy.

### 21.3.5 Strategic positions on the growth–return map

A simple two-by-two of growth against spread is a useful classification, but the quadrant labels need careful interpretation.

| Quadrant | Characteristics | Value-maximizing stance |
|---|---|---|
| High spread, high growth opportunities | Strong franchise with room to expand | Invest aggressively; accept lower payout; protect advantage |
| High spread, low growth | Cash cow with a moat but a saturated market | Maximize cash generation; look for adjacent RONIC > WACC; pay out surplus |
| Low spread, high growth | Capital-hungry growth chasing share | Test whether scale will raise RONIC; otherwise slow growth or exit |
| Low or negative spread, low growth | Value trap | Fix returns (cost, pricing, capital cuts), sell, or liquidate |

The most important decisions concern the transitions: whether a low-spread growth business can become a high-spread one as it scales (this requires an evidence-based theory, such as falling unit costs or network effects), and when a high-spread cash cow's excess cash should leave the firm rather than be redeployed in the low-spread quadrants. The second transition is the hardest, because the cash cow's managers have the power in the budget meeting.

## 21.4 Portfolio Management and the Role of the Corporate Parent

### 21.4.1 Why own a portfolio at all?

The theoretical case for a diversified corporation is surprisingly weak. Shareholders can diversify themselves at low cost, so diversification *per se* creates no value (this is a corollary of the Modigliani–Miller logic and the CAPM, Volume 1, Chapters 10 and 15). The corporation can add value only through advantages that individual shareholders cannot replicate:

- **Better governance and control** of the business than the market would exercise (monitoring, replacement of weak managers, active strategy).
- **Shared resources:** economies of scope in brand, distribution, technology or purchasing.
- **Internal capital markets:** cheaper and better-informed allocation of capital than external markets provide, particularly when external financing is costly or information is asymmetric.
- **Tax and financing advantages:** the debt capacity of a combined entity or use of losses in one unit against profits in another (Chapter 22).
- **Competencies in specific activities,** such as acquisition integration or operational improvement, that the parent can apply across units.

Against these benefits are well-known costs: corporate overhead, cross-subsidization of poor performers, slower decision-making, managerial empire-building, and the conglomerate discount that investors often apply to complex diversified firms. The empirical evidence on that discount is mixed and sensitive to methodology, so it would be wrong to treat it as a law, but its persistent appearance in practice is a prompt for managers to demonstrate benefits explicitly.

### 21.4.2 Divisional hurdle rates

Using one corporate cost of capital for all divisions is among the most expensive mistakes in corporate finance. Risk differs across businesses, and WACC should reflect the risk of the *asset* being financed, not of the company that owns it (Volume 1, Chapter 11). A single hurdle rate leads to systematic bias: low-risk divisions look less attractive than they truly are relative to their cost of capital, while high-risk divisions look attractive and receive too much capital.

**Example 21.6 – Divisional WACC and EVA.** Halden's divisions have the following data (millions). The risk-free rate is 4.0 percent, the market risk premium 5.5 percent, the tax rate 25 percent and the pre-tax cost of debt 6.0 percent for all divisions. Betas are asset (unlevered) betas of comparable pure-play firms; target debt-to-capital ratios reflect each division's debt capacity.

| Division | NOPAT | Invested capital | Asset beta | Target D/V |
|---|---|---|---|---|
| Consumer Products | 90 | 800 | 0.70 | 25% |
| Industrial Components | 60 | 700 | 1.00 | 35% |
| Digital Services | 40 | 300 | 1.50 | 15% |

*Step 1 – relever betas.* Equity beta = βA × [1 + (1 − t) × D/E]. D/E = (D/V)/(1 − D/V).
- Consumer: D/E = 0.25/0.75 = 0.3333; βE = 0.70 × (1 + 0.75 × 0.3333) = 0.70 × 1.25 = 0.875.
- Industrial: D/E = 0.35/0.65 = 0.5385; βE = 1.00 × (1 + 0.75 × 0.5385) = 1.4038.
- Digital: D/E = 0.15/0.85 = 0.1765; βE = 1.50 × (1 + 0.75 × 0.1765) = 1.6985.

*Step 2 – cost of equity.* Ke = 4.0% + βE × 5.5%: Consumer 8.81 percent; Industrial 11.72 percent; Digital 13.34 percent.

*Step 3 – WACC.* After-tax cost of debt 4.5 percent. Consumer: 0.75 × 8.81% + 0.25 × 4.5% = 6.609% + 1.125% = 7.73 percent. Industrial: 0.65 × 11.72% + 0.35 × 4.5% = 7.619% + 1.575% = 9.19 percent. Digital: 0.85 × 13.34% + 0.15 × 4.5% = 11.340% + 0.675% = 12.02 percent.

*Step 4 – ROIC, spread and EVA.*

| Division | ROIC | WACC | Spread | EVA at own WACC | EVA at flat 9% |
|---|---|---|---|---|---|
| Consumer | 11.25% | 7.73% | +3.52 pts | +28.1 | +18.0 |
| Industrial | 8.57% | 9.19% | −0.62 pts | −4.4 | −3.0 |
| Digital | 13.33% | 12.02% | +1.32 pts | +4.0 | +13.0 |

*Interpretation.* Under the flat 9 percent hurdle, Digital looks like the star (EVA of 13.0 on a capital base of only 300, against 18.0 for Consumer on 800), and Consumer is undervalued. With risk-appropriate rates Consumer's creation of value is 28.1, over seven times Digital's, and Digital's spread is only 1.3 points: a thin cushion for an unstable business. Industrial is a modest destroyer under both tests, but the flat rate understates the shortfall. A project-level illustration: a Digital project with an IRR of 11 percent is accepted under the flat 9 percent hurdle (a perpetual 100 investment returning 11 per year has an apparent NPV of +22.2 at 9 percent) but should be rejected at 12.02 percent (NPV ≈ −8.5). A Consumer project with an IRR of 8.5 percent is rejected at 9 percent (NPV ≈ −5.6) but is value-creating at 7.73 percent (NPV ≈ +10.0). The flat rate systematically moves capital from the safe to the risky.

> **Practical note.** Divisional betas should come from pure-play comparables, de-levered and re-levered at target structures. The alternative of using the company's own divisional historical betas is unreliable because there are no traded equity prices for divisions. And be explicit about what a hurdle rate is not: it is not a place to hide strategic preferences. If the firm wants to invest in a strategically important area at a return below the risk-adjusted hurdle, say so and treat the shortfall as an explicit subsidy.

### 21.4.3 Sum-of-the-parts valuation and the conglomerate discount

A sum-of-the-parts (SOTP) valuation values each division at its own cost of capital, with its own growth and returns, and sums the results. Comparing the SOTP with the market's valuation of the whole indicates whether the market is applying a discount (or premium) and whether breaking up the firm could release value. The discount may reflect real corporate costs or poor allocation, or it may reflect nothing but the market's skepticism about opacity.

**Example 21.7 – SOTP for Halden.** Using the WACCs from Example 21.6 and the value-driver formula, assume the following next-year NOPAT, growth and RONIC (all illustrative).

| Division | NOPAT₁ | g | RONIC | WACC |
|---|---|---|---|---|
| Consumer | 90 | 3.0% | 11.5% | 7.73% |
| Industrial | 60 | 2.0% | 8.57% | 9.19% |
| Digital | 40 | 6.0% | 14.0% | 12.02% |

*Consumer:* V = 90 × (1 − 0.03/0.115) / (0.0773 − 0.03) = 90 × (1 − 0.2609) / 0.0473 = 90 × 0.7391 / 0.0473 ≈ 1,406.4.

*Industrial:* V = 60 × (1 − 0.02/0.0857) / (0.0919 − 0.02) = 60 × (1 − 0.2334) / 0.0719 = 60 × 0.7666 / 0.0719 ≈ 639.7. (Note that this is below the no-growth value 60/0.0919 = 652.9, because growth at RONIC < WACC destroys value.)

*Digital:* V = 40 × (1 − 0.06/0.14) / (0.1202 − 0.06) = 40 × (1 − 0.4286) / 0.0602 = 40 × 0.5714 / 0.0602 ≈ 379.7.

*Sum of the parts:* 1,406.4 + 639.7 + 379.7 = 2,425.8.

Suppose the market currently values Halden's operations (enterprise value) at 2,100. The implied conglomerate discount is (2,425.8 − 2,100) / 2,425.8 = 13.4 percent.

*Interpretation.* A 13 percent gap does not by itself justify a break-up. The questions are: how much of it reflects corporate overhead (which could be reduced), how much reflects cross-subsidization (which could be stopped), how much reflects investors' difficulty in valuing a complex firm, and how much would reappear as standalone costs, dis-synergies and tax leakage on separation? A fair test is to compare the discount with a realistic estimate of the value of separation after those costs. Also note the sensitivity: Industrial's value depends heavily on whether it can lift RONIC above 9.19 percent. If a restructuring raised its RONIC to 12 percent, with the same 2 percent growth, its value would rise to 60 × (1 − 0.02/0.12) / 0.0719 = 60 × 0.8333 / 0.0719 ≈ 695.4, an increase of about 56. The fix is worth more than a dispute over the discount.

### 21.4.4 The parenting-advantage test

A useful test for each business in the portfolio is the *parenting advantage* test: is this business worth more under our ownership than under the best alternative owner? The answer should come from specific, observable sources of benefit (shared procurement savings, distribution access, technology, management capability) net of costs the parent imposes (overhead, constraints, bureaucracy, inappropriate hurdle rates). Businesses that fail the test are candidates for sale, spin-off or carve-out. Businesses that pass but earn below WACC are candidates for restructuring. Businesses that pass and earn above WACC are the core.

A related point is that the best owner may pay more than the current owner's valuation. Divestiture proceeds are an under-appreciated source of capital, and a disciplined parent regularly sells businesses that are worth more to someone else, not only those that are failing. In terms of the portfolio matrix, the question that matters is not "is this a good business?" but "are we the best owners of it?"

## 21.5 Internal Capital Markets

### 21.5.1 How internal capital markets work

In a multi-business firm, the corporate center acts as a financial intermediary: it collects cash generated by some units and allocates it to others, through the budget, the capital-expenditure approval process and the setting of targets. The center can in principle do what the external market cannot. It sees detailed operating information, can monitor and intervene, and is not subject to the information asymmetries that make external equity expensive for a firm with private knowledge of its prospects. These advantages are most valuable when external capital is expensive or unavailable, for example in countries with underdeveloped markets or for unlisted subsidiaries with limited access to credit.

The theory of "winner picking" says that an efficient internal market takes capital away from low-return units and gives it to high-return units, more aggressively than an external market would. The firm's cash flows are thus fungible across divisions, and the center's discretion is a source of value.

### 21.5.2 Typical distortions

Observation of actual corporate behavior suggests that internal markets often fall short of this ideal. The documented patterns, which should be treated as tendencies, include:

- **Socialist or "spreading-thin" allocation:** capital is distributed relatively evenly across divisions regardless of opportunity, because of negotiation dynamics, fairness norms or the political power of division heads. High-opportunity units are under-funded; low-opportunity units are over-funded.
- **Cross-subsidization:** cash flow from strong units subsidizes weak ones, delaying restructuring or exit.
- **Influence activities:** managers spend time and distort information to lobby for capital, and the center may favor those with best access rather than best projects.
- **Optimistic bias and strategic misrepresentation:** division managers overstate benefits and understate risks of projects they want funded, because their reward depends on the size of their empire or because rejection is costly.
- **Anchoring on last year's budget:** incremental budgeting makes the allocation a function of history, not opportunity.
- **Hurdle-rate distortion:** the flat-rate problem of Section 21.4.2.

The corrective measures follow from the diagnosis: use risk-adjusted divisional hurdle rates; separate the *information-gathering* role from the *advocacy* role, for example through independent project review by a corporate planning group; require explicit strategic rationale and a post-audit; and tie compensation to value rather than to the size of the capital budget (Section 21.7).

### 21.5.3 Capital rationing

When capital is limited, whether because of a hard budget set by the board, a debt covenant or an internal limit, the NPV rule must be adapted. The correct objective is to maximize total NPV subject to the budget. Ranking by profitability index (PI = NPV / initial investment) is a good heuristic, but because projects are indivisible it does not always select the optimal set, and ranking by IRR is worse because IRR ignores scale.

**Example 21.8 – Allocating a capital budget.** Halden's capital committee has six candidate projects (millions). Present values are of future cash flows discounted at risk-appropriate rates, so NPV = PV − investment.

| Project | Investment | PV of cash flows | NPV | PI |
|---|---|---|---|---|
| B | 30 | 48 | 18 | 0.60 |
| E | 20 | 32 | 12 | 0.60 |
| A | 50 | 70 | 20 | 0.40 |
| C | 80 | 100 | 20 | 0.25 |
| F | 60 | 66 | 6 | 0.10 |
| D | 40 | 41 | 1 | 0.025 |

The projects are indivisible. The budget is 150.

*Step 1 – PI ranking.* Order: B, E, A, C, F, D (as in the table). Adding in order: B (30) + E (20) + A (50) = 100 invested, NPV = 18 + 12 + 20 = 50. Next is C, which needs 80 but only 50 remains; skip. F needs 60; skip. D needs 40 and fits: total investment 140, NPV = 50 + 1 = 51. Unused budget: 10.

*Step 2 – exhaustive search.* There are 2⁶ = 64 combinations; enumerating those that fit within 150 shows that the best is A + C + E, with investment 50 + 80 + 20 = 150 and NPV = 20 + 20 + 12 = 52.

*Step 3 – compare.* The PI-ranking heuristic delivers 51 versus the optimum of 52. The difference is small here, but the *composition* is quite different: the heuristic funds B and D and not C, while the optimum funds C and not B or D.

*Interpretation.* Two lessons. First, when projects are lumpy, the heuristic can leave capital idle and lose value; the loss can be larger with other data. Second, the shadow price of capital is important: if the committee could raise the budget by 20 to 170, what would be gained? With budget 170 the best set is A + B + C with NPV 58 (investment 160), an increase of 6 for 20 more capital: a marginal return on the extra capital of 30 percent in NPV terms. A capital budget that is too tight is itself a source of lost value, and a rationing constraint should be justified by something real (financing market access, execution capacity, or risk appetite), not by habit. If the constraint is "soft" (imposed by management for discipline) the right response may be to raise the budget and test whether the projects at the margin still create value.

## 21.6 Capital Allocation Frameworks

### 21.6.1 The order of priorities

A capital allocation framework is a ranked, explicit set of principles for using the firm's cash flow and borrowing capacity. A defensible hierarchy, adapted to the particular firm, runs as follows:

1. **Maintain the franchise:** fund the capital expenditure and working capital needed to sustain existing advantaged businesses. This spending is often non-discretionary and should be tested for whether it truly sustains returns.
2. **Invest in organic growth with RONIC > WACC:** projects in the existing portfolio where the spread is positive and defensible.
3. **Acquire selectively:** M&A where the return on the full price paid, including synergies that the buyer can actually capture, exceeds WACC.
4. **Maintain the target capital structure and financial flexibility:** keep a balance sheet consistent with the firm's debt capacity (Volume 1, Chapter 15).
5. **Return surplus cash to shareholders:** dividends for the stable component and repurchases for the variable component (Volume 1, on payout policy).

The point of the hierarchy is that payout is the residual after value-creating investment, rather than an entitlement or a target in itself, and that each use competes on the same measure, the spread over the risk-adjusted cost of capital. The framework should also state what the firm will *not* do: for example, no acquisitions outside defined core adjacencies, no growth projects below the divisional hurdle, no buybacks financed with debt that would take leverage beyond the target.

### 21.6.2 Buyback versus reinvestment

Share repurchases are a legitimate use of capital when the firm has no better alternative, but they are often used as a tool to boost EPS. The relevant comparison is the expected return on repurchased shares, which is the cost of equity if the shares are fairly priced, against the return from alternatives. A buyback of fairly priced shares has an NPV of zero for continuing shareholders; it creates value only if the shares are undervalued, if it sends a credible signal, or if it moves the firm toward a more efficient capital structure. Buying back overvalued shares transfers value to those who sell. Boards therefore should require an explicit view of intrinsic value before authorizing repurchases, and treat the decision as an investment with a stated expected return.

### 21.6.3 Stage-gating and real options

Many strategic investments are uncertain, and staging them can raise value by allowing the firm to learn and abandon. This is the real-options logic of Volume 1, Chapter 18, applied to capital allocation: commit a small amount to resolve the largest uncertainty, and release further capital against milestones.

**Example 21.9 – The value of staging.** A product requires a 20 million pilot now, after which in one year the firm will learn whether the product is viable. With probability 0.60 the pilot succeeds, and a full roll-out requires 100 million at that point and is then worth 160 million (present value at that date). With probability 0.40 it fails and the roll-out would be worthless. The discount rate is 10 percent.

*Staged plan.* Invest 20 now. In the success state, invest 100 and receive 160, a net gain of 60 at year 1; in the failure state, abandon. NPV = −20 + 0.60 × 60 / 1.10 = −20 + 32.73 = **+12.73**.

*Unstaged plan.* Commit 120 now (pilot and roll-out together). With probability 0.60 receive 160 at year 1; otherwise nothing. NPV = −120 + 0.60 × 160 / 1.10 = −120 + 87.27 = **−32.73**.

*Difference.* 12.73 − (−32.73) = 45.45. This equals the roll-out cost saved by not spending 100 in the failure state and by deferring it in the success state: 100 − 0.60 × 100 / 1.10 = 100 − 54.55 = 45.45 ✓.

*Interpretation.* The same project is a bad bet if committed all at once and a good one if staged. In practice, organizations often undermine the option by sinking costs early in a way that makes abandonment politically impossible; the framework should therefore define explicit kill criteria in advance and put someone other than the project sponsor in charge of the stage-gate decision.

### 21.6.4 Post-audits and learning

A capital allocation process that never looks back learns nothing. A post-audit compares realized outcomes with the investment case several years later, focusing less on blame than on identifying systematic biases: Are forecasts of volumes, prices and synergies consistently too high? Do large projects overrun? Are acquisition premiums justified by realized synergies? The results should feed back into the hurdle-rate and forecasting guidelines. Without this loop, optimism bias goes uncorrected, because project sponsors are rewarded at approval and the bill arrives in someone else's tenure.

## 21.7 KPI Design and Incentives

### 21.7.1 What makes a good KPI

Performance measures shape behavior. The chosen KPIs are the firm's real strategy as experienced by employees, whatever the strategy deck says. A good value-oriented KPI set has the following properties:

- **Linked to value:** a causal path from the KPI to value creation (through growth, returns or risk).
- **Controllable:** the manager measured can influence it; otherwise the measure rewards luck.
- **Balanced between short and long term:** pair a lagging financial outcome (EVA, ROIC) with leading indicators (customer retention, backlog, product pipeline) that signal future value.
- **Hard to manipulate:** based on audited data where possible, with definitions that cannot be changed to hit a target.
- **Few in number:** five to seven at business-unit level; beyond this, nothing has priority.
- **Cascading:** each level translates top-level value drivers into measures meaningful at that level.

A well-known adage, often attributed to Charles Goodhart, states that when a measure becomes a target it ceases to be a good measure. The lesson is not to avoid targets but to expect gaming, design for it, and rotate or supplement measures when gaming appears.

### 21.7.2 Typical failure modes

| KPI | Intended effect | Typical unintended behavior |
|---|---|---|
| Revenue growth | Market share gain | Unprofitable discounting; channel stuffing |
| EPS growth | Shareholder return | Buybacks at any price; under-investment; accounting choices |
| ROE | Efficient equity use | Excess leverage; rejection of positive-NPV projects |
| ROIC (ratio) | Capital efficiency | Under-investment when marginal return < average; harvesting assets |
| Operating margin | Cost discipline | Cuts in R&D and marketing; outsourcing to flatter margin |
| Free cash flow | Cash discipline | Stretching payables; deferring capex and maintenance |
| EVA (single-year) | Value creation | Short-termism if unadjusted; sandbagging targets |

### 21.7.3 EVA-based incentives and the bonus bank

Because a single-year measure invites short-termism (a manager can increase this year's EVA by cutting investment that pays off in the future, and leave before the cost appears), well-designed EVA plans use a **bonus bank**. Bonus credits earned in a year, positive or negative, are added to a bank balance; only a fraction (commonly one-third) of the positive balance is paid out each year, and the remainder stays at risk against future negative EVA. The effect is to align the manager's horizon with the horizon of the decision: a value-destroying move that looks good in year one is penalized when its consequences arrive. Another important feature is that targets are set as *improvements* in EVA that are independent of the manager's own forecast, so that managers are rewarded for creating value, not for negotiating a low target.

**Example 21.10 – A bonus bank in action.** A division's EVA is +10, −6, +14 and +20 (millions) over four years. The plan pays out one-third of the positive bank balance each year; the balance (after payout) carries forward. (Treat the bonus pool as equal to EVA for simplicity; a real plan would use a percentage of EVA improvement.)

*Year 1:* Bank = 0 + 10 = 10. Payout = 10 / 3 = 3.33. Carry-forward = 10 − 3.33 = 6.67.

*Year 2:* Bank = 6.67 + (−6) = 0.67. Payout = 0.67 / 3 = 0.22. Carry-forward = 0.67 − 0.22 = 0.44.

*Year 3:* Bank = 0.44 + 14 = 14.44. Payout = 14.44 / 3 = 4.81. Carry-forward = 14.44 − 4.81 = 9.63.

*Year 4:* Bank = 9.63 + 20 = 29.63. Payout = 29.63 / 3 = 9.88. Carry-forward = 29.63 − 9.88 = 19.75.

Total paid = 3.33 + 0.22 + 4.81 + 9.88 = 18.24, against cumulative EVA of 38 and a remaining bank of 19.75.

*Interpretation.* The −6 in year 2 wipes out most of the year-1 credit, so the manager cannot "bank and run": the bad year is borne by earlier awards. A manager who is considering a risky investment that raises this year's EVA but will likely lose value later knows that the downstream loss will be charged against the bank. The cost is complexity, and the cost of retaining a large bank balance if the manager leaves (usually forfeited or paid with restrictions), which must be managed through the design of vesting rules. Notice that payout lags behind performance: only 18.24 of the 38 created has been paid. This is deliberate.

### 21.7.4 Linking KPIs to the strategic cascade

The cascade works as follows. At the corporate level: TSR relative to peers and absolute ROIC–WACC spread. At the business unit: EVA or EVA improvement, with growth and return targets agreed with the center. At the functional level: drivers such as inventory days, price realization or plant uptime, each converted into its EVA effect (as we did for margin and turnover in Example 21.4). Nonfinancial KPIs (safety, quality, customer metrics) belong in a scorecard when they are leading indicators of value or constraints on how value may be pursued. The scorecard should have a clear statement of weights, and thresholds below which the bonus is zero regardless of EVA (for example, safety or compliance gates).

### 21.7.5 Implementation: the change-management reality

Value-based management initiatives most commonly fail not because the arithmetic is wrong but because the organization does not change behavior. The usual causes are lack of senior sponsorship; metrics owned by finance rather than by line managers; training limited to finance staff; incentive plans not actually changed; and a drift back to old habits once the first difficult trade-off (such as selling a historical flagship business) arises. Successful programs start with a few businesses and a few decisions, demonstrate value quickly, and extend gradually. A simple test of whether VBM has taken hold: could a plant manager explain how reducing inventory by a given amount changes EVA, and would they be rewarded for doing it?

## Case Study: Redrawing the Capital Map at Norvane Holdings

*Illustrative case. Norvane Holdings is a fictional company; all figures are invented.*

Norvane Holdings is a diversified group with three business units. **Norvane Foods** is a branded packaged-food business with stable cash flow and a loyal customer base. **Norvane Logistics** operates a regional freight network with heavy asset requirements. **Norvane Analytics** is a ten-year-old data and software unit that has grown 18 percent a year and is still reinvesting nearly all its cash.

The group's CFO, Tomas Reyes, has been in office for six months. His predecessor ran an annual process in which each unit submitted a capital request, the executive committee trimmed every request by a similar percentage and a single 8.5 percent hurdle rate was applied. Bonuses depended on operating profit growth and were paid in full when units hit 95 percent of plan. Reyes assembled the following picture for the most recent year (millions of currency units):

| Unit | NOPAT | Invested capital | Capex request next year | Asset beta | Target D/V |
|---|---|---|---|---|---|
| Foods | 150 | 1,100 | 80 | 0.60 | 30% |
| Logistics | 70 | 1,000 | 220 | 0.90 | 40% |
| Analytics | 55 | 350 | 130 | 1.40 | 10% |

Using a risk-free rate of 4 percent, a market premium of 5.5 percent, a tax rate of 25 percent and a pre-tax cost of debt of 6 percent, Reyes computed unit WACCs of roughly 7.2 percent for Foods, 8.7 percent for Logistics and 11.6 percent for Analytics. Unit ROICs were 13.6 percent, 7.0 percent and 15.7 percent respectively.

The results shocked the executive committee. Logistics, the largest capital user and requesting the largest increase, earned less than its cost of capital and had done so for years; its managers argued that the network would eventually reach scale and the returns would rise, although the data showed no trend. Foods, with a spread of more than 6 points, had asked for little because its leaders believed the "pie was fixed", and was sitting on 120 million in cash it could not deploy productively. Analytics had a modest positive spread of about 4 points, and its projects were uneven: some earned well above 20 percent, but a series of recent small acquisitions had been priced at premiums that, on a full-cost basis including goodwill, lowered the unit's return on invested capital by two points.

Reyes proposed four changes. First, replace the single hurdle with unit-specific rates and require every project of more than 25 million to show NPV at the unit rate and a five-year post-audit plan. Second, impose a stage-gated process on Logistics' network expansion, releasing capital only when measured route-level ROIC reached the unit WACC. Third, direct Foods to acquire or invest in adjacent categories only where RONIC exceeded 9 percent, and otherwise to raise its dividend and repurchase shares. Fourth, move the group to an EVA-based bonus bank with unit-level targets expressed as improvements in EVA, and a safety and compliance gate.

The Logistics head objected that EVA would "punish investment in the future." The CEO asked Reyes how he would answer that, how he would deal with the legacy asset-base problem (Logistics' oldest trucks were fully depreciated, flattering returns) and whether the board should consider selling the unit.

### Discussion Questions

1. Using the data in the case, verify the unit WACCs and ROICs in the text (at least for Foods and Analytics), and compute each unit's EVA. Which unit creates most value, and how does a flat 8.5 percent hurdle change the ranking?
2. Evaluate the argument that Logistics will "reach scale" and earn its cost of capital. What evidence would you require, and how would you structure a stage-gate for the network expansion?
3. How would you advise Foods on the use of its surplus cash? Frame your answer in terms of RONIC, buybacks versus dividends, and the risk of poorly priced acquisitions.
4. Design the EVA-based bonus plan for Analytics. How would you treat goodwill from past acquisitions, R&D and the unit's growth, and how would you answer the objection that EVA discourages investment?

## Key Takeaways

- Value comes from returns above the cost of capital on invested capital; growth multiplies the spread, so it creates value only when RONIC exceeds WACC and destroys value when it does not.
- The value-driver formula, V = NOPAT × (1 − g/RONIC) / (WACC − g), shows that profit growth by itself is neutral at best; reinvestment at sub-WACC returns lowers value while raising reported earnings.
- EVA = NOPAT − WACC × IC is the periodic counterpart of NPV; the present value of future EVA plus invested capital equals enterprise value. Its use as a management system requires consistent definitions, a few well-chosen adjustments (R&D, goodwill, leases) and attention to historical-cost distortions.
- ROIC decomposes into margin and capital turnover; translating each operational lever into dollars of EVA makes trade-offs transparent and comparable.
- A single corporate hurdle rate shifts capital from low-risk to high-risk businesses; use divisional rates built from pure-play betas and target capital structures.
- A diversified firm must justify its portfolio with specific parenting advantages; use sum-of-the-parts valuation and the best-owner test to decide what to keep, fix or sell.
- Internal capital markets are prone to spreading-thin allocation, cross-subsidization, lobbying and optimism bias; counter them with independent review, explicit rationing and post-audits.
- Under capital rationing, maximize total NPV subject to the budget; PI ranking is a heuristic that can fail with indivisible projects, and the shadow price of capital shows whether the constraint itself is destroying value.
- A capital allocation framework ranks uses of cash (maintain, invest organically, acquire selectively, preserve flexibility, return surplus) on the same value metric, and uses staging to preserve the option to abandon.
- KPIs shape behavior: pick few, controllable, value-linked measures; use dollar measures like EVA rather than ratios for investment decisions; use bonus banks and balanced scorecards to counter short-termism and gaming.

## Review Questions

1. Explain why the value-driver formula implies that growth is value-neutral when RONIC equals WACC. What does this imply for an executive whose bonus depends on revenue growth?
2. Distinguish average ROIC from RONIC. Why is the second more relevant to the valuation of growth, and how could using the first lead to a poor investment?
3. Describe the relationship between EVA, MVA and enterprise value. Why does it matter that this relationship holds?
4. Why might a company capitalize R&D for internal performance measurement even if accounting standards require expensing? What are the drawbacks of such adjustments?
5. Why does a ratio-based measure such as ROIC discourage investment in some divisions where a dollar-based measure such as EVA would not?
6. What are the arguments for and against using a single corporate WACC for all divisions? Illustrate how it can misallocate capital.
7. What does the "parenting advantage" test require, and how does it differ from asking whether a business is attractive?
8. List three typical distortions in internal capital markets and propose one governance mechanism to counter each.
9. When capital is rationed, why can ranking by profitability index fail to give the optimal portfolio? Why is IRR ranking worse?
10. Explain how a bonus bank reduces short-termism, and describe two design choices (such as payout fraction and target setting) that determine its effectiveness.

## Problems

**Problem 21.1 – EVA.** A business has NOPAT of 180 and invested capital of 1,500. Its WACC is 9.5 percent. Compute ROIC, the spread, the capital charge and EVA.

**Problem 21.2 – Value of growth.** NOPAT₁ is 80 and WACC is 10 percent. Compute enterprise value for g = 5 percent when RONIC is (a) 20 percent, (b) 10 percent and (c) 5 percent, and compare each with the no-growth value of 80 / 0.10.

**Problem 21.3 – Capitalizing R&D.** A firm has EBIT of 200, a tax rate of 30 percent, invested capital of 1,000 and a WACC of 10 percent. R&D expense for the last five years (oldest first) was 20, 24, 28, 32 and 36. R&D is amortized over three years on a straight-line basis, beginning in the year of spending (so only the last three vintages remain). Compute (a) current-year amortization, (b) the year-end unamortized R&D asset, (c) adjusted NOPAT and invested capital, (d) ROIC and EVA before and after adjustment.

**Problem 21.4 – Divisional WACC.** A division has an asset beta of 0.80 and a target D/V of 30 percent. The risk-free rate is 3.5 percent, the market risk premium 5.0 percent, the pre-tax cost of debt 5.5 percent and the tax rate 25 percent. Compute the equity beta, cost of equity and WACC.

**Problem 21.5 – Capital rationing.** Use the six projects of Example 21.8 with a budget of 170. Find the PI-ranking selection and the optimal selection by enumeration, and state each NPV.

**Problem 21.6 – Bonus bank.** A plan pays out one-half of the positive bank balance each year. A division's EVA over four years is +8, −12, +10 and +16. Compute the bank balance before payout, the payout and the carry-forward each year.

**Problem 21.7 – ROIC tree.** A division has an EBIT margin of 10 percent, a tax rate of 30 percent and capital turnover of 2.0×. (a) Compute ROIC. (b) Compute ROIC if the margin rises to 11 percent. (c) Compute ROIC if turnover rises to 2.2×. (d) Which lever raises ROIC more?

**Problem 21.8 – Sum of the parts.** Division X has NOPAT₁ = 60, g = 3 percent, RONIC = 10 percent and WACC = 8 percent. Division Y has NOPAT₁ = 30, g = 4 percent, RONIC = 15 percent and WACC = 11 percent. Compute each division's value and the sum, and the conglomerate discount if the market values the firm at 1,200.

### Answers to Selected Problems

**21.1.** ROIC = 180 / 1,500 = 12.0 percent; spread = 12.0 − 9.5 = 2.5 points; capital charge = 0.095 × 1,500 = 142.5; EVA = 180 − 142.5 = 37.5.

**21.2.** (a) 80 × (1 − 0.05/0.20) / (0.10 − 0.05) = 80 × 0.75 / 0.05 = 1,200; (b) 80 × (1 − 0.5) / 0.05 = 800; (c) 80 × (1 − 1) / 0.05 = 0. The no-growth value is 800. Growth adds 400 at RONIC 20 percent, adds nothing at 10 percent and destroys 800 at 5 percent (all NOPAT is reinvested at a return below WACC, leaving no free cash flow).

**21.3.** (a) Amortization = (28 + 32 + 36) / 3 = 32. (b) Unamortized asset = 36 × 2/3 + 32 × 1/3 + 28 × 0 = 24 + 10.67 = 34.67. (c) Adjusted EBIT = 200 + 36 − 32 = 204; adjusted NOPAT = 204 × 0.70 = 142.8; adjusted invested capital = 1,034.67. (d) Before: ROIC = 140 / 1,000 = 14.0 percent, EVA = 140 − 100 = 40.0. After: ROIC = 142.8 / 1,034.67 = 13.80 percent, EVA = 142.8 − 103.47 = 39.33.

**21.4.** D/E = 0.30/0.70 = 0.4286; βE = 0.80 × (1 + 0.75 × 0.4286) = 0.80 × 1.3214 = 1.057; Ke = 3.5% + 1.057 × 5.0% = 8.79%; after-tax Kd = 4.125%; WACC = 0.70 × 8.79% + 0.30 × 4.125% = 6.15% + 1.24% = 7.39%.

**21.5.** PI ranking: B (30), E (20), A (50) = 100; C (80) does not fit; F (60) fits, total 160, NPV = 18 + 12 + 20 + 6 = 56. D (40) would exceed 170 (200), so no more. Optimal: A + B + C = 160, NPV = 20 + 18 + 20 = 58 (other combinations such as B + C + E = 130 with NPV 50, or A + B + E + F = 160 with NPV 56, are inferior). The heuristic loses 2.

**21.6.** Year 1: bank 8, payout 4, carry 4. Year 2: bank 4 − 12 = −8, payout 0, carry −8. Year 3: bank −8 + 10 = 2, payout 1, carry 1. Year 4: bank 1 + 16 = 17, payout 8.5, carry 8.5. Total paid 13.5 against cumulative EVA of 22. Note the negative balance carried forward from year 2 suppresses payouts in year 3.

**21.7.** (a) 0.10 × 0.70 × 2.0 = 14.0 percent. (b) 0.11 × 0.70 × 2.0 = 15.4 percent. (c) 0.10 × 0.70 × 2.2 = 15.4 percent. (d) Equal here: a 10 percent relative improvement in either factor raises ROIC by 10 percent (14.0 to 15.4); the lever with the lower cost should be chosen.

**21.8.** X = 60 × (1 − 0.03/0.10) / (0.08 − 0.03) = 60 × 0.70 / 0.05 = 840. Y = 30 × (1 − 0.04/0.15) / (0.11 − 0.04) = 30 × 0.7333 / 0.07 = 314.3. Sum = 1,154.3. Discount = (1,154.3 − 1,200) / 1,154.3 = −4.0 percent, that is, a 4.0 percent premium: the market values the firm above the sum of the parts.
