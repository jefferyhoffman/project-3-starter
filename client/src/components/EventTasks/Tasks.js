import React, { Component } from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

class Tasks extends Component {
  render() {
    return this.props.tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        markComplete={this.props.markComplete}
      />
    ));
  }
}

TaskItem.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default Tasks;
