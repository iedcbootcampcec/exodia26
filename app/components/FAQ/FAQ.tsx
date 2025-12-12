"use client";
import { useState, useRef } from "react";
import styles from "./FAQ.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Select elements using the class name from the CSS module
      const items = gsap.utils.toArray<HTMLElement>(`.${styles.faqItem}`);

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
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
      {/* Grid background removed for global consistency */}
      <div className={styles.glowBackground}></div>

      <h2 className={styles.heading}>FREQUENTLY ASKED QUESTIONS</h2>

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.contentWrapper}>
              <div className={styles.question}>
                {faq.question}
                <span className={styles.icon}>
                  <FaChevronDown />
                </span>
              </div>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
