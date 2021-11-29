import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";


export default function Flightss() {
  //const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be created
    setConfirm(true);
  }
  const flightnum= document.getElementById("flightnumber");
  const fn = useRef('');
  const from = useRef('');
  const to = useRef('');
  const departure = useRef('');
  const arrival = useRef('');
  const date = useRef('');
  const airport = useRef('');
  const cabin = useRef('');
  const nos = useRef('');
  useEffect(() => {
    const body = {
       FlightNumber: fn.current.value,
       From: from.current.value,
       To: to.current.value,
       Airport: airport.current.value,
       Cabin: cabin.current.value,
       AvailableSeats: nos.current.value,
       Date: date.current.value,
       DepartureTime: departure.current.value,
       ArrivalTime: arrival.current.value
    };
    console.log("outside")
   if(flightnum){
    console.log("inside if")
    flightnum.addEventListener('submit', (e)=>{
      console.log("inside listener")
     if(body.FlightNumber==="1")
      e.preventDefault()
    } )
   }

    if (confirm){
      console.log(body)
    axios.post(`http://localhost:8000/flight/create-Flight`,body).then(res=> console.log(res)).catch();
    setConfirm(false);
    }

  }, [confirm])

  return (


    <Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div>
         <label>FlightNumber: </label>
        <input
          ref = {fn} id="flightnumber"
        />
        <label>Date: </label>
        <input ref={date} />
        
        
      
      
      <label>From: </label>
        <input ref={from} />
        
         <label>To: </label>
        <input
          ref = {to}
        />
      
      <label>DepartureTime: </label>
        <input ref={departure} />

        <label>ArrivalTime: </label>
        <input ref={arrival} />
      
      
      <label>Cabin: </label>
        <input ref={cabin} />

        <label>AvailableSeats: </label>
        <input ref={nos} />
      
      
      <label>Airport: </label>
        <input ref={airport} />
        
      </div>
      <Button variant="Confirm" type="submit" disableElevation onClick = {handle}>
      Confirm
    </Button>
      
    </Box>
    



  );
}