import { FC } from "react";
import styles from "./styles.module.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import type { Metadata } from "next";
import Header from "./header";

export const metadata: Metadata = {
  title: "Теннисные ракетки - Интернет-магазин",
  description: "теннисные ракетки",
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
