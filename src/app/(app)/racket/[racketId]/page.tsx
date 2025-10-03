import Racket from "@/app/components/racket/page";
import styles from "./styles.module.css";
import { getRacketById } from "@/services/get-racket-by-id";
import { notFound } from "next/navigation";
import { getMetaRacketById } from "@/services/get-meta-racket-by-id";
import { use, useContext } from "react";
import { UserContext, UserProvider } from "@/app/providers/user-provider";
import RacketPageClient from "./page-client";

type Props = {
  params: Promise<{ racketId: string }>;
};
export const generateMetadata = async ({ params }: Props) => {
  const { racketId } = await params;
  const { data } = await getMetaRacketById({ id: racketId });
  if (!data) {
    return {
      title: "Racket page",
    };
  } else {
    return {
      title: `Racket ${data.name}`,
      description: data?.description,
    };
  }
};
const RacketPage = async ({ params }: Props) => {
  const { racketId } = await params;

  if (typeof racketId !== "string") {
    return null;
  }

  const { data: metaData } = await getMetaRacketById({ id: racketId });
  if (!metaData) {
    return notFound();
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
      <RacketPageClient racket={data} />;
    </div>
  );
};

export default RacketPage;
