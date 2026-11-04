# Chapter 12: Behavioral Corporate Finance and Managerial Biases

## Learning Objectives

- Distinguish the two branches of behavioral corporate finance (irrational investors facing rational managers, and rational markets facing biased managers) and explain which implications each has for financing and investment decisions.
- Identify the main managerial biases (overconfidence, optimism, anchoring, framing, loss aversion, sunk-cost escalation and myopia) and trace how each distorts capital budgeting, acquisitions and financing.
- Quantify bias effects with numerical models: shrinkage and the winner's curse, anchoring-and-adjustment, prospect-theory evaluation of escalation, narrow framing, market-timing transfers and quasi-hyperbolic discounting.
- Build reference-class ("outside view") forecasts and adjust a capital budget for the planning fallacy.
- Design debiasing techniques and decision processes, including premortems, red teams, pre-commitment, calibration training and stage-gated funding.
- Evaluate organizational design, incentives and governance choices that make good decisions robust to individual bias.

## Opening Vignette

*Illustrative scenario. Brightwater Logistics is a fictional company.*

Brightwater Logistics, a regional freight and warehousing firm, had a record of steady returns and a CEO, Marta Quillon, who was widely admired for a string of successful acquisitions. In the year in question, her team proposed the largest project in the firm's history: a $200 million automated distribution hub. The capital committee's model showed an NPV of $76 million at the company's 10 percent hurdle rate. The projections assumed construction in three years, a ramp to $52 million of annual cash flow, and a ten-year operating life. Everyone on the committee had seen the model. Nobody had seen the history of similar projects.

Over the following three years, the project cost $260 million, a year late. Customer volumes ramped slowly. At the first post-completion review, the hub's cash flow was $41 million a year, not $52 million. The team's response was predictable: the delay was due to supply chain problems that no one could have foreseen, the cost overrun reflected inflation, and the lower volumes were temporary. A further $35 million was approved to expand capacity so that the hub would "reach scale." When the board eventually asked why the original forecast had been so favorable, the project sponsor pointed to the model's internal consistency. It had been audited three times.

Brightwater's finance team later reviewed the firm's last twenty major projects. Seventeen had finished late, fourteen had overrun their budgets, and the average realized cash flow was 15 percent below the plan. Every one of those projects had been approved on a positive NPV. The firm did not have a valuation problem. It had a human-judgment problem: optimistic forecasts, anchoring on the budget, escalation of commitment after sunk costs, and a decision process that rewarded the sponsor for advocacy rather than accuracy.

This chapter examines these biases systematically, shows how to measure their financial effects, and describes how organizations can build decision processes that do not depend on any individual being unbiased.

## 12.1 Two Branches of Behavioral Corporate Finance

### 12.1.1 The standard model and its behavioral amendments

Volume 1 developed corporate finance on the assumption that managers maximize shareholder value, forecast without systematic error, and discount cash flows at a rate that reflects risk (Volume 1, Chapters 6, 10 and 11). The standard framework does not require markets to be perfectly efficient, but it does require that managers act as value-maximizing agents. Behavioral corporate finance asks what changes when one or both assumptions fail.

Baker, Ruback and Wurgler, in their survey of the field, organized the literature into two approaches. They are worth keeping distinct, because they lead to different advice.

**Approach 1: Irrational investors, rational managers.** Markets can misprice securities, because of limits to arbitrage (Shleifer and Vishny) and investor sentiment. Managers are assumed to understand this and to respond: issuing equity when it is overvalued, repurchasing when it is undervalued, paying dividends when investors place a premium on them (the "catering" theory of Baker and Wurgler), and timing mergers. The firm is run for the benefit of long-term shareholders, but market prices are noisy signals.

**Approach 2: Rational investors, irrational managers.** Markets price assets correctly, but managers are subject to the psychological biases documented in the decision-making literature, such as overconfidence, anchoring, loss aversion, and escalation. The firm's decisions deviate from value maximization because of managerial cognition, not because of market mispricing.

Real life combines both. This chapter treats Approach 2 as the main subject, since it directly addresses the quality of the decisions that finance leaders make, and treats Approach 1 mainly as the problem of market timing in Section 12.5.

### 12.1.2 Why bias is predictable and costly

Psychologists distinguish errors that are random from errors that are systematic. Random error averages out across many decisions. Bias does not: it pushes in the same direction every time. Kahneman, Tversky and many successors documented that people use heuristics (rules of thumb) such as availability, representativeness, and anchoring and adjustment, and that these produce predictable departures from the rational benchmark. Financial decisions are fertile ground for such errors because they are made under uncertainty, on the basis of forecasts, with ambiguous feedback arriving years later.

The managerial importance is that biased decisions are not noise around a correct answer. Because they are systematic, they can be modeled, measured and, to some degree, corrected. Most of this chapter is about doing exactly that.

### 12.1.3 A taxonomy of biases for finance leaders

| Bias | Core idea | Typical corporate manifestation | Corrective principle |
|---|---|---|---|
| Overconfidence | Overestimating the precision of one's knowledge or the probability of success | Overpaying for acquisitions; narrow forecast ranges; excess investment | Calibration; wider ranges; outside view |
| Optimism and the planning fallacy | Expecting better-than-typical outcomes; ignoring base rates | Overruns, delays, optimistic synergies | Reference-class forecasting |
| Anchoring | Insufficient adjustment from an initial number | Bids anchored on asking price; budgets anchored on last year | Independent estimates before exposure to anchors |
| Framing and narrow framing | Evaluating decisions in isolation or by their description | Rejecting positive-NPV risky projects individually | Aggregate decisions at the portfolio level |
| Loss aversion | Losses weigh more than equal gains | Hurdle rates inflated above risk-adjusted rates; avoidance of write-offs | Evaluate on incremental value; pre-set rules |
| Sunk-cost fallacy and escalation | Past costs influence future decisions | Throwing good money after bad | Incremental analysis; kill criteria; independent review |
| Confirmation bias | Seeking evidence that supports the existing view | One-sided due diligence | Red teams; disconfirming tests |
| Hindsight bias | Believing outcomes were predictable after the fact | Weak learning from post-audits | Decision journals recorded before outcomes |
| Myopia and present bias | Overweighting near-term outcomes | Cutting R&D to meet earnings | Longer-horizon metrics; governance |
| Groupthink | Suppression of dissent for cohesion | Unchallenged proposals in committees | Structured dissent; anonymous voting |

## 12.2 Overconfidence and Optimism

### 12.2.1 Three kinds of overconfidence

Moore and Healy distinguish three forms. *Overestimation* means thinking one's performance is better than it is. *Overplacement* means believing oneself better than others. *Overprecision* means excessive certainty about the accuracy of one's beliefs, shown in confidence intervals that are too narrow. Overprecision is the most persistent and the most relevant to finance, since valuation is a forecast with a distribution of outcomes, and a point estimate with too narrow an interval leads to excessive commitment.

