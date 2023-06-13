'use client'
import React, { useState } from 'react'
export default function RoundedBtn({buttonName, onClicky, flag}){
    // const {buttonName, actve} = props;

    const buttonStyle={
        backgroundColor: '#E8E8E8',
        padding: "10px 15px",
        borderRadius: '100px',
    }
    const buttonStyle2={
        backgroundColor: "red",
        fontColor:"white",
        padding: "10px 15px",
        borderRadius: '100px',
    }
console.log(flag);
    const handleClick = () =>{
        let value1="";
        let value2="";
        let value3="";
        if (buttonName=="Total Turn Over") {
            value1="turnover_a";
            value2="turnover_b";
        }
        else if(buttonName=="Total Expense"){
            value1="totalexpense_a";
            value2="totalexpense_b";
            
        }
        else if(buttonName=="Profit"){
            value1="profit_a";
            value2="profit_b";
        }
        else if(buttonName=="Salary"){
            value1="salary_a";
            value2="salary_b";
        }
        else if(buttonName=="Fuel"){
            value1="fuel_a";
            value2="fuel_b";
            
        }
        else if(buttonName=="Machine Service"){
            value1="machineservice_a";
            value2="machineservice_b";
        }
        value3={buttonName}
        onClicky(value1,value2,value3);
    }
    return(
        <button style={flag===0?buttonStyle:buttonStyle2} onClick={handleClick}>
            {buttonName}
        </button>
    )
}