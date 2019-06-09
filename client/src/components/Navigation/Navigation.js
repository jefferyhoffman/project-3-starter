import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/navigation.css';
import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';
import Logo from "../../pages/Images/Logo.png";



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
        <Link  to='/' className='logoLink'><img className='logo1'src={Logo} alt="My logo" /></Link>
        <Link  to='/' className='logoLink'><h1 className="headermain">DrinkStation</h1></Link>
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              {/* {user &&
                <li className='nav-item'>
                  <Link className='nav-link' style={text} to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>} */}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <>
                  {/* <li className='nav-item'>
                    <Link className='nav-link' style={text} to='/' onClick={this.toggleCollapse}>Home</Link>
                  </li> */}
                  <li className='nav-item'>
                    <Link className='nav-link' style={text} to='/featured' onClick={this.toggleCollapse}>Featured</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' style={text} to='/create' onClick={this.toggleCollapse}>Create</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' style={text} to='/search' onClick={this.toggleCollapse}>Search</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' style={text} to='/view' onClick={this.toggleCollapse}>Drinks</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' style={text} to='/mydrinks' onClick={this.toggleCollapse}>Creations</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' style={text} to='/about' onClick={this.toggleCollapse}>About</Link>
                  </li>
                  <AuthDropdown onClick={this.toggleCollapse} />
                </>
                : <>
                  <li className='nav-item'><Link className='nav-link' style={text} to='/login' onClick={this.toggleCollapse} style={text}>Sign in</Link></li>
                  {/* <li className='nav-item'><Link className='nav-link' style={text} to='/register' onClick={this.toggleCollapse} style={text}>Sign up</Link></li> */}
                </>}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;