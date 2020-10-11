import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';

import AuthContext from '../../contexts/AuthContext';

class AuthDropdown extends Component {
  static contextType = AuthContext;

  state = {
    isOpen: false
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout = () => {
    this.context.onLogout();
    this.props.onClick();
  }

  render() {
    const { user } = this.context;
    const { isOpen } = this.state;

    const dropdownMenuClass = `navbar-dropdownis-right ${isOpen && 'show'}`;

    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-dropdown" onClick={this.toggleOpen} 
        id="navbarDropdown" 
        data-toggle="dropdown" 
        aria-haspopup="true" 
        aria-expanded="false">
          {/* <Gravatar className="rounded-circle" email={user.email} size={30} /> {user.email} */}
        </a>
        <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
          <div className="navbar-item" onClick={this.handleLogout}>Logout</div>
        </div>
      </div>
    );
  }
}

export default AuthDropdown;
