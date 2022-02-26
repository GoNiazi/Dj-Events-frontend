import React from "react";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>Copyright &copy; DJ Events 2022</p>
      <Link href="/about">
        <a className={styles.link}>
          <p>About this project</p>
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
