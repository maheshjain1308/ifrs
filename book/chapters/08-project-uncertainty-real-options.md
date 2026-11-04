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

## 8.3 Scenario Analysis

### 8.3.1 Moving variables together

Scenario analysis addresses the main weakness of sensitivity analysis by changing several inputs *simultaneously* in a internally consistent story. A typical set has three scenarios: a pessimistic (downside), a base and an optimistic (upside) case. Each scenario is a coherent narrative about the future, not just a set of numbers: "a recession cuts demand, the competitor undercuts our price, and input costs rise." The consistency of the story matters, because it is the correlation among inputs that drives the extremes.

Scenarios may be assigned subjective probabilities, which allow a probability-weighted expected NPV and a measure of dispersion:

```
Expected NPV = Σ pᵢ × NPVᵢ
σ(NPV)       = √[ Σ pᵢ × (NPVᵢ − Expected NPV)² ]
```

### 8.3.2 Building good scenarios

Several practical principles apply. First, tie scenarios to *drivers* of the business, such as regulation, technology adoption or competitor behaviour, instead of arbitrary percentage shocks. Second, avoid making the worst case an implausible catastrophe or the best case a fantasy; the point is to cover the plausible range. Third, include management responses where plausible, as the firm will not mechanically continue a failing project. Fourth, resist giving excessive precision to the probabilities: they are judgemental, and the exercise is more valuable for what it reveals about the structure of risk than for the arithmetic.

The weakness of scenario analysis is that it considers only a handful of discrete outcomes, whereas reality offers a continuum. It also depends on the analyst's ability to imagine the relevant scenarios. Scenario planning exercises in practice often miss the event that actually occurs, which is why they complement but do not replace simulation.

**Example 8.2 – Three scenarios for the Cirrus project.**

The product team defines three scenarios.

| Input | Pessimistic | Base | Optimistic |
|---|---|---|---|
| Units per year | 70,000 | 100,000 | 130,000 |
| Price ($) | 54 | 60 | 64 |
| Variable cost ($) | 38 | 35 | 33 |
| Fixed cash cost ($) | 900,000 | 800,000 | 750,000 |
| Probability | 25% | 50% | 25% |

*Pessimistic.* Contribution = 70,000 × (54 − 38) = 1,120,000. EBIT = 1,120,000 − 900,000 − 800,000 = −580,000. Assuming the firm can use the loss against profits elsewhere, tax is −174,000, so net operating profit = −406,000 and OCF = −406,000 + 800,000 = 394,000. NPV = −4,000,000 + 394,000 × 3.604776 = **−$2,579,718**.

*Base.* NPV = **$1,154,830** (from Section 8.1).

*Optimistic.* Contribution = 130,000 × (64 − 33) = 4,030,000. EBIT = 4,030,000 − 750,000 − 800,000 = 2,480,000. After-tax = 1,736,000. OCF = 2,536,000. NPV = −4,000,000 + 2,536,000 × 3.604776 = **$5,141,712**.

*Expected value and dispersion.*

```
Expected NPV = 0.25 × (−2,579,718) + 0.50 × 1,154,830 + 0.25 × 5,141,712
             = −644,930 + 577,415 + 1,285,428 = $1,217,913

Variance = 0.25 × (−3,797,631)² + 0.50 × (−63,083)² + 0.25 × (3,923,799)²
         ≈ 3.6055×10¹² + 0.0020×10¹² + 3.8492×10¹² = 7.4567×10¹²
σ(NPV)   ≈ $2,730,667
```

The project has a positive expected NPV of about $1.22 million but a standard deviation of about $2.73 million, more than twice the expected value. There is a 25% chance (the probability assigned to the pessimistic story) of losing $2.58 million. Contrast this with the sensitivity analysis: the scenario spread is far wider than the ±10% swings, because the scenarios combine adverse moves in price, volume and costs. A board that considered only the base case would see a comfortable project; a board that sees the scenarios must ask whether the company can absorb a $2.6 million loss and whether anything can be done to reduce its probability.

## 8.4 Break-Even Analysis

### 8.4.1 Three break-even concepts

Break-even analysis asks: how bad can things get before the project fails? It reports the value of one input at which a performance measure just reaches its threshold. Three kinds of break-even are used in capital budgeting, and distinguishing them avoids a classic confusion.

