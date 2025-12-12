"use client";
import { useEffect, useRef, useCallback } from "react";
import styles from "./ScrollBackground.module.css";

export default function ScrollBackground() {
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef<number>(0);

  const updateBackground = useCallback(() => {
    const scrollPercent =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight || 1);

    // Only update if scroll changed significantly (throttle repaints)
    if (Math.abs(scrollPercent - lastScrollRef.current) > 0.005) {
      lastScrollRef.current = scrollPercent;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        scrollPercent.toFixed(3)
      );
    }
    rafRef.current = null;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth, non-blocking updates
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateBackground);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateBackground(); // Initialize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateBackground]);

  return (
    <div className={styles.container}>
      {/* Ambient glow - using pseudo-elements for better performance */}
      <div className={styles.ambientGlow}></div>

      {/* Subtle gradient orbs - smaller blur, GPU optimized */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>

      {/* Static noise texture */}
      <div className={styles.noise}></div>
    </div>
  );
}
