"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type TextAnimateProps = {
  children: React.ReactNode;
  animation: "fadeIn" | "blurInUp" | "typewriter" | "slideUp";
  by?: "character" | "word" | "line";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  as?: "div" | "span";
};

export function TextAnimate({
  children,
  animation = "fadeIn",
  by = "word",
  delay = 0.1,
  duration = 0.5,
  className,
  once = false,
  as = "div",
}: TextAnimateProps) {
  const containerRef = useRef<HTMLDivElement | HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // If children is not a simple string, render it directly with animation wrapper
  if (typeof children !== 'string') {
    const Component = as === 'span' ? 'span' : 'div';
    
    return (
      <Component
        ref={containerRef as any}
        className={cn("inline", className)}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0) scale(1) blur(0)" : getInitialTransform(animation),
          transition: `opacity ${duration}s ease, transform ${duration}s ease`,
        }}
      >
        {children}
      </Component>
    );
  }

  // Original implementation for string children
  const [elements, setElements] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || typeof children !== 'string') return;

    const container = containerRef.current;
    const text = children;
    container.innerHTML = "";
    const elements: HTMLElement[] = [];

    if (by === "character") {
      Array.from(text).forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        container.appendChild(span);
        elements.push(span);
      });
    } else if (by === "word") {
      text.split(" ").forEach((word, i, arr) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.display = "inline-block";
        container.appendChild(span);
        elements.push(span);

        if (i < arr.length - 1) {
          const space = document.createElement("span");
          space.innerHTML = "\u00A0";
          container.appendChild(space);
        }
      });
    } else if (by === "line") {
      text.split("\n").forEach((line) => {
        const element = document.createElement(as === "span" ? "span" : "div");
        element.textContent = line || "\u00A0";
        if (as === "span") {
          element.style.display = "inline-block";
        }
        container.appendChild(element);
        elements.push(element);
      });
    }

    setElements(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [children, by, once, as]);

  useEffect(() => {
    if (!elements.length) return;

    elements.forEach((element, i) => {
      element.style.opacity = "0";
      element.style.transform = getInitialTransform(animation);
      element.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
      element.style.transitionDelay = `${i * delay}s`;

      if (isVisible) {
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0) scale(1) blur(0)";
        }, 10);
      } else {
        element.style.opacity = "0";
        element.style.transform = getInitialTransform(animation);
      }
    });
  }, [elements, isVisible, animation, delay, duration]);

  // Add intersection observer for the simple case too
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  if (as === "span") {
    return (
      <span
        ref={containerRef as React.RefObject<HTMLSpanElement>}
        className={cn("inline", className)}
        aria-label={typeof children === 'string' ? children : undefined}
      />
    );
  }
  
  return (
    <div
      ref={containerRef as React.RefObject<HTMLDivElement>}
      className={cn("inline", className)}
      aria-label={typeof children === 'string' ? children : undefined}
    />
  );
}

function getInitialTransform(animation: TextAnimateProps["animation"]) {
  switch (animation) {
    case "fadeIn":
      return "translateY(0) scale(1)";
    case "blurInUp":
      return "translateY(10px) blur(8px)";
    case "typewriter":
      return "translateX(-10px)";
    case "slideUp":
      return "translateY(20px)";
    default:
      return "translateY(0)";
  }
} 