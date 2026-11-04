# Chapter 8: Bank and Insurance Finance and Capital Regulation

## Learning Objectives

After completing this chapter you should be able to:

- Read a bank balance sheet and income statement, compute net interest margin, return on assets, return on equity, and efficiency ratio, and explain how leverage, spread, cost of risk, and cost efficiency combine to produce ROE.
- Measure interest-rate risk in the banking book using repricing gap, deposit betas, and duration gap, and distinguish between earnings-based and economic-value-based views.
- Compute and interpret liquidity metrics (liquidity coverage and net stable funding ratios) and explain why maturity transformation makes banks run-prone.
- Explain, in general terms, how Basel-style regulation defines risk-weighted assets, capital tiers, buffers, and leverage requirements, and compute capital ratios, headroom, and the capital charge from the asymptotic single-risk-factor formula.
- Describe how insurers earn returns from underwriting and investment, estimate loss reserves with the chain-ladder method, and evaluate the effect of reserve error on earnings.
- Explain insurer solvency regimes, aggregate risk modules with correlations, and design a simple stress test for a bank or insurer, interpreting its results for capital planning and for risk-adjusted pricing.

## Opening Vignette

*Illustrative scenario: Lakeshore Financial is a fictional company.*

Lakeshore Financial is a mid-sized regional bank with a small insurance subsidiary. In the early part of a rate-rising cycle, the board hears two very different stories in the same meeting. The head of retail banking reports a record quarter: net interest income has jumped as loan yields have repriced upward faster than deposit costs. Deposits have been sticky, and the bank has had little reason to raise what it pays on checking and savings accounts. Return on equity is the highest in six years.

Then the chief risk officer presents a more uncomfortable slide. The bank holds a securities portfolio that was bought when rates were low; a hundred-basis-point rise has cut its market value by several hundred million dollars, which does not appear in earnings because most of the securities are classified as held-to-maturity but would be crystallized if the bank had to sell them. A survey of large depositors suggests that nearly a third of uninsured corporate balances are held in accounts that can be moved with a click. The liquidity coverage ratio is comfortably above 100 percent, but the CRO points out that the ratio's assumptions about the speed of outflows were calibrated to a world before digital banking.

Meanwhile, the insurance subsidiary reports that its property-and-casualty reserves have been strengthened twice in the past year because claims inflation has proved higher than assumed. The life subsidiary has sold guaranteed-rate annuities and has a duration mismatch between its assets and the promised payments. The head of the subsidiary notes that the economic solvency ratio has fallen from 160 percent to 135 percent, even though accounting earnings are positive.

The board must decide on dividends, buybacks, and growth. The chairwoman asks a simple question: "Are we more profitable or more fragile than a year ago?" The answer is that the bank is both. Profitability in financial institutions is inseparable from risk, leverage, and the regulatory capital that stands behind them. This chapter develops the tools to answer the chairwoman's question for banks and insurers: how they earn money, how they measure and manage the risks they run, and how capital regulation constrains and shapes their decisions. It builds on Volume 1, Chapter 15 (capital structure) and Chapter 2 (financial statements), and on Chapter 7 of this volume (interest-rate models).

## 8.1 How Financial Institutions Make Money

### 8.1.1 Why banks and insurers are different from industrial companies

An industrial firm raises capital and buys real assets that produce cash flows. A bank or insurer is a *financial intermediary*: its assets are mostly financial claims, its liabilities are mostly promises to customers (deposits, insurance policies), and its equity is a thin layer that absorbs losses. Three differences matter for corporate finance.

First, *leverage is the product*. Most nonfinancial companies hold debt-to-assets ratios of 20 to 40 percent; banks hold ratios above 90 percent. The intermediary's customers *supply* the liabilities as a by-product of using its services (payments, safekeeping, risk transfer). The Modigliani-Miller logic of Volume 1, Chapter 15 still applies, but the tax shield and distress-cost trade-offs are overlaid by *safety-net subsidies* (deposit insurance, central-bank liquidity), which blunt the discipline that market-priced debt would otherwise exert. This is the underlying reason why regulators set minimum capital: the private cost of failure to the institution understates the social cost.

Second, *the balance sheet is the income statement*. For a manufacturer, the balance sheet is a stock of equipment and the income statement shows operating profit. For a bank, interest income arises directly from the spread between asset yields and liability costs applied to the balance sheet, and for an insurer, investment income depends on the float held. Changes in balance-sheet structure change earnings immediately.

Third, *risk is hidden in the timing*. A loan portfolio can look healthy for years until losses emerge; an insurer's profit in one year is partly determined by estimates of claims that will be paid over the next decade. Reported earnings therefore depend on provisions and reserves, which are estimates. This makes accounting quality and governance first-order issues.

### 8.1.2 The bank balance sheet

