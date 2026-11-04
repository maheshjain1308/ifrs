# Part IV — Building and Testing the Valuation {.part}

<div class="pagebreak"></div>

# Chapter 13 — From Enterprise Value to Equity Value per Share

A DCF of FCFF produces *enterprise value* — the value of the operating business. But shareholders own the *equity*, and what matters to a buyer or a seller is the price per share. The step between the two — the **equity bridge** — is where many otherwise sound valuations lose money through omission or double-counting. This chapter lists every item that belongs in the bridge and shows how to treat it.

## 13.1 The bridge in one line

**Equity value = Enterprise value − Debt and debt-like claims − Preference capital − Non-controlling interests + Cash and non-operating assets**

and

**Value per share = Equity value attributable to common shareholders ÷ Fully diluted shares**

## 13.2 The golden rule of the bridge

> **An item belongs in the bridge if its value is not already in the FCFF being discounted.**

If an asset's income is excluded from FCFF (surplus cash, associate stakes, idle land), add its value. If a liability's cash outflows are excluded from FCFF (debt service, unfunded pension, lease payments treated as financing), deduct its value. If a cash flow is *inside* FCFF (operating lease rent when leases are treated as operating), do not deduct the liability. Every item must be treated exactly once.

## 13.3 Debt and debt-like claims

| Item | Treatment | Notes |
|------|-----------|-------|
| Bank loans, debentures, commercial paper | Deduct at **market value** (usually ≈ book) | Use the balance at the valuation date including accrued interest |
| Lease liabilities (Ind AS 116) | Deduct if EBITDA/FCFF are pre-lease-payments | Be consistent with WACC and multiples |
| Finance leases / hire purchase | Deduct | |
| Preference shares | Deduct at market or redemption value | |
| Convertible bonds | Deduct the debt component; treat the conversion option as dilution (see 13.7) | |
| Unfunded pension and gratuity deficit | Deduct post-tax deficit | Actuarial valuation; discount rate consistency |
| Deferred consideration, earn-outs payable | Deduct PV | Probability-weight contingent amounts |
| Provisions that will require cash (litigation, decommissioning) | Deduct PV if not in FCFF | Avoid double-counting if forecast cash flows include the payments |
| Dividends declared but unpaid | Deduct | |
| Overdue taxes and statutory dues | Deduct | |
| Guarantees given for others | Deduct the probability-weighted expected loss | Disclose the contingent exposure |
| Trade payables and operating accruals | **Do not deduct** | They are in working capital (FCFF) |
| Deferred tax liability | Usually not deducted if perpetual; deduct PV if reversing | See Chapter 5 |

## 13.4 Cash and non-operating assets

### 13.4.1 Cash
Add **surplus** cash and marketable securities. Operating cash needed to run the business is inside working capital and should not be added again. Two refinements:

- **Trapped cash.** Cash held in jurisdictions where repatriation is taxed or restricted is worth less than face value.
- **Minimum operating balance.** Treat as operating.

### 13.4.2 Non-operating investments
- **Listed investments:** at market value (post-tax if gains would attract tax on sale and a sale is realistic).
- **Unlisted investments, associates and joint ventures:** value separately by DCF or multiples; the share of profit must be excluded from EBIT. Value is share % × equity value of the associate (with any discount for lack of control or liquidity).
- **Surplus land and property:** market value less transaction cost and tax; exclude associated rental income from EBIT.
- **Loans receivable:** at fair value (credit-adjusted).
- **Tax assets** (carried-forward losses, MAT credit): PV of expected savings, if not already in FCFF.

### 13.4.3 Meridian's bridge items
- Debt: ₹600 crore (deduct).
- Surplus cash & equivalents: ₹150 crore (add).
- Long-term investments (non-operating, assumed fair value ≈ book): ₹100 crore (add).
- No preference capital or minority interest.

## 13.5 Non-controlling interests (minorities)

If the FCFF of the consolidated group includes 100% of a subsidiary that is only 70% owned, the equity bridge must remove the 30% claim:

**NCI value = Minority % × Equity value of the subsidiary** — ideally from a separate DCF or market multiple, not book value. Using book value of NCI from the balance sheet undervalues the claim when the subsidiary is highly profitable (and overstates it when it is not).

## 13.6 Associates, joint ventures and cross-holdings

For a 30% stake in an associate, *Ind AS* shows equity-accounted share of profit below operating profit. FCFF excludes it, so add: **% stake × equity value of the associate** (DCF/multiple), possibly discounted. Do not capitalise share of profit at the *parent's* WACC; the associate's own risk is what matters. Cross-holdings between group companies require care to avoid double counting.

## 13.7 Employee stock options and dilution

Existing options, warrants and convertibles are claims on equity.

### 13.7.1 Treasury-stock method (simple, approximate)
Diluted shares = Basic shares + Options × (1 − Strike ÷ Share price) for in-the-money options. This requires the share price — itself the output — so iterate.

