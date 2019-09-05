import React, { Component } from 'react';

import CustomerForm from '../../components/CustomerForm/CustomerForm.js';
import API from '../../lib/API';

class Contacts extends Component {
  state = {
    error: ""
  }

  handleSubmit = (fullName, email, phoneNumber, tankType, tankSize, message) => {
    if (fullName === "" || email === "") {
      return this.setState({ error: "Name and Email Required" });
    }

    API.Users.create(fullName, email, phoneNumber, tankType, tankSize, message)
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
