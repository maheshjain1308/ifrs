# Chapter 7: Interest-Rate Models and Rate Derivatives

## Learning Objectives

After completing this chapter you should be able to:

- Construct a discount curve from deposit and par swap quotes by bootstrapping, and convert freely among discount factors, zero rates, and forward rates.
- Price caplets, caps, floorlets, floors, and European swaptions with Black-76, interpret the inputs (forward rate, strike, volatility, annuity), and verify put-call parity.
- Explain how short-rate models (Ho-Lee, Vasicek, Cox-Ingersoll-Ross) generate a term structure, and state what each model gets right and wrong, including mean reversion, negative rates, and fit to today's curve.
- Compute zero-coupon bond prices in closed form under Vasicek and CIR and check them against a Monte Carlo simulation.
- Design and evaluate a hedge for a floating-rate liability portfolio using swaps, caps, and collars, including DV01 matching, cash-flow certainty, and the accounting and liquidity consequences of each choice.
- Recognize the main model risks (volatility smile, curve construction choices, negative rates, discounting conventions) and describe what a CFO or treasurer should ask of a quant team.

## Opening Vignette

*Illustrative scenario: Harbor Ridge Logistics is a fictional company.*

Harbor Ridge Logistics, a regional freight and warehousing operator, financed a three-year fleet and depot expansion with a $300 million five-year term loan priced at the overnight benchmark rate plus 150 basis points, reset annually. When the loan was signed, the benchmark was near 3 percent and the CFO, Maria Okonkwo, treated the floating rate as a fair price for flexibility: the company expected to prepay part of the loan from asset sales within three years.

Eighteen months later the benchmark has climbed and the forward curve slopes upward. The board's audit committee asks three questions at the quarterly meeting. First, how much would annual interest cost rise if rates moved another 100 basis points? (Answer: $3 million per year for every 100 basis points while the full loan is outstanding, which is material against free cash flow of $22 million.) Second, what would it cost to buy a ceiling on the rate, and how does that compare with locking in a fixed rate through a swap? Third, what does it mean when the bank says that "the swap is worth a few million dollars against us" after rates rose, given that no cash changed hands on day one?

The treasury team has quotes from two banks. Bank A offers a five-year pay-fixed swap at a rate that, once the CFO checks the curve, matches the average of forward rates; Bank B quotes a five-year cap at a strike of 4.5 percent for a premium of about 2.2 percent of notional. The CFO's real task is not to choose between them by instinct. It is to understand how those quotes are built from a discount curve and a volatility assumption, so that she can tell whether the premium is fair, what the hedge leaves unhedged, and how the position will behave if the curve shifts, twists, or if volatility changes.

This chapter gives you the machinery behind those quotes: how curves are built, how Black-76 values caps and swaptions, what short-rate models say about the dynamics of rates, and how to turn all of it into a hedging decision for a floating-rate liability book. Volume 1, Chapter 4 introduced bond pricing and the term structure; Chapter 19 introduced swaps and hedging. Here we go one level deeper.

## 7.1 The Term Structure: Discount Factors, Zero Rates, and Forwards

### 7.1.1 Three equivalent descriptions

Everything in fixed-income pricing starts from one object: the *discount function* P(0,T), the price today of a risk-free zero-coupon bond paying 1 at time T. Given the discount function, every other quantity is a transformation of it.

```
Discount factor:         P(0,T)
Zero rate (annual comp): z(T) = P(0,T)^(-1/T) − 1
Zero rate (continuous):  y(T) = −ln P(0,T) / T
Forward rate (annual):   F(T1,T2) = [P(0,T1) / P(0,T2) − 1] / (T2 − T1)
Instantaneous forward:   f(0,T) = −∂ ln P(0,T) / ∂T
```

The forward rate F(T1,T2) is the rate that can be locked in today for borrowing or lending between T1 and T2, because it is implied by no-arbitrage. To see this, suppose you buy one unit of the T1-maturity bond and finance it by shorting P(0,T1)/P(0,T2) units of the T2-maturity bond. Net cost today is zero. At T1 you receive 1; at T2 you pay P(0,T1)/P(0,T2). The gross return over (T1,T2) is therefore P(0,T1)/P(0,T2) per unit invested, which is exactly 1 + F·(T2−T1). The forward rate is not a forecast; it is a price. Statements such as "the forward curve predicts that rates will rise" are loose. A forward rate is the break-even rate at which a locked-in forward loan is neither a gain nor a loss, which blends expected future rates with a risk premium and convexity effects.

The yield on a coupon bond is a weighted average of zero rates; the zero rate is a geometric average of one-period forward rates:

```
(1 + z(T))^T = (1 + F(0,1)) × (1 + F(1,2)) × … × (1 + F(T−1,T))
```

Hence an upward-sloping zero curve implies forwards that lie above the zero rates, and an inverted curve implies forwards below. This identity is the most useful mental check you can apply to any quoted curve.

### 7.1.2 Why a single "interest rate" is never enough

Many corporate models use one discount rate for all cash flows. That is acceptable for a rough NPV (Volume 1, Chapter 6), but it fails for any instrument whose payoff depends on the timing of rates: a floating-rate loan, a callable bond, or an interest-rate swap. In a swap the fixed leg is discounted at zero rates for each payment date, and the floating leg's expected payments are the forward rates. Using one rate throughout would price the swap incorrectly whenever the curve is not flat.

The market also uses different curves for different purposes. After the global financial crisis, practitioners separated the curve used to *project* floating payments from the curve used to *discount* collateralized derivatives. Today most derivatives are discounted on the overnight risk-free benchmark curve and projected on the benchmark curve appropriate to the floating index. For clarity this chapter uses a single-curve world in which projection and discounting use the same curve, and we note where multi-curve practice changes things (Section 7.7).

### 7.1.3 Bootstrapping a curve

Market quotes arrive as a mixture of instruments: overnight and short deposits, futures, and par swap rates for tenors out to thirty years or more. A *par swap rate* S(n) is the fixed rate for which an n-year swap has zero value at initiation. For an annual-pay swap, par means that the PV of the fixed leg equals the PV of the floating leg, and the floating leg of a par swap is worth 1 − P(0,n). Hence:

```
S(n) × Σ(k=1..n) P(0,k) = 1 − P(0,n)
```

Solving for the final discount factor given the earlier ones:

```
P(0,n) = [1 − S(n) × Σ(k=1..n−1) P(0,k)] / [1 + S(n)]
```

This recursion is *bootstrapping*: start with the shortest instrument, solve for its discount factor, move to the next, and so on. The result is a set of discount factors that reprices every input exactly.

**Example 7.1 – Bootstrapping an annual curve from par swap rates.**
A treasury desk observes the following annual-pay par swap rates:

| Tenor (years) | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Par swap rate | 3.00% | 3.40% | 3.70% | 3.90% | 4.05% |

Step 1. With one year only, P(0,1) = 1 / (1 + 0.0300) = 0.970874.

Step 2. For n = 2: P(0,2) = [1 − 0.0340 × 0.970874] / 1.0340 = (1 − 0.033010) / 1.0340 = 0.966990 / 1.0340 = 0.935194.

Step 3. For n = 3: the sum of earlier factors is 0.970874 + 0.935194 = 1.906068. P(0,3) = [1 − 0.0370 × 1.906068] / 1.0370 = (1 − 0.070525) / 1.0370 = 0.929475 / 1.0370 = 0.896312.

Step 4. For n = 4: the sum is 1.906068 + 0.896312 = 2.802380. P(0,4) = [1 − 0.0390 × 2.802380] / 1.0390 = (1 − 0.109293) / 1.0390 = 0.890707 / 1.0390 = 0.857274.

Step 5. For n = 5: the sum is 2.802380 + 0.857274 = 3.659654. P(0,5) = [1 − 0.0405 × 3.659654] / 1.0405 = (1 − 0.148216) / 1.0405 = 0.851784 / 1.0405 = 0.818630.

Check: (1 − 0.818630) / (0.970874 + 0.935194 + 0.896312 + 0.857274 + 0.818630) = 0.181370 / 4.478284 = 4.050%, which reproduces the input.

The resulting curve:

| Maturity | Discount factor | Zero rate (annual) | Zero rate (cont.) | 1-year forward starting at T−1 |
|---|---|---|---|---|
| 1 | 0.970874 | 3.000% | 2.956% | 3.000% |
| 2 | 0.935194 | 3.407% | 3.350% | 3.815% |
| 3 | 0.896312 | 3.716% | 3.649% | 4.338% |
| 4 | 0.857274 | 3.925% | 3.850% | 4.554% |
| 5 | 0.818630 | 4.084% | 4.003% | 4.721% |

Notice that the par rates rise with tenor, the zero rates rise faster than par rates, and the forwards rise faster still. The five-year par rate of 4.05 percent is a weighted average of the five forwards (3.00, 3.82, 4.34, 4.55, 4.72), weighted by the discount factors. That is the sense in which a swap "locks in the average of the forwards."

### 7.1.4 Interpolation and the problem of gaps

Real markets quote swaps only at selected tenors (1, 2, 3, 4, 5, 7, 10, 15, 20, 30 years). Discount factors between nodes require an interpolation rule, and the rule matters for forwards, which are derivatives of the curve. Linear interpolation of zero rates produces forwards that jump at the nodes. Linear interpolation of the logarithm of discount factors gives piecewise constant instantaneous forwards, which is stable and arbitrage-free but not smooth. Cubic splines and monotone convex methods give smoother forwards but can overshoot between nodes and produce negative forwards when the data are noisy. Desks choose a method for stability of hedge ratios as well as for fit. The managerial implication is simple: *bucketed risk numbers depend on the curve-building convention*, so a treasury should ask the dealer which convention underlies the risk report and keep it constant over time.

### 7.1.5 Common mistakes

- *Mixing compounding conventions.* A 4 percent annual-compounded rate and a 4 percent continuously compounded rate differ by 8 basis points. Always state the convention.
- *Treating forwards as forecasts.* In Example 7.1, the forward rate for year five is 4.72 percent. This is the price at which the market clears a forward loan today; the realized rate may differ substantially.
- *Using a par yield as a zero rate.* A five-year par swap rate of 4.05 percent is not the five-year zero rate of 4.08 percent. The difference grows with the steepness of the curve.
- *Ignoring day counts.* An actual/360 floating leg and a 30/360 fixed leg do not have identical accrual fractions. Our examples use annual periods of exactly one year for clarity; production systems do not.

## 7.2 Interest-Rate Derivatives: The Product Map

Before turning to valuation it helps to organize the instruments a corporate treasury meets. All are combinations of two building blocks: *forward-rate agreements* (linear payoffs on a forward rate) and *options on forward rates* (convex payoffs).

| Instrument | Payoff on each date (notional N, accrual τ) | Typical corporate use |
|---|---|---|
| Forward-rate agreement (FRA) | N·τ·(L − K) / (1 + L·τ), paid at start of period | Lock one future reset |
| Interest-rate swap (pay fixed) | N·τ·(L − K) at each date, L = floating rate | Convert floating debt to fixed |
| Cap (strip of caplets) | N·τ·max(L − K, 0) | Ceiling on floating cost; keep downside benefit |
| Floor (strip of floorlets) | N·τ·max(K − L, 0) | Protect floating-rate income, or sell to fund a cap |
| Collar | Long cap, short floor | Cheap corridor for cost |
| European payer swaption | Option to enter a pay-fixed swap at K | Hedge a *contingent* borrowing or a callable-bond position |
| European receiver swaption | Option to enter a receive-fixed swap at K | Hedge a prepayment or call option embedded in assets |

A swap is a portfolio of FRAs, one for each reset date, all struck at the same fixed rate. A cap is a portfolio of European call options on forward rates (caplets); a floor is a portfolio of puts. Their relationship is the interest-rate analogue of put-call parity: **long cap − long floor = pay-fixed swap** (with the same strike and dates), because for each period max(L − K, 0) − max(K − L, 0) = L − K.

Two details deserve emphasis. First, in the standard convention the caplet's rate L is set at the *start* of the accrual period and the payment is made at the *end*. This "set in advance, paid in arrears" structure is what makes the Black-76 formula, discussed next, so clean. Second, the first period of a cap normally has no optionality, because the rate is already known, and is excluded from the cap; our examples follow that convention.

## 7.3 Pricing Caps and Floors with Black-76

### 7.3.1 The Black-76 model for a forward rate

In 1976 Fischer Black showed how to price options on forward and futures prices by assuming the forward is lognormally distributed. The same idea applies to forward interest rates. Fix a caplet that pays at time T+τ the amount N·τ·max(L(T) − K, 0), where L(T) is the rate observed at T for the period (T, T+τ). Let F be today's forward rate for that period. Under the measure in which the T+τ-maturity zero-coupon bond is the numeraire (the "forward measure"), F is a martingale. Assume it is lognormal with volatility σ:

```
dF / F = σ dW   (under the T+τ forward measure)
```

Then the caplet price is the discounted expected payoff:

```
Caplet = N × τ × P(0, T+τ) × [ F·Φ(d1) − K·Φ(d2) ]
Floorlet = N × τ × P(0, T+τ) × [ K·Φ(−d2) − F·Φ(−d1) ]

d1 = [ ln(F/K) + ½σ²T ] / (σ√T)
d2 = d1 − σ√T
```

Φ is the standard normal cumulative distribution function. Several features of this formula should become reflexes:

1. **It has the Black-Scholes form** with the forward F replacing the spot grown at the risk-free rate, and the discount factor P(0,T+τ) replacing exp(−rT). There is no drift term: the forward already embeds the cost of carry. (Volume 1, Chapter 18 derived Black-Scholes; Black-76 is its forward-based sibling.)
2. **The volatility is the volatility of the forward rate, in proportional terms.** A "lognormal vol of 25 percent" at a forward of 4 percent means a standard deviation of roughly 1 percentage point per year in the rate. When rates are 0.5 percent, a 25 percent vol means 12 basis points, which is why markets quote *normal* (basis point) volatilities for low-rate currencies: Bachelier's normal model is the convention in such environments.
3. **T is the time to the rate fixing**, not to payment. Volatility accumulates until the rate is set.
4. **The payoff is paid at T+τ**, so discounting uses P(0,T+τ).

### 7.3.2 Caps as strips, and the vol you are quoted

A cap is the sum of its caplets. Quotes in the market are expressed in terms of a single *flat vol* for the entire cap, which is the same lognormal vol applied to every caplet so that the total matches the market price. Because caplets of different expiries trade at different vols in reality, the market also infers *spot* (caplet) volatilities by stripping. Therefore a treasurer who is told "the five-year cap is quoted at 25 percent vol" should recognize that this is one summary number for a strip with different forwards and different expiries, and that the same single number applied to a different strike would not reproduce that strike's price (the *volatility smile* or *skew*; see Section 7.7).

**Example 7.2 – Pricing a caplet and a floorlet.**
Using the curve of Example 7.1, price a caplet on a notional of 100 million that covers the year from t = 3 to t = 4, with strike K = 4.00 percent and flat volatility 25 percent.

Step 1. Forward rate: F = P(0,3)/P(0,4) − 1 = 0.896312 / 0.857274 − 1 = 4.5538%.

Step 2. Time to fixing T = 3, so σ√T = 0.25 × √3 = 0.25 × 1.732051 = 0.433013.

Step 3. ln(F/K) = ln(0.045538 / 0.04) = ln(1.13845) = 0.12967. Add ½σ²T = 0.5 × 0.0625 × 3 = 0.09375. Sum = 0.22342. d1 = 0.22342 / 0.433013 = 0.5160, and d2 = 0.5160 − 0.4330 = 0.0830 (0.0829 with unrounded inputs).

Step 4. Φ(d1) = Φ(0.5160) = 0.6971 and Φ(d2) = Φ(0.0829) = 0.5331.

Step 5. Caplet per unit notional = P(0,4) × τ × [F Φ(d1) − K Φ(d2)] = 0.857274 × 1 × [0.045538 × 0.6971 − 0.04 × 0.5331] = 0.857274 × [0.031744 − 0.021322] = 0.857274 × 0.010422 = 0.008933.

On 100 million notional, the caplet is worth **$893,300**.

Step 6. Floorlet = 0.857274 × [0.04 × Φ(−0.0829) − 0.045538 × Φ(−0.5160)] = 0.857274 × [0.04 × 0.4669 − 0.045538 × 0.3029] = 0.857274 × [0.018676 − 0.013794] = 0.004186 per unit, or **$418,600** on 100 million.

