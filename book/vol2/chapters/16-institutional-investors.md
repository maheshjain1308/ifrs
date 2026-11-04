# Chapter 16: Pensions, Endowments and Institutional Investors

## Learning Objectives

After studying this chapter you should be able to:

- Distinguish defined benefit (DB) and defined contribution (DC) pension arrangements by who bears investment, longevity and inflation risk, and compute a projected benefit obligation and a DC replacement ratio.
- Measure a plan's funding ratio, explain how discount-rate choice drives reported solvency, and evaluate the economic and accounting arguments in the discount-rate debate.
- Explain liability-driven investing (LDI): duration and DV01 matching, hedge ratios, swap overlays and collateral risk, and size a hedge.
- Frame asset allocation for a liability-bearing investor as a surplus problem rather than an asset-only problem, and interpret simulated funding-ratio distributions.
- Describe the endowment model, spending rules that smooth distributions, and the main types and governance issues of sovereign wealth funds.
- Assess how pension obligations affect a corporate sponsor's leverage, valuation, cash flows and strategy, and compare options for managing them.

## Opening Vignette

*Illustrative scenario; the company and all figures are fictional.*

Greyfield Industries is a mid-cap manufacturer with operating earnings (EBITDA) of 300 million, net financial debt of 600 million and an equity market capitalisation that analysts value at roughly 1.4 billion. Its chief financial officer, Tomasz Reyes, has just finished a bruising meeting with the company's pension trustees and its lead lender.

The legacy final-salary pension plan, closed to new members a decade ago, has obligations of about 1.1 billion measured at a high-quality corporate bond yield and assets of 800 million. The plan is 73 percent funded. Half a percentage point of fall in the discount rate last year added almost 80 million to the deficit; strong equity markets partly offset it, but only partly. The trustees want higher cash contributions and a de-risking plan. The lender, for its part, has begun to describe Greyfield's "adjusted leverage" as the sum of financial debt and the after-tax pension deficit, a ratio that is close to breaching a covenant-style threshold the bank uses internally.

Tomasz sees the underlying tension. The plan's assets are 60 percent in equities and growth assets; its liabilities behave like a very long-dated bond portfolio. A drop in rates and a drop in equities together would be the worst of both worlds. The trustees favour liability matching; the finance team worries about locking in a deficit and tying up cash that could fund growth. An insurer has offered an indicative buy-in price for part of the pensioner liabilities. Meanwhile, the board is asking a deceptively simple question: how much is the pension plan really costing the shareholders, and is the deficit a debt?

Answering requires several tools: the economics of DB and DC promises, the mechanics of funding ratios and discount rates, liability-driven investing, asset allocation under liabilities, and the valuation implications for the sponsor. The same toolkit also explains how other long-horizon institutions, endowments and sovereign funds, decide how much risk to take and how much to spend.

## 16.1 The Institutional Investor Landscape

### 16.1.1 Liabilities define the investor

An **institutional investor** manages pooled capital on behalf of beneficiaries, with a mandate shaped by obligations or objectives rather than by the personal preferences of an individual. The most important lesson of this chapter is that **the liability, or spending objective, defines what is "risky" for the investor**. For an individual saving for retirement, volatility of wealth is the risk. For a pension fund with long-dated, inflation-linked promises, the risk is that assets fall short of liabilities, which can happen even when assets rise, if liabilities rise faster. For an endowment, the risk is failure to maintain purchasing power while sustaining a spending stream. For a sovereign fund the objective may be stabilising a budget, saving resource revenue for future generations, or funding a pension reserve.

The consequence is that standard portfolio theory (Markowitz, Volume 1) must be adapted: the relevant optimisation is over **surplus** (assets minus liabilities) or the funding ratio, and the relevant "risk-free asset" is not Treasury bills but the asset that matches the liabilities.

### 16.1.2 Main types

**Table 16.1 – Principal institutional investor types**

| Type | Liability or objective | Horizon | Liquidity need | Distinctive features |
|---|---|---|---|---|
| Corporate DB pension | Contractual, inflation-linked benefits | Very long, but with maturing cash outflows | Moderate, rising as plan matures | Sponsor stands behind plan; regulation; accounting impact on sponsor |
| Public-sector DB pension | Benefit promises to public employees | Very long | Moderate | Contributions set politically; often discounted at expected return; high equity and alternatives |
| DC plan (provider) | None at plan level; member bears outcome | Individual-specific | Member-driven | Default funds, glide paths, fees matter |
| University endowment | Perpetual spending, intergenerational equity | Perpetual | Low, but needs to cover spending and commitments | Large alternatives share; spending rule |
| Charitable foundation | Grants and mission; often a minimum payout | Perpetual | Low | Mission-related investing |
| Insurance company | Policy claims, annuities | Long, matched | Regulated | Capital rules, credit-heavy portfolios |
| Sovereign wealth fund | Stabilisation, savings, development or pension reserve | Varies by mandate | Varies | Governance, transparency and political economy issues |

### 16.1.3 Why they matter for corporate finance

Institutional investors are the dominant owners of public equity and corporate debt, the main providers of long-dated infrastructure and private-market capital (Chapter 15), and, for the many firms that sponsor DB plans, a source of balance-sheet risk. Understanding their constraints explains demand for long-duration bonds, the use of derivatives overlays, the pursuit of illiquidity premia, and shareholder-engagement behaviour. It also explains why a pension deficit shows up in credit analysis, in M&A due diligence (Volume 1, Chapters 22 and 23), and in rating agency methodology.

## 16.2 Defined Benefit versus Defined Contribution

### 16.2.1 The two promises

A **defined benefit** plan promises a specified retirement income, typically a fraction of final or career-average salary for each year of service (for example, 1/60th of final salary per year), often with inflation indexation. The sponsor, directly or through a trust, bears the investment risk, the longevity risk (members living longer than assumed), the inflation risk and the risk that salaries rise faster than expected. A **defined contribution** plan promises only contributions: the member accumulates an account, invests it among available options, and at retirement converts it to income (or draws it down). The member bears the investment, longevity and inflation risks, and the sponsor's obligation ends with the contribution.

Between these poles are hybrids: cash-balance plans (a notional account credited with a fixed or index-linked return), collective DC (risk pooled across members), and DB plans with risk-sharing features such as conditional indexation.

**Table 16.2 – DB and DC compared**

| Dimension | Defined benefit | Defined contribution |
|---|---|---|
| Promise | Retirement income formula | Contribution rate |
| Investment risk | Sponsor (or trust surplus/deficit) | Member |
| Longevity risk | Sponsor | Member (unless annuitised) |
| Inflation risk | Sponsor if benefits indexed | Member |
| Sponsor cost predictability | Low: depends on markets and rates | High: fixed contribution |
| Member outcome predictability | High (replacement ratio defined) | Low |
| Balance-sheet effect on sponsor | Net obligation or surplus recognised | None beyond current contributions |
| Portability | Low | High |
| Pooling benefits | Yes: longevity pooled, long horizon, professional investment, lower fees | Limited, unless collective |
| Key governance question | Funding and de-risking | Defaults, fees, decumulation |

