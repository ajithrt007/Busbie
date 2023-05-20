import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Add(props) {
    const {buttonName} = props
    const style={
        display: 'flex',
        gap: '5px',
        justifyContents: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: '#D7425A',
        color: 'white',
        padding: '15px',
        borderRadius: '10px',
    }
    return(
    <button style={style}>
        <p>{buttonName}</p>
        <FontAwesomeIcon icon={faPlus} className="h-[25px]"/>
    </button>
    )
}