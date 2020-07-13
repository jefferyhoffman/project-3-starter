import React, { Component } from "react";
import { Container, Grid, Responsive } from "semantic-ui-react";
import API from "../../lib/API";
import ProfileRecipe from "../../components/ProfileRecipes/ProfileRecipes";
import UserCard from "../../components/UserCard/UserCard";

import AuthContext from "../../contexts/AuthContext";

class Profile extends Component {
  static contextType = AuthContext;

  state = {
    recipes: [],
    err: "",
  };



  componentDidMount() {
    const { authToken } = this.context;

    API.Recipes.byUser(authToken)
      .then((response) => {
        this.setState({ recipes: response.data, err: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  }

  render() {
    //const { user } = this.context;

    return (
      <Container>
        <Responsive maxWidth="780">
          <UserCard />
          <ProfileRecipe recipes={this.state.recipes} />
        </Responsive>
        <Responsive minWidth="781">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={8}>
                <UserCard />
              </Grid.Column>
              <Grid.Column width={8}>
                <ProfileRecipe recipes={this.state.recipes} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </Container>
    );
  }
}

export default Profile;
