# Chapter 9: Risk and Return

## Learning Objectives

After studying this chapter, you should be able to:

- Compute and interpret holding-period, arithmetic, geometric, real, and log returns, and explain when each average is the appropriate one to use.
- Measure the risk of an asset using variance, standard deviation, and scenario analysis, and recognize the limits of these measures when returns are not symmetric.
- Calculate covariance and correlation, and explain why they, rather than the stand-alone risk of an asset, drive the risk of a portfolio.
- Derive and apply the two-asset and n-asset portfolio variance formulas, and quantify how much risk diversification can and cannot remove.
- Separate the total risk of a security into systematic (market) and idiosyncratic (firm-specific) components, and explain why only the former earns a risk premium.
- Describe how historical risk premia are estimated, why they are measured imprecisely, and how managers should use them in setting required returns.

## Opening Vignette

*The following scenario is illustrative; Alder Ridge Holdings is a fictional company.*

Alder Ridge Holdings is a family-controlled maker of agricultural equipment with annual revenue of about $1.8 billion. For three generations the family has reinvested nearly every dollar of profit in the business, and the family office now holds roughly 85 percent of its net worth in Alder Ridge shares. In a recent board meeting, the new chief financial officer, Priya Raman, presented two proposals that appeared unrelated but turned out to rest on the same idea.

The first proposal was a $120 million expansion into precision-farming software. The expansion's projected cash flows were attractive, but their volatility was extreme: in the downside scenario the unit lost money for three years. A director objected, "We cannot afford a project that swings that much. Our own earnings are volatile enough." Priya replied that the relevant question was not how much the software unit's profits swung in isolation but how they moved relative to everything else the company's owners held. Software demand, she argued, was driven by data and subscription economics, not by commodity prices and weather, which dominate the equipment business.

The second proposal came from the family office: sell 30 percent of the family's Alder Ridge shares and invest the proceeds in a broad index of public equities. Some family members were offended. "Why would we sell what we know best?" Priya's answer was blunt. The family earns no extra compensation for bearing risks that a diversified investor would not bear. Any risk that is specific to one company, no matter how well understood, can be reduced at almost no cost by holding many securities.

Both proposals hinge on a distinction at the heart of modern finance: the difference between the risk of an asset on its own and the risk it adds to a portfolio, and the related distinction between risk that diversification can remove and risk that it cannot. This chapter builds the tools to make those distinctions precise. We begin with the measurement of return, move to the measurement of risk, develop covariance and correlation, show mathematically how diversification works, split risk into systematic and idiosyncratic parts, and finish with what history can and cannot tell us about the reward investors demand for bearing risk. Chapter 10 then builds on these results to develop portfolio theory and the Capital Asset Pricing Model.

## 9.1 Measuring Returns

Before we can talk about risk, we must agree on what a return is and how to summarize a history of returns in a single number. These sound like trivial questions. In practice, mistakes in averaging returns are among the most common and expensive errors in financial analysis, because the wrong average can overstate wealth accumulation by a large margin.

### 9.1.1 The holding-period return

The **holding-period return** (HPR) is the total percentage gain on an investment over the period it is held, including both price change and any cash distributions:

```
HPR = (P₁ − P₀ + D) / P₀
```

where P₀ is the beginning price, P₁ is the ending price, and D is the cash received (dividends or interest) during the period. The ratio (P₁ − P₀)/P₀ is the *capital gain* component, and D/P₀ is the *income* (or yield) component. An investor who buys a share at $40.00, receives $1.20 in dividends, and sells at $43.60 earns an HPR of (43.60 − 40.00 + 1.20) / 40.00 = 4.80 / 40.00 = 12.0 percent, of which 9.0 percent is capital gain and 3.0 percent is dividend yield.

It is often convenient to work with the **gross return** or wealth relative, 1 + R, which is the factor by which wealth grows over the period. A 12 percent return is a gross return of 1.12. Multi-period returns compound by multiplying gross returns:

```
1 + R(0→T) = (1 + R₁)(1 + R₂)...(1 + R_T)
```

Returns must be measured on a consistent basis. Managers comparing a project's internal rate of return to a security's return should be careful that both are expressed per year and with the same compounding convention, a theme from the time-value-of-money chapters.

### 9.1.2 Nominal, real, and excess returns

Returns quoted in the market are **nominal**: they measure growth in currency units, not in purchasing power. The **real return** removes inflation, using the Fisher relationship:

```
1 + r_real = (1 + r_nominal) / (1 + inflation)
```

If a bond returns 9.5 percent in a year when inflation is 4.0 percent, the real return is 1.095 / 1.04 − 1 = 5.29 percent. The common shortcut, nominal minus inflation, gives 5.50 percent. The approximation is adequate when rates are low and becomes poor when inflation is high.

The **excess return** of an asset is its return minus the risk-free rate for the same period. Excess returns are the natural currency of risk analysis because they measure the payment received specifically for bearing risk. The expected excess return on the market portfolio is the **market risk premium**, which will appear throughout this chapter and the next.

### 9.1.3 Arithmetic versus geometric averages

Suppose we observe a sequence of annual returns and want one number that characterizes the history. There are two natural choices.

The **arithmetic average** is the simple mean:

```
R̄_A = (1/T) Σ R_t
```

The **geometric average** (also called the compound annual growth rate) is the constant annual return that would have produced the same terminal wealth:

```
R̄_G = [ Π (1 + R_t) ]^(1/T) − 1
```

The two answer different questions. The arithmetic average is the best estimate of the *expected return in a single future period*, provided that returns are independent draws from the same distribution. The geometric average describes *what actually happened to wealth* over the sample. The geometric average is always less than or equal to the arithmetic average, and the gap widens with volatility. A useful approximation is:

```
R̄_G ≈ R̄_A − σ² / 2
```

The intuition is the arithmetic of losses: a 50 percent loss requires a 100 percent gain to recover. A volatile sequence therefore compounds more slowly than its simple average suggests. We will use the volatility drag again in Section 9.6 when we discuss which average to use for a historical risk premium.

**Example 9.1 – Arithmetic and geometric average returns.** A diversified fund reports the following annual returns over six years: +12%, −8%, +20%, +5%, +15%, −15%.

*Step 1 – Arithmetic average.* The sum is 12 − 8 + 20 + 5 + 15 − 15 = 29 percentage points. Dividing by 6 gives 29 / 6 = **4.83%**.

*Step 2 – Terminal wealth per $1 invested.* Multiply the gross returns:

```
1.12 × 0.92 = 1.030400
1.030400 × 1.20 = 1.236480
1.236480 × 1.05 = 1.298304
1.298304 × 1.15 = 1.493050
1.493050 × 0.85 = 1.269092
```

Cumulative return over six years = 26.91 percent.

*Step 3 – Geometric average.* (1.269092)^(1/6) − 1. Since ln(1.269092) = 0.2383, dividing by 6 gives 0.03972, and exp(0.03972) = 1.0405, so the geometric average is **4.05%**.

*Check.* $1 × (1.0405)⁶ = $1.2691, which matches the terminal wealth. An investor who believed the fund had earned "4.83 percent per year" would expect $1.00 × 1.0483⁶ = $1.327 after six years, overstating the actual outcome by about 5.8 cents per dollar invested. The difference of 0.78 percentage points per year is the volatility drag. The approximation gives σ²/2 = 0.01886 / 2 = 0.94 percent (using the sample variance computed in Example 9.2), reasonably close.

*Interpretation.* Use 4.83 percent as the best single-period expectation if you believe the sample is representative of the future; use 4.05 percent to describe the compound wealth growth actually delivered.

### 9.1.4 Log returns

Analysts often work with **continuously compounded (log) returns**, defined as r = ln(1 + R) = ln(P₁/P₀) for returns without distributions. Log returns have a convenient property: multi-period log returns are simply the *sum* of single-period log returns, so averaging and scaling by time are simple. If annual log returns are independent with mean μ and standard deviation σ, the T-year log return has mean μT and standard deviation σ√T. Log returns cannot fall below −100 percent, which matches the limited liability of equity, and they are more nearly symmetric than simple returns. The price paid for these conveniences is that the log return of a *portfolio* is not the weighted average of the log returns of its components, so portfolio formulas in this chapter are stated in terms of simple returns.

### 9.1.5 Common mistakes in measuring returns

Several errors recur in practice:

- **Averaging the wrong way.** Reporting the arithmetic mean as the "annual growth rate" overstates compounding. Reporting the geometric mean as the "expected return for next year" understates it.
- **Ignoring distributions.** Comparing price returns across stocks with different dividend policies produces misleading rankings. Always use total return.
- **Mixing nominal and real quantities.** Discounting real cash flows at a nominal rate (or vice versa) is a classic capital-budgeting error that can swing a project from acceptable to unacceptable.
- **Survivor bias.** Samples that include only firms or funds that exist today systematically overstate historical returns, a point we return to in Section 9.6.

## 9.2 Measuring Risk

Return is what we hope to earn; risk is the possibility that we earn something different. To manage and price risk, we need a measure of the dispersion of possible outcomes.

### 9.2.1 Variance and standard deviation

For a set of T historical returns, the **sample variance** is

```
s² = [1 / (T − 1)] Σ (R_t − R̄)²
```

and the **standard deviation** is its square root, s. Dividing by T − 1 rather than T corrects for the fact that deviations are measured from the sample mean rather than the true mean, which makes the sample mean "too close" to the data. Standard deviation is expressed in the same units as returns, which makes it easier to interpret than variance. Variance, however, is the quantity that combines additively in portfolio calculations, so we will move between the two constantly.

**Example 9.2 – Sample variance and standard deviation.** Using the six fund returns from Example 9.1 (arithmetic mean 4.8333%):

| Year | Return R | Deviation (R − 4.8333%) | Squared deviation |
|---|---|---|---|
| 1 | +12% | +7.1667% | 0.005136 |
| 2 | −8% | −12.8333% | 0.016469 |
| 3 | +20% | +15.1667% | 0.023003 |
| 4 | +5% | +0.1667% | 0.000003 |
| 5 | +15% | +10.1667% | 0.010336 |
| 6 | −15% | −19.8333% | 0.039336 |
| **Sum** | | | **0.094283** |

Sample variance = 0.094283 / (6 − 1) = **0.018857**. Sample standard deviation = √0.018857 = **13.73%**.

If we had instead treated the six observations as the entire population, the variance would be 0.094283 / 6 = 0.015714 and the standard deviation 12.54 percent. With only six observations the difference is substantial (about 1.2 percentage points); with sixty it would be negligible. The fund's return of 4.83 percent per year with 13.73 percent annual volatility illustrates the typical equity pattern: the standard deviation is nearly three times the mean, so a single year's outcome is dominated by noise.

### 9.2.2 Expected returns and risk from scenarios

Managers evaluating a project or a security rarely have a long history. Instead they build scenarios, assign probabilities, and compute the **expected return** and variance of the probability distribution:

```
E(R) = Σ p_s R_s
σ² = Σ p_s [R_s − E(R)]²
```

Scenario analysis is only as good as the scenarios and probabilities. Its key advantage is that it forces explicit thought about what could happen, including states that history has not yet produced.

**Example 9.3 – Expected return and risk from scenarios.** Two securities, X and Y, have the following return distribution over the next year.

| State of the economy | Probability | Return on X | Return on Y |
|---|---|---|---|
| Recession | 0.20 | −10% | +12% |
| Normal | 0.50 | +8% | +6% |
| Boom | 0.30 | +25% | −2% |

*Expected returns.*

```
E(R_X) = 0.20(−10%) + 0.50(8%) + 0.30(25%) = −2.0% + 4.0% + 7.5% = 9.5%
E(R_Y) = 0.20(12%) + 0.50(6%) + 0.30(−2%) = 2.4% + 3.0% − 0.6% = 4.8%
```

*Variance and standard deviation of X.* Deviations from 9.5%: −19.5%, −1.5%, +15.5%. Squares: 0.038025, 0.000225, 0.024025.

```
σ²_X = 0.20(0.038025) + 0.50(0.000225) + 0.30(0.024025)
     = 0.007605 + 0.0001125 + 0.0072075 = 0.014925
σ_X = √0.014925 = 12.22%
```

*Variance and standard deviation of Y.* Deviations from 4.8%: +7.2%, +1.2%, −6.8%. Squares: 0.005184, 0.000144, 0.004624.

```
σ²_Y = 0.20(0.005184) + 0.50(0.000144) + 0.30(0.004624)
     = 0.0010368 + 0.000072 + 0.0013872 = 0.002496
σ_Y = √0.002496 = 5.00%
```

*Interpretation.* X has the higher expected return and the higher risk. Notice also that X does well when Y does badly: in the recession state, X loses 10 percent while Y gains 12 percent. This opposite pattern is the raw material of diversification and is the subject of Section 9.3.

