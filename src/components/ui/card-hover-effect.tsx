"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AnimatedListDemo } from "./animated-list-demo";
import { ChatEngagerDemo } from "./chat-engager-demo";
import { DataOrganizerDemo } from "./data-organizer-demo";
import { InsightsDemo } from "./insights-demo";
import Link from "next/link";

// Add keyframe animation for shimmer
const shimmerAnimation = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

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
    <ChatEngagerDemo key="chat-engager" />, // Chat Engager animation
    <AnimatedListDemo key="inbound-automator" />, // Inbound Automator animation
    <DataOrganizerDemo key="data-organizer" />, // Data Organizer animation
    <InsightsDemo key="insights" />, // Insights animation
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-3",
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
              {/* Animation container - fixed height for all cards */}
              <div className={cn(
                "h-[160px] w-full overflow-hidden rounded-t-xl flex items-center justify-center",
                "bg-white"
              )}>
                <div className="h-full w-full flex items-center justify-center">
                  {cardAnimations[idx % cardAnimations.length]}
                </div>
              </div>
              
              {/* Card content - ensure fixed height for all cards */}
              <div className={cn(
                "flex-1 p-3 min-h-[125px] flex flex-col",
                "bg-white"
              )}>
                {idx === 0 ? (
                  <div className="mb-2">
                    <Link 
                      href="/chat-engager" 
                      className="inline-block"
                    >
                      <button 
                        className="relative inline-flex h-8 overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 hover:scale-105"
                        aria-label="Learn more about Chat Engager"
                        style={{ backgroundColor: '#8a3ab9' }}
                      >
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md px-3 py-0 font-bold text-white">
                          {item.title} <span className="ml-1">→</span>
                        </span>
                        <span 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                            animation: 'shimmer 2s infinite',
                          }}
                        />
                      </button>
                      <style jsx>{shimmerAnimation}</style>
                    </Link>
                  </div>
                ) : (
                  <CardTitle>{item.title}</CardTitle>
                )}
                <CardDescription className="flex-1">{item.description}</CardDescription>
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
        className="relative z-50 rounded-lg overflow-hidden h-full"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(146,46,164,0.1)',
          background: 'white',
        }}
      >
        <div className="h-full">{children}</div>
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