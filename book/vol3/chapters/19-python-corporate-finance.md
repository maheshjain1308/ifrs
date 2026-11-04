# Chapter 19: Python for Corporate Finance: NPV, IRR, Bonds and Monte Carlo

## Why Learn to Code in a Finance Course

Volumes 1 and 2 taught the ideas: time value of money (Volume 1, Chapter 3), bond pricing (Volume 1, Chapter 4), net present value (Volume 1, Chapter 6), capital budgeting (Volume 1, Chapter 7), and uncertainty and real options (Volume 1, Chapter 8). Every one of those chapters could be worked with a financial calculator and, for the harder cases, with a spreadsheet. This chapter shows how to do the same work in Python, and, more importantly, why a finance leader would want to.

The case for Python is not that it replaces Excel. Excel remains the lingua franca of corporate finance, and Chapter 20 of this volume uses Excel formula patterns side by side with Python for the leveraged buyout and merger models. The case is that code has three properties a spreadsheet struggles to match.

1. **Repeatability.** A script that loads data, computes a valuation and prints a table will give the same answer every time and can be rerun on next quarter's numbers in seconds. There are no hidden cells and no manual steps.
2. **Scale.** A Monte Carlo analysis with one hundred thousand trials, each of which is a full eight-year cash flow forecast, is a single line of vectorised code. In a spreadsheet it requires a data table, patience and a macro.
3. **Auditability.** A reviewer can read a function, run it against a case with a known answer, and test it. Code can be version-controlled, so you can see exactly what changed between last year's model and this year's.

The audience is the MBA student or finance leader who will manage analysts who code, review models, and occasionally want a quick answer without waiting. We teach a small, practical subset of the language and build a reusable toolkit: time-value functions, bond analytics and a project simulation engine.

Every listing in this chapter was executed, and every block labelled "Output" is the genuine printed result, pasted without editing. If you type the listings into a file and run them with the library versions shown in the first listing, you should obtain identical numbers, down to the last digit printed. Where we describe a chart, we also executed the plotting code, and we report what the data in the chart shows, because a book cannot carry a live figure and because the numbers behind a picture are usually more useful than the picture.

All companies and projects in this chapter are fictional and illustrative. Numbers are chosen to teach technique, not to describe any real business or market.

## Environment Setup

### Installing Python and the libraries

You need three things: a Python interpreter, a handful of numerical libraries, and somewhere to write code. For the interpreter, any recent version of Python 3 will do. This chapter was run on Python 3.13, but nothing in it depends on features newer than Python 3.8. For the libraries, the standard scientific stack is enough:

* **numpy** provides the fast array, the basic data structure for numerical work.
* **pandas** provides the DataFrame, a table with labelled rows and columns, which is the natural structure for a financial statement or a debt schedule.
* **scipy** provides numerical routines. We use only its root finder (`brentq`) and the normal distribution.
* **matplotlib** draws charts. It is optional for the calculations and used only in one section.

From a command line, the sequence is the same on Windows, macOS and Linux. Create an isolated environment so that this project's libraries do not collide with other projects, activate it, and install the packages:

```
python -m venv finance-env
source finance-env/bin/activate        (Windows: finance-env\Scripts\activate)
pip install numpy pandas scipy matplotlib
```

For writing code, a plain editor and the command line is the most transparent; Jupyter notebooks suit exploration and teaching. What matters is saving code in files so the analysis can be rerun.

### Verify, seed, and set display options

The first listing does three things that every serious analysis script should do. It records the versions of the libraries, so a future reader knows what produced the numbers. It creates a single seeded random number generator, so that any simulation is reproducible. And it sets the display format so that tables print consistently.

```python
import sys, platform
import numpy as np
import pandas as pd
import scipy

print("Python  :", platform.python_version())
print("numpy   :", np.__version__)
print("pandas  :", pd.__version__)
print("scipy   :", scipy.__version__)

# Reproducible random numbers: a single seeded generator used throughout the chapter
rng = np.random.default_rng(seed=2026)
print("First three uniform draws:", np.round(rng.random(3), 4))

# Display options so that tables print compactly and identically each run
pd.set_option("display.float_format", lambda x: f"{x:,.2f}")
pd.set_option("display.width", 100)
```

Output:

```
Python  : 3.13.18
numpy   : 2.5.3
pandas  : 3.0.5
scipy   : 1.18.1
First three uniform draws: [0.1789 0.6399 0.4673]
```

Modern numpy recommends creating a `Generator` object and passing it around rather than relying on hidden global state. Reproducibility matters: when a board member asks why the probability of a loss was 19.2 percent in the draft and 19.4 percent in the final, "we changed the random seed" is an embarrassing answer. Fix the seed, record it, and report simulation error.

## numpy Basics: Cash Flows as Arrays

A cash flow stream is naturally a one-dimensional array: element zero is today, element one is the end of year one, and so on. A discount factor is `1 / (1 + r) ** t`. The key idea in numpy is **vectorisation**: an operation written once applies to every element of the array, with no loop. This is both shorter and much faster than a Python `for` loop.

The listing below discounts a five-year project, then uses **broadcasting** to compute the NPV at seven different discount rates in one expression. Broadcasting is numpy's rule for combining arrays of different shapes: a column of rates with shape (7, 1) and a row of times with shape (1, 5) combine to a grid with shape (7, 5), one row per rate and one column per year. The expression `rates[:, None]` is the standard way to turn a flat array into a column.

```python
import numpy as np

# A five-year project: outlay today, then four years of inflows (USD thousands)
cash_flows = np.array([-1000.0, 250.0, 300.0, 350.0, 400.0])
years = np.arange(len(cash_flows))
r = 0.10

discount_factors = 1.0 / (1.0 + r) ** years
present_values = cash_flows * discount_factors

print("years            :", years)
print("discount factors :", np.round(discount_factors, 4))
print("present values   :", np.round(present_values, 2))
print("NPV at 10%       :", round(present_values.sum(), 2))

# Vectorisation: NPV at many discount rates with one broadcast operation
rates = np.arange(0.00, 0.31, 0.05)                    # shape (7,)
grid = cash_flows[None, :] / (1 + rates[:, None]) ** years[None, :]   # shape (7, 5)
npv_curve = grid.sum(axis=1)
for rate, v in zip(rates, npv_curve):
    print(f"rate {rate:4.0%}  NPV {v:9.2f}")

print("shape of grid:", grid.shape)
print("cumulative undiscounted:", np.cumsum(cash_flows))
```

Output:

```
years            : [0 1 2 3 4]
discount factors : [1.     0.9091 0.8264 0.7513 0.683 ]
present values   : [-1000.     227.27   247.93   262.96   273.21]
NPV at 10%       : 11.37
rate   0%  NPV    300.00
rate   5%  NPV    141.63
rate  10%  NPV     11.37
rate  15%  NPV    -96.93
rate  20%  NPV   -187.89
rate  25%  NPV   -264.96
rate  30%  NPV   -330.82
shape of grid: (7, 5)
cumulative undiscounted: [-1000.  -750.  -450.  -100.   300.]
```

Read the output carefully, because it contains the whole of capital budgeting in miniature. The undiscounted cash flows sum to 300, so a naive observer would call this a handsome project: pay 1,000, get 1,300 back. The NPV at 10 percent is only 11.37, positive but thin. At 15 percent it is negative 96.93. The NPV falls monotonically as the rate rises, because every inflow is in the future and is discounted more heavily, while the outlay is today and is not discounted at all. The point where the curve crosses zero is the internal rate of return, which lies between 10 and 15 percent. We will compute it exactly shortly; it is 10.48 percent.

The cumulative undiscounted line shows the project is still 100 short at the end of year three and recovers its outlay during year four. That is the simple payback, 3.25 years. We compute it, and the discounted payback, in the next section.

## pandas Basics: The Project as a Table

