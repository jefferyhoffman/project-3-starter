import React, { Component } from 'react';

class Emoji extends Component {
    render() {
        return (
            <span
                className="emoji"
                role="img"
                aria-label={this.props.label ? this.props.label : ""}
                aria-hidden={this.props.label ? "false" : "true"}
            >
                {this.props.symbol}
            </span>
        )
    }
}

export default Emoji;