# Chapter 24: Instructor Manual and Examination Bank

*This chapter is for instructors. It describes how to design a one-semester course around Volume 1, Chapters 13 to 24, the cases and problem sets of this volume, and how to assess students fairly. All companies and figures are fictional and illustrative. Every numeric answer in the exams and question bank was recomputed in Python; the model answers show rounded values.*

## Purpose and Use

Volume 3 supplies the practice material that Volumes 1 and 2 deliberately omit. This chapter turns that material into a coherent course and supplies a ready-to-run assessment package: two midterm examinations, two final examinations (each with a 100-point marking scheme and full model answers) and a 60-question multiple-choice bank. Instructors may use Midterm 1 and Midterm 2 together with Final A, keeping Final B as the make-up or the following year's form, or may mix questions across forms. All four exams have been balanced so that each is worth exactly 100 points.

## Course Design

### Learning outcomes

By the end of the course a student should be able to:

1. Price and structure equity and debt issues, and explain issuance costs, underpricing and signaling.
2. Choose and defend a capital structure using Modigliani-Miller, trade-off, pecking-order and adjusted-present-value reasoning.
3. Evaluate dividend and repurchase decisions, and manage working capital and short-term funding.
4. Value options (binomial and Black-Scholes), and use forwards, futures, swaps and options to hedge interest-rate, currency and commodity risk.
5. Build and critique an enterprise valuation (DCF and multiples), including the role of growth and ROIC.
6. Analyze mergers, leveraged buyouts and private-equity fund economics, and the implications of governance, sustainability and fintech business models.
7. Communicate a decision in a board-style memo that states assumptions, alternatives and risks.

### Fourteen-week schedule

| Week | Topic | Reading | Cases, problems and assessment |
|---:|:---|:---|:---|
| 1 | Equity financing: rights, IPOs, SEOs | Vol 1 Ch 13 | Chapter 7 (family IPO case); Problems 1-5 |
| 2 | Debt financing and bond markets | Vol 1 Ch 14 | Problems 6-10 |
| 3 | Capital structure theory and practice | Vol 1 Ch 15 | Chapter 15 (distressed manufacturer); Problems 11-15 |
| 4 | Payout policy | Vol 1 Ch 16 | Chapter 9 (payout decision); Problems 16-20 |
| 5 | Working capital and short-term finance | Vol 1 Ch 17 | Problems 21-25; Midterm 1 review |
| 6 | Options and option valuation | Vol 1 Ch 18 | Problems 26-30; **Midterm 1** (Weeks 1-3 content) |
| 7 | Derivatives: forwards, futures, swaps | Vol 1 Ch 19 | Problems 31-35 |
| 8 | Risk management and foreign exchange | Vol 1 Ch 20 | Problems 36-40; **Midterm 2** (Weeks 4-6 content) |
| 9 | Enterprise valuation | Vol 1 Ch 21 | Problems 41-45; Case memo 1 due |
| 10 | Mergers and acquisitions | Vol 1 Ch 22 | Chapter 13 (hostile bid case); Problems 46-50 |
| 11 | Leveraged buyouts, private equity and restructuring | Vol 1 Ch 23 | Chapter 11 (Series B term sheet); Problems 51-55 |
| 12 | Sustainability, governance and fintech | Vol 1 Ch 24 | Problems 56-60; Case memo 2 due |
| 13 | Integration: cross-chapter cases | Vol 1 Ch 13-24 | Mock final (Final Examination A, untimed) |
| 14 | Review and final examination | All | **Final Examination** (Final B as the make-up form) |

Each weekly session of about three hours works well as: 30 minutes on the concept and a quick quiz drawn from the question bank, 90 minutes on the case or problems, and 45 minutes of debrief. Problems 1 to 60 of Chapter 23 are assigned as the weekly problem sets; the five problems per topic provide a graded ladder, and the answers are available to students afterward so that class time is spent on judgment rather than arithmetic.

### Assessment weights

| Component | Weight (%) |
|:---|---:|
| Class participation and case discussion | 10 |
| Two case memos (10 each) | 20 |
| Midterm Examination 1 | 15 |
| Midterm Examination 2 | 15 |
| Final Examination | 40 |
| **Total** | **100** |

### Exam coverage

| Exam | Topics covered | Weight on computation | Weight on interpretation |
|:---|:---|---:|---:|
| Midterm 1 | Rights offerings, IPO costs, bonds and duration, MM, EBIT-EPS | 75% | 25% |
| Midterm 2 | Buybacks and dividends, working capital, Black-Scholes, executive options | 80% | 20% |
| Final A | FX and swap hedging, DCF, merger accretion, LBO | 85% | 15% |
| Final B | IPO and capital structure, futures hedging and VaR, value drivers and multiples, PE waterfall and carbon NPV | 80% | 20% |

## Teaching Approach

**Cases.** Use the case chapters of this volume in a cold-call format: one student frames the decision, another presents the numbers, a third challenges the assumptions. Reserve the final 20 minutes for the alternative defensible answers listed in each Teaching Note, so students learn that finance questions frequently have more than one acceptable recommendation if it is supported.

**Problems.** Students attempt each problem before reading the solution. Common errors, such as dividing by the wrong base for underpricing, forgetting the tax shield or mixing continuous and discrete compounding, should be collected and revisited in class.

**Modeling.** The modeling chapters are best taught with laptops open. Require students to submit their spreadsheets with a short assumptions page; grade for transparency and checks (balance, sources equal uses) as well as for the final number.

**Calibration.** Before the first exam, run a 20-minute practice test of 10 questions from the bank, so students learn the difficulty and format. Results guide the review sessions.

## Grading Rubrics

### Case memo rubric (100 points, scaled to 10% of the grade)

| Criterion | Points | Excellent (90-100%) | Adequate (60-75%) | Weak (below 50%) |
|:---|---:|:---|:---|:---|
| Problem definition and decision framing | 15 | States the decision, deadline and constraints precisely | Decision stated but constraints incomplete | Restates the case facts only |
| Quantitative analysis (correct, complete, assumptions stated) | 30 | All numbers reproduce; sensitivities included | Method correct with arithmetic slips | Missing or unexplained calculations |
| Use of theory and evidence from Volume 1 | 15 | Frameworks selected and applied critically | Frameworks named but applied mechanically | Theory absent or misapplied |
| Judgment, risks and alternatives | 20 | Weighs two or more alternatives and quantifies downside | Mentions risks without quantification | One-sided argument |
| Recommendation clarity and board-ready writing | 20 | Clear recommendation, next steps and a one-page memo | Recommendation present but hedged | No clear recommendation |

