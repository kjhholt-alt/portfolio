"use client";

import { AnimatedSection } from "./AnimatedSection";

const stack = [
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛" },
  { name: "Node.js", icon: "⬢" },
  { name: "Python", icon: "🐍" },
  { name: "Tailwind CSS", icon: "◇" },
  { name: "OpenAI API", icon: "◈" },
  { name: "Microsoft Graph", icon: "◻" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Vercel", icon: "▲" },
];

export function TechStack() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="section-label mb-4">{"// "}Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Tools I Work With
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {stack.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col items-center gap-2.5 p-5 rounded-xl
                           border border-stone-200 dark:border-zinc-800/80
                           bg-white dark:bg-zinc-900/50
                           hover:border-accent/30 hover:bg-accent-muted
                           transition-all duration-200"
              >
                <span className="text-xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
                  {item.icon}
                </span>
                <span className="text-xs font-mono text-stone-500 dark:text-zinc-500 group-hover:text-accent transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
