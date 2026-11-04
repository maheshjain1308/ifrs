# Chapter 19: Distress, Bankruptcy and Workouts

## Learning Objectives

After studying this chapter you should be able to:

- Distinguish financial distress from economic distress, estimate direct and indirect costs of distress, and use scoring and structural models to assess default risk.
- Apply the absolute priority rule to build a recovery waterfall, and explain how secured claims, deficiency claims, and superpriority financing alter the order of payment.
- Value a firm in bankruptcy using going-concern and liquidation approaches, and explain why the reorganization value is the pivotal number in plan negotiation.
- Model equity as a call option on the firm's assets to explain why shareholders of distressed firms retain value, and why they behave as they do.
- Evaluate debtor-in-possession (DIP) financing, a negotiated plan of reorganization, and an out-of-court exchange offer from the perspectives of each stakeholder, including holdout problems.
- Analyze a distressed investment by identifying the fulcrum security, estimating scenario recoveries, and computing expected returns and break-even prices; and describe, cautiously, how insolvency regimes differ across jurisdictions.

## Opening Vignette

*(Illustrative scenario. Meridian Home Stores is a fictional company.)*

Meridian Home Stores operates 140 mid-market home furnishing stores across the Midwest. Three years ago a sponsor-backed recapitalization left the company with a 400 million secured term loan, 300 million of senior unsecured notes, and 150 million of subordinated notes. Sales were 1.9 billion. EBITDA, which had been 190 million at the time of the deal, has slid to 80 million as e-commerce competitors take share and a shift in housing turnover cuts demand for big-ticket furniture.

In January the CFO, Dana Okafor, faces a calendar that is no longer under her control. A 60 million interest payment on the senior notes is due in six weeks. The revolver is fully drawn. Suppliers, who ship on 45-day terms, are quietly asking for cash in advance, which accelerates the liquidity drain. Same-store sales are falling at 8 percent. The term loan lenders have hired advisers; a group of noteholders holding about 40 percent of the senior notes has organized behind its own counsel.

Dana's board asks three questions. Is Meridian's problem a balance sheet problem, in which a viable business carries too much debt, or an operating problem, in which the business is worth more dead than alive? If it is a balance sheet problem, can the company restructure out of court, with the cooperation of hundreds of dispersed bondholders, or must it file for Chapter 11? And if it files, who will lend the cash to keep stores stocked and payroll paid while the case is pending?

This chapter provides the tools to answer these questions, returning to Meridian to build its waterfall, value the reorganized business, price its equity as an option, evaluate a DIP loan, negotiate a plan, test an exchange offer, and price the senior notes for a distressed investor.

## 19.1 The Anatomy of Financial Distress

### 19.1.1 Two kinds of trouble

Distress is not one phenomenon. **Economic distress** means the firm's assets are worth more in an alternative use than in their current use: the business model is broken, and value is destroyed every year it continues. **Financial distress** means the firm cannot meet its contractual obligations to creditors, even though the underlying business may be worth far more as a going concern than its debt. The policy and managerial responses differ sharply. An economically distressed firm should usually shrink or be liquidated, and the question for creditors is how to maximize recovery. A financially distressed but economically viable firm should be recapitalized, and the value at stake is the going-concern value that a chaotic default would destroy.

Most real cases mix the two. A useful diagnostic compares going-concern value (GCV), liquidation value (LV) and total claims:

```
Economic distress:      GCV < LV            (stop operating)
Financial distress:     LV < GCV < Claims   (restructure the balance sheet)
Solvent:                GCV > Claims
```

Meridian sits in the middle category: its going-concern value, estimated in Section 19.4 at about 620 million, exceeds a liquidation value of roughly 330 million but is far below its claims. The 290 million gap is the value at risk in a disorderly collapse, and the rationale for every institution in this chapter.

### 19.1.2 Why distress is costly

Volume 1, Chapter 15 introduced the trade-off theory: debt provides a tax shield but raises expected distress costs. Here we decompose those costs.

**Direct costs** are legal, advisory and court fees plus management time. Empirical work has generally found them modest relative to the value of large firms and proportionally heavier for small ones; they alone rarely justify avoiding leverage.

**Indirect costs** are larger and harder to measure. They include:

- *Lost sales:* customers doubt that a distressed firm will honor warranties or support products (furniture, airline tickets, software).
- *Tighter supplier terms:* trade credit is cut, converting a profitability problem into a liquidity problem.
- *Employee attrition:* the best people leave first.
- *Debt overhang* (Myers): management skips positive-NPV projects because benefits accrue to creditors.
- *Risk shifting* (Jensen and Meckling): equity holders, who hold a call option, may favor negative-NPV high-variance projects.
- *Strategic exploitation:* competitors price aggressively against a weak rival.

The central managerial point is that the expected cost of distress equals the probability of distress times the loss given distress. Both terms are driven by leverage, asset tangibility, the nature of the product, and the flexibility of the capital structure.

**Example 19.1 – Expected distress costs and optimal leverage.** A firm has an unlevered value of 1,000 million. The corporate tax rate is 25 percent, and debt is assumed permanent so that the present value of the tax shield is 0.25 × D. Distress costs, if distress occurs, equal 35 percent of firm value (1,000 million). The probability of distress rises with debt:

| Debt D (million) | Probability of distress | PV tax shield = 0.25D | Expected distress cost = p × 0.35 × 1,000 | Net benefit of debt |
|---|---|---|---|---|
| 0 | 0% | 0.0 | 0.0 | 0.0 |
| 200 | 2% | 50.0 | 7.0 | 43.0 |
| 400 | 6% | 100.0 | 21.0 | 79.0 |
| 600 | 15% | 150.0 | 52.5 | 97.5 |
| 800 | 35% | 200.0 | 122.5 | 77.5 |

Step by step for D = 600: shield = 0.25 × 600 = 150.0; expected cost = 0.15 × 0.35 × 1,000 = 52.5; net = 150.0 − 52.5 = 97.5. The net benefit peaks near D = 600 among these grid points and declines at 800 because the probability of distress is rising faster than the shield. The precise figure depends on unknowable assumptions; the lesson is that the marginal cost of distress rises convexly while the shield rises linearly. A prudent treasurer sits left of the peak because the benefit curve is flat near the optimum while distress costs are catastrophic and partly irreversible.

### 19.1.3 Warning signals and default prediction

Practitioners use two broad families of default predictors. **Accounting-based scores** map financial ratios into a single number. The best-known is Altman's Z-score for public manufacturing firms:

```
Z = 1.2·X1 + 1.4·X2 + 3.3·X3 + 0.6·X4 + 1.0·X5
X1 = Working capital / Total assets
X2 = Retained earnings / Total assets
X3 = EBIT / Total assets
X4 = Market value of equity / Book value of total liabilities
X5 = Sales / Total assets
```

