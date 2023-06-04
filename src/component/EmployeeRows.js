'use client'
import React, { useState } from "react";
import Employee from "./Employee";
export default function EmployeeRows({rowData}){
    const [loading, setLoading] = useState(true);
    function changeLoadingState(load){
        setLoading(load)
    }
    return(
        <div className="flex flex-col gap-3 w-[65%]">
          {
            loading? <p>loading</p> : 
                rowData?.map((person) => {
                    <Employee
                      employee={person}
                      dp="https://i.pravatar.cc/300"
                      id={person.id}
                    />;
                  })
          }
        </div>
    )
}