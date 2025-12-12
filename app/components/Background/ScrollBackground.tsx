"use client";
import styles from "./ScrollBackground.module.css";

export default function ScrollBackground() {
  return (
    <div className={styles.container}>
      {/* Floating orbs with CSS-only animation */}
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>

      {/* Ambient glow layer */}
      <div className={styles.ambientGlow}></div>

      {/* Subtle noise texture */}
      <div className={styles.noise}></div>
    </div>
  );
}
