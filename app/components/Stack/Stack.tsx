"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import styles from "./Stack.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const stacks = [
  {
    id: 1,
    number: "01",
    title: "ROBOTICS",
    image: "/stack/robotics.webp",
  },
  {
    id: 2,
    number: "02",
    title: "DATA SCIENCE WITH ML",
    image: "/stack/data-science-ml.webp",
  },
  {
    id: 3,
    number: "03",
    title: "COMPUTER VISION",
    image: "/stack/computer-vision.webp",
  },
];

const Stack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Heading Animation
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          duration: 0.5,
          text: {
            value: "STACKS",
            delimiter: "",
          },
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      // Cards Animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={styles.stackSection} id="stack">
      <div className={styles.gridBackground}></div>
      <div className={styles.glowBackground}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          {/* Initial empty text for TextPlugin to fill */}
          <h2 ref={headingRef} className={styles.title}></h2>
        </div>

        <div ref={cardsRef} className={styles.grid}>
          {stacks.map((stack) => (
            <div key={stack.id} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardBgNumber}>{stack.number}</div>

                <div className={styles.imageWrapper}>
                  {/* Optimized Next.js Image */}
                  <Image
                    src={stack.image}
                    alt={stack.title}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.cornerDecorTopLeft}></div>
                  <div className={styles.cornerDecorBottomRight}></div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{stack.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
