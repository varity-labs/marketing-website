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

const benefits = [
  "100% decentralized infrastructure",
  "64-80% cost savings vs cloud",
  "5-layer military-grade privacy",
  "No corporate surveillance",
  "No vendor lock-in",
  "Self-sovereign data",
];

const comparison = [
  {
    feature: "Data Access",
    cloud: "Provider has full access",
    varity: "Only you can access",
  },
  {
    feature: "Infrastructure",
    cloud: "Centralized servers",
    varity: "Distributed DePin nodes",
  },
  {
    feature: "Cost Model",
    cloud: "Escalating pricing",
    varity: "64% cheaper",
  },
  {
    feature: "Lock-in",
    cloud: "Proprietary APIs",
    varity: "Open standards",
  },
];

export function Solution() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-brand-500/5 to-background" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] bg-brand-500/10 rounded-full blur-3xl opacity-50" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">The Solution</span>
            </div>

            <h2 className="text-display-md md:text-display-lg font-display font-bold">
              Varity: The Operating
              <br />
              <span className="text-gradient-hero">System for Web3</span>
            </h2>

            <p className="mt-6 text-body-lg text-foreground-secondary">
              Replace AWS, Google Cloud, and Azure with 100% decentralized
              infrastructure. Same capabilities, 64% cheaper, with privacy
              guarantees that are mathematically provable.
            </p>

            {/* Benefits List */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-1 rounded-full bg-brand-500/20 text-brand-400">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-body-md text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/platform">
                  Learn How It Works
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-0 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-background-secondary border-b border-border">
              <div className="text-body-sm font-medium text-foreground-muted">
                Feature
              </div>
              <div className="text-body-sm font-medium text-red-400 text-center">
                Traditional Cloud
              </div>
              <div className="text-body-sm font-medium text-brand-400 text-center">
                Varity
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {comparison.map((row, index) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-4"
                >
                  <div className="text-body-md font-medium text-foreground">
                    {row.feature}
                  </div>
                  <div className={cn(
                    "text-body-sm text-center py-1 px-2 rounded",
                    "bg-red-500/10 text-red-400"
                  )}>
                    {row.cloud}
                  </div>
                  <div className={cn(
                    "text-body-sm text-center py-1 px-2 rounded",
                    "bg-brand-500/10 text-brand-400"
                  )}>
                    {row.varity}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
