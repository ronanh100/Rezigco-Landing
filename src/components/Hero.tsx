"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useState } from 'react';
import { ShinyButton } from "@/registry/magicui/shiny-button";

export default function Hero() {
  const [hovering, setHovering] = useState(false);
  
  return (
    <section className="relative bg-white text-black min-h-screen font-bricolage pb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-8 md:pb-12 relative z-10">
        <HeroHighlight containerClassName="h-auto py-8 md:py-10 bg-transparent">
          <div className="flex flex-col items-center">
            {/* Text content */}
            <div className="text-center max-w-4xl mx-auto">
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-black font-bricolage"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                <span className="block mb-2">Your AI Agent, Streamlining the</span>
                <span className="block">
                  <Highlight className="font-bold whitespace-nowrap inline-flex">Real Estate Workflow</Highlight>
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 text-black font-bricolage max-w-3xl mx-auto"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Ziggy handles inquiries, qualifies leads, and organizes data 24/7 so you can focus on building relationships and closing deals.
              </motion.div>
              
              <div className="flex justify-center items-center mt-4 md:mt-6">
                <div className="max-w-[200px] w-full">
                  <ShinyButton 
                    className="font-bricolage text-base uppercase tracking-wider font-bold"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    onClick={() => window.location.href = '/demo'}
                  >
                    GET STARTED
                  </ShinyButton>
                </div>
              </div>
            </div>
          </div>
        </HeroHighlight>
      </div>
    </section>
  );
} 