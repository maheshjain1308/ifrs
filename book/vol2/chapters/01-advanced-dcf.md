# Chapter 1: Advanced DCF: APV, Capital Cash Flow and Valuation in Complex Settings

## Learning Objectives

After completing this chapter you will be able to:

- Derive the adjusted present value (APV), weighted average cost of capital (WACC) and capital cash flow (CCF) methods from a single set of assumptions, and explain exactly when they give identical answers and when they must diverge.
- Select the correct discount rate for interest tax shields under the Modigliani-Miller, Harris-Pringle and Miles-Ezzell financing policies, and relever betas consistently with the policy chosen.
- Value a business whose capital structure changes over time, including a scheduled debt paydown, using APV with year-by-year tax shields rather than a single constant WACC.
- Incorporate interest-deductibility limits, disallowed-interest carryforwards and similar tax frictions into a tax shield forecast and judge how much of the nominal shield is really worth.
- Diagnose and resolve circularity in valuation models, distinguishing circularity that is only a spreadsheet nuisance from circularity that signals a conceptual inconsistency.
- Extend APV to financial distress costs, issuance costs and subsidized financing, and use it to frame practical capital structure decisions.

## Opening Vignette

*Illustrative scenario. Brightwater Logistics is a fictional company.*

Brightwater Logistics, a regional freight and warehousing group, has agreed in principle to buy a cold-chain operator for what its board calls "a fair price." The deal team has done what Volume 1 taught: forecast free cash flow, estimate a WACC from peer data using a 35 percent target debt-to-value ratio, and discount. The answer is a little over 2.4 billion. Then the sponsor's bankers arrive with a financing plan that looks nothing like the target ratio. Brightwater will borrow heavily on day one, repay roughly a fifth of the debt every year from operating cash flow, and return to a leaner, steady-state structure by year five. The bankers' own model values the same business at a different number, and the two models disagree by more than the entire projected tax shield.

The corporate development director, Imani, asks the question that exposes the problem. "If the debt balance falls every year, what is our WACC in year three? In year four? Why would a single number apply to all of them?" Nobody has a good answer. The treasury analyst adds a second complication: the credit agreement limits deductible interest to a fraction of EBITDA, so in the early, highly levered years some interest will not be deductible at all. A third complication arrives from the modeling team. Their spreadsheet shows a circular reference warning every time the debt schedule links to the valuation, and the usual workaround, hard-coding the debt-to-value ratio, quietly assumes the answer.

Each complaint is legitimate, and each shows the same underlying fact: WACC is a shortcut that bundles an operating valuation and a financing valuation into one discount rate. When financing is simple and stable, the shortcut is accurate and convenient. When financing is complicated, the bundle comes apart. This chapter takes the bundle apart deliberately, values the operations and the financing side effects separately, shows how to put them back together, and equips you to know which tool to trust in each setting.

## 1.1 The Limits of the Standard WACC Model

Volume 1, Chapter 11 presented WACC as the discount rate that converts expected free cash flow to the firm (FCFF) into enterprise value:

```
V = Σ FCFF_t / (1 + WACC)^t
WACC = (E/V) · ke + (D/V) · kd · (1 − Tc)
```

The formula is neat, but it hides three assumptions that are easy to forget because they are never written on the page.

**Assumption 1: the weights are stable.** WACC uses market-value weights E/V and D/V. If those weights change over the forecast, so does the WACC, and a single constant rate is wrong. In an acquisition financed by a leveraged loan that is paid down, the weights drift every period.

**Assumption 2: the debt policy is one the formula understands.** Every WACC derivation assumes some rule for how debt moves with value. The textbook formula assumes debt is rebalanced to keep D/V constant, so that the debt balance rises and falls with firm value and the tax shield is as risky as the firm's operating assets. If instead the company commits to a fixed debt schedule, the tax shield is nearly as safe as the debt itself and should be discounted at a much lower rate. Using the textbook WACC on a fixed-schedule firm gives the wrong value even if every input is perfectly estimated.

**Assumption 3: the tax shield is simple.** The term `kd · (1 − Tc)` assumes every dollar of interest is deductible at the full marginal rate in the year it is paid. Real tax codes impose caps on deductible interest, require taxable income to absorb the deduction, and sometimes allow carryforwards. A shield that cannot be used is worth nothing, and a shield that is deferred is worth less than a shield taken now.

None of this means WACC is wrong. It means WACC is a derived formula, and a derived formula is only as general as its derivation. The deeper method is to ask what the tax shield is worth, directly, rather than to infer it through an adjusted discount rate. That is the logic of APV.

### 1.1.1 Valuation as additive pieces

Modigliani and Miller's first proposition says that, absent taxes and frictions, firm value is independent of capital structure. Their second paper added corporate taxes and showed that the tax deductibility of interest creates a gain from leverage. The natural valuation decomposition follows:

```
Value of levered firm = Value of unlevered firm
                        + PV(interest tax shields)
                        − PV(financial distress and agency costs)
                        + PV(other financing side effects)
```

The first term is an operating valuation: what the assets are worth if financed entirely by equity, discounted at the unlevered cost of capital ku. The remaining terms are financing effects, each valued with a discount rate appropriate to its own risk. This is the APV method, associated with Stewart Myers, who proposed it in the mid-1970s as a way to value projects with complex financing. Its virtue is modularity: each piece answers one question, can be audited separately, and can be changed without rebuilding the whole model.

### 1.1.2 The three engines and the one idea behind them

There are three standard DCF engines:

1. **WACC method.** Discount FCFF at WACC, which adjusts the discount rate for the tax shield. Equity value is enterprise value minus debt.
2. **APV method.** Discount FCFF at ku, add the separately valued tax shield and other side effects.
3. **Capital cash flow (CCF) method.** Add the tax shield to the cash flow rather than adjusting the rate: CCF = FCFF + interest tax shield, discounted at ku (or, more generally, at the rate appropriate to the combined stream).

The idea behind all three is that the value of a stream of cash flows depends only on the cash flows and their risk, and that the interest tax shield is a cash flow to the firm's capital providers like any other. The methods differ in where that cash flow is placed: in the numerator (CCF), as a separate present value (APV), or buried in the denominator (WACC). With consistent assumptions all three must agree, and verifying that agreement is the best audit of any complex valuation. When they disagree with the same inputs, an assumption has been applied inconsistently somewhere.

## 1.2 Unlevered Value and the Foundation of APV

The first step of APV is always the unlevered value, which requires an unlevered cost of equity ku. This number is not directly observable, so it is built from the observed betas of comparable firms.

### 1.2.1 Estimating ku

The unlevered cost of capital is the expected return on the firm's operating assets, which are financed by both debt and equity holders. It equals the weighted average of the expected returns on the firm's debt and equity before any tax effect:

```
ku = (E/V) · ke + (D/V) · kd        (pre-tax weights; V = E + D)
```

The same relation holds for betas: βu = (E/V) · βe + (D/V) · βd. In practice analysts often assume βd = 0 or use a small positive number reflecting credit spread risk. At high leverage the assumption matters, because a debt beta of zero forces all of the firm's systematic risk onto the equity.

Two refinements deserve mention. First, the comparable firms' leverage is itself changing, so unlevering with current market D/E is only an approximation to the average over the period. Second, the unlevering formula depends on the debt policy assumed, a point we return to in Section 1.4 when we compare financing policies.

### 1.2.2 Why ku is the right rate for operating cash flows

The free cash flow to the firm is generated by operating assets and has operating risk. Whether the firm borrows or not does not change the risk of the assets, and so does not change the rate that should discount the operating cash flows. This is why the unlevered valuation is independent of capital structure by construction. Leverage re-slices the same operating risk between debt and equity holders, and the tax shield is a separate cash flow layered on top.

