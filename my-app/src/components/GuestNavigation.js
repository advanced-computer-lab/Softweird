import React from "react";
import {Link} from 'react-router-dom'

function GuestNavigation(){

    return(
        <ul>
           
            <li>
                 <Link to="/ViewFlights">View Flights</Link>
            </li>
            <li>
                 <Link to="/UserGuestSearch">Search For Flight</Link>
            </li>
 
        </ul>
    )
}
export default GuestNavigation;