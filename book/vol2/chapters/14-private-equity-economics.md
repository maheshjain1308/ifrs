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

## 14.6 GP/LP Alignment and Continuation Funds

### 14.6.1 Where interests align and where they diverge

The 2-and-20 structure is meant to align the GP with LPs, but the alignment is partial. Consider the GP's payoff. It receives fees regardless of performance, plus carry, which is a call option on fund profits with a strike (the hurdle) and no downside. A GP's expected economics therefore depend on risk: because the option value rises with volatility, the GP has an incentive to take more risk than LPs, who bear the downside, would choose. Specific conflicts include:

| Conflict | Source | Typical mitigation |
|---|---|---|
| Excess risk-taking | Carry is a call option; LPs bear the losses | GP commitment; hurdle; clawback |
| Fee-driven fund growth | Fees on commitments are large and certain | Fee step-downs; fee on invested capital; size caps |
| Early exits / IRR gaming | Carry and fundraising favor high IRR | Multiples and DPI reporting; whole-fund waterfall |
| Overvaluation of NAV | Marks drive fundraising for the next fund | Independent valuation, audit, ILPA-style reporting |
| Fee leakage | Transaction, monitoring, and director fees paid to GP | 80-100% fee offset |
| Cross-fund conflicts | Several funds competing for deals | Allocation policies; advisory committee approval |
| Holding too long / too short | Fund-life constraints and extension fees | LP-approved extensions; term limits |

**The GP commitment.** A GP investing 2-5% of the fund's capital alongside the LPs bears real losses. For a $2 billion fund, a 2% commitment is $40 million, an amount that is large relative to the personal wealth of partners and can be financed in part by *waiving* management fees (a "fee waiver") in exchange for an investment of the same amount in the fund: the partners swap pre-tax fee income for an equity position. This increases alignment in form, but LPs should distinguish a GP commitment funded from personal wealth from one funded by fee waivers, since the latter reduces the cash the GP actually puts at risk.

**Carry as option value.** If the fund's expected return is low, carry may be worth little; if volatile, its option value is higher. As an illustration, consider a fund with $100 of NAV today, a hurdle that requires $146.9 at the end of five years, a catch-up and a 20% carry. A simple Black-Scholes-style treatment of the GP's share as a call struck at the hurdle value gives a carry value that rises with fund volatility, which explains why risk-seeking is a persistent concern even in well-designed funds; the mitigation lies in LP governance (advisory committees, diversification limits, and investment guidelines in the LPA), not in the waterfall alone.

**Key-person and no-fault provisions.** An LPA typically allows a supermajority of LPs to remove the GP without cause ("no-fault removal") or to suspend the investment period on a key-person event. These rights are rarely exercised but affect bargaining power during disputes.

**Co-investment.** LPs are increasingly offered the right to invest directly in individual deals alongside the fund, usually with reduced or zero fees and carry. For the LP, co-investments are a cost-saving device and a way to deploy more capital with a manager it trusts; for the GP, they enable larger deals without a larger fund but create allocation questions (which LPs get the best deals?) and adverse selection risk (the GP may offer co-investments in deals it finds hard to fill).

### 14.6.2 Continuation funds

A **continuation fund** (or continuation vehicle, CV) is a GP-led secondary transaction: the GP of an aging fund moves one or several trophy assets into a new fund that it also manages, funded by new investors (typically specialist secondary buyers) and by existing LPs who elect to roll. Existing LPs are offered a choice: take cash at the transaction price or roll their interest into the new vehicle on similar or new terms. The GP typically *crystallizes* the carry earned to date on the assets, often by rolling that carry into the new vehicle as GP capital.

The rationale is genuine: the best companies in a fund may need more time to compound than the fund's term allows; the sale to a CV provides immediate liquidity to LPs who want it and continued exposure to those who want it. But the structure is also a *conflict of interest* in its purest form: the GP is on both sides of the transaction, setting the price at which the old fund sells and the new fund buys, and it generates fees and carry crystallization from the transaction. Governance safeguards therefore include an independent fairness opinion, a competitive bidding process led by an outside advisor, LP advisory committee approval, an election period of 30 days or more with full information, a roll option on equal-or-better terms, and a significant GP rollover.