The managerial payoff is clarity. If a division's WACC looks lower than ku, it is because the tax shield has been priced into the rate. Division managers who compare their return to a WACC computed from the parent's capital structure are blurring operating performance with financing policy, whereas comparing the unlevered return on capital to ku isolates operational value creation.

**Example 1.1 – Constant debt in perpetuity: APV, WACC and CCF in agreement.** Fiddlewood Components, a fictional firm, generates an expected free cash flow to the firm of 100 per year forever (no growth). Its unlevered cost of equity is ku = 10%. It issues permanent debt of D = 400 at kd = 5% and pays a 25% corporate tax rate. Because the debt amount is fixed, the tax shield is as safe as the debt, so we discount it at kd (Modigliani-Miller 1963 assumption).

*Step 1: Unlevered value.*

```
VU = FCFF / ku = 100 / 0.10 = 1,000
```

*Step 2: Tax shield.* Annual interest is 0.05 × 400 = 20; the annual shield is 0.25 × 20 = 5. Discounted at kd as a perpetuity:

```
PV(TS) = 5 / 0.05 = 100        (equivalently Tc × D = 0.25 × 400)
```

*Step 3: APV.*

```
VL = 1,000 + 100 = 1,100
E  = 1,100 − 400 = 700
```

*Step 4: Cost of equity.* With fixed debt, the Modigliani-Miller formula with taxes gives

```
ke = ku + (1 − Tc)(ku − kd)(D/E)
   = 0.10 + 0.75 × 0.05 × (400/700)
   = 0.10 + 0.02143 = 12.143%
```

*Step 5: WACC.*

```
WACC = (700/1,100) × 12.143% + (400/1,100) × 5% × 0.75
     = 7.727% + 1.364% = 9.091%
```

*Step 6: Check by WACC valuation.* VL = 100 / 0.09091 = 1,100.0. The two methods agree exactly.

*Step 7: CCF.* The capital cash flow is 100 + 5 = 105 per year. Its risk is a blend: 100 at ku and 5 at kd. The value is 100/0.10 + 5/0.05 = 1,000 + 100 = 1,100. Discounting the whole 105 at a single rate would require that rate to be 105/1,100 = 9.545%, which is neither ku nor kd but a weighted blend. This is the first hint that the CCF method needs a discount rate matched to the mixed stream whenever the shield is safer than the operations.

*A common mistake.* Suppose an analyst uses WACC = 9.091% correctly but, forgetting that ke contains the (1 − Tc) term, computes ke = ku + (ku − kd)(D/E) = 12.857%. The resulting WACC is 0.636 × 12.857% + 0.364 × 3.75% = 8.182% + 1.364% = 9.545%, giving V = 100 / 0.09545 = 1,047.6, which understates the tax benefit by more than half. Internal consistency between ke and WACC formulas is not optional.

**Takeaway.** In the simplest case all three engines agree. The value of APV is not that it gives a different answer in this case; it is that its logic remains valid when the WACC shortcut stops being valid.

## 1.3 Debt Policy and the Discount Rate for Tax Shields

The central technical question in APV is the discount rate for the interest tax shield. The correct answer depends on one thing only: how the firm sets its debt level. The tax shield in year t equals Tc × kd × D(t−1), and its riskiness is the riskiness of the debt balance D(t−1) as a forecast variable, plus the risk that the firm will not be able to use the deduction.

### 1.3.1 Policy one: fixed debt schedule (Modigliani-Miller 1963)

If the firm commits to a predetermined debt schedule, independent of how the business performs, then the future debt balances are known today and the tax shields are known cash flows as safe as the interest payments themselves. They should be discounted at the cost of debt kd. This is the right policy for a leveraged buyout with an amortization schedule written into the credit agreement, for a project financed by a bond with a sinking fund, or for a firm that issues a long-dated bond and does not touch it. The perpetuity result Tc × D is the special case of a permanent fixed balance.

The risk adjustment here is subtle. The shield is not literally riskless: if the firm defaults, the shield disappears, and in practice the firm must have taxable income to use the deduction. The cost of debt kd already contains a default premium, so discounting at kd, rather than at the risk-free rate, partially captures this. For most investment-grade firms the approximation is reasonable.

### 1.3.2 Policy two: continuous rebalancing to a target ratio (Harris-Pringle)

If the firm adjusts debt continuously to keep D/V at a target L, then the debt balance moves with firm value. When firm value falls, the firm repays debt; when it rises, the firm borrows more. The tax shield therefore rises and falls with the operating performance of the firm, and it inherits the systematic risk of the operating assets. Harris and Pringle (1985) argued that the appropriate discount rate for the shield is then ku. Under this assumption:

```
WACC = ku − kd · Tc · L
ke   = ku + (ku − kd) · D/E
```

Note the difference from the Modigliani-Miller formula: the tax term does not appear in the cost of equity because the tax shield has the same risk as the assets, so leverage does not compound its effect through a tax-adjusted spread. The WACC reduction is simply the tax shield per dollar of value, kd × Tc × L.

### 1.3.3 Policy three: annual rebalancing (Miles-Ezzell)

Miles and Ezzell (1980) considered a more realistic variant. Debt is set at the start of each year as a fixed fraction L of the then-current value, and held fixed during the year. The shield during any given year is therefore known at the start of that year (hence safe over one period, discounted at kd for that one period) but depends on the value path before that year (hence risky for all earlier periods, discounted at ku). The resulting WACC is:

```
WACC_ME = ku − L · kd · Tc · (1 + ku) / (1 + kd)
```

Because (1 + ku)/(1 + kd) exceeds one when ku > kd, the WACC reduction under Miles-Ezzell is slightly larger than under Harris-Pringle, so ME gives a slightly higher value. The reason is intuitive: discounting the shield at kd for its final period, instead of at ku, makes each year's shield worth a little more.

### 1.3.4 Which policy is right?

No firm follows any of these policies exactly, but the choice should reflect the facts of the case. Table 1.1 summarizes.

**Table 1.1 – Financing policies and tax shield discount rates**

| Policy | Debt rule | Discount rate for shield | WACC formula | When to use |
|---|---|---|---|---|
| Modigliani-Miller | Fixed schedule of amounts | kd | Needs adjusted ke formula; WACC varies with time if schedule is not perpetual | LBOs, bonds with sinking funds, project finance with scheduled amortization |
| Harris-Pringle | Continuous rebalancing to constant D/V | ku | ku − kd·Tc·L | Mature firms with a stated target leverage ratio; terminal value periods |
| Miles-Ezzell | Annual rebalancing to constant D/V | ku (then kd for the final year) | ku − L·kd·Tc·(1+ku)/(1+kd) | Same as HP, with discrete annual debt resets; a slightly higher value |
| Hybrid | Fixed schedule for N years, then target ratio | kd during schedule, ku afterward | Time-varying | Acquisitions where deleveraging precedes steady state |

Three practical guidelines follow. First, if the debt balance in the model is a fixed schedule, use kd. If the debt balance in the model is computed as a percentage of a value, use ku. Second, if the answer between the two policies is large relative to the deal premium, the financing policy is itself a negotiating variable and must be stated explicitly in the valuation memo. Third, for the terminal value period, where firms are assumed to settle into a stable target, the Harris-Pringle approach is standard.

The choice also has an economic meaning: tax shields that depend on firm value are riskier because they vanish in bad states, and a firm that cuts debt as value falls is gaining safety for its creditors but giving up shield exactly when the firm most needs it. In the opposite policy, a rigid schedule makes the shield safer but exposes the firm to distress in downturns. The valuation consequence of this trade-off is just an application of discounting by risk.

### 1.3.5 Relevering betas consistently

The policy chosen has direct consequences for unlevering and relevering betas, which is where most practical errors originate. For the three policies the relationship between levered equity beta βe and unlevered beta βu is:

```
Harris-Pringle:        βe = βu + (βu − βd) · D/E
Modigliani-Miller:     βe = βu + (βu − βd) · (1 − Tc) · D/E
Hamada (βd = 0, MM):   βe = βu · [1 + (1 − Tc) · D/E]
```

