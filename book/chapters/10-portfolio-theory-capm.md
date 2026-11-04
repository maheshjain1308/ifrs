# Chapter 10: Portfolio Theory and the CAPM

## Learning Objectives

After studying this chapter, you should be able to:

- Construct the opportunity set of a two-asset portfolio, find the minimum-variance portfolio, and describe the efficient frontier of risky assets.
- Explain how introducing a risk-free asset yields the tangency portfolio and the Capital Market Line, and apply the separation theorem to a client's choice of risk level.
- State the assumptions of the Capital Asset Pricing Model, derive the Security Market Line, and use it to compute required returns and detect over- and under-valued securities.
- Estimate beta by regression and by the covariance formula, interpret its statistical precision, and adjust and re-lever betas from comparable firms for use in project valuation.
- Evaluate portfolio performance with the Sharpe ratio, Treynor ratio, and Jensen's alpha, and explain why they can rank managers differently.
- Describe the Arbitrage Pricing Theory, multifactor models, and the Fama-French factors, and discuss the empirical and practical limits of the CAPM and its alternatives.

## Opening Vignette

*The following scenario is illustrative; Brightline Logistics is a fictional company.*

Brightline Logistics operates a regional trucking and warehousing network with annual revenue of about $2.4 billion. Its CFO, Marcus Oyelaran, has a problem that sounds technical but is worth tens of millions of dollars: what discount rate should Brightline use for three very different investments on the capital plan?

The first is a $90 million expansion of its core trucking fleet. The second is a $60 million automated cold-storage warehouse serving pharmaceutical distributors. The third is a $40 million stake in a freight-matching technology start-up. The treasury team's initial suggestion was to discount all three at Brightline's company-wide cost of capital of 9.5 percent. Marcus objected: "That makes the start-up look cheap and the warehouse look expensive, or the other way around, depending on which cash flows you believe. If I discount different risks at the same rate, I am giving away value in one direction or the other."

At the same time, Brightline's pension fund committee was meeting in the next room. Its members were debating whether the fund's equity manager, who had beaten the index by 2 percentage points last year, was skilled or simply running a riskier portfolio. A committee member proposed comparing the manager's return to that of a benchmark with the same sensitivity to the market. Another asked how the fund's equity allocation should be set in the first place, and whether the fund should hold a single optimal portfolio of risky assets and merely dial total risk up or down with cash and borrowing.

These questions share a framework. Harry Markowitz showed how to combine assets to obtain the best trade-off between expected return and risk. William Sharpe, John Lintner, and Jan Mossin took this portfolio theory and asked what prices would result if all investors followed it, producing the Capital Asset Pricing Model (CAPM), a simple statement that required return rises linearly with an asset's exposure to market risk. Later work, from Stephen Ross's Arbitrage Pricing Theory to the factor models of Eugene Fama and Kenneth French, loosened the CAPM's single-factor structure. This chapter develops the mathematics of portfolio choice, derives and applies the CAPM, shows how to estimate and adjust beta, evaluates performance, and then surveys multifactor models and their implications for the managers' hurdle rates.

## 10.1 Portfolio Choice with Two Risky Assets

### 10.1.1 The investment opportunity set

Chapter 9 showed that the expected return of a portfolio is a weighted average of the expected returns of its components, whereas its variance depends on the covariances among them. Combining those two results gives the **investment opportunity set**: the collection of all (risk, return) pairs attainable by varying the weights.

For two risky assets, 1 and 2, with weights w and 1 − w:

```
E(R_p) = w E(R₁) + (1 − w) E(R₂)
σ_p²   = w² σ₁² + (1 − w)² σ₂² + 2 w (1 − w) ρ₁₂ σ₁ σ₂
```

Plotting σ_p on the horizontal axis and E(R_p) on the vertical axis for all w produces a curve. When ρ = +1 the curve is a straight line between the two assets. When ρ = −1 it consists of two straight lines that touch the vertical axis at the zero-risk portfolio. For intermediate correlations it bows to the left: the lower the correlation, the greater the bow and the larger the diversification benefit. Allowing negative weights (short sales) extends the curve beyond the two assets in both directions.

### 10.1.2 The minimum-variance portfolio

The portfolio with the lowest possible variance is found by setting the derivative of σ_p² with respect to w equal to zero. For two assets the weight on asset 1 in the **minimum-variance portfolio** (MVP) is

```
w₁* = (σ₂² − σ₁₂) / (σ₁² + σ₂² − 2σ₁₂)
```

Notice that this weight depends only on risks and covariance, not on expected returns. Notice also that it can exceed 1 or fall below 0 for extreme parameter values, signifying that the minimum-variance portfolio requires a short position.

**Example 10.1 – The two-asset opportunity set and the minimum-variance portfolio.** Consider an equity fund E and a bond fund D with the following parameters:

| | Expected return | Standard deviation |
|---|---|---|
| Equity fund E | 12% | 20% |
| Bond fund D | 6% | 10% |
| Correlation ρ(E, D) | 0.20 | |

