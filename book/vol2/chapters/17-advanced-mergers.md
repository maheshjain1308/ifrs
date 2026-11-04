# Chapter 17: Advanced M&A: Structuring, Tax and Accounting

## Learning Objectives

After completing this chapter, you should be able to:

- Compare asset purchases, stock purchases and merger structures, and explain how each allocates tax, liability and contract risk between buyer and seller.
- Quantify the value of a tax basis step-up, and decide when a gross-up payment to the seller is justified.
- Apply the logic of purchase price accounting under IFRS 3 and ASC 805, including goodwill, identifiable intangibles, deferred taxes and contingent consideration, and explain what these entries do and do not say about economic value.
- Value an earnout as an option on post-closing performance, and design earnout terms that limit gaming and disputes.
- Analyze fixed-exchange-ratio, fixed-value and collared stock deals, and value a contingent value right (CVR) as a contingent claim.
- Evaluate risk allocation tools (representations and warranties, escrows, indemnities, insurance) and the mechanics of financing commitments, termination fees and deal certainty.

## Opening Vignette

*Illustrative scenario; all names and figures are fictional.*

Harlow Instruments is a mid-sized industrial technology company with a market capitalization of about $4.2 billion. Its chief executive, Priya Ramanathan, has spent eighteen months courting Verity Sensors, a privately held maker of precision measurement equipment with $400 million of proposed enterprise value. Verity is owned by a founder family (62 percent), a growth equity fund (30 percent) and management (8 percent). The strategic logic is clean. The structure is not.

The founder family wants cash and, above all, wants to defer tax; the fund wants a clean exit before its vintage year ends; management wants to keep working and to be paid for the growth they believe in. Verity's two largest customers have change-of-control clauses. One of Verity's product lines is under a patent dispute whose outcome is unknowable for three years. Harlow's board is nervous about its own share price, which has been volatile, and about a rival bidder who could appear with an all-cash offer. Harlow's lenders are willing to provide a bridge facility but want to understand what happens if antitrust review drags on.

Over six weeks, the deal team discovers that "price" is the smallest part of the negotiation. Buying Verity's assets would give Harlow a tax basis step-up worth millions but would trigger a second layer of tax for some sellers and require consents from every counterparty. A stock purchase preserves contracts but inherits unknown liabilities. A stock-for-stock merger defers seller tax but exposes the sellers to Harlow's share price and Harlow to dilution. An earnout could bridge the valuation gap on the growth forecasts, but it could also poison the working relationship with the managers who must earn it. A contingent value right could address the patent dispute. A representations-and-warranties insurance policy could replace the founders' fear of a long escrow.

This chapter equips you to work through exactly these trade-offs. The central lesson is that structure is value: the same $400 million headline can be worth very different amounts to buyer and seller, and the skill of a deal-maker lies in splitting that difference intelligently rather than arguing about the headline.

## 17.1 Deal Structure as a Value Lever

Volume 1, Chapter 22 treated mergers and acquisitions mainly as a valuation exercise: estimate standalone value, add synergies, decide how much to pay, and compare cash with stock as the means of payment. That framing is correct but incomplete. Two deals with the same headline price can transfer very different amounts of wealth, because price is only one of at least five terms that determine who gets what:

1. **Form of transaction** (asset purchase, stock purchase, merger), which determines tax treatment, liability transfer and the consents required.
2. **Form of consideration** (cash, stock, notes, contingent claims), which determines who bears the risk that value changes between signing and closing and after closing.
3. **Timing and conditionality** (financing conditions, regulatory approvals, termination rights), which determines the probability that the deal closes at all.
4. **Risk allocation** (representations, warranties, indemnities, escrows, insurance), which determines who pays when something undisclosed turns up.
5. **Accounting and reporting**, which does not change cash flows but changes reported earnings, covenants, management incentives and sometimes the stock price.

A useful way to hold these together is to treat the deal as the sale of cash flows plus a bundle of risks and options. The headline price pays for the cash flows; every other term prices a risk or option, and each can be shifted between the parties at a cost. The ideal allocation puts each risk with the party that can bear it most cheaply, and avoids giving one party risk over an outcome that the other controls.

### The Three Basic Forms

**Stock purchase.** The buyer acquires the target's shares directly from its shareholders. The legal entity survives unchanged: its contracts, permits, employees and liabilities (including unknown ones) stay inside it. For the buyer, the tax basis of the target's assets generally carries over; the buyer takes a basis in the shares equal to the price paid, but that "outside" basis is realized only on a future sale of the shares. Each selling shareholder must agree, so a stock purchase from a dispersed shareholder base is impractical without a statutory squeeze-out. For private targets with a handful of holders, it is standard.

**Asset purchase.** The buyer acquires selected assets and assumes selected liabilities, leaving the rest behind in the seller's legal shell. The buyer takes a fair-value ("cost") tax basis in each acquired asset, which is the source of the step-up discussed below. Excluded liabilities, such as historical product liability or unpaid taxes, stay with the seller (subject to successor liability doctrines that can reach buyers in some situations). The cost is administrative: contracts, leases and permits often need third-party consent for assignment, employees must be transferred, and title to each asset must be conveyed.

**Merger.** A statutory merger combines two entities by operation of law, with shareholder votes rather than individual sales. In a *forward merger* the target merges into the acquirer and ceases to exist. In a *reverse triangular merger* the acquirer forms a subsidiary that merges into the target, so the target survives as a subsidiary of the acquirer; contracts and permits normally remain with the surviving entity (though some contracts treat a merger as an assignment or change of control, which must be checked). The reverse triangular form is the workhorse of public-company deals precisely because it combines the legal continuity of a stock purchase with the ability to bind all shareholders through a vote.

### Tax-Free Reorganizations and the Continuity Requirement

In many jurisdictions, a share-based acquisition can qualify for tax deferral at the shareholder level if enough of the consideration is acquirer stock and certain continuity-of-interest and business-purpose tests are met. Under such a reorganization the target shareholders do not recognize gain on the stock they receive; their tax basis in the target shares carries over to the new shares, and the gain is deferred until they sell. The buyer does not step up asset basis. This creates a fundamental trade-off that recurs throughout this chapter:

- **Taxable deal:** sellers pay tax now; the buyer may obtain a step-up in asset basis (in an asset deal or a deemed asset deal) that creates future tax deductions.
- **Tax-deferred deal:** sellers defer tax; the buyer inherits the old basis and loses the deductions.

The size of each side of the trade-off is estimable, and it is what the negotiation should be about. Specific rules differ by country and change over time, so the numbers in this chapter are illustrative; always have tax counsel confirm current treatment before relying on any structure.

### Table 17.1 – Comparison of Basic Deal Forms

| Feature | Stock purchase | Asset purchase | Reverse triangular merger |
|---|---|---|---|
| Who sells | Each shareholder | The target entity | Shareholders vote; dissenters may have appraisal rights |
| Target legal entity | Survives | Remains with seller (assets move) | Survives as subsidiary |
| Liabilities | All inherited | Only those assumed | All inherited (survivor entity) |
| Contract consents | Only change-of-control clauses | Assignment consents for each contract | Change-of-control and anti-assignment clauses must be reviewed |
| Buyer tax basis in assets | Carryover (unless election) | Fair value (step-up) | Carryover (unless election) |
| Seller tax | Single level at shareholder | Possible two levels if corporate target | Single level, possibly deferred if stock consideration qualifies |
| Typical use | Private targets with few holders | Carve-outs, distressed sellers, asset-light buyers | Public targets, many holders |

