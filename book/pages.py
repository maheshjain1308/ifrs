import json,re
B='/home/user/ifrs/book/build'
titles=json.load(open(B+'/titles.json'))
from pypdf import PdfReader
r=PdfReader(B+'/book.pdf'); n=len(r.pages)
norm=lambda s:re.sub(r'\s+',' ',s)
txt=[norm(p.extract_text() or '') for p in r.pages]
start=next(i for i,t in enumerate(txt) if t.strip().startswith('Part I')) if any(t.strip().startswith('Part I') for t in txt) else 6
out={};cur=start
for t in titles:
    key=norm(t)[:35]
    for i in range(cur,n):
        if key in txt[i][:250]:
            out[t]=i+1;cur=i;break
json.dump(out,open(B+'/pages.json','w')); print(n,'pages;',len(out),'of',len(titles),'located')
