"use client";

import React from "react";
import { FaRocket, FaClock, FaChartBar } from "react-icons/fa";

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

// Add keyframe animation for shine
const shineAnimation = `
  @keyframes shine {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
  }
`;

export default function InboundAutomatorBenefits() {
  return (
    <>
      <style jsx global>{shineAnimation}</style>
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
                Inbound Automator
              </h2>
              
              {/* Releasing Soon text */}
              <p className="text-white/90 text-lg italic">
                Releasing Soon
              </p>
            </div>
            
            {/* Right side: Benefits */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <Benefit 
                  icon={<FaRocket className="text-3xl" />}
                  iconClassName="p-5"
                  title="Automate Tasks"
                  description="Ziggy handles initial inquiries, pre-qualifies leads, and manages repetitive tasks, so you can focus on meaningful opportunities before the first call or meeting."
                />
                <Benefit 
                  icon={<FaChartBar />}
                  title="Smarter Follow Ups"
                  description="Get detailed insights and analytics to refine your strategy and boost conversion rates."
                />
                <Benefit 
                  icon={<FaClock />}
                  title="24/7 Availability"
                  description="Ensure every inquiry is managed promptly, even when you're unavailable."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 