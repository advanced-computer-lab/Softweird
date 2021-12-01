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

    if (confirm){
      console.log(body)
    axios.get(`http://localhost:8000/search`,body).then(res=> console.log(res)).catch();
    axios.get(`http://localhost:8000/search`).then(r => {setFlight(r.data);console.log(r.data)}).catch()
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
      label="Flight Number"
      inputRef={fn}
      />
      < TextField
      label="Date"
      inputRef={date}
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
      label="Departure Time"
      inputRef={departure}
      />
      < TextField
      label="Arrival Time"
      inputRef={arrival}
      />
      < TextField
      label="Cabin"
      inputRef={cabin}
      />
       < TextField
      label="Available Seats"
      inputRef={nos}
      />
        
      </div>
      <Button variant="outlined" disableElevation onClick = {handle}>
      Search
    </Button>
      

    </Box>

   
   );return (
     flight.map(a =>{return <div>
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
   )}
   ReactDOM.render(<SearchFlight />, document.getElementById('root'));