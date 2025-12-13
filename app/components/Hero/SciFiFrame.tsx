import styles from "./SciFiFrame.module.css";

const SciFiFrame = () => {
  return (
    <div className={styles.frameContainer}>
      {/* Scanline Overlay */}
      <div className={styles.scanlines}></div>

      {/* Corner Brackets */}
      <div className={`${styles.corner} ${styles.topLeft}`}></div>
      <div className={`${styles.corner} ${styles.topRight}`}></div>
      <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
      <div className={`${styles.corner} ${styles.bottomRight}`}></div>

      {/* Side Lines */}
      <div className={`${styles.sideLine} ${styles.leftLine}`}></div>
      <div className={`${styles.sideLine} ${styles.rightLine}`}></div>
    </div>
  );
};

export default SciFiFrame;
