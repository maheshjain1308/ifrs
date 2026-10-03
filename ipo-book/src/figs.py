"""Inline-SVG figure generators for the IPO book. Each returns (svg, caption)."""
from xml.sax.saxutils import escape

NAVY, TEAL, AMBER, GREY, LIGHT, INK = '#12305f', '#1f7a8c', '#c98a12', '#8a93a5', '#eef2f9', '#1c2230'
GREEN, RED, PURPLE = '#4c9a3f', '#b8403a', '#7b57b3'
FONT = 'Liberation Sans, DejaVu Sans, sans-serif'


def svg(w, h, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
            f'font-family="{FONT}" font-size="11">{body}</svg>')


def rect(x, y, w, h, fill=LIGHT, stroke=NAVY, sw=1, rx=5):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'


K = 1.15


def text(x, y, s, size=11, fill=INK, anchor='middle', weight='normal', italic=False):
    st = ' font-style="italic"' if italic else ''
    size = round(size * K, 1)
    return (f'<text x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" '
            f'font-weight="{weight}"{st}>{escape(s)}</text>')


def lines(x, y, rows, size=10.5, fill=INK, anchor='middle', weight='normal', lh=None):
    lh = lh or size * 1.28
    out = ''
    for i, r in enumerate(rows):
        out += text(x, y + i * lh, r, size, fill, anchor, weight)
    return out


def arrow(x1, y1, x2, y2, color=NAVY, sw=1.4):
    import math
    ang = math.atan2(y2 - y1, x2 - x1)
    a = 6.5
    p1 = (x2 - a * math.cos(ang - .4), y2 - a * math.sin(ang - .4))
    p2 = (x2 - a * math.cos(ang + .4), y2 - a * math.sin(ang + .4))
    return (f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}"/>'
            f'<polygon points="{x2},{y2} {p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}" fill="{color}"/>')


def line(x1, y1, x2, y2, color=GREY, sw=1, dash=''):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}"{d}/>'


# --------------------------------------------------------------------------
def fig_process():
    stages = [
        ('1', 'Preparation', ['Appoint BRLMs, counsel', 'Kick-off meeting', 'Due diligence, drafting', 'Agreements, certificates'], NAVY),
        ('2', 'Filing the DRHP', ['File DRHP with SEBI', 'Due diligence certificate', 'Apply to exchanges for', 'in-principle approval'], TEAL),
        ('3', 'SEBI review', ['Answer interim comments', 'Update the DRHP', 'Final observations', '(valid for 12 months)'], NAVY),
        ('4', 'Marketing and RHP', ['Updated DRHP to SEBI', 'Escrow, syndicate deals', 'RHP filed with RoC', 'Pre-issue advertisement'], TEAL),
        ('5', 'Issue period', ['Price band advertised', 'Anchor bidding (1 day)', 'Public bidding (3+ days)', 'Pricing; Prospectus to RoC'], NAVY),
        ('6', 'Post-issue', ['Basis of allotment', 'Funds to Public Issue A/c', 'Allotment, demat credit', 'Final listing approval'], TEAL),
    ]
    body = ''
    bw, bh, gx, gy = 196, 138, 16, 22
    for i, (n, t, items, col) in enumerate(stages):
        r, c = divmod(i, 3)
        x, y = 8 + c * (bw + gx), 8 + r * (bh + gy)
        body += rect(x, y, bw, bh, '#ffffff', col, 1.4, 6)
        body += f'<rect x="{x}" y="{y}" width="{bw}" height="30" rx="6" fill="{col}"/>'
        body += f'<rect x="{x}" y="{y + 20}" width="{bw}" height="10" fill="{col}"/>'
        body += text(x + 14, y + 20, n, 15, '#fff', 'start', 'bold')
        body += text(x + 34, y + 20, t, 12.5, '#fff', 'start', 'bold')
        for j, it in enumerate(items):
            body += text(x + 12, y + 52 + j * 21, '• ' + it, 9.4, INK, 'start')
        if c < 2:
            body += arrow(x + bw + 1, y + bh / 2, x + bw + gx - 1, y + bh / 2, GREY, 2)
    body += arrow(8 + 2 * (bw + gx) + bw / 2, 8 + bh + 1, 8 + bw / 2 + 2, 8 + bh + gy - 1, GREY, 0)  # placeholder (hidden)
    body += line(8 + 2 * (bw + gx) + bw / 2, 8 + bh, 8 + 2 * (bw + gx) + bw / 2, 8 + bh + 11, GREY, 2)
    body += line(8 + 2 * (bw + gx) + bw / 2, 8 + bh + 11, 8 + bw / 2, 8 + bh + 11, GREY, 2)
    body += arrow(8 + bw / 2, 8 + bh + 11, 8 + bw / 2, 8 + bh + gy, GREY, 2)
    return svg(640, 346, body), '<b>Figure.</b> The six stages of a book-built IPO. In a fast-track issue stages 2 and 3 fall away (not available to a first-time IPO issuer).'


