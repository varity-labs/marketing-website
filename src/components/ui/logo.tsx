"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type LogoVariant = "default" | "white" | "color" | "teal" | "blue" | "dark";

interface LogoProps {
  variant?: LogoVariant;
  size?: "sm" | "md" | "lg" | "xl";
  withText?: boolean;
  className?: string;
  href?: string;
}

const variantMap: Record<LogoVariant, string> = {
  default: "/logo/varity-logo.svg",
  white: "/logo/varity-logo-white.svg",
  color: "/logo/varity-logo-color.svg",
  teal: "/logo/varity-logo-teal.svg",
  blue: "/logo/varity-logo-blue.svg",
  dark: "/logo/varity-logo-dark.svg",
};

const sizeMap = {
  sm: { width: 24, height: 24, textClass: "text-lg" },
  md: { width: 32, height: 32, textClass: "text-xl" },
  lg: { width: 40, height: 40, textClass: "text-2xl" },
  xl: { width: 48, height: 48, textClass: "text-3xl" },
};

export function Logo({
  variant = "color",
  size = "md",
  withText = true,
  className,
  href = "/",
}: LogoProps) {
  const logoSrc = variantMap[variant];
  const { width, height, textClass } = sizeMap[size];

  const content = (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src={logoSrc}
        alt="Varity Logo"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
      {withText && (
        <span
          className={cn(
            "font-display font-bold tracking-tight",
            textClass,
            variant === "white" || variant === "dark"
              ? "text-white"
              : "text-foreground"
          )}
        >
          Varity
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
      >
        {content}
      </Link>
    );
  }

  return content;
}