The global drift from DB to DC reflects employer unwillingness to bear financial risk, regulation, accounting rules that made DB deficits visible on balance sheets, and greater workforce mobility. It does not mean that risk has vanished; it has moved to individuals, who are less able to diversify longevity risk and less informed on investment.

### 16.2.2 Measuring a DB obligation

The measures used by actuaries and accountants differ in how they treat future salary growth:

- The **accumulated benefit obligation (ABO)** is the present value of benefits earned to date, based on current salaries.
- The **projected benefit obligation (PBO)** is the present value of benefits earned to date, based on **projected final salaries**. Under the projected unit credit method, each year of service earns a unit of benefit, and the PBO values the units accrued so far.
- The **service cost** is the present value of the additional benefit earned in the current year; the **interest cost** is the unwinding of the discount on the opening obligation. Accounting standards (such as IAS 19 in IFRS, and ASC 715 in US GAAP) require these components in the sponsor's financial statements, with actuarial gains and losses recognised in other comprehensive income under IFRS.

**Example 16.1 – A member's PBO, service cost and interest cost.** A 45-year-old member has 15 years of service, a current salary of 80,000, and salaries are expected to grow 3 percent a year. The plan pays 1/60th of final salary for each year of service, starting at age 65, payable for 20 years with 2 percent annual indexation. The discount rate is 5 percent. (Treat the member as certain to survive and retire at 65, for clarity; real valuations apply mortality, turnover and other decrements.)

*Step 1: Projected final salary.* Retirement is in 20 years: 80,000 × 1.03²⁰ = 80,000 × 1.8061 = 144,489.

*Step 2: Accrued pension at 65.* 15/60 × 144,489 = 36,122 a year (first payment, indexed thereafter).

*Step 3: Value at 65 of a pension of 1 in its first year, indexed at 2 percent for 20 years, discounted at 5 percent.* Annuity factor = Σ (t = 1..20) 1.02^(t−1) / 1.05^t = 14.665 (payments at year-end).

*Step 4: PV at 65 of the accrued pension.* 36,122 × 14.665 = 529,730.

*Step 5: PBO today.* Discount 20 years at 5 percent: 529,730 / 1.05²⁰ = 529,730 / 2.6533 = **199,656**.

*Step 6: ABO for comparison* (no salary growth: pension 15/60 × 80,000 = 20,000): 20,000 × 14.665 / 2.6533 = 110,545. The PBO is 80 percent larger than the ABO, because the plan promises pensions linked to final salary.

*Step 7: Service cost.* One more year of service adds 1/60 of final salary: 144,489/60 = 2,408 a year of pension, worth 2,408 × 14.665 / 2.6533 = **13,310**.

*Step 8: Interest cost.* 5% × 199,656 = **9,983**.

*Step 9: Roll-forward.* The PBO a year later (member now 46, 16 years of service, with 19 years to retirement) is (199,656 + 13,310) × 1.05 = 223,615, which equals 16/60 × 144,489 × 14.665 / 1.05¹⁹. (Here the service cost is valued at the start of the year; conventions differ on timing.)

*Interpretation.* The PBO grows faster than the interest cost alone because of service accrual; and because the discount rate is applied over 20 years, a half-point change in the rate moves the member's PBO by roughly 8 to 10 percent. The sensitivity of the obligation to the discount rate is the origin of most pension-risk management.

### 16.2.3 The DC outcome: contributions, returns and fees

For a DC member the outcome is a random accumulation. Three variables dominate: the **contribution rate** (and its persistence), the **net return** (gross return minus charges), and the **time horizon**. Because early contributions compound for decades, delays and gaps are costly, and so are small recurring fees.

**Example 16.2 – DC replacement ratio and the cost of fees.** A member starts work at salary 60,000, receives annual salary growth of 3 percent for 35 years, and contributes 12 percent of salary (employee and employer combined) at the end of each year. The account earns 5 percent a year net of fees. At retirement the balance buys a 20-year level annuity at 4.5 percent.

*Step 1: Final salary.* 60,000 × 1.03³⁴ = 163,914 (salary in year 35).

*Step 2: Accumulated balance.* Balance_t = Balance_(t−1) × 1.05 + 0.12 × Salary_t. Summing over 35 years gives **972,775**.

*Step 3: Annuity factor.* 20 years at 4.5 percent: (1 − 1.045⁻²⁰)/0.045 = 13.008.

*Step 4: Annual retirement income.* 972,775 / 13.008 = 74,783.

*Step 5: Replacement ratio.* 74,783 / 163,914 = **45.6 percent** of final salary.

*Step 6: Add a 1 percent annual fee* (net return 4 percent): balance **815,203**, income 62,670, replacement ratio **38.2 percent**. The fee reduces the retirement balance by 16.2 percent, and the replacement ratio by 7.4 percentage points.

*Step 7: Lower contribution* (8 percent, no extra fee): balance 648,517, replacement ratio 30.4 percent.

*Interpretation.* A DC member needs a high sustained contribution rate and low costs to achieve a replacement ratio comparable to a typical DB promise. The 4.5 percent annuity rate is itself a function of interest rates at retirement, so DC members bear interest-rate risk on conversion to income. A well-designed default fund therefore **de-risks as retirement approaches**, shifting from growth assets toward assets that resemble annuity pricing, which is the DC analogue of liability-driven investing.

### 16.2.4 Managerial implications of the DB/DC choice

