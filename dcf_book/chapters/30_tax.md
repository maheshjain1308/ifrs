# Chapter 30 — Taxes, Tax Losses and Deferred Taxes in DCF

Tax is the single largest cash outflow of most profitable companies after operating costs, and it is often treated carelessly in DCF models: one rate, applied everywhere, forever. This chapter looks at the tax inputs a careful valuation needs: the right rate, the treatment of tax losses and credits, timing differences and deferred taxes, the tax shield on debt, and international and structural issues.

*Note.* Tax law changes frequently and differs by jurisdiction; this chapter describes concepts, with Indian references for orientation only. Always check the current law for a real engagement.

## 30.1 Which tax rate?

| Rate | Definition | Use in DCF |
|------|------------|------------|
| **Statutory (headline) rate** | Rate in the law, plus surcharge and cess | Starting point |
| **Marginal rate** | Rate on the next rupee of taxable profit (relevant when the firm is profitable) | Terminal value; tax shield on interest; value of additional deductions |
| **Effective rate** | Tax expense ÷ pre-tax profit (book) | Historical analysis; sanity check |
| **Cash tax rate** | Taxes paid ÷ pre-tax profit | Near-term forecasts, where deferral and credits matter |

*Indian illustration.* Domestic companies can choose between the older regime (a headline rate of 25% or 30% plus surcharge and cess, with various deductions and incentives, and MAT) and a concessional regime of about 22% before surcharge and cess (about 25.17% all-in) with fewer deductions and no MAT credit. New manufacturing companies may qualify for a lower regime. The correct near-term rate depends on the regime elected and the incentives the company can actually use. The book uses 25% as a rounded marginal rate.

**Rule of thumb.** Use the *expected cash tax rate* in the explicit period, converging to the *marginal rate* in the terminal period. Do not carry a low effective rate (from a tax holiday or accumulated credits) into perpetuity.

## 30.2 Tax on operating profit versus actual tax

FCFF uses **tax on EBIT** (the "unlevered" tax), not the actual tax paid. The interest tax shield is recognised in the after-tax cost of debt in WACC (or in APV). Why does the distinction matter?

- If you use actual taxes (which are reduced by interest deductions) in FCFF *and* use an after-tax cost of debt, you count the tax shield twice.
- If the firm's actual leverage differs from the target, actual tax differs from the target-leverage tax; the unlevered tax avoids contamination from the firm's current financing.

## 30.3 Tax losses (NOLs) and unabsorbed depreciation

A company with accumulated losses can set them against future profits, within the limits of the law (for example, time limits for business losses and conditions on change of ownership). The present value of future tax savings is an asset.

### 30.3.1 Two ways to treat NOLs

1. **Inside FCFF:** forecast taxable income after set-off and compute taxes accordingly; cash taxes in the early years are lower; the benefit is in the PV of cash flows.
2. **As a separate asset:** compute FCFF with the full tax on EBIT, then add the PV of the NOL shield in the bridge.

Use *one* approach. Method 2 is cleaner for transparency.

### 30.3.2 Worked example
A company has opening unabsorbed losses of ₹200 crore and expects EBIT of −100, 40, 150, 250 and 300 over five years; tax rate 25%; discount rate 11%.

| Year | EBIT | Opening NOL | Loss added | Loss used | Taxable income | Tax with NOL | Tax without NOL | **Saving** |
|-----:|-----:|------------:|-----------:|----------:|---------------:|-------------:|----------------:|-----------:|
| 1 | (100) | 200 | 100 | — | 0 | 0 | 0 | 0 |
| 2 | 40 | 300 | — | 40 | 0 | 0 | 10.0 | 10.0 |
| 3 | 150 | 260 | — | 150 | 0 | 0 | 37.5 | 37.5 |
| 4 | 250 | 110 | — | 110 | 140 | 35.0 | 62.5 | 27.5 |
| 5 | 300 | 0 | — | — | 300 | 75.0 | 75.0 | 0 |

