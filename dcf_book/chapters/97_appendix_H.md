# Appendix H — Short Answers to Chapter Review Questions {.unnumbered}

Brief model answers to the review questions at the end of each chapter. Numerical answers repeat those in Appendix F where relevant. Use them to check understanding, not as a substitute for working the questions.

## Chapter 1 — What Is Valuation?

1. *Cost* is what was paid (historical); *price* is what the asset trades for now (observed); *value* is the estimate of worth from expected cash flows and risk. Example: a listed company's book value (cost-based), its market capitalisation (price) and a DCF estimate (value).
2. M&A (negotiation ranges, synergies), financial reporting (fair value rules, market-participant assumptions) and tax/legal (prescribed standards). The purpose determines the standard of value and therefore the method and adjustments.
3. A multiple embeds assumptions about growth, risk and returns; applying a peer multiple assumes the subject matches the peer on those dimensions.
4. Understand the business; forecast free cash flows; estimate the discount rate; estimate terminal value; discount, bridge to equity and test.
5. Different views of growth, margins, reinvestment, risk and the durability of advantage; judgement is unavoidable, so a good valuation exposes it.

## Chapter 2 — Mathematics of Discounting

1. Sum PV = C₁/(1+r) × [1 + q + q² + …] with q = (1+g)/(1+r) < 1 gives C₁/(1+r) ÷ (1 − q) = C₁/(r − g).
2. NPV() treats the first value as period 1; if the range includes today's investment it is discounted one period too much. Add the time-0 amount outside the function (or use XNPV).
3. A Gordon TV with mid-year flows is discounted at N − 0.5 years; an exit-multiple TV (sale at year end) at N years.
4. 1.12 ÷ 1.06 − 1 = 5.66%.
5. IRR ignores scale, assumes reinvestment at the IRR, and can be multiple or undefined when cash flows change sign repeatedly; NPV is the sounder criterion.

## Chapter 3 — Architecture of a DCF

1. FCFF = EBIT(1 − t) + D&A − capex − ΔNWC: operating cash after tax and reinvestment, available to all capital providers.
2. WACC is below Ke; discounting equity cash flows at a lower rate overstates value and double-counts the benefit of debt.
3. Banks/insurers (debt is operating raw material), firms with stable leverage, or where debt flows are central; DDM for stable high-payout firms.
4. (Any four) cash flow ↔ discount rate; cash flow ↔ claim; currency/inflation; growth ↔ reinvestment; risk ↔ rate; tax treatment; cash/non-operating assets; timing convention.
5. 120 + 40 − 90 − 15 + 30 − 10 = **75**.

## Chapter 4 — Reading Financial Statements

1. Interest income belongs to the financial/non-operating layer; its source (the cash) is valued in the bridge, so including it in FCFF double-counts.
2. 300 × 0.75 ÷ 1,800 = **12.5%**.
3. EBITDA rises (rent removed); lease liability is debt; FCFF is before lease payments, so EV includes the lease claim and the bridge deducts it; WACC should include lease debt.
4. When the item is genuinely non-recurring and the cost is not recurrent; test: if it occurred in three of the last five years, treat as recurring.
5. The business is harvesting its asset base — sustainable only temporarily; reported FCFF is flattered and a future catch-up in capex is likely.

## Chapter 5 — Free Cash Flow to the Firm

1. It is captured in the after-tax cost of debt in WACC; including it in FCFF too would double-count.
2. FCFF = EBIT(1 − t) + D&A − … = (EBITDA − D&A)(1 − t) + D&A − … = EBITDA(1 − t) + t·D&A − …
3. With growth, capex exceeds depreciation: roughly (1 + g)^(L/2) times depreciation for an asset life L (≈ 1.28 for g = 5%, L = 10).
4. Treat as a real cost: leave it deducted from EBIT; do not add it back.
5. Yes: a firm with large interest and depreciation but positive operating cash after tax and reinvestment can have negative net income yet positive FCFF.

## Chapter 6 — FCFE and DDM

1. 200 + 60 − 140 − 20 + 50 − 30 = **120**.
2. Equity risk rises with leverage; if debt changes in the forecast, Ke must be re-levered or the FCFE value is inconsistent.
3. Payout = 1 − g/ROE = 1 − 6/18 = **66.7%**.
4. When payout differs from FCFE (non-payers, high borrowers), dividends irregular, or buyback-heavy firms.
5. Deposits and borrowings are operating inputs; enterprise value and net debt are not meaningful.

## Chapter 7 — Forecasting