### Class participation

Score each session 0 to 3: 0 absent or silent; 1 present, answers when asked; 2 contributes a correct analytical point; 3 advances the discussion by challenging an assumption or connecting two ideas. Average the scores and scale to 10 points. Quality matters more than frequency; do not reward repetition of the case facts.

### Exam marking conventions

1. **Method before arithmetic.** In a numeric part, award about 60% of the points for correct method and set-up, 20% for arithmetic accuracy and 20% for units, labeling and interpretation.
2. **Error carried forward.** If a wrong answer from an earlier part is used correctly in a later part, award full method points for the later part. Do not penalize the same mistake twice.
3. **Rounding.** Accept answers within 1% of the model answer, or within the stated rounding rule, unless the question demands an exact value. Interpolated or iterative answers (yield, IRR) are accepted within 0.1 percentage point.
4. **Explanations.** Two-point explanatory items are awarded for a correct statement plus a reason; one point if only the statement is given.
5. **Alternative methods.** Any valid method earns full credit; for example, a replicating portfolio is as good as risk-neutral valuation.
6. **Moderation.** Two markers should independently grade five scripts per question and reconcile before grading the rest; investigate any question with a mean below 45% of the points as a possible setting or teaching problem.

### Target distribution

| Grade band | Typical share of students | Description |
|:---|---:|:---|
| A (85+) | 15-20% | Correct, complete, with insight beyond the formulas |
| B (70-84) | 40-45% | Sound method; occasional numerical or interpretive gaps |
| C (55-69) | 25-30% | Correct tools, inconsistent execution |
| Below 55 | 10% or less | Fundamental gaps; offer remediation |

### Academic integrity and accommodation

Use different forms (A and B) in alternating rows, or change the input numbers using the model answers as a guide. Closed-book exams with a calculator are recommended; provide the formula list in the questions rather than allowing sheets of notes if exams are time pressed. Provide extra time and alternative formats according to institutional policy, and keep the make-up form (Final B) in reserve.

## Examination Bank

The four exams follow. Each question shows part marks in square brackets; the marking scheme tables list the model answer and how to award the points. All amounts are in US dollars.

### Midterm Examination 1 (Volume 1, Chapters 13 to 15)

Time allowed: 90 minutes. Closed book; a financial calculator is permitted. Show all steps; partial credit is awarded for correct method. Round money to the nearest cent and rates to two decimals of a percent unless told otherwise.

**Question 1: Raising equity (25 points)**

Aldwych Packaging (illustrative) has 40 million shares at \$25 and needs \$120 million.

- (a) It sells shares through a rights offering at \$20. How many shares are issued and in what ratio? [5]
- (b) Compute the theoretical ex-rights price. [6]
- (c) Compute the value of a right per old share. A holder has 2,000 shares: show that wealth is the same whether she exercises or sells her rights. [7]
- (d) Alternatively, an underwriter sells shares to the public at \$22 with a 5% gross spread. How many shares must be sold to net \$120 million, and what is the dollar fee? [7]

**Question 2: Debt (25 points)**

A bond has an \$1,000 face value, an 8-year life and a 5% annual coupon.

- (a) Compute the price at a 6% yield. [5]
- (b) Compute Macaulay and modified duration. [8]
- (c) Estimate the price change for a +50 bp yield change using duration and compare with the exact change. [6]
- (d) Describe how to find the yield if the price is \$950, and state the yield. [6]

**Question 3: Capital structure (25 points)**

Brenton Foods (illustrative) has perpetual EBIT of \$90 million, tax rate 25%, unlevered cost of capital 9%. It borrows \$300 million of permanent debt at 5%.

- (a) Compute the unlevered value. [4]
- (b) Compute the levered value using MM with taxes. [4]
- (c) Compute the cost of equity. [6]
- (d) Compute WACC and verify it reproduces the levered value. [6]
- (e) Explain two reasons why the MM tax result overstates the benefit of debt. [5]

**Question 4: Financing choice (25 points)**

Tanner Instruments (illustrative) has 40 million shares at \$30 and needs \$150 million. Plan A issues equity; Plan B issues 7% debt. Tax rate 30%.

- (a) How many shares does Plan A issue and what is the annual interest under Plan B? [4]
- (b) Find the EBIT at which EPS is the same under both plans. [7]
- (c) Compare EPS at EBIT = \$120 million and compute the degree of financial leverage under Plan B. [6]
- (d) Discuss, with reference to pecking order and signaling, why managers may prefer debt to equity even above the break-even EBIT, and one reason the analysis is incomplete. [8]

#### Marking Scheme and Model Answers: Midterm Examination 1 (Volume 1, Chapters 13 to 15)

**Question 1 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 5 | New shares = 120m / 20 = 6.0m; ratio = 6/40 = 3 new for 20 held. | 2 pts shares, 2 pts ratio, 1 pt units |
| (b) | 6 | (40 × 25 + 120) / 46 = \$24.348. | 3 pts market value after, 2 pts share count, 1 pt answer |
| (c) | 7 | Right = 25 − 24.348 = \$0.652. Exercise: buy 300 shares for \$6,000; wealth = 2,300 × 24.348 − 6,000 = \$50,000. Sell: 2,000 × 24.348 + 2,000 × 0.652 = \$50,000. Both equal 2,000 × 25 = \$50,000. | 2 pts right value, 2 pts each wealth calculation, 1 pt conclusion |
| (d) | 7 | Gross = 120 / 0.95 = \$126.32m; shares = 5.742m; fee = \$6.32m. | 3 pts gross-up, 2 pts shares, 2 pts fee; deduct 2 if 120 × 5% used as fee |

**Question 2 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 5 | 50 × annuity(6%, 8) + 1,000 / 1.06^8 = 310.49 + 627.41 = \$937.90. | 3 pts annuity, 2 pts face |
| (b) | 8 | Macaulay = Σ t × PV(CF) / price = 6.740 years; modified = 6.740 / 1.06 = 6.359. | 5 pts for PV-weighted timing, 3 pts for modified |
| (c) | 6 | Approx change = −6.359 × 0.005 × 937.90 = -\$29.82. Exact price at 6.5% = \$908.67, change -\$29.23. The difference (0.59) is convexity. | 2 pts approximation, 2 pts exact, 2 pts interpretation |
| (d) | 6 | Solve 950 = 50 × annuity(y, 8) + 1,000 / (1+y)^8 by trial or financial calculator: y = 5.80%. | 3 pts setup, 3 pts value (accept 5.7% to 5.9%) |

