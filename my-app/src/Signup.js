
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Signup.css';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import SignupNavigation from './components/SignupNavigation';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


var curruser = {};
function Signup() {

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
          const firstname = useRef('');
          const lastname = useRef('');
          const email = useRef('');
          const password = useRef('');
          const passportnumber = useRef('');
          const age = useRef('');
          const nationality = useRef('');
          const phonenumber = useRef('');
          
          const checkuser = (curruser) =>
          {
            
            if(curruser != null)
            {
              navigate('/');
            }
            else
            {
              alert("UserName or Email alresdy exist!");
            }
          }
          useEffect(() => {
            const body = {
                username: username.current.value,
                FirstName: firstname.current.value,
                LastName: lastname.current.value,
                Email: email.current.value,
               Password: password.current.value,
               PassportNumber: passportnumber.current.value,
               Age: age.current.value,
               Nationality: nationality.current.value,
               PhoneNumber: phonenumber.current.value,
            };
            
            if (confirm){
                
              axios.post(`http://localhost:8000/user/create-user`,body)
              .then(res => curruser = res.data, checkuser(curruser)
                )
              .catch();
              setConfirm(false);
              }
          
            }, [confirm])
        
    return (
      
        <Box className = "Signup"
        
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
        label="First Name"
        inputRef={firstname}
        />
             
        < TextField
        label="Last Name"
        inputRef={lastname}
        />
        
        < TextField
        label="Passport Number"
        inputRef={passportnumber}
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
        Signup
      </Button>
      
      </Box>
  
  
  
  
    );
  }
  
  export default Signup;