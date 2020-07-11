import React from "react";
import {Card, Rating, Image} from "semantic-ui-react"


const extra = <Rating icon="star" defaultRating={3} maxRating={5} />

const RecipeCard = (props) => (
    <Card>
        <Image src={props.image} wrapped ui={false} as='a' href={props.image} target="_blank" />
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Meta>
            <span>{props.category}</span>
          </Card.Meta>
          <Card.Description>
          {props.description}
          </Card.Description>
          <Card.Meta>
            <span>Submitted by: {props.user}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          {extra}
        </Card.Content>
      </Card>
)

export default RecipeCard;