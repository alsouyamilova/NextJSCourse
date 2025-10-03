import React from "react";
import styles from "./cardstyles.module.css";
import Link from "next/link";

type Racket = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  brand: {
    id: string;
    name: string;
  };
};

const RacketCard = ({ racket }: { racket: Racket }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={racket.imageUrl} alt={racket.name} className={styles.image} />
      </div>
      <div className={styles.cardBody}>
        <Link href={`/racket/${racket.id}`}>
          <h3 className={styles.title}>{racket.name}</h3>
        </Link>

        <span className={styles.badge}>{racket.brand.name}</span>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${racket.price}</span>
        </div>
      </div>
    </div>
  );
};

export default RacketCard;