For a sponsor, the DB/DC decision is a **risk-allocation** decision. A DB plan transfers risk from employees to shareholders; shareholders bear a risk that is correlated with their own (the company's earnings often weaken in the same recessions in which equities fall and pension deficits widen) and that is hard to diversify. A sponsor with strong cash flows and a stable workforce may prefer the retention benefits of DB; a cyclical or levered sponsor may find the volatility intolerable. Closing a DB plan to new entrants or future accrual stops the growth of the risk but not the legacy exposure, which remains for decades.

## 16.3 Funding Ratios and the Discount-Rate Debate

### 16.3.1 The funding ratio

The **funding ratio** is the ratio of plan assets to the value of liabilities:

```
Funding ratio = Assets / Liabilities
Surplus (deficit) = Assets − Liabilities
```

A funding ratio above 100 percent means a surplus on the chosen measure; below 100 percent, a deficit. The ratio is a ratio of two random variables. Assets move with markets; liabilities move with interest rates, inflation expectations, mortality assumptions and plan changes. Because liabilities are long-dated, they behave like a long-duration, often inflation-linked bond: when yields fall, liabilities rise, and unless the assets rise by a similar amount, the funding ratio falls.

Two numbers are therefore needed to understand a plan's risk: the current funding ratio, and the **sensitivity of the ratio to market moves**. A plan that is 100 percent funded but with assets of duration 3 years against liabilities of duration 14 is in a weak position, since a fall in rates immediately creates a large deficit.

### 16.3.2 Valuing liabilities: which discount rate?

The liability is a stream of expected benefit payments. The present value depends on the discount rate, and the choice is one of the most contested questions in pension finance. Four positions are common.

**1. The expected return on plan assets (public-plan convention).** Many public-sector plans historically discounted at the assumed long-run return on their (equity-heavy) portfolio, say 7 percent. This produces a low liability and a high funding ratio, and it implicitly assumes the investment premium will be earned. It also makes a riskier asset mix look cheaper: raise the equity share, raise the assumed return, reduce the reported liability and the required contributions.

**2. A high-quality corporate bond yield (accounting convention).** IAS 19 and US GAAP require corporate sponsors to discount at a market yield on high-quality (typically AA) corporate bonds with maturities matching the obligations. The reasoning is that the benefit promise has low default risk and that the liability should reflect market-consistent prices.

**3. A government bond or swap yield (regulatory or "risk-free" convention).** Some regulators and many actuaries use sovereign or swap curves, sometimes with a spread. The rate is lower than the AA yield, producing a larger liability.

**4. The sponsor-credit-adjusted rate.** Some argue the liability's value should reflect the possibility that the sponsor cannot pay, which would argue for a higher discount rate for weak sponsors. Regulators generally reject this, since the benefits are protected by contract and law.

### 16.3.3 The economic argument

The argument for a low, market-consistent rate rests on financial economics. A benefit that is fixed (or indexed) and for which payment is safe is economically a debt-like claim. The value of a claim depends on the **riskiness of the cash flows, not on the riskiness of the assets chosen to fund it**. This is the logic of Modigliani-Miller applied to pensions: the asset allocation cannot change the value of the liability. If a plan invests in equities and expects a 7 percent return, that does not reduce the amount owed to members; it means the sponsor has taken on a risky position, with a possible gain and possible loss, relative to the matching asset.

The theoretical literature supports this. Sharpe (1976) modelled the pension guarantee as a put option written on the plan's assets, so that the sponsor (and any insurer, such as a pension guarantee fund) holds a short put with strike equal to the liability; riskier assets raise the put's value and so transfer value from beneficiaries or insurers to shareholders. Treynor (1977) and Black (1980) argued that sponsors should invest in bonds and exploit the tax advantages of the arrangement, since equity risk in the plan is not valued at its expected return. Tepper (1981) and others discussed the tax arbitrage of funding a plan with bonds financed by corporate debt. The empirical record of corporate behaviour is mixed, though, and many plans hold substantial equities.

### 16.3.4 The counter-arguments

The case for the expected-return rate has some sound elements. The plan is a **going concern** with a long horizon; contributions are made over time; benefits are paid over many decades; and a diversified portfolio can plausibly earn a premium over bonds, so if the plan and sponsor are both long-lived, expected funding costs may be lower than a market-consistent valuation implies. Public plans may also have taxing power behind them: the "sponsor" is a government that can raise taxes, and the covenant is stronger than any corporate's.

The rebuttal is that **expected returns are not guaranteed**. If the premium is earned, the plan will outperform a bond strategy; if it is not, someone, usually taxpayers or future employees, will pay. Discounting at the expected return implicitly assumes the plan is risk-free to fund at the equity premium, and it discourages recognition of risk. A well-managed plan can disclose both: the liability at a market-consistent rate for risk measurement, and an expected-cost estimate at an expected return for budgeting.

**Table 16.3 – Discount-rate choices and their consequences**

| Convention | Typical rate relation | Liability | Reported funding ratio | Incentive effect |
|---|---|---|---|---|
| Expected asset return | Highest | Lowest | Highest | Rewards risk-taking (raising the assumed return lowers the liability) |
| High-quality corporate bond yield | Middle | Middle | Middle | Market-consistent; sponsor deficits visible |
| Government or swap curve | Lowest | Highest | Lowest | Conservative; matches regulatory and buy-out pricing |

**Example 16.3 – Discount-rate choice and the funding ratio.** A plan will pay 40 million at the end of each year for 25 years. Plan assets are 520 million.

*Step 1: PV of liabilities at different rates.* PV = 40 × [1 − (1 + r)⁻²⁵] / r.

| Discount rate | PV of liabilities | Funding ratio (520 / PV) |
|---|---|---|
| 4.0% | 624.88 | 83.2% |
| 4.5% | 593.13 | 87.7% |
| 5.0% | 563.76 | 92.2% |
| 5.75% | 523.71 | 99.3% |
| 6.0% | 511.33 | 101.7% |
| 7.0% | 466.14 | 111.6% |

*Step 2: Interpretation of the gap.* The same plan, with the same assets and the same promised payments, is 83 percent funded at a 4 percent risk-free-style rate and 112 percent funded at a 7 percent expected-return rate. Reported solvency depends on a convention, not on any change in what is owed.

*Step 3: Duration and convexity at 5 percent.* The Macaulay duration of the payment stream is 10.52 years, so modified duration = 10.52 / 1.05 = 10.02. Convexity is 153.8. A 100 bp fall in rate predicts a change of −(−0.01) × 10.02 + 0.5 × 153.8 × 0.01² = +10.02% + 0.77% = +10.79%, against an exact change of +10.84% (from 563.76 to 624.88). A 100 bp rise predicts −10.02% + 0.77% = −9.25%, against an exact −9.30% (to 511.33).

*Step 4: Funding-ratio sensitivity.* With assets fixed at 520, a 100 bp fall in the rate turns a 92.2 percent funding ratio into 83.2 percent; a 100 bp rise lifts it to 101.7 percent. Because liabilities are convex, a fall in rates raises liabilities by more than a rise lowers them: an asymmetry that LDI strategies need to manage.

*Interpretation.* One percentage point on the discount rate moves the liability by about 10 percent (the duration), and therefore the funding ratio by about 9 points here. Anyone assessing a pension plan should ask first: *what rate, and why?* And second: *how would the ratio change if that rate fell by 100 bp?*

### 16.3.5 Common mistakes

> **Common mistake 1.** Comparing funding ratios across plans without checking the discount-rate convention. A public plan at "80 percent funded" on an expected-return basis may be far worse than a corporate plan at 80 percent on an AA-bond basis.
>
> **Common mistake 2.** Treating a funding ratio above 100 percent as safe. A plan at 105 percent with a large unhedged duration gap can slip below 90 percent in a bad year for rates. The right question is the *distribution* of the ratio, not its point estimate.
>
> **Common mistake 3.** Assuming a high expected return reduces the cost of pensions. It reduces the *expected* cost, at the price of greater variance and a possible shift of the burden to other stakeholders.

## 16.4 Liability-Driven Investing

### 16.4.1 The idea

**Liability-driven investing (LDI)** is the practice of structuring the plan's assets so that their value moves with the liabilities, thereby stabilising the funding ratio. It splits the portfolio into two parts. A **liability-hedging portfolio** (long-duration government and high-grade corporate bonds, inflation-linked bonds, interest-rate and inflation swaps) is designed to replicate the liability's sensitivity to rates and inflation. A **return-seeking portfolio** (equities, private markets, credit, real assets) is designed to earn the excess return needed to close the deficit and pay for future accruals. The plan chooses how much risk to run in the second part, and then removes as much as it wishes of the unrewarded interest-rate and inflation risk in the first.

The logic follows from Section 16.3: the liability has a duration, so interest-rate exposure is an unrewarded risk unless the plan is paid to bear it. Hedging it is not market timing; it is the removal of a mismatch.

### 16.4.2 Duration, DV01 and hedge ratios

The key sensitivities are:

```
Modified duration D = (1/P) × Σ t × CF_t / (1 + y)^t  /  (1 + y)
DV01 = P × D × 0.0001      (value change for a 1 bp fall in yield)
Hedge ratio = DV01 of assets / DV01 of liabilities
```

DV01 is the money change for one basis point and is the practical way to compare assets and liabilities, because it accounts for size. A plan with assets of 520 and liabilities of 564 needs the **dollar** duration of its assets to approach the liability's, not simply the same percentage duration. This is why an underfunded plan with a duration-matched asset portfolio still has an uncovered liability exposure: assets are smaller than liabilities, so a 1 percent move in the liability is larger in money terms than a 1 percent move in the assets.

Typical hedging policies set a **target hedge ratio** (for example 50 percent today, rising toward 100 percent as the funding ratio improves) and may hedge interest rates and inflation separately. Many plans use **triggers** or glide paths: as funding improves, risk assets are sold and hedges added, locking in gains.

### 16.4.3 Instruments

Physical bonds provide matching exposure but require capital that could otherwise be in return-seeking assets. **Interest-rate swaps** (paying floating, receiving fixed) give duration exposure with little cash outlay, and **inflation swaps** give inflation exposure. **Repurchase agreements** let a plan lever a gilt or Treasury portfolio. The efficient design, with a sizeable overlay on top of a modest bond portfolio, frees capital for return-seeking assets, but at the price of **collateral and liquidity risk**. A fall in yields creates swap gains, a rise in yields creates swap losses that must be met with cash collateral. If yields jump, the plan needs liquid assets immediately, and may have to sell other holdings into a falling market. The UK gilt market in September 2022 provided a vivid illustration: rapid yield increases triggered large collateral calls on leveraged LDI portfolios, forcing asset sales that pushed yields still higher until the central bank intervened. The lesson, accepted since by regulators, is to hold a **liquidity buffer** sized to withstand a large yield shock and to stress-test the combined position.

**Example 16.4 – Sizing an LDI swap overlay.** Using Example 16.3 at a 5 percent discount rate: liabilities 563.76, assets 520 (funding ratio 92.2 percent). The assets are 60 percent equities (no interest-rate sensitivity assumed) and 40 percent bonds (208) with modified duration 8. A 20-year receiver swap has modified duration 12.46 (same as a 20-year par bond at 5 percent).

*Step 1: Liability DV01.* Liability modified duration = 10.02, so DV01 = 563.76 × 10.02 × 0.0001 = **0.565**. (A 1 bp fall in yield raises liabilities by 0.565 million.)

*Step 2: Asset DV01.* 208 × 8.0 × 0.0001 = **0.166**.

*Step 3: Hedge ratio.* 0.166 / 0.565 = **29.4 percent**. The plan is 70 percent unhedged on rates.

*Step 4: DV01 needed to reach 100 percent.* 0.565 − 0.166 = 0.399.

*Step 5: Swap notional.* 0.399 / (12.46 × 0.0001) = **319.9 million** of receive-fixed swaps (about 61 percent of assets as notional, with minimal initial cash).

*Step 6: Outcomes for a 100 bp move* (equities held constant; asset effects approximated linearly):

| Scenario | Liabilities | Assets, unhedged | Funding ratio, unhedged | Assets with swaps | Funding ratio, hedged |
|---|---|---|---|---|---|
| Start | 563.76 | 520.00 | 92.2% | 520.00 | 92.2% |
| Rates −100 bp | 624.88 | 536.64 | 85.9% | 576.50 | 92.3% |
| Rates +100 bp | 511.33 | 503.36 | 98.4% | 463.50 | 90.6% |

The swap gains 39.86 when rates fall (319.9 × 12.46 × 1%) and loses 39.86 when they rise.

*Step 7: Collateral requirement.* In the +100 bp scenario the swaps lose 39.86 million, or 7.7 percent of assets, which must be funded in cash (collateral) over a short horizon.

*Interpretation.* The hedged funding ratio stays within about 90.6 to 92.3 percent, against 85.9 to 98.4 percent unhedged. The hedge **removes upside as well as downside** (the plan gives up the gain from a rate rise) and demands liquid collateral of nearly 8 percent of assets for a 100 bp shock. The small residual drift in the hedged case (92.3 percent at −100 bp vs 90.6 at +100 bp) arises from convexity: the liability's convexity exceeds a linear swap position's. A real design would add liquidity buffers and rebalance the hedge as yields move.

### 16.4.4 Longevity and inflation

Interest rates are not the only liability risk. **Longevity risk**: if members live longer than assumed, liabilities increase and no market asset hedges the exposure cheaply. Instruments include **buy-ins** (the plan buys an insurance policy that pays the benefits of specified members), **buy-outs** (the insurer takes on liabilities and the sponsor exits), and **longevity swaps**. **Inflation risk** arises where benefits are indexed; inflation-linked bonds and inflation swaps hedge much of it, though caps and floors in the benefit rules complicate the match.

## 16.5 Asset Allocation for Liability-Bearing Investors

### 16.5.1 From asset-only to surplus optimisation

The classical mean-variance problem (Markowitz) chooses weights to maximise expected return for a given portfolio variance. For a plan, the right objective is the **surplus** (or the funding ratio), whose variance includes the covariance between assets and liabilities. Sharpe and Tint's surplus optimisation recasts the problem in terms of a portfolio return and a liability return; the key formula for the variance of the funding ratio's change is approximately:

```
Var(FR change) ≈ FR² × [ σ_A² + σ_L² − 2 ρ σ_A σ_L ] 
```

where σ_A and σ_L are the volatilities of asset and liability returns and ρ is their correlation. For a plan with a modest deficit, **the minimum-risk portfolio is the liability-matching portfolio**, not a cash or short-bond portfolio. Equities, which have a low correlation with liabilities, add a lot of surplus risk for the same portfolio volatility. The planner's problem is to decide how much surplus risk (the "risk budget") the sponsor can tolerate, then to maximise expected surplus return per unit of risk.

### 16.5.2 Setting the risk budget

The risk budget depends on three things. The **funding ratio and the sponsor's covenant**: a poorly funded plan with a weak sponsor has little capacity for risk, while a well-funded plan with a strong sponsor can take risk because the sponsor can fund a shortfall. The **plan's maturity** (the ratio of retirees to active members and the proportion of cash outflow to assets) which determines liquidity needs and the horizon over which risk can be recovered. And **stakeholder preferences**: trustees, sponsor, regulator, members.

Practical frameworks include **funding-ratio glide paths** (reduce risk as the funding ratio rises toward a target, such as full funding on a buy-out basis), **surplus-at-risk or funding-ratio-at-risk limits** (for example, the 95th percentile one-year loss in the funding ratio must not exceed a set amount), and **journey-plan** models that simulate paths to a long-term target.

### 16.5.3 Simulation: how much risk is worth taking?

Closed-form formulas can only go so far, because liabilities, rates and equities interact through time, contributions arrive, and decisions depend on state variables. Most plans therefore use stochastic simulation.

**Example 16.5 – Funding-ratio simulation under three policies.** Consider a stylised plan starting with assets 0.90 per unit of liabilities, with liability duration 10. Interest rates follow a mean-reverting process (starting at 4.5 percent, long-run level 4.5 percent, speed 0.15 a year, volatility 0.8 percentage points a year). Liabilities earn the prevailing yield less duration times the change in rates. Equity returns have mean 7.5 percent and volatility 16 percent, with a correlation of −0.2 with the rate shock (equities tend to fall when rates rise). Conventional bonds have duration 8; the liability-matching portfolio has duration 10 and earns 0.2 percent above the liability return. The sponsor contributes 2 percent of initial liabilities each year. We simulate 100,000 paths over 10 years (computed with Python; seed 7).

**Table 16.4 – Simulated funding ratio after 10 years**

| Policy | Mean | Median | 5th pct | 95th pct | P(FR < 1.0) | P(FR < 0.8) | Std dev |
|---|---|---|---|---|---|---|---|
| A: 60% equity, 40% conventional bonds, unhedged | 1.274 | 1.230 | 0.784 | 1.913 | 22.4% | 5.8% | 0.350 |
| B: 40% equity, 60% bonds, 80% of the bond sleeve liability-matched | 1.209 | 1.190 | 0.883 | 1.600 | 16.7% | 1.4% | 0.219 |
| C: 25% equity, 75% liability-matched | 1.160 | 1.153 | 0.958 | 1.388 | 10.2% | 0.1% | 0.131 |

*Reading the results.* Policy A has the highest expected funding ratio (1.274) but also the widest distribution: its 5th percentile is 78 percent funded, and there is a 5.8 percent chance of ending below 80 percent funded. Policy C gives up about 11 points of expected funding ratio (1.274 to 1.160), but cuts the standard deviation from 0.350 to 0.131 and the probability of ending below 80 percent from 5.8 percent to 0.1 percent. Policy B sits in between. Note that even Policy C has a 10 percent chance of a funding ratio below 100 percent after 10 years, because the starting deficit is 10 percent, the contribution is modest, and the liability-matched assets earn only a small premium over liabilities.

*Interpretation.* There is no "right" policy without a view of the sponsor's capacity for contributions and the cost of failure. If the sponsor can afford deficit contributions and values the upside, A may be justified; if a bad outcome would breach covenants or threaten the firm, B or C is more appropriate. The simulation's value is that it makes the trade-off between expected funding and tail risk explicit. Its limitation is that the answers depend entirely on the assumed correlations and premia: in a model where equities earn a lower premium or correlate more with rate falls, the ordering shifts.

### 16.5.4 Alternatives, illiquidity and diversification

Large plans also hold private equity, real estate, infrastructure (Chapter 15), private credit and hedge funds, for diversification and a possible illiquidity premium. The concerns are fees, valuation lags that understate true risk, and illiquidity when collateral or benefit payments fall due. A useful discipline is to classify assets by liquidity under stress and ensure the liquid portion covers collateral and benefit needs for a defined period in a severe scenario.

## 16.6 Endowments and Foundations

### 16.6.1 The objective: intergenerational equity

An endowment exists in perpetuity and must serve current and future beneficiaries equally. Its objective is to **maximise the real, sustainable spending stream** while preserving the real value of the corpus. The fundamental tension is between today's spending (the university's budget depends on distributions) and tomorrow's capital. There are no external liabilities in the pension sense, but there are **implicit liabilities**: the budget share the endowment funds, and the donors' expectation that the capital will last.