Step 7. Parity: caplet − floorlet = 0.008933 − 0.004186 = 0.004747. The forward swap-style value is P(0,4) × (F − K) = 0.857274 × (0.045538 − 0.04) = 0.004747. They agree.

The caplet is in the money on a forward basis (F exceeds K by 55 basis points), so its price is dominated by intrinsic value, 0.004747 per unit, plus time value of 0.004186, which equals the floorlet price. That decomposition (call = intrinsic forward value + put) is parity at work.

**Example 7.3 – Pricing a four-year cap on 300 million.**
Harbor Ridge wants a ceiling at 4.50 percent on its loan. The first reset (t = 0 to 1) is already known, so the cap contains four caplets, fixing at t = 1, 2, 3, 4. Use the Example 7.1 curve, a flat vol of 25 percent, and notional 300 million.

| Fixing T | Forward F(T,T+1) | d1 | d2 | Caplet (% of notional) |
|---|---|---|---|---|
| 1 | 3.815% | −0.5353 | −0.7853 | 0.1473% |
| 2 | 4.338% | 0.0731 | −0.2805 | 0.4861% |
| 3 | 4.554% | 0.2439 | −0.1891 | 0.6885% |
| 4 | 4.721% | 0.3457 | −0.1543 | 0.8387% |

To verify the third row: ln(0.045538 / 0.045) = 0.011883; ½σ²T = 0.09375; sum 0.105633; σ√T = 0.433013; d1 = 0.2439; d2 = 0.2439 − 0.4330 = −0.1891. Φ(0.2439) = 0.5963, Φ(−0.1891) = 0.4250. The caplet is 0.857274 × (0.045538 × 0.5963 − 0.045 × 0.4250) = 0.857274 × (0.027154 − 0.019125) = 0.857274 × 0.008029 = 0.006883, matching the table to rounding.

Sum of caplets: 0.1473% + 0.4861% + 0.6885% + 0.8387% = 2.1606% of notional. The cap premium is **$6.48 million** upfront. Expressed as a running cost, dividing by the sum of discount factors for the payment dates (P(0,2)+P(0,3)+P(0,4)+P(0,5) = 3.507410) gives about 61.6 basis points per year of notional over the four capped years.

Interpretation. If the cap's holder believes forward rates are unbiased, the cap is fairly priced. The decision to buy depends on whether the company values protection against the tail (financial distress costs, covenant headroom; Volume 1, Chapter 15) more than the $6.48 million premium. A cap on a $300 million loan costs about 62 basis points per annum. If Harbor Ridge's alternative is a swap with no upfront premium, the swap locks the cost; the cap pays only when rates exceed the strike.

### 7.3.3 What drives cap value

| Driver | Direction | Reason |
|---|---|---|
| Higher forward rates | Cap value up | Caplets become more in the money |
| Higher strike | Cap value down | Fewer states in which it pays |
| Higher vol | Cap value up | Convex payoff gains from dispersion; vega is positive |
| Longer maturity | Cap value up | More caplets and more time for vol to accumulate |
| Higher discount rates | Cap value down (small) | Discounting; but also shifts the forward upward, so net effect depends on whether you hold the forward fixed |

Vega deserves particular attention. For an at-the-money caplet with fixing T, vega per unit vol is approximately P(0,T+τ) τ F √T φ(d1), where φ is the standard normal density. At ATM, φ(0) = 0.3989. This is why long-dated caps carry large vega exposure: a one-point change in vol on a five-year cap moves its price more than a one-point change on a one-year cap. A buyer of a cap is long vega; a seller of a floor to finance the collar is short vega on the floor leg. A zero-cost collar is therefore nearly vega-neutral if the floor and cap are placed symmetrically around the forward.

### 7.3.4 Common mistakes

- *Using the zero rate rather than the forward as F.* The caplet depends on the forward for its own accrual period, not on the cap's tenor zero rate.
- *Using the payment date for T in the volatility term.* The relevant time is the fixing date.
- *Quoting one flat vol across different strikes.* A cap at 6 percent strike and a cap at 3 percent strike trade at different implied vols because the distribution of rates is not lognormal.
- *Forgetting that the premium is paid upfront.* A cap premium is an immediate cash outflow, with implications for liquidity and for hedge accounting (Section 7.6).

## 7.4 Swaptions and the Swap-Rate Version of Black

### 7.4.1 What a swaption is

A European *payer swaption* gives the holder the right, at expiry T_0, to enter a swap in which she pays fixed at strike K and receives floating over the following n years. A *receiver swaption* is the right to receive fixed. Payers rise in value as rates rise; receivers rise as rates fall. Swaptions are priced in the form "expiry × tenor," so a "2y×3y" swaption is a two-year option on a three-year swap.

For corporates, swaptions are useful in three situations. A company that has *committed to borrow* in the future (for instance, a bond issue or acquisition financing after board approval but before market launch) can buy a payer swaption to cap the cost of the fixed rate it will lock. A company with a *callable bond* has, in effect, sold a receiver swaption to itself: the right to retire fixed-rate debt when rates fall is an option to receive fixed (the old coupon) and pay floating (new borrowing). Finally, a company with prepayable *assets* such as mortgages or leases has effectively sold a receiver swaption to its customers.

### 7.4.2 Black's swaption formula

Define the forward swap rate S as the fixed rate that makes the forward-starting swap worth zero, and the *annuity* (or PV01) A as the PV of receiving 1 per period during the swap's life:

```
A = Σ(i=1..n) τ_i × P(0, T_i)
S = [ P(0,T_0) − P(0,T_n) ] / A
```

Under the *annuity measure*, where the annuity is the numeraire, S is a martingale. Assuming it is lognormal with volatility σ yields:

```
Payer swaption    = N × A × [ S·Φ(d1) − K·Φ(d2) ]
Receiver swaption = N × A × [ K·Φ(−d2) − S·Φ(−d1) ]

d1 = [ ln(S/K) + ½σ²T_0 ] / (σ√T_0),   d2 = d1 − σ√T_0
```

The structure is the same as for caplets, with the annuity A taking the place of τ × P(0,T+τ). Parity: payer − receiver = N × A × (S − K), the value of a forward-starting swap.

**Example 7.4 – A 2y×3y payer swaption.**
A company expects to issue three-year floating-rate debt two years from now and wants to protect against a rise in the swap rate. Use the Example 7.1 curve; the underlying swap has annual payments at t = 3, 4, 5; strike K = 4.50 percent; flat swaption vol 22 percent; notional 100 million.

Step 1. Annuity: A = P(0,3) + P(0,4) + P(0,5) = 0.896312 + 0.857274 + 0.818630 = 2.572216.

Step 2. Forward swap rate: S = [P(0,2) − P(0,5)] / A = (0.935194 − 0.818630) / 2.572216 = 0.116564 / 2.572216 = 4.5317%.

Step 3. σ√T_0 = 0.22 × √2 = 0.22 × 1.414214 = 0.311127. ln(S/K) = ln(0.045317 / 0.045) = ln(1.007044) = 0.007019. ½σ²T_0 = 0.5 × 0.0484 × 2 = 0.0484. d1 = (0.007019 + 0.0484) / 0.311127 = 0.17810. d2 = 0.17810 − 0.31113 = −0.13303.

Step 4. Φ(0.1781) = 0.5707; Φ(−0.1330) = 0.4471 (so Φ(d2) = 0.4471, Φ(−d2) = 0.5529, Φ(−d1) = 0.4293).

Step 5. Payer = 2.572216 × [0.045317 × 0.5707 − 0.045 × 0.4471] = 2.572216 × [0.025863 − 0.020120] = 2.572216 × 0.005743 = 0.014771 per unit notional, or **$1.477 million** on 100 million.

Step 6. Receiver = 2.572216 × [0.045 × 0.5529 − 0.045317 × 0.4293] = 2.572216 × [0.024881 − 0.019456] = 0.013956, or **$1.396 million**.

Step 7. Parity: 0.014771 − 0.013956 = 0.000815, and A × (S − K) = 2.572216 × 0.000317 = 0.000815.

Interpretation. The strike is only 3 basis points below the forward swap rate, so the swaption is nearly at the money and its price, about 1.48 percent of notional, is almost entirely time value. The break-even logic is useful: the payer starts to pay off in net terms when the swap rate in two years is higher than K plus the premium amortized over the annuity. The premium of 1.477 percent of notional, divided by the annuity 2.572, adds about 57 basis points per year to the effective strike on the three-year swap, so the effective locked rate is roughly 5.07 percent (ignoring financing of the premium).