- **Accounting break-even** is the sales level at which accounting profit (EBIT or net income) is zero. At that level the project covers all operating costs and depreciation, but earns nothing for its capital.
- **Cash break-even** is the sales level at which operating cash flow is zero. Because depreciation is non-cash, this level is lower than the accounting break-even. A project at cash break-even covers its cash costs but never recovers its investment. (The standard textbook convention assumes no tax credit on losses here, so that OCF equals EBITDA.)
- **Financial break-even** is the sales level at which NPV is zero, so the project earns exactly the required return. This is the economically meaningful one and it is always higher than the accounting break-even for a project with positive investment, because it also requires a return on the capital tied up.

The formulas, with Q the volume, P price, v unit variable cost, FC fixed cash costs, D depreciation and T the tax rate, are:

```
Accounting break-even:  Q = (FC + D) / (P − v)
Cash break-even:        Q = FC / (P − v)                         (OCF = EBITDA = 0)
Financial break-even:   Q = [ FC + D + (EOCF − D) / (1 − T) ] / (P − v)
   where EOCF = I / Annuity factor(r, n) is the equivalent annual operating cash flow needed for NPV = 0
```

Break-even points can also be computed for price, variable cost or any other input, holding the rest constant. The distance between the base-case value and the break-even point is a **margin of safety**, often expressed as a percentage.

### 8.4.2 Operating leverage

Fixed costs magnify the effect of sales changes on profit. The **degree of operating leverage (DOL)** measures this:

```
DOL = Contribution / EBIT = % change in EBIT / % change in sales
```

For Cirrus, DOL = 2,500,000 / 900,000 = 2.78: a 1% change in volume changes EBIT by 2.78%. High operating leverage means a large profit when volumes are high and a rapid collapse when they fall. It also means that break-even is closer to the base case. Capital-intensive and technology-heavy projects, such as chemical plants, airlines or software with large development costs, generally have high operating leverage, and their managers should look at the margin of safety closely.

**Example 8.3 – Break-even points for the Cirrus project.**

Fixed cash costs are $800,000, depreciation is $800,000, unit contribution is P − v = $25 and the required annual operating cash flow for NPV = 0 is found as follows.

*Accounting break-even.* Q = (800,000 + 800,000) / 25 = **64,000 units**. At this volume EBIT is zero, OCF = depreciation = $800,000 and the NPV is −4,000,000 + 800,000 × 3.604776 = **−$1,116,179**. The project is accounting-profitable and still destroys over a million dollars of value, a vivid illustration that accounting break-even is not a safe criterion.

*Cash break-even.* Q = 800,000 / 25 = **32,000 units**. At this volume OCF is zero and NPV = **−$4,000,000**: the firm loses the entire investment.

*Financial break-even.* The annual OCF required for NPV = 0 is 4,000,000 / 3.604776 = $1,109,639. Since OCF = EBIT × (1 − T) + D, the required EBIT is (1,109,639 − 800,000) / 0.70 = $442,341. Then contribution required is EBIT + FC + D = 442,341 + 800,000 + 800,000 = $2,042,341, so

```
Q = 2,042,341 / 25 = 81,694 units
```

The margin of safety on volume is (100,000 − 81,694) / 100,000 = **18.3%**.

*Other break-evens (holding other inputs at base).*

| Variable | Base value | Break-even (NPV = 0) | Margin of safety |
|---|---|---|---|
| Units per year | 100,000 | 81,694 | 18.3% |
| Price per unit | $60.00 | $55.42 | 7.6% |
| Variable cost per unit | $35.00 | $39.58 | 13.1% |
| Fixed cash costs | $800,000 | $1,257,659 | 57.2% |

The table reinforces the sensitivity analysis. The project can lose almost 18% of volume or almost 13% of cost-side slack but only 7.6% of price before value is destroyed, while the fixed cost has a very thick cushion. The three break-even definitions for volume (32,000, 64,000 and 81,694 units) are ordered cash < accounting < financial, and only the last answers the question the board is really asking.

## 8.5 Monte Carlo Simulation

### 8.5.1 The concept

Sensitivity analysis varies one input; scenario analysis a handful of combinations. **Monte Carlo simulation** takes the idea to its natural conclusion: it specifies a probability distribution for each uncertain input, draws a random value from each, computes the project's NPV for that draw, and repeats this thousands of times. The collection of NPVs is an empirical probability distribution of project value. The method is named after the casino and is attributed to work on numerical problems in the 1940s, but its logic is just repeated sampling.

