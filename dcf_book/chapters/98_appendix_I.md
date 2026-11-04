# Appendix I — Projects and Exercises for Self-Study {.unnumbered}

Reading builds understanding; building models builds skill. These projects take a reader from a first spreadsheet to a defensible valuation. Each has a goal, steps and a self-check.

## Project 1 — Rebuild Meridian from scratch (2–3 hours)

**Goal.** Reproduce the Chapter 14 valuation in a spreadsheet.

**Steps.**
1. Set up an Inputs sheet with growth, margins, tax, sales-to-capital, WACC inputs and bridge items.
2. Build the revenue → EBIT → NOPAT → reinvestment → FCFF forecast.
3. Compute WACC from the inputs (Chapter 11).
4. Discount FCFF; compute the terminal value from NOPAT × (1 − g/ROIC) ÷ (WACC − g).
5. Bridge to equity and divide by shares.

**Self-check.** FCFF FY27 = 73.7; EV = ₹2,913.3 crore; value per share ₹51.27.

**Extensions.** Switch to mid-year discounting (expect about ₹54.45); add a WACC × g data table; add a scenario selector.

## Project 2 — Bottom-up beta (1–2 hours)

**Goal.** Estimate a cost of equity for a private company.

**Steps.**
1. Pick five listed peers; obtain regression betas (weekly, 2–5 years against a broad index), market capitalisations and debt.
2. Un-lever each beta using its own D/E and tax rate.
3. Compute the average and median; examine outliers.
4. Re-lever at a target D/E; compute Ke with a current risk-free rate and ERP.
5. Write one paragraph justifying every input.

**Self-check.** Unlevered betas should cluster; if one peer differs sharply, investigate its business mix or leverage before dropping it.

## Project 3 — Reverse DCF on a listed company (3 hours)

**Goal.** Determine what the market expects.

**Steps.**
1. Choose a listed company with data you can obtain (annual reports, consensus forecasts).
2. Build a simple five-year FCFF model with revenue growth, margin, tax and a sales-to-capital ratio.
3. Compute WACC; use a terminal ROIC consistent with your view of the moat.
4. Solve (goal seek) for each of: margin, growth uplift, WACC and terminal growth that reconciles to the market price.
5. Judge plausibility of each implied assumption.

**Self-check.** Your conclusion should be a sentence of the form: "At today's price the market assumes…, which we consider [plausible/aggressive/conservative] because…".

## Project 4 — The integrated model (6–8 hours)

**Goal.** Build the three-statement model of Chapter 29 and reconcile FCFF and FCFE.

**Steps.**
1. Start with Meridian's opening balance sheet.
2. Build the schedules: fixed assets, NWC, debt, equity, tax.
3. Create the income statement, cash-flow statement and balance sheet; check the balance.
4. Compute FCFF and FCFE; reconcile them.
5. Value by FCFF/WACC and by FCFE/Ke; explain any difference.
6. Re-run the FCFE model with debt at 20% of market EV and confirm the match.

**Self-check.** Balance check zero in every year; FCFE = ₹61.2 crore in FY27 under the book-debt policy; equity value ≈ ₹2,564 crore under the market-debt policy.

## Project 5 — A mini valuation report (8 hours)

**Goal.** Write a valuation report of at least ten pages.

**Contents.** Executive summary; engagement terms; business and industry; historical analysis and normalisation; methodology; forecast and rationale; WACC; terminal value; DCF exhibits; bridge; sensitivity and scenarios; cross-checks; conclusion and range; limitations.

**Rules.** Every number has a source; every key assumption has a rationale; the TV share is disclosed; the range is shown with the drivers.

**Self-check.** Hand it to a colleague and ask them to find the three weakest assumptions. If they find them in the first read, the report is transparent.

## Project 6 — Back-test (variable)

**Goal.** Learn from the past.

**Steps.**
1. Choose a company and a valuation date 5–8 years ago.
2. Build a valuation using only information available then.
3. Compare forecasts with outcomes: growth, margin, ROIC, share price.
4. Identify which assumptions were wrong and why: macro surprise, competition, management, your own bias.
5. Write down three lessons.

**Self-check.** Did the actual value fall within your sensitivity range? If not, what would a wider range have been?

## Project 7 — Stress test the terminal value (1 hour)

**Goal.** See how much of a valuation depends on the terminal assumptions.

**Steps.**
1. Take any DCF you have built.
2. Compute the TV share of EV.
3. Compute EV with (a) terminal ROIC = WACC; (b) terminal growth = half your base; (c) terminal margin = peer median.
4. Rank the three by effect on value.

**Self-check.** If (a) cuts value by more than 25%, your valuation rests heavily on assumed excess returns — state it prominently.

## A suggested study plan

| Week | Reading | Practice |
|------|---------|----------|
| 1 | Chapters 1–3 | Appendix B problems 1–6 |
| 2 | Chapters 4–6 | Appendix B problems 7–10; Project 1 (first half) |
| 3 | Chapters 7–8 | Project 1 (second half) |
| 4 | Chapters 9–11 | Appendix B 11–15; Project 2 |
| 5 | Chapters 12–13 | Appendix G 1–7 |
| 6 | Chapters 14–16 | Appendix G 8–14; Project 3 |
| 7 | Chapters 17–21 | Chapter review questions |
| 8 | Chapters 22–24 | Project 5 (first draft) |
| 9 | Chapters 25–28 | Project 7 |
| 10 | Chapters 29–33 | Project 4; Project 6 |

<div class="pagebreak"></div>
