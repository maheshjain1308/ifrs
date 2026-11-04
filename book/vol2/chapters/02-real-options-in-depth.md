# Chapter 2: Real Options Valuation in Depth

## Learning Objectives

After completing this chapter you will be able to:

- Distinguish market risk from private (technical) risk in real option problems, and explain how risk-neutral valuation, the replicating portfolio and the "twin security" assumption justify discounting each differently.
- Build and interpret a recombining binomial lattice for a real option, including calibration of up and down moves, cash-flow leakage, early exercise and the treatment of discretization error.
- Value R&D and pharmaceutical pipelines as compound options with technical-success probabilities, and compare the result with a risk-adjusted NPV (rNPV) decision tree.
- Value natural resource options (develop, defer, abandon) using convenience yields and operating leverage, and explain why the optimal trigger price lies far above the NPV breakeven price.
- Value platform and staged investments as sequential (compound) options, and analyze competitive timing with simple option games.
- Apply Monte Carlo and least-squares Monte Carlo simulation to options that lattices handle poorly, estimate project volatility from a cash flow model, and recognize the pitfalls and governance risks of real options analysis.

## Opening Vignette

*Illustrative scenario. Marrowfield Therapeutics is a fictional company.*

Marrowfield Therapeutics is a mid-sized drug developer with one promising compound entering Phase II. Its finance team has done what every textbook instructs. They have forecast the cash flows from launch six years away, discounted them at a company cost of capital of 10 percent, multiplied by the probability that the compound survives each clinical phase, and subtracted the development costs. The rNPV comes out at roughly zero: slightly negative in the base case. The CFO, Teodora Valdis, is prepared to shelve the program.

Then the head of research makes an objection that the spreadsheet cannot answer. "The model assumes we will spend the money and launch the drug no matter what we learn along the way. We will not. If Phase II fails we stop, which your tree already captures. But if Phase III succeeds and the market for this indication has shrunk, or a competitor has launched a better drug, we will not pay a quarter of a billion for a launch. And if the market has grown, we will launch bigger. Your model has probabilities for the science and nothing for the market. Doesn't that flexibility have a value?"

Teodora knows he is right, and she also knows the objection can be abused. Every project champion in the company claims that the project is "strategic," that it creates "options," and that the NPV therefore understates its worth. A valuation method that justifies anything justifies nothing. She needs to know how much the flexibility is worth, under what assumptions, which part of the value is real and which part is an artifact of generous inputs, and what evidence the board should demand.

This chapter gives her the tools. Starting from the logic of risk-neutral valuation, we build binomial lattices, then apply them to pharmaceutical pipelines, natural resource development, staged platform investments and competitive timing games. We use simulation for settings that lattices cannot handle, and we devote a full section to the ways in which real options analysis goes wrong, because a technique this powerful is also easy to misuse.

## 2.1 Foundations: Why Real Options Need More Than Black-Scholes

Volume 1, Chapter 18 introduced options and the Black-Scholes model, and Volume 1's capital budgeting chapters showed how static NPV can understate the value of projects with flexibility. This chapter assumes that background and asks the next question: how do we put numbers on flexibility when the project looks nothing like a listed stock option?

### 2.1.1 The real option analogy and its limits

A real option is the right, but not the obligation, to take a business action at a future date at a predetermined cost. The analogy to a financial call option is direct:

**Table 2.1 – Mapping real options to financial option parameters**

| Financial option parameter | Real option counterpart | Typical difficulty |
|---|---|---|
| Underlying asset price S | PV of the cash flows from the opportunity if undertaken now (gross of the investment cost) | Not traded; must be estimated from a DCF model |
| Exercise price K | Investment outlay required to exercise (launch cost, development capex) | May itself be uncertain or staged |
| Time to expiration T | Window of opportunity (patent life, lease, license, competitive window) | Often ambiguous; may be shortened by competitors |
| Volatility σ | Volatility of the percentage changes in the value of the underlying project | Must be inferred; the single most debated input |
| Risk-free rate r | Risk-free rate | Straightforward |
| Dividend yield δ | Cash-flow leakage: value lost per year by waiting (forgone profits, convenience yield, competitive erosion) | Easy to ignore; very important |

Three differences from listed options deserve emphasis. First, the underlying is not traded, so there is no market price to observe and no volatility to read from an options screen. Second, exercise often has consequences for other players (competitors respond), which Black-Scholes ignores. Third, many real options are interrelated: exercising one changes the value of another, and the joint value is not the sum of the parts. The remainder of the chapter is largely about handling these three differences.

### 2.1.2 Risk-neutral valuation and replication

The logic of option pricing does not require that investors be risk-neutral. It requires only that the option's payoff can be replicated by a portfolio of the underlying asset and risk-free borrowing. If it can, the option's value must equal the cost of the replicating portfolio, otherwise arbitrage would be possible. Cox, Ross and Rubinstein showed that this replication value can be computed by an equivalent shortcut: take expected payoffs using *risk-neutral probabilities* and discount at the risk-free rate.

In a one-period binomial setting with up factor u, down factor d, and risk-free gross return R = 1 + r, the risk-neutral probability of the up move is

```
q = (R − d) / (u − d)
```

and the value of a claim with payoffs Cu and Cd is

```
C = [q · Cu + (1 − q) · Cd] / R
```

If the underlying pays a continuous leakage yield δ, the risk-neutral drift is r − δ, and q becomes (e^((r−δ)Δt) − d)/(u − d). The probability q is not a forecast. It is a pricing device that absorbs the market's risk aversion into the probabilities, which is why discounting at r is then correct. Applied to a project, it means we do not need the project's risk-adjusted discount rate to value the option on it: once the value of the underlying project is taken as given, the option is valued by replication.

### 2.1.3 The twin security assumption and the marketed asset disclaimer

Replication needs a traded asset that moves with the project's value. Copeland and Antikarov proposed the marketed asset disclaimer (MAD): take the project's own present value without flexibility as the best unbiased estimate of its market value and as its own twin, estimating volatility from the simulated variability of that value. The assumption is strong and only as good as the DCF behind it. When a genuine twin exists, such as a commodity with liquid futures, prefer it: natural resources are the best case and pure R&D the worst.

### 2.1.4 Two kinds of uncertainty

The most important conceptual step in this chapter is separating the two kinds of uncertainty that real projects face.

**Market (systematic) uncertainty.** Commodity prices, demand levels, interest rates and the prices of competing products move with the economy and are correlated with the market portfolio. Investors demand compensation for bearing them, so they must be priced by risk-neutral valuation. A lattice for the underlying value captures this kind of risk.

**Private (technical, idiosyncratic) uncertainty.** Whether a compound passes Phase II, whether an exploration well strikes oil, whether an engineering prototype works: these outcomes are largely uncorrelated with the market, can be diversified by investors, and command no risk premium. They enter the valuation as ordinary probabilities, with cash flows weighted by the probability of the outcome and discounted at the risk-free rate (or, equivalently, at the rate appropriate to the market-risk component).

The practical rule: use risk-neutral probabilities for market risk, and real-world probabilities for private risk, in the same model. Many errors in pharma valuation arise from blending the two, for instance by applying a high discount rate to cash flows that have already been probability-weighted for technical risk, thereby penalizing the same uncertainty twice.

## 2.2 Binomial Lattices in Depth

The binomial lattice is the workhorse of real options analysis because it handles early exercise, changing costs, staged decisions and non-standard payoffs, all of which Black-Scholes cannot, and because it is transparent: each node answers the question "what would we do here, and what is it worth?"

### 2.2.1 Building the lattice

For an underlying value S following a geometric process with volatility σ over a time step Δt, the Cox-Ross-Rubinstein calibration uses

```
u = e^(σ√Δt)      d = 1/u = e^(−σ√Δt)
q = (e^((r − δ)Δt) − d) / (u − d)
discount factor per step = e^(−rΔt)
```

The recombining property (an up move followed by a down move equals a down move followed by an up move) keeps the number of nodes at step i equal to i + 1, so that a 1,000-step lattice has only about half a million nodes and runs instantly on a computer. The algorithm is backward induction:

