# Chapter 4: Bonds and Interest Rates

## Learning Objectives

After studying this chapter you should be able to:

- Price a fixed-rate bond as the present value of its coupons and principal, and explain the inverse relationship between bond prices and yields, including the pull-to-par effect and the difference between clean and dirty prices.
- Compute and interpret yield to maturity (YTM), current yield and realised return, and explain the assumptions embedded in YTM.
- Measure interest-rate risk with Macaulay duration, modified duration and convexity, and use them to estimate price changes and to build an immunised portfolio.
- Derive spot rates and forward rates from a term structure, and explain the main theories (expectations, liquidity preference, market segmentation) of why yield curves slope as they do.
- Decompose a corporate bond yield into a risk-free component and a credit spread, interpret credit ratings, and distinguish expected loss from the risk premium priced into spreads.
- Explain how inflation-linked bonds work, compute real yields and breakeven inflation, and assess when they are the right funding or investment instrument.

## Opening Vignette

*Illustrative scenario. Tessellate Power is a fictional regional electricity generator.*

Tessellate Power's treasurer, Anil Desmarais, faced a decision in the spring that would shape the company's balance sheet for a decade. The company needed to raise $400 million to build a wind and storage complex. Its investment bankers had laid out three alternatives: a 5-year fixed-rate bond, a 15-year fixed-rate bond, and a 15-year bond whose principal and coupons would be indexed to consumer-price inflation, which Tessellate could service from regulated tariffs that were themselves adjusted for inflation each year.

The headline yields on the page told one story. The 5-year bond would cost 5.3%, the 15-year bond 6.4% and the indexed bond a real yield of 3.1% above inflation. But Anil knew from experience that the headline numbers were the beginning, not the end, of the analysis. Why was the 15-year yield 110 basis points higher than the 5-year yield? Partly because investors expected short rates to rise, partly because investors demand compensation for holding long bonds whose prices swing more when rates change, and partly because longer exposure to Tessellate's credit means more time for something to go wrong. Disentangling those components would tell Anil whether the extra 110 basis points was fair compensation or an opportunity to borrow short and refinance.

The credit spread was another matter. Tessellate was rated one notch above the lowest investment-grade category. A downgrade would push the spread up sharply, since many institutional investors are barred from holding sub-investment-grade debt. Anil needed to understand how the rating agencies' and bond markets' views would be affected by the choice of structure. A larger share of long-dated debt would reduce refinancing risk but raise the sensitivity of the debt's market value to interest rates.

Lastly, the inflation-indexed alternative looked cheap on a real basis, but its nominal cost would depend on future inflation. If inflation averaged 2.5%, the all-in nominal cost would be about 5.7%; at 4% it would be above 7%. Anil's tariffs rose with inflation, so the real exposure matched his revenues; but what would the board think of a liability that could balloon with an inflation shock?

This chapter provides the tools for each of Anil's questions: how to price a bond, how to read a yield, how to measure interest-rate risk, how to interpret the term structure, what a credit spread contains, and how inflation-linked instruments work. We return to Tessellate in the case study.

## 4.1 Bond Basics and Pricing

### 4.1.1 What a bond is

A **bond** is a tradable debt contract in which the issuer promises to pay the holder a stream of fixed cash flows. The main features are:

- **Face value (par value, principal):** the amount repaid at maturity, usually $1,000 for corporate bonds in the United States.
- **Coupon rate:** the annual interest paid as a percentage of face value. A 5% coupon on a $1,000 bond pays $50 a year, often in two semi-annual instalments of $25.
- **Maturity:** the date on which the principal is repaid.
- **Issuer and seniority:** governments, agencies, municipalities and corporations all issue bonds. Senior secured debt ranks ahead of senior unsecured, which ranks ahead of subordinated debt, in the event of default.
- **Embedded options:** callable bonds let the issuer redeem early; putable bonds let the holder require early repayment; convertible bonds can be exchanged for shares. In this chapter we treat bonds as option-free, because the options matter chiefly for pricing models treated in a later chapter on derivatives and hybrid securities.

