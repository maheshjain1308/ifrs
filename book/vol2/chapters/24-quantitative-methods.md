# Chapter 24: Quantitative Methods: Simulation, Optimization and Machine Learning for Corporate Finance

## Learning Objectives

- Design and interpret a Monte Carlo simulation of project value or cash flow, including the choice of stochastic drivers, the number of trials, the standard error of the estimate and simple variance-reduction techniques.
- Model correlated risks with Cholesky factorization, explain why correlation changes both the spread and the mean of outcomes, and recognize the limits of linear correlation in the tails.
- Build a stochastic forecast of prices and cash flows (random-walk and mean-reverting processes) and translate it into cash-flow-at-risk, liquidity buffers and covenant-breach probabilities.
- Formulate capital allocation as a linear, integer or convex optimization problem, interpret shadow prices, and explain why greedy rules such as "rank by profitability index" can fail.
- Apply regression and classification (OLS, ridge, logistic regression, boosted trees) to forecasting and credit decisions, evaluate them out of sample, and convert predicted probabilities into economically optimal decisions.
- Describe model risk, validation, monitoring and governance practices that make quantitative tools safe for decision-making in a finance function.

## Opening Vignette

*Illustrative scenario. Halcyon Industrial Gases is a fictional company with 14 air-separation plants, 2.1 billion in revenue, and a three-person "analytics" team inside the treasury.*

The Halcyon capital committee meets every autumn to allocate roughly 400 million across 31 proposed projects. For years the process was a spreadsheet: each project had a single base-case NPV, a profitability index, and a traffic-light sensitivity table prepared by the sponsor. The portfolio was assembled by sorting on the index until the money ran out. Three things went wrong in the same year. A cluster of projects that all depended on the same industrial customers' volumes underperformed together, so a downturn that each sensitivity table had treated as survivable became a firm-wide cash squeeze. The treasury's liquidity plan, built on a single energy-price assumption, missed the cash trough by a wide margin. And the credit control team's scorecard, which had been quietly re-fitted by a vendor, started approving customer limits that produced a spike in bad debts.

The new CFO's diagnosis is blunt: "We have been using point estimates for decisions whose value comes from uncertainty and dependence." She asks the analytics team for three things within a quarter. First, a simulation of the major projects that captures how energy prices, volumes and costs move together. Second, an optimization of the project portfolio that respects two years of budget constraints and tells the committee what an extra unit of capital is worth. Third, a disciplined review of the customer credit model with an independent validation. Her instructions end with a warning: "Anything that produces a number in a model is only as good as the assumptions behind it, so I want to see where each one can fail."

This chapter builds that toolkit in the order the team used it: Monte Carlo simulation, correlation, stochastic forecasting, optimization, machine learning, and finally the governance that keeps all of it honest. Every code listing was run, and the printed output is the real output of that code (random seeds are fixed for reproducibility). The numbers are illustrative: they illustrate method, not any real company or market.

## 24.1 Why Quantitative Methods, and What They Cannot Do

### 24.1.1 From point estimates to distributions

Volume 1 taught valuation as a deterministic exercise: forecast cash flows, discount at a risk-adjusted rate, compare to cost (Chapter 6), then adjust for risk by sensitivity and scenario analysis. These tools answer "what if this input is different?" They do not answer "what is the probability that value is destroyed?", "how do risks interact?" or "what is the best way to spend limited capital across many uncertain options?" Quantitative methods address three kinds of questions:

1. **Propagation of uncertainty (simulation).** Given distributions for inputs and a model that maps inputs to outputs, what is the distribution of outputs? This is the domain of Monte Carlo simulation.
2. **Decision under constraints (optimization).** Given objectives and constraints, which action is best, and how sensitive is the answer to the constraints? This is the domain of linear, integer and convex programming.
3. **Prediction from data (statistical and machine learning).** Given historical data, how can we forecast a quantity or classify a case (for example, will this borrower default?) accurately out of sample?

The three are complements. A simulation without an optimizer tells you the risk of a given plan but not the best plan; an optimizer fed with point estimates ignores risk; a predictive model supplies the input distributions that both need.

### 24.1.2 The discipline of modelling

A model is a deliberate simplification. Useful models are *wrong in known and bounded ways*. Three principles guide this chapter.

- **Start from the decision.** The model exists to support a specific choice (invest or not, how much liquidity to hold, whether to approve credit). If you cannot name the decision, you are not ready to build the model.
- **Prefer transparent models until complexity earns its place.** A regression with five interpretable variables that you can explain to a board is usually better than a black box that improves accuracy by one percent. We will test that claim on data in Section 24.6.
- **Distrust precision.** A simulation reporting "probability of loss 46.7 percent" does not know the probability to three digits; the inputs are not that well known. Report ranges and show which assumptions drive them.

Garbage in, garbage out is a cliché but also a quantitative fact: the output uncertainty from *model* error (wrong distribution, wrong correlation, omitted risk factors) often exceeds the *sampling* uncertainty that simulation statistics report. We return to this in Section 24.7.

## 24.2 Monte Carlo Simulation

### 24.2.1 The method in five steps

Monte Carlo simulation replaces an analytical calculation with an experiment. The procedure is:

1. **Define the output** (for example, project NPV, year-3 EBITDA, minimum cash balance).
2. **Specify the model** that links inputs to the output, usually the same cash-flow model you would use deterministically.
3. **Choose input distributions** (and their dependence), calibrated from history, market data or expert judgement.
4. **Draw N random scenarios**, compute the output in each, and store the results.
5. **Summarize** the distribution: mean, standard deviation, percentiles, probability of falling below a threshold, expected shortfall, and the standard error of those estimates.

The central statistical fact is the **standard error of the Monte Carlo mean**:

```
SE = σ / √N
```

where σ is the standard deviation of the output across trials. To halve the error you need four times as many trials; to gain one more decimal digit of accuracy, one hundred times as many. Estimates of tail probabilities converge more slowly than means, because few trials land in the tail: the standard error of an estimated probability p is `√(p(1 − p) / N)`.

### 24.2.2 Choosing and calibrating distributions

- **Normal** distributions suit quantities that can be positive or negative and are roughly symmetric (annual changes in margin). They are unsuitable for prices or volumes that cannot go below zero.
- **Lognormal** distributions suit prices, sales and asset values: the logarithm is normal, so the variable is positive and right-skewed. In a geometric Brownian motion model, `P_t = P_0 × exp[(μ − σ²/2) t + σ √t × Z]`, with Z standard normal. The `−σ²/2` term (the Itô correction) keeps the *expected* price consistent with the stated drift.
- **Triangular or PERT** distributions are practical when only a minimum, most likely and maximum are available from a manager's judgement.
- **Mean-reverting** processes suit commodity prices, margins and interest rates, which are pulled toward a long-run level (Section 24.4).
- **Empirical (bootstrap)** distributions resample historical outcomes. They avoid parametric assumptions but inherit the history's blind spots.

Calibration is the weak point. A common error is to use the volatility of a short, calm sample for a long-horizon project. Another is to use *independent* distributions where drivers co-move (Section 24.3). Always compare the simulated distribution of an easily observed quantity (say, annual revenue growth) to history as a sanity check.

### 24.2.3 A worked simulation

**Example 24.1 – Simulating a project NPV.** A project costs 100 and runs for 5 years. In year 1 the expected volume is 1.0 million units, expected price 100, expected variable cost 60 per unit, fixed costs 8 per year, straight-line depreciation (20 a year), a 25 percent tax rate and a WACC of 9 percent. Price and unit cost follow annual geometric random walks (volatilities 15 percent and 8 percent), and volume is subject to a persistent level shock (volatility 12 percent). We consider three correlation structures for the shocks. The code below runs 100,000 trials per case.

*Step 1: Deterministic benchmark.* EBITDA = 1.0 × (100 − 60) − 8 = 32. EBIT = 32 − 20 = 12. NOPAT = 12 × 0.75 = 9. FCF = 9 + 20 = 29. The 5-year annuity factor at 9 percent is 3.8897, so PV = 29 × 3.8897 = 112.8 and NPV = 112.8 − 100 = **+12.8**.

*Step 2: The simulation.*

```python
import numpy as np
rng = np.random.default_rng(42)
N, T = 100_000, 5
capex, wacc, tax = 100.0, 0.09, 0.25
vol0, price0, cost0 = 1.0, 100.0, 60.0      # million units, per unit
sig_p, sig_c, sig_v = 0.15, 0.08, 0.12      # annual vol of price, cost; volume level sd

def simulate(rho_pc, rho_pv, n=N, seed=42):
    rng = np.random.default_rng(seed)
    corr = np.array([[1, rho_pc, rho_pv],
                     [rho_pc, 1, 0.0],
                     [rho_pv, 0.0, 1]])
    L = np.linalg.cholesky(corr)
    z = rng.standard_normal((n, T, 3)) @ L.T      # correlated shocks, each year
    price = price0 * np.exp(np.cumsum(sig_p * z[:, :, 0] - 0.5 * sig_p**2, axis=1))
    cost  = cost0  * np.exp(np.cumsum(sig_c * z[:, :, 1] - 0.5 * sig_c**2, axis=1))
    vol_level = vol0 * np.exp(sig_v * z[:, 0, 2] - 0.5 * sig_v**2)   # persistent level
    volume = vol_level[:, None] * np.ones(T)
    ebitda = volume * (price - cost) - 8.0          # 8 fixed cost
    dep = capex / T
    fcf = (ebitda - dep) * (1 - tax) + dep
    disc = (1 + wacc) ** -np.arange(1, T + 1)
    return fcf @ disc - capex

det = sum(((1.0 * (100 - 60) - 8 - 20) * 0.75 + 20) / 1.09**t for t in range(1, 6)) - capex
print(f"Deterministic NPV: {det:.2f}")
for label, rpc, rpv in [("independent", 0.0, 0.0), ("natural hedge (rho_pc=+0.6, rho_pv=-0.4)", 0.6, -0.4), ("adverse (rho_pc=-0.3, rho_pv=+0.5)", -0.3, 0.5)]:
    npv = simulate(rpc, rpv)
    q5, q95 = np.percentile(npv, [5, 95])
    print(f"{label:42s} mean={npv.mean():7.2f} sd={npv.std():6.2f} P(NPV<0)={np.mean(npv<0):.3f} 5%={q5:7.2f} 95%={q95:7.2f} SE={npv.std()/np.sqrt(len(npv)):.3f}")
# convergence
npv = simulate(0.6, -0.4)
for n in (100, 1000, 10_000, 100_000):
    print(n, round(npv[:n].mean(), 2), round(npv[:n].std()/np.sqrt(n), 2))
```

