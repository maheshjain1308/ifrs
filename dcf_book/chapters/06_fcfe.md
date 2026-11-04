# Chapter 6 — Free Cash Flow to Equity and the Dividend Discount Model

Chapter 5 valued the whole firm. This chapter values the *equity directly*. FCFE and DDM matter for banks and financial companies, for firms with stable leverage, for dividend-paying blue chips, and as a check on FCFF valuations.

## 6.1 Defining FCFE

**FCFE = Net income + D&A − Capex − ΔNWC + Net borrowing**

This is the cash that could be paid to shareholders *after* everything else — operations, reinvestment, debt service — has been taken care of. It is a *potential* dividend. Actual dividends may be lower or higher.

**Net borrowing** = new debt raised − principal repaid. If the firm maintains a constant debt-to-capital ratio, then net borrowing is a fixed fraction of net reinvestment, and the formula simplifies:

**FCFE = Net income − (1 − δ) × Net reinvestment**

where δ is the debt ratio applied to *new* investment (the share of reinvestment funded by debt) and net reinvestment = capex − D&A + ΔNWC. The equity funds only the (1 − δ) fraction.

### Example
Net income 150, capex 200, depreciation 80, ΔNWC 30. Net reinvestment = 200 − 80 + 30 = 150. If 40% of net reinvestment is debt-funded: FCFE = 150 − 0.6 × 150 = **60**. Check using the long formula: 150 + 80 − 200 − 30 + 60 (net borrowing = 0.4 × 150) = 60 ✔.

## 6.2 The FCFE valuation

**Equity value = Σ FCFEₜ ÷ (1 + Ke)ᵗ + Terminal value ÷ (1 + Ke)ⁿ**

where the terminal value is **FCFEₙ₊₁ ÷ (Ke − g)**. Ke is the cost of equity, *consistent with the leverage assumed in the forecast*. If leverage changes during the forecast, Ke changes too (through re-levered beta).

The valuation gives equity value directly; subtract nothing for debt. Add the value of non-operating assets *only if* their cash flows are not in net income (i.e., if investment income is excluded).

## 6.3 Terminal FCFE and the sustainable growth rate

Terminal-year FCFE must be consistent with stable growth. In stable growth, expected growth in net income is:

**g = Retention ratio × Return on equity** — the fundamental growth equation.

If a firm retains 40% of earnings and earns 15% ROE, g = 6%. FCFE in the terminal year, with payout ratio = 1 − g/ROE:

**Terminal FCFE = Net income × (1 − g/ROE)**

(for a firm that maintains constant leverage, so that the equity is financing exactly the retained fraction of net income). This is the FCFE counterpart of the FCFF formula FCFF = NOPAT × (1 − g/ROIC) of Chapter 12.

## 6.4 The dividend discount model

The DDM discounts *actual or expected dividends*:

**P₀ = D₁/(1+Ke) + D₂/(1+Ke)² + …**

### 6.4.1 Gordon growth form
For a stable firm: **P₀ = D₁ ÷ (Ke − g)**

*Example.* D₁ = ₹40; Ke = 12%; g = 6%. P₀ = 40/0.06 = ₹666.7. If the market price is ₹800, the market either expects a higher g, lower Ke, or both. Solving for the implied Ke at P = 800 and g = 6%: Ke = 40/800 + 0.06 = 11%.

### 6.4.2 Two-stage DDM
Dividends grow at g₁ for n years, then at the stable rate g₂:

**P₀ = Σₜ₌₁ⁿ D₀(1+g₁)ᵗ/(1+Ke)ᵗ + [D_(n+1)/(Ke − g₂)] ÷ (1+Ke)ⁿ**

*Example.* D₀ = 10; g₁ = 15% for 5 years; g₂ = 5%; Ke = 12%. Dividends: 11.5, 13.23, 15.21, 17.49, 20.11. Discount factors at 12%: 0.8929, 0.7972, 0.7118, 0.6355, 0.5674. PVs: 10.27, 10.55, 10.83, 11.12, 11.41 → sum **54.18**. D₆ = 20.11 × 1.05 = 21.12; TV = 21.12/0.07 = 301.7; PV = 301.7 × 0.5674 = 171.2. **P₀ ≈ ₹225.4.**

