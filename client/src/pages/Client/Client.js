import React, { Component } from 'react';

class Form extends Component {
  state = {
    property: ["2020 Main St", "100 Washington Ave", "450 West Blvd", "1330 Green St", "78 Bigsby Rd"],
    date: "",
    time: "",
    task: "",
    comments: ""
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

        <input
          value={this.state.comments}
          name="comments"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Comments"
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </div>
    );
  }
}