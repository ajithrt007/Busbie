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
export default function Employee({
  name,
  position,
  dob,
  isSelected,
  dp,
  unit,
  pen,
  id,
}) {
  const handleClick = () => {
    onClick(id, props.name, props.role, props.contact, props.bus);
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
        style={{ width: "3em", borderRadius: "100px" }}
      />
      <div className="flex flex-col ">
        <p className="flex">{name}</p>
        <p>{position}</p>
      </div>
      <p>{dob}</p>
      <p>{pen}</p>
      <p>{unit}</p>
    </div>
  );
}
