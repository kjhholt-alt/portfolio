"use client";

/**
 * /book — Direct Sales batch-1 booking page.
 *
 * If CAL_USERNAME is set, embeds Cal.com inline. Otherwise renders a
 * "send me 2-3 times that work" fallback form (formsubmit.co → kjh.holt@gmail.com).
 *
 * Linked from `direct-sales/follow-up-templates.md` ([BOOK_URL]).
 *
 * To wire up Cal.com:
 *   1. Sign up at https://cal.com with kjh.holt@gmail.com
 *   2. Pick a username + create a "15-min call" event type
 *   3. Set CAL_USERNAME below to your username (e.g. "kruz")
 *   4. Commit + push — Vercel auto-redeploys
 */

import { useState, type FormEvent } from "react";
import Link from "next/link";

const CAL_USERNAME = ""; // <-- set to your Cal.com username when ready
const CAL_EVENT = "15min";

export default function BookPage() {
  const calLink = CAL_USERNAME ? `https://cal.com/${CAL_USERNAME}/${CAL_EVENT}` : "";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    times: "",
    context: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/kjh.holt@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[Book a call] ${formState.name || formState.email}`,
          ...formState,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Email kjh.holt@gmail.com directly.");
      }
    } catch {
      setError("Something went wrong. Email kjh.holt@gmail.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="section-label mb-4">{"// "}Book a 15-min call</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Let&apos;s talk.
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 mb-10">
          Pick a time below — or send 2-3 windows that work and I&apos;ll send a
          Google Meet link.
        </p>

        {calLink ? (
          // Cal.com inline embed (lightweight iframe, no SDK needed)
          <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
            <iframe
              src={`${calLink}?embed=true&theme=auto`}
              title="Book a 15-min call with Kruz"
              className="w-full h-[700px]"
              loading="lazy"
            />
          </div>
        ) : submitted ? (
          <div className="rounded-2xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-8">
            <h2 className="text-2xl font-semibold mb-2">Got it.</h2>
            <p className="text-stone-700 dark:text-stone-300">
              I&apos;ll reply within 24 hours with a Google Meet link for one of
              your suggested times. If you don&apos;t hear back, email
              kjh.holt@gmail.com directly.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 text-sm underline text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
            >
              ← Back home
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="times"
                className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300"
              >
                2-3 times that work for you (with timezone)
              </label>
              <textarea
                id="times"
                required
                rows={3}
                placeholder="e.g. Tue 10am CT, Wed 2pm CT, Thu 9am CT"
                value={formState.times}
                onChange={(e) =>
                  setFormState({ ...formState, times: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="context"
                className="block text-sm font-medium mb-2 text-stone-700 dark:text-stone-300"
              >
                What did I email you about? (optional, helps me prep)
              </label>
              <textarea
                id="context"
                rows={3}
                value={formState.context}
                onChange={(e) =>
                  setFormState({ ...formState, context: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3 rounded-lg bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-medium hover:opacity-90 disabled:opacity-50 transition"
            >
              {submitting ? "Sending..." : "Send"}
            </button>

            <p className="text-xs text-stone-500 dark:text-stone-500 text-center">
              No calendar required — I&apos;ll reply with a Meet link within 24h.
            </p>
          </form>
        )}

        <div className="mt-10 text-center text-sm text-stone-500 dark:text-stone-500">
          Or email me directly:{" "}
          <a
            href="mailto:kjh.holt@gmail.com"
            className="underline hover:text-stone-900 dark:hover:text-stone-100"
          >
            kjh.holt@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
