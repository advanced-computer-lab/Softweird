import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

export default function SearchFlight() {
  const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be searched for
    setConfirm(true);
  }
  const depairport = useRef('');
  const arrairport = useRef('');
  const cabin = useRef('');
  const availableseats = useRef('');
  const departure = useRef('');
  const arrival = useRef('');
 
 
  
 
  useEffect(() => {
    const body = {};

    if(depairport.current.value != "")
    {
      body["DepartureAirport"] = depairport.current.value;
    }
    if(arrairport.current.value != "")
    {
        body["ArrivalAirport"] = arrairport.current.value;
    }
    if(cabin.current.value != "")
    {
        body["Cabin"] = cabin.current.value;
    }
    if(availableseats.current.value != "")
    {
        body["AvailableSeats"] = availableseats.current.value;
    }
    if(departure.current.value != "")
    {
      body["DepartureTime"] = departure.current.value;
    }
    if(arrival.current.value != "")
    {
      body["ArrivalTime"] = arrival.current.value;
    }

    if (confirm){
      console.log(body)
    axios.get(`http://localhost:8000/flight/search`,body).then(res=> {setFlight(res.data);console.log(res.data)}).catch();
    setConfirm(false);
    }

  }, [confirm])

  return (

    <Box

      component = "form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div>
       
      < TextField
      label="Departure Airport"
      inputRef={depairport}
      />
      < TextField
      label="Arrival Airport"
      inputRef={arrairport}
      />
      < TextField
      label="Cabin"
      inputRef={cabin}
      />
      < TextField
      label="Available Seats"
      inputRef={availableseats}
      />
      < TextField
      label="Departure Time"
      inputRef={departure}
      />
      < TextField
      label="Arrival Time"
      inputRef={arrival}
      />
        
      </div>
      <Button variant="outlined" disableElevation onClick = {handle}>
      Search
    </Button>
      

    </Box>

   
   
   )}
   ReactDOM.render(<SearchFlight />, document.getElementById('root'));