# Chapter 16 — Cross-Checks: Multiples, Reverse DCF and Triangulation

No valuation should stand on a single method. DCF should be tested against what the market pays for similar assets, and against the market price itself. This chapter shows how to do both, and how to reconcile the answers.

## 16.1 Relative valuation in brief

**Relative valuation** estimates value by applying a multiple, derived from comparable companies or transactions, to a metric of the subject company.

| Multiple | Formula | Best for | Pitfalls |
|----------|---------|----------|----------|
| P/E | Price ÷ EPS | Stable, profitable firms | Leverage-sensitive; distorted by one-offs |
| EV/EBITDA | EV ÷ EBITDA | Capital-intensive, differing leverage | Ignores capex; lease treatment; EBITDA quality |
| EV/EBIT | EV ÷ EBIT | When D&A differs by policy | |
| EV/Sales | EV ÷ Revenue | Loss-making, early stage | Ignores margin differences |
| P/B | Price ÷ Book equity | Banks, asset-heavy firms | Book value is accounting-based |
| PEG | P/E ÷ growth | Growth comparisons | Growth rate estimates are noisy |
| EV/Invested capital | EV ÷ capital | Capital-intensive; links to ROIC | |
| EV/Subscriber, EV/GMV | Sector-specific | Platforms/telecom | Weakly tied to profit |

### 16.1.1 Process
1. **Select comparables** by business, size, growth, margin, risk, geography.
2. **Gather clean data:** adjust for one-offs and leases, align fiscal years (calendarisation).
3. **Compute multiples** (trailing and forward).
4. **Choose a representative multiple** (median, range) with adjustments for differences in growth and risk.
5. **Apply** to the subject's *normalised* metric and bridge to equity.
6. **Cross-check** that the resulting value is consistent with the subject's fundamentals.

### 16.1.2 Fundamentals behind multiples
A multiple is a compressed DCF. For a stable firm:

**EV/NOPAT (forward) = (1 − g/ROIC) ÷ (WACC − g)**

**P/E = Payout ratio × (1 + g) ÷ (Ke − g)** (for a stable-growth firm)

These show why P/E rises with growth, falls with risk, and rises with returns on new investment. Using these formulas, one can test whether a peer's multiple is "justified" by its growth and ROIC and whether it can be applied to the subject.

*Illustration.* Meridian's terminal-state forward EV/NOPAT = (1 − 0.3333) ÷ 0.06225 = 10.7×. A packaged-food leader trading at 40× forward NOPAT is priced for far higher growth or ROIC, or for a lower discount rate, than Meridian's terminal state — it is not a pure "comparable".

## 16.2 Precedent transactions

Multiples paid in acquisitions of similar companies, typically EV/EBITDA or EV/Sales. They reflect *control* premiums and *synergies* paid by those specific buyers, and market conditions at the time. Use as a cross-check for control valuations; adjust for deal size, timing, and synergy sharing.

## 16.3 Reverse DCF

A reverse DCF takes the **market price** as given and asks what the market is *implicitly* assuming.

### 16.3.1 Procedure
1. Build the DCF with base assumptions.
2. Set the equity value per share equal to the market price.
3. Solve, one at a time, for each key variable the value that reconciles the model to the price.
4. Judge whether the implied assumption is plausible.

### 16.3.2 Meridian reverse DCF
Suppose the stock were trading at ₹58 (about 13% above the DCF value). Holding other inputs at base, the market price implies *any one* of:

| Implied variable | Base | Implied by ₹58 |
|------------------|-----:|---------------:|
| WACC | 11.23% | 10.62% |
| FY31 EBIT margin | 14.5% | 16.4% |
| Annual revenue growth, FY27–31 | 14→8% | +3.8 pts higher each year |
| Terminal growth | 5.0% | 6.5% |

Reading: the market price is not outlandish. It could be justified by a 0.6-point lower discount rate, a 1.9-point higher terminal margin, or terminal growth near the risk-free rate. A price of ₹58 asks for either more optimism on margin than the plan assumes or a lower required return — judgements an investor can weigh.

