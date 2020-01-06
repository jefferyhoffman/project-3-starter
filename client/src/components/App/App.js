import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import AuthContext from '../../contexts/AuthContext';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import UserDash from '../../pages/UserDash/UserDash';
import Index from "../../pages/Index";
import SignIn from "../../pages/LoginPage/LoginPage";
import SignUp from "../../pages/SignupPage/index"
import Studio from "../../pages/Studio/index"
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      }
    }
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
            <Switch>
            <Route exact path="/" component={Index} />
            <PrivateRoute exact path="/UserDash" component={UserDash} />
            <Route exact path="/LoginPage" component={SignIn} />
            <Route exact path="/SignupPage" component={SignUp}/>
            <Route exact path="/Studio" component={Studio}/>
            </Switch>
        </div>
      </AuthContext.Provider>

    );
  }
}

export default App;
