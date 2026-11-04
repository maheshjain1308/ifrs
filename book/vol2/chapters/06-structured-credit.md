# Chapter 6: Securitization, Structured Credit and CLOs

## Learning Objectives

After studying this chapter, you should be able to:

- Explain the legal and economic structure of a securitization, including the role of the special purpose vehicle, true sale, bankruptcy remoteness and the servicer, and the motives for issuers and investors.
- Analyse the cash flows of an asset-backed security, including amortisation, prepayment (CPR and SMM) and weighted average life.
- Allocate pool losses across tranches using attachment and detachment points, and model sequential and pro-rata waterfalls with interest and principal priorities and performance triggers.
- Evaluate forms of credit enhancement (subordination, overcollateralisation, excess spread, reserve accounts) and measure how each protects senior investors.
- Explain how default correlation drives tranche value, and compute tranche expected losses using a one-factor Gaussian copula.
- Describe CLO structure and economics, compute equity returns and coverage tests, and summarise how rating agencies size credit enhancement and what lessons the structured-credit crises teach managers and investors.

## Opening Vignette

*(Illustrative scenario; the company and its figures are fictional.)*

Alder Auto Finance lends to buyers of used cars. The company has a loan book of $900 million, a funding cost that rises whenever credit markets wobble, and a capital base that limits how fast it can grow. Its CFO, Priya Raman, is weighing a proposal from the treasury team: package $400 million of seasoned auto loans into a securitization.

The proposal is straightforward on paper. The loans would be sold to a newly created trust, which would fund the purchase by issuing three classes of notes to institutional investors. The senior class, 78% of the issue, would carry a top rating and a coupon barely above the swap rate. A middle class of 12% would be rated in the single-A to BBB range. The residual 10% of the structure, the equity or "first-loss" piece, Alder would keep.

Priya sees obvious advantages. Alder would be funding most of its loans at a rate far below its unsecured borrowing cost, because investors would be buying exposure to the loans' cash flows rather than to Alder's balance sheet. She would receive cash up front, lend again and earn servicing fees. But she also sees questions she cannot answer by instinct. If the senior notes are rated AAA, and the loans themselves are risky subprime-adjacent credits, where does the safety come from? Why would investors accept a 10% cushion rather than 5% or 25%? What happens to the equity piece if losses are twice what Alder's historical data show? And what, if anything, has the market learned from securitizations that went badly wrong in the past?

The head of structured finance, Tomas Idowu, answers with a whiteboard sketch of a waterfall: cash flows pour into the top bucket first and overflow only when each bucket is full, while losses fill buckets from the bottom. "The safety is arithmetic and correlation," he says. "The arithmetic we can compute today. The correlation is where people get hurt." This chapter provides the tools to do both.

## 6.1 The Logic of Securitization

### 6.1.1 From balance sheet to capital markets

**Securitization** transforms a pool of illiquid financial assets (loans, leases, receivables, mortgages) into tradable securities whose payments are funded by the cash flows from that pool. The basic structure has five elements:

1. The **originator** (or sponsor) creates the assets: a bank, auto lender, credit card issuer, equipment lessor or corporate lender.
2. The assets are sold to a **special purpose vehicle (SPV)**, also called a special purpose entity, trust or issuer. The SPV is legally separate from the originator and has no business except to hold the assets and issue securities.
3. The SPV issues **notes** in several classes, called tranches, with different priorities of payment and different risk and return.
4. A **servicer**, often the originator, collects payments from borrowers, pursues delinquent accounts and reports to investors. A **trustee** safeguards investor interests and distributes cash according to the documents.
5. **Credit rating agencies** assess the tranches, and **investors** (pension funds, insurers, banks, asset managers) buy them.

The central legal concept is **true sale** and **bankruptcy remoteness**. If the transfer of assets to the SPV is a true sale, the assets are not part of the originator's estate if the originator becomes insolvent, and creditors of the originator cannot reach them. Investors therefore bear the risk of the *pool*, not the risk of the originator. This is the foundation of the claim that a securitization can achieve a better credit rating than its sponsor. It is also why the analysis of the servicer (operational risk and replacement) and of legal opinions matter: if the legal separation fails, the structure's rating collapses to that of the originator.

### 6.1.2 Why issuers securitize

An originator securitizes for some mix of the following reasons:

- **Cheaper funding.** Because senior notes are backed by a diversified pool and protected by credit enhancement, they can be rated more highly than the originator and funded at a lower spread. This is not a free lunch, as the originator keeps the residual risk and must pay for the structure, but when the originator is lower-rated than its assets' senior tranche, the funding saving is real.
- **Diversification of funding sources.** Securitization opens a market of investors with a taste for specific risk (for example, investors who want auto-loan exposure but not the exposure to the corporate sponsor).
- **Balance sheet and capital relief.** If the transfer qualifies for derecognition under IFRS 9 (substantial transfer of risks and rewards, or loss of control) and for significant risk transfer under bank regulation, the assets leave the balance sheet and capital requirements fall. Retention of the first-loss piece often limits this relief, because the first-loss piece contains most of the expected loss.
- **Liquidity and growth.** Cash is received upfront rather than over the life of the loans, allowing faster lending.
- **Revenue recognition and servicing income.** The originator may retain servicing and excess spread.

### 6.1.3 Why investors buy

Investors gain access to specific risk exposures, usually with a yield pick-up relative to corporate bonds of the same rating, and a choice of tranches along a risk spectrum: senior notes for low-risk, floating-rate, high-rated assets; mezzanine for higher spread; equity for high yield and exposure to excess spread. Banks and insurers like senior tranches because, historically, regulatory capital charges for highly-rated securities were low relative to yield. This reaching for yield and regulatory arbitrage, and the dependence on ratings, are important parts of the story told in Section 6.8.

### 6.1.4 The balance-sheet view

Securitization does not create value by magic. What it does is allocate the cash flows and risks of a pool to the investors best placed to bear them, subject to frictions. If markets were perfect (the Modigliani-Miller setting of Volume 1, Chapter 15), securitization would be irrelevant: the total value of the securities would equal the value of the pool. Value arises from market frictions: differences in funding costs, regulatory capital rules, investor segmentation (some investors can hold only AAA paper), information asymmetries about the originator, and tax and accounting treatment. Managers should recognise the corollary that where securitization appears to create value only through ratings or regulatory treatment, the apparent value can disappear when those rules or opinions change.

## 6.2 ABS Mechanics: Asset Pools, Amortisation and Prepayment

### 6.2.1 Asset classes and cash flow patterns

Pools differ in the way they generate cash:

- **Amortising pools** (auto loans, equipment leases, mortgages, student loans) return principal and interest on a schedule. The cash flows of the notes are a function of the pool's scheduled amortisation, prepayments, defaults and recoveries.
- **Revolving pools** (credit cards, trade receivables, dealer floorplan) have short-lived assets that turn over. During a **revolving period**, principal collections are used to buy new receivables so that the pool balance stays constant; after the revolving period ends, an **amortisation period** begins and principal flows to noteholders. **Early amortisation triggers** (for example, a decline in excess spread below a threshold) end the revolving period early to protect investors.
- **Managed pools** (CLOs) are actively traded by a collateral manager within rules.

Asset-backed securities (ABS) typically describe consumer and commercial non-mortgage assets, **residential mortgage-backed securities (RMBS)** are secured by home loans, and **commercial mortgage-backed securities (CMBS)** by commercial property loans, which are generally non-amortising loans with balloon repayments.

### 6.2.2 Prepayment

Borrowers can usually repay early, and they do so for reasons that vary from refinancing (when interest rates fall) to sale of the asset to default-driven liquidation. Prepayment speed matters because it determines the timing of principal and thereby the **weighted average life (WAL)** of the notes and the amount of interest earned by the pool.

Prepayment speed is quoted as a **conditional prepayment rate (CPR)**: the annualised fraction of the pool's outstanding balance, after scheduled payments, that prepays. For monthly pools the **single monthly mortality (SMM)** converts CPR into a monthly rate:

```
SMM = 1 − (1 − CPR)^(1/12)
```

A CPR of 12% corresponds to SMM = 1 − 0.88^(1/12) = 1.0596% per month. A CPR of 6% gives SMM = 0.514%, and CPR 24% gives SMM = 2.261%. The standard industry benchmark for mortgages is the PSA curve, which ramps CPR from 0 to 6% over the first thirty months and holds it there; speeds are quoted as a percentage of PSA. For other asset types, prepayment is quoted in the ABS speed (ABS) convention as a percentage of the original balance.

The WAL of a tranche or pool is

```
WAL = Σ t × (principal received at t) / Σ (principal received)
```

**Example 6.1 – Prepayment and weighted average life.** A pool has an initial balance of 100, five annual level payments, and a loan rate of 8%. Compute the WAL with no prepayment, with a CPR of 10% and with a CPR of 25%.

*Step 1: no prepayment.* The level payment on a balance B with k payments remaining is B × 0.08 / (1 − 1.08^(−k)). With B = 100 and k = 5, the payment is 25.05. Interest in year 1 is 8.00, so scheduled principal is 17.05. The balance then falls to 82.95. Repeating:

| Year | Beginning balance | Interest | Principal |
|---|---|---|---|
| 1 | 100.00 | 8.00 | 17.05 |
| 2 | 82.95 | 6.64 | 18.41 |
| 3 | 64.55 | 5.16 | 19.88 |
| 4 | 44.66 | 3.57 | 21.47 |
| 5 | 23.19 | 1.86 | 23.19 |

