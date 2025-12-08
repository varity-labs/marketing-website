"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-500 text-slate-950 font-semibold hover:bg-brand-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.5),0_0_40px_rgba(20,184,166,0.3)]",
        destructive:
          "bg-error text-white hover:bg-error/90",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-background-quaternary hover:border-brand-500",
        secondary:
          "bg-background-secondary text-foreground border border-border hover:bg-background-tertiary hover:border-brand-500/50",
        ghost:
          "text-foreground-secondary hover:bg-background-quaternary hover:text-foreground",
        link:
          "text-brand-500 underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-brand-500 to-electric-400 text-slate-950 font-semibold hover:from-brand-400 hover:to-electric-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.4),0_0_60px_rgba(59,130,246,0.3)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