**Example 14.8 – Anatomy of a continuation fund.** Fund I owns a company with a cost basis of **$250M** and a reported NAV of **$400M**. The GP proposes to sell it to a new continuation vehicle at **$380M**, a 5% discount to NAV, with an independent valuation supporting the price. Terms of the CV: management fee ignored for simplicity; carry of 10% on profits up to a 1.5x multiple on the $380M price (that is, on profit up to $190M), and 20% above that; no hurdle. The GP crystallizes its Fund I carry on the sale and rolls that amount into the CV. Fund I's carry rate is 20% and the fund has cleared its hurdle.

*Step 1: crystallized carry.* Profit at the sale price = 380 − 250 = **$130M**; carry = 20% × 130 = **$26M**. If the GP rolls the carry into the CV, it takes no cash from this part of the transaction, and of the $380M price, $26M is "paid" in carry (rolled) and **$354M** is new capital from buyers and rolling LPs.

*Step 2: selling LPs' outcome.* An LP that sells takes its share of the net proceeds: relative to the $400M NAV, it gets 5% less (and has paid carry on the price, not on the NAV). It trades 5% of value for immediate liquidity and certainty.

*Step 3: CV investors' outcome.* Suppose the asset is sold three years later for $520M. Profit above the $380M entry = **$140M**, which is within the first tier (up to $190M), so carry = 10% × 140 = **$14M**. Investors receive 520 − 14 = **$506M** on $380M: net multiple **1.33x**, net IRR = (506/380)^(1/3) − 1 = **10.0%**.

*Step 4: sensitivity to exit value.*

| Exit value ($M) | Profit above $380M | Carry ($M) | Net multiple to CV investors | Net IRR (3 years) |
|---|---|---|---|---|
| 380 | 0 | 0.0 | 1.00x | 0.0% |
| 450 | 70 | 7.0 | 1.17x | 5.3% |
| 520 | 140 | 14.0 | 1.33x | 10.0% |
| 650 | 270 | 35.0 | 1.62x | 17.4% |
| 800 | 420 | 65.0 | 1.93x | 24.6% |

(At $650M: carry = 10% × 190 + 20% × 80 = 19 + 16 = $35M. At $800M: 19 + 20% × 230 = 19 + 46 = $65M.)

*Step 5: the GP's economics.* The GP's rolled carry is $26M of the $380M, or 6.8% of the CV capital. At the $520M exit, the GP receives 26/380 × 506 = **$34.6M** on its rolled capital plus $14M of new carry, **$48.6M** in total, on $26M of capital that was previously only a contingent claim in Fund I. The GP has converted a paper claim into a tradable stake, restarted its fee stream on the asset, and secured a new carry option on further appreciation. The selling LPs have forgone further appreciation above $380M (they would have received it in Fund I with an 80/20 split), and rolling LPs accept a 10-20% carry on new profit.

*Conclusion.* The CV can be good for everyone: LPs gain a choice, the asset gets more time, and buyers earn an attractive return if the entry price is sound (10% net in the base case). But each party's outcome depends on the fairness of the $380M price. A price 10% too low transfers value from selling LPs to the new investors and the GP; a price too high transfers it the other way. This is why independent valuation, competitive price discovery, and meaningful LP choice matter more than the headline terms. ∎

**Common mistake.** Treating a CV as simply "extending the fund." It is a sale and a repurchase of the same asset by two vehicles under one manager, and each party's decision depends on information the GP has and the LPs may not.

## 14.7 Performance Measurement Pitfalls

### 14.7.1 Stale and smoothed valuations

NAVs of private assets are *appraisals*, not prices. They are updated quarterly or less often, based on comparable-company multiples, recent financings, and GP judgment. The result is **smoothing**: reported returns lag true economic returns, show lower volatility, and have positive serial correlation. Smoothing makes private equity look safer and less correlated with public markets than it is, which flatters its Sharpe ratio and affects its role in portfolio allocation (see Volume 1, Chapter 10 on the CAPM and portfolio theory).