A **zero-coupon bond** pays no coupons and sells at a discount to face value; its entire return is the difference between price and par. Treasury bills and strips are zero-coupon bonds. Because a zero-coupon bond has a single cash flow, it is the building block of all other bonds: any coupon bond can be viewed as a portfolio of zero-coupon bonds, one for each payment date. This observation underpins the term-structure analysis in Section 4.5.

### 4.1.2 The pricing formula

A bond is worth the present value of its promised cash flows, discounted at the rate investors demand for bonds of similar risk and maturity. For a bond with face value F, periodic coupon C, n remaining periods and a periodic yield y:

```
P = C/(1+y) + C/(1+y)² + … + (C+F)/(1+y)ⁿ
  = C × [1 − (1+y)^(−n)] / y  +  F / (1+y)ⁿ
```

This is exactly the annuity-plus-lump-sum structure of Chapter 3: the coupons form an ordinary annuity and the principal is a single lump sum. The yield y is the market's required return, which is a property of the market, not of the bond's coupon. The coupon is set at issuance and is fixed, whereas the yield changes every day.

Three relationships follow directly from the formula and should be internalised.

1. **Price and yield move in opposite directions.** Higher required returns reduce the present value of fixed cash flows. This is the single most important fact about fixed-income markets.
2. **A bond sells at par when coupon rate equals yield, at a discount when coupon rate is below yield, and at a premium when coupon rate exceeds yield.** The coupon rate is only a label; its relation to the yield decides the price.
3. **The relationship is convex, not linear.** A fall in yield raises the price by more than an equal rise in yield lowers it. We quantify this in Section 4.4.

**Example 4.1 – Pricing an annual-coupon bond at three yields.** Tessellate has outstanding $1,000 face value bonds with a 5% annual coupon and ten years to maturity. Compute the price at yields of 6%, 5% and 4%.

*Step 1 – at y = 6%.* Annuity factor = (1 − 1.06⁻¹⁰) / 0.06 = (1 − 0.558395) / 0.06 = 7.360087. PV of coupons = $50 × 7.360087 = $368.00. PV of principal = $1,000 × 0.558395 = $558.39. Price = **$926.40** (a discount).

*Step 2 – at y = 5%.* Because the coupon equals the yield, price = **$1,000.00** exactly (par).

*Step 3 – at y = 4%.* Annuity factor = (1 − 1.04⁻¹⁰) / 0.04 = (1 − 0.675564) / 0.04 = 8.110896. PV of coupons = $50 × 8.110896 = $405.54. PV of principal = $1,000 × 0.675564 = $675.56. Price = **$1,081.11** (a premium). (The rounded components sum to a cent less; the prices quoted are computed from unrounded factors.)

A 1-percentage-point rise in the yield (5% → 6%) cut the price by $73.60 (7.36%), while a 1-point fall (5% → 4%) raised it by $81.11 (8.11%). The asymmetry is convexity.

**Table 4.1 – Price of a 10-year, 5% annual-coupon bond (face value $1,000)**

| Yield | Price | Change from par | Status |
|---|---|---|---|
| 3% | $1,170.60 | +17.06% | Premium |
| 4% | $1,081.11 | +8.11% | Premium |
| 5% | $1,000.00 | 0.00% | Par |
| 6% | $926.40 | −7.36% | Discount |
| 7% | $859.53 | −14.05% | Discount |
| 8% | $798.70 | −20.13% | Discount |

### 4.1.3 Semi-annual coupons and bond-market conventions

Most U.S. corporate and Treasury bonds pay coupons semi-annually, so a 6% coupon bond pays $30 every six months. The yield is quoted as a **bond-equivalent yield**: the periodic six-month yield multiplied by two, rather than the compounded effective annual rate. A quoted yield of 7% therefore means a periodic rate of 3.5% and an effective annual rate of 1.035² − 1 = 7.1225%. The number of periods doubles and the rate halves.

**Example 4.2 – Semi-annual pricing.** A five-year bond has a 6% coupon, paid semi-annually, and a quoted yield of 7%. Price it.

