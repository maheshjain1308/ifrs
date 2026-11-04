# Chapter 5 — Free Cash Flow to the Firm

FCFF is the central input of enterprise DCF. This chapter derives it from several starting points, shows that they agree, and works through the practical complications: tax, working capital, capex, and non-cash items.

## 5.1 The definition

**FCFF = NOPAT − Net investment**

where

**Net investment = (Capex − Depreciation) + Increase in operating NWC + Increase in other operating assets (e.g., capitalised intangibles).**

Equivalently, with all items shown:

**FCFF = EBIT(1 − t) + D&A − Capex − ΔNWC**

The ingredients correspond to a simple story. The business earns operating profit; taxes are paid on it; some profit is "non-cash" (depreciation) and is added back; the business must then reinvest in fixed assets and working capital to sustain and grow. What is left is *free* — available to pay lenders and shareholders without hurting the business's operating capacity.

## 5.2 Four ways to reach FCFF

Because accounting identities link the statements, FCFF can be computed from several starting points. A professional model computes at least two as a check.

### 5.2.1 From EBIT
FCFF = EBIT(1 − t) + D&A − Capex − ΔNWC

### 5.2.2 From EBITDA
FCFF = EBITDA(1 − t) + t × D&A − Capex − ΔNWC

(The depreciation tax shield t × D&A is the only cash effect of depreciation.)

### 5.2.3 From net income
FCFF = Net income + Interest × (1 − t) + D&A − Capex − ΔNWC

(Add back after-tax interest because interest is a payment to a capital provider, so it belongs in FCFF. If there are non-cash charges beyond D&A, add them back; if there are non-operating gains, remove them.)

### 5.2.4 From cash flow from operations (CFO)
FCFF = CFO + Interest × (1 − t) − Capex

(Under Ind AS, interest paid may be classified in financing; adjust accordingly. CFO already reflects ΔNWC and non-cash items.)

**Meridian FY2026 illustration.** Suppose last year's capex was 144 (7.2% of revenue) and NWC rose by 20 (NWC grew from 180 to 200).

- From EBIT: 180 + 100 − 144 − 20 = **116**.
- From EBITDA: 340 × 0.75 + 0.25 × 100 − 144 − 20 = 255 + 25 − 144 − 20 = **116** ✔.
- From net income: 139.5 + 54 × 0.75 + 100 − 144 − 20 = 139.5 + 40.5 + 100 − 144 − 20 = **116** ✔.

All three agree. The business generated 116 of free cash for lenders and shareholders; it paid interest of 54 (40.5 after tax shield), leaving 75.5 for equity before any net borrowing.

## 5.3 Taxes in FCFF

FCFF uses **taxes on operating profit** — what the firm would pay if it were unlevered:

**Operating taxes = EBIT × t**

Not the tax actually paid. Actual taxes are lower because interest is deductible. The interest tax shield is real but it is captured in the *after-tax cost of debt* in WACC, not in FCFF. Counting it in both places double-counts it.

*Which rate, again?* Three candidates:

1. **Statutory marginal rate** — appropriate for the terminal period and for the tax shield of debt.
2. **Effective rate** — total tax expense ÷ PBT; reflects permanent differences and incentives. Good for history.
3. **Cash tax rate** — taxes actually paid ÷ PBT; reflects timing differences (deferred taxes). Appropriate for the near term where deferrals are expected to reverse slowly.

A sensible approach: near-term forecasts use cash tax guidance (with any MAT credit or loss carry-forward modelled explicitly); the rate converges linearly to the marginal rate by the terminal year.

### Tax losses and credits
If a firm has accumulated tax losses, the present value of the tax savings is an asset. Either (a) model the reduction in cash taxes year by year in FCFF, or (b) value the tax shield separately and add it in the bridge. Do not do both.

### Deferred taxes
Deferred tax liabilities that will reverse (timing differences) are not a debt-like claim if they will persist as the business grows (a perpetual deferral). Where reversal is expected, treat them as a cash outflow in the forecast or deduct their present value. The key is to *decide once* how deferred tax is handled and apply it consistently in FCFF and in the bridge.

## 5.4 Depreciation and its tax shield

Depreciation is a non-cash expense; adding it back is correct because the cash left the business in the year of the capex. But depreciation matters in two ways:

1. It reduces taxable profit (tax shield).
2. It provides a benchmark for maintenance capex.

If depreciation (accounting) differs materially from tax depreciation (written-down-value method under the Income-tax Act), the cash tax differs from book tax. A rigorous model separates the two.

**Sustainable relationship.** In steady state with growth g, capex ≈ depreciation × (1 + something). If assets last L years and grow at rate g, the steady-state ratio of capex to depreciation exceeds 1 and approximates (1 + g)^(L/2) for straight-line depreciation. For a 10-year-life, 5% growth firm this gives about 1.28. A terminal capex equal to depreciation is therefore not consistent with growth.

## 5.5 Working capital in detail

ΔNWC is the *year-on-year increase* in operating net working capital. An increase is a cash outflow.

**ΔNWC = NWC_t − NWC_(t−1)**

Using Meridian's NWC of 10% of revenue: with revenue growing from 2,000 to 2,280 (Year 1), NWC rises from 200 to 228, ΔNWC = 28 — a cash outflow.

*Which items belong?* Keep the definition consistent between history and forecast. Exclude cash, short-term borrowings, current maturities of long-term debt, dividends payable and current tax payable (although many treat tax payable as operating). Include inventory, receivables, prepaid expenses, payables, accrued expenses, customer advances.