### 7.4.3 Relationship between caps and swaptions

Caps and swaptions respond to different aspects of the volatility surface. A cap's value depends on the *individual forward-rate* vols, while a swaption's depends on the vol of a *swap rate*, which is a weighted average of forwards. If the forward rates were perfectly correlated, the swap rate vol would equal an appropriate average of caplet vols; because forwards are not perfectly correlated, swaption vols are lower than that average, and the gap reflects the *correlation* between forward rates. This is why a model that fits both caps and swaptions must have a rich correlation structure, and why the one- or two-factor short-rate models below can fit one market well and the other less well.

## 7.5 Short-Rate Models

### 7.5.1 Why model the short rate?

Black-76 prices one instrument at a time, taking the forward rate or swap rate and its volatility as given. It does not tell us how rates *evolve*, so it cannot price products whose payoffs depend on the path of rates or on early exercise (a Bermudan swaption, a callable bond, an amortizing swap with prepayments). For these we need a *dynamic model*. The simplest such family models only the instantaneous short rate r(t) as a stochastic process. In an arbitrage-free model, the price of a zero-coupon bond is the risk-neutral expectation of the discount factor along the path:

```
P(0,T) = E_Q[ exp( −∫₀ᵀ r(s) ds ) ]
```

Given a model for r, this expectation gives a term structure of prices, volatilities, and correlations as by-products. A good model should: (i) match the observed discount curve today; (ii) generate realistic volatility and mean reversion; (iii) avoid implausible outcomes such as large negative rates (or at least manage them); and (iv) be tractable enough to calibrate and hedge.

### 7.5.2 The Ho-Lee model

Thomas Ho and Sang-Bin Lee (1986) proposed the first arbitrage-free term-structure model. The short rate has a time-dependent drift and a constant volatility:

```
dr = θ(t) dt + σ dW
```

The function θ(t) is chosen so that the model reproduces *any* initial discount curve exactly. In continuous time, θ(t) = ∂f(0,t)/∂t + σ²t, where f(0,t) is the instantaneous forward curve. Two consequences follow. First, the expected short rate is E[r(t)] = f(0,t) + ½σ²t²: it follows the forward curve plus a small *convexity* term that grows with the square of time. Second, because there is no mean reversion, the variance of r(t) grows linearly in t without bound; long-dated rates can wander far from the current curve, and the model can generate large negative rates.

The upside is analytic tractability. Zero-coupon bond prices have the exact form

```
P(t,T) = [ P(0,T) / P(0,t) ] × exp( (T−t)·f(0,t) − ½σ²t(T−t)² − (T−t)·r(t) )
```

