
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './login.css';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { checkPrime } from 'crypto';
import { useFormControlUnstyled } from '@mui/material';
import { useNavigate } from 'react-router-dom';


var currentUser = {};

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
           
            const str= JSON.stringify(currentUser)
            console.log(str+"cureent")
          
            
            if(currentUser)
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
                
              axios.post(`http://localhost:8000/user/login`,body).then(res=> {
            
               if(res.data){
                navigate('/User');
                const user=res.data.username;
               const firstname=res.data.FirstName;
               const lastname=res.data.LastName;
               const email=res.data.Email;
               const passportnumber=res.data.PassportNumber;
               const password=res.data.Password;
               //const x=res.data.username;
               //const x=res.data.username;
               sessionStorage.setItem("user",user);
                sessionStorage.setItem("firstname",firstname);
                sessionStorage.setItem("lastname",lastname); 
                sessionStorage.setItem("email",email); 
                sessionStorage.setItem("passportnumber",passportnumber); 
                sessionStorage.setItem("password",password);
                
                
               }
               else{
                 alert("wrong pass or username")
               }
               
               
                
               
               
              }
              )
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