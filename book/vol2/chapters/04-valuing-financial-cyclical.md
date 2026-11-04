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

Higher capital requirements reduce ROE for a given return on risk-weighted assets, and hence value, unless the cost of equity falls proportionally (a Modigliani-Miller argument that holds only partly given deposit insurance and implicit guarantees). Writing ROE = (NI/RWA) / CET1, the steady-state value per unit of RWA is:

```
Value per unit of RWA = (NI/RWA − g × CET1) / (rₑ − g)
```

**Example 4.2b – Sensitivity to the CET1 requirement.** Use the bank of Example 4.2 with NI/RWA = 1.68 percent (14 percent ROE × 12 percent CET1), g = 4 percent and rₑ = 10 percent, holding the return on RWA constant.

- CET1 10 percent: value per RWA = (1.68% − 0.4%) / 6% = 21.33 percent, i.e. 17,067 on RWA of 80,000; ROE = 16.8 percent; P/B = 2.13.
- CET1 12 percent: (1.68% − 0.48%) / 6% = 20.00 percent, i.e. 16,000; ROE 14.0 percent; P/B = 1.67.
- CET1 14 percent: (1.68% − 0.56%) / 6% = 18.67 percent, i.e. 14,933; ROE 12.0 percent; P/B = 1.33.

Each percentage point of additional CET1 reduces equity value by about 1,067 million (6.7 percent) if the return on RWA is unchanged, because equity that must be held earns the same RWA return but is charged at the cost of equity. In practice banks respond by shrinking low-return RWA, repricing loans or cutting costs, so the true cost is lower than the arithmetic suggests. The calculation does show why capital regulation is a first-order valuation input and why bank valuations move on stress-test announcements.

### Credit cycle, provisions and normalization

Bank earnings are procyclical: provisions are low at the top and high after a downturn, so current ROE overstates value at the peak and understates it at the trough. Normalize provisions to a through-the-cycle loss rate scaled to the current loan mix, and examine coverage and concentration to judge whether reported provisions are adequate. Where book value is doubtful, adjust it for unrecognized losses such as unrealized losses on held-to-maturity securities, which are not in reported equity but would reduce capital in a stress.

### Other financial firms

Asset managers and exchanges have small capital needs and can be valued on fee-related earnings and cash flow. Broker-dealers and lenders with large balance sheets resemble banks and are valued by P/B-ROE. In every case, ask which liabilities are operating inputs and which are financing.

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

## 4.4 Valuing Cyclical Firms: Normalized Earnings

### The cyclical trap

A cyclical firm's profits swing with the economic cycle, and often far more than revenue because of **operating leverage**: fixed costs (plant, labor, maintenance) do not fall when volume does. A steelmaker whose revenue falls 25 percent from peak to trough may see its operating profit fall by more than 90 percent. Multiples applied to such earnings are misleading in a systematic way. At the **peak**, earnings are high, the price-to-earnings ratio looks low, and the stock seems cheap, just when the cycle is about to turn. At the **trough**, earnings are depressed, the P/E ratio looks high (or is undefined), and the stock seems expensive, just when recovery is likely. Markets often anticipate this, so cyclical stocks typically trade at the highest P/E near the trough and the lowest near the peak, an inversion that confuses the unwary.

### Normalization

The remedy is to value the firm on **normalized (mid-cycle) earnings**: the earnings the firm would generate at an average point in the cycle. There are four approaches, usually combined.

