# Chapter 4: Bonds and Interest Rates

## Learning Objectives

After studying this chapter you should be able to:

- Price a fixed-rate bond as the present value of its coupons and principal, and explain the inverse relationship between bond prices and yields, including the pull-to-par effect and the difference between clean and dirty prices.
- Compute and interpret yield to maturity (YTM), current yield and realised return, and explain the assumptions embedded in YTM.
- Measure interest-rate risk with Macaulay duration, modified duration and convexity, and use them to estimate price changes and to build an immunized portfolio.
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

If a bond's yield stays constant, its price drifts toward par as maturity approaches, because the discount (or premium) is amortized away. A 10-year 5% bond priced at $926.40 at a 6% yield will be priced at $931.98 after one year (nine years remaining), $944.18 after three years, $957.88 after five years and $981.67 after eight years, reaching $1,000 at maturity. The increase is the **accretion** that partly compensates the investor for the below-market coupon. This steady drift is the reason why a bond's total return over a holding period is not simply the coupon: it is coupon plus price change, even if market yields do not move.

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

which averages the annual coupon income and the annual amortization of the discount, divided by the average investment.

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
3. **Coupons are reinvested at the YTM itself.** If market rates fall, the coupons are reinvested at lower rates and the realised return falls short of the YTM; if rates rise, reinvestment is more rewarding but the bond's price has fallen. This is the **reinvestment risk** that offsets **price risk**; we exploit the offset when we immunize a portfolio.

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

An investor or firm with a known future liability can use duration to lock in the ability to meet it, a technique called **immunization**. The idea is to offset price risk and reinvestment risk. If yields rise, the bonds lose market value but reinvested coupons earn more; if yields fall, the opposite occurs. Choosing a portfolio whose duration equals the liability's horizon makes the two effects cancel for small, parallel shifts in the yield curve.

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

## 4.5 The Term Structure of Interest Rates

### 4.5.1 Spot rates and the yield curve

So far we have used a single yield to discount all of a bond's cash flows. But the market does not charge the same rate for money lent for one year as for ten. The **term structure of interest rates** describes how yields vary with maturity. The **yield curve** plots the YTM of otherwise comparable bonds (typically government securities) against their maturities.

The cleanest building block is the **spot rate** sₜ, the yield on a zero-coupon bond maturing at date t. A cash flow at date t should be discounted at sₜ, not at some blended YTM:

```
P = Σ CFₜ / (1 + sₜ)ᵗ
```

The YTM of a coupon bond is a complicated average of the spot rates applicable to its individual payments, weighted by their present values. Two bonds with identical maturities and different coupons will therefore have different YTMs when the curve is not flat (the "coupon effect"), even though they are priced from the same spot curve. Spot rates are not directly observable beyond the bills market, but they can be extracted ("bootstrapped") from the prices of coupon bonds and strips.

### 4.5.2 Forward rates

A **forward rate** is the interest rate, implied by today's spot curve, for a loan that starts at a future date. Consider two ways to invest $1 for two years: buy a two-year zero at s₂, or buy a one-year zero at s₁ and reinvest the proceeds for a second year at the rate f₁,₂ agreed today. To rule out riskless arbitrage the two must produce the same result:

```
(1 + s₂)² = (1 + s₁)(1 + f₁,₂)      →      f₁,₂ = (1 + s₂)² / (1 + s₁) − 1
```

In general, the forward rate between dates t − 1 and t is

```
f(t−1, t) = (1 + sₜ)ᵗ / (1 + s(t−1))^(t−1) − 1
```

and the forward rate for a multi-period loan starting at date a and ending at date b is [(1 + s_b)^b / (1 + s_a)^a]^(1/(b−a)) − 1. Forward rates are the marginal cost of extending maturity: they show what the market charges for the *additional* year of borrowing. When the spot curve rises, forward rates lie above spot rates; when it falls, forwards lie below.

**Example 4.8 – From spot rates to forwards and bond prices.** The government zero-coupon curve is: 1-year 3.0%, 2-year 3.5%, 3-year 4.0%, 4-year 4.4%.

*Step 1 – discount factors.* 1/1.03 = 0.970874; 1/1.035² = 0.933511; 1/1.04³ = 0.888996; 1/1.044⁴ = 0.841779.

