# Chapter 11: The Cost of Capital

## Learning Objectives

After studying this chapter, you should be able to:

- Explain why the cost of capital is an opportunity cost determined by the risk of the investment rather than by the identity or financing history of the firm that undertakes it.
- Estimate the cost of equity using the Capital Asset Pricing Model, the dividend growth model, and the bond-yield-plus-premium approach, and reconcile the resulting estimates.
- Estimate the cost of debt from market yields, adjust it for default risk and taxes, and explain why the coupon rate on existing debt is the wrong number.
- Compute the weighted average cost of capital (WACC) using market-value weights and target capital structure, and state the conditions under which WACC is a valid discount rate.
- Unlever and relever equity betas, build pure-play estimates for divisions and projects, and set divisional and project-specific hurdle rates that differ from the corporate WACC.
- Incorporate flotation costs correctly, and recognize the most common pitfalls in cost-of-capital practice, including book-value weights, a single company-wide hurdle rate, and mismatches between cash flows and discount rates.

## Opening Vignette

*The following scenario is illustrative; the company and its figures are fictional.*

Harlow Ridge Industries is a mid-sized manufacturer of commercial refrigeration equipment with a stable, mature business that earns steady margins. Three years ago, the board approved the creation of a cloud-connected monitoring division, "Harlow Cloud," which sells subscription software that tracks temperature data from refrigeration units in supermarkets and pharmacies. Harlow Cloud is small today but is growing at a pace the legacy business cannot match.

At the annual capital budgeting meeting, the chief financial officer, Imani Okafor, announces that the corporate hurdle rate remains 8.9 percent, the weighted average cost of capital she calculated from the firm's stock beta, its bond yields, and its blended capital structure. Every project proposal will be evaluated against that single number.

The head of the legacy business presents an equipment-replacement project with an internal rate of return of 8.5 percent. It is rejected. Minutes later, the head of Harlow Cloud presents a new analytics platform with an internal rate of return of 10.0 percent. It is approved. Both executives leave the room satisfied that the process was objective.

Imani is uneasy. She has watched the pattern repeat for three years: the safe division keeps losing capital allocation fights, and the risky division keeps winning them. When she runs a quick comparison, she notes that listed software-monitoring competitors have equity betas well above those of listed equipment makers, and that even after adjusting for their different debt levels, the underlying business risk differs substantially. A flat 8.9 percent hurdle is too high for refrigeration replacement and too low for cloud analytics. Over time, the firm is migrating capital toward the riskiest uses without being paid for the risk.

This chapter gives Imani the tools to fix the problem. It develops the cost of equity and cost of debt, assembles them into WACC, shows how to unlever and relever betas so that comparable-company evidence can be transferred to divisions and projects, and catalogues the errors that make a clean-looking discount rate quietly destructive of value.

## 11.1 What the Cost of Capital Is, and What It Is Not

### 11.1.1 An opportunity cost, set by risk

Every capital budgeting decision in Chapter 10 required a discount rate. The *cost of capital* is that rate: the expected return that investors could earn on other investments of equivalent risk. It is an opportunity cost. When Harlow Ridge accepts a project, it commits funds that investors could otherwise have deployed in the capital market at the market's price for that risk. A project that returns less than the opportunity cost reduces the wealth of the firm's owners, even if its accounting profit is positive.

Three implications follow immediately, and they organize the entire chapter.

First, the cost of capital depends on the *risk of the cash flows being discounted*, not on the risk of the company's other businesses. A firm's overall cost of capital is an average of the costs of its parts; it is not the right rate for any specific part unless that part happens to be average.

Second, the cost of capital is *forward looking and market based*. It is what investors require today, observable (imperfectly) in current prices. It is not the interest rate printed on the bonds the firm issued ten years ago, nor the accounting return on equity last year.

Third, the cost of capital is *not the cost of the particular funds raised for the project*. If Harlow Ridge finances a software project by drawing on a 5 percent bank line, the project's discount rate is still determined by the risk of software cash flows, not by 5 percent. Financing choices matter, but they matter through tax shields, issuance costs, and the capital structure targets discussed later, not by letting the cheapest funding source set the hurdle.

### 11.1.2 Required return versus expected return versus cost

Three related terms are often confused. The *expected return* on a security is the probability-weighted average of its possible returns. The *required return* is what investors demand for bearing its risk; in equilibrium, expected and required returns coincide. The *cost of capital* is the required return viewed from the firm's side: what the firm must earn on its investments in order to leave investors no worse off. In practice, all of these must be estimated, because none is directly observed. The analyst's task is to build estimates from market data in a way that is internally consistent.

### 11.1.3 The building blocks

The firm raises capital from debt holders, preferred shareholders, and common shareholders. Each supplier of capital has a required return. The *weighted average cost of capital* combines those required returns using the proportions in which each source finances the firm's assets:

```
WACC = (E/V) × rE + (P/V) × rP + (D/V) × rD × (1 − T)

where
  E, P, D = market values of equity, preferred, and debt
  V = E + P + D
  rE, rP, rD = required returns on equity, preferred, debt
  T = marginal corporate tax rate
```

The after-tax adjustment on debt appears because interest is deductible in most tax systems, so each dollar of interest costs the firm only (1 − T) dollars after tax. Everything in this chapter is either an input to this formula or an argument about when this formula should or should not be used.

### 11.1.4 When WACC works as a discount rate

WACC is the correct discount rate for a project's free cash flows when three conditions hold approximately:

1. The project has the same business risk as the firm's existing operations (or the WACC has been adjusted to reflect the project's risk).
2. The project supports the same financial leverage, in market-value terms, as the firm's target capital structure.
3. The cash flows are unlevered free cash flows, calculated before interest payments and after taxes computed as if the firm had no debt, with the tax benefit of debt captured in the discount rate.

When these conditions fail, as they do for diversified conglomerates, special financing arrangements, or projects that change the firm's debt capacity, WACC must be modified, or an alternative method such as adjusted present value (APV) must be used. Sections 11.5 and 11.6 take this up.

## 11.2 The Cost of Equity

Equity is the hardest component to estimate because shareholders receive a residual, not a contractual payment, so their required return is never stated. Three families of methods are used in practice. A competent analyst applies at least two and reconciles them.

### 11.2.1 The CAPM approach

The Capital Asset Pricing Model, developed by Sharpe, Lintner, and Mossin building on Markowitz's portfolio theory, states that the expected return on a stock equals the risk-free rate plus a premium proportional to the stock's systematic risk:

```
rE = rf + β × (E[rM] − rf)
```

Here β measures the sensitivity of the stock's returns to market returns, and (E[rM] − rf) is the market risk premium (MRP). Each input requires a judgment.