An array has no labels. A financial model does: years across or down, line items with names. The pandas DataFrame supplies the labels and a rich set of operations on columns. The mental model is a spreadsheet in which each column is a vector and a formula applies to the whole column.

The next listing builds a five-year project from operating assumptions. It computes EBITDA, depreciation, EBIT, tax, free cash flow, the discount factor, the present value and the cumulative present value. The pattern `df["ebitda"] = df["revenue"] - df["opex"]` is the pandas equivalent of filling a spreadsheet formula down a column.

```python
import pandas as pd

pd.set_option("display.float_format", lambda x: f"{x:,.2f}")
pd.set_option("display.width", 100)

df = pd.DataFrame({
    "year":    [0, 1, 2, 3, 4, 5],
    "revenue": [0.0, 1200.0, 1500.0, 1800.0, 1900.0, 1900.0],
    "opex":    [0.0, 800.0, 950.0, 1100.0, 1150.0, 1150.0],
    "capex":   [1500.0, 100.0, 100.0, 50.0, 50.0, 50.0],
}).set_index("year")

tax_rate = 0.25
df["ebitda"] = df["revenue"] - df["opex"]
df["depreciation"] = [0.0] + [300.0] * 5
df["ebit"] = df["ebitda"] - df["depreciation"]
df["tax"] = (df["ebit"] * tax_rate).clip(lower=0)
df["fcf"] = df["ebitda"] - df["tax"] - df["capex"]
df.loc[5, "fcf"] += 200.0      # salvage / working capital recovery in the final year

r = 0.09
df["df"] = (1 + r) ** -df.index.to_series()
df["pv"] = df["fcf"] * df["df"]
df["cum_pv"] = df["pv"].cumsum()

print(df[["revenue", "ebitda", "tax", "capex", "fcf", "df", "pv", "cum_pv"]])
print()
print("NPV =", round(df["pv"].sum(), 2))
```

Output:

```
      revenue  ebitda    tax    capex       fcf   df        pv    cum_pv
year
0        0.00    0.00   0.00 1,500.00 -1,500.00 1.00 -1,500.00 -1,500.00
1    1,200.00  400.00  25.00   100.00    275.00 0.92    252.29 -1,247.71
2    1,500.00  550.00  62.50   100.00    387.50 0.84    326.15   -921.56
3    1,800.00  700.00 100.00    50.00    550.00 0.77    424.70   -496.85
4    1,900.00  750.00 112.50    50.00    587.50 0.71    416.20    -80.65
5    1,900.00  750.00 112.50    50.00    787.50 0.65    511.82    431.17

NPV = 431.17
```

Several details are worth studying.

* **The index is the year.** Setting `year` as the index means `df.loc[5, "fcf"]` addresses year five directly, and `df.index.to_series()` lets us use the years in arithmetic. We adjust the final-year free cash flow by adding 200 of salvage and working-capital recovery with `df.loc[5, "fcf"] += 200.0`. In Excel, this is the cell that someone types over a formula and forgets about. In code, the adjustment is a visible, commented line.
* **Tax uses `.clip(lower=0)`.** In year one, EBIT is 100 (EBITDA of 400 less depreciation of 300), so tax is 25. Had EBIT been negative the clip would have set tax to zero, which is the pandas equivalent of the numpy `maximum` above.
* **Free cash flow here is EBITDA minus tax minus capital expenditure.** This is a simplification: it ignores working capital changes other than the terminal recovery. In a full model you would add a line for the change in net working capital (Volume 1, Chapter 7).
* **The cumulative PV column tells the discounted payback story.** It turns positive during year five: after year four the project is still 80.65 short on a present-value basis, and year five's present value of 511.82 more than covers it.
The NPV is 431.17 at a 9 percent discount rate. The first-year outlay is 1,500, so the project has a profitability index (Volume 1, Chapter 7) of about 1.29: each dollar invested creates 29 cents of value at the margin. A DataFrame also makes sensitivity analysis easy, because you can wrap the whole calculation in a function of the discount rate or the tax rate and call it repeatedly. We do exactly that later in this chapter.

### The Excel NPV trap

A trap lurks in the spreadsheet function `NPV`. Excel's `=NPV(rate, values)` assumes the first value occurs at the end of period one, not today. To value a stream whose first element is the time-zero outlay, you write `=B5 + NPV(rate, C5:G5)`, or equivalently `=NPV(rate, B5:G5) * (1 + rate)`. Many an analyst has understated an NPV by discounting the initial outlay one year. The Python function we build in the next section takes the convention that element zero is at time zero and avoids the issue, but you must remember that the two conventions differ whenever you compare results.

## Time-Value-of-Money Functions

Volume 1, Chapter 3 derived the formulas. Here we implement them as a small library and then test it. We write our own rather than import a ready-made package for two reasons: writing them makes the sign conventions and the timing conventions explicit, and the code is short enough to read in full.

### Sign conventions and timing

We follow the convention used by Excel's financial functions and by most calculators: **cash received is positive, cash paid is negative**. So if you deposit 5,000 a year, the payment is -5,000 and the future value comes back positive. The functions take an optional `when` argument, 0 for payments at the end of each period (an ordinary annuity) and 1 for payments at the start (an annuity due). The relationships are the standard ones:

```
FV = -[ PV·(1+r)ⁿ + PMT·(1 + r·when)·((1+r)ⁿ - 1)/r ]
PV = -[ FV + PMT·(1 + r·when)·((1+r)ⁿ - 1)/r ] / (1+r)ⁿ
PMT = -[ PV·(1+r)ⁿ + FV ]·r / [ (1 + r·when)·((1+r)ⁿ - 1) ]
NPER = ln[(-FV + z)/(PV + z)] / ln(1+r),  where z = PMT·(1 + r·when)/r
```

The rate cannot be isolated algebraically, so `rate` and `irr` find it numerically. We use Brent's method (`scipy.optimize.brentq`), which requires a bracket, an interval over which the function changes sign, and is guaranteed to converge when one exists. This is more robust than Newton's method, which can wander off when the starting guess is poor.

### The library

Save the following as `tvm.py`. Every later listing in this chapter that begins with `from tvm import *` relies on it.

```python
"""Small time-value-of-money library used throughout this chapter."""
import numpy as np
from scipy.optimize import brentq
from datetime import date

def fv(rate, nper, pmt, pv=0.0, when=0):
    """Future value. Sign convention: cash paid out is negative. when=1 for annuity-due."""
    if rate == 0:
        return -(pv + pmt * nper)
    g = (1 + rate) ** nper
    return -(pv * g + pmt * (1 + rate * when) * (g - 1) / rate)

def pv(rate, nper, pmt, fv_=0.0, when=0):
    if rate == 0:
        return -(fv_ + pmt * nper)
    g = (1 + rate) ** nper
    return -(fv_ + pmt * (1 + rate * when) * (g - 1) / rate) / g

def pmt(rate, nper, pv_, fv_=0.0, when=0):
    if rate == 0:
        return -(pv_ + fv_) / nper
    g = (1 + rate) ** nper
    return -(pv_ * g + fv_) * rate / ((1 + rate * when) * (g - 1))

def nper(rate, pmt_, pv_, fv_=0.0, when=0):
    if rate == 0:
        return -(pv_ + fv_) / pmt_
    z = pmt_ * (1 + rate * when) / rate
    return np.log((-fv_ + z) / (pv_ + z)) / np.log(1 + rate)

def npv(rate, flows):
    flows = np.asarray(flows, dtype=float)
    return float(np.sum(flows / (1 + rate) ** np.arange(len(flows))))

def irr(flows, lo=-0.99, hi=10.0):
    flows = np.asarray(flows, dtype=float)
    f = lambda r: npv(r, flows)
    if f(lo) * f(hi) > 0:
        return float("nan")
    return brentq(f, lo, hi, xtol=1e-12)

def rate(nper_, pmt_, pv_, fv_=0.0, when=0):
    f = lambda r: fv_ - fv(r, nper_, pmt_, pv_, when)
    return brentq(f, -0.99, 10.0, xtol=1e-12)

def xnpv(rate_, flows, dates):
    d0 = dates[0]
    return sum(cf / (1 + rate_) ** ((d - d0).days / 365.0) for cf, d in zip(flows, dates))

def xirr(flows, dates):
    return brentq(lambda r: xnpv(r, flows, dates), -0.99, 10.0, xtol=1e-12)

def mirr(flows, finance_rate, reinvest_rate):
    flows = np.asarray(flows, dtype=float)
    n = len(flows) - 1
    pos = np.where(flows > 0, flows, 0.0)
    neg = np.where(flows < 0, flows, 0.0)
    fv_pos = np.sum(pos * (1 + reinvest_rate) ** (n - np.arange(len(flows))))
    pv_neg = np.sum(neg / (1 + finance_rate) ** np.arange(len(flows)))
    return (fv_pos / -pv_neg) ** (1 / n) - 1

def payback(flows):
    cum = np.cumsum(flows)
    for t in range(1, len(flows)):
        if cum[t] >= 0 > cum[t - 1]:
            return t - 1 + (-cum[t - 1]) / flows[t]
    return float("nan")

def discounted_payback(flows, r):
    flows = np.asarray(flows, dtype=float)
    return payback(flows / (1 + r) ** np.arange(len(flows)))

def ear(nominal, m):
    return (1 + nominal / m) ** m - 1
```