*Step 2: WAL, no prepayment.* WAL = (1×17.05 + 2×18.41 + 3×19.88 + 4×21.47 + 5×23.19) / 100 = (17.05 + 36.82 + 59.64 + 85.88 + 115.95) / 100 = 3.154 years.

*Step 3: CPR 10%.* In each year, prepayment equals 10% of the balance remaining after scheduled principal, and the payment is recomputed on the new balance. Year 1: scheduled principal 17.05, prepayment 0.10 × (100 − 17.05) = 8.30, total principal 25.34, ending balance 74.66. Year 2: interest 5.97, scheduled principal 16.57, prepayment 5.81, total 22.38, ending balance 52.28. Year 3: scheduled 16.10, prepayment 3.62, total 19.72, ending 32.56. Year 4: scheduled 15.65, prepayment 1.69, total 17.34, ending 15.22. Year 5: 15.22. WAL = (25.34 + 2×22.38 + 3×19.72 + 4×17.34 + 5×15.22)/100 = (25.34 + 44.76 + 59.16 + 69.36 + 76.10)/100 = 2.747 years.

*Step 4: CPR 25%.* The same procedure gives a WAL of 2.247 years.

*Interpretation.* Faster prepayment shortens the average life from 3.15 to 2.75 and then 2.25 years, and reduces total interest earned by the pool. For an investor holding a discount note, faster prepayment accelerates the return of the discount and raises yield; for a premium note it is the opposite. Prepayment is also *correlated with interest rates* (and so with the environment in which reinvestment is least attractive). That negative convexity is the defining feature of mortgage securities, and it is why tranches are often sold on the basis of a WAL under a stated prepayment speed rather than a legal maturity alone.

### 6.2.3 Defaults, delinquencies and the loss timing curve

Defaults on amortising pools rise during the first years of seasoning, peak, and decline as the pool seasons and balances fall. Rating agencies and investors therefore use **cumulative net loss (CNL)** curves expressed as a percentage of the original balance, with a typical loss-timing pattern, and monitor **delinquency** (30, 60, 90 days past due), **charge-offs** and **recoveries**. Performance is compared against the vintage's expected curve: if a vintage's cumulative loss is running above the expected path at a given age, the final loss will probably exceed expectations, and structural triggers are designed to react.

## 6.3 Tranching and the Cash Flow Waterfall

### 6.3.1 Attachment and detachment

Tranching allocates the pool's credit losses by seniority. Each tranche is defined by an **attachment point** A (the cumulative pool loss, as a percentage of pool balance, at which the tranche begins to lose) and a **detachment point** D (the cumulative pool loss at which the tranche is wiped out). The **thickness** of the tranche is D − A. If the cumulative pool loss is L (as a fraction of the original pool balance), the loss to a tranche, as a fraction of the tranche's size, is

```
Tranche loss fraction = min( max(L − A, 0), D − A ) / (D − A)
```

**Example 6.2 – Loss allocation across tranches.** A $100 million pool is divided into: a **senior** tranche with attachment 25% and detachment 100% ($75 million), a **mezzanine** tranche with attachment 10% and detachment 25% ($15 million), and an **equity** tranche with attachment 0% and detachment 10% ($10 million). Compute the tranche losses when cumulative pool losses are 4%, 12%, 20% and 30%.

*Equity (0%-10%).* Loss fraction = min(max(L, 0), 10%)/10%.
*Mezzanine (10%-25%).* Loss fraction = min(max(L − 10%, 0), 15%)/15%.
*Senior (25%-100%).* Loss fraction = min(max(L − 25%, 0), 75%)/75%.

**Table 6.1 – Tranche losses by pool loss scenario.**

| Cumulative pool loss | Equity loss ($m / % of tranche) | Mezzanine loss ($m / %) | Senior loss ($m / %) |
|---|---|---|---|
| 4% ($4m) | 4.0 / 40.0% | 0.0 / 0.0% | 0.0 / 0.0% |
| 12% ($12m) | 10.0 / 100% | 2.0 / 13.3% | 0.0 / 0.0% |
| 20% ($20m) | 10.0 / 100% | 10.0 / 66.7% | 0.0 / 0.0% |
| 30% ($30m) | 10.0 / 100% | 15.0 / 100% | 5.0 / 6.7% |

