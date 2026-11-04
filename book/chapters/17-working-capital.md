# Chapter 17: Working Capital and Short-Term Financial Planning

## Learning Objectives

After studying this chapter you should be able to:

- Define net working capital and the operating and cash conversion cycles, compute DSO, DIO, DPO, and the cash conversion cycle from financial statements, and translate days of improvement into cash released.
- Evaluate receivables policy (credit terms, credit standards, collection effort) with an incremental-profit framework, and calculate the implicit cost of trade-credit discounts.
- Apply inventory models (economic order quantity, reorder point, safety stock) and explain the trade-off between carrying costs, ordering costs, and stock-out costs.
- Design a cash management policy using the Baumol and Miller-Orr models, and describe the main collection, concentration, and disbursement tools.
- Compare short-term financing sources (bank lines, term loans, commercial paper, factoring, asset-based lending) and compute their effective annual costs including fees and compensating balances.
- Build a monthly cash budget, identify the peak financing requirement, and evaluate supply chain finance programs from the viewpoints of buyer, supplier, and financier.

## Opening Vignette

*Illustrative scenario: Northgate Cycle Components is a fictional company.*

Northgate Cycle Components makes aluminum frames and drivetrain parts for mid-market bicycle brands. For three years its income statement looked healthy: sales grew from $410 million to $600 million, and operating margins held near 9 percent. Yet in the autumn of the third year the treasurer, Amara Okafor, found herself on a call with her bank asking for an emergency $40 million increase to the revolving credit facility.

The board could not understand it. "We are profitable and growing. Why are we short of cash?" Okafor put three numbers on the whiteboard. Receivables had risen from 41 days of sales to 50 days, because the sales team had granted 60-day terms to win two large retail chains. Inventory had risen from 48 days of cost of goods sold to 61 days, because the plant manager had bought aluminum in bulk to hedge price increases and had added a dozen new SKUs. And payables had fallen from 47 days to 40 days, because the purchasing group, anxious about supply reliability, had begun paying suppliers early to secure priority allocation.

Each decision was individually defensible. Together they lengthened the cash conversion cycle from about 42 days to about 71 days. With $600 million of sales and about $420 million of cost of goods sold, the extra nine days of receivables, thirteen days of inventory, and seven fewer days of payables tied up roughly $38 million of additional cash in the working capital base. That is cash the company had not earned yet in any usable form: it was sitting in unsold frames, unpaid invoices, and prepayments to suppliers. Growth was consuming cash faster than profits produced it.

This chapter is about how to avoid Northgate's situation. Working capital management is not glamorous, but it is where a large share of a firm's liquidity is won or lost. Firms with excellent strategy and mediocre working capital discipline fail more often than the reverse. We will learn to measure the cycle, to price each policy lever, to plan cash on a month-by-month basis, and to use modern tools such as supply chain finance without mistaking them for free money.

## 17.1 The Working Capital Cycle

### 17.1.1 Definitions

**Working capital** has two common meanings. *Gross working capital* is the total of current assets: cash and marketable securities, receivables, inventories, and prepaid expenses. *Net working capital* (NWC) is current assets minus current liabilities. For managerial purposes it is usually more useful to work with **operating working capital**, which strips out financing items:

```
Operating NWC = (Receivables + Inventory + Prepaids) − (Payables + Accruals)
```

Cash and short-term debt are excluded because they are the *result* of working capital and financing decisions, not part of the operating process itself. A firm that sells goods on credit, holds inventory, and buys on credit from suppliers will always have an operating NWC investment that must be financed by someone: shareholders, long-term lenders, or short-term lenders.

Why does this matter to valuation? Increases in operating NWC are a use of cash in the free-cash-flow calculation. A firm whose operating NWC equals 20 percent of sales faces ΔNWC = 0.20 × ΔSales, so each $100 of added sales requires $20 of added financing for working capital, in addition to fixed capital. Growth is cash-hungry.

### 17.1.2 The operating cycle and the cash conversion cycle

Consider the life of a dollar in a manufacturing business. The firm buys raw materials (often on credit), converts them to finished goods, sells the goods (often on credit), and finally collects cash. The time line has three components:

- **Days inventory outstanding (DIO)**: the average time inventory sits before being sold.
- **Days sales outstanding (DSO)**: the average time between a credit sale and collection.
- **Days payables outstanding (DPO)**: the average time the firm takes to pay its suppliers.

The **operating cycle** is DIO + DSO: the days from the arrival of inventory until the cash from its sale is collected. The **cash conversion cycle (CCC)** subtracts the period during which suppliers are financing the firm:

```
CCC = DIO + DSO − DPO

DIO = (Average inventory / Cost of goods sold) × 365
DSO = (Average receivables / Credit sales) × 365
DPO = (Average payables / Cost of goods sold) × 365
```

The CCC measures the number of days the firm must finance its operations from non-spontaneous sources. A short or negative CCC means customers and suppliers fund the business. Retailers such as large supermarkets and some online platforms often have negative cycles: they sell for cash within days and pay suppliers in 45 or 60 days. A capital-goods manufacturer may have a CCC of 150 days or more.

A few technical cautions apply. First, use consistent denominators. DPO conventionally uses cost of goods sold, but strictly it should use purchases; where purchases are not disclosed, COGS is the common proxy. Second, use *average* balances when seasonality is present, because a year-end balance may be unrepresentative. Third, when sales are growing quickly, balances at year-end divided by full-year sales understate the days on a current-run-rate basis; some analysts annualize the last quarter instead.

**Example 17.1 – Computing and improving the cash conversion cycle.** Northgate-style data for a fictional firm, Harbor Industrial: annual sales (all on credit) are $600 million; cost of goods sold $420 million; average receivables $82 million; average inventory $70 million; average payables $46 million. Use a 365-day year.

*Step 1: DSO.* 82 / 600 × 365 = 0.136667 × 365 = 49.9 days.

*Step 2: DIO.* 70 / 420 × 365 = 0.166667 × 365 = 60.8 days.

*Step 3: DPO.* 46 / 420 × 365 = 0.109524 × 365 = 40.0 days.

*Step 4: CCC.* 49.9 + 60.8 − 40.0 = 70.7 days.

Now management sets targets: collections tightened by 5 days of sales, inventory reduced by 6 days of COGS, and payables lengthened by 4 days of COGS (without losing discounts).

*Cash released from receivables:* 5 × (600 / 365) = 5 × 1.6438 = $8.22 million.
*Cash released from inventory:* 6 × (420 / 365) = 6 × 1.1507 = $6.90 million.
*Cash released from payables:* 4 × 1.1507 = $4.60 million.
*Total:* 8.22 + 6.90 + 4.60 = $19.73 million. The CCC falls by 15 days to 55.7 days.

If the firm's marginal short-term borrowing cost is 6 percent, the annual saving is 0.06 × 19.73 = $1.18 million, which flows straight to pre-tax profit. Note the asymmetry: a receivable day is worth sales per day ($1.644 million), while inventory and payables days are worth COGS per day ($1.151 million). Receivables are measured at selling price and so carry the margin.

### 17.1.3 Working capital as a source of value

