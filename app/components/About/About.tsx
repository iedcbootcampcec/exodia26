"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./About.module.css";

interface ForumData {
  id: number;
  name: string;
  content: string;
  logo: string;
}

const forums: ForumData[] = [
  {
    id: 1,
    name: "IEDC BOOTCAMP CEC",
    content:
      "IEDC BOOTCAMP CEC is the Innovation and Entrepreneurship Development Cell of College of Engineering Chengannur, functioning under Kerala Startup Mission. It serves as a dynamic platform where student-driven innovation, technology, and creativity converge.\n\nThrough hands-on sessions, mentorship, teamwork, and practical challenges, the Bootcamp helps students develop problem-solving skills, leadership, and an entrepreneurial mindset. It encourages experimentation, collaboration, and learning by doing—empowering students to turn imagination into innovation and take the first step toward becoming future changemakers.",
    logo: "/logos/iedcbootcamp.png",
  },
  {
    id: 2,
    name: "FOCES CEC",
    content:
      "Forum of Computer Engineering Students – FOCES is the official forum of the Computer Science and Engineering Department of CEC. It functions as a dynamic platform where students can share ideas, collaborate on projects, explore emerging technologies, and develop their technical and creative potential.\n\nFOCES CEC continuously works to build a strong tech-driven community through workshops, tech talks, events, competitions, and student-led initiatives. It promotes learning beyond the classroom, encourages innovation, and creates opportunities for students to grow, experiment, and contribute to impactful activities.",
    logo: "/logos/foces.png",
  },
  {
    id: 3,
    name: "MULEARN CHN",
    content:
      "µLearn CHN is a vibrant, peer-driven community powered by GTech, dedicated to learning through mutual growth. Built on the philosophy of micro-learning and consistency, it offers a space where students can discover their interests, explore technology, engage in discussions, and learn skills that prepare them for real-world opportunities. We bring together curious minds for the exploration of new ideas, upskilling, and collaboration on impactful projects.\n\nRooted in micro-learning, challenges, mentorship, and hands-on experiences, we help students grow consistently at a personal and professional level. At µLearn CHN, curiosity becomes capability, and ideas become action.",
    logo: "/logos/mulearn.png",
  },
];

// Register ScrollTrigger once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedForum, setSelectedForum] = useState<ForumData | null>(null);

  const handleForumClick = (id: number) => {
    const forum = forums[id];
    if (forum) {
      setSelectedForum(forum);
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useGSAP(
    () => {
      // Heading Animation
      gsap.fromTo(
        headingRef.current,
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
        }
      );

      // Content Animation
      gsap.fromTo(
        contentRef.current,
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power4.out",
        }
      );

      // Stats Animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.4,
            ease: "back.out(1.7)",
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.aboutSection} ref={sectionRef} id="about">
      <div className={styles.backgroundEffects}></div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column: Heading */}
          <div className={styles.headingWrapper} ref={headingRef}>
            <h2 className={styles.heading}>
              <span className={styles.headingSmall}>What is</span>
              <div className={styles.headingLine}>
                <span className={styles.headingLarge}>exodia</span>
                <span className={styles.questionMark}>?</span>
              </div>
            </h2>
          </div>

          {/* Right Column: Content & Stats */}
          <div className={styles.rightColumn}>
            <div className={styles.infoCard} ref={contentRef}>
              <p className={styles.text}>
                Exodia 3.0 brings together innovators from across Kerala for a
                hands-on technical meet on February 7th and 8th at the College
                of Engineering Chengannur.
                <br />
                <br />
                Organised by{" "}
                <span
                  className={styles.highlightLink}
                  onClick={() => handleForumClick(0)}
                >
                  IEDC BOOTCAMP CEC
                </span>
                ,{" "}
                <span
                  className={styles.highlightLink}
                  onClick={() => handleForumClick(1)}
                >
                  FOCES CEC
                </span>
                , and{" "}
                <span
                  className={styles.highlightLink}
                  onClick={() => handleForumClick(2)}
                >
                  μLearn CHN
                </span>
                , the event is designed to provide participants with practical
                exposure through structured learning experiences and
                collaborative sessions.
                <br />
                <br />
                The event features hands-on workshops in Robotics, Data Science
                with Machine Learning, and Computer Vision, led by experienced
                mentors, with an emphasis on skill development, professional
                networking, and innovation.
              </p>
            </div>

            {/* Stats Section */}
            <div className={styles.statsContainer} ref={statsRef}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>STACKS</span>
              </div>

              <div className={styles.chevronDivider}>
                <svg viewBox="0 0 24 100" preserveAspectRatio="none">
                  <polyline
                    points="0,0 24,50 0,100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>180</span>
                <span className={styles.statLabel}>STUDENTS</span>
              </div>

              <div className={styles.chevronDivider}>
                <svg viewBox="0 0 24 100" preserveAspectRatio="none">
                  <polyline
                    points="0,0 24,50 0,100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>DAYS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isVisible={isModalVisible} onClose={closeModal}>
        {selectedForum && (
          <div className={styles.modalContent}>
            <img
              src={selectedForum.logo}
              alt={selectedForum.name}
              className={styles.modalLogo}
            />
            <h3 className={styles.modalHeading}>{selectedForum.name}</h3>
            <p className={styles.modalText}>
              {selectedForum.content.split("\n\n").map((paragraph, index) => (
                <span key={index}>
                  {paragraph}
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default About;