1. At the final date, compute the payoff at each node.
2. Step back one date. At each node compute the continuation value, [q · V(up) + (1 − q) · V(down)] · e^(−rΔt).
3. Compare the continuation value with the value of exercising now (for an American-style option). Take the larger.
4. Repeat until the first node. That value is the option value today.

A strength of the lattice is that step 3 provides a decision rule as a by-product: the set of nodes at which exercise is optimal is the exercise boundary, the policy the firm should follow.

### 2.2.2 Discretization error and convergence

A lattice with few steps is a crude approximation, and values converge with a saw-tooth pattern as steps increase. Run several step counts, report the converged value, and for discrete decision dates (stage gates at year-ends) set the steps so that decision dates coincide with lattice dates.

### 2.2.3 Cash-flow leakage

Waiting is not free. If the project would generate cash flows now that are forgone by waiting, or competitors may preempt, or the patent clock is running, the underlying "pays a dividend." In the lattice, the leakage rate δ reduces the risk-neutral drift and makes early exercise attractive. For a real option, δ is often the most influential input after σ: with δ = 0 a call option on a non-dividend-paying asset is never exercised early, whereas with a positive δ it may be optimal to invest as soon as the value is high enough.

**Example 2.1 – Option to defer an investment: three-step lattice.** Aldermoor Industrial, a fictional firm, can build a plant that costs I = 110. The present value of the plant's operating cash flows is S0 = 100, so the NPV of investing now is −10 and a static analysis says reject. The firm holds a license that lets it invest at any time in the next three years. The volatility of the plant's value is σ = 30%, the risk-free rate is r = 5%, and the value leaks at δ = 4% a year (forgone early profits and expected competitive entry). Value the option to wait.

*Step 1: Calibrate the lattice (annual steps).*

```
u = e^0.30 = 1.34986      d = 1/u = 0.74082
q = (e^(0.05 − 0.04) − 0.74082) / (1.34986 − 0.74082)
  = (1.01005 − 0.74082) / 0.60904 = 0.44206
discount factor = e^(−0.05) = 0.95123
```

*Step 2: Project values.*

| Year | Node values of S |
|---|---|
| 0 | 100.00 |
| 1 | 74.08, 134.99 |
| 2 | 54.88, 100.00, 182.21 |
| 3 | 40.66, 74.08, 134.99, 245.96 |

*Step 3: Terminal payoffs, max(S − 110, 0).* At year 3: 0, 0, 24.99, 135.96.

*Step 4: Roll back, comparing continuation with immediate exercise.* At year 2, node S = 182.21: continuation = 0.95123 × [0.44206 × 135.96 + 0.55794 × 24.99] = 0.95123 × [60.10 + 13.94] = 70.43; immediate exercise = 182.21 − 110 = 72.21. Exercise is better, so the node value is 72.21: this is early exercise driven by the leakage. At year 2, node S = 100: continuation = 0.95123 × [0.44206 × 24.99 + 0.55794 × 0] = 10.51; exercise value 0, so the value is 10.51. The lowest node is worthless. At year 1, S = 134.99: continuation = 0.95123 × [0.44206 × 72.21 + 0.55794 × 10.51] = 0.95123 × [31.92 + 5.86] = 35.94; exercise = 24.99; the option is worth more alive: 35.94. At year 1, S = 74.08: continuation = 0.95123 × [0.44206 × 10.51 + 0] = 4.42. At year 0: 0.95123 × [0.44206 × 35.94 + 0.55794 × 4.42] = 0.95123 × [15.89 + 2.47] = 17.46; immediate exercise is −10, so the option is worth 17.46.

*Step 5: Convergence.* The three-step value of 17.46 is a coarse estimate. Re-running with more steps gives 16.44 (6 steps), 16.49 (12), 16.33 (50), 16.27 (200) and 16.25 (1,000). The converged value is about 16.25, so the three-step answer overstates by about 7 percent. The qualitative conclusion is stable: a plant with NPV of −10 is part of a license worth about 16.3.

*Step 6: Interpret.* The decision rule from the lattice is: do not invest now, and invest early only if the plant value rises well above the cost (at year 2, node S = 182.21, where the NPV is 72.21). The option value of 16.25 is the maximum the firm should pay for the license, and also a fair measure of what is lost if a competitor preempts the opportunity.

**Takeaway.** The option value is the product of volatility, time and the cost of waiting. Remove any of the three and the value shrinks; with σ = 0 the value is zero because the NPV is negative and nothing will change.

### 2.2.4 Calibrating volatility

Choosing σ is the central judgment call. The main methods are a market proxy (unlevered equity volatility of pure-play comparables, which measures firm rather than project risk), commodity volatility scaled by operating leverage (Section 2.4), simulation of project value (Copeland-Antikarov; Section 2.7) and scenario analysis. All are noisy, so the honest practice is to show value at low, base and high σ and ask whether the decision survives. If the case rests on a volatility no one can defend, it is a bet on the estimate rather than on the project.

## 2.3 R&D and Pharmaceutical Pipelines

Pharmaceutical development is the textbook case for real options because it combines staged investment, high technical risk, and large commercial upside whose size is uncertain until launch. The structure is a sequence of gates: Phase I, Phase II, Phase III, regulatory filing, launch. At each gate management can abandon, continue or (occasionally) accelerate. A decision tree already captures one part of this flexibility: abandonment after a failed trial. What it usually omits is the second part: the flexibility to respond to *market* information that arrives while the science is progressing.

### 2.3.1 Risk-adjusted NPV (rNPV): the industry baseline

The standard approach in pharma and biotech is rNPV. For each stage it computes the probability that the program reaches that stage, multiplies the costs and revenues by those probabilities, and discounts. Costs at a later stage are incurred only if the program survives to it; revenues occur only after launch. The probabilities are phase transition rates that companies estimate from their own history and from industry studies; this chapter uses illustrative values, not statistics for any particular therapeutic area.

**Example 2.2 – rNPV of a four-stage program.** Marrowfield's compound has the following profile (all figures in millions, illustrative):

**Table 2.2 – Marrowfield development plan**

| Stage | Timing of cost | Cost | Probability of success | Cumulative probability of reaching next stage |
|---|---|---|---|---|
| Phase I | t = 0 | 20 | 60% | 0.600 |
| Phase II | t = 1 | 50 | 35% | 0.210 |
| Phase III | t = 3 | 150 | 60% | 0.126 |
| Filing and approval | t = 5 | 10 | 90% | 0.1134 |

If the drug is approved, it launches at t = 6, and the expected net value of commercial cash flows at launch (after launch costs) is 1,100. The discount rate is 10%.

*Step 1: Probability-weighted costs and discounting.* A cost is paid only if the program has survived to that date:

```
Phase I:    20 × 1.000 / 1.10^0 = 20.00
Phase II:   50 × 0.600 / 1.10^1 = 27.27
Phase III: 150 × 0.210 / 1.10^3 = 23.67
Filing:     10 × 0.126 / 1.10^5 =  0.78
Total PV of expected costs      = 71.72
```

*Step 2: Probability-weighted commercial value.*

```
1,100 × 0.1134 / 1.10^6 = 124.74 / 1.771561 = 70.41
```

*Step 3: rNPV.*

```
rNPV = 70.41 − 71.72 = −1.31
```

For contrast, the unrisked NPV that ignores technical failure is −20 − 50/1.1 − 150/1.1³ − 10/1.1⁵ + 1,100/1.1⁶ = 436.56. Technical risk, not discounting, is what destroys the value: the program has only an 11.3 percent chance of reaching the market.

*Step 4: Interpret.* The rNPV is marginally negative. A launch value of 1,120.5 would bring it to zero. Taken at face value, Marrowfield should shelve the compound. But note what the calculation assumes: the net launch value of 1,100 is a single number, and the firm launches in every approved scenario, whatever the market looks like. This is the gap the real options approach fills.

### 2.3.2 Where rNPV and real options differ

rNPV has strengths: it is simple, it uses firm-specific technical probabilities, and it respects the staged abandonment option implicitly. Its weaknesses are the ones the vignette identified:

