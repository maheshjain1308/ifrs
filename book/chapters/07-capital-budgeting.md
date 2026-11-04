# Chapter 7: Capital Budgeting and Project Cash Flows

## Learning Objectives

By the end of this chapter you should be able to:

- Identify the incremental, after-tax cash flows of a project, and distinguish them from accounting profits, allocated costs and sunk costs.
- Build a project cash flow forecast that correctly handles depreciation tax shields, salvage value, taxes on asset sales and investment in net working capital.
- Apply the opportunity cost and cannibalization principles to decide which existing resources and sales belong in a project's analysis.
- Keep inflation consistent by matching real cash flows with real discount rates and nominal cash flows with nominal discount rates.
- Use the equivalent annual annuity (EAA) method and the replacement chain method to compare mutually exclusive projects with unequal lives.
- Evaluate an equipment replacement decision, separating the genuinely relevant cash flows from book values and historical costs.

## Opening Vignette

*(Illustrative scenario; the company is fictional.)*

Larchmont Beverages is a regional bottler with a strong portfolio of sparkling waters. In January its product development team presents a proposal to the investment committee: a new line of cold-brew coffee in recyclable cans. The proposal is enthusiastic. The team has spent $150,000 on market research, a pilot recipe and a consumer taste panel. It forecasts that the new line will earn "$780,000 of operating profit a year before depreciation" and points out that the company already owns an unused warehouse on the edge of town, which it describes as "free space, since we have already paid for it." Finance has also allocated $120,000 of corporate overhead to the project because "every product carries its share."

The chief financial officer, Marguerite Oyelaran, reads the memo twice and begins marking it up. The $150,000 research cost has already been spent whether or not the line goes ahead, so it should not weigh on the decision. The warehouse is not free: a logistics firm has offered to rent it for $90,000 a year, so using it for coffee means giving up that rent. The overhead allocation will be paid regardless of the coffee line, so it is not an incremental cost. Meanwhile, nobody has asked what the coffee line will do to sales of Larchmont's existing iced-tea range, which sits on the same shelf and appeals to the same shoppers. Nor has anyone counted the inventory and receivables the new business will tie up, or the fact that the sales forecast is in today's money while the equipment will be depreciated over five years at historical cost.

By the time Marguerite finishes, the project looks quite different. This chapter teaches the discipline she applied: forecasting only incremental after-tax cash flows, treating every resource at its true opportunity cost, accounting for working capital and depreciation tax shields, keeping inflation consistent, and comparing projects with unequal lives on a common footing. The objective is to turn an enthusiastic narrative into a defensible number.

## 7.1 The Principle of Incremental Cash Flows

### 7.1.1 Cash flows, not accounting profit

Chapters on valuation established that the value of any asset is the present value of the cash flows it generates. A capital budgeting decision is simply a valuation of a proposed project. The analyst's central task is therefore to forecast the cash flows the project causes and to discount them at a rate that reflects their risk. The net present value rule says to accept the project if NPV > 0.

Accounting profit is a poor guide to these cash flows for three reasons. First, accounting income deducts depreciation, a non-cash charge, and so understates cash generation. Second, accounting income ignores the cash invested in inventory and receivables and the cash released when they unwind. Third, accounting income records revenue and expense when earned or incurred rather than when cash moves. A project can show a healthy accounting profit while consuming cash, and the reverse can occur.

### 7.1.2 The "with versus without" test

The governing rule for capital budgeting is that **only incremental cash flows matter**. An incremental cash flow is a change in the firm's total cash flow that occurs as a direct consequence of accepting the project. The test is a comparison of two worlds:

```
Incremental CF(t) = Firm's total CF(t) with the project − Firm's total CF(t) without the project
```

Note the phrasing "without," not "before." The relevant baseline is what would happen if the project were rejected, which may not equal today's status quo. If a competitor will launch a similar product regardless, then sales that the firm would lose by not entering are a benefit of the project, even though they are not an increase over the present.

### 7.1.3 The standard layout

For a typical project the cash flow in year t is built from four components:

```
Project CF(t) = Operating CF(t) − Capital expenditure(t) − ΔNWC(t) + After-tax salvage(t)

Operating CF = (Revenue − Cash operating costs − Depreciation) × (1 − T) + Depreciation
             = (Revenue − Cash operating costs) × (1 − T) + Depreciation × T
```

where T is the marginal corporate tax rate and ΔNWC is the change in net working capital. The two equivalent expressions for operating cash flow are used throughout this chapter. The first starts from net operating profit after tax and adds back the non-cash depreciation charge. The second, sometimes called the tax shield approach, takes after-tax cash revenue less cost and adds the tax saved by depreciation. They always agree, and you should verify one against the other as a check.

Financing costs (interest, dividends, principal repayment) are left out of the project cash flows. The standard approach, developed in the chapters on cost of capital, captures financing through the discount rate, the weighted average cost of capital. Subtracting interest from the cash flows and also discounting at a rate that reflects the cost of debt would count the cost of debt twice.

### 7.1.4 Timing conventions

Most textbook analyses place the initial outlay at time 0 and treat each year's operating cash flow as arriving at the end of the year. This is a simplification, since cash actually arrives throughout the year, but it is conventional and conservative when flows are positive. The sub-annual refinements matter for fast-moving projects and can be handled by moving to quarterly or monthly periods, but the logic does not change.

**Example 7.1 – A full project cash flow and NPV.**

Larchmont evaluates a simple project, stripped of the complications in the vignette, to illustrate the mechanics. A new canning line costs $2,000,000 and will be depreciated straight-line to zero over five years. It is expected to generate revenue of $3,000,000 per year and cash operating costs of $2,100,000 per year for five years. At the end of year 5 the line will be sold for $200,000. The project requires an up-front investment of $300,000 in net working capital, which will be fully recovered at the end of year 5. The tax rate is 25% and the required return is 10%.

*Step 1 – Depreciation.* $2,000,000 / 5 = $400,000 per year.

*Step 2 – Operating cash flow.*

```
EBIT                   = 3,000,000 − 2,100,000 − 400,000 = 500,000
Tax at 25%             = 125,000
Net operating profit   = 375,000
Operating CF           = 375,000 + 400,000 = 775,000
```

Check by the tax shield approach: (3,000,000 − 2,100,000) × 0.75 + 400,000 × 0.25 = 675,000 + 100,000 = 775,000. ✓

