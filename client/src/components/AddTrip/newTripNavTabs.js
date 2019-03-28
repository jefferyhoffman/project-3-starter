import React from "react";
import { Link } from "react-router-dom";

function NewTripNavTabs() {
  return (
    // <div className="addtotheit">
    <div className="newtriptab">
     <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/add" className={window.location.pathname === "/add" ? "nav-link active" : "nav-link"} >
    New Trip
    </Link>
      </li>
      <div className="addbtn">
      <li className="nav-item">
        <Link
        
          to="/mytrips"
          className={window.location.pathname === "/mytrips" ? "nav-link active" : "nav-link"}
        >
          My Trips
        </Link> 
      </li>
      {/* <li className="nav-item">
        <Link
          to="/add/review"
          className={window.location.pathname === "/add/review" ? "nav-link active" : "nav-link"}
        >
          Review
        </Link>
      </li> */}
    </div>
    </ul>
    </div>
  );
}

export default NewTripNavTabs;