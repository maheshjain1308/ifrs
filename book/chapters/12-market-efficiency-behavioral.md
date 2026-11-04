# Chapter 12: Market Efficiency and Behavioral Finance

## Learning Objectives

After studying this chapter, you should be able to:

- State the three forms of the efficient market hypothesis, explain the economic mechanism that is supposed to produce efficiency, and explain why testing it always involves a joint hypothesis about a model of expected returns.
- Design and interpret an event study, including the market model, abnormal returns, cumulative abnormal returns, and test statistics for single events and for samples of events.
- Describe the main empirical anomalies (momentum, value, size, post-earnings-announcement drift, and others), and evaluate whether each reflects mispricing, compensation for risk, or the product of data mining.
- Explain the limits to arbitrage, including noise-trader risk, short-selling constraints, and transaction costs, and why they allow mispricing to persist without creating easy profits.
- Identify the principal behavioral biases (overconfidence, anchoring, loss aversion, mental accounting, herding, representativeness) and trace how they affect investors and corporate managers.
- Draw practical implications for financial managers: when to trust market prices, how to time financing and repurchases honestly, how to communicate, and how to guard capital budgeting against its own biases.

## Opening Vignette

*The following scenario is illustrative; the company and its figures are fictional.*

Marlowe Instruments is a maker of laboratory measurement devices. After a strong run, its share price has doubled in eighteen months to $64, even though its earnings have grown by only a third. The chief executive, Dana Whitfield, is having a difficult week. The board has two proposals before it.

The first, from the head of corporate development, is to use the high share price as currency to buy a rival, Stonebridge Optics, in an all-stock deal. "Our stock is richly valued," he argues. "We are paying with expensive paper for real assets. The market is giving us a gift." The second, from the treasurer, is to launch a $300 million buyback, because analysts have recently downgraded the sector over concerns about a cyclical downturn, and he believes Marlowe's shares are, if anything, undervalued relative to the firm's contracted backlog.

The two proposals pull in opposite directions: one assumes Marlowe is overvalued, the other undervalued. Dana wants to know which view is right. She asks her chief financial officer, Rafael Quintero, a series of unsettling questions. Is the market price an unbiased estimate of Marlowe's value, in which case neither a stock-for-stock deal nor a buyback creates value for existing shareholders? Or is the price systematically distorted by investor optimism or pessimism, in which case management's choices about when and how to raise or return capital can transfer wealth between shareholders who stay and those who leave? And if the market can be wrong, how would management ever know it, given that it has the same fallible judgment as everyone else and a strong personal interest in believing that the stock is worth more than it trades for?

Rafael recalls two competing traditions from his MBA program. One, the efficient markets view, holds that prices incorporate available information so well that deviations are small and fleeting. The other, behavioral finance, holds that psychological biases and limits on arbitrage can cause prices to drift from fundamentals for long periods. This chapter lays out both, the evidence on each side, and what the evidence implies for those who manage firms rather than trade their shares.

## 12.1 The Efficient Market Hypothesis

### 12.1.1 The idea and the mechanism

In a competitive market, many analysts and traders compete to profit from information. If a stock is underpriced relative to what available information implies, the first investors to notice buy it, pushing the price up until the opportunity disappears. If it is overpriced, they sell or short it, pushing the price down. The result, as articulated by Eugene Fama and others in the 1960s, is that prices adjust quickly to new information and, at any moment, reflect what is known. The *efficient market hypothesis* (EMH) says that the price of a security is an unbiased estimate of its intrinsic value given the information available, so that no strategy based on that information earns returns in excess of those justified by risk, after costs.

The mechanism matters. Efficiency does not require that all investors are rational, or that all know the right answer. It requires that enough capital is controlled by informed, profit-seeking traders who can act on mispricing, that their actions move prices, and that the irrational trades of others are random and cancel out or are absorbed. Market efficiency is therefore a statement about the *outcome* of competition, and its plausibility depends on how effective arbitrage is, a point to which Section 12.5 returns.

Two implications follow. Prices follow something like a *random walk*: if prices already reflect all current information, then price changes reflect only new information, which by definition is unpredictable. And, because investors cannot predictably beat the market after costs, a rational investor with no special information should hold a diversified portfolio at low cost, the logic behind index funds.

Notice what efficiency does *not* say. It does not say that prices equal true value with certainty, only that errors are unbiased and not predictable from available information. It does not say that every investor earns the market return; skilled or lucky investors may do better. And it does not say that prices are stable: prices should move substantially as news arrives and as the discount rates that investors apply to risky cash flows change.

### 12.1.2 The three forms

Fama classified efficiency by the information set that prices are assumed to reflect. Table 12.1 summarizes the forms, the strategies each rules out, and the kinds of evidence used to test them.

**Table 12.1 – Forms of market efficiency**

| Form | Information reflected in prices | Strategies it rules out | Typical tests |
|---|---|---|---|
| Weak | Past prices and trading volume | Technical analysis, chart patterns, simple trading rules based on past returns | Serial correlation of returns; runs tests; trading-rule simulations |
| Semi-strong | All public information (financial statements, announcements, news, macro data) | Fundamental analysis based on public data; trading on announced earnings, splits, or dividends | Event studies; return predictability using public variables; performance of mutual funds |
| Strong | All information, public and private (including insider information) | Any profit from private information | Studies of insider trading, specialist and analyst profits |

The forms are nested: if the strong form held, the semi-strong and weak forms would hold also. Most economists believe the strong form fails in practice, because corporate insiders trading on private knowledge of earnings or takeovers can earn abnormal profits (which is why insider trading is generally illegal). The weak form is the most widely supported, at least for large, liquid markets. The central debate concerns the semi-strong form.

### 12.1.3 The joint hypothesis problem

Every test of market efficiency is a test of two hypotheses at once: that prices reflect information, and that the model used to define "normal" or required returns is right. If a strategy appears to earn abnormal profit, it might be that the market is inefficient, or that the model of expected returns (for example, CAPM) omits a priced risk factor. This *joint hypothesis problem*, emphasized by Fama, means that efficiency can never be proven or refuted by a single test. A reported anomaly is simply a pattern of returns not explained by the chosen benchmark. Whether the pattern is mispricing or compensation for a risk the benchmark ignores is a matter of interpretation, and it is the dividing line between the efficient-markets and behavioral camps.

