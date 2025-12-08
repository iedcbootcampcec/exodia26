import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LOADING_TEXTS = [
  "INITIALIZING CORE SYSTEMS...",
  "LOADING ASSETS...",
  "ESTABLISHING SECURE CONNECTION...",
  "DECRYPTING DATA...",
  "ACCESS GRANTED."
];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 3000; // 3 seconds total
    const intervalTime = 30; // Update every 30ms
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(100, (currentStep / steps) * 100);
      setProgress(newProgress);

      // Update text based on progress milestones
      if (newProgress < 30) setTextIndex(0);
      else if (newProgress < 50) setTextIndex(1);
      else if (newProgress < 70) setTextIndex(2);
      else if (newProgress < 90) setTextIndex(3);
      else setTextIndex(4);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsExiting(true);
        setTimeout(onComplete, 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`${styles.loadingContainer} ${isExiting ? styles.exit : ''}`}>
      <div className={styles.logoWrapper}>
        <img src="/exodia_logo.svg" alt="Exodia Logo" className={styles.logo} />
        <div className={styles.glitchLayer}></div>
        <div className={styles.glitchLayer}></div>
      </div>
      
      <div className={styles.progressContainer}>
        <div className={styles.progressBarFrame}>
          <div 
            className={styles.progressBarFill} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles.percentage}>{Math.floor(progress)}%</div>
      </div>
      
      <div className={styles.terminalText}>
        {LOADING_TEXTS[textIndex]}<span className={styles.cursor}></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
