import { IRacket } from "@/types/racket";
import styles from "./styles.module.css";
import React from "react";
import { IUser } from "@/types/user";

const Racket = ({ racket, user }: { racket: IRacket; user: IUser }) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.imageColumn}>
          <div className={styles.imageCard}>
            <div className={styles.imageContainer}>
              <img
                src={racket.imageUrl}
                alt={racket.name}
                className={styles.image}
              />
            </div>
          </div>
        </div>
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.cardBody}>
              <div className={styles.badgeContainer}>
                <div className={styles.brandBadge}>{racket.brand.name}</div>
                {racket.top10 && (
                  <div className={styles.top10Badge}>Топ-10</div>
                )}
                {user && (
                  <button className={styles.heartButton}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                )}
              </div>

              <h2 className={styles.title}>{racket.name}</h2>

              <div className={styles.priceSection}>
                <h3 className={styles.price}>${racket.price}</h3>
                <small className={styles.priceLabel}>Цена</small>
              </div>

              <div className={styles.descriptionSection}>
                <h5>Описание</h5>
                <p className={styles.description}>{racket.description}</p>
              </div>

              <div className={styles.specsSection}>
                <div className={styles.specsRow}>
                  <div className={styles.specItem}>
                    <strong>Модель:</strong>
                    <br />
                    <span className={styles.specValue}>{racket.model}</span>
                  </div>
                  <div className={styles.specItem}>
                    <strong>Год выпуска:</strong>
                    <br />
                    <span className={styles.specValue}>{racket.year}</span>
                  </div>
                  <div className={styles.specItem}>
                    <strong>Тип:</strong>
                    <br />
                    <span className={styles.specValue}>{racket.type}</span>
                  </div>
                  <div className={styles.specItem}>
                    <strong>Бренд:</strong>
                    <br />
                    <span className={styles.specValue}>
                      {racket.brand.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Racket;
