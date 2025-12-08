"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Brain,
  FileSearch,
  BarChart3,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Company-Specific AI",
    description:
      "Your AI is trained exclusively on your business data, not generic models.",
    details: [
      "Fine-tuned on your documents",
      "Understands your terminology",
      "Learns from interactions",
      "Industry-specific knowledge",
    ],
    gradient: "from-brand-500/20 to-brand-500/5",
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "50,000+ Industry Documents",
    description:
      "Access a vast knowledge base of industry-specific documentation.",
    details: [
      "Regulations & compliance",
      "Best practices",
      "Technical guides",
      "Market insights",
    ],
    gradient: "from-electric-400/20 to-electric-400/5",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Real-Time Analytics",
    description:
      "Live dashboards with automatic anomaly detection and alerts.",
    details: [
      "Custom KPI tracking",
      "Automated reports",
      "Predictive insights",
      "Export to any format",
    ],
    gradient: "from-purple-400/20 to-purple-400/5",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Natural Language Queries",
    description:
      "Ask questions in plain English. Get instant, actionable answers.",
    details: [
      "No SQL required",
      "Context-aware responses",
      "Multi-turn conversations",
      "Voice input support",
    ],
    gradient: "from-brand-500/20 to-brand-500/5",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "5-Layer Privacy",
    description:
      "Military-grade encryption. Only you can access your data.",
    details: [
      "Lit Protocol encryption",
      "Decentralized storage",
      "No corporate access",
      "Blockchain audit trail",
    ],
    gradient: "from-electric-400/20 to-electric-400/5",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Setup",
    description:
      "Deploy in minutes, not months. No technical expertise required.",
    details: [
      "AI-powered onboarding",
      "Industry templates",
      "Automated configuration",
      "Zero DevOps needed",
    ],
    gradient: "from-purple-400/20 to-purple-400/5",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Multi-Chain Ready",
    description:
      "Arbitrum today, with zkSync, Algorand, and Base coming soon.",
    details: [
      "Intelligent routing",
      "Cost optimization",
      "Chain abstraction",
      "Future-proof",
    ],
    gradient: "from-brand-500/20 to-brand-500/5",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Collaboration",
    description:
      "Role-based access, shared dashboards, and team analytics.",
    details: [
      "Unlimited team members",
      "Custom permissions",
      "Shared insights",
      "Activity logs",
    ],
    gradient: "from-electric-400/20 to-electric-400/5",
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

export function DashboardFeatures() {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Everything you need to
            <br />
            <span className="text-gradient">supercharge your business</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            A complete AI-powered business intelligence platform, built on 100%
            decentralized infrastructure.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={cn(
                "card card-hover group relative overflow-hidden"
              )}
            >
              {/* Gradient Background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  feature.gradient
                )}
              />

              {/* Content */}
              <div className="relative">
                <div className="inline-flex p-3 rounded-lg bg-brand-500/10 text-brand-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-heading-md font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-foreground-secondary mb-4">
                  {feature.description}
                </p>

                {/* Details */}
                <ul className="space-y-1.5">
                  {feature.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-body-sm text-foreground-muted"
                    >
                      <div className="w-1 h-1 rounded-full bg-brand-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
