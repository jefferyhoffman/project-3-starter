import React from "react";
import { Card, Image } from "semantic-ui-react";
import './FullRecipeCard.css';

const FullRecipeCard = () => (
    <Card fluid>
    <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} />
    <Card.Content className="left">
        <h3>Cook Time: </h3>
        <h3>Prep Time: </h3>
        <h3>Servings: </h3>
    </Card.Content>
  </Card>
);

export default FullRecipeCard;
