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
      description: "Ziggy manages inquiries, pre-qualifies leads, and delivers instant, intelligent responses tailored to your business. Engage prospects efficiently and ensure no opportunity is missed, even when you're unavailable.",
      emoji: "✉️"
    },
    {
      title: "Data Organiser",
      description: "Ziggy makes data instantly searchable, structured, and retrievable, turning documents into interactive resources. Remove scattered information and gain smarter data insights effortlessly.",
      emoji: "📁"
    },
    {
      title: "Insights",
      description: "Ziggy instantly compiles rich area insights and listing data, making property profiles more informative and engaging, providing buyers and sellers with meaningful information.",
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
              <p className="leading-tight">
                Managing <span className="text-[#922ea4] font-bold">leads</span>, sorting through data and disconnected tools that lack <span className="text-[#922ea4] font-bold">intelligence</span>, slow you down.
              </p>
              <p className="leading-tight mt-1">
                <span className="text-[#922ea4] font-bold whitespace-nowrap">With Ziggy, choose the capabilities</span> you need to put your <span className="text-[#922ea4] font-bold">growth on autopilot</span>.
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