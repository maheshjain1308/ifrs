# Chapter 21: Options, Risk and Hedging Models in Python

## Why This Chapter Exists

Volume 1, Chapters 18 to 20 treated options, derivatives and FX risk management through formulas, payoff diagrams and hand-worked examples. Practitioners work in spreadsheets and short programs, and are expected to know why the numbers come out as they do.

This chapter is a modeling workshop. Every listing is complete, runnable Python 3 (NumPy, SciPy, pandas) and was executed while the chapter was written; the printed results are the actual output, and seeded random results are reproducible. Simulated data are synthetic, and the companies named are fictional and illustrative.

The chapter proceeds from binomial trees and Black-Scholes (Sections 21.2 to 21.4), through value at risk (21.5 to 21.7), to hedge ratios and an FX hedge comparison (21.8 and 21.9), and ends with backtesting, exercises and solutions (21.10 to 21.13). Each section pairs the code with an Excel formula pattern.

### Learning Objectives

After working through this chapter you should be able to:

- Build a Cox-Ross-Rubinstein binomial tree and price European and American options on it.
- Implement Black-Scholes and Garman-Kohlhagen, compute the Greeks and verify them by finite differences.
- Compute VaR and expected shortfall by historical, variance-covariance and Monte Carlo methods, and value the risk of option positions by full revaluation.
- Estimate a minimum-variance hedge ratio and compare forward, money-market and option hedges of a currency receivable.
- Backtest a VaR model with the Kupiec test.

### Setting Up

All listings assume the following imports are available. In a clean environment, `pip install numpy scipy pandas` is enough.

```
numpy >= 1.24    scipy >= 1.10    pandas >= 2.0
```

Listings 21.3 and 21.6 import the Black-Scholes function defined in Listing 21.2. To reproduce them, save the `bs` function from Listing 21.2 (everything above the first `print`) into a file called `bsmodel.py` in the same folder.

A note on conventions. Throughout, S is the spot price, K the strike, r the continuously compounded risk-free rate, q the continuous dividend yield, sigma the annualised volatility and T the time to expiry in years. All rates are continuously compounded unless the text says otherwise. Greeks are reported in the units traders use: vega per one percentage point of volatility, theta per calendar day and rho per one percentage point of the interest rate.

## Section 21.1: From Volume 1 to Code, a Quick Bridge

Volume 1, Chapter 18 presented the one-period binomial model with a replicating portfolio, and then the Black-Scholes formula as the limit of many periods. The key ideas you will need again here are stated in compact form.

```
One period:  Δ = (C_u − C_d)/(S(u − d));  C = e^(−rΔt)[p*C_u + (1−p*)C_d];  p* = (e^((r−q)Δt) − d)/(u − d)
Black-Scholes:  d1 = [ln(S/K) + (r−q+σ²/2)T]/(σ√T);  d2 = d1 − σ√T
                Call = S e^(−qT) N(d1) − K e^(−rT) N(d2)
```

An option price is not a forecast: the real-world probability of a rise plays no part, and risk-neutral valuation is a pricing device only. The simulations below use real-world or zero-drift assumptions when measuring risk, and risk-neutral ones only when pricing.

## Section 21.2: Binomial Trees

### The Model

A recombining binomial tree divides the life of the option into n equal steps of length Δt = T/n. In each step the underlying either multiplies by u or by d. The Cox-Ross-Rubinstein (CRR) parameterisation chooses the factors to match the volatility:

```
u = e^(σ·√Δt)        d = 1/u        p* = (e^((r−q)Δt) − d) / (u − d)
```

Because d = 1/u, an up move followed by a down move returns the price to where it started. This is what makes the tree recombine and keeps the number of terminal nodes at n + 1 rather than 2^n, which is the difference between a model that runs in milliseconds and one that never finishes.

Valuation proceeds backwards. At maturity the option is worth its payoff at each terminal node. At each earlier node the value is the discounted risk-neutral expectation of the two successor values. For an American option there is one extra line: at every node the value is the larger of the continuation value just computed and the immediate exercise value.

### The Code

Listing 21.1 implements the tree with vectorised backward induction. Instead of building a two-dimensional array of nodes, it carries a single vector of option values and shortens it by one element each step. The terminal prices are indexed by j, the number of down moves, so the price at a terminal node is S·u^(n−j)·d^j.

**Listing 21.1: CRR binomial tree for European and American options**

```python
import numpy as np
from math import exp, sqrt

def crr_price(S, K, r, q, sigma, T, n, kind="call", american=False):
    """Cox-Ross-Rubinstein binomial tree, vectorised backward induction."""
    dt = T / n
    u = exp(sigma * sqrt(dt))
    d = 1.0 / u
    p = (exp((r - q) * dt) - d) / (u - d)
    disc = exp(-r * dt)
    j = np.arange(n + 1)
    ST = S * u ** (n - j) * d ** j            # terminal prices, j = number of down moves
    V = np.maximum(ST - K, 0.0) if kind == "call" else np.maximum(K - ST, 0.0)
    for i in range(n - 1, -1, -1):
        V = disc * (p * V[:-1] + (1 - p) * V[1:])
        if american:
            Si = S * u ** (i - np.arange(i + 1)) * d ** np.arange(i + 1)
            ex = np.maximum(Si - K, 0.0) if kind == "call" else np.maximum(K - Si, 0.0)
            V = np.maximum(V, ex)
    return V[0]

S, K, r, q, sigma, T = 100.0, 100.0, 0.05, 0.0, 0.25, 1.0
print("Inputs: S=100 K=100 r=5% q=0% sigma=25% T=1y")
print(f"{'steps':>6} {'Euro call':>10} {'Euro put':>10} {'Amer put':>10}")
for n in (1, 2, 5, 10, 50, 100, 500, 2000):
    c = crr_price(S, K, r, q, sigma, T, n, "call")
    p = crr_price(S, K, r, q, sigma, T, n, "put")
    a = crr_price(S, K, r, q, sigma, T, n, "put", american=True)
    print(f"{n:>6} {c:>10.4f} {p:>10.4f} {a:>10.4f}")
```

Output:

```
Inputs: S=100 K=100 r=5% q=0% sigma=25% T=1y
 steps  Euro call   Euro put   Amer put
     1    14.5706     9.6935     9.6935
     2    11.2110     6.3339     7.4726
     5    12.7946     7.9176     8.3423
    10    12.0923     7.2152     7.8643
    50    12.2867     7.4096     7.9520
   100    12.3113     7.4343     7.9636
   500    12.3311     7.4540     7.9724
  2000    12.3348     7.4577     7.9740
```

### Reading the Output

The one-step tree is crude: it values the European call at 14.57 against roughly 12.33 at convergence, because only two terminal prices are possible. The value converges with a zigzag (11.21 at two steps, 12.79 at five, 12.09 at ten), a known CRR feature caused by where the strike falls relative to the terminal nodes. By 500 steps the call is within 0.005 of the Black-Scholes value of Listing 21.2 (12.3360).

Two further observations. The American put exceeds the European put by about 0.52 at 2,000 steps (7.9740 against 7.4577), the early-exercise premium: a deep in-the-money put holder may prefer to receive the strike now and earn interest. At one step the two are equal because the only exercise date is expiry. And put-call parity holds inside the tree: 12.3348 − 7.4577 = 4.8771 = S − K·e^(−rT). Parity is the cheapest diagnostic for any pricing code. (An American call on a non-dividend share equals the European call; with a positive dividend yield it is worth more.)

### Excel Pattern for the Binomial Tree

A binomial tree is a natural spreadsheet exercise because each cell depends on two cells to its right. For a five-step tree with inputs placed in named cells `S`, `K`, `r`, `q`, `sigma`, `T` and `n`, a workable layout is:

```
B1: dt   = T / n
B2: u    = EXP(sigma * SQRT(dt))
B3: d    = 1 / u
B4: p    = (EXP((r - q) * dt) - d) / (u - d)
B5: disc = EXP(-r * dt)

Stock price lattice (columns = time steps 0..n, rows = number of down moves 0..n):
  Cell in row j, column i (valid when j <= i):   = S * u^(i - j) * d^j

Terminal option values (column n):
  Call:  = MAX(stockcell - K, 0)
  Put:   = MAX(K - stockcell, 0)

Backward induction (column i, row j), European:
  = disc * (p * value_to_the_right_same_row + (1 - p) * value_to_the_right_next_row)

Backward induction, American put:
  = MAX( disc * (p * right_same + (1 - p) * right_below), K - stockcell )
```

The formulas copy across and down once the anchoring is right. Anchor p and the discount factor with `$` references, and add a cell computing `=ABS(tree_price - BS_price)` as a convergence check.

## Section 21.3: Black-Scholes and the Greeks

### From Formula to Function

The Black-Scholes-Merton formula is a closed-form solution, so a function that implements it runs in microseconds and can be called inside loops that revalue a portfolio tens of thousands of times. The function in Listing 21.2 returns the price and the principal sensitivities in one call. Computing d1 and d2 once and reusing them for every Greek is both faster and less error-prone than writing a separate function for each.

The Greeks are partial derivatives of the option price:

```
Delta  Δ = ∂V/∂S           call: e^(−qT)·N(d1)               put: −e^(−qT)·N(−d1)
Gamma  Γ = ∂²V/∂S²         e^(−qT)·n(d1) / (S·σ·√T)          (same for call and put)
Vega   ν = ∂V/∂σ           S·e^(−qT)·n(d1)·√T                 (same for call and put)
Theta  Θ = ∂V/∂t           call: −S·e^(−qT)·n(d1)·σ/(2√T) − r·K·e^(−rT)·N(d2) + q·S·e^(−qT)·N(d1)
Rho    ρ = ∂V/∂r           call: K·T·e^(−rT)·N(d2)           put: −K·T·e^(−rT)·N(−d2)
```

Here N is the standard normal cumulative distribution and n its density. Delta is the number of shares that offset a small move in the underlying. Gamma is the rate at which delta itself changes, and so measures how often a delta hedge needs adjusting. Vega is the exposure to the market's volatility assumption, theta the daily cost of holding the option as time passes, and rho the exposure to interest rates.

**Listing 21.2: Black-Scholes-Merton price and Greeks with finite-difference verification**

```python
from math import log, sqrt, exp
from scipy.stats import norm

def bs(S, K, r, q, sigma, T, kind="call"):
    d1 = (log(S / K) + (r - q + 0.5 * sigma**2) * T) / (sigma * sqrt(T))
    d2 = d1 - sigma * sqrt(T)
    if kind == "call":
        price = S * exp(-q*T) * norm.cdf(d1) - K * exp(-r*T) * norm.cdf(d2)
        delta = exp(-q*T) * norm.cdf(d1)
        theta = (-S*exp(-q*T)*norm.pdf(d1)*sigma/(2*sqrt(T))
                 - r*K*exp(-r*T)*norm.cdf(d2) + q*S*exp(-q*T)*norm.cdf(d1))
        rho = K*T*exp(-r*T)*norm.cdf(d2)
    else:
        price = K * exp(-r*T) * norm.cdf(-d2) - S * exp(-q*T) * norm.cdf(-d1)
        delta = -exp(-q*T) * norm.cdf(-d1)
        theta = (-S*exp(-q*T)*norm.pdf(d1)*sigma/(2*sqrt(T))
                 + r*K*exp(-r*T)*norm.cdf(-d2) - q*S*exp(-q*T)*norm.cdf(-d1))
        rho = -K*T*exp(-r*T)*norm.cdf(-d2)
    gamma = exp(-q*T) * norm.pdf(d1) / (S * sigma * sqrt(T))
    vega = S * exp(-q*T) * norm.pdf(d1) * sqrt(T)
    return dict(price=price, delta=delta, gamma=gamma, vega=vega/100,
                theta=theta/365, rho=rho/100, d1=d1, d2=d2)

g = bs(100, 100, 0.05, 0.0, 0.25, 1.0, "call")
print("ATM call, S=K=100, r=5%, sigma=25%, T=1")
for k, v in g.items():
    print(f"  {k:>6}: {v: .5f}")
pg = bs(100, 100, 0.05, 0.0, 0.25, 1.0, "put")
print("ATM put")
for k, v in pg.items():
    print(f"  {k:>6}: {v: .5f}")
c, p = g["price"], pg["price"]
print(f"Put-call parity: C - P = {c-p:.5f}; S - K e^(-rT) = {100-100*exp(-0.05):.5f}")

print("\nCall Greeks across spot (K=100, T=1, sigma=25%, r=5%)")
print(f"{'S':>5} {'price':>8} {'delta':>7} {'gamma':>8} {'vega/1%':>8} {'theta/day':>10}")
for S in (70, 80, 90, 100, 110, 120, 130):
    x = bs(S, 100, 0.05, 0.0, 0.25, 1.0)
    print(f"{S:>5} {x['price']:>8.3f} {x['delta']:>7.4f} {x['gamma']:>8.5f} {x['vega']:>8.4f} {x['theta']:>10.5f}")

# finite-difference check of the analytic Greeks
h = 0.01
up, dn = bs(100+h,100,0.05,0,0.25,1)['price'], bs(100-h,100,0.05,0,0.25,1)['price']
mid = g['price']
print("\nFinite-difference check")
print(f"  delta FD {(up-dn)/(2*h):.5f}  analytic {g['delta']:.5f}")
print(f"  gamma FD {(up-2*mid+dn)/h**2:.5f}  analytic {g['gamma']:.5f}")
vu, vd = bs(100,100,0.05,0,0.2501,1)['price'], bs(100,100,0.05,0,0.2499,1)['price']
print(f"  vega  FD {(vu-vd)/0.0002/100:.5f}  analytic {g['vega']:.5f}")
```

Output:

```
ATM call, S=K=100, r=5%, sigma=25%, T=1
   price:  12.33600
   delta:  0.62741
   gamma:  0.01514
    vega:  0.37842
   theta: -0.01986
     rho:  0.50405
      d1:  0.32500
      d2:  0.07500
ATM put
   price:  7.45894
   delta: -0.37259
   gamma:  0.01514
    vega:  0.37842
   theta: -0.00683
     rho: -0.44718
      d1:  0.32500
      d2:  0.07500
Put-call parity: C - P = 4.87706; S - K e^(-rT) = 4.87706

Call Greeks across spot (K=100, T=1, sigma=25%, r=5%)
    S    price   delta    gamma  vega/1%  theta/day
   70    1.077  0.1353  0.01243   0.1522   -0.00636
   80    3.142  0.2852  0.01698   0.2717   -0.01200
   90    6.870  0.4616  0.01765   0.3574   -0.01699
  100   12.336  0.6274  0.01514   0.3784   -0.01986
  110   19.305  0.7600  0.01130   0.3420   -0.02052
  120   27.406  0.8541  0.00763   0.2746   -0.01969
  130   36.278  0.9154  0.00477   0.2017   -0.01824

Finite-difference check
  delta FD 0.62741  analytic 0.62741
  gamma FD 0.01514  analytic 0.01514
  vega  FD 0.37842  analytic 0.37842
```

### Interpreting the Numbers

The at-the-money one-year call is worth 12.336 on a spot of 100, which is 12.3% of the underlying: with 25% volatility and a year to run, the option is expensive because there is a great deal of time value. The put is worth 7.459. The difference of 4.877 is exactly S − K·e^(−rT), confirming put-call parity to five decimals.

Delta of the call is 0.6274, not 0.5. Students are often surprised that an at-the-money call has a delta above one half. The reason is visible in d1 = 0.325: the formula's d1 includes the drift term (r + σ²/2)·T, which tilts the distribution so that the exercise probability under the share's own measure is above 50%. The put delta is −0.3726, which equals the call delta minus one, again a parity result.

Gamma of 0.01514 means that for a one-dollar rise in the share price the call's delta rises by about 0.015. The across-spot table shows the characteristic shape: gamma is largest near the strike (0.0177 at a spot of 90 and 0.0151 at 100 for this one-year option) and falls away in both directions. Vega per one point of volatility is 0.378, so if implied volatility rises from 25% to 26% the call gains about 0.38. Theta of −0.0199 per day means the option loses roughly two cents a day to time decay.

The finite-difference block bumps spot by 0.01 for delta and gamma and volatility by 0.0001 for vega; agreement to five decimals confirms both price and Greek formulas. Test every Greek against a bump.

### Excel Pattern for Black-Scholes and Greeks

```
d1    =(LN(S/K)+(r-q+sigma^2/2)*T)/(sigma*SQRT(T))
d2    =d1-sigma*SQRT(T)
Call  =S*EXP(-q*T)*NORM.S.DIST(d1,TRUE)-K*EXP(-r*T)*NORM.S.DIST(d2,TRUE)
Put   =K*EXP(-r*T)*NORM.S.DIST(-d2,TRUE)-S*EXP(-q*T)*NORM.S.DIST(-d1,TRUE)
Delta (call)  =EXP(-q*T)*NORM.S.DIST(d1,TRUE)
Gamma         =EXP(-q*T)*NORM.S.DIST(d1,FALSE)/(S*sigma*SQRT(T))
Vega per 1%   =S*EXP(-q*T)*NORM.S.DIST(d1,FALSE)*SQRT(T)/100
Theta per day (call) =(-S*EXP(-q*T)*NORM.S.DIST(d1,FALSE)*sigma/(2*SQRT(T))
                       -r*K*EXP(-r*T)*NORM.S.DIST(d2,TRUE)
                       +q*S*EXP(-q*T)*NORM.S.DIST(d1,TRUE))/365
Rho per 1%    (call)  =K*T*EXP(-r*T)*NORM.S.DIST(d2,TRUE)/100
```

In `NORM.S.DIST(x, cumulative)`, TRUE returns N(x) and FALSE the density n(x); mixing them up is the most common spreadsheet slip. A data table with spot down the rows reproduces the across-spot table. Goal Seek on `=Call_formula - quoted_price` backs out an implied volatility (Exercise 21.2 does it by bisection).

## Section 21.4: Delta Hedging by Simulation

### What the Greeks Mean in Money

