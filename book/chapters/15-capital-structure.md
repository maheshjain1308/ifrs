# Chapter 15: Capital Structure

## Learning Objectives

- State and prove Modigliani-Miller Propositions I and II in a world without taxes, and explain why they hold even though debt looks "cheaper" than equity.
- Extend the propositions to corporate taxes, compute the value of the interest tax shield, and derive the cost of equity and WACC of a levered firm.
- Unlever and relever betas, and use the result to estimate the cost of capital at a proposed new leverage ratio.
- Explain the direct and indirect costs of financial distress and combine them with tax shields in the static trade-off theory to locate an optimal debt level.
- Compare the pecking order theory, signaling models, and agency-cost theories (asset substitution, debt overhang, free cash flow), and say which observable facts each explains.
- Set a practical target capital structure using coverage and leverage metrics, stress tests, debt capacity analysis, and an EBIT-EPS comparison, and recognize what the numbers cannot tell you.

## Opening Vignette

*Illustrative scenario; the company is fictional.*

Harlow Fabrication is a mid-sized maker of precision metal components, owned by public shareholders and a founding family that holds 22 percent of the stock. For a decade the company has carried almost no debt: net debt is under 0.5 times EBITDA, the balance sheet holds a comfortable cash cushion, and the CFO, Priya Nair, is rightly proud that the firm has never missed a payment or breached a covenant.

At the annual strategy meeting, the board's newest member, a former private-equity partner, makes a pointed remark. "You earn an operating margin of 14 percent, your cash flows are stable, and you pay a tax rate of 25 percent. Your competitor Dunmore runs at three times EBITDA of leverage. You are leaving money on the table." Several directors nod. The family representative objects: "Dunmore nearly lost its bank lines in the last downturn. We have survived four recessions precisely because we owe nothing."

Priya is asked to come back in one month with a recommendation. She quickly realizes that both sides are partly right and partly confused. The private-equity argument is correct that interest is tax deductible, and that more debt means a larger tax shield. But the claim that debt is "cheap capital" ignores that equity becomes riskier as leverage rises. The family's argument is correct that distress is costly, but a company with Harlow's cash flows could carry a good deal more debt than zero before the risk of distress becomes material. And neither side has mentioned what a debt-financed recapitalization does to management's incentives, to the firm's ability to fund an acquisition opportunity that may appear next year, or to the signal that investors read into the announcement.

This chapter gives Priya the tools. We begin with the benchmark result of Modigliani and Miller, which says that, in a frictionless world, the question "how much debt?" is irrelevant. We then add, one at a time, the frictions that make the question matter: taxes, distress costs, information asymmetries, and conflicts of interest. We end with a practical method for converting theory into a target ratio that a board can approve, and a case study that returns to a company much like Harlow.

## 15.1 The Capital Structure Question

A firm's *capital structure* is the mix of financing it uses to fund its assets: debt of various maturities and seniority, preferred stock, hybrid securities, and common equity. The *capital structure decision* is the choice of that mix, and in practice it is made through a series of discrete actions: issuing bonds, drawing a revolver, retiring debt with free cash flow, repurchasing shares, or issuing new equity.

Why would the mix matter at all? Consider the firm as a collection of assets that generate operating cash flows. Those cash flows are determined by products, customers, costs, and competition. Financing decides only how the cash flows are *divided* among the claimants. If the pie is fixed, slicing it differently should not change its size. This is the deep insight behind the Modigliani-Miller (MM) theorems, and it is worth holding on to, because every real-world reason that capital structure matters must be traced to a mechanism that changes the size of the pie (taxes paid, distress costs incurred, investments foregone) or transfers value between claimants (from lenders to shareholders, or from uninformed to informed investors).

### Notation and Definitions

Throughout the chapter we use the following symbols.

```
V_U   = value of the unlevered (all-equity) firm
V_L   = value of the levered firm = D + E
D, E  = market values of debt and equity
r_U   = cost of capital of the unlevered firm (cost of equity with no debt)
r_D   = cost of debt (assumed to be the expected, riskless-promise rate unless stated)
r_E   = cost of equity of the levered firm
τ     = corporate tax rate
EBIT  = earnings before interest and taxes (assumed perpetual and constant unless stated)
```

We will measure leverage in several ways, and it pays to keep them separate. The *debt-to-equity ratio* D/E and the *debt-to-value ratio* D/V = D/(D+E) are market-value measures used in valuation theory. The *net debt to EBITDA* ratio and the *interest coverage ratio* (EBIT divided by interest expense) are accounting measures used by lenders and rating agencies. Theory speaks in market values; practice speaks in accounting ratios. A good financial manager translates between them.

### Why It Is Not Obvious

A common intuition goes: "Debt costs 5 percent and equity costs 12 percent, so replacing equity with debt must lower the average cost of capital and raise firm value." This reasoning contains a subtle error. The 12 percent cost of equity is the return required by shareholders *given the current leverage*. When you add debt, the equity left behind is a smaller, more volatile claim on the same cash flows. Its required return rises. The question is by how much, and the MM result shows that, absent frictions, it rises by exactly enough to offset the benefit of substituting cheaper debt.

## 15.2 Modigliani-Miller Without Taxes

Franco Modigliani and Merton Miller published their capital structure irrelevance results in 1958. They set the stage for modern corporate finance by showing precisely what must be true for financing to matter. The assumptions of the no-tax version are:

1. There are no taxes of any kind.
2. There are no bankruptcy or transaction costs.
3. Individuals and firms can borrow and lend at the same rate (the rate on riskless or equally risky debt).
4. Investors and managers have the same information.
5. The firm's operating cash flows are not affected by how it is financed.

### Proposition I: Firm Value Is Independent of Capital Structure

**Proposition I (no taxes).** The market value of a firm is determined by its operating cash flows and the risk of those assets, and not by the proportions of debt and equity used to finance them:

```
V_L = V_U
```

The proof uses arbitrage and does not need any assumptions about investor preferences. Suppose two firms, U (unlevered) and L (levered), generate identical operating cash flows. If L were worth more than U, an investor could sell L's shares, borrow on personal account to replicate L's leverage, and buy U's shares. The investor would receive the same cash flows at a lower cost and pocket the difference. Such arbitrage drives the prices together. The financing that corporations do can be undone or replicated by investors at no cost, so corporate leverage adds nothing that investors cannot create for themselves. This idea is called *homemade leverage*.

