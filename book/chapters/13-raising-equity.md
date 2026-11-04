# Chapter 13: Raising Equity: Venture Capital, IPOs and Seasoned Offerings

## Learning Objectives

After studying this chapter, you should be able to:

- Describe the stages of equity financing from founder capital through venture rounds, the initial public offering (IPO) and later seasoned offerings, and match each stage to the firm's risk profile and information environment.
- Value a start-up with the venture capital method, and translate a target return into a required ownership stake and a pre-money valuation.
- Read a term sheet critically: pre- versus post-money valuation, option-pool mechanics, liquidation preferences, anti-dilution protection, board control and other economic and governance terms.
- Calculate dilution across multiple financing rounds and the effect of down rounds under weighted-average and full-ratchet protection.
- Explain the IPO process (underwriting, book-building, pricing, allocation, stabilization) and quantify the total cost of going public, including underpricing.
- Evaluate seasoned equity offerings and rights issues, compute the theoretical ex-rights price and the value of a right, and explain why announcements of equity issuance tend to depress share prices.

## Opening Vignette

*Illustrative scenario; the company and all figures are fictional.*

Marisol Vega is the co-founder and chief executive of Tidewell Systems, a six-year-old software firm that sells predictive maintenance tools to regional water utilities. Tidewell has grown revenue to $42 million, is modestly profitable on an operating basis, and has a backlog of utility contracts that it cannot staff fast enough to serve. Marisol needs roughly $60 million to hire engineers, fund a sales expansion into two new regions and acquire a small analytics competitor.

Her board presents three roads. The first is a late-stage private round: a growth equity fund has offered $60 million at a $240 million pre-money valuation, with a 1x liquidation preference and a board seat. The second is an IPO, which bankers say could raise $150 million at a valuation near $500 million, but which would require two more quarters of audited growth, a permanent investor-relations function and quarterly scrutiny. The third is a bank loan, which Tidewell can afford only up to about $15 million before its covenants start to bind.

Marisol's problem is not simply "which has the lowest cost." The private round is quick but carries preference terms she must model carefully. The IPO offers permanent capital and currency for acquisitions, yet bankers warn that the shares will probably be priced at a discount to where they trade on day one, and the founders' stakes will be diluted and locked up for months. Existing venture investors, who own 38% of the company and have held their shares for seven years, are impatient for liquidity. Each path changes who controls the firm, who bears risk and what the founders eventually take home.

This chapter gives you the tools to answer her questions. We start with the life cycle of equity financing, work through venture valuation and term-sheet mechanics, then follow a company through its IPO and its later equity issues, quantifying the economics at each step.

## 13.1 The Life Cycle of Equity Financing

Equity is the residual claim on a firm's assets and cash flows. Unlike debt, it has no maturity, no promised payment and no default trigger, which makes it the natural source of capital for firms whose cash flows are uncertain, distant or intangible. But equity is also the most expensive source of capital because investors bear the most risk, and it dilutes the ownership and control of those who already hold it. A financing strategy is therefore a sequence of choices about how much equity to raise, from whom, at what price, and with what rights attached.

### 13.1.1 Stages of private financing

Young companies move through recognizable stages. The labels vary by market, but the economics are consistent.

**Founder capital and "friends and family."** The earliest money is typically the founders' own savings, together with small amounts from relatives and friends. There is rarely a formal valuation, and the main risk is whether the idea can be built at all.

**Angel investors.** Wealthy individuals, often former entrepreneurs, invest small amounts (commonly tens of thousands up to a few hundred thousand dollars) in exchange for equity or convertible instruments. Angels bring advice and networks, and often invest earlier than institutions will.

**Seed financing.** A seed round funds product development and the first evidence of market demand. Instruments at this stage are frequently convertible notes or simple agreements for future equity, which postpone the difficult valuation question until a priced round.

**Venture capital rounds (Series A, B, C, and beyond).** Institutional venture capital funds invest in successive priced rounds. A Series A typically funds the move from prototype to repeatable sales; Series B and C fund scaling; later rounds are sometimes called growth or crossover rounds. Each round is priced on the milestones achieved since the last.

**Private equity and growth equity.** Later-stage funds invest in more mature private firms, sometimes buying existing shares (secondary transactions) as well as supplying new capital. Buyouts, discussed in other chapters, use substantial debt; growth equity typically does not.

**Public markets.** An IPO sells shares to the public for the first time. After listing, the firm may raise more equity through seasoned offerings or rights issues.

Table 13.1 summarizes how the character of the financing changes along this path.

**Table 13.1 – Typical characteristics of financing stages (illustrative ranges)**

| Stage | Typical investors | Main risk | Valuation basis | Instruments |
|---|---|---|---|---|
| Founder / friends and family | Founders, relatives | Can it be built? | None or informal | Common shares, loans |
| Angel / seed | Angels, seed funds | Does anyone want it? | Judgment, comparables | Convertible notes, SAFEs, common |
| Series A–B | Venture funds | Can sales be repeated and scaled? | Milestones, VC method | Convertible preferred |
| Series C and later | Growth, crossover funds | Can it reach scale and profit? | Revenue multiples, early earnings | Convertible preferred |
| IPO | Public institutions, retail | Will public markets pay for the growth story? | Comparable multiples, DCF | Common shares |
| Seasoned offering | Public institutions | Is the firm using proceeds well? | Market price less a discount | Common shares, rights |

### 13.1.2 Why the sequence is staged

Staged financing is not an accident of fashion; it is a response to two problems familiar from the theory of the firm. First, **information asymmetry**: the founders know much more about the venture's prospects than outside investors do. Second, **moral hazard**: once money is in the firm, entrepreneurs may take actions that favor themselves. By releasing capital in tranches tied to milestones, a venture investor retains the option to stop funding a failing venture and keeps founders focused on measurable progress. Each round also reveals information: the price at which a new investor is willing to invest is a signal of the venture's progress that existing investors and employees can read.

Staging also explains why valuations step up or, painfully, down. A company that has doubled its recurring revenue since the last round has de-risked the business and can sell new shares at a higher price. A company that has missed its plan may have to raise a **down round**, with consequences for founders and earlier investors that we analyze in Section 13.4.

### 13.1.3 The venture capital fund as an intermediary

Most institutional venture capital is raised by **general partners (GPs)** who form a fund with capital from **limited partners (LPs)** such as pension funds, endowments and insurers. The fund has a finite life, commonly around ten years, with an investment period of the first several years. GPs typically earn an annual management fee on committed capital, plus **carried interest**, a share of profits (conventionally 20%) after LPs have received their capital back and, in many funds, a preferred return. This structure matters for entrepreneurs because it shapes investor behavior. A fund needs a few outsized winners to return the whole fund; therefore VCs prefer high-variance bets, will tolerate many failures, and push companies toward growth and a liquidity event (a trade sale or IPO) within the fund's life. Founders whose preferences differ, for example one who wants a stable, profitable, independent company, should understand this before accepting venture money.

