import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import API from "../../lib/API";
import TokenStore from "../../lib/TokenStore";
import AuthContext from "../../contexts/AuthContext";
import Navigation from "../../components/Navigation/Navigation";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Secret from "../../pages/Secret/Secret";
import NotFound from "../../pages/NotFound/NotFound";
import Events from "../../pages/Events";
import Posts from "../../pages/Posts";
import Users from "../../pages/Users";
import Landing from "../Landing/Landing";




import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({
        auth: { ...prevState.auth, user, authToken }
      }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({
        auth: { ...prevState.auth, user: undefined, authToken: undefined }
      }));
    };

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      },
      renderText: false,
      text: "Conditional rendering from React"
    };
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user =>
        this.setState(prevState => ({ auth: { ...prevState.auth, user } }))
      )
      .catch(err => console.log(err));
  }

  render() {
    // const { user } = this.context;
    const user = true
    return (
      <BrowserRouter>

      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <PrivateRoute path='/secret' component={Secret} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/users" component={Users} />
              <Route component={NotFound} />
            </Switch>
          </div>

            <div className="container">
              <Route component={Landing} />

              {user && (
                <div>
                  <h1>{this.state.renderText && this.state.text}</h1>
                  <h1>Upcoming Events</h1>
                  <Events />
                  {/* </div> */}
                  <div>
                    <h1>Community Members</h1>
                    <Users />
                  </div>
                </div>
              )}
            </div>
          </div>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
