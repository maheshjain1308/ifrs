# Chapter 24: Sustainable Finance, Governance, Fintech and the Future of Corporate Finance

## Learning Objectives

- Explain how environmental, social and governance (ESG) factors enter valuation through cash flows, discount rates and risk, and incorporate an internal carbon price into capital budgeting.
- Compare green, social and sustainability-linked bonds, quantify the greenium and step-up economics, and recognize the risks of greenwashing.
- Analyze corporate governance as a response to agency problems, including board structure, ownership, activism and takeover defenses.
- Evaluate executive compensation design, value stock options with the Black-Scholes model, and assess performance-share plans and clawbacks.
- Describe at a conceptual level how payments, fintech lending and digital assets change financing, treasury and business-model economics, and compute simple unit economics.
- Apply parity relationships to international capital budgeting, adjust for political risk, and integrate the book's themes into a strategic value framework.

## Opening Vignette

*(Illustrative scenario; the company and all figures are fictional.)*

Aldergate Industries is a $6 billion revenue manufacturer of heating and ventilation equipment, listed on a European exchange and active in thirty countries. On a single Tuesday its finance leadership faces four unrelated-looking requests.

The sustainability team wants $600 million of capex to electrify two foundries, cutting emissions by roughly 80 percent. The business case on a conventional discounted cash flow basis shows a slightly negative NPV. The treasurer proposes funding it with a green bond and says investors will pay a lower coupon. The head of investor relations warns that two large asset managers have asked for evidence that the bond's use of proceeds is genuinely incremental.

The remuneration committee chair, meanwhile, is reviewing next year's long-term incentive plan. A proxy adviser criticized last year's grants because payouts depended on earnings per share, which management could lift through buybacks, and because the plan paid out at threshold performance. She wants a plan tied to relative shareholder return and return on invested capital, with a clawback.

A fintech start-up has approached the corporate development team offering a payments platform that would embed financing in Aldergate's distributor network. The chief financial officer must decide whether to build, partner or buy, and what to do about customers who suggest paying in stablecoins.

Finally, the strategy team has proposed a plant in a country whose currency has lost half its value over a decade and whose government has restricted dividend remittances twice in the last fifteen years.

Each request is a corporate finance problem in disguise, and each touches the central question of this book: how do decisions about investment, financing and payout create or destroy value for those who own the firm and, increasingly, for the society in which it operates? This chapter reviews the tools used to answer these questions and ends with a synthesis for the finance leader of the next decade.

## 24.1 ESG, Materiality and the Valuation Channels

### 24.1.1 What ESG means for a financial decision-maker

ESG is a grouping of non-traditional factors: environmental (emissions, energy, water, biodiversity, climate transition and physical risk), social (workforce safety, labor practices, supply chain, product safety, data privacy, community) and governance (board independence, ownership rights, audit quality, pay, ethics). The label covers very different things, and for a CFO the useful question is not whether a firm is "ESG" but through which channel a particular factor affects value. There are four channels.

1. **Cash flows.** Carbon prices, energy-efficiency standards, product bans and customer preferences change revenues and costs. A firm that sells low-carbon products may gain share and pricing; one that depends on high-emission inputs faces cost increases.
2. **Risk and discount rates.** Physical climate risk (floods, heat, storms), transition risk (stranded assets) and litigation increase the variability of cash flows and may raise the systematic or idiosyncratic risk of the firm. Some investors screen out certain sectors, reducing the demand for those shares, which can raise their required return.
3. **Cost and availability of financing.** Lenders and insurers price climate exposure; sustainability-linked loans tie margins to targets; some investors have mandates that restrict holdings.
4. **Franchise value and talent.** Reputation, regulatory goodwill and employee engagement affect retention, productivity and the license to operate.

