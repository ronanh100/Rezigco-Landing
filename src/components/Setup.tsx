"use client";

import React from "react";
import { SetupDemo } from "@/components/ui/setup-demo";

export default function Setup() {
  return (
    <section className="bg-white py-16 font-manrope">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: Subheading */}
            <div className="order-2 md:order-1">
              <p className="text-xl md:text-2xl text-black font-medium">
                <span className="text-[#7F00FF]">For teams and individual agents,</span> your AI agent works seamlessly with your existing tools and is ready to set up in minutes.
              </p>
            </div>
            
            {/* Right side: SetupDemo */}
            <div className="order-1 md:order-2 px-4">
              <SetupDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 