1. g = reinvestment rate × ROIC; 7% ÷ 14% = **50%**.
2. The marginal ratio shows how efficiently new capital is expected to work; an optimistic ratio inflates FCFF.
3. Five years (maybe seven) for a stable consumer company; short because growth and margins are near steady state.
4. Operating leverage (check fixed/variable split), mix (check segment margins), pricing/input costs (check pass-through history), scale/efficiency (check peer margins).
5. A period in which growth, margin and ROIC move gradually to terminal levels; avoids unrealistic cliffs.

## Chapter 8 — Normalisation

1. Gain on asset sale (remove; asset already valued), restructuring cost (add back if one-off), related-party rent (restate to market), associate profit (remove and value the stake in the bridge).
2. Use a full-cycle average margin or a mid-cycle price deck; base terminal margin on it.
3. It is a real economic cost of compensating employees; adding it back overstates FCFF.
4. Debt, leases, unfunded pensions, deferred consideration, probable contingent liabilities, preference capital.
5. Because adjustments change taxable profit; ignoring tax effects misstates NOPAT.

## Chapter 9 — Cost of Equity

1. Investors can diversify away specific risk, so only market (systematic) risk earns a premium.
2. 7 + 1.2 × 6 = **14.2%**.
3. It conflates the risk of the mean cash flow with volatility around it; better to reflect specific risks in cash-flow scenarios.
4. Historical (large standard error, survivorship); implied (depends on market-level and cash-flow assumptions); survey (opinion-based).
5. Compare with Rf, Kd, peers, the market return; check Ke > Kd > Rf and plausibility by risk.

## Chapter 10 — Beta

1. 1.2 ÷ (1 + 0.75 × 0.5) = **0.873**.
2. 0.873 × (1 + 0.75 × 0.2) = **1.004**.
3. Errors in individual regressions are largely independent and partly cancel; standard error shrinks with √n.
4. Cash has near-zero beta and dilutes observed beta: operating beta = unlevered beta ÷ (1 − cash/firm value).
5. Betas tend toward 1 as firms mature; many valuers move the terminal beta toward 1 (or the industry average).

## Chapter 11 — WACC

1. (700 × 14% + 300 × 10% × 0.7) ÷ 1,000 = **11.9%**.
2. Debt adds fixed claims ahead of equity, increasing equity volatility.
3. Iterate: guess D/V, compute WACC and value, recompute D/V, repeat until stable.
4. It double-counts risk if cash flows are already prudent; use scenarios instead.
5. Lease liabilities become debt: include in capital structure, cost of debt and bridge.

## Chapter 12 — Terminal Value

1. Growth needs investment; assuming growth without reinvestment implies an unsustainable infinite ROIC.
2. TV = NOPAT ÷ WACC; growth adds nothing because new investment earns exactly its cost.
3. 200 × (1 − 4/12) ÷ 0.06 = **2,222**.
4. Gordon TV at N − 0.5; exit multiple TV at N.
5. TV share of EV, implied multiples, implied ROIC/reinvestment, g ≤ Rf, terminal margins, capex ≥ depreciation, terminal tax and WACC.

## Chapter 13 — Equity Bridge

1. An item belongs in the bridge if its value is not already in the FCFF being discounted.
2. NCI at book ignores the subsidiary's profitability; market-based value is the claim.
3. Existing options are bridge items (option value); future grants are in the ESOP expense in EBIT.
4. FCFF is before lease payments (they are financing), so the lease claim is debt.
5. DLOC = 30% ⇒ 1/(1 + CP) = 0.70 ⇒ CP = **42.9%**.

## Chapter 14 — Case Study

1. The downside scenario is further from base than the upside, so the weighted mean is below base.
2. Terminal ROIC and the year-5 margin: they drive TV, which is 81.5% of EV.
3. At ROIC = WACC value barely responds to g: growth adds nothing without excess returns.
4. Revenue 2,280 × 12.5% = 285.0 EBIT; NOPAT 213.75; reinvestment 140; FCFF **73.75**.
5. Sample: "We estimate fair equity value of about ₹2,560 crore (₹51 per share), within a range of ₹46–₹58, on a controlling, going-concern basis; terminal value forms 82% of EV."

## Chapter 15 — Sensitivity and Simulation

1. Scenarios keep the discount rate for systematic risk and put specific risks in the expected cash flows; an add-on distorts long-dated flows.
2. A ranked bar chart of value swings per input; it shows which assumptions matter.
3. Subjective inputs, ignored correlations, spurious precision, incoherent extremes.
4. The TV formula is convex in WACC and g, so downside in WACC reduces value less than upside increases it.
5. Boom (price up, volumes up, margins up), base, downturn/over-capacity (prices down, volumes down, margins down, higher leverage risk).

