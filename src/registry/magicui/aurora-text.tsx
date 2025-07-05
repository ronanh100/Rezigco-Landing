"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export function AuroraText({
  children,
  className,
  primaryColor = "#7F00FF", // Brand purple as default
  secondaryColor = "#ffffff",
}: AuroraTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block animate-text-shimmer bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 40%, ${primaryColor} 80%)`,
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </span>
  );
} 