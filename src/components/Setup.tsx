"use client";

import React from "react";
import { SetupDemo } from "@/components/ui/setup-demo";

export default function Setup() {
  return (
    <section className="bg-white py-16 font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: Subheading */}
            <div className="order-2 md:order-1">
              <p className="text-xl md:text-2xl text-black font-medium">
                <span className="text-[#922ea4]">For teams and individual agents,</span> Ziggy works alongside your tools and is easily setup in minutes.
              </p>
            </div>
            
            {/* Right side: SetupDemo */}
            <div className="order-1 md:order-2">
              <SetupDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 