*Covariance.* σ_ED = 0.20 × 0.20 × 0.10 = 0.0040.

*Minimum-variance weight on E.*

```
w_E* = (σ_D² − σ_ED) / (σ_E² + σ_D² − 2σ_ED)
     = (0.0100 − 0.0040) / (0.0400 + 0.0100 − 0.0080)
     = 0.0060 / 0.0420 = 0.1429
```

So the MVP is 14.29% in E and 85.71% in D.

*MVP return and risk.*

```
E(R) = 0.1429(12%) + 0.8571(6%) = 1.714% + 5.143% = 6.857%
σ²   = (0.1429)²(0.04) + (0.8571)²(0.01) + 2(0.1429)(0.8571)(0.004)
     = 0.000816 + 0.007347 + 0.000980 = 0.009143
σ    = √0.009143 = 9.56%
```

The MVP has a lower standard deviation (9.56 percent) than even the safer asset, D, held alone (10 percent). Here is the opportunity set for a range of weights:

| Weight in E | Expected return | Variance | Standard deviation |
|---|---|---|---|
| 0% | 6.00% | 0.01000 | 10.00% |
| 10% | 6.60% | 0.00922 | 9.60% |
| 14.29% (MVP) | 6.86% | 0.00914 | 9.56% |
| 20% | 7.20% | 0.00928 | 9.63% |
| 30% | 7.80% | 0.01018 | 10.09% |
| 40% | 8.40% | 0.01192 | 10.92% |
| 50% | 9.00% | 0.01450 | 12.04% |
| 60% | 9.60% | 0.01792 | 13.39% |
| 80% | 10.80% | 0.02728 | 16.52% |
| 100% | 12.00% | 0.04000 | 20.00% |

*Interpretation.* Portfolios with less than 14.29 percent in E (such as 100 percent in D) lie on the *inefficient* lower branch of the opportunity set: there is a portfolio with a higher expected return and lower risk (e.g. the 10 percent E portfolio improves on D on both counts: return 6.60 versus 6.00 percent, risk 9.60 versus 10.00 percent). Only the portion of the curve from the MVP upward, where more risk buys more expected return, is efficient. An investor holding all bond fund would be wise to move at least to the MVP.

### 10.1.3 Dominance and efficiency

Portfolio A **dominates** portfolio B if A has an expected return at least as high and a standard deviation no higher, with at least one strict inequality. The **efficient set** consists of portfolios that no other attainable portfolio dominates. Mean-variance investors choose only among efficient portfolios, picking a point on the efficient set according to their risk tolerance. This is the key insight of Markowitz: the *portfolio*, not the individual security, is the unit of analysis, and an asset should be judged by what it adds to the portfolio's risk and return.

## 10.2 The Efficient Frontier, the Risk-Free Asset, and the Capital Market Line

### 10.2.1 The efficient frontier of many risky assets

With n risky assets, the set of attainable portfolios is a region (a bullet-shaped area) in risk-return space, bounded on the left by a curve called the **minimum-variance frontier**. The upper half of that boundary, running from the global minimum-variance portfolio upward, is the **efficient frontier**. Every portfolio on it offers the highest expected return available for its level of risk.

Finding the frontier requires solving a quadratic optimization problem, minimizing σ_p² subject to a target expected return and weights summing to one, using inputs of n expected returns, n variances, and n(n − 1)/2 covariances. For 100 assets that is 100 + 100 + 4,950 = 5,150 inputs, each estimated with error. This leads to a well-known practical problem: optimizers magnify estimation errors. A small error in an expected return can produce large, unstable weights and extreme positions, a phenomenon sometimes described as "error maximization". Practical remedies include imposing weight limits, shrinking estimates toward a prior, using factor models to reduce the number of parameters, and combining the optimizer with market-implied returns, as in the Black-Litterman approach. The main text of this chapter focuses on the theory, but the practitioner should be modest about its numerical precision.

### 10.2.2 Adding a risk-free asset

Now allow investors to lend and borrow at a risk-free rate r_f. A risk-free asset has zero variance and zero covariance with every risky asset, so a portfolio that places a fraction x of wealth in a risky portfolio P and 1 − x in the risk-free asset has

```
E(R_c) = r_f + x [E(R_P) − r_f]
σ_c    = x σ_P
```

Eliminating x gives a straight line in risk-return space:

```
E(R_c) = r_f + [(E(R_P) − r_f) / σ_P] · σ_c
```

The slope of this line is the risky portfolio's **Sharpe ratio**, or reward-to-variability ratio: the excess return per unit of standard deviation. Values of x between 0 and 1 represent lending; x > 1 means borrowing at the risk-free rate to invest more than one's wealth in P.

Among all lines from the risk-free rate through points in the risky opportunity set, the steepest is the one tangent to the efficient frontier. The point of tangency is the **tangency portfolio** T, the risky portfolio with the highest possible Sharpe ratio. Every investor, whatever their risk tolerance, who has the same beliefs about returns and risks would hold some combination of the risk-free asset and T. This is the **separation theorem** (James Tobin): the investment decision splits into two independent steps. First, identify the optimal risky portfolio T, which depends only on the market's risks and returns. Second, decide how much to allocate to T versus the risk-free asset, which depends on the investor's risk aversion.

