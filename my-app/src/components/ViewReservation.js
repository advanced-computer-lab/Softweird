import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './background.css';



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
const shoot = (a) => {
  const res1= {};
  res1["FirstName"] = sessionStorage.getItem("firstname");
  res1["LastName"] = sessionStorage.getItem("lastname");
  res1["PassportNumber"] = sessionStorage.getItem("passportnumber");
  res1["Email"] = sessionStorage.getItem("email");
  res1["FlightNumber"] = a.FlightNumber;
  res1["From"] = a.From;
  res1["To"] = a.To;
  res1["DepartureAirport"] = a.DepartureAirport;
  res1["ArrivalAirport"] = a.ArrivalAirport;
  res1["NumberOfBags"] = a.BaggageAllowance;
   console.log(a);
  axios.delete(`http://localhost:8000/reservation/delete-Reservation/${a.FlightNumber}`,res1).then(res=> console.log(res)).catch();
  const r={};
  r["Email"]=sessionStorage.getItem("email");
  axios.post(`http://localhost:8000/reservation/nodemailer`,r).then(r => {}).catch()




 }
 


export default function ViewReservation() {
  const [l,setL] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const body={};
      body["Email"]= sessionStorage.getItem("email");
      axios.post(`http://localhost:8000/reservation/search`,body).then(r => {setL(r.data);console.log(r.data)}).catch()

  
    }
  , [])
  const edit = (a) => {
    const res2= {};
    res2["FirstName"] = sessionStorage.getItem("firstname");
    res2["LastName"] = sessionStorage.getItem("lastname");
    res2["PassportNumber"] = sessionStorage.getItem("passportnumber");
    res2["Email"] = sessionStorage.getItem("email");
    res2["FlightNumber"] = a.FlightNumber;
    res2["From"] = a.From;
    res2["To"] = a.To;
    res2["DepartureAirport"] = a.DepartureAirport;
    res2["ArrivalAirport"] = a.ArrivalAirport;
    res2["NumberOfBags"] = a.BaggageAllowance;
     console.log(a);
    axios.delete(`http://localhost:8000/reservation/delete-Reservation/${a.FlightNumber}`,res2).then(res=> console.log(res)).catch();
    navigate("/UserSearch");
   }
  const seat = (a) => {
   
    navigate('/pickseats');
   }


  return (
    
    <div className='background'>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
     
      <StyledTableCell align="center">Name</StyledTableCell>
      <StyledTableCell align="center">Flightnumber</StyledTableCell>
      <StyledTableCell align="center">From</StyledTableCell>
      <StyledTableCell align="center">To</StyledTableCell>
      <StyledTableCell align="center">DepartureAirport</StyledTableCell>
      <StyledTableCell align="center">ArrivalAirport</StyledTableCell>
      <StyledTableCell align="center">NumberOfBags</StyledTableCell>
      <StyledTableCell align="center">Choose Seats</StyledTableCell>
      <StyledTableCell align="center">Edit Reservation</StyledTableCell>
      <StyledTableCell align="center">Delete Reservation</StyledTableCell>
    
    </TableRow>
  </TableHead>
  <TableBody>
    {l.map((a) => (
      <StyledTableRow
        key={a.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        
       
        <StyledTableCell align="center">{a.FirstName}</StyledTableCell>
        <StyledTableCell align="center">{a.FlightNumber}</StyledTableCell>
        <StyledTableCell align="center">{a.From}</StyledTableCell>
        <StyledTableCell align="center">{a.To}</StyledTableCell>
        <StyledTableCell align="center">{a.DepartureAirport}</StyledTableCell>
        <StyledTableCell align="center">{a.ArrivalAirport}</StyledTableCell>
        <StyledTableCell align="center">{a.NumberOfBags}</StyledTableCell>
        <StyledTableCell align="center">{<Button variant="contained" color="error" onClick={() => seat(a)}>
      Choose Seats
    </Button>}</StyledTableCell>
        <StyledTableCell align="center">{<Button variant="contained" color="error" onClick={() => edit(a)}>
      Edit Reservation
    </Button>}</StyledTableCell>
        <StyledTableCell align="center">{<Button variant="contained" color="error" onClick={() => shoot(a)}>
      Cancel
    </Button>}</StyledTableCell>
        
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
</div>
  )
}