**The risk-free rate.** Use a government yield whose maturity matches the horizon of the cash flows being discounted. For long-lived corporate investments, a ten-year or longer government bond yield is customary. The currency must match the cash flows: Euro cash flows are discounted at a rate built on a Euro risk-free rate. Using a short-term bill rate for a twenty-year project mixes a short-horizon yield with long-horizon cash flows and is inconsistent unless the term structure is flat.

**The market risk premium.** This is the most contested input in corporate finance, because the expected premium is not observable. Analysts draw on three sources: historical averages of realized stock returns over bond returns, which are noisy and sensitive to the sample period; surveys of academics, practitioners, and corporate managers; and implied estimates that back out the premium from current index prices and forecast cash flows. Reasonable premiums for developed markets are frequently placed in a range of roughly 4.5 to 6.5 percent, but the right choice is the one you can defend and apply consistently. The premium is a *market-wide* number: all projects in a given currency should use the same MRP, so that the variation in hurdle rates across projects comes from beta and capital structure, not from analyst mood.

**Beta.** Beta is the slope coefficient from regressing the stock's returns on market returns. Three practical points matter. Regression betas have large standard errors, often giving a 95 percent confidence interval of plus or minus 0.3 or more for an individual firm. Betas drift toward 1.0 over time, so many practitioners use an adjusted beta (a common convention is two-thirds of the raw beta plus one-third of 1.0). And the beta of a firm reflects its *current* mix of businesses and its *current* leverage, which may not be what the analysis requires. For that reason, industry-average betas, unlevered and relevered, are often more reliable than the firm's own regression beta. Section 11.4 develops this approach.

**Example 11.1 – Cost of equity from CAPM, dividend growth, and bond-yield-plus-premium.**

Harlow Ridge's equity beta is 1.20. The ten-year government yield is 4.0 percent and the market risk premium is 5.5 percent. The stock trades at $40.00, the next annual dividend is expected to be $2.40, and dividends are expected to grow at 5 percent indefinitely. The firm's long-term debt yields 7.0 percent, and the analyst's judgmental equity premium over the firm's own debt is 4.0 percent.

*CAPM:*

```
rE = 4.0% + 1.20 × 5.5%
   = 4.0% + 6.6%
   = 10.6%
```

*Dividend growth model:*

```
rE = D1 / P0 + g
   = 2.40 / 40.00 + 0.05
   = 0.06 + 0.05
   = 11.0%
```

*Bond-yield-plus-premium:*

```
rE = 7.0% + 4.0% = 11.0%
```

The three estimates are 10.6 percent, 11.0 percent, and 11.0 percent. The range is narrow, and Imani would reasonably adopt 10.6 percent from CAPM as her primary figure because it is the most explicit about risk, and cite the other two as corroboration. If the DDM had produced 14 percent, she would investigate: perhaps the assumed 5 percent growth is too high, or the market is pricing a lower risk than the beta implies. Disagreement among methods is information, not a nuisance.

### 11.2.2 The dividend growth approach

If dividends are expected to grow at a constant rate g forever, the Gordon growth formula P0 = D1 / (rE − g) can be inverted to obtain the cost of equity, as in Example 11.1. The approach is intuitive and requires no beta, but it has well-known weaknesses. It assumes stable growth, which rules out young firms and those with erratic payout policy. It is extremely sensitive to g: a one-point error in g is a one-point error in rE. And it is unusable for firms that pay no dividends, though a version using free cash flow to equity can sometimes substitute. The approach works best for regulated utilities and other mature dividend payers, which is precisely where practitioners use it.

### 11.2.3 The bond-yield-plus-premium approach

This approach adds a judgmental risk premium (typically 3 to 5 percent) to the yield on the firm's own long-term debt. The logic is that equity holders are junior to debt holders and therefore demand more. It is crude because the premium is not tied to any theory, and it fails to respond properly when the firm's leverage changes. Its main use is as a sanity check, as in Example 11.1, or for firms where beta is unobservable, such as private companies.

### 11.2.4 Equity cost depends on leverage

An essential point, developed fully in Section 11.4, is that the cost of equity is not a fixed characteristic of a firm. It rises with financial leverage, because debt holders take a fixed claim first, making the residual claim of shareholders riskier. Two firms in the same industry with the same operating risk will have different equity betas and costs of equity if their debt-to-equity ratios differ. Any procedure that treats the cost of equity as given, while changing the capital structure, is wrong.

## 11.3 The Cost of Debt

### 11.3.1 Use the current yield, not the coupon

The relevant cost of debt is the rate at which the firm could borrow *today* on long-term debt of similar seniority and maturity. The coupon on bonds issued years ago reflects past market conditions and the firm's past credit standing; it is a sunk fact, not a forward-looking cost. For publicly traded bonds, the yield to maturity (YTM) is the market's current required return, computed as the discount rate that equates the bond's price to the present value of its promised payments. For firms without traded debt, the analyst can use the yield on bonds of the same credit rating and maturity, or the rate on a recent bank term loan.

**Example 11.2 – Cost of debt from a bond price, and the default adjustment.**

Harlow Ridge has a ten-year bond outstanding with a 6.0 percent annual coupon and face value of $100. It currently trades at $94.00. We solve for the YTM that satisfies:

```
94.00 = Σ (t = 1 to 10) 6 / (1 + y)^t  +  100 / (1 + y)^10
```

Trying y = 6.85 percent: the discount factor is 1.0685^(−10) = 0.5155, so the annuity factor is (1 − 0.5155) / 0.0685 = 7.0725, giving a coupon value of 6 × 7.0725 = 42.44; and the principal is worth 100 × 0.5155 = 51.55. Total = 93.99, which rounds to the $94.00 price. So y ≈ 6.85 percent. (A numerical solver gives 6.848 percent.)

The *pre-tax cost of debt* is therefore about 6.85 percent, not the 6.0 percent coupon. With a 25 percent marginal tax rate, the after-tax cost is:

```
rD × (1 − T) = 6.85% × 0.75 = 5.14%
```

Now suppose we recognize that the promised yield exceeds the expected return, because bonds can default. Take a bond with a promised yield of 7.2 percent, an annual default probability of 2 percent, and a recovery rate of 40 percent of the claim. The expected loss rate is 2% × (1 − 0.40) = 1.2 percent per year, so the *expected* return on the bond is approximately:

```
7.2% − 1.2% = 6.0%
```

For investment-grade borrowers the gap between promised and expected yield is small, and the YTM is an acceptable proxy for the cost of debt. For speculative-grade borrowers the gap can be large, and using the promised yield as the cost of debt overstates the true cost to the firm and would, if the debt were part of the WACC for a project, make the debt look more expensive than its true expected return to bondholders. In a rigorous valuation of a distressed firm, the expected return on debt (and the debt beta) should be used.

### 11.3.2 Tax shield considerations

