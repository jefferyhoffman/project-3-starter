import React from "react";
import { Link } from "react-router-dom";

function NewTripNavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/add" className={window.location.pathname === "/add" ? "nav-link active" : "nav-link"}>
         Add Trip
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/add/additinerary"
          className={window.location.pathname === "/add/additinerary" ? "nav-link active" : "nav-link"}
        >
          Add Itinerary
        </Link>
      </li>
    </ul>
  );
}

export default NewTripNavTabs;