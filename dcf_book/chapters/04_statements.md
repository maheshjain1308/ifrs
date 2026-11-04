# Part II — Cash Flows {.part}

<div class="pagebreak"></div>

# Chapter 4 — Reading Financial Statements for Valuation

A statutory balance sheet and income statement are prepared for compliance, creditors and tax. Valuation needs them reorganised around a different question: *what does the business do operationally, and how is it financed?* This chapter teaches that reorganisation and the ratios that follow from it.

## 4.1 Why reformulate?

A published income statement mixes operating items (sales, cost of goods, depreciation) with financing items (interest expense, interest income) and non-recurring items. A published balance sheet mixes operating assets (plant, inventory, receivables) with non-operating ones (surplus cash, investments in other companies). A DCF values the *operating business*, so these must be separated:

- Operating profit → NOPAT → FCFF → enterprise value.
- Financing items → capital structure → discount rate.
- Non-operating assets → valued separately and added in the bridge.

## 4.2 Operating versus financial items

**Operating assets** are used to generate revenue: property, plant and equipment; intangible assets used in operations; inventories; trade receivables; prepaid expenses; operating cash needed to run the business.

**Operating liabilities** arise from operations and carry no explicit interest: trade payables, accrued expenses, advances from customers, provisions for warranties, deferred revenue.

**Financial assets and liabilities**: cash beyond operating need, marketable securities, loans receivable (financial assets); bank loans, debentures, finance leases, preference shares (financial liabilities).

**Non-operating assets** are held for reasons other than the core business: investments in unconsolidated associates, idle land, surplus properties, loans to related parties.

*How much cash is operating?* Some cash is needed to run the business (cash in tills, minimum balances). A common treatment is to treat all cash above, say, 1–2% of revenue as excess. Practitioners vary; the key is consistency between the cash treated as operating in forecasts and the cash added in the bridge.

## 4.3 The invested-capital identity

From the operating side:

**Invested capital = Net fixed assets + Net working capital + Goodwill and intangibles + Other operating assets − Other operating liabilities**

From the financing side:

**Invested capital = Equity + Debt (incl. leases) + Preference + Minorities − Cash and non-operating investments**

The two sides must agree. For Meridian: operating side = 900 + 200 + 100 + 250 = 1,450; financing side = 1,100 + 600 − 150 − 100 = 1,450. ✔

Invested capital is the base on which returns are measured and on which reinvestment builds.

## 4.4 NOPAT

**NOPAT = EBIT × (1 − operating tax rate)**

NOPAT is what operating profit would be if the company had no debt: the profit available to *all* capital providers. For Meridian: EBIT 240 × (1 − 0.25) = **180**.

*Which tax rate?* Use the rate applicable to operating profit. Candidates: the statutory marginal rate (25.17% for most Indian domestic companies under the concessional section 115BAA regime; around 34.94% under the older regime with surcharge and cess), or the effective rate (cash taxes ÷ PBT). In the near term, forecasts should reflect actual expected cash taxes, including any carried-forward losses and incentives; in the terminal period, drift toward the marginal rate because deferrals and incentives cannot last forever.

## 4.5 Return on invested capital (ROIC)

**ROIC = NOPAT ÷ Invested capital** (usually opening or average).

ROIC measures how efficiently the business turns capital into operating profit. It decomposes into two components:

**ROIC = NOPAT margin × Capital turnover** = (NOPAT ÷ Revenue) × (Revenue ÷ Invested capital).

Meridian: NOPAT margin = 180/2,000 = 9.0%; capital turnover = 2,000/1,450 = 1.38×; ROIC = 9.0% × 1.38 = 12.4%.

Comparing ROIC with WACC tells whether the business creates value: if ROIC > WACC, each rupee of growth *adds* value; if ROIC < WACC, growth *destroys* it. Meridian's ROIC 12.4% versus WACC ≈ 11.2% implies a small positive spread today; the plan to raise margins is what lifts ROIC toward 15%.

> **Key idea.** Growth creates value only when new capital earns more than its cost. A DCF forecast that has revenue growing rapidly while ROIC stays below WACC is a recipe for value destruction, however good the revenue story sounds.

## 4.6 Working capital

**Operating net working capital (NWC)** = (Inventory + Trade receivables + Other operating current assets) − (Trade payables + Other operating current liabilities).

Exclude cash, short-term debt and current portions of long-term debt (financing items). Include only what the business needs for operations.

Metrics:

- **Receivable days** = Receivables ÷ Revenue × 365
- **Inventory days** = Inventory ÷ Cost of goods sold × 365
- **Payable days** = Payables ÷ Cost of goods sold (or purchases) × 365
- **Cash conversion cycle** = Receivable days + Inventory days − Payable days.

A growing company ties up more cash in working capital; a shrinking one releases it. For forecasting, model NWC as days or as a percentage of revenue, and compute the *change* each year (Chapter 7).

## 4.7 Fixed assets, capex and depreciation

Capex = Closing net fixed assets − Opening net fixed assets + Depreciation (for tangible assets, ignoring revaluations and disposals). Compare capex to depreciation:

- **Capex / Depreciation > 1:** the business is investing for growth (or inflation of asset costs).
- **Capex / Depreciation ≈ 1:** maintenance mode.
- **Capex / Depreciation < 1:** harvesting; shrinking the asset base (sustainable only temporarily).

Meridian's depreciation is 100 on opening net fixed assets of roughly 860 (about 11.6%). A steady-state reinvestment will keep capex above depreciation in line with growth and inflation.

## 4.8 Leases and Ind AS 116

Under Ind AS 116 (and IFRS 16) most leases are on the balance sheet as a right-of-use asset and lease liability. The income statement shows depreciation on the right-of-use asset and interest on the lease liability instead of rent. Consequences for valuation:

- EBITDA is *higher* than under the old standard (rent no longer deducted). EBIT is only slightly affected.
- Lease liabilities are **debt** (a financing claim).
- FCFF is *before* lease payments (lease principal and interest are financing flows), and **EV includes the lease claim**; so lease liability must be subtracted in the bridge.
- WACC should include lease debt in capital structure and cost of debt.

The alternative is to treat leases as operating: subtract lease payments as an operating cost, exclude lease liability from debt, and use EBITDA *after* rent. Either is valid *if applied consistently*, including in any multiples used for cross-checks. Mixing (EBITDA pre-rent with EV excluding leases) is a classic error.

## 4.9 Intangibles, R&D and brand spending

Accounting treats most internally generated intangibles (R&D, marketing building a brand, training) as expenses, not assets. This understates both invested capital and NOPAT, since the spending is really an investment. For firms where such spending is material (pharma, software, FMCG advertising), analysts sometimes *capitalise* R&D or brand spending, amortise it over an estimated useful life, and add the unamortised balance to invested capital and the net addition to operating income. Doing so makes ROIC more meaningful and brings reinvestment closer to economic reality. It must be done for both history and forecast, and consistently with the terminal value.

## 4.10 Non-recurring and non-operating items

Strip from operating profit anything that will not recur or does not belong to operations:

- Gains/losses on sale of assets or investments.
- Restructuring and impairment charges (but consider: a company with *recurring* "one-off" charges has recurring costs).
- Government grants and tax refunds, if one-time.
- Fair-value gains on investments, exchange gains on borrowings.
- Share of profit of associates (value the associate separately).
- Exceptional items disclosed under Ind AS.

*Judgement point.* Do not remove costs merely because they are lumpy. Management's habit of "adjusting" repeated expenses (restructuring every year) inflates apparent profitability. A useful test: if the item has occurred in three of the last five years, treat it as recurring.

## 4.11 Common-size analysis and trend analysis

Express each line as a percentage of revenue across years: gross margin, employee cost %, selling and distribution %, EBITDA margin, depreciation %, EBIT margin. Changes reveal operating leverage, mix shifts, input-cost pressure. Cross-sectional comparison against peers highlights whether margins are above or below the industry and why.

| Meridian | FY2024 | FY2025 | FY2026 |
|----------|-------:|-------:|-------:|
| Revenue growth | 11.0% | 12.5% | 13.1% |
| Gross margin | 41.0% | 41.8% | 42.5% |
| EBITDA margin | 15.0% | 16.1% | 17.0% |
| D&A / revenue | 5.0% | 5.0% | 5.0% |
| EBIT margin | 10.0% | 11.1% | 12.0% |
| Capex / revenue | 8.0% | 7.5% | 7.2% |
| NWC / revenue | 10.5% | 10.2% | 10.0% |
| ROIC | 10.8% | 11.6% | 12.4% |

The trend: improving gross margin and operating leverage, stable working-capital intensity, capex intensity trending down as the capacity build-out matures. These patterns are the starting point for forecasts.

## 4.12 Quality-of-earnings checks

Before relying on historical numbers, test them.

1. **Cash conversion.** Compare operating cash flow with EBITDA/net income over several years. Persistent shortfall suggests aggressive revenue recognition or working-capital build-up.
2. **Accruals.** Large, growing accruals (profit ahead of cash) are a warning sign.
3. **Receivables versus sales.** Receivables growing faster than revenue may signal channel stuffing or collection problems.
4. **Capitalised costs.** Rising capitalised development or software costs may flatter profit.
5. **Related-party transactions.** Pricing at non-arm's-length can distort margins.
6. **Auditor's qualifications and emphasis of matter.** Read the notes.
7. **Tax rate.** Unusually low effective tax may reflect temporary benefits.

## 4.13 Segment information

When a company has several businesses with different growth, margins and risk, value them separately (sum-of-the-parts), each with its own WACC and cash flows, and subtract unallocated corporate costs. Segment disclosures (Ind AS 108) give revenue, profit and assets by segment — enough for a first cut. Where segments are not separable, value the company as a whole but blend the risk profile.

## 4.14 Putting it together: Meridian's reformulated statements

**Income statement (₹ crore, FY2026).**

| | |
|---|---:|
| Revenue | 2,000.0 |
| Operating costs excluding D&A | (1,660.0) |
| EBITDA | 340.0 |
| D&A | (100.0) |
| **EBIT** | **240.0** |
| Tax on EBIT @ 25% | (60.0) |
| **NOPAT** | **180.0** |
| Interest expense | (54.0) |
| Tax shield on interest | 13.5 |
| **Net income** | **139.5** |

NOPAT 180 − after-tax interest 40.5 = 139.5 ✔. Reformulation does not change net income, it only reveals the operating and financing layers.

## Chapter 4 summary

- Separate operating from financing and non-operating items.
- Invested capital can be built from either side of the balance sheet; the two must tie.
- NOPAT = EBIT × (1 − t); ROIC = NOPAT ÷ invested capital = margin × turnover.
- Working capital, capex and depreciation are the bridge from profit to cash.
- Leases, intangibles and non-recurring items require deliberate, consistent treatment.
- Test earnings quality before extrapolating history.

## Review questions

1. Why is interest income on surplus cash excluded from FCFF?
2. Compute ROIC given EBIT 300, tax rate 25%, invested capital 1,800.
3. How do Ind AS 116 leases change EBITDA, debt and EV?
4. When is it legitimate to adjust earnings for "one-off" items?
5. What does capex/depreciation of 0.7 for several years imply?

<div class="pagebreak"></div>
