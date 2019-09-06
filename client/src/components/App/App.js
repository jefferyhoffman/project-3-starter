import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Services';
import Login from '../../pages/Login/Login';
import Contact from '../../pages/Contacts/Contacts';
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';
import Admin from '../../pages/Admin/Admin';

import './App.css';
import Customer from '../../pages/Customer/Customer';

const particlesOptions = {
  particles: {
    number: {
      value:15,
      density: {
        enable: true,
        value_area: 800
      }
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 2,
      direction: "top",
      random: false,
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        }
      }
    }
  }
};
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
          <Particles
            params={particlesOptions} />
          <Navigation />
          <div className='main'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/services' component={Services} />
              <Route path='/login' component={Login} />
              <Route path='/contact' component={Contact} />
              <PrivateRoute path='/secret' component={Secret} />
              <Route path="/admin" component={Admin} />
              <Route path="/customer" component={Customer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
