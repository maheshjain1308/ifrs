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

### Reading the output

Verify FY2026E by hand, as you should whenever you build a model, before trusting any later year. Revenue is 800.0 x 1.08 = 864.0. Cost of goods sold is 864.0 x 0.640 = 553.0 (553.0 to one decimal; the exact figure is 552.96) and SG&A is 864.0 x 0.190 = 164.2, so EBITDA is 146.9, a margin of 17.0 percent. Depreciation is 10 percent of opening net PP&E: 0.10 x 400.0 = 40.0, giving EBIT of 106.9. Term loan interest is 6.5 percent of the average of 200.0 and 170.0: 0.065 x 185.0 = 12.0. Interest income is 2 percent of the average of 60.0 and 35.6, which is 1.0. Pre-tax income is 95.8, tax is 24.0 and net income is 71.9.

Working capital: receivables are 864.0 x 55 / 365 = 130.2; inventory 553.0 x 80 / 365 = 121.2; payables 553.0 x 45 / 365 = 68.2. Net working capital is 130.2 + 121.2 - 68.2 = 183.2, up 14.2 from 169.0. Cash from operations is therefore 71.9 + 40.0 - 14.2 = 97.6. Capex is 6.5 percent of revenue, 56.2. After the 30.0 term loan repayment and dividends of 35.9 (half of net income), cash falls by 24.4, from 60.0 to 35.6, above the 30.0 minimum, so no revolver is needed in FY2026E.

From FY2027E the revolver is needed: the company is profitable and growing, yet distributes half its earnings and repays 30.0 of the term loan a year while investing in growth, so it borrows on the revolver (14.9 in FY2027E, rising to 52.3 by FY2030E) to meet the amortization. Total debt falls from 200.0 to 102.3 over the five years, but the mix shifts toward the more expensive revolver. That is a real finding that the model produces and that a three-line "free cash flow minus dividends" calculation would miss. The balance check row is zero in every year, and the cash flow statement's closing cash equals the balance sheet's cash by construction.

## Part III: Integrity checks and circularity

### What to check, and how

A check is a formula that returns pass or fail, written so that it fails when the model is wrong in a way that matters. The balance sheet check is necessary and not sufficient: a model can balance and still be wrong (a mislinked growth rate does not unbalance anything). A good suite therefore tests identities from several directions.

| # | Check | What it catches | Excel pattern (column F, 0 = pass) |
|---|---|---|---|
| 1 | Assets equal liabilities plus equity | Unlinked or mislinked balance sheet items; sign errors | `=IF(ABS(Model!F81)<Tol,0,1)` |
| 2 | Cash flow closing cash equals balance sheet cash | Cash flow statement built independently of the balance sheet | `=IF(ABS(Model!E70+Model!F68-Model!F70)<Tol,0,1)` |
| 3 | Equity roll-forward | Dividends or net income omitted from equity | `=IF(ABS(Model!E79+Model!F22+Model!F64-Model!F79)<Tol,0,1)` |
| 4 | PP&E roll-forward | Capex or depreciation mislinked | `=IF(ABS(Model!E73+Model!F34+Model!F15-Model!F73)<Tol,0,1)` |
| 5 | Cash at least the minimum, unless the revolver is at its limit | Revolver logic failure | `=IF(OR(Model!F70>=MinCash-Tol,Model!F77>=RevLimit-Tol),0,1)` |
| 6 | Revolver within its limit | Liquidity shortfall (a business finding, not a modeling error) | `=IF(Model!F77<=RevLimit+Tol,0,1)` |
| 7 | No negative debt balances | Over-repayment | `=IF(MIN(Model!F41,Model!F77)>=-Tol,0,1)` |
| 8 | Circularity converged | Stale iteration values | `=IF(ABS(Model!F17+TermRate*IF(CircSwitch=1,AVERAGE(Model!E41,Model!F41),Model!E41))<Tol,0,1)` |
| 9 | Subtotals recompute | Overwritten subtotals | `=IF(ABS(Model!F12-(Model!F10+Model!F11))<Tol,0,1)` |
| 10 | No error values anywhere | `#REF!`, `#DIV/0!` propagating | `=IF(SUMPRODUCT(--ISERROR(Model!F10:F81))>0,1,0)` |

The tolerance `Tol` is a named input, 0.000001. The Checks sheet puts each check in its own row, with the five forecast years across; a column at the right sums each row; a cell at the top, `=IF(SUM(F5:J14)=0,"OK","ERROR")`, is the master flag, and the Cover sheet links to it so that it is visible everywhere. Conditional formatting turns the flag green or red. Two refinements: check 6 is a business flag (the model is right, the company is short of liquidity) and deserves a different color from the pure integrity checks; and each check should have a "last tested" note.

The Python equivalent follows. It takes a model result and returns a dictionary of named pass/fail results and a master flag.

```python
# checks.py -- integrity checks that feed one master flag
from model_core import *

TOL = 1e-6

def run_checks(r, a=COMMON):
    out = {}
    out["1 Balance sheet balances"] = max(abs(x) for x in r["check"]) < TOL
    # cash flow statement ties to balance sheet cash
    prev = OPEN["cash"]; ok = True
    for i in range(N):
        ok &= abs(prev + r["netchg"][i] - r["cash"][i]) < TOL
        prev = r["cash"][i]
    out["2 Cash flow ties to balance sheet cash"] = ok
    # equity roll-forward
    prev = OPEN["equity"]; ok = True
    for i in range(N):
        ok &= abs(prev + r["ni"][i] - r["div"][i] - r["equity"][i]) < TOL
        prev = r["equity"][i]
    out["3 Equity roll-forward"] = ok
    # PP&E roll-forward
    prev = OPEN["ppe"]; ok = True
    for i in range(N):
        ok &= abs(prev + r["capex"][i] - r["dep"][i] - r["ppe"][i]) < TOL
        prev = r["ppe"][i]
    out["4 PP&E roll-forward"] = ok
    out["5 Cash never below minimum"] = min(r["cash"]) >= a["min_cash"] - TOL or \
        all(r["cash"][i] >= a["min_cash"] - TOL or r["revolver"][i] >= a["revolver_limit"] - TOL for i in range(N))
    out["6 Revolver within limit"] = max(r["revolver"]) <= a["revolver_limit"] + TOL
    out["7 No negative debt balances"] = min(min(r["revolver"]), min(r["term"])) >= -TOL
    out["8 Circularity converged"] = max(r["iters"]) < 200
    out["9 Gross profit = revenue - COGS"] = all(abs(r["gross"][i] - (r["revenue"][i] - r["cogs"][i])) < TOL for i in range(N))
    return out

def master(r, a=COMMON):
    c = run_checks(r, a)
    return all(c.values()), c
```

