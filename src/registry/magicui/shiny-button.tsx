"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string; href?: string }
>(({ children, className, onClick, href, ...props }, ref) => {
  const buttonContent = (
    <button
      ref={ref}
      className={cn(
        "relative z-10 rounded-lg border border-[#922ea4] bg-transparent px-6 py-3 text-[#922ea4] font-semibold transition-all duration-300 group-hover:bg-[#922ea4] group-hover:text-white w-full text-center shadow-sm group-hover:shadow-md",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );

  const buttonWrapper = (
    <div className="relative group">
      {buttonContent}
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div className="absolute inset-0 rounded-lg border border-[#922ea4] opacity-0"></div>
        
        {/* Top border shine */}
        <div 
          className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#922ea4] to-transparent shine-right"
          style={{
            opacity: 0.9,
          }}
        ></div>
        
        {/* Right border shine */}
        <div 
          className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#922ea4] to-transparent shine-down"
          style={{
            opacity: 0.9,
          }}
        ></div>
        
        {/* Bottom border shine */}
        <div 
          className="absolute bottom-0 right-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#922ea4] to-transparent shine-left"
          style={{
            opacity: 0.9,
          }}
        ></div>
        
        {/* Left border shine */}
        <div 
          className="absolute bottom-0 left-0 w-[3px] h-full bg-gradient-to-b from-transparent via-[#922ea4] to-transparent shine-up"
          style={{
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
    </div>
  );

  return href ? (
    <Link href={href} className="block" passHref>
      {buttonWrapper}
    </Link>
  ) : (
    buttonWrapper
  );
});

ShinyButton.displayName = "ShinyButton"; 