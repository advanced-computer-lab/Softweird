import React from "react";
import {Link} from 'react-router-dom'


function UserNavigation(){

    return(
        <ul>

            <li>
                 <Link to="/ViewFlights"  className= "User-link" >View Flights</Link>
            </li>
            <li>
                 <Link to="/UserGuestSearch" className= "User-link">Search For Flight</Link>
            </li>
            <li>
                 <Link to="/UpdateUser" className= "User-link">Update My Information</Link>
            </li>
            <li>
                 <Link to="/ViewReservation" className= "User-link">View My Reservations</Link>
            </li>
            
        </ul>
    )
}
export default UserNavigation;