"use client";
import { useTransition } from "react";
import { BASE_API_URL } from "@/app/constants/api";

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE",
  });
  location.assign("/");
};

const Logout = (props) => {
  const [isPending, startTransition] = useTransition();
  return (
    <button disabled={isPending} onClick={() => startTransition(handleLogout)}>
      Logout
    </button>
  );
};

export default Logout;
