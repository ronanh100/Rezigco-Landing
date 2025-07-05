import React, { useRef, useEffect } from 'react';

const LINE_COLOR = '#7F00FF';
const LINE_OPACITY = 0.15;
const LINE_WIDTH = 1.5;
const PARTICLE_COUNT = 60;
const SPEED = 0.8;
const CURVE_STRENGTH = 0.3;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

// Perlin-like noise for smooth curves
function noise(x: number, y: number, time: number) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const Z = Math.floor(time) & 255;
  
  const n = X + Y * 57 + Z * 131;
  return (Math.sin(n * 12.9898) * 43758.5453) % 1;
}

// Smooth interpolation
function smoothNoise(x: number, y: number, time: number) {
  const intX = Math.floor(x);
  const intY = Math.floor(y);
  const fracX = x - intX;
  const fracY = y - intY;
  
  const v1 = noise(intX, intY, time);
  const v2 = noise(intX + 1, intY, time);
  const v3 = noise(intX, intY + 1, time);
  const v4 = noise(intX + 1, intY + 1, time);
  
  const i1 = v1 + (v2 - v1) * fracX;
  const i2 = v3 + (v4 - v3) * fracX;
  
  return i1 + (i2 - i1) * fracY;
}

const FlowFieldBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      path: Array<{ x: number; y: number }>;
    }> = [];

    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          vx: 0,
          vy: 0,
          life: 0,
          maxLife: randomBetween(100, 200),
          path: []
        });
      }
    };

    initParticles();

    // Get flow field direction
    const getFlowDirection = (x: number, y: number, time: number) => {
      const scale = 0.005;
      const angle = smoothNoise(x * scale, y * scale, time * 0.1) * Math.PI * 2;
      return {
        x: Math.cos(angle) * CURVE_STRENGTH,
        y: Math.sin(angle) * CURVE_STRENGTH
      };
    };

    // Animation loop
    const animate = () => {
      timeRef.current += SPEED * 0.1;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Get flow direction
        const flow = getFlowDirection(particle.x, particle.y, timeRef.current);
        
        // Update velocity with flow field
        particle.vx += flow.x;
        particle.vy += flow.y;
        
        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.2;
        particle.vy += (Math.random() - 0.5) * 0.2;
        
        // Dampen velocity
        particle.vx *= 0.98;
        particle.vy *= 0.98;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Add to path
        particle.path.push({ x: particle.x, y: particle.y });
        if (particle.path.length > 50) {
          particle.path.shift();
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Update life
        particle.life++;
        if (particle.life > particle.maxLife) {
          particle.life = 0;
          particle.x = randomBetween(0, width);
          particle.y = randomBetween(0, height);
          particle.vx = 0;
          particle.vy = 0;
          particle.path = [];
        }
        
        // Draw curved path
        if (particle.path.length > 2) {
          ctx.beginPath();
          ctx.strokeStyle = LINE_COLOR;
          ctx.globalAlpha = LINE_OPACITY * (particle.life / particle.maxLife);
          ctx.lineWidth = LINE_WIDTH;
          
          // Draw smooth curve through path points
          ctx.moveTo(particle.path[0].x, particle.path[0].y);
          
          for (let i = 1; i < particle.path.length - 1; i++) {
            const current = particle.path[i];
            const next = particle.path[i + 1];
            
            // Create smooth curve
            const cp1x = current.x + (next.x - particle.path[i - 1].x) * 0.25;
            const cp1y = current.y + (next.y - particle.path[i - 1].y) * 0.25;
            const cp2x = next.x - (next.x - current.x) * 0.25;
            const cp2y = next.y - (next.y - current.y) * 0.25;
            
            ctx.quadraticCurveTo(cp1x, cp1y, next.x, next.y);
          }
          
          ctx.stroke();
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
};

export default FlowFieldBackground; 