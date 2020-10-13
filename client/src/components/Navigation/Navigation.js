import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../styles/logo.png';
import Menu from '../Menu/Menu'

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

const styles = {
  navbar: {
    height: "100px",
    opacity: "85%"
  }
}

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
    const targetclassName = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerclassName = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div classNameName='Navigation'>

        <nav className="navbar is-white" role="navigation" aria-label="main navigation" style={styles.navbar}>
          <div className="navbar-brand">
            <a className="navbar-item" to="#">
              <img src={logo} />
            </a>
          </div>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>


          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to='/' onClick={this.toggleCollapse}>
                Home
              </Link>

              <div class="navbar-item has-dropdown is-hoverable">
                {user &&
                  <Link className="navbar-link" to='/profile' onClick={this.toggleCollapse}>
                    Profile
             </Link>}
                <hr class="navbar-divider" />
                <div class="navbar-dropdown">
                  <Link className="navbar-item" to='/profile' onClick={this.toggleCollapse} >Profile</Link>
                  <Link className="navbar-item" to='/community' onCick={this.toggleCollapse} >Community</Link>



                  <hr class="navbar-divider" />
                  <Link className="navbar-item" to='/affirmations' onClick={this.toggleCollapse} > Affirmations</Link>
                  <Link className="navbar-item" to="/mantras" onClick={this.toggleCollapse} >Mantras</Link>
                  <Link className="navbar-item" to="/jokes" onClick={this.toggleCollapse} >Jokes</Link>


                  <hr class="navbar-divider" />

                  <a><Link className="navbar-item" to='/comedy' onClick={this.toggleCollapse} >Comedian Corner</ Link></a>
                  <a><Link className="navbar-item" to='/bob' onClick={this.toggleCollapse} >Bob Ross Channel</ Link></a>
                  <Link className="navbar-item" to='/breathing' onClick={this.toggleCollapse} >Breathing Exercises</ Link>
                  <Link className="navbar-item" to='/odd' onClick={this.toggleCollapse} >Oddly Satisfying</ Link>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Resources</a>

                <div class="navbar-dropdown">
                  <Link class="navbar-item" to='/hotline' onClick={this.toggleCollapse}>
                    Hotlines</Link>
                  <Link class="navbar-item" to='/clinic' onClick={this.toggleCollapse}>
                    Clinics</Link>
                </div>
              </div>


            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button">
                    {user
                      ? <AuthDropdown onClick={this.toggleCollapse} />
                      : <Link to='/login' onClick={this.toggleCollapse}><strong>Sign up/Login</strong></Link>}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;

  // <nav classNameName='navbar navbar-brand'>
  //         <Link classNameName='navbar-brand' to='#'>Project 3</Link>
  //         <button classNameName={togglerclassName} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
  //           <span classNameName='navbar-toggler-icon'></span>
  //         </button>

  //         <div classNameName={targetclassName} id='navbarSupportedContent'>
  //           <ul classNameName='navbar-nav mr-auto'>
  //             <li classNameName='nav-item'>
  //               <Link classNameName='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
  //             </li>
  //             {user &&
  //               <li classNameName='nav-item'>
  //                 <Link classNameName='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
  //               </li>}
  //           </ul>
  //           <ul classNameName='navbar-nav'>
  //             {user
  //               ? <AuthDropdown onClick={this.toggleCollapse} />
  //               : <li classNameName='nav-item'><Link classNameName='nav-link' to='/login' onClick={this.toggleCollapse}>Login/Register</Link></li>}
  //           </ul>
  //         </div>
  //       </nav>