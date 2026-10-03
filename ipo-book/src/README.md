# Rebuilding the IPO book

Sources for `IPO_The_Complete_Guide_to_Going_Public_in_India.pdf`.

- `ch/*.html` — one file per chapter or appendix (edit the text here)
- `front.html` — cover, title page, legal notes, preface and contents
- `style.css` — page layout and typography
- `figs.py` — diagram generator (inline SVG)
- `build_book.py` — assembles everything into the PDF

```bash
pip install weasyprint
python build_book.py ../IPO_The_Complete_Guide_to_Going_Public_in_India.pdf
```

Chapter numbers, the table of contents and page numbers are generated automatically.
