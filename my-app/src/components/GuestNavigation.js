import React from "react";
import {Link} from 'react-router-dom'

function UserNavigation(){

    return(
        <ul>
           
            <li>
                 <Link to="/ViewFlights">View Flights</Link>
            </li>
            <li>
                 <Link to="/SearchFlight">Search For Flight</Link>
            </li>
 
        </ul>
    )
}
export default UserNavigation;