### 9.2.3 Reading standard deviation: the normal approximation

If returns are roughly normally distributed, about 68 percent of outcomes fall within one standard deviation of the mean, about 95 percent within two, and about 99.7 percent within three. For an equity fund with an expected return of 8 percent and a standard deviation of 18 percent, a rough 95 percent range for next year's return is 8% ± 2 × 18% = −28% to +44%. The width of that range is the main message: even a well-diversified equity portfolio has an enormous range of plausible one-year outcomes. Risk shrinks as a fraction of the mean only slowly as the horizon extends, because the mean grows with T while the standard deviation grows with √T, so the ratio improves by only √T. This is why long horizons reduce the probability of a loss but do not eliminate the possibility of large dollar losses.

### 9.2.4 Beyond standard deviation

Standard deviation treats upside and downside deviations alike and is a complete description of risk only if returns are symmetric, as in the normal distribution. Real return distributions often depart from this in two ways.

- **Skewness** measures asymmetry. Negative skewness means a longer left tail: the occasional very large loss. Strategies that sell insurance, write options, or lend to risky borrowers often collect small steady gains and suffer rare large losses, which makes their standard deviations look deceptively low.
- **Kurtosis** measures the heaviness of the tails relative to a normal distribution. Excess kurtosis means extreme outcomes occur more often than the normal curve predicts. Financial crises are a reminder that "three-sigma" events happen more frequently than a bell curve suggests.

Practitioners complement standard deviation with several downside measures. **Value at Risk (VaR)** states the loss that will not be exceeded with a given probability over a given horizon, for example "a 1-day 99 percent VaR of $4 million," which means that on 99 days out of 100 the loss should be smaller than $4 million. VaR says nothing about how bad the loss is on the remaining days. **Expected shortfall** (or conditional VaR) fills the gap by reporting the average loss on those worst days. **Maximum drawdown** measures the largest peak-to-trough decline over a period, which matters to investors who may be forced to liquidate after a loss.

For the purposes of corporate finance, standard deviation and its portfolio relatives remain the workhorse, partly because they aggregate neatly and partly because the theory of the next chapter is built on them. But a manager should always ask whether a project or an investment strategy has a payoff pattern that makes variance a poor summary, such as a drug-development program with a small probability of a very large payoff, or a project with exposure to a catastrophic downside.

## 9.3 Covariance and Correlation

An asset's standard deviation tells us how much it moves. It does not tell us how it moves *with other assets*. For portfolio risk, the second question is the one that matters.

### 9.3.1 Covariance

The **covariance** between the returns of assets i and j measures the tendency of their returns to move together:

```
Cov(R_i, R_j) = σ_ij = E[(R_i − E(R_i))(R_j − E(R_j))]
```

For historical data the sample covariance is

```
s_ij = [1 / (T − 1)] Σ (R_i,t − R̄_i)(R_j,t − R̄_j)
```

A positive covariance means that when asset i is above its average, asset j tends to be above its average as well. A negative covariance means they tend to move in opposite directions. A covariance near zero means there is no linear tendency either way. Note that the covariance of an asset with itself is its variance: Cov(R_i, R_i) = σ_i².

Covariance has a drawback: its magnitude depends on the units and on the volatility of the two assets, so a number like 0.0032 is hard to interpret on its own.

### 9.3.2 Correlation

The **correlation coefficient** standardizes covariance by the two standard deviations:

```
ρ_ij = σ_ij / (σ_i σ_j)
```

Correlation always lies between −1 and +1. A value of +1 means returns are perfectly positively linearly related; −1 means perfectly negatively related; 0 means linearly unrelated. Because it is dimensionless, correlation allows comparison across pairs of assets. Rearranging gives a formula we will use constantly: **σ_ij = ρ_ij σ_i σ_j**.

Three cautions about correlation are essential for practitioners.

1. **Correlation measures linear association only.** Two variables can be perfectly dependent in a nonlinear way (for example, a call option and its underlying stock over large moves) and still show modest correlation.
2. **Correlations are unstable.** Estimated correlations change over time and, notoriously, rise during market crises when investors sell many different assets at once. A diversification benefit estimated in calm markets may shrink just when it is needed.
3. **Estimates are noisy.** With a short sample, a correlation estimate can be far from the true value. When many assets are involved the number of correlations grows quickly (n(n − 1)/2), and estimation error accumulates.

**Example 9.4 – Computing covariance and correlation from data.** The annual returns of two companies, A (a retailer) and B (a consumer staples producer), over five years are:

| Year | R_A | R_B |
|---|---|---|
| 1 | 10% | 6% |
| 2 | 4% | 3% |
| 3 | −6% | −2% |
| 4 | 14% | 9% |
| 5 | 8% | 7% |

*Step 1 – Means.* R̄_A = (10 + 4 − 6 + 14 + 8) / 5 = 30 / 5 = 6.0%. R̄_B = (6 + 3 − 2 + 9 + 7) / 5 = 23 / 5 = 4.6%.

*Step 2 – Deviations and products.*

| Year | R_A − 6.0% | R_B − 4.6% | Product | (Dev A)² | (Dev B)² |
|---|---|---|---|---|---|
| 1 | +0.04 | +0.014 | 0.00056 | 0.0016 | 0.000196 |
| 2 | −0.02 | −0.016 | 0.00032 | 0.0004 | 0.000256 |
| 3 | −0.12 | −0.066 | 0.00792 | 0.0144 | 0.004356 |
| 4 | +0.08 | +0.044 | 0.00352 | 0.0064 | 0.001936 |
| 5 | +0.02 | +0.024 | 0.00048 | 0.0004 | 0.000576 |
| **Sum** | | | **0.01280** | **0.0232** | **0.00732** |

*Step 3 – Sample covariance and standard deviations.*

```
s_AB = 0.01280 / 4 = 0.0032
s_A  = √(0.0232 / 4) = √0.0058 = 7.62%
s_B  = √(0.00732 / 4) = √0.00183 = 4.28%
```

*Step 4 – Correlation.*

```
ρ_AB = 0.0032 / (0.0762 × 0.0428) = 0.0032 / 0.003258 = 0.982
```

*Interpretation.* The two stocks moved almost in lockstep over this short sample. If the relationship were true over the long run, combining them would offer almost no diversification. A manager should be wary of reading too much into five data points, but the exercise shows how the machinery works. In a real application, one would use dozens of observations at least, and one would also ask *why* the two firms should be related; here, both are consumer businesses exposed to household income.