Notice that the right column's legal continuity makes it the default for acquirers who value a clean transfer of the operating entity, while the middle column is preferred where the buyer wants to cherry-pick or needs the tax basis.

## 17.2 Tax Basis Step-Ups

### What a Step-Up Is and Why It Has Value

When a buyer pays a price above the target's tax basis in its assets, it would ideally be able to depreciate or amortize the full price, not the old, lower basis. A *step-up* resets the tax basis of the assets to fair market value (or the allocated purchase price). The incremental depreciation and amortization deductions reduce taxable income in future years. The tax saving is a real cash flow; its present value is the value of the step-up.

The step-up deduction applies to allocable categories. Under the simplified approach used in the US and many other systems, the purchase price is allocated across asset classes in a residual method: cash and receivables first, then inventory, then tangible fixed assets, then identifiable intangibles, and finally goodwill. Fixed assets are depreciated over their tax lives; acquired intangibles including goodwill are in the US amortized straight-line over 15 years for tax purposes (the "Section 197" rule). Because goodwill and intangibles dominate in knowledge-based and technology businesses, the step-up is often a 15-year deduction stream.

The present value is straightforward:

```
Annual tax shield = (Step-up ÷ Amortization years) × Tax rate
PV of shield     = Annual shield × Annuity factor(r, n)
Annuity factor   = [1 − (1 + r)^−n] ÷ r
```

The discount rate deserves thought. The shield is a claim on future taxable income, so it is only as safe as the buyer's ability to use deductions. Most practitioners discount at a rate near the cost of debt or at the WACC. Using the cost of debt treats the shield as relatively safe (the standard Modigliani-Miller treatment in Volume 1, Chapter 15, where interest tax shields are discounted at the cost of debt when the debt is fixed); using the WACC treats it as risky because it depends on future profitability. We use the buyer's WACC of 9 percent below. Both choices are defensible, and a sensitivity range is better than false precision.

**Example 17.1 – Value of a step-up.**
Harlow buys Verity's assets for $400 million. Verity's tax basis in those assets is $150 million, so the step-up is $400 − $150 = $250 million. Assume the entire step-up is amortizable straight-line over 15 years, Harlow's tax rate is 25 percent, and the discount rate is 9 percent.

Step 1 – Annual deduction: $250 ÷ 15 = $16.667 million.

Step 2 – Annual tax saving: $16.667 × 0.25 = $4.1667 million.

Step 3 – Annuity factor for 15 years at 9 percent:

```
[1 − 1.09^−15] ÷ 0.09 = [1 − 0.27454] ÷ 0.09 = 8.0607
```

Step 4 – PV of the shield: $4.1667 × 8.0607 = **$33.59 million**.

That is 8.4 percent of the $400 million price. Sensitivity: at a 6 percent discount rate (a debt-like rate), the annuity factor is 9.7122 and the PV is $40.47 million; at a 12 percent rate it is 6.8109 and $28.38 million. The step-up is therefore worth roughly $28 to $40 million depending on the risk assumed, and any structural cost that the sellers demand in return needs to be compared with that range.

*Managerial implication:* the headline of "$33.6 million of free value" is the maximum amount the buyer should be prepared to share with the sellers for access to the step-up. Whether any is shared depends on how much of the cost falls on the sellers, as the next example shows.

### Who Bears the Cost: Single and Double Taxation

A step-up requires the seller to be taxed as if the assets were sold, not the shares. If the seller is a corporation whose shareholders are the ultimate owners, an asset sale triggers corporate-level tax on the asset gain, and shareholders are taxed again when the proceeds are distributed. This double tax typically exceeds the value of the step-up to the buyer, so for C-corporation targets a plain asset purchase rarely makes economic sense. (There are exceptions: if the target has large net operating losses to absorb the gain, or if it is a subsidiary of a consolidated group whose parent has a low stock basis.)

For pass-through targets, the picture reverses. A partnership, LLC taxed as a partnership, or S corporation is taxed once at the owner level whether the buyer purchases assets or shares. Jurisdictions often allow an *election* that treats a stock purchase as an asset purchase for tax purposes (in the US, Section 338(h)(10) for S corporations and subsidiaries of consolidated groups, Section 336(e) in related circumstances, and an "F reorganization" followed by an LLC interest sale for S corporations). The buyer gets a step-up; the legal form is a stock purchase, preserving contracts and avoiding the consent problem; and the seller bears one layer of tax, though the *character* of income can change.

The character point matters. A step-up deal can convert part of the seller's gain from low-rate capital gain on shares to higher-rate ordinary income, typically on depreciation recapture and inventory or receivables. That incremental seller tax is the real price of the buyer's step-up and the number to negotiate.

**Example 17.2 – Sharing the step-up surplus in a pass-through deal.**
Verity is an S corporation. Under a 338(h)(10)-style election, $60 million of the $250 million total gain is recharacterized as ordinary income (recapture) taxed at 37 percent instead of the 20 percent capital gain rate on the shares. The buyer's benefit is $33.59 million from Example 17.1.

Step 1 – Seller's incremental tax: $60 × (0.37 − 0.20) = $10.20 million.

Step 2 – Gross-up payment X needed to leave the sellers whole. The additional price is itself taxed at 20 percent as additional capital gain, so we need X × (1 − 0.20) = $10.20 million, giving X = $10.20 ÷ 0.80 = **$12.75 million**.

Step 3 – Buyer's value of the extra price. The extra $12.75 million is also allocated to amortizable assets and creates its own shield: ($12.75 ÷ 15) × 0.25 × 8.0607 = **$1.71 million**.

Step 4 – Buyer's net gain from the election: $33.59 + $1.71 − $12.75 = **$22.55 million**.

The sellers are indifferent (they get whole), and the buyer is $22.55 million better off. Total surplus created is $22.55 million, which could be split in a negotiation: if the sellers hold out for half of the buyer's net gain, an additional $11.3 million would be paid, and the final price would be about $424 million. The mistake to avoid is treating the election as a pure cost to sellers who ought to give it away: it is a positive-sum structure whose surplus should be shared, and a buyer who insists on all of it risks losing the seller's cooperation on the deal's other terms.

*Contrast: the C-corporation case.* Suppose instead Verity were a C-corporation with an inside asset basis of $150 million and shareholder stock basis of $100 million, corporate tax of 25 percent and shareholder capital gain tax of 20 percent. In a stock sale at $400 million, shareholders net $400 − 0.20 × (400 − 100) = $340 million. In an asset sale at $400 million, the corporation pays 0.25 × (400 − 150) = $62.5 million of tax, distributes $337.5 million, and shareholders net $337.5 − 0.20 × (337.5 − 100) = $290.0 million. To leave the shareholders with $340 million, the corporation must receive $400 million after corporate tax and the pre-tax price must be $(400 − 0.25 × 150) ÷ 0.75 = $483.33 million, an $83.33 million gross-up. The buyer's step-up on the larger price is $333.33 million; its PV shield at 9 percent is ($333.33 ÷ 15) × 0.25 × 8.0607 = $44.78 million. The buyer pays $83.33 million to receive $44.78 million, a net loss of $38.55 million. This is why asset deals are rarely done for ordinary C-corporation targets.

## 17.3 Purchase Price Accounting

### What the Standards Require

Under IFRS 3 *Business Combinations* and the US equivalent, ASC 805, every acquisition of a business is accounted for by the **acquisition method**. The steps are the same under both frameworks:

1. Identify the acquirer.
2. Determine the acquisition date (the date control passes).
3. Recognize and measure, at fair value, the identifiable assets acquired and the liabilities assumed, including intangible assets that the target never recorded on its own balance sheet (customer relationships, developed technology, trade names, order backlog), with limited exceptions (deferred taxes, employee benefits and a few others follow their own standards).
4. Measure the consideration transferred at fair value, including the acquisition-date fair value of any contingent consideration.
5. Recognize **goodwill** as the residual: consideration plus any non-controlling interest (and previously held interest) minus the net identifiable assets at fair value. If the residual is negative, a bargain purchase gain is recognized after reassessing the measurement.

```
Goodwill = Consideration transferred (incl. contingent consideration at fair value)
         + Fair value of non-controlling interest (or its proportionate share of net assets under IFRS)
         + Fair value of previously held equity interest
         − Fair value of identifiable net assets acquired
```

The core point for finance professionals is that purchase price accounting is *an allocation of the price you paid*, not a valuation of what you got. The residual called goodwill is by construction whatever is left: it may reflect synergies, an assembled workforce, overpayment, or a mistake in valuing the identifiable assets. Treating the goodwill figure as the "value of the synergies" is a common error. A bidder who overpays in a hot market ends up with more goodwill, not less; the accounting never tells you the price was too high until an impairment test fails years later.

### Differences Between IFRS and US GAAP That Matter in Practice

- **Goodwill amortization.** Neither IFRS nor US GAAP (for public companies) amortizes goodwill; both require annual impairment testing at the level of the cash-generating unit (IFRS) or reporting unit (US GAAP). US private companies may elect to amortize goodwill over up to ten years as an alternative. The impairment tests differ in detail (IFRS compares carrying amount with recoverable amount at the cash-generating-unit level; US GAAP compares carrying amount with fair value at the reporting-unit level), and IFRS permits no reversal of goodwill impairment.
- **Non-controlling interest.** IFRS allows a choice, acquisition by acquisition, between measuring non-controlling interest at fair value ("full goodwill") or at its proportionate share of the net identifiable assets ("partial goodwill"). US GAAP requires fair value.
- **Contingent consideration.** Both require recognition at acquisition-date fair value. Liability-classified contingent consideration is remeasured at fair value every period, with changes going through earnings. Equity-classified contingent consideration is not remeasured. This is why the structure of an earnout (cash versus shares) affects reported volatility.

### Deferred Taxes in Purchase Accounting

In a stock deal without a tax election, the buyer steps up the *book* basis of the target's assets to fair value but inherits the old *tax* basis. The difference is a temporary difference, and the standards require a **deferred tax liability (DTL)** on the book-tax difference (with exceptions for goodwill itself). The DTL increases the net liabilities assumed and therefore *increases* goodwill. As the intangible assets amortize, the DTL unwinds, offsetting the tax effect of the book amortization so that the after-tax earnings charge reflects the true cash tax position.

**Example 17.3 – Purchase price allocation with deferred taxes.**
Harlow acquires 100 percent of Verity's shares for $400 million in cash, with no tax election. Verity's identifiable net assets at fair value, and their tax bases, are:

| Item | Fair value ($m) | Tax basis ($m) | Book-tax difference ($m) |
|---|---|---|---|
| Net working capital | 40 | 40 | 0 |
| Property, plant and equipment | 120 | 100 | 20 |
| Customer relationships | 90 | 0 | 90 |
| Developed technology | 60 | 0 | 60 |
| Trade name (indefinite life) | 20 | 0 | 20 |
| **Total** | **330** | **140** | **190** |

Tax rate: 25 percent. Customer relationships have a ten-year life, the technology five years, and the trade name is not amortized.

Step 1 – DTL: 190 × 0.25 = **$47.5 million**.

Step 2 – Net identifiable assets: 330 − 47.5 = $282.5 million.

Step 3 – Goodwill: 400 − 282.5 = **$117.5 million**, which equals 29.4 percent of the price.

Step 4 – Annual intangible amortization: customer relationships 90 ÷ 10 = $9 million; technology 60 ÷ 5 = $12 million; total $21 million per year in the first five years.

Step 5 – Earnings effect: pre-tax charge $21 million. The DTL unwinds by 21 × 0.25 = $5.25 million (a deferred tax benefit), so the after-tax reduction to net income is 21 − 5.25 = **$15.75 million**. After year 5, the technology is fully amortized and the charge falls to $9 million pre-tax ($6.75 million after tax).

Step 6 – Compare with a step-up structure. If the same deal were structured as a 338(h)(10)-type asset deal, the tax basis would equal fair value and goodwill, as defined for tax, would be amortizable. In book terms there would be no DTL on the identifiable assets, so goodwill would be $400 − $330 = **$70 million**, and the tax deductions would reduce cash taxes (as in Example 17.1) rather than being "booked" through deferred tax. The book goodwill is lower by exactly the DTL: $117.5 − $70 = $47.5 million.

*Managerial implication:* the DTL "grosses up" goodwill, and the after-tax book amortization of the finite-lived intangibles will depress reported EPS for years. Management that cares about reported EPS accretion, whether because of bonus metrics, covenants or investor communication, should model this explicitly, and should communicate "cash EPS" (excluding acquisition amortization) alongside it. The cash flows are the same either way; the controversy is entirely over how to describe them.

### Contingent Consideration and Post-Closing Remeasurement

Because contingent consideration is a liability recognized at fair value, a good outcome after closing produces an *expense*. If Verity's managers achieve their targets and the earnout liability rises from $8 million to $30 million, Harlow reports a $22 million charge, even though the business is doing better than expected. The reverse (poor performance reduces the liability) produces a gain. Analysts usually strip these items from "adjusted" earnings, but covenant definitions, bonus plans and credit metrics may not. A treasurer should therefore check how earnout remeasurement flows through the definition of EBITDA in debt agreements before agreeing to the structure.

## 17.4 Earnouts: Bridging Valuation Gaps

### Why Earnouts Exist

An **earnout** is a deferred, contingent payment to the seller that depends on the target's post-closing performance (revenue, EBITDA, product milestones, customer retention). Earnouts are used when buyer and seller disagree on the business's future: the seller believes the forecasts and wants to be paid for them, the buyer doubts them and does not want to pay for growth that never materializes. By making part of the price contingent, the earnout lets each party "put its money where its beliefs are." It also helps in three other situations: when management will stay on and incentives matter; when the seller has superior information (adverse selection), because a seller who accepts a large contingent component signals confidence; and when the buyer is cash-constrained and prefers to defer payments to the period when the business generates the cash.

The costs are equally real. Earnouts create **agency conflicts**: the buyer controls the business after closing and can reduce measured performance (shifting costs, pricing for market share, integrating in ways that move revenue); the seller-managers can inflate measured performance (pulling forward sales, cutting investment, discounting aggressively) at the expense of long-term value. Many earnout disputes end in litigation, and a surprisingly large share of the legal conflicts in M&A involve earnout definitions.

### Earnouts as Options

Economically, a typical earnout is a **call option (or a call spread) on a performance metric**. A payment of 60 percent of revenue above a threshold, capped at a maximum, is a long call at the threshold and a short call at the cap, with the metric as the underlying. This framing delivers several valuable insights:

- The value of the earnout rises with **volatility** of the metric, not only with its expected level. A buyer who thinks only about the expected case misses the value of the upside tail.
- A threshold *above* the expected outcome still has substantial value because of the option-like payoff. Valuing the earnout at the expected-case payoff (a deterministic forecast) systematically understates its value, as the example below shows.
- The cap reduces the cost to the buyer and reduces the seller's incentive to push beyond the cap.
- Because payments are made years later, discounting matters, and the right rate reflects the risk of the metric and the credit risk of the buyer.