A simple model of smoothing (Geltner) is that the reported return is a weighted average of the true return and last period's reported return:

```
r_reported(t) = (1 − a) · r_true(t) + a · r_reported(t−1)
```

where a is the smoothing parameter (0 ≤ a < 1) and also the first-order autocorrelation of reported returns when true returns are independent. The variance relation is Var(reported) = Var(true) × (1 − a)/(1 + a), so the "true" volatility is the reported volatility multiplied by √[(1 + a)/(1 − a)]. The true return series can be recovered by "unsmoothing": r_true(t) = [r_reported(t) − a · r_reported(t−1)] / (1 − a).

**Example 14.9 – Unsmoothing volatility and the Sharpe ratio.** A buyout index reports an annualized volatility of **9.0%** and an average excess return over cash of **6.0%**. The first-order autocorrelation of the reported returns is **0.50**.

*Step 1: volatility multiplier.* √[(1 + 0.5)/(1 − 0.5)] = √3 = **1.732**.

*Step 2: unsmoothed volatility.* 9.0% × 1.732 = **15.6%**.

*Step 3: Sharpe ratios.* Reported: 6.0/9.0 = **0.67**. Unsmoothed: 6.0/15.6 = **0.38**.

*Step 4: sensitivity.* With autocorrelation 0.30 the multiplier is √(1.3/0.7) = 1.36, giving volatility 12.3% and Sharpe 0.49; with 0.60 the multiplier is √(1.6/0.4) = 2.00, giving volatility 18.0% and Sharpe 0.33.

*Conclusion.* The reported Sharpe ratio of 0.67 is nearly twice the economically relevant 0.38. Allocation models that use reported volatilities will overweight private equity, and risk measures (value at risk, stress tests) will understate its drawdown risk, particularly in a crisis when public markets fall immediately but private marks decline with a delay, producing the "denominator effect" at the plan level. ∎

### 14.7.2 Other major pitfalls

**(1) Interim IRR is not final IRR.** Funds in years 1-4 sit in the J-curve, and funds in years 5-8 carry unrealized NAV that is subject to revision. Comparing funds of different ages on net IRR is meaningless. Compare funds of the same *vintage year* only.

**(2) Vintage dispersion.** Returns depend heavily on the entry year: a fund that deploys in a period of low valuations can earn double the return of one that deploys at the peak, with identical skill. Quartile rankings must be done within vintage, and an LP's own commitment pacing diversifies across vintages.

**(3) Survivorship and self-reporting bias.** Databases of fund performance are built from voluntary reporting by GPs; poor performers and defunct funds may be underrepresented. Averages in data sets therefore tend to overstate the typical outcome, and "top-quartile" claims by GPs are based on selected benchmark universes and selected measures (gross vs net, IRR vs multiple, a flattering subset of funds).

**(4) Persistence of performance.** Early academic work found that top-quartile managers tended to remain top-quartile, which made manager selection the central skill; more recent evidence suggests persistence has weakened as the industry matured and as the number of funds grew. LPs should not assume that a track record of the *prior* fund predicts the *next* one, especially when fund size has risen sharply. Fund size growth dilutes returns because the opportunity set for a given strategy is limited.

**(5) Gross versus net, and fee layering.** A deal-level "2.4x gross multiple" says nothing about the LP's return after fees, carry, and expenses; Example 14.1 turned 2.125x into 1.67x. Fund-of-funds and feeder structures add a second layer of fees (commonly around 0.5-1% plus 5-10% carry), which can push net returns below public alternatives. Co-investment and direct programs reduce the layers but require internal expertise.

**(6) Realized versus unrealized.** NAV-heavy funds depend on the GP's marks. Check the *mix* of realized and unrealized value; look at the realized track record separately; and compare valuation multiples to what the same GP actually achieved on previous exits ("markup versus mark-out" analysis).

**(7) Cash-flow timing choices.** Besides sub lines, GPs can delay calls, accelerate distributions through dividend recapitalizations (which return cash quickly and raise the IRR even if the remaining company is more leveraged and riskier), and time exits to the fund's fundraising calendar.

