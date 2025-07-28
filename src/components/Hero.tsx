"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from 'react';
import { Highlight } from "@/components/ui/highlight";
import { ShimmerButton } from '@/lib/dynamic-components';
import dynamic from 'next/dynamic';
const WaveDivider = dynamic(() => import('@/components/WaveDivider'), { ssr: false });

export default function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <section
      id="hero"
      className="relative bg-[#7F00FF] text-white min-h-screen font-manrope pb-0"
    >
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-20 sm:pt-24 md:pt-28 pb-0 relative z-10" style={{ zIndex: 10 }}>
        <div className="h-auto py-8 pb-2 md:py-10 bg-transparent">
          <div className="flex flex-col items-center">
            {/* Text content */}
            <div className="relative text-center max-w-4xl mx-auto px-2 sm:px-4">              
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white font-manrope text-center leading-tight"
              >
                <span className="block">Your AI agent driving real estate deals</span>
                <span className="block mt-1 md:mt-2">forward, <Highlight>saving hours on follow ups.</Highlight></span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-base xs:text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white font-manrope max-w-3xl mx-auto"
              >
                Working 24/7, it understands the nuances of every sale, communicates personally and keeps everyone in the loop.
              </motion.div>
              
              <div className="flex justify-center items-center mt-4 md:mt-6 relative">
                <div className="max-w-[220px] w-full mx-auto px-2">
                  <a
                    href="https://cal.com/finsho/demo"
                    className="block w-full bg-white text-[#7F00FF] font-extrabold px-6 py-3 sm:px-8 rounded-full shadow-[0_8px_32px_0_rgba(127,0,255,0.25)] border border-[#e5d6fa] hover:shadow-[0_12px_40px_0_rgba(127,0,255,0.35)] hover:scale-105 hover:-translate-y-1 transition-all duration-200 text-center uppercase tracking-wider font-manrope text-base focus:outline-none focus:ring-2 focus:ring-[#7F00FF]/40 focus:ring-offset-2 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:rounded-t-full before:bg-white/60 before:opacity-60 before:pointer-events-none"
                  >
                    <span className="font-extrabold">GET STARTED</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WAVE BACKGROUND - Place this just before closing the hero section */}
      <div className="absolute left-0 right-0 bottom-0 w-full pointer-events-none z-10">
        <WaveDivider />
      </div>
      {/* ROUND DIVIDER - white semi-circle at the bottom */}
      <div className="absolute left-0 right-0 bottom-[-1px] w-full pointer-events-none z-20">
        <svg width="100%" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px] md:h-[80px]" preserveAspectRatio="none">
          <path d="M0,60 Q720,0 1440,60 V60 H0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
} 