1. **A single discount rate for everything.** A 10 percent rate is applied to costs, which are nearly certain, and to revenues, which are very uncertain. Costs should be discounted at close to the risk-free rate; applying a high rate to costs understates their burden. Revenues deserve a rate tied to market risk, not to the technical risk already handled by the probabilities.
2. **Static commercial value.** The launch value is one number, so no distinction is made between a market that has grown and one that has shrunk. Launch is assumed to occur whatever the value.
3. **No value for market information.** The program takes six years. During this time, competitor results, reimbursement policy and epidemiology change, and management can respond.

### 2.3.3 The compound option structure

The program is a *compound option*: an option on an option on an option. Paying the Phase I cost buys the right to pay the Phase II cost, which buys the right to pay the Phase III cost, and so on, until the last right is the right to launch by paying the launch cost I in return for the commercial value V. Geske derived a closed form for a compound option with two stages. For more stages, with mixed market and technical risk, the lattice is the practical tool.

The valuation uses both types of uncertainty from Section 2.1.4:

- **Market uncertainty** is carried by the lattice for the value V of the commercial opportunity, with risk-neutral probabilities and discounting at the risk-free rate.
- **Technical uncertainty** enters at the gates through ordinary probabilities: at the end of each phase, the node value is multiplied by the probability of success, and the next phase cost is paid only if the continuation is worth more than its cost.

**Example 2.3 – Marrowfield as a compound option on a lattice.** Use the same program, but model the commercial opportunity explicitly. The market value today of the gross commercial opportunity, the present value of launch-phase cash flows before the launch investment, is V0 = 900. (This corresponds to an expected gross value at launch of 1,400 if growth is at an annual rate of 7.6%, a rate reflecting only the market risk of commercial cash flows; the 10% used in Example 2.2 also tried to cover technical risk, which the probabilities already cover.) The launch investment is I = 300 at t = 6, so the net expected launch value is 1,100 as in Example 2.2. Market volatility is σ = 40%, and the risk-free rate is 4%. Annual lattice steps with six periods. The gates are:

- t = 0: pay 20 to start Phase I (decision).
- t = 1: Phase I succeeds with probability 0.60; if so, decide whether to pay 50 for Phase II.
- t = 3: Phase II succeeds with probability 0.35; if so, decide whether to pay 150 for Phase III.
- t = 5: Phase III succeeds with probability 0.60; if so, decide whether to pay 10 for filing.
- t = 6: approval with probability 0.90; then decide whether to launch: payoff max(V6 − 300, 0).

*Step 1: Calibrate.*

```
u = e^0.40 = 1.49182      d = 0.67032
q = (e^0.04 − 0.67032) / (1.49182 − 0.67032) = (1.04081 − 0.67032) / 0.82150 = 0.45099
```

*Step 2: Terminal values at t = 6.* The lattice at t = 6 ranges from V6 = 900 × d⁶ ≈ 82 to 900 × u⁶ ≈ 9,918. The payoff at each node is 0.90 × max(V6 − 300, 0).

*Step 3: Roll back with gate decisions.* Between gates, node values are discounted risk-neutral expectations. At each gate the node value is multiplied by the success probability and the next phase cost is paid only if continuation exceeds that cost. For instance, at t = 5 the five of the six nodes whose continuation is above 10 pay the filing cost; at t = 3 the lowest node, V3 = 900 × d³ = 271, is abandoned; at t = 1, the down node (V1 = 603.3) is abandoned because its continuation value is less than the Phase II cost of 50, while the up node (V1 = 1,342.6) continues with a probability-weighted value of 64.80.

*Step 4: Value today.* The value at the first node is

```
Value = −20 + e^(−0.04) × [0.45099 × 64.80 + 0.54901 × 0] = −20 + 0.96079 × 29.22 = 8.08
```

Marrowfield's compound is worth +8.08 under the lattice, against −2.49 if the firm were committed to all stages and the launch (the corresponding "static" value in this framework), and against a marginally negative rNPV of −1.31.

*Step 5: Where does the 10.6 of option value come from?* Decompose by switching off flexibility:

**Table 2.3 – Decomposing the option value (σ = 40%)**

| Case | Abandon at technical gates? | Launch only if profitable? | Value |
|---|---|---|---|
| Fully committed | No | No | −2.49 |
| Launch option only | No | Yes | −0.54 |
| Gate abandonment only | Yes | No | 7.95 |
| Full flexibility | Yes | Yes | 8.08 |

Almost all of the option value comes from the *gates*, not from the final launch option. This makes sense: the gates give the firm the right to stop spending after bad news (bad commercial news as well as bad science), while the launch decision matters only in a narrow range, because the launch payoff has only an 11.3% chance of being reached. The distinction is useful for management: the important flexibility to preserve is the ability to stop after each phase, which implies preserving contract terms (no minimum commitments to manufacturers or partners) that keep gates free.

*Step 6: Sensitivity to volatility.* The commercial volatility is not observable. Value as a function of σ:

**Table 2.4 – Compound option value versus market volatility**

| σ | Fully committed | Launch option only | Full flexibility |
|---|---|---|---|
| 30% | −2.49 | −2.01 | 3.59 |
| 40% | −2.49 | −0.54 | 8.08 |
| 50% | −2.49 | 1.09 | 12.58 |
| 60% | −2.49 | 3.56 | 17.36 |

The committed value is independent of σ because, without flexibility, payoffs are linear in V and the expected value under risk-neutral probabilities does not depend on dispersion. Flexibility is what converts volatility into value. At σ = 25% the full flexibility value falls to 1.45, and at σ = 20% or below it is zero (the program is not started at all), so the decision to proceed depends on a volatility estimate that no one can verify. The right conclusion for Teodora's board is not "the program is worth 8.08" but "the program is worth between roughly 4 and 17 under volatilities between 30 and 60 percent, and nothing if the commercial market is as stable as 20 percent volatility implies; and the value arises mainly from the right to stop after each gate."

### 2.3.4 Managerial implications for pipelines

Value the gates, not the program: at each gate the question is whether continuation value exceeds the next cost. Anything that raises the cost of stopping (manufacturing commitments, minimum purchase contracts, hiring ahead of evidence) destroys option value. Low-cost experiments that resolve uncertainty before a large commitment are worth more than their direct NPV. Licensing a compound early sells the option, so the price should be compared with the option value, not with the rNPV; a partner with a lower cost of capital or better commercial capabilities may value the same option higher, which creates room for a deal. Finally, technical risk diversifies across independent programs but shared commercial uncertainty does not.

## 2.4 Natural Resource Options

Mining, oil and gas, forestry and agriculture were the first home of real options theory (Brennan and Schwartz, and Paddock, Siegel and Smith, are the classic references) for two reasons. The underlying has a traded price that supplies a volatility estimate and, through futures markets, a risk-neutral drift. And the managerial options are plain: an owner of an undeveloped reserve can wait, develop, expand, curtail, temporarily close or abandon, depending on the price.

### 2.4.1 Convenience yield and the risk-neutral drift

A commodity owner receives a benefit from holding the physical good that a futures holder does not: the ability to keep production running, to avoid stock-outs and to profit from temporary shortages. This is the *convenience yield*, δ. It is analogous to a dividend, and it determines the slope of the futures curve. In the risk-neutral world, the spot price of a commodity grows at r − δ, and the futures price for delivery in τ years is F(τ) = S × e^((r − δ)τ). If the futures curve is downward-sloping (backwardation), δ exceeds r; if upward-sloping (contango), δ is below r. Extracting δ from the futures curve is therefore a market-based calibration: it gives the risk-neutral drift without requiring any view about the expected price.

For an undeveloped reserve, δ plays a second role. The opportunity to produce the commodity is the underlying of the development option, and its value decays at a rate linked to δ because waiting delays cash flows that depend on the price. A high convenience yield makes waiting costly and favors earlier development.

### 2.4.2 Valuing the developed mine

If the mine, once developed, produces Q units a year for N years at a unit extraction cost c, and costs are fixed in nominal terms, then under risk-neutral valuation the value of the developed mine at spot price S is

```
V(S) = Σ(τ=1..N) e^(−rτ) × Q × [ S·e^((r−δ)τ) − c ]
     = Q × [ S × A_δ − c × A_r ]
where A_δ = Σ e^(−δτ),  A_r = Σ e^(−rτ)
```

