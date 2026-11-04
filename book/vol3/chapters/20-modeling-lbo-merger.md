# Chapter 20: Building LBO and Merger Models

## Purpose and Scope

Volume 1, Chapter 22 explained why companies merge and how deals are valued, and Volume 1, Chapter 23 explained how private equity sponsors use leverage to buy and improve businesses. Volume 2 returned to both topics with more advanced valuation and structuring material. This chapter is where those ideas become working models. We build two of the most common models in corporate finance and investment banking from the ground up:

1. A **leveraged buyout (LBO) model**: sources and uses of funds, an operating forecast, a debt schedule with a cash sweep, exit returns and sensitivity tables.
2. An **accretion/dilution model** for an acquisition by a public company: financing structures, synergies, purchase accounting effects, pro forma earnings per share, break-even analysis and ownership.

For each model we show the **Excel layout and formula patterns** that practitioners use, then the same logic in **Python**, so you can see the model's structure without the clutter of cell references, and so you can run hundreds of scenarios quickly. All code was executed, and each block labelled "Output" is the actual printed result. The two companies, Northgate Industrial Services (the LBO target) and Meridian Software and Calloway Data (the acquirer and target in the merger model), are fictional and illustrative. All numbers were chosen to teach technique, not to describe any real company or deal.

A word of caution, repeated throughout the chapter: a model is a disciplined way of organising assumptions, not a source of truth. The most important outputs of any model are the sensitivity tables, which show how the answer depends on assumptions that nobody can know with confidence. A model that gives a single IRR to one decimal place should be treated with suspicion.

## Part I: The LBO Model

### How an LBO works, in one paragraph

A sponsor buys a company using a small amount of its own money (equity) and a large amount of borrowed money, secured on the company's assets and cash flows. The company then uses its own cash flow to pay interest and repay debt. At the end of a holding period, usually three to seven years, the sponsor sells the company. Because debt is repaid from the company's cash flow, the value of the equity grows even if the enterprise value does not. The return to the sponsor comes from three sources, which we separate in a value-creation bridge later in the chapter: growth in earnings, change in the valuation multiple, and the paydown of debt.

### The Excel layout pattern

Experienced modellers lay out an LBO on a small number of sheets, each with a single purpose, with flows left to right across time. A typical structure is:

| Sheet or block | Contents | Key design rule |
|---|---|---|
| Assumptions | Entry multiple, leverage, rates, fees, operating drivers, exit assumptions | Every hard-coded number lives here, in blue font; no number appears inside a formula |
| Sources and Uses | Debt tranches and equity versus purchase price and fees | Total sources must equal total uses; a check cell shows the difference |
| Operating model | Revenue, EBITDA, D&A, capex, working capital | Drivers are percentages or growth rates taken from Assumptions |
| Debt schedule | Opening balance, mandatory repayment, sweep, closing balance, interest | One block per tranche; interest links to the balance |
| Cash flow and credit statistics | Cash flow available for debt repayment, leverage and coverage ratios | Ratios are tested against covenants |
| Returns | Exit value, net debt, equity value, MOIC, IRR, bridge | Exit year selected by an index formula |
| Sensitivities | Data tables of IRR and MOIC | Reference the returns output cell |

The formula patterns we use most often in the debt schedule are listed below. Row 10 holds the opening balance and column D onward holds the years; cell `$C$5` holds the original term loan.

| Item | Excel formula pattern | Comment |
|---|---|---|
| Mandatory amortisation | `=MIN($C$5*$C$6, D10)` | A percentage of the original balance, never more than the opening balance |
| Cash available for sweep | `=D20 - D11` | Cash flow available for debt repayment less mandatory amortisation |
| Cash sweep | `=MAX(0, MIN($C$7*D12, D10 - D11))` | Sweep percentage times available cash, floored at zero, capped at what remains |
| Closing balance | `=D10 - D11 - D13` | Opening less mandatory less sweep |
| Interest on average balance | `=$C$8*AVERAGE(D10, D14)` | Creates a circular reference, since the closing balance depends on cash flow, which depends on interest |
| Interest on opening balance | `=$C$8*D10` | No circularity; slightly overstates interest when debt is being repaid |
| Circuit breaker | `=IF($C$9=1, AVERAGE(D10, D14), D10)` | A switch cell that breaks the loop when the model produces errors |
| Exit equity | `=INDEX(D30:H30, $C$10) - INDEX(D31:H31, $C$10)` | Exit year picks the column |
| IRR | `=IRR(C40:H40)` or `=(MOIC)^(1/N)-1` | The second form is valid when there are no interim distributions |

### Assumptions and the sources-and-uses table

Northgate Industrial Services is a fictional provider of maintenance and compliance services to industrial plants. It has last-twelve-month (LTM) revenue of 600 million dollars and EBITDA of 100 million. A sponsor proposes to buy it at 9.0 times LTM EBITDA, an enterprise value of 900 million, financed with a term loan B of 4.0 times EBITDA at 8.0 percent, senior notes of 1.5 times at 10.5 percent, and sponsor equity as the balancing figure. The sponsor also pays transaction fees of 1.5 percent of enterprise value, financing fees of 2.0 percent of debt raised, and leaves 10 million of cash on the balance sheet as a minimum operating balance.

The model code is in one module, `lbo.py`, so that every later listing can import it. Read it through once; the rest of this part explains each function in turn.

```python
"""A compact LBO model: sources and uses, operating forecast, debt schedule with cash sweep, returns."""
import numpy as np
import pandas as pd

BASE = dict(
    ltm_ebitda=100.0, entry_multiple=9.0, exit_multiple=9.0, exit_year=5,
    tlb_x=4.0, notes_x=1.5,                         # debt as multiples of LTM EBITDA
    tlb_rate=0.080, notes_rate=0.105, tlb_amort=0.01, sweep=1.0,
    txn_fee_pct=0.015, fin_fee_pct=0.02, min_cash=10.0,
    revenue0=600.0, growth=[0.06, 0.06, 0.05, 0.05, 0.04],
    margin0=100.0 / 600.0, margin_step=0.005,       # EBITDA margin expands 50bp a year
    da_pct=0.03, capex_pct=0.035, nwc_pct=0.10, tax=0.25,
)

def sources_uses(p):
    ev = p["ltm_ebitda"] * p["entry_multiple"]
    tlb = p["ltm_ebitda"] * p["tlb_x"]
    notes = p["ltm_ebitda"] * p["notes_x"]
    debt = tlb + notes
    txn_fees = ev * p["txn_fee_pct"]
    fin_fees = debt * p["fin_fee_pct"]
    uses = ev + txn_fees + fin_fees + p["min_cash"]
    equity = uses - debt
    return dict(ev=ev, tlb=tlb, notes=notes, txn_fees=txn_fees, fin_fees=fin_fees,
                cash=p["min_cash"], uses=uses, equity=equity)

def operating_model(p):
    n = len(p["growth"])
    rev = p["revenue0"] * np.cumprod(1 + np.array(p["growth"]))
    prev = np.concatenate([[p["revenue0"]], rev[:-1]])
    margin = p["margin0"] + p["margin_step"] * np.arange(1, n + 1)
    ebitda = rev * margin
    da = rev * p["da_pct"]
    capex = rev * p["capex_pct"]
    d_nwc = (rev - prev) * p["nwc_pct"]
    df = pd.DataFrame({"revenue": rev, "ebitda": ebitda, "da": da, "ebit": ebitda - da,
                       "capex": capex, "d_nwc": d_nwc}, index=range(1, n + 1))
    return df

def debt_schedule(p, su, ops, average_interest=True, tol=1e-9):
    """Solve the circular interest/cash-sweep problem year by year by fixed-point iteration."""
    n = len(ops)
    tlb_open, notes_bal = su["tlb"], su["notes"]
    rows = []
    for t in range(1, n + 1):
        o = ops.loc[t]
        mand = min(p["tlb_amort"] * su["tlb"], tlb_open)
        tlb_close = tlb_open - mand                      # first guess: no sweep
        for it in range(100):
            tlb_basis = (tlb_open + tlb_close) / 2 if average_interest else tlb_open
            int_tlb = p["tlb_rate"] * tlb_basis
            int_notes = p["notes_rate"] * notes_bal
            interest = int_tlb + int_notes
            ebt = o.ebit - interest
            taxes = max(ebt, 0.0) * p["tax"]
            ni = ebt - taxes
            cfads = ni + o.da - o.capex - o.d_nwc        # cash flow available for debt repayment
            avail = cfads - mand
            sweep = max(0.0, min(p["sweep"] * avail, tlb_open - mand))
            new_close = tlb_open - mand - sweep
            if abs(new_close - tlb_close) < tol:
                break
            tlb_close = new_close
        rows.append(dict(year=t, tlb_open=tlb_open, mandatory=mand, sweep=sweep, tlb_close=tlb_close,
                         notes=notes_bal, interest=interest, taxes=taxes, net_income=ni,
                         cfads=cfads, iterations=it + 1))
        tlb_open = tlb_close
    sch = pd.DataFrame(rows).set_index("year")
    sch["cash_build"] = sch["cfads"] - sch["mandatory"] - sch["sweep"]
    sch["cash"] = su["cash"] + sch["cash_build"].cumsum()
    sch["total_debt"] = sch["tlb_close"] + sch["notes"]
    sch["net_debt"] = sch["total_debt"] - sch["cash"]
    sch["lev"] = sch["net_debt"] / ops["ebitda"]
    sch["cover"] = ops["ebitda"] / sch["interest"]
    return sch

def returns(p, su, ops, sch):
    t = p["exit_year"]
    exit_ev = ops.loc[t, "ebitda"] * p["exit_multiple"]
    exit_eq = exit_ev - sch.loc[t, "net_debt"]
    moic = exit_eq / su["equity"]
    irr = moic ** (1 / t) - 1
    return dict(exit_ev=exit_ev, exit_equity=exit_eq, moic=moic, irr=irr)

def run_lbo(**over):
    p = {**BASE, **over}
    su = sources_uses(p)
    ops = operating_model(p)
    sch = debt_schedule(p, su, ops, average_interest=p.get("average_interest", True))
    ret = returns(p, su, ops, sch)
    return p, su, ops, sch, ret
```

