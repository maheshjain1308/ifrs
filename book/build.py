import glob, re, subprocess, os, sys, json
V=sys.argv[1] if len(sys.argv)>1 else '1'
R='/home/user/ifrs/book'
CFG={
'1':dict(ch=R+'/chapters',title='Corporate Finance<br>for MBA Leaders',vol='Volume 1',sub='Valuation, Financing, Risk and Corporate Strategy',
  parts={1:"Part I — Foundations",5:"Part II — Investment Decisions",9:"Part III — Risk, Return and the Cost of Capital",13:"Part IV — Financing and Payout Policy",18:"Part V — Derivatives and Risk Management",21:"Part VI — Corporate Transactions and Strategy"},
  about="This textbook develops the core ideas of corporate finance for MBA students and practising managers: how firms value investments, finance them, manage risk, and create or destroy value through major transactions. Each chapter contains worked examples, a case study, review questions and problems with selected answers."),
'2':dict(ch=R+'/vol2/chapters',title='Advanced Corporate Finance<br>for MBA Leaders',vol='Volume 2',sub='Advanced Valuation, Credit, Governance, Private Markets and Transactions',
  parts={1:"Part I — Advanced Valuation and Real Options",5:"Part II — Credit and Fixed Income",9:"Part III — Governance, Compensation and Behavior",13:"Part IV — Private Markets and Real Assets",17:"Part V — Advanced Transactions",21:"Part VI — Strategy, Tax, Climate and Quantitative Methods"},
  about="Volume 2 assumes the material of Volume 1 and goes deeper: advanced valuation and real options, credit and structured finance, governance and incentives, private markets, complex transactions, tax, climate finance and quantitative methods."),
'3':dict(ch=R+'/vol3/chapters',title='Corporate Finance<br>Casebook and Companion',vol='Volume 3',sub='Cases, Modeling Guides, Problem Sets and Instructor Materials',
  parts={1:"Part I — Cases in Valuation and Investment",7:"Part II — Cases in Financing",12:"Part III — Cases in Transactions and Restructuring",18:"Part IV — Modeling Companion",22:"Part V — Practice and Instructor Materials"},
  about="Volume 3 accompanies Volumes 1 and 2 with full-length cases and teaching notes, executed modeling guides in Excel and Python, graded problem sets with full solutions, and instructor materials including an examination bank."),
}[V]
BD=R+'/build/v'+V; os.makedirs(BD,exist_ok=True)
parts=CFG['parts']
files=sorted(glob.glob(CFG['ch']+'/*.md'))
titles=[];body='';seen_app=False
for f in files:
    t=open(f).read().strip()
    title=re.match(r'# (.*)',t).group(1)
    mm=re.match(r'Chapter (\d+)',title)
    if mm and int(mm.group(1)) in parts:
        n=int(mm.group(1))
        body+=f'\n\n<div class="part-page"><h1>{parts[n]}</h1></div>\n\n'; titles.append(('part',parts[n]))
    if title.startswith('Appendix') and not seen_app:
        seen_app=True; body+='\n\n<div class="part-page"><h1>Appendices</h1></div>\n\n'; titles.append(('partapp','Appendices'))
    titles.append(('ch',title)); body+='\n\n'+t+'\n'
open(BD+'/body.md','w').write(body)
subprocess.run(['pandoc','-f','markdown+pipe_tables+smart','-t','html',BD+'/body.md','-o',BD+'/body.html'],check=True)
bodyhtml=open(BD+'/body.html').read()
pages=json.load(open(BD+'/pages.json')) if os.path.exists(BD+'/pages.json') else {}
def toc():
    r='<div class="toc"><h1>Contents</h1>'
    for k,t in titles:
        if k in('part','partapp'): r+=f'<div class="part">{t}</div>'
        else: r+=f'<div class="row"><span>{t}</span><span class="t"></span><span>{pages.get(t,"")}</span></div>'
    return r+'</div>'
cover=f'''<div class="cover"><h1>{CFG["title"]}</h1><div class="sub">{CFG["sub"]}</div><div class="auth">{CFG["vol"]} of a Three-Volume Textbook for MBA Students</div></div>
<div class="front"><h1>About This Volume</h1><p>{CFG["about"]} All companies, figures and cases are fictional and illustrative unless stated; they are for teaching only and are not investment, legal or tax advice. Figures were computed by the authors' working and should be verified before use in professional decisions; legal and regulatory descriptions are general and should be checked against current rules.</p></div>'''
html=f'<!doctype html><html><head><meta charset="utf-8"><style>{open(R+"/style.css").read()}</style></head><body>{cover}{toc()}{bodyhtml}</body></html>'
open(BD+'/book.html','w').write(html)
json.dump([t for k,t in titles if k=='ch'],open(BD+'/titles.json','w'))
