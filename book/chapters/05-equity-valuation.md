# Chapter 5: Equity Valuation

## Learning Objectives

After studying this chapter you should be able to:

- Derive the dividend discount model (DDM) from the principle that a share is worth the present value of the cash it will deliver to its owner, and apply it over finite and infinite horizons.
- Use the constant-growth (Gordon) model to value a share, to back out the market's implied required return or implied growth rate, and to explain why the model breaks down when growth approaches the discount rate.
- Link dividend growth to corporate fundamentals through the retention ratio and return on equity, and judge whether growth creates or destroys value.
- Build and interpret a multi-stage valuation, and explain why the terminal value usually dominates the answer.
- Decompose a share price into the value of assets in place and the present value of growth opportunities (PVGO), and use this to interpret price-earnings (P/E) ratios.
- Value preferred stock as a perpetuity, and describe how the mechanics of stock markets (order types, spreads, margin, indices) shape the prices and returns investors actually experience.

## Opening Vignette

*Illustrative scenario. Verdant Grid Systems is a fictional company.*

Verdant Grid Systems designs control software for regional electricity distributors. After a decade of rapid expansion it has become profitable, and its board is debating two questions that look unrelated but are really the same question. The first comes from the chief financial officer, Marisol Quade: "Our shares trade at $62. Are we cheap, fair, or expensive, and how would we know?" The second comes from the head of strategy, Dev Anand: "We can reinvest 70 percent of earnings in new grid-analytics products, or we can raise the payout and buy back stock. Which one makes the shares worth more?"

Marisol begins with what she can observe. Next year's earnings are expected to be $4.00 per share, and the company currently pays out 40 percent of them. Analysts expect growth of roughly 6 percent for the foreseeable future. Investors in comparable software-and-infrastructure companies appear to demand about 10 percent. She calculates in a few lines that a $1.60 dividend growing at 6 percent, discounted at 10 percent, is worth $40 per share. The market is paying $62. Either investors are more optimistic than the analysts, or they see growth opportunities that the simple formula has not captured, or the required return is lower than 10 percent.

Dev's question turns out to be sharper. If new products earn 14 percent on the money invested, retention creates value. If they earn 8 percent, then every dollar retained is worth less than a dollar to shareholders, and a buyback would be better. Neither executive can answer without a framework that connects dividends, growth, risk and the return on reinvested capital.

This chapter provides that framework. We begin with the logic that makes a share worth the present value of its payouts, move to the models that practitioners use, and examine what price-earnings ratios say about growth. We then look at preferred stock and the market machinery through which shares trade. By the end, Marisol's puzzle ($62 versus $40) will be something you can decompose into specific, testable assumptions.

## 5.1 From Cash Flows to Share Prices: The Dividend Discount Model

### 5.1.1 The valuation principle

Chapter 4 valued bonds by discounting contractual cash flows at a rate that reflects risk. Stocks follow the same principle with two complications: the cash flows are not promised, and they have no maturity date. A share of common stock is a residual claim. Shareholders receive whatever is left after creditors, taxes and reinvestment needs, and they hold that claim for as long as the firm survives. Despite these complications, the economic logic is unchanged: the value of any asset is the present value of the cash its owner expects to receive, discounted at the return available on alternative investments of equivalent risk.

The expected cash flows to a shareholder are dividends while the share is held and a sale price at the end. Because the next buyer will also value the share as the present value of her own expected dividends and resale price, the sale price is itself a present value of later dividends. Substituting repeatedly, the resale prices disappear and the price today depends only on dividends.

### 5.1.2 One-period model

Suppose an investor plans to hold a share for one year. Let D₁ be the dividend expected at the end of the year, P₁ the expected price then, and r the required return (the cost of equity). The price today is

```
P₀ = (D₁ + P₁) / (1 + r)
```

Equivalently, the required return is the sum of the expected dividend yield and the expected capital gain:

```
r = D₁ / P₀ + (P₁ − P₀) / P₀
```

This second form is useful because it shows what the market must offer to compensate investors: income, appreciation, or some mix. A utility paying out most of its earnings offers mostly yield; a young technology company paying nothing must offer all of its return as expected appreciation.

**Example 5.1 – One-year holding period.** An investor expects a share of Verdant Grid to pay a dividend of $2.10 in one year and to trade at $45.00 at that time. The investor requires a return of 9 percent.

Step 1: Add the expected cash received at the end of the year: 2.10 + 45.00 = $47.10.

Step 2: Discount one year at 9 percent: P₀ = 47.10 / 1.09 = $43.21.

Step 3: Check by computing the implied return if the share is bought at $43.21: dividend yield = 2.10 / 43.21 = 4.86 percent; capital gain = (45.00 − 43.21) / 43.21 = 4.14 percent; total = 9.00 percent. If the market price were $46, the expected return would fall to (47.10 / 46) − 1 = 2.39 percent, and the investor would pass.

### 5.1.3 Extending the horizon

If the investor holds for two years, P₁ is replaced by the present value at date 1 of D₂ and P₂, and so on. After N years:

```
P₀ = D₁/(1+r) + D₂/(1+r)² + … + D_N/(1+r)^N + P_N/(1+r)^N
```

Letting N grow without bound, the last term shrinks toward zero provided the price grows more slowly than the discount rate (an assumption that excludes explosive bubbles), and the price becomes the present value of an infinite stream:

```
P₀ = Σ (t = 1 to ∞) D_t / (1 + r)^t
```

This is the **dividend discount model (DDM)**. Its message is deceptively simple and often misunderstood. It does not say that investors care only about dividends in the short run, nor that a company that pays no dividend today is worthless. It says that, ultimately, the only cash a shareholder can extract from a firm is distributions: dividends, repurchases, or a final liquidating payment. A firm that never distributed anything to anyone would be worth nothing. Companies that pay no dividends now are, in effect, promising larger distributions later.

### 5.1.4 Estimating the required return

The discount rate r is the cost of equity capital. Chapter 3 developed the capital asset pricing model, in which

```
r = r_f + β × (market risk premium)
```

