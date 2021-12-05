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

export default function SearchFlight() {
  const [flight,setFlight] = useState([]);
  const [confirm,setConfirm] = useState(false);
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
  const departure= useRef('');
  const arrival = useRef('');
  const date = useRef('');
  const depairport = useRef('');
  const arrairport = useRef('');
 
  useEffect(() => {
    const body = {};
 
    if(fn.current.value != "")
    {
      body["FlightNumber"] = fn.current.value.toUpperCase()  ;
    }
    if(depairport.current.value != "")
    {
      body["DepartureAirport"] = depairport.current.value.toUpperCase()  ;
    }
    if(arrairport.current.value != "")
    {
      body["ArrivalAirport"] = arrairport.current.value.toUpperCase() ;
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
           <StyledTableCell>FlightNumber</StyledTableCell>
           <StyledTableCell align="Left">Date</StyledTableCell>
           <StyledTableCell align="Left">From</StyledTableCell>
           <StyledTableCell align="Left">To</StyledTableCell>
           <StyledTableCell align="Left">Departure Airport</StyledTableCell>
           <StyledTableCell align="Left">Arrival Airport</StyledTableCell>
           <StyledTableCell>Departure Time</StyledTableCell>
           <StyledTableCell align="Left">Arrival Time</StyledTableCell>
           <StyledTableCell align="Left">Cabin</StyledTableCell>
           <StyledTableCell align="Left">Available Seats</StyledTableCell>
           <StyledTableCell align="Left">Trip duration</StyledTableCell>
           <StyledTableCell align="Left">Allowed Baggage</StyledTableCell>
           <StyledTableCell align="Left">Price</StyledTableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {flight.map((a) => (
           <StyledTableRow
             key={a.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             
            
             <TableCell align="left">{a.FlightNumber}</TableCell>
             <TableCell align="left">{a.Date.substr(0, a.Date.indexOf('T'))}</TableCell>
             <TableCell align="left">{a.From}</TableCell>
             <TableCell align="left">{a.To}</TableCell>
             <TableCell align="left">{a.DepartureAirport}</TableCell>
             <TableCell align="left">{a.ArrivalAirport}</TableCell>
             <TableCell align="left">{a.DepartureTime}</TableCell>
             <TableCell align="left">{a.ArrivalTime}</TableCell>
             <TableCell align="left">{a.Cabin}</TableCell>
             <TableCell align="left">{a.AvailableSeats}</TableCell>
             <TableCell align="left">{a.TripDuration}</TableCell>
             <TableCell align="left">{a.BaggageAllowance}</TableCell>
             <TableCell align="left">{a.Price}</TableCell>
           </StyledTableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 )
       : (
        console.log("not yet")
        
      )}
      

    </Box>

   
   
   )}
   ReactDOM.render(<SearchFlight />, document.getElementById('root'));
   searched=false;