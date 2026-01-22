"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/components/analytics";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] lg:w-[600px] h-[300px] md:h-[450px] lg:h-[600px] bg-electric-400/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-brand-500/10 text-brand-500 mb-6">
            <Sparkles className="h-8 w-8" />
          </div>

          {/* Headline */}
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Ready to build on
            <br />
            <span className="text-gradient-hero">private infrastructure?</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-body-lg text-foreground-secondary max-w-xl mx-auto">
            Join companies replacing AWS, Google Cloud, and Azure with secure,
            private infrastructure. Start free, scale infinitely.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" variant="gradient" className="gap-2 min-w-[200px]" asChild>
              <a
                href="https://store.varity.so"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("cta_click", { location: "cta_section", button: "explore_apps" })}
              >
                Explore Apps
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="min-w-[200px]" asChild>
              <Link
                href="/contact"
                onClick={() => trackEvent("cta_click", { location: "cta_section", button: "talk_to_sales" })}
              >
                Talk to Sales
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <p className="mt-8 text-sm text-foreground-muted">
            No credit card required &bull; 14-day free trial &bull; Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
