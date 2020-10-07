import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

class Register extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password) => {
    API.Users.create(email, password)
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
      <div className='Register'>
        <div className='columns'>
          <div className='column'>
            <h1>Register</h1>
          </div>
        </div>
        {this.state.error &&
          <div className='columns'>
            <div className='column'>
              <div className='message message-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='columns'>
          <div className='column'>
            <RegistrationForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
