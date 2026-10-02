"""Writes one-page placeholder PDFs into storage/ebooks/. Replace them with your real ebooks."""
import pathlib

BOOKS = {
    "ifrs-pocket-guide.pdf": "The IFRS Pocket Guide",
    "ifrs-15-workbook.pdf": "IFRS 15 Revenue Workbook",
    "ifrs-16-leases.pdf": "IFRS 16 Leases Made Simple",
}

def pdf(title: str) -> bytes:
    text = f"BT /F1 28 Tf 72 700 Td ({title}) Tj /F1 14 Tf 0 -40 Td (Placeholder - replace with your ebook PDF.) Tj ET"
    objs = [
        "<< /Type /Catalog /Pages 2 0 R >>",
        "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
        f"<< /Length {len(text)} >>\nstream\n{text}\nendstream",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    ]
    out, offsets = b"%PDF-1.4\n", []
    for i, body in enumerate(objs, 1):
        offsets.append(len(out))
        out += f"{i} 0 obj\n{body}\nendobj\n".encode()
    xref = len(out)
    out += f"xref\n0 {len(objs) + 1}\n0000000000 65535 f \n".encode()
    out += "".join(f"{o:010d} 00000 n \n" for o in offsets).encode()
    out += f"trailer\n<< /Size {len(objs) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode()
    return out

root = pathlib.Path(__file__).resolve().parent.parent / "storage" / "ebooks"
root.mkdir(parents=True, exist_ok=True)
for name, title in BOOKS.items():
    (root / name).write_bytes(pdf(title))
    print("wrote", root / name)
