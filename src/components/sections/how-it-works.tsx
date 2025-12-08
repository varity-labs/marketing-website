"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Wallet,
  Settings,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Wallet className="h-6 w-6" />,
    title: "Connect & Configure",
    description:
      "Sign up with email or wallet. Our AI analyzes your business needs and recommends the optimal infrastructure configuration.",
    details: [
      "Email, Google, or wallet login",
      "AI-powered setup wizard",
      "Industry-specific templates",
    ],
  },
  {
    number: "02",
    icon: <Settings className="h-6 w-6" />,
    title: "Deploy to DePin",
    description:
      "One-click deployment to decentralized infrastructure. Your apps run on Akash Network, data stored on Filecoin, secured by Lit Protocol.",
    details: [
      "Zero DevOps required",
      "Automatic scaling",
      "Multi-region distribution",
    ],
  },
  {
    number: "03",
    icon: <Rocket className="h-6 w-6" />,
    title: "Build & Scale",
    description:
      "Access your AI-powered dashboard, run analytics, and scale infinitely. Pay only for what you use with 89% total savings including AI capabilities.",
    details: [
      "Real-time analytics",
      "Company-specific AI",
      "Unlimited scaling",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function HowItWorks() {
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
            Get started in
            <br />
            <span className="text-gradient">three simple steps</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            No blockchain knowledge required. Deploy your first app in under 5 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Step Card */}
                <div className={cn(
                  "card card-hover h-full",
                  "border-brand-500/20 hover:border-brand-500/40"
                )}>
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-electric-400 flex items-center justify-center text-white font-bold text-lg">
                        {step.number}
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500 to-electric-400 blur-xl opacity-30" />
                    </div>
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-heading-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-foreground-secondary mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-body-sm text-foreground-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-[140px] z-10 w-8 h-8 rounded-full bg-background border border-border items-center justify-center text-foreground-muted">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="xl" variant="gradient" className="gap-2" asChild>
            <Link href="/dashboard">
              Start Building Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-foreground-muted">
            Free to start. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
