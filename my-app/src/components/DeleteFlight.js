import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

export default function DeleteFlight() {
  //const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be deleted
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
    axios.delete(`http://localhost:8000/flight/delete-Flight/${fn.current.value}`,body).then(res=> console.log(res)).catch();
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
      <Button variant="contained" size="medium" color="error" disableElevation onClick = {handle}>
      Delete
    </Button>
      
    </Box>
    



  );
}
ReactDOM.render(<DeleteFlight />, document.getElementById('root'));