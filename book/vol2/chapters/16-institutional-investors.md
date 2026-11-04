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

The consequence is that standard portfolio theory (Markowitz, Volume 1, Chapter 9) must be adapted: the relevant optimisation is over **surplus** (assets minus liabilities) or the funding ratio, and the relevant "risk-free asset" is not Treasury bills but the asset that matches the liabilities.

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
