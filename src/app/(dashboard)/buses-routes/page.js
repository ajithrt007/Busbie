import React from "react";
import Add from "@/component/Add";
import DropdownCustom from "@/component/DropdownCustom";
import RouteRow from "@/component/RouteRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function BusRoute() {
  const inputbox = {
    border: "2px black",
    backgroundColor: "transparent",
  };
  const routeOption = [
    "All Districts",
    "Trivandrum",
    "Kollam",
    "Alappuzha",
    "Ernakulam",
    "Kozhikode",
    "Kasarkode",
    "Thrissur",
    "Malappuram",
    "Kottayam",
    "Wayanad",
    "Pathanamthitta",
    "Kannur",
  ];
  const rowStyle = {
    padding: "0px 15px",
  };
  return (
    <>
      <Add buttonName="Add Route" />
      <h1 className=" text-[#D7425A] font-bold text-3xl">Buses and Routes</h1>
      <div className="bg-white rounded-[10px] p-[20px] flex flex-col gap-5">
        <h1>Routes</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-5 items-center">
            <input
              type="text"
              name="RouteSearch"
              placeholder="Search for from"
              id=""
              style={inputbox}
              className="bg-bg-color p-[10px] rounded-[10px]"
            />
            <input
              type="text"
              name="RouteSearch"
              placeholder="Search for to"
              id=""
              style={inputbox}
              className="bg-bg-color p-[10px] rounded-[10px]"
            />
            <DropdownCustom
              optionValues={routeOption}
              defaultValue="All Districts"
              dropdownColor="#E8E8E8"
              textColor="black"
            />
            <button
              style={{
                backgroundColor: "#E8E8E8",
                borderRadius: "10px",
                padding: "10px 15px",
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-[15px]" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <p>8925 routes found</p>
            <div
              className="flex rounded-[10px] items-center justify-between"
              style={rowStyle}
            >
              <div className="flex w-full gap-4">
                <p style={{ width: "5%" }}>Sl No</p>
                <p style={{ width: "25%" }}>
                  From {"<"}-{">"} To
                </p>
                <p style={{ width: "10%" }}>No. of Buses</p>
                <p style={{ width: "10%" }}>Service Time</p>
                <p style={{ width: "18%" }}>Average Profit(in INR)</p>
                <p style={{ width: "20%" }}>Average Expense(in INR)</p>
              </div>
              <div className="flex gap-5 items-center invisible">
                <div
                  className="flex gap-2 items-center bg-bg-color"
                  style={{ borderRadius: "100px", padding: "5px 8px" }}
                >
                  View
                  <FontAwesomeIcon icon={faLocationDot} className="h-[15px]" />
                </div>
                <div
                  className="flex gap-2 items-center bg-bg-color"
                  style={{ borderRadius: "100px", padding: "5px 8px" }}
                >
                  <FontAwesomeIcon icon={faChevronDown} className="h-[15px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <RouteRow
                sl="1"
                fromto="Thiruvananthapuram-Thiruvananthapuram"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
              <RouteRow
                sl="1"
                fromto="Trivandrum-Parassala"
                nob="52"
                stime="5am-2am"
                avrpro="15,00,000"
                avgexp="40,000"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
