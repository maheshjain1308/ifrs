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

