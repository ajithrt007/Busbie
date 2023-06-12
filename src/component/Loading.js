import React from "react";
export default function Loading() {
  return (
    <div className="loader flex justify-center items-center h-full w-full relative z-[30]">
      <img src="/Loading_small.gif" style={{height: "30%"}}/>
    </div>
  );
}
