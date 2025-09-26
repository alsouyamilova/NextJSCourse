import React from "react";
import styles from "./styles.module.css";
import { IRacket } from "@/types/racket";

const MainRacketsCard = ({ racket }: { racket: IRacket }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={racket.imageUrl}
            alt={racket.name}
            className={styles.image}
          />
        </div>
        <div className={styles.cardBody}>
          <h3 className={styles.title}>{racket.name}</h3>
          <span className={styles.badge}>{racket.brand.name}</span>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${racket.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainRacketsCard;
