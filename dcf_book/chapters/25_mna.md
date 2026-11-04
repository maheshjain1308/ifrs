# Part VI — Applications and Extensions {.part}

<div class="pagebreak"></div>

# Chapter 25 — Valuation in Mergers and Acquisitions

The valuation techniques of the preceding chapters are most often put to work in a transaction. M&A adds three layers: the value of the target *on its own*, the value of *synergies* that the combination creates, and the question of *who captures* that value. This chapter shows how to separate them, how to price a deal and how to test its effect on the buyer's shareholders.

## 25.1 Three values in every deal

1. **Standalone value** of the target: what the business is worth under its current owner and strategy (the DCF of Chapter 14).
2. **Value to the acquirer:** standalone value *plus* the present value of synergies and of any improvements the acquirer can make, *minus* integration and transaction costs.
3. **Price:** what is actually paid, somewhere between the seller's reservation value (at least the standalone value, or the next-best alternative) and the buyer's maximum.

**Value created for the buyer = Value to the acquirer − Price paid**
**Value captured by the seller = Price paid − Standalone value**

Where the price falls between standalone value and value-to-acquirer is a matter of negotiation, competition and information. A buyer who pays the *whole* of the synergy value to the seller earns exactly its cost of capital on the deal — no more.

> **Key idea.** Synergies are not free. The seller usually demands a share; competition among bidders pushes the whole of it to the seller; and many synergies never materialise. The disciplined buyer determines a *walk-away price* equal to standalone value plus a share of *risk-adjusted* synergies.

## 25.2 Types of synergy

| Type | Source | Reliability | Typical treatment |
|------|--------|-------------|-------------------|
| **Cost synergies** | Overlapping overheads, procurement scale, plant rationalisation, logistics | Highest | Quantify run-rate savings, ramp-up and one-off costs to achieve |
| **Revenue synergies** | Cross-selling, wider distribution, joint product development, pricing power | Lowest | Probability-weight; include only with specific evidence; include the margin and the reinvestment needed |
| **Financial synergies** | Lower cost of debt from a larger balance sheet, use of tax losses, debt capacity | Medium | Value via WACC/APV; check that the lower cost of capital is real |
| **Operating improvements ("control" value)** | Better management of the target's assets: margin, working capital, capex | Medium | Value as a separate scenario of the standalone DCF, labelled as buyer-specific |
| **Dis-synergies** | Customer loss, talent attrition, cultural friction, distribution-channel conflict | Often under-estimated | Deduct; many deals fail here |

## 25.3 Valuing synergies by DCF

Treat synergies as a separate project: forecast incremental after-tax cash flows, subtract the cost to achieve and discount at a rate that reflects their risk.

1. **Run-rate benefit** (₹ crore a year, pre-tax) and **ramp-up profile** (e.g., 33% in year 1, 66% in year 2, 100% from year 3).
2. **One-off costs to achieve** (severance, systems, plant closure).
3. **Tax** on net synergy.
4. **Reinvestment** — revenue synergies need working capital and capex.
5. **Discount rate:** usually the target's WACC *plus* a premium (1–3 points) for execution risk; cost synergies are less risky than revenue synergies, so some practitioners use different rates for each.
6. **Terminal value:** cost savings may persist with modest growth (2–3%) or erode under competition; revenue synergies should fade more quickly.

### 25.3.1 Example: Crestline Brands buys Meridian

Crestline, a larger FMCG group, studies buying 100% of Meridian. Its analysis (₹ crore):