A seller of a call who wants no exposure to the share price holds Δ shares against each option sold, financing the purchase by borrowing. As the share moves, delta changes, and the seller trades to keep the hedge in line. In the idealised Black-Scholes world rebalancing is continuous and the hedged position earns exactly the risk-free rate, so the seller's profit is zero in every state of the world. In practice rebalancing is discrete, and the residual risk is the cost of that discreteness. The simulation in Listing 21.3 measures it.

The experiment sells one call at the Black-Scholes price, buys delta shares financed at the risk-free rate, and rebalances n times to the new Black-Scholes delta. At expiry the hedger delivers on the option, if exercised, and counts what is left. Prices are simulated with a real-world drift of 8% a year, deliberately different from the risk-free rate of 5%, to show that the hedge does not depend on the real-world drift. That is the empirical content of the claim that expected returns do not enter the option price.

**Listing 21.3: Delta-hedging a short call with discrete rebalancing**

```python
import numpy as np
from bsmodel import bs   # the function from Listing 21.2 saved as bsmodel.py
from scipy.stats import norm

def delta_hedge(n_rebal, n_paths=20000, S0=100, K=100, r=0.05, sigma=0.25, T=1.0, mu=0.08, seed=7):
    """Sell one call, delta hedge n_rebal times, return final P&L distribution (per option)."""
    rng = np.random.default_rng(seed)
    dt = T / n_rebal
    S = np.full(n_paths, float(S0))
    c0 = bs(S0, K, r, 0, sigma, T)['price']
    delta = np.array([bs(S0, K, r, 0, sigma, T)['delta']] * n_paths)
    cash = c0 - delta * S                     # premium received, buy delta shares on borrowing
    for i in range(1, n_rebal + 1):
        z = rng.standard_normal(n_paths)
        S = S * np.exp((mu - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * z)
        cash = cash * np.exp(r * dt)
        tau = T - i * dt
        if i < n_rebal:
            d1 = (np.log(S / K) + (r + 0.5 * sigma**2) * tau) / (sigma * np.sqrt(tau))
            new_delta = norm.cdf(d1)
            cash -= (new_delta - delta) * S
            delta = new_delta
    payoff = np.maximum(S - K, 0)
    pnl = cash + delta * S - payoff
    return pnl, c0

print(f"{'rebalances':>10} {'mean P&L':>9} {'st.dev':>8} {'5th pct':>8} {'95th pct':>9}")
for n in (1, 4, 12, 52, 252):
    pnl, c0 = delta_hedge(n)
    print(f"{n:>10} {pnl.mean():>9.4f} {pnl.std():>8.4f} {np.percentile(pnl,5):>8.4f} {np.percentile(pnl,95):>9.4f}")
print(f"Premium received per option: {c0:.4f}")
```

Output:

```
rebalances  mean P&L   st.dev  5th pct  95th pct
         1    0.0271   7.6079 -14.4138    9.0389
         4    0.0169   4.0683  -6.9005    6.4028
        12    0.0061   2.3898  -3.9968    3.8135
        52    0.0018   1.1969  -1.9423    1.9373
       252    0.0012   0.5471  -0.8813    0.8884
Premium received per option: 12.3360
```

### Interpretation

The mean profit is near zero at every rebalancing frequency: 0.027 with a single hedge (that is, no rebalancing after the initial position), and 0.001 with daily rebalancing. This is the central result. The seller collected 12.336 and, on average, spent exactly that much replicating the option, regardless of the 8% real-world drift. The mean is slightly positive because the simulated drift exceeds the risk-free rate and the unhedged-between-trades position is long the share; the effect is small and shrinks as rebalancing increases.

The standard deviation is what changes. With a single hedge the standard deviation of profit and loss per option is 7.61, which is more than 60% of the premium. Quarterly rebalancing (four times) cuts it to 4.07, monthly (12 times) to 2.39, weekly (52 times) to 1.20 and daily (252 times) to 0.55. Each time the number of rebalances is multiplied by about four, the standard deviation falls by about a factor of two. This is the square-root law: hedging error scales with 1/√n. It also gives the practical cost-benefit rule. Moving from weekly to daily rebalancing multiplies trading by almost five and cuts risk by a little over half; whether that is worthwhile depends on transaction costs, which this simulation ignores.

The tail percentiles show the short-gamma asymmetry: with one hedge the 5th percentile is −14.41 against a 95th of +9.04; with daily rebalancing, −0.88 and +0.89.

Gamma is thus both a risk and a cost: a short-gamma hedger buys as the market rises and sells as it falls, and the premium (and the theta earned) compensates for that. Whether a hedged option book profits depends on realised versus implied volatility.

## Section 21.5: Value at Risk by Historical Simulation

### Definition and Purpose

Value at risk (VaR) answers a single question: over a stated horizon, what loss will be exceeded only with a stated small probability? A one-day 99% VaR of $300,000 says that on 99 days out of 100 the portfolio should lose less than $300,000, and on one day in 100 it should lose more. VaR says nothing about how much more. Expected shortfall (ES), also called conditional VaR, fills that gap: it is the average loss on the days when the loss exceeds VaR. Regulators and risk committees increasingly prefer ES because it is sensitive to the shape of the tail and, unlike VaR, is subadditive, so diversification can never appear to increase measured risk.

```
VaR(α) = −quantile of the P&L distribution at probability (1 − α)
ES(α)  = −E[ P&L | P&L ≤ −VaR(α) ]
```

Volume 1, Chapter 20 introduced VaR conceptually as one of the tools of financial risk management. This chapter implements it. Three methods are standard, and they differ in what they assume.

Historical simulation applies the past n days of factor changes to today's portfolio and reads the quantile: it assumes no distribution but depends on a thin tail sample. The variance-covariance method assumes jointly normal changes and is fast and decomposable but understates fat tails and mishandles options. Monte Carlo simulates changes from an assumed model and revalues the portfolio, handling non-linear payoffs at the cost of model dependence and sampling noise.

### The Data and Code

Listing 21.4 creates a synthetic history of 1,000 daily observations for three risk factors affecting a fictional company, Harbourline Foods plc: a commodity price (the main input cost), the euro-dollar exchange rate (export sales) and an equity index (a pension-fund asset that the company bears risk on). The returns are drawn from a multivariate Student-t distribution with five degrees of freedom, scaled to the stated daily volatilities and correlations. The t distribution has fat tails, which is what real financial returns exhibit and what makes the comparison among methods informative. The exposures are $8 million to the commodity, $5 million to the exchange rate and $3 million to the equity index, a total of $16 million.

**Listing 21.4: Historical VaR and expected shortfall, and a comparison with the normal approximation**

```python
import numpy as np
import pandas as pd

# Fictional portfolio of Harbourline Foods plc: synthetic daily returns, 3 risk factors
rng = np.random.default_rng(2024)
n = 1000
vols = np.array([0.011, 0.007, 0.009])           # daily vols: commodity, FX, equity index
corr = np.array([[1.0, 0.2, 0.3], [0.2, 1.0, 0.1], [0.3, 0.1, 1.0]])
cov = np.outer(vols, vols) * corr
L = np.linalg.cholesky(cov)
# fat tails: Student-t(5) scaled to unit variance, then correlated
t = rng.standard_t(5, size=(n, 3)) / np.sqrt(5 / 3)
rets = pd.DataFrame(t @ L.T, columns=["Commodity", "EURUSD", "EquityIdx"])
print(rets.describe().loc[["mean", "std", "min", "max"]].round(5))
print("Excess kurtosis:", rets.kurt().round(2).to_dict())

pos = np.array([8.0, 5.0, 3.0])                  # exposures in $ millions
port = rets.values @ pos                         # daily P&L, $m
print(f"\nPortfolio exposure: ${pos.sum():.0f}m;  daily P&L st.dev ${port.std(ddof=1):.4f}m")

def hist_var_es(pnl, level):
    q = np.percentile(pnl, 100 * (1 - level))
    var = -q
    es = -pnl[pnl <= q].mean()
    return var, es

print(f"\n{'level':>6} {'hist VaR':>9} {'hist ES':>9} {'normal VaR':>11}")
from scipy.stats import norm
for lvl in (0.95, 0.99):
    v, e = hist_var_es(port, lvl)
    nv = -(port.mean() + norm.ppf(1 - lvl) * port.std(ddof=1))
    print(f"{lvl:>6.0%} {v:>9.4f} {e:>9.4f} {nv:>11.4f}")

# 10-day VaR by square-root-of-time scaling, and by bootstrapped 10-day sums
v1, _ = hist_var_es(port, 0.99)
boot = rng.choice(port, size=(20000, 10)).sum(axis=1)
v10b, _ = hist_var_es(boot, 0.99)
print(f"\n99% 1-day VaR {v1:.4f};  sqrt(10) scaled {v1*np.sqrt(10):.4f};  bootstrap 10-day {v10b:.4f}")
```

Output:

```
      Commodity   EURUSD  EquityIdx
mean    0.00026  0.00011    0.00043
std     0.01068  0.00644    0.00894
min    -0.05145 -0.03270   -0.03440
max     0.07280  0.02694    0.04884
Excess kurtosis: {'Commodity': 3.37, 'EURUSD': 1.67, 'EquityIdx': 2.03}

Portfolio exposure: $16m;  daily P&L st.dev $0.1081m

 level  hist VaR   hist ES  normal VaR
   95%    0.1650    0.2409      0.1738
   99%    0.3009    0.3603      0.2475

99% 1-day VaR 0.3009;  sqrt(10) scaled 0.9517;  bootstrap 10-day 0.7924
```

