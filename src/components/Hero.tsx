"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { useState } from 'react';

export default function Hero() {
  const [hovering, setHovering] = useState(false);
  
  return (
    <section className="relative bg-white text-black min-h-screen font-bricolage pb-16" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-20 pb-20 md:pt-32 md:pb-20 relative z-10">
        <HeroHighlight containerClassName="h-auto py-10 md:py-16 bg-transparent">
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black font-bricolage"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                <span className="block mb-2">Your AI Hire, Streamlining the</span>
                <span className="block">
                  <Highlight className="font-bold whitespace-nowrap inline-flex">Real Estate Workflow</Highlight>
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl md:text-2xl mb-10 text-gray-700 font-bricolage max-w-3xl mx-auto"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Ziggy automates key tasks 24/7, from inquiries and lead qualification to data organisation. Enabling you to focus on building relationships and closing deals.
              </motion.div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative max-w-xs sm:max-w-none mx-auto sm:mx-0 overflow-hidden">
                  <Link 
                    href="/demo" 
                    className="relative inline-block bg-[#922ea4] hover:bg-[#7a2589] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 font-bricolage z-10"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  >
                    Request Demo
                  </Link>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="absolute inset-y-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                    <div 
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" 
                      style={{
                        backgroundSize: "200% 100%",
                        animation: "shimmer 3s infinite",
                      }}
                    />
                  </div>
                </div>
                
                <Link 
                  href="/learn-more" 
                  className="bg-transparent hover:bg-gray-100 text-[#922ea4] border border-[#922ea4] font-semibold py-3 px-8 rounded-lg transition duration-300 font-bricolage max-w-xs sm:max-w-none mx-auto sm:mx-0"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </HeroHighlight>
      </div>
      
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
} 