The required real return is approximately the spending rate plus the cost of investment management plus the excess of higher-education cost inflation over general inflation. With a 5 percent spending rate, 0.5 percent investment costs and inflation in the institution's costs of 2.5 percent, the required nominal return is about 8 percent: a demanding hurdle that drives the search for equity and alternative exposure.

### 16.6.2 The endowment model

The **endowment model**, associated with David Swensen's management of the Yale endowment and popularised through the 1990s and 2000s, rests on several claims. First, a **long horizon and absence of near-term liabilities** allow the investor to bear illiquidity and volatility, and so to earn the associated premia. Second, a heavy **equity orientation**, since equities have provided the highest long-run real returns. Third, **diversification away from traditional marketable assets** into private equity, venture capital, real assets and absolute-return strategies, where skilled manager selection might add value. Fourth, a **governance structure** with a small, expert investment committee and a long-tenured staff able to make unconventional decisions and to access top managers.

The critiques are also instructive. Manager selection, not asset-class exposure, accounts for much of the model's performance, and access to top managers is scarce, so the model is hard to replicate at smaller institutions. Valuation smoothing in private assets understates risk. The 2008 financial crisis exposed **liquidity risk**: endowments with large unfunded private-market commitments and falling public holdings faced a "denominator effect," with illiquid assets forming an inflated share of a shrunken portfolio, while still owing capital calls and budget distributions. Some endowments sold assets at poor prices or cut budgets; the lesson is to size illiquid commitments against stressed liquidity, not just average liquidity. A simpler alternative, often called a **reference-portfolio** approach (used publicly by some sovereign funds), benchmarks the actual portfolio against a low-cost mix of equities and bonds and requires active risk to be justified against it.

