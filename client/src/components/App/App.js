import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import Collections from '../../pages/Collections/Collections'
import Footer from "../../components/Footer/Footer.js";
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../Login/Login';
// import LoginForm from '../Login/LoginForm';
import UpdateProfile from '../../pages/UpdateProfile/UpdateProfile';
import UserProfile from '../../pages/UserProfile/UserProfile';
import Register from '../../components/Register/register';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import Cart from "./Cart.js";
import ThankYou from "../../pages/ThankYou/ThankYou";
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
      cart: [],
      itemCount: 0
    }

    this.addToCart = item => {
      this.setState(state => {
        const itemInCart = state.cart[item.id];
        const quantity = itemInCart && itemInCart.quantity
          ? itemInCart.quantity + 1
          : 1;
    
        return {
          cart: {
            ...state.cart,
            [item.id]: {
              ...item,
              quantity
            }
          }
        }
      });
    };

    
  }

  componentDidMount() {
    let itemCount = this.state.cart.length
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
    console.log(this.state)
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />

          {/* <div className='container-fluid'> */}
          <Switch>
           
            <PrivateRoute exact path='/UserProfile' component={UserProfile} />
            <PrivateRoute exact path='/UpdateProfile' component={UpdateProfile} />
            <PrivateRoute path='/checkoutForm' component={CheckoutForm}/>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            {/* <Route exact path='/LoginForm' component={LoginForm} /> */}
            <Route exact path='/' component={this.state.cart} />
            <Route exact path='/thankyou' component={ThankYou} />
            <Route exact path='/collections' component={(props) => <Collections {...props} addToCart={this.addToCart} />} />
            <Route exact path='/cart' component={(props) => <Cart {...props} userCart={this.state.cart} />}/>
?           <Route component={NotFound} />
            
      
            </Switch>
            <Footer />
   
        </div>
      </AuthContext.Provider>
  
    );
  
  }
}

export default App;