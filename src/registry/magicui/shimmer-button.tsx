"use client";

import React, { CSSProperties, ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "rgba(146, 46, 164, 0.9)", // Made shimmer more opaque
      shimmerSize = "0.1em", // Increased from 0.05em
      shimmerDuration = "2.5s", // Slightly faster animation
      borderRadius = "0.375rem",
      background = "white", // White background
      className,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const buttonContent = (
      <button
        style={
          {
            "--spread": "120deg", // Increased from 90deg
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border-2 border-[#922ea4] px-6 py-3 text-[#922ea4] font-semibold [background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-all duration-300 ease-in-out active:translate-y-px h-12",
          "hover:bg-[#922ea4] hover:text-white",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container - improved visibility */}
        <div
          className={cn(
            "-z-10 blur-[3px]", // Increased blur and improved z-index
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        <span className="z-10 relative tracking-wider uppercase font-bold text-base">{children}</span>

        {/* Highlight */}
        <div
          className={cn(
            "insert-0 absolute size-full",
            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            // transition
            "transform-gpu transition-all duration-300 ease-in-out",
            // on hover
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            // on click
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          )}
        />

        {/* backdrop - added subtle glow */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
          )}
        />
      </button>
    );

    if (href) {
      return (
        <Link href={href} className="block w-full">
          {buttonContent}
        </Link>
      );
    }

    return buttonContent;
  },
);

ShimmerButton.displayName = "ShimmerButton"; 