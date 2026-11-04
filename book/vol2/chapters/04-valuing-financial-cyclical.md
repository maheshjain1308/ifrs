# Chapter 4: Valuing Financial, Cyclical and Commodity Firms

## Learning Objectives

After studying this chapter, you should be able to:

- Explain why enterprise-value DCF is inappropriate for banks and insurers, and value them with equity-based methods: excess returns (residual income), the P/B-ROE relationship and dividend (free cash flow to equity) models constrained by regulatory capital.
- Analyze an insurer's economics through float, the combined ratio and underwriting versus investment returns, and link them to a justified price-to-book ratio.
- Estimate normalized (mid-cycle) earnings for a cyclical firm and avoid the peak-earnings and trough-earnings traps in multiples.
- Build a commodity price deck, value a resource project or mine with it, and quantify sensitivity, mean reversion and the option to curtail production.
- Construct a net asset value (NAV) for a resource company and interpret price-to-NAV, including risk-weighting of development assets.
- Perform a sum-of-the-parts valuation, treat corporate costs, pensions and net debt consistently, and judge whether a conglomerate discount is justified.

## Opening Vignette

*Illustrative scenario; all companies are fictional.*

Linden Capital Partners runs a concentrated equity fund, and its analyst, Priya, has been asked to defend three holdings at the annual investor meeting. The first is Harbor Trust Bancorp, a regional bank that trades at 1.2 times book value. A colleague has built a DCF of the bank's "free cash flow" by adding back interest expense and subtracting capital expenditure, arriving at a value three times the market price. Priya knows something is wrong but cannot say what: the bank's debt is its raw material, not a financing choice, and its "capex" is lending.

The second holding is Ironvale Steel. In last year's trough the company earned almost nothing, the trailing price-to-earnings ratio was above 60, and a screen had labeled the stock "expensive." Two years earlier, at peak earnings, the ratio was 4, and the same screen called it "cheap." Priya bought near the trough and the stock has doubled, but she cannot explain to investors what the stock is actually worth.

The third is Cordillera Copper, which has two producing mines, a development project and an exploration portfolio. The sell-side's price target depends on a copper price assumption that differs by 40 percent from the next analyst's. A fourth question hangs over all three: a conglomerate in the fund's watch list, Karst Industries, trades at a discount to what its parts would fetch, and an activist has appeared on its register.

Each question has an answer, but not the one standard enterprise DCF supplies. Financial firms are valued through equity, because liabilities are operating inputs. Cyclical firms are valued through normalized earnings, because the current year is a poor sample of the cycle. Commodity producers are valued through explicit price decks and asset-by-asset NAV, because value is driven by a price the firm does not control. Diversified groups are valued by parts, because each part has different economics. This chapter develops each approach, with numbers, and shows how to reconcile them with the market.

## 4.1 Why These Firms Need Different Tools

Volume 1 (Chapters 11 and 21) valued industrial firms by discounting free cash flow to the firm at WACC, then subtracting net debt to reach equity. That architecture assumes that operating assets can be separated from financing, that debt is a choice of capital structure, and that current earnings are a reasonable starting point for forecasting. Each assumption fails for the firms in this chapter, in a different way.

| Firm type | What breaks | Valuation response |
|---|---|---|
| Banks and insurers | Debt and deposits are inputs to production; "operating" and "financing" cannot be separated; capital is regulated | Value equity directly: excess returns, P/B-ROE, dividend discount with a capital constraint |
| Cyclical firms | Current earnings are far from average; multiples whipsaw | Normalize earnings over the cycle; use mid-cycle margins and multiples; value through the trough |
| Commodity producers | Revenue depends on an exogenous price; reserves deplete; operating leverage is extreme | Explicit price decks, project NPV, scenario and simulation, NAV by asset |
| Conglomerates | Different segments have different growth, risk and multiples | Sum of the parts, with consistent treatment of corporate costs and net debt |

There is a common thread. In every case the headline accounting number (net income, EBITDA, book value) is a poor proxy for value unless adjusted for the structure of the business: the regulatory capital that a bank must retain, the point in the cycle at which earnings were measured, the price at which a commodity was sold, the cost of running a corporate center. The rest of the chapter takes the adjustment for each in turn.