### What the Output Shows

The factor series have excess kurtosis of 3.37, 1.67 and 2.03 (a normal has zero). The commodity series has a daily move of −5.1% against a standard deviation of 1.07%, about 4.8 standard deviations.

The portfolio's daily P&L standard deviation is $0.108 million, 0.68% of the $16 million exposure, lower than a weighted average of the three factor volatilities because of imperfect correlation.

At 95% historical and normal VaR are close (0.1650 against 0.1738). At 99% they diverge: historical 0.3009 against normal 0.2475, an understatement of 18%. The 99% expected shortfall is 0.3603, 20% above VaR. This is the pattern for fat-tailed data: the normal fits near the centre and fails in the tail.

### Horizon Scaling

The last line of Listing 21.4 shows square-root-of-time scaling gives a ten-day 99% VaR of 0.9517, against 0.7924 from a bootstrapped ten-day sum. Summing ten days pulls a fat-tailed distribution toward normality, so scaling overstates here; with volatility clustering the opposite error arises. Test the scaling on the data in question.

### Excel Pattern for Historical VaR

```
VaR 99%:  = -PERCENTILE.INC(C2:C1001, 0.01)
ES 99%:   = -AVERAGEIF(C2:C1001, "<=" & PERCENTILE.INC(C2:C1001, 0.01))
```

With 1,000 observations the 1% tail holds about ten days, so historical VaR rests on a handful of points; the more extreme the quantile, the noisier the estimate.

## Section 21.6: Parametric and Monte Carlo VaR

### The Variance-Covariance Method

If factor changes are jointly normal with covariance matrix Σ and exposures are the vector x, the portfolio P&L is normal with variance x'Σx. VaR is then the z-score times the portfolio standard deviation, and ES has a closed form:

```
σ_p = √(x' Σ x)
VaR(α) = z_α · σ_p                     (zero-mean assumption)
ES(α)  = σ_p · n(z_α) / (1 − α)
```

The covariance matrix is built from volatilities and correlations as Σ_ij = ρ_ij·σ_i·σ_j. A subtle benefit of the closed form is that portfolio risk can be decomposed exactly. The Euler allocation gives each position's component VaR as x_i · (Σx)_i / σ_p · z_α, and the components sum to total VaR. This is the number a risk committee needs to decide which exposure to cut.

### Monte Carlo

Monte Carlo simulation generates random factor changes with the desired covariance and revalues the portfolio. To turn independent standard normal draws z into correlated draws, multiply by the Cholesky factor L of the covariance matrix, where Σ = LL'. Then L·z has covariance Σ. For fat tails, replace the normal draws with scaled Student-t draws. The scaling divides by √(ν/(ν − 2)) so that the variance remains equal to one and volatilities keep their meaning.

**Listing 21.5: Variance-covariance and Monte Carlo VaR, convergence, fat-tailed draws and component VaR**

```python
import numpy as np
from scipy.stats import norm

rng = np.random.default_rng(11)
vols = np.array([0.011, 0.007, 0.009])
corr = np.array([[1.0, 0.2, 0.3], [0.2, 1.0, 0.1], [0.3, 0.1, 1.0]])
cov = np.outer(vols, vols) * corr
pos = np.array([8.0, 5.0, 3.0])

# Closed-form (variance-covariance) VaR
sigma_p = np.sqrt(pos @ cov @ pos)
print(f"Portfolio daily sigma: ${sigma_p:.5f}m")
for lvl in (0.95, 0.99):
    z = norm.ppf(lvl)
    print(f"  Delta-normal VaR {lvl:.0%}: ${z*sigma_p:.4f}m   ES: ${sigma_p*norm.pdf(z)/(1-lvl):.4f}m")

# Monte Carlo: Cholesky-correlated normals
def mc_var(n_sims, dist="normal", df=5, seed=1):
    r = np.random.default_rng(seed)
    L = np.linalg.cholesky(cov)
    if dist == "normal":
        z = r.standard_normal((n_sims, 3))
    else:
        z = r.standard_t(df, (n_sims, 3)) / np.sqrt(df / (df - 2))
    pnl = (z @ L.T) @ pos
    out = {}
    for lvl in (0.95, 0.99):
        q = np.percentile(pnl, 100 * (1 - lvl))
        out[lvl] = (-q, -pnl[pnl <= q].mean())
    return out

print("\nMonte Carlo convergence (normal)")
print(f"{'sims':>9} {'VaR95':>8} {'VaR99':>8} {'ES99':>8}")
for n in (1_000, 10_000, 100_000, 1_000_000):
    o = mc_var(n)
    print(f"{n:>9,} {o[0.95][0]:>8.4f} {o[0.99][0]:>8.4f} {o[0.99][1]:>8.4f}")

o = mc_var(1_000_000, "t")
print(f"\nStudent-t(5) factors, 1m sims: VaR95 {o[0.95][0]:.4f}  VaR99 {o[0.99][0]:.4f}  ES99 {o[0.99][1]:.4f}")

# Sampling error of a 99% VaR estimate across 200 repeated 10,000-path runs
est = [mc_var(10_000, seed=s)[0.99][0] for s in range(200)]
print(f"Std error of 99% VaR with 10,000 paths: {np.std(est):.4f} (mean {np.mean(est):.4f})")

# Component VaR (Euler allocation) under the normal model
mcov = cov @ pos / sigma_p
comp = pos * mcov * norm.ppf(0.99)
print("\nComponent 99% VaR ($m):", {k: round(float(v), 4) for k, v in zip(["Commodity","EURUSD","EquityIdx"], comp)}, " sum:", round(float(comp.sum()), 4))
```

Output:

```
Portfolio daily sigma: $0.11200m
  Delta-normal VaR 95%: $0.1842m   ES: $0.2310m
  Delta-normal VaR 99%: $0.2606m   ES: $0.2985m

Monte Carlo convergence (normal)
     sims    VaR95    VaR99     ES99
    1,000   0.1732   0.2623   0.3206
   10,000   0.1840   0.2605   0.2969
  100,000   0.1839   0.2605   0.2990
1,000,000   0.1837   0.2600   0.2979

Student-t(5) factors, 1m sims: VaR95 0.1765  VaR99 0.2853  ES99 0.3700
Std error of 99% VaR with 10,000 paths: 0.0042 (mean 0.2602)

Component 99% VaR ($m): {'Commodity': 0.1884, 'EURUSD': 0.0402, 'EquityIdx': 0.0319}  sum: 0.2606
```

### Interpretation

The closed-form portfolio sigma is $0.1120 million, a little above the sample estimate of 0.1081 in Listing 21.4, because Listing 21.4 used a finite sample while Listing 21.5 uses the true covariance parameters that generated it. The delta-normal VaR at 99% is $0.2606 million and ES is $0.2985 million.

The convergence table shows the estimates approaching the closed form: at 1,000 simulations ES99 is 0.3206, about 7% above the exact 0.2985, because tail averages rest on only ten draws; at one million, VaR99 is 0.2600 against 0.2606. Repeating a 10,000-path run 200 times gives a standard error of 0.0042 (1.6% of VaR), so quoting four significant figures from 10,000 draws claims precision that does not exist.

With fat-tailed draws and the same volatilities and correlations, the 99% VaR rises from 0.2600 to 0.2853 (+10%) and ES from 0.2979 to 0.3700 (+24%), while the 95% VaR falls from 0.1837 to 0.1765: a fat-tailed distribution has more mass in the centre and far tail and less in the shoulders, so a 95% report alone can understate tail risk.

Finally, component VaR shows that the commodity position, 50% of the exposure ($8 million of $16 million), contributes $0.1884 million of the $0.2606 million total, 72%. It is both larger and more volatile than the other two positions and is positively correlated with both. A risk committee wanting to reduce VaR cheaply should look at that position first, which is the purpose of Section 21.8.

## Section 21.7: Risk of Option Positions, When Delta Is Not Enough

### The Problem with Linear Approximations

The variance-covariance method treats every position as linear in its risk factors. That is accurate for a share, a bond held over a short period or a currency balance. It is poor for options, whose payoff is curved. The long-call position below shows the point. Pennine Retail (a fictional listed company) is trading at $50. A treasury holds 10,000 six-month at-the-money calls on it as part of an executive-compensation hedge, struck at $50, with volatility 30% and a 4% risk-free rate. Three VaR estimates are compared over a ten-day horizon at 99%:

1. Delta-normal, which replaces the option by Δ shares.
2. Delta-gamma, which adds a second-order term: ΔV ≈ Δ·ΔS + ½·Γ·ΔS².
3. Full revaluation, which draws 50,000 values of the share price at the horizon and revalues the option exactly with Black-Scholes at the reduced maturity.

**Listing 21.6: VaR of an option position by three methods**

