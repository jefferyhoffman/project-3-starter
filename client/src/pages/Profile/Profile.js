import React, { Component } from "react";
import {
  Card,
//   Rating,
//   Icon,
//   Image,
  Container,
  Grid,
  Sticky,
} from "semantic-ui-react";
import API from "../../lib/API"
import RecipeCard from "../../components/RecipeCard/RecipeCard"

import Gravatar from "react-gravatar";
import AuthContext from "../../contexts/AuthContext";


class Profile extends Component {
  static contextType = AuthContext;

  state = {
    recipes: [],
    err: ""
  };


//   componentDidMount() {
//     API.Recipes.all()
//     .then(response => {
//       this.setState({recipes: response.data, err: ""})
//     })
//     .catch(err => this.setState({ err: err.message }))
//   };
  


  render() {
    const { user } = this.context;
    console.log(user)

    return (
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
                <Card fluid>
                  <Gravatar
                    className="ui medium centered image"
                    email="thomas@test.com"
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
            </Grid.Column>

            <Grid.Column width={8}>
              <Card.Group itemsPerRow={2}>
                {this.state.recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    categories={recipe.categories}
                    createdBy={recipe.createdBy}
                    description={recipe.description}
                    image={recipe.image}
                  />
                ))}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Profile;
