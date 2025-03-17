"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export function OrbitingCircles({
  children,
  radius = 150,
  speed = 5,
  reverse = false,
  iconSize = 30,
}: {
  children: ReactNode[];
  radius?: number;
  speed?: number;
  reverse?: boolean;
  iconSize?: number;
}) {
  const numChildren = React.Children.count(children);
  
  return (
    <div className="relative h-full w-full">
      {React.Children.map(children, (child, index) => {
        // Calculate the starting position for each icon
        const angle = (index / numChildren) * 2 * Math.PI;
        
        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 flex items-center justify-center"
            style={{
              width: iconSize,
              height: iconSize,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              rotate: reverse ? [0, -360] : [0, 360],
            }}
            transition={{
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              style={{
                x: radius * Math.cos(angle),
                y: radius * Math.sin(angle),
                rotate: reverse ? 360 : -360, // Counter-rotate to keep icons upright
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {child}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
} 