- Cost synergies at run-rate of **1.5% of Meridian's revenue** (procurement, logistics, overheads), reached in three years: 33% in year 1, 66% in year 2, 100% thereafter.
- One-off costs of ₹30 crore in each of years 1 and 2.
- Tax 25%; discount rate 12.2% (Meridian's WACC 11.225% plus about one point for execution risk); synergies grow 3% after year 5.

| ₹ crore | Y1 | Y2 | Y3 | Y4 | Y5 |
|---------|---:|---:|---:|---:|---:|
| Pre-tax run-rate savings (1.5% × revenue × ramp) | 11.3 | 25.3 | 42.1 | 45.9 | 49.6 |
| Integration cost | (30.0) | (30.0) | — | — | — |
| Net after-tax synergy cash flow | (14.0) | (3.5) | 31.6 | 34.4 | 37.2 |

PV of years 1–5 at 12.2% = **₹49.7 crore**. Terminal value at year 5 = 37.2 × 1.03 ÷ (0.122 − 0.03) ≈ **₹416.5 crore**; PV = **₹234.2 crore**. **Total PV of synergies = ₹283.9 crore, or ₹5.68 per Meridian share** — about 11% of standalone value.

### 25.3.2 Pricing
- Standalone intrinsic value: **₹51.27** per share.
- Value to Crestline = 51.27 + 5.68 = **₹56.95** per share. This is the *maximum* it should pay (the walk-away price).
- Suppose Meridian's unaffected market price is ₹42, and Crestline offers a **25% premium: ₹52.50** per share (₹2,625 crore for 50 crore shares).
- Seller's gain over the market price: ₹10.50 (25%); over intrinsic value: ₹1.23.
- Buyer's value creation = 56.95 − 52.50 = **₹4.45 per share (₹222 crore)** — about 78% of synergy value retained by the buyer.

If a rival bidder were to push the price to ₹56.95, the buyer's NPV would be zero. A *winner's curse* arises when the winning bid is the one with the most optimistic estimate of synergy.

## 25.4 Accretion and dilution analysis

Boards also look at the effect of the deal on the acquirer's earnings per share (EPS). It is a *market-optics* test, not a value test: a deal can be EPS-accretive and value-destroying (buying a low-quality business with cheap debt), or EPS-dilutive and value-creating.

### 25.4.1 Example
Crestline: net income ₹4,000 crore; 200 crore shares; EPS ₹20.00; P/E 30× → share price ₹600. Meridian's FY26 net income: ₹139.5 crore (EPS ₹2.79); the offer of ₹52.50 implies P/E of 18.8×.

| Scenario | Combined net income | Shares | EPS | vs ₹20.00 |
|----------|--------------------:|-------:|----:|----------:|
| **All-cash** (new debt of ₹2,625 crore at 9%: after-tax interest ₹177.2 crore); no synergies | 4,000 + 139.5 − 177.2 = 3,962.3 | 200 | 19.81 | −0.9% |
| All-cash, with year-5 synergies (₹37.2 crore post-tax) | 3,999.5 | 200 | 20.00 | 0.0% |
| **All-stock** (2,625 ÷ 600 = 4.375 crore new shares); no synergies | 4,139.5 | 204.375 | 20.25 | +1.3% |

Why does the stock deal accrete when the cash deal does not? Because Crestline's P/E (30×) is higher than the price paid for Meridian (18.8×): the acquirer is "buying earnings with expensive paper". The earnings yield on Crestline stock (3.3%) is lower than the after-tax cost of debt (6.75%), so paying with stock is cheaper *in EPS terms*. That says nothing about value: stock issued at a high multiple shares the combined firm's risks and rewards with the seller's holders.

### 25.4.2 Exchange ratio
In a stock deal the exchange ratio = Offer price per target share ÷ Acquirer share price = 52.50 ÷ 600 = **0.0875 Crestline share per Meridian share**. In practice the ratio is fixed by *relative* valuations of the two companies on the same basis (DCF, multiples, NAV), not by market prices alone; fairness opinions test it.

## 25.5 Cash, stock or mixed

| Consideration | Seller's risk | Buyer's advantage | Considerations |
|---------------|---------------|-------------------|---------------|
| **Cash** | None after closing | Keeps all upside and synergy; no dilution | Needs financing; tax on seller; leverage rises |
| **Stock** | Shares post-merger risk and synergy | Conserves cash; shares risk of overpaying | Dilution; relies on acquirer's valuation being fair |
| **Mixed / earn-out** | Partial | Balances | Contingent payments align incentives; need careful valuation |

In stock deals, the fairness of the exchange ratio depends on *both* companies' valuations; mis-valuing the acquirer's own shares can transfer wealth to the seller.

## 25.6 Control premium and its sources

Observed premiums over unaffected prices are often 20–40% but vary enormously by market and sector. A control premium may reflect: (i) synergies, (ii) better management, (iii) removal of a governance discount, (iv) the market undervaluing the target, (v) competitive bidding, and (vi) the buyer's overpayment (hubris). Of these, only (i)–(iii) are fundamentals; (iv) justifies a lower offer if the DCF supports it; (v) and (vi) are traps.

## 25.7 Transaction mechanics that affect value

- **Debt-free, cash-free pricing:** headline price quoted on an enterprise-value basis; adjustments for net debt, working-capital peg, and debt-like items at closing.
- **Working-capital peg:** an agreed "normal" level of working capital; any shortfall or excess adjusts price.
- **Escrow and indemnities:** protect the buyer from undisclosed liabilities; affect the effective price.
- **Earn-outs:** part of consideration contingent on performance; value as a contingent claim (probability-weighted PV).
- **Tax structuring:** stock vs asset purchase, step-up in tax basis, share-swap relief, section 79/72A-type loss carry-forward limits.
- **Regulatory approvals** (competition, sectoral, FEMA pricing, SEBI takeover code) may require minimum prices and open offers.

## 25.8 Purchase price allocation (PPA)

After closing, Ind AS 103 requires the price paid to be allocated to identifiable assets and liabilities at fair value, with the residual recorded as goodwill. The PPA valuation uses the intangible-valuation methods in Chapter 23 and is reviewed by auditors. Goodwill is tested annually for impairment (Ind AS 36); a goodwill impairment is the accounting recognition that the price paid exceeded value.

## 25.9 Fairness opinions

A fairness opinion, typically by an investment bank or independent valuer, states whether the consideration is *fair, from a financial point of view*, to a specified party. It usually contains DCF, trading comparables, precedent transactions and a premium analysis, presented as ranges on a football field. A fairness opinion is not a valuation *report* in the statutory sense and does not recommend the transaction; its limitations (reliance on management data; no independent verification) are stated up front.

## 25.10 Checklist for a buyer

1. Standalone DCF built independently of management's pitch; reconcile with market price.
2. Synergies itemised, owned (who delivers?), costed and risk-adjusted.
3. Walk-away price = standalone + a share of risk-weighted synergies.
4. Sensitivity of value to the three biggest drivers (typically margin, growth and synergy delivery).
5. Funding plan and leverage after closing, including covenant headroom.
6. Accretion/dilution as a secondary, optical test.
7. Integration plan with milestones and accountability.
8. Contingency: what if synergies are half and delayed by a year?

## Chapter 25 summary

- Separate standalone value, synergy value and price.
- Value synergies as a project with ramp-up, costs and a risk-adjusted discount rate.
- Buyer's maximum = standalone + risk-weighted synergies; every rupee above destroys value.
- Accretion/dilution is an optical test; stock deals accrete when the acquirer's P/E exceeds the price paid.
- Crestline/Meridian: synergy value ₹284 crore (₹5.68 per share); max price ₹56.95; offer ₹52.50 gives the buyer ₹4.45 per share of value.

## Review questions

1. Why is a revenue synergy riskier than a cost synergy?
2. Compute the exchange ratio if the offer price is ₹70 and the acquirer's price is ₹560.
3. Why can a deal be accretive and still destroy value?
4. What is the winner's curse in an auction?
5. How is an earn-out valued?

<div class="pagebreak"></div>
