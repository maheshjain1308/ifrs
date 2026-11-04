# Chapter 14: Private Equity Fund Economics

## Learning Objectives

After studying this chapter you should be able to:

- Describe the structure of a private equity fund (commitments, capital calls, fee base, life) and compute management fees and total fee drag under common fee schedules.
- Build a distribution waterfall with return of capital, a compounding preferred return (hurdle), a GP catch-up, and carried interest, under both European (whole-fund) and American (deal-by-deal) conventions, including clawbacks.
- Explain the J-curve and calculate IRR, MOIC, DPI, RVPI, and TVPI, recognizing what each measure rewards and hides.
- Compute a Kaplan-Schoar public market equivalent and interpret it alongside IRR.
- Analyze GP/LP alignment mechanisms and evaluate a GP-led continuation fund from the perspective of selling LPs, rolling LPs, new investors, and the GP.
- Identify the major pitfalls in measuring private equity performance: subscription-line distortions, stale valuations, vintage effects, survivorship bias, and fee layering.

## Opening Vignette

*(Illustrative company; all names and figures are fictional.)*

Rosalind Park is the chief investment officer of the Millbrook Teachers' Retirement System, a pension fund with $14 billion in assets and a 12% allocation to private markets. The investment committee meets on Thursday to consider a $150 million commitment to Granite Peak Partners Fund IV, a $2 billion buyout fund.

Granite Peak's marketing deck is impressive. Its three previous funds report net IRRs of 24%, 21%, and 19%, "top-quartile" status, and a gross multiple of 2.4x on realized investments. Rosalind's analyst, Tomas, has done his homework and returns with uncomfortable questions. The 21% IRR for Fund III includes a two-year period in which investments were bridged with a credit line, so that LPs' contributions were delayed. The reported "net" multiple of 1.9x includes 35% of value still held as unrealized NAV, which the GP itself marks. The fund's fee base steps down only at the end of the investment period, and transaction fees paid by portfolio companies are offset only 80% against management fees. Meanwhile, the S&P-based public benchmark over the same period returned strongly, so the true "excess" return is far less than 21% minus a hurdle rate.

"None of this is fraud," Tomas says. "Every number is accurate. They are just not the numbers that answer your question."

Rosalind's question is simple: *if we commit $150 million, how much of the profit will we actually keep, and how does that compare with owning index funds, adjusted for illiquidity and risk?* To answer it she must reconstruct the fund from first principles: what the LPs pay, in what order the cash is divided, how timing inflates or deflates the IRR, and where the GP's incentives agree or conflict with her own. This chapter provides that toolkit. It builds on the buyout analysis in Volume 1, Chapter 23 and on the venture fund structure in Chapter 13.

## 14.1 The Private Equity Fund: Structure and Terms

### 14.1.1 The partnership and its documents

A private equity (PE) fund is, like a venture fund, a finite-life limited partnership. Limited partners commit capital; the general partner (GP) manages the fund through a separate management company; and the relationship is governed by the *limited partnership agreement* (LPA). Strategies are conventionally grouped as *buyout* (control acquisitions of mature companies, often with leverage; see Volume 1, Chapter 23), *growth equity* (minority stakes in profitable growing companies), *venture capital* (Chapter 13), *distressed and special situations*, *private credit*, and *real assets* (infrastructure, real estate). The economic mechanics discussed here (fees, hurdle, carry, waterfalls, performance measurement) are common to all, though the parameters differ.

The LPA is a risk-allocation contract. The terms that matter most to economics are:

| Term | Typical feature | Why it matters |
|---|---|---|
| Fund size / commitments | Total capital pledged by LPs | Basis for fees; limits deal size |
| Investment period | 4-6 years from first close | Fees on commitments during this period |
| Term | 10 years plus 1-2 extensions | Sets the horizon for exits and for IRR |
| Management fee | ~1.5-2.0% of commitments, stepping down | Pays the firm regardless of performance |
| Carried interest | ~20% of profits | The GP's performance incentive |
| Preferred return (hurdle) | ~8% compounded annually | LPs get this before the GP shares profit |
| GP catch-up | 50-100% to GP after hurdle | Restores the GP's full 20% share |
| Waterfall type | Whole-fund (European) or deal-by-deal (American) | Determines timing and risk of carry |
| GP commitment | 1-5% of commitments | The GP's "skin in the game" |
| Clawback | GP must return over-distributed carry | Protects LPs under deal-by-deal waterfalls |
| Key-person clause | Suspends investing if named partners leave | Protects against loss of the team |

