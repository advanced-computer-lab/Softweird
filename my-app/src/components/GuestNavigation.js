import React from "react";
import {Link} from 'react-router-dom'

function GuestNavigation(){

    return(
        <ul>
         

<div>
     <Link to="/ViewFlightsUG"  className= "Guest-link" >View Flights</Link>
</div>
<div>
     <Link to="/GuestSearch" className= "Guest-link">Search For Flight</Link>
</div>



 
        </ul>
    )
}
export default GuestNavigation;