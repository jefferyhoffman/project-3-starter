import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

import Gravatar from 'react-gravatar';

import AuthContext from '../../contexts/AuthContext';

class UserCard extends Component {
  static contextType = AuthContext;

  render() {
    const { user } = this.context;

    
    return (
        <Card fluid>
        <Gravatar
          className="ui medium centered image"
          email={user ? user.email : null}
          size={200}
        />
        <Card.Content>
          <Card.Header>{user ? user.firstName : null} {user? user.lastName : "Loading"}</Card.Header>
          <Card.Meta>
            User Number: {user ? user.id: "###"}
          </Card.Meta>
          <Card.Description>
            Username: {user ? user.username : "User"}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default UserCard;
