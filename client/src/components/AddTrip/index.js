import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewTripNavTabs from "./newTripNavTabs";
import Form from "./Form";
import ItinList from "./itinList";
import "./style.css";

function AddNewTrip() {
  return (
    <Router>
      <div>
          <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-11">
        <NewTripNavTabs />
        <Route exact path="/add" component={Form} />
        <Route exact path="/add/additinerary" component={ItinList} />
        </div></div>
      </div>
    </Router>
  );
}

export default AddNewTrip;