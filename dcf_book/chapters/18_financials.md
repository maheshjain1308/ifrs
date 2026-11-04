# Chapter 18 — Valuing Banks, NBFCs and Insurers

Financial institutions are different. Debt is not a source of capital to be netted off; it is the raw material from which the business manufactures loans. Interest expense is an operating cost; working capital and capex are hard to define; and regulation caps leverage. FCFF and enterprise value, so useful elsewhere, are ill-defined. Valuation focuses on *equity* directly.

## 18.1 Why FCFF fails for banks

- Deposits and borrowings fund lending; separating "operating" from "financing" is impossible.
- Net interest income, not EBIT, is the heart of earnings.
- "Reinvestment" is growth in loans and the *regulatory capital* needed to support it, not capex and working capital.
- Cash balances are part of the business (liquidity reserves), not surplus.

Hence the main approaches are **dividend/FCFE models**, the **excess-return (residual-income) model** and **price-to-book (P/B) / P/E** multiples tied to ROE.

## 18.2 Cash flow to equity for a bank

**FCFE = Net income − Increase in regulatory equity required**

Regulatory equity required = (Regulatory capital ratio, e.g., CET1 + buffers) × Risk-weighted assets (RWA). When the loan book grows, RWA grows, and the bank must retain earnings to maintain capital ratios. Anything above that is distributable.

**Example (illustrative bank, ₹ crore).** Book equity ₹10,000; ROE 15%; growth in loans and equity 12% a year for five years, then 7% stable. Ke = 13%.

| Year | Opening equity | Net income (15%) | Growth in equity needed | FCFE | PV @13% |
|-----:|---------------:|-----------------:|------------------------:|-----:|--------:|
| 1 | 10,000 | 1,500 | 1,200 | 300 | 265 |
| 2 | 11,200 | 1,680 | 1,344 | 336 | 263 |
| 3 | 12,544 | 1,882 | 1,505 | 376 | 261 |
| 4 | 14,049 | 2,107 | 1,686 | 421 | 258 |
| 5 | 15,735 | 2,360 | 1,888 | 472 | 256 |

PV of explicit FCFE ≈ ₹1,304 crore.

Terminal year (year 6): equity at the end of year 5 = 17,623; net income in year 6 = 15% × 17,623 = 2,644. At stable growth of 7% and ROE of 15%, the bank can distribute only the fraction 1 − g/ROE = 1 − 0.07/0.15 = 53.3% of earnings; the rest must be retained to fund growth. So **FCFE₆ = 2,644 × 0.5333 = 1,410**. Terminal value = 1,410 ÷ (0.13 − 0.07) = 23,498; PV = 23,498 ÷ 1.13⁵ = **12,754**.

**Equity value = 1,304 + 12,754 = ₹14,058 crore → P/B = 1.41×.**

A common error is to assume a near-full payout in the terminal year; at 7% growth and 15% ROE a bank cannot pay out much more than half its earnings and still keep its capital ratios.

## 18.3 Excess-return model

**Equity value = Book equity + PV of excess returns**

**Excess return in year t = (ROEₜ − Ke) × Book equityₜ₋₁**

For a stable bank growing at g with a constant ROE:

**P/B = (ROE − g) ÷ (Ke − g)**

With ROE 15%, Ke 13%, g 7%: P/B = (0.15 − 0.07)/(0.13 − 0.07) = **1.33×**. The two-stage example above (1.41×) is higher because the first five years' 12% growth at ROE > Ke adds value.

**Insights from P/B = (ROE − g)/(Ke − g):**
- If ROE = Ke, P/B = 1 regardless of growth.
- If ROE > Ke, P/B > 1 and rises with growth.
- If ROE < Ke, P/B < 1 and falls with growth — growth destroys value.
- A bank with ROE 10% and Ke 13% should trade below book. Many public-sector banks with weak returns do.

## 18.4 Key drivers for banks and NBFCs

| Driver | Meaning |
|--------|---------|
| Net interest margin (NIM) | (Interest income − interest expense) ÷ average earning assets |
| Credit cost | Provisions and write-offs ÷ average loans |
| Cost-to-income ratio | Operating expenses ÷ total income |
| Capital adequacy (CET1, Tier 1, total CRAR) | Regulatory capital ÷ RWA |
| Loan growth and mix | Retail, corporate, MSME, unsecured |
| Asset quality: GNPA/NNPA, provision coverage | Predicts credit cost |
| CASA ratio and deposit franchise | Funding cost advantage |
| Return on assets (ROA) and ROE | Combine margin, cost, credit and leverage |
| Fee income share | Less capital-intensive earnings |

**DuPont for banks:** ROE = ROA × Equity multiplier (Assets ÷ Equity). Regulation limits the multiplier, so ROA and credit cost determine ROE.

## 18.5 Cost of equity for financial firms

- **Beta:** bottom-up from listed banks; *do not un-lever* using debt/equity as for industrial firms, because debt is operating. Use observed equity betas of comparable banks (adjusting for differences in leverage via the regulatory capital ratio).
- **Regulatory capital** substitutes for the debt/equity ratio in determining equity risk.
- Typical Indian private banks: beta 0.9–1.2; PSU banks higher and volatile; NBFCs 1.0–1.5. These depend heavily on period.

## 18.6 NBFCs and housing finance companies

Value in the same way (excess-return/FCFE), recognising: (i) higher leverage than banks (but regulatory limits), (ii) funding-cost sensitivity (wholesale funding), (iii) asset-liability mismatch risk, (iv) asset-quality cycles. The *growth capital* constraint is often decisive: an NBFC that must raise equity to grow has lower FCFE — a high-growth lender can have low or negative FCFE even with high ROE.

## 18.7 Insurance companies

Insurers hold *float* — premiums collected before claims are paid. Value approaches:
- **Embedded value (EV) and appraised value** for life insurers: embedded value = adjusted net worth + value of in-force business (PV of future profits from existing policies); appraisal value = embedded value + value of new business (VNB × multiple).
- **Excess-return / P/B** for general insurers, with focus on combined ratio (< 100% means underwriting profit), investment yield and solvency margin.
- Discount rates for embedded value reflect risk discount rates (RDR) disclosed by insurers; compare across companies.

## 18.8 Asset-management and broking firms

These are asset-light. Use DCF/FCFE (little reinvestment) or P/E tied to growth in AUM or volumes; operating leverage and market cycles drive volatility. Key value drivers: AUM growth, fee yield, cost ratio.

## 18.9 Pitfalls

1. Applying FCFF/WACC to a bank and subtracting deposits as debt.
2. Using ROE higher than sustainable (reflecting one-off recoveries) in the terminal period.
3. Ignoring regulatory capital needs when computing FCFE.
4. Ignoring asset-quality stress (credit costs rise in downturns).
5. Using P/B multiples without regard to ROE-versus-Ke.
6. Terminal ROE equal to current ROE for a bank whose margins will be competed away.

## Chapter 18 summary

- For financial firms value *equity* directly: FCFE after regulatory capital retention, or the excess-return model.
- P/B = (ROE − g)/(Ke − g); ROE versus Ke determines whether growth adds value.
- Regulatory capital replaces working capital and capex as the "reinvestment".
- Insurers: embedded value and appraisal value; general insurers: P/B and combined ratio.

## Review questions

1. Why is FCFF unsuitable for a bank?
2. Compute P/B for ROE 18%, Ke 14%, g 6%.
3. What is the effect on P/B of growth when ROE < Ke?
4. How does regulatory capital constrain FCFE?
5. List the key drivers of an NBFC's ROE.

<div class="pagebreak"></div>
