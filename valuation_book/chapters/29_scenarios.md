# Chapter 29 — Scenarios, Sensitivity and the Valuation Report

A valuation is only useful if its reader understands how much confidence to place in it. This final chapter covers the tools for expressing uncertainty — sensitivity, scenarios, reverse valuation — and the structure of a good valuation report. It returns to *Sunrise Textiles Ltd* (Chapter 19) as the worked example.

## 29.1 Why express uncertainty?

Every input of a valuation is an estimate: growth, margin, reinvestment, WACC, terminal growth. In Chapter 5 the same cash flows gave values from about ₹8,755 to ₹19,916 thousand across plausible WACC and growth pairs — a spread of more than 100%. A single number hides this. The source chapter's closing advice — a **range of values** from the seller's minimum to the buyer's maximum — is the practical expression of uncertainty.

## 29.2 Sensitivity analysis

**One-way sensitivity** changes one input at a time and records the change in value. The inputs with the largest effect deserve the most research.

### 29.2.1 Sunrise Textiles: one-way sensitivities (equity value per share, base ₹76.1)

| Input changed | Low case | Value | High case | Value |
|---------------|----------|------:|-----------|------:|
| WACC | 13% | 62.8 | 11% | 93.8 |
| Terminal ROIC | 12% (= WACC) | 72.1 | 15% | 82.5 |
| NOPAT growth, years 1–5 (all years) | −2 points | 72.9 | +2 points | 79.4 |
| Incremental ROIC, years 1–5 | 12% | 72.5 | 16% | 78.8 |
| Terminal growth | 4% | 74.2 | 6% | 78.4 |

**Reading.** WACC dominates: a one-point change moves value by roughly −17% / +23%. Terminal ROIC comes next (−5% / +8%). Terminal growth matters little *because* terminal ROIC (13%) is close to WACC (12%): growth at returns near the cost of capital adds little value (an insight that follows from the value-driver logic of Chapter 5).

**Two-way tables** vary two inputs together (WACC × growth, as in Chapters 5 and 19).

## 29.3 Scenario analysis

Scenarios change several inputs together to represent coherent states of the world.

### 29.3.1 Sunrise Textiles scenarios

| Scenario | NOPAT growth (Y1–Y5) | Terminal g / ROIC | Narrative |
|----------|----------------------|-------------------|-----------|
| **Bear** | 3% a year | 4% / 12% | Weak demand and margin pressure; growth barely beats inflation; no excess returns in the long run |
| **Base** | 8, 8, 7, 6, 6% | 5% / 13% | Plan: modest expansion, ROIC slightly above WACC |
| **Bull** | 11, 10, 9, 8, 7% | 5% / 15% | Export upturn and mix improvement; stronger returns on new capital |

| | Bear | Base | Bull |
|---|-----:|-----:|-----:|
| Enterprise value (₹ crore) | 917 | 1,021 | 1,132 |
| Equity value (EV − 300 + 40) | 657 | 761 | 872 |
| **Per share (₹)** | **65.7** | **76.1** | **87.2** |
| Probability | 25% | 50% | 25% |

**Probability-weighted value** = 0.25 × 65.7 + 0.50 × 76.1 + 0.25 × 87.2 = **₹76.3 per share**.

*Observation.* The scenarios are fairly symmetric around the base because the business is a mature manufacturer with modest growth. For a growth business the range would be wider and asymmetric. The probabilities are judgements: say how they were chosen.

### 29.3.2 Why scenarios beat a higher discount rate for risk
Adding a "safety margin" to WACC to reflect specific risks is crude: it penalises distant cash flows heavily, cannot distinguish systematic from specific risk, and gives no explanation. Scenarios express *what* might happen, *when*, and *how large* — the same logic as the ESG approach in Chapter 18.

### 29.3.3 Decision trees
For discrete events (regulatory approval, loss of a customer, success of a launch), use a tree with probabilities and outcome values. The distressed-valuation formulas (Chapter 14) are decision trees with two branches.

## 29.4 Reverse valuation (what the price implies)

A **reverse DCF** takes a price as given and solves for the assumption that reconciles it.

*Illustration.* Suppose an acquirer asks ₹90 per share for 100% of Sunrise (equity ₹900 crore; EV ₹1,160 crore). Holding other inputs at base, the price implies **any one** of:

| Implied variable | Base | Implied by ₹90 |
|------------------|-----:|---------------:|
| WACC | 12.0% | **11.2%** |
| Terminal ROIC | 13% | **18.3%** |
| NOPAT growth in each of years 1–5 | 8, 8, 7, 6, 6% | **+8 percentage points a year** |

Reading: to justify ₹90 the buyer must believe in a materially lower required return, a much stronger competitive position after year 5 (ROIC 18%), or growth of 14–16% a year — each demanding. The reverse DCF turns a vague "seems expensive" into a testable statement, and it is a useful negotiation tool for the buyer: it shows what the seller's price asks one to believe.

