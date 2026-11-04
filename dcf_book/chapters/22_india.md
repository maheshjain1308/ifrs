# Chapter 22 — Valuation in India and Other Emerging Markets

Emerging markets add layers to valuation: higher and more volatile inflation, currency risk, country risk, thinner data, less liquid markets, and a regulatory framework that prescribes valuation methods for many transactions. This chapter explains how to adapt DCF, with special attention to India.

*Note on regulation.* Valuation-related provisions of the Companies Act, SEBI regulations, FEMA, the Income-tax Act and Ind AS are amended often. This chapter describes the structure and the principles; before relying on any rule for a real engagement, check the current text and any latest circulars.

## 22.1 Inflation, currency and consistency

### 22.1.1 Nominal in rupees
The cleanest approach for an Indian company with predominantly rupee revenues is to forecast **nominal rupee cash flows** and discount at a **nominal rupee** cost of capital built from the rupee risk-free rate (G-Sec yield). Inflation is then implicitly in both numerator and denominator.

### 22.1.2 Real model
Alternatively forecast in constant prices and discount at a *real* rate: **(1 + real) = (1 + nominal) ÷ (1 + inflation)**. Real models are less common because working capital, taxes and depreciation are nominal (based on historical cost) and inflation affects them in non-neutral ways.

### 22.1.3 Choosing the currency
- **Rupee cash flows → rupee discount rate.**
- **Dollar cash flows (an exporter's contracts; a company reporting in USD)** → dollar discount rate.
- For a company with mixed revenues, model each currency's cash flows and convert at *expected* exchange rates, or model in a single currency with forward-rate-consistent conversion.

### 22.1.4 Converting a discount rate between currencies
By interest-rate parity, the expected depreciation of the rupee ≈ the inflation (or risk-free rate) differential:

**(1 + WACCᵢₙᵣ) = (1 + WACCᵤₛᴅ) × (1 + Rfᵢₙᵣ)/(1 + Rfᵤₛᴅ)**

*Example.* Rupee Rf 7.0%; dollar Rf 4.3%; rupee WACC 11.225%. Dollar WACC = 1.11225 ÷ (1.07 ÷ 1.043) − 1 = **8.4%**. Value computed in dollars at 8.4% from dollar cash flows (obtained by converting rupee flows at forward rates) equals the rupee value converted at spot. Any discrepancy means an inconsistent assumption.

> **Pitfall.** Taking a rupee cash-flow forecast and discounting at a dollar WACC — a "cheap" 8–9% rate — to get a higher value. This is one of the most common errors in cross-border valuations. It overvalues the business by ignoring rupee depreciation.

## 22.2 Country risk

The risk-free rate and ERP for India must reflect the risk of investing there.

### 22.2.1 Approaches to the equity risk premium
1. **Total ERP for India, estimated directly** from implied premiums or long-run local returns.
2. **Mature-market ERP + country risk premium (CRP):**

**ERP(India) = ERP(mature) + CRP**

and CRP = Sovereign default spread × (σ equity ÷ σ government bond). If the mature-market ERP is 4.5%, India's sovereign default spread is 1.5% and the relative equity/bond volatility is about 1.5, then CRP ≈ 2.25% and total ERP ≈ 6.75%. (The numbers are illustrations; observe current data.)
3. **Exposure-weighted CRP for multinationals:** weight CRP by the share of revenues (or operations) from each country: an Indian company with 30% revenue from the USA/Europe has a lower weighted CRP than a purely domestic firm.

### 22.2.2 The risk-free rate
G-Sec yield in INR includes the sovereign default risk and expected inflation. For a *dollar* valuation of an Indian company: Rf(USD) = US Treasury yield; ERP includes the CRP.

### 22.2.3 Beta
Regression against the local index (Nifty) gives betas relative to the Indian market. For comparability with global peers, use a global index and a global ERP — but do not mix.

## 22.3 Practical data challenges

| Issue | Practical response |
|-------|--------------------|
| Short or discontinuous listing history | Use peer betas from a broader set (including global peers); bottom-up |
| Thin trading in small caps | Adjust regression betas (Dimson); rely on bottom-up |
| Unlisted peers | Use industry data; transaction databases; adjust for lack of marketability |
| Related-party transactions and promoter-driven decisions | Normalise; scrutinise governance; consider a governance-risk adjustment via scenarios |
| Unreliable segment or financial data | Increase scenario breadth; widen the range; use more conservative terminal assumptions |
| Rapid structural change (formalisation, digital shifts) | Shorter forecast horizons with explicit scenarios |

## 22.4 The Indian regulatory framework for valuation (overview)

| Context | Governing framework | What it says about valuation |
|---------|---------------------|------------------------------|
| Preferential allotment, rights issues to some persons, non-cash consideration, schemes of arrangement (unlisted companies) | **Companies Act, 2013** and rules (e.g., sections 62, 192, 230–232) | Valuation by a **registered valuer** in the relevant asset class (securities or financial assets; land and building; plant and machinery) under the **Companies (Registered Valuers and Valuation) Rules, 2017** |
| Pricing of shares for non-residents (FDI, transfers) | **FEMA** and RBI/FEMA non-debt instruments rules | Pricing at or above/below fair value determined using an *internationally accepted pricing methodology* on an arm's-length basis, certified by a chartered accountant, a SEBI-registered merchant banker or a cost accountant — DCF is widely used |
| Preferential issues by listed companies, takeovers, delisting, buybacks | **SEBI** regulations (ICDR, SAST, delisting) | Formula-based minimum prices (volume-weighted averages) for frequently traded shares; independent valuations in specified cases |
| Taxation of share issues/transfers at below fair value | **Income-tax Act and Rules (e.g., rule 11UA)** | Prescribes methods for fair market value of unquoted shares, including DCF for certain purposes |
| Financial reporting | **Ind AS 113 (fair value), Ind AS 36 (impairment), Ind AS 103 (business combinations), Ind AS 102 (share-based payment)** | Fair-value hierarchy; market-participant assumptions; impairment testing of CGUs and goodwill; PPA |
| Insolvency | **IBC, 2016** and CIRP regulations | Two registered valuers; fair value and liquidation value |
| Professional standards | **ICAI Valuation Standards** (and the International Valuation Standards, IVS) | Definitions, bases, approaches, scope of work, reporting, business-valuation standard |

## 22.5 Ind AS and valuation

### 22.5.1 Ind AS 113 fair value
Fair value is an *exit price* from the perspective of *market participants*. Inputs are classified: **Level 1** (quoted prices in active markets), **Level 2** (observable inputs other than Level 1), **Level 3** (unobservable inputs — most DCF-based valuations). Where DCF is used, the cash flows and the discount rate should reflect assumptions *market participants* would use, not entity-specific synergies unless market participants would also benefit.

### 22.5.2 Ind AS 36: value in use for impairment
The recoverable amount of an asset or CGU = higher of fair value less costs of disposal and *value in use* (VIU). VIU is a DCF with specific rules:
- Cash flows based on reasonable and supportable assumptions, normally within a maximum five-year budget with extrapolation using a steady or declining growth rate (unless a longer period can be justified).
- Exclude cash flows from future restructuring not yet committed and from improving or enhancing the asset's performance.
- Exclude financing cash flows and income-tax receipts/payments (in principle, VIU is *pre-tax*, using a **pre-tax discount rate**).
- Discount rate reflects the current market assessment of the time value of money and the risks specific to the asset.

*Converting post-tax WACC to a pre-tax rate:* the pre-tax rate is the rate that, applied to pre-tax cash flows, gives the same value as the post-tax rate applied to post-tax flows — usually found by iteration. A rough shortcut: pre-tax rate ≈ post-tax rate ÷ (1 − t), but the exact rate depends on the cash-flow profile.

### 22.5.3 Ind AS 103 purchase price allocation
Acquired identifiable assets (customer relationships, brands, technology) and liabilities are measured at fair value; the residual is goodwill. Common intangible-valuation techniques: **relief-from-royalty** (brands), **multi-period excess earnings** (customer relationships), **cost approach** (software), **with-and-without** (non-competes). Contributory-asset charges ensure that the intangible is credited only with its own share of cash flow.

## 22.6 Control, minority and marketability in Indian practice

- **Open offers (SAST):** minimum price formulas based on market prices and negotiated price; valuation is relevant to fairness opinions.
- **Delisting:** discovered price through reverse book-building; valuation reports provide a floor.
- **Schemes of arrangement** (mergers/demergers): share-exchange ratio supported by valuation reports from registered valuers and a fairness opinion from a merchant banker; the ratio considers asset, income and market approaches with weights.
- **Discounts for marketability** (typically 10–30%) are applied in some contexts (e.g., unlisted minority stakes in corporate-governance disputes) and *not* in others (fair value for buyouts of oppressed minorities). The standard of value and the purpose determine the answer.

## 22.7 Valuation under uncertain governance

Promoter-controlled companies, related-party dealings, group cross-holdings, pledge of shares, and litigation are material influences on value in many Indian companies. Ways to handle:
1. Reflect expected leakage in cash flows (scenario with related-party transactions at non-arm's-length costs).
2. Incorporate a probability-weighted contingency for litigation or regulatory action.
3. Avoid layering a blanket "governance discount" onto the discount rate; instead state the specific risk and its cash-flow effect.
4. Cross-check with market price (the market usually discounts perceived governance risk).

## 22.8 Illustrating the effect of the country-risk adjustment on Meridian

Meridian is a domestic business; its WACC of 11.225% already embeds an India-wide ERP (6.0%). Suppose the same business were valued by a foreign investor in dollars. The foreign investor builds a dollar WACC: Rf 4.3% (US), mature ERP 4.5%, CRP 2.25%, unlevered beta 0.75, D/E 25% → levered beta 0.891, Ke = 4.3% + 0.891 × (4.5% + 2.25%) = 10.3%; Kd (USD, Indian credit) 6.3%; WACC = 0.8 × 10.3% + 0.2 × 6.3% × 0.75 = 9.2%. Converting this to rupees using the Rf differential: (1.092) × (1.07/1.043) − 1 = 12.0% — *higher* than the 11.225% rupee WACC we used. The gap (0.8 point) reflects differences in how the premium was assembled; reconcile the two approaches, which also shows why the choice of ERP matters. A careful valuer chooses one internally consistent set and documents it.

## 22.9 Emerging-market checklist

1. Currency of cash flows = currency of discount rate.
2. Terminal growth ≤ long-run nominal growth of the economy and ≤ the risk-free rate in that currency.
3. Country risk consistent with the ERP approach and with the revenue geography.
4. Inflation pass-through assumptions explicit (margins in inflationary periods).
5. Tax rates: statutory vs effective; incentives expiring.
6. Regulatory and statutory requirements for the purpose of the valuation.
7. Governance, related-party and legal risks translated into scenario cash flows or documented adjustments.
8. Liquidity: marketability discount only where the standard of value requires it.

## Chapter 22 summary

- Match currency and inflation across cash flows and discount rates; convert rates using parity.
- Country risk enters through Rf and ERP; avoid double-counting.
- India's regulatory framework prescribes registered valuers and methods for many transactions; Ind AS 113/36/103 govern reporting valuations.
- Governance and legal risks belong in cash-flow scenarios.

## Review questions

1. Convert a 12% rupee WACC to a dollar WACC given Rf(INR) 7.2% and Rf(USD) 4.0%.
2. What is wrong with discounting rupee cash flows at a dollar WACC?
3. How does VIU under Ind AS 36 differ from a normal DCF?
4. When might a marketability discount *not* be applied?
5. How should related-party leakage be reflected in valuation?

<div class="pagebreak"></div>
