# Chapter 26 — Building Free Cash Flow from the Accounts

Every cash-flow valuation starts with the same task: turn a set of financial statements into **free cash flow**. The syllabus illustration in Chapter 5 starts from a one-line free cash flow; real questions give an income statement, a balance sheet and a set of ratios. This chapter shows how to do the conversion carefully, how to cross-check it, and how to forecast the ingredients.

## 26.1 The ingredients of free cash flow

**FCFF = EBIT(1 − t) + Depreciation − Capital expenditure − Increase in net working capital**

| Ingredient | Where to find it | Common trap |
|------------|------------------|-------------|
| **EBIT** | Income statement: revenue − operating costs − depreciation | Including non-operating income or one-offs |
| **Tax on EBIT** | EBIT × tax rate | Using actual tax (which is reduced by interest) |
| **Depreciation** | Income statement/notes | Adding back more than the non-cash charge |
| **Capital expenditure** | Change in net fixed assets + depreciation | Forgetting that net fixed assets are *after* depreciation |
| **Net working capital** | Balance sheet: inventory + receivables + other operating current assets − payables − other operating current liabilities | Including cash and short-term loans |

## 26.2 Worked example: Veda Pharma Ltd.

*Veda Pharma Ltd.* (fictional; ₹ crore). Income statement:

| | Year 0 | Year 1 |
|---|---:|---:|
| Revenue | 1,500 | 1,740 |
| Cost of goods sold | (900) | (1,032) |
| Selling, general and administrative | (200) | (230) |
| Depreciation | (60) | (70) |
| **EBIT** | **340** | **408** |
| Interest | (40) | (44) |
| PBT | 300 | 364 |
| Tax @ 25% | (75) | (91) |
| **Net income** | **225** | **273** |

**Working-capital policy:** receivable days 60 (on revenue); inventory days 75 and payable days 45 (both on COGS). **Fixed assets:** net fixed assets at the beginning of year 1: ₹520 crore; capital expenditure in year 1: ₹130 crore. **Debt:** net borrowing in year 1: ₹25 crore.

### Step 1 — Net working capital

| | Year 0 | Year 1 |
|---|---:|---:|
| Receivables (revenue × 60/365) | 246.6 | 286.0 |
| Inventory (COGS × 75/365) | 184.9 | 212.1 |
| Payables (COGS × 45/365) | (111.0) | (127.2) |
| **Net working capital** | **320.5** | **370.9** |

**Increase in NWC (year 1) = 370.85 − 320.55 = ₹50.3 crore** (a cash outflow).

### Step 2 — Net fixed assets
Closing net fixed assets = 520 + 130 − 70 = **₹580 crore**. (Capex 130 less depreciation 70 = net investment of 60.)

### Step 3 — FCFF by three routes

| Route | Calculation | Year-1 FCFF |
|-------|-------------|------------:|
| **From EBIT** | 408 × 0.75 = 306.0; + 70 − 130 − 50.3 | **195.7** |
| **From EBITDA** | (408 + 70) × 0.75 + 0.25 × 70 − 130 − 50.3 = 358.5 + 17.5 − 130 − 50.3 | **195.7** |
| **From net income** | 273 + 44 × 0.75 + 70 − 130 − 50.3 = 273 + 33 + 70 − 130 − 50.3 | **195.7** |

All three agree — a strong check on the arithmetic.

### Step 4 — FCFE

**FCFE = Net income + Depreciation − Capex − ΔNWC + Net borrowing** = 273 + 70 − 130 − 50.3 + 25 = **₹187.7 crore**.
Check: FCFF − after-tax interest + net borrowing = 195.7 − 33 + 25 = 187.7 ✔.

### Step 5 — Reconcile to a cash-flow statement

| ₹ crore | |
|---|---:|
| Net income | 273.0 |
| Add: depreciation | 70.0 |
| Less: increase in NWC | (50.3) |
| **Cash from operations** | **292.7** |
| Less: capital expenditure | (130.0) |
| **Free cash flow after capex (before debt flows)** | **162.7** |
| Add: net borrowing | 25.0 |
| **FCFE** | **187.7** |
| *To go to FCFF:* add after-tax interest 33.0, subtract net borrowing 25.0 | **195.7** |

## 26.3 Forecasting the ingredients

A valuer rarely forecasts FCFF directly; he forecasts the drivers:

| Driver | Typical method |
|--------|---------------|
| Revenue | Growth rates by segment; volume × price; market share |
| Operating margin | Cost ratios to revenue; operating leverage; mix |
| Depreciation | % of revenue or of opening net fixed assets (e.g., 10% as in Question 3) |
| Capex | % of revenue; capacity plans; maintenance + growth |
| Working capital | Days (receivable, inventory, payable) or % of revenue |
| Tax | Effective rate; marginal rate in terminal year |

