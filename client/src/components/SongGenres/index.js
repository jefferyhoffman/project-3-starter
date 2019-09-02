import React, { Component } from "react";

class SongGenres extends Component {
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
        <h3 className="text-center">Genres</h3>
      </div>
    );
  }
}

export default SongGenres;
