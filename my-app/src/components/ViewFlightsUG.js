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
export default function ViewFlightsUG() {
  const [l,setL] = useState([]);

  useEffect(() => {
    console.log("here");
  axios.get(`http://localhost:8000/flight/get-all-flights`).then(r => {setL(r.data);console.log(r.data)}).catch()
    }
  , [])


  return (
  
     <TableContainer component={Paper}>
     <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
       <TableHead>
         <TableRow>
           <StyledTableCell>FlightNumber</StyledTableCell>
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
         </TableRow>
       </TableHead>
       <TableBody>
         {l.map((a) => (
           <StyledTableRow
             key={a.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             
            
             <StyledTableCell align="center">{a.FlightNumber}</StyledTableCell>
             <StyledTableCell align="center">{a.Date.substr(0, a.Date.indexOf('T'))}</StyledTableCell>
             <StyledTableCell align="center">{a.From}</StyledTableCell>
             <StyledTableCell align="center">{a.To}</StyledTableCell>
             <StyledTableCell align="center">{a.DepartureAirport}</StyledTableCell>
             <StyledTableCell align="center">{a.ArrivalAirport}</StyledTableCell>
             <StyledTableCell align="center">{a.DepartureTime}</StyledTableCell>
             <StyledTableCell align="center">{a.ArrivalTime}</StyledTableCell>
             <StyledTableCell align="center">{a.Cabin}</StyledTableCell>
             <StyledTableCell align="center">{a.AvailableSeats}</StyledTableCell>
             <StyledTableCell align="center">{a.TripDuration}</StyledTableCell>
             <StyledTableCell align="center">{a.BaggageAllowance}</StyledTableCell>
             <StyledTableCell align="center">{a.Price}</StyledTableCell>
           </StyledTableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 )


    
  
}
