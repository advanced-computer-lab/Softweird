import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const chalk = require('chalk');




export default function CancelReservation() {
  //const [reservation, setReservation] = useState();

  

  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the reservation to be deleted
    setConfirm(true);
  }
  const name = useRef('');
  const id = useRef('');
  const fnumber = useRef('');
  const from = useRef('');
  const to = useRef('');
  const bags = useRef('');
  useEffect(() => {
    const body = {};
    if(name.current.value != "")
    {
      body["Name"] = name.current.value;
    }
    if(id.current.value != "")
    {
      body["userID"] = id.current.value;
    }
    if(from.current.value != "")
    {
      body["From"] = from.current.value;
    }
    if(to.current.value != "")
    {
      body["To"] = to.current.value;
    }
    if(bags.current.value != "")
    {
      body["NumberOfBags"] = bags.current.value;
    }
    if(fnumber.current.value != "")
    {
      body["FlightNumber"] = fnumber.current.value;
    }

    if (confirm){
      console.log(body)
      axios.delete(`http://localhost:8000/reservation/delete-Reservation/${body.value}`,body).then(res=> console.log(res)).catch();
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
      label="Number of Bags"
      inputRef={bags}
      />

      </div>
      <Button 
       variant="contained" size="medium" color="error"  disableElevation onClick = {handle}>
         Cancel
      </Button>
      
    </Box>

  );
}