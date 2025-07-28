"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/lib/dynamic-components";

export default function GetDemo() {
  return (
    <section className="w-full bg-white py-16 font-manrope">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-manrope">
              Ready to focus on clients, <span className="text-[#7F00FF] whitespace-nowrap">not chasing emails?</span>
            </h2>
          </motion.div>
          
          {/* Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <div className="max-w-[220px] w-full mx-auto px-2">
              <a
                href="https://cal.com/finsho/demo"
                className="block w-full bg-white text-[#7F00FF] font-extrabold px-6 py-3 sm:px-8 rounded-full shadow-[0_8px_32px_0_rgba(127,0,255,0.25)] border border-[#e5d6fa] hover:shadow-[0_12px_40px_0_rgba(127,0,255,0.35)] hover:scale-105 hover:-translate-y-1 transition-all duration-200 text-center uppercase tracking-wider font-manrope text-base focus:outline-none focus:ring-2 focus:ring-[#7F00FF]/40 focus:ring-offset-2 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1/2 before:rounded-t-full before:bg-white/60 before:opacity-60 before:pointer-events-none"
              >
                <span className="font-extrabold">GET DEMO</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 