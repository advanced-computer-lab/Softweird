import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import './background.css';
export default function Changepassword() {
  //const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the flight to be created
    setConfirm(true);
  }
  const oldpass = useRef('');
  const newpass = useRef('');
 
  
  useEffect(() => {
    const body = {};
    if(oldpass.current.value != "")
    {
      body["Oldpassword"] = oldpass.current.value;
    }
    if(newpass.current.value != "")
    {
      body["Newpassword"] = newpass.current.value;
    }
    body["currentPass"]=  sessionStorage.getItem("password");
    
    if (confirm){
      console.log(body)
    axios.patch(`http://localhost:8000/user/updatapassword/`,body).then(res=> console.log(res)).catch();
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
    

         Create User
       <div>
      < TextField
      label="Old Password"
      inputRef={oldpass}
      />    
      < TextField
      label="New Passowrd"
      inputRef={newpass}
      />

      </div>
      <Button variant="contained" color="success" disableElevation onClick = {handle}>
      Confirm
    </Button>
    
    </Box>
    </div>
  );
}
ReactDOM.render(<Changepassword />, document.getElementById('root'));