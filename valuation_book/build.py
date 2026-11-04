import markdown, re, glob, subprocess, sys, os
SP=os.environ.get('SP','/tmp/claude-0/-home-user-ifrs/2afc02f1-5671-54cd-99b8-75fda701999e/scratchpad/vb')
files=sorted(glob.glob('chapters/*.md'))
CSS=open('book.css').read()
def sup(seg):
    seg=re.sub(r'\^\(([^)]*)\)',lambda m:'<sup>'+m.group(1)+'</sup>',seg)
    seg=re.sub(r'\^([A-Za-z0-9.\u2212]+)',lambda m:'<sup>'+m.group(1)+'</sup>',seg)
    return seg
def prep(t):
    parts=t.split('`')
    t='`'.join(sup(p) if i%2==0 else p for i,p in enumerate(parts))
    lines=t.split('\n'); out=[]
    for l in lines:
        if re.match(r'\s*([-*]|\d+\.)\s',l) and out and out[-1].strip() and not re.match(r'\s*([-*]|\d+\.)\s',out[-1]) and not out[-1].lstrip().startswith('|'):
            out.append('')
        out.append(l)
    return '\n'.join(out)
body=''
heads=[]
PB='<div class="pagebreak"></div>'
for fi,f in enumerate(files):
    t=prep(open(f).read())
    if fi==0:
        k=t.index(PB)+len(PB); t=t[:k]+t[k:].replace(PB,'')
    else:
        t=t.replace(PB,'')
    h=markdown.markdown(t,extensions=['tables','sane_lists','attr_list','md_in_html','nl2br'])
    body+=h+'\n'
# collect chapter headings
def slug(i): return f'h{i}'
cnt=[0]
def repl(m):
    cls=m.group(1) or ''; txt=m.group(3)
    if 'tp-title' in cls:
        return m.group(0)
    cnt[0]+=1; i=cnt[0]
    clean=re.sub('<[^>]+>','',txt)
    heads.append((i,clean,'part' if 'part' in cls else 'ch'))
    return f'<h1{m.group(1) or ""} id="h{i}">{txt}<span class="mk">HDMK{i}X</span></h1>'
body=re.sub(r'<h1( class="[^"]*")?( id="[^"]*")?>(.*?)</h1>',repl,body)
toc_pages=None
if os.path.exists(SP+'/pages.txt'):
    toc_pages=dict(l.rstrip('\n').split('\t') for l in open(SP+'/pages.txt'))
toc='<div class="toc"><h1 class="unnumbered notoc">Contents</h1>'
for i,txt,kind in heads:
    pg=toc_pages.get(str(i),'') if toc_pages else ''
    toc+=f'<div class="toc-{kind}"><span>{txt}</span><span class="pg">{pg}</span></div>'
toc+='</div><div class="pagebreak"></div>'
# insert TOC after front matter (before first Part)
idx=body.index('<h1 class="part"')
# front matter includes Preface & How to use; keep TOC right after title page instead
tp_end=body.index('<div class="pagebreak"></div>')+len('<div class="pagebreak"></div>')
body=body[:tp_end]+toc+body[tp_end:]
html='<html><head><meta charset="utf-8"><title>Business Valuation</title><style>'+CSS+'</style></head><body>'+body+'</body></html>'
open(SP+'/book.html','w').write(html)
open(SP+'/heads.tsv','w').write('\n'.join(f'{i}\t{t}\t{k}' for i,t,k in heads))
