import { NextRequest, NextResponse } from "next/server";

import { targetFor } from "../offers";

export const dynamic = "force-dynamic";

/** buildkit.store/go/<slug>[?v=<videoId>] -> storefront (302).
 *  ?v carries the source YouTube video id; logged for per-video attribution
 *  (Vercel function logs), never forwarded to the storefront. */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const v = req.nextUrl.searchParams.get("v");
  const target = targetFor(slug);
  console.log(`[go] slug=${slug}${v ? ` v=${v}` : ""} -> ${target}`);
  return NextResponse.redirect(target, 302);
}
