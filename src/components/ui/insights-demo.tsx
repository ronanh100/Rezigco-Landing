"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsHouseFill,
  BsGeoAltFill,
  BsFileEarmarkTextFill,
  BsGlobe2,
  BsCarFrontFill,
  BsMortarboardFill
} from "react-icons/bs";

export function InsightsDemo() {
  const duration = 15; // seconds for full orbit rotation
  
  // Define orbit radius - increased to accommodate larger center icon
  const orbitRadius = 55;
  
  // Setup orbit positions spaced evenly around the circle
  const orbitPositions = [
    { icon: <BsCarFrontFill className="text-amber-500" />, angle: 0 },
    { icon: <BsGeoAltFill className="text-red-500" />, angle: 72 },
    { icon: <BsGlobe2 className="text-blue-500" />, angle: 144 },
    { icon: <BsFileEarmarkTextFill className="text-sky-500" />, angle: 216 },
    { icon: <BsMortarboardFill className="text-purple-500" />, angle: 288 }
  ];
  
  return (
    <div className="relative h-[160px] w-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        {/* Center house - updated to match Ziggy's size and styling */}
        <div className="relative z-10 size-12 flex items-center justify-center rounded-full border-2 border-border bg-white p-2 shadow-[0_0_15px_-10px_rgba(0,0,0,0.7)]">
          <BsHouseFill className="h-6 w-6 text-[#922ea4]" />
        </div>
        
        {/* Orbiting icons */}
        {orbitPositions.map((item, index) => (
          <motion.div
            key={index}
            className="absolute w-5 h-5 left-1/2 top-1/2 -ml-2.5 -mt-2.5"
            animate={{
              x: Array.from({ length: 60 }, (_, i) => 
                Math.cos(((i / 60) * Math.PI * 2) + (item.angle * Math.PI / 180)) * orbitRadius
              ),
              y: Array.from({ length: 60 }, (_, i) => 
                Math.sin(((i / 60) * Math.PI * 2) + (item.angle * Math.PI / 180)) * orbitRadius
              )
            }}
            transition={{
              duration: duration,
              ease: "linear",
              times: Array.from({ length: 60 }, (_, i) => i / 60),
              repeat: Infinity
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 