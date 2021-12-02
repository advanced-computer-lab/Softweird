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
            <li>
                 <Link to="/UpdateUser">Update My Information</Link>
            </li>
            <li>
                 <Link to="/ViewReservation">View My Reservations</Link>
            </li>
            <li>
                 <Link to="/CancelReservation">Cancel My Reservation</Link>
            </li>
        </ul>
    )
}
export default UserNavigation;