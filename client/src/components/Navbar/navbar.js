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
    // const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    // const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className="sidenav">
        <nav className='navbar' >
          <Link className='navbar-header' to='/' id="logo"><h3>Travel'd</h3><hr/></Link>
          <br></br>
          {/* <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' style={{backgroundColor:"black"}}></span>
          </button> */}

          {/* <div className={targetClass} id='navbarSupportedContent'> */}
          <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <>
                  <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link></li>
                  <li className='nav-item'><Link className='nav-link' to='/register' onClick={this.toggleCollapse}>Register</Link></li>
                  </>}
            </ul>
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
           
          {/* </div> */}
        </nav>
      </div>
      
    );
  }
}

export default Navibar;