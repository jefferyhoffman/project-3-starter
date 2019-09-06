import React, { Component } from "react";
import Tasks from "../components/EventTasks/Tasks";
import AddTask from "../components/EventTasks/AddTask";
import EventInfo from "../components/EventTasks/EvenInfo";

export class Event extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Cooler",
        completed: false
      },
      {
        id: 2,
        title: "Sound Equipment",
        completed: false
      },
      {
        id: 3,
        title: "Cornhole",
        completed: false
      },
      {
        id: 4,
        title: "Ring Toss",
        completed: false
      },
      {
        id: 5,
        title: "Bocce Ball",
        completed: false
      },
      {
        id: 6,
        title: "Plates & Utensils",
        completed: false
      },
      {
        id: 7,
        title: "Napkins & Cups",
        completed: false
      }
    ]
  };

  // Toggle Complete
  markComplete = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    });
  };

  //Add Task
  addTask = title => {
    const newTask = {
      id: 10,
      title,
      complited: false
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  render() {
    return (
      <div className="event">
        <EventInfo />
        <AddTask addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default Event;
