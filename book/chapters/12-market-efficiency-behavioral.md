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