## 29.5 The football field

A **football-field chart** presents the ranges from all methods on one axis, with the price (or offer) marked.

| Method | Low (₹/share) | High (₹/share) |
|--------|--------------:|---------------:|
| Net assets: book to replacement | 59 | 83 |
| Earnings capitalisation (13–15%) | 54 | 63 |
| P/E (peer 12×, 15–25% non-listing discount) | 73 | 83 |
| EV/EBITDA 5–6× | 69 | 88 |
| DCF (WACC 11–13%, g 4–6%) | 62 | 99 |
| DCF scenarios | 66 | 87 |
| EVA-based | 78 | 78 |

The **overlap zone** of the market-, DCF- and EVA-based methods (≈ ₹73–₹83) is where most methods agree; the conclusion in Chapter 19 (₹70–₹80, point ₹75) sits at its lower half, reflecting the asset-based floor and the cautious capitalisation value. The picture also shows outliers (earnings capitalisation is low because it ignores growth) and prompts the reader to ask why.

## 29.6 The valuation report

A professional report is judged on whether a competent third party could follow and challenge it.

| Section | Content |
|---------|---------|
| **1. Executive summary** | Conclusion of value, standard and premise, date, purpose, range and key drivers |
| **2. Scope and engagement** | Subject, interest valued, sources, limitations, independence |
| **3. Business and industry** | Description, drivers, risks |
| **4. Financial analysis** | History, ratios, normalisation adjustments |
| **5. Methodology** | Methods adopted, rejected, and why |
| **6. Assumptions** | Forecast, WACC build-up, terminal value — each with source |
| **7. Calculations** | Exhibits: asset values, capitalisation, DCF, EVA, multiples |
| **8. Sensitivity and scenarios** | Tables, tornado, scenario weights |
| **9. Reconciliation** | Football field; comments on each method; conclusion |
| **10. Appendices** | Data, workings, glossary, declarations |

### 29.6.1 A sample executive summary (Sunrise Textiles)

> *We have estimated the fair value of 100% of the equity of Sunrise Textiles Ltd as at [date], on a going-concern basis for the purpose of a potential acquisition, at **₹700–₹800 crore (₹70–₹80 per share)**, with a point estimate of ₹750 crore. The range reflects asset-based values (₹590–₹830 crore), income-based values (₹544–₹783 crore), a discounted-cash-flow value of ₹761 crore (sensitivity ₹622–₹994 crore) and market multiples (₹690–₹880 crore). The terminal value forms 75% of the DCF enterprise value, and the principal sensitivity is the cost of capital: each percentage point changes equity value by roughly 17–23%. The business currently earns approximately its cost of capital (economic value added of ₹3 crore); value above invested capital depends on achieving the forecast improvement. No synergies are included. This report should be read with the assumptions and limitations set out in Sections 2 and 6.*

## 29.7 Common weaknesses in valuation reports

1. Single-point conclusion without a range.
2. Assumptions without sources.
3. Methods averaged mechanically without comment.
4. No sensitivity of terminal value.
5. No discussion of why methods disagree.
6. Inconsistent standard of value (e.g., control value used for a minority stake).
7. Failure to state the valuation date and subsequent events.
8. Hiding judgement in a single "adjustment" line.

## 29.8 A final word

Valuation is the disciplined estimate of what a business is worth, stated with the humility its uncertainty deserves. The syllabus teaches methods — asset, income, cash flow, relative, EVA, SVA — and special contexts — distress, start-ups, platforms, professional firms, ESG. The skill is in choosing among them, applying them consistently, testing the answers against each other and the market, and explaining the result in a range that a decision-maker can use. As the source chapter concludes about each special situation: *the fundamentals of valuation remain the same* — understanding the business, the revenue model, the quality of management and the risk–reward parameters.

## Chapter 29 summary

- Sensitivity ranks drivers; scenarios give coherent states; reverse valuation reveals implied beliefs.
- Sunrise: bear ₹65.7, base ₹76.1, bull ₹87.2, weighted ₹76.3; ₹90 implies WACC 11.2% or terminal ROIC 18.3%.
- The football field and a transparent report communicate the range and its reasons.

## Check your understanding

1. Why are scenarios preferable to adding a premium to WACC?
2. Compute the probability-weighted value: ₹60 (30%), ₹80 (50%), ₹110 (20%).
3. What does a reverse DCF tell a buyer?
4. List five sections of a valuation report.
5. Why does terminal growth matter little when terminal ROIC ≈ WACC?

**Answers.** (1) They show the nature, timing and size of risks and separate systematic from specific risk. (2) 18 + 40 + 22 = **₹80**. (3) What assumptions must be true to justify a given price. (4) Any five of the ten in §29.6. (5) Growth at a return equal to the cost of capital adds no value.

> **Exam focus.** In evaluation questions, finish with a range and a statement of the key sensitivities; this is what the examiner means by "supplement your conclusion with additional information".

<div class="pagebreak"></div>
