"use client";

import React from "react";
import { FaComments, FaRegSmile, FaFilter } from "react-icons/fa";
import Link from "next/link";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconClassName?: string;
}

const Benefit = ({ icon, title, description, iconClassName = "" }: BenefitProps) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className={`text-white text-4xl mb-4 bg-white/10 p-4 rounded-full flex items-center justify-center ${iconClassName}`}>
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/90 text-base leading-relaxed">{description}</p>
    </div>
  );
};

// Add keyframe animation for shimmer button
const shimmerAnimation = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

// Add keyframe animation for shine background
const shineAnimation = `
  @keyframes shine {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
`;

export default function ChatEngagerBenefits() {
  return (
    <>
      <style jsx global>{shineAnimation}</style>
      <style jsx global>{shimmerAnimation}</style>
      <section 
        className="py-16 px-6 md:px-10 font-bricolage rounded-3xl shadow-lg relative overflow-hidden" 
        style={{ 
          fontFamily: "'Bricolage Grotesque', sans-serif",
          background: "#922ea4",
          boxShadow: "0 10px 30px -5px rgba(146,46,164,0.4)"
        }}
      >
        {/* Shine effect overlay */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            backgroundSize: "200% 100%",
            animation: "shine 8s infinite linear"
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
            {/* Left side: Heading */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center md:text-left leading-tight">
                Chat Engager
              </h2>
              
              {/* Get Started Button */}
              <Link href="/chat-engager" className="inline-block">
                <button 
                  className="relative inline-flex h-10 overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 hover:scale-105 bg-white"
                  aria-label="Get Started with Chat Engager"
                >
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md px-4 py-1 font-bold text-[#922ea4]">
                    Get Started <span className="ml-1">→</span>
                  </span>
                  <span 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(146,46,164,0.2), transparent)',
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                </button>
              </Link>
            </div>
            
            {/* Right side: Benefits */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Benefit 
                  icon={<FaFilter className="text-3xl" />}
                  iconClassName="p-5"
                  title="Reduced Escalation"
                  description="Ziggy understands your business and independently resolves most inquiries, so you focus only on leads ready to move forward."
                />
                <Benefit 
                  icon={<FaComments />}
                  title="Smarter Conversations"
                  description="Ziggy engages leads with natural, human-like interactions, understands their needs, and makes smart property recommendations, turning interest into action."
                />
                <Benefit 
                  icon={<FaRegSmile />}
                  title="Your Brand"
                  description="Customize Ziggy with your logo, colors, and tone for a seamless, on-brand client experience."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 