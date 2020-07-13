import React, { Component } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

import API from "../../lib/API";
import "./CardLayout.css";

class CardLayout extends Component {
  state = {
    recipes: [],
    err: "",
  };

  componentDidMount() {
    API.Recipes.all()
      .then((response) => {
        this.setState({ recipes: response.data, err: "" });
      })
      .catch((err) => this.setState({ err: err.message }));
  }
  render() {
    return (
      <RecipeCard recipes={this.state.recipes} />
    );
  }
}

export default CardLayout;