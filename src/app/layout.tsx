import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import "../../design/field-journal-premium/site.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buildkit.store"),
  title: {
    default: "Kruz Holt — Independent Product Builder",
    template: "%s | Kruz Holt",
  },
  description:
    "Independent product builder designing and shipping focused software, AI systems, and internal tools from first brief to real-world proof.",
  keywords: [
    "independent product builder",
    "product design",
    "AI systems",
    "full-stack development",
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
    title: "Kruz Holt — Independent Product Builder",
    description:
      "Focused software, AI systems, and internal tools from first brief to real-world proof.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kruz Holt — Independent product builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kruz Holt — Independent Product Builder",
    description:
      "Focused software, AI systems, and internal tools from first brief to real-world proof.",
    images: ["/images/twitter-banner.png"],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${newsreader.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} font-body antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(navigator.doNotTrack==="1")return;fetch("https://admin.buildkit.store/api/collect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({site:"portfolio",path:location.pathname}),keepalive:true}).catch(function(){})})();`,
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
