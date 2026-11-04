# Chapter 5: Case: Cirrus Ledger, Valuing a SaaS Company

*Cirrus Ledger, Tessara Systems, Kessler Dunmore & Co., every peer company, and every transaction in this chapter are fictional and illustrative. All numbers were constructed for teaching and are not statistics about any real company, market, or deal. The chapter draws on Volume 1, Chapter 5 (equity valuation), Chapter 11 (WACC), Chapter 18 (options), Chapter 21 (enterprise valuation), and Chapter 22 (M&A), and on Volume 2's treatment of valuation under uncertainty.*

## The Situation

On the morning of Wednesday, 4 November 2026, Marisol Quade, chief executive of Cirrus Ledger, Inc., opened a letter that she had been half expecting for a year. It came from Walter Osei, chief executive of Tessara Systems, a much larger enterprise software group, and it proposed to acquire every outstanding share of Cirrus Ledger for $66.50 in cash. The letter was short, courteous, and firm about timing. The offer would lapse at 5:00 p.m. on Friday, 20 November 2026 unless the Cirrus board entered into exclusive discussions before then. It also made clear that Tessara would be content to "explore other paths" if the board declined, a phrase that the company's general counsel read as a hint that Tessara might go directly to shareholders.

Cirrus Ledger sells cloud software that automates accounts payable, invoice capture, and the monthly financial close for finance teams at mid-sized companies, generally those with revenue between $200 million and $3 billion. The company was founded in 2014 by Marisol Quade and by Devraj Anand Rao, who is now chief financial officer, after both had spent years watching finance staff reconcile supplier invoices in spreadsheets. It went public in fiscal 2021, and its fiscal year ends on 30 June. At the end of fiscal 2026 it had 2,474 customers, ending annual recurring revenue (ARR) of $589.3 million, revenue for the year of $559.5 million, and 1,740 employees. It had never reported a GAAP profit. It had, however, produced $134.9 million of free cash flow in fiscal 2026, a fact that the company's investor presentations placed on the first slide.

The offer is 18.8 percent above the undisturbed closing price of $56.00 on Friday, 30 October 2026. Tessara describes it as a "full and fair premium reflecting the strategic fit of the two businesses." Cirrus's stock had traded between $41 and $63 over the preceding twelve months, so the offer is above the top of that range, but only modestly, and several large holders had said publicly in the summer that they saw the shares as worth "well north of $70" if the company delivered its plan. The founders and directors together own 11.4 percent of the shares. Two long-only funds, Larkspur Growth and the Eastmarch Pension Trust, own 9.8 and 7.1 percent respectively and have already called the chair.

The board's independent directors have formed a special committee chaired by Teodora Brandt, a former chief financial officer of an industrial distributor. She has asked her advisers at Kessler Dunmore & Co. for a valuation that the committee can defend to shareholders and, if it comes to it, to a court. She has also asked Dev Rao and his finance team to prepare the standalone management plan, and she has been blunt about her concern. "Every software valuation I have seen this year starts with 'adjusted' something," she told the committee. "I want to know what a share of this company is worth when we count every cost, including the shares we hand to our own employees, and then I want to know how far the offer sits from that number."

You are a member of the Kessler Dunmore team. By the committee's meeting on Thursday, 19 November, you must deliver three things. The first is a diagnosis of the quality of the business, meaning its cohort economics, its unit economics, and its rule-of-40 profile on several definitions. The second is a valuation range built from a discounted cash flow model and from market multiples, with an explicit treatment of stock-based compensation. The third is a recommendation: accept, reject, or counter, and if counter, at what price and with what reasoning. The committee is not asking for a fairness opinion, which the bank will issue separately. It is asking for judgment about value, and about how much weight each method deserves.

Three people will react to your work. Dev Rao will defend the management plan, and he is right that it was prepared carefully, but he is also the person whose compensation depends on it. Teodora Brandt will push on stock-based compensation and on the terminal value. A third director, Anselm Okafor, a retired software executive and a major option holder, will argue that the plan understates the company's potential and that the board should reject any offer below $75. Your task is to give each of them a number they can interrogate and a reason they can accept or reject.

## Industry Context

Software sold as a subscription, usually called software as a service (SaaS), has become the most heavily studied business model in equity valuation. The customer pays a recurring fee for access rather than a large upfront license fee. The vendor books revenue ratably over the contract term but often bills in advance, so cash arrives before revenue is recognized and the balance sheet carries a liability called deferred revenue. For a growing vendor, deferred revenue is a source of cash: each new dollar of annual contract billed up front is collected before it is earned. This is one reason that free cash flow at a growing SaaS company frequently exceeds net income by a wide margin, and it is the reason that valuation shortcuts built on earnings multiples fail for the sector.

The economics of the model rest on a few ideas that every chapter reader should hold in mind. A customer is expensive to win. The vendor spends on sales and marketing in the year of acquisition, and the spending is expensed immediately, so the income statement shows a loss on a customer that will be profitable later. If the customer stays and buys more, the vendor earns that investment back several times over. The central analytic question is therefore whether customers stay, whether they expand, and how much it costs to acquire the next one. Investors summarize the first two ideas with net revenue retention (NRR), the share of last year's recurring revenue from existing customers that remains this year after churn, downgrades, and upsell, and with gross revenue retention (GRR), which excludes upsell. They summarize the third idea with customer acquisition cost (CAC), the payback period on that cost, and the ratio of lifetime value to CAC.

Because the model front-loads cost and back-loads cash, a growing SaaS company usually looks poor on GAAP earnings and strong on cash flow. Management teams respond by reporting "non-GAAP" operating income, which excludes stock-based compensation (SBC), and by reporting free cash flow before any adjustment for the cost of share issuance. Both measures are legitimate descriptions of cash, but neither shows the full economic cost of employing people. SBC is a real cost. The company pays engineers partly in shares, and the shares have a market value that would otherwise have to be paid in cash or would dilute existing owners. In the late 2010s and early 2020s, SBC ran at 15 to 30 percent of revenue at many growth-stage software companies, so the choice of how to treat it moves valuations by tens of percent. This chapter makes that choice explicit and measures its effect.

Investors also use a screening heuristic known as the rule of 40. It says that a healthy software company's revenue growth rate plus its profit margin should sum to at least 40 percent. The rule trades growth against profitability on the theory that a business can buy growth with margin or margin with growth. The heuristic is useful because it is simple and because empirical work on public software companies has found that it correlates with revenue multiples. It is dangerous because "profit margin" has no fixed definition. Free cash flow margin, non-GAAP operating margin, and GAAP operating margin give different answers for the same company, and the gap between them is almost exactly the amount of SBC and capitalized costs. Part of the work in this case is to compute the rule of 40 on several definitions and to see which one correlates with value.

The market backdrop in late 2026 is one of selective discipline. Public software multiples compressed in the years after the pandemic-era peak and then recovered unevenly. Investors now pay for durable growth with demonstrated cash conversion and penalize growth that depends on heavy discounting or rising acquisition costs. Corporate buyers and private equity sponsors have been active in mid-capitalization software, and take-private premiums have clustered in the low-to-mid 30s percent. A strategic acquirer such as Tessara can often pay more than a sponsor because it can remove duplicated sales, marketing, and administrative cost and can sell Cirrus's products into its own customer base. Tessara has not disclosed its synergy estimate. The committee must decide how much of that synergy it is willing to hand to its own shareholders.

Finally, a note on method. A discounted cash flow valuation of a company that is growing at 30 percent is a long-duration asset. Most of its value sits in cash flows that arrive ten years from now and later, and small changes in the discount rate, the terminal growth rate, or the long-run margin change the answer substantially. Multiples are easier to apply, but they import the market's current mood. A careful analyst uses both, understands why they disagree, and tells the client how much of the gap is judgment and how much is arithmetic. That is what the committee has asked you to do.

## Financial Data

Tables 1 and 2 show the cohort data that the finance team assembled. Customers are grouped by the fiscal year in which they first signed, and the table shows each group's ARR at each fiscal year-end. ARR is the annualized value of subscription contracts in force at the date, excluding professional services. The "pre-FY2023" row pools every customer acquired before 1 July 2022. The FY2023 cohort is therefore the oldest cohort that is reported separately.

Table 1. Ending ARR by customer cohort ($ millions, fiscal years ending 30 June)

| Cohort | FY2022 | FY2023 | FY2024 | FY2025 | FY2026 |
|:---|---:|---:|---:|---:|---:|
| Pre-FY2023 customers (pooled) | 175.0 | 192.5 | 209.8 | 226.6 | 242.5 |
| FY2023 cohort | – | 55.0 | 66.0 | 75.9 | 84.2 |
| FY2024 cohort | – | – | 66.0 | 77.2 | 86.5 |
| FY2025 cohort | – | – | – | 78.0 | 88.1 |
| FY2026 cohort | – | – | – | – | 88.0 |
| **Total ending ARR** | **175.0** | **247.5** | **341.8** | **457.7** | **589.3** |

