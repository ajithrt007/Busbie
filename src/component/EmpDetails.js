import React from 'react'

function EmpDetails({selectedId, selectedName, selectedRole, selectedContact, selectedBus}) {
    const style={
        backgroundColor:"#E8E8E8",
        width:"30%",
        height:"50%",
        position:"fixed",
        right:"50px",
        top:"16em",
    }
    
  return (

        <div className="p-5 rounded-[10px] flex flex-col md:w-[100%]" style={style}>
            <div className="title flex flex-row ">
                <img src="/Profile.png" alt="Employee Not Found" style={{width:"10em", height:"10em"}}/>
                <div className="details flex flex-col gap-2 " style={{width:"60%"}}>
    
                        <p style={{fontSize:"26px", fontWeight:"2px", textAlign:"center"}}>
                            {selectedName}
                        </p>
                        <p className="px-4" style={{fontSize:"20px", fontWeight:"2px", textAlign:"center" }}>
                            {selectedRole}
                        </p >
                        <p style={{fontSize:"20px", fontWeight:"2px", textAlign:"center" }}>
                            {selectedId}
                        </p>

                </div>
            </div>

            <div className="emp_details flex flex-col gap-3" style={{position:"absolute", top:'30vh'}}>
                <div className="row1 flex flex-row gap-5">
                    <p>Phone Number</p>
                    <p>{selectedContact}</p>
                </div>
                <div className="row1 flex flex-row gap-5">
                    <p>Bus Plate Number</p>
                    <p>{selectedBus}</p>
                </div>

            </div>
        </div>

  )
}

export default EmpDetails