*Step 3 – Terminal cash flows.* The line is fully depreciated, so book value is zero. Selling for $200,000 produces a taxable gain of $200,000, and tax is 0.25 × 200,000 = $50,000. After-tax salvage is $150,000. The $300,000 of working capital is released.

*Step 4 – Cash flow timeline.*

| Year | Capex | ΔNWC | Operating CF | Salvage (after-tax) | Net CF |
|---|---|---|---|---|---|
| 0 | −2,000,000 | −300,000 | 0 | 0 | −2,300,000 |
| 1 | 0 | 0 | 775,000 | 0 | 775,000 |
| 2 | 0 | 0 | 775,000 | 0 | 775,000 |
| 3 | 0 | 0 | 775,000 | 0 | 775,000 |
| 4 | 0 | 0 | 775,000 | 0 | 775,000 |
| 5 | 0 | +300,000 | 775,000 | 150,000 | 1,225,000 |

*Step 5 – Discount at 10%.* The present value of the four-year level annuity of $775,000 is 775,000 × (1/1.10 + 1/1.10² + 1/1.10³ + 1/1.10⁴) = 775,000 × 3.16987 = $2,456,650. The year-5 flow is 1,225,000 × 0.620921 = $760,628. Total PV of inflows is $3,217,278 against an outlay of $2,300,000.

```
NPV = −2,300,000 + 2,456,650 + 760,628 ≈ $917,274
```

(The unrounded figure is $917,274.) The project creates about $917,000 of value and should be accepted. Notice that the working capital outlay and its recovery are included: ignoring them would have overstated the NPV by $300,000 × (1 − 0.6209) = about $113,700, the cost of tying up $300,000 for five years at 10%.

### 7.1.5 What counts as incremental

A useful checklist for the "with versus without" test follows.

| Item | Treatment | Reason |
|---|---|---|
| Capital outlay for new assets | Include | Cash leaves the firm because of the project |
| Cash revenue and cash operating cost changes | Include | Direct effect of the project |
| Depreciation | Include only through its tax shield | Non-cash; matters because it reduces taxes |
| Change in net working capital | Include | Cash tied up or released |
| After-tax salvage value | Include | Cash received when the project ends |
| Interest and financing flows | Exclude | Captured in the discount rate |
| Sunk costs | Exclude | Already spent; unaffected by the decision |
| Allocated overhead that does not change | Exclude | Not caused by the project |
| Opportunity costs of existing assets | Include | Value of the best alternative use is forgone |
| Cannibalization and synergies | Include | Effects on other products' cash flows |

The remainder of this chapter takes each item in turn.

## 7.2 Depreciation, Taxes and the Depreciation Tax Shield

### 7.2.1 Why depreciation matters for cash

Depreciation is not a cash flow. When a firm buys a machine for $2,000,000, the cash leaves on the purchase date, not over the machine's accounting life. Yet tax law allows the firm to deduct a portion of the cost each year, and deductions reduce taxable income and hence tax paid. The cash value of depreciation is therefore the tax it saves:

```
Depreciation tax shield (year t) = Depreciation(t) × T
```

A dollar of depreciation is worth T dollars of cash. The firm cannot raise the total amount it deducts, which is limited to the asset's cost less salvage, but it can influence *when* the deductions arrive, and because of the time value of money earlier deductions are worth more.

### 7.2.2 Straight-line versus accelerated depreciation

Straight-line depreciation spreads the depreciable base evenly over the asset's life. Many tax systems instead prescribe accelerated schedules that front-load the deductions. The best known is the United States Modified Accelerated Cost Recovery System (MACRS), which assigns an asset to a recovery class and gives a table of annual percentages. The principle is the same in every jurisdiction that allows accelerated allowances, though the specific rates and classes differ and should be taken from the current tax code when used in practice. For illustration this chapter uses the widely published five-year class percentages under the half-year convention: 20.00%, 32.00%, 19.20%, 11.52%, 11.52% and 5.76% across six tax years.

Accelerated depreciation does not change total deductions, but it raises the present value of the tax shield.

**Example 7.2 – PV of depreciation tax shields: straight-line versus accelerated.**

A firm buys equipment costing $1,000,000 with a five-year recovery class. The tax rate is 25% and the discount rate is 10%. Compare the present value of the tax shield under (a) straight-line over five years and (b) the six-year MACRS five-class percentages given above.

*(a) Straight-line.* Annual depreciation is $200,000, annual tax shield $50,000 for five years. PV = 50,000 × 3.790787 = **$189,539**.

*(b) Accelerated.*

| Year | MACRS % | Depreciation | Tax shield (25%) | Discount factor | PV |
|---|---|---|---|---|---|
| 1 | 20.00% | 200,000 | 50,000 | 0.909091 | 45,455 |
| 2 | 32.00% | 320,000 | 80,000 | 0.826446 | 66,116 |
| 3 | 19.20% | 192,000 | 48,000 | 0.751315 | 36,063 |
| 4 | 11.52% | 115,200 | 28,800 | 0.683013 | 19,671 |
| 5 | 11.52% | 115,200 | 28,800 | 0.620921 | 17,883 |
| 6 | 5.76% | 57,600 | 14,400 | 0.564474 | 8,128 |
| Total | 100.00% | 1,000,000 | 250,000 | | **193,315** |

Both schedules deduct $1,000,000 in total and generate undiscounted tax savings of $250,000. But the accelerated schedule is worth $193,315 against $189,539, a gain of about **$3,776** per million dollars of equipment. The advantage grows with the discount rate, the tax rate and the length of the asset's life, and it is why governments use accelerated allowances as an investment incentive: the interest-free loan from the tax authority is worth more the earlier it is granted.

### 7.2.3 Tax on the sale of assets

When an asset is sold, the tax authority compares the sale price with the asset's **tax book value** (original cost less accumulated tax depreciation).

```
Taxable gain (or loss) = Sale price − Tax book value
After-tax proceeds    = Sale price − T × (Sale price − Tax book value)
```

If the sale price exceeds book value, the excess is taxed (so after-tax proceeds are lower than the price). If the sale price is below book value, the loss generates a tax saving, and after-tax proceeds are higher than the price. In Example 7.1, book value was zero and the whole $200,000 was taxed. A machine with a book value of $300,000 sold for $120,000 realises a $180,000 loss and, at a 25% tax rate, a tax saving of $45,000, for after-tax proceeds of $165,000. Real tax codes can treat gains and losses differently (for example, capital versus ordinary treatment, or recapture rules), so the analyst must follow the applicable rules; the simple symmetric treatment used here is the standard teaching convention.

