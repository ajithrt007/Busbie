"use client";
import React from "react";
const style = {
  backgroundColor: "#E8E8E8",
  cursor: "pointer",
};
const style2 = {
  backgroundColor: "#E8E8E8",
  border: "3px solid #888888",
  cursor: "pointer",
};
export default function Employee({ name, position, dob, dp, unit, pen, id }) {
  var isSelected;
  const handleClick = () => {
    isSelected = true;
    // onClick(id, props.name, props.role, props.contact, props.bus);
  };

  return (
    <div
      className="p-2 rounded-[10px] flex flex-row"
      style={isSelected ? style2 : style}
      onClick={handleClick}
      key={id}
    >
      <img
        src={dp}
        alt="Not available"
        style={{ width: "50px", height: "50px", borderRadius: "100px" }}
      />
      <div className="flex flex-col" style={{ marginLeft: "20px" }}>
        <p style={{ width: "200px" }}>{name}</p>
        <p>{position}</p>
      </div>
      <p style={{ width: "75px" }}>{dob}</p>
      <p style={{ width: "75px" }}>{pen}</p>
      <p style={{ width: "200px" }}>{unit}</p>
    </div>
  );
}