A stylized balance sheet shows the main components. We will use the fictional Lakeshore Bank throughout the chapter (millions of dollars).

| Assets | Amount | Liabilities and equity | Amount |
|---|---|---|---|
| Cash and central-bank reserves | 10,000 | Retail deposits, stable | 25,000 |
| Securities | 25,000 | Retail deposits, less stable | 25,000 |
| Residential mortgages | 25,000 | Corporate operational deposits | 10,000 |
| Corporate loans | 30,000 | Corporate non-operational deposits | 18,000 |
| Retail unsecured loans | 5,000 | Wholesale funding | 12,000 |
| Other assets (including 800 of intangibles) | 5,000 | Other liabilities | 2,000 |
| | | Shareholders' equity | 8,000 |
| **Total assets** | **100,000** | **Total liabilities and equity** | **100,000** |

Loans earn the highest yield but carry credit risk and are illiquid; securities provide liquidity and a modest return; reserves are the most liquid but earn the least. On the liability side, stable retail deposits are the cheapest and most reliable funding, corporate deposits are more sensitive to rates and confidence, and wholesale funding is the most expensive and most prone to withdrawal in stress. Equity is the buffer.

The core business of a bank is *maturity and liquidity transformation*: it borrows short and liquid (demand deposits) and lends long and illiquid (mortgages, business loans). This creates profit through the term premium and the liquidity premium and creates two risks: interest-rate risk (Section 8.2) and liquidity risk (Section 8.3). It also creates *credit risk* on the loan portfolio, which capital regulation (Section 8.4) is designed to address.

### 8.1.3 Net interest margin and the DuPont decomposition for banks

The primary profitability measure is *net interest margin* (NIM):

```
NIM = (Interest income − Interest expense) / Average earning assets
```

Net interest income (NII) is the dollar value of the numerator. Beyond NII, a bank earns *non-interest income* (fees, trading, payments, wealth management) and incurs *operating expenses* and *loan-loss provisions*. The efficiency ratio is operating expense divided by total revenue (NII plus non-interest income). Return on assets (ROA) is net income over average total assets, and return on equity (ROE) is net income over equity. The accounting identity ROE = ROA × (Assets / Equity) shows how leverage multiplies ROA.

**Example 8.1 – Profitability decomposition for Lakeshore Bank.**
Loans yield 6.50 percent, securities 4.00 percent, and reserves 2.00 percent. Deposits cost 2.20 percent on average and wholesale funding 4.50 percent. Non-interest income is 900 million, operating expense 2,400 million, provisions for loan losses 600 million, and the tax rate is 25 percent. Earning assets are loans (60,000) plus securities (25,000) plus cash and reserves (10,000) = 95,000.

Step 1. Interest income = 60,000 × 6.50% + 25,000 × 4.00% + 10,000 × 2.00% = 3,900 + 1,000 + 200 = 5,100.

Step 2. Interest expense = 78,000 × 2.20% + 12,000 × 4.50% = 1,716 + 540 = 2,256.

Step 3. NII = 5,100 − 2,256 = 2,844. NIM = 2,844 / 95,000 = **2.99 percent**.

Step 4. Revenue = NII + non-interest income = 2,844 + 900 = 3,744. Pre-provision profit = 3,744 − 2,400 = 1,344. After provisions of 600, pre-tax profit = 744. Tax at 25 percent = 186. Net income = **558**.

Step 5. ROA = 558 / 100,000 = 0.558 percent. Equity multiplier = 100,000 / 8,000 = 12.5. ROE = 0.558% × 12.5 = **6.98 percent**. The efficiency ratio = 2,400 / 3,744 = **64.1 percent**.

Interpretation. A 7 percent ROE is below most banks' cost of equity (Volume 1, Chapter 10 suggests 9 to 12 percent). Value is created only when ROE exceeds the cost of equity; the managerial question becomes which lever to pull. Raising NIM by 20 basis points adds 190 million of pre-tax profit (142.5 million after tax), which raises ROE by 1.8 points. Cutting the efficiency ratio by 5 points saves about 187 million pre-tax. Reducing provisions has the same effect but may simply postpone losses. Raising leverage multiplies ROA but raises distress risk and is capped by regulation. The ROE is a *by-product* of the interplay between spread, cost, credit quality, and leverage, and any one measure can be improved by a decision that worsens risk.

### 8.1.4 Other revenue and what drives it

*Fee income* is less rate-sensitive and capital-light, so banks seek to expand it, but it depends on franchise and customer relationships. *Trading and investment banking income* is volatile and consumes capital for market risk. *Cost of risk* (provisions as a percentage of loans) is the most cyclical component: under the expected-credit-loss approach of IFRS 9 and the current-expected-credit-loss approach in the United States, banks provision for expected losses earlier than under older "incurred loss" rules, which makes provisions more procyclical in their timing but smooths the shock of recognition. Finally, *funding costs and deposit betas* (Section 8.2) determine how much of a rise in market rates the bank retains.

