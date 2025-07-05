"use client";

import React, { useRef, useEffect } from "react";

const waves = [
  {
    amplitude: 22,
    period: 4000,
    gradient: "url(#violet-gradient)",
    opacity: 1,
    phase: 0,
    direction: 1,
  },
  {
    amplitude: 16,
    period: 6000,
    gradient: "url(#light-violet-gradient)",
    opacity: 0.5,
    phase: Math.PI / 2,
    direction: 1,
  },
  {
    amplitude: 12,
    period: 8000,
    gradient: "url(#fade-violet-gradient)",
    opacity: 0.3,
    phase: Math.PI,
    direction: 1,
  },
  // Reverse direction waves
  {
    amplitude: 18,
    period: 5000,
    gradient: "url(#violet-gradient)",
    opacity: 0.7,
    phase: Math.PI / 3,
    direction: -1,
  },
  {
    amplitude: 13,
    period: 7000,
    gradient: "url(#light-violet-gradient)",
    opacity: 0.4,
    phase: Math.PI / 1.5,
    direction: -1,
  },
  {
    amplitude: 9,
    period: 9000,
    gradient: "url(#fade-violet-gradient)",
    opacity: 0.25,
    phase: Math.PI / 1.2,
    direction: -1,
  },
];

const NUM_POINTS = 6;
const WIDTH = 1440;
const HEIGHT = 200;
const baseY = 50;

// Catmull-Rom to Bezier conversion helper
function catmullRom2bezier(points: { x: number; y: number }[]) {
  let d = `M${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[0];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }
  return d;
}

const WaveDivider = () => {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      waves.forEach((wave, wIdx) => {
        const points = [];
        for (let i = 0; i <= NUM_POINTS; i++) {
          const x = (WIDTH / NUM_POINTS) * i;
          const offset =
            Math.sin(
              (elapsed / wave.period) * 2 * Math.PI +
                (i / NUM_POINTS) * 2 * Math.PI * wave.direction +
                wave.phase
            ) * wave.amplitude * 1.7;
          points.push({ x, y: baseY + offset });
        }
        let d = catmullRom2bezier(points);
        d += ` V${HEIGHT} H0 Z`;
        if (pathRefs.current[wIdx]) {
          pathRefs.current[wIdx]!.setAttribute("d", d);
        }
      });
      animationRef.current = requestAnimationFrame((ts) => animate(ts));
    }
    animationRef.current = requestAnimationFrame((ts) => animate(ts));
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full h-[120px] md:h-[180px] lg:h-[240px] overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="violet-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B266FF" />
            <stop offset="100%" stopColor="#7F00FF" />
          </linearGradient>
          <linearGradient id="light-violet-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0C3FC" />
            <stop offset="100%" stopColor="#B266FF" />
          </linearGradient>
          <linearGradient id="fade-violet-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F8F8FF" />
            <stop offset="100%" stopColor="#E0C3FC" />
          </linearGradient>
        </defs>
        {waves.map((wave, i) => (
          <path
            key={i}
            ref={el => { pathRefs.current[i] = el; }}
            fill={wave.gradient}
            opacity={wave.opacity}
            d=""
          />
        ))}
      </svg>
    </div>
  );
};

export default WaveDivider; 