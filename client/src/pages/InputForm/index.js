import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  state = {
    property: ["2020 Main St", "100 Washington Ave", "450 West Blvd", "1330 Green St", "78 Bigsby Rd"],
    date: "",
    time: "",
    task: "",
    comments: ""
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
      firstName: "",
      lastName: ""
    });
  };

  render() {
    return (
      <div>
        <div class="dropdown">
          <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            {this.state.property.map(property => (
              <p>{property}</p>
            ))}
          </div>
        </div>
        <form className="form">
          <input
            value={this.state.date}
            name="date"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Date"
          />
          <input
            value={this.state.time}
            name="time"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Time"
          />
          <input
            value={this.state.task}
            name="task"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Task"
          />
          <input
            value={this.state.comments}
            name="comments"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Comments"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
