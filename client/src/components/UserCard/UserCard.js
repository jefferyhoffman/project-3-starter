import React, { Component } from 'react';
import { Button, Dropdown, Card} from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom';

import Gravatar from 'react-gravatar';

import AuthContext from '../../contexts/AuthContext';

class UserCard extends Component {
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



    
    return (
        <Card fluid>
        <Gravatar
          className="ui medium centered image"
          email={user.email}
          size={200}
        />
        <Card.Content>
          <Card.Header>GARBAGE DATA</Card.Header>
          <Card.Meta>
            User number ###
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default UserCard;
