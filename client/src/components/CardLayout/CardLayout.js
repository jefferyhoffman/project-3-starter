import React from "react";
import { Card, Rating, Container } from "semantic-ui-react";
import "./CardLayout.css";

const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;

const CardLayout = () => (
  <Container className="test">
    <Card.Group className ="portfolioMargin" itemsPerRow={2}>
      <Card
        className="portfolioMargin"
        image={require("../../assets/images/burger1.jpg")}
        header="Tasty Burger!"
        meta="Entree"
        description="This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!"
        extra={extra}
      />
      <Card
        className="portfolioMargin"
        image={require("../../assets/images/burger1.jpg")}
        header="Tasty Burger!"
        meta="Entree"
        description="This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!"
        extra={extra}
      />
      <Card
        className="portfolioMargin"
        image={require("../../assets/images/burger1.jpg")}
        header="Tasty Burger!"
        meta="Entree"
        description="This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!"
        extra={extra}
      />
      <Card
        className="portfolioMargin"
        image={require("../../assets/images/burger1.jpg")}
        header="Tasty Burger!"
        meta="Entree"
        description="This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!"
        extra={extra}
      />
      <Card
        className="portfolioMargin"
        image={require("../../assets/images/burger1.jpg")}
        header="Tasty Burger!"
        meta="Entree"
        description="This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!"
        extra={extra}
      />
      <Card
        className="portfolioMargin"
        image={require("../../assets/images/burger1.jpg")}
        header="Tasty Burger!"
        meta="Entree"
        description="This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!"
        extra={extra}
      />
    </Card.Group>
  </Container>
);

export default CardLayout;