def fig_filing():
    body = ''
    body += text(10, 18, 'Book-built issue — three-stage filing', 12, NAVY, 'start', 'bold')
    steps = [('DRHP', 'filed with SEBI'), ('Updated DRHP', 'after SEBI comments'), ('RHP', 'registered with RoC'), ('Prospectus', 'with Issue Price, to RoC')]
    for i, (a, b) in enumerate(steps):
        x = 10 + i * 158
        body += rect(x, 28, 140, 52, '#ffffff', NAVY, 1.4)
        body += text(x + 70, 50, a, 12, NAVY, 'middle', 'bold')
        body += text(x + 70, 66, b, 9.5, GREY)
        if i < 3:
            body += arrow(x + 141, 54, x + 157, 54, NAVY, 1.6)
    body += text(10, 122, 'Fixed-price issue — two-stage filing', 12, TEAL, 'start', 'bold')
    steps2 = [('DRHP', 'filed with SEBI'), ('Updated DRHP', 'after SEBI comments'), ('Prospectus', 'with fixed price, to RoC')]
    for i, (a, b) in enumerate(steps2):
        x = 10 + i * 158
        body += rect(x, 132, 140, 52, '#ffffff', TEAL, 1.4)
        body += text(x + 70, 154, a, 12, TEAL, 'middle', 'bold')
        body += text(x + 70, 170, b, 9.5, GREY)
        if i < 2:
            body += arrow(x + 141, 158, x + 157, 158, TEAL, 1.6)
    body += rect(486, 132, 144, 52, '#fbf4e3', AMBER, 1)
    body += lines(558, 152, ['No separate RHP: price is', 'part of the offer document'], 9.5, INK)
    return svg(640, 200, body), '<b>Figure.</b> Filing stages for book-built and fixed-price public issues. After the Prospectus is registered, the issue is allotted and listed.'


def fig_intermediaries():
    body = ''
    cx, cy = 320, 190
    nodes = [
        (110, 40, 'Book Running Lead\nManagers (BRLMs)', NAVY),
        (320, 28, 'Legal counsel\n(issuer / BRLMs)', NAVY),
        (530, 40, 'Statutory auditors\n(restated financials,\ncomfort letters)', NAVY),
        (78, 190, 'Registrar to\nthe Issue', TEAL),
        (562, 190, 'Escrow / Sponsor\nBanks, SCSBs', TEAL),
        (110, 340, 'Syndicate members,\nbrokers, CDPs, RTAs', TEAL),
        (320, 352, 'Monitoring agency\n(fresh issue > ₹100 cr)', AMBER),
        (530, 340, 'Advertising\nagency', AMBER),
    ]
    for x, y, t, col in nodes:
        body += line(cx, cy, x, y, '#b9c3d8', 1.2)
    body += rect(cx - 82, cy - 34, 164, 68, NAVY, NAVY, 1, 8)
    body += lines(cx, cy - 8, ['ISSUER', '(and selling', 'shareholders)'], 11.5, '#fff', 'middle', 'bold', 14)
    for x, y, t, col in nodes:
        rows = t.split('\n')
        h = 18 + 14 * len(rows)
        w = 150
        body += rect(x - w / 2, y - h / 2, w, h, '#ffffff', col, 1.5, 6)
        body += lines(x, y - h / 2 + 18, rows, 10, INK, 'middle', 'bold', 14)
    body += rect(8, 396, 624, 26, '#f1f4fa', GREY, 1, 4)
    body += text(320, 413, 'Oversight: SEBI (offer document), stock exchanges (listing), Registrar of Companies (RHP / Prospectus)', 10, NAVY, 'middle', 'bold')
    return svg(640, 430, body), '<b>Figure.</b> The IPO ecosystem. Blue boxes are advisers and verifiers, teal boxes handle the money and applications, amber boxes are conditional or supporting roles.'