The expression separates into a price-sensitive term and a cost term. Two consequences matter. First, the *operating leverage* of the mine is the ratio of the price-sensitive term to the net value, which amplifies price volatility into value volatility. Second, the fixed-cost term means that V can be small or negative even when S is substantially above zero: the mine is a levered long position in the commodity.

**Example 2.4 – When to develop an undeveloped copper deposit.** Redstone Mining, a fictional company, holds a deposit that can produce Q = 60 million pounds of copper a year for N = 10 years once developed, at a unit cost of c = 1.80 per pound (constant). Developing costs I = 650 million, paid at the time of development. The spot price is S0 = 3.00 per pound, with volatility 25%, a convenience yield δ = 4% (derived from the futures curve) and a risk-free rate r = 5%. The development license expires in T = 3 years. All values in millions.

*Step 1: Annuity factors.*

```
A_δ = Σ e^(−0.04τ), τ = 1..10 = 8.0783
A_r = Σ e^(−0.05τ), τ = 1..10 = 7.6743
```

*Step 2: Developed value and NPV now.*

```
V(3.00) = 60 × (3.00 × 8.0783 − 1.80 × 7.6743) = 60 × (24.235 − 13.814) = 625.26
NPV now = 625.26 − 650 = −24.74
```

Static NPV says reject. The NPV breakeven price is S* = (650/60 + 1.80 × 7.6743)/8.0783 = (10.833 + 13.814)/8.0783 = 3.05 per pound.

*Step 3: Operating leverage.* The elasticity of V with respect to S is 60 × 3.00 × 8.0783 / 625.26 = 2.33. So a 25% price volatility becomes about 2.33 × 25% = 58% volatility in the value of the developed mine, which is the effective volatility the option is exposed to.

*Step 4: American option to develop within three years (lattice).* With quarterly steps (n = 12): Δt = 0.25, u = e^(0.25 × √0.25) = e^0.125 = 1.1331, d = 0.8825, and the risk-neutral probability is q = (e^((0.05 − 0.04) × 0.25) − 0.8825) / (1.1331 − 0.8825) = (1.0025 − 0.8825)/0.2506 = 0.479. At each node the mine value V(S) − I is compared with continuation. The lattice gives:

```
n = 3:    250.06
n = 6:    226.43
n = 12:   230.13
n = 36:   232.22
n = 300:  232.69
```

The converged option value is 232.7 against an NPV of −24.7. Even though the project is under water at today's prices, the right to develop is worth about 37% of the developed mine's value.

*Step 5: The exercise trigger.* Find the lowest spot price at which exercising today beats waiting. Solving the lattice numerically gives S ≈ 5.96 per pound, nearly twice the NPV breakeven of 3.05. In other words, Redstone should not develop at 3.50, where the NPV is +217.6, because the option value at 3.50 is 381.2, well above the NPV. Only above roughly 5.96 does the cost of waiting exceed the value of waiting.

*Step 6: Sensitivity.*

**Table 2.5 – Redstone development option: sensitivities (base: S = 3.00, σ = 25%, δ = 4%, I = 650, T = 3)**

| Variable | Value of variable | Option value | Comment |
|---|---|---|---|
| Price volatility σ | 15% | 142.6 | Value falls but remains positive |
| | 25% (base) | 232.7 | |
| | 40% | 365.0 | |
| Convenience yield δ | 0% | 604.7 | Waiting is costless; value skyrockets |
| | 4% (base) | 232.7 | |
| | 8% | 73.3 | Waiting is very costly |
| Development cost I | 550 | 273.5 | Cheaper exercise raises value |
| | 850 | 167.0 | |
| Option life T | 1 year | 135.2 | |
| | 3 years (base) | 232.7 | |
| | 5 years | 289.9 | Longer window, higher value |

*Step 7: Interpret.* Three things are visible. The option value is highly sensitive to the convenience yield: δ is observed (from futures) and should be taken seriously, because a mine owner who ignores it will overvalue waiting. The value rises with the volatility of the commodity, an uncomfortable conclusion for the risk-averse manager but a correct one for the owner of the *right* to develop, because the downside is limited to forgoing development. And the exercise trigger shows why mining companies sit on large undeveloped reserves through periods in which a naive NPV would say develop; the opposite, rushing to develop when prices are only moderately above breakeven, destroys option value.

**Takeaway.** The correct investment rule is "develop when the price rises above the trigger," not "develop when the NPV is positive."

### 2.4.3 Other natural resource options and cautions

The same logic covers temporary shutdown and reopening (optimal policy has a hysteresis band: a mine shuts below variable cost and restarts only well above it, because switching costs money), abandonment (a put on project value), modular expansion (a series of calls) and exploration (a staged, pharma-style structure feeding the development option). Two cautions apply. Convenience yield and volatility change over time, and spot-based volatility reflects short-term noise that does not apply to long-dated cash flows. And costs often correlate with prices (high prices raise input costs), which dampens effective operating leverage. A defensible valuation tests mean-reverting price processes and cost correlation before concluding that waiting is valuable.

## 2.5 Platform and Staged Investments

Many strategic investments are not single decisions. A company enters a new market with a pilot; if the pilot succeeds, it builds regional capacity; if the region succeeds, it scales nationally. Each step is small relative to the whole, buys information and keeps the next option alive. These are *platform investments* or *staged expansions*, and they are the situation in which "strategic value" claims are most frequent and most easily abused.

### 2.5.1 Sequential options

A sequence of stages is a compound option. Stage 1's payoff is the right to undertake stage 2, whose payoff is the right to undertake stage 3, and so on. Two properties distinguish compound options from simple ones.

1. **Interdependence.** The value of stage 2 depends on stage 3. Valuing each stage on its own and adding them up is wrong in both directions: it ignores the information flowing from earlier stages, and it ignores that later stages' exercise costs must be paid to keep the chain alive.
2. **The cost of the chain.** Each intermediate payment is a *fee for the next option*. If the fee exceeds the value of the next option in some states, management declines, which is why abandonment appears naturally in the lattice.

### 2.5.2 What makes a platform valuable

A platform is worth more than its direct NPV when uncertainty is high enough for information to matter, the initial outlay is small relative to later commitments, the stages are separable so that stopping leaves little stranded cost, and a proprietary advantage makes the follow-on rights hard to replicate. If any condition fails, the "platform" is an ordinary investment with a strategic label.

**Example 2.5 – Pilot, regional rollout and national scale-up.** Greenfield Retail, a fictional chain, can launch a convenience-store format. The decision sequence is:

- t = 0: open a pilot costing 10, which preserves the right to continue.
- t = 2: if the pilot looks promising, pay 40 for a regional rollout that preserves the right to scale.
- t = 4: pay 120 to scale nationally, receiving the national business, whose present value S follows a lognormal process with S0 = 100 today, volatility 35%, risk-free rate 5%, and no leakage.

*Step 1: Static NPV.* If the firm committed to all three payments today, the NPV is

```
100 − 10 − 40/1.05² − 120/1.05⁴ = 100 − 10 − 36.28 − 98.72 = −45.01
```

The project fails by a wide margin. A manager who accepts it as "strategic" is effectively ignoring a 45 loss.

*Step 2: The terminal option.* At t = 4 the firm will scale only if S4 > 120. Viewed from today, a European call on S with strike 120 and T = 4 (Black-Scholes with σ = 0.35, r = 0.05) is worth 28.01.

*Step 3: The stage-2 decision at t = 2.* At t = 2 the firm holds an option expiring in two years with strike 120. Its value is a Black-Scholes call on S2. The firm pays 40 to keep it only if the call is worth more than 40. Computing the call at a range of S2 values:

**Table 2.6 – The stage-2 decision at t = 2**

| S at t = 2 | Value of call (K = 120, 2 years) | Net of 40 fee | Decision |
|---|---|---|---|
| 60 | 2.20 | 0 | Stop |
| 100 | 16.37 | 0 | Stop |
| 120 | 28.49 | 0 | Stop |
| 150 | 51.02 | 11.02 | Continue |
| 200 | 95.16 | 55.16 | Continue |

