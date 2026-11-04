# Chapter 21: Enterprise Valuation: DCF and Multiples

## Learning Objectives

After studying this chapter, you should be able to:

- Distinguish enterprise value from equity value, and choose correctly between free cash flow to the firm (FCFF) and free cash flow to equity (FCFE) as the object of discounting.
- Build an internally consistent multi-year forecast of FCFF from operating drivers (growth, margins, reinvestment) rather than from extrapolated line items.
- Estimate a WACC with a relevered beta and target capital structure, and explain when adjusted present value (APV) is the better tool.
- Compute and stress-test a terminal value using the Gordon growth model, the value-driver formula, and an exit multiple, and recognise when each is internally inconsistent.
- Value a company with trading comparables and precedent transactions, interpret a football field, and explain why the ranges rarely agree.
- Apply the venture capital method and scenario analysis to start-ups, and diagnose the most common errors made in practical valuation work.

## Opening Vignette

*Illustrative scenario. Halden Precision Components is a fictional manufacturer of machined parts for medical devices and industrial automation.*

Marguerite Osei, the CFO of Halden, is preparing for a board meeting that will decide whether to accept an unsolicited indicative offer of 28 per share from a private equity sponsor. Halden has 50 million shares, revenue of 800 million, EBIT margin of 18 percent, 250 million of debt and 40 million of cash. The shares have traded between 26 and 32 over the past year.

Her investment bank has delivered three numbers. The discounted cash flow (DCF) model says 31 per share. The trading comparables say roughly 26. The precedent transactions say 27 to 36. Several directors want to know which number is "right," and one asks whether the DCF is worthless because Marguerite's own team can move it by 20 percent simply by changing the discount rate by one percentage point.

Marguerite's response is a lesson in what valuation is for. She explains that no single number is right, because each method answers a different question. The comparables show what the market currently pays for similar earnings streams; the precedents show what buyers have paid for control; the DCF shows what Halden is worth if the board's own operating plan is delivered and the cost of capital is what the team believes it is. The disagreement among the three is information: the DCF is above the comparables because the plan assumes margins and growth that peers do not currently deliver. The board's real decision is whether it believes the plan more than the market does.

She then shows the directors something unusual: a table decomposing the DCF value into the first five years of cash flow and a terminal value, which accounts for three-quarters of the total. "If you doubt anything," she says, "doubt what we assume happens after year five." In this chapter, we learn how to build every number in that exchange, and how to challenge it.

## 21.1 The Logic of Intrinsic and Relative Valuation

### 21.1.1 Two families of methods

Every valuation method falls into one of two families. **Intrinsic valuation** (discounted cash flow) estimates the value of an asset from its own forecast cash flows and the return investors require for bearing their risk. **Relative valuation** (multiples, comparables) estimates value from how the market prices similar assets. The two are not rivals: a multiple is simply a compressed DCF in which growth, risk, and reinvestment have been folded into a single ratio. A company that trades at 12 times earnings is being valued as if its growth, reinvestment needs, and discount rate lie within a particular range. When you use a peer's multiple, you are implicitly importing the peer's DCF assumptions.

The practical consequences differ. A DCF forces explicit assumptions and so makes disagreement discussable, but it is highly sensitive to a handful of inputs. A multiple is quick, reflects market sentiment, and is hard to manipulate, but it can be wrong in the same direction as the whole market. Good practice uses both and treats the gap between them as a diagnostic.

### 21.1.2 Enterprise value versus equity value

The **enterprise value** (EV) of a business is the value of its operating assets, which belongs collectively to all providers of capital. The **equity value** is what remains for shareholders after the claims of debt holders and other senior claimants are settled:

```
Equity value = Enterprise value − Debt − Preferred stock − Non-controlling interests
               − Pension and other debt-like deficits + Cash and non-operating assets
```

The distinction matters because the two are discounted at different rates and measured with different cash flows. Operating cash flows are available to everyone and should be discounted at a rate reflecting the risk of the operating assets, blended across the financing mix. Cash flows to shareholders, after interest and debt repayment, are riskier when leverage is higher and need a higher discount rate.

### 21.1.3 FCFF versus FCFE

**Free cash flow to the firm** is the cash generated by operations after taxes on operating income and after the investment needed to sustain growth, before any payment to financiers:

```
FCFF = EBIT × (1 − t) + D&A − Capex − ΔNWC
     = NOPAT − Net reinvestment
```

**Free cash flow to equity** is what is left for shareholders after servicing debt:

```
FCFE = Net income + D&A − Capex − ΔNWC + Net borrowing
     = FCFF − Interest × (1 − t) + Net borrowing
```

Each pairs with a discount rate and a bridge:

| Approach | Cash flow | Discount rate | Output | Bridge to equity value |
|---|---|---|---|---|
| WACC / FCFF | Operating, pre-financing | WACC | Enterprise value | Subtract net debt and other claims |
| FCFE | After interest and net borrowing | Cost of equity | Equity value directly | None |
| APV | Operating, pre-financing | Unlevered cost of capital (then add financing effects) | Enterprise value | Subtract net debt and other claims |

Consistency is the cardinal rule: FCFF with WACC, FCFE with the cost of equity, never a mix. In theory, if the capital structure assumptions are the same, all three give the same equity value; in practice, they diverge because of the difficulty of modelling financing.

When should you prefer FCFE? For financial institutions, where debt is a raw material rather than a financing choice and "operating" cash flow cannot be separated from financing, equity-based methods (dividend discount, residual income, FCFE) are standard. For industrial companies with stable or targeted leverage, FCFF is usually easier because forecasting net borrowing requires a financing plan that may not exist.

### 21.1.4 The architecture of a DCF

A complete DCF has six steps: (1) understand the business and set a scenario; (2) forecast operating drivers for an explicit period; (3) translate the drivers into FCFF; (4) estimate the discount rate; (5) estimate a terminal value for the period beyond the forecast horizon; and (6) discount, sum, and bridge to equity value, then test the answer against other methods. We take these in turn, beginning with the forecast.

## 21.2 Forecasting Free Cash Flows

### 21.2.1 Forecast operating drivers, not line items

The most common weakness in practical models is that each line of the income statement is extrapolated separately: revenue grows 8 percent, costs grow 6 percent, capex grows 5 percent, and no one checks whether the implied economics make sense. A better discipline builds the forecast from a small set of **value drivers**:

1. **Revenue growth**, ideally decomposed into volume, price, and mix, or into market growth and market share.
2. **Operating margin** (EBIT or EBITDA), reflecting scale economies, input costs, and competitive pressure.
3. **Tax rate on operating income**, normally the marginal or long-run effective cash rate, not a temporarily low reported rate.
4. **Reinvestment**: capital expenditure net of depreciation, plus investment in net working capital, expressed relative to growth (a sales-to-capital ratio is convenient).

