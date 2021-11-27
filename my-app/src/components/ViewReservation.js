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
    <label>{a.ID}</label>
    <label>{a.Email}</label>
    <label>{a.DateOfBirth}</label>
    <label>{a.PhoneNumber}</label>
    <label>{a.NumberOfbags}</label>
    
    </div>})
  )
}
