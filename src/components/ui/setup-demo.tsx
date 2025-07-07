"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";
import { FaEnvelope, FaFileAlt, FaWhatsapp } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
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

export function SetupDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const websiteRef = useRef<HTMLDivElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);
  const filesRef = useRef<HTMLDivElement>(null);
  const ziggyRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const mlsRef = useRef<HTMLDivElement>(null);
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
        {/* Left side - Input sources */}
        <div className="flex flex-col space-y-4">
          <Circle ref={websiteRef}>
            <BsGlobe className="text-[#7F00FF] w-4 h-4" />
          </Circle>
          <Circle ref={whatsappRef}>
            <FaWhatsapp className="text-green-500 w-4 h-4" />
          </Circle>
          <Circle ref={filesRef}>
            <FaFileAlt className="text-blue-500 w-4 h-4" />
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
        
        {/* Right side - Output sources */}
        <div className="flex flex-col space-y-4">
          <Circle ref={crmRef}>
            <span className="text-xs font-semibold text-[#7F00FF]">CRM</span>
          </Circle>
          <Circle ref={emailRef}>
            <FaEnvelope className="text-red-600 w-4 h-4" />
          </Circle>
          <Circle ref={mlsRef}>
            <span className="text-xs font-semibold text-[#7F00FF]">MLS</span>
          </Circle>
        </div>
      </div>

      {/* Animated beams */}
      {isMounted && (
        <>
          {/* Input to Ziggy */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={websiteRef}
            toRef={ziggyRef}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={whatsappRef}
            toRef={ziggyRef}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={filesRef}
            toRef={ziggyRef}
            curvature={0}
          />
          
          {/* Ziggy to Output */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ziggyRef}
            toRef={crmRef}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ziggyRef}
            toRef={emailRef}
            curvature={0}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ziggyRef}
            toRef={mlsRef}
            curvature={0}
          />
        </>
      )}
    </div>
  );
} 