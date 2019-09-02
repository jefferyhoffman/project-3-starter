import React, { Component } from "react";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";

class DestinationForm extends Component {
  state = {
    startPoint: "Point A",
    endPoint: "Point B"
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
        <h3 className="text-center">
          <strong>{this.state.startPoint} </strong>
          to
          <strong> {this.state.endPoint}</strong>
        </h3>
        <InputGroup
          type="text"
          name="startPoint"
          placeholder="Point A"
          id="start-point"
          label="Starting Point"
          onChange={this.onInputChange}
        />
        <InputGroup
          type="text"
          name="endPoint"
          placeholder="Point B"
          id="end-point"
          label="Ending Point"
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default DestinationForm;
