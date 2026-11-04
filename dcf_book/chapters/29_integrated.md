# Chapter 29 — The Integrated Model: Three Statements, FCFF, FCFE and Reconciliation

The valuations so far used a *driver-based* forecast: revenue, margin and reinvestment, from which FCFF follows. Many professional models go one step further and build a full **three-statement model** — income statement, balance sheet and cash-flow statement that articulate with one another. The integrated model adds discipline (the balance sheet must balance, cash must reconcile), allows the debt schedule and interest to be modelled properly, and permits an FCFE valuation as a cross-check. This chapter builds it for Meridian and shows how FCFF and FCFE valuations reconcile.

## 29.1 Why build an integrated model?

1. **Error-catching.** An unbalanced balance sheet reveals an error that a driver-only model would hide.
2. **Financing visibility.** The debt schedule, interest, coverage ratios, dividends and cash needs can be tested — useful for lenders, covenants and capital-structure decisions.
3. **FCFE and ROE.** The model produces net income, dividends and ROE, necessary for an equity-side valuation.
4. **Scenario consistency.** A change in one assumption flows through all three statements.
5. **Credibility.** Reviewers can trace every number.

The cost is complexity. For a quick valuation, the driver-based approach is enough; for a transaction, a financing decision or a fairness opinion, the integrated model is standard.

## 29.2 Linking the statements

The three statements link as follows.

| From | To | Link |
|------|----|------|
| Income statement net income | Balance sheet equity | Retained earnings += net income − dividends |
| Income statement D&A | Balance sheet fixed assets | Net fixed assets = opening + capex − D&A |
| Revenue and cost days | Balance sheet working capital | NWC = f(revenue, days or %) |
| Balance sheet debt | Income statement interest | Interest = rate × (opening or average) debt |
| Cash-flow statement closing cash | Balance sheet cash | Balance sheet cash = closing cash |
| Cash-flow items | Balance sheet changes | ΔNWC, capex, Δdebt, dividends |

**The key identity:** *ΔAssets = ΔLiabilities + ΔEquity.* If the cash-flow statement captures every non-cash movement, the balance sheet will balance automatically with cash as the balancing item (or, as here, with dividends set so that cash stays at a chosen level).

## 29.3 Assumptions for Meridian's integrated model

We keep the Chapter 14 operating assumptions and add financing assumptions.

| Item | Assumption |
|------|-----------|
| Revenue growth, EBIT margin | As Chapter 14 |
| D&A | 5% of revenue |
| NWC | 10% of revenue |
| Net reinvestment | ΔRevenue ÷ 2.0 (sales-to-capital) |
| Net fixed assets | Opening + net reinvestment − ΔNWC (i.e., net capex) |
| Capex | Net capex + D&A |
| Intangibles, other operating assets, non-operating investments, cash | Held constant (100, 250, 100, 150) |
| Debt | Increases each year by 20% of net reinvestment |
| Interest | 9% on the opening debt balance |
| Tax | 25% of profit before tax |
| Dividends | Equal to FCFE, so that cash stays at ₹150 crore |

## 29.4 Income statement (₹ crore)

| | FY26A | FY27E | FY28E | FY29E | FY30E | FY31E |
|---|------:|------:|------:|------:|------:|------:|
| Revenue | 2,000.0 | 2,280.0 | 2,553.6 | 2,809.0 | 3,061.8 | 3,306.7 |
| EBITDA | 340.0 | 399.0 | 459.6 | 519.7 | 581.7 | 644.8 |
| D&A | (100.0) | (114.0) | (127.7) | (140.4) | (153.1) | (165.3) |
| **EBIT** | **240.0** | **285.0** | **332.0** | **379.2** | **428.6** | **479.5** |
| Interest | (54.0) | (54.0) | (56.5) | (59.0) | (61.3) | (63.6) |
| **PBT** | 186.0 | 231.0 | 275.4 | 320.2 | 367.4 | 415.9 |
| Tax @ 25% | (46.5) | (57.8) | (68.9) | (80.1) | (91.8) | (104.0) |
| **Net income** | **139.5** | **173.3** | **206.6** | **240.2** | **275.5** | **311.9** |
| Interest cover (EBIT ÷ interest) | 4.4× | 5.3× | 5.9× | 6.4× | 7.0× | 7.5× |
| ROE (on opening equity) | | 15.8% | 17.0% | 18.2% | 19.4% | 20.5% |

## 29.5 Balance sheet (₹ crore)