### 9.3.3 Sources of correlation

Economic reasoning should accompany statistics. Firms in the same industry share demand shocks, input costs, and regulation, so their returns are positively correlated. Firms in different industries still share exposure to interest rates, inflation, and the business cycle. Bonds and equities may move together when discount rates drive both, and in opposite directions during flights to safety. The most useful way to think about correlation is as the extent to which two assets are exposed to *common sources of risk*. This idea is formalized in the single-index and multifactor models of Chapter 10.

## 9.4 Portfolio Risk and Diversification

### 9.4.1 Portfolio return and risk of two assets

A portfolio's return is the weighted average of the returns of its components, with weights equal to the proportion of wealth invested in each:

```
R_p = w₁R₁ + w₂R₂,  with w₁ + w₂ = 1
E(R_p) = w₁E(R₁) + w₂E(R₂)
```

The expected return is linear in the weights. The variance is not:

```
σ_p² = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ σ₁₂
     = w₁²σ₁² + w₂²σ₂² + 2 w₁ w₂ ρ₁₂ σ₁ σ₂
```

The last term is the crucial one. If ρ₁₂ = +1, then σ_p = w₁σ₁ + w₂σ₂ and the portfolio's standard deviation is just the weighted average of the components' standard deviations: no diversification. For any ρ₁₂ < 1, σ_p is strictly less than the weighted average. If ρ₁₂ = −1 the risk can be eliminated entirely with the right weights.

The following example uses a pair of assets and shows how the benefit varies with correlation.

**Example 9.5 – Two-asset portfolio risk and the role of correlation.** Asset 1 has σ₁ = 30% and asset 2 has σ₂ = 20%. A portfolio is 60% in asset 1 and 40% in asset 2.

*Stand-alone terms.*

```
w₁²σ₁² = (0.6)²(0.30)² = 0.36 × 0.09 = 0.0324
w₂²σ₂² = (0.4)²(0.20)² = 0.16 × 0.04 = 0.0064
2w₁w₂σ₁σ₂ = 2(0.6)(0.4)(0.30)(0.20) = 0.48 × 0.06 = 0.0288
```

The last term is multiplied by ρ. The weighted-average standard deviation is 0.6(30%) + 0.4(20%) = 26%.

*Portfolio variance as a function of ρ.*

| ρ₁₂ | Portfolio variance | Portfolio σ | Reduction vs. 26% |
|---|---|---|---|
| +1.0 | 0.0324 + 0.0064 + 0.0288 = 0.0676 | 26.00% | 0.00 pts |
| +0.5 | 0.0324 + 0.0064 + 0.0144 = 0.0532 | 23.07% | 2.93 pts |
| 0.0 | 0.0324 + 0.0064 + 0 = 0.0388 | 19.70% | 6.30 pts |
| −0.5 | 0.0324 + 0.0064 − 0.0144 = 0.0244 | 15.62% | 10.38 pts |
| −1.0 | 0.0324 + 0.0064 − 0.0288 = 0.0100 | 10.00% | 16.00 pts |

*Interpretation.* Even with a positive correlation of 0.5, the portfolio's volatility is about three percentage points lower than the average of its components. At zero correlation, the portfolio is less risky than the safer of the two assets alone (19.70 percent versus 20 percent), even though 60 percent of it is in the riskier asset. This is the often-surprising feature of diversification: adding a *risky* asset to a portfolio can reduce its risk, provided the new asset is not too highly correlated with what is already held.

### 9.4.2 The n-asset portfolio

For a portfolio of n assets with weights w_i, the variance is the sum over *all* pairs, including each asset paired with itself:

```
σ_p² = Σᵢ Σⱼ w_i w_j σ_ij
     = Σᵢ w_i² σ_i²  +  Σᵢ Σⱼ≠ᵢ w_i w_j σ_ij
```

There are n variance terms and n(n − 1) covariance terms. As n grows, the covariance terms dominate: with 30 assets there are 30 variances but 870 covariances. This arithmetic is the whole story of diversification. The variance terms get multiplied by w_i², which shrinks quickly as weights shrink, while the covariance terms retain their influence in aggregate.

To see this explicitly, take the simple case of **equal weights** w_i = 1/n. Let σ̄² denote the average variance and σ̄_ij the average covariance. Then

```
σ_p² = (1/n) σ̄² + (1 − 1/n) σ̄_ij
```

As n → ∞, the first term vanishes and the portfolio variance converges to the average covariance. Put differently, **the risk of a well-diversified portfolio is determined by how its assets covary, not by how volatile each is individually**.

**Example 9.6 – Diversification with n identical assets.** Each of n stocks has a standard deviation of 30 percent (variance 0.09) and every pair has a correlation of 0.25 (covariance 0.25 × 0.09 = 0.0225). A portfolio holds all n stocks in equal proportions.

*Formula:* σ_p² = 0.09/n + (1 − 1/n)(0.0225).

| n | Variance of portfolio | Standard deviation | Share of single-stock variance remaining |
|---|---|---|---|
| 1 | 0.0900 | 30.00% | 100.0% |
| 2 | 0.0563 | 23.72% | 62.5% |
| 5 | 0.0360 | 18.97% | 40.0% |
| 10 | 0.0293 | 17.10% | 32.5% |
| 30 | 0.0248 | 15.73% | 27.5% |
| 100 | 0.0232 | 15.22% | 25.8% |
| 1,000 | 0.0226 | 15.02% | 25.1% |
| ∞ | 0.0225 | 15.00% | 25.0% |

Worked checks: for n = 5, σ_p² = 0.09/5 + (0.8)(0.0225) = 0.018 + 0.018 = 0.036 and σ_p = 18.97%. For n = 30, σ_p² = 0.003 + (0.96667)(0.0225) = 0.003 + 0.021750 = 0.02475, so σ_p = 15.73%.

*Interpretation.* Half of the diversifiable risk disappears with just two stocks and about 80 percent of it by the time five are held; by n = 30 the portfolio standard deviation is within about 0.7 percentage points of its floor of 15 percent. Beyond about thirty stocks, the benefit of adding names is real but small. The floor (15 percent, or half the single-stock risk) exists because the stocks share a common component: 25 percent of each stock's variance is "shared", reflected in the correlation of 0.25. No amount of additional diversification within this market can remove it.

