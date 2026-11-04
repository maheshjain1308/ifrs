# Chapter 23: Climate Finance, the Energy Transition and ESG Investing

## Learning Objectives

- Explain how physical and transition climate risks reach a firm's cash flows, discount rate and balance sheet, and why they belong inside the capital budgeting process rather than in a separate sustainability report.
- Build and defend a carbon price assumption (explicit, shadow or internal) and run an NPV analysis under multiple carbon-price scenarios, including pass-through, break-even prices and the value of the option to retire an asset early.
- Evaluate stranded-asset exposure using scenario-weighted valuation, accelerated depreciation and impairment logic, and distinguish a stranded asset from a merely less profitable one.
- Rank decarbonization projects with a marginal abatement cost curve and decide how much abatement to buy internally at a given carbon price.
- Compare green, sustainability-linked, transition and social financing instruments, quantify the "greenium" and step-up economics for an issuer, and recognize the credibility risks (greenwashing) that attach to labelled finance.
- Discuss the theory and the mixed empirical evidence on ESG investing carefully, separating the question "does ESG raise returns?" from "does ESG change the cost of capital?", and describe in general terms the main climate disclosure frameworks (TCFD, ISSB, GHG Protocol scopes and regional regimes).

## Opening Vignette

*Illustrative scenario. Meridian Cement & Aggregates is a fictional mid-sized building-materials group with eleven plants in three countries, EBITDA of 410 million, and net debt of 1.1 billion.*

In March, the board's investment committee receives two proposals. The first is a 380 million replacement of an aging clinker kiln with a modern, more efficient one: same process, same fuel, about 12 percent less carbon per tonne of product. Its internal rate of return, calculated the way the company has always calculated it, is 13.5 percent against a hurdle rate of 9 percent. The second is a 260 million package to switch part of the fuel mix to biomass and waste-derived fuel, install waste-heat recovery, and prepare a site for future carbon capture. Its conventional IRR is 7.4 percent. On the old rules, the first proposal wins and the second is declined.

The newly hired head of strategy asks three awkward questions. What carbon price does the first project's 13.5 percent assume? (Answer: today's free-allowance regime, effectively near zero for the next decade.) What happens to that project if free allocations are phased out, as the local regulator has signalled, and the price of a tonne reaches 80? (The IRR falls to roughly 8 percent, below the hurdle.) And what would a lender or investor in 2035 say about a kiln that is expected to operate until 2060?

The CFO realizes the committee has been valuing cash flows from a world that will not exist. The company also has a sustainability-linked loan that steps up its margin if emissions intensity targets are missed, a green bond programme under discussion, and investors who ask whether the share price embeds "transition risk". The finance team must now translate climate science, policy uncertainty and investor sentiment into discount rates, cash flows, scenarios and financing choices.

This chapter provides the toolkit. It treats climate as a corporate finance problem: a set of uncertain, correlated, policy-driven cash-flow shocks, a set of new financing instruments with explicit economics, and an investor landscape in which the evidence is more nuanced than either advocates or critics suggest.

## 23.1 Climate as a Corporate Finance Problem

### 23.1.1 Physical risk and transition risk

Climate-related financial risk is conventionally divided into two families.

**Physical risk** is damage from climate hazards. *Acute* physical risks are discrete events such as floods, storms, wildfires and heat waves that damage assets and interrupt operations. *Chronic* physical risks are gradual shifts such as sea-level rise, changing rainfall, persistent heat stress and water scarcity that change the productivity or insurability of locations. For a corporate, the channels are direct (repair costs, lost production days), indirect (supply-chain disruption, labour productivity), and financial (insurance premiums and deductibles, collateral values, covenant breaches).

**Transition risk** arises from the process of moving to a lower-carbon economy: carbon pricing and regulation, technology shifts that make incumbent assets uncompetitive, changes in customer preference, litigation and reputational pressure, and changes in the availability and cost of capital. Transition risk is the main subject of this chapter because it is the form most directly manipulable through corporate capital allocation, and because it is intrinsically a *policy-and-technology* uncertainty rather than a physical-science one.

The two risks interact. A fast, orderly transition raises transition risk and lowers physical risk in the long run; a slow transition does the reverse; and a late, disorderly transition can raise both. This is why scenario analysis, not a single forecast, is the dominant method.

### 23.1.2 How climate reaches the financial statements

It helps to trace each risk through the standard valuation identity from Volume 1, Chapter 6 and Chapter 21:

```
Value = Σ  FCFF_t / (1 + WACC)^t  +  Terminal value / (1 + WACC)^T
FCFF  = EBIT × (1 − tax) + Depreciation − Capex − ΔNWC
```

| Valuation driver | Transition channel | Physical channel |
|---|---|---|
| Revenue | Demand shifts, product bans, green premium for low-carbon products | Plant outages, crop and demand shocks |
| Operating costs | Carbon prices, energy cost changes, compliance cost | Cooling/water cost, repair cost |
| Capex | Abatement investment, retrofit, electrification | Adaptation, hardening, relocation |
| Asset lives / depreciation | Earlier retirement, impairment | Shortened useful life of exposed sites |
| Working capital | Inventory and supply-chain re-sourcing | Safety stocks against disruption |
| WACC | Changes in investor demand, spreads, beta | Insurance availability, credit spreads |
| Terminal value | Does the business exist, and at what margin, after 2050? | Is the location viable? |

The table makes a central point: *climate risk is not a separate asset class that sits beside the discounted cash-flow model; it is a set of perturbations to the inputs of that model*. The discipline of climate finance is therefore mostly the discipline of making the perturbations explicit, consistent across projects, and linked to a coherent scenario.

### 23.1.3 Do not put climate risk only into the discount rate

A common shortcut is to "add 100 basis points to the WACC for carbon-intensive projects". This is attractive because it is easy, but it is a poor tool for three reasons.

1. **Timing.** A discount-rate add-on penalizes distant cash flows exponentially and near-term cash flows hardly at all. Carbon costs, however, are usually *back-loaded*: they are small now and large later as prices rise and free allowances disappear. A constant add-on therefore penalizes the wrong years and can be too harsh on a project that earns back its capital before the policy bites, and too lenient on one that depends on decades of high-carbon output.
2. **Asymmetry.** Carbon-pricing risk is a cash-flow risk with a specific, modelable shape (a price path times an emissions quantity). Burying it in a rate hides the thing management can actually act on: emissions per unit, pass-through, abatement options and closure triggers.
3. **Diversifiability confusion.** The CAPM logic in Volume 1, Chapter 10 prices *systematic* risk. A policy shock may be systematic for the carbon-intensive sector without being systematic for the market, and may be positively or negatively correlated with market returns depending on the shock. Mechanically adding spread can double-count (if cash flows already contain expected carbon costs) or under-count (if cash flows contain none).

The principle we adopt is: put *expected* climate cash-flow effects in the cash flows, scenario by scenario; reserve discount-rate adjustments for genuine changes in systematic risk or in the investor base (for example, a firm that is excluded from many portfolios may face a higher cost of capital, as discussed in Section 23.6).

## 23.2 Carbon Pricing in Capital Budgeting

### 23.2.1 Explicit, shadow and internal carbon prices

Three distinct concepts are often conflated.

