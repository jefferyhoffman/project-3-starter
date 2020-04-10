import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Navigation/Navigation.css";
import SiteLogo from "../Navigation/SiteLogo.png";
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
      <div> 
        <div className="Header">
        <img src={SiteLogo} alt=""></img>
        </div>
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark mb-3'>
          {/* <Link className='navbar-brand' to='#'>Project 3</Link> */}
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li>
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>}
            </ul>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/profile' onClick={this.toggleCollapse}>Profile</Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login/Register</Link></li>}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <li className='nav-item'><Link className='nav-link' to='/thread' onClick={this.toggleCollapse}>Thread</Link></li>}
            </ul>
          </div>
        </nav>
      </div>
      </div>
    );
  }
}

export default Navigation;
