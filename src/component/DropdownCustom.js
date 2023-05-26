"use client";
import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function Dropdowns(props) {
  const { optionValues, defaultValue, dropdownColor, textColor } = props;
  const [selected, setSelected] = React.useState(new Set([defaultValue]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} style={{ backgroundColor: dropdownColor, color: textColor, borderRadius: '10px', zIndex: '0'}}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {optionValues.map((item)=>{
          return(
            <Dropdown.Item key={item}>{item}</Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
