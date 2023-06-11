import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
export default function ErrorMsg({ msg }) {
  const [displayVal, setDisplayVal] = useState("flex");
  var stylerror = {
    display: "flex",
    backgroundColor: "rgb(220 38 38)",
    padding: "10px 15px",
    borderRadius: "10px",
    gap: "10px",
    maxWidth: "300px",
    position: "relative",
    alignItems: "center",
  };
  return (
    <div
      style={{
        display: displayVal,
        position: "absolute",
        bottom: "15px",
        zIndex: "30",
        width: "100vw",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div style={stylerror}>
        <button
          onClick={(displayVal) => {
            setDisplayVal("none");
            console.log("Close button clicked");
          }}
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{
              height: "25px",
              color: "white",
            }}
          />
        </button>
        <p>{msg}</p>
      </div>
    </div>
  );
}
