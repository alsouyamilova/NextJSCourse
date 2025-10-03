import { BASE_API_URL } from "@/app/constants/api";
import { IRacket } from "@/types/racket";
import { Response } from "@/types/response";

export const getTop10Rackets = async (): Promise<Response<IRacket[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`, {
    next: { tags: ["getTop10Rackets"] },
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