### 16.6.3 Spending rules

A naive rule, spending a fixed percentage of current market value each year, makes distributions as volatile as markets; a rule that spends a fixed real amount, regardless of market value, risks depleting the fund. Most institutions therefore use a **smoothing rule**. The best-known is a weighted average of last year's spending (grown by inflation) and a target percentage of current market value:

```
Spending_t = w × Spending_(t−1) × (1 + inflation) + (1 − w) × s × MarketValue_(t−1)
```

where w is the smoothing weight (for example 0.8) and s the long-run spending rate (for example 5 percent). Variants use a moving average of market value over three to five years.

**Example 16.6 – A smoothing spending rule versus a fixed 5 percent rule.** An endowment starts with a market value of 1,000. Year-1 spending is 45. Inflation is 2.5 percent. Smoothing weight w = 0.8, spending rate s = 5 percent. Returns over five years are +12%, −20%, +8%, +10%, +6%. Spending occurs at the start of each year; the balance then earns the return.

*Step 1: Smoothing rule, year 1.* Spending 45; market value after = (1000 − 45) × 1.12 = 1,069.60.

*Step 2: Year 2.* Spending = 0.8 × 45 × 1.025 + 0.2 × 0.05 × 1,069.60 = 36.90 + 10.70 = **47.60**. Market value = (1,069.60 − 47.60) × 0.80 = 817.60.

