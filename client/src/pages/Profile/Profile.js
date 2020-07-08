import React, { Component } from "react";
import { Card, Icon, Image, Container } from "semantic-ui-react";

import Gravatar from "react-gravatar";
import AuthContext from "../../contexts/AuthContext";

class Profile extends Component {
    static contextType = AuthContext;

    state ={

    }

    render() {
        const { user } = this.context;

        return(
            <Container>
                <Card fluid>
                  <Gravatar className="ui medium centered image" email="thomasjrideriii@gmail.com" size="200"/>
                  <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                    <Card.Meta>
                      <span className='date'>Joined in 2015</span>
                    </Card.Meta>
                    <Card.Description>
                      Matthew is a musician living in Nashville.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name='user' />
                      22 Friends
                    </a>
                  </Card.Content>
                </Card>
            </Container>
        )
    }
}

export default Profile;