Optimism is distinct from overconfidence, though they interact. Optimism is a belief that outcomes will be better than they are on average; overconfidence is a belief that one's estimates are more accurate than they are. A manager can be both: confident that a project will deliver $52 million a year, and wrong about both the level and the uncertainty.

### 12.2.2 Evidence from corporate decisions

Richard Roll's 1986 hubris hypothesis explained takeovers as the result of acquirers overestimating their ability to find value, so that they pay too much and the winners' premia are in part transfers from acquirer to target shareholders. Heaton (2002) analyzed how managerial optimism can lead to overinvestment when managers believe the market undervalues the firm, and to a preference for internal funds over external financing. Malmendier and Tate measured overconfidence in a practical way: they identified chief executives who held in-the-money stock options until expiry, which is inconsistent with prudent diversification, and found that such executives made more acquisitions, especially diversifying deals, and relied more on internal financing, with investment more sensitive to cash flow. Their approach illustrates a key point for finance: overconfidence is revealed by behavior, and its consequences are observable in capital allocation.

Surveys of finance executives, such as those that ask for 80 percent confidence intervals of the following year's market return, have found that realized values fall inside the stated intervals far less often than 80 percent. The overprecision finding is robust across domains: people's "90 percent" ranges contain the truth perhaps half the time.

### 12.2.3 Why overconfidence is systematically selected

Overconfident managers may be rewarded by promotion processes. They advocate more convincingly, take on ambitious projects, and are more likely to be in positions of authority. Goel and Thakor have modeled how competition for promotion can favor overconfident managers. The result is that the people who make large capital decisions are not a random sample: they may be more optimistic than average. At the firm level, boards that admire "decisive" CEOs and projects that must be presented as winners to be funded compound the problem.

### 12.2.4 The winner's curse in capital budgeting

Overconfidence interacts with a statistical effect that does not depend on psychology at all. When a firm chooses projects by selecting those with the highest estimated NPV, it systematically selects projects whose estimates contain positive error. This is the winner's curse (a term used by Thaler in the context of auctions), also known as selection bias or regression to the mean. A manager who understands it shrinks the estimates toward the mean; an overconfident manager treats the selected estimates as unbiased.

Suppose true project NPVs are normally distributed across opportunities with mean zero and standard deviation σ_T, and the estimate is the true NPV plus independent error with standard deviation σ_E. The expected true NPV given an estimate x is:

```
E[true NPV | estimate = x] = x × σ_T² / (σ_T² + σ_E²)
```

The factor σ_T² / (σ_T² + σ_E²) is the shrinkage coefficient. The larger the forecast error relative to the dispersion of true values, the less the estimate should be trusted. An overconfident forecaster, who believes σ_E is smaller than it is, uses too large a coefficient.

**Example 12.1 – Winner's curse and shrinkage in project selection.**

A firm evaluates many projects. True NPVs across opportunities are N(0, 20²) in $ millions (a prior that most projects are near zero NPV, which is realistic in competitive markets). Forecast errors are N(0, 20²), independent of the true value.

Step 1: shrinkage coefficient with the correct error.
```
k = 20² / (20² + 20²) = 400 / 800 = 0.50
A project with estimated NPV +$30m has expected true NPV = 0.50 × 30 = $15m
```
Step 2: an overconfident team believes its error SD is only 10.
```
k_believed = 400 / (400 + 100) = 0.80
Believed expected true NPV = 0.80 × 30 = $24m
Overstatement = 24 − 15 = $9m, or 60% above the correct value
```
Step 3: simulation. To see the effect on a whole selected portfolio, we simulate 100,000 projects with these distributions (seed 42) and select by estimated NPV.

| Selection rule | Share of projects selected | Mean estimated NPV | Mean true NPV | Share with true NPV < 0 |
|---|---|---|---|---|
| Accept if estimate > 0 | 50.0% | $22.5m | $11.2m | 25.6% |
| Top 20% by estimate | 20.0% | $39.6m | $19.8m | 10.3% |
| Estimate > $30m | 14.4% | $44.6m | $22.2m | 7.4% |

Analytic check for the first row: with σ_T = 20 and total SD of estimate √800 = 28.28, E[estimate | estimate > 0] = 28.28 × √(2/π) = $22.6m, and E[true NPV | estimate > 0] = 0.5 × 22.6 = $11.3m, in line with the simulation.

Interpretation: In every case, the realized NPV is about half the estimate. The firm that treats the sum of estimated NPVs as its expected value gains has overstated it by a factor of two even if no one is dishonest. The effect gets worse the more projects the firm screens and the higher the selection bar, since the highest estimates are the most contaminated by error. The practical remedies are to shrink estimates before ranking, to evaluate forecaster track records (so that σ_E is estimated rather than assumed), and to require independent validation for the largest estimates, since those are the ones most likely to be wrong.

### 12.2.5 Managerial implications

- Treat a forecast as a distribution, not a number. Ask for ranges and test whether the proposer's past ranges contained the outcomes.
- Estimate forecast error from the firm's own post-audit data and use it to shrink.
- Be aware that the more selective the pipeline, the larger the winner's curse. A firm with a hundred proposals and a hurdle of 25 percent IRR will likely accept the most error-contaminated numbers.
- Separate the person who prepares the forecast from the person who will be evaluated on the result when possible.

## 12.3 Anchoring, Adjustment and Framing

### 12.3.1 How anchors work

Tversky and Kahneman showed that people estimating an uncertain quantity start from an initial value, the anchor, and adjust, but adjust insufficiently. Even irrelevant anchors, such as a random number from a wheel, shift subsequent estimates. Anchors in business are rarely random: last year's budget, the asking price of the seller, the current share price, the 52-week high, a competitor's bid, or the first number said in a negotiation.

A simple model describes the effect. The final estimate is a weighted average of the anchor A and the independent estimate I:

```
Final = w × A + (1 − w) × I
```

where w is the anchoring weight, between 0 and 1. If the decision-maker were fully rational, w would be zero when the anchor carries no information. Experiments suggest w is positive and sometimes large, especially when the decision-maker is uncertain or time-pressured.

### 12.3.2 Anchoring in acquisitions

Takeover premia illustrate anchoring. Baker, Pan and Wurgler found that offer prices cluster around the target's recent peak price, and that bids at or above that reference point are more likely to be accepted, even though a past peak is not a fundamental value. In deal negotiations, the seller's opening ask, the investment banker's "football field" range and the prior transaction multiples in the sector all serve as anchors.

**Example 12.2 – Anchoring and the walk-away price.**

Brightwater is considering acquiring a smaller carrier. Its own DCF valuation of the target's standalone equity is $65 per share (Volume 1, Chapter 21). It estimates synergies worth $8 per share. The maximum rational price, the walk-away, is therefore 65 + 8 = $73 per share. There are 40 million target shares. The seller's advisers publicly signal a price of $95 per share. Suppose that the decision-maker's bid is formed by anchoring and adjustment with weight w.

