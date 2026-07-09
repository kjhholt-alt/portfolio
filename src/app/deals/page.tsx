import type { Metadata } from "next";
import Image from "next/image";
import { GameDealsGrid } from "@/components/GameDealsGrid";

export const metadata: Metadata = {
  title: "GambaTime Game Deals",
  description:
    "Current PC game deals selected by GambaTime, with direct links to trusted storefront listings.",
  alternates: { canonical: "https://buildkit.store/deals" },
  openGraph: {
    title: "GambaTime Game Deals",
    description: "Find current prices on the games GambaTime is covering.",
    type: "website",
    url: "https://buildkit.store/deals",
  },
};

export default function DealsPage() {
  return (
    <div className="bg-stone-50 dark:bg-[#07070a]">
      <section className="relative flex h-[62vh] min-h-[460px] max-h-[620px] items-end overflow-hidden border-b border-zinc-800 pt-16">
        <Image
          src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2246340/library_hero.jpg"
          alt="Monster Hunter Wilds landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 text-white md:pb-16">
          <p className="font-mono text-xs uppercase text-amber-300">
            Curated by GambaTime
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-5xl">
            GambaTime Game Deals
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
            Current storefront prices for the games behind the news, guides, and debates on
            GambaTime.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#current-deals"
              className="inline-flex h-11 items-center rounded-md bg-amber-400 px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-300"
            >
              Browse game deals
            </a>
            <a
              href="https://www.youtube.com/@clipforgenews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-md border border-white/50 px-5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Watch GambaTime
            </a>
          </div>
        </div>
      </section>

      <section id="current-deals" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <GameDealsGrid />
      </section>

      <section className="border-y border-stone-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="max-w-3xl text-sm leading-6 text-stone-600 dark:text-zinc-400">
            <strong className="text-stone-900 dark:text-zinc-100">Affiliate disclosure:</strong>{" "}
            these links may earn GambaTime a commission at no additional cost to you. Prices
            and availability are controlled by the storefront and can change at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
