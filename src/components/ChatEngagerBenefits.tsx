"use client";

import React from "react";
import { FaBullseye, FaComments, FaRegSmile } from "react-icons/fa";
import Link from "next/link";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="text-white text-4xl mb-4 bg-white/10 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/90 text-base leading-relaxed">{description}</p>
    </div>
  );
};

// Add keyframe animation for shimmer
const shimmerAnimation = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

export default function ChatEngagerBenefits() {
  return (
    <section 
      className="py-16 px-6 md:px-10 font-bricolage rounded-3xl" 
      style={{ 
        fontFamily: "'Bricolage Grotesque', sans-serif",
        background: "#922ea4",
      }}
    >
      <div className="max-w-6xl mx-auto">
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
              <style jsx>{shimmerAnimation}</style>
            </Link>
          </div>
          
          {/* Right side: Benefits */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Benefit 
                icon={<FaBullseye />}
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
  );
} 