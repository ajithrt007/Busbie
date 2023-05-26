import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavbarOption(props) {
  const { optionName, logo, state, colorChange, activecom } = props;
  const property = state ? "block" : "none";
  const justify = state ? "unset" : "center";
  const [bg, setBg] = useState("#D9D9D9");
  var varColor = 'black';
  if(activecom == optionName){
    varColor = '#D7425A'
  }
  else{
    varColor = 'black'
  }
  const optionButton = {
    backgroundColor: bg,
    padding: "15px 10px",
    justifyContent: justify,
    color: varColor,
  };
  const buttonName = {
    display: property,
    whiteSpace: "nowrap",
  };
  function changeBG(){
    setBg("#E8E8E8")
  }
  function changeBack(){
    setBg("#D9D9D9")
  }
  function setActive(){
    colorChange(optionName);
  }
  return (
    <button className="flex gap-2 items-center w-full" style={optionButton} onMouseEnter={changeBG} onMouseLeave={changeBack} onClick={setActive}>
      <div
        className="flex items-center"
        style={{ height: "30px", width: "30px", justifyContent: "center" }}
      >
        <FontAwesomeIcon icon={logo} className="h-[15px]" />
      </div>
      <p style={buttonName}>{optionName}</p>
    </button>
  );
}