Because it is a perpetual investment, working capital deserves the same discipline as capital budgeting. The present value of a one-time release of $19.73 million is the cash itself (it is an immediate inflow); but the *ongoing* benefit is the interest or return avoided on that sum every year. Capitalizing a perpetual saving of $1.18 million at a 9 percent required return gives roughly $13 million of value only if the cash would otherwise be financed by long-term capital; if instead the cash is used to retire revolver borrowings at 6 percent, the benefit is simply the 6 percent saving. Be careful not to double count: the one-time release of cash and the perpetuity of interest savings are two descriptions of the *same* benefit.

### 17.1.4 Why cycles differ across firms and over time

Industry structure explains most cross-sectional variation. A firm with long production processes (shipbuilding, aerospace, aged spirits, tobacco) holds inventory for months by physical necessity. Firms selling to governments or large industrial customers face long payment terms, because the customer has bargaining power. Firms selling to consumers by card get paid in two to three days. Within an industry, the leaders typically have the shortest cycles; a persistent gap relative to peers is a management signal worth investigating.

Over the business cycle, working capital behaves procyclically in the upswing (inventories and receivables expand with sales) and sometimes sharply in a downturn (customers stretch payments, inventories pile up unsold). Treasury planning must therefore distinguish between *permanent* working capital, the minimum level held through the cycle, and *temporary* or seasonal working capital that fluctuates around it.

## 17.2 Financing Policy: Matching, Aggressive, and Conservative

### 17.2.1 Permanent and temporary current assets

A firm's investment in current assets has a floor. Even in its slowest month, Northgate needs a base level of receivables, inventory, and cash; this is **permanent current assets**. Above the floor sit seasonal peaks, which are **temporary current assets**. Fixed assets are permanent as well. A finance policy can then be described by how the firm funds each layer.

- **Maturity matching (hedging) policy.** Fund permanent assets (fixed plus permanent current) with long-term capital: equity and long-term debt. Fund temporary current assets with short-term borrowing. The principle is that the maturity of financing should match the life of the asset financed. Seasonal borrowing is repaid out of the asset conversion that created the need.
- **Aggressive policy.** Fund some permanent assets with short-term debt. Because the short-term yield curve is normally lower than the long-term, expected interest cost falls. But the firm must continually *roll over* its borrowings, exposing it to refinancing risk, interest-rate risk, and the risk that credit markets close just when it needs them.
- **Conservative policy.** Fund even some temporary needs with long-term capital and hold surplus cash or marketable securities in the troughs. Risk is low, but the carrying cost of idle long-term money is high.

### 17.2.2 The cost-risk trade-off

The textbook argument for aggressive financing is a lower expected interest cost; the practical argument against is the 2008-2009 lesson that short-term funding can evaporate. Firms with volatile cash flows, lumpy capital needs, or poor credit access should lean conservative. Firms with predictable cash flows and committed backup lines can lean more aggressive. A mature rule of thumb: the *committed* liquidity (cash plus undrawn committed facilities) should cover the plausible worst-case cumulative cash shortfall over the planning horizon, plus a margin.

Common mistake: treating a "revolving line" as permanent capital. Most are committed for 364 days or three to five years and carry covenants. They can be reduced, repriced, or not renewed. Lines are a backup for seasonality, not a substitute for equity.

**Table 17.1 – Financing policies compared.**

| Feature | Conservative | Matching | Aggressive |
|---|---|---|---|
| Short-term debt funds | Little or none; surplus cash held | Temporary current assets only | Temporary plus part of permanent assets |
| Expected interest cost | Highest | Moderate | Lowest (if curve upward-sloping) |
| Refinancing / rate risk | Lowest | Moderate | Highest |
| Liquidity buffer | Large | Moderate | Thin |
| Typical user | Cyclical, high-distress-cost firms | Most operating firms | Stable, strongly rated firms |

## 17.3 Receivables and Credit Policy

### 17.3.1 Why firms extend credit

Trade credit is a financing product sold alongside the goods. Suppliers extend it for several reasons: it is a competitive necessity in many industries; it lets customers verify quality before paying; it is a form of price discrimination (customers who value the delay pay an effective higher price, while those who do not can take a discount); and suppliers sometimes have an information or monitoring advantage over banks, since they see order patterns and can repossess or resell goods. Credit policy therefore has four levers.

1. **Credit standards**: which customers qualify, determined by credit scoring, financial analysis, references, and payment history. The classic "five Cs" are character, capacity, capital, collateral, and conditions.
2. **Credit terms**: the length of the credit period and any early-payment discount, written in the shorthand "2/10 net 30" (2 percent discount if paid within 10 days; otherwise the full amount is due in 30).
3. **Collection policy**: reminders, dunning letters, calls, credit holds, third-party collection, legal action.
4. **Credit limits and monitoring**: exposure caps by customer, credit insurance, and aging reports.

### 17.3.2 The incremental analysis framework

Any change in policy should be assessed by comparing incremental cash flows to the incremental financing cost of the added receivables. The relevant items are:

```
Incremental contribution margin on added sales
− Additional bad-debt losses (on all sales if the rate rises)
− Carrying cost on the added investment in receivables
− Added collection or administrative cost
+ Reduction in discounts lost / minus discounts granted
= Net incremental profit
```

Two points of rigor deserve emphasis. First, the **investment in receivables** is usually measured at *variable cost* rather than at sales price: what the firm has actually laid out while it waits is the cost of the goods, not the profit it has yet to collect. (Some analysts use full sales value on the grounds that the whole receivable is outstanding; that is more conservative, and the choice should be applied consistently.) Second, a lengthened period raises bad debts and collections costs on the *whole* sales base if the new terms apply to everyone, not only on the incremental sales.

**Example 17.2 – Loosening credit terms.** A fictional distributor, Pacific Fastener, has annual credit sales of $24.0 million, variable cost 70 percent of sales (contribution margin 30 percent), average collection period 30 days, bad debts 1 percent of sales, and a required return on receivables investment of 9 percent. Management proposes extending terms so that the average collection period lengthens to 45 days; sales are expected to rise 8 percent, and bad debts to rise to 2 percent of (all) sales.

*Step 1: new sales.* 24.0 × 1.08 = $25.92 million; incremental sales $1.92 million.

*Step 2: incremental contribution.* 1.92 × 0.30 = $0.576 million = $576,000.

*Step 3: receivables investment at variable cost.*
Current: (24,000,000 / 365) × 30 × 0.70 = 65,753.42 × 30 × 0.70 = $1,380,822.
Proposed: (25,920,000 / 365) × 45 × 0.70 = 71,013.70 × 45 × 0.70 = $2,236,932.
Increase: $856,110.

*Step 4: carrying cost.* 856,110 × 0.09 = $77,050.

*Step 5: incremental bad debts.* Proposed: 25,920,000 × 0.02 = $518,400. Current: 24,000,000 × 0.01 = $240,000. Increase: $278,400.

*Step 6: net.* 576,000 − 77,050 − 278,400 = **$220,550 per year**. The policy adds value under these assumptions.