**Managerial implication.** Choosing an equity partner is choosing a set of incentives. A venture fund in year eight of a ten-year fund will care more about near-term exit than one in year two. Ask about the fund's vintage, reserves for follow-on investment and track record in down markets, not only about the headline valuation.

## 13.2 Valuing a Venture: The Venture Capital Method

Standard discounted cash flow valuation struggles with start-ups: cash flows are negative for years, forecasts are speculative, and the discount rate that reflects the true chance of failure is hard to estimate. Venture investors therefore use a shortcut that works backward from an expected exit, the **venture capital method**.

### 13.2.1 Mechanics

The method has four steps.

1. Forecast the company's value at exit (year *T*), typically by applying a multiple to projected revenue or earnings, using public or transaction comparables.
2. Choose a **target rate of return** (or target multiple of money) that reflects the investment's risk. Venture targets are high, often 30% to 60% or more per year for early stages, because they must compensate for the many ventures that fail, for illiquidity, and for the optimism embedded in projections.
3. Compute the required ownership at exit, adjusting for expected future dilution.
4. Translate the required stake into a post-money and pre-money valuation today.

In formulas:

```
Required value at exit of the investment = Investment × (1 + target return)^T
Required ownership at exit = Required value at exit / Projected exit value
Required ownership today = Required ownership at exit / Retention ratio
Retention ratio = Π (1 − dilution in each future round)
Post-money valuation = Investment / Required ownership today
Pre-money valuation = Post-money valuation − Investment
```

**Example 13.1 – The venture capital method.**
A venture fund is considering a $5 million Series A investment in a medical-device start-up. The fund expects the company to be worth $200 million in five years (an acquisition by a larger device firm). The fund's target return is 50% per year. The founders and the fund expect that later rounds and option grants will dilute today's investors by a total of 20% before exit (retention ratio 0.80).

Step 1: Required value of the $5 million at exit.
Multiple of money = (1.50)^5 = 7.59375
Required value = $5,000,000 × 7.59375 = $37,968,750

Step 2: Required ownership at exit.
$37,968,750 / $200,000,000 = 18.98%

Step 3: Adjust for dilution. The fund must own more today so that after 20% dilution it still holds 18.98%.
Required ownership today = 18.984% / 0.80 = 23.73%

Step 4: Valuation.
Post-money = $5,000,000 / 0.2373 = $21.07 million
Pre-money = $21.07 million − $5 million = $16.07 million

The fund should therefore be willing to invest $5 million for a 23.7% stake only if the pre-money valuation is no higher than about $16.1 million. If the founders insist on a $25 million pre-money, the fund's expected return falls below 50%; the fund can accept a lower return, restructure terms (for example, a liquidation preference) or pass.

### 13.2.2 Interpreting the target return

A 50% hurdle can look absurd next to a public-market cost of equity of 10% or so. The explanation is not that VCs are greedy. The projection of a $200 million exit is a *success-case* forecast, not an expected value. Suppose that of ten comparable ventures, six fail and return nothing, two return the invested money, and two reach the success case. The expected value of the portfolio is far below the success-case figure, and the required return on the success case must be high enough to compensate for this. A rough link is:

```
Target return on success case ≈ (1 + required expected return) / probability of success  − 1  (in multiple-of-money terms)
```

For instance, with a 15% required expected annual return over five years (a multiple of 2.01) and a 25% probability of reaching the success case, the success-case multiple must be about 2.01 / 0.25 = 8.05 times the investment, or an annual return of roughly 51.7%. This explains why target returns of 40% to 60% are common for early-stage deals. Later-stage companies have a higher probability of reaching their projections, so required returns fall toward 20% to 30%.

### 13.2.3 Limitations and common mistakes

- **Double-counting risk.** If you use a high target return to reflect failure risk and also haircut the projections, you penalize the venture twice.
- **Ignoring dilution.** Omitting the retention ratio understates the stake an investor must own today to earn the target return after later rounds, and so overstates the valuation the investor can afford to accept. Always model the option pool and later rounds.
- **Exit-multiple optimism.** Applying a hot-sector multiple at exit assumes the sector will still be hot in five years. Test the valuation with a lower exit multiple.
- **Precision illusion.** A model that produces a pre-money valuation of $16.07 million gives a false sense of accuracy. In practice the output is a negotiating range.
- **Treating all equity as common.** Venture investors hold preferred shares with senior rights. The effective value of a preferred share exceeds that of a common share, which is why headline valuations in venture deals should be read with care.

The last point leads directly to the term sheet.

## 13.3 Reading a Term Sheet

A **term sheet** is a short, mostly non-binding document that summarizes the principal terms on which an investor proposes to invest. The binding agreements (share purchase agreement, investors' rights agreement, shareholders' agreement and amended charter) follow and track it closely, so the term sheet is where the real negotiation takes place. Headline valuation attracts attention, but a founder who focuses only on it can lose more value through the other terms than she gains from a higher price.

Terms fall into two families: **economic terms**, which determine who receives how much cash at each outcome, and **control terms**, which determine who decides.

### 13.3.1 Pre-money, post-money and price per share

```
Post-money valuation = Pre-money valuation + New investment
Investor ownership (immediately after) = New investment / Post-money valuation
Price per share = Pre-money valuation / Pre-money fully diluted shares
```

The phrase **fully diluted** matters. It includes not only issued shares but also outstanding options and warrants, converting securities and, critically, any unallocated option pool the investor requires to be in place. The way the option pool is treated is one of the most common sources of disagreement between what a headline valuation appears to be and what founders actually receive.

### 13.3.2 The option pool shuffle

