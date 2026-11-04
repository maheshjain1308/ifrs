# Chapter 23: Comprehensive Problem Sets with Full Solutions II: Financing, Derivatives and Transactions

*All companies, funds and figures in this chapter are fictional and illustrative. Tax rates and market rates are stylized so that the arithmetic is transparent.*

## How to Use This Problem Set

This chapter contains 60 problems that cover Volume 1, Chapters 13 to 24: raising equity, debt, capital structure, payout policy, working capital, options, derivatives, risk management and foreign exchange, enterprise valuation, mergers and acquisitions, leveraged buyouts and private equity, and sustainability, governance and fintech. It is the second of two problem chapters; the first covers the earlier valuation and investment material. There are five problems per chapter in a fixed pattern: two basic (single-concept, one or two formulas), two intermediate (multi-step, some judgment) and one challenging (integrates several ideas or requires a modeling choice). Basic problems are numbered 1, 2, 6, 7, 11, 12 and so on; the pattern repeats every five problems, so problems 5, 10, 15, ..., 60 are the challenging ones.

Every solution is shown step by step and every number was recomputed in Python and rounded only for display. When you check your own work, expect small differences in the last digit if you round intermediate steps. Work each problem on paper first, then compare; the most valuable learning comes from the steps where your approach differs from the printed one. Instructors will find the same problems mapped to learning outcomes in Chapter 24.

## Problems and Solutions

## Part A: Raising Equity (Volume 1, Chapter 13)

**Key tools.** Rights offering: ex-rights price = (N × P + n × S) / (N + n), where N is existing shares, n is new shares and S is the subscription price. Underpricing = first-day close / offer price − 1. Net proceeds = gross proceeds × (1 − gross spread) − other fees.

### Problem 1 (Basic): Rights offering arithmetic

**Question.** Bayfield Tools (illustrative) has 10 million shares trading at \$40. It announces a rights offering of one new share for every five held, at a subscription price of \$32. Compute the number of new shares, the gross proceeds, the theoretical ex-rights price and the value of one right.

**Solution.**

1. New shares = 10,000,000 / 5 = 2,000,000.
2. Gross proceeds = 2,000,000 × \$32 = \$64.0 million.
3. Market value before = 10,000,000 × \$40 = \$400.0 million; after = \$400.0m + \$64.0m = \$464.0m over 12,000,000 shares.
4. Ex-rights price = \$38.667.
5. Value of a right = cum-rights price − ex-rights price = \$40.00 − \$38.667 = \$1.333. A shareholder needs five rights per new share, so the right is also worth (\$38.667 − \$32) / 5 = \$1.333, confirming consistency.

**Answer.** 2,000,000 new shares; \$64.0m proceeds; ex-rights price \$38.667; each right worth \$1.333.

### Problem 2 (Basic): IPO underpricing and total cost

**Question.** Calder Robotics (illustrative) sells 8 million shares at an IPO price of \$25. The gross spread is 7%. The stock closes the first day at \$31.50. Compute the underpricing, the money left on the table, the net proceeds and the issuer's total cost of going public as a percentage of the aftermarket value of the shares sold (ignore other fees).

**Solution.**

1. Underpricing = 31.50 / 25.00 − 1 = 26.0%.
2. Money left on the table = (31.50 − 25.00) × 8,000,000 = \$52.0 million.
3. Gross proceeds = 8,000,000 × \$25 = \$200.0 million; spread = \$14.0 million; net proceeds = \$186.0 million.
4. Direct cost = \$14.0m; indirect cost = \$52.0m; total = \$66.0m.
5. Aftermarket value of shares sold = 8,000,000 × 31.50 = \$252.0m, so total cost = 26.19%.

**Answer.** Underpricing 26.0%; \$52.0m left on the table; net proceeds \$186.0m; total cost 26.19% of aftermarket value.

### Problem 3 (Intermediate): Seasoned equity offering and announcement effect

**Question.** Harlow Energy (illustrative) has 50 million shares at \$20. It announces a 10 million-share seasoned offering at \$18.50 with 4% total fees. The stock falls 3% on the announcement as investors infer overvaluation. Assuming the market is otherwise efficient and the cash is held as cash (no value created), compute net proceeds, the post-issue share price, and the wealth change per old share relative to \$20.

**Solution.**

1. Net proceeds = 10,000,000 × \$18.50 × 0.96 = \$177.60 million.
2. Post-announcement price = \$20 × 0.97 = \$19.40, so pre-issue equity value = 50,000,000 × 19.40 = \$970.0m.
3. Add retained cash: post-issue equity = \$970.0m + \$177.60m = \$1,147.60m.
4. Shares after = 60,000,000, so price = \$19.127.
5. Change per old share = 19.127 − 20.00 = -\$0.873 (-4.37%). Of this, -\$0.60 is the announcement (information) effect and the remainder reflects dilution from issuing below the post-news price plus fees.

**Answer.** Net proceeds \$177.60m; post-issue price \$19.127; old holders lose \$0.873 per share (4.37%).

### Problem 4 (Intermediate): Greenshoe economics

**Question.** An underwriter buys 20 million shares from an issuer at \$15 less a 7% spread and sells 23 million shares to investors at \$15, creating a 3 million-share short position via a 15% over-allotment option. Compute the underwriter's gross profit if (a) the stock trades at \$17 and the option is exercised, and (b) the stock trades at \$14 and the underwriter covers the short in the market. Why does the greenshoe support the aftermarket price?

**Solution.**

1. Spread per share = \$15 × 7% = \$1.05; over-allotment = 20,000,000 × 15% = 3,000,000 shares; total sold = 23,000,000.
2. (a) The underwriter exercises the option and buys 3,000,000 more shares at \$13.95. Profit = 23,000,000 × \$1.05 = \$24.15 million.
3. (b) Buying 3,000,000 shares at \$14 to close the short earns (\$15 − \$14) × 3,000,000 = \$3.00m on top of the spread on the base 20,000,000 shares (\$21.00m). Profit = \$24.00m.

**Answer.** (a) \$24.15m; (b) \$24.00m. The short-covering purchases are the price support.

### Problem 5 (Challenging): IPO with primary and secondary components

**Question.** Before its IPO, Tessel Logistics (illustrative) has 50 million shares: founders 30 million (60%) and a venture fund 20 million (40%). In the IPO the company sells 10 million new shares (primary) and the venture fund sells 5 million of its shares (secondary) at \$22 with a 6.5% gross spread. Compute (a) post-IPO ownership percentages and market capitalization, (b) net cash to the company and to the fund, (c) the price per share needed for the primary tranche alone to net \$250 million, and (d) the number of primary shares needed at \$22 for \$250 million net.

**Solution.**

1. Post-IPO shares = 50,000,000 + 10,000,000 = 60,000,000. Founders 30m = 50.0%; fund 20m − 5m = 15m = 25.0%; public = 10m + 5m = 15m = 25.0%.
2. Market capitalization = 60,000,000 × \$22 = \$1,320.0 million.
3. Net to company = 10,000,000 × 22 × 0.935 = \$205.70m; net to fund = 5,000,000 × 22 × 0.935 = \$102.85m.
4. (c) Price needed = 250,000,000 / (10,000,000 × 0.935) = \$26.74.
5. (d) Shares needed at \$22 = 250,000,000 / (22 × 0.935) = 12,153,622 shares, which would raise public float to 27.6% of a 62.15m-share base and dilute existing holders further.

**Answer.** Founders 50.0%, fund 25.0%, public 25.0%; market cap \$1,320.0m; net proceeds \$205.70m (company) and \$102.85m (fund); price \$26.74 or 12.154 million shares.

## Part B: Debt Financing (Volume 1, Chapter 14)

**Key tools.** Bond price = coupon × annuity factor + face × discount factor. Level loan payment = L × r / (1 − (1+r)^−n). After-tax cost of debt = y × (1 − t).

### Problem 6 (Basic): Bond pricing and after-tax cost

**Question.** Marlow Foods (illustrative) issues a 10-year bond with a 6% annual coupon and \$1,000 face value. Market yield for comparable risk is 7%. Compute the issue price, and the after-tax cost of debt at a 25% tax rate (using the yield).

**Solution.**

1. Annuity factor = (1 − 1.07^−10) / 0.07 = 7.0236.
2. PV of coupons = 60 × 7.0236 = \$421.41.
3. PV of face = 1,000 / 1.07^10 = \$508.35.
4. Price = \$929.76, a discount of \$70.24 because the coupon is below the market yield.
5. After-tax cost of debt = 7% × (1 − 0.25) = 5.25%.

