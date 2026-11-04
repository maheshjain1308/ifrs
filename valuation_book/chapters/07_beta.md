# Chapter 7 — Estimating Beta and Valuing Unlisted Companies

## 7.1 The information problem

The valuation approaches described so far — asset-based, earnings-based and cash-flow-based — can be applied freely to publicly traded companies, where key information about earnings, assets employed and the board's opinion on future potential is readily available. The difficulty arises for **privately held enterprises**, especially in sunrise sectors such as e-retail, service management and hospitality. They hold out a lot of promise and are increasingly attractive to venture capitalists and angel investors, yet there is no public information, no traded share price and no observable beta.

The biggest challenge in valuing a private enterprise is arriving at the **cost of capital**, which in turn depends on its **beta**.

## 7.2 Why beta needs adjustment

Most publicly listed companies have **leveraged** capital structures, whereas privately owned firms may have **little or no debt**. Yet a strategic investor taking a stake would like to grow the firm further on **leveraged funds** — raising money through corporate bonds and debt instruments. As on the valuation date, however, the beta must reflect the **un-leveraged** position; hence we use the **unlevered beta** rather than a levered one.

The same problem arises for an **existing listed company** entering a **brand new line of business**. It should not use its own WACC to evaluate the project; instead it should assess the WACC **appropriate to the risk level of the new business**. For this it needs the **Asset Beta** (ungeared beta) of the business, which is then **re-geared** according to its own gearing level.

> **Key idea.** *Asset beta* measures only the **business risk** of the underlying project or asset; it contains no financial risk. *Equity beta* adds financial risk from leverage; therefore equity beta ≥ asset beta, and the two are equal only for a debt-free company.

## 7.3 The formulas

### 7.3.1 Asset beta from equity beta (with debt beta)

**βₐ = βₑ × [E ÷ (E + D(1 − t))] + β_d × [D(1 − t) ÷ (E + D(1 − t))]**

| Symbol | Meaning |
|--------|---------|
| βₐ | Ungeared or asset beta |
| βₑ | Geared or equity beta |
| β_d | Debt beta |
| E | Equity (market value) |
| D | Debt (market value) |
| t | Tax rate |

This is the WACC logic applied to betas: the asset beta is the weighted average of equity beta and debt beta, with weights E and D(1 − t).

### 7.3.2 The usual simplification: debt beta = 0
Generally it is assumed that the debt beta tends to be zero, because bond returns are not linked to the volatility of the market portfolio. Then:

**βₐ = βₑ × [E ÷ (E + D(1 − t))]**

### 7.3.3 Re-gearing (equity beta from asset beta)

**βₑ = βₐ × [(E + D(1 − t)) ÷ E] = βₐ × [1 + (1 − t) × D/E]**

> **Pitfall.** Use the debt-to-equity ratio at *market* values for the peers when un-levering and the target's *target* debt-to-equity ratio when re-levering. D/E here is ratio of debt to equity, not debt to total capital: a "40:60 debt : equity" means D/E = 40/60.

## 7.4 The five-step method for the equity beta of a new business or an unlisted company