**(8) Benchmark choice and illiquidity.** Comparing private equity to a large-cap index understates the risk of small leveraged companies, and ignoring the illiquidity premium that LPs rightly require means that an excess return of a few points may not compensate for the costs of illiquidity, fees, and the need to hold uncalled commitments.

**Managerial implications.** For a pension CIO such as Rosalind Park, the practical protocol is: (i) require net-of-all-fees cash flows by date for every fund in the track record; (ii) compute DPI, TVPI, net IRR with and without the sub line, and KS-PME for a size- and strategy-matched benchmark; (iii) compare within vintage; (iv) examine realized versus unrealized value; (v) negotiate the fee base, offsets, waterfall type, clawback and GP commitment; and (vi) compare the entire package with a lower-cost liquid alternative, such as a levered small-cap index. For a corporate leader whose company is owned by a PE fund, understanding fund economics explains why the sponsor presses for a particular exit horizon, a dividend recapitalization, or a sale into a continuation vehicle.

## Case Study: Alder Point Partners and the Fund II Continuation Vehicle

*(Illustrative company; all figures are fictional.)*

Alder Point Partners is a mid-market buyout firm with three funds under management. Fund II ($900 million, vintage 2014) is in its twelfth year after two one-year extensions. It has distributed 1.6x of paid-in capital and holds one remaining asset: Brightwater Logistics, a regional freight-forwarding company bought for $250 million (equity) in 2017. Brightwater has grown earnings at 14% per year and is carried at $600 million of NAV. Fund II's terms: 2% fee on commitments (stepping down to 1.5% on invested capital after year 5), 20% carry with an 8% compounded hurdle and 100% catch-up, whole-fund waterfall. Fund II has already cleared its hurdle and paid carry on prior distributions. The GP's advisory committee has been told that continuing to hold Brightwater beyond the extension would require a third extension that the LPs are unlikely to grant.

Alder Point proposes to move Brightwater into a continuation vehicle, "Alder Point Continuation Fund I", at a price of $552 million, a 8% discount to NAV, supported by a fairness opinion from a boutique advisor and a competitive process in which three secondary buyers submitted indications between $520 million and $565 million. The lead investor, a secondary fund, would commit $330 million. Fund II's LPs may either sell for cash at the transaction price or roll into the CV. Alder Point would roll its crystallized carry from Fund II (20% of the gain on the Brightwater sale) and commit an additional $15 million of new capital. The CV would charge a 1.25% management fee on invested capital and a tiered carry: 10% of profits up to 1.5x, 20% above 1.5x, no hurdle. The business plan projects a sale in four years at $850 million.

Opinions in the LP community differ. A large endowment, which would like to realize cash, supports the sale. A pension plan with a 12% private markets allocation, led by its CIO, is concerned that the process was run by the GP, that the winning bidder is a long-standing co-investor of Alder Point, and that the GP's crystallized carry is large compared with the GP's new cash commitment. A smaller family office points out that Fund II has been the firm's best performer, and Alder Point's fundraising for Fund IV is under way, so a strong "realized" track record for Fund II (through a sale rather than an extension) would help the fundraise. One LP asks whether the 8% discount is too large, given that Brightwater's earnings have not declined, and whether LPs would get a better outcome by simply approving a one-year extension.

The advisory committee must decide whether to approve the transaction. It has asked its analyst to estimate the economics for each party.

**Discussion questions**

1. Compute the GP's crystallized carry on Brightwater at the $552 million price (cost $250 million, carry 20%, hurdle cleared). Compare it with the new cash capital of $15 million. What does this say about alignment in the CV? What additional term would you request?
2. Compute the net multiple and 4-year IRR to CV investors if Brightwater is sold for $850 million, using the tiered carry (ignore management fees), and for sale prices of $552 million and $650 million. Compute also the GP's total proceeds in the $850 million case, assuming its rolled carry is invested pro rata with the CV capital.
3. Evaluate the 8% discount from the viewpoint of a selling LP: at what discount does a seller break even versus a one-year extension, assuming the asset's value grows 14% in that year and the LP has a cost of capital of 10%? What information would you want about the competitive process?
4. Identify the conflicts of interest in this transaction and the governance safeguards that would make you comfortable voting to approve it. How should an LP decide between rolling and selling?

