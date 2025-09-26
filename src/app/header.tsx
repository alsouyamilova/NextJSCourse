"use client";
import React, { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import HeaderLink from "./components/headerLink/link";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          TENNIS STORE
        </Link>
        <nav className={styles.nav}>
          <HeaderLink pathName={"/"} label={"Главная"} />
          <HeaderLink pathName={"/rackets"} label={"Ракетки"} />
          <HeaderLink pathName={"/top10"} label={"Топ-10"} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
