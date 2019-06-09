import React, { Component } from "react";
import "./Card.css";

class CardContent extends Component {
    render() {
        return(

            <div className={this.props.custom + " " + this.props.frontORback}>
                {this.props.children}
            </div>
        )
    }
}

export default CardContent;