Then check outputs for plausibility: return on invested capital (ROIC), the implied sales-to-capital ratio, and the margin trajectory against peers. A forecast in which sales double with no net investment, or in which margins rise forever, fails the test.

### 21.2.2 The length of the explicit period

The explicit forecast should be long enough for the firm to reach a **steady state**: growth converging toward the long-run rate of the economy, margins stable, and returns on new investment settling at a sustainable level. For a mature industrial company, five years may suffice. For a high-growth firm, ten years or more may be needed; stopping at year five and capitalising a still-high growth rate is a classic way to overvalue.

### 21.2.3 Operating items and their traps

*Taxes.* Use taxes on EBIT, not taxes actually paid after the interest deduction: the interest tax shield is credited to the financing side, through the after-tax cost of debt in the WACC. Counting it in both the cash flows and the discount rate is double counting.

*Depreciation and capex.* In the terminal year, capex must be at least roughly equal to depreciation for a firm that is growing; otherwise the model assumes the asset base shrinks while revenue grows.

*Working capital.* Model operating working capital (receivables, inventory, less payables), excluding cash and short-term debt. Growth consumes working capital; ignoring it flatters early cash flows.

*Leases and other debt-like items.* Under IFRS 16 and similar standards, lease liabilities appear as debt and lease costs are split into depreciation and interest, which raises EBITDA. If you use post-lease EBITDA in the cash flows, treat lease liabilities as debt in the bridge and make the multiples consistent. Mixing pre-lease EBITDA with post-lease debt is a common error.

*Stock-based compensation.* It is a real cost. Excluding it from operating expense without adjusting the share count overstates value.

**Example 21.1 – Forecasting FCFF for Halden Precision Components.**
Halden has current revenue of 800 (all figures in millions). Management plans revenue growth of 10%, 9%, 8%, 7%, and 6% over the next five years. EBIT margin is 18% of revenue, the tax rate is 25%, depreciation and amortisation (D&A) is 4% of revenue, capex is 6% of revenue, and net working capital absorbs 10% of each year's incremental revenue.

*Step 1 – Revenue.* Year 1: 800 × 1.10 = 880.0. Year 2: 880.0 × 1.09 = 959.2. Year 3: 959.2 × 1.08 = 1,035.9. Year 4: 1,035.9 × 1.07 = 1,108.5. Year 5: 1,108.5 × 1.06 = 1,175.0.

*Step 2 – NOPAT.* EBIT = 18% of revenue; NOPAT = EBIT × 0.75. Year 1: EBIT = 158.4, NOPAT = 118.8. Year 2: EBIT = 172.7, NOPAT = 129.5. Year 3: EBIT = 186.5, NOPAT = 139.9. Year 4: EBIT = 199.5, NOPAT = 149.6. Year 5: EBIT = 211.5, NOPAT = 158.6.

*Step 3 – Reinvestment items.* D&A = 4% of revenue; capex = 6%; ΔNWC = 10% × (revenue change). Year 1: D&A 35.2, capex 52.8, ΔNWC = 0.10 × 80.0 = 8.0. Year 2: D&A 38.4, capex 57.6, ΔNWC = 0.10 × 79.2 = 7.9. Year 3: D&A 41.4, capex 62.2, ΔNWC = 0.10 × 76.7 = 7.7. Year 4: D&A 44.3, capex 66.5, ΔNWC = 0.10 × 72.6 = 7.3. Year 5: D&A 47.0, capex 70.5, ΔNWC = 0.10 × 66.5 = 6.7.

*Step 4 – FCFF = NOPAT + D&A − Capex − ΔNWC.* Year 1: 118.8 + 35.2 − 52.8 − 8.0 = 93.2. Year 2: 129.5 + 38.4 − 57.6 − 7.9 = 102.4. Year 3: 139.9 + 41.4 − 62.2 − 7.7 = 111.5. Year 4: 149.6 + 44.3 − 66.5 − 7.3 = 120.2. Year 5: 158.6 + 47.0 − 70.5 − 6.7 = 128.5.

| Year | Revenue | EBIT | NOPAT | D&A | Capex | ΔNWC | FCFF |
|---|---|---|---|---|---|---|---|
| 1 | 880.0 | 158.4 | 118.8 | 35.2 | 52.8 | 8.0 | 93.2 |
| 2 | 959.2 | 172.7 | 129.5 | 38.4 | 57.6 | 7.9 | 102.4 |
| 3 | 1,035.9 | 186.5 | 139.9 | 41.4 | 62.2 | 7.7 | 111.5 |
| 4 | 1,108.5 | 199.5 | 149.6 | 44.3 | 66.5 | 7.3 | 120.2 |
| 5 | 1,175.0 | 211.5 | 158.6 | 47.0 | 70.5 | 6.7 | 128.5 |

*Sanity check.* Net reinvestment in year 5 is capex − D&A + ΔNWC = 70.5 − 47.0 + 6.7 = 30.2, a reinvestment rate of 30.2 / 158.6 = 19.0% of NOPAT while revenue is still growing 6%. We will use that observation in section 21.4.

Notice that FCFF grows faster than revenue in this plan, partly because the working capital drag falls as growth slows. A reviewer should ask whether the asset base is growing fast enough to support the sales plan: cumulative net capex (capex minus D&A) over five years is only about 103, plus about 38 of working capital, to support an increase in revenue of 375.

### 21.2.4 Scenarios and the role of judgement

A single point forecast conveys false precision. Practitioners therefore build a base case and two or three scenarios (upside, downside, and sometimes a "stress" case), attach rough probabilities, and examine how value depends on the principal uncertain driver, whether it is a commodity price, regulation, or customer concentration. The point is not to produce the average of the scenarios, though that can be useful, but to find which assumptions the valuation depends on, so management can target diligence at them.

## 21.3 The Discount Rate: WACC Done Properly

### 21.3.1 Definition

The weighted average cost of capital blends the required returns of the providers of capital at market-value weights:

```
WACC = (E/V) × Ke + (D/V) × Kd × (1 − t)
```

where E and D are the market values of equity and debt, V = E + D, Ke is the cost of equity, Kd is the pre-tax cost of debt, and t is the tax rate at which interest is deductible. The cost of equity is typically estimated with the capital asset pricing model (Sharpe, Lintner):

```
Ke = Rf + βL × ERP
```

where Rf is the risk-free rate, ERP the equity risk premium, and βL the levered equity beta.

### 21.3.2 Choices that matter

*Risk-free rate.* Match the currency and the duration of the cash flows. For a long-lived business valued in a given currency, use a long-term government yield in that currency. A rate that is temporarily depressed by monetary policy needs a considered decision: either normalise it and the ERP together, or retain the market rate and a market-consistent ERP.

*Equity risk premium.* There is no single correct number; providers and academics publish estimates that differ by a percentage point or more. Whatever you choose, apply it consistently across all valuations in your firm, and report the sensitivity.

