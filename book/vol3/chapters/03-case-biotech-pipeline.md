# Chapter 3: Case: Lumen Therapeutics, Valuing a Biotech Pipeline

*Type: Case. Prerequisites: Volume 1, Chapters 6 (NPV), 8 (uncertainty and real options), 10 (CAPM) and 11 (WACC); Volume 2, the chapters on valuation of growth and venture-stage companies. Lumen Therapeutics, its people, its programs and every figure in this chapter are fictional and illustrative. No real company, trial result, regulatory statistic or market datum is intended or reproduced.*

## The Situation

It is Wednesday 4 November 2026. In the glass-walled conference room on the third floor of a converted laboratory building, Dr. Priya Raman, chief executive officer of Lumen Therapeutics, Inc., has spread three printed spreadsheets across the table and is not looking at any of them. She is looking at a calendar. On 17 November the board of directors meets. On 18 November, at 17:00, the exclusivity window that Corvane Pharma granted to Lumen expires, and with it the term sheet on the table: a regional licensing and co-funding deal for Lumen's lead asset, LUM-101. A second bidder, Vantex Biopharma, has put forward a competing structure that expires on the same day. The board must tell management what to do.

Lumen is a clinical-stage company listed on a US exchange. It was founded nine years ago by Dr. Raman and a medicinal chemist, Dr. Anil Sorensen, on the back of a license from the University of Calder, and it has never sold a product. Today it has three clinical programs and an early discovery platform:

* **LUM-101**, an oral, biomarker-selected inhibitor for a genetically defined subtype of second-line lung cancer. It is in a pivotal Phase III trial that has just begun enrolling its final cohort. Topline data are expected in December 2028.
* **LUM-205**, an injectable antibody for moderate-to-severe ulcerative colitis. It has finished a small, encouraging Phase IIa study and is about to start the larger Phase IIb trial that will decide its fate. Topline data are expected in December 2027.
* **LUM-310**, an oral small molecule for a rare pediatric metabolic disorder. It is in Phase I.
* A **discovery platform** that screens for protein-degradation compounds and has produced no clinical candidate yet.

Lumen has 58.4 million shares outstanding, and 62.0 million on a diluted basis once in-the-money options and restricted stock units are counted. The shares closed at $14.50 on 3 November, giving a market capitalization of $899.0 million on the diluted count. The company holds $412.0 million in cash and marketable securities and owes $75.0 million on a senior term loan. It burned $142.9 million of cash in 2026 and will burn more in 2027 and 2028, when all three programs are funded and Phase III is at full enrollment. The arithmetic of that burn is the first thing the chief financial officer, Marcus Feldt, wants the board to see, because the term loan contains a minimum-liquidity covenant of $100 million. On the current plan, with no new money, Lumen breaches that covenant in the third quarter of 2028, some months before the Phase III result it is waiting for.

The people around the table matter, because each of them wants something different from the answer.

**Dr. Priya Raman (CEO)** wants to keep LUM-101 whole. She believes the oral convenience and the biomarker selection will make it a franchise drug, and she is wary of handing away half the world on terms that cap the upside.

**Marcus Feldt (CFO)** is a former equity analyst. He wants a funded company, a covenant that is not in play, and a valuation framework that the board can defend to shareholders who will ask why the stock trades below the sum of the parts. He has asked for a risk-adjusted net present value of every program and an honest comparison of the three ways to fund 2028: an equity raise, the Corvane deal, or the Vantex deal.

**Dr. Helen Ostrow (chief medical officer)** owns the probability estimates. She has argued, with data, that LUM-101's biomarker enrichment justifies a Phase III success probability above the usual benchmark for oncology. Her critics, including the board's independent science adviser, think she is anchoring on a small Phase II cohort.

**Tomas Beringer (head of business development)** negotiated the Corvane term sheet and the Vantex counter-proposal. He knows that Corvane also owns a competing late-stage compound and worries, quietly, about what a partner with a competing asset will prioritize.

**Ellen Okafor-Lang (board chair)** is a former pharmaceutical executive. She will not accept a recommendation that treats an expected value as a forecast, and she has said so in advance: "Tell me what each choice is worth in the world where the trial works, and in the world where it does not."

**Deadline and decision.** The board must decide by 17 November whether to (a) accept the Corvane term sheet, perhaps after a counter-proposal, (b) accept the Vantex alternative, or (c) decline both and raise equity in the market, retaining all rights. Whichever it chooses, it must also decide whether to continue funding all three programs through their next gates, and what valuation to present publicly. You have been asked, as a member of Marcus Feldt's finance team, to prepare the analysis.

## Industry Context

Drug development is a sequence of experiments that mostly fail. A compound enters first-in-human testing (Phase I) to establish safety and dosing. If it is tolerated, it moves into Phase II, where a first test of efficacy is run in a modest number of patients. Programs that show a signal enter Phase III, the large pivotal trials regulators use to decide on approval. A successful Phase III is followed by a regulatory filing, a review period and, if all goes well, approval and launch. At each gate the sponsor learns something, and the sponsor can stop. That structure, a series of staged commitments with a termination right at every gate, is what makes the economics of a pipeline different from the economics of a factory.

**Staged cost, back-loaded revenue.** Development spending rises sharply with each phase: Phase I costs tens of millions, Phase III costs hundreds. Revenue arrives only after approval, often six to ten years after the first dose, and then follows a characteristic life cycle: a slow launch ramp as physicians, payers and patients adopt the drug, a plateau at peak sales, and a steep decline when patents and exclusivity expire and generic or biosimilar competitors enter. A pipeline asset is therefore a long, thin stream of negative cash flows followed, with some probability, by a very large and then fading positive one.

