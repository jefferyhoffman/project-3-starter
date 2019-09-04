import React, { Component } from 'react';
<<<<<<< HEAD
import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

class Register extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password) => {
    API.Users.register(email, password)
      .then(response => {
          this.setState({ redirectToReferrer: true })
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ error: "Sorry, that email/password combination is not valid. Please try again." });
        }
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/secret" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login'>
        <div className='row'>
          <div className='col'>
            <h1>Register Account</h1>
=======

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import API from '../../lib/API';

class Register extends Component {
  state = {
    error: ""
  }

  handleSubmit = (email, password, confirm) => {
    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }

    API.Users.create(email, password)
      .then(response => response.data)
      .then(user => console.log(user))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className='Register'>
        <div className='row'>
          <div className='col'>
            <h1>Register</h1>
>>>>>>> f301839dcf1d16d5fbc4a8839159329733407dfe
          </div>
        </div>
        {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
<<<<<<< HEAD
            <RegisterForm onSubmit={this.handleSubmit} />
=======
            <RegistrationForm onSubmit={this.handleSubmit} />
>>>>>>> f301839dcf1d16d5fbc4a8839159329733407dfe
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
