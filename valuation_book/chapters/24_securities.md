# Part VII — Extensions {.part}

The chapters in this part deepen topics that the syllabus chapter treats briefly or assumes from earlier study. They can be read in any order, but Chapter 24 (valuation of securities) is the natural prerequisite for the rest of the book and may be read first by students who need a refresher.

# Chapter 24 — Background: Valuing Securities (Bonds, Preference Shares and Equity)

The syllabus notes that the valuation of **securities** — equity shares, preference shares, bonds — has been covered earlier, and that the focus now is the valuation of the **business**. Business valuation, however, rests on the same principles: every security is a claim on cash flows, valued by discounting those cash flows at a required return. This chapter revises the valuation of the three standard securities, because (i) the debt and preference components appear in the equity bridge, (ii) the cost of debt is derived from bond yields, and (iii) equity valuation by dividends is the model behind the Gordon formula.

## 24.1 The common principle

**Value of any security = Σ (expected cash flow in period t) ÷ (1 + required return)ᵗ**

What changes between securities is (a) the **pattern of cash flows** (fixed coupons and principal; fixed preference dividends; uncertain, growing dividends) and (b) the **required return** (which reflects the risk of that claim: lowest for debt, higher for preference, highest for equity).

## 24.2 Valuing bonds (debentures)

A conventional bond pays a fixed **coupon** each year and repays the **face value** at maturity:

**Price = Σₜ₌₁ⁿ [Coupon ÷ (1 + y)ᵗ] + Face value ÷ (1 + y)ⁿ**

where y is the **yield to maturity (YTM)**, the market's required return on bonds of that risk and maturity.

### 24.2.1 Worked example 24.1
A 5-year debenture of face value ₹1,000 with a 9% annual coupon.

| Required yield | Price | Relationship to face value |
|---------------:|------:|---------------------------|
| 7% | **₹1,082.0** | Premium (coupon > yield) |
| 9% | **₹1,000.0** | Par (coupon = yield) |
| 11% | **₹926.1** | Discount (coupon < yield) |

*Calculation at 11%:* PV of coupons = 90 × annuity factor (5 years, 11%) 3.6959 = 332.6; PV of face value = 1,000 × 0.5935 = 593.5; price = **926.1**.

**Inverse relationship:** when market yields rise, bond prices fall, and vice versa. If the debenture trades at ₹920, the YTM is about **11.17%**.

### 24.2.2 Why this matters in business valuation
1. **Cost of debt.** The pre-tax cost of debt in WACC is the YTM of the firm's bonds (or the current borrowing rate), not the old coupon.
2. **Market value of debt.** In the equity bridge and in WACC weights, debt should be at market value; it differs from face value when rates have moved or when default risk is high.
3. **Distressed debt.** The promised yield overstates the expected return; debt of a distressed firm trades at a discount that reflects the probability of default (Chapter 14).

## 24.3 Valuing preference shares

A preference share pays a **fixed dividend** ahead of equity.

- **Irredeemable preference share** (perpetual): **Value = Dividend ÷ Required return**.
- **Redeemable preference share:** **Value = Σ Dividend ÷ (1 + k)ᵗ + Redemption value ÷ (1 + k)ⁿ** (like a bond).

### 24.3.1 Worked example 24.2
A ₹100 preference share paying 10% dividend, required return 12%.

- *Irredeemable:* 10 ÷ 0.12 = **₹83.33**.
- *Redeemable at par after 5 years:* 10 × 3.6048 + 100 × 0.5674 = 36.05 + 56.74 = **₹92.79**.

The redeemable share is worth more because the capital is returned at par (₹100) in five years.

**Role in valuation.** Preference capital is **deducted in the equity bridge** at its market or redemption value, and no tax shield applies to preference dividends (they are paid out of after-tax profit). In the capitalisation method the preference dividend is deducted before computing earnings for equity (Question 2 in Chapter 21).

## 24.4 Valuing equity shares

Equity holders receive uncertain, growing dividends (and ultimately the sale price). The **Dividend Discount Model (DDM)** values equity as the present value of expected dividends:

**P₀ = Σ Dₜ ÷ (1 + Ke)ᵗ**

### 24.4.1 Constant growth (Gordon)
**P₀ = D₁ ÷ (Ke − g)** — Chapter 2.

