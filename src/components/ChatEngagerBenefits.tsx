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
      <div className={`text-white mb-4 bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center ${iconClassName}`}>
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/90 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default function ChatEngagerBenefits() {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = '/chat-engager'}
    >
      <section 
        className="py-16 px-6 md:px-10 font-bricolage rounded-3xl relative overflow-hidden z-20" 
        style={{ 
          fontFamily: "'Bricolage Grotesque', sans-serif",
          background: "#922ea4",
          transition: "transform 0.5s ease, box-shadow 0.5s ease",
          transform: isHovered ? 'translateY(-12px) perspective(1000px) rotateX(2deg)' : 'translateY(0) perspective(1000px) rotateX(1deg)',
          boxShadow: isHovered 
            ? '0 30px 70px -10px rgba(146,46,164,0.8), 0 0 0 1px rgba(146,46,164,0.3), 0 4px 0 rgba(255,255,255,0.4), inset 0 0 30px rgba(146,46,164,0.1), 0 10px 20px -5px rgba(0,0,0,0.2)' 
            : '0 10px 30px -5px rgba(146,46,164,0.4), 0 0 0 1px rgba(146,46,164,0.1)'
        }}
      >
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
                </button>
              </Link>
            </div>
            
            {/* Right side: Benefits */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Benefit 
                  icon={<FaFilter className="text-2xl" />}
                  title="Reduced Escalation"
                  description="Ziggy understands your business and independently resolves most inquiries, so you focus only on leads ready to move forward."
                />
                <Benefit 
                  icon={<FaComments className="text-2xl" />}
                  title="Smarter Conversations"
                  description="Ziggy engages leads with natural, human-like interactions, understands their needs, and makes smart property recommendations, turning interest into action."
                />
                <Benefit 
                  icon={<FaRegSmile className="text-2xl" />}
                  title="Your Brand"
                  description="Customize Ziggy with your logo, colors, and tone for a seamless, on-brand client experience."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 