| | FY26A | FY27E | FY28E | FY29E | FY30E | FY31E |
|---|------:|------:|------:|------:|------:|------:|
| Net fixed assets | 900.0 | 1,012.0 | 1,121.4 | 1,223.6 | 1,324.7 | 1,422.7 |
| Operating NWC | 200.0 | 228.0 | 255.4 | 280.9 | 306.2 | 330.7 |
| Intangibles & goodwill | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Other operating assets | 250.0 | 250.0 | 250.0 | 250.0 | 250.0 | 250.0 |
| Non-operating investments | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 | 100.0 |
| Cash | 150.0 | 150.0 | 150.0 | 150.0 | 150.0 | 150.0 |
| **Total assets** | **1,700.0** | **1,840.0** | **1,976.8** | **2,104.5** | **2,230.9** | **2,353.4** |
| Borrowings | 600.0 | 628.0 | 655.4 | 680.9 | 706.2 | 730.7 |
| Equity | 1,100.0 | 1,212.0 | 1,321.4 | 1,423.6 | 1,524.7 | 1,622.7 |
| **Total liabilities & equity** | **1,700.0** | **1,840.0** | **1,976.8** | **2,104.5** | **2,230.9** | **2,353.4** |

**Balance check:** assets equal liabilities plus equity in every year. ✔

## 29.6 Cash-flow statement and reconciliation to FCFF and FCFE

| ₹ crore | FY27E | FY28E | FY29E | FY30E | FY31E |
|---------|------:|------:|------:|------:|------:|
| Net income | 173.3 | 206.6 | 240.2 | 275.5 | 311.9 |
| Add: D&A | 114.0 | 127.7 | 140.4 | 153.1 | 165.3 |
| Less: increase in NWC | (28.0) | (27.4) | (25.5) | (25.3) | (24.5) |
| **Cash from operations** | 259.3 | 306.9 | 355.1 | 403.3 | 452.7 |
| Less: capex | (226.0) | (237.1) | (242.6) | (254.2) | (263.3) |
| **Free cash flow after capex** | 33.3 | 69.8 | 112.5 | 149.1 | 189.4 |
| Add: net borrowing | 28.0 | 27.4 | 25.5 | 25.3 | 24.5 |
| **FCFE (= dividends paid)** | **61.2** | **97.1** | **138.0** | **174.4** | **214.0** |
| *Reconciliation:* FCFF | 73.7 | 112.2 | 156.7 | 195.1 | 237.1 |
| Less: after-tax interest | (40.5) | (42.4) | (44.3) | (46.0) | (47.7) |
| Add: net borrowing | 28.0 | 27.4 | 25.5 | 25.3 | 24.5 |
| = FCFE | 61.2 | 97.1 | 138.0 | 174.4 | 214.0 |

The FCFE computed from the cash-flow statement equals the one derived from FCFF: the two approaches reconcile year by year. Closing cash stays at ₹150 crore, so the balance sheet balances.

## 29.7 FCFE valuation: first attempt (debt tied to reinvestment)

Discount FCFE at the cost of equity of 12.34%. For the terminal value, assume stable growth of 5% with terminal ROIC 15% (reinvestment 33.3% of NOPAT), debt still funding 20% of reinvestment:

- Terminal NOPAT = 377.6; net income₆ = (EBIT₆ 503.4 − interest 65.8) × 0.75 = 328.3; FCFE₆ = 328.3 − 0.80 × 125.9 = **227.6**.
- TV = 227.6 ÷ (0.1234 − 0.05) = **3,098.9**; PV = 1,731.6.
- PV of FCFE FY27–31 = 457.9.
- Equity value of operations = 457.9 + 1,731.6 = **2,189.5**; add cash and investments of 250 → **2,439.5**, or ₹48.79 per share.

This is **4.8% below** the FCFF-based equity value of ₹2,563.3 crore (₹51.27 per share). Why?

## 29.8 Reconciling the difference

The FCFF valuation used WACC computed at a *constant* D/V of 20% of market value. The integrated model instead lets debt grow only by 20% of net reinvestment, while firm value is growing by more than that, so the *market-value* debt ratio drifts down (to roughly 18% by year 5) and the book debt-to-invested-capital ratio falls from 41% to 35%. Meanwhile the FCFE model keeps the cost of equity at 12.34%, which assumes constant leverage. The two valuations therefore describe *different financing policies*.