Suppose the risk-free rate is 4.0 percent, the market risk premium is 5.5 percent and a company's equity beta is 1.2. Then r = 4.0 + 1.2 × 5.5 = 10.6 percent. The estimate is only as good as its inputs. Beta estimated from five years of monthly returns carries a wide standard error, and the market risk premium is a judgment rather than a measurement. Managers should treat the discount rate as a range, a point we revisit repeatedly because valuation is highly sensitive to it.

### 5.1.5 Why dividends, and not earnings?

A common objection is that earnings, not dividends, measure what the firm produces. But earnings that are retained are reinvested, and investors benefit only if the reinvestment earns at least the required return. Valuing earnings directly would double count: it would credit shareholders with earnings that the firm spent on new assets, and then credit them again with the later earnings those assets generate. The DDM avoids double counting by valuing only what leaves the firm. We will see in Section 5.5 how the earnings-based and dividend-based views reconcile exactly, through the concept of growth opportunities.

Two practical remarks complete the foundation. First, when firms return cash through repurchases rather than dividends, the DDM can be applied to total payout (dividends plus repurchases) divided by the current number of shares, or equivalently to free cash flow to equity. Second, the DDM values minority stakes in publicly traded firms where the investor cannot control the payout. An acquirer who controls the firm values the underlying cash flows rather than the dividends the current board chooses to pay; that approach is developed in later chapters on enterprise valuation.

## 5.2 The Constant-Growth (Gordon) Model

### 5.2.1 Derivation and formula

Forecasting an infinite series of dividends is impossible, so we need simplifying assumptions. The simplest is that dividends grow at a constant rate g forever, so that D_t = D₀(1 + g)^t. The infinite sum is then a growing perpetuity, which has a closed form when r > g:

```
P₀ = D₁ / (r − g)
```

where D₁ = D₀ × (1 + g). This is the **Gordon growth model**, named after Myron Gordon, who popularized it (it is also called the Gordon-Shapiro model). It is the most heavily used equation in equity valuation and also among the most abused.

Three features deserve emphasis. First, the formula uses next year's dividend, D₁, not the one just paid. Mixing these up is the single most common error in student work. Second, the formula gives the price at the date one period before the first dividend; it values a stream that starts one year from now. Third, the denominator r − g is a small number obtained by subtracting two uncertain ones, so tiny changes in either input cause large changes in value.

**Example 5.2 – Gordon growth valuation and implied return.** Verdant Grid's peer, Meridian Instruments (fictional), just paid an annual dividend of $2.00 per share. Dividends are expected to grow at 4 percent per year indefinitely. The required return is 9 percent.

Step 1: Next year's dividend: D₁ = 2.00 × 1.04 = $2.08.

Step 2: Apply the model: P₀ = 2.08 / (0.09 − 0.04) = 2.08 / 0.05 = $41.60.

Step 3: Suppose the stock actually trades at $50. Solve for the return the market is implicitly pricing: r = D₁/P₀ + g = 2.08 / 50 + 0.04 = 4.16% + 4.00% = 8.16 percent. A buyer at $50 earns an expected 8.16 percent if growth is really 4 percent. Alternatively, holding r at 9 percent, the market price implies growth of g = r − D₁/P₀ approximately; solving exactly, 50 = 2.00(1+g)/(0.09 − g) gives g = (50 × 0.09 − 2.00) / (50 + 2.00) = 2.50 / 52 = 4.81 percent.

Step 4: Interpretation. At $50 the market is either demanding about 0.8 percentage points less than 9 percent or expecting almost 0.8 points more growth. Both views are defensible, and the analyst's job is to decide which is more plausible.

### 5.2.2 Sensitivity to r and g

The table below shows the value of a share with D₁ = $2.00 for different combinations of required return and growth. Notice how the price doubles from $50 to $100 when g moves from 4 percent to 6 percent at an 8 percent discount rate.

| g \ r | 8% | 9% | 10% | 11% | 12% |
|---|---|---|---|---|---|
| 2% | 33.33 | 28.57 | 25.00 | 22.22 | 20.00 |
| 3% | 40.00 | 33.33 | 28.57 | 25.00 | 22.22 |
| 4% | 50.00 | 40.00 | 33.33 | 28.57 | 25.00 |
| 5% | 66.67 | 50.00 | 40.00 | 33.33 | 28.57 |
| 6% | 100.00 | 66.67 | 50.00 | 40.00 | 33.33 |

*Table 5.1 – Gordon model price with D₁ = $2.00 (illustrative).*

The lesson is humility. A one-point error in the spread (r − g) can change the answer by 25 to 50 percent. Responsible practitioners therefore present valuation as a grid or a range, never a single number, and they ask which assumptions the answer depends on most.

### 5.2.3 Limits of the model

The model requires r > g. If g ≥ r the formula gives a negative or infinite price, which is a signal that the assumption of perpetual growth at that rate is impossible. No firm can grow faster than the economy forever, because it would eventually become larger than the economy. In practice, the long-run g should not exceed the long-run growth of nominal GDP, and in many analyses it is set near expected inflation plus a small real component.

The model also fits only firms whose dividends are stable, positive and growing smoothly: regulated utilities, consumer staples, mature banks. It does poorly for young firms that pay nothing, cyclical firms with erratic payouts, and firms in transition. For these, the multi-stage models of Section 5.4 or the earnings-based approach of Section 5.5 are more appropriate.

Finally, the Gordon model is a **price model that holds at every date**, not only today. If dividends grow at g forever, then the price also grows at g: P₁ = P₀(1 + g). The total return is therefore the dividend yield plus the growth rate, r = D₁/P₀ + g. The model should be read as an equilibrium relationship between yield, growth and required return. Any one of the three can be inferred from the other two.

### 5.2.4 Common mistakes

- Using D₀ in the numerator instead of D₁, which understates the value by a factor of (1 + g).
- Choosing a growth rate above the long-run growth of the economy, then concluding that the stock is hugely undervalued.
- Using a recent burst of growth (say, 18 percent over three years) as the perpetual g.
- Using a discount rate that does not match the risk of the dividends, such as a bond yield for a volatile equity stream.
- Forgetting that the model delivers price at one period before the first dividend. If the first dividend is received two years from now, the formula gives the price one year from now, and it must be discounted once more.

