import React, { Component } from "react";
import shortid from "shortid";

export default class ItinForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
    });
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="itinForm"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.handleSubmit}>Add</button>
        <hr />
      </form>
    );
  }
}