**Question 3 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 4 | V_U = 90 × 0.75 / 0.09 = \$750m. | 2 pts NOPAT, 2 pts capitalization |
| (b) | 4 | V_L = 750 + 0.25 × 300 = \$825m; equity = \$525m. | 3 pts, 1 pt equity |
| (c) | 6 | rE = 9% + (9% − 5%) × (300/525) × 0.75 = 10.714%. | 3 pts formula, 3 pts numbers |
| (d) | 6 | WACC = (525/825) × 10.714% + (300/825) × 5% × 0.75 = 8.182%. Check: 67.5 / 8.182% = \$825.0m. | 3 pts WACC, 3 pts check |
| (e) | 5 | Any two: financial distress costs, personal taxes reducing the debt advantage, agency costs of debt, loss of tax shield if EBIT falls below interest, limited debt capacity. | 2.5 pts per reason with explanation |

**Question 4 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 4 | Shares = 150/30 = 5m (45m total); interest = 150 × 7% = \$10.5m. | 2 pts each |
| (b) | 7 | 0.7E/45 = 0.7(E − 10.5)/40 gives 40E = 45E − 472.5, E = \$94.5m. | 3 pts setup, 3 pts algebra, 1 pt answer |
| (c) | 6 | EPS(A) = \$1.867; EPS(B) = \$1.916; DFL = 120 / (120 − 10.5) = 1.096. | 2 pts each EPS, 2 pts DFL |
| (d) | 8 | Pecking order: internal funds first, then debt, then equity because of information asymmetry. Equity issuance signals overvaluation and lowers the price; debt does not. Incomplete because EPS ignores risk, the effect on P/E and cost of equity, and distress costs. | 3 pts pecking order, 3 pts signaling, 2 pts limitation |

*Total: 100 points.*

### Midterm Examination 2 (Volume 1, Chapters 16 to 18)

Time allowed: 90 minutes. Closed book; a financial calculator is permitted. Show all steps. Where a question says to ignore taxes, do so.

**Question 1: Payout policy (25 points)**

Corvus Devices (illustrative) has 120 million shares at \$45, net income of \$360 million and \$180 million of excess cash.

- (a) If it repurchases shares at \$45, compute shares retired and EPS before and after (ignore lost interest). [6]
- (b) If it pays the cash as a dividend instead, compute the dividend per share and the ex-dividend price. Why is pre-tax wealth the same? [6]
- (c) An investor holds 1,000 shares with a basis of \$30; dividends are taxed at 25% and gains at 15%. Compare after-tax wealth under the two payouts (the investor tenders proportionately). [8]
- (d) Next year EPS will be \$3.30, ROE is 14%, payout is 50% and the cost of equity is 11%. Value the share by the Gordon model. [5]

**Question 2: Working capital (25 points)**

Hallam Supplies (illustrative): sales \$900m, COGS \$630m, inventory \$90m, receivables \$100m, payables \$63m (365-day year).

- (a) Compute DIO, DSO, DPO and the cash conversion cycle. [7]
- (b) A supplier offers 3/15 net 45. Compute the annualized simple cost of forgoing the discount. [5]
- (c) Cutting DSO by 6 days releases how much cash, and what is it worth per year at an 8% cost of funds? [5]
- (d) Annual demand is 18,000 units, order cost \$200, holding cost \$9 per unit per year. Compute the EOQ and the total annual ordering plus holding cost. [8]

**Question 3: Option valuation (25 points)**

A stock trades at \$60. A European call has strike \$62 and expires in 0.75 years; r = 5% (continuous) and volatility is 28%. No dividends.

- (a) Compute d1 and d2. [5]
- (b) Compute the call price. [6]
- (c) Compute the put price using put-call parity. [5]
- (d) A dealer sells 10,000 calls. How many shares does she hold to be delta-neutral? [5]
- (e) If the stock rises to \$61, estimate the call price using delta and compare with the exact value. [4]

**Question 4: Executive options (25 points)**

Meridian Labs (illustrative) grants 1 million at-the-money options (strike \$40, stock \$40) with a 5-year life; volatility 30%, r = 4% (continuous), dividend yield 1%. Options vest straight-line over 4 years. Tax rate 25%; 100 million shares.

- (a) Value one option using Black-Scholes with a dividend yield. [8]
- (b) Compute the grant-date value and the annual expense. [5]
- (c) Compute the after-tax expense and EPS impact per year. [6]
- (d) At an average price of \$55 and strike \$40, compute dilutive shares by the treasury stock method. [6]

#### Marking Scheme and Model Answers: Midterm Examination 2 (Volume 1, Chapters 16 to 18)

**Question 1 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 6 | Shares retired = 180m / 45 = 4.0m; EPS = 360/120 = \$3.00 before, 360/116 = \$3.1034 after. | 2 pts shares, 2 pts each EPS |
| (b) | 6 | DPS = 180/120 = \$1.50; ex-dividend price = \$43.50. In a frictionless market a dollar of dividend equals a dollar less in price, and the buyback leaves value per share unchanged at \$45, so each holder receives \$1.50 in value either way. | 2 pts DPS, 2 pts price, 2 pts argument |
| (c) | 8 | Dividend: cash 1,500 × 0.75 = 1,125 plus shares 1,000 × 43.50 = 43,500; wealth \$44,625. Buyback: tender 33.33 shares for \$1,500; gain = 33.33 × 15 = \$500; tax \$75; wealth = 1,500 − 75 + 966.67 × 45 = \$44,925. Buyback higher by \$300. | 3 pts each wealth, 2 pts comparison |
| (d) | 5 | g = 0.14 × 0.5 = 7%; D1 = 3.30 × 0.5 = \$1.65; P = 1.65 / (0.11 − 0.07) = \$41.25. | 2 pts g, 1 pt D1, 2 pts price |

**Question 2 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 7 | DIO = 52.1; DSO = 40.6; DPO = 36.5; CCC = 56.2 days. | 1.5 pts each ratio, 2.5 pts CCC |
| (b) | 5 | 0.03/0.97 × 365/30 = 37.63%. | 2 pts periodic cost, 3 pts annualization |
| (c) | 5 | 900 × 6/365 = \$14.79m; × 8% = \$1.18m per year. | 3 pts, 2 pts |
| (d) | 8 | EOQ = √(2 × 18,000 × 200 / 9) = 894.4 units; total cost = 4,025 + 4,025 = \$8,050. | 4 pts EOQ, 4 pts cost |