*Step 2 – one-year forward rates.*
- f₁,₂ = 1.035² / 1.03 − 1 = 1.071225 / 1.03 − 1 = **4.002%**.
- f₂,₃ = 1.04³ / 1.035² − 1 = 1.124864 / 1.071225 − 1 = **5.007%**.
- f₃,₄ = 1.044⁴ / 1.04³ − 1 = 1.187960 / 1.124864 − 1 = **5.609%**.
- Three-year forward rate starting in one year: [(1.044⁴) / 1.03]^(1/3) − 1 = (1.153360)^(1/3) − 1 = **4.871%**.

*Step 3 – price a 4-year 5% annual-coupon bond off the curve.* P = 50 × 0.970874 + 50 × 0.933511 + 50 × 0.888996 + 1,050 × 0.841779 = 48.54 + 46.68 + 44.45 + 883.87 = **$1,023.54**.

*Step 4 – its YTM.* The single rate that discounts the bond's flows to $1,023.54 is **4.346%**. This is lower than the 4-year spot rate (4.4%) because the YTM averages in the lower short-term spot rates through the coupon payments.

A manager who wants to lock in a rate today for borrowing that will start in one year can ask a bank for a forward-rate agreement, or construct the position from zero-coupon bonds; the cost is the forward rate, here 4.871% for three years.

### 4.5.3 Why the curve slopes: three theories

**The pure expectations theory.** Forward rates are unbiased predictions of future spot rates. An upward-sloping curve means the market expects short rates to rise; a downward-sloping one means it expects them to fall. If this were the whole story, investors would be indifferent between a long bond and a rolled-over series of short ones. The theory is elegant, but empirically forward rates tend to exceed subsequently realised spot rates, on average, which suggests that something else is also priced.

**Liquidity preference (term premium).** Investors dislike price risk, and long bonds are more volatile than short ones (higher duration). Investors therefore require a premium, the *term premium*, to hold long bonds, while borrowers are willing to pay it to lock in long-term funds. Forward rates equal expected future spot rates *plus* a term premium that rises with maturity. This explains why yield curves are upward-sloping more often than not.

**Market segmentation and preferred habitat.** Different investors have natural maturities: pension funds and life insurers want long assets to match long liabilities; money-market funds want short ones. In the pure segmentation view, each maturity has its own supply and demand. The preferred-habitat variant, developed by Modigliani and Sutch, allows investors to move out of their habitat if the extra return is sufficient, so arbitrage links the segments but imperfectly. Central bank asset purchases, which remove long bonds from the market, are a modern example of a segmentation effect on the curve.

In practice the curve embodies all three: expectations of the central bank's policy path, term premia for duration risk, and supply-and-demand pressures in particular maturities.

**Table 4.4 – Common yield-curve shapes and their usual interpretation**

| Shape | Description | Usual interpretation | Managerial implication |
|---|---|---|---|
| Normal (upward-sloping) | Long yields above short yields | Expected rate rises and/or positive term premium | Short-term funding is cheaper now, but refinancing risk is higher |
| Flat | Similar yields across maturities | Transition; mixed expectations | Little yield sacrifice for extending maturity |
| Inverted | Short yields above long yields | Expected rate cuts, often tight policy; historically associated with slowdowns | Long-term funding may be attractive; short-term investments earn more |
| Humped | Medium maturities highest | Expected rate rise followed by fall | Medium-term borrowing is the most expensive point |

An **inverted** curve gets attention because it has often preceded economic slowdowns, but it should be treated as one input into a forecast, not as a mechanical prediction.

### 4.5.4 Using the curve in corporate decisions

The term structure bears on managers in several concrete ways. First, project cash flows at different horizons should in principle be discounted using rates for matching maturities, though in practice a single risk-adjusted rate is usually applied. Second, the shape of the curve guides the maturity decision for borrowing: the extra yield for extending from 5 to 15 years is the term premium plus expected rate rises, and the forward rate is the benchmark against which any view of future rates should be tested. Anil's 110-basis-point premium is worth paying for a 15-year bond only if the firm values the removal of refinancing risk more than the expected saving from borrowing short and rolling over. Third, for any floating-rate liability, the forward curve gives the expected path of interest cost, and the swap market can fix it.