A test suite is only trustworthy if it has been shown to fail. The next listing runs the checks on the correct model, then deliberately injects two classic errors using the `bug` argument, one at a time: forgetting to add depreciation back in the cash flow statement, and forgetting to deduct dividends from equity. It also cuts the revolver limit to $40 million to show a business flag.

```python
from checks import *
ok, c = master(build("Base"))
print("BASE CASE: master check =", "OK" if ok else "ERROR")
for k, v in c.items(): print(f"  {k:<42}{'pass' if v else 'FAIL'}")
for bug in ["no_dep_addback", "div_not_in_equity"]:
    r = build("Base", bug=bug)
    ok, c = master(r)
    print(f"\nINJECTED BUG '{bug}': master check =", "OK" if ok else "ERROR")
    print("  balance check by year:", [round(x, 2) for x in r["check"]])
    print("  failing tests:", [k for k, v in c.items() if not v])
r = build("Base", revolver_limit=40.0)
ok, c = master(r, {**COMMON, "revolver_limit": 40.0})
print("\nRevolver limit cut to 40: master check =", "OK" if ok else "ERROR", "| failing:", [k for k, v in c.items() if not v])
print("  revolver balances:", [round(x, 1) for x in r["revolver"]])
```

```
BASE CASE: master check = OK
  1 Balance sheet balances                  pass
  2 Cash flow ties to balance sheet cash    pass
  3 Equity roll-forward                     pass
  4 PP&E roll-forward                       pass
  5 Cash never below minimum                pass
  6 Revolver within limit                   pass
  7 No negative debt balances               pass
  8 Circularity converged                   pass
  9 Gross profit = revenue - COGS           pass

INJECTED BUG 'no_dep_addback': master check = ERROR
  balance check by year: [-40.0, -81.62, -125.08, -170.57, -218.19]
  failing tests: ['1 Balance sheet balances', '6 Revolver within limit']

INJECTED BUG 'div_not_in_equity': master check = ERROR
  balance check by year: [-35.93, -76.57, -121.51, -170.43, -222.98]
  failing tests: ['1 Balance sheet balances', '3 Equity roll-forward']

Revolver limit cut to 40: master check = ERROR | failing: ['6 Revolver within limit']
  revolver balances: [0.0, 14.9, 31.8, 44.4, 52.3]
```

Three lessons. First, only the balance check caught the missing depreciation add-back: the cash flow statement still tied to the balance sheet because both were wrong in the same way. The balance sheet was out by exactly 40.0 in FY2026E, the amount of the omitted depreciation, and the gap compounds (81.62 after two years), which is itself diagnostic: an error equal to a line item points to that line item. Second, the second bug was caught by two separate checks (balance and equity roll-forward), and the failing test names tell you where to look: a failure in 3 but not in 2 suggests the problem is in equity, not in cash. Third, cutting the revolver limit does not unbalance anything, but check 6 flags that the plan is infeasible with the committed facility. A model that never says "no" is not being tested.

An extra practice used by professional auditors is the "stress test": set growth to 0 percent, or set capex to zero, or set the tax rate to 100 percent, and confirm that the checks still pass and that the result is what a calculation by hand predicts. Errors hide in the corners.

### Circular references

The circularity in this model is not an accident. Interest expense on the revolver depends on the average of the opening and closing revolver balances; the closing balance depends on the cash flow; the cash flow depends on net income; and net income depends on interest expense. The same loop exists through interest income on cash and through dividends, which depend on net income. Using average balances is more accurate than using opening balances (a company that borrows during the year pays interest on the borrowing for part of it) and is the standard choice in lending and valuation models. The cost is a loop that Excel will refuse to calculate unless iterative calculation is enabled.