The Hamada formula, familiar from Volume 1, is the MM formula with a zero debt beta. It is the most commonly used and the most commonly misapplied: it assumes a fixed-debt-amount policy even when the firm targets a constant ratio.

**Example 1.2 – Brightwater: WACC, APV and CCF for a target-ratio firm.** Return to the Brightwater acquisition target. Expected FCFF for the next five years is 120, 132, 145, 157 and 168, growing at 3% perpetually thereafter. Unlevered cost of equity ku = 9.5%; cost of debt kd = 5%; tax rate 25%. The firm maintains a target D/V = 35%, rebalanced to value (Harris-Pringle).

*Step 1: WACC.*

```
WACC = 0.095 − 0.05 × 0.25 × 0.35 = 0.095 − 0.004375 = 9.0625%
```

*Step 2: Terminal value at year 5 (WACC method).* FCFF in year 6 = 168 × 1.03 = 173.04.

```
V5 = 173.04 / (0.090625 − 0.03) = 173.04 / 0.060625 = 2,854.27
```

*Step 3: Discount at WACC.* Present values of the explicit cash flows are 110.03, 110.97, 111.77, 110.97 and 108.88, totaling 552.62. The terminal value contributes 2,854.27 / 1.090625^5 = 1,849.77. Enterprise value:

```
V0 = 552.62 + 1,849.77 = 2,402.39
```

*Step 4: APV, step one (unlevered value at ku = 9.5%).* The explicit FCFF present values are 109.59, 110.09, 110.44, 109.21 and 106.72, a total of 546.04. The unlevered terminal value is 173.04 / (0.095 − 0.03) = 2,662.15, whose present value is 2,662.15 / 1.095^5 = 1,691.07. Hence VU = 2,237.12.

*Step 5: APV, step two (tax shields).* Debt at the start of each year equals 35% of that year's opening value. Using the value path implied by Step 3, the year-end values V0 through V5 are 2,402.39, 2,500.11, 2,594.68, 2,684.82, 2,771.13 and 2,854.27, so opening debt D0 through D5 is 840.84, 875.04, 908.14, 939.69, 969.90 and 998.99. The tax shield in year t is Tc × kd × D(t−1) = 0.0125 × D(t−1). Discounted at ku (Harris-Pringle):

**Table 1.2 – Brightwater tax shield schedule (Harris-Pringle)**

| Year | Opening value | Opening debt (35%) | Tax shield | Discount factor at 9.5% | PV of shield |
|---|---|---|---|---|---|
| 1 | 2,402.39 | 840.84 | 10.51 | 0.9132 | 9.60 |
| 2 | 2,500.11 | 875.04 | 10.94 | 0.8340 | 9.12 |
| 3 | 2,594.68 | 908.14 | 11.35 | 0.7617 | 8.65 |
| 4 | 2,684.82 | 939.69 | 11.75 | 0.6956 | 8.17 |
| 5 | 2,771.13 | 969.90 | 12.12 | 0.6352 | 7.70 |
| Total, years 1-5 | | | | | 43.24 |

The terminal shield stream begins in year 6 at 0.0125 × 998.99 = 12.49 and grows at 3%; at year 5 it is worth 12.49 / (0.095 − 0.03) = 192.11 (this uses the unrounded debt; the figures match to the second decimal), and its present value is 192.11 / 1.5742 = 122.04. The total PV of tax shields is 43.24 + 122.04 = 165.27.

*Step 6: APV total.*

```
V0 = 2,237.12 + 165.27 = 2,402.39
```

APV equals the WACC value to the penny, as theory demands.

*Step 7: CCF.* Add the shield to the FCFF: 130.51, 142.94, 156.35, 168.75 and 180.12 in years 1-5, and a year-6 capital cash flow of 173.04 + 12.49 = 185.53 in the terminal period. Discounting at ku = 9.5%: terminal value = 185.53/0.065 = 2,854.27 (the same as the levered terminal value, as it should be) and the PV equals 2,402.39 again.

*Step 8: Equity value and cost of equity.* Opening debt is 840.84, so equity value is 2,402.39 − 840.84 = 1,561.55. Cost of equity under Harris-Pringle:

```
ke = 0.095 + (0.095 − 0.05) × 0.35/0.65 = 0.095 + 0.02423 = 11.923%
```

*Two incorrect variants.* (a) Discounting the same shield stream at kd = 5% instead of ku assigns the whole shield a value of 538.11 and a firm value of 2,775.23. This overstates value by 372.84, more than 15%, because the shield is attached to debt that moves with firm value and is not safe. (b) Miles-Ezzell with its own value path gives WACC = 0.095 − 0.35 × 0.05 × 0.25 × (1.095/1.05) = 9.04375% and V0 = 2,410.01, about 7.6 higher than Harris-Pringle. The sensitivity to the financing policy is modest between HP and ME and enormous between HP and a kd-discounted shield.

**Takeaway.** The tax shield discount rate is not a technicality. In this problem, the rate choice moves the answer from 2,402 to 2,775 depending only on the assumption of how debt behaves.

**Example 1.3 – Relevering a comparable's beta under different policies.** A comparable firm has an observed equity beta of 1.20, a market D/E of 0.50, a debt beta of 0.20 and a 25% tax rate. The risk-free rate is 4.0% and the market risk premium is 5.5%. We want the equity beta for our target at D/E = 1.00.

*Step 1: Unlever under each policy.*

```
Hamada (βd = 0, MM):        βu = 1.20 / (1 + 0.75 × 0.5) = 1.20 / 1.375 = 0.8727
Harris-Pringle:             βu = (1.20 × 1 + 0.20 × 0.5) / 1.5 = 1.30 / 1.5 = 0.8667
MM with debt beta:          βu = (1.20 + 0.20 × 0.75 × 0.5) / 1.375 = 1.275 / 1.375 = 0.9273
```

*Step 2: Relever to D/E = 1.*

```
Hamada:            βe = 0.8727 × (1 + 0.75 × 1) = 1.5273
Harris-Pringle:    βe = 0.8667 + (0.8667 − 0.20) × 1 = 1.5333
MM with debt beta: βe = 0.9273 + (0.9273 − 0.20) × 0.75 × 1 = 1.4727
```

*Step 3: Costs of capital under Harris-Pringle.* ku = 4.0% + 0.8667 × 5.5% = 8.767%. kd = 4.0% + 0.20 × 5.5% = 5.1%. At D/V = 50%: ke = 4.0% + 1.5333 × 5.5% = 12.433%. WACC = 0.5 × 12.433% + 0.5 × 5.1% × 0.75 = 6.217% + 1.913% = 8.129%. The shortcut ku − kd × Tc × L = 8.767% − 5.1% × 0.25 × 0.5 = 8.129% gives the same number, confirming consistency.

The three methods give relevered betas between 1.47 and 1.53, a range of 0.06, which at a 5.5% premium is only about 0.3 percentage points of cost of equity. The choice matters less here than it did for the tax shield discount rate, but it should still be consistent: unlever and relever with the same formula, and never unlever with one and relever with another.

## 1.4 Changing Capital Structure and Debt Paydown Schedules

Leveraged acquisitions, project financings, newly privatized utilities and turnarounds all share one feature: the debt balance is not stable. It is high at the start and falls as cash flow repays it, or it rises as the firm borrows to fund growth. The constant-WACC model cannot represent such a firm. A single rate that is correct in year 1 is wrong in year 4 because the weights have changed.

### 1.4.1 Why a time-varying WACC is awkward and APV is natural

You can compute a different WACC for each year. The year-t WACC applies to the transition from V(t−1) to V(t) and uses the capital structure at the start of the year. Doing so requires valuing the firm at every date first, because the weights depend on V(t−1), which is the very quantity you are solving for. Thus the time-varying WACC method is circular by construction, and unless you take care it is easy to get the algebra wrong. The APV method has no such problem. The unlevered value path does not depend on leverage at all, and the shield depends only on the debt schedule, which is an input. The method is easy to explain: operations plus shield.