**Answer.** Price \$929.76; after-tax cost 5.25%.

### Problem 7 (Basic): Amortizing term loan

**Question.** A \$5,000,000 term loan has five equal annual payments at 8%. Compute the payment, the interest and principal in year 1, and the balance after year 2.

**Solution.**

1. Payment = 5,000,000 × 0.08 / (1 − 1.08^−5) = \$1,252,282.27.
2. Year 1 interest = 5,000,000 × 8% = \$400,000.00; principal = \$852,282.27; balance = \$4,147,717.73.
3. Year 2 interest = \$331,817.42; principal = \$920,464.85; balance = \$3,227,252.87.
4. Check: the remaining balance equals the PV of the last three payments = 3,227,252.87.

**Answer.** Payment \$1,252,282.27; year 1 interest \$400,000.00, principal \$852,282.27; balance after year 2 \$3,227,252.87.

### Problem 8 (Intermediate): Callable bond: yield to call versus yield to maturity

**Question.** A 10-year, 8% annual-coupon \$1,000 bond is callable after year 5 at \$1,050. The market yield to maturity is 6%. Compute the price at the 6% yield to maturity, then the yield to call if the bond trades at that price. Which yield should an investor treat as the more realistic return, and why?

**Solution.**

1. Price = 80 × annuity(6%, 10) + 1,000 / 1.06^10 = \$588.81 + \$558.39 = \$1,147.20.
2. Yield to call solves 1,147.20 = 80 × annuity(y, 5) + 1,050 / (1+y)^5. Bisection gives y = 5.454%.
3. Because coupon (8%) exceeds the yield, the bond trades at a premium and the issuer has an incentive to call at \$1,050; the yield to call of 5.45% is below the yield to maturity of 6.00%.

**Answer.** Price \$1,147.20; yield to call 5.454% versus 6.000% to maturity; use yield to call (yield to worst).

### Problem 9 (Intermediate): Bond refunding decision

**Question.** Dunmore Utilities (illustrative) has \$100 million of 9% bonds with 15 years remaining, callable at 104. It can issue \$100 million of 15-year 6.5% bonds with \$2 million issuance costs. Tax rate is 25% and both call premium and issuance costs are treated as immediately deductible (a simplification). Compute the after-tax refunding outlay, the after-tax annual interest saving, and the NPV of refunding using the after-tax new borrowing rate.

**Solution.**

1. Call premium = \$100m × 4% = \$4.0m; add issuance cost \$2.0m; after-tax outlay = \$6.0m × 0.75 = \$4.500m.
2. Annual saving = \$100m × (9% − 6.5%) × 0.75 = \$1.875m.
3. Discount rate = 6.5% × 0.75 = 4.875%; annuity factor for 15 years = 10.4679.
4. PV of savings = \$19.627m; NPV = \$19.627m − \$4.500m = \$15.127m.

**Answer.** NPV of refunding = \$15.13 million (outlay \$4.50m, PV of savings \$19.63m).

### Problem 10 (Challenging): Convertible bond decomposition and break-even

**Question.** A 5-year convertible has a \$1,000 face value, a 3% annual coupon and a conversion ratio of 25 shares. The stock trades at \$32 and pays a \$0.80 annual dividend. Straight debt of equal risk yields 7%. The convertible trades at par (\$1,000). Compute (a) the bond floor, (b) the conversion value, (c) the implied value of the embedded option, (d) the conversion premium per share and in percent, and (e) the break-even period based on income pickup.

**Solution.**

1. (a) Floor = 30 × annuity(7%, 5) + 1,000 / 1.07^5 = \$123.01 + \$712.99 = \$835.99.
2. (b) Conversion value = 25 × \$32 = \$800.00.
3. (c) Implied option value = price − floor = 1,000 − 835.99 = \$164.01 per bond.
4. (d) Conversion price = 1,000 / 25 = \$40.00; premium per share = \$40.00 − \$32.00 = \$8.00, or 25.0%.
5. (e) Income pickup = coupon \$30 − dividends on 25 shares (\$20) = \$10.00 per year. Break-even = premium paid (1,000 − 800 = \$200 per bond) / \$10 = 20.0 years, much longer than the 5-year life, so the investor is paying for optionality, not income.

**Answer.** Floor \$835.99; conversion value \$800.00; option value \$164.01; premium 25.0%; break-even 20.0 years.

## Part C: Capital Structure (Volume 1, Chapter 15)

**Key tools.** MM with taxes: V_L = V_U + t × D for permanent debt. rE = rU + (rU − rD) × (D/E) × (1 − t). WACC = (E/V) × rE + (D/V) × rD × (1 − t).

### Problem 11 (Basic): Modigliani-Miller with taxes

**Question.** Eastgate Components (illustrative) is unlevered with value \$500 million. It issues \$200 million of permanent debt and uses the proceeds to repurchase shares. The tax rate is 25%. Compute the levered firm value, the equity value after the recapitalization, and the gain per dollar of debt.

**Solution.**

1. PV of tax shield = t × D = 0.25 × 200 = \$50.0m.
2. V_L = 500 + 50 = \$550.0m.
3. Equity = V_L − D = 550.0 − 200 = \$350.0m.

**Answer.** V_L = \$550.0m; equity = \$350.0m; gain = \$50m.

### Problem 12 (Basic): Cost of equity and WACC under MM

**Question.** An unlevered cost of capital is 10%, the cost of debt is 5%, D/E = 0.5 and the tax rate is 25%. Compute the cost of equity and WACC, and compare WACC with the unlevered cost.

**Solution.**

1. rE = 10% + (10% − 5%) × 0.5 × 0.75 = 11.875%.
2. Weights: E/V = 1/1.5 = 66.67%, D/V = 33.33%.
3. WACC = 66.67% × 11.875% + 33.33% × 5% × 0.75 = 9.167%.

**Answer.** rE = 11.875%; WACC = 9.167%.

### Problem 13 (Intermediate): Trade-off theory and optimal debt

**Question.** Rowan Pharma Distribution (illustrative) has unlevered value \$800 million and a 25% tax rate. Distress would cost 25% of unlevered value (\$200 million). The probability of distress at debt levels of \$0, \$100m, \$200m, \$300m and \$400m is 0%, 2%, 6%, 15% and 30%. Find the value-maximizing debt level.

**Solution.**

1. Firm value = V_U + 0.25 × D − P(distress) × \$200m. Computed values:

   | Debt (\$m) | PV tax shield | P(distress) | Expected distress cost | Firm value |
   |---:|---:|---:|---:|---:|
   | 0 | 0.0 | 0% | 0.0 | 800.0 |
   | 100 | 25.0 | 2% | 4.0 | 821.0 |
   | 200 | 50.0 | 6% | 12.0 | 838.0 |
   | 300 | 75.0 | 15% | 30.0 | 845.0 |
   | 400 | 100.0 | 30% | 60.0 | 840.0 |

2. The maximum is at debt of \$300m with value \$845.0m.
3. Marginal analysis: from \$300m to \$400m the extra tax shield of \$25m is outweighed by the extra expected distress cost of \$30m, so the optimum lies below \$400m.
4. Debt/value at the optimum = 35.5%.

**Answer.** Optimal debt \$300m; firm value \$845.0m.

### Problem 14 (Intermediate): EBIT-EPS indifference analysis

**Question.** Brightwater Marine (illustrative) has 50 million shares at \$20 and needs \$200 million. Plan A issues equity at \$20; Plan B issues 6% debt. Tax rate is 25%. Find the EBIT at which EPS is identical, and compare EPS at EBIT of \$60m and \$100m.

**Solution.**

1. Plan A issues 200m / 20 = 10 million shares (60m total). Plan B has interest of 200 × 6% = \$12m with 50m shares.
2. Indifference: EBIT × 0.75 / 60 = (EBIT − 12) × 0.75 / 50, so 50 × EBIT = 60 × EBIT − 720 and EBIT = 720 / 10 = \$72.0m.
3. At EBIT = 60: EPS(A) = \$0.750; EPS(B) = \$0.720. Equity is better below the break-even.
4. At EBIT = 100: EPS(A) = \$1.250; EPS(B) = \$1.320. Debt is better above it.

**Answer.** Break-even EBIT = \$72.0m; EPS at 60: A 0.750 vs B 0.720; at 100: A 1.250 vs B 1.320.

