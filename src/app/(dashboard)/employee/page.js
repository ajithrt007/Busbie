// "use client";
import React from "react";
import DropdownCustom from "@/component/DropdownCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCloudArrowDown,
  faArrowDownAZ,
  faArrowDown19,
} from "@fortawesome/free-solid-svg-icons";
// import EmployeeRows from "@/component/EmployeeRows";
import EmpDetails from "@/component/EmpDetails";
import { connectToDatabase } from "@/libs/MongoConnect";
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

  return (
    <div className="flex flex-col gap-3">
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
          <span className="font-bold">80,925</span>employees found
        </div>
        <div className="flex flex-row">
          <div className="items-center flex flex-row gap-2">
            <p className="">Name</p>
            <button>
              <FontAwesomeIcon
                icon={faArrowDownAZ}
                className="h-[16px] place-items-center color-black text-black"
              />
            </button>
          </div>
          <p>PEN</p>
          <div className="items-center flex flex-row gap-2">
            DOB
            <FontAwesomeIcon
              icon={faArrowDown19}
              className="h-[16px] place-items-center color-black text-black"
            />
          </div>
          <div className="items-center flex flex-row gap-2">
            <p className="">Unit</p>
            <button>
              <FontAwesomeIcon
                icon={faArrowDownAZ}
                className="h-[16px] place-items-center color-black text-black"
              />
            </button>
          </div>
        </div>
        {/* <EmployeeRows rowData={data}/>        */}
        <EmpDetails
        // selectedId={selectedId}
        // selectedName={selectedName}
        // selectedRole={selectedRole}
        // selectedContact={selectedContact}
        // selectedBus={selectedBus}
        />
      </div>
    </div>
  );
}