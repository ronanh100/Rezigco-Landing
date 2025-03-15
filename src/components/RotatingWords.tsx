"use client";

import React from "react";
import { WordRotate } from "@/registry/magicui/word-rotate";

export default function RotatingWords() {
  const rotatingWords = [
    "Fewer Distractions, More Commissions",
    "Tools You Trust",
    "Effortless Growth",
    "24/7 Performance",
    "Time Back",
    "Simplicity",
    "Rezigco"
  ];

  return (
    <section className="bg-white py-8 md:py-16 font-bricolage" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <WordRotate
            staticText="A real estate agent deserves"
            words={rotatingWords}
            className="text-2xl md:text-3xl lg:text-5xl font-bold px-2"
            duration={1800}
          />
        </div>
      </div>
    </section>
  );
} 