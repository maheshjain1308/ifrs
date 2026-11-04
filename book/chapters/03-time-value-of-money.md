# Chapter 3: Time Value of Money

## Learning Objectives

After studying this chapter you should be able to:

- Explain why a dollar today is worth more than a dollar tomorrow, and translate cash flows across time using present value (PV) and future value (FV) factors.
- Value level annuities, annuities due, deferred annuities, perpetuities, growing perpetuities and growing annuities, and recognise which formula fits a given payment pattern.
- Convert between stated (nominal) rates, periodic rates and effective annual rates (EAR) for any compounding frequency, including continuous compounding.
- Build a loan amortization schedule, split each payment into interest and principal, and compute the outstanding balance at any date.
- Distinguish nominal from real cash flows and discount rates using the Fisher relationship, and keep cash flows and discount rates consistent in inflation terms.
- Apply time-value tools to managerial decisions such as lease-versus-buy, rebate-versus-cheap-financing, retirement funding and the pricing of long-lived commitments.

## Opening Vignette

*Illustrative scenario. Harbor Ridge Components is a fictional mid-sized manufacturer of precision valves.*

On a Tuesday morning, Harbor Ridge's chief financial officer, Marisol Okafor, found three proposals on her desk, each of which looked attractive on its face.

The first came from a supplier of automated machining cells. It offered a price of $2.4 million payable in full on delivery, or "easy terms" of $600,000 per year for five years beginning at delivery. The sales representative described the second option as "only $3.0 million in total, with no interest charged." Marisol noticed that the second option was in fact more expensive in nominal terms, yet the supplier's brochure said it was "free financing." She wanted to know what interest rate was hidden inside the instalment plan.

The second proposal came from the head of human resources, who wanted to replace a defined-benefit pension promise with a package that paid each retiring employee $1,500 per month for twenty years. The question was how much money the company must set aside per employee today, given that retirement was some 25 years away, that pension assets were expected to earn 6% a year, and that the monthly benefit would eventually need to keep up with inflation.

The third came from the treasurer, who had negotiated a $5 million term loan. Two banks quoted nearly identical headline rates, but one compounded monthly and the other semi-annually, and one required level monthly payments while the other required equal principal repayments. Which was cheaper? And what would the outstanding balance be if the company chose to prepay after four years?

None of these questions can be answered by adding up cash amounts. Each requires the same underlying idea: money received at different dates is not directly comparable, and the exchange rate between dates is the interest rate. In this chapter we develop that idea carefully, because every later chapter in this book (bond valuation, capital budgeting, the cost of capital, firm valuation) is an application of it. By the end we will return to Marisol's three problems and resolve them with the tools in hand.

## 3.1 Why Money Has a Time Value

### 3.1.1 Three reasons a dollar today beats a dollar tomorrow

A dollar received today is worth more than a dollar received a year from now for three distinct reasons, and it is useful to keep them separate because they matter differently in different applications.

1. **Opportunity cost (productive investment).** A dollar in hand can be invested at a positive return. If a safe deposit pays 4% a year, then $1.00 today becomes $1.04 in a year. Anyone offered $1.00 a year from now must therefore be compensated for what the dollar could have earned in the meantime. This is the core economic reason and it would apply even in a world with no inflation and no uncertainty.
2. **Inflation (purchasing power).** If prices rise 3% a year, a dollar next year buys less than a dollar today. Inflation erodes the real value of a fixed nominal sum, which is why lenders demand a rate that exceeds expected inflation. We treat this formally in Section 3.8.
3. **Risk and uncertainty.** A promised future payment may not be made. The more uncertain the payment, the less it is worth today. In practice the interest rate used to convert future amounts to today's amounts contains a premium for this risk, which is why a bond issued by a distressed firm is discounted at a higher rate than a government bond.

The *interest rate*, or equivalently the *discount rate*, is the single number that summarises all three effects for a particular cash flow. Time-value mathematics is simply the arithmetic of applying that number consistently.

### 3.1.2 The vocabulary

A handful of terms recur throughout the chapter:

- **Present value (PV):** the value today of a cash flow (or stream of cash flows) to be received in the future.
- **Future value (FV):** the value at some future date of a cash flow (or stream) that exists today.
- **Discount rate / interest rate (r):** the rate per period used to move values between dates.
- **Number of periods (n or t):** the number of compounding intervals between the two dates.
- **Compounding:** earning interest on previously earned interest. **Discounting** is the reverse operation.
- **Cash flow timeline:** a horizontal line marking dates 0, 1, 2, … with the cash flows beneath. Drawing the timeline is the single most effective defence against errors, particularly for annuities that start late or payments that come at the beginning of periods.

A convention worth fixing now: unless stated otherwise, cash flows are assumed to arrive at the *end* of each period, and date 0 is "today". We will explicitly flag annuities due, in which payments arrive at the *start* of each period.

### 3.1.3 Simple versus compound interest

Under **simple interest**, interest is earned only on the original principal: investing $1,000 at 8% simple interest for three years yields $1,000 × (1 + 3 × 0.08) = $1,240. Under **compound interest**, interest is earned on accumulated interest as well: $1,000 × 1.08³ = $1,259.71. The difference is small over three years, but it grows without bound. Over 30 years the simple-interest account would hold $3,400 while the compounded account would hold $10,062.66. Compounding is the engine of long-horizon wealth accumulation, and also the reason why debt left unpaid becomes so burdensome. Virtually every financial contract in practice uses compound interest, so that is our default.

## 3.2 Present Value and Future Value of a Single Cash Flow

### 3.2.1 The two fundamental formulas

If an amount PV is invested for n periods at a periodic rate r, its future value is

```
FV = PV × (1 + r)^n
```

The term (1 + r)^n is the **future value factor** (or compounding factor). Rearranging gives the present value of a future amount:

```
PV = FV / (1 + r)^n = FV × (1 + r)^(−n)
```

The term 1 / (1 + r)^n is the **discount factor**. It tells us how many dollars today are equivalent to one dollar at date n. At r = 7% and n = 8, the discount factor is 1 / 1.07⁸ = 1 / 1.7182 = 0.5820; one dollar eight years from now is worth about 58 cents today.

Notice that the two formulas contain four variables (PV, FV, r, n). Given any three, the fourth can be solved:

```
r = (FV / PV)^(1/n) − 1
n = ln(FV / PV) / ln(1 + r)
```

**Example 3.1 – Present and future value of a lump sum.** Harbor Ridge has promised to pay a supplier a $250,000 settlement in eight years. The company can earn 7% per year on a sinking fund. (a) How much must it set aside today? (b) Separately, the company invests $100,000 today at 6% for ten years; what will it be worth?

*(a) Step 1:* Compute the discount factor. 1.07⁸ = 1.718186, so the factor is 1 / 1.718186 = 0.58201.
*Step 2:* PV = $250,000 × 0.58201 = **$145,502.28**.
*Check:* $145,502.28 × 1.718186 = $250,000. ✓

*(b) Step 1:* 1.06¹⁰ = 1.790848.
*Step 2:* FV = $100,000 × 1.790848 = **$179,084.77**.

Interpretation: the sinking fund needs to start at less than 60% of the eventual obligation because seven percent growth does the remaining work. This ratio will fall as either the rate or the horizon rises.

### 3.2.2 Solving for the rate and the horizon

Two of the most useful applications run the formula "backwards". If a $100 investment becomes $150 in five years, the implied annual return is (150 / 100)^(1/5) − 1 = 1.5^0.2 − 1 = 8.447%. Notice that the answer is the *compound* annual growth rate (CAGR), which is lower than the simple average (50% / 5 = 10%) because compounding does some of the work. Managers should always compute growth over multiple years as a geometric, not arithmetic, rate when describing what happened to a single balance.

Solving for n is the basis of the well-known **rule of 72**: at a rate of r percent, money doubles in roughly 72 / r years. At 9%, the exact doubling time is ln 2 / ln 1.09 = 8.04 years, while the rule gives 72 / 9 = 8.0 years. The rule is a mental shortcut and works best for rates between about 6% and 10%.

### 3.2.3 Common mistakes with single cash flows

- **Mismatched periods.** Using an annual rate with a number of months, or a monthly rate with a number of years. The rate and the period count must refer to the same unit.
- **Forgetting that compounding is non-linear.** Doubling the horizon more than doubles the growth; halving the rate does not halve the final value.
- **Discounting the wrong number of periods.** A cash flow at the *end* of year 5 is discounted five periods; one at the *start* of year 5 is discounted four. Draw the timeline.
- **Comparing cash flows at different dates.** Before comparing or adding, always move everything to a common date. Any date works, because the ratio between two values moved to the same date does not depend on the date chosen. Present value (date 0) is merely the most convenient.

### 3.2.4 The principle of value additivity

A powerful consequence of the formulas is **value additivity**: once cash flows are expressed at the same date, they can be added. The present value of a stream is the sum of the present values of its individual payments:

```
PV = CF₁/(1+r) + CF₂/(1+r)² + … + CFₙ/(1+r)ⁿ = Σ CFₜ/(1+r)ᵗ
```

Every annuity and perpetuity formula in the rest of this chapter is just a closed-form shortcut for this sum when the cash flows follow a pattern. Whenever a formula does not fit, one can always fall back on discounting each cash flow individually, which is exactly what a spreadsheet does.

## 3.3 Annuities

### 3.3.1 Ordinary annuities

An **annuity** is a finite series of equal cash flows at equal intervals. Leases, mortgage payments, bond coupons, pension benefits and instalment contracts are all annuities. If the first payment arrives one period from now (the **ordinary annuity**), the present value of n payments of C at rate r is

```
PV = C × [1 − (1 + r)^(−n)] / r
```

The bracketed expression is the **annuity factor**, often written A(r, n). It is simply the sum of the first n discount factors. For r = 8% and n = 5 the factor is (1 − 1.08⁻⁵) / 0.08 = (1 − 0.680583) / 0.08 = 3.992710. So five annual payments of $1 are worth $3.99 today, which is less than $5 because later payments are discounted more heavily.

The future value of the same annuity, measured at the date of the last payment, is

```
FV = C × [(1 + r)^n − 1] / r
```

and it is related to the present value by FV = PV × (1 + r)^n, as it must be.

**Derivation by subtraction.** The annuity formula can be understood without algebra. A perpetuity of C starting at date 1 is worth C / r. A perpetuity of C starting at date n + 1 is worth C / r at date n, or C / [r(1 + r)ⁿ] today. The difference between the two perpetuities is exactly an n-payment annuity: C / r − C / [r(1 + r)ⁿ] = (C / r)[1 − (1 + r)^(−n)]. This "cancel the tail" idea is useful for valuing many irregular patterns.

### 3.3.2 Annuities due and deferred annuities

If payments are made at the *beginning* of each period (rent, insurance premiums and lease payments are typically paid in advance), the annuity is an **annuity due**. Every payment arrives one period earlier than in the ordinary case, so its value is higher by exactly one period of compounding:

```
PV(annuity due) = PV(ordinary annuity) × (1 + r)
FV(annuity due) = FV(ordinary annuity) × (1 + r)
```

A **deferred annuity** is an ordinary annuity whose first payment is more than one period away. Value it in two steps: use the annuity formula to find its value one period *before* the first payment, then discount that value back to today. For example, if the first of 20 payments occurs at date 6, the annuity formula gives the value at date 5, and this must be discounted five periods to date 0.

**Example 3.2 – Annuity, annuity due and future value.** A supplier offers Harbor Ridge a maintenance contract costing $40,000 per year for five years. The company's opportunity cost of funds is 8%.

*(a) Ordinary annuity (paid at year-end).*
Annuity factor = (1 − 1.08⁻⁵) / 0.08 = (1 − 0.680583) / 0.08 = 3.992710.
PV = $40,000 × 3.992710 = **$159,708.40**.

*(b) Annuity due (paid at the start of each year).*
PV = $159,708.40 × 1.08 = **$172,485.07**.
The extra $12,776.67 is the cost of paying one year sooner on every instalment.

*(c) Future value of the ordinary annuity at year 5.*
FV factor = (1.08⁵ − 1) / 0.08 = (1.469328 − 1) / 0.08 = 5.866601.
FV = $40,000 × 5.866601 = **$234,664.04**.
*Check:* $159,708.40 × 1.469328 = $234,664.04. ✓

