import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import './background.css';

export default function Flightss() {
  const [Cabin, setCabin] = React.useState('');
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setCabin(event.target.value);
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
  const depairport = useRef('');
  const arrairport = useRef('');
  const cabin = useRef('');
  const nos = useRef('');
  const flightduration = useRef('');
  const baggageallowance = useRef('');
  const price = useRef('');
  useEffect(() => {
    const body = {
       FlightNumber: fn.current.value.toUpperCase() ,
       From: from.current.value.toUpperCase() ,
       To: to.current.value.toUpperCase() ,
       DepartureAirport: depairport.current.value.toUpperCase() ,
       ArrivalAirport: arrairport.current.value.toUpperCase() ,
       Cabin: cabin.current.value.toUpperCase() ,
       AvailableSeats: nos.current.value,
       Date: date.current.value,
       DepartureTime: departure.current.value,
       ArrivalTime: arrival.current.value,
       TripDuration: flightduration.current.value,
       BaggageAllowance: baggageallowance.current.value,
       Price: price.current.value,
    };

    if (confirm){
      console.log(body)
    axios.post(`http://localhost:8000/flight/create-Flight`,body).then(res=> console.log(res)).catch();
    setConfirm(false);
    }

  }, [confirm])

  return (
    <div className='background'>
    <Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1.5, width: '25ch' },
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
      label=" "
      inputRef={date}
      type= "date"
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
      label="Departure Airport"
      inputRef={depairport}
      />
       < TextField
      label="Arrival Airport"
      inputRef={arrairport}
      />

      < TextField
      label="Departure Time"
      inputRef={departure}
      type= "time"
      />
      
      < TextField
      label="Arrival Time"
      inputRef={arrival}
      type= "time"
      />

<FormControl sx={{ m: 1, minWidth: 200 }}><InputLabel id="demo-simple-select-label">Cabin</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Cabin}
    label="cabin"
    inputRef={cabin}
    onChange={handleChange}
  >
    <MenuItem value={"Economy"}>Economy</MenuItem>
    <MenuItem value={"Business"}>Business</MenuItem>
    <MenuItem value={"First"}>First</MenuItem>
  </Select>
</FormControl>

      < TextField
      label="Available Seats"
      inputRef={nos}
      />

     < TextField
      label="Trip Duration"
      inputRef={flightduration}
      />
      < TextField
      label="Allowed Baggage"
      inputRef={baggageallowance}
      />
         < TextField
      label="Price"
      inputRef={price}
      />
      
      </div>
      <Button variant="contained" color="success"  disableElevation onClick = {handle}>
      Create
    </Button>
    
    </Box>
    </div>
  );
}
ReactDOM.render(<Flightss />, document.getElementById('root'));