import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import API from '../../lib/API';

class Register extends Component {
  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password, confirm, first, last, address, city, state, zip, country, phone) => {
    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }
    // do we need to add a else if here to check to see if the email is unique

    API.Users.create(email, password, first, last, address, city, state, zip, country, phone)
      .then(response => response.data)
      .then(user => console.log(user))
      
      .catch(err => this.setState({ error: err.message }))
      
  }

  render() {

    const { from } = this.props.location.state || { from: { pathname: "/secret" } };
    const { redirectToReferrer } = from;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Register'>
        <div className='row'>
          <div className='col'>
            <h1>Register</h1>
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
            <RegistrationForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