### 12.1.4 What efficiency means for corporate finance

If markets are semi-strong efficient, several principles of corporate finance simplify:

- The market price is the best available estimate of value. A manager need not guess whether shares are over- or undervalued when deciding whether to issue or repurchase them, because on average the transaction occurs at fair value.
- Financing decisions are not sources of value in themselves. Issuing equity at a fair price transfers no wealth between existing and new shareholders; the NPV of the financing transaction is zero apart from fees and taxes.
- Accounting choices that do not affect cash flows (for example, the choice between inventory methods when taxes are unaffected) should not move prices, because investors see through them.
- Investors cannot be fooled by cosmetic changes such as stock splits per se.

If markets are not efficient, each of these has qualifications, and managers face the more difficult task of taking a view on mispricing while knowing that their own biases may distort it. The remainder of the chapter explores that tension.

## 12.2 Testing Efficiency: Weak Form, Event Studies, and Strong Form

### 12.2.1 Weak-form tests

If past returns contain exploitable information, returns should be correlated across time. The first-order autocorrelation coefficient measures the relationship between today's return and tomorrow's:

```
ρ1 = Σ (rt − r̄)(rt+1 − r̄) / Σ (rt − r̄)²
```

Under the random walk hypothesis, ρ1 should be approximately zero. With n observations, the standard error of an estimated autocorrelation is about 1/√n, so values beyond ±2/√n are statistically significant at roughly the 5 percent level.

**Example 12.1 – Testing for serial correlation in returns.**

An analyst collects twelve daily returns (in percent) for a small-cap stock: 1.2, −0.4, 0.9, −1.1, 0.6, 0.3, −0.8, 1.0, −0.2, 0.5, −0.7, 0.4.

*Step 1: Mean.* The sum is 1.7, so r̄ = 1.7 / 12 = 0.1417.

*Step 2: Deviations from the mean.* 1.0583, −0.5417, 0.7583, −1.2417, 0.4583, 0.1583, −0.9417, 0.8583, −0.3417, 0.3583, −0.8417, 0.2583.

*Step 3: Denominator, the sum of squared deviations.* 6.4092.

*Step 4: Numerator, the sum of products of consecutive deviations.* (1.0583)(−0.5417) + (−0.5417)(0.7583) + (0.7583)(−1.2417) + … + (−0.8417)(0.2583) = −4.3142.

*Step 5: Autocorrelation.*

```
ρ1 = −4.3142 / 6.4092 = −0.673
```

*Step 6: Significance.* The 5 percent band is ±2/√12 = ±0.577. The estimate of −0.673 lies outside it, so the null hypothesis of no autocorrelation is rejected for this sample: a positive return tends to be followed by a negative one.

A careful analyst would not conclude that the market is weak-form inefficient. Twelve observations are far too few; one sample of one stock proves little; and strong negative first-order autocorrelation in small, thinly traded stocks is typically caused by *bid-ask bounce*, in which recorded prices alternate between bid and ask quotes without any change in value. A trader who tried to exploit it would pay the spread on each trade and lose the apparent gain. This illustrates a recurring theme: statistical predictability is not the same as economically exploitable profit. The EMH is a claim about profits after costs and risk.

For large stocks and for indexes, the long-standing finding is that daily and weekly return autocorrelations are small. There is evidence of short-horizon reversal in some segments, of intermediate-horizon continuation (momentum, Section 12.3), and of long-horizon reversal, which are the focus of the anomalies literature.

### 12.2.2 Event studies

The workhorse method for testing semi-strong efficiency, and an important practical tool for managers evaluating the value consequences of corporate actions, is the *event study*. It measures how the price of a security responds to an event (an earnings announcement, an acquisition, a dividend change, a regulatory decision) by comparing actual returns with the returns expected in the absence of the event.

The procedure has six steps:

1. **Define the event and the event date** (the day the information became public; day 0). Where announcements occur after the market closes, day 0 is the next trading day.
2. **Select the event window**, typically a few days around day 0 (for example, from day −1 to day +1 or −2 to +2) to capture the reaction and any leakage or delayed adjustment.
3. **Estimate normal returns** using data from an *estimation window* well before the event (for example, 120 days ending 20 days before), usually via the *market model*: Ri,t = αi + βi Rm,t + εi,t.
4. **Compute abnormal returns** in the event window: ARi,t = Ri,t − (α̂i + β̂i Rm,t).
5. **Cumulate** abnormal returns over the window: CARi = Σ ARi,t.
6. **Test significance**, using the standard deviation of the residuals from the estimation period (for a single event) or the cross-sectional dispersion of CARs (for a sample of events).

**Example 12.2 – An event study for a single firm.**

Marlowe Instruments announces a major product recall on day 0. From the estimation window, the market model has α̂ = 0.02 percent per day (0.0002), β̂ = 1.1, and residual standard deviation σ = 1.2 percent per day. Returns around the event are:

**Table 12.2 – Abnormal returns around the announcement**

| Day | Market return Rm | Stock return Ri | Expected return 0.0002 + 1.1 × Rm | Abnormal return AR |
|---|---|---|---|---|
| −2 | 0.40% | 0.60% | 0.0002 + 0.0044 = 0.46% | +0.14% |
| −1 | −0.20% | 0.20% | 0.0002 − 0.0022 = −0.20% | +0.40% |
| 0 | 1.00% | 4.50% | 0.0002 + 0.0110 = 1.12% | +3.38% |
| +1 | 0.30% | 1.20% | 0.0002 + 0.0033 = 0.35% | +0.85% |
| +2 | −0.50% | 0.10% | 0.0002 − 0.0055 = −0.53% | +0.63% |

(The dates and the narrative are illustrative; the positive reaction, for the sake of the example, reflects a market that had feared something worse.)

*Day-0 abnormal return:* 4.50% − 1.12% = 3.38%. Its t-statistic is 3.38 / 1.2 = 2.82, significant at the 1 percent level.

*Cumulative abnormal return over the window (−2, +2):*

```
CAR = 0.14 + 0.40 + 3.38 + 0.85 + 0.63 = 5.40%
```

Under independence across days, the standard deviation of a 5-day CAR is σ√5 = 1.2% × 2.236 = 2.683%, so:

```
t(CAR) = 5.40 / 2.683 = 2.01
```

