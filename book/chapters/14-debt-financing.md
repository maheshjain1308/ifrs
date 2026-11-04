# Chapter 14: Debt Financing

## Learning Objectives

After studying this chapter, you should be able to:

- Describe the main features of debt contracts (seniority, security, maturity, rate basis, amortization) and choose among bank loans, bonds, leases, convertibles and securitized funding for a given financing need.
- Compute loan payment schedules and bond prices, yields and interest-rate sensitivity (duration), and calculate the after-tax cost of debt.
- Explain the purpose of financial covenants, calculate covenant headroom and assess how covenants shift control and risk between borrower and lender.
- Evaluate a lease-versus-buy decision using the net advantage to leasing, and explain the effect of IFRS 16 on the lessee's balance sheet.
- Value a convertible bond as straight debt plus an equity option, and explain why firms issue convertibles.
- Perform a basic credit analysis (ratios, expected loss, a Z-score) and estimate debt capacity from leverage, coverage and cash-flow constraints.
- Describe how securitization transforms a pool of receivables into tranched securities, and how credit enhancement allocates losses.

## Opening Vignette

*Illustrative scenario; the company and all figures are fictional.*

Kestrel Aggregates is a regional producer of crushed stone and ready-mix concrete. It has EBITDA of $120 million, a fleet of trucks and plants worth more than $600 million at cost and a reputation for steady if unspectacular performance. Its chief financial officer, Imani Okafor, must fund a $180 million expansion: a new quarry, a rail spur and a fleet of delivery trucks.

Her treasury team lists the options. The firm's relationship banks will provide a five-year term loan at a floating rate over the interbank benchmark, with a leverage covenant. The bond market would accept a ten-year senior note at a fixed coupon, but the issue must be large enough to be tradable, and a rating agency has hinted that the firm's current leverage places it at the borderline of investment grade. Equipment dealers offer lease financing for the trucks on terms that appear cheap but would add to reported liabilities. A convertible note could reduce the coupon but would add potential dilution. A receivables securitization might release working capital but depends on the quality of customer invoices.

Okafor also knows that more debt is not always better. A downturn in construction would cut volumes quickly because the firm has high fixed costs. If the debt service were too heavy, a covenant breach could hand control of decisions to lenders at the worst moment.

Her challenge is to select the mix of instruments, maturities and covenants that gives the company enough capital at a reasonable cost, preserves flexibility, and matches obligations to the cash flows of the assets they finance. In this chapter we build the toolkit: how each instrument works and is priced, how lenders think about credit, and how a firm estimates how much debt it can responsibly carry.

## 14.1 The Landscape of Debt Financing

Debt is a contractual claim: the borrower promises to pay interest and repay principal on specified dates, and lenders have legal remedies if it does not. Unlike equity, debt does not share in upside, interest is generally tax deductible, and default can transfer control to creditors. Chapter-level questions about the optimal mix of debt and equity are treated elsewhere in the capital-structure material; here we concentrate on how debt is raised, priced and managed.

### 14.1.1 Dimensions of a debt contract

Every debt instrument is a bundle of choices on several dimensions.

- **Maturity.** Short-term debt (under a year) funds working capital; medium-term (three to seven years) funds equipment and projects; long-term (ten years or more) funds infrastructure. A general principle is **matching**: finance an asset with liabilities whose repayment profile matches the asset's cash flows, so the firm is not forced to refinance in a bad market.
- **Rate basis.** *Fixed-rate* debt provides certainty of interest cost but exposes the borrower to opportunity cost if rates fall. *Floating-rate* debt pays a benchmark rate plus a margin, so interest cost follows the market; it suits borrowers whose revenues move with rates, or who hedge with swaps.
- **Currency.** Borrowing in the currency of the firm's cash flows avoids exchange risk. Borrowing in a cheaper foreign currency is risky unless hedged.
- **Seniority and security.** *Senior* debt is paid before *subordinated* (junior) debt in bankruptcy. *Secured* debt has a claim on specific collateral. *Unsecured* debt ranks equally with other general creditors. More senior or better collateralized debt has lower expected loss and so a lower required yield.
- **Amortization.** *Bullet* debt repays all principal at maturity; *amortizing* debt repays principal gradually; a *sinking fund* provision requires scheduled retirements.
- **Optionality.** Call provisions let the issuer repay early; put provisions let the lender demand repayment; conversion rights allow exchange into equity. These features are options and are priced into the coupon.
- **Covenants.** Promises restricting the borrower's actions or requiring maintenance of financial ratios (Section 14.2).

### 14.1.2 Sources of debt compared

**Table 14.1 – Principal debt instruments**

| Instrument | Typical borrower | Typical maturity | Rate | Main strengths | Main drawbacks |
|---|---|---|---|---|---|
| Bank term loan | Small to large firms | 3–7 years | Floating (often) | Flexible, negotiable, fast | Covenants, refinancing risk, bank capacity |
| Revolving credit facility | Most corporates | 3–5 years | Floating | Liquidity on demand; pay only on use | Commitment fees; covenants |
| Syndicated loan | Large firms | 3–7 years | Floating | Large amounts, relationship banks | Syndication complexity |
| Public bond | Large, rated issuers | 5–30 years | Fixed (often) | Long tenor, larger sums, looser covenants | Fixed costs, disclosure, rating dependence |
| Private placement | Mid-sized firms | 7–15 years | Fixed | Tailored terms, no public rating needed | Less liquid; negotiated covenants |
| Lease | Asset-intensive firms | Life of asset | Implicit rate | Asset-linked financing, tax benefits | Obligation on balance sheet; residual risk |
| Convertible bond | Growth firms | 5–10 years | Low coupon | Cheaper coupon; delayed equity | Potential dilution; complex valuation |
| Securitization | Firms with large receivable or loan pools | Matches pool | Tranche-specific | Funding based on assets rather than corporate credit | Complexity; reputational and legal risk |

