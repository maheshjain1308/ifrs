# Chapter 14 — Valuation of Distressed Companies

## 14.1 What is distress?

Some firms are clearly exposed to possible distress, though the source of the distress varies:

- For some firms it is **too much debt**, which creates the potential for failure to make debt payments and its consequences (**bankruptcy, liquidation and reorganisation**).
- For others, distress arises from the **inability to meet operating expenses**.

A company is said to be in distress when it is **unable to meet, or has difficulty paying off, its financial obligations to its creditors**, typically due to **high fixed costs, illiquid assets, or revenues being sensitive to economic downturns**. Such distress can lead to **operational distress** as increasing costs of borrowing take a toll on operations.

Distressed companies are businesses that are likely to, or already have, **defaulted on their debts**. Although a company may not be making payments on some or all of its debt obligations, **there may still be some value remaining** on the instruments they hold. Just because a company cannot make payments on its debt **does not mean the company is entirely worthless**.

## 14.2 Why conventional methods fail

| Conventional method | Why it fails for a distressed firm |
|---------------------|-----------------------------------|
| **DCF with terminal value** | TV is based on an **infinite life and ever-growing cash flows**; the assumption of perpetuity of cash flows may not hold because of **negative cash flows** |
| **Cash-flow estimation** | A distressed firm usually has **negative and declining revenues**, expects to lose money for some more time, and has a **high risk of bankruptcy**. For firms expected to fail, DCF values the firm as a going concern. Even if the firm is expected to survive, projections must run until cash flows turn positive, otherwise **DCF yields a negative value** for equity or firm |
| **Discount rates** | Conventional rates reflect companies that are **operationally and financially sound**. They have to be **adjusted for the probability of failure** for distressed companies |

The reasons "warrant adjustments or amendments and modifications to be made to conventional methods". The syllabus lists four approaches.

## 14.3 Method 1 — Modified discounted cash flow valuation

This method requires coming up with **probability distributions for the cash flows** (across all possible outcomes) to estimate the **expected cash flow** in each period. While computing, the **likelihood of default** should be adjusted for. Along with the cash-flow estimates, discount rates are also estimated:

- use **updated debt-to-equity ratios and unlevered beta** to estimate the cost of equity;
- use **updated measures of the default risk** of the firm to estimate the cost of debt.

If the entire distribution cannot be estimated, the **probability of distress** is estimated for each period and used for the expected cash flow:

**Expected cash flow (t) = Cash flow (t) × (1 − Probability of distress (t))**

### Worked example 14.1
Cash flows if the firm survives: Y1 100, Y2 140, Y3 180; terminal value at Y3 1,500 (if survival). Probability of the firm being in distress *by* each year (cumulative): Y1 10%, Y2 20%, Y3 30%. Discount rate 12%.

| | Y1 | Y2 | Y3 |
|---|---:|---:|---:|
| Cash flow if surviving | 100 | 140 | 180 + 1,500 |
| × (1 − P) | 0.90 | 0.80 | 0.70 |
| Expected cash flow | 90 | 112 | 1,176 |
| Discount factor (12%) | 0.8929 | 0.7972 | 0.7118 |
| PV | 80.4 | 89.3 | 837.1 |

**Expected value = ₹1,006.8.** If survival were certain, the value would be 100 × 0.8929 + 140 × 0.7972 + 1,680 × 0.7118 = 89.3 + 111.6 + 1,195.8 = **₹1,396.7**. The distress probabilities cut the value by about **28%**.

*Note on double-counting.* If the cash flows are already probability-weighted for distress, **do not also add a distress premium to the discount rate**; discount at a rate reflecting only systematic risk.

## 14.4 Method 2 — DCF valuation plus distress value

A DCF values a business as a going concern. DCF valuations will **understate** the value of the firm if there is a possibility that it will fail before it reaches stable growth, *and* the assets will be sold for a value **less than the present value of the expected cash flows** (a **distress sale value**). Conversely, a plain going-concern DCF **overstates** the value of a firm that may fail.

**Steps to value a distressed firm (source chapter):**

| Step | Task |
|------|------|
| (i) | Value the business as a **going concern** by looking at the expected cash flows it will have if it follows the **path back to financial health** |
| (ii) | Determine the **probability of distress** over the lifetime of the DCF analysis |
| (iii) | Estimate the **distress sale value** as a **percentage of book value** or as a percentage of the DCF value of equity estimated as a going concern |

**Formula:**

**Value of equity = DCF value of equity × (1 − Probability of distress) + Distress sale value of equity × Probability of distress**

### Worked example 14.2
Going-concern DCF value of equity: ₹800 crore. Probability of distress: 35%. Distress sale value of equity: ₹100 crore (assets sold below debt, equity gets a residual).

Value of equity = 800 × 0.65 + 100 × 0.35 = 520 + 35 = **₹555 crore**.

If the probability rises to 50%: 400 + 50 = ₹450 crore. *Sensitivity*: each 10 points of distress probability removes about ₹70 crore.

*Distress sale value as % of book value.* If book value of assets is ₹1,000 crore and the distress sale fetches 55% = ₹550 crore, debt ₹900 crore: equity gets nothing (550 − 900 < 0) — distress sale value of equity = 0. For enterprise value the figure of 550 matters; allocate by seniority.

## 14.5 Method 3 — Adjusted present value (APV)