This is just significant at the 5 percent level. Three observations arise. The largest response occurs on day 0, consistent with fast price adjustment. But the abnormal return before day 0 (+0.54 percent on days −2 and −1) is positive, which could indicate leakage or simply noise (neither pre-event abnormal return is individually significant, with t-statistics of 0.12 and 0.33). And the abnormal return after day 0 (+1.48 percent on days +1 and +2) is positive, which, if systematic, would suggest slow incorporation of news; but with a single event, it cannot be separated from noise.

### 12.2.3 Samples of events

A single event is noisy. Studies of corporate actions use many events and average the CARs. The average CAR across N events, and its t-statistic based on the cross-sectional standard deviation s of the CARs, is:

```
CAR-bar = (1/N) Σ CARi
t = CAR-bar / (s / √N)
```

**Example 12.3 – A cross-sectional event study.**

A study of 25 announcements of share repurchase programs finds a mean 3-day CAR of 1.8 percent with a cross-sectional standard deviation of 4.0 percent.

```
Standard error = 4.0% / √25 = 4.0% / 5 = 0.80%
t = 1.8% / 0.80% = 2.25
```

The t-statistic of 2.25 exceeds the 5 percent critical value of about 2.06 for 24 degrees of freedom, so the average announcement effect is statistically different from zero. The interpretation depends on the market's view: it is consistent with efficiency if the market quickly processes the signal that managers consider shares undervalued, or that the firm has surplus cash; the abnormal return is the *price of the news*, not an exploitable profit, since a trader cannot know the announcement in advance. Event studies thereby provide evidence that prices react quickly, and an inefficiency would show instead as drift in CARs after the event, which can be tested over long windows.

Long-horizon event studies (one to five years) are far less reliable. Because the benchmark model matters more as the window lengthens, the joint hypothesis problem bites hard; the choice between buy-and-hold returns and cumulative returns, and the way cross-correlated events cluster in time, can overturn conclusions. Short-window evidence supports efficiency in processing news; long-window evidence on anomalies is contested.

For managers, event studies have a practical use: to learn how the market values their actions. Studies of announcements, such as mergers, show that target shareholders typically gain substantially, while acquirers on average earn returns close to zero or slightly negative, a pattern suggestive of competitive bidding and of overpayment driven by managerial overconfidence, as discussed in Section 12.6.

### 12.2.4 Strong-form evidence and the performance of professionals

The strong form is the easiest to reject, since people with genuine private information, such as corporate insiders, can earn abnormal returns. More relevant for most investors is whether *professional* managers who rely on public information outperform. Studies of actively managed mutual funds tend to find that, after fees, the average fund underperforms its benchmark, and that past outperformance is only weakly persistent. This is consistent with a market in which competition among skilled professionals eliminates most exploitable profits, leaving rewards for skill roughly equal to the costs of obtaining and trading on it. Grossman and Stiglitz made the logical point: if markets were perfectly efficient, no one would have an incentive to gather information, so prices could not reflect it. Markets must therefore be *efficient enough* that the marginal gains from information roughly equal the marginal costs of acquiring it: efficiency is a matter of degree.

## 12.3 Anomalies and Their Interpretation

An *anomaly* is a pattern in returns that cannot be explained by the standard model of risk and return, or that appears exploitable. Researchers have catalogued dozens. Table 12.3 lists a selection, described only qualitatively; magnitudes differ across periods, markets, and studies, and the most important point about many of them is that they have weakened after publication.

**Table 12.3 – Selected anomalies and competing explanations**

| Anomaly | Pattern | Risk-based explanation | Behavioral / frictions explanation |
|---|---|---|---|
| Momentum (Jegadeesh and Titman) | Stocks with high returns over the past 3 to 12 months tend to keep outperforming over the next several months | Time-varying risk; exposure to crash risk | Underreaction to news; herding; slow diffusion of information |
| Value (Fama and French) | Stocks with high book-to-market ratios have higher average returns than low book-to-market stocks | Distress risk; compensation for a risk factor | Extrapolation of past growth; overreaction to good and bad news |
| Size | Small firms have earned higher average returns than large firms, after CAPM adjustment | Liquidity and information risk | Neglect; limits to arbitrage in small stocks |
| Post-earnings-announcement drift | Returns continue in the direction of an earnings surprise for weeks or months | Few risk explanations | Investor underreaction; anchoring on prior expectations |
| Accruals | Firms with high accruals relative to cash flow tend to underperform | Weak | Investors fixate on earnings and underweight cash flow information |
| IPO underperformance | Recent IPOs tend to underperform comparable firms over multiple years | Benchmark and measurement problems | Investor over-optimism; issuers time the market |
| Low-risk (beta) anomaly | Low-beta stocks have earned returns close to or higher than high-beta stocks | Leverage constraints distort the security market line | Preference for lottery-like payoffs; benchmarking by managers |
| Calendar effects | Seasonal patterns, such as turn-of-the-year strength in small stocks | Tax-loss selling; liquidity | Window dressing; investor sentiment |

### 12.3.1 Three ways to read an anomaly

When confronted with a documented pattern, the analyst can adopt one of three readings, each with different consequences.

*It is compensation for risk.* The pattern is real but not an arbitrage: stocks with high book-to-market ratios might be more exposed to financial distress, a risk that investors demand compensation to bear and which the CAPM omits. The efficient markets view survives; the model of expected returns needs more factors. This is the stance of the Fama–French multi-factor models.

*It is mispricing.* The pattern reflects systematic errors by investors, such as underreaction to earnings news or overreaction to long strings of good news. Expected returns on such stocks differ from the cost of capital that the CAPM implies, and the market is not efficient in the semi-strong sense.

*It is an artifact.* The pattern arose from searching over many possible strategies and reporting the one that worked in the sample (data snooping), from survivorship bias, from ignoring trading costs, or from the idiosyncrasies of a particular period. It will disappear out of sample.

Distinguishing among these requires out-of-sample evidence, tests across countries and periods, an understanding of the economic story, and attention to whether profits survive costs. Anomalies that are large, persistent across markets, concentrated where arbitrage is hard, and associated with an economic mechanism are the most credible.

### 12.3.2 Data snooping: the multiple-testing problem

Suppose thousands of researchers test hundreds of trading signals on the same historical data set. Even if no signal had any predictive power, some would appear significant by chance. A significance level of 5 percent means that 1 in 20 useless signals will pass.

**Example 12.4 – The probability of a false discovery.**