## Chapter 16 — Cross-Checks

1. P₀ = D₁/(Ke − g) = EPS₁ × payout/(Ke − g); dividing by EPS₀ gives payout × (1 + g)/(Ke − g).
2. It solves for the assumptions implied by the market price; it shows what must be true to justify a price.
3. Growth leaders' multiples embed higher growth/ROIC; applying them overstates value.
4. Trading multiples are minority prices of listed peers; transaction multiples include control premia and synergies.
5. Weights are subjective; averaging hides disagreements; method suitability matters more.

## Chapter 17 — APV and LBOs

1. Without debt there is no tax shield, so equity holders require more than the blended WACC.
2. 0.30 × 400 = **120**.
3. When debt is rebalanced to a constant ratio of value, the shield's risk equals the firm's (Ku).
4. EBITDA growth, debt paydown, multiple expansion.
5. They differ when debt policy differs; large when leverage changes materially or distress costs are significant.

## Chapter 18 — Financial Institutions

1. Debt is operating, interest is an operating cost, and enterprise value/net debt are ill-defined.
2. (0.18 − 0.06) ÷ (0.14 − 0.06) = **1.50×**.
3. If ROE < Ke, growth lowers P/B because new equity earns less than its cost.
4. FCFE = net income − equity retained to maintain capital ratios as risk-weighted assets grow.
5. NIM, credit cost, cost-to-income, leverage, fee income.

## Chapter 19 — Cyclicals, Resources, Real Estate

1. It overstates sustainable earnings and ROIC; the terminal state must be mid-cycle.
2. Explicit cash flows to reserve exhaustion with a price deck, costs, royalties, taxes, capex and closure costs; no perpetuity.
3. 8 ÷ 0.075 = **106.7**; 8 ÷ 0.085 = **94.1** (−11.8%).
4. The concession ends; cash flows stop at expiry.
5. Tax leakage, overhead, lack of control over cash flows, capital-allocation record.

## Chapter 20 — Start-ups

1. It embeds failure: the target is on the *successful* outcome, not the expected return.
2. 400 ÷ 1.5⁴ = 79.0 post-money; pre-money = **64.0**.
3. Forecast revenue and margin to maturity, accumulate losses as tax assets, interpolate, survival-adjust.
4. LTV/CAC well above 3×, strong retention, improving contribution margin, scalable take-rate.
5. It avoids mixing failure risk into the discount rate and exposes the probabilities.

## Chapter 21 — Distressed Companies

1. Cash flows already reflect distress probabilities; adding it to the rate counts it twice.
2. 800 × 0.65 + 100 × 0.35 = **555**.
3. Limited liability: equity holders can lose only what they invested but gain from recovery — a call option.
4. Typically 20–50% of book, lower for specialised plant.
5. The valuer determines fair value and liquidation value, used by creditors to evaluate plans.

## Chapter 22 — India and Emerging Markets

1. 1.12 ÷ (1.072/1.04) − 1 = **8.66%**.
2. The dollar rate omits expected rupee depreciation, understating the rate and overstating value.
3. Pre-tax rate, five-year budget limit, excludes future restructuring/enhancement and financing flows.
4. In oppression/appraisal contexts, fair value for a controller, or when valuing the whole company for a strategic buyer.
5. Model leakage in cash-flow scenarios or deduct the PV of non-arm's-length payments; avoid blanket discount-rate adders.

## Chapter 23 — Real Options, Intangibles, ESG

1. Because the option to wait/expand has value; NPV today ignores flexibility.
2. S = PV of mine cash flows; K = development cost; T = lease life; σ = volatility of mine value (price volatility); r = risk-free; dividend yield = cost of delay.
3. Phase III start: 0.5 × 1,200 − 120 = 480; Phase II start: 0.5 × 480 − 40 = **200**.
4. The value is proportional to the royalty rate and is a market-evidence-based judgement.
5. Model the price path × emissions less abatement, after tax, in the forecast cash flows.

## Chapter 24 — Pitfalls and Practice

1. Balance check; two-way FCFF reconciliation; sources/uses tie; terminal checks (g ≤ Rf, WACC − g ≥ 3 pts); sensitivity-centre check.
2. State assumptions in advance, document evidence, use ranges, disclose conflicts, retain the right to decline.
3. Conclusion and range, standard/premise of value, date, purpose, key assumptions, limitations.
4. Compare to history, to peers and industry, test drivers, reconcile cash, scrutinise incentives.
5. Choose three from the twenty and describe the direction and size of the distortion.

