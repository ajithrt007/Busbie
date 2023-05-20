"use client";
import "./globals.css";
import NavbarOption from "@/component/NavbarOption";
import Time from "@/component/Time";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faBusSimple,
  faUsers,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [expand, setExpand] = useState(false);
  const [isActive, setIsActive] = useState("Revenue");
  const file = expand ? "/busbie-full.svg" : "/busbie-short.svg";
  const style = {
    padding: "30px 20px",
    marginBottom: "2vw",
  };
  return (
    <html>
      <body style={{ backgroundColor: "#E8E8E8" }}>
        <div className="flex">
          <div
            className="bg-secondary h-screen fixed"
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
          >
            <div>
              <div style={style}>
                <img src={file} alt="Busbie" />
              </div>
              <div>
                <Link href="/" value="Revenue">
                  <NavbarOption
                    optionName="Revenue"
                    logo={faIndianRupeeSign}
                    state={expand}                 
                  />
                </Link>
                <Link href="/buses-routes" value="Buses and Routes">
                  <NavbarOption
                    optionName="Buses and Routes"
                    logo={faBusSimple}
                    state={expand}
                  />
                </Link>
                <Link href="/schedule" value="Schedule">
                  <NavbarOption
                    optionName="Schedule"
                    logo={faCalendar}
                    state={expand}
                  />
                </Link>
                <Link href="/employee" value="Employee Management">
                  <NavbarOption
                    optionName="Employee Management"
                    logo={faUsers}
                    state={expand}
                  />
                </Link>
                <Link href="/notification" value="Notification">
                  <NavbarOption
                    optionName="Notification"
                    logo={faBell}
                    state={expand}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full p-[1.5vw] ml-[5vw]">
            <div className="flex justify-between w-full">
              <Time />
              <div className="p-[10px] bg-secondary rounded-lg flex gap-2 items-center">
                Username
                <FontAwesomeIcon icon={faUser} className="h-[15px]" />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
