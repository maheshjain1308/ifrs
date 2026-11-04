# Style brief for "Corporate Finance for MBA Leaders" (all chapter authors)

Audience: MBA students (mixed backgrounds). Tone: clear, rigorous, managerial; practical and numerate.
Target length: 6,500-7,500 words per chapter (this is essential; the book must reach ~500 pages).

Each chapter is ONE markdown file at /home/user/ifrs/book/chapters/NN-slug.md (NN = two-digit chapter number). Required structure:
- First line: `# Chapter N: Title` (pandoc markdown; no YAML header).
- `## Learning Objectives` (5-6 bullets), `## Opening Vignette` (a realistic ~300-word illustrative company scenario; fictional companies only, label as illustrative).
- 6-8 main sections (`##` with numbered headings like `## N.1 ...`), with `###` subsections. Explain the concepts in depth, with intuition, formulas, common mistakes, and managerial implications.
- At least 5 fully worked numerical examples. Use `**Example N.k – title.**` and show every calculation step. CHECK ARITHMETIC CAREFULLY; recompute with Python (via Bash) before writing numbers.
- At least 3 markdown tables of data/comparison.
- `## Case Study` (~800 words, fictional firm, with 4 discussion questions).
- `## Key Takeaways` (8-10 bullets), `## Review Questions` (10), `## Problems` (8 numeric problems, each with a short answer in a final `### Answers to Selected Problems`).
- Formulas: NO LaTeX. Write formulas in plain Unicode inside fenced code blocks or inline (e.g. `PV = C / (1 + r)^t`, Σ, β, σ, √).
- Do not use images. Do not invent real statistics or quotes; use illustrative figures, and describe real-world institutions and well-known theory only in ways you are confident are accurate (cite theorists by name, e.g. Modigliani-Miller, Markowitz, Sharpe, Black-Scholes, without fake page references).
- Avoid filler and repetition; depth over padding. No chapter should end abruptly; no placeholders/TODOs.

Workflow: write the file in several chunks (e.g. cat >> with heredoc `<<'EOF'`) of ~1,500-2,500 words each so no single write is too big. When done, run `wc -w` on your file(s) and confirm each is >= 6,500 words; extend if short. Reply with one line per chapter: path and word count. Do not commit or touch git.
