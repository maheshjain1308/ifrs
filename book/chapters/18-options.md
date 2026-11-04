# Chapter 18: Options

## Learning Objectives

After studying this chapter you should be able to:

- Describe call and put options, compute payoffs and profits at expiration for single options and common combinations (protective put, covered call, straddle), and identify breakeven points.
- State the no-arbitrage bounds on option prices and use put-call parity to price one option from the others or to construct an arbitrage.
- Value European and American options with the binomial model, using both replicating portfolios and risk-neutral probabilities.
- Apply the Black-Scholes-Merton formula, including dividends, and interpret its inputs and its assumptions.
- Compute and use delta, gamma, vega, theta, and rho to understand and hedge option risk.
- Value employee stock options, and analyze equity, debt, and convertible securities as options on the firm's assets.

## Opening Vignette

*Illustrative scenario: Meridian Biosystems is a fictional company.*

Meridian Biosystems, a mid-sized diagnostics firm with a share price of $40, is preparing its annual equity compensation grant. The compensation committee wants to give senior managers one million options struck at the current price, expiring in ten years and vesting over four. Chief Financial Officer Lucia Ferrante has been asked two questions the committee cannot answer from intuition. First: what is the grant worth to the executives, and what must the company record as an expense? Second: is the cost to shareholders the same as the value to the executives?

Ferrante's analyst brings a simple spreadsheet. The share price is $40 and the exercise price is $40, so the options are "at the money" and have no intrinsic value today. Is the value therefore zero? Of course not. If the stock rises to $70 in five years, the manager earns $30 per option. If it falls to $20, the manager simply does not exercise and loses nothing but the opportunity. The asymmetry, unlimited upside with limited downside, is worth real money. The analyst's spreadsheet, using an option-pricing model with a 30 percent volatility, a 4 percent interest rate, and an expected life of five years, values each option at about $12, so the grant is worth roughly $12 million before forfeitures.

A second surprise follows. The treasurer wants to hedge the share-count dilution, and a banker proposes that Meridian buy call options on its own shares. The banker quotes a price, and Ferrante wants to know why it differs from the model value and what could be learned from the market's *implied volatility*. Meanwhile, the firm's own convertible bond, issued two years earlier, has fallen in value even though the firm's credit is unchanged. The reason is the same: a convertible is a bond plus a call option, and the call option depends on the stock price and on volatility.

Options are everywhere in corporate finance. They are traded on exchanges, embedded in compensation, hidden in financing contracts, and implied in the capital structure itself. This chapter builds the toolkit: payoffs, pricing logic, the binomial and Black-Scholes models, the Greeks, and the application to employee options and corporate securities.

## 18.1 Options and Their Payoffs

### 18.1.1 Definitions

An **option** is a contract giving its holder the *right, but not the obligation*, to buy or sell an underlying asset at a fixed price on or before a specified date. The seller (writer) bears the obligation if the holder exercises. The terms are:

- **Call option**: right to *buy* the underlying at the **exercise (strike) price** K.
- **Put option**: right to *sell* the underlying at K.
- **European option**: exercisable only at **expiration** T. **American option**: exercisable at any time up to T.
- **Premium**: the price paid by the buyer to the writer when the contract is struck.
- **In the money / at the money / out of the money**: a call is in the money if S > K (the underlying price exceeds the strike), a put if S < K. Moneyness refers to the immediate exercise value.

Listed equity options typically cover 100 shares per contract; the premium is quoted per share. Options can also be written on indices, currencies, interest rates, commodities, and futures. Unlike forwards, which impose an obligation on both sides at no initial cost, an option has an up-front price because its holder cannot lose beyond the premium.

### 18.1.2 Payoffs at expiration

Let S_T denote the underlying price at expiration. The payoff to the **holder** of a European call and put are

```
Call payoff = max(S_T − K, 0)
Put payoff  = max(K − S_T, 0)
```

The payoff to the **writer** is the negative of the holder's. **Profit** subtracts the premium paid (or adds the premium received), ignoring interest on the premium. The key properties: a long call has limited downside (the premium) and unlimited upside; a long put gains as the asset falls, limited only by the fact that the price cannot go below zero (maximum payoff K); a short call has unlimited potential loss; a short put's loss is limited to K minus the premium.

Intrinsic value is the immediate exercise payoff, max(S − K, 0) for a call. **Time value** is the premium minus the intrinsic value. Time value reflects the chance that the option will become more valuable before expiry and is largest for at-the-money options with long maturities and high volatility.

### 18.1.3 Combinations

Options can be combined with each other and with the underlying to shape a risk profile.

- **Protective put**: own the asset and a put. The put sets a floor under the portfolio's value at K, like insurance, at the cost of the premium (the "deductible" is S − K).
- **Covered call**: own the asset and write a call. The premium cushions small losses and adds income, but upside is capped at K. This is common among investors seeking yield in flat markets.
- **Straddle**: buy a call and a put with the same strike and expiry. It profits from a large move in either direction, and is a pure bet on volatility.
- **Bull spread**: buy a call at K₁, sell a call at K₂ > K₁. Limited profit and loss.
- **Collar**: own the asset, buy a put at a low strike, and sell a call at a high strike; frequently structured at zero net premium to protect a concentrated holding.

**Example 18.1 – Payoffs and profits of option strategies.** The underlying stock trades at $50. A six-month call and put, both with strike $50, cost $4 and $3 respectively. An investor considers four strategies, each per share; the stock is bought at $50 where relevant. We compute profit (payoff minus cost, ignoring interest) at five expiry prices.

*Long call:* profit = max(S_T − 50, 0) − 4.
*Long put:* profit = max(50 − S_T, 0) − 3.
*Straddle:* sum of the two; cost $7.
*Protective put:* (S_T − 50) + max(50 − S_T, 0) − 3.
*Covered call:* (S_T − 50) − max(S_T − 50, 0) + 4.

For S_T = 35: call: 0 − 4 = −4; put: 15 − 3 = 12; straddle: 8; protective put: −15 + 15 − 3 = −3; covered call: −15 − 0 + 4 = −11.
For S_T = 45: call −4; put 5 − 3 = 2; straddle −2; protective put: −5 + 5 − 3 = −3; covered call: −5 + 4 = −1.
For S_T = 50: call −4; put −3; straddle −7; protective put: −3; covered call: 0 − 0 + 4 = 4.
For S_T = 55: call 5 − 4 = 1; put −3; straddle −2; protective put: 5 + 0 − 3 = 2; covered call: 5 − 5 + 4 = 4.
For S_T = 65: call 15 − 4 = 11; put −3; straddle 8; protective put: 15 − 3 = 12; covered call: 15 − 15 + 4 = 4.

**Table 18.1 – Profit per share at expiration (Example 18.1).**

