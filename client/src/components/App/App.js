import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';
import Profile from '../../pages/Profile/Profile';
import Mantras from "../../pages/Mantras/Mantras"
import Affirmations from "../../pages/Affirmations/Affirmations";
import Bob from "../../pages/Bob/Bob";
import Breathing from "../../pages/Breathing/Breathing";
import Clinic from "../../pages/Clinic/Clinic";
import Comedy from "../../pages/Comedy/Comedy";
import Community from "../../pages/Community/Community";
import Hotline from "../../pages/Hotline/Hotline";
import Jokes from "../JokesRoute/Jokes";
import Odd from "../../pages/Odd/Odd";



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
          <Navigation />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <PrivateRoute path='/profile' component={Profile} />
              <PrivateRoute path='/mantras' component={Mantras} />
              <PrivateRoute path='/affirmations' component={Affirmations} />
              <PrivateRoute path='/bob' component={Bob} />
              <PrivateRoute path='/breathing' component={Breathing} />
              <Route path='/clinic' component={Clinic} />
              <PrivateRoute path='/comedy' component={Comedy} />
              <PrivateRoute path= '/community' component={Community} />
              <Route path='/hotline' component={Hotline} />
              <PrivateRoute path='/jokes' component={Jokes} />
              <PrivateRoute path= '/odd' component={Odd} />
              <PrivateRoute path='/secret' component={Secret} />
              <Route component={NotFound} />
              
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
    
  }
}

export default App;