In Altman's original calibration, scores below about 1.8 signaled high distress risk, scores above about 3.0 signaled safety, and the range between was a grey zone. Coefficients differ for private firms and non-manufacturers, and the model was estimated on a particular era; it is a screening tool, not a forecast.

**Example 19.2 – Z-score for Meridian.** From the accounts: X1 = 0.15, X2 = 0.08, X3 = 0.10, X4 = 0.60, X5 = 1.10.

```
Z = 1.2(0.15) + 1.4(0.08) + 3.3(0.10) + 0.6(0.60) + 1.0(1.10)
  = 0.180 + 0.112 + 0.330 + 0.360 + 1.100
  = 2.082
```

A score of 2.08 is in the grey zone, and X5 contributes 1.10 of it: a retailer's high asset turnover flatters a business whose margins are collapsing, a standard criticism of the model.

**Market-based measures** use equity prices and volatility. The Merton model (Section 19.5) yields a *distance to default*, and credit spreads and CDS quotes embed the market's view of default probability and recovery (Volume 1, Chapter 4). Warning signs include wide spreads, falling equity, covenant waivers, going-concern audit qualifications, restructuring advisers and deferred coupons. Three early decisions matter: diagnose economic versus financial distress, protect liquidity with a rigorous 13-week cash forecast, and act early, because the option set narrows as the runway shortens.

## 19.2 The Legal Framework: Priority, Process and Incentives

### 19.2.1 Why bankruptcy law exists

When a debtor cannot pay everyone, each creditor's rational response is to grab assets first. This common-pool problem dismembers a going business, exactly as a bank run destroys a bank. Bankruptcy law substitutes a collective procedure built on three devices: a **stay** on individual collection, a **priority scheme** that fixes who is paid first, and a **voting mechanism** that lets a majority bind dissenters to a restructuring. The description below follows the United States Bankruptcy Code, the best-known model; Section 19.10 addresses other jurisdictions cautiously. Nothing here is legal advice, and statutory detail and case law evolve.

### 19.2.2 Chapter 7 and Chapter 11

**Chapter 7** is liquidation by a trustee. **Chapter 11** is reorganization: management typically remains in control as "debtor in possession," operations continue, and the firm proposes a plan that, if confirmed, binds all parties. An **automatic stay** halts collection and most litigation. The debtor has an initial *exclusivity period* in which only it may propose a plan; it is extendable by the court up to statutory ceilings, after which competing plans give creditors leverage.

Chapter 11 gives the debtor tools: it can **assume or reject contracts and leases** (rejection damages become unsecured claims, sometimes capped for real property leases); it can **sell assets free and clear** under Section 363, often to a *stalking horse* bidder whose offer sets a floor for an auction; it can borrow with priority (Section 19.6); and the estate can pursue **avoidance actions** against preferences (payments to creditors shortly before filing, 90 days for most) and fraudulent transfers (transfers for less than reasonably equivalent value while insolvent). Leveraged buyouts and special dividends that left a firm insolvent are frequent targets, a link back to Volume 1, Chapter 23.

### 19.2.3 Classes, voting and confirmation

A plan places claims in **classes** of substantially similar claims: administrative expenses and priority claims are paid in full unless holders agree otherwise; secured claims form one or more classes; unsecured claims, subordinated claims, and equity interests form their own classes. A class **accepts** the plan if holders of at least two-thirds in amount and more than one-half in number of the claims actually voting vote yes. For confirmation, the court examines several requirements, the most important of which for finance are:

1. **Best interests of creditors.** Each dissenting creditor must receive at least what it would receive in a Chapter 7 liquidation. This puts a floor under every class: the liquidation value.
2. **Feasibility.** The plan must not be likely to be followed by liquidation or further reorganization. The reorganized firm must be able to service its post-emergence capital structure, which is why exit leverage is carefully tested.
3. **At least one impaired accepting class,** excluding insiders, if any class is impaired.
4. **Cramdown** (Section 1129(b)): if some impaired class rejects, the court may still confirm the plan if it is *fair and equitable* and does *not discriminate unfairly* as to the rejecting class. For a dissenting class of unsecured creditors, "fair and equitable" means either that the class is paid in full or that no junior class (including equity) receives or retains any property on account of its junior interest. That is the **absolute priority rule** (APR).

The APR is thus a statutory requirement for cramdown, not an inviolable property right in every negotiated outcome. When every class accepts, the plan can deviate from strict priority because classes may waive their rights. The rule's practical effect is to set the *bargaining baseline* against which consensual deviations are negotiated: "the shadow of the waterfall."

### 19.2.4 The absolute priority waterfall

The standard ordering of payment is: (1) **secured claims**, to the value of their collateral (any shortfall is an unsecured *deficiency claim*); (2) **administrative expenses**, including professional fees, post-petition payables and DIP financing, which with superpriority can rank ahead of prepetition secured claims on the collateral it is granted; (3) **priority unsecured claims** (certain wages, benefits and taxes); (4) **general unsecured claims** (bonds, trade, lease rejection damages), pari passu; (5) **subordinated claims**; and (6) **preferred, then common equity**.

Courts may *equitably subordinate* claims for inequitable conduct and rarely *substantively consolidate* affiliates, but legal-entity structure is of first-order importance: a holding company bondholder without guarantees is *structurally subordinated* to creditors of operating subsidiaries even if its debt is called "senior."

**Example 19.3 – Meridian's recovery waterfall.** Claims at filing: DIP financing 100; secured term loan 400 (all-asset lien); general unsecured claims 400 (senior notes 300 plus trade and lease rejection claims 100, pari passu); subordinated notes 150. Equity is junior to everything. Assume the distributable value is the enterprise value (EV) in each scenario, ignoring professional fees for simplicity (they would reduce recoveries further).

Rule: pay each class in order until value runs out; recovery % = payment ÷ claim.

| Distributable value | DIP | Secured TL | General unsecured | Subordinated | Equity |
|---|---|---|---|---|---|
| 400 | 100 (100%) | 300 (75.0%) | 0 (0%) | 0 | 0 |
| 500 | 100 (100%) | 400 (100%) | 0 (0%) | 0 | 0 |
| 620 | 100 (100%) | 400 (100%) | 120 (30.0%) | 0 | 0 |
| 800 | 100 (100%) | 400 (100%) | 300 (75.0%) | 0 | 0 |
| 1,000 | 100 (100%) | 400 (100%) | 400 (100%) | 100 (66.7%) | 0 |

Step by step at 620: after the DIP, 620 − 100 = 520; after the term loan, 520 − 400 = 120; the 120 goes to general unsecured claims of 400, a recovery of 120 / 400 = 30.0 percent; nothing remains for subordinated holders or equity. At 800: 800 − 500 = 300 to the unsecured pool, 75 percent. At 1,000: 1,000 − 500 = 500; unsecured claims take their 400 in full, leaving 100 for the subordinated notes, a recovery of 100 / 150 = 66.7 percent.

