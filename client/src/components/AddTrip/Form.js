import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  state = {
    destination: "",
    tripDays: "",
    shortDescription: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      destination: "",
      tripDays: "",
      shortDescription: ""
    });
    alert("Trip Information Submited");
  };
  render() {
    return (
      <div className="form-group">
        <h4>Enter New Trip</h4>
        <hr />
        <form onSubmit={this.handleFormSubmit}>
          <div className="col-md-12">
            <label>
              <h4>Destination:</h4>
            </label>
            <input
              className="destForm"
              value={this.state.destination}
              name="destination"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter Destination"
            />
          </div>
          <hr />
          <div className="col-md-12">
            <label>
              <h4>Trip Days:</h4>
            </label>
            <input
              className="tripDays"
              value={this.state.tripDays}
              name="tripDays"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Total Days of Trip"
            />
          </div>
          <hr />
          <div className="col-md-12">
            <label>
              <h4>Short Description:</h4>
            </label>
            <textarea
              className="shortDescription"
              value={this.state.shortDescription}
              name="shortDescription"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Brief Description of your trip"
            />
          </div>
          <hr />
          <div className="col-md-6">
            <label>
              <h4>Upload Images:</h4>
            </label>
            <input
              value={this.state.tripImages}
              name="tripImages"
              onChange={this.handleInputChange}
              type="file"
            />
          </div>
          <hr />
          <button className="btn btn-primary">Submit Trip</button>
        </form>
      </div>
    );
  }
}

export default Form;
