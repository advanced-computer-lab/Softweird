import logo from './logo.svg';
import './User.css';
import Home  from './components/Searchbar';
import ViewFlights from './components/ViewFlights';
import SearchFlight from './components/SearchFlight';
import UpdateUser from './components/UpdateUser';
import CancelReservation from './components/CancelReservation';
import ViewReservation from './components/ViewReservation';
import UserGuestSearch from './components/UserGuestSearch';
import DepReturn from './components/DepReturn';
import UserChooseSeats from './components/UserchooseSeats';
import UserNavigation from './components/UserNavigation';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {Link} from 'react-router-dom'
import Searchbar from './components/Searchbar';

function User() {
  return (
    <div className="User">
    
      
      <UserNavigation/>
      <Routes>
      
      <Route exact path ="/ViewFlights" element={<ViewFlights/>}/>
      <Route exact path ="/UserGuestSearch" element={<UserGuestSearch/>}/>
      <Route exact path = "/DepReturn" element={<DepReturn />}/>
      <Route exact path ="/UpdateUser" element={<UpdateUser/>}/>
      <Route exact path ="/ViewReservation" element={<ViewReservation/>}/>
      <Route exact path ="/UserChooseSeats" element={<UserChooseSeats/>}/>
      <Route exact path ="/CancelReservation" element={<CancelReservation/>}/>
      
     
      </Routes>
    </div>
  );
}

export default User;
