"use server";

import { BASE_API_URL } from "../constants/api";
import { cookies } from "next/headers";
import { parseSetCookie } from "./parse-set-cookie";

export const signupAction = async (state, formData: FormData) => {
  const login = formData.get("login");
  const password = formData.get("password");
  const result = await fetch(`${BASE_API_URL}/auth/signup/`, {
    credentials: "include",
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });
  if (result.status !== 200) {
    return { error: "Invalid data" };
  }
  const cookiesStore = await cookies();
  const setCookieHeader = result.headers.getSetCookie();
  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }
  return { ...state, error: "", redirectTo: "/" };
};
