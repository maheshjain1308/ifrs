# Chapter 16: Payout Policy

## Learning Objectives

- Describe the mechanics, timeline, and legal constraints of cash dividends, share repurchases, special dividends, and stock dividends.
- Prove the Modigliani-Miller dividend irrelevance proposition using homemade dividends, and identify the assumptions whose failure makes payout policy matter.
- Compare dividends and repurchases in terms of flexibility, taxation, EPS effects, and value transfers between selling and continuing shareholders.
- Explain tax-based clienteles, the ex-dividend price drop, and the signaling and agency theories of payout, including Lintner's partial-adjustment model.
- Distinguish stock splits and stock dividends from cash payouts and analyze their accounting and valuation effects.
- Design a payout policy in practice by combining the residual approach, sustainable growth, target payout ranges, and a plan for returning surplus cash.

## Opening Vignette

*Illustrative scenario; the company is fictional.*

Calder Semiconductor Equipment designs and manufactures specialized tools for chip fabrication. After a strong three-year expansion, the company has $1.2 billion of cash on its balance sheet, generates about $600 million of free cash flow a year, and expects to need roughly $350 million annually for capital spending and research. The company has never paid a dividend. Its CEO, Tomas Reyes, believes the stock is undervalued after a sector sell-off. Its CFO, Elena Park, is under pressure from three directions at once.

An activist fund holding 4 percent of the shares has published a letter demanding that Calder "return excess capital" through a $1 billion buyback and a regular dividend. A long-term pension fund, one of the largest holders, has written privately that it prefers a dividend because its mandate requires current income. And Calder's head of strategy reminds the board that the semiconductor equipment industry is deeply cyclical: orders fell 40 percent in the last downturn, and the firm's rivals that had distributed cash aggressively were forced to cut payouts and borrow at punitive rates when business slowed.

Elena has to answer a set of questions that sound simple but are not. Should Calder pay cash at all, or keep funding growth? If it pays, should it be a dividend, which investors read as a commitment, or a repurchase, which is flexible but may be bought at the wrong price? Does the choice matter for the share price, or merely for who is happy? How does the answer depend on taxes, on what investors infer from the announcement, and on how management would otherwise spend the cash?

This chapter develops a framework for those questions. We begin with the mechanics, then present the benchmark irrelevance result of Modigliani and Miller, and then work through the frictions (taxes, clienteles, information, agency problems) that make payout policy a real management decision. We close with practical guidance for setting a policy and a case in which a board must choose.

## 16.1 The Payout Decision and Its Mechanics

A firm that earns more cash than it can profitably reinvest must eventually return it to its owners. *Payout policy* is the set of decisions about how much to distribute, in what form, and on what schedule. Along with investment and financing decisions, it is one of the three core decisions of corporate finance. The link is the cash flow identity: free cash flow to equity equals dividends plus repurchases minus net share issuance. Given a firm's investment and borrowing plans, the payout is fixed; to pay more, the firm must invest less, borrow more, or issue shares. This is why payout cannot be treated in isolation.

### Forms of Payout

| Form | How it works | Typical features |
|---|---|---|
| Regular cash dividend | Declared by the board, paid per share each quarter (or half-year) | Sticky; cuts are rare and read as bad news |
| Special (extra) dividend | One-time distribution declared separately | No expectation of repetition |
| Open-market repurchase | Firm buys its own shares on the exchange over time | Flexible; no obligation to complete |
| Tender offer / accelerated repurchase | Firm offers to buy a stated number of shares at a stated price or range | Faster, more visible, usually a premium |
| Stock dividend / stock split | Additional shares distributed pro rata | No cash leaves the firm |
| Dividend in kind / spin-off | Distribution of assets or shares of a subsidiary | Restructures the business |

Many firms also operate a *dividend reinvestment plan* (DRIP), which lets shareholders use dividends to buy additional shares, sometimes at a discount.

### The Dividend Timeline

Four dates matter for a cash dividend.

- *Declaration date.* The board announces the amount, the record date, and the payment date. From this moment the dividend is a legal liability of the firm.
- *Ex-dividend date.* Shares trade without the right to the dividend from this date. In markets with standard settlement cycles, the ex-date is set shortly before the record date.
- *Record date.* Holders on the company's books receive the dividend.
- *Payment date.* The cash is actually paid.

The price of a share should fall around the ex-dividend date by approximately the value of the dividend to the marginal investor (Section 16.4), since a buyer on or after that date no longer receives it.

### Legal and Contractual Constraints

Corporate law places limits on distributions, intended to protect creditors. Typically, dividends and buybacks cannot be paid from capital that impairs the firm's ability to pay its debts as they fall due, and some jurisdictions restrict payouts to the extent of retained earnings or distributable reserves. Loan covenants often limit dividends and share repurchases explicitly: for instance, by tying them to a percentage of net income or a leverage threshold. A manager must check the legal capacity, the covenants, and the liquidity position before announcing any payout.

### Trends in Payout Form

In many developed markets, repurchases have grown considerably relative to dividends over recent decades. Two reasons are commonly cited: repurchases offer flexibility (they can be scaled back without the negative signal of a dividend cut), and in many tax systems they receive better tax treatment than dividends for some shareholders. Dividends nevertheless remain the foundation of payout for mature, stable firms, and many firms use a combination: a regular dividend sized to be sustainable through a downturn, supplemented by repurchases of variable size.

