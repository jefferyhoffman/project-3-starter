import React from "react";
import UserProfile from "../components/Users/UserProfile";
import API from "../utils/API";
import Navigation from "../components/Navigation/Navigation";
import { Link } from "react-router-dom";

class Users extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    API.findAll("profiles")
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="users-board">
        <div className="container">
          <Navigation />
          <h1>Your Neighbors</h1>
          {!this.state.results.length ? (
            <h1>No Neighbors to Display</h1>
          ) : (
            this.state.results.map(profile => {
              return (
                <UserProfile
                  key={profile._id}
                  user_name={profile.user_name}
                  user_url={profile.user_url}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default Users;
