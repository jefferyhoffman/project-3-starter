import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

import AuthContext from '../../contexts/AuthContext';


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
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className='Navigation App-nav'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <Link className='navbar-brand' to='#'>Krystal Klear Aquariums</Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact' onClick={this.toggleCollapse}>Contact</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/services' onClick={this.toggleCollapse}>Services</Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <li className='nav-item fa fa-facebook'></li>
              <li></li>
              <li className='nav-item'><a className='nav-link' href='https://www.facebook.com/krystalklearaquariums/'>Krystal Klear Aquariums</a></li>
              <li className='nav-item'><a className='nav-link' href='https://www.facebook.com/wetpetsgastonia/'>Wet Pets</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
