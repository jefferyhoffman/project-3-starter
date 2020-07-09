import React, { Component } from "react";
import {
    Card,
    Rating,
    Icon,
    Image,
    Container,
    Grid,
    Sticky,
} from "semantic-ui-react";

import Gravatar from "react-gravatar";
import AuthContext from "../../contexts/AuthContext";

const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;

class Profile extends Component {
    static contextType = AuthContext;

    state = {
        user: {},
    };

    render() {
        const { user } = this.context;

        return (
            <Container>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Sticky context={this.contextRef}>
                                <Card fluid>
                                    <Gravatar
                                        className="ui medium centered image"
                                        email="thomasjrideriii@gmail.com"
                                        size="200"
                                    />
                                    <Card.Content>
                                        <Card.Header>Matthew</Card.Header>
                                        <Card.Meta>
                                            <span className="date">
                                                Joined in 2015
                                            </span>
                                        </Card.Meta>
                                        <Card.Description>
                                            Matthew is a musician living in
                                            Nashville.
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>
                                            <Icon name="user" />
                                            22 Friends
                                        </a>
                                    </Card.Content>
                                </Card>
                            </Sticky>
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <Card.Group itemsPerRow={2}>
                                <Card>
                                    <Image
                                        src={require("../../assets/images/burger1.jpg")}
                                        wrapped
                                        ui={false}
                                        as="a"
                                        href="https://www.thewholesomedish.com/the-best-classic-burger/"
                                        target="_blank"
                                    />
                                    <Card.Content>
                                        <Card.Header>Tasty Burger!</Card.Header>
                                        <Card.Meta>
                                            <span>Entree</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is one tasty burger. It is a
                                            heart attack in a bun! Easy to make
                                            with a relatively small list of
                                            ingredients. This is guaranteed to
                                            be a crowd pleaser!
                                        </Card.Description>
                                        <Card.Meta>
                                            <span>Submitted by: UserName</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content>{extra}</Card.Content>
                                </Card>
                                <Card>
                                    <Image
                                        src={require("../../assets/images/burger1.jpg")}
                                        wrapped
                                        ui={false}
                                        as="a"
                                        href="https://www.thewholesomedish.com/the-best-classic-burger/"
                                        target="_blank"
                                    />
                                    <Card.Content>
                                        <Card.Header>Tasty Burger!</Card.Header>
                                        <Card.Meta>
                                            <span>Entree</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is one tasty burger. It is a
                                            heart attack in a bun! Easy to make
                                            with a relatively small list of
                                            ingredients. This is guaranteed to
                                            be a crowd pleaser!
                                        </Card.Description>
                                        <Card.Meta>
                                            <span>Submitted by: UserName</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content>{extra}</Card.Content>
                                </Card>
                                <Card>
                                    <Image
                                        src={require("../../assets/images/burger1.jpg")}
                                        wrapped
                                        ui={false}
                                        as="a"
                                        href="https://www.thewholesomedish.com/the-best-classic-burger/"
                                        target="_blank"
                                    />
                                    <Card.Content>
                                        <Card.Header>Tasty Burger!</Card.Header>
                                        <Card.Meta>
                                            <span>Entree</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is one tasty burger. It is a
                                            heart attack in a bun! Easy to make
                                            with a relatively small list of
                                            ingredients. This is guaranteed to
                                            be a crowd pleaser!
                                        </Card.Description>
                                        <Card.Meta>
                                            <span>Submitted by: UserName</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content>{extra}</Card.Content>
                                </Card>
                                <Card>
                                    <Image
                                        src={require("../../assets/images/burger1.jpg")}
                                        wrapped
                                        ui={false}
                                        as="a"
                                        href="https://www.thewholesomedish.com/the-best-classic-burger/"
                                        target="_blank"
                                    />
                                    <Card.Content>
                                        <Card.Header>Tasty Burger!</Card.Header>
                                        <Card.Meta>
                                            <span>Entree</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is one tasty burger. It is a
                                            heart attack in a bun! Easy to make
                                            with a relatively small list of
                                            ingredients. This is guaranteed to
                                            be a crowd pleaser!
                                        </Card.Description>
                                        <Card.Meta>
                                            <span>Submitted by: UserName</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content>{extra}</Card.Content>
                                </Card>
                                <Card>
                                    <Image
                                        src={require("../../assets/images/burger1.jpg")}
                                        wrapped
                                        ui={false}
                                        as="a"
                                        href="https://www.thewholesomedish.com/the-best-classic-burger/"
                                        target="_blank"
                                    />
                                    <Card.Content>
                                        <Card.Header>Tasty Burger!</Card.Header>
                                        <Card.Meta>
                                            <span>Entree</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is one tasty burger. It is a
                                            heart attack in a bun! Easy to make
                                            with a relatively small list of
                                            ingredients. This is guaranteed to
                                            be a crowd pleaser!
                                        </Card.Description>
                                        <Card.Meta>
                                            <span>Submitted by: UserName</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content>{extra}</Card.Content>
                                </Card>
                                <Card>
                                    <Image
                                        src={require("../../assets/images/burger1.jpg")}
                                        wrapped
                                        ui={false}
                                        as="a"
                                        href="https://www.thewholesomedish.com/the-best-classic-burger/"
                                        target="_blank"
                                    />
                                    <Card.Content>
                                        <Card.Header>Tasty Burger!</Card.Header>
                                        <Card.Meta>
                                            <span>Entree</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            This is one tasty burger. It is a
                                            heart attack in a bun! Easy to make
                                            with a relatively small list of
                                            ingredients. This is guaranteed to
                                            be a crowd pleaser!
                                        </Card.Description>
                                        <Card.Meta>
                                            <span>Submitted by: UserName</span>
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content>{extra}</Card.Content>
                                </Card>
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Profile;
