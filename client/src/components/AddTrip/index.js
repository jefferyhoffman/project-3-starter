import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTripNavTabs from "./newTripNavTabs";
import Form from "./Form";
import UserTrips from '../../pages/UserTrips/userTrips';
import "./style.css";

class AddNewTrip extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1 className="aann">Add A Trip</h1> <hr />
          <NewTripNavTabs  />
          <Route exact path="/add" component={Form} />
          <Route exact path="/mytrips" component={UserTrips} />
        </div>
      </Router>
    );
  }
}

export default AddNewTrip;
