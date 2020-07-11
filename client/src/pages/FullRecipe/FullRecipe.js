import React from "react";
import { Grid, Header, Responsive, Image } from "semantic-ui-react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import "./FullRecipe.css";



const FullRecipe = () => (
    <div>
      <Image centered src={require("../../assets/images/megabitesLogo.png")} />
      <Responsive maxWidth="1035">
        <Grid>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={14}>
              <RecipeCard />
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
              <RecipeCard />
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
  );
  
  export default FullRecipe;
  