The first function, `sources_uses`, is the simplest and the one most often wrong in practice, because the fees are easy to forget. Total uses are the enterprise value, the two fees and the cash left on the balance sheet. Debt is fixed by the leverage multiples, so equity is the plug: `equity = uses - debt`.

```python
import pandas as pd
from lbo import BASE, sources_uses

su = sources_uses(BASE)
pd.set_option("display.float_format", lambda x: f"{x:,.1f}")
sources = pd.DataFrame({"USD m": [su["tlb"], su["notes"], su["equity"]]},
                       index=["Term loan B (4.0x)", "Senior notes (1.5x)", "Sponsor equity"])
uses = pd.DataFrame({"USD m": [su["ev"], su["txn_fees"], su["fin_fees"], su["cash"]]},
                    index=["Purchase enterprise value (9.0x)", "Transaction fees", "Financing fees", "Cash to balance sheet"])
sources.loc["Total sources"] = sources["USD m"].sum()
uses.loc["Total uses"] = uses["USD m"].sum()
print(sources, "\n")
print(uses, "\n")
print("Check sources - uses  :", round(sources.loc["Total sources", "USD m"] - uses.loc["Total uses", "USD m"], 6))
print(f"Equity share of capital: {su['equity'] / su['uses']:.1%}")
print(f"Total debt / EBITDA    : {(su['tlb'] + su['notes']) / BASE['ltm_ebitda']:.1f}x")
```

Output:

```
                     USD m
Term loan B (4.0x)   400.0
Senior notes (1.5x)  150.0
Sponsor equity       384.5
Total sources        934.5

                                  USD m
Purchase enterprise value (9.0x)  900.0
Transaction fees                   13.5
Financing fees                     11.0
Cash to balance sheet              10.0
Total uses                        934.5

Check sources - uses  : 0.0
Equity share of capital: 41.1%
Total debt / EBITDA    : 5.5x
```

Sponsor equity is 384.5 million, 41.1 percent of the capital structure, against debt of 550 million, 5.5 times EBITDA. That level of leverage is aggressive but not unusual for a stable, cash-generative services business in a favourable credit market. Fees of 24.5 million (2.7 percent of enterprise value) are paid out of the sponsor's money and are a pure leakage: they add nothing to the value of the business. The check line confirms sources equal uses.

### The operating forecast

The operating model translates a handful of assumptions into the free cash flow that will service the debt. Revenue grows from 600 million at 6, 6, 5, 5 and 4 percent. EBITDA margin starts at the LTM level of 16.7 percent and improves by 50 basis points a year as the sponsor's cost programme takes effect. Depreciation is 3.0 percent of revenue, capital expenditure 3.5 percent, working capital investment is 10 percent of the change in revenue, and the tax rate is 25 percent.

```python
import pandas as pd
from lbo import BASE, operating_model

ops = operating_model(BASE)
ops["margin"] = ops["ebitda"] / ops["revenue"] * 100
pd.set_option("display.float_format", lambda x: f"{x:,.1f}")
pd.set_option("display.width", 110)
print(ops.round(1).T)
print()
print("EBITDA CAGR (LTM 100 -> year 5):", f"{(ops.loc[5, 'ebitda'] / 100) ** 0.2 - 1:.2%}")
```

Output:

```
            1     2     3     4     5
revenue 636.0 674.2 707.9 743.3 773.0
ebitda  109.2 119.1 128.6 138.7 148.2
da       19.1  20.2  21.2  22.3  23.2
ebit     90.1  98.9 107.4 116.4 125.0
capex    22.3  23.6  24.8  26.0  27.1
d_nwc     3.6   3.8   3.4   3.5   3.0
margin   17.2  17.7  18.2  18.7  19.2

EBITDA CAGR (LTM 100 -> year 5): 8.18%
```

By year five revenue is 773.0 million, EBITDA is 148.2 million (19.2 percent margin), and EBITDA has compounded at 8.18 percent a year from 100 million. The sponsor's equity story depends on this: about two-thirds of the EBITDA growth comes from revenue growth and one-third from margin expansion. In due diligence a sponsor would examine each of these, asking whether a 50 basis point annual margin gain is supported by identified cost actions, whether customers are contractually committed, and whether capex of 3.5 percent of revenue covers the maintenance the assets actually need. Note also that the forecast makes no allowance for a recession. We test downside cases in Exercise 6.

### The debt schedule, the cash sweep and the circularity

The debt schedule is the heart of the model. In each year the company earns EBIT, pays interest and tax, adds back depreciation, and subtracts capital expenditure and working capital investment. What remains is **cash flow available for debt repayment** (the numerator of most credit analyses, and sometimes called cash flow available for debt service after interest). The term loan has a mandatory amortisation of 1 percent of the original balance a year. After that mandatory payment, a **cash sweep** requires the company to apply a specified percentage (here 100 percent) of the remaining cash to prepay the term loan. The senior notes are a bullet: no repayment until maturity, which is after our exit date.

The difficulty is a circularity. Interest on the term loan depends on the average balance during the year. The average balance depends on the closing balance. The closing balance depends on the sweep. The sweep depends on cash flow, which depends on net income, which depends on interest. Excel users resolve this by turning on iterative calculation and adding a circuit-breaker switch. In Python we solve it directly by **fixed-point iteration**: guess a closing balance, compute interest, tax, cash flow and the sweep, derive a new closing balance, and repeat until the change is smaller than a tolerance. This is the `for it in range(100)` loop in `debt_schedule`.

```python
import pandas as pd
from lbo import run_lbo

p, su, ops, sch, ret = run_lbo()
pd.set_option("display.float_format", lambda x: f"{x:,.1f}")
pd.set_option("display.width", 120)
cols = ["tlb_open", "mandatory", "sweep", "tlb_close", "notes", "interest", "taxes", "net_income", "cfads"]
print(sch[cols].round(1).T)
print()
print(sch[["cash", "total_debt", "net_debt", "lev", "cover", "iterations"]].round(2).T)
print()
print("Cumulative TLB repaid (USD m):", round(su["tlb"] - sch.loc[5, "tlb_close"], 1))
print("Share of TLB repaid          :", f"{1 - sch.loc[5, 'tlb_close'] / su['tlb']:.1%}")
```

