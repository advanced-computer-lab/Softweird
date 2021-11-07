import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";

export default function TextFieldSizes() {
  const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be created
    setConfirm(true);
  }
  const fn = useRef("");
  const from = useRef("");
  const to = useRef("");
  const departure = useRef("");
  const arrival = useRef("");
  const date = useRef("");
  const airport = useRef("");
  const cabin = useRef("");
  const nos = useRef("");
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
       ArrivalTime: arrival.current.value,
    };

    axios.post(`/flight/create-Flight`,body).then(res=> console.log(res)).catch();

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
        <TextField
          label="Flight number"
          id="txt6"
          defaultValue=" "
          size="normal"
          ref = {fn}
        />
        <TextField label="Date" id="txt1" defaultValue=" "   ref={date} />
        
      </div>
      <div>
        <TextField
          label="From"
          id="txt6"
          defaultValue=" "
          size="normal"
          ref={from}
        />
        <TextField label="To" id="txt1" defaultValue=" " 
           ref={to}
        />
        
      </div>
      <div>
        <TextField
          label="Departure"
          id="txt6"
          defaultValue=" "
          size="normal"
          ref={departure}
        />
        <TextField label="Arrival" id="txt1" defaultValue=" "  ref={arrival}/>
      </div>
      <div>
        <TextField
          label="Cabin"
          id="txt6"
          defaultValue=" "
          size="normal"
          ref={cabin}
        />
        <TextField label="Available seats" id="txt1" defaultValue=" " ref={nos}/>
      </div>
      <div>
        <TextField
          label="Airport"
          id="txt6"
          defaultValue=" "
          size="normal"
          ref={airport}
        />
        
      </div>
      <Button variant="Confirm" disableElevation onClick = {handle}>
      Confirm
    </Button>
      
    </Box>
    



  );
}