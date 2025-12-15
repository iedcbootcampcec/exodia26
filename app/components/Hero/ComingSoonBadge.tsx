"use client";

import { useState } from "react";
import { IoTicketOutline, IoSparkles } from "react-icons/io5";
import styles from "./ComingSoonBadge.module.css";
import Modal from "../Modal/Modal";

// Early Bird Sold Out badge component

const ComingSoonBadge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <span className={styles.text}>EARLY BIRD SOLD OUT</span>
      </div>

      <Modal isVisible={isModalOpen} onClose={handleCloseModal}>
        <div className={styles.modalBody}>
          <div className={styles.modalIconWrapper}>
            <IoTicketOutline />
          </div>
          <div className={styles.modalTextContent}>
            <h3 className={styles.modalTitle}>Early Bird Sold Out</h3>
            <div className={styles.modalOrganizers}>
              IEDC BOOTCAMP CEC | FOCES CEC | µLearn CHN
            </div>
            <ul className={styles.modalList}>
              <li>
                Early Bird Registrations for <strong>EXODIA 3.0</strong> are now
                officially closed!
              </li>
              <li>
                Thank you for the overwhelming response! Early Bird tickets were
                snapped up at lightning speed.
              </li>
              <li>
                The excitement and anticipation surrounding EXODIA 3.0 is truly
                incredible.
              </li>
            </ul>
            <div className={styles.modalHighlight}>
              More registration slots will be opening soon
            </div>
            <ul className={styles.modalList}>
              <li>Stay tuned as we gear up for an experience like no other.</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ComingSoonBadge;