*Output.*

```
Deterministic NPV: 12.80
independent                                mean=  12.81 sd= 68.45 P(NPV<0)=0.467 5%= -84.39 95%= 136.40 SE=0.216
natural hedge (rho_pc=+0.6, rho_pv=-0.4)   mean=  10.74 sd= 50.70 P(NPV<0)=0.457 5%= -61.18 95%= 102.27 SE=0.160
adverse (rho_pc=-0.3, rho_pv=+0.5)         mean=  15.46 sd= 79.20 P(NPV<0)=0.472 5%= -93.91 95%= 160.48 SE=0.250
100 11.94 5.6
1000 9.95 1.55
10000 10.06 0.51
100000 10.74 0.16
```

*Step 3: Reading the results.* The deterministic NPV (12.80) matches the independent-case mean (12.81), a useful check that the model is coded correctly. The distribution, however, is wide: the standard deviation is 68.5, the 5th percentile is −84.4, and the project loses money in 46.7 percent of trials, even though the point estimate is positive. The "probability of a negative NPV" is a more honest summary of the opportunity than the 12.8 mean. Because the mean is only 0.19 standard deviations above zero, the NPV is close to a coin flip with a large payoff range.

*Step 4: Standard error and convergence.* With σ = 68.45 and N = 100,000, the standard error of the mean is 68.45 / √100,000 = 0.216, matching the printed 0.216. The convergence table shows the running estimate settling as N grows (with the natural-hedge correlation structure): about 11.9 ± 5.6 at 100 trials, 9.95 ± 1.55 at 1,000, 10.06 ± 0.51 at 10,000 and 10.74 ± 0.16 at 100,000. A reader who ran only 100 trials would not even know the sign with confidence.

*Step 5: Managerial interpretation.* The decision question is not "is the NPV positive?" but "is the upside worth the downside and can we survive the downside?" The 5th percentile of −84 is nearly the entire initial investment. If the firm cannot absorb that loss, or if the downside is correlated with other exposures in the portfolio, the project should be restructured, staged or hedged even though the expected NPV is positive.

### 24.2.4 Variance reduction

Because accuracy improves only with √N, practitioners use techniques that reduce σ for a given N. The most accessible is **antithetic variates**: for each random draw Z also use −Z, so that the paired outcomes are negatively correlated and their average has lower variance. Other methods include **control variates** (adjust the estimate using a similar quantity with a known expectation), **stratified** or **Latin hypercube sampling** (force draws to cover the input space evenly), and **quasi-random (low-discrepancy) sequences**. As an illustration, the following code values a call-like payoff, an expansion option with strike 110 on an asset worth 100 with 30 percent volatility over two years, and compares plain and antithetic estimates against the closed-form Black-Scholes value (Volume 1, Chapter 18). Each configuration is estimated 200 times with 10,000 draws each, and the spread across runs is reported.

```python
import numpy as np
# Estimating E[max(S_T - K,0)] (a call-like payoff, e.g. an expansion option) with plain vs antithetic MC
from math import log, sqrt, exp, erf
S0, K, r, sig, T = 100.0, 110.0, 0.04, 0.30, 2.0
Phi = lambda x: 0.5 * (1 + erf(x / sqrt(2)))
d1 = (log(S0 / K) + (r + 0.5 * sig**2) * T) / (sig * sqrt(T)); d2 = d1 - sig * sqrt(T)
bs = S0 * Phi(d1) - K * exp(-r * T) * Phi(d2)
print("Black-Scholes value: %.4f" % bs)
def est(n, anti, seed):
    rng = np.random.default_rng(seed)
    z = rng.standard_normal(n // 2 if anti else n)
    if anti:
        z = np.concatenate([z, -z])
    ST = S0 * np.exp((r - 0.5 * sig**2) * T + sig * sqrt(T) * z)
    return exp(-r * T) * np.maximum(ST - K, 0).mean()
for anti in (False, True):
    e = np.array([est(10_000, anti, s) for s in range(200)])
    print("antithetic=%s: mean of 200 estimates %.4f, std error across runs %.4f" % (anti, e.mean(), e.std()))
```

```
Black-Scholes value: 16.1686
antithetic=False: mean of 200 estimates 16.1408, std error across runs 0.3405
antithetic=True: mean of 200 estimates 16.1450, std error across runs 0.2602
```

Both methods are unbiased (their averages are close to the exact 16.17), but the antithetic version has a standard error about 24 percent lower (0.260 versus 0.341), equivalent to a 70 percent increase in the number of trials at no extra cost. The gain depends on the payoff: monotone payoffs benefit most, and payoffs that are symmetric in Z benefit least.

### 24.2.5 Common pitfalls

Treating the output as truth (show sensitivity to the *distributional assumptions*, not just the seed); too few trials for tail statistics (a 1 percent tail probability with 10 percent relative error needs about (0.99 / 0.01) / 0.01 = 9,900 trials); ignoring management response such as closing a plant when margins turn negative (compare Chapter 23, Example 23.3); mixing real-world cash-flow simulation with risk-free discounting, or risk-neutral simulation with risk-adjusted discounting, which double-counts or omits risk; and sloppy random-number practice (unfixed seeds, reused seeds for independent processes, incorrectly built correlation).

## 24.3 Correlated Risks

### 24.3.1 Why correlation matters more than the average

Risk factors in corporations rarely move independently: input costs and product prices share an energy driver; volumes across divisions depend on the same macroeconomy; credit losses cluster in downturns. Dependence affects the *distribution* of outcomes in two ways.

First, it changes *dispersion*. For two variables X and Y with standard deviations σ_X, σ_Y and correlation ρ, the variance of a margin `M = X − Y` is:

```
Var(X − Y) = σ_X² + σ_Y² − 2 ρ σ_X σ_Y
```

Positive correlation between a price and a cost *reduces* margin variance (a natural hedge); negative correlation increases it. For a sum, the sign of the correlation term flips: `Var(X + Y) = σ_X² + σ_Y² + 2ρσ_Xσ_Y`, so positively correlated divisional profits make the sum riskier, which is why diversification across negatively or weakly correlated units reduces risk.

Second, when the model is nonlinear, dependence also changes the *mean*: `E[XY] = E[X]E[Y] + Cov(X, Y)`. In Example 24.1, the simulated mean NPV differed across correlation assumptions (12.8, 10.7 and 15.5) because revenue is the product of price and volume, and the covariance enters the expectation.

### 24.3.2 Generating correlated shocks: Cholesky factorization

To simulate correlated normal shocks from independent standard normals, factor the correlation matrix R as `R = L Lᵀ`, where L is lower-triangular (the **Cholesky factor**). Then if Z is a vector of independent N(0,1) variables, `X = L Z` has correlation matrix R. For two variables:

```
L = [ 1        0       ]       X₁ = Z₁
    [ ρ   √(1 − ρ²)    ]       X₂ = ρ Z₁ + √(1 − ρ²) Z₂
```

Check: `Var(X₂) = ρ² + (1 − ρ²) = 1`, and `Cov(X₁, X₂) = ρ`. In code, `np.linalg.cholesky(corr)` produces L, and `shocks @ L.T` applies it to a matrix of independent draws (as in the listing in Example 24.1). The correlation matrix must be positive semi-definite; estimated matrices from short or incomplete data may not be, and need repair (for instance, by shrinkage toward a structured target or by adjusting negative eigenvalues).

**Example 24.2 – How correlation changes the risk of a margin.** In Example 24.1, the first-year unit margin is `M = P − C`, with price volatility 15 (15 percent of 100) and cost volatility 4.8 (8 percent of 60). Compute the standard deviation of unit margin for three correlations between price and cost shocks and relate it to the simulated NPV spreads.

*Step 1: Independent (ρ = 0).* Var = 15² + 4.8² − 0 = 225 + 23.04 = 248.04; σ = **15.75**.

*Step 2: Cost follows price (ρ = +0.6).* Var = 248.04 − 2 × 0.6 × 15 × 4.8 = 248.04 − 86.40 = 161.64; σ = **12.71**, a reduction of 19 percent.

*Step 3: Price falls while cost does not follow (ρ = −0.3).* Var = 248.04 + 2 × 0.3 × 15 × 4.8 = 248.04 + 43.20 = 291.24; σ = **17.07**, an increase of 8 percent.