| Final stock price | Long call | Long put | Straddle | Protective put | Covered call |
|---|---|---|---|---|---|
| $35 | −4 | 12 | 8 | −3 | −11 |
| $45 | −4 | 2 | −2 | −3 | −1 |
| $50 | −4 | −3 | −7 | −3 | 4 |
| $55 | 1 | −3 | −2 | 2 | 4 |
| $65 | 11 | −3 | 8 | 12 | 4 |

*Breakeven points.* The long call breaks even at 50 + 4 = $54; the long put at 50 − 3 = $47. The straddle breaks even at 50 − 7 = $43 and 50 + 7 = $57, so the stock must move more than 14 percent either way for the buyer to profit. The protective put's worst loss is $3 (the premium), at any price at or below $50. The covered call is the mirror: it earns $4 at any price at or above $50 but loses $11 if the stock falls to $35. It can be seen that the protective put and the covered call are not symmetric: one buys insurance, the other sells it.

### 18.1.4 Why options matter to managers

Options matter in corporate finance for four reasons. First, managers use them to hedge exposures at a known cost (currency and commodity options). Second, they are an element of pay design. Third, many corporate securities, such as convertibles, warrants, callable bonds, and even common equity in a levered firm, are packages that contain options. Fourth, real investment decisions embed options: the right to defer, expand, abandon, or switch is worth something, and ignoring it understates the value of flexible projects (the pricing logic of this chapter carries over to such real options).

## 18.2 Arbitrage Bounds and Put-Call Parity

### 18.2.1 Bounds on option values

Without any model of the stock price process, no-arbitrage restrictions place bounds on option prices. For a European call on a non-dividend-paying stock with strike K, maturity T, risk-free continuously compounded rate r:

```
max(0, S − K e^(−rT)) ≤ C ≤ S
max(0, K e^(−rT) − S) ≤ P ≤ K e^(−rT)
```

*Reasoning for the lower bound on the call:* a portfolio of one call plus Ke^(−rT) in cash is worth at least S_T at expiry (if S_T > K, it is worth S_T; otherwise K > S_T), so it must be worth at least S today. Hence C ≥ S − Ke^(−rT). The call cannot be worth more than the stock itself, since the stock delivers everything the call delivers.

Other general results: American options are worth at least as much as otherwise identical European options; options with longer maturities (for American) are worth at least as much; an option's value is convex in the strike. A call on a stock that pays no dividend should never be exercised early, because exercising forfeits the time value and the interest on the strike; its American value equals its European value. American puts, and American calls on dividend-paying stocks, may be optimally exercised early.

### 18.2.2 Put-call parity

Consider two portfolios at time 0 for European options on a non-dividend-paying stock with the same K and T:

- Portfolio A: one call plus cash Ke^(−rT) invested at the risk-free rate.
- Portfolio B: one put plus one share.

At expiry, A is worth max(S_T − K, 0) + K = max(S_T, K). B is worth max(K − S_T, 0) + S_T = max(K, S_T). They are identical in every state, so they must cost the same today:

```
C + K e^(−rT) = P + S
```

or equivalently C − P = S − Ke^(−rT). With a continuous dividend yield q the stock term becomes Se^(−qT); with discrete dividends, subtract their present value from S. The relationship is model-independent: it needs only no-arbitrage. It implies that a call can be synthesized from a put, the stock, and borrowing (C = P + S − Ke^(−rT)), that a long call plus short put equals a forward purchase at K, and that put prices are determined by call prices.

For American options, parity holds only as an inequality: S − K ≤ C − P ≤ S − Ke^(−rT).

**Example 18.2 – A parity arbitrage.** A non-dividend-paying stock trades at $100. A six-month European call and put, both struck at $100, are quoted at $9.50 and $6.50. The continuously compounded risk-free rate is 5 percent.

*Step 1: PV of the strike.* 100 × e^(−0.05 × 0.5) = 100 × e^(−0.025) = 100 × 0.975310 = $97.53.

*Step 2: parity check.* C − P = 9.50 − 6.50 = $3.00. S − Ke^(−rT) = 100 − 97.53 = $2.47. The call is $0.53 too expensive relative to the put.

*Step 3: arbitrage.* Sell the call (+9.50), buy the put (−6.50), buy the stock (−100), and borrow $97.53 (+97.53). Net cash today: 9.50 − 6.50 − 100 + 97.53 = **+$0.53**.

*Step 4: expiry.* The short call, long put, and the stock combine to deliver exactly K = $100 in every state: if S_T > 100 the call is exercised against us (−(S_T − 100)) and we hold the stock worth S_T, net 100; if S_T < 100 the put pays 100 − S_T, and with the stock again 100. Repaying the loan costs 97.53 × e^(0.025) = $100. The net at expiry is zero in every state. The profit is the $0.53 of cash received today.

If the parity gap were closed by market forces, the call would fall or the put rise until C − P = $2.47. In practice, bid-ask spreads, borrowing costs, dividends, and early-exercise premiums narrow the gap before costs eliminate it.

### 18.2.3 Common mistakes

Two errors are frequent. The first is to apply parity to American options without adjusting for early exercise. The second is to forget dividends: a stock paying a known dividend before expiration reduces the call and raises the put, and parity must use the stock price net of the present value of those dividends.

## 18.3 The Binomial Option Pricing Model

### 18.3.1 The one-period model: replication

The binomial model of Cox, Ross, and Rubinstein (building on Sharpe) values an option by building a portfolio of the underlying stock and risk-free borrowing that has *exactly* the same payoffs as the option. If it does, the option must cost what the portfolio costs. Suppose that over one period the stock price S can move to either uS (up) or dS (down), where u > 1 > d, and that the gross risk-free return per period is R = 1 + r_f, with d < R < u (otherwise arbitrage exists). The option pays C_u in the up state and C_d in the down state.

Form a portfolio of Δ shares and B dollars of risk-free lending (negative for borrowing). To match payoffs:

```
Δ·uS + B·R = C_u
Δ·dS + B·R = C_d
```

Subtracting gives the **hedge ratio** (delta):

```
Δ = (C_u − C_d) / (S (u − d))
B = (C_u·d − C_d·u) / ((u − d) R)    [the cash holding; negative means borrowing]
```

The option's value is C = ΔS + B. This logic is strikingly general: no assumption is made about investors' risk preferences or about the actual probabilities of the up and down moves. The reason is that the replicating portfolio *removes* the risk, so the option need only be priced relative to the stock.

### 18.3.2 Risk-neutral valuation

The same value can be written as a discounted expectation under artificial **risk-neutral probabilities**:

```
p = (R − d) / (u − d)
C = [ p · C_u + (1 − p) · C_d ] / R
```

Here p is not the true probability of an up-move. It is the probability that would make the stock's expected return equal to the risk-free rate, so that discounting at the risk-free rate is valid. The result extends multi-period by rolling back through the tree, applying this formula at each node. This is one of the most important ideas in modern finance: pricing derivatives by expectation under a measure in which assets earn the risk-free rate, which works because the replication argument is available at every node.

