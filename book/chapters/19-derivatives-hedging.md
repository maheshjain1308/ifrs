# Chapter 19: Forwards, Futures, Swaps and Hedging

## Learning Objectives

After studying this chapter you should be able to:

- Explain how forwards, futures and swaps transfer risk, and distinguish exchange-traded from over-the-counter contracts in terms of credit risk, flexibility and liquidity.
- Derive and apply the cost-of-carry relationship to price forwards and futures on financial assets and commodities, and identify arbitrage when quoted prices deviate from fair value.
- Compute a minimum-variance hedge ratio and the number of futures contracts needed, and interpret hedge effectiveness and basis risk.
- Value a plain-vanilla interest rate swap, find its par fixed rate from a discount curve, and explain how a swap converts floating-rate debt into fixed-rate debt.
- Describe the cash flows of a currency swap and explain why principal is exchanged at inception and maturity.
- Summarize the concept of hedge accounting under IFRS 9 (fair value hedges, cash flow hedges, net investment hedges) and explain why it exists, what qualifies, and how effectiveness and ineffectiveness are treated.

## Opening Vignette

*(Illustrative scenario; the company is fictional.)*

Calder Mills is a mid-sized food manufacturer that buys about 2 million gallons of diesel fuel a year to run its delivery fleet and finances its plants with a floating-rate bank term loan of 50 million. In a good year the company earns a 9 percent operating margin, and its treasurer, Imani Okafor, knows that a sustained 30 percent rise in fuel prices would erase roughly a third of that margin. At the same time every 1 percentage point rise in the base lending rate costs the company 500,000 in additional annual interest.

At the budget meeting the chief executive asks a blunt question: "Why are we exposed to oil prices and central bank decisions? We make bread and pasta." Imani's answer is that exposure is a fact, not a choice; the choice is whether to carry it unmanaged. She proposes three actions. First, buy diesel forward through the company's supplier for roughly half of next year's expected volume. Second, where the supplier cannot offer fixed prices, use exchange-traded heating-oil futures as a proxy. Third, enter an interest rate swap that converts the floating-rate loan into a fixed-rate obligation for three years.

The chief financial officer raises objections. If fuel prices fall, will the company look foolish for having locked in a higher price? Will the swap appear as a loss in earnings every time rates dip, creating noise in reported profit? What happens to the heating-oil hedge if the price of heating oil and the price of diesel at the company's depots stop moving together? And what are the margin calls if futures prices drop?

This chapter answers those questions. It builds from the pricing logic of forwards and futures, through hedge ratios and basis risk, to interest rate and currency swaps, and ends with the accounting concept that keeps hedging from distorting reported results. By the end you should be able to evaluate Imani's proposal as a leader who understands what is being bought, what can go wrong, and how it will show up in the financial statements.

## 19.1 Derivatives as Risk-Transfer Instruments

A derivative is a contract whose value depends on the price of an underlying asset, rate or index. Corporate treasurers use derivatives not because they create value out of thin air but because they let a firm separate the *ownership of an asset or operating position* from the *price risk attached to it*. A bakery can keep buying flour from a local mill and still have fixed its flour price; a manufacturer can keep a floating-rate loan with its relationship bank and still pay a fixed rate.

### The four building blocks

Almost every corporate derivative is a combination of four elementary contracts:

1. **Forward contract.** A customized agreement between two parties to buy or sell an asset at a fixed price (the delivery price, K) on a future date. No cash changes hands at inception; the forward price is set so the contract has zero value at the start. It is traded over the counter (OTC).
2. **Futures contract.** A standardized forward traded on an exchange and settled daily through a clearing house. Daily settlement ("marking to market") largely removes counterparty credit risk but creates interim cash flows.
3. **Swap.** An agreement to exchange streams of cash flows over several periods. A swap can be viewed as a portfolio of forward contracts bundled into one agreement.
4. **Option.** A contract giving the holder the right, but not the obligation, to buy (call) or sell (put) at a strike price. Options are covered in earlier chapters and return in Chapter 20 for currency hedging; here we concentrate on the linear instruments (forwards, futures, swaps), whose payoffs are symmetric.

### Hedging versus speculating

The same contract can hedge or speculate; what differs is the underlying exposure. A farmer who sells wheat futures against a growing crop reduces risk. A trader with no wheat who sells the same futures adds risk. For a corporation the test is whether the derivative *offsets* an existing or highly probable exposure arising from operations or financing. Sound governance requires that this test be written into policy (see Chapter 20) and monitored independently of the people who trade.

### The cost of hedging is not the premium

A forward or swap usually costs nothing to enter, yet hedging is never free. It has an *opportunity cost*: if the market moves in your favor you do not benefit. Judging a hedge by whether it "made money" is a classic managerial mistake. A hedge is insurance against variance, and insurance that was not claimed upon was not wasted. What can be judged is whether the hedge achieved its purpose: stable cash flows, protection of covenants, or predictable pricing for customers.

### Forwards versus futures

Table 19.1 summarizes the practical differences.

| Feature | Forward | Futures |
|---|---|---|
| Market | Over the counter, bilateral | Organized exchange |
| Contract terms | Customized (amount, date, grade) | Standardized size, delivery months, grades |
| Credit risk | Direct counterparty exposure unless collateralized | Clearing house guarantee; margin posted daily |
| Cash flows before maturity | None (unless collateral agreements require) | Daily settlement of gains and losses |
| Liquidity and exit | Reversal needs a second contract or termination with the dealer | Easily closed out by an offsetting trade |
| Typical use | Tailored hedges of a known amount and date | Hedges of standard exposures, proxy hedges, tactical positions |
| Transparency | Prices known only from dealer quotes | Public prices and volumes |

*Table 19.1 – Forwards compared with futures.*

The trade-off is between *precision* and *liquidity*. A forward can match an exposure exactly, down to the day and quantity. A futures contract rarely matches the exposure exactly, creating basis risk, but can be entered and exited cheaply and with little credit concern.

## 19.2 Forward Pricing and the Cost of Carry

### 19.2.1 The no-arbitrage logic

Suppose you wish to own an asset at time T. You have two ways to get there. You can enter a forward and pay K at T. Or you can buy the asset now with borrowed money and hold it. If the asset can be stored and financed, these two routes must cost the same at T; otherwise a riskless profit exists. Equating them yields the **cost-of-carry model**, in which the forward price equals the spot price compounded forward at the *net cost of carrying* the asset: financing cost plus storage, minus any income the asset yields.

For an asset providing no income, with continuously compounded risk-free rate r and maturity T years:

```
F₀ = S₀ · e^(rT)
```

