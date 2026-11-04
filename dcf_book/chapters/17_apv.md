# Part V — Special Situations {.part}

<div class="pagebreak"></div>

# Chapter 17 — Adjusted Present Value and Leveraged Transactions

WACC assumes that the capital structure stays roughly constant as a proportion of firm value. When that is untrue — an LBO that pays down debt quickly, a project financed with special-purpose debt, a recapitalisation — the **adjusted present value (APV)** method is cleaner and more transparent. APV separates the value of operations from the value of financing side effects.

## 17.1 The APV idea

**APV = Value of the unlevered firm + PV of financing side effects**

1. **Value the business as if financed entirely by equity**, discounting FCFF at the *unlevered cost of equity* (Ku).
2. **Add the PV of the interest tax shield**, discounted at a rate reflecting the risk of the tax shield (Kd if debt is fixed; Ku if debt adjusts with firm value).
3. **Subtract the expected cost of financial distress** (probability of distress × cost of distress).
4. **Add or subtract other financing side effects**: subsidised loans, issue costs, tax-advantaged financing.

This follows directly from Modigliani–Miller: leverage affects value only through taxes, distress costs and other frictions.

## 17.2 The unlevered cost of equity

**Ku = Rf + βu × ERP**

For Meridian: Ku = 7.0% + 0.75 × 6.0% = **11.5%**. (Higher than WACC of 11.225%, because WACC benefits from the after-tax debt.)

## 17.3 Meridian under APV

**Step 1 — Unlevered value.** Discount the same FCFF at Ku = 11.5% (terminal value recomputed at 11.5%):

*Unlevered enterprise value = ₹2,780.4 crore.*

**Step 2 — PV of tax shields.** If debt stays at ₹600 crore permanently (a constant perpetual debt policy) and the tax shield is as certain as the interest, discount at Kd:

PV(tax shield) = t × D = 0.25 × 600 = **₹150.0 crore**. (Interest = 9% × 600 = 54; tax shield = 13.5 a year; 13.5 ÷ 9% = 150.)

**Step 3 — Distress costs.** For an A/AA-rated firm with interest cover of 4.4×, expected distress costs are small; assume zero here.

**APV (enterprise) = 2,780.4 + 150.0 = ₹2,930.4 crore.**

Compare with the WACC-based EV of ₹2,913.3 crore — within 0.6%. The two methods agree because the WACC example assumes a stable 20% debt ratio, which is close to ₹600 crore of debt on a value of ~₹2,900–3,100 crore. The small difference arises because the WACC approach grows debt with firm value, whereas the APV example holds debt fixed.

Equity under APV = 2,930.4 − 600 + 150 + 100 = ₹2,580.4 crore → ₹51.61 per share.

## 17.4 Tax-shield assumptions

The treatment of the tax shield determines APV and must match the financing policy.

| Debt policy | Tax-shield discount rate | PV of tax shield |
|-------------|--------------------------|------------------|
| Fixed amount, perpetual | Kd | t × D |
| Fixed schedule, repaid over time | Kd | Σ t × Interestₜ ÷ (1 + Kd)ᵗ |
| Constant ratio to firm value (D/V) | Ku (Miles–Ezzell / Harris–Pringle) | t × Kd × D ÷ (Ku − g) approx. |
| Tax shield only if taxable income sufficient | Kd, with probability of usage | Expected value |