Table 2. Customer counts, landing ARR per new customer and gross dollar retention

| Fiscal year | Opening customers | New customers | Closing customers | Landing ARR per new customer ($000) | Gross dollar retention |
|:---|---:|---:|---:|---:|---:|
| FY2023 | 1,180 | 380 | 1,477 | 144.7 | 93% |
| FY2024 | 1,477 | 420 | 1,794 | 157.1 | 92% |
| FY2025 | 1,794 | 455 | 2,123 | 171.4 | 91% |
| FY2026 | 2,123 | 500 | 2,474 | 176.0 | 90% |

The cohort table and the customer table should be read together. Landing ARR per new customer has risen from about $145,000 to $176,000, so Cirrus is selling larger initial deals. At the same time, gross dollar retention has slipped one point a year, from 93 percent to 90 percent. The finance team reports that customer counts are net of the roughly 7 percent of customers who leave each year, and that churn is concentrated in customers with annual contract values below $60,000.

Tables 3 through 5 give the financial statements. Revenue is recognized ratably, and subscription revenue equals the average of opening and closing ARR in each year, rounded. Professional services, mostly implementation work, run at thin margins. The income statement is on a GAAP basis, so stock-based compensation is inside every expense line. The finance team estimates that about one-third of SBC sits in sales and marketing, about 41 percent in research and development, 18 percent in general and administrative, and the balance in cost of revenue. The memo lines at the bottom of Table 3 are provided for convenience.

Table 3. Income statement (GAAP, $ millions)

|  | FY2024 | FY2025 | FY2026 |
|:---|---:|---:|---:|
| Subscription revenue | 294.7 | 399.8 | 523.5 |
| Professional services revenue | 24.0 | 30.5 | 36.0 |
| **Total revenue** | 318.7 | 430.3 | 559.5 |
| Cost of revenue | 92.4 | 118.3 | 148.3 |
| **Gross profit** | 226.3 | 312.0 | 411.2 |
| Sales and marketing | 141.8 | 182.9 | 229.4 |
| Research and development | 86.0 | 109.7 | 134.3 |
| General and administrative | 43.0 | 53.8 | 64.3 |
| **Operating income (loss)** | (44.5) | (34.4) | (16.8) |
| Interest income | 11.8 | 13.9 | 15.6 |
| Interest expense | 2.0 | 2.0 | 2.0 |
| Income taxes | 2.4 | 3.1 | 4.0 |
| **Net income (loss)** | (37.1) | (25.6) | (7.2) |
| Memo: stock-based compensation (included above) | 73.3 | 90.4 | 109.1 |
| Memo: SBC in sales and marketing | 24.4 | 30.1 | 36.4 |
| Memo: non-GAAP operating income (excludes SBC) | 28.8 | 56.0 | 92.3 |

Table 4. Balance sheet extract at 30 June ($ millions)

|  | FY2025 | FY2026 |
|:---|---:|---:|
| Cash and marketable securities | 372.0 | 489.8 |
| Accounts receivable | 86.1 | 114.7 |
| Prepaid and other current assets | 28.0 | 36.5 |
| Property and capitalised software, net | 61.0 | 64.3 |
| Goodwill and acquired intangibles | 48.0 | 48.0 |
| Other non-current assets | 30.0 | 30.0 |
| **Total assets** | **625.1** | **783.3** |
| Accounts payable and accrued liabilities | 62.0 | 79.0 |
| Deferred revenue | 192.2 | 247.5 |
| Convertible senior notes, carrying value | 171.0 | 172.1 |
| Other non-current liabilities | 25.0 | 25.0 |
| **Total liabilities** | **450.2** | **523.6** |
| Additional paid-in capital | 484.9 | 576.9 |
| Accumulated deficit | (310.0) | (317.2) |
| **Total stockholders' equity** | **174.9** | **259.7** |
| **Total liabilities and equity** | **625.1** | **783.3** |


Table 5. FY2026 cash flow statement extract ($ millions)

|  | FY2026 |
|:---|---:|
| Net income (loss) | (7.2) |
| Stock-based compensation | 109.1 |
| Depreciation and amortisation (incl. capitalised software) | 16.8 |
| Amortisation of debt issuance costs | 1.1 |
| Increase in accounts receivable | (28.6) |
| Increase in prepaid and other current assets | (8.5) |
| Increase in accounts payable and accruals | 17.0 |
| Increase in deferred revenue | 55.3 |
| **Cash flow from operations** | **155.0** |
| Purchases of property and capitalised software | (20.1) |
| **Free cash flow (company definition)** | **134.9** |
| Proceeds from option exercises | 7.4 |
| Taxes paid on net share settlement of RSUs | (24.5) |
| **Net change in cash and marketable securities** | **117.8** |

Table 6. Free cash flow and growth history ($ millions)

|  | FY2024 | FY2025 | FY2026 |
|:---|---:|---:|---:|
| Revenue | 318.7 | 430.3 | 559.5 |
| Free cash flow (company definition) | 47.8 | 90.4 | 134.9 |
| Free cash flow margin | 15.0% | 21.0% | 24.1% |
| Revenue growth | 38.4% | 35.0% | 30.0% |

Deferred revenue rose from $192.2 million to $247.5 million as annual-in-advance billing grew, which contributed $55.3 million to cash flow from operations. That inflow is larger than the entire improvement in FY2026 free cash flow over FY2025. Receivables absorbed $28.6 million. The "taxes paid on net share settlement" line is cash that Cirrus pays to tax authorities on behalf of employees when restricted stock units vest. The company withholds shares rather than selling them, so the cash leaves the company. It does not appear in free cash flow as the company defines it, because it is classified as a financing item.

Table 7 gives the capital structure and market data on which the committee's advisers have settled. The convertible notes carry a 0.5 percent coupon, mature in 2029, and convert into 1.902 million shares at $92.00. A change-of-control event gives holders a put at par, plus a make-whole premium that the company's counsel estimates at no more than $4 million at the offer price. For the exercises that follow, treat the notes as debt at face value of $175.0 million unless the value per share exceeds the conversion price.

Table 7. Capital structure and market data

| Item | Value |
|:---|:---|
| Basic common shares outstanding (millions) | 101.4 |
| Employee stock options outstanding (millions) | 8.4 |
| Weighted-average exercise price of options | $21.50 |
| Unvested restricted stock units (millions) | 6.2 |
| Convertible senior notes, face value | $175.0 million |
| Conversion price of notes | $92.00 (1.902 million shares) |
| Coupon on notes | 0.50% |
| Undisturbed share price (close, 30 October 2026) | $56.00 |
| Tessara indicative offer, cash | $66.50 per share |
| Implied premium to undisturbed price | 18.8% |
| Risk-free rate (10-year government) | 4.2% |
| Equity risk premium used by the board's advisers | 4.5% |
| Pre-tax cost of straight debt for a company of this profile | 6.2% |
| Statutory/cash tax rate on taxable income | 23% |
| Federal and state net operating losses (30 June 2026) | $260.0 million |

Management's plan appears in Tables 8 and 9. Dev Rao's team prepared the first five years in detail. The extension to fiscal 2036 comes from the team's long-range model (Exhibit C), which assumes that growth fades and that the company reaches the margin profile of today's most profitable mature software firms. "Non-GAAP operating margin" excludes SBC and nothing else. Capital expenditure is 3.5 percent of revenue and depreciation and amortization 3.0 percent. Because customers pay in advance, each dollar of incremental revenue releases about 15 cents of working-capital cash. Cirrus has $260.0 million of net operating losses that it can use against taxable income, and the cash tax rate on taxable income beyond the losses is 23 percent.

Table 8. Management plan, FY2027 to FY2031

|  | FY2027 | FY2028 | FY2029 | FY2030 | FY2031 |
|:---|---:|---:|---:|---:|---:|
| Revenue growth | 27.0% | 25.0% | 23.0% | 21.0% | 19.0% |
| Non-GAAP operating margin (excludes SBC) | 19.5% | 22.5% | 26.0% | 29.0% | 31.5% |
| SBC as % of revenue | 18.0% | 16.5% | 15.0% | 14.0% | 12.5% |
| Capital expenditure, % of revenue | 3.5% | 3.5% | 3.5% | 3.5% | 3.5% |
| Depreciation and amortisation, % of revenue | 3.0% | 3.0% | 3.0% | 3.0% | 3.0% |
| Deferred-revenue/working-capital inflow, % of incremental revenue | 15% | 15% | 15% | 15% | 15% |

