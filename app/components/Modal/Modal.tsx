import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  const [isRendered, setIsRendered] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setIsRendered(true);
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Delay unmounting to allow animation to finish
      const timer = setTimeout(() => setIsRendered(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isVisible]);

  if (!isRendered) return null;

  return createPortal(
    <div 
      className={`${styles.overlay} ${isVisible ? styles.visible : ''}`} 
      onClick={onClose}
    >
      <div 
        className={`${styles.modal} ${isVisible ? styles.visible : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