The steps are:

1. **Build the deterministic model** with all inputs on separate lines (as in Chapter 7).
2. **Choose the uncertain inputs** (the ones the sensitivity analysis shows matter) and assign each a distribution: normal for quantities with symmetrical errors, triangular for variables where the analyst can state a minimum, most likely and maximum, lognormal for strictly positive variables with a right skew, and so on.
3. **Specify correlations** among the inputs, because variables that move together make extreme outcomes more likely than independent draws suggest.
4. **Run many trials** (typically thousands). In each, draw every uncertain input, compute the cash flows and the NPV.
5. **Analyse the output:** the mean and standard deviation of NPV, the probability that NPV is negative, percentiles, and a histogram. Rank the inputs by their correlation with NPV to see which uncertainty drives the result.

In pseudo-code:

```
for trial = 1 to N:
    units = draw Normal(100,000; 20,000), floored at 0
    price = draw Triangular(min 52, mode 60, max 66)
    vcost = draw Triangular(min 32, mode 35, max 41)
    fixed = draw Normal(800,000; 60,000)
    OCF   = ((units × (price − vcost) − fixed − 800,000) × 0.70) + 800,000
    NPV[trial] = −4,000,000 + OCF × 3.604776
report mean(NPV), stdev(NPV), share of trials with NPV < 0, percentiles
```

### 8.5.2 Strengths and cautions

Simulation can handle many inputs, skewed distributions, non-linear relationships and path-dependent rules (for example, "if cumulative sales fall below a threshold, cut capacity"). Its output speaks in the language of risk: "there is a one-in-three chance of a loss." But it is no better than its inputs. The main cautions are these.

- **Garbage in, garbage out.** The distributions are subjective, and an elaborate simulation can lend a false sense of precision to guesses. Document why each distribution was chosen.
- **Correlation is hard to specify and easy to omit.** Assuming independence generally understates the spread of outcomes, because in practice good and bad years cluster.
- **Fat tails.** Normal distributions understate the probability of extreme events. If the real risk includes rare disasters, choose distributions that allow them.
- **Misleading discounting.** The simulation's mean NPV should be computed with a discount rate that reflects only market risk; using a high "risk-adjusted" rate on top of a simulation that already includes the project's variability double-counts risk.
- **It cannot choose for you.** The result is a distribution, not a decision. The firm must still decide how much risk it can bear.

**Example 8.4 – A simulation of the Cirrus project.**

Cirrus's analysts specify these distributions for the uncertain inputs, drawn independently: units per year Normal(mean 100,000; σ 20,000) floored at zero; price Triangular(52, 60, 66); variable cost Triangular(32, 35, 41); fixed cash costs Normal(800,000; 60,000). Depreciation, the tax rate and the discount rate are fixed. A 10,000-trial simulation (random seed 42 in a standard numerical library) produced the results below. Because this is a random sample, a rerun with a different seed would produce slightly different figures; the pattern, not the third digit, is what matters.

| Statistic | Result |
|---|---|
| Mean NPV | $727,072 |
| Standard deviation of NPV | $1,481,661 |
| 5th percentile | −$1,560,379 |
| 25th percentile | −$300,039 |
| Median | $641,708 |
| 75th percentile | $1,672,323 |
| 95th percentile | $3,307,583 |
| Probability NPV < 0 | 32.4% |
| Probability NPV < −$1,000,000 | 11.4% |
| Probability NPV > $2,000,000 | 18.9% |

*Why is the mean below the deterministic NPV of $1,154,830?* The triangular distributions are skewed against the firm: the average price is (52 + 60 + 66)/3 = $59.33 and the average variable cost is (32 + 35 + 41)/3 = $36.00, so the expected unit margin is $23.33 rather than $25. With 100,000 expected units, the expected contribution is about $2.33 million, not $2.5 million, which alone lowers NPV by about $0.43 million. This is a general point: NPV evaluated at the *expected* inputs is not always the *expected* NPV when distributions are asymmetric, and the simulation's mean is the better estimate of expected value if the distributions are sound.