When the debt schedule is a fixed commitment, discount the shield at kd. The unlevered valuation uses ku. The resulting levered values, V(t), at every date can then be used to back out the implied WACC if a stakeholder insists on seeing it. The implied rate is an output of the valuation, not an input.

### 1.4.2 Terminal value when leverage is still changing

The most common error in changing-structure valuations is the terminal value. Two clean choices exist:

1. **Terminal at target structure.** Assume that after the explicit horizon the firm settles at a stable target ratio, then value the terminal period as the unlevered terminal value plus a Harris-Pringle tax shield at that ratio. This is the standard approach for an LBO exit or a mature steady state.
2. **Terminal unlevered.** If the debt will be fully repaid, the terminal value is the unlevered value at ku. This is conservative and keeps the example transparent, but ignores the possibility that a rational firm will relever.

What is never defensible is to compute a WACC at today's high leverage and apply it to a terminal value that assumes a very different future leverage.

**Example 1.4 – Valuing a business with a scheduled debt paydown.** Larkspur Packaging, a fictional firm, is being acquired with debt that amortizes on a fixed schedule. Expected FCFF is 90, 105, 120, 135 and 150 in years 1 to 5. Beyond year 5 the firm is debt-free (assume the debt is fully repaid) and FCFF grows at 2.5%. The unlevered cost of equity is ku = 10%, the cost of debt is kd = 7% and the tax rate is 25%. The opening debt in years 1 to 5 is 600, 480, 360, 240 and 120, and it is zero thereafter. The debt amortization is contractual, so the shield is discounted at kd.

*Step 1: Unlevered terminal value at year 5.*

```
VU5 = 150 × 1.025 / (0.10 − 0.025) = 153.75 / 0.075 = 2,050.00
```

*Step 2: Unlevered value.* The present value of the explicit FCFF at 10% is 444.10, and the terminal value contributes 2,050.00 / 1.1^5 = 1,272.89. So VU = 1,716.99.

*Step 3: Tax shields.* Interest in each year is kd times opening debt, so the shield equals 0.25 × 0.07 × D(t−1) = 0.0175 × D(t−1):

**Table 1.3 – Larkspur tax shield and implied WACC path**

| Year | Opening debt | Interest | Tax shield | PV at kd = 7% | Opening value V(t−1) | D/V | Implied WACC |
|---|---|---|---|---|---|---|---|
| 1 | 600 | 42.0 | 10.50 | 9.81 | 1,743.98 | 34.4% | 9.35% |
| 2 | 480 | 33.6 | 8.40 | 7.34 | 1,817.07 | 26.4% | 9.51% |
| 3 | 360 | 25.2 | 6.30 | 5.14 | 1,884.82 | 19.1% | 9.65% |
| 4 | 240 | 16.8 | 4.20 | 3.20 | 1,946.67 | 12.3% | 9.78% |
| 5 | 120 | 8.4 | 2.10 | 1.50 | 2,001.96 | 6.0% | 9.89% |

*Step 4: APV.*

```
PV(TS) = 9.81 + 7.34 + 5.14 + 3.20 + 1.50 = 26.99
V0     = 1,716.99 + 26.99 = 1,743.98
```

The opening equity value is 1,743.98 − 600 = 1,143.98.

*Step 5: The implied WACC path.* Compute the value at each date by running the same APV from that date forward (for example V1 = PV at 10% of the remaining FCFF and terminal value, plus PV at 7% of the remaining shields = 1,817.07). Then the year-t WACC is the discount rate that satisfies V(t−1) = [V(t) + FCFF(t)] / (1 + WACC(t)). For year 1: (1,817.07 + 90) / 1,743.98 − 1 = 9.35%. The path is 9.35%, 9.51%, 9.65%, 9.78%, 9.89%, converging on ku = 10% as the debt disappears. The WACC rises monotonically because the tax advantage shrinks with the debt.

*Step 6: Compare with a constant WACC.* Suppose the analyst, working from today's capital structure, uses 9.35% for every year including the terminal period. Then:

```
V = Σ FCFF_t / 1.0935^t + [153.75 / (0.0935 − 0.025)] / 1.0935^5 = 1,887.41
```

This overstates the value by 143.43, or 8.2 percent, almost entirely because it applies a tax-advantaged rate to a terminal period in which the firm carries no debt. Even applying the correct 5-year rates to the explicit period and 10% to the terminal period is just APV done the hard way.

*Step 7: Sensitivity to the discount rate on the shield.* Discounting the same shields at ku instead of kd gives PV(TS) = 25.39 and V0 = 1,742.38, a difference of only 1.60. When the shield is small relative to firm value, the discount rate debate matters little; when the shield is large, as in the next sections, it matters a great deal.

**Takeaway.** The shield is only 1.5 percent of value in this deal, so the more important error was the constant-WACC terminal value, not the shield rate.

### 1.4.3 Managerial interpretation

A paydown schedule creates value in three ways that APV makes visible. The tax shield is largest early, when debt is greatest. The implied discount rate rises as leverage falls, so back-ended cash flows are discounted more heavily than the constant-WACC model would suggest. And the equity cash flows become progressively less risky in the finance-theory sense, but riskier in the sense of timing, because early cash flows go to creditors. For an acquirer, the lesson is that the price it can afford to pay depends on the financing path as well as on the business: the same operating forecast supports a different price under a different debt schedule. For an auditor or impairment reviewer, the lesson is that a single WACC applied to a business with a changing structure is a red flag.

## 1.5 Interest Deductibility Limits and Other Tax Frictions

The APV formula Tc × kd × D implicitly assumes that interest is fully deductible at a constant marginal rate, in the year paid, with sufficient taxable income to use it. Since the early 2010s many jurisdictions have introduced rules that restrict this. Without naming specific statutes, the common designs are:

- **Earnings-based caps.** Deductible net interest is limited to a percentage of a profit measure, often EBITDA or EBIT (30% is a common benchmark in several regimes). Interest above the cap is disallowed in the current year.
- **Carryforwards.** Disallowed interest may be carried forward indefinitely or for a limited period, to be deducted in years when capacity exists.
- **Thin capitalization rules.** Debt above a ratio to equity may generate non-deductible interest, especially on related-party loans.
- **Anti-hybrid and withholding rules** that deny deductions or add taxes in cross-border structures.
- **Limits on use of tax losses.** Net operating losses (NOLs) can usually offset only a fraction of taxable income in a given year, and the deduction may be delayed.

Rules vary by country and change frequently, so the principle matters more than any detail: model the deduction actually available, not the interest actually paid.

### 1.5.1 Modeling a capped shield

The correct method builds the tax shield from a deductibility schedule, not from the debt schedule alone. For each year:

```
Interest capacity_t  = cap% × EBITDA_t
Interest available_t = Interest_t + Carryforward_(t−1)
Deducted_t           = min(Interest available_t, Interest capacity_t)
Carryforward_t       = Interest available_t − Deducted_t
Tax shield_t         = Tc × Deducted_t
```

Then discount the shield. The discount rate question reappears with a twist: the shield now depends on EBITDA, an operating variable, as well as on debt. A shield whose size is capped by EBITDA is positively correlated with the firm's operating performance, so it deserves a rate between kd and ku. A common compromise is a rate midway between the two, or discounting the capped portion at ku and any portion not subject to the cap at kd. Whatever you choose, document it.

### 1.5.2 What the cap does to optimal leverage

