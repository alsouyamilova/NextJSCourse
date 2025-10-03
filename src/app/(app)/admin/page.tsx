"use client";
import { UserContext } from "@/app/providers/user-provider";
import { redirect } from "next/navigation";
import { useContext } from "react";

export const Admin = (props) => {
  const { user } = useContext(UserContext);
  if (!user?.isAdmin) {
    redirect("/403");
  }
  return <div>admin page</div>;
};
