import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import Collections from '../../pages/Collections/Collections'
import Footer from "../../components/Footer/Footer.js";
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../../pages/Login/Login';
// import Register from '../../components/Register/register';
import Secret from '../../pages/Secret/Secret';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import Cart from "./Cart.js";
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
      cart: {},
      itemCount: 0
    }

    this.addToCart = (item) => {
      let cart = {
        ...this.state.cart,
        [item.id]: item,
      }
      this.setState({
        cart,
      })
    }
  }


  componentDidMount() {
    let itemCount = Object.keys(this.state.cart).length
    this.setState({
      itemCount
    })
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
      .catch(err => console.log(err));
  }
  componentDidUpdate(prevProps, prevState) {
    let cart = this.state.cart
    if (prevState.cart !== cart) {
      let itemCount = Object.keys(this.state.cart).length
      this.setState({
        itemCount
      })
    }
  }

  render() {
    console.log("this.props")
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />

          {/* <div className='container-fluid'> */}
          <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute path='/secret' component={Secret} />
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/register' component={Register} /> */}
            <Route exact path='/' component={this.state.cart} />
            <Route exact path='/collections' component={(props) => <Collections {...props} addToCart={this.addToCart} />} />
            <Route exact path='/cart' component={Cart} />
?              <Route component={NotFound} />
            </Switch>
            <Footer />
   
        </div>
      </AuthContext.Provider>
  
    );
  
  }
}

export default App;