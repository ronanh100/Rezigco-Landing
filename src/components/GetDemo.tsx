"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/lib/dynamic-components";

export default function GetDemo() {
  return (
    <section className="w-full bg-white py-16">
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
              Ready to streamline your <span className="text-[#7F00FF] whitespace-nowrap">real estate workflow?</span>
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
            <div className="max-w-[200px] w-full mx-auto">
              <ShimmerButton 
                href="https://cal.com/rezigco/hireziggy"
                shimmerColor="rgba(146, 46, 164, 0.4)"
                shimmerDuration="2s"
                className="font-manrope text-base uppercase tracking-wider font-bold rounded-md w-full"
              >
                GET DEMO
              </ShimmerButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 