Table 9. Management long-range extension, FY2032 to FY2036 (Exhibit C)

|  | FY2032 | FY2033 | FY2034 | FY2035 | FY2036 |
|:---|---:|---:|---:|---:|---:|
| Revenue growth | 17.0% | 15.0% | 13.0% | 11.5% | 10.0% |
| Non-GAAP operating margin | 34.0% | 36.0% | 38.0% | 39.5% | 41.0% |
| SBC as % of revenue | 11.5% | 10.5% | 10.0% | 9.5% | 9.0% |

Table 10 shows six public peers that Kessler Dunmore screened as the closest comparables. None is an exact match. Halcyon Cloud and Meridian Stack are the closest in product, while Bramble Analytics grows fastest but with very little cash flow, and Tollgate Software is a slower, more profitable incumbent. Figures are next-twelve-month (NTM) consensus-style estimates as of 30 October 2026, and enterprise value is market capitalization plus debt less cash, taking dilution into account. The "FCF margin" column is free cash flow before any deduction for SBC, the way each company reports it. Table 11 lists four recent transactions, and Table 12 gives the beta data for the cost-of-capital estimate.

Table 10. Public comparable companies (fictional, illustrative; all figures next-twelve-months unless stated)

| Company | Revenue growth | FCF margin (pre-SBC) | SBC / revenue | Rule of 40 | Rule of 40 less SBC | Net revenue retention | EV / NTM revenue |
|:---|---:|---:|---:|---:|---:|---:|---:|
| Halcyon Cloud | 33% | 23% | 21% | 56 | 35 | 118% | 11.2x |
| Quillon Systems | 24% | 27% | 14% | 51 | 37 | 114% | 9.6x |
| Meridian Stack | 29% | 18% | 22% | 47 | 25 | 110% | 9.1x |
| Bramble Analytics | 38% | 5% | 27% | 43 | 16 | 121% | 8.9x |
| Tollgate Software | 14% | 29% | 12% | 43 | 31 | 101% | 6.2x |
| Verdant Ops | 21% | 15% | 17% | 36 | 19 | 104% | 6.0x |
| Mean | 26.5% | 19.5% | 18.8% | 46.0 | 27.2 | 111.3% | 8.5x |
| Median | 26.5% | 20.5% | 19.0% | 45.0 | 28.0 | 112.0% | 9.0x |
| Cirrus Ledger (NTM, management plan) | 27% | 22% | 18% | 49 | 31 | 110% | n/a |

Table 11. Precedent software take-privates and acquisitions (fictional, illustrative)

| Transaction | Announced | EV / NTM revenue | Premium to undisturbed | Buyer type |
|:---|:---|---:|---:|---:|
| Aldermoor / Norwood Ledger | Eleven months ago | 8.1x | 31% | Strategic |
| Pinegate Capital / Heron Systems | Seven months ago | 9.8x | 38% | Sponsor |
| Corvane Group / Sable Cloud | Fourteen months ago | 8.6x | 24% | Strategic |
| Marlowe Partners / Linden Works | Nine months ago | 10.4x | 44% | Sponsor |
| Mean |  | 9.2x | 34.3% |  |
| Median |  | 9.2x | 34.5% |  |

Table 12. Peer equity betas (fictional, illustrative; two-year weekly returns against a broad index)

| Company | Levered beta | Debt / equity (market value) |
|:---|---:|---:|
| Halcyon Cloud | 1.20 | 3% |
| Quillon Systems | 1.05 | 8% |
| Meridian Stack | 1.25 | 2% |
| Bramble Analytics | 1.35 | 0% |
| Tollgate Software | 0.95 | 15% |
| Verdant Ops | 1.15 | 5% |

## Complications and Exhibits

The data in the previous section are clean. The following exhibits are not, and the committee expects the advisers to say how each should change their view or why it should not.

**Exhibit A: First-quarter flash.** The first quarter of fiscal 2027 closed on 30 September 2026. Preliminary figures, not yet audited or reviewed, show net new ARR of $28.7 million, against $30.5 million in the first quarter of FY2026, a decline of about 6 percent, while revenue grew 29 percent year on year. Management attributes the shortfall to two large deals that slipped into the second quarter and to a deliberate decision to stop discounting below a floor price in the small-customer segment. The sales organization has an interest in the first explanation and the finance team in the second. The committee has no way to verify either, and the full-year plan in Table 8 has not been revised.

**Exhibit B: Customer concentration.** Cirrus's largest customer, Ostrava Freight Holdings, represents 6.4 percent of ending ARR, about $37.7 million, and its contract renews on 31 March 2027. The next nine customers together represent 11.1 percent. Ostrava's procurement team told Cirrus's account director in September that it is "evaluating alternatives, including Tessara's module." The management plan assumes Ostrava renews at flat pricing. Tessara's letter does not mention Ostrava, but the coincidence has not gone unnoticed.

**Exhibit C: Long-range model.** The extension in Table 9 comes from a management model built for the board's strategy offsite in March 2026 and not updated since. It assumes that Cirrus enters adjacent segments (treasury and procurement), which would lift growth in the middle years, and that sales and marketing falls to 22 percent of revenue by fiscal 2036. The finance team describes it as "ambitious but internally consistent." No peer in Table 10 currently has a non-GAAP operating margin above 33 percent while still growing above 10 percent, although Tollgate Software, growing at 14 percent, is at 31 percent.

**Exhibit D: Non-recurring SBC.** Fiscal 2026 SBC of $109.1 million includes $14.2 million of accelerated vesting for a former chief revenue officer who left in January, and a one-time grant of $6.0 million to retain the product leadership team. The finance team argues that "run-rate SBC" is therefore $88.9 million, or 15.9 percent of revenue. Counter-evidence: SBC as a percentage of revenue has fallen in each of the past two years without these adjustments, and the plan already assumes that it continues to fall. A new grant cycle in February 2027 will be priced at the then-current stock price, which will be higher if the offer becomes public.

**Exhibit E: Billing terms.** In the second half of FY2026, Cirrus moved roughly 30 percent of its customer base from quarterly to annual billing in advance, offering a 3 percent discount for the change. The move pulled forward cash but did not change revenue recognition. The finance team estimates that it added about $17 million to deferred revenue and therefore to FY2026 free cash flow, and that the benefit is non-repeating. The discount reduces future subscription revenue by roughly $2.6 million per year.

**Exhibit F: Net operating losses.** The $260.0 million of losses in Table 7 is the book figure. Tax counsel notes that on a change of control, an annual limitation under the relevant tax provision would restrict use of the losses to a fraction of the equity value multiplied by a published rate. Tessara may therefore value the losses differently from the standalone company. For a standalone valuation, the losses are available without limitation, but tax counsel cautions that a large equity issuance could trigger the same limitation.

**Exhibit G: Alternative interest.** Redcliff Partners, a private equity sponsor, has told Kessler Dunmore informally that it would be prepared to discuss a transaction at "$62 to $64 per share, subject to diligence and financing," which the sponsor's partner described as a price that works if the company's non-GAAP operating margin reaches 30 percent within six years and the sponsor can finance the purchase with debt equal to six times next-twelve-month free cash flow. The sponsor has not produced a financing commitment, and the indication is not in writing.

**Exhibit H: Ambiguous retention data.** Cirrus defines net revenue retention on a trailing-twelve-month basis and includes price increases. About 2.4 percentage points of FY2026 NRR came from a list-price increase of 4 percent applied to about 60 percent of the base in January 2026. Management has not planned a second increase. The finance team also notes that the oldest "pre-FY2023" group contains 140 customers that Cirrus acquired through a small acquisition in fiscal 2022, and that these customers have been migrating to the main platform with temporary price protection that expires in 2027.

**Exhibit I: The peer data.** The peer multiples in Table 10 are as of 30 October 2026, but two of the six peers reported earnings after that date and moved by more than 8 percent. Bramble Analytics, in particular, has since announced a restructuring that would lift its FCF margin to 15 percent within a year, which, if true, would raise its rule of 40 from 43 to 53 without any change in its multiple. The committee has not decided whether to update the table.

## Assignment Questions

Answer all ten questions. Where a question calls for a judgment, state your assumptions and say which exhibits you used. Unless told otherwise, use the data in Tables 1 through 12 as given, value the company as of 30 June 2026 with mid-year discounting for the forecast period, and ignore the passage of time between the balance sheet date and the offer date. State all dollar amounts in millions except per-share values.

1. **Cohort analysis.** Using Table 1, compute ending ARR, net new ARR, new-customer ARR, and net revenue retention for each of FY2023 to FY2026. Compute NRR for the FY2023 to FY2026 cohorts at each age, and for the pooled group. What does the pattern of retention across cohorts and ages tell you about the durability of the growth rate? Adjust FY2026 NRR for the January price increase described in Exhibit H.

