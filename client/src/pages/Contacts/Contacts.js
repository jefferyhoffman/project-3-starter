import React, { Component } from 'react';
import logo from '../Home/logo.png'
import CustomerForm from '../../components/CustomerForm/CustomerForm.js';


class Contacts extends Component {

  render() {
    return (
      <div className='Contacts'>
        <div className='row'>
          <div className='col'>
            <p>Phone: 980-267-7483</p>
          </div>
          <div className='col'>
            <h2>Contact Us</h2>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <div className='col'>
            <p>E-Mail: krystalklearaquariums@gmail.com</p>
          </div>
        </div>
        <div className='row'>
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
