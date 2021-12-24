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

ReactDOM.render(
  <React.StrictMode>
 
 <Router>

  <div className="App">
  <Header/>
  <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/user" element={<User/>}/>
    <Route exact path="/App" element={<App/>}/>
    <Route exact path="/Signup" element={<Signup/>}/>

  </Routes>
   <Footer/>
   </div>
  </Router>,

  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
