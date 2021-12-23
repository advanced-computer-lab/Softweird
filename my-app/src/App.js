import logo from './logo.svg';
import './App.css';
import Home  from './components/Searchbar';
import Flightss from './components/Flightss';
import UpdateFlight from './components/UpdateFlight';
import ViewFlights from './components/ViewFlights';
import SearchFlight from './components/SearchFlight';
import UpdateUser from './components/UpdateUser';
import CancelReservation from './components/CancelReservation';
import ViewReservation from './components/ViewReservation';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {Link} from 'react-router-dom'
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App" >

      <Navigation/>
      <Routes>

      <Route exact path ="/Flightss" element={<Flightss/>}/>
      <Route exact path ="/UpdateFlight" element={<UpdateFlight/>}/>
      <Route exact path ="/ViewFlights" element={<ViewFlights/>}/>
      <Route exact path ="/SearchFlight" element={<SearchFlight/>}/>


      </Routes>
    </div>




  );
}

export default App;