The threshold is S2 = 136.02: below it the continuation is worth less than the fee. The risk-neutral probability that S2 exceeds 136.02 is 25.2% (with a real-world drift of 10% it would be 32.1%, but the probability used in pricing is the risk-neutral one).

*Step 4: Value today (lattice, 400 steps).* Discounting the stage-2 payoff back to t = 0 gives a compound option value of 10.69. Subtracting the pilot cost:

```
Platform value = 10.69 − 10 = +0.69
```

*Step 5: Compare.* Static NPV: −45.01. Platform with staged options: +0.69. The flexibility is worth about 45.7.

*Step 6: Why not 28.01?* The single call (28.01) would apply if the firm could buy the scale-up right for nothing at t = 0 and wait. The firm must instead pay 10 at t = 0 and 40 at t = 2 (when it chooses to continue) to keep the right alive. The compound option's value of 10.69 is the 28.01 call less the expected cost of the fees on the paths where the firm continues and the lost value on paths where it stops. This is the cost of the chain.

*Step 7: Sensitivity to volatility.*

**Table 2.7 – Platform value (net of pilot cost) by volatility**

| σ | Compound option value | Net of pilot (10) | Single call, K = 120, T = 4 |
|---|---|---|---|
| 20% | 2.62 | −7.38 | 16.60 |
| 30% | 7.68 | −2.32 | 24.26 |
| 35% | 10.69 | +0.69 | 28.01 |
| 45% | 17.15 | +7.15 | 35.31 |
| 55% | 23.88 | +13.88 | 42.28 |

The pilot pays for itself only if volatility is at least about 34 percent (interpolating between the 30% and 35% rows). The conclusion is a disciplined version of the "strategic" argument: the pilot is justified only if the market is uncertain enough, the staging cheap enough, and the follow-on rights credible. The analysis gives managers a specific, testable claim: under these assumptions the pilot breaks even at roughly 34% volatility. If experience in comparable markets suggests that volatility is lower, the pilot should not go ahead on option grounds.

### 2.5.3 Interacting options and the limits of additivity

When options coexist on the same underlying (for example, an option to expand and an option to abandon), their values interact. Having the abandonment right makes expansion less risky, and having the expansion right makes abandonment less likely. The combined value is less than the sum of the separate values, because exercising one option reduces the value of the other. A lattice that carries both choices at each node handles this correctly. Adding up separately computed option values overstates, and this is one of the most common sources of inflated "strategic value."

## 2.6 Option Games: Real Options with Competition

The models so far treat the investment decision as a single-agent problem against nature. In many industries, however, the value of waiting depends on what rivals do. If a rival invests first and captures the market, the value of waiting evaporates. Option games combine real options with game theory (the work of Smit and Trigeorgis is the standard reference) to analyze such situations. The core tension is a trade-off: uncertainty favors waiting to learn, but competition punishes waiting.

### 2.6.1 Structure of option games

An option game needs the following ingredients: a stochastic state (market value V), a timing choice for each player (invest or wait), payoffs that depend on whether one or both firms are in the market, and a solution concept. The most common concept is subgame-perfect Nash equilibrium: solve the last decision date first, then work backward, treating each date's decisions as a simultaneous-move game with continuation values filled in from later dates.

The payoff structure determines the type of game:

- **First-mover advantage** (the leader earns more than the follower): leads to *preemption*. Each firm wants to invest first, and competition may drive investment earlier than a monopolist would choose. The game resembles chicken or the war of attrition.
- **Second-mover advantage** (waiting to see the market is more valuable than being first): leads to *waiting equilibria*. Both firms wait, and investment is delayed.
- **Mutually destructive simultaneous entry:** neither firm wants to enter at the same moment as the other, which generates chicken-type games with several equilibria.

**Example 2.6 – A two-firm timing game.** Two firms, A and B, can each build a plant costing I = 60. The market value if the plant is in operation and the firm is alone is V; V today is 100, and next year it will be 150 (up) or 60 (down), with a risk-free rate of 5%, so the risk-neutral probability of the up move is (1.05 × 100 − 60)/(150 − 60) = 0.50. Competition reduces payoffs: if both firms are in the market at the same time, each earns 0.55 V. If one firm enters first and the other follows later, the early entrant keeps 0.70 V after the follower arrives and the follower earns 0.45 V. The decision dates are t = 0 and t = 1.

*Step 1: The last date, t = 1.* Suppose neither firm has invested.

- State up (V = 150): if both invest, each earns 0.55 × 150 − 60 = 22.5. Investing alone yields 150 − 60 = 90, so each firm has a dominant incentive to invest, and the outcome is that both invest and earn 22.5.
- State down (V = 60): even a monopolist earns 60 − 60 = 0, and duopoly gives 0.55 × 60 − 60 = −27; neither invests; payoff zero.

*Step 2: Value of the "wait–wait" outcome at t = 0.* If both wait at t = 0, each earns (0.50 × 22.5 + 0.50 × 0)/1.05 = 10.71.

*Step 3: Leader and follower values when one invests at t = 0.* Suppose firm A invests now and B waits. At t = 1, B follows only if 0.45 V − 60 > 0. In the up state, 0.45 × 150 − 60 = 7.5 > 0, so B follows and A keeps 0.70 V = 105. In the down state, B does not follow: 0.45 × 60 − 60 < 0. A is then a monopolist worth V = 60.

```
Leader (A) value = [0.5 × 105 + 0.5 × 60] / 1.05 − 60 = 82.5 / 1.05 − 60 = 78.57 − 60 = 18.57
Follower (B) value = [0.5 × 7.5 + 0.5 × 0] / 1.05 = 3.57
```

*Step 4: Both invest at t = 0.* Each earns 0.55 × 100 − 60 = −5.

*Step 5: The payoff matrix at t = 0.*

**Table 2.8 – Payoffs at t = 0 (firm A, firm B)**

| | B invests | B waits |
|---|---|---|
| **A invests** | (−5.00, −5.00) | (18.57, 3.57) |
| **A waits** | (3.57, 18.57) | (10.71, 10.71) |

*Step 6: Equilibria.* If B waits, A prefers to invest (18.57 > 10.71). If B invests, A prefers to wait (3.57 > −5). The game has two pure-strategy equilibria, (invest, wait) and (wait, invest), and a mixed-strategy equilibrium. In the mixed equilibrium each firm invests with probability q such that the other is indifferent:

```
q × (−5) + (1 − q) × 18.57 = q × 3.57 + (1 − q) × 10.71
18.57 − 23.57q = 10.71 − 7.14q  →  7.86 = 16.43q  →  q = 0.478
```

Each firm's expected value in the mixed equilibrium is 0.478 × 3.57 + 0.522 × 10.71 = 7.30, lower than the 10.71 that cooperative waiting would deliver. With probability 0.478² = 22.9% both invest simultaneously and each loses 5.

*Step 7: Compare with the single-firm benchmark.* A monopolist can invest now for an NPV of 100 − 60 = 40, or wait and earn (0.5 × 90 + 0.5 × 0)/1.05 = 42.86. The monopolist therefore waits. Competition has cut the value from about 42.9 to between 7.3 and 18.6 per firm and has created a coordination problem.

*Step 8: Sensitivity to the advantage of the first mover.* Vary the leader's retained share and the follower's share.

**Table 2.9 – Equilibrium at t = 0 for different degrees of first-mover advantage**

| Leader share / follower share | Leader value | Follower value | Wait-wait value | Equilibrium |
|---|---|---|---|---|
| 0.55 / 0.55 (no advantage) | 7.86 | 10.71 | 10.71 | Waiting is dominant: both wait |
| 0.60 / 0.50 | 11.43 | 7.14 | 10.71 | Chicken; mixed probability of investing now 5.6% |
| 0.70 / 0.45 | 18.57 | 3.57 | 10.71 | Chicken; mixed probability of investing now 47.8% |
| 0.80 / 0.40 | 40.00 | 0.00 | 10.71 | Chicken; mixed probability of investing now 85.4% |

