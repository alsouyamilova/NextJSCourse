"use client";
import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Теннисные ракетки - Интернет-магазин</title>
        <meta name="description" content="теннисные ракетки" />
      </head>
      <body>
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

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>TENNIS STORE</h3>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};
export default RootLayout;