```python
import numpy as np
from bsmodel import bs
from scipy.stats import norm

# Option book: long 10,000 calls on a fictional share (Pennine Retail, S=50), K=50, 6m, sigma 30%, r 4%
S0, K, r, sigma, T = 50.0, 50.0, 0.04, 0.30, 0.5
N = 10_000
base = bs(S0, K, r, 0, sigma, T)
V0 = N * base['price']
print(f"Call value {base['price']:.4f}; position value ${V0:,.0f}; delta {base['delta']:.4f}; gamma {base['gamma']:.5f}")

daily_vol = 0.30 / np.sqrt(252)
hold = 10                                    # 10-day horizon
s_h = daily_vol * np.sqrt(hold)
z99 = norm.ppf(0.99)

# 1) Delta-normal
dn = N * base['delta'] * S0 * s_h * z99
# 2) Delta-gamma (analytic approx. of the 1st-order + 2nd-order terms at the quantile)
dS = -z99 * s_h * S0                          # loss-tail move (spot falls)
dg = -(N * (base['delta'] * dS + 0.5 * base['gamma'] * dS**2))
# 3) Full revaluation Monte Carlo
rng = np.random.default_rng(5)
z = rng.standard_normal(50_000)
ST = S0 * np.exp(-0.5 * s_h**2 + s_h * z)
V1 = N * np.array([bs(s, K, r, 0, sigma, T - hold/252)['price'] for s in ST])
pnl = V1 - V0
fr = -np.percentile(pnl, 1)
fres = -pnl[pnl <= np.percentile(pnl, 1)].mean()
print(f"\n10-day 99% VaR on long-call position")
print(f"  Delta-normal      : ${dn:,.0f}")
print(f"  Delta-gamma       : ${dg:,.0f}")
print(f"  Full revaluation  : ${fr:,.0f}   (ES ${fres:,.0f}; 50,000 paths)")
```

Output:

```
Call value 4.6952; position value $46,952; delta 0.5794; gamma 0.03687

10-day 99% VaR on long-call position
  Delta-normal      : $40,275
  Delta-gamma       : $31,369
  Full revaluation  : $31,036   (ES $33,402; 50,000 paths)
```

### Why the Estimates Differ

The position is worth $46,952 with delta 0.5794. Delta-normal VaR of $40,275 is 86% of the position value, which overstates risk because a long call has positive gamma: as the share falls, delta falls too, and the option loses less than a linear model predicts. Delta-gamma ($31,369) captures the cushion and is within about 1% of full revaluation ($31,036), a gap of the order of Monte Carlo error and third-order terms. Expected shortfall is $33,402; the tail is truncated because a long option cannot lose more than its premium. For a short option the signs reverse and delta-normal VaR understates the true figure, which is why books with material optionality need full revaluation or delta-gamma-vega methods. The principle for corporates holding embedded options (collars, convertibles, price caps): simulate the payoff, not its linearisation.
## Section 21.8: Estimating Hedge Ratios

### The Cross-Hedging Problem

A perfect hedge needs a traded instrument that moves one-for-one with the exposure, and often none exists: a haulage firm buys diesel at pump prices that follow, but are not identical to, a benchmark futures price. The hedger must choose how much to trade and accept residual basis risk.

Define the change in the spot price of the exposure over a hedging interval as ΔS and the change in the futures price as ΔF. A hedger with a position of one unit of the exposure who holds h units of futures against it has a hedged outcome of ΔS − h·ΔF. The variance of that outcome is minimised at:

```
h* = Cov(ΔS, ΔF) / Var(ΔF) = ρ · σ_S / σ_F
Hedge effectiveness = 1 − Var(ΔS − h*·ΔF) / Var(ΔS) = ρ²
```

Two facts follow. h* is the slope of an OLS regression of spot changes on futures changes, which also supplies a standard error; and the fraction of variance removed is the regression R², the squared correlation (0.9 removes 81%, 0.5 only 25%).

Volume 1, Chapter 20 showed hedge ratios computed from a handful of numbers. Here the ratio is estimated from three years of weekly data on a fictional haulage company, Calder Haulage Ltd, which burns 2.4 million litres of diesel a year, hedged with a heating-oil futures contract whose standard size is, for this illustration, 100,000 litres. The data are synthetic: futures returns have 3% weekly volatility, and diesel returns are generated as 0.82 times futures returns plus independent noise representing basis risk. The code does not know the true 0.82; it must recover it from data.

**Listing 21.7: Minimum-variance hedge ratio by formula and by regression, with out-of-sample test**

```python
import numpy as np
import pandas as pd

# Fictional: Calder Haulage buys diesel; hedges with a heating-oil futures contract (cross hedge).
rng = np.random.default_rng(99)
n = 156                                            # 3 years of weekly data
fut = rng.normal(0.0004, 0.030, n)                 # weekly % change in futures
spot = 0.0003 + 0.82 * fut + rng.normal(0, 0.014, n)  # diesel moves with basis noise
df = pd.DataFrame({"spot": spot, "fut": fut})
print(df.describe().loc[["mean", "std"]].round(5))

# (a) Minimum-variance hedge ratio by formula
rho = df.corr().iloc[0, 1]
h_formula = rho * df.spot.std() / df.fut.std()
# (b) The same number from OLS: spot_ret = a + h * fut_ret + e
X = np.column_stack([np.ones(n), df.fut])
beta, res, *_ = np.linalg.lstsq(X, df.spot.values, rcond=None)
resid = df.spot.values - X @ beta
se = np.sqrt(resid @ resid / (n - 2) / ((df.fut - df.fut.mean())**2).sum())
print(f"\ncorr(spot,fut) = {rho:.4f}")
print(f"h* (rho*sd_s/sd_f) = {h_formula:.4f};  OLS slope = {beta[1]:.4f} (s.e. {se:.4f}); R^2 = {rho**2:.4f}")

# Hedge effectiveness: variance reduction for exposure of 1 unit
hedged = df.spot - beta[1] * df.fut
naive = df.spot - 1.0 * df.fut                     # 1:1 hedge
print(f"\nVariance of weekly outcome per unit exposure:")
print(f"  unhedged        {df.spot.var():.6f}")
print(f"  1:1 hedge       {naive.var():.6f}   ({1-naive.var()/df.spot.var():.1%} reduction)")
print(f"  min-var h*      {hedged.var():.6f}   ({1-hedged.var()/df.spot.var():.1%} reduction)")

# Contract sizing: 2,400,000 litres of diesel; futures contract of 100,000 litres (illustrative)
exposure_l, contract_l = 2_400_000, 100_000
n_contracts = beta[1] * exposure_l / contract_l
print(f"\nContracts to sell/buy: h* x exposure / contract size = {n_contracts:.2f}  -> round to {round(n_contracts)}")

# Tailing the hedge and out-of-sample stability: estimate on first 104 weeks, test on last 52
tr, te = df.iloc[:104], df.iloc[104:]
h_in = np.polyfit(tr.fut, tr.spot, 1)[0]
for name, h in (("h in-sample", h_in), ("1:1", 1.0), ("none", 0.0)):
    print(f"  out-of-sample variance, {name:>11} (h={h:.3f}): {(te.spot - h*te.fut).var():.6f}")
```

Output:

```
         spot      fut
mean  0.00207  0.00160
std   0.02621  0.02799

corr(spot,fut) = 0.8109
h* (rho*sd_s/sd_f) = 0.7592;  OLS slope = 0.7592 (s.e. 0.0442); R^2 = 0.6575

Variance of weekly outcome per unit exposure:
  unhedged        0.000687
  1:1 hedge       0.000281   (59.1% reduction)
  min-var h*      0.000235   (65.7% reduction)

Contracts to sell/buy: h* x exposure / contract size = 18.22  -> round to 18
  out-of-sample variance, h in-sample (h=0.776): 0.000291
  out-of-sample variance,         1:1 (h=1.000): 0.000359
  out-of-sample variance,        none (h=0.000): 0.000834
```

### Interpretation

The correlation between diesel and futures changes is 0.8109. Multiplying by the ratio of standard deviations (0.02621/0.02799 = 0.9364) gives h* = 0.7592, and the OLS slope is the same number, as it must be. Its standard error is 0.0442, so a 95% confidence interval runs from about 0.67 to 0.85. The true value used to generate the data, 0.82, lies within this interval, comfortably less than two standard errors from the estimate. In practice the true ratio is unknown, which justifies caution about hedging to the second decimal.

The R² of 0.6575 means the optimal hedge removes about two-thirds of the weekly variance. The unhedged variance of the weekly diesel return is 0.000687. A naive one-for-one hedge brings it down to 0.000281, a 59.1% reduction. The optimal ratio cuts it to 0.000235, 65.7%. The one-for-one hedge over-hedges and adds futures noise the diesel price does not share. The remaining 34% of the variance is basis risk, which no choice of h can eliminate in a cross hedge.

### Sizing the Position

Contracts = h* × 2,400,000 / 100,000 = 18.22, which rounds to 18 (75% of the physical exposure; the treasurer may prefer 19). In practice the ratio is also tailed for daily margining.

### Out-of-Sample Stability

The final block estimates the hedge ratio on the first 104 weeks and measures the variance of the hedged outcome on the final 52 weeks, which the estimation never saw. The in-sample ratio is 0.776, different from the full-sample 0.7592 because it uses less data. Out-of-sample, the hedged weekly variance is 0.000291 against 0.000359 for the one-for-one hedge and 0.000834 for no hedge. So the estimated hedge still removes 65% of the variance in the test year (1 − 0.000291/0.000834), compared with 57% for the naive hedge. This is a realistic expectation: out-of-sample effectiveness is typically a little worse than in-sample but, if the relationship is stable, still clearly useful.

