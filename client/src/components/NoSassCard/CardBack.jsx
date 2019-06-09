import React, { Component } from "react";

class CardBack extends Component {
    render(){
        return (
            <div className="row back" onClick={this.props.onClick}>{this.props.children}</div>
        )
    }
}

export default CardBack