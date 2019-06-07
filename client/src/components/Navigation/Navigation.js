import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import "./Navigation.css"

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true,
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
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <Link className='navbar-brand' to='/'>Koscowix</Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}></Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
            <li className="nav-item">
                    <Link className="nav-link" to="/collections" onClick={this.toggleCollapse}>Collections</Link>
                </li>
            {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>
                &&
                <li className='nav-item'>
                <Link className ='nav-link' to="UserProfile"><i id="profileIcon" className="fas fa-user-circle"></i></Link>
                </li>}
                      
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login</Link></li>}
              <Link className="nav-link" to='/cart'onClick={this.toggleCollapse}><i id="cartNav" className="fas fa-shopping-cart"></i></Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
