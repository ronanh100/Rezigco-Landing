"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsHouseFill, BsGeoAltFill, BsFileEarmarkTextFill, BsGlobe2, BsCarFrontFill, BsMortarboardFill } from "react-icons/bs";

export function InsightsDemo() {
  // Animation configuration
  const duration = 15; // seconds
  
  // Create circular path points
  const createCircularPath = (radius: number, count: number, offset: number = 0) => {
    const points: { x: number[], y: number[] } = { x: [], y: [] };
    for (let i = 0; i <= count; i++) {
      const angle = ((i / count) * Math.PI * 2) + offset;
      points.x.push(Math.cos(angle) * radius);
      points.y.push(Math.sin(angle) * radius);
    }
    return points;
  };
  
  // Define a single orbit with 5 evenly spaced icons - increased radius
  const orbitRadius = 55; // Increased from 45px
  
  // Create paths with different starting positions (evenly spaced at 72° intervals - 360° ÷ 5 = 72°)
  const carPath = createCircularPath(orbitRadius, 20, 0); // 0°
  const locationPath = createCircularPath(orbitRadius, 20, Math.PI * 0.4); // 72°
  const globePath = createCircularPath(orbitRadius, 20, Math.PI * 0.8); // 144°
  const documentPath = createCircularPath(orbitRadius, 20, Math.PI * 1.2); // 216°
  const schoolPath = createCircularPath(orbitRadius, 20, Math.PI * 1.6); // 288°
  
  // Create times array for smooth animation
  const times = Array.from({ length: 21 }, (_, i) => i / 20);
  
  return (
    <div className="relative flex h-[180px] w-full flex-col items-center justify-center overflow-hidden bg-white rounded-xl">
      {/* Center house icon with styled circle background matching Ziggy's style */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
        <BsHouseFill className="h-7 w-7 text-[#922ea4]" />
      </div>
      
      {/* Car icon */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          x: carPath.x,
          y: carPath.y
        }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity,
          times: times
        }}
      >
        <BsCarFrontFill className="text-amber-500 w-6 h-6" />
      </motion.div>
      
      {/* Location icon */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          x: locationPath.x,
          y: locationPath.y
        }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity,
          times: times
        }}
      >
        <BsGeoAltFill className="text-red-500 w-6 h-6" />
      </motion.div>
      
      {/* Globe icon */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          x: globePath.x,
          y: globePath.y
        }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity,
          times: times
        }}
      >
        <BsGlobe2 className="text-blue-500 w-6 h-6" />
      </motion.div>
      
      {/* Document icon */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          x: documentPath.x,
          y: documentPath.y
        }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity,
          times: times
        }}
      >
        <BsFileEarmarkTextFill className="text-sky-500 w-6 h-6" />
      </motion.div>
      
      {/* School icon */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          x: schoolPath.x,
          y: schoolPath.y
        }}
        transition={{ 
          duration: duration, 
          ease: "linear", 
          repeat: Infinity,
          times: times
        }}
      >
        <BsMortarboardFill className="text-purple-500 w-6 h-6" />
      </motion.div>
    </div>
  );
} 