(In the last row the follower does not find entry profitable even in the up state, since 0.40 × 150 − 60 = 0, so the leader is effectively a monopolist and keeps the whole value.)

**Takeaway.** Without competition the optimal policy is to wait. As the first-mover advantage grows, the probability that a rival invests early rises from zero to almost one, and the option to wait is destroyed. The managerial task is to assess the size of the first-mover advantage honestly. Overestimating it leads to premature, value-destroying races; underestimating it leads to being preempted.

### 2.6.2 Practical use of option games

Option games rarely yield a unique answer to impose on a manager. Their value is to identify which payoff structure (preemption or waiting) describes the industry, to price the cost of waiting under competition, and to show how commitment devices (patents, exclusive contracts, capacity announcements) shift the equilibrium. Payoff parameters are hard to estimate, equilibria are often multiple, and real competition involves signaling that stylized games omit.

## 2.7 Simulation-Based Option Valuation

Lattices are ideal when one or two state variables drive the value and decisions occur on a modest number of dates. They become unwieldy when the payoff depends on the whole *path* (cumulative production, minimum price along the way), when there are several sources of uncertainty (price, cost, demand, exchange rate), or when the stochastic process is not simple (mean reversion with jumps). Monte Carlo simulation handles all of these by generating many random scenarios and averaging discounted payoffs. Its weakness is that, in its basic form, it can only value European-style claims, because the value of waiting at a future date requires knowing the future continuation value, which a forward simulation does not provide.

### 2.7.1 Monte Carlo basics

To value a European-style option by simulation under risk-neutral valuation:

1. Simulate the state variable forward with risk-neutral drift r − δ, for example S(t + Δt) = S(t) × exp[(r − δ − σ²/2)Δt + σ√Δt × Z], with Z standard normal.
2. At expiry, compute the payoff of each path.
3. Discount the payoff at the risk-free rate and average over paths.
4. Report the standard error: SE = (sample standard deviation of discounted payoffs)/√n.

Accuracy improves only with √n: to cut the standard error by a factor of 10 requires 100 times as many paths. *Variance reduction* is therefore valuable. Antithetic variates pair each path with its mirror image (using −Z), halving the effective variance for monotone payoffs. Control variates subtract a correlated quantity with a known expectation, such as the Black-Scholes value of a similar European option. Low-discrepancy sequences (Sobol) fill the space more evenly than pseudo-random numbers.

### 2.7.2 The early-exercise problem and least-squares Monte Carlo

Real options are often American-style: the firm can invest or abandon at any time. Longstaff and Schwartz solved this with *least-squares Monte Carlo* (LSM). The algorithm works backward through the simulated paths:

1. Simulate all paths forward and record the state at each decision date.
2. At the last decision date, the payoff is the exercise value.
3. At the previous date, consider only the paths for which exercise is in the money. Regress the *discounted future cash flow along each path* on a polynomial of the current state (for example 1, S, S²). The fitted value is the estimated continuation value.
4. For each path, exercise if the immediate exercise value exceeds the fitted continuation value, and update that path's cash flow and exercise date.
5. Repeat back to date 1, then discount each path's cash flow to time zero and average.

The regression is the clever part: it estimates the conditional expectation that would otherwise require a nested simulation. LSM produces a slightly low-biased estimate (because the exercise policy is estimated and therefore suboptimal) and its accuracy depends on the number of paths and the richness of the basis functions.

**Example 2.7 – Abandonment option by LSM, checked against a lattice.** A project has present value S0 = 100 with volatility 30%, leakage δ = 3%, and risk-free rate 5%. The firm may abandon the project at any quarter-end during the next three years and receive a salvage value K = 100. This is an American put on the project value with 12 exercise dates (Bermudan). We value it three ways.

*Step 1: European benchmark.* The Black-Scholes-type value of a European put with S = 100, K = 100, T = 3, σ = 30%, r = 5%, δ = 3% is 15.65. The option can be exercised only at the end; this is a lower bound.

*Step 2: Lattice benchmark.* A binomial lattice with 1,000 steps (American, exercisable at every node) gives 16.84. With 12 steps (matching the exercise dates) it gives 16.62. The early exercise premium over the European value is therefore about 1.0 to 1.2.

*Step 3: LSM.* Simulate 100,000 paths (50,000 draws plus their antithetic mirror images) with quarterly dates, using a degree-2 polynomial of S/S0 as the regression basis, regressing only on in-the-money paths. A run with random seed 42 gives:

```
Option value = 16.75     standard error = 0.053
```

Repeating with seeds 1, 2 and 3 gives 16.67, 16.75 and 16.73, so the estimate is stable at about 16.7 ± 0.1. Using 10,000 paths (5,000 plus antithetic) gives 16.73 with a standard error of 0.170, and using 500,000 paths gives 16.72 with a standard error of 0.024, which shows the √n law in action.

