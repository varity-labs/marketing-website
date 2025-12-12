"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Brain, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/components/analytics";

const benefits = [
  "Company-specific AI trained on your data",
  "64% cheaper than cloud alternatives",
  "100% decentralized, 5-layer privacy",
  "No technical expertise required",
];

export function DashboardHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-400/5 via-background to-background" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric-400/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gradient" className="mb-6 py-1.5 px-4">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              GTM Ready - Start Free
            </Badge>

            <h1 className="text-display-lg md:text-display-xl font-display font-bold tracking-tight">
              AI Dashboards
              <br />
              <span className="text-gradient-hero">for Your Business</span>
            </h1>

            <p className="mt-6 text-body-lg md:text-body-xl text-foreground-secondary max-w-lg">
              Get a company-specific AI assistant that understands your
              industry, your data, and your workflows. Deployed on 100%
              decentralized infrastructure.
            </p>

            {/* Benefits */}
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

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button size="xl" variant="gradient" className="gap-2" asChild>
                <a
                  href="http://localhost:3001"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("cta_click", { location: "dashboard_hero", button: "start_free_trial" })}
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link
                  href="/contact"
                  onClick={() => trackEvent("cta_click", { location: "dashboard_hero", button: "talk_to_sales" })}
                >
                  Talk to Sales
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-sm text-foreground-muted">
              No credit card required. 14-day free trial.
            </p>
          </motion.div>

          {/* Right: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative rounded-xl overflow-hidden border border-border bg-background-secondary shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="px-4 py-1 rounded-md bg-background-secondary text-xs text-foreground-muted">
                    your-company.varity.app
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-electric-400 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-foreground">
                        Your Company AI
                      </div>
                      <div className="text-xs text-foreground-muted">
                        Powered by Varity
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-foreground-muted">Online</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Revenue", value: "$1.2M", change: "+12%" },
                    { label: "Users", value: "8,432", change: "+8%" },
                    { label: "Queries", value: "45.2K", change: "+23%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-lg bg-background border border-border"
                    >
                      <div className="text-xs text-foreground-muted">
                        {stat.label}
                      </div>
                      <div className="text-lg font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-brand-400">{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chat */}
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-background-secondary/50 border border-border">
                    <div className="text-sm text-foreground">
                      &quot;What were our top products last quarter?&quot;
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-brand-500/10 border border-brand-500/30">
                    <div className="flex items-start gap-2">
                      <Brain className="h-4 w-4 text-brand-400 mt-0.5" />
                      <div className="text-sm text-foreground">
                        Based on your Q3 data, your top 3 products by revenue
                        were: Widget Pro ($342K), Enterprise Suite ($289K),
                        and API Access ($156K)...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-electric-400/20 to-brand-500/20 rounded-2xl blur-2xl opacity-50 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