Output:

```
year           1     2     3     4     5
tlb_open   400.0 374.2 340.5 297.9 245.9
mandatory    4.0   4.0   4.0   4.0   4.0
sweep       21.8  29.7  38.6  48.0  58.2
tlb_close  374.2 340.5 297.9 245.9 183.8
notes      150.0 150.0 150.0 150.0 150.0
interest    46.7  44.3  41.3  37.5  32.9
taxes       10.8  13.6  16.5  19.7  23.0
net_income  32.5  40.9  49.6  59.2  69.0
cfads       25.8  33.7  42.6  52.0  62.2

year           1     2     3     4     5
cash        10.0  10.0  10.0  10.0  10.0
total_debt 524.2 490.5 447.9 395.9 333.8
net_debt   514.2 480.5 437.9 385.9 323.8
lev          4.7   4.0   3.4   2.8   2.2
cover        2.3   2.7   3.1   3.7   4.5
iterations   8.0   8.0   8.0   9.0   9.0

Cumulative TLB repaid (USD m): 216.2
Share of TLB repaid          : 54.1%
```

Read the first table down the columns. In year one the company generates 25.8 million of cash flow available for debt repayment after 46.7 million of interest and 10.8 million of tax. Of this, 4.0 million goes to mandatory amortisation and 21.8 million is swept, so the term loan falls from 400.0 to 374.2 million. As the loan shrinks and EBITDA grows, the sweep accelerates: by year five it is 58.2 million. Over the five years 216.2 million of term loan, 54.1 percent of the original balance, is repaid. The notes stay at 150 million throughout.

The second table shows the credit statistics. Net debt to EBITDA falls from 4.7 times at the end of year one to 2.2 times at the end of year five, partly through paying down debt and partly through the denominator growing. EBITDA to interest cover rises from 2.3 times to 4.5 times. A lender would test these ratios against covenants. A typical set requires maximum net leverage and minimum interest cover, with a margin of 25 to 35 percent of headroom against the plan in each year. Year one is the tightest: a leverage covenant set at 5.5 times would have headroom of only 0.8 turns. The cash balance stays at the 10 million minimum because all excess cash sweeps debt. The last row shows that each year's solution took eight or nine passes of the loop.

### Why the circularity matters (and how fast it converges)

Is the circularity worth the trouble? Many modellers avoid it by computing interest on the opening balance. The next listing compares the two approaches and then prints the fixed-point iteration for year one, so you can see the loop converge.

```python
from lbo import run_lbo

print("Circularity: interest on average balance vs opening balance")
for avg in (True, False):
    p, su, ops, sch, ret = run_lbo(average_interest=avg)
    label = "average balance (circular)" if avg else "opening balance (no loop)  "
    print(f"{label}: year-1 interest {sch.loc[1, 'interest']:.3f}, year-5 TLB {sch.loc[5, 'tlb_close']:.2f}, "
          f"IRR {ret['irr']:.3%}, iterations yr1 {sch.loc[1, 'iterations']}")

# Show the fixed-point iteration converging for year 1
p, su, ops, sch, ret = run_lbo()
o = ops.loc[1]
mand = 0.01 * su["tlb"]
close = su["tlb"] - mand
print("\nYear-1 iteration trace (closing TLB):")
for k in range(1, 9):
    interest = 0.08 * (su["tlb"] + close) / 2 + 0.105 * su["notes"]
    ebt = o.ebit - interest
    ni = ebt - max(ebt, 0) * 0.25
    cfads = ni + o.da - o.capex - o.d_nwc
    new_close = su["tlb"] - mand - (cfads - mand)
    print(f"  pass {k}: interest {interest:8.4f}  closing TLB {new_close:9.4f}  change {new_close - close:+.6f}")
    close = new_close
```

Output:

```
Circularity: interest on average balance vs opening balance
average balance (circular): year-1 interest 46.720, year-5 TLB 183.75, IRR 21.299%, iterations yr1 8
opening balance (no loop)  : year-1 interest 47.750, year-5 TLB 190.89, IRR 21.127%, iterations yr1 2

Year-1 iteration trace (closing TLB):
  pass 1: interest  47.5900  closing TLB  374.8975  change -21.102500
  pass 2: interest  46.7459  closing TLB  374.2644  change -0.633075
  pass 3: interest  46.7206  closing TLB  374.2454  change -0.018992
  pass 4: interest  46.7198  closing TLB  374.2449  change -0.000570
  pass 5: interest  46.7198  closing TLB  374.2448  change -0.000017
  pass 6: interest  46.7198  closing TLB  374.2448  change -0.000001
  pass 7: interest  46.7198  closing TLB  374.2448  change -0.000000
  pass 8: interest  46.7198  closing TLB  374.2448  change -0.000000
```

Using opening balances overstates year-one interest by 1.03 million (47.750 versus 46.720), leaves 190.89 million of term loan at the end of year five rather than 183.75, and understates the IRR by 17 basis points (21.127 versus 21.299 percent). The simplification is conservative and the difference is small here, but it grows with the sweep percentage and with the interest rate, and a lender's model that differs from the sponsor's by seven million dollars of debt at exit will cause arguments. The iteration trace shows why the loop is well behaved. Each pass changes the closing balance by only about one thirty-third of the previous change: the loop's contraction factor is half the interest rate times one minus the tax rate, 0.08 × 0.5 × 0.75 = 0.03. A loop converges when this factor is below one, which is always true for realistic rates, so the circularity is benign. The instability that analysts experience in Excel usually comes from an error value (such as a `#DIV/0!`) that enters the loop and cannot leave it. The circuit-breaker switch, which sets interest to the opening-balance version for one recalculation, flushes the error out.

### Exit, returns and the value-creation bridge

At exit the sponsor sells the company at an assumed multiple of exit-year EBITDA, repays the remaining net debt, and keeps the rest. The money multiple (MOIC) is exit equity divided by equity invested. With no interim dividends, the IRR is `MOIC^(1/years) - 1`, the same as Excel's `IRR` applied to a stream of one outflow and one inflow. We assume the exit multiple equals the entry multiple, 9.0 times, which is the standard conservative convention: do not underwrite a return on multiple expansion.

The **value-creation bridge** decomposes the equity gain. Because enterprise value equals EBITDA times a multiple, and equity equals enterprise value minus net debt, the gain in equity value is exactly the sum of four terms: EBITDA growth valued at the entry multiple, the change in multiple applied to exit EBITDA, the reduction in net debt, and the negative of the fees paid at the outset. The listing computes all four and checks that they sum to the gain.

```python
import pandas as pd
from lbo import run_lbo

p, su, ops, sch, ret = run_lbo()
t = p["exit_year"]
print(f"Exit EBITDA (year {t})      : {ops.loc[t, 'ebitda']:8.1f}")
print(f"Exit enterprise value      : {ret['exit_ev']:8.1f}   ({p['exit_multiple']:.1f}x)")
print(f"Less net debt at exit      : {sch.loc[t, 'net_debt']:8.1f}")
print(f"Exit equity value          : {ret['exit_equity']:8.1f}")
print(f"Sponsor equity invested    : {su['equity']:8.1f}")
print(f"MOIC                       : {ret['moic']:8.2f}x")
print(f"IRR                        : {ret['irr']:8.2%}")

# Value-creation bridge: equity gain = EBITDA growth + multiple change + net debt paydown - fees/leakage
entry_ebitda, exit_ebitda = p["ltm_ebitda"], ops.loc[t, "ebitda"]
ebitda_growth = (exit_ebitda - entry_ebitda) * p["entry_multiple"]
multiple_exp = (p["exit_multiple"] - p["entry_multiple"]) * exit_ebitda
entry_net_debt = su["tlb"] + su["notes"] - su["cash"]
deleveraging = entry_net_debt - sch.loc[t, "net_debt"]
fees = -(su["txn_fees"] + su["fin_fees"])
total = ebitda_growth + multiple_exp + deleveraging + fees
bridge = pd.Series({"EBITDA growth (at entry multiple)": ebitda_growth,
                    "Multiple expansion": multiple_exp,
                    "Net debt reduction": deleveraging,
                    "Transaction and financing fees": fees})
print()
for k, v in bridge.items():
    print(f"{k:34s}{v:9.1f}   {v / total:6.1%}")
print(f"{'Total equity gain':34s}{total:9.1f}")
print("Check vs exit equity - invested   :", round(ret["exit_equity"] - su["equity"] - total, 6))
```

