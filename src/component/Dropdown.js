"use client";
import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function Dropdowns(props) {
  const { optionValues,defaultValue } = props;
  const [selected, setSelected] = React.useState(new Set(["All Districts"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }} style={{ backgroundColor: '#E8E8E8', color: 'black', borderRadius: '10px'}}>
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
