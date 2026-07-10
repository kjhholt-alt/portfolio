import assert from "node:assert/strict";
import test from "node:test";

import { filterGameDeals, GAME_DEALS } from "../src/app/deals/catalog.ts";
import { IGR, OFFERS, sourceTag, targetFor } from "../src/app/go/offers.ts";

test("every deal card resolves through a configured affiliate offer", () => {
  assert.ok(GAME_DEALS.length >= 8);
  const slugs = new Set();
  for (const deal of GAME_DEALS) {
    assert.equal(typeof OFFERS[deal.slug], "string", `missing offer for ${deal.slug}`);
    assert.ok(!slugs.has(deal.slug), `duplicate deal slug ${deal.slug}`);
    assert.match(deal.image, /^https:\/\/shared\.akamai\.steamstatic\.com\//);
    slugs.add(deal.slug);
  }
});

test("affiliate targets retain the approved Instant Gaming tag", () => {
  assert.equal(IGR, "freegames4u");
  const target = new URL(targetFor("elden-ring"));
  assert.equal(target.hostname, "www.instant-gaming.com");
  assert.equal(target.searchParams.get("igr"), IGR);
  assert.match(target.searchParams.get("query") ?? "", /elden ring/i);
});

test("unknown game slugs still fail over to the tagged storefront", () => {
  const target = new URL(targetFor("not-in-the-map"));
  assert.equal(target.pathname, "/en/");
  assert.equal(target.searchParams.get("igr"), IGR);
});

test("referral sources are bounded before entering click receipts", () => {
  assert.equal(sourceTag("buildkit-play_nav!?"), "buildkit-play_nav");
  assert.equal(sourceTag("x".repeat(60)), "x".repeat(40));
  assert.equal(sourceTag("!!!"), undefined);
  assert.equal(sourceTag(null), undefined);
});

test("deal search and category filters compose", () => {
  assert.deepEqual(
    filterGameDeals("Strategy", "civilization").map((deal) => deal.slug),
    ["civilization-7"],
  );
  assert.equal(filterGameDeals("Shooter", "role-playing").length, 0);
  assert.equal(filterGameDeals("All", "greek myth")[0]?.slug, "hades-2");
});
