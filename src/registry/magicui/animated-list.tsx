"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedList({
  children,
  className,
  speed = 700, // Reduced from 800 to 700ms for even faster cycling
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const childrenArray = React.Children.toArray(children);
  const childrenArrayRef = useRef(childrenArray);
  const [visibleItems, setVisibleItems] = useState<React.ReactNode[]>([]);
  const [nextIndexToAdd, setNextIndexToAdd] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Initialize with first few items - only run once
  useEffect(() => {
    if (childrenArrayRef.current.length === 0) return;
    
    // Start with the first 5 items in the original order
    const initialItems = childrenArrayRef.current.slice(0, 5);
    setVisibleItems(initialItems);
    
    // Set the next index to add (after the initial items)
    setNextIndexToAdd(5 % childrenArrayRef.current.length);
  }, []);

  // Handle notification cycling
  useEffect(() => {
    if (childrenArrayRef.current.length === 0) return;
    
    const interval = setInterval(() => {
      if (paused || isAnimating) return;
      
      setIsAnimating(true);
      
      // Add the next item at the top and remove the last one
      setVisibleItems(prev => {
        // Get the next item to add
        const nextItem = childrenArrayRef.current[nextIndexToAdd];
        
        // Create new array with the next item at the top and remove the last item
        return [nextItem, ...prev.slice(0, 4)];
      });
      
      // Update the next index to add (cycling through the array)
      setNextIndexToAdd(prevIndex => (prevIndex + 1) % childrenArrayRef.current.length);
      
      // Reset animation flag after animation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 600); // Slightly longer than our longest animation
      
    }, speed);
    
    return () => clearInterval(interval);
  }, [paused, speed, nextIndexToAdd, isAnimating]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      style={{ 
        position: 'relative',
        height: '100%',
      }}
    >
      {/* Main content container with relative positioning */}
      <div className="flex flex-col gap-1.5 py-1.5 px-3 relative">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item, index) => {
            // Generate a stable key based on the item's position in the original array
            const itemIndex = childrenArrayRef.current.findIndex(child => child === item);
            const itemKey = `notification-${itemIndex}`;
            
            return (
              <motion.div
                key={itemKey}
                initial={index === 0 ? { opacity: 0, height: 0, y: -5 } : false}
                animate={{ 
                  opacity: 1, // All items fully visible
                  height: "auto", 
                  y: 0,
                  transition: {
                    height: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                    opacity: { duration: 0.2, ease: "easeOut" },
                    y: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0,
                  transition: {
                    height: { duration: 0.2, ease: "easeIn" },
                    opacity: { duration: 0.1, ease: "easeIn" }
                  }
                }}
                className="overflow-hidden"
                style={{
                  position: "relative",
                  zIndex: 10 - index,
                  transform: `perspective(800px) rotateX(${index * 1}deg) translateZ(${-index * 3}px)`,
                  boxShadow: index === 0 
                    ? '0 3px 15px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)' 
                    : '0 2px 8px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.03)',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '0px',
                  background: 'white',
                  // Apply opacity based on position
                  opacity: index === 4 ? 0.3 : index === 3 ? 0.6 : 1,
                }}
              >
                <div style={{ 
                  position: 'relative',
                  zIndex: 2,
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  {item}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {/* Gradient overlay for fade effect - positioned absolutely */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 100%)',
          zIndex: 50,
        }}
      />
    </div>
  );
} 