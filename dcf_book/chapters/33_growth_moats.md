# Chapter 33 — Growth, Competitive Advantage and the Value of ROIC

Every chapter of this book has returned to the same relationship: *growth creates value only when new investment earns more than its cost of capital.* This closing chapter treats that relationship directly. It shows how to measure the value of growth, how long excess returns can last, how to recognise a competitive advantage, and how to translate qualitative judgements about moats into the numbers a DCF needs.

## 33.1 The value of one rupee of reinvestment

Suppose a firm reinvests ₹1 in new capital that earns a perpetual return of ROIC, while investors require WACC. The present value of that perpetual operating profit is ROIC ÷ WACC rupees (in steady state, ignoring growth in the new project itself). So:

- ROIC = WACC → ₹1 invested creates ₹1 of value; **net value created = 0**.
- ROIC = 1.5 × WACC → ₹1 creates ₹1.50; **net ₹0.50**.
- ROIC = 0.7 × WACC → ₹1 creates ₹0.70; **net −₹0.30**.

| ROIC (WACC = 11.225%) | Value per ₹1 reinvested | Net value created |
|----------------------:|------------------------:|------------------:|
| 8.0% | 0.71 | −0.29 |
| 11.2% | 1.00 | 0.00 |
| 15.0% | 1.34 | +0.34 |
| 20.0% | 1.78 | +0.78 |
| 30.0% | 2.67 | +1.67 |

This is why a firm earning 30% on new capital should grow as fast as it can (each rupee reinvested creates ₹1.67 of surplus), and a firm earning 8% should *shrink* — return capital to investors — unless it can improve returns.

## 33.2 The value-driver formula and the "value of growth"

For a steady-state firm, **EV = NOPAT₁ × (1 − g/ROIC) ÷ (WACC − g)**. Divide by NOPAT₁ to obtain the forward EV/NOPAT multiple:

| EV/NOPAT₁ multiple | g = 0% | g = 2% | g = 4% | g = 5% | g = 6% |
|--------------------|-------:|-------:|-------:|-------:|-------:|
| ROIC = WACC (11.2%) | 8.9× | 8.9× | 8.9× | 8.9× | 8.9× |
| ROIC = 13% | 8.9× | 9.2× | 9.6× | 9.9× | 10.3× |
| ROIC = 15% | 8.9× | 9.4× | 10.2× | 10.7× | 11.5× |
| ROIC = 20% | 8.9× | 9.8× | 11.1× | 12.1× | 13.4× |
| ROIC = 30% | 8.9× | 10.1× | 12.0× | 13.4× | 15.3× |

Read the table across: with ROIC = WACC the multiple is flat at 1/WACC = 8.9× whatever the growth. Read down: higher ROIC lifts the multiple, but only when there is growth to apply it to. At g = 0, ROIC is irrelevant because nothing is reinvested.

**Value of growth.** The "earnings power value" (EPV) is NOPAT₁ ÷ WACC — the value if the firm never grew (and never reinvested). The difference between DCF value and EPV is the **value of growth**. For NOPAT₁ = 100, ROIC 15%, g 5%, WACC 11.225%: EV = 100 × (1 − 0.3333) ÷ 0.06225 = 1,071; EPV = 890.9; **value of growth = 180** (17% of EV). This quantifies how much of a valuation rests on the assumption that growth will earn above its cost: only ₹180 of ₹1,071 in this case, so a moderately growing firm with a decent ROIC is mostly valued on its *current* earning power. For a high-growth, high-ROIC firm the proportion is much higher, and the valuation is correspondingly speculative.

## 33.3 How long can excess returns last?

Because ROIC tends to be competed toward WACC, the *duration* of excess returns — the **competitive-advantage period (CAP)** — is as important as their level. A simple model: new investment earns ROIC_high for N years and ROIC = WACC thereafter; growth is 6% throughout; WACC 11%; NOPAT₁ = 100.