**Example 18.3 – One-period call by replication and risk-neutral valuation.** A stock is at $100. Over one year it will either rise to $120 (u = 1.20) or fall to $90 (d = 0.90). The risk-free rate is 5 percent (R = 1.05). A European call has strike K = $105.

*Step 1: payoffs.* C_u = max(120 − 105, 0) = 15; C_d = max(90 − 105, 0) = 0.

*Step 2: delta.* Δ = (15 − 0) / (100 × (1.20 − 0.90)) = 15 / 30 = 0.5 share.

*Step 3: borrowing.* If the stock falls to $90, 0.5 shares are worth $45 and the call pays 0, so the loan must be repaid with $45: B = −45 / 1.05 = −$42.857. Check the up state: 0.5 × 120 = 60; repay 42.857 × 1.05 = 45; net 15 = C_u ✓.

*Step 4: call value.* C = 0.5 × 100 − 42.857 = **$7.143**.

*Step 5: risk-neutral check.* p = (1.05 − 0.90) / 0.30 = 0.50. C = (0.5 × 15 + 0.5 × 0) / 1.05 = 7.5 / 1.05 = $7.143 ✓.

*Interpretation.* Suppose someone offered the call at $8.00. We would sell it and buy the replicating portfolio for $7.143, pocketing $0.857 with no risk. Suppose the true probability of an up-move were 80 percent: the option's *expected* payoff would be 12, but the option's price would remain $7.143, because the stock's own price already incorporates the true probabilities and investors' required returns.

### 18.3.3 Multi-period trees and American options

Divide the life of the option into n steps. The stock moves up by u or down by d each step, so after n steps there are n + 1 possible prices. Starting at the end of the tree, value the option at each terminal node by its payoff, then step backward: at each earlier node, the value is the discounted risk-neutral expectation of its two successors. For an **American** option, at each node compare this "continuation value" with the immediate exercise value, and take the larger.

To make the tree consistent with a volatility σ (annualized) over steps of length Δt, Cox, Ross, and Rubinstein set

```
u = e^(σ√Δt),   d = 1/u,   p = (e^(rΔt) − d) / (u − d)
```

As the number of steps grows large, the binomial price converges to the Black-Scholes price for European options. The tree remains valuable because it handles early exercise, discrete dividends, and path-dependent or state-dependent features that closed-form formulas cannot.

**Example 18.4 – A two-period American put.** A stock is at $100. Each period (six months), it either rises by 10 percent (u = 1.10) or falls by 10 percent (d = 0.90). The risk-free rate is 3 percent per period (R = 1.03). Value a put with strike K = $100 expiring after two periods, both European and American.

*Step 1: risk-neutral probability.* p = (1.03 − 0.90) / (1.10 − 0.90) = 0.13 / 0.20 = 0.65; 1 − p = 0.35.

*Step 2: terminal stock prices.* uu: 121; ud = du: 99; dd: 81. Terminal put payoffs: 0, 1, 19.

*Step 3: European put values at period 1.*
Up node (S = 110): P_u = (0.65 × 0 + 0.35 × 1) / 1.03 = 0.35 / 1.03 = 0.3398.
Down node (S = 90): P_d = (0.65 × 1 + 0.35 × 19) / 1.03 = (0.65 + 6.65) / 1.03 = 7.30 / 1.03 = 7.0874.

*Step 4: European put at time 0.* P = (0.65 × 0.3398 + 0.35 × 7.0874) / 1.03 = (0.2209 + 2.4806) / 1.03 = 2.7015 / 1.03 = **$2.623**.

*Step 5: American put.* At the up node, exercise value = 100 − 110 < 0, so hold: 0.3398. At the down node (S = 90), exercise value = 100 − 90 = $10.00, which exceeds the continuation value of 7.0874. So exercise early: the node value is 10.00. At time 0: P = (0.65 × 0.3398 + 0.35 × 10.00) / 1.03 = (0.2209 + 3.50) / 1.03 = 3.7209 / 1.03 = **$3.612**. (Immediate exercise at time 0 would pay 0.)

*Interpretation.* The right to exercise early adds $0.99 (3.612 − 2.623), about 38 percent to the value. In the down state the holder does better to collect $10 now, and invest it at 3 percent, than to wait for the chance of a further decline. Deep in-the-money puts, high interest rates, and low volatility make early exercise more attractive.

**Table 18.2 – Option replication and valuation summary (Examples 18.3 and 18.4).**

| Item | One-period call | Two-period European put | Two-period American put |
|---|---|---|---|
| Spot | 100 | 100 | 100 |
| Strike | 105 | 100 | 100 |
| u, d | 1.20, 0.90 | 1.10, 0.90 | 1.10, 0.90 |
| Risk-free gross rate per period | 1.05 | 1.03 | 1.03 |
| Risk-neutral p | 0.500 | 0.650 | 0.650 |
| Value | 7.143 | 2.623 | 3.612 |

### 18.3.4 Practical notes on the binomial approach

Calibration is the real work: choosing u, d consistent with volatility estimates and the time grid. Convergence is not monotone because of the position of the strike relative to the nodes, so practitioners use a few hundred steps or averaging. The tree also supports numerical valuation of options on assets with dividend yields (set p = (e^((r−q)Δt) − d)/(u − d)), currencies (q = foreign rate), and futures (q = r).

## 18.4 The Black-Scholes-Merton Model

### 18.4.1 The formula

Fischer Black and Myron Scholes (1973), and independently Robert Merton, derived a closed-form price for European options by the same replication logic as the binomial model, extended to continuous trading. They assumed that the stock price follows a geometric Brownian motion (constant volatility σ, log returns normally distributed), that interest rates are constant, that there are no transaction costs or taxes, that the asset can be traded continuously and shorted, and that no dividends are paid (an extension handles dividends). The price of a European call is

```
C = S N(d₁) − K e^(−rT) N(d₂)
P = K e^(−rT) N(−d₂) − S N(−d₁)

d₁ = [ ln(S/K) + (r + σ²/2) T ] / (σ √T)
d₂ = d₁ − σ √T
```

where N(·) is the standard normal cumulative distribution function. With a continuous dividend yield q, replace S with Se^(−qT) and use (r − q + σ²/2) in d₁.

The formula has a financial interpretation: N(d₂) is the risk-neutral probability that the option finishes in the money, so K e^(−rT) N(d₂) is the present value of the expected payment of the strike. S N(d₁) is the present value of the expected stock received, conditional on exercise; N(d₁) is also the delta. The call is thus a leveraged position in the stock: it is a replicating portfolio of N(d₁) shares financed by borrowing Ke^(−rT)N(d₂).

### 18.4.2 The inputs

