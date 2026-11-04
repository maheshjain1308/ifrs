# Part III — Discount Rates {.part}

# Chapter 6 — Measuring the Cost of Equity: CAPM and APT

The discount rate is the price of risk. The DCF and income approaches are only as good as the rate applied. This chapter covers the two models the syllabus names for measuring the cost of equity: the **Capital Asset Pricing Model (CAPM)** and the **Arbitrage Pricing Theory (APT)**.

## 6.1 Cost of equity: what it is

The cost of equity (Ke) is the **return shareholders require** for bearing the risk of the company's shares. It is an *opportunity cost* — what investors could earn elsewhere at equal risk — not an accounting item and not necessarily a payment the company makes. A company creates value only if it earns more than this on equity-financed investments.

A useful way to see it: investing is "assuming risk for return". An alternative way to look at the value of an investment or portfolio is to view returns as the direct benefit of assuming risks.

## 6.2 The Capital Asset Pricing Model (CAPM)

**R = Rf + β × (Rm − Rf)**

| Symbol | Meaning |
|--------|---------|
| R | Expected rate of return (the cost of equity, Ke) |
| Rf | Risk-free rate of return |
| β | Beta value of the stock |
| Rm | Market rate of return |
| (Rm − Rf) | Market risk premium (equity risk premium) |