*What drives the risk?* The correlation of each input draw with the resulting NPV across the trials is approximately 0.80 for units, 0.49 for price, −0.32 for variable cost and −0.09 for fixed costs. In the sensitivity analysis price had the largest effect per 10% move, but under realistic uncertainty ranges, volume (with a 20% standard deviation) dominates, while price (a narrow triangular range) comes second. The two tools answer different questions: sensitivity asks what the model is most sensitive to, simulation asks what matters given how uncertain we actually are. A manager should keep both in mind. It is also noteworthy that a project with a deterministic NPV of +$1.15 million has a probability of about 32% of destroying value once the uncertainty is acknowledged.

## 8.6 Decision Trees and Sequential Decisions

### 8.6.1 Why a tree?

The tools so far treat the investment as a one-time, all-or-nothing choice. Real projects unfold in stages: a pilot, a regulatory ruling, a market test, a first-phase build. At each stage management learns something and can change course. A **decision tree** models this sequence explicitly. It has two kinds of nodes.

- **Decision nodes** (conventionally drawn as squares) are points where management chooses among alternatives, such as invest, wait, expand or abandon.
- **Chance nodes** (circles) are points where uncertainty resolves, with a probability attached to each branch.

The tree is solved by **backward induction** (rollback): start at the end of the tree, compute the value of each terminal payoff, take the probability-weighted expected value at each chance node, choose the best alternative at each decision node, and work back to the present, discounting along the way. Because the decision made at a later node depends on information revealed earlier, the tree values the *policy*, not just a single path.

### 8.6.2 Value of information

A pilot, a test market or a feasibility study buys information. The tree shows what that information is worth: the extra expected value from being able to choose the best action in each state of the world, instead of committing in advance. If the information is worth more than it costs, the study is justified. Here the contrast with Chapter 7's treatment of sunk costs is instructive: *after* the money is spent it is irrelevant; *before* it is spent, the study is an investment decision that deserves its own NPV.

### 8.6.3 Cautions

Decision trees are easy to draw and difficult to parameterise. Three issues recur. First, the probabilities are usually subjective. Second, the discount rate should reflect the risk of the cash flows at each branch, and a single rate applied throughout is an approximation; the more rigorous approach, used for options below, adjusts probabilities rather than rates. Third, trees grow quickly: realistic problems with many stages and outcomes become unmanageable, which is one reason analysts prefer simulation or option pricing for continuous uncertainty.

**Example 8.5 – Pilot plant or immediate launch? (amounts in $ millions)**

Orchard Biomaterials has a new process for compostable packaging film. Technical feasibility is uncertain. Management can (a) build a pilot plant now at a cost of $1.0 million, learning after one year whether the process works commercially, or (b) commit to the full-scale plant ($8.0 million) immediately. The cost of capital is 10%.

The facts are as follows. The process works with probability 0.40. If it works, the present value (at year 1) of the full-scale plant's future cash flows is $14.0 million. If it fails, the plant would be worth only $3.0 million. The full-scale investment of $8.0 million is made at year 1 if the pilot is run (after the result is known), or is made at once (with the outcome revealed afterwards) if the firm skips the pilot. For comparability, value the immediate launch with the same year-1 payoffs.

*Strategy A – Immediate full launch.* The expected year-1 value of the plant is 0.40 × 14.0 + 0.60 × 3.0 = 5.6 + 1.8 = 7.4. Present value = 7.4 / 1.10 = 6.727. NPV = −8.0 + 6.727 = **−$1.273 million**. The firm would reject it.

*Strategy B – Pilot first.* Roll back the tree.

| Node | Branch | Probability | Payoff at year 1 | Decision |
|---|---|---|---|---|
| Pilot result (chance) | Works | 0.40 | Invest 8.0; value 14.0; net 6.0 | Invest |
| Pilot result (chance) | Fails | 0.60 | Invest 8.0; value 3.0; net −5.0 | Do not invest; payoff 0 |

Expected payoff at year 1 = 0.40 × 6.0 + 0.60 × 0 = 2.40. Present value = 2.40 / 1.10 = 2.182. Subtract the pilot cost: NPV = 2.182 − 1.0 = **+$1.182 million**.

*Comparison.* The pilot strategy has NPV +1.18 million; immediate launch has −1.27 million; doing nothing has 0. The pilot turns a project that fails the NPV test into one that creates $1.18 million, because it lets management avoid the $5.0 million loss that the failure branch would otherwise bring. The pilot's gross value (its worth before cost) is $2.18 million, so a pilot costing up to $2.18 million would still be justified.