*Managerial point:* the contract that bills in advance is more expensive in present-value terms by 8%, even though the cash totals ($200,000) are identical. Negotiating the payment date is a real economic concession.

**Example 3.3 – The hidden interest rate in "easy terms."** Return to the machining-cell offer in the vignette: $2.4 million cash on delivery, or five annual instalments of $600,000 with the first due at delivery (an annuity due). What interest rate is implied?

*Step 1:* If Harbor Ridge pays cash it pays $2,400,000. If it chooses instalments, it pays $600,000 now and four more payments of $600,000 over the next four years. The financing it receives is therefore $2,400,000 − $600,000 = $1,800,000, repaid by four year-end payments of $600,000.
*Step 2:* The annuity factor must satisfy $600,000 × A(r, 4) = $1,800,000, so A(r, 4) = 3.0000.
*Step 3:* Try r = 12%: A = (1 − 1.12⁻⁴) / 0.12 = (1 − 0.635518) / 0.12 = 3.037349. Try r = 13%: A = (1 − 1.13⁻⁴) / 0.13 = (1 − 0.613319) / 0.13 = 2.974471. Interpolating: r ≈ 12% + (3.037349 − 3.000000) / (3.037349 − 2.974471) = 12% + 0.594 ≈ **12.59%**.

So the "free financing" costs about 12.6% a year. If Harbor Ridge can borrow at, say, 7%, paying cash (funded by its bank) is far cheaper. Total nominal outlay is $3.0 million versus $2.4 million, so the extra $600,000 is interest; it is not "free". Whenever a seller offers a choice between a cash price and a payment plan, compute the implied rate and compare it with your own cost of capital.

### 3.3.3 A reference table of annuity factors

Table 3.1 shows ordinary annuity factors A(r, n) for several rates and horizons. Such tables were once indispensable; today a calculator or spreadsheet does the same work, but the table is useful for building intuition about how factors grow with horizon and shrink with rate.

**Table 3.1 – Present value annuity factors A(r, n) = [1 − (1 + r)^(−n)] / r**

| n (years) | r = 4% | r = 6% | r = 8% | r = 10% | r = 12% |
|---|---|---|---|---|---|
| 5 | 4.4518 | 4.2124 | 3.9927 | 3.7908 | 3.6048 |
| 10 | 8.1109 | 7.3601 | 6.7101 | 6.1446 | 5.6502 |
| 20 | 13.5903 | 11.4699 | 9.8181 | 8.5136 | 7.4694 |
| 30 | 17.2920 | 13.7648 | 11.2578 | 9.4269 | 8.0552 |
| ∞ (perpetuity 1/r) | 25.0000 | 16.6667 | 12.5000 | 10.0000 | 8.3333 |

Two lessons stand out. First, at high discount rates the distant future barely matters: at 12%, a 30-year annuity is already 96.7% of the value of a perpetuity. Second, at low rates the tail is long: at 4% the same 30-year annuity captures only 69% of the perpetuity value. This explains why long-duration assets (infrastructure, real estate, growth equities) are so sensitive to interest rates. We return to this in Chapter 4 under the heading of duration.

## 3.4 Perpetuities and Growing Perpetuities

### 3.4.1 The level perpetuity

A **perpetuity** is an annuity that never ends. Although no cash flow lasts forever, the model is a good approximation for preferred shares, endowment payouts, some government bonds historically (the British consol), and the terminal value of a business. The present value of a perpetuity paying C at the end of each period, beginning one period from now, is

```
PV = C / r
```

This follows from the annuity formula by letting n → ∞, since (1 + r)^(−n) → 0. It can also be seen intuitively: to receive C each year forever, one needs a principal P that earns exactly C at rate r, so P × r = C. The principal is never touched.

### 3.4.2 The growing perpetuity

If the payment grows at a constant rate g per period, with the first payment C₁ one period from now, the present value is the **Gordon growth formula**:

```
PV = C₁ / (r − g)        valid only if r > g
```

The requirement r > g is essential. If growth exceeded the discount rate, the present value would be infinite and the formula meaningless; in practice it signals that a perpetual growth assumption is unrealistic. For a firm, long-run perpetual growth above the economy's nominal growth rate is untenable, so g in terminal-value calculations should typically be bounded by long-run nominal GDP growth.

Note carefully which payment appears in the numerator: C₁, the payment *next* period, not the payment just received. A common error is to use C₀ without multiplying by (1 + g).

**Example 3.4 – Perpetuity and growing perpetuity.** A university endowment fund wishes to finance a chair that costs $90,000 per year, paid at the end of each year, starting next year. The fund expects to earn 7.5%.

*(a) Level cost.* PV = $90,000 / 0.075 = **$1,200,000**.

*(b) Cost that grows 3% a year* (with the first payment still $90,000). PV = $90,000 / (0.075 − 0.03) = $90,000 / 0.045 = **$2,000,000**.

*Interpretation:* allowing the chair's cost to keep pace with 3% inflation raises the required gift by two-thirds ($800,000). In perpetuity problems the denominator is the *spread* r − g, so small changes in either input move the value dramatically. If g rose to 4.5%, the denominator would fall to 0.03 and the required fund would grow to $3,000,000. Sensitivity to the spread is why terminal values in discounted cash flow models deserve particular scrutiny.

## 3.5 Growing Annuities

### 3.5.1 Formula and logic

Many real cash flows grow for a finite period: a ten-year royalty indexed to sales, a salary profile that rises with experience, a lease with annual escalators. A **growing annuity** pays C₁ at date 1, C₁(1 + g) at date 2, and so on up to C₁(1 + g)^(n−1) at date n. Its present value is

```
PV = [C₁ / (r − g)] × [1 − ((1 + g)/(1 + r))^n]
```

The formula remains valid when r < g (the bracket and the leading term are then both negative and the product is positive), and when r = g the value is simply n × C₁ / (1 + r). The bracket can be read as "perpetuity value minus the value of the perpetuity's tail beyond n", exactly as in the level case.

The same idea gives the future value of a growing annuity at date n: PV × (1 + r)^n.

### 3.5.2 Step-by-step check

**Example 3.5 – A growing annuity.** A franchise agreement will pay Harbor Ridge royalties of $120,000 in year 1, growing 5% per year, for six years. The discount rate is 10%. Value the stream.