### Problem 15 (Challenging): Adjusted present value with financing side effects

**Question.** A project costs \$100 million and produces a perpetual unlevered after-tax cash flow of \$12 million; the unlevered cost of capital is 10%. The firm will finance it with \$60 million of permanent 6% debt (tax rate 30%, issuance costs 2% of the debt) plus \$20 million of the debt's proceeds being replaced by a government-subsidized perpetual loan at 3% (the other \$40 million is market-rate). Compute the APV. Treat the subsidized \$20 million as part of the \$60 million total and value the subsidy separately as the after-tax interest saving discounted at 6%.

**Solution.**

1. Base-case NPV = 12 / 0.10 − 100 = \$20.0m.
2. Tax shield on permanent debt = 0.30 × 60 = \$18.0m.
3. Issuance costs = 2% × 60 = \$1.2m (negative).
4. Subsidy value = 20 × (6% − 3%) × (1 − 0.30) / 0.06 = \$7.0m.
5. APV = 20.0 + 18.0 − 1.2 + 7.0 = \$43.8m.

**Answer.** APV = \$43.8 million.

## Part D: Payout Policy (Volume 1, Chapter 16)

**Key tools.** Dividend per share = EPS × payout ratio. Sustainable growth g = ROE × retention. Gordon value P = D1 / (rE − g).

### Problem 16 (Basic): Dividend mechanics

**Question.** Cobalt Retail (illustrative) has 100 million shares, EPS of \$3.00 and a 40% payout ratio. The share price is \$48. Compute dividend per share, total dividends, retained earnings, dividend yield and the theoretical ex-dividend price drop.

**Solution.**

1. DPS = 3.00 × 0.40 = \$1.20.
2. Total dividends = 100,000,000 × 1.20 = \$120.0m; retained earnings = (3.00 − 1.20) × 100m = \$180.0m.
3. Dividend yield = 1.20 / 48 = 2.50%.
4. Ex-dividend price falls by about the dividend (no taxes): 48.00 − 1.20 = \$46.80.

**Answer.** DPS \$1.20; total \$120.0m; retained \$180.0m; yield 2.50%; ex-div price \$46.80.

### Problem 17 (Basic): Open-market repurchase and EPS

**Question.** A firm earns \$400 million with 100 million shares trading at \$50. It uses \$200 million of excess cash to repurchase shares at \$50. Assume lost interest on the cash is ignored. Compute the new share count, EPS before and after, and the post-buyback price if the P/E multiple is unchanged. Is any value created?

**Solution.**

1. Shares repurchased = 200,000,000 / 50 = 4,000,000; remaining = 96,000,000.
2. EPS before = 400/100 = \$4.00; after = 400 / 96 = \$4.1667 (4.17% accretion).
3. P/E before = 50 / 4.00 = 12.5x; with constant P/E the price would be 12.5 × 4.1667 = \$52.08.

**Answer.** Shares 96.0m; EPS \$4.00 to \$4.1667; accretion is cosmetic since value per share remains \$50.

### Problem 18 (Intermediate): Debt-financed buyback

**Question.** Using the same \$400 million of earnings and 100 million shares, now at a price of \$60, the firm borrows \$300 million at 6% and repurchases shares at \$60 (tax rate 25%). Compute the new EPS, the earnings yield, the after-tax cost of debt and the break-even interest rate at which EPS is unchanged.

**Solution.**

1. Shares repurchased = 300,000,000 / 60 = 5,000,000; remaining 95,000,000.
2. After-tax interest = 300m × 6% × 0.75 = \$13.50m; net income = \$386.50m.
3. EPS = 386.50 / 95 = \$4.0684 versus \$4.00 before (1.71%).
4. Earnings yield = 4.00 / 60 = 6.667% exceeds after-tax debt cost of 4.500%, so EPS rises.
5. Break-even: r × 0.75 = 6.667%, so r = 8.889%. EPS accretion does not imply value creation, because the added financial risk raises the cost of equity and the P/E should fall.

**Answer.** EPS \$4.0684 (+1.71%); break-even interest rate 8.889%.

### Problem 19 (Intermediate): Dividend policy and growth valuation

**Question.** Next year's EPS will be \$5.00, ROE on retained earnings is 15% and the cost of equity is 12%. Using the Gordon model, compute the value per share under payout ratios of 40% and 70%, and explain the result. Then compute the value at a payout of zero and state the limit of the model.

**Solution.**

1. At 40% payout: g = 15% × 0.60 = 9.0%; D1 = \$2.00; P = 2.00 / (12% − 9.0%) = \$66.67.
2. At 70% payout: g = 15% × 0.30 = 4.5%; D1 = \$3.50; P = 3.50 / (12% − 4.5%) = \$46.67.
3. At 0% payout: g = 15.0%, D1 = 0 and the Gordon formula yields zero, a failure of the model (growth of 15% exceeds the discount rate so the perpetuity does not converge). The perpetuity-growth model requires g < rE.
4. Value falls as the payout rises because ROE (15%) exceeds the cost of equity (12%): retained earnings earn more than shareholders could earn elsewhere, so retention creates value. If ROE equalled 12%, payout policy would be irrelevant.
5. Check at ROE = rE: P = 5.00 / 0.12 = \$41.67 for any payout.

**Answer.** 40% payout: \$66.67; 70% payout: \$46.67; zero payout breaks the model since g > rE.

### Problem 20 (Challenging): Dividend versus repurchase for a taxable investor

**Question.** A taxable investor holds 1,000 shares at \$50 with a cost basis of \$20. The firm distributes \$2.00 per share either as a dividend (taxed at 30%) or through a pro rata repurchase at \$50 in which the investor tenders a proportionate number of shares (capital gains taxed at 15% on the gain over basis). Compare after-tax wealth immediately after each choice, ignoring tax on unrealized gains.

**Solution.**

1. Dividend: cash = 1,000 × \$2.00 = \$2,000; tax = 30% = \$600; after-tax cash = \$1,400. Shares then trade at \$48: 1,000 × 48 = \$48,000. Wealth = \$49,400.
2. Repurchase: investor tenders \$2,000 / \$50 = 40 shares and receives \$2,000. Gain = 40 × (50 − 20) = \$1,200; tax = 15% = \$180; after-tax cash = \$1,820.
3. Remaining 960 shares at \$50 (no ex-dividend drop) = \$48,000. Wealth = \$49,820.
4. Difference = \$420 in favor of the repurchase, equal to the tax saving: dividend tax \$600 versus capital-gains tax \$180.

**Answer.** Wealth after dividend \$49,400; after repurchase \$49,820; repurchase wins by \$420.

## Part E: Working Capital (Volume 1, Chapter 17)

**Key tools.** DIO = inventory / COGS × 365; DSO = receivables / sales × 365; DPO = payables / COGS × 365; CCC = DIO + DSO − DPO. Cost of forgoing a discount d/(1−d) × 365/(N − discount days). EOQ = √(2DS/H).

### Problem 21 (Basic): Cash conversion cycle

**Question.** Pinecrest Hardware (illustrative) reports sales \$730m, COGS \$511m, inventory \$70m, receivables \$100m and payables \$56m. Compute DIO, DSO, DPO and the cash conversion cycle, then the cash released if the CCC is cut by 10 days.

**Solution.**

1. DIO = 70 / 511 × 365 = 50.0 days.
2. DSO = 100 / 730 × 365 = 50.0 days.
3. DPO = 56 / 511 × 365 = 40.0 days.
4. CCC = 50.0 + 50.0 − 40.0 = 60.0 days.
5. Cutting 10 days of sales-based working capital releases about 10 × 730 / 365 = \$20.0m (using sales as the base; on a COGS base, receivables and inventory days release different amounts).

**Answer.** DIO 50.0, DSO 50.0, DPO 40.0, CCC 60.0 days; cash released about \$20.0m.

### Problem 22 (Basic): Cost of trade credit

**Question.** Supplier terms are 2/10 net 30. Compute the annualized simple cost and the effective annual cost of forgoing the discount, and state whether a firm able to borrow at 12% should take the discount.

**Solution.**

1. Periodic cost = 0.02 / 0.98 = 2.0408% for 20 additional days of credit.
2. Simple annualized cost = 2.0408% × 365 / 20 = 37.24%.
3. Effective annual cost = (1.020408)^(365/20) − 1 = 44.59%.

**Answer.** Simple 37.24%; effective 44.59%; take the discount.

