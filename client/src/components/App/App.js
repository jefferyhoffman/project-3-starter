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
//new
import {ThemeProvider } from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import {blue, indigo} from '@material-ui/core/colors';

import './App.css';

const theme = createMuiTheme ({
  palette: {
      primary: {
          main: indigo[700]
      },

      secondary: {
          main: blue[900]
    }
  },
  typography: {
      //changes from default Roboto
      fontFamily: [
          '"Lato"',
          'sans-serif'
        ].join(',')

  }
});
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
          <ThemeProvider theme={theme}>

            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <PrivateRoute path='/secret' component={Secret} />
              {/* <Route path='/dashboard' component={DashBoard} /> */}
              <Route component={NotFound} />
             
            </Switch>
        </ThemeProvider>
          </div>

        </div>
      </AuthContext.Provider>
    );
  }
}
export default App;