**Question 3 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 5 | d1 = [ln(60/62) + (0.05 + 0.0392) × 0.75] / (0.28 × √0.75) = 0.1407; d2 = -0.1018. | 3 pts d1, 2 pts d2 |
| (b) | 6 | N(d1) = 0.5559; N(d2) = 0.4595; C = 60 × N(d1) − 62 e^(−0.0375) N(d2) = \$5.919. | 2 pts normal values, 4 pts price |
| (c) | 5 | P = C − S + K e^(−rT) = 5.919 − 60 + 59.718 = \$5.637. | 3 pts method, 2 pts value |
| (d) | 5 | Delta = N(d1) = 0.5559; hold 5,559 shares. | 3 pts delta, 2 pts shares |
| (e) | 4 | Delta estimate: 5.919 + 0.5559 × 1 = 6.474; exact = 6.488. Difference 0.013 due to gamma. | 2 pts each |

**Question 4 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 8 | C = S e^(−qT) N(d1) − K e^(−rT) N(d2) with d1 = [ln(1) + (0.04 − 0.01 + 0.045) × 5] / (0.30 × √5) gives \$12.171 per option. | 4 pts d1, 2 pts d2, 2 pts price |
| (b) | 5 | Value = 1,000,000 × 12.171 = \$12.171m; expense = \$3.043m per year for 4 years. | 3 pts total, 2 pts annual |
| (c) | 6 | After-tax = 3.043 × 0.75 = \$2.282m; EPS impact = \$0.0228. | 3 pts tax, 3 pts EPS |
| (d) | 6 | Shares issued = 1m; shares bought back = 40m / 55 = 0.727m; dilutive shares = 0.273m. | 3 pts proceeds, 3 pts net |

*Total: 100 points.*

### Final Examination A (Volume 1, Chapters 13 to 24)

Time allowed: 180 minutes. Closed book; a financial calculator is permitted. Answer all four questions. Each question is worth 25 points. Show all steps; partial credit is awarded for correct method.

**Question 1: Foreign-exchange and interest-rate hedging (25 points)**

A US importer owes EUR 4 million in nine months (0.75 year). Spot is \$1.10 per euro; nine-month simple interest rates are 4.5% (USD) and 2.5% (EUR) per year.

- (a) Compute the covered-parity forward rate. [4]
- (b) Describe and cost a money-market hedge; compare with the forward. [6]
- (c) The firm can instead buy a euro call with strike \$1.12 for a premium of \$0.015 per euro (financed at the USD rate). Compute the total dollar cost at spot rates of 1.05, 1.12 and 1.20. [7]
- (d) The firm also pays SOFR + 2.00% on a \$60 million loan and enters a swap to receive SOFR and pay 4.40% fixed. Compute the effective rate and the swap receipt when SOFR is 5.50%. [5]
- (e) State two conditions under which the firm should leave the exposure unhedged. [3]

**Question 2: Enterprise valuation (25 points)**

Dunmore Systems (illustrative) forecasts FCFF of 80, 88, 96, 103 and 109 (\$m) in years 1 to 5. WACC is 9.5%, terminal growth 3%, net debt \$420m and 60 million shares.

- (a) Compute the PV of the explicit cash flows. [6]
- (b) Compute the terminal value, its PV, and enterprise value. [6]
- (c) Compute the equity value, value per share and the share of EV from the terminal value. [5]
- (d) Compute value per share for WACC of 8.5%, 9.5%, 10.5% and growth of 2%, 3%, 4% and comment. [8]

**Question 3: Mergers and acquisitions (25 points)**

Acquirer: 80 million shares at \$50, EPS \$3.50. Target: 30 million shares at \$30, EPS \$2.00. The acquirer offers all stock at a 35% premium. Tax rate is 25%.

- (a) Compute the offer price, exchange ratio and new shares issued. [5]
- (b) Compute pro forma EPS and dilution (no synergies). [7]
- (c) Compute the after-tax and pre-tax synergies needed for EPS break-even. [6]
- (d) If the PV of synergies is \$400m, compute the post-merger share price and the gains to each group of shareholders. [7]

**Question 4: Leveraged buyout (25 points)**

A sponsor buys a firm with EBITDA of \$80m at 9.0x. Fees are \$15m. Debt is 5.0x EBITDA at 8%. EBITDA grows 6% a year. Each year pre-interest, pre-tax cash flow is 52% of EBITDA; depreciation is 15% of EBITDA; tax is 25% of (EBITDA − depreciation − interest); all cash repays debt. Exit is after five years.

- (a) Prepare sources and uses and compute sponsor equity. [5]
- (b) Build the debt schedule for years 1 to 5. [10]
- (c) Compute exit equity, MOIC and IRR at a 9.0x exit multiple. [6]
- (d) Repeat at an 8.0x exit and comment on the sensitivity. [4]

#### Marking Scheme and Model Answers: Final Examination A (Volume 1, Chapters 13 to 24)

**Question 1 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 4 | F = 1.10 × (1 + 0.045 × 0.75) / (1 + 0.025 × 0.75) = \$1.1162. | 2 pts formula, 2 pts value |
| (b) | 6 | Buy EUR 4m / 1.01875 = EUR 3,926,380 now for \$4,319,018, borrow it at 4.5%; repay \$4,464,785 in nine months = \$1.1162 per euro, equal to the forward (\$4,464,785). | 3 pts steps, 2 pts cost, 1 pt comparison |
| (c) | 7 | Premium compounded = 0.015 × 1.03375 = \$0.0155. Cost per euro = min(spot, 1.12) + 0.0155: spot 1.05 gives \$1.0655 (total \$4,262,025); spot 1.12 gives \$1.1355 (\$4,542,025); spot 1.20 gives \$1.1355 (\$4,542,025). | 2 pts premium, 5 pts three outcomes |
| (d) | 5 | Effective = (SOFR + 2.00%) − (SOFR − 4.40%) = 6.40%. Receipt at SOFR 5.50% = (5.50% − 4.40%) × 60m = \$0.66m. | 3 pts, 2 pts |
| (e) | 3 | Any two: exposure naturally offset by receipts, immaterial size, the firm's cost of capital is low and cash flow volatility is not costly, or hedge cost exceeds expected benefit. | 1.5 pts each |

