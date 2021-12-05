import React from "react";
import {Link} from 'react-router-dom'


function UserNavigation(){

    return(
        <ul>

            <li>
                 <Link to="/ViewFlights"  className= "User-link" >View Flights</Link>
            </li>
            <li>
                 <Link to="/SearchFlight" className= "User-link">Search For Flight</Link>
            </li>
            <li>
                 <Link to="/UpdateUser" className= "User-link">Update My Information</Link>
            </li>
            <li>
                 <Link to="/ViewReservation" className= "User-link">View My Reservations</Link>
            </li>
            <li>
                 <Link to="/CancelReservation" className= "User-link">Cancel My Reservation</Link>
            </li>
        </ul>
    )
}
export default UserNavigation;