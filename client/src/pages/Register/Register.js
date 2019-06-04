import React, { Component } from 'react';
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
    const { from } = this.props.location.state || { from: { pathname: "/login" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login'>
        <div className='row'>
          <div className='col-sm'>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <RegisterForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        <br />
        {this.state.error &&
          <div className='row'>
          <div className='col-sm-3'></div>
            <div className='col-sm-6'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
            <div className='col-sm-3'></div>
          </div>}
      </div>
    );
  }
}

export default Register;
