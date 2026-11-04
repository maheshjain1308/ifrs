# Chapter 6: Net Present Value and Investment Criteria

## Learning Objectives

After studying this chapter you should be able to:

- Apply the net present value (NPV) rule, explain why it maximizes shareholder wealth, and construct and read an NPV profile.
- Calculate the internal rate of return (IRR) and identify the situations (nonconventional cash flows, mutually exclusive projects, differences in scale and timing) in which the IRR rule misleads.
- Compute the modified internal rate of return (MIRR) and explain how it addresses the reinvestment-rate and multiple-IRR problems.
- Calculate payback and discounted payback periods, and assess when these rules are useful and when they are dangerous.
- Use the profitability index (PI) to rank projects, and explain why it can fail when projects are indivisible.
- Choose among mutually exclusive projects of different scale, timing and life using incremental analysis and equivalent annual annuities, and allocate a limited budget under capital rationing.

## Opening Vignette

*Illustrative scenario. Cascade Rail Components is a fictional company.*

Cascade Rail Components makes brake assemblies and couplers for freight railcars. At its annual capital-planning meeting the finance team presents the controller, Priya Raman, with a table of eight proposals competing for a limited budget. She notices that the project ranking changes depending on the column she reads. The automation line for the coupler plant has the highest internal rate of return, over 30 percent, and pays back in just over two years. A larger expansion of the brake-assembly plant has a lower IRR and a longer payback, but the highest net present value. A third proposal, a retrofit of a leased facility, has two IRRs and a negative cash flow in its final year when the site must be restored.

The chief operating officer, Tomas Weller, favors the quick-payback projects: "Our customers' orders are volatile and I want my capital back fast." The treasurer favors IRR because it "can be compared with our borrowing costs." The chief executive asks Priya a deceptively simple question: "Which projects, in total, make our shareholders richest?" Priya realizes that the question has a precise answer only if the firm uses a single, consistent measure of value, and that each criterion on the table is a different approximation of it.

This chapter builds that answer. We begin with the NPV rule, the benchmark against which every other criterion is judged. We then examine the IRR, MIRR, payback and profitability index, showing precisely where each agrees with NPV and where it departs. Finally we turn to the two hardest practical problems: choosing among mutually exclusive projects, and allocating a budget when the firm cannot fund every positive-NPV opportunity. By the end you should be able to take Priya's table and produce a defensible capital plan.

## 6.1 The Net Present Value Rule

### 6.1.1 Definition and logic

The **net present value** of a project is the present value of its expected future cash flows, discounted at the project's opportunity cost of capital, minus the initial investment:

```
NPV = CF₀ + CF₁/(1+r) + CF₂/(1+r)² + … + CF_T/(1+r)^T = Σ (t = 0 to T) CF_t / (1+r)^t
```

where CF₀ is typically negative (the outlay), CF_t are the net cash flows in year t, and r is the discount rate. The **NPV rule** states: accept every project with NPV > 0, reject projects with NPV < 0, and, when projects are mutually exclusive, choose the one with the highest NPV.

The rule rests on three observations. First, a dollar today is worth more than a dollar tomorrow, because it can be invested at the return available in capital markets. The discount rate reflects that opportunity cost and the project's risk. Second, NPV measures the increase in wealth, in today's dollars, that the project creates for the firm's owners. A project with NPV of $1 million is worth $1 million more than it costs; if the firm takes it, the value of the firm's equity should rise by that amount (assuming the market understands the project). Third, NPVs are **additive**: the NPV of a package of projects is the sum of the individual NPVs. This property lets managers evaluate projects one at a time and sum the results, and it is not shared by IRR or other ratio measures.

The NPV rule is consistent with the separation principle of corporate finance. Whatever the owners' preferences for consumption now versus later, they will all agree that the firm should accept positive-NPV projects, because the surplus can be converted into consumption at any date through borrowing and lending in capital markets. NPV is thus the criterion that all shareholders can agree on.

### 6.1.2 Choosing the discount rate

The correct discount rate is the expected return on alternative investments with the same risk as the project, not the rate at which the firm happens to borrow, and not the firm's historical return. For a project similar in risk to the firm's existing business, the weighted average cost of capital (WACC) is appropriate; for projects with different risk (a new market, a different technology), a rate that reflects the project's own risk is needed. If two divisions have very different risk, using one company-wide rate will lead the firm to accept too many risky projects and reject safe ones. The determination of discount rates was addressed in earlier chapters on risk and return and is developed in the chapter on the cost of capital.

### 6.1.3 Cash flows, not accounting profits

The inputs to NPV are **incremental after-tax cash flows**: the cash flows the firm will have if it takes the project minus the cash flows it would have without it. Several principles govern their estimation.

- **Include opportunity costs.** If the project uses a building the firm already owns, the foregone rental or sale value is a cost.
- **Ignore sunk costs.** Money already spent and not recoverable (past R&D, a feasibility study already paid for) is irrelevant to the go/no-go decision.
- **Include changes in working capital.** Growth in receivables and inventory ties up cash; it is an investment recovered at the end of the project.
- **Include side effects.** If a new product cannibalizes sales of an existing one, the lost margin is a cost; if it generates sales of complementary products, the gain is a benefit.
- **Treat financing separately.** Interest payments and debt principal are not included in project cash flows, because their cost is in the discount rate. Counting both would double count.
- **Count taxes properly.** Depreciation is not a cash flow, but it reduces taxes, and the tax shield (depreciation × tax rate) is a cash inflow.
- **Be consistent about inflation.** Nominal cash flows are discounted at nominal rates; real flows at real rates.

### 6.1.4 A worked NPV calculation

**Example 6.1 – Machine replacement with NPV.** Cascade Rail is considering a new forming machine that costs $250,000 and is expected to generate incremental after-tax cash flows of $70,000, $80,000, $90,000, $85,000 and $75,000 in years 1 through 5. The cost of capital is 12 percent.

| Year | Cash flow ($) | Discount factor at 12% | Present value ($) |
|---|---|---|---|
| 0 | −250,000 | 1.0000 | −250,000 |
| 1 | 70,000 | 0.8929 | 62,500 |
| 2 | 80,000 | 0.7972 | 63,776 |
| 3 | 90,000 | 0.7118 | 64,060 |
| 4 | 85,000 | 0.6355 | 54,019 |
| 5 | 75,000 | 0.5674 | 42,557 |
| Sum of PV of inflows | | | 286,912 |
| NPV | | | 36,912 |

