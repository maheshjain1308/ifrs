# Chapter 9: Corporate Governance and Boards

## Learning Objectives

After studying this chapter you should be able to:

- Explain corporate governance as the system of rights, institutions, and incentives that addresses two distinct agency problems: manager versus shareholders, and controlling shareholder versus minority shareholders.
- Describe board structure, fiduciary duties, independence criteria, and the work of the audit, compensation, nominating/governance, and risk committees, and assess how well a given board is designed to monitor and advise.
- Compute voting power, cash-flow rights, and control wedges under cumulative voting, dual-class shares, and pyramid structures, and evaluate how much minority investors lose when a controller diverts value.
- Analyze takeover defenses, proxy contests, and activism using the economics of free-riding, and judge when a shareholder's stake justifies the cost of intervening.
- Compare governance systems across countries (outsider versus insider, one-tier versus two-tier boards, stakeholder orientation) and explain why one model cannot simply be transplanted to another legal and ownership setting.
- Design and interpret a board evaluation, and read the empirical evidence on governance and firm value critically, distinguishing correlation, selection, and causation.

## Opening Vignette

*Illustrative scenario; the company and people are fictional.*

Harborline Marine Systems makes navigation electronics and ship-board control software. It went public in 2009 and, seventeen years later, has a market capitalization of about $4.2 billion. Its founder and chair, Dagmar Ellison, is 71. She holds 100% of a special Class B share with ten votes per share and about 9% of the cash-flow rights; the public holds Class A shares with one vote each. The result is that Ellison controls roughly 50% of the votes, though she owns well under a tenth of the equity.

The board has eleven directors. Nine are labelled independent, but three of them have served for more than fifteen years, one is a retired partner of the firm's outside law firm, and one sits on the board of a company whose chief executive sits on Harborline's compensation committee. The chief executive, Marcus Oyelaran, was hired six years ago and is widely regarded as capable. Ellison, however, has begun to push for the acquisition of a yacht-electronics business owned by her late husband's family trust, at a price that Harborline's banker calls "full but defensible."

Institutional investors holding 38% of Class A shares have written to the lead independent director. They ask four questions. Who negotiates for Harborline against the family trust? Does the audit committee have a process for related-party transactions? What is the plan for succession when Ellison steps down? And will the board agree to a sunset clause that converts Class B shares into Class A shares after ten more years or on her death?

The lead director, Priya Raman, now faces a problem that no valuation model solves. The transaction might be good for Harborline. It might be a transfer of value to the family at the expense of Class A holders. The board's structure, independence, processes, and the incentives of the people in the room will determine which it is, and whether outside investors can ever tell the difference. This chapter develops the tools for thinking about exactly that situation.

## 9.1 Governance as an Agency Problem

### 9.1.1 Why governance exists

Volume 1 treated the firm as a nexus of decisions in which management maximizes value for shareholders. Corporate governance asks the harder question: *what makes managers actually do that?* Investors who supply capital cannot watch every decision, cannot write a contract that anticipates every contingency, and often cannot easily exit. The managers and controlling owners who run the firm have information, discretion, and interests of their own. Governance is the collection of legal rules, ownership structures, boards, contracts, markets, and norms that constrains the use of that discretion and channels it toward value creation.

The modern framing begins with Adolf Berle and Gardiner Means, who observed in the 1930s that dispersed ownership in large American corporations separated ownership from control. It was formalized by Michael Jensen and William Meckling, who defined agency costs as the sum of monitoring expenditures by the principal, bonding costs borne by the agent, and the residual loss that remains because interests are never perfectly aligned. Shleifer and Vishny's survey of corporate governance emphasized the other side of the story: the way in which suppliers of finance assure themselves of getting a return on their investment. Without such assurance, capital becomes expensive or unavailable, a point we return to when discussing cross-country evidence.

A useful decomposition of agency costs is the following.

```
Agency cost  =  monitoring cost  +  bonding cost  +  residual loss
Residual loss = value of the best feasible policy  -  value of the policy actually chosen
```

The residual loss is the economically important part. It includes overpriced acquisitions pursued for empire-building, capital projects maintained because they preserve jobs, dividends withheld to keep the firm's cash under management's control, and related-party transactions that move value to insiders. None of these appears as a line item in the financial statements.

### 9.1.2 Two agency problems, not one

Textbook discussions often assume dispersed shareholders and powerful managers: the *Type I* agency problem of Berle and Means. In much of the world, and in a sizeable minority of large U.S. firms, the dominant conflict is different. A controlling shareholder, such as a family, a state, or a parent company, has the votes to appoint the board and direct management. The conflict is between the controller and the *minority* shareholders: the *Type II* problem.

| Feature | Type I: Manager vs. dispersed owners | Type II: Controller vs. minority |
|---|---|---|
| Typical setting | Widely held U.S. or U.K. public firm | Family, state, or group-controlled firm; dual-class firm |
| Who has power | Management, often with a friendly board | Controlling shareholder, appointing board and management |
| Classic misbehavior | Empire building, perquisites, entrenchment, risk avoidance | Tunneling, related-party deals, dilutive issues, low payouts to minorities |
| Main discipline | Board, takeover market, pay design, activists | Minority-protection law, independent directors, courts, exit via price |
| Monitoring free-rider problem | Severe (small stakes) | Concentrated on the minority side |
| Takeover market helps? | Often | Rarely; the controller can block bids |

The distinction matters because governance prescriptions that fix one problem can worsen the other. Independent directors help in a widely held firm only if they are not captured by the CEO; in a controlled firm they are chosen, directly or indirectly, by the very party whose conduct they are supposed to police. Powerful shareholders reduce Type I conflicts but create Type II conflicts. The right design question is always *whose interests might diverge from whose, and what does the monitor depend on?*

### 9.1.3 The toolkit of governance mechanisms

Governance mechanisms fall into internal and external categories, and in each category it helps to identify which agency problem the mechanism addresses.

