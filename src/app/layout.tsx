import { FC } from "react";
import styles from "./styles.module.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import type { Metadata } from "next";
import Header from "./header";
import NextTopLoader from "nextjs-toploader";
export const metadata: Metadata = {
  title: "Tennis rackets shop",
  description: "web app based on Next.js",
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <NextTopLoader showSpinner={false} />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