*Sensitivity.* The result is dominated by the bad-debt assumption and the sales response. If sales rose only 4 percent (incremental contribution 0.04 × 24,000,000 × 0.30 = $288,000), bad debts at 2 percent of 24,960,000 would be $499,200, an increase of $259,200; the receivables investment would be (24,960,000 / 365) × 45 × 0.70 = $2,154,082, an increase of $773,260 and a carrying cost of $69,593. The net would be 288,000 − 259,200 − 69,593 = −$40,793: negative. Managers should therefore ask, before approving looser terms, *which* customers will be attracted, what their default experience is, and whether competitors will simply match.

### 17.3.3 Cash discounts and the cost of trade credit

When a supplier offers "2/10 net 30", the buyer who skips the discount is, in effect, borrowing the invoice amount less the discount for 20 extra days (day 10 to day 30) and paying 2 percent of the discounted price for the privilege. For every $98 of effective borrowing, the buyer pays $2 after 20 days. The periodic rate is 2/98 = 2.04 percent. There are 365/20 = 18.25 such periods in a year.

```
Simple annualized cost = [d / (1 − d)] × [365 / (credit period − discount period)]
Effective annual rate   = (1 + d / (1 − d))^(365 / (credit period − discount period)) − 1
```

where d is the discount fraction.

**Example 17.3 – The price of forgoing a discount.** Terms are 2/10 net 30.

*Step 1: periodic rate.* 0.02 / 0.98 = 0.020408.
*Step 2: periods per year.* 365 / (30 − 10) = 18.25.
*Step 3: simple annual cost.* 0.020408 × 18.25 = 37.2 percent.
*Step 4: effective annual rate.* (1.020408)^18.25 − 1 = e^(18.25 × ln 1.020408) − 1 = e^(18.25 × 0.020203) − 1 = e^0.36871 − 1 = 0.4459, or **44.6 percent**.

A buyer who can borrow from a bank at 8 percent should therefore pay on day 10 and take the discount. Stretching payment to day 60 changes the arithmetic: the cost becomes (0.020408 × 365/50) = 14.9 percent simple (15.9 percent effective), still above bank debt but far lower. However, stretching payables (stacking) beyond stated terms may incur late fees, loss of supplier goodwill, credit-rating effects, and supply interruptions; those hidden costs are not in the formula.

**Table 17.2 – Implicit annual cost of forgoing cash discounts.**

| Terms | Discount period (days) | Net period (days) | Simple annual cost | Effective annual rate |
|---|---|---|---|---|
| 1/10 net 30 | 10 | 30 | 18.4% | 20.1% |
| 2/10 net 30 | 10 | 30 | 37.2% | 44.6% |
| 2/10 net 45 | 10 | 45 | 21.3% | 23.5% |
| 3/10 net 60 | 10 | 60 | 22.6% | 24.9% |
| 1/15 net 30 | 15 | 30 | 24.6% | 27.7% |

The pattern is that a large discount over a short extra period produces an extreme rate. A seller offering such a discount is essentially paying a very high price for early cash; it should compare that to its own cost of capital.

### 17.3.4 Monitoring: aging, DSO, and the weighted average

DSO is a blunt instrument because it mixes growth effects and payment behavior. An **aging schedule** classifies receivables by days outstanding (current, 1-30 past due, 31-60, and so on). Two portfolios with the same DSO can have very different risk: one with all customers paying at day 45, the other with most paying at day 30 and a tail beyond 120 days. The tail is where losses live. Companies should also track the **collection effectiveness index**, the percentage of collectible receivables actually collected in a period, and **average days delinquent**, the gap between the average collection period and the average terms. Provisioning (expected-loss allowances) should respond to aging buckets and historical loss rates by bucket.

### 17.3.5 Tools for managing receivables

- *Credit insurance* transfers customer-default risk to an insurer in exchange for a premium, often 0.1 to 0.5 percent of insured sales, and can allow cheaper borrowing against the receivables.
- *Factoring* is the sale of receivables to a finance company. In *non-recourse* factoring the factor bears default risk; in *recourse* factoring the seller retains it. The factor typically advances 70 to 90 percent immediately and pays the remainder, less fees, on collection.
- *Securitization* pools receivables in a special-purpose vehicle that issues notes; it is available only to firms with large, homogeneous, well-documented receivable books.
- *Electronic invoicing and dynamic discounting* shorten the lag between invoice and payment and create the option of discounts at variable rates tied to how early the buyer pays.

## 17.4 Inventory Management

### 17.4.1 The role and costs of inventory

Inventory serves transaction, precautionary, and speculative purposes: it decouples production from sales, buffers against supply or demand variability, and sometimes captures expected price rises or volume discounts. Its costs fall in three groups.

- **Carrying (holding) costs**: capital cost on funds invested, storage, insurance, handling, spoilage, obsolescence, and shrinkage. In practice, 15 to 30 percent of inventory value per year is common, much of which is not the interest rate but obsolescence and storage.
- **Ordering (setup) costs**: placing orders, receiving, inspection, or production changeover costs; fixed per order and independent of order size.
- **Stock-out costs**: lost sales, expediting, line stoppages, and customer attrition.

The art of inventory management is balancing these. Carrying cost rises with order size; ordering cost per year falls with order size.

### 17.4.2 The economic order quantity

Suppose annual demand D is steady, each order costs S, and holding one unit for a year costs H. If the firm orders Q units at a time and consumption is smooth, the average inventory is Q/2. Total annual cost is

```
TC(Q) = (D / Q) × S + (Q / 2) × H
```

Minimizing with respect to Q (the first derivative −DS/Q² + H/2 = 0) gives the **EOQ** model due to Harris and later Wilson:

```
Q* = √(2 D S / H)
```

At the optimum the ordering cost equals the carrying cost, and the total is TC* = √(2 D S H). The curve is flat near the optimum: ordering 30 percent more or less than Q* raises cost by only about 4 to 5 percent, so approximate answers are acceptable.

**Example 17.4 – EOQ, reorder point, and safety stock.** A fictional retailer, Lakeview Hardware, sells 48,000 units of a fastener kit per year. Each order costs $150 to place and receive. Holding a unit costs $6 per year. Lead time is 6 days; average daily demand is 48,000 / 365 = 131.5 units; daily demand has a standard deviation of 40 units; the firm wants a 95 percent cycle service level (z = 1.65).

*Step 1: EOQ.* Q* = √(2 × 48,000 × 150 / 6) = √(2,400,000) = 1,549 units.

*Step 2: orders per year.* 48,000 / 1,549 = 31.0 orders.

*Step 3: costs at the optimum.* Ordering: 31.0 × 150 = $4,648. Carrying: (1,549 / 2) × 6 = $4,648. Total: **$9,295**.

*Step 4: compare with ordering 2,000 at a time.* Ordering: (48,000 / 2,000) × 150 = $3,600; carrying: 1,000 × 6 = $6,000; total $9,600, which is $305 (3.3 percent) above the optimum.

*Step 5: reorder point without safety stock.* Demand during lead time = 131.5 × 6 = 789 units.

*Step 6: safety stock.* Standard deviation of lead-time demand = 40 × √6 = 98.0; safety stock = 1.65 × 98.0 = 162 units. (The product 1.65 × 40 × √6 = 161.7.)

*Step 7: reorder point.* 789 + 162 = **951 units**.

**Table 17.3 – Total annual cost at different order sizes (Example 17.4).**

