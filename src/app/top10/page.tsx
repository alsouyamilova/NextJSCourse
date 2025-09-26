import RacketCard from "../rackets/racketCard";
import styles from "./page.module.css";
import { getTop10Rackets } from "@/services/get-top-10";

export default async function Top10Page() {
  const { isError, data: rackets } = await getTop10Rackets();

  if (isError) {
    return "error";
  }
  if (!rackets) {
    return <div className={styles.noResults}>no result found</div>;
  }

  // Получаем уникальные бренды
  const brands = Array.from(
    new Set(rackets.map((racket) => racket.brand.name))
  );

  return (
    <div className={styles.container}>
      {rackets.length === 0 ? null : (
        <div className={styles.racketsGrid}>
          {rackets.map((racket) => (
            <div key={racket.id} className={styles.racketItem}>
              <RacketCard racket={racket} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
