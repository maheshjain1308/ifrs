# Chapter 22: Comprehensive Problem Sets with Full Solutions I: Foundations and Valuation

## How to Use This Problem Set

This chapter contains sixty problems covering Volume 1, Chapters 1 to 12: the corporation, financial statements, time value of money, bonds, equity valuation, net present value, capital budgeting, uncertainty and real options, risk and return, the CAPM, cost of capital and market efficiency. The problems are graded in three levels, twenty at each.

| Level | What it tests | Suggested time |
|---|---|---|
| Basic | A single concept applied directly; one or two formulas | 5 to 8 minutes |
| Intermediate | Two or three linked steps, or a concept with an interpretation | 10 to 15 minutes |
| Challenging | Multi-step modeling, a trap or a judgement call | 20 to 30 minutes |

All companies are fictional and all data are illustrative. Every numerical answer in this chapter was computed by a Python script using the formulas shown, and the figures in the solutions are taken from that output; they are rounded for display, so a hand calculation may differ in the last digit. Dollar amounts are in dollars unless stated ($m for millions, $k for thousands). Rates are annual and compounded annually unless stated.

Work each problem on paper first. Then read the solution for the method, not only the answer: each solution states the formula, substitutes the numbers, and ends with an interpretation sentence. The chapter-review notes at the head of each part restate the key formulas and the mistakes most frequently made. A companion problem set covers Volume 1, Chapters 13 to 24.

### Problem Map

| Part | Volume 1 chapter | Problems | Basic | Intermediate | Challenging |
|---|---|---|---|---|---|
| 1 | The Corporation and Its Objectives | 22.1 to 22.4 | 1 | 1 | 2 |
| 2 | Financial Statements and Ratios | 22.5 to 22.10 | 3 | 2 | 1 |
| 3 | Time Value of Money | 22.11 to 22.16 | 2 | 1 | 3 |
| 4 | Bonds and Interest Rates | 22.17 to 22.22 | 2 | 2 | 2 |
| 5 | Equity Valuation | 22.23 to 22.28 | 2 | 3 | 1 |
| 6 | Net Present Value | 22.29 to 22.33 | 2 | 1 | 2 |
| 7 | Capital Budgeting | 22.34 to 22.39 | 2 | 2 | 2 |
| 8 | Uncertainty and Real Options | 22.40 to 22.44 | 1 | 1 | 3 |
| 9 | Risk and Return | 22.45 to 22.49 | 2 | 2 | 1 |
| 10 | The Capital Asset Pricing Model | 22.50 to 22.54 | 2 | 2 | 1 |
| 11 | Cost of Capital | 22.55 to 22.58 | 1 | 2 | 1 |
| 12 | Market Efficiency and Behavioral Finance | 22.59 to 22.60 | 0 | 1 | 1 |
| Total | | 60 | 20 | 20 | 20 |

## Part 1: The Corporation and Its Objectives (Volume 1, Chapter 1)

**Review.** Limited liability caps owners' losses at their investment; agency costs are the value lost when managers' incentives differ from owners'; equity behaves like a call option on firm assets, so shareholders can gain from risk at creditors' expense.

**Typical errors.** Treating the corporate form's tax treatment as a benefit, and forgetting that the manager bears only her ownership share of any cost.

### Problem 22.1 (Basic)

A business earns $200,000 before tax. As a corporation it pays corporate tax of 25% and distributes all earnings as dividends taxed at 20%. As a sole proprietorship, the owner pays 35% personal tax. Compare the owner's after-tax cash and the total effective tax rate in each form (illustrative rates).

**Solution.** Corporation: $200,000 x (1 - 0.25) = $150,000; dividend tax 20% leaves $120,000, a total tax of 40.0%. Proprietorship: $200,000 x (1 - 0.35) = $130,000, a total tax of 35.0%. Double taxation costs the corporate owner $10,000 more in this illustration; the corporate form is justified by limited liability and access to capital, not by tax.

### Problem 22.2 (Intermediate)

Firm Dunmore Tools (fictional) fails with assets of $150,000 and debts of $400,000. An investor put in $50,000 for a 25% stake. Compute her total loss (a) if the firm is a corporation and (b) if it is a general partnership in which her share of any shortfall is her ownership percentage.

**Solution.** Shortfall = $400,000 - $150,000 = $250,000. (a) Limited liability caps the loss at the $50,000 invested. (b) She loses $50,000 plus 25% x $250,000 = $62,500, a total of $112,500, 2.25 times her investment. Limited liability transfers the residual $250,000 shortfall risk to creditors, who price it into interest rates.

### Problem 22.3 (Challenging)

A manager who owns 5% of the shares approves a corporate jet costing $2.0 million that she values at $1.2 million in personal benefit. (a) What is her net gain? (b) What is the value destroyed? (c) What ownership share would make her decline?

**Solution.** (a) She bears 5% x $2.0m = $0.10m of the cost and receives $1.20m, a net gain of $1.10m. (b) The firm spends $2.00m for a benefit worth $1.20m, destroying $0.80m. (c) She declines when her share of the cost exceeds her benefit: s x 2.0 > 1.2, so s > 60%. This is the agency problem of Volume 1, Chapter 1: with a small stake, managers capture the benefit and bear little of the cost, hence the use of incentive pay and monitoring.

### Problem 22.4 (Challenging)

A firm has assets worth $100m (illustrative) and zero-coupon debt of $80m face due in one year; r = 5%. Treat equity as a call option on assets. Find equity and debt values when asset volatility is 30%, then when management shifts into riskier projects and volatility becomes 50%.

**Solution.** Equity = Black-Scholes call with S = 100, K = 80, r = 5%, T = 1. At 30%: E = $26.46m and debt = 100 - 26.46 = $73.54m. At 50%: E = $31.79m and debt = $68.21m. Equity gains $5.33m and creditors lose exactly that amount, though the asset value of $100m did not change. This is risk shifting: shareholders profit from variance at creditors' expense, which is why covenants exist. Riskless debt would be worth 80 x e^(-0.05) = $76.10m.

## Part 2: Financial Statements and Ratios (Volume 1, Chapter 2)

**Review.** Current ratio = CA/CL; DuPont: ROE = margin x turnover x leverage; cash conversion cycle = DSO + DIO - DPO; EFN = increase in assets - increase in spontaneous liabilities - retained earnings.

**Typical errors.** Mixing year-end and average balances without saying so, and using sales-based days for inventory instead of COGS-based days.

### Problem 22.5 (Basic)

From this extract of Pelham Components' balance sheet (fictional), compute the current ratio, the quick ratio and the cash ratio.