*Step 4: Link to the simulation.* In Example 24.1 the NPV standard deviations are 68.5 (independent), 50.7 (price-cost +0.6 and price-volume −0.4) and 79.2 (price-cost −0.3, price-volume +0.5). The simulation also incorporates the volume correlation and compounding across years, so the ratios are larger than the single-year margin ratios, but the ordering is identical: the cost-follows-price and offsetting-volume structure cut the NPV standard deviation by 26 percent, whereas "bad" dependence (price and volume falling together, cost not following) raises it by 16 percent. The 5th-percentile NPV moves accordingly: −61.2, −84.4 and −93.9.

*Interpretation.* A manager can sometimes change the correlation structure instead of just measuring it: indexing input-cost contracts to output price (increasing ρ_pc), choosing customers whose volumes are counter-cyclical, or using hedges whose payoffs offset the exposures. The simulation reveals which dependency is worth paying to alter.

### 24.3.3 Limits of linear correlation

Pearson correlation measures *linear* dependence in the bulk of the distribution. Two problems matter for corporate risk.

- **Tail dependence.** Variables with modest correlation in normal times can crash together in a crisis. A multivariate normal distribution has no tail dependence: extreme joint moves are assumed to be exceedingly rare. Distributions with heavier joint tails (for example, the multivariate Student-t, or a t-copula) allow extremes to cluster. The 2007-2009 financial crisis popularized the lesson that using a Gaussian copula for credit portfolios understated joint default risk; the point of principle is that the *copula* (dependence structure) is a separate modelling choice from the *marginal* distributions.
- **Unstable correlations.** Estimated correlations change with the regime and typically rise in stress. Practical safeguards: stress the correlation matrix (add 0.2 to all off-diagonals, capped), use rank correlations (Spearman, Kendall) that are robust to outliers, and run a "everything goes wrong together" scenario in addition to the statistical model.

A practical compromise for corporate finance is a **factor model**: let each risk driver depend on a small number of common factors (macro activity, energy prices, credit spreads) plus idiosyncratic noise. This yields a structured, positive-definite correlation matrix with an economic interpretation, and supports scenario design ("what if the macro factor falls two standard deviations?").

## 24.4 Stochastic Forecasting

### 24.4.1 Three families of processes

A forecast is a distribution over future paths, not a line. Which stochastic process to use depends on the economics of the variable.

**Geometric Brownian motion (random walk in logs).** Appropriate for asset values, revenues of growth businesses and, with caution, equity prices. Shocks are permanent, and uncertainty grows with the square root of time: the standard deviation of log value at horizon t is `σ√t`.

**Mean reversion (Ornstein-Uhlenbeck in logs).** Appropriate for commodity prices, margins, utilization and interest rates, where economic forces (entry, substitution, policy) push the variable back toward a long-run level. In discrete time with quarterly steps:

```
x_{t+1} = x_t + κ (m − x_t) + σ ε_{t+1},   x = ln(price),  m = ln(long-run price)
E[x_t] − m = (x_0 − m) (1 − κ)^t
```

The parameter κ is the speed of reversion; the half-life is `ln(0.5) / ln(1 − κ)` periods. For κ = 0.15 per quarter, the half-life is 4.3 quarters. Unlike a random walk, the uncertainty does not grow without bound: the long-run standard deviation of x is `σ / √(1 − (1 − κ)²)`.

**Regime-switching and jump models.** Appropriate when the world has distinct states (expansion and recession, regulated and deregulated) or when rare large events are central (a regulatory ban, a supply disruption). A two-state Markov chain with different drifts and volatilities per state, plus a jump process with intensity and size distribution, are the standard building blocks.

Forecasters must also separate **parameter uncertainty** (we do not know κ or σ exactly) from **process uncertainty** (the shocks themselves). A careful analysis samples parameters from their estimated distribution and then simulates paths for each parameter set; otherwise the resulting fan chart is too narrow.

### 24.4.2 From paths to risk measures

Once paths are simulated, corporate risk measures follow directly.

- **Cash-flow-at-risk (CFaR).** The shortfall of cash flow (or EBITDA) over a horizon relative to its expected value at a given confidence level: `CFaR_95 = E[CF] − 5th percentile of CF`. It is the corporate analogue of value-at-risk but is defined on flows, which is how a non-financial firm experiences risk.
- **Probability of breaching a covenant or liquidity floor** at any time in the horizon, computed from the *minimum* over the path rather than the end value (a path-dependent measure).
- **Liquidity buffer.** The amount of undrawn facilities and cash needed so that the probability of running out is below a tolerance, for example 1 percent over the next 12 quarters.
- **Expected shortfall.** The average outcome in the worst tail, which captures the severity of tail outcomes that a percentile ignores.

These measures link naturally to hedging decisions (Volume 1, Chapter 19) and to capital structure (Volume 1, Chapter 15): the higher the operating leverage, the greater the probability of covenant stress at a given debt level.

**Example 24.3 – Liquidity and cash-flow-at-risk for a commodity-exposed firm.** A producer sells 4.0 million units a quarter at a market price that follows a mean-reverting process in logs: current price 80, long-run price 70, κ = 0.15 per quarter, quarterly volatility σ = 6 percent. Variable cost is 40 per unit, fixed cost is 100 per quarter, capex 6 and interest 9 per quarter, opening cash 40. The firm wants a minimum cash floor of 20 and a minimum rolling four-quarter interest cover (EBITDA/interest) of 1.5x. Simulate 12 quarters with 50,000 paths.

```python
import numpy as np
rng = np.random.default_rng(7)
N, Q = 50_000, 12                 # 12 quarters
# log-price Ornstein-Uhlenbeck: x_{t+1} = x_t + k*(m - x_t) + s*eps
p0, pbar = 80.0, 70.0
k, s = 0.15, 0.06                 # quarterly reversion speed and vol
m, x = np.log(pbar), np.full(N, np.log(p0))
price = np.empty((N, Q))
for q in range(Q):
    x = x + k * (m - x) + s * rng.standard_normal(N)
    price[:, q] = np.exp(x)
units, varcost, fixed = 4.0, 40.0, 100.0           # million units per quarter; per unit; fixed per quarter
ebitda = units * (price - varcost) - fixed
capex, interest, tax_rate = 6.0, 9.0, 0.0       # simplified: pre-tax, quarterly
fcf = ebitda - capex - interest
cash = 40.0 + np.cumsum(fcf, axis=1)
min_cash = cash.min(axis=1)
print("Expected price path (q1,q4,q8,q12):", np.round(price.mean(axis=0)[[0,3,7,11]], 1))
print("Std of price (q1,q4,q8,q12):       ", np.round(price.std(axis=0)[[0,3,7,11]], 1))
print("Mean 12q cumulative FCF:", round(fcf.sum(axis=1).mean(), 1))
print("Cumulative FCF 5th/50th/95th pct:", np.round(np.percentile(fcf.sum(axis=1), [5, 50, 95]), 1))
print("P(cash < 0 at any quarter):", round(np.mean(min_cash < 0), 4))
print("P(cash < 20 at any quarter):", round(np.mean(min_cash < 20), 4))
print("Liquidity buffer needed for 95% / 99% confidence (min cash shortfall vs 20 floor):")
need = np.maximum(20 - min_cash, 0)
print(round(np.percentile(need, 95), 1), round(np.percentile(need, 99), 1))
# Cash-flow-at-risk: shortfall of 12q cumulative EBITDA versus its mean
cum = ebitda.sum(axis=1)
print("Mean cumulative EBITDA:", round(cum.mean(), 1), " 5th pct:", round(np.percentile(cum, 5), 1),
      " CFaR(95%):", round(cum.mean() - np.percentile(cum, 5), 1))
# Covenant: rolling 4-quarter EBITDA / interest at least 1.5x in every quarter from q4
ltm = np.stack([ebitda[:, i-3:i+1].sum(axis=1) for i in range(3, Q)], axis=1)
cover = ltm / (4 * interest)
print("P(LTM interest cover < 1.5x in any quarter):", round(np.mean((cover < 1.5).any(axis=1)), 4))
```

```
Expected price path (q1,q4,q8,q12): [78.5 75.4 73.  71.8]
Std of price (q1,q4,q8,q12):        [4.7 7.4 8.  8.1]
Mean 12q cumulative FCF: 267.1
Cumulative FCF 5th/50th/95th pct: [-142.3  256.9  710. ]
P(cash < 0 at any quarter): 0.131
P(cash < 20 at any quarter): 0.1563
Liquidity buffer needed for 95% / 99% confidence (min cash shortfall vs 20 floor):
127.6 271.4
Mean cumulative EBITDA: 447.1  5th pct: 37.7  CFaR(95%): 409.4
P(LTM interest cover < 1.5x in any quarter): 0.4397
```

