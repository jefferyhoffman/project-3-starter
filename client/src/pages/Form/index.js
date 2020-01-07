import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    property: ["2020 Main St", "100 Washington Ave", "450 West Blvd", "1330 Green St", "78 Bigsby Rd"],
    date: "",
    time: "",
    task: "",
    comments: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
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