and European options on zero-coupon bonds have a Black-like closed form with bond-price volatility σ_P = σ (S − T) √T for an option expiring at T on a bond maturing at S. Also, Ho-Lee gives the classic *futures-forward convexity adjustment*: forward rates equal futures rates minus ½σ²t₁t₂ (the difference between daily-settled futures and forward contracts caused by the correlation between rates and the margin account's reinvestment).

**Example 7.5 – A Ho-Lee option on a bond and a convexity adjustment.**
Use the curve of Example 7.1 with σ = 1.00 percent per year. Price a one-year European call on a bond that has four years remaining at expiry (that is, a zero-coupon bond maturing at S = 5, option expiry T = 1), strike K = 0.84 per unit face.

Step 1. Inputs: P(0,1) = 0.970874 and P(0,5) = 0.818630. The forward price of the bond is P(0,5)/P(0,1) = 0.843189, slightly above the strike of 0.84.

Step 2. Bond-price volatility: σ_P = σ (S − T) √T = 0.01 × 4 × 1 = 0.0400.

Step 3. h = ln[ P(0,5) / (K × P(0,1)) ] / σ_P + σ_P / 2. The ratio is 0.818630 / (0.84 × 0.970874) = 0.818630 / 0.815534 = 1.003796; ln = 0.003789; divided by 0.04 = 0.09472; plus 0.02 gives h = 0.11472.

Step 4. Φ(h) = Φ(0.11472) = 0.5457; Φ(h − σ_P) = Φ(0.07472) = 0.5298.

Step 5. Call = P(0,5) Φ(h) − K P(0,1) Φ(h − σ_P) = 0.818630 × 0.5457 − 0.815534 × 0.5298 = 0.446721 − 0.432071 = 0.01464 per unit face, or $1.46 million per 100 million face.

Step 6. Put = K P(0,1) Φ(σ_P − h) − P(0,5) Φ(−h) = 0.815534 × 0.4702 − 0.818630 × 0.4543 = 0.383465 − 0.371917 = 0.01155.

Step 7. Check by parity: call − put = 0.01464 − 0.01155 = 0.00310, and P(0,5) − K P(0,1) = 0.818630 − 0.815534 = 0.00310.

Convexity adjustment. For a Eurodollar-style futures contract on a rate for the period from t₁ = 2 to t₂ = 2.25 years with Ho-Lee σ = 1 percent, the adjustment is ½σ²t₁t₂ = 0.5 × 0.0001 × 2 × 2.25 = 0.000225 = 2.25 basis points. For a ten-year strip, with t₁ = 9.75 and t₂ = 10, the same formula gives 0.5 × 0.0001 × 97.5 = 48.75 basis points, which shows why ignoring the adjustment in a long futures strip creates a bias in the bootstrapped curve.

The Ho-Lee model's shortcomings are the flip side of its tractability. Since all forward rates shift by the same random amount, the model implies perfectly correlated parallel moves, and it cannot fit a term structure of volatilities.

### 7.5.3 The Vasicek model

Oldřich Vasicek (1977) introduced *mean reversion* into a no-arbitrage term-structure model:

```
dr = a (b − r) dt + σ dW
```

Here a > 0 is the speed of mean reversion, b is the long-run mean level of the short rate, and σ is the volatility. When r exceeds b the drift is negative; when r lies below b the drift is positive. The half-life of a deviation is ln 2 / a; for a = 0.30 it is 2.3 years.

The short rate under Vasicek is Gaussian. Its long-run distribution is normal with mean b and standard deviation σ/√(2a); with a = 0.30 and σ = 1.2 percent, the stationary standard deviation is 1.2% / √0.6 = 1.55%. Because the distribution is normal, the model gives rates a small but positive probability of being negative: with b = 5% the probability is Φ(−5/1.55) = Φ(−3.23), about 0.06 percent in the long-run distribution. At low rate levels or for high σ, this becomes a serious feature, and was historically viewed as a defect. Since 2008, when several currencies experienced negative policy rates, it has been viewed as a feature.

Zero-coupon bond prices are known in closed form:

```
P(0,T) = A(T) × exp( −B(T) × r₀ )
B(T) = [ 1 − exp(−aT) ] / a
A(T) = exp{ ( b − σ²/(2a²) ) × [ B(T) − T ] − σ² B(T)² / (4a) }
```

The long-run continuous yield (as T → ∞) is b − σ²/(2a²) rather than b, because of a Jensen's-inequality adjustment that lowers long bond yields. Volatility of the T-year yield declines as maturity increases, as B(T)/T falls: mean reversion implies that long rates are less volatile than short rates, which matches the data, and which Ho-Lee cannot replicate.

**Example 7.6 – Vasicek term structure and a Monte Carlo check.**
Take a = 0.30, b = 5.00%, σ = 1.20%, r₀ = 3.00%. Compute P(0,5) and the continuous yields at several maturities, then verify with simulation.

Step 1. For T = 5: B = (1 − e^(−1.5)) / 0.30 = (1 − 0.223130) / 0.30 = 2.589566.

Step 2. The Jensen term: σ²/(2a²) = 0.000144 / 0.18 = 0.0008. So b − σ²/(2a²) = 0.0492. Then (0.0492)(B − T) = 0.0492 × (2.589566 − 5) = 0.0492 × (−2.410434) = −0.118594.

Step 3. σ²B²/(4a) = 0.000144 × 6.706 / 1.2 = 0.000805 (B² = 6.70594). A = exp(−0.118594 − 0.000805) = exp(−0.119399) = 0.887454.

Step 4. P(0,5) = A × exp(−B r₀) = 0.887454 × exp(−2.589566 × 0.03) = 0.887454 × exp(−0.077687) = 0.887454 × 0.925257 = 0.82112.

Step 5. Continuous yield = −ln(0.82112) / 5 = 0.19732 / 5 = 3.9417 percent.

Monte Carlo. Simulate dr = a (b − r) dt + σ √dt Z using the Euler scheme with 250 steps over five years and 200,000 paths, seed 42. Accumulate ∫ r dt as Σ r_i dt and average exp(−∫ r dt). The simulation (run in Python for this chapter) yields a mean of 0.82115 with a standard error of 0.00009, against the analytic 0.82112, a difference of about 0.3 standard errors.

| Maturity T | B(T) | A(T) | P(0,T) | Continuous yield |
|---|---|---|---|---|
| 1 | 0.8639 | 0.9932 | 0.96783 | 3.270% |
| 2 | 1.5040 | 0.9756 | 0.93258 | 3.490% |
| 5 | 2.5896 | 0.8875 | 0.82112 | 3.942% |
| 10 | 3.1674 | 0.7136 | 0.64896 | 4.324% |

The curve rises from the current 3 percent short rate toward the long-run 4.92 percent yield as mean reversion pulls the expected path upward. The slope of the curve is explained by the gap between r₀ and b; if r₀ exceeded b the curve would invert. This is a one-factor limitation: Vasicek's yield curve has a constrained shape set (rising, falling, or slightly humped), and the initial curve is an *output*, not an input. Fitting today's observed curve exactly requires extending the model with a time-dependent mean level, which leads to the Hull-White model.

### 7.5.4 The Cox-Ingersoll-Ross model

John Cox, Jonathan Ingersoll, and Stephen Ross (1985) addressed the negative-rate problem by making volatility proportional to the square root of the rate:

```
dr = a (b − r) dt + σ √r dW
```

As r approaches zero the diffusion term vanishes and the mean-reverting drift pushes r upward; if the *Feller condition* 2ab ≥ σ² holds, zero is never reached. The CIR short rate follows a non-central chi-square distribution and has a state-dependent volatility, which matches the empirical fact that rate volatility is higher when rates are higher. Zero-coupon bond prices remain closed-form:

```
γ = √(a² + 2σ²)
B(T) = 2(e^(γT) − 1) / [ 2γ + (a + γ)(e^(γT) − 1) ]
A(T) = { 2γ e^((a+γ)T/2) / [ 2γ + (a + γ)(e^(γT) − 1) ] }^(2ab/σ²)
P(0,T) = A(T) × exp( −B(T) × r₀ )
```

**Example 7.7 – CIR prices and the Feller condition.**
Take a = 0.30, b = 5.00%, σ = 7.00%, r₀ = 3.00%. First, the Feller condition: 2ab = 2 × 0.30 × 0.05 = 0.0300 and σ² = 0.0049. Since 0.0300 > 0.0049, the process never reaches zero.

Step 1. γ = √(0.09 + 2 × 0.0049) = √0.0998 = 0.31591.

Step 2. For T = 5, e^(γT) = e^1.57955 = 4.8528, so e^(γT) − 1 = 3.8528. The denominator is 2γ + (a+γ)(e^(γT)−1) = 0.63182 + 0.61591 × 3.8528 = 0.63182 + 2.37299 = 3.00481.

Step 3. B(5) = 2 × 3.8528 / 3.00481 = 2.5644.

Step 4. A(5) = [2γ × e^((a+γ)×5/2) / 3.00481]^(2ab/σ²). The exponent is 0.03 / 0.0049 = 6.1224. The inside term is 0.63182 × e^(1.53978) / 3.00481 = 0.63182 × 4.6636 / 3.00481 = 0.98061, and raising to 6.1224 gives A(5) = 0.88702 (checked in Python).

Step 5. P(0,5) = 0.88702 × exp(−2.5644 × 0.03) = 0.88702 × 0.92586 = 0.82134. The continuous yield is 3.9365 percent.

| Maturity T | Vasicek P(0,T) | CIR P(0,T) | Vasicek yield | CIR yield |
|---|---|---|---|---|
| 1 | 0.96783 | 0.96783 | 3.270% | 3.270% |
| 5 | 0.82112 | 0.82134 | 3.942% | 3.936% |
| 10 | 0.64896 | 0.64998 | 4.324% | 4.308% |

The two models produce nearly identical yield curves here because their parameters were chosen so that volatility at a rate of 5 percent is similar (σ√r = 0.07 × 0.2236 = 1.57 percent against Vasicek's flat 1.20 percent). The distinction between them appears in the tails: CIR has a fatter right tail, never goes below zero, and gives a lower yield at long maturities because of the stronger convexity effect when volatility rises with the rate.

### 7.5.5 Comparison, extensions, and fit to the curve

| Feature | Ho-Lee | Vasicek | CIR | Hull-White (extended Vasicek) |
|---|---|---|---|---|
| Dynamics | dr = θ(t)dt + σdW | dr = a(b−r)dt + σdW | dr = a(b−r)dt + σ√r dW | dr = [θ(t) − a r]dt + σdW |
| Mean reversion | No | Yes | Yes | Yes |
| Rates can be negative | Yes | Yes | No (Feller) | Yes |
| Fits today's curve exactly | Yes | No | No | Yes |
| Rate vol structure | Constant, absolute | Constant, absolute | Rises with level | Constant, absolute |
| Closed-form bond price | Yes | Yes | Yes | Yes |
| Typical use | Teaching, simple trees | Risk simulation, ALM | Insurers, positive-rate simulation | Bermudan swaptions, callable bonds |

Practitioners generally need to fit the *current* curve exactly, because a model that misprices today's bonds creates an arbitrage against the market on day one and contaminates hedge ratios. That is why Hull-White, which adds a time-dependent θ(t) to Vasicek to fit the curve and a mean-reversion parameter to control the volatility term structure, became a market standard for Bermudan swaptions and callable-bond valuation. Beyond one-factor models, the *Heath-Jarrow-Morton* framework models the entire forward curve; the *LIBOR (or forward) market model* (Brace-Gatarek-Musiela; Jamshidian) models discrete forward rates directly and is consistent with Black-76 for caps; and the *SABR* model of Hagan and co-authors provides a smile for caplet and swaption vols. These topics are beyond this chapter, but they all share the structure we have described: a no-arbitrage drift determined by volatility, and a calibration to liquid options.

### 7.5.6 Risk-neutral versus real-world models

One subtlety trips up even experienced practitioners: the models above are typically specified under the *risk-neutral measure* Q, which is correct for pricing. For *risk management* (value-at-risk, economic-capital calculations, stress tests of net interest income, Chapter 8) we need the *real-world measure* P, where rates have different drifts reflecting term premia. A Vasicek model calibrated to the cap market will not forecast the distribution of next year's rates well; a Vasicek model estimated from historical short-rate data will not price caps. A treasury or an insurer typically runs both: Q for valuation and P for scenario analysis, with a market-price-of-risk parameter linking them.

### 7.5.7 Common mistakes

- *Calibrating a model to the current curve using a single parameter set and then interpreting those parameters as forecasts.* A calibrated b is a risk-neutral mean, not an expected future policy rate.
- *Believing the "closed-form fit" implies the volatility structure is right.* Ho-Lee fits the curve but not the term structure of volatility.
- *Using too few Monte Carlo paths or time steps.* Euler discretization of CIR can produce negative rates unless a full-truncation or exact scheme is used.
- *Ignoring that the Feller condition is a property of calibrated parameters.* Calibrating CIR to market data often violates the condition, and many desks accept boundary hits with reflecting or absorbing conventions.

## 7.6 Hedging a Floating-Rate Liability Portfolio

### 7.6.1 Define the risk before choosing the instrument

A floating-rate liability has an unusual risk profile. Its *market value* barely moves when rates change, because the coupon resets to market (a floating-rate note resets to near par at each reset date), so a standard duration or DV01 on the liability is close to zero. Its *cash flows*, however, move one for one with the reference rate. The risk is therefore **cash-flow risk**: higher interest expense, lower coverage ratios, and in the extreme a covenant breach or a distress event. Conversely, a fixed-rate liability has market-value risk but no cash-flow risk. A treasurer must decide which of the two exposures the company actually cares about. A company with predictable operating cash flows that has board-set leverage and coverage covenants usually cares about cash-flow stability. An insurer or bank, whose assets and liabilities are both marked to economic value (Chapter 8), cares about value.

A clean sequence for the decision:

1. **Quantify the exposure.** Interest expense sensitivity: Notional × Δrate. For Harbor Ridge, 300 million × 1 percent = 3.0 million per year per 100 basis points on a flat-shift basis. Across five years, with the first reset already fixed, a persistent 100 basis point rise costs about 12 million (four years × 3 million).
2. **Link it to the objective.** Is the objective to protect interest coverage, a covenant, an earnings target, or a budget? Different objectives imply different strike levels and hedge ratios.
3. **Choose among linear and optional hedges.** A swap removes both the downside and the upside. A cap removes the downside and keeps the upside, at the cost of a premium. A collar sells part of the upside to pay for protection.
4. **Set the hedge ratio and tenor.** Many treasuries hedge 50 to 80 percent of expected debt, with a layered maturity ladder rather than a single point, to avoid locking in a single day's rate.
5. **Check accounting, liquidity, and counterparty consequences** (Section 7.6.4).

### 7.6.2 Swap, cap, and collar compared

**Example 7.8 – Comparing a swap, a cap, and a collar for Harbor Ridge.**
Harbor Ridge has a 300 million five-year loan at benchmark + 1.50 percent, reset annually. The year-one rate is already set at 3.00 percent (all-in 4.50 percent, or 13.5 million). Years two through five reset at the forward rates of Example 7.1 (3.815, 4.338, 4.554, 4.721 percent for the one-year periods starting at t = 1, 2, 3, 4, shifted in each scenario by a parallel move s).

*Strategy A, unhedged.* Interest cost = 13.5 + Σ 300 × (F_i + s + 1.5%) for the four resets.
*Strategy B, pay-fixed swap at 4.05 percent.* The swap exchanges the benchmark for 4.05 percent, so all-in cost is 4.05% + 1.50% = 5.55 percent each year: 300 × 5.55% = 16.65 million per year, 83.25 million over five years, in every scenario.
*Strategy C, cap at 4.50 percent (premium 6.48 million from Example 7.3).* Interest cost = unhedged cost − cap payoffs + premium.
*Strategy D, collar:* buy the 4.50 percent cap, sell a 3.50 percent floor. Using the same flat vol of 25 percent, the four-year floor at 3.50 percent is worth 0.9373 percent of notional, or 2.81 million, so the net premium is 6.48 − 2.81 = 3.67 million. Cost = unhedged − cap payoffs + floor payments owed + 3.67 million.

For the cap and floor payoffs, we use the shifted forward rates as the realized benchmark and ignore discounting of payments for transparency (the figures below are undiscounted five-year totals in millions of dollars):

| Parallel shift s | Unhedged | Swap | Cap (4.5%) | Collar (4.5% / 3.5%) |
|---|---|---|---|---|
| −2.00% | 59.78 | 83.25 | 66.27 | 77.17 |
| −1.00% | 71.78 | 83.25 | 78.27 | 77.99 |
| 0.00% | 83.78 | 83.25 | 89.44 | 86.63 |
| +1.00% | 95.78 | 83.25 | 91.98 | 89.17 |
| +2.00% | 107.78 | 83.25 | 91.98 | 89.17 |

To verify one cell, take s = +1.00 percent. Shifted forwards are 4.815, 5.338, 5.554, 5.721 percent. Cap payoffs are 300 × (0.315%, 0.838%, 1.054%, 1.221%) = 0.946, 2.514, 3.161, 3.662 million, total 10.283 million. Unhedged cost is 13.5 + 300 × (6.315% + 6.838% + 7.054% + 7.221%) = 13.5 + 300 × 0.27428 = 13.5 + 82.283 = 95.783 million. The cap strategy costs 95.783 − 10.283 + 6.482 = 91.982 million. The ceiling is visible: for years two to five the cap limits the all-in rate to 4.50% + 1.50% = 6.00 percent, which costs 300 × 6.00% × 4 = 72.0 million, plus 13.5 million in year one and 6.48 million of premium: 91.98 million.

Interpretation:

- The swap delivers certainty at a cost of 83.25 million. It is slightly cheaper than the unhedged forward-implied cost of 83.78 million in the base case (the difference of 0.53 million arises because the first period's known rate is 3.00 percent, below the swap's 4.05 percent fixed rate, while the swap's par rate averages all five forwards). It loses badly if rates fall: at −2 percent it costs 23 million more than doing nothing.
- The cap is the "insurance" strategy. It costs about 5.7 million more than the unhedged base case, caps the worst outcome near 92 million, and retains most of the benefit of lower rates (66.27 million in the −2 percent case).
- The collar cuts the premium but gives up the gain from rate declines below 3.50 percent. At s = −2 percent the collar costs 77.17 million, 10.9 million more than the cap strategy.

Choosing among these is a decision about *risk preferences and distress costs*, not about which is "cheapest." If the swap was priced fairly, it has zero expected value under the forward measure, and so does every fairly priced option; a manager adds value only to the extent that hedging reduces expected costs of financial distress, taxes, or underinvestment (the Volume 1, Chapter 19 rationale for hedging), or if the firm has a view that is not already in the curve. The honest case for a cap is that the firm's *marginal cost of a rate shock is convex*: a 200-basis-point rise may breach a covenant, while a 100-basis-point rise would not. The honest case for a swap is that the firm values certainty for budgeting.

**Mark-to-market of the swap.** After entering the swap, the fixed rate is frozen at 4.05 percent. If par swap rates rise by 50 basis points in parallel, the five-year par rate becomes 4.55 percent, and the new annuity (recomputed from the shifted curve) is 4.4157. The payer swap is then worth (4.55% − 4.05%) × 4.4157 × 300 million = 0.005 × 4.4157 × 300 million = **6.62 million** in the company's favor. At inception the DV01, the change in swap value per 1 basis point, was 300 million × 4.4783 × 0.0001 = **$134,348**; after the shift, a slightly lower DV01 reflects the decline in the annuity. It is this mark-to-market, not a cash payment, that a bank means when it says the swap "is worth" a few million dollars. Such a gain is an economic offset to the higher interest expense. The swap loss in the reverse scenario would be a liquidity concern if the swap were collateralized, because the company would have to post cash (Section 7.6.4).

### 7.6.3 Portfolios: hedging by bucket, not by headline notional

Real floating-rate liabilities are not a single bullet loan. A portfolio typically includes revolving credit lines, term loans of different maturities, receivables-securitization funding, and floating-rate notes. The hedge must respect the *timing profile* of exposure, which is why practitioners compute *bucketed* DV01s: the sensitivity of the hedged position to a one-basis-point change in the swap rate for each tenor.

**Example 7.9 – Matching a two-tranche floating-rate portfolio with swaps.**
Suppose that instead of one 300 million five-year loan, Harbor Ridge has two floating-rate tranches: 120 million that matures in two years and 180 million that matures in five years. The treasurer proposes to hedge 100 percent with two pay-fixed swaps at par: a two-year swap on 120 million at 3.40 percent and a five-year swap on 180 million at 4.05 percent (Example 7.1 rates). (For simplicity ignore the credit spread, which stays floating.)

Step 1. Annuities: A₂ = P(0,1) + P(0,2) = 0.970874 + 0.935194 = 1.906068, and A₅ = 4.478283 (from Example 7.1).

Step 2. DV01 (in dollars per basis point): swap 1: 120,000,000 × 1.906068 × 0.0001 = $22,873. Swap 2: 180,000,000 × 4.478283 × 0.0001 = $80,609. Total = $103,482 per basis point.

Step 3. Annual fixed payments: for years 1 and 2, 120 × 3.40% + 180 × 4.05% = 4.08 + 7.29 = 11.37 million; for years 3, 4, 5: 7.29 million. Add the credit spread of 1.50 percent on the outstanding principal (4.5 million in years 1–2 on 300 million; 2.7 million in years 3–5 on 180 million) to obtain all-in cost: 15.87 million in years 1–2 and 9.99 million in years 3–5.

Step 4. Blended fixed rate on the amortizing profile. Weighted by the PV of notional-weighted exposure, the portfolio's blended swap rate is (120 × 1.906068 × 3.40% + 180 × 4.478283 × 4.05%) / (120 × 1.906068 + 180 × 4.478283) = (7.7769 + 32.6454) / (228.728 + 806.091) = 40.4223 / 1034.819 = **3.906%**.

Step 5. Comparison with a naïve alternative: a single five-year swap on 300 million would hedge 300 million in years 3–5 even though only 180 million will still be outstanding. In years 3 to 5, Harbor Ridge would be *over-hedged* by 120 million, so a fall in rates would produce swap losses without any offsetting interest savings: a speculative position. The over-hedge costs 120 million × 1 percent = 1.2 million per year for each 100 basis points fall in rates.

The lesson: *a hedge ratio is a vector, not a scalar*. The notional profile of hedges must follow the debt amortization profile, and prepayment optionality must be considered: when the company has the right to repay debt early, a swap does not terminate automatically, and the company is left with a speculative position. In Volume 1, Chapter 19's language, the hedge is an *integral* part of the risk-management policy, not a separate trade. A *cancelable* or *extendable* swap, or a swaption, can be used when repayment timing is genuinely uncertain, but those embedded options cost money (Section 7.4).

### 7.6.4 Practical issues: accounting, liquidity, basis, and counterparty risk

*Hedge accounting.* Under IFRS 9 and US GAAP (ASC 815) a pay-fixed swap that converts floating-rate debt into synthetic fixed-rate debt can be designated a *cash flow hedge*. Fair-value changes on the effective portion go to other comprehensive income and are recycled into profit or loss as the hedged interest is incurred, which matches the swap result with the interest expense in the same period. Without designation, swap fair-value changes go through earnings and create volatility of reported profit that is the opposite of what the hedge intended. A cap's time value is treated differently from its intrinsic value under IFRS 9 (time value may be accounted for as a cost of hedging), which is why cap-based hedges may produce smoother earnings than they would under older rules. Treasury should align the hedge's critical terms (notional, reset dates, index) to the hedged debt to keep the hedge effective.

*Liquidity and margin.* A swap is a linear, two-sided contract. If rates fall, the swap has negative value and, if cleared or collateralized, requires margin. A cap bought for a premium has limited downside: the premium has been paid and no margin is ever posted by the buyer. A company with thin liquidity may prefer the cap for this reason alone, even if the swap is cheaper in expected terms.

*Basis risk.* The debt may reference a bank-specific rate, term-benchmark rate, or overnight index averaged in arrears, while the hedge references a different index or reset convention. The mismatch leaves residual cost-of-funds risk. Credit spreads on the loan also stay floating unless separately fixed.

*Counterparty and credit-valuation adjustments.* An uncollateralized swap that is in the company's favor creates exposure to the bank. Banks price this through a *credit valuation adjustment (CVA)* that raises the fixed rate they charge, and corporates are charged *funding valuation adjustments* in some jurisdictions. For a typical interest-rate swap the adjustment is a few basis points but can be much larger for long tenors and weak counterparties.

### 7.6.5 A short checklist for the CFO

| Question | Why it matters |
|---|---|
| What is the cash-flow-at-risk for a 100 bp move, by year? | Sizes the hedge need; ties to coverage covenants |
| Is the hedge notional profile aligned with debt amortization and prepayment plans? | Avoids over-hedging and speculative residual positions |
| Which curve and vol surface did the bank use for the quote? | Lets you test whether the premium is reasonable |
| What is the all-in cost relative to the forward-implied cost? | Isolates the dealer margin and CVA |
| What are the margin and collateral terms? | Determines liquidity risk under adverse rate moves |
| Will the hedge qualify for hedge accounting? | Determines whether earnings are smoother or noisier |

## 7.7 Model Risk and Market Practice

### 7.7.1 Smile, skew, and the normal model

Black-76 assumes lognormal forward rates, which implies that the implied volatility of a cap or swaption is the same for every strike. In practice, implied vols vary with strike (the *smile*). When rates were high in earlier decades, the pattern was typically a downward-sloping skew in lognormal vol: out-of-the-money floors (low strike) traded at higher lognormal vol than caps. When rates fell near zero, lognormal vols exploded because the same dollar volatility divided by a tiny forward rate gives a huge percentage vol; markets then adopted the *normal* (Bachelier) convention, which treats basis point volatility as the parameter and allows negative forwards. The SABR model and its shifted-lognormal variants are the typical interpolation tools. For a treasurer the practical message is: the strike you choose changes the vol you pay. A deeply out-of-the-money cap can be much more or much less expensive than a flat-vol Black calculation suggests.

### 7.7.2 Multi-curve pricing and discounting

Since 2008 the market has recognized that the rate at which a bank can borrow for three months is not the same as the overnight risk-free rate, and that collateralized derivatives are discounted at the collateral rate. The practical result is a set of curves: a discount curve built from overnight swaps, and projection curves for each floating index. The pricing formulas in this chapter remain valid with forwards F read from the projection curve and discount factors P read from the discount curve. A common error is to compute F from the discount curve and thereby misprice caplets by a few percent.

### 7.7.3 Calibration and what to ask the quant team

Calibration means choosing model parameters so that model prices match market prices of selected instruments. The more parameters, the closer the fit, and the greater the risk of overfitting. A short list of questions for a quant or risk team:

- Which instruments are used in calibration, and which are priced out-of-sample?
- How stable are parameters from day to day? Unstable parameters produce unstable hedge ratios.
- How do prices change if we change the model (Hull-White versus a market model) but calibrate to the same instruments? The *model reserve* is the answer.
- Does the model permit negative rates, and is that consistent with the current market?
- How does the model price the product we are hedging (for example, a callable bond) *relative to* the hedge instrument, and what residual risk remains?

### 7.7.4 Managerial summary

Short-rate models and Black-76 are not forecasting tools. They are consistent frameworks for translating market prices into other prices, and for showing how different hedges respond to changes in the curve. The CFO who understands that a cap premium reflects a volatility assumption, that a swap is a weighted average of forwards, and that a hedge must follow the debt's amortization profile can make decisions with the same rigor as an investment decision in Volume 1, Chapter 6.

## Case Study

**Northgate Dairy Cooperative: Refinancing in a Rising-Rate World**

*Illustrative case; Northgate Dairy Cooperative is fictional.*

Northgate Dairy Cooperative is owned by 1,400 farms and operates six processing plants. Over the past decade it has invested heavily in automated milk-powder and cheese facilities, financed through a mix of retained surplus, member capital, and floating-rate bank debt. Today the co-operative has $540 million of borrowings: a $250 million term loan maturing in four years (benchmark + 1.75 percent, reset every six months), a $180 million revolving facility that averages $140 million drawn (benchmark + 1.40 percent, reset monthly), and $150 million of seasonal working-capital lines used heavily between March and September.

The finance director, Samuel Achterberg, presents the situation to the board. Earnings before interest and tax were $96 million last year. Interest cover, measured as EBIT divided by net interest, was 5.1 times. The loan covenants require a minimum cover of 3.0 times and a maximum net-debt-to-EBITDA of 3.5 times (currently 2.7 times). The benchmark rate has risen 250 basis points in two years. The five-year par swap rate is 4.60 percent, the one-year benchmark rate is 4.20 percent, and the forward curve is mildly inverted beyond year three, which suggests the market expects rate cuts eventually. Implied lognormal volatility on five-year caps struck at 5.00 percent is about 30 percent.

Two board factions have emerged. One group, led by a farmer-director, wants to hedge nothing: "we have always run floating and the curve says rates will fall." Another group wants to swap the entire term loan and revolver to fixed to protect the members' milk payout from interest shocks. The treasury team has indicated that the revolver's drawn amount swings seasonally, by up to $100 million, and that the cooperative plans to repay $60 million of the term loan from the sale of a distribution depot in eighteen months.

Samuel asks the treasury team to model four strategies for the next four years: no hedge; swap 70 percent of the term loan for four years; buy a four-year cap at 5.50 percent on $250 million; or a collar with cap 5.50 percent and floor 3.75 percent. The quoted cap costs 1.9 percent of notional upfront. A zero-cost collar would require a floor strike of 4.10 percent. The bank warns that the swap would require a credit support annex under which the cooperative would post cash if the mark-to-market falls below minus $8 million, and the cooperative's cash balance is $35 million, much of it needed for the seasonal borrowing peak.

Stress analysis shows that a 200 basis point rise would raise annual interest cost by $5 million on the term loan and $2.8 million on the average revolver balance, and would cut cover to 3.6 times. A 300 basis point rise would push cover to 3.2 times. The hedging committee is also uncomfortable with the accounting: if the depot sale occurs as planned, a swap on 70 percent of the loan will exceed the remaining debt in two scenarios, and the cooperative could face an ineffective hedge.

**Discussion questions**

1. Using the forward curve described, explain why "the curve says rates will fall" is not a valid argument for leaving the position unhedged, and describe what the curve does and does not tell the board.
2. Compare the four strategies on cash-flow protection, expected cost, liquidity risk (note the CSA threshold), accounting treatment, and the effect of the planned $60 million prepayment. Which would you recommend, and at what hedge ratio?
3. The cap costs 1.9 percent of $250 million, which is $4.75 million. Explain how you would test whether this premium is reasonable, using Black-76 with the data given, and which inputs a dealer would need to supply.
4. How should the seasonal revolver be treated: hedge the average drawn amount, the minimum, or not at all? Propose a layered hedge that respects both the term loan's amortization and the revolver's seasonality.

## Key Takeaways

- A discount curve is the foundation: discount factors, zero rates, and forward rates are three views of the same information, and bootstrapping from par swap rates reprices every quoted instrument exactly.
- Forward rates are break-even prices for locking in future borrowing, not forecasts; a par swap rate is a discount-factor-weighted average of forward rates.
- A cap is a strip of caplets (calls on forward rates) and a floor is a strip of floorlets; long cap minus long floor equals a pay-fixed swap, which gives a parity check on any pricing.
- Black-76 prices caplets with the forward rate as the underlying, the fixing time in the volatility term, and the payment-date discount factor; swaptions use the forward swap rate and the annuity.
- Option value is driven by volatility; a long-dated cap has large vega, and flat vols hide the smile, so the strike you choose changes the vol you pay.
- Ho-Lee fits any curve but has no mean reversion; Vasicek adds mean reversion and closed-form bonds but permits negative rates and does not fit the curve; CIR keeps rates positive via square-root volatility; Hull-White combines curve fit with mean reversion.
- Models for pricing live under the risk-neutral measure; models for risk management and stress tests need real-world dynamics, and parameters from one cannot be used in the other without adjustment.
- A floating-rate liability has cash-flow risk rather than value risk; hedging should be sized to cash-flow-at-risk and covenants, with the hedge notional profile following debt amortization and prepayment.
- A swap provides certainty but exposes the company to mark-to-market and margin; a cap provides protection at a premium with no margin; a collar trades some of the upside for a lower premium.
- Practical hedging depends on accounting designation, collateral terms, basis risk, and counterparty adjustments, not just on pricing.

## Review Questions

1. Explain why a forward rate is not a forecast of the future spot rate. What other components might be embedded in it?
2. Derive the bootstrapping recursion for P(0,n) from the par swap equation. Why is the floating leg of a par swap worth 1 − P(0,n)?
3. Show using payoffs why long cap − long floor equals a pay-fixed swap with the same strike and dates.
4. In Black-76, why does volatility accumulate until the fixing date and not the payment date? Why is the discount factor taken to the payment date?
5. Why do markets quote normal (basis point) vols when rates are very low? What problem does a lognormal quote have in that environment?
6. A treasurer is quoted a 5 percent cap at 28 percent vol and a 3 percent cap at 28 percent vol. Why might both quotes be wrong or inconsistent with the smile?
7. Contrast the Ho-Lee and Vasicek models in terms of mean reversion, the long-end volatility of yields, and the ability to fit an observed discount curve.
8. What does the Feller condition guarantee in the CIR model, and why might a calibrated CIR violate it?
9. Why is the market value of a floating-rate liability nearly insensitive to rates, and why does that not make it riskless?
10. List the factors a CFO should weigh when choosing between a pay-fixed swap and a cap for a floating-rate loan with expected partial prepayment.

## Problems

Use annual compounding and flat Black volatilities unless stated otherwise.

1. **Bootstrap.** A one-year deposit rate is 2.50 percent and the two-year annual-pay par swap rate is 3.00 percent. Compute P(0,1) and P(0,2).
2. **Forwards.** Using the discount factors from Problem 1, compute the two-year annual zero rate and the one-year forward rate starting in one year.
3. **Caplet and floorlet.** A caplet on notional 100 million covers a six-month period (τ = 0.5) that fixes in two years. The forward rate is 3.80 percent, the strike is 3.50 percent, volatility is 30 percent, and the discount factor to the payment date is 0.93. Compute the caplet and floorlet prices and check parity.
4. **Swaption.** A 1y×3y payer swaption on 50 million has forward swap rate 3.20 percent, strike 3.00 percent, volatility 20 percent, and annuity 4.20. Price it.
5. **Vasicek.** With a = 0.20, b = 4.00 percent, σ = 1.00 percent, r₀ = 2.50 percent, compute P(0,3) and the three-year continuous yield.
6. **CIR.** With a = 0.25, b = 4.00 percent, σ = 6.00 percent, r₀ = 3.00 percent, check the Feller condition and compute P(0,2).
7. **Hedge sizing.** A company has 250 million of floating-rate debt maturing in three years. A three-year par swap has annuity 2.75. Compute the interest cost of a 40 basis point rise for one year, the DV01 of a pay-fixed swap on the full notional, and its mark-to-market gain if par rates rise by 40 basis points (ignoring the change in annuity).
8. **Convexity.** Under Ho-Lee with σ = 0.90 percent, compute the futures-forward convexity adjustment for a rate period from t₁ = 1.5 to t₂ = 1.75 years, in basis points.

### Answers to Selected Problems

1. P(0,1) = 1/1.025 = 0.975610. P(0,2) = (1 − 0.03 × 0.975610) / 1.03 = 0.970732 / 1.03 = 0.942458.
2. Two-year zero rate = (1/0.942458)^(1/2) − 1 = 3.0075 percent. Forward = 0.975610 / 0.942458 − 1 = 3.518 percent.
3. σ√T = 0.30 × 1.414214 = 0.424264; d1 = [ln(3.8/3.5) + 0.5 × 0.09 × 2] / 0.424264 = (0.082238 + 0.09) / 0.424264 = 0.4060; d2 = −0.0183. Φ(d1) = 0.6576, Φ(d2) = 0.4927. Caplet per unit = 0.93 × 0.5 × (0.038 × 0.6576 − 0.035 × 0.4927) = 0.465 × (0.024989 − 0.017245) = 0.003601, i.e., about $360,100. Floorlet = 0.465 × (0.035 × 0.5073 − 0.038 × 0.3424) = 0.465 × (0.017755 − 0.013011) = 0.002206, i.e., about $220,600. Parity: 0.003601 − 0.002206 = 0.001395 = 0.465 × 0.003.
4. d1 = [ln(3.2/3.0) + 0.5 × 0.04] / 0.20 = (0.064539 + 0.02) / 0.20 = 0.4227; d2 = 0.2227; Φ(d1) = 0.6637, Φ(d2) = 0.5881. Payer = 4.20 × (0.032 × 0.6637 − 0.030 × 0.5881) = 4.20 × (0.021238 − 0.017643) = 0.015104 per unit, or about $755,200.
5. B = (1 − e^(−0.6)) / 0.2 = 2.2559; A = exp[(0.04 − 0.0001/(0.08)) × (2.2559 − 3) − 0.0001 × 5.0891/0.8] = exp[0.03875 × (−0.7441) − 0.000636] = exp(−0.029470) = 0.9710; P = 0.9710 × e^(−2.2559 × 0.025) = 0.9710 × 0.94516 = 0.91772. Yield = −ln(0.91772)/3 = 2.862 percent.
6. 2ab = 0.0200 > σ² = 0.0036, so Feller holds. γ = 0.26401; B(2) = 1.5709; A(2) = 0.9831; P(0,2) = 0.9831 × e^(−1.5709 × 0.03) = 0.9831 × 0.95397 = 0.93786.
7. Interest rise = 250 million × 0.40% = 1.0 million per year. DV01 = 250 million × 2.75 × 0.0001 = $68,750 per basis point. Gain = 40 × 68,750 = 2.75 million.
8. 0.5 × (0.009)² × 1.5 × 1.75 = 0.5 × 0.000081 × 2.625 = 0.000106 = 1.06 basis points.
