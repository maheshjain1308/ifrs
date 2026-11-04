# Chapter 10: Executive Compensation and Incentives

## Learning Objectives

After studying this chapter you should be able to:

- Contrast the optimal-contracting and managerial-power views of executive pay, and use the informativeness principle to judge whether a pay design rewards what executives actually control.
- Value stock options, restricted stock, and performance share units, compute their grant-date fair value and deltas with the Black-Scholes model, and explain why executives value them at less than they cost the firm.
- Calculate pay-for-performance sensitivity and compare realized with granted pay, and interpret the "dollars per $1,000 of shareholder value" measure.
- Compare total shareholder return (TSR) and return on invested capital (ROIC) as performance metrics, show how each can mislead, and design a metric set that links pay to economic profit.
- Analyze how convex payoffs (options), leverage, and inside debt shape executives' appetite for risk, and relate the analysis to financial-institution regulation.
- Apply clawback and malus mechanics, evaluate say-on-pay votes and pay-ratio disclosures, and recommend a defensible incentive plan for a given strategic situation.

## Opening Vignette

*Illustrative scenario; the company and individuals are fictional.*

Northgate Components, a $10 billion supplier of precision parts to automotive and industrial customers, is preparing for its annual meeting. Last year's say-on-pay proposal passed with only 62% of votes cast in favor, a shock to a board accustomed to 95%. The compensation committee chair, Naomi Falkner, has promised investors a redesign.

The existing plan has three pieces. Chief executive Julian Braddock earns a base salary of $1.4 million. His annual bonus pays from 0% to 200% of a $2.1 million target, based on adjusted earnings per share. His long-term award, with a grant-date value of about $9 million, is half stock options and half restricted stock units that vest on time. Over the last five years the stock rose 6% a year, in line with the sector. Braddock's realized pay nonetheless averaged $12 million, mostly because the bonus paid out above target in every year as adjusted EPS grew through buybacks while operating profit stayed flat.

Investors have raised four complaints. Adjusted EPS excludes restructuring charges that recur every year. The time-vested restricted units pay out whether or not the stock performs. The peer group used to benchmark pay includes firms two to three times larger. And Northgate has earned a return on invested capital of about 7% against a cost of capital near 9% for five years, while the CEO has championed growth through acquisitions at a series of premiums.

Falkner's advisor proposes shifting half the long-term award to three-year performance shares based on relative TSR, adding ROIC as a second metric, replacing adjusted EPS in the bonus with operating profit after capital charge, and adopting a stronger clawback. Braddock argues that relative TSR will reward luck and punish him for the sector's cycle, and that a capital-return metric will make him reject growth projects. Both objections have merit. This chapter develops the tools for deciding how much weight each deserves: valuation of the instruments, the math of sensitivity and risk, the strengths and traps of each metric, and the governance of the process.

## 10.1 Why Pay Design Matters: Two Views of the Contract

### 10.1.1 Pay as a solution to an agency problem

Chapter 9 framed governance as a response to agency problems. Executive compensation is the most direct instrument available to the board for aligning the executive's interests with those of shareholders, and it is the most visible: it is publicly disclosed, personally salient, and politically charged. Three questions organize the subject. *How much* should an executive be paid in total? *In what form*, and with what mix of fixed and variable pay? And *for what*: which performance measures, over what horizon?

Volume 1 equipped you to value firms and projects. Here the object being valued is a contract, and the "return" the board seeks is better decisions by the executive. A pay plan is best judged by the behavior it induces under the executive's own private objectives, not by its stated intent.

### 10.1.2 The optimal-contracting view

In the standard principal-agent framework, the board designs a contract that maximizes shareholder value subject to the executive's participation constraint (she must earn at least her outside option) and incentive-compatibility constraint (she chooses the action that maximizes her own expected utility given the contract). The risk-averse executive must be compensated for bearing risk, so more pay-for-performance means higher average pay, the classic trade-off between incentives and insurance.

Two results from this literature guide design. The **informativeness principle** (Holmstrom, 1979) says that pay should depend on any measure that provides information about the executive's effort, controlling for the information in other measures. Its corollary is *relative performance evaluation*: if peer returns reveal the common shock that the executive cannot control, filtering it out should improve efficiency by reducing the risk imposed on her. The **multitask problem** (Holmstrom and Milgrom, 1991) warns that when an executive has several tasks and only some are measurable, strong incentives on the measurable tasks pull effort away from the unmeasured ones. A CEO paid on current EPS will cut research spending and maintenance, which are hard to measure and whose benefits come later.

### 10.1.3 The managerial-power view

Bebchuk and Fried argued, in their critique of executive pay practice, that pay is not set at arm's length. Executives influence the board that sets their pay: they can affect director nominations, supply the information used to evaluate performance, and benefit from peer groups and consultants that reward higher pay. Boards are reluctant to defy executives; shareholders are dispersed and their ability to object is limited by "outrage costs": directors will tolerate generous packages unless disclosure makes them publicly embarrassing. The view predicts several patterns: stealth compensation through pensions and perquisites, options that reward luck (such as stock-price gains driven by a rising market), pay that rises with firm size irrespective of performance, windfalls on departure, and weaker pay-performance links where governance is weak.

Both views contain truth. Most observed features, such as heavy reliance on equity, can be consistent with either story. What distinguishes them is how practices vary with governance quality, and how plan terms respond to scrutiny. The managerial-power lens is a useful audit tool: for every design feature, ask whether it would survive if the executive had no influence on the committee.

### 10.1.4 Levels of pay and the market for talent

Pay levels have risen far faster than median worker pay in many countries over recent decades. Explanations include growth in firm size and scale of responsibility, a competitive market for managerial talent and rising demand for general (portable) skills, changes in equity use, and weaker governance. Gabaix and Landier showed that in a model where talent is differentiated only slightly and the best CEO is assigned to the biggest firm, small differences in talent produce large differences in pay, and pay rises in proportion to firm size when firm sizes rise. The model rationalizes the cross-sectional correlation between pay and firm size and its time-series growth, but it does not itself explain why pay should be insensitive to performance. A practical consequence is that **benchmarking** relative to peer groups pushes pay up when most boards seek to pay at or above the median ("Lake Wobegon" effect). Careful peer selection (similar size, industry, complexity) and a documented rationale are therefore more important than the percentile target.

### 10.1.5 Regulatory and accounting context

A few institutional features recur in the design problem. Equity awards are expensed at **grant-date fair value** under U.S. GAAP (ASC 718) and IFRS 2; the expense is spread over the vesting period, so the accounting cost of an option grant is its estimated fair value, not what the executive eventually receives. U.S. tax law limits the deductibility of compensation above $1 million for certain top officers (the earlier exception for performance-based pay was eliminated in 2017), reducing one historical tax reason for options and performance shares. Disclosure rules in the U.S. require a compensation discussion and analysis, summary compensation tables, a pay-versus-performance table, and the ratio of CEO to median employee pay; the U.K., Europe, and other markets have analogous requirements, often with binding shareholder votes on the pay policy. We return to these in Section 10.7.

## 10.2 The Anatomy of an Executive Pay Package

### 10.2.1 Components

