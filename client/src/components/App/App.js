import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Admin from '../../pages/Admin/Admin';
import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import StatusContext from '../../contexts/StatusContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';
import Employee from "../../pages/Employee/Employee";
import Client from "../../pages/Client/Client";
import Contact from "../../pages/Contact/Contact";

import './App.scss';

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

    this.handleSuccess = (successMessage) => {
      this.setState(prevState => ({ status: { ...prevState.status, error: undefined, success: successMessage } }));
    }

    this.handleError = (errorMessage) => {
      this.setState(prevState => ({ status: { ...prevState.status, error: errorMessage, success: undefined } }));
    }

    this.handleClear = () => {
      this.setState(prevState => ({ status: { ...prevState.status, error: undefined, success: undefined } }));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout
      },
      status: {
        error: undefined,
        success: undefined,
        onSuccess: this.handleSuccess,
        onError: this.handleError,
        onClear: this.onClear
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
        <StatusContext.Provider value={this.state.status}>
          <div className='App'>
            <Navigation />
            <AuthContext.Consumer>
              {auth => (
                <StatusContext.Consumer>
                  {status => (
                    <div className="mainContent">
                      <Switch>
                        <Route exact path='/' render={(props => <Home {...props} auth={auth} status={status} />)} />
                        <Route path='/login' render={(props => <Login {...props} auth={auth} status={status} />)} />
                        <Route path='/register' component={Register} />
                        <Route path='/contact' component={Contact} />
                        <PrivateRoute path='/admin' component={Admin} />
                        <PrivateRoute path='/employee' component={Employee} />
                        <PrivateRoute path='/client' component={Client} />
                        <Route component={NotFound} />
                      </Switch>
                    </div>
                  )}
                </StatusContext.Consumer>
              )}
            </AuthContext.Consumer>
          </div>
        </StatusContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;
