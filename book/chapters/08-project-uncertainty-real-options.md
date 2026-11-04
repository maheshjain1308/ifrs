# Chapter 8: Project Analysis under Uncertainty and Real Options

## Learning Objectives

By the end of this chapter you should be able to:

- Explain why a single-point NPV is an incomplete summary of a project, and distinguish forecasting risk, market risk and project-specific risk.
- Perform and interpret one-variable sensitivity analysis, tornado-style rankings and scenario analysis, and recognise their limitations.
- Compute accounting, cash and financial break-even points and relate them to operating leverage.
- Describe how Monte Carlo simulation works, specify input distributions and correlations, and read its output responsibly.
- Build and roll back a decision tree for a sequential investment decision, and compute the value of information.
- Identify and value the real options embedded in projects (to expand, abandon and delay) and explain why flexibility adds value that static NPV misses.

## Opening Vignette

*(Illustrative scenario; the company is fictional.)*

Kestrel Energy Storage is evaluating a $40 million plant to manufacture grid-scale battery cabinets. The finance team's model shows a base-case NPV of $6.2 million at the company's 11% cost of capital, and the chief executive, Priya Ramanathan, is inclined to approve. But the board's risk committee asks a different question: "How wrong can this be, and what can we do about it if we are wrong?"

Kestrel's analysts go back to the model. The base case assumes that the plant sells 12,000 cabinets a year at $4,100 each. A one-line sensitivity run reveals that a 10% fall in the selling price turns the NPV deeply negative, while a 10% fall in volume merely halves it. Price, not volume, is the variable that matters, and price depends on a competitor's capacity decisions that Kestrel cannot control. A three-scenario analysis (a glut of imported cabinets, the base case, and a subsidy-driven boom) produces NPVs ranging from deeply negative to far above the base case. A simulation that lets price, volume, input cost and the cost of capital vary together suggests roughly a one-in-three chance of a negative NPV.

The mood in the boardroom shifts from "should we do it?" to "how should we do it?" The operations director suggests building half the capacity now and reserving the site and permits for a second phase that would be triggered only if prices hold above a threshold. The chief financial officer points out that, in the language of this chapter, the project is not a single bet but a package: a small plant plus an *option to expand*. If the market disappoints, Kestrel can stop at phase one, perhaps even sell the equipment second-hand (an *option to abandon*). If it is unsure about the regulatory environment, it could wait a year for the subsidy rules to be settled (an *option to delay*), at the cost of ceding first-mover advantage.

None of these possibilities appears in the static discounted cash flow model, because the model assumes a fixed plan from which management never deviates. This chapter shows how to measure uncertainty (sensitivity, scenarios, break-even, simulation), how to analyse sequential decisions (decision trees), and how to put a value on managerial flexibility (real options).

## 8.1 From Point Estimates to Understanding Risk

### 8.1.1 The problem with a single number

Chapter 7 showed how to turn forecasts into a net present value. But each input to that calculation (unit sales, price, costs, working capital, the life of the project, the discount rate) is an estimate. An NPV of $1.2 million computed from uncertain inputs is not a fact; it is a point on a distribution. Two projects with the same expected NPV can be very different propositions: one may be nearly certain, the other may have a one-in-three chance of destroying value. Capital budgeting under uncertainty has two purposes: to learn *which assumptions matter most*, so that management can focus its effort on them, and to learn *how much could go wrong* so that the firm can decide whether it can tolerate that outcome and whether it can reshape the project to reduce it.

### 8.1.2 Three kinds of uncertainty

It is useful to distinguish the sources of risk because they call for different responses.

- **Forecasting risk** (estimation risk) is the possibility that the forecasts are wrong because the analyst lacks information, such as a new product with no sales history. It can be reduced by research, pilots and market testing, and its resolution has value, as the decision tree section will show.
- **Market (systematic) risk** is the exposure of project cash flows to the economy as a whole. This is the risk that investors price and that the discount rate should reflect, through the capital asset pricing model or similar. It cannot be diversified away by shareholders.
- **Project-specific (idiosyncratic) risk** is risk that is unique to this project. In a well-diversified portfolio it does not affect the required return, but it matters to managers because it affects the likelihood of failure, the cost of financial distress and the value of managerial flexibility.

The tools in this chapter mostly address the first and third kinds. They do not replace the discount rate; they complement it. A common error is to *raise the discount rate* to handle every kind of doubt. That penalises distant cash flows more heavily than near ones regardless of whether the risk is actually concentrated in the far future, and it fails to recognise that management can respond to bad news. A better practice is to set the discount rate for systematic risk and use scenario, simulation and option analysis to explore the rest.

### 8.1.3 A running example

Several sections of this chapter use the same base-case project so that the techniques can be compared. Cirrus Components, a fictional manufacturer, is evaluating a new product line.

| Input | Base-case value |
|---|---|
| Investment (equipment) | $4,000,000, straight-line over 5 years, no salvage |
| Annual unit sales | 100,000 |
| Price per unit | $60 |
| Variable cost per unit | $35 |
| Fixed cash costs | $800,000 per year |
| Project life | 5 years |
| Tax rate | 30% |
| Required return | 12% |
| Working capital | Ignored (to keep the calculations focused) |

The base-case calculation follows the method of Chapter 7.

```
Contribution       = 100,000 × (60 − 35)              = 2,500,000
Less fixed cash costs                                  = 800,000
EBITDA                                                 = 1,700,000
Less depreciation (4,000,000 / 5)                      = 800,000
EBIT                                                   = 900,000
Tax at 30%                                             = 270,000
Net operating profit after tax                         = 630,000
Operating cash flow = 630,000 + 800,000                = 1,430,000

Annuity factor (12%, 5 years) = [1 − 1.12^(−5)] / 0.12 = 3.604776
NPV = −4,000,000 + 1,430,000 × 3.604776                = $1,154,830
```

