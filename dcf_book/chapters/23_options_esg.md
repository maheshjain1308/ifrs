# Chapter 23 — Real Options, Intangibles and ESG in DCF

DCF treats the future as a single expected path. But managers can *change* course — expand if things go well, abandon if they go badly, wait before investing. That flexibility has value that a static DCF misses. This chapter introduces real options; then looks at how intangible assets and environmental, social and governance (ESG) factors are reflected in a DCF.

## 23.1 The idea of real options

A **real option** is the right, not the obligation, to take a business action at a future date at a predetermined cost. Financial options give rights over securities; real options give rights over real activities.

| Real option | Analogous to | Example |
|-------------|--------------|---------|
| **Option to expand** | Call option | Pilot plant → full-scale plant; first-generation product → follow-ons |
| **Option to delay (wait)** | Call option | Mining or oil lease: develop when prices justify |
| **Option to abandon** | Put option | Exit a project for salvage value if it fails |
| **Option to switch** | Exchange option | Flexible plant that can produce either product |
| **Option to contract** | Put option | Scale down in a downturn |
| **Growth option** | Call on future projects | A start-up's right to enter adjacent markets |

*Why a DCF ignores them.* A static DCF assumes a fixed plan. When uncertainty is large and flexibility is genuine, the expected value of the plan with flexibility exceeds the value of the plan without — the difference is the option value.

## 23.2 Valuing an option with Black–Scholes (or a binomial tree)

Map the real option to a financial option:

| Financial option parameter | Real-option equivalent |
|----------------------------|------------------------|
| Stock price S | PV of expected cash flows from the project/asset if undertaken now |
| Strike K | Investment cost required to exercise |
| Time T | Time until the decision must be made (lease expiry, patent life) |
| Volatility σ | Volatility of the project's value (from comparable firms or scenario spread) |
| Risk-free r | Risk-free rate |
| Dividend yield | Cash-flow leakage from delay (competitive erosion) |

### 23.2.1 Worked example
A company can build a new plant for ₹400 crore. If built today the PV of cash flows is ₹300 crore, so NPV = −₹100 crore and the project is rejected. But the company holds a licence valid for 5 years allowing it to build any time. Project value volatility 35%; r = 7%.

Black–Scholes: S = 300, K = 400, T = 5, σ = 35%, r = 7% → option value ≈ **₹98 crore**. The licence is worth nearly ₹100 crore even though the project has negative NPV today — it gives the right to build if demand or prices rise. A static DCF would assign zero.

### 23.2.2 Cautions
- Real-option valuation is only meaningful when the option is *real* (the firm truly has the right, exclusive or protected) and *flexibility is valuable* (uncertainty is high).
- Volatility is hard to estimate; ranges of option values are wide.
- Options that can be exercised by competitors (shared options) are worth less.
- Don't double-count: if the DCF already includes probability-weighted scenarios with managerial responses, adding an option premium overstates value.

## 23.3 Decision trees as a practical alternative

A decision tree with explicit probabilities and management responses is often easier to explain and audit than Black–Scholes.

*Example.* A pharma project: Phase II costs ₹50 crore; success probability 40%. If successful, Phase III costs ₹150 crore with 60% success; if approved, PV of launch cash flows ₹1,500 crore. Work backwards: Value at Phase III start (success) = 0.6 × 1,500 − 150 = ₹750 crore. Value at Phase II start = 0.4 × 750 − 50 = ₹250 crore (before discounting for time). Flexibility to abandon after a failed Phase II avoids the Phase III cost; a static DCF that assumes all phases are undertaken would have computed 0.4 × 0.6 × 1,500 − 50 − 150 = 360 − 200 = 160 — understating value by ₹90 crore because it forces spending on Phase III even after Phase II failure.

## 23.4 Valuing intangible assets

In many businesses the value is in brands, customer relationships, technology, patents and data. They appear in a DCF through the cash flows they enable, not separately — except when they are valued individually for transactions, purchase price allocation, impairment or transfer pricing.

| Technique | Concept | Typical use |
|-----------|---------|-------------|
| **Relief-from-royalty** | Value = PV of royalties saved by owning rather than licensing the asset | Brands, trademarks, technology |
| **Multi-period excess earnings (MPEEM)** | Cash flows attributable to the asset after deducting charges for contributory assets | Customer relationships, leading intangible |
| **With-and-without** | Difference in business value with and without the asset | Non-compete agreements, key contracts |
| **Greenfield** | Value of a start-up business with the asset as the only one in place | Licences |
| **Cost approach** | Cost to recreate | Software, workforce |
| **Market approach** | Comparable transactions | Patents, domain names |