| Order quantity | Orders per year | Ordering cost | Carrying cost | Total cost |
|---|---|---|---|---|
| 500 | 96.0 | $14,400 | $1,500 | $15,900 |
| 1,000 | 48.0 | $7,200 | $3,000 | $10,200 |
| 1,549 (EOQ) | 31.0 | $4,648 | $4,647 | $9,295 |
| 2,000 | 24.0 | $3,600 | $6,000 | $9,600 |
| 3,000 | 16.0 | $2,400 | $9,000 | $11,400 |

(Small rounding differences arise because Q = 1,549 is rounded from 1,549.19.)

### 17.4.3 Beyond the EOQ

The EOQ's assumptions of constant demand, instantaneous replenishment, and constant costs are rarely true, but the model's logic is robust. Extensions include quantity discounts (compare total cost including purchase price at each discount break), finite production rates (economic production quantity), and stochastic demand (the safety stock term above, or periodic-review base-stock policies). Modern practice adds several ideas.

- **ABC analysis.** Classify items by annual value: perhaps 20 percent of items account for 80 percent of dollar usage. Apply tight control and frequent review to class A, simple rules to class C.
- **Just-in-time (JIT) and lean.** Reduce setup costs S toward zero and the EOQ shrinks toward continuous flow. JIT is thus not a repudiation of EOQ logic but a campaign to change its parameters. The cost is vulnerability: low buffers magnify the effect of supplier or logistics disruption, so firms increasingly hold "just-in-case" strategic reserves for critical components.
- **Vendor-managed inventory and consignment.** The supplier holds the stock at the customer's site and is paid on usage; inventory financing shifts to the supplier, which will price accordingly.
- **Postponement and demand forecasting.** Delaying product differentiation until orders are known (generic frames painted at the end) lets safety stock be held on fewer items and reduces the total inventory needed for a given service level, a result linked to risk pooling: the standard deviation of aggregated demand grows more slowly than the sum of individual deviations.

### 17.4.4 Inventory and financial reporting

Costing method (FIFO, weighted average; LIFO is not allowed under IFRS) affects reported margins and, in inflationary periods, the apparent turnover. Inventories are carried at the lower of cost and net realizable value, so write-downs recognize obsolescence only after it has occurred; managers should therefore watch physical indicators (slow-moving stock, aging by receipt date) before the accounting catches up. Inventory turnover (COGS / average inventory) is the standard ratio, but when comparing across firms ensure that cost definitions match.

## 17.5 Cash Management

### 17.5.1 Why firms hold cash

Keynes identified the transactions, precautionary, and speculative motives for holding money. For a firm, a fourth reason is compensating banks for services. The cost of holding cash is the return forgone on the best alternative use, either the yield on short-term securities or, for a borrowing firm, the interest rate on the revolver. Against this, the benefits are the avoidance of transaction costs of converting securities, the ability to meet payments on time, and resilience to shocks. Large corporate cash balances at some firms also reflect tax and repatriation frictions and the option value of being able to invest when others cannot; in this chapter we focus on operational cash.

### 17.5.2 Float and the collection-disbursement system

**Float** is the time cash is in transit between payer and payee. *Collection float* is the delay between a customer's payment and the firm's use of the funds (mail, processing, and clearing). *Disbursement float* is the delay between a firm's issuing a payment and its funds leaving the bank account. Firms want to shrink collection float and, within ethical and contractual limits, preserve disbursement float. Float is worth money: if a firm receives $2 million a day and can accelerate availability by 2 days, it frees $4 million, which at 5 percent is worth $200,000 per year.

Practical tools include:

- **Lockboxes**: customers pay to a post-office box near them, and the bank empties it several times a day. With the shift to electronic payments, "virtual lockboxes" and remittance-data capture serve the same purpose.
- **Electronic funds transfer, direct debit, and card acquiring**: collection in a day or less, with fees to compare against float savings.
- **Concentration banking and cash pooling**: balances in many local accounts are swept to a central account daily. *Physical pooling* moves cash; *notional pooling* offsets balances for interest purposes without moving them, subject to local rules. Pooling reduces the total precautionary balance, because shortages and surpluses in different units offset one another.
- **Controlled disbursement and zero-balance accounts**: the bank tells the firm each morning how much will be presented, and the firm funds only that amount; subsidiary payments draw on a master account.
- **Payables automation**: scheduling payments to land on the due date, not before.

A principal governance rule: separate the duties of authorizing, executing, recording, and reconciling payments; require dual control on payment instructions; and verify any change of beneficiary account details by an independent call-back, because payment-redirection fraud is among the most common corporate losses.

### 17.5.3 The Baumol model

William Baumol (1952) borrowed the inventory logic of the EOQ for cash. Imagine a firm with steady net cash needs T per period. It holds cash C, and when it runs out, sells C of securities at a fixed cost F per transaction. Securities yield i per period. Average cash is C/2 and number of transactions is T/C:

```
Total cost = (T / C) × F + (C / 2) × i
Optimal C* = √(2 F T / i)
```

**Example 17.5 – Baumol and Miller-Orr targets.** A fictional company, Redwood Packaging, uses $3.0 million of cash per year in a smooth pattern. Each securities sale costs $50. The yield on securities is 5 percent per year.

*Baumol.*
C* = √(2 × 50 × 3,000,000 / 0.05) = √(6,000,000,000) = **$77,460** per replenishment.
Transactions per year = 3,000,000 / 77,460 = 38.7.
Transaction cost = 38.7 × 50 = $1,936; opportunity cost = (77,460 / 2) × 0.05 = $1,936. Total **$3,873** per year.
If the firm instead replenished with $100,000: transaction cost 30 × 50 = $1,500; opportunity cost 50,000 × 0.05 = $2,500; total $4,000, a mere 3 percent more: again the flat bottom of the cost curve.

The Baumol model assumes predictable, steady outflows; cash flows are usually erratic.

### 17.5.4 The Miller-Orr model

Merton Miller and Daniel Orr (1966) treated daily net cash flows as a random walk with standard deviation σ per day, and proposed a **control-limit policy**. Set a lower limit L (determined by management as the minimum safety balance), a return point, and an upper limit. While the balance wanders between the limits do nothing. When it touches the upper limit, buy securities to bring the balance back to the return point; when it touches L, sell securities to return to the return point. The optimum spread is

```
z = [ 3 F σ² / (4 i) ]^(1/3)        (spread from L to return point)
Return point R = L + z
Upper limit  U = L + 3z
Average balance ≈ L + 4z / 3
```

where i is the *daily* opportunity rate. Intuition: the spread widens with transaction cost F and volatility σ², and narrows with the interest rate i. Notice that the return point is one-third of the way up the band: the upper limit is 2z above the return point but the lower limit only z below it. The asymmetry arises because idle cash earns nothing while a shortage is handled by a single, costly sale of securities, so the optimal policy sits closer to the floor and tolerates more room above.

**Example 17.5 (continued) – Miller-Orr.** Redwood also keeps a separate operating account. The standard deviation of daily net flows is $2,000; transaction cost F = $50; annual securities yield is 6 percent so i = 0.06 / 365 = 0.00016438 per day; management sets L = $10,000.