| CAP (years of ROIC 20% on new capital) | EV (₹) | Increase vs no excess returns |
|----------------------------------------:|-------:|------------------------------:|
| 0 (ROIC = WACC) | 909 | — |
| 5 | 1,010 | +11% |
| 10 | 1,090 | +20% |
| 15 | 1,154 | +27% |
| 20 | 1,205 | +33% |
| 40 | 1,322 | +45% |
| Perpetual | 1,400 | +54% |

Observations:

1. **Early years matter most, but a long moat keeps adding.** About a fifth of the maximum increase (11 of 54 points) arrives in the first five years, over a third (20 of 54) in ten and about 60% in twenty. Because of discounting, each additional decade of excess returns adds less than the one before.
2. **The perpetual-moat assumption is expensive.** It adds 54% to value versus none; a ten-year moat adds 20%. A valuer who assumes the terminal ROIC stays far above WACC forever should be able to say what protects it for that long.
3. **Judging duration is judging a moat.** The next sections list the sources.

## 33.4 Sources of competitive advantage

| Source | Mechanism | Evidence in the numbers | Typical durability |
|--------|-----------|-------------------------|--------------------|
| **Brand** | Customers pay more or choose repeatedly | High gross margin, stable share, price increases without volume loss | Long, but erodes if quality or relevance slips |
| **Switching costs** | Costly for customers to change (software, banking relationships) | High retention, low churn, pricing power over time | Long; falls with technological change |
| **Network effects** | Value rises with users | Rapid share consolidation; rising margins with scale | Potentially very long; vulnerable to multi-homing and disruption |
| **Cost advantage / scale** | Lower unit costs from scale, process, location, proprietary resource | Low position on the industry cost curve; margin stable through cycles | Medium–long |
| **Intangible rights** (patents, licences, regulation) | Legal protection or scarce rights | Excess returns during the protected period | Finite and datable (patent life; licence term) |
| **Efficient scale in a local market** | Market only supports one or two players | Few entrants; stable returns | Medium; depends on market growth |
| **Distribution / ecosystem** | Control of channels or standards | Shelf presence, supplier terms | Medium |

*Test the claim.* For each asserted advantage, ask: (i) what *evidence* shows it exists (historical ROIC above WACC through a cycle; stable or rising market share); (ii) what *threat* could erode it (new technology, regulatory change, a better-funded competitor); (iii) how *long* it should last given those threats. Convert answers to a CAP and to terminal ROIC.

## 33.5 Reading ROIC properly

A high reported ROIC can be misleading if the denominator is understated or the numerator inflated. Adjustments:

1. **Capitalise intangible investment.** R&D, brand-building and customer-acquisition spending is expensed; capitalising and amortising it increases invested capital and lowers ROIC for intangible-intensive firms while raising NOPAT for growing firms.
2. **Include acquired goodwill** when assessing returns on *total* capital deployed. ROIC *excluding* goodwill measures the underlying operation; ROIC *including* goodwill measures whether acquisitions earned their keep.
3. **Use average or opening capital** consistently.
4. **Adjust for leases** (include right-of-use assets and lease debt under Ind AS 116).
5. **Normalise for cyclical profits** (use mid-cycle margins).
6. **Compare with peers** on the same definition.

### 33.5.1 Decomposition
ROIC = NOPAT margin × Capital turnover. Two firms with the same ROIC can have very different strategies: a high-margin, low-turnover luxury brand and a low-margin, high-turnover discount retailer. The sustainability of each source of ROIC differs: price premium (brand) versus volume efficiency (scale).

### 33.5.2 Incremental ROIC
The ROIC that matters for value is the return on *new* investment — **incremental ROIC** = ΔNOPAT ÷ Net investment (lagged). It can be higher or lower than average ROIC. A mature firm often has incremental ROIC *below* average ROIC (the best opportunities have been taken); a firm entering a new, profitable market may have the reverse. In a forecast, specify the marginal sales-to-capital and the margin trajectory, and compute the implied incremental ROIC as a check.

## 33.6 From story to numbers: translating a moat into a forecast

