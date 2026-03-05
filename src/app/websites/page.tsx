"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedStagger, staggerChild } from "@/components/AnimatedSection";

const stats = [
  { value: "10+", label: "Websites Delivered" },
  { value: "24hr", label: "Response Time" },
  { value: "100%", label: "Client Satisfaction" },
];

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Losing Customers",
    description: "46% of people judge a company's credibility by their website. No site — or an outdated one — means lost revenue.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Not Mobile-Friendly",
    description: "60% of web traffic is mobile. If your site doesn't work on phones, you're invisible to most of your audience.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Missing Out on SEO",
    description: "93% of online experiences start with a search engine. Without proper SEO, your competitors show up instead of you.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "$497",
    subtitle: "One-time",
    description: "A clean, professional website to establish your online presence.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "1 round of revisions",
      "2-week delivery",
    ],
  },
  {
    name: "Business",
    price: "$1,497",
    subtitle: "One-time",
    description: "A full-featured site built to attract and convert customers.",
    features: [
      "Up to 10 pages",
      "Custom design & branding",
      "Blog / news section",
      "Advanced SEO & analytics",
      "Social media integration",
      "Email signup & lead capture",
      "3 rounds of revisions",
      "30 days post-launch support",
      "3-week delivery",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$2,997",
    subtitle: "Starting at",
    description: "Everything you need — e-commerce, booking, custom features.",
    features: [
      "Unlimited pages",
      "E-commerce or booking system",
      "Custom functionality",
      "Content management system",
      "Performance optimization",
      "Accessibility compliance",
      "Ongoing maintenance plan",
      "Priority support",
      "Timeline varies",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Free Consultation",
    description: "We hop on a 15-minute call to understand your business, goals, and what you need from your website.",
  },
  {
    step: "02",
    title: "Design & Mockup",
    description: "I create a visual mockup of your site for you to review. You give feedback, and we refine it until it's right.",
  },
  {
    step: "03",
    title: "Build & Test",
    description: "I build the site using modern technology — fast, secure, and mobile-friendly. You see progress along the way.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Your site goes live. I handle hosting setup, domain connection, and provide post-launch support to make sure everything runs smoothly.",
  },
];

const showcaseProjects = [
  {
    title: "N16 Soccer Training",
    type: "Sports & Recreation",
    description: "Registration system with multi-step forms, admin dashboard, and broadcast messaging for a youth soccer program.",
    tech: ["Next.js", "Prisma", "Tailwind CSS"],
    url: "https://website-factory-gamma.vercel.app",
  },
  {
    title: "AI Finance Brief",
    type: "SaaS / Finance",
    description: "AI-powered financial briefing platform with user auth, subscription tiers, and automated daily content generation.",
    tech: ["Next.js", "Claude API", "Supabase"],
    url: "https://ai-finance-brief.vercel.app",
  },
  {
    title: "PC Bottleneck Analyzer",
    type: "Tech / E-commerce",
    description: "Hardware analysis tool with SEO blog, affiliate integration, and AI-powered recommendations. Ranks on Google.",
    tech: ["Next.js", "Python", "Claude API"],
    url: "https://pcbottleneck.buildkit.store",
  },
];

const faqs = [
  {
    q: "How long does it take?",
    a: "Starter sites are delivered in about 2 weeks. Business sites take around 3 weeks. Premium projects vary depending on complexity — I'll give you a clear timeline upfront.",
  },
  {
    q: "Do I need to provide content?",
    a: "It helps if you have your business info, photos, and branding. If you don't have everything ready, I can work with what you have and help fill in the gaps.",
  },
  {
    q: "What about hosting and domains?",
    a: "I'll set up hosting on Vercel (free for most sites) and help you connect your domain. If you don't have a domain, I'll help you get one (~$12/year).",
  },
  {
    q: "Can I update the site myself?",
    a: "Business and Premium packages include a content management system so you can update text, images, and blog posts yourself. I also provide a quick training walkthrough.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Starter includes 1 revision round, Business includes 3, and Premium includes ongoing support. After that, I'm available for updates at an hourly rate.",
  },
];

export default function WebsitesPage() {
  return (
    <div className="pt-28 pb-24">
      {/* ─── Hero ─── */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}Web Design</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[0.95]">
              A Website That Works
              <br />
              <span className="gradient-text">As Hard As You Do</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-stone-500 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Professional, fast, mobile-ready websites built for small businesses.
              No templates. No page builders. Just clean code that converts visitors into customers.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="#packages" className="btn-outline">
                See Packages
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="px-6 mb-24">
        <AnimatedSection delay={0.4}>
          <div className="max-w-3xl mx-auto flex items-center justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.value}</p>
                <p className="text-xs md:text-sm text-stone-400 dark:text-zinc-500 font-mono mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Why You Need a Website ─── */}
      <section className="px-6 py-24 bg-stone-100/50 dark:bg-zinc-900/30 mb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}The Problem</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Your business is losing money
              <br />
              <span className="gradient-text">without a modern website.</span>
            </h2>
            <p className="text-stone-500 dark:text-zinc-400 text-lg max-w-2xl mb-14">
              In 2026, your website is your storefront. Here&apos;s what happens when it&apos;s missing or outdated.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-3 gap-5">
            {problems.map((problem) => (
              <motion.div
                key={problem.title}
                variants={staggerChild}
                className="card card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{problem.title}</h3>
                <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ─── Our Work ─── */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-14">
              Recent Builds
            </h2>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-3 gap-5">
            {showcaseProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={staggerChild}
                className="card card-hover p-6 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-stone-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded-md
                                 bg-stone-100 dark:bg-zinc-800/80 text-stone-500 dark:text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:text-accent-light transition-colors inline-flex items-center gap-1"
                >
                  View Live Site
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ─── Packages ─── */}
      <section id="packages" className="px-6 py-24 bg-stone-100/50 dark:bg-zinc-900/30 mb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}Packages</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Transparent Pricing
            </h2>
            <p className="text-stone-500 dark:text-zinc-400 text-lg max-w-2xl mb-14">
              No hidden fees. No monthly subscriptions unless you want maintenance. One price, your site delivered.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={staggerChild}
                className={`card p-6 flex flex-col relative ${
                  pkg.popular
                    ? "border-accent/40 shadow-lg shadow-accent/5"
                    : "card-hover"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-accent text-zinc-950 text-xs font-display font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm text-stone-500 dark:text-zinc-500 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-stone-400 dark:text-zinc-500 font-mono">{pkg.subtitle}</span>
                  </div>
                  <span className="text-3xl font-display font-bold gradient-text">{pkg.price}</span>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-stone-600 dark:text-zinc-400">
                      <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={pkg.popular ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}Process</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-14">
              How It Works
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {process.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-10 pb-10 relative">
                  {i < process.length - 1 && (
                    <div className="absolute left-[22px] md:left-[26px] top-12 bottom-0 w-px bg-stone-200 dark:bg-zinc-800" />
                  )}
                  <div
                    className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-xl flex-shrink-0 flex items-center justify-center
                               font-mono text-sm font-bold bg-accent text-zinc-950"
                  >
                    {item.step}
                  </div>
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

      {/* ─── FAQ ─── */}
      <section className="px-6 py-24 bg-stone-100/50 dark:bg-zinc-900/30 mb-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="section-label mb-4">{"// "}FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="card group">
                  <summary className="px-6 py-4 cursor-pointer text-sm font-display font-semibold flex items-center justify-between select-none">
                    {faq.q}
                    <svg
                      className="w-4 h-4 text-stone-400 dark:text-zinc-600 transition-transform group-open:rotate-45 flex-shrink-0 ml-4"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-stone-500 dark:text-zinc-400 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-4">{"// "}Ready?</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Let&apos;s build your website.
            </h2>
            <p className="text-stone-500 dark:text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
              Tell me about your business and I&apos;ll send you a free proposal — usually within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="mailto:kjh.holt@gmail.com" className="btn-outline">
                Email Directly
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
