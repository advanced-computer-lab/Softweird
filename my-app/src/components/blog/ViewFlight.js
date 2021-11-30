//import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState,useEffect } from 'react';
import axios from 'axios';
function ViewFlight() {
  
  const [l,setL] = useState([]);

  useEffect(() => {
    console.log("here");
  axios.get(`http://localhost:8000/flight/get-all-flights`).then(r => {setL(r.data);console.log(r.data)}).catch()
    }
  , [])


  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">View Flights</h1>
      </div>
    </div>,
     l.map(a =>{return <div>
      <label>{a.FlightNumber}</label>
      <label>{a.From}</label>
      <label>{a.To}</label>
      <label>{a.Airport}</label>
      <label>{a.Cabin}</label>
      <label>{a.AvailableSeats}</label>
      <label>{a.Date}</label>
      <label>{a.DepartureTime}</label>
      <label>{a.ArrivalTime}</label>
      </div>})
  );
}

export default ViewFlight;