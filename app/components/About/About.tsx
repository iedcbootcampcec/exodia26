"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Helper component to wrap words in spans
const RevealText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span className={className}>
      {children.split(" ").map((word, i) => (
        <span key={i} className={styles.word}>
          {word}{" "}
        </span>
      ))}
    </span>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedForum, setSelectedForum] = useState<ForumData | null>(null);

  const handleForumClick = (forum: ForumData) => {
    setSelectedForum(forum);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useGSAP(
    () => {
      // Background text
      if (bgTextRef.current) {
        gsap.fromTo(
          bgTextRef.current,
          { text: "" },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            } as ScrollTrigger.Vars,
            text: "EXODIA",
            ease: "none",
          }
        );
      }

      // Title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { text: "" },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 35%",
              scrub: 1,
            } as ScrollTrigger.Vars,
            text: "EXODIA ?",
            ease: "none",
          }
        );
      }

      // Word-by-word reveal animation
      const words = descriptionRef.current?.querySelectorAll("." + styles.word);
      if (words && words.length > 0) {
        gsap.set(words, { opacity: 0.15 });
        gsap.to(words, {
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1,
          } as ScrollTrigger.Vars,
          opacity: 1,
          stagger: 0.02,
          ease: "none",
        });
      }

      // Animate other blocks
      const blocks = sectionRef.current?.querySelectorAll("[data-animate]");
      if (blocks) {
        gsap.fromTo(
          blocks,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 20%",
              scrub: 1.5,
            } as ScrollTrigger.Vars,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            force3D: true,
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section className={styles.section} ref={sectionRef} id="about">
      {/* Radial Gradient Glow */}
      <div className={styles.gradientBg}></div>

      {/* Giant Background */}
      <div className={styles.bgText} ref={bgTextRef}></div>

      <div className={styles.wrapper}>
        {/* Left - Main Content */}
        <div className={styles.main}>
          <div className={styles.titleBlock} data-animate>
            <span className={styles.eyebrow}>WHAT IS</span>
            <h2 className={styles.title}>
              <span ref={titleRef}></span>
            </h2>
            <p className={styles.tagline}>A Tech Gala Like No Other</p>
          </div>

          <div className={styles.description} ref={descriptionRef}>
            <p>
              <RevealText>
                Exodia 3.0 brings together innovators from across Kerala for a
                hands-on technical meet on February 7th and 8th at the College
                of Engineering Chengannur.
              </RevealText>
            </p>
            <p>
              <RevealText>Organised by</RevealText>{" "}
              <span
                className={`${styles.link} ${styles.word}`}
                onClick={() => handleForumClick(forums[0])}
              >
                IEDC BOOTCAMP CEC
              </span>
              ,{" "}
              <span
                className={`${styles.link} ${styles.word}`}
                onClick={() => handleForumClick(forums[1])}
              >
                FOCES CEC
              </span>
              , <RevealText>and</RevealText>{" "}
              <span
                className={`${styles.link} ${styles.word}`}
                onClick={() => handleForumClick(forums[2])}
              >
                μLearn CHN
              </span>
              ,{" "}
              <RevealText>
                the event is designed to provide participants with practical
                exposure through structured learning experiences and
                collaborative sessions.
              </RevealText>
            </p>
            <p>
              <RevealText>
                The event features hands-on workshops in Robotics, Data Science
                with Machine Learning, and Computer Vision, led by experienced
                mentors, with an emphasis on skill development, professional
                networking, and innovation.
              </RevealText>
            </p>
          </div>
        </div>

        {/* Right - Stats + Forums */}
        <div className={styles.sidebar}>
          {/* Stats */}
          <div className={styles.stats} data-animate>
            <div className={styles.statRow}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statText}>Tech Stacks</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statNum}>180</span>
              <span className={styles.statText}>Participants</span>
            </div>
            <div className={styles.statRow}>
              <span className={styles.statNum}>2</span>
              <span className={styles.statText}>Days of Innovation</span>
            </div>
          </div>

          {/* Forums */}
          <div className={styles.forums} data-animate>
            <span className={styles.forumsLabel}>Organised by</span>
            <div className={styles.forumsList}>
              {forums.map((forum) => (
                <div
                  key={forum.id}
                  className={styles.forumItem}
                  onClick={() => handleForumClick(forum)}
                >
                  <img src={forum.logo} alt={forum.name} />
                  <span>{forum.name.split(" ")[0]}</span>
                </div>
              ))}
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
              style={selectedForum.id === 2 ? { height: "60px" } : {}}
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
