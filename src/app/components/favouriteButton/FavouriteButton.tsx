import React, { useCallback } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { BASE_API_URL } from "@/app/constants/api";
import { useSetIsFavorite } from "@/app/providers/favorite/hooks";

interface Props {
  isFavorite: boolean;
  productId: number;
}

const handleFavorite = async ({ isFavorite, productId }: Props) => {
  const url = `${BASE_API_URL}/product/${productId}/favorite`;

  return isFavorite
    ? fetch(url, {
        credentials: "include",
        method: "DELETE",
      })
    : fetch(url, {
        credentials: "include",
        method: "POST",
      });
};

const FavouriteButton = ({ isFavorite, productId }: Props) => {
  const setFavorite = useSetIsFavorite();

  const handleClick = useCallback(
    async ({ isFavorite, productId }: Props) => {
      setFavorite({ id: productId, isFavorite: !isFavorite });

      await handleFavorite({ isFavorite: isFavorite, productId });
    },
    [setFavorite]
  );

  return (
    <button
      className={classNames(styles.heartButton, {
        [styles.isFavorite]: isFavorite,
      })}
      onClick={() => handleClick({ isFavorite, productId })}
    >
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
  );
};

export default FavouriteButton;
