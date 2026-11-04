# Chapter 11 — Economic Value Added (EVA) and Market Value Added (MVA)

## 11.1 The gap EVA fills

Up to now we have seen performance metrics such as ROI and ROCE, and approaches based on the asset base, earnings or free cash flows, to find the "worth" of the entity. **Why EVA?** What gap is it trying to fill that the others couldn't?

The answer lies in the way EVA looks at the **performance of the management** of a company. All approaches seen so far were largely a function of *number-crunching*. EVA tries to make management **more accountable for individual decisions** and the **impact of decisions on the path to progress** of the company.

*Illustration of the idea.* Suppose management has two dissimilar but equal-risk opportunities. It would probably choose the project that **breaks even earlier**, cutting down the risk of future losses. But if both projects had been undertaken, each would have generated a **positive IRR**, though the second would have had a longer pay-back period. This impact of strategic decision-making comes out evidently in EVA computations, whereas under earlier techniques this performance-driven aspect would never have been highlighted. EVA evaluates whether **returns cover the cost of capital**.

EVA is therefore not only a valuation technique but also a **holistic method of evaluating financial performance**: it measures the economic contribution of a company. Its core concept is that a company generates **value only if there is a creation of wealth in terms of returns in excess of the cost of capital invested**. EVA insists on **separation of the firm's operation from its financing**. If EVA is negative the company is not generating value from the funds invested; if positive, it is.

## 11.2 The formula

**EVA = NOPAT − (Invested capital × WACC)**  or  **EVA = NOPAT − Capital charge**

- **NOPAT** (Net Operating Profit After Tax) = **EBIT − tax expense** (i.e., EBIT × (1 − t)). The logic: find the cash returns that business operations would make after tax payments. Depreciation is left untouched here, being an operational expense for the limited purposes of EVA.
- **Capital charge** = Invested capital × WACC.

## 11.3 Steps to compute EVA

1. **Compute NOPAT.** Start with EBIT, deduct tax on operating profit, and adjust for **non-cash expenses** (e.g., the **provision for bad and doubtful debts**, which is just a book entry) to arrive at the "actual" cash earnings.
2. **Compute invested capital.** From published financials: **total assets less non-interest-bearing current liabilities** (sundry creditors, billing in advance, tax liabilities, etc.); equivalently, **equity plus long-term debt**, generally at the *start* of the year. Make adjustments for non-cash elements (e.g., provision for bad debts) in both invested capital and NOPAT.
3. **Compute WACC** (using market or book weights as the question directs).
4. **Capital charge** = Invested capital × WACC.
5. **EVA** = NOPAT − Capital charge.

## 11.4 Illustration 5 — A Ltd.

*Compute the EVA of A Ltd. from the following (all figures in ₹ lakh).*

| Profit and loss statement | | Balance sheet | |
|---|---:|---|---:|
| Revenue | 1,000 | PPE | 1,000 |
| Direct costs | (390) | Current assets | 300 |
| SG&A | (200) | **Total** | **1,300** |
| **EBIT** | **410** | Equity | 700 |
| Interest | (10) | Reserves | 100 |
| EBT | 400 | Non-current borrowings | 100 |
| Tax expense | (120) | Current liabilities and provisions | 400 |
| **EAT** | **280** | **Total** | **1,300** |

*Assume that a bad-debt provision of ₹20 lakh is included in SG&A and the same amount is reduced from trade receivables in current assets. Pre-tax cost of debt 12%; tax rate 30%; cost of equity 8.45%. The current liabilities also include a tax liability of 100.*

### Solution

**Step I — NOPAT**

| | |
|---|---:|
| EBIT | 410 |
| Less: taxes (30% × 410) | (123) |
| Add: non-cash expenses (bad-debt provision) | 20 |
| **NOPAT** | **307** |

**Step II — Invested capital**

| | |
|---|---:|
| Total assets | 1,300 |
| Less: non-interest-bearing liabilities (current liabilities and provisions) | (400) |
| | 900 |
| Add: non-cash adjustment (provision) | 20 |
| **Invested capital** | **920** |

(Check: equity 700 + reserves 100 + non-current borrowings 100 = 900 before the adjustment.)

**Step III — WACC** (weights from equity 800 and debt 100 on 900):

WACC = (800/900 × 8.45%) + (100/900 × 12% × (1 − 0.30)) = 7.511% + 0.933% = **8.44%**.

**Step IV — Capital charge** = 920 × 8.44% = **77.65**.

**Step V — EVA** = 307 − 77.65 = **₹229.35 lakh**.

### Interpretation
A positive EVA of ₹229 lakh means A Ltd. earned ₹229 lakh above the return required by capital providers. Equivalently NOPAT/IC = 307/920 = 33.4% vs WACC 8.44%: a spread of nearly 25 points.

## 11.5 Why NOPAT and not net income?

EVA separates operations from financing. Net income is *after* interest on debt but *before* any charge for equity capital; it flatters firms that rely on equity (since equity appears "free" in the income statement). NOPAT is *before* all financing costs, so EVA charges *both* debt and equity through the WACC. A company can report a positive net income yet have negative EVA.