**Example 15.1 – Homemade leverage and arbitrage.** Two firms have identical perpetual operating income of EBIT = $1,000 per year and an unlevered cost of capital r_U = 10%. Firm U is all equity. Firm L has $4,000 of perpetual debt at r_D = 5%.

*Step 1: Value the unlevered firm.*

```
V_U = EBIT / r_U = 1,000 / 0.10 = $10,000
```

*Step 2: Suppose the market values the levered firm's equity at $7,000, so V_L = 7,000 + 4,000 = $11,000.* That is higher than V_U although the cash flows are identical. Let us check that this allows arbitrage.

*Step 3: Consider an investor who holds 1% of L's equity.* The investment costs 0.01 × 7,000 = $70 and pays 1% of (EBIT − interest) = 0.01 × (1,000 − 200) = $8 per year.

*Step 4: Replicate that payoff with U.* The investor sells the L shares (receiving $70) and buys 1% of U's equity for 0.01 × 10,000 = $100. To replicate L's leverage, the investor also borrows personally an amount equal to 1% of L's debt, which is $40. Borrowing $40 at 5% costs $2 per year. The net outlay for the position is $100 − $40 = $60, which is less than the $70 received.

```
Cash flow from 1% of U      = 0.01 × 1,000 = $10
Less interest on $40 loan   = 0.05 × 40    = $2
Net payoff                  = $8   (identical to holding 1% of L)
Net outlay                  = $100 − $40   = $60
```

*Step 5: Compare.* The investor receives the same $8 per year but pays $60 instead of $70, an arbitrage profit of $10 per 1% position. All investors seek it, pushing L's equity down to $6,000 and V_L to $10,000. At that point the homemade strategy costs the same as the levered share and the arbitrage vanishes.

*Conclusion.* In equilibrium E_L = 6,000, D = 4,000, V_L = V_U = 10,000. The firm cannot create value by choosing leverage if investors can borrow on equal terms.

### Proposition II: The Cost of Equity Rises with Leverage

If V is independent of the mix, so is the weighted average cost of capital. The cost of equity must therefore rise with leverage to balance the lower cost of debt. Starting from the identity that the return on assets equals the weighted average of returns on the claims,

```
r_U = (E/V) × r_E + (D/V) × r_D
```

and solving for r_E, we obtain:

**Proposition II (no taxes).**

```
r_E = r_U + (D/E) × (r_U − r_D)
```

The cost of equity is a linear function of the debt-to-equity ratio. The slope is the spread between the cost of assets and the cost of debt. Shareholders bear all the operating risk of the firm after lenders have taken their fixed share, so the more debt, the greater the *financial risk* they bear, and the higher their required return.

**Example 15.2 – Cost of equity under Proposition II.** Continue with Example 15.1: r_U = 10%, r_D = 5%, D = $4,000, E = $6,000.

```
r_E = 0.10 + (4,000 / 6,000) × (0.10 − 0.05)
    = 0.10 + 0.6667 × 0.05
    = 0.10 + 0.03333
    = 13.33%
```

*Check by cash flows.* Shareholders receive EBIT − interest = 1,000 − 200 = $800 per year. Dividing by E gives 800 / 6,000 = 13.33%, which matches. *WACC check:*

```
WACC = (6,000/10,000) × 13.33% + (4,000/10,000) × 5%
     = 8.00% + 2.00% = 10.00% = r_U
```

The WACC is unchanged at 10 percent. Each extra dollar of debt replaces a dollar of 13.33 percent equity with a 5 percent dollar, but it also raises the cost of the remaining equity. The firm's value, EBIT/WACC, stays at $10,000.

Think of a seesaw: the cheapness of debt is real, but it is paid for by shareholders through higher risk. A manager who reports "our cost of capital has fallen because we use more debt" while ignoring the rising cost of equity is making the most common mistake in this chapter.

### Risk and the Role of Debt Beta

The same logic can be expressed in betas. If debt is risky, the asset beta is the value-weighted average of the debt and equity betas:

```
β_A = (E/V) × β_E + (D/V) × β_D
```

and so

```
β_E = β_A + (D/E) × (β_A − β_D)
```

When debt is riskless (β_D = 0), this reduces to β_E = β_A × (1 + D/E). Higher leverage increases the equity beta proportionally. Notice that the equity beta increases even though nothing about the firm's business changed. This is the origin of the distinction between *business risk* (determined by the cyclicality of operating cash flows and operating leverage, captured by β_A) and *financial risk* (determined by D/E).

### What the Irrelevance Result Does and Does Not Say

A frequent misreading is that MM proved capital structure does not matter in practice. They proved something more useful: capital structure matters *only if* one of the assumptions fails. The result is a checklist. For each real-world argument about debt or equity ("equity dilutes EPS", "debt is cheaper", "we need financial flexibility"), ask: which assumption is being violated, and is the effect large enough to matter? An argument that does not identify a friction is mere accounting. For example, issuing shares to repay debt may raise EPS if the firm's earnings yield exceeds the cost of debt, but that tells us only that shares are cheaper than the earnings yield implies; the P/E ratio and risk of EPS change as well, and the stock price should not respond to the arithmetic.

## 15.3 Modigliani-Miller With Corporate Taxes

The first and most important friction is the tax system. In most countries, interest paid on debt is deductible from corporate taxable income, but dividends and retained earnings (the return to equity) are not. This asymmetry means that for every dollar of interest paid, the government effectively contributes τ dollars. The deduction creates an *interest tax shield*.

### The Interest Tax Shield

Consider a firm with EBIT and interest expense I. Compare the after-tax cash flows available to all investors (debtholders and shareholders) with and without leverage.

```
Unlevered: total to investors = EBIT × (1 − τ)
Levered:   total to investors = (EBIT − I)(1 − τ) + I
                              = EBIT × (1 − τ) + τ × I
```

The extra amount, τ × I, is the annual interest tax shield. Since the cash flows from the operating assets are unchanged, the extra value to investors is exactly the present value of the tax shields. If the firm maintains a permanent amount of debt D at rate r_D, interest is r_D × D every year, and the shield is τ × r_D × D. Discounting at r_D (the shields have the same risk as the interest payments, assuming the firm will always be able to use them) gives:

```
PV(tax shield) = τ × r_D × D / r_D = τ × D
```

