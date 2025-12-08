"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ComingSoonLinkProps {
  children: React.ReactNode;
  className?: string;
  message?: string;
}

export function ComingSoonLink({
  children,
  className,
  message = "Coming Soon",
}: ComingSoonLinkProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(
              "cursor-not-allowed opacity-50 inline-flex items-center gap-1",
              className
            )}
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
