"use client";

import React from "react";
import { FaClock, FaChartBar, FaHourglass } from "react-icons/fa";
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
      <div className={`text-white mb-3 bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center ${iconClassName}`}>
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/90 text-base leading-relaxed">{description}</p>
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
        className="py-12 px-6 md:px-10 font-bricolage rounded-3xl relative overflow-hidden z-20 min-h-[420px]" 
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
        {/* Ziggy Image - Desktop (bottom left) */}
        <div className="absolute bottom-6 left-6 hidden md:flex bg-white/10 p-4 rounded-full items-center justify-center z-10" style={{ width: '100px', height: '100px' }}>
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
        <div className="absolute top-4 left-4 md:hidden z-10 bg-white/10 flex items-center justify-center rounded-full" style={{ width: '50px', height: '50px' }}>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center md:text-left leading-tight">
                Deal Navigator
              </h2>
              
              {/* Releasing Soon text */}
              <p className="text-white/90 text-lg italic">
                Releasing Soon
              </p>
            </div>
            
            {/* Right side: Benefits */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                <Benefit 
                  icon={<FaHourglass className="text-2xl" />}
                  title="Save Time"
                  description="Ziggy automates initial inquiries, pre-qualifies leads, and manages repetitive tasks, so you can focus on meaningful opportunities before the first call or meeting."
                />
                <Benefit 
                  icon={<FaChartBar className="text-2xl" />}
                  title="Smarter Follow Ups"
                  description="Get detailed insights and analytics to refine your strategy and boost conversion rates."
                />
                <Benefit 
                  icon={<FaClock className="text-2xl" />}
                  title="24/7 Availability"
                  description="Ensure every inquiry is managed promptly, even when you're unavailable."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 