An analyst tests 100 independent trading strategies, none of which has any true predictive power, each at the 5 percent significance level.

*Expected number of false positives:* 100 × 0.05 = 5 strategies will appear to "work."

*Probability of at least one false positive:*

```
1 − (1 − 0.05)^100 = 1 − 0.95^100 = 1 − 0.0059 = 0.994
```

There is a 99.4 percent chance that at least one spurious strategy is found. The simple Bonferroni correction demands a stricter threshold for each test: 0.05 / 100 = 0.0005. At that level, the probability of at least one false positive across the 100 tests is:

```
1 − (1 − 0.0005)^100 = 1 − 0.9512 = 0.0488 ≈ 4.9%
```

which restores the intended overall error rate of about 5 percent. A two-sided p-value of 0.0005 corresponds to a t-statistic of about 3.5 for large samples, which is why modern researchers argue that a t-statistic of 2 is too lenient for newly discovered patterns. For the manager reading a vendor's back-tested "alpha," the lesson is to ask how many strategies were tried before this one was presented.

### 12.3.3 Do anomalies survive?

Evidence suggests that many anomalies weaken or vanish after they are published and exploited, which is consistent with the idea that market participants learn and arbitrage capital moves in, but also with the idea that some of the in-sample returns reflected data mining. Momentum, value, and post-earnings-announcement drift are among the more durable patterns, though with episodes of severe losses. Calendar effects are generally weaker than originally reported. A fair reading is that markets are *mostly* efficient in the sense that simple, widely known strategies do not offer large, reliable, riskless profits after costs, while sizeable pockets of apparent mispricing exist where arbitrage is costly or risky.

## 12.4 Limits to Arbitrage

### 12.4.1 Why mispricing can persist

The efficient markets argument relies on arbitrageurs to eliminate mispricing. Shleifer and Vishny and others have shown that in practice arbitrage is limited, so a mispricing can last long enough that betting against it is dangerous. The limits include:

*Fundamental risk.* Few arbitrages are riskless. Buying an undervalued stock exposes the investor to the risk that the stock falls because of news about its fundamentals, and the hedge (shorting a similar stock) is imperfect.

*Noise-trader risk.* Even when an investor is right about fundamentals, irrational traders (noise traders) can push prices further from value before they return. De Long, Shleifer, Summers, and Waldmann showed that this risk, the risk that sentiment worsens before it recovers, deters arbitrageurs, particularly those with short horizons or leverage.

*Short-selling constraints.* Overpricing is harder to correct than underpricing, because shorting requires borrowing shares, which may be expensive, unavailable, or subject to recall, and sometimes banned by regulators. Pessimistic investors can sell what they own but cannot easily express larger bearish views.

*Implementation costs.* Bid-ask spreads, commissions, price impact for large trades, and taxes consume profits.

*Agency problems.* Arbitrageurs often manage other people's money. If a mispricing widens, investors may withdraw capital at precisely the worst time, forcing liquidation: "the market can stay irrational longer than you can stay solvent."

These limits imply that the market can be both *almost efficient* in the sense that it is hard to make money from it and *not fully efficient* in the sense that prices may deviate persistently from value. The absence of free lunches does not prove that prices are right.

**Example 12.5 – Gross versus net returns on a momentum strategy.**

A fund finds that a long-short momentum strategy (buying past winners and shorting past losers) earned a gross return of 9.0 percent per year in a backtest. Implementation costs are: trading costs from portfolio turnover of 2.0 percent per year; short borrowing fees on loser stocks, which are often expensive to borrow, of 3.0 percent per year on the portfolio; and price impact at the size the fund wishes to trade of 1.5 percent per year.

```
Net return = 9.0% − 2.0% − 3.0% − 1.5% = 2.5% per year
```

Nearly three-quarters of the gross return disappears into implementation costs (6.5 / 9.0 = 72%). If the strategy also has periodic crashes, with large losses in rebounds after market declines, the risk-adjusted net return could be negative. This is how a pattern can appear in the data while the market still passes the test of "no profit after costs and risk." Arbitrage is limited because the visible profit is a gross figure, while the costs and risks that determine whether anyone will bother to trade on it appear only net.

**Example 12.6 – Noise-trader risk and forced liquidation.**

An arbitrage fund identifies two securities with identical cash flows trading at a persistent spread: the cheap one (A) trades 4 percent below the expensive one (B). It buys $100 of A and shorts $100 of B, expecting convergence within a year, which would yield a profit of 4 percent of $100 = $4. The fund posts $20 of its own capital and borrows the rest (five times leverage), with a covenant that requires liquidation if capital falls to $14 (a 30 percent loss).

*Case 1: convergence without interruption.* Profit is $4 on $20 of capital, a 20 percent return (before financing costs).

*Case 2: sentiment worsens first.* Noise traders push the spread to 10 percent before it narrows. The mark-to-market loss is (10% − 4%) × $100 = $6, which is 30 percent of the fund's $20. Its covenant is triggered, forcing liquidation at the widest spread. The final result is a loss of $6, a −30 percent return, even though the original thesis (spreads converge) turned out right afterwards.

The arbitrageur was correct about value but wrong about timing, and leverage converted a temporary price move into a permanent loss. This is why historical episodes in which closely related securities traded at persistent discounts, such as the use of dual-listed company structures or the case of a parent and its partly-spun-off subsidiary valued oddly relative to each other, could last for long periods without being fully exploited.

### 12.4.2 Evidence of apparent mispricing under frictions

Several well-known episodes are presented as evidence of limits to arbitrage. Closed-end funds frequently trade at discounts or premiums to the net asset value of their holdings, even though the holdings are observable. Dual-listed companies that share cash flows under a fixed formula have at times traded at prices that deviated from the formula, and bound together only slowly. During the late-1990s technology boom, certain subsidiaries that had been partially listed traded for more than the parent that held a controlling share, implying that the rest of the parent's operations had negative value, an apparent violation of limited liability that was hard to arbitrage because the subsidiary shares were difficult to borrow. These cases are instructive because they show mispricing in settings where fundamental value is transparent, and they trace failures of arbitrage to concrete frictions.

## 12.5 Behavioral Finance: How Real Decision-Makers Depart from the Textbook