| Step | Action |
|------|--------|
| **1** | Identify **pure-play firms** (proxy companies engaged entirely in the same business) and their **equity betas**, to surrogate the equity beta of the new project or business |
| **2** | **De-gear** each proxy's beta to compute its **asset beta**, since different companies have different gearing levels |
| **3** | If there is only one proxy, continue with its asset beta; if there are several, take the **average** of asset betas (or choose the most appropriate company's asset beta) |
| **4** | **Re-gear** the asset beta to the capital structure of the appraising company, to reflect its financial risk: βₑ = βₐ × [E + D(1 − t)]/E |
| **5** | Insert the computed βₑ into **CAPM** to compute the required rate of return for the project or the value of the business |

### Worked example 7.1: Steps 1–4
Three listed pure-play firms in retail:

| Peer | Equity beta | D/E (market) | Tax | Asset beta (debt beta 0) |
|------|------------:|-------------:|----:|-------------------------:|
| P | 1.20 | 50% | 30% | 1.20 ÷ (1 + 0.7 × 0.5) = 1.20 ÷ 1.35 = **0.889** |
| Q | 1.00 | 25% | 30% | 1.00 ÷ 1.175 = **0.851** |
| R | 1.50 | 80% | 30% | 1.50 ÷ 1.56 = **0.962** |
| **Average** | | | | **0.901** |

The target plans to run at D/E = 40% with tax 30%: βₑ = 0.901 × (1 + 0.7 × 0.40) = 0.901 × 1.28 = **1.153**.

Step 5: with Rf = 6% and Rm = 12%: Ke = 6% + 1.153 × 6% = **12.92%**.

## 7.5 The source chapter's Illustration 1 — X Pvt. Ltd.

*A privately held company X Pvt. Ltd. operating in the retail space is scouting for angel investors.*

**Data**
- The company has achieved break-even this year; **EBITDA = 90**, which includes an extraordinary gain of 10 for the year, and a potential write-off of preliminary sales promotion costs of 20 is still pending.
- The **unlevered beta** based on the industry in which it operates is **1.8**; the average debt to equity ratio is **40:60**.
- The rate of return provided by risk-free liquid bonds is **5%**; internal assessment of market return for the industry is **11%**.
- EV is to be taken at a **multiple of 5 on EBITDA**.
- Future cash flows for the next three years: **Y1 100, Y2 120, Y3 150**.
- Pre-tax cost of debt **12%**; tax **30%**.

**Question.** What is the potential value to be placed on X Pvt. Ltd.?

### Solution
1. **Levered beta** = 1.8 × [1 + (1 − 0.3) × 40/60] = 1.8 × 1.4667 = **2.64**.
2. **Adjusted EBITDA** = 90 − 10 (extraordinary gain) − 20 (pending write-off) = **60**.
3. **EV by the multiple** = 5 × 60 = **300**.
4. **Cost of equity** (CAPM) = 5% + 2.64 × (11% − 5%) = 5% + 15.84% = **20.84%**.
5. **WACC** = 20.84% × 60/100 + 12% × (1 − 0.30) × 40/100 = 12.504% + 3.36% = **15.864%**.
6. **Discounting** the three-year cash flows at 15.864%:

| | Y1 | Y2 | Y3 |
|---|---:|---:|---:|
| Future cash flows | 100 | 120 | 150 |
| Discount factor | 0.863 | 0.745 | 0.643 |
| PV | 86.30 | 89.40 | 96.45 |

**Value of the firm = 272.15** (the source chapter's answer).

### Commentary on Illustration 1
- The EBITDA-multiple value (300) and the DCF value (272.15) are two estimates; the DCF over three years carries no terminal value, so it understates a going concern's value; the multiple-based figure is higher.
- A reasoned *range* would be **₹272–₹300**, with the final price negotiated — the lesson of Chapter 1.
- The key technical points: (i) levered beta uses *D/E = 40/60*; (ii) weights in WACC use *debt = 40%, equity = 60%*; (iii) adjust EBITDA for one-offs *before* applying the multiple.

## 7.6 Beta and cash

If a peer holds large cash balances, its operating-asset beta is *higher* than the unlevered beta suggests, because cash has a beta near zero:
**β_operating = β_unlevered ÷ (1 − Cash/Firm value)**.
Relevant for cash-rich sectors such as technology.

## 7.7 Valuing an unlisted company: a complete procedure

1. **Normalise** earnings and balance sheet (Chapter 19).
2. **Choose** a primary method: DCF (if forecasts reliable), capitalisation/PE (if stable), asset value (if asset-heavy).
3. **Compute Ke** using bottom-up beta (this chapter), re-levered at the target structure.
4. **Compute WACC** with a cost of debt reflecting the firm's own credit standing (not a peer's).
5. **Forecast** FCFF; compute TV.
6. **Adjust** for lack of marketability and control, if the standard of value requires.
7. **Cross-check** with peer multiples (adjusted for size and liquidity).

## 7.8 Common mistakes

1. Using book values of debt and equity for peers.
2. Ignoring the tax rate in de-levering/re-levering.
3. Forgetting to re-lever to the target's structure.
4. Using the target's *current* accidental capital structure when it will change.
5. Mixing D/E and D/V in the formulas.

## Chapter 7 summary

- Unlisted firms and new businesses need an **asset beta** from pure-play peers.
- βₐ = βₑ × E/[E + D(1 − t)] (debt beta 0); βₑ = βₐ × [E + D(1 − t)]/E.
- Five steps: find proxies → de-gear → average → re-gear → CAPM.
- Illustration 1: levered β 2.64, Ke 20.84%, WACC 15.864%, value 272.15.

## Check your understanding

1. Why can't a listed company use its own WACC to appraise a new business?
2. Un-lever: βₑ = 1.4, D/E = 60%, t = 25%.
3. Re-lever the result to D/E = 30%.
4. Compute the weight of equity in WACC if D:E is 40:60.
5. Why is EBITDA adjusted before applying a multiple?

**Answers.** (1) Risk of the new business differs; use asset beta re-geared. (2) 1.4 ÷ (1 + 0.75 × 0.6) = 1.4 ÷ 1.45 = **0.966**. (3) 0.966 × (1 + 0.75 × 0.3) = 0.966 × 1.225 = **1.183**. (4) 60/100 = **60%** (debt 40%). (5) To remove non-recurring items so the multiple is applied to maintainable earnings.

> **Exam focus.** Questions often give the unlevered (asset) beta and ask for re-levered beta, Ke, WACC and value (as in Illustration 1). Mind D/E vs D/V and the (1 − t) factor.

<div class="pagebreak"></div>
