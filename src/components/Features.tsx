"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";

export default function Features() {
  const features = [
    {
      title: "Chat Engager",
      description: "Embeddable website widget or standalone page with tailored responses, property filtering, branded tone and styling, and 24/7 lead capture.",
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
  const text = "Time wasted on leads that go nowhere, irrelevant data, and disconnected tools that lack intelligence slows you, works for you, choose the capabilities you need to get real results.";
  
  // Words to highlight in purple
  const highlightedWords = ['leads', 'intelligence', 'works for you', 'you,', 'real results'];

  return (
    <section className="relative bg-white pt-4 pb-20 font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-5 lg:flex lg:items-center lg:justify-end lg:pr-8">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 max-w-xl">
              {/* Split the text into parts and highlight specific words */}
              {text.split(' ').map((word, index, array) => {
                // Create a properly typed copy of the array for manipulation
                const processedArray = [...array] as (string | null)[];
                
                // Check if this word or a phrase starting with this word should be highlighted
                const matchedPhrase = highlightedWords.find(phrase => {
                  const words = phrase.split(' ');
                  if (words.length === 1) {
                    // For single words, check exact match (including punctuation)
                    return word === phrase || word === phrase + ',' || word === phrase + '.';
                  } else {
                    // For phrases, check if this is the start of the phrase
                    const potentialPhrase = array.slice(index, index + words.length).join(' ');
                    return potentialPhrase === phrase || potentialPhrase === phrase + ',' || potentialPhrase === phrase + '.';
                  }
                });

                // Skip if this word has been marked as part of a processed phrase
                if (processedArray[index] === null) {
                  return null;
                }

                if (matchedPhrase) {
                  const words = matchedPhrase.split(' ');
                  if (words.length === 1) {
                    // Single word highlight
                    return (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + (index * 0.03) }}
                        className="text-[#922ea4] font-bold"
                      >
                        {word}{' '}
                      </motion.span>
                    );
                  } else {
                    // Skip the next n-1 words as they're part of this phrase
                    const phraseWithSpace = array.slice(index, index + words.length).join(' ');
                    // Mark words as processed in our copy
                    for (let i = 1; i < words.length; i++) {
                      if (index + i < processedArray.length) {
                        processedArray[index + i] = null;
                      }
                    }
                    return (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + (index * 0.03) }}
                        className="text-[#922ea4] font-bold"
                      >
                        {phraseWithSpace}{' '}
                      </motion.span>
                    );
                  }
                } else {
                  // Regular word
                  return (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + (index * 0.03) }}
                    >
                      {word}{' '}
                    </motion.span>
                  );
                }
              })}
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