- **S**, the current price of the underlying, and **K**, the strike: observable.
- **T**, time to expiry in years.
- **r**, the continuously compounded risk-free rate for maturity T (a government rate or OIS rate).
- **σ**, the annualized volatility of the underlying's log returns: the one unobservable input. It can be estimated from historical returns (the standard deviation of daily log returns multiplied by √252) or inferred from market prices as **implied volatility**, the σ that makes the model price equal the observed price. Implied volatility is a quotation convention: traders talk of volatility, not price. Across strikes and maturities, implied volatilities typically are not flat: the "smile" or "skew," in which low-strike options carry higher implied volatility in equity markets, is evidence that the constant-volatility assumption fails, particularly in the tail.
- **q**, the dividend yield or the present value of discrete dividends.

An important feature is that the **expected return on the stock does not appear**. This follows directly from the replication argument. Two investors with very different views about the stock's growth should agree on the call's price if they agree on volatility.

### 18.4.3 Worked pricing

**Example 18.5 – Pricing a European call and put.** A non-dividend-paying stock trades at S = $100. A European option with strike K = $105 expires in six months (T = 0.5). The risk-free rate is r = 4 percent (continuous) and the volatility is σ = 25 percent.

*Step 1: d₁.* ln(100 / 105) = ln(0.952381) = −0.048790. (r + σ²/2) T = (0.04 + 0.03125) × 0.5 = 0.035625. Numerator = −0.048790 + 0.035625 = −0.013165. Denominator σ√T = 0.25 × 0.707107 = 0.176777. **d₁ = −0.0745.**

*Step 2: d₂.* d₂ = −0.0745 − 0.1768 = **−0.2513.**

*Step 3: normal probabilities.* N(d₁) = N(−0.0745) = 0.4703; N(d₂) = N(−0.2513) = 0.4008. Then N(−d₁) = 0.5297 and N(−d₂) = 0.5992.

*Step 4: PV of the strike.* 105 × e^(−0.02) = 105 × 0.980199 = $102.921.

*Step 5: call.* C = 100 × 0.4703 − 102.921 × 0.4008 = 47.03 − 41.25 = **$5.78.**

*Step 6: put.* P = 102.921 × 0.5992 − 100 × 0.5297 = 61.67 − 52.97 = **$8.70.**

*Step 7: parity check.* C − P = 5.78 − 8.70 = −2.92. S − Ke^(−rT) = 100 − 102.92 = −2.92 ✓.

*Interpretation.* The call is out of the money (S < K) yet worth $5.78, entirely time value. Its delta of 0.47 means it behaves like 0.47 shares for small moves. If volatility were 30 percent instead of 25 percent, the call would be worth $7.19, an increase of 24 percent; options are volatility bets.

**Table 18.3 – At-the-money call value as a function of volatility (S = K = $100, T = 0.5, r = 5%).**

| Volatility | Call value | Increase over 15% case |
|---|---|---|
| 15% | 5.53 | – |
| 20% | 6.89 | 24.6% |
| 25% | 8.26 | 49.4% |
| 30% | 9.63 | 74.3% |
| 40% | 12.39 | 124.1% |

Value is almost linear in volatility for at-the-money options, which is why a rough rule is C ≈ 0.4 S σ √T when r is small: for σ = 30 percent, that gives 0.4 × 100 × 0.3 × 0.7071 = 8.49, near the true 9.63 (the interest component adds some value).

### 18.4.4 Limitations

The model's flaws are well understood: volatility is not constant and jumps occur; markets have transaction costs and cannot trade continuously; interest rates vary; American features and dividends complicate matters. Despite this, the model remains the benchmark language of derivatives markets, mainly because deviations are managed by quoting a *different implied volatility* for each strike. In corporate settings, where options are valued for accounting or pay design, its inputs (especially the volatility over long horizons) deserve judgment, and the sensitivity of the result to them should be tested.

## 18.5 The Greeks and Hedging

### 18.5.1 Sensitivities

The **Greeks** are partial derivatives of the option price with respect to its inputs. They tell a trader or risk manager how the value will change when the market moves, and so how to hedge. For a European call on a stock with dividend yield q (set q = 0 if none), with φ(x) denoting the standard normal density:

| Greek | Meaning | Call | Put |
|---|---|---|---|
| Delta Δ | ∂V/∂S | e^(−qT) N(d₁) | e^(−qT) [N(d₁) − 1] |
| Gamma Γ | ∂²V/∂S² | e^(−qT) φ(d₁) / (S σ √T) | same as call |
| Vega ν | ∂V/∂σ | S e^(−qT) φ(d₁) √T | same as call |
| Theta Θ | ∂V/∂t | −S e^(−qT) φ(d₁) σ / (2√T) − r K e^(−rT) N(d₂) + q S e^(−qT) N(d₁) | −S e^(−qT) φ(d₁) σ / (2√T) + r K e^(−rT) N(−d₂) − q S e^(−qT) N(−d₁) |
| Rho ρ | ∂V/∂r | K T e^(−rT) N(d₂) | −K T e^(−rT) N(−d₂) |

*Delta* is the hedge ratio and the approximate probability (in the risk-neutral world) of finishing in the money. Call deltas run from 0 to 1 and put deltas from −1 to 0. *Gamma* measures the curvature: how fast delta changes. It is highest for at-the-money options close to expiry. *Vega* is sensitivity to volatility (conventionally quoted per one percentage point). *Theta* is time decay: the option loses time value as expiry approaches, and long option holders "pay" theta daily while writers collect it. Positive gamma and negative theta go together: the holder benefits from large moves and pays for the privilege through time decay. *Rho* is interest-rate sensitivity and is usually the least important for short-dated equity options.

A useful relationship (for a delta-hedged portfolio, derived from the Black-Scholes equation) is Θ + r S Δ + ½ σ² S² Γ = r V. For a delta-neutral position this reduces to Θ ≈ −½ σ² S² Γ: the daily time decay received by the seller of options is compensation for the gamma risk borne.

### 18.5.2 Delta hedging

A market maker who sells a call can hedge by buying Δ shares per option. The position's value is then insensitive to small moves in S. But as S moves, Δ changes (gamma), so the hedge must be *rebalanced*. Profit or loss arises from the gap between realized volatility and the volatility priced into the option: the hedged option seller who sold at 30 percent implied volatility makes money if the stock subsequently realizes less than 30 percent. In practice, rebalancing is discrete, transaction costs matter, and volatility itself moves (vega risk), so the hedge is imperfect. Large books are hedged in aggregate: net delta, gamma, and vega limits are set by risk managers.

**Example 18.6 – Greeks of an at-the-money option and delta-gamma hedging.** An at-the-money call has S = K = $100, T = 0.5, r = 5 percent, σ = 30 percent, no dividends.

*Step 1: d₁ and d₂.* d₁ = [0 + (0.05 + 0.045) × 0.5] / (0.30 × 0.707107) = 0.0475 / 0.212132 = 0.2239; d₂ = 0.2239 − 0.2121 = 0.0118.