## Chapter 25 — M&A

1. Revenue synergies depend on customer behaviour and competitor response; cost synergies are within management's control.
2. 70 ÷ 560 = **0.125**.
3. EPS accretion can come from cheap financing or a high acquirer P/E, regardless of value created.
4. The highest bidder tends to have the most optimistic estimate and overpays.
5. As a contingent claim: probability-weighted PV of expected payments.

## Chapter 26 — Private Companies

1. Market beta ÷ correlation with market; for an undiversified owner's investment value.
2. Compare to a protective put over the restriction period; the put value approximates the cost of illiquidity.
3. 500 × 20% × (1 − 0.15) = **₹85** (in units of the same currency).
4. Owner pay, personal expenses, related-party purchases, non-operating assets, under-investment, unrecorded liabilities.
5. A minority forced out should receive its pro-rata share of the whole company's value.

## Chapter 27 — Aster Pharma

1. EBITDA after Ind AS 116 excludes lease payments, so FCFF is before them; the lease claim is financing.
2. Mid-year flows continue in perpetuity; the Gordon TV is discounted with the same mid-year factor as FCFF₅.
3. Deduct 5% × 200 = 10 → 190 (and the per-share value falls by ₹0.10).
4. ROIC rises from 15% to 20% on margin expansion; terminal fade to 16% is a conscious conservative assumption.
5. Separate DCF/multiples of the subsidiary, minority rights, governance, any put options.

## Chapter 28 — Case Library

1. Low reinvestment means growth is cheap, so the ROIC/WACC spread matters less.
2. If the forecast ended at a trough, naive extrapolation would understate value; use mid-cycle margins.
3. Growth consumes all or more than all of FCFE during the high-growth years.
4. Failure is handled in the probabilities; 25% reflects systematic risk and illiquidity.
5. Strong governance, high-quality assets, liquid stakes and a record of distributions.

## Chapter 29 — Integrated Model

1. Net income → equity; D&A and capex → fixed assets; revenue → NWC; debt → interest; closing cash → balance sheet; cash-flow items → balance-sheet changes.
2. Different financing policies: the WACC assumes constant D/V while the FCFE model's debt follows book reinvestment.
3. Margin expansion raises ROIC and NI faster than equity grows.
4. Interest on opening balances; iteration; macro.
5. All FCFE is distributed, so cash stays constant and equity grows only by retained earnings.

## Chapter 30 — Tax

1. Because the interest tax shield is in WACC; and the unlevered tax is independent of financing.
2. 25 per year × 25% = 6.25 a year; PV at 10% = 6.25 × 3.1699 = **₹19.8**.
3. When growth in capex keeps the DTL perpetually deferred and cash taxes are used in FCFF.
4. Remove them; apply the marginal rate in the terminal period.
5. It may be lost or restricted by law, so the shield's value could fall or vanish.

## Chapter 31 — Sector Primers

1. Banks' debt is operating; FMCG's capital structure is a financing decision, so FCFF works.
2. Model the cliff explicitly: sharp revenue/margin fall after expiry.
3. In retail, leases are material and affect EBITDA, EV and WACC; in IT services they are small.
4. Value ends with the concession; no perpetuity.
5. Open answer: identify margin, growth and ROIC/capital intensity for the sector.

## Chapter 32 — Limits of DCF

1. True if undisciplined; discipline (linked drivers, TV checks, sensitivities, reverse DCF) makes it defensible.
2. Compare with the reference class's base rate of sustaining such growth; require evidence for being exceptional.
3. Liquidation (asset value), holding company (NAV), bank (excess return); others per Section 32.3.
4. Build the value before looking at the price; record first estimate and reasons for change.
5. Open answer; common candidates: consistency (currency, financing), terminal assumptions, ranges.

## Chapter 33 — Growth and ROIC

1. Each rupee reinvested yields less than a rupee of value; returning cash would create more value.
2. (1 − 0.04/0.18) ÷ (0.10 − 0.04) = 0.7778 ÷ 0.06 = **12.96×**.
3. DCF value minus earnings-power value (NOPAT ÷ WACC).
4. 12 years of excess returns then ROIC ≈ WACC; with a possible cliff.
5. Average ROIC is NOPAT ÷ total capital; incremental ROIC is ΔNOPAT ÷ net new investment.

<div class="pagebreak"></div>