| Current assets | $m | Current liabilities | $m |
|---|---|---|---|
| Cash | 80 | Payables and accruals | 190 |
| Receivables | 160 | Short-term debt | 120 |
| Inventory | 240 | | |
| Other | 40 | Total | 310 |

**Solution.** Current assets = 80 + 160 + 240 + 40 = 520. Current ratio = 520/310 = 1.68. Quick ratio = (80 + 160)/310 = 0.77 (inventory and other assets excluded). Cash ratio = 80/310 = 0.26. The firm covers short-term liabilities from liquid assets only 77% of the time, so it relies on turning inventory into cash.

### Problem 22.6 (Basic)

Pelham Components reports revenue of $1,200m, cost of goods sold $780m, SG&A $240m, depreciation $60m and interest $30m; the tax rate is 25%. Compute gross, operating and net margins.

**Solution.** Gross profit = 1,200 - 780 = 420; margin 35.00%. EBIT = 420 - 240 - 60 = 120; margin 10.00%. Pre-tax income = 120 - 30 = 90; net income = 90 x 0.75 = 67.5; net margin 5.62%. Interest coverage = 120/30 = 4.0x.

### Problem 22.7 (Basic)

A firm earns a return on equity of 15% and pays out 40% of earnings. Compute the retention ratio, the growth rate from retained earnings using beginning equity (g = ROE x b) and the sustainable growth rate using ending equity.

**Solution.** Retention b = 1 - 0.40 = 0.60. Using beginning equity, g = 0.15 x 0.60 = 9.00%. Using ending equity (ROE measured on average or ending equity), g = ROE x b/(1 - ROE x b) = 0.09/0.91 = 9.89%. The two differ because retained earnings also enlarge the base on which next year's return is earned; state which definition you use.

### Problem 22.8 (Intermediate)

Pelham Components has net income $54m, revenue $1,200m, assets $900m and equity $360m. (a) Decompose ROE with the DuPont identity. (b) If assets are unchanged but equity were $600m (more equity, less debt), what happens to ROE?

**Solution.** (a) Net margin = 54/1,200 = 4.50%; asset turnover = 1,200/900 = 1.333; equity multiplier = 900/360 = 2.50. ROE = 0.0450 x 1.333 x 2.50 = 15.00% (check: 54/360 = 15.00%). (b) Equity multiplier becomes 900/600 = 1.50, so ROE = 9.00% (ignoring the interest saving). Lower leverage cuts ROE by 6.00 percentage points; ROE gains from leverage are bought with financial risk.

### Problem 22.9 (Intermediate)

Using revenue $1,200m, COGS $780m, receivables $160m, inventory $240m and payables $130m (365-day year, year-end balances), compute days sales outstanding, days inventory, days payables and the cash conversion cycle. How much cash is released by cutting the cycle by 10 days?

**Solution.** DSO = 160/1,200 x 365 = 48.7. DIO = 240/780 x 365 = 112.3. DPO = 130/780 x 365 = 60.8. Cash conversion cycle = 48.7 + 112.3 - 60.8 = 100.1 days. Each day of the cycle ties up COGS/365 = $2.137m (valued at cost), so 10 days releases about $21.4m (about $32.9m if measured at sales value for receivables).

### Problem 22.10 (Challenging)

Haldane Packaging (fictional) has sales of $1,000m, assets of $800m (all varying with sales) and spontaneous liabilities (payables, accruals) of $150m. Net margin is 8% and the payout ratio 50%. Sales will grow 20%. Compute the external financing needed (EFN) and the internal growth rate.

**Solution.** Next-year sales = $1,200m. Required asset increase = 800 x 0.20 = 160. Spontaneous liabilities increase by 150 x 0.20 = 30. Net income = 0.08 x 1,200 = 96; retained = 48. EFN = 160 - 30 - 48 = $82m. Internal growth rate (ROA-based): ROA = 0.08 x 1,000/800 = 10% on beginning assets; g = ROA x b/(1 - ROA x b) = 0.05/0.95 = 5.26% (ignoring spontaneous liabilities).

## Part 3: Time Value of Money (Volume 1, Chapter 3)

**Review.** FV = PV(1+r)^n; annuity PV = C[1-(1+r)^-n]/r; growing annuity PV = C/(r-g)[1-((1+g)/(1+r))^n]; EAR = (1+APR/m)^m - 1.

**Typical errors.** Using the nominal rate with the wrong number of periods, and discounting nominal cash flows at a real rate.

### Problem 22.11 (Basic)

What is $10,000 worth after 8 years at a 6% stated annual rate if interest is compounded (a) annually and (b) semiannually? What is the effective annual rate in (b)?

**Solution.** (a) FV = 10,000 x 1.06^8 = $15,938.48. (b) Semiannual rate 3%, 16 periods: FV = 10,000 x 1.03^16 = $16,047.06. EAR = 1.03^2 - 1 = 6.09%. More frequent compounding adds $108.58 over eight years.

### Problem 22.12 (Basic)

What is the present value of $5,000 received at the end of each year for 12 years at 7%? What if the payments are made at the start of each year?

**Solution.** PV = 5,000 x [1 - 1.07^(-12)]/0.07 = 5,000 x 7.9427 = $39,713.43. For an annuity due, multiply by 1.07: $42,493.37, since every payment arrives one year sooner.

### Problem 22.13 (Challenging)

A $250,000 mortgage has a 6% nominal annual rate compounded monthly and a 30-year term. Find (a) the monthly payment, (b) the balance after 5 years, (c) interest paid in year 1, and (d) the payoff time and interest saved if the borrower adds $300 a month.

**Solution.** (a) Payment = 250,000 x 0.005/[1 - 1.005^(-360)] = $1,498.88. (b) Balance after 60 payments = 250,000 x 1.005^60 - 1498.88 x (1.005^60 - 1)/0.005 = $232,635.89. (c) Year-1 payments total $17,986.52; principal repaid is 250,000 - 246,929.97 = $3,070.03, so interest is $14,916.49. (d) With $1,798.88 a month the loan is repaid after 239 months (19.9 years); total interest falls from $289,595 to $178,136, a saving of $111,459.

### Problem 22.14 (Intermediate)

A contract pays $40,000 at the end of year 1, growing 3% a year. At an 8% discount rate find the value if it lasts (a) 20 years and (b) forever. What share of the perpetuity value comes from years 21 onward?

