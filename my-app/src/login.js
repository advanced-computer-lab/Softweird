
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './login.css';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import SignupNavigation from './components/SignupNavigation';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";



function Signup() {

        const [name, setName] = React.useState('Cat in the Hat');
        const handleChange = (event) => {
          setName(event.target.value);
        };
        const [confirm,setConfirm] = useState(false);
        function handle(){
            // set the user to be created
            setConfirm(true);
          }
          const username = useRef('');
          const password = useRef('');
          
          
          useEffect(() => {
            const body = {
                username: username.current.value,
               
               Password: password.current.value
        
            };
            
            if (confirm){
                
              axios.post(`http://localhost:8000/user/login`,body).then(res=> console.log(res)).catch();
              setConfirm(false);
              }
          
            }, [confirm])
        
    return (
        <Box className = "login"
        
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1.5, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      
  
           
         <div>
         < TextField
        label="username"
        inputRef={username}
        />
  
       
        < TextField
        label="Password"
        inputRef={password}
        />
        
        
        </div>
        <Button variant="contained" color="success" disableElevation onClick = {handle}>
        Login
      </Button>
      
      </Box>
  
  
  
  
    );
  }
  
  export default Signup;