*Break-even probability.* The pilot pays if 6.0p / 1.10 ≥ 1.0, i.e. p ≥ 0.183. If the chance of technical success were below 18.3%, even the pilot would not be worth running. The following table shows the sensitivity.

| Probability of success | Pilot strategy NPV ($m) | Immediate launch NPV ($m) |
|---|---|---|
| 0.20 | 0.09 | −4.36 |
| 0.30 | 0.64 | −2.82 |
| 0.40 | 1.18 | −1.27 |
| 0.50 | 1.73 | +0.27 |

(Immediate-launch NPV = −8.0 + [p × 14.0 + (1 − p) × 3.0] / 1.10; for p = 0.50 this is −8.0 + 8.5/1.10 = −0.273... computed exactly, the value is −8.0 + 7.727 = −0.273.) At p = 0.50 immediate launch is therefore still negative, and the pilot continues to dominate. In every row the staged approach is better than going all in, an illustration of a general principle: when a large irreversible commitment can be preceded by a cheap test, the test is valuable in proportion to the uncertainty it resolves and the loss it avoids.

## 8.7 Real Options

### 8.7.1 Flexibility has value

A **real option** is the right, but not the obligation, to take an action on a real asset (to expand, contract, delay, switch inputs or abandon) at a predetermined cost, within a specified time. The term was developed by analogy with financial options, whose valuation is covered in Chapter 18, and the central insight is the same: *the right to choose is valuable, and that value rises with uncertainty.* A static NPV analysis assumes that management sets the plan at the outset and never revises it. A project with embedded flexibility is worth more than that analysis shows:

```
Project value = Static (passive) NPV + Value of embedded real options
```

Different kinds of flexibility give different options.

| Option | What management can do | Financial analogue | Typical example |
|---|---|---|---|
| Delay (timing) | Wait to invest until uncertainty resolves | Call option | Waiting for a licence, a price recovery or a regulatory decision |
| Expand (growth) | Invest more if conditions prove favourable | Call option | Pilot plant with permitted capacity for a second phase |
| Abandon | Sell the assets or stop if conditions are poor | Put option | Resale value of aircraft or equipment |
| Contract/scale down | Reduce scale to save costs | Put option | Mothballing a mine in a price slump |
| Switch | Change inputs or outputs | Option to exchange | Dual-fuel power plant; flexible production line |
| Compound (staged) | Each stage creates the option to start the next | Option on an option | R&D programmes, drug trials |

### 8.7.2 Why options matter more under uncertainty

Option value comes from asymmetry: management captures the upside of favourable developments and limits the downside of unfavourable ones. The more volatile the underlying value, the more valuable the right to decide after seeing the outcome. This contradicts the instinct that uncertainty is always bad. For an inflexible commitment, higher volatility increases the risk of loss without improving the average outcome, but for a flexible project, higher volatility increases value. It also explains why firms in uncertain industries often favour modular, staged or reversible investments, accept a lower static NPV for a design that keeps options open, and why a standard NPV rule ("invest if NPV > 0") can mislead when waiting is possible.

### 8.7.3 Valuation approaches

Three approaches are common, in increasing order of sophistication.

1. **Decision-tree analysis** with probabilities and a risk-appropriate discount rate, as in Example 8.5. It is transparent but the choice of discount rate is difficult: the risk of a project with an option differs from that of the passive project.
2. **Binomial (risk-neutral) valuation.** Model the underlying value of the project as moving up or down over each period. Find the risk-neutral probability q that makes the expected return equal to the risk-free rate, compute the option's payoffs, and discount at the risk-free rate:

```
u = up factor, d = down factor, rf = risk-free rate per period
q = (1 + rf − d) / (u − d)          (risk-neutral probability of the up move)
Option value = [ q × Payoff(up) + (1 − q) × Payoff(down) ] / (1 + rf)
```

If the underlying pays out cash (so that holding the option means giving up cash flows), the expected growth in the underlying value must be reduced by the payout yield δ, and q = (1 + rf − δ − d) / (u − d). This method avoids the problem of the risky discount rate by moving the risk adjustment into the probabilities.
3. **Black-Scholes and its extensions** apply when the option is European-style, with a known expiry and continuous movement in value. The mapping is: the underlying asset price S is the present value of the cash flows from the project, the exercise price K is the investment cost, T is the time to the decision deadline, σ is the volatility of the project's value, r is the risk-free rate, and the dividend yield is the fraction of project value lost per period by waiting (the cash flows forgone or competitive erosion).