*Step 1.* Periodic coupon C = $1,000 × 6% / 2 = $30; periodic yield = 3.5%; n = 10 periods.
*Step 2.* Annuity factor = (1 − 1.035⁻¹⁰) / 0.035 = (1 − 0.708919) / 0.035 = 8.316605.
*Step 3.* PV of coupons = $30 × 8.316605 = $249.50. PV of principal = $1,000 × 0.708919 = $708.92.
*Step 4.* Price = **$958.42**.

If the same bond were valued by mistakenly treating the coupon as annual ($60 a year for 5 years at 7%), the price would be $959.00; the error is small here but grows with maturity and with the level of rates.

### 4.1.4 Clean price, dirty price and accrued interest

Between coupon dates, a buyer who purchases the bond will receive the *full* next coupon, even though the seller held the bond for part of the period. By convention the buyer compensates the seller with **accrued interest**, the pro-rata share of the coming coupon earned by the seller:

```
Accrued interest = Coupon × (days since last coupon / days in coupon period)
Dirty (full) price = Clean (quoted) price + Accrued interest
```

Bond prices are *quoted* clean, so that quoted prices do not jump by the amount of the coupon every six months. The buyer pays the dirty price. If 60 days have passed in a 180-day period on the bond in Example 4.2, the accrued interest is $30 × 60 / 180 = $10.00, so a buyer whose quoted price is $958.42 would pay $968.42.

### 4.1.5 Pull to par

If a bond's yield stays constant, its price drifts toward par as maturity approaches, because the discount (or premium) is amortised away. A 10-year 5% bond priced at $926.40 at a 6% yield will be priced at $931.98 after one year (nine years remaining), $944.18 after three years, $957.88 after five years and $981.67 after eight years, reaching $1,000 at maturity. The increase is the **accretion** that partly compensates the investor for the below-market coupon. This steady drift is the reason why a bond's total return over a holding period is not simply the coupon: it is coupon plus price change, even if market yields do not move.

### 4.1.6 Common mistakes in bond pricing

- Using the coupon rate as the discount rate.
- Forgetting to halve the rate and double the periods for semi-annual bonds.
- Confusing clean and dirty prices, particularly when settling trades or recording a bond in the accounts.
- Treating the maturity yield as a guaranteed return, which we examine next.

## 4.2 Yield to Maturity and Measures of Return

### 4.2.1 Definition of YTM

The **yield to maturity** is the single discount rate that equates the present value of a bond's promised cash flows to its current market price. It is the bond's internal rate of return if held to maturity. Unlike the pricing problem, there is no closed-form solution for y; it must be found by trial and error, interpolation, or a calculator or spreadsheet (the IRR or RATE functions).

```
Price = Σ Cₜ/(1+YTM)ᵗ + F/(1+YTM)ⁿ      (solve for YTM)
```

A useful approximation for a quick check is

```
YTM ≈ [C + (F − P)/n] / [(F + P)/2]
```

which averages the annual coupon income and the annual amortisation of the discount, divided by the average investment.

**Example 4.3 – Solving for YTM.** A bond with a 4% annual coupon, eight years to maturity and a face value of $1,000 trades at $950. Find its YTM.

*Step 1 – approximation.* [40 + (1,000 − 950)/8] / [(1,000 + 950)/2] = [40 + 6.25] / 975 = 46.25 / 975 = **4.744%**.
*Step 2 – refine by pricing at trial yields.* At y = 4.75%: price = $951.03. At y = 4.77%: price = $949.77.
*Step 3 – interpolate.* The target price of $950.00 lies 1.03/1.26 = 0.82 of the way from 4.75% to 4.77%, so YTM = 4.75% + 0.82 × 0.02% = **4.766%**.
*Step 4 – check.* At y = 4.766%, price = $950.02. ✓

The bond trades at a discount because its 4% coupon is below the 4.77% the market demands. The investor earns 4% in coupons plus a capital gain of $50 over eight years.

### 4.2.2 Hidden assumptions of YTM

YTM is a convenient single number, but it relies on three assumptions that managers should be able to name.