## 4.2 Valuing Banks

### Why not enterprise DCF

For a bank, interest on deposits and wholesale funding is the principal cost of goods sold. Treating it as a financing cost, as in a free-cash-flow-to-the-firm model, adds back the main operating expense and makes "operating" income meaningless. Net debt is not well defined (a bank's liabilities are mostly deposits and trading balances), and the notion of WACC does not apply because the capital structure is largely determined by regulation and not by a value-maximizing trade-off. The correct target is the value of equity, obtained either by discounting cash flows to equity (dividends or free cash flow to equity) at the cost of equity, or by the residual-income (excess-return) method, which discounts earnings above a capital charge.

### The economics of a bank in one equation

A bank's profitability reduces to its **return on equity**, which decomposes as:

```
ROE = ROA × Equity multiplier
ROA = (Net interest income + Fee income − Operating costs − Loan-loss provisions) / Assets
```

Net interest income is the spread between loan yields and funding costs, times earning assets. Fee income depends on payments, advisory and asset-management businesses. The cost-to-income ratio captures operating efficiency, and loan-loss provisions reflect credit quality over the cycle. The leverage is not free: regulation sets a minimum ratio of capital to risk-weighted assets (RWA), so growth in RWA must be matched by growth in equity.

In current regulatory frameworks the key measure is the Common Equity Tier 1 (CET1) ratio, CET1 capital divided by RWA. A bank must hold a minimum plus buffers, and in practice management holds a margin above the requirement. This leads to the central modeling principle: **a bank can pay out as dividends only the earnings it does not need to retain to keep its target capital ratio as it grows.**

### Excess returns and the P/B-ROE relationship

In the residual-income method, value of equity equals book value plus the present value of expected excess returns:

```
Value of equity = BV₀ + Σ [(ROEₜ − rₑ) × BVₜ₋₁] / (1 + rₑ)ᵗ
```

where rₑ is the cost of equity. The term (ROE − rₑ) × BV is the **residual income**: earnings above the charge for the equity capital used. If ROE equals the cost of equity forever, the bank is worth exactly its book value, regardless of growth. If ROE exceeds rₑ, growth adds value; if ROE is below rₑ, growth destroys it.

In steady state, with constant ROE and growth g, the formula collapses to the relationship used throughout bank analysis:

```
P/B = (ROE − g) / (rₑ − g)
```

This is the banking counterpart of the value-driver formula of Chapter 3: replace NOPAT and WACC with ROE and rₑ. A bank with a 14 percent ROE, 10 percent cost of equity and 4 percent growth should trade at 10/6 = 1.67 times book. Two comparable banks with the same P/B but different ROE are not equally priced: the P/B-ROE regression across a peer group (price-to-book on the vertical axis, ROE on the horizontal) identifies the cheap and expensive ones relative to the fundamentals the market itself pays for.

**Example 4.1 – Residual-income valuation of a bank with fading excess returns.** Harbor Trust has book equity of 10,000 million and a cost of equity of 10 percent. Analysts expect ROE to fade over five years as competition erodes the spread, and book value to grow with lending.

*Steady-state benchmark.* With constant ROE 14 percent and g = 4 percent: P/B = (0.14 − 0.04) / (0.10 − 0.04) = 1.667, so equity value = 16,667.

*Fading ROE forecast.* ROE is 15.0, 14.5, 14.0, 13.0 and 12.0 percent in years 1 to 5, and book value grows 6, 6, 5, 5 and 4 percent. Residual income in year t = (ROEₜ − 0.10) × beginning book value. Amounts in millions.

| Year | Beginning BV | ROE | Net income | Capital charge (10%) | Residual income | PV at 10% | Ending BV |
|---|---|---|---|---|---|---|---|
| 1 | 10,000 | 15.0% | 1,500.0 | 1,000.0 | 500.0 | 454.5 | 10,600 |
| 2 | 10,600 | 14.5% | 1,537.0 | 1,060.0 | 477.0 | 394.2 | 11,236 |
| 3 | 11,236 | 14.0% | 1,573.0 | 1,123.6 | 449.4 | 337.7 | 11,798 |
| 4 | 11,798 | 13.0% | 1,533.7 | 1,179.8 | 353.9 | 241.7 | 12,388 |
| 5 | 12,388 | 12.0% | 1,486.5 | 1,238.8 | 247.8 | 153.8 | 12,883 |

*PV of explicit residual income.* 454.5 + 394.2 + 337.7 + 241.7 + 153.8 = 1,581.9 (1,582.0 with unrounded inputs).

*Terminal value of excess returns.* Assume residual income after year 5 decays with persistence ω = 0.7 per year (RI₆ = 0.7 × RI₅, RI₇ = 0.7 × RI₆, and so on). The value at year 5 of that stream is RI₅ × ω / (1 + rₑ − ω) = 247.8 × 0.7 / (1.10 − 0.70) = 173.5 / 0.40 = 433.6. Discounted: 433.6 / 1.10⁵ = 433.6 / 1.6105 = 269.3.

*Equity value.* 10,000 + 1,582.0 + 269.3 = 11,851 million, a P/B of 1.185.

*Alternatives.* If excess returns vanish immediately after year 5 (ω = 0), value is 10,000 + 1,582 = 11,582 (P/B 1.158). If the 14 percent ROE persisted at 4 percent growth (steady state), value would be 16,667.

*Interpretation.* The bank deserves a P/B of 1.19, not 1.67, because the market must be paying for a fade. If it trades at 1.2 times book, as Harbor Trust does in the vignette, the market price is consistent with ROE falling from 15 to 12 percent over five years and excess returns dying out gradually. The only way to justify a higher price is to argue that the fade is shallower. Residual income makes that debate explicit: roughly 86 percent of the value above book comes from the first five years (1,582 of 1,851), so the argument is about the next five years' ROE, not about a distant terminal value. This is why residual-income models are less sensitive to terminal assumptions than dividend models: book value, which is already on the balance sheet, delivers most of the value up front.

### Dividend and free-cash-flow-to-equity models with a capital constraint

The alternative is to forecast distributable cash flow to equity. For a bank:

```
FCFE = Net income − (Required growth in equity)
Required growth in equity = Target CET1 ratio × Growth in RWA
```

If the bank holds its CET1 target constant, equity must grow at the same rate as RWA. Net income not retained for that purpose is distributable via dividends and buybacks. In steady state the payout ratio equals 1 − g / ROE; for example, ROE 14 percent and growth 5 percent imply a payout of 64 percent.

**Example 4.2 – FCFE valuation with a CET1 constraint.** A bank has RWA of 80,000 million and targets CET1 of 12 percent, so equity is 9,600 million. ROE is 14 percent over the explicit period, the cost of equity is 10 percent, and RWA growth is 8, 7, 6, 5 and 4 percent over years 1 to 5. After year 5 growth is 3 percent and ROE is 12 percent (so the payout is 1 − 0.03/0.12 = 75 percent).

*Mechanics.* Equity at the end of year t equals equity at the start times (1 + growth), since CET1 and RWA both scale. Net income = 14 percent × beginning equity. FCFE = net income − (ending equity − beginning equity).

| Year | Beginning equity | Net income | Equity retained | FCFE | PV at 10% |
|---|---|---|---|---|---|
| 1 | 9,600.0 | 1,344.0 | 768.0 | 576.0 | 523.6 |
| 2 | 10,368.0 | 1,451.5 | 725.8 | 725.8 | 599.8 |
| 3 | 11,093.8 | 1,553.1 | 665.6 | 887.5 | 666.8 |
| 4 | 11,759.4 | 1,646.3 | 588.0 | 1,058.3 | 722.9 |
| 5 | 12,347.4 | 1,728.6 | 493.9 | 1,234.7 | 766.7 |

*PV of explicit FCFE.* 523.6 + 599.8 + 666.8 + 722.9 + 766.7 = 3,279.8.

*Terminal value.* Equity at end of year 5 = 12,347.4 × 1.04 = 12,841.2. Year-6 net income = 12 percent × 12,841.2 = 1,541.0; payout 75 percent gives dividends of 1,155.7. TV = 1,155.7 / (0.10 − 0.03) = 16,510.2. PV = 16,510.2 / 1.6105 = 10,251.5.

*Equity value.* 3,279.8 + 10,251.5 = 13,531 million; P/B = 13,531 / 9,600 = 1.41.

*Interpretation.* Here 76 percent of the value comes from the terminal value, the typical weakness of dividend models. Compare with Example 4.1, where most value sat in the book and the first years' excess returns. The two methods should be reconciled; if they give very different answers, the difference is in the ROE and persistence assumptions embedded in each, and the analyst should find it. Note also the role of growth: in year 1 the bank retains 768 of its 1,344 earnings (57 percent) to support 8 percent growth, leaving a payout of only 43 percent. Growth is not free for a bank.

### Capital requirements and the cost of regulation

Higher capital requirements reduce ROE for a given return on risk-weighted assets, and hence value, unless the cost of equity falls proportionally (a Modigliani-Miller argument that holds only partly in the presence of deposit insurance, tax shields on debt and implicit guarantees). To measure the effect, write earnings as a return on RWA: ROE = (NI/RWA) / CET1. In steady state:

```
Value per unit of RWA = (NI/RWA − g × CET1) / (rₑ − g)
```

**Example 4.2b – Sensitivity to the CET1 requirement.** Use the bank of Example 4.2 with NI/RWA = 1.68 percent (14 percent ROE × 12 percent CET1), g = 4 percent and rₑ = 10 percent, holding the return on RWA constant.

- CET1 10 percent: value per RWA = (1.68% − 0.4%) / 6% = 21.33 percent, i.e. 17,067 on RWA of 80,000; ROE = 16.8 percent; P/B = 2.13.
- CET1 12 percent: (1.68% − 0.48%) / 6% = 20.00 percent, i.e. 16,000; ROE 14.0 percent; P/B = 1.67.
- CET1 14 percent: (1.68% − 0.56%) / 6% = 18.67 percent, i.e. 14,933; ROE 12.0 percent; P/B = 1.33.

Each percentage point of additional CET1 reduces equity value by about 1,067 million (6.7 percent) if the return on RWA is unchanged, because equity that must be held earns the same RWA return but is charged at the cost of equity. In practice banks respond by shrinking low-return RWA, repricing loans or cutting costs, so the true cost is lower than the arithmetic suggests. The calculation does show why capital regulation is a first-order valuation input and why bank valuations move on stress-test announcements.

### Credit cycle, provisions and normalization

Bank earnings are procyclical: provisions are low at the top and high after a downturn. Using current ROE overstates value at the peak and understates it at the trough. Normalize provisions to a through-the-cycle loss rate (for instance, the average of annual credit losses over a full cycle, scaled to the current loan mix), and use that to compute normalized ROE. Credit-quality indicators (non-performing loan ratios, coverage ratios, loan concentration) help judge whether reported provisions are adequate; an under-provisioned bank has overstated book value and ROE. Where book value itself is doubtful, adjust it for unrecognized losses, for example by marking the securities portfolio to market and by examining unrealized losses on held-to-maturity holdings, which are not in reported equity but would reduce regulatory capital in a stress.

### Other financial firms

Asset managers and exchanges are valued on earnings and fee-related cash flow, as their capital needs are small and enterprise-style DCF works with care. Broker-dealers and lenders with significant balance sheets resemble banks and are best valued by P/B-ROE. For specialty lenders and finance companies, the funding mix matters: a lender funded by securitization is more like an industrial firm with captive finance, and the method should follow the funding. In all cases the principle is to identify which liabilities are operating and which are financing.

## 4.3 Valuing Insurers

### Float and the two sources of profit

An insurer collects premiums first and pays claims later. The accumulated liabilities (loss reserves and unearned premiums) are called **float**: money held for policyholders and invested for the insurer's benefit. An insurer therefore has two sources of profit: **underwriting** (premiums minus claims and expenses) and **investment income** on float and capital. For a property-casualty (P&C) insurer, the underwriting result is summarized by the **combined ratio**:

```
Combined ratio = (Claims incurred + Underwriting expenses) / Premiums earned
```

A combined ratio below 100 percent is an underwriting profit; above 100 percent, a loss. If the loss is smaller than the investment return on the float, float is cheap funding; if the insurer consistently runs a combined ratio above 100 percent, float has a **cost** equal to the underwriting loss divided by float, and it adds value only if that cost is below the investment yield (or the cost of alternative funding).

### The ROE of a P&C insurer

ROE = (Underwriting profit + Investment income) × (1 − tax) / Equity. The elements are premium-to-equity leverage (written premiums divided by equity), float-to-equity leverage, the combined ratio and the investment yield. The relationship shows why insurance is a leverage business: a firm that writes premiums equal to 1.25 times equity and holds float equal to 1.9 times equity earns investment income on a large asset base relative to equity, at the cost of exposing equity to reserve errors and catastrophe losses.

**Example 4.3 – Underwriting, float and ROE.** A P&C insurer writes and earns premiums of 1,000 million, has equity of 800 million and float (reserves) of 1,500 million, so investable assets are 2,300 million. The portfolio yields 4 percent; the tax rate is 21 percent. Investment income is 2,300 × 4% = 92 million. We examine four combined ratios.

| Combined ratio | Underwriting result | Investment income | Pre-tax profit | Net income | ROE | Cost of float |
|---|---|---|---|---|---|---|
| 94% | +60 | 92 | 152 | 120.1 | 15.0% | −4.0% |
| 98% | +20 | 92 | 112 | 88.5 | 11.1% | −1.3% |
| 100% | 0 | 92 | 92 | 72.7 | 9.1% | 0.0% |
| 103% | −30 | 92 | 62 | 49.0 | 6.1% | +2.0% |

*Calculations (98 percent row).* Underwriting result = 1,000 × (1 − 0.98) = 20; pre-tax profit = 20 + 92 = 112; net income = 112 × 0.79 = 88.5; ROE = 88.5 / 800 = 11.06 percent; cost of float = (0.98 − 1) × 1,000 / 1,500 = −1.33 percent (negative means the insurer is paid to hold float).

*Break-even combined ratio.* For a 10 percent ROE, net income must be 80, pre-tax profit 80 / 0.79 = 101.3, underwriting result = 101.3 − 92 = 9.3, so the combined ratio must be 1 − 9.3/1,000 = 99.1 percent.

*Justified P/B.* With cost of equity 10 percent and growth 3 percent, P/B = (ROE − g) / (rₑ − g): 94% → (15.0 − 3)/7 = 1.72; 98% → 1.15; 100% → 0.87; 103% → 0.45.

*Interpretation.* A swing of nine points in the combined ratio (94 to 103) takes the ROE from 15 to 6 percent and the justified P/B from 1.72 to 0.45, a 74 percent decline. The insurer's value hinges on underwriting discipline, which the market can observe only with a lag, because reserves for long-tailed lines take years to prove adequate. This is why analysts test reserve development (are prior-year reserves repeatedly released or strengthened?), why a single good year proves little, and why a combined ratio should be normalized for catastrophe losses (a benign year flatters; a heavy year distorts the other way) using a multi-year average catastrophe load.

### Life insurers and embedded value

Life insurers hold long-duration liabilities with embedded guarantees and options, and earnings recognition is spread over decades, so accounting book value understates the economics. Practitioners use **embedded value**: the value of net assets (adjusted net worth) plus the present value of future profits from in-force policies (value of in-force business), less the cost of holding required capital. **New business value** adds the value created by the year's new sales, discounted at a risk discount rate. Because the discount rate, lapse rates, mortality and the valuation of guarantees (interest rate options embedded in policies, valued with the option methods of Volume 1, Chapter 18) drive the result, embedded value is only as good as its assumptions. Price to embedded value is the life-insurance analogue of P/B, and a discount to embedded value reflects market doubt about the assumptions or the sustainability of new business.

### Reserve risk, catastrophe risk and capital

Two features distinguish insurance from banking. Insurance liabilities are estimates, and the estimate can be wrong in either direction: valuation must adjust for reserve adequacy. And losses are fat-tailed (hurricanes, earthquakes, pandemics), so capital must be sized to a tail event, typically a one-in-200-year loss in regulatory frameworks, which constrains growth the way CET1 constrains a bank. Reinsurance transfers some of the tail; its cost belongs in the underwriting result. As for banks, the principal valuation tools are P/B-ROE, residual income and dividend models with a solvency constraint.

