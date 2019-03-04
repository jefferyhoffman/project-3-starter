import React from "react";
import { Link } from "react-router-dom";

function NewTripNavTabs() {
  return (
    // <div className="addtotheit">
    <div className="newtriptab">
     <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/add" className={window.location.pathname === "/add" ? "nav-link active" : "nav-link"}>
         Add Trip
        </Link>
      </li>
      <div className="addbtn">
      <li className="nav-item">
        <Link
        
          to="/add/additinerary"
          className={window.location.pathname === "/add/additinerary" ? "nav-link active" : "nav-link"}
        >
          Add Itinerary
        </Link>
      </li>
      </div>
      </ul>
      
    </div>
    // </div> this is the tab add
    
   
  );
}

export default NewTripNavTabs;