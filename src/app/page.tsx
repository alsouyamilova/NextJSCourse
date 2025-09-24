import { FC } from "react";
import { rackets } from "../../public/mock";
import styles from "./styles.module.css";
import MainRacketsCard from "./mainRacketsCard";
export const generateStaticParams = () => {
  return rackets
    .filter((racket) => [1, 2, 3].includes(racket.id))
    .map((racket) => ({
      id: racket.id.toString(),
    }));
};
const Page: FC = () => {
  // Фильтруем ракетки, оставляем только с id 1, 2, 3
  const filteredRackets = rackets.filter((racket) =>
    [1, 2, 3].includes(racket.id)
  );
  if (filteredRackets.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.grid}>
            <div>Товаров не найдено</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.grid}>
          {filteredRackets.map((racket) => (
            <MainRacketsCard key={racket.id} racket={racket} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