The concept of **materiality** distinguishes ESG factors that affect enterprise value (financial materiality) from those that affect society or the environment independently of financial effects. The term "double materiality" (used in some regulatory regimes) requires disclosure of both. A financial manager should focus first on financial materiality, which differs by industry: water is material to a beverage maker, data security to a payments company and workplace safety to a mining company.

### 24.1.2 What the evidence permits us to say

Empirical research on whether ESG performance leads to higher returns or lower cost of capital is mixed and sensitive to definitions, rating providers (whose scores diverge widely for the same company), sample periods and control variables. Reasonable and defensible claims are limited. Firms with serious governance and compliance failures tend to experience severe negative outcomes. Some material environmental and social issues do affect operating results over the long term. High-profile ESG ratings are only loosely correlated with each other. And in equilibrium theory, if many investors avoid certain stocks, those stocks should earn higher expected returns (a "sin stock" premium) while green stocks earn lower expected returns, even though green firms can still be good businesses. The last point is subtle and important: a lower cost of capital for green firms is the flip side of lower expected returns for green investors. It does not imply that every green project is a good investment.

### 24.1.3 Pricing carbon in capital budgeting

Many companies use an internal carbon price, a per-ton charge applied to project emissions in the NPV analysis, as a way to prepare for current and future regulation and taxes. It is a shadow price: no cash may change hands today, but the price approximates the expected cost of emissions through taxes, permits, customer pass-through or stranded-asset risk. The method is straightforward: forecast emissions each year, multiply by the forecast carbon price, treat the amount as an incremental cost and recompute NPV. Because the price path is uncertain, firms also compute break-even carbon prices and run scenarios.

**Example 24.1 – Carbon-adjusted NPV of two foundry upgrades.** Aldergate evaluates two ways of replacing a foundry's heat source. Project A (gas-fired upgrade) costs $40m, generates $9.5m of annual after-tax operating cash flow for 10 years and emits 60,000 tons of CO2 per year. Project B (electrification) costs $52m, generates $9.8m per year and emits 10,000 tons per year. The discount rate is 9 percent. The internal carbon price is $60 per ton in year 1, rising 6 percent per year. Cash flows are annual, end of year.

Step 1: Annuity factor, 10 years at 9 percent = (1 − 1.09^−10) / 0.09 = 6.4177.

Step 2: Conventional NPV. A: −40 + 9.5 × 6.4177 = −40 + 60.968 = **$20.97m**. B: −52 + 9.8 × 6.4177 = −52 + 62.893 = **$10.89m**. Without carbon, A wins by $10.1m.

Step 3: Carbon cost in year 1. A: 60,000 × $60 = $3.60m. B: 10,000 × $60 = $0.60m. Each later year grows by 6 percent.

Step 4: PV of carbon costs. For a growing annuity, PV = C1 / (r − g) × [1 − ((1 + g)/(1 + r))^n] = C1 / 0.03 × [1 − (1.06/1.09)^10]. The ratio 1.06/1.09 = 0.97248, and raised to the 10th power it is 0.7565, so the bracket is 0.2435 and the multiplier is 0.2435 / 0.03 = 8.118. A: 3.60 × 8.118 = **$29.22m**. B: 0.60 × 8.118 = **$4.87m**.

Step 5: Carbon-adjusted NPV. A = 20.97 − 29.22 = **−$8.26m**; B = 10.89 − 4.87 = **+$6.02m**.

The ranking reverses. The conventional analysis favors the gas upgrade by $10.1m; a carbon price of $60 growing 6 percent makes the electrified foundry better by $14.3m. The break-even initial carbon price at which the two NPVs equalize is approximately $60 × (10.08 / 24.35) = $25 per ton in year 1 (the difference in carbon PV, 29.22 − 4.87 = $24.35m at a $60 starting price, is linear in that price). Managers should also test the cost of electricity and the reliability of supply, since B's advantage depends on the power price assumption. The method is only as good as the carbon-price forecast; the right use is to show what carbon price makes the decision change.