The numbers are illustrative of market practice and vary widely across strategies and over time; particular funds may differ substantially.

### 14.1.2 The cash flow pattern

LPs commit, GPs call capital, and cash flows back over time. From the LP's viewpoint:

- **Paid-in capital (contributions):** cash actually transferred to the fund, to pay for investments, fees, and expenses.
- **Unfunded commitment:** the portion not yet called; LPs must hold it ready and cannot invest it in illiquid assets.
- **Distributions:** cash returned, from asset sales, dividends, or recapitalizations.
- **Net asset value (NAV):** the GP's estimate of the fair value of the remaining holdings.

The LP's return is computed on contributions and distributions plus the residual NAV, which will be central in Sections 14.4 and 14.7.

## 14.2 Management Fees and Gross-to-Net Returns

### 14.2.1 Fee base and schedule

The management fee is normally set as a percentage of a *fee base*. During the investment period the base is usually *committed capital*; afterward it commonly steps down to *invested capital* (cost of unrealized investments) and/or the percentage falls. The choice of base matters because committed capital is fixed whereas invested capital depends on pacing and realization.

Total fees as a percentage of commitments can be surprisingly large. Two features amplify the effect. First, fees on committed capital mean that the LP pays for money that has not yet been invested. Second, fees are *paid out of LP capital*, so a part of what LPs contribute never reaches a company: the fund must earn more than the fee load on the capital actually invested just to give back the LP's contributions.

Other charges, each a subject of LP negotiation, include:

