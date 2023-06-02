import React from "react";
export default function Notifmsg(props) {
    return(
        <>
        <div className="bg-white rounded-[10px] p-[10px] m-10">
        
            <div className="content">
                {props.msg}
            </div>
            <div className=" flex flex-row font-bold ">
                {props.type}
                <div className="flex justify-self-end p-10">
                        {props.date}, {props.time}
                </div>
            </div>

        </div>
        </>
    )
}