Equivalently, with annual compounding, `F₀ = S₀ (1 + r)^T`. We use continuous compounding for convenience because exponents add: carrying costs expressed as annual rates simply sum in the exponent.

The general form is:

```
F₀ = S₀ · e^((r + u − y) T)
```

where `u` is storage cost as an annual percentage of the asset price (insurance, warehousing, spoilage), and `y` is the yield the holder of the physical asset receives, which includes dividends on shares, coupons on bonds, the foreign interest rate for currency, or the "convenience yield" for commodities.

### 19.2.2 Components of carry

- **Financing (r).** Owning the asset ties up capital, whose cost is the risk-free rate in the arbitrage argument because the arbitrageur's position is riskless.
- **Storage (u).** Physical commodities require warehousing and insurance. Financial assets have negligible storage costs.
- **Income (q or y).** A share paying a 2 percent dividend yield rewards the owner of the share but not the holder of the forward; therefore the forward price is lower.
- **Convenience yield.** Holders of physical commodities may benefit from having inventory on hand to avoid stock-outs or keep a plant running. This benefit accrues to owners of the physical, not holders of the futures, so it lowers the forward price relative to the pure financing-plus-storage calculation. When convenience yield is high, futures prices can be below spot (*backwardation*).

### Example 19.1 – Forward price of a non-dividend-paying share

*A share trades at 80. The continuously compounded risk-free rate is 5 percent per year. Find the six-month forward price.*

```
F₀ = S₀ · e^(rT)
   = 80 · e^(0.05 × 0.5)
   = 80 · e^0.025
   = 80 · 1.025315
   = 82.025
```

The forward price is 82.03, a premium of 2.03 over spot (2.5 percent over six months) that exactly compensates a seller for financing the share. A buyer pays nothing today and agrees to pay 82.03 in six months.

### Example 19.2 – Commodity and index forwards with carry components

*(a) Crude oil trades at 70 per barrel. The risk-free rate is 4 percent, storage and insurance cost 3 percent of value per year, and the convenience yield is 2 percent. Find the one-year forward price.*

```
F₀ = S₀ · e^((r + u − y) T)
   = 70 · e^((0.04 + 0.03 − 0.02) × 1)
   = 70 · e^0.05
   = 70 · 1.051271
   = 73.589
```

The one-year forward is 73.59, a contango of 3.59.

*(b) A stock index stands at 2,500 and pays a continuous dividend yield of 1.8 percent. The risk-free rate is 4 percent. Find the nine-month forward.*

```
F₀ = 2,500 · e^((0.04 − 0.018) × 0.75)
   = 2,500 · e^0.0165
   = 2,500 · 1.016637
   = 2,541.59
```

The index forward is above spot because the financing rate exceeds the dividend yield. If the dividend yield were above the risk-free rate, the forward would be below spot.

### Interpreting contango and backwardation

When the forward curve slopes upward (forward above spot) the market is in **contango**; when it slopes downward it is in **backwardation**. For financial assets, the slope is determined entirely by interest differentials and yields. For commodities, supply conditions and convenience yield move the slope. A hedger who repeatedly rolls short-dated futures forward into later contracts earns or loses the *roll yield*: in contango a long hedger buys each new contract at a price above the expiring one and bears a cost; in backwardation the roll adds a gain. A treasurer should know the shape of the curve before choosing between a long-dated forward and a rolling program.

### 19.2.3 Arbitrage when prices deviate

If the market forward price is above the fair value `S₀ e^(rT)`, an arbitrageur performs a **cash-and-carry**: borrow to buy the asset, sell the forward, deliver at maturity, repay the loan, and keep the difference. If the market price is below fair value, the arbitrageur performs a **reverse cash-and-carry**: short the asset (where possible), invest the proceeds, and buy the forward. Real-world frictions (transaction costs, borrowing and lending spreads, restrictions on short selling) create a *no-arbitrage band* around fair value rather than a single price.

### Example 19.3 – Cash-and-carry arbitrage

*Using the share from Example 19.1 (S₀ = 80, r = 5 percent, T = 0.5), the dealer quotes a six-month forward at 84.00 for 100,000 shares. Show the arbitrage.*

Fair value is 82.025. The quoted forward is 84.00, which is too high.

1. Borrow 8,000,000 (80 × 100,000) at 5 percent continuous for six months and buy 100,000 shares.
2. Enter a forward to sell 100,000 shares at 84.00 in six months.
3. At maturity, deliver the shares and receive 84.00 × 100,000 = 8,400,000.
4. Repay the loan: 8,000,000 × e^0.025 = 8,202,521.
5. Profit = 8,400,000 − 8,202,521 = 197,479.

Per share the profit is 84.00 − 82.025 = 1.975. The profit is certain and requires no investment, so in an efficient market arbitrageurs would sell forwards and buy shares until the forward falls back toward 82.03. The managerial message: for liquid financial assets, a dealer's forward quote should be explainable by the carry formula, and a wide divergence is a sign to question the quote or the credit terms behind it.

### 19.2.4 Value of an existing forward

At inception a forward has zero value. Later, its value changes as the spot price and the time remaining change. For a long forward with delivery price K, current spot S, remaining life τ and no income:

```
f = S − K · e^(−rτ)
```

The long forward is worth the spot price less the present value of the delivery price.

### Example 19.4 – Valuing a forward after three months

*The company in Example 19.3 holds a long forward to buy 100,000 shares at K = 82.025, entered when spot was 80. Three months later spot is 84 and the risk-free rate is still 5 percent. What is the value of the forward?*

```
τ = 0.25
f = 84 − 82.025 · e^(−0.05 × 0.25)
  = 84 − 82.025 · 0.987578
  = 84 − 81.006
  = 2.994 per share
```

For 100,000 shares, the value is about 299,400 in favor of the long. The current forward price for the remaining three months is 84 · e^0.0125 = 85.06, and the present value of the difference between that and the contract price (85.06 − 82.025 = 3.03) is 3.03 × 0.987578 = 2.99, confirming the result. This is the amount the long party would receive if the contract were terminated today, and it is the amount the counterparty owes: a credit exposure for the holder, and a liability for the other party. Accounting standards require such contracts to be recognized at fair value, which is why the valuation mechanics matter for the financial statements as well as for risk management.

## 19.3 Futures Contracts and Daily Settlement

### 19.3.1 How a futures position works