### 7.2.4 Depreciation choices and financial reporting

A common confusion arises from the difference between *book* (financial-reporting) depreciation and *tax* depreciation. Companies often use straight-line depreciation in their published accounts and an accelerated schedule for tax returns. For capital budgeting, only the tax schedule matters, because only tax depreciation affects cash taxes. The book schedule affects reported earnings and can influence managerial behaviour, but it does not alter value. A manager who rejects a positive-NPV project because the depreciation charge would depress reported earnings is trading shareholder value for a cosmetic accounting number.

### 7.2.5 Common mistakes

- **Subtracting depreciation as if it were cash.** Depreciation reduces taxes, but the firm does not pay it out. The cash cost of the asset is the capital expenditure at the time of purchase.
- **Forgetting the terminal tax effect.** Salvage value must be taxed (or the loss credited) relative to tax book value, not relative to the purchase price.
- **Using average rather than marginal tax rates.** The relevant rate is the rate on the incremental income or deduction. For a profitable firm this is the statutory marginal rate; for a loss-making firm, tax shields may be deferred and worth less.
- **Mixing book and tax schedules.** Use the tax schedule for cash flows.

## 7.3 Net Working Capital

### 7.3.1 Why working capital belongs in the analysis

Few projects can grow without financing the day-to-day operating cycle. A new product line needs raw material and finished goods in stock, extends credit to customers, and receives credit from suppliers. Net working capital (NWC) is the operating current assets minus the operating current liabilities, excluding cash held as a financial buffer and interest-bearing debt:

```
NWC = Accounts receivable + Inventory − Accounts payable (and other operating accruals)
```

When sales rise, NWC usually rises, and the increase is a cash *outflow*, because cash is tied up in stock and receivables. When the project winds down, NWC falls and the cash is released. These flows are real, though no income statement shows them, and ignoring them overstates value. Because the investment is made early and recovered late, the cost to the project is the time value of money on the balance.

### 7.3.2 Forecasting NWC

Analysts usually model NWC as a percentage of sales, drawing on the firm's experience with comparable products:

```
NWC(t) = w × Sales(t)             where w is the NWC-to-sales ratio
ΔNWC(t) = NWC(t) − NWC(t−1)       (positive ΔNWC = cash outflow)
Project cash flow(t) includes −ΔNWC(t)
```

Three points are worth emphasising. First, the investment typically precedes the sales that justify it: inventory must be built before it is sold, so NWC at the end of year 0 may already be positive. Second, because NWC is driven by the *level* of sales while the cash flow depends on the *change*, a fast-growing project absorbs the most cash in its early years even when its profitability is highest. Third, the working-capital release at the end of the project is not a certain return of all that was invested: obsolete stock may be written down and some receivables may prove uncollectable. Conservative analysts assume less than 100% recovery.

### 7.3.3 Payables as a source of financing

Trade credit from suppliers reduces NWC because accounts payable is a liability. A firm that negotiates 60-day payment terms rather than 30-day terms lowers its working capital requirement for the same sales, thereby raising project value. For businesses with long production cycles and thin margins, working capital management can be worth more than a modest improvement in the price of the product.

**Example 7.3 – A project with a working-capital build-up (amounts in $000).**

A new product requires equipment of $1,200 (straight-line to zero over five years, no salvage). Sales are forecast at 1,000, 1,500, 2,000, 2,000 and 1,200 in years 1 to 5. The cash margin before fixed costs is 40% of sales, and fixed cash costs are 100 per year. NWC is 15% of the year's sales. NWC is recovered in full at the end of year 5. Tax rate is 25%; required return is 10%.

*Step 1 – Depreciation.* 1,200 / 5 = 240 per year.

*Step 2 – Operating cash flow.* EBITDA = 0.40 × Sales − 100.

| Year | Sales | EBITDA | EBIT (− 240) | Tax (25%) | Operating CF = EBITDA − tax |
|---|---|---|---|---|---|
| 1 | 1,000 | 300 | 60 | 15 | 285 |
| 2 | 1,500 | 500 | 260 | 65 | 435 |
| 3 | 2,000 | 700 | 460 | 115 | 585 |
| 4 | 2,000 | 700 | 460 | 115 | 585 |
| 5 | 1,200 | 380 | 140 | 35 | 345 |

*Step 3 – NWC schedule.*

| Year | NWC (15% of sales) | ΔNWC | Cash effect |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 1 | 150 | +150 | −150 |
| 2 | 225 | +75 | −75 |
| 3 | 300 | +75 | −75 |
| 4 | 300 | 0 | 0 |
| 5 | 180 → 0 (final recovery) | −120, then −180 | +120 +180 = +300 |

In year 5, sales fall to 1,200, so NWC drops from 300 to 180, releasing 120. At the end of the project the remaining 180 is also released, so the total year-5 working capital inflow is 300.

*Step 4 – Net cash flows.*

| Year | Capex | Operating CF | NWC effect | Net CF |
|---|---|---|---|---|
| 0 | −1,200 | 0 | 0 | −1,200 |
| 1 | 0 | 285 | −150 | 135 |
| 2 | 0 | 435 | −75 | 360 |
| 3 | 0 | 585 | −75 | 510 |
| 4 | 0 | 585 | 0 | 585 |
| 5 | 0 | 345 | +300 | 645 |

*Step 5 – NPV at 10%.*

```
NPV = −1,200 + 135/1.10 + 360/1.10² + 510/1.10³ + 585/1.10⁴ + 645/1.10⁵
    = −1,200 + 122.73 + 297.52 + 383.17 + 399.55 + 400.49
    ≈ 403.48   ($403,476)
```

For comparison, ignoring NWC entirely gives net cash flows of −1,200, 285, 435, 585, 585, 345 and an NPV of **471.89**. Working capital therefore costs the project about 68.4 of value (14.5% of the NPV omitted-NWC figure). The project survives, but a more aggressive working-capital assumption (say 25% of sales) would erode the margin of safety, a point we revisit through sensitivity analysis in the next chapter.

## 7.4 Sunk Costs, Opportunity Costs and Side Effects

### 7.4.1 Sunk costs: ignore them

A **sunk cost** is a cost that has already been incurred and cannot be recovered whatever the firm decides next. The $150,000 Larchmont spent on market research is sunk. The decision it faces is whether the *future* cash flows from the line justify the *future* cash outlays. If the research cost is included as a negative cash flow, the project is penalised for a decision that was already taken and cannot be reversed. If the project would fail only because of the sunk cost, rejecting it destroys value.