def _stack(y, label, parts, total_w=470, x0=150):
    out = text(x0 - 10, y + 17, label, 10.5, INK, 'end', 'bold')
    x = x0
    for name, pct, col, tcol in parts:
        w = total_w * pct / 100
        out += f'<rect x="{x:.1f}" y="{y}" width="{w:.1f}" height="28" fill="{col}" stroke="#fff" stroke-width="1.5"/>'
        if w > 40 and name:
            out += text(x + w / 2, y + 18, f'{name}{pct:g}%', 9.5, tcol, 'middle', 'bold')
        else:
            out += text(x + w / 2, y + 18, f'{pct:g}%', 9.5, tcol, 'middle', 'bold')
        x += w
    return out


def fig_alloc():
    body = text(10, 18, 'Net offer split by investor category (book-built IPO)', 12, NAVY, 'start', 'bold')
    body += _stack(30, 'Meets Reg. 6(1)', [('QIB ≤', 50, NAVY, '#fff'), ('NII ≥', 15, TEAL, '#fff'), ('Retail ≥', 35, AMBER, '#fff')])
    body += _stack(68, 'Reg. 6(2) route', [('QIB ≥', 75, NAVY, '#fff'), ('NII ≤', 15, TEAL, '#fff'), ('≤', 10, AMBER, '#fff')])
    body += text(10, 128, 'Inside the QIB portion (illustration: QIB share = 100 units)', 12, NAVY, 'start', 'bold')
    body += _stack(140, 'With anchors', [('Anchor ≤', 60, PURPLE, '#fff'), ('Balance ', 40, NAVY, '#fff')])
    body += text(150, 188, 'Of the anchor portion, one-third is reserved for domestic mutual funds.', 9.5, GREY, 'start', italic=True)
    body += _stack(204, 'Net QIB (after anchors)', [('', 5, GREEN, '#fff'), ('All QIBs, incl. MFs ', 95, NAVY, '#fff')])
    body += text(150, 252, 'Green = 5% for mutual funds. QIB / NII: proportionate; retail: minimum lot first.', 9, GREY, 'start', italic=True)
    return svg(640, 262, body), '<b>Figure.</b> Allocation to investor categories under the two regimes in the SEBI (ICDR) Regulations, 2018, as described in the handbook.'


def fig_demand():
    prices = [190, 192, 194, 196, 198, 200]
    demand = [20, 30, 45, 40, 35, 80]          # lakh shares bid exactly at the price
    cum = [250, 230, 200, 155, 115, 80]         # cumulative at or above price
    x0, y0, w, h = 60, 24, 540, 200
    maxv = 280
    body = ''
    for g in (0, 50, 100, 150, 200, 250):
        yy = y0 + h - h * g / maxv
        body += line(x0, yy, x0 + w, yy, '#e3e8f2', 1)
        body += text(x0 - 8, yy + 3.5, str(g), 9.5, GREY, 'end')
    bw = 46
    for i, p in enumerate(prices):
        cx = x0 + 45 + i * 88
        hh = h * cum[i] / maxv
        body += f'<rect x="{cx - bw / 2}" y="{y0 + h - hh}" width="{bw}" height="{hh}" fill="{NAVY}" opacity=".9"/>'
        body += text(cx, y0 + h - hh - 5, str(cum[i]), 10, NAVY, 'middle', 'bold')
        hd = h * demand[i] / maxv
        body += f'<rect x="{cx - 8}" y="{y0 + h - hd}" width="16" height="{hd}" fill="{AMBER}"/>'
        body += text(cx, y0 + h + 15, f'₹{p}', 10.5, INK, 'middle', 'bold')
    yi = y0 + h - h * 100 / maxv
    body += line(x0, yi, x0 + w, yi, RED, 1.6, '6,4')
    body += text(30, y0 + h / 2, 'Lakh shares', 10, GREY, 'middle')
    body = body.replace('<text x="30"', '<text transform="rotate(-90 22 ' + str(y0 + h / 2) + ')" x="22"')
    body += rect(60, 262, 12, 12, NAVY, NAVY, 0, 1) + text(78, 272, 'Cumulative demand at or above the price', 10, INK, 'start')
    body += rect(330, 262, 12, 12, AMBER, AMBER, 0, 1) + text(348, 272, 'Bids placed exactly at the price', 10, INK, 'start')
    body += line(60, 296, 84, 296, RED, 2, '6,4') + text(90, 300, 'Offer size: 100 lakh shares (dashed line)', 10, RED, 'start', 'bold')
    return svg(640, 308, body), '<b>Figure.</b> Illustrative demand curve for a price band of ₹190–₹200 and an offer of 100 lakh shares (see Chapter 11). All numbers are hypothetical.'