The functions `npv` and `irr` take flows whose first element is at time zero, and `irr` returns `nan` rather than an obscure error when there is no sign change over the bracket. `xnpv` uses actual days divided by 365, the convention of Excel's `XNPV`, so you can reconcile to a spreadsheet. `mirr` compounds positive flows forward at the reinvestment rate and discounts negative flows back at the financing rate. `payback` interpolates linearly within the year in which the cumulative flow turns positive.

### Putting the functions to work

The next listing exercises each function on a problem that has a known answer or an easy sanity check. Read the comments, predict the answer, then compare with the output.

```python
from tvm import *

# 1. Future value of saving 5,000 a year for 20 years at 7%
print("FV of 5,000/yr, 20y, 7%      :", round(fv(0.07, 20, -5000), 2))
# 2. Present value of a 30-year annuity of 12,000 at 6%
print("PV of 12,000/yr, 30y, 6%     :", round(pv(0.06, 30, -12000), 2))
# 3. Monthly payment on a 400,000 mortgage, 6.0% APR, 30 years
m = pmt(0.06 / 12, 360, 400000)
print("Mortgage payment (monthly)   :", round(m, 2))
# 4. How many months to repay it if we pay 3,000 a month?
print("Months to repay at 3,000     :", round(nper(0.06 / 12, -3000, 400000), 2))
# 5. Implied rate: pay 1,000 today, receive 1,610.51 in 5 years
print("Implied annual rate          :", round(rate(5, 0, -1000, 1610.51), 6))
# 6. Effective annual rate of 12% compounded monthly, and continuously
print("EAR 12% monthly              :", round(ear(0.12, 12), 6))
print("EAR 12% continuous           :", round(np.exp(0.12) - 1, 6))

# Project metrics
cf = [-1000, 250, 300, 350, 400]
print()
print("NPV @10%                     :", round(npv(0.10, cf), 2))
print("IRR                          :", round(irr(cf), 6))
print("Simple payback (yrs)         :", round(payback(cf), 3))
print("Discounted payback @10%      :", round(discounted_payback(cf, 0.10), 3))
print("MIRR (fin 10%, reinvest 6%)  :", round(mirr(cf, 0.10, 0.06), 6))

# Non-conventional flows: two sign changes -> two IRRs
odd = [-100, 330, -242]
print()
print("NPV at 5%, 10%, 20%          :", [round(npv(r, odd), 3) for r in (0.05, 0.10, 0.20)])
print("IRR search on [-0.99,10]     :", irr(odd))
print("IRR (low bracket 0, hi 0.15) :", round(irr(odd, 0.0, 0.15), 6))
print("IRR (low bracket 0.15, hi 2) :", round(irr(odd, 0.15, 2.0), 6))

# Irregular dates
from datetime import date
dates = [date(2026, 1, 15), date(2026, 7, 1), date(2027, 3, 31), date(2028, 1, 15)]
flows = [-10000, 2500, 4000, 6000]
print()
print("XNPV @8%                     :", round(xnpv(0.08, flows, dates), 2))
print("XIRR                         :", round(xirr(flows, dates), 6))
```

Output:

```
FV of 5,000/yr, 20y, 7%      : 204977.46
PV of 12,000/yr, 30y, 6%     : 165177.97
Mortgage payment (monthly)   : -2398.2
Months to repay at 3,000     : 220.27
Implied annual rate          : 0.1
EAR 12% monthly              : 0.126825
EAR 12% continuous           : 0.127497

NPV @10%                     : 11.37
IRR                          : 0.104845
Simple payback (yrs)         : 3.25
Discounted payback @10%      : 3.958
MIRR (fin 10%, reinvest 6%)  : 0.088889

NPV at 5%, 10%, 20%          : [-5.215, 0.0, 6.944]
IRR search on [-0.99,10]     : nan
IRR (low bracket 0, hi 0.15) : 0.1
IRR (low bracket 0.15, hi 2) : 1.2

XNPV @8%                     : 1203.13
XIRR                         : 0.171702
```

Walk through the results.

**Annuities and the mortgage.** Saving 5,000 a year for 20 years at 7 percent accumulates to 204,977.46, of which only 100,000 is deposits. A 400,000 loan at 6 percent APR over 360 months needs a monthly payment of 2,398.20 (negative, because it is a payment); note that we pass the monthly rate, 0.06/12, with the number of months, since passing an annual rate with a monthly period count is a classic error. At 3,000 a month the loan is repaid in 220.27 months, about 18.4 years.

**Rates.** A 1,000 investment that grows to 1,610.51 in five years has an implied rate of 10 percent. A 12 percent nominal rate compounded monthly is 12.6825 percent effective, and continuous compounding gives 12.7497 percent.

**Project metrics.** The same project we met in the numpy section has NPV 11.37 at 10 percent, an IRR of 10.4845 percent, a simple payback of 3.25 years and a discounted payback of 3.958 years. The MIRR, computed with a 10 percent financing rate and a 6 percent reinvestment rate, is 8.8889 percent, below the IRR. This illustrates the critique of IRR made in Volume 1, Chapter 6: the IRR implicitly assumes intermediate inflows are reinvested at the IRR itself. If the firm's actual reinvestment opportunity is only 6 percent, the realised return is lower. MIRR is below the 10 percent hurdle, which agrees with how thin the NPV is when the reinvestment assumption is made less generous.

**Non-conventional cash flows.** The stream (-100, +330, -242) has two sign changes and so two IRRs: with x = 1 + r the NPV is zero when 100x² - 330x + 242 = 0, which factors as 100(x - 1.1)(x - 2.2), so the IRRs are 10 and 120 percent. Our wide-bracket search returns `nan` because the NPV is negative at both ends, so there is no sign change for Brent's method to start from; brackets straddling each root recover both. When a pattern has more than one sign change, examine the NPV profile directly.

**Irregular dates.** For flows not on annual anniversaries, `xnpv` and `xirr` use actual dates; the four flows in the listing give an XIRR of 17.17 percent.

### Amortization schedules

A loan schedule is the canonical DataFrame exercise: each row depends on the previous row's balance. We cannot vectorise a recursion of this kind directly, so we use a simple loop that appends rows and then convert the result into a DataFrame for summarising. (Chapter 20 uses the same approach for debt schedules with a cash sweep.)

