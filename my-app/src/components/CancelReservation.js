import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';




export default function CancelReservation() {
  //const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be deleted
    setConfirm(true);
  }
  const name = useRef('');
  const id = useRef('');
  const fnumber = useRef('');
  const from = useRef('');
  const to = useRef('');
  const airport = useRef('');
  const bags = useRef('');
  useEffect(() => {
    const body = {
       Name: name.current.value,
       userID: id.current.value,
       FlightNumber: fnumber.current.value,
       From: from.current.value,
       To: to.current.value,
       Airport: airport.current.value,
       NumberOfBags: bags.current.value
    };

    if (confirm){
      console.log(body)
    axios.delete(`http://localhost:8000/reservation/cancel-Reservation/${fnumber.current.value}`,body).then(res=> console.log(res)).catch();
    setConfirm(false);
    }

  }, [confirm])

  return (
 
    <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue=" "
        variant="filled"
        input ref ={fnumber}
      />
    </Stack>


    /*
    <Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div>
         <label>Name: </label>
        <input ref = {name} />

        <label>userID: </label>
        <input ref={id} />
      
        <label>FlightNumber: </label>
        <input ref={fnumber} />
        
        <label>From: </label>
        <input ref = {from}  />
      
        <label>To: </label>
        <input ref={to} />

        <label>Airport: </label>
        <input ref={airport} />
      
        <label>NumberOfBags: </label>
        <input ref={bags} />
        
      </div>
      <Button variant="Delete" disableElevation onClick = {handle}>
      Cancel Reservation
    </Button>
      
    </Box>
    
   */


  );
}