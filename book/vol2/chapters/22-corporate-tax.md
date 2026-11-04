# Chapter 22: Corporate Tax Strategy and International Tax

## Learning Objectives

After studying this chapter you should be able to:

- Distinguish statutory, marginal, average, effective and cash tax rates, reconcile an effective rate to the statutory rate, and choose the right rate for each financial decision.
- Explain the origin of deferred tax assets and liabilities, compute them from temporary differences, and decide how to treat them in valuation and performance measurement.
- Value interest tax shields and tax loss carryforwards, and explain how limits on interest deductibility, personal taxes and distress costs alter the textbook benefit of debt.
- Describe the main features of international tax systems, the arm's-length principle in transfer pricing, and quantify the effect of transfer prices and repatriation choices on after-tax cash flow.
- Explain, with appropriate caution, the logic of global minimum tax rules and illustrate a simplified top-up tax computation.
- Incorporate taxes correctly into valuation (APV, WACC, NOPAT) and assess the value, and the risks, of tax strategy.

## Opening Vignette

*Illustrative scenario. Brightwater Devices is a fictional company; all figures are invented.*

Brightwater Devices designs and sells diagnostic equipment. It was founded in a high-tax country, which is still home to its headquarters, its engineering team and most of its intellectual property. Over fifteen years it has built a manufacturing plant in a lower-tax country and sales subsidiaries in a dozen markets. Its reported effective tax rate has drifted down from 27 percent to 17 percent, and the board has been told that this is a point of pride.

Then three things happen in one quarter. The tax authority of one sales country opens an audit, challenging the price at which the manufacturing subsidiary sells devices to the local distributor and arguing that too little profit is left in the country. Brightwater's home government announces a limit on interest deductions at a fixed share of earnings, which will bite on the acquisition debt the company took on two years ago. And the CFO's office learns that several of the countries in which it operates are adopting a minimum tax on large multinational groups, so that the low rate in the manufacturing country may no longer yield the full benefit expected.

The CFO, Priya Venkataraman, discovers that the group's tax planning has been run as a cost-minimization exercise within the tax department, with little connection to valuation, financing or operations. The effective rate is a target in the bonus plan. The deferred tax balances, which are large, have never been examined for what they say about cash. Cash is trapped in subsidiaries because management is uncertain about the tax cost of bringing it home. Nobody can say how much value a one-point change in the effective rate is worth, or how much risk is hiding behind the favourable rate.

Venkataraman decides to rebuild the framework: measure taxes correctly for decisions, understand which parts of the rate are durable and which are fragile, value the tax shields and the risks, and align tax with the operating and financing strategy rather than allowing it to drive them. This chapter walks through that framework.

## 22.1 Tax Rates and Their Proper Use

### 22.1.1 A taxonomy of rates

"The tax rate" is not one number. Using the wrong one is among the most frequent technical errors in corporate finance.

- **Statutory rate:** the headline rate set by law for a jurisdiction (often combined with sub-national taxes to give a combined statutory rate).
- **Marginal rate:** the tax rate on the next unit of taxable income, including all layers of tax (national, regional, any surtaxes) and taking into account whether the firm actually pays tax at the margin (a firm with large losses has a marginal rate near zero today).
- **Average (book) effective rate:** total income tax expense (current plus deferred) divided by pre-tax accounting income.
- **Cash tax rate:** income taxes actually paid in the period divided by pre-tax income (or operating income). It differs from the effective rate by the change in deferred taxes and timing of payments.
- **Operating tax rate:** the rate applied to operating profit when computing NOPAT, which strips out the effect of interest and non-operating items.

The right rate depends on the question. For evaluating an incremental project in a jurisdiction where the firm is profitable, use the *marginal* rate in that jurisdiction, because the project's taxes will be the extra tax paid. For valuing the firm's operations, use the expected *cash operating* tax rate on operating profit over time (which may rise towards the marginal rate as tax credits expire or loss carryforwards are used). For valuing the interest tax shield, use the marginal rate at which interest is deducted, subject to limitations on deductibility. For comparing performance across years, the effective rate is informative but it is the noisiest of all.

> **Common mistake.** Applying a low effective rate (driven by one-time credits, valuation allowance releases or a favorable mix) to the terminal value of a business. The effective rate in the terminal year should converge to the marginal rate unless there is a structural, durable reason for it to remain low.

### 22.1.2 Reconciling statutory and effective rates

Financial statements include a rate reconciliation showing how the statutory rate is transformed into the effective rate. It is one of the best sources of insight into the quality of the rate. Items fall into groups:

- **Permanent differences** that never reverse: non-deductible expenses (certain fines, entertainment, a portion of compensation), tax-exempt income, and the effect of different rates abroad.
- **Credits and incentives:** R&D credits, investment incentives, tax holidays.
- **Changes in uncertain tax positions and valuation allowances,** which are accounting judgments about the likelihood of obtaining or preserving a benefit.
- **One-time items:** effects of tax law changes, settlements of audits.

An analyst or CFO should ask of each item: is it recurring or not, is it tied to real operations or just structure, and is it at risk of change in law or interpretation?

**Example 22.1 – Reconciling the rate and finding the right operating tax rate.** Brightwater reports EBIT of 550 and interest expense of 50, giving pre-tax income of 500 (millions). The combined statutory rate is 25 percent. Items affecting tax expense: the lower rate on foreign income reduces tax by 20; R&D credits reduce it by 10; non-deductible expenses increase it by 8; an increase in the valuation allowance on deferred tax assets increases it by 2. Current tax expense is 95 and deferred tax expense is 10.

*Step 1 – statutory tax.* 500 × 25% = 125.

*Step 2 – reconciliation.* 125 − 20 − 10 + 8 + 2 = 105. Check: current + deferred = 95 + 10 = 105 ✓.

*Step 3 – rates.* Effective rate = 105 / 500 = 21.0 percent. Cash tax rate = 95 / 500 = 19.0 percent (taxes actually due for the year; this ignores timing of payment).

*Step 4 – operating tax rate for NOPAT.* The firm's tax expense reflects the shield on interest: 50 × 25% = 12.5. Taxes on operating profit as if unlevered = 105 + 12.5 = 117.5, a rate of 117.5 / 550 = 21.4 percent. To convert to a cash basis, subtract the increase in the deferred tax liability (10), since that portion of the expense was not paid: cash operating taxes = 117.5 − 10 = 107.5, a rate of 107.5 / 550 = 19.5 percent. NOPAT on a cash-tax basis = 550 − 107.5 = 442.5.