Behavioral finance combines the limits to arbitrage with a second pillar: evidence from psychology that investors, and managers, systematically depart from the fully rational, utility-maximizing agent of classical theory. If those departures are correlated across many investors, and arbitrage is limited, prices can be pushed away from fundamentals.

### 12.5.1 Prospect theory

Kahneman and Tversky's prospect theory, developed from experiments, describes how people evaluate risky choices. Three features matter for finance. People evaluate outcomes relative to a *reference point* (often the purchase price or current wealth), not in terms of final wealth. They are *loss averse*: a loss hurts more than an equivalent gain pleases, commonly by a factor of about two in experiments. And they are risk-averse over gains but risk-seeking over losses, so they may gamble to avoid realizing a loss. Applied to investing, loss aversion helps explain the *disposition effect*, the tendency to sell winning stocks too early and hold losers too long, which is contrary to the tax advantage of realizing losses.

### 12.5.2 Principal biases

Table 12.4 summarizes the best-known biases, their effects on investors, and their parallel effects on managers.

**Table 12.4 – Common biases and their managerial analogues**

| Bias | Description | Investor consequence | Managerial consequence | Possible safeguard |
|---|---|---|---|---|
| Overconfidence | Overestimating the precision of one's knowledge and ability | Excessive trading; underdiversification | Overinvestment; overpaying for acquisitions; narrow forecast ranges | Reference-class forecasting; post-audits |
| Anchoring | Over-reliance on an initial number | Slow updating of price targets | Budgets and forecasts stick to last year's figures | Independent estimates before sharing anchors |
| Confirmation bias | Seeking evidence that supports prior views | Ignoring bad news | Selective use of data to support a favored project | Devil's-advocate review |
| Representativeness | Judging by resemblance to a stereotype; ignoring base rates | Extrapolating recent growth; chasing winners | Assuming a new venture will resemble the best success stories | Base-rate data on similar projects |
| Loss aversion / sunk cost | Pain of loss outweighs equal gain; reluctance to realize losses | Disposition effect | Escalation of commitment to failing projects | Pre-set stop criteria; rule of ignoring sunk costs |
| Mental accounting | Treating money differently by label | Separate "safe" and "speculative" pots | Treating cash windfalls or "free" retained earnings as costless | Single-pool cost of capital |
| Herding | Following the crowd | Momentum, bubbles | Imitating competitors' investments and acquisitions | Independent valuation |
| Framing | Decisions change with presentation | Different choices on equivalent gambles | Project approval depends on how costs and benefits are packaged | Standardized decision templates |

### 12.5.3 Sentiment and its effect on prices

*Investor sentiment* is a broad term for the optimism or pessimism of the marginal investor not justified by fundamentals. Baker and Wurgler, among others, documented that returns on speculative, hard-to-value stocks (young, unprofitable, high-volatility firms) are predictably lower following high-sentiment periods and higher following low-sentiment periods, while stable, easy-to-value stocks are less affected. The pattern fits the logic of limits to arbitrage: sentiment matters most where valuation is subjective and arbitrage costly.

*Heuristics and extrapolation.* Many investors project recent earnings growth into the future (representativeness) while the empirical record shows that extreme growth tends to mean-revert. A stock with several consecutive years of rapid growth is priced as though the growth will continue, and it disappoints on average. Models by Barberis, Shleifer, and Vishny, and by Daniel, Hirshleifer, and Subrahmanyam, formalize how underreaction to some news (conservatism) can coexist with overreaction to patterns of news (extrapolation), generating both momentum and long-horizon reversal.

### 12.5.4 Rational responses and the debate

Defenders of efficiency argue that the biases are well documented in laboratory settings but may not survive in markets, where competition, learning, and incentives weed out costly errors, and that behavioral explanations are too flexible: with enough biases, any pattern can be rationalized after the fact. Behavioralists reply that the same is true of rational models with enough risk factors, and that behavioral theories make specific, falsifiable predictions, such as the pattern of sentiment effects across stocks. Most scholars now treat the two approaches as complementary: markets are largely efficient in the sense that prices are hard to beat, while psychology and frictions explain some departures and episodes.

## 12.6 Behavioral Biases in Corporate Decisions

Managers are as subject to psychological forces as investors, but with larger stakes and weaker feedback. Two aspects matter most: biased forecasts in capital budgeting, and biased judgments in mergers and financing.

### 12.6.1 The winner's curse in project selection

When a firm chooses the best-looking projects from a large pool of uncertain estimates, the selected projects are disproportionately those whose estimates are too optimistic. This *selection bias*, or winner's curse, makes the average realized NPV of selected projects fall short of their estimated NPV, even if forecasts are unbiased on average.

**Example 12.7 – Shrinking an estimated NPV.**

A firm evaluates many projects. Suppose true NPVs across projects are distributed normally with mean 0 and standard deviation $10 million, and each project's estimated NPV equals true NPV plus an independent forecasting error with mean 0 and standard deviation $10 million. The best Bayesian estimate of true NPV given an estimate of E is:

```
E[true NPV | estimate] = estimate × σ²true / (σ²true + σ²error)
                       = estimate × 100 / (100 + 100) = 0.5 × estimate
```

A project with an estimated NPV of $12 million is expected to deliver only 0.5 × 12 = $6 million. A project that is just barely positive on paper, such as one with an estimate of +$2 million, has an expected true NPV of $1 million, and given that the standard deviation of the posterior is √(100 × 100 / 200) = $7.07 million, there is roughly a 44 percent chance that it actually destroys value. Projects chosen from the top of a ranking are less valuable than they appear. The remedy is to shrink forecasts toward base rates of similar past projects (reference-class forecasting), to demand a margin of safety in the hurdle, and to audit actual outcomes against forecasts so that the error variance can be estimated.

If forecast errors are larger relative to true dispersion, the shrinkage is more severe. With error standard deviation of $20 million (variance 400), the shrinkage factor becomes 100 / (100 + 400) = 0.20, and the $12 million estimate is worth only $2.4 million in expectation.

### 12.6.2 Overconfidence, optimism, and mergers

Overconfident managers overestimate their ability to create value from acquisitions, underestimate integration risk, and believe their firm's stock is undervalued, which makes them reluctant to issue equity and more likely to finance acquisitions with internal cash or debt. Roll's *hubris hypothesis* proposes that acquirers systematically overpay because the managers' valuation includes errors, and the winner of a competitive bid is the one with the most optimistic error. The finding that acquirers on average earn roughly zero abnormal returns around announcements while targets earn large gains is consistent with this account, though also with competitive markets for corporate control. Managers of overconfident firms also tend to invest more, and their investment is more sensitive to internal cash flow.

