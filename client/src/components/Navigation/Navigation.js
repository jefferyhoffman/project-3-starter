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
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg mb-3'>

          <Link className='navbar-brand' to='/'><i class="fas fa-shield-virus"> EquiPPE</i></Link>

          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
              </li> */}
              <li className='nav-item'>
                <Link className='nav-link' to='/about' onClick={this.toggleCollapse}>Team</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/testimonials' onClick={this.toggleCollapse}>Reviews</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact' onClick={this.toggleCollapse}>Contact</Link>
              </li>
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/shop' onClick={this.toggleCollapse}>Shop</Link>
                </li>}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login/Register</Link></li>}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