## 16.2 Dividend Irrelevance: Modigliani and Miller

In 1961 Miller and Modigliani showed that, in a perfect capital market, the value of a firm is determined by its investment policy (the cash flows from its assets) and not by how it splits earnings between dividends and retained earnings. The argument is closely related to the capital structure irrelevance of Chapter 15.

### The Assumptions

The result holds when there are no taxes, no transaction or issuance costs, no information asymmetries, and no agency problems, and when the firm's investment policy is fixed and independent of its payout. Fixing the investment policy is crucial. The proposition does not say that retaining cash and then wasting it on bad projects is harmless; it compares payout alternatives for *given* investments.

### The Logic

If a firm decides to pay a larger dividend than its free cash flow, it must raise the shortfall by issuing new shares (or debt), whose value dilutes the existing shareholders by exactly the amount of the extra dividend received. If it pays less, the retained cash adds to firm value and so to the share price in the same measure. The shareholder receives either cash or share price appreciation, and in a perfect market these are worth exactly the same. Moreover, shareholders can create any pattern of cash flows they want by selling shares or reinvesting dividends, which is the *homemade dividend* argument.

**Example 16.1 – Homemade dividends.** A firm with 1,000,000 shares has equity worth $50,000,000 ($50 per share) and a planned $5.00 per share cash payout ($5,000,000 in total). Alternatively, it could pay no dividend. Consider investors with different preferences, and no taxes or transaction costs.

*Case A: An investor who wants cash income but the firm pays nothing.* The investor owns 1 share at $50. To raise $5.00, the investor sells 5/50 = 0.10 share. Remaining holding: 0.90 share × $50 = $45, plus $5.00 cash. Total wealth: $50.

*Case B: An investor who wants no cash but the firm pays the $5.00 dividend.* After the dividend the share trades ex-dividend at $50 − $5 = $45. The investor reinvests the $5 by buying 5/45 = 0.1111 additional share. New holding: 1.1111 shares × $45 = $50. Total wealth: $50.

*Conclusion.* Whether the firm pays $5.00 or nothing, an investor can get the same position (cash plus shares worth $50) by trading on their own account. Because a shareholder can achieve any preferred cash pattern without cost, the firm's choice is irrelevant to value. If trading costs, taxes, or information frictions made the homemade strategy costly, the firm's policy could matter; that is the topic of the rest of the chapter.

### The Dividend Is Not Free Cash in the Valuation Sense

A common source of confusion is the dividend discount model, which values a share as the present value of all future dividends, and which seems to imply that higher dividends mean higher value. The resolution is that the model discounts *all* future dividends, including those funded by retained cash. Raising dividends today by issuing shares reduces future dividends per share exactly enough to leave the present value unchanged. Consider a firm that can only fund a larger dividend by issuing new shares; the existing owners receive cash today but own a smaller fraction of future dividends. The model confirms irrelevance, rather than contradicting it.

### What Matters if Not Dividends

If payout form is irrelevant in the perfect market, then what drives value? The answer is the quality of the investment decisions. Returning cash to shareholders when the firm lacks positive-NPV projects is value-increasing relative to retaining it and misusing it. The payout question is therefore inseparable from the question: *what is the opportunity cost of retained cash?* The relevant comparison is the return the firm can earn on the cash against the return shareholders could earn on equivalently risky investments elsewhere. A firm that cannot earn its cost of capital on retained earnings should pay them out.

## 16.3 Dividends versus Repurchases

In the MM world, a repurchase is equivalent to a dividend: a shareholder who wanted cash would sell shares in the buyback; one who did not could simply keep holding, and the price per share would be unaffected. Cash leaves the firm, the number of shares falls, and the value of each remaining share is unchanged. Differences between the two arise from frictions, but understanding the neutral case is essential to avoid the most common fallacies about buybacks.

### The EPS Fallacy

Repurchases reduce the share count, so EPS rises mechanically, and many managers and commentators describe this as a benefit. It is not necessarily so. The money used to repurchase shares was earning something (interest on cash) or could have been used to retire debt. The reduction in earnings is smaller than the proportional reduction in shares only if the earnings yield on the stock exceeds the after-tax return on the cash spent. Even then, the P/E multiple adjusts to reflect the changed risk and growth; the value per share is unaffected unless something else changes.

**Example 16.2 – Dividend versus repurchase at a fair price.** Halden Instruments has 100 million shares trading at $40, net income of $200 million (EPS $2.00, P/E 20), and equity value $4,000 million. It will distribute $100 million to shareholders. Cash earns 4 percent before tax; the tax rate is 25 percent. Assume the stock is fairly priced.

*Option 1: Dividend.* Dividend per share = 100 / 100 = $1.00. After the ex-date the equity value is 4,000 − 100 = $3,900 million, so the price is 3,900 / 100 = $39.00. Shareholders hold a share worth $39 plus $1.00 cash = $40. If the cash was earning interest, the foregone after-tax interest is 100 × 0.04 × 0.75 = $3 million, so net income falls to $197 million and EPS to $1.97.

*Option 2: Repurchase.* Shares bought = 100 / 40 = 2.5 million. Remaining shares = 97.5 million. Equity value after = 4,000 − 100 = $3,900 million, so the price is 3,900 / 97.5 = $40.00. The price is unchanged, as MM predicts, and a seller receives $40 per share while continuing holders keep $40.