1. **The bond is held to maturity.** If sold earlier, the return depends on the price at the sale date, which depends on yields then.
2. **The issuer pays all promised cash flows in full and on time.** For risky bonds, the promised yield overstates the expected yield. The gap is discussed in Section 4.6.
3. **Coupons are reinvested at the YTM itself.** If market rates fall, the coupons are reinvested at lower rates and the realised return falls short of the YTM; if rates rise, reinvestment is more rewarding but the bond's price has fallen. This is the **reinvestment risk** that offsets **price risk**; we exploit the offset when we immunise a portfolio.

**Example 4.4 – Realised compound yield.** An investor buys a five-year, 5% annual-coupon bond at a 6% yield and holds it to maturity, reinvesting every coupon at 4%.

*Step 1 – purchase price.* Price at 6% = $957.88.
*Step 2 – terminal wealth.* Coupons reinvested at 4%: 50 × (1.04⁴ + 1.04³ + 1.04² + 1.04 + 1) = 50 × 5.416323 = $270.82. Add the principal: $1,000 + $270.82 = $1,270.82.
*Step 3 – realised yield.* (1,270.82 / 957.88)^(1/5) − 1 = 1.326706^0.2 − 1 = **5.817%**.

The realised return of 5.82% falls short of the 6% YTM because coupons were reinvested at 4% rather than at 6%. The shortfall of 18 basis points is small for a five-year bond with a modest coupon, but it widens with maturity and coupon size; for a 30-year high-coupon bond, reinvestment income can be most of the total return.

### 4.2.3 Other yield measures

- **Current yield** = annual coupon / current price. For the bond in Example 4.1 at a 6% yield, 50 / 926.40 = 5.397%. It ignores capital gain or loss, so it is useful for income comparisons only.
- **Yield to call (YTC)** is calculated like YTM but to the first call date at the call price. For a callable bond selling at a premium, the lower of YTM and YTC (the **yield to worst**) is the more realistic return measure.
- **Holding-period return** over a specific horizon = (coupons + ending price − beginning price) / beginning price. It depends on yields at the end of the horizon.

A manager issuing debt should note an asymmetry: the YTM that investors demand is the issuer's pre-tax cost of borrowing (before fees and ignoring default risk). This is the correct input for the cost of debt in the weighted-average cost of capital (discussed in a later chapter), not the coupon on existing debt.

## 4.3 Interest-Rate Risk and Duration

### 4.3.1 Why maturity alone is not enough

All fixed-rate bonds fall in price when yields rise, but not by the same amount. A 30-year zero-coupon bond falls much more than a 2-year bond for the same change in yield. Maturity is a rough guide, but it ignores the timing of coupons. A 10-year bond paying a 12% coupon returns much of its value early, and is less sensitive than a 10-year zero-coupon bond. We need a measure that takes the whole cash-flow profile into account. This is **duration**.

### 4.3.2 Macaulay duration

**Macaulay duration** (named for Frederick Macaulay) is the present-value-weighted average time to receipt of a bond's cash flows:

```
D = Σ [ t × PV(CFₜ) ] / P
```

where PV(CFₜ) = CFₜ / (1 + y)ᵗ and P is the bond's price. It is measured in years. Properties:

- A zero-coupon bond's duration equals its maturity.
- A coupon bond's duration is less than its maturity, because early coupons pull the average forward.
- Duration falls as the coupon rate rises, and falls as the yield rises (higher yield means the distant cash flows are discounted more heavily).
- Duration generally rises with maturity, though at a decreasing rate; for a perpetuity it is (1 + y)/y, a finite number (17.67 years at 6%).

### 4.3.3 Modified duration and the price approximation

Differentiating the price formula with respect to the yield gives the key practical result. **Modified duration** is

```
D_mod = D / (1 + y/m)           (m = coupons per year; m = 1 for annual)
```

and for a small change in yield Δy:

```
ΔP / P ≈ − D_mod × Δy
```

Modified duration is therefore the percentage price change for a one-unit (100%) change in yield, which we normally read as the percentage change in price for a one-percentage-point change in yield. A bond with a modified duration of 7.57 loses about 7.57% of its price if yields rise by 1 percentage point. A related measure is **dollar duration** (or the DV01, "dollar value of an 01"), the dollar change in price for a one-basis-point change in yield: DV01 = D_mod × P × 0.0001.