Output:

```
Exit EBITDA (year 5)      :    148.2
Exit enterprise value      :   1333.4   (9.0x)
Less net debt at exit      :    323.8
Exit equity value          :   1009.7
Sponsor equity invested    :    384.5
MOIC                       :     2.63x
IRR                        :   21.30%

EBITDA growth (at entry multiple)     433.4    69.3%
Multiple expansion                      0.0     0.0%
Net debt reduction                    216.2    34.6%
Transaction and financing fees        -24.5    -3.9%
Total equity gain                     625.2
Check vs exit equity - invested   : -0.0
```

The sponsor invests 384.5 million and receives 1,009.7 million after five years, a multiple of 2.63 times and an IRR of 21.30 percent. The bridge shows where the 625.2 million gain comes from: 433.4 million (69.3 percent) from EBITDA growth, none from multiple expansion by construction, 216.2 million (34.6 percent) from debt reduction, and a 24.5 million drag from fees (3.9 percent). The check line confirms the decomposition is exact. Two lessons follow. First, in this deal operational improvement, not financial engineering, is the largest source of value, which is typical of the better sponsors' own accounts of their returns. Second, deleveraging is a substantial contributor, but note that it is itself funded by the cash flow that operations generate. If EBITDA does not grow, the paydown shrinks too, so the two sources are not independent.

### Sensitivity tables

A single IRR is a point on a surface. The sponsor's investment committee wants to see the surface. In Excel the standard tool is the **data table** (What-If Analysis, Data Table). You build a grid with one assumption varying down the rows and another across the columns; the top-left corner cell contains a formula pointing at the output (here the IRR cell); and Excel fills the grid by substituting each pair of values into two designated input cells and recalculating. Two practical rules apply: the input cells must be on the same sheet as the table, and data tables slow recalculation, so many modellers set calculation to "automatic except data tables".

In Python, the equivalent is a loop over a function. Because we wrote `run_lbo` to accept overrides of any assumption, a sensitivity table is a double loop. The helper `table` below is general: give it two assumption names, two lists of values and an output metric.

```python
import pandas as pd
from lbo import run_lbo

pd.set_option("display.width", 110)
def table(row_name, row_vals, col_name, col_vals, metric="irr"):
    out = pd.DataFrame(index=pd.Index(row_vals, name=row_name), columns=pd.Index(col_vals, name=col_name), dtype=float)
    for r in row_vals:
        for c in col_vals:
            out.loc[r, c] = run_lbo(**{row_name: r, col_name: c})[4][metric]
    return out

t1 = table("entry_multiple", [8.0, 9.0, 10.0, 11.0], "exit_multiple", [8.0, 9.0, 10.0, 11.0])
print("IRR: entry multiple (rows) vs exit multiple (columns), 5-year exit")
print((t1 * 100).round(1))

t2 = table("tlb_x", [3.0, 4.0, 5.0], "exit_year", [3, 4, 5])
print("\nIRR: term loan leverage (rows, x EBITDA) vs exit year (columns)")
print((t2 * 100).round(1))

t3 = table("tlb_x", [3.0, 4.0, 5.0], "exit_multiple", [8.0, 9.0, 10.0], metric="moic")
print("\nMOIC: term loan leverage (rows) vs exit multiple (columns)")
print(t3.round(2))
```

Output:

```
IRR: entry multiple (rows) vs exit multiple (columns), 5-year exit
exit_multiple   8.0   9.0   10.0  11.0
entry_multiple
8.0             24.9  29.0  32.5  35.8
9.0             17.5  21.3  24.7  27.7
10.0            12.1  15.7  19.0  21.9
11.0             8.0  11.4  14.5  17.3

IRR: term loan leverage (rows, x EBITDA) vs exit year (columns)
exit_year     3     4     5
tlb_x
3.0        20.3  19.7  18.9
4.0        23.2  22.4  21.3
5.0        27.9  26.6  25.0

MOIC: term loan leverage (rows) vs exit multiple (columns)
exit_multiple  8.0   9.0   10.0
tlb_x
3.0            2.07  2.37  2.68
4.0            2.24  2.63  3.01
5.0            2.54  3.05  3.57
```

Read the first table along its diagonal. The base case, 9.0 times in and 9.0 times out, gives 21.3 percent. Paying 10 times but exiting at 9 reduces the IRR to 15.7 percent; paying 8 times and exiting at 9 raises it to 29.0 percent. Each turn of exit multiple is worth between 3.0 and 3.8 percentage points of IRR at the base entry price, while a turn of entry price is worth 5.6 points going from 9 to 10 times and 7.7 points going from 9 to 8 times. This asymmetry is the reason sponsors fight over price: entry price affects the equity cheque, which is the denominator of every return. The worst corner of the table, paying 11 times and exiting at 8 times, yields only 8.0 percent, below the sponsor's cost of equity and likely below its fund hurdle rate.

The second table shows leverage and timing. More term loan raises the IRR: with 3.0 times of term loan the five-year IRR is 18.9 percent and with 5.0 times it is 25.0 percent, because the sponsor invests less equity for the same business. But this table cannot be read alone. Higher leverage raises the probability of default and the chance that covenants are breached in a downturn, and we have assumed the same interest rate at every leverage level; in practice lenders charge more for more risk. The shorter the holding period, the higher the IRR in this model (23.2 percent at three years versus 21.3 percent at five for 4.0 times), because the early years capture the steepest growth in EBITDA relative to the equity base and because we hold the exit multiple constant. In practice, a sponsor that exits early forgoes the later growth, so the IRR and the MOIC tell different stories, and sponsors care about both.

The third table is the MOIC. At 4.0 times leverage and a 9.0 times exit the multiple is 2.63. Paying down more debt or exiting at a higher multiple lifts it; at a 5.0 times term loan and a 10.0 times exit the sponsor makes 3.57 times its money, while at 3.0 times and 8.0 times it makes only 2.07.

## Part II: The Accretion/Dilution Model

### What the model answers

When a public company buys another company, its shareholders want to know what happens to earnings per share (EPS). **Accretion** means pro forma EPS exceeds the acquirer's standalone EPS; **dilution** means it is lower. EPS accretion is not a measure of value creation (Volume 1, Chapter 22 stressed this: a deal can be accretive and destroy value, or dilutive and create it), but it is watched closely by investors and boards, it determines how the deal will be reported, and it frames the negotiation over price, financing mix and synergies. So we model it, and then we look at what it does and does not tell us.

### The mechanics

Pro forma net income equals the sum of the two companies' standalone net incomes, plus after-tax synergies, minus the after-tax financing cost of the acquisition, minus the after-tax amortisation of acquired intangible assets. Pro forma shares equal the acquirer's shares plus any new shares issued to pay for the target. The financing cost depends on the consideration mix: a cash purchase funded with borrowing adds interest expense, while a stock purchase adds shares. Excel's layout is a simple vertical build:

| Row | Formula pattern | Comment |
|---|---|---|
| Offer price per share | `=Target_price*(1+Premium)` | Premium over the unaffected price |
| Equity purchase price | `=Offer_price*Target_shares` | Add net debt for enterprise value |
| New shares issued | `=Pct_stock*Equity_price/Acquirer_price` | Fixed exchange ratio assumed |
| New debt | `=(1-Pct_stock)*Equity_price + Fees` | Cash portion plus fees |
| After-tax interest | `=New_debt*Kd*(1-Tax)` | Foregone interest on cash can be used instead |
| After-tax amortisation | `=Intangibles_pct*Equity_price/Years*(1-Tax)` | From purchase price allocation |
| After-tax synergies | `=Synergies*Phase_in*(1-Tax)` | Phase-in by year |
| Pro forma NI | `=Acq_NI+Tgt_NI+Syn-Int-Amort` | |
| Pro forma EPS | `=Pro_forma_NI/(Acq_shares+New_shares)` | |
| Accretion | `=Pro_forma_EPS/Standalone_EPS-1` | |