1. **Average over a full cycle.** Average margins (not absolute profits) over at least one full cycle, apply them to normalized revenue, and deduct the average depreciation. Average margins, not average earnings, because the scale of the business changes across the cycle.
2. **Mid-cycle capacity and price.** For industries driven by utilization and a commodity-like price, estimate mid-cycle utilization and price (for example, the long-run marginal cost of production plus a return) and compute earnings from the cost curve.
3. **Return-on-capital approach.** Estimate a through-the-cycle ROIC and apply it to invested capital: normalized NOPAT = ROIC × capital. This links earnings to the asset base and is useful when the capital base is stable.
4. **Replacement-cost cross-check.** Cyclical industries with excess capacity trade below the cost of building new plants, and the market value of the firm should tend toward replacement cost in a boom and fall below it in a bust. Comparing enterprise value to replacement cost (a Tobin's q logic) tells you where in the cycle the market is pricing the firm.

Normalization has a risk: the cycle may have structurally changed. A decade of low margins may reflect permanent overcapacity, Chinese competition, a technology shift or regulation, and not a cycle at all. The analyst must distinguish cyclical from structural, which requires understanding the industry's supply side (capacity additions, exit barriers, cost curve) and not just the history of earnings.

**Example 4.4 – Normalizing a steelmaker.** Ironvale Steel has ten years of data (millions of currency units). D&A is 700 per year, net debt 3,000 and there are 100 million shares.

| Year | Revenue | EBITDA margin | EBITDA |
|---|---|---|---|
| 1 | 8,000 | 14% | 1,120 |
| 2 | 9,500 | 19% | 1,805 |
| 3 (peak) | 11,000 | 24% | 2,640 |
| 4 (trough) | 7,500 | 3% | 225 |
| 5 | 6,800 | 5% | 340 |
| 6 | 8,200 | 12% | 984 |
| 7 | 9,600 | 18% | 1,728 |
| 8 | 10,800 | 22% | 2,376 |
| 9 | 9,000 | 16% | 1,440 |
| 10 | 7,000 | 8% | 560 |
| **Total / average** | **87,400 / 8,740** | **15.1% (weighted)** | **13,218 / 1,321.8** |

*Normalized EBITDA.* Average revenue 8,740 × weighted-average margin 15.12 percent = 1,321.8. (Identical to the average of annual EBITDA because the margin is revenue-weighted.)

*Normalized EBIT.* 1,321.8 − 700 = 621.8.

*Valuation using a mid-cycle EV/EBITDA multiple of 6.0.* EV = 6.0 × 1,321.8 = 7,930.8. Equity = 7,930.8 − 3,000 = 4,930.8. Per share = 49.31.

*The traps.* Apply what a naive investor would do at each point in the cycle.

| Point in cycle | EBITDA | Multiple the market would pay | EV | Equity per share |
|---|---|---|---|---|
| Peak (year 3) | 2,640 | 4.5x | 11,880 | 88.80 |
| Trough (year 4) | 225 | 14.0x | 3,150 | 1.50 |
| Normalized | 1,321.8 | 6.0x | 7,930.8 | 49.31 |

*Interpretation.* Trough EBITDA of 225 is below depreciation of 700 (EBIT of −475), so no P/E exists, and valuing the firm at 6 times trough EBITDA gives 6 × 225 − 3,000 < 0 for a company that earns 621.8 of EBIT in an average year. Peak EBITDA at even a low multiple gives 88.80, well above the mid-cycle value, because the multiple is applied to earnings that will not last. The relevant comparison is between the normalized value (49.31) and the market price: if the stock trades at 20 at the trough, the market is pricing a permanent decline or fearing the leverage (net debt of 3,000 is 13 times trough EBITDA). The result is sensitive to inputs: a mid-cycle margin of 12 percent instead of 15.1 percent lowers normalized EBITDA to 1,048.8 and equity per share to 32.9.

### Leverage and the survival constraint

Net debt of 3,000 is 2.3 times normalized EBITDA but 13 times trough EBITDA. If a covenant breach or refinancing wall arrives at the trough, equity may be wiped out or diluted before the cycle turns, so the equity of a levered cyclical is an option on the cycle (Volume 1, Chapter 15 on distress costs and Chapter 18 on options). Practitioners test the balance sheet against a downside cycle (two years at trough margins), compute liquidity and covenant headroom, and judge the probability of an equity raise at depressed prices. Mid-cycle multiples should come from peers on the same basis (EV divided by each peer's normalized EBITDA) and be cross-checked against EV/invested capital plotted against normalized ROIC minus WACC.

## 4.5 Commodity Producers: Price Decks, Project Value and Uncertainty

### The role of the price deck

For a commodity producer, the key driver of value is a price the firm cannot influence. The standard practice is to construct a **price deck**: a year-by-year forecast of the commodity price (and often of exchange rates and input costs) used in the valuation. The deck must reflect three considerations.

- **Spot versus long-run price.** Commodity prices mean-revert in the long run toward the marginal cost of supply (the incentive price that brings on enough new production to meet demand). A deck usually starts near the futures curve for the first years (where forward markets are liquid), and blends toward a long-run price assumption derived from the cost curve.
- **Consistency.** Within an investment bank or a company, the deck should be common across assets and analyses. Different analysts using different decks produce uncomparable values.
- **Real versus nominal.** The deck must be consistent with the discount rate: a real price deck with a real WACC, or nominal with nominal.

Futures prices are risk-adjusted market expectations for the near term and are a useful anchor, though liquidity declines beyond a few years, and the term structure reflects storage costs and convenience yield as well as expectations. Cost-curve analysis anchors the long run: the price must be at least the cash cost of the marginal producer in the long run to sustain supply, and it will eventually reflect the full cost (including a return on capital) of the incentive project needed to meet demand.

### Operating leverage and the sensitivity of value

A mine has low variable costs relative to price, and fixed costs and capital are large, so a small price change produces a large change in cash flow. In the example below a 6.7 percent change in the copper price (0.25 on 3.75) changes value by nearly 50 percent. The key sensitivity tools are:

- **Price sensitivity table**, which shows NPV at several price decks, and the **break-even price** at which NPV is zero.
- **Cost-curve position.** A producer in the lowest quartile of the cost curve survives price troughs and earns excess returns in booms; a high-cost producer is the marginal supplier and has little margin of safety.
- **Hedging.** Hedging locks in the price for a portion of output. It changes the cash-flow profile and reduces financial distress risk, but it does not change the value of the asset in an efficient market. A valuation should use the unhedged deck for the asset, and add or subtract the mark-to-market value of the hedge book separately.

**Example 4.5 – Valuing a copper mine under different price decks.** A mine will produce 440 million pounds of payable copper per year for eight years. Cash cost is 2.40 per pound, sustaining capital expenditure is 120 million per year, and the initial capital of 1,500 million (spent today) is depreciated straight-line over eight years (187.5 per year). The tax rate is 30 percent, applied to positive taxable income, and the discount rate is 8 percent (cash flows at year-end). Amounts in millions except prices.

*Mean-reverting deck.* The price is 4.50 in year 1, 4.25 in year 2, 4.00 in year 3, and the long-run price of 3.75 from year 4 on.

| Year | Price (per lb) | Revenue | EBITDA | Tax | FCF | PV at 8% |
|---|---|---|---|---|---|---|
| 1 | 4.50 | 1,980.0 | 924.0 | 221.0 | 583.0 | 539.9 |
| 2 | 4.25 | 1,870.0 | 814.0 | 188.0 | 506.0 | 433.9 |
| 3 | 4.00 | 1,760.0 | 704.0 | 155.0 | 429.0 | 340.6 |
| 4 | 3.75 | 1,650.0 | 594.0 | 122.0 | 352.0 | 258.8 |
| 5 | 3.75 | 1,650.0 | 594.0 | 122.0 | 352.0 | 239.6 |
| 6 | 3.75 | 1,650.0 | 594.0 | 122.0 | 352.0 | 221.9 |
| 7 | 3.75 | 1,650.0 | 594.0 | 122.0 | 352.0 | 205.4 |
| 8 | 3.75 | 1,650.0 | 594.0 | 122.0 | 352.0 | 190.2 |

(Calculations are shown to one decimal and use unrounded intermediate values, so a row may differ by 0.1.) Example, year 1: EBITDA = 440 × (4.50 − 2.40) = 924.0; taxable income = 924.0 − 187.5 = 736.5; tax = 0.30 × 736.5 = 221.0 (220.95 unrounded); FCF = 924.0 − 220.95 − 120 = 583.05; PV = 583.05 / 1.08 = 539.9.

*Present value of cash flows.* 2,430.1. *NPV* = 2,430.1 − 1,500 = **930.1**.

*Other decks.* Flat spot price of 4.50 for all eight years: NPV = 1,850.6. Flat long-run price of 3.75: NPV = 523.1.

*Sensitivity of the mean-reverting deck to a parallel shift in price (per lb):*

| Shift | −0.50 | −0.25 | 0 | +0.25 | +0.50 |
|---|---|---|---|---|---|
| NPV | 45.2 | 487.7 | 930.1 | 1,372.6 | 1,815.1 |

*Break-even price.* The flat price at which NPV is zero is 3.45 per pound (computed by solving NPV(P) = 0).

*Interpretation.* Using the spot price throughout would value the mine at 1,850.6, double the 930.1 from a deck that reverts to the long-run price, which is why equity analysts' price targets can differ by 40 percent on the same asset. Each 0.25 per pound is worth about 442.5 million of NPV, 48 percent of the base value (each 0.25 adds 110 of annual pre-tax revenue, 77 after tax, times the 8-year annuity factor of 5.747). The break-even price of 3.45 is only 8 percent below the long-run assumption of 3.75, so the margin of safety is thin: a project valued at 930 that would be worthless at a 3.45 price. The 1,500 of up-front capital makes it a levered bet on the price. A prudent investment committee would require that the project is positive-NPV at a conservative deck (for example, the lower quartile of the cost curve) before approving the project, or that the upside be shared with a partner.

### Mean reversion and stochastic prices

A deterministic deck is the expected path but not the uncertainty around it. Commodity prices mean-revert: a high price spurs supply and a low price curtails it. A standard model (Schwartz-style) makes the log of the price follow an **Ornstein-Uhlenbeck** process: the price is pulled toward a long-run level at speed κ and subject to volatility σ:

```
d ln P = κ (μ − ln P) dt + σ dW
```

The half-life of a deviation is ln 2 / κ; with κ = 0.35 per year the half-life is about two years. Simulation of this process lets us value the **operating flexibility** that a deterministic deck omits. A producer is not obliged to produce at a loss: if the price falls below the cash cost plus the cost of keeping the mine on care and maintenance, it can **curtail** production, an option that truncates the downside. (Restarting costs money and takes time, a complication we ignore.)

**Example 4.6 – Monte Carlo valuation with a curtailment option.** The mine of Example 4.5 is valued with 20,000 simulated eight-year price paths. The log price follows the exact discretization of the mean-reverting process, starting at 4.50, with long-run median 3.75 (μ = ln 3.75), κ = 0.35 and σ = 0.22 per year. Each year, free cash flow is computed as in Example 4.5. With the option, if free cash flow would be below −60 million (the cost of care and maintenance), the mine is curtailed and the cash flow is −60. The script (seed 7) is:

```python
import numpy as np
rng = np.random.default_rng(7)
N, T = 20000, 8
kappa, mu, sig, p0 = 0.35, np.log(3.75), 0.22, 4.50
prod, cost, capex, tax, dep, w = 440, 2.40, 120, .30, 1500/8, .08
x = np.full(N, np.log(p0))
pv = np.zeros(N); pv_no = np.zeros(N)
for t in range(1, T + 1):
    x = mu + (x - mu)*np.exp(-kappa) + sig*np.sqrt((1-np.exp(-2*kappa))/(2*kappa))*rng.standard_normal(N)
    p = np.exp(x)
    ebitda = prod*(p - cost)
    fcf = ebitda - np.maximum(ebitda - dep, 0)*tax - capex
    pv_no += fcf/(1+w)**t
    pv += np.where(fcf < -60, -60, fcf)/(1+w)**t
npv_opt, npv_no = pv - 1500, pv_no - 1500
```

*Output.* Mean NPV without the option: 1,108.5. Mean NPV with the option: 1,132.0. Value of the curtailment option: 23.4. Distribution of NPV with the option: 5th percentile −632.1; 25th 289.2; median 1,036.6; 75th 1,865.9; 95th 3,236.6. The probability that NPV is negative is 17.0 percent with the option and 17.75 percent without it. Without the option the 5th percentile is −744.0.

*Interpretation.* Three observations follow. First, the simulated mean NPV (1,108) exceeds the deterministic-deck NPV (930) because the deck anchors the long-run *median* price at 3.75 and a lognormal price has a mean above its median (by exp(v/2), where v = σ²/(2κ) is the stationary variance of the log price; about 3.5 percent here) and because tax and cash flow are convex in price; the analyst must decide whether the deck represents the median or the mean, and use the same convention throughout. Second, the curtailment option adds only 23 (2 percent of value) here because a low-cost mine rarely needs to shut; for a high-cost mine the option would be worth far more, and ignoring it is a typical reason why DCF understates marginal producers. Third, the distribution is wide: the interquartile range is 1,577 and the 5th-to-95th range spans more than 3,800, so a single NPV conveys false precision. A capital-allocation decision should be tested against the downside, not only the mean.

### Reserves, depletion and fiscal regimes

Resource firms hold depleting assets, so valuation requires a production profile constrained by reserves (economically recoverable, classified as proven, probable or possible) rather than a perpetuity. Reserves depend on the price, since a higher price lowers the cut-off grade and converts resources into reserves. Model grade decline, sustaining capital and closure and decommissioning liabilities as negative cash flows at end of life; terminal value is generally zero. Replacing depleted reserves requires exploration spending that belongs in the forecast.

Royalties, severance and windfall taxes and state participation take a large, price-dependent share of cash flow: a royalty on revenue raises the break-even price, a profit-based tax shares the downside and a windfall tax caps the upside. Sovereign risk is handled through scenario cash flows (expropriation, changed terms) rather than the discount rate, following the principle of Chapter 3 that idiosyncratic events belong in the cash flows.

## 4.6 Net Asset Value for Resource Companies

### The method

The NAV approach values a resource company as the sum of the net present values of its assets, less corporate costs and net debt:

```
NAV = Σ (NPV of asset i × risk weight i) + Value of exploration − PV(corporate costs) − Net debt − Other liabilities
```

NAV per share is compared to the share price through **P/NAV**. Each asset is valued by its own discounted cash flow at the common price deck, with discount rates that reflect asset-specific risk, and the sum is a break-up value rather than a going-concern estimate. The method is standard for mining and for oil and gas exploration and production, where the portfolio is a set of discrete assets at different stages.

**Risk weighting by stage.** Assets are not equally certain. Producing assets are valued at 100 percent of their NPV (perhaps at a lower discount rate, such as 5 percent real). Assets with a completed feasibility study and permits receive a weight for completion and construction risk (for example, 70 percent). Pre-feasibility assets receive a much lower weight (30 to 40 percent), and exploration properties are valued at a price per unit of resource, a comparable-transactions value, or at cost. The weights can be viewed as the probability of reaching production, as in the risk-adjusted NPV of pipeline assets in Chapter 3.

**Example 4.7 – NAV of a diversified copper miner.** Cordillera Copper has four assets and an exploration portfolio. Project NPVs, computed under the company's price deck, are stated in millions.

| Asset | Stage | Unrisked NPV | Risk weight | Risked NPV |
|---|---|---|---|---|
| Mine A | Producing | 2,400 | 100% | 2,400 |
| Mine B | Producing | 1,350 | 100% | 1,350 |
| Project C | Feasibility, permitted | 1,800 | 70% | 1,260 |
| Project D | Pre-feasibility | 900 | 35% | 315 |
| Exploration portfolio | Early-stage | 150 | n/a | 150 |
| **Gross asset value** | | | | **5,475** |

*Corporate costs.* Annual head-office costs of 60 million, tax-effected at 30 percent and capitalized at the 8 percent discount rate as a perpetuity: 60 × (1 − 0.30) / 0.08 = 525. Deduct 525.

*Net debt.* 1,800.

*NAV.* 5,475 − 525 − 1,800 = **3,150** million. With 500 million shares, NAV per share = 6.30.

*P/NAV.* If the share price is 5.50, market capitalization is 2,750 and P/NAV = 5.50 / 6.30 = 0.87. At a P/NAV of 0.8 the price would be 5.04; at 1.2, 7.56.

*Interpretation.* The share trades at a 13 percent discount to NAV. Several facts qualify this reading. First, the leverage of NAV to price is high: the equity of 3,150 is only 58 percent of gross asset value, so a 10 percent fall in the risked asset value (548) lowers NAV by 17 percent. Second, 1,725 (32 percent) of gross value rests on the two development projects and exploration, which carry execution risk that the weights only approximate. Third, premium P/NAV multiples (1.0 or above) are normally paid to companies with a growth pipeline and a record of delivering on time and budget, and discounts to those with a record of overruns; a P/NAV of 0.87 may be fair for a company with poor delivery history. Fourth, NAV measures static asset value and treats the pipeline as discrete projects; it does not capture the value of management's ability to find and develop new assets, or the cost of replacing depleted reserves, so a "going-concern" premium is arguable for good operators.

### Pitfalls

The recurring errors are omitting capitalized corporate costs, using peer multiples for a structurally weaker segment, ignoring pensions, leases and minorities, and treating SOTP as achievable when separation costs, tax and loss of scale are ignored. As a check, compare the implied blended multiple (9.1x here) with that of focused peers, and ask why the group should be worth more in pieces.

## 4.8 Integrating the Methods

The approaches in this chapter share a discipline: identify what generates value, find the stable anchor, and be explicit about the cycle, price or structure that makes current accounting misleading.

| Question | Banks and insurers | Cyclicals | Commodity producers | Conglomerates |
|---|---|---|---|---|
| What is the anchor? | Book equity and ROE | Mid-cycle margin | Long-run price from the cost curve | Segment-specific multiples |
| What is the key driver? | ROE minus cost of equity; capital ratio; combined ratio | Operating leverage; cycle position | Price deck; cost position; reserves | Capital allocation; separation costs |
| What is the main risk? | Credit/reserve error; regulation | Balance-sheet survival at the trough | Price, fiscal and execution risk | Wrong multiples; hidden cross-subsidies |
| Standard cross-check | P/B vs ROE regression | EV vs replacement cost | P/NAV and break-even price | Implied blended multiple |

In practice, a holding such as Linden's three positions requires three different models with one common principle: the market price should be decomposed into what it implies about the unobservable driver (the fade in ROE, the position in the cycle, the long-run price, the multiple for the parts) and compared with an independent view of that driver. Reverse-engineering the market's assumption is more informative than producing another point estimate.