The (1 − T) factor presumes that the firm earns enough taxable income to use the deduction. For a firm with persistent losses, the effective marginal tax rate may be near zero, and the after-tax cost of debt is the pre-tax cost. Interest-deductibility limits (for example, caps tied to a percentage of earnings) also reduce the benefit at high leverage. The marginal rate on the next dollar of interest, not the average effective rate on past income, is the right T.

### 11.3.3 Other forms of financing

*Preferred stock* has a fixed dividend, no maturity, and no tax deductibility in most systems, so its cost is dividend divided by price: rP = DP / PP. *Convertible bonds* and *warrants* embed options, and the clean approach is to separate them into straight-debt and option components rather than treating the low coupon as a low cost. *Leases and other debt-like obligations* belong in the debt component at the rates implied by their terms. Treating any of these off-balance-sheet obligations as free capital understates WACC.

### 11.3.4 Short-term debt

Accounts payable and accrued expenses are generally treated as part of operating working capital, with their cost implicitly in the cash flows, not as interest-bearing capital. Short-term bank borrowing is included in debt if it is a permanent part of the funding structure; seasonal borrowing that is fully repaid each year is generally excluded from the long-run weights.

The three equity-cost approaches differ in what they assume and where they fail, as Table 11.1 summarizes.

**Table 11.1 – Methods for estimating the cost of equity**

| Method | Core input(s) | Strength | Main weakness | Best used for |
|---|---|---|---|---|
| CAPM | rf, β, market risk premium | Explicit link to systematic risk; adjusts for leverage via β | β and MRP are estimated with error | Most listed firms; divisions via pure-play betas |
| Dividend growth | D1, P0, g | Simple; needs no beta | Very sensitive to g; fails for non-payers | Mature dividend payers, utilities |
| Bond yield plus premium | Own debt yield, judgmental premium | Easy; works without a beta | Premium is arbitrary | Sanity check; private firms |
| Multi-factor models | Factor loadings and factor premiums | Capture size, value, momentum effects | More parameters, more estimation error | Academic work; some cross-checks |

## 11.4 Betas, Leverage, and the Unlever–Relever Procedure

### 11.4.1 Two sources of risk in an equity beta

A firm's equity beta reflects two things: the systematic risk of its operating assets (*business risk*) and the extra risk that fixed debt payments impose on shareholders (*financial risk*). The beta of the firm's assets, which would be observed if the firm had no debt, is the *asset beta* or *unlevered beta*, βU. The beta of equity in a levered firm, βL, is higher.

To compare firms with different leverage, or to apply evidence from one firm to another, we must strip out the financial risk to isolate business risk, then add back the financial risk appropriate to the target.

### 11.4.2 Modigliani–Miller with taxes, and the Hamada relationship

Modigliani and Miller showed that, without taxes, the value of a firm is independent of its capital structure, and the cost of equity rises linearly with the debt-to-equity ratio:

```
rE = rU + (rU − rD) × (D/E)
```

With corporate taxes and a constant, permanent debt level, the debt tax shield creates value, and the relationship becomes:

```
rE = rU + (rU − rD) × (1 − T) × (D/E)
```

If debt is riskless (βD = 0), the equivalent statement in betas, associated with Hamada's application of CAPM to this framework, is:

```
βL = βU × [1 + (1 − T) × D/E]
βU = βL / [1 + (1 − T) × D/E]
```

These are the working formulas of the unlever–relever procedure. They rest on assumptions worth knowing: debt is held at a constant ratio or amount in perpetuity, the tax shield is as risky as the debt, and debt beta is zero. When debt carries default risk (βD > 0), a fuller formula applies:

```
βU = [E/(E + D(1−T))] × βL  +  [D(1−T)/(E + D(1−T))] × βD
```

For investment-grade borrowers, βD is typically small (0.0 to 0.2), and the simple Hamada form is adequate. For highly levered or distressed firms, ignoring βD overstates the unlevered beta of the business, because some of what looks like equity risk is actually credit risk borne by lenders. Likewise, if the firm's leverage is expected to change over time, the relationship must be applied period by period rather than with a single D/E.

Some textbooks and practitioners drop the tax term, using βL = βU × (1 + D/E), reasoning that debt tax shields are riskier than debt itself or that the tax benefit is partially offset by personal taxes. The with-tax version is more common in corporate practice, and consistency is more important than the choice: unlever and relever with the same formula.

### 11.4.3 The procedure

To estimate the equity beta for a target business with a target capital structure:

1. Identify *comparable (pure-play)* firms: listed companies whose operating risk resembles the target's.
2. For each comparable, obtain its equity beta and its market-value D/E ratio and tax rate.
3. Unlever each comparable's beta to obtain its βU.
4. Average (or take the median of) the βU values. Averaging across firms reduces the estimation error that plagues individual betas.
5. Relever the average βU at the target's D/E (using the target's tax rate).
6. Substitute the relevered beta into CAPM.

**Example 11.3 – Unlevering comparable betas and relevering for a target.**

Harlow Ridge's analyst identifies three listed equipment makers as comparables for the legacy refrigeration division. The tax rate is 25 percent for all.

**Table 11.2 – Comparable-firm data and unlevered betas (T = 25%)**

| Comparable | Equity beta (βL) | D/E (market) | 1 + (1−T)(D/E) | Unlevered beta (βU) |
|---|---|---|---|---|
| Comp A | 1.30 | 0.50 | 1 + 0.75 × 0.50 = 1.3750 | 1.30 / 1.3750 = 0.9455 |
| Comp B | 1.10 | 0.25 | 1 + 0.75 × 0.25 = 1.1875 | 1.10 / 1.1875 = 0.9263 |
| Comp C | 1.50 | 0.80 | 1 + 0.75 × 0.80 = 1.6000 | 1.50 / 1.6000 = 0.9375 |
| **Average** | | | | **(0.9455 + 0.9263 + 0.9375) / 3 = 0.9364** |

Notice how the raw equity betas range from 1.10 to 1.50, a spread of 0.40, but after unlevering, they cluster tightly between 0.93 and 0.95. The dispersion in raw betas was mostly financial risk, not business risk. The unlevered values tell us that the business risk of equipment making is a beta of about 0.94.

Suppose the legacy division would be financed at a target D/E of 0.40. Relever:

```
βL = 0.9364 × [1 + 0.75 × 0.40]
   = 0.9364 × 1.30
   = 1.2174
```

The cost of equity at rf = 4.0 percent and MRP = 5.5 percent:

```
rE = 4.0% + 1.2174 × 5.5% = 4.0% + 6.696% = 10.70%
```

If the same business were all-equity financed, the cost of equity would equal the unlevered cost: 4.0% + 0.9364 × 5.5% = 9.15 percent. The additional 1.55 percentage points reflect the financial risk of a 0.40 debt-to-equity ratio.

### 11.4.4 Leverage, the cost of equity, and WACC