def fig_lockin():
    body = text(10, 18, 'Lock-in periods as described in the handbook (counted from allotment in the IPO)', 12, NAVY, 'start', 'bold')
    x0, w = 215, 375
    # axis: 0 .. 36 months
    def X(m):
        return x0 + w * m / 36
    rows = [
        ('Promoters: 20% contribution', 36, NAVY),
        ('Promoters: balance holding', 12, TEAL),
        ('Other pre-IPO shareholders', 12, TEAL),
        ('VC / AIF / FVCI shares', 12, AMBER),
        ('Anchor investors', 1, PURPLE),
    ]
    for i, (lab, m, col) in enumerate(rows):
        y = 38 + i * 36
        body += text(x0 - 10, y + 17, lab, 9, INK, 'end', 'bold')
        body += f'<rect x="{x0}" y="{y}" width="{X(m) - x0:.1f}" height="24" fill="{col}"/>'
        lbl = '30 days' if m == 1 else (f'{m} months' if m < 12 else f'{m // 12} year' + ('s' if m > 12 else ''))
        body += text(X(m) + 6, y + 16, lbl, 10, col, 'start', 'bold')
    for m in (0, 12, 24, 36):
        body += line(X(m), 32, X(m), 38 + 5 * 36 - 8, '#cfd5e2', 1, '3,3')
        body += text(X(m), 38 + 5 * 36 + 8, 'Allotment' if m == 0 else f'{m // 12} yr', 9.5, GREY)
    body += text(10, 250, 'VC / AIF / FVCI shares: one year from the date of purchase by the fund, not from allotment.', 9.2, GREY, 'start', italic=True)
    return svg(640, 262, body), '<b>Figure.</b> Lock-in periods applicable under the regulations as summarised in the handbook (position at 31 July 2019). See Chapter 29 for later changes.'


def fig_offer_timeline():
    body = ''
    steps = [
        ('T − 2', 'Price band\nadvertised', NAVY),
        ('T − 1', 'Anchor\nbidding day', PURPLE),
        ('T', 'Issue\nopens', TEAL),
        ('T + 2', 'Issue closes\n(≥ 3 working\ndays)', TEAL),
        ('T + 3', 'Price fixed;\nbasis of\nallotment', NAVY),
        ('+ 4 WD', 'Allotment\n(from close)', AMBER),
        ('+ 2 WD', 'Demat credit,\nlisting', GREEN),
    ]
    x0, y = 30, 90
    body += line(x0, y, 612, y, '#b9c3d8', 3)
    for i, (d, t, col) in enumerate(steps):
        x = x0 + i * 92
        body += f'<circle cx="{x}" cy="{y}" r="9" fill="{col}" stroke="#fff" stroke-width="2"/>'
        body += text(x, y - 20, d, 11, col, 'middle', 'bold')
        rows = t.split('\n')
        body += lines(x, y + 28, rows, 9.8, INK, 'middle', 'normal', 12.5)
    body += rect(10, 158, 620, 62, '#fbf4e3', AMBER, 1, 4)
    body += lines(320, 178, ['T = Issue Opening Date. RHP is filed with the RoC at least 3 days before T.',
                              'Allotment within 4 working days of closing; demat credit within 2 working days',
                              'of allotment (2019 framework, about T+6 after closing). See Chapter 29 for today’s timeline.'], 9, INK, 'middle', 'normal', 15)
    return svg(640, 232, body), '<b>Figure.</b> Offer-period timeline under the 2019 framework (working days).'


