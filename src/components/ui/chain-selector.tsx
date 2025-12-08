"use client";

import * as React from "react";
import { ChevronDown, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Chain {
  id: string;
  name: string;
  icon: React.ReactNode;
  active: boolean;
  comingSoon?: boolean;
}

const chains: Chain[] = [
  {
    id: "arbitrum",
    name: "Arbitrum",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 7l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    active: true,
  },
  {
    id: "algorand",
    name: "Algorand",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <polygon
          points="12,2 22,22 2,22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    active: false,
    comingSoon: true,
  },
  {
    id: "zksync",
    name: "zkSync",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l9 5v10l-9 5-9-5V7l9-5z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M12 22V12M2 7l10 5 10-5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    active: false,
    comingSoon: true,
  },
  {
    id: "base",
    name: "Base",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 16V8M8 12l4-4 4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    active: false,
    comingSoon: true,
  },
];

interface ChainSelectorProps {
  className?: string;
}

export function ChainSelector({ className }: ChainSelectorProps) {
  const [selectedChain, setSelectedChain] = React.useState(chains[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "gap-2 border-brand-500/30 bg-brand-500/10 text-brand-400 hover:bg-brand-500/20 hover:border-brand-500/50",
            className
          )}
        >
          {selectedChain.icon}
          <span className="hidden sm:inline">{selectedChain.name}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-background-secondary border-border"
      >
        {chains.map((chain) => (
          <DropdownMenuItem
            key={chain.id}
            onClick={() => chain.active && setSelectedChain(chain)}
            disabled={!chain.active}
            className={cn(
              "flex items-center justify-between gap-2 cursor-pointer",
              !chain.active && "opacity-50 cursor-not-allowed"
            )}
          >
            <div className="flex items-center gap-2">
              {chain.icon}
              <span>{chain.name}</span>
            </div>
            {chain.comingSoon ? (
              <span className="text-xs text-foreground-muted">Soon</span>
            ) : chain.id === selectedChain.id ? (
              <Check className="h-4 w-4 text-brand-500" />
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