*Interpretation.* Losses always sum to the pool loss ($4m, $12m, $20m, $30m in the four rows). A pool loss of 20%, three or four times what a conservative underwriter would expect for a prime pool, still leaves the senior tranche untouched. The senior notes lose only after the 25% attachment point is breached, and then 5 on 75 is 6.7%. Equity is wiped out in any scenario with losses of 10% or more. This is the essence of tranching: the same pool produces a security that is nearly riskless in most scenarios and a security that behaves like a deep out-of-the-money put sold to the pool's investors. Like options (Volume 1, Chapter 18), each tranche is a call spread on the pool's loss: a long position in the first dollar of loss above A and a short position above D.

### 6.3.2 The waterfall

The **waterfall** (priority of payments) defines how collections are distributed each period. A typical structure has separate rules for interest and principal:

*Interest waterfall:*
1. Senior fees: trustee, servicer.
2. Interest on the Class A (senior) notes.
3. Interest on the Class B (mezzanine) notes.
4. (Optionally) replenish reserve account.
5. Remaining excess spread released to the residual holder (equity), *if performance tests are passed*; otherwise diverted to repay principal.

*Principal waterfall:*
1. **Sequential pay:** all principal to Class A until it is fully repaid, then to Class B, then to the equity. In **pro rata pay**, principal is shared among classes in proportion to their balance; many deals pay pro rata while performance is good and switch to sequential if triggers are breached.

Sequential pay protects the senior notes: their balance falls fastest, and their credit enhancement (the ratio of junior notes to the remaining pool) grows over time. Pro rata keeps the enhancement percentage constant and is more favourable to junior holders.

**Triggers** are performance tests that change the waterfall. The most common are **overcollateralisation (OC) tests**: the ratio of pool balance to the balance of the notes at or above a given class, compared with a minimum. If a class fails its test, excess interest that would have gone to the equity is diverted to repay senior principal until the test is cured. Interest-coverage tests work similarly. The effect is a self-correcting mechanism: deterioration of the pool automatically strengthens the position of the senior holders at the expense of the junior and residual holders.

**Example 6.3 – A four-year waterfall with triggers.** A trust holds a pool of $100 million at inception. Terms:

- The pool pays interest at 8% (WAC) on its performing balance. It amortises straight-line: scheduled principal each year equals the performing balance after defaults divided by the number of years remaining (including the current year).
- A servicing fee of 0.50% of the beginning performing balance is paid first.
- Notes: Class A $70m at 5%; Class B $20m at 7%; Equity $10m (residual).
- Defaults occur at the start of each of years 1 to 3 as a fixed percentage of the *original* pool balance. Defaulted loans pay no interest; recoveries of 50% of the defaulted balance are received in the same year as principal collections.
- Principal collections (scheduled plus recoveries) are paid *sequentially* to A, then B.
- **OC trigger:** if the performing balance after defaults divided by (A + B notes outstanding) is below 1.05, any interest remaining after paying fees and note interest is diverted to repay principal (A first, then B), rather than released to equity.

*Step 1: no defaults.* Year 1: interest 8.00; fee 0.50; Class A interest 3.50; Class B interest 1.40; excess spread 2.60. OC = 100/90 = 1.111, above 1.05, so 2.60 goes to equity. Scheduled principal is 100/4 = 25.00, all to A (A falls from 70 to 45). Year 2: performing balance 75, interest 6.00, fee 0.38, A interest 2.25, B interest 1.40, excess 1.97 to equity; principal 25 to A (A = 20). Year 3: performing balance 50, interest 4.00, fee 0.25, A interest 1.00, B interest 1.40, excess 1.35 to equity; principal 25: A repaid 20, B repaid 5 (B = 15). Year 4: performing balance 25; interest 2.00, fee 0.125, B interest 1.05, equity interest 0.82; principal 25: B repaid 15, the remaining 10 goes to the equity as residual principal. Equity receives 2.60, 1.97, 1.35 and 10.82: total 16.74 on an investment of 10, an IRR of 18.11%.

*Step 2: 5% annual defaults (cumulative 15% of original, with 7.5 recovered in total).* In year 1, defaults of 5.0 leave a performing balance of 95.0; interest is 7.60; fee 0.50; A and B interest 3.50 and 1.40; excess 2.20. OC = 95/90 = 1.056, which passes, so equity receives 2.20. Principal is 95/4 = 23.75 scheduled plus 2.5 recovery = 26.25 to A. In year 2, after further defaults the performing balance is 66.25 and the OC ratio is 66.25/(43.75 + 20) = 1.039, a **breach**: the 1.36 of excess spread is diverted to repay A rather than going to equity. In year 3 the ratio is 1.036 and 0.62 is diverted. Equity receives nothing in years 2 and 3, and only the final residual of 4.89 in year 4. Equity cash flows are 2.20, 0, 0, 4.89: total 7.09 on 10 invested, an IRR of −10.3%. Notes A and B are both repaid in full.

*Step 3: summary across scenarios.* Table 6.2 reports the outcomes, including the stress with 8% annual defaults both with and without the OC trigger.