- **An explicit carbon price** is a cost the firm actually pays: a carbon tax, the price of emission allowances under a cap-and-trade (emissions trading) system, or a fuel levy. It is a cash cost, deductible in most tax systems, and it enters operating costs directly.
- **A shadow carbon price** is an analytical value used in project evaluation to reflect a cost the firm *expects or fears* but does not yet pay, such as future regulation. It is applied in the NPV spreadsheet but never invoiced.
- **An internal carbon price (ICP)** is a price a company sets for internal transfers or charges to business units, sometimes actually collected into a fund (an "internal carbon fee") and sometimes used only for decision support. It can serve as a hurdle-rate-like device: every project's emissions are multiplied by the ICP and the result is charged against the project.

A well-designed system uses the explicit price where the firm is already covered by a pricing scheme, the shadow price for the portion of the horizon beyond what is currently legislated, and an ICP to convey a consistent signal across divisions. The choice of the price path is the single most important modelling decision, and it should be *scenario-based*. Many companies disclose price paths that rise over time; a path that increases with inflation plus a real growth rate (for example 4 to 6 percent real) is common as a stylized assumption, though real-world outcomes depend on policy design and are highly uncertain.

### 23.2.2 The mechanics of a carbon-adjusted NPV

For a project with annual emissions `E` (tonnes of CO2-equivalent), a carbon price path `P_t` (per tonne) and a pass-through fraction `φ` (the share of the carbon cost recovered from customers through higher prices), the after-tax carbon cash flow in year t is:

```
Carbon cost_t (after tax) = E × P_t × (1 − φ) × (1 − tax rate)
```

The carbon-adjusted free cash flow is the conventional free cash flow minus this term. Three practical issues arise.

**Pass-through is endogenous.** If competitors face the same carbon price, the price of the product rises and part of the cost is passed on; if the firm competes with imports from jurisdictions without carbon pricing, pass-through may be near zero or even negative (lost volume). Border carbon adjustment mechanisms attempt to level this, but design details differ and should be modelled as scenarios, not assumed.

**Free allocation phases out.** Under many emissions trading systems, industries judged exposed to international competition received free allowances, which reduced the effective carbon cost to near zero. When free allocation is reduced, the effective price paid per tonne rises even if the market price stays constant. Treat the *effective* price as the product of the market price and the share of emissions that must be covered by purchased allowances.

**Tax deductibility and timing.** In most jurisdictions allowance purchases are deductible, so the after-tax cost is `(1 − τ)` times the pre-tax cost. Allowances may be purchased in advance, producing a working-capital effect that can be modelled as a financing cost.

### 23.2.3 Worked examples

**Example 23.1 – Carbon-adjusted NPV of an industrial plant.** A firm considers a 500 million plant with a 20-year life. Before carbon, it generates EBITDA of 95 million a year. It emits 0.6 million tonnes of CO2e a year. Depreciation is straight-line over 20 years, the tax rate is 25 percent and WACC is 8 percent. Carbon cost is not passed through (φ = 0).

*Step 1: Conventional free cash flow.* Depreciation = 500 / 20 = 25. EBIT = 95 − 25 = 70. NOPAT = 70 × (1 − 0.25) = 52.5. FCF = 52.5 + 25 = 77.5.

*Step 2: Annuity factor.* The 20-year annuity factor at 8 percent is `[1 − 1.08^−20] / 0.08 = 9.8181`.

*Step 3: NPV without carbon.* PV of cash flows = 77.5 × 9.8181 = 760.9. NPV = 760.9 − 500 = **+260.9 million**.

*Step 4: Flat carbon price of 50.* Annual pre-tax carbon cost = 0.6 × 50 = 30. After-tax = 30 × 0.75 = 22.5. Adjusted FCF = 77.5 − 22.5 = 55.0. PV = 55.0 × 9.8181 = 540.0. NPV = **+40.0 million**.

*Step 5: Break-even flat price.* The NPV is zero when the PV of after-tax carbon cost equals 260.9: `0.6 × P × 0.75 × 9.8181 = 260.9`, so `P = 260.9 / (0.45 × 9.8181) = 59.05`. The project survives a flat price up to about **59 per tonne**.

*Step 6: Rising price.* Suppose the price starts at 30 and grows 6 percent a year (escalating from year 1). Discounting each year's after-tax cost 0.45 × 30 × 1.06^(t−1) at 8 percent gives a total PV of 210.5, and NPV = **+50.4 million**. A starting price of 40.4 growing at 5 percent a year is the break-even for that pattern.

*Interpretation.* The same plant looks like a 260.9 million winner, a 40 million marginal project, or a loser depending on the carbon assumption. The break-even price (59) is the useful managerial number: it converts an unanswerable forecasting question ("what will carbon cost?") into a comparison ("is 59 plausible within our project life?").

**Example 23.2 – Pass-through sensitivity.** Using the plant in Example 23.1 with a carbon price starting at the stated level and growing 5 percent a year, compute NPV for 0 percent and 50 percent pass-through.

*Method.* Pass-through scales the carbon cost by `(1 − φ)`. NPV is therefore linear in the starting price for any given growth rate: `NPV = 260.9 − k × P0 × (1 − φ)`, where k is the PV of the after-tax escalating emission cost per unit of starting price. From the computed results (price starting at 25, 50, 75, 100, and zero pass-through) NPVs are 99.4 (at 25), −62.1 (at 50), −223.7 (at 75) and −385.2 (at 100); so k = (260.9 − 99.4)/25 = 6.46 per unit of starting price.

| Starting price (5% growth) | NPV, φ = 0% | NPV, φ = 50% |
|---|---|---|
| 0 | 260.9 | 260.9 |
| 25 | 99.4 | 180.1 |
| 50 | −62.1 | 99.4 |
| 75 | −223.7 | 18.6 |
| 100 | −385.2 | −62.1 |

*Interpretation.* Halving the effective cost by 50 percent pass-through doubles the carbon price the project can tolerate (the NPV at 50 with φ = 50 percent equals the NPV at 25 with φ = 0). A manager evaluating competitive position should therefore treat the pass-through coefficient with the same attention as the price path: it is a strategic variable, shaped by market structure, regulation and the competitors' cost position.

### 23.2.4 Scenario weighting and what *not* to average

Scenario analysis in climate typically uses three archetypes, in the spirit of the scenario sets published by central-bank networks and energy agencies, though the exact names and numbers vary by publisher:

- **Delayed or limited action:** current policies continue, low carbon prices, high physical risk later.
- **Orderly transition:** gradual, credible tightening of policy; moderate-to-high prices.
- **Disorderly transition:** late and abrupt tightening, with prices rising sharply and technology and demand shifting quickly.

**Example 23.3 – Probability-weighted NPV and the option to close early.** For the plant in Example 23.1, assign three scenarios with illustrative probabilities and price paths.

| Scenario | Probability | Starting price | Annual growth | NPV (million) |
|---|---|---|---|---|
| Delayed action | 40% | 15 | 3% | +178.2 |
| Orderly transition | 40% | 50 | 5% | −62.1 |
| Disorderly transition | 20% | 90 | 7% | −426.6 |

*Step 1: Expected NPV if the plant must run for 20 years.* `0.4 × 178.2 + 0.4 × (−62.1) + 0.2 × (−426.6) = 71.28 − 24.84 − 85.32 = −38.9 million`.

*Step 2: The naive shortcut.* A manager who averages the *starting prices* (0.4 × 15 + 0.4 × 50 + 0.2 × 90 = 44) and applies a flat path obtains NPV = **+66.5 million**, a positive number. The shortcut is wrong by 105 million because it removes the escalation embedded in the high-price scenarios, where the losses accumulate. The lesson: average *outcomes* (NPVs, or cash-flow vectors), not scenario *inputs*, whenever the model is nonlinear in the path.