**Question 2 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 6 | PV = Σ FCFF_t / 1.095^t = \$360.46m. | 3 pts discounting method, 3 pts sum |
| (b) | 6 | TV = 109 × 1.03 / 0.065 = \$1,727.23m; PV = \$1,097.18m; EV = \$1,457.64m. | 3 pts TV, 1 pt PV, 2 pts EV |
| (c) | 5 | Equity = 1,457.64 − 420 = \$1,037.64m; per share \$17.29; terminal share = 75.3%. | 2 pts, 2 pts, 1 pt |
| (d) | 8 | Per-share values: WACC 8.5%: g 2% = \$18.13, g 3% = \$21.80, g 4% = \$27.10; WACC 9.5%: g 2% = \$14.70, g 3% = \$17.29, g 4% = \$20.83; WACC 10.5%: g 2% = \$12.08, g 3% = \$13.99, g 4% = \$16.49. Value is far more sensitive to WACC and g than to the explicit forecasts; the spread illustrates the risk in terminal value. | 6 pts for the nine values (two-thirds point for each correct), 2 pts for comment |

**Question 3 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 5 | Offer = 30 × 1.35 = \$40.50; ratio = 40.50/50 = 0.810; new shares = 24.30m. | 2 pts each for offer and ratio, 1 pt shares |
| (b) | 7 | NI = 280 + 60 = \$340m; shares = 104.30m; EPS = \$3.260; dilution = 6.86%. | 3 pts NI and shares, 2 pts EPS, 2 pts dilution |
| (c) | 6 | Required NI = 3.50 × 104.30 = \$365.05m; shortfall = \$25.05m after tax; pre-tax = 25.05 / 0.75 = \$33.40m. | 3 pts shortfall, 3 pts gross-up |
| (d) | 7 | Values: A \$4,000m, B \$900m, synergies \$400m; price = 5,300 / 104.30 = \$46.980. A holders gain (46.980 − 50) × 80 = -\$241.6m; B holders gain 46.980 × 24.30 − 900 = \$241.6m; total \$400m. A's holders lose despite \$400m of synergies because the 35% premium (about \$315m) plus B's pro rata share of synergies exceeds A's own share. | 3 pts price, 2 pts each gain |

**Question 4 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 5 | Uses = EV 720 + fees 15 = \$735m; debt = \$400m; equity = \$335m (45.6%). | 2 pts uses, 1 pt debt, 2 pts equity |
| (b) | 10 | Y1: EBITDA 84.8, interest 32.0, tax 10.0, paydown 2.1, debt 397.9; Y2: EBITDA 89.9, interest 31.8, tax 11.1, paydown 3.8, debt 394.2; Y3: EBITDA 95.3, interest 31.5, tax 12.4, paydown 5.6, debt 388.5; Y4: EBITDA 101.0, interest 31.1, tax 13.7, paydown 7.7, debt 380.8; Y5: EBITDA 107.1, interest 30.5, tax 15.1, paydown 10.1, debt 370.7. | 2 pts per year (EBITDA, interest, tax, paydown, closing debt) |
| (c) | 6 | Exit EV = 9.0 × 107.06 = \$963.5m; equity = \$592.8m; MOIC = 1.770x; IRR = 12.09%. | 2 pts EV, 1 pt equity, 1 pt MOIC, 2 pts IRR |
| (d) | 4 | At 8.0x equity = \$485.8m; MOIC 1.450x; IRR 7.72%. One turn of exit multiple changes IRR by 4.4% (percentage points): returns are very sensitive to exit multiple. | 2 pts numbers, 2 pts comment |

*Total: 100 points.*

### Final Examination B (Volume 1, Chapters 13 to 24)

Time allowed: 180 minutes. Closed book; a financial calculator is permitted. Answer all four questions. Each question is worth 25 points. Show all steps; partial credit is awarded for correct method.

**Question 1: Initial public offering and capital structure (25 points)**

Pendle Biosystems (illustrative) has 80 million shares, of which founders hold 56 million. It sells 20 million new shares at \$18 with a 7% gross spread. The stock closes day one at \$21.60. Tax rate is 25%.

- (a) Compute first-day underpricing and the money left on the table. [5]
- (b) Compute net proceeds to the company. [5]
- (c) Compute post-IPO ownership of the founders and the public float percentage. [5]
- (d) The company uses \$150 million of proceeds to repay permanent debt. Using MM with taxes, find the change in firm value from the lost tax shield, and explain why value may nonetheless rise. [7]
- (e) Name one purpose of a lock-up agreement. [3]

**Question 2: Hedging and risk measurement (25 points)**

A fund manages an \$80 million equity portfolio with beta 1.1. It wants beta 0.5 using index futures at 5,000 with a \$50 multiplier. Separately an airline has 6 million gallons of fuel exposure; futures contracts cover 42,000 gallons.

- (a) How many futures contracts must the fund trade to reach beta 0.5? [8]
- (b) The fuel spot-futures correlation is 0.85, σS = 35% and σF = 32%. Compute the minimum-variance hedge ratio and the number of contracts. [8]
- (c) The fund's daily portfolio volatility is 1.2%. Compute the 1-day 99% VaR (z = 2.3263) before and after the beta hedge, assuming risk is all market risk and scales with beta. [9]

**Question 3: Valuation cross-check (25 points)**

Garnet Industrial (illustrative) has next-year NOPAT of \$150m, WACC 8.5%, growth 3%, ROIC on new capital 12%, EBITDA \$260m, net debt \$600m, 70 million shares. Peer median EV/EBITDA is 8.5x.

- (a) Compute EV using the value-driver formula. [7]
- (b) Compute EV if ROIC equals WACC and explain the difference. [5]
- (c) Compute EV from the multiple and the implied EV/EBITDA of the DCF value. [8]
- (d) Blend the DCF and multiple equally and compute the value per share. [5]

**Question 4: Private equity economics and carbon-adjusted investment (25 points)**

(i) A \$400m fund has all capital contributed at time 0 and distributes \$760m after six years; hurdle 8% compounded, carry 20%, full GP catch-up. (ii) A project costs \$150m and yields \$30m a year for 8 years (WACC 9%), emitting 0.2m tonnes a year with a shadow carbon price of \$40 rising 4% a year (tax 25%).

- (a) Compute the preferred return, GP carry and LP net multiple and IRR. [13]
- (b) Compute the project NPV with and without carbon cost and comment. [12]

#### Marking Scheme and Model Answers: Final Examination B (Volume 1, Chapters 13 to 24)

