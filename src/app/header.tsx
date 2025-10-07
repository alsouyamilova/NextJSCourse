"use client";
import React, { FC, useContext } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import HeaderLink from "./components/headerLink/link";
import { UserContext } from "./providers/user-provider";
import { useTransition } from "react";
import { BASE_API_URL } from "@/app/constants/api";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });
  location.assign("/");
};
const Header: FC = () => {
  const { user } = useContext(UserContext);
  const [isPending, startTransition] = useTransition();
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
          <div className={styles.user}>{user?.login}</div>
          {user ? (
            <button
              disabled={isPending}
              onClick={() => startTransition(handleLogout)}
            >
              Logout
            </button>
          ) : (
            <div className={styles.authButtons}>
              <Link href="/login">Login</Link>
              <Link href="/sign-up">Sign up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