## Key Takeaways

- A PE fund is a finite-life partnership whose economics are set in the LPA: the fee base and step-down, the hurdle, the catch-up, the waterfall type, the clawback, and the GP commitment collectively determine what LPs keep.
- Fees take a large, certain share of profit: in the worked fund, fees consumed 14% and carry 17% of gross profit, turning a 2.1x gross multiple and 18.9% gross IRR into a 1.67x net multiple and 13.3% net IRR.
- The European waterfall has four tiers (return of capital, preferred return, catch-up, split); with a full catch-up the GP ends with 20% of total profit if the fund is successful, so the hurdle matters mostly for timing and for marginal funds.
- Deal-by-deal (American) waterfalls pay carry earlier and shift the risk of later losses to LPs until a clawback is settled; the clawback's value depends on escrow and the creditworthiness of GP partners.
- The J-curve arises from fees, conservative early marks, and the timing of calls and distributions; interim IRRs in the first years say more about fund age than quality, and DPI is the metric that cannot be revised.
- IRR rewards speed and implicitly assumes reinvestment at the IRR; multiples ignore time; neither alone is sufficient, and MIRR makes the reinvestment assumption explicit.
- Subscription lines raise reported IRR and lower the multiple by shortening the invested period; one-year delays can add several points of IRR without creating any additional dollars of profit.
- A Kaplan-Schoar PME compares a fund to the index on the same cash flow dates; a fund can have a positive IRR and a multiple above 1.0 and still have a PME below 1.0.
- Carry is a call option, so GPs have an incentive to take more risk than LPs; the GP commitment, advisory committees, and fund guidelines address this imperfectly.
- Continuation funds can provide liquidity and more time for the best assets but place the GP on both sides of a transaction; independent valuation, competitive price discovery, genuine LP choice, and a significant GP roll are the key safeguards.
- Reported private-equity risk is understated by smoothed appraisals, and performance comparisons must be done within vintage, net of all fees, and alongside a public benchmark.

## Review Questions

1. Describe the sequence of cash flows between an LP and a PE fund from commitment to wind-down. Why is the unfunded commitment a cost to the LP?
2. Why do fees on committed capital make the J-curve deeper? How does a step-down to invested capital change the economics for the LP?
3. Explain each tier of a European waterfall. What happens to the GP's share of total profit if the catch-up is 50% rather than 100%, or if there is no catch-up?
4. Compare European and American waterfalls from the LP's and the GP's viewpoints. What is a clawback and what weaknesses does it have?
5. Explain why carried interest is analogous to a call option. What behavior does this encourage, and how might an LP mitigate it?
6. Why might a fund with a lower multiple have a higher IRR than another fund? Give a numerical example.
7. Define DPI, RVPI, and TVPI. Why do experienced LPs emphasize DPI?
8. How do subscription lines affect IRR and multiple? How would you adjust performance for them?
9. What does a KS-PME of 0.90 mean? Why can a fund with a positive IRR have a PME below 1?
10. List four pitfalls in measuring PE performance and explain how an LP can guard against each.

## Problems

