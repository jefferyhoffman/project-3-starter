import React, { Component } from "react";
import "./Card.css";

class CardContainer extends Component {
    render() {
        return(
            <div className="container cardContainer">
                {this.props.children}
            </div>
        )
    }
}

export default CardContainer;