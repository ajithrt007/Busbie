import React, { useState } from "react";

export default function RouteInnerRow({
  isl,
  ifromto,
  inob,
  istime,
  iavrpro,
  iavgexp,
}) {
  const rowStyle = {
    padding: "10px 15px",
  };
  return (
    <div
      className="flex items-center justify-between bg-white rounded-[10px]"
      style={rowStyle}
    >
      <div className="flex w-full gap-4 items-center">
        <p style={{ width: "5%" }}>{isl}</p>
        <p style={{ width: "25%" }}>{ifromto}</p>
        <p style={{ width: "10%" }}>{inob}</p>
        <p style={{ width: "10%" }}>{istime}</p>
        <p style={{ width: "18%" }}>{iavrpro}</p>
        <p style={{ width: "20%" }}>{iavgexp}</p>
      </div>
    </div>
  );
}