**Proposition I (with corporate taxes).**

```
V_L = V_U + τ × D
```

The value of the levered firm is the value of the unlevered firm plus the present value of the interest tax shield. Under this simple model, with permanent debt, the gain from leverage is proportional to the amount of debt, and the tax rate is the constant of proportionality.

### Cost of Equity and WACC with Taxes

Proposition II is modified because the return to debtholders is effectively paid with a tax subsidy. The cost of equity becomes:

**Proposition II (with corporate taxes).**

```
r_E = r_U + (D/E) × (1 − τ) × (r_U − r_D)
```

Notice that the cost of equity still rises with leverage, but more slowly than in the no-tax world because (1 − τ) multiplies the slope. This is why the weighted average cost of capital, now defined with an after-tax cost of debt, declines with leverage:

```
WACC = (E/V) × r_E + (D/V) × r_D × (1 − τ)
     = r_U × (1 − τ × D/V)
```

The second line is an elegant simplification: WACC is the unlevered cost of capital reduced by the fraction τ × D/V. At D/V = 40 percent and τ = 25 percent, the WACC is 10 percent lower in relative terms than r_U.

**Example 15.3 – MM with taxes.** Use the same firm: EBIT = $1,000 perpetual, r_U = 10%, r_D = 5%, D = $4,000, and now τ = 25%.

*Step 1: Unlevered value.*

```
V_U = EBIT × (1 − τ) / r_U = 1,000 × 0.75 / 0.10 = $7,500
```

*Step 2: Levered value.*

```
PV(tax shield) = τ × D = 0.25 × 4,000 = $1,000
V_L = 7,500 + 1,000 = $8,500
E   = V_L − D = 8,500 − 4,000 = $4,500
```

*Step 3: Cost of equity.*

```
r_E = 0.10 + (4,000 / 4,500) × 0.75 × (0.10 − 0.05)
    = 0.10 + 0.8889 × 0.75 × 0.05
    = 0.10 + 0.03333 = 13.33%
```

*Step 4: Check against cash flows.* Interest is 0.05 × 4,000 = $200. Net income = (1,000 − 200) × 0.75 = $600. Dividing by E: 600 / 4,500 = 13.33%. It matches.

*Step 5: WACC.*

```
WACC = (4,500/8,500) × 13.33% + (4,000/8,500) × 5% × 0.75
     = 7.059% + 1.765% = 8.82%
Shortcut: r_U × (1 − τ × D/V) = 10% × (1 − 0.25 × 4,000/8,500) = 10% × 0.88235 = 8.82%
```

*Interpretation.* Using debt lowers the WACC from 10.00 percent to 8.82 percent and raises firm value from $7,500 to $8,500. The gain of $1,000 is the PV of tax shields. In this textbook world the optimal capital structure is nearly 100 percent debt, a conclusion that no real firm follows and that tells us the model omits something important.

### Limits of the Simple Tax Shield Formula

The value formula τ × D relies on strong assumptions: debt is permanent (rolled over indefinitely), the firm always has enough taxable income to use the deduction, and the discount rate for shields is r_D. Each assumption can be relaxed.

- *Finite or growing debt.* If the firm targets a constant D/V ratio rather than a fixed dollar amount, the debt grows with firm value and the shield is as risky as the firm's assets. The appropriate discount rate then is r_U, and the value is computed in the adjusted present value (APV) or WACC framework with leverage recomputed each period. Many practitioners find the constant-ratio assumption more realistic, particularly for growing firms.
- *Limited ability to use shields.* A firm with low or negative taxable income cannot immediately use interest deductions. Unused deductions carry forward, but their value is delayed, and some jurisdictions restrict deductibility of interest above a percentage of EBITDA. The effective τ on the margin may be much lower than the statutory rate for firms already shielded by depreciation, tax credits, or losses.
- *Non-debt tax shields.* Depreciation, depletion allowances, and loss carryforwards also reduce taxable income. A firm with ample non-debt shields faces a lower marginal benefit from debt.

### Personal Taxes: Miller's Refinement

In 1977 Miller pointed out that investors also pay personal taxes, and that the tax rate on interest income typically exceeds the tax rate on equity returns (dividends and capital gains). Let τ_C be the corporate rate, τ_E the personal rate on equity income, and τ_D the personal rate on interest. The net advantage of debt per dollar of debt is:

```
G = 1 − (1 − τ_C)(1 − τ_E) / (1 − τ_D)
```

With τ_C = 25%, τ_E = 15%, and τ_D = 35%:

```
G = 1 − (0.75 × 0.85) / 0.65 = 1 − 0.98077 = 0.0192
```

The tax advantage of debt falls from 25 cents per dollar to under 2 cents, because lenders demand extra yield to compensate for their higher personal tax. In the extreme case where (1 − τ_C)(1 − τ_E) = (1 − τ_D), debt has no net advantage at the aggregate level. Miller's theory also predicts that firms in the aggregate issue debt until the tax rates of the marginal buyers equalize across debt and equity, so the overall supply of debt is determined by the market, and an individual firm gains nothing from changing its mix. While few believe the extreme conclusion, the personal-tax effect usefully reminds us that the corporate tax shield overstates the net benefit. A conservative planning figure for the net tax benefit of debt is usually well below the statutory corporate rate.

### Unlevering and Relevering Betas

For practical valuation we rarely observe the unlevered cost of capital directly. We estimate it from comparable firms by "unlevering" the observed equity betas, averaging the unlevered asset betas, and relevering at the target firm's capital structure. With corporate taxes and riskless debt (a standard simplification attributed to Hamada), the relationships are:

```
β_E = β_U × [1 + (1 − τ) × D/E]
β_U = β_E / [1 + (1 − τ) × D/E]
```

**Example 15.4 – Estimating the cost of equity at a new leverage ratio.** Harlow Fabrication's closest comparable has an observed equity beta of 1.20, a market debt-to-equity ratio of 0.50, and faces a 25 percent tax rate. The risk-free rate is 4.0% and the equity risk premium is 5.5%. Harlow is considering a leverage of D/E = 1.00.

*Step 1: Unlever the comparable.*

```
β_U = 1.20 / [1 + 0.75 × 0.50] = 1.20 / 1.375 = 0.8727
```

*Step 2: Relever at D/E = 1.00.*

