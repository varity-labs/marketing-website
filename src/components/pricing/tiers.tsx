"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/components/analytics";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

const tiers: PricingTier[] = [
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses getting started with AI dashboards",
    features: [
      "Company-specific AI dashboard",
      "50GB encrypted storage",
      "1,000 AI queries/month",
      "Basic analytics",
      "Email support",
      "Single user",
    ],
    highlighted: ["Company-specific AI dashboard"],
    cta: "Start Free Trial",
    href: "http://localhost:3001",
  },
  {
    name: "Business Pro",
    price: "$199",
    period: "/month",
    description: "For growing businesses with advanced intelligence needs",
    features: [
      "Everything in Business, plus:",
      "200GB encrypted storage",
      "2,000 AI queries/month",
      "Industry RAG knowledge (10K+ docs)",
      "Advanced analytics & reports",
      "Custom integrations",
      "Priority support",
      "Up to 10 team members",
    ],
    highlighted: ["Industry RAG knowledge (10K+ docs)", "Custom integrations"],
    popular: true,
    cta: "Start Free Trial",
    href: "http://localhost:3001",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations requiring custom solutions and support",
    features: [
      "Everything in Business Pro, plus:",
      "Unlimited storage",
      "Unlimited AI queries",
      "Custom AI model training",
      "Custom RAG knowledge base",
      "Dedicated account manager",
      "99.99% SLA",
      "On-premise deployment option",
      "Unlimited team members",
    ],
    highlighted: ["Custom AI model training", "On-premise deployment option"],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function PricingTiers() {
  return (
    <section className="pb-20">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={cn(
                "relative card p-6 lg:p-8 flex flex-col",
                tier.popular && "border-brand-500/50 ring-1 ring-brand-500/20"
              )}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500 text-white text-xs font-medium">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-heading-lg font-semibold text-foreground">
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-display-md font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-body-md text-foreground-muted">
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-body-sm text-foreground-secondary">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "h-5 w-5 flex-shrink-0 mt-0.5",
                        tier.highlighted.includes(feature)
                          ? "text-brand-500"
                          : "text-foreground-muted"
                      )}
                    />
                    <span
                      className={cn(
                        "text-body-sm",
                        tier.highlighted.includes(feature)
                          ? "text-foreground font-medium"
                          : "text-foreground-secondary"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={tier.popular ? "gradient" : "outline"}
                size="lg"
                className="w-full gap-2"
                asChild
              >
                {tier.cta === "Contact Sales" ? (
                  <Link
                    href={tier.href}
                    onClick={() => trackEvent("pricing_cta_click", { tier: tier.name.toLowerCase().replace(" ", "_"), button: "contact_sales" })}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("pricing_cta_click", { tier: tier.name.toLowerCase().replace(" ", "_"), button: "start_free_trial" })}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Pricing Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-body-md text-foreground-muted">
            Need a custom plan?{" "}
            <Link href="/contact" className="text-brand-400 hover:text-brand-300 transition-colors">
              Contact us
            </Link>{" "}
            for volume discounts and custom requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
