# Chapter 18: Excel Modeling Standards and Building an Integrated Three-Statement and DCF Model

*Type: Modeling. Meridian Fastener Co., the company modeled in this chapter, is fictional and illustrative; every number was constructed for teaching. All Python listings were executed and the printed output shown is the actual output. The Excel layouts and formula patterns describe the same model so that the spreadsheet and the Python replica can be reconciled cell by cell.*

*Prerequisites: Volume 1, Chapters 2 (financial statements), 6 (net present value), 11 (WACC) and 21 (enterprise valuation); Volume 3, Chapters 1 to 16, which supply the valuation questions the model is meant to answer.*

## Why modeling discipline matters

Every case in this volume ends in a number: a net present value, an equity value per share, a recommended bid. Behind each number sits a model, and behind most bad decisions sits a model that nobody could audit. A spreadsheet is the only tool in the finance function whose logic is written by one person, edited by dozens, trusted by executives and almost never tested. The result is familiar to anyone who has worked in a deal team: a balance sheet that balances because a plug was inserted at 2 a.m., a discount rate typed over a formula, a terminal value that is eighty percent of enterprise value and nobody has questioned it, a scenario switch that changes the income statement but not the cash flow.

This chapter has two purposes. The first is to give you a standard, a set of rules about structure, color, flow, checks and documentation, that makes a model readable and testable by a stranger. The second is to apply the standard in a fully worked integrated model: an income statement, balance sheet and cash flow statement that articulate (that is, are mechanically linked so that the balance sheet balances without a plug), a debt schedule with a revolver and a deliberate circular reference, three scenarios, error checks, a discounted cash flow valuation and sensitivity tables. The model is built twice, once as a specification for Excel (layout, formula patterns, settings) and once as a Python program that you can run, whose output serves as the answer key against which a spreadsheet build can be verified.

Why a Python replica of a spreadsheet model? Because an independent second implementation is the strongest test of a model that exists. If the Excel model and the Python program disagree in the third decimal place, one of them contains a mistake, and finding it teaches more than any checklist. Professional model auditors do the same thing, rebuilding key calculations independently. The replica also lets us run experiments (hundreds of scenarios, a bisection search for a break-even assumption, deliberate injection of errors to see whether the checks catch them) that would be tedious in a workbook.

By the end of the chapter you should be able to:

1. Lay out a workbook so that inputs, calculations and outputs are separate, flow is left to right and top to bottom, and every row contains one formula copied across.
2. Apply a color and formatting convention that makes inputs, formulas and links distinguishable at a glance.
3. Build a three-statement model whose balance sheet balances through the cash flow statement and a revolver, and not through a plug.
4. Handle circularity from interest on average balances in a controlled way, with a circuit breaker.
5. Build integrity checks that catch the errors that actually occur, and demonstrate that they do.
6. Construct a DCF from the statements, interpret the terminal value, and cross-check Gordon growth against an exit multiple.
7. Produce scenario and sensitivity outputs, including Excel data tables, and know their limits.

## Part I: Modeling standards

### Principles

Published modeling standards (the FAST standard is a widely cited example, and most banks and consultancies maintain internal ones) differ in detail but agree on a small number of principles. We adopt the following and refer to them by number later.

**S1. Separate inputs, calculations and outputs.** Every hard-coded number lives in an input area and appears once. Calculation sheets contain only formulas. Output sheets (summaries, charts, sensitivity tables) contain only links and formulas. The test: if you delete all the inputs, no calculation cell should contain a constant.

**S2. One formula per row.** Across the time axis, the formula in the first forecast column is copied unchanged to every other forecast column. If a row needs a different formula in one column (a first-year special case, for example), the model is restructured with a flag row instead, so that the formula is still the same everywhere. The test: select a row, press Ctrl+\ (go to row differences) and see no differences.

**S3. Consistent time axis.** The same column means the same period on every sheet. In our layout, column E is the last actual year (FY2025A) and columns F to J are FY2026E to FY2030E on every sheet. A reference from one sheet to another then always points at the same column letter, which makes audit trivial.