```python
import pandas as pd
from tvm import pmt

principal = 250000.0
apr = 0.06
n = 12   # first year only, for display
payment = -pmt(apr / 12, 360, principal)

rows, bal = [], principal
for k in range(1, 361):
    interest = bal * apr / 12
    princ = payment - interest
    bal -= princ
    rows.append((k, payment, interest, princ, bal))
sched = pd.DataFrame(rows, columns=["month", "payment", "interest", "principal", "balance"]).set_index("month")
pd.set_option("display.float_format", lambda x: f"{x:,.2f}")
print(sched.head(3))
print(sched.loc[[120, 240, 360]])
print()
print("Total interest over life :", round(sched["interest"].sum(), 2))
print("Interest in year 1       :", round(sched.loc[1:12, "interest"].sum(), 2))
print("Interest in year 30      :", round(sched.loc[349:360, "interest"].sum(), 2))
print("Balance after 5 years    :", round(sched.loc[60, "balance"], 2))
```

Output:

```
       payment  interest  principal    balance
month
1     1,498.88  1,250.00     248.88 249,751.12
2     1,498.88  1,248.76     250.12 249,501.00
3     1,498.88  1,247.51     251.37 249,249.63
       payment  interest  principal    balance
month
120   1,498.88  1,048.32     450.55 209,214.31
240   1,498.88    679.14     819.73 135,008.97
360   1,498.88      7.46   1,491.42      -0.00

Total interest over life : 289595.47
Interest in year 1       : 14916.49
Interest in year 30      : 571.17
Balance after 5 years    : 232635.89
```

The schedule shows the familiar front-loaded interest pattern. In month one, 1,250.00 of the 1,498.88 payment is interest; only 248.88 reduces principal. By month 120, interest has fallen to 1,048.32, and in the final month interest is only 7.46. Over the life of the 250,000 loan, the borrower pays 289,595.47 in interest, more than the amount borrowed. Interest in year one is 14,916.49 and in year 30 only 571.17. After five years the balance is still 232,635.89, so only 17,364.11 of principal (about 6.9 percent) has been repaid, a fact that surprises many first-time borrowers. The final balance of -0.00 is floating-point residue from the arithmetic and confirms the schedule closes to zero.

## Bond Pricing, Yield, Duration and Convexity

Volume 1, Chapter 4 priced bonds as the present value of coupons and principal. The bond library is the same idea in code, with the addition of the sensitivity measures that a treasurer or portfolio manager uses to manage interest-rate risk.

### The formulas

For a bond with face value F, annual coupon rate c, m payments per year and a yield y (quoted as an annual rate compounded m times a year), the cash flow at time t_k = k/m is C = F·c/m, with the final flow also including F. Then:

```
Price                = Σ CF_k / (1 + y/m)^k
Macaulay duration    = Σ t_k · PV(CF_k) / Price                 (in years)
Modified duration    = Macaulay / (1 + y/m)
Convexity            = Σ PV(CF_k) · k(k+1) / [ Price · m² · (1 + y/m)² ]
Price change ≈ -ModDur · Δy + ½ · Convexity · (Δy)²
```

Macaulay duration is the present-value-weighted average time to receipt of cash. Modified duration is the percentage price change for a small change in yield (with the sign reversed). Convexity captures the curvature of the price-yield relationship; it is always positive for a plain coupon bond, which is good for the bondholder: prices rise more when yields fall than they drop when yields rise by the same amount.

### The bond library

Save the following as `bonds.py`.

```python
"""Bond analytics: price, yield to maturity, duration and convexity."""
import numpy as np
from scipy.optimize import brentq

def cashflows(face, coupon_rate, years, freq=2):
    n = int(round(years * freq))
    t = np.arange(1, n + 1) / freq
    cf = np.full(n, face * coupon_rate / freq)
    cf[-1] += face
    return t, cf

def price(face, coupon_rate, years, ytm, freq=2):
    t, cf = cashflows(face, coupon_rate, years, freq)
    return float(np.sum(cf / (1 + ytm / freq) ** (t * freq)))

def ytm_from_price(face, coupon_rate, years, px, freq=2):
    return brentq(lambda y: price(face, coupon_rate, years, y, freq) - px, -0.05, 1.0, xtol=1e-12)

def macaulay(face, coupon_rate, years, ytm, freq=2):
    t, cf = cashflows(face, coupon_rate, years, freq)
    pvs = cf / (1 + ytm / freq) ** (t * freq)
    return float(np.sum(t * pvs) / np.sum(pvs))

def modified(face, coupon_rate, years, ytm, freq=2):
    return macaulay(face, coupon_rate, years, ytm, freq) / (1 + ytm / freq)

def convexity(face, coupon_rate, years, ytm, freq=2):
    t, cf = cashflows(face, coupon_rate, years, freq)
    k = t * freq
    pvs = cf / (1 + ytm / freq) ** k
    return float(np.sum(pvs * k * (k + 1)) / (np.sum(pvs) * freq ** 2 * (1 + ytm / freq) ** 2))
```

The `cashflows` function builds the schedule once and every other function reuses it, so adding day-count conventions later means changing one function.

### Price, yield and risk

```python
from bonds import *

face, c, T = 1000.0, 0.05, 10
for y in (0.03, 0.04, 0.05, 0.06, 0.07):
    print(f"YTM {y:5.1%}  price {price(face, c, T, y):9.2f}")

p = price(face, c, T, 0.06)
print("\nImplied YTM from price", round(p, 2), "->", round(ytm_from_price(face, c, T, p), 6))

mac = macaulay(face, c, T, 0.06)
mod = modified(face, c, T, 0.06)
cvx = convexity(face, c, T, 0.06)
print(f"Macaulay duration : {mac:.4f} years")
print(f"Modified duration : {mod:.4f}")
print(f"Convexity         : {cvx:.4f}")

# How good is the duration (and duration+convexity) approximation?
print("\n shock   actual%   duration%   dur+cvx%")
for dy in (-0.02, -0.01, 0.01, 0.02):
    actual = price(face, c, T, 0.06 + dy) / p - 1
    d1 = -mod * dy
    d2 = -mod * dy + 0.5 * cvx * dy ** 2
    print(f"{dy:+.2%}  {actual:9.4%}  {d1:9.4%}  {d2:9.4%}")

# Duration across maturities and coupons at a 6% yield
print("\nMaturity  zero-coupon  5% coupon  8% coupon  (modified duration)")
for T_ in (2, 5, 10, 20, 30):
    row = [modified(face, cc, T_, 0.06) for cc in (0.0, 0.05, 0.08)]
    print(f"{T_:>5}y   " + "   ".join(f"{x:9.3f}" for x in row))
```

Output:

```
YTM  3.0%  price   1171.69
YTM  4.0%  price   1081.76
YTM  5.0%  price   1000.00
YTM  6.0%  price    925.61
YTM  7.0%  price    857.88

Implied YTM from price 925.61 -> 0.06
Macaulay duration : 7.8950 years
Modified duration : 7.6650
Convexity         : 71.7854

 shock   actual%   duration%   dur+cvx%
-2.00%   16.8693%   15.3301%   16.7658%
-1.00%    8.0366%    7.6650%    8.0240%
+1.00%   -7.3180%   -7.6650%   -7.3061%
+2.00%  -13.9872%  -15.3301%  -13.8944%

Maturity  zero-coupon  5% coupon  8% coupon  (modified duration)
    2y       1.942       1.871       1.835
    5y       4.854       4.341       4.130
   10y       9.709       7.665       7.074
   20y      19.417      12.011      10.905
   30y      29.126      14.340      13.160
```

