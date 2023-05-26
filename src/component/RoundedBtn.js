'use client'
import React, { useState } from 'react'
export default function RoundedBtn(props){
    const {buttonName, actve} = props;
    const [btColor,setBtColor] = useState('#E8E8E8')
    const buttonStyle={
        background: btColor,
        padding: "10px 15px",
        borderRadius: '100px',
    }
    return(
        <button style={buttonStyle}>
            {buttonName}
        </button>
    )
}