- **Fund expenses** (legal, audit, administration, and often a portion of the GP's operating costs).
- **Transaction and monitoring fees** paid by portfolio companies to the GP; LPs usually negotiate an *offset* of 80-100% against the management fee.
- **Organizational costs** capped by the LPA.
- **Placement fees** to intermediaries, usually borne by the GP or netted against fees.

**Common mistake.** Comparing funds on "headline" 2% and 20% only. The fee base, step-down, offsets, expense allocation, and hurdle design can shift the net LP return by more than the headline numbers.

### 14.2.2 A complete fund model

To make the economics concrete we build one example fund and follow it through the chapter.

**Example 14.1 – Gross-to-net bridge for a $1,000 million fund.** A buyout fund has $1,000 million of commitments and a ten-year life. Terms: management fee 2.0% of commitments in years 1-5, then 1.5% of the cost basis of unrealized investments (measured at the start of each year) in years 6-10; 20% carry on the whole fund after an 8% compounded preferred return, with a 100% GP catch-up. To simplify, all cash flows occur at year-end (which understates the pref slightly in years of heavy calls) and the GP commitment is ignored.

The fund invests $800 million over five years (the other portion of capital funds fees) and generates gross sales proceeds of $1,700 million, a **gross multiple of 2.125x**:

| Year | Investments | Gross proceeds | Management fee |
|---|---|---|---|
| 1 | 200 | 0 | 20.0 |
| 2 | 200 | 0 | 20.0 |
| 3 | 200 | 40 | 20.0 |
| 4 | 150 | 100 | 20.0 |
| 5 | 50 | 200 | 20.0 |
| 6 | 0 | 300 | 9.6 |
| 7 | 0 | 350 | 7.5 |
| 8 | 0 | 300 | 5.0 |
| 9 | 0 | 250 | 2.9 |
| 10 | 0 | 160 | 1.1 |
| **Total** | **800** | **1,700** | **126.1** |

*Step 1: cost basis for the fee.* Each exit realizes cost equal to proceeds divided by the gross multiple of 2.125. The unrealized cost basis at the end of years 1 to 10 is, in $ millions: 200.0; 400.0; 581.2; 684.1; 640.0; 498.8; 334.1; 192.9; 75.3; 0.0.

*Step 2: fees.* Years 1-5: 2% × 1,000 = **$20.0M** per year, total $100.0M. Year 6: 1.5% × 640.0 = **$9.6M**; year 7: 1.5% × 498.8 = **$7.5M**; year 8: 1.5% × 334.1 = **$5.0M**; year 9: 1.5% × 192.9 = **$2.9M**; year 10: 1.5% × 75.3 = **$1.1M**. Total fees = **$126.1M**, or **12.6% of commitments**.

*Step 3: LP contributions.* Contributions equal investments plus fees: 800 + 126.1 = **$926.1M** (the remaining $73.9M of commitments is never called). Per year: 220.0; 220.0; 220.0; 170.0; 70.0; 9.6; 7.5; 5.0; 2.9; 1.1.

*Step 4: gross IRR.* Treating investment outflows and gross proceeds as the cash flow stream (before fees and carry), the **gross IRR is 18.9%**.

*Step 5: IRR after fees, before carry.* LP contribution and gross proceeds as cash flows give **15.4%**.

*Step 6: net IRR after carry.* Carry (computed in Example 14.4) is $154.8M, leaving LPs with $1,545.2M of distributions on $926.1M contributed: **net TVPI of 1.67x** and a **net IRR of 13.3%**.

| Stage | Multiple | IRR |
|---|---|---|
| Gross (investments to proceeds) | 2.125x | 18.9% |
| After fees (LP contributions to proceeds) | 1,700 / 926.1 = 1.84x | 15.4% |
| After carry (net to LP) | 1,545.2 / 926.1 = 1.67x | 13.3% |

*Step 7: total drag.* The gross profit is 1,700 − 800 = **$900M**. Fees take $126.1M (14.0%), carry takes $154.8M (17.2%), together **$280.9M or 31.2%** of the gross profit. The IRR spread is **5.6 percentage points** (18.9% less 13.3%).

*Conclusion.* A fund with a respectable 2.1x gross multiple delivers a 1.67x net multiple. The fee drag of 3.5 IRR points exists even if the GP adds no value; the further 2.1 points are carry on profits. LPs should always evaluate net-of-fee, net-of-carry cash flows, since gross numbers (often presented in marketing materials for individual deals) are not what the LP receives. ∎

## 14.3 Carry, Hurdles, Catch-Up, and the Waterfall

### 14.3.1 The four tiers

A *distribution waterfall* specifies the order in which cash is divided between the LPs and the GP. The standard "European" (whole-fund) waterfall has four tiers:

1. **Return of capital.** 100% to the LPs until they have received all contributed capital (including capital used for fees and expenses).
2. **Preferred return (hurdle).** 100% to the LPs until they have received a compounded annual return (commonly 8%) on contributed capital, measured from the date of each contribution.
3. **Catch-up.** A share, often 100%, to the GP until the GP has received 20% of the cumulative profit distributed so far (that is, until carry equals 20% of pref plus catch-up).
4. **Carried-interest split.** 80% to the LPs and 20% to the GP thereafter.

With a full catch-up and a profitable fund, the GP ends up with exactly 20% of *total* profits: the hurdle matters for *timing* and for marginal funds, but not for the final split in a successful one. With **no** catch-up (a "hard hurdle"), the GP receives carry only on profit above the hurdle, so its share is below 20% of total profit. The catch-up percentage is therefore a significant economic negotiation.

The hurdle is *not* the same as a minimum return guarantee. It is a threshold that must be cleared before carry begins, and it makes carry resemble a call option on fund profits: strike = contributed capital grown at the hurdle rate.

### 14.3.2 A single-period waterfall

**Example 14.2 – Waterfall with hurdle and catch-up.** An LP contributes **$100 million** which the fund holds for five years before a single distribution. The terms: 8% compounded preferred return, 100% GP catch-up, 20% carry. Compute the division of proceeds of (a) $250 million, (b) $150 million, (c) $120 million.

*Step 1: hurdle amount.* 100 × 1.08^5 = **$146.93M**; the preferred return itself is 146.93 − 100 = **$46.93M**.

*Step 2: catch-up target.* The GP catches up until it holds 20% of profit distributed, i.e. carry = 0.20 × (pref + catch-up), so catch-up = 0.25 × pref = 0.25 × 46.93 = **$11.73M**.

*(a) Proceeds $250M.* Tier 1+2: $146.93M to the LP. Tier 3: $11.73M to the GP. Remaining = 250 − 146.93 − 11.73 = **$91.33M**; LP 80% = $73.07M, GP 20% = $18.27M. Totals: LP = 146.93 + 73.07 = **$220.0M** (2.20x), GP = 11.73 + 18.27 = **$30.0M**, which is exactly 20% of the $150M profit. ✓

*(b) Proceeds $150M.* LP receives the hurdle amount of 146.93. Only 150 − 146.93 = $3.07M is left, which goes to the GP as part of the catch-up (not yet complete). The GP receives **$3.07M**, only **6.1%** of the $50M profit. The LP receives $146.93M (1.47x).

*(c) Proceeds $120M.* Below the hurdle: the LP receives all $120M; the GP receives nothing. The LP has a profit of $20M (3.7% annual return) but the GP gets no carry.

*Step 3: effect of removing the catch-up.* In (a) without a catch-up, the GP receives 20% × (250 − 146.93) = **$20.61M** (13.7% of profit) rather than $30.0M. The catch-up is worth $9.39M to the GP.

*Conclusion.* The hurdle protects LPs from paying carry on mediocre outcomes, but the catch-up largely cancels the hurdle's effect once returns clear it. Note the sharp "cliff": between proceeds of $146.93M and $158.66M (= 146.93 + 11.73) every extra dollar goes entirely to the GP. Such a region creates an incentive for the GP to push exit values just above the hurdle, and for LPs to prefer partial catch-ups (e.g., 50%). ∎

### 14.3.3 European versus American waterfalls and the clawback

In an **American (deal-by-deal)** waterfall, carry is calculated and paid on each realized investment, typically after the LPs have received capital and pref on that investment *and sometimes on previous realized losses*. The GP therefore receives carry earlier, but can be paid carry on early winners that is later not warranted when other investments lose money. To protect LPs, the LPA contains a **clawback**: at the end of the fund, if the GP has received more than 20% of cumulative profit (or more than the fund's hurdle supports), it must return the excess, sometimes limited to after-tax amounts and secured by an escrow or personal guarantees of the partners.

**Example 14.3 – Deal-by-deal carry and clawback.** A small fund invests $50M in Deal A and $50M in Deal B. To isolate the mechanics we use no hurdle and 20% carry. Deal A is sold in year 3 for $150M (profit $100M). Deal B is sold in year 5 for $20M (loss $30M).

*Step 1: American waterfall at year 3.* Profit on A is $100M; carry = 20% × 100 = **$20M** paid to the GP in year 3.

*Step 2: year 5.* Deal B loses $30M. Cumulative profit = 100 − 30 = $70M; total carry earned = 20% × 70 = **$14M**.

*Step 3: clawback.* The GP received $20M but is entitled to only $14M, so it must return **$6M**. If the GP has spent the money or the partners are not creditworthy, LPs bear the loss unless an escrow exists.

*Step 4: compare with a whole-fund (European) waterfall.* Under a whole-fund test the LPs must first receive all $100M contributed for both deals. At year 3 the $150M of proceeds returns that $100M and leaves $50M of profit, so carry is 20% × 50 = **$10M** (not $20M). At year 5 the loss on B reduces cumulative profit to $70M and total carry to $14M, so the GP receives a further **$4M**. No clawback is needed. In year-5 dollars at an 8% discount rate, the American GP's position is 20 × 1.08^2 − 6 = 23.33 − 6 = **$17.3M**, versus 10 × 1.08^2 + 4 = 11.66 + 4 = **$15.7M** for the European GP: a **$1.7M** timing advantage, plus the credit risk that the LPs bear if the clawback is not paid.

*Conclusion.* The American waterfall shifts the risk of subsequent losses from the GP to the LP until the clawback is settled, and gives the GP an incentive for early exits of winners. LPs prefer the European convention for exactly this reason; GPs prefer the American. Many modern funds use a European waterfall, and deal-by-deal variants often include interim clawbacks, escrows of 20-30% of carry distributions, and a requirement to return all capital on realized deals plus allocable fees and any write-downs before carry is paid. ∎

### 14.3.4 The whole-fund waterfall in time

For a multi-year fund we must handle the compounding hurdle on the *outstanding balance* of unreturned capital and unpaid preference. The procedure at each distribution date is:

1. Accrue the 8% hurdle on the opening balance of (unreturned capital + unpaid pref).
2. Add any new contributions.
3. Pay the distribution first to return unreturned capital, then to pay accrued pref (Tier 1/2).
4. If both are fully paid, pay 100% to the GP until it holds 20% of the profit (pref paid plus catch-up), then split 80/20.

**Example 14.4 – The whole-fund waterfall for the $1,000M fund.** Continue Example 14.1. All cash flows are at year-end; the hurdle accrues annually on the opening balance. Using the contributions (220, 220, 220, 170, 70, 9.6, 7.5, 5.0, 2.9, 1.1) and the gross proceeds (0, 0, 40, 100, 200, 300, 350, 300, 250, 160):

| Year | Contribution | Gross proceeds | To LP | To GP (carry) | LP net cash flow | Cumulative LP net cash flow |
|---|---|---|---|---|---|---|
| 1 | 220.0 | 0 | 0.0 | 0.0 | -220.0 | -220.0 |
| 2 | 220.0 | 0 | 0.0 | 0.0 | -220.0 | -440.0 |
| 3 | 220.0 | 40 | 40.0 | 0.0 | -180.0 | -620.0 |
| 4 | 170.0 | 100 | 100.0 | 0.0 | -70.0 | -690.0 |
| 5 | 70.0 | 200 | 200.0 | 0.0 | +130.0 | -560.0 |
| 6 | 9.6 | 300 | 300.0 | 0.0 | +290.4 | -269.6 |
| 7 | 7.5 | 350 | 350.0 | 0.0 | +342.5 | +72.9 |
| 8 | 5.0 | 300 | 226.4 | 73.6 | +221.4 | +294.3 |
| 9 | 2.9 | 250 | 200.6 | 49.4 | +197.7 | +492.0 |
| 10 | 1.1 | 160 | 128.2 | 31.8 | +127.1 | +619.1 |
| **Total** | **926.1** | **1,700** | **1,545.2** | **154.8** | | |

*Step 1: years 1-6, return of capital.* In years 3-6 the entire proceeds go to the LPs as a return of capital. By the end of year 6 the LPs have received 40 + 100 + 200 + 300 = 640 against contributions of 220 × 3 + 170 + 70 + 9.6 = 909.6, leaving **$269.6M** of unreturned capital.

*Step 2: year 7.* The pref accrues 8% on the opening balance (unreturned capital of $269.6M plus unpaid pref of $230.6M), so the year-7 pref balance reaches $270.6M. Of the $350M distribution, the first $277.1M returns the remaining capital (269.6 plus the year-7 contribution of 7.5) and **$72.9M** is applied to preferred return. A pref balance of **$197.7M** (270.6 − 72.9) remains unpaid.

*Step 3: year 8 (the hurdle clears).* The pref balance grows by 8% to $213.5M. Of the $300M distribution: $5.0M returns the new capital, $213.5M pays the remaining pref (cumulative pref paid: 72.9 + 213.5 = **$286.4M**). The leftover is 300 − 218.5 = **$81.5M**. The catch-up needs 0.25 × 286.4 = **$71.6M** to the GP; the last $9.9M is split 80/20: LP $7.9M, GP $2.0M. GP total in year 8 = 71.6 + 2.0 = **$73.6M**; LPs receive 218.5 + 7.9 = **$226.4M**.

*Step 4: years 9-10.* The catch-up is complete, so after returning each year's small contribution, every dollar is split 80/20. Year 9: 250 − 2.9 = 247.1; GP gets 0.2 × 247.1 = **$49.4M**; LP gets 200.6. Year 10: 160 − 1.1 = 158.9; GP gets **$31.8M**; LP gets 128.2.

*Step 5: check.* Total carry = 73.6 + 49.4 + 31.8 = **$154.8M**. Profit after fees = 1,700 − 926.1 = $773.9M; 20% of that is **$154.8M**. ✓ The catch-up was completed, so the GP earns exactly 20% of total profit net of fees.

*Step 6: the carry timing.* Despite cumulative gross proceeds of $990M by the end of year 7 (more than the $800M invested), the GP received no carry until year 8. Fee-funded capital counts as contributed capital, so the fund had to pay back all fees and pref before the GP shared profit.

*Conclusion.* The European waterfall defers carry until the LPs have a clear economic gain. The LP's cumulative net cash flow turns positive in year 7: that point is the *breakeven* of the J-curve, discussed next. ∎

## 14.4 The J-Curve and the Measures: IRR, MOIC, DPI, TVPI

### 14.4.1 Why the J-curve exists

Plot the cumulative net cash flow to an LP over the life of a typical fund and you obtain a **J-curve**: the line dips below zero in the early years and rises later. There are three causes, and a good analyst distinguishes them.

1. **Fees are paid from day one, but gains arrive late.** Management fees begin at the first close; investment gains require years of operational improvement and a sale.
2. **Conservative or cost-based interim marks.** Many GPs hold investments at cost for the first year or so (valuation guidelines often start from the transaction price), so the fund's reported NAV lags its economic value in the early years and then catches up. Early reported IRRs are therefore biased downward.
3. **Capital is drawn before it is returned.** Contributions cluster in years 1-4 and distributions in years 4-10, so cumulative cash flow must fall before it rises.

In Example 14.4, the LP's cumulative net cash flow bottoms at **−$690M in year 4** (the maximum net cash exposure, 69% of commitments) and breaks even in **year 7**. Even a fund with a 1.67x final multiple is cash-negative for six years.

**Practical implications.** (i) An LP's *commitment pacing* must account for the fact that net exposure peaks at far less than 100% of commitments but takes years to return; most institutions commit to several funds each year (vintage diversification) so that new J-curves are always being laid on top of maturing ones. (ii) Interim IRRs, particularly in the first four years, are not meaningful performance measures: they reflect the stage of the fund more than its quality. (iii) The J-curve is deeper when fees are charged on committed capital, and shallower for funds that buy mature, cash-generating companies and pay early dividends.

### 14.4.2 The standard LP-side metrics

The industry uses a family of ratios defined on the LP's paid-in capital:

```
DPI  (distributed to paid-in)  = Cumulative distributions / Paid-in capital
RVPI (residual value to paid-in) = Current NAV / Paid-in capital
TVPI (total value to paid-in)  = DPI + RVPI
MOIC (gross multiple)          = (Realized proceeds + Unrealized value) / Invested capital
Net IRR                        = IRR of (−contributions, +distributions, + terminal NAV)
```

All of these are normally reported *net* of fees and carry when computed on LP cash flows. DPI is realized, "cash-on-cash" performance; RVPI depends on the GP's valuations; TVPI combines them. For the example fund (Example 14.4):

| End of year | Cumulative paid-in | Cumulative LP distributions | DPI |
|---|---|---|---|
| 3 | 660.0 | 40.0 | 0.06x |
| 5 | 900.0 | 340.0 | 0.38x |
| 6 | 909.6 | 640.0 | 0.70x |
| 7 | 917.1 | 990.0 | 1.08x |
| 8 | 922.1 | 1,216.4 | 1.32x |
| 10 | 926.1 | 1,545.2 | 1.67x |

DPI crosses 1.0x in year 7, at the same point as the break-even of cumulative net cash flow. At the end, with no NAV left, DPI = TVPI = 1.67x. An LP who sees TVPI of 1.5x in year 4 with a DPI of 0.1x is observing mostly the GP's own marks, not cash. The rule among sophisticated LPs is: *DPI is the only number that cannot be revised.*

### 14.4.3 IRR versus MOIC

IRR and MOIC answer different questions. The **multiple** tells you how many dollars came back for each dollar invested, ignoring time. The **IRR** tells you the annualized, compounded rate at which money grew, which favors quick exits. Each measure can mislead alone.

**Example 14.5 – Two deals, two rankings.** Deal A: invest $100M, receive $150M after 2 years. Deal B: invest $100M, receive $250M after 8 years.

*Step 1: multiples.* A: 150/100 = **1.50x**; B: 250/100 = **2.50x**.

*Step 2: IRRs.* A: (1.5)^(1/2) − 1 = **22.5%**; B: (2.5)^(1/8) − 1 = **12.1%**.

*Step 3: reconcile with reinvestment.* IRR implicitly assumes that interim proceeds are reinvested at the IRR itself. If instead the LP can reinvest proceeds only at 8% (roughly the cost of capital for such an allocation), Deal A's $150M grows over the remaining six years to 150 × 1.08^6 = **$238.0M** at year 8. The *modified IRR* (MIRR) over the full eight years is (238.0/100)^(1/8) − 1 = **11.4%**, which is below B's 12.1%. If the reinvestment rate were only 3%, A's MIRR would drop to 7.6%.

*Step 4: dollar profit.* A creates $50M of profit and B creates $150M. If the LP had a fixed budget of $100M for eight years, B is more valuable unless the LP can reinvest A's cash at above about 12.1%.

*Conclusion.* A quick exit lifts IRR and lowers the multiple, and vice versa. GPs know this: a fund can raise its IRR by selling winners early (or by recapitalizing to return cash quickly), even when holding would produce more total dollars. LPs should look at IRR *and* multiple *and* DPI, and ask what the reinvestment alternative actually is. ∎

### 14.4.4 Subscription lines and the IRR illusion

Many funds use a **subscription credit facility** (a "sub line"): the fund borrows against LPs' uncalled commitments to make investments, then calls capital from LPs weeks, months, or even a year later to repay the loan. The line smooths capital calls and speeds closings, and it has legitimate uses. It also *mechanically raises reported IRR* by shortening the time between the LP's contribution and the distribution, while *lowering the multiple* by the interest paid.

**Example 14.6 – The sub-line effect on IRR.** The fund buys a company for $100M and sells it four years later for $180M. We compare two ways of financing the purchase.

*Case 1: no sub line.* The LPs fund the $100M at time 0. Multiple = 180/100 = **1.80x**; IRR = (1.8)^(1/4) − 1 = **15.8%**.

*Case 2: sub line.* The fund borrows $100M at time 0 at 6% and calls the LPs' capital at the end of year 1, when the loan plus interest equals 100 × 1.06 = $106M. LPs contribute **$106M at year 1** and receive $180M at year 4 (three years later). Multiple = 180/106 = **1.70x**; IRR = (180/106)^(1/3) − 1 = **19.3%**.

*Step 3: compare.* The reported IRR rises by **3.5 percentage points** (15.8% to 19.3%) even though the LPs' profit has *fallen* by $6M (from $80M to $74M). The LP's dollar gain is lower, but its measured IRR is higher, because the LP's money was "invested" for three years rather than four. The effect grows with the length of the borrowing: a two-year line would give (180/112.4)^(1/2) − 1 = 26.6% (using 100 × 1.06^2 = 112.36).

*Step 4: interpret.* The sub line is a form of leverage at the fund level supplied by the LPs' balance sheets (the commitments secure the loan), and the benefit accrues to the GP's headline IRR and, through the IRR-based carry hurdle, can accelerate carry. But the IRR "improvement" is not alpha. The right adjustment is to compute IRR from the *date capital would have been called without the line* (many LPs now request "unlevered" or "as-if-called" returns) and to look at the multiple, which is penalized by the interest.

*Conclusion.* In Rosalind's due diligence (Opening Vignette), the 21% IRR for Fund III includes a period during which credit lines delayed contributions. If the average delay were a year on all deals, the unlevered IRR would be materially lower while the multiple would remain unchanged: the reported rank of the fund relative to its peers may be an artifact of financing choices. ∎

## 14.5 Public Market Equivalents

### 14.5.1 Why IRR cannot be compared directly with an index return

An index return, such as the annual return on a broad equity index, is a *time-weighted* return: it does not depend on when an investor puts money in or takes it out. A private equity IRR is *money-weighted*: it depends on the timing of cash flows controlled by the GP (through calls and distributions). Comparing an IRR with an index return is like comparing a mile time with a lap time. The **public market equivalent (PME)** family solves the problem by asking: *what would the investor have had if the same dollars, at the same dates, had been invested in the index?*

### 14.5.2 The Kaplan-Schoar PME

Kaplan and Schoar proposed the simple and widely used ratio: compound every contribution and every distribution forward to a common date at the index return and take the ratio.

```
KS-PME = [ Σ D_t × (I_T / I_t) + NAV_T ] / [ Σ C_t × (I_T / I_t) ]
```

where D_t is distributions at time t, C_t is contributions, I_t is the index level at time t, and NAV_T is the terminal value at the end date (zero for a liquidated fund). A KS-PME above 1.0 means the fund returned more than the index would have on the same cash flows; below 1.0, less. The measure is a *ratio of future values*, so it is not an annualized rate, and it has the great virtue of being well-defined even for funds with negative IRRs.

**Example 14.7 – A KS-PME.** An LP's fund has the following net cash flows at the end of years 0 through 6 (in $ millions, contributions negative), and the index levels are:

| Year | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Fund cash flow | −100 | −50 | −50 | 0 | +30 | +80 | +150 |
| Index level | 100 | 108 | 104 | 121 | 130 | 138 | 160 |
| Factor I_6 / I_t | 1.600 | 1.481 | 1.538 | 1.322 | 1.231 | 1.159 | 1.000 |

*Step 1: future value of contributions.* 100 × 1.600 = 160.0; 50 × 1.481 = 74.07; 50 × 1.538 = 76.92. Sum = **$310.99M**.

*Step 2: future value of distributions.* 30 × 1.231 = 36.92; 80 × 1.159 = 92.75; 150 × 1.000 = 150.0. Sum = **$279.68M**. (The fund is fully liquidated at year 6, so NAV_6 = 0.)

*Step 3: ratio.* KS-PME = 279.68 / 310.99 = **0.899**.

*Step 4: other metrics for the same fund.* Multiple (TVPI) = 260/200 = **1.30x**. The fund's IRR is **5.7%**. The index rose from 100 to 160 over six years, or 8.1% per year (time-weighted).

*Step 5: Long-Nickels equivalent.* Suppose the same contributions had gone into the index and the distributions had been withdrawn at the same dates. The index-mimicking account would still hold **$31.3M** at year 6 (= 310.99 − 279.68, the shortfall). Using that residual as the terminal value, the "index-equivalent IRR" is **8.2%**, compared with the fund's **5.7%**: an underperformance of about **2.5 percentage points** per year.

*Conclusion.* The fund returned a positive 1.30x multiple and a positive IRR of 5.7%, yet it destroyed value relative to simply buying the index on the same dates: it ended with about 10% fewer dollars (in year-6 terms) than the index alternative. A pension fund should also remember that PME ignores risk: private equity portfolios often carry higher leverage and a higher equity beta than the index, so the hurdle for "outperformance" should be above 1.0 (for example the index scaled by a beta greater than one). ∎

### 14.5.3 Interpreting PME and its variants

- **KS-PME > 1** is evidence of excess return relative to the index, *before* adjusting for risk and illiquidity. It is a benchmark for performance, not a measure of alpha.
- **Direct alpha** (Gredil, Griffiths, and Stucke) converts the same idea into an annualized excess return by finding the constant rate at which the benchmark-compounded cash flows net to zero; it is easier to compare with other asset classes and interpretable as an annual spread.
- **PME+ and Long-Nickels** variants adjust the scaling of distributions so that the benchmark account never goes negative.
- **The choice of index matters.** Small-cap equity or sector-matched indices are more appropriate for buyout and growth strategies than a large-cap index; for leveraged buyouts, a levered benchmark may be needed.
- **PME and time.** A single PME for a fund of a given vintage describes the whole life of the fund; it does not say whether performance was generated early or late, or whether it was luck.

The measurement conclusion is that no single metric is sufficient. A prudent LP monitors DPI (realized cash), TVPI (marked value), net IRR (timing), and PME (market-relative performance), and interprets them in the context of vintage and peer group (Section 14.7).