## 5.3 Growth from Fundamentals: Retention, ROE and Value Creation

### 5.3.1 Where does growth come from?

Growth is not a free parameter; it must be financed. A firm that retains a fraction b of its earnings (the **retention ratio**, or plowback ratio) and reinvests at a return on equity of ROE can grow earnings and dividends at

```
g = b × ROE
```

provided the firm's capital structure is stable and the new investments earn the same ROE as the old. The payout ratio is 1 − b. Dividends are D₁ = (1 − b) × EPS₁. Substituting into the Gordon model:

```
P₀ = (1 − b) × EPS₁ / (r − b × ROE)
```

This is a powerful formula because it ties the stock price to three operating decisions: how much to reinvest, how profitably to reinvest it, and how risky the business is.

### 5.3.2 Does retention create value?

The derivative of price with respect to b depends on the comparison of ROE with r. Increasing retention lowers current dividends but raises growth. If ROE > r, the extra growth more than compensates for the lost dividends and value rises. If ROE = r, retention is a wash: shareholders could have earned the same return themselves, so price does not change. If ROE < r, retention destroys value. A dollar reinvested at 8 percent when shareholders require 10 percent is worth less than a dollar.

**Example 5.3 – The effect of retention depends on ROE.** Verdant Grid expects EPS₁ = $5.00 and has a required return of 10 percent. We compare three scenarios in which the company retains 60 percent of earnings (b = 0.6) but earns different returns on reinvested equity.

Step 1: Dividend = (1 − 0.6) × 5.00 = $2.00 in each case.

Step 2: Growth rates: ROE 8 percent gives g = 0.6 × 0.08 = 4.8 percent; ROE 10 percent gives 6.0 percent; ROE 15 percent gives 9.0 percent.

Step 3: Prices: with ROE 8 percent, P₀ = 2.00 / (0.10 − 0.048) = 2.00 / 0.052 = $38.46; with ROE 10 percent, P₀ = 2.00 / 0.04 = $50.00; with ROE 15 percent, P₀ = 2.00 / (0.10 − 0.09) = 2.00 / 0.01 = $200.00.

Step 4: Benchmark. If the firm paid out all earnings and did not grow, price would be EPS₁ / r = 5.00 / 0.10 = $50.00. Retention at ROE = r leaves the price at $50; retention at ROE 8 percent cuts it to $38.46; retention at 15 percent quadruples it.

The extreme sensitivity of the last case (a price of $200 from a spread of one point) is itself a warning: a 15 percent return on 60 percent reinvestment is hard to sustain, because attractive opportunities are scarce and competition erodes returns. Managers presenting growth plans should be asked how long the high ROE can be maintained, which leads naturally to the multi-stage model.

### 5.3.3 Practical considerations

Real firms do not hold a constant ROE. Accounting ROE is an average over old and new assets and is affected by depreciation methods, goodwill and buybacks. For valuation, the relevant figure is the **return on new investment** (marginal ROE). Firms with persistent competitive advantages (strong brands, network effects, regulatory franchises) can sustain high marginal returns; firms in commodity industries typically cannot. The distinction between growth and *profitable* growth is central to managerial decisions on capital allocation and payout policy. A manager who follows the rule "grow at all costs" without comparing ROE with r is destroying shareholder value while reporting rising earnings.

A related point concerns leverage. ROE can be raised by borrowing, but so does the required return r, since equity becomes riskier. A valid comparison of ROE with r must hold the capital structure fixed, otherwise the apparent value creation is just transferred risk.

## 5.4 Multi-Stage Growth Models

### 5.4.1 The logic of stages

Few firms grow at one rate forever. A typical life cycle features a high-growth phase in which opportunities are abundant, a transition in which competition compresses growth, and a mature phase in which growth settles near the economy's. Multi-stage models capture this by assigning different growth rates to different periods. In the simplest, the **two-stage model**, dividends grow at g₁ for N years and at a sustainable g₂ thereafter:

```
P₀ = Σ (t = 1 to N) D_t / (1+r)^t  +  [D_{N+1} / (r − g₂)] / (1+r)^N
```

The second term is the present value of the **terminal value** (or continuing value): the Gordon price at date N of all the dividends from year N + 1 onward. Many analysts also use a three-stage variant in which the growth rate declines linearly from g₁ to g₂ over a transition period, which avoids the unrealistic cliff at the end of the high-growth phase.

### 5.4.2 A worked two-stage valuation

**Example 5.4 – Two-stage dividend valuation.** Helios Storage Systems (fictional) just paid a dividend of $1.50 per share (D₀). Dividends are expected to grow at 15 percent per year for the next four years, and at 5 percent per year thereafter. The required return is 10 percent.

Step 1: Dividends during the high-growth phase.

| Year | Calculation | Dividend ($) | Discount factor 1/1.10^t | Present value ($) |
|---|---|---|---|---|
| 1 | 1.5000 × 1.15 | 1.7250 | 0.9091 | 1.5682 |
| 2 | 1.7250 × 1.15 | 1.9838 | 0.8264 | 1.6395 |
| 3 | 1.9838 × 1.15 | 2.2813 | 0.7513 | 1.7140 |
| 4 | 2.2813 × 1.15 | 2.6235 | 0.6830 | 1.7919 |
| Total | | | | 6.7135 |

*Table 5.2 – Present value of high-growth dividends (rounded).*

Step 2: First dividend of the mature phase: D₅ = 2.6235 × 1.05 = $2.7547.

Step 3: Terminal value at the end of year 4: TV₄ = D₅ / (r − g₂) = 2.7547 / (0.10 − 0.05) = 2.7547 / 0.05 = $55.09.

Step 4: Discount the terminal value to today: PV(TV) = 55.09 / 1.10⁴ = 55.09 / 1.4641 = $37.63.

