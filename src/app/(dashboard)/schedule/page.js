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
    "Alappuzha - Thiruvananthapuram",
    "Ernakulam	-	Kozhikode",
    "Kollam	-	Thrissur",
    "Malappuram	-	Palakkad",
    "Pathanamthitta	-	Kasaragod",
    "Thiruvananthapuram	-	Alappuzha",
    "Thrissur	-	Ernakulam",
    "Wayanad - Kollam",
  ];
  const data = [
    {
      name: "01:00AM",
      ss: 4000,
      KL15A7364: 2400,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,

    },
    {
      name: "02:00AM",
      ss: 3000,
      KL15A7364: 2400,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      ss: 2600,
    },
    {
      name: "03:00AM",
      ss: 2000,
      KL15A7300: 9800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      KL25A9330: 2600,
    },
    {
      name: "04:00AM",
      ss: 2780,
      KL15A7300: 9800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      KL25A9330: 2600,
    },
    {
      name: "05:00AM",
      ss: 1890,
      KL15A0090: 4800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "06:00AM",
      ss: 2390,
      KL15A0090: 4800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "07:00AM",
      ss: 3490,
      KL15A0090: 4800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "08:00AM",
      ss: 4000,
      KL15A0090: 4800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      KL15A7300: 2600,
    },
    {
      name: "09:00AM",
      KL15A7300: 2600,
      ss: 2000,
      KL15A2344: 3000,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      ss: 2600,
    },
    {
      name: "10:00AM",
      KL15A7300: 2600,
      ss: 2780,
      KL15A2344: 3000,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "11:00AM",
      ss: 1890,
      KL15A2344: 3000,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "12:00AM",
      ss: 2390,
      KL15B3244: 3800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      ss: 2600,
    },
    {
      name: "01:00PM",
      ss: 3490,
      KL15B3244: 3800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      ss: 2600,
    },
    {
      name: "02:00PM",
      ss: 4000,
      KL15B377: 2400,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      ss: 2600,
    },
    {
      name: "03:00PM",
      ss: 3000,
      KL15B377: 2400,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
      ss: 2600,
    },
    {
      name: "04:00PM",
      ss: 2000,
      KL15B377: 2400,
      ss: 2600,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "05:00PM",
      ss: 2780,
      KL15B377: 2400,
      KL15A7364: 3908,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "06:00PM",
      ss: 1890,
      KL15C3487: 3800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "07:00PM",
      ss: 2390,
      KL15C3487: 3800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "08:00PM",
      ss: 3490,
      KL15A7364: 4300,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "09:00PM",
      ss: 4000,
      KL15A7364: 2400,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "10:00PM",
      ss: 3000,
      KL15A7364: 1398,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "11:00PM",
      ss: 2000,
      KL15A7364: 9800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    },
    {
      name: "12:00PM",
      ss: 2000,
      KL15A7364: 9800,
      passenger_demand: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
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
              defaultValue="Ernakulam	-	Kozhikode"
              dropdownColor="#E8E8E8"
              textColor="black"
            />
            {/* <input
              type="text"
              name="RouteSearch"
              placeholder="Search for from"
              id=""
              style={inputbox}
              className="bg-bg-color p-[10px] rounded-[10px]"
              onChange={() => {
                searchKey = e.target.value;
              }}
            /> */}
          </div>
        </div>
        <div className="flex flex-col gap-10 overflow-x-scroll">
          {/* <div className="flex w-full]"></div> */}
          <div className="w-full" id="widthAnalyzer">
            <ComposedChart
              width={2000}
              height={420}
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
              {/* <Line
                type="monotone"
                dataKey="pv"
                stroke="#D7425A"
                activeDot={{ r: 8 }}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#D7425A"
                strokeWidth={3}
              /> */}
              {/* <Line
                type="monotone"
                dataKey="ss"
                stroke="#82ca9d"
                strokeWidth={3}
              /> */}
              <Line
                type="monotone"
                dataKey="s0"
                stroke="#D7425A"
                strokeWidth={3}
              />
              {/* <Line
                type="monotone"
                dataKey="KL15A7364"
                stroke="#D7425A"
                strokeWidth={3}
              /> */}
              <Line
                type="monotone"
                dataKey="KL15A7300"
                stroke="#D7425A"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="KL15A0090"
                stroke="#D7425A"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="KL15A2344"
                stroke="#D7425A"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="KL15B3244"
                stroke="#D7425A"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="KL15B377"
                stroke="#D7425A"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="KL15C3487"
                stroke="#D7425A"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="s8"
                stroke="#D7425A"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="s9"
                stroke="#D7425A"
                strokeWidt={3}
              />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient> */}
              </defs>
              <Area
                type="monotone"
                dataKey="passenger_demand"
                // fill="#8884d8"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
}
