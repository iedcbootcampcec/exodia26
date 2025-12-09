import { useState } from "react";
import styles from "./Footer.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";
import Modal from "../Modal/Modal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeartBeating, setIsHeartBeating] = useState(false);

  const handleHeartClick = () => {
    if (isHeartBeating) return;
    setIsHeartBeating(true);
    setTimeout(() => setIsHeartBeating(false), 1000);
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h2 className={styles.logo}>Exodia</h2>
            <p className={styles.tagline}>
              Empowering innovation and creativity since inception.
            </p>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Point of Contact</h3>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.icon} />
              <span>+91-9526928521, +91-9037195527</span>
            </div>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.icon} />
              <span>+91-7902622108, +91-7902425838</span>
            </div>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <a
                href="mailto:exodiacec@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                exodiacec@gmail.com
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Connect with us</h3>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/exodia.cec"
                className={styles.socialIcon}
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://youtube.com/@EXODIACEC"
                className={styles.socialIcon}
              >
                <FaYoutube size={28} />
              </a>
              <a
                href="https://www.facebook.com/EXODIACEC"
                className={styles.socialIcon}
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className={styles.mapSection}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.179869160877!2d76.61490531046704!3d9.31732529071739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea027eb08f%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e0!3m2!1sen!2sin!4v1706448825074!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Exodia™. All Rights Reserved.
          </div>
          <div className={styles.bottomLinks}>
            <button
              className={styles.bottomLink}
              onClick={() => setIsModalOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                font: "inherit",
                padding: 0,
              }}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
        {/* <div className={`${styles.bottomBar} ${styles.createdByBar}`}>
          <div className={styles.createdBy} onClick={handleHeartClick}>
            Made With{" "}
            <FaHeart
              color="red"
              className={isHeartBeating ? styles.heartIconAnimation : ""}
            />{" "}
            by Team Exodia
          </div>
        </div> */}
      </div>

      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2
          style={{
            color: "var(--color-primary)",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-heading)",
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
            fontFamily: "var(--font-variable)",
          }}
        >
          <p>
            <strong>1. Registration Confirmation:</strong> Registration for the
            workshop and event is confirmed only upon receipt of full payment
            and completion of the registration form.
          </p>

          <p>
            <strong>2. Cancellation:</strong> No refunds will be provided for
            cancellations made at any time after registration. All cancellations
            must be made in writing.
          </p>

          <p>
            <strong>3. Event Content:</strong> The organizers reserve the right
            to modify the content, timing, or location of the workshop and
            event, or to cancel the event entirely, at their sole discretion. In
            the event of cancellation, registered participants will receive a
            full refund of the registration fee exclusive of the tax and
            internet handling fee of YepDesk.
          </p>

          <p>
            <strong>4. Liability:</strong> The organizers are not liable for any
            loss, damage, injury, or expense incurred by participants during the
            workshop and event, regardless of cause. Participants are
            responsible for their own safety and well-being.
          </p>

          <p>
            <strong>5. Photography and Recording:</strong> Photography, audio
            recording, and video recording may be conducted during the workshop
            and event. By attending, participants consent to the use of their
            likeness and voice in promotional materials related to the event.
          </p>

          <p>
            <strong>6. Code of Conduct:</strong> Participants are expected to
            conduct themselves in a professional and respectful manner at all
            times during the workshop and event. Harassment, discrimination, or
            disruptive behavior will not be tolerated and may result in removal
            from the event without a refund.
          </p>

          <p>
            <strong>7. Intellectual Property:</strong> All materials provided
            during the workshop and event, including presentations, handouts,
            and software, are the intellectual property of the organizers or
            their respective owners. Participants may not reproduce, distribute,
            or sell these materials without prior written consent.
          </p>

          <p>
            <strong>8. Personal Belongings:</strong> Participants are
            responsible for their personal belongings at all times during the
            workshop and event. The organizers are not liable for any loss or
            theft of personal property.
          </p>

          <p>
            <strong>9. Force Majeure:</strong> The organizers shall not be
            liable for any failure or delay in performing their obligations
            under these terms and conditions if such failure or delay is caused
            by circumstances beyond their reasonable control, including but not
            limited to natural disasters, acts of terrorism, or government
            regulations.
          </p>

          <p>
            <strong>10. College ID Requirement:</strong> Participants are
            required to bring their college ID for verification purposes during
            the event.
          </p>

          <p>
            <strong>11. Changes to Terms and Conditions:</strong> Organizers of
            Exodia reserve the right to modify these terms and conditions at any
            time.
          </p>

          <p
            style={{
              marginTop: "1rem",
              fontStyle: "italic",
              color: "var(--color-text-dim)",
            }}
          >
            By submitting the application form, the applicant acknowledges that
            they have read, understood, and agree to abide by these terms and
            conditions.
          </p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