| Component | Purpose | Typical form | Main weakness |
|---|---|---|---|
| Base salary | Fixed pay, retention | Cash, set against peers | Not tied to performance; floor on cost |
| Annual bonus | Reward near-term operating results | Cash, 0-200% of target against financial and strategic goals | Short horizon; target-setting games; earnings management |
| Stock options | Reward share-price appreciation | Right to buy shares at grant-date price | Rewards market beta; convex; encourages risk |
| Restricted stock/RSUs | Retention and alignment | Shares vesting over time | Pay for presence; value even when stock falls |
| Performance shares (PSUs) | Reward multi-year goals | Shares earned on TSR, ROIC, EPS or other metrics | Metric design; complexity |
| Pensions and deferred pay | Retention; inside debt | Defined benefit, SERP, deferred comp | Opaque; debt-like |
| Benefits and perquisites | Convenience, security | Aircraft, security, club memberships | Visibility; stealth pay |
| Severance and change-in-control | Retention through transition; insurance | Multiple of salary and bonus; accelerated vesting | Pay for failure; conflicts in takeovers |

### 10.2.2 Fixed versus variable pay and mix

The proportion of pay that is at risk varies with seniority, industry, and firm risk. For large U.S. companies, long-term equity commonly makes up well over half of the CEO's target pay opportunity, with salary typically a small fraction. In practice, the right mix depends on (1) how much of the outcome the executive can influence, (2) how risk-averse and wealth-constrained she is, (3) how noisy performance measures are, and (4) the horizon over which effort pays off. A CEO of a highly cyclical business gets more noise from stock price and a smaller fraction of that variation reflects her actions, so the optimal weight on stock-based pay is lower than for a growth company whose value depends on discretionary choices.

### 10.2.3 Target pay and the performance range

Annual and long-term plans use schedules: a *threshold* (below which nothing is paid), a *target* (payout of 100%), and a *maximum* (cap, commonly 150-200%). The shape of this schedule affects behavior. A cliff at threshold encourages gaming near the boundary; a cap above which extra performance earns nothing encourages the executive to defer revenue; goals set too easily deliver payouts without effort. Goal-setting should be tied to the board-approved plan and to external expectations, and the board should specify in advance the treatment of adjustments (acquisitions, divestitures, accounting changes, restructuring) rather than make discretionary adjustments after the fact. The vignette's complaint that "adjusted EPS excludes recurring restructuring" is exactly this issue.

### 10.2.4 Ownership guidelines and holding requirements

Most large firms require executives to hold shares equal to a multiple of salary (commonly five to six times for the CEO) and often to retain a portion of net shares from vesting until retirement or beyond. Their purpose is to prevent executives from cashing out in a way that decouples their wealth from long-term value. The choice of holding period matters. Edmans, Gabaix, Sadzik, and Sannikov show in a dynamic model that deferring vesting and linking it to outcomes after the executive leaves can reduce incentives for short-term manipulation. Yet very long holding periods increase the executive's risk, so require a higher average pay, and can encourage a leaving executive to maintain a sub-optimal strategy if she still holds equity.

### 10.2.5 Common mistakes in pay design

- *Paying for what is easy to measure.* Revenue growth and adjusted EPS are easy to compute and easy to inflate.
- *Rewarding market movements.* Options with no hurdle pay out in rising markets; at-the-money options reward the sector tide.
- *Using the same metric for annual and long-term plans.* Double-counting makes incentives overweight a single measure.
- *Setting targets by last year plus a few percent.* Without reference to the board-approved strategy, targets drift.
- *Ignoring the fall-back.* When equity falls out of the money, boards re-price or add supplementary awards, which destroys the incentive's credibility.

## 10.3 Equity Instruments: Options, Restricted Stock, and Performance Shares

### 10.3.1 Stock options

An executive stock option gives the right to buy shares at a fixed exercise price K (usually the grant-date price) for a period of up to ten years, normally subject to vesting. It is a call option, so Volume 1, Chapter 18 supplies the tools. Because the option is non-transferable, the executive cannot hedge it with the underlying shares and must exercise early or forfeit on departure. Therefore its expected term is shorter than the contractual term and its value to the executive is lower than market value.

**Why cost exceeds value.** Hall and Murphy showed that a risk-averse, undiversified executive who cannot trade the option values it below the Black-Scholes cost to the firm, because she bears the idiosyncratic risk the market would diversify away. This "cost-value wedge" means that options are an expensive way to deliver a given amount of perceived pay, but it also means that executives who value options at a deep discount to cost should respond more to explicit cash and stock than to the headline value of an option grant. Boards should therefore think of option grants in terms of the *incentive they provide* (delta and vega) and not of the dollar value they report.

**Example 10.1 – Grant-date value and leverage of an option award.**
Northgate's share price is $50, there are 200 million shares outstanding (market capitalization $10 billion), and the compensation committee considers granting the CEO 400,000 at-the-money options with a ten-year term. Using an expected term of 6.5 years, annualized volatility of 30%, a risk-free rate of 4%, and a continuous dividend yield of 1.5%, we compute the Black-Scholes value (Volume 1, Chapter 18).

*Step 1: Inputs.* S = 50, K = 50, T = 6.5, σ = 0.30, r = 0.04, q = 0.015.

*Step 2: d₁ and d₂.*

```
d₁ = [ln(S/K) + (r – q + σ²/2) T] / (σ √T)
   = [0 + (0.04 – 0.015 + 0.045) × 6.5] / (0.30 × 2.5495)
   = 0.455 / 0.7649 = 0.5949
d₂ = d₁ – σ √T = 0.5949 – 0.7649 = –0.1700
```

*Step 3: Cumulative normal values.* N(d₁) = 0.7240; N(d₂) = 0.4325.

*Step 4: Call value.*

```
c = S e^(–qT) N(d₁) – K e^(–rT) N(d₂)
  = 50 × e^(–0.0975) × 0.7240 – 50 × e^(–0.26) × 0.4325
  = 50 × 0.90712 × 0.7240 – 50 × 0.77105 × 0.4325
  = 32.84 – 16.68 = $16.16
```

The value is 32.3% of the share price.

*Step 5: Grant-date fair value.* 400,000 × $16.16 = $6.47 million. This is the amount expensed over the vesting period and typically reported as the award's value.

*Step 6: Delta and share-equivalents.* Option delta = e^(–qT) N(d₁) = 0.90712 × 0.7240 = 0.6568. The grant behaves like 400,000 × 0.6568 = 262,711 shares, with a dollar delta of 262,711 × $50 = $13.14 million.

