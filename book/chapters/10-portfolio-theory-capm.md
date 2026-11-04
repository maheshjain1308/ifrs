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