*Worked example 6.1.* Rf = 5%, Rm = 11%, β = 2.64. Ke = 5% + 2.64 × (11% − 5%) = 5% + 15.84% = **20.84%**. (This is the cost of equity in the source chapter's Illustration 1.)

### 6.2.1 Intuition
CAPM divides risk into two buckets: (i) a **risk-free part** — the reward for waiting (time value); and (ii) a **risk part relative to the market index** — the reward for bearing market-wide risk, scaled by the stock's sensitivity (beta). Only *systematic* risk is rewarded, because specific risk can be diversified away.

### 6.2.2 Inputs
- **Risk-free rate:** yield on a long-dated government security in the currency of the cash flows. For rupee cash flows, the G-Sec yield; for a valuation date, the yield on that date.
- **Market risk premium:** estimated from long-run history (excess of equity return over government bonds), from the implied premium in the current market, or from surveys. Expect a range, not a point.
- **Beta:** from regression (stock returns on market returns) or, for unlisted firms, built bottom-up from comparables (Chapter 7).

### 6.2.3 Sanity checks on Ke
- Ke must exceed the risk-free rate and the firm's pre-tax cost of debt.
- Compare with peers' cost of equity and with the market return.
- A defensive stock (β < 1) should have Ke below the market return; a cyclical stock above.

### 6.2.4 Using CAPM for the capitalisation rate
In the income approach (Chapter 4), the capitalisation rate can be CAPM-based. In Illustration 2 of the source chapter: capitalisation rate = 4.5% + 0.9 × (12% − 4.5%) = **11.25%**; earning value = EBITDA ÷ 0.1125.

## 6.3 Strengths and weaknesses of CAPM

| Strengths | Weaknesses |
|-----------|-----------|
| Intuitive; separates risk-free and risk parts | **Oversimplifies risk** — one factor (market) |
| Easy to implement; widely used | Beta is noisy and backward-looking |
| Consistent with portfolio theory | Market portfolio unobservable; the premium is uncertain |
| Transparent | Assumes diversified investors, frictionless markets |

The source chapter identifies the greatest weakness precisely: "CAPM has gained massive popularity due to its intuitive-based approach of classifying risks into 2 buckets... However, this is also its greatest inherent weakness — the oversimplification of risks."

## 6.4 Arbitrage Pricing Theory (APT)

In the 1970s **Stephen Alan Ross**, professor and economist, introduced the idea that risk comes from **multiple factors** — a motley of **macro-economic factors** that can influence the return of an asset. The basic idea of APT is to **break risk into individual identifiable elements** that influence the overall risk in a proportion (called a **factor**); each factor is assigned its own beta, and the **sum of all the asset's sensitivities to n factors** gives the expected rate of return.

**Formula:**

**R = Rf + β₁(RP₁) + β₂(RP₂) + … + βₙ(RPₙ)**

where RPᵢ is the risk premium for factor i and βᵢ the asset's sensitivity to that factor. APT models E(R) as a **linear function of various macro-economic factors**, with sensitivity to each factor represented by a factor-specific beta coefficient.

### 6.4.1 Worked example 6.2
A stock's major influencers are the **interest rate** and the **sectoral growth rate**. Estimated betas and premia:

| Factor | β | Risk premium |
|--------|---:|------------:|
| Interest-rate fluctuation | 0.8 | 2.0% |
| Sectoral growth | 1.2 | 3.5% |

Rf = 6%. Expected return = 6% + 0.8 × 2.0% + 1.2 × 3.5% = 6% + 1.6% + 4.2% = **11.8%**.

Steps (from the source chapter): (a) calculate the risk premium for both factors (beta for factor 1 — interest rate; beta for factor 2 — sector growth); (b) add the risk-free rate.

### 6.4.2 Limitations of APT
APT by itself **does not specify the macro-economic factors** that must be tested for sensitivity; these have to be **judiciously developed by the financial analysts**, keeping in mind the economy they operate in. Estimating each factor's premium and each beta needs rich data. Hence in practice APT is more common in research than in routine valuations.

## 6.5 CAPM versus APT

| Feature | CAPM | APT |
|---------|------|-----|
| Factors | One — market | Several macro-economic factors |
| Inputs | Rf, β, market premium | Rf, factor betas, factor premia |
| Theory | Equilibrium (mean–variance) | No-arbitrage |
| Practicality | High | Lower: factors must be chosen and estimated |
| Typical use | Corporate valuation | Research, portfolio analysis |

CAPM is a special case of APT with a single factor (the market).

## 6.6 Other ways to estimate Ke

1. **Dividend-growth (Gordon) model:** Ke = D₁/P₀ + g. Useful where dividends are stable.
2. **Build-up approach:** Rf + equity premium + size premium + industry premium + specific-risk premium; common for private firms (but add-ons are judgemental).
3. **Earnings yield:** for a stable, no-growth firm, Ke ≈ E/P.
4. **Bond yield plus premium:** Kd + 3–5% as a rough check.

## 6.7 From Ke to WACC

Once Ke is known, the firm's **weighted average cost of capital** is
**WACC = Ke × E/(E + D) + Kd × (1 − t) × D/(E + D)**.
In the source chapter's Illustration 1, WACC = 20.84% × 60% + 12% × (1 − 0.30) × 40% = 12.504% + 3.36% = **15.864%**.

## 6.8 Common mistakes

1. Mixing a rupee Rf with a dollar-based market premium.
2. Using a stale or one-day Rf and Rm.
3. Using a firm's own raw regression beta without checking its error.
4. Applying CAPM to cash flows of different currency.
5. Adding a "safety margin" to Ke while also using prudent cash flows (double-counting risk).

## Chapter 6 summary

- Ke = Rf + β(Rm − Rf) (CAPM); APT: Rf + Σβᵢ·RPᵢ.
- CAPM's strength is simplicity; its weakness, oversimplification of risk.
- APT uses multiple macro-economic factors (Ross, 1970s) but leaves factor choice to the analyst.
- Ke feeds into WACC and capitalisation rates.

## Check your understanding

1. Compute Ke: Rf 7%, Rm 13%, β 1.1.
2. APT: Rf 6%; factor 1 β 0.5, premium 3%; factor 2 β 1.5, premium 2%. Compute expected return.
3. State the greatest weakness of CAPM per the source.
4. Why is APT less used in routine valuations?
5. Compute WACC: Ke 18%, Kd 10%, tax 30%, E:D = 70:30.

**Answers.** (1) 7 + 1.1 × 6 = **13.6%**. (2) 6 + 1.5 + 3.0 = **10.5%**. (3) Oversimplification of risk into two buckets. (4) Factors are not specified and need many estimates. (5) 0.7 × 18 + 0.3 × 10 × 0.7 = 12.6 + 2.1 = **14.7%**.

> **Exam focus.** Write both formulas and be ready to compare CAPM and APT in a short note. The cost of equity from CAPM feeds Illustration 1 and Q10, Q16 in Chapter 21.

<div class="pagebreak"></div>