In practice, contingent consideration is valued with Monte Carlo simulation or option pricing models, using risk-adjusted projections (the metric's drift reduced so that discounting at a near-risk-free rate is appropriate) or real-world projections discounted at a higher rate. Auditors require this for acquisition accounting, and the discount rate must be consistent with the projection's risk treatment.

**Example 17.4 – Valuing a revenue earnout.**
Verity's current annual revenue is $100 million. The sellers will receive 60 percent of year-3 revenue above $120 million, capped at $40 million. The cap is reached when 0.6 × (R₃ − 120) = 40, i.e. R₃ = 120 + 66.67 = $186.67 million. Assume year-3 revenue is lognormal with a risk-adjusted expected growth rate of 7 percent per year (so the expected R₃ is 100 × 1.07³ = $122.50 million) and annual volatility of 20 percent. The payment is made at the end of year 3, and we discount at 5 percent (a risk-adjusted rate reflecting the buyer's credit risk).

Step 1 – Naive deterministic value: at the expected revenue of $122.50 million the payout is 0.6 × (122.50 − 120) = $1.50 million. The PV at 5 percent would be $1.30 million, which looks trivial.

Step 2 – Option value. The payoff is 0.6 × [Call(K=120) − Call(K=186.67)] on revenue with forward F = 122.50. For a lognormal variable, the expected value of a call payoff is:

```
E[(R − K)+] = F·N(d1) − K·N(d2)
d1 = [ln(F/K) + ½σ²T] ÷ (σ√T),   d2 = d1 − σ√T
```

With σ√T = 0.20 × 1.7321 = 0.3464:

- For K = 120: d1 = [ln(1.02087) + 0.06] ÷ 0.3464 = (0.02065 + 0.06) ÷ 0.3464 = 0.2328; d2 = −0.1136. N(d1) = 0.5920, N(d2) = 0.4548. E = 122.50 × 0.5921 − 120 × 0.4548 = 72.53 − 54.58 = $17.95 million (rounded).
- For K = 186.67: d1 = [ln(0.65627) + 0.06] ÷ 0.3464 = (−0.42115 + 0.06) ÷ 0.3464 = −1.0436; d2 = −1.3900. N(d1) = 0.1483, N(d2) = 0.0824. E = 122.50 × 0.1486 − 186.67 × 0.0824 = 18.20 − 15.38 = $2.82 million.

Step 3 – Expected payoff: 0.6 × (17.95 − 2.82) ≈ $9.08 million (the unrounded calculation gives $9.083 million).

Step 4 – Present value at 5 percent over three years: 9.083 ÷ 1.157625 = **$7.85 million**.

Step 5 – Monte Carlo check. A simulation of 1,000,000 paths gave an expected payoff of $9.077 million (PV $7.84 million); the probability that revenue exceeds $120 million is 45.5 percent, and the probability the cap binds is 8.2 percent. The analytic and simulated values agree.

Step 6 – Sensitivity to volatility (PV at 5 percent): with σ = 10 percent, the earnout is worth $4.98 million; with σ = 20 percent, $7.85 million; with σ = 30 percent, $8.83 million.

*Interpretation:* the deterministic view says $1.30 million; the option view says $7.85 million, six times higher. If the parties negotiate as if the earnout is worth little, the sellers are giving up value, or the buyer is under-accrued. For Harlow's accounting, the acquisition-date fair value of the contingent consideration is $7.85 million, which is part of the consideration transferred and therefore adds to goodwill. Each subsequent period, the liability is remeasured as time passes and revenue evolves.

### Designing Earnouts That Work

Experience suggests a set of design rules:

1. **Choose a metric the seller can influence but the buyer cannot easily manipulate.** Revenue is harder to game than EBITDA (which depends on allocated overheads and integration costs) but invites unprofitable growth. Gross profit or contribution margin is a compromise. For biotech and technology, milestone metrics (regulatory approvals, product launches) are clean and observable.
2. **Define accounting terms precisely.** State which accounting standards apply, forbid changes in policies, and specify treatment of intercompany transactions, shared costs and purchase accounting adjustments.
3. **Impose operating covenants, carefully.** Buyers promise not to take actions with the primary purpose of reducing the earnout (a "good faith" covenant is common); sellers want stronger protections such as separate books and minimum investment levels. The stronger the covenants, the less the buyer can integrate, which dilutes the strategic logic of the deal.
4. **Keep the earnout period short.** One to three years is typical. A long earnout locks the seller and buyer into a relationship neither controls, and an extended performance period lets the metric be affected by factors unrelated to the seller's effort.
5. **Cap and floor.** Caps limit the buyer's exposure; floors (minimum guaranteed payments) are really deferred purchase price and should be treated as debt-like.

Set-off rights deserve particular attention. If the buyer can deduct indemnity claims from the earnout, the earnout becomes a form of security for the sellers' warranties; sellers then bear more of the risk that the buyer will assert claims to reduce the payment. The combination of a contested earnout and a contested indemnity claim is the single most reliable recipe for post-closing litigation.

## 17.5 Share Consideration, Collars and Contingent Value Rights

### Who Bears Price Risk Between Signing and Closing

When part or all of the consideration is acquirer stock, the value the target's shareholders receive floats with the acquirer's share price between signing and closing, a period that can run from weeks to over a year if regulatory approvals are slow. The exchange mechanism determines who bears the risk. Three designs dominate.

**Fixed exchange ratio.** Each target share receives a fixed number of acquirer shares (say 0.5). The target shareholders bear the risk that the acquirer's stock falls and enjoy the gains if it rises. The acquirer issues a fixed number of shares: its *dilution* is certain, but the *value* it gives up fluctuates. Because the target holders effectively own a fixed percentage of the combined company, a fixed ratio makes the deal a true merger of equals in risk-sharing terms: both sets of shareholders share in the combined entity's fortunes, including the market's reaction to the deal.

**Fixed value (floating exchange ratio).** Each target share receives acquirer shares worth a fixed dollar amount (say $50) at closing, so the number of shares issued adjusts. The target is protected against acquirer price declines; the acquirer bears the price risk and may have to issue many more shares if its price falls (an unbounded dilution risk). This looks like a cash deal funded by stock issuance at the closing date: the target holders behave like creditors with a claim of fixed value.

**Collars** blend these designs inside a price band. Two common varieties:

- *Fixed-ratio collar (floating outside the band).* The exchange ratio is fixed within the band (acquirer price from $90 to $110, say), so the value floats within the band; outside it, the ratio floats to hold the value at the band's edge ($45 at the bottom, $55 at the top). The target is protected from large declines; the acquirer is protected from paying more than a maximum value.
- *Fixed-value collar (floating within the band).* The exchange ratio floats within the band to deliver a fixed $50, and is fixed outside the band, so that value is allowed to float beyond the edges. Within the band the target is fully protected; outside the band, risk reverts to the target.

In option language, a collar is a position in a *call spread and a put spread* on the acquirer's price, held by one side and written by the other. Each collar variety assigns the options differently. A cap and floor on the value delivered are an option strategy (long put at the floor, short call at the cap, from the target's perspective). The target thus gives away upside in exchange for downside protection, and the acquirer does the reverse. Because these options are valuable (the price volatility of a stock over several months is large), the choice of collar should be priced rather than negotiated by intuition. The negotiation currency is the band width and the exchange ratio at the center; wider bands transfer more risk to the target.

**Example 17.5 – Fixed ratio, fixed value, and collared structures.**
Harlow offers an exchange for a public target with 100 million shares. At signing Harlow trades at $100 and the headline price is $50 per target share, equivalent to 0.5 Harlow shares. Compare three structures as Harlow's price at closing varies. (Fixed-value collar band $90–$110; fixed-ratio collar value limits $45 and $55 with the same band.)

