import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import RegisterForm from '../../components/Register/RegisterForm';


class Register extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password, name) => {
    API.Users.register(email, password, name)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: "" });
      })
    //   .catch(err => {
    //     let message;

    //     switch (err.response.status) {
    //       case 401:
    //         message = 'Sorry, that email/password combination is not valid. Please try again.';
    //         break;
    //       case 500:
    //         message = 'Server error. Please try again later.';
    //         break;
    //       default:
    //         message = 'Unknown error.';
    //     }

    //     this.setState({ error: message });
    //   });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={'/'} />;
    }

    return (
      <div className="container">
      <div className='Register'>
        
        <div className='row'>
          <div className='col'>
            <RegisterForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        {this.state.error &&
          <div className='row alert'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
      </div>
      </div>
    );
  }
}

export default Register;