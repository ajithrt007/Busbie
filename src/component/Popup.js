"use client"
import Map from './Map'
import React, { useState } from 'react'
import Modal from 'react-modal'
const Popup = () => {
   const [isOpen, setIsOpen] = useState(false)
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)',
         padding:'1em',
         height:'60vh',
         width:'50vw'
      }
   }
   return (
      <div style={{borderRadius:"50px"}}>
         <button onClick={() => setIsOpen(true)} style={{backgroundColor:"#D9D9D9", borderRadius:"10px", fontSize:"13px"}}>Open Current Location</button>
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            <Map/>
            {/* <button className='font-bold' onClick={() => setIsOpen(false)}>Close Window</button> */}
         </Modal>
      </div>
   )
}
export default Popup