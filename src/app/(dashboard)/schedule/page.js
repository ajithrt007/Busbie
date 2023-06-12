"use client";
import React, { useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import DropdownCustom from "@/component/DropdownCustom";
import {
  // LineChart,
  // AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts";

export default function Revenue() {
  const organizeBy = ["Day", "Month", "Year"];
  const dayOption = ["Today", "Yesterday", "Custom"];
  const monthOption = ["This Month", "Previous Month", "Custom"];
  const yearOption = ["This Year", "Previous Year", "Custom"];
  const domain = [
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
  const data = [
    {
      name: "01:00AM",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "02:00AM",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "03:00AM",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "04:00AM",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "05:00AM",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "06:00AM",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "07:00AM",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "08:00AM",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "09:00AM",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "10:00AM",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "11:00AM",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "12:00AM",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "01:00PM",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "02:00PM",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "03:00PM",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "04:00PM",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "05:00PM",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "06:00PM",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "07:00PM",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "08:00PM",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "09:00PM",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "10:00PM",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "11:00PM",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "12:00PM",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  const inputbox = {
    border: "2px black",
    backgroundColor: "transparent",
  };
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const div = document.getElementById("widthAnalyzer");
    setWidth(div.offsetWidth);
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <h1 className=" text-[#D7425A] font-bold text-3xl">Schedule</h1>
      <div className="bg-white rounded-[10px] p-[20px] flex flex-col gap-5">
        <div className="flex flex-col gap-5 border-b-2">
          <div className="flex gap-2 mb-[2vh]">
            <DropdownCustom
              optionValues={domain}
              defaultValue="All Districts"
              dropdownColor="#E8E8E8"
              textColor="black"
            />
            <input
              type="text"
              name="RouteSearch"
              placeholder="Search for from"
              id=""
              style={inputbox}
              className="bg-bg-color p-[10px] rounded-[10px]"
              // onChange={() => {
              //   searchKey = e.target.value;
              // }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {/* <div className="flex w-full]"></div> */}
          <div className="w-full" id="widthAnalyzer">
            <ComposedChart
              width={2000}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 4" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                strokeWidth={3}
              />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
}