### Problem 23 (Intermediate): Economic order quantity

**Question.** A distributor uses 24,000 units per year, ordering costs \$150 per order and holding costs \$6 per unit per year. Compute the EOQ, orders per year, total annual cost, and the cost penalty if it instead orders 2,000 units at a time.

**Solution.**

1. EOQ = √(2 × 24,000 × 150 / 6) = √1,200,000 = 1,095.4 units.
2. Orders per year = 24,000 / 1,095.4 = 21.91.
3. Total cost at EOQ = ordering 3,286.34 + holding 3,286.34 = \$6,572.67.
4. At Q = 2,000: ordering = 12 × 150 = \$1,800; holding = 1,000 × 6 = \$6,000; total = \$7,800. Penalty = \$1,227.33 (18.7%).
5. At the EOQ, ordering and holding costs are equal, a useful check.

**Answer.** EOQ 1,095.4 units; cost \$6,572.67; ordering 2,000 costs \$1,227.33 more.

### Problem 24 (Intermediate): Credit policy change

**Question.** Sales are \$50m with variable costs of 70% of sales, DSO of 40 days and bad debts of 1% of sales. A looser credit policy would raise sales to \$54m, DSO to 55 days and bad debts to 2% of sales. The cost of funds is 10%, and receivables are financed at variable cost. Evaluate the change (ignore taxes, and use a 365-day year).

**Solution.**

1. Incremental contribution = (54 − 50) × 30% = \$1.20m.
2. Receivables: old = 50 × 40 / 365 = \$5.479m; new = 54 × 55 / 365 = \$8.137m. Incremental investment at variable cost = (8.137 − 5.479) × 0.70 = \$1.860m.
3. Carrying cost = 10% × 1.860 = \$0.186m.
4. Incremental bad debts = 54 × 2% − 50 × 1% = 1.08 − 0.50 = \$0.58m.
5. Net benefit = 1.20 − 0.186 − 0.58 = \$0.434m per year. Positive, so adopt, but the margin is thin: if bad debts reach 2.5%, the gain turns to \$0.164m.

**Answer.** Net benefit \$0.434m per year; adopt, with sensitivity to the bad-debt rate.

### Problem 25 (Challenging): Miller-Orr cash management

**Question.** A firm has fixed transaction cost of \$50 per transfer between securities and cash, daily cash-flow standard deviation of \$1,200, an annual interest rate of 4% (daily rate 4%/365) and a minimum cash balance of \$10,000. Compute the Miller-Orr spread, return point and upper limit, then the approximate average cash balance using (4 × return point − lower limit) / 3.

**Solution.**

1. Daily rate i = 0.04 / 365 = 0.00010959; variance σ² = 1,200² = 1,440,000.
2. Spread = 3 × (0.75 × 50 × 1,440,000 / 0.00010959)^(1/3) = \$23,695.
3. Return point = 10,000 + spread/3 = \$17,898; upper limit = 10,000 + spread = \$33,695.
4. Average balance ≈ (4 × 17,898 − 10,000) / 3 = \$20,531.

**Answer.** Spread \$23,695; return point \$17,898; upper limit \$33,695; average cash about \$20,531.

## Part F: Options (Volume 1, Chapter 18)

**Key tools.** Put-call parity (continuous compounding): C − P = S − K × e^(−rT). One-period binomial: q = (1 + r − d) / (u − d), value = [q × Cu + (1 − q) × Cd] / (1 + r). Black-Scholes: C = S N(d1) − K e^(−rT) N(d2), d1 = [ln(S/K) + (r + σ²/2)T] / (σ√T), d2 = d1 − σ√T.

### Problem 26 (Basic): Put-call parity

**Question.** A European call on a non-dividend-paying stock has S = \$50, K = \$50, T = 1 year, r = 5% (continuous) and price \$6.00. Find the put price and the cost of a protective-put position.

**Solution.**

1. PV of strike = 50 × e^(−0.05) = \$47.561.
2. P = C − S + PV(K) = 6.00 − 50.00 + 47.561 = \$3.561.
3. A protective put (stock plus put) costs \$53.561 and guarantees at least \$50 at expiry.
4. Equivalent identity: stock + put = call + PV(K) = 6.00 + 47.561 = 53.561, confirming the result.

**Answer.** Put = \$3.561.

### Problem 27 (Basic): One-period binomial option

**Question.** A stock at \$100 will rise to \$120 or fall to \$90 in one period. The risk-free rate is 4% per period. Price a call with strike \$105 using risk-neutral probabilities and verify with a replicating portfolio.

**Solution.**

1. q = (1.04 − 0.90) / (1.20 − 0.90) = 0.4667.
2. Payoffs: Cu = 120 − 105 = 15.0; Cd = 0.
3. C = 0.4667 × 15 / 1.04 = \$6.7308.
4. Replication: delta = 15 / 30 = 0.50 shares; borrowing = 0.5 × 90 / 1.04 = \$43.269; cost = 50 − 43.269 = \$6.7308, matching the risk-neutral price.

**Answer.** Call = \$6.7308; delta = 0.50.

### Problem 28 (Intermediate): Black-Scholes valuation

**Question.** S = \$80, K = \$75, r = 4% (continuous), σ = 30%, T = 0.5, no dividends. Compute d1, d2, call price, put price, call delta and verify put-call parity.

**Solution.**

1. d1 = [ln(80/75) + (0.04 + 0.045) × 0.5] / (0.30 × √0.5) = 0.5046.
2. d2 = 0.5046 − 0.2121 = 0.2925.
3. N(d1) = 0.6931; N(d2) = 0.6150.
4. Call = 80 × 0.6931 − 75 × e^(−0.02) × 0.6150 = \$10.232.
5. Put = 75 × e^(−0.02) × N(−d2) − 80 × N(−d1) = \$3.747.
6. Parity: C − P = 6.485; S − PV(K) = 6.485. Delta = N(d1) = 0.6931.

**Answer.** Call \$10.232; put \$3.747; delta 0.6931.

### Problem 29 (Intermediate): American versus European put (two-period tree)

**Question.** S = \$50, u = 1.2, d = 1/1.2, risk-free rate 5% per period, two periods, strike \$52. Price the European and American puts and identify where early exercise is optimal.

**Solution.**

1. q = (1.05 − 0.8333) / (1.2 − 0.8333) = 0.5909. Terminal stock prices: uu = 72.00, ud = 50.00, dd = 34.72. Put payoffs: 0.00, 2.00, 17.28.
2. European: Pu = 0.7792, Pd = 7.8571; P0 = 3.4997.
3. American at node d (S = 41.67): continuation = 7.8571 versus immediate exercise = 10.33; exercise value is larger, so exercise early. Value = 10.3333.
4. At node u (S = 60.00): exercise = 0.00, continuation 0.7792, so hold.
5. American P0 = max(52 − 50, (q × 0.7792 + (1−q) × 10.3333) / 1.05) = \$4.4645.
6. Early exercise premium = 4.4645 − 3.4997 = \$0.9647.

**Answer.** European put \$3.4997; American put \$4.4645; early exercise optimal in the down node.

### Problem 30 (Challenging): Warrant valuation with dilution

**Question.** A company has 10 million shares at \$30 and issues 2 million two-year warrants with strike \$35. Volatility is 35%, r = 4% (continuous) and there are no dividends. Value an ordinary call (no dilution), then the warrant using the dilution-adjusted approach W = N/(N+M) × C(S + M·W/N), solved iteratively.

**Solution.**

1. Ordinary Black-Scholes call at S = 30: \$5.0020.
2. Dilution adjustment: warrant holders' claim on the equity means the effective underlying value per share is (N × S + M × W) / N, and the payout is shared across N + M shares, so W = [N / (N + M)] × C((N S + M W) / N).
3. Iteration (start W = 5.0020) converges to W = \$4.5899.
4. Dilution discount = 8.24% relative to the plain call. Total warrant value = 2,000,000 × 4.5899 = \$9.180m.

**Answer.** Plain call \$5.0020; dilution-adjusted warrant \$4.5899; total \$9.180m.

## Part G: Derivatives (Volume 1, Chapter 19)

**Key tools.** Forward price with continuous yield q: F = S × e^((r − q)T). Swap fixed rate = (1 − DF_n) / Σ DF_t. Minimum-variance hedge ratio h* = ρ × σS / σF.

### Problem 31 (Basic): Forward price on a dividend-paying index