**Solution.** (a) PV = C/(r - g) x [1 - ((1+g)/(1+r))^n] = 40,000/0.05 x [1 - (1.03/1.08)^20] = 800,000 x 0.6125 = $490,002. (b) Perpetuity = 40,000/0.05 = $800,000. Years 21 onward are worth $309,998, 38.7% of the total: a growing stream's value is back-loaded when r - g is small.

### Problem 22.15 (Challenging)

A saver wants real income of $80,000 a year for 25 years, first received at the end of the year after retirement at 65. She saves a constant real amount at the end of each year for 35 years (from 31 to 65). At a real return of 3%, how much must she save each year? What is the required balance at 65?

**Solution.** Required balance at 65 = 80,000 x [1 - 1.03^(-25)]/0.03 = 80,000 x 17.4131 = $1,393,052. Annual saving S solves S x (1.03^35 - 1)/0.03 = 1,393,052; the factor is 60.4621, so S = $23,040 per year (28.8% of the target income). Working in real terms avoids forecasting inflation; the answer is in today's dollars.

### Problem 22.16 (Challenging)

A $24,000 car can be financed with 48 monthly payments of $560 starting next month. Find the monthly rate, the APR and the effective annual rate. If the dealer instead offers 0% for 48 months and a $1,500 cash rebate for paying cash, which is better at a 6% opportunity rate (compounded monthly)?

**Solution.** Solve 560 x [1 - (1+i)^(-48)]/i = 24,000: i = 0.4724% per month. APR = 12 x i = 5.67%; EAR = (1+i)^12 - 1 = 5.82%. Zero-percent alternative: 24,000/48 = $500 a month, PV at 0.5% = 500 x 42.5803 = $21,290; paying cash costs 24,000 - 1,500 = $22,500. The 0% financing costs $1,210 less in present value than paying cash, so take the 0% financing and invest the cash at 6%.

## Part 4: Bonds and Interest Rates (Volume 1, Chapter 4)

**Review.** Price = sum of discounted coupons plus face; modified duration = Macaulay/(1+y); price change = -D_mod x dy + 0.5 x convexity x dy^2; forward rate from spot rates; immunization matches PV and duration.

**Typical errors.** Forgetting that a semiannual bond has 2n periods at y/2, and quoting yield as the coupon rate.

### Problem 22.17 (Basic)

A $1,000 face bond pays a 5% coupon semiannually and matures in 10 years. Find its price at a yield to maturity of 6% (semiannual compounding) and state whether it trades at a premium or discount.

**Solution.** Coupon = $25; 20 periods at 3%. Price = 25 x [1 - 1.03^(-20)]/0.03 + 1,000/1.03^20 = 371.94 + 553.68 = $925.61. It trades at a discount because the coupon rate (5%) is below the yield (6%).

### Problem 22.18 (Basic)

A 5-year, 6% annual-coupon bond with $1,000 face trades at $950. Find the current yield and the yield to maturity.

**Solution.** Current yield = 60/950 = 6.32%. Solve 950 = sum 60/(1+y)^t + 1,000/(1+y)^5: y = 7.23%. Check: price at 7.23% = $950.00. YTM exceeds the current yield because the bond also pulls up to par.

### Problem 22.19 (Intermediate)

A 3-year bond pays a 6% annual coupon (face $1,000); yield 5%. Compute price, Macaulay and modified duration and convexity, and estimate the price change for a +50 basis point shift using duration alone and duration plus convexity. Compare with the exact change.

**Solution.** Price = $1,027.23. Macaulay duration = sum t x PV(CF)/P = 2.8358 years; modified = 2.8358/1.05 = 2.7007. Convexity = 10.091. Duration alone: -1.350%; with convexity: -1.338%. Exact repricing at 5.5%: $1,013.49, a change of -1.338%. Convexity corrects the linear estimate by 0.013%.

### Problem 22.20 (Intermediate)

Spot rates (annual compounding) are 3.0% for 1 year, 3.5% for 2 years and 4.0% for 3 years. Price a 3-year 5% annual-coupon bond (face $1,000), find its yield to maturity, and compute the implied forward rate from year 2 to year 3.

**Solution.** Price = 50/1.03 + 50/1.035^2 + 1,050/1.04^3 = 48.54 + 46.68 + 933.45 = $1,028.67. YTM solves the single rate repricing the bond: 3.968%, close to the 3-year spot because most of the value comes at year 3. Forward 2y3y: (1.04^3/1.035^2) - 1 = 5.007%.

### Problem 22.21 (Challenging)

A pension fund owes $1,000,000 in 5 years. The yield curve is flat at 5%. It can buy 3-year and 8-year zero-coupon bonds. Find the investment in each that immunizes the liability (match present value and duration), and explain what protects the fund against a parallel shift.

**Solution.** PV of liability = 1,000,000/1.05^5 = $783,526. A zero has duration equal to maturity. Weights solve w x 3 + (1-w) x 8 = 5: w = 0.60 in the 3-year, 0.40 in the 8-year. Investments: $470,116 and $313,410. Face amounts: 3-year $544,218, 8-year $463,050. Because asset and liability have equal PV and duration, and the asset side has greater convexity, a parallel shift leaves the surplus non-negative to first order and positive to second order. Rebalancing is needed as time passes.

### Problem 22.22 (Challenging)

A 1-year zero-coupon bond of Orwell Textiles (fictional) with $1,000 face trades at $900. The risk-free rate is 4%. The probability of default is 8% with 40% recovery of face. Find the promised yield, expected payoff, expected yield and the default premium decomposition.

**Solution.** Promised yield = 1,000/900 - 1 = 11.11%. Expected payoff = 0.92 x 1,000 + 0.08 x 400 = $952; expected yield = 952/900 - 1 = 5.78%. Spread over risk-free: promised 7.11%; of this, expected loss accounts for 5.33% and the remaining 1.78% is compensation for bearing default risk (a risk premium) over the 4% risk-free rate.

## Part 5: Equity Valuation (Volume 1, Chapter 5)

**Review.** P0 = D1/(r-g); g = ROE x b; two-stage values add a terminal value; EV = NOPAT(1 - g/ROIC)/(WACC - g); PVGO = P - EPS1/r.

**Typical errors.** Applying the Gordon formula when g is not below r, and growing the wrong dividend (D0 rather than D1).

### Problem 22.23 (Basic)

Halden Utilities (fictional) will pay a dividend of $2.40 next year, expected to grow 4% a year forever. The required return is 10%. Find the value per share, the dividend yield and the implied price if the required return rises to 11%.