*Step 3: Value of flexibility.* In the disorderly scenario the after-tax annual cash flow is `77.5 − 0.75 × 0.6 × P_t = 77.5 − 0.45 × P_t` (the depreciation tax shield is retained while the firm is operating and has taxable profit elsewhere to absorb losses). It turns negative once `P_t > 172.2`. With a start of 90 growing 7 percent, the price is `90 × 1.07^9 = 165.5` in year 10 (cash flow +3.0) and `90 × 1.07^10 = 177.0` in year 11 (cash flow −2.1). A rational operator therefore closes after year 10. Computing NPV with operations stopping after year 10 gives −339.7 instead of −426.6 for running to year 20, an improvement of 86.9 million (we ignore closure costs and the tax write-off of remaining book value). Expected NPV with this abandonment option: `0.4 × 178.2 + 0.4 × (−62.1) + 0.2 × (−339.7) = 71.28 − 24.84 − 67.94 = −21.5 million`.

*Interpretation.* Both numbers are negative: on these assumptions the plant is a poor investment as specified, despite a 260.9 million "no-carbon" NPV. The abandonment option reduces but does not eliminate the loss. Two managerial responses follow: reduce capex or emissions intensity (making the project survive more scenarios), or stage the investment so the high-carbon commitment is smaller. This is the real-options logic of Volume 1, Chapter 19 applied to climate.

## 23.3 Transition Risk, Stranded Assets and Valuation

### 23.3.1 What is a stranded asset?

An asset is **stranded** when, because of changes associated with the transition, it suffers unanticipated or premature write-downs, devaluation or conversion to a liability. The word *unanticipated* matters: an asset that was always expected to run for twelve years and does so is not stranded. Examples include fossil-fuel reserves that cannot economically be extracted under a given policy path, thermal power plants whose utilization falls below break-even as renewable capacity expands, internal-combustion vehicle platforms and tooling, and buildings that fail evolving efficiency standards.

Three features distinguish stranding from ordinary cyclical weakness:

1. **Structural, not cyclical.** The shock is policy- or technology-driven, so it will not reverse when the cycle turns.
2. **Asset-specific and long-lived.** Heavy industry, power generation and infrastructure have lives of 30 to 60 years, much longer than typical planning horizons, so a decision made today is exposed to many policy cycles.
3. **Skewed.** The loss distribution is typically negatively skewed: the upside from a slow transition is modest (the asset earns what it was expected to earn), while the downside from a rapid one is large.

Stranding is also an *interaction* of asset and balance sheet. A stranded plant financed 70 percent with long-dated project debt can wipe out equity while leaving the lenders short; a plant financed with short-dated equity-like capital can be run off. The capital-structure analysis of Volume 1, Chapter 15 therefore matters: leverage converts asset stranding into equity destruction and sometimes distress.

### 23.3.2 Accounting and valuation hooks

Two accounting mechanisms translate expected stranding into reported numbers, although neither anticipates all of it.

- **Impairment testing.** Under IFRS (IAS 36) and, with different mechanics, under US GAAP, an asset (or cash-generating unit) is written down when its carrying amount exceeds its recoverable amount. Under IFRS the recoverable amount is the higher of fair value less costs of disposal and *value in use*, the present value of expected future cash flows. If expected cash flows incorporate a rising carbon cost and a shorter life, value in use falls and impairment can be triggered. A climate-related change in policy or market expectations is an impairment indicator in its own right.
- **Useful lives and decommissioning.** Revising a useful life shortens depreciation and raises annual depreciation expense. Decommissioning or restoration obligations are recognized as provisions (IAS 37 under IFRS) at the present value of expected outflows, and an earlier closure date raises the present value of that provision by shortening the discount period.

Neither mechanism produces a market-value measure; both rely on management's own forecasts. This is why analysts and stress-testers prefer to build scenario-weighted market valuations independently.

**Example 23.4 – Scenario-weighted value in use and impairment.** A power producer carries a generating asset at 800 million. After-tax cash flow is expected to be 100 million a year while it runs. The discount rate for value in use is 9 percent. Decommissioning cost is 60 million (paid at closure). Management considers three closure scenarios with illustrative probabilities.

| Scenario | Closure after | Probability | PV of 100/yr | PV of 60 decommissioning | Value in use |
|---|---|---|---|---|---|
| Continues (delayed policy) | 25 years | 25% | 982.3 | 7.0 | 975.3 |
| Orderly phase-out | 12 years | 45% | 716.1 | 21.3 | 694.7 |
| Early forced closure | 8 years | 30% | 553.5 | 30.1 | 523.4 |

*Step 1: PV of 100 a year.* For 25 years at 9 percent the annuity factor is 9.8226, so PV = 982.3. For 12 years it is 7.1607, so PV = 716.1. For 8 years it is 5.5348, so PV = 553.5.

*Step 2: PV of decommissioning.* `60 / 1.09^25 = 6.96`; `60 / 1.09^12 = 21.33`; `60 / 1.09^8 = 30.11`.

*Step 3: Probability-weighted value.* `0.25 × 975.3 + 0.45 × 694.7 + 0.30 × 523.4 = 243.8 + 312.6 + 157.0 = 713.5`.

*Step 4: Impairment.* Carrying amount 800 − 713.5 = **86.5 million** shortfall. The asset would be written down by roughly 11 percent, and, if the *continues* scenario alone had been used, there would have been no impairment at all.

*Step 5: Depreciation consequence.* Had the carrying amount been depreciated straight-line over 25 years, the charge is 32.0 per year. If the board adopts a 12-year expected life, the annual charge on the same carrying amount would be 800 / 12 = 66.7, an increase of 34.7 million a year in reported expense *without any change in cash flow*.

*Interpretation.* The cash flows did not change; the beliefs did. The write-down is the accounting recognition of a shift in the probability distribution. Managers who anticipate this can stage disclosure, adjust leverage and plan replacement capital before the accounting event forces the issue, and treasury should check whether covenants are based on book equity, EBITDA or both.

### 23.3.3 Transition risk beyond carbon prices

Carbon prices are the most modelable transition driver but not the only one. A complete assessment should consider:

- **Technology risk.** Falling costs of renewables and storage, or electrification of heat and transport, can reduce demand for incumbent products faster than policy alone would.
- **Demand and customer risk.** Corporate buyers increasingly require low-carbon inputs (for example, low-carbon steel or cement for certain public and private projects) and may impose supplier requirements regardless of regulation.
- **Legal and litigation risk.** Claims related to misleading climate statements, failure to disclose, or damages attributed to emitters create contingent liabilities.
- **Market and financing risk.** Banks, insurers and asset owners may set sector policies that limit new financing of certain assets; this raises spreads or removes refinancing options. This channel links directly to Section 23.6.
- **Reputation and talent.** Harder to quantify but often reflected in customer retention, recruitment costs and license-to-operate.

Opportunities mirror these risks: low-carbon products with price premia, new markets for efficiency, grid services, and green subsidies and tax credits. A balanced analysis values both, because a decarbonization project that merely avoids a loss can still have a negative standalone NPV and yet be value-creating at the firm level through the avoided downside.

### 23.3.4 Climate scenario analysis as a corporate process