**Question.** An index is at 100, the continuously compounded risk-free rate is 5%, the dividend yield is 2% and the forward matures in six months. Compute the fair forward price. If the forward trades at 102.50, describe the arbitrage and its profit per unit at maturity.

**Solution.**

1. F = 100 × e^((0.05 − 0.02) × 0.5) = \$101.511.
2. The quoted 102.50 exceeds fair value by 0.989, so the forward is overpriced.
3. Cash-and-carry: sell the forward at 102.50, buy e^(−0.02 × 0.5) units of the index (dividends reinvested grow this to exactly one unit at expiry) for \$99.005 borrowed at 5%. At maturity repay \$101.511, which equals the fair forward price, and deliver one unit against the 102.50 forward price.
4. Net profit per unit = 102.50 − 101.511 = \$0.989, risk-free.

**Answer.** Fair forward 101.511; arbitrage profit 0.989 per unit.

### Problem 32 (Basic): Interest-rate swap as a hedge

**Question.** A borrower pays floating SOFR + 1.50% on \$80 million. It enters a swap to receive SOFR and pay a fixed 4.20%. SOFR over four annual periods is 3.50%, 4.00%, 4.80% and 5.50%. Compute the effective borrowing rate each year and the dollar interest in year 4 with and without the swap.

**Solution.**

1. Effective rate = (SOFR + 1.50%) − (SOFR − 4.20%) = 5.70% every year, regardless of SOFR. The table shows each component:

   | Year | SOFR | Unhedged rate | Swap net receipt | Hedged rate |
   |---:|---:|---:|---:|---:|
   | 1 | 3.50% | 5.00% | -0.70% | 5.70% |
   | 2 | 4.00% | 5.50% | -0.20% | 5.70% |
   | 3 | 4.80% | 6.30% | 0.60% | 5.70% |
   | 4 | 5.50% | 7.00% | 1.30% | 5.70% |

2. Year 4 without swap: 80m × 7.00% = \$5.60m. With swap: 80m × 5.70% = \$4.56m.
3. Year 1: swap payment is negative (pays 4.20% vs receives 3.50%), so interest with swap is 80m × 5.70% = \$4.56m versus unhedged \$4.00m; the swap costs the borrower \$0.56m in year 1 but saves \$1.04m in year 4.

**Answer.** Effective rate is 5.70% in all years; year 4 interest \$4.56m hedged vs \$5.60m unhedged.

### Problem 33 (Intermediate): Swap rate and value of an off-market swap

**Question.** Zero-coupon rates (annual compounding) for years 1 to 4 are 4.0%, 4.4%, 4.7% and 4.9%. Compute the discount factors, the par four-year swap rate and the value to the fixed-rate payer of an existing four-year swap on \$100 million with a fixed rate of 4.00%.

**Solution.**

1. Discount factors: DF1 = 0.96154; DF2 = 0.91749; DF3 = 0.87128; DF4 = 0.82584;
2. Annuity (sum of DFs) = 3.57615.
3. Par swap rate = (1 − 0.82584) / 3.57615 = 4.8699%.
4. The existing swap pays 4.00%, below the market par rate, so the fixed payer holds an asset. Value = (par rate − 4.00%) × annuity × notional = (4.8699% − 4.0000%) × 3.57615 × \$100m = \$3.111m.
5. Equivalent view: value = PV of the fixed-rate advantage each year, discounted at the zero curve.

**Answer.** Par swap rate 4.8699%; swap value to fixed payer \$3.111m.

### Problem 34 (Intermediate): Minimum-variance and beta hedges

**Question.** (a) A manager has a \$40 million exposure with spot-futures correlation 0.90, σS = 25% and σF = 22%. Find the minimum-variance hedge ratio and the variance reduction achieved. (b) An equity manager holds a \$60 million portfolio with beta 1.2 and wants beta 0.4 using index futures priced at 4,000 with a \$250 multiplier. How many contracts?

**Solution.**

1. (a) h* = ρ σS / σF = 0.90 × 0.25 / 0.22 = 1.0227; futures notional to short = 1.0227 × \$40m = \$40.91m.
2. Hedge effectiveness = ρ² = 0.81, so variance is cut by 81%.
3. (b) Contract value = 4,000 × 250 = \$1,000,000.
4. N = (0.4 − 1.2) × 60,000,000 / 1,000,000 = -48, i.e., sell 48 contracts.

**Answer.** (a) h* = 1.0227, variance reduced by 81%; (b) sell 48 contracts.

### Problem 35 (Challenging): No-arbitrage band with frictions

**Question.** A commodity trades at \$100. One-year futures are quoted at 106. Borrowing costs 5%, lending earns 3.5%, storage costs \$2 payable at year-end, and round-trip transaction costs are \$0.50. Compute the cash-and-carry upper bound and the reverse cash-and-carry lower bound, and the arbitrage profit if futures are quoted at 106, 108 and 104.

**Solution.**

1. Upper bound (buy spot, store, short future) = 100 × 1.05 + 2 + 0.50 = \$107.50.
2. Lower bound (an owner sells spot, lends at 3.5%, saves storage, goes long future) = 100 × 1.035 + 2 − 0.50 = \$105.00.
3. At F = 106 the price lies inside the band [105.00, 107.50]: profit = \$0.00.
4. At F = 108: sell future, buy spot with borrowed funds; profit = 108 − 107.50 = \$0.50.
5. At F = 104: reverse cash-and-carry; profit = 105.00 − 104 = \$1.00 (only available to those who own or can short the commodity).

**Answer.** Band [105.00, 107.50]; profits 0.00, 0.50, 1.00.

## Part H: Risk Management and Foreign Exchange (Volume 1, Chapter 20)

**Key tools.** Covered interest parity (direct quote, domestic per foreign): F = S × (1 + r_d) / (1 + r_f). Money-market hedge replicates the forward. Immunization matches the duration of assets and liabilities and the present values.

### Problem 36 (Basic): Covered interest parity

**Question.** Spot is \$1.10 per euro, one-year USD interest is 5% and one-year euro interest is 3%. Compute the one-year forward rate and the forward points. Which currency trades at a forward premium?

**Solution.**

1. F = 1.10 × 1.05 / 1.03 = \$1.1214 per euro.
2. Forward points = (1.1214 − 1.1000) × 10,000 = 213.6 pips.
3. The euro trades at a forward premium because its interest rate is lower than the dollar rate; interest differentials are offset by the forward discount or premium.

**Answer.** Forward \$1.1214; +213.6 points; euro at a premium.

### Problem 37 (Basic): Transaction exposure hedging comparison

**Question.** A US firm will receive €5 million in six months. The six-month forward is \$1.12 per euro. A euro put (right to sell euros) with strike \$1.11 costs \$0.02 per euro (ignore interest on the premium). Compute dollar proceeds for spot outcomes of 1.05, 1.12 and 1.20.

**Solution.**

1. Proceeds: unhedged = 5m × spot; forward = 5m × 1.12; option = 5m × (max(spot, 1.11) − 0.02).

   | Spot at maturity | Unhedged (\$m) | Forward (\$m) | Put option net (\$m) |
   |---:|---:|---:|---:|
   | 1.05 | 5.250 | 5.600 | 5.450 |
   | 1.12 | 5.600 | 5.600 | 5.500 |
   | 1.20 | 6.000 | 5.600 | 5.900 |

2. The forward fixes \$5.600m; the put sets a floor of 5m × (1.11 − 0.02) = \$5.450m while retaining upside, at an upfront cost of \$0.100m.
3. Break-even spot for the option versus the forward = 1.12 + 0.02 = \$1.14; above this the option wins; below it the forward wins (down to 1.11).

**Answer.** Forward \$5.600m in all cases; option floors at \$5.450m and exceeds the forward only if spot is above \$1.14.

### Problem 38 (Intermediate): Money-market hedge of a foreign-currency payable

**Question.** A US importer owes £2 million in one year. Spot is \$1.25 per pound, USD borrowing costs 5.5% and GBP deposits earn 4.0%. Design a money-market hedge, compute its cost in dollars at maturity, compare it with a bank forward quote of \$1.2750, and state the CIP forward rate.

**Solution.**

1. Pounds to deposit today = 2,000,000 / 1.04 = £1,923,077.
2. Dollars needed today = 1,923,077 × 1.25 = \$2,403,846, borrowed at 5.5%.
3. Dollar repayment at maturity = 2,403,846 × 1.055 = \$2,536,058, an effective rate of \$1.2680 per pound.
4. CIP forward = 1.25 × 1.055 / 1.04 = \$1.2680, equal to the money-market rate.

