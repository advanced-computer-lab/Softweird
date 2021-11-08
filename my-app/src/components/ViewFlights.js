import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function ViewFlights() {
  const [l,setL] = useState([]);

  useEffect(() => {
    console.log("here");
  axios.get(`http://localhost:8000/flight/get-all-flights`).then(r => {setL(r.data);console.log(r.data)}).catch()
    }
  , [])


  return (
    
    l.map(a =>{return <div>
    <label>{a.FlightNumber}</label>
    <label>{a.From}</label>
    <label>{a.To}</label>
    <label>{a.Airport}</label>
    <label>{a.Cabin}</label>
    <label>{a.AvailableSeats}</label>
    <label>{a.Date}</label>
    <label>{a.DepartureTime}</label>
    <label>{a.ArrivalTime}</label></div>})
    
  )
}