**Probability of success is the dominant driver.** Practitioners estimate the probability that a program clears each gate, often by therapeutic area, and multiply the cash flows that depend on clearing a gate by the cumulative probability of reaching it. The result is a risk-adjusted net present value, written rNPV. Estimates of phase-transition probabilities differ by area. In this case we use an illustrative benchmark panel (see Financial Data) in which oncology Phase III success is lower than immunology or rare-disease Phase III success, and Phase II is the steepest gate everywhere. These benchmarks are fictional teaching inputs. In practice analysts calibrate to the company's own history and to published industry studies, and they should expect the answer to be sensitive to the choice.

**Two ways to price risk, and why mixing them is a mistake.** An asset can be valued by discounting its success-case cash flows at a very high venture-style rate that implicitly absorbs the failure risk, or by explicitly probability-weighting cash flows and discounting at a rate that reflects only the systematic risk of the cash flows. Volume 1, Chapter 8 argued for explicitness: technical failure of a single compound is largely diversifiable, so it belongs in the cash flows, not in the discount rate. Using a 25 percent rate and explicit probabilities counts the same risk twice. This case asks you to make that argument with numbers.

**Partnering is the industry's financing and risk-sharing technology.** Small companies rarely have the capital to run global Phase III programs and build global commercial organizations. They license regional or global rights to larger partners in exchange for a package: an upfront payment (certain), development, regulatory and sales milestones (contingent), royalties on partner sales (contingent and long-dated), and sometimes a share of development cost. The seller gives up upside in the successful state in return for cash and risk transfer in every state. Whether that trade is attractive depends on the probability of success, on the company's cost of external capital, and on whether the alternative to the deal is a dilutive equity raise at a depressed price. Terms are complicated by upstream obligations: academic licensors usually hold a right to a share of sublicense income, and the exact wording of that share can matter.

**Market valuation of clinical-stage companies.** Clinical-stage biotech equities often trade at enterprise values far below the rNPV of their pipelines, and sometimes far above. Part of the gap is the market's use of more conservative probabilities, part is a higher discount rate, and part is the dilution investors anticipate when a company must raise money before its data arrive. A good analyst treats the gap as information: what probability or discount rate would the market have to be using to justify today's price?

**Accounting context.** Under both US GAAP and IFRS, research costs are expensed as incurred, so a pipeline has little or no balance-sheet value. Lumen's balance sheet therefore shows cash and a loan but nothing for the three programs. Book equity of $327.6 million says almost nothing about worth. This is a case where the entire valuation must come from forward-looking cash flow analysis, and where price-to-book and earnings multiples are meaningless because earnings are negative.

**Policy and competition.** Two exogenous forces recur in pipeline valuation. The first is competitive: a rival's readout can change the market a drug will enter. The second is pricing policy: in this case's fictional jurisdiction, government price negotiation can begin for small-molecule drugs earlier in their commercial life than for biologics, which affects the effective exclusivity of an oral compound like LUM-101 relative to an antibody like LUM-205. The case does not ask you to model the policy explicitly, but the Complications section gives you a data point on it.

## Financial Data

All amounts are in US$ millions unless stated. The valuation date is 31 December 2026. Year 0 is calendar 2026, Year 1 is 2027, and so on. Cash flows are treated as arriving at the end of each year, and the transaction values in the deal terms are treated as received at Year 0 or at the end of the year in which the triggering event occurs.

**Table 3.1: Lumen Therapeutics, income statement extract**

| US$ millions | FY2024A | FY2025A | FY2026E |
|---|---:|---:|---:|
| Collaboration and grant revenue | 14.2 | 17.5 | 12.0 |
| Research and development | (118.4) | (139.6) | (151.2) |
| General and administrative | (24.1) | (26.3) | (28.0) |
| Operating loss | (128.3) | (148.4) | (167.2) |
| Interest expense | (6.9) | (7.1) | (7.1) |
| Interest income | 11.6 | 15.9 | 18.2 |
| Net loss | (123.6) | (139.6) | (156.1) |
| Weighted basic shares (millions) | 56.1 | 57.2 | 58.0 |
| Loss per share (US$) | (2.20) | (2.44) | (2.69) |
| Memo: stock-based compensation included above | 11.8 | 12.9 | 14.0 |

Collaboration revenue is a government grant that ends in 2026. FY2026E combines nine months of actual results with a three-month estimate.

**Table 3.2: Lumen Therapeutics, balance sheet extract**

| US$ millions | 31 Dec 2025A | 31 Dec 2026E |
|---|---:|---:|
| Cash and marketable securities | 554.9 | 412.0 |
| Prepaid and other current assets | 8.8 | 9.5 |
| Property and equipment, net | 20.5 | 21.0 |
| Right-of-use asset | 15.8 | 14.2 |
| Other non-current assets | 6.0 | 6.0 |
| **Total assets** | **606.0** | **462.7** |
| Accounts payable and accrued expenses | 36.1 | 38.5 |
| Deferred revenue | 8.0 | 6.0 |
| Senior term loan | 75.0 | 75.0 |
| Lease liability | 17.2 | 15.6 |
| **Total liabilities** | **136.3** | **135.1** |
| Paid-in capital | 1,366.0 | 1,380.0 |
| Accumulated deficit | (896.3) | (1,052.4) |
| **Total equity** | **469.7** | **327.6** |
| **Total liabilities and equity** | **606.0** | **462.7** |

The term loan bears 9.5 percent interest paid in cash, matures in December 2030 as a single payment, and carries a covenant requiring at least $100.0 million of unrestricted cash and marketable securities at all times. Operating cash flow in 2026 is estimated at an outflow of $138.6 million and capital expenditure at $4.3 million, which reconciles the $142.9 million fall in cash. The company has a large accumulated tax loss carry-forward that this chapter ignores except where noted.

**Table 3.3: Market data and capital structure (3 November 2026)**

