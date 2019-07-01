import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const text = {
  color: 'white',
  //  color: 'black',
}


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
        <button className="btn btn-link dropdown-toggle" style={text} onClick={this.toggleOpen} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="rounded-circle" email={user.email} size={30} /><strong>{user.email}</strong>
        </button>
        <Link to='/'><div className={dropdownMenuClass} style={{ position: 'static', marginLeft: '22%', opacity: '.25' }} aria-labelledby="navbarDropdown">
          <div className="dropdown-item" onClick={this.handleLogout}><strong>Sign out</strong></div>
        </div></Link>
      </li >
    );
  }
}

export default AuthDropdown;
