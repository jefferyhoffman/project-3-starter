import React, { Component } from "react";




class CardFront extends Component {

    bookCoverStyle = {
        backgroundImage: `url(${this.props.imageURL})`,
        backgroundRepeat: 'no-repeat',
        background: 'contain'
    }
    render() {
        return (
            <div className="row front" style={{backgroundImage: 'url('+this.props.imageURL+')'}}onClick={this.props.onClick}></div>
        )
    }
}

export default CardFront