## 4.6 Credit Risk, Spreads and Ratings

### 4.6.1 Yield as risk-free rate plus credit spread

A government bond in its own currency is treated as free of default risk. A corporate bond is not. The extra yield that investors demand over a comparable government bond is the **credit spread**:

```
Corporate yield = Risk-free yield (same maturity) + Credit spread
```

The spread compensates for (i) **expected loss** from default, equal to the probability of default (PD) times the loss given default (LGD = 1 − recovery rate), (ii) a **risk premium** for bearing uncertainty about default and spread changes, which investors cannot fully diversify, particularly in recessions when defaults cluster, and (iii) in some markets a **liquidity premium**, since corporate bonds trade less than government bonds, and sometimes a tax effect. A rough rule is

```
Spread ≈ PD × LGD + risk premium + liquidity premium
```

Therefore the promised yield on a risky bond overstates its expected return. An investor who buys a bond with a 250-basis-point spread should not expect to earn 250 bp more than the government, since part of the spread is the expected cost of default.

**Example 4.9 – Extracting default probability from a spread.** A one-year zero-coupon government bond yields 4.0%. A one-year zero-coupon bond from Tessellate Power yields 6.5% and recovers 40% of face value in default. What default probability is implied (the risk-neutral probability)? How much of the 250 bp spread is expected loss if the analyst's own estimate of the true default probability is 2.0%?

*Step 1 – no-arbitrage condition.* In a risk-neutral setting the expected payoff of the corporate bond must be worth the same as the government bond. Payoff per $1 of face value: $1 with probability 1 − q, $0.40 with probability q. Setting the expected payoff discounted at the risk-free rate equal to the corporate price (1/1.065):

(1 − q) + 0.40 q = 1.04 / 1.065 = 0.976526

*Step 2 – solve.* 1 − 0.60 q = 0.976526, so q = 0.023474 / 0.60 = **3.912%**.
*Step 3 – compare with the simple rule.* PD × LGD = 3.912% × 0.60 = 2.347%, which is close to the actual 2.5% spread (the difference arises from discounting).
*Step 4 – decompose with the analyst's estimate.* If the true default probability is 2.0%, expected loss is 2.0% × 0.60 = 1.20% (120 bp). The remaining spread of about 130 bp is a premium for risk and illiquidity. The risk-neutral probability exceeds the real-world probability because investors are risk-averse and want compensation for default risk that is correlated with bad economic states.

The distinction matters in practice: to value a bond, use the market's risk-neutral probability, which is embedded in the price; to estimate the expected return on a bond portfolio, use the real-world probability.

### 4.6.2 Credit ratings

Credit-rating agencies (Standard & Poor's, Moody's and Fitch are the best known) publish opinions on the creditworthiness of issuers and individual bonds. Ratings are ordinal categories, not precise probabilities, and they reflect the agency's judgement about the issuer's business risk, financial leverage, cash-flow coverage, liquidity, covenants and, for bonds, seniority. The scale runs from the highest quality to default.

**Table 4.5 – Structure of long-term credit rating scales**

