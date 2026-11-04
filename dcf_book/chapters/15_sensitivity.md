# Chapter 15 — Sensitivity, Scenarios and Simulation

A DCF gives a number; the real question is how much that number can be trusted. This chapter covers three tools — sensitivity analysis, scenario analysis and Monte Carlo simulation — that turn a point estimate into a statement about uncertainty.

## 15.1 Why uncertainty analysis is not optional

Every input to a DCF is an estimate: growth, margins, reinvestment, WACC, terminal growth. Small errors compound — particularly in the terminal value. A valuation that reports ₹51.27 per share without saying "and the 90% range is ₹36–₹69" hides most of what a decision-maker needs to know. Uncertainty analysis also helps the valuer *prioritise research*: if the value is insensitive to an input, do not spend a week refining it.

## 15.2 One-way sensitivity (tornado analysis)

Vary one input at a time through a plausible range, holding others at base, and record the change in value. Plot the results as a *tornado chart* with the most influential inputs at the top.

**Meridian — tornado ranges (₹ per share):**

| Input | Low | High | Value at low | Value at high | Swing |
|-------|-----|------|-------------:|--------------:|------:|
| WACC | 12.25% | 10.25% | 42.4 | 62.9 | 20.5 |
| Terminal ROIC | 11.2% (= WACC) | 19% | 43.3 | 56.3 | 13.0 |
| Terminal-year EBIT margin | 13.0% | 16.0% | 46.4 | 56.2 | 9.8 |
| Terminal growth | 4.0% | 6.0% | 48.4 | 55.2 | 6.8 |
| Revenue growth FY27–31 (±2 pts every year) | −2 pts | +2 pts | 48.1 | 54.7 | 6.6 |
| Sales-to-capital (FY27–31) | 1.6 | 2.4 | 48.8 | 52.9 | 4.1 |

WACC is the largest single driver, followed by terminal ROIC and the terminal margin. Sales-to-capital and the near-term growth rate matter least — because the explicit period carries only 18% of value.

**Lesson for effort allocation:** spend time on WACC and terminal economics, not on shaving 0.5 percentage points off year-2 growth.

## 15.3 Two-way sensitivity tables

Show the interplay of two inputs — most commonly WACC × terminal growth, WACC × exit multiple, or margin × growth. Chapter 14 has WACC × g and ROIC × g tables. Present them as heat maps if possible, and *mark the base case*. A table with extreme combinations (WACC − g < 3 points) should be flagged as unreliable.

## 15.4 Break-even and goal-seek analysis

Ask: *what would have to be true for value to equal the market price (or the offer price)?* Solve for one variable at a time:

- the WACC that equates DCF value to price (implied discount rate);
- the terminal margin required;
- the growth uplift required;
- the terminal growth rate implied.

Chapter 16 develops this as the reverse DCF.

## 15.5 Scenario analysis

Scenarios change several inputs together, reflecting how the world could unfold. A good scenario has a *narrative* (what happens in the market, to costs, to competition) and *consistent numbers*.

### 15.5.1 Design principles
1. **Few and distinct.** Three scenarios (bear/base/bull) is usually enough. Five are better only if each has a distinct story.
2. **Coherent.** Margins, growth, capital intensity and terminal ROIC should tell one story. A "boom" scenario with 20% growth but unchanged capex is incoherent.
3. **Anchored.** Link scenarios to external drivers (commodity price decks, demand outcomes, regulatory events).
4. **Probabilities, if used, are judgements.** State the basis; avoid false precision (25/50/25 is a convention, not a measurement).

### 15.5.2 Meridian's scenarios

*Bear:* intense competition and commodity inflation squeeze margin; growth slows to 6–9%; capital intensity rises (sales-to-capital 1.5); terminal ROIC fades to 12%, g = 4%. Value ₹30.0 per share.

*Base:* management plan. ₹51.3.

*Bull:* successful premiumisation, export growth and new categories; growth 11–15%; margin 16%; sales-to-capital 2.2; terminal ROIC 17%. ₹67.3.

Probability weights 25/50/25 give an expected value of ₹49.95. The value per share is *not* symmetric around the base: downside ₹21 below base, upside ₹16 above. That asymmetry (downside bigger) is typical of businesses where the plan is already optimistic.

### 15.5.3 Scenario analysis vs. a higher discount rate
Some practitioners add a premium to WACC to reflect risk. Scenario analysis is superior: it separates the *expected* cash flow (probability-weighted) from the *discount rate* for systematic risk. An arbitrary add-on penalises long-dated cash flows and the terminal value disproportionately, and cannot distinguish risks that are diversifiable (should not be priced) from systematic ones.

