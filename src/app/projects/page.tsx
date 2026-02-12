"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, categories, type CategoryId } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <p className="section-label mb-4">{"// "}Projects</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Things I&apos;ve Built
          </h1>
          <p className="text-stone-500 dark:text-zinc-400 text-lg max-w-2xl mb-12">
            A collection of AI-powered tools, web applications, and developer
            utilities. Each project tackles a real problem with clean code.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryId)}
                className={`px-4 py-2 text-sm font-mono rounded-lg border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-accent text-zinc-950 border-accent"
                    : "border-stone-200 dark:border-zinc-800 text-stone-500 dark:text-zinc-500 hover:border-accent/40 hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-stone-400 dark:text-zinc-600">
            <p className="font-mono text-sm">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
