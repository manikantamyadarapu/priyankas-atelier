"use client";

import { useEffect, useRef } from "react";

export default function DressParticles({ isActive }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const activeRef = useRef(isActive);

  useEffect(() => {
    activeRef.current = isActive;
  }, [isActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;
    if (!container) return;

    let particles = [];
    let bgParticles = [];
    let animationFrameId;
    let width, height;
    let isVisible = true;
    let lastFrameTime = 0;

    // --- Gemini Reference Colors ---
    const THEME_COLOR_BASE = "66, 133, 244"; // RGB for Gemini Blue
    const THEME_COLOR_HL = "#ffffff";
    const BG_DOT_COLOR = "rgba(0, 0, 0, 0.1)";

    const isSmallScreen = window.innerWidth < 768;
    const shapeParticleCount = isSmallScreen ? 650 : 1200;
    const bgParticleCount = isSmallScreen ? 120 : 220;
    const frameInterval = 1000 / 36;

    const getDetailedDressPoints = (count) => {
      const points = [];
      for (let i = 0; i < count; i++) {
        const r = Math.random();
        if (r < 0.08) { // Ribbons
          const ribbonOffset = (Math.random() > 0.5 ? -1.5 : 1.5);
          const px = 50 + ribbonOffset + (Math.random() - 0.5) * 0.5;
          const py = 35 + Math.random() * 55;
          points.push({ x: px, y: py });
        } else if (r < 0.38) { // Sleeves
          const side = Math.random() > 0.5 ? 1 : -1;
          const py = 5 + Math.random() * 25;
          const pyNorm = (py - 5) / 25;
          const flareWidth = Math.sin(pyNorm * Math.PI) * 18 + 5;
          const px = 50 + side * (8 + Math.random() * flareWidth);
          points.push({ x: px, y: py });
        } else if (r < 0.53) { // Bodice
          const py = 15 + Math.random() * 20;
          const pyNorm = (py - 15) / 20;
          const width = 3 + pyNorm * 12;
          const px = 50 + (Math.random() - 0.5) * width;
          if (py < 25 && Math.abs(px - 50) < (25 - py) * 0.4) continue;
          points.push({ x: px, y: py });
        } else if (r < 0.60) { // Waist
          const py = 33 + Math.random() * 4;
          const px = 50 + (Math.random() - 0.5) * 25;
          points.push({ x: px, y: py });
        } else { // Skirt
          const py = 37 + Math.random() * 58;
          const pyNorm = (py - 37) / 58;
          const width = 12 + pyNorm * 35;
          const px = 50 + (Math.random() - 0.5) * width * 2;
          points.push({ x: px, y: py });
        }
      }
      return points;
    };

    const targetPoints = getDetailedDressPoints(shapeParticleCount);

    const resize = () => {
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
      const scale = Math.min(width, height) * 0.75;
      const offsetX = width / 2;
      const offsetY = height / 2;

      targetPoints.forEach((p, i) => {
        if (particles[i]) {
          particles[i].targetX = (p.x - 50) * (scale / 100) + offsetX;
          particles[i].targetY = (p.y - 50) * (scale / 100) + offsetY;
        }
      });
    };

    class Particle {
      constructor(isShape) {
        this.isShape = isShape;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.targetX = this.x;
        this.targetY = this.y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = isShape ? (Math.random() * 1.2 + 0.4) : (Math.random() * 0.8 + 0.4);
        
        // --- Smooth Animation State ---
        this.activeProgress = 0; // Lerps from 0 to 1
        this.ease = 0.055 + Math.random() * 0.045;
      }

      update(active, time) {
        // Smoothly transition between free-drifting and shape-holding
        const targetProgress = active ? 1 : 0;
        this.activeProgress += (targetProgress - this.activeProgress) * this.ease;

        if (this.isShape) {
          // Calculate movement toward target
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          
          // Apply movement proportional to activeProgress
          this.x += dx * this.ease * this.activeProgress;
          this.y += dy * this.ease * this.activeProgress;

          // Always apply a bit of drift, less when fully active
          const driftStrength = 1 - this.activeProgress;
          this.x += this.vx * driftStrength;
          this.y += this.vy * driftStrength;

          // Organic breathing
          this.x += Math.sin(time * 0.0024 + this.targetY * 0.05) * 0.3 * this.activeProgress;
          this.y += Math.cos(time * 0.0024 + this.targetX * 0.05) * 0.3 * this.activeProgress;
        } else {
          this.x += this.vx;
          this.y += this.vy;
        }

        // Wrap edges
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        // Smooth color and alpha transition
        if (this.isShape) {
          const alpha = 0.4 + this.activeProgress * 0.6;
          ctx.fillStyle = `rgba(${THEME_COLOR_BASE}, ${alpha})`;
        } else {
          ctx.fillStyle = BG_DOT_COLOR;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Twinkle only when mostly formed
        if (this.isShape && this.activeProgress > 0.7 && Math.random() > 0.985) {
           ctx.fillStyle = THEME_COLOR_HL;
           ctx.arc(this.x, this.y, this.size * 1.7, 0, Math.PI * 2);
           ctx.fill();
        }
      }
    }

    width = canvas.width = container.offsetWidth;
    height = canvas.height = container.offsetHeight;
    for (let i = 0; i < shapeParticleCount; i++) {
      particles.push(new Particle(true));
    }
    for (let i = 0; i < bgParticleCount; i++) {
      bgParticles.push(new Particle(false));
    }
    resize();

    const animate = (time) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      if (time - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = time;
      ctx.clearRect(0, 0, width, height);

      bgParticles.forEach(p => {
        p.update(false, time);
        p.draw();
      });

      const active = activeRef.current;
      particles.forEach(p => {
        p.update(active, time);
        p.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });

    observer.observe(container);
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="dress-particles-container">
      <canvas ref={canvasRef} />
    </div>
  );
}
