import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
export default function RouteRow({ sl, fromto, nob, stime, avrpro, avgexp }) {
  const rowStyle = {
    padding: "10px 15px",
  };
  return (
    <div
      className="flex rounded-[10px] items-center justify-between bg-secondary"
      style={rowStyle}
    >
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
          className="flex gap-2 items-center bg-bg-color"
          style={{ borderRadius: "100px", padding: "5px 8px" }}
        >
          View
          <FontAwesomeIcon icon={faLocationDot} className="h-[15px]" />
        </div>
        <button
          className="flex gap-2 items-center bg-bg-color"
          style={{ borderRadius: "100px", padding: "5px 8px" }}
        >
          <FontAwesomeIcon icon={faChevronDown} className="h-[15px]" />
        </button>
      </div>
    </div>
  );
}
