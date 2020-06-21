import React, { useState, useEffect } from 'react';
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

import './App.css';

const App =()=> {
  const [auth, setAuth]= useState({
    user : undefined,
    authToken: TokenStore.getToken(),
    onLogin: function(user, authToken) {
      TokenStore.setToken(authToken);
      setAuth(prevState=>({ ...prevState, user, authToken }))
    },
    onLogout: function(){
      TokenStore.clearToken();
      setAuth(prevState => ({ ...prevState, user: undefined, authToken: undefined } ));
    }
  });

  useEffect(()=> {
    const authToken  = auth.authToken;
    if (!authToken) return;
    API.Users.getMe(authToken)
      .then(response => response.data)
      .then(user => setAuth(prevState => ({ ...prevState, user } )))
      .catch(err => console.log(err));
  },[auth.authToken]);


    return (
      <AuthContext.Provider value={auth}>
        <div className='App'>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <PrivateRoute path='/secret' component={Secret} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    )
  
}

export default App;