A defensible process has five steps: (1) *Choose scenarios* with a coherent set of policy, technology and macro assumptions, drawing on published reference scenarios rather than internal guesses; (2) *Map each scenario to drivers*: carbon price, energy prices, demand, cost of capital, physical hazards; (3) *Translate into the financial model*: cash flows, balance sheet, covenants, liquidity; (4) *Assess resilience*: where does the strategy break, and what are the triggers; and (5) *Decide actions* with trigger-based capital plans and report the results in a decision-useful format. Scenario analysis is not forecasting; its output is a map of vulnerabilities and options, not a number to optimize.

A useful discipline is to compute, for each major asset, the **break-even carbon price** (the price at which its NPV is zero, as in Example 23.1) and compare it to the price paths in each scenario. Assets whose break-even is below the lowest-scenario price in the investment horizon are candidates for retirement or conversion; assets whose break-even exceeds the highest-scenario price are robust. The assets in between are where management attention, hedging and phased capital belong.

## 23.4 Abatement Economics and Capital Allocation

### 23.4.1 The marginal abatement cost curve

A **marginal abatement cost (MAC) curve** ranks abatement options by cost per tonne of CO2e avoided, from the cheapest (often negative, meaning that the option saves money) to the most expensive, with the width of each bar showing the tonnes it abates. The cost per tonne is computed on an annualized, usually after-tax basis:

```
Abatement cost per tonne = (Annualized capex + ΔOpex − Energy savings) / Annual tonnes abated
Annualized capex         = Capex × r / [1 − (1 + r)^−n]      (the capital recovery factor)
```

The decision rule is straightforward: *carry out every option whose cost per tonne is below the relevant carbon price*, where the relevant price may be the explicit price, the shadow price, or the internal carbon price. At the margin, the firm abates until the cost of the next tonne equals the price. This is the same logic as the textbook condition for efficient pollution control: equalize marginal abatement cost across sources.

MAC curves have well-known limitations. They are static, so they ignore interaction effects (insulating a building reduces the savings from a more efficient boiler), learning curves (costs fall as deployment grows), option value (waiting may reveal better technology) and non-financial barriers (capital rationing, split incentives, operational disruption). Negative-cost options that are not undertaken ("the efficiency gap") often reflect hidden costs, risk, or management attention, not irrationality. Finally, the choice of discount rate for the capital recovery factor shifts the ordering: capital-intensive options (CCS, hydrogen) look much worse at 10 percent than at 5 percent.

**Example 23.5 – Building and using a MAC curve.** A manufacturer lists seven options (the figures are illustrative):

| Rank | Option | Abatement (Mt/yr) | Cost (per tonne) | Cumulative abatement (Mt) | Annual net cost (million) |
|---|---|---|---|---|---|
| 1 | LED retrofit | 0.20 | −40 | 0.20 | −8.0 |
| 2 | Heat recovery | 0.35 | −15 | 0.55 | −5.2 |
| 3 | Process electrification | 0.50 | 25 | 1.05 | 12.5 |
| 4 | Renewable PPA | 0.80 | 35 | 1.85 | 28.0 |
| 5 | Fuel switch | 0.60 | 60 | 2.45 | 36.0 |
| 6 | CCS retrofit | 0.90 | 110 | 3.35 | 99.0 |
| 7 | Green hydrogen feed | 0.40 | 180 | 3.75 | 72.0 |

*Step 1: Annual net cost* = abatement (Mt) × cost per tonne, since Mt × currency/tonne = currency millions. Option 1: 0.20 × (−40) = −8.0; Option 2: 0.35 × (−15) = −5.25 (shown as −5.2); Option 3: 0.50 × 25 = 12.5; Option 4: 0.80 × 35 = 28.0; Option 5: 0.60 × 60 = 36.0; Option 6: 0.90 × 110 = 99.0; Option 7: 0.40 × 180 = 72.0.

*Step 2: Apply an internal carbon price of 70.* Accept options 1 to 5 (cost below 70). Total abatement = 0.20 + 0.35 + 0.50 + 0.80 + 0.60 = **2.45 Mt a year**. Total net annual cost = −8.0 − 5.25 + 12.5 + 28.0 + 36.0 = **63.25 million**.

*Step 3: Avoided carbon charge.* 2.45 Mt × 70 = 171.5 million. Net benefit = 171.5 − 63.25 = **108.25 million a year**.

*Step 4: Sensitivity to price.* At a carbon price of 120 the CCS retrofit also becomes attractive: abatement rises to 3.35 Mt and total net cost to 162.25 million; avoided charge is 3.35 × 120 = 402.0 million, giving a net benefit of 239.75 million. At a price of 50 only options 1 to 4 pass, abating 1.85 Mt at a net cost of 27.25 million (benefit 92.5 − 27.25 = 65.25 million).

*Interpretation.* The MAC curve turns a price assumption into a capital plan: the *amount* of abatement the firm should buy rises as the price rises. But the plan should be robust: investing now in the cheaper options is a no-regret move; the expensive options (CCS, hydrogen) are better handled as options whose exercise depends on a trigger price and on technology learning. Resist the temptation to implement all options simply to reach a headline target; the incremental cost of the last tonne can exceed any plausible carbon price.

## 23.5 Green and Transition Finance Instruments

### 23.5.1 A taxonomy of labelled debt

"Labelled" instruments are debt (or loans) whose terms or use of proceeds refer to sustainability. The main families are as follows; the market conventions are voluntary guidelines published by industry bodies, and regional regulators have in some cases layered official standards on top.

| Instrument | What is promised | Pricing mechanism | Main credibility risk |
|---|---|---|---|
| Green bond / loan | Proceeds allocated to eligible environmental projects | Same issuer credit; possible small "greenium" | Eligibility of projects; allocation and impact reporting |
| Social bond | Proceeds to social projects (housing, health, education) | Same as above | Defining and measuring social outcomes |
| Sustainability-linked bond (SLB) / loan (SLL) | General-purpose proceeds; coupon or margin depends on achieving sustainability performance targets | Step-up (or step-down) in coupon if targets missed (met) | Ambition of targets; materiality; size of financial penalty |
| Transition bond / loan | Proceeds or targets tied to decarbonizing a hard-to-abate business | Varies; often target-based | Credibility of the transition plan; risk of lock-in |
| Green securitization, green covered bond | Asset pool or covered assets have environmental characteristics | Structure plus label | Eligibility tests of underlying assets |
| Blue, catastrophe and resilience bonds | Marine, climate-adaptation or catastrophe-risk transfer | Instrument-specific | Basis risk; parametric triggers |

**Use-of-proceeds (UoP) instruments** such as green bonds follow, in the widely used market guidelines, four core components: (1) a defined use of proceeds, (2) a process for project evaluation and selection, (3) management of proceeds (tracking, often via a sub-account), and (4) reporting, typically annual allocation and, where possible, impact reporting. An external review (a "second-party opinion") is common but optional. Legally, a UoP bond is usually a full-recourse obligation of the issuer: if the green project fails, the bondholders do not bear that loss. This is why the credit spread tends to follow the issuer's credit, with at most a small premium or discount attributable to the label.

**Sustainability-linked instruments** are different in design: the proceeds are unrestricted, and the financial terms depend on the issuer reaching pre-specified **Sustainability Performance Targets (SPTs)** measured by **Key Performance Indicators (KPIs)**. The widely used principles for such instruments emphasize five components: KPI selection (material, measurable, benchmarkable), calibration of SPTs (ambitious relative to a baseline and to peers), bond or loan characteristics (the financial variation), reporting, and verification. Transition instruments are less standardized; their appeal is that they finance firms that cannot yet be called "green" but are credibly moving, but the risk is that the label is attached to a plan that is not credible.