The practical limits are real. The inputs (especially σ and the "price" of the underlying, which is not traded) are hard to observe, many options are shared with competitors or interact with each other (the value of two options together is less than the sum if they are substitutes), and option thinking can become an excuse for projects that cannot pass the NPV test on merit. A fair test is whether the claimed option is real: can management actually exercise it, at the stated cost, at the stated time, and will it be rational to do so?

### 8.7.4 The option to expand

An option to expand arises when an initial investment creates the possibility of a larger follow-on investment. A first-phase plant, a market entry in one country, a licence for a new technology, or a research project all have this feature. The option has the payoff of a call: expand only if the value created exceeds the cost.

**Example 8.6 – A first-phase plant with an expansion option (amounts in $ millions).**

Kestrel's phase-one plant costs $10.0 million. The present value of its cash flows today, discounted at the appropriate rate, is $9.4 million, so the static NPV is 9.4 − 10.0 = **−$0.6 million**: on its own, the project fails. However, one year from now Kestrel has the right to spend $4.0 million to add capacity equal to 50% of the original plant's value. Over the next year the value of the original project will either rise by a factor of u = 1.40 or fall by a factor of d = 0.80. The risk-free rate is 5%.

*Step 1 – Risk-neutral probability.* q = (1 + 0.05 − 0.80) / (1.40 − 0.80) = 0.25 / 0.60 = **0.4167**.

*Step 2 – Values of the project after one year.*

```
Up state:   V = 9.4 × 1.40 = 13.16 ; expansion adds 0.50 × 13.16 = 6.58 ; cost 4.0 ; payoff = 2.58
Down state: V = 9.4 × 0.80 =  7.52 ; expansion adds 0.50 ×  7.52 = 3.76 ; cost 4.0 ; payoff = 0 (do not expand)
```

*Step 3 – Option value.*

```
Expansion option = [0.4167 × 2.58 + 0.5833 × 0] / 1.05 = 1.075 / 1.05 = $1.024 million
```

*Step 4 – Total.* The project's value with the option is the static NPV plus the option: −0.6 + 1.024 = **+$0.424 million**. The plant should be built even though its stand-alone NPV is negative: the firm is in effect paying $0.6 million for an option worth $1.024 million. The logic transfers directly to the vignette: building in phases with a reserved site can turn an unattractive all-at-once plan into an attractive one. The decision rule is not "NPV greater than zero" but "static NPV plus option value greater than zero." Note also what the example does not say: the expansion will be exercised in only one of the two states, so it will not be exercised about 58% of the time on a risk-neutral basis. The option has value precisely because the firm is not forced to expand when conditions are poor.

### 8.7.5 The option to abandon

If assets can be sold or redeployed, the firm has a floor under the project's value: it can walk away and receive the salvage value if the future looks bleak. This is a put option on the project. The option is more valuable when salvage values are high and secure, when the outcomes are uncertain, and when information arrives early enough to act on it. It is most valuable for assets with active secondary markets (trucks, aircraft, standard machinery) and least valuable for specialised assets such as a custom-built plant that has no other buyer. Note that firms often cannot costlessly abandon in practice: there are contractual obligations, severance costs and reputational damage, which should be deducted from the salvage value.

**Example 8.7 – Valuing the option to abandon with a decision tree (amounts in $ millions).**

A project requires an investment of $12.0 million today. Cash flows are uncertain: in year 1 the market reveals itself to be strong (probability 0.60) or weak (probability 0.40). If strong, the project generates $4.0 million in each of years 1 to 5. If weak, it generates $1.0 million in each of years 1 to 5. At the end of year 1, after receiving the year-1 cash flow, management has the right to abandon and sell the assets for a net $8.0 million. The cost of capital is 10%. The annuity factor for five years at 10% is 3.790787, and for four years is 3.169865.

*Without the option (commit to five years).*

```
Strong: PV = 4.0 × 3.790787 = 15.163
Weak:   PV = 1.0 × 3.790787 =  3.791
Expected PV = 0.60 × 15.163 + 0.40 × 3.791 = 9.098 + 1.516 = 10.614
NPV = 10.614 − 12.0 = −1.386
```

