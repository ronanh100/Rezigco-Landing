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
  },
  {
    content: "Of course! I'll send them right away. Would you like to schedule a viewing?",
    sender: "agent",
    id: 6
  }
];

export function ChatEngagerDemo({ className }: { className?: string }) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);

  // Function to add messages one by one
  useEffect(() => {
    if (isRestarting) return;

    const addMessage = (index: number) => {
      if (index >= chatMessages.length) {
        // All messages have been added, restart after a delay
        setTimeout(() => {
          setIsRestarting(true);
          setTimeout(() => {
            setVisibleMessages([]);
            setIsRestarting(false);
          }, 1000);
        }, 2000);
        return;
      }

      setIsAnimating(true);
      setVisibleMessages(prev => {
        // Keep only the last 4 messages to ensure they fit in the container
        const newMessages = [...prev, chatMessages[index]];
        if (newMessages.length > 4) {
          return newMessages.slice(newMessages.length - 4);
        }
        return newMessages;
      });
      
      // Schedule the next message
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          addMessage(index + 1);
        }, 300);
      }, 1500);
    };

    if (visibleMessages.length === 0 && !isAnimating) {
      // Start the sequence
      addMessage(0);
    }
  }, [visibleMessages, isAnimating, isRestarting]);

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
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleMessages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
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
                  exit={{ 
                    opacity: 0,
                    y: -20,
                    transition: { 
                      duration: 0.2 
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
                      <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-gray-700">
                        AI
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
              ))}
            </AnimatePresence>
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