**Example 4.5 – Computing duration.** Compute the Macaulay duration, modified duration and approximate price change for a three-year bond with a 6% annual coupon, face value $1,000, priced at a 5% yield.

*Step 1 – cash flows and present values.*

| Year t | Cash flow | PV at 5% | t × PV |
|---|---|---|---|
| 1 | $60 | $57.14 | $57.14 |
| 2 | $60 | $54.42 | $108.84 |
| 3 | $1,060 | $915.67 | $2,747.01 |
| **Sum** | | **$1,027.23** | **$2,913.00** |

*Step 2 – Macaulay duration.* D = 2,913.00 / 1,027.23 = **2.836 years**.
*Step 3 – modified duration.* D_mod = 2.836 / 1.05 = **2.701**.
*Step 4 – price change for a +1 percentage point move.* ΔP ≈ −2.701 × 0.01 × $1,027.23 = **−$27.74**. For a −1 point move: +$27.74.
*Step 5 – exact.* At 6%, the price is $1,000.00 (a change of −$27.23); at 4% the price is $1,055.50 (a change of +$28.27).

The approximation is close but overstates the decline and understates the gain; the missing second-order effect is convexity.

**Table 4.2 – Duration depends on maturity and coupon (5% yield, annual coupons)**

| Maturity | Macaulay duration, 5% coupon bond | Macaulay duration, zero-coupon bond | Modified duration, 5% coupon | Modified duration, zero |
|---|---|---|---|---|
| 2 years | 1.95 | 2.00 | 1.86 | 1.90 |
| 5 years | 4.55 | 5.00 | 4.33 | 4.76 |
| 10 years | 8.11 | 10.00 | 7.72 | 9.52 |
| 20 years | 13.09 | 20.00 | 12.46 | 19.05 |
| 30 years | 16.14 | 30.00 | 15.37 | 28.57 |

The table shows two effects. The coupon bond's duration grows far more slowly than its maturity, and the gap between a 5% coupon bond and a zero-coupon bond widens with maturity. A 30-year zero-coupon bond has a modified duration nearly double that of a 30-year coupon bond, and consequently is much more volatile.

### 4.3.4 Portfolio duration and managerial use

The duration of a portfolio is the market-value-weighted average of the durations of its holdings. Likewise, a firm can compute the duration of its assets and of its liabilities. A firm with a long-lived asset base funded by short-term debt has a **duration gap**: a rise in rates reduces the value of assets by more than liabilities, or raises the cost of rolling over debt. Banks and insurers manage duration gaps formally; non-financial firms with large pension liabilities or long-dated receivables should do the same.

Duration is also a risk-budgeting tool. A treasury policy might limit the portfolio's DV01 to a given dollar amount, or require that the weighted-average duration of debt remain within a range.

## 4.4 Convexity and Immunisation

### 4.4.1 The curvature of the price–yield relationship

Modified duration is the slope of the price–yield curve at the current yield; it is a linear approximation to a curved relationship. The price–yield relationship is convex: the curve lies above its tangent line. **Convexity** measures this curvature. For annual cash flows:

```
Convexity = [ Σ t(t+1) × CFₜ/(1+y)^(t+2) ] / P
```

and the price change including the second-order term is

```
ΔP / P ≈ − D_mod × Δy + ½ × Convexity × (Δy)²
```

Because the second term is positive whatever the sign of Δy, convexity helps the holder: a bond gains more when yields fall than it loses when yields rise. All else equal, investors prefer higher convexity and will pay for it; this is why two bonds with identical durations can have different yields. Zero-coupon bonds have the highest convexity for a given maturity; callable bonds can have *negative* convexity in some yield ranges, because the issuer's right to call caps the price gain when rates fall.

**Example 4.6 – Duration and convexity together.** Consider the 10-year, 5% annual-coupon bond of Example 4.1, priced at a 6% yield: P = $926.40, Macaulay duration = 8.0225 years, modified duration = 7.5684, convexity = 72.57. Estimate and compare the price change for yield shifts of ±1 and ±2 percentage points.