Table 11.3 illustrates how, under the Hamada framework, the cost of equity climbs as leverage rises and how WACC responds. We use βU = 0.9364, rf = 4.0%, MRP = 5.5%, T = 25%, and allow the pre-tax cost of debt to increase with leverage: 5.0 percent at D/E = 0.40 and 6.5 percent at D/E = 1.0.

**Table 11.3 – Leverage, cost of equity, and WACC**

| D/E | D/V | Equity beta | Cost of equity | Pre-tax cost of debt | WACC |
|---|---|---|---|---|---|
| 0.00 | 0.0% | 0.936 | 9.15% | n/a | 9.15% |
| 0.40 | 28.6% | 1.217 | 10.70% | 5.0% | 8.71% |
| 1.00 | 50.0% | 1.639 | 13.01% | 6.5% | 8.94% |

Three lessons emerge. First, the cost of equity increases with leverage in every case; there is no "cheap" way to substitute debt for equity, because the equity that remains is riskier. Second, WACC falls initially because of the tax shield on debt, then rises as the rising cost of debt overwhelms the shield. This is the trade-off theory of capital structure in numerical form: there is a leverage region where WACC is minimized and firm value maximized. Third, the apparent attractiveness of debt (5.0 percent versus 10.7 percent) is an illusion if one forgets to charge equity for the risk that the debt creates. Analysts who compute WACC by weighting a fixed 10.6 percent equity cost with an increasing share of cheap debt will conclude that more leverage is always better, which is wrong.

(A technical caveat: because the cost of debt in Table 11.3 rises with leverage, the debt is not riskless, so the pure Hamada formula slightly overstates the equity beta at higher leverage. The pattern is nonetheless the right one for illustration.)

### 11.4.5 Practical issues in beta estimation

*Estimation window and frequency.* Common conventions use five years of monthly returns or two years of weekly returns. Shorter windows have more noise; longer windows may include a business that no longer exists.

*Choice of market index.* The index should reflect the investor base. Using a domestic index for a firm whose investors are global yields a beta that does not represent the risk those investors bear.

*Thin trading.* Infrequently traded stocks have betas biased downward, because stale prices lag market movements. Adjustments (such as including lagged market returns) are available.

*Operating leverage.* Two firms in the same industry can have different business risk because of different fixed-cost structures. High operating leverage (a large share of fixed costs) raises βU. When comparables differ greatly from the target in cost structure, adjust the unlevered beta judgmentally, or restrict the comparable set.

*Cash.* Large cash balances lower the equity beta, because cash has a beta near zero. For firms with very large cash holdings, some analysts unlever for net debt (debt minus cash) rather than gross debt, or compute the beta of the operating assets separately.

## 11.5 The Weighted Average Cost of Capital in Practice

### 11.5.1 Market-value weights and target structure

The weights in WACC are *market-value* proportions, because WACC is the opportunity cost of the capital currently committed, and the market values are what that capital is worth today. Book values record the historical cost of past financing. A firm whose stock trades at three times book value has a far larger equity proportion in market terms than its balance sheet suggests, and a WACC built from book weights will understate the share of the (more expensive) equity.

The weights should also be *target* weights, reflecting the capital structure the firm expects to maintain over the life of the investments, not today's snapshot if that is temporarily distorted. If a firm has just made a large acquisition funded by debt that it intends to repay, the right weights are those for its long-run policy.

Debt weights use the market value of debt. For most firms, the book value of debt is a reasonable approximation of market value if interest rates have not moved much; if the firm has substantial long-term fixed-rate debt and rates have changed, the difference can be significant. Debt includes interest-bearing borrowings, capitalized leases, and often unfunded pension deficits and other debt-like claims; excluding them overstates equity's share. Some analysts use *net debt* (debt less excess cash) for weights, in which case the equity beta must be consistent with that treatment.

### 11.5.2 The calculation

**Example 11.4 – Computing WACC.**

Brightwater Foods (a fictional firm) has the following data. Market value of equity is $600 million; market value of debt is $400 million. Equity beta is 1.20, risk-free rate is 4.0 percent, MRP is 5.5 percent. Its pre-tax cost of debt (current yield on its bonds) is 6.0 percent and the marginal tax rate is 25 percent.

*Step 1: Cost of equity.* rE = 4.0% + 1.20 × 5.5% = 10.6%.

*Step 2: After-tax cost of debt.* rD(1 − T) = 6.0% × 0.75 = 4.5%.

*Step 3: Weights.* V = 600 + 400 = 1,000. E/V = 60%; D/V = 40%.

*Step 4: WACC.*

```
WACC = 0.60 × 10.6% + 0.40 × 4.5%
     = 6.36% + 1.80%
     = 8.16%
```

Now suppose the board's long-run policy is to hold debt at 30 percent of capital. Using the industry unlevered beta of 0.9364 from Example 11.3, the target D/E is 0.30/0.70 = 0.4286. Relevering:

```
βL = 0.9364 × [1 + 0.75 × 0.4286] = 0.9364 × 1.3214 = 1.2374
rE = 4.0% + 1.2374 × 5.5% = 10.81%
```

With debt cost assumed to fall slightly to 5.5 percent at the lower leverage:

```
WACC = 0.70 × 10.81% + 0.30 × 5.5% × 0.75
     = 7.567% + 1.2375%
     = 8.80%
```

The two answers (8.16 percent and 8.80 percent) differ for a reason that managers should understand. The first uses Brightwater's own observed beta; its implied unlevered beta is 1.20 / (1 + 0.75 × 0.667) = 0.80, lower than the industry's 0.94. The second uses an industry-based unlevered beta. If Brightwater's business is genuinely safer than the average comparable, 8.16 percent is better; if its own regression beta is merely a noisy estimate, 8.80 percent is more reliable. The analyst should look at the underlying reason before choosing, and the choice should be documented.

### 11.5.3 Nominal versus real, and currency consistency

Discount rates and cash flows must be in the same terms. Nominal cash flows (including expected inflation) are discounted at nominal rates; real cash flows at real rates. For multinational projects, cash flows in a foreign currency are discounted at a rate for that currency, or converted at forecast exchange rates and discounted at the home-currency rate. The expected inflation difference between two currencies is reflected in the difference between their risk-free rates, an interest-rate parity principle; ignoring it, for example discounting high-inflation-currency cash flows at a low-inflation-currency rate, overvalues the project.

### 11.5.4 Is the WACC stable?

The WACC changes when interest rates, market risk premiums, tax rates, or capital structure change. Large firms usually reassess at least annually and when conditions shift. But hurdle rates that bounce each quarter with the market create planning instability, so many firms set a hurdle rate for the year, adjusting only when the underlying drivers have moved materially. Some also apply a "spread over WACC" policy for different project categories, which is the topic of the next section.

## 11.6 Divisional and Project-Specific Hurdle Rates

### 11.6.1 The problem with one rate for everything

