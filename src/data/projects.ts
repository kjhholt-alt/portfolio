export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "ai" | "web" | "tool";
  featured: boolean;
  github?: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "wow-weakauras-hub",
    title: "WoW WeakAuras Hub",
    description:
      "Full-stack development platform for World of Warcraft WeakAuras. Create, store, and sync custom UI elements across characters with an intuitive web interface.",
    tech: ["Django", "React", "TypeScript", "SQLite", "Tailwind CSS", "REST API"],
    category: "web",
    featured: true,
    github: "https://github.com/kjhholt-alt/WoW",
    // demo: Will add public demo URL when deployed
    image: "/images/project-wow-weakauras.png",
  },
  {
    id: "lead-generator-system",
    title: "Lead Generator System",
    description:
      "Automated B2B lead generation system with website analysis, email campaigns, and CRM pipeline. Django REST API backend with React dashboard for 24/7 lead automation.",
    tech: ["Django", "React", "TypeScript", "REST API", "Email Automation", "Website Analysis"],
    category: "web",
    featured: true,
    github: "https://github.com/kjhholt-alt/lead-generator", // Will be pushed
    // demo: Will add public demo URL when deployed
    image: "/images/project-lead-generator.png",
  },
  {
    id: "ai-finance-brief",
    title: "AI Finance Brief",
    description:
      "AI-powered financial news summarization that distills market updates into concise, actionable briefings for traders and analysts.",
    tech: ["Next.js", "TypeScript", "Claude API", "Tailwind CSS", "Vercel Cron"],
    category: "ai",
    featured: true,
    github: "https://github.com/kjhholt-alt/ai-finance-brief",
    demo: "https://ai-finance-brief.vercel.app",
    image: "/images/project-ai-finance-brief.png",
  },
  {
    id: "resume-cover-letter-app",
    title: "Resume & Cover Letter Generator",
    description:
      "Streamlit app that organizes job applications, matches roles to your interests, and generates tailored resumes and cover letters using Claude-powered job fingerprints.",
    tech: ["Python", "Streamlit", "Claude API", "SQLite", "RSS Feeds"],
    category: "tool",
    featured: true,
    github: "https://github.com/kjhholt-alt/job-applications",
    image: "/images/project-resume-cover-letter.png",
  },
  {
    id: "ai-chess-coach",
    title: "AI Chess Coach",
    description:
      "Chess analysis and coaching powered by AI. Get real-time game analysis, pattern recognition, and personalized improvement strategies.",
    tech: ["React", "TypeScript", "Chess.js", "Stockfish", "AI/ML"],
    category: "ai",
    featured: true,
    github: "https://github.com/kjhholt-alt/ai-chess-coach",
    demo: "https://chess.buildkit.store",
    image: "/images/project-ai-chess-coach.png",
  },
  {
    id: "pc-bottleneck-analyzer",
    title: "PC Bottleneck Analyzer",
    description:
      "Hardware scanning tool that identifies performance bottlenecks in your PC build and provides AI-driven upgrade recommendations.",
    tech: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "Claude API"],
    category: "tool",
    featured: true,
    github: "https://github.com/kjhholt-alt/pc-bottleneck-analyzer",
    demo: "https://pc-bottleneck-analyzer.vercel.app",
    image: "/images/project-pc-bottleneck.png",
  },
  {
    id: "agent-mission-control",
    title: "Agent Mission Control",
    description:
      "Centralized dashboard for monitoring, managing, and orchestrating multiple AI coding agent sessions in real-time.",
    tech: ["Next.js", "TypeScript", "WebSockets", "React", "Tailwind CSS"],
    category: "ai",
    featured: true,
    github: "https://github.com/kjhholt-alt/agent-mission-control",
  },
  {
    id: "website-factory",
    title: "Website Factory",
    description:
      "Config-driven website template system — one codebase, infinite client sites. Change a JSON config, entire site transforms.",
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Vercel"],
    category: "web",
    featured: true,
    github: "https://github.com/kjhholt-alt/website-factory",
    demo: "https://demo.buildkit.store",
  },
  {
    id: "stock-breakout-alerts",
    title: "Stock Breakout Alerts",
    description:
      "Monitors Mag 7 stocks and indices for ATR consolidation patterns that precede breakouts. AI-powered analysis with real-time alerts and backtesting.",
    tech: ["Django", "React", "TypeScript", "PostgreSQL", "Celery"],
    category: "tool",
    featured: true,
    github: "https://github.com/kjhholt-alt/StockApp",
    demo: "https://stock-app-rouge-nine.vercel.app",
    image: "/images/project-stock-alerts.png",
  },
  {
    id: "gumroad-factory",
    title: "Gumroad Factory",
    description:
      "CLI toolchain for creating, validating, and packaging digital products for Gumroad. Includes templates, validation scripts, and automated ZIP packaging.",
    tech: ["TypeScript", "Node.js", "Bash", "CLI"],
    category: "tool",
    featured: false,
    github: "https://github.com/kjhholt-alt/gumroad-factory",
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI / ML" },
  { id: "web", label: "Web Apps" },
  { id: "tool", label: "Tools" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