*Beta.* A single regression beta for the company is noisy. The recommended approach is a **bottom-up beta**: collect the betas of comparable firms, unlever each to remove the effect of its capital structure, take the median, and relever at the target capital structure of the firm being valued. With debt beta approximately zero and a tax shield on debt, the standard formulae are:

```
βU = βL / [1 + (1 − t) × D/E]
βL = βU × [1 + (1 − t) × D/E]
```

*Weights.* Use the **target** capital structure measured in market values, not the book values on the balance sheet, and not today's actual structure if the firm is expected to move toward a different one. Using book weights when the market value of equity is far above book understates the cost of capital.

*Cost of debt.* Use the current marginal yield the firm would pay on new long-term borrowing, not the historical coupon on existing debt.

**Example 21.2 – Estimating Halden's WACC.**
Inputs: risk-free rate 4.0%, equity risk premium 5.5%, industry unlevered beta 0.95 (median of unlevered peer betas), target debt-to-capital 25% (so D/E = 25/75 = 0.3333), pre-tax cost of debt 6.0%, tax rate 25%.

*Step 1 – Relever the beta.* βL = 0.95 × [1 + 0.75 × 0.3333] = 0.95 × 1.25 = 1.1875.

*Step 2 – Cost of equity.* Ke = 4.0% + 1.1875 × 5.5% = 4.0% + 6.531% = 10.531%.

*Step 3 – After-tax cost of debt.* 6.0% × (1 − 0.25) = 4.5%.

*Step 4 – WACC.* 0.75 × 10.531% + 0.25 × 4.5% = 7.898% + 1.125% = 9.02%, which we round to **9.0%** for the valuation.

*Contrast – a common error.* If an analyst used the unlevered cost of equity (4.0% + 0.95 × 5.5% = 9.225%) with the 75/25 weights, the result would be 0.75 × 9.225% + 0.25 × 4.5% = 6.919% + 1.125% = 8.04%. A full percentage point of understatement arises from forgetting that equity becomes riskier when the company borrows. As the next section shows, one percentage point of WACC moves Halden's value by roughly 14 to 20 percent.

### 21.3.3 The WACC is a rate for a given risk, not for the company's mood

The WACC applies to cash flows with the same risk as the company's typical operations. A division with different risk needs its own rate; an acquisition into a different industry needs a rate for the target's business, not the buyer's WACC. Using a single corporate WACC for all projects systematically overinvests in risky divisions and underinvests in safe ones.

### 21.3.4 Constant capital structure and the circularity problem

WACC-based valuation has a subtle circularity: the weights depend on value, and value depends on the WACC. In practice, one assumes a target ratio of debt to value and iterates, or uses the target ratio directly. If the capital structure is expected to change considerably over the forecast, a single WACC is inadequate and the adjusted present value approach (section 21.5.4) is preferable.

## 21.4 Terminal Value

### 21.4.1 Why terminal value dominates

A company is not expected to stop operating after the explicit forecast, so we need a **terminal value** (TV): the value, at the end of the forecast, of all cash flows thereafter. For most going concerns, the terminal value accounts for 60 to 85 percent of enterprise value. That is not a defect of DCF; it reflects that most of a firm's value lies in the far future. But it means that terminal assumptions deserve more scrutiny than the year-by-year forecast, and that a valuation presentation which hides the terminal value share is incomplete.

### 21.4.2 The Gordon growth formula

If FCFF grows at a constant rate g forever, starting from the first terminal year (year N+1):

```
TV_N = FCFF_(N+1) / (WACC − g)
```

The growth rate g must be less than the WACC and, for a perpetual rate, not greater than the long-run nominal growth of the economy in which the firm operates; otherwise the firm would eventually become larger than the economy. A common range for developed-market nominal growth is the rate of expected long-run inflation plus a small real component. Using a perpetual g of 5 or 6 percent in a developed economy is almost always a mistake, however strong the business.

### 21.4.3 The terminal cash flow must be consistent with the growth rate

The most subtle error is to take the final forecast-year FCFF and multiply by (1 + g) without asking whether that cash flow is consistent with growth of g. Growth requires reinvestment. If the final forecast year still reflects the reinvestment pattern of a faster-growth phase (or conversely, the capex of a firm in decline), the terminal FCFF is wrong. The **value-driver formula** repairs this by linking reinvestment to growth and returns:

```
Reinvestment rate = g / ROIC
FCFF_(N+1) = NOPAT_(N+1) × (1 − g / ROIC)
TV_N = NOPAT_(N+1) × (1 − g / ROIC) / (WACC − g)
```

where ROIC is the return on new invested capital in perpetuity. Two insights follow. First, growth creates value only if ROIC exceeds WACC; if ROIC = WACC, the terminal value equals NOPAT/WACC regardless of g (growth is value-neutral). Second, forecasting a high perpetual growth rate together with high perpetual ROIC assumes the firm keeps finding opportunities with excess returns forever, which in competitive markets competition tends to erode. A conservative terminal assumption sets ROIC on new investment close to WACC, while allowing the existing business to keep earning its return.

### 21.4.4 Exit multiple method

An alternative is to apply a multiple, typically EV/EBITDA, to the final-year metric:

```
TV_N = Multiple × EBITDA_N
```

The attraction is that it is anchored in market observation. The weakness is that today's multiple embeds today's growth and interest-rate environment, and it may be unrepresentative of a steady-state firm five years from now. The exit multiple also sneaks market sentiment into an "intrinsic" model. Every exit multiple should therefore be converted into an **implied perpetual growth rate**, and every Gordon terminal value into an **implied multiple**, and the pair inspected for reasonableness.

### 21.4.5 Mid-year convention

If cash flows arrive evenly through the year rather than all at year-end, discounting each year's FCFF by (1 + WACC)^(t − 0.5) is more accurate. Under the Gordon approach, the terminal value also shifts by half a year. Ignoring this understates value by roughly half a year of the discount rate, a few percent. Whichever convention you use, apply it consistently, and state it.

**Example 21.3 – Discounting Halden's cash flows and terminal value.**
Use the FCFF from Example 21.1, a WACC of 9.0% (Example 21.2), perpetual growth g = 3.0%, and a long-run ROIC on new investment of 12%.

*Step 1 – Discount factors at 9%.* Year 1: 1/1.09 = 0.9174. Year 2: 0.8417. Year 3: 0.7722. Year 4: 0.7084. Year 5: 0.6499.

*Step 2 – Present value of explicit FCFF.* 93.2 × 0.9174 = 85.5; 102.4 × 0.8417 = 86.2; 111.5 × 0.7722 = 86.1; 120.2 × 0.7084 = 85.2; 128.5 × 0.6499 = 83.5. Sum = **426.4**.

*Step 3 – Terminal NOPAT.* Year-6 revenue = 1,175.0 × 1.03 = 1,210.2. NOPAT = 1,210.2 × 0.18 × 0.75 = 163.4.

