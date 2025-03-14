"use client";

import React from 'react';

export default function WaveDivider() {
  return (
    <div className="relative w-full h-24 md:h-32 lg:h-40 overflow-hidden bg-[#922ea4] -mt-16">
      {/* Wave SVG */}
      <svg 
        className="absolute bottom-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path 
          fill="#ffffff" 
          fillOpacity="1" 
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      
      {/* House Icons - positioned to appear behind the wave */}
      <div className="absolute w-full h-full">
        {/* Modern House 1 */}
        <svg 
          className="absolute left-[8%] bottom-[20%] w-12 h-12 md:w-16 md:h-16 text-white opacity-80" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <rect x="9" y="13" width="6" height="9"></rect>
          <line x1="4" y1="10" x2="20" y2="10"></line>
        </svg>
        
        {/* Townhouse */}
        <svg 
          className="absolute left-[22%] bottom-[15%] w-14 h-14 md:w-20 md:h-20 text-white opacity-75" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="3" y="8" width="18" height="14" rx="1"></rect>
          <path d="M7 22v-4h4v4"></path>
          <path d="M13 22v-4h4v4"></path>
          <path d="M3 8l9-6 9 6"></path>
        </svg>
        
        {/* Apartment Building */}
        <svg 
          className="absolute left-[40%] bottom-[10%] w-16 h-16 md:w-24 md:h-24 text-white opacity-70" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <line x1="9" y1="22" x2="9" y2="2"></line>
          <line x1="15" y1="22" x2="15" y2="2"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="7" x2="20" y2="7"></line>
          <line x1="4" y1="17" x2="20" y2="17"></line>
        </svg>
        
        {/* Modern Villa */}
        <svg 
          className="absolute left-[60%] bottom-[18%] w-14 h-14 md:w-20 md:h-20 text-white opacity-85" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 10h18"></path>
          <path d="M3 10v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10"></path>
          <path d="M6 21v-7"></path>
          <path d="M18 21v-7"></path>
          <path d="M6 14h12"></path>
          <path d="M3 10 12 3l9 7"></path>
        </svg>
        
        {/* Skyscraper */}
        <svg 
          className="absolute left-[78%] bottom-[5%] w-16 h-16 md:w-24 md:h-24 text-white opacity-65" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect x="8" y="2" width="8" height="20" rx="1"></rect>
          <path d="M4 6h4"></path>
          <path d="M4 10h4"></path>
          <path d="M4 14h4"></path>
          <path d="M4 18h4"></path>
          <path d="M16 6h4"></path>
          <path d="M16 10h4"></path>
          <path d="M16 14h4"></path>
          <path d="M16 18h4"></path>
        </svg>
      </div>
    </div>
  );
} 