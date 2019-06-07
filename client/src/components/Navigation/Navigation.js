import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/navigation.css'

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';


const text = {
  color: 'white',
};

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
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <Link className='navbar-brand' to='#' style={text}><h1>Drinkstation</h1><h2>Your Ultimate Drink Stop!</h2></Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
            <div className={targetClass} id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/' onClick={this.toggleCollapse}>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/mydrinks' onClick={this.toggleCollapse}>Drink</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/create' onClick={this.toggleCollapse}>Create</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/search' onClick={this.toggleCollapse}>Search</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/view' onClick={this.toggleCollapse}>View</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/portfolio' onClick={this.toggleCollapse}>Portfolio</Link>
                </li>
                {/* {user &&
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>} */}
              </ul>
              <ul className='navbar-nav'>
                {user
                  ? <AuthDropdown onClick={this.toggleCollapse} />
                  : <>
                    <li className='nav-item'><Link className='nav-link' style={text} to='/login' onClick={this.toggleCollapse} style={text}>Sign in</Link></li>
                    <li className='nav-item'><Link className='nav-link' style={text} to='/register' onClick={this.toggleCollapse} style={text}>Sign up</Link></li>
                  </>}
              </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
