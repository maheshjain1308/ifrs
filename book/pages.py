import json,subprocess,re
B='/home/user/ifrs/book/build'
titles=json.load(open(B+'/titles.json'))
from pypdf import PdfReader
r=PdfReader(B+'/book.pdf'); n=len(r.pages)
txt=[(p.extract_text() or '') for p in r.pages]
out={}
start=0
for t in titles:
    for i in range(max(start,4),n):
        if t in txt[i] and txt[i].strip().startswith(t[:15]) or (t in txt[i][:200] and i>3):
            out[t]=i+1; start=i; break
json.dump(out,open(B+'/pages.json','w')); print(n,'pages;',len(out),'of',len(titles),'titles located')