### 14.1.3 The cost of debt

The pre-tax cost of debt is the **yield to maturity** on the firm's debt, not the coupon on past borrowings. It comprises a risk-free rate for the maturity, a **credit spread** for expected default loss and credit risk premium, and liquidity and term premia. Because interest is deductible in most tax systems, the after-tax cost is:

```
After-tax cost of debt = Pre-tax yield × (1 − Tax rate)
```

For example, a firm that borrows at 6.5% and pays tax at 25% has an after-tax cost of 6.5% × 0.75 = 4.875%. This formula assumes the firm has taxable income against which to deduct interest. A firm with losses or large non-debt tax shields gets less or no benefit. Moreover, many jurisdictions limit deductibility of net interest to a share of earnings. The tax advantage should therefore be applied cautiously for highly leveraged borrowers.

Do not confuse the cost of debt with the cost of *capital*. Debt is cheaper than equity because it is senior, but adding debt makes the remaining equity riskier and raises its required return; a firm that substitutes cheap debt for equity does not necessarily lower its overall cost of capital until the expected costs of financial distress are considered.

## 14.2 Bank Loans and Covenants

### 14.2.1 Types of bank credit

**Term loans** advance a fixed sum, repaid on a schedule. **Revolving credit facilities (revolvers)** let a borrower draw, repay and redraw up to a commitment limit during the facility's life. Borrowers pay interest on drawn amounts and a **commitment fee** (often a fraction of a percent per year) on undrawn amounts. Revolvers are the primary liquidity backstop for most corporates; their pricing often moves with the borrower's credit rating or leverage through a **pricing grid**. **Syndicated loans** are arranged by lead banks and funded by a group of lenders, allowing amounts larger than any one bank's appetite. Term Loan B-style tranches in leveraged finance are sold to institutional investors and typically carry minimal amortization and lighter maintenance covenants.

**Asset-based lending** lends against receivables and inventory with a **borrowing base** (for instance, 85% of eligible receivables plus 50% of eligible inventory). Capacity moves with the collateral, which makes it suitable for working-capital-heavy firms.

**Project finance** lends to a special-purpose project company, repaid solely from the project's cash flows with limited or no recourse to the sponsors. Lenders rely on contracts (offtake agreements, construction contracts) and the **debt service coverage ratio (DSCR)**: cash flow available for debt service divided by scheduled debt service.

### 14.2.2 Loan pricing

Loan pricing combines a benchmark rate plus a **margin** for credit risk, upfront and arrangement fees, commitment fees, and sometimes floors. The all-in cost should be computed as an internal rate of return on the net cash flows (proceeds net of fees against interest and principal), not read off the headline margin. A 0.75% upfront fee on a five-year loan adds roughly 0.17 percentage points to the annual cost, because the fee is received by the lender at the start while the interest is spread across the life.

### 14.2.3 Amortization schedules

An amortizing loan with level payments (an annuity) has payment:

```
Payment = P × r / (1 − (1 + r)^(−n))
```

where P is principal, r the periodic rate and n the number of periods. Early payments consist mostly of interest, and later payments mostly of principal.

**Example 14.1 – Level-payment term loan.**
Kestrel borrows $10,000,000 from a bank for six years at a fixed 7.0% with equal annual payments.

Step 1: Payment = 10,000,000 × 0.07 / (1 − 1.07^(−6)) = 700,000 / (1 − 0.66634) = 700,000 / 0.33366 = $2,097,958.

Step 2: Year-by-year schedule.

**Table 14.2 – Amortization schedule ($)**

| Year | Opening balance | Interest (7%) | Principal repaid | Payment | Closing balance |
|---|---|---|---|---|---|
| 1 | 10,000,000 | 700,000 | 1,397,958 | 2,097,958 | 8,602,042 |
| 2 | 8,602,042 | 602,143 | 1,495,815 | 2,097,958 | 7,106,227 |
| 3 | 7,106,227 | 497,436 | 1,600,522 | 2,097,958 | 5,505,705 |
| 4 | 5,505,705 | 385,399 | 1,712,559 | 2,097,958 | 3,793,146 |
| 5 | 3,793,146 | 265,520 | 1,832,438 | 2,097,958 | 1,960,708 |
| 6 | 1,960,708 | 137,250 | 1,960,708 | 2,097,958 | 0 |

Step 3: Total interest = 6 × 2,097,958 − 10,000,000 = $2,587,748. At a 25% tax rate the first-year tax saving on interest is 25% × 700,000 = $175,000, so the first year after-tax interest cost is $525,000.

The schedule shows two features that matter to the borrower. The interest tax shield declines as the balance falls. The cash-flow burden is level, which makes forecasting easy, but the borrower must generate $2.1 million a year regardless of operating conditions, in contrast to a bullet loan, where cash flow is lighter but refinancing risk is concentrated at maturity.

### 14.2.4 Why covenants exist

A lender's return is capped at the contractual interest while its downside is large. After the loan is granted, shareholders have incentives to take actions that transfer value from lenders: paying large dividends, issuing senior or equally ranking debt, selling collateral, or investing in riskier projects (**asset substitution**; Jensen and Meckling). A related problem is **debt overhang** (Myers), where a heavily indebted firm passes up valuable projects because the benefits would accrue largely to creditors. Covenants are the contractual response: they restrict risky behavior, give lenders an early warning and a seat at the table before the firm is insolvent.

### 14.2.5 Types of covenants

