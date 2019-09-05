import React, { Component } from 'react';

import CustomerForm from '../../components/CustomerForm/CustomerForm.js';
import API from '../../lib/API';

class Contacts extends Component {
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
      <div className='Contacts'>
        <div className='row'>
          <div className='col'>
            <h1>Contacts</h1>
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
            <CustomerForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
