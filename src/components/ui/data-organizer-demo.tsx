"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";
import { BsFolderFill, BsFileEarmarkTextFill } from "react-icons/bs";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white p-1 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function DataOrganizerDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between px-6">
        <div className="flex flex-col justify-center gap-6">
          <Circle ref={div1Ref}>
            <Icons.crm />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.folder />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.document />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div4Ref} className="size-12 p-2">
            <Icons.rezigco />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div5Ref}>
            <Icons.user />
          </Circle>
        </div>
      </div>

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
        fromRef={div4Ref}
        toRef={div5Ref}
        duration={1000}
      />
    </div>
  );
}

const Icons = {
  folder: () => <BsFolderFill className="text-amber-400 w-5 h-5" />,
  document: () => <BsFileEarmarkTextFill className="text-sky-500 w-5 h-5" />,
  crm: () => (
    <div className="flex items-center justify-center w-full h-full">
      <span className="text-[10px] font-semibold text-purple-700">CRM</span>
    </div>
  ),
  rezigco: () => (
    <div className="flex items-center justify-center bg-purple-500 rounded-full w-full h-full">
      <span className="text-[10px] font-bold text-white">RZ</span>
    </div>
  ),
  user: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
}; 