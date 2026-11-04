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
| 5.00% | 31.35% | 11.86% | 148.2% |

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

## 8.5 Stress Testing

### 8.5.1 Purpose and design

Capital ratios computed from current balance sheets answer "are we compliant today?" Stress tests answer "would we remain adequately capitalized after a severe but plausible shock?" Supervisors run *top-down* tests, imposing scenarios on all large banks and comparing results against hurdle rates, and banks run *bottom-up* internal tests tailored to their portfolios. After the 2008 crisis, stress tests became a central instrument of prudential supervision and now directly influence permitted dividends and buybacks.

A stress test has five components:

1. **Scenario.** A path for macroeconomic and financial variables over, typically, three years: GDP, unemployment, house prices, interest rates, equity prices, credit spreads. A *severely adverse* scenario is generally calibrated to be at least as severe as a deep post-war recession. *Reverse stress tests* ask the opposite question: what scenario would make the bank fail?
2. **Translation to risk parameters.** Models map macro variables to PD, LGD, prepayment, deposit outflows, and fee income. This step is where most model risk lies, because the relationships are estimated from limited historical data.
3. **Projection of pre-provision net revenue (PPNR).** Revenue and expenses under stress: NII falls if margins compress, fees fall with activity, costs are sticky.
4. **Balance-sheet dynamics.** RWA typically *rise* in stress because rating migration raises risk weights and because drawn credit lines increase; assumptions about whether the bank can shrink its balance sheet matter.
5. **Capital roll-forward and comparison to hurdle.** Start CET1 + stressed net income (PPNR − losses − taxes) − dividends = ending CET1; ratio = ending CET1 / stressed RWA.

### 8.5.2 A worked stress test

**Example 8.8 – A three-year stress test for Lakeshore Bank.**
Starting point: CET1 of 7,200 and RWA of 60,000 (Example 8.5), ratio 12.0 percent. Baseline pre-provision net revenue is NII 2,844 + non-interest income 900 − operating expense 2,400 = 1,344 per year. The severely adverse scenario implies:

- PPNR falls by 30 percent to 940.8 per year (lower fees, margin compression, sticky costs).
- Default and loss parameters rise as follows (annual PD × LGD × EAD, applied to the loan book of Section 8.1.2):

| Segment | EAD | Baseline PD / LGD | Stressed PD / LGD | Stressed annual loss |
|---|---|---|---|---|
| Corporate loans | 30,000 | 1.2% / 50% | 8.0% / 55% | 1,320.0 |
| Residential mortgages | 25,000 | 0.3% / 15% | 3.0% / 35% | 262.5 |
| Retail unsecured | 5,000 | 2.0% / 80% | 10.0% / 85% | 425.0 |
| **Total** | **60,000** | Baseline loss 271.3 | | **2,007.5** |

- Stressed loss intensity is 100 percent of the annual figure in years 1 and 2, and 60 percent in year 3 as the scenario eases.
- RWA rises 7, 12, and 15 percent over the baseline in years 1, 2, and 3 because of rating migration.
- The tax rate is 25 percent, losses generate a tax credit (assume it is recognized), and dividends are suspended.

Step 1. Corporate loss: 30,000 × 8.0% × 55% = 1,320.0. Mortgage loss: 25,000 × 3.0% × 35% = 262.5. Retail loss: 5,000 × 10.0% × 85% = 425.0. Total 2,007.5.

Step 2. Year 1: Pre-tax result = 940.8 − 2,007.5 = −1,066.7; tax credit 266.7; net result = −800.0. CET1 = 7,200 − 800.0 = 6,400.0. RWA = 60,000 × 1.07 = 64,200. Ratio = **9.97 percent**.

Step 3. Year 2: same loss rate; result = −800.0; CET1 = 5,600.0; RWA = 60,000 × 1.12 = 67,200; ratio = **8.33 percent**.

Step 4. Year 3: loss = 0.60 × 2,007.5 = 1,204.5; pre-tax = 940.8 − 1,204.5 = −263.7; net = −197.8; CET1 = 5,402.2; RWA = 69,000; ratio = **7.83 percent**.