*Step 3: Year 3.* Spending = 0.8 × 47.60 × 1.025 + 0.01 × 817.60 = 39.03 + 8.18 = **47.21**. Market value = (817.60 − 47.21) × 1.08 = 832.03.

*Step 4: Years 4 and 5.* Spending 47.03 and 47.20; market values 863.50 and 865.28.

*Step 5: Fixed 5 percent rule.* Spending is 50.0, 53.2 (5% of 1,064.0), 40.4 (5% of 808.6), 41.5 and 43.4; ending market value 873.07.

| Year | Return | Smoothing rule spending | Fixed 5% rule spending |
|---|---|---|---|
| 1 | +12% | 45.00 | 50.00 |
| 2 | −20% | 47.60 | 53.20 |
| 3 | +8% | 47.21 | 40.43 |
| 4 | +10% | 47.03 | 41.48 |
| 5 | +6% | 47.20 | 43.35 |

*Interpretation.* After the 20 percent crash, the fixed rule forces spending to fall by 24 percent (53.2 to 40.4), exactly when the university's needs for support are greatest. The smoothing rule changes spending by less than 1 percent. The price is that spending runs ahead of the market for a time (it is above 5 percent of market value in years 3 to 5), which depletes capital slightly: the smoothing rule's ending value (865.28) is below the fixed rule's (873.07). The smoothing rule thus trades capital preservation in the short run for budget stability, which is usually the right trade for an institution that must run a payroll.

## 16.7 Sovereign Wealth Funds

### 16.7.1 Types and purposes

A **sovereign wealth fund (SWF)** is a state-owned investment fund, typically funded from commodity revenue, fiscal surpluses or foreign-exchange reserves. Classification by purpose is more useful than by name:

- **Stabilisation funds** smooth budgets against commodity-price swings; they need liquidity and low risk.
- **Savings or intergenerational funds** convert finite resource wealth into a permanent financial asset; they have a long horizon and can take equity and illiquid risk.
- **Development funds** invest in domestic economic development, which blurs commercial and policy objectives.
- **Pension reserve funds** pre-fund future public pension liabilities; they resemble large pension plans.
- **Reserve investment corporations** manage excess foreign-exchange reserves for higher return.

### 16.7.2 Investment and governance issues

SWFs combine the long horizon of endowments with unusual size, which creates market-impact and liquidity constraints and often leads to indexing-style core holdings with active satellites. Their distinctive questions are governance questions: who decides the spending rule (the finance ministry, the fund board), how withdrawals are linked to fiscal rules, how transparent the fund is, whether its investments are commercial or political, and how conflicts are managed. The **Santiago Principles** (2008), a voluntary set of generally accepted principles and practices agreed by SWFs, address legal framework, governance and accountability, and investment and risk-management practices. Funds that tie withdrawals to a fiscal rule based on the expected real return of the fund, and that publish their investment reference portfolio and results, are widely regarded as having strong governance; funds without such rules face the risk that the capital is drawn down for short-term fiscal needs.

For corporate leaders, SWFs matter as large, patient co-investors and acquirers. They often invest alongside private equity and infrastructure sponsors (Chapter 15), buy minority stakes in listed companies, and are active in real-estate and private-market co-investment. Because of national-security and foreign-investment screening, their approach to governance and disclosure can affect a transaction's regulatory path.

## 16.8 Implications for Corporate Sponsors

### 16.8.1 The pension plan as part of the corporate balance sheet

For the sponsor, a DB plan is economically a **debt-like liability coupled with a risky asset portfolio**. The net deficit is a claim ahead of shareholders (the sponsor must eventually fund it, often with tax deductibility), and the volatility of the deficit is a source of earnings and credit risk. Analysts and rating agencies therefore adjust: they add the deficit (usually after tax) to net debt, and they adjust EBITDA or cash flow for the service cost and deficit repair payments.

**Example 16.7 – Adjusting leverage and equity value for a pension deficit.** Return to Greyfield (Opening Vignette): EBITDA 300; net financial debt 600; operating enterprise value (before pension) 2,000; pension liabilities 1,100; plan assets 800; tax rate 25 percent; liability duration 14.

*Step 1: Pre-tax and after-tax deficit.* Deficit = 1,100 − 800 = 300; after tax (contributions are deductible) = 300 × (1 − 0.25) = **225**.

*Step 2: Funding ratio.* 800 / 1,100 = 72.7 percent.

*Step 3: Adjusted leverage.* Reported net debt / EBITDA = 600 / 300 = 2.0x. Adjusted (with after-tax deficit) = (600 + 225) / 300 = **2.75x**. Using the pre-tax deficit gives 3.0x.

*Step 4: Equity value.* Ignoring the deficit: 2,000 − 600 = 1,400. Deducting the after-tax deficit: 2,000 − 600 − 225 = **1,175**, an effective 16 percent reduction in equity value, even though the pension liability does not appear in financial debt.

*Step 5: Deficit repair cash cost.* Spreading 300 over 10 years at a 5 percent rate gives a level payment of 300 × 0.05 / (1 − 1.05⁻¹⁰) = 38.85 a year pre-tax, or 29.14 after tax: about 10 percent of EBITDA for a decade.

*Step 6: Rate shock.* If the discount rate falls 50 bp, the liability rises by roughly 1,100 × 14 × 0.5% = 77, so the deficit increases from 300 to about 377 (and the after-tax deficit to about 283), adjusted leverage from 2.75x to about 2.94x, with assets unchanged. If half the interest-rate risk were hedged, the increase would be about half as large.

*Interpretation.* The deficit consumes 225 of equity value and lifts leverage by three-quarters of a turn; a half-point fall in discount rates, the sort of move that occurs in a normal year, adds almost another fifth of a turn. That is why lenders, rating agencies and acquirers treat the plan as debt, and why the board should evaluate pension decisions alongside capital structure.

