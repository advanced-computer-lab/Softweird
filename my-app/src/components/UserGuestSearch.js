import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useState,useEffect,useRef} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import ReactDOM from "react-dom";
import { styled } from '@mui/material/styles';
import TableCell ,{ tableCellClasses }from '@mui/material/TableCell';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

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
  const [flight,setFlight] = useState();
  const [confirm,setConfirm] = useState(false);
  const [confirm1,setConfirm1] = useState(false);
  const [Cabin, setCabin] = React.useState('');
  const [seat, setseat] = React.useState('');


  function handle(){
    // set the flight to be searched for
    setConfirm(true);
    searched=true;
    
  }
  function handle1(x){
    // set the flight to be searched for
   // setConfirm1(true); 
   console.log("doneeee")
  }

  const shoot = (a) => {
   const body1= {};
   body1["Name"] = "Med7t";
   body1["userID"] = "7";
   body1["FlightNumber"] = a.FlightNumber;
   body1["From"] = a.From;
   body1["To"] = a.To;
   body1["DepartureAirport"] = a.DepartureAirport;
   body1["ArrivalAirport"] = a.ArrivalAirport;
   body1["NumberOfBags"] = "2";
   alert("are you sure?")
   axios.post(`http://localhost:8000/reservation/create-Reservation`,body1).then(res=> {console.log(res.data)}).catch();
    setConfirm(false);
  }
  
  const handleChange = (event) => {
    setCabin(event.target.value);
   setseat(event.target.value);
  };

  const depairport = useRef('');
  const arrairport = useRef('');
  const cabin = useRef('');
  const availableseats = useRef('');
  const departure = useRef('');
  const arrival = useRef('');
  
  
 
  
 
  useEffect(() => {
    const body = {};

    if(depairport.current.value != "")
    {
      body["DepartureAirport"] = depairport.current.value;
    }
    if(arrairport.current.value != "")
    {
        body["ArrivalAirport"] = arrairport.current.value;
    }
    if(cabin.current.value != "")
    {
        body["Cabin"] = cabin.current.value;
    }
    if(availableseats.current.value != "")
    {
        body["AvailableSeats"] = availableseats.current.value;
    }
    if(departure.current.value != "")
    {
      body["DepartureTime"] = departure.current.value;
    }
    if(arrival.current.value != "")
    {
      body["ArrivalTime"] = arrival.current.value;
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
      label="Departure Airport"
      inputRef={depairport}
      />
      < TextField
      label="Arrival Airport"
      inputRef={arrairport}
      />
     <FormControl sx={{ m: 1, minWidth: 200 }}><InputLabel id="demo-simple-select-label">Cabin</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Cabin}
    label="cabin"
    inputRef={cabin}
    onChange={handleChange}
  >
    <MenuItem value={"Economy"}>Economy</MenuItem>
    <MenuItem value={"Business"}>Business</MenuItem>
    <MenuItem value={"First"}>First</MenuItem>
  </Select>
</FormControl>
      < TextField
      label="Available Seats"
      inputRef={availableseats}
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
        
      </div><br></br>
      <Button variant="outlined" disableElevation onClick = {handle}>
      Search
    </Button>
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
              <StyledTableCell align="Left">No.of seats</StyledTableCell>
              <StyledTableCell align="Left">reserve</StyledTableCell>
            </TableRow>
          </TableHead>
          {flight?  (
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
                <TableCell align="left">{ <FormControl sx={{ m: 1, minWidth: 90 }}><InputLabel id="demo-simple-select-label"></InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   
    label=" "
   
    onChange={handleChange}
  >
    <MenuItem value={"1"}>1</MenuItem>
    <MenuItem value={"2"}>2</MenuItem>
    <MenuItem value={"3"}>3</MenuItem>
    <MenuItem value={"4"}>4</MenuItem>
    <MenuItem value={"5"}>5</MenuItem>
    <MenuItem value={"6"}>6</MenuItem>
  </Select>
</FormControl>}</TableCell>
                <TableCell align="left">{<Button variant="contained" color="success" onClick={() => shoot(a)}
                >
      Reserve
    </Button>}</TableCell>
              </StyledTableRow>
            ))}
           
          </TableBody>
           ):(console.log("not yet"))}
        </Table>
      </TableContainer>
    )
          : (
           console.log("not yet")
           
         )}
      

    </Box>

   
   
   )}
   ReactDOM.render(<SearchFlight />, document.getElementById('root'));