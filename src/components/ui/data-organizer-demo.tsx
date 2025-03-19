"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";
import { FaFolder, FaFileAlt, FaUser } from "react-icons/fa";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-9 items-center justify-center rounded-full border-2 border-border bg-white p-2 shadow-[0_0_15px_-10px_rgba(0,0,0,0.7)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function DataOrganizerDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLDivElement>(null);
  const documentRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);
  const ziggyRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative flex h-[160px] w-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {/* Left side - Input sources - moved further left with more space between items */}
        <div className="flex flex-col space-y-4 pl-2">
          <Circle ref={fileRef} className="size-9 flex items-center justify-center">
            <FaFolder className="text-amber-500 w-4 h-4" />
          </Circle>
          <Circle ref={documentRef} className="size-9 flex items-center justify-center">
            <FaFileAlt className="text-blue-500 w-4 h-4" />
          </Circle>
          <Circle ref={crmRef} className="size-9 flex items-center justify-center">
            <span className="text-xs font-semibold text-[#922ea4]">CRM</span>
          </Circle>
        </div>
        
        {/* Middle - Ziggy */}
        <div className="flex justify-center">
          <Circle ref={ziggyRef} className="size-12">
            <Image 
              src="/ziggy_new.png" 
              alt="Ziggy" 
              width={28} 
              height={28}
              className="object-contain"
              style={{ background: 'transparent', mixBlendMode: 'darken' }}
            />
          </Circle>
        </div>
        
        {/* Right side - User - moved further right */}
        <div className="flex justify-end pr-2">
          <Circle ref={userRef} className="size-9 flex items-center justify-center">
            <FaUser className="text-[#922ea4] w-4 h-4" />
          </Circle>
        </div>
      </div>

      {isMounted && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={fileRef}
            toRef={ziggyRef}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={documentRef}
            toRef={ziggyRef}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={crmRef}
            toRef={ziggyRef}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ziggyRef}
            toRef={userRef}
            curvature={0}
          />
        </>
      )}
    </div>
  );
} 