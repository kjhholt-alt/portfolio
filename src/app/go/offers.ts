/**
 * /go/<slug> — central offer map for the GambaTime deals links.
 *
 * Every GambaTime video description carries buildkit.store/go/<game-slug>
 * (stamped by clipforge/monetize.py in operator-suite). This file is the ONE
 * place the storefront + affiliate tag live, so flipping either updates
 * every link in every live video instantly — no video edits, no quota.
 *
 * REVENUE FLIP (Kruz gate): set IGR to the referral tag from the Instant
 * Gaming affiliate dashboard (instant-gaming.com/en/partnership/). Empty tag
 * = links are honest store links that earn nothing yet.
 */
export const IGR = "";

const IG = "https://www.instant-gaming.com/en";

// clipforge slug (see clipforge/monetize.py slug()) -> Instant Gaming search
// query. Search pages beat hand-curated product URLs here: they never 404,
// they cover preorders/editions, and IG's affiliate tag works on any page.
export const OFFERS: Record<string, string> = {
  "gta-6": "gta 6",
  "path-of-exile-2": "path of exile 2",
  "marvel-rivals": "marvel rivals",
  "elden-ring": "elden ring",
  "helldivers-2": "helldivers 2",
  "hades-2": "hades 2",
  fortnite: "fortnite",
  valorant: "valorant",
  "call-of-duty": "call of duty",
  "baldur-s-gate-3": "baldurs gate 3",
  minecraft: "minecraft",
  "league-of-legends": "league of legends",
  "counter-strike-2": "counter strike 2",
  palworld: "palworld",
  "diablo-4": "diablo 4",
  "arc-raiders": "arc raiders",
  "battlefield-6": "battlefield 6",
  "escape-from-tarkov": "escape from tarkov",
  "hollow-knight-silksong": "hollow knight silksong",
  "monster-hunter-wilds": "monster hunter wilds",
  "borderlands-4": "borderlands 4",
  "kingdom-come-deliverance-2": "kingdom come deliverance 2",
  "ghost-of-yotei": "ghost of yotei",
  "death-stranding-2": "death stranding 2",
  "slay-the-spire-2": "slay the spire 2",
  "civilization-7": "civilization 7",
  "hearts-of-iron-4": "hearts of iron 4",
  fable: "fable",
  "persona-6": "persona 6",
  halo: "halo",
};

/** Resolve a slug to its storefront URL, affiliate-tagged when IGR is set.
 *  Unknown slugs (incl. the catch-all "deals") land on the IG homepage. */
export function targetFor(slug: string): string {
  const q = OFFERS[slug];
  const base = q ? `${IG}/search/?query=${encodeURIComponent(q)}` : `${IG}/`;
  if (!IGR) return base;
  return `${base}${base.includes("?") ? "&" : "?"}igr=${encodeURIComponent(IGR)}`;
}
