import React from "react";
import UserProfile from "../components/Users/UserProfile";
import API from "../utils/API";
import Navigation from "../components/Navigation/Navigation";
import border from "../components/Landing/corkborder.png";

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
    const woodBorder = "url(" + border + ")";
    return (
      <div className="container">
        <Navigation />
        <div
          style={{
            border: "29px solid transparent",
            backgroundImage:
              "url('https://images.freeimages.com/images/large-previews/c3a/corkboard-1580988.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderImageSource: woodBorder,
            borderImageSlice: "29 29",
            borderImageWidth: "29px 29px",
            height: "100vh"
          }}
          className="users-board"
        >
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
