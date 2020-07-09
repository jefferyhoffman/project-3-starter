import React, { Component } from 'react';
import {Image} from 'semantic-ui-react';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import API from '../../lib/API';

class Register extends Component {
  state = {
    error: ""
  }

  handleSubmit = (firstName, lastName, username, email, password, confirm) => {
    if (password !== confirm) {
      return this.setState({ error: "Passwords do not match." });
    }

    API.Users.create(firstName, lastName, username, email, password)
      .then(response => response.data)
      .then(user => console.log(user))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return (
      <div className='Register'>
        <Image centered src={require("../../assets/images/megabitesLogo.png")}/>
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
