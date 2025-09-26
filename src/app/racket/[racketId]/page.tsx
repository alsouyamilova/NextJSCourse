import Racket from "@/app/components/racket/page";
import styles from "./styles.module.css";
import { getRacketById } from "@/services/get-racket-by-id";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  params: Promise<{ racketId: string }>;
};

const RacketPage = async ({ params }: Props) => {
  const { racketId } = await params;

  if (typeof racketId !== "string") {
    return null;
  }
  const { isError, data } = await getRacketById({ id: racketId });

  if (isError) {
    return (
      <div className={styles.notFound}>
        <div>Ошибка</div>
      </div>
    );
  }

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Racket racket={data} />;
      </Suspense>
    </div>
  );
};

export default RacketPage;
