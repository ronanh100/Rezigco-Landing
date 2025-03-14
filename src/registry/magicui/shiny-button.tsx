"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }
>(({ children, className, ...props }, ref) => {
  return (
    <div className="relative group">
      <button
        ref={ref}
        className={cn(
          "relative z-10 rounded-lg border border-[#922ea4] bg-transparent px-6 py-3 text-[#922ea4] font-semibold transition-all duration-300 hover:bg-[#922ea4] hover:text-white w-full text-center shadow-sm hover:shadow-md",
          className
        )}
        {...props}
      >
        {children}
      </button>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 rounded-lg border border-[#922ea4] opacity-0"></div>
        
        {/* Top border shine */}
        <div 
          className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#922ea4] to-transparent"
          style={{
            animation: "shineRight 2.5s infinite",
            opacity: 0.9,
          }}
        ></div>
        
        {/* Right border shine */}
        <div 
          className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#922ea4] to-transparent"
          style={{
            animation: "shineDown 2.5s infinite",
            animationDelay: "0.4s",
            opacity: 0.9,
          }}
        ></div>
        
        {/* Bottom border shine */}
        <div 
          className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#922ea4] to-transparent"
          style={{
            animation: "shineLeft 2.5s infinite",
            animationDelay: "0.8s",
            opacity: 0.9,
          }}
        ></div>
        
        {/* Left border shine */}
        <div 
          className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#922ea4] to-transparent"
          style={{
            animation: "shineUp 2.5s infinite",
            animationDelay: "1.2s",
            opacity: 0.9,
          }}
        ></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
             style={{ 
               boxShadow: "0 0 15px 5px #922ea4",
               transition: "opacity 0.3s ease"
             }}>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shineRight {
          0%, 20% { transform: translateX(-100%); }
          60%, 100% { transform: translateX(100%); }
        }
        @keyframes shineDown {
          0%, 20% { transform: translateY(-100%); }
          60%, 100% { transform: translateY(100%); }
        }
        @keyframes shineLeft {
          0%, 20% { transform: translateX(100%); }
          60%, 100% { transform: translateX(-100%); }
        }
        @keyframes shineUp {
          0%, 20% { transform: translateY(100%); }
          60%, 100% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  );
});

ShinyButton.displayName = "ShinyButton"; 