For two risky assets the tangency weights have a closed form. Define excess returns e₁ = E(R₁) − r_f and e₂ = E(R₂) − r_f:

```
w₁ = [e₁σ₂² − e₂σ₁₂] / [e₁σ₂² + e₂σ₁² − (e₁ + e₂)σ₁₂]
```

with w₂ = 1 − w₁.

**Example 10.2 – The tangency portfolio and the Capital Market Line.** Continue with E and D from Example 10.1 and introduce a risk-free rate of 3 percent.

*Excess returns.* e_E = 12% − 3% = 9%; e_D = 6% − 3% = 3%.

*Tangency weight on E.*

```
Numerator   = e_E σ_D² − e_D σ_ED = 0.09(0.0100) − 0.03(0.0040)
            = 0.00090 − 0.00012 = 0.00078
Denominator = e_E σ_D² + e_D σ_E² − (e_E + e_D) σ_ED
            = 0.00090 + 0.03(0.0400) − 0.12(0.0040)
            = 0.00090 + 0.00120 − 0.00048 = 0.00162
w_E = 0.00078 / 0.00162 = 0.4815,   w_D = 0.5185
```

*Tangency portfolio return and risk.*

```
E(R_T) = 0.4815(12%) + 0.5185(6%) = 5.778% + 3.111% = 8.889%
σ_T²   = (0.4815)²(0.04) + (0.5185)²(0.01) + 2(0.4815)(0.5185)(0.004)
       = 0.009273 + 0.002689 + 0.001997 = 0.013959
σ_T    = 11.81%
```

*Sharpe ratio of T.* (8.889% − 3%) / 11.81% = **0.498**. For comparison, the Sharpe ratio of E alone is 9% / 20% = 0.45 and that of D alone is 3% / 10% = 0.30. The tangency portfolio is better than either.

*The Capital Market Line for this economy:*

```
E(R_c) = 3% + 0.498 × σ_c
```

*Application 1 – A conservative client who wants a risk of 6%.* x = 6% / 11.81% = 0.508. Invest 50.8% in T and 49.2% in the risk-free asset. Expected return = 3% + 0.508 × 5.889% = **5.99%**. Dollar allocation to the funds: E gets 0.508 × 0.4815 = 24.5%, D gets 0.508 × 0.5185 = 26.3%, risk-free 49.2%.

*Application 2 – An aggressive client who wants an expected return of 10%.* x = (10% − 3%) / 5.889% = 1.1887. Borrow 18.87% of wealth at 3% and invest 118.87% in T. Risk = 1.1887 × 11.81% = **14.04%**. Net positions: E = 1.1887 × 0.4815 = 57.2%, D = 1.1887 × 0.5185 = 61.6%, risk-free = −18.9%.

*Comparison with no risk-free asset.* On the risky-only opportunity set, a 10 percent expected return required a mix of about 66.7 percent E and 33.3 percent D (0.667 × 12 + 0.333 × 6 = 10%), with a risk of 14.38 percent. Allowing the client to borrow at the risk-free rate reduces the standard deviation to 14.04 percent for the same return.

*Interpretation.* Both clients hold the same mix of risky funds, about 48/52 E to D; they differ only in the amount of cash or leverage. The investor's risk tolerance affects *how much* risk, not *which* risky assets.

### 10.2.3 The Capital Market Line

If all investors share the same expectations and the same risk-free rate, they all identify the same tangency portfolio. For markets to clear, the sum of all investors' holdings of risky assets must equal the supply of risky assets, so T must be the **market portfolio** M: the value-weighted portfolio of all risky assets. The line from the risk-free rate through M is the **Capital Market Line** (CML):

```
E(R_c) = r_f + [(E(R_M) − r_f) / σ_M] · σ_c
```

The CML describes the equilibrium trade-off between risk (standard deviation) and expected return for *efficient portfolios*. Its slope, (E(R_M) − r_f)/σ_M, is the market price of risk: the extra expected return investors demand for each additional unit of total risk on an efficient portfolio. The CML applies to efficient portfolios only. Individual securities and inefficient portfolios lie below it, because they carry diversifiable risk that earns no reward.

### 10.2.4 Practical consequences for managers and investors

Although the idea of a single optimal risky portfolio is a theoretical simplification, it has practical force.

- **Passive indexing.** If the market portfolio is the tangency portfolio, then a low-cost index fund combined with cash or leverage is an efficient strategy. Active managers must earn enough to cover their fees.
- **Asset-allocation policy.** A pension fund's primary decision is the risk-level mix between a diversified risky portfolio and low-risk assets, not the selection of individual securities. Differences in strategic allocation typically explain most of the variation in fund returns.
- **Constraints.** Many investors cannot borrow at the risk-free rate, which flattens the upper part of the line and gives high-beta assets an extra attraction; this is one explanation (discussed in Section 10.8) for empirical deviations from the CAPM.

