import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container } from "semantic-ui-react";
import RecipeSubDD from "../RecipeSubDD/RecipeSubDD";
import AuthContext from "../../contexts/AuthContext";
import API from "../../lib/API";
import "./RecipeForm.css";

class RecipeForm extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    title: "",
    image: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    directions: "",
    categories: [],
    ingredients: [],
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const { authToken } = this.context;

    const {
      title,
      image,
      description,
      prepTime,
      cookTime,
      servings,
      directions,
      categories,
      ingredients,
    } = this.state;

    API.Recipes.create(
      authToken,
      title,
      image,
      description,
      prepTime,
      cookTime,
      servings,
      directions,
      categories,
      ingredients
    )
      .then((response) => response.data)
      .then(() => {
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));

    event.preventDefault();
  };

  render() {
    const {
      redirectToReferrer,
      title,
      image,
      description,
      prepTime,
      cookTime,
      servings,
      directions,
      categories,
      ingredients,
    } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={"/profile"} />;
    }

    return (
      <Container className="bg">
        <h1>Submit a recipe!</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required>
            <label>Recipe Title</label>
            <input
              placeholder="Recipe Title"
              className="form-control"
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Image URL of the Dish</label>
            <input
              placeholder="Image URL"
              className="form-control"
              id="image"
              type="text"
              name="image"
              value={image}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field required>
            <label>Description</label>
            <input
              placeholder="Description"
              className="form-control"
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipe Prep Time</label>
            <input
              placeholder="Prep Time"
              className="form-control"
              id="prepTime"
              type="text"
              name="prepTime"
              value={prepTime}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipe Cook Time</label>
            <input
              placeholder="Cook Time"
              className="form-control"
              id="cookTime"
              type="text"
              name="cookTime"
              value={cookTime}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Number of servings</label>
            <input
              placeholder="Servings"
              className="form-control"
              id="servings"
              type="text"
              name="servings"
              value={servings}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.TextArea
            required
            label="Cooking Directions"
            placeholder="Directions"
            className="form-control"
            id="directions"
            type="text"
            name="directions"
            value={directions}
            onChange={this.handleInputChange}
          />
          <RecipeSubDD 
             id="categories"
             value={[{categories}]}
             onChange={this.handleInputChange}
          />
          <Form.Field required>
            <label>Ingredients</label>
            <input
              placeholder="Ingredients"
              className="form-control"
              id="ingredients"
              type="text"
              name="ingredients"
              value={ingredients}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button type="submit">Submit!</Button>
        </Form>
      </Container>
    );
  }
}

export default RecipeForm;
