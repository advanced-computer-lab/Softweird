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
  const body1= {};
   body1["Name"] = "Med7t";
   body1["userID"] = "7";
   body1["FlightNumber"] = a.FlightNumber;
   body1["From"] = a.From;
   body1["To"] = a.To;
   body1["DepartureAirport"] = a.DepartureAirport;
   body1["ArrivalAirport"] = a.ArrivalAirport;
   body1["NumberOfBags"] = "2";
   console.log(a);
  axios.delete(`http://localhost:8000/reservation/delete-Reservation/${a.FlightNumber}`,body1).then(res=> console.log(res)).catch();
 }
 const edit = (a) => {
  const body1= {};
   body1["Name"] = "Med7t";
   body1["userID"] = "7";
   body1["FlightNumber"] = a.FlightNumber;
   body1["From"] = a.From;
   body1["To"] = a.To;
   body1["DepartureAirport"] = a.DepartureAirport;
   body1["ArrivalAirport"] = a.ArrivalAirport;
   body1["NumberOfBags"] = "2";
   console.log(a);
  axios.delete(`http://localhost:8000/reservation/delete-Reservation/${a.FlightNumber}`,body1).then(res=> console.log(res)).catch();

 }
 const seat = (a) => {

 }

export default function ViewReservation() {
  const [l,setL] = useState([]);

  useEffect(() => {
    console.log("reservation is here");
  axios.get(`http://localhost:8000/reservation/get-all-reservations`).then(r => {setL(r.data);console.log(r.data)}).catch()
    }
  , [])


  return (
    
    
<TableContainer component={Paper}>
<Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
     
      <StyledTableCell align="center">Name</StyledTableCell>
      <StyledTableCell align="center">userID</StyledTableCell>
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
        
       
        <StyledTableCell align="center">{a.Name}</StyledTableCell>
        <StyledTableCell align="center">{a.userID}</StyledTableCell>
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
  )
}
