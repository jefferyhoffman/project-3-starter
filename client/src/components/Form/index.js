import React, { Component } from "react";

class Form extends Component {
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
        <form>
          <label htmlFor="startPoint">Starting Point</label>
          <br />
          <input
            id="startPoint"
            name="startPoint"
            type="text"
            placeholder="Point A"
            value={this.state.startPoint}
            onChange={this.onInputChange}
          />
          <br />
          <label htmlFor="endPoint">Ending Point</label>
          <br />
          <input
            id="endPoint"
            name="endPoint"
            type="text"
            placeholder="Point B"
            value={this.state.endPoint}
            onChange={this.onInputChange}
          />
          <br />
          <input type="submit" value="Generate Playlist" />
        </form>
        <p>
          <strong>Starting Point: </strong>
          {this.state.startPoint}
        </p>
        <p>
          <strong>Ending Point: </strong>
          {this.state.endPoint}
        </p>
      </div>
    );
  }
}

export default Form;
