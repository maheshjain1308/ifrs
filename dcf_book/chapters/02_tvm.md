# Chapter 2 — The Mathematics of Discounting

DCF is built on a handful of formulas. They are simple, but the habits of using them correctly — consistent timing, consistent rates, awareness of compounding — separate clean models from broken ones. This chapter is a self-contained toolkit.

## 2.1 Compounding and discounting

If you invest ₹100 at 10% per year, after one year you have ₹110, after two ₹121, after three ₹133.10. In general:

**Future value: FV = PV × (1 + r)^n**

Running the logic backwards, the present value of a sum to be received in n years is:

**Present value: PV = FV ÷ (1 + r)^n**

The quantity 1 ÷ (1 + r)^n is the **discount factor**. At r = 10%, the discount factors for years 1 to 5 are 0.9091, 0.8264, 0.7513, 0.6830 and 0.6209. The *rate* r is called the **discount rate**, the **required return** or the **opportunity cost of capital** — different names for the same thing seen from different angles.

> **Worked example 2.1.** A debenture will pay ₹1,000 in 4 years. At a required return of 9%, its present value is 1,000 ÷ 1.09⁴ = 1,000 ÷ 1.4116 = **₹708.43**.

### Frequency of compounding

If interest is compounded m times a year at nominal rate r, the effective annual rate is **(1 + r/m)^m − 1**. For 12% nominal compounded monthly the effective rate is (1.01)¹² − 1 = 12.68%. In valuation, always convert to an *effective annual* rate before discounting annual cash flows. Continuous compounding uses e^(rt), occasionally seen in option-pricing and some theoretical work.

## 2.2 Net present value (NPV)

For a set of cash flows CF₀ (today), CF₁, …, CFₙ:

**NPV = CF₀ + CF₁/(1+r) + CF₂/(1+r)² + … + CFₙ/(1+r)ⁿ**

An investment that costs ₹500 today and returns ₹200, ₹250 and ₹300 at the ends of years 1–3, at 12%, has:

NPV = −500 + 200/1.12 + 250/1.2544 + 300/1.4049 = −500 + 178.57 + 199.30 + 213.53 = **₹91.40**.

