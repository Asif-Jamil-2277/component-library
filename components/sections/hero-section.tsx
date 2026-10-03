"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export interface HeroSectionProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description: string;

  primaryButton?: {
    label: string;
    href: string;
  };

  secondaryButton?: {
    label: string;
    href: string;
  };

  eyebrowIcon?: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function HeroSection({
  badge = "Built for modern businesses",
  title,
  highlightedText,
  description,
  primaryButton = {
    label: "Get Started",
    href: "#",
  },
  secondaryButton = {
    label: "Learn More",
    href: "#",
  },
  eyebrowIcon,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative isolate flex min-h-[680px] items-center overflow-hidden bg-white px-6 py-24 sm:px-8 lg:min-h-[760px] lg:px-12 ${className}`}
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]" />

        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-indigo-100/40 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
              {eyebrowIcon ?? <Sparkles className="h-3.5 w-3.5" />}
            </span>

            {badge}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-balance text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}{" "}
            {highlightedText && (
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {highlightedText}
              </span>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href={primaryButton.href}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {primaryButton.label}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href={secondaryButton.href}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {secondaryButton.label}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}