### 8.1.5 Common mistakes

- *Reading high ROE as high quality.* A high ROE from thin capital and low provisions in a benign credit environment is fragile.
- *Comparing NIM across banks without adjusting for mix.* A bank concentrated in credit cards has a higher NIM than a mortgage lender for reasons that reflect risk.
- *Ignoring off-balance-sheet exposures.* Undrawn commitments and guarantees are claims on the bank's liquidity and capital.
- *Taking a single-year efficiency ratio as structural.* Cost-cutting that deteriorates controls or customer service has a delayed price.

## 8.2 Interest-Rate Risk in the Banking Book

### 8.2.1 Two lenses: earnings and economic value

Interest-rate risk in the banking book (IRRBB) is the exposure of a bank's earnings and capital to changes in interest rates. Two complementary views are used:

- **Earnings view (NII-at-risk).** How much does net interest income over the next one to three years change under a rate scenario? This is what management and equity analysts watch.
- **Economic-value view (EVE).** How much does the present value of the bank's assets, liabilities, and off-balance-sheet positions change under the scenario? This captures long-dated exposures that earnings ignore, and it is what the supervisor uses to judge solvency risk.

A bank can look safe on one measure and fragile on the other: a bank holding long fixed-rate securities funded by short deposits may show *rising* NII in a rate-cutting scenario and a deeply negative EVE in a rate-rising scenario, as the PV of the securities falls.

### 8.2.2 The repricing gap and the role of deposit betas

The simplest measure divides the balance sheet into time buckets according to when each item's interest rate resets or the item matures. The *gap* in a bucket is rate-sensitive assets (RSA) minus rate-sensitive liabilities (RSL). A change in rates of Δr changes NII over the bucket's horizon by approximately Gap × Δr.

**Example 8.2 – One-year repricing gap, with and without deposit betas.**
Lakeshore's balance sheet items repricing or maturing within one year: floating-rate loans 30,000 (including corporate loans and adjustable-rate mortgages), securities maturing within a year 5,000, cash and reserves 10,000. Liabilities repricing within a year: deposits 60,000 and wholesale funding 5,000.

Step 1. RSA = 30,000 + 5,000 + 10,000 = 45,000. RSL = 60,000 + 5,000 = 65,000. One-year gap = −20,000.

Step 2. A naïve application: +100 basis points changes NII by −20,000 × 1.00% = **−200 million**, and a 100 basis point fall changes it by +200 million. The bank looks *liability-sensitive*.

Step 3. But deposit rates do not move one for one with market rates. The *deposit beta* is the fraction of a change in market rates passed through to depositors. Assume a beta of 0.50 on the 60,000 of deposits (a typical value for blended checking and savings in a rising-rate episode; the actual figure varies by product and by cycle) and 1.00 on wholesale funding. The effective rate-sensitive liabilities are 60,000 × 0.50 + 5,000 × 1.00 = 35,000.

Step 4. The effective gap is 45,000 − 35,000 = +10,000, and the +100 basis point scenario changes NII by **+100 million**. The sign has flipped.

Lessons. First, the gap analysis is only as good as its behavioral assumptions about deposits (betas, and also the *duration* of non-maturity deposits, which are contractually overnight but behaviorally sticky) and about prepayment on mortgages. Second, a bank is rarely as liability-sensitive or asset-sensitive as its contractual repricing suggests. Third, deposit betas are not constant: they tend to rise as rates rise and as competition for deposits intensifies, meaning that the benefits of a rising-rate environment fade over time, an effect that crushed earnings in banks that assumed low betas indefinitely.

### 8.2.3 Duration gap and economic value of equity

The economic-value view uses duration. For a position with market value V and modified duration D, a parallel yield change Δy changes value by approximately −D × V × Δy (Volume 1, Chapter 4). For the bank as a whole, the change in the market value of equity ΔE is the change in assets minus the change in liabilities:

```
ΔE ≈ −(D_A × A − D_L × L) × Δy = −D_gap × A × Δy
D_gap = D_A − D_L × (L / A)
```

A positive duration gap means assets are longer than liabilities (after adjusting for leverage), so a rate rise decreases equity value.

**Example 8.3 – Duration gap and equity value at risk.**
Lakeshore's assets have a modified duration of 2.8 years (the loan book is a mix of floating and fixed; the securities are medium-term). Liabilities (deposits and wholesale funding, recognizing the behavioral maturity of non-maturity deposits) have a modified duration of 1.1 years. Total assets are 100,000 and liabilities (including other liabilities) are 92,000.