| Harlow price at close ($) | Fixed ratio: ER / value per target share ($) | Fixed-value collar: ER / value ($) | Fixed-ratio collar: ER / value ($) |
|---|---|---|---|
| 70 | 0.5000 / 35.00 | 0.5556 / 38.89 | 0.6429 / 45.00 |
| 80 | 0.5000 / 40.00 | 0.5556 / 44.44 | 0.5625 / 45.00 |
| 90 | 0.5000 / 45.00 | 0.5556 / 50.00 | 0.5000 / 45.00 |
| 100 | 0.5000 / 50.00 | 0.5000 / 50.00 | 0.5000 / 50.00 |
| 110 | 0.5000 / 55.00 | 0.4545 / 50.00 | 0.5000 / 55.00 |
| 120 | 0.5000 / 60.00 | 0.4545 / 54.55 | 0.4583 / 55.00 |
| 130 | 0.5000 / 65.00 | 0.4545 / 59.09 | 0.4231 / 55.00 |

Step 1 – Fixed-value collar: within $90–$110 the ratio is $50 ÷ price (0.5556 at $90, 0.5 at $100, 0.4545 at $110). Outside the band the ratio freezes at the edge: 50 ÷ 90 = 0.5556 below $90, 50 ÷ 110 = 0.4545 above $110. Value at $70 = 0.5556 × 70 = $38.89; at $130 = 0.4545 × 130 = $59.09.

Step 2 – Fixed-ratio collar: ratio 0.5 within the band; outside, the ratio floats to hold value at $45 (below $90): at $70 the ratio is 45 ÷ 70 = 0.6429; at $80, 45 ÷ 80 = 0.5625; and at $55 above $110: at $120 the ratio is 55 ÷ 120 = 0.4583; at $130, 55 ÷ 130 = 0.4231.

Step 3 – Cost to Harlow (value delivered for 100 million target shares). At a Harlow price of $70: fixed ratio $3,500 million (50.0 million shares); fixed-value collar $3,889 million (55.56 million shares); fixed-ratio collar $4,500 million (64.29 million shares). At $130: fixed ratio $6,500 million (50.0 million shares); fixed-value collar $5,909 million (45.45 million shares); fixed-ratio collar $5,500 million (42.31 million shares).

Step 4 – Interpretation. Harlow's cost ranges from $3.5 to $6.5 billion under a fixed ratio, $3.9 to $5.9 billion under the fixed-value collar, and $4.5 to $5.5 billion under the fixed-ratio collar. The fixed-ratio collar gives the target value insurance across the entire range and the narrowest range of costs to Harlow, but it forces Harlow to issue up to 64.3 million shares if its price collapses (a 29 percent increase in the shares issued versus the 50 million base). The simplest fixed ratio costs Harlow the most dilution protection but offers the target the least value protection.

*Managerial implication:* the right design depends on the relative risk aversion and information of the two parties. A target whose shareholders are diversified and that wants to share in synergies prefers a fixed ratio; a target with concentrated holders who need certainty of value prefers a collar; an acquirer worried about its stock's volatility and willing to pay for deal completion will concede a collar but may insist on a cap on shares issued.

### Contingent Value Rights

A **contingent value right (CVR)** is a security or contractual right issued to target shareholders in addition to the upfront consideration, entitling them to a payment if a specified future event occurs: regulatory approval of a drug, achievement of sales milestones, resolution of litigation, or a minimum price of the acquirer's stock in a future period. CVRs are the commodity form of the earnout, issued to many holders, sometimes transferable and listed, and often used in pharmaceutical and biotech acquisitions where the target's value depends on binary clinical or regulatory outcomes that the parties value differently.

There are two main varieties. *Event-driven* CVRs pay a fixed amount if a defined event occurs by a deadline (a digital, or binary, payoff). *Price-protection* CVRs pay the difference, if positive, between a reference price and the acquirer's stock price on a future date, which is a put option on the acquirer's shares and effectively a value guarantee for stock-consideration holders; they give target holders the downside protection of a collar without a closing-date adjustment.

**Example 17.6 – Valuing an event-driven CVR.**
Harlow acquires Brightline Therapeutics (60 million shares outstanding) for $30 in cash per share plus one CVR per share that pays $5 if regulatory approval for a lead compound is obtained within three years. Assume a risk-neutral-equivalent probability of approval of 35 percent (clinical-stage probabilities are largely idiosyncratic, so a near-risk-free-plus-credit rate is appropriate) and a discount rate of 5 percent.

Step 1 – Expected payoff per CVR: 0.35 × $5 = $1.75.

Step 2 – Present value, assuming payment at the end of year 3: $1.75 ÷ 1.05³ = $1.75 ÷ 1.157625 = **$1.512 per CVR**.

Step 3 – Total fair value of the liability: 60 million × $1.512 = **$90.7 million**. The maximum payout is 60 × $5 = $300 million, so the CVR's expected value is about 30 percent of its face amount.

Step 4 – Sensitivity to the discount rate: at 12 percent the PV per CVR is $1.246, giving a liability of $74.7 million. A simple sensitivity to probability: at 20 percent probability the PV is $0.864 per CVR ($51.8 million); at 50 percent it is $2.160 ($129.6 million).

Step 5 – Accounting. The $90.7 million is recognized at the acquisition date as contingent consideration (a liability measured at fair value), added to the $1,800 million in cash ($30 × 60 million) to give total consideration of $1,890.7 million for goodwill purposes. If approval is subsequently obtained, the liability steps up to $300 million and a $209 million charge (before the time-value adjustment) flows through earnings. If approval is rejected, the liability is eliminated and a gain of the full carrying amount is booked.

*Managerial implication:* the headline price for the target is "$30 plus a CVR worth up to $5", but its economic price is $31.51, 5 percent higher than the cash-only price; the board should compare offers on the basis of fair value, not maximum value. A bidder who offers a large nominal CVR with a low probability of triggering is offering less than it seems, and a target board that accepts such a CVR should demand covenants on efforts and, ideally, a minimum milestone payment.

## 17.6 Representations, Warranties and Risk Allocation

### The Architecture of Risk Allocation

The acquisition agreement is a risk allocation device. The seller makes **representations and warranties** (reps) about the business: financial statements are accurate, no undisclosed liabilities exist, the company owns its intellectual property, it complies with laws, taxes have been paid, contracts are in force. The buyer relies on the reps in setting its price. If a rep is false, the buyer has a remedy: **indemnification** (the seller pays for losses arising from the breach), typically subject to limits.

Several terms define the economics:

- **Basket (deductible or tipping).** A threshold of losses the buyer must absorb before the seller owes anything. A *deductible* basket means the seller pays only losses above the threshold; a *tipping* (first-dollar) basket means that once the threshold is crossed, the seller pays all losses from the first dollar. Baskets, commonly around 0.5 to 1 percent of the transaction value, screen out trivial claims.
- **Cap.** The maximum amount the seller must pay for general rep breaches, frequently 10 percent of price in traditional deals (lower with insurance). Fundamental reps (title, authority, capitalization) and fraud usually sit outside the cap, up to the purchase price.
- **Survival period.** How long after closing a claim can be made: commonly 12 to 24 months for general reps, longer for tax and fundamental reps.
- **Escrow or holdback.** Part of the purchase price kept in an account (or withheld) as security for indemnity claims.
- **Materiality scrape.** A clause that ignores materiality qualifiers when calculating losses or determining whether a breach occurred, expanding the seller's exposure.
- **Sandbagging.** Whether the buyer may claim for a breach it knew about before closing. A pro-sandbagging clause lets the buyer close and still recover; an anti-sandbagging clause bars the claim.
- **Disclosure schedules.** Exceptions to the reps; the more the seller discloses, the less the reps protect the buyer. Disclosure is how the real negotiation over risk takes place.