2. **Unit economics.** Using Tables 2 and 3, estimate for FY2024, FY2025, and FY2026 the fully loaded cash CAC per dollar of new-customer ARR (excluding SBC and allocating 62 percent of sales and marketing to new customers), the payback period in months at a 78 percent subscription gross margin, and the sales efficiency ("magic number"). Compute lifetime value per dollar of landed ARR over ten years at a 10 percent discount rate, once using the cohort NRR curves and once using gross retention only, and compare each to CAC. Which view is more defensible?

3. **Rule of 40.** Compute the rule of 40 for FY2024 to FY2026 using revenue growth plus (a) free cash flow margin, (b) non-GAAP operating margin, (c) GAAP operating margin, and (d) free cash flow margin less SBC as a percentage of revenue. Rank Cirrus against the peers in Table 10 on definitions (a) and (d). Explain which definition best explains the peers' multiples and why.

4. **Stock-based compensation.** Quantify the economic cost of SBC in FY2026. Compute the annual increase in basic shares, the market value of shares issued at the undisturbed price, and free cash flow after the cost of neutralizing dilution. Compute free cash flow after the RSU tax withholding. Evaluate the finance team's "run-rate SBC" adjustment in Exhibit D, and the effect of Exhibit E on the quality of FY2026 free cash flow.

5. **Cost of capital.** Unlever the peer betas in Table 12, compute the average, relever at Cirrus's market capital structure at the undisturbed price (use the treasury stock method for dilution), and compute the cost of equity and the weighted average cost of capital. State the WACC you adopt, rounded to two decimals in percent.

6. **Forecast.** Extend Table 8 into a base case that differs from management's plan. Your base case must be reasoned from the cohort data (Question 1), the peer data (Table 10), and the exhibits. Present revenue, non-GAAP operating margin, SBC, GAAP operating income, cash taxes with the net operating losses, and free cash flow to the firm for FY2027 to FY2036, with SBC treated as an operating expense.

7. **Discounted cash flow.** Compute the enterprise value of your base case with a Gordon growth terminal value, using mid-year discounting for the explicit forecast. Bridge to equity value and to value per diluted share, applying the treasury stock method to the options, counting the RSUs in full, and treating the convertible notes correctly. Repeat for management's plan. Weight a downside, base, and management case 20, 55, and 25 percent and compute a probability-weighted value.

8. **Terminal value and SBC treatment.** State the share of enterprise value in the terminal value and the implied terminal multiples. Cross-check with an exit multiple. Construct sensitivity tables for WACC against terminal growth and for terminal margin against terminal growth. Recompute the base case with SBC added back instead of expensed and with no adjustment for dilution, and explain the difference.

9. **Multiples.** Apply the peer multiples in Table 10 in four ways: mean EV/NTM revenue, regression on growth, regression on the rule of 40 (free cash flow definition), and regression on the rule of 40 less SBC. Compute the regression fit for each. Apply the precedent multiples in Table 11. Build a football field of value per share and reconcile the market approach with the DCF.

10. **Recommendation.** Using a reverse DCF, determine what the undisturbed price and the offer each imply about the plan. Assess the offer against all your valuation evidence, the premium evidence in Table 11, and Exhibits A, B, and G. Recommend to the special committee whether to accept, reject, or counter, with a price and a walk-away level, and draft a board-style memorandum.

## Teaching Note and Full Solutions

### Learning Objectives

After working through this case, students should be able to:

1. Build and interpret a cohort table, separating growth from new customers and growth from the installed base, and detect deterioration that blended metrics hide.
2. Compute CAC, payback, magic number, and lifetime value, and explain why lifetime value built on net retention above 100 percent needs to be treated with suspicion.
3. Compute the rule of 40 on several definitions and explain why the definition that excludes SBC is the weakest guide to value.
4. Quantify the economic cost of stock-based compensation through dilution, cash withholding, and the difference between added-back and expensed discounted cash flow, and avoid double counting between cash flows and share counts.
5. Estimate a cost of capital from unlevered peer betas, handling a small convertible and the treasury stock method correctly.
6. Build a ten-year free cash flow to the firm forecast for a loss-making company with net operating losses and deferred-revenue working capital.
7. Value equity per diluted share when dilution depends on the value itself, and when a convertible is out of the money.
8. Explain what share of value sits in the terminal value, test it against an exit multiple, and run meaningful sensitivities.
9. Apply regression-based multiples with honest attention to sample size, and reconcile intrinsic and relative value in a football field.
10. Use a reverse DCF to translate a price into the plan it implies, and use that to frame a recommendation on a takeover offer.

### Suggested Class Plan (90 minutes)

| Minutes | Activity | Notes |
|:---|:---|:---|
| 0-10 | Opening: cold call on the offer. "Would you sell at $66.50?" Record the vote | Revisit the vote at the end; most classes move |
| 10-25 | Business quality: Questions 1 to 3 on the board. Cohort table, unit economics, rule of 40 definitions | Draw the cohort triangle; push on first-year NRR falling from 120 to 113 |
| 25-40 | Stock-based compensation: Question 4, then the add-back versus expense comparison from Question 8 | The single largest swing in value; ask students to defend either side |
| 40-60 | Cost of capital and DCF mechanics: Questions 5 to 7. One group presents base case, one presents management case | Insist on the equity bridge with the treasury stock method |
| 60-72 | Terminal value, sensitivities, multiples: Questions 8 and 9 and the football field | Ask what the regression with six points can and cannot tell us |
| 72-85 | Recommendation: Question 10. Reverse DCF; counter-offer debate with a student playing Anselm Okafor | Test the walk-away price |
| 85-90 | Close: revisit the opening vote | Discuss what moved |

For a 75-minute session, assign Questions 1 to 4 as pre-work and begin at the 40-minute mark. For a two-session version, devote the second session to Questions 5 to 10 with a spreadsheet built live.

### Solutions

All solutions were recomputed in Python from the data tables. Tables show rounded values; intermediate calculations used full precision, so a student working with rounded intermediate values may differ by a few tenths of a million or a few cents per share.

#### Solution 1: Cohort analysis

Ending ARR is the column total of Table 1: $175.0 million (FY2022), $247.5 million (FY2023), $341.8 million (FY2024), $457.7 million (FY2025), and $589.3 million (FY2026). Net new ARR is the annual change, and new-customer ARR is the cohort's first-year figure. Net revenue retention in a year equals ARR at year-end from customers who existed at the start of the year, divided by opening ARR, which is (ending ARR minus new-customer ARR) divided by opening ARR.

| | FY2023 | FY2024 | FY2025 | FY2026 |
|:---|---:|---:|---:|---:|
| Opening ARR | 175.0 | 247.5 | 341.8 | 457.7 |
| New-customer ARR | 55.0 | 66.0 | 78.0 | 88.0 |
| ARR from existing customers at year-end | 192.5 | 275.8 | 379.7 | 501.3 |
| Net expansion from base (existing less opening) | 17.5 | 28.3 | 37.9 | 43.6 |
| Ending ARR | 247.5 | 341.8 | 457.7 | 589.3 |
| Net new ARR | 72.5 | 94.3 | 115.9 | 131.6 |
| ARR growth | 41.4% | 38.1% | 33.9% | 28.8% |
| New-customer share of net new ARR | 75.9% | 70.0% | 67.3% | 66.9% |
| **Net revenue retention** | **110.0%** | **111.4%** | **111.1%** | **109.5%** |

Worked example for FY2026: existing-customer ARR is 589.3 minus 88.0, or 501.3; dividing by 457.7 gives 1.0953, so NRR is 109.5 percent.

Retention by cohort and age, computed as each year's ARR over the prior year's ARR for the same cohort:

| Cohort | First renewal (age 1) | Age 2 | Age 3 | Age 4 |
|:---|---:|---:|---:|---:|
| Pre-FY2023 (pooled) | 110.0% (FY23) | 109.0% (FY24) | 108.0% (FY25) | 107.0% (FY26) |
| FY2023 | 120.0% | 115.0% | 110.9% | |
| FY2024 | 117.0% | 112.0% | | |
| FY2025 | 113.0% | | | |

Three patterns emerge. First, every cohort's retention declines with age, as expected, so blended NRR depends on the age mix of the base. The base is aging, which pushes blended NRR down mechanically. Second, and more worrying, each new cohort retains less at the same age than its predecessor: age-one NRR fell from 120 percent to 117 percent to 113 percent. Age-two NRR fell from 115 percent to 112 percent. That is a genuine deterioration in the quality of customers or in the success of expansion selling, and it is the real story behind the slowing growth. Third, gross dollar retention fell from 93 to 90 percent, so churn is part of the story, and gross expansion (NRR minus GRR) in FY2026 was 19.5 points.