*Table 6.1 – NPV of the forming machine (discount factors rounded to four decimals; present values computed without rounding).*

Step 1: Discount each inflow at 12 percent: 70,000 / 1.12 = 62,500; 80,000 / 1.12² = 63,776; 90,000 / 1.12³ = 64,060; 85,000 / 1.12⁴ = 54,019; 75,000 / 1.12⁵ = 42,557.

Step 2: Sum the present values: 62,500 + 63,776 + 64,060 + 54,019 + 42,557 = $286,912 (to the nearest dollar).

Step 3: Subtract the investment: NPV = 286,912 − 250,000 = **$36,912**.

Step 4: Decision. NPV is positive, so the machine should be accepted. Interpretation: after covering the 12 percent return that investors could earn elsewhere, the machine adds about $37,000 of value.

### 6.1.5 The NPV profile

The **NPV profile** plots NPV against the discount rate. At a rate of zero, NPV is simply the sum of the undiscounted cash flows; as r rises, NPV falls (for conventional projects, with an outlay followed by inflows). The point at which the profile crosses the horizontal axis is the IRR. Profiles are valuable for three reasons: they show how sensitive the decision is to the discount rate, they locate the IRR, and they reveal conflicts between projects.

For the machine of Example 6.1 the NPV is 36,912 at 12 percent, 51,996 at 10 percent, 16,425 at 15 percent, −1,821 at 18 percent and −12,895 at 20 percent. The profile crosses zero near 17.7 percent. The decision is therefore robust to errors of several points in the cost of capital, which is reassuring; a project whose IRR is barely above the hurdle rate deserves more caution.

NPV also has a shortcoming: it is expressed in dollars and so does not directly show the efficiency of capital use or the margin of safety. This is the legitimate attraction of rate-based measures such as IRR, to which we now turn.

## 6.2 The Internal Rate of Return

### 6.2.1 Definition

The **internal rate of return** is the discount rate at which NPV equals zero:

```
0 = CF₀ + CF₁/(1+IRR) + CF₂/(1+IRR)² + … + CF_T/(1+IRR)^T
```

There is generally no closed-form solution; the IRR is found by trial and error, by a financial calculator or by a spreadsheet function. The **IRR rule** says to accept a project if IRR exceeds the opportunity cost of capital and to reject it otherwise. For a conventional project with a single outlay followed by inflows, the IRR rule gives the same accept/reject decision as the NPV rule, because the NPV profile slopes down and crosses zero once: the NPV is positive exactly when r is below the IRR.

IRR is intuitive: it is the project's rate of return on invested capital, and it can be compared directly with the cost of capital, with the cost of debt, or with the returns on other opportunities. This explains its popularity in practice. Many managers find "a 20 percent return" easier to grasp than "an NPV of $37,000."

**Example 6.2 – NPV profile and IRR.** A project requires an investment of $100,000 and returns $30,000, $35,000, $40,000 and $45,000 in years 1 through 4. The cost of capital is 10 percent.

Step 1: Present values at 10 percent: 30,000 / 1.10 = 27,273; 35,000 / 1.21 = 28,926; 40,000 / 1.331 = 30,053; 45,000 / 1.4641 = 30,736. Total = 116,987.

Step 2: NPV = 116,987 − 100,000 = $16,987.

Step 3: NPV at other rates.

| Discount rate | NPV ($) |
|---|---|
| 0% | 50,000 |
| 5% | 31,893 |
| 10% | 16,987 |
| 15% | 4,582 |
| 20% | −5,845 |
| 25% | −14,688 |

*Table 6.2 – NPV profile of Example 6.2.*

Step 4: The NPV changes sign between 15 and 20 percent. By interpolation, IRR ≈ 15 + 5 × 4,582 / (4,582 + 5,845) = 15 + 2.2 = 17.2 percent; a more exact solution gives 17.09 percent. (Linear interpolation slightly overstates because the profile is convex.)

Step 5: The IRR of 17.09 percent exceeds the 10 percent hurdle, so the project is accepted, in agreement with the NPV.

### 6.2.2 Pitfall 1: Nonconventional cash flows and multiple IRRs

A polynomial of degree T can have as many as T roots. By Descartes' rule of signs the number of positive IRRs cannot exceed the number of changes in the sign of the cash flows. A conventional project (one sign change) has at most one IRR. A project with negative flows later in life (restoration costs for a mine, decommissioning of a plant, a major refit in mid-life, or a deferral of tax payments) can have several.

**Example 6.3 – Two IRRs.** A project has cash flows of −$100 million today, +$230 million in year 1 and −$132 million in year 2. The second outflow represents site restoration.

Step 1: NPV at several rates (in $ million): at 0 percent, −100 + 230 − 132 = −2.00. At 5 percent: −100 + 230/1.05 − 132/1.1025 = −100 + 219.05 − 119.73 = −0.68. At 10 percent: −100 + 209.09 − 109.09 = 0.00. At 15 percent: −100 + 200.00 − 99.81 = +0.19. At 20 percent: −100 + 191.67 − 91.67 = 0.00. At 25 percent: −100 + 184.00 − 84.48 = −0.48.

Step 2: The NPV is zero at both 10 percent and 20 percent. The project has two IRRs. Between 10 and 20 percent the NPV is positive; outside that range it is negative.

Step 3: Decision. At a cost of capital of 8 percent, NPV is negative (about −0.21), so reject; at 15 percent, NPV is +0.19 million and the project is marginally acceptable. The IRR rule cannot deliver this verdict: with IRRs of 10 and 20 percent, "accept if IRR > r" gives contradictory answers for any cost of capital between them (a cost of 15 percent is above one IRR and below the other). Only NPV is reliable. At 25 percent the NPV is again negative, because the large final outflow is discounted less heavily than the earlier inflow that funds it.

Besides multiple IRRs, some nonconventional projects have no IRR at all: for example, cash flows of −4, +9, −6 have no discount rate that sets NPV to zero, so the IRR rule offers no guidance, yet NPV is well defined (and negative at every rate).

### 6.2.3 Pitfall 2: Lending versus borrowing

For a project in which the firm receives cash first and pays later (a customer deposit, a lease financing, a sale of future production), the sign pattern is reversed: positive then negative. The NPV profile slopes upward, and a project is attractive only when its IRR is *below* the cost of capital because the firm is effectively borrowing. A project with flows of +100 now and −120 in a year is a loan at 20 percent. If the firm's opportunity cost of capital is 10 percent, the mechanical rule (IRR 20 percent > 10 percent, accept) says yes, but NPV = 100 − 120 / 1.10 = −9.09, so the firm should refuse: it would be paying 20 percent for money it values at 10 percent. A manager must look at the sign of the first cash flow.