Imani's dilemma in the opening vignette is the classic one. A firm-wide WACC is an average of the required returns on its various businesses. Applied uniformly, it is too low for projects riskier than average and too high for those safer than average. Because managers learn to propose projects that clear the hurdle, the effect over time is *adverse selection within the firm*: risky projects are accepted that destroy value, and safe, value-creating projects are rejected. The firm drifts toward higher risk without a corresponding increase in expected return. Division managers also learn to game: they overstate cash flows in the risky division and abandon investment in the safe division, and the capital-allocation system rewards the former.

### 11.6.2 Building divisional hurdle rates

The solution is to assign each division (or each category of project) its own discount rate, derived from the risk of that business. The method is the pure-play approach of Section 11.4:

1. Choose comparable firms for each division.
2. Unlever their betas and average them to get the division's βU.
3. Relever at the division's target leverage (which may differ from the corporate average, since debt capacity depends on asset tangibility and cash flow stability).
4. Compute rE by CAPM, rD from the division's debt capacity and credit characteristics, and WACC using the division's target weights.

**Example 11.5 – Divisional hurdle rates versus a single corporate rate.**

Harlow Ridge has two divisions. The Equipment division (70 percent of firm value) has an unlevered beta of 0.80 and supports 40 percent debt (D/V = 0.40, so D/E = 0.6667); its debt costs 5.5 percent. Harlow Cloud (30 percent of firm value) has an unlevered beta of 1.30 and supports only 20 percent debt (D/E = 0.25); its debt costs 6.5 percent. Use rf = 4.0%, MRP = 5.5%, T = 25%.

*Equipment division:*

```
βL  = 0.80 × [1 + 0.75 × 0.6667] = 0.80 × 1.50 = 1.20
rE  = 4.0% + 1.20 × 5.5% = 10.6%
WACC = 0.60 × 10.6% + 0.40 × 5.5% × 0.75
     = 6.36% + 1.65% = 8.01%
```

*Cloud division:*

```
βL  = 1.30 × [1 + 0.75 × 0.25] = 1.30 × 1.1875 = 1.54375
rE  = 4.0% + 1.54375 × 5.5% = 12.49%
WACC = 0.80 × 12.49% + 0.20 × 6.5% × 0.75
     = 9.99% + 0.975% = 10.97%
```

*Firm-wide blended rate (value weights 70/30):*

```
WACC = 0.70 × 8.01% + 0.30 × 10.97% = 5.607% + 3.290% = 8.90%
```

This is the 8.9 percent hurdle that Imani's CFO office used. Now the two projects. Each costs $100 million and produces level annual after-tax cash flows for ten years. The Equipment replacement has an IRR of 8.5 percent, which requires annual cash flows of 100 / 6.5613 = $15.24 million (the 10-year annuity factor at 8.5% is 6.5613). The Cloud analytics platform has an IRR of 10.0 percent, which requires $16.27 million per year (annuity factor at 10% is 6.1446).

**Table 11.4 – Decisions under a single rate versus divisional rates ($ millions)**

| Project | IRR | Single hurdle 8.90%: NPV | Decision | Divisional hurdle: NPV | Correct decision |
|---|---|---|---|---|---|
| Equipment replacement | 8.5% | −1.76 | Reject | +2.22 (at 8.01%) | Accept |
| Cloud analytics | 10.0% | +4.91 | Accept | −4.02 (at 10.97%) | Reject |

The single-rate system gets both decisions wrong. It rejects a project worth +$2.2 million and accepts one that destroys $4.0 million of value. Notably, neither error is subtle; the margins are 0.4 and 1.0 percentage points, well within the noise of ordinary forecasting, yet cumulatively over many projects such errors reshape the firm.

### 11.6.3 Beyond divisions: project-specific rates

Divisions are themselves aggregates. A project's discount rate should reflect its own risk, and when a project's risk differs materially from the division's (a new product in a new market, an expansion into a regulated sector, a cost-saving investment with near-certain cash flows), a project-specific rate is warranted. Practical approaches include:

- **Pure-play comparables for the project.** If the project is the entry into a new line of business, find firms in that line and use their unlevered betas.
- **Risk categories (risk buckets).** Many firms define three to five categories, for example cost-savings and replacement (WACC minus 1 percentage point), expansion of existing lines (WACC), new products (WACC plus 2), and new-market or strategic ventures (WACC plus 4). The spreads should be calibrated to betas for the categories rather than chosen arbitrarily; otherwise, they become negotiated numbers.
- **Cash flow adjustment instead of rate adjustment.** For specific risks that are diversifiable (a plant fire, a unique regulatory event), the correct treatment is to adjust expected cash flows, not to inflate the discount rate. Adding a premium to the discount rate for unsystematic risk double-counts and penalizes long-lived projects more than short-lived ones, because the premium compounds.
- **Operating leverage and cyclicality.** A project with high fixed costs has higher beta than one with the same revenues and variable costs. Higher cyclicality of revenues raises beta.

A frequent mistake is to add arbitrary premiums for "uncertainty" or "strategic importance." Uncertainty that is diversifiable by shareholders does not raise the required return. Risk that moves with the market does. The test for any adjustment is: *Does this feature make the project's cash flows covary more with the overall economy?* If not, it belongs in the forecast cash flows (as scenarios or probabilities), not in the discount rate.

### 11.6.4 Adjusted present value as an alternative

When a project's financing is special, WACC is awkward because the capital structure is project-specific and changes over time. The *adjusted present value* method values the project in two steps: first, at the unlevered cost of equity as if all equity financed, then add the present value of financing side effects such as interest tax shields and issuance costs.

**Example 11.6 – APV for a project with its own debt.**

A project costs $1,000 and produces after-tax unlevered free cash flows of $95 per year in perpetuity. The unlevered cost of capital for this business is 9.15 percent (βU = 0.9364). The firm will finance it with $300 of permanent debt at 5.0 percent, the tax rate is 25 percent, and issuing the debt costs 2 percent of face value.

```
Base-case NPV = 95 / 0.0915 − 1,000 = 1,038.25 − 1,000 = +38.25
PV of tax shield (permanent debt) = T × D = 0.25 × 300 = +75.00
Debt issuance cost = 0.02 × 300 = −6.00
APV = 38.25 + 75.00 − 6.00 = +107.25
```

The project is worth undertaking; its value comes principally from the tax shield, with operations adding only 38.25. A manager reading this should note two things. First, the operating NPV is modest, so a small error in the 9.15 percent rate, for example 10.0 percent, would reduce 95/0.10 − 1,000 to −50, and the project would depend entirely on the tax shield. Second, the tax shield here relies on permanent debt of $300 and the firm's ability to use the deductions in perpetuity. If the debt will be repaid in five years, the tax shield is worth far less. APV makes these assumptions visible, which is its main advantage over embedding them in a single WACC percentage.

## 11.7 Flotation Costs and the Marginal Cost of Capital

### 11.7.1 What flotation costs are

