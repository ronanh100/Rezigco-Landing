"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.05], [0.9, 1]);

  return (
    <div
      className="w-full bg-white font-bricolage"
      style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10"></div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-16 pt-6">
        {/* Progress line - positioned outside the timeline items */}
        <div className="absolute left-[19px] top-0 w-[2px] h-full bg-neutral-200 z-0">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-[#922ea4]"
          />
        </div>

        <div className="flex flex-col space-y-8 md:space-y-24">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-row md:gap-10"
            >
              <div className="relative min-w-[40px] md:min-w-[200px]">
                <div className="sticky top-24 flex flex-col md:flex-row items-center">
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center z-10">
                    <div className="h-5 w-5 rounded-full bg-[#922ea4]" />
                  </div>
                  <div className="hidden md:block md:w-[300px]">
                    <h3 className="text-xl md:text-3xl font-bold text-[#922ea4] md:pl-6">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex-1 pl-6 md:pl-0">
                <h3 className="md:hidden text-2xl mb-4 text-left font-bold text-[#922ea4]">
                  {item.title}
                </h3>
                <div className="max-w-2xl">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 