**Answer.** Hedged cost \$2,536,058 (1.2680 per £); forward at 1.2750 is \$13,942 worse.

### Problem 39 (Intermediate): Duration immunization

**Question.** A pension fund owes \$10 million in exactly five years. Available assets are a 3-year zero-coupon bond and an 8-year zero-coupon bond, both yielding 6% (annual compounding). Build a portfolio with present value equal to the liability and Macaulay duration of 5 years, and test a parallel yield shift of +/-1%.

**Solution.**

1. PV of liability = 10,000,000 / 1.06^5 = \$7,472,582.
2. Duration condition: 3 w + 8 (1 − w) = 5 gives w(3-year) = 0.60 and w(8-year) = 0.40.
3. Invest \$4,483,549 in the 3-year zero and \$2,989,033 in the 8-year zero.
4. Revalue after an instantaneous parallel yield shift:

   | Yield change | Asset value | Liability value | Surplus |
   |---:|---:|---:|---:|
   | -1% | 7,837,380 | 7,835,262 | 2,119 |
   | 0% | 7,472,582 | 7,472,582 | 0 |
   | 1% | 7,131,742 | 7,129,862 | 1,880 |


**Answer.** Invest 60% in the 3-year and 40% in the 8-year zero; surplus stays non-negative for plus or minus 1%.

### Problem 40 (Challenging): Parametric VaR and risk decomposition

**Question.** A \$100 million portfolio holds 60% in Asset X (annual volatility 20%) and 40% in Asset Y (10%); correlation is 0.30. Compute annualized portfolio volatility, the 10-day 99% VaR (z = 2.3263, 250 trading days, zero mean), the undiversified VaR, and each asset's percentage contribution to portfolio risk.

**Solution.**

1. Variance = (0.6 × 0.20)² + (0.4 × 0.10)² + 2 × 0.3 × 0.6 × 0.4 × 0.20 × 0.10 = 0.018880; volatility = 13.740%.
2. 10-day volatility = 13.740% × √(10/250) = 2.748%.
3. VaR(99%, 10-day) = 2.3263 × 2.748% × \$100m = \$6.39m.
4. Undiversified VaR (sum of stand-alone) = 2.3263 × √0.04 × (0.12 + 0.04) × \$100m = \$7.44m; diversification benefit = \$1.05m.
5. Risk contribution of X = w × cov(X, P) / σP² = 83.9%; of Y = 16.1% (sum = 100.0%). X holds 60% of capital but 83.9% of risk.

**Answer.** Volatility 13.74%; 10-day 99% VaR \$6.39m; X contributes 83.9% of risk.

## Part I: Enterprise Valuation (Volume 1, Chapter 21)

**Key tools.** FCFF = EBIT × (1 − t) + D&A − capex − ΔNWC. Terminal value (Gordon) = FCFF_(n+1) / (WACC − g). Equity value = EV − net debt.

### Problem 41 (Basic): Free cash flow to the firm

**Question.** A company has EBIT of \$150 million, a tax rate of 25%, depreciation of \$40m, capital expenditure of \$60m and an increase in net working capital of \$10m. Compute NOPAT and FCFF.

**Solution.**

1. NOPAT = 150 × 0.75 = \$112.5m.
2. FCFF = 112.5 + 40 − 60 − 10 = \$82.5m.
3. Reinvestment = capex − D&A + ΔNWC = 30 million, a reinvestment rate of 26.7%.

**Answer.** NOPAT \$112.5m; FCFF \$82.5m.

### Problem 42 (Basic): Perpetuity-growth enterprise value

**Question.** Treat the FCFF of \$82.5 million from Problem 41 as next year's cash flow, with WACC 9% and perpetual growth 3%. Net debt is \$400m and there are 50 million shares. Compute EV, equity value, per-share value and the EV/FCFF multiple.

**Solution.**

1. EV = 82.5 / (0.09 − 0.03) = \$1,375.0m.
2. Equity = 1,375.0 − 400 = \$975.0m.
3. Per share = 975.0 / 50 = \$19.50.
4. EV/FCFF = 1 / (WACC − g) = 16.67x. Raising g by 0.5 point to 3.5% would lift EV to \$1,500.0m: high sensitivity.

**Answer.** EV \$1,375.0m; equity \$975.0m; \$19.50 per share.

### Problem 43 (Intermediate): Five-year DCF with terminal value

**Question.** Forecast FCFF is 100, 110, 121, 130 and 138 (\$m) for years 1 to 5. WACC is 9% and terminal growth 3%. Compute the explicit-period PV, terminal value, PV of terminal value, EV and the share of EV from the terminal value.

**Solution.**

1. PV of explicit cash flows: 91.74 + 92.58 + 93.43 + 92.10 + 89.69 = \$459.55m.
2. Terminal value at year 5 = 138 × 1.03 / 0.06 = \$2,369.00m.
3. PV of terminal value = 2,369.00 / 1.09^5 = \$1,539.69m.
4. EV = 459.55 + 1,539.69 = \$1,999.24m.
5. Terminal value share = 77.0%. When this exceeds about three-quarters of value, the valuation rests on terminal assumptions; check implied multiple TV / FCFF5 = 17.17x.

**Answer.** EV \$1,999.24m; terminal value is 77.0% of EV.

### Problem 44 (Intermediate): Valuation by comparable multiples

**Question.** Five comparable companies trade at EV/EBITDA of 9.0x, 10.5x, 8.5x, 11.0x and 9.5x. The target has EBITDA of \$200m, net debt of \$450m and 40 million shares. Compute the mean and median multiples, the implied EV and per-share value range using the median, and the full range.

**Solution.**

1. Mean = 9.70x; median = 9.5x; low 8.5x; high 11.0x.
2. EV at median = 200 × 9.5 = \$1,900m; equity = 1,450m; per share = \$36.25.
3. EV range = \$1,700m to \$2,200m; per share \$31.25 to \$43.75.
4. Leverage amplifies the range in the equity value: a 29% spread in EV (8.5x to 11.0x) becomes a wider spread in equity because net debt is fixed.

**Answer.** Median value \$36.25 per share; range \$31.25 to \$43.75.

### Problem 45 (Challenging): Value-driver formula and growth

**Question.** Next year's NOPAT is \$100 million and WACC is 9%. Compute enterprise value using EV = NOPAT × (1 − g/ROIC) / (WACC − g) for (a) g = 4%, ROIC = 15%; (b) g = 4%, ROIC = 9%; (c) g = 0; (d) g = 4%, ROIC = 20%. Interpret.

**Solution.**

1. (a) Reinvestment rate = 4% / 15% = 26.67%; FCF = 73.33; EV = 73.33 / 0.05 = \$1,466.67m.
2. (b) ROIC = WACC: reinvestment rate = 44.44%; EV = 55.56 / 0.05 = \$1,111.11m.
3. (c) No growth: EV = 100 / 0.09 = \$1,111.11m.
4. (d) ROIC 20%: reinvestment 20%; EV = \$1,600.00m.
5. Results: (b) equals (c): when ROIC = WACC growth adds no value. Growth value in (a) = 355.6m; in (d) = 488.9m. Growth creates value only when ROIC exceeds WACC.

**Answer.** (a) \$1,466.7m; (b) \$1,111.1m; (c) \$1,111.1m; (d) \$1,600.0m; only ROIC above WACC makes growth valuable.

## Part J: Mergers and Acquisitions (Volume 1, Chapter 22)

**Key tools.** NPV to acquirer = synergies − premium (cash deal). Premium = offer price − standalone price. In stock deals, post-merger value is shared pro rata, so target holders share in synergies and in the risk of overpayment.

### Problem 46 (Basic): Value created in a cash acquisition

**Question.** An acquirer pays \$360 million cash for a target with standalone value \$300 million. The PV of synergies is \$100 million. Compute the premium, the NPV to the acquirer's shareholders, the gain to target shareholders and the share of synergies captured by each side.

**Solution.**

1. Premium = 360 − 300 = \$60m (20%).
2. Acquirer NPV = synergies − premium = 100 − 60 = \$40m.
3. Target gain = premium = \$60m.
4. Shares of synergies: target 60%, acquirer 40%.
5. Maximum premium the acquirer can pay without destroying value is \$100m (a 33.3% premium).

**Answer.** Premium \$60m; acquirer NPV \$40m; target gain \$60m.