*Step 1 (formula).* C₁ / (r − g) = $120,000 / 0.05 = $2,400,000.
*Step 2.* ((1 + g)/(1 + r))⁶ = (1.05 / 1.10)⁶ = 0.954545⁶ = 0.756449.
*Step 3.* PV = $2,400,000 × (1 − 0.756449) = $2,400,000 × 0.243551 = **$584,522.27**.

*Step 4 (cross-check by discounting each year):*

| Year | Cash flow | Discount factor at 10% | Present value |
|---|---|---|---|
| 1 | $120,000.00 | 0.909091 | $109,090.91 |
| 2 | $126,000.00 | 0.826446 | $104,132.23 |
| 3 | $132,300.00 | 0.751315 | $99,398.95 |
| 4 | $138,915.00 | 0.683013 | $94,880.81 |
| 5 | $145,860.75 | 0.620921 | $90,568.05 |
| 6 | $153,153.79 | 0.564474 | $86,451.32 |
| **Total** | | | **$584,522.27** |

The two methods agree, which is the best advice for any new formula: verify it once by brute force. Note how the present values still decline over time even though the cash flows rise, because the discount rate (10%) exceeds the growth rate (5%).

## 3.6 Compounding Frequency and the Effective Annual Rate

### 3.6.1 Stated rates versus effective rates

Interest rates are quoted in many ways, and the quoted number is often not the rate you actually earn or pay over a year. A **stated rate** (also called the annual percentage rate, APR, or nominal annual rate) is a convention: it is the periodic rate multiplied by the number of periods in a year. A credit card that charges 1.5% per month has an APR of 18%. But it does not charge 18% per year; because interest is added every month and then itself earns interest, the true annual cost is higher.

The **effective annual rate (EAR)** is the rate that, compounded once per year, produces the same growth as the stated rate compounded m times per year:

```
EAR = (1 + APR/m)^m − 1
```

where m is the number of compounding periods per year. The periodic rate is APR / m. Always convert to an EAR before comparing any two rates with different compounding frequencies, and always use a periodic rate that matches the cash-flow frequency when valuing a stream.

### 3.6.2 Continuous compounding

As m grows without bound, (1 + APR/m)^m approaches e^APR. With **continuous compounding**:

```
FV = PV × e^(r × t)        EAR = e^r − 1        PV = FV × e^(−r × t)
```

Continuous compounding is mainly a mathematical convenience. It appears in option pricing (Black-Scholes), in log returns and in theoretical models where growth is treated as a flow. Because e^r exceeds any discrete compounding, it is the upper bound of the EAR for a given stated rate: the gain from moving from daily to continuous compounding is negligible in practice.

**Example 3.6 – EAR under different compounding conventions.** A bank advertises a stated annual rate of 12%. Compute the EAR for various compounding frequencies and the value of $1,000 after five years under annual and continuous compounding.

*Step 1.* Apply EAR = (1 + 0.12/m)^m − 1.
- Annual (m = 1): 1.12 − 1 = 12.0000%.
- Semi-annual (m = 2): (1.06)² − 1 = 12.3600%.
- Quarterly (m = 4): (1.03)⁴ − 1 = 12.5509%.
- Monthly (m = 12): (1.01)¹² − 1 = 12.6825%.
- Daily (m = 365): (1 + 0.12/365)^365 − 1 = 12.7475%.
- Continuous: e^0.12 − 1 = 12.7497%.

*Step 2.* Five-year values of $1,000: annual compounding gives 1,000 × 1.12⁵ = $1,762.34; continuous compounding gives 1,000 × e^0.60 = $1,822.12.

**Table 3.2 – Effect of compounding frequency on a 12% stated annual rate**

| Compounding | Periods per year (m) | Periodic rate | EAR |
|---|---|---|---|
| Annual | 1 | 12.0000% | 12.0000% |
| Semi-annual | 2 | 6.0000% | 12.3600% |
| Quarterly | 4 | 3.0000% | 12.5509% |
| Monthly | 12 | 1.0000% | 12.6825% |
| Daily | 365 | 0.0329% | 12.7475% |
| Continuous | ∞ | n/a | 12.7497% |

The table shows diminishing returns to more frequent compounding: the jump from annual to semi-annual adds 36 basis points, from monthly to daily only 7, and from daily to continuous barely 0.2.

### 3.6.3 Going backwards: from EAR to a periodic rate

Often the problem runs the other way. Suppose a financial model requires a monthly discount rate and the known annual cost of capital is an EAR of 10%. The correct monthly rate is not 10% / 12 = 0.8333%; it is the rate that compounds to 10% over twelve months:

```
r_monthly = (1 + EAR)^(1/12) − 1 = 1.10^(1/12) − 1 = 0.7974%
```

The corresponding stated annual rate, compounded monthly, is 12 × 0.7974% = 9.5690%. The difference between 9.57% and 10% is real money on a large book of loans. An analyst who divides 10% by 12 and then compounds will overstate the effective cost by about 47 basis points (10.4713% instead of 10.0000%).

### 3.6.4 Rates that are not annual: the APR trap

Regulators in many countries require lenders to disclose an APR, but the definition varies by jurisdiction and product, and APR typically does not capture compounding. Payday-style loans illustrate the trap: a fee of $15 per $100 borrowed for two weeks is a 15% two-week rate. Quoted as an APR it is 15% × 26 = 390%; but as an EAR it is 1.15²⁶ − 1, a number in the several-thousand-percent range. Borrowers who focus on the "15%" fee underestimate the cost by a very wide margin, and managers who run revolving trade-credit terms can make the same mistake in a milder form.

The same logic applies to trade credit terms. A supplier offering "2/10, net 30" (a 2% discount if paid within 10 days, otherwise the full amount due in 30 days) is effectively lending at a rate of 2/98 = 2.0408% for 20 days. As an EAR that is (1.020408)^(365/20) − 1 ≈ 44.6%. For any firm with access to a bank loan at 10% or less, taking the discount is a far better use of cash than paying on day 30. Treasurers should therefore treat early-payment discounts as an investment opportunity with a very high return.

## 3.7 Loan Amortization

### 3.7.1 The level-payment (annuity) loan