def fig_upi():
    body = ''
    boxes = [
        (10, 20, 'Investor', 'Bid cum Application\nForm / UPI ID', NAVY),
        (170, 20, 'Intermediary', 'SCSB, syndicate\nmember, broker,\nCDP, RTA', TEAL),
        (330, 20, 'Stock exchange\nbidding system', 'Bid recorded\nin the book', NAVY),
        (490, 20, 'Registrar', 'Reconciles and\nvalidates bids', TEAL),
    ]
    for x, y, a, b, col in boxes:
        body += rect(x, y, 140, 78, '#ffffff', col, 1.5, 6)
        ra = a.split('\n')
        body += lines(x + 70, y + 20, ra, 11, col, 'middle', 'bold', 13)
        rb = b.split('\n')
        body += lines(x + 70, y + 20 + 14 * len(ra) + 4, rb, 9.4, GREY, 'middle', 'normal', 12)
    for i in range(3):
        body += arrow(10 + 140 + i * 160 + 2, 59, 10 + 160 + i * 160 - 2, 59, NAVY, 1.6)
    body += rect(10, 140, 190, 70, '#fbf4e3', AMBER, 1.2, 6)
    body += lines(105, 160, ['Investor’s bank account', 'Amount BLOCKED at bidding', '(not paid out)'], 10, INK, 'middle', 'normal', 14)
    body += rect(225, 140, 190, 70, '#f3eefa', PURPLE, 1.2, 6)
    body += lines(320, 160, ['Sponsor bank + NPCI', 'Push UPI mandate request;', 'investor approves blocking'], 10, INK, 'middle', 'normal', 14)
    body += rect(440, 140, 190, 70, '#eef6ec', GREEN, 1.2, 6)
    body += lines(535, 160, ['Public Issue Account', 'Funds moved on the Designated', 'Date for successful bids only'], 10, INK, 'middle', 'normal', 14)
    body += arrow(80, 98, 80, 138, AMBER, 1.5)
    body += arrow(395, 98, 340, 138, PURPLE, 1.5)
    body += arrow(200, 175, 223, 175, GREY, 1.4)
    body += arrow(415, 175, 438, 175, GREY, 1.4)
    body += text(320, 232, 'Unallotted or excess amounts are simply unblocked — no refund cheque is needed.', 10, NAVY, 'middle', 'bold')
    return svg(640, 245, body), '<b>Figure.</b> ASBA with UPI: money stays in the investor’s account until allotment. Anchor investors are the exception — they pay through escrow.'


def fig_promoter():
    body = ''
    body += rect(250, 8, 140, 44, NAVY, NAVY, 1, 6) + lines(320, 28, ['PROMOTER', '(person in control)'], 10.5, '#fff', 'middle', 'bold', 13)
    body += rect(20, 100, 190, 96, '#eaf3f5', TEAL, 1.4, 6)
    body += text(115, 118, 'Promoter group (individual)', 10.5, TEAL, 'middle', 'bold')
    body += lines(115, 134, ['Spouse, parents, siblings, children', 'Companies where promoter/relative', 'holds ≥ 20% and their ≥ 20% cos.', 'Firms / HUFs with ≥ 20% interest'], 9.2, INK, 'middle', 'normal', 12.5)
    body += rect(430, 100, 190, 96, '#eaf3f5', TEAL, 1.4, 6)
    body += text(525, 118, 'Promoter group (company)', 10.5, TEAL, 'middle', 'bold')
    body += lines(525, 134, ['Subsidiary or holding company', 'Cos. in which it holds ≥ 20%', 'Cos. holding ≥ 20% of it', 'Concert-party bodies ≥ 20%'], 9.2, INK, 'middle', 'normal', 12.5)
    body += rect(185, 236, 270, 90, '#fbf4e3', AMBER, 1.4, 6)
    body += text(320, 254, 'Group companies', 10.5, '#9b6a08', 'middle', 'bold')
    body += lines(320, 272, ['Other companies (not promoters or', 'subsidiaries) with related-party', 'transactions in the disclosure period,', 'plus any the board considers material'], 9, INK, 'middle', 'normal', 13)
    body += arrow(290, 53, 150, 98, NAVY) + arrow(350, 53, 490, 98, NAVY)
    body += arrow(320, 53, 320, 232, GREY, 1.2).replace('stroke-width="1.2"', 'stroke-width="1.2" stroke-dasharray="4,3"')
    return svg(640, 340, body), '<b>Figure.</b> How the three disclosure circles relate: promoter, promoter group and group companies.'