*EPS comparison.* Ignoring foregone interest, EPS after the buyback = 200 / 97.5 = $2.051 (up 2.6 percent). Accounting for the $3 million of lost after-tax interest, net income is $197 million and EPS = 197 / 97.5 = $2.0205 (up 1.0 percent). The P/E ratio falls from 20.0 to 40 / 2.0205 = 19.8, and the value per share is the same $40. A buyback "raises EPS" without increasing value.

*Interpretation.* The apparent EPS accretion is an arithmetic artifact. What matters is whether the buyback is done at a price below intrinsic value (a real benefit to continuing shareholders) or above it (a transfer to sellers), as the next example shows.

### Value Transfers When Shares Are Mispriced

If the firm's managers believe the market price differs from intrinsic value, a repurchase transfers wealth between those who sell and those who stay. Buying below intrinsic value benefits continuing shareholders at the expense of sellers; buying above intrinsic value does the opposite. Managers who maximize the wealth of long-term holders should therefore repurchase when they think shares are undervalued and avoid it when they are overvalued, subject to two cautions. The first is that managers' views of undervaluation are not always correct, and the second is that selling shareholders who are harmed are also shareholders (some of whom are long-term holders who sell for liquidity reasons).

**Example 16.3 – Buying back undervalued and overvalued shares.** Halden's intrinsic value, estimated by management, is $50 per share (equity value $5,000 million) before a $100 million repurchase.

*(a) Market price $40 (undervalued).* Shares retired = 100 / 40 = 2.5 million, leaving 97.5 million. True value after = 5,000 − 100 = $4,900 million. Intrinsic value per remaining share = 4,900 / 97.5 = $50.26. Continuing shareholders gain $0.26 per share (0.5 percent); sellers received $40 for shares worth $50, losing $10 each.

*(b) Market price $60 (overvalued).* Shares retired = 100 / 60 = 1.667 million, leaving 98.333 million. Intrinsic value per remaining share = 4,900 / 98.333 = $49.83. Continuing shareholders lose $0.17 per share; sellers gained $10 each.

*Interpretation.* The gain to continuing shareholders is small relative to the gain or loss to sellers, because only a small fraction of shares is retired. The real consideration for a buyback is rarely clever timing; it is whether the firm has surplus capital, and whether the return of that capital is preferable to other uses.

### Flexibility, Signals, and Commitment

| Feature | Regular dividend | Open-market repurchase |
|---|---|---|
| Commitment | High; cuts are penalized by markets | Low; programs can be slowed or stopped |
| Signal content | Confidence in stable future earnings | Possible undervaluation; weaker as a commitment |
| Investor tax treatment | Taxed on receipt (rate varies by jurisdiction) | Taxed on gain only for selling holders, timing at holder's choice |
| Suitable for | Stable, mature cash flows | Variable cash flows; one-off surpluses |
| Effect on share count | None | Reduces shares |
| Risk of management misuse | Low | Buying high, funding by debt at the top of a cycle; offsetting option dilution |
| Effect on insiders | Neutral | Can raise value of options and EPS-linked bonuses |

A significant share of repurchases are used merely to offset the dilution from employee stock options and grants. In such cases the net reduction in share count is zero or small, and the cash outflow is, in substance, a labor cost. Analysts should compute *net* repurchases (gross buybacks less issuance) and the share count trend rather than headline buyback announcements.

## 16.4 Taxes and Clienteles

Taxes are the most commonly cited friction in payout policy. Their effect depends on the specific tax system, but several general principles apply.

### The Tax Disadvantage of Dividends

Where dividends are taxed at a higher rate than capital gains, or where gains are taxed only on realization, an extra dollar of dividends is worth less after tax than an extra dollar of capital gain. A firm paying a dividend pushes shareholders to realize taxable income immediately, while buybacks allow investors to choose when and whether to realize gains (and to postpone the tax indefinitely by never selling). Even if rates are equal, deferral has value. Tax-exempt institutions and some corporate shareholders in some jurisdictions are indifferent or even favor dividends. This predicts that high-tax investors prefer low payouts and repurchases.

### The Ex-Dividend Price Drop

If investors' marginal tax rate on dividends is τ_D and on capital gains is τ_G, then in equilibrium, the price should fall on the ex-dividend date by less than the full dividend if dividends are taxed more heavily. The marginal investor is indifferent between holding the stock through the ex-date and selling it just before:

```
(P_cum − P_ex) × (1 − τ_G) = D × (1 − τ_D)
Price drop = D × (1 − τ_D) / (1 − τ_G)
```

**Example 16.4 – The ex-dividend drop.** A stock trades cum-dividend at $50, and pays a dividend of $2.00 per share. The marginal investor faces a 30 percent tax on dividends and a 15 percent tax on capital gains.

*Step 1: After-tax dividend.* 2.00 × (1 − 0.30) = $1.40.

*Step 2: Equivalent pre-tax capital loss.* The investor would be indifferent if the after-tax value of the lost price equals the after-tax dividend: drop × (1 − 0.15) = 1.40, so drop = 1.40 / 0.85 = $1.647.

*Step 3: Ex-dividend price.* 50 − 1.647 = $48.35.