Step 5: Share price: P₀ = 6.71 + 37.63 = $44.34.

Step 6: Interpretation. The terminal value accounts for 37.63 / 44.34 = 84.9 percent of the total. Even though the company enjoys four years of 15 percent growth, most of the value comes from what happens after year four. This is typical of growth stock valuations. If the analyst had used the Gordon model with the initial 15 percent growth, the model would have been unusable (g > r); had she used 5 percent from the start, she would have obtained 1.5 × 1.05 / 0.05 = $31.50, understating by $12.84 the value of the temporary growth.

### 5.4.3 Why the terminal value dominates

The terminal value dominates because it is a perpetuity discounted over a finite horizon. The shorter the high-growth phase, the larger the share of value in the terminal term. Three practical consequences follow.

First, the terminal growth rate and the discount rate must be chosen with great care, since they drive most of the value. Second, the terminal growth rate should be internally consistent with the terminal payout and ROE. If a firm is assumed to grow at 5 percent forever with an ROE of 10 percent, then b = g / ROE = 50 percent must be retained, and the terminal dividend must reflect that. Models that assume high growth with low retention quietly assume that growth is free. Third, terminal-value cross-checks are worthwhile. The implied terminal P/E in Example 5.4 can be computed from the terminal price and expected year-five earnings; if it far exceeds the multiples of mature companies, the assumptions should be reconsidered.

### 5.4.4 When dividends are not the right cash flow

Many growth companies pay no dividends for years. The two-stage model can still be applied by treating the early dividends as zero and valuing a terminal price when the firm is expected to begin paying. A cleaner approach is to value **free cash flow to equity**: cash generated for shareholders after investment and after net borrowing, whether or not it is distributed. Under the assumption that the firm eventually distributes all free cash flow to equity, the two approaches coincide. For firms that hoard cash (retaining without a plan to invest), the dividend approach gives a lower value than the FCFE approach, and the difference measures the agency cost of idle cash. We return to this theme in the chapters on payout policy and corporate governance.

## 5.5 Price-Earnings Ratios and Growth Opportunities

### 5.5.1 The P/E ratio