*Step 4: Interpret.* The LSM, lattice and discrete-date lattice results agree to within about 0.2 (the 12-step lattice carries its own discretization error, so LSM's expected small downward bias is not visible against it), and all exceed the European value by one to one and a half. The abandonment right is worth 16.7 on a project whose present value is 100. For a manager, the useful output is not only the value but the *policy*: the regression identifies for each date the project value below which abandonment is optimal, which can be turned into a trigger for monitoring.

**Takeaway.** Use the lattice when it fits the problem, and simulate when it does not, but always benchmark the simulation against a lattice or closed form in a simplified version of the problem. If the two disagree, the simulation code is the first suspect.

### 2.7.3 Estimating project volatility by simulation

The most common use of simulation in real options practice is not to value the option directly, but to *estimate σ*. In the Copeland-Antikarov approach, the analyst builds a cash flow model with the main uncertain variables (price, volume, cost), simulates one period ahead, and computes the value of the project at time 1 *conditional on the first-period outcome*, including the first period's cash flow. The volatility is the standard deviation of the log return z = ln[(PV1 + CF1) / PV0].

**Example 2.8 – Volatility from a cash flow model with operating leverage.** A project has eight years of cash flows. Revenue in year t has expected value R_t = 200 × 1.04^t. The contribution margin is 40% of revenue, and there is a fixed cost F per year. The discount rate for the project's own cash flows is 9%. The revenue shock in year 1 is lognormal with a standard deviation of 20% and mean one, and it persists: expected revenues in years 2 to 8 are scaled by the same factor. (Taxes are ignored to keep the arithmetic visible.)

*Step 1: PV0.* With F = 30:

```
PV0 = Σ(t=1..8) [0.40 × 200 × 1.04^t − 30] / 1.09^t = 355.06
```

*Step 2: Year-1 outcome.* If the realized year-1 revenue is R1 = 208 × e^ε (where ε has mean −0.02 and standard deviation 0.20 so that the mean of e^ε is one), then

```
CF1 = 0.40 × R1 − 30
PV1 = 0.40 × R1 × 5.8269 − 30 × 5.0330
```

where 5.8269 = Σ(t=2..8) 1.04^(t−1)/1.09^(t−1) and 5.0330 = Σ(t=2..8) 1/1.09^(t−1). For the mean revenue R1 = 208, CF1 = 53.20, PV1 = 333.81, and PV1 + CF1 = 387.01, which equals PV0 × 1.09, as required by consistency.

*Step 3: Simulate.* Draw 200,000 values of ε and compute z = ln[(PV1 + CF1)/PV0] for each. The standard deviation of z is 0.3032. A first-order approximation gives (elasticity of project value to revenue) × 0.20 = 0.294, with the difference due to the nonlinearity of the logarithm.

*Step 4: Operating leverage.* Repeat for different fixed costs:

**Table 2.10 – Operating leverage and project volatility (revenue volatility 20%)**

| Fixed cost F | PV0 | Volatility of log return σ_z | Amplification vs. revenue volatility |
|---|---|---|---|
| 0 | 521.10 | 19.98% | 1.00 |
| 20 | 410.40 | 25.76% | 1.29 |
| 30 | 355.06 | 30.32% | 1.52 |
| 40 | 299.71 | 37.34% | 1.87 |

*Step 5: Interpret.* The project's value is more volatile than its revenue because fixed costs create operating leverage: each unit of revenue shock falls through to profit, but costs do not move. With F = 30 the project volatility is about 30%, which would be the σ for the lattice. An analyst who instead used the 20% revenue volatility would understate the option value substantially (compare the sensitivity tables in Sections 2.3 and 2.4). Equally, an analyst who used equity volatility from a highly levered comparable firm would overstate σ, because financial leverage is not present in the project's unlevered value.

### 2.7.4 Choosing between methods

Use closed forms (Black-Scholes, Geske) for European claims with one risk source; lattices for American exercise, stage gates and one or two risk factors, where each node is auditable; and Monte Carlo or LSM for path dependence and many uncertain variables, with a fixed seed and a benchmark against a simplified lattice.

## 2.8 Pitfalls and Governance of Real Options Analysis

Real options analysis can raise the value of almost any project, which makes it dangerous as well as powerful. The pitfalls fall into four groups.

**Conceptual pitfalls.** An option exists only if the firm holds an exclusive or protected right and is genuinely free to decline. A growth opportunity open to every competitor is not a proprietary option, and a right the firm cannot decline for contractual or political reasons is an obligation. Volatility creates value only if management can respond to it; otherwise it is merely risk. Risk can be double-counted by discounting probability-weighted cash flows at a rate that already contains a technical-risk premium, or by using risk-neutral probabilities and then discounting at a high rate. And a deferral option that ignores leakage will recommend waiting forever.

**Input pitfalls.** Option value rises with σ, so a promoter who wants a higher value picks a higher σ. Defensible practice documents the source, shows a range, and reports the break-even volatility at which the project becomes worthwhile (as in Example 2.5), turning the board's question into "is a volatility of at least 34 percent plausible for this market?" Option lives taken from patent terms or leases ignore competitors who may act sooner. Exercise costs that inflate or hide stranded costs must be modeled. And errors in the underlying DCF (inflated growth, understated reinvestment) are magnified by the option.

**Model pitfalls.** Interacting options are not additive (Section 2.5.3). Volatility usually falls as uncertainty resolves, for instance as a drug moves through trials. Geometric Brownian motion suits project values and equities but not mean-reverting commodities or jump-prone technologies. Too few lattice steps give coarse answers, and values quoted to four significant figures from inputs known to ±50 percent convey false precision.

**Governance.** Firms that use real options well document the option (who holds the right, when it expires, what it costs, what information will arrive, who decides); report static NPV and option value separately so the board sees how much of the case rests on flexibility; stress-test σ, δ, T and the underlying; record the exercise triggers the valuation implies and review actual decisions against them; build cheap flexibility into contracts (break clauses, modular designs); and keep the promoter from setting the volatility. The value of real options thinking lies at least as much in the questions it forces (what could we learn, what could we do about it, what does it cost to wait?) as in the numbers it produces.

## Case Study: Calder Biosciences and the Phase II Decision

*Illustrative case. All names and figures are fictional.*

Calder Biosciences is a small company with one asset, CBX-201, a candidate for a chronic metabolic condition that has just completed preclinical work and is ready to enter Phase II. The board is deciding whether to fund the program internally or to sell the asset to a larger company, Meridian Pharma, that has offered a one-time payment of 4 million today.

**The program.** Phase II costs 60 million now and takes two years, with a 40 percent chance of success. If it succeeds, Calder can pay 180 million at t = 2 for a three-year Phase III trial with a 55 percent chance of success at t = 5. If that succeeds, Calder pays 15 million to file, and approval at t = 6 has an 85 percent probability. After approval, Calder decides whether to launch by paying a commercialization investment of 250 million. The cumulative probability of reaching approval is 0.40 × 0.55 × 0.85 = 18.7 percent. The gross value of the commercial opportunity, defined as the present value today of the launch-phase cash flows before the 250 million investment, is estimated at 850 million, with a risk-free rate of 4 percent.

**The committee's view.** Calder's finance committee used rNPV, treating the opportunity as a fixed value and committing to every stage, and obtained a program value of −7.0 million (that is, −6.99). On this basis, it recommends accepting Meridian's offer of 4 million.

**The real options analysis.** The business development team argued that the commercial value is uncertain, that the committee's calculation commits Calder to launch in every approved scenario, and that the program can be stopped at the end of Phase II, at the end of Phase III or at launch. They built a lattice with annual steps for six years, risk-neutral probabilities for the commercial value and the technical probabilities at the gates. The volatility of the commercial value is not observable; they considered comparable biotechnology firms' unlevered volatilities (about 45 percent) but also noted that the volatility of a single drug market might be lower, around 30 percent, or higher, around 60 percent.

The results (in millions):

| Commercial volatility | Fully committed | Launch option only | Gates only | Full flexibility |
|---|---|---|---|---|
| 30% | −6.99 | −6.72 | 0.00 | 0.00 |
| 45% | −6.99 | −3.60 | 8.39 | 8.69 |
| 60% | −6.99 | −0.08 | 18.23 | 18.23 |

At 45 percent volatility the program is worth 8.7 million, more than twice Meridian's offer, and nearly all of the value comes from the gates (the right to stop after Phase II or Phase III) and not from the launch decision. At 30 percent the program is worth nothing, so Meridian's 4 million would look generous. At 60 percent it is worth 18.2 million.

**Further considerations.** The CFO notes three complications. First, the technical probabilities are Calder's own estimates, not industry statistics, and a small deviation (for instance a Phase II success probability of 0.30 instead of 0.40) changes the answer materially. Second, Calder must finance 60 million now from a cash balance of 90 million, and funding Phase III later will require new capital whose availability depends on Phase II data; the model assumes frictionless financing. Third, Meridian has a lower cost of capital and a commercial infrastructure that Calder lacks, so it may value the same asset more highly than Calder does and 4 million may simply be an opening bid.

The board must decide whether to proceed internally, accept the offer, or negotiate. The chair asks the team to return with a recommendation that explains what must be true about volatility, financing and Meridian's alternatives for each course to be right.

**Discussion Questions**

1. Explain why the committee's rNPV of −6.99 and the lattice value of 8.69 differ. Which of the committee's assumptions is replaced in the lattice, and is the replacement justified when the volatility cannot be observed?
2. The table shows that the program value is zero at 30 percent volatility and 18.2 million at 60 percent. How would you advise the board to use this range, and what evidence about volatility would you seek before the decision?
3. Nearly all of the value comes from the gates. What contractual or operational choices could Calder make to protect these gates, and what choices might destroy them?
4. Evaluate Meridian's offer of 4 million. Consider the value to Calder, the value to Meridian, the financing risk Calder bears, and how Calder might use the option analysis in negotiation, including the idea of selling a share of the program or retaining a milestone-based royalty.

## Key Takeaways

- A real option is a right, not an obligation, to take an action at a cost, and it has value only if the firm has an exclusive right, real flexibility, and uncertainty that will be at least partly resolved before the decision.
- Use risk-neutral probabilities and the risk-free rate for market risk, and ordinary probabilities for private technical risk. Never penalize the same risk twice with both a high discount rate and a probability weight.
- The binomial lattice is the practical workhorse: it handles early exercise, staged costs and gates, and it returns a decision rule (an exercise boundary) as well as a value. Always test convergence by increasing the number of steps.
- Cash-flow leakage (the cost of waiting) is as important as volatility. A deferral option analysis that sets leakage to zero will recommend waiting indefinitely.
- In pharmaceutical pipelines, rNPV captures technical failure but omits market flexibility; treating the pipeline as a compound option shows that most of the option value comes from the right to stop at each gate.
- In natural resources, operating leverage multiplies price volatility into value volatility, and the optimal development trigger can be nearly twice the NPV breakeven price.
- Platform and staged investments are compound options whose stages interact; adding up separately valued options overstates the total, and the chain of fees is a real cost.
- Option games show that competition can destroy the value of waiting: strong first-mover advantage produces preemption, weak or negative advantage produces waiting equilibria, and multiple equilibria are common.
- Monte Carlo handles path dependence and many risk factors, and least-squares Monte Carlo extends it to early exercise; always benchmark a simulation against a simple lattice or closed form, and report standard errors.
- Real options analysis requires governance: document the option, show the static NPV separately, stress-test volatility, report break-even assumptions and tie the analysis to explicit exercise triggers.

## Review Questions

1. Explain why a real option can be valued with risk-neutral probabilities even when the project's own cost of capital is unknown. What assumption makes this legitimate for a project that is not traded?
2. Distinguish market risk from private risk in a drug development program. How should each be treated in a valuation, and what error results from treating both with a single high discount rate?
3. List the real option analogues of the five Black-Scholes inputs (S, K, T, σ, δ) for an undeveloped oil field. Which are observable and which must be estimated?
4. Why can early exercise be optimal for a real call option on a project with cash-flow leakage but not for a call on a non-dividend-paying stock? Interpret the exercise boundary in managerial terms.
5. Describe the main limitations of rNPV for pharmaceutical valuation, and explain how a compound option lattice addresses them.
6. Why does the option value of the Marrowfield program come mostly from the technical gates and not from the launch option? What are the implications for contract design?
7. Explain why the optimal development trigger for a mine exceeds the NPV breakeven price. How do operating leverage and the convenience yield affect the gap?
8. What is the difference between a platform investment and an ordinary investment that is called "strategic"? List the conditions under which a platform has genuine option value.
9. In an option game with a first-mover advantage, why might competition lead firms to invest earlier than a monopolist would? What does the mixed-strategy equilibrium imply about the likelihood of simultaneous entry?
10. When would you choose least-squares Monte Carlo over a lattice? Describe what the regression step estimates and why LSM is biased low.

## Problems

**Problem 1.** A project has present value 100 and requires an investment of 105 (NPV −5). Next year the project value will be 140 or 70, with equal risk-neutral probability to be determined from a risk-free rate of 5%. The firm can wait one year and invest only if worthwhile. Find the risk-neutral probability and the value of the option to wait.

**Problem 2.** A drug candidate requires 10 now (Phase I, success probability 0.50). If successful, Phase II costs 40 at t = 1 and succeeds with probability 0.40 at t = 3, after which the product launches with a net value at launch of 600. Discount at 12% (rNPV approach) with costs paid only if the program has reached the stage. Compute the rNPV.

**Problem 3.** A mine, once developed, produces 20 million units a year for 5 years at a cost of 2.00 per unit. The spot price is 3.00, the risk-free rate is 5% and the convenience yield 3%. Development costs 110. (a) Compute the developed value V(S) = Q × [S × A_δ − c × A_r] and the NPV now. (b) Find the breakeven spot price. (c) With a one-year option to develop and annual price factors u = 1.30, d = 1/1.30, find the risk-neutral probability and the value of the option to develop in one year (exercise only at year 1, discounting at 5%).

**Problem 4.** A project is worth 100 today. In each of two periods the value rises by 25% or falls by 20%. The risk-free rate is 5% per period and there is no leakage. The firm may abandon at any date for a salvage value of 100. Compute the value of the abandonment option using a two-step lattice, and compare with the value if abandonment were possible only at the end of period 2.

**Problem 5.** A pilot project gives the right to build a full-scale plant. The plant's present value is S = 80, volatility 40%, risk-free rate 4%, no leakage. The plant costs K = 90 and the right lasts 3 years. (a) Compute the Black-Scholes value of the option and the NPV of investing today. (b) What is the hedge ratio N(d1), and what does it imply for the replicating portfolio?

**Problem 6.** Two firms face a timing game with V0 = 100, up and down values 150 and 60 at t = 1, risk-free rate 5% and investment cost 70 each. If both invest at the same date each earns 0.55 V. If one invests first and the other follows, the leader keeps 0.75 V and the follower earns 0.50 V. Compute the payoffs of leader, follower, wait-wait and invest-invest at t = 0 and find the mixed-strategy probability of investing now.

**Problem 7.** A project's value comprises a variable-margin component with present value 400 and fixed costs with present value 100, so that V = 300. Revenue volatility is 25%. Estimate the volatility of project value and explain the difference.

**Problem 8.** A Monte Carlo valuation of an option uses 40,000 paths and finds a mean discounted payoff of 18.4 with a sample standard deviation of 31.2. (a) Compute the standard error and a 95% confidence interval. (b) How many paths are required for a 95% confidence interval half-width of 0.10?

### Answers to Selected Problems

**Problem 1.** With u = 1.4 and d = 0.7, q = (1.05 − 0.7)/(1.4 − 0.7) = 0.50. Up payoff = 140 − 105 = 35; down payoff = 0. Value = 0.5 × 35 / 1.05 = 16.67, versus NPV of −5.

**Problem 2.** Costs: −10 − 0.5 × 40/1.12 = −10 − 17.86 = −27.86. Launch value: 0.5 × 0.4 × 600/1.12³ = 120/1.4049 = 85.41. rNPV = 85.41 − 27.86 = 57.56.

**Problem 3.** (a) A_δ = Σ e^(−0.03τ), τ = 1..5 = 4.5738; A_r = Σ e^(−0.05τ) = 4.3143. V(3.00) = 20 × (3.00 × 4.5738 − 2.00 × 4.3143) = 20 × (13.721 − 8.629) = 101.85; NPV = 101.85 − 110 = −8.15. (b) S* = (110/20 + 2.00 × 4.3143)/4.5738 = (5.5 + 8.629)/4.5738 = 3.09. (c) q = (e^0.02 − 0.7692)/(1.30 − 0.7692) = (1.0202 − 0.7692)/0.5308 = 0.473. Up price 3.90 gives V = 184.18 and payoff 74.18; the down price 2.31 gives V = 38.52 and payoff zero. Value = e^(−0.05) × 0.473 × 74.18 = 33.37.

**Problem 4.** q = (1.05 − 0.80)/(1.25 − 0.80) = 0.5556. Terminal values: 156.25, 100, 64; abandonment payoffs: 0, 0, 36 (salvage 100). Period-1 continuation, up node (125): 0; down node (80): 0.4444 × 36/1.05 = 15.24, versus immediate abandonment 100 − 80 = 20, so abandon: node value 20. Value today = (0.4444 × 20)/1.05 = 8.47. If abandonment is possible only at the end: continuation values 0 and 15.24 give value (0.4444 × 15.24)/1.05 = 6.45. The early-exercise premium is 2.02.

**Problem 5.** (a) d1 = [ln(80/90) + (0.04 + 0.08) × 3]/(0.4 × 1.7321) = (−0.1178 + 0.36)/0.6928 = 0.3496; d2 = 0.3496 − 0.6928 = −0.3432; N(d1) = 0.6367, N(d2) = 0.3657. C = 80 × 0.6367 − 90 × e^(−0.12) × 0.3657 = 50.93 − 29.19 = 21.74. NPV now = 80 − 90e^(−0.12) = 80 − 79.82 = 0.18. (b) The hedge ratio is 0.637: replicate the option by holding 0.637 units of the project (worth 50.93) and borrowing 29.19.

**Problem 6.** Follower enters at t = 1 in the up state only (0.50 × 150 − 70 = 5 > 0). Leader: [0.5 × 0.75 × 150 + 0.5 × 60]/1.05 − 70 = 82.14 − 70 = 12.14. Follower: 0.5 × 5/1.05 = 2.38. Wait-wait: both invest in the up state at t = 1, earning 0.55 × 150 − 70 = 12.5 each; value 0.5 × 12.5/1.05 = 5.95. Invest-invest: 0.55 × 100 − 70 = −15. Mixed probability: q = (L − W)/[(L − W) + (F − S)] = (12.14 − 5.95)/[(12.14 − 5.95) + (2.38 + 15)] = 6.19/23.57 = 0.263. Expected value in the mixed equilibrium is 5.01.

**Problem 7.** The elasticity of V to revenue is 400/300 = 1.33, so volatility is about 25% × 1.33 = 33.3%. Fixed costs create operating leverage, which amplifies the revenue volatility.

**Problem 8.** (a) SE = 31.2/√40,000 = 0.156; 95% CI = 18.4 ± 1.96 × 0.156 = [18.09, 18.71]. (b) n = (1.96 × 31.2/0.10)² ≈ 373,957, about 374,000 paths (nearly ten times as many).
