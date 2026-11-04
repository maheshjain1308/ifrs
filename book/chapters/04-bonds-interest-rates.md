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

*Step 3 – at y = 4%.* Annuity factor = (1 − 1.04⁻¹⁰) / 0.04 = (1 − 0.675564) / 0.04 = 8.110896. PV of coupons = $50 × 8.110896 = $405.54. PV of principal = $1,000 × 0.675564 = $675.56. Price = **$1,081.11** (a premium).

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

