"use client";

import Racket from "@/app/components/racket/page";
import { useContext } from "react";
import { UserContext } from "@/app/providers/user-provider";
import { IRacket } from "@/types/racket";

const RacketPageClient = ({ racket }: IRacket) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Racket racket={racket} user={user} />
    </div>
  );
};

export default RacketPageClient;