### 12.6.3 Escalation of commitment

Sunk costs are irrelevant to decisions, yet managers frequently continue to fund failing projects because stopping would require admitting a mistake. The cure is institutional: reviews by people who did not sponsor the original project, explicit abandonment criteria set at approval, and incentive systems that do not penalize reporting bad news early.

## 12.7 Bubbles, Crashes, and Valuation Discipline

### 12.7.1 What is a bubble?

A *bubble* is a sustained deviation of price from fundamental value, typically accompanied by rapid price appreciation, widespread optimism, heavy trading, and an extrapolative narrative ("this time is different"). Because fundamental value is not observed, bubbles can be identified with confidence only afterward. History offers numerous episodes in which prices of an asset class rose dramatically and then fell sharply: the Dutch tulip mania of the 1630s, the South Sea Company in 1720, the technology boom and bust around 2000, and the housing and credit boom ending in 2007 to 2008. Scholars disagree on how many of these were pure irrationality; some argue the rise was explicable by rational expectations of high growth that did not materialize.

Several mechanisms are cited for how bubbles survive. Limits to arbitrage allow rational traders to wait rather than bet against the trend, because shorting is risky and costly (Section 12.4). Rational traders may even "ride the bubble," anticipating that others will keep buying. Positive feedback trading, where rising prices attract more buyers, extrapolating past returns, amplifies the swing. Leverage and credit expansion supply the funds. Financial innovation and new-era narratives supply the justification. And the incentives of professionals, who are judged against peers and who may lose clients if they stand aside while competitors profit, reward herding.

### 12.7.2 Using valuation arithmetic to test a price

Even without knowing the "true" value, a manager can ask what a price implies. The Gordon growth model, P = D1 / (r − g), can be solved for the growth rate that the price requires.

**Example 12.8 – Implied growth and a two-stage valuation.**

A stock trades at $120. Next year's dividend is expected to be $2.40, and the required return is 9 percent.

*Implied perpetual growth:*

```
g = r − D1 / P = 9.0% − 2.40 / 120 = 9.0% − 2.0% = 7.0%
```

A perpetual dividend growth rate of 7 percent is well above the long-run growth rate of most economies, so the price demands that the firm outgrow the economy forever. If a more plausible long-run growth rate of 4 percent applies, the value is:

```
P = 2.40 / (0.09 − 0.04) = 2.40 / 0.05 = $48.00
```

The price is 2.5 times the value implied by plausible growth. Now allow for an extended high-growth period: dividends grow 12 percent per year for years 2 to 5 (D1 = 2.40), then 4 percent forever.

*Dividends:* D1 = 2.400; D2 = 2.688; D3 = 3.011; D4 = 3.372; D5 = 3.776.

*Present value of years 1 to 5 at 9%:* 2.400/1.09 + 2.688/1.09² + 3.011/1.09³ + 3.372/1.09⁴ + 3.776/1.09⁵ = 2.202 + 2.263 + 2.325 + 2.389 + 2.454 = $11.63.

*Terminal value at year 5:* D6 = 3.776 × 1.04 = 3.928; P5 = 3.928 / 0.05 = $78.55. Present value: 78.55 / 1.09⁵ = 78.55 / 1.5386 = $51.05.

```
P0 = 11.63 + 51.05 = $62.68
```

Even with five years of 12 percent growth, the stock is worth about $63, roughly half the quoted price. A price of $120 requires either much longer or faster growth, or a much lower required return, than ordinary assumptions allow. This does not prove a bubble, because the inputs are uncertain, but it quantifies how much optimism the market price embeds and invites the question whether management shares it.

### 12.7.3 Lessons for firms that find themselves inside a bubble

A firm whose shares are inflated faces temptation: issue equity at attractive prices, make acquisitions with overvalued stock, expand capacity to justify the valuation, and reward executives in stock options that pay off from the rise. All of these can be harmful if the bubble bursts. The disciplined response is to separate value from price: estimate intrinsic value with explicit cash-flow forecasts, maintain the cost of capital and hurdle rates that would apply without the bubble (do not lower hurdle rates because the stock is high), and limit leverage so the firm survives the bust.

## 12.8 Implications for Financial Managers

### 12.8.1 A practical stance: trust prices, verify claims

The evidence supports a pragmatic position. For large, liquid, widely followed firms, market prices are an unbiased-enough estimate of value that managers should be skeptical of their own ability to out-guess them, and should regard a persistent belief that "the market is wrong" as a hypothesis requiring evidence. Yet markets are not infallible, and for hard-to-value firms, in times of high sentiment, or when arbitrage is costly, prices may deviate meaningfully from value. The right stance is therefore calibrated: assume the market price is informative, treat deviations as possible, and design decisions that do not depend on guessing the direction of mispricing.

### 12.8.2 Financing and the market-timing temptation

If prices can deviate from value, then financing choices are no longer neutral. When a firm issues shares that are overvalued, existing shareholders gain at the expense of new ones; when it repurchases undervalued shares, continuing shareholders gain at the expense of those who sell. Survey and empirical evidence suggest firms issue equity after periods of high returns and repurchase after low ones, consistent with attempts to time the market; Baker and Wurgler argue that cumulative timing has lasting effects on capital structure.

**Example 12.9 – Wealth transfers from repurchases and issuances when price differs from value.**

Alder Instruments (a fictional firm) has 100 million shares outstanding. Management's best estimate of intrinsic equity value is $5,000 million ($50 per share), while the market price is $40.

*(a) Repurchase of undervalued shares.* The firm spends $400 million to buy back shares at $40:

```
Shares repurchased = 400 / 40 = 10 million
Remaining shares   = 90 million
Intrinsic value of equity after buyback = 5,000 − 400 = 4,600
Intrinsic value per remaining share     = 4,600 / 90 = $51.11
```

Continuing shareholders gain $1.11 per share, or 90 × 1.11 = $100 million, and the sellers lose exactly $100 million (10 million shares × the $10 gap between value and price). The buyback is a wealth transfer from sellers to stayers equal to the mispricing times the shares retired. If the shares had been fairly priced at $50, repurchasing 8 million shares for $400 would leave 4,600 / 92 = $50.00 per share: no gain.

