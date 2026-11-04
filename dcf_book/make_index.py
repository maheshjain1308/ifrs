import subprocess, re, sys, os
SP='/tmp/claude-0/-home-user-ifrs/2afc02f1-5671-54cd-99b8-75fda701999e/scratchpad/book'
pdf=SP+'/book.pdf'
n=int(re.search(r'Pages:\s+(\d+)',subprocess.run(['pdfinfo',pdf],capture_output=True,text=True).stdout).group(1))
pages=[]
for p in range(1,n+1):
    t=subprocess.run(['pdftotext','-f',str(p),'-l',str(p),pdf,'-'],capture_output=True,text=True).stdout
    pages.append(re.sub(r'\s+',' ',t.replace('­','')).lower())
# find where index starts
start=None
for i,t in enumerate(pages):
    if 'index of terms' in t and 'hdmk' in t: start=i
if start is None:
    for i,t in enumerate(pages):
        if 'hdmk' in t and 'index of terms' in t: start=i
# first pass has no index; search all pages after TOC
toc_end=0
for i,t in enumerate(pages[:12]):
    if 'contents' in t: toc_end=i
terms=open('index_terms.txt').read().strip().split('\n')
out=['# Index of Terms {.unnumbered}\n','Page numbers refer to this volume. Entries appearing on many pages are shown with their principal pages.\n']
cur=''
entries=[]
for line in terms:
    if not line.strip(): continue
    label,_,pats=line.partition('|')
    pats=[p.strip().lower() for p in (pats or label).split(';')]
    found=[]
    for i,t in enumerate(pages):
        if i<=toc_end+1: continue
        if start is not None and i>=start: break
        if any(p in t for p in pats): found.append(i+1)
    if not found: continue
    # compress
    if len(found)>8:
        # choose pages where term appears at least... keep first 8 spaced
        step=max(1,len(found)//8); found=found[::step][:8]
    entries.append((label.strip(),found))
entries.sort(key=lambda e:e[0].lower())
html=[]
letter=''
for label,found in entries:
    L=label[0].upper()
    if L!=letter:
        letter=L; html.append(f'\n<h3 class="idx-letter">{L}</h3>\n')
    html.append(f'<div class="idx"><span>{label}</span><span class="ipg">{", ".join(map(str,found))}</span></div>')
out.append('<div class="index">'+'\n'.join(html)+'</div>')
open('chapters/99_index.md','w').write('\n'.join(out)+'\n')
print(len(entries),'entries')
