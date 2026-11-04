# Part I — Foundations {.part}

<div class="pagebreak"></div>

# Chapter 1 — What Is Valuation?

## 1.1 Value, price and cost

Three words are used loosely in everyday speech and must be kept apart in valuation.

- **Cost** is what was paid to acquire or build an asset. It is a historical fact.
- **Price** is what an asset trades for in a market today. It is an observation.
- **Value** is what an asset is *worth* given the cash flows it will produce and the risk of those flows. It is an estimate — a judgement.

A company's accounting book value is a cost-based number (adjusted for depreciation). Its market capitalisation is a price. Its DCF value is an estimate of worth. The three coincide only by accident. The whole discipline of investing is built on the possibility that price and value diverge; the whole discipline of valuation is the attempt to estimate the second so as to compare it with the first.

> **Key idea.** Price is what you pay; value is what you get. A valuation is a *judgement about value*, supported by evidence, expressed with an honest range.

## 1.2 Why value a business?

Valuations are performed for many reasons, and the purpose shapes the method, the standard of value and the level of precision required.

| Purpose | Typical question | Notes |
|---------|------------------|-------|
| Mergers & acquisitions | What price should we offer / accept? | Often includes synergies; control premium; negotiated range |
| Public offerings (IPO/FPO) | What is a defensible issue price? | Cross-checked against peer multiples; investor appetite matters |
| Private equity / venture capital | What entry price delivers the target return? | Exit-driven; leverage assumptions |
| Corporate strategy | Which businesses create value? Where do we deploy surplus cash? | Value-based management; segment-level DCF |
| Capital budgeting | Does this project earn more than its cost of capital? | Project-level DCF = NPV |
| Financial reporting | Fair value, impairment testing, purchase price allocation | Standards-driven (Ind AS 113, Ind AS 36, Ind AS 103) |
| Tax and legal | Gift/estate, share transfer, shareholder disputes, oppression and mismanagement | Prescribed standards of value apply |
| Lending / restructuring | Is collateral and enterprise value sufficient? | Liquidation vs going-concern values |
| Employee equity | Option strike price, ESOP accounting | Fair value on grant date |
| Dispute resolution | Dissenting shareholder appraisal | Courts examine method and inputs |

## 1.3 Standards of value

"Value" has no single meaning in practice; professional standards define specific *standards of value*. The common ones are:

- **Fair market value:** the price at which property would change hands between a willing buyer and a willing seller, neither being under compulsion and both having reasonable knowledge of relevant facts. Used widely in tax and legal contexts.
- **Fair value (financial reporting):** the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date (Ind AS 113 / IFRS 13). Market-participant assumptions, not entity-specific ones.
- **Fair value (shareholder-rights context):** in statutory appraisal and oppression cases, courts may define fair value differently — typically *without* minority or marketability discounts.
- **Investment value:** value to a particular investor given that investor's own synergies, cost of capital and plans. This can differ from fair market value.
- **Intrinsic value:** the value implied by a rational analysis of fundamentals — the present value of expected cash flows. DCF produces an estimate of intrinsic value.
- **Liquidation value:** net proceeds from selling assets piecemeal (orderly or forced) after settling liabilities.

*Pitfall.* Always state the standard of value and the premise of value (going concern or liquidation) at the beginning of any valuation. Two valuers can reach different numbers for the same company simply because they were answering different questions.

## 1.4 The three families of valuation approach

Almost every valuation technique falls into one of three families.

### 1.4.1 Asset (cost) approach
The value of the business is built from the value of its assets less its liabilities. Variants: book value, adjusted net asset value (revaluing assets to market), replacement cost, and liquidation value. This approach is natural for holding companies, real-estate firms, investment funds and companies facing liquidation. It is a poor fit for businesses whose value lies in intangibles and future earnings.

### 1.4.2 Market (relative) approach
The value is inferred from what the market pays for similar assets, using multiples such as price-to-earnings (P/E), enterprise-value-to-EBITDA (EV/EBITDA), price-to-book (P/B) or EV/Sales. Either *trading multiples* of listed peers or *transaction multiples* from acquisitions are used. It is fast, intuitive and reflects current market sentiment — a strength and a weakness. It tells you what similar assets are *priced* at, not necessarily what they are worth.

### 1.4.3 Income approach (including DCF)
Value is the present value of the future economic benefits the asset will produce. DCF is the central technique: forecast cash flows, estimate a risk-appropriate discount rate, and discount. Simpler variants include capitalisation of maintainable earnings (a one-period DCF with constant growth).

