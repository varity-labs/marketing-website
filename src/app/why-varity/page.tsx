import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, DollarSign, Lock, Zap, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Varity? | Private Cloud That Saves You 89%",
  description:
    "Your data. Your privacy. Your control. Save 89% vs AWS with infrastructure that can't see your data. No corporate surveillance. No vendor lock-in.",
  keywords: [
    "why choose Varity",
    "private cloud benefits",
    "AWS cost savings",
    "data privacy",
    "no vendor lock-in",
    "secure cloud infrastructure",
    "reduce cloud costs",
    "private infrastructure",
  ],
  alternates: {
    canonical: "https://varity.so/why-varity/",
  },
  openGraph: {
    title: "Why Varity? | Private Cloud That Saves You 89%",
    description:
      "Your data. Your privacy. Your control. Save 89% vs AWS with infrastructure that can't see your data.",
    url: "https://varity.so/why-varity/",
    type: "website",
  },
};

const benefits = [
  {
    icon: Shield,
    title: "Your Data Stays Private",
    description:
      "No corporate surveillance. AWS, Google, and Microsoft can see your data. We can't—mathematically impossible.",
    benefits: [
      "Military-grade encryption",
      "You hold the only key",
      "Zero corporate access",
      "Auditable privacy guarantees",
    ],
  },
  {
    icon: DollarSign,
    title: "Save 89% on Infrastructure",
    description:
      "Stop paying cloud providers' escalating prices. Same capabilities, 89% less cost.",
    benefits: [
      "89% savings vs AWS/GCP/Azure",
      "Predictable pricing",
      "No surprise bills",
      "Pay only for what you use",
    ],
  },
  {
    icon: Lock,
    title: "Keep 100% Control",
    description:
      "No vendor lock-in. No proprietary APIs. Leave anytime with all your data.",
    benefits: [
      "Export your data anytime",
      "Standard APIs (S3-compatible)",
      "No migration nightmares",
      "You own your infrastructure",
    ],
  },
  {
    icon: Zap,
    title: "Deploy in 60 Seconds",
    description:
      "No DevOps team needed. No complex setup. One command deployment.",
    benefits: [
      "Deploy in 60 seconds",
      "Zero DevOps required",
      "Automatic scaling",
      "Global distribution",
    ],
  },
];

const problems = [
  {
    problem: "Cloud costs keep increasing",
    solution: "Fixed costs, 89% savings",
  },
  {
    problem: "AWS can see all your data",
    solution: "Mathematically private",
  },
  {
    problem: "Vendor lock-in with proprietary APIs",
    solution: "Standard APIs, leave anytime",
  },
  {
    problem: "Complex DevOps setup required",
    solution: "Deploy in 60 seconds",
  },
];

export default function WhyVarityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-background to-background" />
          <div className="section-container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-display-lg md:text-display-xl font-display font-bold">
                Your Data. Your Privacy.
                <br />
                <span className="text-gradient-hero">Your Control.</span>
              </h1>
              <p className="mt-6 text-body-lg text-foreground-secondary">
                Traditional cloud providers have full access to your data, charge
                escalating prices, and lock you into proprietary systems. Varity
                is the alternative.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" variant="gradient" className="gap-2" asChild>
                  <a
                    href="https://store.varity.so"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Apps
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/platform">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="section-padding bg-background-secondary/30">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-display-md font-display font-bold">
                The Problem with <span className="text-gradient">Traditional Cloud</span>
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary">
                AWS, Google Cloud, and Azure have fundamental problems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {problems.map((item) => (
                <div
                  key={item.problem}
                  className="card p-6 bg-background border-l-4 border-l-red-500/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-heading-md font-semibold text-foreground mb-2">
                        ❌ {item.problem}
                      </h3>
                      <p className="text-body-md text-brand-400 font-medium">
                        ✅ Varity: {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-display-md font-display font-bold">
                Why Choose <span className="text-gradient">Varity?</span>
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary">
                Four core benefits that matter to your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="card card-hover p-8">
                  <div className="p-3 rounded-lg bg-brand-500/10 text-brand-500 inline-flex mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-body-md text-foreground-secondary mb-6">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-body-sm text-foreground-muted"
                      >
                        <Check className="h-4 w-4 text-brand-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-background-secondary/30 to-background">
          <div className="section-container">
            <div className="card p-12 text-center bg-gradient-to-br from-brand-500/10 to-electric-400/10 border-brand-500/20">
              <h2 className="text-display-md font-display font-bold">
                Ready to Save 89%?
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary max-w-2xl mx-auto">
                Join thousands of businesses that switched to private infrastructure.
                Deploy your first app in 60 seconds.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" variant="gradient" className="gap-2" asChild>
                  <a
                    href="https://store.varity.so"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Apps
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/contact">Talk to Sales</Link>
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
