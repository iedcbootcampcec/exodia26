import styles from './CitySkyline.module.css';

const CitySkyline = () => {
  return (
    <div className={styles.skylineContainer}>
      {/* Atmospheric Background */}
      <div className={styles.atmosphere}></div>
      <div className={styles.stars}></div>
      <div className={styles.starsSmall}></div>

      {/* The Red Sun/Moon */}
      <img src="/assets/city-center.webp" alt="Red Planet" className={styles.sun} />

      {/* Left Building Cluster */}
      <img 
        src="/assets/city-left.webp" 
        alt="City Skyline Left" 
        className={styles.buildingLeft}
      />

      {/* Right Building Cluster */}
      <img 
        src="/assets/city-right.webp" 
        alt="City Skyline Right" 
        className={styles.buildingRight}
      />

      {/* Central Spire */}
      <img 
        src="/assets/city-center.webp" 
        alt="City Skyline Center" 
        className={styles.buildingCenter}
      />
      
      {/* Fog/Mist Overlay */}
      <div className={styles.fogGlow}></div>
      <div className={styles.fog}></div>
    </div>
  );
};

export default CitySkyline;