Study the first block. A bond with a 5 percent coupon and ten years to maturity is priced at exactly 1,000.00 when the yield is 5 percent, our sanity check. At a 3 percent yield it is worth 1,171.69, at 7 percent only 857.88. The price-yield relationship is convex: moving the yield down by two points adds 171.69, while moving it up by two points subtracts only 142.12.

At a 6 percent yield the price is 925.61 and `ytm_from_price` recovers 6 percent exactly, confirming that price and yield functions are inverses of each other. The Macaulay duration is 7.895 years: on a present-value-weighted basis, you wait nearly eight years to receive your money, even though the bond matures in ten, because coupons arrive along the way. The modified duration is 7.665, which means that a one percentage point increase in yield reduces the price by about 7.7 percent. The convexity is 71.79.

The shock table compares the exact price change with the two approximations. For a one-point move, the duration-only estimate is off by about 0.35 percentage points (it says -7.665 percent when the true change is -7.318 percent), while adding the convexity term reduces the error to about 0.012 points (-7.306 percent). For a two-point move the duration estimate is off by 1.34 points but the duration-plus-convexity estimate is within 0.1 points. Duration alone always overstates losses from rising yields and understates gains from falling yields; convexity corrects both errors.

The last table shows how duration behaves. A zero-coupon bond's modified duration is almost exactly its maturity divided by (1 + y/2): 9.709 for a ten-year, 29.126 for a thirty-year. Coupons shorten duration, and the effect is greater for higher coupons and for longer maturities. Notice how a 30-year bond with a 5 percent coupon has a modified duration of 14.34, less than half the maturity: duration grows far more slowly than maturity at long horizons. This is why a long bond with a high coupon is a much safer instrument than a long zero.

### A bond portfolio

Real bond books mix maturities and coupons, so we also need portfolio duration.

```python
import numpy as np
import pandas as pd
from bonds import price, modified

# Bootstrapping a spot curve from par yields (annual-pay par bonds, face 100)
par = pd.Series({1: 0.030, 2: 0.034, 3: 0.037, 4: 0.039, 5: 0.041})
spot = {}
for n, y in par.items():
    annuity = sum(1 / (1 + spot[k]) ** k for k in range(1, n))
    spot[n] = ((1 + y) / (1 - y * annuity)) ** (1 / n) - 1
spot = pd.Series(spot)
fwd = pd.Series({n: (1 + spot[n]) ** n / (1 + spot[n - 1]) ** (n - 1) - 1 if n > 1 else spot[1] for n in spot.index})
curve = pd.DataFrame({"par": par, "spot": spot, "fwd_1y": fwd})
print((curve * 100).round(4))

# Price a 5-year 6% annual-pay bond off the spot curve, then compute its YTM
cf = np.array([6, 6, 6, 6, 106.0])
pv = sum(cf[i] / (1 + spot[i + 1]) ** (i + 1) for i in range(5))
print("\nPrice off spot curve:", round(pv, 4))
from scipy.optimize import brentq
y = brentq(lambda r: sum(cf[i] / (1 + r) ** (i + 1) for i in range(5)) - pv, 0, 1)
print("Yield to maturity   :", round(y * 100, 4), "%")

# Portfolio duration of a small bond book (market values in USD millions)
book = pd.DataFrame({
    "coupon": [0.03, 0.05, 0.07],
    "years":  [3, 7, 15],
    "ytm":    [0.040, 0.055, 0.062],
    "face_m": [50.0, 80.0, 40.0],
})
book["price"] = [price(100, r.coupon, r.years, r.ytm) for r in book.itertuples()]
book["mv_m"] = book["face_m"] * book["price"] / 100
book["moddur"] = [modified(100, r.coupon, r.years, r.ytm) for r in book.itertuples()]
w = book["mv_m"] / book["mv_m"].sum()
pd.set_option("display.float_format", lambda x: f"{x:,.3f}")
print()
print(book)
print("\nPortfolio market value (USD m):", round(book["mv_m"].sum(), 3))
print("Portfolio modified duration   :", round((w * book["moddur"]).sum(), 4))
print("Approx. loss for +50bp shift  : USD", round((w * book["moddur"]).sum() * 0.005 * book["mv_m"].sum(), 3), "m")
```

Output:

```
   par    spot  fwd_1y
1  3.0  3.0000  3.0000
2  3.4  3.4068  3.8153
3  3.7  3.7163  4.3380
4  3.9  3.9250  4.5538
5  4.1  4.1384  4.9964

Price off spot curve: 108.5047
Yield to maturity   : 4.0851 %

   coupon  years   ytm  face_m   price   mv_m  moddur
0   0.030      3 0.040  50.000  97.199 48.600   2.833
1   0.050      7 0.055  80.000  97.127 77.702   5.814
2   0.070     15 0.062  40.000 107.740 43.096   9.441

Portfolio market value (USD m): 169.397
Portfolio modified duration   : 5.8814
Approx. loss for +50bp shift  : USD 4.981 m
```

The table above shows portfolio duration. Our 169.397 million book has a modified duration of 5.8814, and a parallel upward shift of 50 basis points would cost roughly 4.981 million. That one number, the dollar value of a rate shock, is what a corporate treasurer with a bond portfolio or a pension fund trustee asks for first.

## Project Simulation: Monte Carlo NPV

Volume 1, Chapter 8 introduced scenario analysis, sensitivity analysis and simulation as ways of dealing with uncertainty in a capital budgeting forecast. A deterministic NPV gives one number. A simulation gives a distribution, and a distribution answers questions that a single number cannot: how likely is a loss, how bad is the downside, and which input drives the risk?

### The method

A simulation proceeds in five steps: write the NPV as a function of its uncertain inputs; assign each input a distribution that reflects what you actually know; draw many sets of inputs and compute the NPV for each; summarise the distribution (mean, percentiles, probability of a loss); and report the simulation error.

### The illustrative project

Our fictional company, Tidewater Components, is evaluating a new plant. The initial capital expenditure is 70 million dollars, depreciated straight-line over an eight-year life with no salvage value. Four inputs are uncertain:

| Input | Distribution | Parameters | Rationale |
|---|---|---|---|
| Year-1 volume (thousand units) | Triangular | min 800, mode 1,000, max 1,300 | Sales team has a most-likely figure and a skewed range |
| Price per unit (USD) | Normal | mean 50, std 6 | Competitive pricing noise |
| Variable cost (share of price) | Uniform | 52% to 68% | Input cost uncertainty with no preferred value |
| Annual volume growth | Normal | mean 3%, std 2% | Market growth |

Fixed cash costs are 4.0 million a year, tax is 25 percent on positive EBIT, and the discount rate is 10 percent. All of these are treated as known, which is itself an assumption. We choose the triangular distribution for volume because the sales director can state a minimum, a most likely value and a maximum but not a mean and standard deviation. We choose the uniform distribution for variable cost because the procurement team could give only a range. These choices matter for the answer, and an analyst should always document and defend them.

The code builds a two-dimensional array with one row per trial and one column per year, so that all 100,000 forecasts are computed simultaneously. Revenue in millions equals volume in thousands times price in dollars divided by 1,000.

