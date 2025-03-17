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
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_15px_-5px_rgba(0,0,0,0.6)]",
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
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  // For tracking if the component is mounted
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
      className="relative flex h-[240px] w-full items-center justify-center"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-5 px-6">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.website />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.gmail />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.crm />
          </Circle>
          <Circle ref={div4Ref} className="size-16 p-1">
            <Icons.rezigco />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.files />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.mls />
          </Circle>
        </div>
      </div>

      {/* Animated beams */}
      {isMounted && (
        <>
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div4Ref}
            duration={1200}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div4Ref}
            duration={1500}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div4Ref}
            duration={1800}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div4Ref}
            duration={1200}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div4Ref}
            duration={1500}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div7Ref}
            toRef={div4Ref}
            duration={1800}
          />
        </>
      )}
    </div>
  );
}

const Icons = {
  website: () => (
    <div className="flex items-center justify-center w-full h-full">
      <BsGlobe className="text-[#922ea4] w-6 h-6" />
    </div>
  ),
  crm: () => (
    <div className="flex items-center justify-center w-full h-full">
      <span className="text-[12px] font-semibold text-[#922ea4]">CRM</span>
    </div>
  ),
  rezigco: () => (
    <div className="flex items-center justify-center w-full h-full">
      <Image 
        src="/ziggy_new.png" 
        alt="Ziggy" 
        width={48} 
        height={48}
        className="object-contain mix-blend-multiply"
        style={{ background: 'transparent' }}
      />
    </div>
  ),
  whatsapp: () => (
    <FaWhatsapp className="text-green-500 w-6 h-6" />
  ),
  gmail: () => (
    <FaEnvelope className="text-red-600 w-6 h-6" />
  ),
  files: () => (
    <FaFileAlt className="text-blue-500 w-6 h-6" />
  ),
  mls: () => (
    <div className="flex items-center justify-center w-full h-full">
      <span className="text-[12px] font-semibold text-[#922ea4]">MLS</span>
    </div>
  ),
}; 