| Category | S&P / Fitch | Moody's | General meaning | Market segment |
|---|---|---|---|---|
| Highest quality | AAA | Aaa | Extremely strong capacity to meet obligations | Investment grade |
| High quality | AA | Aa | Very strong capacity | Investment grade |
| Upper medium | A | A | Strong, but more exposed to adverse conditions | Investment grade |
| Lower medium | BBB | Baa | Adequate capacity; adverse conditions may weaken it | Investment grade (lowest tier) |
| Speculative | BB | Ba | Faces major uncertainties | High yield ("junk") |
| Highly speculative | B | B | Vulnerable; currently able to pay | High yield |
| Substantial risk | CCC and below | Caa and below | Currently vulnerable; reliant on favourable conditions | High yield / distressed |
| Default | D (S&P) | C (Moody's, in the lowest category) | Payment default or bankruptcy filing | Defaulted |

Each category from AA to CCC is subdivided with modifiers (+/− at S&P and Fitch; 1, 2, 3 at Moody's). The boundary between BBB−/Baa3 and BB+/Ba1 is the key line between **investment grade** and **speculative grade**. It is more than a label: many pension funds, insurers and index funds have mandates that restrict them to investment-grade debt, so a downgrade across that line (a "fallen angel") can force selling, widen spreads sharply and raise the issuer's cost of capital across all its borrowing. Managers therefore treat the investment-grade boundary as a constraint on capital structure, and often target a rating that leaves some headroom.

Several cautions apply. Ratings lag market information, so bond spreads often move before rating changes. Ratings are through-the-cycle opinions and are therefore smoother than market-implied credit risk. Rating agencies were widely criticised for the high ratings assigned to certain structured securities before the financial crisis of 2007–2009, a reminder that ratings are fallible opinions and not guarantees. Investors should use them alongside market spreads and their own analysis.

### 4.6.3 Spread risk and spread duration

Spreads change over time, typically widening in recessions and narrowing in expansions. For a holder of corporate bonds, a spread move is another source of price risk, added to the movement in government yields. The sensitivity of a bond's price to its spread is approximated by its **spread duration**, which for a fixed-rate bond is close to its modified duration.

**Example 4.10 – Spread widening.** Tessellate has a 7-year bond with a 5% annual coupon. The government 7-year yield is 4.0% and the bond's spread is 250 bp, giving a yield of 6.5%. The market becomes nervous about the sector, and the spread widens by 100 bp to 350 bp while government yields are unchanged.

*Step 1 – price at 6.5%.* Annuity factor = (1 − 1.065⁻⁷) / 0.065 = (1 − 0.643506) / 0.065 = 5.4845; PV of coupons = $50 × 5.4845 = $274.23; PV of principal = $1,000 × 0.643506 = $643.51. Price = **$917.73** (computed from unrounded factors).
*Step 2 – price at 7.5%.* Price = **$867.58**.
*Step 3 – change.* −$50.15, or −5.46%.
*Step 4 – check against duration.* Modified duration at 6.5% = 5.66, so the approximate change is −5.66% × 1 = −5.66%, or −$51.9 (convexity makes the actual loss slightly smaller).

The company's own borrowing cost is unaffected by this change in the market value of the bond if it holds to maturity, but a widening spread signals a higher cost on any new issue, and affects the fair value of any liabilities the firm marks to market.

### 4.6.4 Managing credit risk as an issuer

For the issuer the spread is a function of leverage, coverage, asset quality and market conditions. Actions that reduce spreads include lowering debt, extending maturities to remove clustering of refinancing, offering collateral or seniority, accepting covenants, and building a reputation for conservative financial policy. Each has costs: lower leverage forgoes tax shields; covenants limit flexibility; and collateral drains the pool of unencumbered assets. The efficient choice depends on the trade-offs developed in the chapters on capital structure.

## 4.7 Inflation-Linked Bonds

### 4.7.1 How they work

A conventional bond promises fixed nominal payments, so its real value is exposed to inflation. An **inflation-linked bond** adjusts its cash flows for realised inflation so that the investor's purchasing power is preserved. The best-known examples are U.S. Treasury Inflation-Protected Securities (TIPS) and the index-linked gilts of the United Kingdom, but many governments and some corporations and utilities issue them. Design details vary, but the typical TIPS structure is:

- The **principal is multiplied by an index ratio**, the current consumer-price index divided by the index at issuance.
- The **coupon rate is fixed and real**; each coupon equals that rate times the *inflation-adjusted* principal at the coupon date.
- At maturity the holder receives the adjusted principal, and in the U.S. design not less than the original principal (a deflation floor on redemption).

The quoted yield on such a bond is a **real yield**: the yield to maturity of the real cash flows, measured in purchasing-power units. The nominal return depends on realised inflation:

```
(1 + nominal return) = (1 + real yield) × (1 + realised inflation)
```

**Example 4.11 – Cash flows of an inflation-linked bond.** An investor buys a five-year inflation-linked bond with $1,000 original principal and a 1.5% real coupon, paid annually. Inflation turns out to be a constant 3.0% a year.

| Year | Index ratio | Adjusted principal | Coupon (1.5% × adjusted principal) |
|---|---|---|---|
| 1 | 1.0300 | $1,030.00 | $15.45 |
| 2 | 1.0609 | $1,060.90 | $15.91 |
| 3 | 1.0927 | $1,092.73 | $16.39 |
| 4 | 1.1255 | $1,125.51 | $16.88 |
| 5 | 1.1593 | $1,159.27 | $17.39 |

At maturity the holder receives $1,159.27 of principal plus the final coupon of $17.39. The nominal coupons rise steadily, and the redemption amount compensates for the cumulative inflation of 15.93%. The holder's nominal return is approximately (1.015)(1.03) − 1 = 4.545% per year, which is the real coupon rate compounded with inflation. A conventional bond with a fixed 4.5% coupon would have paid $45 every year and returned $1,000, and would have lost to the indexed bond if inflation had averaged more than about 3%.

(Check: coupon in year 4 is 1.5% × $1,125.51 = $16.88; year 5, 1.5% × $1,159.27 = $17.39.)

### 4.7.2 Real yields and breakeven inflation

Comparing a conventional government bond with an indexed bond of the same maturity yields the market's implied expectation of inflation, the **breakeven inflation rate**:

```
Breakeven inflation = (1 + nominal yield) / (1 + real yield) − 1  ≈  nominal yield − real yield
```

This is the Fisher equation (Chapter 3) applied to market yields. If the 10-year nominal yield is 4.5% and the 10-year real yield is 1.8%, breakeven inflation is 1.045 / 1.018 − 1 = **2.652%** (the simple difference gives 2.7%). An investor who believes inflation will average more than 2.65% should prefer the indexed bond; one who thinks it will be lower should hold the nominal bond. The breakeven rate is not a pure inflation forecast. It also includes an *inflation risk premium* (compensation to nominal bondholders for inflation uncertainty), which raises it, and the lower liquidity of indexed bonds, which raises their real yield and thereby pushes the breakeven down. Interpreting breakeven rates as forecasts therefore requires caution.

The price of an indexed bond is the present value of its real cash flows at the real yield, multiplied by the index ratio. For a five-year bond with a 1.5% real coupon and a real yield of 1.2%, the real price per $1,000 of original principal is $1,014.47 per unit of index ratio. The bond trades above par because its coupon exceeds the real yield.

### 4.7.3 Who benefits, and the risks

For investors, indexed bonds hedge inflation risk: pension funds with inflation-linked liabilities, retirees wanting a steady real income, and diversified portfolios all benefit. Indexed bonds are not riskless, though. Their real yields move, so a rise in real yields lowers their prices, and with long maturities the real-rate duration is substantial. Realised inflation affects cash flows with a lag, because of the index publication lag. In some markets, taxation of the inflation accrual can create "phantom income": taxable income that is not received in cash until maturity.

For issuers, the trade-off is the reverse. An issuer whose revenues track inflation, such as a regulated utility whose tariffs are adjusted annually or a toll-road operator whose tolls are indexed, can match its liabilities to its revenues and avoid a mismatch. It may also save the inflation risk premium that investors build into nominal yields. An issuer whose revenues are fixed in nominal terms faces the danger of an inflation surprise, as Tessellate's board worried: servicing costs rise but revenues do not.

**Table 4.6 – Nominal versus inflation-linked funding for an issuer (3.1% real yield; illustrative inflation outcomes)**

| Average inflation | All-in nominal cost of indexed bond | Cost of 6.4% fixed bond | Indexed cheaper? |
|---|---|---|---|
| 1.0% | 4.13% | 6.40% | Yes |
| 2.0% | 5.16% | 6.40% | Yes |
| 2.5% | 5.68% | 6.40% | Yes |
| 3.2% | 6.40% | 6.40% | Break-even |
| 4.0% | 7.22% | 6.40% | No |
| 5.0% | 8.26% | 6.40% | No |

(Cost = 1.031 × (1 + inflation) − 1.) The breakeven inflation for Tessellate is 1.064 / 1.031 − 1 = 3.20%. For a revenue stream that is itself indexed, the comparison is misleading, because higher inflation raises revenue as well as cost; what matters is the *real* margin, which is the same under all inflation outcomes if the structure is matched.

## 4.8 Managerial Implications

Bond markets are not just a source of funds. They are a source of information and a place where several of the firm's risks are priced. The main managerial takeaways of the chapter are as follows.

**Cost of debt.** The correct cost of debt for valuation is the current market yield on the firm's debt (the YTM on comparable-risk, comparable-maturity bonds), not the coupon on the debt it issued years ago. In the weighted-average cost of capital the cost of debt is then adjusted for the tax deductibility of interest.

**Maturity and refinancing.** A firm with long-lived assets that funds with short-term debt bears refinancing risk: when a large block of debt matures, the firm must refinance at whatever rate and spread prevail then. Spreading maturities ("laddering") reduces this exposure. Extending maturity costs the term premium, but buys certainty.

**Interest-rate exposure.** Duration provides the language for managing the sensitivity of debt and pension liabilities to rate changes. Firms can alter exposure by choosing fixed versus floating-rate debt, by using swaps to convert one to the other, or by matching the duration of pension assets to that of the liabilities.

**Credit rating as a strategic variable.** Rating thresholds affect the investor base, the cost of debt and access to commercial paper markets. Managers may deliberately hold lower leverage than the tax-optimal level to preserve a rating, a decision that should be explicit and justified.

**Reading the market.** The yield curve and breakeven inflation provide market-based evidence on rate and inflation expectations for use in planning. Credit spreads on the firm's own bonds and on its peers' provide an early warning of changing investor perceptions.

**Matching principle.** A recurring theme is to match the characteristics of liabilities with those of assets and revenues: maturity, rate type (fixed or floating), currency and inflation linkage. Mismatches are not always wrong, but they should be taken deliberately and measured.

## Case Study: Tessellate Power's Financing Choice

*Illustrative case. Tessellate Power is a fictional company.*

Tessellate Power generates and sells electricity to about 900,000 customers under a regulatory framework in which tariffs are reset annually to reflect a measure of consumer-price inflation, with a lag of one year. The company has $2.1 billion of debt outstanding, with a weighted average maturity of 6.5 years and a weighted average coupon of 4.8%. It is rated BBB by one agency and Baa2 by another. The company's principal covenant is a limit on net debt to earnings before interest, tax, depreciation and amortization (EBITDA).

The board has approved a $400 million wind and storage project. The treasurer, Anil Desmarais, must choose between three structures that investment bankers have priced on the same day.

- **Option A**: 5-year fixed-rate bond, 5.3% annual coupon, issued at par.
- **Option B**: 15-year fixed-rate bond, 6.4% annual coupon, issued at par.
- **Option C**: 15-year inflation-linked bond, real coupon 3.1%, principal indexed to consumer prices.

The government yield curve that day shows a 5-year yield of 4.0%, a 15-year yield of 4.6% and a 15-year real (inflation-linked government) yield of 1.9%. Thus the credit spreads implied are 130 bp for Option A and 180 bp for Option B, and 120 bp for Option C measured on a real basis. The bankers note that the spread for Option B is wider partly because of the longer exposure to Tessellate's credit and because the BBB rating is only one notch above the investment-grade boundary.

Anil gathers more information. Tessellate's cash flows are expected to be flat in real terms for the first six years, since the project ramps up slowly, and then to rise as the project reaches full capacity. The company's EBITDA is about 70% regulated and indexed, and 30% from merchant sales whose prices are volatile and have no inflation link. Existing debt is mostly fixed-rate and nominal, with a modest maturity wall of $600 million due in year 5. If the company were downgraded to BB+, Anil estimates that spreads on all new issuance would widen by at least 150 bp, and several large investors would sell.

The bankers' view is that the 5-year bond is cheapest now, but they warn that refinancing the whole $400 million in five years would coincide with the $600 million maturity wall, so that $1 billion would need to be refinanced in one year. The chief executive prefers Option B because "we can fix the cost for 15 years and forget about it." The head of risk argues for Option C, noting that regulated revenues are indexed, and that Option C reduces the interest-rate mismatch. But the chief financial officer fears that inflation, which averaged 2.5% in the recent past, could be volatile and that a serious spike would raise the nominal burden on the 30% of cash flow that is not indexed.

Anil's analysts also compute that, at a 6.4% yield, a 15-year 6.4% bond would have a modified duration of about 9.5, whereas the 5-year bond at 5.3% would have a duration of about 4.3. A 100 bp rise in market yields would lower the market value of the 15-year bond by roughly 9.5%, but, because Tessellate intends to hold the debt to maturity and not mark it to market, the effect would show up only in disclosures and in the opportunity cost of having locked in the rate. The analysts also point out that the all-in cost of Option C is 5.7% in nominal terms if inflation averages 2.5%, and exceeds 6.4% if inflation averages more than 3.2%.

**Discussion questions**

1. Compute the breakeven inflation rate on the government curve (15-year nominal 4.6%, 15-year real 1.9%) and on Tessellate's own bonds (Options B and C). What does the comparison imply about whether Tessellate is buying inflation protection cheaply or dearly, and which components of breakeven (expected inflation, inflation risk premium, liquidity) might explain the difference?
2. Assess the refinancing risk of Option A given the maturity wall in year 5. Propose a debt-maturity profile (a mix of the three options or an alternative) that spreads refinancing risk, and discuss the cost of that choice using the shape of the yield curve and the term premium.
3. Using the information on revenue (70% indexed, 30% merchant), discuss how well each option matches Tessellate's cash flows. How might the firm hedge the remaining mismatch, and how would you decide between the hedge and a simpler fixed-rate structure?
4. The downgrade threshold is a close constraint. How should the potential for a downgrade influence the choice, and what disclosures or financial policies (such as leverage targets) might Tessellate adopt to protect its investment-grade rating? Estimate the added annual interest cost on $400 million of a 150 bp widening.

## Key Takeaways

- A bond is the present value of its coupons (an annuity) and principal (a lump sum), discounted at the market yield; the coupon rate is a label fixed at issue while the yield moves with the market.
- Bond prices and yields move in opposite directions; a bond sells at a premium, par or discount according to whether its coupon is above, equal to or below its yield, and its price is pulled toward par as maturity approaches.
- YTM is the bond's internal rate of return if held to maturity, with full payment and reinvestment of coupons at the YTM itself. Realised returns differ when rates change, and for risky bonds promised yields exceed expected yields.
- Quoted bond prices are clean prices; the buyer pays the dirty price, equal to the clean price plus accrued interest.
- Macaulay duration is the present-value-weighted average time to cash flows; modified duration (D / (1 + y)) gives the approximate percentage price change per unit change in yield. Duration rises with maturity and falls with coupon and yield.
- Convexity captures the curvature of the price–yield relationship and improves the duration estimate for large rate moves; investors value positive convexity and the options embedded in callable bonds can make it negative.
- Immunisation sets asset duration equal to the liability horizon (and present values equal) so that price and reinvestment effects offset; it requires rebalancing and protects only against parallel shifts.
- The term structure is described by spot rates, and forward rates implied by the spot curve are the market-implied marginal cost of extending maturity; slopes reflect rate expectations, term premia and segmentation.
- A credit spread compensates for expected loss, a risk premium and illiquidity; the rating scale's investment-grade boundary is a practical constraint on issuers because many institutional investors cannot hold speculative-grade debt.
- Inflation-linked bonds pay a real yield on an inflation-adjusted principal; the difference between nominal and real yields (the breakeven rate) reflects expected inflation plus risk and liquidity premia, and indexed funding is attractive mainly when the issuer's revenues are themselves indexed.

## Review Questions

1. Why must the price of a fixed-rate bond fall when market yields rise? Explain in terms of present values.
2. A bond has a coupon of 7% and a yield of 5%. Will it trade at par, at a premium or at a discount? What will happen to its price if its yield remains at 5% until maturity?
3. Explain the difference between clean and dirty prices. Why do bond markets quote clean prices?
4. List the three assumptions underlying the YTM calculation. Which is most likely to be violated, and what is the consequence for a long-dated, high-coupon bond?
5. Why is duration a better measure of interest-rate risk than maturity? Under what conditions does duration equal maturity?
6. Explain why convexity is valuable to a bondholder. Why can a callable bond exhibit negative convexity?
7. Describe how a company with a known future liability could immunize it. What are the limitations of the technique?
8. Define a forward rate and explain how it is derived from spot rates. What does it mean if the forward rate is above the expected future spot rate?
9. Distinguish expected loss from the credit spread. Why is the risk-neutral default probability higher than the real-world default probability?
10. Explain how breakeven inflation is calculated from nominal and real yields, and why it should not be read as a pure forecast of inflation.

## Problems

1. **Bond pricing.** A $1,000 face value bond has a 7% annual coupon and six years to maturity. Compute its price at yields of (a) 8% annual, (b) 8% bond-equivalent with semi-annual coupons, and (c) 6% annual.
2. **YTM.** A five-year bond with a 6% annual coupon sells for $1,080. Compute its yield to maturity.
3. **Duration and convexity.** A four-year bond with an 8% annual coupon is priced at a 7% yield. Compute (a) its price, (b) its Macaulay duration, (c) its modified duration and convexity, and (d) the estimated price change for a yield increase of 50 basis points, with and without the convexity adjustment, together with the exact change.
4. **Spot and forward rates.** The zero-coupon spot rates are 2.0% (1 year), 2.8% (2 years) and 3.4% (3 years). Compute (a) the price of a three-year zero-coupon bond with face value $1,000, (b) the forward rates f₁,₂ and f₂,₃, and (c) the price of a three-year 4% annual-coupon bond.
5. **Credit spread.** A one-year government zero yields 3.5%, and a one-year corporate zero yields 5.9%. If recovery in default is 50%, compute the risk-neutral default probability. What is the spread, and how does it compare with PD × LGD?
6. **Inflation-linked bond.** The 10-year nominal yield is 5.2% and the 10-year real yield is 2.1%. (a) Compute breakeven inflation. (b) An inflation-linked bond has an original principal of $1,000 and a 2.0% real annual coupon; if inflation is 2.5% each year, what is the principal and coupon in year 2?
7. **Immunisation.** A firm owes $2,000,000 in five years. The yield is 6% for all maturities. Design a portfolio of 2-year and 8-year zero-coupon bonds that is immunized: compute the present value of the liability and the amount to invest in each bond.
8. **Portfolio and zero-coupon duration.** A portfolio holds 40% of its value in a bond with a modified duration of 3.2 and 60% in a bond with a modified duration of 7.5. (a) Compute the portfolio modified duration. (b) Estimate the percentage change in portfolio value if yields rise by 75 basis points. (c) Compute the price of a 10-year zero-coupon bond at a 5% yield, and the percentage change if the yield rises to 5.5%.

### Answers to Selected Problems

1. (a) **$953.77**. (b) Semi-annual coupons of $35 for 12 periods at 4%: **$953.07**. (c) **$1,049.17**.
2. YTM = **4.193%**.
3. (a) **$1,033.87**. (b) Macaulay duration **3.585 years**. (c) Modified duration **3.350**; convexity **15.06**. (d) Duration only: −3.350 × 0.005 × 1,033.87 = **−$17.32**; with convexity: **−$17.12**; exact: price at 7.5% = $1,016.75, a change of **−$17.13**.
4. (a) $1,000 / 1.034³ = **$904.56**. (b) f₁,₂ = 1.028² / 1.02 − 1 = **3.606%**; f₂,₃ = 1.034³ / 1.028² − 1 = **4.611%**. (c) $40/1.02 + $40/1.028² + $1,040/1.034³ = **$1,017.81**.
5. q = (1 − 1.035/1.059) / 0.5 = **4.533%**. Spread = 5.9% − 3.5% = 2.4% (240 bp); PD × LGD = 4.533% × 0.5 = 2.266%, close to the spread.
6. (a) 1.052 / 1.021 − 1 = **3.036%**. (b) Year 2 principal = $1,000 × 1.025² = **$1,050.63**; coupon = 2% × $1,050.63 = **$21.01**.
7. PV of liability = $2,000,000 / 1.06⁵ = **$1,494,516.35**. Weight in the 2-year zero: (8 − 5)/(8 − 2) = 0.5, so **$747,258.17** in each.
8. (a) 0.4 × 3.2 + 0.6 × 7.5 = **5.78**. (b) ≈ −5.78 × 0.0075 = **−4.34%**. (c) Price = $1,000 / 1.05¹⁰ = **$613.91**; at 5.5% the price falls by about **4.64%** (duration approximation: −4.76%).
