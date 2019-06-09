import React, { Component } from "react";

class CardImage extends Component {
    render() {
        return (
            <img className="profileImage" src={this.props.src} alt={this.props.alt ? this.props.alt : "profile image"}></img>
        )
    }
}

export default CardImage