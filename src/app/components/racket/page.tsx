import { IRacket } from "@/types/racket";
import styles from "./styles.module.css";
import React from "react";
import { IUser } from "@/types/user";
import FavouriteButton from "../favouriteButton/FavouriteButton";

const Racket = ({ racket, user }: { racket: IRacket; user: IUser }) => {
  const {
    imageUrl,
    name,
    id,
    top10,
    brand,
    price,
    description,
    model,
    year,
    type,
    userData,
  } = racket;
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.imageColumn}>
          <div className={styles.imageCard}>
            <div className={styles.imageContainer}>
              <img src={imageUrl} alt={name} className={styles.image} />
            </div>
          </div>
        </div>
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.cardBody}>
              <div className={styles.badgeContainer}>
                <div className={styles.brandBadge}>{brand.name}</div>
                {top10 && <div className={styles.top10Badge}>Топ-10</div>}
                {user && (
                  <FavouriteButton
                    productId={id}
                    isFavorite={Boolean(userData?.isFavorite)}
                  />
                )}
              </div>

              <h2 className={styles.title}>{name}</h2>

              <div className={styles.priceSection}>
                <h3 className={styles.price}>${price}</h3>
                <small className={styles.priceLabel}>Цена</small>
              </div>

              <div className={styles.descriptionSection}>
                <h5>Описание</h5>
                <p className={styles.description}>{description}</p>
              </div>

              <div className={styles.specsSection}>
                <div className={styles.specsRow}>
                  <div className={styles.specItem}>
                    <strong>Модель:</strong>
                    <br />
                    <span className={styles.specValue}>{model}</span>
                  </div>
                  <div className={styles.specItem}>
                    <strong>Год выпуска:</strong>
                    <br />
                    <span className={styles.specValue}>{year}</span>
                  </div>
                  <div className={styles.specItem}>
                    <strong>Тип:</strong>
                    <br />
                    <span className={styles.specValue}>{type}</span>
                  </div>
                  <div className={styles.specItem}>
                    <strong>Бренд:</strong>
                    <br />
                    <span className={styles.specValue}>{brand.name}</span>
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
