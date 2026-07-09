export const DEAL_CATEGORIES = ["All", "RPG", "Action", "Strategy", "Shooter"] as const;

export type DealCategory = Exclude<(typeof DEAL_CATEGORIES)[number], "All">;

export interface GameDeal {
  slug: string;
  title: string;
  category: DealCategory;
  description: string;
  image: string;
}

export type DealFilter = "All" | DealCategory;

export const GAME_DEALS: readonly GameDeal[] = [
  {
    slug: "elden-ring",
    title: "Elden Ring",
    category: "RPG",
    description: "Open-world action RPG from FromSoftware.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
  },
  {
    slug: "helldivers-2",
    title: "Helldivers 2",
    category: "Shooter",
    description: "Four-player co-op action on a shared galactic front.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/f11c258b04a5e3e7771c1bab60f324ebf6c6c6fb/header.jpg",
  },
  {
    slug: "baldur-s-gate-3",
    title: "Baldur's Gate 3",
    category: "RPG",
    description: "Party-based role-playing with reactive turn-based combat.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/48a2fcbda8565bb45025e98fd8ebde8a7203f6a0/header.jpg",
  },
  {
    slug: "monster-hunter-wilds",
    title: "Monster Hunter Wilds",
    category: "Action",
    description: "Large-scale hunts across a changing living world.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/header.jpg",
  },
  {
    slug: "kingdom-come-deliverance-2",
    title: "Kingdom Come: Deliverance II",
    category: "RPG",
    description: "Story-driven medieval role-playing in an open world.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1771300/header.jpg",
  },
  {
    slug: "civilization-7",
    title: "Sid Meier's Civilization VII",
    category: "Strategy",
    description: "Build an empire through distinct ages of history.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1295660/header.jpg",
  },
  {
    slug: "hades-2",
    title: "Hades II",
    category: "Action",
    description: "Fast roguelike combat rooted in Greek myth.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg",
  },
  {
    slug: "diablo-4",
    title: "Diablo IV",
    category: "RPG",
    description: "Dark action RPG with seasonal character progression.",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/80f21a42e378b93e8fbb68ee43103be8ab84891b/header.jpg",
  },
] as const;

export function filterGameDeals(filter: DealFilter, query: string): readonly GameDeal[] {
  const normalized = query.trim().toLowerCase();
  return GAME_DEALS.filter((deal) => {
    const matchesFilter = filter === "All" || deal.category === filter;
    const matchesQuery =
      !normalized ||
      deal.title.toLowerCase().includes(normalized) ||
      deal.description.toLowerCase().includes(normalized);
    return matchesFilter && matchesQuery;
  });
}
