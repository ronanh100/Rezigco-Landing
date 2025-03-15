"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  duration?: number;
}

export function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
  className,
  duration = 1000,
}: AnimatedBeamProps) {
  const [path, setPath] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (!fromRef.current || !toRef.current || !containerRef.current) return;

    const calculatePath = () => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const fromRect = fromRef.current!.getBoundingClientRect();
      const toRect = toRef.current!.getBoundingClientRect();

      // Calculate positions relative to the container
      const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
      const toX = toRect.left + toRect.width / 2 - containerRect.left;
      const toY = toRect.top + toRect.height / 2 - containerRect.top;

      // Calculate control points for a more compact curve
      const dx = toX - fromX;
      const dy = toY - fromY;
      const controlX1 = fromX + dx * 0.3;
      const controlY1 = fromY;
      const controlX2 = fromX + dx * 0.7;
      const controlY2 = toY;

      // Create a curved path with tighter control points
      return `M${fromX},${fromY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${toX},${toY}`;
    };

    // Initial path calculation
    setPath(calculatePath());

    // Recalculate on resize
    const handleResize = () => {
      setPath(calculatePath());
    };

    window.addEventListener("resize", handleResize);

    // Set up animation interval
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, duration);
    }, duration * 3); // Animate every 3x the duration

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(animationInterval);
    };
  }, [fromRef, toRef, containerRef, duration]);

  return (
    <svg
      className={cn("absolute left-0 top-0 h-full w-full", className)}
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#922ea4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#922ea4" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="url(#beamGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={cn(
          "transition-opacity",
          isAnimating ? "opacity-100" : "opacity-30"
        )}
      />
      {isAnimating && (
        <path
          d={path}
          fill="none"
          stroke="#922ea4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 6"
          className="animate-dash"
          style={{
            animation: `dash ${duration}ms linear forwards`,
          }}
        />
      )}
      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dashoffset: 500;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
} 