| Qualitative judgement | Translation |
|-----------------------|------------|
| "Strong brand; pricing power" | Gross margin stable or rising; pass-through of cost inflation; terminal ROIC substantially above WACC; CAP 10–20 years |
| "Commodity business with no moat" | Margin reverts to the industry average (mid-cycle); terminal ROIC ≈ WACC; CAP short |
| "Scale advantage in a growing market" | Margin rises with scale to a cap; reinvestment high early; ROIC rising to plateau |
| "Regulated returns" | ROIC ≈ allowed return; growth = growth in regulated asset base |
| "Disruption risk" | Scenario with early fade; probability-weighted; lower terminal growth |
| "Patent-protected product" | High margins to patent expiry; sharp fall after (patent cliff); not perpetual |

## 33.7 Growth, discipline and capital allocation

A company's capital-allocation record is evidence for ROIC and for how much reinvestment will earn:

- **Organic reinvestment** — track returns on incremental capex and working capital.
- **Acquisitions** — compare the price paid with the value created; track goodwill impairments.
- **Dividends and buybacks** — returning cash is correct when the firm lacks opportunities above WACC. A buyback at a price above intrinsic value transfers wealth to selling shareholders.
- **Leverage policy** — affects the discount rate and risk but not the operating ROIC.

*A caution about growth for its own sake.* Management teams often prefer growth (size, prestige, compensation tied to revenue). A valuer should ask whether proposed growth earns its cost of capital; if not, the DCF should show *negative* value from the incremental growth — and a prudent analyst might value the business as if the growth were *not* pursued.

## 33.8 Worked illustration: three companies, same growth, different values

All three have NOPAT₁ = ₹100 crore, WACC 11.225% and expect 5% growth forever.

| Company | Terminal ROIC | Reinvestment rate | FCFF₁ | EV | EV/NOPAT |
|---------|--------------:|------------------:|------:|---:|---------:|
| A — "Commodity" | 11.225% | 44.5% | 55.5 | 891 | 8.9× |
| B — "Solid brand" | 15% | 33.3% | 66.7 | 1,071 | 10.7× |
| C — "Dominant platform" | 30% | 16.7% | 83.3 | 1,338 | 13.4× |

The same growth rate gives EVs that differ by 50% purely because of the return on reinvested capital. Notice the *cash* difference: A pays out 55.5% of its NOPAT and C pays out 83.3%, even though both grow at 5%. C can fund the same growth with less than half the reinvestment. **That** is what a moat buys.

## 33.9 Practical guidance for DCF builders

1. **Make terminal ROIC an explicit input.** Document its value, its basis (evidence of advantage) and its sensitivity.
2. **Fade ROIC** toward the terminal level across the explicit period or in a fade period; avoid step changes.
3. **Report the value of growth** and the share of EV derived from excess returns.
4. **Choose CAP deliberately:** 5, 10, 15 or 20 years, linked to the source of advantage.
5. **Cross-check against base rates:** what fraction of firms with ROIC of 25% today still have it in ten years? (Typically a minority: persistence is lower than most stories assume.)
6. **When in doubt, be conservative about duration, not about the present.** An overstated near-term margin is visible and testable; an overstated moat is invisible until too late.

## Chapter 33 summary

- Value per rupee reinvested = ROIC ÷ WACC; growth creates value only when ROIC > WACC.
- EV/NOPAT depends on growth *and* ROIC; at ROIC = WACC growth is irrelevant.
- The value of growth is the DCF value minus earnings power value; it can be a small or large part of EV.
- The competitive-advantage period matters; most value from a moat arrives in the first ten years.
- Translate qualitative moats into ROIC paths and a CAP, with evidence and threats.

## Review questions

1. Why should a firm with ROIC below WACC not grow?
2. Compute EV/NOPAT₁ for ROIC 18%, g 4%, WACC 10%.
3. What is the "value of growth" and how is it measured?
4. How would you estimate the CAP for a company whose advantage is a 12-year patent?
5. Distinguish average ROIC from incremental ROIC.

<div class="pagebreak"></div>
