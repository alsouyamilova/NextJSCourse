import RacketCard from "./racketCard";
import styles from "./page.module.css";
import { getRackets } from "@/services/get-rackets";

export default async function RacketsPage() {
  const { isError, data: rackets } = await getRackets({ page: 1, limit: 20 });

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
      <div className={styles.sidebar}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h5>Фильтры</h5>
          </div>
          <div className={styles.cardBody}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Бренд</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="brand"
                      value="all"
                      className={styles.radioInput}
                    />
                    <span className={styles.radioCustom}></span>
                    Все бренды
                  </label>
                  {brands.map((brand) => (
                    <label key={brand} className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="brand"
                        value={brand}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioCustom}></span>
                      {brand}
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2>Теннисные ракетки</h2>
          <span className={styles.badge}>
            Найдено: {rackets.length} ракеток
          </span>
        </div>

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
    </div>
  );
}