*Step 1 – duration-only estimate.* For Δy = +1%: −7.5684 × 0.01 × 926.40 = −$70.11. For Δy = +2%: −$140.23. For Δy = −1%: +$70.11; for −2%: +$140.23.
*Step 2 – convexity term.* ½ × 72.57 × (0.01)² × 926.40 = $3.36 for ±1%; ½ × 72.57 × (0.02)² × 926.40 = $13.45 for ±2%.
*Step 3 – combine.* For +1%: −70.11 + 3.36 = **−$66.75**; for −1%: 70.11 + 3.36 = **+$73.48**; for +2%: −140.23 + 13.45 = **−$126.78**; for −2%: 140.23 + 13.45 = **+$153.67**.
*Step 4 – compare with exact repricing.* The actual changes are −$66.87, +$73.60, −$127.70 and +$154.71.

**Table 4.3 – Duration and convexity approximations versus exact price changes (10-year, 5% bond at a 6% yield; P = $926.40)**

| Yield change | Exact ΔP | Duration only | Duration + convexity | Error, duration only (approx. − exact) | Error, duration + convexity (approx. − exact) |
|---|---|---|---|---|---|
| +2% | −$127.70 | −$140.23 | −$126.78 | −$12.53 | +$0.92 |
| +1% | −$66.87 | −$70.11 | −$66.75 | −$3.24 | +$0.12 |
| −1% | +$73.60 | +$70.11 | +$73.48 | −$3.49 | −$0.12 |
| −2% | +$154.71 | +$140.23 | +$153.67 | −$14.48 | −$1.04 |

Adding the convexity term cuts the error by an order of magnitude. For large moves, such as the 200-basis-point shifts seen during rate cycles, ignoring convexity is a material mistake.

### 4.4.2 Immunisation

An investor or firm with a known future liability can use duration to lock in the ability to meet it, a technique called **immunisation**. The idea is to offset price risk and reinvestment risk. If yields rise, the bonds lose market value but reinvested coupons earn more; if yields fall, the opposite occurs. Choosing a portfolio whose duration equals the liability's horizon makes the two effects cancel for small, parallel shifts in the yield curve.

Two conditions are required:

1. The present value of assets equals the present value of liabilities.
2. The duration of assets equals the duration of liabilities.

A third condition, that asset convexity exceed liability convexity, guarantees that the portfolio remains ahead for large shifts in either direction.

**Example 4.7 – Immunising a single liability.** A company must pay $1,000,000 in six years (for example, a legal settlement). The market yield is 5% for all maturities. The treasurer will invest in two zero-coupon bonds, maturing in 3 and 10 years. How should she split the funds?

*Step 1 – present value of the liability.* $1,000,000 / 1.05⁶ = **$746,215.40**. The liability has a duration of 6 years because it is a single payment.
*Step 2 – solve for weights.* Let w be the weight in the 3-year bond: 3w + 10(1 − w) = 6, so 10 − 7w = 6, giving w = 4/7 = 0.5714.
*Step 3 – dollar amounts.* 3-year zero: 0.5714 × $746,215.40 = **$426,408.80**. 10-year zero: 0.4286 × $746,215.40 = **$319,806.60**.
*Step 4 – face values purchased.* 3-year: $426,408.80 × 1.05³ = $493,621.48. 10-year: $319,806.60 × 1.05¹⁰ = $520,931.25.
*Step 5 – test with immediate parallel shifts.*

| Yield | Asset value | Liability value | Surplus |
|---|---|---|---|
| 3% | $839,355 | $837,484 | +$1,871 |
| 4% | $790,750 | $790,315 | +$436 |
| 5% | $746,215 | $746,215 | $0 |
| 6% | $705,339 | $704,961 | +$379 |
| 7% | $667,757 | $666,342 | +$1,415 |

In every scenario the surplus is non-negative: the barbell portfolio has higher convexity than the single-maturity liability, so it is ahead after any parallel shift. The portfolio must be rebalanced as time passes and yields change, since durations drift. Immunisation also fails when the yield curve changes shape rather than moving in parallel, which is why practitioners use key-rate durations or cash-flow matching (a **dedicated portfolio** whose coupons and maturities match the liability schedule) when exactness is needed.