*Step 4 – Terminal reinvestment and FCFF.* Reinvestment rate = 3% / 12% = 25.0%. FCFF₆ = 163.4 × (1 − 0.25) = 122.5.

*Step 5 – Terminal value at end of year 5.* TV = 122.5 / (0.09 − 0.03) = 122.5 / 0.06 = **2,042.2**.

*Step 6 – Discount the terminal value.* PV(TV) = 2,042.2 × 0.6499 = **1,327.3**.

*Step 7 – Enterprise value.* EV = 426.4 + 1,327.3 = **1,753.7**. The terminal value is 1,327.3 / 1,753.7 = **75.7%** of EV.

*Step 8 – Implied multiples.* Year-5 EBITDA = 211.5 + 47.0 = 258.5, so the Gordon TV equals 2,042.2 / 258.5 = **7.9×** EBITDA. The EV relative to current (LTM) EBITDA of 800 × (0.18 + 0.04) = 176 is 1,753.7 / 176 = 10.0×.

*Step 9 – Mid-year convention.* Discounting each FCFF by (1.09)^(t − 0.5) gives a present value of explicit cash flows of 445.2, and a PV of the terminal value of 2,042.2 / 1.09^4.5 = 1,385.7; EV = **1,830.9**, about 4.4% higher.

**Sensitivity of EV to WACC and g.**

| WACC \ g | 2.0% | 3.0% | 4.0% |
|---|---|---|---|
| 8.0% | 1,967.7 | 2,106.2 | 2,309.6 |
| 9.0% | 1,678.2 | 1,753.7 | 1,856.0 |
| 10.0% | 1,461.4 | 1,501.9 | 1,553.1 |

(Each cell recomputes the terminal value with the value-driver formula, so the reinvestment rate moves with g.) The table shows the asymmetry typical of DCF: lowering the WACC by one point adds 352 (20%), raising it subtracts 252 (14%), and the value is more sensitive to WACC than to g in this range because higher g also requires more reinvestment.

**Example 21.4 – What growth is worth: the value-driver formula.**
A mature business has next-year NOPAT of 100 and a WACC of 9%. Compare perpetual growth of 3% under different returns on new capital.

*No growth.* TV = 100 / 0.09 = 1,111.1 (all NOPAT is paid out).

*ROIC = 9% (equal to WACC).* Reinvestment = 3/9 = 33.3%; FCFF = 66.7; TV = 66.7 / 0.06 = 1,111.1. Growth adds nothing.

*ROIC = 12%.* Reinvestment = 25%; FCFF = 75; TV = 75 / 0.06 = 1,250.0, an increase of 12.5% over no growth.

*ROIC = 20%.* Reinvestment = 15%; FCFF = 85; TV = 85 / 0.06 = 1,416.7, an increase of 27.5%.

*ROIC = 6% (below WACC).* Reinvestment = 50%; FCFF = 50; TV = 50 / 0.06 = 833.3, a 25% **loss** relative to no growth: growing destroys value when the returns on new capital are below the cost of capital.

| ROIC on new capital | Reinvestment rate | FCFF (year 1) | Terminal value | vs. no growth |
|---|---|---|---|---|
| No growth | 0% | 100.0 | 1,111.1 | n/a |
| 6% | 50.0% | 50.0 | 833.3 | −25.0% |
| 9% | 33.3% | 66.7 | 1,111.1 | 0.0% |
| 12% | 25.0% | 75.0 | 1,250.0 | +12.5% |
| 20% | 15.0% | 85.0 | 1,416.7 | +27.5% |

The managerial lesson is that growth in itself is not a source of value. A budget presentation that boasts of growth must be accompanied by evidence of returns above the cost of capital.

**Example 21.5 – Checking an exit multiple against the Gordon model.**
Suppose the bank prefers an exit multiple of 9.0× year-5 EBITDA instead of the Gordon terminal value.

*Step 1 – Terminal value.* TV = 9.0 × 258.5 = 2,326.4.

*Step 2 – Present value and EV.* PV(TV) = 2,326.4 × 0.6499 = 1,512.0; EV = 426.4 + 1,512.0 = **1,938.4**, which is 184.7 (10.5%) above the Gordon valuation.

*Step 3 – Implied perpetual growth, simple version.* Solve 128.5 × (1 + g) / (0.09 − g) = 2,326.4. This gives g = 3.3%, which looks acceptable.

*Step 4 – Implied growth, value-driver version.* Solve 158.6 × (1 + g) × (1 − g/0.12) / (0.09 − g) = 2,326.4. The solution is g ≈ 4.6%, requiring a reinvestment rate of 4.6% / 12% = 38.4%. This is above the 3% long-run growth and well above the 19% reinvestment of year 5.

*Interpretation.* The simple check was misleading because year-5 FCFF reflects a low reinvestment rate. Once reinvestment is tied to growth, the 9.0× exit multiple requires growth of about 4.6% forever, hardly credible. A multiple of 7.9× is consistent with 3% growth and 12% returns on new capital. The right course is to challenge the 9.0× multiple, not to accept it because peers trade there today.

## 21.5 From Enterprise Value to Equity Value; FCFE; and APV

### 21.5.1 The equity bridge

Once the enterprise value is known, the equity value is obtained by subtracting claims senior to the shareholders and adding assets whose cash flows were not in FCFF:

- **Debt** at market value where available (book value is typically a reasonable proxy for floating-rate or recently issued debt; for fixed-rate debt issued long ago, the difference can be material).
- **Lease liabilities**, if the cash flows exclude lease payments.
- **Preferred stock and non-controlling interests** at market value or an earnings-multiple estimate.
- **Unfunded pension deficits and other debt-like obligations**, net of tax shields.
- **Cash and marketable securities in excess of operating needs**, **equity investments in associates** (valued separately because their income is excluded from EBIT), and other non-operating assets.

Be careful about what "cash" is. Cash that the business needs to operate (minimum cash balances, cash trapped in foreign jurisdictions with repatriation taxes) should not be added at face value.

### 21.5.2 Per-share value and dilution

Divide equity value by the **diluted** share count. Options and warrants are dealt with using the treasury stock method (TSM) as an approximation, or better, by valuing them with an option model and subtracting their value from equity before dividing by basic shares. The TSM is circular, because the in-the-money status depends on the share price you are trying to determine, so it is solved by iteration.

**Example 21.6 – Bridge to a per-share value.**
From Example 21.3, EV = 1,753.7. Halden has debt of 250 and cash of 40, and 50.0 million basic shares. There are also 4.0 million options with a strike of 20.

*Step 1 – Equity value.* 1,753.7 − 250 + 40 = **1,543.7**.

*Step 2 – Basic per-share value.* 1,543.7 / 50.0 = 30.87.