The fictional deal: Meridian Software, a public acquirer, has year-one net income of 540 million, growing 8 percent in year two, 250 million shares and a share price of 40 dollars (a market capitalisation of 10 billion dollars and a P/E multiple of 20 times year-zero earnings of 500 million). It proposes to acquire Calloway Data, which has 60 million shares at an unaffected price of 28 dollars, year-one net income of 99 million and year-two net income of 108.9 million (10 percent growth). The offer is a 30 percent premium. The base-case consideration is half stock, half cash, with the cash portion and the fees (2 percent of the equity price) funded by new debt at 6.5 percent pre-tax. Fifteen percent of the purchase price is allocated to identifiable intangible assets amortised over 10 years. Run-rate pre-tax synergies are 60 million, phased in at 50 percent in year one and 100 percent in year two. Integration costs are one-time and excluded from the adjusted EPS shown, which is the usual convention but which, as we discuss later, is a matter of judgement. Tax is 25 percent.

```python
"""Accretion/dilution model for a public-company acquisition (all figures USD m except per-share)."""
import numpy as np
from scipy.optimize import brentq

DEAL = dict(
    acq_ni=[540.0, 583.2], acq_shares=250.0, acq_price=40.0,
    tgt_ni=[99.0, 108.9], tgt_shares=60.0, tgt_price=28.0,
    premium=0.30, pct_stock=0.50,
    kd=0.065, tax=0.25, fee_pct=0.02,
    intangibles_pct=0.15, amort_years=10,
    synergies=60.0, phase_in=[0.5, 1.0],
)

def accretion(**over):
    d = {**DEAL, **over}
    offer_px = d["tgt_price"] * (1 + d["premium"])
    equity_price = offer_px * d["tgt_shares"]
    fees = equity_price * d["fee_pct"]
    stock_issued = d["pct_stock"] * equity_price
    new_shares = stock_issued / d["acq_price"]
    new_debt = (1 - d["pct_stock"]) * equity_price + fees      # cash portion and fees borrowed
    interest_at = new_debt * d["kd"] * (1 - d["tax"])
    amort_at = d["intangibles_pct"] * equity_price / d["amort_years"] * (1 - d["tax"])
    out = dict(offer_px=offer_px, equity_price=equity_price, fees=fees, new_shares=new_shares,
               new_debt=new_debt, interest_at=interest_at, amort_at=amort_at, years=[])
    for y in range(2):
        syn_at = d["synergies"] * d["phase_in"][y] * (1 - d["tax"])
        ni = d["acq_ni"][y] + d["tgt_ni"][y] + syn_at - interest_at - amort_at
        shares = d["acq_shares"] + new_shares
        eps_pf = ni / shares
        eps_sa = d["acq_ni"][y] / d["acq_shares"]
        out["years"].append(dict(ni=ni, shares=shares, eps_pf=eps_pf, eps_sa=eps_sa,
                                 accretion=eps_pf / eps_sa - 1, syn_at=syn_at))
    return out

def breakeven_synergies(year=1, **over):
    """Pre-tax run-rate synergies at which pro forma EPS equals standalone EPS in the given year."""
    f = lambda s: accretion(**{**over, "synergies": s})["years"][year]["accretion"]
    return brentq(f, -500, 2000, xtol=1e-10)

def max_premium(year=1, **over):
    f = lambda pr: accretion(**{**over, "premium": pr})["years"][year]["accretion"]
    return brentq(f, -0.5, 3.0, xtol=1e-10)
```

Three simplifications deserve mention. The target's own debt is assumed to remain in place, so its interest is already in its net income and the equity purchase price is the relevant outlay. Debt raised is never repaid within the two-year window; in a real model the acquirer would apply cash flow to paydown. And the acquirer's share price is assumed unaffected by the announcement, which is rarely true and is tested in Exercise 5.

### Base-case results

```python
import pandas as pd
from ad import DEAL, accretion

a = accretion()
print(f"Offer price per target share : {a['offer_px']:.2f}  (premium {DEAL['premium']:.0%})")
print(f"Equity purchase price        : {a['equity_price']:,.1f}")
print(f"Deal P/E (on year-0 NI of 90): {a['equity_price'] / 90:.1f}x     Acquirer P/E: {DEAL['acq_price'] / (500 / 250):.1f}x")
print(f"Earnings yield: target at offer {90 / a['equity_price']:.2%}, acquirer {500 / 250 / DEAL['acq_price']:.2%}, after-tax debt {DEAL['kd'] * 0.75:.3%}")
print()

rows = []
for label, ps in (("All cash (debt)", 0.0), ("50% stock / 50% cash", 0.5), ("All stock", 1.0)):
    for syn_label, syn in (("no synergies", 0.0), ("with synergies", DEAL["synergies"])):
        r = accretion(pct_stock=ps, synergies=syn)
        rows.append((label, syn_label, r["new_shares"], r["new_debt"],
                     r["years"][0]["eps_pf"], r["years"][0]["accretion"] * 100,
                     r["years"][1]["eps_pf"], r["years"][1]["accretion"] * 100))
df = pd.DataFrame(rows, columns=["structure", "synergies", "new_shs", "new_debt", "EPS_y1", "acc_y1_%", "EPS_y2", "acc_y2_%"])
pd.set_option("display.width", 130)
pd.set_option("display.float_format", lambda x: f"{x:,.3f}")
print(df.to_string(index=False))
print()
print("Standalone EPS: year 1", round(a["years"][0]["eps_sa"], 3), " year 2", round(a["years"][1]["eps_sa"], 3))

# Bridge from standalone to pro forma NI for the base 50/50 structure, year 2
y = a["years"][1]
print("\nYear-2 net income bridge (50/50, with synergies)")
print(f"  Acquirer standalone NI      {DEAL["acq_ni"][1]:9.2f}")
print(f"  + Target NI                 {DEAL["tgt_ni"][1]:9.2f}")
print(f"  + After-tax synergies       {y['syn_at']:9.2f}")
print(f"  - After-tax interest        {-a['interest_at']:9.2f}")
print(f"  - After-tax amortisation    {-a['amort_at']:9.2f}")
print(f"  = Pro forma NI              {y['ni']:9.2f}")
```

Output:

```
Offer price per target share : 36.40  (premium 30%)
Equity purchase price        : 2,184.0
Deal P/E (on year-0 NI of 90): 24.3x     Acquirer P/E: 20.0x
Earnings yield: target at offer 4.12%, acquirer 5.00%, after-tax debt 4.875%

           structure      synergies  new_shs  new_debt  EPS_y1  acc_y1_%  EPS_y2  acc_y2_%
     All cash (debt)   no synergies    0.000 2,227.680   2.023    -6.328   2.236    -4.161
     All cash (debt) with synergies    0.000 2,227.680   2.113    -2.161   2.416     3.555
50% stock / 50% cash   no synergies   27.300 1,135.680   2.016    -6.662   2.208    -5.367
50% stock / 50% cash with synergies   27.300 1,135.680   2.097    -2.905   2.370     1.589
           All stock   no synergies   54.600    43.680   2.010    -6.936   2.185    -6.357
           All stock with synergies   54.600    43.680   2.084    -3.516   2.332    -0.024

Standalone EPS: year 1 2.16  year 2 2.333

Year-2 net income bridge (50/50, with synergies)
  Acquirer standalone NI         583.20
  + Target NI                    108.90
  + After-tax synergies           45.00
  - After-tax interest           -55.36
  - After-tax amortisation       -24.57
  = Pro forma NI                 657.17
```

The first block explains the economics before the model does the arithmetic. At a 30 percent premium Meridian pays 36.40 per share, 2,184.0 million in total, which is 24.3 times the target's year-zero earnings of 90 million. Meridian trades at 20 times. A buyer paying 24.3 times for earnings with a 4.12 percent earnings yield, financed with stock whose earnings yield is 5.00 percent, issues "expensive" currency for "cheap" earnings: all-stock dilution is therefore expected before synergies. Debt financing at 6.5 percent costs 4.875 percent after tax, which is also more than the 4.12 percent the target earns on the price paid. So the deal needs synergies and growth to break even. The results confirm this.

