"use client";
import React from "react";
const style = {
  backgroundColor: "#E8E8E8",
  cursor: 'pointer'
};
const style2 = {
  backgroundColor: "#E8E8E8",
  border: "3px solid #888888",
  cursor: 'pointer'
};
function Employee({ employee, onClick, id, isSelected,dp }) {
  // const handleClick = () => {
  //   onClick(id, props.name, props.role, props.contact, props.bus);
  // };

  return (
    <>
      <div
        className="p-2 rounded-[10px] flex flex-row"
        style={isSelected ? style2 : style}
        // onClick={handleClick}
      >
        <img
          src={dp}
          alt="Not available"
          style={{ width: "3em", borderRadius:'100px'}}
        />
        <div className="flex flex-col ">
          <p className="flex">{employee["Name"]}</p>
          <p>{employee["Present Grade"]}</p>
        </div>
        <p>{employee["DOB"]}</p>
        <p>{employee["PEN"]}</p>
        <p>{employee["Unit"]}</p>
      </div>
    </>
  );
}

export default Employee;