This stylized result is consistent with many empirical studies, which find that a few dozen randomly selected stocks capture most of the risk reduction available, although more are needed when idiosyncratic volatility is high, as it has been in recent decades, or when investors want to guard against the wide dispersion of outcomes of any single portfolio. The exact number depends on the market, the period, and the tolerance for tracking error.

### 9.4.3 Diversification across asset classes and borders

The same mathematics applies when the "assets" are asset classes. Equities, government bonds, real estate, commodities, and foreign assets have different exposures to growth, inflation, and interest rates, so their correlations are well below one. International diversification offered large benefits when markets were segmented; as economies and capital markets have become more integrated, correlations have risen, particularly in crises, and the incremental gains have fallen though not disappeared. Diversification across currencies, regulatory regimes, and sovereign risks still reduces some exposures that cannot be removed within a single country.

### 9.4.4 What diversification does not do

It is worth being precise about what diversification accomplishes.

- It does not change expected return in the simple two-asset case: the portfolio's expected return is the weighted average. The benefit is the reduction in risk for a given return, or, equivalently, a higher return for a given risk. (Chapter 10 develops this idea into the efficient frontier.)
- It cannot remove risk that is common to all assets.
- It does not protect against estimation errors: if the correlations used to construct a portfolio are wrong, the portfolio can be much riskier than planned.
- It is not free in practice: transaction costs, taxes, and monitoring costs rise with the number of holdings, and in the corporate context diversification across unrelated businesses has costs of its own (Section 9.7).

## 9.5 Systematic and Idiosyncratic Risk

### 9.5.1 Two kinds of risk

The preceding section suggests dividing the total variance of any security into two parts.

**Systematic risk** (also called market risk or non-diversifiable risk) is the part that stems from economy-wide influences: interest rates, inflation, economic growth, exchange rates, energy prices, and the other forces that affect virtually all firms. It cannot be eliminated by holding more securities, because all securities respond to it to some degree.

**Idiosyncratic risk** (also called unsystematic, firm-specific, or diversifiable risk) stems from events particular to a company or small group of companies: a product recall, a successful drug trial, a lost contract, a management change, a lawsuit, a fire at a single plant. In a large portfolio these events are roughly independent and offset one another.

The formal decomposition comes from a **single-index model**, in which the return on security i is

```
R_i = α_i + β_i R_m + ε_i
```

where R_m is the return on a broad market index, β_i measures the security's sensitivity to the market, α_i is a constant, and ε_i is a firm-specific disturbance that is uncorrelated with R_m and has zero mean. Taking variances,

```
σ_i² = β_i² σ_m²  +  σ²(ε_i)
       systematic     idiosyncratic
```

The fraction of a stock's variance explained by the market is the R² of a regression of R_i on R_m, and equals β_i² σ_m² / σ_i². Equivalently R² = ρ²_{i,m}, the squared correlation of the stock with the market.

For a diversified portfolio p of many stocks, the idiosyncratic terms average out, because they are uncorrelated across stocks, and σ_p² → β_p² σ_m² where β_p = Σ w_i β_i. The beta of a portfolio is the weighted average of the betas of its components, which makes beta an additive measure of risk contribution, unlike standard deviation.

**Example 9.7 – Decomposing the risk of a single stock.** A stock has a beta of 1.2. The market's annual standard deviation is 18 percent, and the stock's total annual standard deviation is 30 percent.

*Systematic variance:* β²σ_m² = (1.2)²(0.18)² = 1.44 × 0.0324 = 0.046656, which is a standard deviation of √0.046656 = 21.6%.

*Total variance:* 0.30² = 0.0900.

*Idiosyncratic variance:* 0.0900 − 0.046656 = 0.043344, which is a standard deviation of √0.043344 = 20.82%.

*R²:* 0.046656 / 0.0900 = 0.5184, or **51.8%** of the stock's variance is systematic. The implied correlation with the market is √0.5184 = 0.72.

*Interpretation.* Roughly half of this stock's variance can be diversified away. An undiversified investor holding only this stock bears 30 percent volatility; a diversified investor, who removes the idiosyncratic portion, bears only the 21.6 percent associated with market exposure. Competition among diversified investors pushes the stock's price to the level at which it offers just the return that a diversified investor requires for its 21.6 percent of market-driven risk. The extra 20.82 percent of idiosyncratic volatility, which the undiversified investor must bear, is therefore not priced.

### 9.5.2 Why only systematic risk is rewarded

The argument for this central result can be stated in three steps.

1. Investors can eliminate idiosyncratic risk at very low cost by holding diversified portfolios.
2. Because it is costless to avoid, no investor needs to be paid for bearing it. If a security offered a premium for its idiosyncratic risk, diversified investors would buy it, driving its price up and its expected return down, until the premium disappeared.
3. Systematic risk cannot be avoided by diversification, so investors must be compensated for bearing it, and the compensation is proportional to the amount of systematic risk the security carries.

The implication is that **the required return on a security depends on its beta, not its total volatility**. A start-up biotechnology stock may be extraordinarily volatile, but if its returns are mostly driven by trial outcomes that are unrelated to the market, its required return can be low. Conversely, a stable utility can have a modest standard deviation but a substantial beta if its earnings are sensitive to interest rates. Chapter 10 turns this logic into the Capital Asset Pricing Model.

### 9.5.3 Sources of systematic and idiosyncratic risk in a firm

For a corporate manager, it is useful to relate this distinction to business risk. Sensitivity to the economic cycle is a major driver of beta: firms selling discretionary goods or capital equipment have high operating leverage to GDP, while food retailers and utilities tend to have lower betas. **Operating leverage** (fixed costs relative to variable costs) magnifies the effect of sales fluctuations on profits and thus raises beta. **Financial leverage** raises the beta of equity further because debt holders have a fixed claim and equity absorbs all the variation. These links are developed in the capital-structure chapters, and they show that a firm's beta is a managerial outcome, not a fixed trait.

Idiosyncratic risks, by contrast, include execution risks, legal events, and competitive moves. They matter enormously for the firm's survival, for its employees and managers, and for the family that owns most of it. But for a well-diversified shareholder they are noise, and they should not enter the discount rate used to value the firm's cash flows. They do belong in the *expected cash flows*, where a probability-weighted view of failure belongs.

## 9.6 Historical Risk and Risk Premia

### 9.6.1 What history shows, qualitatively

Researchers have assembled long records of returns on broad classes of securities: short-term government bills, long-term government bonds, corporate bonds, and equities. The qualitative pattern is robust across countries and periods and does not depend on any particular data set:

- Short-term government bills have had the lowest average returns and the lowest volatility, and are the usual empirical proxy for the risk-free rate.
- Long-term government bonds have earned higher average returns than bills, along with higher volatility, because their prices respond to changes in interest rates.
- Equities have earned the highest average returns and exhibited the highest volatility, with occasional deep drawdowns.
- Small-company stocks have historically been more volatile than large-company stocks and have, in many samples, earned higher average returns.

Table 9.1 sketches this pattern with stylized, entirely illustrative figures. They are not statistics from any actual data set; their purpose is to show the shape of the risk-return trade-off.

**Table 9.1 – Stylized risk-return pattern across asset classes (illustrative only).**

| Asset class | Illustrative average annual return | Illustrative standard deviation | Illustrative premium over bills |
|---|---|---|---|
| Short-term government bills | 3% | 2% | 0% |
| Long-term government bonds | 5% | 9% | 2% |
| Corporate bonds | 6% | 8% | 3% |
| Large-company equities | 10% | 18% | 7% |
| Small-company equities | 12% | 28% | 9% |

The central lesson is that average returns rise with risk, but not proportionally. The ratio of premium to standard deviation (a Sharpe ratio, defined in Chapter 10) is far from constant across classes, and the strength of the relation varies by period. In some multi-decade stretches, riskless bonds have outperformed equities; the premium is an expectation, not a promise.

### 9.6.2 The equity risk premium

The **equity risk premium** (ERP) is the expected excess return of the market portfolio over the risk-free rate. It is the single most important input to estimating the cost of equity and hence to valuation. It is unobservable. The three families of approaches are:

1. **Historical (ex post) averages.** Average the realized market excess return over a long sample. This is the most common approach and the subject of the rest of this section.
2. **Implied (ex ante) estimates.** Take the current market index level, forecasts of dividends or earnings, and solve for the discount rate that equates the present value of expected payouts with the index. Subtract the risk-free rate. This is forward-looking and responds to market conditions, but depends on growth forecasts.
3. **Surveys and fundamentals.** Ask investors, CFOs, or professors, or derive the premium from models linking it to consumption, risk aversion, and growth.

Each has weaknesses, and sensible practitioners triangulate. Estimates in practice often range across several percentage points depending on the method and horizon.

### 9.6.3 Estimating the premium: how precise can it be?

Suppose annual market excess returns are independent with standard deviation σ. The sample mean of N annual observations has a **standard error**

```
SE(R̄) = σ / √N
```

For equity markets, σ is large relative to the plausible premium, so the standard error is large unless N is very large. The result is sobering.

**Example 9.8 – Precision of a historical risk premium.** Using a long sample, an analyst estimates an average annual market excess return of 7.0 percent with an annual standard deviation of 20 percent.

*100 years of data (N = 100).* SE = 20% / √100 = 20% / 10 = **2.0%**. A 95 percent confidence interval is 7.0% ± 1.96 × 2.0% = 7.0% ± 3.92%, or roughly **3.1% to 10.9%**.

*50 years of data (N = 50).* SE = 20% / √50 = 20% / 7.071 = **2.83%**, giving 7.0% ± 5.54%, or 1.5% to 12.5%.

*How much data to reach a standard error of 1 percent?* Solve σ / √N = 1%: N = (20 / 1)² = **400 years**.

*Effect on valuation.* Consider a stock with a beta of 1.0 and a risk-free rate of 3 percent. Using the low end of the interval, the cost of equity is 6.1 percent; using the high end, 13.9 percent. For a growing perpetuity with a 2 percent growth rate, the value-to-cash-flow multiple is 1 / (0.061 − 0.02) = 24.4 at the low end versus 1 / (0.139 − 0.02) = 8.4 at the high end, a factor of nearly three. The uncertainty about the premium is a first-order problem for any valuation, not a detail.

*Interpretation.* Statistical power is the issue. Extending the sample backward helps, but older data come from different economies, and the risk premium itself probably changes over time. Shortening the window to focus on recent experience makes the estimate depend on the luck of the period.

### 9.6.4 Arithmetic versus geometric premium

Which average should be used to estimate the premium for a *one-year* discount rate? In theory, the arithmetic mean, because it is an unbiased estimate of the expected return in a single year. For discounting cash flows that arrive many years in the future, there is an argument that the correct compound rate lies between the two averages, because estimation error in the arithmetic mean compounds. Practitioners largely use the arithmetic average for the premium used in single-period CAPM calculations, and are aware that using geometric averages understates the required return by roughly σ²/2. For a market with a standard deviation of 20 percent that gap is 0.20² / 2 = 2.0 percentage points, as we saw in Section 9.1.3: a geometric premium of 5 percent corresponds to an arithmetic premium of about 7 percent. Whichever is used, the analyst should be consistent with how the premium is used downstream.

### 9.6.5 Biases in historical estimates

- **Survivorship bias.** Markets that did well continue to be studied and those that suffered catastrophe or were closed (for example, through nationalization or hyperinflation) vanish from data sets. A premium measured on the survivors overstates what an investor in a randomly chosen market could have expected.
- **Look-back and period-selection bias.** A premium estimated over a period that began at a market trough, or ended at a peak, will be unusually high.
- **Changing risk and discount rates.** If investors' required return falls over time, realized returns during the decline are higher than expected returns, so history overstates what the future will provide. A secular fall in discount rates produces a capital gain that will not repeat.
- **Measurement of the risk-free rate.** The choice of the bill rate versus a long-term bond yield as the risk-free benchmark changes the measured premium by the term premium.

### 9.6.6 Using the premium in practice

For a corporate manager the practical advice is to use a defensible, stable premium rather than to re-estimate with every market swing; to document the source and the approach; and to test valuation conclusions against a range of premia, as Example 9.8 suggests. It is the *relative* ranking of projects by systematic risk that matters most for capital allocation, and this ranking is less sensitive to the premium than the absolute value.

## 9.7 Managerial Implications

### 9.7.1 Which risk should the firm price?

If shareholders hold diversified portfolios, they care about the contribution of a project to their portfolio's risk, which is its systematic risk. The firm should therefore discount a project's expected cash flows at a rate that reflects the project's beta, and ignore its idiosyncratic volatility when setting the discount rate. This is why Priya Raman, in the vignette, could argue for the software unit even though it was individually volatile. If its cash flows are weakly correlated with the market and with the company's core business, its contribution to systematic risk may be small. This principle underlies the use of divisional or project-specific hurdle rates, developed in the cost-of-capital chapters, and requires the manager to identify "pure-play" comparables whose betas reflect the project's business risk.