*Step 2: price.* N(d₁) = 0.5886, N(d₂) = 0.5047. Ke^(−rT) = 97.531. C = 100 × 0.5886 − 97.531 × 0.5047 = 58.86 − 49.22 = **$9.63**.

*Step 3: Greeks.* φ(0.2239) = 0.3891 (the standard normal density at 0.2239).
- Delta = N(d₁) = **0.5886**.
- Gamma = 0.3891 / (100 × 0.30 × 0.7071) = 0.3891 / 21.213 = **0.01834** per $1.
- Vega = 100 × 0.3891 × 0.7071 = **27.51** per 1.00 of volatility, or $0.275 per volatility point.
- Theta ≈ **−$10.71 per year**, or about −$0.0294 per calendar day.
- Rho = K T e^(−rT) N(d₂) = 100 × 0.5 × 0.9753 × 0.5047 = **24.61** per 1.00, or $0.246 per percentage point of rate.

*Step 4: hedging a short position.* Treat each call as covering one share. A bank sells 10,000 calls and buys 10,000 × 0.5886 = **5,886 shares** to be delta neutral.

*Step 5: a $2 move.* Suppose the stock rises to $102. The call reprices to $10.848 (a rise of $1.213 per call), so the loss on 10,000 short calls is $12,133. The 5,886 shares gain 5,886 × 2 = $11,772. Net loss: **$361**. A delta-only estimate of the call change is 0.5886 × 2 = 1.177. The delta-gamma estimate adds ½ × 0.01834 × 2² = 0.0367, giving 1.214, close to the actual 1.213. The residual loss of $361 is gamma: a short-gamma position loses whichever way the stock moves.

*Step 6: rebalancing.* New delta ≈ 0.5886 + 0.01834 × 2 = 0.6253, so the bank needs 6,253 shares: buy about **367 more** at $102 (buying after the rise, selling after a fall, "buy high, sell low" being the cost of being short gamma).

*Step 7: other exposures.* A one-point rise in implied volatility raises each call by $0.275, a loss of about $2,751 for the bank. One day of decay earns the bank 10,000 × 0.0294 = about **$294**, which is the compensation for bearing gamma and vega risk.

### 18.5.3 Using Greeks in corporate risk management