The January price increase contributed about 2.4 points of FY2026 NRR (Exhibit H), so the like-for-like figure is 109.5 minus 2.4, or 107.1 percent. That is a 4.0-point fall from 111.1 percent in FY2025, if FY2025 had no comparable increase, and 107.1 percent is the better base for forecasting because management has not planned a second increase.

The implication for the plan is large. Management's FY2027 revenue of $710.6 million, with about $40.0 million of services, requires subscription revenue of $670.6 million and therefore ending ARR of 2 times 670.6 minus 589.3, or $751.9 million, which is 27.6 percent growth and net new ARR of $162.6 million, 24 percent more than the $131.6 million added in FY2026. If NRR holds at 107.1 percent, the installed base contributes $631.1 million, and new-customer ARR must reach $120.8 million, 37 percent above FY2026's $88.0 million. If NRR is 109.5 percent, new-customer ARR must still rise 21 percent, to $106.6 million. Either way, the plan requires a reacceleration that the cohort data do not support, and that is consistent with Exhibit A's soft first quarter.

#### Solution 2: Unit economics

Cash sales and marketing spend is GAAP sales and marketing less the SBC inside it (one-third of total SBC, per the finance team). New-customer spend is 62 percent of that. CAC per dollar of new-customer ARR is new-customer spend divided by new-customer ARR. Payback in months is CAC per dollar divided by the gross margin of 78 percent, times 12. The magic number is net new ARR divided by cash sales and marketing spend.

| | FY2024 | FY2025 | FY2026 |
|:---|---:|---:|---:|
| GAAP sales and marketing | 141.8 | 182.9 | 229.4 |
| Less SBC in sales and marketing | 24.4 | 30.1 | 36.4 |
| Cash sales and marketing | 117.4 | 152.8 | 193.0 |
| New-customer spend (62%) | 72.8 | 94.7 | 119.7 |
| New-customer ARR | 66.0 | 78.0 | 88.0 |
| New customers | 420 | 455 | 500 |
| **CAC per $1 of new ARR** | **1.10** | **1.21** | **1.36** |
| CAC per new customer ($000) | 173.0 | 208.0 | 239.0 |
| **Payback (months)** | **17.0** | **18.7** | **20.9** |
| Net new ARR | 94.3 | 115.9 | 131.6 |
| **Magic number (cash S&M)** | **0.80** | **0.76** | **0.68** |
| Magic number (GAAP S&M) | 0.67 | 0.63 | 0.57 |

Worked example for FY2026: 229.4 minus 36.4 is 193.0; 62 percent of 193.0 is 119.7; 119.7 divided by 88.0 is 1.36; 1.36 divided by 0.78 is 1.744 years, or 20.9 months. CAC per dollar has risen 23 percent in two years while landing ARR per customer rose only 12 percent ($157,100 to $176,000). Acquisition is getting more expensive faster than deals are getting larger. The magic number has fallen from 0.80 to 0.68, below the level of about 0.75 that practitioners treat as a threshold for adding sales capacity. The trend in all three measures points the same way as the cohort data.

Lifetime value per dollar of landed ARR is the present value of gross profit over ten years, discounting mid-year at 10 percent, with ARR in year t equal to prior-year ARR times that year's retention. For cohort curves, the observed NRR path is used and then 108 percent in later years. The gross-only view uses 90 percent retention every year.

| Basis | LTV per $1 landed ARR | LTV / CAC at FY2026 CAC of $1.36 |
|:---|---:|---:|
| FY2023 cohort curve (120%, 115%, 111%, then 108%) | 8.08 | 5.9x |
| FY2024 cohort curve (117%, 112%, then 108%) | 7.58 | 5.6x |
| FY2025 cohort curve (113%, then 108%) | 7.14 | 5.3x |
| FY2026 cohort (assume 110%, then 108%) | 6.97 | 5.1x |
| Gross retention only (90% every year) | 3.54 | 2.6x |
| Cohort curve net of expansion selling cost (FY2026) | 5.64 | 4.1x |

The cohort-curve LTV counts the revenue from upsell but not the cost of the selling effort that produced it. The cost of expansion can be estimated: 38 percent of cash sales and marketing (the share not allocated to new customers), or $73.3 million, produced gross expansion of $89.4 million in FY2026 (net expansion of $43.6 million plus churn of 10 percent of opening ARR, $45.8 million), or $0.82 per dollar of expansion ARR. Deducting the discounted expansion cost from the FY2026 cohort curve gives net LTV of $5.64 per dollar, or 4.1 times CAC. The gross-only measure of 2.6 times is a floor, since it assumes no expansion at all, which contradicts the data.

Which is more defensible? The loaded cohort view of roughly 4 times, with a floor of 2.6 times, is a good business by the usual 3-times rule of thumb. The conclusion that is not defensible is the 5 to 6 times headline that comes from applying the old cohorts' retention to today's much higher CAC. The correct statement is that Cirrus's unit economics are still healthy but are trending down on three independent measures.

#### Solution 3: Rule of 40

Revenue growth is 38.4 percent (FY2024), 35.0 percent (FY2025), and 30.0 percent (FY2026). FY2023 revenue was $230.3 million. Margins are on revenue.

| | FY2024 | FY2025 | FY2026 |
|:---|---:|---:|---:|
| Revenue growth | 38.4% | 35.0% | 30.0% |
| (a) FCF margin | 15.0% | 21.0% | 24.1% |
| **Rule of 40, FCF** | **53.4** | **56.0** | **54.1** |
| (b) Non-GAAP operating margin | 9.0% | 13.0% | 16.5% |
| Rule of 40, non-GAAP operating | 47.4 | 48.0 | 46.5 |
| (c) GAAP operating margin | (14.0%) | (8.0%) | (3.0%) |
| Rule of 40, GAAP operating | 24.4 | 27.0 | 27.0 |
| SBC / revenue | 23.0% | 21.0% | 19.5% |
| **(d) Rule of 40, FCF less SBC** | **30.4** | **35.0** | **34.6** |

On the headline definition, Cirrus clears the bar easily, at 54.1 in FY2026, and the score has been flat for three years because falling growth has been offset by rising cash flow margin. On the GAAP operating definition it is at 27.0 and has not improved since FY2025. On the SBC-adjusted cash definition it is at 34.6, below 40. The same company is a star or a laggard depending on the definition, which is the lesson. Note also that the flat headline score hides the composition: the company is trading growth for margin at roughly one for one, which would be fine if margin came from scale, but part of the margin came from deferred revenue (Exhibit E) that will not repeat.

Peer ranking, using NTM figures (Cirrus 27 percent growth, 22 percent FCF margin, 18 percent SBC):

| Rank | Definition (a): growth + FCF margin | Score | Definition (d): less SBC | Score |
|:---|:---|---:|:---|---:|
| 1 | Halcyon Cloud | 56 | Quillon Systems | 37 |
| 2 | Quillon Systems | 51 | Halcyon Cloud | 35 |
| 3 | **Cirrus Ledger** | **49** | **Cirrus Ledger (tied)** | **31** |
| 3= | | | Tollgate Software | 31 |
| 4 | Meridian Stack | 47 | Meridian Stack | 25 |
| 5 | Bramble Analytics, Tollgate Software | 43 | Verdant Ops | 19 |
| 6 | Verdant Ops | 36 | Bramble Analytics | 16 |

Which definition explains multiples? A regression of EV/NTM revenue on each measure (Solution 9) gives an R-squared of 0.81 for definition (a) and only 0.19 for definition (d), and 0.52 for growth alone. In this small sample the market's multiples track the headline rule of 40 and ignore SBC. The market is, in effect, paying for SBC-heavy companies as if SBC were free. That is an observation about how peers are priced, not a statement that SBC is costless. A valuation anchored only on peer multiples therefore inherits the market's blind spot, which is the reason the DCF in Questions 6 to 8 treats SBC as an expense.

#### Solution 4: Stock-based compensation

Basic shares rose from 98.2 million to 101.4 million in FY2026, an increase of 3.2 million shares, or 3.3 percent (FY2025 saw 3.8 percent growth from 94.6 million). At the undisturbed price of $56.00, the shares issued are worth 3.2 times 56.00, or $179.2 million, which is 164 percent of the $109.1 million SBC expense. The difference arises because grants were priced at lower stock prices on their grant dates; the expense records the grant-date value, while the dilution is measured at today's price.

| Measure | FY2026 | % of revenue |
|:---|---:|---:|
| Free cash flow (company definition) | 134.9 | 24.1% |
| Less taxes paid on net share settlement | (24.5) | |
| **FCF after RSU tax withholding** | **110.4** | **19.7%** |
| FCF less SBC expense | 25.8 | 4.6% |
| FCF less cost of buying back 3.2 million shares at $56.00 | (44.3) | (7.9%) |

