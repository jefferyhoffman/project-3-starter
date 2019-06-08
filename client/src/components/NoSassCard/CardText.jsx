import React, { Component } from "react";

class CardText extends Component {
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default CardText