### Problem 47 (Basic): Exchange ratio and EPS dilution in a stock deal

**Question.** An acquirer (100m shares, price \$60, EPS \$4.00) offers all stock for a target (50m shares, price \$40, net income \$120m) at a 30% premium. Compute the offer price, exchange ratio, new shares issued, pro forma EPS (no synergies) and the P/E ratios of each firm.

**Solution.**

1. Offer price = 40 × 1.30 = \$52.00.
2. Exchange ratio = 52.00 / 60 = 0.8667 acquirer shares per target share.
3. New shares = 50,000,000 × 0.8667 = 43.333 million; total = 143.333m.
4. Pro forma net income = 400 + 120 = \$520m; EPS = 520 / 143.333 = \$3.6279, dilution of 9.30%.
5. Acquirer P/E = 60 / 4 = 15.0x; target P/E at market = 2,000 / 120 = 16.67x (at the offer price 21.67x). Paying a higher P/E than one's own with stock dilutes EPS.

**Answer.** Exchange ratio 0.8667; EPS \$3.6279 vs \$4.00 (-9.30%).

### Problem 48 (Intermediate): Value sharing in a stock-for-stock merger

**Question.** Acquirer A has 100 million shares at \$60; target B has 40 million shares at \$40. Synergies are worth \$300 million. A offers 0.80 of its shares for each B share. Compute post-merger price, gains to each side, and the break-even synergy at which A's holders are no worse off.

**Solution.**

1. Standalone values: A = \$6,000m; B = \$1,600m. Combined with synergies = \$7,900m.
2. New shares issued = 40 × 0.80 = 32m; total = 132m; A holders own 75.76%.
3. Post-merger price = 7,900 / 132 = \$59.848.
4. Gain to A holders = (59.848 − 60) × 100 = −\$15.2m; gain to B holders = 59.848 × 32 − 1,600 = \$315.2m. Sum = \$300.0m = synergies.
5. Break-even: A holders need 75.76% × (8,000 + S) = 6,000, so S = \$320m. The 0.80 ratio embeds a premium of 0.8 × 60 / 40 − 1 = 20%, i.e., \$320m on B's \$1,600m; A's holders break even exactly when synergies equal the premium paid.

**Answer.** Price \$59.848; A loses \$15.2m, B gains \$315.2m; break-even synergies \$320m.

### Problem 49 (Intermediate): Debt-financed acquisition accretion

**Question.** Using the data of Problem 47, the acquirer instead pays \$52 per target share in cash, financed entirely by new 6% debt (tax 25%). Compute the debt raised, after-tax interest, pro forma EPS and the break-even interest rate. Compare with the stock deal of Problem 47.

**Solution.**