*Interpretation.* The price falls by 82 percent of the dividend, not 100 percent. If the tax rates were equal, the drop would be $2.00. A drop that is smaller than the dividend is consistent with dividend-taxed investors being the marginal price setters, but the empirical evidence is mixed because transaction costs, short-term traders, and tax-exempt arbitrageurs also influence prices around the ex-date. The key lesson is that the ex-dividend price drop and the after-tax value of the dividend are linked through the tax rates of the marginal investor, so the drop is a way of reading what that investor thinks of dividends.

### Clienteles

If investors differ in their tax rates and preferences, they will sort into groups, or *clienteles*, each choosing firms whose payout policy suits them. High-tax individuals favor low-payout stocks; pension funds, endowments, and retirees needing income favor high-payout stocks. In equilibrium, supply of payout levels from firms matches the demand from clienteles, and a firm that changes policy simply swaps one clientele for another, at some transaction cost. This is a variation of the MM irrelevance: if clienteles are fully accommodated, no firm can create value by changing its payout. However, the changeover has costs: when a firm introduces or cuts a dividend, it may trigger selling by dissatisfied investors and temporary price pressure.

| Investor type | Likely preference | Reason |
|---|---|---|
| High-income individual in a jurisdiction taxing dividends heavily | Low payout, repurchases | Defers tax on gains |
| Retiree needing cash flow | Dividends | Avoids selling costs; psychological preference for spending income not principal |
| Tax-exempt pension fund | Indifferent on tax; may prefer dividends for liability matching | No tax disadvantage |
| Corporate investor with dividend exclusion | Dividends | Partial tax exemption on dividends received |
| Growth fund | Low payout | Wants reinvestment of earnings |
| Trust/endowment with spending rule | Dividends or total return | Spending rules often tied to income |

Many retirees say they prefer "living off the dividends." In the perfect market this is a psychological preference rather than an economic one, since selling a bit of stock produces the same cash. Behavioral explanations (self-control, mental accounting) and institutional rules (trusts that may spend income but not principal) give the preference some force in practice.

## 16.5 Signaling, Agency Costs, and Dividend Smoothing

Taxes explain why payout might be undesirable. Other theories explain why firms pay anyway, and why they pay in the particular patterns we observe.

### Signaling

Managers know more about the firm's prospects than outsiders do. A dividend increase is a costly commitment: if future earnings disappoint, the firm must either cut the dividend (which is punished) or find external funds. Only firms confident in future cash flow can afford to raise the dividend, so an increase *signals* good news, and the stock tends to rise at announcement. Cuts and omissions generally signal the opposite and are accompanied by price declines. The classic models of Bhattacharya, and of Miller and Rock, formalize this idea. The implication for managers is that the signal depends on the *surprise* relative to expectations, and that dividend policy has an informational role that extends beyond the cash itself.

Repurchases also carry information. An open-market program is a weaker commitment than a dividend and so a weaker signal. Tender offers at a premium, which require the firm to buy a fixed number of shares, are stronger signals of management's belief that the stock is undervalued. Because signaling requires cost to be credible, there is also a limit: if every firm announced buybacks as signals without following through, the signal would lose meaning, and investors have learned to look at actual completion rates.

### Agency Costs of Free Cash Flow

Jensen's free cash flow argument, introduced in Chapter 15, applies equally to payout. When managers retain cash that exceeds profitable investment opportunities, they may spend it on pet projects, empire-building acquisitions, or perquisites. Paying cash out reduces the resources under management's control and forces the firm to return to capital markets when it needs funds, subjecting its plans to external scrutiny. Seen this way, a commitment to pay dividends is a bonding device, and the predicted gains are largest for mature firms with few growth options and substantial surplus cash. Evidence suggests that the market responds more positively to payout increases by firms with poor investment opportunities, consistent with this theory, and that firms with weak governance hold cash that is valued at a discount by investors.

There is a conflict on the other side as well. Shareholders can use high payouts to transfer wealth from creditors: paying a large dividend reduces the assets backing the debt. Bondholders protect themselves with covenants, and aggressive payouts by highly leveraged firms can raise borrowing costs. Managers therefore balance the demands of shareholders for cash against the claims of lenders.

### Lintner's Model of Dividend Smoothing

Lintner's 1956 survey of managers found that:

- Firms think about dividends in terms of a long-run target payout ratio.
- Managers are reluctant to cut dividends and raise them only when they believe the increase is sustainable.
- As a consequence, dividends adjust only partially toward the target, and are much smoother than earnings.

This is summarized by a partial adjustment model:

```
D_t = D_{t−1} + s × (p × E_t − D_{t−1})
```

where D_t is the dividend this period, E_t is earnings (or EPS), p is the target payout ratio, and s is the speed of adjustment (0 < s ≤ 1). A smaller s implies a smoother policy. Despite decades of structural change in how firms pay out, smoothing remains a robust feature of dividend behavior, particularly among mature firms.

**Example 16.5 – Lintner smoothing.** A firm has a target payout ratio of 40 percent, an adjustment speed s = 0.30, and last year's dividend of $1.60 per share, which corresponded to EPS of $4.00 (a 40 percent payout). This year EPS jumps to $5.00; next year it rises to $5.50 and then $6.00.

