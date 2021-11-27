import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";

export default function UpdateUser() {
  //const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be created
    setConfirm(true);
  }
  const fname = useRef('');
  const lname = useRef('');
  const passnumber = useRef('');
  const email = useRef('');
  
  useEffect(() => {
    const body = {
       FirstName: fname.current.value,
       LastName: lname.current.value,
       PassportNumber: passnumber.current.value,
       Email: email.current.value
    };
    if (confirm){
      console.log(body)
    axios.get(`http://localhost:8000/user/update-User/${passnumber.current.value}`,body).then(res=> console.log(res)).catch();
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
         <label>First Name : </label>
        <input
          ref = {fname}
        />

         <label>Last Name : </label>
        <input
          ref={lname} 
        />
      
         <label>Passport Number : </label>
        <input 
          ref={passnumber} 
        />
      
         <label>Email : </label>
        <input
          ref = {email}
        />
      
      </div>
      <Button variant="Update" disableElevation onClick = {handle}>
      Update User Info
    </Button>
      
    </Box>
    
  );
}