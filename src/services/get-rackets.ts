import { BASE_API_URL } from "@/app/constants/api";
import { IRacket } from "@/types/racket";
import { Response } from "@/types/response";
import { cookies } from "next/headers";

interface Params {
  page?: number;
  limit?: number;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
}: Params): Promise<Response<IRacket[]>> => {
  const cookieStore = await cookies();
  const result = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}`,
    {
      headers: {
        Cookie: cookieStore.toString(),
      },
      next: { tags: ["getRackets"] },
    }
  );

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }
  const data: IRacket[] = await result.json();

  return { isError: false, data };
};
