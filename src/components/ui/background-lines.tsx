"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundLines = ({
  children,
  className,
  containerClassName,
  lineClassName,
  reverse,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  lineClassName?: string;
  reverse?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-full w-full relative overflow-hidden",
        containerClassName
      )}
    >
      {/* Lines container */}
      <div className="absolute inset-0 w-full h-full z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent",
              isVisible &&
                (reverse
                  ? "animate-background-line-reverse"
                  : "animate-background-line"),
              lineClassName
            )}
            style={{
              left: `${(i + 1) * 5}%`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}; 