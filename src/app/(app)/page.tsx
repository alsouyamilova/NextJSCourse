import { FC, Suspense } from "react";
import styles from "../styles.module.css";
import { getRackets } from "@/services/get-rackets";
import { getTop10Rackets } from "@/services/get-top-10";
import { notFound } from "next/navigation";
import MainRacketsCard from "../components/racketsCard/mainRacketsCard";
import Loading from "../loading";

const Page: FC = async () => {
  const racketsPromise = getRackets({ page: 1, limit: 10 });
  const top10Promise = getTop10Rackets();
  const [rackets, top10Res] = await Promise.all([racketsPromise, top10Promise]);

  if (!rackets.data && !top10Res.data) {
    return notFound();
  }

  if (rackets.data?.length === 0) {
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
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.sectionTitle}>Топ 10</div>
          <hr></hr>
          <div className={styles.grid}>
            {top10Res.data &&
              top10Res.data.map((racket) => (
                <MainRacketsCard key={racket.id} racket={racket} />
              ))}
          </div>
          <div className={styles.sectionTitle}>Каталог</div>
          <hr></hr>
          <div className={styles.grid}>
            {rackets.data &&
              rackets.data.map((racket) => (
                <MainRacketsCard key={racket.id} racket={racket} />
              ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
