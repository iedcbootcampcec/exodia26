"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStarOfLife } from "react-icons/fa";
import styles from "./About.module.css";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const ctx = gsap.context(() => {
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
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power4.out",
        }
      );

      // Stats Animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.4,
            ease: "back.out(1.7)",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef} id="about">
      <div className={styles.gridBackground}></div>
      <div className={styles.glowOrb}></div>

      {/* Scrolling Marquee */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[...Array(10)].map((_, i) => (
            <div className={styles.marqueeItem} key={i}>
              <img
                src="/logos/iedcbootcamp.png"
                alt="IEDC"
                className={`${styles.marqueeLogo} ${styles.logoIedc}`}
              />
              <FaStarOfLife className={styles.starIcon} />
              <img
                src="/logos/mulearn.png"
                alt="Mulearn"
                className={`${styles.marqueeLogo} ${styles.logoMulearn}`}
              />
              <FaStarOfLife className={styles.starIcon} />
              <img
                src="/logos/foces.png"
                alt="FOCES"
                className={`${styles.marqueeLogo} ${styles.logoFoces}`}
              />
              <FaStarOfLife className={styles.starIcon} />
              <img
                src="/exodia_logo.svg"
                alt="Exodia"
                className={`${styles.marqueeLogo} ${styles.logoExodia}`}
              />
              <FaStarOfLife className={styles.starIcon} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Column: Heading */}
          <div className={styles.headingWrapper} ref={headingRef}>
            <h2 className={styles.heading}>
              <span className={styles.headingSmall}>WHAT IS</span>
              <span className={styles.headingLarge}>EXODIA?</span>
            </h2>
          </div>

          {/* Right Column: Content & Stats */}
          <div className={styles.infoWrapper}>
            <div ref={contentRef}>
              <p className={styles.text}>
                <span className={styles.highlight}>Exodia '26</span>, the
                all-Kerala tech event, will take place on February 7th and 8th
                at the College of Engineering Chengannur. This year,{" "}
                <span className={styles.highlight}>IEDC BOOTCAMP CEC</span>,{" "}
                <span className={styles.highlight}>FOCES CEC</span>, and{" "}
                <span className={styles.highlight}>MULEARN CHN</span>, in
                collaboration with Notion, are offering hands-on workshops in
                Robotics, Artificial Intelligence, and Computer Vision. Led by
                expert mentors,{" "}
                <span className={styles.highlight}>Exodia 3.0</span> will
                provide valuable insights, networking opportunities, and inspire
                innovation. Join us for this transformative event to shape the
                future of technology!
              </p>
            </div>

            {/* Stats Section */}
            <div className={styles.statsContainer} ref={statsRef}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>STACKS</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>180+</span>
                <span className={styles.statLabel}>STUDENTS</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>DAYS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
