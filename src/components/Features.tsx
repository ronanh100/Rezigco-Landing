"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import React, { useRef } from "react";

export default function Features() {
  const features = [
    {
      title: "Chat Engager",
      description: "Start engaging with your website visitors today! Our AI-powered chat widget captures leads 24/7 with tailored responses, property filtering, and your brand's unique tone.",
      emoji: "💬"
    },
    {
      title: "Inbound Automator",
      description: "Analyze inquiries, qualify leads, and deliver personalized replies using AI-driven insights from your business knowledge base.",
      emoji: "✉️"
    },
    {
      title: "Data Organiser",
      description: "Seamlessly import and export data, generate document summaries, and interact with your documents for instant answers.",
      emoji: "📁"
    },
    {
      title: "Insights",
      description: "Deliver detailed neighborhood analytics, match leads with listings, and enhance property profiles with valuable area insights.",
      emoji: "💡"
    },
  ];

  return (
    <section 
      className="relative bg-white pt-0 pb-12 font-bricolage -mt-12" 
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          <div className="lg:col-span-5 lg:flex lg:items-center lg:justify-end lg:pr-8">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 max-w-xl">
              <p>
                Managing <span className="text-[#922ea4] font-bold">leads</span>, sorting through data, and disconnected tools that lack <span className="text-[#922ea4] font-bold">intelligence</span> slow you down. With Ziggy, <span className="text-[#922ea4] font-bold">choose the capabilities</span> you need to put your <span className="text-[#922ea4] font-bold">growth on autopilot</span>.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <HoverEffect items={features} className="h-full" />
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