**Table 6.2 – Waterfall outcomes by default scenario (cash flows in $ millions).**

| Annual defaults (cumulative) | Equity cash flows, years 1-4 | Equity total | Equity IRR | Loss to Class A | Loss to Class B |
|---|---|---|---|---|---|
| 0% (0%) | 2.60, 1.97, 1.35, 10.82 | 16.74 | 18.1% | 0 | 0 |
| 2% (6%) | 2.44, 1.73, 1.03, 7.60 | 12.80 | 8.5% | 0 | 0 |
| 5% (15%) | 2.20, 0, 0, 4.89 | 7.09 | −10.3% | 0 | 0 |
| 8% (24%), trigger on | 0, 0, 0, 1.44 | 1.44 | −38.4% | 0 | 0 |
| 8% (24%), no trigger | 1.96, 0.99, 0.08, 0 | 3.03 | −54.8% | 0 | 2.00 |
| 12% (36%), trigger on | 0, 0, 0, 0 | 0 | −100% | 0 | 5.79 |

*Interpretation.* Three results are worth stressing. First, with 24% cumulative defaults and 50% recovery, the pool loses 12% of its balance, which is more than the 10% equity cushion. Both A and B nevertheless suffer no loss in the trigger-on case, because diverted excess spread and sequential principal restored the collateral cushion. Second, the same scenario *without* the trigger shows the equity receiving $3.03 million that the senior structure needed, and Class B finishing short by $2.00 million. The trigger redirected about $1.6 million of equity cash flow (3.03 versus 1.44) into early note repayment, which was enough to make Class B whole. Third, equity returns are extremely sensitive to defaults: a move from 2% to 5% per year turns an 8.5% IRR into a 10.3% loss. The equity is a leveraged claim on the pool's excess spread, and the leverage cuts both ways.

> **Common mistake.** Treating the credit rating of a senior tranche as independent of the waterfall. The rating is a statement about a specific *document*: priority rules, triggers, cure mechanics and the servicer's behaviour. Two pools with identical collateral can produce tranches of very different safety.

## 6.4 Credit Enhancement

### 6.4.1 Forms of enhancement

**Credit enhancement** is any feature that raises the probability that senior investors are paid in full. It can be internal (provided by the structure itself) or external (provided by a third party).

**Subordination.** Junior tranches absorb losses before senior tranches. The senior tranche's credit enhancement equals the combined size of the tranches below it, as a percentage of the pool. In Example 6.2, Class A has 25% subordination.

**Overcollateralisation (OC).** The pool balance exceeds the notes' balance. For instance, $105 million of loans supporting $100 million of notes gives 5% OC. OC absorbs losses first, ahead of any note, and it can build over time if excess spread is trapped to pay down notes faster than the pool amortises.

**Excess spread.** The difference between the interest earned on the pool and the sum of note interest and fees. It is the first line of defence, absorbing loss on a current basis before any principal shortfall arises. In Example 6.3 it is 2.60 in year 1 (2.6% of the pool) before defaults. A transaction with 4% excess spread and an average life of 2 years can absorb roughly 8% of cumulative losses by excess spread alone, if the spread is retained.

**Reserve accounts.** Cash set aside at closing or funded from excess spread, used to cover interest shortfalls or principal losses. Liquidity reserves protect against timing mismatches between collections and payments.

**Triggers and early amortisation.** As in Section 6.3, performance triggers redirect cash flows toward senior holders.

**External enhancement.** Bond insurance (monoline guarantees), letters of credit and parent guarantees. These substitute the credit of the guarantor for that of the pool and introduce counterparty exposure to the guarantor, a vulnerability that surfaced in the monoline insurers' difficulties during the credit crisis.

**Hedges.** Interest rate swaps convert fixed-rate collateral to floating or vice versa to match the notes, and currency swaps handle cross-currency pools. The swap counterparty adds counterparty risk, mitigated by rating triggers and collateral posting.

### 6.4.2 Diversification and the limits of independence

Why can a pool of risky loans support a safe senior tranche? The answer rests on diversification. If defaults are independent, the proportion of the pool that defaults concentrates tightly around its expectation, and the chance of a large loss becomes negligible.

Consider a pool of 100 equal loans, each with a default probability of 5%, independent. The number of defaults is binomial with n = 100 and p = 0.05; the mean is 5 and the standard deviation is √(100 × 0.05 × 0.95) = 2.18. Then:

```
P(10 or more defaults) = 2.82%
P(15 or more defaults) = 0.0136%
P(20 or more defaults) = 0.00001%
```

