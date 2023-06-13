"use client";
import React from "react";
import {
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <button
      className="p-[10px] bg-secondary rounded-lg flex gap-2 items-center"
      onClick={() => {
        router.push("/");
      }}
    >
      Logout
      {/* <FontAwesomeIcon icon={faUser} className="h-[15px]" /> */}
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </button>
  );
}