Cautions: estimate on returns, not price levels (levels give spuriously high R²); match the estimation interval to the hedging horizon; and re-estimate and monitor effectiveness, since IFRS 9 hedge-effectiveness tests rest on closely related regressions.

### Excel Pattern for Hedge Ratios

```
h* = SLOPE(s, f)     R² = RSQ(s, f)     s.e. = INDEX(LINEST(s, f, TRUE, TRUE), 2, 1)
Contracts = ROUND(SLOPE(s,f) * exposure / contract_size, 0)
```

## Section 21.9: Comparing FX Hedges for a Currency Receivable

### The Decision

Ostrava Precision AB (fictional) is a manufacturer whose reporting currency is the US dollar. It has invoiced a customer EUR 5,000,000, payable in six months. Spot is 1.1000 USD per EUR. Six-month interest rates are 4.5% in dollars and 3.0% in euros (continuously compounded), and euro-dollar implied volatility is 9%. The treasurer has three hedging alternatives, plus the option of doing nothing:

1. **Forward contract.** Sell EUR 5,000,000 forward at the six-month forward rate.
2. **Money-market hedge.** Borrow euros today equal to the present value of the receivable, convert at spot to dollars and invest dollars for six months. The euro receivable repays the euro loan.
3. **Currency option.** Buy a six-month euro put, dollar call, struck at 1.0900, paying the premium up front.
4. **Remain unhedged.**

The forward follows from covered interest parity, F = S·e^((r_USD − r_EUR)·T), and the option is priced with the Garman-Kohlhagen formula, which is Black-Scholes with the foreign rate in the role of the dividend yield (put = K·e^(−r_d·T)·N(−d2) − S·e^(−r_f·T)·N(−d1)).

**Listing 21.8: Forward, money-market, option and unhedged outcomes for a EUR 5 million receivable**

```python
import numpy as np
from math import exp, log, sqrt
from scipy.stats import norm

# Fictional exporter, Ostrava Precision AB, receives EUR 5,000,000 in 6 months; reporting currency USD.
S0, rU, rE, T = 1.1000, 0.045, 0.030, 0.5          # spot USD per EUR, USD and EUR rates
sigma = 0.09
notional = 5_000_000
F = S0 * exp((rU - rE) * T)                          # forward by covered interest parity
print(f"Spot {S0:.4f}; 6m forward {F:.4f} (forward points {1e4*(F-S0):.1f} pips)")

def garman_kohlhagen_put(S, K, rd, rf, sig, T):
    d1 = (log(S / K) + (rd - rf + 0.5 * sig**2) * T) / (sig * sqrt(T))
    d2 = d1 - sig * sqrt(T)
    return K * exp(-rd * T) * norm.cdf(-d2) - S * exp(-rf * T) * norm.cdf(-d1)

K = 1.0900                                           # EUR put / USD call strike
prem_per_eur = garman_kohlhagen_put(S0, K, rU, rE, sigma, T)
prem_usd = prem_per_eur * notional
prem_fv = prem_usd * exp(rU * T)                     # premium financed to maturity
print(f"EUR put strike {K:.4f}: premium {prem_per_eur:.5f} USD/EUR = ${prem_usd:,.0f} (future value ${prem_fv:,.0f})")

# Money-market hedge: borrow EUR now, convert, invest USD
eur_borrow = notional / (1 + rE * T)
usd_now = eur_borrow * S0
usd_mm = usd_now * (1 + rU * T)
print(f"Money-market hedge: borrow EUR {eur_borrow:,.0f}, get USD {usd_now:,.0f}; USD in 6m {usd_mm:,.0f} -> effective rate {usd_mm/notional:.4f}")
print(f"Forward hedge:      USD {F*notional:,.0f} at {F:.4f}")

# Simulate terminal spot under a real-world drift of 0 (spot martingale) and under risk-neutral drift
rng = np.random.default_rng(3)
z = rng.standard_normal(500_000)
def outcomes(drift):
    ST = S0 * np.exp((drift - 0.5 * sigma**2) * T + sigma * sqrt(T) * z)
    unhedged = ST * notional
    fwd = np.full_like(ST, F * notional)
    opt = np.maximum(ST, K) * notional - prem_fv
    return ST, unhedged, fwd, opt

print(f"\n{'Terminal spot':>14} {'Unhedged':>12} {'Forward':>12} {'Put option net':>15}")
for s in (0.95, 1.00, 1.05, 1.10, 1.15, 1.20, 1.25):
    print(f"{s:>14.4f} {s*notional:>12,.0f} {F*notional:>12,.0f} {max(s,K)*notional-prem_fv:>15,.0f}")

ST, un, fw, op = outcomes(0.0)
print("\nSimulated USD proceeds (zero-drift spot, 500,000 paths)")
print(f"{'strategy':>10} {'mean':>11} {'st.dev':>10} {'5th pct':>11} {'worst':>11}")
for name, x in (("unhedged", un), ("forward", fw), ("put option", op)):
    print(f"{name:>10} {x.mean():>11,.0f} {x.std():>10,.0f} {np.percentile(x,5):>11,.0f} {x.min():>11,.0f}")
be_spot = F + prem_fv / notional
print(f"\nOption net proceeds exceed the forward only if S_T > {be_spot:.4f} (forward rate + financed premium per EUR)")
print(f"Option floor in USD: {K*notional - prem_fv:,.0f} ({(K*notional-prem_fv)/notional:.4f} per EUR); forward {F:.4f}")
print(f"P(option net outcome > forward outcome) = {(op > fw).mean():.3f}")
```

Output:

```
Spot 1.1000; 6m forward 1.1083 (forward points 82.8 pips)
EUR put strike 1.0900: premium 0.01927 USD/EUR = $96,345 (future value $98,538)
Money-market hedge: borrow EUR 4,926,108, get USD 5,418,719; USD in 6m 5,540,640 -> effective rate 1.1081
Forward hedge:      USD 5,541,405 at 1.1083

 Terminal spot     Unhedged      Forward  Put option net
        0.9500    4,750,000    5,541,405       5,351,462
        1.0000    5,000,000    5,541,405       5,351,462
        1.0500    5,250,000    5,541,405       5,351,462
        1.1000    5,500,000    5,541,405       5,401,462
        1.1500    5,750,000    5,541,405       5,651,462
        1.2000    6,000,000    5,541,405       5,901,462
        1.2500    6,250,000    5,541,405       6,151,462

Simulated USD proceeds (zero-drift spot, 500,000 paths)
  strategy        mean     st.dev     5th pct       worst
  unhedged   5,500,254    350,422   4,943,763   3,992,361
   forward   5,541,405          0   5,541,405   5,541,405
put option   5,517,032    228,947   5,351,462   5,351,462

Option net proceeds exceed the forward only if S_T > 1.1280 (forward rate + financed premium per EUR)
Option floor in USD: 5,351,462 (1.0703 per EUR); forward 1.1083
P(option net outcome > forward outcome) = 0.335
```

### Reading the Results

**Forward and money market.** The forward rate is 1.1083, 83 pips above spot: a premium on the lower-rate currency that follows from interest rate parity and is not a forecast. It locks in USD 5,541,405. The money-market hedge yields USD 5,540,640 (1.1081); the USD 765 gap arises only because Listing 21.8 mixes continuous compounding in the forward with simple interest in the money-market leg.

**The option.** The put struck at 1.0900 costs 0.01927 dollars per euro, or USD 96,345 for the whole notional, 1.75% of the notional value of USD 5.5 million. Because the premium is paid today and the proceeds arrive in six months, the comparison with the forward must be on a common date, so the premium is carried forward at the dollar rate to USD 98,538. The net floor on proceeds is the strike times the notional less this financed premium: USD 5,351,462, or 1.0703 per euro. If the euro falls to 0.95, the option protects the firm to a net 1.0703 while the unhedged firm receives 0.95. If the euro rises to 1.25, the option still allows participation, and net proceeds are USD 6,151,462 against the forward's USD 5,541,405. The option and the forward give the same net proceeds at a spot of about 1.1280, the forward rate plus the financed premium per euro (1.1083 + 0.0197). Below that spot the forward is better; above it the option is better. The option also always beats the unhedged position when the euro is weak and trails it by exactly the financed premium whenever the euro ends above the strike.

