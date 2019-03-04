import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Form extends Component {
  state = {
    destination: "",
    tripDays: "",
    shortDescription: "",
    tripImages: []
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
      shortDescription: "",
      tripImages: []
    });
    alert("Trip Information Submited");
  };
  render() {
    return (
      <div className="formz">
        
        <div className ="container" style={{boxShadow:"5px 5px 5px 5px #999"}}>
      <div className="form-group">
      <br/>
        <h4>Enter New Trip</h4>
        <hr />
        <form onSubmit={this.handleFormSubmit}>
         <div className="row">
          <div className="col-md-7">
            <label>
              <h5>Destination:</h5>
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
          <div className="col-md-5">
            <label>
              <h5>Trip Days:</h5>
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
          </div>
          <hr />
          <div className="row">
          <div className="col-md-12">
            <label>
              <h5 className="short">Short Description:</h5>
            </label>
            <br/>
            <textarea
              className="shortDescription"
              rows="5"
              value={this.state.shortDescription}
              name="shortDescription"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Brief Description of your trip"
            />
          </div>
          </div>
          <hr />
        
          <div className="row">
          <div className="col-lg-6">
           <label>
              <h4>Upload Images: </h4>
            </label>
            <input
              className="img-input"
              value={this.state.tripImages}
              name="tripImages"
              onChange={this.handleInputChange}
              type="file"
            />
          </div>
           
          </div>
          <hr />
          <Link
          to="/add/additinerary"
          className={window.location.pathname === "/add/additinerary" ? "nav-link active" : "nav-link"}
        >
          <button className="btn btn-primary  btn-lg" style={{float:"right"}}>Next</button></Link>
          <br/>
          <br/>
          <hr/>
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default Form;