**Question 1 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 5 | Underpricing = 21.60/18 − 1 = 20.0%; left on table = 3.60 × 20m = \$72m. | 2 pts, 3 pts |
| (b) | 5 | 20m × 18 × 0.93 = \$334.8m. | 3 pts method, 2 pts value |
| (c) | 5 | Total shares = 100m; founders = 56/100 = 56% (from 70%); public float = 20% of shares. | 2 pts, 2 pts, 1 pt |
| (d) | 7 | Lost shield = 0.25 × 150 = \$37.5m, so V falls by \$37.5m on that account. Offsetting benefits: lower expected distress costs and agency costs, and greater financial flexibility; the net effect is positive only if the distress cost saving exceeds \$37.5m. | 3 pts calculation, 2 pts sign, 2 pts offsetting effects |
| (e) | 3 | Lock-up prevents insiders selling shortly after the IPO, signaling confidence and preventing a price collapse from supply. | 3 pts |

**Question 2 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 8 | N = (0.5 − 1.1) × 80,000,000 / (5,000 × 50) = -192: sell 192 contracts. | 4 pts formula, 2 pts contract value, 2 pts sign |
| (b) | 8 | h* = 0.85 × 0.35 / 0.32 = 0.9297; contracts = 0.9297 × 6,000,000 / 42,000 = 132.8, about 133 (long). | 4 pts ratio, 4 pts contracts |
| (c) | 9 | Before: 2.3263 × 1.2% × 80m = \$2.233m. After: × 0.5/1.1 = \$1.015m. | 4 pts before, 5 pts after |

**Question 3 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 7 | EV = 150 × (1 − 0.03/0.12) / (0.085 − 0.03) = \$2,045.5m. | 3 pts reinvestment, 4 pts EV |
| (b) | 5 | EV = 150 × (1 − 0.03/0.085) / 0.055 = \$1,764.7m = 150/0.085. Growth creates no value when ROIC = WACC; the difference of \$280.7m is the value of growth at a 12% return. | 3 pts EV, 2 pts explanation |
| (c) | 8 | EV = 260 × 8.5 = \$2,210m; DCF implied multiple = 2,045.5/260 = 7.87x. | 4 pts, 4 pts |
| (d) | 5 | Blend = \$2,127.7m; equity = \$1,527.7m; per share = \$21.82. | 2 pts blend, 1 pt equity, 2 pts per share |

**Question 4 (25 points)**

| Part | Pts | Model answer | Mark allocation |
|:---|---:|:---|:---|
| (a) | 13 | Pref = 400 × (1.08^6 − 1) = \$234.75m. After capital and pref, remaining = 760 − 400 − 234.75 = \$125.25m. Catch-up = 234.75 × 0.25 = \$58.69m; residual 66.56 split 80/20. GP carry = \$72.00m = 20.0% of profit; LP gets \$688.00m: 1.720x, IRR 9.46%. | 3 pts pref, 3 pts catch-up, 3 pts split, 4 pts LP multiple and IRR |
| (b) | 12 | PV of inflows = \$166.04m; NPV = \$16.04m. PV after-tax carbon cost = \$37.58m; NPV = -\$21.53m. Without carbon the project is accepted; including it NPV is lower but negative, so the decision reverses; test with higher prices. | 4 pts base NPV, 5 pts carbon, 3 pts comment |

*Total: 100 points.*

## Multiple-Choice Question Bank

The bank has 60 questions, five for each of Volume 1, Chapters 13 to 24, in chapter order (questions 1-5 Chapter 13, 6-10 Chapter 14, and so on). Questions with calculations are keyed to values recomputed in Python. Key positions are distributed as follows (A: 20, B: 15, C: 14, D: 11). A 20-question paper drawn at random with a balanced chapter mix and a 30-minute limit is a suitable quiz.

### Questions

**1.** A firm has 20 million shares at \$30 and offers rights to buy one new share at \$24 for every four held. The theoretical ex-rights price is:  
(A) \$27.00  (B) \$28.80  (C) \$29.50  (D) \$30.00

**2.** An IPO is priced at \$15 and closes day one at \$18. Underpricing is:  
(A) 20.0%  (B) 16.7%  (C) 3.0%  (D) 83.3%

**3.** Which theory best explains why the share price typically falls when a firm announces a seasoned equity offering?  
(A) Asymmetric information: managers issue when shares are overvalued  (B) The Gordon growth model  (C) Put-call parity  (D) The tax shield of debt

**4.** The primary purpose of a greenshoe (over-allotment) option is to:  
(A) Reduce the gross spread  (B) Raise the offer price  (C) Allow price stabilization after the offering  (D) Transfer ownership from the issuer to the underwriter

**5.** Compared with a general cash offer, a rights offering mainly:  
(A) Raises more cash per share  (B) Eliminates the announcement effect  (C) Guarantees a higher share price  (D) Protects existing holders from ownership dilution and usually has lower flotation costs

**6.** A five-year zero-coupon bond with face value \$1,000 and a 6% annual yield costs:  
(A) \$747.26  (B) \$800.00  (C) \$1,000.00  (D) \$700.00

**7.** A bond with a coupon above its yield trades at a premium and is callable. Which statement is correct?  
(A) Yield to call exceeds yield to maturity  (B) Yield to call is below yield to maturity  (C) They are equal  (D) Yield to call cannot be computed

**8.** A firm borrows at 8% with a 30% tax rate. The after-tax cost of debt is:  
(A) 8.0%  (B) 2.4%  (C) 5.6%  (D) 10.4%

**9.** A covenant forbidding additional debt above a stated leverage ratio is called a:  
(A) Positive covenant  (B) Sinking fund  (C) Call provision  (D) Negative (restrictive) covenant

**10.** The Macaulay duration of a zero-coupon bond equals:  
(A) Its time to maturity  (B) Half its maturity  (C) Its yield  (D) Its coupon rate

**11.** In a world with no taxes and no frictions, Modigliani-Miller Proposition I states that firm value:  
(A) Rises with debt  (B) Is independent of capital structure  (C) Falls with debt  (D) Depends on dividend policy

**12.** An unlevered firm worth \$400m issues \$100m of permanent debt; the tax rate is 30%. Levered value is:  
(A) \$400m  (B) \$470m  (C) \$430m  (D) \$500m

**13.** With rU = 10%, rD = 6%, D/E = 1 and no taxes, the cost of equity is:  
(A) 10%  (B) 16%  (C) 12%  (D) 14%

**14.** Pecking-order theory predicts firms prefer financing in the order:  
(A) Internal funds, debt, equity  (B) Equity, debt, internal funds  (C) Debt, equity, internal funds  (D) Equity, internal funds, debt

