import React from "react";

function EmpDetails({ empdetails }) {
  const style = {
    backgroundColor: "#E8E8E8",
    position: "fixed",
    bottom: "10px",
    right: "40px",
    minWidth: "25%",
    maxWidth: "25%",
  };
  var individual;
  if (empdetails != false) {
    individual = Object.entries(empdetails);
  }

  return (
    <div className="p-5 rounded-[10px] w-[30%]" style={style}>
      {empdetails ? (
        <>
          <div className="title flex flex-col">
            <div className="flex justify-center w-full">
              <img
                src="https://i.pravatar.cc/300"
                alt="Employee Not Found"
                style={{ width: "10em", height: "10em", borderRadius: "100px" }}
              />
            </div>
            <div
              className="details flex flex-col gap-2 "
              //   style={{ width: "60%" }}
            >
              {individual?.map(([key, value]) => {
                if (key != "_id") {
                  return (
                    <div key={key}>
                      <span className="font-bold">{key}: </span>
                      <span>{value}</span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </>
      ) : (
        <p>Click on an employee to view details</p>
      )}
    </div>
  );
}

export default EmpDetails;
