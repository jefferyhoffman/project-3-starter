import React, { Component } from 'react';

import logo from '../Home/logo.png';

class ServicesPage extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='row'>
          <div className='col'>
            <p>Phone: 980-267-7483</p>
          </div>
          <div className='col'>
            <h2>Our Services</h2>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <div className='col'>
            <p>E-Mail: krystalklearaquariums@gmail.com</p>
          </div>
        </div>
        <div className='row'>
          <div class="card" id="about">
            <div class="card-header">
              Services
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesPage;