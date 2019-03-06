import React, { Component } from "react";
import API from "../../lib/API";
import IModal from "./modal";

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
      <div className="container">
        <h1 style={{ textAlign: "center" }}>My Trips</h1>
        {this.state.trips.map(trip =>
        <div className="card" style={{ width: "40vh", float: "left" }}>
          <div className="card-header text-center">
            <h5 key={trip.user}>{trip.location}</h5>
          </div>
          <div className="card-body">
            <h5 key={trip.user}>Days of Trip:</h5> <div> {trip.trip_length} </div>
            <hr />
            <h5>Trip Description: </h5>{" "}
            <div key={trip.user}> {trip.description} </div>
          </div>
         <IModal tripInfo={trip.itinerary}/>
          
        </div>  
        )}
</div>
    );
  }
}

export default ResultContainer;
