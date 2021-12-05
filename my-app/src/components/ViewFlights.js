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
export default function ViewFlights() {
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
         {l.map((a) => (
           <StyledTableRow
             key={a.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             
            
             <StyledTableCell align="left">{a.FlightNumber}</StyledTableCell>
             <StyledTableCell align="left">{a.Date.substr(0, a.Date.indexOf('T'))}</StyledTableCell>
             <StyledTableCell align="left">{a.From}</StyledTableCell>
             <StyledTableCell align="left">{a.To}</StyledTableCell>
             <StyledTableCell align="left">{a.DepartureAirport}</StyledTableCell>
             <StyledTableCell align="left">{a.ArrivalAirport}</StyledTableCell>
             <StyledTableCell align="left">{a.DepartureTime}</StyledTableCell>
             <StyledTableCell align="left">{a.ArrivalTime}</StyledTableCell>
             <StyledTableCell align="left">{a.Cabin}</StyledTableCell>
             <StyledTableCell align="left">{a.AvailableSeats}</StyledTableCell>
             <StyledTableCell align="left">{a.TripDuration}</StyledTableCell>
             <StyledTableCell align="left">{a.BaggageAllowance}</StyledTableCell>
             <StyledTableCell align="left">{a.Price}</StyledTableCell>
           </StyledTableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 )


    
  
}