**Test: align the policy.** Suppose debt is instead held at **20% of the market value of the enterprise** each year (so debt rises as value rises). The enterprise value at the end of each year, from the FCFF model, is: ₹2,913 (today), 3,167, 3,410, 3,636, 3,849, 4,044. Debt follows: 600, 633, 682, 727, 770, 809. Net borrowing is then 33, 49, 45, 43, 39 (not 28, 27, 26, 25, 25), interest is higher, and FCFE is: **66.5, 118.1, 155.9, 188.6, 224.1**. Terminal: debt grows 5% a year at 20% of EV, so terminal net borrowing = 0.05 × 809 = 40.4; FCFE₆ = 237.6; TV = 237.6 ÷ 0.0734 = 3,235; PV = 1,808. PV of FCFE = 506.4; equity of operations = 506.4 + 1,807.7 = 2,314.1; plus 250 → **₹2,564.1 crore (₹51.28 per share)**.

The FCFE valuation now equals the FCFF valuation (₹2,563.3 crore) to within rounding. **Lesson:** FCFF/WACC and FCFE/Ke are two views of the same economics *only if the financing policy assumed in the discount rate matches the policy modelled in the cash flows.*

## 29.9 What the integrated model teaches that the driver model does not

1. **Leverage and coverage.** Interest cover rises from 4.4× to 7.5×: Meridian de-levers as it grows, so a lender would be comfortable and a financial engineer would see unused debt capacity.
2. **ROE.** ROE climbs from 15.8% to 20.5%, driven by margin expansion and *falling* leverage — a reminder that ROE can rise without increasing leverage when ROIC rises sharply.
3. **Dividend capacity.** FCFE of ₹61 crore in year 1 rising to ₹214 crore in year 5 gives the dividend capacity; the payout ratio (FCFE ÷ NI) rises from 35% to 69%.
4. **Funding gap.** In year 1 free cash flow after capex is only ₹33 crore against interest of ₹54 crore: the company needs the extra borrowing (₹28 crore) to pay dividends of ₹61 crore. If management wanted to pay out *more*, it would need either more debt or external equity.
5. **Cash is a policy variable.** We held cash at ₹150 crore; a different dividend policy would accumulate cash, whose interest income belongs outside FCFF and whose *value* belongs in the bridge.

## 29.10 Building the integrated model: a step-by-step recipe

1. **Opening balance sheet** (from the reformulated statements, Chapter 4): reconcile invested capital.
2. **Revenue and operating items**: revenue, EBITDA, D&A.
3. **Working-capital schedule**: receivable, inventory and payable days or % revenue.
4. **Fixed-asset schedule**: opening NFA + capex − depreciation = closing NFA.
5. **Debt schedule**: opening, drawdowns, repayments, closing; interest on opening or average balances.
6. **Equity schedule**: opening + net income − dividends (± issues/buybacks) = closing.
7. **Tax schedule**: taxable profit, tax, deferred tax if modelled.
8. **Cash-flow statement**: derived from the changes.
9. **Balance sheet**: cash from the cash-flow statement; check the balance.
10. **FCFF, FCFE and valuation** (DCF sheet).
11. **Checks**: balance sheet, cash, debt, FCFF/FCFE reconciliation.

### Handling circularity
If interest is computed on *average* balances and the cash sweep depends on net income, a circular reference arises. Options: (i) compute interest on *opening* balances (as here) — simple and avoids circularity at the cost of small inaccuracy; (ii) use iteration with a switch; (iii) use a macro to copy-paste converged values.

## 29.11 Common pitfalls in integrated models

- **Plugs.** Forcing the balance sheet to balance with an unexplained plug hides errors.
- **Hard-coded balances** in forecast columns.
- **Inconsistent timing** between interest and balances.
- **Cash sweep and minimum cash** not modelled, leading to negative cash.
- **Tax loss and deferred-tax items** omitted.
- **Not reconciling FCFF with the cash-flow statement.**
- **Discounting FCFE at a cost of equity inconsistent with the leverage path.**

## Chapter 29 summary

- An integrated model links income statement, balance sheet and cash-flow statement and must balance.
- FCFF and FCFE can both be reconciled to the cash-flow statement year by year.
- FCFF/WACC and FCFE/Ke give the same equity value *only if* the financing policy is consistent in both.
- Meridian: FCFE valuation with debt tied to reinvestment = ₹48.79 per share; with debt at 20% of market EV = ₹51.28, matching the FCFF value.

## Review questions

1. List the six links between the three statements.
2. Why does the FCFE valuation differ from the FCFF valuation when debt is tied to reinvestment?
3. Why can ROE rise while leverage falls?
4. How can circularity be avoided in the interest calculation?
5. What does it mean that dividends equal FCFE in the model?

<div class="pagebreak"></div>
