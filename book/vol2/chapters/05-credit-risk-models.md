# Chapter 5: Credit Risk Models

## Learning Objectives

After studying this chapter, you should be able to:

- Decompose credit risk into probability of default, loss given default and exposure at default, and distinguish risk-neutral from real-world (physical) measures of each.
- Apply the Merton structural model to value a firm's equity and debt as options, and derive default probabilities, credit spreads and implied recovery from asset value, asset volatility and leverage.
- Calibrate asset value and asset volatility from observable equity data, and compute a KMV-style distance to default and its mapping to an expected default frequency.
- Build reduced-form (intensity) models, convert credit spreads into hazard rates and survival probabilities, and use them to price risky bonds and credit default swaps.
- Estimate and apply credit migration matrices, rating models and scorecards (Altman Z-score, logistic regression) and recognise their strengths and weaknesses.
- Compute expected and unexpected loss for loans and portfolios, and explain how model outputs feed pricing, provisioning, capital and limit-setting decisions.

## Opening Vignette

*(Illustrative scenario; the company and its figures are fictional.)*

Marlowe Industrial Gases is a mid-sized supplier of bulk gases to steelmakers and hospitals. In the spring, its treasurer, Dana Whitcombe, meets with the credit committee of the bank that provides most of the company's revolving facility. The bank's analyst opens with three numbers and, to Dana's surprise, none of them comes from Marlowe's financial statements.

The first is a "distance to default" of 3.1, computed from Marlowe's share price, the volatility of that share price and the face value of its borrowings. The second is a five-year credit default swap spread of 210 basis points, observed in the market for Marlowe's bonds. The third is an internal rating of "BB-plus" produced by a scorecard that blends leverage, interest cover, size and sector. Three different models, three different languages, one question: how likely is it that Marlowe fails to pay, and how much would the bank lose if it did?

Dana pushes back. Marlowe's cash flows are contracted under long-term take-or-pay agreements, and its reported coverage ratios are strong. Why should an equity price, which jumped around during a recent market sell-off, move her borrowing cost? The analyst answers that the equity market is watching the same cash flows and that a falling share price with rising volatility is, mechanically, a firm moving closer to the point where equity holders would walk away. The CDS spread, she adds, is not a forecast of default at all: it embeds both the probability of default and investors' appetite for bearing it.

By the end of the meeting, Dana has learned that the facility's price is not one number but the combination of an expected-loss charge, a premium for uncertainty and a return on capital held against unexpected losses. This chapter builds the models behind each of those components, shows how they connect, and explains what each can and cannot tell a manager.

## 5.1 The Anatomy of Credit Risk

### 5.1.1 Three building blocks

Credit risk is the risk of loss arising from a counterparty's failure to meet its obligations in full and on time. For a single exposure it is conventionally decomposed into three quantities:

- **Probability of default (PD):** the likelihood that the obligor defaults within a stated horizon, typically one year, or over the life of the exposure.
- **Loss given default (LGD):** the fraction of the exposure that is lost if default occurs, after recoveries and net of workout costs. LGD = 1 − recovery rate.
- **Exposure at default (EAD):** the amount outstanding when default occurs. For a term loan this is the balance; for a revolving facility it includes the drawn amount plus the expected additional drawing before default; for a derivative it is the positive replacement value.

The expected loss on an exposure is their product:

```
EL = PD × LGD × EAD
```

Expected loss is a cost of doing business, in the same way that expected warranty claims are a cost of selling machinery. It should be priced into the loan, provisioned against, and appear in the income statement over time. The harder question, taken up at the end of the chapter, is the *unexpected* loss: the deviation from expectation that must be absorbed by capital.

### 5.1.2 Three families of models

The literature offers three broad ways to estimate default risk, and a practising credit professional uses all of them:

1. **Structural models** (Merton 1974 and its descendants) explain default as the economic consequence of the firm's asset value falling below its liabilities. They require a model of the firm's balance sheet and rely on option-pricing theory (Volume 1, Chapter 18).
2. **Reduced-form or intensity models** (Jarrow-Turnbull, Duffie-Singleton and others) do not explain why default happens. They treat default as the first jump of a random process with an intensity (hazard rate) that is calibrated to market prices such as bond spreads and CDS quotes.
3. **Statistical and rating-based models** estimate default probabilities from historical data: credit scoring (Altman's Z-score, logistic regression), rating agency grades, and migration matrices that describe how ratings change over time.

The first is the most economically illuminating; the second is the most useful for pricing and hedging traded credit; the third is the workhorse of lending, regulation and accounting. Understanding the links among them is the goal of this chapter.

### 5.1.3 Real-world versus risk-neutral probabilities

A point that causes persistent confusion is that there are two kinds of default probability.

The **real-world (physical) PD** is the actual frequency with which obligors of a given quality default. It is what you need for provisioning, capital and underwriting: if you lend to 1,000 identical borrowers, the real-world PD tells you how many will fail.

The **risk-neutral (market-implied) PD** is the probability that, when used with risk-free discounting, reproduces observed market prices. Because investors demand compensation for bearing default risk, particularly the risk that defaults cluster in recessions when wealth is scarce, risk-neutral PDs are typically larger than real-world PDs, often by a factor of two or more for investment-grade credits. This is the credit analogue of the equity risk premium.

The practical consequences are important:

- Use risk-neutral probabilities (from spreads, CDS, Merton with the risk-free rate as drift) to *value and hedge* credit instruments consistently with the market.
- Use real-world probabilities (from histories, scorecards, Merton with the true asset drift) to *measure risk*: expected loss, capital, stress testing and impairment.
- Never compare a CDS-implied PD with a historical default rate and conclude that the market is "wrong"; a gap between them is mostly the risk premium.

> **Common mistake.** Reporting a CDS-implied default probability as a forecast. A 5-year CDS spread of 210 basis points does not mean the market expects roughly a 17% chance of default; it says what number, under risk-neutral pricing and an assumed recovery, is consistent with the quoted premium.

### 5.1.4 Why managers should care

For a CFO, credit models are not an academic exercise. They determine the pricing of loans and bonds the firm issues, the covenants and collateral lenders request, the counterparty limits the treasury sets for banks and customers, and the provisions recognised under IFRS 9 or CECL for trade receivables and financial assets. They also shape corporate strategy: a firm that understands that its equity volatility and leverage jointly determine its credit spread will see why a leveraged recapitalisation or a risky acquisition raises debt costs even when interest cover looks comfortable.

## 5.2 The Merton Structural Model

### 5.2.1 Equity as a call option, debt as a put

Robert Merton's 1974 insight was that limited liability turns a firm's capital structure into a pair of options on its assets. Consider the simplest firm: it has asset value V today, and a single zero-coupon debt issue with face value D that matures at T. There are no dividends and no other claims.

At maturity:

- If V_T > D, the firm repays the debt, and equity holders keep V_T − D.
- If V_T < D, the equity holders default, the lenders take the assets, and equity is worth zero.

Equity therefore pays max(V_T − D, 0), exactly the payoff of a European call option on the assets with strike D. Debt pays min(V_T, D) = D − max(D − V_T, 0): a risk-free bond with face D, *minus* a put option on the assets with strike D. The debt holders have, in effect, sold a put to the shareholders.

Assume that asset value follows geometric Brownian motion with volatility σ and that the risk-free rate r is constant. Black-Scholes then gives:

```
E = V·N(d1) − D·e^(−rT)·N(d2)

d1 = [ ln(V/D) + (r + σ²/2)·T ] / (σ·√T)
d2 = d1 − σ·√T
```

and the market value of debt is simply B = V − E. Several quantities of interest follow immediately:

```
Risk-neutral PD        = N(−d2)
Yield on the debt      y = −(1/T)·ln(B / D)
Credit spread          s = y − r
Expected recovery (RN) = V·N(−d1) / N(−d2)      (as a fraction of V; divide by D for % of face)
```

The risk-neutral probability of default N(−d2) is the probability that V_T < D under the risk-neutral measure, in which assets grow at r. To obtain a **real-world** PD, replace r by the true expected return on assets μ in the d2 formula:

```
Real-world PD = N( −[ ln(V/D) + (μ − σ²/2)·T ] / (σ·√T) )
```

The quantity inside the parentheses is the number of standard deviations that the expected log asset value is above the default barrier: the **distance to default**.

**Example 5.1 – Merton valuation of a levered firm.** A firm has asset value V = 100 (in $ millions), a single zero-coupon bond with face value D = 70 maturing in T = 1 year, asset volatility σ = 25%, and a risk-free rate r = 3% (continuously compounded). Find equity value, debt value, the risk-neutral PD, the credit spread, and the real-world PD if the expected asset return is μ = 8%.

*Step 1: d1 and d2.*

```
ln(V/D)        = ln(100/70) = 0.35667
(r + σ²/2)·T   = 0.03 + 0.03125 = 0.06125
d1 = (0.35667 + 0.06125) / 0.25 = 1.6717
d2 = 1.6717 − 0.25 = 1.4217
```

*Step 2: normal probabilities.* N(d1) = N(1.6717) = 0.9527; N(d2) = N(1.4217) = 0.9224.

*Step 3: equity value (call).*

```
PV of face   = 70 × e^(−0.03) = 70 × 0.97045 = 67.931
E = 100 × 0.9527 − 67.931 × 0.9224 = 95.271 − 62.663 = 32.608
```

*Step 4: debt value.* B = V − E = 100 − 32.608 = 67.392. A risk-free zero with the same face would be worth 67.931, so the default risk costs lenders 0.539, or 0.79% of the risk-free value.

*Step 5: yield and spread.*

```
y = −ln(67.392 / 70) = −ln(0.96274) = 3.797%
s = 3.797% − 3.000% = 0.797%  ≈ 80 basis points
```

*Step 6: default probabilities.* The risk-neutral PD is N(−1.4217) = 1 − 0.9224 = 7.76%. With μ = 8%:

```
DD = [ ln(100/70) + (0.08 − 0.03125) ] / 0.25 = (0.35667 + 0.04875)/0.25 = 1.6217
Real-world PD = N(−1.6217) = 5.24%
```

*Interpretation.* The market-implied (risk-neutral) default probability, 7.76%, exceeds the real-world probability, 5.24%, because the asset drift is lower in the risk-neutral world. The implied loss given default is the ratio of the risk-neutral expected loss to the risk-neutral PD: expected loss is (67.931 − 67.392)/67.931 = 0.79% of the risk-free value, divided by 7.76%, which gives about 10.2%. That is surprisingly low, and it is one of the model's well-known features: because the shortfall occurs only when assets are just below D in most paths, the average recovery is high.

### 5.2.2 What drives the spread

The Merton model yields rich comparative statics. Three variables matter most: leverage (D relative to V), asset volatility, and maturity.

**Table 5.1 – Merton credit spreads (basis points) and risk-neutral PDs. Assumptions: V = 100, σ = 25%, r = 3%.**

| Leverage D/V | 1-year spread | 3-year spread | 5-year spread | 10-year spread | 5-year RN PD |
|---|---|---|---|---|---|
| 30% | 0.0 | 1.1 | 5.4 | 17.5 | 1.6% |
| 50% | 2.0 | 29.4 | 48.2 | 63.5 | 11.0% |
| 70% | 79.7 | 142.4 | 144.7 | 127.1 | 26.5% |
| 90% | 506.3 | 353.6 | 282.5 | 198.9 | 43.0% |

Three lessons emerge. First, spreads rise steeply and non-linearly with leverage: a move from 50% to 70% leverage multiplies the one-year spread forty-fold. Second, the term structure of spreads is **upward-sloping for low-leverage firms** (there is time for something to go wrong, and the starting point is far from the barrier) but **downward-sloping or humped for highly levered firms** (if the firm survives the near term, volatility gives it room to recover, so the conditional probability of default falls). This shape is consistent with empirical patterns: spreads for speculative-grade issuers are often flatter or inverted relative to investment grade. Third, the model's spreads for safe firms are tiny at short maturities, much lower than observed. This **short-spread puzzle** is a major empirical weakness: real short-dated bonds of good issuers trade at material spreads because of jump risk, liquidity premia and uncertainty about the asset value itself.

Volatility matters as much as leverage, a point managers often underappreciate. Holding V = 100, D = 70, T = 1 and r = 3%, the one-year spread is about 3 basis points at σ = 15%, 80 basis points at σ = 25%, 290 basis points at σ = 35% and 780 basis points at σ = 50%. Because equity is a call option, equity holders *gain* from higher asset volatility, and lenders lose. This is the analytical root of **asset substitution** (Volume 1, Chapter 15): equity-controlled firms near distress have an incentive to take on riskier projects, and lenders protect themselves with covenants and collateral.

### 5.2.3 Extensions

The classic Merton model is simplistic in several ways, and the literature has tried to repair each:

- **Default only at maturity.** In practice default can happen at any time, when covenants are breached or a payment is missed. Black and Cox (1976) introduced a **first-passage** model in which default occurs the first time asset value touches a barrier. This raises PDs and spreads at short horizons.
- **Single zero-coupon debt.** Real capital structures have coupons, multiple maturities and seniorities. Geske modelled sequential compound options; Longstaff and Schwartz allowed stochastic interest rates and an exogenous recovery rate.
- **Static capital structure.** Leland's model lets the firm choose leverage by trading off the tax shield against bankruptcy costs (Volume 1, Chapter 15) and endogenises the default barrier as the point at which equity holders optimally stop servicing debt.
- **Continuous diffusion.** With purely continuous paths a firm cannot default by surprise, so short-term spreads go to zero. Jump-diffusion models (Zhou) restore short-term spreads.
- **Unobservable assets.** Asset value and volatility are not quoted; they must be inferred from equity, which is the problem solved in the next section.

### 5.2.4 Managerial reading of the model

The Merton framework gives managers a way to think about how decisions change credit quality. Issuing debt to repurchase shares raises D relative to V and raises the spread. Selling a volatile division and using the proceeds to repay debt lowers σ and D simultaneously and compresses the spread sharply. A longer-dated issue is not necessarily riskier for a firm that is already stressed (the downward slope in Table 5.1 reflects that survival over the first years raises recovery prospects). And **a falling share price is a credit signal**: with D constant, a decline in E is a decline in V, so the distance to default shrinks even though no covenant has yet been tested.

## 5.3 Distance to Default and KMV-Style Models

### 5.3.1 Inferring asset value and volatility

Asset value and asset volatility are not observed. What is observed is the market capitalisation of equity E, its volatility σ_E (from historical returns or option-implied volatility), and the book value of liabilities. Because equity is a call on assets, we have two equations in two unknowns:

```
(1)  E  = V·N(d1) − D·e^(−rT)·N(d2)
(2)  σ_E·E = N(d1)·σ_V·V
```

Equation (2) follows from Itô's lemma applied to E = E(V): the volatility of equity equals the delta of the call multiplied by the volatility of assets and by the leverage ratio V/E. The system is solved numerically. A convenient algorithm iterates: start with V = E + D, σ_V = σ_E·E/V, compute d1 and d2, update V from equation (1) and σ_V from equation (2), and repeat until the values converge. Convergence is typically reached within ten to fifteen iterations.

**Example 5.2 – Backing out asset value and volatility from equity data.** A listed firm has market capitalisation E = 40, equity volatility σ_E = 60%, debt with face value D = 60 due in T = 1 year, and r = 3%. Estimate asset value, asset volatility, the risk-neutral PD and the spread.

*Step 1: initial guess.* V₀ = E + D·e^(−rT) = 40 + 60 × 0.97045 = 98.227; σ_V,0 = 0.60 × 40 / 98.227 = 24.43%.

*Step 2: iterate.* Each iteration recomputes d1 and d2 using the current V and σ_V, then solves (1) for V and (2) for σ_V. The iterates settle after about eleven passes at:

```
V = 98.108,  σ_V = 24.78%
d1 = 2.2291,  d2 = 1.9813
N(d1) = 0.9871,  N(d2) = 0.9762
```

*Step 3: check.* The call value is 98.108 × 0.9871 − 60 × 0.97045 × 0.9762 = 96.842 − 56.842 = 40.000, matching E. The volatility identity gives σ_E = 0.9871 × 0.2478 × 98.108 / 40 = 60.0%, matching the input.

*Step 4: credit measures.*

```
Risk-neutral PD = N(−1.9813) = 2.38%
Debt value B   = V − E = 98.108 − 40 = 58.108
Yield y        = −ln(58.108/60) = 3.204%
Spread         = 3.204% − 3.000% = 20.4 bp
```

*Interpretation.* Equity volatility of 60% looks alarming, but the firm's asset volatility is only about 25% because leverage amplifies it: roughly 98/40 = 2.45 times, scaled down by the delta of 0.987. The implied credit spread of about 20 basis points shows the model's restraint at short maturities. A practitioner would not take that number literally; she would use the *ordering* across names and the *change over time*.

### 5.3.2 Distance to default

Once V and σ_V are known, the **distance to default** compresses the firm's credit state into a single number of standard deviations:

```
DD = [ ln(V / DP) + (μ − σ_V²/2)·T ] / (σ_V·√T)
```

where DP is the **default point**. Moody's KMV, which commercialised this approach, observed that firms do not default exactly when assets fall below total liabilities. Long-term debt can be rolled over and short-term debt must be paid, so the empirical default point lies between the two. KMV's rule of thumb is:

```
Default point = short-term debt + 0.5 × long-term debt
```

A simplified, widely used version treats asset value as approximately normal over the horizon and writes:

```
DD ≈ (V − DP) / (V·σ_V)
```

The distance to default is a **ranking** statistic, and this is its great strength. It combines market value (a forward-looking quantity that reflects expectations of earnings and investment), leverage and volatility into one comparable measure across firms and sectors.

### 5.3.3 From distance to default to expected default frequency

If asset values were normally distributed, DD would map directly to PD via N(−DD). A DD of 4 would imply a probability of roughly 0.003%, which is far lower than actual default frequencies for firms at that distance. KMV therefore maps DD to default probability **empirically**: it looks at a large historical database, groups firms by DD, and records the fraction that defaulted within the next year. The resulting **expected default frequency (EDF)** is not normal. It is fat-tailed, reflecting jumps, fraud, event risk and non-normality of asset returns.

The distinction between a theoretical (Gaussian) PD and an empirical EDF deserves emphasis. The Gaussian mapping is acceptable for ranking but badly underestimates default risk at large distances. An empirical mapping fixes the level but is only as good as the history on which it was built, and it is proprietary or calibrated by each institution.

**Example 5.3 – Distance to default and its mapping.** A manufacturer has asset value V = 150, asset volatility σ_V = 20%, short-term debt of 40 and long-term debt of 60. The expected asset return is 8% and the horizon is one year.

*Step 1: default point.*

```
DP = 40 + 0.5 × 60 = 70
```

*Step 2: simple DD.*

```
DD = (150 − 70) / (150 × 0.20) = 80 / 30 = 2.67
Gaussian PD = N(−2.67) = 0.38%
```

*Step 3: log version with drift.*

```
ln(150/70) = 0.7621
numerator  = 0.7621 + (0.08 − 0.02) = 0.8221
DD = 0.8221 / 0.20 = 4.11
Gaussian PD = N(−4.11) = 0.002%
```

*Step 4: reading the difference.* The two definitions give very different pictures (2.67 versus 4.11). The simple version measures distance in absolute value terms (the asset base must fall 53% of its current value to reach 70), while the log version works in return space, where falling from 150 to 70 is a log return of −76%, but with positive drift and the −σ²/2 correction shifting the centre. Neither number is a "true" probability. In practice an institution would map the DD to an EDF using its own default history: a DD of about 2.7 to 4 might correspond to an empirical annual default frequency of perhaps a few tenths of one percent to roughly one percent, many times larger than the Gaussian figure for the upper end.

*Managerial lesson.* The ranking and the *direction of change* are what the figure delivers reliably. If the share price falls 30% and volatility rises, the DD shrinks; a risk manager would use the change as an early-warning trigger long before an agency downgrade.

### 5.3.4 Strengths and limitations of structural models

**Strengths.** They are forward-looking (equity prices respond within seconds); they link credit to capital structure and to equity volatility; they produce a continuous measure rather than coarse rating buckets; and they explain why credit and equity markets move together.

**Limitations.** They depend on equity prices and so are unavailable for private firms (although proxies using comparable firms are used); they are sensitive to market sentiment and to bubbles in equity; they assume a simple liability structure; the book value of liabilities may be a poor proxy for the default barrier (off-balance-sheet obligations, covenants, parent support); and the calibration of asset volatility is noisy. Their calculated spreads, as shown above, are typically too low for high-quality issuers over short horizons.

> **Common mistake.** Using the Merton PD in a regulatory or provisioning context without an empirical mapping. The theoretical Gaussian PD is not a calibrated default probability.

## 5.4 Reduced-Form Models: Hazard Rates and Survival

### 5.4.1 Default as a surprise

Structural models make default predictable in the sense that a continuously moving asset value approaches a known barrier. Reduced-form models take the opposite view: default is a **surprise**, the first arrival of a Poisson-type event whose intensity may vary with the economy and the firm's condition. The modeller does not need balance-sheet detail; she needs a process for the intensity and a recovery assumption, and she calibrates both to market prices.

Let τ be the (random) default time and define the **hazard rate** (default intensity) λ(t) as the instantaneous conditional probability of default per unit time, given survival to t:

```
λ(t)·dt = P( default in [t, t+dt] | survival to t )
```

The probability of surviving to time T is then

```
S(T) = P(τ > T) = exp( − ∫₀ᵀ λ(u) du )
```

and the cumulative default probability is PD(T) = 1 − S(T). With a **constant** hazard rate λ the formula simplifies to S(T) = e^(−λT). Hazard rates are analogous to forward interest rates: the integral of the hazard is to survival probability what the integral of the short rate is to a discount factor. This analogy is not accidental. A risky zero-coupon bond can be priced by discounting at a "default-adjusted" rate, which is what makes the approach so convenient for traded credit.

Two quantities are easily confused. The **unconditional (marginal) default probability** for year k is the chance of defaulting in year k as seen from today. The **conditional default probability** is the chance of defaulting in year k given survival to its start. With a constant hazard rate, the conditional probability is the same every year, while the marginal probability declines gradually, because the firm must first survive.

### 5.4.2 The credit triangle

In the Duffie-Singleton framework with a fractional recovery of market value, the price of a risky zero-coupon bond is

```
P_risky(0, T) = P_riskfree(0, T) × exp( − ∫₀ᵀ λ(u)·(1 − R) du )
```

so that the credit spread is, for a constant hazard rate and recovery R,

```
s = λ × (1 − R) = λ × LGD
```

or, rearranged, **λ = s / (1 − R)**. This relation, sometimes called the **credit triangle**, is the most-used rule of thumb in credit markets. It states that the spread is the annual expected loss rate under the risk-neutral measure. A 180 basis point spread with 40% recovery implies a hazard rate of 0.0180 / 0.60 = 3.0% per annum.

**Example 5.4 – Hazard rates and survival from spreads.** A five-year par credit spread for a corporate issuer is 180 basis points, and the market convention for recovery is 40%.

*Step 1: hazard rate.*

```
λ = 0.0180 / (1 − 0.40) = 0.0180 / 0.60 = 3.00% per year
```

*Step 2: survival and default probabilities.*

```
S(1) = e^(−0.03×1) = 0.9704  → PD(1) = 2.96%
S(3) = e^(−0.03×3) = 0.9139  → PD(3) = 8.61%
S(5) = e^(−0.03×5) = 0.8607  → PD(5) = 13.93%
```

*Step 3: marginal PDs.* The one-year marginal probability is 2.96%, whereas the marginal probability in year 5 is S(4) − S(5) = e^(−0.12) − e^(−0.15) = 0.8869 − 0.8607 = 2.62%. The *conditional* probability in every year is 1 − e^(−0.03) = 2.96%.

*Step 4: a term structure.* Suppose instead the market quotes par spreads of 100 bp (1-year), 150 bp (3-year) and 200 bp (5-year), again with 40% recovery. Using the credit-triangle approximation, the *average* hazard to horizon T is s_T / (1 − R): 1.67% to year 1, 2.50% to year 3 and 3.33% to year 5. The cumulative hazard H(T) is the average hazard times T:

```
H(1) = 0.0167 × 1 = 0.0167
H(3) = 0.0250 × 3 = 0.0750
H(5) = 0.0333 × 5 = 0.1667
```

The implied *forward* (piecewise-constant) hazards between nodes are:

```
Years 0–1: 0.0167 / 1                  = 1.67%
Years 1–3: (0.0750 − 0.0167) / 2       = 2.92%
Years 3–5: (0.1667 − 0.0750) / 2       = 4.58%
```

and the survival probabilities are S(1) = e^(−0.0167) = 98.35%, S(3) = e^(−0.0750) = 92.77% and S(5) = e^(−0.1667) = 84.65%. The upward-sloping spread curve translates into hazard rates that *rise* over time: the market expects, in the risk-neutral sense, that default risk is back-loaded. A full bootstrap would solve the CDS pricing equation at each maturity rather than use the triangle; that is the subject of Section 5.5, and the approximation is accurate to within a few percent of the hazard for moderate spreads.

*Interpretation.* The hazard-rate curve plays the role for credit that the forward-rate curve plays for interest rates. It lets you value any cash flow that depends on survival (a risky bond, a loan, a trade receivable) consistently with the market.

### 5.4.3 Pricing a risky bond

If recovery is a fraction R of face value paid at default (the Jarrow-Turnbull convention), the price of a coupon bond is the sum of survival-weighted coupons and principal plus the discounted expected recovery. Under the simpler recovery-of-market-value assumption of Duffie and Singleton, the bond can be discounted at the *risky rate* r + λ(1 − R):

```
Price = Σ CF_t × exp( −(r + λ(1 − R))·t )
```

For a three-year zero-coupon bond with face value 100, a risk-free rate of 4%, a hazard rate of 3% and recovery of 40%, the risky rate is 0.04 + 0.03 × 0.60 = 5.8%, and the price is 100 × e^(−0.058 × 3) = 100 × e^(−0.174) = 84.03, compared with the risk-free price 100 × e^(−0.12) = 88.69. The difference of 4.66 is the market price of the expected credit loss.

### 5.4.4 Stochastic intensities and correlation

A constant hazard rate is a first approximation. Real credit spreads move randomly and, importantly, they move together. Models therefore make λ a stochastic process: a **Cox process** (a Poisson process with a random, non-defaultable intensity) with mean-reverting dynamics such as a CIR (square-root) process, correlated with interest rates and a market factor. The Cox structure keeps survival probabilities in closed form for affine intensities. Other extensions add jumps in the intensity (a downgrade event) or link intensity to equity prices and macro variables.

Correlation among obligors enters through the common factors in their intensities. The basic problem is that default correlation is difficult to observe, since defaults are rare. This difficulty, and the fact that tranche prices depend almost entirely on correlation assumptions, will matter greatly in Chapter 6.

### 5.4.5 Structural versus reduced-form: how to choose

| Feature | Structural (Merton/KMV) | Reduced-form (intensity) |
|---|---|---|
| Source of default | Asset value falls below liabilities | Exogenous Poisson-type surprise |
| Main inputs | Equity price, equity vol, leverage | Bond/CDS spreads, recovery |
| Default predictable? | Yes (approaches a barrier) | No (a sudden event) |
| Short-term spreads | Too low without jumps | Naturally positive |
| Best use | Credit monitoring, early warning, linking to capital structure | Pricing and hedging of traded credit |
| Data needed | Listed equity | Liquid credit market |
| Main weakness | Needs unobservable asset values; model risk in barrier | No economic story; calibrates but does not explain |

The two approaches converge in "hybrid" models, which make the hazard rate a function of equity value or distance to default. A practical risk manager might use structural distance to default for a private-company proxy, reduced-form hazard rates to value a CDS book, and rating-based statistics to provision a loan portfolio.

## 5.5 Credit Default Swaps

### 5.5.1 Contract mechanics

A **credit default swap (CDS)** is a bilateral contract in which the protection buyer pays a periodic premium (the CDS spread or coupon) to the protection seller until maturity or a credit event. If a credit event occurs on the reference entity (bankruptcy, failure to pay and, for some contracts, restructuring), the seller compensates the buyer for the loss: under physical settlement the buyer delivers a defaulted bond with face value equal to the notional and receives par; under cash settlement, an auction determines the market value of the defaulted debt and the seller pays notional × (1 − auction recovery).

Standard conventions in the single-name market include quarterly premium payments, fixed standard coupons of 100 or 500 basis points paid with an **upfront payment** that equates the contract's value to the quoted spread, a five-year benchmark maturity, and a 40% recovery assumption for senior unsecured debt (25% for subordinated) when converting between spread and upfront. The standard contract is an insurance-like contract with no requirement that the buyer holds the underlying debt, which means CDS can be used for hedging or for speculation and gives rise to a market whose notional can exceed the underlying debt outstanding.

### 5.5.2 Valuation

A CDS has two legs whose present values must be equal at inception for a par contract:

- **Premium leg (fee leg):** the buyer pays spread s on the notional each period, as long as the entity survives. There is also an *accrued premium* if default occurs between payment dates.
- **Protection leg (contingent leg):** the seller pays (1 − R) × notional at default.

Define the **risky annuity** (often called RPV01 or "risky PV01"), the present value of 1 per annum paid on the notional until default or maturity:

```
RPV01 = Σ  Δ × DF(t_i) × S(t_i)  +  accrual term
```

where Δ is the accrual fraction, DF the discount factor and S the survival probability. The protection leg is

```
Protection = (1 − R) × Σ  DF(t_i) × [ S(t_{i−1}) − S(t_i) ]
```

(an approximation assuming default occurs mid-interval, with discounting at the midpoint). The par spread equates the two legs:

```
s_par = Protection / RPV01
```

If the contract trades with a fixed coupon c rather than at par, the **upfront payment** (as a fraction of notional, from the buyer's perspective) is

```
Upfront = Protection − c × RPV01  =  (s_par − c) × RPV01
```

and the **mark-to-market** of an existing position when the spread moves from s₀ to s₁ is approximately (s₁ − s₀) × RPV01 to the protection buyer.

**Example 5.5 – Pricing a five-year CDS.** A reference entity has a flat hazard rate λ = 3.0% per year, recovery R = 40%, and the continuously compounded risk-free rate is 3%. Premiums are quarterly. Find the par spread, the upfront payment on a contract with a 100 bp coupon, and the mark-to-market impact of spread moves.

*Step 1: survival and discount factors.* For quarter i with t = i/4, S(t) = e^(−0.03t) and DF(t) = e^(−0.03t). The marginal default probability in each quarter is S(t − 0.25) − S(t), which for the first quarter is 1 − e^(−0.0075) = 0.7472%.

*Step 2: risky annuity.* Summing the 20 quarterly terms 0.25 × DF × S plus half-period accrual for default within the period gives

```
RPV01 = 4.3036 (per unit of notional per year)
```

For comparison, a *risk-free* 5-year annuity with continuous 3% discounting and quarterly payments would be about 4.63, so survival risk reduces its value by 7%.

*Step 3: protection leg.*

```
Protection = (1 − 0.40) × Σ DF(t_mid) × [S(t−0.25) − S(t)] = 0.0778 (7.78% of notional)
```

Roughly: the five-year cumulative default probability is 13.93%; discounting at about 3% over an average life of 2.5 years and multiplying by LGD of 60% gives 0.1393 × 0.60 × 0.93 ≈ 0.078. 

*Step 4: par spread.*

```
s_par = 0.07775 / 4.3036 = 1.807%  ≈ 181 bp
```

This is close to the credit-triangle value λ(1 − R) = 3.0% × 0.60 = 1.80%, confirming that the triangle is accurate for flat curves.

*Step 5: upfront for a 100 bp coupon.*

```
Upfront = 0.07775 − 0.0100 × 4.3036 = 0.07775 − 0.04304 = 3.47% of notional
```

The protection buyer pays 3.47 points upfront and then 100 bp per year, because the standard coupon is lower than the fair spread.

*Step 6: mark-to-market.* A buyer who bought protection when the spread was 100 bp earns, if the spread widens to 180 bp, approximately (0.0180 − 0.0100) × 4.30 = 3.44% of notional. If the spread widens a further 100 bp the gain grows by roughly 100 bp × 4.3 = 4.3% of notional (a bit less in practice, because the RPV01 shrinks as survival probability falls).

*Interpretation.* The CDS spread's sensitivity to one basis point, the **CS01**, is approximately the RPV01 times 0.0001, i.e. about 0.043% of notional, or $4,300 on a $10 million position. That is the unit of risk for traders and for hedging a loan book.

### 5.5.3 Bond-CDS basis and practical issues

In an ideal world the CDS spread equals the bond's credit spread over the risk-free (swap) rate. The difference, the **CDS-bond basis**, is typically non-zero and can be large in stress. A negative basis (CDS spread below bond spread) can arise when bond liquidity is poor or funding costs for holding the bond are high; a positive basis can arise when the cheapest-to-deliver option or counterparty considerations raise the CDS price relative to the cash bond. A risk manager must also consider:

- **Counterparty risk.** The seller may default at the same time as the reference entity (wrong-way risk), which is why standardised contracts are cleared through central counterparties and margined.
- **Restructuring and definitions.** Not all restructurings trigger payment; settlement terms matter.
- **Index products.** Indices of 100 to 125 equally weighted names trade as standardised contracts; the index spread is the average (adjusted for the convexity of survival) of the constituents.
- **Recovery assumptions.** Quoting conventions fix recovery, but actual recovery is revealed only through the auction.

### 5.5.4 What CDS markets tell the CFO

CDS spreads on a company's own debt are a continuously updated measure of its marginal cost of unsecured funding for a given tenor. They are also a basis for counterparty valuation adjustments in derivative books, a cross-check against rating-based expectations, and, at the extremes, an early signal that bond and loan investors are repricing. A company with a CDS spread that diverges from peers with the same rating is being judged on something the rating does not capture.

## 5.6 Recovery and Loss Given Default

### 5.6.1 What determines recovery

Loss given default is as important as default probability, yet it receives less attention. A bond with PD of 2% and LGD of 80% has an expected loss of 1.6%; a secured loan to the same borrower with LGD of 25% has an expected loss of 0.5%. In practice recovery depends on:

- **Seniority and security.** Senior secured creditors recover more than senior unsecured, subordinated and equity holders, in order of the absolute priority of claims (although in actual bankruptcy proceedings that priority is sometimes bent).
- **Collateral type and coverage.** Liquid, easily valued collateral (cash, receivables, standard equipment) holds value better than specialised assets. Coverage should be measured at a stressed value, not at the origination valuation.
- **Capital structure.** The more debt ranks ahead or alongside, the less is available per dollar of claim. A firm with a thin cushion of junior debt gives senior lenders less protection.
- **Industry and the cycle.** Industries with tangible, fungible assets (utilities, shipping at a good moment, real estate) tend to show higher recoveries than asset-light services. Recovery rates decline in recessions, when many firms fail together and asset buyers are scarce.
- **Resolution process.** Time to resolution, legal system efficiency and whether the firm is reorganised or liquidated affect both the amount and the present value of the recovery.

**Table 5.2 – Illustrative recovery assumptions by claim type (percent of face value).**

| Claim | Typical modelling assumption | Comment |
|---|---|---|
| First-lien senior secured loan | 55–70% | Highest priority; depends on collateral coverage |
| Second-lien loan | 30–45% | Subordinated to first-lien claims on collateral |
| Senior unsecured bond | 35–45% | Market convention of 40% in CDS |
| Subordinated bond | 15–25% | Convention of 25% for subordinated CDS |
| Junior or preferred | 0–10% | Often near zero |

These ranges are illustrative modelling conventions, not statistics. An institution should calibrate its own LGD estimates from its workout experience.

### 5.6.2 Modelling issues

**Definition of recovery.** Three definitions coexist: the price of the defaulted bond shortly after default (market recovery), the discounted value of cash and securities ultimately received (ultimate recovery), and the recovery rate used by the CDS auction. They can differ substantially. IFRS 9 and regulatory models focus on ultimate, discounted recovery net of workout costs.

**Stochastic and correlated recovery.** A model that fixes recovery at 40% ignores the fact that recovery is uncertain and, more importantly, **negatively correlated with default rates**: when more firms default, recoveries are lower. This correlation amplifies portfolio losses in recessions relative to a model with constant LGD. It is one reason regulatory frameworks require a *downturn* LGD, an estimate for adverse conditions rather than average conditions.

**Sensitivity of inferred hazard to the recovery assumption.** Because the spread identifies only the product λ × (1 − R), the implied default probability depends heavily on the recovery assumption. Take the 180 bp five-year spread of Example 5.4:

| Assumed recovery | Implied hazard λ | Implied 5-year PD |
|---|---|---|
| 20% | 2.25% | 10.64% |
| 40% | 3.00% | 13.93% |
| 60% | 4.50% | 20.15% |

Moving recovery from 20% to 60% nearly doubles the implied default probability even though the spread has not changed. A CDS spread therefore measures expected loss, not default probability, and a statement about PD derived from a spread must always come with the recovery assumption attached.

### 5.6.3 Managerial implications

Collateral and covenants do their work through LGD. For a corporate borrower the cost of secured funding is lower than that of unsecured funding because LGD is lower, but pledging assets to one lender raises the LGD, and hence the spread, of every other creditor. This is the mechanism that makes secured debt capacity a finite resource and explains why lenders write negative-pledge clauses. When negotiating a credit facility the CFO should therefore ask not only "what is my PD?" but "what is the lender's LGD, and what in the structure changes it?"

## 5.7 Credit Migration and Rating Models

### 5.7.1 Ratings and transition matrices

Rating agencies and bank internal rating systems assign obligors to a small number of grades. Because ratings change over time, a **transition (migration) matrix** records the probability that an obligor in grade i at the start of the year is in grade j at the end. The last grade is default and is an *absorbing state*: once defaulted, always defaulted. Transition matrices serve three purposes: they give PD term structures (via matrix multiplication), they allow valuation and risk measurement of credit deterioration short of default (spread widening after a downgrade causes mark-to-market losses on bonds), and they are inputs to portfolio models such as CreditMetrics.

If P is the one-year transition matrix and migrations follow a time-homogeneous Markov chain, the k-year transition matrix is P^k. The cumulative default probability for an obligor in grade i over k years is the (i, default) element of P^k.

**Example 5.6 – Multi-year default probabilities from a transition matrix.** An internal rating system has five states: Strong, Good, Fair, Weak and Default. The one-year transition matrix (illustrative) is:

**Table 5.3 – One-year transition matrix (illustrative; rows sum to 100%).**

| From \ To | Strong | Good | Fair | Weak | Default |
|---|---|---|---|---|---|
| Strong | 92.0% | 6.0% | 1.5% | 0.4% | 0.1% |
| Good | 5.0% | 88.0% | 5.0% | 1.5% | 0.5% |
| Fair | 1.0% | 7.0% | 80.0% | 7.0% | 5.0% |
| Weak | 0.0% | 2.0% | 10.0% | 68.0% | 20.0% |
| Default | 0 | 0 | 0 | 0 | 100% |

Find the cumulative default probability over one to five years for an obligor currently rated "Fair", and the marginal and conditional annual PDs.

*Step 1: one-year default.* Directly from the matrix, PD(1) = 5.00%.

*Step 2: two-year default.* The (Fair, Default) element of P² is the sum over intermediate states of P(Fair → k) × P(k → Default):

```
PD(2) = 0.01×0.001 + 0.07×0.005 + 0.80×0.05 + 0.07×0.20 + 0.05×1.00
      = 0.00001 + 0.00035 + 0.0400 + 0.0140 + 0.0500
      = 0.10436 = 10.44%
```

*Step 3: continue the matrix powers.* Computing P³, P⁴ and P⁵ numerically gives the cumulative default probabilities for a Fair obligor:

| Horizon (years) | Cumulative PD | Marginal PD | Conditional PD |
|---|---|---|---|
| 1 | 5.00% | 5.00% | 5.00% |
| 2 | 10.44% | 5.44% | 5.72% |
| 3 | 15.85% | 5.41% | 6.04% |
| 4 | 20.98% | 5.14% | 6.11% |
| 5 | 25.74% | 4.76% | 6.02% |

Marginal PD is the increment of cumulative PD; conditional PD is the marginal PD divided by the survival probability at the start of the year (for year 2: 5.44% / 95.00% = 5.72%).

*Step 4: other starting grades.* The five-year cumulative default probabilities from the other grades are 2.23% (Strong), 6.38% (Good) and 57.38% (Weak). A Weak obligor has a one-year PD of 20% and a five-year PD above 57%, while for a Strong obligor, a five-year PD above 2% shows that even high-quality credits can drift down and default.

*Interpretation.* The conditional PD for a Fair obligor *rises* in years 2 to 4 (5.00% → 6.11%) before easing. Part of the reason is that surviving Fair obligors drift toward the Weak grade, from which default is likely. Higher-quality obligors typically show a rising hazard (they migrate down), and low-quality obligors a falling hazard (survivors are the stronger ones), which echoes the Merton term-structure pattern of Table 5.1.

**Limitations.** The Markov assumption is only approximate: empirically, ratings show momentum (a downgraded firm is more likely to be downgraded again) and dependence on the business cycle. Annual matrices differ markedly between recessions and expansions. Matrices estimated from agency data refer to rated corporates and may not be representative of a particular bank's middle-market loans. Rare transitions, such as Strong to Default, are estimated with very few observations. Finally, ratings are "through-the-cycle" in philosophy at the agencies, so they lag the market and so differ from point-in-time measures such as distance to default.

### 5.7.2 Credit scoring: the Altman Z-score

Edward Altman's Z-score (1968) was one of the first multivariate credit models. Using multiple discriminant analysis on a sample of manufacturing firms that went bankrupt and a matched sample that did not, he found a linear combination of five financial ratios that best separated them:

```
Z = 1.2·X1 + 1.4·X2 + 3.3·X3 + 0.6·X4 + 1.0·X5

X1 = Working capital / Total assets
X2 = Retained earnings / Total assets
X3 = EBIT / Total assets
X4 = Market value of equity / Book value of total liabilities
X5 = Sales / Total assets
```

Conventional zones for the original public manufacturer model are Z > 2.99 ("safe"), 1.81 to 2.99 ("grey") and Z < 1.81 ("distress"). Variants exist for private firms, non-manufacturers and emerging markets with different coefficients and cut-offs.

A firm has X1 = 0.20, X2 = 0.15, X3 = 0.08, X4 = 0.90 and X5 = 1.10. Then Z = 1.2 × 0.20 + 1.4 × 0.15 + 3.3 × 0.08 + 0.6 × 0.90 + 1.0 × 1.10 = 0.240 + 0.210 + 0.264 + 0.540 + 1.100 = 2.354, in the grey zone. The score is a ranking and a screening device; the coefficients are specific to the sample, period and industry mix, and a score near a cut-off has little information.

### 5.7.3 Logistic regression scorecards

Modern scorecards typically use **logistic regression**, which models the log-odds of default as a linear function of explanatory variables:

```
ln( PD / (1 − PD) ) = β₀ + β₁x₁ + β₂x₂ + … + βₖxₖ
PD = 1 / (1 + e^(−z)),   z = β₀ + Σ βᵢxᵢ
```

Logistic regression is preferred to discriminant analysis because it produces a probability directly, makes weaker distributional assumptions and has interpretable coefficients: each unit of xᵢ multiplies the odds of default by e^(βᵢ).

**Example 5.7 – A logistic scorecard.** A bank's scorecard for small corporates is

```
z = −3.0 + 4.0 × (Debt/Assets) − 5.0 × (EBIT/Assets) − 2.5 × (Operating cash flow / Debt)
```

Compute the PD for a borrower with Debt/Assets = 0.55, EBIT/Assets = 0.12 and OCF/Debt = 0.30, and the effect of deleveraging to 0.40.

*Step 1: score.*

```
z = −3.0 + 4.0×0.55 − 5.0×0.12 − 2.5×0.30
  = −3.0 + 2.20 − 0.60 − 0.75 = −2.15
```

*Step 2: PD.*

```
PD = 1 / (1 + e^(2.15)) = 1 / (1 + 8.585) = 10.43%
```

*Step 3: deleveraging.* With Debt/Assets = 0.40, z = −3.0 + 1.60 − 0.60 − 0.75 = −2.75 and PD = 1 / (1 + e^(2.75)) = 1 / (1 + 15.64) = 6.01%.

*Step 4: odds interpretation.* The coefficient 4.0 means that a 10 percentage-point increase in leverage adds 0.4 to the log odds, multiplying the odds by e^0.4 = 1.49. Reducing leverage by 15 points (0.55 to 0.40) cuts the log odds by 0.60, i.e. multiplies the odds of default by e^(−0.60) = 0.549: from odds of 0.1165 (10.43%) to 0.0640 (6.01%).

### 5.7.4 Judging a rating model

A model's quality is assessed along three dimensions:

- **Discrimination** (rank ordering): do defaulters receive worse scores than non-defaulters? Measured by the ROC curve, the area under it (AUC) and the Gini coefficient or accuracy ratio (Gini = 2 × AUC − 1). An AUC of 0.5 is no better than random; modern retail and corporate scorecards often score between 0.7 and 0.85.
- **Calibration:** does a predicted PD of 3% correspond to roughly 3% observed defaults? A model can discriminate well and be badly calibrated, because the base rate of default changes with the cycle.
- **Stability and monotonicity:** does the model behave sensibly out of sample, across the cycle and for sub-segments?

Backtesting should compare predicted and realised defaults by grade, using binomial tests with allowance for default correlation: with positively correlated defaults, a year in which realised defaults are twice the prediction is much less improbable than an independent-default test suggests. **Overfitting** is the chief enemy: a scorecard with many variables fitted to a small number of defaults will look excellent on the development sample and fail in use. Good practice includes out-of-time validation, parsimony, expert override with documented rationale, and independent model validation.

## 5.8 Expected Loss, Unexpected Loss and the Use of Models

### 5.8.1 Expected loss for a portfolio

Expected loss is additive across exposures:

```
EL_portfolio = Σ PDᵢ × LGDᵢ × EADᵢ
```

for a portfolio of obligors, regardless of correlation. Expected loss is a *cost* priced into loans and provisioned against. Under IFRS 9 it appears as the **expected credit loss (ECL)** impairment allowance. For assets whose credit risk has not increased significantly since initial recognition, the allowance equals the 12-month ECL; for assets with a significant increase in credit risk, the allowance equals the **lifetime ECL**. Lifetime ECL discounts expected losses at the effective interest rate:

```
ECL = Σₜ  marginal PD(t) × LGD(t) × EAD(t) × DF(t)
```

**Example 5.8 – 12-month versus lifetime ECL.** A three-year bullet loan of $10 million has a hazard rate of 2.0%, LGD of 45%, and a discount rate (effective interest rate) of 5%. Defaults are assumed to occur mid-year, and EAD remains $10 million.

*Step 1: marginal default probabilities.* For year t, marginal PD = e^(−0.02(t−1)) − e^(−0.02t):

```
Year 1: 1 − 0.98020      = 1.980%
Year 2: 0.98020 − 0.96079 = 1.941%
Year 3: 0.96079 − 0.94176 = 1.902%
```

*Step 2: discount factors at the mid-year, e^(−0.05(t − 0.5)).* Year 1: 0.9753; year 2: 0.9277; year 3: 0.8825.

*Step 3: ECL by year.*

```
Year 1: 0.01980 × 0.45 × 10,000,000 × 0.9753 = $86,906
Year 2: 0.01941 × 0.45 × 10,000,000 × 0.9277 = $81,031
Year 3: 0.01902 × 0.45 × 10,000,000 × 0.8825 = $75,552
```

*Step 4: totals.* The 12-month ECL (Stage 1) is $86,906. The lifetime ECL (Stage 2) is $86,906 + $81,031 + $75,552 = $243,489. The step-up from Stage 1 to Stage 2 is therefore a 2.8× jump in the allowance, even though the hazard rate has not changed in this example; in reality a significant increase in credit risk would also raise the hazard.

*Interpretation.* The "cliff" between stages creates earnings volatility when assets transfer, and an analyst should anticipate it: when a sizeable portfolio migrates, the provision charge reflects the longer lifetime horizon as well as the higher PD.

### 5.8.2 Unexpected loss and economic capital

Actual losses in any year differ from the expected value. The **unexpected loss (UL)** is typically measured as the standard deviation of losses, and **economic capital** is the amount needed to absorb losses at a high confidence level (say 99.9%) minus the expected loss. For a single exposure with LGD fixed, the standard deviation of loss is

```
σ_L = EAD × LGD × √( PD × (1 − PD) )
```

but portfolio losses depend critically on **default correlation**. The standard model behind regulatory credit capital is the Vasicek **asymptotic single risk factor (ASRF)** model. Each obligor's asset return is Zᵢ = √ρ · M + √(1 − ρ) · εᵢ, where M is a systematic factor, εᵢ an idiosyncratic shock and ρ the asset correlation. Obligor i defaults if Zᵢ falls below the threshold Φ⁻¹(PD). Conditional on the systematic factor M = m, the default probability is

```
PD(m) = Φ( [ Φ⁻¹(PD) − √ρ · m ] / √(1 − ρ) )
```

In a very large, granular portfolio the idiosyncratic risk diversifies away and the loss rate equals PD(m). The default rate that is exceeded only with probability 1 − q is obtained by setting m = Φ⁻¹(1 − q), equivalently using +Φ⁻¹(q):

```
Worst-case default rate (confidence q) = Φ( [ Φ⁻¹(PD) + √ρ · Φ⁻¹(q) ] / √(1 − ρ) )
```

The unexpected loss in capital terms is (worst-case default rate − PD) × LGD × EAD.

**Example 5.9 – Expected loss, capital and risk-based pricing.** A bank makes a $10 million loan with PD = 2%, LGD = 45%, asset correlation ρ = 15%. Use a 99.9% confidence level. The bank's cost of equity is 12%, capital earns a risk-free benefit of 3% (it reduces funding needs), and operating cost is 0.30% of the loan.

*Step 1: expected loss.*

```
EL = 0.02 × 0.45 × 10,000,000 = $90,000   (0.90% of EAD)
```

*Step 2: worst-case default rate.* Φ⁻¹(0.02) = −2.0537; Φ⁻¹(0.999) = 3.0902; √ρ = 0.3873; √(1 − ρ) = 0.9220.

```
numerator = −2.0537 + 0.3873 × 3.0902 = −2.0537 + 1.1969 = −0.8568
ratio     = −0.8568 / 0.9220 = −0.9293
Worst-case default rate = Φ(−0.9293) = 17.63%
```

*Step 3: unexpected loss (capital).*

```
Capital = (0.1763 − 0.0200) × 0.45 × 10,000,000 = $703,480   (7.03% of EAD)
```

*Step 4: risk-based pricing.* The required margin must cover expected loss, the net cost of capital and operating cost:

```
EL                   = 0.900%
Capital charge       = 7.035% × (12% − 3%) = 0.633%
Operating cost       = 0.300%
Required spread over funding ≈ 1.833%
```

*Interpretation.* Three-quarters of the "risk premium" in this spread is expected loss and cost; only the capital charge compensates for bearing correlated risk. If the borrower's industry has a higher asset correlation (say ρ = 25%), the worst-case default rate and the capital requirement both rise, and so does the price, even with PD and LGD unchanged. Two borrowers with identical PDs can therefore deserve different pricing if their exposures are more systematic.

### 5.8.3 Portfolio view

Expected loss is additive; unexpected loss is not. Adding a loan to a portfolio raises capital by less than its stand-alone UL if its default risk is not perfectly correlated with the rest. This is why diversification across industries, geographies and obligors reduces the capital per loan, and why concentration limits matter. The **marginal** contribution to portfolio risk, not the stand-alone risk, is what should drive pricing and limits. Chapter 6 develops the same logic for pools of loans held in securitisation vehicles, where the tranching of the loss distribution makes correlation the dominant driver of value.

### 5.8.4 Model risk and good practice

Credit models inform decisions; they do not substitute for judgement. Practitioners guard against model risk by:

- Using several models (structural, market-implied, rating-based) and investigating disagreements rather than averaging them away.
- Distinguishing risk-neutral from real-world outputs, and never mixing them in one calculation without adjustment.
- Stress testing: shocking PDs, LGDs and correlations together, since in a crisis they all move in the same adverse direction.
- Documenting assumptions (recovery, correlation, horizon, default definition), which are usually more important than the mathematics.
- Recognising that data are sparse: defaults are rare events, so estimates of PD in the safest grades and of correlation are statistically fragile.

## Case Study: Redwater Components and the Refinancing Decision

*(Illustrative case; Redwater Components is a fictional company and all figures are invented for teaching purposes.)*

Redwater Components is a privately held automotive parts supplier with annual sales of $620 million and EBITDA of $74 million. It carries $210 million of debt: a $90 million secured term loan due in two years, a $70 million senior unsecured note due in four years and a $50 million revolving facility, fully drawn. Redwater's owners want to refinance all three into a single $230 million five-year facility and to pay a $20 million dividend from the proceeds. Their CFO, Imran Okafor, has asked the company's relationship bank for terms and has also approached two institutional lenders.

The bank's credit team compares several models. A scorecard based on leverage (debt/EBITDA of 2.8× before the transaction, 3.1× after), interest cover and size places Redwater at an internal rating equivalent to "Fair" in the matrix of Table 5.3 before the deal and "Weak-to-Fair" after. The one-year PD is 5.0% before the transaction, and the team estimates 7.5% afterward. Redwater has no listed equity, so the bank uses a structural proxy: it takes the median asset volatility of listed auto-parts suppliers (about 28%) and Redwater's estimated enterprise value of $520 million to compute a distance to default. With a default point equal to short-term debt (the revolver and the term loan maturing within two years: $140 million) plus half of long-term debt ($35 million), DP = $175 million. The simple DD is (520 − 175) / (520 × 0.28) = 2.37 before the deal. Adding the $20 million dividend funded by new debt raises the default point and reduces enterprise value only if the dividend leaks value out of the firm, so the credit team treats the DD as roughly 2.2 afterward after allowing for the larger obligation and the lower liquidity.

Market signals are available for peers but not for Redwater. Five-year CDS on a listed competitor with similar leverage trades at 310 basis points. With the market convention of 40% recovery, that implies a hazard rate of 5.17% and a five-year risk-neutral default probability of 22.8%. The bank's internal historical default experience for the "Fair" grade, however, gives a five-year cumulative PD of about 25.7% (Example 5.6), which includes migration, and a recovery on first-lien loans in the sector of about 60%.

The bank must now price the new facility. If the facility is secured by a first lien on receivables, inventory and equipment with an estimated stressed value of $180 million, coverage is 78% of the $230 million exposure, and the credit team sets LGD at 35% for the secured portion. A senior unsecured tranche would have an LGD of about 60%. The CFO is aware that the new structure puts all lenders pari passu, and the unsecured noteholders, whose consent is required for the refinancing, have already signalled that their note should be taken out at a premium because they lose their position relative to a larger secured tranche.

Imran has three proposals. The first is the full refinancing with the $20 million dividend. The second is the refinancing without the dividend, leaving the cash in the business. The third is a smaller refinancing that keeps the unsecured note in place. The bank has indicated that its minimum acceptable risk-adjusted return is a spread covering expected loss, capital charge and a cost of 0.30%, as in Example 5.9.

**Discussion questions**

1. Using the simple distance-to-default measure, compute DD for Redwater's proposed structure assuming enterprise value of $500 million after the dividend leaves the firm (enterprise value net of $20 million distributed) and a default point rising to $185 million. What does the change in DD suggest about the risk added by the dividend? Why might an equity-based DD be unavailable for Redwater and how does the proxy approach affect confidence in the result?
2. Compute the hazard rate and five-year risk-neutral PD implied by the peer CDS of 310 bp under recoveries of 25%, 40% and 60%. Why does the bank's historical five-year PD of 25.7% differ from the CDS-implied figure, and which figure belongs in the provision calculation and which in the pricing of a hedge?
3. For the secured facility, estimate expected loss under the post-deal PD of 7.5% and an LGD of 35% on $230 million. How would the expected loss change if the facility were unsecured with LGD 60%? How does the secured/unsecured choice affect the loan's required spread and the position of the unsecured noteholders?
4. Apply the Vasicek model with ρ = 20% and 99.9% confidence to the post-deal PD of 7.5%. Compute the capital percentage and compare the required spread to Example 5.9. Which of the three proposals would you recommend, and what covenants would you attach (consider leverage, dividend restrictions and collateral coverage tests)?

## Key Takeaways

- Credit risk has three building blocks, PD, LGD and EAD, and expected loss is their product. Each component should be estimated, priced and monitored separately.
- Real-world and risk-neutral default probabilities are different objects: use the former for provisioning, capital and underwriting, and the latter for valuing and hedging traded credit.
- In the Merton model equity is a call option on the firm's assets and debt is risk-free debt minus a put; credit spreads rise steeply with leverage and asset volatility, and shareholders gain from risk that lenders bear.
- Asset value and asset volatility must be inferred from equity price and volatility by solving two simultaneous equations; distance to default compresses leverage, volatility and market value into a single ranking statistic.
- The Gaussian mapping from distance to default to PD understates tail risk; empirical EDF mappings or internal calibrations are needed for PD levels.
- In reduced-form models the hazard rate is calibrated to spreads, with spread ≈ λ × (1 − R); survival is exp(−∫λ), and the hazard curve plays the role of a forward curve for default.
- A CDS spread measures expected loss, not default probability: the same spread implies very different PDs under different recovery assumptions, and CDS pricing equates a risky-annuity premium leg to a contingent protection leg.
- Recovery depends on seniority, collateral, cycle and process, and is negatively correlated with default; downturn LGD is the appropriate basis for capital.
- Transition matrices give term structures of PD through matrix powers, show how ratings drift, and reveal that conditional PDs rise for good credits and fall for poor ones; scorecards (Z-score, logit) should be judged on discrimination, calibration and stability.
- Expected loss is additive and priced; unexpected loss depends on correlation and drives capital, so pricing should reflect marginal risk contribution. IFRS 9 ECL adds a stage-based step-up from 12-month to lifetime loss.

## Review Questions

1. Define PD, LGD and EAD. Why is EAD not simply the drawn balance for a revolving credit facility?
2. Explain why a firm's equity can be viewed as a call option and its risky debt as risk-free debt less a put option. What is the economic meaning of the strike price and maturity?
3. In the Merton model, what are the effects on the credit spread of an increase in (a) leverage, (b) asset volatility, (c) the risk-free rate? Explain each in terms of option theory.
4. Why is the term structure of Merton spreads upward-sloping for low-leverage firms and humped or downward-sloping for high-leverage firms?
5. Describe the procedure for estimating asset value and asset volatility from equity data. Why can't asset volatility simply be set equal to equity volatility?
6. What is the KMV default point, and why does it lie between short-term debt and total debt? Why does KMV use an empirical mapping from DD to EDF?
7. What is a hazard rate? Explain the relationship between a hazard rate, a survival probability and a credit spread, and state the assumptions behind the credit triangle.
8. Why is the risk-neutral PD generally larger than the real-world PD? Give two uses for each.
9. Describe the two legs of a CDS and show how the par spread, upfront payment and mark-to-market are derived from them. What is the CS01?
10. What are the strengths and weaknesses of ratings transition matrices, and why is the expected-loss pricing of a loan incomplete without a capital charge?

## Problems

1. **Merton model.** A firm has asset value V = 200, a zero-coupon debt with face value D = 120 due in 2 years, asset volatility 30% and a risk-free rate of 4% (continuous). Compute d1, d2, equity value, debt value, the risk-neutral PD and the credit spread (continuously compounded).
2. **Distance to default.** A firm has asset value 80, asset volatility 15%, short-term debt 20 and long-term debt 30. Using the KMV default-point rule and the simple definition DD = (V − DP)/(V × σ_V), compute the DD and the Gaussian PD.
3. **Hazard rate and recovery.** A five-year CDS spread is 240 bp. Compute the hazard rate and the five-year cumulative default probability assuming recovery of 40%, and again assuming 25%.
4. **CDS pricing.** An entity has a flat hazard rate of 2.0%, recovery of 40%, a continuous risk-free rate of 3%, and quarterly premiums over a five-year horizon. Using the legs approach, compute the risky annuity, the protection leg, the par spread, and the upfront payment on a contract with a 500 bp coupon.
5. **Migration.** A three-state system (Good, Weak, Default) has the one-year transition matrix: Good → (90%, 8%, 2%); Weak → (10%, 80%, 10%); Default absorbing. Compute the two-year transition matrix and the two-year cumulative default probability of each starting state.
6. **Expected and unexpected loss.** A $25 million exposure has PD 1.5%, LGD 40%. Compute the expected loss. Using the Vasicek model with ρ = 12% and q = 99.9%, compute the worst-case default rate and the capital (unexpected loss).
7. **Z-score.** A firm has WC/TA = 0.25, RE/TA = 0.10, EBIT/TA = 0.06, MVE/TL = 0.50 and Sales/TA = 0.90. Compute the Altman Z-score and classify it.
8. **Risky bond.** A three-year zero-coupon bond has face value 100. The risk-free rate is 4%, the hazard rate is 3% and recovery is 40% of market value. Compute the price, the risk-free price and the yield spread, using the Duffie-Singleton approximation.

### Answers to Selected Problems

1. d1 = 1.6047, d2 = 1.1805; equity = 91.54, debt = 108.46; risk-neutral PD = N(−1.1805) = 11.89%; spread ≈ 1.06% (about 106 bp).
2. DP = 20 + 0.5 × 30 = 35; DD = (80 − 35)/(80 × 0.15) = 45/12 = 3.75; Gaussian PD = N(−3.75) ≈ 0.009%.
3. With R = 40%: λ = 0.0240/0.60 = 4.00%; five-year PD = 1 − e^(−0.20) = 18.13%. With R = 25%: λ = 0.0240/0.75 = 3.20%; PD = 1 − e^(−0.16) = 14.79%.
4. Risky annuity ≈ 4.407; protection leg ≈ 0.0531; par spread ≈ 1.204% (about 120 bp); upfront on a 500 bp coupon = 0.0531 − 0.05 × 4.407 = −0.167, so the protection buyer *receives* about 16.7% of notional upfront because the coupon exceeds the fair spread.
5. P² rows: Good → (81.8%, 13.6%, 4.6%); Weak → (17.0%, 64.8%, 18.2%). Two-year cumulative PD: Good 4.6%, Weak 18.2%.
6. EL = 0.015 × 0.40 × 25,000,000 = $150,000. Worst-case default rate = 12.06%; capital = (0.1206 − 0.015) × 0.40 × 25,000,000 ≈ $1.056 million.
7. Z = 1.2×0.25 + 1.4×0.10 + 3.3×0.06 + 0.6×0.50 + 1.0×0.90 = 0.300 + 0.140 + 0.198 + 0.300 + 0.900 = 1.838, just above the 1.81 distress cut-off, in the grey zone (very close to distress).
8. Risky rate = 0.04 + 0.03 × 0.60 = 5.8%; price = 100 × e^(−0.174) = 84.03; risk-free price = 100 × e^(−0.12) = 88.69; spread = 1.8% (λ × (1 − R)), or about 180 bp.