*Year 1.* Target dividend = 0.40 × 5.00 = $2.00. Adjustment = 0.30 × (2.00 − 1.60) = $0.12. D_1 = 1.60 + 0.12 = $1.72. Actual payout = 1.72 / 5.00 = 34.4%.

*Year 2.* Target = 0.40 × 5.50 = $2.20. Adjustment = 0.30 × (2.20 − 1.72) = 0.144. D_2 = 1.72 + 0.144 = $1.864. Payout = 1.864 / 5.50 = 33.9%.

*Year 3.* Target = 0.40 × 6.00 = $2.40. Adjustment = 0.30 × (2.40 − 1.864) = 0.1608. D_3 = 1.864 + 0.1608 = $2.0248. Payout = 33.7%.

*Interpretation.* Over three years, EPS rises 50 percent (from $4.00 to $6.00) while the dividend rises 26.5 percent (from $1.60 to $2.02). The payout ratio falls below the target of 40 percent because the dividend lags the earnings growth. Conversely, if earnings fell, the dividend would stay high and the payout ratio would exceed the target temporarily. The smoothing explains why payout ratios swing more than dividends and why a dividend cut is so informative: management would only make it when the earnings shortfall appears permanent.

## 16.6 Stock Splits and Stock Dividends

*Stock splits* and *stock dividends* distribute additional shares to existing holders in proportion to their holdings. No cash leaves the firm, and the company's assets and earnings power are unchanged, so in a frictionless market the total value of a shareholder's position does not change.

### Mechanics and Accounting

In a *stock split* (for example, 2-for-1), the number of shares doubles and the par value (if any) per share halves; the equity accounts are unchanged. In a *stock dividend* (for example, 10 percent), the firm issues new shares worth 10 percent of the outstanding amount, and under conventional accounting treatment for small stock dividends (usually below about 20 to 25 percent of shares outstanding) transfers the market value of the new shares from retained earnings to common stock and paid-in capital. Larger distributions are treated like splits and only change the par value and share count. Local accounting rules vary, and managers should check the applicable standard.

**Example 16.6 – Split and stock dividend.** Pendleton Holdings has 100 million shares trading at $80 (market capitalization $8,000 million), common stock at $1 par.

*(a) 2-for-1 split.* Shares become 200 million, par becomes $0.50, and the price should fall to 8,000 / 200 = $40. A holder of 1,000 shares ($80,000) now owns 2,000 shares worth $40 each, still $80,000. Total equity on the balance sheet is unchanged.

*(b) 10% stock dividend (instead of the split).* New shares = 10 million. At a market price of $80, the accounting transfer is 10 million × $80 = $800 million from retained earnings: $10 million to common stock (par $1) and $790 million to additional paid-in capital. Shares become 110 million, and the price should be about 8,000 / 110 = $72.73. A holder of 1,000 shares now has 1,100 shares at $72.73 = $80,000.

*(c) Reverse split.* A 1-for-4 reverse split on a $4 stock reduces the share count by four and raises the price to $16, with no change in total value.

### Why Do Firms Split Shares?

Since splits create no cash and change no cash flow, they should not matter in theory. Three explanations are offered for why firms do them:

- *Trading range.* Managers believe there is an optimal price range for the shares, which makes them accessible to small investors and increases liquidity. Evidence on liquidity is mixed: splits often reduce price but increase the proportional bid-ask spread, in some markets.
- *Signaling.* Splits are costly in terms of fees and typically are done by firms whose stock has risen strongly, so they are taken to signal confidence about future earnings. Announcement returns are positive on average, but much of this reflects the earnings and dividend information accompanying the split.
- *Dividend commitments.* A split often accompanies a promise to maintain the per-share dividend, which implicitly increases the total dividend.

Stock dividends and splits are not cash payouts and are not substitutes for them. A stock dividend leaves shareholders with the same economic stake, whereas a cash dividend or repurchase returns value. Managers sometimes announce stock dividends as a way of "rewarding shareholders" without cash; the right response is to ask what they actually accomplish.

## 16.7 Payout Decisions in Practice

### Surveys of Managers

Surveys of financial executives consistently report a set of priorities. Managers say that maintaining the existing dividend per share is a very high priority, that they are reluctant to cut it, and that they would forego positive-NPV investments before cutting it in extreme cases. They say repurchase decisions are made after investment needs are met and are treated as more flexible, and that the level of payout is influenced by the stability of earnings, the firm's desire to preserve financial flexibility, and market conditions. Few managers cite tax considerations as the dominant factor, which is notable given how large they loom in theory. The practical consequence is that dividends are treated like fixed charges and repurchases like a residual.

### The Residual Dividend Approach

The *residual dividend policy* treats dividends as what is left after the firm has funded all positive-NPV investments while maintaining its target capital structure. The steps:

1. Determine the capital budget (the set of positive-NPV projects).
2. Choose the equity portion of that budget using the target capital structure.
3. Fund that equity portion with retained earnings.
4. Pay out any remaining earnings as dividends (or repurchases).

**Example 16.7 – Residual dividend.** Marlowe Industries has a target capital structure of one-third debt and two-thirds equity (D/V = 1/3). In Year 1, planned capital spending is $300 million and net income is $260 million.

