import React, { Component } from "react";
import SearchForm from "./searchForm";
import API from '../../lib/API';
import IModal from "../Results/modal";

class SearchContainer extends Component {
 

  state = {
    search: "",
    trips: [],
  };

  // do a search here by making the location === this.state.search and show only ones that have that location.
  searchTrips = (search) => {
    console.log(search)
    API.Search.searchResults(search).then(res => {
      console.log(res.data)
      this.setState({
        trips: res.data
      });
    })
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTrips(this.state.search);
  };

  render() {
    return (
      <div className="homesearchcontainer" >
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <div>
          {this.state.trips.map(trip =>
            <div className="card" key={trip.user} id="homesearchcard">
              <div className="card-header text-center" id="homesearchhead">
                <h5 id="homesearchh5">{trip.location}</h5>
              </div>
              <div className="card-body">
                <h5 key={trip.user}>Days of Trip:</h5> <div> {trip.trip_length} </div>
                <hr />
                <h5>Trip Description: </h5>{" "}
                <div id="descript"> {trip.description} </div>
              </div>
              <IModal key={trip.user} tripInfo={trip.itinerary} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SearchContainer;