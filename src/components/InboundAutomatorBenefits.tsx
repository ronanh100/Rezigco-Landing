"use client";

import React from "react";
import { FaClock, FaChartBar, FaHourglass, FaBrain, FaEnvelope, FaEye } from "react-icons/fa";
import Image from "next/image";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconClassName?: string;
}

const Benefit = ({ icon, title, description, iconClassName = "" }: BenefitProps) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left h-full">
      <div className={`text-[#7F00FF] mb-3 bg-[#7F00FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center ${iconClassName}`}>
        {icon}
      </div>
      <h3 className="text-[#7F00FF] text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default function InboundAutomatorBenefits() {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <section 
        className="py-12 px-6 md:px-10 font-bricolage rounded-3xl relative overflow-hidden z-20 min-h-[420px] bg-white" 
        style={{ 
          fontFamily: "'Bricolage Grotesque', sans-serif",
          background: "white",
          transition: "transform 0.5s ease, box-shadow 0.5s ease",
          transform: isHovered ? 'translateY(-12px) perspective(1000px) rotateX(2deg)' : 'translateY(0) perspective(1000px) rotateX(1deg)',
          boxShadow: isHovered 
            ? '0 30px 70px -10px rgba(127,0,255,0.3), 0 0 0 1px rgba(127,0,255,0.2), 0 4px 0 rgba(255,255,255,0.4), inset 0 0 30px rgba(127,0,255,0.05), 0 10px 20px -5px rgba(0,0,0,0.1)' 
            : '0 10px 30px -5px rgba(127,0,255,0.2), 0 0 0 1px rgba(127,0,255,0.1)'
        }}
      >
        {/* Ziggy Image - Desktop (bottom left) */}
        <div className="absolute bottom-6 left-6 hidden md:flex bg-[#7F00FF]/10 p-4 rounded-full items-center justify-center z-10" style={{ width: '100px', height: '100px' }}>
          <Image
            src="/ziggy_mobile.png"
            alt="Ziggy"
            width={70}
            height={70}
            className="object-contain"
            priority
          />
        </div>
        
        {/* Ziggy Image - Mobile (top left) */}
        <div className="absolute top-4 left-4 md:hidden z-10 bg-[#7F00FF]/10 flex items-center justify-center rounded-full" style={{ width: '50px', height: '50px' }}>
          <Image
            src="/ziggy_mobile.png"
            alt="Ziggy"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Left side: Heading */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7F00FF] mb-6 text-center md:text-left leading-tight">
                Deal Navigator
              </h2>
              
              {/* Releasing Soon text */}
              <p className="text-gray-600 text-lg italic">
                Releasing Soon
              </p>
            </div>
            
            {/* Right side: Benefits */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                <Benefit 
                  icon={<FaBrain className="text-2xl" />}
                  title="Context Aware"
                  description="Understands the full picture, from offer to completion, and adapts to the nuances of each deal to respond in the right way at the right time."
                />
                <Benefit 
                  icon={<FaEnvelope className="text-2xl" />}
                  title="Personal Follow Ups"
                  description="Communicates with clients and third parties like a real team member, not a template bot, so nothing gets stuck."
                />
                <Benefit 
                  icon={<FaEye className="text-2xl" />}
                  title="Client Transparency"
                  description="Buyers and sellers can view a live timeline of the sale, including what stage it is at and who is responsible, giving them clarity without needing to chase you."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 