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

  useGSAP(() => {
    if (!containerRef.current) return;

    // Slower, zoom-in dolly effect - camera pushes forward into the scene
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1200",
        scrub: 1,
      },
    });

    // Sun - subtle zoom and fade (far background)
    timeline.to(sunRef.current, {
      y: 50,
      scale: 1.2,
      opacity: 0.6,
      ease: "none",
    }, 0);

    // Atmosphere - gentle shift
    timeline.to(atmosphereRef.current, {
      y: 40,
      scale: 1.1,
      opacity: 0.6,
      ease: "none",
    }, 0);

    // Left building - zoom in with outward push
    timeline.to(leftRef.current, {
      y: 80,
      x: -120,
      scale: 1.4,
      rotationY: -2,
      ease: "none",
    }, 0);

    // Right building - zoom in with outward push
    timeline.to(rightRef.current, {
      y: 80,
      x: 120,
      scale: 1.4,
      rotationY: 2,
      ease: "none",
    }, 0);

    // Center spire - largest zoom (camera moves toward it)
    timeline.to(centerRef.current, {
      y: 120,
      scale: 1.8,
      z: 150,
      ease: "none",
    }, 0);

  }, { scope: containerRef });

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
