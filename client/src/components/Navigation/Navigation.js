import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className='Navigation 
                    sticky 
                    header-footer-opacity
                    '>
        <nav className='navbar navbar-expand-lg navbar-light font-weight-bold bg-light mb-3'>
          <Link className='navbar-brand' to='/'>Travel USA</Link>
          <div class="travelContent">
            <div class="slider-wrapper">
          <span role="img" aria-label="Liberty">🗽Travel to</span>
            <div class="slider">
                <div class="slider-text1 rounded-sm rounded-lg">New York</div>
                <div class="slider-text2 rounded-sm rounded-lg">Chicago</div>
                <div class="slider-text3 rounded-sm rounded-lg">Los Angeles</div>
                <div class="slider-text4 rounded-sm rounded-lg">Dallas</div>
                <div class="slider-text5 rounded-sm rounded-lg">San Francisco</div>
                <div class="slider-text6 rounded-sm rounded-lg">Boston</div>
              </div>
            </div>
          </div>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li>
              {user &&
                  <>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/blog' onClick={this.toggleCollapse}>Blog</Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/blogpost' onClick={this.toggleCollapse}>Create</Link>
                    </li>
                  </>
                }
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <>
                  <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link></li>
                  <li className='nav-item'><Link className='nav-link' to='/register' onClick={this.toggleCollapse}>Register</Link></li>
                </>}
            </ul>
          </div>
        </nav>
      </div>
    
    );
  }
}

export default Navigation;
