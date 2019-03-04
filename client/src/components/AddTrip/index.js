import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTripNavTabs from "./newTripNavTabs";
import Form from "./Form";
import ItinList from "./itinList";
import Review from "./review"
import "./style.css";


function AddNewTrip() {
  return (
    <Router>
      <div className="container"> 
        <h1>Add a New Trip</h1> <hr/>
        <NewTripNavTabs />
        <Route exact path="/add" component={Form} />
        <Route exact path="/add/additinerary" component={ItinList} />
        <Route exact path="/add/review" component ={Review} />        
      </div>
    </Router>
  );
}

export default AddNewTrip;