| Year | PPNR | Credit losses | Net result | CET1 | RWA | CET1 ratio |
|---|---|---|---|---|---|---|
| Start | | | | 7,200.0 | 60,000 | 12.00% |
| 1 | 940.8 | 2,007.5 | −800.0 | 6,400.0 | 64,200 | 9.97% |
| 2 | 940.8 | 2,007.5 | −800.0 | 5,600.0 | 67,200 | 8.33% |
| 3 | 940.8 | 1,204.5 | −197.8 | 5,402.2 | 69,000 | 7.83% |

Interpretation. The CET1 ratio falls 4.2 percentage points, to 7.83 percent. This remains above the 4.5 percent regulatory minimum, so the bank does not fail. But it falls *below* the 8.0 percent combined requirement including buffers, which in practice means distribution restrictions and a supervisory dialogue about a capital plan. The stress consumes 1,798 of capital in absolute terms, but RWA inflation accounts for a large part of the ratio decline: with RWA held constant at 60,000, ending CET1 would give 9.0 percent. A bank can therefore improve its stress performance both by raising CET1 and by reducing RWA sensitivity, for example by shortening loan maturities or by holding collateralized exposures.

How should management respond? Three options: build capital by retaining earnings now (cutting buybacks), hold more capital against the most loss-intensive segment (corporate loans contribute 66 percent of the stressed loss), or purchase credit protection or securitize part of the portfolio. Each has a cost, and the stress test makes the cost-benefit trade-off explicit.

### 8.5.3 Limits and good practice

Stress tests are as good as their scenarios and models. Weaknesses include: reliance on historical correlations that break down in unprecedented episodes; omission of liquidity feedback loops (a bank that passes the capital test can still fail on liquidity); static assumptions about management actions; and the risk that all banks use similar scenarios and thus converge on similar mitigations, which makes the system more homogeneous and therefore more vulnerable. Good practice includes reverse stress tests, multiple scenario narratives (rates up with inflation, rates down with deflation), integrating liquidity, and explicit "management action" assumptions that are documented and credible.

## 8.6 Insurance Company Finance

### 8.6.1 The insurance business model

An insurer sells promises: if an insured event occurs, it will pay a claim. Premiums are collected up front; claims are paid later, sometimes decades later. In the interval the insurer invests the premium, a pool of funds known as the *float*. Insurers earn money in two ways: *underwriting profit* (premiums less claims and expenses) and *investment income* on the float and on capital. The distinctive feature is that the *cost of goods sold is unknown at the time of sale*: the insurer must estimate the claims it will pay.

The two main lines are different in financial structure:

| Feature | Property and casualty (non-life) | Life and annuity |
|---|---|---|
| Liability horizon | Short to medium (1 to 10+ years; long tail for liability lines) | Long (10 to 50+ years) |
| Main liability risk | Claims frequency, severity, inflation, catastrophes | Mortality, longevity, lapse, guaranteed rates |
| Typical profit sources | Underwriting margin plus investment income | Investment spread, loadings, fees |
| Key estimate | Loss reserves | Actuarial reserves and discount rates |
| Principal financial risk | Reserve inadequacy, catastrophe, reinsurance credit | Interest-rate mismatch, longevity, lapse, credit |

*Reinsurance* transfers part of the risk to other insurers, trading premium for protection and reducing capital need, but introducing counterparty credit risk.

### 8.6.2 Underwriting performance: the combined ratio

For non-life insurers, the central measure is the *combined ratio*:

```
Combined ratio = Loss ratio + Expense ratio
Loss ratio     = Incurred claims (incl. claim-handling costs) / Earned premium
Expense ratio  = Acquisition costs and operating expenses / Earned premium
```

A combined ratio below 100 percent means an underwriting profit. Many insurers deliberately underwrite near or above 100 percent because investment income on the float makes the total business profitable. The return on equity is the sum of underwriting and investment contributions after tax.

**Example 8.9 – Property-and-casualty ROE and the effect of reserve error.**
An insurer has earned premium of 1,000 million, a loss ratio of 66 percent, an expense ratio of 29 percent, an investment portfolio of 3,000 million yielding 4.0 percent, a tax rate of 21 percent, and equity of 900 million.