**Common mistakes.** Using a carbon price only as a tie-breaker; applying it to project emissions but not to the firm's competitors, so the strategic effect is lost; and double counting if tax and permit costs are already in cash flows.

## 24.2 Sustainable Debt: Green, Social and Sustainability-Linked Instruments

### 24.2.1 Use-of-proceeds versus performance-linked structures

Sustainable debt comes in two broad structures.

**Use-of-proceeds bonds** (green, social, sustainability bonds) are ordinary debt obligations of the issuer, with proceeds earmarked for eligible projects such as renewable energy, energy efficiency, clean transport or affordable housing. Credit risk is that of the issuer, not of the project (they are not project finance). Market practice, reflected in voluntary principles administered by industry bodies, includes a framework describing eligible categories, a process for project selection, management of proceeds in a separate account or sub-portfolio, and annual reporting on allocation and, where feasible, impact. Many issuers obtain a second-party opinion or external verification, and some jurisdictions have introduced taxonomies and standards for labeled bonds.

**Sustainability-linked bonds (SLBs)** and loans have no use-of-proceeds restriction. The issuer commits to improve measurable key performance indicators (KPIs), such as reducing greenhouse gas emissions by a stated percentage, against sustainability performance targets (SPTs) by a given date. If the target is missed, the financial characteristics change, usually through a coupon step-up of 12.5 to 25 basis points. Their credibility depends on the ambition of the target relative to the issuer's baseline and peers, materiality of the KPI to the business, and the size and certainty of the penalty.

| Feature | Green bond | Sustainability-linked bond | Conventional bond |
|---|---|---|---|
| Use of proceeds | Earmarked to eligible green projects | General corporate purposes | General corporate purposes |
| Financial feature | Standard coupon (possible greenium) | Coupon step-up if KPI target missed | Standard coupon |
| Reporting | Allocation and impact reports | KPI performance verification | Financial reporting |
| Key risk to investors | Greenwashing, project quality | Weak targets; small penalty | Credit risk |
| Issuer risk | Reputational if misuse; reporting cost | Step-up cost; reputational if missed | None specific |
| Investor base | Wider (green mandates) | Wide, but some mandates exclude | Standard |

### 24.2.2 The greenium and the economics of labeling

The **greenium** is the yield advantage of a labeled bond relative to an otherwise identical conventional bond from the same issuer. Where it exists it tends to be small, often a few basis points and not stable across markets, maturities and credit qualities; demand from mandate-driven investors can compress yields, but supply is large and many studies find a small or insignificant effect. The key point for treasurers is that the benefit should be compared with the costs: external review, ongoing reporting and tracking systems, and the legal risk of misstatement. The more relevant benefits may be a broader investor base, oversubscription, lower execution risk and strategic signaling, but these are hard to quantify.

**Example 24.2 – Is a 6 basis point greenium worth the cost?** Aldergate issues a $500m 10-year green bond with an estimated greenium of 6 bp. Incremental annual reporting and verification cost is $0.12m, and a one-time external review and framework design cost is $0.15m. The after-tax discount rate for these small flows is taken as the pre-tax bond yield of 5.0 percent (a simplification; ignore tax effects).

Step 1: Annual interest saving = 500m × 0.0006 = $0.30m.

Step 2: Annuity factor, 10 years at 5 percent = 7.7217.

Step 3: PV of savings = 0.30 × 7.7217 = $2.317m.

Step 4: PV of incremental reporting = 0.12 × 7.7217 = $0.927m.

Step 5: Net value = 2.317 − 0.927 − 0.150 = **$1.24m**.

The label is worth a modest $1.2m, about 0.25 percent of the amount raised. If the greenium were zero, the net value would be −$1.08m (−0.927 − 0.150), a small cost that must be justified by wider investor demand, a lower new-issue concession or the reputational value of the program. The calculation also shows the main sensitivity: halving the greenium to 3 bp reduces savings to $1.16m and net value to +$0.08m. Because a green bond is an ordinary corporate obligation, the issuer's credit rating, not the label, still dominates pricing.

