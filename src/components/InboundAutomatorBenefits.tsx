"use client";

import React from "react";

export default function InboundAutomatorBenefits() {
  return (
    <div className="relative bg-white py-16 md:py-24 font-manrope overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7F00FF]/3 via-transparent to-[#7F00FF]/3"></div>
      
      {/* Floating accent elements */}
      <div className="absolute top-20 right-20 w-1 h-1 bg-[#7F00FF] rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-[#7F00FF] rounded-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left side: Content */}
          <div className="text-center lg:text-left">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Unfair <span className="text-[#7F00FF]">Advantage</span>
              </h2>
            </div>
            
            <div className="mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Finsho knows what is next, reminds you when to act, and drafts the words for you. Every thread and every stage stay perfectly organised so nothing slips, no deal stalls, and no client feels forgotten.
              </p>
            </div>
          </div>
          
          {/* Right side: Combined AI design with conclusion card */}
          <div className="relative">
            {/* Main advantage visualization with integrated conclusion */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Central figure - AI agent representation */}
              <div className="relative w-64 h-64 mx-auto mb-8">
                {/* Outer ring - advantage aura with enhanced animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F00FF]/20 via-[#B266FF]/20 to-[#7F00FF]/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                
                {/* Middle ring - power ring with pulse */}
                <div className="absolute inset-4 bg-gradient-to-r from-[#7F00FF]/15 to-[#B266FF]/15 rounded-full animate-pulse"></div>
                
                {/* Inner glow ring */}
                <div className="absolute inset-6 bg-gradient-to-r from-[#7F00FF]/10 to-[#B266FF]/10 rounded-full"></div>
                
                {/* Central core - Finsho branding with enhanced styling */}
                <div className="absolute inset-8 bg-gradient-to-br from-[#7F00FF] to-[#6B00E6] rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                  <div className="text-white text-2xl font-black tracking-tight text-center leading-tight">Finsho</div>
                </div>
                
                {/* Three focused orbiting icons */}
                {/* House icon - top right */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#7F00FF] transform hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-[#7F00FF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
                  </svg>
                </div>
                
                {/* Robot icon - bottom left */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#7F00FF] transform hover:scale-110 transition-transform duration-200">
                  <svg className="w-7 h-7 text-[#7F00FF]" fill="currentColor" viewBox="0 0 24 24">
                    {/* Main head */}
                    <rect x="6" y="8" width="12" height="10" rx="2" fill="currentColor"/>
                    {/* Antenna */}
                    <line x1="12" y1="8" x2="12" y2="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="3" r="1" fill="currentColor"/>
                    {/* Eyes */}
                    <circle cx="9" cy="12" r="1" fill="white"/>
                    <circle cx="15" cy="12" r="1" fill="white"/>
                    {/* Mouth */}
                    <line x1="10" y1="16" x2="14" y2="16" stroke="white" strokeWidth="2"/>
                    {/* Side panels/ears */}
                    <rect x="4" y="10" width="2" height="6" rx="1" fill="currentColor"/>
                    <rect x="18" y="10" width="2" height="6" rx="1" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Human estate agent icon - right side */}
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#7F00FF] transform hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-[#7F00FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              
              {/* Redesigned conclusion card */}
              <div className="relative group">
                {/* Modern glassmorphism card with violet shadow */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 transform hover:scale-105 transition-all duration-300 border border-[#7F00FF]/10" style={{boxShadow: '0 25px 50px -12px rgba(127, 0, 255, 0.25), 0 10px 20px -5px rgba(127, 0, 255, 0.1)'}}>
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7F00FF]/20 via-[#B266FF]/20 to-[#7F00FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Main content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#7F00FF] to-[#6B00E6] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight text-center">
                      You stay sharp, move fast, and close more.
                    </p>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 