```python
import numpy as np
import pandas as pd

rng = np.random.default_rng(2026)
N = 100_000

# Uncertain inputs for a new-plant project (USD millions, illustrative)
units   = rng.triangular(left=800, mode=1000, right=1300, size=N)           # thousand units, year-1 volume
price   = rng.normal(loc=50.0, scale=6.0, size=N)                        # USD per unit
vc_pct  = rng.uniform(0.52, 0.68, size=N)                                # variable cost as share of price
growth  = rng.normal(0.03, 0.02, size=N)                                 # annual volume growth
capex   = 70.0
fixed   = 4.0                                                            # fixed cash costs, USD m/yr
tax     = 0.25
wacc    = 0.10
T       = 8
dep     = capex / T

years = np.arange(1, T + 1)
vol = units[:, None] * (1 + growth[:, None]) ** (years[None, :] - 1)     # (N, T) thousand units
revenue = vol * price[:, None] / 1000.0                                  # USD m
ebitda = revenue * (1 - vc_pct[:, None]) - fixed
ebit = ebitda - dep
fcf = ebitda - np.maximum(ebit, 0) * tax
pv = (fcf / (1 + wacc) ** years[None, :]).sum(axis=1)
npv = pv - capex

print("Simulated trials :", N)
print("Mean NPV         :", round(npv.mean(), 2))
print("Median NPV       :", round(np.median(npv), 2))
print("Std dev          :", round(npv.std(ddof=1), 2))
print("5th / 95th pct   :", np.round(np.percentile(npv, [5, 95]), 2))
print("P(NPV < 0)       :", round((npv < 0).mean(), 4))
print("Expected shortfall (mean NPV | worst 5%):", round(npv[npv <= np.percentile(npv, 5)].mean(), 2))
se = npv.std(ddof=1) / np.sqrt(N)
print("Std error of mean:", round(se, 4), " -> 95% CI half-width", round(1.96 * se, 3))

# Deterministic base case for comparison
base_fcf = np.array([ (1000*(1.03)**(t-1)*50/1000*(1-0.60) - fixed) for t in years])
base_fcf = base_fcf - np.maximum(base_fcf - dep, 0) * tax
print("\nBase-case NPV (point estimates):", round((base_fcf / 1.1 ** years).sum() - capex, 2))

# Text histogram
counts, edges = np.histogram(npv, bins=14)
print("\nHistogram of NPV (each # = 1% of trials)")
for c, lo, hi in zip(counts, edges[:-1], edges[1:]):
    print(f"{lo:7.1f} to {hi:7.1f} | {'#' * int(round(100 * c / N))}")
```

Output:

```
Simulated trials : 100000
Mean NPV         : 16.41
Median NPV       : 14.83
Std dev          : 18.56
5th / 95th pct   : [-11.18  49.43]
P(NPV < 0)       : 0.192
Expected shortfall (mean NPV | worst 5%): -16.48
Std error of mean: 0.0587  -> 95% CI half-width 0.115

Base-case NPV (point estimates): 13.32

Histogram of NPV (each # = 1% of trials)
  -46.6 to   -34.7 |
  -34.7 to   -22.8 |
  -22.8 to   -10.9 | #####
  -10.9 to     1.0 | ################
    1.0 to    13.0 | #########################
   13.0 to    24.9 | ########################
   24.9 to    36.8 | ################
   36.8 to    48.7 | #########
   48.7 to    60.6 | ####
   60.6 to    72.5 | #
   72.5 to    84.4 |
   84.4 to    96.4 |
   96.4 to   108.3 |
  108.3 to   120.2 |
```

### Interpreting the results

The deterministic base case, using the central value for each input (volume of 1,000, price of 50, variable cost of 60 percent and growth of 3 percent), gives an NPV of 13.32 million. The simulation's mean NPV is 16.41 million, higher than the base case. This is not a bug. The triangular volume distribution has a longer right tail (the mode is 1,000 but the mean is 1,033), and the NPV rises by about 0.088 million for each extra thousand units, so the extra 33 thousand units of mean volume alone explain about 2.9 million of the gap. Smaller convexity effects, from the compounding of growth and the tax floor, add the rest. In general the expected value of a nonlinear function is not the function of the expected values, a result known as Jensen's inequality. The practical message: **a base case built on most-likely inputs is not the expected outcome**, and managers who approve projects on the base case are systematically misreading the risk-reward trade-off.

The median, 14.83, is below the mean, indicating right skew, which the histogram confirms (about a quarter of trials in each of the two central bins, a left tail of losses and a right tail past 70 million). The standard deviation is 18.56 million, larger than the mean. The 5th percentile is -11.18 million and the 95th is 49.43 million. The probability that the project destroys value is 19.2 percent, and the expected shortfall, the average NPV in the worst 5 percent of outcomes, is -16.48 million. A board that approves this project on a base-case NPV of 13 million is implicitly accepting roughly a one-in-five chance of destroying value; the right question is not "is the NPV positive?" but "can we live with a 1-in-20 chance of losing 11 million or more?"

**Simulation error.** With 100,000 trials the standard error of the mean is 0.0587, so the mean NPV is known to within about 0.115 million at 95 percent confidence, far smaller than the uncertainty in the inputs. The error falls with the square root of the number of trials, as the next listing shows.

### Sensitivity (tornado) analysis and correlated inputs

A simulation tells you how wide the distribution is. A **tornado analysis** tells you why. We move each input in turn from a low to a high value while holding the others at base, and rank inputs by the swing in NPV. We then simulate correlated inputs, because in most businesses price and volume do not move independently: a firm that cuts its price generally sells more, so price and volume are negatively correlated across scenarios.

For the correlated case we use a standard trick. Draw two independent standard normals z1 and z2, form z2' = ρ·z1 + √(1-ρ²)·z2, so that the pair (z1, z2') has correlation ρ, and then transform each into the desired marginal distribution. Here the price is normal and the volume is lognormal, with a log-volatility of 15 percent.

```python
import numpy as np
import pandas as pd

rng = np.random.default_rng(2026)
N = 100_000
capex, fixed, tax, wacc, T = 70.0, 4.0, 0.25, 0.10, 8
dep = capex / T
years = np.arange(1, T + 1)

def npv_model(units, price, vc_pct, growth):
    vol = np.atleast_1d(units)[:, None] * (1 + np.atleast_1d(growth)[:, None]) ** (years[None, :] - 1)
    revenue = vol * np.atleast_1d(price)[:, None] / 1000.0
    ebitda = revenue * (1 - np.atleast_1d(vc_pct)[:, None]) - fixed
    fcf = ebitda - np.maximum(ebitda - dep, 0) * tax
    return (fcf / (1 + wacc) ** years[None, :]).sum(axis=1) - capex

base = dict(units=1000.0, price=50.0, vc_pct=0.60, growth=0.03)
low  = dict(units=800.0,  price=38.0, vc_pct=0.68, growth=-0.01)
high = dict(units=1300.0, price=62.0, vc_pct=0.52, growth=0.07)
b = npv_model(**base)[0]
print(f"Base-case NPV: {b:.2f}")
rows = []
for k in base:
    lo = npv_model(**{**base, k: low[k]})[0]
    hi = npv_model(**{**base, k: high[k]})[0]
    rows.append((k, lo - b, hi - b, abs(hi - lo)))
tor = pd.DataFrame(rows, columns=["driver", "low_delta", "high_delta", "swing"]).sort_values("swing", ascending=False)
pd.set_option("display.float_format", lambda x: f"{x:,.2f}")
print(tor.to_string(index=False))

# Correlated inputs: price and volume move in opposite directions (rho = -0.5)
z = rng.standard_normal((N, 2))
rho = -0.5
z2 = rho * z[:, 0] + np.sqrt(1 - rho ** 2) * z[:, 1]
price = 50 + 6 * z[:, 0]
units = 1000 * np.exp(0.15 * z2 - 0.5 * 0.15 ** 2)
vc = rng.uniform(0.52, 0.68, N)
g = rng.normal(0.03, 0.02, N)
n_corr = npv_model(units, price, vc, g)
print()
print("Correlation(price, units) :", round(np.corrcoef(price, units)[0, 1], 3))
print("Mean NPV / Std            :", round(n_corr.mean(), 2), "/", round(n_corr.std(ddof=1), 2))
print("P(NPV<0)                  :", round((n_corr < 0).mean(), 4))
# Rank correlation of each input with NPV (which input matters most?)
inputs = pd.DataFrame({"units": units, "price": price, "vc_pct": vc, "growth": g})
rank = inputs.rank().corrwith(pd.Series(n_corr).rank())
print("\nSpearman rank correlation with NPV")
print(rank.round(3).to_string())
```