Sunk costs appear in subtler forms. Consider a half-finished factory on which $40 million has been spent and which needs $25 million more to complete. The $40 million is irrelevant; the only question is whether the completed factory is worth more than $25 million (in present value terms) to the firm. Managers find this hard to accept, which is why the *sunk cost fallacy* is among the best documented errors in decision-making: the instinct to "throw good money after bad" in order to justify earlier spending. A disciplined capital budgeting process makes a rule of treating each stage-gate as a fresh decision.

A related question is whether research costs that precede the project can be recovered if the project proceeds. They cannot; so the proper way to evaluate *the research programme itself* is ex ante, when the spending decision is still open. This links directly to the real-option perspective in Chapter 8.

### 7.4.2 Opportunity costs: include them

An **opportunity cost** is the value of the best alternative use of a resource that the firm already owns. If the project uses an asset the firm could otherwise sell, rent or use elsewhere, the project must be charged for it, though no cash changes hands, because the project causes the firm to give up that value. The idle warehouse in the vignette is a classic case: its purchase price is sunk, but its rental value is a real forgone cash flow. If the next best use is a $90,000 pre-tax annual rent, the after-tax opportunity cost is 90,000 × (1 − 0.25) = $67,500 per year. If the next best use is to sell the asset now, the opportunity cost is the after-tax sale proceeds in year 0.

The same logic applies to people and information: a manager transferred from another profitable activity, or a proprietary technology that could be licensed to a third party, carries an opportunity cost equal to the value forgone elsewhere.

### 7.4.3 Allocated costs: include only what changes

Corporate overhead is typically allocated to divisions by formula, as a share of sales or headcount. For capital budgeting what matters is whether the *total* overhead of the firm rises because of the project. If the head-office costs are the same with or without the project, the allocation is not incremental and must be excluded. If the project requires, say, an additional accountant, her salary is incremental, even though it is not labelled "overhead allocation." The test is always the with-versus-without comparison, never the accounting label.

### 7.4.4 Side effects: cannibalization and synergy

New products can reduce the sales of existing ones (**cannibalization** or erosion) or increase them (**synergy** or complementarity). Both are incremental cash flows and must be reflected. If the cold-brew coffee line takes sales from Larchmont's iced tea, the lost contribution margin from iced tea is charged to the coffee project. If a competitor would have launched a rival coffee product anyway and taken those iced-tea sales regardless, only the *additional* cannibalization caused by Larchmont's own entry counts, because the baseline is the "without" world and not the status quo. Strategic arguments of this kind need explicit evidence, since it is tempting to claim that "we would be cannibalized anyway" for any product.

Positive side effects deserve the same scrutiny: a new gaming console that boosts game sales, or a loss-leading product that increases customer retention. They must be supported by an estimate and included in the cash flow forecast; they should not be left as a vague qualitative justification.

**Example 7.4 – Applying the incremental cash flow filter.**

Larchmont's coffee line, cleaned up, has these inputs. Equipment costs $1,500,000 depreciated straight-line to zero over five years ($300,000 per year). Revenue is $2,400,000 per year and cash operating costs are $1,500,000 per year. Launch will cannibalize iced-tea sales, costing the company $200,000 per year of pre-tax contribution. The warehouse could be rented out for $90,000 per year pre-tax. The market research ($150,000) is sunk. A corporate overhead charge of $120,000 per year is allocated to the project but total head-office costs do not change. The tax rate is 25% and the discount rate is 10%. The project lasts five years with no salvage and no NWC (to keep the focus on the filter).

*Step 1 – Identify the relevant pre-tax cash items.*

| Item | Amount | Include? |
|---|---|---|
| Revenue | +2,400,000 | Yes |
| Cash operating costs | −1,500,000 | Yes |
| Cannibalized iced-tea contribution | −200,000 | Yes (side effect) |
| Forgone warehouse rent | −90,000 | Yes (opportunity cost) |
| Corporate overhead allocation | −120,000 | No (not incremental) |
| Market research | −150,000 | No (sunk) |

*Step 2 – Pre-tax incremental operating cash flow.* 2,400,000 − 1,500,000 − 200,000 − 90,000 = **610,000**.

*Step 3 – After-tax operating cash flow.*

```
OCF = 610,000 × (1 − 0.25) + 300,000 × 0.25 = 457,500 + 75,000 = 532,500
```

*Step 4 – NPV.* PV of a five-year annuity at 10% (factor 3.790787) is 532,500 × 3.790787 = $2,018,594. Subtract the $1,500,000 outlay:

```
NPV = 2,018,594 − 1,500,000 = $518,594
```

*Step 5 – What the naive analysis would say.* The original memo's approach (charging overhead, ignoring cannibalization and rent, and either leaving out or including the sunk research) gives pre-tax flow 2,400,000 − 1,500,000 − 120,000 = 780,000 and OCF = 780,000 × 0.75 + 75,000 = 660,000. NPV excluding research = 660,000 × 3.790787 − 1,500,000 = $1,001,919; including research as a year-0 cost = $851,919. Neither is right. The naive figures are hugely different from the true NPV of $518,594, because the errors do not cancel: the omitted cannibalization and rent (together $290,000 pre-tax) outweigh the spurious overhead charge ($120,000). Even so, the project remains attractive, a reminder that cleaning up the analysis does not necessarily kill a project, though it can easily change the ranking among projects.

### 7.4.5 Summary of relevance

| Concept | Rule | Typical error |
|---|---|---|
| Sunk cost | Exclude | Including past R&D or feasibility study costs |
| Opportunity cost | Include at best alternative use | Treating owned assets as free |
| Allocated overhead | Include only if total cost changes | Charging fixed allocations |
| Cannibalization | Include lost contribution of existing products | Ignoring erosion of the core business |
| Synergy | Include with evidence | Using unquantified strategic benefits to justify weak projects |
| Financing costs | Exclude from cash flows | Double-counting with the discount rate |
| Working capital | Include build-up and release | Treating inventory as if it were free |

## 7.5 Inflation in Capital Budgeting

### 7.5.1 Nominal versus real

Inflation raises the money price of goods over time. Cash flows measured in the money of the day are **nominal**; cash flows adjusted for the general price level, in the money of a base date, are **real**. Discount rates come in the same two forms. The nominal rate includes compensation for expected inflation; the real rate does not. The two are linked by the Fisher relationship:

```
(1 + nominal rate) = (1 + real rate) × (1 + inflation rate)
```

