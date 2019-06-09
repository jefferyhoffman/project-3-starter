import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import Home from '../../pages/Home/Home';
import Scheduling from '../../pages/Scheduling/Scheduling';
import NotFound from '../../pages/NotFound/NotFound';
import Checkout from '../../pages/Checkout/Checkout';
import ClientHome from '../../pages/ClientHome/ClientHome';
import Confirmation from '../../pages/Confirmation/Confirmation';
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo';
import Footer from "../../components/Footer/Footer";
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
      calendarInfo: {
        date: new Date(),
        showModal: false
      },
      modalInfo: {
        total: 0,
        premiumPckg: false,
        upgradedPckg: false,
        standardPckg: false,
        aeration: false,
        reseeding: false,
        trimming: false,
        pineNeedles: false,
        leafRemoval: false,
        pesticide: false,
        pruning: false,
        soil: false,
        mulch: false
      },
      firstName: {
        name: ""
      }
    }
  }

  onChange = (date) => {
    this.setState({
      calendarInfo: {
        date, showModal: true
      }
    })
  }

  getfirstName = (name) => {
    this.setState({
      name: {
        name: ""
      }
    })
  }

  handleModalUpdate = (name, value) => {
    this.setState({
      modalInfo: {
        ...this.state.modalInfo,
        [name]: value
      }
    },
      () => {
        // Calculation to determine total
        var total = 0;
        if (this.state.modalInfo.premiumPckg) {
          total += 350
        }
        if (this.state.modalInfo.upgradedPckg) {
          total += 200
        }
        if (this.state.modalInfo.standardPckg) {
          total += 100
        }
        if (this.state.modalInfo.aeration) {
          total += 50
        }
        if (this.state.modalInfo.reseeding) {
          total += 50
        }
        if (this.state.modalInfo.trimming) {
          total += 50
        }
        if (this.state.modalInfo.pineNeedles) {
          total += 50
        }
        if (this.state.modalInfo.leafRemoval) {
          total += 50
        }
        if (this.state.modalInfo.pesticide) {
          total += 50
        }
        if (this.state.modalInfo.topiary) {
          total += 50
        }
        if (this.state.modalInfo.pruning) {
          total += 50
        }
        if (this.state.modalInfo.soil) {
          total += 50
        }
        if (this.state.modalInfo.mulch) {
          total += 50
        }
        this.setState({
          modalInfo: {
            ...this.state.modalInfo,
            total: total
          }
        });
        console.log(total);
      });
  }

  closeModal = () => {
    this.setState({
      calendarInfo: {
        showModal: false
      }
    })
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
    console.log(this.state)
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />
          {/* <div className='container'> */}
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={(props) =>
              <Register
                {...props}
                getfirstName={this.state.getfirstName}
              />} />
            <PrivateRoute path='/secret' component={Secret} />
            <Route exact path='/Scheduling' component={(props) =>
              <Scheduling
                {...props}
                handleServiceChange={this.onChange}
                calendarInfo={this.state.calendarInfo}
                closeModal={this.closeModal}
                handleModalUpdate={this.handleModalUpdate}
                {...this.state.modalInfo}
              />} />
            <Route exact path='/ClientHome' component={ClientHome} />
            <Route path = '/paymentInfo' component= {PaymentInfo} />
            <Route path='/Confirmation' component={Confirmation} />
             <Route exact path='/Checkout' component={(props) =>
              <Checkout
                {...props}
                {...this.state.modalInfo}
                calendarInfo={this.state.calendarInfo} />}
            />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
