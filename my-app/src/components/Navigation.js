import React from "react";
import {Link} from 'react-router-dom'

function Navigation(){

    return(
        <ul>
           
            <li>
                 <Link to="/Flightss">Create Flight</Link>
            </li>
            <li>
                 <Link to="/UpdateFlight">Update Flight</Link>
            </li>
            <li>
                 <Link to="/DeleteFlight">Delete Flight</Link>
            </li>
            <li>
                 <Link to="/ViewFlights">View Flights</Link>
            </li>
            <li>
                 <Link to="/SearchFlight">Search For Flight</Link>
            </li>
        </ul>
    )
}
export default Navigation;