For example, with a real rate of 5% and expected inflation of 3%, the nominal rate is 1.05 × 1.03 − 1 = 8.15%. (The approximation "nominal ≈ real + inflation" gives 8%, close but not exact.)

### 7.5.2 The consistency rule

The cardinal rule is simple: **discount nominal cash flows at nominal rates and real cash flows at real rates.** If both are done correctly, the NPV is identical. The most common error is a mismatch: forecasting cash flows in constant (today's) prices and then discounting at a market-derived nominal rate, which builds inflation into the denominator but not the numerator and understates value.

**Example 7.5a – Consistency between real and nominal.**

A project yields a real cash flow of $100 per year for four years (in today's prices) for an investment whose value we study in isolation. The real discount rate is 5% and expected inflation is 3%.

*Real approach.* PV = 100 × annuity factor(5%, 4) = 100 × 3.545951 = **$354.60**.

*Nominal approach.* The nominal rate is 8.15%. Nominal cash flows: 100 × 1.03 = 103.00, 100 × 1.03² = 106.09, 100 × 1.03³ = 109.27, 100 × 1.03⁴ = 112.55. Discount at 8.15%:

```
PV = 103.00/1.0815 + 106.09/1.0815² + 109.27/1.0815³ + 112.55/1.0815⁴ ≈ $354.60
```

The two methods agree. *Mixing* real flows with the nominal rate gives 100 × annuity factor(8.15%, 4) ≈ $330.11, understating value by about 6.9%.

### 7.5.3 Where inflation truly changes the answer

If everything inflated at the same rate, the choice between real and nominal analysis would be a matter of taste. But depreciation tax shields are fixed in nominal terms: they are based on historical cost and do not rise with prices. As inflation increases, the real value of the depreciation shield falls, which makes projects with large depreciation shields less attractive in high-inflation environments. Similarly, working capital rises with inflation, because the same physical inventory costs more, so inflation increases the cash investment in NWC. Some costs (wages, say) may adjust at a different rate from selling prices, and a good forecast models these separately rather than applying one inflation rate to everything. Finally, if the project's revenues are contractually fixed in nominal terms, inflation erodes their real value.

**Example 7.5b – The inflation penalty on depreciation shields.**

A firm invests $400 in equipment, straight-line over four years ($100 per year). Real pre-tax operating cash flow is $220 per year in today's prices, rising with 3% inflation. The tax rate is 30%, the real discount rate is 5%, and the nominal rate is 8.15%.

*Nominal approach.*

| Year | Pre-tax CF (nominal) | After-tax CF = pre-tax × 0.70 | Dep. shield (100 × 0.30) | Net nominal CF |
|---|---|---|---|---|
| 1 | 226.60 | 158.62 | 30.00 | 188.62 |
| 2 | 233.40 | 163.38 | 30.00 | 193.38 |
| 3 | 240.40 | 168.28 | 30.00 | 198.28 |
| 4 | 247.61 | 173.33 | 30.00 | 203.33 |

NPV at 8.15% = −400 + 188.62/1.0815 + 193.38/1.0815² + 198.28/1.0815³ + 203.33/1.0815⁴ = −400 + 174.41 + 165.33 + 156.76 + 148.63 ≈ **−400 + 645.11 = 245.11**.

*Naive "real" approach.* If the analyst uses the constant real cash flow of 220 × 0.70 + 30 = 184 each year and discounts at the real 5%, NPV = −400 + 184 × 3.545951 = **252.45**.

The difference of about 7.3 arises solely because the depreciation shield of $30 per year was treated as inflating when in fact it is fixed in nominal terms. The *correct* real analysis would deflate the nominal shield; doing so reproduces the 245.11. The lesson: wherever a cash flow is fixed in nominal terms (depreciation, fixed-rate contracts, nominal debt service), convert it carefully rather than assuming it moves with prices.

### 7.5.4 Practical guidance

Most practitioners prefer to forecast in nominal terms because taxes, depreciation, debt and market quotations for discount rates are all nominal. If long-horizon projects in high-inflation economies are forecast in real terms for convenience, the analyst should still check the tax and working-capital effects explicitly. For multinational projects in different currencies, the same logic applies with exchange rates linked through purchasing power parity, as discussed in the chapters on international finance.

## 7.6 Projects with Unequal Lives: The Equivalent Annual Annuity

### 7.6.1 The problem

NPV is the right criterion for independent projects. For mutually exclusive projects with equal lives, the project with the higher NPV wins. But when projects have different lives, comparing NPVs directly can mislead. A project that lasts ten years may have a larger NPV than one that lasts three simply because it runs longer, even if the short project is more profitable per year and could be repeated.

This problem is most acute for *cost-minimisation* decisions, in which the machines or vehicles under comparison deliver the same service but differ in purchase price, running costs and durability. A cheap machine that wears out in three years must be compared with an expensive one that lasts five.

### 7.6.2 Two equivalent methods

**Replacement chain (common life) method.** Assume each project is repeated until both reach a common horizon, usually the least common multiple of their lives. Compare the NPVs over that horizon. A three-year and a five-year machine would be compared over fifteen years: five cycles of the first against three cycles of the second.

**Equivalent annual annuity (EAA) method.** Convert each project's NPV to the level annual payment, over the project's own life, that has the same present value:

```
EAA = NPV / Annuity factor(r, n)         where Annuity factor = [1 − (1 + r)^(−n)] / r
```

For cost-only projects the equivalent figure is called the **equivalent annual cost (EAC)**, and the lower the EAC the better. The EAA method gives the same ranking as the replacement chain whenever the projects can be repeated indefinitely with the same cash flows, and it is far less laborious. Indeed, repeating a project forever creates a perpetuity of EAA, whose value is EAA / r, so ranking by EAA is ranking by the value of the infinite chain.

### 7.6.3 Assumptions and limits

EAA assumes that (i) the service is needed indefinitely (or at least for the common horizon), (ii) replacement is possible on identical terms, and (iii) costs do not change over time. Where technology is improving, replacement will probably be cheaper and better, and the long-lived project should be penalised relative to the EAA ranking. Where prices are inflating, the replacement cost will be higher in nominal terms, which may favour the longer-lived machine. If the horizon is truly finite (a three-year contract, say), the common-life assumption is not valid and the analysis should use the actual horizon, perhaps with residual values for the leftover machine life.

**Example 7.6 – Choosing between two machines.**

A packaging firm needs a machine to perform a task. Machine A costs $100,000, lasts 3 years, and costs $30,000 per year to operate. Machine B costs $150,000, lasts 5 years, and costs $20,000 per year to operate. Ignore taxes and salvage for clarity; the required return is 10%. Revenue is the same with either machine.

*Step 1 – PV of costs over each machine's own life.*

```
PV(A) = 100,000 + 30,000 × annuity factor(10%, 3) = 100,000 + 30,000 × 2.486852 = 174,606
PV(B) = 150,000 + 20,000 × annuity factor(10%, 5) = 150,000 + 20,000 × 3.790787 = 225,816
```

A is cheaper in total PV, but B lasts two years longer, so the raw comparison is misleading.

*Step 2 – Equivalent annual cost.*

```
EAC(A) = 174,606 / 2.486852 = 70,211
EAC(B) = 225,816 / 3.790787 = 59,570
```

Machine B has the lower EAC, saving about $10,641 per year.

*Step 3 – Verify by the replacement chain over 15 years.* A is replaced at the start of years 4, 7, 10 and 13 (five purchases in all). The PV of the chain is 174,606 × [1 + 1.1⁻³ + 1.1⁻⁶ + 1.1⁻⁹ + 1.1⁻¹²] = **$534,034**. B is repurchased at the start of years 6 and 11 (three purchases in all): 225,816 × [1 + 1.1⁻⁵ + 1.1⁻¹⁰] = **$453,091**. B is cheaper by $80,943, and the ranking agrees with the EAC method. (Cross-check: 70,211 × annuity factor(10%, 15) = 70,211 × 7.606080 = 534,034. ✓)

| Measure | Machine A | Machine B |
|---|---|---|
| Initial cost | 100,000 | 150,000 |
| Annual operating cost | 30,000 | 20,000 |
| Life (years) | 3 | 5 |
| PV of costs, own life | 174,606 | 225,816 |
| Equivalent annual cost | 70,211 | 59,570 |
| PV of costs over 15-year chain | 534,034 | 453,091 |

The decision rule for cost comparison with different lives is to choose the lowest EAC. The naive comparison favoured the machine that was worse.

## 7.7 Replacement Decisions

### 7.7.1 The structure of the decision

A replacement decision asks whether to retire an existing asset and buy a new one. It is easily confused with expansion decisions, but it has a particular structure because the cash flows from the old asset are *given up* when it is replaced. The framework is the same incremental one:

```
Incremental CF = CF(with replacement) − CF(keep old asset)
```

The key elements are as follows.

1. **Initial outlay** = cost of the new asset − after-tax sale proceeds of the old asset (and any NWC change).
2. **Operating savings** = after-tax reduction in operating costs (or increase in revenue) from the new asset.
3. **Change in depreciation tax shield** = T × (new depreciation − old depreciation). The old asset's remaining depreciation is lost if it is sold, but this is captured by comparing the two schedules.
4. **Terminal values** = after-tax salvage value of the new asset minus the after-tax salvage value of the old asset at the same horizon.

### 7.7.2 The book value trap

The old machine's **book value** is a sunk, historical number. It is irrelevant as a measure of what the machine is worth, and a manager who says "we can't scrap it yet because it still has $300,000 of book value" is making a decision on accounting, not economics. Book value matters only for the *tax effect* of a sale: selling below book value creates a loss that shields other income from tax, selling above book value creates a taxable gain. The relevant price of the old machine is its market value (after tax), the opportunity cost of continuing to use it.

### 7.7.3 Matching horizons

The new and old assets must be compared over the same horizon. If the old machine has three years of remaining life and the new one has five, either compare over the old machine's remaining life with the new asset's residual value at that date, or use EAC to compare each alternative on a per-year basis. The simplest case is to choose a horizon equal to the remaining life of the old machine (or a common horizon) and include an appropriate terminal value.

**Example 7.7 – Should Larchmont replace its old filler?**

Larchmont's old bottle filler has a tax book value of $300,000 with three years of straight-line depreciation remaining ($100,000 per year). It could be sold today for $120,000, has three years of life left, and costs $140,000 a year to operate; its salvage value in three years is zero. A new filler costs $360,000, would be depreciated straight-line to zero over three years ($120,000 per year), costs $40,000 per year to run and can be sold in three years for $30,000. The tax rate is 25% and the required return is 10%. Output is identical with either machine.

*Step 1 – Initial outlay.*

```
Purchase of new machine              −360,000
Sale of old machine (market value)   +120,000
Tax saving on loss: (300,000 − 120,000) × 25% = +45,000
Net initial incremental CF           −195,000
```

The $300,000 book value never enters directly: only its tax consequence does.

*Step 2 – Annual incremental cash flow (years 1 to 3).*

```
After-tax operating savings = (140,000 − 40,000) × (1 − 0.25) = 75,000
Change in depreciation shield = (120,000 − 100,000) × 0.25   =  5,000
Incremental annual CF                                          = 80,000
```

*Step 3 – Terminal flow at year 3.* The new machine's tax book value is zero, so the $30,000 sale is fully taxed: after-tax salvage = 30,000 × 0.75 = $22,500. The old machine would have had zero salvage, so the incremental terminal flow is $22,500.

*Step 4 – NPV.*

```
NPV = −195,000 + 80,000 × 2.486852 + 22,500 / 1.10³
    = −195,000 + 198,948 + 16,905
    = +20,853
```

Replacement adds about $20,900 of value, a modest positive NPV that depends heavily on the old machine's running cost.

*Step 5 – Break-even analysis.* What old-machine operating cost makes the firm indifferent? Set NPV = 0: the required annual incremental CF is (195,000 − 16,905) / 2.486852 = 71,617. Subtracting the $5,000 depreciation effect leaves 66,617 of after-tax savings, i.e. 66,617 / 0.75 = $88,823 of pre-tax savings, so the old machine's operating cost would have to fall below about $128,823 before replacement stops paying. The decision is therefore sensitive to the cost forecast: an 8% overestimate of old-machine costs flips the answer. This type of break-even reasoning, developed formally in Chapter 8, is often more valuable to a manager than the point estimate itself.

### 7.7.4 Timing and "when to replace"

The replacement question also arises in timing: given that a machine will eventually be replaced, should it be replaced this year or next? The right test compares the *cost of keeping the old machine for one more year* (forgone sale proceeds, higher maintenance, lost efficiency, and the delayed tax effects) with the *equivalent annual cost of the new machine*. If the incremental cost of keeping the old asset one more year is less than the EAC of the new one, keep the old; otherwise replace it now. Because the old machine's costs typically rise as it ages while the new machine's EAC is stable, a replacement date eventually arrives.

## 7.8 Managerial Implications and Good Practice

### 7.8.1 Building a trustworthy forecast

A project analysis is only as good as its cash flow forecast, and forecasts are subject to systematic biases. Project sponsors are enthusiastic by nature, and capital rationing creates an incentive to inflate benefits and understate costs. Several practices improve discipline:

- **Separate the forecaster from the sponsor** where possible, or have finance review the key assumptions independently.
- **Document every assumption**, particularly the sales volume, price, margin and working capital ratios, along with the evidence for them.
- **Use post-audits** to compare actual results with forecasts and learn from systematic errors.
- **Check the cash flows against the strategic story.** If the product is a market leader because of a unique capability, the forecast margins should be consistent with that advantage and with the competitive response.
- **Stress the terminal value.** Many projects derive most of their NPV from the final year or a continuing value; assume reasonably conservative resale or continuing values.

### 7.8.2 A checklist before the committee meeting

1. Are all cash flows incremental, assessed with-versus-without the project?
2. Are sunk costs excluded and opportunity costs included?
3. Are taxes computed on the right base using tax depreciation, with a correct treatment of asset sales?
4. Is working capital built up and released over time?
5. Are cannibalization and synergies counted?
6. Is the inflation treatment consistent between flows and rates?
7. Are mutually exclusive alternatives compared over comparable lives?
8. Is the discount rate appropriate for the project's *risk* rather than for the firm's average risk?
9. Have the key assumptions been stress-tested?

The last item is the subject of the next chapter. Point estimates of cash flows are only central tendencies; managers must understand how wrong the forecast can be, and what they can do about it.

### 7.8.3 Beyond NPV mechanics

The mechanics in this chapter are the grammar of capital budgeting. Good judgement requires more: strategic fit, organizational capacity, competitive response and the flexibility to adapt. The next chapter shows how to quantify uncertainty and the value of flexibility. For now, remember that a rigorous cash flow forecast accomplishes two things: it prevents obvious analytic errors (sunk costs, double counting, inconsistent inflation) and it forces the project team to articulate exactly what must be true for the project to create value.

## Case Study

### Harborline Marine Components: The Gelcoat Line Decision

*(Fictional company; all figures illustrative.)*

Harborline Marine Components manufactures fibreglass hulls and deck parts for boat builders. Its plant in a coastal town runs two moulding lines. The newer line, bought eight years ago, is in good order. The older line, Line 1, was bought twelve years ago and has a tax book value of $240,000, with two years of straight-line depreciation remaining at $120,000 per year. It could be sold today for $150,000. Its running costs have crept up: maintenance, scrap and energy now total $410,000 per year, and the plant manager expects them to rise by roughly $30,000 per year as components age. Line 1 would have no salvage value in three years.

Last spring, Harborline paid a consultancy $85,000 to assess automated gelcoat spraying equipment. The recommendation is to buy a robotic line, Line 3, for $900,000. It would be depreciated straight-line to zero over six years for tax and would be sold at the end of year 6 for an estimated $90,000. Line 3's running costs would be $230,000 per year, and it would reduce scrap enough to save materials worth $60,000 per year relative to Line 1. The robotic line would also lift capacity: the sales director believes that Harborline could win a long-term contract with a builder of fishing boats worth $700,000 per year in additional revenue, with a contribution margin of 35% before any fixed cost, but admits that the contract might be awarded to a competitor if Harborline delays. Winning the contract would raise inventories and receivables by an amount equal to 12% of the extra revenue, to be recovered at the end of the horizon.

The finance director, Tomás Adeyemi, has found three items in the project file that trouble him. The consultancy fee has been included as a year-0 cost by the project team. The plant's general overhead of $90,000 per year, allocated by floor area, has been charged against Line 3 at a rate of $15,000 per year because the new line occupies the floor space of the old one. And the sales director has included the full $700,000 of contract revenue in the base case as certain, whereas Tomás believes the probability of winning it is closer to 60% whether or not Harborline buys the robot, because the builder has also invited a bid for a smaller contract with Line 2 only.

There is a further complication. If Harborline sells Line 1, its employees must be retrained at a cost of $40,000 after tax, spent in year 1, but the retained staff would also let the plant avoid an expensive temporary-labour contract worth $25,000 per year before tax. The firm faces a 28% tax rate and uses 11% for projects of this risk.

Tomás wants an analysis that his board can rely on. He also wonders whether to wait a year, since a rival supplier might release a cheaper robotic line, but that rival's product is unproven, and the contract is time-sensitive. A colleague asks whether the analysis should simply use the six-year life of Line 3 against the three remaining years of Line 1, but Tomás points out that Line 1 will have to be replaced by something at the end of its life, and it is not obvious that the comparison should favour either.

**Discussion Questions**

1. Which of the items in the project file (consultancy fee, overhead allocation, contract revenue, retraining, temporary-labour savings, sale of Line 1) are incremental cash flows, and how should each be treated? Explain the role of the old line's book value.
2. How should Tomás handle the question of different lives (six years for Line 3 against three remaining years for Line 1)? Describe two methods, and explain what assumptions each method makes about replacement of Line 1.
3. The contract is assumed to have a 60% probability of award regardless of the robot. What does this imply about whether the contract revenue is an incremental benefit of Line 3? Under what circumstances would it be incremental?
4. Discuss the option to wait a year. What would you need to know to value it, and what are the costs of waiting? (Chapter 8 develops the real-option framework for this decision.)

## Key Takeaways

- Capital budgeting values projects by their incremental after-tax cash flows: the difference between the firm's cash flows with and without the project.
- Depreciation is a non-cash expense whose only cash effect is the tax it saves; accelerated depreciation raises the present value of those savings without changing total deductions.
- After-tax salvage must be computed relative to tax book value; a sale above book value is taxed and a sale below it generates a tax saving.
- Net working capital is a real investment: the build-up is a cash outflow, the release at the end is a cash inflow, and ignoring it overstates NPV.
- Sunk costs are irrelevant to forward-looking decisions; the sunk cost fallacy leads firms to throw good money after bad.
- Opportunity costs, such as forgone rent on an owned asset, must be charged to a project even when no cash changes hands; allocated overhead is relevant only if total costs change.
- Cannibalization and synergies are incremental effects on other products' cash flows and belong in the analysis, measured against the "without" baseline.
- Discount nominal cash flows at nominal rates and real cash flows at real rates; mismatches understate value, and fixed-nominal items such as depreciation shields lose real value as inflation rises.
- For mutually exclusive projects with unequal lives, compare equivalent annual annuities (or equivalent annual costs) or use a common-life replacement chain.
- In a replacement decision the old asset's book value matters only through taxes; its market value is the opportunity cost of keeping it.

## Review Questions

1. Why is accounting profit an unreliable proxy for project cash flow? Give three distinct reasons.
2. Explain the "with versus without" test and why the baseline is not necessarily the status quo.
3. Why are interest payments excluded from project cash flows when calculating NPV with the weighted average cost of capital?
4. Describe the depreciation tax shield. Why does accelerated depreciation increase project NPV even though total depreciation is unchanged?
5. A machine is sold for less than its tax book value. Explain the tax consequence and its effect on after-tax proceeds.
6. How does net working capital enter a project cash flow? Why can a fast-growing project be cash-negative in its early years despite being profitable?
7. A manager argues that a feasibility study costing $200,000 must be recovered by the project. Evaluate the argument.
8. Distinguish an opportunity cost from a sunk cost with an example of each involving an owned building.
9. What is the Fisher relationship, and what is the most common error in applying it to project analysis?
10. Why can NPV mislead when comparing mutually exclusive projects with unequal lives, and how does the equivalent annual annuity method fix this? State two limitations of the method.

## Problems

**Problem 7.1.** A firm buys equipment for $800,000, depreciated straight-line to zero over four years. The project adds $1,500,000 revenue and $1,100,000 cash costs per year for four years. NWC of $80,000 is required at the start and recovered at the end of year 4. The equipment is sold at the end of year 4 for $100,000. Tax is 30% and the required return is 12%. Compute the annual operating cash flow and the NPV.

**Problem 7.2.** Equipment costs $500,000. Compare the PV of depreciation tax shields at a 30% tax rate and 9% discount rate under (a) straight-line over five years and (b) an accelerated schedule of 33.33%, 44.45%, 14.81% and 7.41% over four years.

**Problem 7.3.** A project's real cash flows are $50 per year for three years, with an initial outlay of $120 (today's prices). The real discount rate is 6% and inflation is 4%. (a) Find the nominal discount rate. (b) Compute NPV with nominal cash flows at the nominal rate. (c) Compute NPV with real flows at the real rate. (d) Compute the NPV that results from the mismatch of discounting real flows at the nominal rate.

**Problem 7.4.** Machine X costs $80,000, lasts four years and has annual operating costs of $12,000. Machine Y costs $120,000, lasts six years and has annual operating costs of $8,000. Ignoring taxes, compute the equivalent annual cost of each at 8% and recommend one.

**Problem 7.5.** An old machine has a tax book value of $200,000 with four years of straight-line depreciation remaining ($50,000 per year) and a market value of $90,000; it costs $100,000 per year to run and has no salvage. A new machine costs $300,000, is depreciated straight-line to zero over four years, costs $45,000 per year to run and sells for $40,000 at the end of year 4. Tax is 30%, the required return is 10%. Compute the NPV of replacing.

**Problem 7.6.** A firm owns land bought long ago. A new plant would cost $2,000,000 (straight-line to zero over six years) and use the land, which could otherwise be leased for $100,000 per year pre-tax. The plant produces pre-tax operating cash flow of $900,000 per year before the lease consideration. Tax is 30% and the discount rate 11%. Compute the NPV (a) ignoring the land's opportunity cost and (b) charging it. Does the decision change?

**Problem 7.7.** A project's sales are 800, 1,200, 1,000 and 600 in years 1 to 4 ($000). NWC is 18% of the year's sales. NWC is fully recovered at the end of year 4. Compute the annual ΔNWC cash flows and the present value of the working-capital cash flows at 10%.

**Problem 7.8.** A machine with a tax book value of $100,000 is sold at a 30% tax rate. Compute the after-tax proceeds if the sale price is (a) $60,000 and (b) $140,000. Explain the difference in tax treatment.

### Answers to Selected Problems

- **7.1.** Depreciation = 200,000; operating CF = (1,500,000 − 1,100,000 − 200,000) × 0.70 + 200,000 = $340,000 per year. Year 4 adds NWC recovery 80,000 and after-tax salvage 100,000 × 0.70 = 70,000, giving 490,000. NPV at 12% ≈ **$248,000** (248,026 with unrounded factors; in $ thousands, −880 + 340 × 3.037349 + 150 × 0.635518 ≈ 248).
- **7.2.** (a) 30% × 100,000 = 30,000 per year; PV ≈ **$116,690**. (b) Shields 49,995; 66,675; 22,215; 11,115 → PV ≈ **$127,014**. The accelerated schedule is worth about $10,325 more.
- **7.3.** (a) 1.06 × 1.04 − 1 = **10.24%**. (b) Nominal flows 52.00, 54.08, 56.24; NPV ≈ **13.65**. (c) 50 × 2.673012 − 120 = **13.65**. (d) 50 × annuity(10.24%, 3) − 120 ≈ **3.82**; the mismatch understates NPV by about 9.8.
- **7.4.** PV(X) = 80,000 + 12,000 × 3.312127 = 119,746 → EAC ≈ **$36,154**; PV(Y) = 120,000 + 8,000 × 4.622880 = 156,983 → EAC ≈ **$33,958**. Choose Y.
- **7.5.** Initial: −300,000 + 90,000 + 0.30 × (200,000 − 90,000) = −177,000. Annual: (100,000 − 45,000) × 0.70 + (75,000 − 50,000) × 0.30 = 46,000. Terminal: 40,000 × 0.70 = 28,000. NPV = −177,000 + 46,000 × 3.169865 + 28,000 × 0.683013 ≈ **−$12,062**. Do not replace.
- **7.6.** Operating CF without land cost = (900,000 − 333,333) × 0.70 + 333,333 = 730,000; NPV ≈ 730,000 × 4.230538 − 2,000,000 ≈ **$1,088,293**. With the lease charge: pre-tax 800,000 → CF = 660,000, NPV ≈ **$792,155**. The project is accepted either way, but the true value is about $296,000 lower.
- **7.7.** NWC levels: 144, 216, 180, 108 → flows −144, −72, +36, +180 (including final recovery). PV at 10% ≈ **−$40.4** (i.e. working capital costs about $40,400 of present value).
- **7.8.** (a) Loss of 40,000 gives a tax saving of 12,000; after-tax proceeds **$72,000**. (b) Gain of 40,000 is taxed 12,000; after-tax proceeds **$128,000**.
