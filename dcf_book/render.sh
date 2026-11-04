#!/bin/bash
SP=/tmp/claude-0/-home-user-ifrs/2afc02f1-5671-54cd-99b8-75fda701999e/scratchpad/book
cd /home/user/ifrs/dcf_book
CH=$(cat $SP/chrome_path)
rm -f $SP/pages.txt
/usr/bin/python3 build.py || exit 1
$CH --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf=$SP/book.pdf file://$SP/book.html >/dev/null 2>&1
N=$(pdfinfo $SP/book.pdf | awk '/Pages/{print $2}')
: > $SP/pages.txt
for p in $(seq 1 $N); do
  pdftotext -f $p -l $p $SP/book.pdf - 2>/dev/null | grep -o 'HDMK[0-9]*X' | sed 's/HDMK\([0-9]*\)X/\1/' | while read k; do printf '%s\t%s\n' "$k" "$p" >> $SP/pages.txt; done
done
/usr/bin/python3 build.py || exit 1
$CH --headless --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf=$SP/book.pdf file://$SP/book.html >/dev/null 2>&1
pdfinfo $SP/book.pdf | grep Pages