Rep-and-warranty provisions determine where the *unknown unknowns* fall. The principle that the party best able to know or control a risk should bear it suggests that reps about the business's historical operations belong with the sellers, while risks created by the buyer's own post-closing actions belong with the buyer.

### Representations and Warranties Insurance

**Representations and warranties insurance (RWI)** has become common in private-company deals. The buyer purchases a policy (buy-side policy) that pays for losses from breaches of the seller's reps, subject to a **retention** (like a deductible), a **limit** (usually 10 percent of enterprise value), and **exclusions** (known matters, forward-looking statements, certain categories such as underfunded pensions, asbestos, or specific issues identified in due diligence). The premium, often a few percent of the limit paid as a one-time cost, and the underwriting fee are borne by the buyer, the sellers, or split. The insurer relies on the buyer's due diligence reports to decide what to exclude. As a result, due diligence quality directly determines the scope of coverage, and the insurer's exclusions list is a useful independent diligence output.

For the seller, RWI converts a large indemnity and escrow into a small one (say 0.5 percent of price) plus any residual exposure for fraud and fundamental reps. For the buyer, the policy provides a creditworthy counterparty and a longer survival period (often three years for general reps and six for fundamental), at the cost of the retention and exclusions. For both, RWI shifts the negotiation: the buyer is willing to accept a smaller seller indemnity, and the seller is willing to improve the price, because it keeps more certain proceeds.

**Example 17.7 – Escrow versus insurance.**
Verity's enterprise value is $400 million. A traditional package: sellers provide a 10 percent ($40 million) escrow for 18 months. The alternative is a buy-side RWI policy with a $40 million limit, a retention of $2 million (0.5 percent), and a premium of 3 percent of the limit. Assume post-closing losses from rep breaches (in $ million) have the following distribution:

| Loss ($m) | 0 | 2 | 5 | 10 | 25 | 60 |
|---|---|---|---|---|---|---|
| Probability | 0.86 | 0.06 | 0.04 | 0.025 | 0.01 | 0.005 |

Step 1 – Premium: 3% × $40 = **$1.2 million**, or 0.30 percent of enterprise value.

Step 2 – Expected total loss: 2 × 0.06 + 5 × 0.04 + 10 × 0.025 + 25 × 0.01 + 60 × 0.005 = 0.12 + 0.20 + 0.25 + 0.25 + 0.30 = **$1.12 million**.

Step 3 – Insurance recovery for each loss level: min(max(L − 2, 0), 40) = 0, 0, 3, 8, 23, 40. Expected recovery: 3 × 0.04 + 8 × 0.025 + 23 × 0.01 + 40 × 0.005 = 0.12 + 0.20 + 0.23 + 0.20 = **$0.75 million**. This is 62.5 percent of the premium, a plausible loss ratio once the insurer's expenses and profit and the loading for correlated, severe tail events are considered.

Step 4 – Buyer's uncovered expected loss under RWI: $1.12 − 0.75 = **$0.37 million** (the retention on each loss plus the $20 million excess in the 1-in-200 case where loss is $60 million: 2 × (0.06 + 0.04 + 0.025 + 0.01 + 0.005) + 18 × 0.005 = 0.28 + 0.09 = 0.37).

Step 5 – Traditional escrow: the buyer recovers min(L, 40): expected recovery $1.02 million (the tail of $60 million is truncated at $40 million). The buyer's uncovered expected loss is $0.10 million, apparently better than RWI. But the escrow's recovery is conditional on the seller's willingness to pay and the buyer's ability to prove the claim, and the escrow's cost to the sellers is substantial.

Step 6 – Cost to sellers of the escrow versus RWI. If sellers value capital at 8 percent per year, trapping $40 million for 18 months costs 40 × (1.08^1.5 − 1) = **$4.89 million** in time value, against $2 million of escrow (the residual retention-related escrow, for which the opportunity cost is 2 × 0.1236 = $0.25 million) under RWI, so they save about $4.6 million. Whoever pays the $1.2 million premium, the total surplus from RWI is: sellers save $4.64 million in time value, the buyer pays $1.2 million for the policy and bears slightly more expected loss ($0.37 million versus $0.10 million); net joint saving about $4.64 − 1.2 − 0.27 = $3.2 million. A buyer may reasonably demand a price reduction or a split of the premium in return for accepting the substitution.

*Interpretation:* RWI is not "free coverage". It reallocates costs from sellers to insurers and buyers and it trades the certainty of exclusions for a creditworthy counterparty. The deal team should model the joint surplus to find where the negotiation should land.

## 17.7 Financing Commitments and Deal Certainty

### The Certainty Problem

Between signing and closing, a deal can fail for reasons unrelated to the price: financing falls through, regulators object, a shareholder vote fails, a rival bids, a material adverse change occurs, or the market moves. The target bears the cost of a failed deal (employee attrition, customer defection, a damaged auction, a signal that something is wrong), and in a deal that fails the target is typically worth less than before the process began. Sellers therefore pay for **certainty**, usually by accepting a lower headline price from a bidder with fewer outs, and buyers choose how much certainty to offer by selecting the conditions, commitments and fees in the agreement.

### Financing Commitments

A cash acquisition requires committed funds. The buyer typically obtains a **commitment letter** from its banks to provide bridge or term loans on specified terms, with a commitment fee and a **ticking fee** that accrues if closing is delayed. In competitive deals the sellers demand "certain funds": the buyer's obligation to close is not conditional on obtaining financing. Lenders respond with *limited conditionality*, often described as "SunGard" provisions after the type of leveraged buyout in which they first became standard in the US. Under those provisions, the conditions to funding are cut back to a short list: accuracy of a few specified representations, no material adverse effect on the target, delivery of required documents. Lenders accept the reduced conditionality for fees, but they require that the buyer's equity contribution, collateral and documentation be effectively final at signing, and they hold the buyer to rigorous standards.

### Conditions, MAC Clauses and Regulatory Risk

The **material adverse change (MAC) clause** allows the buyer to refuse to close if the target suffers a change that is materially adverse to its business, but courts interpret it narrowly: the change must be durable (measured in years, not months), significant relative to the target's overall condition, and not within the carve-outs (general economic conditions, industry-wide changes, changes in law or accounting, pandemics, failure to meet projections) that negotiators routinely include. In practice, the MAC clause is a weak exit, and a buyer that wants out of a deal is more likely to rely on other conditions. A wise buyer therefore negotiates specific closing conditions (key customer retention, no injunction, no specified litigation outcome) and treats the MAC as a backstop.

Regulatory approval is usually the most material risk in strategic deals. The agreement allocates it through three terms:

- **Efforts covenants.** "Reasonable best efforts" or "hell or high water" provisions, the latter obliging the buyer to accept whatever divestitures or remedies the regulator requires. Sellers push for the stronger form; buyers for a cap on the burdens they must accept.
- **Outside date.** The date after which either party may terminate if the deal has not closed, often extendable if only regulatory approval is outstanding.
- **Reverse termination fee (RTF).** A fee payable by the buyer to the seller if the deal fails for specified reasons (regulatory failure or financing failure), compensating the seller and creating an incentive for the buyer to perform. RTFs are usually set higher than the seller's own "break-up" fee payable on a competing bid: typical ranges are a few percent of equity value for the target's fee and higher for regulatory RTFs in sensitive sectors.