**Solution.** P0 = D1/(r - g) = 2.40/(0.10 - 0.04) = $40.00. Dividend yield = 2.40/40.00 = 6.00%, and capital gains yield = g = 4%, summing to r. At 11%: P0 = 2.40/0.07 = $34.29, a fall of 14.3% for one point on the required return, showing the high sensitivity of growth stocks to r - g.

### Problem 22.24 (Basic)

A firm expects next-year earnings per share of $3.20, retains 60% of earnings and earns 12% on new equity investment. The required return is 10%. Find the growth rate, next dividend, price and forward P/E.

**Solution.** g = ROE x b = 0.12 x 0.60 = 7.20%. D1 = 3.20 x 0.40 = $1.28. P0 = 1.28/(0.10 - 0.072) = $45.71. Forward P/E = 45.71/3.20 = 14.29x. A no-growth policy would give 3.20/0.10 = $32.00, so the growth policy adds $13.71 per share because ROE 12% exceeds r = 10%.

### Problem 22.25 (Intermediate)

Corvane Software (fictional) just paid a dividend of $1.50. Dividends will grow 15% a year for 4 years, then 5% forever. The required return is 11%. Find the value of the share.

**Solution.** Dividends years 1-4: $1.7250, $1.9837, $2.2813, $2.6235. PV of these = $6.56. Terminal value at year 4 = 2.6235 x 1.05/(0.11 - 0.05) = $45.91; PV = 45.91/1.11^4 = $30.24. Value = 6.56 + 30.24 = $36.80. The terminal value is 82% of the price, so the long-run growth assumption matters most.

### Problem 22.26 (Intermediate)

A share trades at $70 and expects earnings of $5.00 next year. If the firm paid out all earnings with no growth, the required return of 10% would apply. Find the no-growth value and the present value of growth opportunities (PVGO), and the share of price attributable to growth.

**Solution.** No-growth value = EPS1/r = 5.00/0.10 = $50.00. PVGO = 70 - 50.00 = $20.00, or 28.6% of the price. The current P/E is 14.0x against a no-growth P/E of 10.0x. Roughly 29% of the price depends on investments not yet made, which is why growth stocks are more exposed to changes in expectations.

### Problem 22.27 (Intermediate)

A firm has EBIT of $400m, a 25% tax rate, depreciation $100m, capital expenditure $130m and an increase in net working capital of $20m. Free cash flow will grow 3% a year; WACC is 9%. Net debt is $1,200m and there are 100m shares. Find FCFF, enterprise value, equity value and the value per share (FCFF this year is the base; the next flow is 1.03 times it).

**Solution.** NOPAT = 400 x 0.75 = 300. FCFF = 300 + 100 - 130 - 20 = 250. EV = 250 x 1.03/(0.09 - 0.03) = $4,291.7m. Equity = 4,291.7 - 1,200 = $3,091.7m; per share $30.92. Net debt is 28.0% of EV; a one-point rise in WACC to 10% would cut EV to $3,679m, equity to $2,479m.

### Problem 22.28 (Challenging)

Use the value driver formula EV = NOPAT x (1 - g/ROIC)/(WACC - g) with next-year NOPAT of $300m and WACC of 9%. Compute enterprise value for (a) no growth, (b) 4% growth at ROIC 14%, and (c) 4% growth at ROIC 8%. Explain the result.

**Solution.**

| Growth g | ROIC | Value |
|---|---|---|
| 0% | 14% | $3,333m |
| 4% | 14% | $4,286m |
| 4% | 8% | $3,000m |

(a) With g = 0 no reinvestment is needed: 300/0.09 = $3,333m. (b) Reinvestment rate = 4%/14% = 28.6%; FCF = 300 x 0.7143 = 214.3; EV = 214.3/0.05 = $4,286m, 28.6% more than (a). (c) Reinvestment is 4%/8% = 50%; FCF = 150; EV = $3,000m, 10.0% below (a). Growth creates value only when ROIC exceeds WACC; at ROIC 8% < 9% the firm would do better distributing the cash.

## Part 6: Net Present Value (Volume 1, Chapter 6)

**Review.** NPV = sum CF_t/(1+r)^t; choose among mutually exclusive projects by NPV; IRR can be multiple or misleading; use equivalent annual cost for unequal lives; match real flows with real rates.

**Typical errors.** Ranking exclusive projects by IRR, and comparing PVs of costs for assets with different lives.

### Problem 22.29 (Basic)

A project costs $1,000 now and returns $300, $400, $500 and $300 at the end of years 1 to 4. The cost of capital is 10%. Compute NPV, IRR, payback and discounted payback.

**Solution.** NPV = -1,000 + 300/1.1 + 400/1.1^2 + 500/1.1^3 + 300/1.1^4 = $183.87. IRR = 18.03%. Payback: cumulative inflows are 300, 700, 1,200, so payback = 2 + 300/500 = 2.60 years. Discounted flows are 272.7, 330.6, 375.7, 204.9; cumulative 272.7, 603.3, 979.0, 1183.9, so the discounted payback is 3.10 years. NPV is positive and IRR exceeds 10%: accept.

### Problem 22.30 (Basic)

Mutually exclusive projects A and B each cost $500. A returns $200 a year for 4 years; B returns $1,000 in year 4 only. Compute NPV and IRR at 10%, say which to choose, and find the crossover rate.

**Solution.** A: NPV = -500 + 200 x 3.1699 = $133.97; IRR = 21.86%. B: NPV = -500 + 1,000/1.1^4 = $183.01; IRR = 18.92%. A has the higher IRR, but B has the higher NPV at 10% (B is bigger and later); with mutually exclusive projects choose by NPV, so choose B. The crossover is the IRR of the difference (B - A) = [0, -200, -200, -200, 800]: 15.09%. Below that rate B is better; above it A is better.

### Problem 22.31 (Challenging)

A mine project has cash flows -100, +230, -132 at times 0, 1, 2 (the last is a restoration cost). Find the IRRs. Compute NPV at 5%, 15% and 25%, and the modified IRR with finance and reinvestment rates of 12%. Should the project be accepted at a 12% cost of capital?

**Solution.** Solving -100 + 230/(1+r) - 132/(1+r)^2 = 0 gives two IRRs: 10.0% and 20.0%. NPV(5%) = -0.68; NPV(15%) = 0.19; NPV(25%) = -0.48. NPV is positive only between the two roots, so the project has value at 12% (NPV = 0.13). MIRR: PV of outflows at 12% = 100 + 132/1.12^2 = 205.23; FV of the inflow at year 2 = 230 x 1.12 = 257.6; MIRR = (257.6/205.23)^(1/2) - 1 = 12.03%, which only just exceeds 12%: the project is marginally acceptable. Multiple IRRs arise whenever the sign of cash flow changes more than once.

