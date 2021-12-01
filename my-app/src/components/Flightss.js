import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

export default function Flightss() {
  
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be created
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
    axios.post(`http://localhost:8000/flight/create-Flight`,body).then(res=> console.log(res)).catch();
    setConfirm(false);
    }

  }, [confirm])

  return (
    <Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    

         Create Flight
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
      <Button variant="contained" color="success" disableElevation onClick = {handle}>
      Confirm
    </Button>
    
    </Box>
  );
}
ReactDOM.render(<Flightss />, document.getElementById('root'));