"use client";
import React, { useState } from "react";
import NavbarOption from "@/component/NavbarOption";
import {
  faIndianRupeeSign,
  faBusSimple,
  faUsers,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  var activeRoute;
  if (pathname == "/schedule") {
    activeRoute = "Schedule";
  } else if (pathname == "/buses-routes") {
    activeRoute = "Buses and Routes";
  } else if (pathname == "/employee") {
    activeRoute = "Employee Management";
  } else if (pathname == "/notification") {
    activeRoute = "Notification";
  } else {
    activeRoute = "Revenue";
  }
  const [expand, setExpand] = useState(false);
  const [isActive, setIsActive] = useState(activeRoute);
  const file = expand ? "/busbie-full.svg" : "/busbie-short.svg";
  const style = {
    padding: "30px 20px",
    marginBottom: "2vw",
  };
  function changeColor(whoisactive) {
    setIsActive(whoisactive);
  }
  return (
    <div
      // className="bg-[#D9D9D9]"
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
      style={{
        height: "100vh",
        position: "fixed",
        zIndex: "100",
        backgroundColor: "#D9D9D9",
      }}
    >
      <div>
        <div style={style}>
          <img src={file} alt="Busbie" />
        </div>
        <div>
          <Link href="/revenue">
            <NavbarOption
              optionName="Revenue"
              logo={faIndianRupeeSign}
              state={expand}
              colorChange={changeColor}
              activecom={isActive}
            />
          </Link>
          <Link href="/buses-routes">
            <NavbarOption
              optionName="Buses and Routes"
              logo={faBusSimple}
              state={expand}
              colorChange={changeColor}
              activecom={isActive}
            />
          </Link>
          <Link href="/schedule">
            <NavbarOption
              optionName="Schedule"
              logo={faCalendar}
              state={expand}
              colorChange={changeColor}
              activecom={isActive}
            />
          </Link>
          <Link href="/employee">
            <NavbarOption
              optionName="Employee Management"
              logo={faUsers}
              state={expand}
              colorChange={changeColor}
              activecom={isActive}
            />
          </Link>
          <Link href="/notification">
            <NavbarOption
              optionName="Notification"
              logo={faBell}
              state={expand}
              colorChange={changeColor}
              activecom={isActive}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