An earnings-based cap changes the shape of the benefit of debt. Below the cap, each additional dollar of debt generates a full shield. Above it, the marginal interest dollar is disallowed in the current year and valued, at best, at the discounted value of a deduction far in the future. The marginal shield falls to near zero. Optimal leverage in the presence of a binding cap therefore lies near the point where interest equals the cap, in contrast with the unconstrained trade-off, where the optimum depends on the distress cost curve. For a firm whose interest burden is well within the cap, the cap is irrelevant, but for LBOs with 6x leverage and 7 percent interest, it often binds in the early years.

**Example 1.5 – Valuing a capped shield with carryforward.** Tallgrass Foods, a fictional firm, carries permanent debt of 1,200 at kd = 7%, so annual interest is 84. The tax rate is 25%. Deductible net interest is limited to 30% of EBITDA. EBITDA is 180, 195, 210, 225 and 240 in years 1 to 5, growing at 2% thereafter. Disallowed interest carries forward indefinitely.

*Step 1: Naive shield.* Without the cap, the shield is 0.25 × 84 = 21.00 each year, and its present value at 7% is 21.00 / 0.07 = 300.00 (equal to Tc × D).

*Step 2: Cap schedule, years 1 to 5.*

**Table 1.4 – Tallgrass interest limitation schedule**

| Year | EBITDA | Interest | Cap at 30% | Deducted | Carryforward (end) | Shield (actual) | Shield (naive) |
|---|---|---|---|---|---|---|---|
| 1 | 180.0 | 84.0 | 54.0 | 54.00 | 30.00 | 13.50 | 21.00 |
| 2 | 195.0 | 84.0 | 58.5 | 58.50 | 55.50 | 14.63 | 21.00 |
| 3 | 210.0 | 84.0 | 63.0 | 63.00 | 76.50 | 15.75 | 21.00 |
| 4 | 225.0 | 84.0 | 67.5 | 67.50 | 93.00 | 16.88 | 21.00 |
| 5 | 240.0 | 84.0 | 72.0 | 72.00 | 105.00 | 18.00 | 21.00 |

The cap binds in every year, and in all of them interest exceeds capacity. The carryforward balance grows to 105 in year 5 and, because EBITDA grows at only 2%, continues to grow until EBITDA reaches the level at which the cap (30% × EBITDA) equals 84, which is EBITDA = 280. It then declines slowly. The carryforward is fully exhausted only in year 26.

*Step 3: Present value.* Discounting the actual shield at 7% over all years gives 280.53, compared with the naive 300.00. The cap costs 19.47, or 6.5% of the shield. If the carryforward did not exist, so that disallowed interest vanished, the value would be 271.68, a loss of 28.32 or 9.4%.

*Step 4: Sensitivity to the discount rate.* Because the shield depends on EBITDA, an analyst may reasonably discount at a higher rate. At 8.5%, the actual shield is worth 226.75 against a naive 247.06, a loss of 20.31. At 10%, 189.32 against 210.00, a loss of 20.68. The cap's cost is stable at about 20 across rates, but the level of the shield falls substantially: the rate matters more than the cap.

*Step 5: Debt capacity.* In year 1 the cap of 54 supports debt of only 54 / 0.07 = 771 at 7% interest. The firm's 1,200 is 55 percent above that. A deal team that sized debt to the year-1 cap would borrow about 36 percent less, cut the nominal shield to 0.25 × 771 = 192.86, and avoid paying, for decades, interest that earns no deduction; whether that trade is attractive depends on the cost of the extra equity, which is why the cap turns a tax question into a capital structure question.

**Takeaway.** The cap converts a safe, immediate cash flow into a delayed, uncertain one. The loss is modest here because growth in EBITDA eventually releases the carryforward, but for a firm with flat or falling EBITDA the carryforward would never be used, and the value of the shield would approach the 271.68 case or lower.

### 1.5.3 Taxable income and loss limits

A deduction is valuable only if taxable income exists to absorb it. Suppose Tallgrass has EBIT of only 60 in a weak year and interest of 84. Taxable income is −24. Under most systems the loss carries forward and offsets future taxable income, perhaps subject to a percentage limit. The year's shield is zero, and a later year's cash taxes are lower by 25% of 24 = 6, discounted. For a stable, profitable firm the timing cost is trivial. For a start-up, a distressed firm or a highly levered firm in a down year, it can eliminate most of the shield, which is part of why distress and tax-loss considerations interact in practice.

Two practical valuation devices follow. First, forecast taxable income, not just EBITDA, and compute the tax shield as the reduction in tax actually paid: the difference between taxes with and without interest. This approach captures caps, losses, carryforwards and limits automatically. Second, treat accumulated NOLs and disallowed-interest carryforwards as separate assets valued in the APV, using the expected utilization schedule and a discount rate between kd and ku.

## 1.6 Circularity in Valuation Models

Circular references are the most common technical frustration in applied valuation. They appear in three distinct forms, and the right response differs.

### 1.6.1 Form one: the WACC circularity

If the capital structure is specified as a dollar amount of debt, D/V depends on V, WACC depends on D/V and V depends on WACC. The WACC method with a fixed debt amount is therefore circular. The circularity is real in the sense that the answer depends on both, but it is well behaved: the mapping from a guess of V to an updated V is a contraction, and simple iteration converges rapidly. Analysts often cut the circle by hard-coding a target D/V, which converts the problem into the standard target-ratio case but silently changes the debt policy. A better resolution is to solve the circle algebraically (the Harris-Pringle model with D given today has a closed form) or to use APV, which has no circle at all.

**Example 1.6a – Iterating to the fixed point.** A firm has FCFF of 120 in year 1, growing at 3%. ku = 10%, kd = 5.5%, tax rate 25%. Today's debt is 600 and thereafter it is rebalanced to a constant ratio of value (Harris-Pringle).

*Iteration.* Start with a guess V = 1,500. The implied D/V = 0.40, WACC = 0.10 − 0.055 × 0.25 × 0.40 = 9.45%, so the updated V = 120 / (0.0945 − 0.03) = 1,860.47. Repeat:

**Table 1.5 – Convergence of the WACC circularity**

| Iteration | V used | D/V | WACC | Updated V |
|---|---|---|---|---|
| 0 | 1,500.00 | 40.00% | 9.4500% | 1,860.47 |
| 1 | 1,860.47 | 32.25% | 9.5570% | 1,830.23 |
| 2 | 1,830.23 | 32.78% | 9.5490% | 1,832.28 |
| 3 | 1,832.28 | 32.75% | 9.5500% | 1,832.13 |
| 4 | 1,832.13 | 32.75% | 9.5500% | 1,832.14 |

The iteration converges to V = 1,832.14 in four steps. The closed form from APV confirms it: VU = 120 / 0.07 = 1,714.29; the shield is Tc × kd × D / (ku − g) = 0.25 × 0.055 × 600 / 0.07 = 117.86; V = 1,714.29 + 117.86 = 1,832.14. APV found in one line what the WACC method needed a loop to find. The converged D/V of 32.75% differs from the starting 40% used in the first pass, which shows how misleading it is to compute WACC from a debt amount divided by an unadjusted or book value: the first pass overstated the leverage benefit by about 28 in value.

### 1.6.2 Form two: the interest-cash-sweep circularity

In financing models, interest is calculated on average debt balance, the balance depends on cash sweep, and the sweep depends on cash flow after interest. This circularity is operational, not conceptual. It exists because interest is paid during the year while the balance changes during the year.

**Example 1.6b – Interest on average balance with a cash sweep.** Opening debt is 800, interest rate 8%, tax 25%. EBITDA is 200, depreciation 50, capital expenditure 40, increase in working capital 10. All free cash after interest and tax is used to repay debt. Interest is charged on the average of opening and closing balances.

*Step 1: Pre-interest free cash flow.* Unlevered after-tax cash flow = (200 − 50) × 0.75 + 50 − 40 − 10 = 112.50.

*Step 2: Express the circularity.* Cash available for repayment = 112.50 − interest × (1 − 0.25). Closing debt = 800 − repayment. Interest = 0.08 × (800 + closing) / 2.

