# Chapter 13: Venture Capital in Depth

## Learning Objectives

After studying this chapter you should be able to:

- Describe the venture capital fund lifecycle (fundraising, investment period, harvest, wind-down) and explain how fund structure shapes investor behavior and the founders who take the money.
- Explain why venture returns follow a power-law distribution, simulate a portfolio, and derive the implications for fund size, concentration, and reserves.
- Apply the VC method of valuation, adjust it for dilution and failure risk, and recognize why headline discount rates of 30-60% are not "required returns" in the CAPM sense.
- Calculate payoffs under non-participating, participating, and capped-participating liquidation preferences, and value preferred stock as a bundle of options using breakpoint analysis.
- Build and update a capitalization table through seed, Series A, and Series B rounds, including the option-pool shuffle, and compute the effect of full-ratchet and weighted-average anti-dilution protection.
- Evaluate venture debt (cost, warrants, covenants) and secondary transactions (pricing, discounts, tender offers) from both the company's and the investor's perspective.

## Opening Vignette

*(Illustrative company; all names and figures are fictional.)*

Maya Okafor and Dev Ranganathan founded Lumen Freight, a software company that matches under-used truck capacity with small shippers. After eighteen months of living on savings and a small angel check, they sat down in a conference room with three term sheets for a $12 million Series A.

The first, from a large, prestigious fund, offered a $48 million pre-money valuation, a 1x non-participating preferred, and a board of two investors, two founders, and one independent. The second, from a newer fund, offered $60 million pre-money but with a 1.5x participating preferred, a full-ratchet anti-dilution clause, and a redemption right after five years. The third, from a corporate venture arm of a logistics conglomerate, offered $55 million but wanted a right of first refusal on any sale of the company.

Dev wanted the $60 million. "Higher valuation means less dilution, and dilution is the whole game," he argued. Maya had spent the weekend building a spreadsheet. At an exit of $150 million, she showed, the second term sheet left the founders and employees with less money than the first. At $400 million the two were close. Only above roughly $450 million did the higher headline valuation start to help the founders, and Lumen's own plan put the most likely outcomes well below that. Worse, if the next round happened at a lower price, the full ratchet would hand the second investor a large share of the company.

"So the price per share is not the price," Dev said slowly.

"The price is the whole bundle," Maya replied. "A venture term sheet is not a number. It is a set of options, and we are the ones writing them."

This chapter explains how to read that bundle: how venture funds make money, why outcomes are so skewed, how preferred stock is built and valued, how cap tables evolve, and what other forms of capital (venture debt, secondaries) do to the equation. It builds on option pricing (Volume 1, Chapter 18) and company valuation (Volume 1, Chapter 21).

## 13.1 The Venture Capital Model: Funds, Lifecycle, and Incentives

### 13.1.1 What venture capital is and is not

Venture capital (VC) is equity (and equity-linked) financing of young, high-growth companies whose value lies mainly in future growth options rather than in current cash flows. Such companies are typically unprofitable, have few tangible assets to pledge, and face outcomes that range from total loss to extraordinary success. Debt is a poor fit because lenders cap their upside at the interest rate while still bearing downside; the Modigliani-Miller logic of Volume 1, Chapter 15 reminds us that when bankruptcy and agency costs are high and cash flows are nonexistent, equity is the only sensible instrument. Public markets are a poor fit too because disclosure, compliance, and short-term scrutiny are costly for a company still searching for its business model.

