import styles from "./CitySkyline.module.css";
import Starfield from "./Starfield";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CitySkyline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);
  const centerRef = useRef<HTMLImageElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Pre-warm GPU layers on mount to prevent first-scroll jank
      const elements = [
        sunRef.current,
        atmosphereRef.current,
        leftRef.current,
        rightRef.current,
        centerRef.current,
      ].filter(Boolean);

      gsap.set(elements, { force3D: true, willChange: "transform" });

      // Optimized dolly effect with faster scroll handling
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800",
          scrub: 2,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        } as ScrollTrigger.Vars,
      });

      // Combine sun and atmosphere into simpler transforms
      timeline.to(
        sunRef.current,
        { y: 40, scale: 1.15, opacity: 0.7, ease: "none", force3D: true },
        0
      );

      timeline.to(
        atmosphereRef.current,
        { y: 30, opacity: 0.7, ease: "none", force3D: true },
        0
      );

      // Simplified building animations
      timeline.to(
        leftRef.current,
        { y: 60, x: -80, scale: 1.3, ease: "none", force3D: true },
        0
      );

      timeline.to(
        rightRef.current,
        { y: 60, x: 80, scale: 1.3, ease: "none", force3D: true },
        0
      );

      // Center spire
      timeline.to(
        centerRef.current,
        { y: 80, scale: 1.5, ease: "none", force3D: true },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={styles.skylineContainer}>
      {/* Atmospheric Background */}
      <div ref={atmosphereRef} className={styles.atmosphere}></div>

      <Starfield />

      {/* The Red Sun/Moon */}
      <img
        ref={sunRef}
        src="/assets/red-planet.webp"
        alt="Red Planet"
        className={styles.sun}
      />

      {/* Left Building Cluster */}
      <img
        ref={leftRef}
        src="/assets/city-left.webp"
        alt="City Skyline Left"
        className={styles.buildingLeft}
      />

      {/* Right Building Cluster */}
      <img
        ref={rightRef}
        src="/assets/city-right.webp"
        alt="City Skyline Right"
        className={styles.buildingRight}
      />

      {/* Central Spire */}
      <img
        ref={centerRef}
        src="/assets/city-center.webp"
        alt="City Skyline Center"
        className={styles.buildingCenter}
      />

      {/* Fog/Mist Overlay */}
      <div className={styles.fogGlow}></div>
      <div className={styles.fog}></div>
    </div>
  );
};

export default CitySkyline;