### Problem 22.32 (Intermediate)

Machine A costs $100 and has annual operating costs of $20 for a 3-year life. Machine B costs $150 and has operating costs of $12 for a 5-year life. Both provide the same service and will be replaced at the end of their lives. At 10%, which has the lower equivalent annual cost?

**Solution.** PV of costs A = 100 + 20 x 2.4869 = 149.74; EAC = 149.74/2.4869 = $60.21. B: PV = 150 + 12 x 3.7908 = 195.49; EAC = $51.57. B has the lower EAC by $8.64 a year, so choose B. Comparing PVs directly (149.74 against 195.49) would wrongly favour A because the lives differ.

### Problem 22.33 (Challenging)

A project requires $1,000 now and yields real (constant-price) cash flows of $400 a year for 3 years. The nominal discount rate is 9% and expected inflation is 2.5%. Show that discounting nominal flows at the nominal rate and real flows at the real rate give the same NPV, and show the error from mixing the two.

**Solution.** Real rate = 1.09/1.025 - 1 = 6.341%. Real NPV = -1,000 + 400 x 2.6562 = $62.49. Nominal flows: 410.00, 420.25, 430.76; NPV at 9% = $62.49, identical. Error: discounting real flows at 9% gives $12.52, understating value by $49.97; discounting nominal flows at the real rate overstates it to $115.37. Match the units of flows and rates.

## Part 7: Capital Budgeting (Volume 1, Chapter 7)

**Review.** Incremental after-tax cash flows: OCF = (savings)(1-t) + depreciation x t; add working capital and after-tax salvage; the tax effect of selling an old asset depends on book value; indivisible projects under capital rationing need enumeration.

**Typical errors.** Counting sunk costs, omitting working capital recovery, and ignoring the tax on salvage or the tax shield on a loss.

### Problem 22.34 (Basic)

Equipment costs $600,000, is depreciated straight-line to zero over 5 years and saves $200,000 a year before tax. The tax rate is 25%. It will be sold for $50,000 at the end of year 5. Find the annual operating cash flow, the after-tax salvage value and the NPV at 10% (amounts in $000).

**Solution.** Depreciation = 600/5 = 120 a year. OCF = 200 x (1 - 0.25) + 120 x 0.25 = 150 + 30 = 180. After-tax salvage = 50 x (1 - 0.25) = 37.5 (book value is zero, so the whole price is a taxable gain). NPV = -600 + 180 x 3.7908 + 37.5/1.1^5 = $105.63k. The depreciation tax shield is worth 30 x 3.791 = $113.7k.

### Problem 22.35 (Basic)

A product sells for $40 with variable cost of $25 a unit. Annual fixed costs are $120,000, including $40,000 of depreciation. Find the accounting break-even and cash break-even volumes, and the degree of operating leverage at 10,000 units.

**Solution.** Contribution margin = 40 - 25 = $15. Accounting break-even = 120,000/15 = 8,000 units. Cash break-even = (120,000 - 40,000)/15 = 5,333 units. At 10,000 units, EBIT = 10,000 x 15 - 120,000 = $30,000; DOL = contribution/EBIT = 5.0. A 10% rise in volume lifts EBIT by 50%. Neither break-even equals the NPV break-even, which would also cover the cost of capital.

### Problem 22.36 (Intermediate)

A project needs $500k of equipment (straight-line over 6 years, no salvage) and $60k of net working capital, recovered at the end. It produces pre-tax cash savings of $180k a year for 6 years; tax rate is 30%; discount rate 10%. Compute the NPV and IRR.

**Solution.** Depreciation = 83.33; OCF = 180 x 0.70 + 83.33 x 0.30 = 151.00 a year. Flows: t0 = -560; t1-t5 = 151.00; t6 = 151.00 + 60 = 211.00. NPV = $131.51k; IRR = 17.35%. Working capital reduces NPV by 60 - 60/1.1^6 = $26.1k: it is a cost of tied-up funds, not an expense.

### Problem 22.37 (Intermediate)

A project costs $300,000 (straight-line to zero over 5 years) with price $50, variable cost $30, 10,000 units a year, fixed cash costs $100,000, tax 25% and discount rate 12%. Compute base NPV and the NPV if (a) price falls 10%, (b) units fall 10%, and (c) variable cost rises 10%. Which input is most sensitive?

**Solution.** OCF = [(p - vc) x q - 100,000 - 60,000] x 0.75 + 60,000; annuity factor = 3.6048. Base: NPV = $24,430. (a) p = 45: NPV = -$110,749 (change -135,179). (b) q = 9,000: -$29,642 (change -54,072). (c) vc = 33: -$56,678 (change -81,107). Price is most sensitive, since a $5 price change applies to every unit with no offsetting cost, and the project turns NPV-negative after a price fall of about 1.8%.

### Problem 22.38 (Challenging)

An old machine (book value $200k, 5 years of straight-line depreciation remaining, no final salvage) can be sold now for $90k. A new machine costs $500k, depreciated over 5 years to zero, and cuts operating costs by $140k a year before tax. Tax is 25%; the discount rate is 10%. Should the firm replace? Show the net initial outlay and incremental flows.

**Solution.** Loss on sale = 200 - 90 = $110k, tax saving = 0.25 x 110 = $27.5k. Net outlay = 500 - 90 - 27.5 = $382.5k. Incremental depreciation = 500/5 - 200/5 = 60. Incremental OCF = 140 x 0.75 + 60 x 0.25 = 120.0. NPV = -382.5 + 120.0 x 3.7908 = $72.39k; IRR = 17.16%. The NPV is positive, so replace. The decision survives a fall in savings to the break-even level of $$$114.5k a year.

### Problem 22.39 (Challenging)

A firm has a $500k capital budget and these indivisible projects ($000):

| Project | Outlay | NPV | PI |
|---|---|---|---|
| A | 300 | 120 | 0.400 |
| B | 250 | 95 | 0.380 |
| C | 200 | 80 | 0.400 |
| D | 150 | 50 | 0.333 |
| E | 100 | 45 | 0.450 |

Choose the combination that maximizes total NPV. Does ranking by profitability index give the best answer?

**Solution.** Enumerate all combinations within the budget. The three best: {A,C} cost 500, NPV 200; {B,D,E} cost 500, NPV 190; {C,D,E} cost 450, NPV 175. Best: {A,C} with NPV 200 using 500 of the budget. Ranking by PI gives the order E, A, C, B, D. Taking projects in that order while money remains selects {E,A} (outlay 400, NPV 165), which is 35 below the optimum. PI ranking works only when projects are divisible or the budget is used up exactly; with indivisible projects, enumerate or use integer programming.