*Step 1.* 3 F σ² = 3 × 50 × 2,000² = 3 × 50 × 4,000,000 = 600,000,000.
*Step 2.* 4 i = 4 × 0.00016438 = 0.00065753.
*Step 3.* Ratio = 600,000,000 / 0.00065753 = 9.1250 × 10¹¹, and its cube root is z ≈ **$9,699**.
*Step 4.* Return point = 10,000 + 9,699 = **$19,699**; upper limit = 10,000 + 3 × 9,699 = **$39,098**.
*Step 5.* Average balance = 10,000 + (4 × 9,699)/3 = $22,933.

When the balance rises to $39,098, buy $19,399 of securities (to bring it back to $19,699); when it falls to $10,000, sell $9,699 of securities.

Both models show the right structure of the problem even if the numbers are rough. Real treasuries use forecasts, sweep accounts and automatic overnight investing, which lowers F nearly to zero and the optimum balances with it. Today the relevant frictions are credit-line fees, minimum operating balances, and concentration limits, not brokerage commissions.

### 17.5.5 Short-term investment of surplus cash

Surplus cash should be invested under a written policy that ranks **safety, liquidity, and yield**, in that order. Eligible instruments typically include government bills, bank time deposits, high-quality commercial paper, repurchase agreements, and money-market funds. Key risks are credit (a money-market instrument can default), liquidity (a fund may gate redemptions in stress), and reinvestment. Maturity should be matched to forecasted needs, with concentration limits by issuer and counterparty rating triggers. Counterparty exposure to a single bank deserves particular attention in a crisis.

## 17.6 Short-Term Financing

### 17.6.1 Sources

**Trade credit** (already discussed) is the largest source of short-term financing for many firms, but is "free" only when the discount is taken or the terms are honored without penalty.

**Accruals** (wages, taxes, and interest owed but unpaid) are a spontaneous, no-explicit-cost source but cannot be managed beyond their natural cycle.

**Bank lines of credit.** An *uncommitted* line is an informal arrangement that the bank may withdraw. A *committed* revolving credit facility obliges the bank to lend up to the limit for a term (commonly one to five years), in exchange for a *commitment fee* on the unused portion and financial covenants (leverage, interest cover). Pricing is usually a floating reference rate plus a margin that may depend on the firm's credit rating or leverage ratio. A **clean-up** requirement obliges the firm to be out of debt on the line for a specified period each year, ensuring that it is used for seasonal rather than permanent needs.

**Term loans** have a fixed amortization schedule and maturity; they suit financing of permanent working capital or capital assets.

**Commercial paper (CP)** is unsecured short-term (up to 270 days in the United States, or up to a year in other markets) debt issued by large, highly rated borrowers at a discount. CP is generally cheaper than bank borrowing, but needs a backup liquidity line since the market can close, and so the bank line's commitment fee is part of CP's true cost.

**Secured financing and asset-based lending.** Receivables or inventory are pledged as collateral; the lender advances a percentage (the *advance rate*, typically 70 to 85 percent of eligible receivables and a lower fraction of inventory) and monitors collateral through field exams and borrowing-base certificates. Costs are higher than for unsecured lending, but availability is greater for weaker credits.

**Factoring and invoice discounting.** Discussed in section 17.3: the receivable is sold or financed, with or without notice to customers.

### 17.6.2 Computing effective borrowing costs

The stated rate seldom equals the real cost. Four adjustments recur.

1. **Discount interest**: interest is deducted in advance, so the borrower gets less than the face amount.
2. **Compensating balances**: the bank requires a share of the loan to be kept on deposit at low or zero interest, so the usable amount is smaller.
3. **Commitment and facility fees**: charged on unused or total commitment.
4. **Compounding**: more frequent compounding raises the effective annual rate.

**Example 17.6 – The true cost of bank financing.** Three alternatives are available to Redwood Packaging, which needs $400,000 of usable cash for one year (all amounts are illustrative).

*Alternative A, discount loan at 8%.* Interest at 8 percent is deducted in advance. Take a $1,000,000 face amount as a reference. Proceeds = 1,000,000 × (1 − 0.08) = $920,000; interest $80,000. Effective rate = 80,000 / 920,000 = 8.70 percent (equivalently 0.08 / 0.92). Scaling for the $400,000 need: face = 400,000 / 0.92 = $434,783.

*Alternative B, 7% loan with 10% compensating balance.* The firm must borrow B such that B × (1 − 0.10) = $400,000, so B = $444,444. Interest = 0.07 × 444,444 = $31,111. Effective rate = 31,111 / 400,000 = 7.78 percent (equivalently 0.07 / 0.90).

*Alternative C, committed line of $5 million at 6.5 percent with a 0.40% fee on the unused portion; the firm expects an average drawn balance of $2.0 million.* Interest on drawn: 2,000,000 × 0.065 = $130,000. Fee on unused: 3,000,000 × 0.004 = $12,000. Total cost = $142,000 on an average usage of $2.0 million = **7.10 percent**. If the firm were to use only $1.0 million on average, the cost would be (65,000 + 16,000)/1,000,000 = 8.10 percent: the fee is a fixed price of liquidity insurance, so the cost per dollar borrowed rises as utilization falls.

Ranking by cost: C (7.10 percent, at expected usage) is cheapest for borrowing, B (7.78) is next, A (8.70) is highest; but the line gives flexibility and does not require a full year of borrowing, and a short-term loan must be priced against exact days needed. Where interest is quoted on a 360-day basis for a 365-day year the effective rate is further increased by 365/360, roughly 1.4 percent of the rate itself.

**Common mistake.** Comparing quoted rates without adjusting for fees, balances, day counts, and the timing of cash. The correct comparison is always the effective annual cost (or the IRR of the cash flows) per dollar of *usable* funds.

### 17.6.3 Choosing among sources

Financial managers weigh: (1) cost; (2) availability, including backup if one source closes; (3) flexibility, i.e., the ability to prepay or reborrow; (4) covenants and security demanded; (5) timing and administration; (6) relationship value, since banks that provide credit expect ancillary business. Unused capacity under one facility reduces the risk of drawing another in a bad month. A diversified funding stack with staggered maturities, a mix of bank and market sources, and committed backup beyond the expected peak is the hallmark of mature treasury practice.

## 17.7 Cash Budgeting and Short-Term Financial Planning

### 17.7.1 Purpose and structure

The **cash budget** is a forecast of cash receipts and disbursements, by period, that reveals when the firm will have surpluses to invest and shortfalls to finance. It is distinct from the income statement because it follows cash timing, not accrual. Its steps are:

1. Forecast sales (the driver) and convert them to **cash collections** using the historical collection pattern.
2. Forecast **disbursements**: purchases (with payment lag), wages, overheads, interest, taxes, dividends, and capital expenditures.
3. Compute **net cash flow** for each period and add it to opening cash to get cash before financing.
4. Compare with the **minimum desired cash balance**; the difference is the borrowing needed (or surplus available).
5. Roll the loan balance and interest forward, since borrowing in one month creates interest in the next.

The planning horizon depends on use: 13 weeks for tight liquidity control, 12 months for seasonal planning, and a three-to-five-year financial plan for strategy. Cash budgets should be rolling: update monthly (or weekly) and extend the horizon by one period.

### 17.7.2 A worked cash budget