**Excel settings.** Enable iterative calculation under File, Options, Formulas. Set maximum iterations to 100 and maximum change to 0.000001 (Excel's default of 0.001 is coarse). This is an application-level setting that is stored with the first workbook opened in a session, so a model that depends on it should say so prominently on the Cover sheet, and check 8 above detects a stale loop.

**The circuit breaker.** If an error value (such as `#DIV/0!` or `#VALUE!`) enters a circular loop it feeds itself and never clears, even after the cause is fixed. The remedy is a switch: the formulas in rows 17 to 19 use `IF(CircSwitch=1, AVERAGE(opening, closing), opening)`, so that setting the switch to 0 breaks the loop, flushes the error, and allows the switch to be turned back on. The Python code uses the same switch (`circ`). Do not wrap the whole loop in `IFERROR(..., 0)`: that hides the symptom and can leave the model calculating nonsense.

**Why the loop converges.** Each pass is a contraction. If the revolver balance is changed by a small amount x, interest changes by (rate / 2) x, after-tax income by (rate / 2)(1 - tax) x, and, since half of any change in income is paid out as dividends, cash before the revolver by (rate / 2)(1 - tax)(1 - payout) x, which is the change in the next pass. The factor is 0.07 / 2 x 0.75 x 0.50 = 0.0131, so each pass reduces the error by a factor of about 76, and a tolerance of 10 to the minus 9 is reached in six or seven passes. The next listing prints the iteration for FY2027E, starting from the opening balances (as Excel does) and shows the ratio of successive changes. It then compares the model with the loop on and off.

```python
from model_core import *

r = build("Base")
i = 1                                         # FY2027: first year the revolver is drawn
p = dict(cash=r["cash"][i-1], revolver=r["revolver"][i-1], term=r["term"][i-1])
term = r["term"][i]
ebit, dnwc, capex = r["ebit"][i], r["dnwc"][i], r["capex"][i]
a = COMMON
revolver, cash = p["revolver"], p["cash"]     # starting guess = opening balances
print(f"{'iter':>4}{'interest':>10}{'net income':>12}{'revolver':>10}{'cash':>8}{'change':>12}")
for it in range(1, 9):
    int_term = a["term_rate"] * (p["term"] + term) / 2
    int_rev = a["rev_rate"] * (p["revolver"] + revolver) / 2
    int_inc = a["cash_rate"] * (p["cash"] + cash) / 2
    ebt = ebit - int_term - int_rev + int_inc
    ni = ebt * (1 - a["tax"])
    div = a["payout"] * ni
    cash_pre = p["cash"] + ni + r["dep"][i] - dnwc - capex - a["term_amort"] - div
    draw = max(-p["revolver"], a["min_cash"] - cash_pre)
    new_rev = p["revolver"] + draw
    change = abs(new_rev - revolver)
    revolver, cash = new_rev, cash_pre + draw
    print(f"{it:>4}{int_term + int_rev - int_inc:>10.5f}{ni:>12.5f}{revolver:>10.5f}{cash:>8.2f}{change:>12.7f}")

print()
on, off = build("Base", circ=1), build("Base", circ=0)
print(f"{'':<28}{'circ ON':>10}{'circ OFF':>10}{'difference':>12}")
for lab, k in [("FY2027 net interest cost", None), ("FY2030 revolver", "revolver"), ("FY2030 net income", "ni"), ("FY2030 equity", "equity")]:
    if k is None:
        f = lambda x: x["int_term"][1] + x["int_rev"][1] - x["int_inc"][1]
        a_, b_ = f(on), f(off)
    else:
        a_, b_ = on[k][-1], off[k][-1]
    print(f"{lab:<28}{a_:>10.3f}{b_:>10.3f}{a_ - b_:>12.3f}")
```

```
iter  interest  net income  revolver    cash      change
   1   9.36393    81.71633  14.71120   30.00  14.7112008
   2   9.93436    81.28851  14.92511   30.00   0.2139105
   3   9.94184    81.28290  14.92792   30.00   0.0028076
   4   9.94194    81.28282  14.92796   30.00   0.0000368
   5   9.94194    81.28282  14.92796   30.00   0.0000005
   6   9.94194    81.28282  14.92796   30.00   0.0000000
   7   9.94194    81.28282  14.92796   30.00   0.0000000
   8   9.94194    81.28282  14.92796   30.00   0.0000000

                               circ ON  circ OFF  difference
FY2027 net interest cost         9.942    10.344      -0.402
FY2030 revolver                 52.315    53.393      -1.078
FY2030 net income              105.091   104.525       0.566
FY2030 equity                  651.978   650.900       1.078
```

The successive changes (14.71, 0.2139, 0.0028, 0.000037) shrink by a factor of 69 to 76 per pass, matching the theoretical 1 / 0.0131 = 76. The comparison shows the cost of the shortcut: using opening balances overstates FY2027E net interest cost by 0.402 (4.0 percent) mainly because it charges interest on the full opening term loan even though 30.0 of it is repaid during the year, and it puts FY2030E equity out by 1.078. Small in a base case; larger when debt is a bigger share of the capital structure, as in leveraged buyouts (Volume 1, Chapter 23).

Alternatives to iteration, for completeness: (i) calculate interest on opening balances (no loop, but less accurate); (ii) solve the loop algebraically (possible for a single revolver but cumbersome with several tranches); (iii) a macro that copies the interest values and pastes them as constants until they stop changing (robust but requires macros and leaves stale values if someone forgets to run it). For models that will be handed to others, a switch and clear documentation are usually the best compromise.

## Part IV: The discounted cash flow valuation

### From statements to unlevered free cash flow

A DCF values the operations of the business, independent of how they are financed (Volume 1, Chapter 21). The cash flow to be discounted is therefore unlevered free cash flow:

```
UFCF = EBIT x (1 - tax rate) + Depreciation - Capex - Increase in net working capital
```

Notice what is absent: interest, interest income, dividends, the revolver, the term loan. Financing enters the valuation in two places only: the discount rate (through the weighted average cost of capital, which reflects the interest tax shield) and the bridge from enterprise value to equity value (through net debt). A valuation that changes when you change the dividend payout is wrong; Exercise 2 demonstrates that this model passes that test.

**Excel layout, DCF sheet (columns F to J, as always).**

| Row | Line | Formula in F |
|---|---|---|
| 10 | EBIT | `=Model!F16` |
| 11 | Tax on EBIT | `=-F10*Tax` |
| 12 | NOPAT | `=F10+F11` |
| 13 | Add: depreciation | `=-Model!F15` |
| 14 | Less: capex | `=Model!F61` |
| 15 | Less: increase in NWC | `=-Model!F30` |
| 16 | Unlevered free cash flow | `=SUM(F12:F15)` |
| 17 | Discount period (years) | `=F$6-IF(MidYear=1,0.5,0)` |
| 18 | Discount factor | `=1/(1+WACC)^F17` |
| 19 | Present value of UFCF | `=F16*F18` |

WACC inputs sit on the Inputs sheet: risk-free rate 4.0 percent, equity beta 1.10, equity risk premium 5.0 percent, pre-tax cost of debt 6.5 percent, target debt-to-value 25 percent. The cost of equity is `=Rf+Beta*ERP` = 9.5 percent and WACC is `=(1-DV)*Ke+DV*Kd*(1-Tax)` = 0.75 x 9.5 percent + 0.25 x 6.5 percent x 0.75 = 8.34 percent (Volume 1, Chapter 11). Note that the WACC uses a target capital structure, not the model's own forecast leverage, which falls over the period.

Terminal value and the bridge:

| Item | Formula |
|---|---|
| Terminal value, Gordon growth | `=J16*(1+TermG)/(WACC-TermG)` |
| PV of terminal value | `=TV/(1+WACC)^J17` |
| Terminal value, exit multiple (cross-check) | `=ExitMult*Model!J14` |
| PV of exit-multiple terminal value | `=TVexit/(1+WACC)^J6` |
| Enterprise value | `=SUM(F19:J19)+PVTV` |
| Less: net debt at valuation date | `=Inputs!TermLoan+Inputs!Revolver-Inputs!Cash` |
| Equity value | `=EV-NetDebt` |
| Value per share | `=Equity/Shares` |
| Implied terminal EV/EBITDA | `=TV/Model!J14` |

Do not use Excel's NPV function with the mid-year convention (it assumes end-of-period flows and equally spaced periods starting one period out) and be careful with XNPV (it discounts on actual dates using a 365-day year). `SUMPRODUCT` over the discount-factor row, or the explicit PV row above, is transparent and auditable.

Two conventions need explaining. The **mid-year convention** discounts each year's cash flow at t - 0.5 years, on the logic that cash arrives through the year and not on the last day. It raises value by roughly half a year of discounting (about WACC / 2, here 4 percent). With a Gordon growth terminal value computed on mid-year flows, the terminal value is also discounted at N - 0.5 (the formula above uses the same J17 period); an exit-multiple terminal value, which represents a sale price at the end of year N, is discounted at N. The **valuation date** is 31 December 2025, so the net debt used is the opening balance sheet's: 200.0 + 0.0 - 60.0 = 140.0.

### The DCF in Python

```python
# dcf.py -- WACC and DCF layered on model_core
from model_core import *

def wacc(rf=0.04, erp=0.05, beta=1.10, kd=0.065, tax=0.25, dv=0.25):
    ke = rf + beta * erp
    return (1 - dv) * ke + dv * kd * (1 - tax), ke

def ufcf(r, tax=COMMON["tax"]):
    return [r["ebit"][i] * (1 - tax) + r["dep"][i] - r["capex"][i] - r["dnwc"][i]
            for i in range(N)]

def dcf(r, w, g, midyear=True, exit_mult=None, tax=COMMON["tax"],
        net_debt=OPEN["term"] + OPEN["revolver"] - OPEN["cash"], shares=COMMON["shares"]):
    f = ufcf(r, tax)
    t = [i + 1 - (0.5 if midyear else 0.0) for i in range(N)]
    pv = [f[i] / (1 + w) ** t[i] for i in range(N)]
    if exit_mult is None:                      # Gordon growth on final-year FCF
        tv = f[-1] * (1 + g) / (w - g)
        pv_tv = tv / (1 + w) ** (N - (0.5 if midyear else 0.0))
    else:                                      # exit multiple on final-year EBITDA
        tv = exit_mult * r["ebitda"][-1]
        pv_tv = tv / (1 + w) ** N
    ev = sum(pv) + pv_tv
    eq = ev - net_debt
    return dict(fcf=f, t=t, pv=pv, tv=tv, pv_tv=pv_tv, ev=ev, equity=eq,
                price=eq / shares, tv_share=pv_tv / ev,
                implied_mult=tv / r["ebitda"][-1])
```

```python
from dcf import *
r = build("Base")
w, ke = wacc()
print(f"Cost of equity {ke:.4%}; after-tax cost of debt {0.065*(1-0.25):.4%}; WACC {w:.4%}")
d = dcf(r, w, 0.025, midyear=True)
print(f"\n{'':<22}" + "".join(f"{'FY'+str(y)+'E':>10}" for y in YEARS))
print(f"{'EBIT':<22}" + "".join(f"{x:>10.1f}" for x in r["ebit"]))
print(f"{'NOPAT (EBIT x 0.75)':<22}" + "".join(f"{x*0.75:>10.1f}" for x in r["ebit"]))
print(f"{'+ Depreciation':<22}" + "".join(f"{x:>10.1f}" for x in r["dep"]))
print(f"{'- Capex':<22}" + "".join(f"{-x:>10.1f}" for x in r["capex"]))
print(f"{'- Increase in NWC':<22}" + "".join(f"{-x:>10.1f}" for x in r["dnwc"]))
print(f"{'Unlevered FCF':<22}" + "".join(f"{x:>10.2f}" for x in d["fcf"]))
print(f"{'Discount period (yrs)':<22}" + "".join(f"{x:>10.1f}" for x in d["t"]))
print(f"{'Discount factor':<22}" + "".join(f"{1/(1+w)**x:>10.4f}" for x in d["t"]))
print(f"{'PV of FCF':<22}" + "".join(f"{x:>10.2f}" for x in d["pv"]))
print(f"\nSum of PV of FCF        {sum(d['pv']):>10.2f}")
print(f"Terminal value (Gordon) {d['tv']:>10.2f}   implied EV/EBITDA {d['implied_mult']:.2f}x")
print(f"PV of terminal value    {d['pv_tv']:>10.2f}   ({d['tv_share']:.1%} of EV)")
print(f"Enterprise value        {d['ev']:>10.2f}")
print(f"Less net debt (200 - 60){140:>10.2f}")
print(f"Equity value            {d['equity']:>10.2f}")
print(f"Value per share ($)     {d['price']:>10.2f}")
print()
for mid in (True, False):
    x = dcf(r, w, 0.025, midyear=mid)
    print(f"{'Mid-year' if mid else 'End-year'} convention: EV {x['ev']:.1f}, price {x['price']:.2f}")
m = dcf(r, w, 0.025, exit_mult=9.0)
f5 = d["fcf"][-1]
g_impl = (m["tv"] * w - f5) / (m["tv"] + f5)
print(f"Exit multiple 9.0x: TV {m['tv']:.1f}, EV {m['ev']:.1f}, price {m['price']:.2f}, implied perpetual growth {g_impl:.2%}")
```

```
Cost of equity 9.5000%; after-tax cost of debt 4.8750%; WACC 8.3438%

                         FY2026E   FY2027E   FY2028E   FY2029E   FY2030E
EBIT                       106.9     118.3     129.0     138.7     147.1
NOPAT (EBIT x 0.75)         80.2      88.7      96.8     104.0     110.3
+ Depreciation              40.0      41.6      43.5      45.5      47.6
- Capex                    -56.2     -60.1     -63.7     -66.9     -69.6
- Increase in NWC          -14.2     -12.6     -11.6     -10.2      -8.5
Unlevered FCF              49.78     57.62     64.96     72.45     79.92
Discount period (yrs)        0.5       1.5       2.5       3.5       4.5
Discount factor           0.9607    0.8867    0.8184    0.7554    0.6972
PV of FCF                  47.83     51.09     53.17     54.73     55.72

Sum of PV of FCF            262.54
Terminal value (Gordon)    1401.81   implied EV/EBITDA 7.20x
PV of terminal value        977.40   (78.8% of EV)
Enterprise value           1239.94
Less net debt (200 - 60)    140.00
Equity value               1099.94
Value per share ($)          22.00

Mid-year convention: EV 1239.9, price 22.00
End-year convention: EV 1191.2, price 21.02
Exit multiple 9.0x: TV 1752.8, EV 1436.7, price 25.93, implied perpetual growth 3.62%
```

### Interpreting the valuation

The base case value is $22.00 per share on an enterprise value of $1,239.9 million, which is 8.4 times FY2026E EBITDA of 146.9 and 6.4 times FY2030E EBITDA. Several features deserve scrutiny, because they are the questions an investment committee would ask.

**Terminal value dominates.** The present value of the terminal value is 977.4, or 78.8 percent of enterprise value, so the five forecast years explain only about a fifth of the value. This is normal for a growing business with a short explicit forecast, but it means the answer is mainly a statement about the terminal growth rate and WACC. The sensitivity tables in Part V quantify this.

**The implied exit multiple.** The Gordon growth terminal value of 1,401.8 equals 7.20 times FY2030E EBITDA. If peers trade at 9.0 times, the exit-multiple method gives a terminal value of 1,752.8 and a value of $25.93, $3.93 per share higher. The two methods answer different questions: Gordon growth asks what the cash flows are worth if growth fades to 2.5 percent, while the multiple asks what a buyer would pay. When they diverge, one of the assumptions (growth, WACC, the multiple) is out of line. Here, a 9.0 times exit multiple implies perpetual growth of 3.62 percent on end-year timing (3.43 percent on the mid-year Gordon convention used in the model, see Exercise 3), which is above any reasonable long-run nominal growth rate for a mature fastener business. The sensible reading is that the 9.0 times multiple would be paid for a business with better returns on incremental capital, or in a more favorable credit market, than Meridian's.

**Terminal cash flow quality.** The model's terminal cash flow is simply FY2030E UFCF grown at 2.5 percent. But FY2030E reflects 4.0 percent growth, so its working-capital investment (8.5) and capex (69.6, versus depreciation of 47.6) support faster growth than the terminal period assumes. A more careful method normalizes the terminal year with the value-driver formula: reinvestment equals growth divided by the return on new invested capital (RONIC). Exercise 6 does this: if new investment only earns the cost of capital (RONIC equal to WACC), the value falls to $21.35; if it earns 12 percent, it rises to $23.82. The as-built $22.00 lies between, which is reassuring but not a substitute for stating the assumption.

**Mid-year versus end-year.** The end-year convention gives $21.02 against $22.00. The difference, 4.7 percent, is mechanical and should be a visible switch, not a buried assumption.

## Part V: Scenarios, data tables and sensitivity

### Scenario switch

The scenario selector is one input cell, `Scen`, restricted by data validation to 1, 2 or 3. On the Scenarios sheet, each driver has three input rows (Base, Upside, Downside) and one live row that feeds the Model sheet:

| Row | Content | Formula in F |
|---|---|---|
| 8 to 10 | Base: growth, COGS %, SG&A % | Inputs (blue) |
| 14 to 16 | Upside: growth, COGS %, SG&A % | Inputs (blue) |
| 20 to 22 | Downside: growth, COGS %, SG&A % | Inputs (blue) |
| 30 | Live revenue growth | `=CHOOSE(Scen,F8,F14,F20)` |
| 31 | Live COGS % | `=CHOOSE(Scen,F9,F15,F21)` |
| 32 | Live SG&A % | `=CHOOSE(Scen,F10,F16,F22)` |

`CHOOSE` is transparent and fast. `INDEX(F8:F20, ...)` with computed offsets or `OFFSET` are more compact but harder to audit (S8). The key discipline is that every scenario-dependent driver goes through a live row; a scenario that changes revenue but not margins, because one driver was hard-wired, is a common error. The Python equivalent is the `SCEN` dictionary and the `scn` argument.

### Data tables

A one- or two-variable **data table** (Data, What-If Analysis, Data Table) recalculates the whole workbook for each combination of input values and records one output. For the two-way table of value per share against WACC and terminal growth: put the output reference (`=DCF!price`) in the top-left corner cell, the growth values across the top row, the WACC values down the left column, select the block, and specify the row input cell (`TermG`) and the column input cell (`WACC`). Excel fills the interior with `{=TABLE(TermG,WACC)}`.

Three limitations matter. The input cells must be on the same sheet as the table (so, in practice, put the table on the sheet holding the inputs, or put copies of the inputs on the Sens sheet and make the model read them). Data tables slow a workbook sharply and interact badly with iterative calculation, since every cell of the table triggers a full iterative recalculation; set Calculation to "Automatic except data tables" and press F9 when you want the table refreshed. And a table that varies WACC must vary the cell the DCF actually reads: if WACC is a formula (as above), you must overwrite it with an input-driven override, or the table will vary nothing.

For these reasons many practitioners prefer **direct-formula grids** for DCF sensitivity. Because UFCF does not depend on WACC or growth, value per share can be written as one formula in each grid cell, using the UFCF and discount-period rows already computed:

```
=( SUMPRODUCT(DCF!$F$16:$J$16 / (1+$B20)^DCF!$F$17:$J$17)
   + DCF!$J$16*(1+C$19)/($B20-C$19) / (1+$B20)^DCF!$J$17
   - NetDebt ) / Shares
```

with WACC values in column B and growth values in row 19. This recalculates instantly, has no iterative-calculation problem and can be audited like any other formula. It cannot, of course, vary operating assumptions that change UFCF itself; for those (a margin sensitivity, for example) a data table, or repeated runs of a macro, is required. The Python replica handles both uniformly because it simply calls the model again.

The listing below produces the two sensitivity grids, the scenario summary, a probability-weighted value, and a one-at-a-time sensitivity (sometimes called a tornado analysis) around the base case.

```python
import copy
from dcf import *
from checks import master
import model_core

w0, _ = wacc()
base = build("Base")

# ---- 1. Two-way data table: value per share, WACC x terminal growth --------
waccs = [w0 - 0.01, w0 - 0.005, w0, w0 + 0.005, w0 + 0.01]
gs = [0.015, 0.020, 0.025, 0.030, 0.035]
print("Value per share ($): rows = WACC, columns = terminal growth")
print(f"{'WACC':>8}" + "".join(f"{g:>9.1%}" for g in gs))
for w in waccs:
    print(f"{w:>8.2%}" + "".join(f"{dcf(base, w, g)['price']:>9.2f}" for g in gs))

print("\nValue per share ($): rows = WACC, columns = exit EV/EBITDA multiple")
ms = [7.0, 8.0, 9.0, 10.0, 11.0]
print(f"{'WACC':>8}" + "".join(f"{m:>9.1f}x" for m in ms))
for w in waccs:
    print(f"{w:>8.2%}" + "".join(f"{dcf(base, w, 0.025, exit_mult=m)['price']:>10.2f}" for m in ms))

# ---- 2. Scenario summary ---------------------------------------------------
print("\nScenario summary (WACC 8.34%, g 2.5%, mid-year)")
hdr = f"{'':<26}" + "".join(f"{s:>11}" for s in SCEN)
print(hdr)
res = {s: build(s) for s in SCEN}
dd = {s: dcf(res[s], w0, 0.025) for s in SCEN}
def line(lab, f, fmt="{:>11.1f}"):
    print(f"{lab:<26}" + "".join(fmt.format(f(s)) for s in SCEN))
line("FY2030 revenue", lambda s: res[s]["revenue"][-1])
line("FY2030 EBITDA", lambda s: res[s]["ebitda"][-1])
line("FY2030 EBITDA margin %", lambda s: 100 * res[s]["ebitda"][-1] / res[s]["revenue"][-1])
line("FY2030 net income", lambda s: res[s]["ni"][-1])
line("Peak revolver", lambda s: max(res[s]["revolver"]))
line("Enterprise value", lambda s: dd[s]["ev"])
line("Value per share ($)", lambda s: dd[s]["price"], "{:>11.2f}")
line("Implied TV EV/EBITDA (x)", lambda s: dd[s]["implied_mult"], "{:>11.2f}")
print(f"{'Master check':<26}" + "".join(f"{('OK' if master(res[s])[0] else 'ERROR'):>11}" for s in SCEN))
pw = {"Base": 0.5, "Upside": 0.25, "Downside": 0.25}
ev_pw = sum(pw[s] * dd[s]["price"] for s in SCEN)
print(f"\nProbability-weighted value per share (25/50/25): {ev_pw:.2f}")

# ---- 3. One-at-a-time shocks around the base case (tornado) ---------------
def price_with(mod=None, w=w0, g=0.025):
    saved = copy.deepcopy(model_core.SCEN)
    try:
        if mod: mod(model_core.SCEN["Base"])
        return dcf(build("Base"), w, g)["price"]
    finally:
        model_core.SCEN.clear(); model_core.SCEN.update(saved)
b = price_with()
shocks = [("COGS % of revenue +1 pt, every year", lambda s: s.update(cogs=[x + 0.01 for x in s["cogs"]])),
          ("Revenue growth -1 pt, every year",   lambda s: s.update(g=[x - 0.01 for x in s["g"]])),
          ("SG&A % of revenue +1 pt",             lambda s: s.update(sga=[x + 0.01 for x in s["sga"]]))]
print(f"\nBase value per share {b:.2f}")
for lab, m in shocks:
    v = price_with(m); print(f"  {lab:<38}{v:>7.2f}  ({v - b:+.2f})")
v = price_with(w=w0 + 0.01); print(f"  {'WACC +1 pt':<38}{v:>7.2f}  ({v - b:+.2f})")
v = price_with(g=0.015);     print(f"  {'Terminal growth -1 pt':<38}{v:>7.2f}  ({v - b:+.2f})")
```

```
Value per share ($): rows = WACC, columns = terminal growth
    WACC     1.5%     2.0%     2.5%     3.0%     3.5%
   7.34%    22.76    24.76    27.17    30.13    33.87
   7.84%    20.72    22.38    24.34    26.71    29.63
   8.34%    18.98    20.37    22.00    23.93    26.26
   8.84%    17.48    18.66    20.03    21.63    23.53
   9.34%    16.17    17.18    18.34    19.69    21.27

Value per share ($): rows = WACC, columns = exit EV/EBITDA multiple
    WACC      7.0x      8.0x      9.0x     10.0x     11.0x
   7.34%     21.71     24.44     27.18     29.91     32.64
   7.84%     21.21     23.88     26.55     29.22     31.89
   8.34%     20.72     23.32     25.93     28.54     31.15
   8.84%     20.24     22.79     25.34     27.89     30.44
   9.34%     19.77     22.26     24.76     27.25     29.74

Scenario summary (WACC 8.34%, g 2.5%, mid-year)
                                 Base     Upside   Downside
FY2030 revenue                 1070.1     1175.0      849.0
FY2030 EBITDA                   194.8      233.8      117.2
FY2030 EBITDA margin %           18.2       19.9       13.8
FY2030 net income               105.1      133.6       48.6
Peak revolver                    52.3       49.2       65.1
Enterprise value               1239.9     1489.9      693.3
Value per share ($)             22.00      27.00      11.07
Implied TV EV/EBITDA (x)         7.20       7.32       6.30
Master check                       OK         OK         OK

Probability-weighted value per share (25/50/25): 20.52

Base value per share 22.00
  COGS % of revenue +1 pt, every year     19.41  (-2.59)
  Revenue growth -1 pt, every year        21.71  (-0.29)
  SG&A % of revenue +1 pt                 19.44  (-2.56)
  WACC +1 pt                              18.34  (-3.65)
  Terminal growth -1 pt                   18.98  (-3.02)
```

### What the sensitivities say

**WACC and growth.** Value per share ranges from $16.17 (WACC 9.34 percent, growth 1.5 percent) to $33.87 (7.34 percent, 3.5 percent), a factor of two. A 50 basis point change in WACC moves value by about $2.0 to $2.8 around the base case and a 50 basis point change in terminal growth by about $1.6 to $1.9. Because the two interact (the growth effect is larger when WACC is lower), a table is the right display and a single number is not.

**Exit multiple.** At the base WACC, the value ranges from $20.72 at 7.0 times to $31.15 at 11.0 times, about $2.60 per turn. The base-case Gordon value of $22.00 corresponds to an exit multiple of roughly 7.5 times on the exit-multiple method's timing (the Gordon terminal value itself is 7.2 times): one reason to be cautious about quoting a DCF value alongside a peer multiple without reconciling them.

**Scenarios.** Value per share is $22.00 in the base case, $27.00 in the upside and $11.07 in the downside. The downside value is half the base value although revenue in FY2030E is only 21 percent lower (849.0 against 1,070.1), because the margin squeeze (EBITDA margin 13.8 percent against 18.2 percent) flows entirely to profit and the lower growth releases less value. Operating leverage, in other words, is doing the work. The weights of 25, 50 and 25 percent give a probability-weighted value of $20.52, below the base case, because the downside is further from the base than the upside. A model whose "base case" is also its expected case is rare.

**Drivers.** One percentage point on the COGS ratio is worth $2.59 per share and one on SG&A $2.56, very similar and close to the effect of a 1 point rise in WACC ($3.65) or a 1 point fall in terminal growth ($3.02). The surprise is revenue growth: cutting growth by 1 point in every year costs only $0.29 per share. The reason is economic: with a return on new capital close to the cost of capital, growth consumes about as much cash (capex and working capital) as it creates, so more growth adds little value. This is the intuition of Volume 1, Chapter 21 and of the value-driver formula in Exercise 6, and it is a useful reminder that a model that shows revenue growth as its main lever may be disguising what actually matters.

## Part VI: Exercises with solutions

Each exercise can be done in the Python model by changing one argument, and in Excel by changing one input; the Excel result must match the Python result. The output of the program that solves Exercises 1 to 5 is shown after the exercises.

**Exercise 1 (liquidity policy).** The treasurer wants a minimum cash balance of $50 million instead of $30 million. What happens to the revolver? Does the model still pass its checks?

**Exercise 2 (financing neutrality).** Cut the payout ratio from 50 to 30 percent. What happens to the FY2030E revolver and equity? What happens to the DCF value?

**Exercise 3 (goal seek).** What terminal growth rate makes the Gordon-growth value per share equal to the value obtained from a 9.0 times exit multiple? Why does it differ from the 3.62 percent computed in Part IV?

**Exercise 4 (working capital).** Receivable days rise from 55 to 65 as the company extends terms to win share. What is the effect on cash, on the peak revolver and on value per share?

**Exercise 5 (tax linkage).** The tax rate falls from 25 to 21 percent. What is the new value per share? What mistake would a modeler make if the tax rate in the DCF were typed as a constant?

**Exercise 6 (normalized terminal year).** Replace the terminal cash flow with a value-driver version, FCF = NOPAT x (1 - g / RONIC), where NOPAT is FY2030E NOPAT grown at g. Compute value per share with RONIC equal to WACC and with RONIC of 12 percent.

**Exercise 7 (Excel only).** Make the revolver limit a hard constraint rather than a check: rewrite row 67. What happens to the balance sheet when the constraint binds, and what must you add to keep the model balanced?

```python
from dcf import *
from checks import master
w0, _ = wacc()
base = build("Base"); p0 = dcf(base, w0, 0.025)["price"]

# Exercise 1: raise minimum cash from 30 to 50
r1 = build("Base", min_cash=50.0)
print("Ex1 min cash 50: closing cash", [round(x, 1) for x in r1["cash"]], "| revolver", [round(x, 1) for x in r1["revolver"]],
      "| master", "OK" if master(r1, {**COMMON, "min_cash": 50.0})[0] else "ERROR")
print("    value per share", round(dcf(r1, w0, 0.025)["price"], 2), "(unchanged: financing does not enter UFCF)")

# Exercise 2: payout 30% instead of 50%
r2 = build("Base", payout=0.30)
print("Ex2 payout 30%: FY2030 revolver", round(r2["revolver"][-1], 1), "equity", round(r2["equity"][-1], 1),
      "| value per share", round(dcf(r2, w0, 0.025)["price"], 2))

# Exercise 3: goal seek - terminal growth that equates Gordon value with the 9.0x exit-multiple value
target = dcf(base, w0, 0.025, exit_mult=9.0)["price"]
lo, hi = 0.0, 0.06
for _ in range(60):
    mid = (lo + hi) / 2
    if dcf(base, w0, mid)["price"] < target: lo = mid
    else: hi = mid
print(f"Ex3 target price {target:.2f}; goal-seek terminal growth = {mid:.4%}")

# Exercise 4: receivable days from 55 to 65
r4 = build("Base", ar_days=65)
print("Ex4 AR days 65: FY2026 cash", round(r4["cash"][0], 1), "peak revolver", round(max(r4["revolver"]), 1),
      "value per share", round(dcf(r4, w0, 0.025)["price"], 2), f"({dcf(r4, w0, 0.025)['price'] - p0:+.2f})")

# Exercise 5: tax rate sensitivity (must change both the statements and the DCF)
r5 = build("Base", tax=0.21)
print("Ex5 tax 21%: FY2030 net income", round(r5["ni"][-1], 1), "value per share", round(dcf(r5, w0, 0.025, tax=0.21)["price"], 2))
```

```
Ex1 min cash 50: closing cash [50.0, 50.0, 50.0, 50.0, 50.0] | revolver [14.6, 35.4, 52.6, 65.7, 74.0] | master OK
    value per share 22.0 (unchanged: financing does not enter UFCF)
Ex2 payout 30%: FY2030 revolver 0.0 equity 746.5 | value per share 22.0
Ex3 target price 25.93; goal-seek terminal growth = 3.4348%
Ex4 AR days 65: FY2026 cash 30.0 peak revolver 84.8 value per share 21.18 (-0.82)
Ex5 tax 21%: FY2030 net income 111.3 value per share 23.85
```

```python
from dcf import *
w, _ = wacc(); g = 0.025
r = build("Base"); d = dcf(r, w, g)
# Normalized terminal-year free cash flow: reinvestment = g / RONIC, with RONIC = WACC (growth adds no value)
nopat_T = r["ebit"][-1] * (1 + g) * (1 - COMMON["tax"])
for ronic, lab in [(w, "RONIC = WACC"), (0.12, "RONIC = 12%")]:
    f_T = nopat_T * (1 - g / ronic)
    tv = f_T / (w - g)
    pv_tv = tv / (1 + w) ** (N - 0.5)
    ev = sum(d["pv"]) + pv_tv
    print(f"{lab:<14} terminal FCF {f_T:7.2f}  TV {tv:8.1f}  EV {ev:8.1f}  price {(ev - 140) / 50:6.2f}  implied TV/EBITDA {tv / r['ebitda'][-1]:.2f}x")
print(f"{'Model as built':<14} terminal FCF {d['fcf'][-1] * (1 + g):7.2f}  TV {d['tv']:8.1f}  EV {d['ev']:8.1f}  price {d['price']:6.2f}  implied TV/EBITDA {d['implied_mult']:.2f}x")
```

```
RONIC = WACC   terminal FCF   79.22  TV   1355.6  EV   1207.7  price  21.35  implied TV/EBITDA 6.96x
RONIC = 12%    terminal FCF   89.54  TV   1532.3  EV   1330.9  price  23.82  implied TV/EBITDA 7.87x
Model as built terminal FCF   81.92  TV   1401.8  EV   1239.9  price  22.00  implied TV/EBITDA 7.20x
```

### Solutions

**Solution 1.** Raising the minimum cash to 50.0 means the company must borrow earlier and more: the revolver is 14.6 in FY2026E (previously nothing), 35.4 in FY2027E and 74.0 by FY2030E, against 52.3. All checks pass, including the limit check (74.0 is below 100.0), but headroom is thinner: 26.0 undrawn at the end against 47.7 before. The value per share is unchanged at $22.00, since financing policy does not enter unlevered free cash flow. The extra 20.0 of cash is financed by revolver debt costing 7 percent while earning 2 percent, a negative carry of about 1.0 a year before tax; the valuation attributes that cost to the financing choice, not to operations. (In a more refined DCF, excess cash is deducted in net debt and valued at par.)

**Solution 2.** With a 30 percent payout the company retains more, so the revolver is not needed (FY2030E revolver 0.0) and equity at FY2030E is 746.5 against 652.0. Value per share is unchanged at $22.00 for the same reason as in Exercise 1. If your spreadsheet shows a different value, the DCF is picking up a financing item, most likely interest, through a mislinked row; this is the quickest test of the DCF's construction.

**Solution 3.** The target price is the exit-multiple value of $25.93. Bisection on the terminal growth rate gives 3.4348 percent. The earlier figure of 3.62 percent solves the end-of-year Gordon relation TV = FCF x (1 + g) / (WACC - g) against the exit-multiple terminal value discounted at N years; in the model the Gordon terminal value is discounted at N - 0.5 under the mid-year convention, which makes each dollar of terminal value worth more, so a lower growth rate reaches the same present value. The lesson is that an "implied growth rate" is only meaningful relative to a timing convention.

**Solution 4.** Receivables rise by 864.0 x 10 / 365 = 23.7 in FY2026E alone. FY2026E cash falls to the 30.0 minimum (a revolver draw is now needed in the first year), the peak revolver rises from 52.3 to 84.8 (still within the 100.0 limit, with headroom of 15.2) and value per share falls by $0.82 to $21.18. The sign of the effect on value is clear; the size depends on the timing and permanence of the change. A one-off 10 day increase is a permanent investment of about 24 growing with sales.

**Solution 5.** With a 21 percent tax rate FY2030E net income rises from 105.1 to 111.3 and value per share from $22.00 to $23.85. The statement and the DCF must both use the tax input: in the Python call the DCF receives `tax=0.21` as an argument. If the DCF had a typed 25 percent (a violation of S5), the net income would have risen but the valuation would have been unchanged, and the model would be internally inconsistent without any check noticing. The remedy is the named range `Tax` used everywhere, and a test: change the rate and confirm both NOPAT and net income move.

**Solution 6.** With RONIC equal to WACC (8.34 percent), terminal reinvestment is g / RONIC = 0.025 / 0.0834 = 30.0 percent of NOPAT, so terminal FCF is 79.22 (NOPAT of 113.1 less reinvestment of 33.9), terminal value 1,355.6 and value per share $21.35, an implied exit multiple of 6.96 times. With RONIC of 12 percent, reinvestment is 20.8 percent of NOPAT, terminal FCF 89.54, terminal value 1,532.3 and value $23.82, a multiple of 7.87 times. The as-built terminal FCF of 81.92 corresponds to a RONIC of about 9 percent: slightly above WACC. A reviewer would accept the as-built number if the business is believed to earn modest excess returns and would ask for the normalized method if the terminal value were a large part of a deal price, which it generally is.

**Solution 7.** A hard limit changes row 67 to `=MIN(MAX(-E77,MinCash-F66),RevLimit-E77)`: the draw cannot take the revolver above its limit. When the constraint binds, cash falls below the minimum, and, if cash before the revolver is negative, closing cash becomes negative: the balance sheet still balances (cash is simply negative, which is an implicit overdraft) but the model is describing something that cannot happen. The modeler must therefore add either a "funding shortfall" row (a plug of last resort, clearly labelled, with its own check that it is zero) or an explicit equity issuance or dividend cut. The shortfall row is preferable because it makes the infeasibility visible instead of curing it. Check 5 (cash at least the minimum unless the revolver is at its limit) is written to be compatible with this design.

## Chapter summary

A good model is an argument that survives audit. It separates inputs from formulas, uses one formula per row on a consistent time axis, marks inputs in blue and formulas in black, and checks itself from several directions through a master flag that has been proven to fail when the model is broken. Its balance sheet balances because the cash flow statement is built from changes in the balance sheet, never through a plug. Circularity from average-balance interest is handled with iterative calculation and a circuit breaker, and converges rapidly because each pass shrinks the error by about 76-fold in this model. The DCF discounts unlevered cash flow, is insensitive to financing choices, and reports its terminal value share and implied multiples so that a reader can judge its credibility. Sensitivities are produced by data tables or direct-formula grids, and scenarios through a single switch feeding live driver rows. For Meridian Fastener Co. these tools produced a base value of $22.00 per share, a range of $11.07 to $27.00 across scenarios and a probability-weighted $20.52, with margins and the discount rate mattering far more than revenue growth.

The Python replica in this chapter is the answer key for a spreadsheet build. When your Excel model reproduces FY2026E net income of 71.9, FY2030E revolver of 52.3, enterprise value of 1,239.9 and value per share of $22.00 to the displayed precision, with the master check showing OK, you will have built the model correctly, and you will have the tools to extend it: to leases and deferred taxes, to multiple debt tranches, to a monthly timeline, or to the transaction structures of Chapters 13 to 17.
