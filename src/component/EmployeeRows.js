import React, { useState } from "react";
import Employee from "./Employee";
export default function EmployeeRows({ rowData, selectedPerson }) {
  return (
    <>
      {rowData?.map((person) => {
        return (
          <Employee
            employee={person}
            key={person._id}
            selectedPerson={selectedPerson}
          />
        );
      })}
    </>
  );
}