*Step 3: Iterate.* Guess closing = 800 → interest 64.00 → repayment 112.50 − 48.00 = 64.50 → closing 735.50. Next: interest = 0.04 × (800 + 735.50) = 61.42 → repayment 66.435 → closing 733.565. Next: interest 61.3426 → repayment 66.493 → closing 733.507. Then 733.505, and the process has converged.

*Step 4: Closed form.* Let k = 0.08 × 0.75 / 2 = 0.03. Then closing = [800 × (1 + k) − 112.50] / (1 − k) = (824 − 112.50) / 0.97 = 733.505. Interest = 61.34, repayment 66.49.

Spreadsheet implementations cut this circle three ways: enabling iterative calculation, computing interest on opening balance (which understates the repayment benefit slightly), or using the algebraic solution. The algebraic solution is the most robust because it never fails to converge when a model is broken by an error elsewhere.

### 1.6.3 Form three: the conceptual circularity

The third form is not a spreadsheet problem at all. It arises when the model uses inputs that already embody the answer. Examples: estimating the cost of equity from a beta relevered at a target D/V that was itself derived from the valuation; using the book value of debt to total capital weights; setting the debt amount to a fixed multiple of EBITDA that reflects a prior assumption about price; or using a terminal growth rate tied to reinvestment that is not consistent with the terminal ROIC. No iteration cures these because the iteration converges to a self-consistent but unjustified answer. The remedy is to state the financing policy in terms of observable quantities (debt schedule, target rating, coverage ratio), and let value be the output.

### 1.6.4 Practical rules for circularity

1. If the debt is a dollar schedule, use APV. There is no circle.
2. If the debt is a target ratio, use WACC (Harris-Pringle or ME) with the ratio as an input. There is no circle.
3. If you must use a dollar amount with WACC, iterate or solve algebraically, and report the converged ratio so that reviewers can check that it is reasonable.
4. Build an iteration switch with a convergence tolerance, and a check cell showing the difference between the last two iterations. Never leave iterative calculation on without a visible check.
5. Whenever two methods are available (APV and WACC), build both and reconcile them.

## 1.7 Financial Distress, Issuance Costs and Subsidized Financing in APV

The strength of APV is that any financing side effect can be added as its own line. The tax shield is only the first. Three others matter in practice.

### 1.7.1 Expected costs of financial distress

Debt creates a tax shield, but it also raises the probability that the firm will fall into distress, where costs are incurred: legal and administrative fees, lost customers and suppliers, asset fire sales, underinvestment and managerial distraction. The trade-off theory of capital structure (Volume 1, Chapter 15) balances these two effects. APV makes the trade-off computational:

```
PV(distress costs) ≈ Σ P(distress in year t) × Cost of distress × discount factor
```

A tractable approximation uses a constant annual probability of distress p, that depends on leverage, and a cost equal to a fraction c of unlevered value. Treat distress as a perpetual hazard. The expected annual loss is p × c × VU, and the present value, using a discount rate of ku + p to reflect the fact that the process stops once distress occurs, is:

```
PV(distress) = c × VU × p / (ku + p)
```

This formula is a model of the form of the cost, not an estimate of its level. Both p and c must come from evidence: a rating-based default probability for p, and studies or case experience for c. Estimates in the academic literature vary widely, and the honest practice is to present a range.

**Example 1.7 – APV optimal leverage with distress costs.** A fictional firm has unlevered value VU = 1,000 (ku = 10%) and a tax rate of 25%. Debt is permanent, so the shield is Tc × D. The annual probability of distress rises with leverage, and the cost of distress is 30% of unlevered value.

*Step 1: Compute the shield and distress cost at each leverage level.* For example at D = 600 with p = 3%: shield = 0.25 × 600 = 150; distress = 0.30 × 1,000 × 0.03 / (0.10 + 0.03) = 9 / 0.13 = 69.23; net benefit = 150 − 69.23 = 80.77.

**Table 1.6 – Net value of leverage with distress costs**

| Debt D | Annual p(distress) | PV tax shield | PV distress cost | Levered value | Net gain vs. unlevered |
|---|---|---|---|---|---|
| 0 | 0.0% | 0.0 | 0.0 | 1,000.0 | 0.0 |
| 200 | 0.3% | 50.0 | 8.7 | 1,041.3 | 41.3 |
| 400 | 1.0% | 100.0 | 27.3 | 1,072.7 | 72.7 |
| 600 | 3.0% | 150.0 | 69.2 | 1,080.8 | 80.8 |
| 800 | 7.0% | 200.0 | 123.5 | 1,076.5 | 76.5 |
| 1,000 | 14.0% | 250.0 | 175.0 | 1,075.0 | 75.0 |

*Step 2: Read the optimum.* Value peaks at D = 600 (60% of unlevered value, about 55.5% of levered value) with a net gain of 80.8, which is about 8% of unlevered value. The curve is flat: between 400 and 1,000 of debt, the levered value stays between 1,072.7 and 1,080.8. The flatness is the real lesson. The precise optimum is unknowable, but the loss from being roughly right is small, whereas the loss from being very wrong (for example, borrowing to the point where distress costs include fire sales and lost franchise) is not captured by an approximation with a constant cost fraction.

*Step 3: Interpret.* Managers should regard the APV leverage curve as a way to see the gradient of tax benefit and distress cost, not as a precise target. The firm with volatile cash flows, intangible assets or high growth options has a steeper distress cost curve and a lower optimum, which matches the intuition that biotech firms carry little debt and regulated utilities carry a lot.

### 1.7.2 Issuance costs and subsidized financing

Raising external capital costs money. Underwriting fees, legal fees and, for equity, discounts to market price are real cash outflows. APV subtracts them directly: if issuing 500 of debt costs 1.5% in fees, subtract 7.50 (or the fee amortized if tax-deductible, which adds back a small tax shield on the amortization). In WACC models, issuance costs are usually either ignored or hidden by adjusting the cost of capital upward, which is imprecise because fees are a one-time outflow, not a continuing rate.

Subsidized financing is the second example. A government development bank that lends at 3% to a project whose market borrowing cost would be 6% provides a benefit equal to the present value of the interest saving, discounted at the market rate:

```
PV(subsidy) = Loan − PV of loan payments at market rate kd(market)
```

For a bullet loan of 1,000 for 10 years at 3% against a market rate of 6%, the annual interest is 30, the principal is 1,000, and the PV at 6% is 30 × 7.3601 + 1,000 × 0.5584 = 220.80 + 558.39 = 779.19. The subsidy is 1,000 − 779.19 = 220.81, which is added to the APV (and taxed if the interest saving is taxable). A WACC model would typically embed the 3% cost of debt in the rate and mix the subsidy with the operating value, making it impossible to evaluate whether the project is attractive on its own merits or only because of the subsidy.

### 1.7.3 Other side effects

Other items that APV can value explicitly include the value of existing tax-loss carryforwards, accelerated depreciation or investment tax credits tied to the project, transfer-pricing benefits, the value of a government guarantee and hedging costs. Each is a cash flow with its own risk, and each is discounted accordingly.

## 1.8 Implementation: Choosing Methods and Avoiding Mistakes

### 1.8.1 Which method when?

**Table 1.7 – Choosing among APV, WACC and CCF**

| Situation | Best method | Reason |
|---|---|---|
| Stable target D/V, simple taxes, mature firm | WACC | Convenient, widely understood, equivalent to APV under HP/ME |
| Debt follows a schedule (LBO, project finance) | APV (shield at kd) | Capital structure changes by contract; WACC would have to vary yearly |
| Interest limits, NOLs, or complex tax profile | APV or CCF with explicit tax computation | Shield must be built from taxable income, not a formula |
| Valuing a division or project of a levered parent | APV (value operations at ku, add allocated shield) | Separates operating value from parent's financing choices |
| Needing a market-consistent equity cash flow check | FCFE or CCF as cross-check | Reconciles to equity holders' perspective |
| Cross-border, subsidized, or hybrid financing | APV with extra lines | Each side effect priced at its own rate |

