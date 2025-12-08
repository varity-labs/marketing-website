"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Brain,
  MessageSquare,
  BarChart3,
  FileSearch,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Company-Specific AI",
    description: "AI trained on YOUR business data, not generic models",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Natural Language Queries",
    description: "Ask questions in plain English, get instant insights",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Real-Time Analytics",
    description: "Live dashboards with automated anomaly detection",
  },
  {
    icon: <FileSearch className="h-5 w-5" />,
    title: "Document Intelligence",
    description: "50,000+ industry documents for contextual answers",
  },
];

export function AIDashboard() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-electric-400/5 to-background" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-electric-400/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Dashboard Preview */}
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
                    dashboard.varity.xyz
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-lg font-semibold text-foreground">Acme Corp Dashboard</div>
                    <div className="text-sm text-foreground-muted">Powered by Varity AI</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-foreground-muted">AI Online</span>
                  </div>
                </div>

                {/* Stats Grid with Realistic Data */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Monthly Revenue", value: "$842K", change: "+18.3%", trend: "up" },
                    { label: "Active Customers", value: "12,847", change: "+24.1%", trend: "up" },
                    { label: "AI Insights", value: "98.4K", change: "+42.7%", trend: "up" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-lg bg-background/50 border border-border backdrop-blur-sm hover:border-brand-500/30 transition-colors">
                      <div className="text-xs text-foreground-muted mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="flex items-center gap-1">
                        <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                          {stat.change}
                        </span>
                        <svg className="w-3 h-3" viewBox="0 0 12 12">
                          <path 
                            d={stat.trend === 'up' ? 'M6 3L10 8H2L6 3Z' : 'M6 9L2 4H10L6 9Z'}
                            fill="currentColor"
                            className={stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced AI Chat with Response */}
                <div className="space-y-3">
                  {/* User Query */}
                  <div className="p-3 rounded-lg bg-brand-500/10 border border-brand-500/30">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded bg-brand-500/20">
                        <MessageSquare className="h-3 w-3 text-brand-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-brand-400 mb-1">You</div>
                        <div className="text-sm text-foreground">
                          &quot;What&apos;s driving our revenue growth this month?&quot;
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="p-3 rounded-lg bg-electric-400/10 border border-electric-400/30">
                    <div className="flex items-start gap-2">
                      <div className="p-1.5 rounded bg-electric-400/20">
                        <Brain className="h-3 w-3 text-electric-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-electric-400 mb-1">Varity AI</div>
                        <div className="text-sm text-foreground mb-2">
                          Based on your integrated data from QuickBooks and Salesforce:
                        </div>
                        <ul className="text-xs text-foreground-secondary space-y-1">
                          <li className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-electric-400" />
                            Enterprise plan upgrades: +$142K (42% of growth)
                          </li>
                          <li className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-electric-400" />
                            New customer acquisition: +$98K (28% of growth)
                          </li>
                          <li className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-electric-400" />
                            Reduced churn rate: 2.1% → 1.3%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-electric-400/20 to-brand-500/20 rounded-2xl blur-2xl opacity-50 -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-400/10 text-electric-400 mb-6">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">GTM Ready</span>
            </div>

            <h2 className="text-display-md md:text-display-lg font-display font-bold">
              AI that actually
              <br />
              <span className="text-gradient">understands your business</span>
            </h2>

            <p className="mt-6 text-body-lg text-foreground-secondary">
              Connect all your business tools in one dashboard. Get AI insights trained on
              <span className="text-brand-400 font-medium"> YOUR data</span>, not generic models.
              Ask questions in plain English. Get answers that actually matter.
            </p>

            {/* Features List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className={cn(
                    "p-4 rounded-lg",
                    "bg-background-secondary/50 border border-border",
                    "hover:border-electric-400/30 transition-colors"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded bg-electric-400/10 text-electric-400">
                      {feature.icon}
                    </div>
                    <span className="text-body-md font-medium text-foreground">
                      {feature.title}
                    </span>
                  </div>
                  <p className="text-body-sm text-foreground-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" variant="gradient" className="gap-2" asChild>
                <Link href="/dashboard">
                  Try AI Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/platform">See All Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