Most consumer and commercial term loans are **amortizing**: each payment covers the interest accrued since the last payment plus a portion of the principal, so the balance falls to zero by maturity. The standard design is a level-payment loan in which every instalment is the same. Because the payments form an annuity whose present value equals the amount borrowed, we can solve for the payment directly:

```
Payment = Loan × r / [1 − (1 + r)^(−n)]
```

where r is the periodic rate (APR divided by payments per year) and n is the total number of payments. In each period:

```
Interest_t  = Balance_(t−1) × r
Principal_t = Payment − Interest_t
Balance_t   = Balance_(t−1) − Principal_t
```

Early payments consist mostly of interest, and later payments mostly of principal, because interest is charged on the declining balance. The **outstanding balance** after k payments equals the present value of the remaining payments, which gives a closed form that avoids building the entire table:

```
Balance_k = Payment × [1 − (1 + r)^(−(n−k))] / r
```

An equivalent forward-looking form is Balance_k = Loan × (1 + r)^k − Payment × [(1 + r)^k − 1] / r.

**Example 3.7 – A 30-year mortgage-style loan.** Harbor Ridge finances a $300,000 building improvement with a 30-year loan at a stated rate of 6%, compounded and paid monthly. (a) Compute the payment. (b) Show the first three months of the schedule. (c) Find the balance after five years. (d) Compare with a 15-year loan at the same rate.

*(a) Payment.* Periodic rate r = 0.06 / 12 = 0.5% = 0.005; n = 360.
(1.005)⁻³⁶⁰ = 0.166042; 1 − 0.166042 = 0.833958; annuity factor = 0.833958 / 0.005 = 166.7916.
Payment = $300,000 / 166.7916 = **$1,798.65**.

*(b) First three months.*

| Month | Beginning balance | Interest (0.5%) | Principal | Ending balance |
|---|---|---|---|---|
| 1 | $300,000.00 | $1,500.00 | $298.65 | $299,701.35 |
| 2 | $299,701.35 | $1,498.51 | $300.14 | $299,401.21 |
| 3 | $299,401.21 | $1,497.01 | $301.65 | $299,099.56 |

Only about 17% of the first payment reduces the balance. Principal repayment accelerates slowly, because each month the interest portion falls by 0.5% of the previous month's principal portion, and the principal portion rises by exactly that amount.

*(c) Balance after five years (k = 60).* Remaining payments: 300. Using the forward form: 300,000 × 1.005⁶⁰ − 1,798.65 × (1.005⁶⁰ − 1) / 0.005. With 1.005⁶⁰ = 1.348850, the first term is $404,655.0 and the second is 1,798.65 × 69.7700 = $125,491.9, so the balance = **$279,163.07** (to the cent, using unrounded payment). After 60 payments totalling $107,919 the borrower has repaid only $20,837 of principal.

*(d) 15-year comparison.* n = 180: payment = $300,000 × 0.005 / (1 − 1.005⁻¹⁸⁰) = **$2,531.57**. Total interest on the 30-year loan is 360 × $1,798.65 − $300,000 = **$347,514.57**; on the 15-year loan it is 180 × $2,531.57 − $300,000 = **$155,682.69**. The shorter loan raises the monthly payment by $732.92 (41%) yet saves $191,831.88 in interest.

### 3.7.2 Alternative repayment structures

Level payments are not the only design. A comparison of the common structures appears in Table 3.3.

**Table 3.3 – Common loan repayment structures**

| Structure | Payment pattern | Balance behaviour | Typical use | Key feature |
|---|---|---|---|---|
| Level-payment amortizing | Equal instalments | Declines slowly, then faster | Mortgages, auto loans, equipment loans | Predictable cash flow; interest-heavy early payments |
| Equal principal | Equal principal plus falling interest | Declines linearly | Some corporate term loans | Higher initial payments; lower total interest |
| Interest-only (bullet) | Interest each period; principal at maturity | Constant until maturity | Bonds, bridge loans | Refinancing risk at maturity |
| Balloon | Small level payments; large final payment | Declines partially | Commercial real estate | Payment looks affordable; final lump sum is large |
| Negative amortization | Payment below interest | Balance rises | Certain flexible-payment loans | Balance can exceed the original loan |

The firm's choice depends on cash-flow timing. A project with front-loaded cash needs a bullet or balloon; a project with steady cash flows suits level payments. In all cases the *present value of payments at the loan's own contract rate equals the amount borrowed*, so the structures differ in timing and risk, not in the rate charged. The comparison that matters between two lenders is their EAR (or, more precisely, the internal rate of return on the full set of cash flows including fees).

### 3.7.3 Why amortization matters to managers

Three practical implications deserve attention.

- **Prepayment value.** A borrower deciding whether to prepay after k payments needs only the outstanding balance, which is the present value of the remaining payments at the contract rate. If the borrower can refinance at a lower rate, the saving is the difference between the remaining payments valued at the old and new rates, less transaction costs.
- **Interest deductibility and tax timing.** Because interest declines over time, the tax shield from interest deductions is front-loaded. A schedule is therefore necessary for after-tax analysis of debt financing.
- **Covenants and balance forecasts.** Lenders' covenants often reference leverage ratios; the amortization schedule yields the debt balance on each reporting date, which should feed the firm's financial plan.

## 3.8 Inflation: Real versus Nominal Values

### 3.8.1 Nominal and real quantities

A **nominal** cash flow is measured in currency units of the date on which it occurs. A **real** cash flow is measured in constant purchasing power, that is, in currency units of some base date. If inflation is 3% a year, a nominal payment of $1,030 a year from now is equivalent to a real payment of $1,000 in today's money. Similarly, a **nominal interest rate** is the percentage growth in currency units, while the **real interest rate** is the percentage growth in purchasing power.

The link between them is the **Fisher equation** (after the economist Irving Fisher):

```
1 + nominal rate = (1 + real rate) × (1 + inflation rate)
real rate = (1 + nominal) / (1 + inflation) − 1
```

A common approximation is real ≈ nominal − inflation, which is adequate when both are small but becomes inaccurate for high inflation. With a nominal rate of 8% and inflation of 3%, the exact real rate is 1.08 / 1.03 − 1 = 4.854%, versus the approximation of 5.00%. At 80% nominal and 60% inflation the approximation would give 20%, while the exact figure is 12.5%.

