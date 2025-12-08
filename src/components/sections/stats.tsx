"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import CountUp from "react-countup";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 89,
    suffix: "%",
    label: "Total Savings",
    description: "Including AI capabilities vs. GCP",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    description: "Decentralized redundancy",
  },
  {
    value: 5,
    suffix: " Layers",
    label: "Privacy Protection",
    description: "End-to-end encryption",
  },
  {
    value: 60,
    suffix: " seconds",
    label: "Deploy Time",
    description: "From signup to live",
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

function StatCard({ stat }: { stat: Stat }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="card card-hover text-center"
    >
      <div className="text-display-lg md:text-display-xl font-bold text-gradient mb-2">
        {isInView ? (
          <CountUp
            end={stat.value}
            duration={2}
            decimals={stat.value % 1 !== 0 ? 1 : 0}
            suffix={stat.suffix}
          />
        ) : (
          `0${stat.suffix}`
        )}
      </div>
      <div className="text-heading-md font-semibold text-foreground mb-1">
        {stat.label}
      </div>
      <div className="text-body-sm text-foreground-secondary">
        {stat.description}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="section-padding bg-background-secondary/30">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