| Item | Value |
|---|---:|
| Share price (US$) | 14.50 |
| 52-week range (US$) | 9.80 to 21.30 |
| Basic shares outstanding (millions) | 58.4 |
| Dilutive options and RSUs, treasury-stock method (millions) | 3.6 |
| Diluted shares (millions) | 62.0 |
| Market capitalization | 899.0 |
| Cash and marketable securities | 412.0 |
| Senior term loan | 75.0 |
| Net cash | 337.0 |
| Enterprise value (market capitalization less net cash) | 562.0 |
| Equity beta (against broad market) | 1.25 |
| Risk-free rate | 4.3% |
| Equity risk premium | 5.5% |
| Statutory tax rate | 21.0% |

The CFO's team computes a CAPM cost of equity of 4.3% + 1.25 x 5.5% = 11.2 percent. Because Lumen has net cash and its cash flows are overwhelmingly equity-funded, it uses 11 percent as the discount rate on risk-adjusted program cash flows. Sector practitioners the team consulted use rates from 10 to 12 percent for rNPV models of this kind.

**Table 3.4: Pipeline overview and scheduled development spending (US$ millions, spent only if the program reaches the stage)**

| Program | Stage and timing | Spend by year | Stage total | Stage success probability |
|---|---|---|---:|---:|
| LUM-101 | Phase III, 2027-2028 | 2027: 90; 2028: 75 | 165 | 55% |
| LUM-101 | Filing, review and pre-launch, 2029 | 2029: 50 | 50 | 90% |
| LUM-205 | Phase IIb, 2027 | 2027: 55 | 55 | 34% |
| LUM-205 | Phase III, 2028-2030 | 80; 100; 60 | 240 | 58% |
| LUM-205 | Filing, review and pre-launch, 2031 | 2031: 55 | 55 | 90% |
| LUM-310 | Phase I, 2027-2028 | 22; 10 | 32 | 66% |
| LUM-310 | Phase II, 2029-2030 | 30; 32 | 62 | 42% |
| LUM-310 | Phase III, 2031-2033 | 45; 40; 35 | 120 | 65% |
| LUM-310 | Filing, review and pre-launch, 2034 | 2034: 25 | 25 | 92% |

Each stage's success probability is the probability of clearing that gate, given that the program entered it. A stage's spending is committed only if every earlier gate was cleared. Approval and launch occur at the end of the filing year, so first sales are in 2030 for LUM-101 (Year 4), 2032 for LUM-205 (Year 6) and 2035 for LUM-310 (Year 9).

**Table 3.5: Illustrative benchmark panel for stage success probabilities (fictional teaching data)**

| Therapeutic area | Phase I to II | Phase II to III | Phase III to filing | Filing to approval |
|---|---:|---:|---:|---:|
| Oncology, biomarker-selected | 60% | 30% | 50% | 88% |
| Immunology | 62% | 34% | 58% | 90% |
| Rare metabolic disease | 66% | 42% | 65% | 92% |

Lumen's inputs equal the panel for LUM-205 and LUM-310. For LUM-101, Dr. Ostrow uses 55 percent and 90 percent rather than the panel's 50 percent and 88 percent, citing the biomarker enrichment. LUM-101 has already passed Phase II, so only the Phase III and filing values are used.

**Table 3.6: Commercial assumptions by program**

| Assumption | LUM-101 | LUM-205 | LUM-310 |
|---|---:|---:|---:|
| Peak annual net sales (US$ millions) | 1,400 | 1,300 | 620 |
| First sales year (calendar) | 2030 | 2032 | 2035 |
| Launch ramp, percent of peak in launch years 1 to 8 | 5, 15, 32, 54, 74, 88, 97, 100 | 4, 12, 28, 48, 68, 84, 95, 100 | 12, 35, 65, 88, 100 |
| First year of generic or biosimilar entry | 2041 | 2044 | 2047 |
| Sales after entry, percent of peak, years 1 to 4 | 45, 22, 12, 7 | 70, 48, 34, 24 | 60, 35, 20 |
| Cost of goods sold plus licensor royalty, percent of sales | 14% | 18% | 12% |
| Lifecycle R&D, percent of sales | 4% | 5% | 3% |
| Sales and marketing, launch years 1-3 | 45% of sales | 40% | 30% |
| Sales and marketing, launch years 4-5 | 32% | 30% | 22% |
| Sales and marketing, launch year 6 onward | 24% | 22% | 20% |
| Sales and marketing floor in first four launch years (US$ millions) | 70 | 55 | 30 |

Sales at peak persist until the generic entry year, then fall as shown, and are treated as zero after the listed years (no terminal value). Sales and marketing in any year is the greater of the percentage of sales and the floor, where the floor applies only in the first four launch years and only while sales are positive. The 21 percent tax rate applies to operating profit and to development spending alike. The licensor royalty to the University of Calder is a 3 percent sales royalty that is included in the cost-of-goods line for LUM-101.

**Table 3.7: Management's unrisked commercial forecast (net sales and operating profit before tax, US$ millions)**

Operating profit equals sales times (1 - COGS and royalty % - lifecycle R&D %) less sales and marketing. It excludes development spending in Table 3.4 and assumes the drug is approved. Year 0 is 2026.

