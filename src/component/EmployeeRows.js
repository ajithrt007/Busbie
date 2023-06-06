import React, { useState } from "react";
import Image from "next/image";
import Employee from "./Employee";
export default function EmployeeRows({ rowData }) {
  console.log("Component is loaded");
  console.log(rowData);
  return (
    <>
      {rowData?.map((person) => {
        return (
          <Employee
            name={person["Name"]}
            position={person["Present Grade"]}
            dob={person["DOB"]}
            unit={person["Unit"]}
            dp="https://i.pravatar.cc/300"
            pen={person["PEN"]}
            key={person._id}
          />
        );
      })}
    </>
  );
}
