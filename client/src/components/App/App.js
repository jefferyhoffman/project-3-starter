import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';
import Profile from '../../pages/UserProfile/profile';
import Threads from "../../pages/Threads/Threads";
import ThreadDetail from "../../pages/ThreadDetail/threadDetail"
import Footer from '../../components/Footer/footer';
// import Newlogo from '../../components/NewLogo/newlogo';
import '../../components/Navigation/Navigation.css';
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
              <Route path='/profile' component={Profile} />\
              <Route exact path={["/thread"]} component={Threads} />
              <PrivateRoute path='/secret' component={Secret} />
              <Route exact path='/thread/:id' component={ThreadDetail}/>
              <Route component={NotFound} />
            </Switch>
          </div>

        
        </div>

        <Footer />
        <Switch>
          <Route path='/About' component={About} />
        </Switch>
      </AuthContext.Provider>
    );
  }
}

export default App;