Step 1. Combined ratio = 66% + 29% = **95 percent**. Underwriting profit = 1,000 × (1 − 0.95) = **50 million**.

Step 2. Investment income = 3,000 × 4.0% = **120 million**.

Step 3. Pre-tax income = 50 + 120 = 170. Tax at 21 percent = 35.7. Net income = **134.3 million**. ROE = 134.3 / 900 = **14.9 percent**.

Step 4. Suppose the company later discovers adverse development of prior-year claims totalling 75 million (the reserves were inadequate). This is charged to current-year underwriting: underwriting result = 50 − 75 = −25. Pre-tax income = −25 + 120 = 95; after-tax income = 95 × 0.79 = **75.05 million**; ROE = **8.3 percent**.

Step 5. The reserve error of 75 million is only 3 percent of loss reserves of 2,500 million, yet it cuts ROE by nearly half. The leverage in the business is reserve-to-equity: reserves of 2,500 against equity of 900 means a 1 percent error in reserves equals 25 million, or 2.8 percent of equity.

Interpretation. Reported underwriting results depend on reserve estimates, and small percentage errors translate into large equity impacts because reserves are a multiple of equity. Investors therefore scrutinize *prior-year reserve development* and the *quality of reserves* before trusting a low combined ratio. Moreover, investment income depends on interest rates: a decline of 100 basis points on the 3,000 million portfolio reduces income by 30 million pre-tax, as much as 3 points of loss ratio would.

### 8.6.3 Loss reserving: the chain-ladder method

Reserves are estimated from *loss development triangles*: cumulative paid (or incurred) claims by accident year (rows) and development year (columns). The *chain-ladder method* assumes that future development in each year follows the historical pattern: the ratio of cumulative claims at development year j+1 to those at year j, the *age-to-age factor*, is stable. Multiplying the latest observed cumulative claim by the product of the remaining factors gives the estimated *ultimate* loss; the *reserve* is ultimate minus paid to date.

**Example 8.10 – Chain-ladder reserve estimate.**
Cumulative paid claims by accident year (millions) after one to four years of development:

| Accident year | Dev 1 | Dev 2 | Dev 3 | Dev 4 |
|---|---|---|---|---|
| 1 | 1,000 | 1,800 | 2,200 | 2,350 |
| 2 | 1,100 | 2,000 | 2,450 | |
| 3 | 1,250 | 2,250 | | |
| 4 | 1,400 | | | |

Step 1. Volume-weighted age-to-age factors:
f₁ = (1,800 + 2,000 + 2,250) / (1,000 + 1,100 + 1,250) = 6,050 / 3,350 = **1.8060**;
f₂ = (2,200 + 2,450) / (1,800 + 2,000) = 4,650 / 3,800 = **1.2237**;
f₃ = 2,350 / 2,200 = **1.0682**.

Step 2. Cumulative development factors to ultimate (assuming no development beyond year 4, a tail factor of 1.00): from Dev 3: 1.0682; from Dev 2: 1.2237 × 1.0682 = 1.3071; from Dev 1: 1.8060 × 1.2237 × 1.0682 = 2.3606.

Step 3. Ultimates: accident year 1: 2,350 (fully developed). Year 2: 2,450 × 1.0682 = 2,617.0. Year 3: 2,250 × 1.3071 = 2,941.0. Year 4: 1,400 × 2.3606 = 3,304.9.

Step 4. Reserves = ultimate − paid to date: year 1: 0; year 2: 2,617.0 − 2,450 = 167.0; year 3: 2,941.0 − 2,250 = 691.0; year 4: 3,304.9 − 1,400 = 1,904.9. **Total reserve = 2,762.9 million**.

Step 5. Sensitivity to the tail. If claims continue to develop by 3 percent beyond year 4 (a tail factor of 1.03, plausible for a liability line with long-tailed claims), every ultimate rises by 3 percent: the sum of ultimates is 11,213, so reserves increase by 336 million to **3,099 million**, a 12 percent increase from the base estimate, for what looks like a small change in an assumption.

