import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../cssPages/images/gslogo.jpg';
import '../Navigation/style.css';

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
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          {user
                ? <>
                <Link className='navbar-brand' to='/clienthome'><img src={logo} width="100" height="30" className="d-inline-block align-top" alt=""/></Link>
                </>
                :
                <>
                <Link className='navbar-brand' to='/'><img src={logo} width="70" height="30" className="d-inline-block align-top" alt=""/></Link>
                </>
              }
          <button className={togglerClass} onClick={this.toggleCollapse} id="logo" data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
              {user
                ? <>
                <Link className='nav-link text-info font-weight-bold' to='/clienthome' onClick={this.toggleCollapse}>Home</Link>
                </>
                :
                <>
                <Link className='nav-link text-info font-weight-bold' to='/' onClick={this.toggleCollapse}>Home</Link>
                </>
              }
              </li>
              {user &&
                <li className='nav-item'>
                  {/* <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link> */}
                </li>}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <>
                  {/* <li className='nav-item'><Link className='nav-link' to='/scheduling' onClick={this.toggleCollapse}>Scheduling</Link></li> */}
                  <AuthDropdown onClick={this.toggleCollapse} />
                </>
                :
                <>
                  <li className='nav-item'><Link className='nav-link text-success font-weight-bold' to='/login' onClick={this.toggleCollapse}>Login</Link></li>
                  <li className='nav-item'><Link className='nav-link text-primary font-weight-bold' to='/register' onClick={this.toggleCollapse}>Register</Link></li>
                  </>}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
