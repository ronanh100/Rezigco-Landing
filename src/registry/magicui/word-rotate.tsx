"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  className?: string;
  duration?: number;
  staticText?: string;
}

export function WordRotate({
  words,
  className,
  duration = 1800,
  staticText,
}: WordRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  // Find the longest word to set a fixed width
  useEffect(() => {
    // Create a temporary span to measure text width
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    span.className = className || '';
    document.body.appendChild(span);

    // Find the max width
    let maxWordWidth = 0;
    words.forEach(word => {
      span.textContent = word;
      const width = span.getBoundingClientRect().width;
      if (width > maxWordWidth) {
        maxWordWidth = width;
      }
    });

    setMaxWidth(maxWordWidth);
    document.body.removeChild(span);
  }, [words, className]);

  // Rotate through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {staticText && <div className="mb-4 text-black">{staticText}</div>}
      <div style={{ 
        width: '100%', 
        minHeight: '1.5em', 
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="text-[#7F00FF] text-center max-w-full px-2"
            style={{ position: 'absolute' }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
} 