"use client";
import React, { useContext } from "react";
import styles from "./cardstyles.module.css";
import Link from "next/link";
import FavouriteButton from "@/app/components/favouriteButton/FavouriteButton";
import { UserContext } from "@/app/providers/user-provider";
import { IRacket } from "@/types/racket";
import {
  useHydrateFavorite,
  useIsFavoriteById,
} from "@/app/providers/favorite/hooks";

const RacketCard = ({ racket }: { racket: IRacket }) => {
  const { user } = useContext(UserContext);

  useHydrateFavorite({
    racketId: racket.id,
    isFavorite: Boolean(racket.userData?.isFavorite),
  });
  const isFavoriteGlobal = useIsFavoriteById({
    id: racket.id,
    isFavoriteInitial: Boolean(racket.userData?.isFavorite),
  });

  return (
    <div className={styles.card}>
      {user && (
        <FavouriteButton productId={racket.id} isFavorite={isFavoriteGlobal} />
      )}
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
