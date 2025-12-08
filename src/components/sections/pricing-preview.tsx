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

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

const tiers: PricingTier[] = [
  {
    name: "Business",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "Company-specific AI dashboard",
      "50GB encrypted storage",
      "1,000 AI queries/month",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/dashboard",
  },
  {
    name: "Business Pro",
    price: "$199",
    period: "/month",
    description: "For growing businesses with advanced needs",
    features: [
      "Everything in Business",
      "200GB encrypted storage",
      "2,000 AI queries/month",
      "Industry RAG knowledge",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
    cta: "Start Free Trial",
    href: "/dashboard",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with custom requirements",
    features: [
      "Everything in Business Pro",
      "Unlimited storage",
      "Unlimited AI queries",
      "Dedicated account manager",
      "Custom SLA",
      "On-premise deployment",
    ],
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

export function PricingPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/30 to-background" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Simple, transparent
            <br />
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            Start free, scale as you grow. Save up to 89% compared to traditional cloud with AI.
          </p>
        </motion.div>

        {/* Pricing Cards */}
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
                "relative card p-6 lg:p-8",
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
                <div className="mt-2 flex items-baseline gap-1">
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
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-500 flex-shrink-0" />
                    <span className="text-body-sm text-foreground-secondary">
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
                <Link href={tier.href}>
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-body-md text-brand-400 hover:text-brand-300 transition-colors"
          >
            View full pricing details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
