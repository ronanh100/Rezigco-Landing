"use client";
import React, { useState, useEffect, useCallback } from "react";
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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Set initial state - navbar always visible
    setVisible(true);
    setLastScrollY(window.scrollY);
    
    // Keep navbar permanently visible - no scroll-based hiding
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Always keep navbar visible
      setVisible(true);
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };
    
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run only once on mount
  
  return (
    <div 
      className={cn(
        "flex w-full fixed top-4 sm:top-4 inset-x-0 max-w-[calc(100%-2rem)] sm:max-w-2xl mx-auto bg-white shadow-xl z-[5000] px-3 sm:px-4 md:px-8 py-2 sm:py-4 items-center justify-between rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out border border-[#7F00FF]/20",
        hovering ? "shadow-2xl translate-y-[2px] border-[#7F00FF]/30" : "shadow-xl",
        className
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >

      
      {/* Logo on the left */}
      <div className="flex items-center z-10 pl-2 sm:pl-0">
        {logo || (
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#7F00FF] font-manrope">Finsho</span>
          </Link>
        )}
      </div>
      
      {/* Navigation items on the right */}
      <div className="flex items-center space-x-2 sm:space-x-4 z-10 pr-2 sm:pr-0">
        {navItems.map((navItem, idx) => {
          // Style the buttons differently based on their name
          const isGetStarted = navItem.name === "Get Started";
          const isLogin = navItem.name === "Login";
          
          return (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center justify-center w-[80px] sm:w-auto font-medium px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-colors duration-200 text-center",
                isGetStarted ? "bg-[#7F00FF] text-white hover:bg-[#6B00E6] font-semibold shadow-lg hover:shadow-xl transform hover:scale-105" : "",
                isLogin ? "border border-[#7F00FF] text-[#7F00FF] hover:bg-[#7F00FF]/10" : "",
                !isGetStarted && !isLogin ? "text-[#7F00FF] hover:text-[#6B00E6]" : ""
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-xs sm:text-sm font-medium text-center whitespace-nowrap font-manrope">{navItem.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}; 