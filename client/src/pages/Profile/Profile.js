import React, { Component } from "react";
import { Card, Rating, Icon, Image, Container, Grid } from "semantic-ui-react";

import Gravatar from "react-gravatar";
import AuthContext from "../../contexts/AuthContext";

const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;


class Profile extends Component {
    static contextType = AuthContext;

    state = {};

    render() {
        const { user } = this.context;

        return (
            <Container>
                <Card fluid width={4}>
                    <Gravatar
                        className="ui medium centered image"
                        email="thomasjrideriii@gmail.com"
                        size="200"
                    />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name="user" />
                            22 Friends
                        </a>
                    </Card.Content>
                </Card>
                <Card.Group fluid width={8}>
                  
                </Card.Group>
            </Container>
        );
    }
}

export default Profile;