### 6.2.4 Pitfall 3: The reinvestment-rate assumption

Mathematically, NPV discounts intermediate cash flows at the cost of capital, which is equivalent to assuming they are reinvested at that rate. IRR implicitly assumes intermediate cash flows are reinvested at the IRR itself. A project with a 40 percent IRR that returns cash early is assumed to find fresh opportunities earning 40 percent for that cash, which is rarely realistic in a competitive economy. The reinvestment assumption inflates IRR for high-return projects and is the reason the modified IRR in Section 6.3 was developed. The NPV assumption (reinvestment at the cost of capital, the return available in the market) is the more defensible.

### 6.2.5 Pitfall 4: Mutually exclusive projects

When only one of several projects can be chosen, the IRR rule can rank them differently from NPV, because the IRR ignores scale (how much is invested) and timing (when the cash arrives). These issues are treated in Section 6.6. The key lesson is that, among mutually exclusive projects, one should not choose the highest IRR; one should choose the highest NPV, or equivalently examine the IRR of the incremental cash flows.

### 6.2.6 Pitfall 5: A single discount rate for all periods

The IRR rule compares one number with the cost of capital, which presumes the cost of capital is the same in every year. If short-term and long-term rates differ, or if the project's risk changes over time, the comparison becomes ambiguous. NPV handles term structure and changing risk simply, by using a different discount rate for each year's cash flow.

## 6.3 The Modified Internal Rate of Return

### 6.3.1 Construction

The **modified IRR (MIRR)** corrects the reinvestment assumption and the multiple-roots problem by an explicit three-step procedure:

1. Compound all positive cash flows (inflows) forward to the end of the project's life at a stated reinvestment rate (usually the cost of capital). The result is the *terminal value* TV.
2. Discount all negative cash flows (outflows) back to time 0 at a stated financing rate (also usually the cost of capital). The result is the *present value of costs* PVC.
3. The MIRR is the single discount rate that equates them:

```
MIRR = (TV / PVC)^(1/T) − 1
```

Because the procedure gives exactly one answer for any cash flow pattern with at least one positive and one negative flow, the multiple-IRR problem disappears. The MIRR also reflects a realistic reinvestment assumption: cash does not earn the project's own IRR, but the rate available in the market.

**Example 6.4 – MIRR.** Use the project of Example 6.2: −$100,000, then +$30,000, +$35,000, +$40,000 and +$45,000. The reinvestment and financing rate is 10 percent.

Step 1: Compound each inflow to year 4: 30,000 × 1.10³ = 30,000 × 1.331 = 39,930; 35,000 × 1.10² = 42,350; 40,000 × 1.10 = 44,000; 45,000 × 1 = 45,000. TV = 39,930 + 42,350 + 44,000 + 45,000 = $171,280.

Step 2: PVC = $100,000 (the only outflow, already at time 0).

Step 3: MIRR = (171,280 / 100,000)^(1/4) − 1 = (1.7128)^0.25 − 1 = 1.1440 − 1 = **14.40 percent**.

Step 4: Compare with the 17.09 percent IRR. The MIRR is lower because it assumes reinvestment at 10 percent rather than 17.09 percent. Because MIRR exceeds the 10 percent hurdle, the project is still acceptable. Note that MIRR and NPV are directly linked: MIRR exceeds r exactly when NPV is positive (using the same r for both reinvestment and financing).

### 6.3.2 Limitations

MIRR is not a cure-all. It depends on an assumed reinvestment rate, which means different analysts can obtain different MIRRs from the same project. It can still rank mutually exclusive projects incorrectly where scale differs, because it is a rate and not a dollar amount. And it is less familiar than IRR. Its best use is as a supplement to NPV when managers want a rate-based figure that is free of the multiple-root and overstatement problems. Some finance scholars argue that it is not really a distinct criterion at all, since when reinvestment and financing rates equal the cost of capital it is just a transformation of NPV.

## 6.4 Payback and Discounted Payback

### 6.4.1 The payback period

The **payback period** is the time required for the cumulative undiscounted cash inflows to recover the initial investment. The rule: accept if the payback period is less than a cutoff chosen by management. Payback is simple, requires no discount rate, and emphasizes liquidity and speed of recovery, which matter to firms with limited access to capital or in rapidly changing industries where long-lived forecasts are unreliable. Surveys of corporate practice regularly find that firms use payback, often alongside NPV and IRR.

Its flaws are fundamental:

- It **ignores the time value of money** within the payback period (a dollar in year 1 counts the same as a dollar in year 3).
- It **ignores all cash flows after the cutoff**, so it penalizes long-lived projects with large late payoffs and favors short-lived ones.
- The cutoff is **arbitrary**, with no connection to value.
- It is **biased against** long-term investments such as R&D and infrastructure.
- It does not add: the payback of a package is not the sum of the paybacks.

### 6.4.2 The discounted payback period

The **discounted payback** applies the cost of capital to each cash flow before cumulating. It corrects the first flaw: a project that pays back on a discounted basis within its life has a positive NPV by the end of life. However, it still ignores cash flows after the cutoff and is arbitrary, so it can reject positive-NPV projects with long lives. It is best seen as a measure of risk (how long capital is exposed) and not as a measure of value.

**Example 6.5 – Payback and discounted payback.** Using the project of Example 6.2 with a 10 percent discount rate:

| Year | Cash flow ($) | Cumulative cash flow ($) | PV at 10% ($) | Cumulative PV ($) |
|---|---|---|---|---|
| 0 | −100,000 | −100,000 | −100,000 | −100,000 |
| 1 | 30,000 | −70,000 | 27,273 | −72,727 |
| 2 | 35,000 | −35,000 | 28,926 | −43,802 |
| 3 | 40,000 | 5,000 | 30,053 | −13,749 |
| 4 | 45,000 | 50,000 | 30,736 | 16,987 |

*Table 6.3 – Payback and discounted payback.*

Step 1: Payback. Cumulative cash flow turns positive during year 3. At the start of year 3 there remains 35,000 to recover, and year 3 provides 40,000. Payback = 2 + 35,000 / 40,000 = **2.875 years**.

Step 2: Discounted payback. Cumulative PV turns positive during year 4. At the start of year 4 the unrecovered amount is 13,749; year 4's PV is 30,736. Discounted payback = 3 + 13,749 / 30,736 = **3.45 years**.

