import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

export default function CreateUser() {
  
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  
  const [confirm,setConfirm] = useState(false);

  function handle(){
    // set the user to be created
    setConfirm(true);
  }
  const fn = useRef('');
  const ln = useRef('');
  const pn = useRef('');
  const email = useRef('');
  const password = useRef('');
  const age = useRef('');
  const nationality = useRef('');
  const phonenumber = useRef('');
  
  useEffect(() => {
    const body = {
       FirstName: fn.current.value,
       LastName: ln.current.value,
       PassportNumber: pn.current.value,
       Email: email.current.value,
       Password: password.current.value,
       Age: age.current.value,
       Nationality: nationality.current.value,
       PhoneNumber: phonenumber.current.value,
    };

    if (confirm){
      console.log(body)
    axios.post(`http://localhost:8000/user/create-user`,body).then(res=> console.log(res)).catch();
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
    

         Create User
       <div>

      < TextField
      label="First Name"
      inputRef={fn}
      />
           
      < TextField
      label="Last Name"
      inputRef={ln}
      />
      
      < TextField
      label="Passport Number"
      inputRef={pn}
      />
      
      < TextField
      label="Email"
      inputRef={email}
      />
      
      < TextField
      label="Password"
      inputRef={password}
      />
       < TextField
      label="Age"
      inputRef={age}
      />

      < TextField
      label="Nationality"
      inputRef={nationality}
      />
      
      < TextField
      label="Phone Number"
      inputRef={phonenumber}
      />
      
      </div>
      <Button variant="contained" color="success" disableElevation onClick = {handle}>
      Confirm
    </Button>
    
    </Box>
  );
}
ReactDOM.render(<CreateUser/>, document.getElementById('root'));