Note that the Fisher equation is stated in terms of *expected* inflation when applied to forward-looking decisions. Realised real returns differ from expected real returns by the inflation surprise: if inflation turns out higher than expected, the holder of a fixed nominal claim loses purchasing power, and the borrower gains.

### 3.8.2 The golden rule: match cash flows and discount rates

The most frequent error in applied finance is mixing real and nominal quantities. The rule is simple:

- **Nominal cash flows must be discounted at nominal rates.**
- **Real cash flows must be discounted at real rates.**

If done consistently, both approaches give the same present value. Mixing them (for example, discounting cash flows that include inflation at a real rate) overstates value, and discounting real cash flows at a nominal rate understates it. In project analysis, the choice usually depends on which is easier to forecast. If revenues and costs are mostly contractual or fixed in nominal terms (loan payments, fixed-price leases), work in nominal terms. If they track the general price level (many utilities, indexed pensions), a real analysis is simpler. Importantly, depreciation tax shields are fixed in nominal terms, since tax depreciation is based on historical cost, so models that otherwise use real cash flows must adjust the tax shield.

**Example 3.8 – Real versus nominal consistency.** Harbor Ridge's engineers project that a new product line will generate after-tax cash flows of $500,000 per year in *today's* purchasing power for the next ten years (a real annuity). Expected inflation is 3% and the nominal required return is 8%.

*Approach 1: real.* Real rate = 1.08 / 1.03 − 1 = 4.8544%. Ten-year annuity factor = (1 − 1.048544⁻¹⁰) / 0.048544. We have 1.048544¹⁰ = 1.606443, so 1.048544⁻¹⁰ = 0.622491 and the factor = 0.377509 / 0.048544 = 7.77664. PV = $500,000 × 7.77664 = **$3,888,319**.

*Approach 2: nominal.* Nominal cash flow in year t = $500,000 × 1.03ᵗ, a growing annuity with C₁ = $515,000 and g = 3% at r = 8%:
PV = [515,000 / (0.08 − 0.03)] × [1 − (1.03/1.08)¹⁰] = 10,300,000 × [1 − 0.953704¹⁰]. Now 0.953704¹⁰ = 0.622491, so PV = 10,300,000 × 0.377509 = **$3,888,319**.

The two approaches agree because they are the same calculation seen through different units. If the analyst had mistakenly discounted the real $500,000 stream at the nominal 8%, the result would be $500,000 × 6.7101 = $3,355,041, an understatement of about 14%; if the analyst had inflated the cash flows and then discounted at 4.85%, the value would be overstated.

### 3.8.3 Inflation and long-term commitments

Inflation transforms the economics of long-dated promises. A fixed-nominal pension of $1,500 per month, paid starting in 25 years, will buy far less than $1,500 does today: at 3% inflation, the purchasing power at the start of retirement is $1,500 / 1.03²⁵ = $716.4 in today's money, a loss of more than half. A pension indexed to inflation, in contrast, preserves purchasing power, and costs substantially more to fund. Any firm making a long-term nominal or indexed commitment must decide whether to fund in real or nominal terms, and must match its assets accordingly; we return to this matching principle in Chapter 4 on inflation-linked bonds.

Table 3.4 summarises how a $100 balance grows in nominal and real terms under different assumptions over 20 years.

**Table 3.4 – Nominal and real value of $100 invested for 20 years at 6% nominal**

