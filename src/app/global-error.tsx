"use client";
import styles from "./styles.module.css";
const GlobalError = () => {
  return (
    <html lang="ru">
      <body>
        <div className={styles.notFound}>
          <div>Ошибка загрузки сайта</div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
