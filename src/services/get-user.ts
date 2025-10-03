import { Response } from "@/types/response";
import { IUser } from "@/types/user";
import { cookies } from "next/headers";

export const getUser = async (): Promise<Response<IUser>> => {
  const cookieStore = await cookies();

  const result = await fetch(`http://localhost:4000/api/auth/user`, {
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: IUser } = await result.json();

  return { isError: false, data: data.user };
};
