
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
import { checkPrime } from 'crypto';
import { useFormControlUnstyled } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const currentUser = {};

function Login() {

        const navigate = useNavigate();
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
          
          const userFound = (currentUser) => {

            
            if(Object.keys(currentUser).length === 0)
            {
              console.log("eeeeeeeeeee");
              alert("Wrong UserName or Password!");
            }
            else
            {
              navigate('/user');
            }
          }

         function handle1()
         {
          navigate('/Signup');
         }
          
          useEffect(() => {
            const body = {
                username: username.current.value,
               
               Password: password.current.value
        
            };
            
            if (confirm){
                
              axios.post(`http://localhost:8000/user/login`,body).then(res=> console.log(res) , userFound(currentUser))
              .catch();
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
    
      <div>
        <Button variant="contained" color="success" disableElevation onClick = {handle1}>
        I Do Not Have An Account
      </Button>
      </div>
      </Box>
  
  
  
  
    );
  }
  
  export default Login;