**15.** Which is an indirect cost of financial distress?  
(A) Legal fees in bankruptcy court  (B) Lost customers and suppliers' tightening of credit  (C) Interest tax shield  (D) Underwriter fees

**16.** A firm pays a \$2 dividend. Ignoring taxes, the stock price on the ex-dividend date should fall by about:  
(A) \$0  (B) \$1  (C) \$2  (D) \$4

**17.** A debt-financed buyback raises EPS when:  
(A) The earnings yield exceeds the after-tax cost of debt  (B) The P/E ratio is low and rates are high  (C) The dividend yield is below the earnings yield  (D) Shares trade below book

**18.** ROE = 12% and the retention ratio = 60%. Sustainable growth is:  
(A) 4.8%  (B) 12.0%  (C) 20.0%  (D) 7.2%

**19.** Why is a dividend cut often followed by a price decline?  
(A) It signals lower expected future earnings  (B) It increases the tax rate  (C) It reduces shares outstanding  (D) It always forces a buyback

**20.** Lintner's model says managers:  
(A) Change dividends with each quarter's earnings  (B) Smooth dividends and adjust gradually toward a target payout  (C) Never pay dividends  (D) Pay out all free cash flow

**21.** DIO = 45, DSO = 38 and DPO = 30 days. The cash conversion cycle is:  
(A) 113 days  (B) −37 days  (C) 53 days  (D) 83 days

**22.** Terms 2/10 net 40: the annualized simple cost of forgoing the discount is about:  
(A) 24.8%  (B) 2.0%  (C) 12.2%  (D) 74.5%

**23.** Annual demand 10,000, order cost \$100, holding cost \$4 per unit. The EOQ is about:  
(A) 500 units  (B) 1,000 units  (C) 250 units  (D) 707 units

**24.** A firm financing all permanent and seasonal current assets with long-term debt follows a:  
(A) Aggressive policy  (B) Conservative policy  (C) Matching policy  (D) Zero-working-capital policy

**25.** Lockbox systems aim to:  
(A) Reduce collection float  (B) Increase disbursement float  (C) Lower inventory  (D) Increase credit sales

**26.** For European options on a non-dividend stock, C − P equals:  
(A) K − S  (B) S + K  (C) S − K e^(−rT)  (D) S e^(−rT) − K

**27.** All else equal, an increase in volatility:  
(A) Lowers call values  (B) Lowers put values  (C) Leaves option values unchanged  (D) Raises both call and put values

**28.** The delta of a deep in-the-money call is close to:  
(A) 1  (B) 0  (C) 0.5  (D) −1

**29.** A stock can go up 20% or down 10% and the risk-free rate is 5% per period. The risk-neutral probability of an up move is:  
(A) 0.40  (B) 0.50  (C) 0.60  (D) 0.75

**30.** It is never optimal to exercise early a(n):  
(A) American put on any stock  (B) American call just before a large dividend  (C) American call on a non-dividend-paying stock  (D) Deep in-the-money American put

**31.** A non-dividend stock is \$50, r = 4% continuous. The 6-month forward price is:  
(A) \$50.00  (B) \$51.01  (C) \$51.00  (D) \$49.00

**32.** Futures differ from forwards mainly because futures are:  
(A) Marked to market daily and exchange-traded  (B) Always cash settled  (C) Unregulated  (D) Customized

**33.** A pay-fixed swap gains value when floating rates:  
(A) Fall  (B) Stay unchanged  (C) Become negative  (D) Rise

**34.** To cut a portfolio's beta from 1.2 to 0.8 with index futures, the manager:  
(A) Sells index futures  (B) Buys index futures  (C) Buys calls  (D) Shorts the risk-free asset

**35.** A market in which futures prices are below spot prices is in:  
(A) Contango  (B) Equilibrium  (C) Backwardation  (D) Arbitrage

**36.** Spot \$1.20 per euro, USD rate 4%, EUR rate 2%. The one-year forward is about:  
(A) \$1.1769  (B) \$1.2235  (C) \$1.2000  (D) \$1.2480

**37.** A firm whose long-run competitiveness is affected by currency swings faces:  
(A) Economic exposure  (B) Transaction exposure only  (C) Translation exposure only  (D) No exposure

**38.** Value at Risk measures:  
(A) The maximum possible loss  (B) The average loss  (C) The expected return  (D) A loss threshold exceeded with a given small probability over a horizon

**39.** To immunize a single liability, assets should have present value equal to the liability and:  
(A) Maturity longer than the liability  (B) Zero convexity  (C) Duration equal to the liability's duration  (D) Floating rates

**40.** Which is a natural hedge for a firm with euro revenues?  
(A) Dollar-denominated debt  (B) Euro-denominated debt  (C) A larger dividend  (D) A longer receivables period

**41.** EBIT 200, tax 25%, depreciation 30, capex 50, increase in NWC 10. FCFF is:  
(A) 120  (B) 150  (C) 110  (D) 140

**42.** FCFF next year is 90, WACC 10%, growth 4%. Enterprise value is:  
(A) 900  (B) 2,250  (C) 1,500  (D) 1,000

**43.** When terminal value represents most of enterprise value, the analyst should:  
(A) Ignore terminal value  (B) Test sensitivity to WACC and g and cross-check with multiples  (C) Lower the tax rate  (D) Extend the forecast with higher growth

**44.** Equity value from EV/EBITDA valuation equals:  
(A) EV minus net debt (and other claims)  (B) EV plus net debt  (C) EV divided by shares  (D) EBITDA minus interest

**45.** If ROIC equals WACC on new investment, growth:  
(A) Adds maximum value  (B) Destroys value  (C) Lowers WACC  (D) Adds no value

**46.** An acquirer pays a premium of \$50m for synergies worth \$80m. NPV to the acquirer's shareholders is:  
(A) \$80m  (B) \$50m  (C) \$30m  (D) −\$30m

**47.** A stock-financed acquisition tends to be EPS-dilutive when the:  
(A) Target's P/E is below the acquirer's  (B) Target's P/E exceeds the acquirer's P/E  (C) Target is private  (D) Deal is financed with cash

**48.** A poison pill is designed to:  
(A) Make a hostile takeover prohibitively dilutive without board approval  (B) Raise the target's cash  (C) Lower debt  (D) Replace the board

**49.** The regulatory concern most likely to block a horizontal merger is:  
(A) Large goodwill  (B) Tax shields  (C) High leverage  (D) Market power and reduced competition