Once a deal is announced, the target trades at a discount (the spread) to the offer price, which can be decoded into an implied probability of completion. If P is the market price, O the offer, D the price without the deal, T the time to close and r the risk-free rate:

```
Implied probability p = (P − D) ÷ (O ÷ (1 + r)^T − D)
```

The simple version ignores time value and sets the offer's discounting term to zero: p = (P − D) ÷ (O − D). The merger arbitrageur earns the spread if the deal completes and suffers the fall to D if it does not, a payoff like writing an out-of-the-money put.

**Example 17.8 – Implied probability of completion.**
Brandt Systems, a public target, has agreed to be acquired for $50 per share in cash, expected to close in six months. Brandt traded at $38 before the announcement and trades at $48.20 now. The risk-free rate is 4 percent.

Step 1 – Naive implied probability (no time value): (48.20 − 38) ÷ (50 − 38) = 10.20 ÷ 12 = 85.0 percent.

Step 2 – Present value of the offer: 50 ÷ 1.04^0.5 = 50 ÷ 1.0198 = $49.03.

Step 3 – Time-adjusted implied probability: (48.20 − 38) ÷ (49.03 − 38) = 10.20 ÷ 11.03 = **92.5 percent**.

Step 4 – Gross spread: (50 − 48.20) ÷ 48.20 = 3.73 percent over six months, equivalent to (1.0373)² − 1 = **7.6 percent annualized**.

*Interpretation:* once the time value is taken into account, the market implies a probability of completion of about 92.5 percent. The naive method understates it by 7.5 points, because it attributes the entire spread to risk. If Harlow, in a similar position as acquirer, sees its target trading at a price implying a 70 percent probability, the market is signaling concern about financing, regulatory approval or a competing bid, and management should take it as a prompt to identify and address the issue. A rising spread with no news is informative as well.

### Valuing Certainty

For the seller, certainty has a price that can be calculated. A deal with a conditional financing structure is a probability-weighted lottery between the deal price and the failed-deal value.

**Example 17.9 – What a seller will pay for a financing commitment.**
A buyer offers $400 million. If the deal fails, the target's value falls to $340 million (distraction, attrition, and market stigma). Bidder A offers $400 million with a financing condition, and the seller estimates an 80 percent probability of closing. Bidder B offers $400 million with committed financing, a reverse termination fee of $12 million, and a 88 percent estimated probability of closing.

Step 1 – Bidder A expected value: 0.80 × 400 + 0.20 × 340 = 320 + 68 = **$388.0 million**.

Step 2 – Bidder B expected value without the RTF: 0.88 × 400 + 0.12 × 340 = 352 + 40.8 = **$392.8 million**.

Step 3 – RTF contribution (assuming the fee is payable on failure for financing or regulatory reasons): 0.12 × 12 = **$1.44 million**, so the total expected value is $394.24 million.

Step 4 – Value of certainty to the seller: 394.24 − 388.0 = **$6.24 million**. The seller would therefore accept a price for Bidder B up to $6.24 million ÷ 0.88 ≈ $7.1 million below $400 million (about 1.8 percent less) and be no worse off, ignoring risk aversion. Because sellers are not risk-neutral (a private founder cannot diversify the deal), the true willingness to pay is higher.

*Managerial implication:* the buyer who can offer certainty cheaply, through a strong balance sheet, committed financing, and a credible regulatory path, has a competitive advantage in auctions that is worth several percent of the price. Conversely, a buyer offering certainty it cannot honor has simply sold the sellers an unhedged put.

## Case Study: Meridian Orthopedics and Calder Biologics

*Illustrative case; the companies and figures are fictional.*

Meridian Orthopedics, a listed medical device company with revenue of $2.8 billion and net debt of 1.6 times EBITDA, wishes to acquire Calder Biologics, a privately held maker of bone-graft substitutes. Calder's trailing revenue is $180 million, EBITDA is $36 million, and it is growing at 22 percent. The sellers are the founder, Dr. Imani Okafor (55 percent), a venture fund (35 percent) and employees (10 percent). Calder is an S corporation (the fund holds through a pass-through vehicle), so a tax election is available. Its tax basis in assets is $60 million.

Meridian values Calder's standalone business at $420 million on a conservative forecast and sees $50 million of present-value synergies. The sellers, citing a pipeline product (CB-7, a next-generation graft) that is awaiting regulatory clearance, are asking $560 million. The parties agree to explore a structure that bridges the gap.

*Proposals on the table.*

1. **Upfront price of $450 million in cash**, financed with a bridge loan taken out by bonds. Meridian's lenders will give committed funds, with a ticking fee.
2. **338(h)(10)-type election** treating the purchase as an asset purchase. Meridian estimates that $330 million of the price would be allocated to amortizable intangibles and goodwill, creating a PV step-up shield of about $38 million at its discount rate. The sellers' incremental tax from recapture and ordinary income treatment is $9 million.
3. **A two-year earnout** of up to $60 million, paid at 50 cents per dollar of revenue above $260 million in year two. The sellers' forecast has year-two revenue at $290 million; Meridian's has $250 million. Meridian wants EBITDA as the metric, since it will integrate Calder into its sales force; Dr. Okafor wants revenue, and is concerned that Meridian will redirect sales representatives to its own products.
4. **A CVR-style milestone** of $40 million payable if CB-7 is cleared by the regulator within 30 months. Meridian estimates a 45 percent probability. The sellers estimate 75 percent.
5. **Insurance.** The sellers have refused any indemnity above 1 percent of price, citing the fund's wind-down, and propose RWI with a limit of $45 million. Insurers will exclude a pending dispute over a competitor's patent that Calder has discussed in due diligence. Meridian's counsel believes the patent claim could cost up to $25 million.
6. **Regulatory and certainty terms.** Calder's largest hospital customer can terminate on a change of control. Antitrust review is expected to take four to six months. The sellers want a reverse termination fee of 4 percent of the price.

*Meridian's board concerns.* The board worries about goodwill and amortization of acquired intangibles diluting reported EPS in the first two years, about the earnout liability volatility, and about distraction. The CFO, Samuel Reyes, believes a fixed price of $560 million is too high, but that a structure that matches the sellers' beliefs with contingent payments could be acceptable and might also retain Dr. Okafor as head of the division for the earnout period.

*Task.* The board has asked you, as the deal team, to recommend a structure, a price composition, and a negotiating strategy.

**Discussion Questions**

1. Using the numbers in the case, estimate the joint surplus from the tax election, and recommend how to split it. What price would you offer on that basis, and how would the allocation affect Meridian's reported goodwill and EPS compared with a straight stock deal?
2. Value the earnout and the CVR under both Meridian's and the sellers' assumptions. Treat the earnout as a call spread on year-two revenue with volatility of 25 percent; discuss why the valuations differ and how a contract could make each side comfortable. Which metric should the earnout use, and what covenants are needed to limit gaming?
3. Design the risk-allocation package. How would you deal with the patent claim (which RWI will exclude), the change-of-control right of the key customer, and the sellers' unwillingness to provide an escrow? What would a specific indemnity or price-adjustment mechanism look like?
4. Design the certainty package: what financing, conditions and termination fee would you offer, and how much should you be willing to pay for certainty if an alternative bidder is believed to have a 20 percent chance of emerging? Justify with expected-value reasoning.

## Key Takeaways