Raising external capital is not free. Underwriting fees, legal and registration costs, and, for seasoned equity offerings, price discounts to attract buyers consume part of the proceeds. These *flotation costs* vary with the type of security and the size of the issue: debt issues are cheapest, in the order of a percent or two of proceeds for large issuers; seasoned equity offerings are more expensive, often several percentage points; and small issues, initial public offerings, and issuers in less developed markets pay more. (The percentages in this chapter are illustrative.)

Internal funds, retained earnings, carry no flotation cost, but they are not free either: retained earnings belong to shareholders, who expect the same return on them as on new equity.

### 11.7.2 Two ways to treat them, and one wrong way

*Method 1 – Adjust the cash flows (preferred).* Treat flotation costs as an additional initial outlay: if a project costs $I and will be financed with a mix of securities with weighted-average flotation cost f, then the amount to be raised is I / (1 − f) and the flotation cost is I / (1 − f) − I. Subtract that from project NPV. This is theoretically cleaner because the cost is a one-time cash outflow at the start, not a permanent premium on the discount rate, and it only applies to the funds actually raised externally.

*Method 2 – Adjust the discount rate.* Inflate the cost of each source: rE* = D1 / (P0 × (1 − fE)) + g, for example. This spreads the cost across the project life as a rate premium and is usually applied incorrectly; it overcharges long-lived projects and undercharges short ones, and it applies the charge to the entire financing when only part may be external.

*Wrong way – Ignoring flotation costs on the grounds that the firm uses retained earnings.* The cash flows of the project are valuable to shareholders only after the cost of capital is covered, and if the firm would otherwise have paid retained earnings out as dividends, or if marginal projects require outside funds, the flotation cost is real for the marginal project.

**Example 11.7 – Adjusting project NPV for flotation costs.**

Harlow Ridge's capital structure target is 70 percent equity and 30 percent debt. New external equity costs 5.0 percent of the gross proceeds, and new debt costs 1.5 percent. A project requires an outlay of $100 million, and the present value of its cash flows (discounted at the appropriate hurdle rate) is $103.5 million, so the unadjusted NPV is +$3.5 million.

*Weighted-average flotation cost:*

```
f = 0.70 × 5.0% + 0.30 × 1.5% = 3.50% + 0.45% = 3.95%
```

*Gross amount that must be raised so that net proceeds equal $100 million:*

```
Gross = 100 / (1 − 0.0395) = 100 / 0.9605 = $104.11 million
Flotation cost = 104.11 − 100 = $4.11 million
```

*Adjusted NPV:*

```
Adjusted NPV = 103.5 − 104.11 = −$0.61 million
```

A project that looked attractive before flotation costs is slightly value-destroying after them. The result is sensitive: with f = 2.0 percent, the gross amount is $102.04 million and adjusted NPV is +$1.46 million. Managers should recognize that flotation costs raise the effective hurdle for externally funded projects, and that this is one reason capital structure and financing flexibility matter for investment. Firms with internal cash generation exceeding their investment needs avoid these costs, which partly explains pecking-order behavior.

