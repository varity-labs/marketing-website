"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Shield,
  Lock,
  Database,
  Server,
  Link as LinkIcon,
  Key,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Layer {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string;
}

const layers: Layer[] = [
  {
    icon: <Key className="h-5 w-5" />,
    title: "Layer 1: Encryption at Rest",
    description:
      "All data encrypted before storage. Only you can decrypt it with your private key.",
    tech: "Military-Grade",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Layer 2: Redundant Storage",
    description:
      "Your data is replicated across multiple secure locations. If one location goes down, your data remains accessible.",
    tech: "Global",
  },
  {
    icon: <LinkIcon className="h-5 w-5" />,
    title: "Layer 3: Data Verification",
    description:
      "Every piece of data is cryptographically verified. Ensures your data hasn't been tampered with or corrupted.",
    tech: "Cryptographic",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Layer 4: Secure Computing",
    description:
      "Processing happens on independent secure servers. No corporate access to your data. Automatically deleted after processing.",
    tech: "Isolated",
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Layer 5: Immutable Logs",
    description:
      "Every data access is permanently logged and cannot be altered. Complete transparency with tamper-proof audit trails.",
    tech: "Permanent",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Security() {
  return (
    <section className="section-padding relative overflow-hidden bg-background-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Military-Grade Security</span>
            </div>

            <h2 className="text-display-md md:text-display-lg font-display font-bold">
              5-Layer Privacy
              <br />
              <span className="text-purple-400">Architecture</span>
            </h2>

            <p className="mt-6 text-body-lg text-foreground-secondary">
              No single entity—not Varity, not cloud providers, not governments—can
              access your data without your explicit wallet signature.
            </p>

            {/* Guarantee Box */}
            <div className="mt-8 p-6 rounded-xl bg-purple-500/10 border border-purple-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-heading-md font-semibold text-foreground mb-2">
                    The Varity Guarantee
                  </h3>
                  <p className="text-body-md text-foreground-secondary">
                    This is <span className="text-purple-400 font-medium">provable privacy</span> vs.
                    AWS/GCP/Azure&apos;s &quot;trust us&quot; model. Your data is mathematically
                    inaccessible to anyone without your wallet signature.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: 5 Layers */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                variants={itemVariants}
                className={cn(
                  "relative p-4 rounded-lg border",
                  "bg-background border-border",
                  "hover:border-purple-500/40 transition-colors",
                  "group"
                )}
              >
                {/* Connection Line */}
                {index < layers.length - 1 && (
                  <div className="absolute left-7 top-full w-0.5 h-4 bg-gradient-to-b from-purple-500/50 to-transparent" />
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={cn(
                    "flex-shrink-0 p-2.5 rounded-lg",
                    "bg-purple-500/10 text-purple-400",
                    "group-hover:bg-purple-500/20 transition-colors"
                  )}>
                    {layer.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-body-md font-semibold text-foreground">
                        {layer.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-medium">
                        {layer.tech}
                      </span>
                    </div>
                    <p className="text-body-sm text-foreground-secondary">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
