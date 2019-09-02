import React, { Component } from "react";

class TripGenres extends Component {
  state = {
    startPoint: "",
    endPoint: ""
  };

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h3>Genres</h3>
      </div>
    );
  }
}

export default TripGenres;
