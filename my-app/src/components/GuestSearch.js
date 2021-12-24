import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell ,{ tableCellClasses }from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
var searched= false;
var information = false;
var pay = false;
const  res1 = {};
const res2 = {};
const body3 = {};
var returnf = false;

const StyledTableCell  = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function GuestSearch() {
  const [flight,setFlight] = useState([]);
  const [flight1,setFlight1] = useState([]);
  const [confirm,setConfirm] = useState(false);
  const [confirm1,setConfirm1] = useState(false);
  const [confirm2,setConfirm2] = useState(false);
  const [Cabin, setCabin] = React.useState('');
  
  const handleChange = (event) => {
    setCabin(event.target.value);
    
  
  };
 function changeMyVariable(){
    searched=false
  }
  function handle(){
    // set the flight to be searched for
    setConfirm(true);
   searched=true;
  }
  const fn = useRef('');
  const from = useRef('');
  const to = useRef('');
  const departure= useRef('');
  const arrival = useRef('');
  const date = useRef('');
  const depairport = useRef('');
  const arrairport = useRef('');
  const first = useRef('');
  const last = useRef('');
  const passnumber = useRef('');
  const email = useRef('');
 

  const shoot = (a) => {
 
    setConfirm1(true);
    information = true;

    console.log(a);
 
   res1["FlightNumber"] = a.FlightNumber;
   res1["From"] = a.From;
   res1["To"] = a.To;
   res1["DepartureAirport"] = a.DepartureAirport;
   res1["ArrivalAirport"] = a.ArrivalAirport;
   res1["NumberOfBags"] = a.BaggageAllowance;
   alert("are you sure?")
    setConfirm(false);

  }
  const shoot1 = (a) => {


    setConfirm2(true);
    returnf = true;

   res2["FlightNumber"] = a.FlightNumber;
   res2["From"] = a.From;
   res2["To"] = a.To;
   res2["DepartureAirport"] = a.DepartureAirport;
   res2["ArrivalAirport"] = a.ArrivalAirport;
   res2["NumberOfBags"] = a.BaggageAllowance;
   alert("Are You Sure?");

   setConfirm1(false);
   pay = true;

  }
  function handle2(){

    res1["FirstName"] = first.current.value;
    res1["LastName"] = last.current.value;
    res1["PassportNumber"] = passnumber.current.value;
    res1["Email"] = email.current.value;
    res2["FirstName"] = first.current.value;
    res2["LastName"] = last.current.value;
    res2["PassportNumber"] = passnumber.current.value;
    res2["Email"] = email.current.value;
    axios.post(`http://localhost:8000/flight/search`,body3).then(res=> {setFlight1(res.data);console.log(res.data)}).catch();
    searched = false;
    information = false;
    returnf = true;


  }
  function payment()
  {
    axios.post(`http://localhost:8000/reservation/create-Reservation`,res1).then(res=> {console.log(res.data)}).catch();
    axios.post(`http://localhost:8000/reservation/create-Reservation`,res2).then(res=> {console.log(res.data)}).catch();
  }
  useEffect(() => {
    const body = {};
 
    if(fn.current.value != "")
    {
      body["FlightNumber"] = fn.current.value.toUpperCase();
    }
    if(from.current.value != "")
    {
        body["From"] = from.current.value;
        body3["To"] = from.current.value;
    }
    if(to.current.value != "")
    {
        body["To"] = to.current.value;
        body3["From"] = to.current.value;
    }
    if(depairport.current.value != "")
    {
      body["DepartureAirport"] = depairport.current.value.toUpperCase();
      body3["ArrivalAirport"] = depairport.current.value.toUpperCase();
    }
    if(arrairport.current.value != "")
    {
      body["ArrivalAirport"] = arrairport.current.value.toUpperCase();
      body3["DepartureAirport"] = depairport.current.value.toUpperCase();
    }
    if(date.current.value != "")
    {
      body["Date"] = date.current.value;
    }
    if(departure.current.value != "")
    {
      body["DepartureTime"] = departure.current.value;
    }
    if(arrival){
    if(arrival.current.value != "")
    {
      body["ArrivalTime"] = arrival.current.value;
    }
  }
    if (confirm){
      console.log(body)
    axios.post(`http://localhost:8000/flight/search`,body).then(res=> {setFlight(res.data);console.log(res.data)}).catch();
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
      label=" "
      inputRef={date}
      type= "date"
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
      label="Departure Time"
      inputRef={departure}
      type= "time"
      />
      < TextField
      label="Arrival Time"
      inputRef={arrival}
      type= "time"
      />
  
     
      
      </div>
      <Button variant="outlined" disableElevation onClick = {handle}>
      Search
    </Button><br></br>
    {searched ? (
        
     <TableContainer component={Paper}>
     <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
       <TableHead>
         <TableRow>
           <StyledTableCell align="center">FlightNumber</StyledTableCell>
           <StyledTableCell align="center">Date</StyledTableCell>
           <StyledTableCell align="center">From</StyledTableCell>
           <StyledTableCell align="center">To</StyledTableCell>
           <StyledTableCell align="center">Departure Airport</StyledTableCell>
           <StyledTableCell align="center">Arrival Airport</StyledTableCell>
           <StyledTableCell align="center">Departure Time</StyledTableCell>
           <StyledTableCell align="center">Arrival Time</StyledTableCell>
           <StyledTableCell align="center">Cabin</StyledTableCell>
           <StyledTableCell align="center">Available Seats</StyledTableCell>
           <StyledTableCell align="center">Trip duration</StyledTableCell>
           <StyledTableCell align="center">Allowed Baggage</StyledTableCell>
           <StyledTableCell align="center">Price</StyledTableCell>
           <StyledTableCell align="center">Reserve</StyledTableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {flight.map((a) => (
           <StyledTableRow
             key={a.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             
            
             <TableCell align="center">{a.FlightNumber}</TableCell>
             <TableCell align="center">{a.Date.substr(0, a.Date.indexOf('T'))}</TableCell>
             <TableCell align="center">{a.From}</TableCell>
             <TableCell align="center">{a.To}</TableCell>
             <TableCell align="center">{a.DepartureAirport}</TableCell>
             <TableCell align="center">{a.ArrivalAirport}</TableCell>
             <TableCell align="center">{a.DepartureTime}</TableCell>
             <TableCell align="center">{a.ArrivalTime}</TableCell>
             <TableCell align="center">{a.Cabin}</TableCell>
             <TableCell align="center">{a.AvailableSeats}</TableCell>
             <TableCell align="center">{a.TripDuration}</TableCell>
             <TableCell align="center">{a.BaggageAllowance}</TableCell>
             <TableCell align="center">{a.Price}</TableCell>
             <TableCell align="center">{<Button variant="contained" color="success" onClick={() => shoot(a)}
                >
      Reserve
    </Button>}</TableCell>
           </StyledTableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 )
       : (
        console.log("not yet")
        
      )}


      {information ? (
        <div>
                   <div>
       < TextField
      label="First Name"
      inputRef={first}
      />
      < TextField
      label="Last Name"
      inputRef={last}
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
      <Button variant="outlined" disableElevation onClick = {handle2}>
      Submit Information
    </Button><br></br>
        </div>  
       ):(
        console.log("not yet"))}
      


      {returnf ? (
        
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">FlightNumber</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">From</StyledTableCell>
              <StyledTableCell align="center">To</StyledTableCell>
              <StyledTableCell align="center">Departure Airport</StyledTableCell>
              <StyledTableCell align="center">Arrival Airport</StyledTableCell>
              <StyledTableCell align="center">Departure Time</StyledTableCell>
              <StyledTableCell align="center">Arrival Time</StyledTableCell>
              <StyledTableCell align="center">Cabin</StyledTableCell>
              <StyledTableCell align="center">Available Seats</StyledTableCell>
              <StyledTableCell align="center">Trip duration</StyledTableCell>
              <StyledTableCell align="center">Allowed Baggage</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Reserve</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {flight1.map((a) => (
              <StyledTableRow
                key={a.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                
               
                <TableCell align="center">{a.FlightNumber}</TableCell>
                <TableCell align="center">{a.Date.substr(0, a.Date.indexOf('T'))}</TableCell>
                <TableCell align="center">{a.From}</TableCell>
                <TableCell align="center">{a.To}</TableCell>
                <TableCell align="center">{a.DepartureAirport}</TableCell>
                <TableCell align="center">{a.ArrivalAirport}</TableCell>
                <TableCell align="center">{a.DepartureTime}</TableCell>
                <TableCell align="center">{a.ArrivalTime}</TableCell>
                <TableCell align="center">{a.Cabin}</TableCell>
                <TableCell align="center">{a.AvailableSeats}</TableCell>
                <TableCell align="center">{a.TripDuration}</TableCell>
                <TableCell align="center">{a.BaggageAllowance}</TableCell>
                <TableCell align="center">{a.Price}</TableCell>
                <TableCell align="center">{<Button variant="contained" color="success" onClick={() => shoot1(a)}
                   >
         Reserve
       </Button>}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
          : (
           console.log("not yet")
           
         )}

         {pay ? (

             <div>
                 <Button variant="contained" color="success" onClick={() => payment()}
                   >
         Pay
       </Button>
             </div>
         )   : (
           console.log("not yet")
           
         )}
    </Box>

   
   
   )}
   ReactDOM.render(<GuestSearch />, document.getElementById('root'));
   searched=false;