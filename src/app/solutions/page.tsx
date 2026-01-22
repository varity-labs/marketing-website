import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Users, Building2, Building, Heart, DollarSign, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions for Every Business | Varity Private Cloud",
  description:
    "From startups to enterprises, Varity provides secure, affordable infrastructure. Small businesses save 89%. Enterprises get compliance + control.",
  keywords: [
    "cloud solutions for small business",
    "enterprise cloud security",
    "startup infrastructure",
    "HIPAA compliant cloud",
    "SOC 2 cloud hosting",
    "affordable cloud for SMB",
  ],
  alternates: {
    canonical: "https://varity.so/solutions/",
  },
  openGraph: {
    title: "Solutions for Every Business | Varity",
    description:
      "From startups to enterprises, Varity provides secure, affordable infrastructure.",
    url: "https://varity.so/solutions/",
    type: "website",
  },
};

const businessSizes = [
  {
    icon: Users,
    title: "Small Businesses",
    size: "2-50 employees",
    description:
      "Affordable, easy-to-use infrastructure without the complexity or high costs.",
    benefits: [
      "89% savings vs AWS",
      "Deploy in 60 seconds",
      "No DevOps team needed",
      "Predictable monthly costs",
    ],
    cta: "Perfect for startups and small teams",
  },
  {
    icon: Building2,
    title: "Growing Companies",
    size: "50-500 employees",
    description:
      "Scalable infrastructure that grows with you, without vendor lock-in or surprise bills.",
    benefits: [
      "Auto-scaling infrastructure",
      "No migration headaches",
      "Standard APIs (S3-compatible)",
      "Priority support",
    ],
    cta: "Scale without limits",
  },
  {
    icon: Building,
    title: "Enterprises",
    size: "500+ employees",
    description:
      "Compliance-ready, private infrastructure with dedicated support and SLAs.",
    benefits: [
      "SOC 2, GDPR, HIPAA ready",
      "99.99% uptime SLA",
      "Dedicated account manager",
      "Custom deployment options",
    ],
    cta: "Enterprise-grade security",
  },
];

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "HIPAA-compliant patient data storage and processing",
    useCases: [
      "Electronic Health Records (EHR)",
      "Telemedicine platforms",
      "Patient portals",
      "Medical imaging storage",
    ],
  },
  {
    icon: DollarSign,
    title: "Finance",
    description: "SOC 2 compliant transaction processing and data storage",
    useCases: [
      "Payment processing",
      "Trading platforms",
      "Customer data management",
      "Compliance reporting",
    ],
  },
  {
    icon: ShieldCheck,
    title: "SaaS",
    description: "Privacy-first customer data management and hosting",
    useCases: [
      "Customer databases",
      "Application hosting",
      "File storage",
      "API infrastructure",
    ],
  },
];

export default function SolutionsPage() {
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
                Built for Businesses
                <br />
                <span className="text-gradient-hero">of All Sizes</span>
              </h1>
              <p className="mt-6 text-body-lg text-foreground-secondary">
                From startups to Fortune 500s, Varity provides the infrastructure
                you need without the complexity, high costs, or privacy risks.
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
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* By Business Size */}
        <section className="section-padding bg-background-secondary/30">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-display-md font-display font-bold">
                Solutions by <span className="text-gradient">Business Size</span>
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary">
                Whether you're a startup or an enterprise, Varity scales with you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {businessSizes.map((business) => (
                <div
                  key={business.title}
                  className="card card-hover p-8 flex flex-col"
                >
                  <div className="p-3 rounded-lg bg-brand-500/10 text-brand-500 inline-flex mb-4">
                    <business.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-foreground mb-1">
                    {business.title}
                  </h3>
                  <p className="text-body-sm text-foreground-muted mb-3">
                    {business.size}
                  </p>
                  <p className="text-body-md text-foreground-secondary mb-6">
                    {business.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {business.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-body-sm text-foreground-muted"
                      >
                        <ArrowRight className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="text-body-sm text-brand-400 font-medium">
                    {business.cta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By Industry */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-display-md font-display font-bold">
                Solutions by <span className="text-gradient">Industry</span>
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary">
                Compliance-ready infrastructure for regulated industries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div key={industry.title} className="card p-8">
                  <div className="p-3 rounded-lg bg-electric-400/10 text-electric-400 inline-flex mb-4">
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-heading-lg font-semibold text-foreground mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-body-md text-foreground-secondary mb-6">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-body-sm font-medium text-foreground-muted">
                      Common use cases:
                    </p>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase) => (
                        <li
                          key={useCase}
                          className="text-body-sm text-foreground-muted"
                        >
                          • {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-body-lg text-foreground-secondary max-w-2xl mx-auto">
                Join businesses that chose privacy, control, and 89% cost savings.
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
