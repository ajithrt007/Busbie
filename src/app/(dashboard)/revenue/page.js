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
      name: "00:00",
      turnover_b: 2389,
      turnover_a: 1746,
      totalexpense_a:3132,
      totalexpense_b:1312,
      profit_a: 1231,
      profit_b:3453,
    },
    {
      name: "02:00",
      turnover_b: 4207,
      turnover_a: 6518,
      totalexpense_a:1231,
      totalexpense_b:3323,
      profit_a:1322,
      profit_b:2534,
    },
    {
      name: "04:00",
      turnover_b: 3625,
      turnover_a: 5489,
      totalexpense_a:2112,
      totalexpense_b:3432,
      profit_a:3453,
      profit_b:3453,
    },
    {
      name: "06:00",
      turnover_b: 7031,
      turnover_a: 1265,
      totalexpense_a:2211,
      totalexpense_b:2112,
      profit_a:3453,
      profit_b:3453,
    },
    {
      name: "08:00",
      turnover_b:7154,
      turnover_a: 9823,
      totalexpense_a:3212,
      totalexpense_b:2313,
      profit_a:5675,
      profit_b:6864,
    },
    {
      name: "10:00",
      turnover_b: 2378,
      turnover_a: 6193,
      totalexpense_a:3221,
      totalexpense_b:3123,
      profit_a:6786,
      profit_b:4564,
    },{
      name: "12:00",
      turnover_b: 4526,
      turnover_a: 7391,
      totalexpense_a:2131,
      totalexpense_b:2112,
      profit_a:3543,
      profit_b:2343,
    },{
      name: "14:00",
      turnover_b: 8304,
      turnover_a: 1479,
      totalexpense_a:2312,
      totalexpense_b:3212,
      profit_a:5353,
      profit_b:4345,
    },{
      name: "16:00",
      turnover_b: 9327,
      turnover_a: 6814,
      totalexpense_a:3122,
      totalexpense_b:3212,
      profit_a:3142,
      profit_b:6585,
     
    },{
      name: "18:00",
      turnover_b: 5794,
      turnover_a: 9123,
      totalexpense_a:3131,
      totalexpense_b:2313,
      profit_a:3534,
      profit_b:2342,
    },{
      name: "20:00",
      turnover_b: 2837,
      turnover_a: 6519,
      totalexpense_a:6456,
      totalexpense_b:5464,
      profit_a:5644,
      profit_b:6876
    },{
      name: "22:00",
      turnover_b: 7903,
      turnover_a: 5381,
      totalexpense_a:7566,
      totalexpense_b:4353,
      profit_a:8678,
      profit_b:6786,

    },

  ];
  const data1 = [
    
    {
      name: "Jan",
      uv: 2369,
      pv: 1536,
    },
    {
      name: "Feb",
      uv: 1023,
      pv: 2318,
    },
    {
      name: "Mar",
      uv: 3008,
      pv: 4211,
    },
    {
      name: "Apr",
      uv: 2501,
      pv: 1195,
    },
    {
      name: "May",
      uv:7204,
      pv: 9483,
    },
    {
      name: "Jun",
      uv: 1278,
      pv: 3593,
    },{
      name: "Jul",
      uv: 4510,
      pv: 5219,
    },{
      name: "Aug",
      uv: 8419,
      pv: 9503,
    },{
      name: "Sep",
      uv: 8934,
      pv: 6004,
    },{
      name: "Oct",
      uv: 5114,
      pv: 9873,
    },{
      name: "Nov",
      uv: 1838,
      pv: 7843,
    },{
      name: "Dec",
      uv: 9013,
      pv: 6012,
    },

  ];
  const data3 = [
    
    {
      name: "Jan",
      uv: 2023,
      pv: 4023,
    },
    {
      name: "Feb",
      uv: 3041,
      pv: 5090,
    },
    {
      name: "Mar",
      uv: 3903,
      pv: 4651,
    },
    {
      name: "Apr",
      uv: 3541,
      pv: 7834,
    },
    {
      name: "May",
      uv:9831,
      pv: 4190,
    },
    {
      name: "Jun",
      uv: 2312,
      pv: 3540,
    },{
      name: "Jul",
      uv: 4658,
      pv: 5339,
    },{
      name: "Aug",
      uv: 8119,
      pv: 9883,
    },{
      name: "Sep",
      uv: 8912,
      pv: 6055,
    },{
      name: "Oct",
      uv: 5614,
      pv: 7873,
    },{
      name: "Nov",
      uv: 1208,
      pv: 6943,
    },{
      name: "Dec",
      uv: 8016,
      pv: 9078,
    },

  ];

  const data4 = [
    
    {
      name: "Jan",
      uv: 2314,
      pv: 3409,
    },
    {
      name: "Feb",
      uv: 2098,
      pv: 2340,
    },
    {
      name: "Mar",
      uv: 3448,
      pv: 3981,
    },
    {
      name: "Apr",
      uv: 2690,
      pv: 5136,
    },
    {
      name: "May",
      uv:7059,
      pv: 9663,
    },
    {
      name: "Jun",
      uv: 6678,
      pv: 3113,
    },{
      name: "Jul",
      uv: 4999,
      pv: 5451,
    },{
      name: "Aug",
      uv: 8567,
      pv: 5893,
    },{
      name: "Sep",
      uv: 3454,
      pv: 6784,
    },{
      name: "Oct",
      uv: 5114,
      pv: 9877,
    },{
      name: "Nov",
      uv: 1818,
      pv: 7983,
    },{
      name: "Dec",
      uv: 8893,
      pv: 7012,
    },

  ];
  const data5 = [
    
    {
      name: "Jan",
      uv: 2313,
      pv: 4509,
    },
    {
      name: "Feb",
      uv: 2888,
      pv: 2670,
    },
    {
      name: "Mar",
      uv: 3410,
      pv: 4581,
    },
    {
      name: "Apr",
      uv: 6690,
      pv: 9136,
    },
    {
      name: "May",
      uv:7099,
      pv: 9853,
    },
    {
      name: "Jun",
      uv: 5878,
      pv: 3893,
    },{
      name: "Jul",
      uv: 4559,
      pv: 8851,
    },{
      name: "Aug",
      uv: 8117,
      pv: 5223,
    },{
      name: "Sep",
      uv: 3334,
      pv: 6444,
    },{
      name: "Oct",
      uv: 5554,
      pv: 9667,
    },{
      name: "Nov",
      uv: 1778,
      pv: 7883,
    },{
      name: "Dec",
      uv: 8899,
      pv: 7023,
    },

  ];
  const data6 = [
    
    {
      name: "Jan",
      uv: 2124,
      pv: 3423,
    },
    {
      name: "Feb",
      uv: 2034,
      pv: 4540,
    },
    {
      name: "Mar",
      uv: 3456,
      pv: 3671,
    },
    {
      name: "Apr",
      uv: 6790,
      pv: 5786,
    },
    {
      name: "May",
      uv:8959,
      pv: 9691,
    },
    {
      name: "Jun",
      uv: 6692,
      pv: 9413,
    },{
      name: "Jul",
      uv: 9599,
      pv: 5961,
    },{
      name: "Aug",
      uv: 8587,
      pv: 5453,
    },{
      name: "Sep",
      uv: 7854,
      pv: 6904,
    },{
      name: "Oct",
      uv: 5564,
      pv: 1457,
    },{
      name: "Nov",
      uv: 4518,
      pv: 9083,
    },{
      name: "Dec",
      uv: 7813,
      pv: 8632,
    },

  ];
  const data7 = [
    
    {
      name: "Jan",
      uv: 3333,
      pv: 4545,
    },
    {
      name: "Feb",
      uv: 6712,
      pv: 9860,
    },
    {
      name: "Mar",
      uv: 9867,
      pv: 5671,
    },
    {
      name: "Apr",
      uv: 3621,
      pv: 6712,
    },
    {
      name: "May",
      uv:9871,
      pv: 6712,
    },
    {
      name: "Jun",
      uv: 8913,
      pv: 5003,
    },{
      name: "Jul",
      uv: 9819,
      pv: 5856,
    },{
      name: "Aug",
      uv: 8723,
      pv: 4563,
    },{
      name: "Sep",
      uv: 1298,
      pv: 3484,
    },{
      name: "Oct",
      uv: 5151,
      pv: 8977,
    },{
      name: "Nov",
      uv: 1998,
      pv: 2013,
    },{
      name: "Dec",
      uv: 3012,
      pv: 5012,
    },

  ];
  const data8 = [
    
    {
      name: "Jan",
      uv: 2319,
      pv: 3899,
    },
    {
      name: "Feb",
      uv: 3458,
      pv: 6510,
    },
    {
      name: "Mar",
      uv: 9015,
      pv:5011,
    },
    {
      name: "Apr",
      uv: 7092,
      pv: 5906,
    },
    {
      name: "May",
      uv:7339,
      pv: 9612,
    },
    {
      name: "Jun",
      uv: 2378,
      pv: 5613,
    },{
      name: "Jul",
      uv: 4459,
      pv: 5001,
    },{
      name: "Aug",
      uv: 8500,
      pv: 5843,
    },{
      name: "Sep",
      uv: 7854,
      pv: 6344,
    },{
      name: "Oct",
      uv: 5004,
      pv: 9787,
    },{
      name: "Nov",
      uv: 4538,
      pv: 7513,
    },{
      name: "Dec",
      uv: 8904,
      pv: 7000,
    },

  ];
  const data9 = [
    
    {
      name: "Jan",
      uv: 3414,
      pv: 1429,
    },
    {
      name: "Feb",
      uv: 1008,
      pv: 2890,
    },
    {
      name: "Mar",
      uv: 3888,
      pv: 7981,
    },
    {
      name: "Apr",
      uv: 3190,
      pv: 7836,
    },
    {
      name: "May",
      uv:7299,
      pv: 9103,
    },
    {
      name: "Jun",
      uv: 6588,
      pv: 4913,
    },{
      name: "Jul",
      uv: 4179,
      pv: 5439,
    },{
      name: "Aug",
      uv: 8177,
      pv: 5593,
    },{
      name: "Sep",
      uv: 9814,
      pv: 6924,
    },{
      name: "Oct",
      uv: 5124,
      pv: 9877,
    },{
      name: "Nov",
      uv: 2318,
      pv: 7903,
    },{
      name: "Dec",
      uv: 8213,
      pv: 9872,
    },

  ];
  const data10 = [
    
    {
      name: "Jan",
      uv: 1234,
      pv: 1459,
    },
    {
      name: "Feb",
      uv: 7608,
      pv: 8990,
    },
    {
      name: "Mar",
      uv: 4988,
      pv: 9271,
    },
    {
      name: "Apr",
      uv: 3000,
      pv: 7800,
    },
    {
      name: "May",
      uv:7009,
      pv: 8703,
    },
    {
      name: "Jun",
      uv: 6908,
      pv: 4293,
    },{
      name: "Jul",
      uv: 1989,
      pv: 6439,
    },{
      name: "Aug",
      uv: 8477,
      pv: 5523,
    },{
      name: "Sep",
      uv: 6514,
      pv: 8754,
    },{
      name: "Oct",
      uv: 1294,
      pv: 6877,
    },{
      name: "Nov",
      uv: 3418,
      pv: 8703,
    },{
      name: "Dec",
      uv: 8913,
      pv: 9854,
    },

  ];
  const data2 = [
    {
      day:{
        yesterday:{
          Totalturnover:data,
          Totalexpense:data3,
          Profit:data4,
          Salary:data5,
          Fuel:data6,
          Machineservice:data10,
        },
        today:{

        }
      },
      month:{

      }

    }
  ]

  const [a, seta]=useState("turnover_a");
  const [b, setb]=useState("turnover_b");
  const[activeBtn, setActiveBtn]=useState("Total Turn Over");

  const change = (msg1, msg2, msg3) => {
    seta(msg1);
    setb(msg2);
    setActiveBtn(msg3);
    console.log(msg3);
  };
  // console.log(data2[0 ].day.yesterday.name);

  // console.log(data.day.name);
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    const div = document.getElementById("widthAnalyzer");
    setWidth(div.offsetWidth);
  }, []);
  return (
    <div className="flex flex-col gap-3">
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
            <RoundedBtn buttonName="Total Turn Over" onClicky={change} flag={activeBtn === 'Total Turn Over' ? true : false}/>
            <RoundedBtn buttonName="Total Expense" onClicky={change}
            flag={activeBtn === 'Total Expense' ? true : false}/>
            <RoundedBtn buttonName="Profit" onClicky={change}
            flag={activeBtn === 'Profit' ? true : false}/>
            <RoundedBtn buttonName="Salary" onClicky={change}
            flag={activeBtn === 'Salary' ? true : false}/>
            <RoundedBtn buttonName="Fuel" onClicky={change}
            flag={activeBtn === 'Fuel' ? true : false}/>
            <RoundedBtn buttonName="Machine Service" onClicky={change}
            flag={activeBtn === 'Machine Service' ? true : false}/>
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
                  <p>10023450</p>
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
              <YAxis/>
              <Tooltip/>
              <Legend/>
              <Line
                type="monotone"
                dataKey={a}
                stroke="#8884d8"
                activeDot={{ r : 8 }}
                strokeWidth={3}
              />
              <Line 
              type="monotone" 
              dataKey={b}
              stroke="#82ca9d" 
              strokeWidth={3}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
}
