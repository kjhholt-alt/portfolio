export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "ai" | "web" | "tool";
  featured: boolean;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "ai-finance-brief",
    title: "AI Finance Brief",
    description:
      "AI-powered financial news summarization that distills market updates into concise, actionable briefings for traders and analysts.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Python", "FastAPI"],
    category: "ai",
    featured: true,
    github: "https://github.com/kjhholt-alt/ai-finance-brief",
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
  },
  {
    id: "pc-bottleneck-analyzer",
    title: "PC Bottleneck Analyzer",
    description:
      "Hardware scanning tool that identifies performance bottlenecks in your PC build and provides AI-driven upgrade recommendations.",
    tech: ["Electron", "TypeScript", "Node.js", "System APIs", "AI"],
    category: "tool",
    featured: true,
    github: "https://github.com/kjhholt-alt/pc-bottleneck-analyzer",
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
    id: "ai-website-factory",
    title: "AI Website Factory",
    description:
      "Config-driven system for rapidly generating professional client websites. Define specs, let AI handle the build.",
    tech: ["Next.js", "TypeScript", "AI/ML", "Tailwind CSS", "Vercel"],
    category: "web",
    featured: false,
    github: "https://github.com/kjhholt-alt/ai-website-factory",
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI / ML" },
  { id: "web", label: "Web Apps" },
  { id: "tool", label: "Tools" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
