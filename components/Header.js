import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>DJ EVENTS</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
