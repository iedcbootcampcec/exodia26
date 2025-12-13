"use client";
import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisibleRef = useRef(true); // Track visibility

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initStars(width, height);
    };

    const initStars = (width: number, height: number) => {
      const starCount = width < 768 ? 150 : 300; // Reduced star count
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() < 0.5 ? 1 : 0.5,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      // Skip animation when not visible - frees up resources during scroll
      if (!isVisibleRef.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.rect(star.x, star.y, star.size, star.size);
        ctx.fill();

        star.y -= star.speed;

        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Intersection Observer to pause animation when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0, rootMargin: "100px" } // Small margin for smoother transition
    );

    observer.observe(canvas);

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default Starfield;
