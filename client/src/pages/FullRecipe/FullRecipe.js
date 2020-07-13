import React, { Component } from "react";
import { Grid, Header, Responsive, Image } from "semantic-ui-react";
import FullRecipeCard from "../../components/FullRecipeCard/FullRecipeCard";
import "./FullRecipe.css";
import API from "../../lib/API";



class FullRecipe extends Component {
    
  state = {
    recipe: {},
    err: ""
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    API.Recipes.byId(this.props.match.params.id)
    .then((response) => {
      this.setState({ recipes: response.data, err: "" })
      console.log(response.data)
    })
    .catch((err) => this.setState({ err: err.message }))
  }
  
  
    
  render(){
    return(

      <div>
        <Image centered src={require("../../assets/images/megabitesLogo.png")} />
        <Responsive maxWidth="1035">
          <Grid>
            <Grid.Row>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={14}>
                {/* <FullRecipeCard /> */}
                <div className="bg2">
                  <Header as="h3" className="bg2" style={{ fontSize: "2em" }}>
                    This will house the list of ingredients
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    <ul>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                    </ul>
                  </p>
                </div>
                <div className="bg">
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    This will house the actual recipe
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    This will be the cooking directions. We can give your company
                    superpowers to do things that they never thought possible. Let
                    us delight your customers and empower your needs... through pure
                    data analytics.
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
                {/* <FullRecipeCard /> */}
              </Grid.Column>
              <Grid.Column width={5}>
                <div className="bg">
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    This will house the list of ingredients
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    <ul>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                      <li>Ingredient</li>
                    </ul>
                  </p>
                </div>
                <div className="bg">
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    This will house the actual recipe
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    This will be the cooking directions. We can give your company
                    superpowers to do things that they never thought possible. Let
                    us delight your customers and empower your needs... through pure
                    data analytics.
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
  