import React, { Component } from 'react';
import { Button, Dropdown} from 'semantic-ui-react'
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

  dropdownEvent = event => {
    console.log(event.target.value)
  }

  render() {
    const { user } = this.context;
    const { isOpen } = this.state;

    const dropdownMenuClass = `dropdown-menu dropdown-menu-right ${isOpen && 'show'}`;


    
    return (
      <Button.Group>
        <Button>
          <Gravatar className="rounded-circle" email={user.email} size={30} /> {user.email}
        </Button>
        <Dropdown className="button icon">
          <Dropdown.Menu>
            <Dropdown.Item text="View My Profile" onClick={this.handleProfile} />
            <Dropdown.Item text="View My Recipes" onClick={this.handleRecipes} />
            <Dropdown.Item text="Logout" onClick={this.handleLogout} />
          </Dropdown.Menu>
        </Dropdown>
      </Button.Group>
      // <li className="nav-item dropdown">
      //   <button className="btn btn-link dropdown-toggle" onClick={this.toggleOpen} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //   </button>
      //   <div className={dropdownMenuClass} aria-labelledby="navbarDropdown">
      //     <div className="dropdown-item" onClick={this.handleLogout}>Logout</div>
      //   </div>
      // </li>
    );
  }
}

export default AuthDropdown;
