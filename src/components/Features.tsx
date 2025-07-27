"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the notification animation
const AnimatedListDemo = dynamic(() => import("./ui/animated-list-demo").then(mod => mod.AnimatedListDemo), {
  ssr: false,
  loading: () => <div className="h-full w-full flex items-center justify-center bg-gray-50 animate-pulse rounded-md">Loading...</div>
});

export default function Features() {
  return (
    <section 
      className="relative bg-white pt-8 pb-12 font-manrope" 
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 lg:flex lg:items-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              <p className="leading-tight">
                <span className="text-[#7F00FF] font-bold">For teams and individual agents</span>, your AI agent <span className="text-[#7F00FF] font-bold">lives within your email</span> and does not require solicitors or other parties in a deal to onboard or change anything in their current workflow. Just think of Finsho as your assistant putting <span className="text-[#7F00FF] font-bold">growth on autopilot</span>.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="h-64">
              <AnimatedListDemo />
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe animations for the shine effect */}
      <style jsx global>{`
        @keyframes shineRight {
          0% { right: 100%; }
          15% { right: -50%; }
          100% { right: -50%; }
        }
        @keyframes shineDown {
          0% { top: -100%; }
          15% { top: 100%; }
          100% { top: 100%; }
        }
        @keyframes shineLeft {
          0% { left: 100%; }
          15% { left: -50%; }
          100% { left: -50%; }
        }
        @keyframes shineUp {
          0% { bottom: -100%; }
          15% { bottom: 100%; }
          100% { bottom: 100%; }
        }
        
        .shine-right {
          animation: shineRight 2.5s infinite;
        }
        .shine-down {
          animation: shineDown 2.5s 0.6s infinite;
        }
        .shine-left {
          animation: shineLeft 2.5s 1.2s infinite;
        }
        .shine-up {
          animation: shineUp 2.5s 1.8s infinite;
        }
      `}</style>
    </section>
  );
} 