**S4. Flow from left to right and top to bottom.** Inputs precede calculations, which precede outputs; a formula should mostly refer to cells above and to the left of it. The exceptions (the circular interest loop, for example) are explicit and documented.

**S5. No hard-coded numbers in formulas.** The formula `=F10*1.08` embeds an assumption in a place nobody will look. Write `=F10*(1+Scenarios!F8)`. The only constants allowed in formulas are structural: 0, 1, 12 for months, 0.5 for the mid-year convention only if documented.

**S6. Units and signs are explicit and consistent.** Every row has a unit label ($m, %, days, x). Revenues and cash inflows are positive and costs and cash outflows are negative on the statements, so that subtotals are simple sums. Percentages are stored as decimals and displayed as percentages.

**S7. Checks everywhere, one master flag.** Every important identity (balance sheet balances, cash ties, roll-forwards) has a check cell; a master check on the cover sheet aggregates them and is visible from every sheet.

**S8. Simple formulas, short chains.** If a formula needs more than about three nested functions or wraps beyond one line, split it into helper rows. Avoid volatile functions (OFFSET, INDIRECT, TODAY) that recalculate on every keystroke and hide dependencies. Prefer INDEX and MATCH (or XLOOKUP) to VLOOKUP with approximate matching. Avoid merged cells, which break copy-paste, and avoid links to external workbooks.

**S9. Document as you build.** A cover sheet states purpose, version, author, units, scenario conventions, color legend, and a change log. Every assumption carries a source or a rationale in an adjacent notes column.

**S10. Protect against yourself.** Data validation on switch cells (a list of scenario names or 1 to 3), conditional formatting on checks (green when OK, red when not), locked formula cells on shared versions, and versioned file names rather than overwriting.

### Why these rules, in terms of failure modes

Each principle answers a failure that occurs often enough to have a name. *The overwritten formula* (a number typed over a formula in one column) is defeated by S2 and by the row-difference test. *The orphaned assumption* (the same growth rate typed in three places and updated in two) is defeated by S1. *The plug* (a row labelled "other" that forces assets to equal liabilities) is defeated by S7 and, more fundamentally, by building the cash flow statement from the changes in the balance sheet, so that there is nothing left to plug. *The misaligned column* (revenue for FY2027 in a column where the tax rate is FY2026) is defeated by S3. *The unit error* (thousands added to millions) is defeated by S6. *The invisible circularity* (a reference loop that was not intended and that Excel quietly resolved or reported only in the status bar) is defeated by an explicit circuit breaker and by the rule that iterative calculation is turned on only for a documented reason.

### Color and formatting conventions

Color is the cheapest audit tool. The following convention is used in many practitioner models; the specific colors matter less than consistency, and the legend must appear on the cover sheet.

| Element | Font color | Fill | Meaning |
|---|---|---|---|
| Hard-coded input (number typed by a person) | Blue | Light yellow, on key switches | Change me |
| Formula on the same sheet | Black | None | Do not overwrite |
| Link to another sheet in the same workbook | Green | None | Pulled from elsewhere |
| Link to an external workbook | Red | None | Fragile; avoid |
| Check cell (OK) | White on dark green via conditional format | | Pass |
| Check cell (error) | White on red via conditional format | | Fail |
| Section header | White on dark blue | | Navigation |
| Subtotal row | Black, bold, top border | | Sum of rows above |
| Assumption flagged for review | Black on orange | | Open question |

Number formats should be uniform: `#,##0.0;(#,##0.0);"-"` for currency amounts (negatives in parentheses, zeros as dashes so that blank-looking rows can be told from zero rows), `0.0%` for percentages, `0.0x` for multiples, and `0` for years, formatted as text-like labels (`"FY"0"E"`) so that the underlying value remains numeric. Freeze panes at the first forecast column and the header row. Group (outline) detailed schedules so that the statements can be read at one level of detail. Set a consistent column width (12 to 14 characters) so printed pages align.

