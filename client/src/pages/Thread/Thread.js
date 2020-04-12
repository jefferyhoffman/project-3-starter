import React, { Component, useState, use, useEffect } from "react";
import API from "../../lib/API";
import AuthContext from '../../contexts/AuthContext';
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { Input, TextArea, FormBtn } from "../../components/ThreadForm";
import TokenStore from "../../lib/TokenStore";

class Threads extends Component {
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

      API.Users.getMe(authToken)
      .then(response => { 
        API.Threads.createThread({
          title: "Testingplease",
          body: "workworkkwrokwrok",
          UserId: response.data.id
        })
        // console.log(response.data.id)
      }
      )
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <Jumbotron> 
       
       
      </Jumbotron>
      <Jumbotron>
          
          
      </Jumbotron>
      </AuthContext.Provider>
    );
  }
}

export default Threads;