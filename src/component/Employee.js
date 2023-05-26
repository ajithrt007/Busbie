"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const style={
    backgroundColor:"#E8E8E8"

}

const style2={
    backgroundColor:"#E8E8E8",
    boxShadow:" 5px 5px #888888"
}
function Employee({props, onClick, id, isSelected}) {
     const handleClick = () => {
         onClick(id,props.name, props.role, props.contact, props.bus);
       };

    return(
        <>
        <div className=" p-2 rounded-[10px] flex flex-row gap-2 hover:bg-slate-600" style={isSelected?style2:style} onClick={handleClick}>
            <img src="/Profile.png" alt="Not available" className=" " style={{width:"3em", maxWidth:"100%"}} />
            <div className="flex flex-col ">
                <p className="min-w-0 flex break-words break-all">{props.name}</p>
                <p>{props.id}</p>
            </div>
            <p className="px-4 role" style={{position:"absolute", left:"27vw", width:"10%", textAlign:"center"}}>  {props.role}</p>
            <p className="px-4 experience " style={{position:"absolute",   left:"40vw", width:"5%", textAlign:"center"}}>  {props.experience}</p>
            <p className="px-4 contact" style={{position:"absolute", left:"53vw", width:"10%", textAlign:"center"}}>  {props.contact}</p>
        </div>
        </>
    )
}

export default Employee