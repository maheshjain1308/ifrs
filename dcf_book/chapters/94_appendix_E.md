# Appendix E — Building the Model: A Spreadsheet Blueprint {.unnumbered}

This appendix describes a clean layout for a single-company FCFF DCF in a spreadsheet, with the formulas that implement each step.

## E.1 Sheet layout

| Sheet | Contents |
|-------|----------|
| **Inputs** | All assumptions: valuation date, tax rate, growth by year, margin by year, sales-to-capital, terminal g and ROIC, WACC inputs, bridge items, shares, scenario selector |
| **Historical** | Three to five years of reformulated financial statements and ratios |
| **Forecast** | Revenue, EBIT, NOPAT, reinvestment, invested capital, ROIC |
| **FCFF** | Free cash flow build and cross-check by a second method |
| **WACC** | Peer betas, un-levering, re-levering, Ke, Kd, weights, WACC |
| **DCF** | Discount factors, PVs, terminal value, EV, bridge, per-share value |
| **Sensitivity** | WACC × g and ROIC × g tables, scenario table |
| **Checks** | All reconciliation tests, with a master TRUE/FALSE flag |

Time runs left to right with the same column for each year on every sheet.

## E.2 Core formulas (for a forecast starting in column D)

Assume row labels in column B and the first forecast year in column D; previous-year column C holds the base year.

| Line | Formula (cell D) |
|------|------------------|
| Revenue | `=C_rev*(1+D_growth)` |
| EBIT | `=D_rev*D_margin` |
| Tax on EBIT | `=D_ebit*Inputs!tax` |
| NOPAT | `=D_ebit-D_tax` |
| Net reinvestment | `=(D_rev-C_rev)/Inputs!s2c` |
| FCFF | `=D_nopat-D_reinv` |
| Invested capital (closing) | `=C_ic+D_reinv` |
| ROIC (on opening capital) | `=D_nopat/C_ic` |
| Discount factor (end-year) | `=1/(1+WACC)^D_t` |
| Discount factor (mid-year) | `=1/(1+WACC)^(D_t-0.5)` |
| PV of FCFF | `=D_fcff*D_df` |

**Terminal value**

| Line | Formula |
|------|---------|
| Terminal revenue | `=H_rev*(1+g)` |
| Terminal NOPAT | `=term_rev*term_margin*(1-tax)` |
| Reinvestment rate | `=g/term_roic` |
| Terminal FCFF | `=term_nopat*(1-reinv_rate)` |
| Terminal value | `=term_fcff/(WACC-g)` |
| PV of TV | `=TV*H_df` |

**Valuation**

| Line | Formula |
|------|---------|
| Enterprise value | `=SUM(pv_range)+PV_TV` |
| Equity value | `=EV-debt+cash+investments-other_claims` |
| Per share | `=equity/diluted_shares` |

## E.3 The WACC sheet

| Line | Formula |
|------|---------|
| Unlevered beta (each peer) | `=beta/(1+(1-tax_peer)*DE_peer)` |
| Average / median | `=AVERAGE(range)` / `=MEDIAN(range)` |
| Re-levered beta | `=bu*(1+(1-tax)*target_DE)` |
| Cost of equity | `=Rf+beta_L*ERP` |
| After-tax Kd | `=Kd*(1-tax)` |
| Weights | `=D/V` with `D/V = target_DE/(1+target_DE)` |
| WACC | `=(1-wd)*Ke+wd*Kd_at` |

## E.4 Sensitivity tables

Use a two-input *data table* (What-If Analysis) with the row input cell set to terminal growth and the column input cell set to WACC. Because the WACC cell must be an *input* (not a formula) for the data table to flex it, include an "override" input: `=IF(override="",calculated_WACC,override)`. In newer spreadsheet versions the same effect can be achieved with a LAMBDA or by building the grid with explicit formulas.

## E.5 Check cells

| Check | Test |
|-------|------|
| Invested capital identity | Operating-side = financing-side at base year |
| FCFF two-way | FCFF (EBIT-based) − FCFF (net-income-based) = 0 |
| Terminal | g < Rf; WACC − g ≥ 0.03; reinvestment rate ≥ 0; ROIC_term ≥ WACC (flag if not) |
| Bridge | Every balance-sheet financing item accounted for |
| Sensitivity centre | Centre of data table = model output |
| Scenario selector | Active scenario matches the one reported |
| Circularity | Iteration flag, with convergence tolerance < 0.01% |

A master flag cell sums all checks and turns the sheet's header red if any fails.

## E.6 Common formula errors

- **Absolute vs relative references:** locking `$` on the wrong cell when copying across years.
- **Range off-by-one** in NPV/SUM ranges (omitting the last forecast year).
- **Mixing units** (₹ crore vs ₹ lakh; thousands vs millions).
- **Hard-coded numbers** inside formulas (e.g., `*0.75` instead of a tax input).
- **Inconsistent sign conventions** (outflows negative in one block, positive in another).
- **Percentages entered as whole numbers.**
- **Circular references** left unresolved or disabled.

## E.7 Documentation

Each input should show its **source** (annual report note, broker report, central-bank website, management certificate), **date**, and **rationale**. A short "assumptions memo" at the front of the workbook, written in plain language, helps reviewers.

<div class="pagebreak"></div>
