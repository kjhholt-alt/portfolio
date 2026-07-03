import { NextResponse } from "next/server";

import { targetFor } from "./offers";

export const dynamic = "force-dynamic";

/** Bare buildkit.store/go -> the catch-all deals target. */
export async function GET() {
  const target = targetFor("deals");
  console.log(`[go] slug=deals -> ${target}`);
  return NextResponse.redirect(target, 302);
}
