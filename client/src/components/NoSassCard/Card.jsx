import React, { Component } from "react";
import CardContent from "./CardContent";
import CardContainer from "./CardContainer";
import CardImage from "./CardImage";
import CardFront from "./CardFront";
import CardText from "./CardText";
import CardBack from "./CardBack";
import "./Card.css";

class NoSassCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isFlipped: false
  };

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const frontORback = this.state.isFlipped ? "flipped" : "";
    const { author, id, imageURL, series, synopsis, title } = this.props.info
    return (
      <CardContainer>
        <CardContent frontORback={frontORback} custom="cardHolder">
          <CardFront imageURL={imageURL} onClick={this.handleClick} />
          <CardBack onClick={this.handleClick}>
              <CardText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                autem ipsam impedit ipsum id ipsa eum, voluptatem aperiam quo,
                odio porro accusantium at officia magnam! Fugiat vero molestiae
                dolor corrupti. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Mollitia quia, ea obcaecati facere reiciendis
                nobis in harum cumque sed odit enim blanditiis ad sint
                consequatur praesentium error possimus libero tenetur.
              </CardText>
          </CardBack>
        </CardContent>
      </CardContainer>
    );
  }
}

export default NoSassCard;