(In this simple example, year-1's loss is added to the pool and the whole pool of ₹300 crore is used over years 2–4.) The savings of ₹75 crore (= 25% of ₹300 crore) have a present value at 11% of **₹53.7 crore** — 72% of the undiscounted amount. A valuer adds ₹53.7 crore to EV (Method 2) or builds the lower taxes into FCFF (Method 1).

**Caveats.** The shield is only as valuable as the firm's ability to generate taxable profit before the losses expire; the shield may be lost on a change of control if the law restricts it; and a probability of non-use should reduce the value.

## 30.4 Minimum alternate tax (MAT) and credits

Where a minimum tax applies on book profits and the excess over normal tax can be carried forward as a credit, the credit is an asset whose value depends on when it will be utilised. Model the utilisation schedule: credits are used when normal tax exceeds MAT, subject to the carry-forward period. Value as the PV of expected utilisation. Companies in the concessional regime generally cannot use or earn MAT credit.

## 30.5 Timing differences and deferred taxes

Book depreciation and tax depreciation often differ. Accelerated tax depreciation defers tax: cash taxes are lower early and higher later; the deferred tax liability (DTL) in the balance sheet records the difference.

### 30.5.1 Worked example
An asset costs ₹1,000 crore. Book depreciation is straight-line over 10 years (₹100 crore a year). Tax depreciation is accelerated: ₹300, 250, 200, 150 and 100 crore in years 1–5. Tax rate 25%; discount rate 11%.

- PV of tax shield with tax depreciation = **₹194.4 crore**.
- PV of the shield if tax depreciation matched the book schedule = **₹147.2 crore**.
- The *value of acceleration* = **₹47.2 crore**.

Deferred tax liability: end of year 1: (300 − 100) × 25% = ₹50 crore; year 3: (750 − 300) × 25% = ₹112.5 crore; year 5: (1,000 − 500) × 25% = ₹125 crore (the peak); then it reverses to zero by year 10.

### 30.5.2 How to treat DTLs in valuation
- **Perpetually-growing capex** means that the DTL on the pool of assets *does not reverse* in aggregate: new assets create new deferrals that offset the reversals of old ones. In that case, using *cash* taxes in FCFF (i.e., recognising the deferral as lower cash tax) and *not* deducting the DTL in the bridge is consistent.
- **If the firm will stop investing** (liquidation or run-off), the DTL reverses; deduct the PV of the reversal or model it in FCFF.
- **Never both:** if cash taxes are used in FCFF, do not deduct the DTL; if book taxes are used, deduct the PV of the DTL's reversal.

A **deferred tax asset (DTA)** from losses or provisions is valued in the same spirit: only if it will actually reduce future cash taxes.

## 30.6 The tax shield on debt

- The shield = t × interest, valuable only if the firm has taxable profit to absorb the deduction.
- **Interest-deductibility limits** (such as a cap on interest relative to EBITDA for related-party debt) reduce the shield.
- **Personal taxes:** if investors pay more tax on interest than on equity returns, part of the corporate benefit is offset (Miller). Valuation at the company level typically ignores it, but a distinction should be made when valuing for a particular investor.
- In **APV** the tax shield is discounted at the cost of debt (fixed debt) or at the unlevered cost of equity (debt adjusted to value). In **WACC** the shield is in the after-tax Kd.

## 30.7 Group structure, transfer pricing and international tax

- **Subsidiaries in different jurisdictions** have different rates; compute taxes by entity or use a weighted rate by profit.
- **Repatriation taxes** (withholding on dividends) reduce the value of cash trapped overseas.
- **Transfer pricing:** profit allocations between group entities affect taxes; adjustments or disputes can create liabilities.
- **Permanent establishment risks** and **general anti-avoidance rules** are legal risks to be treated as contingent liabilities if material.

## 30.8 Tax in the terminal value

1. Use the **marginal statutory rate** unless a lasting lower rate is justified (e.g., a permanently lower regime).
2. **Incentives** with expiry dates must not be extrapolated.
3. **DTL growth** in perpetuity: be consistent with the choice in 30.5.2.
4. If tax law is *expected to change* (rate cuts, regime changes), consider scenarios rather than a single guess.

## 30.9 Checklist

1. Which regime applies; which incentives are available and when do they expire?
2. Near-term cash tax rate vs terminal marginal rate.
3. NOLs, unabsorbed depreciation, MAT credits: how much, when usable, probability of loss on change of control.
4. DTL/DTA treatment consistent between FCFF and bridge.
5. Tax shield on debt only to the extent usable.
6. Entity-level taxes and repatriation costs for multi-jurisdiction groups.
7. Contingent tax liabilities and disputed assessments.

## Chapter 30 summary

- Use cash tax rates near term, marginal in the terminal period; tax on EBIT in FCFF.
- NOLs and credits are assets: value by PV of savings, once.
- Accelerated tax depreciation defers tax; treatment of DTL must match the taxes in FCFF.
- The tax shield on debt exists only if there is taxable profit to absorb it.

## Review questions

1. Why is tax on EBIT, not actual tax, used in FCFF?
2. Compute the PV of the tax saving from a loss pool of ₹100 crore used evenly over 4 years at 25% tax and 10% discount rate.
3. When is it appropriate to ignore a deferred tax liability in the bridge?
4. How should tax-holiday benefits be treated in the terminal period?
5. What happens to the value of NOLs when control changes?

<div class="pagebreak"></div>