*Year 1.* Equity needed = 300 × (2/3) = $200 million. Dividend = 260 − 200 = $60 million (payout ratio 60 / 260 = 23.1%). The remaining $100 million of investment is financed with new debt.

*Year 2.* Capital spending rises to $450 million with net income still $260 million. Equity needed = 450 × (2/3) = $300 million. Retained earnings of $260 million fall short by $40 million. Dividend = 0, and the firm must either issue $40 million of new equity or let leverage rise temporarily above target (with more borrowing).

*Interpretation.* A strict residual policy produces dividends that vary wildly from year to year (60 and then 0), which conflicts with managers' strong preference for smoothness and with the signaling consequences of cuts. In practice, firms use the residual idea over a multi-year horizon: they plan average investment and average earnings and set a *sustainable* dividend that they can maintain through the cycle, with repurchases or special dividends absorbing the surplus in good years. Repurchases fit the residual role well.

### Payout and Growth: Sustainable Growth and Value

Payout policy also determines growth, because retained earnings fund reinvestment. With ROE constant and no external equity, the *sustainable growth rate* is:

```
g = ROE × (1 − payout ratio) = ROE × b
```

where b is the retention ratio. Value depends on whether the reinvested funds earn more than the cost of equity.

**Example 16.8 – When retention creates value.** A firm expects next-year EPS of $4.00 and has a cost of equity of 11 percent. Compare two payout ratios under two different returns on equity, using the constant-growth model P = D_1 / (r − g).

*Case 1: ROE = 15%.*

```
Payout 40%: g = 0.15 × 0.60 = 9.0%;  D_1 = 1.60;  P = 1.60 / (0.11 − 0.09) = $80.00
Payout 70%: g = 0.15 × 0.30 = 4.5%;  D_1 = 2.80;  P = 2.80 / (0.11 − 0.045) = $43.08
```

*Case 2: ROE = 11% (equal to the cost of equity).*

```
Payout 40%: g = 0.11 × 0.60 = 6.6%;  D_1 = 1.60;  P = 1.60 / (0.11 − 0.066) = $36.36
Payout 70%: g = 0.11 × 0.30 = 3.3%;  D_1 = 2.80;  P = 2.80 / (0.11 − 0.033) = $36.36
```

*Interpretation.* When the firm earns more than the cost of equity on retained funds (Case 1), retention is worth more to shareholders than payout: price falls from $80 to $43 when payout is raised, because the firm would be forced to give up growth that creates value. When ROE equals the cost of equity (Case 2), payout is irrelevant, exactly as MM predicts: both policies give $36.36. If ROE were below 11 percent, higher payout would raise value. The message: *the payout decision is an investment decision in disguise.* Whether to pay out depends on the firm's marginal return on reinvestment, not on how investors feel about dividends.

### A Life-Cycle View

| Stage | Investment opportunities | Cash generation | Typical payout approach |
|---|---|---|---|
| Start-up / early growth | Abundant | Negative or low | No payout; external financing |
| High growth | Strong | Moderate | Little or no dividend; retain for expansion |
| Maturity | Moderate | Strong | Regular dividend, plus repurchases |
| Decline | Scarce | Strong but shrinking | High payout, special dividends, liquidation of assets |

Calder, in the opening vignette, sits between the high-growth and maturity stages, with a cyclical business and large cash balance. Such firms often choose a moderate regular dividend, covered comfortably even in a downturn, and a flexible repurchase program.

### Measuring Total Shareholder Yield

Because dividends and repurchases are substitutes, analysis should use total payout. The *total shareholder yield* adds the dividend yield to the net buyback yield:

```
Total yield = (Dividends + Net repurchases) / Market capitalization
```

A firm with a market capitalization of $4,000 million, dividends of $60 million, and net repurchases of $140 million has a total yield of (60 + 140) / 4,000 = 5.0%. The dividend yield alone, 1.5 percent, understates the cash returned to shareholders. A related measure, the *payout ratio relative to free cash flow*, indicates sustainability: a company distributing more than its free cash flow for several years is borrowing, depleting cash, or issuing shares to pay.

### A Practical Framework for Setting Policy

