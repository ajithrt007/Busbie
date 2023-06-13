"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import DropdownCustom from "@/component/DropdownCustom";
import RouteInnerRow from "./RouteInnerRow";

export default function RouteRow({ sl, fromto, nob, stime, avrpro, avgexp }) {
  const rowStyle = {
    padding: "10px 15px",
  };
  const busOption = [
    "All Types",
    "Low Floor",
    "Fast",
    "Limitted Stop",
    "City Fast",
    "Minnal",
  ];
  const [dispVal, setDispVal] = useState("none");
  const [expanded, setExpanded] = useState(false);
  const innerRowContainerStyle = {
    display: dispVal,
  };
  const inputbox = {
    border: "2px black",
    backgroundColor: "white !important",
  };
  const rotated = {
    transform: "rotate(180deg)",
  };
  return (
    <div className="bg-secondary rounded-[10px]" style={rowStyle}>
      <div className="flex items-center justify-between">
        <div className="flex w-full gap-4">
          <p style={{ width: "5%" }}>{sl}</p>
          <p style={{ width: "25%" }}>{fromto}</p>
          <p style={{ width: "10%" }}>{nob}</p>
          <p style={{ width: "10%" }}>{stime}</p>
          <p style={{ width: "18%" }}>{avrpro}</p>
          <p style={{ width: "20%" }}>{avgexp}</p>
        </div>
        <div className="flex gap-5 items-center">
          <div
            className="flex gap-2 items-center bg-bg-color opacity-0"
            style={{ borderRadius: "100px", padding: "5px 8px" }}
          >
            View
            <FontAwesomeIcon icon={faLocationDot} className="h-[15px]" />
          </div>
          <button
            className="flex gap-2 items-center bg-bg-color"
            style={{ borderRadius: "100px", padding: "5px 8px" }}
            onClick={() => {
              if (expanded === true) {
                setDispVal("none");
                setExpanded(false);
              } else {
                setDispVal("flex");
                setExpanded(true);
              }
            }}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className="h-[15px]"
              style={expanded ? rotated : ""}
            />
          </button>
        </div>
      </div>
      <div style={innerRowContainerStyle} className="flex-col gap-3">
        <h1 className="text-[#D7425A] font-bold text-xl">Buses</h1>
        <div className="flex gap-2 py-9">
          <input
            type="text"
            name="RouteSearch"
            placeholder="Search for from"
            id=""
            // style={inputbox}
            className="bg-white p-[10px] rounded-[10px]"
          />
          <DropdownCustom
            optionValues={busOption}
            defaultValue="All Types"
            dropdownColor="white"
            textColor="black"
          />
        </div>
        <div className="flex flex-row gap-3 w-[60%]">
          <span className="font-bold">16</span>buses found in this route
        </div>
        <div className="flex w-full gap-4">
          <p style={{ width: "5%" }}>Sl No</p>
          <p style={{ width: "25%" }}>Bus No</p>
          <p style={{ width: "10%" }}>Current Location</p>
          <p style={{ width: "10%" }}>Schedule Time</p>
          <p style={{ width: "18%" }}>Avg Profit</p>
          <p style={{ width: "20%" }}>Avg Expense</p>
        </div>
        <div className="flex flex-col gap-2">
          <RouteInnerRow
            isl="1"
            ifromto="Trivandrum-Parassala"
            inob="52"
            istime="5am-2am"
            iavrpro="15,00,000"
            iavgexp="40,000"
          />
          <RouteInnerRow
            isl="1"
            ifromto="Trivandrum-Parassala"
            inob="52"
            istime="5am-2am"
            iavrpro="15,00,000"
            iavgexp="40,000"
          />
          <RouteInnerRow
            isl="1"
            ifromto="Trivandrum-Parassala"
            inob="52"
            istime="5am-2am"
            iavrpro="15,00,000"
            iavgexp="40,000"
          />
          <RouteInnerRow
            isl="1"
            ifromto="Trivandrum-Parassala"
            inob="52"
            istime="5am-2am"
            iavrpro="15,00,000"
            iavgexp="40,000"
          />
          <RouteInnerRow
            isl="1"
            ifromto="Trivandrum-Parassala"
            inob="52"
            istime="5am-2am"
            iavrpro="15,00,000"
            iavgexp="40,000"
          />
          <RouteInnerRow
            isl="1"
            ifromto="Trivandrum-Parassala"
            inob="52"
            istime="5am-2am"
            iavrpro="15,00,000"
            iavgexp="40,000"
          />
        </div>
      </div>
    </div>
  );
}
