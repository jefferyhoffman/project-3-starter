import React, { Component } from "react";
import SearchForm from "./searchForm";
import API from '../../lib/API';


class SearchContainer extends Component {
  state = {
    search: "",
  };


  // do a search here by making the location === this.state.search and show only ones that have that location.
    searchTrips= () => {
      API.Trips.tripResults(this.context.trip).then(res => {
        this.setState({
          trips: res.data});
        console.log(res.data);
      
    })
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTrips(this.state.search);
    console.log(this.state.search)
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default SearchContainer;