import React, { Component } from "react";
import { Grid, Header, Responsive, Image } from "semantic-ui-react";
import FullRecipeCard from "../../components/FullRecipeCard/FullRecipeCard";
import ReviewCard from "../../components/ReviewCard/ReviewCard"
import "./FullRecipe.css";
import API from "../../lib/API";



class FullRecipe extends Component {

  state = {
    recipe: [],
    reviews: [],
    err: ""
  }

  componentDidMount() {
    let recipe
    //console.log(this.props.match.params.id)
    API.Recipes.byId(this.props.match.params.id)
      .then((recipe) => {
        this.setState({ recipe: recipe.data[0], err: "" })
      })
      .then(API.Reviews.byId(this.props.match.params.id)
      .then((reviews) => {
        recipe = this.state.recipe
        this.setState({ recipe: recipe, reviews: reviews.data, err: "" })
      } ))
      .catch((err) => this.setState({ err: err.message }))
  }



  render() {
    // console.log(this.state.recipe.id)
    return (

      <div>
        <Image centered src={require("../../assets/images/megabitesLogo.png")} />
        <Responsive maxWidth="1035">
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={14}>
                <FullRecipeCard
                  recipeNum={this.state.recipe.id}
                  image={this.state.recipe.image}
                  cookTime={this.state.recipe.cookTime}
                  prepTime={this.state.recipe.prepTime}
                  servings={this.state.recipe.servings}
                />
                <ReviewCard reviews={this.state.reviews} />
                <div className="bg2">
                  <Header as="h3" className="bg2" style={{ fontSize: "2em" }}>
                    Ingredients
                  </Header>
                  <div style={{ fontSize: "1.33em" }}>
                    <ul>
                      {this.state.recipe.ingredients ? this.state.recipe.ingredients.map((ingredient) => {
                        return <li key={ingredient.id}>{ingredient.ingredient}</li>
                      }) : "Loading"}
                    </ul>
                  </div>
                </div>
                <div className="bg">
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    {this.state.recipe.title}
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    {this.state.recipe.directions}
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column width={1}></Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive minWidth="1034">
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}></Grid.Column>
              <Grid.Column width={5}>
                <FullRecipeCard
                  recipeNum={this.state.recipe.id}
                  image={this.state.recipe.image}
                  cookTime={this.state.recipe.cookTime}
                  prepTime={this.state.recipe.prepTime}
                  servings={this.state.recipe.servings}
                />
                <ReviewCard reviews={this.state.reviews} />
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="bg">
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Ingredients
                  </Header>
                  <div style={{ fontSize: "1.33em" }}>
                    <ul>
                      {this.state.recipe.ingredients ? this.state.recipe.ingredients.map((ingredient) => {
                        return <li key={ingredient.id}>{ingredient.ingredient}</li>
                      }) : "Loading"}
                    </ul>
                  </div>
                </div>
                <div className="bg">
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    {this.state.recipe.title}
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    {this.state.recipe.directions}
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column width={3}></Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>

    )
  }

}
export default FullRecipe;
