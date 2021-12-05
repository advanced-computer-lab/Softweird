import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

export default function SearchFlight() {
  const [flightD,setFlightD] = useState();
  const [flightR,setFlightR] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be searched for
    setConfirm(true);
  }
  const from = useRef('');
  const to = useRef('');

 
  useEffect(() => {
    const bodyD = {};

    if(from.current.value != "")
    {
        bodyD["From"] = from.current.value;
    }
    if(to.current.value != "")
    {
        bodyD["To"] = to.current.value;
    }
 

    const bodyR = {};
    if(to.current.value != "")
    {
        bodyR["From"] = to.current.value;
    }
    if(from.current.value != "")
    {
        bodyR["To"] = from.current.value;
    }


    if (confirm){
      console.log(bodyD);
      console.log(bodyR)
    axios.post(`http://localhost:8000/flight/search`,bodyD).then(res=> {setFlightD(res.data);console.log(res.data)}).catch();
    axios.post(`http://localhost:8000/flight/search`,bodyR).then(res=> {setFlightR(res.data);console.log(res.data)}).catch();
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
      label="From"
      inputRef={from}
      />
      < TextField
      label="To"
      inputRef={to}
      />
        
      </div>
      <Button variant="outlined" disableElevation onClick = {handle}>
      Search
    </Button>
      

    </Box>

   
   
   )}
   ReactDOM.render(<SearchFlight />, document.getElementById('root'));