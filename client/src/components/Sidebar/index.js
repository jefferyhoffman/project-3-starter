

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Secret from '../../pages/Secret/Secret';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import Sidebar from './Sidebar'
import AddNewTrip from '../AddTrip/index'



class SideNav extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.handleLogin = (user, authToken) => {
    //       TokenStore.setToken(authToken);
    //       this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    //     };
    
    //     this.handleLogout = () => {
    //       TokenStore.clearToken();
    //       this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    //     }
    
    //     this.state = {
    //       auth: {
    //         user: undefined,
    //         authToken: TokenStore.getToken(),
    //         onLogin: this.handleLogin,
    //         onLogout: this.handleLogout
    //       }
    //     }
    //   }
    
    //   componentDidMount() {
    //     const { authToken } = this.state.auth;
    //     if (!authToken) return;
    
    //     API.Users.getMe(authToken)
    //       .then(response => response.data)
    //       .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
    //       .catch(err => console.log(err));
    //   }

    render(){
        return(

        <div className='App'>
          <Sidebar />
          <div className='container'>
            <Switch>
              <Route path='/myaccount' component={Secret} />
              <Route path='/add' component={AddNewTrip} />
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
     
        )
    }

}

export default SideNav