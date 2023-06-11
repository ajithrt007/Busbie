"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import ErrorMsg from "@/component/ErrorMsg";

export default function Login() {
  const router = useRouter();
  var inputUsername, inputPassword;
  const [error, setError] = useState({ status: false, msg: "" });
  // console.log(error)
 const [errorStatus,serErrorStatus] = useState(false)
  async function check() {
    await fetch(
      "http://localhost:3000/api/login?username=" +
        inputUsername +
        "&password=" +
        inputPassword
    )
      .then((response) => response.json())
      .then((data) => {

        if (data.authorized == true) {
          router.push("/revenue");
        } else {
          setError({ status: true, msg: "Wrong Credentials" });
          serErrorStatus(true)
          console.log("Wrong Credentials");
        }
      })
      .catch((error) => {
        setError({ status: true, msg: "400 Server Error" });
        serErrorStatus(true)
        console.log("Some Error happend");
      });
  }
  useEffect(()=>{
    setTimeout(()=>{
      serErrorStatus(false)
    },4000)
  },[error])
  return (
    <div className="flex h-screen justify-between">
      <div className="w-full py-[3vw] px-[4vw] gap-[15vh] flex flex-col">
        <div className="flex justify-end opacity-0">
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
          <h1 className="mb-[3vh] text-[#D7425A] font-bold text-3xl">Login</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            className="bg-white p-[10px] rounded-[10px]"
            onChange={(e) => {
              inputUsername = e.target.value;
            }}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="bg-white p-[10px] rounded-[10px]"
            onChange={(e) => {
              inputPassword = e.target.value;
            }}
          />
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
      {errorStatus && <ErrorMsg msg={error.msg}/>}
    </div>
  );
}
