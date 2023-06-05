import React, { useState } from "react";
import Employee from "./Employee";
export default function EmployeeRows({rowData,loadingStatus}){
  console.log(rowData)
  // var data = rowData["employees"]
  // console.log(data)
    return(
        <div className="flex flex-col gap-3 w-[65%]">
          {
            loadingStatus? <p>loading</p> : 
                rowData?.map((person) => {
                    <Employee
                      name={person["Name"]}
                      position = {person["Present Grade"]}
                      dob = {person["DOB"]}
                      unit = {person["Unit"]}
                      dp="https://i.pravatar.cc/300"
                      pen={person["PEN"]}
                      id={person.id}
                    />;
                  })
          }
        </div>
    )
}