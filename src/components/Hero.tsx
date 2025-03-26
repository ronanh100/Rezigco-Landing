"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { HeroHighlight, Highlight, ShimmerButton } from '@/lib/dynamic-components';
import Image from 'next/image';

export default function Hero() {
  const [hovering, setHovering] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Preload images as soon as component mounts
  useEffect(() => {
    const preloadImages = async () => {
      try {
        // Create a promise that resolves when the image is loaded
        const imagePromise = new Promise<boolean>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve(true);
          img.src = '/ziggy_static.png';
        });
        
        await imagePromise;
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        // Show content anyway after a timeout if loading fails
        setTimeout(() => setImagesLoaded(true), 500);
      }
    };
    
    preloadImages();
    
    // Fallback to ensure content displays even if image loading fails
    const timer = setTimeout(() => setImagesLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative bg-white text-black min-h-[85vh] font-bricolage pb-0" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      {/* Hero content */}
      <div className="container mx-auto px-4 pt-12 md:pt-16 pb-0 relative z-10">
        {/* Desktop Ziggy - Absolute position */}
        <div 
          className={`absolute hidden lg:block transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            left: '5vw', 
            top: '35%',
            zIndex: 30,
            transform: 'translateX(-20%)',
            width: '200px',
            height: '200px',
            visibility: imagesLoaded ? 'visible' : 'hidden',
            position: 'absolute'
          }}
        >
          <Image
            src="/ziggy_static.png"
            alt="Ziggy"
            width={200}
            height={200}
            priority={true}
            onLoadingComplete={() => setImagesLoaded(true)}
            style={{ 
              objectFit: 'contain',
              background: 'transparent', 
              mixBlendMode: 'darken',
            }}
          />
        </div>
          
        <HeroHighlight containerClassName="h-auto py-8 md:py-10 bg-transparent">
          <div className="flex flex-col items-center">
            {/* Text content */}
            <div className="relative text-center max-w-4xl mx-auto">              
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-black font-bricolage"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                <span className="block sm:block md:inline-block whitespace-normal md:whitespace-nowrap">Your AI Agent, Streamlining the</span>{' '}
                <span className="block mt-2">
                  <Highlight className="font-bold whitespace-nowrap inline-flex">Real Estate Workflow</Highlight>
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 text-black font-bricolage max-w-3xl mx-auto"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Ziggy works 24/7 handling inquiries, qualifying leads, and organizing data so you can build relationships and close more deals.
              </motion.div>
              
              <div className="flex justify-center items-center mt-4 md:mt-6 relative">
                <div className="max-w-[200px] w-full mx-auto">
                  <ShimmerButton 
                    href="https://cal.com/rezigco/hireziggy"
                    shimmerColor="rgba(146, 46, 164, 0.4)"
                    shimmerDuration="2s"
                    className="font-bricolage text-base uppercase tracking-wider font-bold rounded-md w-full"
                    style={{ 
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                    }}
                  >
                    GET STARTED
                  </ShimmerButton>
                </div>
              </div>
              
              {/* Mobile Ziggy */}
              <div className={`mt-2 lg:hidden flex justify-center h-[120px] transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
                   style={{ visibility: imagesLoaded ? 'visible' : 'hidden' }}
              >
                <Image
                  src="/ziggy_static.png"
                  alt="Ziggy"
                  width={120}
                  height={120}
                  priority={true}
                  onLoadingComplete={() => setImagesLoaded(true)}
                  style={{ 
                    objectFit: 'contain',
                    background: 'transparent', 
                    mixBlendMode: 'darken',
                  }}
                />
              </div>
            </div>
          </div>
        </HeroHighlight>
      </div>
    </section>
  );
} 