VC is therefore a specialized solution to three problems at once: *information asymmetry* (founders know far more than investors), *uncertainty* (even the founders do not know whether the product will work), and *agency* (founders can take actions that benefit themselves at investors' expense, such as burning cash on a vanity project or stalling a profitable sale). Almost every feature of venture contracting, from staged financing to board control to liquidation preferences, is a response to one of these three problems.

It helps to distinguish the stages, though the labels are conventions rather than rules:

| Stage | Typical purpose | Typical investors | Main risk |
|---|---|---|---|
| Pre-seed / seed | Build a prototype, find early users | Angels, micro-funds, accelerators | Does anyone want this? |
| Series A | Prove repeatable demand, build the core team | Early-stage VC funds | Can the model be repeated and scaled? |
| Series B / C | Scale sales, expand markets | Growth-oriented VC funds | Unit economics and execution |
| Late stage / growth | Prepare for IPO or acquisition | Growth funds, crossover investors, sovereign funds | Market conditions, exit timing |

### 13.1.2 The limited partnership structure

A venture fund is usually organized as a limited partnership with two kinds of partners. *Limited partners* (LPs) are institutions such as pension funds, endowments, foundations, sovereign wealth funds, and wealthy families. They supply nearly all the capital but have limited liability and no say in individual investments. The *general partner* (GP) is the management company that sources, selects, governs, and exits the investments. The GP typically commits a small fraction of the fund (often 1-3%) from its own pocket.

The LP does not hand over the money on day one. Instead, LPs make a *commitment* and the GP issues *capital calls* (drawdowns) as investments are made and fees are due. This matters for returns: the LP has uncalled commitments that must be kept liquid, but is credited with returns only on capital actually drawn (Chapter 14 returns to the consequences for IRR). Distributions flow back when portfolio companies are sold or go public.

### 13.1.3 The fund lifecycle

A typical venture fund lives about ten years, with extensions of one or two years common. The life divides into four phases.

1. **Fundraising (months 0-12+).** The GP markets the fund to LPs using the track record of previous funds. A first-time fund has no such record and relies on the team's personal history. Closes occur in stages (first close, final close).
2. **Investment period (years 1-5).** The GP identifies and funds new companies, usually 20-40 for a diversified early-stage fund, and holds back *reserves* for follow-on rounds in the winners. A common rule of thumb is to keep 40-60% of the fund for follow-ons, though this varies widely by strategy.
3. **Harvest (years 4-10).** Portfolio companies grow, raise further rounds, and are eventually acquired, go public, or fail. Distributions begin, usually from the early winners.
4. **Wind-down (years 10-12+).** Remaining stakes are sold, sometimes into the secondary market (Section 13.7), and the partnership is dissolved.

Because the GP raises a new fund every two to four years once the old one is substantially invested, a firm is typically managing several overlapping funds. The new fund's fundraising depends on the *marks* (reported valuations) of the old one, which creates an incentive problem we discuss in Chapter 14.

### 13.1.4 Why the structure creates specific behaviors

The structure has consequences that every founder and every investor should understand:

- **Time horizon.** A fund with a ten-year life needs an exit for each investment within roughly seven to nine years. A founder who would happily run a profitable $30 million business for 20 years is a poor fit for a fund that needs a $500 million exit to matter.
- **Return threshold.** A fund investor in a $300 million fund needs, at a minimum, to return the fund through a handful of outcomes. A $50 million sale that is wonderful for the founder may be economically irrelevant to the fund.
- **Option mentality.** The GP shares in gains (carried interest) but not in losses beyond its small commitment. This asymmetry encourages risk-taking, which is precisely what LPs want from the venture allocation, but it also encourages "swinging for the fences" in situations where a sure modest outcome would be better for founders and employees.
- **Staged commitment.** Money is delivered in rounds tied to milestones. Each round is a real option for the investor to continue or stop (see Volume 1, Chapter 8 on real options), and also a moment of renegotiation power.

**Common mistake.** Treating all investors as interchangeable "money." Two investors who pay the same price per share can have very different fund sizes, ownership targets, reserve policies, and timelines, and therefore very different preferences about whether to accept an acquisition offer in year four.

### 13.1.5 What GPs actually get paid

LPs typically pay an annual management fee (commonly around 2% of commitments during the investment period, stepping down afterward) and *carried interest* (commonly 20% of profits after returning capital, sometimes with a preferred return). In venture, carry is frequently paid without a hurdle rate on a whole-fund basis, since expected returns are skewed enough that a hurdle rarely binds. The details, and their effect on LP net returns, are the subject of Chapter 14. For now, notice that the management fee supports the firm regardless of performance, whereas carry is a call option on the fund's profits, with strike equal to the capital contributed.

## 13.2 Power-Law Returns and Portfolio Construction

### 13.2.1 The shape of venture outcomes

If you invest in a diversified portfolio of large listed stocks, returns are approximately symmetric and bounded below by -100%. Venture outcomes are different. A seed-stage company is a bet on a distribution with a very large mass at or near zero and a thin right tail of enormous outcomes. Empirically, in most venture portfolios a small fraction of companies generate the large majority of total value. A distribution of this kind is often described as a *power law*: the probability of an outcome of size x declines roughly as x raised to a negative power, so extremely large values are far more likely than a normal or lognormal curve with the same mean would suggest.

You do not need the technical definition to see the practical point. Define the **multiple of invested capital (MOIC)** for company *i* as exit proceeds attributable to the fund divided by dollars invested:

```
MOIC_i = Proceeds_i / Invested_i
Fund MOIC = Σ Proceeds_i / Σ Invested_i
```

If a fund invests equal amounts in 25 companies, the fund MOIC is the simple average of the 25 company MOICs. The average of a skewed distribution is dominated by a few terms, and, crucially, the *typical* fund draws a sample of the distribution that may not contain any of the rare extreme draws at all.

### 13.2.2 A simulated portfolio

**Example 13.1 – Simulating a power-law portfolio.** Suppose an illustrative early-stage fund invests an equal amount in each of *n* companies. For each company, the gross multiple (proceeds divided by cost) is drawn independently from this distribution:

| Outcome bucket | Multiple on cost | Probability | Contribution to expected multiple | Share of expected value |
|---|---|---|---|---|
| Write-off | 0.0x | 45.0% | 0.000 | 0.0% |
| Partial loss | 0.5x | 30.0% | 0.150 | 9.0% |
| Modest | 2x | 15.0% | 0.300 | 18.0% |
| Good | 6x | 7.0% | 0.420 | 25.1% |
| Great | 20x | 2.5% | 0.500 | 29.9% |
| Outlier | 60x | 0.5% | 0.300 | 18.0% |
| **Expected multiple per company** | | **100%** | **1.670** | **100%** |

*Step 1: expected multiple per company.* 0.45(0) + 0.30(0.5) + 0.15(2) + 0.07(6) + 0.025(20) + 0.005(60) = 0 + 0.15 + 0.30 + 0.42 + 0.50 + 0.30 = **1.67x**.

*Step 2: what drives it.* Three percent of companies (the 20x and 60x buckets) supply 0.50 + 0.30 = 0.80 of the 1.67, or **47.9%** of the expected value. Three-quarters of companies (the write-off and partial-loss buckets) return less than cost.

*Step 3: simulate funds.* Using a Monte Carlo simulation (a fixed random seed, 100,000 simulated funds for each portfolio size), we obtain:

| Companies in fund | 10th percentile fund MOIC | Median | 90th percentile | Mean | P(MOIC < 1.0x) | P(MOIC ≥ 3.0x) |
|---|---|---|---|---|---|---|
| 10 | 0.35x | 1.10x | 3.30x | 1.67x | 44.7% | 13.4% |
| 25 | 0.64x | 1.40x | 3.22x | 1.67x | 30.2% | 12.6% |
| 50 | 0.85x | 1.51x | 2.70x | 1.67x | 17.3% | 6.0% |
| 100 | 1.05x | 1.60x | 2.40x | 1.67x | 7.6% | 1.8% |

*Step 4: read the table.* The mean is 1.67x for every portfolio size, as it must be: diversification does not change expected return. What changes is the spread. A 10-company fund has a 45% chance of failing to return capital even though the underlying strategy has a 1.67x expected multiple. The *median* outcome is below the mean in every row, and for small portfolios it is well below. A 100-company fund has almost no chance of a spectacular result, because the extreme tail is averaged out.

*Step 5: the lottery-ticket probability.* The chance that a given company is a 20x-or-better outcome is 3.0%. In a 25-company fund, the probability of holding **no** such company is 0.97^25 = **46.7%**. Nearly half of such funds will miss the right tail entirely, and those funds will likely return less than about 1.0-1.2x.

*Conclusion.* The strategy has a decent expected return, a mediocre median, and a severe dependence on whether the GP's sample happens to contain an outlier. The simulation assumes independence and that the GP cannot predict winners; skill is the claim that a particular GP can shift these probabilities, for instance by raising the chance of a 20x outcome from 3.0% to 4.0%. That one-point shift raises the expected multiple by roughly 0.2x, which is the whole difference between a good and a mediocre fund. ∎

### 13.2.3 Implications of the power law

Several practical rules follow from the shape of the distribution.

**(1) "Return the fund" math.** A fund of size F that wants a 3x gross multiple must generate proceeds of 3F. If the fund owns 10% of a company at exit, the exit equity value needed for that single position to return the entire fund is F / 0.10 = 10F. A $300 million fund with 10% ownership at exit needs a $3 billion outcome from one company just to give investors their money back. This arithmetic explains why large funds pass on "good" $200 million exits, why ownership targets exist (a fund wants 10-20% at entry so that dilution still leaves a meaningful stake), and why a fund's size constrains what it can profitably do.

**(2) Concentration versus diversification.** Standard portfolio theory (Volume 1, Chapter 9) says to diversify idiosyncratic risk. In venture the right tail is the *source* of return, so diversification beyond a point sacrifices the very thing that makes the strategy work. The table in Example 13.1 shows the tradeoff: diversifying from 25 to 100 companies cuts the failure probability from 30% to under 8% but also cuts the chance of a 3x fund from 12.6% to 1.8%. The economically relevant question for the GP is how many "shots" are needed so that, given its sourcing and selection skill, at least a few land in the right tail.

**(3) Reserves.** Because winners become identifiable only after a few rounds, funds hold reserves to double down. The value of reserves is the value of an option to buy more of companies that have revealed themselves as winners at a price that still leaves attractive returns. But the follow-on price is higher, so the follow-on return is lower than the initial return; funds that over-reserve to mediocre companies, or under-reserve to the best, both lose.

**(4) Fees bite harder on small outcomes.** If the median fund returns about 1.4x gross, fees and carry consume a large fraction of the profit (Chapter 14 quantifies this). That is why LPs focus on top-quartile managers: the dispersion between top and bottom quartile VC funds is far wider than in most other asset classes, so manager selection matters more than asset-class allocation.

**(5) Founders' view.** A founder should understand that the investor's rational behavior is to *encourage* risk. Rejecting a $60 million acquisition offer in order to try for $600 million makes sense to a fund holding 10% of an otherwise-valuable portfolio of 25 companies; it may make less sense to a founder who owns 20% and has no other portfolio.

**Common mistake.** Judging a venture fund by its failures. In a power-law world, a fund with half its companies returning zero can be spectacularly successful; and a fund with a near-perfect "hit rate" of modest 2x exits can be a failure because it has no right tail.

## 13.3 Valuing a Startup: The VC Method and Its Limits

### 13.3.1 Why standard DCF struggles

Volume 1, Chapter 21 valued enterprises by forecasting free cash flows and discounting at WACC. For a startup, near-term free cash flows are negative, terminal value is almost all of the value, the growth path is unknowable, and the beta needed for CAPM does not exist for a company with no traded equity and no stable business. A DCF can be built, but its output is a function of assumptions the analyst cannot verify. Practitioners therefore use more transparent frameworks, of which the best known is the *venture capital method*, usually attributed in its modern form to William Sahlman and colleagues at Harvard Business School.

### 13.3.2 The VC method step by step

The method works backward from an estimated exit:

1. Forecast the company's value (enterprise or equity) at the exit date T, typically using a revenue or earnings multiple of comparable companies.
2. Choose a *target rate of return* r and compute the required multiple on investment: (1 + r)^T.
3. Compute the **post-money valuation today** that would deliver that multiple: PostMoney = ExitValue / (1 + r)^T, ignoring dilution.
4. Compute the required **ownership at exit**: Own_exit = Investment × (1 + r)^T / ExitValue.
5. Adjust for future dilution: if the investor will retain a fraction *k* of its stake after subsequent financings and option grants, the required ownership *today* is Own_today = Own_exit / k.
6. The *pre-money valuation* is the post-money minus the investment.

Recall the definitions that matter throughout this chapter:

```
Post-money = Pre-money + New investment
Investor ownership (immediately after) = Investment / Post-money
Price per share = Pre-money / Fully diluted shares outstanding before the round
```

where "fully diluted" counts all shares, options (granted and ungranted pool), warrants, and convertible securities treated as converted.

### 13.3.3 A worked example

**Example 13.2 – The VC method with dilution.** An investor considers a $15 million Series A in a software company. The investor's base case: in five years the company has revenue of $120 million, and a comparable-company multiple of 5.0x revenue gives an exit value of $600 million. The fund's target return is 40% per year. The investor expects to retain 70% of its ownership after future rounds and option-pool refreshes.

*Step 1: exit value.* 120 × 5.0 = **$600 million**.

*Step 2: required multiple.* (1.40)^5 = **5.378x**.

*Step 3: required value of the stake at exit.* $15M × 5.378 = **$80.67 million**.

*Step 4: required ownership at exit.* 80.67 / 600 = **13.45%**.

*Step 5: adjust for dilution.* Own_today = 13.45% / 0.70 = **19.21%**.

*Step 6: valuations.* Post-money = 15 / 0.1921 = **$78.09 million**; pre-money = 78.09 − 15 = **$63.09 million**.

*Comparison with the no-dilution answer.* Ignoring dilution, Post-money = 600 / 5.378 = $111.56 million and pre-money = $96.56 million. The dilution adjustment lowers the supportable pre-money by about **$33.5 million (35%)**. A founder who ignores future dilution will systematically overestimate what a disciplined investor can pay.

*Conclusion.* Under these assumptions the investor can afford a pre-money of about $63 million, not $97 million. The negotiation will be between roughly these bounds, with the founder arguing for higher exit values or lower retention and the investor arguing the opposite. ∎

### 13.3.4 What the 40% really means

A 40% target return is far above any CAPM-style cost of capital for a company, even with a high beta. Does this mean venture investors are earning extraordinary risk-adjusted returns, or that they are miscalibrated? Neither, usually. The high target is a rule-of-thumb *correction for three things*:

1. **Survival bias in the forecast.** The base-case exit of $600 million is the outcome conditional on success; the unconditional expected value is lower. The target return partly compensates for the probability that the company fails.
2. **Illiquidity and effort.** The investor locks up capital for years and spends significant time on board and portfolio support.
3. **Optimism in management projections.** Founders' forecasts are typically optimistic, and discounting at a high rate is a crude haircut.

The method is more defensible if these effects are separated. A scenario-based approach does so explicitly. Continue the previous example with four scenarios for the exit value in year 5:

| Scenario | Probability | Exit value ($M) | Probability × value ($M) |
|---|---|---|---|
| Breakout | 15% | 900 | 135.0 |
| Solid success | 25% | 400 | 100.0 |
| Modest sale | 20% | 100 | 20.0 |
| Failure | 40% | 0 | 0.0 |
| **Expected exit value** | **100%** | | **255.0** |

The expected exit value is **$255 million**, not $600 million. Discount at a more moderate rate reflecting risk and illiquidity, say 25%, with the same 70% retention:

```
Value of 100% of company, post-money = 255 × 0.70 / (1.25)^5
                                      = 178.5 / 3.0518
                                      = $58.5 million
```

So the scenario approach supports a **post-money of about $58.5 million** (pre-money about $43.5 million), considerably lower than the $78.1 million from the single-scenario method at 40%. The gap shows that the "40%" in the simple method was not conservative enough here: the base case of $600 million was a 15%-probability-style outcome rather than the mean, and the 40% hurdle only partly compensated. Different assumptions can move the answer in either direction, which is exactly the point: the method is a framework for organizing disagreement, not a source of precise values.

**Managerial implications.** Founders should come to a negotiation with their own scenario table. Investors respond more to credible downside analysis than to a hockey stick. The valuation conversation is also a conversation about dilution, so the founder should model the entire future financing path (Section 13.5), not just the current round.

**Common mistakes.** (i) Treating the target return as a cost of capital. (ii) Forgetting that the exit multiple itself is uncertain and cyclical: a company worth 5x revenue in a hot market may be worth 2x in a cold one. (iii) Applying the retention factor to the wrong base: retention should reflect *expected* future rounds, which are themselves correlated with success (successful companies raise at higher prices and dilute less).

## 13.4 Preferred Stock: A Bundle of Options

### 13.4.1 Why venture investors buy preferred, not common

Founders and employees hold *common stock*. Venture investors almost always buy *convertible preferred stock*, a security that gives them (a) a senior claim on proceeds up to some amount, and (b) the right to convert into common if that is worth more. The rationale is the combination of problems from Section 13.1: preferred protects investors in the downside, where most outcomes live, while retaining the upside through conversion. It also provides a natural valuation wedge: *the price per share that the investor pays is the price of the preferred, which is worth more than the common held by founders*. When a startup announces a "$100 million valuation," that figure is the preferred price multiplied by all shares, including common. The common stock is worth less than the headline; we quantify how much in Section 13.4.4.

The key economic terms are:

- **Liquidation preference multiple** (1x, 1.5x, 2x...): the amount per share paid before common receives anything, in a liquidation or sale.
- **Participation:** whether, after receiving the preference, the preferred also shares in the remainder as if converted ("participating"), or must choose between the preference and conversion ("non-participating").
- **Participation cap:** a limit on total proceeds under participation, often a multiple of the original investment (for example 3x), above which the holder converts to common.
- **Seniority:** *standard* (later series is paid before earlier series), *pari passu* (all series share pro rata in proportion to their preferences), or occasionally *stacked* in some other order.
- **Dividends:** cumulative or non-cumulative accrual that increases the preference over time, or dividends payable only if declared.
- **Redemption rights:** the right to require the company to buy back the shares after a stated period; seldom exercised, but a source of leverage.

### 13.4.2 Liquidation preference mathematics

Define for a single series of preferred: investment I, as-converted ownership s (the fraction of fully diluted shares the preferred would own if converted), and exit equity proceeds X after debt and costs. The payoffs to the preferred holder are:

```
Non-participating, multiple m:   P(X) = max( min(X, m·I), s·X )
Participating (uncapped):        P(X) = min(X, m·I) + s·max(X − m·I, 0)
Participating, capped at C:      P(X) = max( min( min(X, m·I) + s·max(X − m·I, 0), C ), s·X )
```

The common stockholders receive X − P(X). Notice the structure: the non-participating preferred is a debt-like claim of m·I plus a conversion option; the participating preferred keeps the debt-like claim *and* takes its pro-rata share of what is left, so it never needs to convert unless a cap binds.

**Example 13.3 – One investment, three preference structures.** A venture fund invests I = $10 million for s = 25% of a company (post-money $40 million). The common stockholders (founders, employees) hold the remaining 75%. The multiple is m = 1. Compare three structures at exit equity values X from $5 million to $200 million: (A) 1x non-participating; (B) 1x participating, uncapped; (C) 1x participating with a 3x cap ($30 million total).

*Step 1: breakpoints.*

- (A) The investor converts when s·X > I, i.e. 0.25X > 10, so X > **$40 million**.
- (B) No conversion is ever optimal; the investor always receives $10 million plus 25% of the excess.
- (C) The participating payoff reaches the cap when 10 + 0.25(X − 10) = 30, i.e. 0.25(X − 10) = 20, X = **$90 million**. Above $90 million the investor stays at $30 million until conversion yields more: 0.25X > 30, X > **$120 million**.

*Step 2: payoffs.*

| Exit value X ($M) | A: investor | A: common | B: investor | B: common | C: investor | C: common |
|---|---|---|---|---|---|---|
| 5 | 5.0 | 0.0 | 5.0 | 0.0 | 5.0 | 0.0 |
| 10 | 10.0 | 0.0 | 10.0 | 0.0 | 10.0 | 0.0 |
| 20 | 10.0 | 10.0 | 12.5 | 7.5 | 12.5 | 7.5 |
| 40 | 10.0 | 30.0 | 17.5 | 22.5 | 17.5 | 22.5 |
| 60 | 15.0 | 45.0 | 22.5 | 37.5 | 22.5 | 37.5 |
| 100 | 25.0 | 75.0 | 32.5 | 67.5 | 30.0 | 70.0 |
| 120 | 30.0 | 90.0 | 37.5 | 82.5 | 30.0 | 90.0 |
| 200 | 50.0 | 150.0 | 57.5 | 142.5 | 50.0 | 150.0 |

*Step 3: sample calculation, X = $60 million.* (A): 0.25 × 60 = 15 > 10, so converts: investor $15.0M, common $45.0M. (B): 10 + 0.25(60 − 10) = 10 + 12.5 = $22.5M; common 60 − 22.5 = $37.5M. (C): 22.5 is below the cap of 30 and above 0.25 × 60 = 15, so $22.5M.

*Step 4: cost of participation to the common.* At X = $100 million the common loses $7.5 million under (B) relative to (A), exactly 0.75 × $10 million: participation transfers to the investor the preference amount times the common's share. This is a constant transfer for all X above the conversion point, which is why participation is "expensive" at every exit size. At X = $200 million the difference is still $7.5 million (142.5 vs 150).

*Conclusion.* The preference matters most at *moderate* exits, where most real-world outcomes cluster. A cap on participation (C) removes the extra transfer at high values: at X ≥ $120 million, (C) and (A) are identical. A founder should read a "1x participating" term sheet as an extra $7.5 million tax on exit in this deal, however attractive the headline valuation. ∎

### 13.4.3 Stacked preferences and the multi-round problem

With multiple rounds, seniority and the aggregate preference stack matter. Suppose total preferences across all series equal $60 million. For exits below $60 million the common receives nothing under *any* structure, and the order of payment between series determines who bears the loss. Under *standard seniority* the latest investors are repaid first, which protects the newest, highest-priced money; under *pari passu* all series share losses proportionally. Founders typically prefer pari passu because it reduces the incentive of late investors to demand a sale at a moderately high price that pays their own preference but wipes out the earlier holders and common. This is the central conflict: with a large preference stack, different classes want different exit thresholds, and the *effective* alignment among shareholders is lower than the cap table percentages suggest.

A helpful diagnostic is to build an *exit waterfall chart*: for each exit value from zero to a high upper bound, list who gets what. The kinks in the chart (the breakpoints, such as $40 million and $90-120 million in Example 13.3) are the values at which incentives change. Management teams should know these breakpoints cold, because they determine which acquisition offers are worth taking from whose point of view.

**Management carve-outs.** In a sale below the preference stack, common stockholders, including the executives who must run the transition, may receive nothing, creating an incentive to sabotage or abandon a deal. A *carve-out plan* reserves a share of proceeds (often 5-15%) for management and employees before the preferred is paid. It is a classic fix for misaligned incentives.

### 13.4.4 Valuing preferred and common with option-pricing

The liquidation payoffs are piecewise-linear functions of firm equity value X, which is the signature of an option. Following Black-Scholes (Volume 1, Chapter 18) and, in practice, the *option pricing method* (OPM) used in 409A and purchase-price-allocation valuations, we can value each class by treating each as a combination of call options on total equity value, where the strike prices are the *breakpoints* at which payoff slopes change.

Take Example 13.3, structure (A). The payoffs are:

- Preferred: min(X, 10) for X ≤ 40, then 0.25X above 40. Slope 1 on [0, 10], slope 0 on [10, 40], slope 0.25 beyond 40.
- Common: 0 on [0, 10], slope 1 on [10, 40], slope 0.75 beyond 40.

Writing C(K) for the value of a European call on total equity with strike K:

```
Preferred = [C(0) − C(10)] + 0.25 · C(40)
Common    = C(10) − 0.25 · C(40)
```

The first bracket is a dollar-for-dollar claim on the first $10 million (a long position in the underlying and a short call at 10); the second term is the conversion option, giving the preferred 25% of the value above $40 million.

**Example 13.4 – OPM valuation of preferred versus common.** Equity value today S = $40 million, which is the post-money implied by the investor's price. Assume the exit horizon T = 4 years, a risk-free rate r = 4%, and volatility σ = 70% (typical of an early-stage company). Use the Black-Scholes call formula without dividends:

```
C(K) = S·N(d1) − K·e^(−rT)·N(d2)
d1 = [ln(S/K) + (r + σ²/2)·T] / (σ√T),  d2 = d1 − σ√T
```

*Step 1: C(0)* = S = **$40.000M**.

*Step 2: C(10).* ln(40/10) = 1.3863; (r + σ²/2)T = (0.04 + 0.245) × 4 = 1.14; σ√T = 0.70 × 2 = 1.40. d1 = (1.3863 + 1.14)/1.40 = 1.8045; d2 = 0.4045. N(d1) = 0.9644, N(d2) = 0.6571. C(10) = 40(0.9644) − 10 e^(−0.16)(0.6571) = 38.58 − 10(0.8521)(0.6571) = 38.58 − 5.60 = **$32.98M**.

*Step 3: C(40).* ln(1) = 0; d1 = 1.14/1.40 = 0.8143; d2 = −0.5857. N(d1) = 0.7923, N(d2) = 0.2790. C(40) = 40(0.7923) − 40(0.8521)(0.2790) = 31.69 − 9.51 = **$22.18M**.

*Step 4: values.*

- Preferred = (40.00 − 32.98) + 0.25(22.18) = 7.02 + 5.55 = **$12.57M**, or **31.4%** of equity value.
- Common = 32.98 − 0.25(22.18) = 32.98 − 5.55 = **$27.43M**, or **68.6%** of equity value.

*Step 5: per-share comparison.* The preferred represents 25% of the shares but has value of 31.4% of equity. The common is 75% of the shares and is worth 68.6%. Value per 1% of shares: preferred 12.57/25 = $0.503M; common 27.43/75 = $0.366M. The ratio is **0.728**: each common share is worth about **73%** of a preferred share, a 27% *discount*, even though the two classes have the same voting and cash-flow rights above the $40 million breakpoint.

*Step 6: sensitivity to volatility.* Repeating the calculation:

| σ | Preferred value ($M) | Common/preferred per-share ratio |
|---|---|---|
| 40% | 12.05 | 0.773 |
| 70% | 12.57 | 0.728 |
| 100% | 12.10 | 0.769 |

*Conclusion.* The preference gives the preferred roughly $2.6 million of extra value relative to its 25% pro-rata share of $40 million, paid for by the common. The value is not monotonic in volatility: preferred holders are short a call at 10 (which hurts them when volatility rises) and long a call at 40 (which helps them). This is an important lesson: the headline "post-money valuation" overstates the value of the founders' stock, and the discount depends on the capital structure rather than on any judgment about the company. In practice this is why a company's 409A common valuation, used to set option strike prices, comes in well below the preferred round price. ∎

**Common mistakes.** (i) Equating the preferred price with the common price when valuing employee stock options. (ii) Ignoring that option-based values are sensitive to the assumed time to exit and volatility, both of which are judgments. (iii) Believing a higher valuation always benefits founders: an inflated price paired with aggressive terms can reduce what the common receives at plausible exit values.

### 13.4.5 Control and governance terms

Economic terms are only half of the bundle. Investors also negotiate control rights that function as additional options:

- **Board composition.** The seat count and who chooses the independent director. A board majority controls hiring and firing of the CEO, the budget, and the decision to sell.
- **Protective provisions (veto rights).** Investors must approve certain actions: issuing senior securities, selling the company, changing the charter, taking on debt, changing the board size. A veto over a sale is a particularly powerful option: it can hold up an acquisition until the investor's preference is satisfied.
- **Drag-along rights** require minority holders to approve a sale that the board and a required majority approve. **Tag-along** (co-sale) rights allow investors to sell alongside a founder who is selling stock.
- **Pro rata (pre-emptive) rights** let existing investors buy their proportional share of future rounds, preserving ownership and giving them a free option to follow winners.
- **Information rights, registration rights, and founder vesting.** Founder shares usually vest over four years with a one-year cliff, so that a founder who leaves early does not walk away with a large unvested stake.
- **Pay-to-play provisions.** Investors who do not participate in a down round lose some preferred rights (anti-dilution protection or conversion into common). This protects the company from passive investors who benefit from protective terms without providing capital.

**Managerial implication.** Negotiate in order of *economic impact at plausible exit values*, not in order of how scary the legal language sounds. A full-ratchet provision might never be triggered; a 1.5x participating preference will be triggered in almost every outcome that matters.

## 13.5 Cap Table Modeling and Anti-Dilution

### 13.5.1 The capitalization table

A *capitalization table* ("cap table") lists every holder of equity or equity-linked securities, the number of shares or options held, and the percentage of the fully diluted company each represents. It is the central bookkeeping device of venture finance and the first thing a diligent investor will check. Errors in cap tables, such as unrecorded option grants or convertibles that convert on unexpected terms, are among the most common causes of closing delays and post-closing disputes.

Four modeling points deserve emphasis.

**(1) Fully diluted shares include the pool.** The *option pool* is a block of shares reserved for current and future employees. In pricing, investors count the *entire* pool (granted and ungranted) in the fully diluted share count, because they assume it will be issued.

**(2) The option-pool shuffle.** Investors commonly insist that the pool be sized to cover hiring for the next 12-24 months and that any top-up be created *before* the round, i.e. included in the pre-money. This is called the "option-pool shuffle" or "pre-money pool". It lowers the *effective* pre-money valuation to the existing holders because the new pool shares are counted in the pre-money share count but belong to future hires, not to the existing holders.

**(3) Pre-money versus post-money mechanics.** Price per share = Pre-money / pre-round fully diluted shares (including any top-up). New shares = Investment / Price. Post-round ownership = new shares / total post-round shares = Investment / Post-money.

**(4) Convertible instruments.** Early funding often comes via *convertible notes* (debt that converts into equity at the next priced round at a discount or cap, plus interest) or *SAFEs* (simple agreements for future equity, which convert without interest or maturity). Each includes a *valuation cap* and/or *discount*. In a post-money SAFE, for example, an investment of $500,000 with a $5 million post-money cap converts into 10% of the company *before* the new round's shares and before the new option pool top-up; the conversion price is the lower of the cap price and the discounted round price. The practical lesson: the dilution from convertibles is not apparent until the priced round, so model them before they surprise you.

### 13.5.2 A three-round cap table

**Example 13.5 – From seed to Series B.** Two founders hold 8,000,000 shares of common stock. We model three financings.

*Seed.* A seed investor puts in $1.0 million at a $4.0 million pre-money (so post-money is $5.0 million and the investor owns $1.0M / $5.0M = **20%**). The round also creates an option pool equal to **10%** of the post-money fully diluted shares. The founders therefore own 100% − 20% − 10% = **70%**.

*Step 1: total seed-round shares.* 8,000,000 / 0.70 = **11,428,571** shares. Seed investor: 0.20 × 11,428,571 = **2,285,714**; pool: 0.10 × 11,428,571 = **1,142,857**. Price per share = $1,000,000 / 2,285,714 = **$0.4375**.

*Series A.* $8.0 million invested at a $24.0 million pre-money; post-money $32.0 million; Series A investor owns 8/32 = **25%**. The investor requires the pool be topped up to **10% of post-money** fully diluted shares and that the top-up be included in the pre-money.

*Step 2: total post-A shares.* The founders and seed investor hold 8,000,000 + 2,285,714 = 10,285,714 shares, which must equal 100% − 25% − 10% = 65% of the post-A total. Total = 10,285,714 / 0.65 = **15,824,176** shares. Series A shares = 0.25 × 15,824,176 = **3,956,044**; total pool = 0.10 × 15,824,176 = **1,582,418**, an increase of 1,582,418 − 1,142,857 = **439,561** new pool shares.

*Step 3: price.* $8,000,000 / 3,956,044 = **$2.0222** per share. Check: pre-round FD shares = 15,824,176 − 3,956,044 = 11,868,132; × $2.0222 = $24.0 million. ✓

*Step 4: effect of the pool shuffle.* Excluding the new pool shares, the existing holders' shares (founders, seed, and the original pool) number 11,428,571, valued at $2.0222 each = **$23.11 million**. The headline $24.0 million pre-money is effectively **$23.11 million** to existing holders: the pool top-up costs them 439,561 × $2.0222 = **$0.89 million** of headline value (3.7%).

*Series B.* $20.0 million at an $80.0 million pre-money; post-money $100.0 million; Series B owns **20%**. The pool is not topped up.

*Step 5: total post-B shares.* Pre-B shares of 15,824,176 represent 80% of the post-B total, so total = 15,824,176 / 0.80 = **19,780,220**. Series B shares = 0.20 × 19,780,220 = **3,956,044**; price = $20,000,000 / 3,956,044 = **$5.0556**.

| Holder | After seed: shares | % | After Series A: shares | % | After Series B: shares | % |
|---|---|---|---|---|---|---|
| Founders | 8,000,000 | 70.0% | 8,000,000 | 50.6% | 8,000,000 | 40.4% |
| Seed investor | 2,285,714 | 20.0% | 2,285,714 | 14.4% | 2,285,714 | 11.6% |
| Series A | | | 3,956,044 | 25.0% | 3,956,044 | 20.0% |
| Series B | | | | | 3,956,044 | 20.0% |
| Option pool | 1,142,857 | 10.0% | 1,582,418 | 10.0% | 1,582,418 | 8.0% |
| **Total** | **11,428,571** | **100%** | **15,824,176** | **100%** | **19,780,220** | **100%** |
| Price per share | $0.4375 | | $2.0222 | | $5.0556 | |

*Step 6: values and returns.* At the Series B post-money of $100 million, the founders' stake is 40.44% × $100M = **$40.4 million**; the seed investor's stake is 11.56% × $100M = **$11.6 million**, a **11.6x** paper multiple on $1.0 million. The share price has risen from $0.4375 to $5.0556, a factor of 11.56, matching the seed multiple.

*Conclusion.* The founders sold no shares yet went from 70% to 40% ownership. That is not necessarily bad: the value of their stake rose in this scenario from $3.5 million ($5.0M post × 70%) to $40.4 million. Dilution matters in relation to the price at which it occurs. The cap table also reveals that the pool, which had to be topped up at Series A, was effectively paid for by the founders and seed investor, and that its size drifts downward as later rounds dilute it. ∎

### 13.5.3 Anti-dilution protection

Because preferred is priced at a given valuation, investors worry about *down rounds*: a later financing at a lower price per share than they paid. **Anti-dilution provisions** adjust the conversion price of earlier preferred downward when new shares are sold below it, so that the earlier investors convert into more common shares. There are three standard forms:

1. **Full ratchet.** The conversion price drops to the new, lower issue price, regardless of how many shares are issued at that price. Harsh: even a tiny down-round issuance resets the entire series.
2. **Broad-based weighted average.** The new conversion price is a weighted average of the old price and the new price, with weights reflecting the amount of new money relative to all outstanding shares (including options and convertibles):

```
CP2 = CP1 × (A + B) / (A + C)
```

   where CP1 is the old conversion price; A is the fully diluted shares outstanding before the issue ("broad-based" counts options, warrants, and pool); B is the number of shares that the new money would have bought at CP1 (= new money / CP1); and C is the number of new shares actually issued.
3. **Narrow-based weighted average.** The same formula but A counts only outstanding preferred and common, excluding options and the pool, which produces a larger adjustment.

The adjustment is a transfer, not a creation of value: shares issued to the protected investor reduce the percentages of everyone else, *including the new investor* unless the new investor re-prices to account for it. In practice, new investors insist on a price that reflects post-adjustment dilution, which makes the real cost fall on founders, employees, and unprotected holders.

**Example 13.6 – Full ratchet versus weighted average.** A company's Series A investors bought 4,000,000 preferred shares at CP1 = **$2.00** (an $8.0 million investment). There are 12,000,000 other fully diluted shares (founders, seed, and the pool), so A = 16,000,000. A new Series B invests **$5.0 million at $1.00** per share, issuing C = 5,000,000 new shares: a 50% down round.

*Case 1: no protection.* Series A converts 1:1 into 4,000,000 common. Post-round total = 12,000,000 + 4,000,000 + 5,000,000 = 21,000,000. Series A owns 19.05%; Series B 23.81%; other holders 57.14%.

*Case 2: full ratchet.* CP drops to $1.00. Series A converts into $8,000,000 / $1.00 = **8,000,000** shares. Total = 12,000,000 + 8,000,000 + 5,000,000 = 25,000,000. Series A owns **32.0%**; Series B 20.0%; others **48.0%**.

*Case 3: broad-based weighted average.* B = $5,000,000 / $2.00 = 2,500,000. CP2 = 2.00 × (16,000,000 + 2,500,000) / (16,000,000 + 5,000,000) = 2.00 × 18,500,000 / 21,000,000 = **$1.7619**. Series A converts into $8,000,000 / 1.7619 = **4,540,541** shares. Total = 12,000,000 + 4,540,541 + 5,000,000 = 21,540,541. Series A owns **21.08%**; Series B 23.21%; others **55.71%**.

*Case 4: narrow-based weighted average*, with A counting only 14,000,000 shares (excluding a 2,000,000-share pool): CP2 = 2.00 × (14,000,000 + 2,500,000) / (14,000,000 + 5,000,000) = **$1.7368**; Series A converts into 4,606,061 shares and owns **21.32%**.

| | Series A converts into | Series A % | Series B % | Other holders % | Founders' % (8M shares) |
|---|---|---|---|---|---|
| No protection | 4,000,000 | 19.05% | 23.81% | 57.14% | 38.10% |
| Broad-based WA | 4,540,541 | 21.08% | 23.21% | 55.71% | 37.14% |
| Narrow-based WA | 4,606,061 | 21.32% | 23.14% | 55.54% | 37.04% |
| Full ratchet | 8,000,000 | 32.00% | 20.00% | 48.00% | 32.00% |

*Conclusion.* The weighted-average clauses transfer about 2 points of ownership to Series A (21.1% versus 19.0%), and the full ratchet transfers about 13 points. Founders with 8,000,000 shares fall from 38.1% to 37.1% under the broad-based formula and to 32.0% under full ratchet, a difference of about 5 points, equivalent to roughly 14% of their stake. Note too that Series B's own stake drops from 23.8% to 20.0% under the ratchet; a rational Series B would demand a lower price or more shares to compensate, making the real cost even larger. Full ratchets are rare in healthy markets and become more common when capital is scarce. ∎

**Common mistake.** Reading "anti-dilution" as protection from *all* dilution. It protects only against *price* dilution in a down round, not against ordinary dilution from new rounds at higher prices or from option grants. Another mistake is ignoring the *carve-outs* (exempt issuances such as option-pool grants) that define when the clause is triggered.

## 13.6 Venture Debt

### 13.6.1 What it is and who uses it

*Venture debt* is a term loan, usually extended by specialized lenders or banks to venture-backed companies that have raised an equity round from institutional investors. The lender looks not to current cash flow or hard collateral but to the *quality of the equity sponsors*, the cash runway, and the likelihood of the next round. Typical features are a three-to-four-year term, an initial interest-only period followed by amortization, a floating or fixed interest rate well above bank rates, an upfront fee, an end-of-term (final payment) fee, and *warrants* to purchase a small amount of equity. Warrant coverage is expressed as a percentage of the loan: 8% coverage on a $5 million loan means warrants with an aggregate strike price of $400,000, usually priced at the latest round's price.

Companies use venture debt to extend runway between equity rounds (so that the next round can be raised at a better valuation), to finance equipment or receivables, to fund an acquisition, or to avoid dilution. The theory is straightforward: if the company will use the money to hit a milestone that raises the valuation of the next round by more than the cost of the loan, the loan is cheaper than equity. Equity is the most expensive form of capital for a company that expects to succeed, since it surrenders a share of all future value; debt is cheaper when failure is unlikely before the loan is repaid.

### 13.6.2 The cost of venture debt

The stated interest rate understates the all-in cost. A correct analysis computes the internal rate of return on the lender's cash flows including fees and warrants.

**Example 13.7 – All-in cost of a venture loan.** A company borrows $5.0 million for 36 months. Terms: interest 11% per year (paid monthly on the outstanding balance), interest-only for the first 12 months and then equal monthly principal payments over the remaining 24 months, a 1% upfront fee ($50,000, deducted from proceeds), and a 4% end-of-term fee ($200,000, paid at month 36). Warrants cover 8% of the loan ($400,000 at a strike of $2.00 per share, so 200,000 shares).

*Step 1: cash flows.* Month 0: the company receives 5,000,000 − 50,000 = **$4,950,000**. Months 1-12: interest of 5,000,000 × 0.11/12 = **$45,833** per month. Months 13-36: principal of 5,000,000/24 = $208,333 per month plus interest on the declining balance (month 13 interest 45,833, payment = **$254,167**); the month-36 payment is $208,333 + interest of $1,910 + end-of-term fee $200,000 = **$410,243**.

*Step 2: totals.* Total payments = **$6,322,917**: principal $5,000,000, end-of-term fee $200,000, and interest of **$1,122,917**.

*Step 3: cash-only cost.* Solving for the monthly rate that equates $4,950,000 to the payment stream gives an annualized (compounded) rate of **13.9%**. The upfront fee and final payment lift the cost from the 11% coupon to nearly 14%.

*Step 4: warrants.* Assume the lender exercises at month 36 at a price per share P (simplification: exercise exactly at maturity, net of strike).

| Share price at month 36 | Warrant gain ($) | Lender's/borrower's all-in cost |
|---|---|---|
| $0 to $2.00 (at or below strike) | 0 | 13.9% |
| $4.00 | 200,000 × (4 − 2) = 400,000 | 17.2% |
| $8.00 | 200,000 × (8 − 2) = 1,200,000 | 23.0% |

*Step 5: dilution.* With, say, 20,000,000 fully diluted shares, 200,000 warrant shares are 1.0% of the company (200,000/20,200,000 = 0.99%).

*Conclusion.* The all-in cost is 13.9% if the company does not outperform and rises toward 17-23% in success cases. This is still typically cheaper than equity, whose expected cost for a successful company may exceed 30%, but it is a fixed obligation that must be paid in the failure scenarios in which equity absorbs the loss. The right comparison is between the dilution avoided and the risk of default if the milestone is missed. ∎

### 13.6.3 Covenants and risks

Venture loans carry *covenants* tailored to early-stage firms: a minimum cash balance, a restriction on additional debt and on dividends, sometimes a revenue or "material adverse change" clause, and often a lien on all assets other than intellectual property (with a negative pledge on IP). The most dangerous clause for a startup is the *material adverse change* default: a vague standard that a lender may invoke when the company's prospects look weak, precisely when the borrower most needs patience.

Use venture debt when (a) the company has strong, recently raised equity backing; (b) the use of proceeds creates value faster than interest accrues; and (c) there is a credible plan to repay or refinance. Avoid it when runway after the loan still ends before a plausible milestone, since you will then face a refinancing crisis with a senior secured creditor holding the keys.

## 13.7 Secondaries, Liquidity, and Exits

### 13.7.1 Why the secondary market exists

The ten-year fund life and the multi-year gap between founding and exit leave both founders and investors with illiquid holdings. A **secondary transaction** is a sale of an existing security by an existing holder to a new buyer, with no new capital going into the company. There are several forms:

- **Founder or employee secondary:** a sale of common shares by employees to a new or existing investor, often in conjunction with a primary round, which lets people diversify, pay taxes, or buy a house without a full exit.
- **Company tender offer:** the company, or a designated investor, offers to buy shares from many holders at a set price.
- **LP-stake secondary:** a limited partner sells its interest in a fund (all remaining NAV plus unfunded commitments) to a specialized secondary buyer.
- **GP-led secondary:** the GP moves one or several portfolio companies from an old fund into a new vehicle (Chapter 14 covers continuation funds in detail), offering existing LPs the choice to sell or roll.
- **Direct secondary of preferred stock:** a venture fund sells a position in a particular company to a new investor at a negotiated price.

### 13.7.2 Pricing a secondary

Secondaries almost always trade at a *discount to net asset value (NAV)* when the buyer is paying cash up front for a pool of illiquid assets with uncertain timing. Pricing depends on the quality of the underlying holdings, the pace of expected distributions, the amount of unfunded commitments (which the buyer must fund), and market conditions. The buyer's return rises as the discount deepens; the seller trades return for liquidity.

**Example 13.8 – Pricing an LP-stake secondary.** An LP holds a fund interest with a reported NAV of **$50 million**. A secondary buyer projects the following *net* cash flows to the holder (distributions less future capital calls), in $ millions, at the end of years 1-6:

| Year | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Net cash flow | 1 | 5 | 13 | 15 | 14 | 12 |

The total is **$60 million**, or 1.2x of NAV. We compute the buyer's IRR at several purchase prices (expressed as a percentage of NAV):

| Price (% of NAV) | Purchase price ($M) | Total cash back / price | Buyer's IRR |
|---|---|---|---|
| 100% | 50.0 | 1.20x | 4.5% |
| 90% | 45.0 | 1.33x | 7.2% |
| 85% | 42.5 | 1.41x | 8.7% |
| 80% | 40.0 | 1.50x | 10.4% |

*Step 1: reading the table.* If the buyer requires a 10% return, it will bid about 80% of NAV; a buyer content with 7% will pay 90%.

*Step 2: seller's side.* The seller who accepts 85% gives up $7.5 million of reported NAV in exchange for immediate liquidity and the removal of unfunded-commitment risk. This is attractive if the seller faces a liquidity need, has an overweight in private assets (the "denominator effect," when public holdings fall and private holdings stay marked), or believes the projected cash flows are optimistic.

*Conclusion.* The discount is not a statement that NAV is wrong. It is the price of immediacy and information risk. A buyer that expects stronger flows than the seller will bid higher; if the cash flows slip by a year, each IRR in the table falls by roughly a percentage point or more. ∎

### 13.7.3 Exits: IPO, acquisition, and the choice between them

The principal exit routes are an *acquisition* (strategic or financial buyer), an *IPO* (Volume 1, Chapter 13 on raising equity), or, occasionally, a recapitalization or sale to a secondary investor. Each has implications that follow from the terms in this chapter:

- In an acquisition, the liquidation waterfall governs payments directly. Escrows and earn-outs defer part of the price, and employee retention packages may be negotiated separately.
- In an IPO, preferred converts automatically (a *qualified IPO* clause usually requires a minimum price or proceeds), so liquidation preferences disappear. This is why participating preferred creates a pro-sale bias: it pays more at modest acquisition prices than in an IPO.
- Lock-up periods keep insiders from selling for typically 90-180 days after the IPO, and post-IPO share price volatility becomes the holder's risk.

**Managerial implication.** Founders considering a secondary sale should weigh the signaling effect (investors may interpret heavy founder selling as a lack of confidence) against the benefit of reduced personal risk, which can actually make a founder *more* willing to pursue high-variance, high-return strategies that the fund wants.

## Case Study: Tessera Analytics Weighs Its Series B

*(Illustrative company; all figures are fictional.)*

Tessera Analytics sells subscription software that predicts equipment failures for regional hospitals. Founded four years ago by Dr. Imani Brooks (CEO) and Tomas Reyes (CTO), the company has $9 million in annual recurring revenue (ARR), growing 80% per year, and burns about $1.1 million per month. Its balance sheet holds $6.6 million of cash, about six months of runway.

Tessera's capitalization is as follows. The founders hold 8.0 million common shares. A Series A investor, Cedar Ridge Ventures, bought 3.0 million preferred shares two years ago at $3.33 per share ($10 million for 25% of the company, 1x non-participating, standard seniority, broad-based weighted-average anti-dilution). An option pool of 1.0 million shares remains, of which 0.4 million are ungranted. Total fully diluted shares are 12.0 million.

The board has three offers on the table.

**Offer 1 (Summit Growth):** $20 million Series B at a $60 million pre-money, 1x non-participating preferred, pari passu with Series A. A condition: the option pool must be topped up to 12% of post-money shares, with the top-up included in the pre-money.

**Offer 2 (Harbor Capital):** $20 million at a $75 million pre-money, but with a 1.5x participating preferred (uncapped), seniority over Series A, and a redemption right after five years. Harbor would also take two of the seven board seats and a veto over any sale below $300 million.

**Offer 3 (venture debt plus bridge):** Cedar Ridge offers a $4 million convertible bridge note that converts at a 20% discount to the Series B price with a $50 million cap, and a specialized lender offers $5 million of venture debt at 12% interest, 1% fee, 4% end-of-term fee, and 8% warrant coverage at the Series A price. Together these would extend runway to about 11 months, enough, management believes, to reach $15 million of ARR and raise a larger Series B in the autumn.

Dr. Brooks leans toward Harbor because of its $75 million valuation. Tomas worries about the participating preference and the veto. The Cedar Ridge partner favors the bridge because it avoids setting a price and preserves the Series A's pro rata right. The venture lender wants a first-priority lien and a minimum-cash covenant of $2 million.

The management plan shows three exit scenarios in five years: a $600 million outcome (probability 20%), a $250 million sale (35%), and a $60 million sale (25%), with a 20% chance of failure. The numbers in the plan assume 55% annual growth falling to 35%.

Cedar Ridge's partner cautions: "With a $250 million exit, the difference between these terms is real money; with a failure, nothing matters; with a $600 million exit, everyone is happy, but the founders may regret the veto."

**Discussion questions**

1. For each of Offers 1 and 2, compute the post-money valuation, the new investor's ownership, the price per share, and the effective pre-money after the pool shuffle in Offer 1. Which offer has the higher *effective* valuation to existing holders?
2. Build the exit waterfall for the three non-failure scenarios under Offers 1 and 2 (include the Series A's 1x non-participating preference). At which exit value do the common stockholders do equally well under the two offers? Use the scenario probabilities to compute the expected proceeds to the common for each offer.
3. Evaluate Offer 3: compute the all-in cost of the venture debt, estimate the dilution from the bridge note at a $50 million cap, and discuss the risk that the debt covenant (minimum cash) is breached before the autumn round. How would you stress-test the plan's 55% growth assumption?
4. Which offer would you recommend, and what term would you negotiate to improve it? Consider the incentives of each investor in the $60 million exit scenario and the role of the Series A's anti-dilution protection if the autumn round is a down round.

## Key Takeaways

- A venture fund is a ten-year limited partnership whose structure (commitments, capital calls, fixed life, carry) shapes investor time horizons and appetite for risk; founders should evaluate investors' fund size, reserves, and timeline, not just price.
- Venture outcomes follow a power law: a few percent of companies deliver roughly half of all value, so fund returns depend on whether the portfolio contains an outlier, and mean returns say little about the typical fund.
- "Return the fund" arithmetic (fund size divided by ownership at exit) explains why funds pass on modest exits and insist on meaningful ownership.
- The VC method works backward from an exit value using a target return and a retention factor; it is a framework for negotiation, not a precise valuation, and the high target rate substitutes for explicit failure probabilities.
- Preferred stock is a bundle of options: a senior claim plus a conversion right. Participation transfers a roughly constant amount from the common to the investor at all exit values above conversion, and caps limit that transfer.
- Option-pricing methods show that common stock is worth materially less than the preferred price (about 27% less in our example); the headline post-money overstates what the founders own.
- Cap table modeling must include the option-pool shuffle, convertible instruments, and each round's effect on ownership; the pre-money pool top-up lowers the effective valuation to existing holders.
- Full-ratchet anti-dilution can shift double-digit ownership points in a down round, while weighted-average protection shifts only a couple of points; both transfer cost to founders and unprotected holders.
- Venture debt costs more than its coupon: fees and warrants lift the all-in cost to 14-23% in our example, and its fixed obligations and covenants can matter most when the company is weakest.
- Secondaries trade at discounts to NAV that compensate buyers for illiquidity and information risk; they provide liquidity for LPs, employees, and founders, but pricing, signaling, and conflicts of interest need to be managed.

## Review Questions

1. Why is equity, rather than debt, the dominant form of financing for early-stage ventures? Which three problems do staged financing, board control, and liquidation preferences address?
2. Explain the difference between the fund's commitments and its drawn capital. Why does the timing of capital calls matter to LPs?
3. Why does diversification across more companies not raise a venture fund's expected return, and why can it still reduce the probability of a very high return?
4. A fund of $400 million owns 8% of a company at exit. What exit value is required for that holding alone to return the fund? What does this imply for the kind of company the fund can back?
5. Why is the 40% target return used in the VC method not a cost of capital? What does it implicitly contain?
6. Contrast 1x non-participating, 1x participating, and capped participating preferred. At what exit values do they differ, and who bears the cost?
7. Explain how a convertible preferred share can be decomposed into option positions and why this implies that common stock is worth less than the preferred price.
8. What is the option-pool shuffle? Who bears its cost, and how can a founder negotiate it?
9. Compare full-ratchet, broad-based weighted-average, and narrow-based weighted-average anti-dilution. Why does a new investor care about the existing investors' anti-dilution terms?
10. When is venture debt a sensible choice and when is it dangerous? Why is a warrant part of the compensation?

## Problems

1. **Pre/post-money.** A startup has 9,000,000 fully diluted shares (including pool) and raises $6.0 million at an $18.0 million pre-money. Find the price per share, the number of new shares, the post-money valuation, and the new investor's ownership.
2. **VC method.** An investor puts in $5.0 million. In four years the company is expected to have an exit value of $200 million. The target return is 35% per year and the investor expects to retain 80% of its ownership after later rounds. Find the required multiple, the required ownership at exit, the required ownership today, and the implied post-money and pre-money valuations.
3. **Liquidation preferences.** A fund invests $8.0 million for 20% of a company. Compute the fund's proceeds and the common's proceeds at an exit value of $50 million under (a) 1x non-participating preferred, and (b) 1.5x participating preferred (uncapped). At what exit value does the non-participating preferred convert?
4. **Option-pool shuffle.** A company has 6,000,000 shares (no pool). A new investor will invest $5.0 million at a $15.0 million pre-money (headline), and requires a post-money pool of 12% of fully diluted shares, created pre-money. Find total post-money shares, the price per share, the new pool size, and the effective pre-money valuation for existing holders.
5. **Anti-dilution.** Series A holds 1,000,000 preferred shares bought at $5.00 (convertible 1:1). There are 10,000,000 fully diluted shares before a down round that issues new shares for $3.0 million at $2.50 per share. Compute the new conversion price and the number of common shares into which the preferred converts under (a) broad-based weighted average and (b) full ratchet.
6. **Venture debt.** A company borrows $4.0 million for two years; it pays 12% annual interest at the end of each year and repays the principal at maturity. The lender takes a 1% upfront fee, and receives warrants on 200,000 shares with a $1.00 strike. At maturity the shares are worth $3.00. Compute the lender's IRR (a) ignoring the warrants and (b) including the warrants' gain at maturity. Treat the fee as deducted from proceeds.
7. **Secondary pricing.** A secondary buyer expects net cash flows of 2, 4, 6, 8, 8 ($ millions) at the end of years 1 through 5 from an LP interest with NAV $20 million. Compute the buyer's IRR if the price is (a) 100% of NAV and (b) 80% of NAV. What is the cash-on-cash multiple at 80%?
8. **Power law.** A fund of $250 million invests in 40 companies, each with a 2% chance of being an outlier (a 50x or better outcome), independently. (a) What is the probability that the fund contains no outlier? (b) If the fund owns 12% of a company at exit, what exit value is needed for that company alone to return the fund?

### Answers to Selected Problems

1. Price = $18.0M / 9,000,000 = **$2.00**; new shares = 6.0M / 2.00 = **3,000,000**; post-money = **$24.0M**; ownership = 6/24 = **25%**.
2. Required multiple = 1.35^4 = **3.3215x**; stake value at exit = 5 × 3.3215 = $16.61M; ownership at exit = 16.61/200 = **8.30%**; today = 8.30%/0.80 = **10.38%**; post-money = 5/0.1038 = **$48.2M**; pre-money = **$43.2M**.
3. (a) Converts if 0.2X > 8, i.e. X > $40M. At X = 50, 0.2 × 50 = 10 > 8, so converts: fund **$10.0M**, common **$40.0M**. (b) 12 + 0.2(50 − 12) = 12 + 7.6 = **$19.6M**; common **$30.4M**. Participation costs the common $9.6M here.
4. Existing holders are 100% − 25% − 12% = 63%, so total = 6,000,000 / 0.63 = **9,523,810** shares. Investor shares = 0.25 × 9,523,810 = 2,380,952; price = $5.0M / 2,380,952 = **$2.10**. Pool = 0.12 × 9,523,810 = **1,142,857** shares. Effective pre-money = 6,000,000 × $2.10 = **$12.6M** (the headline $15.0M includes the $2.4M value of the pool).
5. B = new money / CP1 = $3.0M / $5.00 = 600,000; C = 3.0M / 2.50 = 1,200,000. (a) CP2 = 5.00 × (10,000,000 + 600,000) / (10,000,000 + 1,200,000) = 5.00 × 10.6/11.2 = **$4.7321**; conversion shares = 5,000,000 / 4.7321 = **1,056,604**. (b) CP = $2.50, shares = 5,000,000 / 2.50 = **2,000,000**.
6. Proceeds = 4,000,000 − 40,000 = $3.96M. Interest = $480,000 per year. (a) Cash flows −3.96, +0.48, +4.48: IRR = **12.6%**. (b) Warrant gain = 200,000 × (3 − 1) = $0.4M; final flow 4.88: IRR = **17.2%**.
7. (a) Flows −20, 2, 4, 6, 8, 8: IRR = **10.1%**. (b) Price $16M: IRR = **17.6%**; multiple = 28/16 = **1.75x**.
8. (a) 0.98^40 = **44.6%**. (b) 250 / 0.12 = **$2,083 million** (about $2.1 billion).
