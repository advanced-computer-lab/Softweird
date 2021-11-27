import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function ViewReservation() {
  const [l,setL] = useState([]);

  useEffect(() => {
    console.log("reservation is here");
  axios.get(`http://localhost:8000/reservation/get-all-reservations`).then(r => {setL(r.data);console.log(r.data)}).catch()
    }
  , [])


  return (
    
    l.map(a =>{return <div>
    <label>{a.Name}</label>
    <label>{a.userID}</label>
    <label>{a.FlightNumber}</label>
    <label>{a.From}</label>
    <label>{a.To}</label>
    <label>{a.Airport}</label>
    <label>{a.NumberOfBags}</label>
    </div>})
  )
}
