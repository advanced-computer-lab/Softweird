import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

export default function CreateReservation() {
  
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the user to be created
    setConfirm(true);
  }
  const n = useRef('');
  const id = useRef('');
  const fn = useRef('');
  const from = useRef('');
  const to = useRef('');
  const depairport = useRef('');
  const arrairport = useRef('');
  const nob = useRef('');
  
  useEffect(() => {
    const body = {
       Name: n.current.value,
       userID: id.current.value,
       FlightNumber: fn.current.value,
       From: from.current.value,
       To: to.current.value,
       DepartureAirport: depairport.current.value,
       ArrivalAirport: arrairport.current.value,
       NumberOfBags: nob.current.value,
    };

    if (confirm){
      console.log(body)
    axios.post(`http://localhost:8000/reservation/create-reservation`,body).then(res=> console.log(res)).catch();
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
    

         Create Reservation
       <div>

      < TextField
      label="Name"
      inputRef={n}
      />
           
      < TextField
      label="ID"
      inputRef={id}
      />
      
      < TextField
      label="Flight Number"
      inputRef={fn}
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
      label="Number of bags"
      inputRef={nob}
      />
      
      </div>
      <Button variant="contained" color="success" disableElevation onClick = {handle}>
      Confirm
    </Button>
    
    </Box>
  );
}
ReactDOM.render(<CreateReservation/>, document.getElementById('root'));