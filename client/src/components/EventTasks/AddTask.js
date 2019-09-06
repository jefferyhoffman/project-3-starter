import React, { Component } from "react";

export class AddTask extends Component {
  state = {
    title: " "
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          background: "white"
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Add Task"
          style={{
            width: "50vw",
            padding: "10px",
            marginBottom: "10px"
          }}
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Add Task"
          className="btn"
          style={{
            background: "#ff9800",
            width: "50vw",
            padding: "10px",
            color: "white",
            marginBottom: "10px"
          }}
        />
      </form>
    );
  }
}

export default AddTask;