1. Debt = 50,000,000 × \$52 = \$2,600m.
2. After-tax interest = 2,600 × 6% × 0.75 = \$117.0m.
3. Pro forma net income = 520 − 117.0 = \$403.0m; shares unchanged at 100m; EPS = \$4.030 versus \$4.00 (0.75%).
4. Break-even interest: 120 = 2,600 × r × 0.75, r = 6.154% (the target's earnings yield at the offer, 4.615%, divided by 1 − t).

**Answer.** EPS \$4.030 (+0.75%); break-even rate 6.154%.

### Problem 50 (Challenging): Merger arbitrage and implied deal probability

**Question.** A target trades at \$40 before a \$52 cash bid. After the announcement it trades at \$49.50. If the deal fails the stock is expected to fall back to \$41. Completion, if it happens, is in six months. Compute the gross spread, annualized return if the deal closes, the implied probability of success ignoring time value, and the implied probability when discounting at 5% per year (continuous).

**Solution.**

1. Gross spread = 52 − 49.50 = \$2.50, or 5.05%.
2. Annualized return if closed = (1 + 5.05%)^2 − 1 = 10.36%.
3. Implied probability (no discounting): 49.50 = p × 52 + (1 − p) × 41 gives p = (49.50 − 41) / (52 − 41) = 77.3%.
4. With discounting (factor 0.97531 for six months): 49.50 = [p × 52 + (1 − p) × 41] × 0.97531, so p = (50.7531 − 41) / 11 = 88.7%.
5. Downside if the deal fails = 49.50 − 41 = \$8.50 versus upside \$2.50: arbitrageurs bear a 3.4-to-1 downside-to-upside ratio, hence the high annualized spread is compensation for the risk of a break.

**Answer.** Spread 5.05%; annualized 10.36%; implied p = 77.3% (undiscounted), 88.7% (discounted).

## Part K: Leveraged Buyouts and Private Equity (Volume 1, Chapter 23)

**Key tools.** Sources equal uses. Sponsor equity = total uses − debt. MOIC = exit equity / entry equity; IRR = MOIC^(1/n) − 1 for a single entry and exit.

### Problem 51 (Basic): Sources and uses

**Question.** A sponsor buys a company with EBITDA of \$125 million at 8.0x. Fees are 2% of the purchase price. Debt is 4.5x EBITDA. Compute total uses, debt, sponsor equity and the equity percentage.

**Solution.**

1. Purchase EV = 125 × 8.0 = \$1,000.0m.
2. Fees = 2% × 1,000 = \$20.0m; total uses = \$1,020.0m.
3. Debt = 4.5 × 125 = \$562.5m.
4. Sponsor equity = 1,020.0 − 562.5 = \$457.5m = 44.9% of capitalization.
5. Leverage check: debt/EV = 56.2%; net debt/EBITDA = 4.5x.

**Answer.** Uses \$1,020.0m; debt \$562.5m; equity \$457.5m (44.9%).

### Problem 52 (Basic): MOIC and IRR

**Question.** The sponsor equity from Problem 51 is \$457.5 million. After five years the equity is sold for \$900 million. Compute MOIC and IRR, and the exit value needed for a 20% IRR.

**Solution.**

1. MOIC = 900 / 457.5 = 1.967x.
2. IRR = 1.967^(1/5) − 1 = 14.49%.
3. For a 20% IRR: required exit equity = 457.5 × 1.2^5 = \$1,138.4m (MOIC 2.488x).
4. Shortfall relative to 20% target = \$238.4m.

**Answer.** MOIC 1.967x; IRR 14.49%; 20% IRR needs \$1,138.4m.

### Problem 53 (Intermediate): Five-year LBO model

**Question.** Continue with the deal of Problem 51 (opening debt \$562.5m, equity \$457.5m). EBITDA grows 8% per year. Each year: pre-interest, pre-tax free cash flow is 55% of EBITDA; depreciation is 15% of EBITDA (for tax); interest is 9% of opening debt; tax is 25% of (EBITDA less depreciation less interest); all remaining cash repays debt. Exit at 8.0x EBITDA in year 5. Compute the debt schedule, exit equity, MOIC and IRR.

**Solution.**

1. Annual calculation (cash for paydown = 0.55 × EBITDA − interest − tax):

   | Year | EBITDA | Interest | Tax | Cash for debt paydown | Closing debt |
   |---:|---:|---:|---:|---:|---:|
   | 1 | 135.0 | 50.6 | 16.0 | 7.6 | 554.9 |
   | 2 | 145.8 | 49.9 | 18.5 | 11.8 | 543.2 |
   | 3 | 157.5 | 48.9 | 21.2 | 16.5 | 526.7 |
   | 4 | 170.1 | 47.4 | 24.3 | 21.8 | 504.8 |
   | 5 | 183.7 | 45.4 | 27.7 | 27.9 | 476.9 |

2. Year-5 EBITDA = 125 × 1.08^5 = \$183.67m; exit EV = 8.0 × 183.67 = \$1,469.3m.
3. Exit equity = EV − closing debt = 1,469.3 − 476.9 = \$992.4m.
4. MOIC = 992.4 / 457.5 = 2.169x; IRR = 16.75%.
5. Leverage at exit = 476.9 / 183.7 = 2.60x versus 4.50x at entry.

**Answer.** Exit equity \$992.4m; MOIC 2.17x; IRR 16.8%.

### Problem 54 (Intermediate): Value creation bridge

**Question.** For Problem 53, decompose the equity value creation into EBITDA growth, multiple expansion and debt paydown. Then repeat for an exit multiple of 9.0x. Entry fees reduce sponsor value.

**Solution.**

1. At 8.0x exit: EBITDA growth = (EBITDA5 − 125) × 8.0 = (183.67 − 125) × 8 = \$469.3m.
2. Multiple change = 0 at 8.0x. Debt paydown = 562.5 − 476.9 = \$85.6m. Entry fees = −\$20.0m.
3. Sum = 469.3 + 85.6 − 20.0 = \$534.9m, which equals exit equity 992.4 − entry equity 457.5 = \$534.9m.
4. At 9.0x: multiple expansion = (9.0 − 8.0) × 183.67 = \$183.7m; total value creation = \$718.6m; exit equity = \$1,176.1m.
5. MOIC at 9.0x = 2.571x; IRR = 20.78%. The bridge shows that deleveraging is 15% of operating plus financial value creation at 8.0x.

**Answer.** 8.0x exit: growth \$469m, paydown \$86m, fees -\$20m; at 9.0x add \$184m from multiple expansion.

### Problem 55 (Challenging): Private equity fund waterfall

**Question.** A \$500 million fund charges a 2% annual management fee on commitments for ten years (funded from LP contributions, so total LP contributions equal \$500m of which \$200m is fees and \$300m is invested), with carried interest of 20% over an 8% compounded hurdle with 100% GP catch-up. Gross distributions are \$900m at the end of year 5 for all capital (treat all contributions as made at time 0 for simplicity). Compute the distribution to LPs and GP, LP net MOIC and IRR. Then repeat with gross distributions of \$700m.

**Solution.**

1. Fee drag: fees = 2% × 500 × 10 = \$100m, so invested capital = \$400m (a 20% drag on commitments).
2. Tier 1, return of contributed capital: \$500m to LPs. Tier 2, preferred return = 500 × (1.08^5 − 1) = \$234.66m to LPs.
3. Tier 3, catch-up: GP receives 100% until it holds 20% of profits: pref × 0.20 / 0.80 = \$58.67m.
4. Tier 4, residual = 900 − 793.33 = \$106.67m split 80/20: LP \$85.34m, GP \$21.33m.
5. Total GP carry = \$80.00m = 20.0% of total profit of \$400m. LP receives \$820.00m: MOIC 1.640x, IRR = 10.40%.
6. With \$700m: profit = \$200m, below the hurdle amount of 234.66m, so GP carry = \$0.00m and LPs receive \$700m (MOIC 1.40x, IRR 6.96%).
7. Gross MOIC on invested capital = 900 / 400 = 2.25x versus LP net MOIC 1.64x: fees and carry take 0.61 turns.

**Answer.** GP carry \$80.0m; LP net \$820.0m, MOIC 1.64x, IRR 10.40%; at \$700m no carry.

## Part L: Sustainability, Governance and Fintech (Volume 1, Chapter 24)

**Key tools.** Greenium = conventional yield − green yield. Internal carbon price converts tonnes of CO2 to dollars in the cash flows. Cumulative voting: shares needed to elect n of N directors = S × n / (N + 1) + 1.

### Problem 56 (Basic): Green bond economics

**Question.** A firm issues \$500 million of 7-year green bonds at 4.85% versus 5.00% for a conventional bond of the same risk. Third-party verification costs \$0.6m upfront and annual impact reporting costs \$0.15m. Compute the annual interest saving (greenium), its present value at 4.85%, the PV of the added costs and the net benefit.

**Solution.**

1. Greenium = 5.00% − 4.85% = 15 basis points. Annual saving = \$500m × 0.0015 = \$0.750m.
2. PV of savings = 0.750 × annuity(4.85%, 7) = \$4.363m.
3. PV of costs = 0.60 + 0.15 × 5.8180 = \$1.473m.
4. Net benefit = 4.363 − 1.473 = \$2.891m (pre-tax).

**Answer.** Saving \$0.750m per year; net PV benefit \$2.89m.

### Problem 57 (Basic): Carbon price exposure

**Question.** A firm emits 2.0 million tonnes of CO2 a year. A carbon price of \$60 per tonne is introduced, and the firm can pass through 40% of the cost to customers. Tax is 25% and there are 100 million shares. Compute gross cost, net cost after pass-through, after-tax cost and EPS impact.

**Solution.**

1. Gross cost = 2,000,000 × 60 = \$120m.
2. Pass-through = 40% × 120 = \$48m; net pre-tax cost = \$72m.
3. After-tax cost = 72 × 0.75 = \$54m.
4. EPS impact = 54 / 100 = \$0.54 per share.
5. Every \$10 of carbon price changes EPS by \$0.09.

**Answer.** Net after-tax cost \$54m; EPS reduced by \$0.54.

### Problem 58 (Intermediate): Internal carbon price in capital budgeting

**Question.** A project costs \$200m and generates \$45m a year for 8 years; WACC is 9%. It emits 0.3 million tonnes of CO2 a year. The firm applies an internal shadow carbon price of \$50 per tonne in year 1 rising 5% a year; the cost is tax-deductible at 25%. Compute NPV with and without carbon pricing, the PV of carbon costs and the break-even initial carbon price.

**Solution.**

1. PV of cash flows = 45 × annuity(9%, 8) = \$249.07m; NPV without carbon = \$49.07m.
2. Year-1 carbon cost = 0.3 × 50 = \$15.0m pre-tax (\$11.25m after tax), growing 5% a year; PV of after-tax carbon costs = \$72.71m.
3. NPV with carbon = 49.07 − 72.71 = -\$23.64m.
4. Break-even initial price: NPV falls to zero when the price multiplier is 0.675 times \$50, i.e. \$33.74 per tonne.

**Answer.** NPV \$49.07m without carbon, −\$23.64m with; break-even carbon price \$33.74 per tonne.

### Problem 59 (Intermediate): Cumulative voting and dual-class control

**Question.** (a) A company has 1,000 shares outstanding and a nine-member board elected at once. Under cumulative voting, how many shares are needed to elect 1, 2 and 3 directors? What can a 30% holder guarantee? What is the requirement under straight voting? (b) A dual-class firm has 90 million Class A shares (1 vote) and 10 million Class B (10 votes). A founder holds all Class B and 5 million Class A shares. Compute her economic ownership and voting power.

**Solution.**

1. (a) Shares needed = S × n / (N + 1) + 1 with N = 9, S = 1,000:

   | Directors to elect | Shares needed | Percent of shares |
   |---:|---:|---:|
   | 1 | 101 | 10.1% |
   | 2 | 201 | 20.1% |
   | 3 | 301 | 30.1% |

2. A 30% holder (300 shares) can guarantee two seats (needs 201) but not three (needs 301). Under straight voting, a holder needs a majority (501 shares) to control every seat, and a 30% holder elects none; cumulative voting thus gives minorities representation.
3. (b) Total votes = 90 × 1 + 10 × 10 = 190 million. Founder's votes = 5 + 100 = 105 million = 55.3% of votes.
4. Economic ownership = (5 + 10) / 100 = 15%. The wedge between voting power (55.3%) and cash-flow rights (15%) is the agency cost associated with dual-class structures, which sunset provisions try to limit.

**Answer.** (a) 101, 201 and 301 shares for 1, 2 and 3 seats; a 30% holder guarantees 2; (b) economic 15%, voting 55.3%.

### Problem 60 (Challenging): Digital lender unit economics

**Question.** A marketplace lender spends \$9 million to acquire 15,000 borrowers. The average loan is \$12,000; the platform earns a 3.0% origination fee and a 0.8% annual servicing fee on an average outstanding balance of 55% of the loan over a 3-year life. Variable cost per borrower is \$60. 40% of borrowers take a second loan after three years, and each later cohort repeats the same behavior (discount rate 12%). Compute CAC, first-loan contribution, LTV with repeat business, LTV/CAC, and the repeat rate needed for LTV/CAC = 1.

**Solution.**

1. CAC = 9,000,000 / 15,000 = \$600.
2. Origination fee = 12,000 × 3% = \$360; servicing = 12,000 × 0.8% × 0.55 × 3 = \$158.40; revenue = \$518.40; contribution = \$458.40 after \$60 variable cost.
3. First-loan LTV/CAC = 458.40 / 600 = 0.76x: the platform loses money on a one-off borrower.
4. Repeat factor per cycle = 0.40 / 1.12^3 = 0.2847; LTV = 458.40 / (1 − 0.2847) = \$640.86; LTV/CAC = 1.07x.
5. Break-even (LTV = CAC): required discounted repeat factor x = 1 − 458.40 / 600 = 0.2360, so repeat probability = 0.2360 × 1.12^3 = 33.2%.

**Answer.** CAC \$600; LTV \$641; LTV/CAC 1.07x; break-even repeat rate 33.2%.
