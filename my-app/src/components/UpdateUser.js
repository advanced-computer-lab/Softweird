import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

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
       < TextField
      label="First Name "
      inputRef={fname}
      />
      < TextField
      label="Last Name"
      inputRef={lname}
      />
      
      < TextField
      label="Passport Number"
      inputRef={passnumber}
      />
      < TextField
      label="Email"
      inputRef={email}
      />
      
      </div>
      <Button variant="outlined" size="medium" color="success" disableElevation onClick = {handle}>
      Update User Info
    </Button>
      
    </Box>
    
  );
}
ReactDOM.render(<UpdateUser />, document.getElementById('root'));