### 24.4.2 Two-stage growth
Dividends grow at g₁ for n years and then at g₂ for ever:

**P₀ = Σₜ₌₁ⁿ [D₀(1 + g₁)ᵗ ÷ (1 + Ke)ᵗ] + [D_(n+1) ÷ (Ke − g₂)] ÷ (1 + Ke)ⁿ**

*Worked example 24.3.* D₀ = ₹5; g₁ = 12% for 3 years; g₂ = 6%; Ke = 13%.

| Year | Dividend | PV @ 13% |
|-----:|---------:|---------:|
| 1 | 5.60 | 4.96 |
| 2 | 6.27 | 4.91 |
| 3 | 7.02 | 4.87 |
| | | **14.74** |

D₄ = 7.02 × 1.06 = 7.45; TV at year 3 = 7.45 ÷ (0.13 − 0.06) = **106.37**; PV = 106.37 ÷ 1.13³ = **73.72**.

**P₀ = 14.74 + 73.72 = ₹88.46.**

### 24.4.3 Link with growth and retention
Sustainable growth = Retention ratio × ROE. A company that retains 40% of earnings and earns ROE 15% grows at 6%; its dividend payout is 60%.

### 24.4.4 P/E from the Gordon model
P₀ ÷ E₀ = Payout × (1 + g) ÷ (Ke − g). With payout 60%, g 6%, Ke 13% → P/E = 0.6 × 1.06 ÷ 0.07 = **9.09×**. This links the P/E method (Chapter 4) to fundamentals: higher growth and lower required return raise the P/E.

## 24.5 From securities to the business

| Claim | Valued by | Appears in the business valuation as |
|-------|-----------|--------------------------------------|
| Debt | Discounting coupons and principal at YTM | Deduction in the bridge; weight and cost in WACC |
| Preference | Fixed dividend and redemption | Deduction in the bridge; sometimes a WACC component |
| Equity | Dividends/FCFE at Ke | The residual: EV minus other claims |
| Whole firm | FCFF at WACC | Enterprise value |

The value of the firm is the **sum of the values of all claims**: V = D + P + E. The business-valuation approaches of this book value either the whole (DCF at WACC) or the residual (earnings, FCFE).

## 24.6 Convertible and other hybrid securities

A **convertible debenture** is a bond plus an option to convert into equity. Value = straight-bond value + conversion option value. For an investor, if the share price is far below the conversion price the instrument behaves like debt; if far above, like equity. In the equity bridge, treat it as debt if conversion is unlikely, as equity (additional shares) if very likely, and split into components in between.

## 24.7 Common mistakes

1. Using the coupon rate as the cost of debt rather than the current YTM.
2. Treating preference dividends as tax-deductible.
3. Using face value of debt in the bridge when the market value differs materially.
4. Applying the Gordon model with g ≥ Ke.
5. Ignoring that equity is a *residual* claim and therefore the riskiest.

## Chapter 24 summary

- Value = PV of cash flows at the required return; risk differs by claim.
- Bond price rises as yield falls: ₹1,000 5-year 9% bond = ₹926 at 11%, ₹1,000 at 9%, ₹1,082 at 7%.
- Preference: irredeemable = D/k; redeemable like a bond.
- Equity: DDM; two-stage example ₹88.46; P/E = payout × (1 + g)/(Ke − g).
- Business value is the sum of the claims' values.

## Check your understanding

1. Price a 4-year ₹100 bond with 8% coupon at a 10% yield.
2. Value an irredeemable preference share with ₹8 dividend at 10%.
3. Explain why bond prices fall when yields rise.
4. Compute P/E: payout 50%, g 5%, Ke 12%.
5. Why is the cost of debt based on YTM and not the coupon?

**Answers.** (1) 8 × 3.1699 + 100 × 0.6830 = 25.36 + 68.30 = **₹93.66**. (2) 8 ÷ 0.10 = **₹80**. (3) Fixed cash flows are discounted at a higher rate. (4) 0.5 × 1.05 ÷ 0.07 = **7.5×**. (5) YTM is the market's current required return; the coupon is historical.

> **Exam focus.** Expect bond/preference pricing as sub-parts in capital-structure and WACC questions.

<div class="pagebreak"></div>
