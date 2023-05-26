"use client";
import React, { useState } from "react";

export default function Time() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [d,setD] = useState(new Date());
  function timeDate() {
    setInterval(()=>{
        setD(new Date())
    },60000);
  }
  timeDate();
  return (
    <div>
      {d.getHours()}:{d.getMinutes()}, {days[d.getDay()]}, {d.getDate()} {months[d.getMonth()]} {d.getFullYear()}
    </div>
  );
}
