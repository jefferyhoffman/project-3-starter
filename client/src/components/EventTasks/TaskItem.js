import React, { Component } from "react";
import PropTypes from "prop-types";

export class TaskItem extends Component {
  getStyle = () => {
    return {
      background: "#ebe7de",
      color: "orange",
      fontSize: "1.5em",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.task.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.task;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
        </p>
      </div>
    );
  }
}
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default TaskItem;
