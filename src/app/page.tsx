"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { TechStack } from "@/components/TechStack";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured).slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50 dark:to-[#07070a]" />

        {/* Decorative accent orb */}
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.04]
                     bg-gradient-to-br from-accent to-accent-light blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="section-label mb-6">Full-Stack Developer &amp; AI Engineer</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95]"
          >
            Kruz
            <br />
            <span className="gradient-text">Holt</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-6 text-lg md:text-xl text-stone-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            I build <strong className="text-stone-800 dark:text-zinc-200 font-semibold">AI-powered applications</strong> and
            polished web experiences. From intelligent agents to production-ready client sites — I ship things that work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/projects" className="btn-primary">
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Me
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-stone-300 dark:border-zinc-700 flex items-start justify-center p-1"
            >
              <div className="w-1 h-1.5 rounded-full bg-stone-400 dark:bg-zinc-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── About blurb ─── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}About</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Turning complex ideas into
              <br />
              <span className="gradient-text">working software.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-stone-600 dark:text-zinc-400 leading-relaxed text-lg">
              I&apos;m a full-stack developer focused on the intersection of AI and web technology.
              I build everything from intelligent agents and data pipelines to polished client-facing
              websites. My stack centers on <strong className="text-stone-800 dark:text-zinc-200">Next.js</strong>,{" "}
              <strong className="text-stone-800 dark:text-zinc-200">TypeScript</strong>, and{" "}
              <strong className="text-stone-800 dark:text-zinc-200">React</strong> — paired with AI APIs and
              tools like <strong className="text-stone-800 dark:text-zinc-200">Microsoft Graph</strong> to
              create solutions that actually solve problems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="py-24 px-6 bg-stone-100/50 dark:bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-label mb-4">{"// "}Featured Work</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Recent Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-stone-500 dark:text-zinc-500
                           hover:text-accent transition-colors"
              >
                View all
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="btn-outline text-sm">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <TechStack />

      {/* ─── CTA ─── */}
      <section className="py-24 px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">{"// "}Let&apos;s Work Together</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Have a project in mind?
            </h2>
            <p className="text-stone-500 dark:text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