The table gives six cases. Without synergies, every financing structure is dilutive in both years, between 4.2 and 6.9 percent. All-cash is the least dilutive in year two (-4.16 percent), all-stock the most (-6.36 percent), because Meridian's after-tax cost of debt (4.875 percent) is below its earnings yield (5.00 percent) and so debt is the cheaper currency on a pure earnings basis. With 60 million of run-rate synergies, year-two accretion is +3.56 percent for all cash, +1.59 percent for the 50/50 structure, and -0.02 percent (a break-even) for all stock. Year one is dilutive in every structure, because synergies are only half phased-in, ranging from -2.16 percent to -3.52 percent. Note the difference between the earnings-yield ranking (cash cheapest) and the ranking by risk: all-cash maximises EPS accretion but also maximises financial leverage, in this case 2,227.7 million of new debt on a company earning 540 million. A board would not stop at the EPS ranking.

The bridge at the bottom reconciles year-two net income for the 50/50 structure: 583.20 plus 108.90 plus 45.00 of after-tax synergies, minus 55.36 of after-tax interest and 24.57 of after-tax amortisation, gives 657.17. Dividing by 277.3 million shares gives pro forma EPS of 2.370, 1.59 percent above the standalone 2.333.

### Break-even analysis and sensitivities

Practitioners rarely accept a single accretion number. They ask: how much synergy do we need? How high a premium can we pay? The two break-even functions use the same root finder as the IRR calculation in Chapter 19. The `breakeven_synergies` function finds the pre-tax run-rate synergies at which pro forma EPS equals standalone EPS, and `max_premium` finds the largest premium that leaves EPS unchanged.

```python
import pandas as pd
from ad import accretion, breakeven_synergies, max_premium

print("Break-even pre-tax run-rate synergies (USD m) [synergy phase-in: 50% yr 1, 100% yr 2]")
for label, ps in (("All cash", 0.0), ("50/50", 0.5), ("All stock", 1.0)):
    print(f"  {label:10s} year 1: {breakeven_synergies(0, pct_stock=ps):7.1f}   year 2: {breakeven_synergies(1, pct_stock=ps):7.1f}")
print()
print("Maximum premium with zero year-2 dilution, base synergies of 60:")
for label, ps in (("All cash", 0.0), ("50/50", 0.5), ("All stock", 1.0)):
    print(f"  {label:10s} {max_premium(1, pct_stock=ps):6.1%}")

pd.set_option("display.width", 120)
prem = [0.10, 0.20, 0.30, 0.40, 0.50]
pcts = [0.0, 0.25, 0.50, 0.75, 1.0]
grid = pd.DataFrame({f"{int(ps * 100)}% stock": [accretion(premium=pr, pct_stock=ps)["years"][1]["accretion"] * 100 for pr in prem]
                     for ps in pcts}, index=pd.Index([f"{int(p * 100)}%" for p in prem], name="premium"))
print("\nYear-2 EPS accretion (%): premium (rows) vs share of stock consideration (columns)")
print(grid.round(2))

syn = [0.0, 30.0, 60.0, 90.0, 120.0]
grid2 = pd.DataFrame({f"{int(ps * 100)}% stock": [accretion(synergies=s, pct_stock=ps)["years"][1]["accretion"] * 100 for s in syn]
                      for ps in pcts}, index=pd.Index([int(s) for s in syn], name="synergies"))
print("\nYear-2 EPS accretion (%): run-rate pre-tax synergies (rows) vs share of stock (columns)")
print(grid2.round(2))
```

Output:

```
Break-even pre-tax run-rate synergies (USD m) [synergy phase-in: 50% yr 1, 100% yr 2]
  All cash   year 1:    91.1   year 2:    32.4
  50/50      year 1:   106.4   year 2:    46.3
  All stock  year 1:   121.7   year 2:    60.2

Maximum premium with zero year-2 dilution, base synergies of 60:
  All cash    50.2%
  50/50       39.3%
  All stock   29.9%

Year-2 EPS accretion (%): premium (rows) vs share of stock consideration (columns)
         0% stock  25% stock  50% stock  75% stock  100% stock
premium
10%          7.07       6.03       5.08       4.21        3.41
20%          5.31       4.27       3.32       2.46        1.67
30%          3.55       2.52       1.59       0.74       -0.02
40%          1.80       0.79      -0.12      -0.93       -1.67
50%          0.04      -0.93      -1.80      -2.57       -3.27

Year-2 EPS accretion (%): run-rate pre-tax synergies (rows) vs share of stock (columns)
           0% stock  25% stock  50% stock  75% stock  100% stock
synergies
0             -4.16      -4.80      -5.37      -5.89       -6.36
30            -0.30      -1.14      -1.89      -2.57       -3.19
60             3.55       2.52       1.59       0.74       -0.02
90             7.41       6.18       5.07       4.06        3.14
120           11.27       9.84       8.55       7.37        6.31
```

To avoid dilution in year one, with only half of the synergies realised, the run-rate synergies must be 91.1 million for an all-cash deal, 106.4 million for the 50/50 structure and 121.7 million for all stock. By year two these fall to 32.4, 46.3 and 60.2 million. Synergies of 60 million therefore cover the all-cash and 50/50 hurdles in year two with margin, and fall just short of the all-stock hurdle of 60.2. The maximum premiums tell the same story from the other direction: with 60 million of synergies the buyer could pay up to 50.2 percent in cash, 39.3 percent for the mixed structure, and only 29.9 percent for all stock before year-two EPS is diluted.

The first grid shows the premium and financing trade-off. Each ten points of premium costs about 1.7 to 1.8 points of year-two accretion in either an all-cash deal (7.07 to 5.31 between 10 and 20 percent) or an all-stock deal (3.41 to 1.67). Moving from all cash to all stock costs roughly 3.7 points of accretion at a 10 percent premium (7.07 versus 3.41). The cells where accretion turns negative form a diagonal band from the lower-left to the upper-right of the grid: at a 40 percent premium any structure with half or more stock is dilutive. The second grid shows how valuable synergies are: each 30 million of run-rate pre-tax synergies adds about 3.9 points of accretion in an all-cash deal and about 3.2 points in the all-stock deal, since the same dollars are spread over more shares. These are the numbers a negotiating team carries into the room.

### Contribution analysis and ownership

In a stock-for-stock deal, the more important question for the target's shareholders is what fraction of the combined company they will own, versus what fraction of its earnings and value they bring. **Contribution analysis** compares those figures, and is a standard exhibit in fairness opinions.

```python
import pandas as pd
from ad import DEAL, accretion

# Contribution analysis: who contributes what, versus who owns what in an all-stock deal
a_ni, t_ni = DEAL["acq_ni"][0], DEAL["tgt_ni"][0]
a_mv = DEAL["acq_shares"] * DEAL["acq_price"]
t_mv = DEAL["tgt_shares"] * DEAL["tgt_price"]
contrib = pd.DataFrame({"acquirer": [a_ni, a_mv], "target": [t_ni, t_mv]}, index=["Year-1 net income", "Unaffected equity value"])
contrib["target %"] = contrib["target"] / (contrib["acquirer"] + contrib["target"]) * 100
pd.set_option("display.float_format", lambda x: f"{x:,.1f}")
print(contrib)

for pr in (0.0, 0.30):
    r = accretion(pct_stock=1.0, premium=pr, synergies=0.0)
    own = r["new_shares"] / r["years"][0]["shares"]
    print(f"All-stock, premium {pr:.0%}: new shares {r['new_shares']:.1f}m, target holders own {own:.1%}, "
          f"exchange ratio {r['offer_px'] / DEAL['acq_price']:.4f}")

# P/E-differential rule of thumb: an all-stock, no-synergy deal is accretive only if target P/E paid < acquirer P/E
for pr in (0.0, 0.10, 0.20, 0.30):
    px = DEAL["tgt_price"] * (1 + pr)
    pe_paid = px / (90 / 60)
    r = accretion(pct_stock=1.0, premium=pr, synergies=0.0, intangibles_pct=0.0, fee_pct=0.0)
    print(f"premium {pr:4.0%}: P/E paid {pe_paid:5.2f}x vs acquirer 20.00x -> year-1 accretion {r['years'][0]['accretion']:+.3%}")
```

