import React, { Component } from 'react';

import CustomerForm from '../../components/CustomerForm/CustomerForm.js';


class Contacts extends Component {

  render() {
    return (
      <div className='Contacts'>
        <div className='row'>
          <div className='col'>
            <h1>Contact Us</h1>
          </div>
        </div>
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