Corporate treasurers rarely run option books, but they use the Greeks conceptually. The cost of a currency collar can be set so that the delta of the sold option and bought option nearly offset in premium terms. The effective hedge ratio of a protective put is its delta, not 1. Sizing a hedge program with options requires deciding whether the exposure should be protected against rate or price moves *at expiry* (use the option's payoff) or *during the life* (account for delta and mark-to-market). And whenever a firm sells options (callable debt, embedded customer options), it should recognize that it is short gamma and vega and incurs valuation volatility under fair-value accounting.

## 18.6 Employee Stock Options

### 18.6.1 Features and incentive logic

An **employee stock option** (ESO) gives an employee the right to buy company shares at a fixed exercise price, usually set at the market price on the grant date, for a period of up to ten years. Typical features:

- **Vesting**: the option cannot be exercised for a period (cliff or graded, e.g., four years). Employees who leave before vesting forfeit unvested options.
- **Non-transferability**: ESOs cannot be sold or hedged freely, unlike traded options. A risk-averse, under-diversified employee will usually value them less than a diversified investor would, and will exercise early to lock in gains.
- **Dilution**: exercise creates new shares (or uses treasury shares), so the proceeds are the strike, but the value given up is the market price. The existing shareholders bear the dilution.

The incentive argument is that a manager with options benefits from share price appreciation and, because of the convex payoff, from *volatility* as well. This can align interests with those of shareholders, but it can also encourage risk taking (a convex payoff gives a manager an incentive to raise risk) and short-term focus. Design devices to counter this include longer vesting, holding requirements, performance-conditioned vesting, and strike prices indexed to peers or set above market.

### 18.6.2 Valuation and expensing

Under IFRS 2 and the corresponding US standard (ASC 718), equity-settled share-based payments are measured at the **grant-date fair value** and recognized as an expense over the vesting period, adjusted for the number of options expected to vest. Because employee options are not traded, firms use an option pricing model (Black-Scholes-Merton or a lattice) with these adaptations:

1. Use the **expected life** of the option, not the contractual term, to reflect early exercise, which is typically triggered at some multiple of the strike or at departure.
2. Adjust the expected number of options for **forfeitures** during vesting.
3. Use an **expected volatility** that considers historical volatility and implied volatility of traded options, if available, and the term structure.
4. Include **expected dividends** (as a yield q).

Strictly, the Black-Scholes value ignores dilution. If the firm has N shares and issues M options, an exercised option increases the share count, so the holder shares the gain with others. A simple adjustment multiplies the standard value by N / (N + M) (the dilution factor) when the market has already priced the options.

The question asked by the compensation committee is whether the cost to shareholders equals the value to the employee. In general, it does not: the cost to the firm (fair value) is typically higher than the employee's subjective value because of non-diversification and non-tradability. This wedge is a reason that firms sometimes prefer restricted stock or performance shares for senior staff and options for broad-based start-up grants where cash is scarce.

**Example 18.7 – Valuing and expensing an executive option grant.** Meridian Biosystems grants 1,000,000 options at-the-money: S = K = $40. Expected life is 5 years (the contractual term is 10); expected volatility is 30 percent; the risk-free rate is 4 percent; the dividend yield is 1 percent. Vesting is graded straight-line over 4 years, and forfeitures are expected to remove 8 percent of the options. There are 50 million shares outstanding.

*Step 1: d₁.* ln(40 / 40) = 0. (r − q + σ²/2) T = (0.04 − 0.01 + 0.045) × 5 = 0.075 × 5 = 0.375. σ√T = 0.30 × 2.23607 = 0.670820. d₁ = 0.375 / 0.670820 = **0.5590**.

*Step 2: d₂.* 0.5590 − 0.6708 = **−0.1118**.

*Step 3: normal probabilities.* N(d₁) = 0.7119, N(d₂) = 0.4555.

*Step 4: discount factors.* e^(−qT) = e^(−0.05) = 0.951229; e^(−rT) = e^(−0.20) = 0.818731.

*Step 5: value per option.* C = 40 × 0.951229 × 0.7119 − 40 × 0.818731 × 0.4555 = 27.088 − 14.918 = **$12.17**.

*Step 6: total fair value.* Expected vesting options = 1,000,000 × 0.92 = 920,000. Total = 920,000 × 12.17 = **$11.20 million**.

*Step 7: annual expense.* Straight-line over 4 years: 11.20 / 4 = **$2.80 million** per year in the income statement (a non-cash charge; the offset is credited to equity). True-up adjustments occur if actual forfeitures differ.

*Step 8: dilution adjustment (informational).* 12.17 × 50 / 51 = $11.93 per option.

*Step 9: sensitivities.* The result is quite sensitive to the inputs, as the table shows.

**Table 18.4 – Value per option for the Meridian grant under alternative assumptions (S = K = $40, r = 4%, q = 1%).**

| Volatility | Expected life | Value per option |
|---|---|---|
| 20% | 5 years | $9.26 |
| 25% | 5 years | $10.71 |
| 30% | 3 years | $9.40 |
| 30% | 4 years | $10.89 |
| 30% | 5 years | $12.17 |
| 30% | 6 years | $13.30 |
| 35% | 5 years | $13.61 |
| 40% | 5 years | $15.03 |

An error of ten volatility points (20 versus 30 percent) shifts the value by about 30 percent, so documentation of how volatility and life were chosen is part of good governance and audit readiness. Note also that the expense is fixed at grant date: if the stock later falls and the options go underwater, the expense is not reversed (unless the performance or service conditions fail), which has led some boards to reprice options, a controversial act because it rewards failure.

### 18.6.3 Design issues and the tax and governance context

Tax treatment varies by jurisdiction (incentive stock options, qualified plans, and so on) and affects the form and timing of grants. Governance issues include "spring-loading" (grants made before good news), backdating (illegal when undisclosed), and overhang (options outstanding as a percentage of shares). Shareholder-approved plans, independent compensation committees, and transparent disclosure of valuation assumptions reduce these concerns.

## 18.7 Corporate Securities as Options

### 18.7.1 Equity as a call on the firm's assets

Merton (1974) observed that the capital structure of a firm with a single zero-coupon debt issue can be described in option terms. Let V be the value of the firm's assets and D the face value of debt due at date T. At T:

- If V_T > D, creditors are paid in full, and shareholders keep V_T − D.
- If V_T < D, shareholders walk away (limited liability); creditors receive V_T.

So the equity payoff is max(V_T − D, 0): a **call option on the firm's assets with strike D**. The debt payoff is D − max(D − V_T, 0): a risk-free bond *minus* a put option on the assets. Thus

```
E = Call(V, D, T, r, σ_V)
Debt = V − E = D e^(−rT) − Put(V, D, T, r, σ_V)
```

These relationships are put-call parity applied to the firm. They produce several managerial insights.

1. **Risk shifting.** Equity is a call; calls rise in value with volatility. Shareholders therefore gain, at the expense of creditors, when the firm shifts into riskier assets, an incentive that grows as leverage rises. This is the "asset substitution" problem, and explains covenants.
2. **The credit spread is the price of a put.** The yield on risky debt exceeds the risk-free rate by an amount that compensates creditors for being short a put on the firm's assets. Credit models used by banks and rating agencies are built on this framework.
3. **Shareholders hold an option value even in distress.** A firm with V < D can still have positive equity value, as long as there is time and volatility. This explains why equity does not fall to zero at the point of technical insolvency, and why equity holders resist early liquidation.
4. **Equity beta rises with leverage** because the delta of a call is less than one but its elasticity (percentage change in E per percentage change in V) exceeds one: β_E = β_V × Δ × (V/E).

**Example 18.8 – Equity and debt valued with the Merton model.** A firm has asset value V = $120 million, a single zero-coupon bond with face value D = $80 million due in T = 2 years, asset volatility σ = 30 percent, and risk-free rate r = 4 percent.

*Step 1: d₁.* ln(120 / 80) = ln(1.5) = 0.405465. (r + σ²/2)T = (0.04 + 0.045) × 2 = 0.17. Numerator 0.575465. σ√T = 0.30 × 1.414214 = 0.424264. d₁ = **1.3564**.

*Step 2: d₂.* 1.3564 − 0.4243 = **0.9321**.

*Step 3: probabilities.* N(d₁) = 0.9125; N(d₂) = 0.8244.

*Step 4: PV of debt face.* 80 × e^(−0.08) = 80 × 0.923116 = $73.849 million.

*Step 5: equity.* E = 120 × 0.9125 − 73.849 × 0.8244 = 109.50 − 60.88 = **$48.62 million**.

*Step 6: debt.* D₀ = 120 − 48.62 = **$71.38 million**.

*Step 7: credit yield.* y = −ln(71.38 / 80) / 2 = −ln(0.89225) / 2 = 0.11400 / 2 = **5.70 percent**, a spread of **1.70 percent** over the risk-free rate. The risk-neutral probability of default is 1 − N(d₂) = 17.6 percent.

*Step 8: parity check.* The embedded put value is 73.849 − 71.38 = **$2.47 million**, so the creditors' payoff is a risk-free bond worth $73.85 million less a $2.47 million put.

*Step 9: risk shifting.* The firm replaces assets with riskier assets of the same value, raising σ to 45 percent. Recomputing gives E = $53.61 million and debt value $66.39 million, with a yield of 9.33 percent. Shareholders gain $4.99 million and creditors lose exactly that amount, even though firm value V did not change. This is the transfer of wealth that creditors guard against with covenants and security.

### 18.7.2 Convertible bonds and warrants

A **convertible bond** is a straight bond plus a call option on the issuer's shares, exercisable by giving up the bond. A **warrant** is a call option issued by the company itself, with dilution when exercised. Valuation separates the pieces:

```
Convertible value ≈ Straight-bond value + (Conversion ratio × Option value) [adjusted for call provisions, credit risk, and dilution]
```

The conversion option lets issuers pay a lower coupon (the buyer is paid partly in an option) and reduces the agency costs of debt, because the option offsets the risk-shifting incentive described above: if managers take extra risks, the convertible holder participates through the option.

**Example 18.9 – Decomposing a convertible bond.** A fictional issuer sells a five-year convertible with face value $1,000 and a 3 percent annual coupon. Each bond converts into 20 shares (conversion price $50). The stock trades at $40, volatility is 30 percent, the risk-free rate is 4 percent, no dividends are paid. A comparable straight bond of the same issuer would yield 6 percent.

*Step 1: straight bond value.* PV of coupons: 30 × [1 − 1.06^(−5)] / 0.06 = 30 × 4.21236 = $126.37. PV of face: 1,000 / 1.06⁵ = 1,000 / 1.338226 = $747.26. Total **$873.63**.

*Step 2: option per share.* S = 40, K = 50, T = 5, r = 4 percent, σ = 30 percent. ln(40 / 50) = −0.223144. (0.04 + 0.045) × 5 = 0.425. Numerator 0.201856. σ√T = 0.670820. d₁ = 0.3009; d₂ = −0.3699. N(d₁) = 0.6182; N(d₂) = 0.3557. PV of strike = 50 × 0.818731 = 40.937. C = 40 × 0.6182 − 40.937 × 0.3557 = 24.73 − 14.56 = **$10.17**.

*Step 3: option per bond.* 20 × 10.17 = **$203.36**.

*Step 4: convertible value.* 873.63 + 203.36 = **$1,076.99**, about 107.7 percent of par.

*Interpretation.* Investors accept a 3 percent coupon instead of 6 percent because they receive a conversion option. Relative to a 6 percent coupon, the 3 percent coupon is worth $126.37 less in present value (30 × 4.21236); the option is worth $203.36. Because the package is worth $1,077 against a $1,000 issue price, the issuer is underpricing it: in practice it would raise the conversion price, cut the conversion ratio, or lower the coupon until the value equals par. The lesson for issuers is that convertible financing is not cheap debt; its low coupon is paid for with an option on the upside, and the true cost of the bond includes the option's value.

### 18.7.3 Other embedded options

Many corporate instruments embed options: **callable bonds** (the issuer holds a call, so the bond is worth less than a straight bond: callable = straight − call), **putable bonds**, prepayment options in mortgages, **loan commitments** (the lender writes a put and a call), guarantees (a put on the guaranteed asset), and **rights issues** (short-dated calls). The pricing methods of this chapter apply with modification.

## 18.8 Practical Guidance for Managers

1. **Distinguish value from payoff.** An option's market value includes time value; do not equate it with the intrinsic value at today's price. An at-the-money option is not worthless.
2. **Volatility is the key assumption.** Compare historical, implied, and peer volatility, and run sensitivities. When valuing long-dated corporate options, the term structure of volatility matters.
3. **Use parity as a sanity check.** If a quoted call, put, stock price, and strike do not satisfy parity, there is an error or a market friction (borrow cost, dividends, early exercise).
4. **Recognize options in contracts.** Whenever a contract gives one party a right without an obligation (an extension, a termination, a price cap, a conversion), it has an option value that should be priced, not ignored.
5. **Hedge with understanding.** Know the delta, gamma, and vega of any option position, and the accounting implications (hedge accounting, fair-value changes, and disclosure requirements).
6. **Do not mistake the model for the market.** Black-Scholes is a quoting convention and an approximation; model risk is real, particularly for long maturities, thinly traded underlyings, and exotic features.

## Case Study

*Illustrative case: Halden Marine Technologies is a fictional company.*

Halden Marine Technologies designs and builds autonomous survey vessels for offshore wind developers and port authorities. Listed on a mid-cap exchange for four years, it has 80 million shares outstanding trading at $25, a market capitalization of $2.0 billion, and net debt of $400 million, of which $300 million is a single five-year bond with a 4.5 percent coupon issued three years ago. The chief financial officer, Ingrid Solberg, is preparing three decisions for the March board meeting, each of which turns out to be about options.

*Decision one: the management incentive plan.* The compensation committee, chaired by independent director Hassan Idris, wants to replace the existing restricted-share awards with a grant of 2.4 million at-the-money options (3 percent of shares) to 40 senior employees, with a 10-year term and cliff vesting after three years. The human resources director, Camille Dubois, argues that options are "free" because no cash leaves the company. A shareholder representative has written to the board objecting that the grants reward managers for volatility rather than performance. The company's historical annualized volatility is 38 percent, but the implied volatility on listed options with a one-year maturity is 31 percent, and the average of peers' five-year volatilities is 34 percent. The risk-free rate is 4 percent and Halden pays no dividend. Employee surveys suggest that executives typically exercise about five years after grant, if vested, unless the stock has doubled, in which case they exercise sooner. Solberg estimates the expected forfeiture rate at 10 percent.

*Decision two: the convertible.* Halden needs $250 million to fund a new shipyard. Bankers propose a seven-year convertible bond with a 2 percent coupon and a 40 percent conversion premium (a conversion price of $35). A straight seven-year bond would cost Halden about 6.5 percent. The treasury director, Pieter Van Dijk, notes that the convertible's coupon saving is $11.25 million a year and that the shares reserved for conversion would amount to 7.1 million (about 8.9 percent of the current share count). Board member Elena Rossi wants to know if the company is being given "something for nothing" and whether a lower conversion premium would change the economics. The rating agency has said that the equity component of a convertible does not receive full equity credit.

*Decision three: the hedge and the bank's request.* Halden has a euro-denominated contract, due for payment in nine months, which will deliver EUR 60 million. Solberg could sell the euros forward, but she dislikes locking in a rate if the euro rallies. She is considering a put option on the euro (the right to sell euros at a floor rate), which costs a premium of about 2.1 percent of the notional at the current forward rate. The bank has also asked whether Halden would accept a *zero-cost collar* in which it buys the put and sells a call on the euro at a higher strike. The bank's hedging desk will delta hedge the position and has warned that during the contract period, gamma risk could cause the bank to widen the price. Solberg must decide whether the collar's loss of upside is worth saving the premium.

*Other considerations.* The stock has recently been volatile because of a contested bid for one of Halden's competitors. A share buyback is on the agenda as well, funded from the proceeds of the convertible; Dubois remarks that buybacks might be used to offset the dilution from the option grant. Meanwhile, the auditors have asked for documentation of how the volatility and expected life assumptions will be selected, noting that they will test the valuation for reasonableness and consistency with prior grants.

Solberg realizes that she needs a consistent framework: a way to value the incentive grant and understand its cost to shareholders, a way to unbundle the convertible into bond and option, and a way to compare the put with the collar. She also needs to explain to the board that "free" is the wrong word for any of these instruments.

**Discussion questions**

1. For decision one, explain which volatility and expected life you would use to value the option grant and why. Describe qualitatively how the value per option and the accounting expense change if the committee moves to a four-year vesting cliff or an exercise price 10 percent above market. Is Dubois correct that options are free?
2. For decision two, decompose the convertible into a straight bond and a call option. Using the information in the case, estimate whether the convertible is likely to be priced fairly and discuss how a lower conversion premium would change the coupon needed. What are the costs of the convertible that the coupon saving fails to capture?
3. For decision three, compare a forward sale, a purchased put, and a zero-cost collar in terms of payoffs, cost, and the retained upside. When would the collar be preferable? How does put-call parity relate the put and call prices in structuring the zero-cost collar?
4. The shareholder representative argues that options encourage excessive risk taking. Use the idea of equity as a call option on firm assets to explain the argument, and propose two design features that reduce the problem.

## Key Takeaways

- An option gives a right without an obligation; its payoff is max(S − K, 0) for a call and max(K − S, 0) for a put, and the asymmetry makes options valuable even when at the money.
- Combinations of options and the underlying (protective puts, covered calls, straddles, collars) shape the distribution of outcomes; each has a clear cost, breakeven, and set of bets embedded within it.
- Put-call parity, C + Ke^(−rT) = P + S, follows from no-arbitrage alone and holds regardless of any model of the stock price; violations signal an arbitrage or an error in the inputs.
- In the binomial model an option is priced by building a replicating portfolio of stock and borrowing, equivalent to discounting expected payoffs under risk-neutral probabilities at the risk-free rate; true probabilities and risk preferences are irrelevant.
- American options can be valued on a tree by comparing at each node the continuation value with exercise value; early exercise is never optimal for American calls on non-dividend-paying stocks but can be for puts.
- The Black-Scholes-Merton formula depends on five inputs; volatility is the only unobservable, and the expected return on the stock does not appear.
- Delta is the hedge ratio, gamma the curvature, vega the volatility sensitivity, theta the time decay, and rho the rate sensitivity; a delta-hedged option seller earns theta in return for bearing gamma and vega risk.
- Employee stock options are valued at grant date using an option model with expected life, expected volatility, and forfeiture adjustments; the expense is a real cost to shareholders, even though no cash is paid at grant.
- Equity in a levered firm is a call option on the firm's assets with strike equal to the debt; risky debt is risk-free debt minus a put, which explains risk shifting, credit spreads, and the equity value of distressed firms.
- Convertibles, callable bonds, warrants, and many contract clauses embed options; unbundling a hybrid security into its components is the first step in pricing it correctly.

## Review Questions

1. Define in-the-money, at-the-money, and out-of-the-money for calls and puts. Why does an at-the-money option still have value?
2. Compare the profit profiles of a protective put and a covered call. In what market views and risk positions would an investor choose each?
3. Derive put-call parity using two portfolios. How does the relationship change if the stock pays a dividend, or if the options are American?
4. Explain why the value of a European call on a non-dividend-paying stock is bounded below by max(0, S − Ke^(−rT)). Why should such a call not be exercised early?
5. In the binomial model, why do the true probabilities of an up- or down-move not appear in the option price? What do the risk-neutral probabilities represent?
6. What makes early exercise attractive for an American put? What features of the parameters increase the early exercise premium?
7. List the inputs of the Black-Scholes-Merton formula and explain how each affects a call's value. Why does the expected return on the stock not appear?
8. What is implied volatility, and what does a volatility smile tell us about the limitations of the model?
9. Describe delta, gamma, vega, and theta. Explain why a delta-hedged option seller has positive theta and negative gamma.
10. Explain, using the option view of the firm, why shareholders of a highly levered company may favor risky projects even if they have negative NPV. What contractual devices mitigate the problem?

## Problems

1. **Protective put.** An investor owns a stock bought at $42 and buys a put with strike $40 for a premium of $2.50. Compute the profit at expiry if the stock finishes at $30, $40, and $50, and find the maximum loss and the breakeven stock price.
2. **Put-call parity.** A non-dividend stock trades at $50. A one-year European call with strike $50 costs $6.20. The continuously compounded risk-free rate is 4 percent. What is the no-arbitrage price of the put with the same strike and maturity?
3. **One-period binomial.** A stock is at $80 and will be either $100 (u = 1.25) or $64 (d = 0.80) after one year. The gross risk-free rate is 1.03. Find the risk-neutral probability and the value of a European call with strike $85.
4. **Black-Scholes.** A non-dividend stock trades at $50, strike $50, one year to expiry, r = 5 percent, σ = 20 percent. Compute d₁, d₂, the call and put values, and verify parity.
5. **Delta hedge.** A trader has sold 5,000 calls (each on one share) with delta 0.55 and gamma 0.04. How many shares should be held to be delta neutral? If the stock then rises by $1.50, estimate the new delta and the share purchase needed to rebalance.
6. **Employee options.** A company grants 500,000 at-the-money options on stock worth $25 with an expected life of 4 years, expected volatility 40 percent, risk-free rate 3.5 percent, no dividends. Compute the value per option and, with 10 percent expected forfeitures and three-year straight-line vesting, the annual expense.
7. **Option view of equity.** A firm has assets of $200 million, zero-coupon debt with a face value of $150 million due in one year, asset volatility of 25 percent, and risk-free rate 3 percent. Compute the equity value, the value of the debt, and the debt's yield and credit spread.
8. **Straddle.** A trader buys a straddle on a stock with both strike $60, paying $3.50 for the call and $2.80 for the put. Find the breakeven prices and the profit if the stock finishes at $72 and $58.

### Answers to Selected Problems

1. Profit = (S_T − 42) + max(40 − S_T, 0) − 2.50. At $30: −12 + 10 − 2.50 = −4.50. At $40: −2 + 0 − 2.50 = −4.50. At $50: 8 − 2.50 = +5.50. Maximum loss $4.50 (for any S_T ≤ $40); breakeven S_T = 42 + 2.50 = $44.50.
2. Ke^(−rT) = 50 × e^(−0.04) = 50 × 0.960789 = 48.039. P = C − S + Ke^(−rT) = 6.20 − 50 + 48.039 = **$4.24**.
3. p = (1.03 − 0.80) / (1.25 − 0.80) = 0.23 / 0.45 = 0.5111. C_u = 100 − 85 = 15, C_d = 0. C = 0.5111 × 15 / 1.03 = **$7.44**. (Equivalent hedge ratio: Δ = 15 / (100 − 64) = 0.4167.)
4. d₁ = [0 + (0.05 + 0.02) × 1] / 0.20 = **0.35**; d₂ = **0.15**. N(0.35) = 0.6368, N(0.15) = 0.5596. PV of strike = 50 × e^(−0.05) = 47.561. C = 50 × 0.6368 − 47.561 × 0.5596 = 31.84 − 26.62 = **$5.23**. P = 47.561 × (1 − 0.5596) − 50 × (1 − 0.6368) = 20.95 − 18.16 = **$2.79**. Parity: C − P = 2.44 = 50 − 47.56 = 2.44 ✓.
5. Shares = 5,000 × 0.55 = 2,750. New delta ≈ 0.55 + 0.04 × 1.50 = 0.61; shares needed 5,000 × 0.61 = 3,050; buy **300** more.
6. d₁ = (0.035 + 0.08) × 4 / (0.40 × 2) = 0.46 / 0.80 = 0.575; d₂ = −0.225. N(d₁) = 0.7173, N(d₂) = 0.4110. PV of strike = 25 × e^(−0.14) = 21.735. C = 25 × 0.7173 − 21.735 × 0.4110 = 17.93 − 8.93 = **about $9.00**. Vesting options 450,000 × 9.00 = $4.05 million; expense **$1.35 million per year** for three years.
7. d₁ = [ln(200/150) + (0.03 + 0.03125)] / 0.25 = (0.287682 + 0.06125) / 0.25 = 1.3957; d₂ = 1.1457. N(d₁) = 0.9186, N(d₂) = 0.8741. PV of debt face = 150 × e^(−0.03) = 145.57. E = 200 × 0.9186 − 145.57 × 0.8741 = 183.72 − 127.24 = **about $56.5 million**. Debt value = **$143.5 million**; yield = ln(150 / 143.5) = 4.42 percent; spread ≈ **1.42 percent**.
8. Cost = 6.30, so breakeven prices are 60 − 6.30 = **$53.70** and 60 + 6.30 = **$66.30**. At $72: call 12 − 3.50 = 8.50, put −2.80, profit **$5.70**. At $58: put 2 − 2.80 = −0.80, call −3.50, loss **$1.60**.