- **Affirmative covenants** require the borrower to do things: provide audited statements, maintain insurance, pay taxes, comply with laws, maintain assets.
- **Negative covenants** limit actions: additional debt, liens on assets, asset disposals, mergers, restricted payments (dividends and buybacks), related-party transactions and investments.
- **Financial maintenance covenants** require ratios to be met at each test date: maximum leverage (Debt/EBITDA), minimum interest coverage (EBITDA/interest), minimum fixed-charge coverage, minimum net worth or minimum liquidity.
- **Incurrence covenants** apply only when the borrower takes a specified action, such as issuing new debt; the borrower must show that the ratio would still be met after doing so. Bonds usually carry incurrence covenants; bank loans typically use maintenance covenants.

Definitions matter greatly. "EBITDA" in a credit agreement is a defined term that may permit add-backs for restructuring costs, projected synergies or non-cash items; "Debt" may or may not include leases and letters of credit. Negotiating the definitions can be worth as much as negotiating the ratio level.

**Example 14.2 – Covenant headroom.**
Kestrel's credit agreement requires Debt/EBITDA ≤ 4.00x and EBITDA/Interest ≥ 3.00x, tested quarterly on a rolling twelve-month basis. At the test date, Debt = $300 million, EBITDA = $80 million and interest expense = $24 million.

Step 1: Leverage = 300 / 80 = 3.75x (limit 4.00x). Coverage = 80 / 24 = 3.33x (limit 3.00x). Both tests are passed.

Step 2: EBITDA floor under the leverage test, holding debt constant: 300 / 4.00 = $75.0 million. Headroom = (80 − 75) / 80 = 6.25%.

Step 3: EBITDA floor under the coverage test, holding interest constant: 3.00 × 24 = $72.0 million. Headroom = (80 − 72) / 80 = 10.0%.

Step 4: The binding constraint is leverage, with 6.25% headroom. A drop in EBITDA of just $5 million (for instance from a wet season that halts quarrying) would trigger a breach.

Step 5: Additional borrowing capacity at constant EBITDA = 4.00 × 80 − 300 = $20 million, but borrowing it would leave zero leverage headroom, and extra interest at 8% ($1.6 million) would cut coverage headroom to 80 / 25.6 = 3.13x.

A prudent treasurer manages to an **internal target** well inside covenant levels (here, perhaps 3.0x) and models covenants under downside scenarios.

### 14.2.6 What happens at breach

A covenant breach is an **event of default** unless waived. In practice, lenders typically negotiate: they may grant a **waiver** or **amendment** in return for fees, a higher margin, tighter terms, additional collateral or an equity cure. The borrower's bargaining power diminishes sharply at this point, which is why covenant design is as much about control as about money. Many modern leveraged loans are "covenant-lite," with few or no maintenance tests, shifting protection toward documentation of incurrence tests and sponsors' equity cushions.

**Managerial implications.** (1) Negotiate covenant levels with ample headroom against a downside forecast, not the base case. (2) Seek "equity cure" rights and sensible EBITDA definitions. (3) Report covenant compliance forecasts to the board quarterly. (4) Keep relationships warm: banks are more flexible with borrowers that communicate early.

## 14.3 Bonds

### 14.3.1 Features and the issuance process

A **bond** is a tradable debt security. The issuer receives the principal at issuance and then pays a periodic **coupon** (fixed or floating) and the **face value** at maturity. Bonds may be issued domestically or in the international market (Eurobonds, issued outside the jurisdiction of the currency), and may be investment grade or high yield, based on credit ratings.

An issue involves selecting underwriters, obtaining ratings from rating agencies, drafting the offering document and the **indenture** (the contract including covenants, events of default and trustee arrangements), pricing relative to a benchmark government bond or swap rate, and distribution. Large, frequent issuers establish programs that allow rapid issuance when market windows open. Typical fees are lower than for equity, and the all-in cost includes the credit spread, underwriting fees, rating fees and legal costs.

**Credit ratings** summarize default likelihood and, in some cases, expected loss. Agencies rank issuers on scales from the highest-quality category down through the **investment-grade** categories to the speculative-grade, or **high-yield**, categories. The boundary matters because many institutional investors are restricted to investment-grade securities; a downgrade to high yield can force selling and sharply raise the issuer's cost of funding. Ratings are inputs, not guarantees: agencies have been late and wrong, notably in structured finance.

### 14.3.2 Bond pricing

A bond's price is the present value of its cash flows at the market yield for its risk and maturity:

```
Price = Σ [Coupon_t / (1 + y/m)^t] + Face / (1 + y/m)^(m×T)
```

where y is the annual yield (bond-equivalent), m the number of coupon periods per year, and T the years to maturity. When the yield equals the coupon rate, the bond trades at par; when the yield is above the coupon, it trades at a discount; when below, at a premium.

**Example 14.3 – Pricing a bond and measuring interest-rate risk.**
Kestrel issues a five-year bond with a face value of $100, a 6.0% annual coupon paid semiannually ($3.00 every six months).

Step 1: Price at yield 7.0% (semiannual rate 3.5%, 10 periods):
Annuity factor = (1 − 1.035^(−10)) / 0.035 = 8.3166.
PV of coupons = 3.00 × 8.3166 = 24.95.
PV of face = 100 / 1.035^10 = 100 / 1.41060 = 70.89.
Price = 24.95 + 70.89 = $95.84.

Step 2: At 6.0% the price is $100.00 (par). At 5.0% (semiannual 2.5%) the price is $104.38. At 8.0% (4.0% semiannual) the price is $91.89.

Step 3: Duration. The present values of the cash flows at 7.0% weighted by time (in years) give Macaulay duration of 4.377 years. Modified duration = 4.377 / (1 + 0.035) = 4.229. 

Step 4: Predicted price change for a one-percentage-point yield rise from 7.0% to 8.0%: −4.229 × 0.01 × 95.84 = −$4.05, compared with the actual change 91.89 − 95.84 = −$3.95. The slight overstatement arises because price is a convex function of yield: duration is a linear approximation.

