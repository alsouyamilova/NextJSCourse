import { FC } from "react";
import styles from "./styles.module.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import type { Metadata } from "next";
import Header from "./header";
import NextTopLoader from "nextjs-toploader";
import { UserContext, UserProvider } from "./providers/user-provider";
import { getUser } from "@/services/get-user";
export const metadata: Metadata = {
  title: "Tennis rackets shop",
  description: "web app based on Next.js",
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = async ({ children }) => {
  const { data } = await getUser();

  return (
    <html lang="ru">
      <body>
        <UserProvider user={data}>
          <NextTopLoader showSpinner={false} />
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
};
export default RootLayout;