Step 1: bid as a function of w.
```
Bid = w × 95 + (1 − w) × 65
```

| Anchoring weight w | Bid ($/share) | Bid minus walk-away ($73) |
|---|---|---|
| 0.00 | 65.00 | −8.00 |
| 0.10 | 68.00 | −5.00 |
| 0.20 | 71.00 | −2.00 |
| 0.35 | 75.50 | +2.50 |
| 0.50 | 80.00 | +7.00 |

Step 2: the weight at which the bid equals the walk-away.
```
w* = (73 − 65) / (95 − 65) = 8 / 30 = 0.267
```
Step 3: dollar cost of anchoring at w = 0.35.
```
Overpayment = (75.50 − 73.00) × 40 million = $100 million
```
Interpretation: An anchoring weight of only about 27 percent is enough to consume the entire synergy value and begin transferring wealth to the seller. At 35 percent, the buyer overpays by $100 million. The result is a plain dollar number that reflects a modest cognitive tendency. This example explains why disciplined acquirers set their walk-away price before contact with the seller or banker, record it in writing, require the board's approval to exceed it, and examine independently whether any claimed synergy is real. It also shows why the first number in a negotiation has value: a seller who opens at $95 has pulled the final price up even if it is never accepted.

### 12.3.3 Anchoring in budgeting and targets

Budgets anchor on the previous year's number. Managers who build next year's plan as "last year plus 5 percent" are anchoring, and divisions with high anchors keep them. Zero-based budgeting, which requires each item to be justified from scratch, reduces the anchor at the cost of effort. Targets anchored on aspiration, such as "15 percent growth," change the way the downside is judged: a result of 8 percent is "a miss" and invites risky efforts to close the gap.

### 12.3.4 Framing effects

Framing refers to the sensitivity of choices to the description of the same facts. A restructuring described as "an 85 percent chance of keeping the company intact" attracts support that "a 15 percent chance of failure" does not. In finance, framing influences hurdle rates, mental accounting (treating a windfall differently from regular earnings), and the choice between presenting a proposal as a gain relative to the status quo or as a loss avoided. The best discipline is to restate each proposal in at least two frames and check whether the decision changes. If it does, the decision is being driven by presentation.

## 12.4 Loss Aversion, Sunk Costs and Escalation of Commitment

### 12.4.1 Prospect theory in brief

Kahneman and Tversky's prospect theory replaces expected utility with a value function defined over gains and losses relative to a reference point. The function is concave for gains, convex for losses, and steeper for losses than for gains (loss aversion). A common parameterization is:

```
v(x) = x^α             for x ≥ 0
v(x) = −λ × (−x)^α     for x < 0
with α ≈ 0.88 and λ ≈ 2.25
```

Three consequences matter for finance. First, people are risk-averse in gains but risk-seeking in losses: a sure loss is less attractive than a gamble with the same expected loss. Second, losses loom larger than gains, so a 50-50 gamble must offer roughly twice as much upside as downside to be accepted. Third, the reference point matters: the same outcome is treated as a gain or loss depending on the starting point, and managers' reference points are often the budget, the previous result, or the break-even of the original investment.

### 12.4.2 The sunk-cost fallacy

A sunk cost is a cost that has been incurred and cannot be recovered whatever the firm does now. Rational decisions consider only incremental cash flows (Volume 1, Chapter 6): continue if the expected present value of future benefits exceeds the future costs of obtaining them. Yet experiments by Arkes and Blumer showed that people who have invested more are more likely to continue with a failing course of action, and Staw's work on escalation of commitment documented how decision-makers who are personally responsible for a failing project often invest further to justify their earlier choice. The causes include loss aversion (stopping makes the loss "real"), self-justification (admitting error damages reputation), project completion bias, and agency problems (a manager's career is attached to the project).

**Example 12.3 – Escalation: incremental analysis versus the loss frame.**

Brightwater has spent $120 million on an automated hub that is behind schedule. Completing it requires another $40 million. Management's updated view is that there is a 25 percent chance the hub will succeed, in which case it will be worth $150 million in present value at completion, and a 75 percent chance of failure, in which case it will be worth zero.

Step 1: incremental (rational) analysis. The $120 million is sunk.
```
E[benefit of completion] = 0.25 × 150 = $37.5 million
Incremental cost         = $40 million
Incremental NPV          = 37.5 − 40 = −$2.5 million → stop
```
Step 2: the loss frame. The manager has a mental account that includes the $120 million. If the project is stopped, the account closes at −$120 million. If it continues, the account closes at 120 + 40 = −$160 million with probability 0.75 (failure) or −160 + 150 = −$10 million with probability 0.25 (success).

Expected final position: stop −$120 million; continue 0.25 × (−10) + 0.75 × (−160) = −2.5 − 120 = −$122.5 million. In dollars, stopping is better by $2.5 million, which matches Step 1.

Step 3: prospect-theory evaluation of the account (α = 0.88, λ = 2.25).
```
v(−120) = −2.25 × 120^0.88 = −152.01
v(−10)  = −2.25 × 10^0.88  = −17.07
v(−160) = −2.25 × 160^0.88 = −195.80
V(stop)     = −152.01
V(continue) = 0.25 × (−17.07) + 0.75 × (−195.80) = −4.27 − 146.85 = −151.12
```
The prospect-theory value of continuing (−151.12) exceeds that of stopping (−152.01).

Interpretation: Even though continuing destroys $2.5 million in expected value, a decision-maker who frames the choice as a loss account and has the standard curvature prefers to gamble. The margin in this illustration is small because the parameters are conservative, but real escalation is typically reinforced by other forces that this value function omits: reputational cost of admitting failure, accounting write-offs that the manager wants to defer, and sponsors' career incentives. The numerical lesson is that the pull toward continuing is greatest exactly when the odds are poor but there is some chance of recovering the account, which is the profile of many failing projects. The remedy is procedural: review go/no-go decisions on incremental analysis only, preferably by someone who did not approve the original investment, and agree on explicit kill criteria in advance.

### 12.4.3 Narrow framing and hurdle-rate inflation

Loss aversion also shows up when managers evaluate each project separately, a pattern Kahneman and Lovallo called *narrow framing* or "bracketing." A manager responsible for a divisional budget who fears a visible loss on any single project may reject positive-NPV projects with a risk of loss, even though the firm holds a portfolio in which independent risks diversify (Volume 1, Chapters 8 and 10). Graham and Harvey's surveys of corporate managers suggest firms often use hurdle rates well above their cost of capital; some of the gap is justified by real options and estimation error, but some probably reflects such behavioral caution.

**Example 12.4 – The cost of narrow framing.**

A division head can undertake up to ten independent identical projects. Each yields +$30 million with probability 0.6 and −$20 million with probability 0.4. The head is loss-averse with λ = 2.5 and evaluates each project on its own.

