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

*Interpretation.* The price falls by 82 percent of the dividend, not 100 percent. If the tax rates were equal, the drop would be $2.00. A drop that is smaller than the dividend is consistent with dividend-taxed investors being the marginal price setters, but the empirical evidence is mixed because transaction costs, short-term traders, and tax-exempt arbitrageurs also influence prices around the ex-date. The key lesson is that an investor in a high bracket does not gain from buying a stock just before the dividend: the tax on the dividend is not offset by a correspondingly large price drop, so he or she is better off waiting.

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

