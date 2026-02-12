"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Replace with your form handler (e.g., Formspree, API route, etc.)
    console.log("Form submitted:", formState);
    setSubmitted(true);
  }

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <p className="section-label mb-4">{"// "}Contact</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-stone-500 dark:text-zinc-400 text-lg max-w-2xl mb-16">
            Have a project in mind or just want to say hello? Fill out the form
            below and I&apos;ll get back to you promptly.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Form */}
          <AnimatedSection delay={0.1} className="md:col-span-3">
            {submitted ? (
              <div className="card p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold mb-2">Message Sent</h3>
                <p className="text-stone-500 dark:text-zinc-400">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800
                               bg-white dark:bg-zinc-900/70 text-stone-900 dark:text-zinc-100
                               placeholder:text-stone-400 dark:placeholder:text-zinc-600
                               focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-colors font-body"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800
                               bg-white dark:bg-zinc-900/70 text-stone-900 dark:text-zinc-100
                               placeholder:text-stone-400 dark:placeholder:text-zinc-600
                               focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-colors font-body"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800
                               bg-white dark:bg-zinc-900/70 text-stone-900 dark:text-zinc-100
                               placeholder:text-stone-400 dark:placeholder:text-zinc-600
                               focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20
                               transition-colors font-body resize-none"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Sidebar info */}
          <AnimatedSection delay={0.2} className="md:col-span-2">
            <div className="space-y-8">
              {/* Availability */}
              <div className="card p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Available for projects
                  </span>
                </div>
                <p className="text-sm text-stone-500 dark:text-zinc-500">
                  Currently accepting new clients. Typical response time is within 24 hours.
                </p>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-sm font-display font-semibold uppercase tracking-wider text-stone-400 dark:text-zinc-600">
                  Connect
                </h3>

                <a
                  href="https://github.com/kjhholt-alt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 dark:border-zinc-800
                             hover:border-accent/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-zinc-800 flex items-center justify-center
                                  group-hover:bg-accent/10 transition-colors">
                    <svg className="w-5 h-5 text-stone-600 dark:text-zinc-400 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-accent transition-colors">GitHub</p>
                    <p className="text-xs text-stone-400 dark:text-zinc-600 font-mono">kjhholt-alt</p>
                  </div>
                </a>

                <a
                  href="mailto:kjh.holt@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl border border-stone-200 dark:border-zinc-800
                             hover:border-accent/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-zinc-800 flex items-center justify-center
                                  group-hover:bg-accent/10 transition-colors">
                    <svg className="w-5 h-5 text-stone-600 dark:text-zinc-400 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium group-hover:text-accent transition-colors">Email</p>
                    <p className="text-xs text-stone-400 dark:text-zinc-600 font-mono">kjh.holt@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
