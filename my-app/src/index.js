import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Flights,
  Posts,
  Post,
} from "./components/Index";


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
 
 <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<Flightss />} />
      <Route path="/Contact" element={<UpdateFlight />} />
      <Route path="/blog" element={<Flights />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
