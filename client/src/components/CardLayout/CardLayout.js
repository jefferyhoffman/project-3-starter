import React, { Component } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

import "./CardLayout.css";

class CardLayout extends Component {
  // state = {
  //   recipes: [],
  //   err: "",
  // };

  // componentDidMount() {
  //   API.Recipes.all()
  //     .then((response) => {
  //       this.setState({ recipes: response.data, err: "" });
  //     })
  //     .catch((err) => this.setState({ err: err.message }));
  // }

  // filteredList = newList => {
  //   console.log(newList)
  // }

  render() {
    return (
      //may need a ternary here or if/else.... to overwrite the componentDidMount with the new array items.

      <RecipeCard recipes={this.props.recipes} />
    );
  }
}

export default CardLayout;
