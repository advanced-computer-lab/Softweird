import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CancelReservation from './components/CancelReservation';
import App from './App'
import User from './User'
import Guest from './Guest'
import Signup from './Signup'
import Login from './login'
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {Footer,Header} from "./components/Index";
import CreateUser from './components/CreateUser';
import CreateReservation from './components/CreateReservation';
import DepReturn from './components/DepReturn';
import UserGuestSearch from './components/UserGuestSearch';
import ViewFlights from './components/ViewFlights';
import ViewFlightsUG from './components/ViewFlightsUG';
import UserSearch from './components/UserSearch';
import UpdateUser from './components/UpdateUser';
import ViewReservation from './components/ViewReservation';


import GuestSearch from './components/GuestSearch';
import Flightss from './components/Flightss';
import Changepassword from './components/Changepassword';


import UpdateFlight from './components/UpdateFlight';
import SearchFlight from './components/SearchFlight';
import Pickseats from './components/pickseats';




ReactDOM.render(
  <React.StrictMode>
 
 <Router>

 
  <Header/>
  <Routes>
  <Route exact path ="/ViewFlightsUG" element={<ViewFlightsUG/>}/>
   <Route exact path ="/UserSearch" element={<UserSearch/>}/>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/User" element={<User/>}/>
    <Route exact path="/App" element={<App/>}/>
    <Route exact path="/Signup" element={<Signup/>}/>
    <Route exact path ="/UpdateUser" element={<UpdateUser/>}/>
      <Route exact path ="/ViewReservation" element={<ViewReservation/>}/>
      <Route exact path ="/Flightss" element={<Flightss/>}/>
      <Route exact path ="/UpdateFlight" element={<UpdateFlight/>}/>
      <Route exact path ="/ViewFlights" element={<ViewFlights/>}/>
      <Route exact path ="/SearchFlight" element={<SearchFlight/>}/>
      <Route exact path ="/ViewFlightsUG" element={<ViewFlightsUG/>}/>
      <Route exact path ="/GuestSearch" element={<GuestSearch/>}/>
      <Route exact path ="/DepReturn" element={<DepReturn/>}/>
      <Route exact path ="/pickseats" element={<Pickseats/>}/>
      <Route exact path ="/Changepassword" element={<Changepassword/>}/>
      
      

  </Routes>
   <Footer/>
 
  </Router>,

  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
