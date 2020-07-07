import React from "react";
import { Card, Rating, Container, Image, Icon } from "semantic-ui-react";
import "./CardLayout.css";

const extra = <Rating icon="star" defaultRating={3} maxRating={5} />;
//console.log(window.innerWidth) use this possibly in home.js to 

const CardLayout = () => (
  <Container className="test">
    <Card.Group className="portfolioMargin" itemsPerRow={3}>
      <Card
        className="portfolioMargin"
        image={require("../../assets/images/burger1.jpg")}
        header="Tasty Burger!"
        meta="Entree"
        description="This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!"
        extra={extra}
      />
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
      <Card>
        <Image src={require("../../assets/images/burger1.jpg")} wrapped ui={false} as='a' href="https://www.thewholesomedish.com/the-best-classic-burger/" target="_blank" />
        <Card.Content>
          <Card.Header>Tasty Burger!</Card.Header>
          <Card.Meta>
            <span>Entree</span>
          </Card.Meta>
          <Card.Description>
          This is one tasty burger. It is a heart attack in a bun! Easy to make with a relatively small list of ingredients. This is guaranteed to be a crowd pleaser!
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: UserName</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
);

export default CardLayout;
