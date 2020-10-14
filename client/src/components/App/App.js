import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import API from "../../lib/API";
import TokenStore from "../../lib/TokenStore";
import AuthContext from "../../contexts/AuthContext";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../Footer/footer";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import NotFound from "../../pages/NotFound/NotFound";
import Contact from "../../pages/Contact/Contact";
import Product from "../../pages/ProductPage/Product";
import Category from '../../pages/Category';
import Wellness from '../../pages/Wellness';
import ProductsByGender from '../../pages/ProductsByGender';
import Checkout from '../../pages/Checkout/checkout';
import "./App.css";



class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user, authToken },
      }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState((prevState) => ({
        auth: { ...prevState.auth, user: undefined, authToken: undefined },
      }));
    };

    this.handleRefresh = () => {
      const { authToken } = this.state.auth;
      if (!authToken) return;

      API.Users.getMe(authToken)
        .then((response) => response.data)
        .then((user) =>
          this.setState((prevState) => ({ auth: { ...prevState.auth, user } }))
        )
        .catch((err) => console.log(err));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout,
        onRefresh: this.handleRefresh
      },
    };
  }

  componentDidMount() {
    const { authToken } = this.state.auth;
    if (!authToken) return;

    API.Users.getMe(authToken)
      .then((response) => response.data)
      .then((user) =>
        this.setState((prevState) => ({ auth: { ...prevState.auth, user } }))
      )
      .catch((err) => console.log(err));
  }



  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className="App">
          <Navigation />
          {/* <NavbarSlider/> */}
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* REMEMBER TO TAKE THIS OUT */}
              {/* <Route path="/layout" component={Layout} /> */}
              <Route path="/product/:id" component={Product} />
              <Route path="/products/all/:gender" component={ProductsByGender} />
              <Route path="/products/category/:product" component={Wellness} />
              <Route path="/products/:gender/:product" component={Category} />
              <Route path="/checkout" component={Checkout} />
              {/* <Route path="/intro" component={Intro}/> */}
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