def fig_reit():
    body = ''
    body += rect(240, 10, 160, 50, NAVY, NAVY, 1, 6) + lines(320, 30, ['REIT / InvIT', '(a SEBI-registered trust)'], 10.5, '#fff', 'middle', 'bold', 13)
    body += rect(10, 10, 150, 50, '#ffffff', TEAL, 1.4, 6) + lines(85, 30, ['Sponsor(s)', 'sets up the trust'], 10, INK, 'middle', 'bold', 13)
    body += rect(480, 10, 150, 50, '#ffffff', TEAL, 1.4, 6) + lines(555, 30, ['Trustee', 'holds trust assets'], 10, INK, 'middle', 'bold', 13)
    body += rect(10, 108, 150, 58, '#ffffff', AMBER, 1.4, 6) + lines(85, 128, ['Manager', '(InvIT: investment', 'and project managers)'], 9, INK, 'middle', 'bold', 12)
    body += rect(480, 110, 150, 50, '#ffffff', GREEN, 1.4, 6) + lines(555, 130, ['Unitholders', 'public / institutions'], 10, INK, 'middle', 'bold', 13)
    body += rect(240, 130, 160, 44, '#f1f4fa', NAVY, 1.4, 6) + lines(320, 148, ['HoldCo / SPVs', '(optional layer)'], 10, INK, 'middle', 'bold', 13)
    body += rect(200, 224, 240, 44, '#f1f4fa', NAVY, 1.4, 6) + lines(320, 242, ['Income-generating real estate', '(REIT) or infrastructure projects (InvIT)'], 9.8, INK, 'middle', 'bold', 13)
    body += arrow(160, 35, 238, 35, TEAL) + arrow(478, 35, 402, 35, TEAL)
    body += arrow(85, 110, 260, 62, AMBER, 1.2)
    body += arrow(555, 110, 380, 62, GREEN, 1.2)
    body += arrow(320, 62, 320, 128, NAVY) + arrow(320, 176, 320, 222, NAVY)
    return svg(640, 280, body), '<b>Figure.</b> Typical structure of a REIT or InvIT: the trust owns assets directly or through holdcos/SPVs and distributes income to unitholders.'


def fig_routes():
    # comparison bubbles: who can issue to whom
    body = ''
    cols = [('IPO', 'Unlisted\ncompany →\npublic', NAVY), ('FPO', 'Listed\ncompany →\npublic', TEAL), ('Rights', 'Listed co. →\nexisting\nshareholders', GREEN),
            ('QIP', 'Listed co. →\nQIBs only', PURPLE), ('Preferential', 'Listed co. →\nselect\nallottees', AMBER)]
    for i, (a, b, col) in enumerate(cols):
        x = 8 + i * 126
        body += rect(x, 10, 118, 100, '#ffffff', col, 1.6, 8)
        body += f'<rect x="{x}" y="10" width="118" height="26" rx="8" fill="{col}"/><rect x="{x}" y="26" width="118" height="10" fill="{col}"/>'
        body += text(x + 59, 28, a, 12.5, '#fff', 'middle', 'bold')
        body += lines(x + 59, 54, b.split('\n'), 9, INK, 'middle', 'normal', 13)
    return svg(640, 122, body), '<b>Figure.</b> The main routes to raise equity in India, distinguished by the issuer and the audience.'
FIGS = {
    'process': fig_process, 'filing': fig_filing, 'intermediaries': fig_intermediaries, 'alloc': fig_alloc,
    'demand': fig_demand, 'lockin': fig_lockin, 'offertimeline': fig_offer_timeline, 'upi': fig_upi,
    'promoter': fig_promoter, 'reit': fig_reit, 'routes': fig_routes,
}


def render(name):
    s, cap = FIGS[name]()
    return f'<figure>{s}<figcaption>{cap}</figcaption></figure>'
