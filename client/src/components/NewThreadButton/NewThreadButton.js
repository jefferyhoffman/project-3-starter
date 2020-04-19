import './NewThreadButton.css';
import React, { Component } from 'react';

class NewThreadButton extends Component {
    render() {
        return(
            <div className="threadButton">
                <form>
                <div className="new-thread-title">
                    Here you put in your title
                </div>
                <div className="new-thread-body">
                    Here you put in your body
                </div>
                </form>
            </div>
        )
    }
}

export default NewThreadButton;