Interpretation: a bond with a duration of about 4.2 years loses about 4.2% of its price for each one-percentage-point rise in yield. Long-dated, low-coupon bonds have higher durations and therefore are much more sensitive. For a corporate treasurer, duration matters in two ways: when estimating the price at which the firm could repurchase its bonds, and when matching asset and liability sensitivity.

**Table 14.3 – Price of the 6% five-year bond at different yields**

| Yield | Price per $100 | Premium / discount |
|---|---|---|
| 5.0% | 104.38 | Premium |
| 6.0% | 100.00 | Par |
| 7.0% | 95.84 | Discount |
| 8.0% | 91.89 | Discount |

### 14.3.3 Credit spreads and the yield curve

The yield on a corporate bond equals a benchmark government yield for the same maturity plus the **credit spread**. If the five-year government yield is 4.5% and Kestrel's bond yields 7.0%, the spread is 2.5 percentage points, or 250 basis points. Spreads widen when default risk rises or when investors demand more compensation for risk and illiquidity; they are typically higher for longer maturities, lower ratings and subordinated claims. Spreads also have a market-wide component: in recessions, spreads rise even for firms whose fundamentals are unchanged. A firm should therefore think of its borrowing cost as a combination of three things it influences differently: the base rate (not at all), the market spread level (not at all) and its individual credit quality (substantially).

### 14.3.4 Bond features that matter for the issuer

- **Call provisions.** An issuer may redeem a callable bond before maturity at a stated price, usually after a non-call period. Investors demand a higher coupon in exchange. Calls give the issuer an option to refinance if rates fall, but they are not free.
- **Make-whole calls.** The issuer may redeem early only by paying the present value of remaining payments at a spread over a benchmark, so the call is only rarely economic but protects investors.
- **Sinking funds.** Scheduled retirement reduces refinancing risk.
- **Floating-rate notes and inflation-linked bonds.** These change the pattern of cash flows to match revenues.
- **Green and sustainability-linked bonds.** Proceeds or coupon step-ups are tied to environmental or social targets. They broaden the investor base, but require reporting discipline and the claims should be credible.
- **Subordination and hybrids.** Junior or hybrid debt may receive partial equity credit from agencies, preserving rating headroom, in exchange for a higher coupon.

### 14.3.5 Public bonds versus bank loans

Bonds offer longer tenors, fixed rates, larger sizes and fewer maintenance covenants, but the issuer faces a public market with fixed costs (ratings, documentation, disclosure), an anonymous investor base that is harder to renegotiate with in distress, and early repayment frictions. Bank loans are more flexible and easier to renegotiate, and banks provide relationship services and monitoring, but they offer shorter maturities and are exposed to the banks' own balance-sheet constraints. Most large firms use both: bonds for the permanent base of funding and revolvers as liquidity backup. Because of fixed costs, there is a minimum efficient size for a public bond; mid-sized companies commonly use private placements or bank debt.

## 14.4 Leases

A **lease** gives the lessee the right to use an asset in return for periodic payments to the lessor, who owns it. Leasing is a form of secured borrowing: the lessor's claim is backed by the asset, which it can repossess. It is widely used for aircraft, vehicles, real estate, medical equipment and technology.

### 14.4.1 Why firms lease

- **Tax.** If the lessor can use depreciation and interest deductions more efficiently than the lessee (the lessee has losses or limited taxable income), leasing transfers tax benefits that can be shared through lower lease payments.
- **Asset-specific expertise and residual risk.** Lessors that specialize in an asset class know the secondary market and can bear residual-value risk more cheaply.
- **Financing at 100% of cost.** Leases may need less upfront cash than a purchase financed by a loan with a down payment.
- **Flexibility and obsolescence.** Operating leases of short duration let the lessee return the asset when its need or technology changes.
- **Covenant and capacity considerations.** Debt capacity under bank agreements may be tied to defined indebtedness; leases may fall outside it, depending on drafting.

Some reasons offered for leasing are weak. "Off-balance-sheet" financing no longer holds under the modern standards described below, and sophisticated lenders and rating agencies adjust for leases in any case.

### 14.4.2 Accounting: IFRS 16

Under IFRS 16, almost all leases (with limited exemptions for short-term leases of twelve months or less and low-value assets) are recognized by the lessee as a **right-of-use asset** and a **lease liability**, measured as the present value of the lease payments discounted at the rate implicit in the lease or, if that cannot be determined, the lessee's incremental borrowing rate. The income statement shows depreciation of the right-of-use asset and interest on the liability instead of a single operating lease expense. Consequently, EBITDA rises (the lease cost is replaced by depreciation and interest, both below EBITDA), reported debt rises, and the pattern of expense is front-loaded because interest is highest early in the lease. Lessors continue to classify leases as finance or operating, depending on whether substantially all risks and rewards of ownership are transferred. U.S. GAAP (ASC 842) also brings leases onto the balance sheet but retains a distinction between finance and operating leases in income-statement presentation. For credit analysis and covenant compliance, the analyst must know whether lease liabilities are included in "Debt" and whether lease costs are in "EBITDA."

### 14.4.3 The lease-versus-buy decision

The economic analysis compares the cash flows of leasing with those of buying the asset financed by debt. The standard approach computes the **net advantage to leasing (NAL)**, discounting after-tax cash flows at the **after-tax cost of secured debt**, because lease payments are fixed obligations of similar risk to debt.

```
NAL = Cost of asset − PV[ after-tax lease payments ] − PV[ depreciation tax shields forgone ] − PV[ after-tax residual value forgone ]
```

If NAL > 0, leasing is cheaper than buying.

**Example 14.4 – Lease versus buy.**
Kestrel needs a $1,000,000 crusher. The asset has a five-year life, is depreciated straight line to zero for tax, and has no residual value. The tax rate is 25%, and Kestrel's pre-tax secured borrowing rate is 8.0%. A lessor offers a five-year lease at $240,000 per year, payable at the end of each year.

