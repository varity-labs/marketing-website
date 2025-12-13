import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Cpu, Database, Shield, Zap, Globe, Lock, Server, Layers } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, VarityEntitySchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DePin Infrastructure Platform | Varity Web3 OS",
  description:
    "The Operating System for Web3. 100% decentralized infrastructure with Akash Network compute, Filecoin storage, Arbitrum L3 blockchain, and Lit Protocol encryption. Replace AWS, Google Cloud, Azure.",
  keywords: [
    "DePin infrastructure",
    "decentralized cloud platform",
    "Web3 operating system",
    "Akash Network",
    "Filecoin storage",
    "Arbitrum L3",
    "Lit Protocol",
    "decentralized compute",
    "AWS alternative",
    "Google Cloud alternative",
    "Azure alternative",
  ],
  alternates: {
    canonical: "https://varity.so/platform/",
  },
  openGraph: {
    title: "DePin Infrastructure Platform | Varity",
    description:
      "100% decentralized infrastructure. Akash compute, Filecoin storage, Arbitrum L3 blockchain. 89% savings vs traditional cloud.",
    url: "https://varity.so/platform/",
    type: "website",
  },
};

// Services for schema
const platformServices = [
  {
    name: "Akash Network Compute",
    description:
      "Decentralized compute marketplace with 10,000+ global providers, auto-scaling, and GPU support. 64-80% cost savings vs AWS EC2.",
  },
  {
    name: "Filecoin Storage",
    description:
      "Permanent decentralized storage with IPFS integration, content addressing, verifiable proofs, and 3x redundancy.",
  },
  {
    name: "Arbitrum L3 Blockchain",
    description:
      "Custom blockchain layer built on Arbitrum for smart contract execution with Ethereum security, low gas fees, and fast finality.",
  },
  {
    name: "Lit Protocol Encryption",
    description:
      "Wallet-based encryption and access control with decentralized keys, conditional access, and no master keys.",
  },
];

// Breadcrumb for navigation schema
const breadcrumbs = [
  { name: "Home", url: "https://varity.so/" },
  { name: "Platform", url: "https://varity.so/platform/" },
];

const infrastructure = [
  {
    icon: Cpu,
    title: "Akash Network Compute",
    description: "Decentralized compute marketplace with 64-80% cost savings vs AWS",
    features: ["10,000+ global providers", "Auto-scaling", "GPU support"],
  },
  {
    icon: Database,
    title: "Filecoin Storage",
    description: "Permanent decentralized storage with 3x redundancy",
    features: ["IPFS integration", "Content addressing", "Verifiable proofs"],
  },
  {
    icon: Server,
    title: "Arbitrum L3",
    description: "Custom blockchain layer for smart contract execution",
    features: ["Ethereum security", "Low gas fees", "Fast finality"],
  },
  {
    icon: Shield,
    title: "Lit Protocol",
    description: "Wallet-based encryption and access control",
    features: ["Decentralized keys", "Conditional access", "No master keys"],
  },
];

const benefits = [
  "89% total savings including AI capabilities vs GCP",
  "100% decentralized - no corporate servers",
  "5-layer military-grade privacy",
  "No vendor lock-in",
  "Automatic scaling",
  "Global distribution",
];

export default function PlatformPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <ServiceSchema services={platformServices} />
      <BreadcrumbSchema items={breadcrumbs} />
      <VarityEntitySchema />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-background to-background" />
          <div className="section-container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-display-lg md:text-display-xl font-display font-bold">
                The Operating System
                <br />
                <span className="text-gradient-hero">for Web3</span>
              </h1>
              <p className="mt-6 text-body-lg text-foreground-secondary">
                Replace AWS, Google Cloud, and Azure with 100% decentralized
                infrastructure. Same capabilities, 89% cheaper including AI, provably private.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" variant="gradient" className="gap-2" asChild>
                  <Link href="/dashboard">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Stack */}
        <section className="section-padding bg-background-secondary/30">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-display-md font-display font-bold">
                <span className="text-gradient">DePin Infrastructure</span>
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary">
                Built on battle-tested decentralized protocols
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infrastructure.map((item) => (
                <div key={item.title} className="card card-hover">
                  <div className="p-3 rounded-lg bg-brand-500/10 text-brand-500 inline-flex mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-heading-md font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-foreground-secondary mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-1">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-body-sm text-foreground-muted">
                        <Check className="h-4 w-4 text-brand-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-md font-display font-bold">
                  Why choose{" "}
                  <span className="text-gradient">decentralized?</span>
                </h2>
                <p className="mt-4 text-body-lg text-foreground-secondary">
                  Traditional cloud providers have full access to your data, charge
                  escalating prices, and lock you into proprietary APIs. Varity is
                  the alternative.
                </p>
                <ul className="mt-8 space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-brand-500" />
                      <span className="text-body-md text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-electric-400/10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-secondary">Traditional Cloud</span>
                      <span className="text-red-400 font-bold">$2,800/mo</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground-secondary">Varity DePin</span>
                      <span className="text-brand-400 font-bold">$299/mo</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-foreground font-medium">Your Savings</span>
                        <span className="text-brand-400 font-bold text-xl">89%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