Free cash flow after the cash cost of holding the share count flat is negative. Cirrus's cash generation is therefore financed by its employees and shareholders, not by customers alone: if the company bought back shares to prevent dilution, it would consume more than its entire free cash flow. This does not make the business uneconomic, because the shares issued are claims on a growing business, but it shows that "$134.9 million of free cash flow" overstates what accrues to a continuing shareholder.

Exhibit D, run-rate SBC. Removing $14.2 million of accelerated vesting and the $6.0 million retention grant gives $88.9 million, or 15.9 percent of revenue. The adjustment is defensible for the accelerated vesting, because it will not recur, but weaker for the retention grant, because retention grants are a normal cost of running a software business. Even accepting the whole adjustment, FCF less SBC rises only from $25.8 million to $46.0 million (8.2 percent of revenue), and the plan already assumes SBC falls to 18.0 percent of revenue in FY2027. The correct use of the adjustment is to avoid extrapolating FY2026's level, not to exclude the cost.

Exhibit E, billing terms. About $17 million of FY2026 free cash flow came from the one-time move to annual billing. Free cash flow on a repeatable basis is $117.9 million (21.1 percent of revenue), the headline rule of 40 falls to 51.1, and the SBC-adjusted rule of 40 to 31.6. The 3 percent discount also removes about $2.6 million a year of subscription revenue permanently. This one-time benefit is not wrong, since the cash is real, but it should not be capitalized at a multiple. It is a pull-forward of future cash.

#### Solution 5: Cost of capital

Unlevered beta equals levered beta divided by (1 + (1 minus 23%) times D/E). For Halcyon Cloud, 1.20 divided by (1 + 0.77 times 0.03) is 1.173. The six unlevered betas are 1.173, 0.989, 1.231, 1.350, 0.852, and 1.107, with an average of 1.117 (median 1.140).

Cirrus's diluted share count at $56.00 is 101.4 basic plus 6.2 RSUs plus 8.4 times (1 minus 21.50/56.00), or 5.174 million net option shares, a total of 112.774 million. Market capitalization is $6,315.4 million. Debt of $175.0 million gives D/E of 2.77 percent. Relevered beta is 1.117 times (1 + 0.77 times 0.0277), or 1.141. The cost of equity is 4.2% + 1.141 times 4.5%, or 9.33 percent. The after-tax cost of debt is 6.2% times 0.77, or 4.77 percent, and the weight of debt is 175.0 divided by (6,315.4 + 175.0), or 2.70 percent. WACC is 0.973 times 9.334% + 0.027 times 4.774%, which is 9.21 percent. The coupon of 0.5 percent is irrelevant to the cost of debt, since the note's low coupon is paid for by the conversion option. Using the coupon would understate WACC by roughly 0.1 point. Because the market price is itself an input, there is mild circularity, which is immaterial here. **Adopt 9.21 percent.**

#### Solution 6: Base-case forecast

The base case adjusts management's plan in four ways, each tied to evidence. Growth starts at 26.0 percent rather than 27.0 because the cohort data (Solution 1) show that FY2027 requires 21 to 37 percent more new-customer ARR and because the first quarter was soft, and it fades more quickly to 9.0 percent in FY2036 rather than 10.0 percent. Non-GAAP margin reaches 37.0 percent in FY2036, not 41.0 percent, because no peer combines more than 33 percent with growth above 10 percent (Exhibit C), and the sales-and-marketing efficiency decline argues against the plan's decline to 22 percent of revenue. SBC falls to 9.5 percent, not 9.0 percent. Capital expenditure, depreciation, working capital, and the tax assumptions are management's. The downside case, used in Solution 7, models loss of Ostrava, continued deterioration in new-customer cohorts, and growth fading to 6 percent.

Each year: revenue equals prior revenue times (1 + growth); GAAP EBIT equals revenue times (non-GAAP margin minus SBC percentage); cash tax is 23 percent of EBIT after using the NOL; FCFF equals EBIT minus tax, plus depreciation (3.0 percent), minus capex (3.5 percent), plus 15 percent of incremental revenue. For FY2027: revenue is 559.5 times 1.26, or 705.0; EBIT is 705.0 times (19.0% minus 18.0%), or 7.0; no tax because the NOL absorbs it (NOL falls from 260.0 to 253.0); depreciation is 21.2, capex is 24.7, and the working-capital inflow is 0.15 times (705.0 minus 559.5), or 21.8. FCFF is 7.0 + 21.2 - 24.7 + 21.8 = 25.3.

Table S6. Base case free cash flow to the firm ($ millions)

| Year | Growth | Revenue | Non-GAAP margin | SBC % | GAAP EBIT | Cash tax | FCFF | Discount factor | PV of FCFF |
|:---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| FY2027 | 26.0% | 705.0 | 19.0% | 18.0% | 7.0 | 0.0 | 25.3 | 1.0450 | 24.3 |
| FY2028 | 23.5% | 870.6 | 21.5% | 16.5% | 43.5 | 0.0 | 64.0 | 1.1413 | 56.1 |
| FY2029 | 21.0% | 1,053.5 | 24.5% | 15.0% | 100.1 | 0.0 | 122.2 | 1.2464 | 98.1 |
| FY2030 | 19.0% | 1,253.6 | 27.0% | 14.0% | 163.0 | 12.3 | 174.4 | 1.3612 | 128.1 |
| FY2031 | 17.0% | 1,466.7 | 29.5% | 13.0% | 242.0 | 55.7 | 211.0 | 1.4866 | 141.9 |
| FY2032 | 15.0% | 1,686.8 | 31.5% | 12.0% | 328.9 | 75.7 | 277.8 | 1.6235 | 171.1 |
| FY2033 | 13.0% | 1,906.0 | 33.0% | 11.0% | 419.3 | 96.4 | 346.2 | 1.7730 | 195.3 |
| FY2034 | 11.5% | 2,125.2 | 34.5% | 10.5% | 510.1 | 117.3 | 415.0 | 1.9363 | 214.3 |
| FY2035 | 10.0% | 2,337.8 | 36.0% | 10.0% | 607.8 | 139.8 | 488.2 | 2.1146 | 230.9 |
| FY2036 | 9.0% | 2,548.2 | 37.0% | 9.5% | 700.7 | 161.2 | 558.4 | 2.3094 | 241.8 |
The NOL is exhausted in FY2030 (cash tax of 12.3 against EBIT of 163.0). GAAP EBIT margin rises from 1.0 percent in FY2027 to 27.5 percent in FY2036. FCFF as a percentage of revenue rises from 3.6 percent to 21.9 percent. Management's case (Table S7) is built the same way with its own inputs and reaches revenue of $2,933.5 million and FCFF of $748.1 million in FY2036, compared with $2,548.2 million and $558.4 million in the base case.

Table S7. Management case free cash flow to the firm ($ millions)

| Year | Growth | Revenue | Non-GAAP margin | SBC % | GAAP EBIT | Cash tax | FCFF | Discount factor | PV of FCFF |
|:---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| FY2027 | 27.0% | 710.6 | 19.5% | 18.0% | 10.7 | 0.0 | 29.8 | 1.0450 | 28.5 |
| FY2028 | 25.0% | 888.2 | 22.5% | 16.5% | 53.3 | 0.0 | 75.5 | 1.1413 | 66.2 |
| FY2029 | 23.0% | 1,092.5 | 26.0% | 15.0% | 120.2 | 0.0 | 145.4 | 1.2464 | 116.6 |
| FY2030 | 21.0% | 1,321.9 | 29.0% | 14.0% | 198.3 | 28.2 | 197.9 | 1.3612 | 145.4 |
| FY2031 | 19.0% | 1,573.1 | 31.5% | 12.5% | 298.9 | 68.7 | 260.0 | 1.4866 | 174.9 |
| FY2032 | 17.0% | 1,840.5 | 34.0% | 11.5% | 414.1 | 95.2 | 349.8 | 1.6235 | 215.5 |
| FY2033 | 15.0% | 2,116.6 | 36.0% | 10.5% | 539.7 | 124.1 | 446.4 | 1.7730 | 251.8 |
| FY2034 | 13.0% | 2,391.7 | 38.0% | 10.0% | 669.7 | 154.0 | 545.0 | 1.9363 | 281.5 |
| FY2035 | 11.5% | 2,666.8 | 39.5% | 9.5% | 800.0 | 184.0 | 644.0 | 2.1146 | 304.5 |
| FY2036 | 10.0% | 2,933.5 | 41.0% | 9.0% | 938.7 | 215.9 | 748.1 | 2.3094 | 324.0 |
#### Solution 7: Discounted cash flow