Step 1: After-tax discount rate = 8.0% × (1 − 0.25) = 6.0%. Five-year annuity factor at 6.0% = (1 − 1.06^(−5)) / 0.06 = 4.2124.

Step 2: After-tax lease payment = 240,000 × (1 − 0.25) = $180,000 per year. PV = 180,000 × 4.2124 = $758,225.

Step 3: Annual depreciation = 1,000,000 / 5 = $200,000; tax shield forgone = 200,000 × 0.25 = $50,000 per year. PV = 50,000 × 4.2124 = $210,618.

Step 4: NAL = 1,000,000 − 758,225 − 210,618 = **+$31,156**. Leasing is cheaper by about $31,000 in present value.

Step 5: Break-even lease payment (NAL = 0). Solve 1,000,000 − L × 0.75 × 4.2124 − 210,618 = 0 so L = 789,382 / 3.1593 = $249,860. Kestrel would be indifferent at a lease payment of about $250,000; the offer of $240,000 therefore has a modest advantage.

Step 6: IFRS 16 treatment. The lease liability is the PV of $240,000 for five years at the incremental borrowing rate of 8.0%: annuity factor 3.9927, so liability = 240,000 × 3.9927 = $958,250. The right-of-use asset is also $958,250. In year 1, interest on the liability is 8% × 958,250 = $76,660, depreciation of the right-of-use asset (straight line) is 958,250 / 5 = $191,650, and the total expense is $268,310, compared with a cash payment of $240,000. EBITDA is higher than if the payment were an operating expense by the full $240,000 (it is removed from operating costs), and reported debt increases by $958,250.

Sensitivity matters. If Kestrel expects the crusher to have a residual value of $150,000 at year five, buying keeps that value, and the PV of the forgone after-tax residual (ignoring any tax on sale for simplicity) is 150,000 / 1.06^5 = $112,089. The NAL falls to 31,156 − 112,089 = **−$80,933**, so purchase becomes preferable. The conclusion in a lease analysis often depends more on the residual-value assumption than on the financing rate.

**Common mistakes.** (1) Discounting after-tax lease payments at the firm's WACC rather than after-tax debt cost; leases are debt-like. (2) Ignoring the residual value. (3) Comparing lease payments to the loan payments without accounting for tax shields on depreciation and interest. (4) Overlooking maintenance, insurance and end-of-lease conditions, which can be shifted between the parties.

## 14.5 Convertible Bonds

A **convertible bond** is a bond that the holder may exchange for a fixed number of the issuer's shares. It combines a straight bond with a call option on the issuer's equity. Key terms are the **conversion ratio** (shares per bond), **conversion price** (face value divided by the ratio), **conversion premium** (conversion price relative to the current share price), and call features (issuers can often force conversion once the shares trade well above the conversion price).

### 14.5.1 Valuation by decomposition

```
Convertible value ≈ Straight bond value + Value of the conversion option
Conversion value (parity) = Conversion ratio × Share price
Floor value = max(Straight bond value, Conversion value)
```

The straight-bond value is the PV of coupons and principal at the yield on comparable non-convertible debt of the same issuer. The convertible always trades at or above its floor. Its price is greater when the shares are volatile, the maturity is long and the conversion price is close to the share price (the option is more valuable).

**Example 14.5 – Valuing and assessing a convertible.**
Kestrel considers issuing $100 million of ten-year convertible notes in $1,000 denominations with a 3.0% annual coupon (paid annually for simplicity) and a conversion ratio of 20 shares per note. The share price is $40. Kestrel's straight ten-year debt yields 7.0%. Kestrel has 50 million shares outstanding; the tax rate is 25%.

Step 1: Conversion price = $1,000 / 20 = $50.00. Conversion premium = 50 / 40 − 1 = 25%.

Step 2: Conversion value (parity) = 20 × $40 = $800.

Step 3: Straight bond value = 30 × (1 − 1.07^(−10)) / 0.07 + 1,000 / 1.07^10 = 30 × 7.0236 + 508.35 = 210.71 + 508.35 = $719.06 per note. (Using $1,000 / 1.96715 = 508.35.)

Step 4: If the note is sold at par ($1,000), the implied value of the conversion option is $1,000 − $719.06 = $280.94 per note, or 28.1% of the issue price. At a parity of $800 and a premium over parity of 25% ($1,000 / $800 − 1), investors are paying for the option's time value, since it is currently out of the money (parity < 1,000).

Step 5: Interest savings. The straight-debt coupon would be 7.0% × $100M = $7.0 million per year, versus $3.0 million on the convertible; the pre-tax saving is $4.0 million and after tax $3.0 million per year.

Step 6: Dilution. There are 100,000 notes. If all convert: 100,000 × 20 = 2,000,000 new shares, which is 2.0 / 52.0 = 3.85% of the enlarged share count (4.0% of existing shares). The effective issue price per share is $50, a 25% premium to today's share price, compared with the discount that would usually apply to a seasoned equity issue.

Step 7: Outcomes at maturity. If the share price is $60, the conversion value is $1,200: holders convert, and Kestrel issues 2 million shares worth $120 million for debt of $100 million. If the share price is $30, parity is $600: holders take cash, $1,000 per note, and Kestrel has paid 3% coupons on what turned out to be debt.

The "cheap coupon" is not free money. The $4.0 million annual interest saving is the price the investors pay for a free call option on the stock. In an efficient market, the cost of the convertible equals the cost of straight debt plus the cost of the option; the saving in coupon is exactly offset by the value of the equity upside given away. Managers therefore need to compare the *all-in* cost, including expected dilution, with alternatives.

### 14.5.2 Why issue convertibles?