Step 1: expected value and loss-averse value of one project.
```
E[NPV]    = 0.6 × 30 + 0.4 × (−20) = 18 − 8 = +$10 million
Perceived = 0.6 × 30 − 2.5 × 0.4 × 20 = 18 − 20 = −$2 million → reject
```
Step 2: the portfolio view. With k successes out of ten, the total is 30k − 20(10 − k) = 50k − 200, which is positive when k ≥ 5.
```
Expected total = 10 × 10 = $100 million
Standard deviation of one project = √(0.6×30² + 0.4×20² − 10²) = √(540 + 160 − 100) = √600 = $24.5 million
Standard deviation of ten = 24.5 × √10 = $77.5 million
P(total > 0) = P(k ≥ 5) = 83.4%
```
Step 3: loss-averse value of the portfolio. Computing the distribution of the total exactly gives E[gains] = $103.44 million and E[losses] = $3.44 million.
```
Perceived value of portfolio = 103.44 − 2.5 × 3.44 = $94.84 million → accept
```
Interpretation: The same manager who rejects each project in isolation would accept the ten as a bundle. Narrow framing costs the firm $100 million of expected value. The practical implication is to require that risky positive-NPV projects be evaluated against the firm's total portfolio (or at least a division-wide portfolio), to give division heads a hurdle rate based on systematic risk rather than total project variance, and to reward decisions by the quality of the process, not by the outcome of individual bets. A firm that punishes every failed project will end up with a pipeline of safe projects.


## 12.5 Market Timing, Mispricing and Managerial Myopia

### 12.5.1 Financing as a response to mispricing

Under the first behavioral approach, managers are rational and markets are not. If the share price differs from intrinsic value, the firm can transfer wealth between groups of shareholders through its financing decisions. Stein's 1996 analysis, "Rational Capital Budgeting in an Irrational World," showed that a manager acting for long-term shareholders should base the investment decision on fundamental value (discounting at a rate that reflects risk, as in Volume 1, Chapter 11), but base the financing decision on the market price: issue shares when overpriced, and repurchase when underpriced. The two decisions are separable in principle.

Baker and Wurgler (2002) documented that firms issue equity when their market-to-book ratios are high, and that the effects on capital structure are persistent: a firm's leverage today is correlated with the weighted average of its past market-to-book ratios. They interpreted capital structure as the cumulative result of past market timing, not the outcome of a target leverage ratio, which differs from the trade-off theory in Volume 1 (Chapter 15). Subsequent work has debated the persistence and the interpretation, but the central observation that equity issuance is concentrated after periods of high valuation is well established. Shleifer and Vishny (2003) extended the logic to mergers: overvalued acquirers use their stock as currency to buy less overvalued targets, and gain, at the expense of the long-term holders of the combined firm.

### 12.5.2 Who wins and who loses

The interests of three groups diverge when a firm times the market. Long-term shareholders (those who hold through the correction) gain when the firm issues overpriced shares. New shareholders who buy at the inflated price lose. Short-term holders who sell into the inflated market gain. Hence the meaning of "acting in the shareholders' interest" depends on whose interest is intended, a question the standard model avoids by assuming that price equals value.

**Example 12.5 – Wealth transfers from issuing overvalued shares and repurchasing undervalued ones.**

Brightwater has 100 million shares. Management's analysis puts the intrinsic value at $40 per share (equity value $4,000 million), but the market price is $60.

*Issuance.* The firm issues 10 million new shares at $60, raising $600 million, and holds the cash. Assume intrinsic value of the existing business is unchanged.

Step 1: new intrinsic value per share.
```
Intrinsic equity value after = 4,000 + 600 = $4,600 million
Shares                       = 110 million
Intrinsic value per share    = 4,600 / 110 = $41.82
```
Step 2: gain to existing holders and loss to new holders.
```
Gain per old share = 41.82 − 40.00 = $1.82
Total gain         = 1.82 × 100 = $181.8 million
New holders: paid 10 × 60 = $600 million for a claim worth 10 × 41.82 = $418.2 million → loss of $181.8 million
```
The gain to long-term holders exactly equals the loss to the new buyers.

*Repurchase.* Alternatively, suppose the market price is $30 against an intrinsic value of $40, and the firm buys back 10 million shares.

Step 3: value after repurchase.
```
Intrinsic equity value after = 4,000 − 300 = $3,700 million
Shares                       = 90 million
Intrinsic value per share    = 3,700 / 90 = $41.11
Gain per remaining share     = 1.11;  total = 1.11 × 90 = $100.0 million
Selling holders: received 10 × 30 = $300 million for a claim worth 10 × 40 = $400 million → loss of $100.0 million
```
Interpretation: Timing creates no value for the firm as a whole; it redistributes between continuing and exiting or entering shareholders. The gain depends entirely on the manager's judgment that the market is wrong, and managers are prone to overconfidence about mispricing. If the manager believes the stock is overvalued when it is fairly valued, the issuance is merely neutral; but if the manager believes the stock is undervalued and repurchases when it is fairly valued, or worse overvalued, the firm hands value to sellers and destroys liquidity. Managerial discipline requires an explicit valuation range, an estimate of the probability that the manager's valuation is wrong (borrowing the calibration approach in Section 12.7), and a comparison of the transfer against the cost of signaling (issuance usually lowers the price, as Volume 1, Chapter 15 explained under pecking-order theory).

### 12.5.3 Catering and the reaction to sentiment

Baker and Wurgler's catering theory of dividends (2004) proposes that managers initiate or omit dividends depending on whether investors currently put a premium on dividend payers. Similar logic applies to share splits, stock-based acquisitions, names (companies that adopted "dot-com" names around 1999) and, more recently, the framing of strategy in language that is currently fashionable. Catering is not irrational for a manager who maximizes the current price, but it is a form of short-horizon behavior if the price premium is transitory.

### 12.5.4 Myopia and present bias

Managers can have short horizons for rational reasons (compensation, job risk, takeover risk) and for behavioral ones. Stein's 1989 analysis of "efficient capital markets, inefficient firms" showed how managers who care about the current stock price may sacrifice long-term value if investors cannot observe the quality of investment. Graham, Harvey and Rajgopal's survey of chief financial officers found that a large majority were willing to give up economic value, for example by delaying a positive-NPV project, to meet an earnings target.

Behavioral economics adds *present bias*. People weight the near future more heavily than exponential discounting would imply. A convenient model is quasi-hyperbolic (beta-delta) discounting: a payoff at time t ≥ 1 is valued at β × δ^t × payoff, where δ is the long-run discount factor and β < 1 an additional penalty on everything that is not immediate.

**Example 12.6 – Present bias and the R&D that is never funded.**

A division can spend $10 million on R&D now, with a payoff of $14 million in two years. The firm's cost of capital is 10%, so δ = 1/1.10 = 0.9091. The divisional manager's bonus is paid on this year's earnings, and the manager discounts with β = 0.6.

