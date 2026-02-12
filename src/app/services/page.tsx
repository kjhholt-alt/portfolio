"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedStagger, staggerChild } from "@/components/AnimatedSection";

const services = [
  {
    icon: "◈",
    title: "AI-Powered Applications",
    description:
      "Custom AI integrations, intelligent agents, data pipelines, and LLM-powered tools built for your specific use case.",
    features: ["Custom AI agents & chatbots", "Data analysis pipelines", "API integrations", "LLM fine-tuning workflows"],
  },
  {
    icon: "▲",
    title: "Custom Web Development",
    description:
      "Fast, responsive, SEO-optimized web applications built with modern frameworks. From SaaS dashboards to e-commerce.",
    features: ["Next.js & React apps", "Full-stack development", "API design & integration", "Performance optimization"],
  },
  {
    icon: "◇",
    title: "Client Websites",
    description:
      "Professional websites for businesses and individuals. Clean design, fast load times, and built to convert visitors into customers.",
    features: ["Business & portfolio sites", "Landing pages", "CMS integration", "Analytics & SEO setup"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your goals, audience, and technical requirements. I research the problem space and outline the approach.",
  },
  {
    step: "02",
    title: "Design",
    description: "I create wireframes and prototypes, establishing the architecture and user flow before writing production code.",
  },
  {
    step: "03",
    title: "Build",
    description: "Iterative development with regular check-ins. You see progress at every stage and can provide feedback in real time.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Thorough testing, deployment to production, and handoff with documentation. I provide support after launch.",
  },
];

const testimonials = [
  {
    quote: "Kruz delivered exactly what we needed — on time and with quality we didn't expect at this price point.",
    name: "Client Testimonial",
    role: "Coming soon",
  },
  {
    quote: "The AI integration transformed our workflow. What used to take hours now takes minutes.",
    name: "Client Testimonial",
    role: "Coming soon",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}Services</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What I Can Build
              <br />
              <span className="gradient-text">For You</span>
            </h1>
            <p className="text-stone-500 dark:text-zinc-400 text-lg max-w-2xl">
              From AI-powered tools to polished websites — I deliver production-ready
              software tailored to your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedStagger className="grid md:grid-cols-3 gap-5">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerChild}
                className="card card-hover p-6 flex flex-col"
              >
                <span className="text-2xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-stone-500 dark:text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 bg-stone-100/50 dark:bg-zinc-900/30 mb-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}Process</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-14">
              How I Work
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {process.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-10 pb-10 relative">
                  {/* Line connector */}
                  {i < process.length - 1 && (
                    <div className="absolute left-[22px] md:left-[26px] top-12 bottom-0 w-px bg-stone-200 dark:bg-zinc-800" />
                  )}
                  {/* Step number */}
                  <div
                    className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-xl flex-shrink-0 flex items-center justify-center
                               font-mono text-sm font-bold bg-accent text-zinc-950"
                  >
                    {item.step}
                  </div>
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-lg font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-stone-500 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              What Clients Say
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="card p-6"
              >
                <svg className="w-8 h-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849H10v10H0z" />
                </svg>
                <p className="text-stone-600 dark:text-zinc-400 leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-stone-400 dark:text-zinc-600 font-mono">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start?
            </h2>
            <p className="text-stone-500 dark:text-zinc-400 mb-8 max-w-lg mx-auto">
              Tell me about your project and I&apos;ll get back to you with a custom
              proposal — usually within 24 hours.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
