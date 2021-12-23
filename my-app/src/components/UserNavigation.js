import React from "react";
import {Link} from 'react-router-dom'


function UserNavigation(){

    return(
        <div>

            <div>
                 <Link to="/ViewFlightsUG"  className= "User-link" >View Flights</Link>
            </div>
            <div>
                 <Link to="/UserGuestSearch" className= "User-link">Search For Flight</Link>
            </div>
            <div>
                 <Link to="/UpdateUser" className= "User-link">Update My Information</Link>
            </div>
            <div>
                 <Link to="/ViewReservation" className= "User-link">View My Reservations</Link>
            </div>
            
        </div>
    )
}
export default UserNavigation;