The Excel shortcut worth building into habit: Ctrl+[ jumps to the precedents of a cell and Ctrl+] to its dependents; Alt+M+P and Alt+M+D trace precedents and dependents with arrows; Ctrl+` toggles formula view; F5, Special, Constants highlights all hard-coded numbers on a sheet (on a calculation sheet there should be none); and Ctrl+Shift+Enter has been replaced in modern Excel by dynamic arrays, but legacy array formulas should be avoided on shared models.

### Workbook structure

| Sheet | Contents | Contains hard-codes? |
|---|---|---|
| Cover | Purpose, version, color legend, change log, master check, scenario selector display | Text only |
| Inputs | Opening balance sheet (FY2025A), common assumptions (tax rate, depreciation rate, working-capital days, interest rates, minimum cash, payout, switches), DCF inputs (risk-free rate, beta, equity premium, target leverage, terminal growth, exit multiple) | Yes, all in blue |
| Scenarios | Three blocks (Base, Upside, Downside) of year-by-year drivers (revenue growth, COGS %, SG&A %) plus a "Live" block selected by the scenario switch | Yes (blue), plus the live block (formulas) |
| Model | Income statement, schedules (PP&E, working capital, debt and interest), cash flow statement, balance sheet, in this order, one sheet so that the flow can be audited by scrolling | No |
| DCF | Unlevered free cash flow, discount factors, terminal value, enterprise-to-equity bridge, implied multiples | No |
| Sens | Data tables or direct-formula sensitivity grids | No |
| Checks | Each check in its own row with a pass/fail flag and the aggregate | No |

The same columns are used throughout: column A is a narrow spacer, B holds row labels, C the unit, D a constant or note (for example a per-row source), E the last actual year and F to J the five forecast years. The first calculation row of every sheet carries the year in row 5 (`=E5+1` across), a period counter in row 6 (0 for FY2025A, `=E6+1` across) and a period-end date if needed.

### Named ranges

Named ranges for scalar inputs (`Tax`, `DepRate`, `CapexPct`, `ARDays`, `InvDays`, `APDays`, `DaysInYr`, `TermRate`, `RevRate`, `CashRate`, `TermAmort`, `MinCash`, `RevLimit`, `Payout`, `CircSwitch`, `Scen`, `WACC`, `TermG`, `ExitMult`, `MidYear`) make formulas readable, `=-DepRate*E40` instead of `=-Inputs!$D$12*E40`. Do not name time series (they are identified by their row and column) and do not name ranges to hide structure. The convention in this chapter is that a name always refers to a single input cell on the Inputs sheet.

## Part II: The integrated model

### The company and the architecture

Meridian Fastener Co. makes industrial fasteners and sells through distributors. At 31 December 2025 (FY2025A) it has revenue of $800.0 million, net working capital of $169.0 million, net PP&E of $400.0 million, a $200.0 million term loan, no revolver borrowings, $60.0 million of cash and 50.0 million shares outstanding. Its opening balance sheet is deliberately simple, with no goodwill, leases, deferred taxes or minorities, so that every line in the model is traceable. Extensions are left to the exercises.

| Opening balance sheet, FY2025A ($ million) | | | |
|---|---:|---|---:|
| Cash | 60.0 | Accounts payable | 61.0 |
| Accounts receivable | 120.0 | Revolver | 0.0 |
| Inventory | 110.0 | Term loan | 200.0 |
| Net PP&E | 400.0 | Shareholders' equity | 429.0 |
| **Total assets** | **690.0** | **Total liabilities and equity** | **690.0** |

The model's logic follows a fixed order, and the order is the architecture:

1. Drivers (growth, margins) produce revenue, cost of goods sold, SG&A and EBITDA.
2. Schedules produce depreciation, capex and closing PP&E; and receivables, inventory and payables, hence net working capital and its change.
3. The debt schedule produces the mandatory term-loan repayment.
4. The income statement subtracts depreciation and interest and applies tax to give net income.
5. The cash flow statement starts from net income, adds back non-cash items and subtracts investment, repayment and dividends, giving the cash position before the revolver.
6. The revolver draws or repays so that cash does not fall below a minimum; closing cash follows.
7. The balance sheet is assembled from the closing balances; equity rolls forward by net income less dividends.
8. A check compares total assets to total liabilities and equity.

The crucial discipline is step 7: nothing on the balance sheet is forced. Cash comes from the cash flow statement, PP&E from its schedule, working-capital items from the working-capital schedule, debt from the debt schedule and equity from its roll-forward. If the check shows zero, it is because the model is internally consistent, not because something was adjusted.

### Assumptions

| Assumption | Value | Excel name | Note |
|---|---:|---|---|
| Tax rate | 25% | Tax | Applied to positive pre-tax income only |
| Depreciation rate | 10% of opening net PP&E | DepRate | Declining-balance simplification |
| Capex | 6.5% of revenue | CapexPct | |
| Receivable days | 55 | ARDays | On revenue, 365-day year |
| Inventory days | 80 | InvDays | On cost of goods sold |
| Payable days | 45 | APDays | On cost of goods sold |
| Term loan rate | 6.5% | TermRate | On average balance |
| Revolver rate | 7.0% | RevRate | On average balance |
| Interest on cash | 2.0% | CashRate | On average balance |
| Term loan amortization | $30.0 million a year | TermAmort | Mandatory |
| Minimum cash | $30.0 million | MinCash | Revolver draws to maintain |
| Revolver limit | $100.0 million | RevLimit | A check, not a constraint |
| Dividend payout | 50% of net income | Payout | Paid in the year earned |
| Circularity switch | 1 | CircSwitch | 1 = average balances, 0 = opening balances |
| Shares outstanding | 50.0 million | Shares | |

Scenario drivers, one value per year from FY2026E to FY2030E:

| Driver | Scenario | FY2026E | FY2027E | FY2028E | FY2029E | FY2030E |
|---|---|---:|---:|---:|---:|---:|
| Revenue growth | Base | 8.0% | 7.0% | 6.0% | 5.0% | 4.0% |
| | Upside | 10.0% | 9.0% | 8.0% | 7.0% | 6.0% |
| | Downside | 3.0% | 1.0% | 0.0% | 1.0% | 1.0% |
| COGS % revenue | Base | 64.0% | 63.8% | 63.6% | 63.4% | 63.2% |
| | Upside | 63.6% | 63.2% | 62.8% | 62.4% | 62.0% |
| | Downside | 65.2% | 65.8% | 66.4% | 66.4% | 66.4% |
| SG&A % revenue | Base | 19.0% | 18.9% | 18.8% | 18.7% | 18.6% |
| | Upside | 18.9% | 18.7% | 18.5% | 18.3% | 18.1% |
| | Downside | 19.4% | 19.6% | 19.8% | 19.8% | 19.8% |

### The full model in Python

The program below implements steps 1 to 8 exactly as the spreadsheet will. Save it as `model_core.py`; later listings import from it. The innermost loop reproduces what Excel does when iterative calculation is enabled: it recalculates the circular block repeatedly, starting from the opening balances, until the change between passes is negligible.

```python
# model_core.py -- integrated three-statement model, Meridian Fastener Co. (illustrative)
# $ millions unless stated. Valuation date = 31 Dec 2025 (end of FY2025A).

