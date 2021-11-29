import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Flightss from './components/Flightss';
import Searchbar from './components/Home';
import ViewReservation from './components/ViewReservation';
import ViewFlights from './components/ViewFlights';
import DeleteFlight from './components/DeleteFlight';
import UpdateFlight from './components/UpdateFlight';
import SearchFlight from './components/SearchFlight';
import UpdateUser from './components/UpdateUser';
import CancelReservation from './components/CancelReservation';

ReactDOM.render(
  <React.StrictMode>
 
    
    <Searchbar/>
   
    Create Flight
    <Flightss/>
    
    All reservations
    <ViewReservation/>

    Cancel Reservation
    <CancelReservation/>

    All Flights
    <ViewFlights/>
    
    Delete Flight
    <DeleteFlight/>
   
    Update Flight
    <UpdateFlight/>
   
    Search For A Flight
    <SearchFlight/>
    
    Update user
    <UpdateUser/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