**Transition finance** has an additional conceptual challenge. A taxonomy that classifies activities as "green" or "not green" has no category for the cement kiln that cuts emissions 40 percent but remains emissions-intensive. Official taxonomies differ in how they handle this; some regimes allow "transitional" activities that meet declining thresholds, while others focus on technologies consistent with long-run neutrality. From a corporate-finance standpoint the priority is to link financing terms to *verifiable pathway milestones* rather than to the label itself.

### 23.5.2 The economics of the "greenium"

The **greenium** is the yield difference between a green bond and a comparable conventional bond from the same issuer (same maturity, seniority and currency). Empirical estimates in the literature are generally small (a few basis points in many studies), vary by market segment, region and period, are sensitive to the matching method, and in some samples are statistically indistinguishable from zero. A reasonable theoretical basis exists: if some investors have a mandate or preference for green assets, they will bid up the price, and the issuer enjoys a lower yield. But the benefit is limited by arbitrage between green and conventional bonds of the same issuer, and the issuer also bears costs: verification, reporting systems, and the risk of reputational damage if the use of proceeds is challenged.

Evidence on *other* benefits is also mixed but intriguing: some studies have found a positive stock-price reaction to green bond announcements and improved environmental performance after issuance for certain issuers, consistent with a *signalling* role (issuing a green bond is a costly, credible commitment). Because these are observational studies, causality is debated.

**Example 23.6 – Valuing a greenium net of costs.** An issuer sells a 10-year, 500 million green bond with annual coupons. A comparable conventional bond would price at a 5.08 percent yield; the green bond prices at 5.00 percent, a greenium of 8 basis points. The issuer incurs annual verification and reporting costs of 0.15 million.

*Step 1: Annual interest saving.* 500 million × 0.0008 = **0.40 million a year**.

*Step 2: Present value.* The 10-year annuity factor at 5 percent is `[1 − 1.05^−10] / 0.05 = 7.7217`. PV of savings = 0.40 × 7.7217 = **3.089 million** (0.62 percent of face value).

*Step 3: PV of annual costs.* 0.15 × 7.7217 = **1.158 million**.

*Step 4: Net benefit.* 3.089 − 1.158 = **1.930 million**, or about 0.39 percent of face value.

*Step 5: Check by pricing.* A 10-year bond with a 5.00 percent coupon priced at a 5.08 percent yield would sell at 99.38 per 100 face; at a yield of 5.00 percent it sells at par. The 0.62 points difference is the market's valuation of the greenium; on 500 million it is 3.09 million, matching Step 2.

*Interpretation.* The net benefit is small relative to the 500 million issued. A treasurer should not issue a green bond solely for pricing; the case rests on investor diversification (a broader, longer-term investor base), alignment of financing with strategy, signalling, and the option value of being able to return to the market in a stress period. Note also that the same 1.158 million of annual costs would wipe out the benefit if the greenium were only 3 basis points: `500 × 0.0003 = 0.15 million`, exactly the cost. The break-even greenium is therefore 3 basis points.

### 23.5.3 Sustainability-linked structures and the step-up

An SLB typically adds a coupon **step-up** (for example, +25 basis points) if the issuer fails to meet an SPT on an observation date. The step-up is a *contingent cost* to the issuer and a *contingent benefit* to investors; it is economically a bet on the KPI.

Two design questions determine whether the instrument is more than a label. First, is the **target ambitious**: does it go beyond business-as-usual and would it require capital expenditure the firm would not otherwise make? Second, is the **financial penalty large enough** to influence behaviour? A 25 basis point step-up on a 500 million bond for five years costs the issuer 1.25 million a year, small compared with the 100 million capex needed to cut emissions meaningfully. If the penalty is tiny, rational management will accept it; if it is huge, the issuer will not issue.

**Example 23.7 – Does the step-up change behaviour?** An issuer sells a 10-year, 500 million SLB at 5 percent with a 25 basis point step-up for years 6 to 10 if an emissions-intensity SPT is missed at the end of year 5. Discount rate 5 percent.

*Step 1: Annual cost of a miss.* 500 million × 0.0025 = **1.25 million a year** for years 6 to 10.

*Step 2: PV at issuance.* The PV factor for an annuity of years 6 to 10 at 5 percent is `[1 − 1.05^−5] / 0.05 × 1.05^−5 = 4.3295 × 0.7835 = 3.3923`. PV of the step-up = 1.25 × 3.3923 = **4.240 million**.

*Step 3: Expected cost for different miss probabilities.* At 20 percent: 0.848 million; at 50 percent: 2.120 million; at 80 percent: 3.392 million.

*Step 4: Would extra effort be rational?* Suppose an additional abatement programme costing 2.0 million in present value would raise the probability of hitting the target from 40 percent to 85 percent (so the probability of a miss falls from 60 percent to 15 percent). Expected saving = (0.60 − 0.15) × 4.240 = **1.908 million**. This is slightly *less* than the 2.0 million cost, so purely on the penalty a rational manager would not spend the money.

*Interpretation.* The step-up is too small to be the driving force; it works only if the firm independently values the target (because of carbon cost, customers or strategy). Investors and regulators should therefore look at target ambition and the firm's overall transition plan, not the existence of a step-up. For the issuer, the SLB is best seen as a commitment device and a signal; if the firm has no intention of hitting the target, the issuance is a reputational liability. Note also the asymmetric information: management knows the probability better than the lender, so a low-ambition target with a small step-up is cheap for the issuer and misleading for the buyer.

### 23.5.4 Greenwashing risk, legal exposure and governance

"Greenwashing" is the practice of making unsupported or misleading sustainability claims. For issuers of labelled debt the exposures are: *regulatory and legal* (misleading statements to investors can attract enforcement or litigation in many jurisdictions, and consumer or advertising regulators have also acted on environmental claims), *market* (investors may exclude an issuer after a controversy, and secondary-market spreads can widen), and *covenant or documentation* (some instruments allow investors to claim remedies if reporting commitments are not met, though most do not treat a missed label as a default). The corporate remedy is to apply the same controls to sustainability claims as to financial statements: defined methodology, internal audit, independent assurance of key figures, and board-level review. Consistency between what the company *funds* and what it *says* is the key test: a firm that issues a green bond while lobbying against the policy that makes its projects viable, or investing most capex in the opposite direction, invites the charge.

## 23.6 ESG Investing: Theory and Evidence

### 23.6.1 What "ESG investing" means

"ESG investing" covers several distinct practices that deserve separate analysis.

- **Exclusionary (negative) screening:** do not hold certain sectors or companies.
- **Best-in-class or ESG-tilted:** overweight firms with high ESG ratings, underweight low-rated firms.
- **Thematic:** invest in themes such as clean energy.
- **Impact investing:** aim for measurable environmental or social outcomes alongside financial return, often accepting lower return.
- **Engagement and stewardship:** hold the shares and use voting and dialogue to change corporate behaviour.
- **ESG integration:** incorporate ESG factors as *financial risk information* into otherwise conventional valuation.

The first five are partly *preference-driven* (the investor wants something besides money), whereas integration is *information-driven* (ESG data predict cash flows). Confusing the two is the root of much confusion in the debate: the empirical question of whether ESG data predict returns is separate from the normative question of whether investors may want to sacrifice return for values.

