import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const chalk = require('chalk');




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

    <Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div>
       < TextField
      label="Name"
      inputRef={name}
      />

      < TextField
      label="User ID"
      inputRef={id}
      />

        < TextField
      label="Flight Number"
      inputRef={fnumber}
      />

       < TextField
      label="From"
      inputRef={from}
      />

      < TextField
      label="To"
      inputRef={to}
      />

      < TextField
      label="Airport"
      inputRef={airport}
      />

      < TextField
      label="Number of Bags"
      inputRef={bags}
      />

      </div>
      <Button 
       variant="outlined" size="medium" color="error"  disableElevation onClick = {handle}>
      </Button>
      
    </Box>

  );
}