Interpretation. Chain-ladder is simple and transparent, but it has weaknesses: (1) it assumes the future resembles the past, so changes in claims handling, inflation, or mix distort it; (2) it is highly leveraged on the most recent accident year, whose factor is the product of all remaining factors and so has the largest estimation error; (3) the tail factor is a judgment, not data. Actuaries cross-check with alternative methods (Bornhuetter-Ferguson, which blends the chain-ladder ultimate with an a priori loss ratio; frequency-severity models) and report a *range*, with management choosing a point within it. This is exactly the kind of choice where governance matters: an insurer under earnings pressure has an incentive to select the low end.

### 8.6.4 Catastrophe risk, reinsurance, and capital

Property insurers face *catastrophe* losses (hurricanes, earthquakes, floods) that are highly correlated across policies in a region. These cannot be diversified by writing more policies in the same area. Insurers use probabilistic *catastrophe models* to estimate the distribution of annual losses and their tail, then buy *reinsurance*: quota-share (proportional), excess-of-loss (non-proportional, paying losses above an attachment point), and *catastrophe bonds* (securitization that transfers peak risk to capital markets). The reinsurance decision is a capital-structure decision: it reduces required capital and earnings volatility at the cost of ceded premium and counterparty risk. A rule of thumb is that insurers buy more reinsurance when capital is scarce and less when it is abundant, so reinsurance pricing is cyclical, hardening after large losses.

## 8.7 Insurer Asset-Liability Management and Solvency Regimes

### 8.7.1 Life insurers and the duration mismatch

A life insurer with guaranteed long-term payouts faces a *reinvestment and discounting* problem similar to the bank's, but with longer horizons and less ability to reprice liabilities. If assets are shorter than liabilities, falling rates raise the present value of liabilities more than they raise assets, which reduces surplus. The problem became acute in low-rate environments for insurers that sold long-dated guarantees.

**Example 8.11 – Duration mismatch in a life insurer.**
A life insurer owes a single payment of 100 million in 10 years and discounts at 3.00 percent. It holds assets with value equal to the liability today, in a six-year zero-coupon bond.

Step 1. Liability PV = 100 / 1.03¹⁰ = 100 / 1.34392 = **74.409 million**. Asset: a six-year zero with face value F such that F / 1.03⁶ = 74.409; F = 74.409 × 1.19405 = 88.849 million.

Step 2. Modified durations: liability 10 / 1.03 = **9.709** years; assets 6 / 1.03 = **5.825** years. Duration gap = 5.825 − 9.709 = −3.884 years: assets are shorter than liabilities.

Step 3. Rate scenarios (a parallel shift of all yields):

| Yield | Asset value | Liability value | Surplus change |
|---|---|---|---|
| 2.00% | 78.895 | 82.035 | −3.140 |
| 3.00% | 74.409 | 74.409 | 0.000 |
| 4.00% | 70.218 | 67.556 | +2.662 |

A fall of one percentage point in yields creates a **3.14 million** deficit (4.2 percent of the initial liability value) from a position that was exactly matched in value.

Step 4. Hedge with a receive-fixed swap. DV01 of the liability = 74.409 × 9.709 × 0.0001 = 0.07224 million; DV01 of assets = 74.409 × 5.825 × 0.0001 = 0.04335 million; the gap is 0.02889 million per basis point. A 10-year receive-fixed swap at 3.00 percent has an annuity of (1 − 1.03⁻¹⁰) / 0.03 = 8.530, so its DV01 per unit notional is 8.530 × 0.0001. Required notional = 0.02889 / (8.530 × 0.0001) = **33.9 million**. This closes the first-order gap; convexity differences remain, and the swap introduces collateral requirements, which are a liquidity risk if rates rise.

Alternatively, the insurer could extend the duration of its assets by purchasing long government bonds or infrastructure debt, or lessen its liability exposure by changing guarantee terms in new products. The point matches Chapter 7's treatment: *hedge ratios are first-order; convexity, basis risk, and collateral are the residual risks that actually hurt*. In a prolonged episode of falling rates, the insurer's real problem is *reinvestment risk* on the shorter assets, as the cash flows from maturing bonds must be reinvested at lower yields to meet fixed guarantees.

### 8.7.2 Solvency regimes in general terms