### 1.8.2 Common mistakes

1. **Using the book or target weights without checking they are consistent with the debt schedule.** Weights must be market values at each date.
2. **Applying a constant WACC to a firm whose leverage is changing.**
3. **Discounting a value-linked tax shield at kd.** Example 1.2 showed an error of more than 15 percent.
4. **Discounting a fixed-schedule tax shield at ku.** The error is the opposite and usually smaller: it understates the shield slightly.
5. **Using the same tax rate for the shield as for operations without checking the marginal rate.** The shield should be valued at the marginal rate on the deducted interest, which may differ from the average rate on operating income.
6. **Double-counting the tax shield.** If FCFF is calculated from NOPAT (taxed on operating income, which excludes the shield) and then discounted at WACC, the shield is counted once through WACC. Adding a separate shield to a WACC valuation counts it twice.
7. **Ignoring debt beta when leverage is high.** At D/V above 50 percent, a zero debt beta forces implausibly high unlevered betas.
8. **Mismatching nominal and real, or currency, between cash flows and discount rates.**
9. **Letting terminal value dominate silently.** In Example 1.2, 77 percent of enterprise value is the terminal value. Terminal assumptions about growth, reinvestment and leverage deserve separate attention.

### 1.8.3 A reconciliation routine

The most useful habit in advanced DCF is reconciliation. For any valuation with a changing structure, do the following:

1. Value operations at ku (the unlevered value).
2. Value the shield with the chosen policy.
3. Compute the implied WACC path and verify that each year's value matches the WACC recursion.
4. Compute the CCF value and check that it equals APV.
5. Compute the implied equity cost and check that it is consistent with the beta, the leverage and the policy.
6. Compare the implied cost of equity with comparables and with any reported market data; unreasonable implied rates (for instance, a cost of equity below the cost of debt) indicate an error.

If any of the checks fail, the valuation has an internal inconsistency that no amount of sensitivity analysis will cure.

### 1.8.4 Managerial implications

Valuation is not an end in itself. The decisions that depend on it include how much to pay for an acquisition, whether to approve a project, whether to refinance, and whether to change the debt policy. APV makes the financing contribution of each decision visible: an acquirer can say that of a bid of 2,400, about 2,237 is operating value any buyer could capture and 165 is a financing effect specific to its structure. The financing component is the portion most dependent on assumptions about taxes, leverage and credit markets, and it is therefore the portion where a negotiator should be most cautious about sharing value with the seller. A bidder who pays the seller for a tax shield that the bidder will not be able to use, because of an interest cap or because the business will be loss-making, has transferred value to the seller for nothing.

## Case Study: Halvorsen Industrial Coatings

*Illustrative case. All names and figures are fictional.*

Halvorsen Industrial Coatings makes protective coatings for pipelines and storage tanks. A strategic buyer, Kestrel Materials, is considering acquiring it. Halvorsen's owners have set a price expectation of "around 1,300." Kestrel's investment banker has delivered a WACC-based valuation, and Kestrel's treasurer has proposed a financing plan that borrows 450 at closing, amortizes 50 per year and has the business settle at a debt ratio of 25 percent of value after year 5. Kestrel's CFO, Dara Okonkwo, wants the finance team to produce a valuation she can defend to her board and to the lender, one that explains how much of any premium comes from operations and how much comes from financing.

**Forecasts.** Expected FCFF is 70, 78, 86, 93 and 100 in years 1 to 5, growing 2.5% a year thereafter. EBITDA is 130, 138, 146, 153 and 160 in years 1 to 5. Kestrel estimates the unlevered cost of capital at 9.5% using comparable firms. The acquisition debt costs 6.5%. The tax rate is 25%. The credit agreement and the tax code both limit deductible interest to 30 percent of EBITDA, with indefinite carryforward of disallowed interest. The debt balances at the start of years 1 to 5 are 450, 400, 350, 300 and 250. After year 5, debt is rebalanced to 25% of value.

**The banker's WACC valuation.** The banker computed WACC using the closing debt of 450 over an estimated enterprise value of about 1,334, a D/V of 33.7 percent. WACC = 9.5% − 6.5% × 0.25 × 0.337 = 8.95%. Applied to the full forecast including the terminal value, this gives an enterprise value of 1,362.40.

**The APV analysis.**

1. *Unlevered value.* The FCFF discounted at 9.5% gives 1,252.85 (explicit period plus a terminal value of 1,464.29 at year 5).
2. *Shield during amortization.* The interest is 29.25, 26.00, 22.75, 19.50 and 16.25, all below the cap in the base case (cap 39.0, 41.4, 43.8, 45.9 and 48.0). The shield is 7.31, 6.50, 5.69, 4.88 and 4.06, with present value 24.06 at 6.5%.
3. *Terminal shield.* After year 5, the Harris-Pringle shield at 25% leverage lifts the year-5 value from 1,464.29 to 1,554.50, a shield of 90.22 at year 5 and 57.31 today.
4. *APV total:* 1,252.85 + 24.06 + 57.31 = 1,334.22. Equity value at closing is 1,334.22 − 450 = 884.22.

**Cross-checks and stresses.** A constant WACC at the 25% target ratio (9.094%) gives 1,332.30, close to APV, but only because the time-varying shield in the amortization period is small and the terminal ratio matches the WACC; the banker's use of today's 33.7% leverage for all years, including the terminal period, overstates the value by 28.18. In a downside where EBITDA is only 70% of forecast, the cap (27.3 in year 1) falls below interest of 29.25 for one year, and APV falls by only 0.03. If EBITDA is 50% of forecast, the cap binds in all five years (interest exceeds capacity in the first three years, and the carryforward then absorbs the later headroom), a carryforward of 4.70 remains at year 5, and APV falls by 0.84 to 1,333.38. The caps do not matter much because the debt is modest relative to EBITDA, with 3.5 times opening leverage on year-1 EBITDA.

Dara's team notes that the financing contribution to value is small: the shield is 81 out of 1,334, or 6 percent, and 70 percent of it is the terminal shield, which depends on a leverage policy Kestrel will choose and not on anything Halvorsen's owners have created. Her concern is the price. The owners expect 1,300, and APV says the business is worth 1,334 to Kestrel under the planned financing but 1,253 to a buyer who uses no debt. Any bidder with a similar structure can capture similar shields, so competitive pressure will tend to push the price toward the shield-inclusive value. Kestrel's incremental benefit comes from operating synergies, which are not in these forecasts.

**Discussion Questions**

1. Explain why the banker's 1,362.40 and the APV value of 1,334.22 differ, and identify which assumption in the banker's model is the least defensible. Would the answer change if the banker used a 25% leverage ratio throughout?
2. Kestrel's treasurer proposes paying down debt faster. How would you use the APV framework to estimate the value effect, and what would you need to know about the cost of the equity or cash used to repay?
3. The base case cap is not binding but the 50% EBITDA case causes a carryforward. How should the valuation team decide whether to discount the shield at kd, ku or something in between, and what is the effect on the 1,334.22?
4. Halvorsen's owners argue that the tax shield belongs to them because it exists "inside" their company. Develop the argument for and against sharing the shield with the seller, including which portion of the shield is attributable to Kestrel's own financing decisions.

## Key Takeaways