A futures contract is a forward standardized in size, grade and delivery date and cleared through a central clearing house, which becomes the buyer to every seller and the seller to every buyer. Participants post **initial margin** (a performance bond, typically a small percentage of the contract's notional value) in a margin account held with their broker. Each day, the clearing house recalculates the settlement price. The loser's account is debited and the winner's account is credited by the change in value; this is **marking to market**. If the balance in an account falls below the **maintenance margin**, the holder receives a **margin call** and must restore the account to the initial level (variation margin) by the next morning, or the position will be closed.

Daily settlement has three consequences that matter for corporate users:

- **Credit risk is almost eliminated.** Losses are collected as they occur, so no large unpaid obligation accumulates. This is why futures can be traded anonymously among thousands of participants.
- **Liquidity risk is created.** A hedger whose futures lose money must find cash immediately, even though the offsetting gain on the physical position will materialize only when the commodity is eventually purchased or sold. Many corporate hedging crises have been liquidity crises in which an economically sound hedge failed because the firm could not fund the margin calls.
- **Convergence.** As delivery approaches, the futures price converges to the spot price of the deliverable asset. Most contracts are closed out before delivery by an offsetting trade, so physical delivery is the exception.

### 19.3.2 Forward versus futures prices

When interest rates are constant and known, forward and futures prices for the same maturity are identical. When rates are stochastic, the two can differ slightly because the daily reinvestment of margin flows correlates with the futures price. For most corporate purposes, the difference is negligible compared with basis risk, and the cost-of-carry formulas of Section 19.2 are used for both.

### Example 19.5 – Margin account for a long fuel hedge

*Calder Mills buys 10 heating oil futures contracts to hedge diesel purchases. Each contract covers 42,000 gallons, so the position is 420,000 gallons. The initial margin is 60,000 in total and the maintenance margin is 45,000. The futures settlement prices (per gallon) over the first four days after the purchase at 2.50 are 2.46, 2.39, 2.43 and 2.52. Trace the margin account.*

Daily gain or loss for a long position = (price change) × 420,000 gallons.

| Day | Settle price | Price change | Gain / (loss) | Account balance before call | Margin call | Balance after |
|---|---|---|---|---|---|---|
| 0 | 2.50 | – | – | 60,000 | – | 60,000 |
| 1 | 2.46 | −0.04 | (16,800) | 43,200 | 16,800 | 60,000 |
| 2 | 2.39 | −0.07 | (29,400) | 30,600 | 29,400 | 60,000 |
| 3 | 2.43 | +0.04 | 16,800 | 76,800 | – | 76,800 |
| 4 | 2.52 | +0.09 | 37,800 | 114,600 | – | 114,600 |

*Table 19.2 – Margin account of the long futures position.*

Calculations: Day 1: 0.04 × 420,000 = 16,800 loss, balance 43,200 falls below 45,000, so a call of 60,000 − 43,200 = 16,800 is made. Day 2: 0.07 × 420,000 = 29,400 loss, balance 30,600, call of 29,400. Day 3: 0.04 × 420,000 = 16,800 gain, balance 60,000 + 16,800 = 76,800. Day 4: 0.09 × 420,000 = 37,800 gain, balance 114,600, of which 54,600 above the initial margin may be withdrawn.

Net result over four days: (2.52 − 2.50) × 420,000 = +8,400, which equals −16,800 − 29,400 + 16,800 + 37,800. But the company had to wire 46,200 on days 1 and 2, while its gain arrived later. The profit and loss is the same as a forward would produce; the *timing of cash* is not. A treasury that hedges 50 million gallons and sees a 10 percent price drop must be prepared for margin calls in the millions, and should arrange a committed credit line for variation margin before the hedging program is launched.

### 19.3.3 Tailing the hedge

Because gains and losses on futures are received or paid daily, a position held to maturity is slightly different from a forward. Hedgers sometimes "tail" the hedge by scaling the number of contracts by a discount factor (approximately `e^(−rτ)`) to reflect interest earned or paid on margin flows. For short-dated hedges the adjustment is small and usually ignored; for multi-year strips of futures, it can be material.

### 19.3.4 Rolling hedges and the "stack and roll" problem

Liquid futures exist only for relatively near maturities. A company that wants to hedge fuel needs for three years may buy a "stack" of nearby contracts and roll them forward as they near expiry. This creates (a) roll cost or gain depending on the shape of the curve, (b) margin funding risk if prices fall while the real purchases lie years in the future, and (c) basis risk that repeats at each roll. A well-known category of corporate losses came from long-dated fixed-price sales to customers hedged with short-dated futures; when prices fell sharply the futures losses required cash immediately while the offsetting profit on the fixed-price contracts accrued over years. The lesson is to match the *maturity* of the hedge to the maturity of the exposure whenever possible, and otherwise to size the liquidity buffer for the mismatch.

## 19.4 Hedge Ratios and Basis Risk

### 19.4.1 Why a one-for-one hedge is not always optimal

The simplest hedge sells (or buys) futures equal in quantity to the exposure: a hedge ratio of 1. This works if the futures price moves exactly one-for-one with the price of the exposure. In practice the asset hedged and the contract used differ in grade, location or timing. Imani's diesel at the company's depots is not the same product as heating-oil futures at the exchange's delivery point. The hedger therefore chooses the ratio that minimizes the variance of the combined position.

### 19.4.2 The minimum-variance hedge ratio

Let ΔS be the change in the spot price (or value) of the exposure over the hedge horizon, and ΔF the change in the futures price. Let σS and σF be their standard deviations and ρ their correlation. A hedger who takes h units of futures per unit of exposure sees the change in the hedged position as ΔS − hΔF. The variance is minimized at:

```
h* = ρ · σS / σF
```

This is the slope of a regression of ΔS on ΔF, and it equals the covariance of the two changes divided by the variance of the futures change. Three properties matter:

1. If ρ = 1 and σS = σF, then h* = 1.
2. If the exposure is more volatile than the futures (σS > σF), the hedge ratio exceeds ρ and can exceed 1.
3. Low correlation lowers the optimal ratio and, more importantly, limits how much risk the hedge can remove.

The effectiveness of the optimal hedge is measured by the R² of the regression, which equals ρ². The share of variance eliminated is ρ², and the remaining standard deviation of the hedged position is `σS √(1 − ρ²)`.

The number of futures contracts is:

```
N* = h* · Q_A / Q_F
```

where Q_A is the size of the exposure and Q_F the size of one futures contract.

### Example 19.6 – Minimum-variance hedge for a diesel exposure

*Calder Mills expects to buy 2,000,000 gallons of diesel over the next quarter. The standard deviation of weekly percentage changes in the diesel price is 2.0 percent; for heating oil futures it is 1.6 percent. The correlation is 0.85. Each futures contract covers 42,000 gallons. Find the optimal hedge ratio, the number of contracts and the hedge effectiveness.*

Step 1: hedge ratio

```
h* = ρ · σS / σF = 0.85 × 2.0 / 1.6 = 1.0625
```

Step 2: number of contracts

```
N* = h* × Q_A / Q_F = 1.0625 × 2,000,000 / 42,000
   = 2,125,000 / 42,000
   = 50.6
```

The company should buy 51 contracts (rounding to the nearest whole contract; 50 would also be defensible).

Step 3: effectiveness

```
R² = ρ² = 0.85² = 0.7225
```

The hedge removes 72.25 percent of the variance of weekly price changes. The residual standard deviation is

```
σS · √(1 − ρ²) = 2.0% × √(0.2775) = 2.0% × 0.5268 = 1.054%
```

Observe that a correlation as high as 0.85 still leaves more than half of the original *standard deviation* (1.054 versus 2.0 percent, about 53 percent). Standard deviation falls much more slowly than variance, and a manager who hears "72 percent effective" should translate it correctly: the hedge reduces volatility by about 47 percent, not 72 percent. If the treasurer wants more protection, a closer-matching instrument (an OTC diesel swap with the supplier's pricing index, for example) is needed.

### 19.4.3 Basis risk

The **basis** is the spot price of the hedged asset minus the futures price of the contract used:

```
b = S − F
```

A perfect hedge exists only if the basis is known at the time the hedge is lifted. Otherwise the hedger has exchanged *price risk* for *basis risk*. For a hedger who is long the physical (will sell it) and short futures, the effective sale price is `F₁ + b₂`; for a hedger who will buy the physical and is long futures, the effective purchase price is likewise `F₁ + b₂`, where F₁ is the futures price when the hedge is placed and b₂ the basis when it is lifted. The derivation is simple: the hedger pays S₂ in the market and gains F₂ − F₁ on futures, so net cost is `S₂ − (F₂ − F₁) = F₁ + (S₂ − F₂) = F₁ + b₂`.

Basis risk arises from four sources:

- **Product mismatch** (cross-hedging a different grade or commodity).
- **Location mismatch** (delivery point differs from the exposure's location).
- **Timing mismatch** (hedge lifted before the futures expire, so convergence is incomplete).
- **Carry changes** (changes in interest rates, storage costs or convenience yield alter the spread between spot and futures).

### Example 19.7 – Basis risk in a long hedge

*Three months ahead of a purchase of 420,000 gallons, Calder buys 10 heating oil futures at 2.55. At that time the local diesel price is 2.50, so the initial basis is −0.05. At the purchase date, local diesel costs 2.80 and the futures are at 2.88. Compute the effective purchase price and the effect of basis.*

Futures gain: 2.88 − 2.55 = 0.33 per gallon, or 0.33 × 420,000 = 138,600.
Cost in the physical market: 2.80 × 420,000 = 1,176,000.
Net cost: 1,176,000 − 138,600 = 1,037,400, an effective price of 2.47 per gallon.

Check with the formula: F₁ + b₂ = 2.55 + (2.80 − 2.88) = 2.55 − 0.08 = 2.47.

If the basis had stayed at −0.05, the price would have been 2.55 − 0.05 = 2.50. The basis moved from −0.05 to −0.08, which *favored* the buyer by 0.03 per gallon (12,600 in total). Had the basis strengthened to +0.02 the effective price would have been 2.57, a loss of 0.07 per gallon versus the 2.50 expected (29,400). The hedge fixed the *futures* price at 2.55 but left the company exposed to the *change in basis*. Importantly, the volatility of the basis is typically much smaller than the volatility of the outright price, which is why imperfect hedges usually still reduce risk substantially.

### 19.4.4 Managerial rules for choosing the hedge

| Question | Guidance |
|---|---|
| Is a closer instrument available? | Prefer OTC contracts referencing the exact index on which the company pays or receives. |
| Is the hedge horizon short or long? | Short horizons have lower basis volatility but may create rolling and liquidity issues. |
| How much correlation is acceptable? | Hedge only if the regression is stable and economically explainable; a high historical correlation without a causal link can vanish. |
| What if margin funding is a constraint? | Use OTC forwards with collateral thresholds, swaps with the bank's credit line, or options (premium paid once). |
| What proportion to hedge? | Matching exposure fully gives certainty but removes upside; policies typically hedge a declining percentage as the horizon lengthens (see Chapter 20). |

*Table 19.3 – Practical decisions in designing a commodity hedge.*

## 19.5 Interest Rate Swaps

### 19.5.1 What a plain-vanilla swap does

In a plain-vanilla interest rate swap, one party pays a fixed rate on a notional principal and receives a floating rate (such as a benchmark overnight-based or term reference rate) on the same notional; the counterparty does the opposite. Only the *net* difference is paid on each settlement date, and the notional is never exchanged. The party that pays fixed is called the **payer** (or "long" the swap); it benefits when floating rates rise.

A company with a floating-rate loan that enters a pay-fixed swap has a **synthetic fixed-rate loan**. It pays the bank floating on the loan and receives floating from the swap, with the two floating legs cancelling approximately (if the reference rates match), leaving the swap's fixed rate plus the loan margin.

Why not simply borrow at a fixed rate? There are several reasons. The company may have an existing floating loan whose refinancing would incur fees and a prepayment penalty. Its relationship bank may offer floating loans on better terms. The company may want to change the mix of fixed and floating liabilities as its view of the interest rate environment or its balance sheet changes, which a swap can do without touching the underlying debt. A comparative-advantage argument (borrow where relatively cheap, swap into the desired form) is often cited, but in efficient markets it mainly reflects differences in credit spreads at different maturities and should be examined skeptically: the swap exposes the company to the counterparty's credit risk, which is part of the supposed saving.

### 19.5.2 Valuation: a swap as two bonds

At inception, a swap is set so that the present value of the fixed leg equals the present value of the floating leg; hence its value is zero. The **par swap rate** `c` for annual payments over n years, given discount factors `DF_t`, is:

```
c = (1 − DF_n) / Σ DF_t      (t = 1 … n)
```

The numerator is the value of a floating-rate bond per unit of principal less its final discounted principal; the floating leg is worth 1 − DF_n per unit of notional because a floating-rate note resets to par at each payment date. The denominator is the present value of an annuity of 1 per year.

After inception the swap's value is the difference between the PV of the leg received and the PV of the leg paid. For a payer swap with contract fixed rate K when the current par rate is c:

```
Value (payer) = Notional × (c − K) × Σ DF_t
```

For the receiver, the sign is reversed. The formula shows that a swap behaves like an annuity of the *rate difference*, and that its sensitivity to rates rises with the remaining life and the notional.

### Example 19.8 – Finding the par swap rate

*A three-year swap with annual payments is priced from the zero-coupon curve: 1-year 3.0 percent, 2-year 3.4 percent, 3-year 3.7 percent (annual compounding). Find the discount factors, the implied forward rates and the par swap rate. Notional is 50 million.*

Discount factors:

```
DF₁ = 1 / 1.030        = 0.970874
DF₂ = 1 / 1.034²       = 0.935317
DF₃ = 1 / 1.037³       = 0.896734
Σ DF = 2.802925
```

Implied one-year forward rates (rate for each year, as seen today):

```
f(0,1) = 3.000%
f(1,2) = DF₁/DF₂ − 1 = 0.970874/0.935317 − 1 = 3.802%
f(2,3) = DF₂/DF₃ − 1 = 0.935317/0.896734 − 1 = 4.303%
```

Par swap rate:

```
c = (1 − DF₃) / Σ DF = (1 − 0.896734) / 2.802925 = 0.103266 / 2.802925 = 3.6842%
```

The fixed payment each year is 50,000,000 × 3.6842% = 1,842,108. As a check, the expected floating payments are 1,500,000, 1,900,777 and 2,151,307 with present values 1,456,311, 1,777,829 and 1,929,150, summing to 5,163,290. The fixed payments of 1,842,108 discounted at the same factors total 1,842,108 × 2.802925 = 5,163,290. The two legs are equal, so the swap has zero value at inception.

Notice that the par rate (3.684 percent) lies between the early and late forward rates: the fixed rate is a weighted average of the forwards, weighted by the discount factors. The payer therefore overpays in year 1 (fixed 3.684 versus expected floating 3.000), and underpays in year 3 (3.684 versus 4.303). That front-loaded overpayment is a real cash cost in the early years, which the CFO should understand before locking in.

### Example 19.9 – Value of an existing swap

*A year ago Calder entered a four-year pay-fixed swap at 3.50 percent on 50 million, and the first payment has just been made. Three years remain, and we assume the curve of Example 19.8 still applies, so that the par rate for the remaining term is 3.6842 percent. What is the swap worth to Calder?*

```
Value = Notional × (c − K) × Σ DF
      = 50,000,000 × (0.036842 − 0.035000) × 2.802925
      = 50,000,000 × 0.001842 × 2.802925
      = 258,171
```

Calder's swap is an asset of about 258,000: it pays 3.50 percent when market-equivalent swaps would require 3.684 percent. This is the mark-to-market amount used for the balance sheet and the amount the bank would pay to terminate it. If rates had fallen so that the par rate was 3.0 percent, the value would be 50,000,000 × (0.030 − 0.035) × 2.802925, or roughly −700,700, a liability. A manager must therefore expect a pay-fixed swap to show a loss when rates fall; the compensation is that the underlying floating-rate loan costs less. This is the reason accounting treatment matters: without hedge accounting, the loss on the swap would appear in profit or loss while the matching saving on the loan emerges only gradually.

### Example 19.10 – Converting a floating loan into fixed

*Calder's 50 million term loan pays the reference rate plus a 1.20 percent margin annually. It enters the swap of Example 19.8 as fixed-rate payer at 3.6842 percent. What is the effective cost, and what happens if rates rise by 1 percentage point?*

Effective fixed cost = swap fixed rate + loan margin = 3.6842% + 1.20% = 4.8842%.
Annual interest = 50,000,000 × 4.8842% = 2,442,108.

If the reference rate rises 1 percentage point above the forward in a given year, the loan interest increases by 500,000, but the swap receives 1 percentage point more floating, an additional 500,000. The net cost stays at 2,442,108. The company's exposure to rate changes on this debt has been eliminated for the three-year term, at the cost of giving up gains if rates fall. Remaining risks are (1) counterparty default by the swap bank (the exposure is the positive mark-to-market value, not the notional), (2) basis risk if the loan reference rate and the swap floating rate differ, and (3) the opportunity cost of being locked in when rates move below the swap rate.

### 19.5.3 Credit risk and clearing

Swap counterparty exposure is measured by replacement cost: if the counterparty defaults, the non-defaulting party must replace the swap at current market rates. This is a function of mark-to-market value, not notional. After the financial crisis of 2007 to 2009, regulators in many jurisdictions required standardized OTC derivatives to be cleared through central counterparties and imposed margin requirements for non-cleared trades. Corporate users meeting certain criteria can often be exempt from clearing, but must manage collateral under credit support annexes to their master agreements. The practical implication is that the swap, though it has no up-front cost, requires credit lines or collateral capacity.

## 19.6 Currency Swaps

### 19.6.1 Structure

A **currency swap** exchanges principal and interest payments in one currency for principal and interest payments in another. Unlike an interest rate swap, the principal amounts are usually exchanged at the start (at the spot exchange rate) and re-exchanged at maturity at the *same* rate. Interest on each principal is paid in its own currency, at fixed or floating rates. Typical uses:

- **Synthetic foreign-currency borrowing.** A company can raise funds in the market where it has the strongest access (say, domestic bonds), and swap into the currency where it has revenues or assets.
- **Hedging a foreign-currency asset or net investment.** A parent funding a foreign subsidiary can borrow in the subsidiary's currency through a swap.
- **Managing long-dated exposures.** Forward markets thin out beyond a year or two; currency swaps provide hedging for five to ten years.

The re-exchange at the original rate is the essential feature. It fixes the amount of foreign currency that will be needed to repay the home-currency principal, removing the exchange rate risk on the principal. The interest payments are also fixed in foreign currency terms for the fixed-for-fixed case.

### Example 19.11 – A fixed-for-fixed currency swap

*Calder Mills wants to finance a 9.09 million euro plant in the euro area. It raises 10 million US dollars through a three-year bond with a 5.0 percent annual coupon, then enters a currency swap with a bank. The spot rate is 1.10 USD per EUR. In the swap, Calder pays EUR 3.5 percent fixed and receives USD 5.0 percent fixed. Describe the cash flows, and show the effect of a euro depreciation to 0.95 USD per EUR if Calder had not swapped.*

Principal in euros = 10,000,000 / 1.10 = EUR 9,090,909.

| Date | Calder pays (EUR) | Calder receives (USD) | Passes to bondholders (USD) |
|---|---|---|---|
| Year 0 | – | – | Calder gives bank USD 10,000,000 and receives EUR 9,090,909 |
| Year 1 | 318,182 | 500,000 | 500,000 coupon |
| Year 2 | 318,182 | 500,000 | 500,000 coupon |
| Year 3 | 9,409,091 (9,090,909 + 318,182) | 10,500,000 | 10,500,000 (principal + coupon) |

*Table 19.4 – Cash flows of the currency swap.*

The euro interest is 9,090,909 × 3.5% = 318,182. The dollar interest received (USD 500,000) funds the bond coupon exactly, and the principal received (USD 10,500,000 at Year 3) repays the bond. Calder's net position is a euro liability of 9,090,909 at 3.5 percent, a synthetic euro bond.

*Without the swap*: Calder would owe USD 10,000,000 at maturity. If the euro had depreciated to 0.95 USD per EUR, repaying the principal would need EUR 10,000,000 / 0.95 = 10,526,316, compared with EUR 9,090,909 at the original rate, an additional euro cost of 1,435,407 (about 15.8 percent). With the swap, Calder pays only EUR 9,090,909 for the principal. Of course, had the euro appreciated, the unhedged firm would have gained; the swap eliminates that benefit as well as the risk.

At inception the swap has zero value if the fixed rates reflect the two yield curves. Over time its value fluctuates with exchange rates and both interest rate curves; because principals are exchanged at maturity, a currency swap has more credit exposure than an interest rate swap of the same size, and exposures tend to grow with maturity.

## 19.7 Hedge Accounting: The Concept

### 19.7.1 The accounting mismatch problem

Derivatives are measured at fair value, with changes recognized in profit or loss (IFRS 9 classifies derivatives that are not designated as hedging instruments as held for trading). The items they hedge, however, are usually measured differently: forecast purchases are not recognized at all until they occur, loans are typically at amortized cost, inventory at cost. If the derivative is marked to market through earnings while the hedged item is not, reported profit will swing even though the economic position is stable. In Example 19.9, the swap may show a profit of 258,000 in one quarter and a loss in the next, while the company's real cash cost of borrowing has been fixed at 4.88 percent.

**Hedge accounting** is an optional set of rules that allows the accounting for the hedging instrument and the hedged item to be aligned, so that the effects of the hedge appear in the same period as the effects of the hedged item. It does not change cash flows or economics; it changes timing and location of recognition. Because it is a departure from the default rules, it is permitted only when strict conditions are met.

### 19.7.2 Qualifying conditions (IFRS 9)

For a hedging relationship to qualify, all of the following must hold:

1. **Eligible items.** The hedging instrument is typically a derivative (or, for currency risk, a non-derivative financial asset or liability); the hedged item is a recognized asset or liability, an unrecognized firm commitment, a highly probable forecast transaction or a net investment in a foreign operation. Components of items, such as a benchmark interest rate component of a loan or the currency component of a purchase, can be designated.
2. **Formal designation and documentation** at inception: the risk management objective and strategy, the hedged item, the hedging instrument, the nature of the risk being hedged, and how effectiveness will be assessed (including sources of ineffectiveness and how the hedge ratio is determined).
3. **Effectiveness requirements.** There must be an *economic relationship* between hedged item and hedging instrument; the effect of *credit risk* must not dominate the value changes; and the *hedge ratio* of the relationship must be the same as that actually used for risk management. IFRS 9 replaced the older rule-based 80 to 125 percent test with this more principles-based and forward-looking assessment, though ineffectiveness must still be measured and recognized.

If the risk management objective is unchanged but the relationship no longer meets the ratio requirement, the entity *rebalances* by adjusting the quantities rather than discontinuing the hedge. Discontinuation is voluntary only in the sense that it follows from a change of objective or from the criteria ceasing to be met.

### 19.7.3 The three types of hedge

| Type | Hedged exposure | Treatment of the instrument | Treatment of the hedged item |
|---|---|---|---|
| Fair value hedge | Changes in fair value of a recognized asset or liability or firm commitment (e.g., a fixed-rate bond exposed to interest rates) | Gain or loss in profit or loss | Carrying amount adjusted for the hedged risk, with the adjustment in profit or loss, so the two offset |
| Cash flow hedge | Variability in future cash flows (e.g., floating-rate interest, forecast sales in foreign currency, forecast fuel purchases) | Effective portion in other comprehensive income (cash flow hedge reserve); ineffective portion in profit or loss | Not remeasured; when the hedged cash flows affect profit or loss, the reserve is reclassified to profit or loss in the same period. For a forecast purchase of a non-financial item, the reserve is removed and included in the initial cost of the asset (basis adjustment) |
| Net investment hedge | Foreign currency exposure in the net assets of a foreign operation | Effective portion in OCI (foreign currency translation reserve); ineffective portion in profit or loss | Translation differences on the foreign operation are already in OCI; amounts are recycled to profit or loss on disposal |

*Table 19.5 – Types of hedge relationships under IFRS 9.*

### 19.7.4 Measuring the effective portion in a cash flow hedge

In a cash flow hedge, the amount recognized in OCI is the *lower* (in absolute terms) of:

- the cumulative gain or loss on the hedging instrument since inception, and
- the cumulative change in fair value (present value) of the expected future cash flows of the hedged item since inception, usually measured using a *hypothetical derivative* that perfectly matches the hedged risk.

The remainder is ineffectiveness recognized in profit or loss. If the hedging instrument has gained *less* than the hedged item has lost, the shortfall simply remains unrecognized in earnings until it affects the item itself (this is the effect of the "lower of" rule).

### Example 19.12 – Cash flow hedge accounting for the swap

*At the reporting date Calder's pay-fixed swap (hedging the variable interest on the 50 million loan) has a cumulative fair value gain of 260,000. A hypothetical derivative with perfect terms matching the loan's cash flows shows a cumulative gain of 250,000. The tax rate is 25 percent. Show the accounting for the period.*

Cumulative gain on the instrument: 260,000.
Cumulative change in the hedged item (hypothetical derivative): 250,000.
Lower of the two: 250,000, which is recognized in OCI (cash flow hedge reserve).
Ineffectiveness: 260,000 − 250,000 = 10,000, recognized in profit or loss immediately.

Journal entries (before tax):

```
Dr  Derivative asset (swap)            260,000
    Cr  Cash flow hedge reserve (OCI)           250,000
    Cr  Profit or loss (ineffectiveness)         10,000
```

Deferred tax at 25 percent: on the OCI portion 250,000 × 25% = 62,500, charged against OCI, giving a net reserve of 187,500; on the 10,000 in profit or loss, tax of 2,500.

In each later period when the loan interest is accrued, the cumulative amount in the reserve is reclassified to profit or loss in line with the hedged cash flows. The hedging gain lowers interest expense (or recoups earlier losses) in the same periods as the loan interest it hedges, so the reported interest cost reflects the fixed 4.88 percent economic rate instead of oscillating with the swap's mark-to-market. Ineffectiveness arises here from the 10,000 difference, which might reflect differences in reference rates, credit valuation adjustments or payment dates.

### 19.7.5 Practical issues

- **Documentation discipline.** Hedge accounting is prospective. A hedge undocumented on day one cannot be retrospectively designated; the derivative's marks go through profit or loss.
- **Cost of hedging.** IFRS 9 allows the time value of an option or the forward points of a forward contract to be accounted for separately and deferred in OCI, reducing earnings volatility from those components.
- **Disclosure.** IFRS 7 requires disclosure of risk management strategy, the amount, timing and uncertainty of future cash flows from hedging instruments, and the effects on the statement of financial position, profit or loss and equity.
- **Macro hedging.** Banks and others managing dynamic portfolios continue to rely on the separate IAS 39 option for portfolio fair value hedges of interest rate risk while a dedicated macro hedging project is developed.
- **US GAAP.** Under US GAAP, hedge accounting rules differ in detail, but the objective is similar; this chapter describes the IFRS concept.
- **Hedge accounting is not hedging.** A firm may have an effective economic hedge and still report volatility because it did not qualify or elect hedge accounting. Executives reading earnings should distinguish economic hedging results from accounting results.

## Case Study: Tidewater Freight Lines and the Fuel Hedge

*(Illustrative case; the company and all figures are fictional.)*

Tidewater Freight Lines operates a fleet of coastal cargo vessels and a network of trucking depots. Annual revenue is 900 million, of which fuel accounts for roughly 18 percent of operating costs in a normal year. Roughly two-thirds of its revenue comes from contracts with fixed fuel surcharge tables that lag fuel price changes by about three months; the remaining third comes from spot shipments priced at prevailing market rates. The company is financed with 400 million of debt: 250 million of floating-rate bank loans due in five years and 150 million of fixed-rate notes.

Three years ago, with fuel prices at a cyclical peak and the company's equity cushion thin after an acquisition, the board adopted a fuel-hedging policy proposed by the treasurer, Daniel Whitcombe. The policy required hedging at least 70 percent of the next 12 months of expected consumption and 50 percent of months 13 to 24. Daniel executed the program using marine gas oil futures, which he felt were the most liquid contracts, to hedge the company's actual purchases of bunker fuel and truck diesel at ports. He bought contracts out to 24 months and rolled the nearest months as they expired. No analysis of the correlation between marine gas oil futures and the company's delivered prices was documented, and the hedges were not designated for hedge accounting because the finance team judged the paperwork "not worth the effort." The company's bank credit agreement had a leverage covenant of net debt to EBITDA below 3.5 times, and an interest coverage covenant above 4.0 times.

In the first nine months the fuel price rose, and the hedge produced gains of 31 million that were recognized as other income. The operating results showed a corresponding rise in fuel cost. The chief executive praised the hedging program at the annual meeting. In the following year, however, global demand weakened and fuel prices fell by about 40 percent over four months. The futures position, which covered about 70 percent of the next year's consumption and 50 percent of the following year's, generated mark-to-market losses of 58 million, all recognized in profit or loss as the contracts were not in a hedge relationship. Variation margin calls totaled 47 million over that period, and the treasury had to draw on its revolving credit facility to fund them. Meanwhile, the fuel surcharge tables adjusted downward with a three-month lag, so Tidewater's revenue fell before the physical fuel purchases at lower prices fully fed through. Because the physical savings accrue only as fuel is consumed over the next two years, reported EBITDA in the period showed the hedge losses but not the offsetting lower fuel costs. Reported EBITDA fell 22 percent, and net debt to EBITDA rose to 3.3 times, near the covenant limit.

The new chief financial officer, Priya Ramanathan, was asked by the board to review the program. Her preliminary findings were:

1. The regression of the company's delivered fuel prices on marine gas oil futures showed a correlation of 0.78 and a slope of 0.9, indicating a one-for-one hedge ratio overstated the appropriate ratio by about 10 percent. The correlation had been lower in two of the last six quarters because of port-specific supply disruptions.
2. Because two-thirds of the revenue base carried fuel surcharges that pass through fuel price changes after a lag, the company's net exposure to fuel prices was much smaller than the gross consumption suggested. Hedging 70 percent of gross consumption therefore left the company *net long* fuel price in some months: when fuel fell, it lost on the hedge and also lost surcharge revenue.
3. No liquidity plan or committed margin facility had been established; the margin calls were met through borrowing that had been intended for fleet maintenance.
4. The floating-rate loans were unhedged. The board had assumed the fuel hedges were the only market risk worth managing, yet a 2 percentage point rise in rates would increase interest cost by 5 million per year.

Priya proposes to (a) re-estimate the net fuel exposure after surcharge pass-through, (b) reduce the hedge to a policy level of 40 to 50 percent of *net* exposure with a declining profile across the horizon, (c) document hedge relationships and adopt hedge accounting for the retained program, (d) secure a committed margin facility sized with stress scenarios for a 40 percent price fall, and (e) evaluate a pay-fixed swap for about half of the floating loans. Daniel argues that the program "worked as intended" because it protected the company when prices rose and that unwinding now would crystallize the losses.

### Discussion Questions

1. Using the concepts of net exposure and pass-through, explain why Tidewater's economic hedge position was larger than its actual risk. How would you estimate the net exposure quantitatively?
2. Distinguish between the economic outcome and the reported outcome of the fuel hedge during the price decline. How would hedge accounting (cash flow hedge) have changed reported profit and EBITDA, and what conditions would Tidewater have needed to satisfy?
3. Evaluate Daniel's claim that the program "worked as intended" and that unwinding would "crystallize" the losses. Is a mark-to-market loss on a hedge a real loss? What does the analysis of basis risk and hedge ratio add?
4. Design the liquidity and governance elements Tidewater should adopt before re-launching the program, including margin funding, limits, reporting to the board, and the role of the covenant package.

## Key Takeaways

- Derivatives separate the ownership of an asset or position from its price risk; a hedge is judged by whether it reduced the variability the firm cares about, not by whether it made money.
- Forwards are customized OTC contracts with credit exposure; futures are standardized, exchange-traded and marked to market daily, which swaps credit risk for liquidity risk.
- The cost-of-carry formula `F₀ = S₀ e^((r + u − y)T)` prices forwards and futures; deviations beyond transaction costs imply arbitrage, and the shape of the curve (contango or backwardation) determines roll costs.
- The value of an existing forward is `S − K e^(−rτ)`; this fair value is what appears in the balance sheet and what the counterparty owes or is owed.
- The minimum-variance hedge ratio `h* = ρσS/σF` and the number of contracts `N* = h*·Q_A/Q_F` determine the optimal position; hedge effectiveness is ρ² for variance, but the reduction in standard deviation is smaller.
- Basis risk replaces price risk: the effective price of a hedged transaction is `F₁ + b₂`, so the hedger bears uncertainty about the basis change, not the price level.
- An interest rate swap is equivalent to a portfolio of forward-rate agreements; the par rate is `(1 − DF_n) / Σ DF_t`, and a swap's value is `Notional × (c − K) × Σ DF`.
- A swap converts floating debt into fixed (or vice versa) without refinancing; its credit exposure equals positive mark-to-market value, not notional.
- Currency swaps exchange principal at the same rate at start and maturity, removing exchange rate risk on principal and fixing interest in foreign currency terms for long horizons.
- Hedge accounting (IFRS 9) aligns the timing of derivative gains and losses with the hedged item, requires documentation at inception, an economic relationship and a sensible hedge ratio, and puts the effective portion of a cash flow hedge in OCI while ineffectiveness goes to profit or loss.

## Review Questions

1. Explain why a forward contract has zero value at inception, and why its forward price is not an unbiased prediction of the future spot price.
2. Describe the cash-and-carry arbitrage, and explain what transaction costs and short-selling restrictions do to the no-arbitrage band.
3. What is convenience yield, and why can it cause futures prices of a commodity to be below its spot price?
4. Why do margin calls on a futures hedge create a funding risk even when the hedge is economically sound? Suggest three ways a corporate treasury can manage it.
5. Why can the optimal hedge ratio differ from 1? Provide a business situation in which h* is greater than 1.
6. A hedge has an R² of 0.64. By what proportion is the standard deviation of the hedged position reduced relative to unhedged? Explain why this differs from 64 percent.
7. Define basis and basis risk. Why might a company prefer a slightly imperfect futures hedge to no hedge at all?
8. Describe how a pay-fixed interest rate swap transforms floating-rate debt. Which party bears the risk if rates fall, and where does the swap's counterparty credit exposure arise?
9. Why does a currency swap exchange principal, and why does it have greater credit exposure than a single-currency interest rate swap of the same size?
10. Explain the "lower of" rule in a cash flow hedge under IFRS 9, and why a company with an effective economic hedge might still report volatile earnings if it does not apply hedge accounting.

## Problems

1. **Forward price with dividends.** A share trades at 120. The risk-free rate is 6 percent and the dividend yield is 2 percent (both continuously compounded). Find the nine-month forward price.
2. **Commodity forward.** Gold is at 1,900 per ounce. The risk-free rate is 4 percent per year, storage and insurance cost 0.6 percent per year, and there is no convenience yield. Find the two-year forward price (continuous compounding).
3. **Arbitrage.** A non-dividend-paying share is at 50, the one-year risk-free rate is 5 percent (continuous) and the one-year forward is quoted at 54. Identify the arbitrage and compute the profit per share at maturity.
4. **Hedge ratio.** A company will buy 1,500,000 gallons of fuel. The standard deviation of the fuel price change is 3.0 percent and that of the futures is 2.4 percent, with a correlation of 0.90. Each contract is 42,000 gallons. Find h*, the number of contracts, the variance reduction and the residual standard deviation of the hedged position.
5. **Margin account.** A farmer sells five wheat futures contracts (5,000 bushels each) at 6.00 per bushel. The initial margin is 7,500 in total, the maintenance margin is 5,600. Settlement prices on the next three days are 6.10, 5.95 and 5.80. Show the margin account, any margin calls and the total gain.
6. **Swap rate and value.** The 1-year zero rate is 2.5 percent and the 2-year zero rate is 3.0 percent (annual compounding). Find the par two-year swap rate (annual payments), and the value to a payer of a 20 million swap with a fixed rate of 2.8 percent.
7. **Currency swap.** A US firm with revenues in sterling needs to fund a 20 million US dollar investment. The spot rate is 1.25 USD per GBP. It raises USD 20 million at 4.5 percent and enters a swap paying GBP 3.8 percent on the sterling equivalent and receiving USD 4.5 percent. Find the sterling principal and the annual sterling interest, and compute the extra sterling the firm would have needed at maturity to repay the loan without a swap if spot becomes 1.10 USD per GBP.
8. **Hedge accounting.** A cash flow hedge has a cumulative instrument gain of 90,000 and a cumulative hypothetical derivative gain of 100,000 at the end of period 1. At the end of period 2 the cumulative figures are 210,000 and 195,000. Compute the amounts in OCI and profit or loss for each period.

### Answers to Selected Problems

1. F = 120 × e^((0.06 − 0.02) × 0.75) = 120 × e^0.03 = 120 × 1.030455 = 123.65.
2. F = 1,900 × e^((0.04 + 0.006) × 2) = 1,900 × e^0.092 = 1,900 × 1.096368 = 2,083.09 per ounce.
3. Fair forward = 50 × e^0.05 = 52.56. The quoted 54 is higher, so borrow 50 and buy the share, sell the forward at 54, deliver at maturity and repay 52.56. Profit = 54 − 52.56 = 1.44 per share.
4. h* = 0.90 × 3.0 / 2.4 = 1.125. N* = 1.125 × 1,500,000 / 42,000 = 40.18, so 40 contracts. Variance reduction = 0.81 (81 percent). Residual standard deviation = 3.0% × √0.19 = 1.31%.
5. The seller loses when prices rise. Day 1: −0.10 × 25,000 = −2,500, balance 5,000 < 5,600, so call 2,500 to restore 7,500. Day 2 (5.95): +0.15 × 25,000 = +3,750, balance 11,250. Day 3 (5.80): +3,750, balance 15,000. Total gain = (6.00 − 5.80) × 25,000 = 5,000 (−2,500 + 3,750 + 3,750). One margin call of 2,500.
6. DF₁ = 0.975610; DF₂ = 1/1.03² = 0.942596; Σ DF = 1.918206. Par rate = (1 − 0.942596)/1.918206 = 2.9926%. Value = 20,000,000 × (0.029926 − 0.028) × 1.918206 = about 73,900 (positive to the payer).
7. Sterling principal = 20,000,000 / 1.25 = GBP 16,000,000. Annual interest = 16,000,000 × 3.8% = GBP 608,000 (receiving USD 900,000 to pay the dollar loan coupon). Without a swap at spot 1.10: 20,000,000 / 1.10 = GBP 18,181,818, so the extra sterling needed is 2,181,818.
8. Period 1: the lower of 90,000 and 100,000 is 90,000, all to OCI; ineffectiveness in profit or loss is 0. Period 2: the lower of 210,000 and 195,000 is 195,000, so the cumulative reserve is 195,000 and the OCI movement in the period is 105,000; cumulative ineffectiveness is 210,000 − 195,000 = 15,000, recognized in profit or loss in period 2.
