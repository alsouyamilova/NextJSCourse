"use client";
import React, { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: FC = () => {
  const pathName = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          TENNIS STORE
        </Link>
        <nav className={styles.nav}>
          <Link
            prefetch={false}
            href="/"
            className={classNames(styles.navLink, {
              [styles.selected]: pathName === "/",
            })}
          >
            Главная
          </Link>
          <Link
            prefetch={false}
            href="/rackets"
            className={classNames(styles.navLink, {
              [styles.selected]: pathName === "/rackets",
            })}
          >
            Ракетки
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