1. **Fee drag.** A $500M fund charges 2% of commitments for 5 years and 1.5% of $250M of invested capital for the next 5 years. (a) Compute total fees and total fees as a percentage of commitments. (b) If the fund invests only the capital net of fees (that is, commitments less fees), what is the amount invested?
2. **Single-period waterfall.** An LP contributes $100M; four years later the fund distributes $180M. Hurdle 8% compounded, 100% catch-up, 20% carry. Compute the hurdle amount, the catch-up, the LP's and GP's totals, and the GP's share of profit. Compare the GP's take with no catch-up.
3. **Clawback.** Deal A ($50M invested) is sold for $150M in year 3; Deal B ($50M invested) is sold for $20M in year 5. Carry is 20% with no hurdle on a deal-by-deal basis. Compute the carry paid after A, the carry owed after B, and the clawback.
4. **IRR versus multiple.** Deal A turns $100M into $160M after 2 years; Deal B turns $100M into $300M after 7 years. Compute the multiples and IRRs. Which is better if the LP can reinvest at 8%?
5. **Subscription line.** A fund buys a company for $100M and sells it after 3 years for $150M. Compute the multiple and IRR with no sub line. Then suppose the fund borrows for the first year at 5%, with LPs funding the loan payoff at the end of year 1. Recompute the multiple and IRR and comment.
6. **PME.** An LP's fund has cash flows (years 0-4): −100, −50, 0, +90, +100. The index levels are 100, 110, 120, 130, 150. Compute the KS-PME, the multiple, and the fund's IRR. Does the fund beat the index?
7. **Continuation fund.** An asset has cost $100M and is sold into a continuation vehicle at $180M. The old fund's carry is 20% and has cleared its hurdle. In the CV, carry is 10% of profit above $180M. The asset is sold for $270M three years later. Compute the crystallized carry, the CV carry, and the CV investors' net multiple and IRR (ignore fees).
8. **Total fees.** A $300M fund charges 2% of commitments for 5 years, then 1.5% on $150M of invested capital for 5 years. Compute total fees and total fees as a percent of commitments. If gross profit on the invested capital is $270M, what share of gross profit do fees take?

### Answers to Selected Problems

1. (a) Years 1-5: 0.02 × 500 × 5 = $50.0M; years 6-10: 0.015 × 250 × 5 = $18.75M; total **$68.75M = 13.75%** of commitments. (b) Invested = 500 − 68.75 = **$431.25M**.
2. Hurdle = 100 × 1.08^4 = **$136.05M**. Profit above hurdle = 180 − 136.05 = 43.95; the pref is 136.05 − 100 = 36.05, so catch-up = 0.25 × 36.05 = **$9.01M**. Remainder = 43.95 − 9.01 = $34.94M; LP 80% = 27.95; GP 20% = 6.99. LP total = 136.05 + 27.95 = **$164.0M**; GP total = 9.01 + 6.99 = **$16.0M** = 20% of the $80M profit. Without a catch-up, GP = 0.2 × 43.95 = **$8.79M**.
3. Carry after A = 0.2 × 100 = **$20M**. After B, cumulative profit = 100 − 30 = 70, carry owed = **$14M**; clawback = **$6M**.
4. Multiples: **1.6x** and **3.0x**. IRRs: 1.6^(1/2) − 1 = **26.5%**; 3^(1/7) − 1 = **17.0%**. With 8% reinvestment A's $160M grows to 160 × 1.08^5 = $235.1M at year 7, a multiple of 2.35x and MIRR 13.0%, versus B at 17.0%: **B is better**.
5. No sub line: **1.50x**, IRR = 1.5^(1/3) − 1 = **14.5%**. With the line: LPs contribute $105M at year 1 and receive $150M at year 3: multiple = 150/105 = **1.43x**; IRR = (150/105)^(1/2) − 1 = **19.5%**. IRR rises 5 points while the multiple falls and profit falls from $50M to $45M.
6. FV of contributions: 100 × 1.5 + 50 × (150/110) = 150 + 68.18 = 218.18. FV of distributions: 90 × (150/130) + 100 × (150/150) = 103.85 + 100 = 203.85. KS-PME = 203.85/218.18 = **0.934**. Multiple = 190/150 = **1.27x**. IRR = **7.7%**. The fund does **not** beat the index (PME < 1).
7. Crystallized carry = 0.2 × 80 = **$16M**. CV profit = 270 − 180 = 90; CV carry = 0.1 × 90 = **$9M**. Net to investors = 261; multiple = 261/180 = **1.45x**; IRR = 1.45^(1/3) − 1 = **13.2%**.
8. Fees = 0.02 × 300 × 5 + 0.015 × 150 × 5 = 30 + 11.25 = **$41.25M = 13.75%** of commitments. As a share of gross profit: 41.25/270 = **15.3%**.
