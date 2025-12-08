"use client";

import * as React from "react";
import { motion } from "motion/react";

export function PricingHero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-display-lg md:text-display-xl font-display font-bold tracking-tight">
            Simple, transparent
            <br />
            <span className="text-gradient-hero">pricing</span>
          </h1>

          <p className="mt-6 text-body-lg md:text-body-xl text-foreground-secondary">
            Start free, scale as you grow. Save{" "}
            <span className="text-brand-400 font-medium">64-80%</span> compared
            to traditional cloud providers.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 inline-flex items-center gap-4 p-1.5 rounded-full bg-background-secondary border border-border">
            <button className="px-6 py-2.5 rounded-full bg-brand-500 text-white text-sm font-medium">
              Monthly
            </button>
            <button className="px-6 py-2.5 rounded-full text-foreground-secondary hover:text-foreground text-sm font-medium transition-colors">
              Annual <span className="text-brand-400">(Save 20%)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