Under independence, the chance of a loss large enough to hit a tranche attaching at 15% (15 defaults, with zero recovery) is about one in 7,000. The senior tranche looks like a super-safe security. The weakness is the independence assumption: if defaults share common risk drivers (house prices, the business cycle, a single industry), the number of defaults is highly dispersed, and the probability of an extreme outcome is many orders of magnitude larger. The next section quantifies this.

## 6.5 Correlation and the Valuation of Tranches

### 6.5.1 The Gaussian copula

Tranche valuation requires the joint distribution of defaults, not just individual default probabilities. The market standard from the early 2000s is the **one-factor Gaussian copula**, introduced by David Li and building directly on Vasicek's loan-portfolio model (Chapter 5, Section 5.8). Each obligor i has a latent variable

```
Zᵢ = √ρ · M + √(1 − ρ) · εᵢ
```

where M is a common (systematic) factor and εᵢ an independent idiosyncratic factor, both standard normal. Obligor i defaults over the horizon if Zᵢ < c = Φ⁻¹(PD). Conditional on M = m, defaults are independent with probability

```
PD(m) = Φ( [ c − √ρ · m ] / √(1 − ρ) )
```

In a large homogeneous pool the loss rate given m converges to LGD × PD(m). The **expected loss on a tranche** [A, D] is therefore obtained by integrating over the distribution of M:

```
E[ tranche loss ] = ∫ φ(m) · min( max(LGD · PD(m) − A, 0), D − A ) dm
```

with φ the standard normal density, and the expected loss fraction is this divided by (D − A).

The parameter ρ is the **asset correlation**. It controls how much of the risk is systematic: when ρ = 0, defaults are independent and the pool's loss rate is deterministic at LGD × PD; when ρ is high, the pool loss rate swings widely with M.

**Example 6.4 – Tranche expected loss and correlation.** A very large homogeneous pool has a cumulative PD of 5% over the life of the deal and LGD of 60%, so the pool's expected loss is 3.0%. Tranches are Equity (0-10%), Mezzanine (10-25%) and Senior (25-100%) as in Example 6.2. Compute each tranche's expected loss as a percentage of tranche size for ρ = 0, 10%, 30% and 50%.

*Step 1: set up.* c = Φ⁻¹(0.05) = −1.6449. For each ρ, calculate pool loss L(m) = 0.60 × Φ( (−1.6449 − √ρ · m) / √(1 − ρ) ) over a fine grid of m from −8 to 8 and integrate the tranche payoff with weights φ(m) dm.

*Step 2: the ρ = 0 case.* PD(m) = 5% for all m, so L = 3.0% always: equity loses 3.0/10 = 30% of its notional with certainty; mezzanine and senior lose nothing.

*Step 3: ρ = 30% illustration.* At the worst 1% of the factor (m = −2.326), PD(m) = Φ( (−1.6449 + 0.5477 × 2.326) / 0.8367 ) = Φ( (−1.6449 + 1.2740) / 0.8367 ) = Φ(−0.4433) = 32.9%, so pool loss L = 0.60 × 32.9% = 19.7%, which would wipe out the equity and put 9.7 points of loss through the mezzanine tranche. At m = −3.09 the pool loss is above 25%, and the senior tranche begins to take losses.

*Step 4: numerical results.*

**Table 6.3 – Tranche expected loss (percentage of tranche notional) as asset correlation varies. Pool PD 5%, LGD 60%.**

| Asset correlation ρ | Equity (0-10%) | Mezzanine (10-25%) | Senior (25-100%) |
|---|---|---|---|
| ≈ 0 (independent) | 30.00% | 0.000% | 0.000% |
| 10% | 29.80% | 0.134% | 0.000% |
| 30% | 26.70% | 2.084% | 0.023% |
| 50% | 22.24% | 4.229% | 0.189% |

*Step 5: check.* The weighted sum of tranche expected losses should equal the pool's expected loss of 3.0% (in pool dollars) at every correlation. At ρ = 30%: 0.10 × 26.70% + 0.15 × 2.084% + 0.75 × 0.023% = 2.670% + 0.313% + 0.017% = 3.000%. At ρ = 50%: 2.224% + 0.634% + 0.142% = 3.000%. Correlation *redistributes* a fixed expected loss; it does not change it.

*Interpretation.* Rising correlation moves expected loss from the equity tranche to the mezzanine and senior tranches: the senior tranche's expected loss rises from zero to 0.19% of its notional, a tiny number in absolute terms, but a large increase relative to a rating that may be built on loss rates of a few hundredths of a percent. Equity is **long correlation** (its expected loss falls as correlation rises, because when everything defaults together there are more states in which nothing defaults), while senior tranches are **short correlation**. The mezzanine tranche is the most sensitive in relative terms and, in a thin-mezzanine structure, is exposed both to systemic shocks and to idiosyncratic losses.

### 6.5.2 Correlation: unobservable and unstable

