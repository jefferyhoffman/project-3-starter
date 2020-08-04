import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Rating, Image, Responsive, Container, Button } from "semantic-ui-react";
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';

// const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;

class RecipeCard extends Component {
  static contextType = AuthContext;

  handleSave(id) {
    console.log(id);
    const { authToken } = this.context;
    API.Recipes.save(id, authToken)
      .then((response) => {
        this.setState({ recipes: response.data, err: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  }

  render() {
    const recipes = this.props.recipes.map((recipe) => {
      const { authToken } = this.context;
      let link = "/recipe/" + recipe.id
      let button;
      if (authToken) {
        button = <Button onClick={() => this.handleSave(recipe.id)} className="save">Save</Button>
      }

      return (
        <Card key={recipe.id}>
          <Image
            as={Link} to={link}
            src={recipe.image}
            wrapped
            ui={false}
            target="_blank"
          />
          <Card.Content as={Link} to={link}>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Meta>
              <span>
                {recipe.categories.map((category) => category.category + " ")}
              </span>
            </Card.Meta>
            <Card.Description>{recipe.description}</Card.Description>
            <Card.Meta>
              <span>Submitted by: {recipe.createdBy}</span>
            </Card.Meta>
          </Card.Content>
          {button}
          {/* <Card.Content>{extra}</Card.Content> */}
        </Card>
      );
    });

    return (
      <Container>
        <Responsive maxWidth="780">
          <Card.Group itemsPerRow={1}>{recipes}</Card.Group>
        </Responsive>
        <Responsive minWidth="781">
          <Card.Group itemsPerRow={3}>{recipes}</Card.Group>
        </Responsive>
      </Container>
    );
  }
};
export default RecipeCard;