### 26.3.1 Forecast for Veda (illustrative)
Assume revenue growth 14%, 12%, 10%; cost ratios (COGS 59.3%, SG&A 13.2%, depreciation 4.0% of revenue) unchanged, so EBIT margin 23.4%; capex 7.5% of revenue; working-capital days unchanged; tax 25%; WACC 11%.

| ₹ crore | Year 1 | Year 2 | Year 3 |
|---------|-------:|-------:|-------:|
| Revenue | 1,983.6 | 2,221.6 | 2,443.8 |
| EBIT | 465.1 | 520.9 | 573.0 |
| NOPAT | 348.8 | 390.7 | 429.8 |
| + Depreciation | 79.8 | 89.4 | 98.3 |
| − Capex | (148.8) | (166.6) | (183.3) |
| − Increase in NWC | (51.9) | (50.7) | (47.4) |
| **FCFF** | **228.0** | **262.7** | **297.4** |

PV at 11% = **636.1**. *Terminal value:* growth 5% and ROIC 16% ⇒ reinvestment rate 31.25%; NOPAT in year 4 = 451.3; FCFF = 310.2; TV = 310.2 ÷ 0.06 = 5,170.7; PV = 3,780.8. **Enterprise value = ₹4,416.8 crore**; with net debt of ₹480 crore, equity value ≈ ₹3,937 crore, or ₹196.8 per share on 20 crore shares.

*Observation.* Free cash flow grows faster than revenue in the early years because the working-capital and capex needs scale with *growth*, not with revenue: as growth slows from 16% to 10%, reinvestment falls, lifting FCFF.

## 26.4 Terminal-year consistency

In the terminal year a growing company still needs reinvestment. The textbook questions (Q7, Q8 in Chapter 21) capture this by two assumptions: **capex is offset by depreciation** (no *net* capex) and **working capital grows with revenue** (ΔNWC = 25% × Δrevenue). A fuller approach ties reinvestment to the growth rate and return on capital: **Reinvestment rate = g ÷ ROIC**. Failing to reinvest while assuming growth overstates value.

## 26.5 Common errors

1. **Using actual taxes rather than tax on EBIT** in FCFF.
2. **Adding back all non-cash items**, including provisions that represent real costs.
3. **Taking net fixed asset change as capex** (forgetting depreciation).
4. **Including cash and borrowings in working capital.**
5. **Using the wrong sign for ΔNWC** (an increase is an outflow).
6. **Forgetting to separate non-operating income** (it is valued in the bridge).
7. **Mixing FCFF with cost of equity or FCFE with WACC.**

## 26.6 Worked example: from a balance sheet change

*Closing and opening balance sheet (₹ lakh).* Net fixed assets: opening 800; closing 900; depreciation for the year 100. Inventories: 300 → 330; receivables: 250 → 290; payables: 180 → 200; cash 50 → 70 (ignore). EBIT 300; tax 30%.

- Capex = 900 − 800 + 100 = **200**.
- ΔNWC = (330 + 290 − 200) − (300 + 250 − 180) = 420 − 370 = **50**.
- NOPAT = 300 × 0.7 = **210**.
- **FCFF = 210 + 100 − 200 − 50 = ₹60 lakh.**

## Chapter 26 summary

- FCFF = EBIT(1 − t) + depreciation − capex − ΔNWC; compute by two or three routes to check.
- Capex = Δ net fixed assets + depreciation; ΔNWC excludes cash and borrowings.
- FCFE adds net borrowing and removes after-tax interest.
- Forecast drivers (revenue, margin, days, capex ratio); reinvest in the terminal year.
- Veda Pharma: FCFF 195.7, FCFE 187.7; forecast EV ₹4,417 crore.

## Check your understanding

1. Compute capex: opening NFA 500, closing 560, depreciation 80.
2. NWC rose from 200 to 230; NOPAT 150; depreciation 40; capex 90. Compute FCFF.
3. Why use tax on EBIT in FCFF?
4. Convert FCFF 120 to FCFE: after-tax interest 30, net borrowing 20.
5. Why is NWC defined excluding cash?

**Answers.** (1) 560 − 500 + 80 = **140**. (2) 150 + 40 − 90 − 30 = **70**. (3) The interest shield is captured in WACC; using actual tax would double-count it. (4) 120 − 30 + 20 = **110**. (5) Cash and borrowings are financing items; cash is a non-operating asset valued separately.

> **Exam focus.** Show each ingredient separately; examiners award marks for each of NOPAT, depreciation add-back, capex and ΔNWC.

<div class="pagebreak"></div>