Step 1: value to the firm.
```
PV = 14 / 1.10² = 14 / 1.21 = $11.57 million
NPV = 11.57 − 10 = +$1.57 million → fund
```
Step 2: perceived value to the present-biased manager.
```
Perceived PV = β × δ² × 14 = 0.6 × 0.8264 × 14 = $6.94 million
Perceived NPV = 6.94 − 10 = −$3.06 million → reject
```
Step 3: the critical β.
```
β* = 10 / (0.8264 × 14) = 10 / 11.57 = 0.864
```
Only a manager with β above 0.864 would fund the project.

Interpretation: A small positive NPV is fragile against even a moderate present bias. With β = 0.6 the manager rejects the project, and a project with NPV three times larger would also fail if its payoffs were far enough in the future. Bonus structures tied to current accounting earnings reinforce the bias, because R&D is expensed. Companies reduce the problem with multi-year incentive plans, deferred and clawed-back compensation, stock holding requirements, and metrics that reflect long-term investment such as returns on capital and pipeline progress. A board that sees a pattern of delayed, small-NPV, long-payoff projects should suspect present bias before it concludes that opportunities have dried up.

## 12.6 Behavioral Capital Budgeting

### 12.6.1 The planning fallacy and the inside view

Kahneman and Tversky introduced the *planning fallacy*: people underestimate the time, cost and risk of their own projects, even when they know that similar projects have overrun. Their explanation is that planners adopt an *inside view*, constructing a scenario from the specifics of the case, and ignore the *outside view*, the statistical distribution of outcomes in a reference class of similar projects. Lovallo and Kahneman argued that the inside view is a major cause of failure in large undertakings, and Flyvbjerg developed *reference-class forecasting* for infrastructure projects, which adjusts a forecast by the empirical distribution of overruns for comparable projects.

Why does the inside view fail so reliably? Each project has a plan, and a plan describes a path in which things go right. Possible delays are numerous, specific and unforeseeable; individually each is improbable, so the planner does not include any. But the probability that *some* delay occurs is high. Moreover, the person who prepares the plan is typically the advocate who needs approval, and organizations rarely reward the planner who says, "this is probably a bad idea."

### 12.6.2 The outside view in practice

Reference-class forecasting follows three steps:

1. **Identify the reference class.** Choose a set of past projects similar enough in type and scale. For a hub, this might be the firm's own last twenty projects plus industry data.
2. **Obtain the distribution of the outcome of interest.** For example, the ratio of actual to budgeted cost, delay in months, and actual to forecast cash flow.
3. **Position the current project within the distribution.** Start from the reference class median and adjust only for specific, documented differences. Set the budget at a chosen percentile (the 70th or 80th) according to the firm's tolerance for overruns.

The result is typically a higher cost, a longer schedule and lower benefits than in the plan, and thus a lower NPV. Whether the project remains attractive after adjustment is exactly the information the board needs.

### 12.6.3 Quantifying the planning fallacy

**Example 12.7 – Inside versus outside view for the distribution hub.**

Brightwater's plan for the hub (a simplified version of the vignette) has the following cash flows, in $ millions, at a 10% discount rate. Costs: $100 at t = 0, $60 at t = 1, $40 at t = 2. Inflows: $52 per year for ten years starting at t = 3 (t = 3 to t = 12).

Step 1: inside-view NPV.
```
PV of costs   = 100 + 60/1.10 + 40/1.10² = 100 + 54.55 + 33.06 = $187.60 million
Annuity factor (10 years, 10%) = 6.1446
PV at t = 2 of inflows = 52 × 6.1446 = 319.52
PV at t = 0           = 319.52 / 1.10² = 264.06
NPV = 264.06 − 187.60 = +$76.46 million
```
Step 2: outside-view adjustment from the reference class: cost 30% higher in each period, a one-year delay in the start of inflows (first inflow at t = 4), and realized inflows 10% lower ($46.8 million a year, t = 4 to t = 13).
```
PV of costs   = 130 + 78/1.10 + 52/1.10² = 130 + 70.91 + 42.98 = $243.88 million
PV of inflows = 46.8 × 6.1446 / 1.10³ = 287.57 / 1.3310 = $216.05 million
NPV = 216.05 − 243.88 = −$27.83 million
```
Step 3: which adjustment matters most? Apply each alone.

| Adjustment applied alone | NPV ($ million) | Change from +76.46 |
|---|---|---|
| None (inside view) | +76.46 | – |
| 30% cost overrun only | +20.18 | −56.28 |
| One-year delay only | +52.45 | −24.01 |
| 10% lower inflows only | +50.05 | −26.41 |
| All three (outside view) | −27.83 | −104.29 |

Step 4: break-even inflows in the outside-view case. The annual inflow at which the adjusted NPV is zero is PV of costs divided by the PV factor of a ten-year annuity starting at t = 4:
```
Required inflow = 243.88 / (6.1446 / 1.10³) = 243.88 / 4.6165 = $52.83 million per year
```
That is more than the $52 million in the original plan.

Interpretation: A project with a comfortable $76 million NPV on the inside view loses $28 million when the base rates of overruns, delays and shortfalls are applied. The cost overrun alone removes about three-quarters of the original NPV. In the adjusted case the project would need $52.83 million of annual inflows, above even the original forecast, merely to break even. The difference between +$76 million and −$28 million is not about the discount rate or the model's mathematics; it comes entirely from assumptions about execution. The cost of this adjustment is small compared with the cost of building a project that destroys value, and the technique forces the sponsor to explain why the project will beat its reference class.

### 12.6.4 Hurdle rates, risk adjustment and optimism

Some firms respond to optimism by raising the hurdle rate. This is a blunt tool. A uniform premium penalizes long-lived projects more than short ones (a point that follows from compounding), penalizes the honest sponsor as much as the optimistic one, and distorts the choice toward quick-payback projects. It also confuses two kinds of risk: systematic risk, which belongs in the discount rate (Volume 1, Chapters 10 and 11), and forecast bias, which belongs in the cash flows. The principled approach is to correct the cash flows for bias, using the outside view, and to keep the discount rate for risk. A related error is to discount optimistic expected cash flows at a high rate and call the result "conservative": it would be better to estimate honest expected cash flows and discount at the cost of capital, using scenario analysis or simulation to display the spread.

### 12.6.5 Post-audits and learning

Hindsight bias undermines learning. After the fact, people overestimate how predictable an outcome was and misremember their earlier forecasts. A post-audit that compares outcomes to the original plan is therefore only useful if the plan was recorded in a form that cannot be revised. Good practice involves a decision record at approval stating the key assumptions, the range of outcomes, the expected value and the criteria that would cause the project to be stopped. Reviews then compare the outcome to the record and identify the causes of variance as skill, luck, or bias.

