import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import { confirm } from "react-confirm-box";
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

export default function DeleteFlight() {
  //const [flight,setFlight] = useState();
  const [confirm1,setConfirm] = useState(false);
  const [Cabin, setCabin] = React.useState('');
 
  const handleChange = (event) => {
    setCabin(event.target.value);
  
  
  };
  function handle(){
    // set the flight to be deleted
    alert("are you sure?")
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
  useEffect(() => {
    const body = {};
    
    if(fn.current.value != "")
    {
      body["FlightNumber"] = fn.current.value;
    }
    if(from.current.value != "")
    {
      body["From"] = from.current.value;
    }
    if(to.current.value != "")
    {
      body["To"] = to.current.value;
    }
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
    if(nos.current.value != "")
    {
      body["AvailableSeats"] = nos.current.value;
    }
    if(date.current.value != "")
    {
      body["Date"] = date.current.value;
    }
    if(departure.current.value != "")
    {
      body["DepartureTime"] = departure.current.value;
    }
    if(arrival.current.value != "")
    {
      body["ArrivalTime"] = arrival.current.value;
    }

    if (confirm1){
      console.log(body)
    axios.delete(`http://localhost:8000/flight/delete-Flight/${fn.current.value}`,body).then(res=> console.log(res)).catch();
    setConfirm(false);
    }

  }, [confirm1])

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
      </div>
      <Button
       variant="contained" size="medium" color="error" disableElevation onClick = {handle}>
      Delete
    </Button>
      
    </Box>
    



  );
}
ReactDOM.render(<DeleteFlight />, document.getElementById('root'));