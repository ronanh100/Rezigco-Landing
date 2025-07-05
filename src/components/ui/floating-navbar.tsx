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
    // Set initial state
    setVisible(true);
    setLastScrollY(window.scrollY);
    
    // Define the scroll handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY <= 10) {
        setVisible(true);
      } else {
        // Hide navbar when scrolling down (but not at the top)
        setVisible(false);
      }
      
      // Update last scroll position AFTER the comparison
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
        "flex w-full fixed top-4 sm:top-4 inset-x-0 max-w-[calc(100%-2rem)] sm:max-w-2xl mx-auto bg-white/90 shadow-xl z-[5000] px-3 sm:px-4 md:px-8 py-2 sm:py-4 items-center justify-between rounded-full relative overflow-hidden backdrop-blur-md transition-all duration-300 ease-in-out",
        hovering ? "shadow-2xl translate-y-[2px]" : "shadow-xl",
        visible ? "translate-y-0 opacity-100" : "translate-y-[-150%] opacity-0",
        className
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ backgroundColor: "white" }}
    >
      {/* Enhanced shimmer effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-[#7F00FF]/50 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#7F00FF]/50 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#7F00FF]/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#7F00FF]/50 to-transparent" />
      </div>
      
      {/* Logo on the left */}
      <div className="flex items-center z-10 pl-2 sm:pl-0">
        {logo || (
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-[#7F00FF] font-manrope">Rezigco</span>
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
                isSignUp ? "bg-[#7F00FF] text-white hover:bg-[#6B00E6]" : "",
                isLogin ? "border border-[#7F00FF] text-[#7F00FF] hover:bg-[#7F00FF]/10" : "",
                !isSignUp && !isLogin ? "text-[#7F00FF] hover:text-[#6B00E6]" : ""
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