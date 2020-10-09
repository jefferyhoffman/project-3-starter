import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import API from "../../lib/API";
import TokenStore from "../../lib/TokenStore";
import AuthContext from "../../contexts/AuthContext";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../Footer/footer";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Secret from "../../pages/Secret/Secret";
import NotFound from "../../pages/NotFound/NotFound";
import Contact from "../../pages/Contact/Contact";
import Layout from "../../pages/Layout/Layout";
import Product from "../../pages/ProductPage/Product";

// import MShirts from "../../pages/MShirts/MShirts";
// import MShorts from "../../pages/MShorts/MShorts";
// import MPants from "../../pages/MPants/MPants";
// import MSweatshirts from "../../pages/MSweatshirts/MSweatshirts";
// import WShirts from "../../pages/WShirts/WShirts";
// import WShorts from "../../pages/WShorts/WShorts";
// import WPants from "../../pages/WPants/WPants";
// import Sportsbras from "../../pages/Sportsbras/Sportsbras";
// import WSweatshirts from "../../pages/WSweatshirts/WSweatshirts";
// import Bags from "../../pages/Accessories/Bags"
// import Hats from "../../pages/Accessories/Hats"
// import Bottles from "../../pages/Accessories/Bottles"
// import Pre from "../../pages/Supplements/Pre";
// import Protein from "../../pages/Supplements/Protein";
// import Wellness from "../../pages/Supplements/Wellness";
import Test from "../../pages/Test";
import Wellness from "../../pages/Test/Wellness";


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

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout,
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
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* REMEMBER TO TAKE THIS OUT */}
              <Route path="/layout" component={Layout} />
              <Route path="/product" component={Product} />

              {/* <Route exact path="/mens/shirts" component={MShirts} />
              <Route exact path="/mens/shorts" component={MShorts} />
              <Route exact path="/mens/pants" component={MPants} />
              <Route exact path="/mens/sweatshirts" component={MSweatshirts} />
              <Route exact path="/womens/shirts" component={WShirts} />
              <Route exact path="/womens/shorts" component={WShorts} />
              <Route exact path="/womens/pants" component={WPants} />
              <Route exact path="/womens/sportsbras" component={Sportsbras} />
              <Route path ="/item/*" component={Sportsbras}/>
              <Route exact path="/womens/sweatshirts" component={WSweatshirts} />
              <Route exact path="/bags" component={Bags} />
              <Route exact path="/hats" component={Hats} />
              <Route exact path="/waterbottles" component={Bottles} />
              <Route exact path="/preworkout" component={Pre} />
              <Route exact path="/protein" component={Protein} />
              <Route exact path="/wellness" component={Wellness} /> */}
              <Route path ="/products/category/:product" component={Wellness}/>
              <Route path ="/products/:gender/:product" component={Test}/>
             
              



              {/* <Route Path = '/category/*' component = {MShirts}/>
              <Route Path = '/category/*' component = {MShorts}/> */}

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