### 23.6.2 Theory: how ESG preferences affect prices and the cost of capital

The theoretical benchmarks come from asset pricing.

**Segmentation and exclusion.** In the model by Merton (1987) of investors with incomplete information, stocks held by fewer investors have a higher required return because investors who hold them bear risk that cannot be spread across a wider holder base. Heinkel, Kraus and Zechner (2001) applied the same logic to ethical exclusion: if a fraction of investors refuses to hold "brown" stocks, those stocks are held by a smaller group, so the price is lower and the expected return higher; "green" stocks have a lower expected return. The cost-of-capital effect depends on the *size* of the excluding group and on the ability of remaining investors to absorb the shares.

**Preferences in equilibrium.** Pástor, Stambaugh and Taylor (2021) model investors who gain utility from holding green assets. In equilibrium, green assets have *negative alphas* (lower expected return) because investors accept lower returns for the non-pecuniary benefit; brown assets have positive alphas. But there is a twist: if concerns about climate strengthen unexpectedly, green assets can *outperform* during the period of rising concern, even though their *expected* return is lower. Therefore, a period of strong green-stock performance is not evidence of a permanent return advantage; it may reflect a one-time repricing as preferences shift. This explains why historical returns to ESG strategies in the recent past can overstate the future.

**Information.** If ESG factors proxy for material, previously unpriced risks (for example, litigation or regulation), then incorporating them should earn a return only until the market prices the information, after which expected returns converge. In an efficient market, there is no free lunch from public ESG ratings.

**Corporate-level view.** Economists contrast the view that firms should maximize shareholder *value* with the view that they should reflect shareholder *welfare*, which may include social preferences (a distinction developed by Hart and Zingales). Under the first view, ESG expenditures should be justified by their effect on cash flows or risk; under the second, firms might invest in social goods if shareholders would otherwise spend their own wealth on those goods less efficiently. For capital budgeting, the practical implication is simple: every ESG investment should state *which* of these arguments it relies on, because the two imply different hurdle rates.

### 23.6.3 Evidence on returns and cost of capital: what we can and cannot say

It is easy to find studies supporting either side. A careful reader should apply the following filters.

1. **Large reviews tend to find a non-negative association** between ESG measures and financial performance. For example, a well-known meta-analysis of many studies (by Friede, Busch and Bassen) reported that the majority of studies found a non-negative relationship. But such reviews aggregate heterogeneous measures and study quality, and association does not demonstrate causation.
2. **Good firms may simply be profitable firms.** Companies with high cash flows can afford ESG programmes, so ESG can be a *consequence* of performance. Controls for size, profitability and sector reduce but do not eliminate this bias.
3. **Ratings disagree.** Research on ESG ratings by Berg, Koelbel and Rigobon documents that the correlations across major rating providers are far lower than correlations across credit rating agencies (broadly around 0.5 for ESG versus very high for credit). Differences arise from scope (what attributes are included), measurement (different indicators for the same attribute) and weights. Any study using one provider's rating, therefore, measures that provider's view. Rating disagreement is itself related to higher return volatility in some studies, suggesting that it is a form of risk.
4. **Exclusion premia.** Evidence on "sin" stocks (alcohol, tobacco, gambling) by Hong and Kacperczyk (2009) found that they earned higher returns than comparable stocks over the sample, which they interpreted as the price of social norms restricting investor demand. Work on carbon emissions (for example, Bolton and Kacperczyk) found that stocks of higher-emitting firms earned higher returns in some samples, consistent with a carbon risk premium; but other studies find the sign depends on period and measure, in line with the Pástor-Stambaugh-Taylor point about unexpected shifts in preferences.
5. **Time variation.** The performance of ESG-tilted portfolios has varied over time, in part because of exposures to sectors (technology tilt, underweight energy) and interest-rate sensitivity (growth-style tilt). A fund that appears to have positive ESG alpha may be earning a sector or style premium; factor regressions (market, size, value, profitability, investment, momentum, from Volume 1, Chapter 10 and its extensions) are necessary to test this.
6. **Cost of capital.** Studies of credit spreads and cost of equity find that firms with strong environmental profiles tend to face somewhat lower financing costs in some markets and periods, and that firms facing high exclusion or large controversies may face higher costs. The magnitude is uncertain and depends on the sample; and the direction is consistent with the theory above (exclusion raises the cost of capital for the excluded firm).

The fair conclusion is: **ESG, as a broad label, has not been shown to produce reliable risk-adjusted outperformance; specific, material factors may inform risk and cash-flow forecasts; and the cost of capital effect operates through investor demand and may be small for most firms but meaningful for firms at the extremes.** A manager should not promise investors that sustainability will raise the share price, nor claim that it must lower it.

**Example 23.8 – What a small cost-of-capital change does to value.** Take a firm whose dividends or free cash flow to equity are expected to grow at 3 percent forever. Next year's cash flow is 1.00 per share. Initially the cost of equity is 8 percent.

*Step 1: Initial value.* `V0 = 1.00 / (0.08 − 0.03) = 20.00`.

*Step 2: Exclusion raises the cost of equity by 50 basis points.* New value `V1 = 1.00 / (0.085 − 0.03) = 18.18`. Change = (18.18 − 20.00) / 20.00 = **−9.1 percent**.

*Step 3: Other sizes.* For +25 basis points: `1.00 / 0.0525 = 19.05`, a **−4.8 percent** change. For +100 basis points: `1.00 / 0.06 = 16.67`, a **−16.7 percent** change.

*Interpretation.* Long-duration cash flows make value highly sensitive to small changes in the discount rate. This is why even a modest exclusion premium can matter for a long-lived, capital-intensive firm. It also shows the *inverse* effect: if investors' preferences caused green firms' costs of capital to fall by 25 to 50 basis points, their share prices would rise 5 to 10 percent in a one-time repricing, an effect that shows up as outperformance in the sample but is *not* repeated, and implies lower subsequent expected returns.

**Example 23.9 – How long to detect ESG alpha?** An ESG-tilted portfolio earns an average excess return versus its benchmark of 0.8 percent a year, with a tracking error (volatility of active return) of 3.0 percent a year. How strong is the evidence?

*Step 1: t-statistic for n years.* The standard error of the mean active return is `TE / √n`; the t-statistic is `α / (TE / √n)`.
After 5 years: `0.8 / (3.0 / 2.236) = 0.60`. After 10 years: `0.8 / (3.0 / 3.162) = 0.84`. After 20 years: `0.8 / (3.0 / 4.472) = 1.19`.

*Step 2: Years needed for t = 2.* `n = (2 × TE / α)^2 = (2 × 3.0 / 0.8)^2 = 7.5^2 = 56.25 years`.

*Interpretation.* An annual alpha of 0.8 percent against 3 percent tracking error cannot be statistically distinguished from luck for roughly 56 years. Typical fund track records, 5 to 10 years, reveal almost nothing. The result generalizes: the claim "this ESG strategy outperforms" is very hard to establish from realized returns, and just as hard to refute. Rely on economic reasoning about mechanisms (are the cash-flow effects material and mispriced?), not on short track records.

### 23.6.4 Implications for corporate managers

Four practical points follow. Do not manage to ratings, which are inconsistent and change methodology; manage and disclose the underlying risk. Know your investor base, since concentrated holdings by excluding investors affect your marginal cost of equity in stress. Evaluate ESG capex like any capex, stating any non-financial rationale explicitly. And avoid overpromising on technologies that are not yet commercial, which creates later credibility and liability problems.

