"use client";

import { useEffect, useState } from "react";
import { IoTicketOutline } from "react-icons/io5";
import styles from "./ComingSoonBadge.module.css";
import Modal from "../Modal/Modal";

// Early Bird Sold Out badge component
// 7:00 PM 16th december 2025 Asia/Kolkata

// const checkIfIsTime = () => {
//   const eventDate = new Date("2025-12-16T19:00:00"); // 7:00 PM IST
//   const now = new Date();
//   return now >= eventDate;
// };

const URI = "https://makemypass.com/event/exodia26";

const ComingSoonBadge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isTheTime, setIsTheTime] = useState(checkIfIsTime());

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // if (!isTheTime) return;
    window.open(URI, "_blank");
    // setIsModalOpen(true);
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIsTheTime(() => {
  //       const res = checkIfIsTime();
  //       if (res) clearInterval(timer);
  //       return res;
  //     });
  //   }, 1000); // check every second

  //   return () => clearInterval(timer);
  // }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <span className={styles.text}>REGISTER NOW</span>
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
