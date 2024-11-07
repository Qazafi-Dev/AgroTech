import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contactus" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contactus" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