- WACC, APV and CCF are three arrangements of the same valuation logic. With consistent assumptions they must agree, and a disagreement is a diagnostic signal rather than a matter of preference.
- The unlevered value discounts operating cash flows at ku, which reflects only operating risk, and is independent of financing policy by construction.
- The discount rate for the tax shield follows from the debt policy: kd for a fixed debt schedule, ku for debt rebalanced continuously to a target ratio, and ku with a one-period kd adjustment for annual rebalancing.
- Using a shield rate inconsistent with the debt policy can change value by more than 15 percent in a levered target, which is far larger than most disputes about the cost of equity.
- When the capital structure changes, as in an LBO, build the valuation from APV with year-by-year shields and treat the implied WACC as an output that rises as debt is repaid.
- A constant WACC applied to a changing structure, and especially to a terminal value with a different leverage, is the most common and most costly error in acquisition valuation.
- Interest limitation rules convert the shield from a function of debt alone to a function of debt and earnings, with a delay and a lower value; model the deduction actually available, and value carryforwards as separate assets.
- Circularity comes in three forms: a real but convergent WACC loop, an operational interest-on-average-balance loop, and a conceptual loop in which inputs embody the answer; only the first two can be solved numerically.
- APV extends naturally to distress costs, issuance costs and subsidies, and its leverage curve is typically flat near the optimum, so practical policy should aim for a sensible range, not a point.
- Always reconcile two methods and test implied costs of equity for reasonableness before relying on a valuation.

## Review Questions

1. Why does the value of the unlevered firm not depend on the firm's capital structure, and what discount rate does this imply for operating cash flows?
2. Explain how the debt policy determines the riskiness of the interest tax shield. Why is a shield tied to a fixed debt schedule less risky than one tied to a constant D/V ratio?
3. Write the WACC formulas under Modigliani-Miller (fixed debt) and Harris-Pringle (constant D/V) policies. What is the economic reason that the cost of equity formula differs between them?
4. What is the Miles-Ezzell assumption, and why does it produce a slightly higher value than Harris-Pringle?
5. Why is a single WACC inappropriate for valuing a leveraged buyout with a scheduled debt paydown? How does APV avoid the problem?
6. Describe how you would treat the terminal value in a valuation where leverage declines during the forecast period and the firm then relevers to a target ratio.
7. What is the capital cash flow method and how does it differ in the placement of the tax shield from APV and WACC?
8. How does an earnings-based interest cap affect the value of the tax shield and the optimal level of debt? What additional information is needed to value a disallowed-interest carryforward?
9. Distinguish the three forms of circularity in valuation models and give a resolution for each.
10. Why is the APV leverage curve flat near its maximum, and what does this imply about how precisely managers should try to target a capital structure?

## Problems

**Problem 1.** A firm has FCFF of 60 per year forever, ku = 12%, permanent debt of 250 at kd = 6%, and a 30% tax rate. Compute (a) the unlevered value, (b) the PV of the tax shield, (c) levered value and equity value, (d) the cost of equity using the Modigliani-Miller formula, and (e) the WACC, and verify that discounting FCFF at WACC reproduces the levered value.

**Problem 2.** A firm expects FCFF of 50 next year, growing at 4% forever. ku = 10%, kd = 5%, tax rate 25%, and the firm rebalances debt to 40% of value. Compute the WACC, the enterprise value, the unlevered value, the value of the tax shields and the opening debt balance.

**Problem 3.** A target's FCFF is 40, 45 and 50 in years 1 to 3, with 3% growth afterward. It is financed with debt of 300, 200 and 100 at the start of years 1 to 3 and no debt afterward. ku = 9%, kd = 6%, tax rate 25%. Compute the unlevered value, the PV of shields discounted at kd, the APV, and the APV if shields are discounted at ku. Assume that the firm is unlevered after year 3.

**Problem 4.** A firm has EBITDA of 100 each year forever, permanent debt of 500 at 8%, a tax rate of 25% and a cap of 30% of EBITDA on deductible interest, with disallowed interest lost permanently (no carryforward). Compute the annual shield actually obtained, its PV at 8%, the naive PV, and the value lost to the cap.

**Problem 5.** A firm has FCFF1 = 90 growing at 2%, ku = 9%, kd = 5%, tax rate 30%, and a current debt of 500, rebalanced thereafter to a constant fraction of value (Harris-Pringle). Starting from a guess V = 1,200, iterate the WACC circularity three times, and then find the exact value using APV.

**Problem 6.** A comparable has βe = 1.10, D/E = 0.40, βd = 0.15 and a 30% tax rate. The risk-free rate is 3.5% and the market premium 5%. (a) Unlever under Harris-Pringle. (b) Relever to D/E = 1.0. (c) Compute ku, kd, ke and the WACC at D/V = 50%. (d) Compare with relevering using the Hamada formula (βd = 0).

**Problem 7.** Using the data in Problem 2, compute the year-1 capital cash flow (FCFF plus the year-1 tax shield) and show that discounting the CCF stream at ku with growth of 4% reproduces the enterprise value from Problem 2.

**Problem 8.** A firm has unlevered value 800 (ku = 10%) and a 25% tax rate. With permanent debt of D, the PV of distress costs is 0.35 × 800 × p / (0.10 + p). Debt levels and annual distress probabilities are: 0 (0%), 200 (0.4%), 400 (2%), 600 (6%), 800 (20%). Compute levered value at each level and identify the best level.

### Answers to Selected Problems

**Problem 1.** (a) VU = 60 / 0.12 = 500. (b) Shield = 0.30 × 250 = 75. (c) VL = 575, E = 325. (d) ke = 12% + 0.70 × (12% − 6%) × 250/325 = 12% + 3.23% = 15.23%. (e) WACC = (325/575) × 15.23% + (250/575) × 6% × 0.70 = 8.61% + 1.83% = 10.43%; 60 / 0.10435 = 575.

**Problem 2.** WACC = 10% − 5% × 0.25 × 0.40 = 9.5%. V = 50 / (0.095 − 0.04) = 909.09. VU = 50 / (0.10 − 0.04) = 833.33. Shield value = 75.76. Opening debt = 0.40 × 909.09 = 363.64.

**Problem 3.** Unlevered V3 = 50 × 1.03 / 0.06 = 858.33; VU = 775.97. Shields: 4.50, 3.00, 1.50; PV at 6% = 8.17; APV = 784.15. At ku: PV = 7.81; APV = 783.78.

**Problem 4.** Interest = 40; cap = 30; deducted 30; shield = 7.50 per year; PV = 93.75; naive PV = 0.25 × 40 / 0.08 = 125.00; lost value = 31.25.

**Problem 5.** Iteration: V = 1,200 gives D/V = 0.4167, WACC = 8.375%, V = 1,411.76. Next: D/V = 0.3542, WACC = 8.469%, V = 1,391.30. Next: D/V = 0.3594, WACC = 8.461%, V = 1,392.99. APV: VU = 90 / 0.07 = 1,285.71; shield = 0.30 × 0.05 × 500 / 0.07 = 107.14; V = 1,392.86.

**Problem 6.** (a) βu = (1.10 + 0.15 × 0.4) / 1.4 = 0.8286. (b) βe = 0.8286 + (0.8286 − 0.15) × 1 = 1.5071. (c) ku = 3.5% + 0.8286 × 5% = 7.643%; kd = 3.5% + 0.15 × 5% = 4.25%; ke = 3.5% + 1.5071 × 5% = 11.036%; WACC = 0.5 × 11.036% + 0.5 × 4.25% × 0.70 = 5.518% + 1.4875% = 7.005%, which equals ku − kd × Tc × L = 7.643% − 4.25% × 0.30 × 0.5. (d) Hamada: βu = 1.10 / (1 + 0.7 × 0.4) = 0.8594; relevered = 0.8594 × (1 + 0.7 × 1) = 1.4609, lower by 0.046.

**Problem 7.** Opening debt = 363.64; shield = 0.25 × 0.05 × 363.64 = 4.545; CCF1 = 54.545. Value = 54.545 / (0.10 − 0.04) = 909.09, matching Problem 2.

**Problem 8.** Distress costs: 0, 10.77, 46.67, 105.00, 186.67; shields: 0, 50, 100, 150, 200. Levered values: 800.00, 839.23, 853.33, 845.00, 813.33. The best level is D = 400.