## 12.7 Debiasing and Decision Processes

### 12.7.1 Individual and organizational debiasing

Fischhoff and subsequent researchers have found that "debiasing" individuals by warning them is only modestly effective. Knowing about overconfidence does not make people less confident. More effective techniques change the decision *process*, so that the environment, not willpower, corrects the bias. Kahneman, Lovallo and Sibony have argued that organizations can review decisions for biases by checklists and structured questions, because it is easier to see bias in others' proposals than in one's own.

### 12.7.2 The premortem

Gary Klein's *premortem* is a simple technique. Before the decision is final, the team imagines that the project has failed completely, one or two years in the future, and each member writes down the reasons for the failure. The shift from "what might go wrong?" to "it did go wrong; why?" uses *prospective hindsight*, which research has shown to increase the number and specificity of reasons generated. It also licenses dissent: in a normal meeting, expressing doubts is disloyal; in a premortem, it is the task.

A well-run premortem has these steps: (1) brief the team on the plan; (2) announce that the project has failed; (3) each person writes failure reasons independently (to avoid conformity); (4) collect and cluster the reasons; (5) assign each major risk an owner, a mitigation and, where possible, a measurable early-warning indicator; (6) revise the plan, or its funding, accordingly. For Brightwater's hub, a premortem might surface reasons such as "automation vendor delivers late," "anchor customer renegotiates volume," and "labor costs for installation rise," each of which could be priced into the base-rate adjustment of Example 12.7 and monitored.

### 12.7.3 Other techniques

