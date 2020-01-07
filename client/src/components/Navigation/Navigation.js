import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navigation.css';
import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import logo from "../../images/BGM-logo.jpg"

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
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg '>
          <Link className='navbar-brand' to='#'>
            <img className="logo" src={logo} />

          </Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            {/* <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li>
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>}
            </ul> */}
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Services</Link>
              </li>
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>}
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