YEARS = [2026, 2027, 2028, 2029, 2030]
N = len(YEARS)

# ---- Opening balance sheet (FY2025A) --------------------------------------
OPEN = dict(revenue=800.0, cash=60.0, ar=120.0, inv=110.0, ppe=400.0,
            ap=61.0, revolver=0.0, term=200.0, equity=429.0)

# ---- Assumptions that do not change by scenario ---------------------------
COMMON = dict(tax=0.25, dep_rate=0.10, capex_pct=0.065,
              ar_days=55, inv_days=80, ap_days=45, days=365,
              term_rate=0.065, rev_rate=0.070, cash_rate=0.020,
              term_amort=30.0, min_cash=30.0, revolver_limit=100.0,
              payout=0.50, circ=1, shares=50.0)

# ---- Scenario-specific assumptions (one list per driver, one value per year)
SCEN = {
    "Base":     dict(g=[.080, .070, .060, .050, .040],
                     cogs=[.640, .638, .636, .634, .632],
                     sga=[.190, .189, .188, .187, .186]),
    "Upside":   dict(g=[.100, .090, .080, .070, .060],
                     cogs=[.636, .632, .628, .624, .620],
                     sga=[.189, .187, .185, .183, .181]),
    "Downside": dict(g=[.030, .010, .000, .010, .010],
                     cogs=[.652, .658, .664, .664, .664],
                     sga=[.194, .196, .198, .198, .198]),
}