**Internal mechanisms** include the board of directors, shareholder voting rights, the structure of executive pay (Chapter 10), debt covenants and leverage that commit free cash flow to creditors (Jensen's free-cash-flow argument, Volume 1, Chapter 15), ownership concentration, and information systems such as audit and internal control.

**External mechanisms** include the market for corporate control (hostile takeovers and the threat of them), the product and labor markets, the legal system and its enforcement, regulation of disclosure, securities analysts, the financial press, credit rating agencies, and institutional and activist investors.

These mechanisms are partly substitutes and partly complements. A country with weak courts may rely on concentrated ownership as a substitute for legal protection. A firm with a staggered board and a poison pill (Section 9.4) has switched off the takeover market and therefore leans harder on the board. When reading any governance system, ask which mechanisms are doing the work and what happens if one fails.

### 9.1.4 Fiduciary duties and legal standards

Directors in common-law jurisdictions owe two principal duties. The **duty of care** requires informed, deliberate decision-making. The **duty of loyalty** forbids self-dealing and requires that directors place the firm's interests ahead of their own. In Delaware, where most large U.S. companies are incorporated, courts apply the **business judgment rule**, a presumption that disinterested, informed directors acted in good faith for the company. The presumption is rebutted when directors are conflicted, uninformed, or act in bad faith; then courts review the transaction under tougher standards such as *entire fairness*, which examines both fair dealing (process) and fair price. Special standards apply in contests for control, in the tradition of the *Unocal* and *Revlon* decisions: directors facing a hostile bid must show a reasonable threat and a proportional response, and once a sale of the company becomes inevitable they must seek the best price reasonably available.

For a finance leader the practical consequence is process. In a transaction with a controller or a conflicted insider, the combination of an independent special committee with its own advisers and real authority to say no, and approval by a majority of the minority, shifts both the legal standard and the economics. It does so because it replicates, imperfectly, the arm's-length negotiation that a controller's presence would otherwise eliminate. We apply this to Harborline later in the chapter.

## 9.2 Board Structure, Independence, and Duties

### 9.2.1 What a board does

A board has four functions that fit into one sentence: it *selects, monitors, rewards, and replaces* the chief executive; it *approves strategy and major capital decisions*; it *oversees risk, compliance, and financial reporting*; and it *serves as a source of advice and external connections*. The first function is the one the other three depend on. A board that cannot remove a failing CEO has little leverage over anything else.

Boards do not manage. They meet perhaps six to ten times a year for a few hours each, depend on management for information, and consist of part-time directors with other commitments. The value a board adds is therefore concentrated in a few high-stakes judgments: whom to hire and fire, whether to authorize a bet-the-company acquisition, how to respond to a crisis, how to structure pay. Good governance design maximizes the quality of these few decisions.

### 9.2.2 Size, composition, and leadership

**Board size.** Empirical work, beginning with Yermack's study of large U.S. firms, found that smaller boards are associated with higher valuations, in a pattern consistent with coordination and free-riding costs rising in group size. The finding is correlational. Complex, diversified, or heavily regulated firms need larger boards to staff committees and span expertise, and size is a choice made by the firm. A defensible practical range for a large listed company is eight to twelve directors, with larger numbers requiring a clear reason.

**Insiders, outsiders, and independents.** Inside directors are executives; outside directors are non-executives; *independent* directors are outside directors with no material relationship to the firm or its management. Listing standards in the United States require boards to have a majority of independent directors, and require fully independent audit, compensation, and nominating committees for listed firms, with some exemptions for controlled companies. Independence tests typically look at employment within the last three to five years, material commercial relationships, family ties, receipt of consulting fees, and interlocking directorships.

**CEO duality.** Should the CEO also be chair? Combining the roles concentrates power and makes the chair, who sets the agenda and controls information flow to the board, a subordinate of herself in her role as CEO. Splitting the roles is the norm in the United Kingdom and common in continental Europe. In the United States combined roles remain common, often paired with a **lead independent director** with authority to call executive sessions and set agendas. The evidence that separation improves performance is weak, and good outcomes appear to depend on the quality of the individuals and processes more than on the label. Some firms deliberately keep a former CEO as chair during a transition, which can help or entrench, depending on whether the former CEO lets go.

**Tenure, refreshment, and diversity.** Long tenure builds firm-specific knowledge but may erode independence of mind. Board refreshment tools include term limits, retirement ages, and annual performance reviews. Diversity of background, experience, and perspective has been shown in some studies to improve decision quality and monitoring, but the evidence on narrow demographic measures and firm performance is mixed and sensitive to the sample and method. The managerial argument rests on a simpler point: homogeneous boards tend to share blind spots, which is costly where a firm faces uncertain strategic choices.

### 9.2.3 What independence does and does not buy

Formal independence is a necessary but not sufficient condition for effective monitoring. Three weaknesses deserve emphasis.

First, *formal independence is a checklist; independence of mind is a disposition*. A director who owes the CEO a board seat, who earns a high fee, who would lose prestige by dissent, or who values collegiality may satisfy every listing criterion and still defer.

Second, *independent directors are chosen by someone*. In practice, nominating committees often take CEO suggestions, and in controlled firms the controller chooses. Genuine independence needs a nomination process that the CEO and controller do not dominate.

Third, *independence is not expertise*. A director with no ties to the firm but no understanding of its technology, financial instruments, or competitive environment cannot detect problems. Boards need both independence and competence; the two are traded off in director selection.

The research literature offers a nuanced picture. Boards with more independent directors are associated with better CEO turnover decisions following poor performance, with better monitoring in takeover bids (lower bid premiums paid by acquirers on average where boards are independent), and with fewer accounting irregularities when the audit committee has financial expertise. But across studies, the simple relationship between the *fraction* of independent directors and firm performance is weak, partly because boards adapt to circumstances (struggling firms add outsiders, so adding outsiders correlates with poor performance) and partly because independence in form often differs from independence in substance. We take up this identification problem in Section 9.8.

### 9.2.4 Director incentives, time, and liability

Directors are paid a fee, usually part cash and part stock, and are exposed to reputational and legal risk but not to large financial loss. Their time commitment is constrained. A director who serves on four boards and holds a full-time executive job may have little capacity to probe a complex acquisition. Proxy advisors and large institutions commonly set limits, such as no more than four or five public company boards for non-executives and fewer for sitting CEOs. Stock-based director pay aligns incentives with shareholders but excessive equity pay or pay structured like executive pay may compromise independence from the CEO's agenda.

Directors are typically protected by indemnification in the charter and bylaws, by directors-and-officers (D&O) insurance, and in many jurisdictions by exculpation clauses for breaches of the duty of care (but not loyalty or bad faith). This protection makes service feasible and encourages reasonable risk-taking but it also means that legal liability is not the principal discipline; reputation and the possibility of losing board seats are.

**Common mistake.** Treating the percentage of independent directors as a governance score. A board of ten independents who see only what the CEO chooses to show, who have never met in an executive session without management, and who hold no committee authority is not meaningfully independent in function.

### 9.2.5 Information, agenda, and the role of the chair

The most underrated determinant of board effectiveness is information. Directors receive board packs written by management. If the CEO and CFO control the content, timing, and form of information, the board is a spectator. Good practice includes direct access to the heads of internal audit, compliance, and risk; meetings with managers below the CEO; independent advisers for committees; periodic site visits; and a board calendar that allocates time to strategy, risk, talent, and capital allocation rather than only to approval of management's agenda. The chair or lead director shapes all of this.

A practical test of the board's grip on strategy is whether directors can answer, without help, four questions: What are the two or three most important sources of value in this business? What would cause us to abandon the current strategy? Who are our three most plausible successors for the CEO, and what would each need to learn? And what is the biggest risk we are not discussing? Boards that cannot answer are in no position to evaluate management's proposals.

## 9.3 Board Committees and Board Process

### 9.3.1 Why committees

Committees allow the board to divide labor, develop expertise, and handle conflicts of interest. Their power is substantial: the audit committee decides who audits the company and how to respond to accounting disputes; the compensation committee sets the pay of the CEO; the nominating committee decides whom to put forward for election. For this reason, listing standards and codes require committee independence, and shareholders examine committee composition closely.

### 9.3.2 The audit committee

The audit committee oversees financial reporting, internal control, the internal audit function, and the external auditor. After the accounting scandals of the early 2000s, the Sarbanes-Oxley Act of 2002 required that listed-company audit committees consist solely of independent directors, that they appoint, compensate, and oversee the external auditor, that they establish procedures for complaints about accounting and auditing matters, and that at least one member be a financial expert (or the company explain). It also required CEO and CFO certification of financial statements and management's assessment of internal control over financial reporting.

The committee's critical tasks are often prosaic: reading the auditor's report on critical accounting estimates, challenging management's judgments on revenue recognition, impairments, and reserves (the accounting judgments behind the ratios in Volume 1, Chapter 2), meeting privately with the auditor and the head of internal audit, and reviewing related-party transactions. The effectiveness of the committee depends on whether its members have the time, skepticism, and expertise to ask follow-up questions.

### 9.3.3 The compensation committee

The compensation committee sets CEO and senior executive pay, approves incentive plan design, evaluates performance against goals, and oversees disclosure. Independence rules require that members be independent and that the committee have authority over its own consultants. Chapter 10 develops pay design in detail; here the governance point is that the committee sits at the center of a recognized conflict. The CEO influences who sits on the committee, the peer group used to benchmark pay, and the information on which performance is judged. Benchmarking against peer groups tends to ratchet pay upward, because most boards want to pay at or above the median.

### 9.3.4 The nominating and governance committee

This committee identifies director candidates, recommends committee assignments, manages board evaluation, oversees corporate governance guidelines, and often leads CEO succession planning (in other firms, the full board does). Its most valuable role is to maintain a **skills matrix**: a map of the competencies the board needs (industry, finance, technology, cybersecurity, international operations, regulation, human capital) against the competencies it has, which is updated as strategy and risks change.

### 9.3.5 The risk committee and other committees

Banks and other financial institutions in many regimes are required to have board-level risk committees. In non-financial firms, risk oversight is handled variously by the audit committee, a dedicated risk committee, or the full board. After the global financial crisis, regulators placed more emphasis on the role of the board in setting risk appetite, approving risk limits, and ensuring that incentives do not reward excessive risk taking (Chapter 10 revisits this). Other committees address special topics: technology and cybersecurity, sustainability, executive or finance committees, and ad hoc **special committees** formed to evaluate conflicted transactions such as a controller buyout or related-party acquisition.

### 9.3.6 Committee design principles

| Committee | Core task | Typical independence requirement | Key risk if weak |
|---|---|---|---|
| Audit | Financial reporting, controls, auditor oversight | Fully independent; financial expertise | Misstatement, fraud, weak controls |
| Compensation | Executive pay, incentive design | Fully independent in most listing regimes | Pay unlinked to performance, ratcheting |
| Nominating/governance | Director selection, evaluation, succession | Fully independent in most listing regimes | Entrenched board, thin skills |
| Risk | Risk appetite, limits, stress testing | Mostly independent; mandatory for large banks in many regimes | Unseen risk accumulation |
| Special committee | Conflicted transactions | Disinterested directors, own advisers, authority to say no | Value transfer to insiders |

A committee is only as strong as its mandate, its resources, and the willingness of the board to defer to it. Good practice gives committees budgets for independent advisers, requires regular executive sessions without management, and rotates chairs to prevent capture.

### 9.3.7 Board process: executive sessions, minutes, and decision records

Processes are mundane and decisive. Regular executive sessions allow directors to speak candidly without management present. Concise, accurate minutes that record the questions asked and the alternatives considered create the evidence that directors were informed, which matters if their decisions are later challenged. An annual agenda that includes strategy offsites, a deep-dive on each major business, and a rolling review of capital allocation against the cost of capital and returns (Volume 1, Chapters 6 and 11) keeps the board from drifting into reaction mode.

## 9.4 Shareholder Rights, Voting, and Takeover Defenses

### 9.4.1 The voting machinery

Shareholders do not run the firm, but they hold three powers that shape governance: they elect directors, they approve fundamental changes (mergers, charter amendments, sales of substantially all assets), and they may sue. The mechanics of the first power vary and matter more than most managers appreciate.

**Straight (plurality) voting.** Each share casts one vote per open seat, and the nominees with the most votes win. A holder of a bare majority can elect every director. Minorities get nothing.

**Cumulative voting.** Each share carries as many votes as there are open seats, and the holder may allocate them all to one candidate. This gives minority holders a path to representation. The minimum number of shares needed to elect `k` of `D` directors from `S` voting shares is:

```
Shares needed = S × k / (D + 1) + 1
```

**Majority voting.** In an uncontested election a director must receive more votes for than against; a director who fails typically must tender a resignation that the board may accept or reject. This replaced plurality voting at most large U.S. firms after campaigns by institutional investors, though the resignation tender still leaves the board with discretion.

**Staggered (classified) boards.** Directors serve overlapping three-year terms, one-third elected each year. A hostile bidder who wins a proxy contest in year one controls only a third of the board and cannot take control until the following year's meeting. Staggered boards are among the strongest anti-takeover devices, and institutional pressure has led most large firms to de-stagger.

**Proxy access.** A shareholder or group holding a minimum stake for a minimum time (often 3% for three years in the U.S. practice that emerged) may nominate directors on the company's own proxy card, avoiding the cost of a separate solicitation.

**Example 9.1 – Cumulative voting and minority representation.**
Grumman Basin Instruments has 1,000,000 voting shares and nine open board seats. A dissident group wants to know how many shares it needs to elect two directors under (a) straight voting and (b) cumulative voting.

*Step 1: Straight voting.* Each of the nine seats is decided separately. A holder of 500,001 shares wins every seat. A holder of 499,999 shares wins none, because the opponent holds a majority on each ballot. The dissident group's minimum for two seats is therefore 500,001 shares, the same as for all nine: the system is winner-take-all.

*Step 2: Cumulative voting threshold.*
Shares needed = 1,000,000 × 2 / (9 + 1) + 1 = 200,000 + 1 = 200,001.

*Step 3: Verify.* The dissidents hold 200,001 shares and cast 200,001 × 9 = 1,800,009 votes. They split them between two candidates: 900,004 and 900,005. The incumbents hold 799,999 shares, giving 799,999 × 9 = 7,199,991 votes. If incumbents run nine candidates and split evenly they get 799,999 votes each, below the dissidents' 900,004. The nine winners are the top nine vote-getters: both dissident nominees and seven incumbents. If incumbents instead run only seven candidates, each gets 1,028,570 votes, and the same result holds. Incumbents cannot shut the dissidents out.

*Step 4: Three seats.* Shares needed = 1,000,000 × 3 / 10 + 1 = 300,001. A bloc of just over 30% elects a third of the board, versus nothing under straight voting.

*Interpretation.* Cumulative voting converts a minority stake of 20% into 22% of the board (two of nine). It protects minorities in controlled firms but can also give a disruptive faction a seat that raises board conflict. Many U.S. states make it optional; many large firms exclude it in their charters.

### 9.4.2 Takeover defenses and their economics

The market for corporate control is the ultimate external governance mechanism: a poorly run firm trades below its potential value, and a bidder can profit by buying it and changing management (Volume 1, Chapter 22). Takeover defenses raise the cost of that process. They are defended on the grounds that they give boards bargaining power to extract higher premiums, protect long-term investment from short-term pressure, and prevent coercive bids. They are criticized on the grounds that they entrench managers who prefer a quiet life.

| Defense | Mechanism | Governance effect |
|---|---|---|
| Poison pill (shareholder rights plan) | If an investor crosses a threshold (often 10-20%), other holders may buy shares at a deep discount, diluting the acquirer | Forces bidder to negotiate with the board; a board can remove the pill, shareholders cannot unless they replace the board |
| Staggered board | Only part of the board is elected each year | Delays control change by a year or more |
| Supermajority provisions | Mergers need 66-80% approval | Lets a large blockholder or insiders veto |
| Dual-class structure | Insiders hold super-voting shares | Complete bid-proofing while insiders remain |
| Golden parachutes | Large payments to executives on a change of control | Reduces managers' resistance to bids, but costs the bidder |
| Limits on special meetings and written consent | Shareholders cannot call meetings between annual meetings | Slows activist and bidder campaigns |

Pills can be defended economically as bargaining tools: a board that can say no can negotiate a better price for shareholders. But a pill that is never redeemable, or a board that is also staggered, is no longer a negotiating instrument; it is a wall. The evidence from event studies finds that adoption of defenses tends to be accompanied by declines in the value of firms that have weak governance elsewhere, while firms with strong boards and large outside holdings can use them with less harm. As with all governance evidence, causality is hard to separate from selection.

### 9.4.3 Proxy contests, activism, and the free-rider problem

An activist investor buys a stake in a company, argues for strategic or governance changes, and seeks board seats through negotiation or a proxy fight. The economics of activism are dominated by one problem identified by Grossman and Hart: *free-riding*. If the activist spends resources to raise firm value, every shareholder benefits in proportion to ownership, but only the activist bears the cost. A small shareholder therefore rationally refuses to bear the cost of intervention, and nobody intervenes unless a large holder's share of the gain exceeds the cost.

**Example 9.2 – Activist breakeven stake.**
A fund considers a campaign at Tidewell Chemicals, which has a market capitalization of $2,000 million. The fund believes that a break-up, board change, and capital-allocation reform would raise equity value by 10%. The campaign, including legal, advisory, and communication expenses, would cost $8 million. It estimates a 50% probability that the campaign succeeds.

*Step 1: Value created if successful.* ΔV = 10% × $2,000 million = $200 million.

*Step 2: Fund's gain at a 3% stake, assuming certain success.* 3% × $200 million = $6.0 million. Cost is $8.0 million, so net = –$2.0 million. A 3% stake does not pay even if success is certain.

*Step 3: Breakeven stake with certain success.* s\* = Cost / ΔV = 8 / 200 = 4.0%.

*Step 4: Include the 50% success probability.* Expected gain = p × s × ΔV – Cost, so breakeven s\* = 8 / (0.5 × 200) = 8.0%. At 3% the expected net payoff is 0.5 × 6.0 – 8.0 = –$5.0 million.

*Step 5: Interpretation.* Only large stakes justify intervention, which is why activists seek coalitions ("wolf packs") that share costs, build stakes cheaply before disclosure, use derivatives, or pursue campaigns that offer secondary private gains. At a 5% stake and 80% success probability, expected gain = 0.8 × 0.05 × 200 – 8 = 0.0 (breakeven). The model highlights that governance activism concentrates on large companies with big potential gains and on firms with reachable boards, and that passive index funds, with tiny stakes in each firm, rely on stewardship teams and voting rather than campaigns.

The same logic explains the structure of institutional stewardship: large asset managers hold stakes of a few percent across thousands of companies, so intervention at any one firm is rarely worth the cost, but the aggregate value of voting policies, engagement, and the reputational weight of a large holder can be substantial.

### 9.4.4 Managerial implications

For a CEO or CFO, shareholder rights are not an abstraction. They determine how easily activists can reach your board, how much a bidder must pay, and what investors will pay for governance-sensitive stocks. A rational approach is to ask for each provision: *what problem does this solve, and is there a cheaper way to solve it?* A pill adopted in response to a specific threat and subject to shareholder ratification costs little; a standing set of entrenching provisions raises the cost of capital over time if investors regard management as unaccountable.

## 9.5 Ownership Structure and Controlling Shareholders

### 9.5.1 Dispersed and concentrated ownership

In the United States and United Kingdom, large listed companies tend to be widely held, though institutional holdings are concentrated among a few large asset managers. In much of continental Europe, Asia, and Latin America, most listed firms have a controlling shareholder. Faccio and Lang's study of Western European firms documented the prevalence of family control; La Porta, Lopez-de-Silanes, and Shleifer documented similar patterns across countries, with family and state control common outside the Anglo-American world.

Concentrated ownership is not inherently bad. A large owner has an incentive to monitor, which solves the free-rider problem. Family owners often have long horizons, deep firm knowledge, and reputations to protect. Evidence from some markets finds that founder-controlled and family firms perform well, particularly where founders remain in a leadership role. The problem is that a controller can also divert value, and the more the controller's voting power exceeds her share of cash flows, the stronger the temptation.

### 9.5.2 Separating control from cash-flow rights

Three devices let a controller hold votes disproportionate to money: dual-class shares, pyramids, and cross-holdings.

**Dual-class shares.** The company issues shares with unequal voting power. Founders hold high-vote shares and sell low-vote shares to the public. Supporters argue that this protects long-term vision from short-term market pressure and lets entrepreneurs raise equity without losing control. Critics argue that it entrenches founders whose abilities may decline, shields them from takeovers and activists, and allows them to extract private benefits with little financial exposure.

**Pyramids.** A holding company controls a second company, which controls a third. At each level the controller holds only a share of the equity but has control of the whole chain. Cash-flow rights multiply down the chain while control follows the weakest link.

**Cross-holdings.** Companies in a group own shares in each other, creating a web in which management of each firm is protected from outside shareholders. Japanese keiretsu and some Korean chaebol structures historically relied on this.

The central measure is the **wedge** between control and cash-flow rights.

```
Cash-flow rights  =  product of ownership stakes along the chain (pyramid)
                  =  ownership of total equity (dual-class: shares held / total shares)
Control rights    =  weakest link in the chain (pyramid)
                  =  votes held / total votes (dual-class)
Wedge             =  Control rights  -  Cash-flow rights
Ratio             =  Cash-flow rights  /  Control rights
```

**Example 9.3 – Dual-class voting power.**
Sundial Media has 80,000,000 Class A shares (1 vote each) and 20,000,000 Class B shares (10 votes each). The founder owns all 20,000,000 Class B shares and 10% of Class A shares.

*Step 1: Total votes.* Class A votes = 80,000,000 × 1 = 80,000,000. Class B votes = 20,000,000 × 10 = 200,000,000. Total = 280,000,000.

*Step 2: Founder's votes.* Class A held = 10% × 80,000,000 = 8,000,000 votes. Class B held = 200,000,000 votes. Total = 208,000,000.

*Step 3: Voting power.* 208,000,000 / 280,000,000 = 74.3%.

*Step 4: Cash-flow rights.* Shares held = 8,000,000 + 20,000,000 = 28,000,000 out of 100,000,000 = 28.0%.

*Step 5: Wedge and ratio.* Wedge = 74.3% – 28.0% = 46.3 percentage points. Ratio = 28.0 / 74.3 = 0.377.

*Step 6: Minimum stake for control.* How little equity could the founder hold and keep a majority of votes? Suppose the founder holds only x Class B shares (10 votes) and no Class A, with 80,000,000 Class A outstanding. A majority requires 10x / (80,000,000 + 10x) > 0.5, which simplifies to 10x > 80,000,000, so x > 8,000,000. With 8,000,000 Class B shares plus 80,000,000 Class A, the founder holds 8,000,000 / 88,000,000 = 9.1% of the equity and exactly 50% of the votes.

*Interpretation.* With roughly 9% of the economics the founder can dominate every shareholder vote. Each $1 of private benefit the founder extracts costs her only $0.09 of her own wealth through the equity claim; if the benefit is worth more than 9 cents to her, she gains. This is the Harborline pattern from the vignette. Each additional vote per share raises the control-to-cash-flow ratio and therefore the incentive to extract.

**Example 9.4 – A pyramid.**
The Okonkwo family owns 40% of Holdco. Holdco owns 50% of Midco. Midco owns 60% of OpCo, a listed operating firm.

*Step 1: Control.* At each link the controlling stake is a majority of the votes (or enough for effective control): 40% in Holdco, 50% in Midco, 60% in OpCo. Under the weakest-link rule, the family's control rights equal the smallest stake in the chain, which is its 40% in Holdco (a 40% stake is normally enough for effective control of a widely held firm).

*Step 2: Cash-flow rights.* 0.40 × 0.50 × 0.60 = 0.12, or 12%.

*Step 3: Wedge and ratio.* Wedge = 40% – 12% = 28 percentage points. Cash-flow/control ratio = 12 / 40 = 0.30.

*Step 4: Capital invested.* If OpCo has equity worth $1,000 million, the family's economic stake is 12% × $1,000 million = $120 million, yet it directs the whole $1,000 million asset base. Its control per dollar invested is 1,000/120 = 8.3 times.

*Step 5: Incentive to divert.* If OpCo sells an asset to a family-owned company at $50 million below fair value, the family loses 12% × 50 = $6 million as an OpCo shareholder and gains $50 million as the buyer, a net of +$44 million. Outside OpCo shareholders (88% of the equity, including Holdco and Midco's other owners) bear $44 million.

*Interpretation.* Pyramids make it possible to control large assets with small capital, allowing financing of expansion without diluting control, but they also magnify the incentive to move value between layers, a practice discussed next.

### 9.5.3 Tunneling and private benefits of control

**Tunneling**, in the terminology of Johnson, La Porta, Lopez-de-Silanes, and Shleifer, is the transfer of resources out of a firm to its controlling shareholder. It takes many forms: below-market asset sales to the controller, above-market purchases from controller-owned firms, excessive pay to family members, loans on favorable terms, transfer pricing, dilutive equity issues, and mergers between firms in the same group in which one side is favored. A subtler form is **propping**: the controller injects funds into a failing group firm to protect its reputation or access to credit, which may favor the controller's other interests.

Minority shareholders cannot easily observe tunneling, and, even if they can, remedies are costly. The result is a discount in the price of minority shares. The size of that discount reflects the probability and size of expected extraction, the transparency of the firm, and the strength of legal protection.

**Example 9.5 – When does tunneling pay, and what do minorities lose?**
A controller owns 55% of the cash-flow rights of a firm worth $1,000 million before any diversion. Diversion is costly: for each $1 diverted, the controller receives only $0.75 because of legal fees, disguise costs, and inefficiency (a deadweight cost of 25%). Suppose the controller diverts 10% of firm value, $100 million.

*Step 1: Firm value after diversion.* The firm's value falls by the whole amount diverted: $1,000 – $100 = $900 million.

*Step 2: Controller's position.* Share of remaining value = 55% × 900 = $495 million. Receipts from diversion = 0.75 × 100 = $75 million. Total = $570 million. Before diversion the controller held 55% × 1,000 = $550 million. Net gain = $20 million.

*Step 3: Minority's position.* Before: 45% × 1,000 = $450 million. After: 45% × 900 = $405 million. Loss = $45 million, 10% of their value.

*Step 4: Breakeven ownership.* The controller gains per dollar diverted if the receipts per dollar, 0.75, exceed her cost per dollar, her cash-flow stake θ. So diversion pays if θ < 0.75. Here θ = 0.55 < 0.75, so diversion pays. At θ = 0.80 the controller would not divert. If the deadweight cost were 50% (receipts $0.50 per dollar) diversion would pay only if θ < 0.50.

*Step 5: Net social loss.* Total value after diversion = 900 + 75 = $975 million (firm's remaining value plus what the controller actually receives); the loss of $25 million is the deadweight cost. The $45 million minority loss is therefore larger than the controller's $20 million gain: a transfer plus a destruction of value.

*Interpretation.* The lower the controller's cash-flow stake and the cheaper diversion is (weak law, opaque accounting), the greater the incentive. This is why legal protection of minorities, disclosure, and the cash-flow stake of controllers act as substitutes: high controller ownership can partially replace weak law. It is also why a wedge, as in Examples 9.3 and 9.4, raises concern.

### 9.5.4 The value of control and the minority discount

When a controlling block is sold, the price per share often exceeds the price of minority shares. The **control premium** reflects both the ability to improve the firm (value that would be shared by all shareholders) and the private benefits of control (value not shared). In the cross-section, Dyck and Zingales found that control premiums vary widely across countries and are larger where investor protection is weaker, consistent with larger private benefits.

**Example 9.6 – Interpreting a control block price.**
Karst Industrial has 100 million shares trading at $10 each ($1,000 million market capitalization). A holder of 30 million shares (30%) sells the block to a strategic buyer for $14 per share, and the buyer gains control of the board.

*Step 1: Premium.* (14 – 10) / 10 = 40%.

*Step 2: Total paid over market.* 30 million × $4 = $120 million.

*Step 3: As a fraction of firm value.* 120 / 1,000 = 12% of market capitalization.

*Step 4: Interpretation.* The buyer pays $120 million for the combination of (a) value from changing strategy (shared with other shareholders if it increases the share price) and (b) private benefits (not shared). If the market expects the strategic improvements to raise the share price to $11.50, the shared component is $1.50 per share and the block's private-benefit component is $2.50 per block share, worth $75 million. Whether minorities are better or worse off depends on how the buyer behaves after taking control: if the premium reflects shared gains, minorities benefit through the price; if it reflects private benefits to be extracted, minorities lose. This is why many jurisdictions have mandatory bid rules requiring a bidder who crosses a threshold (often 30%) to offer the same price to all shareholders, equalizing the sale of control. The United States takes a different approach, relying on fiduciary duties and the market, with fewer mandatory bid rules.

### 9.5.5 Managing controlled-company governance

For firms with controllers, practical safeguards exist that reduce the minority discount and lower the cost of capital.

| Safeguard | How it protects minorities |
|---|---|
| Majority-of-minority approval for related-party deals | Gives outside holders a veto |
| Independent special committee with own advisers | Replicates arm's-length negotiation |
| Time-based sunset on super-voting rights | Limits duration of entrenchment |
| Ownership-based sunset (e.g., conversion when controller's cash stake falls below a threshold) | Links votes to economic exposure |
| Minimum free float and independent majority on key committees | Preserves some outside influence |
| Full related-party disclosure and audit committee review | Reduces opacity |
| Tag-along and mandatory bid rights | Ensures minorities share in a sale of control |
| Independent lead director with authority | Provides a recognized counterweight |

For Harborline, the sensible response to the institutional investors' letter is a package: a special committee of directors with no tie to the Ellison family or the executives, empowered to negotiate with or reject the yacht-electronics purchase and to hire independent advisers; approval by a majority of the votes cast by Class A holders; full disclosure of the fairness analysis; and a sunset clause converting Class B shares on Ellison's death or incapacity or after a fixed period. These measures do not guarantee a fair price but they make an unfair one costly to impose, and they signal that the board expects to be held to account.

## 9.6 Governance Across Countries

### 9.6.1 Outsider and insider systems

Governance systems are commonly grouped into two ideal types. In **outsider** (market-based) systems, such as the United States and United Kingdom, ownership is dispersed, equity markets are deep, boards are mostly independent, and disclosure and shareholder litigation are central. In **insider** (relationship-based) systems, such as much of continental Europe, Asia, and Latin America, ownership is concentrated in families, banks, groups, or the state, and control operates through blocks, board seats, and relationships. Real systems are hybrids, and they are evolving.

| Dimension | Outsider systems (U.S., U.K.) | Insider systems (e.g., continental Europe, East Asia, Latin America) |
|---|---|---|
| Typical ownership | Dispersed; large institutional holders | Concentrated: family, bank, group, or state |
| Dominant agency problem | Manager vs. shareholders | Controller vs. minority |
| Board model | Mostly one-tier; independent majority | Two-tier in Germany and the Netherlands; mixed elsewhere |
| Takeover market | Active | Limited by blocks, dual-class, cross-holdings |
| Minority protection | Securities law, litigation, disclosure | Varies widely; mandatory bid rules, related-party rules |
| Stakeholder role | Primarily via contracts and law | Often formal (co-determination) or informal (bank and employee ties) |
| Financing | Equity and bond markets | Bank loans, retained earnings, group financing |

### 9.6.2 Legal origin and investor protection

La Porta, Lopez-de-Silanes, Shleifer, and Vishny argued that legal origin (common law, French civil law, German civil law, Scandinavian) shapes the level of investor protection, and that stronger protection is associated with larger equity markets, more dispersed ownership, and lower private benefits of control. The "law and finance" research program has been challenged on measurement, on the role of political economy and history, and on convergence in the law, but its core insight remains influential: *where outside investors are poorly protected, ownership concentrates, and where it is concentrated, the marginal share held by outsiders is worth less.* Enforcement matters at least as much as the text of the law: a protective statute that courts do not apply provides little shelter.

### 9.6.3 Board models: one tier and two tier

In the **one-tier** model the board contains executives and non-executives and meets together; in the **two-tier** model, found in Germany, the Netherlands, and Austria, a **management board** (Vorstand) runs the company and a **supervisory board** (Aufsichtsrat) appoints, oversees, and may dismiss the management board. Executives cannot sit on the supervisory board, which separates management from supervision structurally. In Germany, large companies are subject to co-determination: employee representatives hold up to half the seats on the supervisory board of the largest firms, though the chair, who is generally a shareholder representative, has a casting vote. Proponents argue that co-determination builds trust and long-term firm-specific investment. Critics argue that it complicates restructuring and can distort capital allocation. The empirical evidence on firm performance is mixed.

### 9.6.4 Codes, comply-or-explain, and stewardship

The United Kingdom's Cadbury Committee (1992), formed in the wake of corporate failures, introduced the approach of a code of best practice with a "comply or explain" rule: listed companies must either follow the code's provisions or disclose and justify deviations. This soft-law approach has been widely adopted in Europe and elsewhere. It places the burden of judgment on investors, who must engage with explanations; it works best where investors are active and credible.

The U.K. Stewardship Code (first issued in 2010) and similar codes in Japan (2014), and other markets encourage institutional investors to monitor, engage, and vote responsibly. Japan's Corporate Governance Code (2015) introduced independent directors, comply-or-explain, and later pressure to unwind cross-shareholdings and improve capital efficiency. Over time, boards in Japan have added independent directors, share buybacks have grown, and cross-holdings have declined, though the process is gradual.

### 9.6.5 State-owned enterprises, family firms, and business groups

State-owned enterprises (SOEs) carry a different mix of objectives: commercial returns, employment, industrial policy, and political goals. The state is both owner and regulator, creating conflicts. The OECD's guidance for SOE governance recommends separating the ownership function from regulation, requiring professional boards, and applying the same transparency standards as private firms. Listed SOEs raise a particular minority problem: outside shareholders may find that company decisions serve non-commercial aims.

Family firms and business groups (chaebol, Indian and Latin American groups, Italian pyramids) can be efficient where capital markets are underdeveloped, because internal capital markets, reputation, and trust substitute for weak institutions. Their risks are succession (a competent founder may be followed by a less able heir), pyramid-style tunneling, and entrenchment. A central empirical finding in the literature is that family firms managed by professional CEOs, or by founders, perform better than those run by heirs, other things equal.

### 9.6.6 Convergence or persistence?

Hansmann and Kraakman argued that global competition would drive convergence on a shareholder-focused model; others, such as Bebchuk and Roe, emphasized path dependence: existing ownership structures, rents, and complementarities make change costly. In practice there has been partial convergence in form (more independent directors, audit committee rules, disclosure standards) with persistence in substance (ownership concentration, board culture, labor relations). A manager operating internationally should expect that board practices and shareholder expectations in each jurisdiction differ, and that importing another country's rule without its supporting institutions may fail. A U.S.-style independent audit committee in a family-controlled Asian company will face a different set of pressures than in a dispersed-ownership firm.

## 9.7 Board Evaluation and Effectiveness

### 9.7.1 Why evaluate

A board that never evaluates itself relies on hope. Evaluation identifies gaps in skills, process, and dynamics; it signals to investors that the board takes its role seriously; and it supports refreshment decisions that are otherwise awkward. U.K. codes require annual evaluation with an external facilitator at least every three years for larger companies, and many other regimes expect annual evaluation. Evaluation should cover the board, its committees, and, in the best practice, each director.

### 9.7.2 What to evaluate

A comprehensive evaluation addresses five areas:

1. **Strategy oversight.** Does the board understand the sources of value, challenge strategic assumptions, and monitor execution?
2. **Risk, audit, and controls.** Are risks identified and discussed, and do audit and risk committees receive reliable, timely information?
3. **CEO evaluation, compensation, and succession.** Is the CEO evaluated against clear goals, are incentives aligned (Chapter 10), and is there a ready pipeline for emergency and planned succession?
4. **Information and process.** Are board materials timely and decision-useful, do meetings leave time for debate, are executive sessions held?
5. **Board dynamics and composition.** Do directors challenge each other constructively, does the board hear dissent, and is the skills mix right for the strategy?

Methods include questionnaires, structured interviews with each director and senior executives (best practice includes interviews by an external adviser), observation of meetings, review of minutes and board papers, and benchmarking against peers. Self-assessment is cheap but tends toward generosity; external review is costlier but more candid.

### 9.7.3 Turning evaluation into action

An evaluation is only worth its follow-up. A good output is a short list of actions with owners and dates: replace a director whose skills no longer fit, reallocate meeting time from reports to debate, set up a committee of the board to examine succession, or clarify decision rights between the board and management. A common failure is to produce a report that is filed and forgotten, or one that sanitizes problems with generalities.

**Example 9.7 – A weighted board scorecard.**
Corvane Logistics' board used a five-dimension scorecard on a 1-5 scale. Directors rated themselves; an external adviser's interviews with directors and senior managers gave an independent rating. Weights reflect the importance the nominating committee attached to each area.

| Dimension | Weight | Directors' self-rating | External rating | Gap |
|---|---|---|---|---|
| Strategy oversight | 25% | 4.2 | 3.4 | 0.8 |
| Risk, audit, controls | 20% | 4.0 | 3.8 | 0.2 |
| CEO evaluation and succession | 20% | 3.8 | 2.9 | 0.9 |
| Information and process | 20% | 4.1 | 3.6 | 0.5 |
| Dynamics and composition | 15% | 4.4 | 3.5 | 0.9 |

*Step 1: Weighted self-rating.* 0.25 × 4.2 + 0.20 × 4.0 + 0.20 × 3.8 + 0.20 × 4.1 + 0.15 × 4.4 = 1.050 + 0.800 + 0.760 + 0.820 + 0.660 = 4.09.

*Step 2: Weighted external rating.* 0.25 × 3.4 + 0.20 × 3.8 + 0.20 × 2.9 + 0.20 × 3.6 + 0.15 × 3.5 = 0.850 + 0.760 + 0.580 + 0.720 + 0.525 = 3.435.

*Step 3: Overall gap.* 4.09 – 3.435 = 0.655. Directors rate themselves about 0.66 points more favorably than the external review does.

*Step 4: Weighted gaps (gap × weight).* Strategy 0.20; risk 0.04; succession 0.18; information 0.10; dynamics 0.135. Total = 0.655, matching Step 3.

*Step 5: Priorities.* Strategy oversight has the largest weighted gap (0.20), followed by succession (0.18) and dynamics (0.135). Succession and dynamics have the largest raw gaps (0.9). The audit and risk area is where self and external views agree.

*Interpretation.* The pattern is typical: boards believe they are strong where they feel comfortable and rate themselves generously on dynamics, while outsiders see a lack of candid challenge and unprepared succession. The action list should target the three largest weighted gaps, beginning with a strategy session at which directors, not management, set the agenda.

### 9.7.4 CEO succession as the board's central test

Succession planning is the clearest test of a board. A sound process maintains a standing list of internal candidates, assesses them with outside help, exposes them to the board through presentations and operating responsibilities, and defines emergency succession (if the CEO is incapacitated tomorrow, who steps in and what happens next). Firms with weak processes face value-destroying outcomes: delayed decisions, outside hires chosen under pressure, and predecessors who linger as chair and undermine successors. Research on CEO turnover finds that boards are more likely to dismiss CEOs after poor performance when boards are more independent and when blockholders are present, consistent with the view that the removal decision is the core test of monitoring.

## 9.8 Governance and Firm Value: Evidence, Interpretation, and Limits

### 9.8.1 What the evidence claims

A large literature relates governance to firm value. Selected threads, each described cautiously:

- **Governance indices.** Gompers, Ishii, and Metrick built an index counting 24 governance provisions (mostly takeover defenses and shareholder-rights restrictions) for U.S. firms and found that, in the 1990s, firms with strong shareholder rights had higher valuations (Tobin's Q) and a portfolio of such firms earned large abnormal returns relative to firms with weak rights. Subsequent work by Bebchuk, Cohen, and Ferrell reduced the index to six "entrenching" provisions (the E-index) with similar associations. But later studies, including by Bebchuk and coauthors themselves, found that the abnormal-return pattern largely vanished in the 2000s, consistent with either market learning (investors priced the provisions), the index capturing something else that changed, or a sample-specific phenomenon.
- **Board size and composition.** Yermack's finding of a negative relationship between board size and Tobin's Q; mixed results for independence; evidence that independent boards are better at CEO dismissal and acquisition bid decisions.
- **Cross-country studies.** Firms in countries with stronger investor protection are valued higher; within countries, firms that adopt stronger governance (for example by cross-listing in the U.S.) show valuation premiums that some interpret as "bonding" (Coffee) to a stronger legal regime and others attribute to the selection of better firms into cross-listing.
- **Dual-class firms.** Gompers, Ishii, and Metrick, and Masulis, Wang, and Xie, find that valuation falls as the wedge between votes and cash-flow rights widens, a finding consistent with agency costs. At the same time, some high-profile dual-class firms perform very well, particularly in early years when the founder's vision creates value. Several recent studies suggest that the penalty rises with time since IPO, motivating sunset clauses.
- **Activism.** Studies of hedge fund activism (Brav, Jiang, Partnoy, Thomas, and others) find positive abnormal returns around the announcement of activist stakes and improvements in operating performance in several measures, though critics question the durability of gains and the effects on long-term investment.
- **Takeover defenses.** Mixed results: staggered boards are associated with lower valuations in some studies, but identification is difficult because firms choose the defense.

### 9.8.2 The identification problem

Almost all governance variables are *chosen*. A firm's governance structure reflects its history, ownership, industry, and growth prospects. If governance is correlated with unobserved firm quality, then regressions of value on governance yield biased estimates.

Consider the standard pitfalls.

**Omitted variables.** Better-run firms (higher "quality") may both adopt good governance and have high value. Controlling for observable characteristics helps only to the extent that quality is observable.

**Reverse causality.** Poorly performing firms attract activists and adopt reforms in response, so good governance might follow weak performance, producing a negative correlation even if governance helps.

**Simultaneity and endogenous choice.** The theory of optimal governance (Himmelberg, Hubbard, and Palia; Demsetz and Lehn) predicts that firms choose governance structures appropriate to their circumstances, so that differences across firms should not be expected to correlate with value even if governance matters.

**Sample and period dependence.** The G-index result (strong in the 1990s, absent later) illustrates that associations may not be stable.

Credible identification uses natural experiments: staggered adoption of state anti-takeover laws, regulatory changes such as the Sarbanes-Oxley independence requirements affecting firms differentially depending on their pre-existing board composition, instrumental variables, regression discontinuities at close shareholder votes (Cuñat, Giné, and Guadalupe examine governance proposals passing or failing by narrow margins), and event studies of sudden shocks. These approaches reduce, without eliminating, concerns.

**Example 9.8 – How omitted quality produces a spurious governance premium.**
A researcher studies 1,500 firms. Each firm has an unobserved *quality* score (mean 0, standard deviation 1) and a governance score. Good firms tend to have good governance: governance = 0.6 × quality + noise, where noise has standard deviation 0.8, so that the governance score has standard deviation about 1.0 and its correlation with quality is about 0.6. Tobin's Q is generated as Q = 1.50 + 0.30 × quality + random noise (standard deviation 0.5). By construction, governance has *no causal effect* on Q. The data below come from a Python simulation of this process (random seed 42).

*Step 1: Naive regression of Q on governance.* Estimated slope = 0.190, standard error = 0.0138, t-statistic = 13.8. A researcher would announce that a one-standard-deviation improvement in governance is associated with a Q higher by 0.19, which is 13% of the mean Q of 1.5, and a highly "significant" result.

*Step 2: The theoretical bias.* The slope from regressing Q on governance equals 0.30 × Cov(quality, governance) / Var(governance) = 0.30 × 0.60 / 1.0 = 0.18. The estimate 0.190 matches this calculation closely.

*Step 3: Controlling for quality (if it could be observed).* Estimated slope on governance = 0.025 (standard error 0.0156, t = 1.62), not different from zero. The coefficient on quality = 0.281 (close to the true 0.30).

*Step 4: Add a small true effect.* If the true governance effect were 0.05 and quality were still unobserved, the naive slope in the same simulation would be 0.234, overstating the true effect by a factor of nearly five.

*Interpretation.* Whenever governance is correlated with an unobserved quality, a regression will attribute quality's contribution to governance. Evidence that survives sensitivity to omitted variables, such as natural experiments and sharp discontinuities, is much stronger than a cross-sectional correlation. This is not an argument that governance does not matter. It is an argument for humility about the size of the effect and for scrutiny of how it was estimated.

### 9.8.3 What can be concluded

A balanced reading:

1. *Governance matters most where agency problems are severe and external discipline is weak.* The cross-country and dual-class evidence is consistent with this.
2. *No single structural feature (board size, independence percentage, CEO duality) reliably predicts performance.* Substance and process matter more than form.
3. *Boards matter most in a few decisions.* Evidence is strongest for CEO turnover, takeover bids, and related-party transactions.
4. *Provisions are priced.* In the 2000s the abnormal return to "good governance" portfolios disappeared, consistent with markets learning to price known provisions.
5. *Governance reforms can change behavior without raising value*, if they mandate form (for example, independence tests) without changing incentives.

For the manager, the practical message is that governance is a risk-management and cost-of-capital issue before it is a source of excess returns. Weak governance raises the probability of fraud, tunneling, and value-destroying acquisitions; investors price this through the discount rate and the minority discount. Strong governance will not rescue a bad strategy but it limits the downside and maintains the credibility that lowers financing costs (Volume 1, Chapter 11).

### 9.8.4 Common mistakes in governance analysis

- Equating *compliance* with *effectiveness*: ticking boxes on independence, committees, and policies.
- Reading a governance score as a causal driver of returns without considering selection.
- Ignoring the identity of the controlling shareholder; a "highly independent" board in a controlled company may be independent of management but not of the controller.
- Treating all dual-class firms alike: a ten-year sunset and an independent committee are very different from perpetual unequal voting with no independent oversight.
- Assuming that more governance is always better: excessive process can slow decisions, make boards risk-averse, and crowd out entrepreneurship.

## Case Study

*Illustrative case; Altamar Foods and all individuals are fictional.*

**Altamar Foods** is a listed packaged-foods company with revenue of $3.1 billion and a market capitalization of $2.4 billion. The Vasquez family holds 100% of the Series V shares (five votes each) and 22% of total equity, giving it 59% of the votes. Public shareholders, among them two large asset managers holding 11% and 7% of the equity, own the remainder. The board has ten members: the chair and CEO, Rafael Vasquez (third generation); his sister, a non-executive director; the CFO; and seven directors classified as independent. The independent directors have a median tenure of 13 years, and four were originally recommended by the family.

Altamar's return on invested capital has averaged 6.8% over five years against a weighted average cost of capital of about 8.5% (Volume 1, Chapter 11). The group has made three acquisitions in adjacent categories, each at a premium above 35% and none yet earning its cost of capital. The CEO's cash bonus is tied to revenue growth and adjusted EBITDA.

Last quarter the board received a proposal from the CEO that Altamar acquire Sol Verde Beverages for $640 million. Sol Verde is 70% owned by a company controlled by the Vasquez family's cousins, who also hold 6% of Altamar directly. Management's fairness analysis, prepared with the company's usual investment bank, values Sol Verde at $610 to $690 million. Sol Verde's EBITDA multiple at the price is 13.5 times, versus a sector median of about 10.5 times. The CEO describes the acquisition as "keeping a heritage brand in the family of companies."

The audit committee chair, Helen Mbeki, notes that the committee has no written procedure for related-party transactions and that the proposal reached the full board with only a two-week review period. The two asset managers have written to the board demanding a special committee, a majority-of-the-minority vote, and a reconsideration of the company's dual-class structure. One manager has said that it will vote against the re-election of the nominating committee chair and the lead independent director if no steps are taken.

In the week before the board meeting, two of the independent directors privately tell Mbeki that they believe the price is too high but "do not want to cause a family rupture." A third says that the independent directors "owe the family their positions but must be seen to act independently." Mbeki must recommend a process by the end of the week.

Altamar's CFO has given her one more fact: financing the purchase with $400 million of new debt and $240 million of cash would raise net leverage from 2.1 times EBITDA to 2.9 times, close to the covenant limit of 3.0 times.

**Discussion Questions**

1. Identify the agency problems at Altamar (Type I and Type II) and explain which features of the ownership and board structure aggravate each. Compute the wedge between control and cash-flow rights, and estimate how much of a $50 million overpayment to the cousins' company would be borne by the Vasquez family itself.
2. Design the process by which Altamar's board should evaluate the Sol Verde proposal: who should sit on the special committee, what authority and advisers it needs, which approvals should be required, and what information the committee should demand beyond the fairness range.
3. Evaluate the independence of the seven "independent" directors. Which facts weaken the claim of independence in substance, and what changes to nomination, tenure, and executive sessions would help? What would you do about the two directors who privately doubt the price but fear a "family rupture"?
4. The asset managers propose a sunset clause for the Series V shares. Assess the arguments for and against, propose specific sunset terms, and discuss how the existence of the clause might change the valuation investors place on Altamar's minority shares. Use the identification issues from Section 9.8 to explain why you would not rely on a cross-sectional regression to argue the point.

## Key Takeaways

- Governance addresses two agency problems: managers versus dispersed shareholders, and controllers versus minority shareholders. Prescriptions that fix one may aggravate the other.
- Boards add most of their value in a few decisions: hiring, evaluating, and replacing the CEO; approving large capital commitments; overseeing risk and reporting; and handling conflicted transactions.
- Formal independence is necessary but not sufficient. Substance depends on who nominates directors, what information they get, how long they serve, and whether they will say no.
- Committees concentrate power over auditing, pay, and nominations, so their independence, resources, and authority matter more than their number.
- Voting rules determine whether minorities can obtain representation. Cumulative voting needs S × k / (D + 1) + 1 shares to elect k of D directors; plurality voting gives a majority holder every seat.
- Activism is governed by free-riding: a stake of size s pays only if s × p × ΔV exceeds the cost, so campaigns need large stakes, coalitions, or very large potential gains.
- Dual-class shares and pyramids separate control from cash-flow rights; the wedge raises the controller's incentive to divert, because diversion pays whenever the controller's cash-flow stake is below the receipts per dollar diverted.
- Tunneling transfers more from minorities than it gains for the controller, because diversion is wasteful. Independent special committees, majority-of-the-minority approvals, disclosure, and sunsets reduce the minority discount.
- Governance systems differ across countries because ownership, law, and enforcement differ; copying one country's rules without its supporting institutions often fails.
- Evidence on governance and value is vulnerable to omitted variables and reverse causality. Natural experiments are more credible than cross-sectional correlations, and effects found in one period (such as the 1990s governance-index results) may not persist.

## Review Questions

1. Distinguish the Type I and Type II agency problems and give one governance mechanism that helps with each and one that could worsen the other.
2. Explain the duty of care, the duty of loyalty, and the business judgment rule. When does a court apply entire fairness instead?
3. Why might the percentage of independent directors be a poor measure of board quality? Give three reasons.
4. What are the main arguments for and against combining the roles of CEO and chair? What role does a lead independent director play?
5. Compare straight and cumulative voting. Why is cumulative voting valuable to minorities, and why do many companies opt out?
6. Using the free-rider logic of Grossman and Hart, explain why passive index funds rarely launch proxy contests, and why activists try to assemble coalitions.
7. Define the wedge between control and cash-flow rights. How do dual-class shares and pyramids create it, and why does it matter for tunneling incentives?
8. Compare the governance systems of the United States, Germany, and Japan with respect to ownership, board model, and the role of stakeholders.
9. Why is it hard to establish that governance causes higher firm value? Describe a research design that could improve identification.
10. Describe what a good board evaluation covers, how external facilitation changes the outcome, and why evaluation without follow-up is ineffective.

## Problems

**Problem 9.1.** A company has 5,000,000 voting shares and 12 open board seats. Under cumulative voting, what is the minimum number of shares needed to elect 3 directors? Compare this with the shares needed to elect any director under straight voting where the rest of the vote is cast as a single bloc.

**Problem 9.2.** A firm has 60,000,000 Class A shares (1 vote) and 15,000,000 Class B shares (10 votes). The founder holds all Class B shares and 5% of Class A shares. Compute the founder's voting power, cash-flow rights, and wedge.

**Problem 9.3.** A family owns 35% of Holdco; Holdco owns 55% of Midco; Midco owns 70% of OpCo. (a) Compute the family's control rights and cash-flow rights in OpCo. (b) OpCo sells an asset to a family-owned company for $80 million below fair value. Compute the family's net gain and the amount borne by other OpCo shareholders (treat the family's cash-flow share as its OpCo stake).

**Problem 9.4.** A controller owns 60% of a firm worth $2,000 million. She diverts 5% of firm value ($100 million) and receives $0.80 per dollar diverted. Compute the controller's gain, the minority's loss, the deadweight loss, and the breakeven cash-flow stake above which she would not divert.

**Problem 9.5.** An activist considers a campaign at a company with market capitalization $5,000 million, expecting a 6% increase in equity value if successful. The campaign costs $12 million and the probability of success is 60%. Compute the breakeven stake and the expected net payoff at a 4% stake.

**Problem 9.6.** A holder sells a 20 million-share block (of 50 million shares outstanding) at $26 per share when the market price is $20. Compute the premium, the total premium paid, and the premium as a percentage of market capitalization. If the market price rises to $22 on the announcement, split the premium per block share into a shared component and a private component and compute the private component in total.

**Problem 9.7.** A board scorecard weights Strategy 30%, Risk 30%, and Succession 40%. Directors' self-ratings are 4.5, 4.0, and 3.5; external ratings are 3.8, 3.9, and 2.6. Compute the weighted self-rating, the weighted external rating, the overall gap, and the weighted gap for each dimension.

**Problem 9.8.** Quality has a variance of 1.0, governance has a variance of 1.25, and the covariance between quality and governance is 0.50. Tobin's Q rises 0.40 per unit of quality (a quality effect) and 0.02 per unit of governance (a true governance effect). If quality is unobserved, what slope would a regression of Q on governance estimate? How many times larger is it than the true effect?

### Answers to Selected Problems

- **9.1.** Shares needed = 5,000,000 × 3 / 13 + 1: 5,000,000 × 3 / 13 = 1,153,846.15, so the minimum is 1,153,847 shares (about 23.1%). Under straight voting a holder needs 2,500,001 shares to win any seat against a unified majority bloc.
- **9.2.** Votes: Class A held = 3,000,000; Class B votes = 150,000,000; total founder votes = 153,000,000 of 60,000,000 + 150,000,000 = 210,000,000, so 72.9%. Cash-flow rights = (3,000,000 + 15,000,000) / 75,000,000 = 24.0%. Wedge = 48.9 percentage points.
- **9.3.** (a) Control = 35% (weakest link); cash-flow = 0.35 × 0.55 × 0.70 = 13.475%. (b) Family loses 13.475% × 80 = $10.78 million as OpCo shareholder and gains $80 million, a net gain of $69.22 million. Other shareholders bear 80 – 10.78 = $69.22 million.
- **9.4.** Gain: before 0.60 × 2,000 = 1,200; after 0.60 × 1,900 + 0.80 × 100 = 1,140 + 80 = 1,220; gain $20 million. Minority: before 800, after 760; loss $40 million. Deadweight loss = $20 million (diverted 100, received 80). Breakeven stake = 80%.
- **9.5.** Breakeven stake = 12 / (0.60 × 300) = 6.67% (ΔV = 6% × 5,000 = $300 million). At 4%: 0.60 × 0.04 × 300 – 12 = 7.2 – 12 = –$4.8 million.
- **9.6.** Premium = 26/20 – 1 = 30%. Total premium = 20 million × $6 = $120 million = 12% of market capitalization ($1,000 million). Shared component = $2 per share; private component = $4 per block share; total private = $80 million.
- **9.7.** Self = 0.3 × 4.5 + 0.3 × 4.0 + 0.4 × 3.5 = 3.95. External = 0.3 × 3.8 + 0.3 × 3.9 + 0.4 × 2.6 = 3.35. Gap = 0.60. Weighted gaps: strategy 0.3 × 0.7 = 0.21; risk 0.3 × 0.1 = 0.03; succession 0.4 × 0.9 = 0.36; total 0.60.
- **9.8.** Naive slope = 0.02 + 0.40 × 0.50 / 1.25 = 0.02 + 0.16 = 0.18, which is nine times the true effect of 0.02.
