import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import logo from './name.png'
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown'
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
    let {user} = this.context
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;
    
    return (
      <div className='Navigation App-nav'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <img className='navbar-brand' src={logo} alt='Small logo' id='nav-logo' />
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link active' to='/' className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} onClick={this.toggleCollapse}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact' className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} onClick={this.toggleCollapse}>Contact</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/services' className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"} onClick={this.toggleCollapse}>Services</Link>
              </li>
            </ul>
            <ul className='navbar-nav'>
              <li>{user && <AuthDropdown />}</li>
              <li className='nav-item fa fa-facebook'></li>
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
