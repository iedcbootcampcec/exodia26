"use client";
import { useState } from "react";
import styles from "./Footer.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Modal from "../Modal/Modal";

const FooterDecoration = () => (
  <svg
    className={styles.footerDecoration}
    width="100%"
    height="50"
    viewBox="0 0 1440 50"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 1H500L530 30H910L940 1H1440"
      stroke="url(#footer-gradient)"
      strokeWidth="2"
      fill="none"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d="M530 35H910"
      stroke="url(#footer-gradient)"
      strokeWidth="2"
      strokeDasharray="10 10"
      vectorEffect="non-scaling-stroke"
      opacity="0.5"
    />
    <defs>
      <linearGradient id="footer-gradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="rgba(255, 138, 0, 0)" />
        <stop offset="30%" stopColor="#ff8a00" />
        <stop offset="70%" stopColor="#ff4d00" />
        <stop offset="100%" stopColor="rgba(255, 77, 0, 0)" />
      </linearGradient>
    </defs>
  </svg>
);

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.footer} id="contact">
      <FooterDecoration />
      <div className={styles.glowSpot}></div>

      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h2 className={styles.logo}>Exodia</h2>
            <p className={styles.tagline}>
              Empowering innovation and creativity. <br />
              Join the future of technology.
            </p>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/exodia.cec"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@EXODIACEC"
                className={styles.socialIcon}
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/EXODIACEC"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>CONTACT US</h3>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <div className={styles.contactDetails}>
                  <span>+91-9526928521</span>
                  <span>+91-9037195527</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <div className={styles.contactDetails}>
                  <span>+91-7902622108</span>
                  <span>+91-7902425838</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <a
                  href="mailto:exodiacec@gmail.com"
                  className={styles.emailLink}
                >
                  exodiacec@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className={styles.mapSection}>
            <h3 className={styles.sectionTitle}>LOCATION</h3>
            <div className={styles.mapFrame}>
              <div className={styles.mapOverlay}></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.179869160877!2d76.61490531046704!3d9.31732529071739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea027eb08f%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e0!3m2!1sen!2sin!4v1706448825074!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.iframe}
              ></iframe>
              <div className={styles.cornerMarks}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} EXODIA™. All Rights Reserved.
          </div>
          <div className={styles.bottomLinks}>
            <button
              className={styles.bottomLink}
              onClick={() => setIsModalOpen(true)}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ padding: "2rem" }}>
          <h2
            style={{
              color: "#ff8a00",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-body)",
              textAlign: "center",
            }}
          >
            Terms and Conditions
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "var(--font-variable)",
            }}
          >
            <p>
              <strong>1. Registration Confirmation:</strong> Registration for
              the workshop and event is confirmed only upon receipt of full
              payment and completion of the registration form.
            </p>
            <p>
              <strong>2. Cancellation:</strong> No refunds will be provided for
              cancellations made at any time after registration. All
              cancellations must be made in writing.
            </p>
            <p>
              <strong>3. Event Content:</strong> The organizers reserve the
              right to modify the content, timing, or location of the workshop
              and event.
            </p>
            <p>
              <strong>4. Liability:</strong> The organizers are not liable for
              any loss, damage, injury, or expense incurred by participants.
            </p>
            <p>
              <strong>5. Photography:</strong> Photography and recording may be
              conducted during the event.
            </p>
            <p>
              <strong>6. Code of Conduct:</strong> Participants are expected to
              conduct themselves professionally.
            </p>
            <p>
              <strong>7. Changes:</strong> Organizers reserve the right to
              modify terms at any time.
            </p>

            <p style={{ marginTop: "1rem", fontStyle: "italic", opacity: 0.7 }}>
              By submitting the application form, the applicant acknowledges
              that they have read, understood, and agree to abide by these terms
              and conditions.
            </p>
          </div>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