### 16.8.2 Strategic options for the sponsor

A sponsor facing a large DB exposure has a menu of options, whose costs and benefits differ.

- **Fund the deficit faster**, with cash or with assets such as property or a contingent asset arrangement. This reduces risk but uses cash. It may be tax-efficient, since contributions are generally deductible. Sponsors sometimes borrow to fund the plan (a debt-for-pension swap), which is value-neutral before tax effects but lowers risk for members.
- **Reduce the risk of the plan assets** through LDI and de-risking, trading expected return for lower variance (Section 16.5). This is the cheapest way to cut deficit volatility.
- **Close the plan** to new entrants or to future accrual, replacing it with a DC arrangement. This halts growth in exposure but does not remove legacy liabilities.
- **Transfer risk to an insurer.** A buy-in covers a portion of liabilities with an insurance policy; a buy-out removes them from the sponsor. The price is typically higher than the accounting liability (the insurer discounts at a lower rate and loads for capital and profit), so completing a buy-out often requires a cash contribution above the reported deficit, but leaves the sponsor free of longevity and investment risk.
- **Liability management exercises**, such as enhanced transfer values or pension increase exchanges, which offer members a capital sum in lieu of future benefits, must be handled with care for fairness and regulatory reasons.
- **Negotiate the contribution schedule and security**, balancing the trustees' demand for contributions against the sponsor's capital needs. The relationship between the strength of the sponsor's covenant and the plan's risk is two-way: a stronger sponsor can support a riskier plan.

### 16.8.3 Valuation and M&A implications

In valuation (Volume 1, Chapter 21) the pension deficit should be treated as a debt-like item in the bridge from enterprise value to equity value, after tax, with careful attention to the discount rate used and to whether the deficit is calculated on a market-consistent basis. In M&A and LBO transactions (Volume 1, Chapters 22 and 23), the pension plan can be a deal issue: buyers will demand a price adjustment, or a funding commitment, and will examine the trustees' power to demand additional contributions on a change of control. Because leveraged buyers cannot support highly volatile liabilities, an LBO often leads to a rapid de-risking or insurance transaction. Finally, **ratings and covenants**: sponsors should check how the lender treats pension deficits in covenant definitions, since an unexpected fall in rates can trigger a technical breach.


## Case Study

### Norwood Rail Pension Plan: De-Risk Now or Wait for Rates?

*Illustrative case; the firm, the plan and all figures are fictional.*

Norwood Rail Holdings is a regional rail and freight operator with annual EBITDA of 420 million and net financial debt of 1.05 billion. It sponsors the Norwood Staff Pension Scheme, a final-salary DB plan closed to new members eight years ago and to future accrual two years ago, when management replaced it with a DC plan for active employees. The legacy plan has 14,000 members: about 40 percent pensioners, 45 percent deferred members and 15 percent still working for the firm with frozen benefits.

On the trustees' latest valuation, using a discount rate based on high-quality corporate bond yields, liabilities are 2.4 billion and assets are 2.0 billion, a funding ratio of 83 percent and a deficit of 400 million. The liability has a modified duration of about 13 years and is largely inflation-linked. The asset portfolio is 55 percent equities and private markets, 15 percent credit, and 30 percent government bonds and cash, with a modest swap overlay that hedges about 35 percent of the interest-rate sensitivity of the liabilities. The sponsor currently contributes 45 million a year toward the deficit under an agreed recovery plan that runs ten years.

The chief financial officer, Amara Bello, faces three pressures. First, the company's main lender has told her that it adds 100 percent of the pension deficit, after tax, to net debt in its leverage covenant, which has a ceiling of 3.5 times. At a 25 percent tax rate, the adjusted leverage is already above 3.2 times, and the lender has noted that a further fall in discount rates could breach the covenant. Second, the trustees want a "journey plan" to full funding on a conservative basis within ten years, and want a hedge ratio of 80 percent as soon as possible. They also want the sponsor to give security over a property portfolio as a contingent asset. Third, the board wants to resume dividends and to fund a fleet replacement programme of 600 million, and sees the pension contributions as competing with those priorities.

An insurer has offered an indicative quote to buy in the pensioner liabilities, about 960 million on a reported basis, at a price of roughly 1.07 billion. The price exceeds the accounting liability because the insurer prices on a lower discount rate and includes a capital and profit margin. The trustees are interested but note that using plan assets to pay the premium would leave the remaining plan with a higher proportion of deferred members, whose liabilities are longer and more uncertain, and with less liquid assets.

Amara has also been approached by the chair of the trustees about an alternative: the sponsor could issue a 300 million bond and make a one-off contribution to the plan, in return for a reduction in the annual recovery contributions and a more flexible investment strategy. Her treasury team notes that the bond would raise reported financial debt, but would reduce the after-tax pension deficit by the same amount (before any tax effects), so adjusted leverage would be unchanged on day one. It would, however, replace an uncertain, contractually soft obligation with hard debt that carries covenants and has to be refinanced.

Her analysts have run a simulation. With the current allocation and a 35 percent hedge, the one-year 5th-percentile fall in the funding ratio is about 11 points, and the 5th percentile of the deficit in five years is about 800 million. At an 80 percent hedge ratio with 40 percent in return-seeking assets, the one-year 5th-percentile fall narrows to about 5 points, but the expected funding ratio in five years falls by about 4 points and the plan's liquidity needs for swap collateral rise to roughly 12 percent of assets in a 100 basis point shock.

### Discussion Questions

1. Estimate the after-tax pension deficit and Norwood's adjusted leverage using the figures given. Explain why the lender's treatment is economically defensible, and what the sponsor can and cannot do to influence it.
2. Evaluate the trustees' proposal to raise the hedge ratio to 80 percent. What does it do to the distribution of the deficit, to expected funding and to liquidity? What preparations (collateral buffer, rebalancing rules) would you require before agreeing?
3. Compare the insurer buy-in at 1.07 billion with the alternative of keeping the pensioner liabilities. Under what circumstances is the premium over the accounting liability justified, and what happens to the residual plan's risk?
4. Assess the bond-financed contribution proposal. Is it value-neutral? Consider tax, covenants, the sponsor's credit rating, the trustees' security demands, and the competing demands of the dividend and fleet programme, and recommend a sequenced strategy.

## Key Takeaways

