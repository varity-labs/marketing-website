"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  Database,
  Shield,
  Zap,
  Globe,
  Lock,
  Code,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Maximum Security",
    description:
      "Five layers of protection keep your data safe. Military-grade encryption, distributed storage, and secure computing.",
    gradient: "from-purple-400/20 to-purple-400/5",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Secure Storage",
    description:
      "Your data is stored across multiple locations worldwide. If one location fails, your data remains safe and accessible.",
    gradient: "from-electric-400/20 to-electric-400/5",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Deployment",
    description:
      "Deploy your applications to infrastructure worldwide. Choose the regions that work best for your users and compliance needs.",
    gradient: "from-brand-500/20 to-brand-500/5",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Deployment",
    description:
      "One-click deployment in 60 seconds. No DevOps team needed, no complex configuration required.",
    gradient: "from-electric-400/20 to-electric-400/5",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "You Own Everything",
    description:
      "Only you control your encryption keys. Not Varity, not cloud providers, not governments. Full data ownership.",
    gradient: "from-purple-400/20 to-purple-400/5",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Open Source Tools",
    description:
      "All packages are MIT licensed and open source. Fork, modify, and contribute freely. No vendor lock-in, ever.",
    gradient: "from-brand-500/20 to-brand-500/5",
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

export function Features() {
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
            <span className="text-gradient">replace the cloud</span>
          </h2>
          <p className="mt-4 text-body-lg text-foreground-secondary">
            Enterprise-grade infrastructure on 100% decentralized networks.
            No corporate servers, no surveillance, no lock-in.
          </p>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={cn(
                "card card-hover group relative overflow-hidden",
                index === 0 && "md:col-span-2 lg:col-span-1"
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
                <h3 className="text-heading-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-md text-foreground-secondary">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