Step 1. D_gap = 2.8 − 1.1 × (92,000 / 100,000) = 2.8 − 1.012 = **1.788 years**.

Step 2. For a +100 basis point parallel shift: ΔE ≈ −1.788 × 100,000 × 0.01 = **−1,788 million**.

Step 3. As a share of book equity (8,000), this is −22.4 percent; as a share of CET1 capital (7,200, see Section 8.4), −24.8 percent. Supervisory standards for IRRBB commonly flag a bank as an outlier when a standardized shock reduces EVE by more than 15 percent of Tier 1 capital, so this bank would attract attention.

Step 4. Hedging. A receive-fixed swap with DV01 matching the duration gap reduces exposure. The required DV01 is D_gap × A × 0.0001 = 1.788 × 100,000 × 0.0001 = 17.9 million per basis point, equivalent to a swap with notional such that notional × annuity × 0.0001 = 17.9 million; for a 5-year swap with annuity of about 4.5 (Chapter 7) the notional would be roughly 17.9 / (4.5 × 0.0001) = 39.7 billion. Even with a different mix, the hedge is large, and the bank might prefer to restructure the securities portfolio or change deposit pricing strategy. Note that this ignores optionality: prepayment on mortgages and the right of depositors to withdraw create *negative convexity* that makes the actual exposure worse for large shocks.

Notice the interplay with Chapter 7: the risk is *parallel* in this simple measure, but real exposures are *bucketed*. A bank that is long five-year assets and short two-year liabilities is hurt by a *steepening* of the curve but not necessarily by a parallel shift. This is why regulators prescribe six scenarios (parallel up, parallel down, steepener, flattener, short-rate up, short-rate down) rather than a single shift.

### 8.2.4 Managing IRRBB

Banks manage IRRBB through three levers: *balance-sheet structure* (the mix of fixed and floating loans, the duration of the securities portfolio), *deposit pricing* (to manage betas and deposit mix), and *derivatives* (swaps, caps, floors, swaptions). Accounting complicates the picture: securities classified as held-to-maturity do not show unrealized losses in equity or earnings, and derivatives designated as hedges receive different treatment from derivatives that are not (Chapter 7, Section 7.6). A well-run asset-liability committee (ALCO) reviews both NII and EVE under several scenarios, assesses behavioral assumptions, sets limits (typically a percentage of capital or of NII), and monitors them quarterly.

The deeper point is that a bank earns a *term premium* from being short-funded, and giving up the term premium to eliminate interest-rate risk reduces ROE. There is no free lunch: the ALCO's job is to take only the interest-rate risk that the bank is compensated for, and no more than its capital can bear.

### 8.2.5 Common mistakes

- *Reporting NII-at-risk over a short horizon only.* Long-dated assets can hide large EVE losses.
- *Using contractual maturities for non-maturity deposits.* Behavioral models must reflect depositor stickiness, but must also be stress-tested for rapid deposit migration.
- *Assuming deposit betas are stable through the cycle.*
- *Ignoring basis risk and optionality.* Prepayments, caps embedded in loans, and early-withdrawal options can move exposures substantially.

## 8.3 Liquidity Risk and Funding

### 8.3.1 Why banks are run-prone

A bank's liabilities are callable at par on short notice, while its assets are not. This is the Diamond-Dybvig insight: maturity transformation creates socially useful liquidity for savers but also creates a coordination problem. If depositors fear others will withdraw, it is rational to withdraw first, and a solvent bank can fail because it cannot sell illiquid assets quickly at fair value. Deposit insurance and central-bank lending reduce the problem for insured retail deposits but not for uninsured corporate balances or wholesale funding, which are the funds that flee first. Modern runs are faster than historical runs because digital channels and social-media information shorten the time to withdraw.

Two distinct concepts must be separated. *Funding liquidity risk* is the risk that the bank cannot meet its obligations as they fall due without unacceptable losses. *Market liquidity risk* is the risk that assets cannot be sold at close to fair value. The two interact: funding stress forces asset sales into weak markets, which depresses prices, reduces collateral values, and deepens the funding stress (a *liquidity spiral*).

### 8.3.2 The regulatory liquidity ratios

Post-crisis regulation introduced two standard ratios, described here in general terms; the exact factors vary by jurisdiction.

**Liquidity coverage ratio (LCR).** The LCR asks whether the bank has enough high-quality liquid assets (HQLA) to survive a severe 30-day stress:

```
LCR = Stock of HQLA / Net cash outflows over 30 days  ≥ 100%
Net outflows = Total expected outflows − min(Total expected inflows, 75% × Total expected outflows)
```