*Relief-from-royalty example.* A brand supports revenue of ₹1,000 crore growing 8% for 5 years then 5%. A market royalty of 3% of revenue is considered arm's length; tax 25%; discount rate 13%; perpetual life. Royalty after tax in year 1 = 1,000 × 1.08 × 3% × 0.75 = ₹24.3 crore. A rough value: ₹24.3 crore growing at ~7% over a long horizon at 13% → 24.3 ÷ (0.13 − 0.07) ≈ ₹405 crore (an approximation; an explicit schedule would adjust the growth fade and add a tax-amortisation benefit of ~10–15%).

## 23.5 ESG and valuation

ESG — environmental, social and governance — matters for valuation through three channels:

1. **Cash flows:** revenues (green products, carbon pricing, boycotts), costs (compliance, energy), capex (decarbonisation), fines and litigation.
2. **Discount rate:** exposure to systematic ESG risk (climate transition, regulatory shifts) may affect cost of capital; green and sustainability-linked financing may reduce cost of debt.
3. **Terminal value and growth:** durability of the business model under climate and regulatory scenarios.

### 23.5.1 Incorporating ESG into cash flows (preferred)

| Pillar | Examples | How to reflect |
|--------|----------|---------------|
| **E** | Carbon price on emissions; energy transition capex; physical climate risk (flooding, heat) | Scenario analysis: carbon-price paths (e.g., ₹ per tonne CO₂e), 2°C scenarios; add capex for decarbonisation; reduce revenue where assets are at physical risk |
| **S** | Labour standards, health and safety, community relations, product safety | Cost of compliance and welfare; churn and productivity; fines; reputational revenue effects |
| **G** | Board independence, related-party dealings, accounting quality, anti-corruption | Probability-weighted penalties and fines; leakage to promoters; cost-of-capital effect for poor governance in some contexts |

### 23.5.2 Worked example: carbon cost for a cement producer
A cement producer emits 0.8 tonnes of CO₂ per tonne of cement and produces 10 million tonnes: 8 million tonnes CO₂ a year. Suppose a regulatory carbon price of ₹1,000 per tonne from year 5, rising 10% a year. Cost in year 5 = 8 × 1,000 = ₹800 crore *if all emissions are priced and not abatable*; with abatement capex that cuts emissions by 30% by year 8 at ₹1,500 crore, the net after-tax effect on FCFF can be modelled. Without such modelling the valuation overstates value in a transition scenario.

### 23.5.3 Discount-rate approaches
Some practitioners add an ESG risk premium (e.g., 25–100 bp) for firms with poor ESG scores; others reduce the cost of debt for sustainability-linked loans. Because the evidence on a systematic ESG risk premium is mixed and an add-on is opaque, *cash-flow scenarios are more transparent*: they show *what* is risked and *when*.

### 23.5.4 Reporting frameworks
Global frameworks (IFRS Sustainability Disclosure Standards, ISSB) and the Indian SEBI's BRSR (Business Responsibility and Sustainability Report, with a "core" set for large listed companies) provide data inputs. ESG ratings differ widely between providers; use primary data over scores where possible.

### 23.5.5 ESG valuation checklist
1. Identify material ESG issues by sector (materiality maps).
2. Quantify exposure (emissions, water, safety incidents, governance flags).
3. Build scenarios for regulation, carbon price and demand shifts.
4. Put costs and revenues in the cash flows with timing.
5. Document discount-rate choices; avoid double-counting.
6. Reflect the *opportunity* side as well: green products, lower financing cost, supply-chain resilience.

## Chapter 23 summary

- Real options capture flexibility that a static DCF misses: expand, delay, abandon, switch.
- Black–Scholes and decision trees are the main tools; both need credible inputs.
- Intangible assets are valued through royalty, excess-earnings, with-and-without and cost techniques.
- ESG is best reflected in explicit cash-flow scenarios (carbon price, capex, fines, welfare cost) rather than in an opaque discount-rate premium.

## Review questions

1. Why can a project with negative NPV be worth pursuing?
2. Map the inputs of the Black–Scholes model to a mining lease option.
3. Compute the pharma pipeline value if Phase II costs 40, p(II) = 50%, Phase III costs 120, p(III) = 50%, launch value 1,200.
4. Why is the relief-from-royalty method sensitive to the royalty rate?
5. How would you incorporate a future carbon price into FCFF?

<div class="pagebreak"></div>