Flows arrive mid-year, so the discount factor for FY2027 is 1.0921 raised to the power 0.5, which is 1.0450, and for FY2036 is 1.0921 raised to the power 9.5, which is 2.3094. The terminal value uses the Gordon formula on the FY2037 cash flow, computed as follows for the base case. FY2037 revenue is 2,548.2 times 1.035, or 2,637.3. EBIT at the FY2036 margin of 27.5 percent is 725.3, and NOPAT at a 23 percent tax rate is 558.5. Depreciation is 79.1, capex is set at 1.10 times depreciation (87.0), because a growing firm must invest slightly more than it depreciates, and working-capital inflow is 0.15 times 89.1, or 13.4. Terminal FCFF is 558.5 + 79.1 - 87.0 + 13.4 = 563.9. Terminal value is 563.9 divided by (9.21% minus 3.5%), which is 9,876.1. Because the Gordon formula values flows one period before the first flow, and the first terminal flow (FY2037) arrives at time 10.5, the terminal value sits at time 9.5 and is discounted by 2.3094, giving a present value of 4,276.5. The sum of present values of explicit flows is 1,501.9, so the enterprise value is 5,778.4.

The bridge to equity adds cash of 489.8 and subtracts the notes at face value of 175.0 (the notes are out of the money since the value per share is below $92.00): equity value is 5,778.4 + 489.8 - 175.0 = 6,093.2. Per-share value requires iteration because the option dilution depends on the price. At $54.08 the net option shares are 8.4 times (1 minus 21.50/54.08), or 5.061 million. Diluted shares are 101.4 + 6.2 + 5.061 = 112.661 million, and 6,093.2 divided by 112.661 is $54.08, which is the fixed point.

Table S9. Scenario valuation summary ($ millions except per share; shares in millions)

| Case | Weight | FY2036 revenue | PV of FY27-36 FCFF | PV of terminal value | Enterprise value | Equity value | Diluted shares | Value per share |
|:---|---:|---:|---:|---:|---:|---:|---:|---:|
| Downside | 20% | 1,706.4 | 684.3 | 1,832.5 | 2,516.8 | 2,831.6 | 109.05 | $25.97 |
| Base | 55% | 2,548.2 | 1,501.9 | 4,276.5 | 5,778.4 | 6,093.2 | 112.66 | $54.08 |
| Management | 25% | 2,933.5 | 1,908.7 | 5,721.0 | 7,629.7 | 7,944.5 | 113.42 | $70.04 |
The probability-weighted value is 0.20 times $25.97 plus 0.55 times $54.08 plus 0.25 times $70.04, or **$52.45 per share**. The management case yields $70.04, which is 5.3 percent above the offer, and the base case is 18.7 percent below it. Note the asymmetry: the downside is $28 below base but the management upside is only $16 above it, so the probability-weighted value sits below the base.

#### Solution 8: Terminal value and SBC treatment

In the base case, terminal value is 74.0 percent of enterprise value (4,276.5 of 5,778.4); in the management case 75.0 percent, and in the downside 72.8 percent. The Gordon terminal value of 9,876.1 is 3.88 times FY2036 revenue (4.05 times when restated to the end of FY2036) and 17.5 times FY2037 FCFF, with a terminal FCFF margin of 21.4 percent. These multiples are well below the current 8.4 times NTM revenue because the business is assumed to be mature by then, with growth of 3.5 percent. The exit-multiple cross-check discounts a multiple of FY2036 revenue by ten full years:

Table S12. Exit-multiple cross-check, base case (multiple of FY2036 revenue, discounted ten years)

| Exit EV / revenue | PV of terminal value | Enterprise value | Value per share | Terminal value share of EV |
|:---|---:|---:|---:|---:|
| 3.0x | 3,167.5 | 4,669.4 | $44.52 | 67.8% |
| 4.0x | 4,223.4 | 5,725.3 | $53.63 | 73.8% |
| 5.0x | 5,279.2 | 6,781.1 | $62.73 | 77.9% |
| 6.0x | 6,335.1 | 7,837.0 | $71.83 | 80.8% |
An exit multiple of 4.0 times gives $53.63, nearly identical to the Gordon result of $54.08 and implies terminal growth of 3.4 percent. A 5.0 times exit multiple would require 4.5 percent perpetual growth, above any plausible long-run nominal growth rate for the economy, so the market-style multiples of 5 to 6 times revenue embed assumptions about permanent growth that the Gordon model makes explicit.

Table S10. Base-case value per share: WACC (rows) against terminal growth (columns)

| WACC | 2.5% | 3.0% | 3.5% | 4.0% | 4.5% |
|:---|---:|---:|---:|---:|---:|
| 8.25% | $57.13 | $61.22 | $66.16 | $72.27 | $80.00 |
| 8.75% | $52.06 | $55.37 | $59.31 | $64.07 | $69.96 |
| 9.21% | $48.08 | $50.84 | $54.08 | $57.95 | $62.64 |
| 9.75% | $44.08 | $46.34 | $48.96 | $52.04 | $55.70 |
| 10.25% | $40.89 | $42.79 | $44.97 | $47.50 | $50.47 |
Table S11. Base-case value per share: terminal non-GAAP margin shift (rows) against terminal growth (columns) at WACC 9.21%

| Margin shift | 2.5% | 3.0% | 3.5% | 4.0% | 4.5% |
|:---|---:|---:|---:|---:|---:|
| -6 pts | $41.37 | $43.55 | $46.12 | $49.18 | $52.89 |
| -3 pts | $44.73 | $47.20 | $50.10 | $53.56 | $57.76 |
| +0 pts | $48.08 | $50.84 | $54.08 | $57.95 | $62.64 |
| +3 pts | $51.44 | $54.49 | $58.07 | $62.34 | $67.51 |
| +6 pts | $54.79 | $58.13 | $62.05 | $66.72 | $72.39 |
Each 50 basis points of WACC moves value by about $5 to $6 per share, and each 50 basis points of terminal growth by about $3.5 to $4. A three-point change in terminal margin moves value by about $4. Only the combination of a WACC of about 8.25 percent with terminal growth of 3.5 percent or more, or a 4.5 percent terminal growth rate with a 8.75 percent WACC, brings the base case to the offer.

Adding back SBC. If SBC is added back to free cash flow in every year and the terminal value, and the share count is not adjusted for future issuance:

Table S5. Effect of treating SBC as an expense versus adding it back ($ millions except per share)

| Case | EV, SBC expensed | Per share | EV, SBC added back | Per share | PV of SBC | PV of SBC as % of added-back EV |
|:---|---:|---:|---:|---:|---:|---:|
| Base | 5,778.4 | $54.08 | 8,883.3 | $80.85 | 3,104.9 | 35.0% |
| Management | 7,629.7 | $70.04 | 10,965.8 | $98.69 | 3,336.1 | 30.4% |
The base case jumps from $54.08 to $80.85 per share, an increase of $26.77 or 49.5 percent, and in the management case from $70.04 to $98.69. The present value of the SBC stream is $3,104.9 million in the base case: $1,204.8 million from the explicit period and $1,900.0 million from the terminal value. This is 35 percent of the added-back enterprise value. The add-back is wrong unless the share count rises to reflect the shares that will be issued. Employees will receive shares worth this much; those shares are a claim on the same cash flows. If they are neither deducted as a cost nor counted as future dilution, the value is overstated by exactly this amount. The expense approach is correct and self-contained, while the add-back approach requires a forecast of future share issuance and its price. Note that the offer of $66.50 sits between the expensed values and the added-back values, so a buyer who ignores SBC could justify more than $66.50, and the committee should know that.

#### Solution 9: Multiples