Output:

```
Base-case NPV: 13.32
driver  low_delta  high_delta  swing
 units     -17.53       26.30  43.83
 price     -21.04       21.04  42.07
vc_pct     -17.53       17.53  35.06
growth      -9.99       11.57  21.56

Correlation(price, units) : -0.499
Mean NPV / Std            : 12.78 / 16.71
P(NPV<0)                  : 0.235

Spearman rank correlation with NPV
units     0.44
price     0.23
vc_pct   -0.62
growth    0.30
```

The tornado table shows volume has the largest swing (43.83 million between the low case of 800 and the high case of 1,300 thousand units), followed closely by price (42.07), variable cost (35.06) and growth (21.56). Note that the swing for volume is asymmetric: the high case adds 26.30 million but the low case subtracts only 17.53, simply because the range we assumed (200 below the base, 300 above) is itself asymmetric. The swings for price and variable cost are symmetric, because they enter the model linearly and the low and high values are symmetric around the base. The ranking depends on the ranges chosen, which are judgments, not facts: a tornado is only as honest as its ranges.

With a price-volume correlation of -0.5 (the sample correlation is -0.499), the mean NPV is 12.78 million, the standard deviation 16.71 million and the probability of a loss 23.5 percent. Do not compare these directly with the first simulation, because we also changed volume from triangular to lognormal (with mean exactly 1,000), which lowers the mean. A clean test of correlation holds the marginals fixed and changes only ρ.

The rank correlations at the bottom answer a different question from the tornado: they reflect the distributions actually simulated rather than low and high cases chosen by the analyst. Variable cost has the largest rank correlation with NPV (-0.62), followed by volume (0.44), growth (0.30) and price (0.23). Price ranks low partly because the negative price-volume correlation makes its effect partly offset by volume. When tornado and rank correlations disagree, your low and high cases probably do not correspond to the distributions you assumed, and one of them needs revisiting.

### How many trials are enough?

The next listing repeats the simulation twenty times at each of four sample sizes, using different seeds, and reports how much the estimated mean and loss probability vary from run to run. It then demonstrates **common random numbers**: when comparing two project designs, evaluate both on exactly the same random draws, so that sampling noise cancels. Design A is the plant we have been analysing. Design B is a more manual plant with a lower capital cost (58 million), lower fixed costs (3.0 million) but a variable cost that is six percentage points of price higher.

```python
import numpy as np

def project_npv(units, price, vc, g, capex=70.0, fixed=4.0, tax=0.25, wacc=0.10, T=8):
    years = np.arange(1, T + 1)
    vol = units[:, None] * (1 + g[:, None]) ** (years[None, :] - 1)
    ebitda = vol * price[:, None] / 1000 * (1 - vc[:, None]) - fixed
    fcf = ebitda - np.maximum(ebitda - capex / T, 0) * tax
    return (fcf / (1 + wacc) ** years[None, :]).sum(axis=1) - capex

def draw(rng, n):
    return (rng.triangular(800, 1000, 1300, n), rng.normal(50, 6, n),
            rng.uniform(0.52, 0.68, n), rng.normal(0.03, 0.02, n))

print("Convergence of the Monte Carlo estimate (20 independent replications each)")
print("   N      mean of means   spread of means (std)   P(NPV<0) mean")
for n in (500, 2_000, 10_000, 50_000):
    means, probs = [], []
    for rep in range(20):
        rng = np.random.default_rng(1000 + rep)
        v = project_npv(*draw(rng, n))
        means.append(v.mean()); probs.append((v < 0).mean())
    print(f"{n:>7,}   {np.mean(means):12.3f}   {np.std(means, ddof=1):18.4f}   {np.mean(probs):12.4f}")

# Common random numbers: compare two designs using the same draws
rng = np.random.default_rng(99)
u, p, vc, g = draw(rng, 20_000)
a = project_npv(u, p, vc, g, capex=70.0)
b = project_npv(u, p, vc + 0.06, g, capex=58.0, fixed=3.0)       # cheaper, more manual plant: lower capex and fixed cost, higher variable cost
d = b - a
print("\nMean NPV A / B          :", round(a.mean(), 2), "/", round(b.mean(), 2))
print("Mean of paired diff B-A :", round(d.mean(), 3), "  s.e.:", round(d.std(ddof=1) / np.sqrt(len(d)), 4))
print("P(B beats A)            :", round((d > 0).mean(), 4))
print("Std of NPV A / B        :", round(a.std(ddof=1), 2), "/", round(b.std(ddof=1), 2))
```

Output:

```
Convergence of the Monte Carlo estimate (20 independent replications each)
   N      mean of means   spread of means (std)   P(NPV<0) mean
    500         16.322               0.6539         0.1945
  2,000         16.436               0.4578         0.1943
 10,000         16.485               0.2237         0.1926
 50,000         16.456               0.0788         0.1935

Mean NPV A / B          : 16.61 / 16.98
Mean of paired diff B-A : 0.372   s.e.: 0.0162
P(B beats A)            : 0.5886
Std of NPV A / B        : 18.63 / 16.8
```

The spread of the estimated mean falls from 0.6539 with 500 trials to 0.0788 with 50,000, a ratio of 8.3, close to the theoretical ratio of √100 = 10 for a 100-fold increase in trials. The estimated probability of loss converges to 19.3 or 19.4 percent. For most capital budgeting purposes 10,000 trials gives a mean accurate to about 0.2 million and is sufficient; use more when you care about tail probabilities, because rare events need more samples to be observed at all.

The comparison of designs shows why common random numbers are powerful. Design A's mean NPV is 16.61 and design B's is 16.98: the difference is small relative to the standard deviation of each (18.63 and 16.80). Computed paired, draw by draw, the mean difference is 0.372 with a standard error of only 0.0162, so we can say with confidence that B is slightly better on average, by about 0.37 million. If we had used independent draws for the two designs, the standard error of the difference would be about 0.18 million (the quadrature of the two standard errors for 20,000 trials), more than ten times larger, and we could not have distinguished B from A at all. B wins in 58.9 percent of trials, and has a lower standard deviation. So B is both slightly better in expectation and less risky, but it is not a runaway winner, and other considerations such as strategic flexibility, a plant's ability to scale, and the quality of the product might decide the matter.

## Plotting: Describing What the Charts Show

A chart is the quickest way to communicate a distribution or a profile. Because this book cannot reproduce images, the listing draws two panels, saves the figure, and prints facts about the plotted data. In your own work you would open the saved image or display it in a notebook.

```python
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import os, tempfile

rng = np.random.default_rng(7)
rates = np.linspace(0, 0.30, 61)
cf = np.array([-1000, 250, 300, 350, 400.0])
npv = [(cf / (1 + r) ** np.arange(5)).sum() for r in rates]
sim = rng.normal(15, 40, 20000)

fig, ax = plt.subplots(1, 2, figsize=(10, 4))
ax[0].plot(rates * 100, npv, color="#1f4e79")
ax[0].axhline(0, color="grey", lw=0.8)
ax[0].set_xlabel("Discount rate (%)"); ax[0].set_ylabel("NPV (USD thousands)")
ax[0].set_title("NPV profile")
ax[1].hist(sim, bins=40, color="#1f4e79", alpha=0.85)
ax[1].axvline(0, color="red", lw=1)
ax[1].set_xlabel("NPV (USD millions)"); ax[1].set_title("Simulated NPV distribution")
fig.tight_layout()
path = os.path.join(tempfile.gettempdir(), "chapter19_figure.png")
fig.savefig(path, dpi=120)
print("Figure written:", os.path.basename(path), "|", os.path.getsize(path) > 10_000, "(size over 10 KB)")
# Where the NPV profile crosses zero (the IRR), read straight from the plotted data
i = np.where(np.diff(np.sign(npv)))[0][0]
print("NPV profile crosses zero between", round(rates[i] * 100, 1), "% and", round(rates[i + 1] * 100, 1), "%")
print("Axes in figure:", len(fig.axes), "| lines in left panel:", len(ax[0].lines))
```

