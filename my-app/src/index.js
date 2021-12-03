import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Flightss from './components/Flightss';
import Searchbar from './components/Searchbar';
import ViewReservation from './components/ViewReservation';
import ViewFlights from './components/ViewFlights';
import DeleteFlight from './components/DeleteFlight';
import UpdateFlight from './components/UpdateFlight';
import SearchFlight from './components/SearchFlight';
import UpdateUser from './components/UpdateUser';
import CancelReservation from './components/CancelReservation';
import App from './App'
import User from './User'
import Guest from './Guest'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

import {Footer,Header} from "./components/Index";
import CreateUser from './components/CreateUser';
import CreateReservation from './components/CreateReservation';
import DepReturn from './components/DepReturn';
import UserGuestSearch from './components/UserGuestSearch';

ReactDOM.render(
  <React.StrictMode>
 
 <Router>
  <Header/>
  <App/>
   <Footer/>
  </Router>,

  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