*Step 5 – what is durable?* Of the 20-point difference in tax (125 − 105), the foreign rate differential (−20) is structural but exposed to minimum-tax rules and audit risk; the R&D credit (−10) is tied to operations but depends on legislation; the non-deductible items (+8) recur; and the valuation allowance (+2) is an accounting judgment. A sustainable operating rate for forecasting beyond the near term might therefore be between 21 percent and 25 percent depending on assumptions about the first two items, not the 19.5 percent shown on a cash basis today.

*Interpretation.* The distinction between 19.5 percent and 25 percent is worth 5.5 percentage points on a taxable base of 550: about 30 per year. Capitalized at a WACC less growth of 6 percent, that is about 500 of enterprise value. The tax rate used in forecasting is therefore a major valuation assumption and should be defended like any other.

## 22.2 Deferred Taxes

### 22.2.1 Temporary differences

Deferred taxes arise because the timing of recognizing revenues and expenses differs between the tax return and the financial statements. Under the balance-sheet liability method (IAS 12 under IFRS and ASC 740 under US GAAP follow the same basic approach with differences in detail), a *temporary difference* is the difference between the carrying amount of an asset or liability in the financial statements and its tax base. A taxable temporary difference gives rise to a **deferred tax liability (DTL)**: the firm will pay more tax in the future when the difference reverses. A deductible temporary difference gives rise to a **deferred tax asset (DTA)**: the firm will pay less in the future, provided it expects to have taxable profit to use it. Tax loss carryforwards and unused credits also generate DTAs.

Typical sources of DTLs: accelerated tax depreciation relative to book depreciation; capitalized development costs deducted for tax when paid; unrealized gains recognized in accounts but taxed on realization; fair-value step-ups in acquisitions that are not recognized for tax. Typical sources of DTAs: warranty and pension provisions deductible only when paid; impairments not yet deductible; deferred revenue taxed when received; tax losses.

DTAs are recognized only to the extent that realization is probable (IFRS) or more likely than not (US GAAP); where this is not the case, a **valuation allowance** (or non-recognition) reduces the asset. Releasing such an allowance when profitability improves produces a one-time reduction in tax expense that is not a part of recurring earnings power.

### 22.2.2 The cash effect of deferral

A DTL is not an ordinary debt. It is a liability only if the timing difference will actually reverse, and for a growing firm that keeps investing it may never reverse in aggregate: each year's new accelerated deductions offset the reversal of old ones. Yet the *time value* of the deferral is real: paying tax later rather than sooner is an interest-free loan from the government. Valuation should capture this by using cash taxes in the forecast, not book taxes.

**Example 22.2 – Accelerated depreciation and the deferred tax liability.** Brightwater buys equipment for 1,000 (millions). Book depreciation is straight-line over five years: 200 a year. For tax, depreciation is accelerated: 400, 300, 200, 100 and 0 in years 1 to 5. The tax rate is 25 percent and the discount rate is 9 percent.

*Step 1 – cumulative temporary difference (tax depreciation minus book depreciation, cumulative).* Year 1: 400 − 200 = 200. Year 2: 200 + (300 − 200) = 300. Year 3: 300 + (200 − 200) = 300. Year 4: 300 + (100 − 200) = 200. Year 5: 200 + (0 − 200) = 0.

*Step 2 – DTL at 25 percent.* Year 1: 50. Year 2: 75. Year 3: 75. Year 4: 50. Year 5: 0.

*Step 3 – annual deferred tax expense (change in DTL).* Year 1: +50; Year 2: +25; Year 3: 0; Year 4: −25; Year 5: −50. The total over five years is zero: the deferral is purely a matter of timing.

*Step 4 – value of the deferral.* The present value of the tax saved on tax depreciation is Σ 25% × tax dep_t / 1.09^t = 0.25 × (400/1.09 + 300/1.09² + 200/1.09³ + 100/1.09⁴) = 0.25 × (366.97 + 252.50 + 154.44 + 70.84) = 0.25 × 844.75 = 211.19. The present value on the straight-line schedule is 0.25 × 200 × (1/1.09 + 1/1.09² + 1/1.09³ + 1/1.09⁴ + 1/1.09⁵) = 50 × 3.8897 = 194.48. The value of acceleration is 211.19 − 194.48 = 16.71, 1.7 percent of the asset cost.

*Interpretation.* The DTL peaks at 75 and then reverses, and the benefit of deferral is 16.7 in present value. If the firm keeps buying equipment every year, the aggregate DTL on the balance sheet stays positive and growing, which is why analysts debate whether to treat it as debt, as equity or to ignore it. A practical convention in valuation: include deferred taxes in cash taxes in the free cash flow forecast, so that the benefit is counted once; do not additionally treat the balance-sheet DTL as equity or deduct it as debt, unless the firm is expected to stop investing.

### 22.2.3 Treatment in valuation and measures

Three consistent treatments exist. (1) *Cash-tax FCF approach:* forecast cash operating taxes (including the effect of deferral) and exclude the DTL from the debt-like items in the bridge from enterprise value to equity value. (2) *Book-tax approach:* forecast taxes at the book effective rate and treat the DTL as a liability to be settled at its present value, which requires an assumed reversal pattern. (3) *Equity-equivalent approach in EVA:* add the DTL to invested capital as quasi-equity and use cash taxes in NOPAT (as in Chapter 21). The error to avoid is mixing: using cash taxes in NOPAT *and* deducting the DTL as debt double-counts the deferral. DTAs deserve skepticism: a DTA from a tax loss is only as valuable as the probability and timing of future taxable profits (see Section 22.2.4).

### 22.2.4 Tax loss carryforwards

Net operating losses (NOLs) can usually be carried forward to offset future taxable profits, subject to rules that may limit the annual amount used, the number of years, or the use after an ownership change. Their value is the present value of tax savings, which depends on when profits arise.

**Example 22.3 – Valuing an NOL.** A company has a tax loss carryforward of 300. Expected taxable income before NOL use over the next four years is 50, 80, 120 and 150. The tax rate is 25 percent and the discount rate is 9 percent. (Assume no annual limitation.)

*Step 1 – usage.* Year 1: use 50 (remaining 250). Year 2: use 80 (remaining 170). Year 3: use 120 (remaining 50). Year 4: use 50 (remaining 0), leaving 100 of income taxable.

*Step 2 – annual tax saving.* 50 × 25% = 12.5; 80 × 25% = 20.0; 120 × 25% = 30.0; 50 × 25% = 12.5.

*Step 3 – present value.* 12.5/1.09 + 20/1.09² + 30/1.09³ + 12.5/1.09⁴ = 11.47 + 16.83 + 23.17 + 8.86 = 60.32.

