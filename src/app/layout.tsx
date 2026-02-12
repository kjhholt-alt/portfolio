import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kruz Holt — AI-Powered Solutions Developer",
    template: "%s | Kruz Holt",
  },
  description:
    "Full-stack developer specializing in AI-powered applications, custom web development, and scalable client websites. Next.js, TypeScript, React.",
  keywords: [
    "AI developer",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "React",
    "web development",
    "AI applications",
  ],
  authors: [{ name: "Kruz Holt" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildkit.store",
    siteName: "Kruz Holt",
    title: "Kruz Holt — AI-Powered Solutions Developer",
    description:
      "Full-stack developer specializing in AI-powered applications, custom web development, and scalable client websites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kruz Holt — AI-Powered Solutions Developer",
    description:
      "Full-stack developer specializing in AI-powered applications, custom web development, and scalable client websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(navigator.doNotTrack==="1")return;fetch("https://admin.buildkit.store/api/collect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({site:"portfolio",path:location.pathname}),keepalive:true}).catch(function(){})})();`,
          }}
        />
      </body>
    </html>
  );
}
