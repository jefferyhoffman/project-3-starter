import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Menu from '../../pages/Home/Menu';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';
import Leaderboard from '../../pages/Leaderboard/Leaderboard'
import MainGame from '../../pages/MainGame/MainGame'
import Main from '../../pages/Main/Main'
import CustomGame from '../../pages/CustomGame/CustomGame'
import './App.css';
import Characters from '../../pages/Characters/Characters';
import ScoreContextProvider from '../../contexts/scoreContext';
import WhoContextProvider from '../../contexts/whoContext'
import FinalScoreContextProvider from '../../contexts/FinalScore'
import TimeContextProvider from '../../contexts/Time';
import RandomNumberContextProvider from '../../contexts/RandomNumber.js';
import CustomContextProvider from '../../contexts/customContext';
import Add from '../../pages/Adding/Add'

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
      <CustomContextProvider>
        <ScoreContextProvider>
          <WhoContextProvider>
            <FinalScoreContextProvider>
              <TimeContextProvider>
                <RandomNumberContextProvider>
                  <div className='App'>
                    <Navigation />
                    <div className='main-container'>
                      <Switch>
                        <Route exact path='/' component={Main} />
                        <PrivateRoute path='/menu' component={Menu} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <PrivateRoute path='/secret' component={Secret} />
                          <Route path="/leaderboard" component={Leaderboard} />
                              <PrivateRoute path="/MainGame" component={MainGame} />
                        <Route path="/characters" component={Characters} />
                        <Route path='/customGame' component={CustomGame} />
                        <Route path='/add' component={Add}/>
                        <Route component={NotFound} />
                      </Switch>
                    </div>
                    <Footer />
                  </div>
                </RandomNumberContextProvider>
              </TimeContextProvider>
            </FinalScoreContextProvider>
          </WhoContextProvider>
        </ScoreContextProvider>
      </CustomContextProvider>
      </AuthContext.Provider>
    );
  }
}

export default App;
