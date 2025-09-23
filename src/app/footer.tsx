import React, { FC } from "react";
import styles from "./styles.module.css";
const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>TENNIS STORE</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