*Step 3 – TSM dilution by iteration.* Start with price P = 30.87: net new shares = 4.0 × (1 − 20/30.87) = 1.41; diluted shares = 51.41; P = 1,543.7 / 51.41 = 30.03. Second pass: net new shares = 4.0 × (1 − 20/30.03) = 1.34; diluted shares = 51.34; P = 1,543.7 / 51.34 = 30.07. A third pass changes nothing material. The value per diluted share is **30.07**.

*Interpretation.* The options reduce value per share by 0.80 (2.6%), about 40 in equity value transferred to optionholders. Ignoring them would have overstated the per-share value, and the offer of 28 would have looked more clearly inadequate than it actually is.

### 21.5.3 FCFE valuation

Under the FCFE approach, we discount the cash flows available to shareholders at the cost of equity. It is natural when the firm's debt policy is a stated target, when leverage is expected to change, or for financial firms. Two points deserve emphasis: (1) the cost of equity should reflect the leverage assumed in the cash flows, and (2) the terminal FCFE must reflect the reinvestment needed to support growth, financed partly by borrowing at a consistent debt ratio.

**Example 21.7 – FCFE valuation of a small leveraged firm.**
Forecasts for a company (millions) are in the table below. The cost of equity is 11%, terminal growth is 3%, and return on equity on new investment is 14%.

| Year | Net income | D&A | Capex | ΔNWC | Net borrowing | FCFE |
|---|---|---|---|---|---|---|
| 1 | 60 | 20 | 30 | 5 | 10 | 55 |
| 2 | 66 | 21 | 31 | 5 | 10 | 61 |
| 3 | 72 | 22 | 32 | 5 | 8 | 65 |
| 4 | 77 | 23 | 33 | 4 | 6 | 69 |
| 5 | 82 | 24 | 34 | 4 | 5 | 73 |

*Step 1 – FCFE.* Year 1: 60 + 20 − 30 − 5 + 10 = 55. Year 2: 66 + 21 − 31 − 5 + 10 = 61. Year 3: 72 + 22 − 32 − 5 + 8 = 65. Year 4: 77 + 23 − 33 − 4 + 6 = 69. Year 5: 82 + 24 − 34 − 4 + 5 = 73.

*Step 2 – PV at 11%.* 55/1.11 = 49.55; 61/1.11² = 49.51; 65/1.11³ = 47.53; 69/1.11⁴ = 45.45; 73/1.11⁵ = 43.32. Sum = **235.4**.

*Step 3 – Terminal FCFE.* Net income in year 6 = 82 × 1.03 = 84.5. Equity reinvestment rate = g/ROE = 3% / 14% = 21.4%. FCFE₆ = 84.5 × (1 − 0.2143) = 66.4.

*Step 4 – Terminal value.* TV = 66.4 / (0.11 − 0.03) = 829.5. PV = 829.5 / 1.11⁵ = 829.5 / 1.6851 = 492.3.

*Step 5 – Equity value.* 235.4 + 492.3 = **727.6** (million). The terminal value is 67.7% of the total.

Note that the equity reinvestment rate combines retained earnings and net borrowing; applying the formula to FCFE implicitly assumes a stable debt ratio.

### 21.5.4 Adjusted present value (APV)

APV, developed from the Modigliani-Miller propositions, separates the operating value from the value of financing side effects:

```
APV = Value of unlevered firm (FCFF discounted at the unlevered cost of capital, Ku)
    + PV of interest tax shields
    − PV of expected financial distress and agency costs
```

It is preferable when (a) capital structure will change materially, as in an LBO or a heavily leveraged acquisition that delevers over time; (b) the debt policy is a fixed schedule rather than a target ratio; (c) there are other financing side effects such as subsidised loans; or (d) one wants to see explicitly how much value comes from the tax shield. The central choice is the discount rate for the tax shields. If debt is fixed in amount and thought to be as safe as the debt itself, discount at the cost of debt (Modigliani-Miller); if debt is rebalanced to a constant proportion of value, shields have the risk of operating assets and are discounted at Ku (Miles-Ezzell, Harris-Pringle). The correct choice depends on the financing policy, and the resulting difference in value is often modest compared with the uncertainty in cash flows.

**Example 21.8 – APV versus WACC for a stable business.**
A company has next-year FCFF of 100 growing at 2% forever, an unlevered cost of capital Ku = 9%, a pre-tax cost of debt of 6%, and a tax rate of 25%.

*Step 1 – Unlevered value.* VU = 100 / (0.09 − 0.02) = **1,428.6**.

*Step 2 – Case A: permanent fixed debt of 500.* The tax shield is perpetual, so its present value (discounted at the cost of debt) is t × D = 0.25 × 500 = **125.0**. Suppose also that the expected present value of distress costs equals a 4% probability of losing 20% of unlevered value: 0.04 × 0.20 × 1,428.6 = **11.4**. APV = 1,428.6 + 125.0 − 11.4 = **1,542.1**.

*Step 3 – Case B: debt rebalanced to 35% of value.* Under the Harris-Pringle assumption, WACC = Ku − t × Kd × D/V = 9% − 0.25 × 6% × 0.35 = 9% − 0.525% = 8.475%. Value = 100 / (0.08475 − 0.02) = 100 / 0.06475 = **1,544.4**. The implied debt is 0.35 × 1,544.4 = 540.5 and the value of the tax shield is 1,544.4 − 1,428.6 = 115.8.

*Step 4 – Check the implied cost of equity.* Equity value = 1,544.4 − 540.5 = 1,003.9. With debt at 6% and the Harris-Pringle formula: Ke = Ku + (Ku − Kd) × D/E = 9% + 3% × 540.5/1,003.9 = 10.62%. Then WACC = (1,003.9/1,544.4) × 10.62% + (540.5/1,544.4) × 4.5% = 6.900% + 1.575% = 8.475%, which reconciles exactly to the WACC used above.

*Interpretation.* The two cases give values within 0.2% of each other (1,542.1 vs 1,544.4), but they embody different assumptions: in Case A the benefit of leverage is certain but costly if distress occurs, whereas in Case B the tax shield scales with firm value. When a company intends to hold constant leverage, the WACC method and APV agree; when the debt path is irregular, APV is cleaner and easier to audit.

## 21.6 Relative Valuation and the Football Field

### 21.6.1 Trading comparables

The method has four steps: choose peers, compute their multiples, select a representative figure, and apply it to the target's corresponding metric. The most useful **enterprise-value multiples** are EV/EBITDA, EV/EBIT, and EV/Sales (for firms with temporarily depressed margins). The **equity multiples** are P/E and price-to-book (most useful for financial institutions). Rules for sound practice:

- **Match numerator and denominator.** EV multiples go with metrics before interest (EBITDA, EBIT, sales); equity multiples go with metrics after interest (net income, book equity). Dividing enterprise value by net income is meaningless.
- **Clean the metrics.** Use recurring earnings, adjust for one-time items, align fiscal year-ends, and ensure consistent accounting for leases and stock compensation.
- **Choose peers on fundamentals**, not on industry code alone: growth, margins, returns on capital, risk, and size. Five good peers beat twenty poor ones.
- **Use the median or the harmonic mean**, because multiples are right-skewed and a mean is dragged up by outliers. Harmonic means are appropriate because they average the earnings yield (the reciprocal), which is the economically additive quantity.
- **Explain the differences.** A target that trades at a discount to peers should be evaluated for lower growth, higher risk, or worse governance, not mechanically revalued up.

### 21.6.2 Precedent transactions

Transaction multiples reflect prices paid for control, including a premium for synergies and for the right to direct the business. They are useful in an M&A context and typically exceed trading multiples. But deals cluster in booms, involve different financing conditions, and often have idiosyncratic strategic motives. Use a longer window, adjust for market conditions, and treat the range as indicative.

### 21.6.3 The regression approach

A more informative alternative to averaging is to regress a multiple (for instance EV/EBITDA) on its fundamental drivers (growth, margin, ROIC) across the peer set, then predict the target's multiple from its own drivers. This forces the question of why two firms trade differently, and exposes outliers.

**Example 21.9 – Valuing Brindle Tools with trading comparables.**
Five peers provide the following data (millions): enterprise value (EV), EBITDA, net income (NI), and market capitalisation (Mkt cap).

| Peer | EV | EBITDA | EV/EBITDA | Mkt cap | NI | P/E |
|---|---|---|---|---|---|---|
| A | 2,400 | 300 | 8.00× | 1,500 | 150 | 10.0× |
| B | 3,100 | 360 | 8.61× | 2,400 | 200 | 12.0× |
| C | 1,500 | 150 | 10.00× | 900 | 60 | 15.0× |
| D | 5,200 | 560 | 9.29× | 4,200 | 330 | 12.7× |
| E | 1,800 | 240 | 7.50× | 1,300 | 110 | 11.8× |
| Median | | | 8.61× | | | 12.0× |
| Mean | | | 8.68× | | | 12.3× |

Brindle Tools has EBITDA of 220, net income of 130, debt of 300, and cash of 50 (net debt of 250).

*Step 1 – EV/EBITDA.* Low (7.5×): EV = 7.5 × 220 = 1,650; equity = 1,650 − 250 = 1,400. Median (8.61×): EV = 1,894.4 (8.6111 × 220); equity = 1,644.4. High (10.0×): EV = 2,200; equity = 1,950.

*Step 2 – P/E.* Low (10.0×): equity = 10.0 × 130 = 1,300. Median (12.0×): 1,560. High (15.0×): 1,950.

*Step 3 – Reconcile.* The median EV/EBITDA gives equity of 1,644, about 5% above the P/E-based 1,560. The gap reflects differences in leverage, depreciation, and tax between Brindle and its peers. A careful analyst would investigate rather than average the two blindly.

*Step 4 – Harmonic mean check.* The harmonic mean of the five EV/EBITDA multiples is 5 / (1/8.00 + 1/8.61 + 1/10.00 + 1/9.29 + 1/7.50) = 5 / 0.5822 = 8.59×, nearly identical to the median, so outliers are not distorting the result.

*Conclusion.* A fair equity range for Brindle on trading multiples is roughly 1,560 to 1,650, centered on about 1,600, with the overall peer range being much wider (1,300 to 1,950).

### 21.6.4 The football field

A **football field** chart summarises each method as a horizontal bar showing the low-to-high range of value per share (or EV), with a vertical line at the current price or offer. It is the standard tool in fairness opinions and board presentations. It conveys that valuation is a range, shows which methods are consistent, and highlights where an offer lies.

**Example 21.10 – Football field for Halden.**
For Halden (net debt 210, 50 million shares), convert each method's EV range to a per-share range with (EV − 210) / 50. LTM EBITDA is 176.

| Method | EV low | EV high | Per share low | Per share high |
|---|---|---|---|---|
| 52-week trading range | 1,510 | 1,810 | 26.0 | 32.0 |
| Trading comps, 7.5×–10.0× LTM EBITDA | 1,320 | 1,760 | 22.2 | 31.0 |
| Precedents, 9.0×–11.5× LTM EBITDA | 1,584 | 2,024 | 27.5 | 36.3 |
| DCF, WACC 10%–8%, g = 3% | 1,501.9 | 2,106.2 | 25.8 | 37.9 |
| DCF, exit multiple 7.5×–9.5× | 1,686.4 | 2,022.4 | 29.5 | 36.3 |

*Check on one row.* Comps: (1,320 − 210) / 50 = 22.2; (1,760 − 210) / 50 = 31.0. The median multiple of 8.61× gives EV = 1,515.6 and a per-share value of (1,515.6 − 210) / 50 = 26.1.

*Reading the chart.* The 28 offer lies inside every range except the exit-multiple DCF (low end 29.5), and it sits in the upper half of the trading comps and the lower third of the precedents and DCFs. The interpretation for the board: the offer is not a knockout, but it also offers a modest premium to the 26 median comps value and falls short of what control transactions have paid. A negotiating counter near the mid-point of the precedent range (about 32) is defensible on this evidence.

## 21.7 Valuing Start-ups and Young Companies

### 21.7.1 Why standard DCF struggles

Young firms often have negative earnings, no meaningful history, rapidly changing business models, and a high probability of failure. Standard DCF fails in three ways: (1) the cash flows in the explicit period are negative or tiny, so almost all the value is terminal; (2) the discount rate on a diversified-investor CAPM basis is far below the return venture investors need, as it ignores failure; and (3) there are valuable options (to expand, pivot, or abandon) that a single scenario ignores.

### 21.7.2 Approaches

*Venture capital method.* Estimate the exit value in a future year (using a multiple of revenue or earnings at that point), discount it at a high **target IRR** (often 30 to 50 percent for early-stage investments) to obtain the post-money value today, and back out the required ownership. The high rate is not a risk premium in the CAPM sense; it is a blend of diversifiable failure risk, illiquidity, the value added by the investor, and the optimism embedded in founders' projections.

*Scenario or probability-weighted DCF.* Specify distinct futures (failure, modest success, breakout), assign probabilities, value each, and take the expected value, discounting at a rate reflecting systematic risk only. This treats failure as a cash flow rather than burying it in the discount rate. It is conceptually cleaner and makes assumptions explicit.

*Market-based methods.* Multiples of revenue, users, or recurring revenue from comparable listed or privately financed companies. Recent financing rounds provide a reference but not an independent valuation, because they reflect negotiated terms (liquidation preferences, anti-dilution protections) that make the headline price different from the economic value of common shares.

*Real options.* Where the main value comes from the choice to scale up if the product proves itself, an options view is useful (see the chapter on real options), though in practice it often supplements rather than replaces the methods above.

