import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Flightss from './components/Flightss';


import ViewFlights from './components/ViewFlights';
import DeleteFlight from './components/DeleteFlight';
import UpdateFlight from './components/UpdateFlight';
import SearchFlight from './components/SearchFlight';
ReactDOM.render(
  <React.StrictMode>
   
    Create Flight
    <Flightss/>
    
    All Flights
    <ViewFlights/>
    
    Delete Flight
    <DeleteFlight/>
   
    Update Flight
    <UpdateFlight/>
   
    Search For A Flight
    <SearchFlight/>

    User search For A Flight
    <SearchFlight/>

    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