| Approach | Looks at | Strength | Weakness |
|----------|----------|----------|----------|
| Asset | Balance sheet | Objective, floor value | Ignores earning power and intangibles |
| Market | Peer prices | Reflects market conditions; simple | Peers are never identical; inherits market mispricing |
| Income / DCF | Future cash flows | Fundamental, explicit assumptions | Sensitive to inputs; terminal value dominance |

Good practice is to use DCF as the primary tool where cash flows can be forecast, and to cross-check with relative valuation and, where relevant, asset values.

## 1.5 Intrinsic versus relative valuation

**Intrinsic valuation** asks: what are the cash flows, how risky are they, and what are they worth? It is independent of what the market currently thinks. **Relative valuation** asks: how does the market price comparable assets, and what does that imply for this one? The two are complementary.

A subtle point: relative valuation is not "assumption-free". A multiple *embeds* assumptions about growth, risk and returns. A high P/E signals the market expects high growth, low risk, or both. When you apply a peer's multiple to your company you are assuming your company's growth/risk/returns match the peer's. DCF makes those assumptions explicit; multiples hide them.

## 1.6 The logic of DCF in one page

Suppose you could buy a business that will pay its owner a stream of cash C1, C2, C3, … at the ends of years 1, 2, 3, …. What is the most you should pay today? Three observations answer the question.

1. **Cash today is worth more than cash tomorrow.** You could invest cash today and earn a return. So future cash flows must be *discounted*.
2. **Riskier cash is worth less than safer cash.** Investors demand compensation for bearing risk. The discount rate must therefore rise with risk.
3. **A business is worth the cash it can pay out, not the accounting profit it reports.** Profit is an accrual concept; owners are paid in cash. What counts is cash left after the business has reinvested enough to sustain its growth.

Combining these:

**Value = Σ [ Expected cash flow in year t ÷ (1 + r)^t ]**, where r reflects the risk of those cash flows.

Everything in the remaining chapters elaborates this expression: *which* cash flow (to the firm or to equity), *which* discount rate (WACC or cost of equity), *how long* to forecast, *what happens after* the forecast ends (terminal value), and *how to bridge* from the value of operations to what belongs to shareholders.

## 1.7 The five-step DCF process

1. **Understand the business and its industry.** Competitive position, economics, regulatory environment, management quality.
2. **Forecast free cash flows.** Revenue, margins, taxes, reinvestment — for an explicit period (typically 5–10 years).
3. **Estimate the discount rate.** Cost of equity, cost of debt, capital structure → WACC (or cost of equity for equity cash flows).
4. **Estimate the terminal value.** What the business is worth beyond the forecast horizon.
5. **Discount, sum, and bridge** to equity value (subtract debt and other claims, add non-operating assets), then **test** with sensitivities and cross-checks.

## 1.8 Valuation is both science and art

The *science* is the mathematics: discounting, algebra of WACC, un-levering betas. The *art* is judgement: how fast will this business grow, will its margins hold, how long can it earn excess returns, which peers are truly comparable? Two analysts with the same spreadsheet will produce different values because they hold different views of the future. A good valuation makes these views explicit, internally consistent and defensible. It also says plainly how much of the answer depends on them.

> **Pitfall.** False precision. A DCF output of ₹51.27 per share does not mean the value is known to the paisa. It means the value is about ₹50 given a specific set of assumptions; a different but equally reasonable set might give ₹42 or ₹63. Always present a range.

## 1.9 What can go wrong — a preview

The most common failures in DCF practice, each treated in depth later, are:

- Growth assumed without the reinvestment needed to fund it (Chapter 7).
- Terminal growth above the long-term growth of the economy, or terminal reinvestment inconsistent with terminal returns (Chapter 12).
- Mismatched cash flows and discount rates — for instance discounting FCFE at WACC (Chapter 3).
- Mismatched currencies — rupee cash flows discounted with a dollar rate (Chapter 22).
- Double-counting or omitting items in the equity bridge — cash, minorities, pensions, options (Chapter 13).
- Beta and capital-structure inconsistencies (Chapters 10–11).
- Confusing accounting profit with cash flow, ignoring working capital and capex (Chapters 4–5).

## Chapter 1 summary

- Cost, price and value are different things; DCF estimates value.
- Three approaches exist — asset, market, income. DCF is the main income-approach tool.
- Always specify the standard and premise of value.
- DCF = present value of expected cash flows at a risk-appropriate rate.
- It is part science, part judgement; present a range, not a point.

## Review questions

1. Distinguish between cost, price and value, with an example of each from a listed company.
2. List three purposes of valuation and say how each might affect the chosen method.
3. Why is relative valuation not free of assumptions?
4. What are the five steps in a DCF valuation?
5. Why might two competent valuers reach different DCF values for the same company?

<div class="pagebreak"></div>
