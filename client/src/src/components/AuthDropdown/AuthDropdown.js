import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${isOpen && 'show'}`;

    return (
      <li className="nav-item dropdown">
      <button className="btn btn-link dropdown-toggle" onClick={this.toggleOpen} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div className="rounded-circle" name={user.name} size={30} /> {user.name}
      </button>
      <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
        <div className="dropdown-item" onClick={this.handleLogout}>Logout</div>
      </div>
    </li>

    );
  }
}

export default AuthDropdown;
