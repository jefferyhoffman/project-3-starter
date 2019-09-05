import React, { Component } from 'react';
import setup from './images/setup.jpg'
import clean from './images/tank-clean-1.jpg' 
import logo from '../Home/logo.png';
import filter from './images/new-filter.jpg'

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
          <div className="card" id="about">
            <div className="card-header">
              Services
            </div>
            <div className="card-body">
              <div className="card">
                <img src={setup} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">Full setup!</p>
                  </div>              
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <img src={clean} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">Maybe you need a cleaning?</p>
                  </div>              
              </div>
            </div>
            <div className="card-body">
              <div className="card">
                <img src={filter} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">Do you just need some new equipment?</p>
                  </div>              
              </div>
            </div>
          </div>
        </div>
      </div> 
        );
      }
    }
    
export default ServicesPage;