### 21.7.3 Dilution and the preference stack

Founders and investors should translate a valuation into ownership only after allowing for future funding rounds and the option pool. Preferred shares carry liquidation preferences that shift the proceeds in downside outcomes, so the value of a common share is lower than the post-money valuation divided by total shares.

**Example 21.11 – The venture capital method.**
A start-up seeks 8 million. Management projects year-5 revenue of 60 million; comparable companies are acquired at 4× revenue. The investor requires a 40% IRR, and expects future rounds to dilute existing holders by 25% before exit.

*Step 1 – Exit value.* 60 × 4 = 240 million.

*Step 2 – Post-money value today.* 240 / 1.40⁵ = 240 / 5.3782 = **44.6 million**.

*Step 3 – Ownership required at exit.* 8 / 44.6 = 17.9%.

*Step 4 – Adjust for dilution.* Ownership needed today = 17.9% / (1 − 0.25) = **23.9%**.

*Step 5 – Implied valuations today.* Post-money = 8 / 0.239 = 33.5 million; pre-money = 33.5 − 8 = **25.5 million**.

*Probability-weighted cross-check.* Suppose the outcomes at year 5 are: failure (50%, value 0), modest success (35%, 120), and breakout (15%, 480). Expected exit value = 0 + 0.35 × 120 + 0.15 × 480 = 42 + 72 = 114. Discounted at a 15% rate reflecting a moderately high systematic risk: 114 / 1.15⁵ = 114 / 2.0114 = 56.7 million.

*Interpretation.* The venture capital method's 44.6 million is below the scenario value of 56.7 million, because the 40% target return partly compensates for optimism in the management case, which already assumes success. The two approaches answer different questions, and the negotiated price lies between them. The founders should note that the 25.5 million pre-money implied by the VC method rests on a single success scenario; if they argue for a higher valuation, they must argue for the scenario weights.

## 21.8 Common Errors in Valuation

The most expensive valuation mistakes are rarely arithmetical. They are conceptual, and they tend to push the answer in the direction that the author or the client prefers. A checklist for review:

1. **Inconsistent numerator and denominator.** FCFF discounted at the cost of equity; FCFE discounted at WACC; EV/EBITDA applied to give equity value without subtracting net debt; P/E applied to EBITDA.
2. **Terminal growth above the economy's growth, or reinvestment inconsistent with growth.** The value-driver formula (Example 21.4) is the remedy.
3. **Terminal value overwhelms the answer.** If terminal value is 85 percent or more of EV, the explicit period is too short or growth in the final year is not yet at steady state.
4. **Book-value weights in WACC**, historical coupon as the cost of debt, or a company-wide WACC applied to a project in a different risk class.
5. **Tax-shield double counting.** Using after-tax cost of debt in the WACC and also including interest tax shields in cash flows (or using taxes after interest in FCFF).
6. **Mismatched currency, inflation, and time.** Nominal cash flows in a high-inflation currency discounted at a real or dollar rate, or the reverse.
7. **Circular reasoning from multiples.** Choosing the exit multiple from current peers, and then using it to "confirm" the DCF against the same peers.
8. **Cash and debt-like items.** Adding all cash, even trapped cash or operating cash; forgetting pensions, leases, restructuring provisions, litigation, or minority interests.
9. **Mid-year and timing errors.** Valuation dates that do not match balance-sheet dates for net debt; forgetting to roll the discount factors forward.
10. **False precision and anchoring.** Reporting a value to four significant figures from a model whose inputs are good to one; adjusting assumptions until the DCF equals the price somebody wants.
11. **Ignoring the control premium and minority discounts consistently.** DCF with management's plan values a firm under control; trading multiples value minority stakes; do not compare them as if they were the same concept.
12. **Ignoring option value and dilution.** Using basic rather than diluted shares, and neglecting convertible debt.

The remedy is largely procedural: reconcile the DCF to multiples, document every input, test the extreme cases, and ask what the market must believe to justify today's price. Reverse engineering the price is often the most informative exercise: solve for the growth or margin that justifies the current share price, and judge whether that expectation is plausible.

## Case Study: Valuing Corvane Logistics for a Management Buy-in

*Illustrative scenario; Corvane Logistics and its executives are fictional.*

Corvane Logistics is a regional freight and warehousing company owned by a founding family that wishes to sell. It has revenue of 620 million, EBITDA of 93 million (15.0 percent margin), net debt of 210 million, and 40 million shares. An external management team, backed by a financial sponsor, is considering a buy-in and has asked its adviser, Ilse Brandt, to value the company and to recommend a bid.

Ilse builds a five-year plan. Revenue grows at 7 percent annually, driven by e-commerce volumes at three customers who together account for 41 percent of sales. Management believes EBITDA margin can expand from 15.0 to 17.5 percent through route optimisation and warehouse automation. Capex rises temporarily to 7 percent of revenue to fund automation (depreciation is 4.5 percent of revenue) and falls to 5.5 percent by year five. Tax is 26 percent. The adviser's base-case WACC is 8.6 percent, built from an unlevered beta of 0.80, a 5.5 percent equity risk premium, a 4 percent risk-free rate, and a target debt-to-capital ratio of 40 percent, reflecting what the sponsor expects to be able to raise.

The base-case DCF, with 2.5 percent terminal growth and an assumed ROIC of 11 percent on new capital, gives an enterprise value of 1,070 million, or 11.5 times LTM EBITDA. The terminal value is 82 percent of that total. Listed peers trade at 8.0 to 9.5 times EBITDA, with a median of 8.6 times; recent transactions in the sector were done at 9.5 to 11.0 times. The family's advisers have signalled an expectation of at least 11 times.

Ilse notices three things. First, the automation capex is a one-time bump, but the terminal reinvestment assumption (capex of 5.5 percent against depreciation of 4.5 percent) implies growth in the invested capital base of just 1 percent of revenue per year, which might be too low to support 2.5 percent growth. Second, the margin expansion produces more than 40 percent of the value gap between the DCF and the comps; if the margin stays at 15 percent, the DCF falls toward 9.5 times. Third, the concentration of three customers makes the value highly sensitive to the loss of any one, a risk not captured by the discount rate.

The sponsor's leverage plan envisages paying down debt from 40 percent to 25 percent of capital over five years. Ilse realises that a single WACC of 8.6 percent therefore overstates the value of the interest tax shield in later years and understates the cost of equity in the early years; she reruns the model as an APV, which reduces the value by about 3 percent. She also builds a downside scenario in which the largest customer (14 percent of revenue) leaves in year two, producing an EV of about 880 million (9.5 times LTM EBITDA).

Her recommendation is to bid at around 10 times LTM EBITDA (930 million) with an earn-out of up to 60 million payable if the margin target is achieved, rather than to pay the 11 times the sellers expect. The sponsor's partners are divided: one argues that competition from strategic bidders will force the price to 11 times anyway; another wants the earn-out structured on customer retention rather than margin.