NTM revenue is $710.6 million (management plan; using the base case's $705.0 million changes values by under 1 percent). Regression of EV/NTM revenue on each measure across the six peers:

| Method | Fit | R-squared | Cirrus input | Multiple | EV | Per share |
|:---|:---|---:|---:|---:|---:|---:|
| Mean multiple | n/a | n/a | n/a | 8.50x | 6,039.8 | $56.34 |
| Median multiple | n/a | n/a | n/a | 9.00x | 6,395.1 | $59.40 |
| Regression on growth | 4.00 + 0.170 x growth | 0.52 | 27 | 8.58x | 6,100.1 | $56.86 |
| **Regression on Rule of 40 (FCF)** | -3.53 + 0.262 x score | 0.81 | 49 | 9.28x | 6,597.2 | $61.14 |
| Regression on Rule of 40 less SBC | 5.72 + 0.103 x score | 0.19 | 31 | 8.89x | 6,319.0 | $58.74 |
| Growth-adjusted (mean EV/revenue per point of growth, 0.336) | n/a | n/a | 27 | 9.07x | 6,446.1 | $59.84 |
| Precedent mean | n/a | n/a | n/a | 9.23x | 6,555.0 | $60.78 |
| Precedent low to high | n/a | n/a | n/a | 8.1x to 10.4x | 5,755.6 to 7,389.9 | $53.89 to $67.98 |

Equity per share from EV follows the same bridge as Solution 7 (plus cash, less $175.0 million of notes, with iterated treasury-method dilution). With six data points, the regression's apparent precision is deceptive: the standard error on a slope estimated from six observations is large, and a single outlier (Bramble Analytics) moves the R-squared of the SBC-adjusted measure materially. The regressions are best read as saying that peer multiples cluster around 8.5 to 9.3 times for a company with Cirrus's profile. The premium evidence conflicts with the multiple evidence. Applying the mean take-over premium of 34.3 percent to $56.00 gives $75.18, while the mean precedent multiple gives $60.78. The two reconcile once it is recognized that Cirrus already trades at 8.4 times NTM revenue, inside the precedents' range of 8.1 to 10.4 times, so the "premium" the market already pays is high. Premium evidence should therefore be given less weight than multiple evidence here.

Football field (value per share):

| Method | Low | High | Midpoint or point |
|:---|---:|---:|---:|
| DCF, SBC expensed: downside to management | $25.97 | $70.04 | Base $54.08; weighted $52.45 |
| DCF base, WACC 8.75% to 9.75%, growth 3.5% | $48.96 | $59.31 | $54.08 |
| DCF base, SBC added back (not recommended) | | | $80.85 |
| Public comparables (mean, regressions) | $56.34 | $61.14 | $58.74 |
| Precedent transactions | $53.89 | $67.98 | $60.78 |
| Undisturbed price | | | $56.00 |
| 52-week trading range | $41.00 | $63.00 | |
| **Tessara offer** | | | **$66.50** |

The reconciliation: the DCF base case ($54.08) sits about 4 percent below the comparables because the market paid for SBC-heavy growth as if SBC were free and because it values the company's growth optimistically; the DCF's probability-weighted value is lower still. The market approach is a measure of what other investors pay today, not of intrinsic value, and the committee should treat it as an upper cross-check on the base case, not as independent confirmation of the offer.

#### Solution 10: Recommendation

Reverse DCF. The undisturbed price of $56.00 implies a plan that sits 13 percent of the way from the base case to the management case, or in other words, the market is pricing close to the base case with a small upside tilt. At $66.50, the offer implies a plan 79 percent of the way to management's. Holding the base case constant, the offer requires a WACC of 8.23 percent (versus 9.21), or perpetual growth of 4.85 percent (versus 3.5). Holding management's case constant, the offer implies a WACC of 9.48 percent: Tessara is paying roughly the value of a plan that has essentially no execution haircut, discounted at a slightly higher rate than ours.

Implied multiples at $66.50: equity value $7,533.4 million; enterprise value $7,218.6 million; 10.2 times NTM revenue, 12.9 times FY2026 revenue, and 12.3 times ending ARR. At $56.00 they are 8.4, 10.7, and 10.2 times. The offer is above every peer multiple in Table 10 except Halcyon Cloud at 11.2 times, and above all but the highest precedent (10.4 times). The 18.8 percent premium is below the 34.3 percent mean premium, but the multiple evidence, as noted, says the premium evidence overstates what is fair. Tessara's potential synergy is unquantified; Exhibits A and B argue against walking away from an offer that exceeds the base case by 23 percent, and Exhibit G shows the nearest alternative bid is $62 to $64 and unfinanced.

Recommendation: **counter at $72.00 and authorize acceptance at not less than $68.50.** At $72.00, EV is $7,856.6 million, 11.1 times NTM revenue, a 28.6 percent premium, and just above the management-case DCF value of $70.04, which asks Tessara to pay for the whole plan and to share the synergies. At $68.50, EV is $7,450.6 million, 10.5 times NTM revenue (just above the highest precedent of 10.4 times), and a 22.3 percent premium. That floor is 27 percent above the base-case value, 31 percent above the probability-weighted value, and above the sponsor indication by $4.50 to $6.50. Additional protections: a go-shop period, a reverse termination fee, no financing condition, and treatment of the converts at par plus make-whole.

### Sensitivity Discussion

Four variables dominate the valuation. The first is the discount rate: 9.21 percent is an estimate, and a 0.5-point change moves the base case by $5 to $6. The second is the terminal growth rate and, jointly, the terminal margin. The sensitivity tables show that the full plausible range, from $41 to $80 on the base case, spans both the undisturbed price and the offer. The third is the treatment of SBC, which moves value by about $27 per share and is a choice rather than an estimate. The fourth is the plan path: management versus base is worth $16 per share. The marginal analysis suggests the most defensible negotiating position is to concede that the base case is below the offer and to argue that Tessara is purchasing optionality on the management plan and on its own synergies.

### Common Student Errors

1. Computing NRR from blended totals and missing the cohort-by-cohort deterioration. Students who report "NRR of about 110 percent, stable" have not read the cohort triangle.
2. Computing LTV with the textbook formula, margin divided by churn, or with net retention above 100 percent for ten years, producing LTV/CAC above 5 without noting that expansion is not free.
3. Using the rule of 40 on one definition and calling Cirrus "best in class."
4. Adding SBC back in the DCF and then also using the diluted share count at today's price. This is the double standard in reverse: no cost in cash flows and no cost in shares.
5. Counting SBC as an expense and also increasing the share count for future grants. This double counts. Only existing options and RSUs should be added to the share count.
6. Applying the treasury stock method at the offer price in one place and at the DCF value in another, or counting all 8.4 million options as shares.
7. Treating the convertible as converted at a price below $92.00.
8. Discounting the Gordon terminal value at the full ten years while using mid-year discounting for the cash flows, which understates value by about 4.5 percent.
9. Forgetting the NOL, or applying the tax rate to a negative EBIT.
10. Using the average of the football field as "the answer," or applying the take-over premium to a price that already contains a premium multiple.

### Alternative Defensible Answers

Several different recommendations can be defended. A student who accepts management's plan, perhaps because of the March offsite model or because the held-out upside is large, can argue for rejecting $66.50 and countering above $75, relying on the management DCF of $70.04, the 34 percent mean premium, and the holders who see "north of $70." Anselm Okafor's position is a variant of this. A student who stresses the first-quarter flash, Ostrava, and the cohort deterioration can reasonably recommend accepting the offer now, on the grounds that a certain $66.50 is well above any risk-adjusted standalone value and that Tessara might withdraw. A third answer is to run a short, limited market check with Redcliff and others before responding. The grade should reward the quality of the reasoning: whether SBC is treated consistently, whether the terminal value is tested, and whether the recommendation follows from the evidence rather than from the first number computed.

### Board-Style Recommendation Memorandum

**To:** Special Committee of the Board of Directors, Cirrus Ledger, Inc.
**From:** Kessler Dunmore & Co.
**Date:** 19 November 2026
**Re:** Response to Tessara Systems' proposal of $66.50 per share in cash

**Recommendation.** We recommend that the committee decline the proposal as submitted, counter at $72.00 per share in cash, and authorize management and advisers to accept a price of not less than $68.50 per share on customary terms. We recommend that the committee not enter exclusivity until the price is agreed.

**Basis.** Treating stock-based compensation as the operating cost it is, we value Cirrus at $54.08 per share in our base case, $70.04 in management's plan, and $25.97 in a downside case, a probability-weighted $52.45. Public comparables and precedent transactions suggest $56 to $61, with a precedent range of $54 to $68. The offer is 18.8 percent above the undisturbed price and 23 percent above our base case, and at 10.2 times next-twelve-month revenue it is above every precedent but one. It is nearly equal to the management plan's value, which requires reacceleration of growth that the cohort data do not support.

**Risks to standalone value.** New-customer cohorts retain less than earlier cohorts (first-year net retention 120, 117, 113 percent); acquisition cost has risen 23 percent in two years; first-quarter net new ARR fell about 6 percent; and the largest customer, 6.4 percent of ARR, is evaluating alternatives. Free cash flow of $134.9 million includes about $17 million of non-repeating billing-term benefit and costs $179 million in dilution at today's price.

**Why counter.** A price of $72.00 values the entire management plan at our cost of capital and allocates some of Tessara's synergy to our shareholders. The 34 percent mean premium of recent transactions is not a good guide here, because Cirrus already trades at a multiple within the precedent range. The floor of $68.50 equals 10.5 times revenue, above the highest precedent, and is 27 percent above our base case.

**Process protections.** We recommend a go-shop period of at least 30 days, a reverse termination fee, no financing condition, treatment of the convertible notes at par plus make-whole, and confirmation of the committee's authority over any change in management arrangements. We recommend that the committee also invite a written proposal from Redcliff Partners. Our fairness opinion will be delivered separately and will rest on the same analysis.
