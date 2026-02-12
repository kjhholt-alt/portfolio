import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web development, AI-powered applications, and professional client websites. Get a quote from Kruz Holt.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
