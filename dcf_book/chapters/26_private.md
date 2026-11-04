# Chapter 26 — Private Companies, Minority Stakes and Disputes

Most businesses are not listed. Valuing a private company brings extra issues: no market price, no observable beta, owner-managers whose personal finances are entangled with the business, illiquid shares and often an adversarial setting — a family settlement, a shareholder dispute, a tax assessment. This chapter collects the techniques that adapt DCF to these situations.

## 26.1 What changes for a private company

| Issue | Listed company | Private company |
|-------|----------------|-----------------|
| Price signal | Daily market price | None; transactions rare |
| Beta | Regression available | Bottom-up from peers only |
| Information | Audited, regulated disclosures | Variable quality; management accounts |
| Owner involvement | Professional management | Owner-managers; key-person risk |
| Liquidity | High | Low; marketability discount |
| Control | Dispersed ownership | Often concentrated; control matters |
| Governance | Board, regulations | Informal; related-party dealings |
| Capital structure | Policy-driven | Ad hoc; sometimes all-equity or family loans |

## 26.2 Normalising a private company's financials

Before forecasting, adjust history for the distortions common in owner-run businesses (see Chapter 8):

1. **Owner compensation** — replace actual with market-rate salary for the role(s) performed. If the owner works 70 hours a week for ₹12 lakh and a hired CEO would cost ₹60 lakh, deduct the difference.
2. **Personal and discretionary expenses** run through the company (vehicles, travel, family salaries not working in the business) — add back.
3. **Related-party transactions** at non-market terms (rent paid to the owner's other entity, purchases from a family firm) — restate at market prices.
4. **Non-operating assets** (land, personal investments, loans to relatives) — remove income and value separately.
5. **Revenue recognition and accounting practice** — cash-basis or tax-driven accounting may need conversion to accrual.
6. **Unrecorded liabilities** — leave encashment, gratuity, deferred taxes, disputed statutory dues.
7. **Under-investment** — maintenance capex deferred to inflate profits.

### 26.2.1 Key-person dependence
If revenue depends on a few relationships held by the owner, value depends on whether they will stay and whether they can be transferred. Reflect this in scenarios (e.g., 20% revenue loss over two years if the key person leaves) or in a transition arrangement priced into the deal (earn-out, non-compete).

## 26.3 The discount rate for private companies

- **Risk-free rate and ERP:** as for public companies.
- **Beta:** bottom-up from listed peers, un-levered, re-levered at the target (industry-average) capital structure of the private firm — not its current, possibly idiosyncratic one.
- **Size premium:** applied if justified by data (small private firms are riskier than large listed peers).
- **Company-specific risk:** prefer scenarios; if an add-on is used, quantify and justify (key-person, concentration).
- **Cost of debt:** the firm's actual borrowing rate on a normalised basis (a family loan at 0% is not a market rate).

**Total beta.** For an *undiversified* owner, the relevant risk is total risk, not just market risk. *Total beta = Market beta ÷ Correlation of the firm with the market.* If market beta is 0.9 and the correlation is 0.5, total beta = 1.8 — double. This gives an **investment value to that specific owner**, not a fair market value. Fair market value assumes a hypothetical willing buyer who is diversified.

## 26.4 Discounts and premiums: a coherent framework

Value measurements pass through several levels:

| Level | What it values | Adjustment to move to next level |
|-------|----------------|---------------------------------|
| **1. Control, marketable** | 100% of equity, freely tradable, controller can change policies | − Discount for lack of control (DLOC) if valuing a minority |
| **2. Minority, marketable** | A non-controlling stake that could be sold on an active market | − Discount for lack of marketability (DLOM) if the shares are illiquid |
| **3. Minority, non-marketable** | A non-controlling stake in a private company | |

*Which level did the DCF produce?* If the forecast is the management plan under current policies (no restructuring upside) and the discount rate is a public-market rate, the result is close to **Level 2** (minority, marketable). If it includes buyer-specific improvements, it moves toward Level 1. The valuer must state the level and apply only the adjustments that bridge to the level of the interest being valued.

### 26.4.1 DLOC
The reciprocal of the control premium: **DLOC = 1 − 1/(1 + control premium)**. A 30% control premium → 23.1%. Premiums derived from public-company takeovers include synergy and are not pure "control". Use them with caution; the actual value of control depends on how much the controller can improve the business and how easily.

### 26.4.2 DLOM: methods
Several approaches estimate how much less an unlisted stake is worth because it cannot be sold quickly.

1. **Restricted-stock studies.** Compare the price of restricted shares of listed companies (which cannot be sold for a period) with the market price of freely tradable shares of the same company. Historical discounts were often 15–35% for older studies, lower in recent periods as holding periods shortened.
2. **Pre-IPO studies.** Compare prices at which private shares changed hands before an IPO with the IPO price. Discounts of 30–50% have been reported in older studies, but they conflate marketability with expected growth and information.
3. **Option-pricing models.** A holder who cannot sell for T years is like a holder who *buys a protective put* with maturity T: the put's cost approximates the loss of marketability. For an at-the-money put on a stock with 35% volatility, risk-free 7% and 3-year restriction, the Black–Scholes put value is about **13%** of the stock price (see the table).
4. **Discounted expected holding costs and liquidity premium.** A model-based approach; less common.

| Put value as % of stock price (at-the-money, r = 7%) | 1 year | 2 years | 3 years | 5 years |
|-------------------------------------------------------|-------:|--------:|--------:|--------:|
| Volatility 25% | 6.6% | 7.6% | 7.8% | 7.4% |
| Volatility 35% | 10.3% | 12.4% | 13.3% | 13.6% |
| Volatility 45% | 14.0% | 17.3% | 18.9% | 19.8% |

The protective-put model gives the *upper* end for an investor with certainty of no sale; many practitioners cross-check it with empirical studies.

### 26.4.3 Factors that affect DLOM
Expected holding period; volatility of the business; dividend payout (a high payout reduces the need to sell); size of the block; transfer restrictions; prospects of an IPO or sale; information quality; whether the interest has put rights or tag-along/drag-along rights.

### 26.4.4 Worked example
A DCF gives equity value of ₹1,000 crore for a closely held company (Level 2: minority, marketable). A promoter holds 10%; the valuation is for a gift of that stake.

- Pro-rata value: ₹100 crore.
- DLOM selected at 20% (between the restricted-stock and option-model indications) → **₹80 crore**.

If instead a strategic buyer acquires 100% in an arm's-length negotiated deal, the price is based on the *control* value, with no DLOM; synergies enter via the strategic premium.

## 26.5 Applying standards in disputes

Courts and tribunals approach valuation differently from commercial buyers.

- **Oppression and mismanagement; buy-out of a minority:** fair value is typically computed *without* a minority discount, because the minority is being compelled out. A marketability discount may also be rejected.
- **Dissenting shareholders in mergers:** fair value in appraisal proceedings; method and inputs scrutinised.
- **Family settlements:** often negotiated; valuation seeks a neutral reference with documented method.
- **Tax matters:** the statutory method may be prescribed (for example, rules for valuing unquoted shares); where a choice exists, consistency and documentation matter.
- **Matrimonial and succession cases:** valuation of a business interest as part of a division of property; standard-of-value rules depend on jurisdiction.

In each context the valuer's duty runs to the tribunal, and the court will examine independence, internal consistency and reliance on market evidence.

## 26.6 Employee stock option plans (ESOPs) in private companies

Ind AS 102 requires the grant-date **fair value** of employee options to be expensed over the vesting period. Steps:

1. Determine the **fair value of the underlying share** at grant date (DCF/market approach for a private company).
2. Choose the **option-pricing model** (Black–Scholes or binomial/lattice).
3. Inputs: share price, exercise price, expected term, risk-free rate, expected volatility (from peers for a private company), dividend yield.
4. Adjust for forfeitures and service/performance conditions.

*Example.* Share price ₹100, exercise price ₹100, expected term 4 years, volatility 40%, risk-free 7%: Black–Scholes call ≈ ₹41 (about 41% of the share price; a long term and high volatility make options valuable). Granting 10 lakh options implies a fair-value expense of about ₹4.1 crore over the vesting period.

## 26.7 Valuation date and subsequent events

The valuation date fixes the information set: only information known or knowable at that date should be used. Events after the date are relevant only if they provide evidence of conditions that existed at the date; otherwise they should be disclosed but not reflected. Pay attention in fast-moving situations (a regulatory announcement a week after the date, a customer loss) and in tax or legal settings where dates are prescribed.

## 26.8 A private-company valuation checklist

1. Standard and premise of value stated; interest (100%, minority, specific shares) defined.
2. Financials normalised, with owner and related-party adjustments supported.
3. Peers selected on business, size and risk; betas bottom-up.
4. Cash-flow forecast with key-person and concentration risks in scenarios.
5. Level of value identified; DLOC/DLOM applied only if appropriate, with support.
6. Cross-check with market multiples (adjusted for size and liquidity) and transaction data.
7. Waterfall for multiple share classes.
8. Subsequent events and valuation-date discipline.
9. Complete documentation and a transparent statement of limitations.

## Chapter 26 summary

- Normalise owner-driven distortions; scrutinise key-person risk.
- Build beta bottom-up; the cost of capital should reflect a hypothetical diversified buyer for fair market value.
- Distinguish control vs minority and marketable vs non-marketable levels; apply discounts only as needed.
- DLOM tools: restricted-stock studies, pre-IPO studies, protective-put models.
- Dispute valuations often forbid minority and marketability discounts.

## Review questions

1. What is total beta, and when would it be used?
2. How do you estimate DLOM using an option model?
3. A DCF gives ₹500 crore on a minority-marketable basis. What is the value of a 20% unlisted stake with a 15% DLOM?
4. What normalisations would you make for an owner-managed distribution business?
5. Why do courts often disallow minority discounts in oppression cases?

<div class="pagebreak"></div>