The project fails the NPV test.

*With the option.* In the strong state, continue. In the weak state, compare continuing with abandoning at year 1. Continuing yields years 2-5 cash flows with a value at year 1 of 1.0 × 3.169865 = 3.170, whereas abandoning yields 8.0. Abandon. The weak-state value at time 0 is therefore the year-1 cash flow plus the sale proceeds, discounted one year: (1.0 + 8.0) / 1.10 = 8.182.

```
Expected PV with option = 0.60 × 15.163 + 0.40 × 8.182 = 9.098 + 3.273 = 12.371
NPV with option = 12.371 − 12.0 = +0.371
```

*Interpretation.* The abandonment option is worth 12.371 − 10.614 = **$1.756 million**, and turns a project with NPV −$1.386 million into one with NPV +$0.371 million. The decision depends on the salvage value: the option is worth exercising in the weak state only if the salvage exceeds 3.170, and the project as a whole breaks even if the salvage value is about $6.98 million (solve 0.60 × 15.163 + 0.40 × (1.0 + S)/1.10 = 12.0 to get S ≈ 6.98). A manager considering this project should therefore ask how reliable the $8.0 million salvage estimate is, whether a buyer would exist in the weak market state (when other firms are also selling), and whether the firm can make the signal of weakness arrive early. This analysis uses subjective probabilities and a single discount rate and is therefore only an approximation; it is intended to show the logic, which is the same under a more rigorous risk-neutral approach.

### 8.7.6 The option to delay

Many investment opportunities do not expire immediately. A firm that owns a licence, a mineral claim, a patent or a site may invest now or wait. If waiting resolves uncertainty (a regulatory outcome, a commodity price, a technology standard), the firm can avoid investing in the bad states. The cost of waiting is the cash flows forgone, plus the risk that competitors will pre-empt the opportunity. The option to delay is a call option on the project, with exercise price equal to the investment cost.

The key insight is that a project with positive NPV should not necessarily be started at once. The correct rule is to invest now only if the NPV is large enough to exceed the value of waiting; otherwise the firm should wait. Said differently, the hurdle for an irreversible investment in an uncertain environment is higher than "NPV > 0": the project value must exceed the investment cost by a *premium* that compensates for the lost option. This helps explain why firms sometimes appear to sit on seemingly profitable projects in volatile markets, and why investment can fall sharply when uncertainty rises even though expected profitability does not change.

**Example 8.8 – Invest now or wait a year? (amounts in $ millions)**

A firm can build a facility costing $50.0 million. The present value of its operating cash flows is $52.0 million, so the static NPV is +$2.0 million. Over the next year, the value of the facility will either rise to 1.30 times its present level or fall to 0.80 times. If the firm waits, it forgoes a payout (the first-year cash flow) equal to 4% of project value, and the risk-free rate is 5%. Either way, the firm may invest at year 1 for the same $50.0 million.

*Step 1 – Risk-neutral probability, adjusted for the forgone payout.*

```
q = (1 + 0.05 − 0.04 − 0.80) / (1.30 − 0.80) = 0.21 / 0.50 = 0.42
```

*Step 2 – Values at year 1.*

```
Up:   V = 52.0 × 1.30 = 67.6 ; invest : payoff = 67.6 − 50.0 = 17.6
Down: V = 52.0 × 0.80 = 41.6 ; do not invest (41.6 < 50.0) : payoff = 0
```

*Step 3 – Value of waiting.* [0.42 × 17.6 + 0.58 × 0] / 1.05 = 7.392 / 1.05 = **$7.04 million**.

*Step 4 – Compare.* Investing today is worth $2.0 million; waiting is worth $7.04 million. The firm should wait, even though NPV is positive today. Investing now "kills" the option, so the opportunity cost of acting early is the $7.04 million of option value, which must be deducted from the $2.0 million of NPV, giving a net value of acting now of −$5.04 million relative to the best alternative.

*Step 5 – Where is the trigger?* Repeating the calculation for different current values of the project gives the following.