- Structure is value: form of transaction, consideration, conditions, risk allocation and accounting each carry economic consequences beyond the headline price.
- A tax step-up is a stream of future deductions whose present value (often 6 to 10 percent of price at 15-year amortization) is the maximum the buyer should share with the sellers; the sellers' incremental tax is the cost to be compensated.
- For C-corporation targets, double taxation usually makes plain asset purchases uneconomic, while for pass-through targets elections can create value for both sides.
- Purchase price accounting allocates the price paid; goodwill is a residual that includes any overpayment, and deferred taxes increase goodwill when the buyer cannot step up tax basis.
- Contingent consideration is a liability measured at fair value and remeasured through earnings, so good performance after closing can produce reported charges.
- Earnouts and CVRs are options on performance; they should be valued with volatility, not at the expected-case payoff, and their design must anticipate manipulation by both sides.
- In stock deals, the exchange mechanism (fixed ratio, fixed value, collars) allocates acquirer price risk between signing and closing; each variety is an option position that should be priced.
- Representations and warranties allocate unknown risks; RWI can replace large escrows and founder indemnities, at the cost of retention, exclusions and a premium, and known risks need specific solutions.
- Deal certainty (committed financing, clean conditions, reverse termination fees, regulatory commitments) has a calculable value to sellers, and spreads in target stock prices reveal the market's estimate of completion probability.
- The best structure assigns every risk to the party that can bear it most cheaply and every value-creating term to joint negotiation.

## Review Questions

1. Why can two acquisitions with the same headline price differ in value to the buyer and the seller? List at least four deal terms that cause this.
2. Explain the difference between a stock purchase, an asset purchase and a reverse triangular merger in terms of liability, consents and tax basis.
3. Why does an asset sale by a C-corporation usually destroy value relative to a stock sale, and under what circumstances might it not?
4. What discount rate would you apply to the tax shield from a step-up, and why? What are the consequences of using the cost of debt versus the WACC?
5. Explain why goodwill is not a measure of synergy value. What does an impairment tell the reader of financial statements?
6. Why does a deferred tax liability increase goodwill in a stock acquisition without a tax election?
7. Explain why an earnout is an option and how volatility affects its value. What happens to the value of the earnout if the cap is removed?
8. Compare fixed-ratio and fixed-value stock deals. Which side bears the price risk in each, and how does a collar change the allocation?
9. How do RWI policies change the negotiating positions of buyers and sellers? Which risks remain with the seller and which with the buyer?
10. How can a merger arbitrage spread be used to infer the market's view of deal completion? What would cause the implied probability to be a biased estimate?

## Problems

1. **Step-up value.** A buyer pays $600 million for assets with a tax basis of $200 million. The step-up is amortized straight-line over 15 years; the tax rate is 21 percent and the discount rate 8 percent. Compute the annual tax shield and its present value.
2. **C-corporation gross-up.** A C-corporation target is to be sold for $300 million in a stock deal. Inside asset basis is $100 million; shareholders' stock basis is $80 million. Corporate tax is 21 percent and shareholder capital gains tax is 20 percent. (a) What do the shareholders net in a stock sale? (b) What pre-tax asset sale price leaves them equally well off? (c) If the buyer's tax rate is 25 percent and discount rate 10 percent, what is the PV of the buyer's step-up shield at that price, and does the buyer gain?
3. **Purchase accounting.** A buyer pays $500 million in cash for a business whose identifiable net assets have a fair value of $380 million and a tax basis of $200 million. The tax rate is 30 percent and there is no tax election. Compute the deferred tax liability, the goodwill, and goodwill as a percentage of price. If $100 million of the fair value is a finite-lived intangible with a 10-year life, compute the annual pre-tax amortization, deferred tax benefit and after-tax earnings reduction.
4. **Earnout.** Revenue is $200 million today, with an expected growth rate of 6 percent per year and volatility of 25 percent. The sellers receive 50 percent of year-2 revenue above $230 million, capped at $30 million. Compute the expected payoff and PV at 6 percent. (Use the lognormal call formula with forward F = 200 × 1.06².) Compare it with the deterministic estimate.
5. **Collar.** An acquirer trades at $80 and offers $48 per target share (exchange ratio 0.6). Under a fixed-value collar with band $72 to $88, compute the exchange ratio and value per target share for acquirer prices of $60, $72, $80, $88 and $100.
6. **CVR.** A buyer issues 80 million CVRs, each paying $4 if a milestone occurs within two years (probability 40 percent). Discount rate is 6 percent. Compute the fair value per CVR and in total, and compare with the maximum payout.
7. **RWI.** Post-closing losses have the distribution: $0 (0.82), $1 million (0.08), $4 million (0.05), $12 million (0.03), $30 million (0.015) and $70 million (0.005). The RWI policy has a retention of $1.5 million and a limit of $25 million and costs 3 percent of the limit. Compute the expected insurer payout and compare it with the premium.
8. **Merger arbitrage.** A target offered $32 in cash, closing in nine months, trades at $29.40 and had traded at $24 before the announcement. The risk-free rate is 5 percent. Compute the naive and time-adjusted implied probabilities, and the annualized spread.

### Answers to Selected Problems

1. Annual shield = (400 ÷ 15) × 0.21 = $5.60 million. Annuity factor (8%, 15) = 8.5595. PV = **$47.93 million**.
2. (a) 300 − 0.20 × (300 − 80) = **$256.0 million**. (b) Needed corporate distribution D: D − 0.20 × (D − 80) = 256, so D = (256 − 16) ÷ 0.8 = $300 million; price P with P − 0.21 × (P − 100) = 300 gives P = (300 − 21) ÷ 0.79 = **$353.16 million** (a $53.16 million gross-up). (c) Step-up = 253.16; PV shield = (253.16 ÷ 15) × 0.25 × 7.6061 = **$32.09 million**. The buyer pays $53.16 million for $32.09 million of value: a net loss of about $21.1 million.
3. DTL = (380 − 200) × 0.30 = **$54 million**; goodwill = 500 − 380 + 54 = **$174 million** (34.8 percent of price). Amortization = $10 million per year; deferred tax benefit = $3 million; after-tax earnings reduction = **$7 million**.
4. F = 224.72; cap strike = 230 + 30 ÷ 0.5 = 290; σ√T = 0.3536. Expected call at 230 = $29.33 million; at 290 = $12.33 million; expected payoff = 0.5 × (29.33 − 12.33) = **$8.50 million**; PV = **$7.57 million**. The deterministic payoff is zero since the expected revenue ($224.72 million) is below the $230 million threshold.
5. $60: ratio 0.6667, value $40.00; $72: 0.6667, $48.00; $80: 0.6000, $48.00; $88: 0.5455, $48.00; $100: 0.5455, $54.55.
6. Expected payoff per CVR = 0.40 × 4 = $1.60; PV = 1.60 ÷ 1.1236 = **$1.424**; total **$113.9 million** versus maximum **$320 million** (35.6 percent).
7. Insurer payouts: 0, 0, 2.5, 10.5, 25, 25. Expected payout = 2.5 × 0.05 + 10.5 × 0.03 + 25 × 0.015 + 25 × 0.005 = 0.125 + 0.315 + 0.375 + 0.125 = **$0.94 million**. Premium = 0.03 × 25 = $0.75 million. The expected payout exceeds the premium, so this policy would not be offered; the insurer would raise the premium or the retention. (Expected total loss = $1.44 million.)
8. Naive probability = (29.40 − 24) ÷ (32 − 24) = **67.5 percent**. PV of offer = 32 ÷ 1.05^0.75 = $30.85; time-adjusted = 5.4 ÷ 6.85 = **78.8 percent**. Gross spread = 2.6 ÷ 29.4 = 8.84 percent over nine months, or **11.96 percent annualized**.
