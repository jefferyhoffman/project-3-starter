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
import Galleries from '../../pages/Galleries'
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';

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
      }, 
      galleries: [
        {
          name: 'Sketches Vol 01', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg'
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        }, 
        {
          name: 'Sketches Vol 02', 
          images: 'https://raw.githubusercontent.com/parmark/Booru-Poses/master/assets/images/sample3.jpg' 
        },
      ]
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
      <AuthContext.Provider value={this.state.auth} images={this.state.galleries}>
        <div className='App'>
          <Navigation />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route 
                path='/galleries' 
                render={() => <Galleries galleries={this.state.galleries} />}  
              />
              <PrivateRoute path='/secret' component={Secret}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