**The distribution.** The simulation draws 500,000 terminal spot rates from a lognormal distribution with zero drift in the spot rate (so that the expected spot at maturity is today's spot of 1.1000), and calculates the dollar proceeds from each strategy. The forward has no dispersion: USD 5,541,405 in every path. The unhedged position has a mean of USD 5,500,254 and a standard deviation of USD 350,422, a worst outcome in the sample of USD 3,992,361 and a 5th percentile of USD 4,943,763. The option strategy has a mean of USD 5,517,032 and a standard deviation of USD 228,947; its 5th percentile equals its floor of USD 5,351,462, which is also its worst outcome.

Two interpretations matter. First, the option is not free insurance. It beats the forward in only 33.5% of paths, because the premium is certain and the upside it preserves pays off only above 1.1280. If the objective is a certain budget rate, the forward dominates; if it is protection with participation, the option does the job at a price. Its standard deviation (USD 228,947) is all upside, so a downside measure such as the 5th percentile is the relevant statistic.

Second, the mean outcome depends on the assumed drift. With zero drift the forward (USD 5,541,405) beats the unhedged position (USD 5,500,254) and the option (USD 5,517,032) on average because it embeds an 83-pip premium the zero-drift assumption does not expect to be delivered; if expected spot equalled the forward, the forward and unhedged means would match. Expected-value comparisons are only as good as the exchange-rate forecast, so a hedging policy should be framed around risk reduction, as in Volume 1, Chapter 20. A partial hedge or a collar (Exercise 21.6) can be modelled the same way.

## Section 21.10: Backtesting VaR and Model Risk

### Why Backtest

A VaR number is a prediction: on 1% of days the loss should exceed it. Backtesting compares those predictions with what happened. An exception is a day on which the realised loss exceeds the VaR forecast. If the model is right, the number of exceptions in n days is binomial with parameters n and 1% for a 99% VaR. Too many exceptions show the model understates risk; too few show it is overly conservative and ties up capital or limits unnecessarily.

The Kupiec proportion-of-failures test formalises this. With x exceptions in n days and a nominal exception probability p, the likelihood-ratio statistic is:

```
LR = −2 · ln[ (1−p)^(n−x) · p^x ] + 2 · ln[ (1−x/n)^(n−x) · (x/n)^x ]
```

LR is approximately chi-square with one degree of freedom, so the 5% critical value is 3.841. Listing 21.9 simulates 1,500 days of P&L from a Student-t distribution with four degrees of freedom (a deliberately fat-tailed process with a standard deviation of $0.1 million), estimates 99% VaR each day from the previous 500 days by a normal method and by historical simulation, and counts exceptions over the remaining 1,000 days.

**Listing 21.9: Rolling-window VaR backtest with the Kupiec test**

```python
import numpy as np
from scipy.stats import norm, chi2

# Backtest a 99% one-day VaR on 1,000 days of fat-tailed P&L (Student-t, df=4), VaR estimated two ways
rng = np.random.default_rng(31)
T_all, window = 1500, 500
pnl = rng.standard_t(4, T_all) / np.sqrt(2) * 0.1       # sd = 0.1 ($m)
exc_norm, exc_hist = [], []
for t in range(window, T_all):
    w = pnl[t - window:t]
    var_n = -(w.mean() + norm.ppf(0.01) * w.std(ddof=1))
    var_h = -np.percentile(w, 1)
    exc_norm.append(pnl[t] < -var_n)
    exc_hist.append(pnl[t] < -var_h)

def kupiec(x, n, p=0.01):
    phat = x / n
    ll0 = (n - x) * np.log(1 - p) + x * np.log(p)
    ll1 = (n - x) * np.log(1 - phat) + (x * np.log(phat) if x > 0 else 0)
    lr = -2 * (ll0 - ll1)
    return lr, 1 - chi2.cdf(lr, 1)

n = T_all - window
print(f"Test days: {n}; expected exceptions at 99%: {0.01*n:.1f}")
for name, e in (("normal (window)", exc_norm), ("historical (window)", exc_hist)):
    x = int(np.sum(e))
    lr, pv = kupiec(x, n)
    print(f"{name:>20}: exceptions {x:>3}  rate {x/n:.2%}  Kupiec LR {lr:5.2f}  p-value {pv:.3f}")
```

Output:

```
Test days: 1000; expected exceptions at 99%: 10.0
     normal (window): exceptions  14  rate 1.40%  Kupiec LR  1.44  p-value 0.231
 historical (window): exceptions  13  rate 1.30%  Kupiec LR  0.83  p-value 0.362
```

### Interpretation

With 1,000 test days, 10 exceptions are expected. The normal method produces 14 (1.40%) and the historical method 13 (1.30%). Both overshoot, which is the expected direction because the true distribution has fatter tails than the normal and because a 500-day window gives noisy tail estimates. Yet neither exceeds the Kupiec critical value: the LR statistics are 1.44 and 0.83, with p-values of 0.231 and 0.362. The test does not reject either model.

That result teaches an important lesson about backtests: they have low power. With a 1% tail and 1,000 days there are so few expected exceptions that even a model that is wrong by 40% in its exception rate cannot be statistically distinguished from a correct one. The Basel traffic-light approach to market-risk capital uses a 250-day window and classifies models as green (four or fewer exceptions at 99%), amber (five to nine) or red (ten or more). That threshold system is a compromise between wanting to catch bad models and not penalising good ones, and it implicitly accepts that a backtest cannot give certainty. A prudent risk manager treats backtest results as evidence to be weighed alongside an understanding of how the model works, not as a pass-fail certificate.

Two companion tests are common: independence (exceptions should not cluster) and tests of exception size, using ES.

## Section 21.11: Exercises with Solutions

The solutions below were computed by Listing 21.10, whose output is shown in full. Attempt each exercise before reading the solution.

**Listing 21.10: Solutions to Exercises 21.1 to 21.8**

```python
# Exercises 21.1-21.4 solutions
import numpy as np
from math import exp, sqrt, log
from scipy.stats import norm
from bsmodel import bs
import importlib.util, sys

print("Exercise 21.1: one-step tree, S=40, u=1.25, d=0.80, r=4%, K=42 call")
S, u, d, r = 40, 1.25, 0.80, 0.04
p = (exp(r) - d) / (u - d)
Cu, Cd = max(S*u-42, 0), max(S*d-42, 0)
C = exp(-r) * (p*Cu + (1-p)*Cd)
delta = (Cu - Cd) / (S*(u-d))
B = exp(-r) * (u*Cd - d*Cu) / (u - d)
print(f"  p*={p:.4f}  C={C:.4f}  delta={delta:.4f}  borrowing={-B:.4f}  check delta*S+B={delta*S+B:.4f}")

print("\nExercise 21.2: implied volatility of a call quoted at 9.00 (S=K=100,r=5%,T=1) by bisection")
lo, hi = 0.01, 1.0
for _ in range(60):
    mid = 0.5*(lo+hi)
    if bs(100,100,0.05,0,mid,1)['price'] > 9.0: hi = mid
    else: lo = mid
print(f"  implied sigma = {mid:.5f}")

print("\nExercise 21.3: parametric VaR of a $20m position, daily vol 1.4%, 99%, 10 days")
v = 20 * 0.014 * norm.ppf(0.99) * sqrt(10)
print(f"  VaR = ${v:.4f}m")

print("\nExercise 21.4: min-variance hedge, sd_s=0.021, sd_f=0.026, rho=0.88, exposure 12m")
h = 0.88 * 0.021 / 0.026
var_red = 0.88**2
print(f"  h*={h:.4f}; hedge notional {h*12:.3f}m; variance reduction {var_red:.2%}")

print("\nExercise 21.5: GK put, S=1.25 (USD/GBP), K=1.22, rU=4.5%, rG=3.5%, sigma=8%, T=0.25, notional GBP 2m")
S,K,rd,rf,sg,T = 1.25,1.22,0.045,0.035,0.08,0.25
d1=(log(S/K)+(rd-rf+0.5*sg**2)*T)/(sg*sqrt(T)); d2=d1-sg*sqrt(T)
put=K*exp(-rd*T)*norm.cdf(-d2)-S*exp(-rf*T)*norm.cdf(-d1)
print(f"  premium {put:.5f} USD/GBP = ${put*2e6:,.0f};  forward {S*exp((rd-rf)*T):.5f}")

print("\nExercise 21.6: zero-cost collar for the Ostrava receivable. Buy EUR put at 1.09, sell EUR call at strike Kc with equal premium")
from scipy.optimize import brentq
S0, rU, rE, T, sg = 1.10, 0.045, 0.030, 0.5, 0.09
def gk(S,K,rd,rf,sig,T,kind):
    d1=(log(S/K)+(rd-rf+0.5*sig**2)*T)/(sig*sqrt(T)); d2=d1-sig*sqrt(T)
    if kind=='put': return K*exp(-rd*T)*norm.cdf(-d2)-S*exp(-rf*T)*norm.cdf(-d1)
    return S*exp(-rf*T)*norm.cdf(d1)-K*exp(-rd*T)*norm.cdf(d2)
pp = gk(S0,1.09,rU,rE,sg,T,'put')
Kc = brentq(lambda k: gk(S0,k,rU,rE,sg,T,'call')-pp, 1.10, 1.40)
print(f"  put premium {pp:.5f}; call strike for zero cost Kc = {Kc:.4f}")
print(f"  Collar range: receive between 1.0900 and {Kc:.4f} per EUR -> USD {1.09*5e6:,.0f} to {Kc*5e6:,.0f}")

print("\nExercise 21.7: Kupiec test, 250 days, 6 exceptions at 99% VaR")
x, n, p = 6, 250, 0.01
phat = x/n
lr = -2*((n-x)*log(1-p)+x*log(p) - ((n-x)*log(1-phat)+x*log(phat)))
from scipy.stats import chi2
print(f"  expected {n*p:.1f}; LR = {lr:.4f}; p-value = {1-chi2.cdf(lr,1):.4f}; 5% critical value {chi2.ppf(0.95,1):.3f}")

print("\nExercise 21.8: delta-hedge 100,000 calls (S=100,K=100,r=5%,sigma=25%,T=1): shares to hold; after S rises to 102, shares to add")
b0 = bs(100,100,0.05,0,0.25,1); b1 = bs(102,100,0.05,0,0.25,1)
print(f"  initial delta {b0['delta']:.5f} -> hold {100000*b0['delta']:,.0f} shares (cost ${100000*b0['delta']*100:,.0f})")
print(f"  new delta {b1['delta']:.5f} -> add {100000*(b1['delta']-b0['delta']):,.0f} shares; gamma approx {100000*b0['gamma']*2:,.0f}")
```

Output:

```
Exercise 21.1: one-step tree, S=40, u=1.25, d=0.80, r=4%, K=42 call
  p*=0.5351  C=4.1132  delta=0.4444  borrowing=13.6646  check delta*S+B=4.1132

Exercise 21.2: implied volatility of a call quoted at 9.00 (S=K=100,r=5%,T=1) by bisection
  implied sigma = 0.16109

Exercise 21.3: parametric VaR of a $20m position, daily vol 1.4%, 99%, 10 days
  VaR = $2.0598m

Exercise 21.4: min-variance hedge, sd_s=0.021, sd_f=0.026, rho=0.88, exposure 12m
  h*=0.7108; hedge notional 8.529m; variance reduction 77.44%

Exercise 21.5: GK put, S=1.25 (USD/GBP), K=1.22, rU=4.5%, rG=3.5%, sigma=8%, T=0.25, notional GBP 2m
  premium 0.00735 USD/GBP = $14,702;  forward 1.25313

Exercise 21.6: zero-cost collar for the Ostrava receivable. Buy EUR put at 1.09, sell EUR call at strike Kc with equal premium
  put premium 0.01927; call strike for zero cost Kc = 1.1277
  Collar range: receive between 1.0900 and 1.1277 per EUR -> USD 5,450,000 to 5,638,665

Exercise 21.7: Kupiec test, 250 days, 6 exceptions at 99% VaR
  expected 2.5; LR = 3.5554; p-value = 0.0594; 5% critical value 3.841

Exercise 21.8: delta-hedge 100,000 calls (S=100,K=100,r=5%,sigma=25%,T=1): shares to hold; after S rises to 102, shares to add
  initial delta 0.62741 -> hold 62,741 shares (cost $6,274,095)
  new delta 0.65697 -> add 2,956 shares; gamma approx 3,027
```

### Exercise 21.1: One-Step Binomial Option

A share trades at 40 and in one year will be either 50 (u = 1.25) or 32 (d = 0.80). The continuously compounded risk-free rate is 4%. Price a one-year European call struck at 42, and give the replicating portfolio.

**Solution.** The risk-neutral probability is p* = (e^0.04 − 0.80)/(1.25 − 0.80) = (1.040811 − 0.80)/0.45 = 0.5351. The call pays 50 − 42 = 8 in the up state and 0 in the down state (32 is below the strike). Value: C = e^(−0.04)·[0.5351 × 8 + 0.4649 × 0] = 0.960789 × 4.2808 = 4.1132. The replicating portfolio holds Δ = (8 − 0)/(40 × 0.45) = 0.4444 shares, financed by borrowing 0.4444 × 40 − 4.1132 = 13.6646. Check: 0.4444 × 40 − 13.6646 = 4.1132. The listing confirms the numbers.

### Exercise 21.2: Implied Volatility

A one-year at-the-money call (S = K = 100, r = 5%, no dividends) is quoted at 9.00. Find the implied volatility.

**Solution.** The price is increasing in sigma, so bisect between 1% and 100%; sixty halvings give sigma = 16.109%.

### Exercise 21.3: Parametric VaR

A $20 million position has a daily volatility of 1.4%. Compute the ten-day 99% VaR under normality with zero mean.

**Solution.** Ten-day sigma = 20 × 0.014 × √10 = $0.8854 million; VaR = 2.3263 × 0.8854 = $2.0598 million, 10.3% of the position.

### Exercise 21.4: Minimum-Variance Hedge

Spot and futures changes have standard deviations of 2.1% and 2.6% and a correlation of 0.88. The exposure is $12 million. Find the optimal hedge ratio, the hedge notional and the proportion of variance eliminated.

**Solution.** h* = 0.88 × 0.021/0.026 = 0.7108, so the futures notional is 0.7108 × 12 = $8.529 million. Effectiveness ρ² = 77.44%; hedged standard deviation falls from 2.1% to 0.997%.

### Exercise 21.5: Currency Put on a Sterling Receivable

A US firm will receive GBP 2 million in three months. Spot is 1.2500 USD per GBP, the dollar rate is 4.5% and the sterling rate 3.5%, volatility is 8%, and the firm considers a put on sterling struck at 1.2200. Find the premium and the forward rate.

**Solution.** d1 = [ln(1.25/1.22) + (0.045 − 0.035 + 0.0032) × 0.25]/(0.08 × 0.5) = 0.6898 and d2 = 0.6498. The put is 1.22·e^(−0.01125)·N(−0.6498) − 1.25·e^(−0.00875)·N(−0.6898) = 0.00735 USD per GBP, or $14,702 on GBP 2 million (0.59% of notional). The forward is 1.25 × e^(0.0025) = 1.25313.

### Exercise 21.6: Zero-Cost Collar

For the Ostrava receivable of Section 21.9, find the strike of a euro call, sold by the firm, that makes the collar zero-cost when combined with the 1.0900 put.

**Solution.** Solve for the call strike at which the Garman-Kohlhagen call price equals 0.01927: Kc = 1.1277. The firm is guaranteed between USD 5,450,000 (at 1.0900) and USD 5,638,665 (at 1.1277), pays no premium, and receives the market rate in between.

### Exercise 21.7: Kupiec Test

A 99% VaR model produced 6 exceptions in 250 trading days. Test it.

**Solution.** Expected exceptions 2.5, observed 6 (2.4%). LR = 3.5554, p-value 0.0594, just short of the 3.841 critical value, so the model is not rejected at 5%; it is a Basel amber outcome and deserves scrutiny, but 250 days cannot settle the matter.

### Exercise 21.8: Delta Hedging a Written Option Book

A bank has sold 100,000 one-year at-the-money calls (S = K = 100, r = 5%, sigma = 25%). How many shares should it hold, and how many must it add if the share price rises to 102?

**Solution.** Initial delta is 0.62741, so hold 62,741 shares ($6,274,095). After the rise delta is 0.65697, so buy 2,956 more. The gamma approximation (100,000 × 0.01514 × 2 = 3,027) is slightly high because gamma falls as the share rises. The bank buys after the price has risen: a short-gamma hedger buys high and sells low.

## Section 21.12: Common Errors in Modeling

1. **Mixing real-world and risk-neutral drifts.** Price with the risk-neutral process; measure risk with the real-world (or zero-drift) one.
2. **Wrong units on the Greeks.** Vega per unit instead of per point is 100 times too large; theta per year instead of per day is 365 times too large.
3. **Confusing the `NORM.S.DIST` flag.** TRUE is the cumulative probability, FALSE the density.
4. **Too few simulations, too many digits.** Report a standard error; 10,000 draws give about 1.6% error on a 99% VaR.
5. **Delta-normal VaR for options.** It ignores curvature: it overstates risk for long options and understates it for short ones.
6. **Blind square-root-of-time scaling, regressing levels instead of changes, judging a hedge by expected value, comparing premiums and settlements on different dates, and treating a passed backtest as proof.**

## Section 21.13: Chapter Summary

The binomial tree prices European and American options and converges to Black-Scholes. The Greeks, verified by finite differences, acquire financial meaning in the delta-hedging simulation, where residual risk falls with the square root of the number of rebalances. Fat tails make the normal approximation understate 99% VaR by 18% in our sample, and linear delta approximations misstate option risk by about a quarter. A hedge ratio is a regression slope whose effectiveness is the squared correlation: the 18-contract diesel hedge removed two-thirds of the variance. The FX comparison showed that a forward fixes the outcome while an option fixes a floor and keeps the upside for a premium. Chapter 22 turns to sixty graded problems on the valuation foundations of Volume 1, Chapters 1 to 12.

### Key Formulas Collected

```
CRR tree:       u = e^(σ√Δt), d = 1/u, p* = (e^((r−q)Δt) − d)/(u − d)
Black-Scholes:  C = S e^(−qT) N(d1) − K e^(−rT) N(d2)
Put-call parity: C − P = S e^(−qT) − K e^(−rT)
Garman-Kohlhagen: replace q by the foreign rate r_f and S by the exchange rate
Parametric VaR: z_α · σ_p · √h          ES = σ_p · n(z_α)/(1 − α)
Min-variance hedge ratio: h* = ρ σ_S/σ_F ;  effectiveness = ρ²
Covered interest parity: F = S e^((r_d − r_f)T)
Kupiec LR = −2 ln[(1−p)^(n−x) p^x] + 2 ln[(1−x/n)^(n−x)(x/n)^x]
```