def build(scn="Base", bug=None, **override):
    """Return dict of lists (one entry per forecast year)."""
    a = {**COMMON, **override}
    s = SCEN[scn]
    keys = ["revenue", "cogs", "gross", "sga", "ebitda", "dep", "ebit",
            "int_term", "int_rev", "int_inc", "ebt", "taxes", "ni",
            "ar", "inv", "ap", "nwc", "dnwc", "capex", "ppe",
            "cash", "revolver", "term", "equity", "div",
            "cfo", "cfi", "cff", "netchg", "iters", "assets", "liabeq", "check"]
    r = {k: [0.0] * N for k in keys}
    p = dict(OPEN)                      # prior-year balances
    p["nwc"] = p["ar"] + p["inv"] - p["ap"]
    for i in range(N):
        rev = p["revenue"] * (1 + s["g"][i])
        cogs = rev * s["cogs"][i]
        sga = rev * s["sga"][i]
        ebitda = rev - cogs - sga
        dep = a["dep_rate"] * p["ppe"]
        ebit = ebitda - dep
        capex = a["capex_pct"] * rev
        ppe = p["ppe"] + capex - dep
        ar = rev * a["ar_days"] / a["days"]
        inv = cogs * a["inv_days"] / a["days"]
        ap = cogs * a["ap_days"] / a["days"]
        nwc = ar + inv - ap
        dnwc = nwc - p["nwc"]
        term = p["term"] - a["term_amort"]
        # --- circular block: iterate exactly as Excel's iterative calc does
        revolver, cash = p["revolver"], p["cash"]          # starting guess
        for it in range(1, 201):
            avg = (lambda o, c: (o + c) / 2) if a["circ"] else (lambda o, c: o)
            int_term = a["term_rate"] * avg(p["term"], term)
            int_rev = a["rev_rate"] * avg(p["revolver"], revolver)
            int_inc = a["cash_rate"] * avg(p["cash"], cash)
            ebt = ebit - int_term - int_rev + int_inc
            taxes = max(0.0, ebt) * a["tax"]
            ni = ebt - taxes
            div = max(0.0, a["payout"] * ni)
            cfo = ni + (0.0 if bug == "no_dep_addback" else dep) - dnwc
            cfi = -capex
            cash_pre = p["cash"] + cfo + cfi - a["term_amort"] - div
            draw = max(-p["revolver"], a["min_cash"] - cash_pre)
            new_rev, new_cash = p["revolver"] + draw, cash_pre + draw
            done = abs(new_rev - revolver) + abs(new_cash - cash) < 1e-9
            revolver, cash = new_rev, new_cash
            if done:
                break
        cff = -a["term_amort"] - div + draw
        equity = p["equity"] + ni - (0.0 if bug == "div_not_in_equity" else div)
        assets = cash + ar + inv + ppe
        liabeq = ap + revolver + term + equity
        vals = dict(revenue=rev, cogs=cogs, gross=rev - cogs, sga=sga,
                    ebitda=ebitda, dep=dep, ebit=ebit, int_term=int_term,
                    int_rev=int_rev, int_inc=int_inc, ebt=ebt, taxes=taxes,
                    ni=ni, ar=ar, inv=inv, ap=ap, nwc=nwc, dnwc=dnwc,
                    capex=capex, ppe=ppe, cash=cash, revolver=revolver,
                    term=term, equity=equity, div=div, cfo=cfo, cfi=cfi,
                    cff=cff, netchg=cfo + cfi + cff, iters=it,
                    assets=assets, liabeq=liabeq, check=assets - liabeq)
        for k, v in vals.items():
            r[k][i] = v
        p = dict(revenue=rev, cash=cash, ar=ar, inv=inv, ppe=ppe, ap=ap,
                 revolver=revolver, term=term, equity=equity, nwc=nwc)
    return r