## 11.6 Market Value Added (MVA)

**MVA = Current market value of the firm − Invested capital**

If the invested capital is ₹920 lakh and the market value of the firm is ₹1,000 lakh, then **MVA = 1,000 − 920 = ₹80 lakh**.

MVA attempts to resolve some of the issues involved in EVA (for example, EVA ignores **value drivers** and **book values**). It does not give a basis for *share valuation* but is an alternative way to gauge performance efficiencies of an enterprise from a **market-capitalisation point of view**: the logic is that the **market will discount the efforts taken by the management fairly**. Hence the MVA of 80 is the true value added that is **perceived by the market**; in contrast EVA is a **derived** value added meant for the more discerning investor.

### 11.6.1 Relationship between EVA and MVA
In theory, **MVA = PV of all future EVAs** (discounted at WACC). A company that is expected to keep generating positive EVA has positive MVA. Hence EVA is the *flow* and MVA the *stock*.

*Illustration.* If expected EVA is ₹12 lakh next year, growing at 5% for ever, with WACC 12%: MVA ≈ 12 ÷ (0.12 − 0.05) = ₹171 lakh. Firm value = invested capital + MVA.

### 11.6.2 Behavioural note
"Since MVA represents market views regarding the company's future value generation, companies with a higher MVA will naturally become the darlings of the share market and would eventually become 'pricey' from a pure pricing perspective. In such cases, the **EVA may also sometimes have a slightly negative correlation as compared to MVA**. But this will be a short-term phenomenon as eventually the gap will get closed by investors themselves. A stock going ex-dividend will exhibit such propensities."

**The main objective of EVA** is thus to show **management efficiency in generating returns over and above the hurdle rate of invested capital**.

## 11.7 EVA vs MVA — summary

| Feature | EVA | MVA |
|---------|-----|-----|
| Formula | NOPAT − (Invested capital × WACC) | Market value of firm − Invested capital |
| Nature | Periodic **flow** (a year's performance) | Cumulative **stock** (market's view of all future value) |
| Basis | Accounting (adjusted), derived | Market, observed |
| Who uses | Managers, discerning investors | Shareholders, analysts |
| Strength | Management accountability; charges for equity | Reflects market perception |
| Weakness | Historical, accounting adjustments | Not available for unlisted firms; reflects sentiment |
| Link | MVA = PV of future EVAs | |

(This is the content for the standard theory question "Differentiate between EVA and MVA".)

## 11.8 Adjustments in practice

Stern Stewart's original EVA made 160+ adjustments; common ones:
1. **Capitalise R&D** and marketing/brand spend and amortise them.
2. Add back **provisions** (bad debts, warranties) as non-cash.
3. Treat **operating leases** as debt.
4. Remove **non-recurring** items.
5. Adjust for **deferred taxes** (use cash taxes).
6. Include **unrecorded assets** (patents) in invested capital — the cases of Herbal Gyan and Constant Engineering (Chapter 21, Q15–Q16) illustrate this.

## 11.9 Using EVA for decisions

- **Performance measurement** and **incentive compensation** (EVA bonuses).
- **Capital allocation**: projects are accepted if they earn above WACC.
- **Divisional performance**: EVA by division with division-specific WACC.
- **Valuation**: Value = invested capital + PV of future EVA (Chapter 19 compares with DCF).

## 11.10 Limitations

1. Historical (the base year) — may not reflect future value creation.
2. Depends on the accuracy of invested capital (book values, depreciation policy).
3. WACC estimation uncertainty.
4. Short-term focus unless multi-year.
5. Does not by itself yield a share price.

## Chapter 11 summary

- EVA = NOPAT − Invested capital × WACC; positive EVA ⇒ value creation.
- NOPAT = EBIT − tax (adjusted for non-cash items); invested capital = total assets − non-interest-bearing liabilities (± adjustments).
- Illustration 5: NOPAT 307, IC 920, WACC 8.44%, capital charge 77.65, **EVA 229.35**.
- MVA = market value − invested capital; MVA = PV of future EVAs.
- EVA measures management efficiency; MVA reflects market perception.

## Check your understanding

1. Define EVA and say why NOPAT rather than net income is used.
2. Compute EVA: EBIT 500, tax 30%, invested capital 2,000, WACC 11%.
3. Compute MVA if market value is 3,200 and invested capital 2,000.
4. What is the relationship between EVA and MVA?
5. Why add back provision for doubtful debts in NOPAT?

**Answers.** (1) Excess of NOPAT over capital charge; NOPAT excludes financing so both debt and equity are charged. (2) NOPAT 350; charge 220; EVA **130**. (3) **1,200**. (4) MVA is PV of future EVAs. (5) It is a non-cash book entry; EVA seeks cash-based operating returns.

> **Exam focus.** "Differentiate between EVA and MVA" is a repeated question; also computational EVA questions (Chapter 21: Q9–Q16). Present NOPAT, invested capital, WACC, capital charge, EVA in five labelled steps.

<div class="pagebreak"></div>
