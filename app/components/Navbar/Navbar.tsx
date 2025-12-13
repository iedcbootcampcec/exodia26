import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) closeMenu();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a className={styles.logo} onClick={() => handleSection("hero")}>
          <img
            src="/exodia_logo.svg"
            alt="Exodia"
            className={styles.logoImage}
          />
        </a>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <div className={`${styles.navOverlay} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navLinks}>
            <li style={{ "--i": 1 } as React.CSSProperties}>
              <a
                className={styles.navLink}
                onClick={() => handleSection("about")}
                data-text="About"
              >
                About
              </a>
            </li>
            <li style={{ "--i": 2 } as React.CSSProperties}>
              <a
                className={styles.navLink}
                onClick={() => handleSection("stack")}
                data-text="Stack"
              >
                Stack
              </a>
            </li>
            <li style={{ "--i": 3 } as React.CSSProperties}>
              <a
                className={styles.navLink}
                onClick={() => handleSection("gallery")}
                data-text="Gallery"
              >
                Gallery
              </a>
            </li>
            <li style={{ "--i": 4 } as React.CSSProperties}>
              <a
                className={styles.navLink}
                onClick={() => handleSection("faq")}
                data-text="FAQ"
              >
                FAQ
              </a>
            </li>
            <li style={{ "--i": 5 } as React.CSSProperties}>
              <a
                className={styles.navLink}
                onClick={() => handleSection("contact")}
                data-text="Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