```

A few implementation notes. The dictionary `r` holds one list per line item, so `r["ni"][2]` is FY2028E net income. The `bug` argument exists only to inject errors for the testing section later. The `override` keyword arguments let any common assumption be changed in one call, which is how the exercises run. The convergence test sums the absolute change in the revolver and in cash; the loop usually stops after six or seven passes.

### Excel layout: the Model sheet

The Model sheet is built with the following row map. Each formula shown is for column F (FY2026E) and is copied unchanged across to column J (S2). Column E holds FY2025A values, linked in green from the Inputs sheet. Costs are negative on the income statement and cash outflows are negative on the cash flow statement (S6).

| Row | Line item | Formula in F | Python key |
|---|---|---|---|
| 10 | Revenue | `=E10*(1+Scenarios!F30)` | revenue |
| 11 | Cost of goods sold | `=-F10*Scenarios!F31` | cogs |
| 12 | Gross profit | `=F10+F11` | gross |
| 13 | SG&A | `=-F10*Scenarios!F32` | sga |
| 14 | EBITDA | `=F12+F13` | ebitda |
| 15 | Depreciation | `=-DepRate*E36` | dep |
| 16 | EBIT | `=F14+F15` | ebit |
| 17 | Interest, term loan | `=-TermRate*IF(CircSwitch=1,AVERAGE(E41,F41),E41)` | int_term |
| 18 | Interest, revolver | `=-RevRate*IF(CircSwitch=1,AVERAGE(E45,F45),E45)` | int_rev |
| 19 | Interest income | `=CashRate*IF(CircSwitch=1,AVERAGE(E70,F70),E70)` | int_inc |
| 20 | Pre-tax income | `=SUM(F16:F19)` | ebt |
| 21 | Income tax | `=-MAX(0,F20)*Tax` | taxes |
| 22 | Net income | `=F20+F21` | ni |
| 26 | Accounts receivable | `=F10*ARDays/DaysInYr` | ar |
| 27 | Inventory | `=-F11*InvDays/DaysInYr` | inv |
| 28 | Accounts payable | `=-F11*APDays/DaysInYr` | ap |
| 29 | Net working capital | `=F26+F27-F28` | nwc |
| 30 | Increase in NWC | `=F29-E29` | dnwc |
| 33 | PP&E, opening | `=E36` | |
| 34 | Capex | `=CapexPct*F10` | capex |
| 35 | Depreciation | `=F15` | |
| 36 | PP&E, closing | `=SUM(F33:F35)` | ppe |
| 39 | Term loan, opening | `=E41` | |
| 40 | Repayment | `=-MIN(TermAmort,F39)` | |
| 41 | Term loan, closing | `=F39+F40` | term |
| 43 | Revolver, opening | `=E45` | |
| 44 | Draw / (repayment) | `=F67` | |
| 45 | Revolver, closing | `=F43+F44` | revolver |
| 57 | Net income | `=F22` | |
| 58 | Depreciation | `=-F15` | |
| 59 | (Increase) in NWC | `=-F30` | |
| 60 | Cash from operations | `=SUM(F57:F59)` | cfo |
| 61 | Capex | `=-F34` | |
| 62 | Cash from investing | `=F61` | cfi |
| 63 | Term loan repayment | `=F40` | |
| 64 | Dividends | `=-MAX(0,Payout*F22)` | div |
| 65 | Cash flow before revolver | `=F60+F62+F63+F64` | |
| 66 | Cash before revolver | `=E70+F65` | |
| 67 | Revolver draw / (repayment) | `=MAX(-E77,MinCash-F66)` | |
| 68 | Net change in cash | `=F65+F67` | netchg |
| 69 | Closing cash | `=E70+F68` | cash |
| 70 | Balance sheet: cash | `=F69` | cash |
| 71 | Accounts receivable | `=F26` | |
| 72 | Inventory | `=F27` | |
| 73 | Net PP&E | `=F36` | |
| 74 | Total assets | `=SUM(F70:F73)` | assets |
| 76 | Accounts payable | `=F28` | |
| 77 | Revolver | `=F45` | |
| 78 | Term loan | `=F41` | |
| 79 | Shareholders' equity | `=E79+F22+F64` | equity |
| 80 | Total liabilities and equity | `=SUM(F76:F79)` | liabeq |
| 81 | Balance check | `=ROUND(F74-F80,6)` | check |

Study three of these formulas. The revolver formula in row 67, `=MAX(-E77, MinCash-F66)`, says: the change in the revolver is whichever is larger of (a) minus the opening revolver balance (you cannot repay more than you owe) and (b) the amount needed to bring cash before the revolver up to the minimum. If cash before the revolver is above the minimum, term (b) is negative and the revolver is repaid, but never below zero; if it is below, term (b) is positive and the revolver is drawn. One formula handles draw and repayment, which is why it needs no IF statement. The equity formula in row 79 adds net income and the (negative) dividend, so nothing else touches equity. And the interest formulas use the circuit breaker discussed below.

Row 19's reference to `F70` (closing cash) together with row 18's reference to `F45` creates the circular chain: interest depends on closing balances, which depend on cash flow, which depends on net income, which depends on interest.

The assembled statements for the base case follow. The program that produced them is below; it uses a small helper module for formatting.

```python
# report.py -- print statements as fixed-width tables
from model_core import *

