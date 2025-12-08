"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  Eye,
  Lock,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Problem {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const problems: Problem[] = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Corporate Surveillance",
    description:
      "AWS, Google, and Azure have full access to your data. They scan, analyze, and monetize your business information.",
    stat: "73%",
    statLabel: "of companies concerned about cloud provider data access",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Vendor Lock-in",
    description:
      "Proprietary APIs and services make migration nearly impossible. Your infrastructure becomes their leverage.",
    stat: "$2.4M",
    statLabel: "average cost to migrate away from a cloud provider",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Escalating Costs",
    description:
      "Cloud pricing increases 15-30% annually. What started affordable becomes your biggest expense.",
    stat: "64%",
    statLabel: "of companies overspend on cloud services",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Problem() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-red-950/5 to-background" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 mb-6">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-medium">The Problem</span>
          </div>

          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Your cloud provider is
            <br />
            <span className="text-red-400">not on your side</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            Traditional cloud infrastructure comes with hidden costs, surveillance,
            and lock-in that undermines your business.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className={cn(
                "card group relative overflow-hidden",
                "border-red-500/20 hover:border-red-500/40",
                "bg-gradient-to-b from-red-500/5 to-transparent"
              )}
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-red-500/10 text-red-400 mb-4">
                {problem.icon}
              </div>

              {/* Content */}
              <h3 className="text-heading-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-body-md text-foreground-secondary mb-6">
                {problem.description}
              </p>

              {/* Stat */}
              <div className="pt-4 border-t border-border/50">
                <div className="text-display-sm font-bold text-red-400">
                  {problem.stat}
                </div>
                <div className="text-body-sm text-foreground-muted">
                  {problem.statLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
