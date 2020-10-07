import React, { Component } from 'react';

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