### 9.7.2 Caveats: when idiosyncratic risk does matter to the firm

The diversified-shareholder logic has limits, and a thoughtful manager should know them.

- **Financial distress costs.** Idiosyncratic volatility can drive a firm into bankruptcy, and bankruptcy imposes real costs (legal fees, lost customers, forced asset sales) on all claimants. These costs reduce firm value even if shareholders are diversified, which is a reason to manage volatility.
- **Undiversified stakeholders.** Owner-managers, employees with firm-specific human capital, suppliers, and the family in our vignette cannot diversify. Their preferences may legitimately affect decisions, but the owners should recognize that such risk-aversion has a cost: the family office in the vignette pays for concentration with a lower risk-adjusted return, which is not compensated by the market.
- **Convex taxes and capital-market frictions.** If taxes are progressive or if external financing is costly, smoothing cash flows can add value. Hedging can ensure that investment funds are available when good projects arise.
- **Managerial incentives.** Managers whose pay depends on stock price or on survival may take less (or more) risk than shareholders would like. Compensation design must account for this.

### 9.7.3 Corporate diversification versus investor diversification

Investors can diversify cheaply on their own. A conglomerate that diversifies across unrelated businesses delivers to its shareholders little that they could not obtain by buying shares of focused firms, and it can destroy value through cross-subsidization of weak divisions and weakened managerial accountability. The "conglomerate discount" observed in many markets reflects this concern. Diversification by the firm can nevertheless be justified where it creates real operational synergies, reduces expected distress costs, or provides access to capital in markets where individual investors cannot diversify freely.

### 9.7.4 Hedging and risk management

If the firm's exposure to a risk (an exchange rate, a commodity price) is purely a market risk that investors can diversify, hedging does not by itself create value, since investors can manage the exposure on their own. Hedging does create value when it reduces expected distress costs, protects the firm's ability to fund valuable investments, or lowers expected taxes. A coherent risk-management policy distinguishes between risks the firm has a comparative advantage in bearing (its core business risks), and risks that should be transferred or hedged.

### 9.7.5 The role of the Sharpe-style trade-off

Managers who evaluate business units or investments on return alone, ignoring risk, will over-allocate capital to the riskiest activities. A simple and powerful discipline is to compare the reward per unit of the relevant risk across alternatives. Chapter 10 formalizes this with the Sharpe ratio, the Treynor ratio, and the Security Market Line.

## Case Study: Northgate Instruments Considers Diversifying

*Northgate Instruments is a fictional company created for this case.*

Northgate Instruments is a family-controlled manufacturer of industrial measurement equipment, with annual revenue of roughly $900 million and a stock market capitalization of $1.4 billion. About 60 percent of the shares are held by the founding family, whose members have most of their wealth tied to the company. Northgate's profits follow the capital-spending cycle of its customers in oil and gas, mining, and heavy manufacturing. Over the past decade the stock has had an annual standard deviation of about 25 percent and an estimated beta of 1.3.

The board is evaluating a proposal from the CEO, Dana Whitfield, to acquire Meridian Analytics, a software-as-a-service firm that provides predictive maintenance subscriptions, for $280 million. Meridian is growing rapidly but is unprofitable, and its stock-like returns would be very volatile. Using Meridian's recent history and data from comparable listed software companies, the finance team has produced the following estimates for the return on the *new line of business* if it were operated as a stand-alone unit:

| Quantity | Core business | Meridian unit |
|---|---|---|
| Expected return (annual) | 11% | 14% |
| Standard deviation | 25% | 40% |
| Beta (relative to a broad equity index) | 1.3 | 0.9 |
| Correlation between the two units | 0.10 | |
| Share of combined firm value | 80% | 20% |

The risk-free rate is 3 percent and the market risk premium used by the firm is 6 percent. The index has an annual standard deviation of 18 percent.

Whitfield argues that the acquisition will "smooth" Northgate's earnings: when capital spending drops, subscription revenue continues. The CFO, Samuel Okafor, reports that the combined unit's standard deviation would be sqrt(0.64 × 0.0625 + 0.04 × 0.16 + 2 × 0.8 × 0.2 × 0.10 × 0.25 × 0.40), which equals 22.3 percent, below the 25 percent of the core business alone. The CFO also notes that the combined beta would be 0.8 × 1.3 + 0.2 × 0.9 = 1.22.

Opposition emerges from two directions. A family director, Helen Northgate, objects that the family "knows measurement hardware, not software" and fears that integration will distract management from the core. She also argues that a 40 percent standard deviation is "unacceptable" for a company whose lenders have covenants on earnings volatility. A second director, an institutional investor named Raj Patel, takes the opposite view: the family and the company's institutional shareholders can diversify on their own, so Northgate should not pay a control premium for a business only to reduce the volatility that its owners could reduce by buying software stocks. He proposes instead that Northgate return $280 million to shareholders via a share repurchase.

Okafor points out that the acquisition price embeds an expected return of 14 percent against a required return given Meridian's beta of 3% + 0.9 × 6% = 8.4%, suggesting a positive spread if the projections are reliable. But he cautions that Meridian's forecasts are optimistic, that the 14 percent figure is an expectation resting on a short history, and that integration risks are idiosyncratic to Northgate and not captured in a beta estimated from comparables.

The board must decide whether the acquisition creates value, how to think about the company's high exposure to the capital-spending cycle, and what role the family's concentrated wealth should play in the decision.

**Discussion questions**

1. Verify the CFO's calculation of the combined standard deviation and explain, in terms of the portfolio variance formula, why the combined risk is lower than the core business's risk even though 20 percent of the firm is placed in a much riskier unit. How does the answer change if the correlation is 0.60?
2. Is the board correct to use standard deviation or beta to judge the acquisition? Compute the required return for Meridian and for the core business using the information given, and discuss whether the 14 percent expected return justifies the acquisition.
3. Evaluate Patel's argument that diversification by the firm creates no value for shareholders. Under what conditions would the diversification benefit be real? Consider the family's position separately from that of institutional holders.
4. Identify the idiosyncratic risks in the proposal that do not appear in beta, and describe how they should be handled in the valuation. How reliable are the estimates in the table, and how would you stress-test them?

## Key Takeaways