## Part 8: Uncertainty and Real Options (Volume 1, Chapter 8)

**Review.** Decision trees use expected values with later decisions optimised; use risk-neutral probabilities p = (1+r-d)/(u-d) for tree-based options; real options include expand, abandon and defer; the Black-Scholes call values the right to invest.

**Typical errors.** Applying real-world probabilities in a risk-neutral tree, and treating static NPV as the whole story when flexibility exists.

### Problem 22.40 (Basic)

A drug-development project (fictional) costs $400m now. With probability 40% it succeeds and has a present value of $900m; otherwise its value is $200m. Compute the expected value and NPV. What is the expected value if a 1-year pilot costing $30m can reveal the outcome before the full investment, which would then be made only if success is revealed (ignore discounting)?

**Solution.** Expected PV = 0.40 x 900 + 0.60 x 200 = 480; NPV = 480 - 400 = $80m, so invest without a pilot. In the failure state the full investment loses 200 - 400 = -200. With the pilot, invest only on success: expected value = 0.40 x (900 - 400) - 30 = $170m. The pilot adds $90m: it avoids the failure-state loss (0.60 x 200 = $120m) at a cost of $30m. This is a decision-tree (abandonment) argument: information has value when it can change the decision.

### Problem 22.41 (Challenging)

A project costs $105m and has a present value of $100m, so NPV = -$5m. In one year its value will be either $150m or $75m (risk-free rate 5%). At that time the firm can expand by 50% (adding 50% of project value) for $40m. Value the expansion option and the project with the option.

**Solution.** Risk-neutral probability of the up state = (1.05 - 0.75)/(1.5 - 0.75) = 0.400. Expansion payoff: up = 0.5 x 150 - 40 = 35.0; down = max(0.5 x 75 - 40, 0) = 0.0 (do not expand). Option value = 0.400 x 35.0/1.05 = $13.33m. Project with option = -5 + 13.33 = $8.33m: accept, because the flexibility to expand turns a negative static NPV positive. Static NPV ignores the option to commit more only in the good state.

### Problem 22.42 (Intermediate)

A project is worth $100m if continued. In one year it will be worth either $130m or $70m. The firm can abandon for a salvage value of $90m at that time. The risk-free rate is 5%. Value the abandonment option.

**Solution.** Risk-neutral probability up = (1.05 - 0.70)/(1.30 - 0.70) = 0.5833. Abandonment payoff = max(90 - V, 0): up 0, down 20. Option value = (0.5833 x 0 + 0.4167 x 20)/1.05 = $7.94m. The option establishes a floor of $90m on the project's value in a year; it is a European put with strike 90 on a $100m underlying and is worth 7.9% of project value.

### Problem 22.43 (Challenging)

A firm can invest $95m in a project worth $100m today, or wait one year. In a year the project's value will be $140m or $70m (risk-free rate 6%; the project's value does not leak away while waiting). Compare investing now with waiting and state the cost of investing now.

**Solution.** Invest now: NPV = 100 - 95 = $5m. Wait: risk-neutral probability up = (1.06 - 0.70)/(1.40 - 0.70) = 0.5143. In the up state invest and get 140 - 95 = 45; in the down state 70 < 95, so do not invest (0). Value of waiting = 0.5143 x 45/1.06 = $21.83m. Waiting is worth $16.83m more, so the NPV rule 'invest if NPV > 0' is wrong when the option to wait is valuable; invest now only if cash flows lost by waiting exceed this premium.

### Problem 22.44 (Challenging)

A firm holds the right to launch a project in 3 years by spending $110m. The present value of the project's cash flows is $100m, with volatility 35% and a 5% risk-free rate (no cash flow is lost by waiting). Value the option to launch and comment on the present NPV.

**Solution.** The static NPV is 100 - 110 = -$10m. The option is a Black-Scholes call with S = 100, K = 110, r = 5%, sigma = 35%, T = 3: d1 = [ln(100/110) + (0.05 + 0.06125) x 3]/(0.35 x sqrt(3)) = 0.3933; d2 = d1 - 0.6062 = -0.2129. Call = $25.94m. The right is worth $25.9m although NPV is negative, because the firm launches only if value exceeds the cost. Value rises with volatility: at 50% volatility the option is worth $35.3m.

## Part 9: Risk and Return (Volume 1, Chapter 9)

**Review.** Portfolio variance = w1^2 s1^2 + w2^2 s2^2 + 2 w1 w2 rho s1 s2; minimum variance weight for asset 1 = (s2^2 - cov)/(s1^2 + s2^2 - 2 cov); tangency portfolio maximises the Sharpe ratio.

**Typical errors.** Averaging volatilities, and using correlation where covariance is needed.

### Problem 22.45 (Basic)

Compute the expected return, variance and standard deviation of a stock with these scenario returns.

| Scenario | Probability | Return |
|---|---|---|
| Recession | 25% | -12% |
| Normal | 50% | 8% |
| Boom | 25% | 26% |

**Solution.** E(R) = 0.25 x (-12%) + 0.50 x 8% + 0.25 x 26% = 7.50%. Deviations: -19.50%, 0.50%, 18.50%. Variance = 0.25 x (-0.195)^2 + 0.50 x (0.005)^2 + 0.25 x (0.185)^2 = 0.01808; standard deviation = 13.44%. Coefficient of variation = 1.79.

### Problem 22.46 (Basic)

Asset X has expected return 9% and volatility 20%; asset Y has expected return 13% and volatility 30%. Correlation is 0.30. Find the expected return and standard deviation of a 60/40 portfolio, and compare with the weighted average of volatilities.

**Solution.** E(Rp) = 0.6 x 9% + 0.4 x 13% = 10.60%. Variance = (0.6 x 0.20)^2 + (0.4 x 0.30)^2 + 2 x 0.6 x 0.4 x 0.30 x 0.20 x 0.30 = 0.0144 + 0.0144 + 0.00864 = 0.03744. Standard deviation = 19.35%, versus a weighted average of 24.00%: diversification removes 4.65 percentage points of volatility.

### Problem 22.47 (Intermediate)

For assets X and Y of the previous problem (volatilities 20% and 30%, correlation 0.30), find the minimum-variance portfolio and its volatility. Why is the lower-volatility asset not 100% of the portfolio?