```
β_E(new) = 0.8727 × [1 + 0.75 × 1.00] = 0.8727 × 1.75 = 1.5273
```

*Step 3: Cost of equity by CAPM.*

```
r_E(comparable) = 4.0% + 1.20 × 5.5% = 10.60%
r_E(new)        = 4.0% + 1.5273 × 5.5% = 4.0% + 8.40% = 12.40%
```

*Step 4: Interpretation.* Raising leverage from 0.5 to 1.0 times equity adds 1.8 percentage points to the cost of equity. If the pre-tax cost of debt at this leverage is 6 percent, the WACC at D/E = 1.00 (D/V = 50%) is:

```
WACC = 0.50 × 12.40% + 0.50 × 6% × 0.75 = 6.20% + 2.25% = 8.45%
```

The analyst must verify that the cost of debt used corresponds to the new leverage: at higher leverage, lenders charge higher spreads, and a debt beta greater than zero would reduce the relevered equity beta somewhat. Not doing so overstates the benefit of leverage, which is a common error.

## 15.4 Financial Distress and the Static Trade-Off Theory

If taxes were the whole story, every profitable firm would borrow until its taxable income vanished. They do not, and the reason is that debt creates a legal obligation. When a firm cannot meet it, the consequences are costly and sometimes catastrophic.

### Direct and Indirect Costs of Financial Distress

*Financial distress* is the condition in which a firm has difficulty meeting its obligations to creditors. It need not end in bankruptcy, but the costs begin well before a filing and they exist even for firms that eventually recover.

*Direct costs* are the explicit expenses of default and restructuring: legal, accounting, and advisory fees; court costs; and the management time absorbed by negotiation with creditors. Empirical research suggests that direct costs are a modest fraction of firm value for large firms, though proportionally larger for small ones, as many of the fees are fixed.

*Indirect costs* are generally much larger and harder to measure. They include:

- *Lost customers and suppliers.* Buyers of durable products with long-term warranties, or of complex systems requiring service for years, hesitate to deal with a firm that may not exist. Suppliers demand cash on delivery, tightening liquidity just when the firm needs it.
- *Loss of key employees.* Talented staff leave for secure employers; recruiting becomes costly.
- *Underinvestment.* Managers who see the firm's cash flowing to creditors cut positive-NPV projects (the debt overhang problem discussed in Section 15.6).
- *Fire sales.* Forced asset sales to meet obligations realize less than going-concern value, particularly when the industry itself is distressed and the natural buyers are also short of capital.
- *Management distraction.* Time is spent on creditors rather than customers.

Two features determine how large expected distress costs are. First, the *probability* of distress, which rises with leverage and with the volatility of operating cash flows. Second, the *cost conditional on distress*, which is high for firms whose value depends on intangible assets, growth options, human capital, and customer trust, and low for firms with tangible, redeployable assets such as real estate, aircraft, or standard equipment. This explains why pharmaceutical and software firms typically carry little debt while shipping companies, utilities, and real estate firms carry much more.

### The Trade-Off Theory

The *static trade-off theory* says that a firm picks the debt level that balances the marginal tax benefit of debt against the marginal expected cost of distress. Algebraically:

```
V_L = V_U + PV(interest tax shield) − PV(expected costs of financial distress)
```

The tax shield term rises roughly linearly with debt, while the expected distress cost term rises at an increasing rate, because both the probability of default and the severity of consequences rise with leverage. The sum therefore has an interior maximum at which marginal benefit equals marginal cost. The theory delivers several testable predictions: firms with more tangible assets, more stable cash flows, and higher taxable income should borrow more; firms with high growth options and volatile earnings should borrow less; and firms should move toward their targets after shocks.

**Example 15.5 – Locating the optimum.** An unlevered firm is worth V_U = $7,500 (Example 15.3). If financial distress occurs, costs equal 25 percent of V_U, or $1,875. Management estimates the probability of distress at various levels of permanent debt, and τ = 25 percent.

*Method.* For each debt level compute PV(tax shield) = 0.25 × D, expected distress cost = probability × $1,875, and V_L = 7,500 + shield − expected cost.

| Debt D ($) | PV tax shield ($) | Prob. of distress | Expected distress cost ($) | Firm value V_L ($) |
|---|---|---|---|---|
| 0 | 0 | 0% | 0.00 | 7,500.00 |
| 1,000 | 250 | 1% | 18.75 | 7,731.25 |
| 2,000 | 500 | 3% | 56.25 | 7,943.75 |
| 3,000 | 750 | 8% | 150.00 | 8,100.00 |
| 4,000 | 1,000 | 16% | 300.00 | 8,200.00 |
| 5,000 | 1,250 | 28% | 525.00 | 8,225.00 |
| 6,000 | 1,500 | 45% | 843.75 | 8,156.25 |

*Reading the table.* Going from $4,000 to $5,000 of debt adds $250 of shield and $225 of expected distress cost, a net gain of $25. Going from $5,000 to $6,000 adds another $250 of shield but $318.75 of expected cost, a net loss of $68.75. The maximum lies at D = $5,000, with V_L = $8,225 and D/V = 5,000 / 8,225 = 60.8%. This is a toy calculation, and a real analysis would place much more weight on how fast the probability curve steepens. Notice how flat the value function is around the optimum: moving from $4,000 to $5,000 changes value by 0.3 percent. The right conclusion is not "the optimum is exactly $5,000" but "there is a broad plateau, and the cost of being on it imprecisely is small, while the cost of being far past it is large and asymmetric."

### Evidence and Limits

Static trade-off theory explains industry differences in leverage and the fact that distressed firms have difficulty borrowing. It struggles with two stylized facts. First, many highly profitable firms with low distress risk carry little debt, whereas the theory predicts they should use the most shield. Second, within an industry, more profitable firms tend to borrow *less*, not more. These observations motivated the information-based theories below. Dynamic trade-off models, which add transaction costs of adjusting leverage and uncertainty over future earnings, can explain some of this by showing that firms rationally let leverage drift within a band and rebalance only when it crosses a boundary.

## 15.5 Information Asymmetry: Pecking Order and Signaling

The MM world assumes managers and investors see the same information. In reality, managers know more about the firm's prospects than outsiders do. This asymmetry changes how financing choices are interpreted and priced.

### The Pecking Order Theory