## 23.7 Disclosure Frameworks (Described in General Terms)

Climate disclosure has converged on a family of frameworks. The details of regimes change and differ between jurisdictions, so treat the following as an orientation and check current rules before preparing a report.

**The TCFD architecture.** The Task Force on Climate-related Financial Disclosures, created by the Financial Stability Board, recommended disclosures organized around four pillars that remain the backbone of most subsequent regimes: **Governance** (board oversight and management role), **Strategy** (risks and opportunities over short, medium and long term, and the resilience of strategy under different scenarios, including a 2°C-or-lower scenario), **Risk management** (processes to identify, assess and manage climate risks and their integration into enterprise risk management) and **Metrics and targets** (including Scope 1, 2 and, where appropriate, Scope 3 emissions, and targets used to manage performance).

**ISSB standards.** The International Sustainability Standards Board issued IFRS S1 (general requirements for disclosure of sustainability-related financial information) and IFRS S2 (climate-related disclosures) which incorporate the TCFD pillars and add industry-based metrics. The orientation is **financial materiality**: information that could reasonably be expected to influence investors' decisions. Adoption is a matter for each jurisdiction, and several have moved to adopt or align with the standards, with variations.

**Other regimes.** The European Union's Corporate Sustainability Reporting Directive and its reporting standards apply the concept of **double materiality**, that is, both the financial impact of sustainability matters on the firm and the firm's impact on people and environment. In the United States, climate-disclosure rules have been the subject of regulatory and legal contention and of state-level initiatives; a manager of a multinational should map the requirements of each jurisdiction in which the company is listed or operates. Many national regimes also include requirements for banks and insurers.

**Greenhouse gas accounting.** The GHG Protocol is the most widely used standard for measuring emissions. It defines **Scope 1** (direct emissions from owned or controlled sources), **Scope 2** (indirect emissions from purchased electricity, steam, heat and cooling, reportable on a *location-based* or *market-based* method) and **Scope 3** (all other indirect emissions in the value chain, upstream and downstream, divided into fifteen categories such as purchased goods, business travel, use of sold products). Scope 3 is often the largest portion of a company's footprint and the hardest to measure, because it depends on suppliers' and customers' data and on estimation (spend-based, average-data or supplier-specific methods).

**Quality of numbers.** Because emissions data are constructed rather than directly observed, the controls that apply to financial figures should apply here: documented boundaries (operational control versus equity share), emission factors with sources and dates, base-year recalculation policy for acquisitions and divestitures, and assurance (limited, then reasonable). For finance teams, three connections to financial reporting are important: *consistency* (the assumptions in climate scenarios should be consistent with the assumptions in impairment tests and going-concern assessments), *connectivity* (disclosed targets and capex plans should reconcile to the financial plan) and *forward-looking statements* (provide risk language and keep a record of assumptions).

For financial institutions, **financed emissions** (the emissions attributed to loans and investments) are measured by allocating the borrower's emissions in proportion to the lender's share of the borrower's financing: `Financed emissions = Σ (Outstanding amount_i / EVIC_i) × Emissions_i`, where EVIC is enterprise value including cash. This metric is useful but sensitive to market valuations: a rising share price lowers the attribution.

## 23.8 Embedding Climate in the Corporate Finance Function

A practical programme has five elements: a governed carbon price and scenario set approved annually by the finance committee; appraisal templates that require emissions, effective carbon price, pass-through and break-even price for every sizeable project; scenario-weighted valuation of major assets with trigger-based plans (for example, convert or close a unit if the carbon price exceeds a stated level for two consecutive years); a financing strategy that matches instrument to purpose and stress-tests covenants, ratings and liquidity against transition scenarios; and incentives and disclosure that link pay to a few verifiable metrics that cannot be met by moving emissions outside the reporting boundary. Hedging tools (forward allowance purchases, power purchase agreements, insurance) can reduce price and physical exposures, but watch the basis risk between hedge and exposure. Residual emissions that cannot be abated are sometimes offset with carbon credits; treat credits as a last resort whose quality (additionality, permanence, leakage, verification) varies widely, and disclose gross emissions separately.

**Common mistakes** include: using a single carbon price for all years and assets; applying a discount-rate add-on instead of modelling cash flows; averaging scenario inputs instead of outcomes (Example 23.3); treating a decarbonization project as value-destroying because standalone NPV is negative while ignoring the avoided-loss value to the rest of the firm; counting offsets as abatement; and presenting targets without a funded capital plan.

## Case Study: Nordvik Steel and the Transition Plan

*Illustrative case; Nordvik Steel is a fictional company.*

Nordvik Steel operates two blast-furnace sites that supply automotive and construction customers. Revenue is 3.2 billion, EBITDA 480 million, net debt 1.3 billion (2.7 times EBITDA), and the shares trade at 6.0 times EBITDA, a discount to peers. Site A, built 35 years ago, has a furnace that needs a 700 million relining within four years to keep running for another 20. Site B was refurbished recently. Together the sites emit 6.0 million tonnes of CO2e a year; in the company's jurisdiction free allowances currently cover about 85 percent of those emissions, and the regulator has announced a phase-out of free allocation over the next ten years.

The strategy team has proposed replacing Site A's blast furnace with a direct-reduced-iron plant fed initially by natural gas and later by hydrogen, plus an electric arc furnace. Capex is 1.9 billion over five years; emissions would fall by roughly 60 percent initially and more later, if low-carbon hydrogen becomes available at an acceptable price. The relining alternative costs 700 million but locks in the current technology until the 2050s. The CFO has assembled the following scenario assumptions for the evaluation:

| Scenario | Probability | Carbon price in 10 years | Free allocation after 10 years | Low-carbon steel premium |
|---|---|---|---|---|
| Delayed action | 30% | 35 | 50% | negligible |
| Orderly | 45% | 90 | 0% | moderate |
| Disorderly | 25% | 160 | 0% | large and rising |

Under these inputs the relining option has a higher NPV than the new plant in the delayed scenario, a lower NPV in the orderly scenario, and a sharply lower NPV in the disorderly scenario, where relined Site A would face carbon costs exceeding its EBITDA contribution by year 12. The expected-NPV comparison favours the new plant narrowly, but the new plant requires external capital of about 1.2 billion. The banks have indicated they will lend, but on a sustainability-linked basis with step-ups tied to emissions intensity, and the board is split. One director argues that investors will not reward a decarbonization programme that depresses near-term free cash flow; another notes that large automotive customers have begun to ask for low-carbon steel and favour suppliers with credible plans. A third points out that the hydrogen supply is uncertain and the plant could become stranded if hydrogen costs do not fall, since the gas-fired mode is only partially decarbonized.

The treasurer favours a staged plan: build the DRI plant "hydrogen-ready" for natural gas first, hedge part of the carbon exposure with forward allowance purchases, issue a green bond for the eligible portion of the capex with a second-party opinion, and negotiate the sustainability-linked loan with an ambitious but achievable emissions-intensity target. She also proposes disclosure aligned to the ISSB climate standard, including Scope 3 for purchased iron ore and coking coal, and a break-even carbon price analysis for each site.

The board must decide on the capital plan, the financing mix, and what to say to shareholders. The CFO wants to present to the board a recommendation with explicit triggers rather than a single yes-or-no decision.

**Discussion Questions**