*Step 4 – compare with face.* The undiscounted value is 300 × 25% = 75. The NOL is worth 60.32, or about 80 percent of face, because of timing. If profits were expected to arrive more slowly or the discount rate were higher, the percentage would fall; if an ownership-change rule capped annual use, the value would fall further and could approach zero if profits never come.

*Interpretation.* NOLs should be valued by scenario, and typically discounted at a rate that reflects the risk of the underlying taxable income, which is higher than the cost of debt. Acquirers who pay full face value for NOLs usually overpay, because the NOL is subject to restrictions after a change of control and to the target's own profitability.

## 22.3 Tax Shields and Capital Structure

### 22.3.1 The interest tax shield

Interest is generally tax deductible while dividends are not, so debt financing reduces the total tax paid by the firm and its investors' claims together. Volume 1, Chapter 15 introduced the Modigliani–Miller proposition with corporate taxes: for permanent debt D at marginal tax rate t, the value of the levered firm is

```
V_L = V_U + t × D
```

where t × D is the present value of the tax shield when the shield is discounted at the cost of debt (appropriate when the debt amount is fixed and the shield is as certain as the debt's interest). If the firm instead maintains a constant leverage ratio, the shield's riskiness is more like that of the firm's assets, and a higher discount rate (such as the unlevered cost of equity) is appropriate, which lowers the value of the shield. The choice of assumption matters and should be explicit.

**Example 22.4 – Value of the shield under different assumptions.** Brightwater has 800 of debt at a 6 percent interest rate, and a marginal tax rate of 25 percent.

*Step 1 – annual shield.* Interest = 800 × 6% = 48; shield = 48 × 25% = 12.

*Step 2 – permanent debt.* PV = 12 / 0.06 = 200, equal to t × D = 0.25 × 800 = 200 ✓.

*Step 3 – five-year bullet loan, repaid at the end of year 5.* The shield is 12 for five years: PV = 12 × [1 − 1.06⁻⁵] / 0.06 = 12 × 4.2124 = 50.55.

*Step 4 – debt that grows at 2 percent a year,* with shields discounted at an unlevered cost of 9 percent: PV = 12 / (0.09 − 0.02) = 171.4 for the first-year shield of 12. If the shield is still discounted at 6 percent, 12 / (0.06 − 0.02) = 300; the difference between 171.4 and 300 shows how sensitive the result is to the discount rate.

*Interpretation.* The same debt gives a shield worth anywhere from about 50 (temporary) to 300 (growing and certain). The permanent-debt textbook figure of 200 is an intermediate case. The shield has value only as long as the firm has taxable profit to deduct against and the debt is actually maintained.

### 22.3.2 What limits the benefit of debt

Several forces lower the net tax advantage of debt.

**Personal taxes.** Miller's (1977) analysis recognized that investors pay tax on interest income and on equity income at possibly different rates. With a corporate rate t_c, a personal tax rate on equity income t_e and a personal tax rate on interest t_d, the gain from leverage per unit of debt is

```
Gain = [1 − (1 − t_c)(1 − t_e) / (1 − t_d)] × D
```

With t_c = 25 percent, t_e = 15 percent and t_d = 30 percent, the term (0.75 × 0.85) / 0.70 = 0.9107, and the gain is 1 − 0.9107 = 8.9 percent of D, much lower than the 25 percent corporate shield alone. Where equity income is lightly taxed relative to interest, the net advantage of debt shrinks, and in extreme cases disappears. The empirical size of the personal-tax offset is debated and varies by country and investor type, but the direction is clear.

**Limits on deductibility.** Many countries restrict the deduction of net interest to a fixed share of earnings (a rule often of the order of 30 percent of a defined earnings measure such as EBITDA or EBIT, though the exact percentage, base and exceptions vary by jurisdiction and change over time; check current local rules). Disallowed interest may be carried forward but may not be deductible at the margin. Transfer-pricing and "thin capitalization" rules also limit intra-group interest. Highly leveraged buyouts and infrastructure-style structures are most affected.

**Non-debt tax shields.** Depreciation, credits and losses reduce taxable income and thereby reduce the value of interest deductions at the margin: a firm with large non-debt shields may have a low or zero marginal rate for debt, as DeAngelo and Masulis pointed out.

**Financial distress and agency costs.** Debt raises the probability of financial distress, with direct and indirect costs, and the trade-off theory sets the marginal tax benefit against the marginal expected distress cost (Volume 1, Chapter 15).

**Example 22.5 – An interest limitation rule.** Brightwater's EBITDA is 1,000 and its interest expense is 400. A rule allows net interest deduction up to 30 percent of EBITDA. The tax rate is 25 percent.

*Step 1 – deductible cap.* 0.30 × 1,000 = 300.

*Step 2 – disallowed interest.* 400 − 300 = 100.

*Step 3 – shield realized.* Allowed: 300 × 25% = 75. Unconstrained: 400 × 25% = 100. Lost current shield: 25.

*Step 4 – marginal view.* On the margin, an extra 1 of interest saves no tax this year. The *effective marginal shield rate* on additional debt is zero until EBITDA rises or the rules change, apart from the carried-forward disallowed amount (valued at its probability and timing of use). The cost of debt for the next financing decision is therefore the pre-tax rate, not the after-tax rate: 6 percent, not 4.5 percent.

*Interpretation.* The after-tax cost of debt in the WACC formula, Kd(1 − t), assumes the full marginal shield is available. For a constrained company it overstates the benefit of debt, understates WACC, and encourages too much leverage. In practice, an analyst should test whether the cap binds, in each forecast year, and adjust either the shield or the tax rate on interest.

### 22.3.3 Managerial implications for financing

Debt policy should be informed by tax but not driven by it. Check marginal rates at the borrower: debt should be placed in the entity that has taxable income against which to deduct it and in the jurisdiction with the highest effective marginal rate, subject to interest-limitation and thin-capitalization rules. Consider the stability of the shield: governments change rules, and a tax-driven structure that exceeds the firm's operating debt capacity often fails in the first downturn. And avoid the "free lunch" illusion: tax savings on debt are real but modest relative to the swings in value from operating decisions.

## 22.4 International Tax Structure and Transfer Pricing

### 22.4.1 How countries tax cross-border income

A multinational group is a collection of legal entities in different jurisdictions, each subject to local tax law. Several concepts organize the landscape.

**Residence and source.** A country may tax the worldwide income of its residents (residence-based taxation) and the income arising within its borders, whoever earns it (source-based taxation). Overlap creates the risk of double taxation, which countries mitigate through unilateral relief and bilateral tax treaties.

**Worldwide versus territorial systems.** Under a *worldwide* system the home country taxes foreign profits of its resident companies, usually allowing a credit for foreign taxes paid, so that the total tax rate on foreign income is at least the home rate when the profit is brought home. Under a *territorial* (participation exemption) system the home country exempts most foreign-source dividends or profits, so that the foreign rate largely determines the final burden. Real systems are hybrids: many "territorial" systems include anti-abuse rules and tax on passive or low-taxed income earned by controlled foreign subsidiaries, and many "worldwide" systems allow deferral until repatriation. Features and rates change frequently, so for decisions one must consult current law in each jurisdiction.

**Withholding taxes.** Source countries often withhold tax on dividends, interest and royalties paid to non-residents, at rates reduced by treaty. Withholding taxes are a real cost of moving profit through the group and a driver of holding-company structures.

**Foreign tax credits.** A credit reduces home tax by foreign tax paid, usually limited to the home tax attributable to the foreign income. Excess credits (where foreign tax exceeds the limit) cannot ordinarily be refunded and may be carried over or lost.

**Permanent establishment and nexus.** A foreign business is generally taxed on income attributable to a fixed place of business or similar presence. Digital and remote business models have put pressure on this concept, and some countries have introduced additional taxes on digital activities.

### 22.4.2 Transfer pricing: the arm's-length principle

Intercompany transactions (sale of goods, services, loans, licences of IP) must be priced for tax. Because the group can shift profit by changing prices, tax authorities require that prices be consistent with what independent parties would have agreed under comparable circumstances: the **arm's-length principle**, set out in the OECD Transfer Pricing Guidelines and incorporated into most countries' laws. Taxpayers are expected to document the analysis. Common methods include:

| Method | Idea | Typical use |
|---|---|---|
| Comparable uncontrolled price (CUP) | Compare price with that charged between independent parties for the same product | Commodities; licences with close comparables |
| Resale price | Start from the resale price to independent customers and deduct an arm's-length gross margin | Distribution entities |
| Cost plus | Add an arm's-length markup to costs | Contract manufacturing; services |
| Transactional net margin method (TNMM) | Compare the net profit margin of the tested party with that of comparable independent companies | The most widely used for routine entities |
| Profit split | Divide combined profit according to contributions | Highly integrated operations with unique contributions on both sides |

Economic substance is increasingly central: under current guidelines the allocation of returns from intangibles is tied to who performs and controls the functions of developing, enhancing, maintaining, protecting and exploiting them (and bears the associated risk and funding), not merely to legal ownership. A paper owner with no staff and no ability to bear risk tends to earn only a routine return.

### 22.4.3 Quantifying transfer pricing

**Example 22.6 – Transfer pricing and total tax.** Brightwater's home company (country A, tax rate 30 percent) manufactures a device at a cost of 60 per unit and sells it to its foreign distribution subsidiary (country B, rate 12 percent), which incurs selling costs of 15 per unit and sells to external customers at 100. Volume is 1 million units a year.

*Step 1 – effect of the intercompany price.* Let P be the transfer price. Profit in A = (P − 60) × 1m; profit in B = (100 − P − 15) × 1m.
- P = 70: A = 10m, B = 15m. Tax = 0.30 × 10 + 0.12 × 15 = 3.0 + 1.8 = 4.8m.
- P = 80: A = 20m, B = 5m. Tax = 6.0 + 0.6 = 6.6m.
- P = 90: A = 30m, B = −5m. Tax = 9.0 − 0.6 = 8.4m (assuming that B's loss yields a tax benefit, which may be doubtful).

*Step 2 – the arm's-length test using TNMM.* Suppose comparable independent distributors earn an operating margin of 4 to 8 percent of sales, with a median of 6 percent. B's arm's-length profit is therefore 4 to 8 per unit (6 at the median). The corresponding transfer price is P = 100 − 15 − margin: 81 (at 4 percent), 79 (at 6 percent) or 77 (at 8 percent). At the median, A earns (79 − 60) × 1m = 19m and B earns 6m. Tax = 0.30 × 19 + 0.12 × 6 = 5.70 + 0.72 = 6.42m.

*Step 3 – the cost of aggressive pricing.* At P = 70, B earns 15m (15 percent of sales), far above the comparables' range, and A earns less than the arm's-length level. The nominal tax saving relative to the median arm's-length price is 6.42 − 4.80 = 1.62m a year. Suppose country A's authority adjusts the price to 79: A's profit becomes 19m and its tax 5.70m. If B's authority does not grant a corresponding adjustment, B's profit of 15m remains taxed at 12 percent: 1.80m. Total tax = 5.70 + 1.80 = 7.50m, which exceeds the arm's-length figure of 6.42m by 1.08m a year, before interest and penalties.

*Interpretation.* Pricing outside the arm's-length range yields a small expected saving in the best case and creates a double-taxation exposure when authorities disagree. The expected value of an aggressive position must be calculated net of the probability of challenge, double taxation, interest and penalties, and reputation costs. Many groups use advance pricing agreements (APAs) with the relevant authorities to obtain certainty, and mutual agreement procedures under tax treaties to resolve double taxation when it arises.

### 22.4.4 Operating strategy and tax

A durable approach is to locate real activities where they make economic sense, with tax as one of the inputs: access to talent, proximity to customers, supply chain costs, political risk. Tax-driven structures that lack economic substance are fragile: they are the ones that anti-avoidance rules, the OECD's base erosion and profit shifting (BEPS) work, and minimum tax rules are designed to counter. A good test is whether the structure would be adopted if the tax benefit were zero. If not, assume the benefit is temporary and price in a risk of loss.

## 22.5 Repatriation and Financing Foreign Operations

### 22.5.1 The repatriation decision

Cash earned by foreign subsidiaries can be returned to the parent through dividends, interest on intercompany loans, royalties and service fees, or capital reductions. The tax cost depends on the home system, source-country withholding taxes and any residual home-country tax. Where there is a significant cost to bringing cash home and no immediate need for it, groups have accumulated cash abroad. This "trapped cash" matters for valuation (the cash is worth less than its book amount if the repatriation tax is material) and for capital allocation (cash that cannot be deployed at home may fund foreign acquisitions that would not otherwise meet the hurdle rate: an example of tax-induced distortion).

Under IFRS and US GAAP, a deferred tax liability is generally recognized on unremitted earnings of subsidiaries unless the parent controls the timing of the reversal and it is probable that the difference will not reverse in the foreseeable future (US GAAP uses the phrase "indefinitely reinvested" for the equivalent exception). The disclosure of unrecognized amounts is useful for analysis.

**Example 22.7 – Repatriation under different systems.** A foreign subsidiary earns 100 of pre-tax profit. The local tax rate is 12 percent. Dividends are subject to 5 percent withholding. The home rate is 25 percent, and the home country grants a credit for foreign tax paid, including the withholding tax and the underlying local tax, limited to the home tax on the foreign income.

*Step 1 – local tax and distributable profit.* Local tax = 12; profit after local tax = 88.

*Step 2 – withholding.* Dividend of 88 incurs 5% × 88 = 4.4 of withholding. Cash received by the parent before home tax = 83.6.

*Step 3 – home tax with credit (worldwide system).* Home tax on grossed-up income of 100 = 25. Credit = 12 (underlying) + 4.4 (withholding) = 16.4. Residual home tax = 25 − 16.4 = 8.6. Cash retained = 83.6 − 8.6 = 75.0. Total tax = 12 + 4.4 + 8.6 = 25.0 (25 percent, the home rate).

*Step 4 – territorial system with full exemption of foreign dividends.* Residual home tax = 0. Cash retained = 83.6. Total tax = 12 + 4.4 = 16.4 percent of the original pre-tax profit.

*Step 5 – high-tax subsidiary under the worldwide system.* If the local rate were 35 percent, profit after local tax would be 65, withholding 3.25, and the foreign tax of 38.25 exceeds the home tax of 25. The credit is limited to 25, so there is no residual home tax; the excess of 13.25 is a credit carried over, if permitted, or lost. Cash retained = 65 − 3.25 = 61.75; total tax = 38.25 percent.

*Step 6 – the value of deferral (worldwide system, low-tax subsidiary).* If the dividend is deferred for five years, the residual home tax of 8.6 is also deferred. At a 9 percent discount rate its present value is 8.6 / 1.09⁵ = 8.6 / 1.5386 = 5.59, so deferral reduces the effective residual tax by 8.6 − 5.59 = 3.01 per 100 of pre-tax profit, plus whatever the subsidiary earns on the retained cash.

*Interpretation.* Under a worldwide system with credits, the final tax rate on repatriated profit equals the higher of the home and foreign rates, so the low foreign rate is a benefit only for as long as profits remain abroad, and its value is therefore the value of deferral. Under a territorial system the foreign rate governs and there is no tax cost of repatriation beyond withholding. For valuation, the right approach is to apply the expected *total* tax on the profit in each jurisdiction (including the expected residual cost of repatriation weighted by when and whether it will occur) and to value trapped cash at its expected after-tax amount.

### 22.5.2 Intra-group financing

Groups fund subsidiaries through equity and intercompany loans. Interest payments reduce the borrower's taxable profit and are taxable to the lender, subject to withholding, so loans from low-tax to high-tax entities shift profit. The tools used by tax authorities include the arm's-length test on the interest rate and amount of debt, thin-capitalization rules, interest limitation rules (Section 22.3.2) and anti-hybrid rules that deny deductions for payments that do not produce a corresponding income inclusion. Treasury should design cash pooling and internal funding for liquidity first and tax second, since policies that are effective on paper but fragile under audit create more risk than value.

### 22.5.3 Currency, hedging and tax

Foreign-exchange gains and losses, and hedging results, may be taxed in a different period or at a different rate than the underlying exposures. A hedge of a net investment in a foreign subsidiary can produce gains in the parent's taxable income while the offsetting translation loss lies in equity and is not currently deductible. Analysis of hedge programs should therefore be on an after-tax basis (see the discussion of derivatives in Volume 1 and the risk-management chapters of this volume).

## 22.6 Global Minimum Tax: Concepts

The following describes a rapidly evolving area. The rules and their local implementation are complex and change often. This section explains the logic and gives an illustrative calculation; it does not substitute for current law or professional advice, and the details (rates, carve-outs, transitional relief, status in each country) should be verified for any specific decision.

### 22.6.1 Motivation and architecture

For decades, countries competed on corporate tax rates and incentives, and multinational groups arranged profits to arise in low-tax jurisdictions. In response, a large group of countries agreed, under the OECD/G20 Inclusive Framework, on a two-pillar approach. Pillar One concerns the allocation of a part of the profits of the very largest and most profitable groups to market jurisdictions; its implementation has been uncertain. Pillar Two, commonly called the **global minimum tax** or GloBE rules (Global Anti-Base Erosion), is designed to ensure that large multinational groups, above a revenue threshold of the order of 750 million euros in consolidated revenue, pay a minimum effective tax rate of 15 percent in each jurisdiction in which they operate.

The key mechanism is the computation of a jurisdictional effective tax rate (ETR): covered taxes paid or accrued by the group's entities in a jurisdiction divided by the GloBE income there (a measure derived from financial accounting income with specified adjustments). If the ETR is below 15 percent, a **top-up tax** is due, equal to the shortfall in percentage points times the excess profit, where excess profit is the GloBE income less a **substance-based income exclusion** (a formulaic return on payroll and tangible assets, intended to protect genuine activity). The top-up can be collected by the jurisdiction itself through a *qualified domestic minimum top-up tax* (which allows the local government to capture the revenue rather than leave it to another country) or by other jurisdictions through the *income inclusion rule* (applied by the parent's country) and an *undertaxed profits rule* as a backstop. Transitional safe harbors and simplifications exist for the early years.

### 22.6.2 An illustrative calculation

**Example 22.8 – A simplified top-up tax.** A group's manufacturing subsidiaries in one jurisdiction have GloBE income of 200 and covered taxes of 14. The minimum rate is 15 percent. The group's payroll and tangible assets in the jurisdiction give a substance-based income exclusion of 30 (for illustration: 5 percent of a carve-out base of 600; actual percentages and transitional rules differ).

*Step 1 – jurisdictional ETR.* 14 / 200 = 7.0 percent.

*Step 2 – top-up percentage.* 15% − 7.0% = 8.0 percentage points.

*Step 3 – excess profit.* 200 − 30 = 170.

*Step 4 – top-up tax.* 170 × 8.0% = 13.6. (Without the exclusion it would be 200 × 8.0% = 16.0.)

*Step 5 – total tax.* 14 + 13.6 = 27.6, or 13.8 percent of GloBE income of 200. The effective rate is still below 15 percent because of the exclusion: the carve-out effectively exempts 30 of income from top-up.

*Interpretation.* The jurisdiction's rate advantage over 15 percent is lost; in this example the group pays 13.6 in additional tax to some government. If the local jurisdiction had introduced a qualified domestic top-up tax, the 13.6 would be paid locally and the other countries would not claim it. The group's incentive therefore changes from "where is the lowest rate?" to "where do we have real activity that earns the substance-based exclusion, and who collects the top-up?"

### 22.6.3 Strategic implications

Three broad implications follow, stated cautiously. First, planning that relies on a low rate with little substance loses value for groups within the scope of the rules; the remaining benefit of low-tax locations depends on real activity (payroll and assets), on credits whose treatment within the rules is favorable (some refundable credits are treated more favorably than others), and on the allocation of top-up revenue. Second, a corporate tax rate below 15 percent is no longer a reliable tool for a government to attract investment from in-scope groups, which will likely shift competition towards other instruments, such as investment-related incentives. Third, compliance burdens increase significantly: groups need data processes to compute jurisdictional ETRs. A prudent valuation approach is to model scenarios for a group's tax rate, with and without the minimum tax, and to treat any residual rate advantage below 15 percent as at risk.

## 22.7 Tax and Valuation

### 22.7.1 Where taxes enter the valuation

Taxes appear in a valuation in four places: in the cash taxes deducted to compute free cash flow (the operating tax rate and deferral pattern), in the cost of capital (through the after-tax cost of debt), as the explicit value of financing-related shields (in APV), and in specific tax assets such as NOLs. The principal risk is double counting. If WACC is computed with an after-tax cost of debt, the interest tax shield is already in the discount rate, so free cash flow must be computed from taxes on operating profit *without* the interest shield (NOPAT-based FCF). If instead the model discounts at the unlevered cost of capital (APV), the shield must be added separately.

### 22.7.2 Adjusted present value with taxes

The APV approach separates operating value from financing side effects, making each tax effect visible and allowing different assumptions for each (Volume 1, Chapter 21 on enterprise valuation). It is particularly useful when the capital structure changes over time, as in leveraged transactions, or when interest limitations make the shield uncertain.

**Example 22.9 – APV with an interest tax shield.** Brightwater's unlevered free cash flows are 100, 110, 121 and 133.1 in years 1 to 4. After year 4 they grow at 3 percent a year. The unlevered cost of capital is 9 percent. The firm will maintain permanent debt of 600 at 6 percent. The marginal tax rate is 25 percent.

*Step 1 – terminal value at year 4.* TV = 133.1 × 1.03 / (0.09 − 0.03) = 137.093 / 0.06 = 2,284.88.

*Step 2 – PV of explicit flows.* 100/1.09 + 110/1.09² + 121/1.09³ + 133.1/1.09⁴ = 91.74 + 92.59 + 93.44 + 94.29 = 372.06.

*Step 3 – PV of terminal value.* 2,284.88 / 1.09⁴ = 2,284.88 / 1.41158 = 1,618.66.

*Step 4 – unlevered value.* V_U = 372.06 + 1,618.66 = 1,990.72.

*Step 5 – tax shield.* Annual interest = 600 × 6% = 36; shield = 36 × 25% = 9. PV of a permanent shield discounted at the cost of debt = 9 / 0.06 = 150 (= t × D = 0.25 × 600).

*Step 6 – levered value.* V_L = 1,990.72 + 150 = 2,140.72. Equity value = 2,140.72 − 600 = 1,540.72.

*Step 7 – sensitivity: binding interest limitation.* Suppose only 60 percent of the interest is deductible because of a limitation rule. Shield = 0.60 × 150 = 90, so V_L = 1,990.72 + 90 = 2,080.72 and equity = 1,480.72. The loss relative to the base is 60, or 3.9 percent of equity value.

*Interpretation.* The shield is 7.0 percent of the levered value in the base case; its size is no trivial matter but it is dwarfed by the operating value. This is why taxes should be modeled carefully, but not made the centerpiece of strategy. Note too that the shield must be discounted at a rate consistent with its risk: using 6 percent assumes a fixed, permanent amount of debt; for debt that tracks firm value, a rate closer to the unlevered cost of capital is appropriate (Example 22.4).

### 22.7.3 The sensitivity of value to the tax rate

Because tax is a cost on a perpetual stream, value is highly sensitive to the long-run rate. A change in the statutory rate affects value through cash flow directly and, for levered firms, through the shield, which partially offsets.

**Example 22.10 – A change in the tax rate.** An unlevered business has EBIT of 133.33 (constant growth of 3 percent in all years), a discount rate of 9 percent and a 25 percent tax rate, so that next year's NOPAT is 100. Assume no net investment cost beyond what is embedded in free cash flow equal to NOPAT (that is, growth is costless, a simplification to isolate the tax effect).

*Base:* V = 100 / (0.09 − 0.03) = 1,666.7.

*Rate rises to 28 percent:* NOPAT = 133.33 × 0.72 = 96.0; V = 96.0 / 0.06 = 1,600.0. Change: −66.7, or −4.0 percent.

*Rate falls to 21 percent:* NOPAT = 133.33 × 0.79 = 105.33; V = 105.33 / 0.06 = 1,755.6. Change: +88.9, or +5.3 percent.

*Interpretation.* A three-point rise costs 4.0 percent of value and a four-point cut adds 5.3 percent; the asymmetry in percentages comes from the base. For a firm with a large share of value in the terminal period, assumptions about long-run tax rates deserve scrutiny similar to assumptions about the terminal growth rate. For a levered firm the net effect is smaller because a higher rate raises the value of the interest shield: the combined effect depends on the leverage and the deductibility of interest.

### 22.7.4 Tax in M&A

Taxes affect the structure and price of acquisitions. In an asset purchase (or a share purchase with a tax election to treat it as an asset purchase), the buyer obtains a stepped-up tax basis in the assets and can amortize goodwill and other assets for tax, which has value; the seller may pay more tax. In a share purchase without a step-up, the buyer inherits the old tax basis and any deferred taxes and exposure; the sale may be taxed at lower rates for the seller. Acquired tax attributes (NOLs, credits) face restrictions. The difference in structure shifts value between the parties and should be modeled explicitly as part of the deal valuation (Volume 1, Chapter 22). Buyers should also diligence uncertain tax positions, transfer-pricing exposures and withholding obligations that transfer with the company, and use indemnities or price adjustments.

### 22.7.5 Uncertain tax positions and tax risk

Many corporate tax positions are interpretations of ambiguous law. Under both IFRS and US GAAP, firms must assess whether an uncertain tax treatment is likely to be accepted and recognize a provision or reduce the benefit when it is not (IFRIC 23 under IFRS; ASC 740 uncertain tax position guidance in the US). These provisions are estimates and the disclosures (reserves, the range of reasonably possible changes) are valuable to analysts. As a valuation matter, a low effective tax rate backed by a thick layer of uncertain positions has a different quality from one backed by statutory credits.

## 22.8 Governance of Tax Strategy

### 22.8.1 Tax as one stakeholder claim among several

Tax is a real cost, and reducing it within the law is a legitimate objective. But it is not costless to pursue: aggressive positions produce audits, penalties, reputational cost, and sometimes political backlash. Increasingly, investors, customers and regulators view tax conduct as part of corporate responsibility, and some jurisdictions require public country-by-country reporting. A sensible governance position is to make the board accountable for a tax policy that states the group's risk appetite, its principles on structures without substance, its approach to transparency, and the relationship with tax authorities (cooperative compliance programs, advance rulings).

### 22.8.2 Aligning incentives

Setting an effective tax rate target in executive compensation encourages the pursuit of rate over value: a lower rate achieved through a structure that costs more in operations, or through positions that later reverse, is a net loss. Better measures are after-tax cash flow, the *sustainable* rate, the volatility and quality of the rate, the amount of uncertain positions, and the number of disputes. Place the tax function in the valuation conversation: it should be able to say how much value is at stake in any proposed restructuring, in present-value terms and net of risk, as well as in the next year's effective rate.

### 22.8.3 A practical checklist

When evaluating a tax-driven proposal, it helps to ask: Is there economic substance, and would we do this without the tax benefit? What is the present value of the benefit, net of costs of implementation, ongoing compliance and the probability-weighted cost of challenge? Is the benefit durable in light of minimum tax rules, interest limitation rules and anti-avoidance rules? Does it constrain operating flexibility, cash access or financing? What does it do to the effective rate *quality* and to transparency? And finally: how would we explain it, in public, to a skeptical reader?

## Case Study: Tax Strategy at Coralis Instruments

*Illustrative case. Coralis Instruments is a fictional company; all figures are invented.*

Coralis Instruments makes precision measurement devices. The company is headquartered in Country H (combined statutory rate 28 percent), with a manufacturing and IP-holding subsidiary in Country L (statutory rate 9 percent) and sales subsidiaries in five other countries. Over the past decade the group's effective tax rate fell from 27 percent to 14 percent. Group revenue is 4.2 billion, comfortably above the threshold for global minimum tax rules, and Country L has announced that it will introduce a domestic minimum top-up tax at 15 percent from next year.

The manufacturing subsidiary in Country L earns profit before tax of 600 million, taxed at an effective 9 percent. Its payroll and tangible assets are modest: the company transferred ownership of the key patents to Country L ten years ago, but most R&D staff remain in Country H and the senior engineers who decide the research agenda are there. Local employees number about 300. An illustrative substance-based exclusion for the subsidiary is 45 million. The tax authority in Country H has opened an inquiry into the royalty-free licensing of the patents to the Country L entity and the price at which Country L sells to the distribution subsidiaries.

Meanwhile Coralis holds 1.8 billion in cash abroad. The group's treasurer says that bringing it home would cost 8 percent in residual tax and withholding. The CFO, Lena Marchetti, wants the cash for a share repurchase, and the CEO prefers an acquisition in Country L's industry cluster, which would provide additional local assets and payroll but is priced richly.

Coralis also has acquisition debt of 2.5 billion at 6.5 percent, giving interest expense of 162.5 million against EBITDA of 900 million in Country H. A limit that allows net interest deductions up to 30 percent of EBITDA applies in Country H starting next year.

The finance team is asked by the board to assess the situation and to recommend a strategy. Its first-pass estimates are as follows. If the transfer-pricing audit in Country H results in a reallocation of 200 million of annual profit from L to H, the group would pay roughly 28 percent less 9 percent, or 19 points, on the shifted profit, plus interest and penalties, with a risk that Country L would not grant a corresponding adjustment. Under minimum tax rules, the top-up on Country L's profit, using the illustrative exclusion above and an ETR of 9 percent, would equal (600 − 45) × (15% − 9%) = 33.3 million a year, if collected by Country L's domestic tax, roughly. The interest limitation does not bind today: the cap is 30 percent of 900, or 270 million, so interest of 162.5 million is fully deductible. But the CFO fears that EBITDA could fall in a downturn, and that further debt would then be constrained.

The board asks whether the 14 percent effective rate should be treated as the base for the five-year plan, whether to pursue the share repurchase or the acquisition, and how the group's tax organization should be governed.

### Discussion Questions

1. Compute the expected top-up tax on Country L's profit in the case and the group's resulting effective rate on that profit. What does the result imply for the long-term sustainable effective tax rate for the group and for the valuation of the business?
2. Estimate the annual tax cost of a successful transfer-pricing challenge by Country H for 200 million of profit, and the additional cost if Country L does not give relief. How would you set a provision or risk-adjust the value of the existing structure?
3. Evaluate the choices between using offshore cash for a share repurchase, the acquisition, or leaving it abroad. What is the after-tax cost of repatriation on 1.8 billion at 8 percent, and how should the tax cost enter the comparison with the acquisition?
4. Does the interest-limitation rule bind today? Under what EBITDA level would it bind with 162.5 million of interest, and how would that affect the group's debt capacity and its after-tax cost of debt?

## Key Takeaways

- Different decisions need different tax rates: marginal for incremental projects and interest shields, cash operating rates for NOPAT and valuation, effective rates for performance analysis with attention to quality.
- The reconciliation of the statutory and effective rates reveals which items are durable and which are temporary; the terminal-year rate should converge to the marginal rate unless a durable reason exists.
- Deferred taxes reflect timing differences; value comes from the time value of deferral and is captured by using cash taxes in free cash flow. Avoid double counting by not also treating the DTL as debt.
- NOLs and other tax attributes are valued as present values of expected tax savings, discounted at a rate reflecting the risk of the taxable income, and discounted for restrictions after ownership changes.
- The interest tax shield is worth t × D only under strong assumptions; personal taxes, interest-limitation rules, non-debt shields and distress costs reduce it, and the shield's discount rate depends on the debt policy.
- Transfer prices must follow the arm's-length principle; pricing outside the range yields small expected savings and exposure to double taxation, penalties and reputational damage.
- Under a worldwide system with credits, the tax on repatriated profit tends to the higher of the home and foreign rates, and the value of a low foreign rate lies largely in deferral; territorial systems shift the burden to the foreign rate and withholding.
- Global minimum tax rules, stated cautiously, aim to ensure a 15 percent effective rate per jurisdiction for large groups, with a substance-based exclusion; planning that depends on low rates without substance is at risk.
- APV makes tax effects explicit and is well suited for changing leverage and uncertain shields; with WACC, make sure the shield is counted once.
- Tax strategy should follow business substance, be evaluated net of risk and costs, and be governed by the board; effective-rate targets in incentive plans can produce value-destroying behavior.

## Review Questions

1. Distinguish the statutory, marginal, effective and cash tax rates. For each of the following decisions, state which rate you would use and why: a new plant, the terminal value of a business, a debt financing, a performance comparison.
2. Why might a firm's effective tax rate be sustainably lower than its statutory rate, and why might it not be?
3. Explain how a deferred tax liability arises from accelerated depreciation, and why a growing firm's aggregate DTL may never reverse.
4. Describe two consistent treatments of deferred taxes in valuation and explain how mixing them leads to double counting.
5. Why are NOLs worth less than their face value multiplied by the tax rate? Name three factors that affect their value.
6. State the MM proposition with corporate taxes. How do personal taxes, interest limitation rules and non-debt tax shields alter the conclusion?
7. What is the arm's-length principle? Describe two transfer pricing methods and the type of transaction each suits.
8. Compare the tax consequences of repatriating foreign profit under a worldwide system with credits and a territorial system. Why does the "trapped cash" phenomenon arise?
9. Explain the logic of a global minimum tax, the role of a substance-based income exclusion, and the reason for a qualified domestic top-up tax.
10. Why can setting an effective-tax-rate target in executive incentives be counterproductive?

## Problems

**Problem 22.1 – Rate reconciliation.** A firm has pre-tax income of 800 and a statutory rate of 25 percent. Lower rates on foreign income reduce tax by 30, credits reduce it by 12 and non-deductible items increase it by 10. Deferred tax expense is 20. Compute total tax expense, the effective rate, current tax and the cash tax rate (current tax divided by pre-tax income).

**Problem 22.2 – Deferred tax.** An asset costs 600. Book depreciation is 200 a year for three years. Tax depreciation is 300, 180 and 120. The tax rate is 30 percent and the discount rate is 8 percent. Compute the cumulative temporary difference and DTL at each year-end, and the present value gain from accelerated tax depreciation.

**Problem 22.3 – Value of shield.** A firm has debt of 500 at 7 percent, with a marginal tax rate of 21 percent. Compute the annual shield, its present value if the debt is permanent (discounted at 7 percent), and its present value if the debt is a ten-year bullet loan.

**Problem 22.4 – Interest limitation.** A firm has EBITDA of 600, interest expense of 250 and a tax rate of 25 percent. Interest deductions are limited to 30 percent of EBITDA. Compute the deductible interest, the disallowed amount and the lost tax shield for the year. What EBITDA is needed for the entire interest to be deductible?

**Problem 22.5 – Transfer pricing.** A parent in a country with a 28 percent rate makes a product at a cost of 40 and sells it to a subsidiary in a country with a 10 percent rate. The subsidiary has selling costs of 10 per unit and resells at 80 to third parties. Volume is 2 million units. Arm's-length profit for the subsidiary under TNMM is 5 percent of sales. (a) Compute the arm's-length transfer price, the profit of each entity and total tax. (b) Compute total tax if the transfer price is 55. (c) What is the apparent tax saving?

**Problem 22.6 – Repatriation.** A subsidiary earns 200 of pre-tax profit, is taxed locally at 15 percent, and pays a dividend subject to 10 percent withholding. The home rate is 25 percent with a credit for foreign tax including the withholding tax. Compute cash retained and total tax under (a) the worldwide system with credit and (b) a territorial exemption.

**Problem 22.7 – Top-up tax.** A jurisdiction has GloBE income of 500 and covered taxes of 40. The minimum rate is 15 percent, and a substance-based income exclusion is 80. Compute the ETR, the top-up percentage, the excess profit, the top-up tax and the total tax rate on income after top-up.

**Problem 22.8 – NOL value.** A firm has an NOL of 400. Taxable income before NOL over the next three years is 100, 150 and 200. The tax rate is 30 percent and the discount rate is 10 percent. Compute the NOL used in each year, the tax savings and the present value of the NOL compared with its undiscounted tax value.

### Answers to Selected Problems

**22.1.** Statutory tax = 800 × 25% = 200. Total tax = 200 − 30 − 12 + 10 = 168; effective rate = 168 / 800 = 21.0 percent. Current tax = 168 − 20 = 148; cash tax rate = 148 / 800 = 18.5 percent.

**22.2.** Cumulative difference: year 1: 300 − 200 = 100; year 2: 100 + (180 − 200) = 80; year 3: 80 + (120 − 200) = 0. DTL at 30 percent: 30, 24, 0. PV of tax on tax-depreciation shield = 0.30 × (300/1.08 + 180/1.08² + 120/1.08³) = 0.30 × 527.36 = 158.21; on book schedule = 0.30 × 200 × 2.5771 = 154.63; gain = 3.58.

**22.3.** Annual shield = 500 × 7% × 21% = 7.35. Permanent: 7.35 / 0.07 = 105.0 (= 0.21 × 500). Ten-year bullet: 7.35 × [1 − 1.07⁻¹⁰] / 0.07 = 7.35 × 7.0236 = 51.62.

**22.4.** Cap = 0.30 × 600 = 180. Disallowed = 250 − 180 = 70. Lost shield = 70 × 25% = 17.5. Full deductibility requires EBITDA ≥ 250 / 0.30 = 833.3.

**22.5.** (a) Subsidiary arm's-length profit = 5% × 80 = 4 per unit; transfer price = 80 − 10 − 4 = 66. Parent profit = (66 − 40) × 2m = 52m; subsidiary profit = 4 × 2m = 8m. Tax = 0.28 × 52 + 0.10 × 8 = 14.56 + 0.80 = 15.36m. (b) At 55: parent profit = 15 × 2m = 30m; subsidiary profit = (80 − 55 − 10) × 2m = 30m; tax = 8.4 + 3.0 = 11.4m. (c) Apparent saving = 15.36 − 11.4 = 3.96m a year, at risk of adjustment, penalties and double taxation.

**22.6.** Local tax 30; profit after tax 170; withholding 17; cash before home tax 153. (a) Home tax on 200 = 50; credit = 30 + 17 = 47; residual = 3. Cash retained = 153 − 3 = 150; total tax = 50 (25 percent). (b) Territorial: cash retained = 153; total tax = 47 (23.5 percent).

**22.7.** ETR = 40 / 500 = 8.0 percent; top-up percentage = 15% − 8% = 7.0 points; excess profit = 500 − 80 = 420; top-up = 420 × 7.0% = 29.4; total tax = 40 + 29.4 = 69.4, or 13.9 percent of 500. (Without the exclusion the top-up would be 35.)

**22.8.** Usage: year 1: 100; year 2: 150; year 3: 150 (remaining NOL 400 − 250 = 150). Tax savings: 30, 45, 45. PV = 30/1.10 + 45/1.21 + 45/1.331 = 27.27 + 37.19 + 33.81 = 98.27, compared with an undiscounted value of 400 × 30% = 120 (82 percent).
