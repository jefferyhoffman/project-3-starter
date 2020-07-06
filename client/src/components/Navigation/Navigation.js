import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

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
    const togglerClass = `navbar-burger burger ${collapsed && 'collapsed'}`;

    return (
      
      <nav className="navbar is-fixed-top color" role="navigation" aria-label="main navigation">
      <div className='navbar-brand' to='#'>Let's Guess Logo</div>
      <div className = {togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
        
        
          <div className="navbar-menu">
          <div className="navbar-start">
          <Link to='/' onClick={this.toggleCollapse} className="navbar-item">
      <strong>Home</strong>
    </Link>
    
    <Link className="navbar-item" to='/leaderboard' onClick={this.toggleCollapse}>
     
     <strong>Leaderboard 🔥</strong>
    </Link>
          </div>
        
          <div className="navbar-end">
          <div className="buttons">
      <Link className="button login" to='/login' onClick={this.toggleCollapse}>Login</Link>
      <Link className="button signUp" to='/register' onClick={this.toggleCollapse}>Signup</Link>
    </div>
          </div>
        </div>
      </nav>
        
      
    );
  }
}

export default Navigation;

{/* </nav>
      <div className='Navigation'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <Link className='navbar-brand' to='#'>Project 3</Link>
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
      </div> */}