**Example 24.3 – Expected cost of a sustainability-linked step-up.** Aldergate considers a $500m 10-year SLB that pays a 4.50 percent coupon but steps up by 25 bp for years 6 to 10 if its emissions-intensity target, tested at the end of year 5, is missed. Management estimates a 40 percent chance of missing the target. The discount rate is 5 percent.

Step 1: Annual step-up cost if triggered = 500m × 0.0025 = $1.25m, paid at the end of years 6, 7, 8, 9 and 10.

Step 2: Value at year 5 of five-year annuity at 5 percent = 1.25 × 4.3295 = $5.412m.

Step 3: Discount to today: 5.412 / 1.05^5 = 5.412 / 1.27628 = $4.240m.

Step 4: Expected cost = 0.40 × 4.240 = **$1.70m**, equal to 0.34 percent of principal.

If the issuer is confident of meeting the target (probability 10 percent), the expected cost falls to $0.42m. Investors in turn consider the penalty trivial relative to the principal and may price the bond as a standard bond; critics say step-ups of 25 bp are too small to change behavior, since the cost of missing equals less than one year's savings from a more ambitious program. A credible SLB sets targets that exceed business-as-usual trends and a step-up that matters. Note the circularity: the issuer benefits from selecting an easy target, which is why external verification and benchmarking matter.

### 24.2.3 Greenwashing and the discipline of credibility

Greenwashing is the gap between claims and outcomes. For a financial manager, the risk shows up as regulatory enforcement and litigation, investor mistrust and exclusion from indices, and reputational damage. Controls include a documented framework approved by the board, auditable tracking of proceeds, independent verification, a clear and measurable KPI baseline, and alignment of the labeled financing with the strategic decarbonization plan, which should itself be credible enough to survive a skeptical read. Transition finance, funding to help high-emission businesses decarbonize, is an emerging category with high demand for credibility because it carries the greatest risk of being a label rather than a plan.

## 24.3 Corporate Governance

### 24.3.1 Governance as the management of agency conflicts

Governance is the set of mechanisms by which suppliers of capital ensure that managers act in their interests. It is needed because ownership is separated from control (Berle and Means; Jensen and Meckling), managers have private information and private benefits (empire building, perquisites, entrenchment), and contracts are incomplete. Governance exists at several levels.

- **Board of directors.** The board hires, fires and pays the CEO, approves strategy and capital allocation, and oversees risk and audit. Effectiveness depends less on formal independence than on information, expertise, time, and the willingness to dissent. Common practices include a majority of independent directors, a separate chair and CEO or a strong lead independent director, fully independent audit, compensation and nomination committees, regular executive sessions, and director refreshment. Evidence on the link between board features and performance is mixed because boards are endogenous: troubled firms change their boards.
- **Ownership structure.** Dispersed ownership creates free-riding by small holders; large blockholders can monitor but may extract private benefits at the expense of minorities. In many countries, controlling families or the state are the main agency issue, and the conflict is between controlling and minority shareholders (tunneling, related-party transactions).
- **Control enhancements.** Dual-class shares, pyramids, cross-holdings and golden shares separate voting rights from cash-flow rights. Founders may argue that they protect long-term vision; critics say they entrench management and allow control with little capital at risk. Sunset provisions, which end the dual-class structure after a period, are a compromise.
- **Market discipline.** Product market competition, the market for corporate control (takeovers), analysts, creditors and the legal system impose discipline.
- **Disclosure and audit.** Accurate financial reporting, independent audits and effective internal controls are prerequisites for any monitoring.

### 24.3.2 Shareholder rights, activism and takeover defenses

Shareholders influence firms through voting (director elections, say-on-pay, mergers), engagement with management, proposals, and, if all else fails, selling. Activist investors take a stake, publicly push for change (divestitures, capital return, board seats, leadership change) and benefit if the share price rises. Research suggests that targets of activism often show operating improvements and positive average announcement returns, although the long-run effects are debated and activists may favor short-term payouts over long-term investment.