The base NPV is a positive $1.15 million. The remaining sections ask how robust it is.

## 8.2 Sensitivity Analysis

### 8.2.1 The method

Sensitivity analysis changes one input at a time, holding all others at their base-case values, and records the effect on NPV. Its steps are:

1. Build the base-case model with every input in a separate, labelled cell.
2. Choose a plausible range for each input (such as ±10% and ±20% of its base value, or a range based on the analyst's judgement of the best and worst cases).
3. Recompute NPV at each end of each range.
4. Rank the inputs by the size of the swing in NPV they produce.

A chart of the ranked swings is known as a **tornado diagram**, because the widest bar sits at the top and the shape narrows downward. Tabulated results serve the same purpose, and Example 8.1 does so. A related summary is the **elasticity** or **sensitivity coefficient**, the percentage change in NPV for a one-percent change in an input.

### 8.2.2 What sensitivity analysis tells us

Sensitivity analysis answers the question "which assumptions matter most?" It identifies where research should be concentrated: if a 10% change in selling price swings NPV by three million dollars but the same change in fixed costs by only 400,000, then precise knowledge of price is worth far more than a precise estimate of overhead. It also reveals hidden fragility: a project that looks comfortable in the base case may have an NPV that is wiped out by a small adverse change in one variable.

### 8.2.3 Limitations

The method has real weaknesses, and a good analyst keeps them in mind.

- **Variables are not independent.** A price decline typically comes with a volume change (if demand is elastic), and an economic slowdown moves price, volume and costs together. One-at-a-time changes ignore correlations and can paint an unrealistic picture.
- **The ranges are subjective.** A ±10% swing in each input treats them as equally uncertain. In practice, the price of a commodity may have a range of ±40% and fixed costs ±5%. Sensible analysis uses ranges that reflect real uncertainty, which means the ranking depends heavily on how those ranges are chosen.
- **No probabilities.** The analysis does not say how likely each outcome is.
- **Management response is ignored.** It assumes the firm continues unchanged, even when conditions would prompt it to cut costs or close the project.

**Example 8.1 – Sensitivity analysis of the Cirrus project.**

Starting from the base case (NPV = $1,154,830), each input is varied by ±10% in turn. For each case the NPV is recalculated from the full model.

*Price +10% (to $66).* Contribution = 100,000 × (66 − 35) = 3,100,000. EBIT = 3,100,000 − 800,000 − 800,000 = 1,500,000. After-tax = 1,050,000. OCF = 1,050,000 + 800,000 = 1,850,000. NPV = −4,000,000 + 1,850,000 × 3.604776 = **$2,668,836**.

*Price −10% (to $54).* Contribution = 100,000 × 19 = 1,900,000. EBIT = 300,000; after-tax 210,000; OCF = 1,010,000. NPV = −4,000,000 + 1,010,000 × 3.604776 = **−$359,176**.

*Volume ±10%.* At 110,000 units contribution is 2,750,000; EBIT = 1,150,000; after-tax 805,000; OCF = 1,605,000; NPV = **$1,785,666**. At 90,000 units contribution is 2,250,000; EBIT = 650,000; after-tax 455,000; OCF = 1,255,000; NPV = **$523,994**.

*Variable cost ±10%.* At $38.50 the unit contribution is $21.50 and total contribution 2,150,000; EBIT = 550,000; after-tax 385,000; OCF = 1,185,000; NPV = **$271,660**. At $31.50 the unit contribution is $28.50, so total contribution is 2,850,000; EBIT = 1,250,000; after-tax 875,000; OCF = 1,675,000; NPV = **$2,038,000**.

*Fixed costs ±10%.* Each $80,000 change in fixed cost changes after-tax cash flow by 80,000 × 0.70 = 56,000; the NPV changes by 56,000 × 3.604776 = $201,867 in the opposite direction. NPV at +10% = **$952,963**; at −10% = **$1,356,697**.

*Investment ±10%.* At $4,400,000 the depreciation is $880,000; EBIT = 820,000; after-tax 574,000; OCF = 1,454,000; NPV = −4,400,000 + 1,454,000 × 3.604776 = **$841,345**. At $3,600,000, depreciation is $720,000; EBIT = 980,000; after-tax 686,000; OCF = 1,406,000; NPV = **$1,468,315**.

The results are summarised in the following table, ordered by the size of the swing.

| Input (±10%) | NPV at unfavourable | NPV at favourable | Swing (range) | % change in NPV for 10% adverse move |
|---|---|---|---|---|
| Price | −359,176 | 2,668,836 | 3,028,012 | −131.1% |
| Variable cost | 271,660 | 2,038,000 | 1,766,340 | −76.5% |
| Volume | 523,994 | 1,785,666 | 1,261,672 | −54.6% |
| Investment | 841,345 | 1,468,315 | 626,970 | −27.1% |
| Fixed costs | 952,963 | 1,356,697 | 403,734 | −17.5% |

**Interpretation.** Price is by far the most important variable: a 10% fall in price takes the project from +$1.15 million to −$0.36 million. This is the effect of *operating leverage*: because costs are largely independent of price, every dollar of price decline falls straight through to profit. Unit variable cost is second, and volume third; fixed costs and even the size of the investment matter much less. The managerial implication is clear. Spend the research budget on pricing power and competitive response, and negotiate hard on variable costs, rather than shaving the capital budget. Note that the ranking would change if the plausible range for volume were ±40% while price were known within ±3%; the table depends on the ranges chosen, not only on the model's structure.