Caveats: (i) the full shield is only valuable if the firm has enough taxable profit; (ii) interest-deductibility limits; (iii) personal taxes on interest income may offset part of the corporate benefit (Miller's argument).

## 17.5 Expected distress costs

**Expected cost of distress = P(distress) × PV(costs of distress)**

Costs of distress are *direct* (legal, administrative) and *indirect* (lost customers, suppliers' demands, inability to invest, employee flight): often 10–25% of firm value for non-financial firms. P(distress) can be estimated from the bond rating: cumulative default probabilities over 10 years are on the order of: AAA ≈ 1–2%; AA ≈ 3–4%; A ≈ 5–6%; BBB ≈ 10–12%; BB ≈ 25–30%; B ≈ 45–50%.

*Example.* A BB-rated firm with unlevered value ₹1,000 crore, expected distress cost 20% of value and 10-year distress probability 25%: expected distress cost = 0.25 × 200 = ₹50 crore (undiscounted simplification), which offsets about a third of the tax shield of ₹150 crore on ₹600 crore of debt.

## 17.6 When APV is superior to WACC

1. **Leverage changes materially** (LBOs, recapitalisation, deleveraging after IPO).
2. **Different parts of the firm have different financing** (project finance, subsidised loans).
3. **Distress costs are material.**
4. **Interest deductibility is restricted** or tax losses prevent immediate use.
5. **Simplicity and transparency:** APV shows precisely how much value financing creates.

WACC remains the convenient default for stable-leverage corporates.

## 17.7 Leveraged buy-out (LBO) valuation

In an LBO, a financial sponsor acquires a company using substantial debt (typically 50–70% of the purchase price), repays debt from the target's cash flows, and exits after 3–7 years at a multiple.

### 17.7.1 LBO model structure
1. **Sources and uses:** purchase price, fees; funded by senior debt, mezzanine/subordinated debt, and sponsor equity.
2. **Operating forecast:** revenue, EBITDA, capex, working capital, taxes.
3. **Debt schedule:** mandatory amortisation, cash sweep, interest (including potential PIK interest).
4. **Exit:** EBITDA × exit multiple − net debt at exit = exit equity.
5. **Returns:** sponsor's IRR and multiple of money (MoM).

### 17.7.2 Worked illustration
A sponsor buys a business with EBITDA of ₹200 crore at 8× = ₹1,600 crore EV. Debt is 5× EBITDA = ₹1,000 crore at 11%; sponsor equity is ₹600 crore (fees ignored). EBITDA grows 10% a year. After interest, tax, capex and working capital, the business generates cash that repays debt of ₹60, ₹70, ₹80, ₹90 and ₹100 crore over five years (₹400 crore in total, leaving ₹600 crore). Year-5 EBITDA = 200 × 1.1⁵ = ₹322.1 crore; exit at the same 8× = ₹2,577 crore; less remaining debt ₹600 crore gives exit equity of ₹1,977 crore. Money multiple = 1,977 ÷ 600 = 3.3×; IRR = 3.3^(1/5) − 1 ≈ 27%.

*Where did the return come from?* Equity rose from 600 to 1,977, a gain of ₹1,377 crore. EBITDA growth (322.1 − 200 = 122.1 × 8×) contributes ₹977 crore; debt paydown contributes ₹400 crore; multiple expansion contributes **nothing**, because exit equals entry. A sponsor who assumes an exit multiple above the entry multiple is relying on a source of return nobody has promised.

### 17.7.3 LBO as a ceiling for the price
Solving for the entry price that yields a 20–25% IRR gives the maximum a financial buyer could pay; strategic buyers who capture synergies may pay more.

## 17.8 Practical complications

- **Circularity** between interest and cash sweep: use iterations or average balances.
- **Debt covenants** and capacity limits: test coverage and leverage ratios.
- **Management equity** (sweet equity, ESOP): dilution of sponsor returns.
- **Exit route risk:** IPO window, strategic buyer interest.

## 17.9 Capital structure changes inside a WACC model

If you still prefer WACC with a changing capital structure, compute **annual WACC** with year-specific debt weights, and use **cumulative discount factors**. Also adjust the levered beta by year. The terminal value should reflect the long-run target structure. This is feasible but laborious; APV typically offers a cleaner path.

## Chapter 17 summary

- APV = unlevered value + PV(tax shield) − expected distress costs ± other side effects.
- Ku for operations; Kd (or Ku) for the tax shield depending on the debt policy.
- Meridian APV EV = ₹2,930 crore vs WACC EV ₹2,913 crore.
- APV excels when capital structure changes, in LBOs and in project finance.
- LBO returns come from EBITDA growth and debt paydown; multiple expansion is a risky assumption.

## Review questions

1. Why is the unlevered cost of equity higher than WACC when taxes exist?
2. Compute the PV of the tax shield on perpetual debt of 400 at 10% with tax 30%.
3. Under which conditions should the tax shield be discounted at Ku rather than Kd?
4. List three sources of LBO returns.
5. Why can APV and WACC valuations differ and when is the difference large?

<div class="pagebreak"></div>
