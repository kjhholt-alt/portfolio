import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI-powered tools, web applications, and developer utilities built by Kruz Holt. Next.js, TypeScript, React, and AI integrations.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
