"use client";

import React from "react";
import { WordRotate } from "@/registry/magicui/word-rotate";
import Image from "next/image";

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
    <section className="bg-white py-8 md:py-16 font-manrope relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center relative">
          <WordRotate
            staticText="A real estate agent deserves"
            words={rotatingWords}
            className="text-2xl md:text-3xl lg:text-5xl font-bold px-2"
            duration={1800}
          />
          
          {/* Ziggy House Image - Desktop */}
          <div className="hidden md:block absolute right-0 lg:right-10">
            <Image
              src="/ziggy_house_transparent.png"
              alt="Ziggy House"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
          
          {/* Ziggy House Image - Mobile */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-16">
            <Image
              src="/ziggy_house_transparent.png"
              alt="Ziggy House"
              width={70}
              height={70}
              className="object-contain opacity-80"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 