"use client"
import React, { useState } from 'react'
import Notifmsg from '@/component/Notifmsg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
function Page() {
  // const [ready, setRead]=useState(false)
  const [unreadMessages, setUnreadMessages] = useState([
    msg1,
    msg2,
    msg3,
    msg4,
    msg5,
    msg6
  ]);

  const [readMessages, setReadMessages] = useState([
  ]);

  const markAsRead = (messageId) => {
    const message = unreadMessages.find((m) => m.id === messageId);
  
    if (message) {
      setUnreadMessages(unreadMessages.filter((m) => m.id !== messageId));
      setReadMessages([...readMessages, message]);
    }

  };
  const style={
    paddingLeft:'10px',
    color:'green',
}
const data = {
  page : 'notification'
}
  return (
    <>
    <div className="anima transition-all duration-75">      
      <h1 className=" text-[#D7425A] font-bold text-3xl pb-5">Notifications</h1>
      <h2 className="font-bold"> Unread Notifications</h2>
        <ul className="notif flex flex-col p-5">
          {unreadMessages.map((message)=>(
            <li key={message.id} className="flex flex-row p-2">
              <Notifmsg props={message}/>    
              <button style={style} onClick={() => markAsRead(message.id)}>
              <FontAwesomeIcon icon={faCheckCircle} className="h-[25px]"/>
              </button>
            </li>
          ))}  
        </ul>
      <h2 className="font-bold p-5"> Read Notifications</h2>
      <ul className="notif flex flex-col p-5 m-5">
          {readMessages.map((message)=>(
            <li key={message.id} className="p-2">
              <Notifmsg props={message}/>    
            </li>
          ))}  
        </ul>            
      </div>
      </>
  )
}


 const msg1= {id:1, msg: "Bus Break down at Pappanamcode. Send technicians ", date: "13-12-2002", time: "13:00", type: "Bus BreakDown", read:false};

 const msg2= {id:2, msg: " Bus Break down at Pappanamcode. Send technicians ", date: "13-12-2002", time: "13:00", type: "Bus BreakDown", read:false};

 const msg3= {id:3 ,msg: "Bus breakdown: Route 123", date: "13-12-2002", time: "13:00", type: "Bus BreakDown", read:false};

 const msg4= {id:4 ,msg: "Bus breakdown: Route 112", date: "13-12-2002", time: "13:00", type: "Bus BreakDown", read:false};

 const msg5= {id:5 ,msg: "Bus breakdown: Route 423", date: "13-12-2002", time: "13:00", type: "Bus BreakDown", read:false};

 const msg6= {id:6 ,msg: "Technincias needed", date: "13-12-2002", time: "13:00", type: "Bus BreakDown", read:false};


export default Page
