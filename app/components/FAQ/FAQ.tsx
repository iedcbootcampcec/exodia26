"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import styles from "./FAQ.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    id: 1,
    question: "Who can participate in Exodia 3.0?",
    answer:
      "Anyone with a keen interest in learning and building through hands-on sessions, and who is currently pursuing any degree, can participate.",
  },
  {
    id: 2,
    question: "Can I participate online?",
    answer:
      "No. Exodia 3.0 is an offline event, and participants are required to be present at the venue to attend the sessions and activities.",
  },
  {
    id: 3,
    question: "Will accommodation and travel be provided?",
    answer:
      "Accommodation will be provided if requested during registration, subject to availability. Participants must arrange their own travel.",
  },
  {
    id: 4,
    question: "Do I need to bring a laptop?",
    answer:
      "Bringing a laptop is recommended as sessions are hands-on, helping you get the best learning experience. However, it is not mandatory.",
  },
  {
    id: 5,
    question: "Will meals be provided during the event?",
    answer: "Yes, meals and refreshments will be provided during the event.",
  },
  {
    id: 6,
    question: "Can I request a refund after registering?",
    answer: "No. The registration fee is non-refundable once confirmed.",
  },
  {
    id: 7,
    question: "Will there be spot registrations?",
    answer:
      "No. Spot registrations will not be available. Advance registration is required.",
  },
];

// Hook to measure element size
const useElementSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, size };
};

const FAQCardBackground = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const path = useMemo(() => {
    if (width === 0 || height === 0) return "";

    // Adjust dimensions based on width to mimic responsiveness
    const isMobile = width < 600;
    const tabWidth = isMobile ? 100 : 180;
    const tabHeight = isMobile ? 10 : 15;
    const slant = 20;

    // Ensure tab doesn't exceed width
    const safeTabWidth = Math.min(width - slant, tabWidth);

    // Path definition:
    // 1. Start top-left (0,0)
    // 2. Line to end of tab top (safeTabWidth, 0)
    // 3. Slant down to body top (safeTabWidth + slant, tabHeight)
    // 4. Line to right edge (width, tabHeight)
    // 5. Line to bottom right (width, height)
    // 6. Chamfer bottom right? (Optional, let's keep it square for now based on previous clip-path)
    //    Actually, let's add a small mechanic corner at bottom right for extra "sci-fi" feel
    //    if the previous design had it. Previous clip-path didn't. Sticking to previous shape.
    // 7. Line to bottom left (0, height)
    // 8. Close (0,0)

    return `
      M 1 1
      L ${safeTabWidth} 1
      L ${safeTabWidth + slant} ${tabHeight}
      L ${width - 1} ${tabHeight}
      L ${width - 1} ${height - 1}
      L 1 ${height - 1}
      Z
    `;
    // Slight offset (1px) to prevent stroke clipping
  }, [width, height]);

  return (
    <svg
      className={styles.svgBackground}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        stroke="url(#gradient-border)"
        strokeWidth="1"
        fill="rgba(10, 10, 10, 0.4)" // Semi-transparent dark fill
      />
      <path
        d={path}
        stroke="url(#gradient-border-glow)"
        strokeWidth="3"
        strokeOpacity="0.3"
        fill="none"
        style={{ filter: "blur(4px)" }}
      />
      <defs>
        <linearGradient id="gradient-border" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a00" />
          <stop offset="100%" stopColor="#ff4d00" />
        </linearGradient>
        <linearGradient id="gradient-border-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff8a00" />
          <stop offset="100%" stopColor="#ff4d00" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const FAQItem = ({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  const { ref, size } = useElementSize();

  return (
    <div
      className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}
      onClick={onClick}
      ref={ref}
    >
      <FAQCardBackground width={size.width} height={size.height} />

      <div className={styles.contentWrapper}>
        <div className={styles.question}>
          {faq.question}
          <span className={styles.icon}>
            <FaChevronDown className={isOpen ? styles.iconRotate : ""} />
          </span>
        </div>
        <div className={styles.answer}>
          <div className={styles.answerInner}>
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(`.${styles.faqItem}`);

      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.1, // Stagger effect
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq" ref={containerRef}>
      <div className={styles.glowBackground}></div>

      <h2 className={styles.heading}>FREQUENTLY ASKED QUESTIONS</h2>

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            isOpen={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