APV is based on the logic of **separating the investment decision from the financing decision**. First, the value of the firm is computed **without debt (the unlevered firm)**; then the effect of debt on firm value is adjusted:

**Firm value = Unlevered firm value + (Tax benefits of debt − Expected bankruptcy cost from the debt)**

- The first part is computed by discounting the free cash flows to the firm at the **unlevered cost of equity**.
- The second part reflects the present value of the **expected tax benefits** from the use of debt.
- **Expected bankruptcy cost** can be estimated as the difference between the unlevered firm value and the **distress sale value**, multiplied by the probability of distress:

**Expected bankruptcy costs = (Unlevered firm value − Distress sale value) × Probability of distress**

### Worked example 14.3
Unlevered firm value ₹2,000 crore; debt ₹800 crore at 10%, tax 30% (perpetual debt: tax benefit = t × D = 0.3 × 800 = ₹240 crore); distress sale value ₹1,100 crore; probability of distress 20%.

- Expected bankruptcy cost = (2,000 − 1,100) × 0.20 = **₹180 crore**.
- Firm value (APV) = 2,000 + 240 − 180 = **₹2,060 crore**.
- Equity = 2,060 − 800 = **₹1,260 crore**.

Compare: without distress costs, 2,240; the possible distress consumes three-quarters of the tax benefit. If P rises to 40%: expected cost 360, APV = 1,880 — **below the unlevered value**: at that probability debt destroys value.

## 14.6 Method 4 — Relative valuation

Relative valuation multiples such as **revenue and EBITDA multiples** are used more popularly for distressed firms than for healthy ones, because multiples such as **price-earnings or price-to-book** often **cannot even be used** for a distressed firm (negative earnings, eroded book value). Analysts aware of the possibility of distress often consider it **subjectively** when they compare the multiple for the firm they are analysing to the industry average.

*Example from the source chapter.* Assume the average telecom firm trades at **2 times revenues**. Adjust this multiple down to **1.25 times revenues** for a distressed telecom firm. (A 37.5% discount.)

*Worked example 14.4.* Distressed telecom with revenue ₹1,600 crore: value = 1.25 × 1,600 = ₹2,000 crore (EV), against ₹3,200 crore at the healthy multiple. If net debt is ₹1,900 crore, equity value = ₹100 crore — a thin slice, consistent with the fact that leverage magnifies the effect of distress on equity.

## 14.7 Comparison of the four methods

| Method | Core idea | Best when | Weakness |
|--------|-----------|-----------|----------|
| Modified DCF | Probability-weighted cash flows | Distress probabilities estimable by period | Needs probability estimates; risk of double-counting |
| DCF + distress value | Blend of going-concern and distress sale values | Binary outcome (recover vs fail) | Single probability and a single distress value |
| APV | Unlevered value + tax shield − bankruptcy costs | Capital structure issues central; firm with significant debt | Needs cost-of-bankruptcy and probability |
| Relative | Adjusted peer multiples | Quick cross-check; loss-making firms | Subjective discount; peers not distressed |

## 14.8 Liquidation value as a floor

For a distressed firm the liquidation value is a **floor** for the enterprise value to creditors; if the going-concern value is below liquidation value, creditors may prefer liquidation. The valuer should compute both (Chapter 13) and state which premise applies. Equity is an **option** on the firm: even when the enterprise value is below debt, equity has some value if there is a chance of recovery before the debt matures — one reason distressed-company equity can trade above zero.

## 14.9 Practical issues

1. **Management forecasts are optimistic**; stress-test.
2. **Time to resolution** — legal delays erode value.
3. **Contingent liabilities** and litigation dominate.
4. **Hierarchy of claims** — allocate enterprise value by priority (secured, statutory, unsecured, preference, equity).
5. **Cash trapped** in subsidiaries or in escrow.
6. **Tax losses** may be restricted on change in control.
7. **Indian context:** the Insolvency and Bankruptcy Code process uses *fair value* and *liquidation value* determined by registered valuers for the committee of creditors; check current regulations.

## Chapter 14 summary

- Distress = inability to meet obligations due to excess debt or operating weakness; the firm is not necessarily worthless.
- Conventional DCF fails: infinite-life TV, negative cash flows, discount rates of healthy firms.
- Four methods: modified DCF (expected CF × (1 − P)); DCF + distress value (equity = DCF × (1 − P) + distress value × P); APV (unlevered + tax benefits − expected bankruptcy cost); relative valuation (e.g., 2× revenue → 1.25×).
- Liquidation value is a floor; equity behaves like an option.

## Check your understanding

1. Why do conventional DCF methods fail for distressed firms?
2. Compute equity value: DCF equity 600, distress equity 80, probability 25%.
3. APV: unlevered 1,500, tax benefit 180, distress sale 900, probability 15%. Compute firm value.
4. Why are revenue and EBITDA multiples preferred for distressed firms?
5. How do you avoid double-counting distress risk?

**Answers.** (1) Infinite-life TV, negative cash flows, going-concern assumption, discount rates of healthy firms. (2) 450 + 20 = **470**. (3) Expected bankruptcy cost = (1,500 − 900) × 0.15 = 90; value = 1,500 + 180 − 90 = **1,590**. (4) P/E and P/B are meaningless with losses and eroded book value. (5) Either probability-weight cash flows or raise the discount rate, not both.

> **Exam focus.** Write the four methods with their formulas; know the "2× → 1.25×" telecom example.

<div class="pagebreak"></div>