Output:

```
                         acquirer  target  target %
Year-1 net income           540.0    99.0      15.5
Unaffected equity value  10,000.0 1,680.0      14.4
All-stock, premium 0%: new shares 42.0m, target holders own 14.4%, exchange ratio 0.7000
All-stock, premium 30%: new shares 54.6m, target holders own 17.9%, exchange ratio 0.9100
premium   0%: P/E paid 18.67x vs acquirer 20.00x -> year-1 accretion +1.313%
premium  10%: P/E paid 20.53x vs acquirer 20.00x -> year-1 accretion -0.124%
premium  20%: P/E paid 22.40x vs acquirer 20.00x -> year-1 accretion -1.520%
premium  30%: P/E paid 24.27x vs acquirer 20.00x -> year-1 accretion -2.878%
```

Calloway contributes 15.5 percent of year-one net income and holds 14.4 percent of the combined unaffected equity value. At a zero premium, an all-stock deal gives Calloway's shareholders 14.4 percent of the combined company, which exactly matches its share of market value, as expected. At a 30 percent premium, the exchange ratio is 0.9100 Meridian shares per Calloway share and Calloway's holders own 17.9 percent, more than its 15.5 percent earnings contribution. They are being paid for the synergies in advance.

The last block tests the P/E rule of thumb. In an all-stock deal with no synergies, no fees and no purchase accounting, the deal is accretive if the target's P/E at the offer price is lower than the acquirer's. At a zero premium Calloway's P/E of 18.67 times is below Meridian's 20 times and accretion is +1.31 percent; at a 10 percent premium the P/E paid, 20.53 times, is just over 20 and the deal is slightly dilutive (-0.12 percent). The rule is based on the P/E calculated on the same year's earnings, whereas our table divides the offer price by year-zero earnings and compares accretion computed on year-one earnings, in which Calloway's earnings grow faster than Meridian's (10 percent versus 8 percent). That is why the zero-accretion premium in the model is about 9.1 percent, rather than the 7.1 percent at which the offer P/E (on year-zero earnings) equals 20. The rule of thumb is useful for a first reaction in a meeting, but the model is more accurate.

### What EPS accretion does not tell you

An accretive deal can destroy value, and a dilutive one can create it. The **P/E rule** says nothing about risk: Meridian can raise EPS by borrowing more, but this raises its cost of equity. Accretion depends on the accounting treatment of integration costs and intangibles, both of which management can influence through judgement. The share price reaction to an announcement depends on whether the premium paid exceeds the present value of the synergies (Volume 1, Chapter 22), a calculation that this model does not perform. So after the accretion analysis the board should always ask the value question: is the present value of the after-tax synergies, capitalised at an appropriate rate, greater than the premium paid? Here the premium is 30 percent of 1,680 million, or 504 million. After-tax run-rate synergies of 45 million capitalised at an assumed 9 percent are worth 500 million, with no integration costs or growth. The deal therefore transfers essentially all of the synergy value to Calloway's shareholders, which is the usual outcome in a competitive process. Meridian's shareholders gain only if the synergies are larger or the integration is better than the market expects.

## Model Review: A Checklist

Whether you built the model or inherited it, review it systematically before it goes into a committee paper.

| Check | What to look for |
|---|---|
| Sources equal uses | The check cell is exactly zero, not "approximately zero" |
| Signs and units | Money in one currency unit, rates annual, interest on the right balance |
| Hard-codes | No numbers inside formulas; no overwritten formula cells in a row |
| Balance checks | Cash reconciles to the debt schedule; closing balance of one year equals opening of the next |
| Circularity | Switch cell in place; model survives a flush |
| Bridge reconciles | Value-creation bridge terms sum exactly to the equity gain |
| Sensitivity centre | The base case sits in the centre of every table and matches the headline output |
| Reasonableness | Growth, margin, and leverage paths compared with history and peers |
| Alternative method | Recompute the IRR independently, for example with a second tool |
| Stress | Flat and downside operating cases run through the model, with covenant tests |

The "alternative method" check is where code and spreadsheet reinforce each other: building the same model twice, in Excel and Python, and reconciling them to the last decimal catches an astonishing number of errors that neither would reveal on its own.

## Exercises with Solutions

The code below solves six exercises. Attempt each before reading the answers.

**Exercise 1.** Replace the term loan and notes with a single term loan of 5.5 times EBITDA. Compare the sponsor's equity, interest cover, exit leverage and IRR when the loan costs 8.0 percent and 9.5 percent. **Exercise 2.** Remove the cash sweep and compare the five-year outcome. **Exercise 3.** Find the exit multiple that gives a 20 percent IRR, and the maximum entry multiple the sponsor can pay and still earn 20 percent with a 9.0 times exit. **Exercise 4.** In the merger model, change the all-cash funding rate to 9 percent and find the effect on accretion and break-even synergies. **Exercise 5.** In the 50/50 structure, Meridian's share price falls from 40 to 32 before the deal closes. What happens to accretion? **Exercise 6.** Run two downside cases for Northgate: no growth and no margin gain, and a year-two recession in which revenue falls 12 percent with no margin improvement.

```python
from scipy.optimize import brentq
from lbo import run_lbo
from ad import accretion, breakeven_synergies, max_premium

print("EXERCISE 1: all senior debt (TLB 5.5x, no notes) vs base")
for label, kw in (("Base (4.0x TLB + 1.5x notes)", {}), ("5.5x TLB only at 8.0%", dict(tlb_x=5.5, notes_x=0.0)), ("5.5x TLB only at 9.5%", dict(tlb_x=5.5, notes_x=0.0, tlb_rate=0.095))):
    p, su, ops, sch, ret = run_lbo(**kw)
    print(f"  {label:30s} equity {su['equity']:6.1f}  yr-1 interest {sch.loc[1, 'interest']:5.1f}  "
          f"yr-1 cover {sch.loc[1, 'cover']:.2f}x  yr-5 net lev {sch.loc[5, 'lev']:.2f}x  MOIC {ret['moic']:.2f}x  IRR {ret['irr']:.2%}")

print("\nEXERCISE 2: no cash sweep (excess cash accumulates)")
for sw in (1.0, 0.0):
    p, su, ops, sch, ret = run_lbo(sweep=sw)
    print(f"  sweep {sw:.0%}: yr-5 TLB {sch.loc[5, 'tlb_close']:6.1f}  cash {sch.loc[5, 'cash']:6.1f}  net debt {sch.loc[5, 'net_debt']:6.1f}  "
          f"cumulative interest {sch['interest'].sum():6.1f}  IRR {ret['irr']:.3%}")

print("\nEXERCISE 3: exit multiple needed for a 20% IRR, and entry multiple that delivers 20% at a 9.0x exit")
f1 = lambda m: run_lbo(exit_multiple=m)[4]["irr"] - 0.20
f2 = lambda m: run_lbo(entry_multiple=m)[4]["irr"] - 0.20
print(f"  Required exit multiple : {brentq(f1, 5, 15):.3f}x")
print(f"  Maximum entry multiple : {brentq(f2, 7, 14):.3f}x")

print("\nEXERCISE 4: accretion/dilution - all-cash deal funded at a 9% cost of debt")
for kd in (0.065, 0.09):
    r = accretion(pct_stock=0.0, kd=kd)
    print(f"  kd {kd:.1%}: yr-1 {r['years'][0]['accretion']:+.2%}  yr-2 {r['years'][1]['accretion']:+.2%}  "
          f"break-even synergies yr-2 {breakeven_synergies(1, pct_stock=0.0, kd=kd):.1f}")

print("\nEXERCISE 5: 50/50 deal, acquirer share price falls to 32 before announcement")
for px in (40.0, 32.0):
    r = accretion(acq_price=px)
    print(f"  acquirer price {px:.0f}: new shares {r['new_shares']:.1f}m  yr-1 {r['years'][0]['accretion']:+.2%}  yr-2 {r['years'][1]['accretion']:+.2%}")

print("\nEXERCISE 6: downside cases for the LBO (9.0x exit)")
cases = {"Base plan": {},
         "Flat: no growth, no margin gain": dict(growth=[0.0] * 5, margin_step=0.0),
         "Recession in year 2": dict(growth=[0.06, -0.12, 0.02, 0.04, 0.04], margin_step=0.0)}
for label, kw in cases.items():
    p, su, ops, sch, ret = run_lbo(**kw)
    print(f"  {label:32s} yr-5 EBITDA {ops.loc[5, 'ebitda']:6.1f}  peak net lev {sch['lev'].max():.2f}x  min cover {sch['cover'].min():.2f}x  "
          f"MOIC {ret['moic']:.2f}x  IRR {ret['irr']:.2%}")
```

