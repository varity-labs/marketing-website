import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Sparkles, Globe } from "lucide-react";
import { BreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Varity | Our Mission to Decentralize Cloud Infrastructure",
  description:
    "Varity is building the Operating System for Web3 - replacing AWS, Google Cloud, and Azure with 100% decentralized infrastructure. Learn about our mission, values, and roadmap.",
  keywords: [
    "about Varity",
    "Varity Labs",
    "decentralized infrastructure company",
    "Web3 startup",
    "DePin company",
    "cloud infrastructure alternative",
  ],
  alternates: {
    canonical: "https://varity.so/about/",
  },
  openGraph: {
    title: "About Varity | Decentralizing Cloud Infrastructure",
    description:
      "We're building the Operating System for Web3. Learn about our mission to replace AWS, Google Cloud, and Azure with decentralized infrastructure.",
    url: "https://varity.so/about/",
    type: "website",
  },
};

// Breadcrumb for navigation schema
const breadcrumbs = [
  { name: "Home", url: "https://varity.so/" },
  { name: "About", url: "https://varity.so/about/" },
];

const values = [
  {
    icon: Target,
    title: "Decentralization First",
    description: "We believe infrastructure should be owned by communities, not corporations. Every technical decision prioritizes decentralization.",
  },
  {
    icon: Users,
    title: "Privacy by Default",
    description: "Your data should be yours. We build systems where even we can't access your information without your explicit permission.",
  },
  {
    icon: Sparkles,
    title: "Simplicity Over Complexity",
    description: "Web3 shouldn't require a PhD. We abstract away blockchain complexity so anyone can build on decentralized infrastructure.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description: "Our core infrastructure is open source. We believe transparency builds trust and enables innovation.",
  },
];

const milestones = [
  { year: "Dec 2025", event: "Generic AI Dashboard Template on Varity L3 Arbitrum Rollup Testnet" },
  { year: "Jan 2026", event: "Open-source SDK packages for community contributions" },
  { year: "Jan 2026", event: "Migration tools for central cloud providers to Varity L3" },
  { year: "Feb 2026", event: "Varity L3 Arbitrum Rollup Mainnet launch" },
  { year: "Q2 2026", event: "Multi-chain expansion (Algorand, zkSync, Base)" },
];

export default function AboutPage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <BreadcrumbSchema items={breadcrumbs} />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-background to-background" />
          <div className="section-container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-display-lg md:text-display-xl font-display font-bold">
                Building the future of
                <br />
                <span className="text-purple-400">decentralized infrastructure</span>
              </h1>
              <p className="mt-6 text-body-lg text-foreground-secondary max-w-2xl mx-auto">
                We&apos;re on a mission to make decentralized infrastructure accessible
                to every business. No blockchain knowledge required. No corporate
                surveillance. Just better infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-background-secondary/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-display-md font-display font-bold">
                  Our <span className="text-gradient">mission</span>
                </h2>
                <p className="mt-6 text-body-lg text-foreground-secondary">
                  Traditional cloud providers have become too powerful. They have
                  full access to your data, charge escalating prices, and lock you
                  into proprietary systems.
                </p>
                <p className="mt-4 text-body-lg text-foreground-secondary">
                  We&apos;re building the alternative: a complete Web3 operating system
                  that replaces AWS, Google Cloud, and Azure with 100% decentralized
                  infrastructure. Same capabilities, 64% cheaper, with privacy
                  guarantees that are mathematically provable.
                </p>
              </div>
              <div className="card p-8 space-y-6">
                <h3 className="text-heading-lg font-semibold text-foreground">
                  Key Milestones
                </h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="px-3 py-1 rounded bg-brand-500/10 text-brand-400 text-sm font-medium">
                        {milestone.year}
                      </div>
                      <span className="text-body-md text-foreground-secondary">
                        {milestone.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-display-md font-display font-bold">
                Our <span className="text-gradient">values</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="card card-hover">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 inline-flex mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-foreground-secondary">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background-secondary/30">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-display-md font-display font-bold">
                Join us in building the{" "}
                <span className="text-gradient">decentralized future</span>
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary">
                Whether you&apos;re a business looking to reduce cloud costs or a
                developer building the next great app, Varity is here to help.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="gradient" className="gap-2" asChild>
                  <Link href="/dashboard">
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
