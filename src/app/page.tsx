import { FC } from "react";
import { rackets } from "../../public/mock";
import styles from "./styles.module.css";
export const generateStaticParams = () => {
  const filteredRackets = rackets.filter((racket) =>
    [1, 2, 3].includes(racket.id)
  );

  return filteredRackets.map((racket) => ({
    id: racket.id.toString(),
  }));
};
const Page: FC = () => {
  // Фильтруем ракетки, оставляем только с id 1, 2, 3
  const filteredRackets = rackets.filter(
    (racket) => racket.id === 1 || racket.id === 2 || racket.id === 3
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {filteredRackets.length > 0 && (
          <div className={styles.grid}>
            {filteredRackets.map((racket) => (
              <div key={racket.id} className={styles.cardWrapper}>
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
