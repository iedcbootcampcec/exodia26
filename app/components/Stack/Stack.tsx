"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Modal from "../Modal/Modal";
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
    content: [
      "Master the core foundations of robotics.",
      "Discover how autonomous machines are conceived, built, and controlled.",
      "Work with industry-standard sensors, actuators, and microcontrollers.",
      "Participate in practical sessions to create and program robots that perform meaningful tasks.",
      "Explore the evolution of automation and the merging of AI with mechanical systems.",
      "Learn from specialists who help you connect software logic with physical hardware.",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "DATA SCIENCE WITH ML",
    image: "/stack/data-science-ml.webp",
    content: [
      "Build a strong base in data science and machine learning.",
      "Learn modern methods for interpreting complex datasets and uncovering valuable insights.",
      "Study the models and algorithms that forecast patterns and outcomes.",
      "Engage in real-world exercises involving data preparation, visualization, and model development.",
      "Understand the complete data workflow—from raw input to informed decisions.",
      "Receive guidance from professionals who sharpen your ability to solve challenges through data.",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "COMPUTER VISION",
    image: "/stack/computer-vision.webp",
    content: [
      "Develop a solid understanding of computer vision.",
      "Study how machines analyze and understand visual content.",
      "Dive into advanced neural architectures used for recognition and detection tasks.",
      "Apply your learning through projects such as face identification and automated inspection tools.",
      "Examine how vision-based AI is reshaping sectors like medicine and autonomous mobility.",
      "Work with experts who help you build systems capable of interpreting the visual world.",
    ],
  },
];

const Stack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedStack, setSelectedStack] = useState<(typeof stacks)[0] | null>(
    null
  );

  useGSAP(
    () => {
      // Heading Animation
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: -50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          }
        );
      }

      // Cards Animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const openModal = (stack: (typeof stacks)[0]) => {
    setSelectedStack(stack);
  };

  const closeModal = () => {
    setSelectedStack(null);
  };

  return (
    <section ref={sectionRef} className={styles.stackSection} id="stack">
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 ref={headingRef} className={styles.title}>
            STACKS
          </h2>
        </div>

        <div ref={cardsRef} className={styles.grid}>
          {stacks.map((stack) => (
            <div key={stack.id} className={styles.cardWrapper}>
              <div
                onClick={() => openModal(stack)}
                className={`${styles.card} ${
                  stack.id === 2 ? styles.cardCenter : ""
                }`}
              >
                <div className={styles.cardContent}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={stack.image}
                      alt={stack.title}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{stack.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal using shared component */}
      <Modal isVisible={!!selectedStack} onClose={closeModal}>
        {selectedStack && (
          <div className={styles.modalBody}>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedStack.image}
                alt={selectedStack.title}
                fill
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalTextContent}>
              <h3 className={styles.modalTitle}>{selectedStack.title}</h3>
              <ul className={styles.modalList}>
                {selectedStack.content.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Stack;
