# Chapter 24 — Pitfalls, Governance and Professional Practice

Technique is necessary but not sufficient. This final chapter collects the most common errors, describes how to review and audit a DCF model, and sets out the conventions of a professional valuation report — including the ethical dimension of an exercise that is routinely pressured to deliver a particular answer.

## 24.1 The twenty most common DCF errors

### Cash-flow errors
1. **Growth without reinvestment.** Forecast revenue grows; capex and working capital do not.
2. **Terminal reinvestment inconsistent with terminal growth and ROIC** (Chapter 12).
3. **Using accounting profit instead of free cash flow** (ignoring working capital, capex).
4. **Double-counting the tax shield** — in FCFF *and* in WACC.
5. **Treating stock compensation as free** (adding back to FCFF).
6. **Mismatched lease treatment** across EBITDA, FCFF, WACC and bridge.
7. **Including non-operating income in FCFF and valuing the asset again in the bridge.**
8. **Peak-year or trough-year base** for a cyclical business.

### Discount-rate errors
9. **Discounting FCFE at WACC or FCFF at the cost of equity.**
10. **Currency mismatch** — rupee flows at a dollar rate.
11. **Beta not re-levered** to the target capital structure.
12. **Book-value weights** in WACC.
13. **Inconsistent Rf and ERP** (different currencies, maturities or dates).
14. **A "conservative" buffer added to WACC** on top of conservative cash flows.

### Terminal-value errors
15. **Terminal growth greater than the risk-free rate or long-run nominal GDP growth.**
16. **Terminal margins or ROIC at peak levels with no competitive justification.**
17. **Exit multiple taken from an inflated market without cross-checking the implied growth.**

### Bridge and reporting errors
18. **Omitted debt-like items** (pensions, leases, deferred consideration, guarantees).
19. **Using the wrong share count** (basic vs diluted; stale; ignoring buybacks, new issues).
20. **No range, no sensitivities, no statement of what drives the value.**

## 24.2 Model governance

A DCF model is a decision tool and, in many settings, a legal and audit document. It should be built and controlled like software.

### 24.2.1 Structure
- **One input sheet;** no hard-coded numbers in formulas.
- **Clear flow:** inputs → calculations → outputs; consistent column structure (time runs left to right).
- **Colour coding:** blue for inputs, black for formulas, green for links to other sheets.
- **Separate scenarios** with a switch; keep a documented base case.
- **Version control** and change log.

### 24.2.2 Checks
- Balance sheet balances (if a three-statement model is built).
- Cash reconciles across statements.
- FCFF reconciles using two methods (EBIT-based, net-income-based).
- Sources and uses of cash tie.
- Growth and ROIC within expected bounds in each year; flags for outliers.
- Terminal-year checks: g ≤ Rf, WACC − g ≥ 3 points, reinvestment ≥ 0, capex ≥ depreciation.
- Sensitivity-table base cell equals model output.
- Circularity handled and documented (iteration switch).

### 24.2.3 Independent review
Where stakes are high, a second person should rebuild key calculations independently, test extreme inputs (zero growth, high WACC) and review the logic and assumptions, not only the spreadsheet formulas.

## 24.3 The valuation report

A professional valuation report is judged by whether another competent valuer could follow, reproduce and challenge it. Typical structure:

1. **Executive summary:** conclusion of value, standard and premise of value, date, purpose, key assumptions, range.
2. **Engagement terms:** subject, purpose, valuation date, scope, sources, limitations, independence declaration.
3. **Business and industry description.**
4. **Financial analysis:** historical performance and normalisation adjustments.
5. **Methodology:** approaches considered and rejected, those adopted and why.
6. **Assumptions:** forecast, discount rate, terminal value — each with a source or rationale.
7. **Calculations and results:** DCF exhibits, bridge, multiples.
8. **Sensitivity and scenario analysis.**
9. **Cross-checks and reconciliation.**
10. **Conclusion** and range.
11. **Appendices:** documents, data sources, calculations, glossary.
12. **Limiting conditions** and reliance statements.

Under the ICAI Valuation Standards and the registered-valuer rules, specified disclosures about the valuer's independence, the information relied on, the inspection or management representations obtained, and the limitations are required. Check current requirements.

