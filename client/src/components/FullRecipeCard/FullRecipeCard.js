import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import './FullRecipeCard.css';
import '../CardLayout/CardLayout';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';
import Emoji from '../Emoji/Emoji';

class FullRecipeCard extends Component {
  static contextType = AuthContext;

  handleSave(id) {
    console.log(id);
    const { authToken } = this.context;
    API.Recipes.save(id, authToken)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => this.setState({ err: err.message }));
  }

  handleReview(id) {
    console.log(id);
    const { authToken } = this.context;
    API.Reviews.save(id, authToken)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => this.setState({ err: err.message }));
  }

  render() {
    const { authToken } = this.context;
    let saveBtn;
    let reviewBtn;
    console.log(this.props)
    if (authToken) {
      saveBtn = <Button size="big" onClick={() => this.handleSave(this.props.recipeNum)} className="red save">
        <Emoji label="heart" symbol="❤" /> Save</Button>
      reviewBtn = <Button size="big" onClick={() => this.handleReview(this.props.recipeNum)} className="blue review">
        <Emoji label="comment" symbol="💬" /> Leave a Review</Button>
      }

    return (
      <Card fluid>
        <Image src={this.props.image} wrapped ui={false} />
        <Card.Content className="left">
          <h3>Cook Time: {this.props.cookTime}</h3>
          <h3>Prep Time: {this.props.prepTime}</h3>
          <h3>Servings: {this.props.servings}</h3>
        </Card.Content>
        {saveBtn} {reviewBtn}
      </Card>
    );
  }
};

export default FullRecipeCard;
