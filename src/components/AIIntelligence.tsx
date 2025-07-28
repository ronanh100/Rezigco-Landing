"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import ShimmerButton to reduce bundle size
const ShimmerButton = dynamic(() => import("@/registry/magicui/shimmer-button").then(mod => mod.ShimmerButton), {
  ssr: false,
  loading: () => <div className="max-w-[200px] w-full h-10 bg-gray-100 rounded-md animate-pulse"></div>
});

export default function AIIntelligence() {
  return (
    <section className="bg-white py-16 font-manrope">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-black mb-10"
          >
            Your AI agent works as an <span className="text-[#7F00FF] whitespace-nowrap">extension of you or your team,</span> engaging leads in your voice and progressing deals with <span className="text-[#7F00FF] whitespace-nowrap">intelligent follow ups.</span> It learns your workflow and <span className="text-[#7F00FF] whitespace-nowrap">responds with context,</span> making every stage smarter and helping you build a <span className="text-[#7F00FF] whitespace-nowrap">powerhouse real estate brand.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center items-center mt-8"
          >
            <div className="flex justify-center max-w-[200px] w-full mx-auto">
              <ShimmerButton 
                href="https://cal.com/finsho/demo"
                shimmerColor="rgba(146, 46, 164, 0.4)"
                shimmerDuration="2s"
                className="font-bricolage text-base uppercase tracking-wider font-bold rounded-md w-full text-center"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                GET STARTED
              </ShimmerButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 