- The holding-period return combines capital gain and income; always use total returns, and match nominal returns with nominal discount rates and real with real.
- The arithmetic average estimates a single-period expected return, while the geometric average measures realized compound growth. The gap between them is approximately σ²/2.
- Standard deviation measures total risk, but it is an incomplete description when return distributions are skewed or have fat tails; supplement it with downside measures such as VaR, expected shortfall, and drawdown.
- Covariance and correlation determine how assets combine. The portfolio variance is a double sum over all covariances, and with many assets the covariances dominate.
- Combining assets with correlation below one reduces portfolio risk below the weighted average of component risks; adding a risky asset can even reduce portfolio risk if it is sufficiently uncorrelated with existing holdings.
- Diversification removes idiosyncratic risk but not systematic risk. The variance of a large equal-weighted portfolio converges to the average covariance among its assets.
- A security's total variance equals β²σ_m² plus idiosyncratic variance; the R² of the market regression gives the share that is systematic.
- Because diversified investors can eliminate idiosyncratic risk at low cost, only systematic risk earns a premium. Required returns should reflect beta rather than total volatility.
- Historical risk premia are noisy: with a 20 percent standard deviation, even a century of data yields a standard error of about 2 percentage points, and surveys, implied estimates, and judgment are all needed.
- Idiosyncratic risk still matters to firms through financial distress costs, undiversified stakeholders, and incentives, but it should be handled in cash flows and risk-management policy, not by inflating the discount rate.

## Review Questions

1. Why does the geometric average return never exceed the arithmetic average, and what determines the size of the gap?
2. Explain why variance, rather than standard deviation, is the quantity that adds in portfolio calculations. What does the covariance term represent?
3. What is the difference between covariance and correlation? Why do analysts prefer to report correlation, and what are its limitations?
4. A portfolio manager says, "I never add a risky stock to a portfolio of safer holdings." Use the two-asset variance formula to explain when this policy is mistaken.
5. Describe why the variance of an equal-weighted portfolio approaches the average covariance as the number of assets grows. What does this imply about the benefits of the fifty-first stock compared with the second?
6. Distinguish systematic from idiosyncratic risk and give two examples of each for a retail company.
7. Why does the market not pay a premium for idiosyncratic risk? What would happen to prices if it tried?
8. Why do correlations tend to rise in market crises, and what does this imply for how diversification benefits should be estimated and stress-tested?
9. Explain why the equity risk premium is hard to estimate precisely and list three biases that can affect historical estimates.
10. A conglomerate argues that combining unrelated businesses reduces its earnings volatility and so should lower its cost of capital. Evaluate this argument from the viewpoint of a diversified shareholder, and note one circumstance where the argument has merit.

## Problems

**Problem 9.1.** A stock has annual returns of +10%, −5%, +18%, and +7% over four years. Compute (a) the arithmetic average return and (b) the geometric average return.

**Problem 9.2.** A stock has the following return scenarios: −12% with probability 0.25, +6% with probability 0.50, and +20% with probability 0.25. Compute the expected return, variance, and standard deviation.

**Problem 9.3.** A portfolio is invested 50% in stock A (σ = 25%) and 50% in stock B (σ = 15%), with a correlation of 0.30 between them. Compute the portfolio variance and standard deviation.

**Problem 9.4.** Two assets have standard deviations of 12% and 20% and a correlation of −0.40. Compute their covariance.

**Problem 9.5.** An equal-weighted portfolio holds 20 stocks, each with a standard deviation of 40% and a pairwise correlation of 0.30. Compute (a) the portfolio standard deviation and (b) the limiting standard deviation as the number of stocks goes to infinity.

**Problem 9.6.** A stock has a beta of 0.9, the market's standard deviation is 16%, and the stock's total standard deviation is 24%. Compute (a) the systematic variance, (b) the proportion of variance that is systematic, and (c) the idiosyncratic standard deviation.

**Problem 9.7.** An analyst estimates the market risk premium from N = 81 years of data with an annual standard deviation of 18 percent. Compute the standard error of the sample mean and the half-width of a 95 percent confidence interval.

**Problem 9.8.** (a) A bond returns 9.5% nominal in a year with 4.0% inflation. Compute the real return. (b) An equity portfolio has an arithmetic average return of 8% and a standard deviation of 20%. Estimate the geometric average using the σ²/2 approximation, and compare the value of $10,000 compounded for 20 years at the geometric rate with that at the arithmetic rate.

### Answers to Selected Problems

- **9.1.** (a) Arithmetic average = (10 − 5 + 18 + 7) / 4 = 7.50%. (b) Product of gross returns: 1.10 × 0.95 × 1.18 × 1.07 = 1.31942; fourth root = 1.0718, so the geometric average is approximately **7.18%**.
- **9.2.** E(R) = 0.25(−12) + 0.50(6) + 0.25(20) = −3 + 3 + 5 = **5.0%**. Deviations: −17, +1, +15; squares 289, 1, 225 (in %²). Variance = 0.25(289) + 0.50(1) + 0.25(225) = 72.25 + 0.5 + 56.25 = 129 %², i.e. **0.0129**; σ = **11.36%**.
- **9.3.** σ_p² = 0.25(0.0625) + 0.25(0.0225) + 2(0.5)(0.5)(0.30)(0.25)(0.15) = 0.015625 + 0.005625 + 0.005625 = **0.026875**; σ_p = **16.39%**.
- **9.4.** Cov = ρσ₁σ₂ = −0.40 × 0.12 × 0.20 = **−0.0096**.
- **9.5.** (a) σ_p² = 0.16/20 + (19/20)(0.30)(0.16) = 0.008 + 0.0456 = 0.0536; σ_p = **23.15%**. (b) Limiting variance = 0.30 × 0.16 = 0.048; σ = √0.048 = **21.91%**.
- **9.6.** (a) β²σ_m² = 0.81 × 0.0256 = **0.020736**. (b) Total variance 0.0576; share = 0.020736 / 0.0576 = **36.0%**. (c) Idiosyncratic variance = 0.0576 − 0.020736 = 0.036864; σ = **19.2%**.
- **9.7.** SE = 18% / √81 = 18% / 9 = **2.0%**; half-width = 1.96 × 2.0% = **3.92%**.
- **9.8.** (a) Real return = 1.095 / 1.04 − 1 = **5.29%**. (b) Geometric ≈ 8% − (0.20)²/2 = 8% − 2% = **6%**. $10,000 × 1.06²⁰ = **$32,071** versus $10,000 × 1.08²⁰ = **$46,610**; using the arithmetic rate overstates 20-year wealth by about $14,540, or 45 percent.