def row(label, vals, fmt="{:>9.1f}", opening=None):
    cells = ([fmt.format(opening)] if opening is not None else [" " * 9]) + [fmt.format(0.0 if abs(v) < 5e-5 else v) for v in vals]
    return f"{label:<28}" + "".join(cells)

def header():
    return f"{'$ millions':<28}" + "".join(f"{y:>9}" for y in ["FY2025A"] + [f"FY{y}E" for y in YEARS])

def income_statement(r):
    L = [header()]
    for lab, k, sign in [("Revenue", "revenue", 1), ("Cost of goods sold", "cogs", -1),
                         ("Gross profit", "gross", 1), ("SG&A", "sga", -1),
                         ("EBITDA", "ebitda", 1), ("Depreciation", "dep", -1),
                         ("EBIT", "ebit", 1), ("Interest, term loan", "int_term", -1),
                         ("Interest, revolver", "int_rev", -1), ("Interest income", "int_inc", 1),
                         ("Pre-tax income", "ebt", 1), ("Income tax", "taxes", -1),
                         ("Net income", "ni", 1)]:
        op = OPEN["revenue"] if k == "revenue" else None
        L.append(row(lab, [sign * v for v in r[k]], opening=op))
    return "\n".join(L)

def balance_sheet(r):
    L = [header()]
    o = OPEN
    for lab, k, op in [("Cash", "cash", o["cash"]), ("Accounts receivable", "ar", o["ar"]),
                       ("Inventory", "inv", o["inv"]), ("Net PP&E", "ppe", o["ppe"]),
                       ("Total assets", "assets", o["cash"] + o["ar"] + o["inv"] + o["ppe"]),
                       ("Accounts payable", "ap", o["ap"]), ("Revolver", "revolver", o["revolver"]),
                       ("Term loan", "term", o["term"]), ("Shareholders' equity", "equity", o["equity"]),
                       ("Total liabilities + equity", "liabeq", o["ap"] + o["revolver"] + o["term"] + o["equity"]),
                       ("Balance check", "check", 0.0)]:
        L.append(row(lab, r[k], opening=op, fmt="{:>9.1f}" if k != "check" else "{:>9.4f}"))
    return "\n".join(L)

