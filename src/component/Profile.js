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
      className="p-[10px] flex gap-2 items-center"
      style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
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
