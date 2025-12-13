import styles from "./Hero.module.css";
import CitySkyline from "./CitySkyline";
import SciFiFrame from "./SciFiFrame";
import ComingSoonBadge from "./ComingSoonBadge";

const Hero = () => {
  return (
    <section className={styles.heroContainer} id="hero">
      <SciFiFrame />
      <div className={styles.contentWrapper}>
        {/* Planet/Glow Background Effect */}
        <div className={styles.planetGlow}></div>

        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <img
            src="/exodia_logo.svg"
            alt="Exodia Logo"
            className={styles.logo}
          />
        </div>

        {/* Heading Image */}
        <img
          src="/exodia-heading.png"
          alt="EXODIA 3.0"
          className={styles.headingImage}
        />

        <p className={styles.subtitle}>All Kerala Technical Learning Gala</p>

        {/* CTA / Badge */}
        <div className={styles.ctaContainer}>
          <ComingSoonBadge />
        </div>
      </div>

      {/* City Skyline SVG */}
      <div className={styles.skylineWrapper}>
        <CitySkyline />
      </div>

      {/* Overlay Gradient for blending */}
      <div className={styles.overlayGradient}></div>
      <div className={styles.bottomGradient}></div>
    </section>
  );
};

export default Hero;
