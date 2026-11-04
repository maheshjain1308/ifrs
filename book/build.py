import glob, re, subprocess, os, sys, json
B='/home/user/ifrs/book'
parts={1:"Part I — Foundations",5:"Part II — Investment Decisions",9:"Part III — Risk, Return and the Cost of Capital",13:"Part IV — Financing and Payout Policy",18:"Part V — Derivatives and Risk Management",21:"Part VI — Corporate Transactions and Strategy"}
files=sorted(glob.glob(B+'/chapters/*.md'))
titles=[]
body=''
for f in files:
    t=open(f).read().strip()
    m=re.match(r'# (.*)',t); title=m.group(1)
    mm=re.match(r'Chapter (\d+)',title)
    if mm and int(mm.group(1)) in parts:
        n=int(mm.group(1))
        body+=f'\n\n<div class="part-page"><h1>{parts[n]}</h1></div>\n\n'
        titles.append(('part',parts[n]))
    if title.startswith('Appendix') and not any(k=='partapp' for k,_ in titles):
        body+='\n\n<div class="part-page"><h1>Appendices</h1></div>\n\n'; titles.append(('partapp','Appendices'))
    titles.append(('ch',title))
    body+='\n\n'+t+'\n'
open(B+'/build/body.md','w').write(body)
subprocess.run(['pandoc','-f','markdown+pipe_tables+smart','-t','html',B+'/build/body.md','-o',B+'/build/body.html'],check=True)
bodyhtml=open(B+'/build/body.html').read()
pages=json.load(open(B+'/build/pages.json')) if os.path.exists(B+'/build/pages.json') else {}
def toc():
    r='<div class="toc"><h1>Contents</h1>'
    for k,t in titles:
        if k in('part','partapp'): r+=f'<div class="part">{t}</div>'
        else: r+=f'<div class="row"><span>{t}</span><span class="t"></span><span>{pages.get(t,"")}</span></div>'
    return r+'</div>'
cover='''<div class="cover"><h1>Corporate Finance<br>for MBA Leaders</h1><div class="sub">Valuation, Financing, Risk and Corporate Strategy</div><div class="auth">A Comprehensive Textbook for MBA Students</div></div>
<div class="front"><h1>About This Book</h1><p>This textbook develops the core ideas of corporate finance for MBA students and practising managers: how firms value investments, finance them, manage risk, and create or destroy value through major transactions. Each chapter contains worked examples, a case study, review questions and problems with selected answers. All companies, figures and cases are fictional and illustrative unless stated; they are for teaching only and are not investment advice. Figures were computed by the authors' working and should be verified before use in professional decisions.</p><p>Chapters are organised in six parts: Foundations; Investment Decisions; Risk, Return and the Cost of Capital; Financing and Payout Policy; Derivatives and Risk Management; and Corporate Transactions and Strategy. Appendices provide a formula sheet, a glossary and a study guide.</p></div>'''
html=f'<!doctype html><html><head><meta charset="utf-8"><style>{open(B+"/style.css").read()}</style></head><body>{cover}{toc()}{bodyhtml}</body></html>'
open(B+'/build/book.html','w').write(html)
json.dump([t for k,t in titles if k=='ch'],open(B+'/build/titles.json','w'))