HQLA are classed by quality: Level 1 (cash, central-bank reserves, certain sovereign securities) counts at full value; Level 2 assets (certain covered bonds and corporate securities, with a haircut and a cap on their share) count at a reduced value. Outflow rates depend on funding type: stable retail deposits run off slowly (a few percent), less stable retail deposits faster, operational corporate deposits (needed for the customer's payment activities) at moderate rates, non-operational corporate deposits at rates around 40 percent in typical standards, and wholesale funding from financial institutions at 100 percent. Undrawn committed lines carry small outflow factors. Inflows from performing loans are counted at partial rates, and the 75 percent cap prevents banks from relying on inflows alone.

**Net stable funding ratio (NSFR).** The NSFR asks whether the bank's longer-term funding supports its longer-term assets over a one-year horizon:

```
NSFR = Available stable funding (ASF) / Required stable funding (RSF) ≥ 100%
```

Each liability is weighted by its stability (equity and long-term debt at 100 percent, stable retail deposits around 95 percent, less stable retail around 90 percent, wholesale funding shorter than six months at zero or 50 percent depending on counterparty), and each asset is weighted by its illiquidity (cash at zero, Level 1 securities at about 5 percent, mortgages at about 65 percent, other loans at about 85 percent, and assets that are encumbered or otherwise illiquid at 100 percent).

**Example 8.4 – LCR and NSFR for Lakeshore Bank.**
Using the balance sheet of Section 8.1.2, assume the securities portfolio comprises 9,000 of Level 1 government securities, 5,000 of Level 2A assets, and 11,000 of other securities that do not qualify as HQLA. Of the wholesale funding (12,000), 8,000 matures within 30 days and 4,000 matures beyond one year. Undrawn committed facilities total 8,000. Expected inflows from performing loans within 30 days are 2,000.

*LCR.*
Step 1. HQLA = cash and reserves 10,000 + Level 1 securities 9,000 + Level 2A 5,000 × 85% = 4,250, which is **23,250**.

Step 2. Outflows: stable retail deposits 25,000 × 5% = 1,250; less stable retail 25,000 × 10% = 2,500; operational corporate 10,000 × 25% = 2,500; non-operational corporate 18,000 × 40% = 7,200; wholesale maturing within 30 days 8,000 × 100% = 8,000; undrawn commitments 8,000 × 10% = 800. Total = **22,250**.

Step 3. Inflows of 2,000 are below the cap (75% × 22,250 = 16,688), so net outflows = 22,250 − 2,000 = **20,250**.

Step 4. LCR = 23,250 / 20,250 = **114.8 percent**. The bank meets the 100 percent minimum with a surplus of 3,000 of HQLA.

*NSFR.*
Step 5. ASF = equity 8,000 × 100% + stable retail 25,000 × 95% + less stable retail 25,000 × 90% + operational corporate 10,000 × 50% + non-operational corporate 18,000 × 50% + long-dated wholesale 4,000 × 100% = 8,000 + 23,750 + 22,500 + 5,000 + 9,000 + 4,000 = **72,250**. The short-dated wholesale funding and other liabilities count at zero.

Step 6. RSF = Level 1 securities 9,000 × 5% = 450; Level 2A 5,000 × 15% = 750; other securities 11,000 × 50% = 5,500; mortgages 25,000 × 65% = 16,250; corporate loans 30,000 × 85% = 25,500; retail loans 5,000 × 85% = 4,250; other assets 5,000 × 100% = 5,000; undrawn commitments 8,000 × 5% = 400. Total = **58,100**.

Step 7. NSFR = 72,250 / 58,100 = **124.4 percent**.

Interpretation. Both ratios exceed 100 percent, but the cushion is thin on the LCR: if non-operational deposits were to run off at 60 percent instead of 40 percent, outflows would rise by 3,600 to 25,850 (net 23,850), and the LCR would fall to 97.5 percent. The ratio is a regulatory minimum, not a prediction; experience in recent bank failures suggests that outflows can exceed regulatory run-off assumptions. The important managerial point is that *HQLA are costly*: holding 23,250 of low-yielding assets rather than loans forgoes an earnings spread of perhaps 2 to 3 points, which at the margin is a 500-million-dollar annual cost for a bank like this. Liquidity regulation is, in effect, a tax on maturity transformation, and it explains much of the shift of lending from banks to non-banks since the crisis.

### 8.3.3 Funding strategy and contingency planning

A bank's funding strategy has several components. The *funding mix* trades off cost against stability: core retail deposits are cheapest and stickiest, while wholesale markets are flexible but fragile. The *maturity ladder* of wholesale funding avoids concentration of maturities in one month. *Collateral management* determines how much of the securities portfolio is unencumbered and available to pledge at the central bank. Finally, a *contingency funding plan* lists the actions available in stress, in order of speed and cost: central-bank facilities, repo of securities, asset sales, loan securitization, and, as a last resort, curtailment of lending. A good plan is *tested*: lessons from past stress episodes are that collateral eligibility, operational readiness to borrow from the central bank, and the signalling stigma of doing so are as important as the paper capacity.

A crucial linkage exists between liquidity and solvency: *market confidence determines whether solvent banks survive*. Unrealized losses on securities, even if not recognized in earnings, reduce the economic capital cushion, and uninsured depositors who see this may decide to withdraw. This is why regulators watch both the accounting capital ratio and economic measures such as EVE.

### 8.3.4 Common mistakes

- *Treating the LCR as the full liquidity story.* A 30-day ratio says nothing about a stress that develops over weeks, nor about intraday liquidity.
- *Counting all deposits as stable.* Concentrated, uninsured, rate-sensitive, or digitally mobile deposits behave differently from granular insured retail deposits.
- *Ignoring encumbrance.* Assets pledged to secured funders are not available to meet a new outflow.
- *Holding HQLA that lose value when rates rise without hedging.* Long government bonds are liquid but carry mark-to-market risk, and selling them realizes the loss.

## 8.4 Capital Regulation: The Basel Framework in General Terms

### 8.4.1 Why regulate capital

Regulators require banks to hold capital for three reasons. First, *externalities*: the failure of one bank can impose costs on other banks and on the real economy through counterparty exposures, fire sales, and loss of credit. Second, *moral hazard*: deposit insurance and implicit government support reduce depositors' incentives to monitor, so shareholders can gain from risk-taking at the expense of the insurer. Third, *information asymmetry*: depositors cannot assess loan portfolios. Capital reduces the probability of failure and aligns shareholders' interests with prudence, because shareholders lose first.

The international framework developed by the Basel Committee on Banking Supervision, commonly called "Basel" and implemented with local variations, rests on three pillars: *Pillar 1* sets minimum capital for credit, market, and operational risk; *Pillar 2* adds supervisory review and bank-specific add-ons for risks not fully captured, including interest-rate risk in the banking book and concentration; *Pillar 3* requires disclosure to promote market discipline. Details of calibration have been revised several times, and national regimes differ. The concepts below are stated generally and the numbers are illustrative.

### 8.4.2 The structure of regulatory capital

Capital is divided into tiers according to loss-absorbing quality:

- **Common Equity Tier 1 (CET1):** common shares and retained earnings, minus deductions such as goodwill and other intangibles, deferred tax assets from loss carryforwards, and certain holdings in other financial institutions. This is the highest-quality, going-concern capital.
- **Additional Tier 1 (AT1):** perpetual instruments, such as contingent convertible bonds, that can absorb losses by write-down or conversion before the bank fails.
- **Tier 2:** subordinated debt that absorbs loss in resolution (gone-concern capital).

Requirements are expressed as ratios to *risk-weighted assets* (RWA), and typically include a minimum (for example, CET1 of 4.5 percent of RWA), a *capital conservation buffer* (a further 2.5 percent), and additional buffers: a *countercyclical buffer* set by national authorities in a credit boom, and surcharges for globally or domestically systemically important banks. Falling into the buffer does not cause failure but restricts dividends, buybacks, and bonuses, a powerful practical constraint. A separate *leverage ratio* (Tier 1 capital divided by a non-risk-based measure of total exposure, with a minimum around 3 percent plus surcharges for the largest banks) acts as a backstop to the risk-weighted measure, which can be gamed or mis-calibrated. Finally, large banks must hold *total loss-absorbing capacity* (TLAC) or comparable debt that can be bailed in during resolution.

### 8.4.3 Risk-weighted assets

Under the *standardized approach*, each exposure is multiplied by a risk weight set by regulation according to asset class and, for some classes, external ratings or collateral: sovereign exposures in the domestic currency at 0 percent, high-quality covered bonds and agency paper at about 20 percent, residential mortgages with moderate loan-to-value at about 35 percent, retail exposures at 75 percent, corporates at 100 percent (with lower weights for highly rated or small-business exposures in some regimes), and equity and high-risk items at higher weights. Off-balance-sheet items are converted into credit-equivalent amounts with credit conversion factors. RWA also includes charges for *market risk* (the trading book) and *operational risk*, expressed as RWA equivalents by multiplying the capital charge by 12.5 (the reciprocal of the 8 percent original minimum). Under the *internal ratings-based (IRB)* approach, approved banks estimate probability of default (PD), loss given default (LGD), exposure at default (EAD), and maturity, and a regulatory formula converts them to RWA (Section 8.4.5).

**Example 8.5 – RWA, CET1 ratio, and headroom for Lakeshore Bank.**
The balance sheet of Section 8.1.2 with the securities split of Example 8.4. Risk weights: cash and reserves 0 percent; Level 1 government securities 0 percent; Level 2A 20 percent; other securities 50 percent; residential mortgages 35 percent; corporate loans 100 percent; retail loans 75 percent; other assets (excluding the 800 of intangibles, which are deducted from capital) 100 percent. Operational and market risk RWA total 6,800.

Step 1. Credit RWA: Level 2A 5,000 × 20% = 1,000; other securities 11,000 × 50% = 5,500; mortgages 25,000 × 35% = 8,750; corporate loans 30,000 × 100% = 30,000; retail loans 5,000 × 75% = 3,750; other assets (5,000 − 800) × 100% = 4,200. Total = 1,000 + 5,500 + 8,750 + 30,000 + 3,750 + 4,200 = **53,200**.

Step 2. Add operational and market RWA 6,800: total RWA = **60,000**.

Step 3. CET1 = equity 8,000 − intangibles 800 = **7,200**. CET1 ratio = 7,200 / 60,000 = **12.0 percent**.

Step 4. Assume the bank's overall CET1 requirement including buffers is 4.5% (minimum) + 2.5% (conservation) + 1.0% (systemic surcharge) = **8.0 percent**. Required CET1 = 0.08 × 60,000 = 4,800. Excess capital = 7,200 − 4,800 = **2,400**, or 4.0 points of RWA.

Step 5. Growth capacity: with 7,200 of CET1 and an 8.0 percent requirement, maximum RWA = 7,200 / 0.08 = 90,000. The bank could add **30,000 of RWA**, for example, 30,000 of new corporate loans at 100 percent weight, without raising capital, though supervisors usually expect a management buffer above the requirement.

Step 6. Leverage ratio: Tier 1 capital of 7,200 over an exposure measure of approximately 100,000 (assets of 99,200 after deductions plus 800 of credit-converted off-balance-sheet items) = **7.2 percent**, comfortably above a 3 percent minimum.

Step 7. Dividend capacity. Net income of 558 (Example 8.1) retained entirely adds 558 to CET1 and 0.93 percentage points to the ratio before RWA growth. If the bank pays out 60 percent, retention is 223 and the ratio rises by 0.37 points; sustainable growth in CET1, 223 / 7,200 = 3.1 percent, supports RWA growth of about the same rate while holding the ratio constant.

Interpretation. The 12.0 percent CET1 ratio is attractive, but note how heavily the answer depends on risk weights. If the bank reclassified 10,000 of corporate lending from 100 percent to 75 percent weights through better ratings or collateral, RWA would fall by 2,500 and the ratio would rise to 12.5 percent, an improvement achieved without raising a dollar of capital. This is both the usefulness and the weakness of risk-based capital: it aligns capital with risk, and it creates incentives to *optimize* RWA. The leverage ratio is the check against excess optimization.

### 8.4.4 The economic logic of capital: expected loss, unexpected loss, and the capital charge

Credit risk has two parts. *Expected loss (EL)* = PD × LGD × EAD is the average annual loss and is a cost of doing business, priced into loan spreads and covered by provisions. *Unexpected loss (UL)* is the variability around the average. Capital is held against UL: the loss at a high confidence level (for instance, 99.9 percent over one year) minus the expected loss. The portfolio loss distribution is highly skewed because defaults are correlated through common economic factors. Diversification reduces idiosyncratic risk but cannot eliminate the systematic factor.

### 8.4.5 The asymptotic single-risk-factor formula

The IRB risk-weight function is based on the model of Oldřich Vasicek (applied to loan portfolios), the same intuition as the Merton structural model of default (Volume 1, Chapter 18's discussion of equity as a call on assets). Assume each borrower's asset return has a systematic component (one common factor, such as the economy) and an idiosyncratic component, with asset-return correlation ρ. For a large, granular portfolio, the default rate conditional on a bad draw of the common factor at confidence level q is:

```
Conditional PD = Φ [ ( Φ⁻¹(PD) + √ρ × Φ⁻¹(q) ) / √(1 − ρ) ]
Capital requirement K = LGD × ( Conditional PD − PD )
Risk-weighted assets = K × 12.5 × EAD
```

Φ is the standard normal cumulative distribution function and Φ⁻¹ is its inverse. The "−PD" term subtracts expected loss, since expected loss is covered by provisions and pricing. The regulatory formula adds a maturity adjustment and sets ρ as a decreasing function of PD (between 12 and 24 percent for corporate exposures); a fixed ρ = 0.15 is used below for clarity.

**Example 8.6 – The ASRF capital charge for a corporate loan.**
PD = 1.00 percent, LGD = 45 percent, ρ = 0.15, q = 99.9 percent. Φ⁻¹(0.01) = −2.3263 and Φ⁻¹(0.999) = 3.0902.

Step 1. √ρ = 0.38730; √(1 − ρ) = 0.92195.

Step 2. Numerator: −2.3263 + 0.38730 × 3.0902 = −2.3263 + 1.1969 = −1.1294.

Step 3. Ratio = −1.1294 / 0.92195 = **−1.2251**. Conditional PD = Φ(−1.2251) = **11.03 percent**.

Step 4. K = 0.45 × (0.1103 − 0.0100) = 0.45 × 0.1003 = **4.51 percent** of EAD.

Step 5. Risk weight = 12.5 × 4.51% = **56.4 percent**.

The same calculation for other PDs, using the same LGD and correlation:

| PD | Conditional PD at 99.9% | K (% of EAD) | Risk weight |
|---|---|---|---|
| 0.50% | 6.74% | 2.81% | 35.1% |
| 1.00% | 11.03% | 4.51% | 56.4% |
| 2.00% | 17.63% | 7.03% | 87.9% |
| 5.00% | 31.48% (approx.) | 11.86% | 148.2% |

Observe that the capital charge is *concave* in PD: doubling PD from 1 to 2 percent raises K by about 56 percent, not 100 percent, because expected loss is excluded and because the conditional PD increases less than proportionally. At 5 percent PD, the risk weight exceeds 100 percent and a corporate loan consumes substantially more capital than a loan at 100 percent standardized weight.

**Example 8.7 – Risk-adjusted return on capital (RAROC) and the minimum margin.**
Lakeshore considers a 100 million corporate loan with the risk parameters of Example 8.6. The funding-adjusted margin (loan rate less cost of funds) is 2.20 percent, operating costs are 0.40 percent of the loan, and the tax rate is 25 percent. The capital held is 11 percent of RWA (the bank's target, which exceeds the 8.0 percent requirement), and capital replaces debt funding that would cost 4.0 percent.

Step 1. EL = 1.00% × 45% × 100 = **0.45 million**.

Step 2. RWA = 56.4% × 100 = 56.4 million. Capital = 11% × 56.4 = **6.20 million**.

Step 3. Pre-tax risk-adjusted profit = margin 2.20 − costs 0.40 − EL 0.45 = **1.35 million**; after tax at 25 percent = 1.0125 million.

Step 4. Capital benefit: since 6.20 million of the loan is funded by equity rather than debt costing 4.0 percent, the bank saves 6.20 × 4.0% = 0.248 million pre-tax, or 0.186 million after tax.

Step 5. RAROC = (1.0125 + 0.186) / 6.204 = **19.3 percent**.

Step 6. With a hurdle rate equal to a cost of equity of 12 percent, the loan creates value: the economic profit is (19.3% − 12%) × 6.20 = 0.45 million. The minimum margin that earns exactly 12 percent solves (m − 0.85) × 0.75 + 0.186 = 0.12 × 6.204 = 0.7445, so m − 0.85 = 0.7445 and **m = 1.59 percent**. A borrower with a higher PD would need a higher margin, as it consumes more capital.

Interpretation. RAROC links regulation to pricing: because capital is a scarce resource, the bank should allocate it to uses with the highest risk-adjusted return, and *price loans to the capital they consume*. A bank that prices all corporate loans at the same margin regardless of PD cross-subsidizes risky borrowers. The same logic underlies Volume 1, Chapter 7's capital rationing discussion: when capital is constrained, the criterion is return per unit of constrained resource.

### 8.4.6 Criticisms and the capital debate

Three debates are worth knowing. First, *procyclicality*: risk-sensitive requirements rise in downturns when PDs increase, forcing banks to deleverage when the economy needs credit; countercyclical buffers and through-the-cycle PD estimation are partial responses. Second, *model risk and RWA variability*: different banks can assign materially different RWA to the same portfolio, which led to output floors that bound IRB results to a fraction of the standardized approach. Third, the *cost of equity debate*, a Modigliani-Miller argument: if bank funding were frictionless, raising capital would simply lower the required return on equity and leave the weighted cost of funding unchanged. Critics note that this argument fails when deposit insurance subsidies, debt tax shields, and informational frictions matter, which is why banks resist higher requirements. Advocates of higher capital point out that, even allowing for these frictions, the social benefit of lower crisis probability probably exceeds the modest increase in lending cost. As an MBA leader you should hold both arguments: capital is expensive for a single bank's shareholders and cheap for the economy as a whole.

### 8.4.7 Common mistakes

- *Equating regulatory capital with economic capital.* The regulatory ratio is a floor; economic capital reflects the bank's own risk profile and concentrations.
- *Treating the CET1 ratio as the only constraint.* Leverage ratio, TLAC, liquidity ratios, and stress-test buffers can each bind.
- *Optimizing RWA without regard to risk.* Reducing RWA by reclassification does not reduce the underlying loss potential.
- *Ignoring that provisions already cover expected loss.* Capital is for unexpected loss; double counting EL and UL overstates the capital need.
