import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Bare buildkit.store/go -> the owned deals hub. */
export async function GET(req: NextRequest) {
  console.log("[go] slug=deals -> /deals");
  return NextResponse.redirect(new URL("/deals", req.url), 302);
}
