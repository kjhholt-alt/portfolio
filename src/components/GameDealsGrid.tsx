"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  DEAL_CATEGORIES,
  filterGameDeals,
  type DealFilter,
} from "@/app/deals/catalog";

export function GameDealsGrid() {
  const [filter, setFilter] = useState<DealFilter>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => filterGameDeals(filter, query), [filter, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 border-b border-stone-200 pb-6 dark:border-zinc-800 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase text-accent">Current picks</p>
          <h2 className="mt-2 text-2xl font-bold">Find your next game</h2>
        </div>
        <label className="block w-full md:max-w-xs">
          <span className="sr-only">Search game deals</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search games"
            className="h-11 w-full rounded-md border border-stone-300 bg-white px-4 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-accent dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
          />
        </label>
      </div>

      <div
        className="mb-7 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Deal categories"
      >
        {DEAL_CATEGORIES.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(category)}
              className={`h-9 rounded-md border px-4 text-sm font-medium transition-colors ${
                selected
                  ? "border-accent bg-accent text-zinc-950"
                  : "border-stone-300 text-stone-600 hover:border-accent/60 hover:text-stone-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {visible.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((deal) => (
            <article
              key={deal.slug}
              className="overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-[460/215] bg-zinc-900">
                <Image
                  src={deal.image}
                  alt={`${deal.title} key art`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex min-h-48 flex-col p-4">
                <p className="font-mono text-[11px] uppercase text-accent">
                  {deal.category}
                </p>
                <h3 className="mt-2 text-base font-bold">{deal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-zinc-400">
                  {deal.description}
                </p>
                <a
                  href={`/go/${deal.slug}?src=deals-hub`}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="mt-auto inline-flex h-10 items-center justify-between rounded-md bg-stone-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-zinc-950 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-accent"
                >
                  Check current deal <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="border-y border-stone-200 py-16 text-center dark:border-zinc-800">
          <p className="text-stone-600 dark:text-zinc-400">No games match that search.</p>
          <button
            type="button"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
            className="mt-3 text-sm font-semibold text-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