- **Delayed equity ("back-door equity").** Issuers believe their shares are undervalued today and expect to sell equity at a higher price later. A conversion premium of 25% means selling shares later at $50 instead of today at $40.
- **Reduced agency costs.** Convertible holders gain if the firm takes risk (as shareholders do), which mitigates asset-substitution concerns and makes the instrument attractive when it is hard to assess the firm's risk (Green's argument).
- **Lower information-sensitivity.** Because a convertible's value depends on both debt and equity components, it is less sensitive to disagreement about firm risk or value than straight debt or equity alone, which is why it is common in young, high-growth, high-volatility firms.
- **Lower cash interest.** Helpful when cash coverage is a constraint.

The costs include the dilution if the stock does well, the potential for forced conversion to disappoint, accounting complexity, and capital markets' perception of convertibles as a signal (Section 13.7 explains the equity announcement effect). Many investors in convertibles are arbitrage funds that buy the convertible and short the stock; issuance can therefore put pressure on the share price.

## 14.6 Credit Analysis

Credit analysis assesses the borrower's ability and willingness to meet its obligations. The same framework is used by lenders to underwrite and price loans, by rating agencies to assign ratings, and by CFOs who want to know how outside parties see them.

### 14.6.1 The classic "Cs"

Lenders traditionally assess **character** (management's record and integrity), **capacity** (cash flow to service the debt), **capital** (the equity cushion), **collateral** (the assets that can be claimed) and **conditions** (industry and economic context, and the purpose of the loan). Modern analysis adds **covenants** and **cycle position**. Capacity is the dominant consideration for unsecured lending: the first source of repayment is cash flow, the second is refinancing, and the third is collateral.

### 14.6.2 Core credit ratios

| Ratio | Formula | Question answered |
|---|---|---|
| Leverage | Total debt / EBITDA | How many years of earnings to repay debt? |
| Net leverage | (Debt − cash) / EBITDA | Same, net of liquid assets |
| Interest coverage | EBITDA / interest expense | How much earnings cushion over interest? |
| Cash coverage | (EBITDA − capex) / interest | Coverage after maintaining the asset base |
| FFO / debt | Funds from operations / debt | Cash generation relative to debt |
| Debt / capital | Debt / (debt + equity) | Equity cushion |
| DSCR | CFADS / (interest + scheduled principal) | Ability to cover total debt service |
| Liquidity | (Cash + undrawn committed lines) / near-term obligations | Ability to survive a closed market |

Ratios must be adjusted: for leases, pension deficits, off-balance-sheet obligations, non-recurring items, and seasonality. Compare to peers and through the cycle, not at a single point in time.

**Table 14.4 – Credit profile comparison of two illustrative firms ($ millions)**

| Metric | Alpha Industrial | Beta Industrial |
|---|---|---|
| EBITDA | 200 | 150 |
| Total debt | 700 | 900 |
| Interest expense | 49 | 81 |
| Capex | 90 | 60 |
| Funds from operations | 150 | 80 |
| Debt / EBITDA | 3.50x | 6.00x |
| EBITDA / interest | 4.08x | 1.85x |
| (EBITDA − capex) / interest | 2.24x | 1.11x |
| FFO / debt | 21.4% | 8.9% |

Alpha has moderate leverage and a reasonable cushion; Beta is highly leveraged and has barely any cash coverage after capital expenditure. A lender would likely price Beta's debt many percentage points higher, if it lends at all, and would require security, tight covenants or an equity injection.

### 14.6.3 Expected loss and credit spreads

Credit risk can be decomposed into three components:

```
Expected loss (EL) = Probability of default (PD) × Loss given default (LGD) × Exposure at default (EAD)
LGD = 1 − Recovery rate
```

A lender needs a spread at least large enough to cover expected loss plus its cost of funding, operating costs and a risk premium for bearing unexpected losses (default is clustered with recessions, so the risk premium is not zero even for diversified portfolios).

**Example 14.6 – Expected loss and spread.**
A bank lends $100 million to a mid-market manufacturer. Based on the borrower's rating, PD over one year is 3.0%, expected recovery is 60% (so LGD = 40%), and the exposure at default is the full $100 million.

Step 1: EL = 0.03 × 0.40 × $100M = **$1.2 million**, or 1.2% of the exposure per year.

Step 2: The cumulative probability of default over two years, assuming independent annual PD of 3%, is 1 − (1 − 0.03)² = 1 − 0.9409 = 5.91%.

Step 3: Minimum loan margin. Suppose the bank's funding cost over the benchmark is 0.40%, operating costs are 0.30%, and it wants a risk premium and a return on regulatory capital of 0.80%. The margin required is 1.2% + 0.40% + 0.30% + 0.80% = **2.70%** over the benchmark. A borrower with a PD of 6% has an EL of 2.4%, giving a margin of 3.9% if other components are the same.

**Example 14.7 – Reading a bond spread as default probability.**
A five-year bond of an issuer trades at a spread of 2.40% over the government curve. The market's assumed recovery rate for similar senior unsecured bonds is 40%.

Approximate relation: spread ≈ annual hazard rate × LGD, so hazard ≈ 2.40% / 0.60 = **4.0% per year**. Over five years, the implied cumulative default probability ≈ 1 − 0.96⁵ = 18.5%. This is a "risk-neutral" probability and includes risk premia and liquidity effects, so it overstates the actual default probability, which is typically well below it. Nonetheless, the calculation is a way of translating the market's price into a risk statement: a spread of 240 basis points signals meaningful default risk, and it shows how sensitive the spread is to assumed recovery (with a 20% recovery, the hazard rate would be 3.0%).

### 14.6.4 Scoring models: the Altman Z-score

Statistical models combine accounting ratios to predict distress. Altman's original Z-score for public manufacturing firms is:

```
Z = 1.2 × (Working capital / Total assets) + 1.4 × (Retained earnings / Total assets) + 3.3 × (EBIT / Total assets) + 0.6 × (Market value of equity / Book value of total liabilities) + 1.0 × (Sales / Total assets)
```

Scores below about 1.81 put a firm in the "distress" zone; scores above about 2.99 in the "safe" zone; the area between is "grey." Different coefficients exist for private and non-manufacturing firms.

**Example 14.8 – Computing a Z-score.**
A manufacturer has: working capital / total assets = 0.15; retained earnings / total assets = 0.20; EBIT / total assets = 0.10; market equity / liabilities = 1.10; sales / total assets = 0.90.

Z = 1.2(0.15) + 1.4(0.20) + 3.3(0.10) + 0.6(1.10) + 1.0(0.90)
Z = 0.18 + 0.28 + 0.33 + 0.66 + 0.90 = **2.35**

The firm is in the grey zone. A decline in the market value of its equity to 0.60 of liabilities would reduce the fourth term from 0.66 to 0.36 and Z to 2.05, which indicates the sensitivity of such models to equity prices. Scoring models are screening tools and are no substitute for analysis of cash flow, competitive position and liquidity.

## 14.7 Debt Capacity

**Debt capacity** is the amount of debt a firm can carry while retaining its desired credit standing, covenant compliance and strategic flexibility. It is not a single number; it is the smallest value produced by several constraints, tested under stress.

### 14.7.1 Approaches

1. **Leverage constraint.** Maximum Debt/EBITDA consistent with the target rating or the covenant, adjusted for the cycle. Capital-intensive and cyclical firms need lower multiples than stable service firms.
2. **Coverage constraint.** Maximum interest such that EBITDA (or EBIT) divided by interest meets a minimum. Because interest equals debt times the rate, debt capacity under this constraint falls as interest rates rise.
3. **Cash-flow (DSCR) constraint.** Maximum debt service such that cash flow available for debt service divided by scheduled debt service is at least a target (for example, 1.5x), and the debt that this service supports given the tenor and rate.
4. **Asset-coverage constraint.** Debt not exceeding some fraction of the liquidation value of assets, relevant for secured lending.
5. **Strategic and trade-off view.** The tax shield from more debt must be weighed against expected costs of distress, loss of flexibility and the option value of unused capacity. Firms with valuable growth options or volatile cash flows deliberately hold *financial slack*: borrowing capacity held in reserve.

### 14.7.2 Stress testing

A firm should compute capacity on **downside cash flows**, not on the plan. Reduce EBITDA by an amount that is plausible in a recession in the industry (for example, the peak-to-trough decline in the last cycle), apply higher interest rates if the debt is floating, and check that (a) covenants hold, (b) liquidity is sufficient to meet obligations without new external funding, and (c) maturities are not clustered in a window when refinancing could be difficult.

**Example 14.9 – Estimating debt capacity.**
Kestrel has EBITDA of $120 million and can borrow at 8.0%. Its covenants and policies are: Debt/EBITDA ≤ 4.00x; EBITDA/interest ≥ 4.00x (the internal policy for an investment-grade profile); and a minimum DSCR of 1.50x. Cash flow available for debt service (CFADS) is expected to be $90 million. New debt would be repaid in level annual payments over seven years. Existing debt is $100 million.

Step 1: Leverage constraint. Maximum debt = 4.00 × 120 = $480 million.

Step 2: Coverage constraint. Maximum interest = 120 / 4.00 = $30 million. At 8.0%, maximum debt = 30 / 0.08 = **$375 million**.

Step 3: DSCR constraint. Maximum annual debt service = 90 / 1.50 = $60 million. The present value of seven level payments of $60 million at 8.0% = 60 × [(1 − 1.08^(−7)) / 0.08] = 60 × 5.2064 = **$312.4 million**.

Step 4: Debt capacity is the minimum of the three: **$312.4 million** (the DSCR constraint binds). Incremental capacity over existing debt = 312.4 − 100 = $212.4 million, compared with a funding need of $180 million. The expansion is affordable, with roughly $32 million of slack.

Step 5: Stress test. Suppose EBITDA falls 30% to $84 million and CFADS falls 30% to $63 million. With debt of $280 million after drawing the full $180 million: leverage = 280 / 84 = 3.33x (passes 4.00x). Interest at 8.0% = $22.4 million; coverage = 84 / 22.4 = 3.75x (just below the 4.00x policy but the covenant is not breached if the legal minimum is lower). DSCR depends on debt service; if service on $280 million over seven years is 280 / 5.2064 = $53.8 million, DSCR = 63 / 53.8 = 1.17x, which is thin but above 1.0x. Kestrel could service its debt in the downturn, but with little room for further adverse events.

Step 6: Interest tax shield. Debt of $280 million at 8.0% and a 25% tax rate gives a first-year tax shield of 0.25 × 22.4 = $5.6 million, worth up to 0.25 × 280 = $70 million in present value if the debt were permanent and the rate were the discount rate. Against that, a modest further increase in debt would use up slack that has option value in a downturn.

The result frames the decision. Capacity is a ceiling, not a target. A policy such as "borrow to 70% of capacity" provides a buffer and keeps flexibility for acquisitions or downturns.

### 14.7.3 Managerial guidelines

- Match debt service to cash flow patterns: seasonal or cyclical firms should avoid heavy amortization and back-ended refinancing wall.
- Stagger maturities to avoid concentration: a "ladder" reduces refinancing risk.
- Maintain committed liquidity (undrawn revolver and cash) sized to cover at least twelve months of obligations in a stress scenario.
- Hedge floating-rate exposure to the extent coverage cannot absorb a rate shock.
- Link debt policy to the strategy: companies with large growth opportunities should be conservative; stable cash generators can carry more.
- Remember agency problems on both sides: managers may prefer less debt (protecting their human capital), while high-leverage structures can discipline waste. Observe the evidence in the firm's own history rather than apply an industry rule blindly.

## 14.8 Securitization: An Overview

**Securitization** converts a pool of illiquid financial assets (loans, receivables, leases) into tradable securities backed by the pool's cash flows. The originator sells the assets to a **special purpose vehicle (SPV)**, a legally separate entity designed to be "bankruptcy remote" from the originator. The SPV funds the purchase by issuing securities, which are repaid from collections on the pool. Common underlying assets include residential mortgages (mortgage-backed securities), auto loans, credit-card receivables, trade receivables, equipment leases and corporate loans (collateralized loan obligations, or CLOs).

### 14.8.1 Why securitize?

- **Funding based on asset quality rather than originator credit.** A high-quality pool can be financed more cheaply than the originator's unsecured debt, if the structure is truly isolated from the originator's risk.
- **Diversification of funding sources.** Access to capital markets investors, and not only bank balance sheets.
- **Balance-sheet and capital management.** If the transfer meets the derecognition criteria under the accounting standards and regulatory rules (including a true sale and transfer of risks and rewards), assets leave the originator's balance sheet. Under IFRS 9 and IFRS 10, however, retained exposure or control may require the originator to continue to recognize the assets or consolidate the SPV.
- **Risk transfer and tailored securities.** The structure can offer investors different risk-return profiles.

### 14.8.2 Structure and credit enhancement

The main feature is **tranching**: the SPV issues securities of different seniority. Losses on the pool are allocated from the bottom up.

- **Equity (first-loss) tranche.** Absorbs the first losses and receives residual cash flow; often retained by the originator to align incentives ("skin in the game").
- **Mezzanine tranches.** Absorb losses after the equity tranche is exhausted.
- **Senior tranches.** Protected by the subordination below them, and therefore receive the highest credit ratings.

Other forms of **credit enhancement** include **overcollateralization** (the pool exceeds the securities issued), **excess spread** (the pool's interest income exceeds the securities' interest and fees, and the excess is trapped to absorb losses), reserve accounts, guarantees, and triggers that redirect cash flows to senior tranches if performance deteriorates.

**Example 14.10 – Loss allocation in a tranched structure.**
An SPV holds a pool of $500 million of loans and issues three tranches: Senior $400 million (80%), Mezzanine $60 million (12%) and Equity $40 million (8%). Consider three loss scenarios for the pool (ignoring recoveries timing and excess spread).

Scenario A: Pool losses of 5% = $25 million. Equity absorbs all $25 million (62.5% of the equity tranche). Mezzanine and senior suffer no loss.

Scenario B: Pool losses of 12% = $60 million. Equity absorbs its full $40 million (100%). The remaining $20 million falls on the mezzanine (33.3% of that tranche). Senior suffers no loss.

Scenario C: Pool losses of 25% = $125 million. Equity loses $40 million, mezzanine loses $60 million (100% each), and the remaining $25 million falls on the senior tranche, a loss of 25 / 400 = 6.25%.

**Table 14.5 – Tranche losses by scenario ($ millions)**

| Tranche | Size | Scenario A (pool loss 5%) | Scenario B (12%) | Scenario C (25%) |
|---|---|---|---|---|
| Senior | 400 | 0 | 0 | 25 (6.25%) |
| Mezzanine | 60 | 0 | 20 (33.3%) | 60 (100%) |
| Equity | 40 | 25 (62.5%) | 40 (100%) | 40 (100%) |
| Total loss | 500 | 25 | 60 | 125 |

The senior tranche has 20% of subordination beneath it, so it is hit only if the pool's losses exceed 20%. The mezzanine tranche is exposed once losses exceed 8% and is wiped out at 20%. Whether the senior tranche is "safe" depends entirely on the distribution of pool losses and on correlation: if loans default together, the probability of extreme losses is much higher than the independent-default assumption implies.

### 14.8.3 Risks and lessons

Securitization is a useful tool, but its history includes significant failures. The main lessons:

- **Model risk and correlation.** Ratings depended on assumptions about default correlation and house prices that failed in the 2007-2009 crisis. Senior tranches of pools of subprime mortgages suffered losses they were rated not to suffer.
- **Misaligned incentives (originate to distribute).** When originators sell loans and keep no risk, they may lower underwriting standards. Regulators now commonly require risk retention.
- **Complexity and opacity.** Re-securitizations (securities backed by tranches of other securitizations) multiplied complexity and made valuation depend on models rather than observable cash flows.
- **Liquidity and funding runs.** Structures financed with short-term paper and liquidity backstops proved fragile when market confidence evaporated.
- **Reputational and legal risk.** Even where legal separation exists, originators may feel obliged to support their vehicles.

For a corporate CFO, securitization is most often relevant for trade receivables or equipment loans, where the pool is granular, short-dated and well understood. Disciplined use means clear true-sale analysis, realistic stress assumptions, an understanding of consolidation and covenant treatment, and the capacity to continue to fund if the market is closed.

### 14.8.4 Choosing among sources: a synthesis

Returning to Kestrel: the $180 million expansion has an average asset life of 20 years for the quarry and rail, and 7 to 10 years for the trucks. A sensible package might combine (i) a $100 million ten-year senior note, matching the long-lived assets and fixing most of the cost; (ii) a $60 million amortizing bank term loan with a covenant-light structure for the equipment, repayable as the assets earn; (iii) a lease for the trucks if the NAL is positive after residual-value risk; and (iv) an undrawn revolver of $75 million for liquidity. A convertible might make sense only if management believes the shares are undervalued and the firm has a clear case for dilution tolerance. Securitization of receivables could be held in reserve as a contingent source of funding. The total should fit inside the lowest constraint from Example 14.9, with a buffer.
