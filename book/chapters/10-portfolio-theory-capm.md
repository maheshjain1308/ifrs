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

## 10.3 The Capital Asset Pricing Model

### 10.3.1 Assumptions

The CAPM, developed independently by Sharpe, Lintner, and Mossin in the 1960s, derives equilibrium prices from the portfolio theory above. It rests on a set of idealized assumptions:

1. Investors are risk-averse, care only about the mean and variance of portfolio returns over a single period, and maximize expected utility.
2. All investors have identical (homogeneous) expectations about returns, variances, and covariances.
3. There is a risk-free asset at which all investors can lend and borrow without limit.
4. Markets are frictionless: no taxes, no transaction costs, and all assets are infinitely divisible and tradable.
5. Investors are price takers, and the information is costlessly available to all.

These assumptions are obviously unrealistic. The model is valuable not because they are true but because the structure that results is simple, testable, and a useful first approximation. The relaxation of each assumption has been studied, and generally the central message (priced risk is market-related risk) survives in modified form.

### 10.3.2 Deriving the Security Market Line

Under the assumptions, every investor holds the market portfolio M, plus or minus cash. In equilibrium, M is the tangency portfolio and the expected return of every asset must be consistent with its contribution to the risk of M. The marginal contribution of asset i to the variance of the market portfolio is proportional to its covariance with the market, σ_iM. In equilibrium the ratio of an asset's risk premium to its marginal risk contribution must be the same for all assets, including M itself:

```
[E(R_i) − r_f] / σ_iM  =  [E(R_M) − r_f] / σ_M²
```

Rearranging gives the **Security Market Line** (SML):

```
E(R_i) = r_f + β_i [E(R_M) − r_f]
β_i = σ_iM / σ_M² = Cov(R_i, R_M) / Var(R_M)
```

The **beta** of a security is the ratio of its covariance with the market to the variance of the market. It measures how many percentage points the security's return tends to move per one-point move in the market. The market portfolio has beta 1 by construction; the risk-free asset has beta 0. A portfolio's beta is the weighted average of the betas of its constituents.

The SML is the central empirical and practical implication of the CAPM:

> The expected return on any asset equals the risk-free rate plus beta times the market risk premium.

Two points deserve emphasis. First, **only beta matters**: an asset's own standard deviation and its idiosyncratic risk do not enter the required return. Second, the **SML is not the CML**. The CML plots *efficient portfolios* with standard deviation on the horizontal axis; the SML plots *any asset or portfolio* with beta on the horizontal axis. For a fully diversified portfolio, the two coincide in the sense that its standard deviation equals β_p σ_M.

### 10.3.3 The SML as a hurdle rate and a pricing benchmark

An asset's SML return is the return required by diversified investors for its systematic risk. It plays two roles.