The weakness of this valuation approach is that ρ is not observed directly. Its calibration relies on equity correlations, on the correlation implied by quoted index tranche prices (the "base correlation" method), or on regulatory assumptions. Practitioners soon discovered several problems:

- Implied correlation differs across tranches in the same pool (the **correlation smile**), contradicting the single-parameter model.
- Correlation is not constant: in a crisis defaults cluster, and correlations rise sharply, exactly when senior investors depend on diversification.
- The Gaussian copula has no **tail dependence**: extreme joint defaults are less likely than in the real world, where fat-tailed common shocks (a collapse in house prices, a financial panic) make simultaneous failure far more probable.
- Estimates from short histories of benign conditions systematically understate systemic risk.

A manager reading a model that reports a senior tranche as nearly riskless should ask a single question: what happens to the result if correlation doubles or if the common factor has a fat tail? The model's output is an answer to a question about structure; the *trust* placed in it is a question about assumptions.

## 6.6 Collateralised Loan Obligations

### 6.6.1 Structure

A **collateralised loan obligation (CLO)** is a securitization of a managed portfolio of senior secured leveraged loans, typically 150 to 300 obligors across many industries. Unlike a static ABS, a CLO has a **collateral manager** who buys and sells loans within rules, and the structure has a life of roughly twelve years:

- **Ramp-up period:** the manager acquires the portfolio.
- **Reinvestment period** (about four to five years): principal proceeds from repayments and sales are reinvested in new loans, subject to portfolio tests.
- **Amortisation period:** principal is paid to noteholders sequentially, from the most senior class down.
- **Non-call period:** equity holders may typically call (redeem) the deal after a non-call period, giving the equity optionality over the life of the CLO.

The liabilities consist of floating-rate notes in several rated classes (AAA, AA, A, BBB, BB) and a residual **equity** tranche (also called subordinated notes). The assets are floating-rate loans, so interest rate risk is largely absent, and the liabilities are floating-rate as well. Unlike many ABS, the CLO is **cash-flow driven** rather than market-value driven: noteholders depend on cash collections and coverage tests, not on mark-to-market triggers that force asset sales. This design is a key reason that senior CLO tranches have proved resilient in stress.

### 6.6.2 Portfolio tests

CLO documents impose tests on the portfolio, which the manager must comply with:

- **Collateral quality tests:** weighted average rating factor (WARF), weighted average spread (WAS), weighted average recovery rate (WARR), and a diversity score.
- **Concentration limits:** maximum proportion of CCC-rated assets (often 7.5%), second-lien loans, single-obligor and single-industry exposures, and covenant-lite loans.
- **Overcollateralisation (par coverage) tests** and **interest coverage (IC) tests** at each class level. The OC test compares the *adjusted par* of the portfolio (performing par, plus recovery value of defaulted assets, minus haircuts for excess CCC assets and discounted purchases) with the principal balance of the notes at and above each class.

A breach of OC or IC tests diverts interest cash flows away from the equity and from junior-note interest (for the most junior classes, which can have interest deferred) toward repayment of the senior notes until the test is cured. These mechanics are the generalisation of the trigger in Example 6.3.

**Example 6.5 – CLO economics and equity return.** A $500 million CLO portfolio of floating-rate loans has an average spread of 3.75% over the benchmark rate (SOFR, assumed 4.00%). The liability structure and spreads are:

| Class | Size ($m) | Spread over SOFR | Coupon | Annual interest ($m) |
|---|---|---|---|---|
| AAA | 310 | 1.40% | 5.40% | 16.740 |
| AA | 40 | 1.85% | 5.85% | 2.340 |
| A | 30 | 2.40% | 6.40% | 1.920 |
| BBB | 25 | 3.50% | 7.50% | 1.875 |
| BB | 25 | 6.50% | 10.50% | 2.625 |
| Equity | 70 | residual | | |
| **Total** | **500** | | | |

Senior fees and manager fees total 0.45% of assets per year. Compute the equity return with no credit losses, and as the annual portfolio credit loss rises.

*Step 1: asset interest.* The asset coupon is 4.00% + 3.75% = 7.75%, so annual interest on $500 million is $38.75 million.

*Step 2: liability interest.* The sum of the interest column is 16.740 + 2.340 + 1.920 + 1.875 + 2.625 = $25.50 million on $430 million of rated notes, an average cost of 5.93%, or a spread over SOFR of 1.93%.

*Step 3: fees.* 0.45% × 500 = $2.25 million.

*Step 4: equity excess spread with no losses.* 38.75 − 25.50 − 2.25 = $11.00 million. As a percentage of the $70 million equity, the cash yield is 15.71%.

*Step 5: add credit losses.* Assume loss given default is 35% (65% recovery) and the annual default rate on the portfolio is CDR. Then the annual credit loss is 500 × CDR × 0.35.