## 15.6 Monte Carlo simulation

Monte Carlo assigns **probability distributions** to uncertain inputs, draws thousands of combinations, computes value for each, and builds a distribution of outcomes.

### 15.6.1 Steps
1. Identify the key uncertain inputs (3–8 is typical).
2. Specify a distribution for each: normal (symmetric), triangular (min/most-likely/max), lognormal (positive skew), or empirical.
3. Specify *correlations* between inputs (e.g., higher commodity prices → lower margin; higher inflation → higher WACC and higher nominal growth).
4. Run 5,000–50,000 trials.
5. Summarise: mean, median, percentiles, probability of falling below a threshold.

### 15.6.2 Meridian simulation
Inputs and distributions (illustrative):

| Input | Distribution |
|-------|--------------|
| Revenue-growth shift (all years) | Normal, mean 0, s.d. 2 pts |
| EBIT-margin shift (all years) | Normal, mean 0, s.d. 1 pt |
| Sales-to-capital | Triangular, 1.4 / 1.9 / 2.3 |
| WACC | Normal, mean 11.225%, s.d. 0.75 pts (floored at g + 3 pts) |
| Terminal growth | Triangular, 3.5% / 5.0% / 6.0% |
| Terminal ROIC | Triangular, 11% / 15% / 19% |

*Results from 10,000 trials (independent inputs; fixed random seed):*

| Statistic | Value per share (₹) |
|-----------|-------------------:|
| Mean | 50.6 |
| Median | 49.5 |
| Standard deviation | 10.3 |
| 5th percentile | 35.9 |
| 25th percentile | 43.4 |
| 75th percentile | 56.4 |
| 95th percentile | 69.2 |
| Probability value < ₹45 | 31% |

The simulation reproduces what the scenarios implied: a central value near ₹50, with a plausible range of ₹36–₹69 (90% interval). The distribution is right-skewed (mean above median) because the terminal-value formula is convex in WACC and g.

### 15.6.3 Cautions
- **Garbage in, precision out.** The shape of the output depends entirely on the input distributions, which are themselves judgements.
- **Correlation matters.** Ignoring positive correlation between growth and margin narrows the spread falsely; ignoring negative correlation between WACC and growth in a rate shock widens it.
- **Don't over-interpret tails.** Rare combinations (very low growth with very low WACC) may be economically incoherent.
- **Distributions of inputs should not be "fat" beyond the limits of the economy** — e.g., g above Rf.

Simulation complements, not replaces, scenario analysis; use scenarios for narrative, simulation for quantifying spread.

## 15.7 Decision-tree and probability-weighting

For discrete events (regulatory approval, loss of a major customer, success of a clinical trial), use a decision tree: assign probabilities to branches, compute the value under each, and take the expected value. This is the standard approach for pharma pipeline valuation and project-finance contingencies (Chapter 20).

## 15.8 Presenting results

- **Football field chart:** horizontal bars showing value ranges from each method (DCF base, DCF sensitivity, DCF scenarios, multiples, precedent transactions, 52-week range) against the market price or offer price.
- **Tornado chart:** ranking of input sensitivities.
- **Probability distribution (histogram)** with the base case marked.
- **A written statement of the conclusion**: "We estimate fair value at ₹46–58 per share; our point estimate is ₹51."

## 15.9 Common errors

1. Reporting only the base case.
2. Sensitivities with unrealistic ranges (WACC ±3 points) that make everything look insensitive or wild.
3. Varying inputs that are *linked* (e.g., growth without reinvestment) independently.
4. Treating simulation outputs as "probabilities of being right" when inputs are subjective.
5. Reporting scenario-weighted values without disclosing the weights and their rationale.

## Chapter 15 summary

- Value is uncertain; show it.
- Tornado analysis ranks drivers; two-way tables show interactions; break-evens ask what must be true.
- Scenarios give coherent stories; simulation quantifies spread.
- For Meridian: 90% interval ≈ ₹36–₹69, centre ≈ ₹50.
- WACC and terminal economics dominate; near-term growth matters least.

## Review questions

1. Why is scenario analysis better than adding a risk premium to WACC for company-specific risk?
2. What is a tornado chart and what does it tell you?
3. List four pitfalls of Monte Carlo valuation.
4. Why is a simulated DCF distribution typically right-skewed?
5. Design three coherent scenarios for a cement company.

<div class="pagebreak"></div>