**Decision rule:** accept projects with positive NPV; reject negative. NPV measures the value created (in today's rupees) over and above the return required by investors. A DCF valuation of a company is an NPV calculation in which the "investment" is the price you would pay.

## 2.3 Internal rate of return (IRR)

The IRR is the discount rate at which NPV = 0. For the project above, IRR solves −500 + 200/(1+i) + 250/(1+i)² + 300/(1+i)³ = 0. Trial and error (or a calculator) gives IRR ≈ **23.2%**. Since this exceeds the 12% required return, the project is acceptable.

Strengths: intuitive percentage figure; no need to know the discount rate to compute it. Weaknesses:

- **Multiple IRRs** when cash flows change sign more than once.
- **Reinvestment assumption:** IRR implicitly assumes interim cash is reinvested at the IRR itself, which is rarely realistic. (NPV assumes reinvestment at the discount rate.)
- **Scale blindness:** a small project can have a high IRR but low NPV.

For ranking mutually exclusive projects use NPV. In valuation, IRR is used for *investor return* analysis (e.g., "what IRR does a buyer earn at this price?"), not for estimating value.

## 2.4 Perpetuities and annuities

Many valuation shortcuts rely on closed-form sums.

### Perpetuity (level cash flow forever)
**PV = C ÷ r**

A security paying ₹80 a year forever, at 10%: PV = ₹800.

### Growing perpetuity (the Gordon growth formula)
If the first cash flow arrives one year from now and then grows at constant rate g forever:

**PV = C₁ ÷ (r − g)**, valid only if r > g.

*Derivation.* PV = C₁/(1+r) + C₁(1+g)/(1+r)² + C₁(1+g)²/(1+r)³ + … is a geometric series with first term C₁/(1+r) and ratio (1+g)/(1+r) < 1. Its sum is [C₁/(1+r)] ÷ [1 − (1+g)/(1+r)] = C₁/(r − g).

This formula, the backbone of terminal-value calculation, deserves two warnings. First, it is extremely sensitive to the gap (r − g): when r = 11% and g = 5% the multiplier is 1/0.06 = 16.7; when g rises to 6% the multiplier is 1/0.05 = 20 — a 20% increase in value for a one-point change in growth. Second, it assumes the cash flow C₁ is *consistent* with growth g (growth needs reinvestment; see Chapter 12).

### Ordinary annuity (level cash flow for n years)
**PV = C × [1 − (1+r)^(−n)] ÷ r**

An annuity of ₹100 for 5 years at 10%: 100 × (1 − 0.6209)/0.10 = **₹379.08**.

### Growing annuity
**PV = C₁ × [1 − ((1+g)/(1+r))ⁿ] ÷ (r − g)**

An annuity beginning at ₹100 growing 5% for 10 years at 12%: 100 × [1 − (1.05/1.12)¹⁰]/0.07 = 100 × (1 − 0.5156)/0.07 = **₹692.0** (approximately).

## 2.5 Timing conventions

### 2.5.1 End-year convention
The simplest convention treats each year's cash flow as arriving on the last day of the year. This understates value for a business whose cash arrives evenly through the year.

### 2.5.2 Mid-year convention
Cash flows accrue roughly evenly through the year, so on average half a year earlier. Discount factor for year t becomes 1/(1+r)^(t−0.5). The mid-year convention raises value by about (1+r)^0.5 − 1 ≈ r/2 — around 5% at an 11% discount rate. Most professional valuations use mid-year discounting for operating businesses.

*Terminal value under mid-year discounting.* If TV is computed by the Gordon formula (cash flows continuing mid-year), it is discounted with the *same* mid-year factor as the final-year cash flow (n − 0.5). If TV is computed by an exit multiple applied to year-n EBITDA (assumed sale at year-end), it is discounted with the end-year factor (n). This asymmetry is a frequent source of error.

### 2.5.3 Stub periods
If the valuation date is not a fiscal-year end — say you are valuing on 31 December with a March fiscal year — the first forecast period is a *stub*: the remaining three months. Take only the fraction of year-1 cash flow that falls after the valuation date (25% here), discount it for half the stub length (mid-point), and discount later years by stub + (t − 1) years, again adjusted for mid-year.

> **Worked example 2.2 (stub).** Valuation date 31 Dec 2026; FY ends 31 Mar. FY2027 FCFF = ₹400 cr, FY2028 = ₹460 cr, r = 11%. Stub fraction for FY2027 = 0.25 → cash flow = 100, mid-point at 0.125 years → factor 1/1.11^0.125 = 0.9869 → PV = 98.69. FY2028 cash flows at mid-point 0.25 + 0.5 = 0.75 years → factor 1/1.11^0.75 = 0.9247 → PV = 425.4. The pattern continues for later years.

## 2.6 Real versus nominal; currency consistency

**Nominal** cash flows include expected inflation; **real** cash flows are stated at constant prices. A rule that must never be broken: *nominal cash flows are discounted at nominal rates; real cash flows at real rates.* The relationship is the Fisher equation:

**(1 + nominal) = (1 + real) × (1 + inflation)**

At nominal 11% and inflation 5%, real = 1.11/1.05 − 1 = 5.71%.

The same principle applies to **currency**: cash flows in rupees need a rupee discount rate; cash flows in dollars, a dollar rate. The two rates differ by approximately the expected inflation differential (interest-rate parity). Chapter 22 discusses this for Indian valuations.

## 2.7 Present value of a growing stream with changing growth

Real companies do not grow at one rate forever. A common structure is a *two-stage* model: explicit growth for n years, then stable growth. Value = PV of explicit-period cash flows + PV of terminal value.

For instance, a stream beginning at ₹100 (year 1), growing at 15% for 5 years, then at 5% forever, with r = 11%:

- Year 1–5 cash flows: 100, 115, 132.25, 152.09, 174.90.
- Discount factors at 11%: 0.9009, 0.8116, 0.7312, 0.6587, 0.5935.
- PV of explicit flows: 90.09 + 93.34 + 96.70 + 100.18 + 103.81 = **484.12**.
- Year 6 cash flow = 174.90 × 1.05 = 183.65; TV at year 5 = 183.65/(0.11 − 0.05) = 3,060.8; PV = 3,060.8 × 0.5935 = **1,816.6**.
- Total = **₹2,300.7**.

Notice that the terminal component is 79% of the total. This dominance of terminal value is typical and returns as a theme in Chapter 12.

## 2.8 Discount factors and the yield curve

A single discount rate for all maturities is a simplification. Strictly, a cash flow at year t should be discounted at the spot rate for maturity t (taken from the government zero-coupon curve) plus a risk premium. In practice, valuers use one rate because (i) the yield curve is relatively flat over the relevant range, (ii) risk premiums matter more than term structure, and (iii) the spread of estimation error in the premium dwarfs curve effects. In unusual conditions — a steeply inverted curve, or when valuing a bond-like asset — consider term-structure-consistent discounting.

## 2.9 Common spreadsheet implementations

- **PV(rate, nper, pmt, fv)** values a stream of equal payments.
- **NPV(rate, values)** discounts a range assuming the first value is at the end of period 1 (a frequent trap: the initial outlay at time 0 must be added *outside* the function).
- **XNPV(rate, values, dates)** discounts irregular dates using actual days/365 — the best tool for stub periods and mid-year timing.
- **IRR / XIRR** compute internal rates; supply a guess if there are sign changes.

> **Pitfall.** Excel's `NPV` function treats the first cell as period 1, not period 0. If you pass it a range starting with today's investment, every cash flow is discounted one period too many.

## 2.10 Practice drill

Consider cash flows of ₹150, ₹180, ₹210, ₹240 and ₹260 crore at the ends of years 1–5, followed by growth of 4% forever, at a discount rate of 10%.

1. Discount factors: 0.9091, 0.8264, 0.7513, 0.6830, 0.6209.
2. PV of explicit flows: 136.36 + 148.76 + 157.77 + 163.92 + 161.43 = **768.24**.
3. TV = 260 × 1.04 ÷ (0.10 − 0.04) = 4,506.7; PV = 4,506.7 × 0.6209 = **2,798.3**.
4. Total value = **₹3,566.5 crore**. Terminal value share ≈ 78%.

## Chapter 2 summary

- PV = FV/(1+r)ⁿ; NPV sums discounted flows; IRR is the rate that sets NPV to zero.
- Growing perpetuity: C₁/(r − g) with r > g — powerful and dangerous.
- Use mid-year discounting for operating businesses; mind the stub period.
- Keep nominal/real and currency consistent between cash flows and discount rates.
- In a typical two-stage model, the terminal value is the majority of total value.

## Review questions

1. Derive the growing-perpetuity formula from the geometric series.
2. Why does Excel's NPV function often produce a wrong DCF value if used naively?
3. A TV is computed by the Gordon formula in a mid-year model. At which period is it discounted? What if it is computed by an exit multiple?
4. Convert a nominal rate of 12% with 6% inflation to a real rate.
5. Explain why IRR can mislead when ranking projects.

<div class="pagebreak"></div>