If the project is financed internally, the flotation cost is not incurred, but the opportunity cost of the retained funds (the shareholders' required return) still applies, and the discount rate remains the one reflecting project risk.

### 11.7.3 The marginal cost of capital schedule

The cost of capital is not constant as the firm raises more funds. When retained earnings are exhausted, the firm must issue new equity, which carries flotation costs and may be priced at a discount. Debt capacity is finite, and beyond some level, lenders demand higher spreads. The *marginal cost of capital* (MCC) is the cost of the last dollar raised. Plotted against the total amount of capital raised, it is stepwise upward-sloping, with breaks where the funding source changes (the "break point" at which retained earnings run out equals retained earnings available divided by the equity weight). Combined with the firm's investment opportunity schedule (projects ranked by IRR), the MCC indicates the optimal capital budget: accept projects until the IRR of the marginal project equals the MCC. In practice, a firm that has sufficient internal funds and moderate growth works with a single WACC, and the MCC schedule matters mostly for rapidly growing firms and for firms near financing constraints.

## 11.8 Pitfalls, Judgment, and Governance of the Hurdle Rate

### 11.8.1 Common errors

Most damage in practice comes not from sophisticated modeling choices but from basic errors repeated for years. Table 11.5 collects the most common, with the consequence of each.

**Table 11.5 – Common cost-of-capital errors**

| Error | Why it is wrong | Typical consequence |
|---|---|---|
| Using one company-wide rate for all projects | Ignores differences in business risk | Over-investment in risky units, starvation of safe ones |
| Book-value weights | Weights should reflect the market value of capital supplied | Understates equity share and WACC for firms with market value above book |
| Coupon rate as cost of debt | Past conditions; not the current required return | Understates (or overstates) cost of debt |
| Using the cheapest source as the project's cost | Project risk, not funding source, determines the rate | Hurdle too low; value destruction hidden |
| Not adjusting equity cost when leverage changes | rE rises with D/E | False conclusion that debt is "cheap" |
| Mixing nominal cash flows with real rates (or vice versa) | Inflation inconsistently treated | Systematic over- or under-valuation |
| Pre-tax cash flows discounted at after-tax rate (or the reverse) | Tax treatment must match | Wrong NPV sign in marginal projects |
| Adding premiums for diversifiable risk | Only systematic risk is priced | Rejects good long-term projects |
| Mismatched horizon: short-term rates for long projects | Term structure matters | Understates the hurdle when yield curve slopes up |
| Treating WACC as constant after major strategy change | Business mix and leverage shift | Stale hurdle rates |

### 11.8.2 A worked illustration of weight error

**Example 11.8 – Book versus market weights.**

A firm has book equity of $300 million and debt of $500 million (book and market value the same). The market value of its equity is $900 million. Its cost of equity is 10.6 percent, pre-tax cost of debt is 6.0 percent, and the tax rate is 25 percent.

*Using book weights:* E/V = 300 / 800 = 37.5%; D/V = 62.5%.

```
WACC(book) = 0.375 × 10.6% + 0.625 × 6.0% × 0.75
           = 3.975% + 2.8125%
           = 6.79%
```

*Using market weights:* E/V = 900 / 1,400 = 64.29%; D/V = 35.71%.

```
WACC(market) = 0.6429 × 10.6% + 0.3571 × 6.0% × 0.75
             = 6.814% + 1.607%
             = 8.42%
```

The book-weight WACC is 1.63 percentage points too low. For a level perpetuity, the difference between a 6.79 percent and an 8.42 percent discount rate is a factor of about 1.24 in capitalized value (1/0.0679 = 14.7 versus 1/0.0842 = 11.9), enough to make clearly marginal projects look attractive. In addition, a firm whose book debt ratio is high only because of accumulated losses or buybacks would be wrongly told that it has a low-cost capital structure.

### 11.8.3 Judgment, precision, and sensitivity

The cost of capital is estimated with error. Betas have standard errors of a few tenths, the market risk premium is uncertain by at least a point, and the target capital structure is a policy choice. A reported WACC of "8.16 percent" is a false precision; the honest statement is "roughly 8 to 9 percent." Good practice therefore includes sensitivity analysis: show the project NPV at the base rate and at rates one or two percentage points above and below, and flag decisions that flip within that band. Projects that are acceptable across the plausible range are robust; projects that depend on the third decimal place of the discount rate are marginal and should be decided on strategic and qualitative grounds, with eyes open.

Terminal values in long-lived projects deserve particular scrutiny. In a perpetuity-growth terminal value, a 1 percentage-point error in the discount rate can change terminal value by 15 to 25 percent when r − g is small. The discount rate and the terminal growth assumption must be consistent with one another and with the competitive structure of the industry: a growth rate above the economy's long-run growth rate is a claim that the firm will eventually become larger than the economy.

### 11.8.4 Governance: who owns the hurdle rate?

Because hurdle rates determine capital allocation, they create incentives for gaming. Division managers lobby for low rates for their units, and corporate planners may be tempted to set conservative (high) rates to reject marginal proposals without explicit reasoning. Good governance separates responsibility: a central treasury or corporate finance group estimates the market-based components (risk-free rate, MRP, comparables' betas, cost of debt) using a documented methodology, while divisions are accountable for cash-flow forecasts. Hurdle-rate methodology should be reviewed periodically, assumptions should be recorded, and post-investment audits should compare realized returns to projections so that systematic optimism is detected. A hurdle rate that no one can reproduce from public data is a negotiated number, not a cost of capital.

### 11.8.5 Beyond WACC

For some situations, WACC is the wrong tool: leveraged buyouts where capital structure changes rapidly, project finance with non-recourse debt, financial institutions where debt is an operating input rather than a financing choice, and firms with significant real options (patents, expansion rights, abandonment options) whose value is captured poorly by a single discount rate. In these cases, APV, equity-cash-flow methods (discount free cash flow to equity at the cost of equity), or option-pricing methods are more appropriate. WACC remains the workhorse for ordinary corporate investment, but a manager who understands its assumptions can tell when to put it aside.

## Case Study: Calder Maritime and the Port Terminal Decision

*This case is fictional and illustrative; all figures are invented for teaching purposes.*

Calder Maritime Group is a publicly traded company with two businesses. The first, Calder Shipping, operates a fleet of bulk carriers under medium-term charters and spot contracts. Its revenues are strongly tied to global trade volumes and freight rates, and its earnings swing widely from year to year. The second, Calder Terminals, operates three container-handling terminals under long-term concession contracts with minimum-volume guarantees from anchor customers. Terminal cash flows are stable, inflation-linked, and resemble those of infrastructure assets. Shipping accounts for about 55 percent of Calder's enterprise value and Terminals for 45 percent.

Calder's chief financial officer, Tobias Verhagen, has used a single company WACC of 9.6 percent for all investment decisions since the firm's listing. He built it from Calder's regression beta of 1.15, a risk-free rate of 4.0 percent, a market risk premium of 5.5 percent, a pre-tax cost of debt of 6.5 percent, a 25 percent tax rate, and market value weights of 62 percent equity and 38 percent debt. His computation:

```
rE   = 4.0% + 1.15 × 5.5% = 10.325%
WACC = 0.62 × 10.325% + 0.38 × 6.5% × 0.75 = 6.40% + 1.85% = 8.25%
```

When the finance team re-examined the file, they discovered that 9.6 percent was not the product of this arithmetic. It had been inherited from an earlier consultant's report, and no one had documented how it was derived. The recomputed 8.25 percent, using the company's own inputs, is more than a full point lower.

Calder now faces a large decision. A port authority in a neighboring country has offered a 25-year concession to build and operate a new container terminal. The initial outlay is $600 million, and the project's expected after-tax unlevered free cash flows, in nominal terms, are projected to be $62 million in the first year, growing at 4 percent per year for the 25-year concession, with no residual value. Independent forecasters regard the volume guarantees from anchor customers as unusually strong.

The team has gathered comparable-company data. Listed pure-play terminal operators have an average equity beta of 0.85 and an average market-value debt-to-equity ratio of 0.90. Listed bulk-shipping companies have an average equity beta of 1.45 and an average D/E of 0.60. Both groups face roughly a 25 percent tax rate. Terminal operators can sustain debt at 45 percent of capital at a cost of 5.5 percent because of contracted revenues; shipping companies can sustain 30 percent at 7.0 percent.

A junior analyst, Priya Nambiar, argues for using the pure-play terminal beta, unlevered and relevered at a 45 percent debt target, for the new terminal. A senior treasury manager, Joaquin Estrada, objects: the new terminal is in a developing market with political and currency risk that the established terminals do not face, and Calder's board will expect a premium. He proposes adding 3 percentage points to the discount rate "to be safe." Priya answers that the currency risk is largely diversifiable and that the cash flows are in a currency different from Calder's reporting currency, so the real issue is making the cash flows and discount rates consistent. The concession payments are indexed to hard-currency tariffs for most of the revenue, but about a quarter of operating costs are local-currency.

The financing team adds a further consideration. The project requires $270 million of new equity, and a seasoned offering of that size would cost Calder an estimated 4.5 percent in underwriting and related fees. Calder expects to borrow $330 million for the project in the bond market at an issuance cost of 1.2 percent. Management also notes that the new terminal, which would double Terminals' EBITDA over five years, will change the firm's mix: Terminals would rise to roughly 60 percent of enterprise value.

Tobias must present a recommended discount rate and a go/no-go decision to the board next month. He is aware that using 9.6 percent, as always, might give a different answer than a careful analysis, and that board members trust the number because they have always seen it.

### Discussion Questions

1. Using the comparable data, compute unlevered betas for the terminal and shipping groups, then derive divisional WACCs for Terminals (45 percent debt target) and Shipping (30 percent debt target). How do these compare with the 8.25 percent firm-wide figure and the undocumented 9.6 percent? What does this imply for how Calder has been evaluating projects in each division?
2. Evaluate the dispute between Priya and Joaquin. Which components of the political and currency risk should be treated in the cash flows, and which, if any, in the discount rate? What tests would you apply to decide whether a premium is justified?
3. Compute the weighted flotation cost on the project's financing. By how much does it raise the required initial outlay, and how would you incorporate it in NPV? Does the answer change if Calder could fund the equity from retained cash?
4. Discuss the governance failure revealed by the undocumented 9.6 percent. Propose a process and a set of controls so that Calder's board can trust the hurdle rates it uses, and discuss how the shift to 60 percent Terminals by value should affect the firm-wide cost of capital over time.

## Key Takeaways

- The cost of capital is an opportunity cost: the return investors could earn elsewhere on investments of the same risk. It is set by the risk of the project's cash flows, not by the identity of the firm or the source of the funds.
- Estimate the cost of equity with at least two methods, normally CAPM plus a cross-check such as the dividend growth model, and investigate any large disagreements rather than averaging them away.
- The cost of debt is today's market yield on comparable debt, not the historical coupon, adjusted for default risk if the firm is speculative grade and for the marginal tax rate on the deduction.
- Equity beta embeds financial risk. Unlever comparable betas to isolate business risk, average them to reduce noise, and relever at the target capital structure; the cost of equity rises with leverage and debt is never "cheap" in isolation.
- WACC uses market-value weights and a target capital structure, with after-tax cost of debt. It is valid only when the project's risk and financing resemble those embedded in the rate.
- A single company-wide hurdle rate systematically favors high-risk divisions and starves low-risk ones; assign divisional and, where warranted, project-specific rates built from pure-play evidence.
- Add to the discount rate only systematic risk. Diversifiable and project-specific uncertainties belong in the cash-flow forecasts through scenarios and probabilities.
- Treat flotation costs as an addition to the initial outlay, scaled to the funds actually raised externally, and not as a permanent increment to the discount rate.
- When financing is project-specific or changes over time, adjusted present value makes the value of tax shields and issuance costs explicit and is often more reliable than a constant WACC.
- Most hurdle-rate errors are elementary: book weights, coupon rates, inconsistent inflation or currency treatment, and undocumented numbers. Document the method, test sensitivity, and make estimation independent of the people whose projects are being judged.

## Review Questions

1. Explain why the cost of capital depends on the risk of the project rather than the source of financing. What would go wrong if a firm used the interest rate on a cheap bank loan as the discount rate for a risky venture?
2. Distinguish between expected return, required return, and cost of capital. In what sense are they equal in equilibrium?
3. Describe the main weaknesses of the dividend growth model as a method for estimating the cost of equity. For what kinds of firms is it most defensible?
4. Why is the yield to maturity on a firm's outstanding bonds a better measure of the cost of debt than the coupon rate? When does even the yield to maturity overstate the true expected cost?
5. A firm replaces some equity with debt and observes that its WACC, computed using the old cost of equity, falls sharply. What error has it made, and what does the corrected analysis typically show?
6. Describe the steps of the unlever–relever procedure. Why is it usually preferable to use the average of several comparables instead of the firm's own regression beta?
7. What is the effect of operating leverage on a project's beta? Give an example of two projects with identical revenues but different betas.
8. Explain, with an example, why applying a single corporate WACC to all projects results in adverse selection within the firm.
9. When would you prefer the APV method to the WACC method? What additional information does APV require?
10. Why are flotation costs better treated as part of the project's initial cash outflow than as an increment to the cost of equity? Under what circumstances would a firm incur no flotation costs?

## Problems

**Problem 11.1.** A firm's equity has a beta of 0.90. The risk-free rate is 3.5 percent and the market risk premium is 6.0 percent. Compute the cost of equity using CAPM.

**Problem 11.2.** A mature utility just paid a dividend of $1.80 per share, which is expected to grow at 4 percent per year indefinitely. The stock price is $30. Compute the cost of equity using the dividend growth model. (Remember that D1 = D0 × (1 + g).)

**Problem 11.3.** A comparable firm has an equity beta of 1.60, a market debt-to-equity ratio of 0.80, and a tax rate of 30 percent. (a) Compute its unlevered beta. (b) Compute the equity beta for a firm with the same business risk, a D/E ratio of 0.25, and a 30 percent tax rate.

**Problem 11.4.** A firm has market equity of $450 million and debt of $150 million. The cost of equity is 12 percent, the pre-tax cost of debt is 7 percent, and the tax rate is 28 percent. Compute WACC.

**Problem 11.5.** A firm plans to fund a $50 million project (net of flotation) with 60 percent new equity and 40 percent new debt. Flotation costs are 6 percent on equity and 2 percent on debt. Compute (a) the weighted-average flotation cost, (b) the gross amount that must be raised, and (c) the dollar flotation cost.

**Problem 11.6.** A division has an unlevered beta of 0.70 and a target debt-to-capital ratio of 25 percent. Its pre-tax cost of debt is 5.0 percent, the risk-free rate is 3.5 percent, the market risk premium is 5.5 percent, and the tax rate is 25 percent. Compute the division's beta, cost of equity, and WACC.

**Problem 11.7.** A firm's capital consists of common equity with market value $500 million and required return 11 percent, preferred stock with market value $100 million and a 7.5 percent yield, and debt of $400 million with a pre-tax cost of 6 percent. The tax rate is 25 percent. Compute WACC.

**Problem 11.8.** A project costs $200 million and produces after-tax cash flows of $58 million per year for five years. The corporate WACC is 9 percent, but the project is in a risk category warranting a 15 percent discount rate. Compute the NPV at each rate and state the correct decision. (Annuity factors: 3.8897 at 9 percent, 3.3522 at 15 percent.)

### Answers to Selected Problems

- **11.1.** rE = 3.5% + 0.90 × 6.0% = 3.5% + 5.4% = 8.9%.
- **11.2.** D1 = 1.80 × 1.04 = 1.872; rE = 1.872 / 30 + 0.04 = 6.24% + 4.0% = 10.24%.
- **11.3.** (a) βU = 1.60 / (1 + 0.70 × 0.80) = 1.60 / 1.56 = 1.0256. (b) βL = 1.0256 × (1 + 0.70 × 0.25) = 1.0256 × 1.175 = 1.2051.
- **11.4.** E/V = 75%, D/V = 25%. WACC = 0.75 × 12% + 0.25 × 7% × 0.72 = 9.00% + 1.26% = 10.26%.
- **11.5.** (a) f = 0.6 × 6% + 0.4 × 2% = 3.6% + 0.8% = 4.4%. (b) Gross = 50 / 0.956 = $52.30 million. (c) Flotation cost = $2.30 million.
- **11.6.** D/E = 0.25/0.75 = 0.3333; β = 0.70 × (1 + 0.75 × 0.3333) = 0.875; rE = 3.5% + 0.875 × 5.5% = 8.3125%; WACC = 0.75 × 8.3125% + 0.25 × 5.0% × 0.75 = 6.234% + 0.9375% = 7.17%.
- **11.7.** V = 1,000. WACC = (500 × 11% + 100 × 7.5% + 400 × 6% × 0.75) / 1,000 = (55 + 7.5 + 18) / 1,000 = 8.05%.
- **11.8.** NPV at 9% = 58 × 3.8897 − 200 = 225.60 − 200 = +$25.60 million. NPV at 15% = 58 × 3.3522 − 200 = 194.43 − 200 = −$5.57 million. At the correct 15 percent hurdle the project should be rejected; the corporate WACC would have wrongly accepted it.
