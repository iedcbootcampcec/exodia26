"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import styles from "./Gallery.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Image data with size variants for visual variety
const galleryImages = [
  { src: "/gallery/img1.jpg", size: "medium" },
  { src: "/gallery/img2.jpg", size: "small" },
  { src: "/gallery/img3.jpg", size: "large" },
  { src: "/gallery/img4.jpg", size: "tall" },
  { src: "/gallery/img5.jpg", size: "medium" },
  { src: "/gallery/img6.jpg", size: "small" },
  { src: "/gallery/img7.jpg", size: "large" },
  { src: "/gallery/img8.jpg", size: "medium" },
  { src: "/gallery/img9.jpg", size: "tall" },
  { src: "/gallery/img10.jpg", size: "small" },
];

// Create two rows with different arrangements
const row1Images = [
  galleryImages[0],
  galleryImages[2],
  galleryImages[4],
  galleryImages[6],
  galleryImages[8],
  // Duplicate for seamless loop
  galleryImages[0],
  galleryImages[2],
  galleryImages[4],
  galleryImages[6],
  galleryImages[8],
];

const row2Images = [
  galleryImages[1],
  galleryImages[3],
  galleryImages[5],
  galleryImages[7],
  galleryImages[9],
  // Duplicate for seamless loop
  galleryImages[1],
  galleryImages[3],
  galleryImages[5],
  galleryImages[7],
  galleryImages[9],
];

const getSizeClass = (size: string) => {
  switch (size) {
    case "small":
      return styles.cardSmall;
    case "large":
      return styles.cardLarge;
    case "tall":
      return styles.cardTall;
    default:
      return styles.cardMedium;
  }
};

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // Title typewriter animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { text: "" },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 40%",
              scrub: 1,
            },
            text: "THE EXPERIENCE",
            ease: "none",
          }
        );
      }

      // Subtitle fade in
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current?.querySelector(`.${styles.subtitle}`),
          {
            y: 30,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 40%",
              scrub: 0.5,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.section} ref={sectionRef} id="gallery">
      {/* Radial Gradient Background */}
      <div className={styles.gradientBg}></div>

      {/* Giant 2.0 Background Text */}
      <div className={styles.bgText}>2.0</div>

      <div className={styles.header} ref={headingRef}>
        <h2 className={styles.title} ref={titleRef}></h2>
        <p className={styles.subtitle}>Moments from Previous Editions</p>
      </div>

      {/* Gallery Container - slides in on scroll */}
      <div className={styles.galleryContainer}>
        {/* First Row - Auto scrolls left */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {row1Images.map((img, index) => (
              <div
                key={`row1-${index}`}
                className={`${styles.card} ${getSizeClass(img.size)}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={img.src}
                    alt={`Exodia Experience ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.overlay}>
                  <span className={styles.caption}>EXODIA &apos;25</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Auto scrolls right */}
        <div className={styles.marqueeWrapper}>
          <div
            className={`${styles.marqueeTrack} ${styles.marqueeTrackReverse}`}
          >
            {row2Images.map((img, index) => (
              <div
                key={`row2-${index}`}
                className={`${styles.card} ${getSizeClass(img.size)}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={img.src}
                    alt={`Exodia Experience ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.overlay}>
                  <span className={styles.caption}>EXODIA &apos;25</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