**Solution.** w_X = (s_Y^2 - rho s_X s_Y)/(s_X^2 + s_Y^2 - 2 rho s_X s_Y) = (0.09 - 0.018)/(0.04 + 0.09 - 0.036) = 0.7660. So 76.6% X and 23.4% Y. Variance = 0.03485, volatility 18.67%, below X's 20% alone. Because correlation is below s_X/s_Y = 0.667, adding some of the riskier asset reduces risk.

### Problem 22.48 (Intermediate)

Each of n stocks has volatility 40% and every pair has correlation 0.25. For an equally weighted portfolio compute volatility for n = 1, 5, 25 and 100, and the limit. How much risk is diversifiable?

**Solution.** Variance = s^2/n + (1 - 1/n) x rho x s^2.

| Stocks (n) | Portfolio volatility |
|---|---|
| 1 | 40.00% |
| 5 | 25.30% |
| 25 | 21.17% |
| 100 | 20.30% |
| infinity | 20.00% |

The floor is s x sqrt(rho) = 0.40 x 0.5 = 20.00%. Single-stock variance of 0.16 splits into undiversifiable 0.0400 (25%) and diversifiable 0.1200 (75%). The first 5 stocks capture most of the benefit; the next 95 add little.

### Problem 22.49 (Challenging)

Risky asset A has expected return 10% and volatility 18%; B has 15% and 28%; correlation 0.25; risk-free rate 4%. Find the tangency (maximum Sharpe ratio) portfolio, its Sharpe ratio, and the fraction of wealth an investor with risk aversion A = 4 puts in it.

**Solution.** Excess returns: A 6.00%, B 11.00%; covariance = 0.25 x 0.18 x 0.28 = 0.01260. w_A = [eA s_B^2 - eB cov]/[eA s_B^2 + eB s_A^2 - (eA + eB) cov] = 0.5416; w_B = 0.4584. Portfolio return = 12.29%, volatility = 17.95%, Sharpe = (12.29% - 4%)/17.95% = 0.462 (A alone: 0.333; B alone: 0.393). Optimal risky fraction y = (E - rf)/(A x s^2) = 0.643: 64.3% in the tangency portfolio, 35.7% in the risk-free asset.

## Part 10: The Capital Asset Pricing Model (Volume 1, Chapter 10)

**Review.** E(R) = rf + beta(E(Rm) - rf); beta = Cov/Var; alpha = actual - required return; Hamada: beta_E = beta_A[1 + (1-t)D/E].

**Typical errors.** Regressing prices instead of returns, and relevering with the wrong tax or debt assumptions.

### Problem 22.50 (Basic)

A stock has a beta of 1.3. The risk-free rate is 4% and the market risk premium is 6%. Find the required return. What if beta is 0.7?

**Solution.** Required return = rf + beta x MRP = 4% + 1.3 x 6% = 11.8%. With beta 0.7: 4% + 0.7 x 6% = 8.2%. Each 0.1 of beta adds 0.6 percentage points to the required return.

### Problem 22.51 (Basic)

A portfolio holds 50% in a stock with beta 1.4, 30% with beta 0.9 and 20% with beta 0.5. Find portfolio beta and its required return with rf = 4% and MRP = 6%. Also find the beta of a stock whose covariance with the market is 0.045 when the market variance is 0.030.

**Solution.** Portfolio beta = 0.5 x 1.4 + 0.3 x 0.9 + 0.2 x 0.5 = 1.07. Required return = 4% + 1.07 x 6% = 10.42%. Stock beta = Cov(Ri, Rm)/Var(Rm) = 0.045/0.030 = 1.50.

### Problem 22.52 (Intermediate)

Analysts forecast a 14% return for a stock with beta 1.2. The risk-free rate is 4% and the market risk premium is 6%. Compute the required return and alpha and say whether the stock is over- or underpriced. If the stock pays no dividend and is priced at $50 expecting to be worth $57 in a year, what price makes it fairly priced?

**Solution.** Required = 4% + 1.2 x 6% = 11.20%; alpha = 14% - 11.20% = 2.80%, so it plots above the security market line and is underpriced. Expected return from $50 to $57 is 14%, consistent with the forecast. Fair price = 57/(1 + 0.112) = $51.26, above $50: buying pressure should raise the price by $1.26.

### Problem 22.53 (Intermediate)

Estimate the stock's beta, alpha and R-squared from these eight periods of returns (illustrative data).

| Period | Stock | Market |
|---|---|---|
| 1 | 12% | 8% |
| 2 | -5% | -4% |
| 3 | 20% | 12% |
| 4 | 8% | 5% |
| 5 | -10% | -8% |
| 6 | 15% | 10% |
| 7 | 3% | 2% |
| 8 | 9% | 6% |

**Solution.** Cov(stock, market) = 0.00692; Var(market) = 0.00476. Beta = 0.00692/0.00476 = 1.456. Alpha = mean(stock) - beta x mean(market) = 0.0650 - 1.456 x 0.0387 = 0.0086 per period. R-squared = 0.993: 99.3% of the stock's variance is market (systematic) risk and 0.7% is diversifiable. With only eight observations the estimate has wide error bands.

### Problem 22.54 (Challenging)

Calder Bearings (fictional) has an equity beta of 1.4 at a debt/equity ratio of 0.5; the tax rate is 25%. Assume debt beta of zero. Find the asset (unlevered) beta, and the equity beta and cost of equity if the company moves to D/E = 1.0 (rf = 4%, MRP = 6%).

**Solution.** Asset beta = 1.4/(1 + 0.75 x 0.5) = 1.0182. Relevered equity beta = 1.0182 x (1 + 0.75 x 1.0) = 1.7818. Cost of equity now = 4% + 1.4 x 6% = 12.4%; at D/E = 1.0 it is 4% + 1.782 x 6% = 14.69%. Leverage raises the equity beta from 1.40 to 1.78 while business risk (asset beta) is unchanged.

## Part 11: Cost of Capital (Volume 1, Chapter 11)

**Review.** WACC = (E/V)re + (D/V)rd(1-t) + (P/V)rp; pure-play betas unlevered and relevered give project-specific rates; under MM with taxes, re = ru + (ru-rd)(1-t)D/E.

**Typical errors.** Using book weights, using the coupon rate as cost of debt, and applying a company-wide WACC to projects of different risk.

### Problem 22.55 (Basic)

A firm has equity of $600m (market) and debt of $400m. The cost of equity is 11%, pre-tax cost of debt 6% and the tax rate 25%. Compute WACC.

**Solution.** Weights: E/V = 0.60, D/V = 0.40. After-tax cost of debt = 6% x 0.75 = 4.5%. WACC = 0.60 x 11% + 0.40 x 4.5% = 8.40%. The debt tax shield lowers WACC by 0.40 x 6% x 0.25 = 0.60 percentage points.

