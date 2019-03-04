import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTripNavTabs from "./newTripNavTabs";
import Form from "./Form";
import ItinList from "./itinList";
import "./style.css";

function AddNewTrip() {
  return (
    <Router>
      <div className="container"> 
        <h1 className="aann">Add a New Trip</h1> <hr/>
        <NewTripNavTabs />
        <Route exact path="/add" component={Form} />
        <Route exact path="/add/additinerary" component={ItinList} />
        
      </div>
    </Router>
  );
}

export default AddNewTrip;