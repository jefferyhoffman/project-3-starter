import React from "react";
import EventPostIt from "../components/PostIt_Event/EventPostIt";
import API from "../utils/API";
import Navigation from "../components/Navigation/Navigation"

class Users extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    API.findAll("users")
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="users-board">
         <div className = "container">
        <Navigation/>
        <h1>Your Neighbors</h1>
        {!this.state.results.length ? (
          <h1>No Neighbors to Display</h1>
        ) : (
          this.state.results.map(user => {
            return (
              <EventPostIt key={user._id} name={user.name} photo={user.photo} />
            );
          })
        )}
      </div>
      </div>
    );
  }
}

export default Users;
