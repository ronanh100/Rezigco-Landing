"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React, { useEffect, useRef } from "react";

export default function Features() {
  const features = [
    {
      title: "Chat Engager",
      description: "Start engaging with your website visitors today! Our AI-powered chat widget captures leads 24/7 with tailored responses, property filtering, and your brand's unique tone.",
      emoji: "💬"
    },
    {
      title: "Inbound Automator",
      description: "Analyze inquiries, qualify leads, and deliver personalized replies using AI-driven insights from your business knowledge base.",
      emoji: "✉️"
    },
    {
      title: "Data Organiser",
      description: "Seamlessly import and export data, generate document summaries, and interact with your documents for instant answers.",
      emoji: "📁"
    },
    {
      title: "Insights",
      description: "Deliver detailed neighborhood analytics, match leads with listings, and enhance property profiles with valuable area insights.",
      emoji: "💡"
    },
  ];

  // The text content with highlighted words
  const text = "Managing leads, sorting through data, and disconnected tools that lack intelligence slow you down. With Ziggy, choose the capabilities you need to put your growth on autopilot.";
  
  // Words to highlight in purple
  const highlightedWords = ['leads', 'intelligence', 'choose the capabilities', 'growth on autopilot'];

  // Animation controls for the text
  const controls = useAnimation();
  
  // Use Framer Motion's useInView hook instead of react-intersection-observer
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "-100px 0px 0px 0px"
  });
  
  // Trigger animation when section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section 
      ref={ref}
      className="relative bg-white pt-0 pb-12 font-bricolage" 
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
          <div className="lg:col-span-5 lg:flex lg:items-center lg:justify-end lg:pr-8">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 max-w-xl">
              {/* Render text with highlighted words using a more reliable approach */}
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Managing{' '}
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.13 }}
                  className="text-[#922ea4] font-bold"
                >
                  leads
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.16 }}
                >
                  , sorting through data, and disconnected tools that lack{' '}
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.19 }}
                  className="text-[#922ea4] font-bold"
                >
                  intelligence
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.22 }}
                >
                  {' '}slow you down. With Ziggy, {' '}
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-[#922ea4] font-bold"
                >
                  choose the capabilities
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.28 }}
                >
                  {' '}you need to put your{' '}
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.31 }}
                  className="text-[#922ea4] font-bold"
                >
                  growth on autopilot
                </motion.span>
                
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.34 }}
                >
                  .
                </motion.span>
              </motion.p>
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