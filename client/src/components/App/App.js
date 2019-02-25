import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../../pages/Login/Login';
import Secret from '../../pages/Secret/Secret';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState({ user, authToken });
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState({ user: undefined, authToken: undefined });
    }

    this.state = {
      user: undefined,
      authToken: undefined,
      onLogin: this.handleLogin,
      onLogout: this.handleLogout
    }
  }

  componentDidMount() {
    const authToken = TokenStore.getToken();
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState({ user, authToken }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        <div className='App'>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route path='/login' component={Login} />
              <PrivateRoute path='/secret' component={Secret} />
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
