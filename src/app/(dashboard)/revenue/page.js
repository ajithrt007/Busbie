"use client";
import React,{ useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowDown,
  faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import DropdownCustom from "@/component/DropdownCustom";
import RoundedBtn from "@/component/RoundedBtn";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    const div = document.getElementById("widthAnalyzer");
    setWidth(div.offsetWidth);
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <h1 className=" text-[#D7425A] font-bold text-3xl">Revenue</h1>
      <div className="bg-white rounded-[10px] p-[20px] flex flex-col gap-5">
        <div className="flex flex-col gap-5 border-b-2">
          <div className="flex justify-between items-center">
            <DropdownCustom
              optionValues={domain}
              defaultValue="All Districts"
              dropdownColor="#E8E8E8"
              textColor="black"
            />
            <div className="flex gap-5">
              <div className="flex gap-3 items-center">
                Organize by:
                <DropdownCustom optionValues={organizeBy} defaultValue="Day" dropdownColor="#E8E8E8" textColor="black"/>
              </div>
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
          </div>
          <div className="flex gap-2 mb-[2vh]">
            <RoundedBtn buttonName="Total Turn Over" />
            <RoundedBtn buttonName="Total Expense" />
            <RoundedBtn buttonName="Profit" />
            <RoundedBtn buttonName="Salary" />
            <RoundedBtn buttonName="Fuel" />
            <RoundedBtn buttonName="Machine Service" />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex w-full]">
            <div className="w-[50%] flex items-center justify-center">
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  <p>1000230</p>
                </div>
                <DropdownCustom optionValues={dayOption} defaultValue="Today" dropdownColor="#8884d8" textColor="white"/>
              </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faIndianRupeeSign} />
                  <p>1000230</p>
                </div>
                <DropdownCustom
                  optionValues={dayOption}
                  defaultValue="Yesterday"
                  dropdownColor="#82ca9d"
                  textColor="white"
                />
              </div>
            </div>
          </div>
          <div className="w-full" id="widthAnalyzer">
            <LineChart
              width={width}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
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
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={3}/>
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}