Two lessons follow. First, recoveries are a piecewise-linear function of distributable value: each class is a "call spread" on the enterprise value, which is the intuition for the option pricing of Section 19.5. Second, the **fulcrum security** is the class in which value runs out. At 620 the fulcrum is the general unsecured class, and it is the class that will receive the new equity of the reorganized firm. The fulcrum holders are the real owners of the firm economically, even before the plan says so. The senior secured lender is "money good" at 620 and has little interest in the valuation fight unless value falls toward 500; subordinated holders and old equity are out of the money and have only nuisance leverage and the option value of delay.

### 19.2.5 Mistakes to avoid when building a waterfall

Include accrued interest, make-whole premia and lease rejection damages in claims; allocate collateral so that secured creditors are secured only to the value of their collateral (the remainder is a deficiency claim that competes with unsecured claims); build the waterfall entity by entity, with guarantees and intercompany claims; deduct professional fees and DIP interest before prepetition creditors; and value non-cash recoveries (new notes, illiquid equity) at market value rather than face.

## 19.3 Out-of-Court Workouts and the Collective Action Problem

### 19.3.1 The case for staying out of court

Chapter 11 is costly and public and can trigger customer flight. An **out-of-court restructuring** (workout) avoids many of those costs through maturity extensions, covenant amendments, debt-for-equity swaps, **exchange offers** (old bonds for new bonds with lower principal, lower coupons, longer maturity, higher seniority or equity kickers), asset sales and new equity. Workouts work best when creditors are few and sophisticated, the capital structure is simple, and the business is viable.

### 19.3.2 Why bond restructurings are hard: holdouts

A bank group can be gathered in a room; a bond issue held by hundreds of dispersed investors presents a free-rider problem. Each holder prefers that others concede while it holds out and collects full value if the firm is rescued, a prisoner's dilemma analyzed by Gertner and Scharfstein and by Bulow and Shoven. Design features that address it:

- **Collective action clauses** let a supermajority amend payment terms for all. In many US corporate indentures, changes to core payment terms need each affected holder's consent (a requirement associated with the Trust Indenture Act of 1939), whereas many other bond contracts and most modern sovereign bonds allow supermajority amendment. Check the actual indenture.
- **Exit consents.** Tendering holders vote to strip covenants or liens from the *old* bonds, leaving holdouts with a weakened instrument. Their permissible strength depends on contract and jurisdiction.
- **Seniority enhancement.** New securities are secured or senior, so holdouts become effectively subordinated. Such "uptier" or liability-management transactions, when offered to only a subset of creditors, have generated significant litigation over the rights of excluded holders.
- **Participation conditions and a prepackaged backstop.** A *prepackaged* bankruptcy solicits votes before filing and then obtains rapid confirmation if thresholds are met; its credible threat, which binds holdouts by class vote, is the stick behind many exchange offers conditioned on, say, 90 percent participation.

### 19.3.3 Evaluating an exchange offer

An exchange offer is a take-it-or-leave-it choice for each holder, who compares the value of the new package, V_new, with the value of holding out: V_old,succ if enough others tender, V_old,fail (the bankruptcy recovery) if the exchange collapses. A tenderer's outcome in the success state is V_new; a holdout's is V_old,succ. The offer must therefore be designed so that V_new materially exceeds V_old,succ, so that the package *pays* participants for the benefit they confer on the group.

**Example 19.4 – Valuing the exchange for a bondholder.** Meridian proposes this to its holders of 300 million of 5-year 8 percent senior unsecured notes (annual coupons, par 100). For each 100 face tendered, a holder receives 70 face of new 5-year 8 percent *secured* notes. The market yield for a secured note of this credit quality, after the restructuring, is 11 percent. If the exchange fails, the firm files for Chapter 11 and the general unsecured recovery is 30 cents on the dollar (Example 19.3). If the exchange succeeds and holders do not tender, the old notes would be subordinated in effect to the new secured notes; assume their price reflects a yield of 25 percent.

Value of 100 face of new secured notes per 100 tendered, with 70 face received:

```
Price per 100 face of new note = Σ 8/(1.11)^t (t=1..5) + 100/(1.11)^5
  = 8 × 3.6959 + 100 × 0.59345
  = 29.567 + 59.345 = 88.91
Value of package = 0.70 × 88.91 = 62.24
```

Value of holding out if the exchange succeeds: price at 25 percent yield:

```
Σ 8/(1.25)^t + 100/(1.25)^5 = 8 × 2.6893 + 100 × 0.32768 = 21.51 + 32.77 = 54.28
```

Value of holding out if the exchange fails: 30.0 (bankruptcy recovery).