| Project value V today | NPV today (V − 50) | Value of waiting | Best action |
|---|---|---|---|
| 52.0 | 2.0 | 7.04 | Wait |
| 55.0 | 5.0 | 8.60 | Wait |
| 58.0 | 8.0 | 10.16 | Wait |
| 60.0 | 10.0 | 11.20 | Wait |
| 62.0 | 12.0 | 12.24 | Wait |
| 65.0 | 15.0 | 14.90 | Invest now |
| 70.0 | 20.0 | 19.71 | Invest now |

The two lines cross at V = 62.5, where setting V − 50 = (1.01V − 50) / 1.05 gives V = 62.5, a project value 25% above the investment cost. Below that level the firm should wait; above it, the value of the option no longer exceeds the cost of delay. The trigger of 62.5 versus the naive threshold of 50 is the "option premium" that this stylised case implies. Its size depends on volatility (a wider range of outcomes raises the premium) and on the cost of waiting (a higher forgone payout, or a faster competitor, lowers it).

### 8.7.7 Interactions and strategy

Real options are not only a valuation device but also a way of thinking about strategy. Several principles follow.

- **Design for flexibility.** Choose modular technology, reserve land or permits, and negotiate contracts with exit and extension clauses. Flexibility has a price, so the question is whether the option is worth more than its premium.
- **Resolve uncertainty cheaply.** Pilot projects, trial launches and staged capital commitments are expensive in time but inexpensive in capital, and they let the firm learn before it commits.
- **Beware of competition.** Options to wait are valuable only if they are proprietary. If a competitor can preempt, the option to delay is worth much less and the case for investing early is stronger (a game-theoretic perspective beyond this chapter).
- **Do not double count.** If the discount rate or the cash-flow forecast already includes a "flexibility premium," do not add the option value again.
- **Check exercisability.** Many "options" cited in strategy documents (e.g. "this gives us a platform for the future") are not options at all because there is no defined right, cost or time. Insist on specifying the exercise conditions.

## 8.8 Managerial Implications

### 8.8.1 A toolkit, not a single answer

Each technique in this chapter answers a different question, and a thorough capital budgeting review uses several together.

| Technique | Question answered | Main strength | Main weakness |
|---|---|---|---|
| Sensitivity analysis | Which input matters most? | Simple, directs attention and research | One variable at a time; ranges arbitrary |
| Scenario analysis | What if a coherent set of things goes wrong or right? | Captures correlated moves; tells a story | Few outcomes; subjective probabilities |
| Break-even analysis | How far can we fall before failing? | Concrete margins of safety | Single variable; threshold only |
| Monte Carlo simulation | What is the distribution of NPV? | Handles many inputs, correlation, skewness | Needs defensible distributions |
| Decision tree | What should we do at each stage? | Values information and sequential choices | Subjective probabilities; discount rate issues |
| Real options | What is flexibility worth? | Values asymmetry, staging and timing | Hard inputs; risk of over-claiming |

### 8.8.2 From analysis to action

The purpose of risk analysis is not to produce numbers for their own sake; it is to change what the firm does. Four kinds of action follow.

1. **Focus the research.** Spend the forecasting budget on the variables with the greatest effect, as sensitivity and simulation reveal. Test the price assumption, not the cost of office furniture.
2. **Reshape the project.** If a project's risk is concentrated in a variable the firm can influence, reduce it: by contracts (long-term supply and offtake agreements), by lowering fixed costs, by staging capital commitments or by pursuing partnerships.
3. **Build in options.** Prefer designs that allow expansion, abandonment and switching, and quantify what they are worth.
4. **Decide how much risk to take.** The distribution of outcomes should be compared with the firm's capacity to bear loss. A positive expected NPV with a 25% chance of a loss that would breach a debt covenant may be unacceptable, and the same project with a smaller loss exposure would be fine.

### 8.8.3 Organizational pitfalls

- **False precision.** Reporting a simulated probability of loss to one decimal place conveys more certainty than the inputs support.
- **Optimism bias and strategic misrepresentation.** Project sponsors may choose scenarios and distributions that favour approval. A review function that challenges input ranges is essential.
- **Anchoring on the base case.** Decision-makers tend to treat the base case as the expected outcome. Show the whole distribution.
- **Option inflation.** Claims of "strategic option value" can justify any project. Require an explicit exercise condition and a numerical estimate.
- **Neglect of correlation with the firm's other businesses.** A project that is risky stand-alone may reduce the firm's overall risk if its returns offset those of existing units; the reverse also holds. Portfolio effects are treated in the chapters on risk and return.