*(b) Issuance of overvalued shares.* Suppose instead the intrinsic value is $30 per share ($3,000 million) while the price is $40, and the firm issues $400 million of equity:

```
New shares issued = 400 / 40 = 10 million; total shares = 110 million
Intrinsic value after issue = 3,000 + 400 = 3,400
Intrinsic value per share   = 3,400 / 110 = $30.91
```

Existing holders' per-share value rises from $30.00 to $30.91, a gain of $0.91 × 100 = $91 million, borne by the new investors who paid $40 for $30.91 of value. The lessons are symmetric. But note the practical constraints: the intrinsic value is the manager's estimate, not a fact; investors know managers have information and may infer overvaluation from an equity issue (which is why share prices on average fall on announcement of seasoned equity offerings); and managers with a stake in the firm, short horizons, or biased judgment may misjudge the gap. A firm that repeatedly "times" the market on the basis of unreliable views may destroy value instead.

### 12.8.3 Capital budgeting under potential mispricing

A key practical principle is that firms should evaluate projects on fundamentals and use a discount rate based on risk rather than adjusting it to current market conditions. Three consequences follow.

*Do not lower the hurdle rate because the stock is rising.* A high share price does not make the capital cheaper in an opportunity cost sense; the cost of capital as defined in Chapter 11 reflects the long-run expected return required for risk. Managers who think of equity as cheap when the price is high tend to over-invest at the top.

*Do not invest merely to please the market.* Catering theories suggest managers may adopt policies, such as paying dividends or adopting fashionable strategies, because investors reward them temporarily. Where this reflects genuine mispricing, a long-term shareholder is better served by decisions based on NPV; where it signals information, the effect is legitimate. Managers need to know which.

*Beware of the tail of the distribution.* If mispricing is in the direction of overvaluation, an NPV-driven firm will still sometimes find that the cheapest source of capital is new equity; issuing then and holding the proceeds in safe assets, if the investment pipeline is empty, is a defensible response and preserves flexibility.

### 12.8.4 Communication, disclosure, and investor relations

If prices respond to information quickly but investors have limited attention, managers have an interest in clear, timely, and credible disclosure that reduces information asymmetry and the discount for uncertainty. Event-study evidence on announcements shows that the market responds to genuinely new information. Evidence on accounting manipulation shows that markets are partially but not completely fooled by earnings management; reputational damage when manipulation is discovered is large. Managers should aim to provide information that is hard for competitors to replicate but that helps investors forecast, avoiding earnings guidance that creates short-term pressure, and ensure that incentive pay is tied to long-term performance rather than the short-run share price.

### 12.8.5 Governance against managerial biases

Because the managers' own biases are a larger practical problem than market inefficiency for most firms, governance mechanisms matter. These include forecasting from outside views and base rates, mandatory post-audits of large investments, separation of project sponsorship from approval, red-team reviews of acquisitions, scenario analysis with explicit downside planning, and compensation that rewards long-run value creation. Each is a response to the bias of a particular kind identified in Table 12.4. Managers can learn from behavioral finance by treating it first as a diagnosis of their own decision processes, and only second as a guide to exploiting others.

## Case Study: Greenfield Components Considers a Share Buyback

*This case is fictional and illustrative; all figures are invented for teaching purposes.*

Greenfield Components is a supplier of precision parts to the automotive industry, listed on a national exchange. It has 80 million shares outstanding, trading at $25, giving a market capitalization of $2.0 billion. The firm has $350 million of cash beyond operating needs and $600 million of debt, which is at a comfortable leverage level.

Eight months ago, the share price was $38. Over that period, the auto sector sold off sharply on concerns about electric-vehicle disruption. Analysts' consensus target price dropped from $40 to $27, with a few downgrades to "sell." Greenfield's own order backlog, however, has risen 6 percent over the period, and the firm has begun to win contracts for components used in electric vehicles that now account for 12 percent of backlog, up from 4 percent.

Greenfield's chief executive, Mirela Costa, has been a vocal bull about the firm's strategy. Last month she purchased $2 million of stock personally, and she is pushing the board to authorize a $300 million buyback. The chief financial officer, Elias Brandt, supports returning some cash but cautions about the logic: "We have been wrong about timing before. Two years ago we issued $200 million of equity at $36 to fund a plant that we now think was oversized, and we have not fully used the capacity. Today, we believe the stock is undervalued by 30 percent. I am not certain our confidence is justified; I know it is hard to distinguish conviction from wishful thinking."

An internal team prepared a discounted cash flow valuation, with a base-case equity value of $3.0 billion ($37.50 per share). They acknowledge that the forecast depends heavily on the pace of conversion to electric-vehicle components. In a downside scenario, where the conversion is slower and margins compress, equity value is $1.7 billion ($21.25 per share); in an upside scenario it is $4.0 billion ($50 per share). The team assigns probabilities of 30 percent to the downside, 50 percent to the base case, and 20 percent to the upside, giving an expected equity value of $2.81 billion ($35.13 per share) (0.30 × 1.7 + 0.50 × 3.0 + 0.20 × 4.0). The team also notes that its previous forecasts of the three prior years exceeded actual results by an average of about 15 percent.

A board member, a retired investment manager, raises questions. "The market has priced in the headwinds. What do we know that thousands of investors with access to the same filings do not? And if the stock is cheap, are we better off spending the money on a bolt-on acquisition, or on the capacity that EV customers want?" Another director notes that executive bonuses are tied in part to earnings per share, which a buyback would raise mechanically, and asks whether that creates a conflict.

The treasurer adds a practical complication. Greenfield's shares are moderately liquid. A $300 million repurchase would be about 15 percent of market capitalization and, executed over six months, would probably move the price upward, implying an average price above the current $25. And if the downside scenario materialized after the buyback, the firm would have less cash to absorb it.

### Discussion Questions

1. Compute the expected value per share under the team's scenario weights, then adjust it for the team's historical forecast optimism (15 percent). Using the adjusted value, estimate the gain or loss per continuing share from a $300 million buyback at an average price of $27. How sensitive is your answer to the assumptions?
2. Which behavioral biases might be affecting Mirela, Elias, and the internal team? Classify each using Table 12.4 and suggest governance practices to counter them.
3. Interpret the CEO's personal share purchase and the broader market's reaction to the buyback announcement using the semi-strong-form framework. What would an event study of the announcement test, and how would you separate "information" from "mispricing correction"?
4. Evaluate alternatives to the buyback (acquisition, capacity expansion, special dividend, debt reduction) from the standpoint of value, risk, and signaling. Does the EPS-linked bonus plan create a conflict, and what change would you recommend?

