"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { HeroHighlight, Highlight, ShimmerButton } from '@/lib/dynamic-components';

export default function Hero() {
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Only show Ziggy after component is fully mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative bg-white text-black min-h-[85vh] font-bricolage pb-0" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-0 relative z-10">
        {/* Ziggy Image - Desktop - Positioned far left */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute left-0 top-[35%] -translate-x-[500%] hidden lg:block"
            style={{ zIndex: 30 }}
          >
            <Image
              src="/ziggy_new.png"
              alt="Ziggy"
              width={200}
              height={200}
              className="object-contain"
              style={{ 
                background: 'transparent', 
                mixBlendMode: 'darken',
              }}
              priority
            />
          </motion.div>
        )}
          
        <HeroHighlight containerClassName="h-auto py-8 md:py-10 bg-transparent">
          <div className="flex flex-col items-center">
            {/* Text content */}
            <div className="relative text-center max-w-4xl mx-auto">              
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
                Ziggy works 24/7 handling inquiries, qualifying leads, and organizing data so you can build relationships and close more deals.
              </motion.div>
              
              <div className="flex justify-center items-center mt-4 md:mt-6 relative">
                <div className="max-w-[200px] w-full mx-auto">
                  <ShimmerButton 
                    href="https://cal.com/rezigco/hireziggy"
                    shimmerColor="rgba(146, 46, 164, 0.4)"
                    shimmerDuration="2s"
                    className="font-bricolage text-base uppercase tracking-wider font-bold rounded-md w-full"
                    style={{ 
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    GET STARTED
                  </ShimmerButton>
                </div>
              </div>
              
              {/* Mobile Ziggy */}
              {mounted && (
                <div className="mt-2 lg:hidden flex justify-center h-[120px]">
                  <Image
                    src="/ziggy_new.png"
                    alt="Mobile Ziggy"
                    width={120}
                    height={120}
                    className="object-contain"
                    style={{ 
                      background: 'transparent', 
                      mixBlendMode: 'darken',
                    }}
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </HeroHighlight>
      </div>
    </section>
  );
} 