"use client";
import "./globals.css";
import React, { useState,createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default async function Login() {
  const router = useRouter();
  var iusername, ipassword;
  function check() {
    fetch(
      "http://localhost:3000/api/login?username=" + iusername + "&password=" + ipassword
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data is ",data["authorized"])
        if (data["authorized"] == true) {
          router.push("/revenue");
        } else {
          iusername = "";
          ipassword = "";
          console.log("Wrong Credentials");
        }
      })
      .catch((error) => {
        iusername = "";
       ipassword = "";
        console.log("Some Error happend");
      });
  }
  return (
    <div className="flex h-screen justify-between">
      <div className="w-full py-[3vw] px-[4vw] gap-[15vh] flex flex-col">
        <div className="flex justify-end">
          <button
            className="flex gap-3"
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: "10px",
              padding: "10px 15px",
            }}
          >
            Switch to Dark mode
            <FontAwesomeIcon icon={faMoon} className="h-[25px]" />
          </button>
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h1 className="mb-[3vh]">Login</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            className="bg-white p-[10px] rounded-[10px]"
            onChange={(e) => {
              iusername = e.target.value;
            }}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="bg-white p-[10px] rounded-[10px]"
            onChange={(e) => {
              ipassword = e.target.value;
            }}
          />
          <p>Forgot Password</p>
          <div className="flex justify-center">
            <button
              style={{
                backgroundColor: "#D7425A",
                borderRadius: "10px",
                padding: "10px 15px",
                color: "white",
              }}
              className="w-[100px]"
              onClick={check}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <img
        src="/morning-bus.svg"
        alt="Bus stop morning"
        className="h-screen w-[80vw] object-cover"
      />
    </div>
  );
}
