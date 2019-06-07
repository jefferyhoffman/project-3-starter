import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
// import Secret from '../../pages/Secret/Secret';
import Home from '../../pages/Home/Home';
import View from '../../pages/View/View';
import About from '../../pages/About/About';
import MyDrinks from '../../pages/MyDrinks/MyDrinks';
import Create from '../../pages/Create/Create';
import Search from '../../pages/Search/Search';
import FeaturedDrinks from '../../pages/FeaturedDrinks/FeaturedDrinks';
import NotFound from '../../pages/NotFound/NotFound';
import MoscowMule from '../../pages/TopDrinks/MoscowMule';



import './App.css';
import Footer from '../Footer/Footer';

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
    let authToken = this.state.auth
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              {/* <PrivateRoute path='/secret' component={Secret} /> */}
              <Route exact path='/' component={Home} />
              <Route exact path='/featured' component={FeaturedDrinks} />
              <Route exact path='/view' component={View} />
              <Route exact path='/about' component={About} />
              <Route exact path='/mydrinks' component={MyDrinks} />
              <Route exact path='/create' props={authToken} component={Create} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/moscowmule' component={MoscowMule} />
              <Route component={NotFound} />
            </Switch>
          <Footer/>
         </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
