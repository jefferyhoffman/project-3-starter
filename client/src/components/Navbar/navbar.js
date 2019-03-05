import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { SideNav, Nav } from 'react-sidenav'

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import "./navbar.css"

class Navibar extends Component {
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

    return (
      <div className="sidenav">
        <nav id='navbar' className={collapsed ? "active" : "inactive"}>
          <Link className='navbar-header' to='/' id="logo"><h3>Travel'd</h3><hr/></Link>

            <ul className='navbar-nav'>
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/myaccount' onClick={this.toggleCollapse}>My Account</Link>
                </li>}
              
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/add' onClick={this.toggleCollapse}>Add New Trip</Link>
                </li>}
                {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/mytrips' onClick={this.toggleCollapse}>My Trips</Link>
                </li>}
                {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/browse' onClick={this.toggleCollapse}>Browse</Link>
                </li>}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <>
                  <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link></li>
                  <li className='nav-item'><Link className='nav-link' to='/register' onClick={this.toggleCollapse}>Register</Link></li>
                  </>}
            </ul>

        </nav>

        <div id="content">
            <button type="button" id="sidebarCollapse" className="navbar-btn" onClick={this.toggleCollapse}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
      </div>
      
    );
  }
}

export default Navibar;