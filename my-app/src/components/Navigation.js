import React from "react";
import {Link} from 'react-router-dom'

function Navigation(){

    return(
     <div> 

     <div>
          <Link to="/Flightss"  className= "App-link">Create Flight</Link>
     </div>
     <div>
          <Link to="/UpdateFlight" className= "App-link">Update Flight</Link>
     </div>
         
     <div>
          <Link to="/ViewFlights" className= "App-link">View Flights</Link>
     </div>
     <div>
          <Link to="/SearchFlight" className= "App-link">Search For Flight</Link>
    </div>
         
 </div>
    )
}
export default Navigation;