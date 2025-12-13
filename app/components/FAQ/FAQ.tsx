"use client";
import { useState, useRef } from "react";
import styles from "./FAQ.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlus } from "react-icons/fa";

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

const FAQItem = ({
  faq,
  isOpen,
  onClick,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`${styles.faqCard} ${isOpen ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.questionRow}>
        <h3 className={styles.questionText}>{faq.question}</h3>
        <span className={styles.toggleIcon}>
          <FaPlus />
        </span>
      </div>
      <div className={styles.answerContainer}>
        <div className={styles.answerText}>
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Heading animation - letters coming together
      if (headingRef.current) {
        const letters = headingRef.current.querySelectorAll(
          `.${styles.letter}`
        );

        letters.forEach((letter, i) => {
          // F: left, A: down, Q: right
          const positions = [
            { x: -150, y: 0 }, // F - from left
            { x: 0, y: 100 }, // A - from down
            { x: 150, y: 0 }, // Q - from right
          ];

          gsap.fromTo(
            letter,
            {
              opacity: 0,
              x: positions[i].x,
              y: positions[i].y,
              scale: 0.5,
            },
            {
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 85%",
                end: "top 50%",
                scrub: 1,
              },
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              ease: "none",
            }
          );
        });
      }

      // Cards animation - cascading slide up
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(
          `.${styles.faqCard}`
        );

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 60,
            },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "top 70%",
                scrub: 1,
              },
              opacity: 1,
              y: 0,
              ease: "none",
            }
          );
        });
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq" ref={sectionRef}>
      {/* Radial Gradient Glow */}
      <div className={styles.gradientBg}></div>

      {/* Giant ? Background */}
      <div className={styles.bgText}>?</div>

      <h2 className={styles.heading} ref={headingRef}>
        {"FAQ".split("").map((letter, i) => (
          <span key={i} className={styles.letter}>
            {letter}
          </span>
        ))}
      </h2>

      <div className={styles.faqContainer} ref={containerRef}>
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