The P/E ratio is the share price divided by earnings per share. Analysts use trailing P/E (price over last year's EPS) and forward P/E (price over expected EPS₁). From the constant-growth model, the forward P/E is

```
P₀ / EPS₁ = (1 − b) / (r − g)
```

so the ratio depends positively on the payout ratio and on growth, and negatively on the required return. A high P/E can mean high expected growth, low perceived risk, or both. The reciprocal, EPS₁/P₀, is the **earnings yield**. It equals r only for a no-growth firm that pays out all earnings.

### 5.5.2 Decomposing price: assets in place plus PVGO

A firm that never invested in anything new and paid out all earnings would be worth

```
P₀ (no growth) = EPS₁ / r
```

This is the value of **assets in place**: the existing business perpetually earning what it earns now. If the firm has opportunities to invest in positive-NPV projects, the price will exceed this benchmark. The difference is the **present value of growth opportunities**:

```
P₀ = EPS₁ / r + PVGO
```

PVGO is the net present value, as of today, of all the future investments the firm will make. Its sign and size are governed by the same logic as in Section 5.3: growth projects that earn more than r contribute positively; those that earn less contribute negatively. A firm may well have a negative PVGO if management has a record of undertaking poor projects, in which case the market price is below the value of simply liquidating the earnings stream, and investors may press for higher payouts.

**Example 5.5 – Decomposing the price and interpreting the P/E.** Return to the 15 percent ROE case of Example 5.3. EPS₁ = $5.00, r = 10 percent, b = 0.6, ROE = 15 percent, g = 9 percent, price $200.

Step 1: Value of assets in place: 5.00 / 0.10 = $50.00.

Step 2: PVGO = 200.00 − 50.00 = $150.00.

Step 3: Share of price from growth: 150 / 200 = 75 percent.

Step 4: Forward P/E = 200 / 5 = 40. A no-growth firm with the same required return would have P/E = 1/r = 10. We can therefore write P/E = (1/r) × (1 + PVGO / (EPS₁/r)) = 10 × (1 + 150/50) = 10 × 4 = 40.

Step 5: Contrast with the ROE = 8 percent scenario: price 38.46, assets in place 50.00, PVGO = −11.54. The company's growth plan subtracts $11.54 per share. Shareholders would be better off if management stopped investing and paid out earnings.

The following table summarizes the four scenarios (EPS₁ = 5.00, r = 10%, b = 0.6).

| ROE | g = b × ROE | Price ($) | Assets in place ($) | PVGO ($) | Forward P/E |
|---|---|---|---|---|---|
| 8% | 4.8% | 38.46 | 50.00 | −11.54 | 7.7 |
| 10% | 6.0% | 50.00 | 50.00 | 0.00 | 10.0 |
| 12% | 7.2% | 71.43 | 50.00 | 21.43 | 14.3 |
| 15% | 9.0% | 200.00 | 50.00 | 150.00 | 40.0 |

*Table 5.3 – Growth opportunities and P/E (illustrative).*

### 5.5.3 Reading P/E ratios sensibly

P/E ratios are useful as shorthand but dangerous as standalone evidence. Several cautions apply.

**Earnings quality.** Accounting earnings are affected by depreciation methods, one-off charges, stock-based compensation and discretionary accruals. Two companies with identical economics may report different EPS and hence different P/Es. Analysts normalize earnings for non-recurring items before comparing.

**Cyclicality.** At the trough of a cycle earnings are depressed and the P/E looks very high; at the peak, earnings are inflated and the P/E looks low. Cyclical companies are better assessed on normalized or average earnings.

**Capital structure.** P/E ratios are affected by leverage because earnings are after interest. Enterprise multiples such as EV/EBITDA are more comparable across firms with different debt levels.

**Comparable-company analysis.** In practice, analysts value a company by applying the multiples of similar firms to its own earnings. This presupposes that the comparables share similar growth, risk and payout. The constant-growth formula is a reminder of what must be comparable: the spread r − g and the payout ratio. Applying a peer's P/E of 20 to a company whose growth is half the peer's would badly overvalue it.

**Interpretation in Marisol's puzzle.** Verdant Grid's CFO obtained $40 from a $1.60 dividend growing at 6 percent with a 10 percent discount rate. The market price of $62 implies $22 per share for something the simple model does not capture. If earnings of $4.00 with no growth would be worth 4.00 / 0.10 = $40.00, then the Gordon price of $40 corresponds to PVGO of zero: the 6 percent growth at a 40 percent payout implies ROE = g / b = 0.06 / 0.60 = 10 percent, exactly equal to r. The market is therefore pricing in PVGO of $22, which requires either a higher return on reinvestment than 10 percent or a longer period of above-average growth. That is a concrete, debatable claim about Verdant's future, which is exactly what valuation should deliver.

### 5.5.4 PVGO and corporate strategy

The PVGO view clarifies strategic questions. A mature firm whose value is mostly assets in place has stable cash flows and should return excess cash to shareholders, since little growth is available at attractive returns. A young firm whose value is mostly PVGO is vulnerable to changes in the discount rate and in competitive position, because its value rests on future decisions and distant cash flows. When interest rates rise, high-PVGO stocks tend to fall more than low-PVGO stocks, because a larger share of their value lies in the far future. Managers should understand which type of firm they run, because the investor base, financing strategy and payout policy appropriate to each differ.

## 5.6 Preferred Stock and Other Equity Claims

### 5.6.1 Characteristics of preferred stock

Preferred stock is a hybrid security that stands between debt and common equity. It pays a stated dividend, usually fixed as a percentage of par (face) value or as a dollar amount per share, and it ranks ahead of common stock but behind all debt in claims on income and on assets in liquidation. Unlike interest on debt, a preferred dividend is not a legal obligation: the board may suspend it without triggering bankruptcy. Common features include:

- **Cumulative dividends.** Unpaid preferred dividends accumulate and must be paid before any dividend on common stock. Non-cumulative preferred lacks this protection and is therefore riskier.
- **Priority in liquidation.** Preferred holders are paid before common holders, up to par or a stated liquidation preference.
- **Limited or no voting rights**, unless dividends are in arrears for a specified period.
- **Optional features.** Some issues are callable by the company, convertible into common shares, or carry a sinking fund. Others are participating, sharing in extra profits.
- **Tax treatment.** In many jurisdictions the dividends are not deductible to the issuer, which makes preferred stock more costly than debt after tax. In some jurisdictions, corporate holders receive a partial exclusion on dividend income, which makes preferred stock attractive to corporate investors and explains why they are the main buyers. Treatment varies by country and changes over time; check current rules before relying on any generalization.

Because the dividend is fixed and has no maturity, non-convertible, non-callable preferred stock is a perpetuity, and valuation is simple.

### 5.6.2 Valuation

```
P₀ = D_p / r_p
```

where D_p is the annual preferred dividend and r_p is the required return on preferred stock of comparable risk. The rate r_p lies above the yield on the firm's senior debt, because preferred is junior, and below the cost of common equity, because it has a fixed payout and priority over the common. The implied yield of an existing issue is D_p / P₀. If the preferred stock is cumulative and dividends are in arrears, the present value of the arrears must be added to the claim, and the market price will reflect the probability that arrears are paid.

**Example 5.6 – Valuing preferred stock.** Meridian Instruments has outstanding $100 par preferred stock with a 5 percent dividend, so D_p = $5.00 per year. Comparable preferred issues yield 6.25 percent.

Step 1: Value = 5.00 / 0.0625 = $80.00.

Step 2: If the market yield on comparable issues rises to 8 percent, the value falls to 5.00 / 0.08 = $62.50, a drop of 21.9 percent. If it falls to 5 percent, the value rises to $100.00, which is par.

Step 3: Compare with common stock. A common stock paying a dividend that grows at 3 percent with the same $5.00 first-year dividend at r = 9 percent would be worth 5.00 / (0.09 − 0.03) = $83.33. The preferred share trades below that because it forgoes any growth, but its price is far less volatile if the company's fortunes change.

Step 4: A call feature. If the issuer can call the preferred at $100 and the yield falls to 5 percent, investors cannot expect the price to rise much above the call price; callable preferred has capped upside, as callable bonds do.

### 5.6.3 Why firms issue preferred

For issuers, preferred stock provides capital that does not dilute control (non-voting), does not create default risk (dividends can be omitted), and may be treated partially as equity by rating agencies. It is used by banks and utilities to meet capital requirements and by growing companies seeking a form of financing between debt and equity. Venture capital investors typically receive convertible preferred shares with special rights, which gives them downside protection in a liquidation and the upside of conversion into common if the venture succeeds. The cost to the issuer is the higher required return and the non-deductibility of dividends in many tax systems.

### 5.6.4 Warrants, convertibles and the broader equity picture

Common stock can also be affected by other equity-linked claims: options granted to employees, warrants, and convertible securities. When these are exercised they dilute existing holders. A value per share computed from total equity value must be divided by the fully diluted share count, which includes in-the-money options and convertibles on an as-converted basis. Ignoring dilution is a frequent source of overvaluation in technology and start-up companies where stock compensation is heavy. The valuation of options themselves is the subject of a later chapter.

## 5.7 Stock Market Mechanics

Valuation models give intrinsic value; the market sets the price at which you can trade. Understanding how trading works matters to managers because it determines the cost of raising equity, the information that prices convey, and the way investors earn returns.

### 5.7.1 Primary and secondary markets

In the **primary market** firms sell new shares to raise capital, through an initial public offering (IPO) or a seasoned equity offering. Investment banks underwrite the issue, advise on pricing, and distribute the shares. Underwriting costs and the common phenomenon of "underpricing" (shares rising on the first day of trading) are real costs to the issuing firm, although the size of the effect varies across time and markets. In the **secondary market** investors trade existing shares among themselves. The company receives no cash from these trades, but the secondary market is crucial: it gives shareholders liquidity, which lowers the return investors demand when buying new shares, and it produces a continuous price that serves as a performance signal and as currency for acquisitions and employee compensation.

### 5.7.2 Exchanges and trading venues

Shares are traded on organized exchanges, in electronic trading networks, and in dealer markets. In an **order-driven** (auction) market, buy and sell orders are matched by price and time priority through a central order book. In a **quote-driven** (dealer) market, market makers post prices at which they stand ready to buy and sell. Most modern markets combine both. Trading increasingly occurs on multiple venues linked by electronic routing, and a significant volume is executed by algorithms that split large orders into small pieces. Regulators in each jurisdiction require trade reporting and rules on fairness, and exchanges set listing standards for disclosure and governance. The details differ by country and change often, so a manager should consult current local rules.

### 5.7.3 Quotes, spreads and order types

Dealers and the order book express two prices: the **bid**, at which one can sell immediately, and the **ask** (or offer), at which one can buy immediately. The difference is the **bid-ask spread**, which compensates market makers for risk and the cost of providing immediacy. For liquid large-company stocks the spread may be a fraction of a percent; for thinly traded small companies it can be several percent, which is a direct cost of owning illiquid shares and part of why investors demand a higher return from them.

The main order types are:

- **Market order**: buy or sell immediately at the best available price. Execution is nearly certain but the price is not.
- **Limit order**: buy or sell only at a specified price or better. The price is controlled but execution is not guaranteed.
- **Stop (stop-loss) order**: becomes a market order when the stop price is reached. It is used to limit losses but can execute at prices well beyond the stop in fast markets.
- **Day, good-till-cancelled and fill-or-kill instructions** specify how long an order stays active and whether it must be filled completely.

For a stock quoted at bid $49.90 and ask $50.10, a market buy order executes near $50.10 and a market sell near $49.90. An investor who buys and immediately sells loses the $0.20 spread, or about 0.4 percent of the price, before any commissions.

### 5.7.4 Buying on margin

Investors can borrow part of the purchase price from a broker. The **initial margin** is the proportion of the purchase that must be funded with the investor's own money, and the **maintenance margin** is the minimum equity percentage that must be maintained afterwards. If the equity falls below maintenance, the broker issues a **margin call** requiring additional funds or the sale of securities. Margin magnifies returns in both directions.

**Example 5.7 – Margin purchase.** An investor buys 200 shares at $50 on 50 percent initial margin. Interest and commissions are ignored for simplicity.

Step 1: Purchase value = 200 × 50 = $10,000. Investor's equity = 50% × 10,000 = $5,000; loan = $5,000.

Step 2: Price rises to $60. Position value = 200 × 60 = $12,000. Equity = 12,000 − 5,000 = $7,000. Return on equity = (7,000 − 5,000) / 5,000 = 40 percent, compared with a 20 percent return on the stock.

Step 3: Price falls to $40. Position value = $8,000; equity = 8,000 − 5,000 = $3,000; equity ratio = 3,000 / 8,000 = 37.5 percent; return on equity = (3,000 − 5,000) / 5,000 = −40 percent, double the 20 percent fall in the stock.

Step 4: Margin call price. With maintenance margin of 30 percent, the equity ratio is (200P − 5,000) / (200P). Setting this equal to 0.30: 200P − 5,000 = 0.30 × 200P, so 140P = 5,000 and P = $35.71. If the price falls below $35.71, the investor must add funds or sell. A 28.6 percent fall in the share price (from 50 to 35.71) triggers the call.

Margin trading amplifies not only losses but also market volatility, because forced selling during downturns pushes prices lower and triggers further calls. Regulators therefore set limits on margin lending in many jurisdictions.

### 5.7.5 Short selling

A short seller borrows shares, sells them, and later buys them back to return to the lender, hoping to profit if the price falls. The potential loss is unlimited, because the price can rise without bound, and the seller must pay any dividends to the lender. Short sellers add liquidity and help bring prices toward fundamental values by expressing negative information, though they are periodically criticized, and some jurisdictions restrict shorting in market stress.

### 5.7.6 Stock market indices

An index summarizes the performance of a group of stocks. The two main constructions are price-weighted and value-weighted.

A **price-weighted index** (such as the Dow Jones Industrial Average, which is a well-known example) is the sum of the component prices divided by a divisor. High-priced stocks have greater influence regardless of company size. When a component splits, the divisor is adjusted so the index does not change. A **value-weighted index** (such as the S&P 500, whose weights are further adjusted for the number of freely traded shares) weights each stock by its market capitalization, so large companies dominate, and splits require no adjustment.

**Example 5.8 – Price-weighted and value-weighted indices.** Three fictional stocks: A at $90, B at $50 and C at $25, with 10 million, 40 million and 100 million shares outstanding.

Step 1: Price-weighted index at the start: (90 + 50 + 25) / 3 = 165 / 3 = 55.00.

Step 2: Stock B splits 2-for-1: its price becomes $25, with 80 million shares. The sum of prices becomes 90 + 25 + 25 = 140. To keep the index at 55.00 the divisor must change: new divisor = 140 / 55 = 2.5455.

Step 3: Next day, the prices are A $93, B $26 (equivalent to $52 before the split) and C $24. Sum of prices = 93 + 26 + 24 = 143. Index = 143 / 2.5455 = 56.18, an increase of 2.15 percent, driven mostly by A, the highest-priced stock.

Step 4: Value-weighted index. Day 0 market capitalizations (in millions): A 10 × 90 = 900; B 40 × 50 = 2,000; C 100 × 25 = 2,500; total 5,400. Day 1: A 10 × 93 = 930; B 80 × 26 = 2,080 (the split doubled the shares and halved the price, so capitalization is unaffected); C 100 × 24 = 2,400; total 5,410. Change = 5,410 / 5,400 − 1 = 0.19 percent, so a base of 100 becomes 100.19.

Step 5: Interpretation. The same price moves give +2.15 percent in the price-weighted index but only +0.19 percent in the value-weighted index. The value-weighted index is dominated by C, a $2.5 billion company whose price fell, whereas the price-weighted index is dominated by the $90 stock A, which rose. The choice of index construction therefore affects how "the market" is described.

### 5.7.7 Market efficiency and what prices mean

Eugene Fama's efficient markets hypothesis states that prices reflect available information. In its weak form, past prices cannot be used to earn abnormal profits; in the semi-strong form, all public information is already in prices; in the strong form, even private information is reflected. The evidence indicates that large, liquid markets are reasonably efficient in the semi-strong sense, so that it is hard for investors to consistently beat the market after costs, though there is ongoing debate about anomalies and the role of behavioral biases. For managers, the main implications are practical: the market price is generally a better estimate of value than an executive's private view, so managers should be skeptical of claims that the stock is "obviously undervalued" and should be cautious about timing equity issuance. At the same time, market prices can deviate from fundamentals for extended periods, especially for stocks with high PVGO, hard-to-value intangible assets, or limited analyst coverage.

## 5.8 Managerial Implications

**Cost of equity is a hurdle rate.** The required return that discounts dividends in this chapter is the same cost of equity that enters the weighted average cost of capital and project evaluation. A manager who understands how the market derives value from dividends and growth can see how project decisions feed back into the share price.

**Growth must clear the hurdle.** Section 5.3 showed that retention is valuable only when the return on new investment exceeds the cost of equity. Policies that reward managers on earnings growth or on size encourage over-investment. Metrics that compare returns with the cost of capital (such as economic profit) align incentives better.

**Payout policy and valuation.** In the Modigliani-Miller framework with perfect markets, the choice between dividends and repurchases does not by itself change value, because what matters is the stream of free cash flow; but in practice payouts convey information and discipline management. Cutting the dividend often triggers a price fall because investors read it as a signal of lower future cash flows.

**Communication.** The market price depends on expectations about growth and risk. Clear communication about strategy, capital allocation and return targets reduces uncertainty and, other things equal, the required return.

**Valuation as a range.** Because small changes in r and g produce large changes in value (Table 5.1), a sound valuation reports a range, tests multiple methods (DDM, multiples, discounted free cash flow) and explains the gap between the model value and the market price in terms of specific assumptions.

## Case Study

**Harbor Foods and the Dividend Debate.** *Illustrative, fictional case.*

Harbor Foods is a regional packaged-foods company that has traded on a national exchange for twenty years. Its shares trade at $36.00. It recently paid an annual dividend of $1.20 per share. After a successful launch of a premium frozen-meals line, management expects earnings and dividends to grow at 12 percent a year for the next five years. Thereafter, as the line matures and competitors enter, growth is expected to settle at 4 percent, in line with long-term nominal growth of the packaged foods industry. Harbor's equity beta is 0.8; the risk-free rate is 3.5 percent and the market risk premium is 5.0 percent.

Harbor's chief executive, Ingrid Solheim, faces pressure from two directions. An activist shareholder, owning 4 percent of the stock, argues that the company is hoarding cash. Harbor retains about half its earnings and invests mostly in plant upgrades whose returns, according to the activist, average only 7 percent. The activist demands that the company double its payout ratio and use the freed cash for a repurchase. Meanwhile, the head of corporate development wants to retain even more earnings to fund the acquisition of a regional competitor, arguing that "growth is what the market rewards."

The analysts' consensus is mixed. One brokerage sets a target of $44 using a peer P/E multiple of 22 applied to expected EPS of $2.00. Another values the stock at around $30 using a conservative dividend model. Ingrid asks the finance team to prepare a valuation and to examine the activist's claim.

The finance team estimates the cost of equity with the CAPM: r = 3.5% + 0.8 × 5.0% = 7.5 percent. However, the team also notes that Harbor's earnings are more cyclical than its beta suggests, because of commodity input costs, and that a risk adjustment of two percentage points is appropriate, giving r = 9.5 percent for valuation purposes. They then run a two-stage dividend model. The dividends are $1.344, $1.505, $1.686, $1.888 and $2.115 in years 1 to 5. The present value of these at 9.5 percent is $6.42. The terminal value at year 5 is 2.115 × 1.04 / (0.095 − 0.04) = $39.99, and its present value is $25.40. The estimated intrinsic value is therefore about $31.83.

A sensitivity analysis shows the fragility of the result. With a cost of equity of 10.5 percent the value is $26.79; with terminal growth of 3.5 percent it is $29.60; with terminal growth of 3.0 percent it is $27.71. The market price of $36.00 is therefore above every one of these cases, though not far above the base case if the cost of equity were lower than 9.5 percent.

On the activist's claim, the team compares returns. If the plant upgrades truly earn 7 percent while the cost of equity is 9.5 percent, each dollar retained and reinvested is worth less than a dollar to shareholders, and the company's 12 percent growth forecast cannot be financed by the existing investment pipeline: with 50 percent retention and a 7 percent return, sustainable growth would be only 3.5 percent. The team notes that the 12 percent near-term growth rests on the frozen-meals line, which presumably earns a much higher return, and that the rest of the capital budget may be earning poor returns.

Ingrid must decide whether to accept the activist's proposal, to proceed with the acquisition, or to present a third path to the board.

**Discussion Questions**

1. Verify the sensitivity of the intrinsic value to the cost of equity: why does the choice between 7.5 percent (pure CAPM) and 9.5 percent (adjusted) matter so much, and which would you defend to the board? What happens to the Gordon-type terminal value at 7.5 percent?
2. Reconcile the brokerage target of $44 (P/E of 22 on EPS of $2.00) and the $30 figure with the intrinsic estimate of $31.83. What would each analyst have to believe about growth and the required return?
3. Evaluate the activist's argument using the relationship g = b × ROE and the PVGO concept. Under what conditions would doubling the payout raise the share price, and under what conditions would it lower it?
4. Should Harbor pursue the acquisition? Describe the information you would need to determine whether it adds to PVGO, and explain how financing the acquisition by retaining earnings rather than paying dividends interacts with your answer.

## Key Takeaways

- The value of a share is the present value of the cash distributions expected by its owner, discounted at the opportunity cost of equity; resale prices are themselves present values of later dividends.
- The Gordon model P₀ = D₁ / (r − g) values a perpetually growing dividend stream, requires r > g, uses next year's dividend, and is extremely sensitive to the spread r − g.
- Market price can be read in reverse: r = D₁/P₀ + g gives the return implied by the price, and g = r − D₁/P₀ the growth implied by it.
- Sustainable growth equals retention times return on equity (g = b × ROE); retention creates value only when the return on new investment exceeds the cost of equity.
- Multi-stage models allow growth to fade from high levels to a sustainable long-run rate; the terminal value commonly represents most of the total, so terminal assumptions deserve the greatest scrutiny.
- Price equals the value of assets in place (EPS₁/r) plus the present value of growth opportunities; a high P/E signals large PVGO, low risk, or both.
- Growth opportunities can be negative: investing at a return below the cost of capital destroys value even while earnings and dividends grow.
- Non-convertible preferred stock is a perpetuity valued as D_p / r_p; its price moves inversely with market yields and is capped when the issue is callable.
- Trading mechanics (spreads, order types, margin and index construction) determine the costs and risks that investors actually bear, and margin amplifies both gains and losses.
- Market prices are generally informative estimates of value, so managers should treat private convictions about undervaluation with caution and focus on investments that earn more than the cost of capital.

## Review Questions

1. Explain why the dividend discount model is consistent with valuing a firm that pays no dividend today. What assumptions are needed?
2. Why must the growth rate in the Gordon model be less than the required return? What does it mean in economic terms if an analyst's inputs violate this condition?
3. A student values a stock using D₀ in the numerator of the Gordon formula. State the error, its direction, and its approximate size.
4. Describe two ways in which the market price of a stock can be used to infer something about investors' expectations, using the constant-growth model.
5. Show how the sustainable growth rate depends on retention and ROE, and explain why a growth strategy can lower value even though earnings rise.
6. Why does the terminal value dominate in a two-stage model? What practical steps can an analyst take to avoid an unreasonable terminal value?
7. Define PVGO and explain how it relates to the P/E ratio. Why might a firm have a negative PVGO?
8. List four reasons why comparing P/E ratios across companies can be misleading.
9. Compare preferred stock with debt and common equity in terms of claim priority, cash-flow certainty, tax treatment and valuation.
10. A trader buys stock on margin and the price falls sharply. Explain how a margin call arises and how forced selling can affect market prices.

## Problems

1. **Gordon model.** A company is expected to pay a dividend of $1.80 next year. Dividends are expected to grow at 3 percent indefinitely. (a) What is the price if the required return is 8 percent? (b) What is the price if the required return is 9 percent? (c) By what percent does the price change?
2. **Implied return.** A stock just paid a dividend of $3.00, dividends are expected to grow at 5 percent forever, and the stock trades at $60. What return does the market expect?
3. **Two-stage model.** A company just paid $2.00. Dividends will grow at 20 percent for three years, then at 4 percent forever. The required return is 11 percent. Find the value per share and the proportion of that value due to the terminal value.
4. **PVGO.** A company expects EPS of $8.00 next year, retains 50 percent, earns 14 percent on reinvested equity, and has a required return of 10 percent. Compute the growth rate, the price, the value of assets in place, PVGO and the forward P/E.
5. **Preferred stock.** A preferred share pays a dividend of $4.50 per year and trades at $60. (a) What is its yield? (b) A $100 par 6 percent preferred is priced to yield 8 percent. What is the price?
6. **Margin.** An investor buys 300 shares at $40 with 60 percent initial margin. (a) How much is borrowed? (b) If the price rises to $48, what is the percentage return on the investor's equity (ignore interest)? (c) At what price does a margin call occur if the maintenance margin is 30 percent?
7. **Index.** A price-weighted index has three stocks priced at $80, $40 and $60 with an initial divisor of 3. The third stock undergoes a 3-for-1 split. (a) What is the new divisor? (b) If the next-day prices are $82, $41 and $21, what is the index?
8. **CAPM and DDM.** A stock has a beta of 0.9, the risk-free rate is 3.5 percent and the market risk premium is 6 percent. The next dividend is $1.60 and is expected to grow at 4.5 percent. Compute the cost of equity and the price.

### Answers to Selected Problems

1. (a) 1.80 / 0.05 = $36.00. (b) 1.80 / 0.06 = $30.00. (c) The price falls by 16.7 percent.
2. D₁ = 3.00 × 1.05 = 3.15; r = 3.15 / 60 + 0.05 = 5.25% + 5.00% = 10.25 percent.
3. Dividends: 2.40, 2.88, 3.456; present values at 11 percent: 2.162, 2.337, 2.527, total 7.03. D₄ = 3.456 × 1.04 = 3.594; TV₃ = 3.594 / 0.07 = 51.35; PV = 51.35 / 1.11³ = 37.54. Value = $44.57; terminal share = 37.54 / 44.57 = 84.2 percent.
4. g = 0.5 × 0.14 = 7 percent; D₁ = 4.00; P₀ = 4.00 / (0.10 − 0.07) = $133.33; assets in place 8.00 / 0.10 = $80.00; PVGO = $53.33; forward P/E = 16.7.
5. (a) 4.50 / 60 = 7.5 percent. (b) Dividend = $6.00; price = 6.00 / 0.08 = $75.00.
6. (a) Cost = 12,000; equity 7,200; loan $4,800. (b) Value at $48 = 14,400; equity = 9,600; return = (9,600 − 7,200) / 7,200 = 33.3 percent. (c) (300P − 4,800) / 300P = 0.30 gives 210P = 4,800, so P = $22.86.
7. (a) Initial sum 180 / 3 = 60. After the split the third price is $20, so the sum is 140 and the new divisor = 140 / 60 = 2.3333. (b) Sum = 82 + 41 + 21 = 144; index = 144 / 2.3333 = 61.71.
8. r = 3.5 + 0.9 × 6.0 = 8.9 percent; P₀ = 1.60 / (0.089 − 0.045) = 1.60 / 0.044 = $36.36.
