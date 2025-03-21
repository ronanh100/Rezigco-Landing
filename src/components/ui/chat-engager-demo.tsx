"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ChatMessage {
  content: string;
  sender: "user" | "agent";
  id: number;
}

const chatMessages: ChatMessage[] = [
  {
    content: "I'm looking to buy somewhere in the Fox Hills area.",
    sender: "user",
    id: 1
  },
  {
    content: "How many bedrooms would you be looking for?",
    sender: "agent",
    id: 2
  },
  {
    content: "3 bedrooms, with under the $300K price range.",
    sender: "user",
    id: 3
  },
  {
    content: "Okay perfect, I've found three properties that you might like.",
    sender: "agent",
    id: 4
  }
];

export function ChatEngagerDemo({ className }: { className?: string }) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [animationCycle, setAnimationCycle] = useState(0);
  const [isRestarting, setIsRestarting] = useState(false);
  
  // Add messages one by one
  useEffect(() => {
    if (isRestarting) return;
    
    // Function to add a message
    const addMessage = (index: number) => {
      if (index >= chatMessages.length) {
        // All messages added, restart after delay
        setTimeout(() => {
          setIsRestarting(true);
          setTimeout(() => {
            setVisibleMessages([]);
            setIsRestarting(false);
            setAnimationCycle(prev => prev + 1); // Increment cycle for unique keys
          }, 1000);
        }, 2000);
        return;
      }
      
      // Add the next message
      setVisibleMessages(prev => [...prev, chatMessages[index]]);
      
      // Schedule next message
      setTimeout(() => {
        addMessage(index + 1);
      }, 1500);
    };
    
    // Start sequence if no messages are visible
    if (visibleMessages.length === 0 && !isRestarting) {
      addMessage(0);
    }
    
    // Clean up timeouts on unmount
    return () => {};
  }, [visibleMessages, isRestarting]);

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden bg-white",
        className
      )}
    >
      <div className="flex flex-col h-full p-2 overflow-hidden">
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute inset-0 flex flex-col justify-end p-1 gap-2 overflow-hidden">
            <div className="flex flex-col gap-2">
              {visibleMessages.map((message, index) => {
                // Determine if this is the newest message to animate
                const isNewestMessage = index === visibleMessages.length - 1;
                
                // Create a stable and unique key
                const uniqueKey = `${message.id}-${index}-${animationCycle}`;
                
                return (
                  <motion.div
                    key={uniqueKey}
                    initial={isNewestMessage ? { opacity: 0, y: 20, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    className={cn(
                      "flex items-end gap-1 w-full",
                      message.sender === "user" ? "flex-row-reverse" : "flex-row"
                    )}
                  >
                    {/* Profile Avatar */}
                    <div 
                      className={cn(
                        "flex-shrink-0 w-6 h-6 rounded-full overflow-hidden border",
                        message.sender === "user" 
                          ? "border-purple-200 bg-purple-100" 
                          : "border-gray-200 bg-gray-100"
                      )}
                    >
                      {message.sender === "user" ? (
                        <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-purple-700">
                          JD
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Image
                            src="/ziggy_profile.png"
                            alt="Ziggy"
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                    
                    {/* Message Bubble */}
                    <div 
                      className={cn(
                        "max-w-[75%] rounded-xl px-2 py-1.5 text-xs shadow-sm",
                        message.sender === "user" 
                          ? "bg-purple-100 text-purple-900 rounded-tr-none" 
                          : "bg-gray-100 text-gray-800 rounded-tl-none"
                      )}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for fade effect at the top */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '25px',
          background: 'linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.95) 85%, rgba(255,255,255,1) 100%)',
          zIndex: 50,
        }}
      />
    </div>
  );
} 