1. Using the scenario table, outline how you would compute the NPV of each option, including the effect of free-allocation phase-out on the effective carbon price. Which inputs would you average, and which would you keep as scenario-specific?
2. Evaluate the argument that the relining option is cheaper and therefore preferable. How does the option to retire the furnace early, and the leverage of 2.7 times EBITDA, change the assessment?
3. Design a staged investment plan with trigger conditions for the hydrogen conversion. What information would you want before committing the second stage, and how does this resemble a real option?
4. Compare financing the new plant with a green bond, a sustainability-linked loan and plain debt. What are the likely pricing and credibility trade-offs, and how would you avoid greenwashing allegations?

## Key Takeaways

- Climate risk reaches the firm through cash flows, asset lives, financing costs and terminal value; the right place for most of it is in the explicit cash-flow forecast, scenario by scenario, not in an ad hoc discount-rate add-on.
- Distinguish explicit, shadow and internal carbon prices; the effective carbon cost depends on free allocation, tax deductibility and pass-through, not only the headline price.
- Break-even carbon price is the most useful single metric: it turns an unforecastable price into a comparison with scenario paths.
- Average scenario outcomes (NPVs or cash-flow vectors), not scenario inputs; averaging inputs can hide the loss concentration in the tail (Example 23.3).
- Stranded assets arise from unanticipated, structural, policy or technology-driven loss of value; leverage and long-dated debt convert asset stranding into equity losses and covenant stress.
- Marginal abatement cost curves translate a carbon price into an abatement plan: undertake all options costing less than the price, treat expensive options as triggered options, and remember the curve's static nature.
- Green bonds are full-recourse use-of-proceeds instruments with small and uncertain pricing benefits; sustainability-linked instruments depend on target ambition and a meaningful penalty. Credibility, not the label, creates value.
- ESG is a bundle of practices; the evidence on returns is mixed, ratings disagree, realized outperformance can reflect one-time preference shifts, and statistical detection of small alphas takes decades.
- The cost-of-capital effect of exclusion or investor preference can be modest but is magnified by long cash-flow duration; know your investor base.
- Disclosure frameworks (TCFD pillars, ISSB standards, GHG Protocol scopes, regional regimes) are converging, but climate numbers need the same governance and assurance as financial numbers.

## Review Questions

1. Why is adding a fixed spread to WACC an inadequate way to account for carbon pricing risk? Give at least two reasons.
2. Distinguish a shadow carbon price from an internal carbon price. In what circumstances would a firm use both?
3. Explain how free allocation of emission allowances affects the effective carbon cost, and why its phase-out matters to long-lived assets.
4. Why does averaging scenario inputs (such as carbon prices) differ from averaging scenario outputs (such as NPVs)? Illustrate with the logic of Example 23.3.
5. What is a stranded asset, and why does the way it is financed matter?
6. Describe how a decline in expected useful life and a rise in decommissioning costs each affect impairment and depreciation.
7. What does a MAC curve show, and what are three reasons why it can mislead?
8. Compare the use-of-proceeds structure of a green bond with the performance-linked structure of a sustainability-linked bond. Which one creates stronger incentives for the issuer, and why might neither be sufficient?
9. Summarize the theoretical argument that ESG preferences lower expected returns on green assets, and explain why green stocks may nevertheless have outperformed in a given sample.
10. What are Scope 1, 2 and 3 emissions, and why is Scope 3 hard to measure? What does "double materiality" add to financial materiality?

## Problems

1. **Carbon-adjusted NPV.** A 300 million plant has a 15-year life, straight-line depreciation, EBITDA of 60 million a year, emissions of 0.3 million tonnes a year, tax rate 30 percent, WACC 9 percent. (a) Compute NPV without carbon. (b) Compute NPV with a flat carbon price of 40 and no pass-through. (c) Find the break-even flat carbon price.
2. **Pass-through.** For the plant in Problem 1, compute NPV at a flat price of 60 if 40 percent of the carbon cost is passed through, and find the break-even price with 40 percent pass-through.
3. **Green bond economics.** A firm issues a 7-year, 300 million green bond with a 6 basis point greenium against a conventional bond; the yield is 4 percent. Annual reporting and verification cost is 0.1 million. Compute the PV of the interest saving, the PV of the costs and the net benefit.
4. **Step-up.** A 400 million, 8-year SLB carries a 30 basis point step-up in years 4 to 8 if the SPT is missed. Discount rate 4.5 percent. Compute the annual cost of a miss and its present value at issuance.
5. **Impairment.** An asset is carried at 500 million. It generates 70 million a year after tax. The discount rate is 10 percent. There is a 40 percent chance it runs 20 years and a 60 percent chance it closes after 10 years. Ignore decommissioning. Compute the expected value in use and any impairment.
6. **MAC.** Options (abatement in Mt, cost per tonne): A (0.3, −30), B (0.5, 20), C (0.7, 45), D (0.4, 70), E (0.6, 95). At a carbon price of 55, which options are accepted? Compute total abatement, net cost and net benefit. Repeat at a price of 100.
7. **Cost of equity.** A firm's cash flow next year is 1.00 per share, growing 2.5 percent a year forever; cost of equity is 9 percent. Exclusion by some investors raises the cost of equity by 30 basis points. Compute the change in value.
8. **Detecting alpha.** A strategy has annual active return 1.0 percent and tracking error 4.0 percent. Compute the t-statistic after 10 years and the number of years needed for t = 2.

### Answers to Selected Problems

1. (a) Depreciation 20; FCF = (60 − 20) × 0.70 + 20 = 48.0; annuity factor (15 years, 9%) = 8.0607; NPV = 48.0 × 8.0607 − 300 = **+86.9 million**. (b) After-tax carbon cost = 0.3 × 40 × 0.70 = 8.4 a year; PV = 8.4 × 8.0607 = 67.7; NPV = **+19.2 million**. (c) Break-even = 86.9 / (0.3 × 0.70 × 8.0607) = **51.3 per tonne**.
2. At 60 with 40 percent pass-through, the net cost = 0.3 × 60 × 0.6 × 0.7 = 7.56 a year, PV 60.9; NPV = **+26.0 million**. Break-even = 51.3 / 0.6 = **85.6 per tonne**.
3. Annual saving = 300 × 0.0006 = 0.18 million; annuity factor (7 years, 4%) = 6.0021; PV = **1.080 million**. PV of costs = 0.1 × 6.0021 = **0.600 million**. Net = **+0.480 million**.
4. Annual cost = 400 × 0.0030 = **1.2 million**. PV factor for years 4 to 8 at 4.5 percent = 3.8469; PV = **4.616 million**.
5. PV(20 years) = 70 × 8.5136 = 596.0; PV(10 years) = 70 × 6.1446 = 430.1; expected = 0.4 × 596.0 + 0.6 × 430.1 = **496.5**; impairment = 500 − 496.5 = **3.5 million**.
6. At 55: accept A, B, C (costs below 55): abatement 1.5 Mt; net cost = −9 + 10 + 31.5 = 32.5 million; avoided charge = 82.5; net benefit = **50.0 million**. At 100: accept A to E: abatement 2.5 Mt; net cost = −9 + 10 + 31.5 + 28 + 57 = 117.5; avoided charge = 250; net benefit = **132.5 million**.
7. V0 = 1 / 0.065 = 15.38; V1 = 1 / 0.068 = 14.71; change = **−4.4 percent**.
8. t after 10 years = 1.0 / (4.0 / √10) = **0.79**. Years for t = 2: (2 × 4.0 / 1.0)^2 = **64 years**.
