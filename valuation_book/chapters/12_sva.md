# Chapter 12 — Shareholder Value Analysis (SVA)

## 12.1 Why SVA?

We saw that **EVA** is the residual that remains if the capital charge is subtracted from NOPAT. A positive residual simply states that profits earned are adequate to cover the cost of capital. But is NOPAT the only factor that affects shareholders' wealth? Not strictly — but it is definitely *inadequate*, because it **does not take future earnings and cash flows into account**. NOPAT is a historical figure; it cannot fully represent the future potential of the entity. More importantly, it **does not capture future investment opportunities** (or the opportunity cost, whichever way you look at it).

**SVA** plugs this gap by tweaking the value analysis to take into its fold certain **drivers** that can expand the horizon of value creation. The key drivers considered are:

1. **earnings potential in terms of sales**,
2. **investment opportunities**, and
3. **cost of incremental capital**.

SVA (associated with Alfred Rappaport's shareholder-value approach) is, in effect, a **DCF valuation structured around value drivers**.

## 12.2 The seven value drivers (Rappaport)

Though the syllabus names three groups, the classical SVA framework has seven drivers: **sales growth rate, operating profit margin, income-tax rate, incremental fixed-capital investment, incremental working-capital investment, cost of capital, and the length of the value-growth (forecast) period**. A change in any of these changes value; management can focus on the drivers with the highest leverage.

## 12.3 Steps in SVA

| Step | Task |
|------|------|
| (a) | Arrive at the **future cash flows (FCFs)** using a judicious mix of the **value drivers** |
| (b) | **Discount** these FCFs using the **WACC** |
| (c) | Add the **terminal value** to the present values computed in step (b) |
| (d) | Add the **current market value of non-core assets and marketable investments** |
| (e) | **Reduce the value of debt** from the result in step (d) to arrive at the **value of equity** |

## 12.4 The progressive case study ($ million)

### Step a.1 — Operating cash flows from value drivers

| | Y1 | Y2 | Y3 | Y4 onwards |
|---|---:|---:|---:|-----------:|
| EBIT (growing at 5% yearly) | 100.00 | 105.00 | 110.25 | 115.76 |
| Interest cost | (5.00) | (6.00) | (7.00) | (8.00) |
| EBT | 95.00 | 99.00 | 103.25 | 107.76 |
| Taxes @ 33% | (31.35) | (32.67) | (34.07) | (35.56) |
| **EAT** | **63.65** | **66.33** | **69.18** | **72.20** |
| Add back: depreciation | 5.00 | 5.00 | 6.00 | 7.00 |
| Add back: one-time write-offs | 1.00 | – | – | – |
| **Operating cash flow** | **69.65** | **71.33** | **75.18** | **79.20** |

### Step a.2 — Free cash flows

| | Y1 | Y2 | Y3 | Y4 onwards |
|---|---:|---:|---:|-----------:|
| Operating cash flow | 69.65 | 71.33 | 75.18 | 79.20 |
| Less: forecast incremental capital investment | – | (12.00) | (6.00) | (9.00) |
| Less: forecast increase in net working capital | (5.00) | (5.00) | (6.00) | (7.00) |
| **Free cash flow** | **64.65** | **54.33** | **63.18** | **63.20** |

### Step b — Discount at WACC 12%

| | Y1 | Y2 | Y3 | Y4 onwards |
|---|---:|---:|---:|-----------:|
| FCF | 64.65 | 54.33 | 63.18 | 63.20 |
| Discount factor | 0.89 | 0.80 | 0.71 | 0.64 |
| **PV** | **57.54** | **43.46** | **44.86** | **40.45** |

### Step c — Terminal value
From year 4 onwards the free cash flow is level at 63.20 — a **perpetuity**. The source chapter capitalises it by multiplying the present value of the year-4 flow (63.20 × 0.64 = 40.45) by the perpetuity multiplier 1 ÷ 0.12 = 8.33:

**PV of the perpetuity = 40.45 × 8.33 = 336.95.**

(The exact value of a level perpetuity beginning at the end of year 4 is worked out in §12.4.1.)

### Steps d and e — Equity value

| | $ million |
|---|---:|
| PV of FCFs, Y1–Y3 (57.54 + 43.46 + 44.86) | 145.86 |
| PV of the perpetuity from Y4 | 336.95 |
| **Total PVs** | **482.81** |
| Add: investment property (at fair value) | 35.00 |
| Less: carrying cost of debt | (19.00) |
| **Value of equity** | **498.81** |

"Thus, we observe that SVA brings out a **futuristic sense of value for shareholders**. In fact, this can be a good benchmark for shareholders from a cash return on investment perspective too."

### 12.4.1 A note on the perpetuity

Multiplying the *present value of the year-4 flow* by 1/WACC values a perpetuity whose first flow is one year later than year 4, i.e. it discounts one year too many. The exact value of a level perpetuity of 63.20 starting at the end of year 4 is the capitalised value at the end of year 3, discounted three years:

- Value at end of year 3 = 63.20 ÷ 0.12 = **526.67**
- PV today = 526.67 × 0.7118 (= 1/1.12³) = **374.9**

On that basis the total PV would be 145.86 + 374.9 = 520.8 and the value of equity 520.8 + 35 − 19 = **$536.8 million**, about 8% above the source's $498.81 million. An examiner following the source expects **498.81**; the *method* being tested — level cash flow valued as a perpetuity, non-core assets added, debt subtracted — is the same.

> **Pitfall.** When writing your own valuation, state at which date the perpetuity value is measured and discount it from *that* date.

## 12.5 SVA versus EVA versus DCF

| | EVA | SVA | DCF (general) |
|---|-----|-----|---------------|
| Orientation | Historical residual profit | Forward-looking value-driver cash flows | Forward-looking cash flows |
| Value drivers explicit? | No | Yes (sales growth, margin, investments, cost of capital, period) | Optional |
| Output | Annual surplus over capital charge | Value of equity | Enterprise/equity value |
| Use | Performance measurement | Strategy and valuation | Valuation |

SVA is *DCF with the drivers made explicit* — which makes it a management tool: you can ask "if sales growth rises by 1 point, what happens to shareholder value?" and rank levers.

## 12.6 Using SVA for strategy

1. **Sensitivity of value to each driver.** In the case study, a change in EBIT growth or in investment requirements changes FCF; running each driver ±10% reveals the **value leverage**.
2. **Threshold margin**: the minimum operating margin at which value creation is zero for given growth and investment.
3. **Business-unit analysis**: SVA by unit identifies units destroying value.
4. **Capital allocation**: invest only where incremental value > 0.

*Worked example 12.1 (threshold).* Suppose incremental sales of ₹100 crore need ₹30 crore of incremental capital; tax 30%; WACC 12%. The minimum incremental EBIT margin m* at which the incremental investment earns WACC solves m* × 100 × 0.7 = 0.12 × 30 → m* = 3.6 ÷ 70 = **5.14%**. Below 5.14% margin on new sales, growth destroys value.

## 12.7 Limitations

1. Needs credible forecasts of all drivers.
2. Complexity; many inputs.
3. Like DCF, sensitive to WACC and horizon.
4. Does not by itself separate operating from financing effects unless FCFF is used (the source case includes interest in the cash flow build).

## Chapter 12 summary

- SVA is a value-driver-based DCF that supplements EVA by including future earnings potential, investment opportunities and cost of incremental capital.
- Five steps: FCFs from drivers → discount at WACC → add TV → add non-core assets/market investments → subtract debt.
- Case study: total PV 482.81; with investment property 35 and debt 19, equity value $498.81 m (as in the source; exact discounting of the perpetuity gives about $536.8 m).
- SVA helps management see which drivers create most value.

## Check your understanding

1. Why does SVA improve on EVA?
2. List the five SVA steps.
3. Compute equity value: PV of FCFs 300; PV of TV 600; non-core assets 40; debt 150.
4. Name the key value drivers considered.
5. What does the threshold margin tell management?

**Answers.** (1) It brings in future earnings, investment opportunities and incremental capital cost. (2) See §12.3. (3) 300 + 600 + 40 − 150 = **₹790**. (4) Sales/earnings growth, margin, tax, fixed and working-capital investment, cost of capital, forecast period. (5) The minimum profitability at which growth adds value.

> **Exam focus.** Be able to reproduce steps (a)–(e) and the final table; the source's perpetuity convention gives 498.81 (exact discounting would give 536.8).

<div class="pagebreak"></div>