**Table 6.4 – Equity cash yield as annual default rate rises (unlevered loss, no reinvestment effects).**

| Annual default rate | Annual credit loss ($m) | Equity cash flow ($m) | Equity yield |
|---|---|---|---|
| 0% | 0.00 | 11.00 | 15.71% |
| 1% | 1.75 | 9.25 | 13.21% |
| 2% | 3.50 | 7.50 | 10.71% |
| 3% | 5.25 | 5.75 | 8.21% |
| 4% | 7.00 | 4.00 | 5.71% |
| 6% | 10.50 | 0.50 | 0.71% |

*Step 6: break-even.* Equity cash flow reaches zero when loss equals 11.00, i.e. a default rate of 11.00 / (500 × 0.35) = 6.29% per year.

*Step 7: sensitivities.* At a 2% default rate: if the average asset spread tightens from 3.75% to 3.25% (loan repricing), equity yield falls to 7.14%; if it widens to 4.25%, it rises to 14.29%. If AAA spreads widen by 30 basis points, equity yield falls from 10.71% to 9.39%. Benchmark rates matter in a less obvious way: at SOFR of 2.00% the equity yield is 8.71%, at 4.00% it is 10.71% and at 6.00% it is 12.71%. Assets and rated notes are both floating, but $70 million of the $500 million portfolio is funded by equity, which therefore earns the benchmark rate on its own capital: each 1% rise in SOFR adds $0.70 million, or 1.0 point of equity yield.

*Interpretation.* The equity yield can be decomposed as the benchmark rate plus a spread margin on equity: net spread income is 500 × 3.75% − 430 × 1.93% − 2.25 = 18.75 − 8.30 − 2.25 = $8.20 million, which is 11.71% of the $70 million equity, and adding SOFR of 4.00% gives 15.71%. The margin is levered roughly 7 times (500/70) on a thin portfolio spread. Each 1% of annual default costs 2.5 points of equity yield, and each 10 basis points of asset spread is worth about 0.7 points. CLO equity is therefore sold as a high-yield instrument with embedded optionality (the call right, the ability to reinvest at wider spreads in a downturn, and non-mark-to-market financing), but with large downside in a credit cycle.

The **arbitrage** in a CLO is the gap between asset spread and the weighted cost of liabilities: it persists because the senior notes are priced as AAA-rated securities, with a much lower spread than the loans' risk would imply on a standalone basis, while the equity absorbs the risk and receives the arbitrage. The CLO arbitrage can disappear when loan spreads compress or when liability spreads widen, in which case new-issue volume dries up.

**Example 6.6 – A coverage test under stress.** In the same CLO, cumulative notes at each level are: AAA and AA $350m, A $380m, BBB $405m, BB $430m. The OC trigger levels are 135%, 122%, 114% and 106% respectively. Initial OC ratios are 500/350 = 142.9%, 131.6%, 123.5% and 116.3%. Test the position after the following stress: $45 million of loans have defaulted (assumed recoverable at 50%); performing par is $455 million, of which $80 million is CCC-rated; the CCC bucket limit is 7.5% of $500 million = $37.5 million; and excess CCC loans are marked at 65% of par.

*Step 1: CCC excess.* 80 − 37.5 = $42.5 million; haircut = 42.5 × (1 − 0.65) = $14.875 million.
*Step 2: recovery on defaulted assets.* 45 × 0.50 = $22.5 million.
*Step 3: adjusted par.* 455 − 14.875 + 22.5 = $462.625 million.
*Step 4: tests.*

| Class | Notes at and above | Adjusted OC ratio | Trigger | Result |
|---|---|---|---|---|
| AAA/AA | 350 | 132.2% | 135% | Fail |
| A | 380 | 121.7% | 122% | Fail (marginal) |
| BBB | 405 | 114.2% | 114% | Pass (marginal) |
| BB | 430 | 107.6% | 106% | Pass |

*Step 5: cure.* Interest diverted to repay AAA principal reduces the denominators of all tests but not adjusted par. The AAA test is cured when 462.625 / (350 − x) = 1.35, which requires x = 350 − 342.685 = $7.31 million; the A test requires only x = 0.80. A diversion of about $7.3 million, 1.5% of the portfolio, cures all failures, which is two-thirds of the unstressed annual equity cash flow of $11 million.

*Interpretation.* The stress does not impair any note; it reroutes equity cash flow to repay AAA principal. This is the way a CLO converts credit deterioration into equity pain, and why a CLO equity investor monitors the margin by which tests are passed as closely as the default rate. The CCC haircut is a major channel: the test counts excess CCC loans at market value, so a deterioration of ratings (not just defaults) can divert cash.
