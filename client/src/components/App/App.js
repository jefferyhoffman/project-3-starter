import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../Footer/footer'
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import NotFound from '../../pages/NotFound/NotFound';
import Contact from '../../pages/Contact/Contact';
<<<<<<< HEAD
import Layout from '../../pages/Layout/Layout';
import Checkout from '../../pages/Checkout/checkout'
=======
import Layout from '../../pages/Layout/Layout'
import Product from '../../pages/ProductPage/Product'

>>>>>>> d7ba62e398146f44b894b2af0b93fd13bdc5f005
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
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/checkout' component={Checkout} />
              <Route path = '/layout' component = {Layout}/>
              <Route path = '/product' component = {Product}/>
              {/* <PrivateRoute path='/secret' component={Secret} /> */}
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