*Step 7: Leverage compared with restricted stock.* An RSU award of the same $6.47 million grant-date value buys 129,314 shares ($6.47 million / $50) with a dollar delta of $6.47 million. The option award therefore delivers 13.14 / 6.47 = 2.03 times as much dollar sensitivity to the share price per dollar of reported cost. (This ignores the executive's discount for risk and illiquidity.)

*Step 8: Dilution.* 400,000 options are 0.2% of 200 million shares. The company's expense is $6.47 million, but the economic cost to shareholders is the value transferred, which depends on where the share price ends up.

*Step 9: Granted versus realizable pay.* Three years later, with 3.5 years remaining, the option's Black-Scholes value at three alternative share prices is (same r, q, σ): S = $38 gives $5.55 per option, $2.22 million in total with zero intrinsic value; S = $50 gives $12.15, $4.86 million; S = $70 gives $26.78, $10.71 million, of which intrinsic value is $20 × 400,000 = $8.00 million. The reported grant value of $6.47 million is therefore a poor guide to what the executive actually realizes, and it makes the case for showing *realizable* pay alongside grant-date pay when judging alignment.

### 10.3.2 Restricted stock and restricted stock units

RSUs deliver shares on vesting, so they have positive value even if the stock falls, and they retain executives (unvested units are forfeited on departure). From the viewpoint of incentives they are less leveraged than options: dollar delta equals the value of shares. Their weakness is that time-vested RSUs reward presence, not performance. Many investors consider them acceptable only as a minority of the package, and in start-up or turnaround settings where a share-price hurdle would not be credible.

### 10.3.3 Performance share units

PSUs deliver a number of shares that depends on the achievement of performance goals over a multi-year period, usually three years. A typical design specifies a target number of units and a payout curve of 0% to 200% of target. Goals may be market-based (relative TSR), financial (ROIC, EPS, free cash flow), or a mix. Valuing PSUs requires distinguishing two kinds of condition. For *market conditions*, such as relative TSR, accounting rules require the expected payout to be built into the grant-date fair value through a Monte Carlo simulation, and the expense is not reversed if the condition fails. For *performance conditions*, such as ROIC, the expense is recognized according to the probable outcome and trued up. This difference explains part of why firms choose one or the other.

PSUs can include modifiers (such as capping the payout when absolute TSR is negative, which stops the plan paying above target in a falling market) and can be settled in shares so that executive wealth remains tied to the share price after vesting.

### 10.3.4 Measuring pay-for-performance sensitivity

The incentive to raise firm value depends on how much the executive's wealth changes when shareholder wealth changes. Jensen and Murphy (1990) proposed the **pay-performance sensitivity**: the change in the executive's wealth per $1,000 change in shareholder wealth, including the effects of the value of shares and options held, bonus and salary revisions, and the risk of dismissal. Their central empirical finding was that the sensitivity for U.S. CEOs was low, on the order of a few dollars per $1,000, and that most of it came from stock ownership, not from the pay-contract design. Subsequent work, notably by Hall and Liebman, found that the growth of option grants in the 1990s raised the sensitivity substantially, though with high dispersion across firms. For our purposes, the exact estimate matters less than the calculation.

```
Dollar delta   =  Σ (shares-equivalent held × share price)
PPS (per $1,000 of shareholder value)  =  1,000 × Dollar delta / Market capitalization
```

**Example 10.2 – Pay-performance sensitivity of a CEO's holdings.**
Julian Braddock holds 300,000 shares of Northgate, the 400,000 newly granted options of Example 10.1, and 600,000 older options with an exercise price of $30 and 3 years remaining (volatility 30%, r = 4%, q = 1.5%). Share price is $50 and market capitalization is $10 billion.

*Step 1: Older options.* Black-Scholes value = $22.37; delta = 0.8769.

*Step 2: Dollar delta by component.*

```
Shares:            300,000 × $50                    = $15.00 million
New options:       400,000 × 0.6568 × $50           = $13.14 million
Old options:       600,000 × 0.8769 × $50           = $26.31 million
Total dollar delta                                  = $54.44 million
```

*Step 3: Sensitivity.* A 1% rise in the share price changes Braddock's wealth by about 1% × $54.44 million = $0.544 million.

*Step 4: PPS.* PPS = 1,000 × $54.44 million / $10,000 million = $5.44 per $1,000 of shareholder value. Braddock's wealth moves by about half a percent of any change in firm value.

*Step 5: Interpretation.* Half a percent is meaningful in dollars but small relative to the stake of an owner-manager. A $200 million project with a 10% chance of failure that costs shareholders $20 million in expected value alters Braddock's expected wealth by only about $0.11 million, small compared with the personal costs, such as effort, reputational risk, and career risk, that the project may impose. Even large dollar deltas may leave the executive indifferent to many marginal decisions.

*Step 6: A caution.* Dollar delta from existing holdings is a *wealth-sensitivity*, not the strength of *new* incentives. Executives with huge accumulated wealth in company stock may be over-exposed (and so risk-averse), while those with little equity may have low alignment regardless of the size of a new grant.

## 10.4 Choosing Performance Metrics: TSR, ROIC, and Their Alternatives

### 10.4.1 What a metric must do

A performance metric should satisfy five conditions: it should be *aligned* with long-run shareholder value, *controllable* enough that the executive's actions move it, *measurable* with limited manipulation, *timely* enough to provide feedback, and *understandable*. No metric satisfies all five. The practical response is a small portfolio of complementary measures (typically two or three) with different weaknesses, a long measurement window, and board discretion bounded by pre-specified rules.

| Metric | Strength | Weakness | Manipulation / distortion |
|---|---|---|---|
| Absolute TSR | Directly shareholder-aligned; hard to manipulate; no accounting | Dominated by market and sector moves; sensitive to start and end dates | Timing of news, buybacks, guidance |
| Relative TSR | Filters common shocks (informativeness principle) | Peer group choice; payoffs depend on rank among close competitors; rewards "least bad" | Strategic peer selection; sabotage incentive in theory |
| EPS growth | Familiar; short feedback | Ignores capital employed; boosted by buybacks and leverage; adjustments | Accruals, buybacks, cutting investment |
| Operating profit / EBITDA | Controllable; less leverage-sensitive | Ignores capital charge | Underinvestment in maintenance; capital-light accounting choices |
| ROIC (average) | Links profit to capital; discourages value-destroying growth | Rewards shrinking the base; underinvestment when ROIC high; accounting-based | Asset write-offs, leasing, sale-leasebacks, depreciation policy |
| Economic profit (EVA-type) | Charges for capital; consistent with NPV | Complexity; needs a capital-cost estimate | Capital definition |
| Free cash flow | Hard to inflate by accruals | Lumpy; can be raised by cutting investment | Working capital timing, capex deferral |
| Strategic/ESG scorecards | Capture non-financial value drivers | Subjective; small weights are noise | Goal-setting leniency |

### 10.4.2 TSR: strengths and limits

Total shareholder return is the return an investor earns from price change plus reinvested dividends over the period:

```
TSR (annualized) = [ (P_end + reinvested dividends) / P_start ]^(1/n) – 1
```

Its appeal is that it is the shareholder's own outcome, with no accounting discretion. Its problems are well known. First, TSR confuses what the executive controls with what she doesn't: sector multiples, interest rates, and market sentiment dominate the short-term variance of returns, which is why **relative TSR** compares performance to a peer group or index to remove common shocks. Second, TSR is *expectations-adjusted*: a firm that starts the period with a high valuation must deliver extraordinary results merely to earn a normal return, whereas a firm starting from depressed prices earns TSR from re-rating. The start-date effect is one of the main reasons that three-year TSR goals can reward or punish for a decision made before the executive arrived or before the plan began. Third, TSR is vulnerable to value-neutral financial engineering that boosts short-term returns, and to disclosure timing. Fourth, relative TSR payouts depend on rank, so a peer group that is small or has idiosyncratic firms generates noisy payouts.

Relative TSR plans commonly pay at target for median performance, vest 0% below the 25th-30th percentile, and pay 200% at the 75th-90th percentile, with a cap on payout when absolute TSR is negative. A key design feature is the smoothness of the payout curve. A cliff creates a large discontinuity in the payoff that, in valuation terms, resembles a digital option and encourages gaming.

**Example 10.3 – Valuing and stress-testing a relative-TSR performance share.**
Northgate considers granting performance shares that pay on three-year TSR rank against ten peers. The payout schedule, as a percentage of target units, is: 0% if the rank percentile is below the 25th; 50% at the 25th percentile; 100% at the 50th; 150% at the 75th; 200% at the 90th and above; linear in between. Percentile = (number of firms ranked below Northgate) / 10 (so rank 1 of 11 is the 100th percentile and rank 11 is the 0th). Assume all eleven firms have a volatility of 30% per year and a pairwise correlation of 0.5 in annual returns, the risk-free rate is 4%, and Northgate's share price is $50. For simplicity assume total returns are reinvested (so TSR equals the price return on the total-return index) and that the executive receives shares worth S₃ at the end.

*Step 1: Rank probabilities.* Because the firms are statistically identical, Northgate's rank is equally likely to be any of 1 through 11, each with probability 1/11 = 9.09%.

*Step 2: Payout at each rank.*

| Rank (of 11) | Percentile | Payout (% of target) |
|---|---|---|
| 1 | 100% | 200% |
| 2 | 90% | 200% |
| 3 | 80% | 166.7% |
| 4 | 70% | 140% |
| 5 | 60% | 120% |
| 6 | 50% | 100% |
| 7 | 40% | 80% |
| 8 | 30% | 60% |
| 9 | 20% | 0% |
| 10 | 10% | 0% |
| 11 | 0% | 0% |

For example, at the 80th percentile: 150% + (0.80 – 0.75) / (0.90 – 0.75) × 50% = 150% + 16.7% = 166.7%. At the 40th percentile: 50% + (0.40 – 0.25) / 0.25 × 50% = 80%.

*Step 3: Expected payout.* Sum of payouts = 2.00 + 2.00 + 1.667 + 1.40 + 1.20 + 1.00 + 0.80 + 0.60 = 10.667; divided by 11 = 0.970. The expected payout is 97.0% of target, slightly below 100% because of the 25% cliff to zero and the cap at 200%. The probability of paying nothing is 3/11 = 27.3%; the probability of the maximum is 2/11 = 18.2%.

*Step 4: Fair value by Monte Carlo.* The fair value must reflect that the shares delivered are worth more when Northgate ranks high, because high rank is correlated with a high share price. We simulated 200,000 three-year paths (seed 7) for eleven correlated lognormal total-return indices, with return drift (r – σ²/2) T and common-factor correlation 0.5, and valued the payoff payout × S₃ discounted at the risk-free rate. Results: the simulated mean payout is 0.970 (matching the exact calculation), the simulated probability of zero payout is 27.3%, and the probability of maximum is 18.1%. The unconditional discounted expected share value is 1.001 × $50 = $50.05. The fair value per target unit is 1.202 × $50 = $60.1.

*Step 5: Interpret the gap.* If payout and share value were independent, fair value would be 0.970 × $50.05 = $48.5 per target unit. The Monte Carlo value of $60.1 is about 24% higher, because the payout is paid in more shares exactly when each share is worth more. The grant-date fair value used for accounting is therefore *greater than* the price of a share at target. A board that sets the number of target units by dividing a dollar value by the share price will under-count the cost, and a board that sets it from the simulated fair value will grant about 17% fewer units for the same intended value ($50.0 / $60.1 = 0.83).

*Step 6: Design lesson.* The 27% chance of zero and the 18% chance of a maximum payoff illustrate the cliff and cap. Smoothing the schedule near the 25th percentile and extending the cap would reduce the incentive to take excess risk near thresholds.

### 10.4.3 ROIC and economic profit

Volume 1 and Chapter 21 develop the value-driver formula for a firm growing at g with return on new invested capital equal to ROIC:

```
Value of operations  =  NOPAT × (1 – g / ROIC) / (WACC – g)
Economic profit (EP)  =  (ROIC – WACC) × Invested capital
NPV of a project      =  PV of the economic profits it generates
```

The formula shows that growth creates value only when ROIC exceeds WACC. A firm with NOPAT of $1,000 million, g = 3%, ROIC = 20%, and WACC = 9% is worth 1,000 × (1 – 0.03/0.20) / (0.09 – 0.03) = 1,000 × 0.85 / 0.06 = $14,167 million; with no growth it would be 1,000 / 0.09 = $11,111 million. The $3,056 million difference is the value created by growing at a spread of 11 points. The same growth at ROIC = WACC creates nothing.

ROIC is therefore an attractive pay metric: it links profit to capital and discourages growth at poor returns, a direct remedy for the empire-building behavior that Chapter 9 identified. But it introduces two opposite distortions, because an *average* ratio is not a *marginal* decision rule.

1. *High-ROIC firms underinvest.* If bonuses depend on the ROIC level, a manager of a high-ROIC business will reject projects that earn more than the cost of capital but less than the current average.
2. *Low-ROIC firms overinvest in poor projects that raise the average.* A project that earns less than the cost of capital but more than the firm's average ROIC raises the ratio but destroys value.

Additional distortions arise from accounting: ROIC rises when assets are depreciated, written off, or leased rather than owned, and when acquisition goodwill is excluded from invested capital (which flatters acquirers). Using a capital definition that includes goodwill and capitalized leases, measuring over several years, and using the *spread* (ROIC – WACC) times capital, i.e., economic profit, fixes the first-order problems.

**Example 10.4 – The ROIC trap, and why economic profit fixes it.**
*Firm A* (a high-return business) has invested capital of $5,000 million, NOPAT of $1,000 million (ROIC 20%), and WACC of 9%. It has a project requiring $100 million that would earn a perpetual NOPAT of $12 million (ROIC 12%).

*Step 1: NPV of the project.* NPV = 12 / 0.09 – 100 = 133.33 – 100 = +$33.33 million. The project should be accepted.

*Step 2: Effect on average ROIC.* New ROIC = (1,000 + 12) / (5,000 + 100) = 1,012 / 5,100 = 19.84%. ROIC falls by 0.16 points. A manager paid on ROIC would reject the project.

*Step 3: Effect on economic profit.* EP before = (0.20 – 0.09) × 5,000 = $550 million. EP after = 1,012 – 0.09 × 5,100 = 1,012 – 459 = $553 million. EP rises by $3 million per year; its perpetuity value 3 / 0.09 = $33.33 million equals the NPV. A manager paid on EP accepts the project.

*Firm B* (a low-return business) has invested capital of $5,000 million, NOPAT of $300 million (ROIC 6%), and WACC of 9%. A project requiring $100 million would earn a perpetual NOPAT of $8 million (ROIC 8%).

*Step 4: NPV.* 8 / 0.09 – 100 = 88.89 – 100 = –$11.11 million. The project destroys value.

*Step 5: Effect on ROIC.* (300 + 8) / 5,100 = 6.04%, an increase from 6.00%. A manager paid on ROIC accepts a value-destroying project.

*Step 6: Effect on EP.* EP before = (0.06 – 0.09) × 5,000 = –$150 million. EP after = 308 – 0.09 × 5,100 = 308 – 459 = –$151 million. EP falls by $1 million, whose perpetuity value –1 / 0.09 = –$11.11 million equals the NPV. Under EP the manager rejects.

*Interpretation.* Level-of-ROIC bonuses induce the wrong decision in both directions. A spread-times-capital measure (economic profit, ideally with a multi-year window and a bank-style carry-forward of negative amounts) aligns incentives with NPV (Volume 1, Chapter 6).

### 10.4.4 TSR versus fundamentals: a decomposition

Because TSR reflects both operating results and changes in the multiple investors will pay, it is helpful to decompose it for the compensation committee.

```
Price return  =  (1 + EPS growth) × (1 + change in P/E) – 1
TSR           =  price return + dividend contribution (internal rate of return on price path and dividends)
```

**Example 10.5 – How much of TSR is management's doing?**
Northgate begins the period with a share price of $40 and EPS of $2.50 (P/E = 16.0). Over three years EPS grows 5% annually, to 2.50 × 1.05³ = $2.894. Dividends are $1.00, $1.05, and $1.10 at the ends of years 1 to 3.

*Step 1: Scenario 1, the multiple holds at 16.0.* Ending price = 2.894 × 16.0 = $46.31. The annualized return r solves –40 + 1.00/(1+r) + 1.05/(1+r)² + 1.10/(1+r)³ + 46.31/(1+r)³ = 0, giving r = 7.50% per year.

*Step 2: Scenario 2, the multiple falls to 14.0 (a sector de-rating).* Ending price = 2.894 × 14.0 = $40.52. The same equation gives r = 3.04% per year.

*Step 3: Isolate the multiple.* The operating performance, EPS growth of 5% a year and the same dividends, is identical in both scenarios. The de-rating from 16.0 to 14.0 (a 12.5% fall in the multiple, or 1/1.1429 = 0.875 times) reduces annualized TSR by 7.50 – 3.04 = 4.46 percentage points.

*Step 4: Interpretation.* If the CEO's three-year PSU is paid on absolute TSR against a hurdle of 6%, she receives nothing in Scenario 2 even though she has delivered exactly what the plan promised, and she receives a large payout in Scenario 1 if the sector re-rates upward even if EPS growth is poor. This is the limitation that motivates *relative* TSR (the sector de-rating hits peers too) and *operating-metric* measures such as ROIC and economic profit that are less sensitive to multiples. Equally, relative TSR does not remove firm-specific re-rating, which can reflect real changes in expected performance.

### 10.4.5 A recommended metric architecture

A defensible architecture for the vignette's firm would include:

- An annual bonus on *operating profit after capital charge* (economic profit) and a small number of strategic goals with measurable outcomes, with adjustments constrained by a pre-approved list.
- A long-term PSU based on a three-year cumulative measure, split between *relative TSR* (weight 50%, with a negative-absolute-TSR cap at target) and *average ROIC or economic profit* (weight 50%), measured with goodwill and capitalized leases in invested capital.
- Time-vested restricted stock as a minority of the long-term award, used mainly for retention, and options only where the board wants convexity (for example for a high-growth firm).
- Stock ownership guidelines and holding periods that extend beyond vesting.

The combination balances an external benchmark (relative TSR) with an internal capital-discipline measure (ROIC or EP). Neither measure alone is sufficient, and the resulting complexity is justified only if directors can explain each element.

## 10.5 Risk-Taking Incentives

### 10.5.1 Convexity, vega, and risk appetite

An executive's wealth is a function of firm value. If that function is linear (shares), she is exposed to downside as well as upside, and a risk-averse executive will tend to choose less risk than diversified shareholders would. If the function is convex (options), the executive gains from variance: the value of an option rises with volatility, and the sensitivity of option value to volatility is its **vega**. The executive can raise the value of her options by taking on projects that increase the volatility of firm value, even without raising its mean.

```
Vega (per 1.00 of σ)  =  S e^(–qT) φ(d₁) √T
Executive vega        =  number of options × option vega
```

Smith and Stulz explained how convex payoffs can offset risk aversion and induce hedging, and Core and Guay showed that portfolio vega and delta vary widely across firms. Empirical research finds that higher vega is associated with higher stock-return volatility, more R&D and leverage, and fewer diversifying acquisitions. Whether this is good or bad depends on the firm. For a firm whose managers underinvest in risky positive-NPV growth options, convexity may be exactly what the board wants. For a highly leveraged bank, it is dangerous.

**Example 10.6 – Vega, risk shifting, and inside debt.**
Using the Northgate inputs from Example 10.1, compute the value of the 400,000-option grant at different levels of volatility.

*Step 1: Option values.* Black-Scholes values per option for S = K = $50, T = 6.5, r = 4%, q = 1.5%: at σ = 20%, $12.26; at σ = 30%, $16.16; at σ = 45%, $21.76. Grant values: $4.90 million, $6.47 million, and $8.71 million.

*Step 2: Vega.* Vega per option at σ = 30% = 50 × e^(–0.0975) × φ(0.5949) × √6.5 = 45.355 × 0.3341 × 2.5495 = $38.65 per unit of σ, or $0.3865 per volatility point (1% change in σ). For the whole grant, 400,000 × $0.3865 = $154,600 per volatility point.

*Step 3: A value-neutral risk shift.* Suppose management can change strategy so that the volatility of equity returns increases from 30% to 45% with no change in expected firm value. Share price stays at $50 (for simplicity). The CEO's new grant increases in value by $8.71 million – $6.47 million = $2.24 million. Shareholders see no change in expected value, although they bear additional risk (and, if the firm has debt, creditors bear more of the downside).

*Step 4: Inside debt and neutrality.* Suppose the firm has D/E = 0.8 (market values). The CEO's pension and deferred compensation, which are unsecured claims on the firm and resemble debt, total $12 million, and her equity-linked holdings (shares and options, measured by dollar delta) are $30 million. Edmans and Liu showed that, with the CEO's inside debt-to-equity ratio equal to the firm's debt-to-equity ratio, she is indifferent to risk shifts that transfer value between claimholders. Neutral inside debt = 0.8 × $30 million = $24 million. Her actual ratio is 12 / 30 = 0.40, half the firm's ratio of 0.80, so she is biased toward shareholders and equity-like risk. A $12 million increase in inside debt would remove the bias.

*Step 5: Interpretation.* A CEO whose wealth is almost entirely equity-linked prefers risk shifts that favor equity over debt, increasing leverage, volatility, and payouts. Creditors price this behavior at issuance (Volume 1, Chapter 15), and regulators of banks, for whom the creditors include depositors and the public, address it directly.

### 10.5.2 Banks and the post-crisis response

The global financial crisis focused attention on pay in financial firms. A bank's debt-holders and depositors, backed by an implicit or explicit public guarantee, are not well placed to price risk-taking by management; a pay plan that rewards short-term revenue or returns on equity with large equity-based bonuses may induce risk accumulation with fat-tail losses borne by others. The Financial Stability Board's principles for sound compensation practices and the Basel supervisory expectations, together with national rules such as the EU capital-requirements directive's bonus cap and deferral rules, push toward: deferral of a large share of variable pay (often three to five years), payment of a significant portion in shares or contingent capital instruments, **malus** (reduction of unvested pay) and clawback for misconduct or material risk failures, risk-adjusted performance measures, and board risk committee involvement in setting pay. Studies of bank CEO pay before the crisis find mixed relationships between equity incentives and risk-taking and subsequent performance; the evidence that equity-heavy pay caused the crisis is not definitive, but the logic of convexity with limited liability is robust. A related idea is to tie deferred pay to the firm's debt (such as bail-in bonds) so that executives' payoffs include the downside faced by creditors.

### 10.5.3 Short-termism and horizon

A related concern is that executives manage reported results or stock price over short horizons at the expense of long-term value: cutting research and advertising, deferring maintenance, timing news around vesting dates, or using buybacks to meet EPS goals. Stein's model of myopic management shows how an executive whose compensation depends on the near-term stock price may choose projects that raise current market expectations. Bolton, Scheinkman, and Xiong show how option-heavy, short-vesting pay can encourage deliberate pursuit of short-term price run-ups. Remedies include longer vesting, holding periods after vesting, multi-year metrics, and incentives tied to measures that look ahead (strategic milestones, customer retention, product pipeline), though the last are harder to verify.

## 10.6 Clawbacks, Malus, and Holding Requirements

### 10.6.1 The logic of recovery

Incentive pay is paid on measured results. If the measurement later proves wrong because of a restatement, misconduct, or a hidden risk that materializes, the executive has been paid for performance that did not occur. Recovery provisions restore the link between pay and the true outcome. **Clawback** refers to recovering pay already received; **malus** to reducing or cancelling unvested or deferred pay before it is delivered. Both rely on the board's willingness to invoke them, which makes the design (triggers, scope, and discretion) as important as the policy statement.

In the United States, Section 304 of the Sarbanes-Oxley Act required reimbursement of bonuses and equity gains by the CEO and CFO after a restatement caused by misconduct, but it was seldom enforced and left no private right of action. Under Rule 10D-1, adopted by the SEC in 2022 and implemented through exchange listing standards from late 2023, listed companies must adopt policies to recover incentive-based compensation erroneously awarded to current and former executive officers over the three completed fiscal years before an accounting restatement. The recovery is *no-fault* (it applies whether or not the executive was responsible), is computed on a pre-tax basis, and the company cannot indemnify the executive. Boards may decline recovery only in narrow circumstances, such as when the cost of recovery would exceed the amount recovered. Many companies go beyond the rule with *discretionary* clawbacks for misconduct or reputational harm, and for non-financial triggers such as risk-management failures.

### 10.6.2 Design questions

| Design question | Options | Considerations |
|---|---|---|
| Trigger | Restatement only; misconduct; risk failures; reputational harm | Narrow triggers are certain but leave gaps; broad triggers need judgment |
| Fault | No-fault vs. fault-based | No-fault is simple and stops disputes about intent; fault-based can be fairer |
| Who | Named executive officers vs. all participants | Wider coverage deters but is costlier to administer |
| Pay covered | Cash bonus, performance equity, time-vested equity | Rule 10D-1 covers incentive-based pay only; stock-price-based pay needs reasonable estimation |
| Look-back | Three years (U.S. rule); longer for banks | Longer periods improve deterrence but require reliable record-keeping |
| Net or gross of tax | Gross (pre-tax) under U.S. rule | Executive bears the tax cost unless it can be reclaimed |

**Example 10.7 – Clawback after a restatement.**
Marlow Industrial's annual bonus has a target of $1.5 million. Payout is 0% if EPS is below $2.70; 50% at $2.70; 100% at $3.00; 200% at $3.30 or more; linear in between. Reported EPS was $3.20. A later restatement of revenue recognition reduces EPS for that year to $2.85.

*Step 1: Payout on reported EPS.* $3.20 lies between $3.00 and $3.30: payout % = 100% + (3.20 – 3.00) / (3.30 – 3.00) × 100% = 100% + 66.7% = 166.7%. Bonus paid = 1.667 × $1.5 million = $2.50 million.

*Step 2: Payout on restated EPS.* $2.85 lies between $2.70 and $3.00: payout % = 50% + (2.85 – 2.70) / 0.30 × 50% = 75%. Bonus that should have been paid = 0.75 × $1.5 million = $1.125 million.

*Step 3: Erroneously awarded amount.* $2.50 million – $1.125 million = $1.375 million, recoverable on a pre-tax basis. If the executive's combined tax rate was 40%, she retained $1.50 million after tax on the original bonus, so the after-tax cost of repayment to her is $1.375 million less any tax relief she can obtain (recovering a tax deduction in a later year is possible in some jurisdictions but is not guaranteed). Her net after-tax bonus on a correct calculation would have been 0.6 × $1.125 million = $0.675 million.

*Step 4: Interpretation.* A restatement that lowers EPS by about 11% ($0.35 on $3.20) removes 55% of the bonus ($2.50 million to $1.125 million) because of the steepness of the payout curve. Steep payout schedules amplify the incentive to manage earnings near thresholds and make the consequences of restatement large. A board should expect the effects when reviewing the plan: gradual curves and multi-year averaging reduce both the temptation and the cost of recovery.

### 10.6.3 Limits of clawbacks

Clawbacks work after the fact and only for events that are discovered, can be quantified, and fall within the look-back period. They do not repair the damage from a bad acquisition or excess risk that never involves a restatement. They can also induce executives to demand higher fixed pay to compensate for the risk of recovery. For that reason clawbacks are a complement to, not a substitute for, good metric design, strong controls (Chapter 9), and long vesting.

## 10.7 Governance of Pay: Say-on-Pay, Disclosure, and the Process

### 10.7.1 Say-on-pay

The United Kingdom introduced an advisory vote on the directors' remuneration report in 2002, and in 2013 added a *binding* vote on the forward-looking pay policy at least every three years. In the United States, the Dodd-Frank Act of 2010 requires listed companies to hold an advisory say-on-pay vote at least once every three years, with a vote every six years on the frequency; most large companies hold it annually. Other jurisdictions use binding or advisory votes of various kinds. Because U.S. votes are non-binding, their force comes from reputational and governance consequences: proxy advisors and institutional investors treat low support, commonly below 70% or 80%, as a trigger for engagement, a required board response, and possibly votes against compensation committee members. Companies that receive low support commonly respond by changing plan design, increasing disclosure, or adding performance conditions.

Research on say-on-pay finds that support is strongly related to simple measures of pay-performance alignment (pay relative to TSR and to peers), the use of problematic practices (such as excise tax gross-ups or repricing of options), and the recommendation of the proxy advisor. The evidence on whether say-on-pay reduces pay levels is mixed; there is better evidence that it reduces the incidence of the most criticized practices and that it increases boards' responsiveness to investors.

**Example 10.8 – Reading the vote and the pay ratio.**
At Northgate's last meeting, 200 million shares were outstanding and 88% voted. The say-on-pay proposal received 62% of votes cast. The CEO's reported total compensation was $14.2 million and the median employee's annual pay was $62,000.

*Step 1: Votes cast.* 200,000,000 × 0.88 = 176,000,000.

*Step 2: Votes for and against.* For = 0.62 × 176,000,000 = 109,120,000. Against = 176,000,000 – 109,120,000 = 66,880,000.

*Step 3: Shift required to reach 70% support.* The target is 0.70 × 176,000,000 = 123,200,000 votes for. Required shift = 123,200,000 – 109,120,000 = 14,080,000 votes, about 21% of the "against" votes (14.08 / 66.88 = 21.1%) or 8% of all votes cast. Because institutional holders cast most of the "against" votes, engagement with a small number of holders could achieve this.

*Step 4: Pay ratio.* $14,200,000 / $62,000 = 229 to 1.

*Step 5: Interpretation.* The pay ratio by itself is a weak indicator: it depends on the workforce composition (a firm with many outsourced or part-time workers has a different median), the volatility of equity awards in the numerator, and the geographic distribution of employees. The ratio's value is as a prompt to examine internal pay structure and to compare year to year within the same firm. The more useful analysis for the committee is the *pay-for-performance* comparison: realizable pay over three to five years against TSR relative to peers, which in Northgate's case shows high payouts despite sector-average returns.

### 10.7.2 Disclosure and the pay-versus-performance table

The U.S. rule requiring a table of "compensation actually paid" against TSR, peer-group TSR, net income, and a company-selected measure helps shareholders compare. Its weakness is the methodology for "actually paid" (which counts changes in the fair value of equity awards) and the lack of a single standard, but it moves the debate from grant-date value to realizable pay. In other jurisdictions, regulators ask for a similar link and for clearer discussion of the performance outcomes achieved.

### 10.7.3 Compensation committee process

A strong process has six elements: an independent compensation committee with the authority to hire its own consultant (and with a consultant free from other conflicting work for management); a defined peer group and philosophy approved at the start of the cycle; goal-setting that ties targets to the board-approved strategic plan and to external expectations; scenario analysis showing payouts under low, target, and high outcomes (including the realizable value of equity at several share prices, as in Example 10.1); a pre-specified policy on adjustments; and a record of discretion exercised, with reasons. Shareholder engagement before the proxy season, rather than after a failed vote, is the most reliable way to avoid surprises.

### 10.7.4 Severance and change in control

Severance and change-in-control provisions affect incentives at the critical points of a CEO's tenure. Double-trigger vesting (accelerated only if the executive is terminated after a change in control) is regarded as better practice than single-trigger vesting (accelerated on the transaction itself), which can induce executives to favor a sale. Large cash payments at termination for poor performance undermine the credibility of the performance link. Excise-tax gross-ups, retirement benefits that exceed those of other employees, and "evergreen" agreements are widely disfavored.

### 10.7.5 Putting it together: a design checklist

| Question | What good looks like |
|---|---|
| What decisions do we want the CEO to make differently? | Named, specific, tied to the strategic plan |
| Does the metric reflect what she controls? | Relative TSR for market-exposed outcomes; ROIC/EP for capital allocation; operating metrics for execution |
| Is the metric hard to game? | Pre-agreed adjustment policy; multi-year measurement; capital includes goodwill and leases |
| Is the horizon long enough? | Three-year performance period plus holding period beyond vesting |
| Is the downside real? | Meaningful equity ownership, malus and clawback, no repricing |
| Are risk incentives balanced? | Check vega and inside debt against leverage and strategy |
| Will the process survive scrutiny? | Independent committee, disclosed rationale, investor engagement |

## Case Study

*Illustrative case; Brightwell Energy Services and all individuals are fictional.*

**Brightwell Energy Services** supplies drilling and well-servicing equipment to oil and gas producers. Its market capitalization is $6 billion, its net debt is $2.4 billion (net debt to EBITDA of 2.2 times), and its returns are highly cyclical: ROIC ranged from –2% in the last downturn to 16% at the peak, averaging 8% against a WACC of 9.5%. CEO Dana Whitfield joined five years ago from a larger competitor.

Her pay for last year included a $1.3 million salary, a cash bonus of $3.9 million (150% of target; the metric was EBITDA growth against budget), and long-term awards with a grant-date value of $10.5 million: 60% stock options with a seven-year term, 40% time-vested restricted stock units. Whitfield holds shares and RSUs worth $18 million and options with a dollar delta of $22 million. Her pension and deferred compensation total $5 million.

During the last cycle upswing, Brightwell's stock rose 85% in 18 months, as did those of its peers. Whitfield's options, granted near the trough, grew from a grant-date value of $6 million to a realizable intrinsic value of $31 million. The same year the company committed $900 million to a fleet-expansion program and acquired a competitor at 11.5 times EBITDA, against a historical sector average of about 8 times. When the cycle turned, EBITDA fell 40%, leverage rose to 3.4 times, the covenant limit was 3.75, and the stock lost 55% of its value. The board agreed to re-price Whitfield's underwater options and to grant a one-time retention award of $4 million in RSUs "to ensure continuity".

At the annual meeting, 41% of votes were cast against say-on-pay. Two large holders have written to the compensation committee chair, Arturo Delgado. They ask the committee to explain why options struck near the trough, without a performance hurdle, are an appropriate reward for a cyclical firm; why the EBITDA metric ignores the capital deployed to produce it; why option re-pricing was needed when peers' stock also fell; and why debt-holders' interests were not considered when the capital program was approved. A third holder, a credit-oriented fund, points out that Brightwell's bonds fell more than the equity of its better-capitalized peers.

Delgado has asked the committee's consultant for a redesigned plan. The consultant proposes: replacing options with performance shares measured on a three-year average of ROIC and relative TSR against a peer group of eight oilfield services firms; changing the bonus metric from EBITDA growth to economic profit with a cumulative multi-year bank; requiring Whitfield to hold 50% of net vested shares for two years after retirement; adding a debt-like element by paying 20% of deferred pay in a long-dated, unsecured deferred cash plan; and adopting a clawback covering both restatements and "material risk management failures". Whitfield replies that relative TSR may punish her for events she cannot control and that economic profit will make her reluctant to invest at the bottom of the cycle, when assets are cheap.

**Discussion Questions**

1. Compute the Black-Scholes value (inputs of your choosing: S = K = $40, T = 5, σ = 40%, r = 4%, q = 0) and delta of an at-the-money option, then explain why Whitfield's trough-priced options produced a large payout in an industry-wide upswing. What does the informativeness principle suggest about indexing exercise prices to peers or the sector?
2. Evaluate the proposed metric architecture. For each of ROIC, relative TSR, and economic profit, explain how it could mislead in a cyclical business and what design adjustments (cyclical averaging, carry-forward banks, capital definition) would improve it. Address Whitfield's two objections.
3. Using the ideas of vega and inside debt, assess the risk-taking incentives of the current plan given leverage of 2.2 to 3.4 times EBITDA and the covenant constraint. Estimate roughly the inside-debt-to-equity ratio of Whitfield's package and compare it with the firm's debt-to-equity ratio. What change in pay design would reduce the bias toward risk?
4. Assess the re-pricing and the retention award from the managerial-power and optimal-contracting perspectives. What process should the committee follow in responding to the say-on-pay result, and how should it communicate with the three investor groups whose concerns differ?

## Key Takeaways

- Executive pay can be understood as optimal contracting under agency problems and as an outcome of managerial influence over the board. Use both lenses and test each design feature against the question: would it survive if the executive had no influence on the committee?
- The informativeness principle says to pay on measures that carry information about the executive's actions and to filter out common shocks; the multitask problem says that strong incentives on measurable tasks starve unmeasured ones.
- Options cost the firm more than they are worth to an undiversified executive, yet they deliver about twice the dollar sensitivity per dollar of reported value as stock, as Example 10.1 shows (2.03 times). Judge awards by delta and vega, not by headline value.
- Realizable pay can differ widely from grant-date pay; show both, at several share prices, before judging alignment.
- Pay-performance sensitivity per $1,000 of shareholder value (Example 10.2: $5.44) measures alignment; large dollar amounts can still correspond to small fractions of firm value.
- TSR is a clean shareholder measure but is dominated by market, sector, and multiple changes (Example 10.5: a de-rating cut annualized TSR by 4.5 points). Relative TSR helps but depends on peer choice, rank-based cliffs, and caps.
- ROIC levels mislead in both directions (Example 10.4): high-ROIC managers reject good projects and low-ROIC managers accept bad ones. Economic profit, with a capital charge and multi-year measurement, aligns incentives with NPV.
- Convex payoffs reward volatility (vega), and inside debt offsets the equity bias; neutrality arises when the executive's inside debt-to-equity ratio matches the firm's. Banks require extra safeguards: deferral, malus, clawback, and risk-adjusted metrics.
- Clawbacks restore the link between measured and true performance, but steep payout curves magnify both the incentive to manage earnings and the cost of restatement (Example 10.7), and clawbacks cannot substitute for sound metrics and strong controls.
- Say-on-pay, disclosure, and a disciplined committee process, including engagement with investors before a vote, turn pay design from a one-time decision into a governed system.

## Review Questions

1. Contrast the optimal-contracting and managerial-power views of executive pay. Give two observed practices that each view explains better.
2. State the informativeness principle and the multitask problem. How does each bear on the choice between EPS growth and relative TSR?
3. Why do executives value options at less than Black-Scholes cost? What follows for how boards should size option grants?
4. Compare stock options, RSUs, and performance share units in terms of retention, pay-performance sensitivity, risk incentives, and accounting treatment.
5. Explain pay-performance sensitivity. Why might a CEO with a high dollar delta still be indifferent to a project that has a modest negative effect on shareholder value?
6. List three weaknesses of absolute TSR as a performance metric and explain how relative TSR addresses some of them and creates others.
7. Why can a ROIC-level bonus lead to under-investment in some firms and over-investment in others? How does economic profit change the result?
8. Define vega and explain how an executive's option portfolio may encourage risk shifting. What does the Edmans-Liu neutrality condition for inside debt require?
9. Distinguish clawback from malus. What are the main features of the U.S. Rule 10D-1 regime, and what are its limits?
10. A say-on-pay proposal receives 62% support. Describe the process the compensation committee should follow, and what changes in design or disclosure you would expect.

## Problems

**Problem 10.1.** A company with share price $40 plans to grant 250,000 at-the-money options. Use S = K = 40, T = 5 years, σ = 35%, r = 3%, q = 1%. Compute the Black-Scholes value per option, the grant-date fair value, the option delta, and the dollar delta of the grant.

**Problem 10.2.** A CEO holds 100,000 shares and 200,000 options with a delta of 0.55. The share price is $80 and the market capitalization is $8 billion. Compute the dollar delta and the pay-performance sensitivity per $1,000 of shareholder value. By how much does her wealth change if the share price rises 5%, assuming delta is constant?

**Problem 10.3.** A relative-TSR plan has five firms in the comparison (the company and four peers). Percentile = (firms ranked below) / 4. Payout: 0% below the 25th percentile; 50% at the 25th; 100% at the 50th; 150% at the 75th; 200% at the 100th (linear in between). Assuming each rank is equally likely, compute (a) the expected payout and the probability of zero payout, and (b) the expected payout if the plan instead pays 0% below the 50th percentile, 100% at the 50th, and 200% at the 100th (linear in between).

**Problem 10.4.** A division has invested capital of $2,000 million, NOPAT of $360 million, and a cost of capital of 10%. A project requiring $50 million would add perpetual NOPAT of $6 million. Compute the project's NPV, the division's ROIC before and after, and the change in economic profit. Would a manager paid on ROIC level accept it? On economic profit?

**Problem 10.5.** A stock begins at $30 with EPS of $2.00 (P/E = 15). EPS grows 6% a year for two years. Dividends are $0.80 at the end of each year. Compute annualized TSR over two years if the P/E at the end of year 2 is (a) 15 and (b) 12.

**Problem 10.6.** An executive holds 500,000 at-the-money options on a stock with S = K = $60, T = 5, r = 4%, q = 0. Compute the Black-Scholes value per option and the position value at σ = 25% and at σ = 40%. What is the gain to the executive if a value-neutral strategy raises volatility from 25% to 40%?

**Problem 10.7.** An annual bonus has a target of $2.0 million. Payout is 50% at EPS $4.00, 100% at $4.50, 200% at $5.00 or above, and 0% below $4.00 (linear in between). Reported EPS was $4.90, later restated to $4.40. Compute the bonus paid, the bonus that should have been paid, and the amount recoverable.

**Problem 10.8.** A company has 150 million shares and 80% turnout. The say-on-pay proposal received 58% of votes cast. (a) How many votes were cast for and against? (b) How many votes must shift from against to for to reach 70% support? (c) The CEO's reported pay is $9.6 million and the median worker earns $48,000; compute the pay ratio.

### Answers to Selected Problems

- **10.1.** Value per option = $12.93; grant value = 250,000 × 12.93 = $3.23 million; delta = e^(–0.01×5) × N(d₁) = 0.6641; dollar delta = 250,000 × 0.6641 × $40 = $6.64 million.
- **10.2.** Dollar delta = 100,000 × $80 + 200,000 × 0.55 × $80 = $8.0 million + $8.8 million = $16.8 million. PPS = 1,000 × 16.8 / 8,000 = $2.10 per $1,000. A 5% rise changes wealth by about 5% × $16.8 million = $0.84 million.
- **10.3.** (a) Percentiles are 100%, 75%, 50%, 25%, 0% with payouts 200%, 150%, 100%, 50%, 0%; the mean is (2.0 + 1.5 + 1.0 + 0.5 + 0) / 5 = 1.00 (100% of target); probability of zero = 1/5 = 20%. (b) Payouts: 200%, 150%, 100%, 0%, 0%; the mean is 450% / 5 = 90%; probability of zero = 40%.
- **10.4.** NPV = 6 / 0.10 – 50 = +$10 million. ROIC before = 360 / 2,000 = 18.0%; after = 366 / 2,050 = 17.85%. EP before = 360 – 200 = $160 million; after = 366 – 205 = $161 million, +$1 million per year (PV = 1 / 0.10 = $10 million, equal to the NPV). A ROIC-level manager would reject (ROIC falls); an EP manager would accept.
- **10.5.** EPS at year 2 = 2.00 × 1.06² = $2.2472. (a) Price = 2.2472 × 15 = $33.71; TSR solves –30 + 0.8 / (1 + r) + (0.8 + 33.71) / (1 + r)² = 0, so r = 8.59%. (b) Price = 2.2472 × 12 = $26.97; r = –2.45%.
- **10.6.** At σ = 25%: $18.19 per option, $9.09 million. At σ = 40%: $24.71 per option, $12.36 million. Gain = $3.26 million.
- **10.7.** Paid: 100% + (4.90 – 4.50) / 0.50 × 100% = 180%, so $3.6 million. Should have been paid: 50% + (4.40 – 4.00) / 0.50 × 50% = 90%, so $1.8 million. Recoverable = $1.8 million (pre-tax).
- **10.8.** (a) Votes cast = 120,000,000; for = 69,600,000; against = 50,400,000. (b) 70% needs 84,000,000 for, so 14,400,000 votes must shift. (c) 9,600,000 / 48,000 = 200 to 1.
