import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse, type NextRequest } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getProduct } from "@/lib/catalog";
import { ownsProduct } from "@/lib/purchases";

export async function GET(_req: NextRequest, ctx: RouteContext<"/api/download/[id]">) {
  const { id } = await ctx.params;
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const product = getProduct(id);
  if (!product || product.type !== "ebook") return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (!(await ownsProduct(user.id, product.id))) {
    return NextResponse.json({ error: "You haven't purchased this ebook" }, { status: 403 });
  }

  try {
    const file = await readFile(path.join(process.cwd(), "storage", "ebooks", path.basename(product.file)));
    return new Response(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${product.file}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "File missing on server" }, { status: 500 });
  }
}