**Discussion Questions**

1. Which of the three observations by Ilse (terminal reinvestment, margin dependence, customer concentration) would you test first, and how would you adjust the model to reflect each?
2. Why does an APV approach reduce the value when leverage is expected to fall, and when would a single WACC still be adequate?
3. Evaluate the proposed bid of 10 times LTM EBITDA with an earn-out against the football field (comps 8.0 to 9.5×, precedents 9.5 to 11.0×, DCF 11.5×, downside 9.5×). What does the structure of the offer say about who bears the risk of the margin plan?
4. The family's advisers anchor on 11 times. Construct a counter-argument using the sensitivity of EV to margin and WACC, and propose what information the sponsor should ask for in due diligence.

## Key Takeaways

- Enterprise value belongs to all capital providers; equity value is what remains after debt-like claims. Match cash flow to discount rate: FCFF with WACC, FCFE with the cost of equity.
- Forecast value drivers (growth, margin, taxes, reinvestment), then check the outputs for ROIC, sales-to-capital, and margin plausibility, rather than extrapolating line items.
- Estimate WACC with a bottom-up relevered beta, target market-value weights, and a marginal cost of debt; the typical error of using an unlevered cost of equity with debt weights understates the cost of capital.
- Terminal value usually exceeds 60 percent of enterprise value, so it merits more scrutiny than the explicit period. Perpetual growth must not exceed long-run economic growth.
- Growth creates value only when ROIC exceeds WACC; the value-driver formula ties terminal reinvestment to growth and returns.
- Every exit multiple implies a perpetual growth rate, and every Gordon terminal value implies a multiple; compare the two to detect inconsistent assumptions.
- APV is preferable to WACC when leverage will change, when debt follows a schedule, or when financing side effects are material.
- Comparables work only when peers resemble the target in growth, risk, and returns; use median or harmonic averages, and always explain differences instead of averaging them away.
- A football field communicates that valuation is a range; disagreement among methods is diagnostic, not a failure.
- Start-ups require scenario thinking: treat failure as a cash flow, use the VC method as a negotiating reference, and account for dilution and preferences.

## Review Questions

1. Explain why a multiple is a "compressed DCF" and what assumptions you import when you apply a peer's EV/EBITDA to your company.
2. Why must FCFF be taxed on EBIT rather than on earnings after interest? What would be double counted otherwise?
3. Describe how to build a bottom-up beta. Why is it preferred to a regression beta for a single company?
4. Why should the WACC use target market-value weights rather than book weights?
5. Under what conditions is the Gordon growth terminal value invalid or misleading? Give two examples.
6. Derive the value-driver formula and explain why growth is value-neutral when ROIC equals WACC.
7. Explain how you would convert an exit multiple to an implied perpetual growth rate and why this check is important.
8. When is FCFE preferred to FCFF? Name an industry in which FCFF is conceptually problematic.
9. Compare the Modigliani-Miller and Harris-Pringle treatments of the discount rate for interest tax shields. How does the financing policy determine which applies?
10. Why is the venture capital method's target IRR much higher than the CAPM cost of equity for a start-up, and what are the weaknesses of that approach?

## Problems

1. **FCFF.** A firm has next-year revenue of 500, EBIT margin of 20%, a tax rate of 30%, D&A of 25, capex of 40, and an increase in net working capital of 10. Compute FCFF.
2. **WACC.** The risk-free rate is 3.5%, the ERP 5.0%, the unlevered beta 0.80, the target D/E 0.5, the pre-tax cost of debt 5.5%, and the tax rate 25%. Compute the relevered beta, cost of equity, and WACC.
3. **Gordon DCF.** FCFF is 60 in year 1 and grows at 4% forever. The WACC is 10%. Compute enterprise value. If net debt is 150 and there are 30 million shares, compute the value per share.
4. **Two-stage DCF.** FCFF for years 1 to 3 is 40, 46, and 52. After year 3, FCFF grows at 3% forever. WACC = 9%. Compute enterprise value.
5. **Value driver.** NOPAT next year is 200, WACC = 8%, g = 2%. Compute the terminal value if ROIC on new investment is (a) 8% and (b) 16%. What is the percentage difference?
6. **Implied growth.** Year-5 EBITDA is 150, and the exit multiple is 8×. The year-5 FCFF is 70, WACC = 9%. Find the implied perpetual growth rate using TV = FCFF × (1 + g)/(WACC − g).
7. **Multiples.** A target has EBITDA of 80, net income of 30, debt of 200, and cash of 20. Peers' median EV/EBITDA is 9.0× and median P/E is 14×. Compute implied equity value from both methods and comment.
8. **VC method.** An investor puts in 5 million, expects an exit value of 150 million in 4 years, requires a 35% IRR, and expects 20% future dilution. Compute the required ownership today and the pre-money valuation.

### Answers to Selected Problems

1. EBIT = 100; NOPAT = 70; FCFF = 70 + 25 − 40 − 10 = **45**.
2. βL = 0.80 × [1 + 0.75 × 0.5] = 1.10. Ke = 3.5% + 1.10 × 5.0% = 9.0%. D/V = 0.5/1.5 = 33.3%; E/V = 66.7%. WACC = 0.6667 × 9.0% + 0.3333 × 5.5% × 0.75 = 6.0% + 1.375% = **7.375%**.
3. EV = 60 / (0.10 − 0.04) = **1,000**. Equity = 850; per share = 850 / 30 = **28.33**.
4. PV of years 1–3: 40/1.09 + 46/1.1881 + 52/1.295 = 36.70 + 38.72 + 40.15 = 115.57. TV = 52 × 1.03 / 0.06 = 892.67; PV = 892.67 / 1.295029 = 689.30. EV = **804.9**.
5. (a) TV = 200 × (1 − 0.02/0.08) / 0.06 = 150/0.06 = **2,500**. (b) TV = 200 × (1 − 0.125) / 0.06 = 175/0.06 = **2,916.7**. Difference = +16.7%.
6. TV = 8 × 150 = 1,200. Solve 70(1 + g) = 1,200(0.09 − g): 70 + 70g = 108 − 1,200g; 1,270g = 38; g = **2.99%**.
7. EV method: 9.0 × 80 = 720; equity = 720 − 180 = **540**. P/E method: 14 × 30 = **420**. The EV/EBITDA value is higher by 120 (29%), which suggests the target is more heavily burdened by depreciation, interest, or tax than its peers; examine why before choosing a value.
8. Exit post-money today = 150 / 1.35⁴ = 150 / 3.3215 = 45.16. Ownership at exit = 5 / 45.16 = 11.07%; today = 11.07% / 0.80 = **13.84%**. Post-money = 5 / 0.1384 = 36.13; pre-money = **31.1 million**.
