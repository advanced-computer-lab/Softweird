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
   
  axios.delete(`http://localhost:8000/reservation/delete-Reservation/${a.FlightNumber.current.value}`,body1).then(res=> console.log(res)).catch();
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
     
      <StyledTableCell align="Left">Name</StyledTableCell>
      <StyledTableCell align="Left">userID</StyledTableCell>
      <StyledTableCell align="Left">Flightnumber</StyledTableCell>
      <StyledTableCell align="Left">From</StyledTableCell>
      <StyledTableCell align="Left">To</StyledTableCell>
      <StyledTableCell align="Left">DepartureAirport</StyledTableCell>
      <StyledTableCell align="Left">ArrivalAirport</StyledTableCell>
      <StyledTableCell align="Left">NumberOfBags</StyledTableCell>
      <StyledTableCell align="Left">Delete Reservation</StyledTableCell>
    
    </TableRow>
  </TableHead>
  <TableBody>
    {l.map((a) => (
      <StyledTableRow
        key={a.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        
       
        <StyledTableCell align="left">{a.Name}</StyledTableCell>
        <StyledTableCell align="left">{a.userID}</StyledTableCell>
        <StyledTableCell align="left">{a.FlightNumber}</StyledTableCell>
        <StyledTableCell align="left">{a.From}</StyledTableCell>
        <StyledTableCell align="left">{a.To}</StyledTableCell>
        <StyledTableCell align="left">{a.DepartureAirport}</StyledTableCell>
        <StyledTableCell align="left">{a.ArrivalAirport}</StyledTableCell>
        <StyledTableCell align="left">{a.NumberOfBags}</StyledTableCell>
        <StyledTableCell align="left">{<Button variant="contained" color="error" onClick={() => shoot(a)}>
      Remove
    </Button>}</StyledTableCell>
        
      </StyledTableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
  )
}
