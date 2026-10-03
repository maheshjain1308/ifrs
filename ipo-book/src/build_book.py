import re, sys, os, glob, time
from html import escape
import figs

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, 'IPO_book.pdf')
ONLY = sys.argv[2:]  # optional: only build these chapter files (for quick design checks)

TITLE = 'IPO — The Complete Guide to Going Public in India'

PARTS = {
    '01': ('Part I', 'Foundations', 'Why capital markets matter, what “listing” really means, and the legal architecture that every Indian public offering sits inside.'),
    '04': ('Part II', 'Can You List? Eligibility and Structure', 'Who is allowed to do an IPO, how large the offer must be, who counts as a promoter, and how lock-ins and offers for sale work.'),
    '09': ('Part III', 'Investors, Pricing and Bidding', 'Who gets shares, how the price is discovered, how bids and money move, and how the offer is stabilised after listing.'),
    '14': ('Part IV', 'The Team and the Paper', 'The intermediaries, the contracts that bind them, the offer document itself, and the liability that sits behind every statement in it.'),
    '18': ('Part V', 'The IPO Journey', 'The step-by-step process, the rules on publicity and research, governance readiness, and life as a listed company.'),
    '22': ('Part VI', 'Other Ways to Raise Capital and List', 'QIPs, rights issues, preferential issues, listed debentures, REITs and InvITs — and how to choose between them.'),
    '29': ('Part VII', 'Beyond the Handbook', 'What has changed since 2019, practice problems with worked solutions, and reference material.'),
}
APPX = {'A': 'Appendix A', 'B': 'Appendix B', 'C': 'Appendix C', 'D': 'Appendix D', 'E': 'Appendix E'}


def meta(txt):
    m = re.match(r'\s*<!--(.*?)-->', txt, re.S)
    d = {}
    if m:
        for kv in m.group(1).split(';;'):
            if '=' in kv:
                k, v = kv.split('=', 1)
                d[k.strip()] = v.strip()
        txt = txt[m.end():]
    return d, txt


def sub_figs(h):
    return re.sub(r'\{\{FIG:(\w+)\}\}', lambda m: figs.render(m.group(1)), h)


files = sorted(glob.glob(os.path.join(HERE, 'ch', '*.html')))
if ONLY:
    files = [f for f in files if any(o in os.path.basename(f) for o in ONLY)]

body, toc = [], []
chap_no = 0
for f in files:
    base = os.path.basename(f)
    prefix = base.split('_')[0]
    d, txt = meta(open(f, encoding='utf-8').read())
    if prefix in PARTS and not ONLY:
        pn, pt, pd = PARTS[prefix]
        pid = f'part-{prefix}'
        first = ''
        body.append(f'<section class="partpage" id="{pid}"{first}><div class="pn">{pn}</div><h1>{escape(pt)}</h1><div class="bar"></div><div class="pd">{escape(pd)}</div></section>')
        toc.append(('tp', f'{pn} — {pt}', pid))
    if prefix in APPX:
        label, cid = APPX[prefix], f'app-{prefix}'
    else:
        chap_no += 1
        label, cid = f'Chapter {chap_no}', f'c{chap_no}'
    txt = sub_figs(txt)
    k = [0]

    def h2(m):
        k[0] += 1
        sid = f'{cid}-s{k[0]}'
        toc.append(('ts', m.group(1), sid))
        return f'<h2 id="{sid}">{m.group(1)}</h2>'
    txt = re.sub(r'<h2>(.*?)</h2>', h2, txt)
    title = d.get('title', base)
    sub = d.get('sub', '')
    # insert toc chapter entry before its sections
    idx = max(i for i, t in enumerate(toc) if t[0] in ('tp',) or False) if False else None
    entries = [t for t in toc if t[2].startswith(cid + '-s')]
    toc[:] = [t for t in toc if not t[2].startswith(cid + '-s')]
    toc.append(('ta' if prefix in APPX else 'tc', (f'{label}: ' if prefix in APPX else f'{chap_no}. ') + title, cid))
    toc.extend(entries)
    head = (f'<div class="chap-head"><div class="chap-num">{label}</div><h1>{title}</h1>'
            + (f'<p class="chap-sub">{sub}</p>' if sub else '') + '</div>')
    body.append(f'<section class="chapter" id="{cid}">{head}{txt}</section>')

toc_html = '<div class="toc">' + ''.join(
    f'<a class="{c}" href="#{i}">{escape(t) if c != "ts" else t}</a>' for c, t, i in toc) + '</div>'

front = open(os.path.join(HERE, 'front.html'), encoding='utf-8').read().replace('{{TOC}}', toc_html)
html = f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>{TITLE}</title>
<meta name="description" content="A detailed practitioner's guide to IPOs, listing and public offerings in India.">
<link rel="stylesheet" href="style.css"></head><body class="bookmark">{front}{''.join(body)}</body></html>'''
open(os.path.join(HERE, 'book.html'), 'w', encoding='utf-8').write(html)

from weasyprint import HTML
t = time.time()
HTML(string=html, base_url=HERE).write_pdf(OUT)
print('built', OUT, f'{time.time() - t:.0f}s', 'chapters:', chap_no)