### 13.7.2 Option-pricing method (better)
Value each option tranche with Black–Scholes or a binomial model (value > intrinsic value because of time value and volatility), then deduct the **total option value** from equity value before dividing by *basic* shares. Treats vested and unvested options consistently (unvested options may be probability-weighted for forfeiture).

### 13.7.3 Illustration (hypothetical extension to Meridian)
Assume Meridian has 2 crore outstanding options with an average strike of ₹30, and that equity value to all holders before options is ₹2,563.3 crore. Intrinsic value per option at the base-case price of ₹51.27 ≈ ₹21.3; total intrinsic ≈ ₹42.5 crore (an option-pricing model would give somewhat more because of time value, say ₹50 crore). Equity to common ≈ 2,563.3 − 50 = ₹2,513.3 crore, or **₹50.27 per share** over 50 crore basic shares, about 2% lower than ₹51.27. (The book's headline case has no outstanding options.)

> **Pitfall.** Ignoring *future* option grants. If ESOP expense is deducted in EBIT (as it should), future grants are already paid for in the cash flows; only *existing* options belong in the bridge.

## 13.8 Convertible instruments

A convertible debenture is part debt, part equity option. If conversion is far out of the money, treat as debt at its yield-adjusted value. If deep in the money, treat as equity (add shares, do not deduct the debt). In between, split into a straight-debt component and an option component and value the latter.

## 13.9 Control premiums and minority discounts

Standards of value (Chapter 1) determine whether further adjustment is needed.

- **DCF of the company's cash flows** typically gives a *controlling, marketable* value on a going-concern basis, if the cash flows are those a controller could achieve. If the forecast is the *status quo* management plan without any restructuring upside, it gives a *minority, marketable* value of the company's cash flows as they are.
- **Control premium:** the extra price a buyer will pay to obtain control, reflecting the ability to change strategy, cash-flow distribution, capital structure and management. Observed in M&A transactions (often 20–40% over unaffected market price) but varies enormously; it is not a fixed number.
- **Discount for lack of control (DLOC):** applied to a minority stake when the value was computed on a controlling basis. The reciprocal of a control premium: DLOC = 1 − 1/(1 + control premium). A 25% premium corresponds to a 20% DLOC.
- **Discount for lack of marketability (DLOM):** private-company shares cannot be sold quickly. Empirical studies of restricted stock, pre-IPO transactions and put-option models suggest 10–35%, depending on holding period and volatility. Applied to a minority, unlisted stake; *not* normally applied when valuing the company as a whole for an acquisition by a strategic buyer.
- **Do not apply discounts mechanically.** In shareholder-dispute and statutory-appraisal contexts, courts may prohibit them; in reporting contexts, fair value of a controlling block may be based on market participant assumptions that include them.

## 13.10 The complete Meridian bridge

| ₹ crore | Amount |
|---------|-------:|
| Enterprise value (Chapter 14) | 2,913.3 |
| Less: borrowings | (600.0) |
| Add: surplus cash & equivalents | 150.0 |
| Add: non-operating long-term investments | 100.0 |
| **Equity value** | **2,563.3** |
| Basic shares (crore) | 50.0 |
| **Value per share (₹)** | **51.27** |

## 13.11 Reconciling to market price

Compare the DCF value per share with the share price (or with the latest transaction price, for a private company). A gap is not itself an error: it is a *question* — which of the model's assumptions differs from the market's? Chapter 16 turns the question into a reverse DCF.

## 13.12 A checklist for the bridge

1. Every debt-like item identified from the notes to accounts.
2. Lease treatment consistent across EBITDA, FCFF, WACC and bridge.
3. Cash split into operating vs surplus.
4. Non-operating assets valued separately; their income excluded from EBIT.
5. Minorities at market-based value, associates at proportional equity value.
6. ESOPs and convertibles handled with an option approach.
7. Valuation date balance-sheet items; subsequent events (dividends, share issues) accounted for.
8. Control and marketability adjustments only where the standard of value requires them.

## Chapter 13 summary

- Bridge: EV − debt-like claims − preference − minorities + cash and non-operating assets = equity.
- Each item belongs *once*: in FCFF or in the bridge, never both and never neither.
- Treat leases, pensions, ESOPs, convertibles, associates carefully.
- DLOC/DLOM depend on the standard of value; apply with justification.
- Meridian: EV 2,913.3 → equity 2,563.3 → ₹51.27 per share.

## Review questions

1. State the "golden rule" of the equity bridge.
2. Why is book value of NCI a poor proxy?
3. How are existing and future ESOP grants treated differently?
4. Why is a lease liability deducted when FCFF is before lease payments?
5. A 30% DLOC corresponds to what control premium?

<div class="pagebreak"></div>
