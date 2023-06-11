"use client";
import React, { useState } from "react";
const style = {
  backgroundColor: "#E8E8E8",
  cursor: "pointer",
};
const style2 = {
  backgroundColor: "#E8E8E8",
  border: "2px solid #888888",
  cursor: "pointer",
};
export default function Employee({ employee, selectedPerson }) {
  const [selected, setSelected] = useState(false);
  // var dp;
  // await fetch("https://randomuser.me/api/?gender=male&inc=picture")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("fetched dp");
  //     dp = data["results"][0]["picture"]["thumbnail"];
  //   });
  return (
    <div
      className="p-2 rounded-[10px] flex flex-row"
      style={selected ? style2 : style}
      onClick={() => {
        setSelected(true);
        selectedPerson(employee);
      }}
      key={employee._id}
    >
      <img
        src="https://i.pravatar.cc/300"
        // src={dp}
        alt="Not available"
        style={{ width: "50px", height: "50px", borderRadius: "100px" }}
      />
      <div className="flex" style={{ gap: "7%" }}>
        <div className="flex flex-col" style={{ marginLeft: "20px" }}>
          <p style={{ width: "200px", minWidth: "200px" }}>
            {employee["Name"]}
          </p>
          <p>{employee["Present Grade"]}</p>
        </div>
        <p style={{ width: "75px", minWidth: "75px" }}>{employee["DOB"]}</p>
        <p style={{ width: "75px", minWidth: "75px" }}>{employee["PEN"]}</p>
        <p style={{ width: "200px", minWidth: "200px" }}>{employee["Unit"]}</p>
        <div className="flex items-center h-full">
          <div
            style={{
              borderRadius: "100px",
              height: "8px",
              width: "8px",
              backgroundColor: "#84cc16 ",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