**Example 17.7 – Six-month cash budget with a revolving line.** A fictional seasonal company, Summit Garden Supply, has the following sales forecast (in $ thousands): November (actual) 400; December (actual) 450; January 300; February 350; March 500; April 600; May 700; June 650.

*Collections pattern*: 20 percent of sales are collected in the month of sale, 50 percent in the next month, 28 percent in the second month after sale, and 2 percent are never collected (bad debts).

*Disbursements*: purchases each month equal 60 percent of that month's sales and are paid in the same month (a simplification of a one-month lead and lag); wages 12 percent of sales; fixed overhead $40 thousand per month; interest on term debt $6 thousand per month; a tax payment of $60 thousand in March; capital expenditure of $150 thousand in April; and a dividend of $40 thousand in June.

*Financing*: opening cash on 1 January is $80 thousand; the minimum cash balance is $50 thousand; shortfalls are met by drawing on a revolving line charging 8 percent per year (0.667 percent per month), with interest paid on the opening line balance each month and surplus cash used to repay the line first.

*Step 1: collections.*
- January: 0.20 × 300 + 0.50 × 450 + 0.28 × 400 = 60 + 225 + 112 = 397.
- February: 0.20 × 350 + 0.50 × 300 + 0.28 × 450 = 70 + 150 + 126 = 346.
- March: 0.20 × 500 + 0.50 × 350 + 0.28 × 300 = 100 + 175 + 84 = 359.
- April: 0.20 × 600 + 0.50 × 500 + 0.28 × 350 = 120 + 250 + 98 = 468.
- May: 0.20 × 700 + 0.50 × 600 + 0.28 × 500 = 140 + 300 + 140 = 580.
- June: 0.20 × 650 + 0.50 × 700 + 0.28 × 600 = 130 + 350 + 168 = 648.

*Step 2: disbursements.* January purchases 0.60 × 300 = 180, wages 0.12 × 300 = 36, overhead 40, term interest 6, total 262, and likewise for each month, with the one-off items added.

*Step 3: the budget (in $ thousands).*

| | Jan | Feb | Mar | Apr | May | Jun |
|---|---|---|---|---|---|---|
| Sales | 300 | 350 | 500 | 600 | 700 | 650 |
| Collections | 397.0 | 346.0 | 359.0 | 468.0 | 580.0 | 648.0 |
| Purchases | 180.0 | 210.0 | 300.0 | 360.0 | 420.0 | 390.0 |
| Wages | 36.0 | 42.0 | 60.0 | 72.0 | 84.0 | 78.0 |
| Overhead + term interest | 46.0 | 46.0 | 46.0 | 46.0 | 46.0 | 46.0 |
| Tax / capex / dividend | 0 | 0 | 60.0 | 150.0 | 0 | 40.0 |
| Interest on line | 0 | 0 | 0 | 0 | 0.36 | 0.16 |
| Total disbursements | 262.0 | 298.0 | 466.0 | 628.0 | 550.36 | 554.16 |
| Net cash flow | 135.0 | 48.0 | −107.0 | −160.0 | 29.64 | 93.84 |
| Opening cash | 80.0 | 215.0 | 263.0 | 156.0 | 50.0 | 50.0 |
| Cash before financing | 215.0 | 263.0 | 156.0 | −4.0 | 79.64 | 143.84 |
| Line draw / (repayment) | 0 | 0 | 0 | 54.0 | (29.64) | (24.36) |
| Line balance (end) | 0 | 0 | 0 | 54.0 | 24.36 | 0 |
| Ending cash | 215.0 | 263.0 | 156.0 | 50.0 | 50.0 | 119.48 |

*Step 4: reading the result.* Cash is ample in the winter because the large December collections arrive while spending is low. The squeeze comes in April when the capital expenditure and the pre-season purchasing build coincide with collections that lag the sales surge: cash before financing is −$4 thousand against a $50 thousand minimum, so the firm must draw **$54 thousand**, the peak borrowing. Interest in May is 54 × 0.08 / 12 = $0.36 thousand, and in June 24.36 × 0.08 / 12 = $0.16 thousand. By June the line is repaid. Ending cash of $119.48 thousand could fund the next dividend, an early repayment of term debt, or inventory prebuying.

*Step 5: managerial uses.* The peak requirement of $54 thousand is small here, but the firm should arrange a committed line of perhaps $100 to $120 thousand to cover forecast error. A simple stress test: suppose sales are 15 percent below forecast or the 50 percent collection bucket slips by a month; recompute and see whether the line limit and covenants hold. A cash budget is only as good as the collection assumptions; monitor actual versus budget and revise the percentages.

### 17.7.3 The percentage-of-sales and the sustainable-growth links

For longer horizons the cash budget gives way to pro forma statements. The simplest approach scales items that vary with sales (receivables, inventory, payables) as a percentage of sales and treats the rest as fixed, with external financing needed (EFN) as the balancing item: EFN = Required assets increase − spontaneous liability increase − retained earnings. A firm may be profitable but grow faster than its **sustainable growth rate** (ROE × retention, in simple form) and so require outside funds. The CCC tells why: each additional dollar of sales needs about (CCC/365) of financing per dollar of daily cost base. Reducing the cycle therefore raises the growth that internal funds can support.

### 17.7.4 Short-term forecasting and risk

Forecasts should carry ranges, not points. Techniques include scenario analysis, simulation of collection delays, and variance analysis of actual versus forecast flows. For firms with foreign-currency flows, add a currency layer to the budget and decide whether to hedge forecast exposures. Key controls are a single source of truth for the forecast, assigned accountability for each cash flow line, and a monthly post-mortem of forecast errors, which tend to be systematically biased (usually optimistic on collections and conservative on payments).

## 17.8 Supply Chain Finance

### 17.8.1 What it is

**Supply chain finance (SCF)**, also called reverse factoring or approved-payables financing, is a buyer-led program in which a bank or fintech platform pays suppliers' approved invoices early, at a discount priced off the *buyer's* credit risk, and the buyer pays the financier on the original (or an extended) due date. The mechanics are:

1. The supplier delivers and invoices; the buyer approves the invoice, which is thereby an irrevocable payment obligation due on day T.
2. The platform offers the supplier early payment at day t < T, at a discount: Invoice × (1 − r × (T − t)/360), where r is a reference rate plus a margin reflecting the buyer's credit.
3. The supplier chooses invoice by invoice whether to accept early payment.
4. On day T, the buyer pays the financier the full invoice.

Because the buyer is typically a larger and better-rated entity than the supplier, r is lower than the supplier could obtain on its own, especially for small suppliers in emerging markets. A related product, **dynamic discounting**, has the buyer itself use its surplus cash to pay early for a sliding-scale discount.

### 17.8.2 Who gains

