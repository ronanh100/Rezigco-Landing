"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
  logo,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  logo?: React.ReactNode;
}) => {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div 
      className={cn(
        "flex w-full fixed top-4 sm:top-4 inset-x-0 max-w-[calc(100%-2rem)] sm:max-w-2xl mx-auto bg-[#922ea4] shadow-xl z-[5000] px-3 sm:px-4 md:px-8 py-2 sm:py-4 items-center justify-between rounded-full relative overflow-hidden backdrop-blur-sm transition-all duration-300",
        hovering ? "shadow-2xl translate-y-[2px]" : "shadow-xl",
        className
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ backgroundColor: "#922ea4" }}
    >
      {/* Enhanced shimmer effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" 
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 3s infinite",
          }}
        />
      </div>
      
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
      
      {/* Logo on the left */}
      <div className="flex items-center z-10 pl-2 sm:pl-0">
        {logo || (
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Rezigco</span>
          </Link>
        )}
      </div>
      
      {/* Navigation items on the right */}
      <div className="flex items-center space-x-2 sm:space-x-4 z-10 pr-2 sm:pr-0">
        {navItems.map((navItem, idx) => {
          // Style the buttons differently based on their name
          const isSignUp = navItem.name === "Sign Up";
          const isLogin = navItem.name === "Login";
          
          return (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center justify-center w-[80px] sm:w-auto font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-colors duration-200 text-center",
                isSignUp ? "bg-white text-[#922ea4] hover:bg-white/90" : "",
                isLogin ? "border border-white text-white hover:bg-white/10" : "",
                !isSignUp && !isLogin ? "text-white hover:text-white/80" : ""
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-center whitespace-nowrap" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{navItem.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}; 