### Problem 22.56 (Intermediate)

A firm's capital structure by market value is $500m equity, $300m debt and $100m preferred stock. The costs are 12% (equity), 6.5% pre-tax (debt) and 8% (preferred); tax rate 30%. Compute WACC, and the NPV of a project costing $200m with perpetual after-tax flows of $17m if the project has the firm's average risk.

**Solution.** V = 900; weights: 0.5556, 0.3333, 0.1111. After-tax cost of debt = 6.5% x 0.70 = 4.550%. WACC = 0.5556 x 12% + 0.3333 x 4.550% + 0.1111 x 8% = 9.072%. NPV = 17/0.09072 - 200 = -$12.61m. The project's IRR is 17/200 = 8.50%, against a hurdle of 9.07%: reject.

### Problem 22.57 (Intermediate)

A division of Calder Bearings is to be valued with a discount rate based on three listed pure-play comparables (tax 25%).

| Comparable | Equity beta | Debt/equity |
|---|---|---|
| C1 | 1.30 | 0.40 |
| C2 | 1.10 | 0.25 |
| C3 | 1.45 | 0.50 |

The division will be financed at D/E = 0.30 with pre-tax debt cost 5.5%; rf = 4%, MRP = 6%. Find the division's WACC.

**Solution.** Unlevered betas = beta_E/(1 + 0.75 x D/E): 1.0000, 0.9263, 1.0545; average 0.9936. Relever at D/E = 0.30: 0.9936 x (1 + 0.75 x 0.30) = 1.2172. Cost of equity = 4% + 1.2172 x 6% = 11.30%. Weights: E/V = 1/1.3 = 0.7692, D/V = 0.2308. WACC = 0.7692 x 11.30% + 0.2308 x 4.125% = 9.647%. Using the parent's WACC for a division whose business risk differs would misprice its projects.

### Problem 22.58 (Challenging)

A firm generates a perpetual after-tax free cash flow of $100m when all-equity financed; the unlevered cost of equity is 10%, the cost of debt is 5% and the tax rate 25%. Using the Modigliani-Miller tax-adjusted formulas, compute the cost of equity, WACC and firm value at D/V = 0%, 30% and 50%, and verify with the tax-shield approach at 30%.

**Solution.** Cost of equity re = ru + (ru - rd)(1 - t)D/E; WACC = (E/V) re + (D/V) rd (1 - t).

| D/V | D/E | Cost of equity | WACC | Firm value |
|---|---|---|---|---|
| 0% | 0.000 | 10.00% | 10.00% | $1,000.0m |
| 30% | 0.429 | 11.61% | 9.25% | $1,081.1m |
| 50% | 1.000 | 13.75% | 8.75% | $1,142.9m |

Check at 30%: value = V_U + t x D = 1,000.0 + 0.25 x D where D = 0.30 x V. Solving V = 1,000 + 0.075 V gives V = 1,081.1, matching the table. WACC falls with leverage because debt is tax-advantaged, yet the cost of equity rises; this ignores distress costs, which Volume 1, Chapter 15 balances against the tax shield.

## Part 12: Market Efficiency and Behavioral Finance (Volume 1, Chapter 12)

**Review.** Abnormal return = actual - expected from the market model; CAR is a sum of abnormal returns; the test statistic is CAR over its standard error; autocorrelation tests weak-form efficiency.

**Typical errors.** Reading a significant abnormal return as proof of inefficiency without considering the joint-hypothesis problem.

### Problem 22.59 (Intermediate)

The market model for Fenwick Foods (fictional) is R = 0.0002 + 1.2 x Rm. Around an announcement (days -2 to +2) returns were as shown. Find daily abnormal returns, the cumulative abnormal return (CAR), and the t-statistic if daily abnormal return standard deviation is 1.5%.

| Day | Stock | Market | Abnormal |
|---|---|---|---|
| -2 | 0.40% | 0.20% | 0.14% |
| -1 | 1.20% | 0.50% | 0.58% |
| 0 | -0.60% | -0.40% | -0.14% |
| 1 | 2.50% | 0.30% | 2.12% |
| 2 | 1.80% | 0.60% | 1.06% |

**Solution.** Abnormal return = R - (0.0002 + 1.2 Rm). Values above (day 0 = announcement). CAR = sum = 3.76%. Standard error of CAR = 1.5% x sqrt(5) = 3.354%; t = 3.76%/3.354% = 1.12. The critical value is 1.96, so the CAR is not significant at 5%. Any such test is a joint test of market efficiency and the benchmark model used to define abnormal returns.

### Problem 22.60 (Challenging)

Test weak-form efficiency using the lag-1 autocorrelation of these 12 monthly returns (illustrative data). Report the autocorrelation, the approximate standard error 1/sqrt(n) and your conclusion, and explain why a trading rule based on it might still not be profitable.

| Month | Return |
|---|---|
| 1 | 2% |
| 2 | -1% |
| 3 | 3% |
| 4 | 1% |
| 5 | -2% |
| 6 | 4% |
| 7 | -3% |
| 8 | 2% |
| 9 | 1% |
| 10 | -1% |
| 11 | 3% |
| 12 | -2% |

**Solution.** Mean return = 0.583%. Autocorrelation = sum of d_t x d_(t-1) / sum d_t^2 = -0.720. Standard error is about 1/sqrt(12) = 0.289, so t = -2.49; the 5% bounds are +/- 0.566. The autocorrelation is outside the bounds, so the statistic is nominally significant; with only twelve observations the test has little power and a single pattern of this kind could easily be chance. Even a significant statistic need not be exploitable: after transaction costs, price impact and risk adjustment, small predictability may not pay, which is the practical content of semi-strong and weak-form efficiency.

## Closing Notes for Instructors

The problems are designed so that Basic items can be used as quiz questions, Intermediate items as homework, and Challenging items as discussion or exam questions. Several problems pair deliberately: Problems on mutually exclusive projects and unequal lives warn against IRR and present-value comparisons; the real-option problems show that a negative static NPV is not a final verdict; and the cost-of-capital problems show how leverage changes the cost of equity without changing business risk. Ask students to state, for each Challenging problem, one assumption that would reverse the answer.

A suggested marking scheme awards half of the marks for correct setup (formula, inputs, units), a third for correct arithmetic and the remainder for interpretation. Because the solutions were generated by code, instructors can adapt any problem by changing the inputs in its statement and recomputing with the stated formulas; the structure of the solution does not change.