Step 3: Decision with a three-year cutoff. The ordinary payback (2.875 years) passes; the discounted payback (3.45 years) fails, although the NPV is a healthy +$16,987. The discounted payback rule would reject a profitable project solely because of the arbitrary cutoff.

Step 4: Compare the machine of Example 6.1: cumulative cash flows are −180,000, −100,000, −10,000, +75,000, +150,000, so payback = 3 + 10,000 / 85,000 = 3.12 years; discounted payback = 4 + 5,645 / 42,557 = 4.13 years.

### 6.4.3 When payback is informative

Payback is a legitimate supplementary indicator when the future is hard to forecast beyond a few years (technology products with short life cycles), when capital is scarce and liquidity matters, or when a company has weak access to financing. It is also a rough screening device for small projects where the cost of full analysis exceeds the stakes. The danger is when it replaces NPV in decisions with long-lived cash flows. A sound practice is to calculate payback as a measure of risk exposure and to use NPV as the decision criterion.

## 6.5 The Profitability Index

### 6.5.1 Definition

The **profitability index (PI)**, also called the benefit-cost ratio, is the present value of future cash flows divided by the initial investment:

```
PI = PV of future cash flows / Initial investment = 1 + NPV / Initial investment
```

A project has NPV > 0 exactly when PI > 1, so the accept/reject decision agrees with NPV for a standalone project. PI measures value created per dollar invested, which is useful when capital is limited, as discussed in Section 6.7. A related measure, the *NPV index*, is NPV divided by the investment (PI − 1).

**Example 6.6 – Computing PI for four projects.** A firm with a 10 percent cost of capital evaluates four independent projects (in $ million). Each has an initial outlay at time 0 followed by the cash flows shown.

| Project | Outlay | Inflows (years 1–n) | PV of inflows | NPV | PI | IRR |
|---|---|---|---|---|---|---|
| P1 | 50 | 30, 30, 30 | 74.61 | 24.61 | 1.492 | 36.3% |
| P2 | 100 | 50, 50, 50, 50 | 158.49 | 58.49 | 1.585 | 34.9% |
| P3 | 40 | 25, 25, 25 | 62.17 | 22.17 | 1.554 | 39.5% |
| P4 | 60 | 30, 35, 20 | 71.22 | 11.22 | 1.187 | 21.0% |

*Table 6.4 – Profitability index of four independent projects.*

Step 1: For P1, the three-year annuity factor at 10 percent is (1 − 1.10⁻³) / 0.10 = 2.4869. PV of inflows = 30 × 2.4869 = 74.61. NPV = 74.61 − 50 = 24.61. PI = 74.61 / 50 = 1.492.

Step 2: For P2, the four-year annuity factor is 3.1699. PV = 50 × 3.1699 = 158.49. NPV = 58.49; PI = 1.585.

Step 3: For P3, PV = 25 × 2.4869 = 62.17; NPV = 22.17; PI = 62.17 / 40 = 1.554.

Step 4: For P4, PV = 30/1.10 + 35/1.21 + 20/1.331 = 27.27 + 28.93 + 15.03 = 71.22 (rounded); NPV = 11.22; PI = 1.187.

Step 5: Observations. All four have positive NPV and PI above 1, so all would be accepted without a budget limit. The PI ranking (P2, P3, P1, P4) differs from the NPV ranking (P2, P1, P3, P4) and from the IRR ranking (P3, P1, P2, P4). The three measures answer different questions: NPV is the total value created, PI the value per dollar of capital, and IRR the rate of return. Which one matters depends on the constraint the firm faces.

### 6.5.2 Limitations of PI

Like IRR, the PI is a ratio, so it ignores scale and can mislead when ranking mutually exclusive projects: a small project with a high PI can have a lower NPV than a large project with a modest PI. It also depends on how the outlays are defined. If some cash outflows occur after time 0, an analyst can either net them against inflows or add them to the initial investment, giving different PIs for the same project. The PI is most useful as a tool for rationing a single constrained resource (Section 6.7) and not as a general-purpose selection criterion.

## 6.6 Mutually Exclusive Projects

Projects are **independent** if the acceptance of one does not affect the others, and **mutually exclusive** if accepting one rules out the others (two designs for the same plant, two sites for a warehouse, buy-versus-lease). With independent projects and no budget limit, NPV, IRR and PI all give the same accept/reject decisions for conventional cash flows. With mutually exclusive projects the criteria can conflict, and the NPV rule must prevail. Conflicts arise from three sources: differences in scale, differences in timing, and differences in project life.

### 6.6.1 Differences in scale

A small project can have a high rate of return on a small base, and a large project a modest return on a large base. The firm cares about the dollar amount of value created, not the percentage.

**Example 6.7 – Scale conflict.** Cascade Rail can build a small packaging line (X) or a large automated line (Y) in the same space. The cost of capital is 10 percent.

- X: invest $1,000 (thousands), receive $600 per year for 3 years.
- Y: invest $5,000, receive $2,200 per year for 4 years.

Step 1: NPV of X = 600 × 2.4869 − 1,000 = 1,492.11 − 1,000 = $492.11. IRR of X solves 600 × annuity factor(3 years) = 1,000, annuity factor = 1.6667, giving IRR = 36.31 percent.

Step 2: NPV of Y = 2,200 × 3.1699 − 5,000 = 6,973.70 − 5,000 = $1,973.70. IRR of Y solves 2,200 × annuity factor(4 years) = 5,000, giving 27.18 percent.

Step 3: Conflict. IRR prefers X (36.3 percent versus 27.2 percent); NPV prefers Y ($1,973.70 versus $492.11).

Step 4: Resolve with incremental analysis. The extra cash flows from choosing Y rather than X are: year 0, −5,000 − (−1,000) = −4,000; years 1 to 3, 2,200 − 600 = +1,600; year 4, 2,200 − 0 = +2,200. The NPV of the increment at 10 percent is 1,600 × 2.4869 + 2,200 / 1.4641 − 4,000 = 3,978.96 + 1,502.63 − 4,000 = $1,481.59, which equals 1,973.70 − 492.11 as it must. The IRR of the increment is 25.33 percent, which exceeds 10 percent.

Step 5: Interpretation. The incremental investment of $4,000 earns 25.3 percent, well above the cost of capital, so the additional spending on Y is worthwhile. The rule is: **take the larger project if the incremental IRR exceeds the cost of capital**, which is equivalent to taking the one with higher NPV. The key question, unavoidably, is whether the firm has something better to do with the extra $4,000 than earn 25 percent on it; if it did, that opportunity should enter the comparison. If capital is rationed, the scale question changes, and we address it in Section 6.7.