**50.** The winner's curse in auctions implies that winning bidders:  
(A) Always gain most synergies  (B) Pay below value  (C) Tend to overpay  (D) Avoid premiums

**51.** Total uses are \$600m and debt is 4.0x EBITDA of \$100m. Sponsor equity is:  
(A) \$200m  (B) \$400m  (C) \$100m  (D) \$300m

**52.** A sponsor earns 2.5x MOIC over five years. IRR is about:  
(A) 25.0%  (B) 20.1%  (C) 12.5%  (D) 30.0%

**53.** Which is NOT a main source of LBO returns?  
(A) EBITDA growth  (B) Debt paydown  (C) A lower tax rate on dividends  (D) Multiple expansion

**54.** A 20% carry over an 8% hurdle with full catch-up means the GP:  
(A) Receives 20% of committed capital  (B) Receives 8% of profits  (C) Receives nothing above the hurdle  (D) Receives 20% of total profit once the hurdle is exceeded and fully caught up

**55.** A dividend recapitalization:  
(A) Raises debt to pay a dividend to the sponsor  (B) Repays debt with equity  (C) Reduces risk  (D) Is tax-free to all holders

**56.** Green bond yield 4.85% versus conventional 5.00%. The greenium is:  
(A) 5 bp  (B) 15 bp  (C) 1.5 bp  (D) 150 bp

**57.** An internal carbon price in capital budgeting is used to:  
(A) Reduce WACC  (B) Offset taxes  (C) Reflect the cost of expected emissions in project cash flows  (D) Replace market prices

**58.** Under cumulative voting with 600 shares and five directors elected, shares needed to guarantee one seat:  
(A) 101  (B) 301  (C) 121  (D) 60

**59.** In a dual-class structure the founder's voting power exceeds her economic stake because:  
(A) She owns more cash flows  (B) Her shares carry more votes per share  (C) Voting is cumulative  (D) She holds preferred stock

**60.** A fintech lender has LTV of \$900 and CAC of \$450. LTV/CAC is:  
(A) 2.0x  (B) 0.5x  (C) 4.5x  (D) 3.0x

### Answer Key and Rationales

| Q | Key | Rationale |
|---:|:---:|:---|
| 1 | B | (4 × 30 + 24) / 5 = 28.80. |
| 2 | A | 18 / 15 − 1 = 20%; 16.7% divides by the wrong base. |
| 3 | A | Equity issuance signals overvaluation (Myers-Majluf). |
| 4 | C | The short position lets the underwriter buy back shares if the price falls. |
| 5 | D | Pre-emptive rights let holders maintain proportional ownership; the right's value offsets the discount. |
| 6 | A | 1,000 / 1.06^5 = 747.26. |
| 7 | B | Shortening the horizon removes future premium-bond coupons and the call price is lower than the premium price, so the yield is lower. |
| 8 | C | 8% × (1 − 0.30) = 5.6%. |
| 9 | D | It restricts management actions; it protects lenders from asset substitution and dilution of their claim. |
| 10 | A | There is a single cash flow at maturity. |
| 11 | B | Arbitrage by investors replicates leverage. |
| 12 | C | 400 + 0.30 × 100 = 430. |
| 13 | D | 10% + (10% − 6%) × 1 = 14%. |
| 14 | A | Adverse selection costs are lowest for internal funds and highest for equity. |
| 15 | B | Indirect costs arise before formal bankruptcy and are often larger than direct costs. |
| 16 | C | A dollar paid out reduces firm value by a dollar. |
| 17 | A | Each dollar repurchased retires earnings equal to the earnings yield but costs only the after-tax interest rate, so EPS rises when the yield is higher. |
| 18 | D | g = ROE × retention = 0.12 × 0.6 = 7.2%. |
| 19 | A | Dividends convey information because managers smooth payouts. |
| 20 | B | Dividends follow a partial-adjustment pattern. |
| 21 | C | 45 + 38 − 30 = 53. |
| 22 | A | 0.02/0.98 × 365/30 = 24.83%. |
| 23 | D | √(2 × 10,000 × 100 / 4) = 707.1. |
| 24 | B | It uses long-term funds for temporary needs, which lowers risk but raises cost. |
| 25 | A | They speed receipt of customer payments. |
| 26 | C | Put-call parity. |
| 27 | D | Options have convex payoffs, so greater dispersion raises value. |
| 28 | A | It behaves like the stock. |
| 29 | B | (1.05 − 0.90) / (1.20 − 0.90) = 0.50. |
| 30 | C | The call's time value exceeds the interest saved by delaying exercise. |
| 31 | B | 50 × e^0.02 = 51.01. |
| 32 | A | Daily settlement and a clearinghouse reduce credit risk. |
| 33 | D | The holder pays a fixed rate and receives a higher floating rate. |
| 34 | A | Short futures reduce market exposure. |
| 35 | C | Backwardation reflects a high convenience yield or short-term scarcity. |
| 36 | B | 1.20 × 1.04 / 1.02 = 1.2235. |
| 37 | A | Economic exposure affects future operating cash flows. |
| 38 | D | VaR is a quantile, not a worst case. |
| 39 | C | Matching duration offsets first-order interest-rate effects. |
| 40 | B | Euro liabilities offset euro inflows. |
| 41 | A | 150 + 30 − 50 − 10 = 120. |
| 42 | C | 90 / 0.06 = 1,500. |
| 43 | B | Terminal assumptions dominate value. |
| 44 | A | Debt holders are paid before equity. |
| 45 | D | Reinvested capital earns exactly its cost. |
| 46 | C | Synergies − premium = 30. |
| 47 | B | The acquirer issues too many shares for each dollar of target earnings. |
| 48 | A | Rights become exercisable at a discount if a bidder crosses a threshold. |
| 49 | D | Antitrust authorities assess concentration. |
| 50 | C | The highest estimate is likely an overestimate. |
| 51 | A | 600 − 400 = 200. |
| 52 | B | 2.5^(1/5) − 1 = 20.1%. |
| 53 | C | Returns come from operations, deleveraging and the exit multiple. |
| 54 | D | Catch-up restores the 80/20 split on all profits. |
| 55 | A | It returns capital early, raising IRR but also leverage. |
| 56 | B | 5.00 − 4.85 = 0.15%. |
| 57 | C | It stress-tests projects against regulation and policy. |
| 58 | A | 600 × 1 / (5 + 1) + 1 = 101. |
| 59 | B | The wedge between control and cash-flow rights is the agency cost. |
| 60 | A | 900 / 450 = 2.0, below the common 3x guideline. |
