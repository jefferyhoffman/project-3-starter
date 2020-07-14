import React, { Component } from "react";
import { Grid, Header, Responsive, Image } from "semantic-ui-react";
import FullRecipeCard from "../../components/FullRecipeCard/FullRecipeCard";
import "./FullRecipe.css";
import API from "../../lib/API";



class FullRecipe extends Component {
    
  state = {
    recipe: [],
    err: ""
  }

  componentDidMount() {
    //console.log(this.props.match.params.id)
    API.Recipes.byId(this.props.match.params.id)
    .then((response) => {
      this.setState({ recipe: response.data[0], err: "" })
      //console.log(response.data[0])
    })
    .catch((err) => this.setState({ err: err.message }))
  }
  
  
    
  render(){
    //console.log(this.state.recipe.ingredients)
    return(

      <div>
        <Image centered src={require("../../assets/images/megabitesLogo.png")} />
        <Responsive maxWidth="1035">
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={14}>
                <FullRecipeCard 
                image={this.state.recipe.image}
                cookTime={this.state.recipe.cookTime}
                prepTime={this.state.recipe.prepTime}
                servings={this.state.recipe.servings}
                />
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
                image={this.state.recipe.image}
                cookTime={this.state.recipe.cookTime}
                prepTime={this.state.recipe.prepTime}
                servings={this.state.recipe.servings}
                />
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
  