*Step 1: Check the price process against theory.* The expected log-price after 4 quarters is `ln 70 + (ln 80 − ln 70) × 0.85⁴ = 4.2485 + 0.1335 × 0.5220 = 4.3182`, which corresponds to roughly 75.0 in log terms; the simulated mean price at quarter 4 is 75.4, a bit higher because the mean of a lognormal exceeds the exponential of the mean log (Jensen's inequality; the gap is about ½ × variance × price ≈ 0.4). By quarter 12, expected price is 71.8, approaching the long-run level 70, and the standard deviation (8.1) is flattening, as mean reversion implies.

*Step 2: Operating leverage.* At the long-run price EBITDA is 4.0 × (70 − 40) − 100 = **20 per quarter**, while the margin per unit is 30 against price volatility of about 7 to 8, so a one-standard-deviation price move (8) shifts EBITDA by 4.0 × 8 = 32, more than the whole expected EBITDA. This extreme operating leverage is why the outputs below are so dispersed.

*Step 3: Risk measures.* The 12-quarter cumulative EBITDA has a mean of 447.1 and a 5th percentile of 37.7, so **CFaR(95%) = 447.1 − 37.7 = 409.4**. The probability that cash goes negative at some point is 13.1 percent and the probability that it falls below the 20 floor is 15.6 percent. To limit the floor-breach probability to 5 percent the firm needs an additional liquidity buffer of about **127.6**, and for a 1 percent tolerance about **271.4**. The probability of breaching the interest-cover covenant at least once is 44.0 percent.

*Step 4: Interpretation.* The point forecast says "EBITDA 447 over three years, comfortably above debt service." The distribution says the firm has a one-in-seven chance of running out of cash and a four-in-ten chance of covenant stress. Management's choices are now concrete: arrange a committed facility of roughly 130 to 270, hedge part of the volume (reducing σ), renegotiate the covenant, or lower fixed costs. A hedge that fixes the price on half the volume cuts the exposure by half and converts a large share of tail outcomes into manageable ones; the simulation can be rerun with the hedge to price its benefit against its cost.

**Common mistakes in stochastic forecasting.** Using a random walk for a mean-reverting variable (overstating long-run uncertainty), or mean reversion for a variable with a structural break (understating it); calibrating volatility to a short calm window; ignoring parameter uncertainty; simulating variables independently when they share drivers; and omitting management response such as cutting capex, drawing facilities or suspending dividends, which makes the model a poor representation of actual decision-making.

## 24.5 Optimization for Capital Allocation

### 24.5.1 The structure of an optimization problem

Every optimization problem has three parts: **decision variables** (which projects, how much of each), an **objective** (maximize NPV or risk-adjusted value) and **constraints** (budgets over several years, mutual exclusivity, minimum scale, strategic requirements). Problem types matter because they determine how reliably the solution can be found:

| Type | Decision variables | Typical corporate use | Tractability |
|---|---|---|---|
| Linear program (LP) | Continuous | Divisible investments, product mix, funding mix | Very high; optimum guaranteed; shadow prices available |
| Integer / mixed-integer program (MIP) | Whole-project yes/no | Capital rationing with indivisible projects | Good for dozens to thousands of projects; can be hard in general |
| Convex program (e.g., quadratic) | Continuous | Mean-variance allocation across businesses, least-squares fitting, hedge ratios | High; local optimum is global |
| Non-convex / stochastic | Mixed | Staging with real options, sequential decisions | Needs heuristics, dynamic programming or simulation-optimization |

### 24.5.2 Capital rationing as a linear and integer program

When capital is limited, the NPV rule of Volume 1, Chapter 6 (accept all positive-NPV projects) must be replaced by the choice that maximizes total NPV subject to budgets. With binary variables `x_i ∈ {0, 1}` for each of n projects:

```
maximize   Σ_i NPV_i · x_i
subject to Σ_i Outlay_{i,t} · x_i ≤ Budget_t       for each year t
           x_i ∈ {0, 1}
```

The **LP relaxation** replaces `x_i ∈ {0,1}` by `0 ≤ x_i ≤ 1` (projects are divisible). It gives an *upper bound* on the achievable NPV and a **shadow price** (dual value) for each budget constraint, the increase in total NPV from one additional unit of budget. The shadow price is the economically correct *cost of capital for internal rationing*: a project should be accepted only if its NPV per unit of scarce budget exceeds the shadow price. When the budget is not binding the shadow price is zero, and when it is binding it equals the profitability index of the marginal project.

The popular heuristic "rank by profitability index (NPV per unit of outlay) and fund until the money runs out" is optimal only when there is a single constraint and projects are divisible. With several periods, indivisible projects, or mutually exclusive alternatives, it can leave capital unused or pick a poor combination.

**Example 24.4 – Capital rationing with two budgets.** Eight projects have the NPVs and outlays shown below (all in millions). The year-0 budget is 220 and the year-1 budget is 90.

| Project | NPV | Year-0 outlay | Year-1 outlay | PI (NPV / yr-0 outlay) |
|---|---|---|---|---|
| A | 14 | 40 | 10 | 0.350 |
| B | 22 | 65 | 20 | 0.338 |
| C | 9 | 25 | 0 | 0.360 |
| D | 31 | 90 | 30 | 0.344 |
| E | 18 | 55 | 15 | 0.327 |
| F | 12 | 30 | 25 | 0.400 |
| G | 27 | 80 | 40 | 0.338 |
| H | 7 | 20 | 5 | 0.350 |

```python
import numpy as np, itertools
from scipy.optimize import linprog, minimize
# --- Capital rationing: 8 projects, two budget years
names = list("ABCDEFGH")
npv   = np.array([14, 22, 9, 31, 18, 12, 27, 7.0])
cap0  = np.array([40, 65, 25, 90, 55, 30, 80, 20.0])    # year-0 outlay
cap1  = np.array([10, 20,  0, 30, 15, 25, 40,  5.0])    # year-1 outlay
B0, B1 = 220.0, 90.0
print("Profitability index (NPV / yr-0 outlay):", {n: round(float(v), 3) for n, v in zip(names, npv / cap0)})
# LP relaxation (projects divisible): maximize NPV
res = linprog(-npv, A_ub=[cap0, cap1], b_ub=[B0, B1], bounds=[(0, 1)] * 8, method="highs")
print("LP relaxation  NPV = %.2f" % -res.fun, " x =", np.round(res.x, 3))
print("Shadow prices (NPV per extra unit of budget): yr0 = %.4f, yr1 = %.4f" % tuple(-res.ineqlin.marginals))
# Integer solution by enumeration (2^8 = 256 combinations)
best = (0, None)
for bits in itertools.product([0, 1], repeat=8):
    x = np.array(bits)
    if x @ cap0 <= B0 and x @ cap1 <= B1 and x @ npv > best[0]:
        best = (x @ npv, bits)
sel = [n for n, b in zip(names, best[1]) if b]
print("Integer optimum NPV = %.1f, projects %s, yr0 spend = %.0f, yr1 spend = %.0f" % (best[0], sel, np.array(best[1]) @ cap0, np.array(best[1]) @ cap1))
# Greedy by PI for comparison
order = np.argsort(-(npv / cap0)); x = np.zeros(8); u0 = u1 = 0
for i in order:
    if u0 + cap0[i] <= B0 and u1 + cap1[i] <= B1: x[i] = 1; u0 += cap0[i]; u1 += cap1[i]
print("Greedy by PI: projects %s, NPV = %.1f" % ([n for n, b in zip(names, x) if b], x @ npv))
# Budget sensitivity (LP bound)
for b in (200, 220, 240):
    r = linprog(-npv, A_ub=[cap0, cap1], b_ub=[b, B1], bounds=[(0, 1)] * 8, method="highs")
    print("yr0 budget", b, "LP NPV %.2f" % -r.fun)
```

```
Profitability index (NPV / yr-0 outlay): {'A': 0.35, 'B': 0.338, 'C': 0.36, 'D': 0.344, 'E': 0.327, 'F': 0.4, 'G': 0.338, 'H': 0.35}
LP relaxation  NPV = 78.08  x = [1.    0.231 1.    1.    0.    1.    0.    1.   ]
Shadow prices (NPV per extra unit of budget): yr0 = 0.3385, yr1 = 0.0000
Integer optimum NPV = 77.0, projects ['C', 'D', 'E', 'F', 'H'], yr0 spend = 220, yr1 spend = 75
Greedy by PI: projects ['A', 'C', 'D', 'F', 'H'], NPV = 73.0
yr0 budget 200 LP NPV 71.28
yr0 budget 220 LP NPV 78.08
yr0 budget 240 LP NPV 84.85
```

*Step 1: LP relaxation.* The relaxed problem funds A, C, D, F and H fully and 23.1 percent of B, for a total NPV of **78.08**. The year-0 budget binds (40 + 25 + 90 + 30 + 20 + 0.231 × 65 = 220) while the year-1 budget does not (10 + 0 + 30 + 25 + 5 + 0.231 × 20 = 74.6 < 90). Hence the year-1 shadow price is zero and the year-0 shadow price is 0.3385, exactly the PI of the marginal project B (22 / 65).

*Step 2: Meaning of the shadow price.* Each extra unit of year-0 capital is worth 0.3385 of NPV (at the margin), so a 20 increase in the budget raises the bound from 71.28 (budget 200) to 78.08 (220) to 84.85 (240), steps of about 6.8, equal to 20 × 0.3385 as the output confirms. A manager can ask: "Is it worth raising 20 more of capital at a cost below 0.34 of NPV per unit?" If raising capital costs less than that in lost value, the budget is too tight.

*Step 3: Integer optimum.* Projects cannot be split, so enumerating the 2⁸ = 256 combinations finds the best feasible portfolio: **C, D, E, F, H**, with NPV **77.0**, year-0 spend 220 and year-1 spend 75. The LP bound is 78.08, so the integrality gap is only 1.08, or 1.4 percent.

*Step 4: The greedy rule.* Ranking by PI picks F (0.400), C (0.360), A and H (0.350), then D (0.344), giving A, C, D, F, H with NPV **73.0**: it spends only 205 of the 220 available (and cannot afford B or E in the remaining 15) and gives up 4.0 of NPV relative to the integer optimum, because it did not consider the combination E plus the rest. The optimal portfolio excludes A, a project with a higher PI than E, because E fits the budget better when combined with the others.

*Interpretation.* The optimizer gives the committee three things the spreadsheet did not: a provably best portfolio (77.0), a price of capital (0.34 per unit of year-0 budget), and a quantification of what the rule of thumb costs (4.0, about 5 percent of portfolio NPV). In practice, add constraints for mutually exclusive projects, minimum viable scale, strategic must-do investments and diversification limits, and run the optimization under simulated NPV distributions to pick a portfolio that is robust, not just optimal on point estimates.

**Caveats.** Optimizers exploit errors: if one project's NPV is overstated by an optimistic sponsor, the optimizer will pick it ("optimizer's curse"), so apply haircuts or shrinkage to sponsor forecasts and require independent review. Optimal portfolios can be unstable: small changes in inputs may change the chosen projects, so examine a range of near-optimal solutions. And NPVs derived under different risk assumptions are not comparable; make sure each project's NPV is computed at a discount rate consistent with its risk (Volume 1, Chapter 11).

### 24.5.3 Convex optimization: allocating across risky businesses

When returns are uncertain and correlated, the question is how much to allocate to each business unit, geography or technology. The mean-variance framework of Markowitz (Volume 1, Chapter 10) gives a convex quadratic problem:

```
minimize   ½ λ wᵀ Σ w − μᵀ w
subject to Σ w_i = 1,   0 ≤ w_i ≤ w_max
```

where μ is the vector of expected returns, Σ the covariance matrix (`Σ_ij = ρ_ij σ_i σ_j`), λ the risk-aversion parameter and `w_max` a concentration limit. Because the objective is convex and the constraints are linear, any local optimum found by a solver is the global optimum.

For two assets the minimum-variance weight has a closed form:

```
w₁* = (σ₂² − ρ σ₁ σ₂) / (σ₁² + σ₂² − 2 ρ σ₁ σ₂)
```

**Example 24.5 – Allocation across four business units.** A conglomerate has four units with expected returns 8, 11, 14 and 9 percent, volatilities 10, 16, 25 and 12 percent and the correlation matrix shown in the code (unit pairs 1-2: 0.3, 1-3: 0.1, 1-4: 0.4, 2-3: 0.5, 2-4: 0.2, 3-4: 0.1). Risk aversion λ = 3; no unit may exceed 50 percent of capital. The code below is the second half of the listing in Example 24.4 (it reuses the imports at the top of that listing).

```python
# --- Convex: minimum-variance allocation of a fixed capital pot across 4 business units
mu = np.array([0.08, 0.11, 0.14, 0.09])
sd = np.array([0.10, 0.16, 0.25, 0.12])
C = np.array([[1, .3, .1, .4], [.3, 1, .5, .2], [.1, .5, 1, .1], [.4, .2, .1, 1]])
S = np.outer(sd, sd) * C
lam = 3.0   # risk aversion
obj = lambda w: 0.5 * lam * w @ S @ w - mu @ w
cons = [{"type": "eq", "fun": lambda w: w.sum() - 1}]
r = minimize(obj, np.full(4, .25), bounds=[(0, 0.5)] * 4, constraints=cons, method="SLSQP")
w = r.x
print("Mean-variance weights (max 50% per unit):", np.round(w, 3))
print("Expected return %.4f, risk %.4f" % (mu @ w, np.sqrt(w @ S @ w)))
r2 = minimize(lambda w: w @ S @ w, np.full(4, .25), bounds=[(0, 0.5)] * 4, constraints=cons, method="SLSQP")
print("Min-variance weights:", np.round(r2.x, 3), "return %.4f risk %.4f" % (mu @ r2.x, np.sqrt(r2.x @ S @ r2.x)))
print("Equal weights: return %.4f risk %.4f" % (mu @ np.full(4, .25), np.sqrt(np.full(4, .25) @ S @ np.full(4, .25))))
```

```
Mean-variance weights (max 50% per unit): [0.059 0.263 0.285 0.393]
Expected return 0.1089, risk 0.1185
Min-variance weights: [0.5   0.099 0.055 0.346] return 0.0897 risk 0.0868
Equal weights: return 0.1050 risk 0.1091
```

*Step 1: Maximum-utility portfolio.* The solver allocates 5.9 percent, 26.3 percent, 28.5 percent and 39.3 percent to units 1 to 4, for an expected return of 10.89 percent and risk of 11.85 percent. The highest-return unit (unit 3, 14 percent, but 25 percent volatility) gets only 28.5 percent: the model trades return against risk and correlation. Unit 4 gets the largest weight, 39.3 percent, because it combines moderate return, low volatility and low correlation with units 2 and 3.

*Step 2: Compare with alternatives.* The minimum-variance portfolio holds 50 percent in unit 1 (the cap binds), returning 8.97 percent at 8.68 percent risk. The equal-weight portfolio returns 10.50 percent at 10.91 percent risk. The optimal portfolio has 0.39 more return than equal-weight for 0.94 more risk. A return-per-risk comparison (return divided by risk) is 0.92 for the optimum, 0.96 for equal weights and 1.03 for minimum variance; note that these ratios are not the objective, since the investor's risk aversion λ = 3 determines the preferred trade-off.

*Step 3: Practical warnings.* Mean-variance solutions are extremely sensitive to the inputs, especially expected returns. Rerunning the solver with unit 1's expected return raised by just one percentage point (8 to 9 percent) moves its weight from 5.9 percent to 33.4 percent and cuts unit 4's weight by 18 points. Remedies are shrinkage of expected returns toward a common value, concentration caps (as here), resampling, or specifying views in terms of scenarios (Black-Litterman style). Internal "business units" are also not freely tradable assets: capital cannot be shifted overnight and the diversification benefit assumes correlations are stable. Use the output as a guide to direction (reduce reliance on the highest-risk unit), not an exact prescription.

## 24.6 Regression and Classification for Credit and Forecasting

### 24.6.1 Prediction is not explanation

Supervised learning fits a function from inputs (features) to a target using historical examples. For a finance function two tasks dominate: **regression** (predict a continuous quantity such as next-quarter revenue growth, a recovery rate or a collection delay) and **classification** (predict a category or probability, such as default versus no default). The goal is generalization, accuracy on data the model has not seen, rather than a good fit to the past.

The central tension is the **bias-variance trade-off**. A model that is too simple (high bias) misses real structure. A model that is too flexible (high variance) fits noise: with many candidate features and limited history it will find patterns that disappear out of sample. Corporate data sets are typically small (60 quarters of history, a few hundred defaults), so variance is the dominant danger. Remedies are regularization (ridge or lasso penalties), feature selection driven by economic reasoning, simpler model families and, above all, honest out-of-sample evaluation.

### 24.6.2 Honest evaluation: train, test and walk-forward

- **Hold-out test set.** Split the data randomly for cross-sectional problems (credit scoring across borrowers), keeping the test data untouched until the end.
- **Walk-forward (rolling or expanding window) validation.** For time series, train on data up to time t, forecast t+1, move forward. Random splits leak future information into training and overstate accuracy.
- **Cross-validation** for tuning hyperparameters (the ridge penalty, tree depth), always nested inside the training portion.
- **Leakage.** Any feature that would not be known at decision time (a variable updated after default, a restated financial figure) contaminates the model. Leakage is the most common cause of a model that looks superb in development and fails in production.

### 24.6.3 Regression for forecasting: ordinary least squares and ridge

OLS chooses coefficients β to minimize the sum of squared residuals. With p features and n observations the variance of out-of-sample prediction error rises roughly in proportion to p/n; with p close to n it explodes. **Ridge regression** minimizes `Σ residual² + α Σ β_j²`, shrinking all coefficients toward zero and trading a little bias for a large reduction in variance. **Lasso** uses `α Σ |β_j|`, which sets some coefficients exactly to zero (feature selection). The penalty α is chosen by cross-validation.

**Example 24.6 – Overfitting in a revenue-growth forecast.** A firm tries to forecast quarterly revenue growth. Suppose that growth truly depends on two drivers (a macro indicator and an order-book indicator) and has noise, while the analyst has also collected 18 other indicators that are pure noise but look plausible. There are 120 quarters of data. We compare four forecasters using walk-forward validation: train on the first 60 quarters (then expand by one quarter each step), forecast the next quarter, and score the 60 forecasts.

```python
import numpy as np
from sklearn.linear_model import LinearRegression, RidgeCV
from sklearn.metrics import mean_squared_error
rng = np.random.default_rng(11)
# Quarterly revenue growth forecasting: 2 true drivers + 18 noise indicators, 60 quarters of history
T, k_noise = 120, 18
macro = rng.normal(0, 1, T)
orders = rng.normal(0, 1, T)
noise = rng.normal(0, 1, (T, k_noise))
growth = 0.02 + 0.015 * macro + 0.020 * orders + rng.normal(0, 0.02, T)
X = np.column_stack([macro, orders, noise])
# walk-forward: train on first 60 quarters, forecast the next 60 one-step-ahead using expanding window
def rmse(a, b): return float(np.sqrt(mean_squared_error(a, b)))
preds = {"naive (train mean)": [], "OLS 2 drivers": [], "OLS all 20": [], "Ridge all 20": []}
actual = []
for t in range(60, T):
    Xtr, ytr = X[:t], growth[:t]
    preds["naive (train mean)"].append(ytr.mean())
    preds["OLS 2 drivers"].append(LinearRegression().fit(Xtr[:, :2], ytr).predict(X[t:t+1, :2])[0])
    preds["OLS all 20"].append(LinearRegression().fit(Xtr, ytr).predict(X[t:t+1])[0])
    preds["Ridge all 20"].append(RidgeCV(alphas=np.logspace(-2, 3, 30)).fit(Xtr, ytr).predict(X[t:t+1])[0])
    actual.append(growth[t])
for name, p in preds.items():
    print("%-20s out-of-sample RMSE = %.4f" % (name, rmse(actual, p)))
ols_all = LinearRegression().fit(X[:60], growth[:60])
print("In-sample R^2, OLS all 20 (first 60q): %.3f ; OLS 2 drivers: %.3f" % (ols_all.score(X[:60], growth[:60]), LinearRegression().fit(X[:60, :2], growth[:60]).score(X[:60, :2], growth[:60])))
```

```
naive (train mean)   out-of-sample RMSE = 0.0345
OLS 2 drivers        out-of-sample RMSE = 0.0204
OLS all 20           out-of-sample RMSE = 0.0223
Ridge all 20         out-of-sample RMSE = 0.0218
In-sample R^2, OLS all 20 (first 60q): 0.686 ; OLS 2 drivers: 0.597
```

*Step 1: In-sample versus out-of-sample.* In the first 60 quarters, OLS with all 20 features fits better (R² = 0.686) than OLS with the two true drivers (0.597). A naive reading would call the 20-feature model superior.

*Step 2: Out-of-sample results.* Out of sample the ranking reverses. The two-driver model has the lowest RMSE (0.0204). The all-feature OLS is 9.3 percent worse (0.0223) because it has fitted noise. Ridge with cross-validated penalty recovers part of the loss (0.0218) but cannot match the model that used only the right variables. The naive forecast (training mean) has RMSE 0.0345; so the predictors are genuinely useful, and the best model cuts forecast error by 41 percent.

*Step 3: Lessons.* (a) In-sample R² rewards complexity; (b) regularization helps but is not a substitute for economic judgement about which variables belong; (c) always compare with a naive benchmark, because a complicated model that does not beat "last year's growth" or "the historical mean" adds cost without value.

### 24.6.4 Classification for credit: logistic regression and tree ensembles

For binary outcomes the standard model is **logistic regression**:

```
P(default) = 1 / (1 + exp(−z)),    z = β₀ + β₁ x₁ + … + β_k x_k
```

Coefficients are estimated by maximum likelihood, and each β_j is the change in the log-odds of default per unit of x_j. Logistic regression is transparent, produces calibrated probabilities if the model is well-specified, and is widely accepted by regulators and auditors. **Tree ensembles** (random forests, gradient-boosted trees) capture nonlinearities and interactions automatically but are harder to explain and more prone to overfit on small samples.

Evaluate classifiers on two distinct dimensions.

- **Discrimination:** does the model rank risky cases above safe ones? The common measure is the area under the ROC curve (**AUC**), the probability that a randomly chosen defaulter receives a higher score than a randomly chosen non-defaulter (0.5 = random, 1.0 = perfect). A related measure is the Gini coefficient, `2 × AUC − 1`, and the KS statistic.
- **Calibration:** do predicted probabilities match observed frequencies? A model can rank perfectly yet systematically over- or under-state PD, which would distort pricing and provisions. Measure with a calibration table (predicted versus observed by decile) and the **Brier score**, the mean squared difference between predicted probability and the 0/1 outcome.

Neither measure tells you whether the model is *economically* useful. That requires a decision rule tied to costs and benefits.

**The economic decision rule.** Suppose a loan of exposure EAD earns a margin m if repaid and loses `LGD × EAD` if the borrower defaults. Expected profit is `(1 − PD) m − PD × LGD × EAD`, which is positive when

```
PD < m / (m + LGD × EAD)
```

This **break-even PD** is the optimal approval cut-off for a calibrated model, and it makes the point that a threshold should come from the economics of the decision and not from the statistics (an arbitrary 0.5 probability threshold is meaningless for rare events).

**Example 24.7 – Building and using a credit model.** A lender has 20,000 commercial borrowers with five features: net debt/EBITDA, interest cover, current ratio, return on assets and log of assets. We simulate data in which the true default process includes an interaction (high leverage together with low cover raises risk beyond the linear effects), so a linear model is slightly misspecified. We fit logistic regression and a gradient-boosted tree model on 70 percent of the data and evaluate on the remaining 30 percent (6,000 borrowers). Exposure is 100, margin 4 and LGD 60 percent.

```python
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, brier_score_loss, confusion_matrix
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
rng = np.random.default_rng(2024)
n = 20_000
lev   = np.clip(rng.normal(3.0, 1.5, n), 0, None)          # net debt / EBITDA
cover = np.clip(rng.lognormal(1.6, 0.6, n), 0.2, None)     # EBITDA / interest
curr  = np.clip(rng.normal(1.4, 0.4, n), 0.3, None)        # current ratio
roa   = rng.normal(0.06, 0.05, n)
logsz = rng.normal(6.0, 1.2, n)
noise = rng.normal(0, 1, n)
# true default log-odds: includes an interaction (high leverage AND low cover) that a linear model misses
z = (-3.9 + 0.55 * lev - 0.45 * np.log(cover) - 0.9 * (curr - 1.4) - 9 * roa - 0.15 * (logsz - 6)
     + 1.2 * (lev > 4) * (cover < 3) + 0.3 * noise)
p = 1 / (1 + np.exp(-z))
y = rng.binomial(1, p)
X = np.column_stack([lev, cover, curr, roa, logsz])
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=1, stratify=y)
print("Default rate: %.3f  (train %d, test %d)" % (y.mean(), len(ytr), len(yte)))
logit = make_pipeline(StandardScaler(), LogisticRegression(C=1.0, max_iter=1000)).fit(Xtr, ytr)
gbm = GradientBoostingClassifier(n_estimators=150, max_depth=3, learning_rate=0.05, subsample=0.8, random_state=0).fit(Xtr, ytr)
for name, m in [("Logistic", logit), ("GradBoost", gbm)]:
    ph = m.predict_proba(Xte)[:, 1]
    print("%-9s AUC=%.3f  Brier=%.4f  mean pred PD=%.3f" % (name, roc_auc_score(yte, ph), brier_score_loss(yte, ph), ph.mean()))
print("Logistic coefficients (standardized):", dict(zip(["lev", "cover", "curr", "roa", "logsz"], [round(float(c), 2) for c in logit[-1].coef_[0]])))
# decile calibration for logistic
ph = logit.predict_proba(Xte)[:, 1]
dec = np.digitize(ph, np.quantile(ph, np.linspace(0.1, 0.9, 9)))
print("Decile  mean PD  observed")
for d in (0, 4, 9):
    print("  %2d     %.3f    %.3f" % (d + 1, ph[dec == d].mean(), yte[dec == d].mean()))
# decision threshold: lend or decline. Loss given default 60% of 100 exposure; margin earned if no default 4
LGD, EAD, margin = 0.6, 100.0, 4.0
def exp_profit(ph, thr):
    lend = ph < thr
    return np.sum(np.where(yte[lend] == 1, -LGD * EAD, margin))
for thr in (0.02, 0.05, 0.065, 0.10, 0.20, 1.01):
    lend = ph < thr
    print("thr %.3f  approve %.1f%%  realized defaults in approved %.2f%%  profit %.0f" % (thr, 100 * lend.mean(), 100 * yte[lend].mean(), exp_profit(ph, thr)))
print("Break-even PD = margin/(margin+LGD*EAD) = %.4f" % (margin / (margin + LGD * EAD)))
```

```
Default rate: 0.057  (train 14000, test 6000)
Logistic  AUC=0.794  Brier=0.0482  mean pred PD=0.059
GradBoost AUC=0.803  Brier=0.0472  mean pred PD=0.058
Logistic coefficients (standardized): {'lev': 0.87, 'cover': -0.51, 'curr': -0.42, 'roa': -0.36, 'logsz': -0.23}
Decile  mean PD  observed
   1     0.005    0.005
   5     0.031    0.020
  10     0.227    0.247
thr 0.020  approve 31.4%  realized defaults in approved 1.22%  profit 6060
thr 0.050  approve 62.2%  realized defaults in approved 1.96%  profit 10264
thr 0.065  approve 70.3%  realized defaults in approved 2.23%  profit 10852
thr 0.100  approve 83.0%  realized defaults in approved 3.11%  profit 10012
thr 0.200  approve 95.0%  realized defaults in approved 4.37%  profit 6876
thr 1.010  approve 100.0%  realized defaults in approved 5.73%  profit 1984
Break-even PD = margin/(margin+LGD*EAD) = 0.0625
```

*Step 1: Base rate and discrimination.* The default rate is 5.7 percent. Logistic regression achieves AUC 0.794; boosted trees 0.803. The difference, of order 0.01, is of the same size as the sampling noise of an AUC computed on roughly 340 test defaults, so it should not be over-interpreted. Brier scores (0.0482 and 0.0472) are similarly close. The boosted model captures the interaction but pays for it in complexity; the improvement is real but small.

*Step 2: Interpreting the logistic model.* Standardized coefficients show leverage as the dominant driver (+0.87 per standard deviation, in log-odds), followed by interest cover (−0.51), current ratio (−0.42), ROA (−0.36) and size (−0.23). Signs match economic intuition. A reviewer can discuss each with the credit officers, a major governance advantage over a black box.

*Step 3: Calibration.* The mean predicted PD (5.9 percent) matches the observed rate (5.7 percent). In the riskiest decile the model predicts 22.7 percent versus an observed 24.7 percent. The middle decile shows a modest over-prediction (3.1 percent versus 2.0 percent). A calibration table makes visible a defect that AUC hides.

*Step 4: The break-even cut-off.* `PD* = 4 / (4 + 0.6 × 100) = 4/64 = 6.25%`. Check the profit for different cut-offs (profit measured in the same currency units as exposure, over the 6,000 test loans): approving everyone earns **1,984**; approving only borrowers with predicted PD below 2 percent earns 6,060 on 31.4 percent of the book; below 5 percent earns 10,264 (62.2 percent approved); below 6.5 percent earns **10,852** (70.3 percent approved, realized default rate in the approved group 2.2 percent); below 10 percent earns 10,012; and below 20 percent earns 6,876. Profit peaks almost exactly at the theoretical break-even of 6.25 percent, as the theory predicts.

*Step 5: Interpretation.* The model converts a book with a 5.7 percent default rate that barely earns anything (1,984) into a book earning more than five times as much by refusing the riskiest 30 percent. The marginal value of the more complex tree model has to be weighed against its explanation and governance cost; with AUC gains of about 0.01, a bank might reasonably keep the logistic model as the primary scorecard and use the tree model as a challenger. In practice, borrowers rejected by the model never reveal whether they would have defaulted (selection bias or "reject inference"), and the realized default rates will drift as the economy changes, so ongoing monitoring (Section 24.7) is not optional.

### 24.6.5 Beyond credit

The same toolkit applies to receivables collection, churn, anomaly detection in payments and journal entries, and nowcasting sales. Three cautions apply. Prediction does not identify causation, so counterfactual questions ("what if we change the price?") need experiments or causal methods. Finance data are non-stationary and actors adapt, so a model trained in a benign credit cycle may fail in a recession. And small samples (ten years of annual defaults for 200 firms) cannot support complex models; prefer simple models, shrinkage and expert priors.

## 24.7 Model Risk and Governance

### 24.7.1 What is model risk?

**Model risk** is the potential for adverse consequences from decisions based on incorrect or misused model outputs. It has two sources: *fundamental errors* (a wrong specification, wrong data, a coding bug, a misestimated parameter) and *misuse* (applying a model outside its intended domain, ignoring its limits, or treating its output as certainty). The 2011 supervisory guidance on model risk management issued in the United States (the Federal Reserve's SR 11-7, adopted also by the banking regulator OCC) has become a reference for good practice well beyond banks. Its core ideas are accessible and widely applicable:

- **Effective challenge:** critical analysis by objective, informed parties who can identify limitations and force changes.
- **Sound development, implementation and use:** documented purpose, design, data, assumptions, testing and limitations.
- **Independent validation:** review by people who did not build the model, covering conceptual soundness, ongoing monitoring and outcomes analysis (back-testing).
- **Governance:** a model inventory, assigned ownership, risk tiering, policies, and board and senior management oversight.

### 24.7.2 A practical governance framework for a finance team

| Stage | Key controls | Questions to ask |
|---|---|---|
| Scoping | Written decision purpose; materiality tier | What decision will this support? What is the loss if it is wrong? |
| Data | Source lineage, quality checks, treatment of missing values and outliers, leakage review | Would this feature be known at decision time? Is the sample representative of future conditions? |
| Development | Benchmark against simple model; out-of-sample testing; sensitivity and stress tests | Does it beat the naive forecast? What breaks it? |
| Validation | Independent replication; challenger models; review of assumptions and code | Can someone else reproduce the numbers? Are results stable to reasonable changes? |
| Implementation | Version control; access controls; change log; reconciliation of production to development | Is the deployed model the validated model? |
| Monitoring | Drift metrics, back-testing, performance triggers, periodic revalidation | Is the population changing? Are predicted and realized outcomes aligned? |
| Use and override | Documented limitations; human override with logged reasons; escalation | Who can override, and how are overrides tracked and reviewed? |

Spreadsheet models deserve special attention because they are the most common "models" in corporate finance and are often poorly controlled. Errors in spreadsheets are frequent; controls include separating inputs, calculations and outputs, using named ranges and consistent formulas, built-in checks (balance sheet balances, cash reconciles), peer review and version control.

### 24.7.3 Monitoring for drift

Models degrade when the population or relationships change. Two forms are important: **data (covariate) drift**, when the distribution of inputs changes, and **concept drift**, when the relationship between inputs and outcomes changes. A standard monitoring statistic for data drift is the **Population Stability Index (PSI)**, which compares the share of observations in each bin (typically deciles of the development sample) between development (a_i) and current (b_i) populations:

```
PSI = Σ_i (b_i − a_i) × ln(b_i / a_i)
```

A common rule of thumb treats PSI below 0.10 as stable, 0.10 to 0.25 as a moderate shift needing review, and above 0.25 as a significant shift. These thresholds are conventions, not laws of nature.

**Example 24.8 – Detecting portfolio drift with PSI.** A credit model was developed when borrower leverage averaged 3.0 (standard deviation 1.5). The current portfolio averages 3.6 (standard deviation 1.8). Compute the PSI on decile bins of the development data.

```python
import numpy as np
rng = np.random.default_rng(5)
dev = rng.normal(3.0, 1.5, 20_000)              # leverage at model development
cur = rng.normal(3.6, 1.8, 5_000)               # leverage in current portfolio (drifted)
edges = np.quantile(dev, np.linspace(0, 1, 11)); edges[0], edges[-1] = -np.inf, np.inf
a = np.histogram(dev, edges)[0] / len(dev)
b = np.histogram(cur, edges)[0] / len(cur)
psi = np.sum((b - a) * np.log(b / a))
print("Bin shares (dev):", np.round(a, 3))
print("Bin shares (cur):", np.round(b, 3))
print("PSI = %.3f" % psi)
same = rng.normal(3.0, 1.5, 5_000)
c = np.histogram(same, edges)[0] / len(same)
print("PSI (no drift, fresh sample) = %.3f" % np.sum((c - a) * np.log(c / a)))
```

```
Bin shares (dev): [0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1]
Bin shares (cur): [0.074 0.079 0.069 0.074 0.081 0.081 0.099 0.106 0.125 0.212]
PSI = 0.130
PSI (no drift, fresh sample) = 0.002
```

*Step 1: Bin shares.* By construction each development decile holds 10 percent. In the current portfolio the highest-leverage bin holds 21.2 percent, more than double its development share, while the lowest bins have shrunk to 7 to 8 percent.

*Step 2: PSI.* Summing `(b − a) ln(b / a)` across the ten bins gives **0.130**. For comparison, a fresh sample drawn from the *development* distribution gives 0.002, which shows that sampling noise alone is negligible here.

*Step 3: Interpretation.* A PSI of 0.13 falls in the "review" zone. It does not prove the model is wrong, but it says the book now has twice as many borrowers in the riskiest leverage bucket as the model saw during development, exactly where its calibration is hardest. The proper response is to run the calibration table on recent outcomes, check whether the highest-risk bins are over- or under-predicting, and document the review. Drift monitoring is an early-warning sign, not a verdict.

### 24.7.4 Explainability, fairness and organizational risk

Where a model affects individuals, many jurisdictions require reasons for adverse decisions, restrict protected characteristics and test for disparate impact; proxy variables (such as geography) can produce discriminatory outcomes even when inputs look neutral. For corporate lending the legal constraints are lighter, but the need to explain a decision to a client, auditor or regulator remains, so prefer models whose drivers can be named and treat post-hoc explanation tools as supplements. Quantitative methods also fail through organizational causes: automation bias (trusting a number because a computer produced it), gaming of forecasts and scorecards, model monoculture when everyone uses the same vendor model, and key-person risk. Counter these with challenger models from a different family, reporting of model limits alongside results, and clear accountability: a model has an owner, a validator and a user, and the user remains responsible for the decision.

A practical checklist for any quantitative analysis presented to a committee:

1. State the decision and the metric, not just the output.
2. Show the benchmark (naive forecast, deterministic NPV, current rule).
3. Show uncertainty: intervals, scenarios and the assumptions driving them.
4. Show out-of-sample or back-tested evidence, not just in-sample fit.
5. Name the three assumptions that would most change the answer, and test them.
6. State the model's domain of validity and what would trigger a review.

## Case Study: Brightfield Packaging's Capital Committee

*Illustrative case; Brightfield Packaging is a fictional company.*

Brightfield Packaging is a mid-sized manufacturer of corrugated and flexible packaging with 1.4 billion in revenue, 11 plants and 190 million of EBITDA. Resin and paper-pulp costs are volatile, and about 40 percent of revenue is under customer contracts with only partial cost pass-through. The capital committee has 150 million of capex to allocate this year (and 60 million next year) across 12 proposals: plant automation, new converting lines, a recycling facility, a digital-printing line and several maintenance replacements.

Historically the committee ranked proposals by profitability index. This year the CFO, Adaeze Okonkwo, has asked the finance analytics team to supply simulation and optimization support. The team built a Monte Carlo model for each project with three stochastic drivers (pulp price, resin price, and regional volume), calibrated on ten years of data. They fitted a factor model so that all projects share a macro volume factor and an energy-cost factor. For the largest project, a new 60 million converting line, the simulation gives an expected NPV of 11 million and a standard deviation of 34 million, with a 38 percent probability of a negative NPV; with independent drivers the standard deviation falls to 22 million. The team admits that the correlation between pulp and resin prices is estimated from only 40 quarterly observations and was much higher in the last two years than in the full sample.

The optimization, run on expected NPVs and two budget years, selected seven projects with total NPV of 63 million; the profitability-index ranking would have delivered 57 million. The year-1 budget has a shadow price of zero but the year-0 budget has a shadow price of 0.31. Two sponsors have objected: one says her project was excluded only because of a "black-box" model; another says the optimizer favours projects with the most optimistic forecasts, which the sponsors' own incentives encourage.

Separately, the credit team presented a machine-learning model of customer default that raised AUC from 0.76 (the existing logistic scorecard) to 0.81. The model was built on five years of data, of which two include the 2020s inflation spike. A vendor supplied the model and an independent validator has only been able to replicate the headline AUC, not the feature engineering. The head of risk is reluctant to approve it for production and wants the old scorecard retained as a challenger; the head of sales wants the new model because it would approve 8 percent more volume at the same predicted loss.

The CFO now needs to decide how to use the quantitative work in the committee, how to adjust for its weaknesses, and how to govern the credit model.

**Discussion Questions**

1. For the 60 million converting line, the standard deviation of NPV is 34 million with the estimated correlations and 22 million with independence. Explain the likely source of the difference, what you would need to check about the 40-observation correlation estimate, and how you would present the project's risk to the committee.
2. The optimizer's solution beats the profitability-index ranking by 6 million NPV. Explain why a PI ranking can fail with two budgets and indivisible projects, interpret the 0.31 shadow price, and propose how to respond to the sponsor's concern about optimistic forecasts (the "optimizer's curse").
3. Evaluate whether the credit model with AUC 0.81 should be approved. Which additional evidence (calibration, out-of-time test, replication of feature engineering, stability, explainability, economic cut-off analysis) would you require, and would you accept the sales head's argument about 8 percent more volume?
4. Design a governance framework (roles, validation, monitoring triggers, overrides) for the finance analytics models at Brightfield, including a metric such as PSI and an escalation path if drift exceeds a threshold.

## Key Takeaways

- Point estimates hide the quantities that matter for decisions under uncertainty: the probability of loss, the interaction of risks and the value of flexibility. Simulation, optimization and prediction address these in complementary ways.
- Monte Carlo error falls with √N; always report the standard error, and check the model first by reproducing the deterministic result.
- Dependence changes both the spread and the mean of outcomes: positive price-cost correlation reduces margin risk, while shocks that hit price and volume together increase it. Cholesky factorization generates correlated normal shocks, but linear correlation understates tail dependence.
- Choose stochastic processes by economics: random walks for permanent shocks, mean reversion for commodities and margins, regimes and jumps for structural shifts, and report parameter uncertainty.
- Corporate risk measures such as cash-flow-at-risk, minimum-liquidity probability and covenant-breach probability are path-dependent and are best computed from simulated paths.
- Capital rationing is an optimization problem. The LP relaxation provides an upper bound and shadow prices; integer solutions can beat profitability-index ranking; shadow prices measure the internal cost of capital.
- Mean-variance allocation is convex and tractable but highly sensitive to expected-return inputs; use caps, shrinkage and scenario views.
- Evaluate predictive models out of sample with walk-forward validation; in-sample fit rewards complexity, and a model must beat a naive benchmark to justify itself.
- Judge a credit model on discrimination (AUC), calibration and economics: the approval cut-off should come from the break-even PD, `m / (m + LGD × EAD)`, not a default threshold.
- Model risk is managed by effective challenge, independent validation, monitoring for drift (for example PSI), clear ownership, and human accountability for the decision.

## Review Questions

1. Why is the probability of a negative NPV often more informative than the mean NPV of a simulation? Under what circumstances might the two lead to different decisions?
2. How does the standard error of a Monte Carlo estimate depend on the number of trials, and why are tail probabilities harder to estimate than means?
3. Explain how antithetic variates reduce variance and when they help least.
4. Write the variance of the difference of two variables in terms of their correlation. How would you change a firm's contracts to reduce margin risk, in terms of this formula?
5. Describe how Cholesky factorization produces correlated random shocks, and why an estimated correlation matrix might fail the factorization.
6. Why is a Gaussian (multivariate normal) dependence assumption dangerous for tail risk, and what practical remedies exist?
7. Contrast random-walk and mean-reverting price models. Which would you use for a commodity input, and how does the choice change the 10-year cash-flow-at-risk?
8. What is a shadow price in a capital rationing problem, and how should a manager use it?
9. Why can ranking projects by profitability index be suboptimal, and what does the integer program add?
10. Distinguish discrimination from calibration in a credit model. Why does a lender need both, and how should the approval cut-off be set?

## Problems

1. **Monte Carlo accuracy.** A simulation of project NPV has a standard deviation of 50 across trials. (a) How many trials give a standard error of the mean of 0.25? (b) How many are needed to halve that standard error? (c) Compute the number of trials needed so that the estimated probability of loss, believed to be about 5 percent, has a relative standard error of 10 percent.
2. **Correlation and margin risk.** A product's price has a standard deviation of 12 and its unit cost 5. Compute the standard deviation of unit margin (price minus cost) if the correlation is (a) +0.5 and (b) −0.2.
3. **Cholesky.** Two shocks should have a correlation of −0.4. (a) Write the 2 × 2 Cholesky factor. (b) If independent draws are Z₁ = 1.0 and Z₂ = −0.5, compute the correlated shocks X₁ and X₂.
4. **Mean reversion.** Log-price follows `x_{t+1} = x_t + 0.2 (m − x_t) + noise` with long-run price 60. Current price is 90. Compute the expected log-price (and the price implied by exponentiating it) after 4 quarters and after 8 quarters, ignoring the Jensen correction.
5. **Capital rationing.** Four projects (NPV, outlay in millions): A (12, 50), B (20, 80), C (9, 30), D (15, 60). Budget 140. (a) Find the best whole-project portfolio. (b) Find the LP relaxation value and the shadow price of the budget.
6. **Minimum variance.** Two business units have volatilities of 10 percent and 20 percent and correlation 0.3. Compute the minimum-variance weight of the first unit and the resulting portfolio volatility.
7. **Credit cut-off.** A loan has margin 3, LGD 50 percent, exposure 100. (a) Find the break-even PD. (b) Compute the expected profit per loan for PD of 4 percent and 8 percent.
8. **PSI.** A model's development sample has four equal bins (25 percent each). The current portfolio shares are 15, 20, 30 and 35 percent. Compute the PSI and classify it by the rule of thumb in Section 24.7.3.

### Answers to Selected Problems

1. (a) N = (σ/SE)² = (50 / 0.25)² = **40,000**. (b) Halving SE requires four times as many trials: **160,000**. (c) Relative SE = √((1 − p) / (pN)) = 0.10, so N = (1 − p) / (p × 0.01) = 0.95 / (0.05 × 0.01) = **1,900** trials.
2. Var = 12² + 5² − 2ρ(12)(5). (a) ρ = +0.5: 144 + 25 − 60 = 109, σ = **10.44**. (b) ρ = −0.2: 144 + 25 + 24 = 193, σ = **13.89**.
3. (a) L = [[1, 0], [−0.4, √(1 − 0.16)]] = [[1, 0], [−0.4, 0.9165]]. (b) X₁ = 1.0; X₂ = −0.4 × 1.0 + 0.9165 × (−0.5) = **−0.858**.
4. ln 90 = 4.4998, ln 60 = 4.0943, gap 0.4055. After 4 quarters: 0.4055 × 0.8⁴ = 0.1661, so x = 4.2604, price = **70.8**. After 8 quarters: 0.4055 × 0.8⁸ = 0.0680, x = 4.1623, price = **64.2**.
5. (a) Feasible portfolios within 140: A+C+D = 140 (NPV 36); B+D = 140 (35); A+B = 130 (32); best is **A, C, D with NPV 36**. (b) PIs: C 0.30, B 0.25, D 0.25, A 0.24. LP: fund C (30), B (80), and half of D (30 of 60): NPV = 9 + 20 + 7.5 = **36.5**; the shadow price is the marginal PI, **0.25** per unit of budget.
6. w₁ = (0.20² − 0.3 × 0.10 × 0.20) / (0.10² + 0.20² − 2 × 0.3 × 0.10 × 0.20) = (0.04 − 0.006) / (0.01 + 0.04 − 0.012) = 0.034 / 0.038 = **0.8947**. Variance = 0.8947² × 0.01 + 0.1053² × 0.04 + 2 × 0.8947 × 0.1053 × 0.3 × 0.02 = 0.008006 + 0.000443 + 0.001130 = 0.009579; volatility = **9.79 percent**.
7. (a) PD* = 3 / (3 + 50) = **5.66 percent**. (b) At PD 4 percent: 0.96 × 3 − 0.04 × 50 = 2.88 − 2.00 = **+0.88**. At PD 8 percent: 0.92 × 3 − 0.08 × 50 = 2.76 − 4.00 = **−1.24**.
8. PSI = (0.15 − 0.25) ln(0.15/0.25) + (0.20 − 0.25) ln(0.20/0.25) + (0.30 − 0.25) ln(0.30/0.25) + (0.35 − 0.25) ln(0.35/0.25) = 0.05108 + 0.01116 + 0.00912 + 0.03365 = **0.105**, in the 0.10 to 0.25 "review" range.