Tendering gives 62.24 with certainty if the exchange goes through (and if it fails, the tendered holder's position reverts and receives 30, as in the failure branch). Holding out gives 54.28 on success and 30 on failure. Tendering therefore dominates in this example: 62.24 > 54.28 in the success state and equal in the failure state. The structure (a smaller face amount but with higher priority) has been designed so that the exchange converts a holdout's free ride into a penalty of 62.24 − 54.28 = 7.96 per 100 face. For the firm, debt on these notes falls to 0.70 × 300 = 210 million of face (a 90 million reduction), at the price of granting security that primes other unsecured creditors. Whether that is wise depends on what other creditors do, which is why liability management exchanges are among the most contested transactions in credit markets.

### 19.3.4 Tax wrinkles

Debt forgiveness generally creates cancellation-of-debt income for the issuer. Many tax systems give relief to insolvent borrowers, often by reducing tax attributes such as loss carryforwards, and ownership changes may limit use of those losses. Details differ by country and change over time, so tax advice should come early in plan design.

## 19.4 Valuing the Firm in Bankruptcy

Everything in a restructuring depends on one number: the value available for distribution. Valuation in bankruptcy is applied corporate finance with an adversarial twist: each class wants a valuation that puts value to it at the fulcrum or above, so senior creditors argue low and junior creditors and old equity argue high. A judge may have to choose.

### 19.4.1 Going-concern versus liquidation value

**Liquidation value** is what the assets would fetch if sold piecemeal, net of liquidation costs, in a forced or semi-forced sale. For asset-heavy firms (inventory, receivables, real estate, equipment) it is estimated with *recovery rates* by asset class (for example, a high fraction of face for receivables, a lower fraction for inventory, a lower still for specialized equipment). It provides the floor under the best-interests test.

**Going-concern value** is the value of the reorganized business. There are three standard methods:

1. **Discounted cash flow (DCF)** on the post-restructuring business plan, using a WACC appropriate to the *emerging* capital structure and risk (Volume 1, Chapters 11 and 21). It requires projecting free cash flow after the operational restructuring (closing stores, shedding unprofitable leases).
2. **Comparable companies**: apply multiples of EBITDA from healthy peers to normalized EBITDA, with a discount for distress or size.
3. **Precedent transactions**: multiples paid in comparable acquisitions (Volume 1, Chapter 22).

In a plan context, the figure is called the **plan value** or *reorganization value*. It includes debt and equity of the reorganized firm. Because the post-reorganization capital structure matters, circularity must be avoided: use an unlevered DCF or consistent peer multiples and then subtract the post-emergence net debt to get equity.

### 19.4.2 DCF for the emerging business

**Example 19.5 – Meridian's reorganized enterprise value.** After closing 35 underperforming stores and renegotiating leases, management projects unlevered free cash flow (after tax, capex and working capital) for five years of 40, 48, 56, 61 and 63 (million). Terminal growth is 2 percent. The WACC of the reorganized firm is 11 percent. Compute the enterprise value.

Discount each year's cash flow at 1.11^t:

| Year | FCF | Discount factor | Present value |
|---|---|---|---|
| 1 | 40 | 1/1.11 = 0.9009 | 36.04 |
| 2 | 48 | 0.8116 | 38.96 |
| 3 | 56 | 0.7312 | 40.95 |
| 4 | 61 | 0.6587 | 40.18 |
| 5 | 63 | 0.5935 | 37.39 |

Sum of PV of explicit cash flows = 36.04 + 38.96 + 40.95 + 40.18 + 37.39 = 193.51 (with exact discounting, 193.51).

Terminal value at the end of year 5 (Gordon growth):

```
TV = FCF5 × (1 + g) / (WACC − g) = 63 × 1.02 / (0.11 − 0.02) = 64.26 / 0.09 = 714.0
PV(TV) = 714.0 / 1.11^5 = 714.0 / 1.68506 = 423.7
EV = 193.5 + 423.7 = 617.2
```

The DCF gives about 617 million; we round to 620 million as the working plan value. The terminal value is 68.6 percent of the total, which is typical and is the weak point of the valuation. The sensitivity is large:

| WACC | EV (g = 2%) |
|---|---|
| 9% | 801.1 |
| 10% | 697.6 |
| 11% | 617.2 |
| 12% | 553.0 |
| 13% | 500.5 |

A one-point change in WACC moves the EV by 50 to 100 million, or 8 to 15 percent. Now recall Example 19.3: at EV = 500 the term lender is just paid in full after the DIP, and the unsecured creditors recover zero; at 700 they recover about 50 percent (700 − 500 = 200, 200/400); at 800, 75 percent. The *recovery of the fulcrum class is therefore extremely sensitive to WACC*, which explains why valuation fights are the central contest in contested cases. Unsecured creditors argue for 10 percent or lower (they will say the post-restructuring firm is less risky because leases and debt were shed); the secured lender argues for 12 or 13 percent (execution risk, thin liquidity, a distressed retail sector).

Compare with liquidation value of 330: the best-interests test is satisfied for every class so long as the plan recovery exceeds what Chapter 7 would pay. In a Chapter 7 liquidation at 330, after the 100 DIP, 230 is available for the term loan, a recovery of 230 / 400 = 57.5 percent; unsecured creditors get nothing. Under the plan, the term loan receives 100 percent and unsecured creditors receive 30 percent. Both beat liquidation.

### 19.4.3 Valuation traps in bankruptcy

- **Using the pre-distress WACC.** Use an unlevered cost from healthy comparables, relevered at the exit capital structure (Volume 1, Chapter 15).
- **Management's projections.** Management has an incentive to project a hockey stick to justify equity retention; creditors' advisers have the opposite. Stress-test against history and benchmark margins.
- **Terminal value dominance.** Cross-check the DCF with an exit multiple: 620 / 80 = 7.75 times normalized post-restructuring EBITDA of 80 million, a modest discount if healthy peers trade at 8 to 9 times.
- **Double-counting.** Excess cash and tax assets (NOLs) are valued separately if not in the cash flows.

## 19.5 Equity as an Option: Why Shareholders Fight

### 19.5.1 The Merton framework

Merton (1974) applied Black and Scholes to corporate liabilities. Suppose the firm has a single zero-coupon debt issue with face value D due at time T, and the firm's asset value V follows a lognormal diffusion with volatility σ. At maturity equity holders receive max(V − D, 0), a call option on the firm's assets with strike D; creditors receive min(V, D) = D − max(D − V, 0), which is risk-free debt less a put option on the assets. In Volume 1, Chapter 18's notation:

```
E = V·N(d1) − D·e^(−rT)·N(d2)
d1 = [ln(V/D) + (r + σ²/2)T] / (σ√T),   d2 = d1 − σ√T
Debt value = V − E
Risk-neutral probability of default = N(−d2) = 1 − N(d2)
Yield on debt:  y = (D/Debt value)^(1/T) − 1
```

The model is a stylized single-period description; it ignores coupons, multiple seniorities, strategic default, and the cost of the process, but it clarifies three facts about distress.

**Example 19.6 – Meridian's equity as a call option.** Treat all financial debt as a single zero-coupon claim of 1,000 million (face; simplified to include the term loan and unsecured and subordinated notes, each treated at face value plus accrued items for illustration) due in three years. The risk-free rate is 4 percent, asset volatility is 35 percent. Compute equity value and debt yield at V = 700, 1,000 and 1,400.

For V = 700, D = 1,000, r = 4%, σ = 35%, T = 3:

```
σ√T = 0.35 × 1.7321 = 0.6062
d1 = [ln(0.7) + (0.04 + 0.06125) × 3] / 0.6062
   = [−0.35667 + 0.30375] / 0.6062 = −0.0873
d2 = −0.0873 − 0.6062 = −0.6935
N(d1) = 0.4652,  N(d2) = 0.2440
PV of strike = 1,000 × e^(−0.12) = 886.92
E = 700 × 0.4652 − 886.92 × 0.2440 = 325.6 − 216.4 = 109.2
```

(Figures are rounded; the exact computation yields E = 109.25.) Debt value = 700 − 109.2 = 590.8; the debt's promised yield is (1,000 / 590.75)^(1/3) − 1 = 19.2 percent; the risk-neutral default probability is N(−d2) = 1 − 0.244 = 75.6 percent.

Results at the three asset values (computed with the formulas above):

| V | d1 | d2 | N(d2) | Equity | Debt | Debt yield | P(default) |
|---|---|---|---|---|---|---|---|
| 700 | −0.087 | −0.694 | 0.244 | 109.2 | 590.8 | 19.2% | 75.6% |
| 1,000 | 0.501 | −0.105 | 0.458 | 285.5 | 714.5 | 11.9% | 54.2% |
| 1,400 | 1.056 | 0.450 | 0.674 | 598.9 | 801.1 | 7.7% | 32.6% |

**The three lessons.** First, equity is worth 109 million when the assets (700) are worth far less than the 1,000 of debt: the **option value of equity** is positive even deep out of the money, because volatility gives a chance of recovery. That is why equity trades above zero in distressed firms and why old shareholders demand a "tip" in the plan. Second, at V = 700 equity gains 285.5 − 109.2 = 176.3 when V rises by 300, a delta effect of roughly 0.59 per dollar over this range, while creditors capture only 123.7 of that increase: equity and debt share the upside according to their deltas. Third, equity's value *increases* with volatility (vega is positive), so shareholders prefer riskier strategies; creditors' value falls. In distress this incentive conflict is acute: management tied to equity will favor gambles ("resurrection" strategies), while creditors will insist on covenants and restrict operations.

### 19.5.2 Managerial and negotiation implications

Old equity resists liquidation because its option has value; deviations from absolute priority in negotiated cases can be read as creditors paying for equity's *nuisance value* and *delay option*, which grows with the case's duration because value becomes more volatile. Each class can be viewed as a *call spread* on enterprise value: the fulcrum class is long a call struck at the sum of senior claims and short a call struck at the sum of claims through its own class, so senior classes are short volatility and the fulcrum class is most exposed to valuation arguments.

## 19.6 Debtor-in-Possession Financing

### 19.6.1 Why a bankrupt firm needs new money

A firm in Chapter 11 faces an immediate squeeze: prepetition trade credit disappears and professional fees are paid currently. **DIP financing** is credit extended after filing. The Code offers inducements in ascending order of aggressiveness: **administrative expense priority**; **superpriority** over other administrative claims; **liens on unencumbered assets** and junior liens on encumbered ones; and **priming liens**, a first lien on assets already pledged to prepetition lenders, available only if the debtor cannot otherwise obtain credit and the prepetition lenders are adequately protected (for example by a value cushion or replacement liens).

DIP loans carry tight **milestones** (deadlines to file a plan, approve sale procedures or close a sale), strict budgets and reporting. Milestones give the lender effective control over the pace and sometimes the outcome of the case, and incumbent lenders can use the loan to steer toward "loan-to-own" outcomes, so courts scrutinize excessive control, releases and *roll-ups* that convert prepetition debt into post-petition debt.

### 19.6.2 Evaluating a DIP loan

From the debtor's perspective, DIP financing is an *option-preserving* investment: it buys time and keeps the going-concern value from collapsing. The question is whether the incremental value preserved exceeds the cost. From the prepetition lender's perspective, priming means being primed ahead by the new lender; the lender will accept if the DIP preserves enough value that its recovery rises, or else will offer to provide the DIP itself.

**Example 19.7 – DIP economics for Meridian.** Meridian needs 100 million of new money for the first nine months of the case: the 13-week cash forecast shows a cumulative funding gap of about 80 million with a 20 million cushion. A DIP lender offers a 100 million facility, fully drawn for simplicity, with a 3 percent upfront fee and an interest rate of 12 percent per year, with a nine-month expected case.

Cost of DIP:

```
Fee      = 3% × 100 = 3.0
Interest = 12% × 100 × (9/12) = 9.0
Total cost = 12.0 million
```

Benefit. Without DIP financing, Meridian must liquidate at about 330. The prepetition secured lenders' recovery would be 330 / 400 = 82.5 percent, with no DIP outstanding. (The 57.5 percent figure in Example 19.5 applies when the DIP is repaid first, as happens if the case is financed and then fails.) With DIP financing and a successful reorganization at 620, the term loan is paid in full (100 percent) after repaying the DIP's 100, and unsecured creditors recover 30 percent rather than zero.

Value comparison to the estate: going-concern value 620 versus liquidation 330 = 290 million of value preserved, against a financing cost of 12 million plus professional fees. Even if the probability that the case succeeds is only 60 percent and a failed case ends in liquidation at 330 (the DIP being repaid out of these totals), the expected value to the estate is:

```
E[value] = 0.60 × 620 + 0.40 × 330 = 372 + 132 = 504
Less DIP cost (certain): 12.0
Net = 492.0 versus liquidation immediately at 330
```

The DIP raises expected distributable value by 162 million (before professional fees). That is a large positive NPV even with a double-digit financing cost. Note that for the term lender the key issue is priming: with the DIP ahead of it, the term lender recovers 100 percent in the success state (620 − 100 = 520 ≥ 400) but only (330 − 100) / 400 = 57.5 percent in the failure state; its expected recovery is 0.6 × 100% + 0.4 × 57.5% = 83.0 percent, versus 82.5 percent if the firm liquidated at once without DIP. The DIP is marginally better for it (83.0 versus 82.5), which is why such lenders typically consent, and why, if the success probability were any lower, they would object. The break-even probability p* solves p × 400 + (1 − p) × 230 = 330, so p* = 100 / 170 = 58.8 percent; below this the secured lender would prefer immediate liquidation, and a priming fight would result.

A priming DIP is consensual when the probability-weighted improvement in the collateral's value exceeds the amount primed. Without sufficient cushion, priming is contested, and the debtor's best alternative may be a negotiated roll-up in which prepetition lenders provide the DIP themselves.

### 19.6.3 Related features

Critical vendor payments, administrative priority for goods delivered shortly before filing, and court-approved use of cash collateral are other places where the Code adjusts priority to protect going-concern value; in practice they are settled in negotiated first-day orders.

## 19.7 Negotiating and Confirming a Plan

### 19.7.1 The shape of a plan

A plan has four parts: the **classification** of claims; the **treatment** of each class (cash, new debt, new equity, warrants, litigation trust interests); the **new capital structure** and governance of the emerged firm; and the **releases and injunctions** that protect parties. The plan must be feasible: the emerged firm's leverage must be sustainable. Exit financing (term loan or notes issued at emergence) often repays the DIP in cash and provides distributions to secured claims.

### 19.7.2 Worked plan: who gets the equity?

**Example 19.8 – Plan construction for Meridian.** Plan value is 620 million. The exit financing is a new 250 million term loan (about 3.1 times normalized EBITDA of 80, a leverage level the firm can service with interest around 9 to 10 percent and an interest cover of roughly 3.3 times). Proceeds of the new loan repay the 100 million DIP in cash and provide 150 million cash to the existing secured lenders. The remaining equity value of the reorganized firm is:

```
Equity value = Plan value − Exit debt = 620 − 250 = 370
```

Claims by priority:

- DIP: 100 (cash from exit facility): 100%.
- Secured term loan 400: receives 150 cash plus new equity worth 250 to reach par. Equity share to term lenders = 250 / 370 = 67.6%.
- General unsecured (400): the residual equity, 370 − 250 = 120, which is 120 / 370 = 32.4% of the new equity. Recovery = 120 / 400 = 30.0%.
- Subordinated notes and old equity: nothing (value runs out at the unsecured class).

Check: total to prepetition creditors = DIP 100 + term lenders 400 + unsecured 120 = 620, equals plan value. The plan complies with the absolute priority rule: no junior class receives property while a senior dissenting class is unpaid; the unsecured class is the fulcrum.

*Negotiation.* The subordinated holders (150 face) threaten to contest valuation and delay; old equity calls for a higher WACC to be rejected. Suppose the term lenders, who bear the cost of delay, offer to "gift" 5 percent of the new equity to the subordinated class to secure acceptance. Cost of gift = 0.05 × 370 = 18.5 million. If the gift comes from the term lenders' share, their recovery falls from 100 percent to (400 − 18.5) / 400 = 95.4 percent. If it comes from the unsecured class, which is the fulcrum, its recovery falls from 30.0 to (120 − 18.5) / 400 = 25.4 percent. Which class bears the gift is therefore a central question: a gift by the *senior* class to a junior class past an intervening unsecured class would raise a **"gifting"** concern, since the unsecured class would see value flow around it; the gift from the unsecured class to the subordinated class is more standard, being permitted by the intervening class itself. Courts have scrutinized gifting in contested cases.

Every deviation from the waterfall is therefore a transfer measurable in dollars, to be compared with the expected cost of fighting: if litigation and delay would cost the estate 3 percent of value (18.6 million at 620), a gift of equal size is roughly break-even for the class that pays.

### 19.7.3 Dynamics of the negotiation

- **Valuation is the battleground.** As Example 19.5 showed, one point of WACC shifts value by 8 to 15 percent. Classes fully covered at any plausible value are indifferent; the fulcrum class gains from a higher valuation.
- **The waterfall is the bargaining shadow.** Senior classes accept less than par only for speed; junior classes accept little if the alternative is worse; old equity receives a tip when creditors prefer to avoid litigation.
- **Exclusivity and competing plans.** Debtors use exclusivity as a lever; the ability of creditors to propose plans or sponsor a sale reduces it.
- **Sales as an alternative.** A Section 363 sale, often to a stalking horse or a creditor group *credit-bidding* its secured debt, provides market testing of value.
- **New value plans.** Old equity may try to retain ownership by contributing capital; case law has required that such offers be exposed to competing bids.
- **Management incentives.** Retention and post-emergence equity grants are negotiated, with statutory limits on retention payments to insiders.

### 19.7.4 After emergence

Many emerged firms are overleveraged again or fail to fix operations, and return as a "Chapter 22." The CFO should align the exit capital structure with post-plan business risk: a liquidity cushion, covenants that normal volatility will not trip, and a credible operating plan.

## 19.8 Distressed Investing

### 19.8.1 Strategies

Distressed investors pursue several strategies: **passive trading** (buy where market-implied recovery is below one's own estimate); **fulcrum or "loan-to-own"** (buy the class that will receive the equity, often with a blocking position of more than one-third of a class's amount, and negotiate control); **capital structure arbitrage** (long one layer, short another when prices are inconsistent with the Merton relationships of Section 19.5); **rescue financing** (DIP or exit loans earning fees, spreads and warrants); and **claims trading**. Holders who receive non-public information through creditor committees may be restricted from trading, and purchased claims can be challenged if they carry avoidance liabilities, so the strategy requires specialized legal capability.

### 19.8.2 Valuing a distressed claim

The method is scenario analysis. For each outcome (consensual restructuring, prepack, contested case, sale, liquidation) estimate the plan value, run it through the waterfall, convert the recovery into cash and securities at expected value, assign a timing, and discount at a required return. A key discipline: the *expected* recovery depends on the plan value distribution, not a single point estimate, and since recoveries are piecewise-linear in value (Example 19.3), the expected recovery is convex in uncertainty only within a class's range.

**Example 19.9 – Pricing Meridian's senior notes for a distressed investor.** The senior notes (300 face) trade at 40 per 100 face. An investor builds three scenarios over an expected 18-month path to resolution (1.5 years). Recoveries, valued at the time of resolution including the market value of the new equity received:

| Scenario | Probability | Recovery per 100 face |
|---|---|---|
| Consensual prepack, strong turnaround | 25% | 70 |
| Base plan, as in Example 19.8 with a somewhat larger unsecured pool | 45% | 45 |
| Contested case, deteriorating sales | 30% | 15 |

(The recoveries are analyst estimates per 100 face, reflecting judgment about the senior notes' treatment; they are not computed mechanically from the waterfall of Example 19.3, which treats all unsecured claims alike. A real analyst would document this choice.)

Expected recovery:

```
E[R] = 0.25 × 70 + 0.45 × 45 + 0.30 × 15 = 17.5 + 20.25 + 4.5 = 42.25
```

Annualized returns for each scenario from an entry price of 40 over 1.5 years: (R / 40)^(1/1.5) − 1.

```
Strong:   (70/40)^(0.6667) − 1 = 1.75^0.6667 − 1 = 45.2%
Base:     (45/40)^(0.6667) − 1 = 8.2%
Contested:(15/40)^(0.6667) − 1 = −48.0%
Expected: (42.25/40)^(0.6667) − 1 = 3.7%
```

The expected annualized return of 3.7 percent is far below a distressed investor's hurdle of, say, 18 percent. The *maximum price* for an 18 percent return is:

```
P* = 42.25 / 1.18^1.5 = 42.25 / 1.2818 = 32.96
```

So the investor should buy only at about 33 or below, or must have a reason to believe the recovery distribution is better than the market assumes (for example, a blocking position that influences the plan). The break-even recovery at a price of 40 is 40 × 1.2818 = 51.3, above every scenario but the strong one. The return distribution is skewed: the base case earns a modest 8 percent while the contested case loses almost half.

### 19.8.3 Common mistakes in distressed analysis

Ignoring a claim's rank within the legal-entity structure; valuing illiquid new equity at face; underestimating time (an extra year at a 15 percent hurdle costs about 13 percent of value); assuming the waterfall is mechanical when gifts, new-value plans and management incentive plans can redirect value; and failing to model fraudulent transfer, lien perfection and intercreditor litigation.

## 19.9 Strategy for the CFO: Choosing the Process

### 19.9.1 A decision framework

The choice among paths depends on business viability (going-concern versus liquidation value), the dispersion of the capital structure, liquidity runway, availability of DIP financing, contractual constraints such as cross-defaults and change-of-control clauses, and stakeholder positions. In broad terms: amend-and-extend suits mild stress with few lenders; an exchange offer suits a viable business with dispersed bonds; a prepackaged Chapter 11 suits agreed terms with holdout risk; a free-fall Chapter 11 suits complex disputes needing court tools such as lease rejection; a Section 363 sale suits time-sensitive assets with a strong buyer; and liquidation suits economic distress.

### 19.9.2 Governance and people

As insolvency nears, creditors' interests attract greater attention under the duties of directors in many jurisdictions, and directors may face liability for wrongful trading or preferences. Boards add independent restructuring expertise, document their process and obtain solvency opinions. Retention plans, clear communication to customers, and a reliable cash forecast are the CFO's levers; forecast accuracy, not optimism, earns flexibility.

## 19.10 Cross-Jurisdiction Differences (Stated Cautiously)

Insolvency laws vary and are frequently reformed. The contrasts below are general and must be checked against current law and local counsel.

- **United States.** Debtor-in-possession model, automatic stay, class voting, cramdown with the absolute priority rule, strong DIP and priming tools, Section 363 sales.
- **United Kingdom.** Administration (a collective process led by an insolvency practitioner, often used for business sales) and **schemes of arrangement**, which bind creditors on approval by a majority in number and 75 percent in value of each voting class. A **restructuring plan** procedure introduced in 2020 permits cross-class cramdown if dissenting classes are no worse off than in the relevant alternative and at least one in-the-money class approves, with court discretion over how benefits are shared; priority is thus applied by a different test from the US rule.
- **Continental Europe.** Regimes vary by country. Influenced by a European Union directive on preventive restructuring, many states now allow plans to bind dissenters through class voting and cross-class cramdown subject to a best-interests test and some priority rule (absolute in some states, relative in others).
- **Asia and elsewhere.** Systems range from court-supervised rehabilitation to liquidation-oriented regimes; the reliability of security enforcement and the speed of courts affect recoveries, and several jurisdictions have recently modernized.
- **Cross-border cases.** The UNCITRAL Model Law on Cross-Border Insolvency, adopted in many jurisdictions (in the US as Chapter 15), enables recognition of foreign proceedings, but group-wide solutions are treated differently and the debtor's center of main interests matters.

Research associated with La Porta, Lopez-de-Silanes, Shleifer and Vishny links legal origin to creditor protection and debt markets, though the evidence is nuanced and should not be applied mechanically. For a multinational CFO the practical point is to align governing law and the location of assets with the likely restructuring venue.

## Case Study: Harlow Marine Logistics

*(Illustrative scenario. Harlow Marine Logistics is a fictional company.)*

Harlow Marine Logistics operates a fleet of 22 container feeder vessels and two port terminals serving regional trade routes. In the last four years the company borrowed heavily to expand: 520 million in a senior secured credit facility (secured by first mortgages on the vessels and a pledge of the terminal operating companies), 260 million of senior unsecured notes issued by the parent, and 90 million of convertible subordinated notes. Trade payables and accrued claims total about 70 million. A lease on one terminal expires in 18 months, and a customer concentration problem emerged when a major shipping line, accounting for 28 percent of revenue, announced it would move its feeder services in-house at the end of next year.

Charterhire rates, which had been strong, have fallen by about a third, and Harlow's EBITDA is now 95 million against 140 million two years ago. The company has 55 million in cash, a 70 million interest payment due in three months, and a covenant on leverage that will be breached at the next test date. The firm's CFO, Mateo Brandt, reports that independent appraisals value the vessels at 610 million on an orderly sale basis and 430 million in a forced sale; terminal assets are worth about 180 million as going-concern businesses but would fetch only 110 million in a break-up.

A bondholder committee holding 55 percent of the senior unsecured notes has proposed an exchange offer: holders would receive new notes with 65 percent of the face value, secured by a second lien on the terminals, plus 10 percent of the equity. The secured lenders object, arguing that the pledge of the terminal operating companies was given to them and that their lien ranks first. The convertible noteholders have threatened to sue, claiming that the exchange would amount to an improper transfer of value. Employees' representatives have asked for assurances on severance if vessels are sold.

Mateo estimates that a free-fall Chapter 11 would take about 14 months, with professional fees of roughly 45 million, and that a DIP of 80 million would be needed. Harlow's parent is a holding company incorporated in one country while the vessels are flagged elsewhere and the terminals operate in two further jurisdictions; the loan documents are governed by New York law, while the notes' indenture is governed by English law.

Mateo must advise the board whether to proceed with the exchange, prepare a prepackaged filing, or seek a sale of the terminals and a negotiated runoff of the fleet. He must also decide how to value the business: the senior lenders' advisers use 8 times 2026 forecast EBITDA with a distress discount, while the bondholders argue for a higher multiple based on the new cost structure and the fleet's appraisals.

**Discussion Questions**

1. Construct a preliminary waterfall for going-concern value of 700 million and for a forced-sale value of 540 million (430 vessels plus 110 terminals). Ignore the DIP and fees first, then include a DIP of 80 million ranking first and fees of 45 million. Identify the fulcrum security in each case, and explain why the bondholders' proposal to receive a second lien on terminal assets is contentious.
2. Evaluate the exchange offer from the perspective of (a) a senior unsecured bondholder, (b) a secured lender, and (c) a convertible noteholder. What holdout problems are likely, and what contractual provisions would you check (including governing law of the indenture)?
3. How would you test the claim that the business is worth more as a going concern than in liquidation, and which variables (charter rates, customer loss, terminal lease renewal) most affect the valuation? Construct two sensitivity cases for the WACC and the discount rate for the terminal value.
4. Discuss the cross-border dimension: how might the location of assets, the governing law, and the jurisdiction of incorporation affect the choice between an out-of-court exchange, a US Chapter 11 and a local procedure? What additional information would you want from counsel?

## Key Takeaways

- Financial distress (a viable firm with the wrong balance sheet) and economic distress (a firm worth more dead than alive) call for different responses; comparing going-concern and liquidation values with total claims is the first diagnostic.
- Indirect costs of distress (lost customers, supplier tightening, underinvestment, risk shifting) typically exceed direct professional costs; expected distress cost equals probability times loss and rises convexly with leverage.
- The absolute priority rule sets the baseline order of payment (secured, administrative, unsecured, subordinated, equity) and is the statutory test for cramdown; actual negotiated outcomes often deviate, but always in its shadow.
- The fulcrum security is the class in which value runs out; it receives the equity of the reorganized firm and is the true economic owner during the case.
- Reorganization value is the pivotal number: because terminal value dominates, a one-point change in WACC can move enterprise value by 8 to 15 percent and shift the fulcrum class's recovery by tens of percentage points.
- Equity is a call option on the firm's assets (Merton); it retains value even when assets are below debt, which explains the nuisance value that old equity commands and its preference for risk.
- DIP financing is a high-priority, short-duration loan that buys going-concern value; priming is consensual when the probability-weighted improvement in collateral value exceeds the amount primed.
- Out-of-court exchanges suffer from holdout incentives; exit consents, seniority enhancement, participation conditions and a prepackaged-filing backstop restructure incentives so that tendering dominates.
- Distressed investing is scenario analysis: compute expected recovery, time to resolution, and the maximum price for the required return; most distressed trades are unattractive at observed prices unless the investor has an informational or control advantage.
- Insolvency regimes differ in process, priority tests, and creditor protection; a lender's expected recovery depends on the efficiency of the regime as well as on contractual rank, and cross-border groups must plan the venue early.

## Review Questions

1. Distinguish economic distress from financial distress. How would a CFO test which one applies, and why does the distinction matter for the choice of process?
2. List the direct and indirect costs of financial distress. Which are most important for a consumer durables retailer and which for a software company with long-term customer contracts?
3. Explain debt overhang and risk shifting. How does each distort investment decisions of a distressed firm's management, and how do creditors respond?
4. State the absolute priority rule. In what sense is it a rule for cramdown rather than a requirement for every plan, and why does it matter even for consensual plans?
5. What is a fulcrum security? Using the waterfall in Example 19.3, identify the fulcrum at distributable values of 450, 620 and 900 million.
6. Why does a deficiency claim arise, and how does it change the recoveries of the unsecured class?
7. Why do bond exchange offers face holdout problems more than bank restructurings? Describe two contractual devices that mitigate them.
8. Explain, using the Merton model, why equity can have positive value when firm assets are less than the face value of debt, and why equity prefers higher volatility.
9. What protections does the Bankruptcy Code give a DIP lender? Under what conditions would prepetition secured lenders consent to being primed?
10. Describe three ways in which insolvency regimes differ across jurisdictions that matter to a lender's expected recovery, and explain why such statements should be treated cautiously.

## Problems

1. **Distress trade-off.** A firm with unlevered value 800 million, tax rate 30 percent (permanent debt), and distress cost 30 percent of firm value has the following probabilities of distress: debt 100 → 1%; 200 → 3%; 300 → 8%; 400 → 18%. Compute the net benefit of debt at each level and identify the optimal level among these.
2. **Z-score.** A manufacturer has X1 = 0.10, X2 = 0.05, X3 = 0.06, X4 = 0.35, X5 = 0.90. Compute Altman's Z using the coefficients in Section 19.1.3 and classify the result using the 1.8 and 3.0 cut-offs.
3. **Waterfall.** A firm has a DIP of 60, a first-lien loan of 250, a second-lien loan of 100 (secured only on the same collateral, ranking behind the first lien), general unsecured claims of 300 and equity. Compute recoveries (amount and percent) at distributable values of 280, 400 and 520, and identify the fulcrum class in each case.
4. **Reorganization value.** Free cash flows are 20, 25, 30, 33 and 35 for years 1 to 5 with terminal growth 2.5 percent and WACC 12 percent. Compute enterprise value, the terminal value share, and the EV at WACC 10 percent.
5. **Merton equity.** Assets V = 500, debt face D = 600 due in 2 years, r = 3%, σ = 40%. Compute d1, d2, equity value (call) and debt value. (Use N(x) values from a standard normal table or software.)
6. **DIP economics.** A DIP of 50 carries a 2.5 percent fee and 11 percent interest for 12 months. Liquidation yields 180; going concern value 300 with probability 70 percent of success (else liquidation at 180). Prepetition secured debt is 220. Compute the DIP cost, the expected distributable value with and without the DIP (ignoring the DIP cost in the failure branch), and the prepetition lender's expected recovery in each case, assuming that in the failure branch the DIP of 50 is repaid first.
7. **Exchange offer.** Old notes: 5-year 6 percent annual coupon, par 100. Exchange: 60 face of new 5-year 6 percent secured notes per 100 old, new notes discounted at 9 percent. A holdout's value if the exchange succeeds: yield of 22 percent. Compute the value of tendering, the value of holding out, and the premium for tendering.
8. **Distressed claim.** A bond trades at 35. Scenarios over 2 years: 20% probability recovery 80; 50% probability recovery 40; 30% probability recovery 5. Compute expected recovery, expected annualized return from price 35, and the maximum price for a 20 percent annual return.

### Answers to Selected Problems

1. Net benefit = 0.30·D − p × 0.30 × 800 (cost = 240p). D = 100: 30 − 2.4 = 27.6; D = 200: 60 − 7.2 = 52.8; D = 300: 90 − 19.2 = 70.8; D = 400: 120 − 43.2 = 76.8. The highest net benefit among these grid points is at D = 400.
2. Z = 1.2(0.10) + 1.4(0.05) + 3.3(0.06) + 0.6(0.35) + 1.0(0.90) = 0.120 + 0.070 + 0.198 + 0.210 + 0.900 = 1.498, below 1.8: high distress risk.
3. Value 280: DIP 60 (100%), first lien 220 of 250 (88.0%), nothing below; fulcrum is the first lien. Value 400: DIP 60, first lien 250 (100%), second lien 90 of 100 (90%), unsecured 0; fulcrum is the second lien. Value 520: 60 + 250 + 100 = 410, leaving 110 for unsecured of 300: 36.7%; fulcrum is general unsecured.
4. At 12%: PVs 17.857, 19.930, 21.353, 20.972, 19.860 sum to 99.97; TV = 35 × 1.025 / 0.095 = 377.63; PV(TV) = 214.28; EV = 314.2; terminal share 68.2%. At 10%: PVs sum to 105.65; TV = 35.875 / 0.075 = 478.33; PV = 297.0; EV = 402.7.
5. σ√T = 0.5657; d1 = [ln(500/600) + (0.03 + 0.08) × 2] / 0.5657 = (−0.18232 + 0.22) / 0.5657 = 0.0666; d2 = −0.4991. N(d1) ≈ 0.5266, N(d2) ≈ 0.3088. PV(D) = 600 × e^(−0.06) = 565.06. E = 500 × 0.5266 − 565.06 × 0.3088 = 263.3 − 174.5 = 88.8 (approximately). Debt = 500 − 88.8 = 411.2.
6. DIP cost = 50 × 0.025 + 50 × 0.11 × 1 = 1.25 + 5.50 = 6.75. Without DIP: liquidation 180. With DIP: 0.70 × 300 + 0.30 × 180 = 210 + 54 = 264 (before the DIP cost; net of 6.75 is 257.25). Prepetition lender with DIP: success: 300 − 50 = 250 ≥ 220, so 100%; failure: 180 − 50 = 130, recovery 130 / 220 = 59.1%. Expected = 0.7 × 100 + 0.3 × 59.1 = 87.7%. Without DIP: 180 / 220 = 81.8%.
7. Package: 0.60 × [6 × 3.8897 + 100 × 0.64993] = 0.60 × (23.34 + 64.99) = 0.60 × 88.33 = 53.0. Holdout if the exchange succeeds: 6 × 2.8636 + 100 × 0.37000 = 17.18 + 37.00 = 54.18. Holding out beats tendering by about 1.2 per 100, so this offer is too weak to dominate; the issuer would need a larger new face amount or an equity sweetener.
8. E[R] = 0.2 × 80 + 0.5 × 40 + 0.3 × 5 = 16 + 20 + 1.5 = 37.5. Annualized return = (37.5 / 35)^(1/2) − 1 = 1.0714^0.5 − 1 = 3.5%. Maximum price = 37.5 / 1.2² = 37.5 / 1.44 = 26.04.