1. *Identify surplus capital.* After the capital budget, the strategic reserve (for acquisitions, a downturn buffer), and the target capital structure, how much cash is truly surplus, both now and on average over the cycle?
2. *Decide the base dividend.* Set a regular dividend that can be maintained through a severe downturn from internally generated cash. Express as a payout ratio range and per-share growth aspiration, and treat as a commitment.
3. *Use repurchases for the variable component.* Authorize programs sized to surplus cash, with discretion on timing. Net out issuance, and publish the logic.
4. *Use special dividends for one-time windfalls* (an asset sale, a settlement) that are not expected to recur.
5. *Check the constraints.* Covenants, legal distributable reserves, rating agency tolerance, and the liquidity position under stress.
6. *Communicate.* State the principles (priorities for cash, the dividend's coverage, how buybacks are decided) so that investors do not over-read individual announcements.
7. *Review annually and after major events.*

### Common Mistakes

- Funding buybacks with debt at the top of the cycle and then cutting them when credit conditions tighten, effectively buying high and selling low through issuance.
- Setting a dividend based on peak earnings and then cutting it in the downturn, with a double penalty of lower payout and negative signal.
- Using repurchases only to offset dilution and calling it a return of capital.
- Treating EPS accretion as the justification for a buyback.
- Paying out cash while ignoring positive-NPV opportunities; or hoarding cash with no plan, which erodes value through agency costs and invites activist pressure.
- Announcing large authorizations that are never executed, thereby damaging credibility.

## Case Study: Calder Semiconductor Equipment Sets a Payout Policy

*Illustrative case; the company and all figures are fictional.*

Calder Semiconductor Equipment has 200 million shares trading at $60 (market capitalization $12 billion), $1.2 billion of cash, $300 million of debt, and annual free cash flow before payouts that has averaged $600 million over the cycle but ranged from $150 million in the last trough to $900 million at the peak. The firm has never paid a dividend, and earlier in its life it funded growth by retaining all earnings. Its investment plan calls for around $350 million per year in capital and research (already counted in free cash flow) plus $200 million of possible bolt-on acquisitions that management considers attractive but uncertain.

The board has before it three proposals.

**Proposal A (the activist).** A $1 billion accelerated share repurchase this year, financed from cash and $400 million of new debt, followed by a regular dividend of $0.50 per share ($100 million per year). The activist argues that the cash is idle, that the stock trades at a discount to peers (a P/E of 14 compared with 18), and that management's earlier acquisitions have destroyed value. An accelerated repurchase at $60 would retire about 16.7 million shares, 8.3 percent of the total.

**Proposal B (the pension fund).** A regular dividend equal to 40 percent of average-cycle earnings, about $240 million a year or $1.20 per share, with no buybacks. The fund argues that a dividend is a firm commitment and provides discipline against empire-building.

**Proposal C (management).** A modest regular dividend of $0.25 per share ($50 million a year), covered more than three times by even the trough free cash flow of $150 million, together with a flexible repurchase program of up to $300 million a year, executed when the stock trades below management's estimate of intrinsic value and when cash exceeds a minimum liquidity reserve of $800 million. A further special dividend would be considered following major asset sales.

Elena Park, the CFO, notes several facts. First, in the last downturn, two competitors that had committed to large dividends were forced to cut them within a year and saw their share prices fall by more than their peers. Second, repurchase programs in the industry have been poorly timed: the sector's largest buybacks took place near the peak of the cycle. Third, her tax advisors say that a large fraction of Calder's shareholders (taxable individuals) are subject to a higher rate on dividends than on long-term capital gains, while the pension holders are untaxed. Fourth, Calder's research budget gets cut during downturns, which costs the firm its technological lead; a liquidity buffer therefore has strategic value beyond covering fixed charges. Finally, an internal analysis suggests that the average return on the recent acquisitions has been below the firm's cost of capital, supporting the activist's critique.

Elena believes that Proposal A takes on debt at the wrong point in the cycle and that the dividend of $100 million combined with a large buyback leaves too little in a trough: free cash flow of $150 million in the trough would barely cover the dividend and interest on $700 million of debt. Proposal B places too much weight on the dividend. But she sees merit in the activist's governance argument and wants some mechanism of accountability for acquisitions and a public statement of how the buyback will be sized.

**Discussion Questions**

1. Using MM dividend irrelevance, what assumptions would have to hold for Calder's choice among Proposals A, B, and C to not affect firm value? Which of those assumptions fail in this case?
2. Compute the dividend coverage under the trough free cash flow of $150 million for Proposals B and C. What does this imply about their relative risk of a future cut, and how would a cut be interpreted by the market?
3. A taxable shareholder faces a 30 percent tax on dividends and a 15 percent tax on gains. A pension fund pays no tax. Compare the after-tax value to each of $100 of dividends and $100 of repurchase proceeds that is 60 percent gain, and discuss how clienteles influence the choice.
4. Evaluate management's rule of buying back only when the stock is below intrinsic value. What are the risks of this rule, and what governance devices could make it credible to investors?

## Key Takeaways

- In a perfect market, the value of the firm depends on its investment policy, not its payout policy; shareholders can create any payout pattern by trading (homemade dividends).
- Payout is tied to the cash flow identity: paying more means investing less, borrowing more, or issuing shares, so the right question is the return on retained cash compared with shareholders' alternatives.
- Dividends and repurchases are close substitutes; a buyback raises EPS mechanically, but value per share changes only through mispricing or taxes, so EPS accretion is not a justification.
- Repurchases transfer value between sellers and continuing holders when the price differs from intrinsic value; the amounts are modest for small programs.
- Where dividends are taxed more heavily than gains, the ex-dividend drop is smaller than the dividend: price drop = D(1 − τ_D)/(1 − τ_G); clienteles sort investors into firms whose policies suit their tax status.
- Dividend increases signal confidence and cuts signal trouble; Lintner's model shows managers smooth dividends and adjust only partially to earnings changes.
- Payout can discipline managers by reducing free cash flow they might misuse, with the greatest value in mature firms with few opportunities.
- Splits and stock dividends redistribute no value; they change the share count and the price, with accounting differences between splits and small stock dividends.
- A residual policy applied strictly yields volatile dividends, so firms smooth: a sustainable base dividend plus flexible repurchases and occasional specials.
- Total shareholder yield, free cash flow coverage, and the liquidity position under stress are the measures that matter more than headline announcements.

## Review Questions

1. State the Miller-Modigliani dividend irrelevance proposition and the conditions under which it holds. Why must the investment policy be held fixed?
2. Explain homemade dividends with an example of an investor who wants cash when the firm pays none, and one who wants no cash when the firm pays a dividend.
3. Why does a share repurchase increase EPS? Under what condition would it also increase the share price?
4. Describe how a repurchase at a price below intrinsic value transfers wealth among shareholders. Why is the effect small for a modest program?
5. What is the relationship between the ex-dividend price drop and shareholders' tax rates? What does a drop of less than the dividend suggest?
6. What is a dividend clientele? Does the existence of clienteles imply that a firm should never change its payout policy?
7. Explain the signaling interpretation of dividend increases and cuts. Why might repurchases be a weaker signal?
8. How does the free cash flow hypothesis relate to payout policy? In what kind of firm is it most relevant?
9. Summarize Lintner's model. If earnings fall temporarily, what happens to the dividend and the payout ratio?
10. Why would a firm announce a stock split? Does a split create value? What other effects might make it appear to do so?

## Problems

1. A firm has 2 million shares at $30 and will pay a $3.00 dividend. An investor owning 1,000 shares wants no cash. After the dividend, how many shares must the investor buy with the proceeds, and what is the investor's total position value? Assume no taxes or costs.
2. A firm has 60 million shares at $36, net income of $120 million, and distributes $90 million. (a) Compute dividend per share if paid as a dividend. (b) Compute shares retired and EPS after a repurchase at $36, ignoring foregone interest. (c) Recompute EPS if the $90 million was earning 4% pre-tax, with a 25% tax rate. (d) Compute the P/E after the buyback for part (c) at a price of $36.
3. The firm in Problem 2 has intrinsic value of $45 per share (total $2,700 million) while the market price is $36. It repurchases $90 million. Compute intrinsic value per remaining share. Then suppose instead intrinsic value is $30 per share ($1,800 million) with the market price still $36 and compute the new intrinsic value per remaining share.
4. A stock trades at $60 cum-dividend and pays a $3.00 dividend. The marginal investor's tax rates are 35% on dividends and 15% on capital gains. Compute the ex-dividend price.
5. A firm's last dividend was $1.00 per share, its target payout is 50%, and its adjustment speed is 0.25. EPS this year is $3.00 and next year it is $3.60. Compute the dividend in each year under Lintner's model.
6. A firm with 40 million shares at $90 announces a 3-for-2 split. (a) Compute the new share count and price. (b) Instead of the split, it declares a 5% stock dividend when the price is $60 and 60 million shares are outstanding. Compute new shares, the amount transferred from retained earnings, and the expected ex-price.
7. A firm targets a capital structure with 40 percent debt (D/V = 0.40) and net income of $400 million. (a) Under a residual policy with capital spending of $540 million, compute the dividend and payout ratio. (b) If capital spending rises to $700 million, compute the dividend or the external equity needed.
8. A firm expects EPS of $4.00 next year, ROE of 12%, and has a cost of equity of 11%. Using the constant-growth model, compute the price at payout ratios of 25% and 60%. Interpret the result.

### Answers to Selected Problems

1. Ex-dividend price = $27. Dividends received = 1,000 × $3 = $3,000; shares purchased = 3,000 / 27 = 111.11. Total shares = 1,111.11; value = 1,111.11 × $27 = $30,000, the same as before.
2. (a) $90m / 60m = $1.50 per share. (b) Shares retired = 90 / 36 = 2.5 million; remaining 57.5 million; EPS = 120 / 57.5 = $2.087 (from $2.00). (c) Lost after-tax interest = 90 × 0.04 × 0.75 = $2.7 million; net income = $117.3 million; EPS = 117.3 / 57.5 = $2.04. (d) P/E = 36 / 2.04 = 17.65 (versus 18.0 initially).
3. At intrinsic $45: (2,700 − 90) / 57.5 = $45.39, a gain of $0.39 per continuing share. At intrinsic $30: (1,800 − 90) / 57.5 = $29.74, a loss of $0.26.
4. Price drop = 3.00 × 0.65 / 0.85 = $2.294; ex-dividend price = 60 − 2.294 = $57.71.
5. Year 1 target = 0.5 × 3.00 = 1.50; D_1 = 1.00 + 0.25 × (1.50 − 1.00) = $1.125. Year 2 target = 0.5 × 3.60 = 1.80; D_2 = 1.125 + 0.25 × (1.80 − 1.125) = $1.29375, about $1.29.
6. (a) New shares = 60 million; price = 90 × 40 / 60 = $60. (b) New shares = 3 million; transfer = 3 × $60 = $180 million; ex-price ≈ 60 × 60 / 63 = $57.14.
7. (a) Equity needed = 540 × 0.60 = $324 million; dividend = 400 − 324 = $76 million; payout = 19%. (b) Equity needed = 700 × 0.60 = $420 million; shortfall = $20 million, so the dividend is zero and the firm needs $20 million of external equity (or more debt).
8. Payout 25%: g = 0.12 × 0.75 = 9%; D_1 = 1.00; P = 1.00 / (0.11 − 0.09) = $50.00. Payout 60%: g = 0.12 × 0.40 = 4.8%; D_1 = 2.40; P = 2.40 / (0.11 − 0.048) = $38.71. Because ROE (12%) exceeds the cost of equity (11%), retention creates value and the lower payout gives the higher price.