## Key Takeaways

- The efficient market hypothesis claims that prices reflect available information so that no strategy earns abnormal returns after costs and risk. It comes in weak, semi-strong, and strong forms, defined by the information set.
- All tests of efficiency are joint tests of the information hypothesis and an asset-pricing model; a pattern in returns cannot by itself distinguish mispricing from unmodeled risk.
- Event studies measure the price reaction to news using abnormal returns relative to a model such as the market model; they are the standard tool for judging the value impact of corporate actions and for testing the speed of price adjustment.
- Anomalies such as momentum, value, and post-earnings drift are well documented, but many shrink after publication, and data snooping makes new discoveries suspect; demand stricter statistical thresholds for newly found patterns.
- Arbitrage is limited by fundamental risk, noise-trader risk, short-selling constraints, transaction costs, and the incentives of leveraged intermediaries, so mispricing can persist without implying easy profits.
- Investors and managers exhibit systematic biases, including overconfidence, anchoring, loss aversion, herding, and representativeness, that affect trading, forecasting, and capital allocation.
- The winner's curse means that projects chosen for their high estimated NPVs are on average worth less than estimated; shrink estimates toward base rates and audit outcomes.
- When price and intrinsic value diverge, repurchases and issuances transfer wealth between continuing and exiting or entering shareholders, but managers' estimates of intrinsic value are fallible and the market reads the action as a signal.
- Test any extreme price by asking what growth or discount rate it implies; do not lower the hurdle rate because the share price is high.
- The practical stance is to trust market prices as informative, evaluate projects on fundamentals with risk-based discount rates, guard against one's own biases through governance, and avoid decisions that depend on being smarter than the market.

## Review Questions

1. State the three forms of the efficient market hypothesis and give an example of a strategy ruled out by each.
2. What is the joint hypothesis problem, and why does it prevent a decisive test of market efficiency?
3. Explain why a statistically significant autocorrelation in daily returns does not necessarily imply a profitable trading strategy.
4. Describe the steps in an event study. Why is a market model used rather than raw returns?
5. Why are long-horizon event studies less reliable than short-horizon ones?
6. Distinguish three interpretations of an apparent anomaly. What evidence would help choose among them?
7. Explain the multiple-testing problem and how a Bonferroni correction addresses it.
8. List the main limits to arbitrage and explain how each can allow mispricing to persist.
9. How does loss aversion contribute to the disposition effect and to escalation of commitment in firms?
10. Under what conditions would a share repurchase create value for continuing shareholders, and what risks does a manager face in judging that condition is met?

## Problems

**Problem 12.1.** A stock's market model has α = 0.03 percent per day and β = 1.25. On an announcement day, the market return is 1.2 percent and the stock return is 3.2 percent. Compute the expected return and the abnormal return.

**Problem 12.2.** The abnormal returns on three consecutive days around an event are +0.8%, +1.9%, and −0.5%. The residual standard deviation of the market model is 1.1 percent per day. Compute the CAR and its t-statistic (assume independence across days).

**Problem 12.3.** An event study of 36 firms finds a mean CAR of 2.4 percent with cross-sectional standard deviation of 6.0 percent. Compute the t-statistic. Is the mean CAR significant at the 5 percent level (critical value about 2.03)?

**Problem 12.4.** A researcher examines 20 independent signals at the 5 percent level, none of which has real predictive power. (a) What is the probability that at least one appears significant? (b) What per-test significance level restores a 5 percent overall error rate under the Bonferroni correction?

**Problem 12.5.** A firm has 60 million shares and an intrinsic equity value of $3,000 million ($50 per share). The market price is $40. It repurchases $200 million of stock at $40. Compute the number of shares retired, the intrinsic value per remaining share, and the total gain to continuing shareholders.

**Problem 12.6.** A stock trades at $80, with an expected next-year dividend of $2.00 and a required return of 8 percent. (a) Compute the perpetual growth rate implied by the price. (b) Compute the stock's value if long-run growth is 3.5 percent.

**Problem 12.7.** A long-short strategy has a gross expected return of 7.0 percent per year. Trading costs are 1.2 percent, short-borrowing fees are 2.5 percent, and price impact is 1.0 percent. Compute the net return and the share of the gross return consumed by costs.

**Problem 12.8.** True project NPVs have a standard deviation of $10 million (mean zero), and the estimation error has a standard deviation of $8 million. A project is estimated to have an NPV of $15 million. Compute the shrinkage factor and the expected true NPV.

### Answers to Selected Problems

- **12.1.** Expected return = 0.03% + 1.25 × 1.2% = 0.03% + 1.50% = 1.53%. Abnormal return = 3.2% − 1.53% = +1.67%.
- **12.2.** CAR = 0.8 + 1.9 − 0.5 = 2.2%. Standard deviation of the CAR = 1.1 × √3 = 1.905%. t = 2.2 / 1.905 = 1.155, not significant at 5 percent.
- **12.3.** Standard error = 6.0 / √36 = 1.0%. t = 2.4 / 1.0 = 2.40, which exceeds 2.03, so the mean CAR is significant.
- **12.4.** (a) 1 − 0.95^20 = 1 − 0.3585 = 64.2%. (b) 0.05 / 20 = 0.25% (0.0025) per test.
- **12.5.** Shares retired = 200 / 40 = 5 million; remaining = 55 million. Intrinsic value per remaining share = (3,000 − 200) / 55 = $50.91. Gain = $0.91 per share, or about 55 × 0.909 = $50 million in total.
- **12.6.** (a) g = 8.0% − 2.00 / 80 = 8.0% − 2.5% = 5.5%. (b) P = 2.00 / (0.08 − 0.035) = 2.00 / 0.045 = $44.44.
- **12.7.** Net return = 7.0 − 1.2 − 2.5 − 1.0 = 2.3% per year. Costs consume 4.7 / 7.0 = 67% of the gross return.
- **12.8.** Shrinkage factor = 100 / (100 + 64) = 0.610. Expected true NPV = 0.610 × 15 = $9.15 million.