- **Red teams and devil's advocates.** Assign a team to argue against the proposal, with access to the same data. The red team's incentives must be genuine; a token dissenter is ineffective, and an assigned dissenter can be dismissed as "just playing a role."
- **Independent estimates before discussion.** Collect forecasts privately and then discuss. This reduces anchoring on the first speaker or the most senior person and exploits the average of independent estimates, which is usually more accurate than any individual (the wisdom-of-crowds effect, which depends on independence). The Delphi method formalizes this in rounds.
- **Pre-commitment and kill criteria.** Decide in advance what evidence would cause the project to stop. Ulysses contracts, such as pre-agreed stage gates, remove the temptation to rationalize after the fact.
- **Decision journals.** Record the decision, the reasoning, the probabilities and the expected outcomes in writing at the time, to defeat hindsight bias.
- **Separate roles.** Separate the advocate, the evaluator and the decision-maker. The group that proposes the project should not evaluate it.
- **Base-rate checklists.** Require every proposal to state the reference class, the base rate of success, and why this case is different.
- **Anonymous voting and rotating dissent.** Reduces the effect of rank and conformity (groupthink, in Janis's terminology).
- **Stage-gated funding.** Release money in tranches tied to milestones, which converts a single large commitment into a sequence of smaller decisions with options to abandon (Volume 1, Chapter 18, real options). Stage gates directly attack escalation, as each gate is a fresh decision on incremental value.

### 12.7.4 Calibration training

Overconfidence is one of the biases that responds to feedback. Forecasters who receive repeated, quantified feedback on their probability judgments, as in weather forecasting or tournaments of probabilistic forecasts studied by Tetlock, become better calibrated. The measures are simple. For *interval* forecasts, the hit rate (the proportion of outcomes inside the stated interval) should match the stated confidence. For *probability* forecasts, the Brier score, the mean squared difference between the forecast probability and the 0/1 outcome, measures accuracy, with lower being better.

**Example 12.8 – Measuring calibration and correcting intervals.**

Brightwater's treasury team has made twenty forecasts of quarterly cash balances, each with an 80% confidence interval. Eleven of the twenty actuals fell inside the interval.

Step 1: the hit rate.
```
Hit rate = 11 / 20 = 55%   (target: 80%)
```
Step 2: statistical significance. If the intervals were truly 80%, the number of hits would be Binomial(20, 0.8).
```
P(X ≤ 11) = Σ(k = 0 to 11) C(20,k) × 0.8^k × 0.2^(20−k) = 0.0100  (about 1%)
```
The team's intervals are too narrow, and the shortfall is unlikely to be chance.

Step 3: implied correction. For a normal error with the team's stated standard deviation σ_s, an 80% interval is ± 1.2816 σ_s. Suppose the actual standard deviation is σ_a, and the observed hit rate of 55% implies the interval covers ± 0.7554 σ_a (the z-value for a central 55% region).
```
1.2816 σ_s = 0.7554 σ_a   →   σ_a / σ_s = 1.2816 / 0.7554 = 1.70
```
The team should widen its intervals by about 70%.

Step 4: a probability-forecast example. A manager gives probabilities that eight initiatives will meet their milestones:

| Initiative | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Forecast probability | 0.90 | 0.80 | 0.70 | 0.90 | 0.60 | 0.95 | 0.85 | 0.75 |
| Outcome (1 = met) | 1 | 0 | 1 | 0 | 1 | 1 | 0 | 1 |

```
Brier = [(0.1)² + (0.8)² + (0.3)² + (0.9)² + (0.4)² + (0.05)² + (0.85)² + (0.25)²] / 8
      = (0.01 + 0.64 + 0.09 + 0.81 + 0.16 + 0.0025 + 0.7225 + 0.0625) / 8 = 2.4975 / 8 = 0.312
Average forecast = 0.806;  realized frequency = 5/8 = 0.625
Benchmarks: always forecasting 0.5 gives 0.250; always forecasting the base rate 0.625 gives 0.234
```
Interpretation: The manager's Brier score of 0.312 is worse than simply forecasting 50-50 or the base rate, and the average forecast of 80.6 percent exceeds the realized frequency of 62.5 percent. This is the signature of overconfidence. With only eight observations the evidence is weak, which is itself a lesson: calibration requires many forecasts and sustained tracking. A firm that records probabilities for every major milestone and scores them every quarter builds the data to correct itself. The interval example shows the remedy when the data are sufficient: widen the ranges and size contingency, hedges and capital buffers to the wider, honest distribution.

## 12.8 Designing the Organization for Better Decisions

### 12.8.1 Incentives and the interaction with bias

Behavioral and agency problems interact. A manager with a career incentive to see a project through will rationalize escalation more readily. A compensation scheme with a payoff only for success encourages optimism, and one with a penalty for any failure encourages loss avoidance. The firm should reward the quality of forecasts as well as results: for example, recognizing managers whose forecasts are accurate, whose projects reach their milestones or are stopped early when evidence warrants. Gains from decision quality are typically larger than gains from marginal changes in incentive strength.

### 12.8.2 Governance and the role of the board

The board is an important debiasing mechanism because its members are not committed to the proposal. Effective boards require a standard decision template (reference class, base rates, premortem results, kill criteria) for major capital commitments, review post-audits with the same seriousness as approvals, and ensure that at least one director with relevant expertise is empowered to challenge the CEO. They also recognize that a charismatic and successful CEO is a risk factor for unchallenged proposals, because past success increases confidence in future judgment, a variant of the overconfidence finding in Section 12.2. A related caution is about overcorrection: a board that rejects every proposal with a positive probability of failure is displaying the same loss aversion it is trying to avoid.

### 12.8.3 A decision-quality checklist

| Question | Bias targeted |
|---|---|
| Who prepared the forecast, and what is their incentive? | Optimism; advocacy |
| What is the reference class, and where does this project fall in its distribution? | Planning fallacy; inside view |
| What range of outcomes did we estimate, and how often have our past ranges contained the outcome? | Overprecision |
| Was the walk-away value set before seeing the counterparty's number? | Anchoring |
| What would the decision be if the money already spent were zero? | Sunk cost |
| Is this project evaluated alone or as part of a portfolio? | Narrow framing |
| What did the premortem identify, and who owns each risk? | Confirmation; groupthink |
| What evidence would cause us to stop, and who decides? | Escalation |
| Are we financing based on a view of market mispricing, and how confident are we? | Overconfidence in timing |
| Is the incentive horizon consistent with the investment horizon? | Myopia |

### 12.8.4 Limits of debiasing

Debiasing has costs. Procedures take time; a premortem for every minor decision would paralyze the firm. They should be proportional to the stakes and the irreversibility of the decision. Debiasing may also produce false confidence: a firm that has a checklist may believe it is immune. The disciplined view is that bias is a persistent feature of human judgment and the right response is to build processes, track the record, and keep measuring.

There is a further caution about the evidence. Behavioral finance is sometimes criticized for providing a catalog of biases without a unified theory and for fitting each anomaly with a different explanation. Some findings, especially those from laboratory studies, do not always replicate in professional settings with feedback and incentives, and some documented patterns in market behavior have weakened over time. The conclusions of this chapter should be read in that light: the biases reviewed here are supported by multiple lines of evidence, and the procedures are inexpensive relative to the stakes, but the magnitudes in any given firm should be measured and not assumed.

## Case Study: The Meridian Fuel-Cell Program

*Illustrative case. All names and numbers are fictional.*

Meridian Industrial is a fictional manufacturer of heavy equipment with $4.0 billion of revenue and a reputation for engineering excellence. Four years ago, under the leadership of its CEO, Daniel Okafor, Meridian launched a program to develop hydrogen fuel-cell power units for industrial vehicles. The original business case called for $180 million of development cost over three years, a commercial launch in year 4, and an NPV of $210 million at a 10 percent discount rate. The program was championed by Okafor himself, who had presented it to the board as "the next Meridian." Okafor's confidence was supported by a record: two earlier product launches had succeeded, and the company's stock had risen 70 percent during his tenure.

Approval was swift. The board's capital committee reviewed a forty-page model; it asked about the discount rate and the terminal value but did not ask how long comparable programs had taken or what share of them reached commercial viability. A consultant's market study, commissioned by the program sponsor, projected volumes about double those in a competing analyst's note. Management's explanation was that analysts "did not understand the technology."

The program has now spent $310 million, the launch has slipped two years, and cell durability remains below customer requirements. At the latest review, the program team asked for another $60 million to complete a "final" redesign. They estimated a 30 percent chance that the redesign would meet durability targets, in which case the program's value at launch would be about $190 million in present value. The team also noted that cancellation would require a $310 million write-off and might trigger a covenant discussion with lenders. Okafor argued that "we have come too far to stop" and that the engineering team would lose its best people if the program was canceled. Two directors privately doubted the program but did not speak, since the CEO was respected and the previous review had passed without objection.

A newly appointed director with a background in private equity asked the finance team to compile a reference class. The finance team found that of eleven similar internal and industry development programs, three reached commercial viability within the original budget and schedule, five reached viability with budgets 50 to 120 percent higher and delays of two or more years, and three were abandoned. The median overrun in those that completed was 80 percent. Meridian's own last three major programs had finished with an average cost overrun of 45 percent.

Meridian's CFO has been asked to prepare a recommendation. She is aware that approving the additional $60 million would be consistent with the sponsor's wishes, that rejecting it would be seen as a rebuke of the CEO, and that either decision will be examined in the light of what happens next. She has proposed a premortem, a review by a team that had no role in the original approval, and a stage-gated plan in which the $60 million would be released in three tranches, each tied to a specific durability test. The CEO has objected that this would "signal a lack of confidence" and delay the redesign by two months.

**Discussion Questions**

1. Compute the incremental NPV of the requested $60 million, treating the $310 million as sunk. What probability of success would make the request break even? How might the stage-gated structure change the economics (describe qualitatively, referring to real options)?
2. Identify the biases visible in the original approval and in the current request. For each, state the evidence in the case and the process change that would address it.
3. How should the reference-class data be used? Suggest how a board could translate the data into an adjusted forecast for the original business case, and what that adjustment implies about the quality of the original approval.
4. The CEO objects to the premortem and the staged release. What are the organizational and incentive issues? How would you design the decision rights and incentives so that a director who doubts the program can say so, and so that the CEO is not penalized for stopping?

## Key Takeaways

- Behavioral corporate finance has two branches: rational managers exploiting irrational markets (timing, catering) and biased managers operating in rational markets (overconfidence, anchoring, escalation). Advice differs by branch.
- Biases are systematic, not random. Because they push in a consistent direction, they can be measured, modeled and corrected, which is the purpose of the quantitative examples in this chapter.
- Selecting the projects with the highest estimated NPV selects the largest forecast errors. Estimates should be shrunk toward the mean by a coefficient based on the firm's measured forecast error (Example 12.1).
- Overprecision is the most robust form of overconfidence: stated ranges are too narrow. Calibration tracking and interval widening are practical corrections (Example 12.8).
- Anchors, including the seller's ask, the budget, or last year's number, pull estimates toward themselves. A walk-away price set in advance is the best defense in negotiations (Example 12.2).
- Sunk costs are irrelevant to the decision; the incremental NPV decides. Loss framing and self-justification pull managers toward escalation, so decision rights and kill criteria should be set in advance (Example 12.3).
- Evaluating risky positive-NPV projects one at a time under loss aversion rejects value that the portfolio would accept. Aggregate decisions and judge managers on process as well as outcomes (Example 12.4).
- Market timing transfers wealth between shareholder groups without creating firm value, and it depends on the manager's judgment that the market is wrong, which is itself subject to overconfidence (Example 12.5).
- Present bias and earnings-based incentives make small, long-payoff projects fragile. Multi-year incentives and long-horizon metrics reduce myopia (Example 12.6).
- The planning fallacy is corrected by the outside view: apply the reference class distribution of cost, schedule and benefit outcomes to the project, and put risk in the discount rate and bias in the cash flows (Example 12.7).
- Process beats exhortation. Premortems, red teams, independent estimates, decision journals, stage gates and separation of advocate and decision-maker make decisions robust to individual bias, at proportionate cost.

## Review Questions

1. Distinguish the two approaches in behavioral corporate finance. Give one financing decision and one investment decision that each approach would analyze.
2. Define overestimation, overplacement and overprecision. Which is most relevant to valuation, and why?
3. Explain why selecting the highest-NPV projects produces a winner's curse even when forecasters are unbiased. What does the shrinkage coefficient depend on?
4. Describe Malmendier and Tate's measure of CEO overconfidence and what it implies for acquisitions and financing.
5. Explain the anchoring-and-adjustment model. How would you design a negotiation process to limit the effect of the counterparty's opening number?
6. Why is the sunk-cost fallacy a fallacy? Give two psychological reasons that managers continue to fund failing projects.
7. What is narrow framing, and how does it cause a loss-averse manager to reject positive-NPV projects? How would you fix it?
8. Explain Stein's argument that investment decisions should be based on fundamental value while financing decisions respond to market price. What are the risks of acting on a perceived mispricing?
9. What is the planning fallacy, and how does reference-class forecasting address it? Why is a uniformly higher hurdle rate an inferior fix?
10. Describe a premortem, why prospective hindsight helps, and how to ensure the exercise yields action rather than ritual.

## Problems

**Problem 12.1.** True project NPVs are distributed N(0, 15²) and forecast errors N(0, 25²), independent. (a) Compute the shrinkage coefficient and the expected true NPV for a project estimated at +$36 million. (b) A team believes its error SD is only 10. What expected true NPV does it infer, and by how much does it overstate?

**Problem 12.2.** A bidder's DCF value for a target is $120 per share, synergies are $15 per share, and the seller anchors at $160. The bidder's bid is 0.4 × 160 + 0.6 × 120. (a) Compute the bid. (b) Compare with the walk-away price and compute the overpayment on 50 million shares. (c) At what anchoring weight does the bid equal the walk-away price?

**Problem 12.3.** A project has $80 million already spent. Completing it costs $25 million more, and there is a 40% chance of a $55 million payoff (present value) and a 60% chance of zero. (a) Compute the incremental NPV. (b) What probability of success breaks even? (c) What is the incremental NPV if the payoff is $70 million?

**Problem 12.4.** A firm has 200 million shares with an intrinsic value of $25 per share and a market price of $35. It issues 20 million shares at $35 and keeps the cash. (a) Compute the new intrinsic value per share. (b) Compute the gain to existing holders and the loss to new holders. Then, in a different scenario with price $20 and intrinsic value $25, the firm repurchases 15 million shares. (c) Compute the intrinsic value per share afterward and the gain to the remaining holders.

**Problem 12.5.** A project costs $50 million at t = 0 and $30 million at t = 1 and returns $28 million per year for seven years starting at t = 2. The discount rate is 12%. (a) Compute the inside-view NPV. (b) Apply a 40% cost overrun, a one-year delay and 15% lower inflows ($23.8 million per year, t = 3 to t = 9). Compute the outside-view NPV. (c) Compute the annual inflow required to break even in the adjusted case.

**Problem 12.6.** A project pays +$40 million with probability 0.5 and −$25 million with probability 0.5. A manager has loss aversion λ = 2. (a) Compute the expected value and the manager's perceived value. (b) If eight independent copies are available, compute the number of successes needed for a positive total and the probability of this. (c) Compute the expected total.

**Problem 12.7.** An R&D project costs $8 million now and returns $12 million in three years. The cost of capital is 9%. A manager has β = 0.7 and δ = 1/1.09. (a) Compute the NPV to the firm. (b) Compute the perceived value to the manager. (c) Compute the critical β.

**Problem 12.8.** A manager makes 25 forecasts of costs, each with a 90% confidence interval. Fifteen actuals fall inside the intervals. (a) Compute the hit rate. (b) Compute the probability of observing 15 or fewer hits if the intervals were truly 90%. (c) By what factor should the intervals be widened, assuming normal errors?

### Answers to Selected Problems

**12.1.** (a) k = 225 / (225 + 625) = 0.2647; expected true NPV = 0.2647 × 36 = $9.53 million. (b) k = 225 / (225 + 100) = 0.6923; inferred = $24.92 million; overstatement = $15.39 million, about 2.6 times the correct value.

**12.2.** (a) 0.4 × 160 + 0.6 × 120 = 64 + 72 = $136. (b) Walk-away = 120 + 15 = $135; overpayment $1 × 50 million = $50 million. (c) w* = (135 − 120) / (160 − 120) = 0.375.

**12.3.** (a) 0.4 × 55 − 25 = 22 − 25 = −$3.0 million (stop). (b) p* = 25 / 55 = 45.5%. (c) 0.4 × 70 − 25 = +$3.0 million (continue).

**12.4.** (a) (200 × 25 + 20 × 35) / 220 = 5,700 / 220 = $25.91. (b) Gain per share 0.909 × 200 = $181.8 million; new holders paid $700 million for a claim worth 20 × 25.909 = $518.2 million, a loss of $181.8 million. (c) (5,000 − 15 × 20) / 185 = 4,700 / 185 = $25.41; gain = 0.405 × 185 = $75.0 million, which equals the sellers' loss of 15 × 5 = $75 million.

**12.5.** (a) PV of costs = 50 + 30/1.12 = 76.79; inflows: 28 × annuity factor for 7 years at 12% (4.5638) = 127.79 at t = 1, so PV = 127.79 / 1.12 = 114.10; NPV ≈ +$37.31 million. (b) Costs: 70 + 42/1.12 = 107.50; inflows 23.8 × 4.5638 = 108.62 at t = 2, PV = 108.62 / 1.12² = 86.59; NPV ≈ −$20.91 million. (c) Required inflow = 107.50 / (4.5638 / 1.2544) = 107.50 / 3.6382 = $29.55 million per year, above the original $28 million.

**12.6.** (a) E = 0.5 × 40 − 0.5 × 25 = +$7.5 million; perceived = 20 − 2 × 12.5 = −$5.0 million (reject). (b) Total = 40k − 25(8 − k) = 65k − 200 > 0 requires k ≥ 4; P(k ≥ 4) = 163/256 = 63.7%. (c) 8 × 7.5 = $60 million.

**12.7.** (a) PV = 12 / 1.09³ = 12 / 1.2950 = $9.27 million; NPV = +$1.27 million. (b) 0.7 × 9.27 = $6.49 million, below the $8 million cost (reject). (c) β* = 8 / 9.27 = 0.863.

**12.8.** (a) 15 / 25 = 60%. (b) P(X ≤ 15 | n = 25, p = 0.9) ≈ 0.00008 (about 8 in 100,000). (c) The 90% interval is ± 1.645σ_s; a 60% hit rate corresponds to ± 0.8416σ_a; ratio 1.645 / 0.8416 = 1.95, so widen intervals by about 95%.
