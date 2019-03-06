import React, { Component } from "react";
import API from "../../lib/API";
import IModal from "./modal";
import "./results.css"

class ResultContainer extends Component {
  state = {
    trips: []
  };
  // do a if statement here that if the user logged in equals the user in the database show the information.
  componentDidMount() {
    API.Trips.tripResults(this.context.trip).then(res => {
      this.setState({
        trips: res.data
      });
      console.log(res.data);
      console.log(res);
      console.log(this.state.trips);
    });
  }
  render() {
    return (
      <div className="resulthtml">
        <div className="jumbotron">
          <h1 id="resultsh1">My Trips</h1>
        </div>
        <div className="container" id="resultcontainer">
          {this.state.trips.map(trip =>
            <div className="card" id="resultcard">
              <div className="card-header text-center" id="cardhead">
                <h5 key={trip.user} id="resultsh5">{trip.location}</h5>
              </div>
              <div className="card-body">
                <h5 key={trip.user}>Days of Trip:</h5> <div> {trip.trip_length} </div>
                <hr />
                <h5>Trip Description: </h5>{" "}
                <div key={trip.user}> {trip.description} </div>
              </div>
              <IModal tripInfo={trip.itinerary} />

            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ResultContainer;