- **Supplier**: cheaper liquidity, earlier cash, reduced collection risk, and easier forecasting.
- **Buyer**: the supplier's relationship is stabilized; and, importantly, the buyer can use the program to *negotiate longer payment terms* (say from 45 to 75 days) without suppliers bearing the full cost, because suppliers can still obtain early cash from the platform. The extension of DPO is a working capital release.
- **Financier**: fee and interest income on a short-term, low-risk asset (exposure to the buyer's credit), with potential data and cross-selling benefits.

**Example 17.8 – Extending payment terms with supply chain finance.** A fictional manufacturer, Brightwave Appliances, purchases $360 million of materials a year. It currently pays in 45 days. Its sourcing team announces new terms of 75 days, accompanied by an SCF program offered by its bank at a rate of 5.5 percent per year (360-day basis) to its suppliers.

*Buyer's benefit.* Payables rise by 30 days of purchases: 360,000,000 / 365 × 30 = 986,301 × 30 = **$29.59 million** of cash released. If Brightwave's alternative cost of short-term funds is 7 percent, the annual value is 0.07 × 29.59 = **$2.07 million**. (If the funds retire revolver borrowings, they reduce interest paid; if held, they increase cash balances. Either way, liquidity improves.)

*Supplier's economics, one invoice.* A supplier has a $1,000,000 invoice due on day 75. If it waits, it must carry the receivable for 75 days and fund itself at 11 percent per year (its own bank borrowing cost). Under SCF, it requests payment on day 15, 60 days early.

Discount at 5.5 percent: 1,000,000 × 0.055 × 60 / 360 = $9,166.67. Proceeds = $990,833.33.
Supplier's own financing cost for the same 60 days: 1,000,000 × 0.11 × 60 / 360 = $18,333.33.
Saving to the supplier relative to its own borrowing = **$9,166.67** per invoice.

Under the old terms the supplier was paid on day 45. Under the new terms it receives $990,833 on day 15, which is 30 days *sooner* than before, at an annual cost of 5.5 percent. A supplier that previously financed itself at 11 percent is therefore better off, not worse, even though the buyer's contractual date moved from 45 to 75 days. The program transfers the buyer's cheaper credit to the supplier, while the buyer captures the 30-day extension.

*What to check.* The supplier is better off only if (a) the SCF rate is below its own borrowing cost, (b) it is not forced to accept long terms with no real alternative, and (c) the program's availability is reliable. If the buyer's credit deteriorates, the facility may be withdrawn, and the supplier suddenly holds a 75-day receivable.

### 17.8.3 Risks, accounting, and disclosure

SCF is not free money, and several high-profile corporate failures in recent years involved opaque payables financing. The issues are:

- **Classification.** If a payable extended through a program loses its trade character, it may look like bank debt, and rating agencies may reclassify it as financial debt. Accounting standards now require disclosure of supplier finance arrangements (their terms, the carrying amount of liabilities in them, and the range of payment due dates versus comparable payables), so investors can see the dependence. IFRS requires such disclosure under amendments to IAS 7 and IFRS 7.
- **Concentration and refinancing risk.** The buyer's liquidity may rely on suppliers' acceptance of terms that depend on the program's continuing; a withdrawal creates a sudden demand for cash.
- **Supplier dependence.** If the supplier uses SCF as its main financing, it faces a cliff if the buyer's credit or the program changes.
- **Ethics and legal.** Payment-term extension should not squeeze small suppliers; several jurisdictions limit payment terms or require reporting of payment practices.

A sound policy is to use SCF to improve supply-chain stability, to evaluate extended terms as a price negotiation (the supplier will often reflect any financing cost in the invoice price), and to disclose the program fully.

### 17.8.4 Other supply-chain and trade finance tools

*Inventory finance* (warehouse receipts), *letters of credit* and documentary collections for cross-border sales, *forfaiting* of export receivables, and *pre-shipment finance* for suppliers. They shift risk from one party to another and are priced according to the party who bears the risk. The central lesson: **a working capital improvement is genuine only if it creates value (lower total system cost of capital or friction) rather than merely shifting funding costs to a weaker party who will price them back.**

## Case Study

*Illustrative case: Alder Valley Foods is a fictional company.*

Alder Valley Foods is a regional manufacturer of frozen vegetable products with annual sales of $280 million, cost of goods sold of $196 million, and a loyal customer base among grocery chains. Over the last two years the company has grown at 14 percent annually after winning private-label contracts from three supermarket groups. The chief financial officer, Daniel Reyes, has just received the third-quarter treasury report with two uncomfortable findings: the revolving credit facility, a committed $45 million line, was 92 percent drawn at the seasonal peak in September, and the bank has indicated that its covenant on net debt to EBITDA, currently at 3.1 times against a limit of 3.5 times, will be tested more strictly at the next renewal.

*Where the cash went.* Reyes asks the controller, Mei Lin Zhou, for a working capital diagnostic. She finds that receivables have risen from 36 days of sales to 47 days: the private-label contracts carry 60-day terms, and the three groups now account for 38 percent of sales. Inventory has risen from 52 to 64 days of cost of goods sold, in part because the company holds finished stock for peak summer demand and in part because it now manufactures 140 SKUs against 85 two years ago, including many low-volume private-label variants. Payables have shrunk slightly from 38 to 35 days, since the purchasing manager, Kofi Mensah, has been paying small growers early to protect supply of the harvest crop. Zhou estimates that, relative to two years ago, working capital absorbs about $16.5 million more cash than it would have at the earlier days ratios.

*Options on the table.* The sales director, Priya Nair, argues that the private-label business is strategic and its terms cannot be reopened: the supermarket groups might simply move to a competitor. She suggests instead that the company factor the receivables from those three customers, which would cost about 1.2 percent of invoice value for a 60-day average advance. The operations head, Tomasz Wrona, proposes SKU rationalization, which he estimates would cut inventory by eight days but reduce sales by about $6 million with contribution margin of 28 percent. Mensah suggests that the company could join the largest customer's supply chain finance program: the customer is rated investment grade and has just announced that it will offer suppliers early payment at a spread of 90 basis points over the reference rate, which is currently 4.5 percent. The program would not change Alder Valley's terms but would give it cash on day 5 after invoice approval instead of day 60.

*Constraints.* The grower payment issue is delicate: growers are small, depend on prompt payment, and are few in number in the region. Mensah says that at least a dozen growers would walk away if payment extended past 30 days. The covenant leaves little room for additional drawn debt, but factored receivables, if treated as true sales, would not count as debt. Reyes recalls that rating analysts and auditors might look through arrangements designed solely to circumvent the covenant. He also notes that the company's equity owners want a $12 million expansion of the cold-storage facility, which would require financing from the same line.

*The decision.* Reyes has asked for a recommendation to the board that addresses the next twelve months. He wants an estimate of the cash that each lever could release, its annual cost, its effect on liquidity and covenants, the operational risks, and an explanation of how to track progress. He also wants a proposed target for the cash conversion cycle and a plan for monitoring it, because he does not want to find himself in the same position next year.

**Discussion questions**

1. Calculate Alder Valley's current DSO, DIO, DPO, and cash conversion cycle using the data above (assuming the stated days are current), and the cycle two years ago. Verify Zhou's estimate of $16.5 million of added working capital to within a reasonable approximation, noting any differences in how receivables and inventory are valued.
2. Compare the annualized cost of factoring (1.2 percent for 60 days) with the supply chain finance offer (reference rate plus 90 basis points). For which customers could each be used, and what does the comparison imply for how the company should negotiate its terms?
3. Evaluate Wrona's SKU rationalization: estimate the cash released from eight days of inventory, the lost contribution from a $6 million sales reduction, and the break-even carrying cost. What non-financial considerations might alter the decision?
4. Prepare the recommendation: which combination of levers would you present to the board, how would you treat the covenant and the disclosure obligations, how would you handle the growers, and what metrics and targets would you set to prevent a recurrence?

## Key Takeaways

- Profitable growth can still consume cash; the cash conversion cycle (DIO + DSO − DPO) measures the number of days of operations the firm must finance, and each day of improvement releases a calculable sum of cash.
- Receivable days are worth sales per day; inventory and payable days are worth cost of goods sold per day. Specify the base before converting days into dollars.
- Match the maturity of financing to the life of the assets: permanent working capital belongs on long-term funding, and seasonal peaks on committed short-term lines. Aggressive funding lowers expected cost but raises refinancing risk.
- Credit policy decisions are incremental-profit problems: added contribution margin, minus carrying cost on the added receivables investment, minus incremental bad debts on the whole affected sales base.
- Forgoing a cash discount is expensive borrowing: 2/10 net 30 costs about 37 percent simple and 44.6 percent effective annually, so the discount should almost always be taken unless the firm is truly credit-constrained.
- The EOQ, Q* = √(2DS/H), balances ordering and carrying cost; the cost curve is flat near the optimum, so precise inputs are less important than recognizing the trade-off. Safety stock addresses variability during lead time.
- The Baumol and Miller-Orr models give the structure of the cash-versus-securities decision; the Miller-Orr spread increases with transaction cost and volatility and decreases with the interest rate.
- Quoted loan rates mislead; discount interest, compensating balances, fees, and day-count conventions all raise the effective cost per dollar of usable funds, and commitment fees make a line's per-dollar cost rise as utilization falls.
- A cash budget links sales forecasts and collection patterns to the timing of financing needs. The peak cumulative shortfall, not the average, sizes the committed facilities; stress-test the collection assumptions.
- Supply chain finance can lower system financing costs by lending on the buyer's credit, but it can also hide leverage and concentrate refinancing risk; disclose and size it prudently.

## Review Questions

1. Distinguish between gross working capital, net working capital, and operating working capital. Why is the operating measure preferred in valuation and planning?
2. Explain the cash conversion cycle. Why does a negative cycle favor a firm, and what business models typically produce it?
3. Why is it incorrect to measure all three components of the cycle on the same base (sales)? What happens to the conversion of days into cash if you do so?
4. Describe the matching, aggressive, and conservative financing policies and the risks of each. In what circumstances might an aggressive policy be justified?
5. Describe the four levers of credit policy. How would you decide whether a firm should relax its credit standards?
6. Derive the cost of forgoing a 2/10 net 30 discount, and explain why the effective annual rate exceeds the simple annualized rate. What other considerations should limit stretching payables?
7. State the assumptions of the EOQ model and explain how just-in-time practices can be seen as an attack on its inputs rather than its logic.
8. What are the main sources of float and the tools used to manage it? Why does pooling reduce the total cash needed?
9. Compare the Baumol and Miller-Orr models in terms of assumptions and use. Why is the return point in Miller-Orr below the midpoint of the control band?
10. What is supply chain finance? Discuss how the benefits can be real and under what conditions it becomes a concern for investors and rating agencies.

## Problems

1. **Cash conversion cycle.** A firm reports annual credit sales of $900 million, cost of goods sold of $630 million, average receivables of $105 million, average inventory of $98 million, and average payables of $63 million. Compute DSO, DIO, DPO, and the cash conversion cycle (365-day year).
2. **Cost of trade credit.** Suppliers offer terms of 3/10 net 45. Compute the simple annualized cost and the effective annual rate of forgoing the discount. Should a firm that can borrow at 12 percent take the discount?
3. **EOQ.** Annual demand is 36,000 units, ordering cost is $80 per order, and holding cost is $4 per unit per year. Compute the EOQ, number of orders per year, and total annual ordering plus carrying cost.
4. **Baumol.** A company needs $1.2 million of cash per year at a steady rate, securities transactions cost $40 each, and the interest rate is 6 percent. Find the optimal transfer size and the number of transfers per year.
5. **Miller-Orr.** The standard deviation of daily net cash flow is $1,500, the transaction cost is $40, the annual interest rate is 7.3 percent (daily rate 0.02 percent), and the lower limit is $5,000. Compute the spread, the return point, and the upper limit.
6. **Discount loan.** A firm needs $400,000 of usable funds for one year and is offered a discount loan (interest deducted in advance) at 9 percent. Find the face amount, the dollar interest, and the effective annual rate.
7. **Credit tightening.** A firm has credit sales of $18.0 million, variable cost of 65 percent of sales, DSO of 60 days, and bad debts of 3 percent of sales. A tighter policy would reduce sales by 5 percent, DSO to 40 days, and bad debts to 1.5 percent of the new sales level. The required return on receivables is 10 percent. Compute the net annual benefit (investment in receivables measured at variable cost).
8. **Supply chain finance.** A buyer with $240 million of annual purchases extends its payment terms from 40 to 70 days. If its cost of short-term funds is 6 percent, compute the cash released and the annual saving.

### Answers to Selected Problems

1. DSO = 105 / 900 × 365 = 42.6 days; DIO = 98 / 630 × 365 = 56.8 days; DPO = 63 / 630 × 365 = 36.5 days; CCC = 42.6 + 56.8 − 36.5 = 62.9 days.
2. Periodic rate 3/97 = 3.093 percent; periods per year 365 / 35 = 10.43; simple cost = 32.3 percent; effective = (1.03093)^10.43 − 1 = 37.4 percent. Yes, take the discount (and borrow at 12 percent to do so).
3. EOQ = √(2 × 36,000 × 80 / 4) = √1,440,000 = 1,200 units; 30 orders per year; ordering 30 × 80 = $2,400; carrying 600 × 4 = $2,400; total $4,800.
4. C* = √(2 × 40 × 1,200,000 / 0.06) = √1,600,000,000 = $40,000; transfers per year = 1,200,000 / 40,000 = 30.
5. z = [3 × 40 × 1,500² / (4 × 0.0002)]^(1/3) = [270,000,000 / 0.0008]^(1/3) = (3.375 × 10¹¹)^(1/3) = $6,962 (the daily rate 7.3% / 365 is exactly 0.0002). Return point = 5,000 + 6,962 = $11,962; upper limit = 5,000 + 3 × 6,962 = $25,887.
6. Face = 400,000 / 0.91 = $439,560; interest = $39,560; effective rate = 0.09 / 0.91 = 9.89 percent.
7. New sales = $17.1 million. Receivables investment: before (18.0m / 365) × 60 × 0.65 = $1,923,288; after (17.1m / 365) × 40 × 0.65 = $1,218,082; reduction $705,205, saving 10 percent = $70,521. Bad debts: before 0.03 × 18.0m = $540,000; after 0.015 × 17.1m = $256,500; saving $283,500. Lost contribution: 0.9m × 0.35 = $315,000. Net = 70,521 + 283,500 − 315,000 = **+$39,021** per year; the tighter policy is marginally favorable.
8. Cash released = 240m / 365 × 30 = $19.73 million; annual saving = 0.06 × 19.73 = $1.18 million.
