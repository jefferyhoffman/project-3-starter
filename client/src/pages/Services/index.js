import React, { Component } from 'react';
import setup from './images/setup.jpg'
import clean from './images/tank-clean-1.jpg' 
import logo from '../Home/logo.png';
import filter from './images/new-filter.jpg'
import '../Home/style.css'

class ServicesPage extends Component {
  state = {
    hover: false
  };
  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  };
  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = { backgroundColor: ' #2da1e9', cursor: 'pointer' }
    } else {
      linkStyle = { backgroundColor: '#1d71b6' }
    }
    return (
      <div className='Home'>
        <div id='header'>
          <div id='number' className='col'>
            <p>Phone: 980-267-7483</p>
          </div>
          <div id='logo' className='col'>
            <h2>Our Services</h2>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
          <div id='email' className='col'>
            <p>E-Mail: krystalklearaquariums@gmail.com</p>
          </div>
        </div>
        <div className='row'>
          <div className="card" id="about">
            <div className="card-header">
              Setup
            </div>
            <div className="card-body" style={linkStyle} onMouseEnter={this.toggleHover}>
              <div className="card">
                <img src={setup} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">Just starting out?  We can get you tanks, accessories, and  fish.  Plus we will 
                    set it up for you.  Everything you need to get started.</p>
                  </div>              
              </div>
            </div>
          <div class="card-footer"></div>
          </div>
        </div>
        <div className='row'>
          <div className="card" id="about">
            <div className="card-header">
              Cleaning
            </div>
            <div className="card-body" style={linkStyle} onMouseEnter={this.toggleHover}>
              <div className="card">
                <img src={clean} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">Have a dirty tank?  We can clear it up for you.</p>
                  </div>              
              </div>
            </div>            
          <div class="card-footer"></div>
          </div>
        </div>
        <div className='row'>
          <div className="card" id="about">
            <div className="card-header">
              Products
            </div>
            <div className="card-body" style={linkStyle} onMouseEnter={this.toggleHover}>
              <div className="card">
                <img src={filter} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text">If you just need to some new equipment or accessories for your tank,   
                    we can get things for you.  Filters, lights, heaters, gravel, and more...</p>
                  </div>              
              </div>
            </div>
            <div class="card-footer"></div>                   
          </div>
          
        </div>
      </div> 
        );
      }
    }
    
export default ServicesPage;