| Year | Calendar | LUM-101 sales | LUM-101 op. profit | LUM-205 sales | LUM-205 op. profit | LUM-310 sales | LUM-310 op. profit |
|---|---:|---:|---:|---:|---:|---:|---:|
| 4 | 2030 | 70.0 | (12.6) | - | - | - | - |
| 5 | 2031 | 210.0 | 77.7 | - | - | - | - |
| 6 | 2032 | 448.0 | 165.8 | 52.0 | (15.0) | - | - |
| 7 | 2033 | 756.0 | 378.0 | 156.0 | 57.7 | - | - |
| 8 | 2034 | 1,036.0 | 518.0 | 364.0 | 134.7 | - | - |
| 9 | 2035 | 1,232.0 | 714.6 | 624.0 | 293.3 | 74.4 | 33.2 |
| 10 | 2036 | 1,358.0 | 787.6 | 884.0 | 415.5 | 217.0 | 119.3 |
| 11 | 2037 | 1,400.0 | 812.0 | 1,092.0 | 600.6 | 403.0 | 221.7 |
| 12 | 2038 | 1,400.0 | 812.0 | 1,235.0 | 679.2 | 545.6 | 343.7 |
| 13 | 2039 | 1,400.0 | 812.0 | 1,300.0 | 715.0 | 620.0 | 390.6 |
| 14 | 2040 | 1,400.0 | 812.0 | 1,300.0 | 715.0 | 620.0 | 403.0 |
| 15 | 2041 | 630.0 | 365.4 | 1,300.0 | 715.0 | 620.0 | 403.0 |
| 16 | 2042 | 308.0 | 178.6 | 1,300.0 | 715.0 | 620.0 | 403.0 |
| 17 | 2043 | 168.0 | 97.4 | 1,300.0 | 715.0 | 620.0 | 403.0 |
| 18 | 2044 | 98.0 | 56.8 | 910.0 | 500.5 | 620.0 | 403.0 |
| 19 | 2045 | - | - | 624.0 | 343.2 | 620.0 | 403.0 |
| 20 | 2046 | - | - | 442.0 | 243.1 | 620.0 | 403.0 |
| 21 | 2047 | - | - | 312.0 | 171.6 | 372.0 | 241.8 |
| 22 | 2048 | - | - | - | - | 217.0 | 141.0 |
| 23 | 2049 | - | - | - | - | 124.0 | 80.6 |

**Table 3.8: Comparable clinical-stage companies (fictional, 3 November 2026, US$ millions)**

| Company | Lead asset stage | Market capitalization | Net cash | Enterprise value | Programs |
|---|---|---:|---:|---:|---:|
| Kestrel Oncology | Phase III | 1,240 | 310 | 930 | 4 |
| Brightwell Therapeutics | Phase III | 760 | 285 | 475 | 3 |
| Norvale Immunology | Phase II | 540 | 190 | 350 | 3 |
| Tessaly Rare Disease | Phase II | 410 | 120 | 290 | 2 |
| Piedmont Biologics | Phase III | 1,020 | 150 | 870 | 5 |
| Mean | | | | 583 | |
| Median | | | | 475 | |
| **Lumen Therapeutics** | **Phase III** | **899** | **337** | **562** | **3** |

**Table 3.9: Base cash plan with no new financing (US$ millions)**

| | 2027 | 2028 |
|---|---:|---:|
| Opening cash | 412.0 | 226.4 |
| Research and development (all three programs funded) | (167.0) | (165.0) |
| General and administrative (treated as cash) | (28.0) | (28.0) |
| Interest on term loan (9.5% of 75.0) | (7.1) | (7.1) |
| Interest income (4.0% of opening cash) | 16.5 | 9.1 |
| **Closing cash** | **226.4** | **35.3** |

**Table 3.10: Competing term sheets for the ex-US rights to LUM-101**

| Term | Corvane Pharma (Deal A) | Vantex Biopharma (Deal B) |
|---|---|---|
| Territory | All markets outside the United States, 40% of global LUM-101 sales | Same |
| Upfront payment at signing (before 31 December 2026) | $150.0M | $260.0M |
| Share of remaining Phase III cost reimbursed by partner | 35% of 2027 and 2028 spending | None |
| Milestone on positive Phase III topline | $60.0M | $40.0M |
| Milestone on ex-US marketing authorization | $50.0M | $30.0M |
| Sales milestones (paid once, in first year the threshold is met) | $100.0M at ex-US annual sales of $300M; $150.0M at $500M | $75.0M at ex-US annual sales of $400M |
| Royalty on ex-US net sales | 16% on first $250M; 20% on $250M-$450M; 24% above $450M | 12% on first $300M; 15% on $300M-$500M; 18% above $500M |
| Royalty step-down | Rates halve from the first year of generic entry | Same |
| Partner manufactures ex-US supply | Yes | Yes |
| Exclusivity expires | 18 November 2026, 17:00 | 18 November 2026, 17:00 |

For the valuation in this chapter, ex-US sales equal 40 percent of the global sales in Table 3.7 for LUM-101, ex-US approval follows US approval with certainty (as in the base program model), the ex-US authorization milestone is paid in 2030 (Year 4, the first sales year), the Phase III milestone is paid at the end of 2028 (Year 2) and the upfront payment is received at Year 0. Under either deal, Lumen keeps the United States, which is 60 percent of global sales, and bears the University of Calder obligations described in the next section.

## Complications and Exhibits

**Exhibit 1: The University of Calder sublicense clause.** Lumen's license from the University of Calder (paraphrased here for the case) entitles the University to (a) a royalty of 3 percent of net sales of any licensed product sold by Lumen or its sublicensees, and (b) 18 percent of "Sublicense Income," defined as "all consideration received by Licensee from a sublicensee in connection with the grant of rights, other than payments for research and development services at cost and royalties on net sales that are subject to the royalty in clause (a)." Counsel's first reading is that the 18 percent applies to upfront payments and milestones, and that royalties received from a partner on ex-US sales are covered by the 3 percent sales royalty (which Lumen must therefore fund, since the partner will not pay it on Lumen's behalf). A second reading, which the University's technology-transfer office has hinted at, is that royalties received by Lumen are Sublicense Income and subject to 18 percent in place of the 3 percent sales royalty. The base case in this chapter uses the first reading. Cost reimbursements are treated as outside Sublicense Income. A third, aggressive reading would also apply the 18 percent to cost reimbursements.

**Exhibit 2: The LUM-205 Phase IIa data.** The Phase IIa study enrolled 38 patients. The clinical remission rate at week 12 was 41 percent on drug and 23 percent on placebo, a difference with a p-value of 0.07 on the original primary endpoint. The statistical analysis plan was amended before unblinding to add a second, stricter remission definition, on which the difference was larger. The independent science adviser describes the result as "encouraging but exactly the sort of signal that shrinks at scale." The 34 percent Phase IIb success probability in Table 3.4 is the benchmark value, not an upgraded estimate.

**Exhibit 3: A competing readout.** A rival company's compound against the same genetic subtype as LUM-101 will read out its own pivotal trial in the second half of 2027, a year before Lumen's. A positive and clearly superior rival result would, in management's view, cut LUM-101 peak sales to about $1,000 million. A positive but similar result would leave peak sales unchanged but make the launch ramp slower. A negative rival result would raise confidence in the target biology and in management's view lift peak sales to $1,800 million. The base forecast of $1,400 million sits between these cases and is not formally probability-weighted.

**Exhibit 4: Pricing policy.** In the fictional jurisdiction in which Lumen sells, small-molecule drugs become eligible for government price negotiation nine years after approval, and biologics thirteen years after approval. Management's estimate is that this would reduce net price on LUM-101 by 15 percent from 2039, the ninth year after its 2030 launch, until generic entry. The base forecast in Table 3.7 does not include this effect. LUM-205 is a biologic and LUM-310 is protected by orphan-product exclusivity, so neither is assumed to be affected.

**Exhibit 5: A potential priority review voucher.** If LUM-310 is approved, management believes there is a 40 percent chance that Lumen is awarded a transferable priority review voucher for rare pediatric disease. Vouchers have been sold privately; management assumes a sale price of $100 million at the end of 2034, taxable at 21 percent. The base case excludes it.

**Exhibit 6: Corvane's competing asset.** Corvane has a Phase II compound aimed at the same genetic subtype, acquired two years ago. The term sheet obliges Corvane to use "commercially reasonable efforts" to commercialize LUM-101 ex-US but contains no non-compete and no minimum-sales or reversion right. Mr. Beringer believes a reversion right would be worth more to Lumen than a point of royalty but has not priced it.

**Exhibit 7: Tax losses.** Lumen has about $780 million of accumulated tax losses that will shelter early profits. The base models in this chapter apply a 21 percent tax rate on operating profit and credit a 21 percent tax shield on development spending, which assumes the company can use the losses of one program against the profits of another and ignores timing. Management's view is that the effect on value is positive but modest and should be treated as a refinement.

**Exhibit 8: Equity market access.** The company's bankers advise that an underwritten follow-on of $250 million could be priced at $12.00 per share, a discount of about 17 percent to the last close, with gross underwriting spread and costs of 5.5 percent. They caution that a larger raise, or a raise priced after the market learns of a covenant problem, would price lower.

**Exhibit 9: Structure of the deal cases.** In Deal A and Deal B, ex-US sales are 40 percent of global sales and are booked by the partner. Lumen's retained US business is 60 percent of global LUM-101 sales. Lumen bears the 14 percent of US sales as cost of goods and royalty, the 4 percent lifecycle R&D charge on US sales, and sales and marketing at the same percentages as in Table 3.6, but with the first-four-years floor reduced from $70 million to $55 million because Lumen no longer needs an ex-US commercial team. Under a deal Lumen continues to bear 3 percent of ex-US net sales as licensor royalty to the University of Calder.

**Exhibit 10: A note on the market's behavior.** Over the last twelve months Lumen's stock has traded as low as $9.80 and as high as $21.30. The high followed a positive conference presentation of LUM-101's Phase II data, and the low followed a covenant-related question on an analyst call. The CFO observes that "the price moves with the market's view of our financing risk at least as much as with its view of our science."

## Assignment Questions

Use the 11 percent discount rate, end-of-year timing and a 21 percent tax rate throughout unless a question says otherwise. State every assumption you add.

1. **Probabilities and expected spending.** For each of LUM-101, LUM-205 and LUM-310, compute the cumulative probability of reaching approval and the probability of entering each stage. Compute the expected development spending of each program (stage spending times the probability the stage is entered) and compare it with the scheduled spending in Table 3.4. Explain why the expected figure is the right one for an rNPV.

2. **rNPV of LUM-101.** Using Tables 3.4 to 3.7, build the year-by-year risk-adjusted after-tax cash flow of LUM-101 and its rNPV at 11 percent. Show how the operating profit in Table 3.7 is built up from the commercial assumptions in Table 3.6 for at least the first four sales years. Report the present value of development cost and of commercial cash flow separately.

3. **rNPV of LUM-205 and LUM-310.** Repeat Question 2 for the other two programs. Explain why the rNPV of LUM-205 is positive even though its probability of reaching approval is below 18 percent, and why the rNPV of LUM-310 is much smaller.

4. **Sum of the parts and the market.** Value Lumen's equity per diluted share. Treat the discovery platform as worth $45.0 million, and capitalize corporate G&A of $28.0 million per year for ten years after tax at 11 percent as a deduction. Compare the result with the $14.50 share price. Find (a) the uniform scaling of all stage probabilities, (b) the Phase III success probability for LUM-101 alone, and (c) the discount rate, each of which would reproduce the market price.

5. **Discount rate versus probability.** Compute the unrisked NPV of each program at 11 percent. Then find the single discount rate which, applied to the unrisked flows, reproduces each rNPV. Compute each program's rNPV at 15 percent and 20 percent. Explain what goes wrong if a 20 percent rate is combined with explicit probabilities, and argue whether any argument for a rate above 11 percent is defensible.

6. **Sensitivity and outcomes.** For LUM-101, compute the change in value per share from (a) Phase III success probability of 40 and 70 percent, (b) peak sales of $1,000 million and $1,800 million, (c) discount rates of 13 and 9 percent, (d) a one-year launch delay, (e) the pricing-policy haircut of Exhibit 4, and (f) using the benchmark panel's Phase III and filing probabilities. Find the break-even Phase III probability at which LUM-101's rNPV is zero. Then compute LUM-101's value and Lumen's equity value per share in each of the three outcomes: Phase III fails, Phase III succeeds but the filing is rejected, and approval.

7. **The value of staging.** Compute each program's rNPV if the company committed to all scheduled development spending regardless of earlier results. The difference is the value of the option to stop at each gate. Explain why it is large for LUM-205 and LUM-310 and small for LUM-101, and what that implies about the order in which to cut programs if cash runs short.

8. **Valuing Deal A.** Value Lumen's US-only LUM-101 business, then value Corvane's term sheet (upfront, cost share, milestones and royalties, net of the University's share) on a risk-adjusted after-tax basis. Compare the total with retaining global rights. Compute the upfront payment at which Deal A would be value-neutral against retention. Quantify how the second and third readings of the University's clause in Exhibit 1 change the answer.

9. **Funding choices.** Compare three ways of funding 2027 and 2028: (I) the $250 million equity raise of Exhibit 8, (II) Deal A, and (III) Deal B. For each, produce the closing cash balances for 2027 and 2028, test the covenant, and compute equity value per share on the sum-of-the-parts basis. Compare the cash each deal pays in the state where Phase III fails with the cash it pays in the state where LUM-101 is approved. State which option you would choose and why.

10. **Board recommendation.** Prepare a one-page recommendation to the board for 17 November. It should state which funding path you recommend, what you would try to renegotiate (at least three specific terms, with values), what you would tell the market about valuation, which program you would cut first if cash became tight, and which three facts, if they changed, would reverse your recommendation.

## Teaching Note and Full Solutions

### Learning Objectives

After this case, students should be able to:

1. Convert stage-by-stage clinical and regulatory success probabilities into cumulative probabilities and probability-weighted development spending.
2. Build a risk-adjusted NPV (rNPV) for a pipeline asset and aggregate several assets into a sum-of-the-parts equity value per share.
3. Explain why technical risk belongs in the cash flows and why a high venture discount rate on top of explicit probabilities double counts.
4. Reverse-engineer the probability, scaling or discount rate that a market price implies.
5. Value a licensing deal (upfront, cost share, milestones, royalties, upstream sublicense share) on a risk-adjusted basis and compare it with retention, and recognize when financing risk, not rNPV, drives the decision.
6. Use state-contingent analysis (success, failure, rejection) to communicate an expected value that no one will ever observe.

### Suggested Class Plan (120 minutes)

| Minutes | Segment | Activity |
|---|---|---|
| 0-10 | Opening | Cold-call the CFO's question: what is each program worth and why does the stock trade at $14.50? Show the covenant timeline (Table 3.9). |
| 10-25 | Probabilities | Questions 1 and 5 in pairs: cumulative probability, expected spend, and the double-counting argument. |
| 25-55 | rNPV build | Question 2 in three groups (one per program); a spreadsheet is projected and filled live. Reconcile to $698.0M, $139.8M and $52.6M. |
| 55-70 | Sum of the parts | Questions 3 and 4: equity per share, market-implied inputs. Poll the class: is $14.50 cheap? |
| 70-80 | Sensitivity and states | Question 6: tornado, break-even probability, three outcomes. Ask Ellen Okafor-Lang's question. |
| 80-85 | Option value | Question 7, short. |
| 85-105 | The deals | Questions 8 and 9: Deal A versus retention, versus Deal B, versus the equity raise. Split the room by role (CEO, CFO, BD, chair). |
| 105-120 | Decision | Question 10: vote, then compare with the board memo at the end of this note. |

### Solutions

All figures were recomputed in Python from Tables 3.4 to 3.10 and are rounded to one decimal place (probabilities to four places) for display. Small differences in the last digit can arise if you round intermediate values.

#### Question 1: Probabilities and expected spending

Cumulative probability is the product of stage probabilities. The probability of entering a stage is the product of the stage probabilities before it.

* LUM-101: approval = 0.55 x 0.90 = 0.4950.
* LUM-205: probability of entering Phase III = 0.34; of entering filing = 0.34 x 0.58 = 0.1972; approval = 0.1972 x 0.90 = 0.1775 (0.17748).
* LUM-310: probability of entering Phase II = 0.66; Phase III = 0.66 x 0.42 = 0.2772; filing = 0.2772 x 0.65 = 0.1802; approval = 0.1802 x 0.92 = 0.1658 (0.16577).

**Table 3.11: Expected development spending (US$ millions)**

| Program | Stage | Scheduled spend | Probability of entering | Expected spend |
|---|---|---:|---:|---:|
| LUM-101 | Phase III | 165.0 | 1.0000 | 165.0 |
| LUM-101 | Filing and pre-launch | 50.0 | 0.5500 | 27.5 |
| | **LUM-101 total** | **215.0** | | **192.5** |
| LUM-205 | Phase IIb | 55.0 | 1.0000 | 55.0 |
| LUM-205 | Phase III | 240.0 | 0.3400 | 81.6 |
| LUM-205 | Filing and pre-launch | 55.0 | 0.1972 | 10.8 |
| | **LUM-205 total** | **350.0** | | **147.4** |
| LUM-310 | Phase I | 32.0 | 1.0000 | 32.0 |
| LUM-310 | Phase II | 62.0 | 0.6600 | 40.9 |
| LUM-310 | Phase III | 120.0 | 0.2772 | 33.3 |
| LUM-310 | Filing and pre-launch | 25.0 | 0.1802 | 4.5 |
| | **LUM-310 total** | **239.0** | | **110.7** |
| | **All programs** | **804.0** | | **450.6** |

Scheduled spending of $804.0 million overstates the expected outlay by 78 percent, because most of it is committed only in the states where earlier gates are cleared. The expected figure is correct for rNPV because cash flows are weighted by the probability that they occur. The other way of putting it: the sponsor's decision to stop at a failed gate is built into the model, so spending after a failure is not a cost.

#### Question 2: rNPV of LUM-101

**Building operating profit.** Sales in launch year n equal the ramp percentage times peak sales of $1,400.0 million. Operating profit equals sales x (1 - 0.14 - 0.04) less sales and marketing, which is the greater of the percentage of sales and the $70.0 million floor.

* 2030 (launch year 1): sales 5% x 1,400 = 70.0. COGS and royalty 14% = 9.8. Lifecycle R&D 4% = 2.8. Sales and marketing = max(45% x 70.0 = 31.5; 70.0) = 70.0. Operating profit = 70.0 - 9.8 - 2.8 - 70.0 = (12.6).
* 2031: sales 15% x 1,400 = 210.0. COGS 29.4, R&D 8.4. Sales and marketing = max(94.5; 70.0) = 94.5. Operating profit = 210.0 - 29.4 - 8.4 - 94.5 = 77.7.
* 2032: sales 32% x 1,400 = 448.0. COGS 62.7, R&D 17.9. Sales and marketing 45% = 201.6. Operating profit = 448.0 - 62.7 - 17.9 - 201.6 = 165.8.
* 2033 (launch year 4): sales 54% x 1,400 = 756.0. COGS 105.8, R&D 30.2. Sales and marketing 32% = 241.9. Operating profit = 756.0 - 105.8 - 30.2 - 241.9 = 378.0.
* From 2039 (launch year 10) onward, sales and marketing is 24 percent, so at the 2040 plateau operating profit is 1,400 x (1 - 0.14 - 0.04 - 0.24) = 812.0. After generic entry in 2041, sales are 45 percent of peak (630.0), then 22, 12 and 7 percent (308.0, 168.0, 98.0), so operating profit is 365.4, 178.6, 97.4 and 56.8.

**Risk adjustment and discounting.** Development costs in 2027 and 2028 are certain to be incurred (the program is already in Phase III), so they carry probability 1. The 2029 filing and pre-launch cost of $50.0 million is incurred only if Phase III succeeds, so its expected value is 0.55 x 50.0 = 27.5. Operating profits are multiplied by the cumulative approval probability, 0.495. Everything is then taxed at 21 percent (multiplied by 0.79) and discounted at 1.11 to the power of the year.

Worked examples. Year 1: -90.0 x 0.79 = -71.1; x 0.9009 = -64.1. Year 5: 77.7 x 0.495 = 38.5; x 0.79 = 30.4; x 0.5935 = 18.0.

**Table 3.12: LUM-101 rNPV (US$ millions)**

| Year | Cal. | Unrisked op. profit | x 0.495 | Risked dev. cost | Risked pre-tax | After-tax (x 0.79) | DF 11% | PV |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 2027 | - | - | (90.0) | (90.0) | (71.1) | 0.9009 | (64.1) |
| 2 | 2028 | - | - | (75.0) | (75.0) | (59.2) | 0.8116 | (48.1) |
| 3 | 2029 | - | - | (27.5) | (27.5) | (21.7) | 0.7312 | (15.9) |
| 4 | 2030 | (12.6) | (6.2) | - | (6.2) | (4.9) | 0.6587 | (3.2) |
| 5 | 2031 | 77.7 | 38.5 | - | 38.5 | 30.4 | 0.5935 | 18.0 |
| 6 | 2032 | 165.8 | 82.1 | - | 82.1 | 64.8 | 0.5346 | 34.7 |
| 7 | 2033 | 378.0 | 187.1 | - | 187.1 | 147.8 | 0.4817 | 71.2 |
| 8 | 2034 | 518.0 | 256.4 | - | 256.4 | 202.6 | 0.4339 | 87.9 |
| 9 | 2035 | 714.6 | 353.7 | - | 353.7 | 279.4 | 0.3909 | 109.2 |
| 10 | 2036 | 787.6 | 389.9 | - | 389.9 | 308.0 | 0.3522 | 108.5 |
| 11 | 2037 | 812.0 | 401.9 | - | 401.9 | 317.5 | 0.3173 | 100.7 |
| 12 | 2038 | 812.0 | 401.9 | - | 401.9 | 317.5 | 0.2858 | 90.8 |
| 13 | 2039 | 812.0 | 401.9 | - | 401.9 | 317.5 | 0.2575 | 81.8 |
| 14 | 2040 | 812.0 | 401.9 | - | 401.9 | 317.5 | 0.2320 | 73.7 |
| 15 | 2041 | 365.4 | 180.9 | - | 180.9 | 142.9 | 0.2090 | 29.9 |
| 16 | 2042 | 178.6 | 88.4 | - | 88.4 | 69.9 | 0.1883 | 13.2 |
| 17 | 2043 | 97.4 | 48.2 | - | 48.2 | 38.1 | 0.1696 | 6.5 |
| 18 | 2044 | 56.8 | 28.1 | - | 28.1 | 22.2 | 0.1528 | 3.4 |
| **Total** |  |  |  |  |  |  |  | **698.0** |

The present value of risk-adjusted after-tax development cost is -128.0 (64.1 + 48.1 + 15.9). The present value of risk-adjusted commercial cash flow is 826.1. The **rNPV of LUM-101 is $698.0 million.** As a cross-check, the unrisked NPV (success case with all development costs certain) is $1,527.8 million, which is the approval-state value used in Question 6.

#### Question 3: rNPV of LUM-205 and LUM-310

Operating profits are taken from Table 3.7. For LUM-205 they are multiplied by 0.17748; for LUM-310 by 0.16577. Development costs are probability-weighted as in Table 3.11 and fall in the years shown in Table 3.4. The tables below risk-adjust development cost year by year and discount the commercial flows of Table 3.7 as a block (each year's operating profit x 0.79 x discount factor), then weight the block by the cumulative approval probability. This is algebraically identical to the year-by-year layout used for LUM-101.

**Table 3.13: LUM-205 rNPV (US$ millions)**

| Stage | Year | Cal. | Scheduled cost | Prob. of entering | Risked cost | After-tax | DF 11% | PV |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Phase II | 1 | 2027 | 55.0 | 1.0000 | (55.0) | (43.5) | 0.9009 | (39.1) |
| Phase III | 2 | 2028 | 80.0 | 0.3400 | (27.2) | (21.5) | 0.8116 | (17.4) |
| Phase III | 3 | 2029 | 100.0 | 0.3400 | (34.0) | (26.9) | 0.7312 | (19.6) |
| Phase III | 4 | 2030 | 60.0 | 0.3400 | (20.4) | (16.1) | 0.6587 | (10.6) |
| Reg+prelaunch | 5 | 2031 | 55.0 | 0.1972 | (10.8) | (8.6) | 0.5935 | (5.1) |
| **PV of risked development cost** |  |  |  |  |  |  |  | **-91.9** |
| PV of unrisked commercial cash flow (Table 3.7 x 0.79 x DF) |  |  |  |  |  |  |  | 1,305.4 |
| Commercial PV x cumulative PoS 0.17748 |  |  |  |  |  |  |  | 231.7 |
| **rNPV** |  |  |  |  |  |  |  | **139.8** |

**rNPV of LUM-205 = -91.9 + 231.7 = $139.8 million.**

**Table 3.14: LUM-310 rNPV (US$ millions)**

| Stage | Year | Cal. | Scheduled cost | Prob. of entering | Risked cost | After-tax | DF 11% | PV |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Phase I | 1 | 2027 | 22.0 | 1.0000 | (22.0) | (17.4) | 0.9009 | (15.7) |
| Phase I | 2 | 2028 | 10.0 | 1.0000 | (10.0) | (7.9) | 0.8116 | (6.4) |
| Phase II | 3 | 2029 | 30.0 | 0.6600 | (19.8) | (15.6) | 0.7312 | (11.4) |
| Phase II | 4 | 2030 | 32.0 | 0.6600 | (21.1) | (16.7) | 0.6587 | (11.0) |
| Phase III | 5 | 2031 | 45.0 | 0.2772 | (12.5) | (9.9) | 0.5935 | (5.8) |
| Phase III | 6 | 2032 | 40.0 | 0.2772 | (11.1) | (8.8) | 0.5346 | (4.7) |
| Phase III | 7 | 2033 | 35.0 | 0.2772 | (9.7) | (7.7) | 0.4817 | (3.7) |
| Reg+prelaunch | 8 | 2034 | 25.0 | 0.1802 | (4.5) | (3.6) | 0.4339 | (1.5) |
| **PV of risked development cost** |  |  |  |  |  |  |  | **-60.3** |
| PV of unrisked commercial cash flow (Table 3.7 x 0.79 x DF) |  |  |  |  |  |  |  | 680.8 |
| Commercial PV x cumulative PoS 0.16577 |  |  |  |  |  |  |  | 112.8 |
| **rNPV** |  |  |  |  |  |  |  | **52.6** |

**rNPV of LUM-310 = -60.3 + 112.8 = $52.6 million.**

**Interpretation.** LUM-205 is worth $139.8 million despite a 17.7 percent approval probability because the success case is large (commercial PV of $1,305.4 million), the cumulative weight on that case, 0.177, still delivers $231.7 million, and the risk-adjusted development cost is only $91.9 million rather than $350.0 million scheduled. LUM-310's commercial case is half the size, it starts nine years out so each dollar is discounted by about 0.39 or less, and it must clear four gates. Its small positive value depends on the assumption that its late-stage cost of $120.0 million is spent only 27.7 percent of the time.

#### Question 4: Sum of the parts and the market

Corporate G&A: $28.0 million x 0.79 = $22.12 million a year; the ten-year annuity factor at 11 percent is (1 - 1.11^-10) / 0.11 = 5.8892, so the present value is 22.12 x 5.8892 = $130.3 million.

**Table 3.15: Sum-of-the-parts equity value**

| Component | US$ millions | Per diluted share (US$) |
|---|---:|---:|
| LUM-101 rNPV | 698.0 | 11.26 |
| LUM-205 rNPV | 139.8 | 2.25 |
| LUM-310 rNPV | 52.6 | 0.85 |
| Discovery platform | 45.0 | 0.73 |
| Corporate G&A (after tax, present value) | (130.3) | (2.10) |
| **Net operating value** | **805.1** | **12.98** |
| Cash and marketable securities | 412.0 | 6.65 |
| Term loan | (75.0) | (1.21) |
| **Equity value** | **1,142.1** | **18.42** |
| Market capitalization at $14.50 | 899.0 | 14.50 |
| Premium of intrinsic value over price | 243.1 | 27.0% |

Market enterprise value of $562.0 million is 69.8 percent of the model's net operating value of $805.1 million. Three ways to read the market's implied view:

* **(a) Uniform scaling.** Multiplying every stage probability by 0.901 (so LUM-101's Phase III becomes 49.6 percent and its filing 81.1 percent) lowers equity value to $899.0 million.
* **(b) LUM-101 Phase III alone.** Holding all else fixed, a Phase III probability of 38.5 percent for LUM-101 reproduces the price.
* **(c) Discount rate.** A discount rate of 13.6 percent applied to every program, to the platform-free G&A deduction and to the cash reproduces the price. Equity values per share at other rates are $22.48 at 9 percent, $20.32 at 10, $18.42 at 11, $16.75 at 12 and $15.28 at 13.

None of the three is obviously unreasonable, which is the point. The market is pricing a mix of lower probabilities, a higher rate and financing dilution risk that the model has not yet charged for. The financing charge is quantified in Question 9.