### 16.3.3 Uses
- **Investing:** compare implied expectations with your own.
- **M&A:** what would we need to believe to pay the asking price?
- **Fairness opinions:** assess the reasonableness of a proposed exchange ratio.
- **IPO pricing:** test the issue price against underlying growth and margin needs.

## 16.4 Reconciling DCF with multiples

If DCF says ₹51 and peers' P/E implies ₹70, investigate rather than average.

**Questions to ask**
1. Does the DCF embed lower growth than the peer group's multiple embeds? Compare implied growth.
2. Does the DCF use a higher WACC than the market-implied one? Compare the market-implied cost of capital.
3. Are peers genuinely comparable? Check ROIC, growth, quality, scale.
4. Is the sector at a cyclical or sentiment peak?
5. Is the DCF terminal assumption conservative relative to the market's perception of durable moats?

The reconciliation itself is valuable: it identifies exactly which assumptions drive the difference.

## 16.5 Triangulation and weighting

A valuation report usually ends with several indications of value:

| Method | Indication (₹/share) | Weight |
|--------|---------------------:|-------:|
| DCF (base, WACC ±0.5, g ±0.5) | 45–59 (point 51) | 50% |
| Trading multiples (P/E, EV/EBITDA) | 45–61 | 30% |
| Precedent transactions (illustrative data) | 50–64 | 20% |

The weights reflect reliability, data quality and the purpose; they are a judgement, and the weighted average is not "more accurate" than any individual method. Many valuers avoid mechanical averaging and instead conclude within the overlap of the most reliable ranges. Where one method is clearly more appropriate (e.g., DCF for a business with stable cash flows; NAV for a holding company) it should carry the conclusion.

## 16.6 The football field

A *football-field chart* plots each method's range as a horizontal bar on a common axis of value per share, with the market price or offer price as a vertical line. It makes overlaps and outliers visible at a glance. Typical bars: 52-week trading range; analyst target prices; trading multiples range; precedent transactions; DCF (WACC/g sensitivities); DCF (scenarios); LBO analysis (the maximum price a financial buyer could pay for a target IRR).

## 16.7 LBO analysis as a cross-check

An LBO analysis computes the price a financial sponsor could pay to achieve a required IRR (say 20–25%) over a 5-year hold with a specified leverage. It sets a *floor* on what a financial buyer would pay and cross-checks a strategic valuation. A simple version: forecast FCFF, assume debt at 4–5× EBITDA, repay with cash flow, exit at a multiple, and solve for the entry price giving the target IRR.

## 16.8 Sum-of-the-parts (SOTP)

For conglomerates, value each business separately by the most suitable method (DCF or multiples), sum them, subtract unallocated corporate costs and net debt, and add non-core assets. Then compare with the consolidated DCF. The *conglomerate discount* (the gap between SOTP and market value) often reflects capital-allocation inefficiency, governance concerns, or complexity — not necessarily mispricing.

## 16.9 Checklist: does the answer make sense?

1. Implied multiples in line with comparable ranges (or the difference explained).
2. ROIC path consistent with competitive advantage.
3. Growth ≤ market growth in the long run; terminal growth ≤ Rf.
4. Terminal value share of EV disclosed and reasoned.
5. Cash conversion consistent with history.
6. Bridge items complete.
7. Value within the football-field overlap or the gap explained.
8. Market-implied expectations (reverse DCF) compared and discussed.

## Chapter 16 summary

- Multiples are compressed DCFs; understand what drives them before applying.
- Reverse DCF reveals what the market believes; compare it to your own beliefs.
- Reconcile — don't average — when methods disagree.
- Present ranges on a football field with the price marked.
- Meridian at ₹58 implies WACC 10.6%, margin 16.4% or g 6.5%.

## Review questions

1. Derive the stable-growth P/E formula from the dividend discount model.
2. What is a reverse DCF, and why is it useful in negotiation?
3. Why should multiples from a growth leader not be applied directly to a slower-growing firm?
4. What is the difference between trading and transaction multiples?
5. What are the risks of mechanically weighting valuation methods?

<div class="pagebreak"></div>
