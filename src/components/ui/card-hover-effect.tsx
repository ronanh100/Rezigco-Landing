"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AnimatedListDemo } from "./animated-list-demo";

export function HoverEffect({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    emoji: string;
  }[];
  className?: string;
}) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define animations for each card
  const cardAnimations = [
    null, // Placeholder for Chat Engager animation
    <AnimatedListDemo key="inbound-automator" />, // Inbound Automator animation
    null, // Placeholder for Data Organiser animation
    null, // Placeholder for Insights animation
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card isHovered={hoveredIndex === idx}>
            <div className="flex flex-col h-full">
              {/* Animation or Image Container */}
              <div className="h-[180px] w-full overflow-hidden rounded-t-xl bg-gradient-to-b from-gray-50 to-gray-100">
                {idx === 1 ? (
                  <div className="h-full p-2">
                    {cardAnimations[1]}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    {/* Placeholder for future animations */}
                    <div className="text-gray-400 text-lg">Animation coming soon</div>
                  </div>
                )}
              </div>
              
              {/* Card Content */}
              <div className="flex-1 p-3 bg-gradient-to-b from-gray-100 to-white">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

export function Card({
  className,
  children,
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full overflow-hidden relative z-20 transition-all duration-500",
        isHovered ? 
          "shadow-[0_20px_50px_-15px_rgba(146,46,164,0.5)] translate-y-[-8px]" : 
          "shadow-lg",
        className
      )}
      style={{
        background: isHovered ? 
          'linear-gradient(to bottom right, white, #f9f5ff)' : 
          'linear-gradient(to bottom right, white, #fcfaff)',
        border: '1px solid rgba(146,46,164,0.3)',
        boxShadow: isHovered ?
          '0 10px 30px -5px rgba(146,46,164,0.3), 0 0 0 1px rgba(146,46,164,0.2), 0 2px 0 rgba(255,255,255,1), 0 -1px 0 rgba(255,255,255,1), inset 0 0 20px rgba(146,46,164,0.05)' :
          '0 8px 20px -5px rgba(146,46,164,0.15), 0 0 0 1px rgba(146,46,164,0.15), 0 1px 0 rgba(255,255,255,1), inset 0 0 15px rgba(146,46,164,0.03)',
        transform: isHovered ?
          'translateY(-8px) perspective(1000px) rotateX(2deg)' :
          'translateY(0) perspective(1000px) rotateX(1deg)',
        padding: '3px',
      }}
    >
      <div 
        className="relative z-50 rounded-lg overflow-hidden"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(146,46,164,0.1)',
          background: 'white',
        }}
      >
        <div className="p-2">{children}</div>
      </div>
      
      {/* Permanent subtle shine effect */}
      <div 
        className="absolute inset-0 rounded-xl z-10 opacity-30 transition-opacity duration-300"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(146,46,164,0.2)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(146,46,164,0.05) 50%, rgba(255,255,255,0.1) 100%)',
        }}
      />
      
      {/* Enhanced shine effects on hover */}
      {isHovered && (
        <>
          <div className="absolute top-0 right-full w-1/2 h-full bg-gradient-to-r from-transparent to-white/40 skew-x-[20deg] z-10 shine-right" />
          <div className="absolute top-full right-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white/40 skew-y-[20deg] z-10 shine-down" />
          <div className="absolute top-0 left-full w-1/2 h-full bg-gradient-to-l from-transparent to-white/40 skew-x-[-20deg] z-10 shine-left" />
          <div className="absolute bottom-full right-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white/40 skew-y-[-20deg] z-10 shine-up" />
          
          {/* Enhanced 3D border effect */}
          <div 
            className="absolute inset-0 rounded-xl z-10 transition-opacity duration-300"
            style={{
              boxShadow: 'inset 0 0 0 1px rgba(146,46,164,0.4)',
              background: 'linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(146,46,164,0.05))',
            }}
          />
        </>
      )}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4 className={cn("text-[#922ea4] font-bold text-lg tracking-wide", className)}>
      {children}
    </h4>
  );
}

export function CardDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "mt-2 text-gray-700 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
} 