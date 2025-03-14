"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    emoji?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let [isManuallyHovering, setIsManuallyHovering] = useState(false);
  const autoHoverIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Order for clockwise rotation: 0 -> 1 -> 3 -> 2 -> 0
  const clockwiseOrder = [0, 1, 3, 2];
  
  // Setup automatic hover rotation
  useEffect(() => {
    // Start the automatic hover effect if not manually hovering
    if (!isManuallyHovering) {
      let currentIndex = 0;
      
      // Set initial hover
      setHoveredIndex(clockwiseOrder[currentIndex]);
      
      // Setup interval to rotate through cards
      autoHoverIntervalRef.current = setInterval(() => {
        currentIndex = (currentIndex + 1) % clockwiseOrder.length;
        setHoveredIndex(clockwiseOrder[currentIndex]);
      }, 2000); // Change every 2 seconds
    }
    
    // Cleanup interval on unmount or when manually hovering
    return () => {
      if (autoHoverIntervalRef.current) {
        clearInterval(autoHoverIntervalRef.current);
        autoHoverIntervalRef.current = null;
      }
    };
  }, [isManuallyHovering, items.length]);

  const handleMouseEnter = (idx: number) => {
    setIsManuallyHovering(true);
    setHoveredIndex(idx);
    
    // Clear any existing interval
    if (autoHoverIntervalRef.current) {
      clearInterval(autoHoverIntervalRef.current);
      autoHoverIntervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsManuallyHovering(false);
    // The automatic hover effect will restart due to the useEffect dependency
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative h-full"
          >
            <Card isHovered={hoveredIndex === idx}>
              {item.emoji && (
                <div className="absolute top-2 right-2 text-3xl z-50">
                  {item.emoji}
                </div>
              )}
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border-2 border-[#922ea4] relative z-20 transition-all duration-500 flex flex-col",
        isHovered ? 
          "shadow-[0_20px_60px_-15px_rgba(146,46,164,0.5)] translate-y-[-12px] bg-gradient-to-br from-white to-purple-50" : 
          "shadow-lg",
        className
      )}
    >
      <div className="relative z-50 flex-1">
        <div className="p-4 h-full">{children}</div>
      </div>
      
      {/* Shine effect */}
      {isHovered && (
        <>
          <div className="absolute top-0 right-full w-1/2 h-full bg-gradient-to-r from-transparent to-white/40 skew-x-[20deg] z-10 shine-right" />
          <div className="absolute top-full right-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white/40 skew-y-[20deg] z-10 shine-down" />
          <div className="absolute top-0 left-full w-1/2 h-full bg-gradient-to-l from-transparent to-white/40 skew-x-[-20deg] z-10 shine-left" />
          <div className="absolute bottom-full right-0 w-full h-1/2 bg-gradient-to-b from-transparent to-white/40 skew-y-[-20deg] z-10 shine-up" />
          <div className="absolute inset-0 border-2 border-[#922ea4]/60 rounded-2xl z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-[#922ea4] font-bold text-xl tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-gray-700 tracking-wide leading-relaxed text-sm min-h-[100px]",
        className
      )}
    >
      {children}
    </p>
  );
}; 