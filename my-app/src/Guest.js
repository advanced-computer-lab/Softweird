import logo from './logo.svg';
import './User.css';
import Home  from './components/Searchbar';
import ViewFlights from './components/ViewFlights';
import SearchFlight from './components/SearchFlight';
import UpdateUser from './components/UpdateUser';
import CancelReservation from './components/CancelReservation';
import ViewReservation from './components/ViewReservation';
import GuestNavigation from './components/GuestNavigation';
import UserGuestSearch from './components/UserGuestSearch';
import DepReturn from './components/DepReturn';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {Link} from 'react-router-dom'
import Searchbar from './components/Searchbar';

function Guest() {
  return (
    <div className="Guest">
    
      
      <GuestNavigation/>
      <Routes>
      
      <Route exact path ="/ViewFlights" element={<ViewFlights/>}/>
      <Route exact path ="/UserGuestSearch" element={<UserGuestSearch/>}/>
      <Route exact path ="/DepReturn" element={<DepReturn/>}/>
     
      </Routes>
    </div>
  );
}

export default Guest;