### 6.4.3 When DDM fails
- Firms that don't pay dividends or pay far less than FCFE: DDM undervalues unless retained cash is valued separately. The remedy is FCFE.
- Firms that pay out more than they earn (borrowing to pay): DDM overstates.
- Firms with highly irregular dividends.
- Firms in which control or buyback policy changes the payout.

## 6.5 Financial institutions

For banks, NBFCs and insurers, "debt" is the raw material of the business: deposits and borrowings fund loans, and interest expense is an operating cost. FCFF and enterprise value are therefore ill-defined. Valuation focuses on equity: either DDM or an *excess return model* in which **Value of equity = Book equity + PV of expected excess returns (ROE − Ke) × book equity**. The regulatory capital requirement means cash flow to equity is limited: FCFE = Net income − retained earnings needed to keep regulatory capital ratios as assets grow. Chapter 18 develops this fully.

## 6.6 FCFE versus FCFF: the reconciliation

A well-built model should produce the same equity value both ways, within sampling noise, if the assumptions are consistent. The reasons they often don't:

1. **Different debt assumptions.** FCFF/WACC implicitly assumes a target capital structure, maintained through time. FCFE models the *actual* debt schedule. If debt is paid down while WACC keeps assuming a constant ratio, the two methods diverge.
2. **Inconsistent cost of equity.** Ke used in the FCFE model must correspond to the equity beta at the modelled leverage; the WACC's embedded Ke uses target leverage.
3. **Inconsistent terminal growth or reinvestment.**
4. **Different treatment of the cash balance.**

Differences of a few percent are normal; large gaps indicate an error. Reconciling them is one of the best audits of a DCF.

## 6.7 Worked example: Meridian as an FCFE model

Take Meridian with year-1 net income. Interest on 600 debt at 9% = 54 (assume debt grows with the business at 20% of capital).

Year 1: EBIT 285.0. Debt rises from 600 to ... (we hold D/V at 20% of *invested capital*, so net borrowing = 20% × net reinvestment = 0.2 × 140 = 28). Interest at 9% on average debt ≈ 0.09 × 614 ≈ 55.3; round to 55.0. PBT = 230.0; tax 25% = 57.5; NI = 172.5.

FCFE = NI − (1 − δ) × net reinvestment = 172.5 − 0.8 × 140 = **60.5**. Cross-check with FCFF: FCFF 73.75 − interest after tax (55 × 0.75 = 41.25) + net borrowing 28 = **60.5** ✔.

The full FCFE valuation, discounting at Ke = 12.34%, gives a result close to the FCFF value; the small difference is due to the simplified debt schedule. We leave the detail to the exercises.

## 6.8 Dividends, buybacks and payout

Total *cash returned* to shareholders = dividends + buybacks. Using dividends alone understates what shareholders receive when buybacks are significant. The "augmented" DDM uses total payout. For Indian companies, buyback tax and dividend tax regimes affect both firm and shareholder; a valuation at the company level typically ignores shareholder-level taxes unless the standard of value requires them.

## 6.9 Relating the models

| Model | Cash flow | Discount rate | Output |
|-------|-----------|---------------|--------|
| FCFF | To all capital providers | WACC | Enterprise value |
| FCFE | To shareholders (potential) | Ke | Equity value |
| DDM | Dividends paid | Ke | Equity value |
| Excess return | Book value + PV of excess returns | Ke | Equity value |

Under consistent assumptions, all four give the same equity value. They are different windows onto the same house.

## Chapter 6 summary

- FCFE = net income − (1 − δ) × net reinvestment, where δ is the debt share of new investment.
- Discount FCFE at Ke; the result is equity value directly.
- Stable-growth FCFE = NI × (1 − g/ROE).
- DDM is the special case of FCFE paid out; it fails when payout ≠ FCFE.
- Banks and NBFCs are valued with equity-based models.
- FCFE and FCFF should reconcile; gaps expose inconsistencies.

## Review questions

1. Compute FCFE: NI 200; depreciation 60; capex 140; ΔNWC 20; borrowing 50; repayment 30.
2. Why must the cost of equity be consistent with leverage in an FCFE model?
3. If ROE is 18% and g is 6%, what payout ratio is sustainable?
4. When is DDM inappropriate?
5. Why are FCFF models ill-suited to banks?

<div class="pagebreak"></div>