Output:

```
Figure written: chapter19_figure.png | True (size over 10 KB)
NPV profile crosses zero between 10.0 % and 10.5 %
Axes in figure: 2 | lines in left panel: 2
```

The left panel is an **NPV profile**: the discount rate on the horizontal axis from 0 to 30 percent and the NPV on the vertical axis. For our conventional project, the curve starts at 300 at a zero discount rate, and falls steadily, convex to the origin, crossing zero between 10.0 and 10.5 percent. That crossing is the IRR, and the figure makes the decision rule visible: accept if the cost of capital is to the left of the crossing, reject if it is to the right. If you drew two projects' profiles on the same axes, the crossing point of the two curves would be the **crossover rate** (the rate at which the two have the same NPV), which is the key to ranking mutually exclusive projects, as Exercise 2 below shows.

The right panel is a **histogram of simulated NPV** with a vertical red line at zero; the fraction of the histogram left of the line is the probability of a loss. In a presentation, annotate the mean and median, the loss probability, and the 5th and 95th percentiles.

## Common Errors and How to Avoid Them

| Error | Symptom | Prevention |
|---|---|---|
| Mixing annual rate with monthly periods | Payments or values that are off by a factor near 12 | Convert both rate and periods to the same unit and name variables `monthly_rate`, `n_months` |
| Reporting IRR without checking sign changes | Multiple or no IRRs | Print the NPV profile; use NPV for decisions |
| Using the base case as the expected value | Systematic under or overstatement | Simulate; compare the mean with the base case |
| Unseeded simulations | Results change each run | Seed the generator and record the seed |
| Independent inputs that are really correlated | Risk understated | Model dependence explicitly; test several correlations |

## Exercises with Solutions

The exercises below were solved by running the listing that follows them. Try each by hand or on a calculator first.

**Exercise 1: Balloon loan.** A company borrows 1,000,000 at 7 percent per year, with annual payments calculated as if the loan amortised over 20 years, but the whole remaining balance is due as a balloon at the end of year 5. What is the annual payment and what is the balloon?

**Exercise 2: Mutually exclusive projects.** Project A has cash flows (-500, 50, 100, 250, 450) and project B has (-500, 350, 250, 100, 50). The cost of capital is 9 percent. Compute each NPV and IRR, find the crossover rate, and say which to choose at 5, 9 and 15 percent.

**Exercise 3: Bond analytics.** A 4.5 percent semiannual-pay bond with 8 years to maturity and face value 1,000 trades at 975. Compute its yield to maturity, modified duration and convexity. Estimate the new price if yields rise by 75 basis points using (a) the exact price formula and (b) duration plus convexity.

```python
import numpy as np
from tvm import pmt, npv, irr
from bonds import price, ytm_from_price, modified, convexity

print("EXERCISE 1: balloon loan")
loan, rate_, n_am, n_term = 1_000_000, 0.07, 20, 5
pay = -pmt(rate_, n_am, loan)
bal = loan
for _ in range(n_term):
    bal = bal * (1 + rate_) - pay
print("Annual payment :", round(pay, 2))
print("Balloon at yr 5:", round(bal, 2))

print("\nEXERCISE 2: mutually exclusive projects")
A = [-500, 50, 100, 250, 450]
B = [-500, 350, 250, 100, 50]
for name, cf in (("A", A), ("B", B)):
    print(name, "NPV@9%:", round(npv(0.09, cf), 2), " IRR:", round(irr(cf) * 100, 3), "%")
diff = np.array(A) - np.array(B)
x = irr(diff, 0.0, 1.0)
print("Crossover rate (IRR of A-B):", round(x * 100, 3), "%")
for r in (0.05, 0.10, 0.15):
    print(f"  NPV A-B at {r:.0%}:", round(npv(r, diff), 2))

print("\nEXERCISE 3: bond analytics")
px = 975.0
y = ytm_from_price(1000, 0.045, 8, px)
print("YTM (semiannual BEY):", round(y * 100, 4), "%")
md = modified(1000, 0.045, 8, y)
cx = convexity(1000, 0.045, 8, y)
print("Modified duration   :", round(md, 4), " Convexity:", round(cx, 3))
new = price(1000, 0.045, 8, y + 0.0075)
print("Exact price at +75bp:", round(new, 3), "  change:", round(new / px - 1, 5))
print("Approx (dur+cvx)    :", round(-md * 0.0075 + 0.5 * cx * 0.0075 ** 2, 5))
```

Output:

```
EXERCISE 1: balloon loan
Annual payment : 94392.93
Balloon at yr 5: 859722.65

EXERCISE 2: mutually exclusive projects
A NPV@9%: 141.88  IRR: 17.884 %
B NPV@9%: 144.16  IRR: 26.785 %
Crossover rate (IRR of A-B): 8.741 %
  NPV A-B at 5%: 36.89
  NPV A-B at 10%: -10.79
  NPV A-B at 15%: -46.96

EXERCISE 3: bond analytics
YTM (semiannual BEY): 4.8812 %
Modified duration   : 6.6259  Convexity: 51.885
Exact price at +75bp: 927.941   change: -0.04827
Approx (dur+cvx)    : -0.04824
```

### Solutions and commentary

**Solution 1.** The annual payment on the 20-year amortisation is 94,392.93. After five payments the balance is 859,722.65, which is the balloon. The borrower has paid 471,964.65 over five years and has repaid only about 140,277 of principal. The balloon is therefore 86 percent of the original loan, so the refinancing risk is dominant: the company's real exposure is to the interest rate and credit spread prevailing at year five.

**Solution 2.** Project A has an NPV of 141.88 at 9 percent and an IRR of 17.88 percent; project B has an NPV of 144.16 and an IRR of 26.79 percent. B ranks higher on IRR at every cost of capital, but the ranking by NPV depends on the rate. The crossover rate is 8.74 percent, the IRR of the difference stream A minus B. Below it, A's larger late cash flows dominate (at 5 percent, A leads by 36.89); above it, B's faster payback wins (at 10 percent B leads by 10.79; at 15 percent by 46.96). At 9 percent the two are almost identical, with B ahead by 2.28, because 9 percent is just above the crossover. The recommendation at 9 percent is B, but a decision that depends on a 0.26 point difference in the discount rate is fragile. Inspect the reinvestment assumption, the uncertainty in later flows for A, and any capital rationing, before committing.

**Solution 3.** The yield to maturity is 4.8812 percent. Modified duration is 6.6259 and convexity is 51.885. At a yield 75 basis points higher the exact price is 927.941, a decline of 4.827 percent; the duration-plus-convexity approximation gives 4.824 percent, accurate to three thousandths of a percentage point.

## Chapter Summary

* Python gives repeatability, scale and auditability; fix the seed, record versions, and keep inputs separate from logic.
* A cash flow is an array; a model is a DataFrame; discounting is one vectorised line.
* A small library of tested TVM functions (fv, pv, pmt, nper, rate, npv, irr, xirr, mirr, payback) handles most corporate finance calculations. Always check sign conventions and timing conventions, particularly the difference between Excel's NPV and the NPV of a time-zero stream.
* IRR can fail or mislead with multiple sign changes; the NPV profile is the reliable diagnostic.
* Bond price, yield, duration and convexity come from one cash flow schedule; duration plus convexity approximates price changes well for moderate yield shifts.
* Monte Carlo simulation turns a single NPV into a distribution, revealing probabilities of loss, tail outcomes and the gap between base case and expected value.
* Use tornado analysis to find which inputs matter, correlation to represent dependence, replication to measure simulation error, and common random numbers to compare alternatives.
