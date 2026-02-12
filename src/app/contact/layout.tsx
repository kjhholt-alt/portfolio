import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kruz Holt for custom web development, AI-powered applications, or to discuss your next project.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
