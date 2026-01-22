import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Stats,
  Problem,
  Solution,
  HowItWorks,
  Features,
  Security,
  Partners,
  CTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Varity - The Operating System for Web3 | Decentralized Cloud Infrastructure",
  description:
    "Build on 100% decentralized infrastructure with 89% total savings including AI. Company-specific AI dashboards, blockchain settlement, and military-grade privacy. Replace AWS, Google Cloud, and Azure with DePin.",
  keywords: [
    "Web3 operating system",
    "decentralized cloud",
    "DePin infrastructure",
    "AI dashboard",
    "Arbitrum L3",
    "AWS alternative",
    "Google Cloud alternative",
    "decentralized storage",
    "Filecoin",
    "Akash Network",
    "blockchain infrastructure",
    "data sovereignty",
    "private cloud",
    "enterprise Web3",
  ],
  alternates: {
    canonical: "https://varity.so/",
  },
  openGraph: {
    title: "Varity - The Operating System for Web3",
    description:
      "Build on 100% decentralized infrastructure with 89% total savings including AI. Company-specific AI dashboards with military-grade privacy.",
    url: "https://varity.so/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Varity - The Operating System for Web3 - Decentralized Cloud Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varity - The Operating System for Web3",
    description:
      "Build on 100% decentralized infrastructure with 89% total savings including AI.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-500 focus:text-background focus:rounded"
      >
        Skip to main content
      </a>

      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Security />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