1. **Cost of equity.** For a firm, the required return on its equity is r_E = r_f + β_E × MRP. This is the discount rate for equity cash flows and a component of the weighted average cost of capital (WACC).
2. **A benchmark for pricing.** An asset whose expected return (given by the analyst's forecasts) lies above the SML is underpriced: it offers a positive **alpha**, α = E(R_i) − [r_f + β_i(E(R_M) − r_f)]. An asset below the line is overpriced and has negative alpha. If prices are in equilibrium, all alphas are zero.

**Example 10.3 – Required returns on the SML and alpha.** The risk-free rate is 3 percent and the market risk premium is 6 percent.

*Required returns:*

| Stock | Beta | Required return = 3% + β × 6% |
|---|---|---|
| Utility U | 0.60 | 3% + 3.6% = 6.6% |
| Market index | 1.00 | 3% + 6.0% = 9.0% |
| Cyclical manufacturer C | 1.40 | 3% + 8.4% = 11.4% |

*Alpha screening.* An analyst forecasts the following expected returns for two other stocks:

| Stock | Beta | Analyst's expected return | SML required return | Alpha |
|---|---|---|---|---|
| Q | 1.30 | 12.0% | 3% + 1.3 × 6% = 10.8% | +1.2% |
| R | 0.80 | 7.0% | 3% + 0.8 × 6% = 7.8% | −0.8% |

*Interpretation.* Q plots above the SML: it offers 1.2 percentage points more than its beta justifies, so it appears underpriced and attractive. R plots below the line and appears overpriced. The analyst should ask what could be wrong with the forecasts before acting, since the typical difference between forecast and equilibrium return is dominated by forecasting error, and a modest alpha can vanish with a small change in beta or in the market risk premium. If Q's beta were 1.5 instead of 1.3, its required return would be 12.0% and its alpha would be zero.

### 10.3.4 Using the CAPM in corporate finance

For a firm with a well-estimated equity beta of 1.15, a risk-free rate of 4 percent, and a market risk premium of 5.5 percent, the cost of equity is 4% + 1.15 × 5.5% = 10.325%. Inputs deserve careful choice.

- **Risk-free rate.** Use a government yield whose maturity matches the horizon of the cash flows being valued, typically a long-term bond yield for long-lived projects. The currency must match the currency of the cash flows.
- **Market risk premium.** Use a forward-looking, defensible estimate (Chapter 9), consistently applied across the firm's valuations.
- **Beta.** Estimated from historical regression or from comparable firms, with the adjustments in Section 10.4.

The CAPM's resulting discount rate applies to the *systematic* risk of cash flows. Idiosyncratic risk should be incorporated in the expected cash flows and scenario analysis, not by raising the discount rate. A common error is to add a "company-specific premium" to compensate for an uncertain forecast: this double-counts risk if the cash flows are already probability-weighted and penalizes smaller or less-diversified firms arbitrarily. (There are legitimate reasons for adjustments, such as illiquidity in a private-company valuation, but they should be explicit and justified.)

## 10.4 Estimating Beta

### 10.4.1 The characteristic line

In practice, beta is estimated by regressing the excess returns of a security on the excess returns of a market index:

```
R_i,t − r_f,t = α_i + β_i (R_M,t − r_f,t) + ε_i,t
```

This regression line is called the **characteristic line**. The slope coefficient is the estimate of beta; it equals the sample covariance of the security's and the market's returns divided by the sample variance of the market's returns:

```
β̂ = Σ (R_M,t − R̄_M)(R_i,t − R̄_i) / Σ (R_M,t − R̄_M)²
```

The intercept is the estimate of Jensen's alpha, and the R² of the regression is the proportion of variance that is systematic (Chapter 9). The standard error of the slope tells us how precisely beta is measured.

**Example 10.4 – Estimating beta by regression.** To keep the arithmetic visible we use eight quarterly observations (real applications use at least 60 monthly or 100 weekly observations). Returns are in excess of the risk-free rate, so the market return below is already a market excess return.

| Quarter | Market excess return R_M | Stock excess return R_i |
|---|---|---|
| 1 | 4% | 8% |
| 2 | −2% | −5% |
| 3 | 6% | 5% |
| 4 | 1% | 4% |
| 5 | −5% | −7% |
| 6 | 8% | 13% |
| 7 | 3% | 1% |
| 8 | −1% | 2% |

*Step 1 – Means.* R̄_M = 14 / 8 = 1.75%. R̄_i = 21 / 8 = 2.625%.

*Step 2 – Deviations and sums.* Market deviations: 2.25, −3.75, 4.25, −0.75, −6.75, 6.25, 1.25, −2.75 (in %). Stock deviations: 5.375, −7.625, 2.375, 1.375, −9.625, 10.375, −1.625, −0.625 (in %).

```
Σ (dev_M)²           = 0.013150      (in decimal units)
Σ (dev_M)(dev_i)     = 0.017925
Σ (dev_i)²           = 0.029788
```

*Step 3 – Beta and alpha.*

```
β̂ = 0.017925 / 0.013150 = 1.363
α̂ = R̄_i − β̂ R̄_M = 2.625% − 1.363 × 1.75% = 2.625% − 2.386% = 0.24% per quarter
```

*Step 4 – Fit and precision.* Computing each residual as R_i − α̂ − β̂ R_M gives +2.31%, −2.51%, −3.42%, +2.40%, −0.42%, +1.86%, −3.33%, +3.12%. The residual sum of squares (RSS) is 0.005354 in decimal units.

```
R² = 1 − RSS/TSS = 1 − 0.005354 / 0.029788 = 0.820
Correlation = 0.906
Residual standard deviation = √(0.005354 / 6) = 2.99% per quarter
SE(β̂) = √[ (RSS/(n−2)) / Σ(dev_M)² ] = √[ (0.005354/6) / 0.013150 ] = 0.260
t-statistic = 1.363 / 0.260 = 5.23
95% confidence interval (t₆ = 2.447): 1.363 ± 2.447 × 0.260 = 0.73 to 2.00
```

*Interpretation.* The point estimate suggests a stock that is 36 percent more sensitive than the market, and 82 percent of its variance is systematic. But the confidence interval is wide: the true beta could plausibly lie anywhere from 0.73 to 2.00. Even with 60 observations and a better fit, beta intervals of ±0.3 are typical for individual stocks. A manager who plans to use this beta to price a project should treat it as an estimate, not a fact.

### 10.4.2 Statistical and practical issues

Estimating beta involves many choices, and they matter.

- **Return interval and window.** Monthly returns over five years are the most common convention; weekly returns over two years are another. Shorter intervals produce more observations but increase bias for thinly traded stocks, whose prices adjust to market moves with a lag. The choice can move beta by 0.1 to 0.3.
- **Market index.** The CAPM market portfolio includes all risky assets (equities, bonds, real estate, human capital), but the available proxy is an equity index. This is the foundation of Roll's critique (Section 10.8).
- **Thin trading.** Stocks that trade infrequently have betas biased downward because their recorded prices do not reflect market movements on the same day.
- **Structural change.** A firm's beta changes when it changes its business mix or leverage, and a historical regression reflects the *past* firm.
- **Estimation error and mean reversion.** Betas estimated from a historical regression regress toward 1 over time: extreme high betas tend to be overestimates, and extreme low betas underestimates. Practitioners therefore commonly use an **adjusted beta**, often the Blume adjustment:

```
Adjusted β = (2/3) × raw β + (1/3) × 1.0
```

For the raw beta of 1.363 in Example 10.4, the adjusted beta is 0.667 × 1.363 + 0.333 = 1.243. Vendors differ in their weights and methods, and the analyst should know which version is being used.

### 10.4.3 Betas from comparable firms: unlevering and relevering

A single firm's regression beta is often too noisy to use. A better estimate of a business's risk is the average beta across a group of **pure-play** comparable firms, adjusted for their capital structures. Equity beta reflects two kinds of risk: the risk of the business assets, and the extra risk of financial leverage. The **asset (unlevered) beta**, β_U, isolates business risk. Under the common assumptions that debt is risk-free and the debt-to-equity ratio is held constant (the Hamada relation):

```
β_E = β_U × [1 + (1 − T)(D/E)]        β_U = β_E / [1 + (1 − T)(D/E)]
```

where T is the corporate tax rate. The procedure is to (1) unlever each comparable's equity beta using its own D/E and tax rate, (2) average the asset betas, and (3) relever at the target firm's (or project's) intended capital structure.

**Example 10.5 – Unlevering and relevering a comparable's beta.** A listed pure-play comparable to Brightline's cold-storage project has an equity beta of 1.40, a debt-to-equity ratio of 0.50, and faces a 25 percent tax rate. Brightline plans to finance the project with a debt-to-equity ratio of 0.25.

*Unlever:*

```
β_U = 1.40 / [1 + (1 − 0.25)(0.50)] = 1.40 / 1.375 = 1.018
```

*Relever at D/E = 0.25:*

```
β_E = 1.018 × [1 + 0.75 × 0.25] = 1.018 × 1.1875 = 1.209
```

*Cost of equity* (r_f = 3%, MRP = 6%): 3% + 1.209 × 6% = **10.25%**. Had the manager used the comparable's raw equity beta of 1.40, the cost of equity would have been 11.4%, a difference of 1.15 percentage points arising purely from the capital-structure mismatch. Using Brightline's company-wide beta rather than the project's business beta would introduce a different error, as the next section discusses.

*Interpretation.* Asset betas strip out financing choices so that business risk can be transferred across firms. A real application should also consider that debt has some beta, so the simple formula tends to overstate the leverage effect when debt is risky; practitioners with highly leveraged comparables use extended versions of the formula that allow a positive debt beta.

### 10.4.4 Project and divisional betas

The discount rate should reflect the risk of the *project*, not the firm that undertakes it. A company whose average beta is 1.1 may have a trucking division with a beta of 1.3, a cold-storage division with 0.85, and a technology investment with 1.8. Discounting all three at the same rate causes the firm to accept too many high-risk projects, which have a positive NPV only because their risk is understated, and to reject too many safe ones. Over time the firm drifts toward higher risk without earning compensating returns. The solution is to estimate the beta of each business line from pure-play comparables, as in Example 10.5, or to use a risk-adjusted hurdle rate scheme with several risk categories.

## 10.5 Performance Measurement

The CAPM supplies benchmarks for evaluating portfolios, since raw returns cannot be compared without adjusting for risk. Three standard measures differ in the risk concept they use.

**Sharpe ratio** (reward-to-variability): total excess return per unit of total risk.

```
Sharpe = (R̄_p − r_f) / σ_p
```

It is appropriate for evaluating a portfolio that represents an investor's entire risky holdings, because total risk is what that investor bears.

**Treynor ratio** (reward-to-volatility): excess return per unit of systematic risk.

```
Treynor = (R̄_p − r_f) / β_p
```

It is appropriate for evaluating a portfolio as one component of a larger diversified portfolio, where idiosyncratic risk is diversified away by other holdings.

**Jensen's alpha**: the difference between the portfolio's average return and what the SML predicts for its beta.

```
α_p = R̄_p − [r_f + β_p (R̄_M − r_f)]
```

Alpha is a measure in return units, directly interpretable as "excess return after adjusting for beta."

**Example 10.6 – Three performance measures can disagree.** The risk-free rate is 3 percent. The market return is 9 percent with a standard deviation of 15 percent (so the market's Sharpe ratio is 0.40 and its Treynor ratio is 6 percent). Over the same period, three funds report:

| Fund | Average return | Standard deviation | Beta |
|---|---|---|---|
| A | 14% | 22% | 1.30 |
| B | 11% | 12% | 0.80 |
| C | 9% | 9% | 0.50 |

*Sharpe ratios.*

```
A: (14 − 3) / 22 = 0.500
B: (11 − 3) / 12 = 0.667
C: (9 − 3) / 9   = 0.667
```

*Treynor ratios.*

```
A: (14 − 3) / 1.30 = 8.46%
B: (11 − 3) / 0.80 = 10.00%
C: (9 − 3) / 0.50  = 12.00%
```

*Jensen's alphas.*

```
A: 14 − [3 + 1.30 × 6] = 14 − 10.8 = +3.2%
B: 11 − [3 + 0.80 × 6] = 11 − 7.8  = +3.2%
C: 9  − [3 + 0.50 × 6] = 9  − 6.0  = +3.0%
```

*Rankings.*

| Measure | Ranking (best to worst) |
|---|---|
| Sharpe | B = C, then A |
| Treynor | C, then B, then A |
| Jensen's alpha | A = B, then C |

*Interpretation.* All three funds beat the market on every measure (Sharpe above 0.40, Treynor above 6 percent, positive alpha), but they rank differently. Fund A has the highest absolute return and the highest alpha, but it earns the least per unit of total risk, indicating that it bears considerable idiosyncratic risk. If A were the investor's only holding, the Sharpe ratio would be the relevant statistic and A would rank last. If A were one of many funds in a large diversified portfolio, the idiosyncratic risk would be diversified and alpha would be the relevant statistic, and A would rank at the top. The right measure depends on the role the fund plays in the investor's portfolio. Note, finally, that a few years of results rarely distinguish skill from luck: for a fund with 5 percent tracking error, an annual alpha of 3 percent measured over five years has a t-statistic of only 3 / (5 / √5) = 1.34.

## 10.6 Arbitrage Pricing Theory and Multifactor Models

### 10.6.1 The idea of factor models

The CAPM says there is one source of priced risk, the return on the market portfolio. The real world appears richer. Stocks respond differently to inflation shocks, interest-rate changes, industrial production, and commodity prices, even after controlling for their sensitivity to the equity index. A **factor model** posits that returns are generated by exposure to a small number of common factors plus an idiosyncratic term:

```
R_i = E(R_i) + b_i1 F₁ + b_i2 F₂ + ... + b_iK F_K + ε_i
```

Here each F_k is a *surprise* (unexpected change) in a systematic factor with mean zero, b_ik is the sensitivity (factor loading) of asset i to factor k, and ε_i is idiosyncratic noise with mean zero that is uncorrelated with the factors and across assets. The single-index model of Chapter 9 is the special case with one factor, the market return.

### 10.6.2 Arbitrage Pricing Theory

Stephen Ross's **Arbitrage Pricing Theory (APT)** derives a pricing relation from a weaker set of assumptions than the CAPM. It assumes only that returns follow a factor structure, that there are enough securities to diversify away idiosyncratic risk, and that markets do not allow arbitrage (riskless profit with no net investment). The intuition is that if two portfolios have the same exposure to every factor, they have the same risk once idiosyncratic risk is diversified, and thus must have the same expected return; otherwise an investor could buy the cheap one, sell the expensive one, and earn a riskless profit. The result is a linear relation between expected return and factor loadings:

```
E(R_i) = r_f + b_i1 λ₁ + b_i2 λ₂ + ... + b_iK λ_K
```

where λ_k is the **factor risk premium**: the expected excess return on a portfolio with unit exposure to factor k and zero exposure to all other factors. The CAPM emerges as a special case when the only priced factor is the market portfolio.

APT differs from the CAPM in important ways.

| Feature | CAPM | APT |
|---|---|---|
| Source of risk | One factor (market portfolio) | K factors (unspecified by the theory) |
| Key assumptions | Mean-variance investors, homogeneous expectations, market portfolio observable | No arbitrage, factor structure, many assets |
| Role of market portfolio | Central | Not required |
| Pricing statement | Holds for every asset in equilibrium | Holds for almost all assets in a large economy |
| Practical guidance | Specifies the factor and its premium | Does not say which factors or what the premia are |

The last row is the main weakness. APT does not tell us what the factors are. The analyst must choose them, and different choices lead to different estimates. Three approaches exist: **macroeconomic factor models** (using variables such as GDP growth, inflation, and term spreads), **statistical models** (extracting factors from the covariance matrix of returns by factor analysis or principal components), and **fundamental or characteristic-based models** (using firm attributes such as size, value, and momentum).

### 10.6.3 Using a macroeconomic multifactor model

**Example 10.7 – Expected and realized return in a three-factor APT model.** A stock has the following sensitivities and the economy has these factor risk premia, with a risk-free rate of 3%:

| Factor | Loading b | Factor risk premium λ |
|---|---|---|
| Unexpected GDP growth | 1.20 | 4.0% |
| Unexpected inflation | 0.50 | 2.0% |
| Unexpected change in long-term interest rates | −0.30 | 3.0% |

*Expected (required) return.*

```
E(R) = 3% + 1.20(4%) + 0.50(2%) + (−0.30)(3%)
     = 3% + 4.8% + 1.0% − 0.9% = 7.9%
```

*Realized return in a year of surprises.* Suppose that unexpected GDP growth was −1.5 percentage points, unexpected inflation was +0.5 points, and the unexpected change in interest rates was +1.0 point, and the firm had no idiosyncratic shock (ε = 0). Each surprise is measured in the same units as the loading:

```
R = E(R) + b₁F₁ + b₂F₂ + b₃F₃ + ε
  = 7.9% + 1.20(−1.5%) + 0.50(0.5%) + (−0.30)(1.0%) + 0
  = 7.9% − 1.8% + 0.25% − 0.30% = 6.05%
```

*Interpretation.* The stock's required return is 7.9 percent. The negative loading on interest rates means the stock does well when rates rise unexpectedly, so it acts as a partial hedge and lowers the required return. The realized return of 6.05 percent is below expectation, due to the GDP shortfall, to which the stock is highly exposed. A CAPM analysis with a single beta would summarize the same risks in one number and cannot distinguish a stock that is cyclical from one that is rate-sensitive, even if the two have the same market beta. For a manager, a multifactor model identifies *which* macroeconomic risks the project carries and helps in designing hedges.

### 10.6.4 Evidence and use of multifactor models

Multifactor models fit the cross-section of returns better than a single-factor CAPM, but their added complexity comes with costs: more parameters to estimate, instability of factor premia over time, and the risk of data mining (testing many candidate factors until one appears to work). Practitioners use multifactor models mainly in portfolio construction and risk management (to decompose a portfolio's exposures to sources of risk, to control tracking error, and to hedge unintended bets) and, less often, in setting corporate discount rates.

## 10.7 The Fama-French Factors

### 10.7.1 Anomalies that challenged the CAPM

By the late 1970s and 1980s, researchers had documented patterns in average returns that beta alone could not explain. Small-company stocks earned higher average returns than their betas predicted (the size effect), and stocks with high book-to-market ratios ("value" stocks) earned more than stocks with low ratios ("growth" stocks), again beyond what beta could account for. Eugene Fama and Kenneth French's influential work in the early 1990s showed that, in U.S. data, firm size and book-to-market ratio explained cross-sectional return differences better than beta did.

### 10.7.2 The three-factor model

Fama and French responded with a three-factor model built on tradable factor portfolios:

```
R_i − r_f = α_i + β_i (R_M − r_f) + s_i SMB + h_i HML + ε_i
```

- **MKT (R_M − r_f)**: the market excess return, as in the CAPM.
- **SMB (small minus big)**: the return on a portfolio that is long small-capitalization stocks and short large-capitalization stocks. A positive loading s_i means the stock behaves like a small company.
- **HML (high minus low)**: the return on a portfolio long high book-to-market (value) stocks and short low book-to-market (growth) stocks. A positive loading h_i means the stock behaves like a value stock.

The expected return implied by the model is

```
E(R_i) = r_f + β_i E(MKT) + s_i E(SMB) + h_i E(HML)
```

where E(SMB) and E(HML) are the average factor premia, typically estimated from long historical samples and with the same imprecision (Chapter 9, Section 9.6) as the market premium.

Subsequent research added further factors. Mark Carhart added **momentum** (UMD or WML: winners minus losers over the past year), reflecting the tendency of recent winners to continue to outperform in the short run. Fama and French later proposed a five-factor model adding **profitability** (RMW: robust minus weak operating profitability) and **investment** (CMA: conservative minus aggressive asset growth). Many other "factors" have been proposed, including low volatility, quality, and liquidity.

### 10.7.3 Interpreting the factors: risk or mispricing?

Why do small and value stocks earn higher average returns? Two broad explanations exist, and the debate remains unsettled.

- **Rational (risk-based) explanations.** The factors may proxy for risks that investors dislike but that the market beta does not capture: for example, value firms may be financially distressed or inflexible in downturns, and small firms may be more vulnerable to credit conditions. Investors demand a premium for bearing these risks, particularly if they bear on states of the world in which investors' incomes fall.
- **Behavioral and market-friction explanations.** Investors may extrapolate recent success, overpaying for glamorous growth stocks and underpaying for unloved value stocks, with limits to arbitrage preventing correction. Alternatively, the premia may reflect compensation for illiquidity, institutional constraints on leverage, or simply data mining.

This matters for corporate managers: if the factor premia are compensation for risk, then a firm with high loadings should use a higher discount rate. If they are mispricing, the discount rate for valuation purposes should arguably not rise, although the firm's actual cost of raising capital may.

**Example 10.8 – Expected return and alpha under the Fama-French model.** The risk-free rate is 3%; the assumed factor premia are MKT = 6%, SMB = 2%, and HML = 4%. Two stocks have the following estimated loadings:

| Stock | β (MKT) | s (SMB) | h (HML) |
|---|---|---|---|
| S: a growth-oriented larger firm | 1.10 | 0.50 | −0.30 |
| V: a small value firm | 0.90 | −0.20 | 0.60 |

Recall the sign conventions: a positive s means small-firm behavior and a negative s large-firm behavior, while a negative h means growth-stock behavior.

*Stock S.*

```
E(R_S) = 3% + 1.10(6%) + 0.50(2%) + (−0.30)(4%)
       = 3% + 6.6% + 1.0% − 1.2% = 9.4%
```

*Stock V.*

```
E(R_V) = 3% + 0.90(6%) + (−0.20)(2%) + 0.60(4%)
       = 3% + 5.4% − 0.4% + 2.4% = 10.4%
```

*Comparison with the CAPM, which uses beta only:*

```
CAPM for S: 3% + 1.10(6%) = 9.6%
CAPM for V: 3% + 0.90(6%) = 8.4%
```

*Interpretation.* The CAPM says S requires more than V because of its higher beta (9.6% versus 8.4%). The three-factor model reverses the ranking (S 9.4% versus V 10.4%), because V's value tilt is heavily rewarded (+2.4 points) and S's growth tilt penalizes its required return (−1.2 points). Using CAPM alone would understate V's cost of capital by 2.0 points and overstate S's by 0.2 points. Because the SMB and HML premia are themselves measured with large standard errors, the three-factor numbers should not be treated as more precise merely because they come from a richer model.

*Alpha evaluation.* If a fund with the same loadings as S earned an average of 13% over the period, then its alpha against the three-factor benchmark is 13% − 9.4% = **+3.6%**; against the CAPM benchmark, it would be 13% − 9.6% = +3.4%. A fund that earns its returns by tilting toward small and value stocks would show a positive CAPM alpha and a near-zero three-factor alpha, which is why factor models have become the standard for separating "skill" from a systematic style exposure that investors could replicate cheaply.

## 10.8 Critiques, Evidence, and Practical Application

### 10.8.1 Empirical tests of the CAPM

Early tests (Black, Jensen, and Scholes; Fama and MacBeth) found that average returns are positively related to beta, as the CAPM predicts, but that the relation is *flatter* than the theory implies: low-beta stocks earned more than predicted and high-beta stocks earned less. Later studies found that beta has weak explanatory power once other characteristics (size, value, momentum, profitability) are controlled. The **low-volatility anomaly**, the finding that lower-risk stocks have earned comparable or higher returns than higher-risk stocks, is a further challenge. A common explanation is that leverage constraints lead investors to seek high-beta stocks as a substitute for borrowing, bidding up their prices and lowering their subsequent returns, consistent with a version of the CAPM in which borrowing is restricted (the Black zero-beta model).

### 10.8.2 Roll's critique

Richard Roll pointed out that the CAPM's central prediction, that the true market portfolio is mean-variance efficient, is in principle untestable, because the true market portfolio includes all assets (real estate, human capital, private businesses, foreign and non-traded assets), and any index used as a proxy may itself be inefficient or efficient, leading to rejections or acceptances that say nothing about the theory. The critique does not mean the CAPM is wrong; it means that tests of the model are joint tests of the model and the choice of market proxy. It also helps explain why the estimated betas are sensitive to the index chosen.

### 10.8.3 Other extensions

Theoretical extensions relax the CAPM's assumptions while keeping the spirit of the model.

- **Zero-beta CAPM (Black).** If riskless borrowing is unavailable, the SML is flatter, with a zero-beta portfolio replacing the risk-free asset.
- **Intertemporal CAPM (Merton).** When investment opportunities change over time, investors hedge against shifts, and additional state-variable risks are priced.
- **Consumption CAPM.** Risk is measured by covariance with aggregate consumption growth rather than the market return, providing a link between asset prices and the macroeconomy.
- **Liquidity-adjusted CAPM.** Assets that are illiquid, or whose liquidity declines when the market falls, require higher returns.

### 10.8.4 What should a manager use?

Despite its empirical shortcomings, the CAPM remains the most widely used model for the cost of equity in corporate practice, for a combination of reasons. It is simple and transparent; its inputs are observable or estimable; its central lesson (diversified investors price only systematic risk) is robust; and the alternatives require more inputs that are also estimated with error. A reasonable practitioner approach is:

1. Use the CAPM as the base case, with carefully estimated and adjusted betas, a defensible risk-free rate and market premium, and business-specific betas for projects.
2. Cross-check using a multifactor model, particularly for firms with extreme size or value characteristics, or for high-stakes valuations.
3. Examine the range of outcomes, not just a point estimate, using sensitivity analysis on beta and the market premium.
4. Compare the implied cost of capital to other evidence: yields on the firm's debt plus an equity risk spread, survey-based estimates, or market-implied costs of capital.
5. Never let the sophistication of the model substitute for judgment about the cash flows. A 0.5 percentage point error in the discount rate is typically much less costly than an unrealistic cash-flow forecast.

### 10.8.5 Summary of the three pricing frameworks

| Framework | Risk measure | Number of priced factors | Strength | Limitation |
|---|---|---|---|---|
| CAPM | Beta relative to market | 1 | Simple, intuitive, widely used | Weak empirical fit; market proxy problem |
| APT / macro multifactor | Loadings on macro factors | K (chosen by analyst) | Flexible, identifies risk sources | Factors and premia not specified by theory |
| Fama-French and extensions | Loadings on market, size, value (and others) | 3 to 6 | Better empirical fit | Risk-versus-mispricing debate; unstable premia |

## Case Study: The Hurdle Rate Debate at Brightline Logistics

*Brightline Logistics is a fictional company created for this case.*

Brightline Logistics is a regional trucking and warehousing company whose shares trade on a national exchange. Its CFO, Marcus Oyelaran, has to submit a capital plan to the board, and the plan includes three major projects. The investment committee has so far used a single company-wide hurdle rate of 9.5 percent for all projects, and Marcus believes this practice is distorting capital allocation. He asks his analyst, Yuki Tanaka, to prepare a case for project-specific discount rates.

Yuki collects the following information. The risk-free rate (the yield on a long-term government bond) is 3.0 percent, and the finance department uses a market risk premium of 6.0 percent. Brightline's own historical equity beta, from a regression of five years of monthly returns on a broad index, is 1.20 with a standard error of 0.22. Its debt-to-equity ratio is 0.40, its tax rate is 25 percent, and its pre-tax cost of debt is 5.0 percent. Using the company-wide beta, its cost of equity is 3.0% + 1.20 × 6.0% = 10.2%, and its after-tax WACC computed from these inputs is about 8.4 percent (0.714 × 10.2% + 0.286 × 5.0% × 0.75). The investment committee has nonetheless applied a flat 9.5 percent hurdle to all projects for many years, as a conservative policy rule.

The three projects are as follows.

1. *Fleet expansion* ($90 million). This is a core activity, and Yuki believes its risk is similar to the firm's existing business.
2. *Automated cold-storage warehouse* ($60 million). Yuki identifies four listed pure-play cold-chain operators with an average equity beta of 0.95, an average D/E of 0.60, and a 25 percent tax rate. The project's financing would be 30 percent debt, 70 percent equity (D/E = 0.4286).
3. *Freight-matching technology stake* ($40 million). Comparable listed logistics-technology companies have an average equity beta of 1.70, are almost entirely equity financed, and show a wide dispersion of individual betas (from 1.1 to 2.4).

Projected returns on investment (the internal rates of return on forecast cash flows) are 10.0 percent for the fleet, 9.0 percent for the warehouse, and 15.0 percent for the technology stake. Under the flat 9.5 percent hurdle, the fleet (10.0 percent) and the technology stake (15.0 percent) would be accepted and the warehouse (9.0 percent) rejected.

Marcus raises two other issues. First, the pension fund's equity manager has delivered an average return of 11.0 percent with a beta of 1.15 and a standard deviation of 17 percent; the market's average return was 9.0 percent, which makes his market premium 6.0 percent, and the market's standard deviation was 15 percent. A committee member wants to renew the manager's mandate because the manager "beat the market by 2 points." Second, a board member who reads the financial press asks why the company uses the CAPM at all, since "academics have shown that beta doesn't work and that size and value factors explain returns." Brightline's market capitalization places it among mid-sized firms, and its stock has a mild value tilt, with an estimated HML loading of 0.35 and an SMB loading of 0.20.

Marcus wants a recommendation that is technically defensible and can be explained to the board in plain language. He is aware that the analysis involves statistical uncertainty in the betas, a subjective market risk premium, and genuine disagreement among academics about the right model. The board will meet in two weeks.

**Discussion questions**

1. Unlever the cold-storage comparables' average beta and relever it at the project's financing mix. Compute the project's cost of equity using the CAPM, and discuss whether the warehouse project, with a projected 9.0 percent return, should be accepted or rejected. (You may approximate the project discount rate by weighting the cost of equity with the after-tax cost of debt at the project's 30/70 financing mix.)
2. Compute the cost of equity for the technology stake and discuss how the dispersion in comparable betas should affect the decision. Is the technology stake's 15.0 percent projected return sufficient? What additional analysis would you require?
3. Evaluate the pension manager using Jensen's alpha, the Treynor ratio, and the Sharpe ratio (use a risk-free rate of 3 percent). Does "beat the market by 2 points" demonstrate skill?
4. Respond to the board member's critique. How would the three-factor model change the cost of equity for Brightline, using factor premia of SMB = 2 percent and HML = 4 percent? How should the CFO decide whether to rely on the CAPM or the multifactor model?

## Key Takeaways

- Portfolios, not individual assets, are the unit of analysis. Combining imperfectly correlated assets yields a better risk-return trade-off, and the minimum-variance portfolio can have lower risk than any single asset.
- The efficient frontier contains the portfolios with the highest expected return for each level of risk; inputs are estimated with error, and optimizers can amplify those errors.
- With a risk-free asset, the efficient set becomes a straight line from the risk-free rate through the tangency portfolio. The separation theorem says that all investors hold the same risky portfolio and differ only in how much they lend or borrow.
- In equilibrium, the tangency portfolio is the market portfolio, and the line is the Capital Market Line. The CML prices the total risk of efficient portfolios; it is not the same thing as the SML.
- The CAPM implies that expected return equals the risk-free rate plus beta times the market risk premium. Only systematic risk is priced, and an asset plotting above the SML has a positive alpha.
- Beta is estimated by regression, and the estimate is imprecise: a confidence interval of plus or minus 0.3 or more is typical. Adjust betas for mean reversion and be explicit about the return interval, window, and index.
- Business risk should be priced by comparable pure-play asset betas, unlevered and relevered to the project's capital structure. A single company-wide hurdle rate leads to systematic misallocation toward risky projects.
- The Sharpe, Treynor, and Jensen measures answer different questions and can rank managers differently; the relevant measure depends on whether the portfolio is held in isolation or as part of a diversified whole.
- The APT replaces the market portfolio with multiple factors and the no-arbitrage condition, but it does not tell the analyst which factors to use or what their premia are.
- The Fama-French factors (size, value, and later profitability, investment, and momentum) explain cross-sectional returns better than beta alone. Whether they represent risk or mispricing is unresolved, and good practice uses the CAPM as a base case, cross-checked against a multifactor model and sensitivity analysis.

## Review Questions

1. Why can the minimum-variance portfolio of two risky assets have lower risk than either asset? Under what correlation does this fail?
2. Distinguish between the opportunity set, the minimum-variance frontier, and the efficient frontier.
3. What does the separation theorem say, and how does it simplify the advice an investment adviser gives to clients with different risk tolerances?
4. What are the slope and intercept of the Capital Market Line, and why does an individual stock not lie on it?
5. Explain the difference between the CML and the SML. On which axes is each plotted, and to which assets does each apply?
6. State three assumptions of the CAPM and discuss the consequences if each is violated.
7. Why does the CAPM imply that a firm's total (stand-alone) risk is irrelevant to its cost of equity? Give two reasons why managers nonetheless care about total risk.
8. Why is a beta estimate subject to considerable error? Describe three practical decisions in the regression that affect the result.
9. Explain how to obtain a project's discount rate from pure-play comparables. Why must one unlever and relever betas?
10. Compare the CAPM, APT, and the Fama-French three-factor model. For what purposes would a CFO prefer each?

## Problems

**Problem 10.1.** Asset X has σ = 25% and asset Y has σ = 15%, with a correlation of 0.10. Compute the weight in X, the variance, and the standard deviation of the minimum-variance portfolio.

**Problem 10.2.** The risk-free rate is 4% and the market risk premium is 5.5%. (a) Compute the required return on a stock with a beta of 1.15. (b) If an analyst forecasts a return of 12% for that stock, compute its alpha and say whether the stock appears under- or overpriced.

**Problem 10.3.** (a) The covariance of a stock's returns with the market is 0.0405 and the market variance is 0.0324 (σ_M = 18%). Compute the beta. (b) A comparable firm has an equity beta of 1.35, a debt-to-equity ratio of 0.60, and a tax rate of 30%. Compute its unlevered beta, relever it at D/E = 0.20, and compute the resulting cost of equity with r_f = 4% and MRP = 5.5%.

**Problem 10.4.** A portfolio is invested 30% in a stock with a beta of 1.4, 50% in a stock with a beta of 0.9, and 20% in Treasury bills. Compute the portfolio beta and the required return (r_f = 4%, MRP = 5.5%).

**Problem 10.5.** The market portfolio has an expected return of 9% and a standard deviation of 15%; the risk-free rate is 3%. (a) Write the Capital Market Line. (b) An investor wants a portfolio with a standard deviation of 21%. What weights in the market and the risk-free asset achieve this, and what is the expected return?

**Problem 10.6.** A portfolio has an average return of 12%, a standard deviation of 20%, and a beta of 1.1. The risk-free rate is 3% and the market risk premium is 6%. Compute the Sharpe ratio, the Treynor ratio, and Jensen's alpha.

**Problem 10.7.** A two-factor APT model has r_f = 4%, a factor premium of 3% on factor 1, and 2% on factor 2. A stock has loadings of 1.5 on factor 1 and 0.8 on factor 2 and −0.4 on a third factor with premium 1%. Compute the expected return.

**Problem 10.8.** In a Fama-French three-factor model, r_f = 4%, MKT premium = 5.5%, SMB = 2%, HML = 4%. A fund has loadings of 1.00 (MKT), 0.40 (SMB), and 0.30 (HML) and earned 16%. Compute the expected return and the fund's alpha.

### Answers to Selected Problems

- **10.1.** Cov = 0.10 × 0.25 × 0.15 = 0.00375. w_X = (0.0225 − 0.00375) / (0.0625 + 0.0225 − 0.0075) = 0.01875 / 0.0775 = **0.2419** (24.19% in X, 75.81% in Y). Variance = 0.2419²(0.0625) + 0.7581²(0.0225) + 2(0.2419)(0.7581)(0.00375) = 0.003658 + 0.012931 + 0.001375 = **0.01796**; σ = **13.40%**.
- **10.2.** (a) 4% + 1.15 × 5.5% = 4% + 6.325% = **10.325%**. (b) Alpha = 12% − 10.325% = **+1.675%**; the stock appears underpriced if the forecast is reliable.
- **10.3.** (a) β = 0.0405 / 0.0324 = **1.25**. (b) β_U = 1.35 / [1 + 0.70 × 0.60] = 1.35 / 1.42 = **0.9507**. Relevered: 0.9507 × [1 + 0.70 × 0.20] = 0.9507 × 1.14 = **1.0838**. Cost of equity = 4% + 1.0838 × 5.5% = **9.96%**.
- **10.4.** β_p = 0.30(1.4) + 0.50(0.9) + 0.20(0) = 0.42 + 0.45 = **0.87**. Required return = 4% + 0.87 × 5.5% = **8.785%**.
- **10.5.** (a) E(R_c) = 3% + 0.40 σ_c (slope = 6% / 15% = 0.40). (b) x = 21 / 15 = 1.40, so **140% in the market and −40% in the risk-free asset** (borrowing). Expected return = 3% + 0.40 × 21% = **11.4%**; check: 1.4(9%) − 0.4(3%) = 12.6% − 1.2% = 11.4%.
- **10.6.** Sharpe = (12 − 3) / 20 = **0.45**. Treynor = 9 / 1.1 = **8.18%**. Alpha = 12 − [3 + 1.1 × 6] = 12 − 9.6 = **+2.4%**.
- **10.7.** E(R) = 4% + 1.5(3%) + 0.8(2%) − 0.4(1%) = 4 + 4.5 + 1.6 − 0.4 = **9.7%**.
- **10.8.** E(R) = 4% + 1.00(5.5%) + 0.40(2%) + 0.30(4%) = 4 + 5.5 + 0.8 + 1.2 = **11.5%**. Alpha = 16% − 11.5% = **+4.5%**.