| Annual inflation | Nominal value at year 20 | Real value (today's money) | Real annual return |
|---|---|---|---|
| 0% | $320.71 | $320.71 | 6.00% |
| 2% | $320.71 | $215.83 | 3.92% |
| 4% | $320.71 | $146.37 | 1.92% |
| 6% | $320.71 | $100.00 | 0.00% |
| 8% | $320.71 | $68.80 | −1.85% |

The nominal balance is unaffected by inflation, but its purchasing power is not. With inflation equal to the nominal return, twenty years of "growth" leave the investor exactly where they started in real terms.

### 3.8.4 Putting it together: applications

The tools of this chapter combine naturally in practical problems. Three are worth working through.

**Example 3.9 – Retirement funding with real cash flows.** An employee aged 35 wants to retire at 65 and receive a real income of $80,000 per year (in today's purchasing power) for 25 years, with the first withdrawal one year after retirement. During retirement the portfolio earns a real return of 3%; during the 30 working years it earns a real return of 4%. How much must be saved each year (real, year-end) during the working years?

*Step 1 – Required fund at age 65.* Real annuity factor at 3% for 25 years = (1 − 1.03⁻²⁵) / 0.03 = (1 − 0.477606) / 0.03 = 17.4131. Required fund = $80,000 × 17.4131 = **$1,393,051.82**.
*Step 2 – Savings.* Future value factor at 4% for 30 years = (1.04³⁰ − 1) / 0.04 = (3.243398 − 1) / 0.04 = 56.0849. Annual saving = $1,393,051.82 / 56.0849 = **$24,838.2** in real terms.

Because the saving is real, it rises with inflation: if inflation is 3%, the first year's nominal saving is about $25,583 (that is, $24,838 × 1.03). The employee saves roughly 31% of the targeted annual retirement income each year, a sobering ratio that illustrates the cost of a 25-year payout stage. If the retirement withdrawals are made at the start of each year (annuity due), the required fund rises by 3% to $1,434,843.37.

**Example 3.10 – Rebate versus cheap financing.** Harbor Ridge is buying a $25,000 delivery vehicle. The dealer offers either (i) 0% financing over 48 months (monthly payments of $520.83) or (ii) a $3,000 rebate with a bank loan at 6% stated, monthly compounding, for 48 months on the remaining $22,000. Which is cheaper?

*Option (ii) payment.* r = 0.5% per month; annuity factor = (1 − 1.005⁻⁴⁸) / 0.005 = 42.5803; payment = $22,000 / 42.5803 = **$516.67**.
*Comparison.* The rebate option has the lower monthly payment ($516.67 versus $520.83) and a total outlay of $24,800.19 versus $25,000. Even with a nominal borrowing rate of 6%, the discounted value of the 0% financing is only $520.83 × 42.5803 = $22,177.25, a saving of $2,822.75 on a $25,000 price, which is less than the $3,000 rebate. The rebate wins by $177.25 in present-value terms. The lower the loan rate, the less the 0% offer is worth; if the buyer's loan rate were 3%, the 0% option would save even less than at 6%. But if the buyer's rate were 9% (0.75% per month), the 0% payments would have a present value of $520.83 × 40.1848 = $20,929.57, a saving of $4,070.43, which exceeds the rebate, and the verdict would reverse. The decision therefore depends on the buyer's own borrowing rate; zero-percent financing is valuable only to the extent that the alternative rate is high.

**Example 3.11 – Deferred annuity.** A licence agreement entitles Harbor Ridge to 20 annual payments of $30,000, the first arriving at the end of year 6. The discount rate is 8%.

*Step 1.* Value at the end of year 5 (one period before the first payment): $30,000 × A(8%, 20) = $30,000 × 9.818147 = $294,544.42.
*Step 2.* Discount five years: $294,544.42 / 1.469328 = **$200,461.98**.

The common mistake is to discount by six years, applying the annuity formula as though it valued the stream at date 0 and then also discounting from the date of the first payment. Remember: the annuity formula always values the stream one period before the first payment.

### 3.8.5 Returning to the vignette

We can now answer Marisol's three questions. For the machining cells (Example 3.3), the instalment plan's implied financing rate is 12.59%, so paying cash is preferable if the firm can borrow at a materially lower rate. For the pension, the $1,500 monthly benefit over twenty years is an annuity whose present value at retirement, at a 6% stated rate with monthly compounding (0.5% per month), is $1,500 × (1 − 1.005⁻²⁴⁰) / 0.005 = $1,500 × 139.5808 = $209,371; discounted a further 25 years at the same rate, this is a funding target of about $46,892 per employee today if the benefit is fixed in nominal terms, and considerably more if indexed. For the loans, the treasurer should compare EARs (not stated rates) and fully account for the repayment profile: the equal-principal structure has lower total interest but higher early payments, so it is cheaper only if the firm can comfortably carry the early cash burden.

## Case Study: Kestrel Freight and the Structured Settlement

*Illustrative case. Kestrel Freight is a fictional regional trucking company.*

Kestrel Freight operates 140 tractor units across the central part of the country. Two years ago, a paving contractor's subsidence damaged Kestrel's main depot, and after a long dispute Kestrel's insurer offered a settlement of $3.2 million. The settlement can be taken in either of two forms. Under the **lump-sum option**, Kestrel receives $3.2 million today. Under the **structured option**, the insurer pays $410,000 at the end of each of the next ten years, with the amount growing by 2% a year thereafter for an additional ten years (that is, the payment in year 11 is $410,000 × 1.02 and so on through year 20, after being level at $410,000 for years 1 to 10).

The chief financial officer, Dariusz Wen, has three concerns. First, Kestrel's board is divided. One director argues that "twenty payments totalling nearly $8.7 million is obviously better than $3.2 million." Another argues that the lump sum can be invested immediately in new tractors that earn a return on investment of 14%. A third points out that the lump sum would also let Kestrel retire a term loan carrying a stated rate of 9% compounded monthly, whose outstanding balance is $1.1 million with 60 equal monthly payments remaining.

Second, Dariusz worries about uncertainty. The insurer is rated investment grade, but it is not risk-free; the structured payments are claims against the insurer, and a failure in year 12 would leave Kestrel with an unpaid stream. Kestrel's treasury team suggests that a discount rate of 8% is appropriate for the insurer's payments, compared with 14% for the return on tractors, which are riskier. It reminds the board that the right discount rate depends on the risk of the cash flows being valued, not on the use to which the money is put.

Third, the payments are in nominal dollars. Kestrel's fuel and labour costs have been rising by about 3% annually, and the CFO wishes to know the settlement's value in purchasing-power terms. He also wants to compare the settlement's implied yield with the bank's lending rate of 6.5% (EAR) on an equipment loan, to determine whether taking the lump sum and borrowing less is better than taking the structured payments and borrowing more.

Dariusz asks the analysts to prepare a recommendation. The analysts note that the valuation is a stack of the building blocks in this chapter. Years 1 to 10 form a level ordinary annuity. Years 11 to 20 form a growing annuity that is deferred by ten years, so it must be valued as of year 10 and then discounted. The term loan is an amortizing loan for which the outstanding balance, the monthly payment, and the effective annual rate must be computed. The 3% inflation figure allows the nominal flows to be converted to real terms by using the Fisher relationship. Finally, the analysts must decide which discount rate to use and justify the choice.

The analysts also point out two further complications. The structured payments are taxed as received, whereas the lump sum may be taxed at once and then reinvested, so an after-tax comparison would require tax rates not given in the offer. And the lump sum eliminates the counterparty risk but exposes Kestrel to reinvestment risk, since the 14% return on new tractors is a forecast, not a promise. Their recommendation, they say, should therefore show how the answer changes as the discount rate moves between 6% and 12%.

**Discussion questions**

1. Value the structured option at discount rates of 6%, 8% and 12%, treating years 1 to 10 as a level annuity and years 11 to 20 as a deferred growing annuity. At what approximate discount rate would Kestrel be indifferent between the two options? What does the break-even rate say about the insurer's offer?
2. Evaluate the director's claim that "twenty payments totalling nearly $8.7 million is obviously better than $3.2 million." What is wrong with comparing undiscounted totals, and what does the comparison look like once the cash flows are discounted at the rate the treasury team recommends?
3. Compute the monthly payment on the term loan and its EAR. If Kestrel took the lump sum and used part of it to repay the loan in full, what rate of return would it be earning on the repayment, and how does it compare with the 8% and 14% discount rates under discussion?
4. Restate the structured option in real terms using 3% inflation. What does the real value of the year-20 payment suggest about the insurer's offer, and how should the board's view of the "growing" payments change?

## Key Takeaways

- Money has a time value because of opportunity cost, inflation and risk; the discount rate summarises all three, and cash flows at different dates can be compared only after converting them to a common date.
- PV = FV / (1 + r)^n and FV = PV × (1 + r)^n are the foundations; every other formula in this chapter is a shortcut for summing discounted cash flows.
- An ordinary annuity is worth C × [1 − (1 + r)^(−n)] / r, valued one period before the first payment; an annuity due is worth (1 + r) times as much; a deferred annuity needs a second discounting step.
- A perpetuity is worth C / r, and a growing perpetuity C₁ / (r − g), requiring r > g; valuation is highly sensitive to the spread r − g, so terminal-value assumptions deserve particular scrutiny.
- A growing annuity of finite life is the perpetuity value minus the value of its tail, PV = [C₁ / (r − g)] × [1 − ((1 + g)/(1 + r))^n]; verify unfamiliar formulas by brute-force discounting once.
- Always compare rates on an effective annual basis. EAR = (1 + APR/m)^m − 1, and the periodic rate for a given EAR is (1 + EAR)^(1/m) − 1, not EAR / m.
- A level-payment loan has constant instalments but a changing mix: interest is charged on the declining balance, so early payments are mostly interest. The outstanding balance equals the present value of remaining payments.
- Seller financing "at no interest" and early-payment discounts embed implicit interest rates, often very high; compute the implied rate and compare it with the firm's own cost of funds.
- Real rate = (1 + nominal) / (1 + inflation) − 1. Discount nominal cash flows at nominal rates and real cash flows at real rates; mixing them is one of the commonest and costliest errors in valuation.
- Long-dated commitments are dominated by the discount rate and by inflation; small changes in either can change present values by tens of percent, so sensitivity analysis is part of the answer, not an add-on.

## Review Questions

1. Explain the three reasons that a dollar today is worth more than a dollar in the future. Which of these would still operate in an economy with no inflation and no default risk?
2. Why can a decision-maker compare two cash flows only after moving them to the same date? Does the choice of that date affect the ranking of alternatives?
3. Describe the difference between an ordinary annuity, an annuity due and a deferred annuity. For each, state where the annuity formula places the value of the stream.
4. Why must the discount rate exceed the growth rate in the growing perpetuity formula? What does a model that violates the condition imply about its assumptions?
5. A colleague says that a 30-year annuity at 12% is "practically a perpetuity", whereas at 4% it is not. Explain, and discuss the implication for the interest-rate sensitivity of long-duration assets.
6. Distinguish a stated annual rate, a periodic rate and an effective annual rate. Why is dividing an EAR by twelve an incorrect way to obtain a monthly rate?
7. Why does a supplier's "2/10, net 30" credit term imply a very high annual interest rate? Under what circumstances should a firm decline the discount?
8. In a level-payment amortizing loan, why do early payments contain more interest than later ones? How would the interest and principal pattern differ under an equal-principal loan?
9. State the Fisher equation. Why is the approximation "real ≈ nominal − inflation" less reliable at high inflation, and what is the consequence of discounting real cash flows at a nominal rate?
10. A manager argues that a 0% financing offer is "free money". Describe how to test the claim using time-value tools, and explain why the answer depends on the buyer's own borrowing rate.

## Problems

1. **Future value.** A company deposits $15,000 into an account that earns 5.5% per year, compounded annually. What will the balance be after 12 years?
2. **Annuity.** A lease requires payments of $25,000 at the end of each year for eight years. At a discount rate of 9%, compute (a) the present value of the lease, and (b) the present value if the payments are made at the start of each year instead.
3. **Perpetuities.** A preferred share pays $45,000 per year forever, starting one year from now, and the required return is 6%. (a) Compute its value. (b) If the payment instead starts at $45,000 next year and grows 2% a year forever, compute its value.
4. **Growing annuity.** A contract pays $50,000 at the end of year 1, growing at 4% per year, for ten years. Compute its present value at a discount rate of 9%.
5. **EAR.** (a) Compute the EAR of a loan with a stated rate of 9% compounded quarterly. (b) A lender wishes to offer an EAR of 8% with monthly compounding. What stated annual rate (APR) should it quote?
6. **Amortization.** A $200,000 loan is repaid with level monthly payments over 20 years at a stated rate of 5%, compounded monthly. Compute (a) the monthly payment, (b) the balance after 10 years, and (c) the total interest paid over the life of the loan.
7. **Real and nominal.** The nominal interest rate is 6.5% and expected inflation is 2.8%. (a) Compute the exact real interest rate. (b) What is $100,000 received in 10 years worth in today's purchasing power? (c) What is the purchasing power, in today's money, of $50,000 invested today at 6.5% for 10 years?
8. **Retirement planning.** A manager wants to receive $40,000 per year in real terms for 20 years after retirement (first withdrawal one year after retirement). The real return is 3% during retirement and 4% before retirement, with 30 years to go. Compute (a) the fund needed at retirement, (b) the real annual saving needed over 30 years, and (c) the single sum that would have to be invested today to reach the same fund.

### Answers to Selected Problems

1. $15,000 × 1.055¹² = **$28,518.11**.
2. (a) $25,000 × A(9%, 8) = $25,000 × 5.534819 = **$138,370.48**. (b) Annuity due: × 1.09 = **$150,823.82**.
3. (a) $45,000 / 0.06 = **$750,000**. (b) $45,000 / (0.06 − 0.02) = **$1,125,000**.
4. PV = [$50,000 / 0.05] × [1 − (1.04/1.09)¹⁰] = $1,000,000 × 0.374729 = **$374,728.82**.
5. (a) (1.0225)⁴ − 1 = **9.3083%**. (b) Monthly rate = 1.08^(1/12) − 1 = 0.64340%; APR = 12 × 0.64340% = **7.7208%**.
6. (a) Payment = **$1,319.91**. (b) Balance after 120 payments = **$124,443.04**. (c) Total interest = 240 × $1,319.91 − $200,000 = **$116,778.75**.
7. (a) 1.065 / 1.028 − 1 = **3.5992%**. (b) $100,000 / 1.028¹⁰ = **$75,869.79**. (c) $50,000 × (1.065 / 1.028)¹⁰ = **$71,209.01**.
8. (a) $40,000 × A(3%, 20) = $40,000 × 14.8775 = **$595,098.99**. (b) $595,098.99 / FVA(4%, 30) = $595,098.99 / 56.0849 = **$10,610.67** per year. (c) $595,098.99 / 1.04³⁰ = **$183,480.13**.