## 24.4 Independence, bias and ethics

Valuation is often commissioned by a party with a preferred answer: a promoter who wants a high value for a share issue, a buyer who wants a low value for a purchase, a company that wants to avoid impairment. Structural pressure produces predictable biases.

**Types of bias**
- **Client bias:** unconsciously adopting assumptions that favour the engagement sponsor.
- **Anchoring:** settling on a number early and adjusting only slightly.
- **Confirmation bias:** seeking evidence for the expected value.
- **Optimism bias in forecasts:** especially in management plans.
- **Precision illusion:** reporting spurious decimals.

**Safeguards**
1. State assumptions *before* computing the answer, and document why.
2. Obtain independent evidence for key inputs (peer data, industry reports, historical test).
3. Use ranges and scenario weighting.
4. Disclose conflicts and the reliance placed on management.
5. Retain the ability to say no. A valuer whose conclusion can be dictated is not a valuer.
6. Test the plan against history (hit-rate of management budgets; margin vs peers).

## 24.5 Management plans and forecasts: how to challenge them

1. **Compare with history.** Ask for the last 5 years' budgets and outcomes; compute the average over-optimism.
2. **Test against industry.** Does the plan imply growth or margin outside the peer range?
3. **Test the drivers.** Capacity, headcount, distribution reach: do they support the revenue?
4. **Reconcile the cash.** Does the plan's cash flow tie to the funding plan?
5. **Examine the first two years carefully;** the later years are less reliable, but their error sits mainly in the terminal assumptions.
6. **Understand incentives:** budgets prepared for fundraising or covenant negotiation are biased.

## 24.6 Quick diagnostics: is this DCF credible?

Ask these ten questions of any DCF you receive.

1. What is the standard and premise of value, and is the method suitable?
2. What share of value is in the terminal value, and how was it derived?
3. What are the implied terminal growth, ROIC and multiple?
4. Are growth and reinvestment linked? What ROIC path does the forecast imply?
5. Are margins consistent with the competitive position and peers?
6. Is the WACC built bottom-up with consistent inputs? Does it match market evidence?
7. Is the bridge complete?
8. Do the sensitivities show a range, and which inputs drive it?
9. Is the result consistent with market multiples, and if not, why?
10. Is the report transparent about limitations?

## 24.7 Valuation in negotiations and disputes

- **For buyers:** use the DCF to set a walk-away price: the value with realistic synergies shared with the seller. Calculate the *maximum* you can pay while earning your cost of capital.
- **For sellers:** use the DCF to articulate the story; defend it with evidence; know the buyer's likely synergies.
- **For tribunals and courts:** the valuer's duty is to the court. Courts scrutinise independence, methodology, internal consistency and reliance on market evidence; unexplained "adjustments" and results that move with the client's interests are damaging.

## 24.8 Keeping skills sharp

- **Back-test:** compare past valuations to what happened (growth, margins) and to later market prices.
- **Study market-implied expectations** regularly.
- **Learn from errors:** keep a log of assumptions that proved wrong and why.
- **Update data** (risk-free rates, ERP, betas, multiples) at each engagement; never recycle stale inputs.

## 24.9 A final word

DCF is not a machine that produces truth; it is a *discipline for thinking about value*. It forces an analyst to say what she believes about the future and to carry those beliefs through to a number, consistently. When it is done well, the valuation is less a pronouncement than an argument: *here is what must be true for this business to be worth this much, and here is how confident we are.* The reader may disagree with the assumptions — and the model should make that disagreement easy to express and to test. That is its real value.

## Chapter 24 summary

- Know the twenty most common errors; most are consistency violations.
- Build the model like software; test it; have it independently reviewed.
- Report assumptions, ranges and limitations; keep independence.
- Challenge management plans against history and peers.
- DCF is a discipline for thinking, not a source of truth.

## Review questions

1. List five consistency checks that can be built into a DCF model.
2. How can a valuer guard against client bias?
3. What should an executive summary of a valuation report contain?
4. How would you test the credibility of a management plan?
5. Choose three errors from Section 24.1 and explain how each would distort value.

<div class="pagebreak"></div>
