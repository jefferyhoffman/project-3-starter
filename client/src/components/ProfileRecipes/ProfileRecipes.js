import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Rating, Image, Responsive, Container, Button } from "semantic-ui-react";
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';

// const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;

class ProfileRecipes extends Component {
  static contextType = AuthContext;

  render() {
    console.log(this.props);
    const recipes = this.props.recipes.map((recipe) => {
      let link = "/recipe/" + recipe.id

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
                {recipe.categories.map((category) => category.category)}
              </span>
            </Card.Meta>
            <Card.Description>{recipe.description}</Card.Description>
            <Card.Meta>
              <span>Submitted by: {recipe.createdBy}</span>
            </Card.Meta>
          </Card.Content>
          <Button onClick={() => this.props.handleDelete(recipe.id)} className="delete">Delete</Button>          
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
          <Card.Group itemsPerRow={2}>{recipes}</Card.Group>
        </Responsive>
      </Container>
    );
  }
};
export default ProfileRecipes;