Output:

```
EXERCISE 1: all senior debt (TLB 5.5x, no notes) vs base
  Base (4.0x TLB + 1.5x notes)   equity  384.5  yr-1 interest  46.7  yr-1 cover 2.34x  yr-5 net lev 2.19x  MOIC 2.63x  IRR 21.30%
  5.5x TLB only at 8.0%          equity  384.5  yr-1 interest  42.9  yr-1 cover 2.55x  yr-5 net lev 2.07x  MOIC 2.67x  IRR 21.69%
  5.5x TLB only at 9.5%          equity  384.5  yr-1 interest  51.2  yr-1 cover 2.13x  yr-5 net lev 2.28x  MOIC 2.59x  IRR 20.95%

EXERCISE 2: no cash sweep (excess cash accumulates)
  sweep 100%: yr-5 TLB  183.8  cash   10.0  net debt  323.8  cumulative interest  202.8  IRR 21.299%
  sweep 0%: yr-5 TLB  380.0  cash  182.3  net debt  347.7  cumulative interest  234.8  IRR 20.717%

EXERCISE 3: exit multiple needed for a 20% IRR, and entry multiple that delivers 20% at a 9.0x exit
  Required exit multiple : 8.643x
  Maximum entry multiple : 9.209x

EXERCISE 4: accretion/dilution - all-cash deal funded at a 9% cost of debt
  kd 6.5%: yr-1 -2.16%  yr-2 +3.55%  break-even synergies yr-2 32.4
  kd 9.0%: yr-1 -9.90%  yr-2 -3.61%  break-even synergies yr-2 88.1

EXERCISE 5: 50/50 deal, acquirer share price falls to 32 before announcement
  acquirer price 40: new shares 27.3m  yr-1 -2.91%  yr-2 +1.59%
  acquirer price 32: new shares 34.1m  yr-1 -5.24%  yr-2 -0.85%

EXERCISE 6: downside cases for the LBO (9.0x exit)
  Base plan                        yr-5 EBITDA  148.2  peak net lev 4.71x  min cover 2.34x  MOIC 2.63x  IRR 21.30%
  Flat: no growth, no margin gain  yr-5 EBITDA  100.0  peak net lev 5.17x  min cover 2.14x  MOIC 1.28x  IRR 5.07%
  Recession in year 2              yr-5 EBITDA  102.9  peak net lev 5.23x  min cover 2.08x  MOIC 1.34x  IRR 6.00%
```

### Solutions and commentary

**Solution 1.** Equity is unchanged at 384.5 million, since total debt is still 5.5 times. At 8.0 percent the single tranche is cheaper than the blended 8.0/10.5 percent mix, so year-one interest falls from 46.7 to 42.9 million, cover improves from 2.34 to 2.55 times and the IRR rises from 21.30 to 21.69 percent. But no lender would offer 5.5 turns of senior debt at the same price as 4.0 turns. At 9.5 percent, a more realistic price, interest is 51.2 million, cover is 2.13 times and the IRR is 20.95 percent, lower than the base case. The lesson is that the benefit of simplifying a capital structure depends on the price of the senior debt, and a sponsor should treat the cheapest tranche as a limited resource.

**Solution 2.** With no sweep the term loan only amortises by the mandatory 1 percent, ending at 380.0 million, and cash builds to 182.3 million, so net debt at exit is 347.7 million instead of 323.8. Cumulative interest rises from 202.8 to 234.8 million, because interest is paid on gross debt while the cash earns nothing in our model, and the IRR falls from 21.30 to 20.72 percent. The cost of hoarding cash is the spread between the loan rate and the cash yield, here a full 8 percentage points. Sponsors generally prefer to use free cash to repay expensive debt, or to pay dividends, rather than let it accumulate.

**Solution 3.** The sponsor needs an exit multiple of 8.643 times to earn 20 percent, so the base case has a margin of safety of about 0.36 turns, a cushion of 4 percent of the exit price. The maximum entry multiple for a 20 percent IRR at a 9.0 times exit is 9.209 times, only 0.21 turns, about 21 million dollars of enterprise value, above the base offer. This sets the sponsor's walk-away price and is the kind of number a deal team tracks during an auction. (The brackets in the solver, 7 to 14, exclude entry multiples that would make debt exceed enterprise value, where equity is negative and the IRR undefined.)

**Solution 4.** At 6.5 percent funding the all-cash deal is dilutive in year one (-2.16 percent) and accretive in year two (+3.55 percent), needing 32.4 million of run-rate synergies to break even in year two. At 9 percent funding it is dilutive in both years (-9.90 and -3.61 percent) and break-even synergies rise to 88.1 million, nearly three times as much. The debt cost determines whether cash is the cheap or the expensive currency, and a 2.5 point rise in the borrowing rate moves the answer from a "buy for cash" recommendation to a "do not".

**Solution 5.** When Meridian's share price falls to 32, the stock portion needs 34.1 million new shares instead of 27.3 million. Year-one dilution deepens from 2.91 to 5.24 percent and the year-two result flips from +1.59 to -0.85 percent. A fixed exchange ratio protects the target's shareholders by value only if the price is stable; with a fixed number of shares, the acquirer bears the risk through dilution. This is why deals often include collars that adjust the exchange ratio within a range of acquirer prices.

**Solution 6.** In the flat case, with no growth and no margin gain, EBITDA stays at 100 million, peak net leverage is 5.17 times, minimum interest cover is 2.14 times, and the sponsor earns 1.28 times its money, an IRR of 5.07 percent. In the recession case, EBITDA at year five is 102.9 million, leverage peaks at 5.23 times and cover troughs at 2.08 times, and the IRR is 6.00 percent. In neither case does the company run out of cash (it can service debt throughout), but the return falls from the base 21.30 percent to about a quarter of that. A covenant set at 5.5 times would survive but with little headroom, and a covenant set at 5.0 times would have been breached. This is the real risk in an LBO: not bankruptcy in the typical case, but a sharp return reduction and a negotiating position with lenders in a downturn.

## Chapter Summary

* An LBO model has five parts: sources and uses, an operating forecast, a debt schedule with mandatory amortisation and a cash sweep, exit returns, and sensitivity tables. Each belongs on its own sheet or function.
* The circularity of interest on average balances is benign: the iteration converges quickly (a contraction factor of about 0.03 here), and the choice between average and opening balances moved the IRR by 17 basis points. Always provide a circuit breaker in Excel.
* The value-creation bridge, EBITDA growth plus multiple change plus net debt reduction less fees, sums exactly to the equity gain. In the Northgate case, EBITDA growth supplied 69 percent of the gain and debt paydown 35 percent.
* Entry price matters more than exit multiple: one extra turn paid (9.0 to 10.0 times) costs 5.6 points of IRR, while a turn of exit multiple is worth only 3.0 to 3.8 points.
* The accretion/dilution model combines standalone earnings, after-tax synergies, after-tax financing costs, amortisation of acquired intangibles and share count. Which currency is cheaper depends on the acquirer's earnings yield versus the after-tax cost of debt.
* Break-even synergies and the maximum premium are the numbers that the negotiating team needs; the sensitivity grids show the trade-offs between price, mix and synergies.
* Accretion is not value. Compare the premium with the present value of synergies, and consider risk.
* Build and review models systematically: checks, circuit breakers, independent recomputation and downside cases.
