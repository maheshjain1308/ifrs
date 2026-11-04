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

To replicate, we need a traded asset (or portfolio) that moves with the project's value. Copeland and Antikarov proposed a pragmatic alternative, the marketed asset disclaimer (MAD): assume that the project's own present value without flexibility is the best unbiased estimate of its market value, and that it can serve as its own twin security. Under MAD, volatility is estimated from the simulated variability of the project's value, and the lattice is built on the project value directly. The assumption is strong, and it is only as good as the DCF behind it, but it is workable. When a genuine twin exists (for example a commodity price traded in liquid futures markets), prefer it: natural resource options are the best case, and pure R&D is the worst.

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

A lattice with few steps is a crude approximation. As the number of steps rises, the value converges to the continuous-time value, typically with a saw-tooth pattern because of how the exercise price falls relative to the nodes. A good practice is to run the lattice at several step counts and report the converged value, and to use at least a few dozen steps for any decision. For problems with discrete decision dates (Bermudan-style: stage gates at year-ends), set the steps so that decision dates coincide with lattice dates.

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

### 2.2.4 Calibrating volatility and steps

Choosing σ is the central judgment call. Four methods are in common use:

1. **Market proxy.** Use the equity volatility of pure-play comparable firms, unlevered to remove financial leverage. Quick, but it measures firm volatility, not project volatility.
2. **Commodity volatility.** For resource projects, use the volatility of the commodity price scaled by operating leverage (Section 2.4).
3. **Simulation of the project value.** Simulate the cash flow model and compute the standard deviation of the log return in project value (Copeland-Antikarov); see Section 2.7.
4. **Scenario analysis.** Convert the distribution of outcomes across scenarios to an implied volatility.

All four are noisy. The honest practice is to run a range, show the value at low, base and high σ, and ask whether the decision survives. If the investment case rests on a volatility figure that no one can defend, it is a bet on the estimate rather than on the project.
