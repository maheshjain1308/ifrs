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