- For any institution with liabilities or a spending objective, the relevant risk is the risk to the surplus or funding ratio, not the volatility of assets in isolation.
- DB plans place investment, longevity and inflation risk on the sponsor; DC plans place them on members; the shift to DC moves risk rather than removing it, and fees and contribution persistence dominate DC outcomes.
- The PBO depends heavily on salary projection and the discount rate; the half-point to one-point discount-rate sensitivity of a long-duration plan is typically 5 to 10 percent of the liability.
- The funding ratio depends on the discount-rate convention: the same plan can appear 83 percent or 112 percent funded; a market-consistent rate separates the value of the promise from the risk of the assets chosen to fund it.
- Liability-driven investing reduces unrewarded interest-rate and inflation risk by matching DV01, freeing the risk budget for return-seeking assets, but it requires liquidity to meet collateral calls and removes upside from rate rises.
- A hedge ratio is a ratio of DV01s, so an underfunded plan with a percentage duration match is still unhedged in money terms.
- Asset allocation for plans is a trade-off between expected funding and tail risk; simulations make this explicit but depend on assumed correlations and premia.
- The endowment model exploits a long horizon through equities and illiquid assets, but its success depends on manager access and liquidity discipline, and smoothing spending rules protect budgets at some cost to capital in downturns.
- Sovereign wealth funds differ by purpose (stabilisation, savings, development, pension reserve); governance, spending rules and transparency matter as much as asset allocation.
- For sponsors, an after-tax pension deficit is a debt-like claim that reduces equity value and raises adjusted leverage; the options (faster funding, de-risking, closure, risk transfer) should be evaluated together with capital structure and dividend policy.

## Review Questions

1. Why does the liability or spending objective, rather than the asset volatility, define the risk of an institutional investor? Illustrate with a pension fund and an endowment.
2. Compare DB and DC plans in terms of who bears investment, longevity and inflation risk, and explain why a sponsor might close a DB plan but still have large obligations for decades.
3. Distinguish the ABO, PBO, service cost and interest cost. Why is the PBO larger than the ABO for a final-salary plan?
4. Explain why funding ratios computed with different discount rates are not comparable. What are the main arguments for and against discounting at the expected return on assets?
5. Using the Sharpe pension-put idea, explain why increasing the riskiness of plan assets can transfer value to shareholders at the expense of members or a pension guarantee fund.
6. What is DV01, and why is the hedge ratio expressed as a ratio of DV01s rather than durations? Why can an underfunded plan with matched durations still be exposed to interest-rate changes?
7. Describe the benefits and risks of using swaps for LDI, with particular attention to collateral and liquidity risk.
8. Why is the minimum-risk portfolio for a pension plan the liability-matching portfolio, and how should a plan decide how much surplus risk to take?
9. Describe the main features and the main criticisms of the endowment model. What did the 2008 crisis reveal about illiquid commitments?
10. Why do corporate lenders and rating agencies add the pension deficit to debt, and what options does a sponsor have for managing the exposure?

## Problems

1. A plan will pay 30 million at the end of each year for 20 years. Assets are 330 million. Compute the funding ratio when liabilities are discounted at (a) 4 percent and (b) 6 percent.
2. A plan has liabilities of 800 million with modified duration 12, and assets of 700 million with modified duration 6. (a) Compute the DV01 of each, and the hedge ratio. (b) Estimate the funding ratio after a 50 bp fall in rates, using linear duration approximations.
3. A 40-year-old member has 10 years of service and a salary of 50,000, growing 2.5 percent a year. The plan pays 1/60th of final salary per year of service from age 65, level for 18 years. The discount rate is 4.5 percent. Compute the projected final salary, the accrued pension and the PBO (ignore mortality and indexation).
4. A DC member earns 50,000, receives 2 percent annual raises for 30 years, and contributes 10 percent of salary at each year end. The account earns 6 percent net. The balance at retirement buys a 20-year level annuity at 5 percent. Compute the balance, annual income and replacement ratio against final-year salary.
5. An endowment's previous-year spending was 22 million, inflation is 3 percent, the opening market value is 480 million, the smoothing weight is 0.7 and the long-run spending rate is 5 percent. Compute this year's spending and its percentage of market value.
6. A plan has liability DV01 of 0.80 million and asset DV01 of 0.35 million. A receiver swap has modified duration 15. What swap notional hedges the remaining DV01? What notional would achieve a 60 percent hedge ratio?
7. A sponsor has EBITDA 120 million, net debt 360 million, pension deficit 150 million before tax, tax rate 21 percent and operating EV 1,000 million. Compute adjusted leverage with the after-tax deficit and the equity value after deducting net debt and the after-tax deficit.
8. A plan with funding ratio 0.90 has asset volatility 10 percent and liability volatility 9 percent. Compute the standard deviation of the one-year change in the funding ratio (approximate formula FR × √(σ_A² + σ_L² − 2ρσ_Aσ_L)) when ρ = 0.60 and when ρ = 0.95. Interpret.

### Answers to Selected Problems

1. Annuity factors: 13.5903 at 4 percent and 11.4699 at 6 percent. PV of liabilities: 407.71 and 344.10. Funding ratios: (a) 80.9 percent; (b) 95.9 percent.
2. (a) Liability DV01 = 800 × 12 × 0.0001 = 0.96; asset DV01 = 700 × 6 × 0.0001 = 0.42; hedge ratio = 0.42 / 0.96 = 43.75 percent. (b) Liabilities rise by about 800 × 12 × 0.005 = 48 to 848; assets rise by 700 × 6 × 0.005 = 21 to 721; funding ratio falls from 87.5 percent to 85.0 percent.
3. Final salary = 50,000 × 1.025²⁵ = 92,697. Accrued pension = 10/60 × 92,697 = 15,450. Annuity factor (18 years, 4.5 percent) = 12.160, so value at 65 = 187,874; PBO = 187,874 / 1.045²⁵ ≈ 62,509.
4. Final salary = 50,000 × 1.02²⁹ = 88,792. Balance = 491,516. Annuity factor (20 years, 5 percent) = 12.4622; income = 39,441; replacement ratio = 44.4 percent.
5. Spending = 0.7 × 22 × 1.03 + 0.3 × 0.05 × 480 = 15.862 + 7.200 = 23.06 million, which is 4.80 percent of market value.
6. Remaining DV01 = 0.45; notional = 0.45 / (15 × 0.0001) = 300 million. For a 60 percent hedge ratio, total DV01 needed is 0.48, so swap DV01 = 0.13 and notional = 86.7 million.
7. After-tax deficit = 150 × 0.79 = 118.5. Adjusted leverage = (360 + 118.5) / 120 = 3.99x (versus 3.0x reported). Equity value = 1,000 − 360 − 118.5 = 521.5 million (versus 640 before the deficit).
8. For ρ = 0.60: 0.90 × √(0.0100 + 0.0081 − 0.0108) = 0.90 × √0.0073 = 7.69 percent. For ρ = 0.95: 0.90 × √(0.0100 + 0.0081 − 0.0171) = 0.90 × √0.0010 = 2.85 percent. The higher the correlation between assets and liabilities (that is, the better the hedge), the lower the surplus volatility.
