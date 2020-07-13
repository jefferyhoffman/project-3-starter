import React from "react";
import { Card, Image } from "semantic-ui-react";
import './FullRecipeCard.css';

const FullRecipeCard = (props) => (
    <Card fluid>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content className="left">
        <h3>Cook Time: {props.cookTime}</h3>
        <h3>Prep Time: {props.prepTime}</h3>
        <h3>Servings: {props.servings}</h3>
    </Card.Content>
  </Card>
);

export default FullRecipeCard;