### 6.6.2 Differences in timing

Two projects of the same size can differ in when the cash arrives. One returns cash early; the other later, but in greater total amount. At a high discount rate, the early cash is worth relatively more; at a low discount rate, the later, larger cash flows dominate. The NPV profiles therefore cross at a **crossover rate** (Fisher's rate of intersection). For discount rates below the crossover, the "later" project has higher NPV; above it, the "earlier" project has higher NPV. IRR, which ignores the actual cost of capital in the ranking, always prefers the project with the quicker payoff.

**Example 6.8 – Timing conflict and crossover rate.** Projects A and B each cost $1,000 (time 0) and have the following cash flows.

| Year | A ($) | B ($) | A − B ($) |
|---|---|---|---|
| 0 | −1,000 | −1,000 | 0 |
| 1 | 1,000 | 100 | 900 |
| 2 | 300 | 300 | 0 |
| 3 | 200 | 500 | −300 |
| 4 | 100 | 900 | −800 |

*Table 6.5 – Cash flows of mutually exclusive projects A and B.*

Step 1: IRRs. A: 36.60 percent. B: 20.59 percent. IRR ranks A first.

Step 2: NPVs at different rates:

| Discount rate | NPV of A ($) | NPV of B ($) | Better by NPV |
|---|---|---|---|
| 0% | 600.00 | 800.00 | B |
| 5% | 479.53 | 539.70 | B |
| 10% | 375.59 | 329.21 | A |
| 15% | 285.09 | 157.14 | A |
| 20% | 205.63 | 15.05 | A |

*Table 6.6 – NPV of A and B at various discount rates.*

Step 3: Crossover. The IRR of the difference (A − B) is the rate at which the two NPVs are equal: solving 900/(1+r) − 300/(1+r)³ − 800/(1+r)⁴ = 0 gives r = 7.66 percent. Check at 7.66 percent: the discount factors for years 1, 3 and 4 are 0.9289, 0.8014 and 0.7444, so the present values are 900 × 0.9289 = 836.0, −300 × 0.8014 = −240.4 and −800 × 0.7444 = −595.5, which sum to zero within rounding.

Step 4: Decision. If the cost of capital is 10 percent, which is above the crossover rate of 7.66 percent, NPV and IRR agree: choose A. If the cost of capital were 5 percent, NPV would choose B ($539.70 versus $479.53) while IRR would still choose A. Managers who rely on IRR will therefore choose the wrong project whenever the cost of capital is below the crossover rate.

Step 5: The conflict also tells us something about sensitivity. B is a longer-duration project and is more sensitive to the discount rate: its NPV falls from 800 to 15 as the rate rises from 0 to 20 percent, whereas A's falls from 600 to 206. The economic reasoning is the one that underlies the interest-rate sensitivity of long-term bonds.

### 6.6.3 Differences in project life

When mutually exclusive projects have different lives, comparing NPVs directly favors the longer project simply because it generates cash for more years, even if the projects will be repeated. If the machines will be replaced at the end of their lives, the fair comparison is between *chains* of replacements, or between the *equivalent annual annuities* (EAA) of the two options. The EAA is the constant annual amount that has the same present value as the project's NPV:

```
EAA = NPV / A(r, T)   where A(r, T) = [1 − (1+r)^(−T)] / r
```

The EAA expresses the NPV as an annual flow, so projects with different lives become comparable. It is valid when the projects can be replicated indefinitely at the same cash flows, which is a restrictive assumption but reasonable for equipment replacement. If technology is changing or demand is uncertain, a replicated chain is not realistic and one should instead model the specific decision at the end of each project's life.

**Example 6.9 – Unequal lives.** Cascade Rail can buy Machine Q (3-year life) or Machine R (5-year life). Each costs $10,000. Q generates $4,500 per year; R generates $3,000 per year. The cost of capital is 10 percent. Assume each machine can be replaced at the end of its life by an identical one.

Step 1: NPV of Q = 4,500 × 2.4869 − 10,000 = 11,190.83 − 10,000 = $1,190.83. IRR = 16.65 percent.

Step 2: NPV of R = 3,000 × 3.7908 − 10,000 = 11,372.36 − 10,000 = $1,372.36. IRR = 15.24 percent.

Step 3: Naively, R has higher NPV ($1,372 versus $1,191) and Q has higher IRR. They conflict.

Step 4: EAA. For Q: 1,190.83 / 2.4869 = $478.85 per year. For R: 1,372.36 / 3.7908 = $362.03 per year.

Step 5: Verify with a replacement chain over 15 years (the lowest common multiple of 3 and 5). Q is bought five times, with NPV 1,190.83 recurring at times 0, 3, 6, 9 and 12: total NPV = 1,190.83 × (1 + 1.10⁻³ + 1.10⁻⁶ + 1.10⁻⁹ + 1.10⁻¹²) = 1,190.83 × 3.0586 = $3,642. R is bought three times (times 0, 5, 10): total NPV = 1,372.36 × (1 + 1.10⁻⁵ + 1.10⁻¹⁰) = 1,372.36 × 2.0064 = $2,754.

Step 6: Decision. Machine Q is better: its EAA ($478.85) beats R's ($362.03), and over the common 15-year horizon its chain NPV ($3,642) exceeds R's ($2,754). The original NPV comparison was misleading because R's higher NPV came from using capital for two extra years, not from higher productivity.

An alternative viewpoint is the cost-minimization problem. When machines produce identical output (so inflows are the same and only costs differ), the choice is the one with the lowest *equivalent annual cost*. The same calculation applies to the PV of costs divided by the annuity factor.

### 6.6.4 A decision procedure

For mutually exclusive projects:

1. Check that the cash flows and discount rates are correct, and that the projects are really comparable (same time horizon or replication assumption).
2. Compute NPV for each at the appropriate discount rate; rank by NPV (or EAA when lives differ).
3. If management prefers a rate-of-return view, compute the incremental IRR of the larger or later project over the smaller or earlier one, and compare it with the cost of capital.
4. Never rank mutually exclusive projects by IRR, payback or PI alone.

## 6.7 Capital Rationing

### 6.7.1 Soft and hard rationing

The NPV rule assumes the firm can fund every positive-NPV project at the cost of capital. In reality, a firm may face a budget limit. **Soft rationing** is a limit imposed internally, for example by headquarters allocating a fixed budget to divisions, in order to control expansion, conserve management attention, or discipline divisional managers who might overstate project benefits. **Hard rationing** arises from external constraints, such as when a firm cannot raise additional capital at a reasonable cost because of poor credit, covenant restrictions or a depressed market. Corporate finance theory suggests that hard rationing should be rare for sound firms in well-functioning markets; if a firm cannot fund a positive-NPV project, something is wrong with its disclosure, or the project's NPV is overstated. But soft rationing is common in practice, and managers must decide how to allocate within it.

### 6.7.2 The profitability-index approach

With a single-period budget constraint, the goal is to select the set of projects that maximizes total NPV subject to the budget. If projects are *divisible* (each can be undertaken in part), the optimal strategy is to rank by PI and fund in order until the budget is exhausted, since PI measures NPV per dollar of the scarce resource. If projects are *indivisible*, as is usual, the PI ranking can leave part of the budget unused and not produce the best combination. In that case the problem is an integer program, which can be solved by enumeration for a small set of projects, or with linear/integer programming for a large set.

**Example 6.10 – Rationing with indivisible projects.** Using the projects of Example 6.6 (in $ million) with a total budget of $150 million.

| Project | Outlay | NPV | PI |
|---|---|---|---|
| P1 | 50 | 24.61 | 1.492 |
| P2 | 100 | 58.49 | 1.585 |
| P3 | 40 | 22.17 | 1.554 |
| P4 | 60 | 11.22 | 1.187 |

*Table 6.7 – Projects competing for a $150 million budget.*

Step 1: Total outlay of all four is 250, so rationing is binding.

Step 2: PI ranking: P2 (1.585), P3 (1.554), P1 (1.492), P4 (1.187). Fund P2 (100) and P3 (40): total 140, leaving 10 unspent. P1 (50) and P4 (60) do not fit. Total NPV = 58.49 + 22.17 = $80.66 million.

Step 3: Enumerate feasible combinations within 150: P1 + P2 = 150 with NPV 24.61 + 58.49 = $83.10 million; P2 + P3 = 140 with $80.66 million; P1 + P3 + P4 = 150 with 24.61 + 22.17 + 11.22 = $58.00 million; P2 + P4 = 160, infeasible; P1 + P3 = 90 with $46.78 million.

Step 4: The best feasible set is P1 + P2, with NPV $83.10 million, which is higher than the PI-ranking selection ($80.66 million) by $2.44 million. The PI rule failed because P3, which ranked second by PI, was indivisible and left an unusable $10 million that P1's size could have absorbed.

Step 5: Opportunity cost of the budget. Suppose the budget were raised from 150 to 160. The combination P2 + P4 (160) has NPV $69.71 million, still below P1 + P2 at $83.10 million, and no feasible combination at 160 beats P1 + P2. The extra $10 million is therefore worth nothing in this small example, whereas an extra $40 million (budget 190) would allow P1 + P2 + P3 for $105.27 million. Shadow prices in integer problems are lumpy, which is why the answer is found by examining combinations rather than by applying a single rule of thumb.

### 6.7.3 Multi-period rationing and interactions

If budgets are limited in several periods, or if projects have interdependencies (one project requires another, or two are substitutes), the problem requires linear programming with constraints for each period and for each interdependency. The results include **shadow prices** on each budget constraint, which tell managers what an additional dollar of capital is worth and thus whether it would be worthwhile to seek additional funding. Large organizations use such models to allocate capital among divisions.

### 6.7.4 Managerial perspective on rationing

Three practical points deserve emphasis. First, rationing is an *internal* decision and should not change the valuation of projects; it only affects which of the positive-NPV projects are selected. Second, if the budget is persistently binding and the excluded projects have high NPVs, the firm should ask whether it should raise more capital: the cost of leaving value on the table can exceed the cost of financing. Third, internal budgets can lead managers to inflate forecasts to win funding. A disciplined process includes post-audits comparing realized with forecast cash flows, and holds sponsors accountable for their projections.

## 6.8 Using the Criteria in Practice

### 6.8.1 A comparison of the criteria

| Criterion | Measures | Uses time value | Uses all cash flows | Handles scale | Main weakness |
|---|---|---|---|---|---|
| NPV | Dollar value created | Yes | Yes | Yes | Requires an estimate of the discount rate; not a ratio |
| IRR | Rate of return | Yes | Yes | No | Multiple roots, reinvestment assumption, conflicts for exclusive projects |
| MIRR | Rate of return with stated reinvestment | Yes | Yes | No | Depends on the assumed reinvestment rate |
| Payback | Speed of recovery | No | No | No | Ignores value after cutoff and time value |
| Discounted payback | Speed of recovery in PV terms | Yes | No | No | Ignores value after cutoff |
| PI | Value per dollar invested | Yes | Yes | No (ratio) | Misleads for exclusive or indivisible projects |

*Table 6.8 – Comparison of investment criteria.*

### 6.8.2 What do firms actually do?

Surveys of corporate practice, taken in many countries over several decades, have found that most large firms use NPV and IRR as primary tools, with payback still widely used as a secondary measure, particularly by smaller firms and in jurisdictions with less developed capital markets. The popularity of IRR despite its flaws is usually attributed to its intuitive form. The persistence of payback is attributed to its simplicity, to concerns about liquidity and risk, and to managers' skepticism about distant forecasts. A sensible approach combines the criteria: use NPV as the decision rule, use IRR and PI to communicate return and capital efficiency, and use payback as an indicator of risk and liquidity exposure.

### 6.8.3 Sensitivity, scenarios and real options

The NPV is only as good as the cash-flow forecast. Before accepting a project, managers should run **sensitivity analysis** (varying one input at a time, such as volume, price or cost), **scenario analysis** (varying a coherent set of inputs, such as a boom, base and recession case), and **break-even analysis** (the level of an input at which NPV equals zero). For the machine of Example 6.1, which has NPV of $36,912 on an investment of $250,000, a 10 percent shortfall in every cash flow lowers PV of inflows by 28,691 to 258,221 and still leaves NPV positive at $8,221; a 13 percent shortfall would eliminate the NPV entirely (since 36,912 / 286,912 = 12.9 percent). The project therefore has a fairly thin margin of safety, a fact that the NPV figure alone conceals.

The NPV rule also ignores the managerial flexibility to expand, delay or abandon a project in response to events. Where flexibility is valuable, the value of these **real options** should be added to the static NPV; a project with a slightly negative NPV may be worth undertaking because it creates an option on future growth, while a positive-NPV project may be worth delaying if waiting resolves uncertainty. The valuation of options is treated in a later chapter.

### 6.8.4 Behavioral and organizational issues

Several biases degrade capital budgeting in practice: optimism in forecasts (sponsors overstate benefits and understate costs), escalation of commitment (continuing to fund failing projects because of sunk costs), and the "empire building" tendency of managers who prefer large projects. Controls include independent review of forecasts, stage-gated funding (releasing capital in tranches tied to milestones), reference-class forecasting (comparing a project with the outcomes of similar past projects), and compensation tied to value creation rather than to size or reported earnings. The criteria in this chapter are tools; the quality of the decision depends on the quality of the assumptions and the integrity of the process that produces them.

## Case Study

**Cascade Rail Components: The Capital Plan.** *Illustrative, fictional case.*

Cascade Rail Components, whose controller Priya Raman opened this chapter, must finalize next year's capital plan. The company's weighted average cost of capital, for projects similar in risk to the core business, is 11 percent. The board has set a hard internal limit of $10 million for new projects in the coming year, partly because of a covenant on the company's term loan and partly because the board wants to see operating results before committing more.

Five proposals remain after screening (all figures in $ million; outlay at time 0, followed by annual after-tax cash flows).

- **Alpha**, a major expansion of the brake-assembly plant: outlay 8.0; inflows 2.6, 2.9, 3.1, 3.1 and 2.8 in years 1 to 5.
- **Beta**, a smaller upgrade of the same plant: outlay 3.0; inflows of 1.4 in each of years 1 to 4. Alpha and Beta are mutually exclusive because they use the same site.
- **Gamma**, a new coupler-testing line: outlay 4.0; inflows of 1.6 in each of years 1 to 4.
- **Delta**, an energy-efficiency retrofit: outlay 2.0; inflows of 1.0 in each of years 1 to 3.
- **Epsilon**, a warehouse-automation project: outlay 5.0; inflows of 2.0 in each of years 1 to 4.

Priya's team produces the following summary at 11 percent.

| Project | Outlay | NPV | IRR | PI | Payback (years) |
|---|---|---|---|---|---|
| Alpha | 8.0 | 2.67 | 23.3% | 1.333 | 2.81 |
| Beta | 3.0 | 1.34 | 30.7% | 1.448 | 2.14 |
| Gamma | 4.0 | 0.96 | 21.9% | 1.241 | 2.50 |
| Delta | 2.0 | 0.44 | 23.4% | 1.222 | 2.00 |
| Epsilon | 5.0 | 1.20 | 21.9% | 1.241 | 2.50 |

Tomas Weller, the chief operating officer, wants to apply a strict two-and-a-half-year payback cutoff and fund Beta first, since it has the fastest payback, the highest IRR and the highest PI among the mutually exclusive pair. The treasurer observes that the incremental investment in Alpha over Beta is $5.0 million, with incremental cash flows of 1.2, 1.5, 1.7, 1.7 and 2.8 in years 1 to 5, an incremental IRR of 19.8 percent and an incremental NPV of $1.32 million. The chief executive wants to know whether the entire budget should go into Alpha plus Delta, which together use exactly $10 million, or whether the company is better off spreading the money across smaller projects.

Priya enumerates the feasible portfolios. Alpha and Delta together have NPV of $3.11 million. Beta, Delta and Epsilon (outlay $10.0 million) have NPV of $2.99 million. Beta, Gamma and Delta (outlay $9.0 million) have NPV of $2.75 million. Alpha alone has $2.67 million. A ranking by profitability index would put Beta first (1.448); with Alpha excluded, Gamma and Epsilon tie (1.241) and Delta follows (1.222). Funding in that order gives Beta, Gamma and Delta, because Epsilon no longer fits, and that portfolio is worse than the NPV-maximizing one.

She also notes two cautions. The cash-flow forecasts of Alpha rely on a continuing high volume of freight-car orders, while the other projects are cost-saving and less dependent on volume. A 15 percent shortfall in Alpha's inflows would reduce its PV of inflows from 10.67 to 9.07, making its NPV about +1.07 million. Second, Beta has a four-year life while Alpha has five, so the comparison should consider what happens in year 5 if Beta is chosen.

**Discussion Questions**

1. Explain why the rankings by NPV, IRR, PI and payback differ for Alpha and Beta. Which criterion should decide between them, and what role does the incremental IRR of 19.8 percent play?
2. Evaluate Tomas Weller's proposed two-and-a-half-year payback cutoff. What does it accomplish, what does it cost, and what better way is there to address his concern about volatile orders?
3. Under the $10 million limit, which portfolio would you recommend? Show why the PI ranking does not give the best answer here, and explain what the budget limit implies about the opportunity cost of capital.
4. Discuss how you would test the robustness of the recommendation, including the risk that Alpha's volume assumptions are optimistic, and whether the firm should seek additional funding for the projects left out.

## Key Takeaways

- NPV measures the wealth a project creates in today's dollars; it uses all cash flows, respects the time value of money, is additive across projects, and is the benchmark against which other criteria are judged.
- Project cash flows must be incremental, after-tax and free of financing charges; sunk costs are ignored and opportunity costs, working capital and side effects are included.
- The IRR is the discount rate that sets NPV to zero; for conventional, independent projects it gives the same accept/reject decision as NPV.
- IRR fails in several situations: multiple or nonexistent IRRs with sign changes in the cash flows, projects that resemble borrowing, an unrealistic reinvestment assumption, and conflicts among mutually exclusive projects.
- MIRR restores a single answer by compounding inflows at a stated reinvestment rate and discounting outflows at a financing rate, but it remains a rate and so is not a cure for scale conflicts.
- Payback and discounted payback measure speed of recovery and exposure; they ignore cash flows after the cutoff and can reject valuable long-lived projects, so they are better used as risk indicators than as decision rules.
- The profitability index measures value per dollar invested and is useful for rationing capital, but it can mislead for mutually exclusive projects and for indivisible projects.
- Among mutually exclusive projects, choose the highest NPV (or the highest equivalent annual annuity when lives differ), or take the larger or later project if its incremental IRR exceeds the cost of capital.
- The crossover rate is the IRR of the difference between two projects' cash flows; below it, the longer-duration project has the higher NPV.
- Under capital rationing with indivisible projects, enumerate or optimize over feasible portfolios to maximize total NPV; a PI ranking may leave budget unused and miss the best combination.

## Review Questions

1. Explain why the NPV rule maximizes shareholder wealth, and why shareholders with different consumption preferences would still agree on it.
2. What is meant by "incremental" cash flows? Give three examples of items that should be included and three that should be excluded when estimating them.
3. Under what conditions do the NPV and IRR rules give the same accept/reject decision for an independent project? Illustrate with an NPV profile.
4. Why can a project have more than one IRR? What determines the maximum number of IRRs, and how should a manager decide whether to accept such a project?
5. Explain the reinvestment-rate assumption implicit in NPV and in IRR. Which is more defensible, and why?
6. Describe how the MIRR is calculated. What problems does it solve and what problems does it leave unsolved?
7. List three weaknesses of the payback rule and describe a situation in which a payback cutoff might nevertheless be reasonable.
8. Why does the profitability index sometimes give the wrong ranking for mutually exclusive projects? When is it a useful tool?
9. What is the crossover rate? Explain why IRR and NPV rank two projects differently when the cost of capital is below it.
10. Distinguish soft from hard capital rationing. Why might a PI ranking fail to identify the optimal set of projects when projects are indivisible?

## Problems

1. **NPV, IRR and payback.** A project costs $80,000 and returns $25,000, $30,000, $35,000 and $28,000 in years 1 to 4. The cost of capital is 9 percent. Compute NPV, IRR and payback period. Should the project be accepted?
2. **NPV and IRR.** A project requires $500 now and returns $200, $250 and $300 in years 1, 2 and 3. Compute the NPV at 12 percent and the IRR.
3. **MIRR.** A project has cash flows −$1,000, +$400, +$450 and +$500 in years 0 to 3. The IRR is 15.98 percent. Compute the MIRR using a reinvestment rate of 8 percent, and the NPV at 8 percent. Why do the MIRR and IRR differ?
4. **Capital rationing.** At a 10 percent cost of capital, the NPVs and outlays of five independent projects are (outlay in $ million, NPV in $ million): A (120, 29.21), B (100, 42.64), C (80, 44.34), D (150, 71.89), E (60, 5.51). The budget is $300 million. Compute the PI of each project and find the portfolio that maximizes NPV.
5. **Scale.** Two mutually exclusive projects at a 10 percent cost of capital: Small costs $200 and returns $90 per year for 4 years; Large costs $600 and returns $230 per year for 4 years. Compute NPV and IRR of each, the incremental IRR, and state which to choose.
6. **Unequal lives.** Machine M1 costs $30,000 and returns $12,000 per year for 3 years; Machine M2 costs $45,000 and returns $11,000 per year for 6 years. The cost of capital is 9 percent and each can be replaced indefinitely. Compute NPV and EAA of each, and choose.
7. **Nonconventional cash flows.** A project has cash flows −$200, +$500 and −$310 in years 0, 1 and 2. Find the IRRs, compute the NPV at 10 percent, 12 percent, 20 percent and 25 percent, and state the range of discount rates for which the project is acceptable.
8. **Payback measures.** A project costs $60,000 and returns $20,000, $25,000, $30,000, $10,000 and $10,000 in years 1 to 5. The cost of capital is 10 percent. Compute payback, discounted payback and NPV. If the firm's cutoff is 2.5 years, what do the two payback rules say?

### Answers to Selected Problems

1. PV of inflows = 25,000/1.09 + 30,000/1.09² + 35,000/1.09³ + 28,000/1.09⁴ = 22,936 + 25,250 + 27,026 + 19,836 = 95,049 (from unrounded values), so NPV = $15,049. IRR = 17.05 percent. Cumulative cash flows are −55,000, −25,000, +10,000, so payback = 2 + 25,000/35,000 = 2.71 years. Accept (NPV > 0, IRR > 9 percent).
2. PV = 200/1.12 + 250/1.2544 + 300/1.404928 = 178.57 + 199.30 + 213.53 = 591.40; NPV = $91.40. IRR = 21.65 percent.
3. Terminal value at year 3 = 400 × 1.08² + 450 × 1.08 + 500 = 466.56 + 486.00 + 500 = 1,452.56. MIRR = (1,452.56/1,000)^(1/3) − 1 = 13.25 percent. NPV at 8 percent = $153.09. The MIRR is lower than the IRR (15.98 percent) because it assumes reinvestment at 8 percent instead of at the IRR; it still exceeds 8 percent, consistent with a positive NPV.
4. PIs: A 1.243, B 1.426, C 1.554, D 1.479, E 1.092. Ranking by PI: C, D, B, A, E; C (80) + D (150) = 230, B (100) does not fit, A (120) does not fit, E (60) fits, giving C + D + E at 290 with NPV 44.34 + 71.89 + 5.51 = $121.74 million (121.75 with unrounded NPVs). Checking alternatives (C + D = 116.23; A + B + C = 116.20; B + D = 114.53) confirms that C + D + E is best.
5. Small: NPV = 90 × 3.1699 − 200 = $85.29; IRR = 28.49 percent. Large: NPV = 230 × 3.1699 − 600 = $129.07; IRR = 19.60 percent. Incremental flows: −400, then +140 per year for 4 years; incremental NPV = $43.78; incremental IRR = 14.96 percent, above 10 percent. Choose Large (higher NPV), despite its lower IRR.
6. M1: NPV = 12,000 × 2.5313 − 30,000 = $375.54; EAA = 375.54/2.5313 = $148.36. M2: NPV = 11,000 × 4.4859 − 45,000 = $4,345.10; EAA = 4,345.10/4.4859 = $968.61. Choose M2 (higher EAA and higher NPV).
7. Solving −200 + 500x − 310x² = 0 with x = 1/(1+r) gives x = 0.8786 and 0.7343, so IRRs are 13.82 percent and 36.19 percent. NPV at 10 percent = −1.65; at 12 percent = −0.70; at 20 percent = +1.39; at 25 percent = +1.60. The project is acceptable only for discount rates between about 13.8 and 36.2 percent; the IRR rule alone is ambiguous.
8. Cumulative cash flows: −40,000, −15,000, +15,000, so payback = 2 + 15,000/30,000 = 2.5 years. PVs: 18,182; 20,661; 22,539; 6,830; 6,209. Cumulative PV after year 2 = −21,157, so discounted payback = 2 + 21,157/22,539 = 2.94 years. NPV = 18,182 + 20,661 + 22,539 + 6,830 + 6,209 − 60,000 = $14,422. With a 2.5-year cutoff, ordinary payback is exactly at the cutoff (accept or marginal), while discounted payback (2.94 years) fails; yet the NPV is clearly positive.
