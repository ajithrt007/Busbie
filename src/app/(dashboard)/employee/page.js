"use client";
import React, { useState } from "react";
import DropdownCustom from "@/component/DropdownCustom";
import Loading from "@/component/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCloudArrowDown,
  faArrowDownAZ,
  faArrowDown19,
} from "@fortawesome/free-solid-svg-icons";
import EmployeeRows from "@/component/EmployeeRows";
import EmpDetails from "@/component/EmpDetails";
export default function AboutPage() {
  const inputbox = {
    border: "2px black",
    backgroundColor: "transparent",
  };
  const empNames = ["Everyone", "Conductor", "Driver", "Depot Manager"];
  const options = ["Both On Duty and Off Duty", "On Duty", "Off Duty"];

  const style = {
    display: "flex",
    gap: "5px",
    justifyContents: "center",
    alignItems: "center",
    bottom: "30px",
    right: "30px",
    background: "#D7425A",
    color: "white",
    padding: "10px 15px",
    borderRadius: "10px",
  };
  var data;
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(false);
  function selectedPerson(isSelected) {
    setPerson(isSelected);
  }
  if (loading) {
    fetch("http://localhost:3000/api/get_employee?skipVal=0")
      .then((response) => response.json())
      .then((data) => {
        if (data != true) {
          console.log("Employee load data fetched");
          setEmployees(data);
          setCount(data.length);
          setLoading(false);
        } else {
          console.log("Couldn't load data");
        }
      })
      .catch((error) => {
        console.log("Some Error happend in fetching data");
      });
  }
  return (
    <div className="flex flex-col gap-3 w-full">
      <h1 className="text-[#D7425A] font-bold text-3xl pb-5">Employees</h1>
      <div className="bg-white rounded-[10px] p-[20px] flex flex-col gap-5 ">
        <div className="flex flex-row gap-5 flex-wrap w-[75%] items-center">
          <input
            type="text"
            name="RouteSearch"
            placeholder="Search for from"
            id=""
            style={inputbox}
            className="bg-bg-color p-[10px] rounded-[10px]"
          />
          <DropdownCustom
            optionValues={empNames}
            defaultValue="Everyone"
            dropdownColor="#E8E8E8"
            textColor="black"
          />
          <DropdownCustom
            optionValues={options}
            defaultValue="Both On Duty and Off Duty"
            dropdownColor="#E8E8E8"
            textColor="black"
          />
          <button style={style} className="hover:bg-[#D7425A]/90 ">
            <p>Add Employee</p>
            <FontAwesomeIcon icon={faPlus} className="h-[25px]" />
          </button>
          <button
            style={{
              backgroundColor: "#E8E8E8",
              borderRadius: "10px",
              padding: "10px 15px",
            }}
          >
            <FontAwesomeIcon icon={faCloudArrowDown} />
          </button>
        </div>
        <div className="flex flex-row gap-3 w-[60%]">
          <span className="font-bold">{count}</span>employees found
        </div>
        <div className="px-2 rounded-[10px] flex flex-row">
          <img
            src="https://i.pravatar.cc/300"
            alt="Not available"
            style={{
              width: "50px",
              height: "0px",
              borderRadius: "100px",
              opacity: 0,
            }}
          />
          <div className="flex" style={{ gap: "7%" }}>
            <div className="flex flex-col" style={{ marginLeft: "20px" }}>
              <p style={{ width: "200px", minWidth: "200px" }}>Name</p>
            </div>
            <p style={{ width: "75px", minWidth: "75px" }}>DOB</p>
            <p style={{ width: "75px", minWidth: "75px" }}>PEN</p>
            <p style={{ width: "200px", minWidth: "200px" }}>Unit</p>
          </div>
        </div>
        <div className="flex justify-between w-full relative">
          <div className="flex flex-col gap-3 w-[70%]">
            {loading ? (
              <Loading />
            ) : (
              <EmployeeRows
                rowData={employees}
                selectedPerson={selectedPerson}
              />
            )}
          </div>
          <EmpDetails empdetails={person} />
        </div>
      </div>
    </div>
  );
}