def cash_flow(r):
    L = [header()]
    rows = [("Net income", r["ni"]), ("Depreciation", r["dep"]),
            ("(Increase) in net working capital", [-x for x in r["dnwc"]]),
            ("Cash from operations", r["cfo"]), ("Capital expenditure", r["cfi"]),
            ("Term loan repayment", [-COMMON["term_amort"]] * N),
            ("Dividends", [-x for x in r["div"]]),
            ("Revolver draw / (repayment)", [r["revolver"][i] - (OPEN["revolver"] if i == 0 else r["revolver"][i - 1]) for i in range(N)]),
            ("Net change in cash", r["netchg"]),
            ("Closing cash", r["cash"])]
    for lab, v in rows:
        L.append(row(lab, v))
    return "\n".join(L)
```

```python
from report import *
r = build("Base")
print("INCOME STATEMENT"); print(income_statement(r))
print(); print("BALANCE SHEET"); print(balance_sheet(r))
print(); print("CASH FLOW STATEMENT"); print(cash_flow(r))
print(); print("Iterations to converge each year:", r["iters"])
```

```
INCOME STATEMENT
$ millions                    FY2025A  FY2026E  FY2027E  FY2028E  FY2029E  FY2030E
Revenue                         800.0    864.0    924.5    979.9   1028.9   1070.1
Cost of goods sold                      -553.0   -589.8   -623.2   -652.4   -676.3
Gross profit                             311.0    334.7    356.7    376.6    393.8
SG&A                                    -164.2   -174.7   -184.2   -192.4   -199.0
EBITDA                                   146.9    159.9    172.5    184.2    194.8
Depreciation                             -40.0    -41.6    -43.5    -45.5    -47.6
EBIT                                     106.9    118.3    129.0    138.7    147.1
Interest, term loan                      -12.0    -10.1     -8.1     -6.2     -4.2
Interest, revolver                         0.0     -0.5     -1.6     -2.7     -3.4
Interest income                            1.0      0.7      0.6      0.6      0.6
Pre-tax income                            95.8    108.4    119.8    130.5    140.1
Income tax                               -24.0    -27.1    -30.0    -32.6    -35.0
Net income                                71.9     81.3     89.9     97.8    105.1

BALANCE SHEET
$ millions                    FY2025A  FY2026E  FY2027E  FY2028E  FY2029E  FY2030E
Cash                             60.0     35.6     30.0     30.0     30.0     30.0
Accounts receivable             120.0    130.2    139.3    147.7    155.0    161.2
Inventory                       110.0    121.2    129.3    136.6    143.0    148.2
Net PP&E                        400.0    416.2    434.6    454.9    476.3    498.2
Total assets                    690.0    703.1    733.2    769.1    804.3    837.7
Accounts payable                 61.0     68.2     72.7     76.8     80.4     83.4
Revolver                          0.0      0.0     14.9     31.8     44.4     52.3
Term loan                       200.0    170.0    140.0    110.0     80.0     50.0
Shareholders' equity            429.0    464.9    505.6    550.5    599.4    652.0
Total liabilities + equity      690.0    703.1    733.2    769.1    804.3    837.7
Balance check                  0.0000   0.0000   0.0000   0.0000   0.0000   0.0000

CASH FLOW STATEMENT
$ millions                    FY2025A  FY2026E  FY2027E  FY2028E  FY2029E  FY2030E
Net income                                71.9     81.3     89.9     97.8    105.1
Depreciation                              40.0     41.6     43.5     45.5     47.6
(Increase) in net working capital             -14.2    -12.6    -11.6    -10.2     -8.5
Cash from operations                      97.6    110.3    121.8    133.2    144.2
Capital expenditure                      -56.2    -60.1    -63.7    -66.9    -69.6
Term loan repayment                      -30.0    -30.0    -30.0    -30.0    -30.0
Dividends                                -35.9    -40.6    -44.9    -48.9    -52.5
Revolver draw / (repayment)                0.0     14.9     16.9     12.6      7.9
Net change in cash                       -24.4     -5.6      0.0      0.0      0.0
Closing cash                              35.6     30.0     30.0     30.0     30.0

Iterations to converge each year: [6, 7, 7, 7, 7]
```