Myers and Majluf showed that when managers know more than investors and act in the interest of existing shareholders, equity issuance is a bad signal and can lead firms to forego good projects. Investors reason: "Managers will issue shares when they believe the shares are overvalued." The market therefore marks down the price on announcement, and good firms, which would be selling shares cheaply, may prefer not to issue at all. Myers later organized this into the *pecking order* of financing preferences:

1. Use internally generated funds (retained earnings) first, because they carry no information cost and no issuance fees.
2. If external funds are required, issue debt next, because the value of safe debt is almost insensitive to the manager's private information.
3. Issue equity last, only when debt capacity is exhausted or the cost of distress is high.

Under this theory there is no optimal target capital structure. Leverage is the cumulative result of the firm's financing deficit over time: profitable firms accumulate cash and have low debt; fast-growing firms with large investment needs borrow more. This neatly explains why profitability and leverage are negatively related within industries.

**Example 15.6 – Why the good firm refuses to issue equity.** A firm has assets in place worth either $140 (good state) or $60 (bad state), each with probability 50 percent. Only management knows the state. A project requires an investment of $40, financed by new equity, and has an NPV of +$10 (value of $50 for a $40 outlay). Outside investors have no way to distinguish the types.

*Step 1: If both types issue, the market values the firm at the average.*

```
Expected assets in place = 0.5 × 140 + 0.5 × 60 = $100
Value of firm after issue (market view) = 100 + 50 = $150
Fraction demanded by new investors for $40 = 40 / 150 = 26.67%
```

*Step 2: What does the good firm's current shareholder get?* True value of the good firm with the project is 140 + 50 = $190. After giving away 26.67 percent, existing owners retain 73.33 percent:

```
0.7333 × 190 = $139.33
```

That is less than the $140 they would have kept by skipping the project. So the good firm will not issue.

*Step 3: The equilibrium unravels.* If only bad firms issue, investors know the firm is bad and value assets at $60. The value after issue is 60 + 50 = $110, new investors demand 40 / 110 = 36.4 percent, and existing owners of the bad firm keep 63.6 percent × 110 = $70, which exceeds the $60 they would have without the project. Bad firms issue.

*Conclusion.* The good firm passes up an NPV-positive project because of information asymmetry, and the announcement of equity issuance reveals the firm to be the bad type. The average announcement effect of seasoned equity issues in practice is negative, and the pecking order theory takes this as support. The cost of this adverse selection is a reason to preserve *financial slack*: cash, unused debt capacity, and credit lines that allow positive-NPV investments to be funded without turning to equity.

### Signaling Models

Ross (1977) proposed that managers use capital structure to *signal* private information. Because bankruptcy is costly to managers (loss of job, reputation), only managers of strong firms can credibly commit to high debt service. A rise in leverage thus signals that management expects robust cash flows, and the stock price rises on announcement. Conversely, equity issues signal weakness.