Takeover defenses include staggered boards, poison pills (rights plans that dilute a hostile acquirer), supermajority requirements, and restrictions on written consent. These protect the board's ability to negotiate a better price but also insulate poorly performing managers. A reasonable rule: the stronger the defenses, the more important independent oversight becomes. Proxy advisers and institutional investors generally favor annual director elections and the removal of pills unless approved by shareholders; no universal best practice exists because the right level of protection depends on ownership, the strategic position of the firm and its need for patient capital.

### 24.3.3 Stakeholders and purpose

A long-running debate concerns whether firms should maximize shareholder value or balance the interests of stakeholders. The disciplined position, consistent with the rest of this book, is that long-run shareholder value cannot be created by ignoring customers, employees, suppliers and regulators, and that stakeholder choices that are costly in the short run can be justified when they preserve long-run cash flows. The danger of an unlimited multi-stakeholder mandate is that managers become unaccountable: with no single metric, almost any decision can be defended. Practical governance responses include clear articulation of purpose, board oversight of material ESG risks, linking compensation to a small number of measurable outcomes and transparent reporting of trade-offs.

## 24.4 Executive Compensation

### 24.4.1 The design problem

Compensation is a contract designed to induce effort and appropriate risk-taking when the principal cannot observe effort. Standard components are base salary, annual bonus, long-term incentives (LTIs: stock options, restricted stock units, performance shares) and benefits and retirement plans. A well-designed package has the following characteristics.

- **Pay for performance.** A material share of pay is variable and linked to measures the executive can influence.
- **Long-term orientation.** Vesting periods of three to five years, holding requirements after vesting and minimum shareholding guidelines align the executive with long-term holders.
- **Risk calibration.** Pure option plans reward volatility because option value rises with volatility; plans with leverage in the payoff encourage risk-taking beyond what shareholders want. Debt-like instruments (pensions, deferred compensation) align executives with creditors, which is relevant for banks.
- **Relative measurement.** Relative total shareholder return (TSR) against peers filters out industry and market movements that executives do not control, reducing windfall gains.
- **Clawbacks and malus.** Provisions to recover or withhold pay after misstatements or misconduct strengthen accountability.
- **Transparency and simplicity.** Complex plans with many metrics blur incentives.

Typical pitfalls include metrics that can be manipulated (EPS through buybacks, adjusted EBITDA that excludes recurring costs), payouts for mediocre results because thresholds are low, repricing of underwater options, and benchmarking against peers' median or upper quartile, which ratchets pay up over time.

### 24.4.2 Choosing metrics

| Metric | Strength | Weakness | Best used for |
|---|---|---|---|
| Earnings per share growth | Simple, observable | Manipulable via buybacks, accounting, leverage | Annual bonus with caution |
| ROIC or ROCE | Ties to value creation relative to capital | Can discourage good investments when measured on book value | Mature, capital-intensive firms |
| Relative TSR | Market-based, filters market effects | Noisy, short-term sentiment, peers selection | LTI plans, 3-year horizon |
| Free cash flow | Hard to manipulate | Can be boosted by underinvestment | Cash-generative businesses |
| Strategic or ESG KPIs | Links to long-run drivers | Measurement ambiguity, risk of box-ticking | Small weight, quantified targets |

Many firms combine two or three metrics to balance their weaknesses, for example 50 percent relative TSR, 30 percent ROIC and 20 percent a quantified emissions or safety target.

### 24.4.3 Valuing options with Black-Scholes

The grant-date fair value of stock options is estimated with an option pricing model, typically Black-Scholes, adjusted for dividends. For a European call on a stock with spot S, strike K, time T, risk-free rate r, continuous dividend yield q and volatility σ:

```
C = S·e^(−qT)·N(d1) − K·e^(−rT)·N(d2)
d1 = [ln(S/K) + (r − q + σ²/2)·T] / (σ·√T)
d2 = d1 − σ·√T
```

Executive options are long-dated, subject to vesting and forfeiture, and often exercised early, so the model overstates value if applied naively; companies reduce the expected term to reflect early exercise behavior. We nevertheless use the formula to show the economics.

**Example 24.4 – Valuing an at-the-money option grant.** A CEO is granted 200,000 options with a 5-year term, struck at the current price of $50. Volatility is 30 percent, the risk-free rate is 4 percent and the dividend yield is 1 percent.

Step 1: d1 = [ln(50/50) + (0.04 − 0.01 + 0.30²/2) × 5] / (0.30 × √5) = [0 + (0.03 + 0.045) × 5] / 0.6708 = 0.375 / 0.6708 = **0.5590**.

Step 2: d2 = 0.5590 − 0.6708 = **−0.1118**.

Step 3: N(d1) = 0.7119; N(d2) = 0.4555.

Step 4: Discount factors: e^(−0.01×5) = 0.95123; e^(−0.04×5) = 0.81873.

Step 5: C = 50 × 0.95123 × 0.7119 − 50 × 0.81873 × 0.4555 = 33.86 − 18.65 = **$15.21 per option**.

Step 6: Grant value = 200,000 × 15.21 = **$3.04m**.

An equivalent economic grant in restricted stock units would be 3.04m / 50 = 60,800 units, ignoring the dividend (RSUs receive or accrue dividends; the option does not). The key managerial insights: an at-the-money option is worth about 30 percent of the share price at these parameters, so it is a levered bet on the share price; the value rises with volatility (at σ = 40 percent it is worth more), which means options reward risk-taking and are not neutral about strategic choices such as leverage or an acquisition that raises volatility; and they pay nothing if the share price falls, so they do not protect shareholders against poor performance in a falling market for the shares but do provide upside if the entire market rises. Executives compare an option's *value to them*, which is lower than the Black-Scholes fair value because they are undiversified and cannot hedge, with the *cost to the company*.

**Example 24.5 – A relative TSR performance share plan.** The CEO receives a target grant of 40,000 performance shares vesting after three years. The payout is 0 percent below the 25th percentile of peer TSR, 50 percent at the 25th percentile, 100 percent at the median, 150 percent at the 75th percentile and 200 percent at or above the 90th; payout is interpolated linearly between points. The company finishes at the 62nd percentile and the share price at vesting is $58.

Step 1: The 62nd percentile lies between the median (100 percent) and the 75th (150 percent). Interpolation fraction = (62 − 50) / (75 − 50) = 12 / 25 = 0.48.

Step 2: Payout % = 100 + 0.48 × 50 = **124 percent**.

Step 3: Shares earned = 40,000 × 1.24 = **49,600**.

Step 4: Value at vesting = 49,600 × $58 = **$2,876,800**.

The grant-date target value (40,000 × $50 = $2.0m) rose to $2.88m because of the above-median ranking and the 16 percent share price increase. If TSR had ranked at the 40th percentile, payout would be 50 + (15/25) × 50 = 80 percent. The shape of the payout curve matters: a payout at the 25th percentile rewards below-median performance, and a steep slope between the 50th and 75th percentiles raises the incentive for improvement but also the risk of paying for luck, since a three-year TSR rank is noisy. Some committees add a cap when absolute TSR is negative.

### 24.4.4 Say-on-pay, ratios and the political context

Many jurisdictions give shareholders an advisory or binding vote on pay. CEO-to-median-worker pay ratios are disclosed in some regimes. These measures create transparency but not necessarily moderation; they have been accused of encouraging benchmarking that increases pay. A defensible committee process includes using independent consultants, tying pay to a clear strategy, testing payout under multiple scenarios (including the worst case) before approval, and explaining outcomes to shareholders in plain language.
