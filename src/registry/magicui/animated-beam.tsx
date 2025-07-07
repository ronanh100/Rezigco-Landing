"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLDivElement | null>;
  toRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  duration?: number;
  curvature?: number;
  endYOffset?: number;
  reverse?: boolean;
}

export function AnimatedBeam({
  fromRef,
  toRef,
  containerRef,
  className,
  duration = 1500,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
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
      const toY = toRect.top + toRect.height / 2 - containerRect.top + endYOffset;

      // Calculate direct line
      if (curvature === 0) {
        return `M${fromX},${fromY} L${toX},${toY}`;
      }

      // Calculate curved path with control points
      const dx = toX - fromX;
      const dy = toY - fromY;
      
      // Apply curvature
      const curveX = Math.abs(curvature);
      const curveY = curvature;
      
      // Calculate control points with curvature
      let controlX1, controlY1, controlX2, controlY2;
      
      if (reverse) {
        controlX1 = toX - dx * 0.3;
        controlY1 = toY - curveY;
        controlX2 = fromX + dx * 0.3;
        controlY2 = fromY + curveY;
      } else {
        controlX1 = fromX + dx * 0.3;
        controlY1 = fromY + curveY;
        controlX2 = toX - dx * 0.3;
        controlY2 = toY - curveY;
      }

      // Create a curved path
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
    }, duration * 2.5);

    // Start animation immediately
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, duration);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(animationInterval);
    };
  }, [fromRef, toRef, containerRef, duration, curvature, endYOffset, reverse]);

  return (
    <svg
      className={cn("absolute left-0 top-0 h-full w-full pointer-events-none", className)}
      style={{ zIndex: 5 }}
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F00FF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#7F00FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7F00FF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Subtle background line with reduced opacity */}
      <path
        d={path}
        fill="none"
        stroke="url(#beamGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="opacity-30"
      />
      {isAnimating && (
        <path
          d={path}
          fill="none"
          stroke="#7F00FF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="15 20"
          className="animate-dash"
          style={{
            animation: `dash ${duration}ms linear forwards`,
            filter: "drop-shadow(0 0 3px rgba(146, 46, 164, 0.8))"
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