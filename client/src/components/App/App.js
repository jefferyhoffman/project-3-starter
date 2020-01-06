import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import UserDash from '../../pages/UserDash/UserDash';
import Index from "../../pages/Index";
import SignIn from "../../pages/LoginPage/LoginPage";
import Studio from "../../pages/Studio/index"
import Signup from '../../pages/SignupPage/index';
import Results from '../../pages/Results'
import Finale from '../../pages/Final'


//import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';


import './App.css';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
      <Router>
          <div className='App'>
            <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/UserDash" component={UserDash} />
            <Route exact path="/LoginPage" component={SignIn} />
            <Route exact path="/SignupPage" component={Signup}/>
            <Route exact path="/Studio" component={Studio}/>
            <Route exact path="/Results" component={Results}/>
            <Route exact path="/Final" component={Finale}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