*Working-capital seasonality.* If the balance sheet date falls at a seasonal low or high, the closing NWC misrepresents the average; adjust or use a year-average.

## 5.6 Capex: maintenance versus growth

Total capex = maintenance capex (to replace worn assets and sustain current output) + growth capex (to expand capacity).

- **Maintenance capex** is roughly depreciation adjusted for inflation in asset replacement costs.
- **Growth capex** relates to capacity additions needed for revenue growth.

For forecasting, either (a) model capex directly from capacity plans, or (b) tie reinvestment to revenue growth via a sales-to-capital ratio (Chapter 7). Method (b) automatically links growth to investment, helping avoid unrealistic growth-without-capex forecasts.

## 5.7 Other adjustments to FCFF

- **Stock-based compensation (ESOPs).** An expense that reduces EBIT; adding it back as non-cash overstates FCFF unless dilution is also deducted from value. The sound approach: treat SBC as a real operating cost (leave it deducted) and do not add it back. Dilution from *existing* outstanding options is handled in the bridge (Chapter 13).
- **Provisions** (bad debts, warranty): operating items. Changes are part of working capital or of other operating liabilities. Non-cash provisions reduce profit without cash outflow; if the provision is a true accrual of a future cash outflow, it is correct to treat it as a cost.
- **Operating lease payments** — see Chapter 4.
- **Pension and post-retirement costs** — operating service cost belongs in EBIT; the unfunded deficit is debt-like (bridge).
- **Foreign-exchange gains/losses on operating items** — retain if recurring; remove if one-off or financing-related.

## 5.8 From FCFF to claims: reconciliation

FCFF equals what is paid to or retained for capital providers:

**FCFF = Interest × (1 − t) + Net debt repayment + Dividends + Buybacks − New equity issued + Increase in cash**

(roughly; with proper treatment of the tax shield). This identity is a useful check: the sources and uses of cash must tie.

## 5.9 The first-year FCFF for Meridian

Revenue grows 14% to 2,280. EBIT margin 12.5% → EBIT = 285.0. NOPAT = 285.0 × 0.75 = 213.75. Reinvestment = (Revenue increase 280) ÷ sales-to-capital 2.0 = 140. FCFF = 213.75 − 140 = **73.75**.

Cross-check by components: capex − depreciation + ΔNWC must equal 140. With NWC at 10% of revenue, ΔNWC = 28; so net capex (capex − depreciation) = 112. If depreciation is 5% of revenue = 114, capex = 226. That is 9.9% of revenue — significant, reflecting the growth phase.

The model has not forecast capex separately; it has only imposed a *total* reinvestment consistent with growth. Later we will break it down.

| ₹ crore | FY2026A | FY2027E |
|---------|--------:|--------:|
| Revenue | 2,000.0 | 2,280.0 |
| EBIT | 240.0 | 285.0 |
| NOPAT | 180.0 | 213.75 |
| Net reinvestment | — | 140.0 |
| of which ΔNWC | — | 28.0 |
| of which net capex | — | 112.0 |
| FCFF | — | 73.75 |

## 5.10 Typical errors in FCFF

1. **Using book tax instead of tax on EBIT.** Understates tax and double-counts the interest shield.
2. **Adding back all non-cash items blindly.** Some "non-cash" items (ESOP expense, provisions) represent real economic costs.
3. **Omitting working-capital build** in a high-growth forecast.
4. **Capex below depreciation** in the terminal year with positive growth.
5. **Including interest income** on surplus cash in EBIT and also adding the cash in the bridge (double counting).
6. **Including cash flows from non-operating assets** (associates) in FCFF *and* valuing them separately.
7. **Inconsistent treatment of leases** across EBITDA, FCFF and debt.

## 5.11 Exercises

**Exercise 5.1.** EBIT = 500; tax rate 30%; depreciation 120; capex 200; NWC rose from 300 to 345. Compute FCFF.

*Solution.* NOPAT = 350; ΔNWC = 45; FCFF = 350 + 120 − 200 − 45 = **225**.

**Exercise 5.2.** From the same company: net income = 260; interest = 80. Check that FCFF from net income gives 225.

*Solution.* 260 + 80 × 0.7 + 120 − 200 − 45 = 260 + 56 + 120 − 200 − 45 = 191. This does **not** equal 225 — so the data are inconsistent: NOPAT of 350 implies EBIT − tax = 350, so net income should be 350 − 56 = 294 (not 260). Always reconcile: (EBIT − interest) × (1 − t) = (500 − 80) × 0.7 = 294. This is how a cross-check exposes an input error.

## Chapter 5 summary

- FCFF = NOPAT − net investment; NOPAT uses tax on EBIT; the interest shield is in WACC.
- FCFF can be derived from EBIT, EBITDA, net income or CFO; use two methods to check.
- Net investment = net capex + ΔNWC (+ other operating assets).
- Be explicit about ESOPs, leases, pensions, deferred taxes and tax losses.

## Review questions

1. Why is the interest tax shield excluded from FCFF?
2. Derive the EBITDA-based FCFF formula from the EBIT-based one.
3. What is the steady-state relation between capex and depreciation under growth?
4. How should ESOP cost be treated in FCFF?
5. A company's FCFF is positive but its net income is negative. Is this possible? Give an example.

<div class="pagebreak"></div>
