import { after, NextRequest, NextResponse } from "next/server";

import { targetFor } from "../offers";

export const dynamic = "force-dynamic";

function recordAffiliateRedirect(slug: string, videoId: string | null, source?: string) {
  const query = new URLSearchParams();
  if (videoId) query.set("v", videoId);
  if (source) query.set("src", source);
  const suffix = query.size ? `?${query.toString()}` : "";
  after(async () => {
    try {
      await fetch("https://admin.buildkit.store/api/collect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "portfolio",
          path: `/go/click/${slug}${suffix}`,
        }),
        signal: AbortSignal.timeout(1500),
      });
    } catch {
      // Attribution is fail-open; it must never delay or block the buyer.
    }
  });
}

/** buildkit.store/go/<slug>[?v=<videoId>] -> storefront (302).
 *  ?v carries the source YouTube video id; logged for per-video attribution
 *  (Vercel function logs), never forwarded to the storefront. */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (slug === "deals") {
    console.log("[go] slug=deals -> /deals");
    return NextResponse.redirect(new URL("/deals", req.url), 302);
  }
  const v = req.nextUrl.searchParams.get("v");
  const source = req.nextUrl.searchParams.get("src")
    ?.replace(/[^a-z0-9_-]/gi, "")
    .slice(0, 40);
  const target = targetFor(slug);
  recordAffiliateRedirect(slug, v, source);
  console.log(
    `[go] slug=${slug}${v ? ` v=${v}` : ""}${source ? ` src=${source}` : ""} -> ${target}`,
  );
  return NextResponse.redirect(target, 302);
}