Insurers are regulated to protect policyholders. Two broad approaches exist. *Factor-based* regimes (for example, risk-based capital in the United States) compute required capital by applying factors to asset and liability categories. *Economic* or *market-consistent* regimes (Solvency II in the European Union, the Swiss Solvency Test, and similar frameworks elsewhere) value assets and liabilities at market-consistent values, define *own funds* as the excess, and require own funds to exceed a *solvency capital requirement (SCR)* calibrated to a 99.5 percent one-year value-at-risk. A smaller *minimum capital requirement* triggers harsher intervention. The principles are similar to Basel's: risk-sensitive requirements, supervisory review, and disclosure, with an emphasis on technical provisions and long-term guarantees.

The SCR is built bottom-up from *risk modules*: market risk (interest rates, equity, credit spread, property, currency), underwriting risk (non-life, life, health: premium, reserve, catastrophe, mortality, longevity, lapse), counterparty default risk, and operational risk. Module capital charges are aggregated with a *correlation matrix* to recognize diversification:

```
BSCR = √( Σᵢ Σⱼ ρᵢⱼ × SCRᵢ × SCRⱼ )
SCR  = BSCR + Operational risk charge (+/− adjustments)
Solvency ratio = Own funds / SCR
```

**Example 8.12 – Aggregating an insurer's SCR.**
Module charges are market 400, insurance 300, and counterparty credit 120 (millions); each pair has a correlation of 0.25; operational risk is 60 (added without diversification). Own funds are 900.

Step 1. Sum of squares: 400² + 300² + 120² = 160,000 + 90,000 + 14,400 = 264,400.

Step 2. Cross terms: 2 × 0.25 × (400 × 300 + 400 × 120 + 300 × 120) = 0.5 × (120,000 + 48,000 + 36,000) = 0.5 × 204,000 = 102,000.

Step 3. BSCR = √(264,400 + 102,000) = √366,400 = **605.3**. The simple sum of modules is 820, so diversification benefit is 214.7 (26.2 percent).

Step 4. SCR = 605.3 + 60 = **665.3**. Solvency ratio = 900 / 665.3 = **135.3 percent**. Surplus above the requirement = 234.7.

Step 5. Sensitivity: a 100 basis point fall in rates that reduces own funds by 150 (the life book of this insurer is larger than the stylized single payment of Example 8.11) leaves 750 of own funds, and the ratio falls to 750 / 665.3 = **112.7 percent**; if it also raises the market-risk module because of lower rates, say to 440, the SCR rises and the ratio falls further. Insurers often set an internal target ratio well above 100 percent, such as 150 to 200 percent, because the regulatory minimum triggers supervisory intervention and market confidence erodes before it is reached.

Interpretation. The square-root aggregation says that diversification is powerful when correlations are low and vanishes when they approach 1. Correlation assumptions are set by regulators and are heavily debated, since in crises correlations between market and insurance risks may be higher than the standard formula assumes. The *own funds* side also matters: it depends on the discount curve (including the treatment of any "volatility adjustment" or matching adjustment, which allows some credit-spread movements to be excluded from liabilities), which means regulatory design affects measured solvency and, indirectly, investment strategy.

### 8.7.3 What banks and insurers share, and where they differ

| Dimension | Banks | Insurers |
|---|---|---|
| Main liability | Deposits and wholesale funding, callable | Policy liabilities, contingent on events |
| Run risk | High (liquidity-driven) | Lower (except lapse in life products; cat events) |
| Dominant balance-sheet risk | Credit and interest-rate | Underwriting, reserving, interest-rate (life) |
| Key capital constraint | CET1/RWA, leverage ratio, liquidity ratios | SCR or RBC ratio, own funds quality |
| Profit driver | Net interest margin, fees | Underwriting margin, investment spread |
| Key estimate in earnings | Loan-loss provisions | Loss reserves, actuarial assumptions |
| Typical hedging tools | Swaps, caps, floors, securitization | Swaps, reinsurance, cat bonds |

A financial conglomerate (like Lakeshore Financial) must also manage *double leverage* (debt raised at the holding company and injected as equity into subsidiaries) and *contagion* between subsidiaries, and regulators often impose group-level supervision for that reason.