Investors want a pool of options reserved for future hires so that the new money does not have to be diluted again when the company recruits. They commonly require the pool to be created or enlarged **before** the investment and counted in the pre-money. Then the dilution from the pool falls entirely on existing shareholders, not on the new investor, and the **effective pre-money valuation** (what the existing holders' shares are worth) is lower than the headline.

**Example 13.2 – The option pool shuffle.**
Atlas Robotics has 6,000,000 founder shares and no options. A venture fund offers $10 million at a $30 million pre-money valuation, with the condition that after closing, an unallocated option pool equal to 10% of the fully diluted post-money capitalization exists.

Step 1: Post-money valuation = $30 million + $10 million = $40 million. The investor owns $10M / $40M = 25% after closing.

Step 2: Founders own the remainder after the investor's 25% and the pool's 10%:
Founders' share = 100% − 25% − 10% = 65%.

Step 3: Total fully diluted shares after closing:
6,000,000 / 0.65 = 9,230,769 shares.

Step 4: Investor shares = 25% × 9,230,769 = 2,307,692. Pool = 10% × 9,230,769 = 923,077.

Step 5: Price per share = $10,000,000 / 2,307,692 = $4.333.

Step 6: Compare with the naive price if there were no pool: $30,000,000 / 6,000,000 = $5.00. With the pool, the price per share is lower by 13.3%.

Step 7: Effective pre-money for the founders = price × founder shares = $4.333 × 6,000,000 = $26.0 million. The "$30 million" pre-money is in practice $26 million for the founders, because $4 million of the pre-money value is attributed to the new pool (923,077 × $4.333 = $4.0 million).

The pool is not "free" to the founders. Of course, a well-sized pool does have value for them, because options motivate and retain employees. The lesson is to bargain over the pool's size using a hiring plan (how many senior hires in the next 18 months, at what grants), not to accept a standard percentage, and to compare offers on **effective pre-money**, not on headline pre-money.

### 13.3.3 Preferred stock and liquidation preference

Venture investors almost always buy **convertible preferred stock**, not common. Preferred shares carry a **liquidation preference**: when the company is sold or liquidated, preferred holders are paid first, before common holders. Three variants matter.

- **1x non-participating.** The holder receives the *greater* of (a) the original investment (the 1x preference) or (b) the amount it would receive if it converted into common and shared pro rata. It is a downside-protection feature that costs the holder nothing in high-value exits because the holder simply converts.
- **Participating (full).** The holder receives its preference *and then also* shares pro rata with common holders in the remainder, on an as-converted basis. This is a "double dip."
- **Participating with a cap.** The holder participates until total proceeds reach a stated multiple (for example 3x of the investment); beyond that, it converts if conversion yields more.

Multiples above 1x (such as 2x) and seniority rules (the latest round paid first, or all preferred paid *pari passu*) change the allocation in downside outcomes.

**Example 13.3 – Liquidation waterfall.**
Quantum Grid raised $10 million from a Series A investor in exchange for 25% of the fully diluted equity. All other holders (founders and employees) hold the remaining 75% as common stock. Compare three preference structures at various sale prices (in $ millions).

*Non-participating 1x.* The investor receives max(preference, 25% × exit), but never more than the exit price. It converts when 25% × exit exceeds $10M, i.e., when exit > $40M.

*Participating, uncapped.* Investor receives $10M + 25% × (exit − $10M).

*Participating, capped at 3x ($30M total).* Investor receives the lesser of the participating amount and $30M, or 25% × exit if conversion yields more. Conversion beats the cap when 25% × exit > $30M, i.e., exit > $120M.

Calculations:

- Exit $20M. Non-participating: max($10M, $5M) = $10M. Participating: $10M + 25% × $10M = $12.5M. Capped: same as participating, $12.5M.
- Exit $60M. Non-participating: max($10M, $15M) = $15M (convert). Participating: $10M + 25% × $50M = $22.5M. Capped: $22.5M (below $30M cap).
- Exit $120M. Non-participating: $30M (convert). Participating: $10M + 25% × $110M = $37.5M. Capped: min($37.5M, $30M) = $30M, equal to conversion value.
- Exit $200M. Non-participating: $50M. Participating: $10M + 25% × $190M = $57.5M. Capped: converts, $50M.

**Table 13.2 – Investor and common proceeds under three preference structures ($ millions)**

| Exit value | Non-part.: investor | Non-part.: common | Participating: investor | Participating: common | Capped 3x: investor | Capped 3x: common |
|---|---|---|---|---|---|---|
| 20 | 10.0 | 10.0 | 12.5 | 7.5 | 12.5 | 7.5 |
| 40 | 10.0 | 30.0 | 17.5 | 22.5 | 17.5 | 22.5 |
| 60 | 15.0 | 45.0 | 22.5 | 37.5 | 22.5 | 37.5 |
| 120 | 30.0 | 90.0 | 37.5 | 82.5 | 30.0 | 90.0 |
| 200 | 50.0 | 150.0 | 57.5 | 142.5 | 50.0 | 150.0 |

At a $60 million sale, a participating preference moves $7.5 million from common holders to the investor relative to a non-participating one, which is 16.7% of the $45 million the common holders would otherwise receive. In a $200 million exit the difference is a smaller percentage of the total but still $7.5 million. Participation is therefore expensive for the common holders at every exit value, and it is most punishing at moderate outcomes, which are the most likely outcomes for many ventures.

### 13.3.4 Anti-dilution protection

If the company later sells shares at a lower price than a prior preferred round, the earlier investors' stake loses value. **Anti-dilution provisions** adjust the conversion price of the earlier preferred downward, so that each preferred share converts into more common.

- **Full ratchet.** The conversion price drops to the new, lower price, whatever the size of the new round. It is very investor-friendly and rare in negotiated deals except in distressed financings.
- **Broad-based weighted average.** The new conversion price (NCP) is a weighted average of the old price and the new price:

```
NCP = OCP × (A + B) / (A + C)
```

where OCP is the old conversion price; A is the fully diluted shares outstanding before the new issue; B is the number of shares that the new money would have purchased at OCP (new money / OCP); and C is the number of new shares actually issued. The smaller the new round relative to the company, the smaller the adjustment.

We apply these mechanisms in Example 13.5 below, after we master the plain dilution arithmetic in Section 13.4.

### 13.3.5 Control and governance terms

- **Board composition.** Typically a mix of founder directors, investor directors and independents. Who holds the swing vote at the board level determines who can replace the CEO.
- **Protective provisions.** Investor approval is required for specified actions: selling the company, issuing senior securities, changing the charter, taking on significant debt, paying dividends, or changing the board size.
- **Drag-along and tag-along rights.** A drag-along lets a majority force minority holders to join a sale; a tag-along lets minority holders join a sale made by a majority holder on the same terms.
- **Pre-emptive rights (pro rata rights).** Existing investors can buy their share of any new issue to avoid being diluted.
- **Vesting and good/bad leaver terms.** Founders' shares often vest over four years with a one-year cliff, so investors are not left funding a team that departs. Leaver provisions set the price at which the company can buy back unvested or vested shares from departing founders.
- **Redemption, dividends and information rights.** Preferred shares may carry accruing dividends (payable at exit or conversion), redemption rights after a number of years, and rights to financial information.
- **Exclusivity ("no-shop") and costs.** The binding parts of most term sheets: the company agrees not to solicit competing offers for a period, and often to bear some deal costs.

**Common mistake.** Treating the term sheet as a price negotiation. A $60 million pre-money with a 2x participating preference and a full ratchet may be worth less to the founders than a $45 million pre-money with a plain 1x non-participating preference. Model the founders' proceeds across a range of exit values (Table 13.2 is a template) before choosing.

## 13.4 Dilution Mathematics

Every new issue of shares reduces the percentage ownership of existing holders. Dilution itself is not harmful if the money raised creates more value than the ownership given up; it is "a smaller slice of a larger pie." The relevant questions are how fast ownership is eroding and whether value per share is growing faster than the ownership is shrinking.

### 13.4.1 The basic relationship

```
New investors' ownership = New money / Post-money valuation
Existing holders' retention = Pre-money valuation / Post-money valuation = 1 − New investors' ownership
Price per share = Pre-money valuation / Pre-money fully diluted shares
New shares issued = New money / Price per share
```

For a sequence of rounds, retention ratios multiply. If round *k* sells fraction *d_k* of the post-money company, a holder owning *s* before the first round owns `s × Π (1 − d_k)` after all rounds, unless it buys more.

**Example 13.4 – Dilution across three rounds.**
Three founders hold 6,000,000 shares in total. The company raises: a seed round of $1.5 million at a $4.5 million pre-money; a Series A of $8 million at a $24 million pre-money; and a Series B of $20 million at a $60 million pre-money. (For clarity we ignore option pools; adding them would increase founder dilution.)

Seed:
Price = $4,500,000 / 6,000,000 = $0.75 per share.
New shares = $1,500,000 / $0.75 = 2,000,000. Total = 8,000,000.
Post-money = $6.0 million; seed investors own 2,000,000 / 8,000,000 = 25%.

Series A:
Price = $24,000,000 / 8,000,000 = $3.00.
New shares = $8,000,000 / $3.00 = 2,666,667. Total = 10,666,667.
Post-money = $32 million; Series A investors own 25%.

Series B:
Price = $60,000,000 / 10,666,667 = $5.625.
New shares = $20,000,000 / $5.625 = 3,555,556. Total = 14,222,222.
Post-money = $80 million; Series B investors own 25%.

**Table 13.3 – Capitalization table after each round**

| Holder | After seed (shares / %) | After Series A (shares / %) | After Series B (shares / %) |
|---|---|---|---|
| Founders | 6,000,000 / 75.0% | 6,000,000 / 56.25% | 6,000,000 / 42.19% |
| Seed investors | 2,000,000 / 25.0% | 2,000,000 / 18.75% | 2,000,000 / 14.06% |
| Series A investors | – | 2,666,667 / 25.0% | 2,666,667 / 18.75% |
| Series B investors | – | – | 3,555,556 / 25.0% |
| Total | 8,000,000 | 10,666,667 | 14,222,222 |

Retention check: founders keep 0.75 × 0.75 × 0.75 = 42.19%. Seed investors keep 25% × 0.75 × 0.75 = 14.06%. Value check at the Series B price of $5.625: founders' 6,000,000 shares are worth $33.75 million, versus $4.5 million at the seed price ($0.75 per share). Although the founders' percentage fell from 100% to 42.19%, the value of their stake grew 7.5-fold from the seed price. This is the essential logic of dilution: what matters is price per share relative to the original, not ownership percentage.

### 13.4.2 Down rounds and anti-dilution

A down round is a financing at a lower price per share than the previous round. It is damaging for founders and employees (their ownership falls *and* the value per share falls), and it triggers anti-dilution rights for earlier preferred holders, shifting more dilution onto common holders.

**Example 13.5 – Anti-dilution in a down round.**
Pinewood Labs has 20,000,000 fully diluted shares outstanding, including 5,000,000 shares from the Series A investors' preferred stock, which was bought for $10 million, i.e., at $2.00 per share (the OCP). The company then raises $4 million at $1.00 per share, issuing 4,000,000 new shares. Compare three cases.

*No protection.* Series A converts 1:1 into 5,000,000 shares. Total fully diluted after the round = 20,000,000 + 4,000,000 = 24,000,000.
Series A owns 5/24 = 20.83%; new investors own 4/24 = 16.67%; everyone else (15,000,000 shares) owns 62.5%.

*Broad-based weighted average.*
A = 20,000,000. B = $4,000,000 / $2.00 = 2,000,000. C = 4,000,000.
NCP = $2.00 × (20,000,000 + 2,000,000) / (20,000,000 + 4,000,000) = $2.00 × 22/24 = $1.8333.
Series A now converts into $10,000,000 / $1.8333 = 5,454,545 shares (an extra 454,545).
Total fully diluted = 15,000,000 + 5,454,545 + 4,000,000 = 24,454,545.
Series A owns 22.30%; new investors 16.36%; the others 61.34%.

*Full ratchet.* NCP = $1.00. Series A converts into $10,000,000 / $1.00 = 10,000,000 shares.
Total = 15,000,000 + 10,000,000 + 4,000,000 = 29,000,000.
Series A owns 34.48%; new investors 13.79%; the others 51.72%.

The new investors, who set the $1.00 price, own less under the full ratchet (13.79% against 16.67% without protection), which is why they typically insist on negotiating the anti-dilution mechanics as part of the round. The full ratchet cuts the non-Series-A holders from 62.5% to 51.7%, while the weighted average costs them only about 1.2 percentage points. This difference explains why broad-based weighted average has become the market norm in most healthy financings.

### 13.4.3 Convertible notes and SAFEs

Before a priced round, many start-ups raise money with **convertible notes** (debt that converts to equity at the next priced round) or **simple agreements for future equity (SAFEs)**, which are not debt and carry no interest or maturity. Both usually convert at a discount to the next round price (e.g., 20%) or at a **valuation cap**, whichever gives the holder more shares. They defer the valuation negotiation, but the deferral is not free: if founders raise several uncapped or capped instruments before a priced round, dilution accumulates invisibly until conversion. Model the post-conversion cap table before signing a second or third instrument.

### 13.4.4 Managerial rules of thumb

- Model dilution on a fully diluted basis, including the pool, convertible instruments and warrants.
- Plan the *sequence*: a round priced too aggressively today can become a down round tomorrow if growth disappoints, with cascading anti-dilution effects.
- Keep enough ownership among founders and key employees to sustain incentives through the exit; if the cap table becomes top-heavy with preferred shares carrying large preferences, common stock may be worth little in moderate outcomes and incentives collapse (see Table 13.2).

## 13.5 The Initial Public Offering

An IPO is the first sale of a company's shares to the public, accompanied by the listing of those shares on an exchange. It is a financing event, a liquidity event for early investors and employees, and a governance event that subjects the firm to continuous disclosure.

### 13.5.1 Why go public, and why not

**Reasons to go public.**

- *Access to capital.* Public markets offer a deep pool of investors for large equity raises, now and later through seasoned offerings.
- *Liquidity and diversification for existing owners.* Venture funds must return capital to LPs; founders and employees can sell some shares over time.
- *Currency for acquisitions and employee compensation.* Listed shares have an observable price and are accepted in deals.
- *Visibility and credibility.* Public listing can help with customers, suppliers and lenders.
- *Valuation.* In some periods, public markets pay higher multiples than private buyers do.

**Reasons to stay private.**

- *Disclosure costs and competitive information.* Public firms must publish financial results and material risks, including to competitors.
- *Short-term pressure.* Quarterly earnings expectations may push managers away from long-term investment.
- *Direct and ongoing costs.* Legal, audit, listing, investor-relations and compliance costs are significant; directors' and officers' liability insurance is higher.
- *Loss of control.* Founders may be diluted and may face activist shareholders or takeover threats, although dual-class structures are used in some markets to preserve founder control.
- *Alternatives.* Large private equity and growth funds now supply late-stage capital at scale, so the capital-access argument for listing is weaker than it used to be.

### 13.5.2 The IPO process

An IPO typically takes six to twelve months of preparation. The main steps are:

1. **Readiness.** Audited financial statements for the required number of years (prepared under the accounting standards of the listing market), a public-company-grade finance function and controls, a board with independent directors and audit committee, and clean legal and capitalization records.
2. **Selecting underwriters.** The firm chooses one or more lead banks (bookrunners) after a "bake-off" in which banks pitch valuation, distribution strength and research coverage. A syndicate of other banks joins to widen distribution.
3. **Due diligence and the prospectus.** Underwriters and lawyers investigate the company and prepare the registration statement and prospectus, which the securities regulator reviews. The document must disclose material risks; misstatements create liability for the issuer, directors and underwriters.
4. **Marketing: the roadshow.** Management presents to institutional investors, often over one to two weeks. A preliminary prospectus may include an indicative price range.
5. **Book-building.** Investors submit non-binding indications of interest, with quantities and price limits. The bookrunners assemble a demand curve. If the book is heavily oversubscribed, the range may be raised; if weak, lowered or the deal postponed.
6. **Pricing and allocation.** On the evening before trading begins, the issuer and bookrunners set the final offer price and allocate shares. Allocation is discretionary: the banks favor long-term, price-sensitive institutions that supply information during book-building, which is a way of compensating them for revealing demand.
7. **Stabilization and the over-allotment option.** After listing, the lead underwriter supports the price if it falls (see below).
8. **Quiet period, analyst coverage and lock-up expiry.** Research coverage begins after a quiet period. Pre-IPO holders are generally barred from selling (a **lock-up**, typically around 90 to 180 days) so that a flood of insider sales does not hit the market immediately.

### 13.5.3 Underwriting arrangements

In a **firm commitment** underwriting, the banks buy the shares from the issuer at the offer price less the **gross spread** and resell to investors; they bear the risk of unsold shares. In a **best efforts** offering, the bank agrees only to try to sell, and the issuer bears the risk; this arrangement is more common for small, risky issues. The gross spread is the underwriters' compensation, often in the range of 5% to 7% for mid-sized U.S. IPOs and lower for very large offerings, and is shared among the management, underwriting and selling roles in the syndicate.

The **over-allotment option** (the "greenshoe", named after the company that first used it) lets underwriters sell up to about 15% more shares than the base deal and, if demand is strong, buy those shares from the issuer at the offer price to cover the short position. If the price falls below the offer, underwriters instead cover the short by buying in the open market, which supports the price. The mechanism smooths early trading.

### 13.5.4 Valuing the issuer and setting the price

Bookrunners mainly use **comparable-company multiples** (enterprise value to EBITDA or revenue, price to earnings), supplemented by discounted cash flow and, for recent issues, an examination of how comparable IPOs have traded after listing. They then recommend an **IPO discount** (often 10% to 20%) to the "fair" value, to attract investors, to compensate them for risk and for information acquired, and to leave momentum in the stock.

**Example 13.6 – Valuing and pricing an IPO.**
Corvane Logistics has projected next-year EBITDA of $120 million. Listed comparables trade at 12.0 times EBITDA. Corvane has net debt of $150 million and 90 million shares outstanding before the IPO. It wants to raise $300 million of primary capital (new shares), and bankers recommend a 15% IPO discount.

Step 1: Enterprise value = 12.0 × $120M = $1,440M.
Step 2: Pre-IPO equity value at "fair" market value = $1,440M − $150M = $1,290M.
Step 3: Apply the 15% discount: $1,290M × 0.85 = $1,096.5M.
Step 4: Offer price = $1,096.5M / 90M shares = $12.18 per share.
Step 5: New shares to raise $300M gross: $300M / $12.18 = 24.62 million shares.
Step 6: Post-IPO shares = 90M + 24.62M = 114.62M; new investors own 24.62 / 114.62 = 21.48%.

Existing shareholders have effectively paid for the discount: at the fair value of $1,290M the shares would be worth $14.33 each ($1,290M / 90M), and the discount has set the price $2.15 lower. After the IPO, if the market in fact values the company at the comparable multiple, the post-IPO equity value will be $1,290M + $300M (cash received, ignoring fees) = $1,590M, or $13.87 per share on 114.62M shares. The stock would rise 13.9% above the offer price, a gain for the new investors that is funded by the existing owners. Whether such a transfer is necessary is the subject of the next section.

Note the use of *pre-money* and *post-money* in the IPO context: the offer price times pre-IPO shares is the pre-money equity value; adding the primary proceeds gives the post-money value.

## 13.6 IPO Underpricing and the Total Cost of Going Public

### 13.6.1 The empirical regularity

Across markets and eras, IPO shares have, on average, closed their first day of trading above the offer price. This **underpricing**, measured as `(first-day close − offer price) / offer price`, can be large: averages in the range of 10% to 20% are common in developed markets, with much larger numbers in some periods and in many emerging markets, and substantial variation across deals. Underpricing is a real cost to the issuer, because the shares were sold for less than the market was willing to pay immediately afterward. The money "left on the table" equals `(first-day close − offer price) × shares sold`.

### 13.6.2 Theories of underpricing

No single theory explains the phenomenon, and the following are complementary.

- **Winner's curse (Rock).** Informed investors bid only for good issues, while uninformed investors receive a larger share of the bad ones (and a share of the good ones that is rationed down). To keep uninformed investors in the market, issuers must underprice on average so that those investors earn a normal return despite the adverse selection.
- **Information revelation or book-building (Benveniste and Spindt).** Underwriters want institutions to reveal their true demand. Deliberate underpricing and preferential allocation compensate those who reveal positive information, so that the issue price reflects it.
- **Signaling.** High-quality firms may underprice deliberately to signal quality and recoup the loss in later seasoned offerings at better prices. Evidence for this is mixed.
- **Insurance against legal liability.** A lower price reduces the likelihood of a post-listing price fall that would trigger lawsuits.
- **Agency and bargaining.** Underwriters may prefer underpricing to ease selling and to reward favored clients; issuers whose managers hold few shares at stake may not bargain hard. Evidence suggests that issuers who realize the extent of underpricing may be more willing to negotiate prices in later deals.
- **Behavioral explanations.** Retail enthusiasm and sentiment raise first-day prices above fundamental value for hot issues.

### 13.6.3 Beyond underpricing: the other costs

The full cost of an IPO has several components: the underwriters' gross spread; direct costs such as legal, accounting, printing, listing and roadshow expenses; underpricing; and the indirect costs of ongoing compliance and disclosure. In addition, there is **long-run underperformance**: studies of IPOs have often found that, on average, IPO firms have earned below-benchmark returns over three to five years, although the magnitude depends on methodology.

**Example 13.7 – The true cost of an IPO.**
Hartwick Biologics sells 10 million new shares at an offer price of $20. The gross spread is 7%. Other direct costs (legal, audit, listing, printing) are $3.0 million. The shares close the first day at $26.

Step 1: Gross proceeds = 10,000,000 × $20 = $200 million.
Step 2: Underwriting spread = 7% × $200M = $14.0 million. Net proceeds before other costs = $186.0 million.
Step 3: Net proceeds after other direct costs = $186.0M − $3.0M = $183.0 million.
Step 4: Underpricing = ($26 − $20) / $20 = 30%.
Step 5: Money left on the table = ($26 − $20) × 10,000,000 = $60.0 million.
Step 6: Total cost = $14.0M + $3.0M + $60.0M = $77.0 million, or 38.5% of gross proceeds.

Of this cost, only 8.5% of gross proceeds (the $14.0M spread plus $3.0M expenses = $17.0M) appears on any invoice. The economic cost to existing shareholders is much larger and mostly invisible in the accounts. This also holds for the greenshoe: with strong demand, underwriters exercise the option for 1.5 million additional shares at $20 less spread, giving the company further proceeds of 1,500,000 × $20 × 0.93 = $27.9 million, but those shares were also sold at a price below their day-one value (a further $9.0 million of "underpricing" for the shares issued under the option).

*Caveat.* The figure above treats the full difference between the first-day close and the offer price as a cost. If part of that jump reflects a true post-listing improvement in value, perhaps because the market resolves uncertainty, the economic cost is smaller than the headline. A common-sense benchmark is whether the issuer could have obtained the close price for those shares at all. Because a higher offer price would have reduced demand, the "left on the table" calculation overstates the true loss, but it remains the standard measure.

### 13.6.4 Alternatives to the traditional IPO

- **Direct listing.** The company lists existing shares without issuing new ones; it raises no primary capital, and an opening auction sets the reference price.
- **Auction IPOs.** Investors bid; the clearing price sets the offer price. This reduces discretion in allocation and often underpricing, but is rarely used.
- **Special purpose acquisition companies (SPACs).** A shell with cash raised in its own IPO merges with a private firm, giving it a listing. Costs include sponsor promote and warrants that dilute the target's holders; results for investors have been mixed.
- **Dual-track processes.** The company prepares simultaneously for an IPO and a sale, and chooses the better outcome.

### 13.6.5 IPO timing and market cycles

IPO volume moves in waves. Firms rush to list when valuations are high ("hot issue" markets) and are absent when markets are weak. Issuers may be rationally exploiting windows of opportunity, and managers also may be timing the market. The managerial implication is to keep the company IPO-ready, with audited statements, controls and governance, so that the board can decide in a favorable window, but never to base the business plan on the assumption that a window will open.

## 13.7 Seasoned Equity Offerings

A **seasoned equity offering (SEO)**, or follow-on, is an issue of additional shares by a firm that is already public. It can be a **primary** offering (the company sells new shares and receives the proceeds), a **secondary** offering (existing holders sell and the company receives nothing), or a combination. SEOs may be marketed in a full roadshow or done quickly as an overnight **bought deal** or **accelerated bookbuild**, in which a bank buys the whole block at a fixed price and then resells it.

### 13.7.1 Costs and price effects

Typical direct costs are lower than for IPOs, as the company's information is already in the public domain: spreads of perhaps 3% to 5%. More significant is the **offer discount**: SEO shares are usually sold at a discount to the last close, often in the range of 2% to 5%. And the **announcement effect**: on average, share prices fall when a firm announces a seasoned equity offering, commonly in the range of 2% to 3% in studies of U.S. industrial firms, with smaller effects for utilities and larger for firms with greater information asymmetry.

The standard explanation comes from Myers and Majluf. Managers know more than outside investors about the firm's true value. If managers act in the interest of existing shareholders, they issue equity when they believe it is overvalued and avoid issuing it when it is undervalued. Rational investors infer from the announcement that the shares may be overvalued, and the price falls. This reasoning also produces the **pecking order** of financing: internal funds first, then debt, and equity only as a last resort. Other reasons for negative announcement effects include the reduction in leverage and the loss of control, and the revelation that the firm's investment opportunities are less valuable than thought.

**Example 13.8 – Economics of a seasoned offering.**
Brightwater Energy has 80 million shares at $50, a market capitalization of $4.0 billion. It issues 8 million new shares (10% of the existing count) at an offer price of $48.50 (a 3% discount to the last close). Underwriting and other costs are 4% of gross proceeds. Announcement of the offer causes the market price to fall 2% before pricing, to $49.00.

Step 1: Gross proceeds = 8,000,000 × $48.50 = $388.0 million.
Step 2: Costs = 4% × $388.0M = $15.52 million. Net proceeds = $372.48 million.
Step 3: Market value of existing equity after announcement = 80,000,000 × $49.00 = $3,920 million. (Loss for existing holders from the announcement effect = 80M × $1.00 = $80 million.)
Step 4: Post-issue market value = $3,920M + $372.48M = $4,292.48 million, assuming the proceeds are worth their face value (that is, no extra value from the project).
Step 5: Post-issue shares = 88,000,000. Value per share = $4,292.48M / 88M = $48.78.

Existing shareholders therefore own shares worth $48.78 versus $50.00 before the announcement: a loss of $1.22 per share (2.4%), of which $1.00 is the announcement effect and $0.22 results from selling shares at a discount and paying fees. Now consider the new project: if the $372.48 million is invested at an NPV of, say, $60 million, post-issue value rises to $4,352.48M and value per share to $49.46, which shows why a negative announcement effect can be offset by a clearly communicated, credible value-adding use of proceeds.

### 13.7.2 Managerial guidance for SEOs

- Issue after good news, not to fix a problem: the market discounts issues by firms that need cash urgently.
- Communicate the use of proceeds with specifics.
- Consider alternatives: debt, internal cash, asset sales, or a convertible bond, which may carry a smaller announcement effect.
- For a large issue relative to existing market capitalization, consider a rights issue (below) or a pre-marketed structure to limit the discount.
- Time the issue relative to scheduled earnings and the information the market is waiting for; issuing before an announcement can be exploited by arbitrageurs and can raise legal risk.

## 13.8 Rights Issues

A **rights issue** offers new shares first to existing shareholders in proportion to their holdings, usually at a discount to the market price. It is the dominant form of seasoned equity issuance in the United Kingdom, much of continental Europe and many Asian markets, and relatively rare in the United States. Because existing shareholders are given the first right to buy, they can protect their percentage ownership: those who do not wish to invest can sell their rights.

### 13.8.1 Mechanics

Each existing share receives one right. A ratio such as "1 for 5" means that five rights entitle the holder to buy one new share at the **subscription price**. Rights are typically tradable during the offer period. Because the subscription price is set below the market price, the rights have positive value, and after the ex-rights date, the share price drops to reflect the dilution.

```
Theoretical ex-rights price (TERP) = (N × P_cum + K) / (N + 1)
Value of one right = P_cum − TERP
```

where N is the number of existing shares needed per new share (5 in a 1-for-5 issue), P_cum is the cum-rights share price (before the ex-date) and K is the subscription price. Equivalently, the value of a right is `(TERP − K) / N`.

**Example 13.9 – A rights issue.**
Solana Retail has 50 million shares priced at $40 (market capitalization $2,000 million). It announces a 1-for-5 rights issue at a subscription price of $32.

Step 1: New shares = 50,000,000 / 5 = 10,000,000. Proceeds = 10,000,000 × $32 = $320 million.
Step 2: TERP = (5 × $40 + $32) / 6 = $232 / 6 = $38.667.
Step 3: Value of a right = $40 − $38.667 = $1.333. Check: ($38.667 − $32) / 5 = $1.333.
Step 4: Check market capitalization after the issue: 60,000,000 × $38.667 = $2,320 million = $2,000M + $320M.

*Shareholder A takes up the rights.* She holds 1,000 shares ($40,000). She receives 1,000 rights and needs 5 per new share, so she can subscribe for 200 new shares by paying 200 × $32 = $6,400. She then holds 1,200 shares worth 1,200 × $38.667 = $46,400, which equals her original $40,000 plus the $6,400 invested. She is exactly as well off as before.

*Shareholder B sells the rights.* He keeps 1,000 shares worth $38,667 and sells 1,000 rights at $1.333 for $1,333. Total = $40,000. He is also unharmed, but his ownership percentage has fallen from 1,000/50M to 1,000/60M.

*Shareholder C ignores the rights.* She holds 1,000 shares at $38,667 and lets the rights lapse, losing $1,333 (3.3%). This is why issuers usually arrange for unexercised rights to be sold on behalf of the holders (and the proceeds paid out), and why the process is explicit about deadlines.

### 13.8.2 The subscription price and the logic of a deep discount

A common puzzle is why issuers use deep discounts (10% to 40% below the market price) in rights issues, when the discount in a fully subscribed issue is not a cost: the transfer goes from shareholders to themselves. The answer is that the discount makes full take-up likely: it reduces the chance that the market price falls below the subscription price during the offer period, in which case no one would subscribe and underwriters would have to buy the shares. The real cost to a holder arises only when she cannot or will not subscribe or sell her rights. With a deeper discount, the issuer raises the same amount by issuing more shares, but TERP is lower and the value of each right is larger, leaving existing holders' wealth unchanged. In other words, the **subscription price does not change shareholder wealth** in a fully subscribed issue; it only changes the number of shares. Underwriting costs, however, are higher for narrower discounts because the underwriter bears more risk of an unsold issue.

### 13.8.3 Rights issues versus underwritten public offers

Rights issues protect existing shareholders against ownership dilution and wealth transfer, and can reduce the cost of selling very large amounts of equity relative to market capitalization. On the other hand, they take longer to execute (several weeks), expose the issuer to market movements during the offer period, and demand administrative effort. In markets where pre-emption rights are statutory or customary, issuing shares for cash to outsiders without first offering them to existing holders requires shareholder approval, and the rights issue is the default. In markets lacking such customs, firms prefer the speed of the bought deal.


**Table 13.4 – Comparison of equity issuance methods (illustrative ranges; actual values vary by market and period)**

| Feature | IPO | SEO (underwritten public offer) | Rights issue |
|---|---|---|---|
| Information asymmetry | High | Moderate | Moderate |
| Typical discount | 10%–20% to fair value | 2%–5% to last close | 10%–40% to market (no wealth effect if fully taken up) |
| Direct fees (typical) | 5%–7% spread plus expenses | 3%–5% | Lower, mainly for standby underwriting |
| Speed | Months | Days to weeks | Weeks |
| Ownership dilution | New investor base | Existing holders diluted unless they buy | Holders can maintain share |

## Case Study: Northgate Biosystems Chooses Its Next Round

*Illustrative case; Northgate Biosystems and all figures are fictional.*

Northgate Biosystems develops diagnostic instruments for hospital laboratories. Founded eight years ago by Dr. Anjali Rao (CEO) and Tomas Lindqvist (CTO), it has revenue of $55 million, growing 35% a year, and an operating loss of $6 million as it invests in a second product line. It holds $9 million in cash and burns about $1 million a month, so it has roughly nine months of runway.

The cap table before any new financing shows 5.0 million founder shares (50%), 2.5 million shares held by early venture investors from a Series A and B (25%, total invested $18 million, 1x non-participating preference), 1.5 million shares held by employees and an existing option pool (15%) and 1.0 million shares of unallocated pool (10%). Total fully diluted: 10.0 million shares.

Two offers are on the table.

**Offer 1: Series C from Meridian Growth Partners.** $40 million at a $120 million pre-money valuation, with these terms: a 1x participating preferred with a 2.5x cap, senior to earlier preferred; a refreshed unallocated option pool equal to 12% of post-money, counted in the pre-money; broad-based weighted-average anti-dilution; one board seat with a veto over any sale below $300 million; and exclusivity for 60 days. Meridian says the company can raise a further round within 24 months if it meets revenue milestones.

**Offer 2: IPO preparation.** Bankers say the company could list in about nine months if it audits two more years under public-company standards and shows a path to profit. They indicate a value range of $200 million to $260 million pre-money, a base deal of $70 million primary and $15 million secondary, a gross spread of 6.5%, other costs of about $4 million, and an expected IPO discount of 15%. The 15-month timeline exceeds Northgate's cash runway, so it would need a $12 million bridge, which is available from existing investors as a convertible note at a 20% discount to the IPO price.

Dr. Rao favors the IPO because the offer would give her currency for acquisitions and public visibility. Lindqvist worries about quarterly scrutiny and fears that the second product line, which will be loss-making for two more years, will be punished by public investors. The Series A and B funds, nine and seven years into their holdings, have strong preferences for an exit within 24 months, and one has hinted it may not offer new money in a private round.

The board must decide within three weeks. Meridian's lawyers note that the term sheet's valuation is "headline" and invite Northgate to compare its effective pre-money after the pool. A banker adds that if the IPO market weakens, Northgate could find itself forced into a down round or an unfavorable sale. A third alternative, raising a smaller $20 million round from existing investors while cutting the burn, has been raised but not priced.

**Discussion questions**

1. Calculate Northgate's effective pre-money valuation to existing holders under Offer 1, taking into account the option pool required by Meridian. What price per share does Meridian pay, and how many shares does it receive? (Hint: consider the 12% post-money pool as a share of the total, and the unallocated pool that already exists.)
2. Compare the common stockholders' proceeds under Offer 1 at exit values of $150 million, $300 million and $500 million, using Table 13.2 as a template. At which exits does the participation feature matter most, and what does this imply about the founders' incentives?
3. Estimate the all-in cost of the IPO route at the midpoint of the range, including the spread, other costs and IPO discount. How much dilution would the bridge note create, and why might the existing investors prefer the IPO even if the cost is higher?
4. What does each path imply for control, information disclosure, strategic flexibility and risk if markets weaken? Which would you recommend, and what negotiating asks would you make on Offer 1?

## Key Takeaways

- Equity financing proceeds in stages, from founders and angels through venture rounds to an IPO and seasoned offerings; each stage reflects a different mix of risk, information and investor expectations.
- Staged venture funding is a response to information asymmetry and moral hazard: capital is released as milestones are met, and each round's price carries information.
- The venture capital method works backward from a projected exit value, a target return and expected future dilution to a required ownership stake and valuation; high target returns largely compensate for the probability of failure.
- Headline valuations mislead. Compare offers by effective pre-money after the option pool, and model founders' proceeds across exit values given the liquidation preference, participation and cap.
- Dilution is not the enemy; low price per share relative to value is. Ownership percentages multiply across rounds, and value per share is what matters to existing holders.
- Down rounds trigger anti-dilution adjustments: full ratchet moves much more value to earlier investors than broad-based weighted average, at the expense of common holders and the new investors' stake.
- An IPO is priced by banks using comparables and book-building, with an intended discount; the full cost includes the spread, other expenses and underpricing, and typically far exceeds the visible fees.
- Theories of underpricing (winner's curse, information revelation, signaling, liability insurance, behavioral demand) are complementary rather than competing.
- Seasoned offerings typically depress share prices on announcement because of adverse selection (Myers and Majluf); the response is consistent with the pecking order.
- In a fully subscribed rights issue, the subscription price does not change shareholder wealth; the theoretical ex-rights price and the value of a right follow from simple averaging, and holders who neither subscribe nor sell their rights lose value.

## Review Questions

1. Explain why venture capital is provided in stages rather than in a single large investment. Which problems does staging mitigate?
2. Why are venture capital target returns of 40% to 60% consistent with a much lower expected return on a diversified portfolio of ventures?
3. Distinguish between pre-money and post-money valuation. Why does an option pool included in the pre-money reduce the effective valuation received by existing holders?
4. Compare non-participating, participating and capped participating liquidation preferences. In which circumstances does each most favor the investor over common holders?
5. What is a down round and what does anti-dilution protection do? Why is the full ratchet considered more aggressive than broad-based weighted average?
6. Why might a company that could remain private choose to go public? Why might it choose not to?
7. Describe the book-building process. How does it help set the offer price, and how are allocation decisions linked to information production?
8. List three theories of IPO underpricing and describe the evidence one would look for in each.
9. Why do equity issues by listed firms tend to be accompanied by a fall in the share price? What does this imply for the timing and sizing of issues?
10. In a rights issue, why is the subscription price largely irrelevant to existing shareholders' wealth if all rights are exercised or sold? Who loses if rights lapse?

## Problems

1. **Venture capital method.** A fund invests $3 million and expects the company to be worth $90 million in four years. Its target return is 40% per year, and it expects 15% dilution from later rounds (retention 0.85). Compute the required ownership today, post-money valuation and pre-money valuation.

2. **Option pool.** Cobalt Labs has 4,000,000 founder shares. An investor offers $5 million at a $20 million pre-money valuation and requires an unallocated pool of 12% of the post-money fully diluted shares. Compute the price per share, the number of new investor shares and the effective pre-money valuation to the founders.

3. **Liquidation preference.** An investor puts in $15 million for 30% of the equity with a 1x preference. For an exit of $40 million, compute the proceeds to the investor and to common holders if the preference is (a) non-participating and (b) fully participating. At what exit value would the non-participating investor convert to common?

4. **Dilution.** A company's founders own 100% initially. A seed round sells 20% of the company, a Series A sells 20% and a Series B sells 15% (each percentage is of the post-money company). What percentage do the founders own after all three rounds? What is the percentage held by seed investors after the Series B?

5. **Weighted-average anti-dilution.** Series A preferred was bought for $4 million at a conversion price of $5.00 (800,000 shares). The company has 10,000,000 fully diluted shares. It then issues new shares at $2.50 to raise $3 million. Compute the new conversion price under broad-based weighted average and the number of common shares into which the Series A now converts.

6. **IPO cost.** A firm sells 5 million shares at $16, with a gross spread of 6% and other direct costs of $1.8 million. The first-day close is $21. Calculate net proceeds, underpricing, money left on the table and the total cost as a percentage of gross proceeds.

7. **Rights issue.** A firm with 40 million shares priced at $25 announces a 1-for-4 rights issue at $20. Compute proceeds, the theoretical ex-rights price and the value of a right. A shareholder with 2,000 shares takes up her rights in full: show that her wealth is unchanged.

8. **SEO.** A firm has 30 million shares at $60. It sells 3 million new shares at $57, with costs equal to 3.5% of gross proceeds. The announcement causes the share price to fall by 2.5% before the offer is priced (to $58.50). Compute the net proceeds and the post-issue value per share, assuming the proceeds are worth their face value.

### Answers to Selected Problems

1. Required multiple = 1.4^4 = 3.8416; required exit value of the investment = $11.52 million; ownership at exit = 11.52 / 90 = 12.81%; ownership today = 12.81% / 0.85 = 15.07%. Post-money = 3 / 0.1507 = $19.91 million; pre-money = $16.91 million.
2. Post-money = $25 million; investor 20%, pool 12%, founders 68%. Total shares = 4,000,000 / 0.68 = 5,882,353; investor shares = 1,176,471; price = $5,000,000 / 1,176,471 = $4.25. Effective pre-money = $4.25 × 4,000,000 = $17.0 million (versus $20 million headline).
3. (a) Non-participating: max($15M, 30% × $40M = $12M) = $15M to the investor; $25M to common. (b) Participating: $15M + 30% × $25M = $22.5M; common receives $17.5M. Conversion for non-participating holder occurs when 30% × exit > $15M, i.e., exit > $50M.
4. Founders: 0.80 × 0.80 × 0.85 = 54.4%. Seed investors: 20% × 0.80 × 0.85 = 13.6%.
5. A = 10,000,000; B = $3,000,000 / $5.00 = 600,000; C = $3,000,000 / $2.50 = 1,200,000. NCP = $5.00 × (10,000,000 + 600,000) / (10,000,000 + 1,200,000) = $4.732. Series A converts into $4,000,000 / $4.732 = 845,283 shares (an increase of 45,283).
6. Gross = $80 million; spread = $4.8 million; net proceeds = $80M − $4.8M − $1.8M = $73.4 million. Underpricing = (21 − 16)/16 = 31.25%. Money left on the table = $5 × 5,000,000 = $25.0 million. Total cost = $4.8M + $1.8M + $25.0M = $31.6 million = 39.5% of gross proceeds.
7. New shares = 10 million; proceeds = $200 million. TERP = (4 × 25 + 20) / 5 = $24.00. Value of a right = $25 − $24 = $1.00. The shareholder holds 2,000 rights, subscribes for 500 shares at $20 = $10,000; she then holds 2,500 shares worth $60,000 = original $50,000 + $10,000 invested; wealth unchanged.
8. Gross = $171.0 million; net = $171.0M × 0.965 = $165.015 million. Post-announcement market value of existing equity = 30M × $58.50 = $1,755M. Post-issue value = $1,755M + $165.015M = $1,920.015M over 33 million shares = $58.18 per share (a fall of $1.82, or 3.0%, from $60).
