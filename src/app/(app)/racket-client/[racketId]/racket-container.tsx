"use client";

import { BASE_API_URL } from "@/app/constants/api";
import { IRacket } from "@/types/racket";
import { Response } from "@/types/response";
import { notFound } from "next/navigation";
import { FC } from "react";
import useSWR from "swr";
import RacketPageClient from "./page-client";

const fetcher = async (path: string) => {
  const result = await fetch(`${BASE_API_URL}/${path}`, {
    credentials: "include",
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: IRacket } = await result.json();

  return { isError: false, data: data.product };
};

interface Props {
  productId: string;
}

export const ProductContainer: FC<Props> = ({ productId }) => {
  const { data, isLoading } = useSWR<Response<IRacket>>(
    `product/${productId}`,
    fetcher,
    { revalidateOnFocus: false, revalidateIfStale: false }
  );

  const product = data?.data;

  if (data?.isError) {
    return "some error";
  }

  if (isLoading) {
    return "isLoadingSWR...";
  }

  if (!product) {
    return notFound();
  }

  return <RacketPageClient racket={product} />;
};