Empirical regularities are consistent with this: announcements of leveraged recapitalizations and debt-for-equity exchanges tend to be received positively, while equity offerings and equity-for-debt exchanges are received negatively. A caution is warranted, though. Announcement effects combine several things (signaling, tax benefits, agency effects, resolution of uncertainty about financing needs), and it is difficult to separate them. The managerial implication is more practical: *every financing announcement is a message.* A firm that issues shares to fund an acquisition will be read differently from one that buys back shares, and communication around the transaction (why equity, why now, what the firm's own insiders are doing) shapes the price response.

### Market Timing

A related behavioral idea is *market timing*: managers issue equity when their stock price is high relative to book or past values and repurchase when it is low. Evidence that the effects of past market valuations persist in leverage for many years has been used to argue that capital structure is partly the accumulation of past timing attempts. Whether managers truly outsmart the market is doubtful, but the pattern is consistent with the lemon-avoidance logic above: issue when information costs are lowest, which is when prices are high and the stock has risen.

## 15.6 Agency Costs of Debt and Equity

The final family of theories focuses on conflicts of interest among the parties to the firm: shareholders, creditors, and managers. Jensen and Meckling (1976) formalized the idea that financing choices change incentives, and that the costs of these incentive problems are borne ultimately by the parties who anticipate them.

### Shareholder-Creditor Conflicts

When debt is risky, equity is similar to a call option on the firm's assets with a strike equal to the face value of the debt. Option value rises with the volatility of the underlying. Shareholders therefore have an incentive to take on risk, even at the expense of firm value, because the downside is limited by limited liability and the upside is theirs.

**Asset substitution.** After creditors lend at a rate based on the firm's current low-risk projects, shareholders may switch to riskier ones. Creditors, anticipating this, charge higher rates or impose covenants.

**Example 15.7 – Asset substitution.** A firm owes $100 (a single zero-coupon debt due next year). It can choose one of two projects, each costing the same.

- Project A: produces a certain $120.
- Project B: produces $190 with probability 50% or $30 with probability 50% (expected value $110).

*Step 1: Payoffs under A.* Debt receives $100 for sure, equity receives $20. Firm value $120.

*Step 2: Payoffs under B.*

```
Good state: debt gets 100, equity gets 190 − 100 = 90
Bad state:  debt gets 30 (all that is available), equity gets 0
E[debt]   = 0.5 × 100 + 0.5 × 30 = $65
E[equity] = 0.5 × 90 + 0.5 × 0   = $45
Total     = $110
```

*Step 3: Compare.* Equity prefers B ($45 vs $20), a gain of $25, even though B destroys $10 of expected total value (110 vs 120). Debtholders lose $35 (100 → 65). The value transfer from creditors to shareholders more than offsets the value destroyed, so a shareholder-maximizing manager picks the inferior project. If lenders foresee this, they price loans as though B will be chosen, and the firm bears the cost through a higher interest rate or tighter covenants. This is the agency cost of debt.

**Debt overhang.** In the converse situation, a heavily indebted firm may decline a positive-NPV project because the benefits accrue mostly to creditors (who are more likely to be repaid) and the new investment must be funded by shareholders. Suppose a firm owes $100 and its assets are worth $80, and it has a project costing $10 that would raise asset value by $15 (NPV +$5). Even after the project the assets are worth only $95, less than the debt, so the entire $15 goes to creditors. Shareholders would pay the full $10 and receive nothing, so they rationally decline. This underinvestment is one reason distressed firms forego opportunities, and it is an important component of indirect distress costs.

Creditors protect themselves with covenants (restrictions on additional debt, dividends, asset sales), collateral, shorter maturities, and the right to renegotiate. Each solution has its own costs, in lost flexibility and monitoring.

### Manager-Shareholder Conflicts and Free Cash Flow

Managers may prefer to grow the firm, retain cash, and enjoy perquisites rather than pay out cash to shareholders. Jensen's *free cash flow hypothesis* argues that debt disciplines management: required interest and principal payments reduce the cash available for wasteful investment, and the threat of default forces efficiency. The benefit is greatest in mature, cash-generative firms with few growth opportunities (typically in industries like tobacco, certain retail, and older energy), and it explains the effect of leveraged buyouts. It is least valuable, and potentially harmful, in firms with many valuable investment options, where debt may cause underinvestment.

The agency cost of equity arises from the fact that managers who own less than 100 percent of the firm bear only a fraction of the cost of perks and empire-building. The costs of monitoring, bonding, and the residual loss together make up the total agency cost. Optimal capital structure, in this view, minimizes the sum of the agency costs of debt and equity.

### Comparing the Theories

| Theory | Key friction | Predicts leverage will be | Main observable implication |
|---|---|---|---|
| MM (no taxes) | None | Irrelevant | Financing announcements should not change value |
| Static trade-off | Taxes vs. distress costs | Higher for tangible assets, stable cash flows | Target ratio; reversion after shocks |
| Pecking order | Information asymmetry | Result of financing deficits | Profitable firms borrow less; negative equity-issue announcements |
| Signaling | Information plus costly default | Higher when management is confident | Positive reaction to leverage increases |
| Agency (Jensen-Meckling) | Conflicts between managers, shareholders, creditors | Higher for mature, high-cash-flow firms; lower with growth options | Covenants; buyouts raise value |

No single theory dominates the evidence. Managers' stated behavior suggests a mixture: they speak of target ratios and ratings (trade-off), they value financial flexibility and reluctantly issue equity (pecking order), and they take care over investor perceptions (signaling).

## 15.7 Setting a Practical Target Capital Structure

No manager can read the optimal debt ratio off a graph. In practice, the decision combines theory-based reasoning with market constraints (what lenders and rating agencies will accept) and strategic needs (what the firm must preserve in order to pursue its plan). A disciplined process has five steps.

1. *Establish the business risk profile.* How volatile are EBITDA and cash flow across the cycle? What fraction of costs is fixed? How liquid and redeployable are the assets? Peer leverage in the same industry gives a first anchor.
2. *Choose the credit standing the firm wishes to maintain.* Many companies target a particular credit rating (for example, a solid investment-grade rating) because it preserves access to bond markets, commercial paper, and favorable supplier terms even in downturns. The rating, in turn, depends on leverage and coverage metrics consistent with business risk.
3. *Stress test.* Compute coverage and leverage under a severe but plausible downturn, not only under the base case. The debt level should leave room to keep investing and paying obligations even in the stress scenario.
4. *Test the value case.* Estimate the tax benefit (using a realistic marginal rate, net of personal tax effects) and compare it with the loss of flexibility and expected distress costs, as in Example 15.5.
5. *Express the target as a range, with a plan to correct deviations.* A band (for example, net debt/EBITDA of 1.5 to 2.5 times) allows tactical flexibility and avoids constant small transactions.

### Key Metrics

| Metric | Formula | Typical use | Illustrative comfort level for a stable manufacturer |
|---|---|---|---|
| Net debt / EBITDA | (Debt − cash) / EBITDA | Lender covenants, rating analysis | below 2.5x |
| Interest coverage | EBIT / interest expense | Ability to service debt | above 4x base, above 3x stressed |
| FFO / debt | Funds from operations / total debt | Rating agency cash-flow measure | above 30% |
| Debt / capital (market) | D / (D + E) | Cost-of-capital theory | 25% to 40% |
| Fixed-charge coverage | (EBITDA + rent) / (interest + rent) | Firms with large leases | above 2.5x |

These comfort levels are *illustrative only*. Appropriate levels depend on industry, size, cash-flow volatility, and prevailing market conditions. Leases, pension deficits, and other debt-like obligations should be included in the debt measure that lenders actually use. Practitioners often use market-value D/V for valuation and book-based or cash-flow ratios for covenants, and a good target is expressed in both.

### EBIT-EPS Analysis

A tool commonly used in boardrooms is the EBIT-EPS comparison. It plots earnings per share under alternative financing plans across a range of EBIT values. The *indifference point* is the EBIT at which the plans give the same EPS. Above it, leverage raises EPS (positive financial leverage); below it, leverage lowers EPS.

**Example 15.8 – EBIT-EPS indifference.** Lumen Instruments has 10 million shares priced at $40 and needs $100 million for an expansion. It can (A) issue 2.5 million new shares at $40, or (B) issue $100 million of 6% debt. Existing debt is zero and the tax rate is 25%.

*Step 1: Share counts and interest.* Plan A: shares = 10 + 2.5 = 12.5 million, interest = 0. Plan B: shares = 10 million, interest = 0.06 × $100m = $6 million.

*Step 2: Set EPS equal.*

```
EBIT × (1 − 0.25) / 12.5  =  (EBIT − 6) × (1 − 0.25) / 10
EBIT / 12.5 = (EBIT − 6) / 10
10 × EBIT = 12.5 × EBIT − 75
EBIT = 75 / 2.5 = $30 million
```

*Step 3: Verify.*

```
Plan A at EBIT = 30: 30 × 0.75 / 12.5 = $1.80
Plan B at EBIT = 30: 24 × 0.75 / 10   = $1.80
```

*Step 4: Compare at other EBIT levels.* At EBIT = $50 million: Plan A gives 50 × 0.75 / 12.5 = $3.00; Plan B gives 44 × 0.75 / 10 = $3.30. At EBIT = $20 million: Plan A gives $1.20; Plan B gives 14 × 0.75 / 10 = $1.05.

*Interpretation and warning.* Debt raises EPS when EBIT exceeds $30 million and reduces it below. But EPS is not value. EBIT-EPS analysis ignores the higher risk of EPS under Plan B (the spread between $1.05 and $3.30 is wider than between $1.20 and $3.00) and the change in the P/E ratio that the market should apply. It is useful to see the *sensitivity* of earnings to operating results, and in particular to see how far EBIT must fall before the debt plan produces a loss relative to equity, but it should never be the criterion that determines the capital structure.

### Debt Capacity from Stress Tests

**Example 15.9 – Sizing debt with a stressed coverage constraint.** Meridian Components has EBITDA of $400 million, depreciation and amortization of $100 million, and a marginal borrowing cost of 6%. The board wants to keep EBIT interest coverage at or above 3.0 times even if EBITDA falls 35% (the severe downturn scenario, with depreciation unchanged).

*Step 1: Stressed EBITDA and EBIT.*

```
Stressed EBITDA = 400 × (1 − 0.35) = $260 million
Stressed EBIT   = 260 − 100        = $160 million
```

*Step 2: Maximum interest at 3.0x coverage.*

```
Max interest = 160 / 3.0 = $53.3 million
```

*Step 3: Maximum debt.*

```
Max debt = 53.3 / 0.06 = $888.9 million
```

*Step 4: Cross-check with other metrics.* Base-case coverage at this debt: base EBIT is $300 million, interest $53.3 million, so coverage is 5.6x. Leverage is 888.9 / 400 = 2.2x EBITDA in the base case, but 888.9 / 260 = 3.4x in the stress case. If current debt is $1,200 million (3.0x EBITDA, interest $72 million, base coverage 300 / 72 = 4.17x), then stressed coverage is 160 / 72 = 2.22x, and stressed leverage is 1,200 / 260 = 4.6x. The existing capital structure fails the test, even though base-case metrics look acceptable.

*Interpretation.* The stress-constrained debt capacity is about $890 million. The company should treat that as a ceiling for sustained debt, not as a target, and leave a margin of unused capacity for acquisitions or shocks. This is exactly the sort of reasoning that distinguishes a defensible target from a simple copy of a competitor's ratio.

### Practical Pitfalls

- *Copying peers.* Peer averages embed different business mixes, tax positions, and histories. Use them as a reference, not a justification.
- *Optimizing to the day's cheapest funding.* Issuing debt because rates are low, or equity because the stock price is high, is market timing; it should be consistent with a long-run target.
- *Ignoring non-financial claims.* Operating leases, pension deficits, guarantees, and contingent liabilities add to effective leverage.
- *Ignoring maturity structure.* A debt stack with a large refinancing wall in a single year is far riskier than the same total spread over many years. Choosing maturities, fixed versus floating, and currency are part of the capital structure decision.
- *Forgetting the equity side.* A buyback to reach the target leverage reduces shareholders' equity and book value, which can affect covenants and ratings; and shareholders' needs for dividends or growth signal may constrain the choice.
- *Treating the target as static.* Business risk changes with strategy, so the target should be reviewed at least annually and after major transactions.

## Case Study: Brightwater Packaging's Recapitalization Debate

*Illustrative case; the company and all figures are fictional.*

Brightwater Packaging manufactures corrugated and specialty packaging for consumer goods customers. It generates EBITDA of $240 million on revenue of $1.6 billion, with depreciation of $60 million, and pays a 25 percent tax rate. The firm has $360 million of debt at an average 5.5 percent cost, a market capitalization of $1.8 billion, and $90 million of cash. Net debt to EBITDA is 1.1 times. The company's stock trades at 9 times EBITDA, in line with peers. Peers have net debt to EBITDA between 2.0 and 3.0 times.

A new CEO, Marcus Delacroix, wants to launch a $450 million leveraged recapitalization: Brightwater would issue $450 million of new debt at 6.5 percent, and use the proceeds for a special repurchase of shares. He argues that the tax shield would add about $112 million of value (25 percent of $450 million), that EPS would increase by double digits, and that the discipline of debt would end the habit of "lazy cash" that led to two marginal acquisitions in the past three years. He also notes that the stock has underperformed its peers, and thinks buying shares now signals confidence.

The CFO, Anjali Rao, is not so sure. Brightwater's business is stable but not immune to cycles: during the last recession, EBITDA fell 30 percent from peak. About 55 percent of revenue comes from three large customers, who have used their purchasing power to renegotiate prices in tough times. Moreover, the company has identified a promising $300 million investment in a new line of recyclable fiber-based packaging, expected to earn returns well above its cost of capital, which will need funding in 18 months. The new debt would take net debt to EBITDA from 1.1 to 3.0 times ((360 + 450 − 90) / 240 = 3.0) and push stressed coverage uncomfortably low.

She builds a simple stress test. In a 30 percent downturn, EBITDA would be $168 million and EBIT $108 million. Interest on the enlarged debt of $810 million, assuming the whole stack reprices at 6.5 percent, is about $52.7 million, so stressed coverage would be 2.05 times, down from the current stressed coverage of 108 / (0.055 × 360 = 19.8) = 5.45 times. The recapitalization would leave almost no capacity for the $300 million expansion without issuing equity, which, given the information asymmetries between management and the market, might be costly.

On the other side, Anjali accepts that Brightwater is under-levered relative to its stable cash flows and tangible, redeployable assets, and that the board has been too relaxed about the use of free cash flow. She proposes a middle path: a target range of 1.5 to 2.0 times net debt to EBITDA, a moderate $250 million debt-financed repurchase over twelve months, a committed revolving credit facility sized for the expansion, and a policy requiring that all acquisitions exceeding $100 million be justified with explicit hurdle rates and post-audited.

The board must choose.

**Discussion Questions**

1. Using Proposition I with taxes, evaluate the CEO's claim of a $112 million gain. What assumptions underlie it, and how might personal taxes, distress costs, and the loss of flexibility reduce the net benefit?
2. Compute net debt/EBITDA and stressed coverage under the CEO's proposal and under the CFO's compromise ($250 million of new debt at 6.5 percent on the incremental amount only). Which plan better satisfies a 3.0x stressed coverage criterion?
3. Explain the CEO's "free cash flow" argument in terms of Jensen's hypothesis. Is Brightwater a good candidate for it? What evidence from the case supports or contradicts the argument?
4. Discuss how the planned $300 million expansion and the information asymmetry between management and investors affect the choice. Which theory (trade-off, pecking order, agency) is most relevant, and why?

## Key Takeaways

- Modigliani-Miller Proposition I says that, in a frictionless market, the mix of debt and equity does not change firm value, because investors can replicate or undo corporate leverage on their own account.
- Proposition II says the cost of equity rises linearly with the debt-to-equity ratio, so cheaper debt is exactly offset by riskier equity and the WACC is unchanged.
- With corporate taxes, the interest tax shield adds τ × D to firm value for permanent debt; the cost of equity still rises with leverage, but more slowly, so WACC declines.
- Personal taxes reduce the net advantage of debt: the effective gain per dollar of debt is 1 − (1 − τ_C)(1 − τ_E)/(1 − τ_D), often far below the corporate rate.
- Unlever comparable betas and relever at the target capital structure; always check that the cost of debt used matches the leverage assumed.
- Financial distress imposes direct costs (fees) and larger indirect costs (lost customers, employees, underinvestment); the trade-off theory sets debt where the marginal tax shield equals the marginal expected distress cost, and the value curve is flat near the optimum.
- Under asymmetric information, equity issuance conveys bad news; the pecking order (retained earnings, debt, equity) and the value of financial slack follow from this.
- Debt creates agency conflicts (asset substitution, debt overhang) but also disciplines managers with excess free cash flow; the balance depends on growth opportunities and asset tangibility.
- EBIT-EPS analysis shows earnings sensitivity to financing but is not a value criterion; the P/E and risk change with leverage.
- A practical target is a range based on business risk, stressed coverage, rating objectives, and strategic flexibility, reviewed regularly, and not a copy of peers.

## Review Questions

1. State the assumptions underlying the no-tax MM propositions. Which are the least realistic, and what real-world factors correspond to each failure?
2. Explain homemade leverage. Why does it imply that a firm cannot create value simply by changing its debt-equity mix?
3. Why does the cost of equity rise with leverage, even though debt is cheaper? What is the relationship to the beta of equity?
4. Why is the WACC lower for a levered firm when corporate taxes exist? Derive the expression WACC = r_U × (1 − τ × D/V) under permanent debt.
5. What assumptions are required for the value of the tax shield to equal τ × D, and how would the value differ if the firm maintained a constant debt-to-value ratio?
6. Distinguish between direct and indirect costs of financial distress. Which industries would you expect to have the highest indirect costs, and why?
7. Why does the trade-off theory predict an interior optimum? What empirical regularity (about profitability and leverage) is hard for it to explain?
8. Describe the pecking order. Why might a firm with a profitable investment opportunity decline to issue equity?
9. Define asset substitution and debt overhang. How do covenants address each, and what are their costs?
10. A CFO argues that issuing debt to repurchase shares will raise EPS and therefore the stock price. Evaluate the argument using the MM framework and the EBIT-EPS analysis.

## Problems

1. A firm has perpetual EBIT of $2,400 per year, an unlevered cost of capital of 12%, and no taxes. It borrows $6,000 permanently at 6%. Compute the firm value, equity value, and cost of equity. Verify the cost of equity from the cash flows.
2. Repeat Problem 1 with a 30% corporate tax rate. Compute V_U, V_L, E, r_E, and the WACC.
3. A comparable firm has an equity beta of 1.40, D/E of 0.80, and a 21% tax rate. Estimate the unlevered beta, and the relevered equity beta for a target D/E of 0.25. With a risk-free rate of 4% and a market risk premium of 5.5%, compute the cost of equity at the target.
4. V_U = $5,000, τ = 30%, and distress costs equal 20% of V_U ($1,000). Probabilities of distress at debt of $0, 500, 1,000, 1,500, 2,000, 2,500, 3,000, and 3,500 are 0%, 1%, 3%, 7%, 14%, 25%, 45%, and 65%. Compute V_L at each level and identify the optimal debt.
5. A company with 20 million shares at $25 needs $150 million. Plan A issues new shares at $25; Plan B issues 7% debt. The tax rate is 25% and there is no other debt. Find the indifference EBIT and the EPS at that point.
6. A firm owes $80 due next year. Project A yields a certain $100. Project B yields $160 or $20 with equal probability. Compute the expected payoffs to debt and equity under each project. Which project do shareholders prefer, and which maximizes firm value?
7. A firm has EBITDA of $500 million, D&A of $120 million, a borrowing cost of 7%, a minimum stressed coverage (EBIT/interest) of 3.0x, and a stress scenario with EBITDA down 30%. Find the maximum debt supported by the coverage criterion, and compare with a ceiling of 2.5 times base EBITDA.
8. With τ_C = 21%, τ_E = 12%, and τ_D = 32%, compute Miller's net tax advantage of debt per dollar and for $1,000 of debt. Interpret.

### Answers to Selected Problems

1. V = 2,400 / 0.12 = $20,000; E = 14,000; r_E = 12% + (6,000 / 14,000)(12% − 6%) = 14.57%; check: (2,400 − 360) / 14,000 = 14.57%.
2. V_U = 2,400 × 0.7 / 0.12 = $14,000; V_L = 14,000 + 0.3 × 6,000 = $15,800; E = $9,800; r_E = 12% + (6,000/9,800)(0.7)(6%) = 14.57%; WACC = 12% × (1 − 0.3 × 6,000/15,800) = 10.63%.
3. β_U = 1.40 / (1 + 0.79 × 0.80) = 0.858; β_E(target) = 0.858 × (1 + 0.79 × 0.25) = 1.027; r_E = 4% + 1.027 × 5.5% = 9.65%.
4. V_L: $5,000, 5,140, 5,270, 5,380, 5,460, 5,500, 5,450, 5,400 for D = 0 through 3,500. The optimum is D = $2,500 with V_L = $5,500.
5. New shares under Plan A: 6 million (total 26 million); interest under Plan B: $10.5 million. Indifference EBIT = $45.5 million; EPS = $1.3125 under both.
6. Under A: debt $80, equity $20. Under B: debt = 0.5 × 80 + 0.5 × 20 = $50; equity = 0.5 × 80 + 0 = $40; total $90. Shareholders prefer B ($40 > $20) although A has greater firm value ($100 vs $90).
7. Stressed EBITDA = $350 million; stressed EBIT = $230 million; max interest = $76.7 million; max debt = $1,095 million. The 2.5x ceiling gives $1,250 million, so the coverage criterion is binding.
8. G = 1 − (0.79 × 0.88)/0.68 = −0.0224, or −2.2 cents per dollar; for $1,000 of debt, −$22.35. The personal tax cost on interest outweighs the corporate shield, so debt has a net disadvantage at these rates.
