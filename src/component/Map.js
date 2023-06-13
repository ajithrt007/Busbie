"use client"
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { setOptions } from "leaflet";
import React, { useState } from 'react'
function Map() {
  const locations = [
    {
      name: "Location 1",
      location: {
        lat:8.470848,
        lng: 76.980338,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 8.471361,
        lng: 76.979748,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 8.471771,
        lng: 76.979209,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 8.472397,
        lng: 76.978378,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 8.472942,
        lng: 76.977742,
      },
    },
    {
      name: "Location 6",
      location: {
        lat:  8.473636,
        lng: 76.976796,
      },
    },
  ];
  const [position,setPosition]=useState(locations[0].location);
  const YOUR_API_KEY="AIzaSyB20mcOyZScwpE3UX9BYfxTelETriOs4lk"
  const libraries = ["places"];
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius:"15px"
  };
  const center = {  
    lat: 8.472397,
    lng: 76.979209 
  };
  const options = {
    zoomControl: true,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: YOUR_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";



  const moveMarker= () =>{
    let i=0;
    setInterval(()=>{
      setPosition(locations[i].location);
      i++;
      if(i===locations.length){
        i=0;
      }
    },2000);
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
        onLoad={moveMarker}
      >  
        <Marker position={position} 
         icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }}/>
      </GoogleMap>
    </div>
  );
}

export default Map;



